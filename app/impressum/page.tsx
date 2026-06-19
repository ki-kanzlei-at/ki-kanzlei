import type { Metadata } from "next";
import Impressum from "@/views/Impressum";

export const metadata: Metadata = {
  title: "Impressum - KI-Automatisierung für Unternehmen",
  description:
    "Impressum der KI Kanzlei - Informationen über das Unternehmen, Kontaktmöglichkeiten und rechtliche Hinweise gemäß ECG und MedienG.",
  alternates: { canonical: "https://ki-kanzlei.at/impressum" },
};

export default function Page() {
  return <Impressum />;
}
