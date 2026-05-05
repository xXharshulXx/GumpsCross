import { HashRouter, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { Layout } from "@/components/Layout";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Home } from "@/pages/Home";
import { Directory } from "@/pages/Directory";
import { TenantPage } from "@/pages/Tenant";
import { Events } from "@/pages/Events";
import { EventDetail } from "@/pages/EventDetail";
import { Spaces } from "@/pages/Spaces";
import { UnitDetail } from "@/pages/UnitDetail";
import { LocationPage } from "@/pages/Location";
import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";
import { NotFound } from "@/pages/NotFound";

export function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/directory/:tenantSlug" element={<TenantPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:eventSlug" element={<EventDetail />} />
          <Route path="/spaces" element={<Spaces />} />
          <Route path="/spaces/:unitSlug" element={<UnitDetail />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Analytics />
    </HashRouter>
  );
}
