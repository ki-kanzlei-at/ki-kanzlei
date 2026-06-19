'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackEvent, GA_EVENTS, captureAttributionData, initGA, hasAnalyticsConsent } from "@/lib/analytics";

export const AnalyticsTracker = () => {
  const pathname = usePathname();

  useEffect(() => {
    captureAttributionData();
    if (hasAnalyticsConsent()) {
      initGA();
    }
  }, []);

  useEffect(() => {
    const isGInitialized = (window as any).GA_INITIALIZED;
    if (isGInitialized) {
      const industry = pathname.match(/\/branchen\/ki-loesungen-([^/]+)/)?.[1] || "home";
      trackEvent({
        action: GA_EVENTS.PAGE_VIEW,
        category: "navigation",
        label: pathname,
        industry: industry,
        page_path: pathname,
        page_title: document.title,
      });
    }
  }, [pathname]);

  return null;
};
