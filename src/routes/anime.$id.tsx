import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Heart, Play } from "lucide-react";
import { DemoBadge } from "@/components/DemoBadge";
import { EpisodeList } from "@/components/EpisodeList";
import { Button } from "@/components/ui/button";
import { getAnime } from "@/lib/catalog";
import { toggleFavorite, useLibrary } from "@/lib/library";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/anime/$id")({
  loader: ({ params }) => {
    const anime = getAnime(params.id);
    if (!anime) throw notFound();
    return { anime };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.anime.titleAr} — ANIME UG` : "غير متوفر — ANIME UG" },
      {
        name: "description",
        content: loaderData ? loaderData.anime.synopsisAr : "صفحة عمل غير موجودة.",
      },
      {
        property: "og:title",
        content: loaderData ? `${loaderData.anime.titleAr} — ANIME UG` : "غير متوفر",
      },
      {
        property: "og:description",
        content: loaderData ? loaderData.anime.synopsisAr : "صفحة عمل غير موجودة.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AnimeDetailsPage,
});

function AnimeDetailsPage() {
  const { anime } = Route.useLoaderData();
  const library = useLibrary();
  const isFavorite = library.favorites.includes(anime.id);
  const firstEpisode = anime.episodes[0];

  return (
    <div className="mx-auto max-w-2xl px-4 pt-3">
      {/* Poster header */}
      <div className="relative overflow-hidden rounded-3xl border border-border/60">
        <img
          src={anime.poster}
          alt={`ملصق ${anime.titleAr}`}
          className="h-72 w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
          <div className="min-w-0">
            {anime.contentFlag === "demo-verified-open-license" && <DemoBadge />}
            <h1 className="mt-1.5 font-display text-2xl font-bold leading-tight">
              {anime.titleAr}
            </h1>
            <p className="text-xs text-muted-foreground">
              {anime.titleEn}
              {anime.year ? ` · ${anime.year}` : ""}
            </p>
          </div>
          <button
            type="button"
            onClick={() => toggleFavorite(anime.id)}
            aria-pressed={isFavorite}
            aria-label={isFavorite ? "إزالة من المفضلة" : "إضافة إلى المفضلة"}
            className={cn(
              "flex size-11 shrink-0 items-center justify-center rounded-full border transition-all active:scale-90",
              isFavorite
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card/80 text-muted-foreground backdrop-blur",
            )}
          >
            <Heart className={cn("size-5", isFavorite && "fill-current")} />
          </button>
        </div>
      </div>

      {/* Genres */}
      <div className="mt-3 flex flex-wrap gap-2">
        {anime.genres.map((genre) => (
          <span
            key={genre}
            className="rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted-foreground"
          >
            {genre}
          </span>
        ))}
      </div>

      {/* Synopsis */}
      <p className="mt-3 text-sm leading-relaxed text-foreground/90">
        {anime.synopsisAr || "لا توجد نبذة عن هذا العمل بعد."}
      </p>

      {/* License note — content transparency */}
      <div className="mt-3 rounded-xl border border-accent/30 bg-accent/10 p-3 text-xs leading-relaxed text-foreground/85">
        <span className="font-bold text-accent">مصدر المحتوى: </span>
        {anime.licenseNoteAr}
      </div>

      {/* Watch CTA */}
      {firstEpisode && (
        <Button asChild size="lg" className="mt-4 w-full rounded-xl font-bold">
          <Link
            to="/watch/$animeId/$episodeId"
            params={{ animeId: anime.id, episodeId: firstEpisode.id }}
          >
            <Play className="size-4 fill-current" />
            شاهد الآن
          </Link>
        </Button>
      )}

      {/* Episodes */}
      <section className="mt-5 pb-6">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-display text-lg font-bold">الحلقات</h2>
          <Link
            to="/"
            className="flex items-center gap-1 text-xs font-semibold text-muted-foreground"
          >
            كل الأعمال
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
        <EpisodeList anime={anime} />
      </section>
    </div>
  );
}
