import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export function Layout() {
  return (
    <div className="min-h-screen bg-[var(--gc-warm-white)]">
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
