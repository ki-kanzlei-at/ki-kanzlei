import type { Metadata } from "next";
import VertriebspartnerKI from "@/views/VertriebspartnerKI";

export const metadata: Metadata = {
  title: "Vertriebspartner KI (Freelance) - Karriere bei KI Kanzlei Österreich",
  description:
    "Werden Sie Vertriebspartner für KI-Lösungen im DACH-Raum (Österreich, Deutschland, Schweiz). 100% Remote, lukrative Provisionen & Mentoring. Begleiten Sie Unternehmen bei der KI-Automatisierung.",
  alternates: { canonical: "https://ki-kanzlei.at/jobs/vertriebspartner-ki" },
};

export default function Page() {
  return <VertriebspartnerKI />;
}
