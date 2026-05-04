import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "@/components/Container";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { Button } from "@/components/Button";
import { Tag } from "@/components/Tag";
import { UNITS } from "@/data/units";

export function UnitDetail() {
  const { unitSlug } = useParams();
  const unit = useMemo(() => UNITS.find((u) => u.slug === unitSlug), [unitSlug]);

  if (!unit) {
    return (
      <section className="py-20">
        <Container className="space-y-6">
          <h1 className="text-4xl tracking-tight">Unit not found</h1>
          <p className="text-(--gc-taupe)">
            This unit route is likely a placeholder.
          </p>
          <Button to="/spaces" variant="secondary">
            Back to Available Spaces
          </Button>
        </Container>
      </section>
    );
  }

  return (
    <div className="pb-24 md:pb-0 pt-28">
      {/* Header */}
      <section className="py-10 md:py-14">
        <Container className="space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-3">
              <div className="text-xs font-medium tracking-[0.22em] text-(--gc-taupe) uppercase">
                Available Unit
              </div>

              <h1 className="text-4xl tracking-tight md:text-5xl">
                {unit.label}
              </h1>

              <div className="flex flex-wrap gap-2">
                <Tag>Floor {unit.floor}</Tag>
                <Tag>{unit.sizeSqm} sqm</Tag>
                <Tag>{unit.frontage}</Tag>
                <Tag>{unit.availability}</Tag>
              </div>
            </div>

            <Link
              to="/spaces"
              className="hidden rounded-full px-4 py-2 text-sm text-(--gc-taupe) transition hover:bg-[rgba(217,210,199,.35)] hover:text-(--gc-charcoal) md:inline"
            >
              ← Spaces
            </Link>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-6 md:py-10">
        <Container className="grid gap-10 md:grid-cols-3">
          <div className="space-y-8 md:col-span-2">
            {/* Floorplan */}
            {unit.floorPlanImage ? (
              <img
                src={unit.floorPlanImage}
                alt={`${unit.label} floorplan`}
                className="aspect-16/10 w-full rounded-2xl object-cover"
              />
            ) : (
              <PlaceholderMedia
                label="[PLACEHOLDER: FLOORPLAN]"
                className="aspect-16/10"
                tone="sand"
              />
            )}

            {/* Description */}
            <div className="space-y-3">
              <h2 className="text-2xl tracking-tight">Description</h2>
              <p className="text-[15px] leading-7 text-(--gc-taupe) md:text-base">
                {unit.summary}
              </p>
            </div>

            {/* Notes */}
            {unit.notes && (
              <div className="space-y-3">
                <h3 className="text-xl tracking-tight">Leasing Notes</h3>
                <p className="text-sm leading-6 text-(--gc-taupe)">
                  {unit.notes}
                </p>
              </div>
            )}

            {/* Gallery */}
            {unit.galleryImages && unit.galleryImages.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xl tracking-tight">Gallery</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {unit.galleryImages.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${unit.label} image ${i + 1}`}
                      className="aspect-4/3 w-full rounded-xl object-cover"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-4">
            <div className="rounded-3xl bg-[rgba(242,232,221,.45)] p-6 shadow-sm md:sticky md:top-24">
              <div className="text-sm font-medium text-(--gc-charcoal)">
                Unit Summary
              </div>

              <div className="mt-3 space-y-2 text-sm text-(--gc-taupe)">
                <div>Floor: {unit.floor}</div>
                <div>Size: {unit.sizeSqm} sqm</div>
                <div>Frontage: {unit.frontage}</div>
                <div>Status: {unit.availability}</div>
              </div>

              <div className="mt-6 space-y-3">
                <Button
                  to={`/contact?topic=leasing&unit=${encodeURIComponent(
                    unit.label
                  )}`}
                >
                  Inquire Now
                </Button>

                <a
                  className="inline-flex w-full items-center justify-center rounded-full bg-[rgba(242,232,221,.7)] px-5 py-2.5 text-sm font-medium text-(--gc-charcoal) shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  href="/downloads/gumps-cross-leasing-deck.pdf"
                  download
                >
                  Download Leasing Deck
                </a>
              </div>
            </div>
          </aside>
        </Container>
      </section>
    </div>
  );
}
