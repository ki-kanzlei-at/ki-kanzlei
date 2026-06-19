import type { Metadata } from "next";
import Script from "next/script";
import { NavigationHome } from "@/components/NavigationHome";
import { FooterModern } from "@/components/FooterModern";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, MapPin, ShieldCheck, Compass, Users, Target, Server } from "lucide-react";

export const metadata: Metadata = {
  title: "Über uns: Das Team der KI Kanzlei",
  description:
    "Arnold, Markus und Yasmin von der KI Kanzlei. Warum wir aus Niederösterreich KI-Automatisierung für Betriebe im DACH-Raum bauen und was uns dabei wichtig ist.",
  keywords:
    "KI Kanzlei, über uns, Team, KI Agentur Österreich, KI Agentur Niederösterreich, Arnold Freissling, Markus Wallner, Yasmin Berndorfer",
  alternates: { canonical: "https://ki-kanzlei.at/ueber-uns" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "KI Kanzlei",
  url: "https://ki-kanzlei.at",
  telephone: "+436642314676",
  email: "info@ki-kanzlei.at",
  address: { "@type": "PostalAddress", streetAddress: "Rossatzbach 3/2", postalCode: "3602", addressLocality: "Rossatz", addressCountry: "AT" },
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const team = [
  { name: "Arnold Freissling", role: "Geschäftsführung & Vertrieb", img: "/img/team/arnold_freissling.webp", linkedin: "https://at.linkedin.com/in/arnold-freissling-95642b256", line: "Der, der zuhört, bevor er etwas vorschlägt. Erste Anlaufstelle, wenn Sie wissen wollen, ob sich KI bei Ihnen lohnt." },
  { name: "Markus Wallner", role: "Geschäftsführung & Technik", img: "/img/team/markus_wallner.webp", linkedin: "https://at.linkedin.com/in/markuswallner-social-media-marketing", line: "Baut den Maschinenraum: Automatisierungen, Schnittstellen, der ganze technische Unterbau. Findet fast immer einen sauberen Weg." },
  { name: "Yasmin Berndorfer", role: "Head of Sales", img: "/img/team/yasmin_berndorfer.webp", linkedin: "https://www.linkedin.com/in/yasmin-berndorfer-984084281/", line: "Hält im Kundenkontakt alles zusammen und hat ein gutes Gespür dafür, was ein Betrieb wirklich braucht." },
];

const haltungen = [
  { icon: ShieldCheck, title: "Datenschutz zuerst", text: "Zwischen bequem und sicher gewinnt bei uns sicher. EU-Hosting, DSGVO, auf Wunsch komplett bei Ihnen im Haus." },
  { icon: Compass, title: "Herstellerneutral", text: "Wir empfehlen nur, was wir selbst nehmen würden. Kein Tool wegen Provision, sondern weil es passt." },
  { icon: Users, title: "Persönlich erreichbar", text: "Wir sitzen in Niederösterreich, kennen den DACH-Raum und nehmen selbst ab. Kein Callcenter dazwischen." },
  { icon: Target, title: "Auf Wirkung gebaut", text: "Am Ende zählt, was übrig bleibt: gesparte Stunden, weniger Zettelwirtschaft, ein ruhigerer Kopf." },
];

const trust = [
  { icon: MapPin, label: "Niederösterreich" },
  { icon: ShieldCheck, label: "DSGVO-konform" },
  { icon: Server, label: "EU-Hosting" },
];

export default function Page() {
  return (
    <>
      <Script id="ueber-uns-localbusiness" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-3xl text-center">
              <Badge variant="outline" className="rounded-full mb-5 bg-primary/10 text-primary border-primary/20">Über uns</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Drei Leute, eine <span className="text-primary">Überzeugung</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Wir sind Arnold, Markus und Yasmin. Wir bauen KI nicht, weil es gerade alle tun, sondern weil sie einem normalen Betrieb spürbar Zeit zurückgibt. Das ist der ganze Gedanke hinter der KI Kanzlei.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-7 text-sm text-muted-foreground">
                {trust.map((t) => {
                  const Icon = t.icon;
                  return <span key={t.label} className="flex items-center gap-1.5"><Icon className="w-4 h-4 text-primary" /> {t.label}</span>;
                })}
              </div>
            </div>
          </section>

          {/* STORY */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unsere Geschichte</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Warum es uns gibt</h2>
              </div>
              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                <p>Wir haben in unserem Umfeld immer wieder dasselbe gesehen: kleine und mittlere Betriebe, die viel können, aber im Tagesgeschäft an Telefon, Formularen und Routinearbeit ersticken. Stunden, die für die eigentliche Arbeit und für die Kunden fehlen.</p>
                <p>Genau da setzen wir an. Wir nehmen diese Abläufe auseinander und automatisieren das, was sich wiederholt, mit Werkzeugen, die zum Betrieb passen, statt mit Technik um der Technik willen.</p>
                <p className="text-foreground font-medium">Beratung und Umsetzung aus einer Hand. DSGVO-konform, mit Datenhaltung in der EU und in einer Sprache, die man auch ohne IT-Abteilung versteht.</p>
              </div>
            </div>
          </section>

          {/* TEAM */}
          <section className="section-spacing">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Das Team</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Wer wir sind</h2>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">Klein, eingespielt, mit klaren Rollen. Sie wissen immer, mit wem Sie reden.</p>
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                {team.map((m) => (
                  <Card key={m.name} className="border-2 hover-lift overflow-hidden">
                    <div className="relative aspect-square overflow-hidden bg-muted">
                      <img src={m.img} alt={m.name} className="w-full h-full object-cover object-top" />
                      <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center shadow-md hover:scale-110 transition-base" aria-label={`LinkedIn-Profil von ${m.name}`}>
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-lg font-bold">{m.name}</h3>
                      <div className="text-primary font-medium text-sm mb-3">{m.role}</div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{m.line}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* HALTUNG */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Haltung</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Worauf Sie sich verlassen können</h2>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">Vier Punkte, die jedes Projekt prägen, von der ersten Frage bis zum laufenden Betrieb.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                {haltungen.map((h, i) => {
                  const Icon = h.icon;
                  return (
                    <Card key={i} className="border-2 hover-lift">
                      <CardContent className="p-6 flex gap-4">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold mb-1">{h.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{h.text}</p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* STANDORT */}
          <section className="section-spacing">
            <div className="container mx-auto px-4 max-w-5xl text-center">
              <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Standort</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Von Niederösterreich aus für den DACH-Raum</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Wir sitzen an der Donau in Rossatzbach und betreuen Betriebe in Österreich, Deutschland und der Schweiz. Daten bleiben in der EU. Sie wollen wissen, ob KI bei Ihnen etwas bringt? Reden wir kurz, kostet nichts und verpflichtet zu nichts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild><a href="/kontakt">Schreiben Sie uns</a></Button>
                <Button size="lg" variant="outline" asChild><a href="tel:+436642314676">+43 664 2314676</a></Button>
              </div>
            </div>
          </section>

          <ContactForm />
        </main>
        <FooterModern />
      </div>
    </>
  );
}
