import type { Metadata } from "next";
import Script from "next/script";
import { NavigationHome } from "@/components/NavigationHome";
import { ModelLogoStrip } from "@/components/ModelLogoStrip";
import { FooterModern } from "@/components/FooterModern";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { serviceLogos } from "@/lib/serviceLogos";
import {
  Check,
  X,
  Phone,
  Search,
  Rocket,
  TrendingUp,
  Target,
  Brain,
  Lightbulb,
  Users,
  BarChart3,
  Briefcase,
  Scale,
  Stethoscope,
  Hotel,
  ShoppingCart,
  Factory,
  Layers,
  Unlock,
  Shield,
  Bot,
  Workflow,
  GraduationCap,
  Database,
  Cpu,
  Gauge,
  LineChart,
  Map,
} from "lucide-react";

export const metadata: Metadata = {
  title: "KI Consulting & AI Consulting für Unternehmen",
  description:
    "Unabhängiges KI Consulting für Unternehmen im DACH-Raum: KI Strategie, AI Consulting, KI Transformation und KI Implementierung. Vier Phasen von der kostenlosen Erstanalyse bis zum messbaren ROI, DSGVO-konform und praxisnah.",
  keywords:
    "KI Consulting, AI Consulting, KI Beratung, KI Strategie, KI Transformation, AI Transformation, KI Implementierung, KI Agentur, KI Berater Österreich, KI Beratung DACH-Raum, AI Berater, KI Roadmap, KI Potenzialanalyse, KI Governance, KI Consulting Deutschland, KI Consulting Schweiz, KI Beratung Deutschland, KI Beratung Schweiz, AI Consulting DACH, Deutschland, Schweiz",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/ki-consulting" },
};

const faqs = [
  {
    q: "Was ist KI Consulting?",
    a: "KI Consulting (auch AI Consulting) bezeichnet die professionelle Beratung von Unternehmen bei der Einführung und Nutzung von künstlicher Intelligenz. Ein KI Consultant analysiert Ihre Prozesse, identifiziert KI-Potenziale, entwickelt eine KI-Strategie und begleitet die Implementierung, vom Proof of Concept bis zum produktiven Einsatz im Tagesgeschäft.",
  },
  {
    q: "Was kostet KI Consulting?",
    a: "Die Kosten variieren je nach Projektumfang. Das erste Analysegespräch ist bei uns kostenlos. Strategieberatung und Implementierungsprojekte kalkulieren wir individuell und transparent. Viele Unternehmen starten mit einem kostengünstigen Pilot-Projekt, das sich schnell amortisiert. Ein realistischer ROI liegt erfahrungsgemäß bei 200 bis 400 Prozent.",
  },
  {
    q: "Wie läuft ein KI Consulting Projekt ab?",
    a: "Ein typisches KI Consulting Projekt läuft in vier Phasen: (1) Analyse: Wir verstehen Ihre Prozesse und machen KI-Potenziale sichtbar. (2) Strategie: Wir entwickeln eine priorisierte KI-Roadmap mit ROI-Kalkulation. (3) Pilot: Ein schneller, messbarer Proof of Concept in zwei bis vier Wochen. (4) Skalierung: Rollout auf das gesamte Unternehmen mit laufender Begleitung.",
  },
  {
    q: "Ist KI Consulting auch für kleine Unternehmen geeignet?",
    a: "Absolut. KI ist längst nicht mehr nur etwas für Konzerne. Gerade KMU profitieren stark, weil sich KI Telefonassistenten, automatisierte Workflows und KI Wissensdatenbanken bereits ab wenigen Mitarbeitern rechnen. Wir beraten Unternehmen ab rund fünf Mitarbeitern im gesamten DACH-Raum.",
  },
  {
    q: "Was unterscheidet KI Kanzlei von anderen KI Beratern?",
    a: "Wir sind eine unabhängige KI Beratung ohne Bindung an einen einzelnen Anbieter und setzen die empfohlenen Lösungen selbst um. Statt reiner Strategiefolien bekommen Sie ein produktives KI-System. Der Fokus liegt auf DSGVO-Konformität, EU-Hosting, österreichisch-europäischen Werten und messbarem ROI statt Buzzwords.",
  },
  {
    q: "Wie schnell sehe ich erste Ergebnisse?",
    a: "Schneller, als die meisten erwarten. Statt monatelanger Konzeptphasen starten wir nach dem Assessment direkt mit einem konkreten Piloten. Ein erstes greifbares Ergebnis liegt in der Regel nach rund 30 Tagen vor, inklusive Messung des tatsächlichen Effekts in Ihrem Betrieb.",
  },
  {
    q: "Welche Voraussetzungen braucht mein Unternehmen für KI?",
    a: "Weniger, als Sie denken. Sie brauchen keine eigene IT-Abteilung und kein perfekt aufgeräumtes Data-Warehouse. Wichtiger sind klar definierbare Prozesse und die Bereitschaft, einen ersten Use Case auszuprobieren. Fehlende Datenstruktur oder Infrastruktur arbeiten wir gemeinsam im Projekt auf.",
  },
  {
    q: "Ist die KI Beratung DSGVO- und EU-AI-Act-konform?",
    a: "Ja. Datenschutz und Rechtssicherheit sind bei uns kein Add-on, sondern Ausgangspunkt. Wir planen jede Lösung DSGVO-konform mit Datenhaltung in Österreich und der EU, schließen Auftragsverarbeitungsverträge und prüfen die Risikoklasse Ihrer Anwendung nach EU AI Act, inklusive Kennzeichnung und Dokumentation.",
  },
  {
    q: "Bleibt KI Kanzlei nach dem Pilot an Bord?",
    a: "Auf Wunsch ja. Nach einem erfolgreichen Pilot skalieren wir die Lösung und arbeiten weitere Use Cases aus dem Fahrplan ab. In regelmäßigen Reviews messen wir die Wirkung, optimieren laufend und übergeben auf Wunsch sauber an Ihr internes Team.",
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
  name: "KI Consulting",
  serviceType: "KI Beratung & AI Consulting",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "Unabhängiges KI Consulting für Unternehmen im DACH-Raum: KI Strategie, AI Consulting, KI Transformation und KI Implementierung, DSGVO-konform und mit messbarem ROI.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const heroPhases = [
  { icon: Search, step: "01", label: "Erstanalyse", time: "30 Min., kostenlos", desc: "Prozesse verstehen, Engpässe und KI-Potenziale sichtbar machen." },
  { icon: Map, step: "02", label: "KI Assessment & Roadmap", time: "Woche 1 bis 2", desc: "Priorisierte Use Cases, ROI-Kalkulation und klarer Fahrplan." },
  { icon: Rocket, step: "03", label: "Pilot / Proof of Concept", time: "Woche 2 bis 4", desc: "Eine erste KI-Lösung produktiv testen und den Effekt messen." },
  { icon: TrendingUp, step: "04", label: "Skalierung & Begleitung", time: "laufend", desc: "Rollout auf das Unternehmen, kontinuierliche Optimierung." },
];

const stats = [
  { value: "350%", label: "durchschnittlicher ROI im ersten Jahr" },
  { value: "30 Tage", label: "bis zum ersten messbaren Ergebnis" },
  { value: "100%", label: "anbieterunabhängige Beratung" },
  { value: "3 bis 5", label: "priorisierte Use Cases pro Projekt" },
];

const services = [
  { icon: Target, title: "KI Strategie & Roadmap", description: "Wir entwickeln eine maßgeschneiderte KI-Strategie: Welche Prozesse automatisieren, welche Tools einsetzen, welcher ROI ist realistisch? Sie erhalten einen priorisierten Fahrplan mit Kosten, Zeitplan und erwarteten Einsparungen." },
  { icon: Brain, title: "KI Potenzialanalyse", description: "Wir analysieren Ihre bestehenden Prozesse und identifizieren die drei bis fünf KI-Anwendungsfälle mit dem höchsten Hebel." },
  { icon: Lightbulb, title: "Proof of Concept", description: "Schnell greifbar: In zwei bis vier Wochen bauen wir einen funktionierenden KI-Piloten, den Sie sofort in der Praxis testen." },
  { icon: Rocket, title: "KI Implementierung", description: "Von der Idee zur Produktion: AI Agents, KI Chatbots, Wissensdatenbanken und Workflow-Automatisierung in Ihrem Betrieb." },
  { icon: Users, title: "KI Change Management", description: "KI-Projekte scheitern selten an der Technik, sondern an der Akzeptanz. Wir begleiten Ihr Team durch den Wandel." },
  { icon: BarChart3, title: "KI ROI Messung", description: "Wir definieren KPIs, messen den Impact Ihrer KI-Investition und optimieren kontinuierlich für maximalen Return." },
  { icon: Shield, title: "KI Governance & EU AI Act", description: "Risikoklassifizierung, Dokumentation und Kennzeichnung nach EU AI Act, damit Ihr KI-Einsatz rechtssicher bleibt." },
  { icon: Database, title: "Datenstrategie & Infrastruktur", description: "Wir bringen Ihre Daten in Form: saubere Quellen, sichere Anbindung und eine Basis, auf der KI zuverlässig arbeitet." },
];

const maturity = [
  { level: 1, fill: 1, title: "Kein KI-Einsatz", desc: "Manuelle Prozesse, KI ist Thema, aber noch nicht im Einsatz. Hier setzt die Erstanalyse an." },
  { level: 2, fill: 2, title: "Erste Use Cases", desc: "Einzelne Tools laufen pilotweise, ohne übergreifende Strategie oder Messung." },
  { level: 3, fill: 3, title: "Skalierte KI", desc: "Mehrere Prozesse sind automatisiert, Ergebnisse werden gemessen und gesteuert." },
  { level: 4, fill: 4, title: "KI-natives Unternehmen", desc: "KI ist fester Teil der Wertschöpfung, mit Governance, MLOps und laufender Optimierung." },
];

const bigComparison = [
  { feature: "Vendor-Lock-in", internal: "Abhängig vom internen Know-how", freelancer: "Oft auf einzelne Tools spezialisiert", big: "Häufig an Partner-Ökosysteme gebunden", kanzlei: "Anbieterunabhängig, Open Source first" },
  { feature: "Umsetzung", internal: "Vorhanden, aber durch Tagesgeschäft ausgelastet", freelancer: "Punktuell, abhängig von einer Person", big: "Strategie stark, Umsetzung oft ausgelagert", kanzlei: "Strategie und Umsetzung aus einer Hand" },
  { feature: "Time-to-Result", internal: "Konkurriert mit dem Tagesgeschäft", freelancer: "Variabel je nach Auslastung", big: "Oft mehrere Monate Vorlauf", kanzlei: "Messbarer Pilot in 2 bis 4 Wochen" },
  { feature: "Kosten-Transparenz", internal: "Schwer zuzuordnen", freelancer: "Tagessätze, projektabhängig", big: "Hohe Tagessätze, lange Laufzeiten", kanzlei: "Klar kalkuliert, kostenlose Erstanalyse" },
  { feature: "DACH & DSGVO", internal: "Vorhanden, ohne KI-Spezialisierung", freelancer: "Unterschiedlich", big: "Häufig international standardisiert", kanzlei: "Österreichisch, DSGVO- und EU-AI-Act-geprüft" },
  { feature: "Datenhaltung", internal: "Je nach IT-Setup", freelancer: "Oft US-Cloud-Tools", big: "Globale Rechenzentren", kanzlei: "EU- und Österreich-Hosting" },
];

const industries = [
  { value: "kmu", label: "KMU", icon: Briefcase, head: "KMU & Mittelstand", text: "KI-Einstieg ohne eigene IT-Abteilung. Wir führen Sie Schritt für Schritt in die KI-Welt ein, starten mit einem klaren Quick-Win und bauen von dort planbar aus, statt mit einem Großprojekt zu überfordern." },
  { value: "legal", label: "Kanzleien", icon: Scale, head: "Rechtsanwälte & Steuerberater", text: "Kanzlei-Automatisierung und DSGVO-konforme KI für Berufsgeheimnisträger: Mandantenkommunikation, Dokumentenanalyse und Fristenmanagement, ohne dass sensible Daten das Haus verlassen." },
  { value: "health", label: "Gesundheit", icon: Stethoscope, head: "Ärzte & Gesundheitswesen", text: "KI-gestützte Dokumentation, Terminverwaltung und Patientenkommunikation entlasten die Rezeption und schaffen wieder Zeit für die eigentliche Versorgung." },
  { value: "hotel", label: "Hotellerie", icon: Hotel, head: "Hotels & Gastronomie", text: "KI-Rezeptionisten, Buchungsautomatisierung und Gästekommunikation rund um die Uhr, gerade in den Abendstunden, wenn das Team ausgelastet ist." },
  { value: "retail", label: "E-Commerce", icon: ShoppingCart, head: "E-Commerce & Retail", text: "Kundenservice-Automatisierung, Personalisierung und Bestandsoptimierung. KI beantwortet Routineanfragen sofort und gibt dem Team Zeit für komplexe Fälle." },
  { value: "industry", label: "Industrie", icon: Factory, head: "Industrie & Produktion", text: "Predictive Maintenance, Qualitätskontrolle und Lieferkettenoptimierung mit KI, damit Stillstände früh erkannt und Ausschuss reduziert werden." },
];

const toolbox = [
  { icon: Bot, name: "AI Agents & Agentic AI", desc: "Autonome Agenten, die mehrstufige Aufgaben planen und end-to-end erledigen, statt nur zu antworten." },
  { icon: Brain, name: "RAG & Wissensdatenbanken", desc: "Ihr Firmenwissen wird durchsuchbar und beantwortet Fragen mit Quellenangabe, DSGVO-konform per Retrieval Augmented Generation." },
  { icon: Workflow, name: "Workflow-Automatisierung", desc: "n8n und Make verbinden Ihre Tools, sodass Daten und Aufgaben ohne manuelle Übergaben fließen." },
  { icon: Phone, name: "Voicebots & Telefon-KI", desc: "KI-Telefonassistenten nehmen Anrufe an, buchen Termine und qualifizieren Anfragen rund um die Uhr." },
  { icon: Cpu, name: "MLOps & eigene Modelle", desc: "Wo Standardtools nicht reichen, betreiben wir eigene Modelle stabil, versioniert und überwacht." },
  { icon: Gauge, name: "Governance & Monitoring", desc: "Dashboards, Kostenkontrolle und EU-AI-Act-Dokumentation halten Ihren KI-Betrieb transparent und sicher." },
];

const steps = [
  { step: "01", icon: Phone, title: "Kostenlose Erstanalyse", time: "30 Minuten", desc: "Wir lernen Ihr Unternehmen kennen: Branche, Prozesse, aktuelle Herausforderungen und KI-Vorkenntnisse. Ohne Verpflichtung und ohne Verkaufsdruck, nur echtes Interesse an Ihrer Situation." },
  { step: "02", icon: Search, title: "KI Assessment Center", time: "Analyse & Roadmap", desc: "Wir analysieren alle Prozesse systematisch, identifizieren die drei bis fünf Anwendungsfälle mit dem höchsten ROI und erstellen einen priorisierten Fahrplan mit Kosten, Zeitplan und erwarteten Einsparungen." },
  { step: "03", icon: Rocket, title: "Pilot-Implementierung", time: "2 bis 4 Wochen", desc: "Statt endloser Konzeptphasen starten wir mit einem konkreten Piloten: Wir implementieren die erste Lösung, messen den ROI in der Praxis und zeigen Ihrem Team greifbare Ergebnisse." },
  { step: "04", icon: TrendingUp, title: "Skalierung & Begleitung", time: "laufend", desc: "Nach dem erfolgreichen Pilot skalieren wir die Lösung und implementieren weitere Use Cases aus dem Fahrplan. Regelmäßige Reviews stellen sicher, dass die Investition sich laufend verbessert." },
];

const usps = [
  { icon: Layers, badge: "End-to-End", title: "Wir implementieren selbst", desc: "Keine reinen Strategieberater: Unser Team setzt die empfohlenen Lösungen selbst um, von AI Agents bis MLOps. Eine Quelle, volle Verantwortung." },
  { icon: Unlock, badge: "Unabhängig", title: "Anbieterunabhängig", desc: "Wir erhalten keine Provisionen von KI-Anbietern und empfehlen nur, was wirklich passt. Open Source first, damit Sie kein Vendor Lock-in riskieren." },
  { icon: Shield, badge: "Lokal & vertraut", title: "Österreich & DSGVO-first", desc: "Als österreichisches Unternehmen kennen wir DSGVO, Berufsrecht und die Anforderungen von KMU im DACH-Raum aus erster Hand." },
  { icon: LineChart, badge: "Messbar", title: "ROI statt Buzzwords", desc: "Wir definieren von Anfang an klare KPIs und machen den Effekt jeder KI-Investition nachvollziehbar sichtbar." },
];

const related = [
  { href: "/agentic-ai", icon: Bot, tag: "Automatisierung", title: "Agentic AI & AI Agents", desc: "Autonome KI-Agenten, die direkt nach der Strategiephase implementiert werden." },
  { href: "/n8n-automatisierung", icon: Workflow, tag: "Workflow", title: "n8n Automatisierung", desc: "Workflow-Automatisierung als häufiges Ergebnis eines KI Consulting Projekts." },
  { href: "/ki-schulung", icon: GraduationCap, tag: "Training", title: "KI Schulung", desc: "Bringen Sie Ihr Team auf den neuen KI-Stand, parallel zur Implementierung." },
];

const glanceData: [string, string][] = [
  ["Ergebnis", "priorisierte KI-Roadmap"],
  ["Erstanalyse", "kostenlos, 30 Minuten"],
  ["Pilot", "in 2 bis 4 Wochen"],
  ["Ansatz", "Strategie und Umsetzung aus einer Hand"],
  ["Datenschutz", "DSGVO, EU-Hosting, EU AI Act"],
  ["Markt", "DACH-Raum (AT, DE, CH)"],
];

export default function Page() {
  return (
    <>
      <Script id="faq-ki-consulting" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-ki-consulting" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO: 4-Phasen-Roadmap */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                    KI Consulting, Unabhängige KI Beratung
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-primary">KI Consulting</span>, das nicht bei der Strategie aufhört
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Wir entwickeln Ihre KI-Strategie, identifizieren die besten Anwendungsfälle und implementieren messbare KI-Lösungen. Anbieterunabhängig, DSGVO-konform und mit einem Piloten, der sich in Wochen statt Monaten beweist.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Erstgespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#leistungen">Leistungen ansehen</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Unlock className="w-4 h-4 text-primary" /> Anbieterunabhängig</span>
                    <span className="flex items-center gap-1.5"><Layers className="w-4 h-4 text-primary" /> Strategie & Umsetzung</span>
                  </div>
                </div>

                {/* Roadmap-Visual */}
                <Card className="relative border-2 shadow-xl shadow-primary/5 overflow-hidden">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-primary tracking-wide">KI ROADMAP</div>
                        <CardTitle className="text-xl">Von der Analyse zum ROI</CardTitle>
                      </div>
                      <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20 text-xs shrink-0">4 Phasen</Badge>
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
                                <span className="text-xs font-bold text-primary">PHASE {step}</span>
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
                      <span className="text-sm text-primary font-semibold">messbarer ROI in rund 30 Tagen</span>
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was ist KI Consulting?</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      <strong className="text-foreground">KI Consulting</strong> (auch AI Consulting) ist die professionelle Begleitung von Unternehmen auf dem Weg zur KI-gestützten Organisation. Ein KI Consultant analysiert Ihre aktuellen Prozesse, identifiziert Automatisierungspotenziale und entwickelt eine konkrete <strong className="text-foreground">KI-Strategie</strong>, von der ersten Idee bis zum produktiven KI-System im Alltag.
                    </p>
                    <p>
                      Gutes KI Consulting ist <strong className="text-foreground">anbieterunabhängig</strong>. Wir binden uns nicht an einen Hersteller, sondern wählen die beste Lösung für Ihren Anwendungsfall, ob AI Agent, KI Chatbot, Wissensdatenbank oder Workflow-Automatisierung mit n8n oder Make.
                    </p>
                    <p>
                      Entscheidend ist der Unterschied zwischen Beratung und Umsetzung. Viele Häuser liefern Strategiefolien und ziehen sich dann zurück. Wir bleiben dabei, bis aus dem Fahrplan ein laufendes System geworden ist, das nachweisbar Zeit und Kosten spart.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">KI Strategie</Badge>
                    <Badge variant="secondary" className="rounded-full">KI Transformation</Badge>
                    <Badge variant="secondary" className="rounded-full">KI Implementierung</Badge>
                    <Badge variant="secondary" className="rounded-full">AI Consulting</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">KI Consulting auf einen Blick</CardTitle>
                    <CardDescription>Was ein Projekt mit der KI Kanzlei ausmacht.</CardDescription>
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
            caption="Herstellerneutral, wir empfehlen die passenden Tools"
            items={[
              { slug: "openai", name: "OpenAI" },
              { slug: "anthropic", name: "Anthropic" },
              { slug: "mistralai", name: "Mistral AI" },
              { slug: "n8n", name: "n8n" },
              { slug: "huggingface", name: "Hugging Face" },
              { slug: "ollama", name: "Ollama" },
            ]}
          />

          {/* LEISTUNGEN: BENTO */}
          <section id="leistungen" className="py-14 md:py-20 scroll-mt-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Unsere KI Consulting Leistungen</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Von der KI-Strategie bis zur fertigen Implementierung, alles aus einer Hand.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">KI Consulting für Ihre Branche</h2>
                <p className="text-lg text-muted-foreground">Wählen Sie Ihren Bereich, wir zeigen, wo KI bei Ihnen den größten Hebel hat.</p>
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

          {/* KI-REIFEGRAD: clean Diagramm via divs */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Standortbestimmung</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Wo steht Ihr Unternehmen?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Jedes KI Consulting beginnt mit einer ehrlichen Einordnung. Unser Reifegradmodell zeigt, welcher nächste Schritt für Sie realistisch ist.</p>
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

          {/* GROSSE VERGLEICHS-TABLE */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Beratungsmodelle im Vergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">KI Kanzlei vs. interne Teams, Freelancer & große Häuser</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Vier Wege, KI ins Unternehmen zu holen, mit sehr unterschiedlichen Stärken. Worauf es bei der Wahl wirklich ankommt.</p>
              </div>
              <Card className="border-2 overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[18%] font-bold text-foreground">Kriterium</TableHead>
                      <TableHead className="text-muted-foreground">Interne Teams</TableHead>
                      <TableHead className="text-muted-foreground">Freelancer</TableHead>
                      <TableHead className="text-muted-foreground">Große Häuser</TableHead>
                      <TableHead className="text-primary font-bold">KI Kanzlei</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bigComparison.map((r, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{r.feature}</TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          <span className="inline-flex items-start gap-1.5"><X className="w-3.5 h-3.5 text-muted-foreground/60 mt-0.5 shrink-0" />{r.internal}</span>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          <span className="inline-flex items-start gap-1.5"><X className="w-3.5 h-3.5 text-muted-foreground/60 mt-0.5 shrink-0" />{r.freelancer}</span>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          <span className="inline-flex items-start gap-1.5"><X className="w-3.5 h-3.5 text-muted-foreground/60 mt-0.5 shrink-0" />{r.big}</span>
                        </TableCell>
                        <TableCell className="text-sm text-primary font-medium">
                          <span className="inline-flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />{r.kanzlei}</span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </section>

          {/* WERKZEUGE / TECH */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Werkzeuge</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Womit wir KI in Ihrem Betrieb umsetzen</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Wir sind nicht auf ein einziges Tool festgelegt. Aus diesem Baukasten wählen wir, was zu Ihrem Use Case und Budget passt.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {toolbox.map((t, i) => {
                  const Icon = t.icon;
                  return (
                    <Card key={i} className="hover-lift border-2">
                      <CardHeader className="pb-3">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                          <Icon className="w-5 h-5 text-primary" />
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Unser KI Consulting Prozess im Detail</h2>
                <p className="text-lg text-muted-foreground">Kein Buzzword-Bingo, sondern vier klar definierte Schritte mit konkreten Ergebnissen.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold">Was uns als KI Berater besonders macht</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQ: KI Consulting & AI Consulting</h2>
                <p className="text-lg text-muted-foreground">Die Fragen, die wir vor fast jedem Projekt hören, ehrlich beantwortet.</p>
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
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Umsetzung</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Womit wir Ihr KI Consulting umsetzen</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Strategie ist erst der Anfang. Das sind die Services, mit denen aus dem Fahrplan ein produktives KI-System wird.</p>
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
                              {serviceLogos[s.href] ? (
                                <img src={`/img/logos/${serviceLogos[s.href]}.svg`} alt={s.title} className="w-7 h-7 object-contain" />
                              ) : (
                                <Icon className="w-6 h-6 text-primary transition-colors group-hover:text-white" />
                              )}
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
