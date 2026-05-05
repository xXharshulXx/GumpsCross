import { Link, NavLink } from "react-router-dom";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { SiLine } from "react-icons/si";



const links = [
  { to: "/", label: "Home" },
  { to: "/directory", label: "Directory" },
  { to: "/events", label: "Events" },
  { to: "/spaces", label: "Available Spaces" },
  { to: "/location", label: "Location" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[rgba(217,210,199,.55)] bg-transparent">
      <Container className="grid gap-10 py-14 md:grid-cols-3">
        <div className="space-y-4">
          <img
            src="/images/GumpsLogo2.png"
            alt="Gump’s Cross"
            className="h-10 w-auto object-contain brightness-50"
          />
          <p className="max-w-sm text-sm leading-6 text-(--gc-taupe) cursor-default">
            A chic, calm, community-driven lifestyle mall—curated cafés, food & beverage brands, and
            events designed to make you linger.
          </p>
          <div className="text-sm text-(--gc-taupe)">
            <div className="font-medium text-(--gc-charcoal) cursor-default">Address</div>
            <div>1351/1-5 Charoen Nakhon Rd., Bang Lamphu Lang Subdistrict, Khlong San District, Bangkok 10600</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className="rounded-xl px-2 py-2 text-(--gc-taupe) transition hover:bg-[rgba(217,210,199,.18)] hover:text-(--gc-charcoal)"
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="space-y-4 cursor-default">
          <div className="text-sm font-medium text-(--gc-charcoal)">Leasing</div>
          <p className="text-sm leading-6 text-(--gc-taupe)">
            Interested in renting a space for a café, food & beverage brand, or studio concept?
          </p>
          <div className="flex flex-wrap gap-3">
            <Button to="/spaces" variant="secondary">
              View Available Spaces
            </Button>
            <Button to="/contact?topic=leasing">Inquire Now</Button>
          </div>

          <div className="pt-2 text-sm text-(--gc-taupe)">
            <div className="font-medium text-(--gc-charcoal)">Social</div>
            <div className="flex items-center gap-4 pt-1">
              <a
                href="https://www.instagram.com/gumpscross/"
                aria-label="Instagram"
                className="text-(--gc-taupe)sition hover:text-(--gc-charcoal)"
              >
                <FaInstagram className="h-5 w-5" />
              </a>

              <Link
                to="contact"
                aria-label="LINE"
                className="text-(--gc-taupe) transition hover:text-(--gc-charcoal)"
              >
                <SiLine className="h-5 w-5" />
              </Link>

              <a
                href="https://www.facebook.com/gumpscross/"
                aria-label="Facebook"
                className="text-(--gc-taupe) transition hover:text-(--gc-charcoal)"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
            </div>

          </div>
        </div>
      </Container>

      <div className="border-t border-[rgba(217,210,199,.55)] bg-[rgba(242,232,221,.18)]">
        <Container className="flex flex-col gap-2 py-6 text-xs text-(--gc-taupe) md:flex-row md:items-center md:justify-between cursor-default">
          <div>© {new Date().getFullYear()} Gump’s Cross. All rights reserved.</div>
          <div className="flex gap-4">
            <a className="underline underline-offset-4" href="#">
              Privacy
            </a>
            <a className="underline underline-offset-4" href="#">
              Terms
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
