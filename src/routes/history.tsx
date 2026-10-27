import { createFileRoute, Link } from "@tanstack/react-router";
import { Trash2 } from "lucide-react";
import { EmptyState } from "@/components/EmptyState";
import { getAnime } from "@/lib/catalog";
import { clearHistory, useLibrary } from "@/lib/library";

export const Route = createFileRoute("/history")({
  head: () => ({
    meta: [
      { title: "سجل المشاهدة — ANIME UG" },
      { name: "description", content: "أعمالك التي شاهدتها مؤخرًا، مع استئناف من حيث توقفت." },
      { property: "og:title", content: "سجل المشاهدة — ANIME UG" },
      { property: "og:description", content: "تابع من حيث توقفت." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HistoryPage,
});

function formatRelative(ts: number): string {
  const minutes = Math.round((Date.now() - ts) / 60000);
  if (minutes < 1) return "الآن";
  if (minutes < 60) return `قبل ${minutes} دقيقة`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `قبل ${hours} ساعة`;
  return `قبل ${Math.round(hours / 24)} يوم`;
}

function HistoryPage() {
  const library = useLibrary();
  const entries = library.history
    .map((entry) => ({ entry, anime: getAnime(entry.animeId) }))
    .filter((e): e is { entry: (typeof e)["entry"]; anime: NonNullable<typeof e.anime> } =>
      Boolean(e.anime),
    );

  return (
    <div className="mx-auto max-w-2xl px-4 pt-4">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-lg font-bold">سجل المشاهدة</h1>
        {entries.length > 0 && (
          <button
            type="button"
            onClick={clearHistory}
            className="flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs font-semibold text-muted-foreground transition-colors hover:text-destructive"
          >
            <Trash2 className="size-3.5" />
            مسح السجل
          </button>
        )}
      </div>

      {entries.length === 0 ? (
        <EmptyState
          title="لا يوجد سجل بعد"
          description="سيظهر هنا كل ما تشاهده لتستأنف مشاهدتك من حيث توقفت."
          action={
            <Link
              to="/"
              className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              ابدأ المشاهدة
            </Link>
          }
        />
      ) : (
        <ul className="mt-4 space-y-2 pb-6">
          {entries.map(({ entry, anime }) => {
            const episode = anime.episodes.find((e) => e.id === entry.episodeId);
            if (!episode) return null;
            const pct =
              entry.durationSec > 0
                ? Math.min(100, Math.round((entry.positionSec / entry.durationSec) * 100))
                : 0;

            return (
              <li key={`${entry.animeId}-${entry.episodeId}`}>
                <Link
                  to="/watch/$animeId/$episodeId"
                  params={{ animeId: anime.id, episodeId: episode.id }}
                  className="relative flex items-center gap-3 overflow-hidden rounded-xl border border-border/70 bg-card p-3 transition-colors hover:border-primary/50"
                >
                  <img
                    src={anime.poster}
                    alt=""
                    loading="lazy"
                    width={80}
                    height={120}
                    className="h-16 w-11 shrink-0 rounded-lg object-cover"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold">{anime.titleAr}</span>
                    <span className="block truncate text-xs text-muted-foreground">
                      الحلقة {episode.number} · {formatRelative(entry.updatedAt)}
                    </span>
                    <span className="mt-1 block text-[11px] font-semibold text-accent">
                      متبقٍ {Math.max(1, Math.round((entry.durationSec - entry.positionSec) / 60))}{" "}
                      دقيقة
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-primary/70"
                    style={{ width: `${pct}%` }}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
