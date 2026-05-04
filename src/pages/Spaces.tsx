import { Link } from "react-router-dom";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { Button } from "@/components/Button";
import { Tag } from "@/components/Tag";
import { UNITS } from "@/data/units";

export function Spaces() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 cursor-default">
        <Container className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Available Spaces"
              title="Lease within a design-led community space."
              description="Designed for creative, community-minded businesses."
            />

            <div className="flex flex-wrap gap-3">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[rgba(242,232,221,.7)] px-5 py-2.5 text-sm font-medium tracking-tight text-(--gc-charcoal) shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                href="/downloads/gumps-cross-leasing-deck.pdf"
                download
              >
                Download Leasing Deck
              </a>

              <Button to="/contact?topic=leasing">Inquire Now</Button>
            </div>
          </div>

          <PlaceholderMedia
            label="Leasing Opportunity"
            src="https://lh3.googleusercontent.com/p/AF1QipPP2Tx0O8RjIQyZmjM5IcXZbMBr18s1yH8GttcN=s1360-w1360-h1020-rw"
            className="aspect-4/3"
            tone="stone"
          />
        </Container>
      </section>

      {/* Units Grid */}
      <section className="bg-[rgba(242,232,221,.35)] py-16 md:py-24 cursor-default">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Units"
            title="Available Units"
            description="A curated selection of spaces ready for your concept."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {UNITS.map((u) => (
              <Link
                key={u.slug}
                to={`/spaces/${u.slug}`}
                className="group rounded-3xl bg-[rgba(251,248,243,.72)] p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="text-lg tracking-tight text-(--gc-charcoal)">
                    {u.label}
                  </div>
                  <Tag>{u.availability}</Tag>
                </div>

                <div className="mt-2 text-sm text-(--gc-taupe)">
                  Floor {u.floor} · {u.sizeSqm} sqm · {u.frontage}
                </div>

                <div className="mt-5">
                  {u.interiorImage ? (
                    <img
                      src={u.interiorImage}
                      alt={u.label}
                      className="aspect-16/10 w-full rounded-xl object-cover"
                    />
                  ) : (
                    <PlaceholderMedia
                      label="[PLACEHOLDER: UNIT IMAGE]"
                      className="aspect-16/10"
                      tone="sand"
                    />
                  )}
                </div>

                <div className="mt-4 text-sm leading-6 text-(--gc-taupe) line-clamp-2">
                  {u.summary}
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
