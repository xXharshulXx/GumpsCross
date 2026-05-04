import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/utils/cn";

type Variant = "primary" | "secondary" | "ghost";

type Props = PropsWithChildren<{
  to?: string;
  variant?: Variant;
  className?: string;
}> &
  ButtonHTMLAttributes<HTMLButtonElement>;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-tight transition-colors focus:outline-none focus:ring-2 focus:ring-[rgba(167,194,210,.45)] focus:ring-offset-2 focus:ring-offset-[var(--gc-warm-white)]";

const variants: Record<Variant, string> = {
  primary:
    "bg-[rgba(192,180,170,.65)] text-[var(--gc-warm-white)] hover:bg-[rgba(192,180,170,.82)]",
  secondary:
    "bg-[rgba(242,232,221,.65)] text-[var(--gc-charcoal)] hover:bg-[rgba(242,232,221,.82)]",
  ghost:
    "bg-transparent text-[var(--gc-charcoal)] hover:bg-[rgba(217,210,199,.22)]",
};

export function Button({ to, variant = "primary", className, children, ...rest }: Props) {
  const classes = cn(base, variants[variant], className);

  if (to) {
    return (
      <Link className={classes} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
