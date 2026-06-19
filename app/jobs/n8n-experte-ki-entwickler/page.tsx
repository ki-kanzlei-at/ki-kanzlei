import type { Metadata } from "next";
import N8nExperteKI from "@/views/N8nExperteKI";

export const metadata: Metadata = {
  title: "n8n Experte / KI Entwickler (m/w/d) - Jobs KI Kanzlei",
  description:
    "Job als n8n Experte & KI Entwickler. Baue Workflow-Automatisierungen und KI-Agenten für Unternehmen im DACH-Raum (Österreich, Deutschland, Schweiz). 100% Remote, Freelance, spannende Projekte.",
  alternates: { canonical: "https://ki-kanzlei.at/jobs/n8n-experte-ki-entwickler" },
};

export default function Page() {
  return <N8nExperteKI />;
}
