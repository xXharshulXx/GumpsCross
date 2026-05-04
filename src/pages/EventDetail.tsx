import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "@/components/Container";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { Button } from "@/components/Button";
import { Tag } from "@/components/Tag";
import { EVENTS } from "@/data/events";

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatDateRange(start: string, end?: string) {
  if (!end) return formatDate(start);
  return `${formatDate(start)} – ${formatDate(end)}`;
}

export function EventDetail() {
  const { eventSlug } = useParams();

  const event = useMemo(
    () => EVENTS.find((e) => e.slug === eventSlug),
    [eventSlug]
  );

  if (!event) {
    return (
      <section className="py-20">
        <Container className="space-y-6">
          <h1 className="text-4xl tracking-tight">Event not found</h1>
          <p className="text-(--gc-taupe)">
            This event route may be outdated or incorrect.
          </p>
          <Button to="/events" variant="secondary">
            Back to Events
          </Button>
        </Container>
      </section>
    );
  }

  return (
    <div>
      {/* HERO */}
      <section className="pt-32 pb-10 md:pt-40 md:pb-14">
        <Container className="space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="text-xs font-medium tracking-[0.22em] text-(--gc-taupe) uppercase">
                Event
              </div>

              <h1 className="text-4xl tracking-tight md:text-5xl">
                {event.title}
              </h1>

              <div className="flex flex-wrap items-center gap-2">
                <Tag>{event.type}</Tag>
                <Tag>
                  {formatDateRange(event.startDateIso, event.endDateIso)}
                </Tag>
                <Tag>{event.timeLabel}</Tag>
              </div>
            </div>

            <Link
              to="/events"
              className="hidden rounded-full px-4 py-2 text-sm text-(--gc-taupe) transition hover:bg-[rgba(217,210,199,.35)] hover:text-(--gc-charcoal) md:inline"
            >
              ← Events
            </Link>
          </div>

          {event.heroImage ? (
            <img
              src={event.heroImage}
              alt={`${event.title} hero`}
              className="aspect-21/9 w-full rounded-3xl object-cover"
            />
          ) : (
            <PlaceholderMedia
              label="[PLACEHOLDER: EVENT HERO IMAGE]"
              className="aspect-21/9"
              tone="charcoal"
            />
          )}
        </Container>
      </section>

      {/* CONTENT */}
      <section className="py-10 md:py-14">
        <Container className="grid gap-10 md:grid-cols-3">
          {/* MAIN CONTENT */}
          <div className="space-y-6 md:col-span-2">
            <h2 className="text-2xl tracking-tight">
              Event description
            </h2>

            <p className="text-[15px] leading-7 text-(--gc-taupe) md:text-base">
              {event.description}
            </p>

            {/* GALLERY (renders only if images exist) */}
            {event.galleryImages &&
              event.galleryImages.length > 0 && (
                <div className="pt-6">
                  <h3 className="text-xl tracking-tight">
                    Gallery
                  </h3>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {event.galleryImages.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`${event.title} gallery ${i + 1}`}
                        className="aspect-4/3 w-full rounded-2xl object-cover"
                      />
                    ))}
                  </div>
                </div>
              )}

            {/* LOCATION + NOTES CARD */}
            <div className="rounded-3xl bg-[rgba(242,232,221,.45)] p-6 text-sm text-(--gc-taupe) shadow-sm">
              <div className="font-medium text-(--gc-charcoal)">
                Location
              </div>
              <div className="mt-2">
                {event.locationLabel}
              </div>

              {event.notes && (
                <>
                  <div className="mt-4 font-medium text-(--gc-charcoal)">
                    Notes
                  </div>
                  <div className="mt-2">
                    {event.notes}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-4">
            <div className="rounded-3xl bg-[rgba(242,232,221,.45)] p-6 shadow-sm">
              <div className="text-sm font-medium text-(--gc-charcoal)">
                Date & time
              </div>

              <div className="mt-2 text-sm text-(--gc-taupe)">
                {formatDateRange(
                  event.startDateIso,
                  event.endDateIso
                )}{" "}
                · {event.timeLabel}
              </div>

              <div className="mt-5 text-sm font-medium text-(--gc-charcoal)">
                Where
              </div>

              <div className="mt-2 text-sm text-(--gc-taupe)">
                {event.locationLabel}
              </div>
            </div>

            <div className="space-y-3">
              <Button to="/contact?topic=events">
                Host an Event at Gump’s Cross
              </Button>

              <Button to="/location" variant="secondary">
                View Location
              </Button>
            </div>
          </aside>
        </Container>
      </section>
    </div>
  );
}
