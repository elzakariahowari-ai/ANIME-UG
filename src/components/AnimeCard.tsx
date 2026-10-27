import { Link } from "@tanstack/react-router";
import { Play } from "lucide-react";
import { DemoBadge } from "@/components/DemoBadge";
import type { Anime } from "@/lib/types";
import { cn } from "@/lib/utils";

export function AnimeCard({
  anime,
  className,
  eager,
}: {
  anime: Anime;
  className?: string;
  eager?: boolean;
}) {
  return (
    <Link
      to="/anime/$id"
      params={{ id: anime.id }}
      className={cn(
        "group relative block overflow-hidden rounded-2xl border border-border/70 bg-card shadow-lg transition-transform active:scale-[0.97]",
        className,
      )}
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={anime.poster}
          alt={`ملصق ${anime.titleAr}`}
          loading={eager ? "eager" : "lazy"}
          width={400}
          height={600}
          className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        {anime.contentFlag === "demo-verified-open-license" && (
          <DemoBadge className="absolute top-2 right-2" />
        )}
        <div className="absolute inset-x-0 bottom-0 p-2.5">
          <p className="truncate font-display text-sm font-semibold">{anime.titleAr}</p>
          <p className="mt-0.5 truncate text-[11px] text-muted-foreground">
            {anime.year ? `${anime.year} · ` : ""}
            {anime.genres.slice(0, 2).join("، ")}
          </p>
        </div>
        <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-active:opacity-100">
          <span className="rounded-full bg-primary/90 p-3 text-primary-foreground shadow-xl">
            <Play className="size-5 fill-current" />
          </span>
        </span>
      </div>
    </Link>
  );
}
