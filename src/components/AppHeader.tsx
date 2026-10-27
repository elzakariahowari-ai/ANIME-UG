import { Link, useRouterState } from "@tanstack/react-router";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AppHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-14 max-w-2xl items-center justify-between px-4">
        <Link to="/" className="flex items-baseline gap-2" aria-label="ANIME UG — الرئيسية">
          <span className="font-display text-xl font-bold tracking-tight text-primary text-glow">
            ANIME UG
          </span>
          <span className="text-xs font-semibold text-muted-foreground">أنمي يو جي</span>
        </Link>

        {pathname !== "/about" && (
          <Button variant="ghost" size="icon" asChild>
            <Link to="/about" aria-label="حول التطبيق ومصادر المحتوى">
              <Info className="size-5 text-muted-foreground" />
            </Link>
          </Button>
        )}
      </div>
    </header>
  );
}
