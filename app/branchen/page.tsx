import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { NavigationHome } from "@/components/NavigationHome";
import { FooterModern } from "@/components/FooterModern";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Stethoscope, Brain, Scale, Calculator, Umbrella, ShoppingBag, Car, Megaphone,
  BedDouble, UtensilsCrossed, Dumbbell, Home, Building2, Ruler, Hammer,
  UserPlus, Truck, Landmark, ShieldCheck, Server, MapPin, Factory, HardHat, Banknote, Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "KI-Lösungen nach Branche im DACH-Raum",
  description:
    "Maßgeschneiderte KI-Lösungen für Ihre Branche: KI Chatbot, Telefonassistent, Dokumenten- und Buchhaltungsautomatisierung für Ärzte, Steuerberater, Rechtsanwälte, E-Commerce, Gastronomie, Handwerk und mehr. DSGVO-konform, EU-gehostet, im DACH-Raum.",
  keywords:
    "KI Lösungen Branchen, KI für Ärzte, KI Steuerberater, KI Steuerberatung, KI Rechtsanwalt, Legal Tech, KI Hotel, KI Restaurant, KI Gastronomie, KI E-Commerce, KI Chatbot, KI Handwerker, KI Recruiting, KI Immobilien, KI Autohaus, KI Architekt, KI Marketing, KI Logistik, KI Versicherung, branchenspezifische KI",
  alternates: { canonical: "https://ki-kanzlei.at/branchen" },
};

const groups = [
  {
    eyebrow: "Gesundheit & Praxen",
    title: "KI für Praxen und Gesundheitsberufe",
    items: [
      { icon: Stethoscope, title: "Ärzte & Fachärzte", desc: "KI-Telefonassistent und Spracherkennung nehmen Anrufe an, buchen Termine und entlasten den Empfang, DSGVO-konform.", href: "/branchen/ki-loesungen-aerzte" },
      { icon: Brain, title: "Psychotherapie", desc: "Diskreter KI-Terminassistent, automatische Erinnerungen und Dokumentation per Transkription, datenschutzkonform.", href: "/branchen/ki-loesungen-psychotherapeuten" },
    ],
  },
  {
    eyebrow: "Recht, Steuer & Finanzen",
    title: "KI für Kanzleien, Steuer, Versicherung und Banken",
    items: [
      { icon: Scale, title: "Rechtsanwälte", desc: "Legal Tech: KI-Vertrags- und Dokumentenanalyse plus Wissensdatenbank für Ihre Akten, ohne dass Daten das Haus verlassen.", href: "/branchen/ki-loesungen-rechtsanwaelte" },
      { icon: Calculator, title: "Steuerberater", desc: "Belegerfassung, Buchhaltung und DATEV/BMD per RPA automatisieren, auch ganz ohne Schnittstelle.", href: "/branchen/ki-loesungen-steuerberater" },
      { icon: Umbrella, title: "Versicherungsmakler", desc: "Schadenmeldungen, Anfragen und Nachfass automatisieren, mit KI-Produktwissen auf Abruf.", href: "/branchen/ki-loesungen-versicherungsmakler" },
      { icon: Banknote, title: "Banken & Finanz", desc: "Antrags- und Dokumentenprüfung, Compliance-Wissen (BaFin, MaRisk, DORA) und Betrugserkennung, On-Premise möglich.", href: "/branchen/ki-loesungen-banken" },
    ],
  },
  {
    eyebrow: "Handel & Vertrieb",
    title: "KI für Handel, Verkauf und Marketing",
    items: [
      { icon: ShoppingBag, title: "E-Commerce", desc: "KI-Chatbot für den Kundenservice, automatische Produktbeschreibungen und Bildgenerierung, mehr Umsatz bei weniger Aufwand.", href: "/branchen/ki-loesungen-ecommerce" },
      { icon: Car, title: "Autohaus", desc: "Leads qualifizieren, Service-Termine vergeben und das CRM automatisieren, kein Anruf und kein Lead geht verloren.", href: "/branchen/ki-loesungen-autohaus" },
      { icon: Megaphone, title: "Marketingagenturen", desc: "KI-Content, Social Media, Bild- und Videogenerierung in Markenqualität, in Stunden statt Wochen.", href: "/branchen/ki-loesungen-marketingagenturen" },
    ],
  },
  {
    eyebrow: "Gastgewerbe & Freizeit",
    title: "KI für Hotel, Gastro und Fitness",
    items: [
      { icon: BedDouble, title: "Hotels", desc: "KI-Telefonassistent und mehrsprachiger Chatbot für Buchungen und Gästekommunikation, rund um die Uhr.", href: "/branchen/ki-loesungen-hotels" },
      { icon: UtensilsCrossed, title: "Gastronomie & Restaurants", desc: "KI-Reservierung, Bestell- und Gäste-Chatbot sowie automatisches Bewertungsmanagement.", href: "/branchen/ki-loesungen-gastronomie" },
      { icon: Dumbbell, title: "Fitness & Sport", desc: "Mitglieder-Chatbot, Telefon und Terminbuchung automatisieren, mehr Zeit für die Mitglieder.", href: "/branchen/ki-loesungen-fitness" },
    ],
  },
  {
    eyebrow: "Immobilien, Bau & Handwerk",
    title: "KI für Immobilien, Planung und Betrieb",
    items: [
      { icon: Home, title: "Immobilienmakler", desc: "Leads qualifizieren, Exposé-Texte erstellen und Besichtigungen koordinieren, mit KI für Text und Bild.", href: "/branchen/ki-loesungen-immobilienmakler" },
      { icon: Building2, title: "Hausverwaltung", desc: "Anliegen von Mietern automatisch erfassen, zuordnen und beantworten, per Chatbot und Workflow.", href: "/branchen/ki-loesungen-hausverwaltung" },
      { icon: Ruler, title: "Architekten & Planungsbüros", desc: "Ausschreibungen und Dokumente per RAG durchsuchbar machen, Leads qualifizieren, Visuals generieren.", href: "/branchen/ki-loesungen-architekten" },
      { icon: Hammer, title: "Handwerker", desc: "Notfalltelefon, Auftragserfassung und Angebote automatisieren, auch während Sie auf der Baustelle sind.", href: "/branchen/ki-loesungen-handwerker" },
      { icon: HardHat, title: "Bau & Bauunternehmen", desc: "Ausschreibungen und Pläne per KI durchsuchbar machen, Kalkulation und Angebote beschleunigen.", href: "/branchen/ki-loesungen-bau" },
    ],
  },
  {
    eyebrow: "Dienstleistung & Verwaltung",
    title: "KI für HR, Logistik und Behörden",
    items: [
      { icon: UserPlus, title: "Recruiting & HR", desc: "Lebensläufe vorsortieren, Bewerber qualifizieren und Onboarding automatisieren, schneller zur richtigen Person.", href: "/branchen/ki-loesungen-recruiting" },
      { icon: Truck, title: "Logistik & Spedition", desc: "Frachtdokumente automatisch erfassen, Tracking-Anfragen per Chatbot beantworten, Disposition entlasten.", href: "/branchen/ki-loesungen-logistik" },
      { icon: Factory, title: "Industrie & Fertigung", desc: "Visuelle Qualitätskontrolle, Predictive Maintenance und Werkerassistenz für die Produktion.", href: "/branchen/ki-loesungen-industrie" },
      { icon: Zap, title: "Energieversorger", desc: "Predictive Maintenance für Netze, ESG- und CSRD-Reporting sowie Wissensdatenbank, KRITIS-sicher.", href: "/branchen/ki-loesungen-energie" },
      { icon: Landmark, title: "Öffentliche Verwaltung", desc: "Bürgeranfragen per Chatbot und Wissensdatenbank entlasten, DSGVO-konform und barrierearm.", href: "/branchen/ki-loesungen-oeffentliche-einrichtungen" },
    ],
  },
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "KI-Lösungen nach Branche",
  url: "https://ki-kanzlei.at/branchen",
  about: "Branchenspezifische KI-Lösungen für Unternehmen im DACH-Raum, DSGVO-konform und EU-gehostet.",
};

export default function Page() {
  const totalCount = groups.reduce((n, g) => n + g.items.length, 0);
  return (
    <>
      <Script id="branchen-collection" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO 2-spaltig */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">Branchen</Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    KI-Lösungen, die <span className="text-primary">Ihre Branche verstehen</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Jede Branche hat eigene Abläufe, Anforderungen und Daten. Wir bauen die passende KI-Lösung, vom KI-Chatbot über Dokumenten- und Buchhaltungsautomatisierung bis zum Telefonassistenten. DSGVO-konform, EU-gehostet und praxiserprobt im DACH-Raum.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild><a href="#contact">Kostenloses KI Audit</a></Button>
                    <Button size="lg" variant="outline" asChild><Link href="/leistungen">Alle Leistungen</Link></Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-primary" /> EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Visual: Branchen-Überblick */}
                <Card className="border-2 shadow-xl shadow-primary/5">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">Branchenbereiche</CardTitle>
                      <Badge className="rounded-full">{totalCount} Branchen</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {groups.map((g) => (
                      <a
                        key={g.eyebrow}
                        href={`#${g.eyebrow.toLowerCase().replace(/[^a-zäöü]+/g, "-")}`}
                        className="flex items-center justify-between py-3 border-b border-border last:border-0 group"
                      >
                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-base">{g.eyebrow}</span>
                        <span className="text-xs text-muted-foreground tabular-nums">{g.items.length}</span>
                      </a>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* GROUPS */}
          {groups.map((group, gi) => (
            <section
              key={gi}
              id={group.eyebrow.toLowerCase().replace(/[^a-zäöü]+/g, "-")}
              className={`section-spacing scroll-mt-24 ${gi % 2 === 1 ? "bg-white/50" : ""}`}
            >
              <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-12">
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">{group.eyebrow}</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold">{group.title}</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {group.items.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <Link key={i} href={item.href} className="group block">
                        <Card className="h-full border-2 hover-lift group-hover:border-primary/40 transition-base">
                          <CardHeader>
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-base">
                              <Icon className="w-6 h-6 text-primary" />
                            </div>
                            <CardTitle className="text-lg">{item.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
                            <span className="text-sm font-semibold text-primary">Mehr erfahren</span>
                          </CardContent>
                        </Card>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </section>
          ))}

          <section className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl text-center">
              <p className="text-muted-foreground mb-4">Ihre Branche ist nicht dabei? Wir bauen auch für Ihren Bereich die passende Lösung.</p>
              <Button size="lg" asChild><a href="#contact">Branche anfragen</a></Button>
            </div>
          </section>

          <ContactForm />
        </main>
        <FooterModern />
      </div>
    </>
  );
}
