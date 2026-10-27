import { Ghost } from "lucide-react";
import type { ReactNode } from "react";

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-3 px-6 py-14 text-center">
      <span className="rounded-2xl bg-muted p-4 text-muted-foreground">
        <Ghost className="size-8" />
      </span>
      <h2 className="font-display text-lg font-semibold">{title}</h2>
      <p className="max-w-xs text-sm text-muted-foreground">{description}</p>
      {action}
    </div>
  );
}
