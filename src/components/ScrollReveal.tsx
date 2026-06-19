'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Dezentes Scroll-Reveal: blendet Sektionen beim Scrollen sanft ein (fade + lift).
// Progressive Enhancement (ohne JS bleibt alles sichtbar), respektiert reduced-motion,
// und laeuft bei jedem Routenwechsel neu.
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let io: IntersectionObserver | null = null;
    const raf = requestAnimationFrame(() => {
      const sections = Array.from(document.querySelectorAll("main section"));
      io = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("kk-in");
              obs.unobserve(e.target);
            }
          });
        },
        { threshold: 0.06, rootMargin: "0px 0px -8% 0px" }
      );

      const vh = window.innerHeight;
      sections.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        // Bereits sichtbare / fast sichtbare Sektionen (Hero) sofort zeigen, kein Flackern.
        if (top < vh * 0.85) return;
        el.classList.add("kk-reveal");
        io!.observe(el);
      });
    });

    return () => {
      cancelAnimationFrame(raf);
      io?.disconnect();
    };
  }, [pathname]);

  return null;
}
