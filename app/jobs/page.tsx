import type { Metadata } from "next";
import Jobs from "@/views/Jobs";

export const metadata: Metadata = {
  title: "KI Jobs & Karriere bei der KI Kanzlei | Remote DACH",
  description:
    "Karriere bei der KI Kanzlei: offene KI Jobs als n8n Entwickler und KI Vertriebspartner. 100% Remote in Österreich und im DACH-Raum, Freelance, Mentoring und echte KI-Projekte statt Buzzwords.",
  keywords:
    "KI Jobs, Karriere KI, KI Jobs Österreich, n8n Entwickler Job, KI Vertrieb Job, KI Vertriebspartner, Remote KI Jobs, Freelance KI, KI Karriere DACH, n8n Freelancer, AI Jobs Österreich",
  alternates: { canonical: "https://ki-kanzlei.at/jobs" },
};

export default function Page() {
  return <Jobs />;
}
