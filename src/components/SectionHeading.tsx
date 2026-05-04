import { cn } from "@/utils/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl",
        className
      )}
    >
      {eyebrow ? (
        <div className="text-xs font-medium tracking-[0.22em] text-[var(--gc-taupe)] uppercase">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-3xl leading-[1.05] tracking-tight text-[var(--gc-charcoal)] md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-[15px] leading-7 text-[var(--gc-taupe)] md:text-base">{description}</p>
      ) : null}
    </div>
  );
}
