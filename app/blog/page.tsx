import type { Metadata } from "next";
import Script from "next/script";
import Blog from "@/views/Blog";

export const metadata: Metadata = {
  title: "KI Blog: KI News, Insights & Automatisierung",
  description:
    "KI Blog der KI Kanzlei: aktuelle KI News, KI Insights, Best Practices und Case Studies rund um KI-Automatisierung, AI Agents und generative KI für Unternehmen im DACH-Raum.",
  keywords:
    "KI Blog, KI News, KI Insights, KI Automatisierung, AI News, KI Trends, KI Case Studies, generative KI, AI Agents, KI für Unternehmen",
  alternates: { canonical: "https://ki-kanzlei.at/blog" },
  openGraph: {
    title: "KI Blog: KI News, Insights & Automatisierung",
    description:
      "Aktuelle KI News, KI Insights und Best Practices rund um KI-Automatisierung für Unternehmen im DACH-Raum.",
    url: "https://ki-kanzlei.at/blog",
    type: "website",
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "KI Kanzlei Blog",
  description:
    "KI News, KI Insights, Best Practices und Case Studies rund um KI-Automatisierung für Unternehmen im DACH-Raum.",
  url: "https://ki-kanzlei.at/blog",
  inLanguage: "de-AT",
  publisher: {
    "@type": "ProfessionalService",
    name: "KI Kanzlei",
    url: "https://ki-kanzlei.at",
  },
};

export default function Page() {
  return (
    <>
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Blog />
    </>
  );
}
