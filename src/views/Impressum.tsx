import { NavigationHome } from "@/components/NavigationHome";
import { FooterModern } from "@/components/FooterModern";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, MapPin, Phone, Mail, ShieldCheck, FileText, Landmark, ScrollText } from "lucide-react";

const angaben = [
  { icon: Building2, label: "Medieninhaber", value: "Arnold Freissling" },
  { icon: MapPin, label: "Anschrift", value: "Rossatzbach 3/2, 3602 Rossatz" },
  { icon: Phone, label: "Telefon", value: "+43 664 2314676", href: "tel:+436642314676" },
  { icon: Mail, label: "E-Mail", value: "info@ki-kanzlei.at", href: "mailto:info@ki-kanzlei.at" },
  { icon: Landmark, label: "Zuständige Aufsichtsbehörde", value: "Bezirkshauptmannschaft Krems" },
  { icon: FileText, label: "UID", value: "ATU82628738" },
  { icon: ScrollText, label: "Gewerbe", value: "Unternehmensberater für Marketing und Vertrieb" },
];

const weitere = [
  {
    label: "Mitglied der österreichischen Wirtschaftskammer",
    node: (
      <a href="https://www.wko.at/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
        www.wko.at
      </a>
    ),
  },
  { label: "Gewerberechtliche Vorschriften", node: "Gewerbeordnung (www.ris.bka.gv.at)" },
  {
    label: "Nutzungsvorbehalt gemäß § 42h Abs 6 UrhG",
    node: "Dem Text-Mining von Inhalten dieser Website wird ausdrücklich widersprochen.",
  },
  {
    label: "Blattlinie",
    node: "Informationen rund um das Thema (digitaler) Vertrieb und Automatisierung von Vertrieb",
  },
];

const Impressum = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <NavigationHome />
      <main>
        {/* HERO */}
        <section className="pt-32 md:pt-40 pb-12 md:pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Badge variant="outline" className="rounded-full mb-5 bg-primary/10 text-primary border-primary/20">
              Rechtliches
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">Impressum</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Angaben gemäß § 5 ECG und § 25 MedienG zur KI Kanzlei.
            </p>
          </div>
        </section>

        {/* INHALT */}
        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="border-2">
              <CardContent className="p-6 md:p-10">
                <div className="flex items-center gap-2 mb-6">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <h2 className="text-xl md:text-2xl font-bold text-foreground">
                    Impressum gemäß § 5 ECG und § 25 MedienG
                  </h2>
                </div>

                <dl className="divide-y divide-border">
                  {angaben.map((a) => {
                    const Icon = a.icon;
                    return (
                      <div key={a.label} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 py-3.5">
                        <dt className="flex items-center gap-2 text-sm font-medium text-foreground sm:w-1/3 shrink-0">
                          <Icon className="w-4 h-4 text-primary shrink-0" />
                          {a.label}
                        </dt>
                        <dd className="text-muted-foreground sm:flex-1">
                          {a.href ? (
                            <a href={a.href} className="text-primary hover:underline">
                              {a.value}
                            </a>
                          ) : (
                            a.value
                          )}
                        </dd>
                      </div>
                    );
                  })}
                </dl>

                <div className="mt-8 space-y-5 border-t border-border pt-8">
                  {weitere.map((w) => (
                    <div key={w.label}>
                      <div className="text-sm font-semibold text-foreground mb-1">{w.label}</div>
                      <div className="text-muted-foreground leading-relaxed">{w.node}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <FooterModern />
    </div>
  );
};

export default Impressum;
