import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Providers } from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ki-kanzlei.at"),
  title: {
    default: "KI Kanzlei: KI-Automatisierung für Unternehmen | DACH-Raum",
    template: "%s | KI Kanzlei",
  },
  description:
    "KI Kanzlei: Ihr österreichischer Partner für KI-Automatisierung. Von Wissensdatenbanken bis KI-Agenten, DSGVO-konform & einsatzbereit in 30 Tagen. Jetzt beraten lassen!",
  keywords:
    "KI Kanzlei, KI-Automatisierung Österreich, KI-Automatisierung DACH-Raum, KI-Lösungen Unternehmen Deutschland Schweiz, Wissensdatenbank, Workflow-Automatisierung, KI-Agenten, DSGVO konform",
  authors: [{ name: "KI Kanzlei - Arnold Freissling & Markus Wallner" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_AT",
    url: "https://ki-kanzlei.at",
    siteName: "KI Kanzlei",
    title: "KI Kanzlei: KI-Automatisierung für Unternehmen | DACH-Raum",
    description:
      "KI Kanzlei: Ihr österreichischer Partner für KI-Automatisierung. Wir implementieren KI-Lösungen für Unternehmen, DSGVO-konform, in 30 Tagen einsatzbereit.",
    images: [{ url: "/img/logo-premium.png", width: 400, height: 400 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ki_kanzlei",
    title: "KI Kanzlei: KI-Automatisierung für Unternehmen | DACH-Raum",
    description:
      "KI Kanzlei: Ihr österreichischer Partner für KI-Automatisierung. DSGVO-konform, in 30 Tagen einsatzbereit.",
    images: ["/img/logo-premium.png"],
  },
  other: {
    "geo.region": "AT",
    "geo.placename": "Rossatz",
    "geo.position": "48.3957;15.5036",
    ICBM: "48.3957, 15.5036",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3985ef" />
        <link rel="preconnect" href="https://fonts.cdnfonts.com" />
        <link
          href="https://fonts.cdnfonts.com/css/satoshi"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* Google Consent Mode v2 Default State */}
        <Script id="google-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'wait_for_update': 500
            });
            gtag('js', new Date());
          `}
        </Script>
        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "KI Kanzlei",
              image: "https://ki-kanzlei.at/img/ki_kanzlei_logo_black.svg",
              "@id": "https://ki-kanzlei.at",
              url: "https://ki-kanzlei.at",
              telephone: "+436642314676",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rossatzbach 3/2",
                addressLocality: "Rossatz",
                postalCode: "3602",
                addressRegion: "Niederösterreich",
                addressCountry: "AT",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 48.3955,
                longitude: 15.5234,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "18:00",
              },
              sameAs: [
                "https://at.linkedin.com/in/arnold-freissling-95642b256",
                "https://at.linkedin.com/in/markuswallner-social-media-marketing",
              ],
              areaServed: { "@type": "Country", name: "Austria" },
            }),
          }}
        />
        {/* Organization + WebSite Schema (Rich Results, sameAs) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "KI Kanzlei",
                url: "https://ki-kanzlei.at",
                logo: "https://ki-kanzlei.at/img/logo-premium.png",
                email: "info@ki-kanzlei.at",
                telephone: "+436642314676",
                foundingLocation: "Rossatz, Niederösterreich, Österreich",
                areaServed: ["AT", "DE", "CH"],
                sameAs: [
                  "https://at.linkedin.com/in/arnold-freissling-95642b256",
                  "https://at.linkedin.com/in/markuswallner-social-media-marketing",
                  "https://www.linkedin.com/in/yasmin-berndorfer-984084281/",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "KI Kanzlei",
                url: "https://ki-kanzlei.at",
                inLanguage: "de-AT",
                publisher: { "@type": "Organization", name: "KI Kanzlei" },
              },
            ]),
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-G8SDGNWZEB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            gtag('config', 'G-G8SDGNWZEB', {
              'anonymize_ip': true,
              'send_page_view': false
            });
          `}
        </Script>
        {/* Chatwoot */}
        <Script id="chatwoot" strategy="lazyOnload">
          {`
            (function(d,t){
              var BASE_URL="https://app.chatwoot.com";
              var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
              g.src=BASE_URL+"/packs/js/sdk.js";
              g.async=true;
              s.parentNode.insertBefore(g,s);
              g.onload=function(){
                window.chatwootSDK.run({
                  websiteToken:'VxDtwxSkxZQotpAcaqZ97vU9',
                  baseUrl:BASE_URL
                })
              }
            })(document,"script");
          `}
        </Script>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
