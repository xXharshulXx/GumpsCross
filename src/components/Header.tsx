import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useScrollY } from "@/hooks/useScrollY";
import { cn } from "@/utils/cn";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/directory", label: "Directory" },
  { to: "/events", label: "Events" },
  { to: "/spaces", label: "Available Spaces" },
  { to: "/location", label: "Location" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
] as const;

function IconMenu(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      className={props.className}
      aria-hidden="true"
    >
      <path d="M5 7h14" />
      <path d="M5 12h14" />
      <path d="M5 17h14" />
    </svg>
  );
}

function IconClose(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      className={props.className}
      aria-hidden="true"
    >
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </svg>
  );
}

export function Header() {
  const scrolled = useScrollY(20);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-6 left-0 right-0 z-50 mx-auto w-[calc(100%-48px)] max-w-5xl rounded-full transition-all duration-500",
          scrolled || open
            ? "bg-[rgba(255,255,255,0.65)] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] ring-1 ring-white/40"
            : "bg-[rgba(255,255,255,0.2)] backdrop-blur-sm ring-1 ring-white/20"
        )}
      >
        <div className="flex items-center justify-between px-6 py-3">
          <NavLink to="/" className="relative z-50 flex items-baseline gap-3">
            <img
              src="/images/GumpsLogo2.png"
              alt="Gump’s Cross"
              className={cn(
                "h-8 w-auto md:h-10 transition-all duration-300",
                !scrolled && !open ? "brightness-50" : ""
              )}
            />
          </NavLink>

          <div className="flex items-center gap-3">
            <NavLink
              to="/contact?topic=leasing"
              className="hidden rounded-full bg-white/40 px-5 py-2 text-sm font-medium text-slate-800 ring-1 ring-white/50 transition hover:bg-white/60 md:inline-block"
            >
              Leasing
            </NavLink>

            <button
              type="button"
              className="group relative z-50 inline-flex items-center gap-2 rounded-full bg-white/40 px-4 py-2 text-sm font-medium text-slate-800 ring-1 ring-white/50 transition hover:bg-white/60 cursor-pointer"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="hidden sm:inline">Menu</span>
              {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 overflow-y-auto overflow-x-hidden transition-all duration-700 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']",
          open
            ? "pointer-events-auto opacity-100 backdrop-blur-[20px] bg-white/30"
            : "pointer-events-none opacity-0 backdrop-blur-none"
        )}
        aria-hidden={!open}
      >
        <div className="flex min-h-full w-full flex-col items-center justify-center py-32">
          <div 
            className={cn(
              "w-full max-w-lg space-y-2 p-6 transition-all duration-700 delay-100",
              open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "block w-full rounded-4xl px-8 py-5 text-center text-2xl font-medium tracking-tight transition-all duration-300 hover:scale-[1.02]",
                    isActive
                      ? "bg-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.06)] text-slate-800"
                      : "bg-white/40 hover:bg-white/60 text-slate-600 hover:text-slate-800"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            
            <div className="pt-4 flex justify-center gap-4">
              <NavLink
                  to="/contact?topic=leasing"
                  className="rounded-full bg-stone-500 px-6 py-3 text-sm font-medium !text-stone-100 transition hover:bg-stone-400"
                >
                  Leasing Inquiry
                </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
