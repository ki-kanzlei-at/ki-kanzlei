import type { Metadata } from "next";
import Script from "next/script";
import { NavigationHome } from "@/components/NavigationHome";
import { FooterModern } from "@/components/FooterModern";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Phone, PhoneCall, CalendarCheck, Car, ShieldCheck, Server, MapPin, Clock, FileText, MessageSquare, Users, UserPlus, Database, Share2, Megaphone, Filter, Plug, Check, X, Network, Bot } from "lucide-react";
import { serviceLogos } from "@/lib/serviceLogos";

export const metadata: Metadata = {
  title: "KI fürs Autohaus: Software, Service & Telefonassistent",
  description:
    "KI fürs Autohaus: KI-Telefonassistent für Verkauf und Service, Terminvergabe und Lead-Erfassung automatisiert. Kein Anruf und kein Lead geht verloren.",
  keywords:
    "Autohaus Software, KI Autohaus, KI Telefonassistent Autohaus, Autohaus CRM, Kfz Automatisierung, Lead Management Autohaus, Service-Terminierung KI, KI Werkstatt, Autohaus Digitalisierung",
  alternates: { canonical: "https://ki-kanzlei.at/branchen/ki-loesungen-autohaus" },
};

const faqs = [
  {
    q: "Wie funktioniert die Terminbuchung in der Werkstatt?",
    a: "Die KI erkennt am Telefon den Kundenwunsch, etwa Pickerl, Service oder Reifenwechsel, prüft die Kapazität in Ihrem DMS (Händlersystem) und bucht den Termin direkt ein. Der Kunde erhält sofort eine SMS-Bestätigung.",
  },
  {
    q: "Kann die KI auch Leasing- und Finanzierungsanfragen bearbeiten?",
    a: "Ja. Der Voice-Agent oder Chatbot fragt grundlegende Daten zur Wunschfinanzierung ab und leitet diese vorqualifiziert an Ihren Verkaufsberater weiter, inklusive aller notwendigen Kontaktdaten.",
  },
  {
    q: "Ist die Lösung mit gängigen Autohaus-Systemen (DMS) kompatibel?",
    a: "Wir integrieren uns über sichere Schnittstellen (APIs) in die meisten gängigen Systeme. Sollte keine direkte API verfügbar sein, nutzen wir intelligente Workflows, um die Daten fehlerfrei zu übertragen.",
  },
  {
    q: "Reagiert die KI auch auf Anfragen von mobile.de und willhaben?",
    a: "Ja. Die KI antwortet sofort auf Anfragen von Gebrauchtwagen-Portalen wie mobile.de oder willhaben, beantwortet Fachfragen zur Ausstattung, versendet Unterlagen und trennt echte Verkaufs-Leads von Spam-Anfragen, rund um die Uhr.",
  },
  {
    q: "Was passiert bei Notfällen oder Pannendienst-Anrufen?",
    a: "Die KI erkennt kritische Situationen sofort und leitet den Anruf priorisiert an Ihren Notdienst oder einen Mitarbeiter weiter. Außerhalb der Kernzeiten gibt sie wichtige Erstinfos und koordiniert den Abschleppdienst.",
  },
  {
    q: "Wie viel Zeit spart die KI meinem Service-Team?",
    a: "Autohäuser entlasten ihr Team durch die automatisierte Annahme von Routineanfragen typischerweise um 8 bis 12 Stunden pro Woche. Ihre Service-Berater gewinnen diese Zeit zurück für die aktive Kundenberatung und den Verkauf.",
  },
  {
    q: "Wie wird die DSGVO im Autohaus-Alltag gewahrt?",
    a: "Alle Anrufe und Daten werden nach strengen DSGVO-Richtlinien verarbeitet. Wir nutzen Serverstandorte in Europa, vorzugsweise in Österreich, und stellen sicher, dass alle Einwilligungen rechtssicher eingeholt werden.",
  },
  {
    q: "Wie läuft die Einführung in meinem Autohaus ab?",
    a: "Wir starten mit einem kostenlosen Analysegespräch, erfassen Ihre Prozesse in Service und Verkauf und richten Stimme, Wissensbasis und DMS-Anbindung ein. Nach einer Testphase mit echten Anrufszenarien geht die Lösung live, mit laufender Optimierung danach.",
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
  name: "KI-Lösungen für Autohäuser",
  serviceType: "KI Automatisierung, KI-Telefonassistent für Autohaus und Kfz-Betriebe",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description: "KI-Lösungen für Autohäuser und Kfz-Betriebe im DACH-Raum: 24/7 Serviceannahme, automatische Werkstatt-Terminbuchung, Lead-Qualifizierung. DSGVO-konform, EU-gehostet.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const problems = [
  { icon: PhoneCall, title: "Engpässe in der Service-Annahme", text: "In Stoßzeiten sind die Leitungen überlastet. Kunden hängen in der Warteschleife, was zu Frust und verlorenen Werkstatt-Aufträgen führt." },
  { icon: Clock, title: "Eingeschränkte Erreichbarkeit", text: "Viele Kunden wollen Termine erst nach Feierabend buchen. Ohne 24/7 Lösung gehen diese Aufträge an die Konkurrenz." },
  { icon: FileText, title: "Hoher administrativer Aufwand", text: "Die manuelle Koordination von Werkstatt-Terminen am Telefon bindet wertvolle Zeit Ihrer Service-Berater für Routineaufgaben." },
  { icon: MessageSquare, title: "Ineffizientes Lead-Management", text: "Anfragen von Gebrauchtwagen-Portalen landen ungefiltert in den Postfächern. Die manuelle Nachverfolgung ist zeitaufwendig und fehleranfällig." },
  { icon: Users, title: "Fachkräftemangel und Überlastung", text: "Qualifiziertes Personal für die Zentrale ist schwer zu finden. Bestehende Mitarbeiter sind durch repetitive Anfragen überlastet." },
  { icon: Car, title: "Fragmentierte Informationen", text: "Rückfragen zum Reparaturstatus oder zu Fahrzeugdetails erfordern mühsame interne Recherchen und verlängern die Reaktionszeit." },
];

const solutions = [
  "24/7 Voice-Annahme nimmt jeden Anruf entgegen, auch parallel in Stoßzeiten, ganz ohne Warteschleife.",
  "Terminbuchung rund um die Uhr, auch nach Feierabend, direkt in Ihr Planungssystem.",
  "Automatische Terminkoordination entlastet Ihre Service-Berater um 8 bis 12 Stunden pro Woche.",
  "Die KI qualifiziert Plattform-Leads, beantwortet Fachfragen und trennt echte Anfragen von Spam.",
  "Repetitive Routineanfragen übernimmt die KI, Ihr Team konzentriert sich auf Beratung und Abschluss.",
  "Eine Werkstatt-Wissensbasis liefert technische Daten und Reparaturstatus auf Zuruf in Sekunden.",
];

const useCases = [
  { value: "service", label: "Serviceannahme", icon: PhoneCall, head: "KI-Serviceannahme (24/7 Voice)", text: "Vollautomatisierte Annahme für Ihre Werkstatt. Die KI erfasst Kundenwünsche für Service, Pickerl oder Reifenwechsel und bucht diese direkt in Ihr Planungssystem, menschlich, kompetent und ohne Warteschleife." },
  { value: "verkauf", label: "Verkauf", icon: UserPlus, head: "Digitale Verkaufs-Qualifizierung", text: "Die KI qualifiziert Interessenten für Neu- und Gebrauchtwagen systematisch vor. Sie klärt Inzahlungnahme, Finanzierungswünsche und Probefahrt-Termine, bevor Ihr Verkäufer den Hörer abhebt." },
  { value: "plattform", label: "Plattform-Leads", icon: MessageSquare, head: "Plattform-Lead-Automatisierung", text: "Sofort-Reaktion auf Anfragen von mobile.de oder willhaben. Die KI beantwortet Fachfragen zur Ausstattung, versendet Unterlagen und sortiert echte Verkaufs-Leads von Spam-Anfragen, rund um die Uhr." },
  { value: "werkstatt", label: "Werkstatt-Wissen", icon: Database, head: "KI-Werkstatt-Wissensbasis (RAG)", text: "Geben Sie Ihrem Team sekundenschnellen Zugriff auf technische Daten, Garantie-Richtlinien und interne Prozesse. Die Abfrage erfolgt einfach per Sprache oder Chat, direkt am Fahrzeug." },
  { value: "flotte", label: "Flottenvertrieb", icon: Share2, head: "KI-Flottenvertriebs-Assistenz", text: "Gewinnen Sie Firmenkunden mit System. Unser Akquise-Agent identifiziert Fuhrparkleiter in Ihrer Region und versendet hochgradig personalisierte Angebote für Leasing und Service." },
  { value: "marketing", label: "Marketing", icon: Megaphone, head: "KI-Marketing-Assistenz für Autohäuser", text: "Steigern Sie Ihre regionale Relevanz. Die KI erstellt regelmäßig Beiträge zu neuen Modellen, Werkstatt-Tipps und lokalen Events für Ihre Website und Ihre Kanäle." },
];

const features = [
  { icon: PhoneCall, title: "24/7 Serviceannahme", text: "Der KI-Telefonassistent nimmt jeden Anruf entgegen, auch abends, am Wochenende und in Stoßzeiten. Kein verpasster Werkstatt-Auftrag mehr." },
  { icon: CalendarCheck, title: "Terminbuchung ins DMS", text: "Prüft Kapazitäten in Echtzeit und bucht Service-, Pickerl- und Reifentermine direkt in Ihr Händlersystem, inklusive SMS-Bestätigung." },
  { icon: Filter, title: "Lead-Qualifizierung", text: "Erfasst Finanzierung, Inzahlungnahme und Probefahrt-Wunsch und übergibt nur passende, vorqualifizierte Leads an Ihren Verkauf." },
  { icon: Plug, title: "DMS-Integration", text: "Sichere Anbindung an gängige Autohaus-Systeme über APIs, bei fehlender Schnittstelle über intelligente Workflows." },
  { icon: ShieldCheck, title: "DSGVO und EU-Hosting", text: "Alle Anrufe und Daten werden DSGVO-konform auf Serverstandorten in Europa, vorzugsweise Österreich, verarbeitet." },
  { icon: Clock, title: "8 bis 12 Stunden Entlastung", text: "Routineanfragen laufen automatisch. Ihr Team gewinnt pro Woche 8 bis 12 Stunden für aktive Kundenberatung zurück." },
];

const comparison = [
  ["Erreichbarkeit", "24/7, auch nach Feierabend", "nur zu Öffnungszeiten"],
  ["Wartezeit in Stoßzeiten", "keine, parallele Anrufe", "Warteschleife"],
  ["Werkstatt-Terminbuchung", "direkt ins DMS", "manuell am Telefon"],
  ["Plattform-Leads (mobile.de, willhaben)", "sofortige Reaktion", "oft verzögert"],
  ["Team-Entlastung", "8 bis 12 Stunden pro Woche", "keine"],
  ["DSGVO und EU-Hosting", "inklusive", "abhängig vom Setup"],
];

const transcript = [
  { who: "Anrufer", text: "Guten Tag, ich bräuchte einen Termin fürs Pickerl." },
  { who: "Anna", text: "Sehr gern. Donnerstag um 9:00 Uhr wäre frei, passt Ihnen das?" },
  { who: "Anrufer", text: "Ja, super." },
  { who: "Anna", text: "Erledigt. Sie bekommen die Bestätigung gleich per SMS." },
];

const waveHeights = [40, 70, 30, 90, 55, 75, 35, 85, 50, 65, 25, 80, 45, 70, 35, 60];

const related = [
  { href: "/leistungen/voicebot", icon: PhoneCall, title: "Voicebot & KI-Telefonassistent", desc: "Der KI-Telefonassistent, der Ihre Serviceannahme rund um die Uhr übernimmt und Termine bucht." },
  { href: "/leistungen/n8n-automatisierung", icon: Network, title: "n8n Automatisierung", desc: "Verbindet DMS, Portale und CRM, damit Leads und Termine automatisch im richtigen System landen." },
  { href: "/leistungen/agentic-ai", icon: Bot, title: "Agentic AI & AI Agents", desc: "Autonome KI-Agenten, die Leads qualifizieren, Probefahrten koordinieren und Nachfass im CRM übernehmen." },
];

export default function Page() {
  return (
    <>
      <Script id="faq-autohaus" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-autohaus" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <style>{`
        @keyframes ahWave { 0%,100% { transform: scaleY(.3); } 50% { transform: scaleY(1); } }
        .ah-bar { transform-origin: bottom; animation: ahWave 1.1s ease-in-out infinite; }
        @keyframes ahPing { 0% { transform: scale(.9); opacity:.5; } 70%,100% { transform: scale(1.6); opacity:0; } }
        .ah-ping { animation: ahPing 2s ease-out infinite; }
      `}</style>

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                    Ihr österreichischer KI-Partner für Autohäuser
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    KI Lösungen für <span className="text-primary">Autohäuser</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Von der 24/7 Werkstatt-Terminbuchung bis zur automatisierten Lead-Qualifizierung: Wir bauen produktionsreife KI-Lösungen, die Ihre Service-Annahme entlasten und den Verkauf ankurbeln.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Analysegespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="tel:+43720080697">Voicebot live anrufen</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-primary" /> EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Live-Serviceannahme card */}
                <Card className="relative border-2 shadow-xl shadow-primary/5">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                          <Phone className="w-5 h-5 text-primary" />
                        </div>
                        <span className="absolute inset-0 rounded-full border-2 border-primary/40 ah-ping" aria-hidden />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">Anna, KI-Serviceannahme</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> Live im Gespräch, 00:24
                        </div>
                      </div>
                      <span className="ml-auto text-[10px] uppercase tracking-wider text-muted-foreground font-medium">EU-Server</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-3">
                    {transcript.map((t, i) => (
                      <div key={i} className={t.who === "Anna" ? "flex justify-end" : "flex justify-start"}>
                        <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-snug ${t.who === "Anna" ? "bg-primary text-white rounded-br-sm" : "bg-muted text-foreground rounded-bl-sm"}`}>
                          {t.text}
                        </div>
                      </div>
                    ))}
                    <div className="flex items-end justify-center gap-1 h-10 pt-2">
                      {waveHeights.map((h, i) => (
                        <span
                          key={i}
                          className="ah-bar w-1 rounded-full bg-primary/70"
                          style={{ height: `${h}%`, animationDelay: `${(i % 8) * 0.1}s` }}
                        />
                      ))}
                    </div>
                    <div className="text-[11px] text-center text-muted-foreground pt-1">
                      Termin direkt im DMS, SMS-Bestätigung, DSGVO-konform
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* STATS BAND */}
          <section className="pb-4">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-border rounded-2xl overflow-hidden bg-card">
                {[
                  ["8-12h", "Team-Entlastung pro Woche"],
                  ["24/7", "Erreichbarkeit, ohne Warteschleife"],
                  ["100%", "DSGVO-konform, EU-gehostet"],
                ].map(([v, l], i) => (
                  <div key={i} className="p-8 text-center border-b md:border-b-0 md:border-r last:border-0 border-border">
                    <div className="text-4xl md:text-5xl font-bold text-primary">{v}</div>
                    <div className="text-sm text-muted-foreground mt-2">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WAS KI LEISTET */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Kurz erklärt</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was KI im Autohaus heute leistet</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Der Druck auf <strong className="text-foreground">Service und Verkauf</strong> wächst, während qualifiziertes Personal für die Zentrale schwer zu finden ist. Eine KI für das Autohaus übernimmt genau die Routineprozesse, die heute am meisten Zeit kosten: Anrufannahme, Werkstatt-Terminbuchung und die Qualifizierung von Anfragen.</p>
                    <p>Im Zentrum steht der <strong className="text-foreground">KI-Telefonassistent</strong>. Er versteht frei gesprochene Sprache, erfasst den Kundenwunsch und bucht Termine für Service, Pickerl oder Reifenwechsel direkt in Ihr DMS. Parallel reagiert die KI sofort auf Leads von mobile.de und willhaben und sortiert echte Anfragen von Spam.</p>
                    <p>Für Autohäuser im DACH-Raum ist dabei eines entscheidend: <strong className="text-foreground">Datenschutz</strong>. Wir verarbeiten alle Anrufe und Daten DSGVO-konform auf Serverstandorten in Europa, vorzugsweise in Österreich, und holen alle Einwilligungen rechtssicher ein.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">KI-Serviceannahme</Badge>
                    <Badge variant="secondary" className="rounded-full">Lead-Qualifizierung</Badge>
                    <Badge variant="secondary" className="rounded-full">Werkstatt-Wissensbasis</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Autohaus-KI auf einen Blick</CardTitle>
                    <CardDescription>Was die Lösung im Handel und Service ausmacht.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {[
                      ["Einsatzbereiche", "Service, Verkauf, Werkstatt"],
                      ["Erreichbarkeit", "24/7, ohne Warteschleife"],
                      ["Terminbuchung", "direkt ins DMS, mit SMS"],
                      ["Lead-Quellen", "mobile.de, willhaben, Telefon"],
                      ["Team-Entlastung", "8 bis 12 Stunden pro Woche"],
                      ["Datenschutz", "DSGVO, EU-Hosting"],
                    ].map(([label, value]) => (
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

          {/* PROBLEM ZU LÖSUNG */}
          <section className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-14">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Herausforderung und Antwort</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Herausforderungen im modernen Autohaus</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Wir automatisieren die Routineprozesse, damit Ihr Team wieder Zeit für die aktive Kundenberatung hat.</p>
              </div>
              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2.5">
                      <span className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center"><X className="w-5 h-5 text-muted-foreground" /></span>
                      Der Alltag heute
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    {problems.map((p, i) => {
                      const Icon = p.icon;
                      return (
                        <div key={i} className="flex gap-3">
                          <span className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </span>
                          <div>
                            <div className="font-semibold text-sm">{p.title}</div>
                            <p className="text-sm text-muted-foreground leading-relaxed mt-0.5">{p.text}</p>
                          </div>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>
                <Card className="border-2 border-primary/30 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2.5">
                      <span className="w-9 h-9 rounded-lg bg-primary text-white flex items-center justify-center"><Check className="w-5 h-5" /></span>
                      Mit KI Kanzlei
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    {solutions.map((s, i) => (
                      <div key={i} className="flex gap-3">
                        <span className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                          <Check className="w-5 h-5 text-primary" />
                        </span>
                        <p className="text-sm text-foreground leading-relaxed pt-1.5">{s}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
              <div className="text-center mt-12">
                <Button size="lg" asChild><a href="#contact">Kostenlose Potenzial-Analyse</a></Button>
              </div>
            </div>
          </section>

          {/* USE CASES TABS */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Wo wir ansetzen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Lösungen für den Autohaus-Alltag</h2>
                <p className="text-lg text-muted-foreground">Weniger Verwaltung, mehr Abschlüsse. Wählen Sie den Bereich, wir zeigen das passende Szenario.</p>
              </div>
              <Tabs defaultValue="service" className="w-full">
                <TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">
                  {useCases.map((u) => {
                    const Icon = u.icon;
                    return (
                      <TabsTrigger key={u.value} value={u.value} className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border">
                        <Icon className="w-4 h-4 mr-1.5" />{u.label}
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
                {useCases.map((u) => (
                  <TabsContent key={u.value} value={u.value}>
                    <Card className="border-2">
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-bold mb-2">{u.head}</h3>
                        <p className="text-muted-foreground leading-relaxed">{u.text}</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>

          {/* FUNKTIONEN BENTO */}
          <section className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-14">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Funktionen</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Was Ihre Autohaus-KI übernimmt</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Vom ersten Klingeln bis zum gebuchten Termin, alles automatisch und nachvollziehbar protokolliert.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {features.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <Card key={i} className={`hover-lift border-2 ${i === 0 ? "lg:col-span-2 bg-primary/5 border-primary/20" : ""}`}>
                      <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{f.title}</CardTitle>
                      </CardHeader>
                      <CardContent><p className="text-muted-foreground leading-relaxed">{f.text}</p></CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* VERGLEICH */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Vergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">KI-Serviceannahme vs. klassische Telefonzentrale</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Zwei Wege, ein Autohaus erreichbar zu halten. Nur einer ist immer da und entlastet Ihr Team spürbar.</p>
              </div>
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[34%] font-bold text-foreground">Merkmal</TableHead>
                      <TableHead className="text-primary font-bold">Mit KI Kanzlei</TableHead>
                      <TableHead className="text-muted-foreground">Klassische Telefonzentrale</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparison.map((row, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{row[0]}</TableCell>
                        <TableCell className="text-sm text-primary font-medium">
                          <span className="inline-flex items-start gap-1.5"><Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />{row[1]}</span>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          <span className="inline-flex items-start gap-1.5"><X className="w-4 h-4 text-muted-foreground/50 mt-0.5 shrink-0" />{row[2]}</span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </section>

          {/* FAQ */}
          <section className="section-spacing">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen aus dem Autohaus</h2>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqs.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-2 border-border rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:bg-primary/5">
                    <AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-5">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* VERWANDTE LEISTUNGEN */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Mehr Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zur Autohaus-KI</h2>
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
