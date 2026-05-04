import type { PropsWithChildren } from "react";
import { cn } from "@/utils/cn";

export function Tag({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-[rgba(242,232,221,.55)] px-3 py-1 text-xs font-medium text-[var(--gc-taupe)] ring-1 ring-[rgba(217,210,199,.45)]",
        className
      )}
    >
      {children}
    </span>
  );
}
