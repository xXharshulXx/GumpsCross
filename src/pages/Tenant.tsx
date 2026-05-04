import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "@/components/Container";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { Button } from "@/components/Button";
import { Tag } from "@/components/Tag";
import { TENANTS } from "@/data/tenants";
import { FaInstagram, FaPhoneAlt } from "react-icons/fa";

export function TenantPage() {
  const { tenantSlug } = useParams();

  const tenant = useMemo(
    () => TENANTS.find((t) => t.slug === tenantSlug),
    [tenantSlug]
  );

  if (!tenant) {
    return (
      <section className="py-20">
        <Container className="space-y-6">
          <h1 className="text-4xl tracking-tight">Tenant not found</h1>
          <p className="text-(--gc-taupe)">
            This is likely a placeholder route. Return to the directory.
          </p>
          <Button to="/directory" variant="secondary">
            Back to Directory
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
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="text-xs font-medium tracking-[0.22em] uppercase text-(--gc-taupe)">
                Tenant
              </div>
              <h1 className="text-4xl tracking-tight md:text-5xl">
                {tenant.name}
              </h1>
              <div className="flex flex-wrap gap-2">
                <Tag>{tenant.category}</Tag>
                <Tag>Floor {tenant.floor}</Tag>
              </div>
            </div>

            <Link
              to="/directory"
              className="hidden rounded-full px-4 py-2 text-sm text-(--gc-taupe) transition hover:bg-[rgba(217,210,199,.35)] hover:text-(--gc-charcoal) md:inline"
            >
              ← Directory
            </Link>
          </div>

          {tenant.heroImage ? (
            <img
              src={tenant.heroImage}
              alt={`${tenant.name} hero`}
              className="aspect-21/9 w-full rounded-3xl object-cover"
            />
          ) : (
            <PlaceholderMedia
              label="[PLACEHOLDER: TENANT HERO IMAGE]"
              className="aspect-21/9"
              tone="charcoal"
            />
          )}
        </Container>
      </section>

      {/* CONTENT */}
      <section className="py-10 md:py-14">
        <Container className="grid gap-10 md:grid-cols-3">
          {/* MAIN */}
          <div className="space-y-4 md:col-span-2">
            <h2 className="text-2xl tracking-tight">Brand description</h2>
            <p className="text-[15px] leading-7 text-(--gc-taupe) md:text-base">
              {tenant.blurb}
            </p>

            <h3 className="pt-4 text-xl tracking-tight">Image gallery</h3>

            <div className="grid gap-4 sm:grid-cols-2">
              {tenant.galleryImages && tenant.galleryImages.length > 0 ? (
                tenant.galleryImages.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${tenant.name} gallery ${i + 1}`}
                    className="aspect-4/3 w-full rounded-2xl object-cover"
                  />
                ))
              ) : (
                <PlaceholderMedia
                  label="[PLACEHOLDER: TENANT GALLERY]"
                  className="aspect-4/3"
                  tone="stone"
                />
              )}
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6">
            <div className="rounded-3xl bg-[rgba(242,232,221,.45)] p-6 shadow-sm">
              <div className="text-sm font-medium text-(--gc-charcoal)">
                Opening hours
              </div>
              <div className="mt-2 text-sm text-(--gc-taupe)">
                {tenant.hours}
              </div>

              {/* SOCIAL + PHONE */}
              <div className="mt-5 space-y-3">
                <div className="text-sm font-medium text-(--gc-charcoal)">
                  Social
                </div>

                <a
                  href={tenant.socialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm text-(--gc-taupe) hover:underline"
                >
                  <FaInstagram className="h-4 w-4 text-(--gc-taupe)" />
                  <span className="text-(--gc-taupe)">{tenant.socialLabel}</span>
                </a>

                {tenant.phone && (
                  <div className="flex items-center gap-3 text-sm text-(--gc-taupe)">
                    <FaPhoneAlt className="h-4 w-4" />
                    <a
                      href={`tel:${tenant.phone}`}
                      className="hover:underline"
                    >
                      {tenant.phone}
                    </a>
                  </div>
                )}
              </div>

              <div className="mt-6 text-sm font-medium text-(--gc-charcoal)">
                Mini location map
              </div>

              {/* CLEAN MAP */}
              <div className="relative mt-3 overflow-hidden rounded-2xl pointer-events-none">
                {tenant.map ? (
                  <>
                    <iframe
                      src={`${tenant.map}&zoom=16&maptype=roadmap&controls=0&disableDefaultUI=true`}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="aspect-4/3 w-full border-0"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(251,248,243,0.0),rgba(251,248,243,0.25))]" />
                  </>
                ) : (
                  <PlaceholderMedia
                    label="[PLACEHOLDER: MINI MAP]"
                    className="aspect-4/3"
                    tone="sand"
                  />
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button to="/location" variant="secondary">
                Visit the Mall
              </Button>
              <Button
                to={`/contact?topic=tenant&tenant=${encodeURIComponent(
                  tenant.name
                )}`}
              >
                Contact Us
              </Button>
            </div>
          </aside>
        </Container>
      </section>
    </div>
  );
}
