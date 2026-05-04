import type { PropsWithChildren } from "react";
import { cn } from "@/utils/cn";

export function Card({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        "rounded-3xl bg-[rgba(251,248,243,.62)] p-6 ring-1 ring-[rgba(217,210,199,.55)]",
        className
      )}
    >
      {children}
    </div>
  );
}
