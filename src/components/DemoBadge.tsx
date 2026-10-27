import { cn } from "@/lib/utils";

/**
 * Marks content as verified demo/open-license material so it can never be
 * confused with a licensed anime catalog.
 */
export function DemoBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-accent/40 bg-accent/15 px-2 py-0.5 text-[10px] font-semibold text-accent backdrop-blur",
        className,
      )}
    >
      تجريبي مرخّص
    </span>
  );
}
