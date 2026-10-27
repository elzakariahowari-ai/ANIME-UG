import { Link } from "@tanstack/react-router";
import { PlayCircle } from "lucide-react";
import { getProgress, useLibrary, type HistoryEntry } from "@/lib/library";
import type { Anime } from "@/lib/types";
import { cn } from "@/lib/utils";

export function EpisodeList({ anime }: { anime: Anime }) {
  const library = useLibrary();

  return (
    <ul className="space-y-2">
      {anime.episodes.map((ep) => {
        const progress: HistoryEntry | undefined = getProgress(library, anime.id, ep.id);
        const pct =
          progress && progress.durationSec > 0
            ? Math.min(100, Math.round((progress.positionSec / progress.durationSec) * 100))
            : 0;

        return (
          <li key={ep.id}>
            <Link
              to="/watch/$animeId/$episodeId"
              params={{ animeId: anime.id, episodeId: ep.id }}
              className="relative flex items-center gap-3 overflow-hidden rounded-xl border border-border/70 bg-card px-3 py-3 transition-colors hover:border-primary/50"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                <PlayCircle className="size-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold">
                  الحلقة {ep.number} — {ep.titleAr}
                </span>
                <span className="mt-0.5 block text-xs text-muted-foreground">
                  {ep.durationLabel}
                  {ep.qualities.length > 1 && ` · ${ep.qualities.length} جودات`}
                  {ep.subtitles.length > 0 && " · ترجمة"}
                  {pct > 0 && pct < 95 && ` · شاهدت ${pct}%`}
                </span>
              </span>
              {pct >= 95 && (
                <span className="shrink-0 text-[10px] font-semibold text-accent">
                  تمّت المشاهدة
                </span>
              )}
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-0.5 bg-primary/70 transition-all"
                style={{ width: `${pct}%` }}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function EpisodeListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <ul className="space-y-2">
      {Array.from({ length: count }).map((_, i) => (
        <li key={i} className={cn("h-16 animate-pulse rounded-xl bg-muted")} />
      ))}
    </ul>
  );
}
