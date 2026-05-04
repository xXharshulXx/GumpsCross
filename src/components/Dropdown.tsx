import { useState } from "react";
import { cn } from "@/utils/cn";

type Option = {
  label: string;
  value: string;
};

type Props = {
  label: string;
  value: string;
  options: Option[];
  onChange: (value: string) => void;
};

export function Dropdown({ label, value, options, onChange }: Props) {
  const [open, setOpen] = useState(false);

  const selected = options.find((o) => o.value === value);

  return (
    <div className="space-y-2 relative">
      <div className="text-xs font-medium tracking-[0.22em] uppercase text-(--gc-taupe)">
        {label}
      </div>

      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="cursor-pointer w-full flex items-center justify-between rounded-2xl border border-[rgba(217,210,199,.7)] bg-[rgba(251,248,243,.9)] px-4 py-3 text-sm shadow-sm"
      >
        <span>{selected?.label}</span>

        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={cn(
            "h-3.5 w-3.5 text-(--gc-taupe) transition-transform",
            open && "rotate-180"
          )}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className=" cursor-pointer absolute z-50 mt-1 w-full overflow-hidden rounded-2xl border border-[rgba(217,210,199,.7)] bg-[rgba(251,248,243,.95)] shadow-lg backdrop-blur-md">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={cn(
                "w-full px-4 py-3 text-left text-sm transition hover:bg-[rgba(217,210,199,.25)] cursor-pointer",
                value === opt.value && "bg-[rgba(217,210,199,.35)]"
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}