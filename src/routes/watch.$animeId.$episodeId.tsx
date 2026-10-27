import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { ArrowRight, Info } from "lucide-react";
import { useCallback, useEffect } from "react";
import { DemoBadge } from "@/components/DemoBadge";
import { VideoPlayer } from "@/components/VideoPlayer";
import { enterCinemaMode, exitCinemaMode } from "@/lib/cinema-mode";
import { getAnime } from "@/lib/catalog";
import { getProgress, saveProgress, useLibrary } from "@/lib/library";

export const Route = createFileRoute("/watch/$animeId/$episodeId")({
  loader: ({ params }) => {
    const anime = getAnime(params.animeId);
    if (!anime) throw notFound();
    const episode = anime.episodes.find((e) => e.id === params.episodeId);
    if (!episode) throw notFound();
    return { anime, episode };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `مشاهدة ${loaderData.anime.titleAr} — ANIME UG`
          : "غير متوفر — ANIME UG",
      },
      { name: "description", content: loaderData ? loaderData.anime.synopsisAr : "غير موجود." },
      {
        property: "og:title",
        content: loaderData ? `مشاهدة ${loaderData.anime.titleAr}` : "غير متوفر",
      },
      {
        property: "og:description",
        content: loaderData ? loaderData.anime.synopsisAr : "غير موجود.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WatchPage,
});

function WatchPage() {
  const { anime, episode } = Route.useLoaderData();
  const library = useLibrary();
  const router = useRouter();
  const progress = getProgress(library, anime.id, episode.id);

  // Stable identity so the player's timeupdate listener is not re-attached constantly.
  const handleProgress = useCallback(
    (positionSec: number, durationSec: number) => {
      saveProgress({
        animeId: anime.id,
        episodeId: episode.id,
        positionSec,
        durationSec,
        updatedAt: Date.now(),
      });
    },
    [anime.id, episode.id],
  );

  // Safe back navigation ensuring screen orientation is unlocked and UI is restored
  const handleBack = useCallback(() => {
    void exitCinemaMode();
    if (typeof window !== "undefined" && window.history.length > 1) {
      window.history.back();
    } else {
      void router.navigate({ to: "/anime/$id", params: { id: anime.id } });
    }
  }, [anime.id, router]);

  // Guaranteed cleanup on page exit / route change
  useEffect(() => {
    return () => {
      void exitCinemaMode();
    };
  }, []);

  return (
    <div className="mx-auto max-w-2xl px-3 pt-3 pb-8">
      <VideoPlayer
        title={`${anime.titleAr} — الحلقة ${episode.number}`}
        qualities={episode.qualities}
        subtitles={episode.subtitles}
        poster={anime.poster}
        resumeAt={progress?.positionSec}
        onProgress={handleProgress}
        onBack={handleBack}
        autoCinema={true}
      />

      <div className="mt-3 flex items-center justify-between gap-2">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h1 className="truncate font-display text-lg font-bold">{anime.titleAr}</h1>
            {anime.contentFlag === "demo-verified-open-license" && <DemoBadge />}
          </div>
          <p className="mt-0.5 text-xs text-muted-foreground">
            الحلقة {episode.number} · {episode.titleAr} · {episode.durationLabel}
          </p>
        </div>
      </div>

      <Link
        to="/anime/$id"
        params={{ id: anime.id }}
        onClick={() => void exitCinemaMode()}
        className="mt-3 flex items-center justify-between rounded-xl border border-border/70 bg-card px-3 py-2.5 text-sm font-semibold transition-colors hover:border-primary/50"
      >
        <span className="flex items-center gap-2">
          <Info className="size-4 text-muted-foreground" />
          تفاصيل العمل وكل الحلقات
        </span>
        <ArrowRight className="size-4 text-muted-foreground" />
      </Link>

      <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">
        {anime.licenseNoteAr}
      </p>
    </div>
  );
}
