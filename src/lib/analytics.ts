import ReactGA from "react-ga4";

const ATTRIBUTION_STORAGE_KEY = "ki_kanzlei_attribution";

/**
 * Centralized analytics utility for Google Analytics 4.
 */

export const GA_EVENTS = {
    LEAD_FORM_START: "lead_form_start",
    LEAD_FORM_SUBMIT: "lead_form_submit",
    CTA_CLICK: "cta_click",
    EXTERNAL_LINK_CLICK: "external_link_click",
    PAGE_VIEW: "page_view",
    LINK_CLICK: "link_click",
} as const;

// Public measurement ID (also hardcoded in app/layout.tsx gtag). Fallback so event tracking works without env config.
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-G8SDGNWZEB";

export type GAEventName = typeof GA_EVENTS[keyof typeof GA_EVENTS];

interface TrackEventProps {
    category?: string;
    action: GAEventName | string;
    label?: string;
    value?: number;
    nonInteraction?: boolean;
    [key: string]: any;
}

/**
 * Helper to check if analytics consent was given
 */
export const hasAnalyticsConsent = (): boolean => {
    try {
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) return false;
        const parsed = JSON.parse(consent);
        return !!parsed.analytics;
    } catch (e) {
        return false;
    }
};

/**
 * Initializes GA4 only if measurement ID is present and (optionally) consent is given.
 */
export const initGA = () => {
    if (GA_MEASUREMENT_ID && !window.GA_INITIALIZED) {
        ReactGA.initialize(GA_MEASUREMENT_ID);
        window.GA_INITIALIZED = true;
        // GA4 initialized
    }
};

declare global {
    interface Window {
        GA_INITIALIZED?: boolean;
        gtag?: (...args: any[]) => void;
    }
}

/**
 * Updates Google Consent Mode state based on user choice
 */
export const updateGAConsent = (granted: boolean) => {
    if (typeof window.gtag === 'function') {
        const status = granted ? 'granted' : 'denied';
        window.gtag('consent', 'update', {
            'ad_storage': status,
            'ad_user_data': status,
            'ad_personalization': status,
            'analytics_storage': status
        });
        // Consent updated
    }
};

/**
 * Tracks a custom event in GA4.
 */
export const trackEvent = ({ action, category, label, value, ...rest }: TrackEventProps) => {
    try {
        ReactGA.event(action, {
            category: category || "engagement",
            label,
            value,
            ...rest,
        });
    } catch (error) {
        console.warn("Analytics tracking failed:", error);
    }
};

/**
 * Specifically tracks Lead Magnet interactions.
 */
export const trackLeadEvent = (status: "start" | "success" | "error" | "captcha_failed", details?: string) => {
    const action = status === "start" ? GA_EVENTS.LEAD_FORM_START : GA_EVENTS.LEAD_FORM_SUBMIT;
    trackEvent({
        action,
        category: "conversion",
        label: details || status,
        status,
    });
};

/**
 * Tracks CTA button clicks.
 */
export const trackCtaClick = (buttonName: string, location: string) => {
    trackEvent({
        action: GA_EVENTS.CTA_CLICK,
        category: "engagement",
        label: buttonName,
        location,
    });
};

/**
 * Tracks generic link clicks.
 */
export const trackLinkClick = (label: string, location: string) => {
    trackEvent({
        action: GA_EVENTS.LINK_CLICK,
        category: "navigation",
        label,
        location,
    });
};

/**
 * Capture and persist attribution data (UTMs, Referrer)
 */
export const captureAttributionData = () => {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const utmParams: Record<string, string> = {};

        const params = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"];
        params.forEach(param => {
            const value = urlParams.get(param);
            if (value) utmParams[param] = value;
        });

        // Only store if we have new UTMs or if nothing is stored yet
        const existing = sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);
        const attribution = existing ? JSON.parse(existing) : {
            first_touch_url: window.location.href,
            referrer: document.referrer || "direct",
            timestamp: new Date().toISOString()
        };

        const updatedAttribution = {
            ...attribution,
            ...utmParams,
            last_touch_url: window.location.href,
            current_referrer: document.referrer || "direct"
        };

        sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(updatedAttribution));
    } catch (error) {
        console.warn("Source tracking failed:", error);
    }
};

/**
 * Retrieve captured attribution data
 */
export const getAttributionData = (): Record<string, any> => {
    try {
        const stored = sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);
        return stored ? JSON.parse(stored) : {};
    } catch (error) {
        return {};
    }
};

/**
 * Tracks clicks to external domains.
 */
export const trackExternalClick = (url: string, platform: string) => {
    trackEvent({
        action: GA_EVENTS.EXTERNAL_LINK_CLICK,
        category: "outbound",
        label: url,
        platform,
    });
};
