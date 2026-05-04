import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { Button } from "@/components/Button";

export function LocationPage() {
  return (
    <div>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 cursor-default">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Location"
            title="Find your way to Gump’s Cross."
            description="All the details to help you get here, simply and seamlessly." 
          />

          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div className="space-y-4">
              <div className="rounded-3xl bg-[rgba(242,232,221,.45)] p-6 shadow-sm">
                <div className="text-sm font-medium text-[var(--gc-charcoal)]">Google Maps</div>
                <div className="mt-4">
                  <PlaceholderMedia
                    label="[PLACEHOLDER: GOOGLE MAP]"
                    className="aspect-[16/11]"
                    tone="sand"
                  />
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Button to="#" variant="secondary">
                    Open in Google Maps (placeholder)
                  </Button>
                  <Button to="/contact" variant="ghost">
                    Ask a question
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-3xl bg-[rgba(242,232,221,.45)] p-6 shadow-sm">
                <div className="text-sm font-medium text-[var(--gc-charcoal)]">Location info</div>
                <dl className="mt-4 grid gap-4 text-sm text-[var(--gc-taupe)]">
                  <div>
                    <dt className="font-medium text-[var(--gc-charcoal)]">Address</dt>
                    <dd className="mt-1 cursor-text">1351/1-5 Charoen Nakhon Rd., Bang Lamphu Lang Subdistrict, Khlong San District, Bangkok 10600
</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-[var(--gc-charcoal)]">Parking</dt>
                    <dd className="mt-1">Capacity: 6 Cars</dd>
                    <dd className="mt-1">Service Fee: Free</dd>
                    <dd className="mt-1">Time: 10 AM - 10 PM</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-[var(--gc-charcoal)]">Accessibility</dt>
                    <dd className="mt-1">100% Wheelchair Accessible </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-[var(--gc-charcoal)]">Nearby transit</dt>
                    <dd className="mt-1 cursor-text">Krung Thon Buri Station BTS (Exit 3)</dd>
                    <dd className="mt-1 cursor-text">Bus Stop (Sansanee Kindergarten School)</dd>
                    <dd className="mt-1 cursor-text">Chao Phraya Express Boat (Sathorn Pier)</dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-3xl bg-[rgba(167,194,210,.18)] p-6">
                <div className="text-sm font-medium text-[var(--gc-charcoal)]">We’re One Call Away</div>
                <p className="mt-2 text-sm leading-6 text-[var(--gc-taupe)]">
                  Need help getting here? Contact us for directions, transport guidance, or general enquiries.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[rgba(242,232,221,.35)] py-16 md:py-24 cursor-default">
        <Container className="space-y-8">
          <SectionHeading
            eyebrow="Floorplan"
            title="Orientation & wayfinding"
            description="Add a simple floor overview image and quick legends (floors, key anchors, lifts)." 
          />
          <PlaceholderMedia
            label="Wayfinding Overview"
            className="aspect-[21/9] bg-white"
            tone="stone"
            src="https://lh3.googleusercontent.com/sitesv/APaQ0SQ7HWpHCDIGQQecKUWYoejSh0VTp9_7GG7r76MCqr3RfrpJ8hRFf6Fib1fS2hOL2UXDiP6wTKcmifXOOTnu3QLEU6fghcddovituGmi0mnjzGTFETHHDfLd6l5-Pm8xJimQyfi6ICRODdXQa-bSc9UnIUK7m0LbZIh0G0nN-nIL9lQauxfaqFy-S-TG0ZcMJ_3Mx7bWvtMSi8blw31YJMFc_IIv2W9SmBAL0Wg=w1280"
          />
        </Container>
      </section>
    </div>
  );
}
