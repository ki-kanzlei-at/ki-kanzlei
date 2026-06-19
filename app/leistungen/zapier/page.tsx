import type { Metadata } from "next";
import { serviceLogos } from "@/lib/serviceLogos";
import Script from "next/script";
import { NavigationHome } from "@/components/NavigationHome";
import { WorkflowExamples } from "@/components/WorkflowExamples";
import { UserPlus as WfUserPlus, Mails as WfMails, Megaphone as WfMega, ShoppingCart as WfCart, CalendarCheck as WfCal, Receipt as WfReceipt } from "lucide-react";
import { FooterModern } from "@/components/FooterModern";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Zap, Check, X, Shield, ShieldCheck, Server, MapPin, Code2, Bot, Workflow, TrendingUp, Lock,
  Users, Megaphone, Calculator, MessageSquare, UserPlus, Cog, Search, Settings2, Rocket, Phone,
  Clock, Lightbulb, Database, RefreshCw, ArrowRightLeft,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Zapier Automatisierung & DSGVO-Alternative",
  description:
    "Zapier für Unternehmen: Wir konzipieren, bauen und optimieren Ihre Zapier-Automatisierungen, oder zeigen die DSGVO-konforme Alternative mit EU-Hosting. Über 6000 Apps verbinden, KI integrieren, Prozesse automatisieren im DACH-Raum.",
  keywords:
    "Zapier, Zapier Automatisierung, Zapier Alternative, Zapier Deutsch, Zapier DSGVO, Zapier Agentur, Zapier Beratung, Zaps erstellen, Zapier vs Make, Zapier n8n, Workflow Automatisierung, Prozessautomatisierung, Zapier Experten, Zapier Deutschland, Zapier Schweiz, Workflow Automatisierung DACH, Prozessautomatisierung DACH, KI Automatisierung DACH",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/zapier" },
};

const faqs = [
  {
    q: "Was ist Zapier und wie funktioniert es?",
    a: "Zapier ist eine cloudbasierte Plattform für Workflow-Automatisierung, die über 6000 Web-Anwendungen miteinander verbindet, ohne dass Sie programmieren müssen. Ein Automatisierungsablauf heißt bei Zapier Zap und besteht aus einem Auslöser (Trigger) und einer oder mehreren Aktionen. Beispiel: Sobald in einem Formular ein neuer Lead eingeht (Trigger), wird er automatisch ins CRM eingetragen, eine Begrüßungsmail versendet und das Vertriebsteam in Slack benachrichtigt (Aktionen). So laufen wiederkehrende Aufgaben ohne manuelle Arbeit durch.",
  },
  {
    q: "Ist Zapier DSGVO-konform einsetzbar?",
    a: "Zapier ist ein US-Anbieter und verarbeitet Daten überwiegend auf Servern in den USA. Für unkritische Daten lässt sich Zapier mit Auftragsverarbeitungsvertrag und sauberer Konfiguration einsetzen. Sobald jedoch sensible personenbezogene Daten, Mandanten- oder Patientendaten im Spiel sind, empfehlen wir für den DACH-Raum eine EU-gehostete Alternative wie n8n, die Sie selbst betreiben. Wir beraten Sie ehrlich, wann Zapier ausreicht und wann eine DSGVO-konforme Lösung der bessere Weg ist.",
  },
  {
    q: "Was kostet Zapier und wann lohnt sich eine Alternative?",
    a: "Zapier rechnet nach der Anzahl der ausgeführten Tasks pro Monat ab. Bei wenigen Automatisierungen ist das günstig, bei hohem Volumen steigen die Kosten jedoch schnell und planbar schwer. Wer monatlich zehntausende Aktionen ausführt, fährt mit einer self-hosted Lösung oft deutlich günstiger, weil dort keine Gebühr je Ausführung anfällt. Im kostenlosen Assessment rechnen wir Ihren konkreten Anwendungsfall durch und zeigen, ab welchem Volumen sich der Wechsel rechnet.",
  },
  {
    q: "Können Sie bestehende Zaps übernehmen und verbessern?",
    a: "Ja. Wir analysieren Ihre bestehenden Zaps, finden Schwachstellen wie fehlende Fehlerbehandlung, doppelte Ausführungen oder unnötige Tasks und bauen sie robuster und kostengünstiger um. Auf Wunsch migrieren wir komplexe Automatisierungen auf eine self-hosted Plattform, ohne dass Ihre Prozesse stillstehen.",
  },
  {
    q: "Lässt sich KI in Zapier integrieren?",
    a: "Ja. Zapier bietet Anbindungen an Sprachmodelle wie OpenAI, mit denen sich Texte zusammenfassen, E-Mails klassifizieren oder Antworten generieren lassen. Für tiefere KI-Workflows mit lokalen Modellen, AI Agents und voller Datenkontrolle ist allerdings eine Plattform wie n8n flexibler. Wir zeigen Ihnen, welcher Weg zu Ihrem Anwendungsfall passt.",
  },
  {
    q: "Was ist der Unterschied zwischen Zapier, Make und n8n?",
    a: "Alle drei automatisieren Arbeitsabläufe, unterscheiden sich aber deutlich. Zapier ist am einfachsten zu bedienen und hat die meisten App-Anbindungen, ist aber rein cloudbasiert und rechnet pro Task ab. Make (ehemals Integromat) bietet mehr visuelle Logik zu geringeren Kosten, ist ebenfalls Cloud. n8n ist Open Source, lässt sich self-hosted auf EU-Servern betreiben, ist DSGVO-konform und hat keine Kosten je Ausführung. Für den DACH-Raum mit sensiblen Daten ist n8n häufig die nachhaltigste Wahl.",
  },
  {
    q: "Wie schnell ist eine Zapier-Automatisierung eingerichtet?",
    a: "Ein einzelner, klar umrissener Zap ist oft innerhalb weniger Tage produktiv. Komplexere Abläufe mit mehreren Apps, Verzweigungen, KI-Schritten und Fehlerbehandlung brauchen ein bis zwei Wochen. Wir starten bewusst mit dem Use Case, der den größten Zeitgewinn bringt, und bauen von dort aus weiter.",
  },
  {
    q: "Übernehmen Sie auch den laufenden Betrieb?",
    a: "Ja. Auf Wunsch überwachen wir Ihre Automatisierungen, reagieren auf Fehler, passen Abläufe bei Änderungen an Ihren Tools an und bauen neue Use Cases dazu. So bleibt Ihre Automatisierung dauerhaft zuverlässig, statt nach dem ersten Einrichten langsam zu verfallen.",
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
  name: "Zapier Automatisierung & Beratung",
  serviceType: "Workflow-Automatisierung, Zapier, Prozessautomatisierung",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "Zapier-Automatisierung für Unternehmen im DACH-Raum: Konzeption, Umsetzung und Optimierung von Zaps, KI-Integration sowie DSGVO-konforme EU-Alternativen.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const stats = [
  { value: "6000+", label: "verbindbare Apps" },
  { value: "100 %", label: "weniger Copy-Paste" },
  { value: "24/7", label: "laufen Ihre Zaps" },
  { value: "1-2 Wo.", label: "bis zum ersten Zap" },
];

const ataglance = [
  ["Typ", "Cloud, sehr einfach"],
  ["App-Anbindungen", "über 6000"],
  ["Abrechnung", "pro ausgeführtem Task"],
  ["Hosting", "USA (Cloud)"],
  ["KI-Anbindung", "OpenAI und mehr"],
  ["DSGVO", "mit AVV, je nach Daten"],
];

const problems = [
  { problem: "Leads aus dem Formular landen erst Stunden später im CRM, manuell abgetippt.", solution: "Ein Zap trägt jeden Lead in Sekunden ins CRM ein und benachrichtigt das Team." },
  { problem: "Dieselben Daten werden in drei Tools parallel gepflegt.", solution: "Zapier synchronisiert Ihre Apps automatisch, eine Eingabe genügt." },
  { problem: "Rechnungen, Belege und E-Mails werden von Hand sortiert und weitergeleitet.", solution: "Eingehende Dokumente werden erkannt, abgelegt und an die richtige Stelle geroutet." },
  { problem: "Niemand merkt, wenn eine Automatisierung still gefehlschlagen ist.", solution: "Wir bauen Fehlerbehandlung und Alerts ein, sodass Sie sofort Bescheid wissen." },
];

const bentoFeatures = [
  { icon: Workflow, title: "Zaps, die wirklich durchlaufen", description: "Wir bauen Ihre Automatisierungen robust auf: mit sauberer Logik, Verzweigungen, Filtern und Fehlerbehandlung. Keine halben Abläufe, die beim ersten Sonderfall stehenbleiben, sondern Workflows, auf die Sie sich täglich verlassen können." },
  { icon: ArrowRightLeft, title: "Über 6000 Apps verbinden", description: "CRM, Mail, Kalender, Buchhaltung, Shop, Slack und mehr. Was Sie nutzen, lässt sich fast immer anbinden." },
  { icon: Bot, title: "KI in Ihre Zaps", description: "Sprachmodelle klassifizieren, fassen zusammen und schreiben Entwürfe, direkt im Ablauf statt von Hand." },
  { icon: TrendingUp, title: "Bestehende Zaps optimieren", description: "Wir prüfen vorhandene Automatisierungen, senken Task-Verbrauch und machen sie zuverlässiger." },
  { icon: Shield, title: "Ehrliche DSGVO-Beratung", description: "Wir sagen klar, wann Zapier passt und wann eine EU-gehostete Alternative der sichere Weg ist." },
  { icon: RefreshCw, title: "Betrieb & Optimierung", description: "Wir überwachen, warten und erweitern Ihre Automatisierungen, statt sie nach dem Setup sich selbst zu überlassen." },
];

const departments = [
  { value: "vertrieb", label: "Vertrieb", icon: Users, head: "Vertrieb & CRM", intro: "Kein Lead geht verloren, Follow-ups passieren von selbst.", items: ["Neue Leads aus Formular, Anzeige oder Anruf automatisch ins CRM eintragen und zuweisen.", "Begrüßungs- und Follow-up-Mails automatisch auslösen.", "Termine und Angebote aus Vorlagen erzeugen und versenden.", "Vertriebsteam bei heißen Leads sofort in Slack oder Teams benachrichtigen."] },
  { value: "marketing", label: "Marketing", icon: Megaphone, head: "Marketing & Content", intro: "Kampagnen, Leads und Reporting laufen vernetzt statt verstreut.", items: ["Newsletter-Anmeldungen über alle Kanäle synchron halten.", "Leads aus Ads automatisch anreichern, taggen und übergeben.", "Kampagnen-Kennzahlen sammeln und als Report verteilen.", "Social-Posts per KI vorbereiten und zur Freigabe planen."] },
  { value: "finanzen", label: "Finanzen", icon: Calculator, head: "Finanzen & Buchhaltung", intro: "Belege und Zahlen fließen automatisch dorthin, wo sie hingehören.", items: ["Eingangsrechnungen aus dem Postfach einsammeln und ablegen.", "Belege erkennen, benennen und an die Buchhaltung übergeben.", "Zahlungseingänge mit offenen Posten abgleichen.", "Wiederkehrende Finanz-Reports automatisch erstellen."] },
  { value: "support", label: "Service", icon: MessageSquare, head: "Kundenservice & Support", intro: "Anfragen werden sofort erfasst und zugeordnet.", items: ["Tickets automatisch kategorisieren und an das richtige Team routen.", "Antwortentwürfe per KI aus Ihrer Wissensbasis erzeugen.", "Status-Updates und Zufriedenheitsabfragen automatisch versenden.", "Eskalationen sofort an die Verantwortlichen melden."] },
  { value: "hr", label: "HR", icon: UserPlus, head: "HR & Recruiting", intro: "Vom Bewerbungseingang bis zum Onboarding läuft die Routine durch.", items: ["Bewerbungen sammeln und strukturiert ins Bewerbertool übernehmen.", "Eingangsbestätigungen und Terminvorschläge automatisch versenden.", "Onboarding-Checklisten anstoßen.", "Abwesenheitsanträge erfassen und im Kalender eintragen."] },
  { value: "ops", label: "Betrieb", icon: Cog, head: "Operations & IT", intro: "Daten, Aufgaben und Alarme werden verbunden, nicht abgetippt.", items: ["Daten zwischen Apps und Datenbanken synchronisieren.", "Routineaufgaben zeitgesteuert ausführen.", "Webhooks von Drittsystemen entgegennehmen und verarbeiten.", "Benachrichtigungen bündeln und auf den richtigen Kanälen ausspielen."] },
];

const comparison = [
  { feature: "Einstieg & Bedienung", zapier: "sehr einfach", make: "einfach, visuell", n8n: "etwas technischer" },
  { feature: "App-Anbindungen", zapier: "über 6000", make: "über 2000", n8n: "über 500 plus jede API" },
  { feature: "Hosting", zapier: "USA, Cloud", make: "EU/USA, Cloud", n8n: "self-hosted in der EU" },
  { feature: "DSGVO-Datensouveränität", zapier: "eingeschränkt", make: "teilweise", n8n: "voll, Daten bleiben bei Ihnen" },
  { feature: "Kosten bei hohem Volumen", zapier: "steigen stark", make: "moderat", n8n: "planbare Fixkosten" },
  { feature: "KI- & AI-Agent-Integration", zapier: "begrenzt", make: "begrenzt", n8n: "nativ, inkl. AI Agents" },
  { feature: "Vendor Lock-in", zapier: "hoch", make: "mittel", n8n: "keiner, Open Source" },
];

const steps = [
  { step: "01", icon: Phone, title: "Kostenlose Erstanalyse", time: "30 Minuten", description: "Wir schauen, welche manuellen Abläufe Sie täglich Zeit kosten und welche sich für einen Zap eignen. Sie wissen danach, wo der größte Hebel liegt." },
  { step: "02", icon: Search, title: "Konzept & Tool-Wahl", time: "Woche 1", description: "Wir skizzieren die Automatisierungen, schätzen Task-Verbrauch und Kosten und empfehlen ehrlich Zapier oder die passende Alternative." },
  { step: "03", icon: Settings2, title: "Umsetzung & Test", time: "Woche 1 bis 2", description: "Wir bauen die Zaps, verbinden Ihre Tools und testen intensiv inklusive Fehlerbehandlung und Logging." },
  { step: "04", icon: Rocket, title: "Go-Live & Betreuung", time: "ab Woche 2", description: "Die Automatisierungen laufen. Wir überwachen, optimieren und bauen den nächsten Use Case, wenn Sie bereit sind." },
];

const related = [
  { href: "/leistungen/n8n-automatisierung", icon: Workflow, title: "n8n Automatisierung", desc: "Die DSGVO-konforme, self-hosted Alternative zu Zapier, ohne Kosten je Ausführung." },
  { href: "/leistungen/make", icon: ArrowRightLeft, title: "Make.com (Integromat)", desc: "Visuelle Automatisierung mit mehr Logik je Szenario, zu geringeren Task-Kosten." },
  { href: "/leistungen/rpa", icon: Bot, title: "RPA & Robotic AI", desc: "Automatisierung auch für Systeme ohne Schnittstelle, etwa DATEV, BMD oder Altsysteme." },
];

function LogoBox({ slug, alt, imgClassName = "w-5 h-5", boxClassName = "" }: { slug: string; alt: string; imgClassName?: string; boxClassName?: string }) {
  return (
    <span className={`inline-flex items-center justify-center bg-white border border-border rounded ${boxClassName}`}>
      <img src={`/img/logos/${slug}.svg`} alt={alt} className={imgClassName} />
    </span>
  );
}

export default function Page() {
  return (
    <>
      <Script id="faq-zapier" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-zapier" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <LogoBox slug="zapier" alt="Zapier" imgClassName="w-9 h-9" boxClassName="rounded-xl p-2 shadow-sm" />
                    <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                      Zapier, Workflow-Automatisierung
                    </Badge>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Zapier-Automatisierung, die <span className="text-primary">wirklich Zeit spart</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Wir konzipieren, bauen und optimieren Ihre Zapier-Automatisierungen, verbinden über 6000 Apps und integrieren KI in Ihre Abläufe. Und wenn Datenschutz es verlangt, zeigen wir Ihnen die DSGVO-konforme Alternative mit EU-Hosting.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Assessment</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#vergleich">Zapier vs. Make vs. n8n</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> Ehrliche DSGVO-Beratung</span>
                    <span className="flex items-center gap-1.5"><Bot className="w-4 h-4 text-primary" /> KI-Integration</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Hero visual: Zap diagram */}
                <div className="relative">
                  <Card className="border-2 shadow-xl shadow-primary/5 overflow-hidden">
                    <CardHeader className="border-b border-border py-3">
                      <div className="flex items-center gap-2">
                        <LogoBox slug="zapier" alt="Zapier" imgClassName="w-4 h-4" boxClassName="p-1 rounded" />
                        <span className="font-mono text-xs text-muted-foreground">lead-to-crm.zap</span>
                        <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> aktiv
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3 rounded-xl border-2 border-primary/40 bg-primary/5 px-3.5 py-2.5">
                        <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0"><Zap className="w-5 h-5 text-primary" /></div>
                        <div className="min-w-0"><div className="text-[10px] uppercase tracking-wider text-primary font-medium">Trigger</div><div className="text-sm font-semibold truncate">Neuer Lead im Formular</div></div>
                      </div>
                      {[
                        { icon: Database, label: "Aktion", title: "In CRM eintragen" },
                        { icon: Bot, label: "KI-Schritt", title: "Anfrage klassifizieren" },
                        { icon: MessageSquare, label: "Aktion", title: "Team in Slack benachrichtigen" },
                      ].map((n, i) => {
                        const Icon = n.icon;
                        return (
                          <div key={i} className="flex items-center gap-3 rounded-xl border-2 border-border bg-background px-3.5 py-2.5 shadow-sm">
                            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><Icon className="w-5 h-5 text-primary" /></div>
                            <div className="min-w-0 flex-1"><div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">{n.label}</div><div className="text-sm font-semibold truncate">{n.title}</div></div>
                            <Check className="w-4 h-4 text-green-600 shrink-0" />
                          </div>
                        );
                      })}
                    </CardContent>
                  </Card>
                  <div className="hidden lg:flex absolute -top-4 -right-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium">
                    <Zap className="w-3.5 h-3.5 text-primary" /> 6000+ Apps
                  </div>
                  <div className="hidden lg:flex absolute -bottom-4 -left-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium">
                    <Lock className="w-3.5 h-3.5 text-primary" /> DSGVO-Alternative inklusive
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* STATS */}
          <section className="py-10 md:py-12 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-2 md:grid-cols-4 border-2 border-border rounded-2xl overflow-hidden bg-card">
                {stats.map(({ value, label }, i) => (
                  <div key={i} className="p-6 md:p-8 text-center border-b md:border-b-0 border-r last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r border-border">
                    <div className="text-3xl md:text-4xl font-bold text-primary">{value}</div>
                    <div className="text-xs md:text-sm text-muted-foreground mt-1.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* DEFINITION */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Kurz erklärt</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was ist Zapier und für wen lohnt es sich?</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p><strong className="text-foreground">Zapier</strong> ist der bekannteste Dienst für No-Code-Automatisierung. Sie verbinden über 6000 Apps zu automatischen Abläufen, sogenannten <strong className="text-foreground">Zaps</strong>, ganz ohne Programmierung. Ein Trigger startet den Ablauf, eine Kette von Aktionen erledigt den Rest.</p>
                    <p>Die Stärke von Zapier ist die <strong className="text-foreground">Einfachheit</strong> und die riesige Auswahl an Anbindungen. Für viele Standardprozesse ist es in Minuten startklar. Bei hohem Volumen steigen allerdings die Kosten je Task, und als US-Cloud-Dienst ist Zapier bei sensiblen Daten datenschutzrechtlich heikel.</p>
                    <p>Genau hier setzen wir an: Wir holen das Beste aus Zapier heraus, und beraten Sie <strong className="text-foreground">ehrlich</strong>, wann eine EU-gehostete, DSGVO-konforme Alternative wie n8n der nachhaltigere Weg ist. Sie bekommen die Lösung, die zu Ihren Daten und Ihrem Volumen passt, nicht die, die uns am einfachsten wäre.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Zaps erstellen</Badge>
                    <Badge variant="secondary" className="rounded-full">Zapier Alternative</Badge>
                    <Badge variant="secondary" className="rounded-full">KI-Automatisierung</Badge>
                    <Badge variant="secondary" className="rounded-full">Prozessautomatisierung</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Zapier auf einen Blick</CardTitle>
                    <CardDescription>Die wichtigsten Eckdaten im Überblick.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {ataglance.map(([label, value]) => (
                      <div key={label} className="flex items-center justify-between py-2.5 border-b border-border last:border-0">
                        <span className="text-sm font-medium text-foreground">{label}</span>
                        <span className="text-sm text-muted-foreground text-right max-w-[55%]">{value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* PROBLEM -> LÖSUNG */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum automatisieren?</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Wo heute Handarbeit ist, läuft morgen ein Zap</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Überall, wo Sie dieselben Schritte täglich wiederholen, übernimmt Zapier: schneller, zuverlässiger und ohne Flüchtigkeitsfehler.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 pl-1">Was heute passiert</div>
                  {problems.map(({ problem }, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl border bg-background"><X className="w-5 h-5 text-destructive mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{problem}</span></div>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-2 pl-1">Was die Automatisierung tut</div>
                  {problems.map(({ solution }, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-primary/20 bg-primary/5"><Check className="w-5 h-5 text-primary mt-0.5 shrink-0" /><span className="text-sm leading-relaxed font-medium">{solution}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <WorkflowExamples
            tool="Zapier"
            examples={[
              { icon: WfUserPlus, title: "Anfragen sofort ins CRM", trigger: "Neue Anfrage über Formular oder Website", steps: ["Kontakt im CRM anlegen", "Team in Slack benachrichtigen", "Automatische Antwort senden"], result: "Reaktion in Sekunden, nichts geht unter" },
              { icon: WfMails, title: "Newsletter und Onboarding automatisieren", trigger: "Eintrag über Formular oder Kauf", steps: ["Kontakt in Mailingliste aufnehmen", "Willkommens-Serie starten", "Tags und Segmente automatisch setzen"], result: "Sauberes Listenmanagement ohne Aufwand" },
              { icon: WfMega, title: "Content auf alle Kanäle verteilen", trigger: "Neuer Beitrag freigegeben", steps: ["Auf LinkedIn, Instagram und Facebook posten", "In Tabelle protokollieren", "Reporting automatisch aktualisieren"], result: "Ein Beitrag, alle Kanäle, ein Klick" },
              { icon: WfCart, title: "Bestellungen und Zahlungen verbuchen", trigger: "Neue Bestellung oder Stripe-Zahlung", steps: ["Kunde und Auftrag im CRM anlegen", "Rechnung im Buchhaltungstool erstellen", "Bestätigung an den Kunden senden"], result: "Bestellung bis Buchung ohne Medienbruch" },
              { icon: WfCal, title: "Termine und Erinnerungen automatisieren", trigger: "Termin über Calendly gebucht", steps: ["In Kalender und CRM eintragen", "Erinnerung per Mail und SMS", "Nach dem Termin Feedback einholen"], result: "Volle Kalender, weniger No-Shows" },
              { icon: WfReceipt, title: "Aufgaben aus Tools erzeugen", trigger: "Neue Mail, Formular oder Slack-Nachricht", steps: ["Aufgabe in Asana oder Trello anlegen", "Verantwortliche zuweisen", "Fällige Aufgaben automatisch erinnern"], result: "Nichts geht im Posteingang verloren" },
            ]}
          />

          {/* BENTO */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Was wir liefern</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Mehr als Zaps zusammenklicken</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Wir bauen Automatisierungen, die produktiv halten, und denken Datenschutz und Kosten von Anfang an mit.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="hover-lift border-2 lg:col-span-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2"><Workflow className="w-6 h-6 text-primary" /></div>
                    <CardTitle className="text-xl">{bentoFeatures[0].title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{bentoFeatures[0].description}</CardDescription>
                  </CardHeader>
                </Card>
                {bentoFeatures.slice(1).map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <Card key={i} className="hover-lift border-2">
                      <CardHeader>
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2"><Icon className="w-5 h-5 text-primary" /></div>
                        <CardTitle className="text-lg">{f.title}</CardTitle>
                        <CardDescription className="leading-relaxed">{f.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* USE CASES */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Anwendungsfälle</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Was wir mit Zapier automatisieren</h2>
                <p className="text-lg text-muted-foreground mt-4">Wählen Sie einen Bereich, wir zeigen konkrete Abläufe aus der Praxis.</p>
              </div>
              <Tabs defaultValue="vertrieb" className="w-full">
                <TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">
                  {departments.map((d) => {
                    const Icon = d.icon;
                    return (
                      <TabsTrigger key={d.value} value={d.value} className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border">
                        <Icon className="w-4 h-4 mr-1.5" />{d.label}
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
                {departments.map((d) => (
                  <TabsContent key={d.value} value={d.value}>
                    <Card className="border-2">
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-bold mb-2">{d.head}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-5">{d.intro}</p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {d.items.map((item, j) => (
                            <div key={j} className="flex items-start gap-2.5 p-3 rounded-lg border bg-background"><Zap className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{item}</span></div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>

          {/* VERGLEICH */}
          <section id="vergleich" className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Tool-Vergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Zapier vs. Make vs. n8n</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Welches Tool passt? Das hängt von Ihren Daten, Ihrem Volumen und Ihrem Anspruch an Datenschutz ab. Wir beraten unabhängig.</p>
              </div>
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[28%] font-bold text-foreground">Merkmal</TableHead>
                      <TableHead className="text-primary font-bold"><span className="inline-flex items-center gap-1.5"><LogoBox slug="zapier" alt="Zapier" imgClassName="w-4 h-4" boxClassName="p-0.5" />Zapier</span></TableHead>
                      <TableHead className="text-muted-foreground"><span className="inline-flex items-center gap-1.5"><LogoBox slug="make" alt="Make" imgClassName="w-4 h-4" boxClassName="p-0.5" />Make</span></TableHead>
                      <TableHead className="text-muted-foreground"><span className="inline-flex items-center gap-1.5"><LogoBox slug="n8n" alt="n8n" imgClassName="w-4 h-4" boxClassName="p-0.5" />n8n</span></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparison.map((row, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{row.feature}</TableCell>
                        <TableCell className="text-sm">{row.zapier}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{row.make}</TableCell>
                        <TableCell className="text-sm text-primary font-medium">{row.n8n}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
              <p className="text-sm text-muted-foreground text-center mt-4">Unser Standard-Stack für den DACH-Raum ist <a href="/leistungen/n8n-automatisierung" className="text-primary hover:underline">n8n</a>, weil Ihre Daten dort in der EU bleiben. Zapier und Make setzen wir gezielt dort ein, wo Tempo und Komfort zählen.</p>
            </div>
          </section>

          {/* PROZESS */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unser Prozess</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Ihr Automatisierungsprojekt in 4 Schritten</h2>
                <p className="text-lg text-muted-foreground mt-4">Transparent, ohne Überraschungen und mit ehrlicher Tool-Empfehlung.</p>
              </div>
              <ProcessSteps steps={steps} />
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zu Zapier</h2>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqs.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-2 border-border rounded-xl px-6 bg-background data-[state=open]:border-primary/30 data-[state=open]:bg-primary/5">
                    <AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-5">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* RELATED */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Mehr Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zu Zapier</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {related.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <a key={i} href={s.href} className="group block">
                      <Card className="h-full border-2 hover-lift group-hover:border-primary/40">
                        <CardHeader>
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${serviceLogos[s.href] ? "bg-white border border-border" : "bg-primary/10"}`}>{serviceLogos[s.href] ? <img src={`/img/logos/${serviceLogos[s.href]}.svg`} alt={s.title} className="w-7 h-7 object-contain" /> : <Icon className="w-6 h-6 text-primary" />}</div>
                          <CardTitle className="text-xl">{s.title}</CardTitle>
                        </CardHeader>
                        <CardContent><p className="text-muted-foreground leading-relaxed">{s.desc}</p></CardContent>
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
