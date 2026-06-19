'use client';

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Cal?: any;
  }
}

export const ContactForm = () => {
  const calInitialized = useRef(false);

  useEffect(() => {
    if (calInitialized.current) return;
    calInitialized.current = true;

    // Cal.com inline embed code
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          (api as any).q = (api as any).q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal("init", "kostenloses-analysegesprach", { origin: "https://app.cal.com" });

    window.Cal.ns["kostenloses-analysegesprach"]("inline", {
      elementOrSelector: "#my-cal-inline-kostenloses-analysegesprach",
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true", theme: "light" },
      calLink: "ki-kanzlei/kostenloses-analysegesprach",
    });

    window.Cal.ns["kostenloses-analysegesprach"]("ui", {
      theme: "light",
      cssVarsPerTheme: {
        light: { "cal-brand": "#3985ef" },
        dark: { "cal-brand": "#3985ef" },
      },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return (
    <section id="contact" className="section-spacing">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
            Bereit für Ihr kostenloses Erstgespräch?
          </h2>
          <p className="text-lg text-muted-foreground slide-up">
            In einem kostenlosen, unverbindlichen Erstgespräch klären wir Ihre Ausgangslage und zeigen, wo KI bei Ihnen am schnellsten wirkt. Für die volle Analyse gibt es das KI Assessment Center, voll auf die Umsetzung anrechenbar.
          </p>
        </div>

        <div className="w-full slide-up" style={{ minHeight: "600px" }}>
          <div
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            id="my-cal-inline-kostenloses-analysegesprach"
          ></div>
        </div>
      </div>
    </section>
  );
};
