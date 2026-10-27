import { Link, useRouterState } from "@tanstack/react-router";
import { History, Home, LayoutGrid, Heart, Search, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const items: { to: string; label: string; icon: LucideIcon }[] = [
  { to: "/", label: "الرئيسية", icon: Home },
  { to: "/categories", label: "التصنيفات", icon: LayoutGrid },
  { to: "/search", label: "البحث", icon: Search },
  { to: "/favorites", label: "المفضلة", icon: Heart },
  { to: "/history", label: "السجل", icon: History },
];

export function BottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav className="safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/90 backdrop-blur-lg">
      <div className="mx-auto grid max-w-2xl grid-cols-5 px-2 pt-1.5 pb-1">
        {items.map(({ to, label, icon: Icon }) => {
          const active = to === "/" ? pathname === "/" : pathname.startsWith(to);
          return (
            <Link
              key={to}
              to={to}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex flex-col items-center gap-0.5 rounded-xl px-1 py-1.5 text-[10px] font-semibold transition-colors",
                active ? "text-primary" : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Icon className={cn("size-5", active && "drop-shadow-[0_0_8px_var(--primary)]")} />
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
