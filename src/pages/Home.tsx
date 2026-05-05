import { useRef, useEffect, useState } from "react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { SectionHeading } from "@/components/SectionHeading";
import { TENANTS } from "@/data/tenants";
import { EVENTS } from "@/data/events";
import { Link } from "react-router-dom";
import { Tag } from "@/components/Tag";

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function formatDateRange(start: string, end?: string) {
  if (!end) return formatDate(start);
  return `${formatDate(start)} – ${formatDate(end)}`;
}

function useScrollControls(ref: React.RefObject<HTMLDivElement | null>) {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const update = () => {
    const el = ref.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(
      el.scrollLeft + el.clientWidth < el.scrollWidth - 1
    );
  };

  useEffect(() => {
    update();
    const el = ref.current;
    if (!el) return;

    el.addEventListener("scroll", update);
    window.addEventListener("resize", update);

    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = ref.current;
    if (!el) return;

    const amount = el.clientWidth * 0.8;
    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return { canScrollLeft, canScrollRight, scroll };
}

export function Home() {
  const now = new Date();

  const upcoming = [...EVENTS]
    .filter((e) => {
      const start = new Date(e.startDateIso + "T00:00:00");
      const end = e.endDateIso
        ? new Date(e.endDateIso + "T23:59:59")
        : start;

      return end >= now;
    })
    .sort((a, b) => a.startDateIso.localeCompare(b.startDateIso))
    .slice(0, 6);

  const directoryRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);

  const dirControls = useScrollControls(directoryRef);
  const evtControls = useScrollControls(eventsRef);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <PlaceholderMedia
            label="Gump's Cross Hero"
            className="h-screen min-h-[600px] rounded-none"
            tone="charcoal"
            src="/images/HomeBanner.webp"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(251,248,243,0.2),rgba(251,248,243,0.8)_90%)]" />
        </div>

        <Container className="relative py-32 md:py-48 pb-8">
          <div className="max-w-2xl space-y-6">
            <div className="cursor-default inline-flex items-center gap-2 rounded-full bg-[rgba(242,232,221,.65)] px-4 py-2 text-xs font-medium tracking-[0.22em] text-(--gc-taupe) uppercase backdrop-blur">
              Lifestyle mall · community space
            </div>

            <h1 className="text-5xl leading-[0.95] tracking-tight md:text-6xl cursor-default">
              A curated crossroad for cafés, design, and community.
            </h1>

            <p className="cursor-default max-w-xl text-[15px] leading-7 text-gray-800 md:text-base">
              An intentional destination where everyday rituals meet considered
              design and a sense of belonging.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button to="/directory">Explore Directory</Button>
              <Button to="/spaces" variant="secondary">
                View Available Spaces
              </Button>
              <Button to="/events" variant="primary">
                See Events
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* DIRECTORY */}
      <section className="bg-[rgba(242,232,221,.35)] py-16 md:py-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Directory"
            title="All Under One Roof"
            description="Cafés, Restaurants & Community Spaces."
          />

          <div className="relative">
            {dirControls.canScrollLeft && (
              <Button
                variant="primary"
                onClick={() => dirControls.scroll("left")}
                className="text-black !p-0 absolute md:-left-5 left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full flex items-center justify-center"
              >
                ←
              </Button>
            )}

            {dirControls.canScrollRight && (
              <Button
                variant="primary"
                onClick={() => dirControls.scroll("right")}
                className="text-black !p-0 absolute md:-right-5 -right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full flex items-center justify-center"
              >
                →
              </Button>
            )}

            <div
              ref={directoryRef}
              className="flex gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {TENANTS.slice(0, 6).map((t) => (
                <Link
                  key={t.slug}
                  to={`/directory/${t.slug}`}
                  className="group w-[320px] flex-none rounded-3xl bg-[rgba(251,248,243,.7)] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between">
                      <div className="text-lg">{t.name}</div>
                      <Tag>Floor {t.floor}</Tag>
                    </div>

                    <div className="relative">
                      <div className="group-hover:opacity-0 transition">
                        {t.logoImage ? (
                          <img
                            src={t.logoImage}
                            className="aspect-video w-full rounded-xl object-cover"
                          />
                        ) : (
                          <PlaceholderMedia label="Placeholder" className="aspect-16/10" />
                        )}
                      </div>

                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                        {t.interiorImage ? (
                          <img
                            src={t.interiorImage}
                            className="aspect-video w-full rounded-xl object-cover"
                          />
                        ) : (
                          <PlaceholderMedia label="Placeholder" className="aspect-16/10" />
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* EVENTS */}
      <section className="py-16 md:py-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Events"
            title="Moments Worth Showing Up For"
            description="A collection of upcoming gatherings."
          />

          <div className="relative">
            {evtControls.canScrollLeft && (
              <Button
                variant="primary"
                onClick={() => evtControls.scroll("left")}
                className="!p-0 absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full flex items-center justify-center"
              >
                ←
              </Button>
            )}

            {evtControls.canScrollRight && (
              <Button
                variant="primary"
                onClick={() => evtControls.scroll("right")}
                className="!p-0 absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full flex items-center justify-center"
              >
                →
              </Button>
            )}

            <div
              ref={eventsRef}
              className="flex gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {upcoming.map((e) => (
                <Link
                  key={e.slug}
                  to={`/events/${e.slug}`}
                  className="group w-[320px] flex-none rounded-3xl bg-[rgba(242,232,221,.45)] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="p-5 space-y-4">
                    {e.eventImage || e.heroImage ? (
                      <img
                        src={e.eventImage || e.heroImage}
                        className="aspect-16/10 w-full rounded-2xl object-cover"
                      />
                    ) : (
                      <PlaceholderMedia label="Placeholder" className="aspect-16/10" />
                    )}

                    <div>
                      <div className="flex justify-between">
                        <div>{e.title}</div>
                        <Tag>{e.type}</Tag>
                      </div>

                      <div className="text-sm text-(--gc-taupe)">
                        {formatDateRange(
                          e.startDateIso,
                          e.endDateIso
                        )}
                      </div>

                      <div className="text-sm text-(--gc-taupe) line-clamp-2">
                        {e.excerpt}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}