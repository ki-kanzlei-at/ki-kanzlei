import type { Metadata } from "next";
import Script from "next/script";
import { NavigationHome } from "@/components/NavigationHome";
import { ModelLogoStrip } from "@/components/ModelLogoStrip";
import { FooterModern } from "@/components/FooterModern";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { serviceLogos } from "@/lib/serviceLogos";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Check,
  X,
  Phone,
  Search,
  Rocket,
  TrendingUp,
  MessageSquare,
  MessageCircle,
  Database,
  BookOpen,
  UserCheck,
  Languages,
  Filter,
  Calendar,
  Smartphone,
  Mail,
  Globe,
  Shield,
  Workflow,
  Layers,
  LineChart,
  Briefcase,
  Scale,
  Stethoscope,
  Hotel,
  ShoppingCart,
  Factory,
} from "lucide-react";

export const metadata: Metadata = {
  title: "KI Chatbot für Website & Kundenservice",
  description:
    "KI Chatbot für Website, WhatsApp und Support-Postfach: beantwortet Kundenfragen 24/7 mit Quelle aus Ihrer Wissensdatenbank, qualifiziert Leads, bucht Termine, ist mehrsprachig und eskaliert bei Bedarf an einen Menschen. DSGVO-konform mit EU-Hosting.",
  keywords:
    "KI Chatbot, Chatbot Kundenservice, Chatbot erstellen, Chatbot Website, Website Chatbot, Support Chatbot, mehrsprachiger Chatbot, Chatbot Unternehmen, KI Kundenservice, KI Chatbot Österreich, KI Chatbot Deutschland, KI Chatbot Schweiz, Chatbot DACH, KI Kundenservice DACH, Deutschland, Schweiz, DACH",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/ki-chatbot" },
};

const faqs = [
  {
    q: "Was ist ein KI Chatbot?",
    a: "Ein KI Chatbot ist ein digitaler Assistent, der Kundenfragen in natürlicher Sprache versteht und beantwortet, statt nur vorgefertigte Buttons abzuspielen. Im Unterschied zu einem klassischen Regel-Chatbot erkennt er das Anliegen auch bei freier Formulierung, Tippfehlern und Folgefragen. Angebunden an Ihre Wissensdatenbank gibt er belegte Antworten, qualifiziert Leads, bucht Termine und übergibt bei Bedarf an einen Mitarbeiter.",
  },
  {
    q: "Was kostet es, einen KI Chatbot erstellen zu lassen?",
    a: "Das hängt vom Umfang ab: Anzahl der Kanäle, Sprachen, angebundene Wissensquellen und Integrationen. Das erste Analysegespräch ist kostenlos. Einen ersten produktiven Chatbot für Website und Kundenservice setzen wir meist in zwei bis vier Wochen um, danach fallen überschaubare laufende Kosten für Betrieb und Sprachmodell an. Weil der Chatbot einen großen Teil der Routineanfragen automatisch löst, amortisiert er sich in der Regel schnell.",
  },
  {
    q: "Was ist der Unterschied zwischen einem Regel-Chatbot und einem KI Chatbot?",
    a: "Ein Regel-Chatbot folgt einem festen Entscheidungsbaum: Er kennt nur vorab definierte Fragen und Antworten und landet bei allem anderen in der Sackgasse. Ein KI Chatbot versteht Sprache wirklich. Er erfasst das Anliegen frei formuliert, sucht die passende Antwort in Ihrer Wissensdatenbank, belegt sie mit Quelle und kann sinnvoll reagieren, auch wenn die Frage so noch nie gestellt wurde. Das Ergebnis fühlt sich für Kunden wie echte Beratung an statt wie ein starres Menü.",
  },
  {
    q: "Kann der Chatbot in mehreren Sprachen antworten?",
    a: "Ja. Ein mehrsprachiger Chatbot erkennt die Sprache des Kunden automatisch und antwortet in über 50 Sprachen, ohne dass Sie jede Sprache separat pflegen müssen. Sie hinterlegen Ihr Wissen einmal, der KI Chatbot übersetzt die Antwort passend zur Anfrage. Das ist besonders wertvoll für Hotels, E-Commerce und Unternehmen mit internationaler Kundschaft.",
  },
  {
    q: "Wie binde ich den Chatbot in meine Website ein?",
    a: "Den Website Chatbot binden Sie mit einem kleinen Code-Snippet ein, ähnlich wie ein Analyse-Tool. Das Widget erscheint dezent in der Ecke Ihrer Seite und übernimmt Ihr Corporate Design, also Farben, Logo und Schrift. Für WhatsApp und das Support-Postfach erfolgt die Anbindung über offizielle Schnittstellen. Eine eigene IT-Abteilung brauchen Sie dafür nicht, die Einrichtung übernehmen wir.",
  },
  {
    q: "Ist der KI Chatbot DSGVO-konform?",
    a: "Ja. Datenschutz ist bei uns Ausgangspunkt, nicht Add-on. Wir betreiben den Chatbot mit Datenhaltung in der EU, schließen einen Auftragsverarbeitungsvertrag und geben keine Daten an Dritte weiter. Der Chatbot wird nach EU AI Act als KI gekennzeichnet, und Sie behalten die volle Kontrolle darüber, welche Inhalte er nutzt und speichert.",
  },
  {
    q: "Was passiert, wenn der Chatbot eine Frage nicht beantworten kann?",
    a: "Dann eskaliert er sauber an einen Menschen. Der KI Chatbot erkennt komplexe, sensible oder unklare Fälle und übergibt das Gespräch inklusive komplettem Verlauf an einen Mitarbeiter, per Live-Chat, Ticket oder E-Mail. So bleibt kein Kunde in der Sackgasse stehen, und Ihr Team bekommt nur die Fälle, die wirklich menschliches Urteilsvermögen brauchen.",
  },
  {
    q: "Wie lange dauert es, einen KI Chatbot für mein Unternehmen einzurichten?",
    a: "Ein KI Chatbot für Ihr Unternehmen ist in der Regel in zwei bis vier Wochen produktiv. Wir starten mit einer kostenlosen Erstanalyse, definieren die häufigsten Fragen, Wissensquellen und Eskalationsregeln, binden den Chatbot an Ihre Inhalte an und testen ihn mit echten Anfragen. Nach dem Go-Live werten wir die Gespräche aus und verbessern die Antwortqualität laufend.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "KI Chatbot",
  serviceType: "KI Chatbot für Website & Kundenservice",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "KI Chatbot für Website, WhatsApp und Support-Postfach: beantwortet Kundenfragen rund um die Uhr mit Quelle, qualifiziert Leads, bucht Termine, ist mehrsprachig und eskaliert bei Bedarf an einen Menschen. DSGVO-konform mit EU-Hosting.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const heroPhases = [
  { icon: MessageSquare, step: "01", label: "Frage verstehen", time: "in Echtzeit", desc: "Der Chatbot erfasst das Anliegen in natürlicher Sprache, egal wie es formuliert ist." },
  { icon: Database, step: "02", label: "Wissensdatenbank durchsuchen", time: "unter 1 Sek.", desc: "Er findet die passende, aktuelle Information in Ihren eigenen Inhalten." },
  { icon: BookOpen, step: "03", label: "Antwort mit Quelle", time: "sofort", desc: "Die Antwort kommt belegt mit Quellenangabe, ohne erfundene Fakten." },
  { icon: UserCheck, step: "04", label: "Handeln oder eskalieren", time: "bei Bedarf", desc: "Termin buchen, Lead qualifizieren oder sauber an einen Menschen übergeben." },
];

const stats = [
  { value: "24/7", label: "erreichbar, auch nachts und am Wochenende" },
  { value: "80%", label: "der Standardanfragen automatisch gelöst" },
  { value: "unter 2 Sek.", label: "durchschnittliche Antwortzeit" },
  { value: "50+", label: "Sprachen ohne Mehraufwand" },
];

const services = [
  { icon: MessageSquare, title: "Echtes Sprachverständnis", description: "Kein starres Menü und keine Schlüsselwort-Suche: Der KI Chatbot versteht frei formulierte Anliegen, Umgangssprache, Tippfehler und Folgefragen im Kontext. Das Gespräch fühlt sich für Ihre Kunden an wie eine echte Beratung statt wie ein Klick-Labyrinth." },
  { icon: BookOpen, title: "Antworten mit Quelle", description: "Angebunden an Ihre KI-Wissensdatenbank antwortet der Chatbot ausschließlich auf Basis Ihrer Inhalte und nennt die Quelle. So bekommen Kunden belegte Auskünfte statt erfundener Fakten." },
  { icon: Languages, title: "Mehrsprachiger Chatbot", description: "Er erkennt die Sprache des Kunden automatisch und antwortet in über 50 Sprachen. Ihr Wissen pflegen Sie nur einmal, die Übersetzung passiert im Hintergrund." },
  { icon: Filter, title: "Leads qualifizieren", description: "Der Chatbot stellt die richtigen Rückfragen, erfasst Bedarf und Kontaktdaten und übergibt qualifizierte Leads direkt an Ihren Vertrieb, statt nur ein Formular anzubieten." },
  { icon: Calendar, title: "Termine buchen", description: "Direkt im Gespräch bucht der KI Chatbot Termine in Ihren Kalender, inklusive Bestätigung und Erinnerung. Aus einer Frage wird ohne Umweg ein fester Termin." },
  { icon: UserCheck, title: "Eskalation an Menschen", description: "Bei komplexen oder sensiblen Fällen übergibt der Chatbot nahtlos an einen Mitarbeiter, inklusive komplettem Gesprächsverlauf. Kein Kunde bleibt in der Sackgasse." },
  { icon: Smartphone, title: "Auf jedem Kanal", description: "Eine Wissensbasis, viele Kanäle: Website-Widget, WhatsApp und Support-Postfach greifen auf dasselbe Wissen zu und antworten überall konsistent." },
  { icon: Shield, title: "DSGVO & EU-Hosting", description: "Datenhaltung in der EU, Auftragsverarbeitungsvertrag und Kennzeichnung nach EU AI Act. Ihre Kundendaten bleiben geschützt und in Ihrer Kontrolle." },
];

const maturity = [
  { level: 1, fill: 1, title: "Nur Mensch", desc: "Jede Anfrage wird manuell bearbeitet. Lange Wartezeiten und außerhalb der Bürozeiten gar keine Antwort." },
  { level: 2, fill: 2, title: "Statischer FAQ / Regel-Bot", desc: "Feste Antworten und Entscheidungsbäume. Funktioniert nur bei exakt vorgesehenen Fragen, sonst Sackgasse." },
  { level: 3, fill: 3, title: "KI Chatbot live", desc: "Der Chatbot versteht Anliegen frei formuliert und löst einen Großteil der Standardfälle automatisch und belegt." },
  { level: 4, fill: 4, title: "Integrierter KI-Kundenservice", desc: "Der Chatbot bucht, qualifiziert und eskaliert über alle Kanäle hinweg und ist sauber mit Kalender, CRM und Workflows verbunden." },
];

const bigComparison = [
  { feature: "Sprachverständnis", rule: "Feste Buttons und Schlüsselwörter", ai: "Versteht freie Formulierungen und Kontext" },
  { feature: "Antwortquelle", rule: "Vorab skriptierte Bausteine", ai: "Ihre Wissensdatenbank, mit Quellenangabe" },
  { feature: "Sprachen", rule: "Jede Sprache einzeln gepflegt", ai: "Über 50 Sprachen automatisch erkannt" },
  { feature: "Pflegeaufwand", rule: "Jeder Dialogpfad manuell gebaut", ai: "Lernt aus Ihren Inhalten, kaum Pflege" },
  { feature: "Unbekannte Fragen", rule: "Sackgasse oder Fehlermeldung", ai: "Sinnvolle Antwort oder saubere Eskalation" },
  { feature: "Aktionen", rule: "Meist nur Weiterleitung", ai: "Bucht Termine, qualifiziert Leads, legt Tickets an" },
  { feature: "Kundenerlebnis", rule: "Wirkt schnell frustrierend", ai: "Fühlt sich an wie echte Beratung" },
];

const industries = [
  { value: "kmu", label: "KMU", icon: Briefcase, head: "KMU & Mittelstand", text: "Ein KI Chatbot entlastet kleine Teams spürbar: Er beantwortet die immer gleichen Fragen rund um Öffnungszeiten, Preise und Leistungen automatisch und gibt qualifizierte Anfragen direkt weiter, ohne dass jemand am Telefon hängt." },
  { value: "legal", label: "Kanzleien", icon: Scale, head: "Rechtsanwälte & Steuerberater", text: "Der Support Chatbot beantwortet Mandantenfragen zu Abläufen, Unterlagen und Fristen, nimmt Terminwünsche auf und qualifiziert neue Mandate vor, DSGVO-konform und ohne dass sensible Daten das Haus verlassen." },
  { value: "health", label: "Gesundheit", icon: Stethoscope, head: "Ärzte & Gesundheitswesen", text: "Patienten erhalten rund um die Uhr Antworten zu Sprechzeiten, Vorbereitung und Abläufen. Der Chatbot koordiniert Terminanfragen und entlastet die Rezeption spürbar." },
  { value: "hotel", label: "Hotellerie", icon: Hotel, head: "Hotels & Gastronomie", text: "Ein mehrsprachiger Chatbot beantwortet Buchungs- und Gästefragen jederzeit in der Sprache des Gastes, nimmt Sonderwünsche auf und leitet bei Bedarf an die Rezeption weiter." },
  { value: "retail", label: "E-Commerce", icon: ShoppingCart, head: "E-Commerce & Retail", text: "Der Website Chatbot beantwortet Produktfragen, informiert zu Bestellstatus und Retouren und begleitet Kunden bis zum Kauf. Routineanfragen löst er sofort, der Rest geht an Ihr Team." },
  { value: "industry", label: "B2B & Industrie", icon: Factory, head: "B2B & Industrie", text: "Technische Produktfragen, Datenblätter und Support-Anliegen beantwortet der KI Chatbot mit Quelle aus Ihrer Dokumentation und qualifiziert dabei Vertriebskontakte." },
];

const toolbox: { icon: any; name: string; desc: string; logo?: string }[] = [
  { icon: MessageCircle, name: "Website-Widget", desc: "Mit einem Code-Snippet eingebunden, passt sich der Chatbot an Ihr Corporate Design an und erscheint dezent auf jeder Seite." },
  { icon: Smartphone, logo: "whatsapp", name: "WhatsApp Business", desc: "Der Chatbot beantwortet Anfragen direkt im meistgenutzten Messenger, mit demselben Wissen wie auf der Website." },
  { icon: Mail, name: "Support-Postfach", desc: "Er liest eingehende E-Mails, beantwortet Routinefälle automatisch oder bereitet fertige Antwortentwürfe für Ihr Team vor." },
  { icon: Database, name: "KI-Wissensdatenbank", desc: "Die Wissensbasis speist sich aus Website, PDFs, Handbüchern und FAQ und liefert stets aktuelle, belegte Antworten." },
  { icon: Calendar, name: "Kalender & CRM", desc: "Anbindung an Cal.com, Google Kalender und Ihr CRM, damit aus Gesprächen direkt Termine und gepflegte Leads werden." },
  { icon: Workflow, logo: "n8n", name: "n8n & Automatisierung", desc: "Nach dem Chat löst der Bot Folgeprozesse aus, etwa ein Ticket anlegen, Daten übertragen oder eine Benachrichtigung senden." },
];

const steps = [
  { step: "01", icon: Phone, title: "Kostenlose Erstanalyse", time: "30 Minuten", desc: "Wir lernen Ihr Unternehmen, Ihre Kanäle und die häufigsten Kundenfragen kennen. Ohne Verpflichtung und ohne Verkaufsdruck, nur echtes Interesse an Ihrer Situation." },
  { step: "02", icon: Search, title: "KI Assessment & Konzept", time: "Analyse & Plan", desc: "Wir definieren die häufigsten Anliegen, die Wissensquellen, die Sprachen, die Eskalationsregeln und die Kanäle. Daraus entsteht ein klarer Plan für Ihren KI Chatbot." },
  { step: "03", icon: Rocket, title: "Aufbau & Training", time: "2 bis 4 Wochen", desc: "Wir binden den Chatbot an Ihre Wissensdatenbank und Systeme an, richten Terminbuchung und Lead-Qualifizierung ein und testen ihn mit echten Anfragen." },
  { step: "04", icon: TrendingUp, title: "Go-Live & Optimierung", time: "laufend", desc: "Nach dem Live-Schalten werten wir die Gespräche aus, schließen Wissenslücken und verbessern Lösungsquote und Antwortqualität kontinuierlich." },
];

const usps = [
  { icon: Layers, badge: "End-to-End", title: "Mehr als ein Widget", desc: "Wir bauen nicht nur den Bot, sondern die Wissensbasis, die Integrationen und die Eskalation dahinter. Eine Quelle, volle Verantwortung." },
  { icon: BookOpen, badge: "Belegt", title: "Antworten mit Quelle", desc: "Jede Antwort stammt aus Ihren Inhalten und ist mit Quelle nachvollziehbar. Keine erfundenen Fakten, kein Reputationsrisiko." },
  { icon: Shield, badge: "EU-Hosting", title: "Österreich & DSGVO-first", desc: "Als österreichisches Unternehmen planen wir jeden Chatbot DSGVO-konform mit Datenhaltung in der EU und Kennzeichnung nach EU AI Act." },
  { icon: LineChart, badge: "Messbar", title: "Messbar besser", desc: "Wir messen Lösungsquote, Antwortzeit und Zufriedenheit und optimieren den Chatbot laufend, statt ihn nach dem Launch sich selbst zu überlassen." },
];

const related = [
  { href: "/leistungen/ki-wissensdatenbank", icon: Database, tag: "Wissen", title: "KI Wissensdatenbank", desc: "Die RAG-Wissensbasis, aus der Ihr Chatbot belegte Antworten mit Quelle zieht." },
  { href: "/leistungen/voicebot", icon: Phone, tag: "Telefon", title: "Voicebot & Telefon-KI", desc: "Derselbe Ansatz fürs Telefon: KI nimmt Anrufe an, beantwortet Fragen und bucht Termine." },
  { href: "/leistungen/n8n-automatisierung", icon: Workflow, tag: "Automatisierung", title: "n8n Automatisierung", desc: "Folgeprozesse nach dem Chat automatisieren, vom Ticket bis zur Übergabe ins CRM." },
];

const glanceData: [string, string][] = [
  ["Kanäle", "Website, WhatsApp, Support-Postfach"],
  ["Wissensbasis", "Antworten mit Quellenangabe"],
  ["Sprachen", "über 50, automatisch erkannt"],
  ["Eskalation", "nahtlos an Ihr Team"],
  ["Datenschutz", "DSGVO, EU-Hosting"],
  ["Einsatz", "live in 2 bis 4 Wochen"],
];

export default function Page() {
  return (
    <>
      <Script id="faq-ki-chatbot" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-ki-chatbot" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO: So beantwortet der KI Chatbot */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                    KI Chatbot, Website & Kundenservice
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-primary">KI Chatbot</span>, der versteht statt nur Bausteine abzuspielen
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Ein KI Chatbot, der auf Website, WhatsApp und im Support-Postfach rund um die Uhr Kundenfragen beantwortet, angebunden an Ihre Wissensdatenbank und mit Quelle belegt. Er qualifiziert Leads, bucht Termine, antwortet mehrsprachig und übergibt bei Bedarf nahtlos an einen Menschen.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Erstgespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#leistungen">Funktionen ansehen</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-primary" /> EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><Languages className="w-4 h-4 text-primary" /> Mehrsprachig</span>
                  </div>
                </div>

                {/* Ablauf-Visual */}
                <Card className="relative border-2 shadow-xl shadow-primary/5 overflow-hidden">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-primary tracking-wide">KI CHATBOT</div>
                        <CardTitle className="text-xl">So beantwortet er eine Anfrage</CardTitle>
                      </div>
                      <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20 text-xs shrink-0">4 Schritte</Badge>
                    </div>
                    <div className="flex gap-1.5 pt-3" aria-hidden>
                      {[0, 1, 2, 3].map((i) => (
                        <div key={i} className="h-1.5 flex-1 rounded-full bg-primary/25" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5">
                    <div className="relative">
                      <div className="absolute left-[1.3rem] top-4 bottom-4 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-primary/50" aria-hidden />
                      <div className="space-y-3.5">
                        {heroPhases.map(({ icon: Icon, step, label, time, desc }) => (
                          <div key={step} className="relative flex items-start gap-4">
                            <div className="relative z-10 w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-md shadow-primary/20 ring-4 ring-card">
                              <Icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0 pt-0.5">
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-xs font-bold text-primary">SCHRITT {step}</span>
                                <span className="text-[11px] text-muted-foreground shrink-0">{time}</span>
                              </div>
                              <div className="font-semibold text-sm leading-tight">{label}</div>
                              <div className="text-xs text-muted-foreground leading-snug mt-0.5">{desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-5 flex items-center justify-between rounded-xl bg-primary/5 border border-primary/20 px-4 py-3">
                      <span className="text-sm font-medium text-foreground">Ergebnis</span>
                      <span className="text-sm text-primary font-semibold">gelöste Anliegen rund um die Uhr</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* DEFINITION: 2-spaltig mit Info-Card */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Definition</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was ist ein KI Chatbot?</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Ein <strong className="text-foreground">KI Chatbot</strong> ist ein digitaler Assistent, der Kundenfragen in natürlicher Sprache versteht und beantwortet. Er steht auf Ihrer Website, in WhatsApp und im Support-Postfach bereit und löst einen großen Teil der Anfragen sofort, rund um die Uhr und in vielen Sprachen.
                    </p>
                    <p>
                      Der entscheidende Unterschied zum klassischen Regel-Chatbot ist das echte <strong className="text-foreground">Sprachverständnis</strong>. Statt einem starren Entscheidungsbaum zu folgen, erfasst der KI Chatbot das Anliegen auch bei freier Formulierung, sucht die Antwort in Ihrer <strong className="text-foreground">Wissensdatenbank</strong> und belegt sie mit Quelle, ohne Fakten zu erfinden.
                    </p>
                    <p>
                      Ein guter Support Chatbot beantwortet aber nicht nur Fragen. Er <strong className="text-foreground">qualifiziert Leads</strong>, bucht Termine direkt im Kalender und übergibt komplexe Fälle sauber an einen Mitarbeiter. So wird aus dem Chat-Fenster ein echter Mitarbeiter im Kundenservice statt einer Sackgasse.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">KI Kundenservice</Badge>
                    <Badge variant="secondary" className="rounded-full">Website Chatbot</Badge>
                    <Badge variant="secondary" className="rounded-full">Support Chatbot</Badge>
                    <Badge variant="secondary" className="rounded-full">mehrsprachiger Chatbot</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">KI Chatbot auf einen Blick</CardTitle>
                    <CardDescription>Was ein Chatbot-Projekt mit der KI Kanzlei ausmacht.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {glanceData.map(([label, value]) => (
                      <div key={label} className="flex items-center justify-between py-2.5 border-b border-border last:border-0">
                        <span className="text-sm font-medium text-foreground">{label}</span>
                        <span className="text-sm text-muted-foreground text-right max-w-[58%]">{value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* STATS-BAND */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-2 lg:grid-cols-4 border-2 border-border rounded-2xl overflow-hidden bg-card">
                {stats.map((s, i) => (
                  <div key={i} className="p-7 md:p-8 text-center border-b lg:border-b-0 border-border [&:nth-child(odd)]:border-r lg:[&:not(:last-child)]:border-r">
                    <div className="text-3xl md:text-4xl font-bold text-primary">{s.value}</div>
                    <div className="text-sm text-muted-foreground mt-2 leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <ModelLogoStrip
            caption="Wir setzen auf die besten Sprachmodelle, herstellerneutral"
            items={[
              { slug: "openai", name: "OpenAI" },
              { slug: "anthropic", name: "Anthropic" },
              { slug: "mistralai", name: "Mistral AI" },
              { slug: "googlegemini", name: "Google Gemini" },
              { slug: "whatsapp", name: "WhatsApp" },
              { slug: "n8n", name: "n8n" },
            ]}
          />

          {/* FUNKTIONEN: BENTO */}
          <section id="leistungen" className="py-14 md:py-20 scroll-mt-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Funktionen</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Was unser KI Chatbot kann</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Vom Verstehen der Frage bis zur gebuchten Aktion, alles aus einer Hand.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <Card key={i} className={`hover-lift border-2 ${i === 0 ? "lg:col-span-2 bg-primary/5 border-primary/20" : ""}`}>
                      <CardHeader className="pb-3">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{s.title}</CardTitle>
                      </CardHeader>
                      <CardContent><p className="text-muted-foreground leading-relaxed text-sm">{s.description}</p></CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* BRANCHEN: TABS */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Für jede Branche</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">KI Chatbot für Ihre Branche</h2>
                <p className="text-lg text-muted-foreground">Wählen Sie Ihren Bereich, wir zeigen, wo ein Chatbot bei Ihnen am meisten bringt.</p>
              </div>
              <Tabs defaultValue="kmu" className="w-full">
                <TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">
                  {industries.map((a) => {
                    const Icon = a.icon;
                    return (
                      <TabsTrigger key={a.value} value={a.value} className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border">
                        <Icon className="w-4 h-4 mr-1.5" />{a.label}
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
                {industries.map((a) => (
                  <TabsContent key={a.value} value={a.value}>
                    <Card className="border-2">
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-bold mb-2">{a.head}</h3>
                        <p className="text-muted-foreground leading-relaxed">{a.text}</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>

          {/* KUNDENSERVICE-REIFEGRAD */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Standortbestimmung</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Wo steht Ihr Kundenservice?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Vom rein manuellen Support bis zum voll integrierten KI-Kundenservice. Dieses Modell zeigt, welcher nächste Schritt für Sie realistisch ist.</p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {maturity.map((m) => (
                  <Card key={m.level} className={`border-2 ${m.level === 4 ? "border-primary/30 bg-primary/5" : ""}`}>
                    <CardContent className="pt-6">
                      <div className="flex items-end gap-1.5 h-16 mb-4" aria-hidden>
                        {[1, 2, 3, 4].map((b) => (
                          <div
                            key={b}
                            className={`flex-1 rounded-t-md ${b <= m.fill ? "bg-primary" : "bg-primary/15"}`}
                            style={{ height: `${b * 25}%` }}
                          />
                        ))}
                      </div>
                      <div className="text-xs font-bold text-primary mb-1">STUFE {m.level}</div>
                      <h3 className="font-bold text-base mb-1.5 leading-tight">{m.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* VERGLEICH: Regel-Chatbot vs KI Chatbot */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Der Unterschied</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Regel-Chatbot vs. KI Chatbot</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Ein klassischer Regel-Chatbot folgt starren Skripten. Ein KI Chatbot versteht wirklich, was Ihre Kunden wollen. Der Unterschied im Detail.</p>
              </div>
              <Card className="border-2 overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[24%] font-bold text-foreground">Kriterium</TableHead>
                      <TableHead className="text-muted-foreground">Regel-Chatbot</TableHead>
                      <TableHead className="text-primary font-bold">KI Chatbot (KI Kanzlei)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bigComparison.map((r, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{r.feature}</TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          <span className="inline-flex items-start gap-1.5"><X className="w-3.5 h-3.5 text-muted-foreground/60 mt-0.5 shrink-0" />{r.rule}</span>
                        </TableCell>
                        <TableCell className="text-sm text-primary font-medium">
                          <span className="inline-flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />{r.ai}</span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </section>

          {/* KANAELE & INTEGRATIONEN */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Kanäle & Integrationen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Überall im Einsatz, mit einem Wissen</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Ein Chatbot, viele Berührungspunkte. Aus diesem Baukasten wählen wir, was zu Ihren Kanälen und Systemen passt.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {toolbox.map((t, i) => {
                  const Icon = t.icon;
                  return (
                    <Card key={i} className="hover-lift border-2">
                      <CardHeader className="pb-3">
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-2 ${t.logo ? "bg-white border border-border" : "bg-primary/10"}`}>
                          {t.logo ? <img src={`/img/logos/${t.logo}.svg`} alt={t.name} className="w-6 h-6 object-contain" /> : <Icon className="w-5 h-5 text-primary" />}
                        </div>
                        <CardTitle className="text-lg">{t.name}</CardTitle>
                      </CardHeader>
                      <CardContent><p className="text-muted-foreground leading-relaxed text-sm">{t.desc}</p></CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* PROZESS: Timeline */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="max-w-2xl mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Der Ablauf</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">So entsteht Ihr KI Chatbot</h2>
                <p className="text-lg text-muted-foreground">Kein Baukasten von der Stange, sondern vier klar definierte Schritte bis zum produktiven Chatbot.</p>
              </div>
              <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="hidden lg:block absolute top-7 left-[12%] right-[12%] h-px bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40" aria-hidden />
                {steps.map(({ step, icon: Icon, title, time, desc }) => (
                  <div key={step} className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center mb-4 shadow-lg shadow-primary/20 relative z-10 ring-8 ring-background">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-bold text-primary mb-1">SCHRITT {step}, {time}</div>
                    <h3 className="text-lg font-bold mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WARUM KI KANZLEI */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum die KI Kanzlei</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Was unseren KI Chatbot besonders macht</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {usps.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <Card key={i} className="hover-lift border-2">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <Badge variant="secondary" className="rounded-full text-xs">{c.badge}</Badge>
                        </div>
                        <CardTitle className="text-lg">{c.title}</CardTitle>
                      </CardHeader>
                      <CardContent><p className="text-muted-foreground leading-relaxed text-sm">{c.desc}</p></CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQ: KI Chatbot für Website & Kundenservice</h2>
                <p className="text-lg text-muted-foreground">Die Fragen, die wir vor fast jedem Chatbot-Projekt hören, ehrlich beantwortet.</p>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-2 border-border rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:bg-primary/5">
                    <AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-5">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* VERWANDTE LEISTUNGEN */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Passende Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Womit Ihr KI Chatbot noch stärker wird</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Der Chatbot entfaltet seine volle Wirkung im Zusammenspiel. Das sind die Services, die ihn ergänzen.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {related.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <a key={i} href={s.href} className="group block">
                      <Card className="h-full border-2 hover-lift transition-all group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/5">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${serviceLogos[s.href] ? "bg-white border border-border" : "bg-primary/10 group-hover:bg-primary"}`}>
                              {serviceLogos[s.href] ? <img src={`/img/logos/${serviceLogos[s.href]}.svg`} alt={s.title} className="w-7 h-7 object-contain" /> : <Icon className="w-6 h-6 text-primary transition-colors group-hover:text-white" />}
                            </div>
                            <Badge variant="secondary" className="rounded-full">{s.tag}</Badge>
                          </div>
                          <CardTitle className="text-xl">{s.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                          <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">Mehr erfahren</span>
                        </CardContent>
                      </Card>
                    </a>
                  );
                })}
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
