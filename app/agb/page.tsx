import type { Metadata } from "next";
import AGB from "@/views/AGB";

export const metadata: Metadata = {
  title: "AGB - KI-Automatisierung für Unternehmen",
  description:
    "Allgemeine Geschäftsbedingungen der KI Kanzlei - AGB für B2B-Leistungen im Bereich KI-gestützter Prozessautomatisierung. Stand: März 2026.",
  alternates: { canonical: "https://ki-kanzlei.at/agb" },
};

export default function Page() {
  return <AGB />;
}
