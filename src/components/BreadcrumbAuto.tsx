'use client';

import { usePathname } from "next/navigation";

// Emittiert BreadcrumbList JSON-LD (Rich Results) anhand des aktuellen Pfads.
// Kein sichtbares Markup -> keine Layout-Verschiebung. Wird in Section-Layouts genutzt.
const LABELS: Record<string, string> = {
  leistungen: "Leistungen",
  branchen: "Branchen",
  vergleich: "Vergleich",
  "chatgpt-vs-claude": "ChatGPT vs Claude",
  "n8n-vs-zapier-vs-make": "n8n vs Zapier vs Make",
  "voicebot-vs-callcenter": "Voicebot vs Callcenter",
  "generative-engine-optimization": "Generative Engine Optimization",
  "sap-integration": "SAP-Integration",
  "3d-planung-ki": "3D-Planung mit KI",
};

function pretty(slug: string): string {
  return LABELS[slug] ?? slug
    .replace(/^ki-loesungen-/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function BreadcrumbAuto() {
  const path = usePathname() || "/";
  const segs = path.split("/").filter(Boolean);
  if (segs.length === 0) return null;

  const items: { name: string; item: string }[] = [{ name: "Start", item: "https://ki-kanzlei.at" }];
  let acc = "";
  for (const seg of segs) {
    acc += "/" + seg;
    items.push({ name: pretty(seg), item: "https://ki-kanzlei.at" + acc });
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: it.item })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
