import type { Metadata } from "next";
import { NavigationHome } from "@/components/NavigationHome";
import { FooterModern } from "@/components/FooterModern";
import { AssessmentForm } from "@/components/AssessmentForm";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt: KI Kanzlei aus Österreich",
  description:
    "Nehmen Sie Kontakt mit der KI Kanzlei auf. Kostenloses, unverbindliches Erstgespräch zu KI Beratung und KI Automatisierung für Unternehmen im DACH-Raum. DSGVO-konform, EU-Hosting.",
  keywords:
    "KI Kanzlei Kontakt, KI Beratung Kontakt, KI Agentur Österreich, kostenloses Erstgespräch KI, KI Automatisierung anfragen",
  alternates: { canonical: "https://ki-kanzlei.at/kontakt" },
};

const contact = [
  { icon: Mail, label: "E-Mail", value: "info@ki-kanzlei.at", href: "mailto:info@ki-kanzlei.at" },
  { icon: Phone, label: "Telefon", value: "+43 664 2314676", href: "tel:+436642314676" },
  { icon: MapPin, label: "Standort", value: "Rossatzbach 3/2, 3602 Rossatz", href: null },
];

export default function Page() {
  return (
    <div className="min-h-screen gradient-bg">
      <NavigationHome />
      <main>
        <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-12 md:pb-16">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Kontakt</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
              Reden wir über <span className="text-primary">Ihr Projekt</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hinterlassen Sie Ihre Kontaktdaten, wir melden uns innerhalb eines Werktags für ein kostenloses, unverbindliches Erstgespräch.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-8">
              {contact.map((c) => {
                const Icon = c.icon;
                const inner = (
                  <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon className="w-4 h-4 text-primary" />
                    <span className="font-medium text-foreground">{c.value}</span>
                  </span>
                );
                return c.href ? <a key={c.label} href={c.href} className="hover:opacity-80 transition-base">{inner}</a> : <span key={c.label}>{inner}</span>;
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 md:py-20 scroll-mt-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <AssessmentForm />
          </div>
        </section>
      </main>
      <FooterModern />
    </div>
  );
}
