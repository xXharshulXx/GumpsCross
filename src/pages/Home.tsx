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

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <PlaceholderMedia
            label="Gump's Cross Hero"
            className="h-screen min-h-[600px] rounded-none"
            tone="charcoal"
            src="https://lh3.googleusercontent.com/p/AF1QipNJHDIK_W1Q77vcol5CF6yEkBFAJBSeD9wbOi4A=s1360-w1360-h1020-rw"
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
              design and a sense of belonging — shaped by cafés, creative spaces,
              and a vibrant community.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button to="/directory">Explore Directory</Button>
              <Button to="/spaces" variant="secondary">
                View Available Spaces
              </Button>
              <Button to="/events" variant="ghost">
                See Events
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* DIRECTORY PREVIEW */}
      <section className="bg-[rgba(242,232,221,.35)] py-16 md:py-24">
        <Container className="cursor-default space-y-10">
          <SectionHeading
            eyebrow="Directory"
            title="All Under One Roof"
            description="Cafés, Restaurants & Community Spaces."
          />

          <div className="flex gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {TENANTS.slice(0, 6).map((t) => (
              <Link
                key={t.slug}
                to={`/directory/${t.slug}`}
                className="group relative w-[320px] flex-none overflow-hidden rounded-3xl bg-[rgba(251,248,243,.7)] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg tracking-tight">
                      {t.name}
                    </div>
                    <Tag>Floor {t.floor}</Tag>
                  </div>

                  {/* Hover Swap Media */}
                  <div className="relative">
                    {/* Default (Logo) */}
                    <div className="transition duration-300 ease-out group-hover:opacity-0">
                      {t.logoImage ? (
                        <img
                          src={t.logoImage}
                          alt={`${t.name} logo`}
                          className="aspect-video w-full rounded-xl object-cover"
                        />
                      ) : (
                        <PlaceholderMedia
                          label="[PLACEHOLDER: TENANT LOGO]"
                          className="aspect-video"
                          tone="sand"
                        />
                      )}
                    </div>

                    {/* Hover (Interior) */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 ease-out group-hover:opacity-100">
                      {t.interiorImage ? (
                        <img
                          src={t.interiorImage}
                          alt={`${t.name} interior`}
                          className="aspect-video w-full rounded-xl object-cover"
                        />
                      ) : (
                        <PlaceholderMedia
                          label="[PLACEHOLDER: TENANT INTERIOR IMAGE]"
                          className="aspect-video"
                          tone="blue"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* EVENTS PREVIEW */}
      <section className="py-16 md:py-24">
        <Container className="cursor-default space-y-10">
          <SectionHeading
            eyebrow="Events"
            title="Moments Worth Showing Up For"
            description="A collection of upcoming gatherings and experiences."
          />

          <div className="flex gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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
                      alt={e.title}
                      className="aspect-16/10 w-full rounded-2xl object-cover"
                    />
                  ) : (
                    <PlaceholderMedia
                      label="[PLACEHOLDER: EVENT IMAGE]"
                      className="aspect-16/10"
                      tone="stone"
                    />
                  )}

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-lg tracking-tight">
                        {e.title}
                      </div>
                      <Tag>{e.type}</Tag>
                    </div>

                    <div className="text-sm text-(--gc-taupe)">
                      {formatDateRange(e.startDateIso, e.endDateIso)}
                    </div>

                    <div className="text-sm text-(--gc-taupe) line-clamp-2">
                      {e.excerpt}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
