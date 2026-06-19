import type { Metadata } from "next";
import Home from "@/views/Home";

export const metadata: Metadata = {
  title: { absolute: "KI Automatisierung & KI Agentur für Unternehmen im DACH-Raum" },
  description:
    "KI Kanzlei: Voice-Agenten, KI Chatbots, Wissensdatenbanken (RAG) und n8n-Automatisierung für KMU. DSGVO-konform, EU-gehostet, in 30 Tagen live. Jetzt kostenloses KI Audit sichern.",
  keywords:
    "KI Automatisierung, KI Agentur Österreich, KI Agentur DACH, KI Beratung, KI Chatbot, Voicebot, KI Telefonassistent, KI für Unternehmen DACH-Raum, Voice Agent, KI Lösungen, n8n Automatisierung, KI Kanzlei",
  alternates: { canonical: "https://ki-kanzlei.at/" },
};

export default function Page() {
  return <Home />;
}
