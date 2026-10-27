import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as ArrowRight, a as Settings2, b as Check, c as Play, d as Maximize, f as LoaderCircle, l as Pause, m as Info, r as Timer, t as X, u as Minimize, x as Captions } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { b as Link, x as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as DemoBadge } from "./DemoBadge-D89yxXEG.mjs";
import { a as useLibrary, n as getProgress, r as saveProgress } from "./library-D1rdOLxH.mjs";
import { t as Route } from "./watch._animeId._episodeId-D7BHUp3u.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/watch._animeId._episodeId-C_Je1tDx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
function getCapacitorPlugin(pluginName) {
	if (typeof window === "undefined") return void 0;
	return window.Capacitor?.Plugins?.[pluginName];
}
/**
* Enters Cinema Mode:
* 1. Requests full-screen display on the target element.
* 2. Locks device screen orientation to Landscape (via Screen Orientation API and Capacitor).
* 3. Hides status bar in Capacitor.
*/
async function enterCinemaMode(targetElement) {
	if (typeof window === "undefined") return false;
	const target = targetElement || document.documentElement;
	let fullscreenSuccess = false;
	try {
		const doc = document;
		if (!Boolean(doc.fullscreenElement || doc.webkitFullscreenElement || doc.mozFullScreenElement || doc.msFullscreenElement)) {
			if (target.requestFullscreen) {
				await target.requestFullscreen();
				fullscreenSuccess = true;
			} else if (target.webkitRequestFullscreen) {
				await target.webkitRequestFullscreen();
				fullscreenSuccess = true;
			} else if (target.mozRequestFullScreen) {
				await target.mozRequestFullScreen();
				fullscreenSuccess = true;
			} else if (target.msRequestFullscreen) {
				await target.msRequestFullscreen();
				fullscreenSuccess = true;
			}
		} else fullscreenSuccess = true;
	} catch (err) {
		console.debug("[CinemaMode] Fullscreen request deferred or blocked by browser gesture policy:", err);
	}
	try {
		const capOrientation = getCapacitorPlugin("ScreenOrientation");
		if (capOrientation?.lock) await capOrientation.lock({ orientation: "landscape" }).catch(() => {});
		const vScreen = window.screen;
		const orientation = vScreen.orientation;
		if (orientation?.lock) await orientation.lock("landscape").catch(() => {
			return orientation.lock?.("landscape-primary").catch(() => {});
		});
		else if (vScreen.lockOrientation) vScreen.lockOrientation("landscape");
		else if (vScreen.webkitLockOrientation) vScreen.webkitLockOrientation("landscape");
		else if (vScreen.mozLockOrientation) vScreen.mozLockOrientation("landscape");
		else if (vScreen.msLockOrientation) vScreen.msLockOrientation("landscape");
	} catch (err) {
		console.debug("[CinemaMode] Screen orientation lock not supported on this device/state:", err);
	}
	try {
		const capStatusBar = getCapacitorPlugin("StatusBar");
		if (capStatusBar?.hide) await capStatusBar.hide().catch(() => {});
	} catch {}
	return fullscreenSuccess;
}
/**
* Exits Cinema Mode:
* 1. Unlocks screen orientation to restore natural rotation / portrait.
* 2. Exits fullscreen.
* 3. Shows status bar in Capacitor.
*/
async function exitCinemaMode() {
	if (typeof window === "undefined") return false;
	try {
		const capOrientation = getCapacitorPlugin("ScreenOrientation");
		if (capOrientation?.unlock) await capOrientation.unlock().catch(() => {});
		const vScreen = window.screen;
		const orientation = vScreen.orientation;
		if (orientation?.unlock) orientation.unlock();
		else if (vScreen.unlockOrientation) vScreen.unlockOrientation();
		else if (vScreen.webkitUnlockOrientation) vScreen.webkitUnlockOrientation();
		else if (vScreen.mozUnlockOrientation) vScreen.mozUnlockOrientation();
		else if (vScreen.msUnlockOrientation) vScreen.msUnlockOrientation();
	} catch (err) {
		console.debug("[CinemaMode] Screen orientation unlock failed:", err);
	}
	try {
		const doc = document;
		if (Boolean(doc.fullscreenElement || doc.webkitFullscreenElement || doc.mozFullScreenElement || doc.msFullscreenElement)) {
			if (doc.exitFullscreen) await doc.exitFullscreen().catch(() => {});
			else if (doc.webkitExitFullscreen) await doc.webkitExitFullscreen().catch(() => {});
			else if (doc.mozCancelFullScreen) await doc.mozCancelFullScreen().catch(() => {});
			else if (doc.msExitFullscreen) await doc.msExitFullscreen().catch(() => {});
		}
	} catch (err) {
		console.debug("[CinemaMode] Exit fullscreen failed:", err);
	}
	try {
		const capStatusBar = getCapacitorPlugin("StatusBar");
		if (capStatusBar?.show) await capStatusBar.show().catch(() => {});
	} catch {}
	return true;
}
var _jsxFileName$1 = "/app/applet/src/components/VideoPlayer.tsx";
function formatTime(sec) {
	if (!Number.isFinite(sec)) return "0:00";
	const s = Math.floor(sec % 60);
	const m = Math.floor(sec / 60 % 60);
	const h = Math.floor(sec / 3600);
	return h > 0 ? `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}` : `${m}:${String(s).padStart(2, "0")}`;
}
/** Keep the original cue times once, then shift cues by the current offset. */
function applySubtitleOffset(track, offset, originals) {
	const cues = track.cues;
	if (!cues || cues.length === 0) return false;
	for (let i = 0; i < cues.length; i++) {
		const cue = cues[i];
		if (!originals.has(cue)) originals.set(cue, [cue.startTime, cue.endTime]);
		const [start, end] = originals.get(cue);
		cue.startTime = Math.max(0, start + offset);
		cue.endTime = Math.max(0, end + offset);
	}
	return true;
}
function VideoPlayer({ title, qualities, subtitles, poster, resumeAt, onProgress, onBack, autoCinema = true }) {
	const [quality, setQuality] = (0, import_react.useState)(qualities[0]?.label ?? "");
	const currentUrl = qualities.find((q) => q.label === quality)?.url ?? qualities[0]?.url ?? "";
	const [subIndex, setSubIndex] = (0, import_react.useState)(-1);
	const [offset, setOffset] = (0, import_react.useState)(0);
	const wrapRef = (0, import_react.useRef)(null);
	const videoRef = (0, import_react.useRef)(null);
	const pendingSeekRef = (0, import_react.useRef)(null);
	const cueOriginalsRef = (0, import_react.useRef)(/* @__PURE__ */ new Map());
	const resumeAppliedRef = (0, import_react.useRef)(false);
	const lastSavedRef = (0, import_react.useRef)(0);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const [waiting, setWaiting] = (0, import_react.useState)(true);
	const [current, setCurrent] = (0, import_react.useState)(0);
	const [duration, setDuration] = (0, import_react.useState)(0);
	const [error, setError] = (0, import_react.useState)(null);
	const [resumeNote, setResumeNote] = (0, import_react.useState)(false);
	const [fullscreen, setFullscreen] = (0, import_react.useState)(false);
	const [panel, setPanel] = (0, import_react.useState)("none");
	const handleBack = (0, import_react.useCallback)(() => {
		exitCinemaMode();
		if (onBack) onBack();
		else if (typeof window !== "undefined" && window.history.length > 1) window.history.back();
	}, [onBack]);
	const pickQuality = (0, import_react.useCallback)((label) => {
		setPanel("none");
		if (label === quality) return;
		const v = videoRef.current;
		if (v) pendingSeekRef.current = v.currentTime;
		setQuality(label);
	}, [quality]);
	(0, import_react.useEffect)(() => {
		const v = videoRef.current;
		if (!v || !currentUrl) return;
		const seekTo = pendingSeekRef.current;
		pendingSeekRef.current = null;
		if (seekTo != null && seekTo > 0) {
			const onMeta = () => {
				v.currentTime = seekTo;
				v.play().catch(() => {});
			};
			v.addEventListener("loadedmetadata", onMeta, { once: true });
		}
		v.load();
	}, [currentUrl]);
	(0, import_react.useEffect)(() => {
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
		const onError = () => setError("تعذّر تشغيل الفيديو. تحقّق من اتصالك بالإنترنت أو جرّب جودة أخرى.");
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
	const offsetRef = (0, import_react.useRef)(offset);
	(0, import_react.useEffect)(() => {
		offsetRef.current = offset;
	}, [offset]);
	(0, import_react.useEffect)(() => {
		const v = videoRef.current;
		if (!v) return;
		const tracks = Array.from(v.textTracks).filter((t) => t.kind === "subtitles");
		tracks.forEach((t, i) => {
			t.mode = i === subIndex ? "showing" : "disabled";
		});
		const track = subIndex >= 0 ? tracks[subIndex] : void 0;
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
	(0, import_react.useEffect)(() => {
		const v = videoRef.current;
		if (!v) return;
		const track = Array.from(v.textTracks).find((t) => t.kind === "subtitles" && t.mode === "showing");
		if (!track) return;
		applySubtitleOffset(track, offset, cueOriginalsRef.current);
	}, [offset]);
	(0, import_react.useEffect)(() => {
		let unmounted = false;
		const onChange = () => {
			const doc = document;
			const isFs = Boolean(doc.fullscreenElement || doc.webkitFullscreenElement || doc.mozFullScreenElement);
			setFullscreen(isFs);
			if (!isFs && !unmounted) exitCinemaMode();
		};
		document.addEventListener("fullscreenchange", onChange);
		document.addEventListener("webkitfullscreenchange", onChange);
		document.addEventListener("mozfullscreenchange", onChange);
		if (autoCinema && wrapRef.current) enterCinemaMode(wrapRef.current);
		return () => {
			unmounted = true;
			document.removeEventListener("fullscreenchange", onChange);
			document.removeEventListener("webkitfullscreenchange", onChange);
			document.removeEventListener("mozfullscreenchange", onChange);
			exitCinemaMode();
		};
	}, [autoCinema]);
	const toggleFullscreen = () => {
		if (document.fullscreenElement) exitCinemaMode();
		else if (wrapRef.current) enterCinemaMode(wrapRef.current);
	};
	const togglePlay = () => {
		const v = videoRef.current;
		if (!v) return;
		if (v.paused) {
			if (autoCinema && !document.fullscreenElement && wrapRef.current) enterCinemaMode(wrapRef.current);
			v.play().catch(() => {});
		} else v.pause();
	};
	const seek = (value) => {
		const v = videoRef.current;
		if (!v) return;
		v.currentTime = value;
		setCurrent(value);
	};
	const activeSub = subIndex >= 0 ? subtitles[subIndex] : void 0;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "select-none",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			ref: wrapRef,
			dir: "ltr",
			className: cn("relative overflow-hidden bg-black shadow-2xl transition-all", fullscreen ? "fixed inset-0 z-50 rounded-none border-none size-full max-w-none max-h-none flex items-center justify-center" : "rounded-2xl border border-border"),
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("video", {
					ref: videoRef,
					src: currentUrl,
					poster,
					preload: "metadata",
					playsInline: true,
					controls: false,
					className: cn("w-full bg-black object-contain", fullscreen ? "h-full max-h-screen" : "aspect-video"),
					children: subtitles.map((sub) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("track", {
						kind: "subtitles",
						src: sub.src,
						srcLang: sub.lang,
						label: sub.label
					}, sub.src, false, {
						fileName: _jsxFileName$1,
						lineNumber: 313,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 300,
					columnNumber: 9
				}, this),
				waiting && !error && /* @__PURE__ */ (void 0)("div", {
					className: "pointer-events-none absolute inset-0 flex items-center justify-center",
					children: /* @__PURE__ */ (void 0)(LoaderCircle, { className: "size-10 animate-spin text-white/80" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 326,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 325,
					columnNumber: 11
				}, this),
				error && /* @__PURE__ */ (void 0)("div", {
					className: "absolute inset-0 z-[25] flex flex-col items-center justify-center gap-3 bg-black/85 p-6 text-center",
					children: [/* @__PURE__ */ (void 0)("p", {
						className: "text-sm font-semibold text-white",
						children: error
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 333,
						columnNumber: 13
					}, this), /* @__PURE__ */ (void 0)("button", {
						type: "button",
						onClick: () => {
							setError(null);
							setWaiting(true);
							videoRef.current?.load();
						},
						className: "rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground",
						children: "إعادة المحاولة"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 334,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 332,
					columnNumber: 11
				}, this),
				resumeNote && /* @__PURE__ */ (void 0)("div", {
					className: "pointer-events-none absolute top-14 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-3 py-1 text-xs text-white backdrop-blur z-20",
					children: "استأنفنا المشاهدة من حيث توقفت"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 350,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "absolute top-0 inset-x-0 z-20 flex items-center justify-between bg-gradient-to-b from-black/85 via-black/40 to-transparent px-3 py-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2 min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: handleBack,
							"aria-label": "الرجوع والخروج من العرض السينمائي",
							className: "flex items-center gap-1.5 rounded-xl bg-black/60 px-2.5 py-1.5 text-xs font-semibold text-white backdrop-blur transition-colors hover:bg-white/20 active:scale-95",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 364,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "رجوع" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 365,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 358,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "truncate text-sm font-semibold text-white",
							dir: "rtl",
							children: title
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 367,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 357,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2",
						children: fullscreen ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "shrink-0 rounded-full bg-accent/20 px-2.5 py-0.5 text-[11px] font-semibold text-accent border border-accent/40 backdrop-blur",
							children: "عرض سينمائي (أفقي)"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 373,
							columnNumber: 15
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => {
								if (wrapRef.current) enterCinemaMode(wrapRef.current);
							},
							className: "shrink-0 rounded-full bg-primary/90 hover:bg-primary px-2.5 py-1 text-[11px] font-bold text-primary-foreground shadow backdrop-blur transition-transform active:scale-95 flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Maximize, { className: "size-3" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 384,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "وضع السينما" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 385,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 377,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 371,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 356,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					"aria-label": playing ? "إيقاف مؤقت" : "تشغيل",
					onClick: togglePlay,
					className: "absolute inset-0 z-10 cursor-pointer"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 392,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-3 pt-6 pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "w-10 text-center text-[11px] text-white/80 tabular-nums",
								children: formatTime(current)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 403,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								type: "range",
								min: 0,
								max: duration || 0,
								step: .1,
								value: Math.min(current, duration || 0),
								onChange: (e) => seek(Number(e.target.value)),
								"aria-label": "شريط التقدم",
								className: "h-4 flex-1 cursor-pointer accent-[var(--primary)]"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 406,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "w-10 text-center text-[11px] text-white/80 tabular-nums",
								children: formatTime(duration)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 416,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 402,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-1 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: togglePlay,
									"aria-label": playing ? "إيقاف مؤقت" : "تشغيل",
									className: "rounded-lg p-2 text-white transition-colors hover:bg-white/10",
									children: playing ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pause, { className: "size-5" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 430,
										columnNumber: 28
									}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Play, { className: "size-5 fill-current" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 430,
										columnNumber: 59
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 424,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: () => setPanel(panel === "quality" ? "none" : "quality"),
									"aria-label": "الجودة",
									className: cn("flex items-center gap-1 rounded-lg px-2 py-2 text-xs font-semibold transition-colors hover:bg-white/10", panel === "quality" ? "text-[var(--accent)]" : "text-white"),
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Settings2, { className: "size-4" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 441,
										columnNumber: 17
									}, this), quality]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 432,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: () => setPanel(panel === "subs" ? "none" : "subs"),
									"aria-label": "الترجمة",
									className: cn("rounded-lg p-2 transition-colors hover:bg-white/10", panel === "subs" || activeSub ? "text-[var(--accent)]" : "text-white"),
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Captions, { className: "size-5" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 453,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 444,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 423,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: toggleFullscreen,
							"aria-label": fullscreen ? "الخروج من ملء الشاشة" : "ملء الشاشة والعرض السينمائي",
							className: "rounded-lg p-2 text-white transition-colors hover:bg-white/10 flex items-center gap-1 text-xs",
							children: fullscreen ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Minimize, { className: "size-5" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 462,
								columnNumber: 29
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Maximize, { className: "size-5" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 462,
								columnNumber: 63
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 456,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 422,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 400,
					columnNumber: 9
				}, this),
				panel === "quality" && /* @__PURE__ */ (void 0)("div", {
					className: "absolute right-3 bottom-20 z-30 w-44 rounded-xl border border-white/10 bg-black/90 p-1.5 backdrop-blur",
					children: [
						/* @__PURE__ */ (void 0)("p", {
							className: "px-2 py-1 text-[11px] font-semibold text-white/60",
							children: "الجودة المتوفرة من المصدر"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 470,
							columnNumber: 13
						}, this),
						qualities.map((q) => /* @__PURE__ */ (void 0)("button", {
							type: "button",
							onClick: () => pickQuality(q.label),
							className: "flex w-full items-center justify-between rounded-lg px-2 py-2 text-sm text-white transition-colors hover:bg-white/10",
							children: [/* @__PURE__ */ (void 0)("span", { children: q.label }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 480,
								columnNumber: 17
							}, this), q.label === quality && /* @__PURE__ */ (void 0)(Check, { className: "size-4 text-[var(--accent)]" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 481,
								columnNumber: 41
							}, this)]
						}, q.label, true, {
							fileName: _jsxFileName$1,
							lineNumber: 474,
							columnNumber: 15
						}, this)),
						qualities.length <= 1 && /* @__PURE__ */ (void 0)("p", {
							className: "px-2 pb-1 text-[10px] text-white/50",
							children: "المصدر يوفّر جودة واحدة فقط"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 485,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 469,
					columnNumber: 11
				}, this),
				panel === "subs" && /* @__PURE__ */ (void 0)("div", {
					className: "absolute right-3 bottom-20 z-30 w-52 rounded-xl border border-white/10 bg-black/90 p-1.5 backdrop-blur",
					children: [
						/* @__PURE__ */ (void 0)("p", {
							className: "px-2 py-1 text-[11px] font-semibold text-white/60",
							children: "الترجمة"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 493,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("button", {
							type: "button",
							onClick: () => {
								setSubIndex(-1);
								setPanel("none");
							},
							className: "flex w-full items-center justify-between rounded-lg px-2 py-2 text-sm text-white transition-colors hover:bg-white/10",
							children: [/* @__PURE__ */ (void 0)("span", { children: "بدون ترجمة" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 502,
								columnNumber: 15
							}, this), subIndex === -1 && /* @__PURE__ */ (void 0)(Check, { className: "size-4 text-[var(--accent)]" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 503,
								columnNumber: 35
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 494,
							columnNumber: 13
						}, this),
						subtitles.map((sub, i) => /* @__PURE__ */ (void 0)("button", {
							type: "button",
							onClick: () => setSubIndex(i),
							className: "flex w-full items-center justify-between rounded-lg px-2 py-2 text-sm text-white transition-colors hover:bg-white/10",
							children: [/* @__PURE__ */ (void 0)("span", { children: sub.label }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 512,
								columnNumber: 17
							}, this), subIndex === i && /* @__PURE__ */ (void 0)(Check, { className: "size-4 text-[var(--accent)]" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 513,
								columnNumber: 36
							}, this)]
						}, sub.src, true, {
							fileName: _jsxFileName$1,
							lineNumber: 506,
							columnNumber: 15
						}, this)),
						/* @__PURE__ */ (void 0)("div", {
							className: "mt-1 border-t border-white/10 px-2 pt-1.5 pb-1",
							children: [
								/* @__PURE__ */ (void 0)("p", {
									className: "flex items-center gap-1 text-[11px] font-semibold text-white/60",
									children: [/* @__PURE__ */ (void 0)(Timer, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 518,
										columnNumber: 17
									}, this), " توقيت الترجمة"]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 517,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "mt-1 flex items-center justify-between gap-2",
									children: [
										/* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => setOffset((o) => Math.max(-30, o - .5)),
											className: "flex-1 rounded-lg bg-white/10 py-1.5 text-xs font-semibold text-white",
											children: "− 0.5s"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 521,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (void 0)("span", {
											className: "w-12 text-center text-xs text-white tabular-nums",
											children: [
												offset > 0 ? "+" : "",
												offset.toFixed(1),
												"s"
											]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 528,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => setOffset((o) => Math.min(30, o + .5)),
											className: "flex-1 rounded-lg bg-white/10 py-1.5 text-xs font-semibold text-white",
											children: "+ 0.5s"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 532,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 520,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("button", {
									type: "button",
									onClick: () => setOffset(0),
									className: "mt-1 w-full rounded-lg py-1 text-[11px] text-white/70 hover:text-white",
									children: "إعادة الضبط"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 540,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 516,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 492,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 290,
			columnNumber: 7
		}, this), panel !== "none" && /* @__PURE__ */ (void 0)("button", {
			type: "button",
			"aria-label": "إغلاق القائمة",
			onClick: () => setPanel("none"),
			className: "fixed inset-0 z-[15] cursor-default",
			children: /* @__PURE__ */ (void 0)(X, { className: "hidden" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 560,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 554,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 289,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/watch.$animeId.$episodeId.tsx?tsr-split=component";
function WatchPage() {
	const { anime, episode } = Route.useLoaderData();
	const library = useLibrary();
	const router = useRouter();
	const progress = getProgress(library, anime.id, episode.id);
	const handleProgress = (0, import_react.useCallback)((positionSec, durationSec) => {
		saveProgress({
			animeId: anime.id,
			episodeId: episode.id,
			positionSec,
			durationSec,
			updatedAt: Date.now()
		});
	}, [anime.id, episode.id]);
	const handleBack = (0, import_react.useCallback)(() => {
		exitCinemaMode();
		if (typeof window !== "undefined" && window.history.length > 1) window.history.back();
		else router.navigate({
			to: "/anime/$id",
			params: { id: anime.id }
		});
	}, [anime.id, router]);
	(0, import_react.useEffect)(() => {
		return () => {
			exitCinemaMode();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-2xl px-3 pt-3 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VideoPlayer, {
				title: `${anime.titleAr} — الحلقة ${episode.number}`,
				qualities: episode.qualities,
				subtitles: episode.subtitles,
				poster: anime.poster,
				resumeAt: progress?.positionSec,
				onProgress: handleProgress,
				onBack: handleBack,
				autoCinema: true
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 51,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-3 flex items-center justify-between gap-2",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
							className: "truncate font-display text-lg font-bold",
							children: anime.titleAr
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 56,
							columnNumber: 13
						}, this), anime.contentFlag === "demo-verified-open-license" && /* @__PURE__ */ (void 0)(DemoBadge, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 57,
							columnNumber: 68
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-0.5 text-xs text-muted-foreground",
						children: [
							"الحلقة ",
							episode.number,
							" · ",
							episode.titleAr,
							" · ",
							episode.durationLabel
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 59,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 54,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 53,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/anime/$id",
				params: { id: anime.id },
				onClick: () => void exitCinemaMode(),
				className: "mt-3 flex items-center justify-between rounded-xl border border-border/70 bg-card px-3 py-2.5 text-sm font-semibold transition-colors hover:border-primary/50",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Info, { className: "size-4 text-muted-foreground" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 69,
						columnNumber: 11
					}, this), "تفاصيل العمل وكل الحلقات"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 68,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "size-4 text-muted-foreground" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 72,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 65,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-3 text-[11px] leading-relaxed text-muted-foreground",
				children: anime.licenseNoteAr
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 75,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 50,
		columnNumber: 10
	}, this);
}
//#endregion
export { WatchPage as component };
