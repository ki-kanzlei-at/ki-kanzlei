import type { Metadata } from "next";
import Datenschutz from "@/views/Datenschutz";

export const metadata: Metadata = {
  title: "Datenschutz - KI-Automatisierung für Unternehmen",
  description:
    "Datenschutzerklärung der KI Kanzlei. Erfahren Sie, wie wir Ihre Daten schützen und welche Rechte Sie gemäß DSGVO haben, insbesondere beim Einsatz von KI-Technologien.",
  alternates: { canonical: "https://ki-kanzlei.at/datenschutz" },
};

export default function Page() {
  return <Datenschutz />;
}
