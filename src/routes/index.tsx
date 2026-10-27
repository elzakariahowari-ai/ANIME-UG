import { createFileRoute, Link } from "@tanstack/react-router";
import { Info, Play } from "lucide-react";
import { AnimeCard } from "@/components/AnimeCard";
import { DemoBadge } from "@/components/DemoBadge";
import { Button } from "@/components/ui/button";
import { CATALOG, FEATURED } from "@/lib/catalog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ANIME UG — منصة الأنمي بالعربية" },
      {
        name: "description",
        content:
          "شاهد الأعمال المعروضة بالعربية مع مشغّل يدعم جودات متعددة وترجمة، وقوائم مفضلة وسجل مشاهدة. المحتوى الحالي تجريبي من مصادر مفتوحة الترخيص.",
      },
      { property: "og:title", content: "ANIME UG — منصة الأنمي بالعربية" },
      {
        property: "og:description",
        content: "واجهة عربية داكنة، مشغّل بجودات متعددة وترجمة عربية، ومفضلة وسجل مشاهدة.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const rest = CATALOG.filter((a) => a.id !== FEATURED.id);

  return (
    <div className="mx-auto max-w-2xl px-4">
      {/* Hero: featured open-license work */}
      <section className="relative mt-3 overflow-hidden rounded-3xl border border-border/60">
        <img
          src={FEATURED.poster}
          alt={`ملصق ${FEATURED.titleAr}`}
          className="h-64 w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4">
          <DemoBadge />
          <h1 className="mt-2 font-display text-3xl font-bold leading-tight text-glow">
            {FEATURED.titleAr}
          </h1>
          <p className="mt-1 text-xs text-muted-foreground">
            {FEATURED.titleEn} · {FEATURED.year} · {FEATURED.genres.join("، ")}
          </p>
          <div className="mt-3 flex gap-2">
            <Button asChild className="flex-1 rounded-xl font-bold">
              <Link
                to="/watch/$animeId/$episodeId"
                params={{ animeId: FEATURED.id, episodeId: FEATURED.episodes[0]!.id }}
              >
                <Play className="size-4 fill-current" />
                شاهد الآن
              </Link>
            </Button>
            <Button asChild variant="secondary" className="rounded-xl font-bold">
              <Link to="/anime/$id" params={{ id: FEATURED.id }}>
                التفاصيل
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Content transparency notice */}
      <section className="mt-4">
        <Link
          to="/about"
          className="flex items-start gap-3 rounded-2xl border border-accent/30 bg-accent/10 p-3.5 transition-colors hover:border-accent/60"
        >
          <Info className="mt-0.5 size-5 shrink-0 text-accent" />
          <span className="text-xs leading-relaxed text-foreground/90">
            <span className="font-bold text-accent">المحتوى الحالي تجريبي ومرخّص: </span>
            الأعمال المعروضة أفلام مفتوحة الترخيص (Blender Foundation) لبثها عبر archive.org. لا
            توجد قائمة أنمي حقيقية بعد — تُضاف فقط من مصدر مرخّص توفّره. اضغط لمعرفة التفاصيل.
          </span>
        </Link>
      </section>

      {/* Catalog */}
      <section className="mt-5 pb-6">
        <h2 className="mb-3 font-display text-lg font-bold">كل الأعمال المتاحة</h2>
        <div className="grid grid-cols-2 gap-3">
          {rest.map((anime, i) => (
            <AnimeCard key={anime.id} anime={anime} eager={i < 2} />
          ))}
        </div>
      </section>
    </div>
  );
}
