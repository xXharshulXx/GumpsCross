import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { Tag } from "@/components/Tag";
import { EVENTS, type EventType } from "@/data/events";
import { Dropdown } from "@/components/Dropdown";

type TimeFilter = "Upcoming" | "Past" | "All";
type TypeFilter = "All" | EventType;

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

export function Events() {
  const [time, setTime] = useState<TimeFilter>("Upcoming");
  const [type, setType] = useState<TypeFilter>("All");

  const now = new Date();

  const filtered = useMemo(() => {
    let list = [...EVENTS];

    // Filter by type
    if (type !== "All") {
      list = list.filter((e) => e.type === type);
    }

    // Filter by time
    if (time !== "All") {
      list = list.filter((e) => {
        const start = new Date(e.startDateIso + "T00:00:00");
        const end = e.endDateIso
          ? new Date(e.endDateIso + "T23:59:59")
          : start;

        if (time === "Upcoming") {
          return end >= now;
        } else {
          return end < now;
        }
      });
    }

    // Sort by start date
    list.sort((a, b) =>
      a.startDateIso.localeCompare(b.startDateIso)
    );

    if (time === "Past") {
      list.reverse();
    }

    return list;
  }, [time, type]);

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 cursor-default">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Events"
          title="Workshops, pop-ups, and community moments."
          description="Thoughtfully curated experiences designed to bring the community together."
        />

        {/* Filters */}
        <div className="grid gap-4 rounded-3xl bg-[rgba(242,232,221,.45)] p-6 shadow-sm md:grid-cols-2">

          {/* TIME FILTER */}
          <label className="space-y-2">

            <div className="relative">
              <Dropdown
                label="Upcoming / Past"
                value={time}
                onChange={(v) => setTime(v as TimeFilter)}
                options={[
                  { label: "All", value: "All" },
                  { label: "Past", value: "Past" },
                  { label: "Upcoming", value: "Upcoming" },
                ]}
              />
            </div>
          </label>

          {/* TYPE FILTER */}
          <label className="space-y-2">

            <div className="relative">
              <Dropdown
                label="Event type"
                value={type}
                onChange={(v) => setType(v as TypeFilter)}
                options={[
                  { label: "All", value: "All" },
                  { label: "Workshop", value: "Workshop" },
                  { label: "Pop-up", value: "Pop-up" },
                  { label: "Talk", value: "Talk" },
                  { label: "Community", value: "Community" },
                ]}
              />
            </div>
          </label>

        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {filtered.map((e) => (
            <Link
              key={e.slug}
              to={`/events/${e.slug}`}
              className="group rounded-3xl bg-[rgba(251,248,243,.72)] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="p-6">
                <div className="grid gap-5 md:grid-cols-[180px_1fr] md:items-center">

                  {/* IMAGE */}
                  {e.eventImage || e.heroImage ? (
                    <img
                      src={e.eventImage || e.heroImage}
                      alt={e.title}
                      className="aspect-16/12 w-full rounded-2xl object-cover"
                    />
                  ) : (
                    <PlaceholderMedia
                      label="[PLACEHOLDER: EVENT IMAGE]"
                      className="aspect-16/12"
                      tone="stone"
                    />
                  )}

                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-xl tracking-tight text-(--gc-charcoal)">
                        {e.title}
                      </div>
                      <Tag>{e.type}</Tag>
                    </div>

                    <div className="text-sm text-(--gc-taupe)">
                      {formatDateRange(e.startDateIso, e.endDateIso)} ·{" "}
                      {e.timeLabel} · {e.locationLabel}
                    </div>

                    <div className="text-sm leading-6 text-(--gc-taupe)">
                      {e.excerpt}
                    </div>

                    <div className="pt-1 text-xs font-medium tracking-[0.18em] text-(--gc-taupe) uppercase">
                      View details
                    </div>
                  </div>

                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
