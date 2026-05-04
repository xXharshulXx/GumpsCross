import { cn } from "@/utils/cn";

export function PlaceholderMedia({
  label,
  className,
  tone = "sand",
  src,
}: {
  label: string;
  className?: string;
  tone?: "sand" | "stone" | "blue" | "charcoal";
  src?: string;
}) {
  const tones: Record<string, string> = {
    sand: "bg-[linear-gradient(135deg,rgba(242,232,221,.95),rgba(217,210,199,.65))]",
    stone: "bg-[linear-gradient(135deg,rgba(217,210,199,.85),rgba(242,232,221,.55))]",
    blue: "bg-[linear-gradient(135deg,rgba(167,194,210,.55),rgba(242,232,221,.55))]",
    charcoal: "bg-[linear-gradient(135deg,rgba(31,35,38,.82),rgba(108,98,90,.55))]",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl ring-1 ring-[rgba(255,255,255,0.3)] shadow-[0_8px_32px_rgba(0,0,0,0.05)]",
        !src && tones[tone],
        className
      )}
      role="img"
      aria-label={label}
    >
      {src ? (
        <img src={src} alt={label} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
      ) : (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.4))]" />
          <div className="relative flex h-full w-full items-end p-5">
            <div className="rounded-full bg-[rgba(255,255,255,0.65)] px-3 py-2 text-xs font-medium tracking-wide text-(--gc-taupe)drop-blur-md border border-white/40">
              {label}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
