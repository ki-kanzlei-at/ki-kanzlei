import type { Metadata } from "next";
import { serviceLogos } from "@/lib/serviceLogos";
import Script from "next/script";
import { NavigationHome } from "@/components/NavigationHome";
import { WorkflowExamples } from "@/components/WorkflowExamples";
import { UserPlus as WfUserPlus, Receipt as WfReceipt, MessageSquare as WfMessage, ShoppingCart as WfCart, CalendarCheck as WfCal, FileSpreadsheet as WfSheet } from "lucide-react";
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
  Workflow,
  GitBranch,
  Bot,
  Mail,
  Database,
  Shield,
  ShieldCheck,
  Check,
  X,
  Layers,
  Code2,
  Settings2,
  TrendingUp,
  Rocket,
  Search,
  Phone,
  Server,
  MapPin,
  Lock,
  MessageSquare,
  Send,
  Users,
  Megaphone,
  Calculator,
  UserPlus,
  Cog,
  Boxes,
  Lightbulb,
  Clock,
  RefreshCw,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "n8n Automatisierung & Workflow-Automatisierung",
  description:
    "Professionelle n8n Workflow-Automatisierung für Unternehmen im DACH-Raum: self-hosted auf EU-Servern, DSGVO-konform, mit nativer KI-Integration und über 500 Konnektoren. Wir bauen, hosten und schulen.",
  keywords:
    "n8n, n8n workflow, n8n automatisierung, workflow automatisierung, prozessautomatisierung, n8n self hosted, n8n alternative, n8n zapier alternative, ki workflow, n8n hosting, workflow automation dsgvo, n8n agentur, n8n beratung, n8n make alternative, automatisierung dsgvo",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/n8n-automatisierung" },
};

const faqs = [
  {
    q: "Was ist n8n und wofür wird es eingesetzt?",
    a: "n8n (gesprochen nodemation) ist eine quelloffene Plattform für Workflow-Automatisierung. Auf einer visuellen Oberfläche verbinden Sie Anwendungen, APIs, Datenbanken und KI-Modelle zu durchgehenden Abläufen, ohne dafür eine eigene Software programmieren zu müssen. Jeder Schritt ist ein Node, der eine Aktion ausführt, von der Webhook-Auslösung über die KI-Analyse bis zum Eintrag im CRM. Unternehmen setzen n8n für E-Mail-Automatisierung, Datensynchronisation, Dokumentenverarbeitung, Reporting und KI-gestützte Prozesse ein. Weil n8n selbst gehostet werden kann, ist es im DACH-Raum die erste Wahl für alle, die Wert auf Datensouveränität legen.",
  },
  {
    q: "Was ist der Unterschied zwischen n8n und Zapier oder Make?",
    a: "Der entscheidende Unterschied liegt im Hosting und im Kostenmodell. Zapier und Make (früher Integromat) sind reine Cloud-Dienste, bei denen Ihre Daten über fremde Server laufen, meist in den USA. n8n ist Open Source und lässt sich vollständig selbst betreiben, auf Ihrer eigenen Infrastruktur oder auf dedizierten EU-Servern. Dadurch entstehen keine Gebühren pro einzelner Workflow-Ausführung, sondern planbare Fixkosten, und sämtliche Daten bleiben DSGVO-konform in Ihrer Hand. Zusätzlich bietet n8n echten Custom Code, eigene Nodes und eine native Anbindung von KI-Modellen.",
  },
  {
    q: "Was sind KI-Workflows mit n8n?",
    a: "KI-Workflows verbinden klassische Automatisierung mit großen Sprachmodellen. Ein Beispiel: n8n empfängt eine eingehende E-Mail, übergibt den Inhalt an ein KI-Modell, lässt die Anfrage kategorisieren und beantworten und speichert das Ergebnis im CRM. Ein anderes Beispiel: n8n liest täglich neue Dokumente ein, lässt sie per KI zusammenfassen, erzeugt Vektoren und legt alles in Ihrer Wissensdatenbank ab. Auch ganze AI Agents lassen sich mit n8n orchestrieren, also KI, die eigenständig Werkzeuge aufruft und mehrstufige Aufgaben löst. Jeder Schritt bleibt dabei sichtbar, protokolliert und nachvollziehbar.",
  },
  {
    q: "Kann n8n DSGVO-konform betrieben werden?",
    a: "Ja, und das ist einer der wichtigsten Gründe, warum Unternehmen im DACH-Raum n8n bevorzugen. n8n kann vollständig self-hosted laufen, auf Ihren eigenen Servern in Österreich, Deutschland oder der Schweiz oder auf dedizierten EU-Cloud-Servern. Damit verlässt kein einziger Datensatz Ihre Infrastruktur, und kein US-Anbieter erhält Zugriff auf Ihre Prozesse. Wir richten n8n mit DSGVO-konformer Konfiguration ein, sichern Zugänge mit Verschlüsselung und Rollenrechten ab und schließen einen Auftragsverarbeitungsvertrag (AVV) mit Ihnen ab.",
  },
  {
    q: "Wie lange dauert eine n8n-Implementierung?",
    a: "Das hängt von der Komplexität ab. Ein einzelner, klar umrissener Workflow, etwa das automatische Kategorisieren und Weiterleiten von Kundenanfragen, ist in ein bis zwei Wochen produktiv. Umfangreichere Systeme mit mehreren angebundenen Tools, KI-Komponenten, Fehlerbehandlung und Monitoring brauchen vier bis acht Wochen. Bewährt hat sich der Start mit einem konkreten Use Case, der schnell sichtbar Wirkung zeigt, und der anschließende schrittweise Ausbau.",
  },
  {
    q: "Was kostet eine professionelle n8n-Implementierung?",
    a: "n8n selbst ist als Open-Source-Software kostenlos. Es fallen lediglich Kosten für das Hosting an, also für einen EU-Server, sowie der einmalige Aufwand für Konzeption und Umsetzung. Ein einfacher Workflow mit drei bis fünf Schritten ist deutlich günstiger als ein KI-gestütztes System mit zehn verbundenen Anwendungen. Im kostenlosen Assessment erhalten Sie eine konkrete Aufwandsschätzung je Use Case inklusive ROI-Kalkulation, damit Sie sehen, ab wann sich die Investition rechnet.",
  },
  {
    q: "Muss ich n8n selbst hosten oder übernehmen Sie das?",
    a: "Beides ist möglich. Wir richten n8n auf Wunsch auf Ihrer eigenen Infrastruktur ein, etwa auf einem Server in Ihrem Haus oder in Ihrem bestehenden Rechenzentrum. Alternativ betreiben wir die Instanz für Sie auf einem dedizierten EU-Server inklusive Updates, Backups und Monitoring. In beiden Fällen bleiben Sie Eigentümer Ihrer Workflows und Ihrer Daten, ohne Vendor Lock-in.",
  },
  {
    q: "Was passiert, wenn ein Workflow einmal fehlschlägt?",
    a: "Robuste Fehlerbehandlung ist fester Bestandteil jeder Umsetzung. Wir bauen Wiederholungslogik, Fallback-Pfade und automatische Benachrichtigungen ein, sodass Sie sofort erfahren, wenn ein externer Dienst nicht antwortet. Über das integrierte Logging sehen Sie jede Ausführung im Detail und können Fehler gezielt nachvollziehen, statt im Dunkeln zu suchen.",
  },
  {
    q: "Können bestehende Tools und Altsysteme angebunden werden?",
    a: "In den allermeisten Fällen ja. n8n bringt über 500 fertige Konnektoren mit und spricht zusätzlich jede REST-API, jeden Webhook und über eigene Nodes auch ältere Systeme an. Selbst Anwendungen ohne offizielle Schnittstelle lassen sich häufig über Datenbankzugriff, Dateiübergabe oder Custom Code einbinden. Im Assessment prüfen wir Ihren konkreten Tech-Stack und zeigen, was sich verbinden lässt.",
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
  name: "n8n Workflow-Automatisierung",
  serviceType: "Workflow-Automatisierung, Prozessautomatisierung, n8n",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "n8n Workflow-Automatisierung für Unternehmen im DACH-Raum: self-hosted auf EU-Servern, DSGVO-konform, mit nativer KI-Integration und über 500 Konnektoren. Konzeption, Umsetzung, Betrieb und Schulung.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const stats = [
  { value: "500+", label: "fertige Integrationen" },
  { value: "0 €", label: "Lizenzkosten für n8n" },
  { value: "100 %", label: "Daten in der EU" },
  { value: "200+", label: "Workflows umgesetzt" },
];

const ataglance = [
  ["Lizenz", "Open Source, kostenlos"],
  ["Hosting", "self-hosted in der EU"],
  ["Integrationen", "über 500 plus jede API"],
  ["KI-Anbindung", "nativ, inklusive AI Agents"],
  ["Datenschutz", "DSGVO, EU-Server, AVV"],
  ["Erster Workflow", "live in 1 bis 2 Wochen"],
];

const problems = [
  {
    problem: "Mitarbeiter übertragen täglich dieselben Daten von Hand in mehrere Systeme.",
    solution: "n8n synchronisiert Ihre Systeme in Echtzeit, ohne eine einzige manuelle Eingabe.",
  },
  {
    problem: "Kundenanfragen bleiben Stunden liegen, weil niemand Zeit zum Sortieren hat.",
    solution: "Eingehende Nachrichten werden automatisch analysiert, priorisiert und vorbeantwortet.",
  },
  {
    problem: "CRM, ERP und Buchhaltung sprechen schlicht nicht miteinander.",
    solution: "Workflows verbinden alle Systeme, Daten fließen genau dorthin, wo sie gebraucht werden.",
  },
  {
    problem: "Reports kosten jede Woche Stunden, obwohl die Zahlen längst irgendwo liegen.",
    solution: "Automatische Reports entstehen nach Plan und landen pünktlich beim richtigen Team.",
  },
  {
    problem: "Rechnungen und Belege werden manuell ausgelesen und abgetippt.",
    solution: "KI liest Dokumente aus, validiert die Felder und bucht sie in Ihre Fachsoftware.",
  },
];

const bentoFeatures = [
  {
    icon: Shield,
    title: "Volle Datensouveränität nach DSGVO",
    description:
      "n8n läuft auf Ihren Servern oder auf dedizierten EU-Servern in Österreich und Deutschland. Kein Datensatz verlässt Ihre Infrastruktur, kein US-Anbieter erhält Zugriff auf Ihre Prozesse. Genau das, was Kanzleien, Steuerberater, Praxen und alle brauchen, die mit sensiblen Daten arbeiten.",
  },
  {
    icon: Layers,
    title: "Über 500 Integrationen",
    description: "HubSpot, Salesforce, SAP, DATEV, BMD, Slack, Outlook, Shopify und vieles mehr. n8n verbindet, was bisher getrennt lief.",
  },
  {
    icon: Bot,
    title: "Native KI im Workflow",
    description: "Sprachmodelle direkt im Ablauf: OpenAI, Claude, lokale Modelle via Ollama, ohne Umweg und mit voller Kontrolle.",
  },
  {
    icon: Code2,
    title: "Open Source, kein Lock-in",
    description: "Sie besitzen Ihre Workflows. Kein Abo, das plötzlich teurer wird, kein Anbieter, der den Dienst abdreht.",
  },
  {
    icon: TrendingUp,
    title: "Unbegrenzt skalierbar",
    description: "Von hundert bis zu Millionen Ausführungen pro Monat: n8n wächst mit, ohne dass die Kosten je Lauf explodieren.",
  },
  {
    icon: Settings2,
    title: "Volle Flexibilität",
    description: "Custom Code, eigene Nodes, REST-APIs und Webhooks. n8n macht, was andere Tools schlicht ablehnen.",
  },
];

const departments = [
  {
    value: "vertrieb",
    label: "Vertrieb",
    icon: Users,
    head: "Vertrieb & CRM",
    intro: "Leads landen sofort am richtigen Ort, Follow-ups passieren von selbst und kein Kontakt geht zwischen den Systemen verloren.",
    items: [
      "Neue Leads aus Formular, Anruf oder Anzeige automatisch ins CRM eintragen und zuweisen.",
      "Anfragen per KI nach Dringlichkeit und Thema bewerten und an den passenden Vertriebler routen.",
      "Automatische Erinnerungen und Follow-up-Mails, wenn ein Lead zu lange ohne Reaktion bleibt.",
      "Angebote und Bestätigungen aus Vorlagen erzeugen und versenden.",
    ],
  },
  {
    value: "marketing",
    label: "Marketing",
    icon: Megaphone,
    head: "Marketing & Content",
    intro: "Kampagnen, Content und Reporting laufen vernetzt, statt in getrennten Tools verstreut zu liegen.",
    items: [
      "Newsletter-Anmeldungen quer über alle Kanäle synchronisieren und Listen sauber halten.",
      "KI erstellt Entwürfe für Social Posts, die zur Freigabe vorgelegt und geplant werden.",
      "Kampagnen-Kennzahlen aus mehreren Quellen sammeln und als wöchentlichen Report verteilen.",
      "Leads aus Ads automatisch anreichern, taggen und an den Vertrieb übergeben.",
    ],
  },
  {
    value: "finanzen",
    label: "Finanzen",
    icon: Calculator,
    head: "Finanzen & Buchhaltung",
    intro: "Belege, Rechnungen und Zahlen fließen automatisch in Ihre Fachsoftware, geprüft und nachvollziehbar.",
    items: [
      "Eingangsrechnungen per KI auslesen, Felder validieren und an DATEV oder BMD übergeben.",
      "Zahlungseingänge mit offenen Posten abgleichen und Mahnungen automatisch anstoßen.",
      "Wiederkehrende Reports zu Umsatz, Liquidität und offenen Forderungen erstellen.",
      "Belege aus E-Mail-Postfächern einsammeln, ablegen und korrekt benennen.",
    ],
  },
  {
    value: "support",
    label: "Service",
    icon: MessageSquare,
    head: "Kundenservice & Support",
    intro: "Anfragen werden sofort erkannt, kategorisiert und beantwortet, bevor sie im Postfach versanden.",
    items: [
      "Eingehende Tickets per KI klassifizieren, priorisieren und an das richtige Team verteilen.",
      "Antwortentwürfe aus Ihrer Wissensdatenbank generieren und dem Team zur Freigabe vorlegen.",
      "Status-Updates und Zufriedenheitsabfragen automatisch an Kunden versenden.",
      "Eskalationen erkennen und sofort per Slack oder Teams an die Verantwortlichen melden.",
    ],
  },
  {
    value: "hr",
    label: "HR",
    icon: UserPlus,
    head: "HR & Recruiting",
    intro: "Vom Bewerbungseingang bis zum Onboarding laufen die wiederkehrenden Schritte automatisch durch.",
    items: [
      "Bewerbungen sammeln, mit KI vorsortieren und strukturiert ins Bewerbertool übernehmen.",
      "Eingangsbestätigungen und Terminvorschläge automatisch versenden.",
      "Onboarding-Checklisten anstoßen: Zugänge, Geräte und Dokumente koordiniert vorbereiten.",
      "Urlaubs- und Abwesenheitsanträge erfassen, weiterleiten und im Kalender eintragen.",
    ],
  },
  {
    value: "it",
    label: "IT",
    icon: Cog,
    head: "IT & DevOps",
    intro: "Systeme, Daten und Alarme werden überwacht und verbunden, ohne dass jemand ständig danebensitzt.",
    items: [
      "Daten zwischen Datenbanken, APIs und Diensten zuverlässig synchronisieren.",
      "Monitoring-Alarme bündeln, anreichern und auf den richtigen Kanälen ausspielen.",
      "Routineaufgaben wie Backups, Exporte und Bereinigungen zeitgesteuert ausführen.",
      "Webhooks von Drittsystemen entgegennehmen und in interne Abläufe einspeisen.",
    ],
  },
];

const comparison = [
  { feature: "DSGVO & Datenschutz", n8n: "self-hosted in der EU", zapier: "US-Server", make: "US-Server", ok: true },
  { feature: "Open Source", n8n: "ja, kostenlos nutzbar", zapier: "nein", make: "nein", ok: true },
  { feature: "KI- und LLM-Integration", n8n: "nativ, inkl. AI Agents", zapier: "begrenzt", make: "begrenzt", ok: true },
  { feature: "Kosten bei hohem Volumen", n8n: "planbare Fixkosten", zapier: "steigen stark", make: "steigen stark", ok: true },
  { feature: "Vendor Lock-in", n8n: "keiner", zapier: "hoch", make: "mittel", ok: true },
  { feature: "Custom Code & Logik", n8n: "vollständig anpassbar", zapier: "begrenzt", make: "begrenzt", ok: true },
  { feature: "Eigene Nodes & APIs", n8n: "ja, beliebig erweiterbar", zapier: "nein", make: "teilweise", ok: true },
  { feature: "Datenhaltung", n8n: "Ihre Infrastruktur", zapier: "Anbieter-Cloud", make: "Anbieter-Cloud", ok: true },
];

const integrationGroups = [
  { icon: Boxes, title: "CRM & Vertrieb", tools: ["HubSpot", "Salesforce", "Pipedrive", "Zoho"] },
  { icon: Calculator, title: "ERP & Buchhaltung", tools: ["SAP", "DATEV", "BMD", "Lexware"] },
  { icon: MessageSquare, title: "Kommunikation", tools: ["Slack", "MS Teams", "Outlook", "Gmail", "Telegram"] },
  { icon: Bot, title: "KI & Sprachmodelle", tools: ["OpenAI", "Claude", "Ollama (lokal)", "Mistral"] },
  { icon: Database, title: "Daten & Speicher", tools: ["PostgreSQL", "MySQL", "Airtable", "Google Sheets"] },
  { icon: Code2, title: "DevOps & Web", tools: ["GitHub", "GitLab", "Webhooks", "REST-APIs", "Docker"] },
];

const steps = [
  {
    step: "01",
    icon: Phone,
    title: "Kostenlose Erstanalyse",
    time: "30 Minuten",
    description:
      "Wir schauen gemeinsam, welche Prozesse Sie täglich Zeit kosten und welche davon sich für einen n8n Workflow eignen. Am Ende dieses Gesprächs wissen Sie, wo der größte Hebel liegt und womit es sich zu starten lohnt.",
  },
  {
    step: "02",
    icon: Search,
    title: "Assessment & Workflow-Konzept",
    time: "Woche 1",
    description:
      "Wir analysieren Ihren Tech-Stack, skizzieren die Architektur jedes Workflows und schätzen den Aufwand je Use Case inklusive ROI. Sie sehen das fertige Konzept, bevor eine einzige Node gebaut wird.",
  },
  {
    step: "03",
    icon: Settings2,
    title: "Umsetzung & Testing",
    time: "Woche 2 bis 4",
    description:
      "Wir bauen die Workflows, verbinden Ihre Systeme und testen intensiv, inklusive Fehlerbehandlung, Monitoring und Logging. Es geht nichts live, das nicht robust und nachvollziehbar arbeitet.",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Go-Live & laufender Betrieb",
    time: "ab Woche 4",
    description:
      "Die Workflows laufen auf Ihrer n8n-Instanz. Wir schulen Ihr Team, dokumentieren jeden Ablauf und bleiben im Support. Sie passen Workflows selbst an oder beauftragen uns mit dem nächsten Ausbau.",
  },
];

const related = [
  { href: "/agentic-ai", icon: Bot, title: "Agentic AI & AI Agents", desc: "n8n als Orchestrierungsschicht für autonome KI, die Aufgaben eigenständig end-to-end erledigt." },
  { href: "/ki-wissensdatenbank", icon: Database, title: "KI Wissensdatenbank", desc: "RAG-Pipelines mit n8n automatisch befüllen, aktuell halten und sauber versionieren." },
  { href: "/ki-consulting", icon: Lightbulb, title: "KI Consulting", desc: "Strategische Beratung zur richtigen Reihenfolge: welche Prozesse Sie zuerst automatisieren." },
];

// Map: Tool-Name -> echter Logo-Slug unter /img/logos. Tools ohne Logo (Pipedrive,
// BMD, Lexware, Webhooks, REST-APIs) zeigen nur den Namen als Badge.
const toolLogos: Record<string, string> = {
  HubSpot: "hubspot",
  Salesforce: "salesforce",
  Zoho: "zoho",
  SAP: "sap",
  DATEV: "datev",
  Slack: "slack",
  "MS Teams": "microsoftteams",
  Outlook: "outlook",
  Gmail: "gmail",
  Telegram: "telegram",
  OpenAI: "openai",
  Claude: "anthropic",
  "Ollama (lokal)": "ollama",
  Mistral: "mistralai",
  PostgreSQL: "postgresql",
  MySQL: "mysql",
  Airtable: "airtable",
  "Google Sheets": "googlesheets",
  GitHub: "githubactions",
  GitLab: "gitlab",
  Docker: "docker",
};

// Weisse Box, damit farbige Logos auch auf hellem Grund sichtbar bleiben.
function LogoBox({
  slug,
  alt,
  imgClassName = "w-5 h-5",
  boxClassName = "",
}: {
  slug: string;
  alt: string;
  imgClassName?: string;
  boxClassName?: string;
}) {
  return (
    <span className={`inline-flex items-center justify-center bg-white border border-border rounded ${boxClassName}`}>
      <img src={`/img/logos/${slug}.svg`} alt={alt} className={imgClassName} />
    </span>
  );
}

export default function Page() {
  return (
    <>
      <Script id="faq-n8n" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-n8n" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <style>{`
        @keyframes n8nFlowV { from { background-position: 0 0; } to { background-position: 0 10px; } }
        .n8n-flow-v { width: 2px; background-image: repeating-linear-gradient(180deg, rgba(57,133,239,.65) 0 4px, transparent 4px 10px); background-size: 100% 10px; animation: n8nFlowV .6s linear infinite; }
      `}</style>

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <LogoBox slug="n8n" alt="n8n" imgClassName="w-9 h-9" boxClassName="rounded-xl p-2 shadow-sm" />
                    <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                      n8n, Workflow-Automatisierung
                    </Badge>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    n8n Automatisierung, die <span className="text-primary">Ihre Systeme verbindet</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Ein n8n Workflow führt Apps, Datenbanken und KI-Modelle in einem einzigen Ablauf zusammen, self-hosted auf EU-Servern, ohne Kosten je Ausführung und ohne Datenweitergabe an US-Anbieter. Wir konzipieren, bauen, betreiben und schulen.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Assessment</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#vergleich">n8n vs. Zapier vs. Make</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Code2 className="w-4 h-4 text-primary" /> Open Source</span>
                    <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-primary" /> EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Hero visual: n8n node/workflow diagram */}
                <div className="relative">
                  <Card className="border-2 shadow-xl shadow-primary/5 overflow-hidden">
                    <CardHeader className="border-b border-border py-3">
                      <div className="flex items-center gap-2">
                        <span className="flex gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-muted-foreground/20" />
                          <span className="w-3 h-3 rounded-full bg-muted-foreground/20" />
                          <span className="w-3 h-3 rounded-full bg-muted-foreground/20" />
                        </span>
                        <span className="ml-2 font-mono text-xs text-muted-foreground">kunden-onboarding.n8n</span>
                        <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> aktiv
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent
                      className="relative p-6"
                      style={{ backgroundImage: "radial-gradient(circle, rgba(57,133,239,0.12) 1px, transparent 1px)", backgroundSize: "16px 16px" }}
                    >
                      <div className="flex flex-col items-center">
                        {/* Trigger */}
                        <div className="w-full flex items-center gap-3 rounded-xl border-2 border-border bg-background px-3.5 py-2.5 shadow-sm">
                          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <Mail className="w-5 h-5 text-primary" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Trigger</div>
                            <div className="text-sm font-semibold truncate">Neue Anfrage per E-Mail</div>
                          </div>
                        </div>

                        <span className="n8n-flow-v h-6 my-1.5" aria-hidden />

                        {/* KI node, highlighted */}
                        <div className="w-full flex items-center gap-3 rounded-xl border-2 border-primary/40 bg-primary/5 px-3.5 py-2.5 shadow-sm">
                          <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                            <Bot className="w-5 h-5 text-primary" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-[10px] uppercase tracking-wider text-primary font-medium">KI-Node</div>
                            <div className="text-sm font-semibold truncate">Analysieren & kategorisieren</div>
                          </div>
                          <Badge variant="outline" className="rounded-full text-[10px] shrink-0 bg-primary/10 text-primary border-primary/20">LLM</Badge>
                        </div>

                        <span className="n8n-flow-v h-6 my-1.5" aria-hidden />

                        {/* Branch: parallel actions */}
                        <div className="w-full grid grid-cols-2 gap-3">
                          <div className="flex items-center gap-2.5 rounded-xl border-2 border-border bg-background px-3 py-2.5 shadow-sm">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                              <Database className="w-4 h-4 text-primary" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Aktion</div>
                              <div className="text-xs font-semibold truncate">CRM-Eintrag</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2.5 rounded-xl border-2 border-border bg-background px-3 py-2.5 shadow-sm">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                              <MessageSquare className="w-4 h-4 text-primary" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Aktion</div>
                              <div className="text-xs font-semibold truncate">Team-Alert</div>
                            </div>
                          </div>
                        </div>

                        <span className="n8n-flow-v h-6 my-1.5" aria-hidden />

                        {/* Final node */}
                        <div className="w-full flex items-center gap-3 rounded-xl border-2 border-border bg-background px-3.5 py-2.5 shadow-sm">
                          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <Send className="w-5 h-5 text-primary" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Output</div>
                            <div className="text-sm font-semibold truncate">Antwort gesendet</div>
                          </div>
                          <Check className="w-4 h-4 text-green-600 shrink-0" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* floating chips */}
                  <div className="hidden lg:flex absolute -top-4 -right-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium">
                    <Zap className="w-3.5 h-3.5 text-primary" /> 0 € pro Ausführung
                  </div>
                  <div className="hidden lg:flex absolute -bottom-4 -left-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium">
                    <Lock className="w-3.5 h-3.5 text-primary" /> Daten bleiben in der EU
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* STATS BAND */}
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

          {/* DEFINITION: 2col + info card */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Kurz erklärt</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was ist n8n und warum jetzt?</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p><strong className="text-foreground">n8n</strong> ist eine quelloffene Plattform für Workflow-Automatisierung. Auf einer visuellen Leinwand verbinden Sie Anwendungen, APIs, Datenbanken und KI-Modelle zu einem durchgehenden Ablauf. Jeder Schritt ist eine <strong className="text-foreground">Node</strong>, die genau eine Aufgabe erledigt, vom Auslöser über die Verzweigung bis zur Aktion in einem Drittsystem.</p>
                    <p>Der große Unterschied zu Zapier oder Make: n8n lässt sich <strong className="text-foreground">selbst hosten</strong>. Sie betreiben es auf Ihrer eigenen Infrastruktur oder auf einem EU-Server, zahlen keine Gebühr je Ausführung und behalten die volle Kontrolle über Ihre Daten. Für Unternehmen im DACH-Raum, die mit sensiblen Informationen arbeiten, ist genau das entscheidend.</p>
                    <p>In Kombination mit KI wird n8n zur <strong className="text-foreground">Schaltzentrale Ihrer Prozesse</strong>: Sprachmodelle lesen, schreiben und entscheiden direkt im Workflow, während jeder Schritt protokolliert und nachvollziehbar bleibt. So entsteht Automatisierung, die Sie verstehen und der Sie vertrauen können.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Prozessautomatisierung</Badge>
                    <Badge variant="secondary" className="rounded-full">Zapier Alternative</Badge>
                    <Badge variant="secondary" className="rounded-full">Self-Hosted</Badge>
                    <Badge variant="secondary" className="rounded-full">KI-Workflows</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">n8n auf einen Blick</CardTitle>
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
                <h2 className="text-3xl md:text-4xl font-bold">Wo heute Handarbeit ist, läuft morgen ein Workflow</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Überall, wo Menschen dieselben Schritte täglich wiederholen, übernimmt n8n: zuverlässiger, schneller und ohne Flüchtigkeitsfehler.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 pl-1">Was heute passiert</div>
                  {problems.map(({ problem }, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl border bg-background">
                      <X className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
                      <span className="text-sm leading-relaxed">{problem}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-2 pl-1">Was n8n stattdessen tut</div>
                  {problems.map(({ solution }, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-primary/20 bg-primary/5">
                      <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm leading-relaxed font-medium">{solution}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <WorkflowExamples
            tool="n8n"
            examples={[
              { icon: WfUserPlus, title: "Lead-Anfrage automatisch verarbeiten", trigger: "Neue Anfrage über Formular oder Website", steps: ["Kontakt im CRM (HubSpot, Pipedrive) anlegen", "Team in Slack oder Teams benachrichtigen", "Bestätigungs-Mail automatisch senden"], result: "Kein Lead geht verloren, Reaktion in Sekunden" },
              { icon: WfReceipt, title: "Belege automatisch erfassen", trigger: "Rechnung landet im Postfach", steps: ["KI liest Betrag, Datum und Lieferant aus", "Eintrag in Buchhaltung (BMD, DATEV, sevDesk)", "Beleg in Drive oder SharePoint ablegen"], result: "Belegerfassung läuft über Nacht von selbst" },
              { icon: WfMessage, title: "Support-Anfragen vorsortieren", trigger: "Kundenanfrage per E-Mail", steps: ["KI kategorisiert und priorisiert", "Ticket im Helpdesk anlegen", "Standardfälle automatisch beantworten"], result: "Schnellere Antworten, entlastetes Team" },
              { icon: WfCart, title: "Bestellungen Ende-zu-Ende abwickeln", trigger: "Neue Bestellung im Shop oder ERP", steps: ["Lagerbestand und Buchhaltung aktualisieren", "Versandlabel erzeugen, Logistik informieren", "Kunde per Mail mit Tracking benachrichtigen"], result: "Vom Eingang bis Versand ohne Handarbeit" },
              { icon: WfCal, title: "Termine und Erinnerungen steuern", trigger: "Termin gebucht oder verschoben", steps: ["Kalender und CRM synchronisieren", "Erinnerung per SMS, Mail oder WhatsApp", "Bei No-Show automatisch nachfassen"], result: "Volle Kalender, weniger Ausfälle" },
              { icon: WfSheet, title: "Reporting automatisch erstellen", trigger: "Täglich, wöchentlich oder per Knopfdruck", steps: ["Daten aus Tools und Datenbanken sammeln", "Kennzahlen in Sheet oder BI aufbereiten", "Report an die richtigen Personen senden"], result: "Aktuelle Zahlen ohne manuelles Zusammensuchen" },
            ]}
          />

          {/* BENTO: Vorteile */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Die Plattform</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Warum n8n die richtige Wahl ist</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Andere Tools bieten Komfort. n8n bietet Kontrolle. Im DACH-Raum ist Kontrolle über die eigenen Daten keine Option, sondern Pflicht.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="hover-lift border-2 lg:col-span-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{bentoFeatures[0].title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{bentoFeatures[0].description}</CardDescription>
                  </CardHeader>
                </Card>
                {bentoFeatures.slice(1).map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <Card key={i} className="hover-lift border-2">
                      <CardHeader>
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{f.title}</CardTitle>
                        <CardDescription className="leading-relaxed">{f.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* USE CASES: Tabs nach Abteilung */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Anwendungsfälle</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Was wir mit n8n automatisieren</h2>
                <p className="text-lg text-muted-foreground mt-4">Wählen Sie einen Bereich, wir zeigen konkrete Workflows aus der Praxis.</p>
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
                            <div key={j} className="flex items-start gap-2.5 p-3 rounded-lg border bg-background">
                              <Workflow className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                              <span className="text-sm leading-relaxed">{item}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>

          {/* VERGLEICH TABLE */}
          <section id="vergleich" className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Tool-Vergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">n8n vs. Zapier vs. Make</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Für Unternehmen im DACH-Raum ist die Entscheidung oft einfacher als gedacht: Wer Datensouveränität und planbare Kosten braucht, wählt n8n.</p>
              </div>
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[30%] font-bold text-foreground">Merkmal</TableHead>
                      <TableHead className="text-primary font-bold">n8n</TableHead>
                      <TableHead className="text-muted-foreground">Zapier</TableHead>
                      <TableHead className="text-muted-foreground">Make</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparison.map((row, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{row.feature}</TableCell>
                        <TableCell className="text-sm text-primary font-medium">
                          <span className="inline-flex items-start gap-1.5"><Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />{row.n8n}</span>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          <span className="inline-flex items-start gap-1.5"><X className="w-4 h-4 text-muted-foreground/50 mt-0.5 shrink-0" />{row.zapier}</span>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          <span className="inline-flex items-start gap-1.5"><X className="w-4 h-4 text-muted-foreground/50 mt-0.5 shrink-0" />{row.make}</span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </section>

          {/* INTEGRATIONEN & TECH */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Integrationen & Tech</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Über 500 Konnektoren, eine Schaltzentrale</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">n8n spricht Ihre bestehenden Tools, jede REST-API und über eigene Nodes auch ältere Systeme. Eine Auswahl der häufigsten Anbindungen.</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {integrationGroups.map((g, i) => {
                  const Icon = g.icon;
                  return (
                    <Card key={i} className="hover-lift border-2">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <CardTitle className="text-lg">{g.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {g.tools.map((t) => {
                            const slug = toolLogos[t];
                            return (
                              <Badge key={t} variant="secondary" className="rounded-full font-normal inline-flex items-center gap-1.5">
                                {slug && <LogoBox slug={slug} alt={t} imgClassName="w-3.5 h-3.5" boxClassName="p-0.5" />}
                                {t}
                              </Badge>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Self-Hosting highlight */}
              <Card className="border-2 border-primary/20 bg-primary/5 mt-6">
                <CardContent className="py-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex items-start gap-3">
                      <Server className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                      <div>
                        <div className="font-semibold mb-1">Self-Hosting in der EU</div>
                        <p className="text-sm text-muted-foreground leading-relaxed">Betrieb auf Ihrer Infrastruktur oder auf einem dedizierten Server in Österreich oder Deutschland.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <RefreshCw className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                      <div>
                        <div className="font-semibold mb-1">Updates, Backups, Monitoring</div>
                        <p className="text-sm text-muted-foreground leading-relaxed">Auf Wunsch übernehmen wir den vollständigen Betrieb inklusive Wartung und Überwachung.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <GitBranch className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                      <div>
                        <div className="font-semibold mb-1">Robuste Fehlerbehandlung</div>
                        <p className="text-sm text-muted-foreground leading-relaxed">Wiederholungslogik, Fallback-Pfade und Alerts, damit kein Ausfall unbemerkt bleibt.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ABLAUF: Timeline */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unser Prozess</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Ihr n8n-Projekt in 4 Schritten</h2>
                <p className="text-lg text-muted-foreground mt-4">Vom ersten Gespräch bis zur laufenden Prozessautomatisierung, transparent und ohne Überraschungen.</p>
              </div>
              <ProcessSteps steps={steps} />
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zu n8n</h2>
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

          {/* FERTIGE PRODUKTE AUF N8N-BASIS */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Beispiel-Workflows</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Workflows, die wir schon gebaut haben</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Eine Auswahl an n8n-Workflows aus echten Projekten, damit Sie sehen, was sich in der Praxis automatisieren lässt.</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { t: "LinkedIn Outreach Agent", d: "Identifiziert Kontakte und versendet personalisierte Anfragen, vollautomatisch." },
                  { t: "Cold Email Outreach Agent", d: "Hyper-personalisierte B2B-Mails aus Website-Daten mit hoher Zustellbarkeit." },
                  { t: "SEO & Content Agent", d: "Schreibt SEO-Artikel mit Bildern und interner Verlinkung, veröffentlicht vollautomatisch." },
                  { t: "KI-Wissensdatenbank (RAG)", d: "Präzise, quellenbasierte Antworten aus Ihren internen Dokumenten." },
                  { t: "Multi-Channel Automatisierung", d: "E-Mail, WhatsApp und Formulare einheitlich von einem Agenten beantwortet." },
                ].map((p) => (
                  <Card key={p.t} className="border-2 hover-lift">
                    <CardHeader>
                      <CardTitle className="text-lg">{p.t}</CardTitle>
                      <CardDescription className="leading-relaxed">{p.d}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
              <div className="mt-8 rounded-2xl border-2 border-primary/20 bg-primary/5 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5 justify-between">
                <div>
                  <div className="font-bold text-lg mb-1">Ihren eigenen Workflow bauen lassen</div>
                  <p className="text-muted-foreground text-sm max-w-xl">Wir setzen Ihre Prozesse individuell auf n8n um, vom ersten Use Case bis zum laufenden Betrieb.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                  <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-base">Kostenloses Assessment</a>
                </div>
              </div>
            </div>
          </section>

          {/* VERWANDTE LEISTUNGEN */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Mehr Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zu n8n</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {related.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <a key={i} href={s.href} className="group block">
                      <Card className="h-full border-2 hover-lift group-hover:border-primary/40">
                        <CardHeader>
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                            {serviceLogos[s.href] ? <img src={`/img/logos/${serviceLogos[s.href]}.svg`} alt={s.title} className="w-7 h-7 object-contain" /> : <Icon className="w-6 h-6 text-primary" />}
                          </div>
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
