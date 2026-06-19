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
  Shield,
  Database,
  Workflow,
  Bot,
  Layers,
  Unlock,
  Plug,
  Server,
  RefreshCw,
  Receipt,
  Truck,
  Package,
  FileText,
  Lock,
  ArrowRightLeft,
  BookOpen,
  ClipboardCheck,
  Network,
  Map,
  Briefcase,
  Factory,
  Building2,
  ShoppingCart,
  Gauge,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SAP mit KI & SAP-Integration",
  description:
    "SAP mit KI und Automatisierung verbinden, ohne SAP-Kernumbau. Wir binden SAP per n8n, RPA und APIs an, machen Ihre SAP-Daten nutzbar, automatisieren Belege, Bestellungen und Stammdaten und bauen RAG über SAP-Daten. DSGVO-konform, EU-Hosting, für den Mittelstand.",
  keywords:
    "SAP KI, SAP Integration, SAP Automatisierung, SAP n8n, SAP RPA, SAP Schnittstelle, SAP Daten KI, ERP Automatisierung, SAP Integration Deutschland, SAP KI Schweiz, SAP Automatisierung DACH, ERP KI DACH, Deutschland, Schweiz, DACH",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/sap-integration" },
};

const faqs = [
  {
    q: "Kann man SAP mit KI verbinden, ohne das SAP-System umzubauen?",
    a: "Ja. Genau das ist unser Ansatz. Wir greifen über bestehende Schnittstellen auf SAP zu, etwa OData, BAPI, RFC, IDoc oder die SAP-APIs, und legen Automatisierung und KI als zusätzliche Schicht obendrauf. Ihr SAP-Kern bleibt unangetastet, es gibt keinen riskanten Umbau und kein verlorenes Customizing. Wo eine offizielle Schnittstelle fehlt, ergänzen wir RPA, das SAP genau so bedient wie ein Mensch.",
  },
  {
    q: "Welche SAP-Versionen werden unterstützt?",
    a: "Wir arbeiten sowohl mit SAP S/4HANA und SAP Business One als auch mit älteren ECC-Systemen. Entscheidend ist nicht die Versionsnummer, sondern welche Schnittstellen verfügbar sind. Moderne Systeme bieten saubere OData- und API-Zugänge, bei älteren Installationen nutzen wir RFC, BAPI, IDoc oder im Zweifel RPA. So binden wir auch gewachsene Landschaften an, ohne ein Upgrade zur Voraussetzung zu machen.",
  },
  {
    q: "Wie werden Belege und Rechnungen aus oder in SAP automatisiert?",
    a: "Eingehende Belege wie Lieferantenrechnungen werden per KI ausgelesen, die Felder wie Betrag, Steuer, Bestellbezug und Lieferant erkannt und gegen die SAP-Bestellung geprüft. Passt alles, bucht der Workflow den Beleg automatisch im richtigen Format nach SAP. Bei Abweichungen geht der Fall mit einer klaren Begründung an einen Mitarbeiter. So sinkt der manuelle Erfassungsaufwand deutlich, bei voller Nachvollziehbarkeit.",
  },
  {
    q: "Was bedeutet RAG über SAP-Daten?",
    a: "RAG steht für Retrieval Augmented Generation. Wir machen ausgewählte SAP-Inhalte, etwa Stammdaten, Aufträge, Bestände oder Belege, für eine KI durchsuchbar. Mitarbeiter können dann in natürlicher Sprache fragen, etwa nach dem Lieferstatus eines Auftrags oder den Konditionen eines Kunden, und erhalten eine Antwort mit Quellenbezug. Die KI erfindet nichts, sondern antwortet auf Basis Ihrer echten SAP-Daten, rechtebasiert und DSGVO-konform.",
  },
  {
    q: "Ist eine SAP-Anbindung mit KI DSGVO-konform?",
    a: "Ja. Datenschutz ist bei uns Ausgangspunkt, nicht Nachgedanke. Wir hosten in Österreich und der EU, schließen einen Auftragsverarbeitungsvertrag und übertragen nur die Daten, die ein Anwendungsfall wirklich braucht. Berechtigungen aus SAP werden respektiert, sensible Felder lassen sich maskieren, und auf Wunsch laufen Modelle vollständig in der EU oder lokal. So bleibt die Anbindung rechtssicher und auditierbar.",
  },
  {
    q: "Wie lange dauert ein erstes SAP-KI-Projekt?",
    a: "Schneller als die meisten erwarten. Nach der kostenlosen Erstanalyse und einem kurzen Assessment starten wir mit einem klar abgegrenzten Anwendungsfall, etwa der automatischen Belegerfassung oder einem Stammdaten-Abgleich. Ein erster produktiver Pilot ist in der Regel in zwei bis vier Wochen messbar. Von dort skalieren wir auf weitere Prozesse, statt mit einem Großprojekt zu beginnen.",
  },
  {
    q: "Brauchen wir dafür eine eigene SAP-Beratung oder ABAP-Entwickler?",
    a: "In den meisten Fällen nicht. Wir arbeiten bewusst außerhalb des SAP-Kerns und kommen mit den vorhandenen Schnittstellen aus, ohne ABAP-Eingriffe oder neues Customizing. Falls Ihr Haus eine SAP-Betreuung oder einen Basis-Administrator hat, stimmen wir uns eng ab, etwa für Berechtigungen und Zugänge. Eigene Entwicklerkapazitäten sind aber keine Voraussetzung für den Start.",
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
  name: "SAP-Integration & SAP mit KI",
  serviceType: "SAP Automatisierung & KI-Anbindung",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "SAP per n8n, RPA und APIs an KI und Automatisierung anbinden, ohne SAP-Kernumbau. Belege, Bestellungen und Stammdaten automatisieren, SAP-Daten nutzbar machen und RAG über SAP-Daten aufbauen, DSGVO-konform mit EU-Hosting.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const heroPhases = [
  { icon: Search, step: "01", label: "Erstanalyse", time: "30 Min., kostenlos", desc: "SAP-Landschaft, Schnittstellen und Engpässe im Tagesgeschäft verstehen." },
  { icon: Map, step: "02", label: "Assessment & Schnittstellen-Check", time: "Woche 1 bis 2", desc: "Verfügbare APIs prüfen, Anwendungsfälle priorisieren, ROI kalkulieren." },
  { icon: Rocket, step: "03", label: "Pilot ohne Kernumbau", time: "Woche 2 bis 4", desc: "Ein erster Prozess produktiv an SAP angebunden und messbar gemacht." },
  { icon: TrendingUp, step: "04", label: "Skalierung & Betrieb", time: "laufend", desc: "Weitere Prozesse anbinden, überwachen und kontinuierlich optimieren." },
];

const stats = [
  { value: "0", label: "Eingriffe in den SAP-Kern nötig" },
  { value: "70%", label: "weniger manuelle Belegerfassung im Schnitt" },
  { value: "2 bis 4", label: "Wochen bis zum ersten Live-Prozess" },
  { value: "100%", label: "Daten in Österreich und der EU" },
];

const services = [
  { icon: Plug, title: "SAP-Anbindung per API", description: "Wir verbinden SAP über OData, BAPI, RFC und IDoc mit Ihren übrigen Tools und mit KI. Saubere Schnittstellen statt fragiler Workarounds, damit Daten zuverlässig in beide Richtungen fließen." },
  { icon: Workflow, title: "Workflow-Automatisierung mit n8n", description: "Mit n8n bauen wir Workflows, die SAP, Mailpostfächer, Dokumente und KI verbinden. Belege, Freigaben und Statusmeldungen laufen automatisch, ohne manuelle Übergaben zwischen Systemen." },
  { icon: Bot, title: "SAP-RPA für Systeme ohne API", description: "Wo keine Schnittstelle existiert, bedient ein Software-Roboter SAP genau wie ein Mensch: einloggen, Transaktion öffnen, Felder füllen, buchen. So automatisieren wir auch ältere Masken sicher." },
  { icon: Receipt, title: "Beleg- & Rechnungsautomatisierung", description: "Eingehende Rechnungen werden per KI ausgelesen, gegen die Bestellung geprüft und nach SAP gebucht. Abweichungen gehen mit Begründung zur Prüfung an einen Mitarbeiter." },
  { icon: Database, title: "Stammdaten-Pflege & Abgleich", description: "Kunden-, Lieferanten- und Materialstammdaten werden automatisch angelegt, abgeglichen und auf Dubletten geprüft, damit Ihre SAP-Daten sauber und konsistent bleiben." },
  { icon: BookOpen, title: "RAG über SAP-Daten", description: "Wir machen ausgewählte SAP-Inhalte für eine KI durchsuchbar. Mitarbeiter fragen in natürlicher Sprache nach Aufträgen, Beständen oder Konditionen und erhalten Antworten mit Quellenbezug." },
];

const useCases = [
  { icon: Receipt, title: "Eingangsrechnungen verarbeiten", desc: "Rechnung per KI auslesen, gegen SAP-Bestellung und Wareneingang abgleichen, bei Treffer automatisch buchen, sonst zur Freigabe routen." },
  { icon: Package, title: "Bestellungen automatisieren", desc: "Bestellanforderungen aus Mail oder Formular erfassen, in SAP anlegen und Bestellbestätigungen automatisch zuordnen und nachverfolgen." },
  { icon: Database, title: "Stammdaten synchron halten", desc: "Neue Kunden und Lieferanten aus CRM oder Webformular ins SAP übertragen, Dubletten erkennen und Änderungen zwischen Systemen abgleichen." },
  { icon: Truck, title: "Auftrags- & Lieferstatus", desc: "Status aus SAP automatisch an Kunden, Vertrieb oder Portal melden, statt dass jemand manuell nachschaut und Mails schreibt." },
  { icon: FileText, title: "Reports & Auswertungen", desc: "Wiederkehrende Auswertungen aus SAP ziehen, aufbereiten und automatisch an die richtigen Empfänger oder Dashboards verteilen." },
  { icon: BookOpen, title: "Wissensassistent auf SAP-Daten", desc: "Ein KI-Assistent beantwortet Fragen zu Aufträgen, Artikeln und Konditionen direkt aus den SAP-Daten, rechtebasiert und mit Quelle." },
];

const connectMethods = [
  { value: "api", label: "API & OData", icon: Plug, head: "Standard-Schnittstellen", text: "Der sauberste Weg: Wir nutzen die offiziellen SAP-Schnittstellen wie OData, BAPI, RFC und IDoc. Daten fließen strukturiert und in Echtzeit in beide Richtungen, mit klaren Verträgen und stabilem Verhalten bei Updates." },
  { value: "n8n", label: "n8n Workflows", icon: Workflow, head: "Orchestrierung mit n8n", text: "n8n verbindet SAP mit Mailpostfächern, Dokumenten, Datenbanken und KI-Modellen. Hier liegt die Logik: prüfen, anreichern, entscheiden, weiterleiten. Self-hosted in der EU, damit keine Daten unkontrolliert abfließen." },
  { value: "rpa", label: "RPA", icon: Bot, head: "RPA für Systeme ohne API", text: "Wenn keine Schnittstelle verfügbar ist, automatisiert ein Software-Roboter die SAP-Oberfläche direkt: einloggen, Transaktion starten, Felder füllen, buchen. Ideal für ältere Masken und Spezialfälle ohne Eingriff in den Kern." },
  { value: "rag", label: "RAG & KI", icon: BookOpen, head: "KI & RAG-Schicht", text: "Auf den angebundenen Daten setzt die KI auf: Belege auslesen, Texte verstehen, Antworten aus SAP-Daten generieren. Per RAG bleibt die KI an Ihren echten Daten verankert und erfindet keine Werte." },
];

const comparison = [
  { feature: "Eingriff ins SAP-System", custom: "Tiefes Customizing und ABAP-Entwicklung nötig", classic: "Oft neues Modul oder Add-on im Kern", kanzlei: "Kein Kernumbau, Anbindung als Schicht obendrauf" },
  { feature: "Projektdauer", custom: "Viele Monate bis Jahre", classic: "Lange Einführungsphasen", kanzlei: "Erster Live-Prozess in 2 bis 4 Wochen" },
  { feature: "Systeme ohne API", custom: "Aufwendige Eigenentwicklung", classic: "Häufig nicht abgedeckt", kanzlei: "RPA bedient die Oberfläche wie ein Mensch" },
  { feature: "KI-Funktionen", custom: "Selten enthalten", classic: "Abhängig von der Hersteller-Roadmap", kanzlei: "Beleg-KI, RAG und Assistenten von Anfang an" },
  { feature: "Datenhaltung", custom: "Je nach Setup", classic: "Oft Hersteller-Cloud", kanzlei: "Österreich- und EU-Hosting, DSGVO-konform" },
  { feature: "Abhängigkeit", custom: "Bindung an einen Dienstleister", classic: "Bindung an ein Produkt-Ökosystem", kanzlei: "Anbieterunabhängig, Open Source first" },
];

const industries = [
  { value: "mittelstand", label: "Mittelstand", icon: Briefcase, head: "Mittelstand & KMU", text: "SAP läuft, aber rundherum wird viel manuell gemacht. Wir setzen genau dort an: ein erster automatisierter Prozess mit klarem Nutzen, dann planbar ausgebaut, ohne eigenes Großprojekt und ohne SAP-Kernumbau." },
  { value: "produktion", label: "Produktion", icon: Factory, head: "Industrie & Produktion", text: "Bestellungen, Wareneingänge und Stammdaten fließen automatisch zwischen Shopfloor, Vorsystemen und SAP. KI prüft Belege, meldet Abweichungen früh und hält Materialstammdaten konsistent." },
  { value: "handel", label: "Handel", icon: ShoppingCart, head: "Handel & E-Commerce", text: "Aufträge aus Shop und Marktplatz landen automatisch in SAP, Bestände und Lieferstatus werden zurückgespielt. Kundenanfragen zum Auftragsstatus beantwortet ein Assistent direkt aus den SAP-Daten." },
  { value: "dienstleistung", label: "Dienstleistung", icon: Building2, head: "Dienstleister & Verwaltung", text: "Eingangsrechnungen, Freigaben und Reportings rund um SAP werden automatisiert. Mitarbeiter fragen Auftrags- und Kundeninformationen in natürlicher Sprache ab, statt durch Transaktionen zu klicken." },
];

const toolbox: { icon: any; name: string; desc: string; logo?: string }[] = [
  { icon: Plug, name: "OData, BAPI, RFC & IDoc", desc: "Die offiziellen SAP-Schnittstellen für strukturierten, stabilen Datenaustausch in beide Richtungen." },
  { icon: Workflow, logo: "n8n", name: "n8n", desc: "Workflow-Orchestrierung, die SAP mit Mail, Dokumenten, Datenbanken und KI verbindet, self-hosted in der EU. SAP nutzt n8n inzwischen selbst in Joule Studio." },
  { icon: Bot, name: "RPA-Roboter", desc: "Automatisierte Bedienung der SAP-Oberfläche, wenn keine API existiert, sicher und nachvollziehbar protokolliert." },
  { icon: BookOpen, name: "RAG & Vektor-Datenbank", desc: "SAP-Inhalte werden durchsuchbar, damit KI mit Quellenbezug auf Ihren echten Daten antwortet." },
  { icon: Server, name: "EU- & lokales Hosting", desc: "Modelle und Workflows laufen in Österreich, der EU oder vollständig lokal, je nach Schutzbedarf." },
  { icon: Gauge, name: "Monitoring & Protokoll", desc: "Jeder Lauf wird überwacht und protokolliert, mit Alerting bei Fehlern und klarer Nachvollziehbarkeit." },
];

const steps = [
  { step: "01", icon: Phone, title: "Kostenlose Erstanalyse", time: "30 Minuten", desc: "Wir verstehen Ihre SAP-Landschaft, die manuellen Engpässe drumherum und Ihre Ziele. Ohne Verpflichtung und ohne Verkaufsdruck." },
  { step: "02", icon: Search, title: "Assessment & Schnittstellen-Check", time: "Woche 1 bis 2", desc: "Wir prüfen, welche Schnittstellen verfügbar sind, priorisieren die Anwendungsfälle mit dem höchsten Hebel und kalkulieren den ROI." },
  { step: "03", icon: Rocket, title: "Pilot ohne Kernumbau", time: "2 bis 4 Wochen", desc: "Wir binden einen ersten Prozess produktiv an SAP an, messen den Effekt in der Praxis und zeigen greifbare Ergebnisse, ohne das System umzubauen." },
  { step: "04", icon: TrendingUp, title: "Skalierung & Betrieb", time: "laufend", desc: "Wir binden weitere Prozesse an, überwachen den Betrieb und optimieren kontinuierlich. Auf Wunsch übernehmen wir die laufende Betreuung." },
];

const usps = [
  { icon: Layers, badge: "Ohne Risiko", title: "Kein SAP-Kernumbau", desc: "Wir setzen Automatisierung und KI als Schicht auf SAP, statt in den Kern einzugreifen. Kein verlorenes Customizing, kein riskantes Großprojekt." },
  { icon: Unlock, badge: "Unabhängig", title: "Anbieterunabhängig", desc: "Open Source first und keine Provisionen von Herstellern. Wir wählen die Anbindung, die zu Ihrer Landschaft passt, nicht zu einem Vertriebsziel." },
  { icon: Shield, badge: "DSGVO-first", title: "Österreich & EU-Hosting", desc: "Daten bleiben in Österreich und der EU, mit Auftragsverarbeitungsvertrag, Berechtigungen aus SAP und auf Wunsch lokalen Modellen." },
  { icon: ArrowRightLeft, badge: "End-to-End", title: "Beratung und Umsetzung", desc: "Wir liefern nicht nur Konzepte, sondern bauen die Anbindung selbst und betreiben sie stabil, von der API bis zur KI-Schicht." },
];

const related = [
  { href: "/leistungen/n8n-automatisierung", icon: Workflow, tag: "Workflow", title: "n8n Automatisierung", desc: "Die Orchestrierungs-Ebene, die SAP mit Ihren übrigen Tools und mit KI verbindet." },
  { href: "/leistungen/rpa", icon: Bot, tag: "Automatisierung", title: "RPA", desc: "Software-Roboter automatisieren SAP-Masken auch dort, wo keine Schnittstelle existiert." },
  { href: "/leistungen/ki-wissensdatenbank", icon: BookOpen, tag: "RAG", title: "KI Wissensdatenbank", desc: "RAG macht Ihre SAP-Daten und Dokumente per KI durchsuchbar, mit Quellenangabe." },
];

const glanceData: [string, string][] = [
  ["Ansatz", "Anbindung ohne SAP-Kernumbau"],
  ["Methoden", "API, n8n, RPA und RAG"],
  ["Erstanalyse", "kostenlos, 30 Minuten"],
  ["Pilot", "erster Prozess in 2 bis 4 Wochen"],
  ["Datenschutz", "DSGVO, EU- und Österreich-Hosting"],
  ["Markt", "DACH-Raum (AT, DE, CH)"],
];

const principles = [
  { icon: Lock, title: "Nur nötige Daten", desc: "Wir übertragen ausschließlich die Felder, die ein Anwendungsfall wirklich braucht, sensible Inhalte lassen sich maskieren." },
  { icon: ClipboardCheck, title: "Berechtigungen aus SAP", desc: "Die KI-Schicht respektiert die SAP-Berechtigungen, niemand sieht über den Assistenten mehr als im System selbst." },
  { icon: Network, title: "EU- und lokales Hosting", desc: "Workflows und Modelle laufen in der EU oder vollständig lokal, ohne unkontrollierten Abfluss in Drittländer." },
  { icon: RefreshCw, title: "Auditierbar protokolliert", desc: "Jeder automatische Schritt wird protokolliert, damit Buchungen und KI-Entscheidungen nachvollziehbar bleiben." },
];

export default function Page() {
  return (
    <>
      <Script id="faq-sap-integration" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-sap-integration" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                    SAP-Integration, SAP mit KI für den Mittelstand
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-primary">SAP mit KI verbinden</span>, ohne SAP-Kernumbau
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Wir binden SAP per n8n, RPA und APIs an Automatisierung und KI an, machen Ihre SAP-Daten nutzbar und automatisieren Belege, Bestellungen und Stammdaten. Anbieterunabhängig, DSGVO-konform und ohne Eingriff in den SAP-Kern.
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
                    <span className="flex items-center gap-1.5"><Layers className="w-4 h-4 text-primary" /> Kein Kernumbau</span>
                    <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-primary" /> DSGVO & EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><Unlock className="w-4 h-4 text-primary" /> Anbieterunabhängig</span>
                  </div>
                </div>

                {/* Roadmap-Visual */}
                <Card className="relative border-2 shadow-xl shadow-primary/5 overflow-hidden">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-primary tracking-wide">SAP ANBINDUNG</div>
                        <CardTitle className="text-xl">Von der Analyse zum Live-Prozess</CardTitle>
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
                      <span className="text-sm text-primary font-semibold">SAP-Daten nutzbar, Prozesse automatisiert</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* DEFINITION */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Definition</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was bedeutet SAP-Integration mit KI?</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      <strong className="text-foreground">SAP-Integration mit KI</strong> bedeutet, Ihr SAP-System mit Automatisierung und künstlicher Intelligenz zu verbinden, ohne den SAP-Kern umzubauen. Wir greifen über bestehende Schnittstellen wie OData, BAPI, RFC und IDoc auf SAP zu und legen eine zusätzliche Schicht für Workflows und KI darüber.
                    </p>
                    <p>
                      So werden Ihre <strong className="text-foreground">SAP-Daten nutzbar</strong>: Belege, Bestellungen und Stammdaten lassen sich automatisieren, wiederkehrende Aufgaben laufen ohne manuelle Übergaben, und per RAG werden ausgewählte SAP-Inhalte für eine KI durchsuchbar. Fehlt eine offizielle Schnittstelle, ergänzen wir RPA, das SAP genau wie ein Mensch bedient.
                    </p>
                    <p>
                      Entscheidend ist der schonende Ansatz. Statt eines riskanten Großprojekts entsteht die Lösung als Aufsatz, der das laufende System unberührt lässt und sich Schritt für Schritt erweitern lässt, DSGVO-konform und mit Hosting in Österreich und der EU.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">SAP n8n</Badge>
                    <Badge variant="secondary" className="rounded-full">SAP RPA</Badge>
                    <Badge variant="secondary" className="rounded-full">SAP Schnittstelle</Badge>
                    <Badge variant="secondary" className="rounded-full">ERP Automatisierung</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">SAP-Integration auf einen Blick</CardTitle>
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

          {/* STATS */}
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
            caption="Wir binden SAP an die passenden KI- und Automatisierungs-Tools an"
            items={[
              { slug: "sap", name: "SAP" },
              { slug: "n8n", name: "n8n" },
              { slug: "openai", name: "OpenAI" },
              { slug: "anthropic", name: "Anthropic" },
              { slug: "ollama", name: "Ollama" },
            ]}
          />

          {/* LEISTUNGEN */}
          <section id="leistungen" className="py-14 md:py-20 scroll-mt-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Unsere SAP-Integration Leistungen</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Von der sauberen Anbindung über Automatisierung bis zur KI-Schicht auf Ihren SAP-Daten.</p>
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

          {/* ANWENDUNGSFAELLE */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Anwendungsfälle</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Was wir rund um SAP automatisieren</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Konkrete Prozesse, die sich schnell rechnen, ohne dass jemand SAP umbauen muss.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {useCases.map((u, i) => {
                  const Icon = u.icon;
                  return (
                    <Card key={i} className="hover-lift border-2">
                      <CardHeader className="pb-3">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{u.title}</CardTitle>
                      </CardHeader>
                      <CardContent><p className="text-muted-foreground leading-relaxed text-sm">{u.desc}</p></CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* WIE WIR ANBINDEN: TABS */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Methodik</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Wie wir SAP an KI anbinden</h2>
                <p className="text-lg text-muted-foreground">Vier Bausteine, die wir je nach Schnittstellen und Anwendungsfall kombinieren.</p>
              </div>
              <Tabs defaultValue="api" className="w-full">
                <TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">
                  {connectMethods.map((a) => {
                    const Icon = a.icon;
                    return (
                      <TabsTrigger key={a.value} value={a.value} className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border">
                        <Icon className="w-4 h-4 mr-1.5" />{a.label}
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
                {connectMethods.map((a) => (
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

          {/* VERGLEICH */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Wege im Vergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">SAP mit KI verbinden: drei Wege im Vergleich</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Eigenentwicklung im Kern, klassisches Add-on oder eine schlanke Anbindung obendrauf. Worauf es im Mittelstand wirklich ankommt.</p>
              </div>
              <Card className="border-2 overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[20%] font-bold text-foreground">Kriterium</TableHead>
                      <TableHead className="text-muted-foreground">Eigenentwicklung im Kern</TableHead>
                      <TableHead className="text-muted-foreground">Klassisches Add-on</TableHead>
                      <TableHead className="text-primary font-bold">KI Kanzlei</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparison.map((r, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{r.feature}</TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          <span className="inline-flex items-start gap-1.5"><X className="w-3.5 h-3.5 text-muted-foreground/60 mt-0.5 shrink-0" />{r.custom}</span>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          <span className="inline-flex items-start gap-1.5"><X className="w-3.5 h-3.5 text-muted-foreground/60 mt-0.5 shrink-0" />{r.classic}</span>
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

          {/* BRANCHEN: TABS */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Für jede Branche</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">SAP-Integration für Ihre Branche</h2>
                <p className="text-lg text-muted-foreground">Wo SAP läuft, lohnt sich eine schlanke KI-Anbindung. Ein paar typische Beispiele.</p>
              </div>
              <Tabs defaultValue="mittelstand" className="w-full">
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

          {/* WERKZEUGE */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Werkzeuge</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Womit wir SAP anbinden und automatisieren</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Aus diesem Baukasten wählen wir, was zu Ihren Schnittstellen, Ihrem Schutzbedarf und Ihrem Budget passt.</p>
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

          {/* DATENSCHUTZ-PRINZIPIEN */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Datenschutz & Sicherheit</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">SAP-Daten bleiben sicher und unter Kontrolle</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Datenschutz ist bei einer SAP-Anbindung kein Add-on, sondern Ausgangspunkt jeder Architektur.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {principles.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <Card key={i} className="hover-lift border-2">
                      <CardHeader className="pb-3">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">{p.title}</CardTitle>
                      </CardHeader>
                      <CardContent><p className="text-muted-foreground leading-relaxed text-sm">{p.desc}</p></CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* PROZESS */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="max-w-2xl mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Der Ablauf</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Unser Weg zur SAP-Anbindung</h2>
                <p className="text-lg text-muted-foreground">Vier klar definierte Schritte mit konkreten Ergebnissen, ohne Eingriff in den SAP-Kern.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold">Was unsere SAP-Anbindung besonders macht</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQ: SAP mit KI & SAP-Integration</h2>
                <p className="text-lg text-muted-foreground">Die Fragen, die wir vor fast jedem SAP-Projekt hören, ehrlich beantwortet.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Womit wir Ihre SAP-Anbindung umsetzen</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Diese Bausteine kombinieren wir, damit aus SAP-Daten automatisierte Prozesse und ein nutzbarer KI-Zugriff werden.</p>
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
