import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Captions,
  Check,
  Loader2,
  Maximize,
  Minimize,
  Pause,
  Play,
  Settings2,
  Timer,
  X,
} from "lucide-react";
import { enterCinemaMode, exitCinemaMode } from "@/lib/cinema-mode";
import type { SubtitleTrack, VideoQuality } from "@/lib/types";
import { cn } from "@/lib/utils";

export interface VideoPlayerProps {
  title: string;
  qualities: VideoQuality[];
  subtitles: SubtitleTrack[];
  poster?: string;
  /** Resume position in seconds (from watch history). */
  resumeAt?: number | undefined;
  /** Called (throttled) while playing so the page can persist history. */
  onProgress?: ((positionSec: number, durationSec: number) => void) | undefined;
  /** Optional back handler to smoothly exit cinema mode and navigate back */
  onBack?: (() => void) | undefined;
  /** Automatically trigger cinema fullscreen & landscape mode (default: true) */
  autoCinema?: boolean | undefined;
}

function formatTime(sec: number): string {
  if (!Number.isFinite(sec)) return "0:00";
  const s = Math.floor(sec % 60);
  const m = Math.floor((sec / 60) % 60);
  const h = Math.floor(sec / 3600);
  return h > 0
    ? `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
    : `${m}:${String(s).padStart(2, "0")}`;
}

/** Keep the original cue times once, then shift cues by the current offset. */
function applySubtitleOffset(
  track: TextTrack,
  offset: number,
  originals: Map<TextTrackCue, [number, number]>,
) {
  const cues = track.cues;
  if (!cues || cues.length === 0) return false;
  for (let i = 0; i < cues.length; i++) {
    const cue = cues[i]!;
    if (!originals.has(cue)) originals.set(cue, [cue.startTime, cue.endTime]);
    const [start, end] = originals.get(cue)!;
    cue.startTime = Math.max(0, start + offset);
    cue.endTime = Math.max(0, end + offset);
  }
  return true;
}

export function VideoPlayer({
  title,
  qualities,
  subtitles,
  poster,
  resumeAt,
  onProgress,
  onBack,
  autoCinema = true,
}: VideoPlayerProps) {
  const [quality, setQuality] = useState(qualities[0]?.label ?? "");
  const currentUrl = qualities.find((q) => q.label === quality)?.url ?? qualities[0]?.url ?? "";
  const [subIndex, setSubIndex] = useState(-1);
  const [offset, setOffset] = useState(0);

  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const pendingSeekRef = useRef<number | null>(null);
  const cueOriginalsRef = useRef(new Map<TextTrackCue, [number, number]>());
  const resumeAppliedRef = useRef(false);
  const lastSavedRef = useRef(0);

  const [playing, setPlaying] = useState(false);
  const [waiting, setWaiting] = useState(true);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [resumeNote, setResumeNote] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [panel, setPanel] = useState<"none" | "quality" | "subs">("none");

  /* --- Back / Exit Cinema handler --- */
  const handleBack = useCallback(() => {
    void exitCinemaMode();
    if (onBack) {
      onBack();
    } else if (typeof window !== "undefined" && window.history.length > 1) {
      window.history.back();
    }
  }, [onBack]);

  /* --- Quality switching: keep position, swap source --- */
  const pickQuality = useCallback(
    (label: string) => {
      setPanel("none");
      if (label === quality) return;
      const v = videoRef.current;
      if (v) pendingSeekRef.current = v.currentTime;
      setQuality(label);
    },
    [quality],
  );

  useEffect(() => {
    const v = videoRef.current;
    if (!v || !currentUrl) return;
    const seekTo = pendingSeekRef.current;
    pendingSeekRef.current = null;
    if (seekTo != null && seekTo > 0) {
      const onMeta = () => {
        v.currentTime = seekTo;
        void v.play().catch(() => {});
      };
      v.addEventListener("loadedmetadata", onMeta, { once: true });
    }
    v.load();
  }, [currentUrl]);

  /* --- Basic media state --- */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onWaiting = () => setWaiting(true);
    const onReady = () => setWaiting(false);
    const onTime = () => {
      setCurrent(v.currentTime);
      if (onProgress && v.currentTime - lastSavedRef.current >= 5) {
        lastSavedRef.current = v.currentTime;
        onProgress(v.currentTime, v.duration || 0);
      }
    };
    const onMeta = () => {
      setDuration(v.duration || 0);
      setWaiting(false);
      if (!resumeAppliedRef.current && resumeAt && resumeAt > 5 && v.duration > resumeAt + 10) {
        resumeAppliedRef.current = true;
        v.currentTime = resumeAt;
        setResumeNote(true);
      }
    };
    const onError = () =>
      setError("تعذّر تشغيل الفيديو. تحقّق من اتصالك بالإنترنت أو جرّب جودة أخرى.");

    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("waiting", onWaiting);
    v.addEventListener("playing", onReady);
    v.addEventListener("canplay", onReady);
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("loadedmetadata", onMeta);
    v.addEventListener("error", onError);
    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("waiting", onWaiting);
      v.removeEventListener("playing", onReady);
      v.removeEventListener("canplay", onReady);
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("loadedmetadata", onMeta);
      v.removeEventListener("error", onError);
    };
  }, [onProgress, resumeAt]);

  /* --- Subtitle track selection --- */
  const offsetRef = useRef(offset);
  useEffect(() => {
    offsetRef.current = offset;
  }, [offset]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const tracks = Array.from(v.textTracks).filter((t) => t.kind === "subtitles");
    tracks.forEach((t, i) => {
      t.mode = i === subIndex ? "showing" : "disabled";
    });
    const track = subIndex >= 0 ? tracks[subIndex] : undefined;
    if (!track) return;
    let tries = 0;
    let cancelled = false;
    const tick = () => {
      if (cancelled) return;
      if (track.cues && track.cues.length > 0) {
        applySubtitleOffset(track, offsetRef.current, cueOriginalsRef.current);
        return;
      }
      if (++tries < 20) setTimeout(tick, 150);
    };
    tick();
    return () => {
      cancelled = true;
    };
  }, [subIndex, currentUrl]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const track = Array.from(v.textTracks).find(
      (t) => t.kind === "subtitles" && t.mode === "showing",
    );
    if (!track) return;
    applySubtitleOffset(track, offset, cueOriginalsRef.current);
  }, [offset]);

  /* --- Automatic Cinema Mode (Fullscreen + Landscape orientation) --- */
  useEffect(() => {
    let unmounted = false;

    const onChange = () => {
      const doc = document as Document & {
        webkitFullscreenElement?: Element | null;
        mozFullScreenElement?: Element | null;
      };
      const isFs = Boolean(
        doc.fullscreenElement || doc.webkitFullscreenElement || doc.mozFullScreenElement,
      );
      setFullscreen(isFs);

      if (!isFs && !unmounted) {
        // Unlock screen orientation when leaving fullscreen
        void exitCinemaMode();
      }
    };

    document.addEventListener("fullscreenchange", onChange);
    document.addEventListener("webkitfullscreenchange", onChange);
    document.addEventListener("mozfullscreenchange", onChange);

    // If autoCinema is enabled, automatically engage cinema mode on mount
    if (autoCinema && wrapRef.current) {
      void enterCinemaMode(wrapRef.current);
    }

    return () => {
      unmounted = true;
      document.removeEventListener("fullscreenchange", onChange);
      document.removeEventListener("webkitfullscreenchange", onChange);
      document.removeEventListener("mozfullscreenchange", onChange);
      // Cleanly unlock orientation and exit fullscreen on unmount
      void exitCinemaMode();
    };
  }, [autoCinema]);

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      void exitCinemaMode();
    } else if (wrapRef.current) {
      void enterCinemaMode(wrapRef.current);
    }
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      // If not yet fullscreen and autoCinema is requested, engage cinema mode on user tap
      if (autoCinema && !document.fullscreenElement && wrapRef.current) {
        void enterCinemaMode(wrapRef.current);
      }
      void v.play().catch(() => {});
    } else {
      v.pause();
    }
  };

  const seek = (value: number) => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = value;
    setCurrent(value);
  };

  const activeSub = subIndex >= 0 ? subtitles[subIndex] : undefined;

  return (
    <div className="select-none">
      <div
        ref={wrapRef}
        dir="ltr"
        className={cn(
          "relative overflow-hidden bg-black shadow-2xl transition-all",
          fullscreen
            ? "fixed inset-0 z-50 rounded-none border-none size-full max-w-none max-h-none flex items-center justify-center"
            : "rounded-2xl border border-border",
        )}
      >
        <video
          ref={videoRef}
          src={currentUrl}
          poster={poster}
          preload="metadata"
          playsInline
          controls={false}
          className={cn(
            "w-full bg-black object-contain",
            fullscreen ? "h-full max-h-screen" : "aspect-video",
          )}
        >
          {subtitles.map((sub) => (
            <track
              key={sub.src}
              kind="subtitles"
              src={sub.src}
              srcLang={sub.lang}
              label={sub.label}
            />
          ))}
        </video>

        {/* Loading spinner */}
        {waiting && !error && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <Loader2 className="size-10 animate-spin text-white/80" />
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="absolute inset-0 z-[25] flex flex-col items-center justify-center gap-3 bg-black/85 p-6 text-center">
            <p className="text-sm font-semibold text-white">{error}</p>
            <button
              type="button"
              onClick={() => {
                setError(null);
                setWaiting(true);
                videoRef.current?.load();
              }}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              إعادة المحاولة
            </button>
          </div>
        )}

        {/* Resume note */}
        {resumeNote && (
          <div className="pointer-events-none absolute top-14 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-3 py-1 text-xs text-white backdrop-blur z-20">
            استأنفنا المشاهدة من حيث توقفت
          </div>
        )}

        {/* Top overlay with Back button & Title (works in both fullscreen and normal mode) */}
        <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between bg-gradient-to-b from-black/85 via-black/40 to-transparent px-3 py-2.5">
          <div className="flex items-center gap-2 min-w-0">
            <button
              type="button"
              onClick={handleBack}
              aria-label="الرجوع والخروج من العرض السينمائي"
              className="flex items-center gap-1.5 rounded-xl bg-black/60 px-2.5 py-1.5 text-xs font-semibold text-white backdrop-blur transition-colors hover:bg-white/20 active:scale-95"
            >
              <ArrowRight className="size-4" />
              <span>رجوع</span>
            </button>
            <p className="truncate text-sm font-semibold text-white" dir="rtl">
              {title}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {fullscreen ? (
              <span className="shrink-0 rounded-full bg-accent/20 px-2.5 py-0.5 text-[11px] font-semibold text-accent border border-accent/40 backdrop-blur">
                عرض سينمائي (أفقي)
              </span>
            ) : (
              <button
                type="button"
                onClick={() => {
                  if (wrapRef.current) void enterCinemaMode(wrapRef.current);
                }}
                className="shrink-0 rounded-full bg-primary/90 hover:bg-primary px-2.5 py-1 text-[11px] font-bold text-primary-foreground shadow backdrop-blur transition-transform active:scale-95 flex items-center gap-1"
              >
                <Maximize className="size-3" />
                <span>وضع السينما</span>
              </button>
            )}
          </div>
        </div>

        {/* Tap to toggle play and ensure cinema mode */}
        <button
          type="button"
          aria-label={playing ? "إيقاف مؤقت" : "تشغيل"}
          onClick={togglePlay}
          className="absolute inset-0 z-10 cursor-pointer"
        />

        {/* Controls */}
        <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-3 pt-6 pb-2">
          {/* Seek bar */}
          <div className="flex items-center gap-2">
            <span className="w-10 text-center text-[11px] text-white/80 tabular-nums">
              {formatTime(current)}
            </span>
            <input
              type="range"
              min={0}
              max={duration || 0}
              step={0.1}
              value={Math.min(current, duration || 0)}
              onChange={(e) => seek(Number(e.target.value))}
              aria-label="شريط التقدم"
              className="h-4 flex-1 cursor-pointer accent-[var(--primary)]"
            />
            <span className="w-10 text-center text-[11px] text-white/80 tabular-nums">
              {formatTime(duration)}
            </span>
          </div>

          {/* Buttons */}
          <div className="mt-1 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={togglePlay}
                aria-label={playing ? "إيقاف مؤقت" : "تشغيل"}
                className="rounded-lg p-2 text-white transition-colors hover:bg-white/10"
              >
                {playing ? <Pause className="size-5" /> : <Play className="size-5 fill-current" />}
              </button>
              <button
                type="button"
                onClick={() => setPanel(panel === "quality" ? "none" : "quality")}
                aria-label="الجودة"
                className={cn(
                  "flex items-center gap-1 rounded-lg px-2 py-2 text-xs font-semibold transition-colors hover:bg-white/10",
                  panel === "quality" ? "text-[var(--accent)]" : "text-white",
                )}
              >
                <Settings2 className="size-4" />
                {quality}
              </button>
              <button
                type="button"
                onClick={() => setPanel(panel === "subs" ? "none" : "subs")}
                aria-label="الترجمة"
                className={cn(
                  "rounded-lg p-2 transition-colors hover:bg-white/10",
                  panel === "subs" || activeSub ? "text-[var(--accent)]" : "text-white",
                )}
              >
                <Captions className="size-5" />
              </button>
            </div>
            <button
              type="button"
              onClick={toggleFullscreen}
              aria-label={fullscreen ? "الخروج من ملء الشاشة" : "ملء الشاشة والعرض السينمائي"}
              className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 flex items-center gap-1 text-xs"
            >
              {fullscreen ? <Minimize className="size-5" /> : <Maximize className="size-5" />}
            </button>
          </div>
        </div>

        {/* Quality panel */}
        {panel === "quality" && (
          <div className="absolute right-3 bottom-20 z-30 w-44 rounded-xl border border-white/10 bg-black/90 p-1.5 backdrop-blur">
            <p className="px-2 py-1 text-[11px] font-semibold text-white/60">
              الجودة المتوفرة من المصدر
            </p>
            {qualities.map((q) => (
              <button
                key={q.label}
                type="button"
                onClick={() => pickQuality(q.label)}
                className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-sm text-white transition-colors hover:bg-white/10"
              >
                <span>{q.label}</span>
                {q.label === quality && <Check className="size-4 text-[var(--accent)]" />}
              </button>
            ))}
            {qualities.length <= 1 && (
              <p className="px-2 pb-1 text-[10px] text-white/50">المصدر يوفّر جودة واحدة فقط</p>
            )}
          </div>
        )}

        {/* Subtitles panel */}
        {panel === "subs" && (
          <div className="absolute right-3 bottom-20 z-30 w-52 rounded-xl border border-white/10 bg-black/90 p-1.5 backdrop-blur">
            <p className="px-2 py-1 text-[11px] font-semibold text-white/60">الترجمة</p>
            <button
              type="button"
              onClick={() => {
                setSubIndex(-1);
                setPanel("none");
              }}
              className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-sm text-white transition-colors hover:bg-white/10"
            >
              <span>بدون ترجمة</span>
              {subIndex === -1 && <Check className="size-4 text-[var(--accent)]" />}
            </button>
            {subtitles.map((sub, i) => (
              <button
                key={sub.src}
                type="button"
                onClick={() => setSubIndex(i)}
                className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-sm text-white transition-colors hover:bg-white/10"
              >
                <span>{sub.label}</span>
                {subIndex === i && <Check className="size-4 text-[var(--accent)]" />}
              </button>
            ))}
            <div className="mt-1 border-t border-white/10 px-2 pt-1.5 pb-1">
              <p className="flex items-center gap-1 text-[11px] font-semibold text-white/60">
                <Timer className="size-3.5" /> توقيت الترجمة
              </p>
              <div className="mt-1 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setOffset((o) => Math.max(-30, o - 0.5))}
                  className="flex-1 rounded-lg bg-white/10 py-1.5 text-xs font-semibold text-white"
                >
                  − 0.5s
                </button>
                <span className="w-12 text-center text-xs text-white tabular-nums">
                  {offset > 0 ? "+" : ""}
                  {offset.toFixed(1)}s
                </span>
                <button
                  type="button"
                  onClick={() => setOffset((o) => Math.min(30, o + 0.5))}
                  className="flex-1 rounded-lg bg-white/10 py-1.5 text-xs font-semibold text-white"
                >
                  + 0.5s
                </button>
              </div>
              <button
                type="button"
                onClick={() => setOffset(0)}
                className="mt-1 w-full rounded-lg py-1 text-[11px] text-white/70 hover:text-white"
              >
                إعادة الضبط
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Close panel when tapping outside (mobile friendly) */}
      {panel !== "none" && (
        <button
          type="button"
          aria-label="إغلاق القائمة"
          onClick={() => setPanel("none")}
          className="fixed inset-0 z-[15] cursor-default"
        >
          <X className="hidden" />
        </button>
      )}
    </div>
  );
}
