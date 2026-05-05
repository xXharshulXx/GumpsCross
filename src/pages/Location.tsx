import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
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
            {/* MAP */}
            <div className="space-y-4">
              <div className="rounded-3xl bg-[rgba(242,232,221,.45)] p-6 shadow-sm">
                <div className="text-sm font-medium text-[var(--gc-charcoal)]">
                  Google Maps
                </div>

                <div className="mt-4 aspect-[16/11] overflow-hidden rounded-xl">
                  <iframe
                    src="https://www.google.com/maps?q=13.7161149,100.5064101&z=17&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                  {/* External link (fix for target error) */}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=GUMP%27s+Cross+Bangkok"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="secondary" className="cursor-pointer">
                      Open in Google Maps
                    </Button>
                  </a>

                  <Button to="/contact" variant="ghost">
                    Ask a question
                  </Button>
                </div>
              </div>
            </div>

            {/* INFO */}
            <div className="space-y-4">
              <div className="rounded-3xl bg-[rgba(242,232,221,.45)] p-6 shadow-sm">
                <div className="text-sm font-medium text-[var(--gc-charcoal)]">
                  Location info
                </div>

                <dl className="mt-4 grid gap-4 text-sm text-[var(--gc-taupe)]">
                  <div>
                    <dt className="font-medium text-[var(--gc-charcoal)]">
                      Address
                    </dt>
                    <dd className="mt-1 cursor-text">
                      1351/1-5 Charoen Nakhon Rd., Bang Lamphu Lang
                      Subdistrict, Khlong San District, Bangkok 10600
                    </dd>
                  </div>

                  <div>
                    <dt className="font-medium text-[var(--gc-charcoal)]">
                      Parking
                    </dt>
                    <dd className="mt-1">Capacity: 6 Cars</dd>
                    <dd className="mt-1">Service Fee: Free</dd>
                    <dd className="mt-1">Time: 10 AM - 10 PM</dd>
                  </div>

                  <div>
                    <dt className="font-medium text-[var(--gc-charcoal)]">
                      Accessibility
                    </dt>
                    <dd className="mt-1">
                      100% Wheelchair Accessible
                    </dd>
                  </div>

                  <div>
                    <dt className="font-medium text-[var(--gc-charcoal)]">
                      Nearby transit
                    </dt>
                    <dd className="mt-1 cursor-text">
                      Krung Thon Buri Station BTS (Exit 3)
                    </dd>
                    <dd className="mt-1 cursor-text">
                      Bus Stop (Sansanee Kindergarten School)
                    </dd>
                    <dd className="mt-1 cursor-text">
                      Chao Phraya Express Boat (Sathorn Pier)
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-3xl bg-[rgba(167,194,210,.18)] p-6">
                <div className="text-sm font-medium text-[var(--gc-charcoal)]">
                  We’re One Call Away
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--gc-taupe)]">
                  Need help getting here? Contact us for directions,
                  transport guidance, or general enquiries.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FLOORPLAN */}
      <section className="bg-[rgba(242,232,221,.35)] py-16 md:py-24 cursor-default">
        <Container className="space-y-8">
          <SectionHeading
            eyebrow="Floorplan"
            title="Orientation & wayfinding"
            description=""
          />

          <div className="aspect-[21/9] overflow-hidden rounded-xl bg-white">
            <img
              src="/images/BirdsEye.jpg"
              alt="Wayfinding Overview"
              className="w-full h-full object-cover"
            />
          </div>
        </Container>
      </section>
    </div>
  );
}