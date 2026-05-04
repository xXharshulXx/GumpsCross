import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import {
  FaInstagram,
  FaFacebook,
  FaPhoneAlt,
  FaEnvelope,
  FaFilePdf,
} from "react-icons/fa";
import { SiLine } from "react-icons/si";

export function Contact() {
  const [params] = useSearchParams();
  const topic = params.get("topic") || "general";
  const tenant = params.get("tenant") || "";
  const unit = params.get("unit") || "";

  const defaultMessage = useMemo(() => {
    if (topic === "leasing")
      return "Hi Gump’s Cross team — I’m interested in leasing a space.";
    if (topic === "events")
      return "Hi Gump’s Cross team — I’d like to host an event.";
    if (topic === "tenant" && tenant)
      return `Hi Gump’s Cross team — inquiry about ${tenant}.`;
    if (unit)
      return `Hi Gump’s Cross team — inquiry about ${unit}.`;
    return "Hi Gump’s Cross team — I’d like to get in touch.";
  }, [topic, tenant, unit]);

  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const [form, setForm] = useState({
  name: "",
  brand: "",
  email: "",
  message: defaultMessage,
});

const isValid =
  form.name.trim().length > 0 &&
  form.email.trim().length > 0 &&
  form.message.trim().length > 0;

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sent");
  }

  return (
    <div>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 cursor-default">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s connect."
            description="For leasing, events, partnerships, or general inquiries. We’d love to hear from you."
          />

          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            {/* LEFT */}
            <div className="space-y-4">
              <div className="rounded-3xl bg-[rgba(242,232,221,.45)] p-6 shadow-sm">
                <div className="text-sm font-medium text-(--gc-charcoal)">
                  Contact details
                </div>

                <div className="mt-4 space-y-5 text-sm text-(--gc-taupe)">
                  {/* GENERAL */}
                  <div className="space-y-2">
                    <div className="font-medium text-(--gc-charcoal)">
                      General
                    </div>

                    <div className="flex items-center gap-3 cursor-pointer hover:underline">
                      <SiLine className="h-4 w-4" />
                      <span>@gump.cross</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaPhoneAlt className="h-4 w-4" />
                      <a href="tel:+66909893953" className="hover:underline">
                        +66 90 989 3953
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaEnvelope className="h-4 w-4" />
                      <a
                        href="mailto:info@gumpscross.com"
                        className="hover:underline"
                      >
                        info@gumpscross.com
                      </a>
                    </div>
                  </div>

                  {/* SOCIAL */}
                  <div className="space-y-2">
                    <div className="font-medium text-(--gc-charcoal)">
                      Socials
                    </div>

                    <div className="flex items-center gap-4">
                      <a
                        href="#"
                        aria-label="Instagram"
                        className="rounded-full p-2 transition hover:bg-[rgba(217,210,199,.25)] hover:text-(--gc-charcoal)"
                      >
                        <FaInstagram className="h-5 w-5" />
                      </a>

                      <a
                        href="#"
                        aria-label="Facebook"
                        className="rounded-full p-2 transition hover:bg-[rgba(217,210,199,.25)] hover:text-(--gc-charcoal)"
                      >
                        <FaFacebook className="h-5 w-5" />
                      </a>
                    </div>
                  </div>

                  {/* OPTIONAL PDF */}
                  <div className="space-y-2">
                    <div className="font-medium text-(--gc-charcoal)">
                      Resources
                    </div>

                    <a
                      href="/leasing-brochure.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:underline"
                    >
                      <FaFilePdf className="h-4 w-4" />
                      Leasing brochure (PDF)
                    </a>
                  </div>
                </div>
              </div>

              <PlaceholderMedia
                label="[PLACEHOLDER: CONTACT / ATMOSPHERE IMAGE]"
                src="https://lh3.googleusercontent.com/sitesv/APaQ0SSyv8H-066bPOLRDWqn4ietdttwR91yh3SCyj8y-O05wtBfz7lu9KXkcDzEYGg5uDs4rV_DaH0wP9Q3BcG-JGtcq0Gp9DVjh08Ttmyg7oW4RYZmN6wT6V-6n0OooBiluWh76IXtu6YIFA6Jdov2WR41QBPVI539e5XE_Rv5z94Q5P4h41Lmsh9GYKRih0C_4moAtOXh9XoakiqQNTb0D1ZwOXd4YF0POmtKU1g=w1280"
                className="aspect-16/11"
                tone="sand"
              />
            </div>

            {/* RIGHT */}
            <div className="rounded-3xl bg-[rgba(251,248,243,.75)] p-6 shadow-sm">
              {status === "sent" ? (
                <div className="space-y-4">
                  <h2 className="text-2xl tracking-tight">
                    Message received
                  </h2>
                  <p className="text-sm leading-6 text-(--gc-taupe)">
                    This is a front-end placeholder submission. Connect it to
                    your email/CRM backend in development.
                  </p>
                  <Button
                    onClick={() => setStatus("idle")}
                    variant="secondary"
                  >
                    Send another
                  </Button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={onSubmit}>
                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="space-y-2">
                      <div className="text-xs font-medium tracking-[0.22em] text-(--gc-taupe) uppercase">
                        Name
                      </div>
                      <input
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, name: e.target.value }))
                        }
                        className="w-full rounded-2xl bg-[rgba(242,232,221,.35)] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[rgba(167,194,210,.55)]"
                        placeholder="Your name"
                      />
                    </label>

                    <label className="space-y-2">
                      <div className="text-xs font-medium tracking-[0.22em] text-(--gc-taupe) uppercase">
                        Brand name
                      </div>
                      <input
                        value={form.brand}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, brand: e.target.value }))
                        }
                        className="w-full rounded-2xl bg-[rgba(242,232,221,.35)] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[rgba(167,194,210,.55)]"
                        placeholder="Brand / concept (optional)"
                      />
                    </label>
                  </div>

                  <label className="space-y-2">
                    <div className="text-xs font-medium tracking-[0.22em] text-(--gc-taupe) uppercase">
                      Email
                    </div>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      className="w-full rounded-2xl bg-[rgba(242,232,221,.35)] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[rgba(167,194,210,.55)]"
                      placeholder="name@email.com"
                    />
                  </label>

                  <label className="space-y-2">
                    <div className="text-xs font-medium tracking-[0.22em] text-(--gc-taupe) uppercase pt-4">
                      Message
                    </div>
                    <textarea
                      required
                      value={form.message}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                      rows={6}
                      className="w-full resize-none rounded-2xl bg-[rgba(242,232,221,.35)] px-4 py-3 text-sm leading-6 outline-none focus:ring-2 focus:ring-[rgba(167,194,210,.55)]"
                    />
                  </label>

                  <label className="space-y-2">
                    <div className="text-xs font-medium tracking-[0.22em] text-(--gc-taupe) uppercase">
                      File upload (optional)
                    </div>
                    <input
                      type="file"
                      className="cursor-pointer w-full rounded-2xl bg-[rgba(242,232,221,.35)] px-4 py-3 text-sm file:mr-4 file:rounded-full file:border-0 file:bg-[rgba(31,35,38,.92)] file:px-4 file:py-2 file:text-sm file:font-medium file:text-(--gc-warm-white)"
                    />
                    <div className="text-xs text-(--gc-taupe)">
                      Pitchdeck PDF, brand book, menu, or concept images.
                    </div>
                  </label>

                  <div className="pt-5">
                    <Button
                      type="submit"
                      variant={isValid ? "primary" : "secondary"}
                      disabled={!isValid}
                      className="!text-stone-700 cursor-pointer"
                    >
                      Send message
                    </Button>
                  </div>

                  <div className="text-xs text-(--gc-taupe)">
                    By submitting, you agree to privacy policy and terms &
                    conditions.
                  </div>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
