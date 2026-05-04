import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname, hash, search } = useLocation();

  useEffect(() => {
    // For SPA feel: scroll to top on route changes.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash, search]);

  return null;
}
