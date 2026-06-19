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
import { serviceLogos } from "@/lib/serviceLogos";
import {
  Server,
  Plug,
  Wrench,
  Shield,
  ShieldCheck,
  Network,
  Code,
  Check,
  X,
  Database,
  Mail,
  FileSearch,
  Building2,
  Zap,
  Lock,
  Cpu,
  Boxes,
  Workflow,
  ScrollText,
  FolderTree,
  Sparkles,
  Search,
  Settings,
  Rocket,
  FileText,
  Bot,
  Brain,
  MapPin,
  KeyRound,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "MCP Server entwickeln: Model Context Protocol",
  description:
    "MCP Server vom DACH-Spezialisten: Wir verbinden Claude, GPT & lokale LLMs sicher mit CRM, ERP, Datenbanken und APIs. Model Context Protocol DSGVO-konform, EU-gehostet, herstellerunabhängig. Kostenlose Erstberatung.",
  keywords:
    "MCP Server, Model Context Protocol, MCP KI, MCP Tools, Claude MCP, MCP Integration, MCP Agent, MCP Server einrichten, MCP Server entwickeln, MCP DSGVO, MCP Unternehmen, was ist MCP, MCP Server Hosting, AI Agent Tools",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/mcp-server" },
};

const faqs = [
  {
    q: "Was ist das Model Context Protocol (MCP)?",
    a: "Das Model Context Protocol (MCP) ist ein offener Standard von Anthropic, der definiert, wie KI-Modelle sicher mit externen Tools, Datenbanken und APIs kommunizieren. MCP standardisiert die Schnittstelle zwischen LLMs und der Außenwelt, ähnlich wie USB einen universellen Anschluss für Peripheriegeräte geschaffen hat. Ein MCP Server stellt dabei Tools, Ressourcen und Prompts bereit, die ein KI-Modell (der MCP Client) gezielt aufrufen kann. So können AI Agents zuverlässig E-Mails senden, Datenbanken abfragen, Dokumente verarbeiten und Geschäftsprozesse steuern, statt nur Texte zu generieren.",
  },
  {
    q: "Was ist ein MCP Server und wie funktioniert er?",
    a: "Ein MCP Server ist eine Anwendung, die Tools, Ressourcen und Prompts über das Model Context Protocol bereitstellt. Er läuft als lokaler Prozess oder als Remote-Service und kommuniziert über standardisiertes JSON-RPC mit MCP Clients wie Claude Desktop, Cursor oder Ihren eigenen Anwendungen. Der Server definiert genau, welche Tools verfügbar sind, etwa E-Mail senden oder Datenbank abfragen, und das KI-Modell ruft diese Tools bei Bedarf auf. Die Ausführung erfolgt kontrolliert auf dem Server: Das KI-Modell hat zu keinem Zeitpunkt direkten Zugriff auf Ihre Systeme.",
  },
  {
    q: "Worin unterscheidet sich MCP von Function Calling oder Tool Use?",
    a: "Function Calling und Tool Use sind proprietäre Ansätze einzelner LLM-Anbieter. MCP ist dagegen ein offener, herstellerunabhängiger Standard: Ein MCP Server funktioniert mit jedem MCP-kompatiblen Client, also mit Claude, GPT, Llama oder anderen Modellen. MCP bietet zudem ein reichhaltigeres Protokoll mit Ressourcen (kontextuelle Daten), Prompts (wiederverwendbare Vorlagen) und Sampling (Server-initiierte Modell-Aufrufe) neben den klassischen Tool-Aufrufen. Sie bauen die Integration einmal und nutzen sie überall, ohne Vendor Lock-in.",
  },
  {
    q: "Ist MCP sicher und DSGVO-konform einsetzbar?",
    a: "Ja. MCP wurde mit Security-by-Design entwickelt. Der MCP Server läuft auf Ihrer eigenen Infrastruktur und kontrolliert exakt, welche Tools dem KI-Modell zur Verfügung stehen. Jeder Tool-Aufruf wird protokolliert und lässt sich mit feingranularen Berechtigungen versehen. In Kombination mit selbst gehosteten LLMs, etwa über Ollama, verlassen keine Daten Ihre Umgebung. Wir betreiben MCP Server auf DSGVO-konformen Servern in Österreich und der EU, mit vollständiger Audit-Protokollierung, Auftragsverarbeitungsvertrag und granularer Zugriffskontrolle.",
  },
  {
    q: "Welche Tools kann ein MCP Server bereitstellen?",
    a: "Die Bandbreite ist groß. Typische MCP-Tools umfassen: Dateisystem-Zugriff (Lesen, Schreiben, Suchen), Datenbank-Abfragen (SQL, NoSQL, Vektordatenbanken), API-Aufrufe (REST, GraphQL), E-Mail-Versand und -Empfang, CRM- und ERP-Integration (Salesforce, SAP, HubSpot), Web-Recherche, Kalender-Verwaltung und Code-Ausführung in abgesicherten Sandboxes. Darüber hinaus entwickeln wir maßgeschneiderte MCP-Tools für Ihre spezifischen Geschäftsprozesse, von der Vertragsprüfung bis zur Bestandsabfrage.",
  },
  {
    q: "Welche KI-Modelle und Clients unterstützen MCP?",
    a: "MCP ist modellunabhängig. Auf Client-Seite werden unter anderem Claude Desktop, Cursor, Windsurf, Zed und eigene Anwendungen über das MCP SDK unterstützt. Auf Modell-Seite arbeiten wir mit Claude, GPT, Llama, Mistral und lokal betriebenen Modellen über Ollama. Damit bleibt Ihre Architektur flexibel: Sie können das beste Modell für die jeweilige Aufgabe wählen oder es später wechseln, ohne den MCP Server neu zu bauen.",
  },
  {
    q: "stdio oder Remote: welcher Transport ist der richtige?",
    a: "MCP unterstützt mehrere Transportwege. Für lokale Werkzeuge auf einem einzelnen Rechner ist stdio ideal, da der Server direkt als Subprozess läuft. Für mehrere Nutzer, zentrale Bereitstellung und Skalierung empfehlen wir Remote-Transport über Streamable HTTP oder Server-Sent Events, abgesichert mit OAuth 2.0 und Audit-Logging. Wir wählen den Transport passend zu Ihrem Sicherheits- und Betriebsmodell und können beide Varianten kombinieren.",
  },
  {
    q: "Was kostet ein MCP Server Projekt und wann rechnet es sich?",
    a: "Ein einfacher MCP Server mit zwei bis drei Standard-Tools ist in wenigen Tagen umsetzbar. Komplexere Enterprise-Integrationen über CRM, ERP und mehrere Abteilungen dauern typischerweise vier bis acht Wochen. Der ROI zeigt sich oft schnell: Wenn ein AI Agent täglich Routineabfragen übernimmt, die Mitarbeiter bisher manuell erledigt haben, amortisiert sich die Investition in vielen Fällen innerhalb von drei bis sechs Monaten. Wir kalkulieren das gemeinsam mit Ihnen im kostenlosen Erstgespräch.",
  },
  {
    q: "Wie startet ein MCP-Projekt mit der KI Kanzlei?",
    a: "Mit einem kostenlosen Erstgespräch von rund 30 Minuten. Darin klären wir, welche Systeme und Prozesse sich für MCP eignen und welche Tools Ihr KI-Modell wirklich braucht. Danach entwerfen wir Architektur und Sicherheitskonzept, entwickeln und testen die Tools mit echten Szenarien und gehen kontrolliert live, auf Wunsch als Managed Service mit SLA. Sie behalten in jeder Phase die volle Kontrolle über Daten und Berechtigungen.",
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
  name: "MCP Server & Model Context Protocol",
  serviceType: "MCP Server Entwicklung, Model Context Protocol Integration",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "Entwicklung und Betrieb von MCP Servern für Unternehmen im DACH-Raum: KI-Modelle wie Claude und GPT sicher mit CRM, ERP, Datenbanken und APIs verbinden. Offener Standard, DSGVO-konform, EU-gehostet.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

// Hero hub nodes (radial positions in %)
const hubNodes = [
  { label: "CRM", icon: Building2, x: 50, y: 9 },
  { label: "Datenbank", icon: Database, x: 90, y: 29 },
  { label: "APIs", icon: Code, x: 90, y: 71 },
  { label: "E-Mail", icon: Mail, x: 50, y: 91 },
  { label: "Dateien", icon: FolderTree, x: 10, y: 71 },
  { label: "ERP", icon: Boxes, x: 10, y: 29 },
];

const buildingBlocks = [
  { icon: Wrench, name: "Tools", desc: "Aktionen, die das Modell ausführen darf: E-Mail senden, Datensatz anlegen, Bericht erzeugen. Jedes Tool hat klare Parameter und Grenzen." },
  { icon: Database, name: "Resources", desc: "Lesbare Kontextdaten wie Dateien, Tabellen oder Dokumente, die das Modell als Wissensquelle nutzt, ohne sie selbst zu verändern." },
  { icon: ScrollText, name: "Prompts", desc: "Wiederverwendbare Vorlagen für wiederkehrende Aufgaben, sauber versioniert statt verstreut in Chatverläufen." },
  { icon: Sparkles, name: "Sampling", desc: "Der Server darf das Modell selbst um eine Einschätzung bitten, etwa um Zwischenergebnisse zu bewerten, kontrolliert und nachvollziehbar." },
  { icon: FolderTree, name: "Roots", desc: "Definierte Arbeitsbereiche, die festlegen, auf welche Verzeichnisse und Quellen ein Server überhaupt zugreifen darf." },
];

const services = [
  { icon: Server, title: "MCP Server Entwicklung", desc: "Maßgeschneiderte MCP Server für Ihre Geschäftsprozesse, von einfachen Datei- und Datenbank-Tools bis zu komplexen Enterprise-Integrationen mit CRM, ERP und internen APIs. Jeder Server wird auf Ihre Sicherheitsanforderungen zugeschnitten.", featured: true },
  { icon: Plug, title: "MCP Tool-Integration", desc: "Anbindung von MCP-Tools an bestehende KI-Workflows: Claude Desktop, Cursor, eigene Chatbots oder Agentic-AI-Systeme. Jedes Tool erhält Beschreibung, Parameter und Sicherheitsgrenzen." },
  { icon: Wrench, title: "Custom MCP Tools", desc: "Spezialisierte Tools für Ihre Branche: Vertragsprüfung, Rechnungsverarbeitung, Bestandsmanagement oder Aktenabfrage, alles über standardisierte MCP-Schnittstellen." },
  { icon: Shield, title: "MCP Security & Governance", desc: "Granulare Zugriffskontrolle: Welcher Nutzer darf welche Tools nutzen? Audit-Logging aller Aufrufe, Rate Limiting und Sandbox-Ausführung für kritische Operationen." },
  { icon: Network, title: "Multi-Server Architektur", desc: "Verteilte MCP-Infrastruktur: mehrere spezialisierte Server für verschiedene Abteilungen, verbunden über ein zentrales Gateway mit einheitlicher Authentifizierung." },
  { icon: Code, title: "Managed Hosting & Betrieb", desc: "Betrieb auf EU-Infrastruktur: Installation, Konfiguration, Monitoring, Updates und Support. Sie nutzen die Tools, wir kümmern uns um den Betrieb, DSGVO-konform und hochverfügbar." },
];

const comparison = [
  { feature: "Standardisierung", mcp: "Offenes Protokoll, herstellerneutral", rest: "Kein Standard, jede API anders", func: "Proprietär, anbieterspezifisch" },
  { feature: "KI-Modell-Support", mcp: "Jedes MCP-kompatible Modell", rest: "Manuelle Integration je Modell", func: "Nur der jeweilige Anbieter" },
  { feature: "Tool-Beschreibungen", mcp: "Strukturiert, maschinenlesbar", rest: "Manuell dokumentieren", func: "JSON Schema, aber proprietär" },
  { feature: "Ressourcen & Prompts", mcp: "Im Protokoll enthalten", rest: "Nicht vorgesehen", func: "Nicht vorgesehen" },
  { feature: "Sicherheit & Kontrolle", mcp: "Server kontrolliert jeden Zugriff", rest: "Muss separat gebaut werden", func: "Teils Modell, teils extern" },
  { feature: "Zukunftssicherheit", mcp: "Modellunabhängig, kein Lock-in", rest: "Immer manueller Aufwand", func: "Vendor Lock-in" },
];

const useCaseTabs = [
  {
    value: "crm",
    label: "CRM & Vertrieb",
    icon: Building2,
    head: "CRM & Vertrieb",
    items: [
      "Salesforce- oder HubSpot-Einträge per Sprachbefehl anlegen und aktualisieren",
      "Leads automatisch qualifizieren und dem passenden Vertriebsmitarbeiter zuweisen",
      "Follow-up-E-Mails auf Basis aktueller CRM-Daten formulieren lassen",
      "Pipeline-Status abfragen und Berichte auf Knopfdruck generieren",
      "Angebote aus Stammdaten erzeugen und im CRM ablegen",
    ],
  },
  {
    value: "db",
    label: "Datenbanken",
    icon: Database,
    head: "Datenbanken & Analytik",
    items: [
      "SQL-Abfragen in natürlicher Sprache formulieren und kontrolliert ausführen",
      "Berichte aus Produktionsdaten ohne IT-Ticket erstellen lassen",
      "Anomalien in Zeitreihendaten automatisch erkennen und melden",
      "Vektordatenbank für die semantische Dokumentensuche anbinden",
      "Kennzahlen aus mehreren Quellen zusammenführen und aufbereiten",
    ],
  },
  {
    value: "docs",
    label: "Dokumente & Wissen",
    icon: FileSearch,
    head: "Dokumente & Wissen",
    items: [
      "Interne Wissensdatenbank über MCP durchsuchen und zusammenfassen",
      "Verträge auf kritische Klauseln und Risiken analysieren lassen",
      "Meetingprotokolle automatisch strukturieren und korrekt ablegen",
      "DATEV- oder SAP-Belege klassifizieren und weiterverarbeiten",
      "Dokumentenfreigaben mit Audit-Trail nachvollziehbar machen",
    ],
  },
  {
    value: "komm",
    label: "Kommunikation",
    icon: Mail,
    head: "Kommunikation",
    items: [
      "E-Mails nach vordefinierten Regeln beantworten und weiterleiten",
      "Termine prüfen, Kalendereinladungen erstellen und versenden",
      "Slack- oder Teams-Nachrichten als MCP-Tool integrieren",
      "Eingehende Anfragen automatisch klassifizieren und priorisieren",
      "Rückrufnotizen und Tickets sauber im richtigen System anlegen",
    ],
  },
  {
    value: "devops",
    label: "DevOps & Betrieb",
    icon: Workflow,
    head: "DevOps & Betrieb",
    items: [
      "Deployments und Statusabfragen über kontrollierte MCP-Tools auslösen",
      "Logs und Metriken auf Anfrage gezielt durchsuchen und auswerten",
      "Tickets in JIRA oder GitLab automatisch anlegen und verknüpfen",
      "Infrastruktur-Abfragen ausführen, ohne Zugangsdaten preiszugeben",
      "Wiederkehrende Wartungsschritte als auditierbare Workflows kapseln",
    ],
  },
];

type StackRow = { category: string; tools: string; logos?: { slug: string; alt: string }[] };

const stack: StackRow[] = [
  { category: "MCP Framework", tools: "MCP SDK (Python & TypeScript), MCP Inspector, MCP CLI", logos: [{ slug: "python", alt: "Python" }, { slug: "typescript", alt: "TypeScript" }] },
  { category: "MCP Clients", tools: "Claude Desktop, Cursor, Windsurf, Zed, eigene Clients" },
  { category: "Transport", tools: "stdio, Server-Sent Events, Streamable HTTP" },
  { category: "KI-Modelle", tools: "Claude, GPT, Llama, Mistral, Ollama (lokal)", logos: [{ slug: "anthropic", alt: "Claude" }, { slug: "ollama", alt: "Ollama" }] },
  { category: "Datenbanken", tools: "PostgreSQL, MySQL, MongoDB, Qdrant, Redis", logos: [{ slug: "postgresql", alt: "PostgreSQL" }, { slug: "mongodb", alt: "MongoDB" }, { slug: "qdrant", alt: "Qdrant" }, { slug: "redis", alt: "Redis" }] },
  { category: "Enterprise", tools: "REST, GraphQL, Salesforce, SAP, HubSpot, JIRA" },
  { category: "Sicherheit", tools: "OAuth 2.0, API Keys, JWT, Audit Logging, Sandboxing" },
  { category: "Hosting", tools: "Docker, Kubernetes, EU-Server (Hetzner, OVH), On-Premise", logos: [{ slug: "docker", alt: "Docker" }, { slug: "kubernetes", alt: "Kubernetes" }] },
];

const audience = [
  { who: "Unternehmen mit KI-Chatbots", icon: Zap, what: "Geben Sie Ihrem Chatbot echte Handlungsfähigkeit: E-Mails senden, Termine buchen, CRM-Einträge anlegen, alles über standardisierte MCP-Tools, kontrolliert und lückenlos protokolliert." },
  { who: "Agentic-AI-Projekte", icon: Network, what: "MCP ist die ideale Grundlage für autonome AI Agents. Standardisierte Tool-Aufrufe, Ressourcen-Management und kontrollierte Ausführung machen komplexe Agent-Architekturen stabil und wartbar." },
  { who: "Datenschutz-sensible Branchen", icon: Lock, what: "Ärzte, Anwälte, Steuerberater und Finanzdienstleister: MCP Server auf eigener Infrastruktur mit voller Datenkontrolle, granularem Berechtigungsmanagement und vollständigem Audit-Trail." },
  { who: "IT-Abteilungen & CTOs", icon: Cpu, what: "Zukunftssichere KI-Infrastruktur ohne Vendor Lock-in: Ein MCP Server funktioniert heute mit Claude und morgen mit dem nächsten Modell, ganz ohne Neuentwicklung." },
];

const steps = [
  { step: "01", icon: Search, title: "Erstanalyse", time: "30 Minuten", desc: "Wir klären gemeinsam, welche Systeme und Prozesse sich für MCP eignen und welche Tools Ihr KI-Modell wirklich braucht." },
  { step: "02", icon: Settings, title: "Architektur & Planung", time: "Woche 1", desc: "Wir entwerfen die MCP-Architektur: Transport, Authentifizierung, Tool-Definitionen und Sicherheitskonzept, schriftlich festgehalten." },
  { step: "03", icon: FileText, title: "Entwicklung & Testing", time: "Woche 2 bis 6", desc: "Implementierung der Tools, Integration in Ihre Systeme und ausführliche Tests mit echten Szenarien aus Ihrem Alltag." },
  { step: "04", icon: Rocket, title: "Go-Live & Betrieb", time: "danach", desc: "Deployment auf Ihrer oder unserer EU-Infrastruktur, Schulung Ihrer Mitarbeiter und optionales Managed Hosting mit SLA." },
];

const whyUs = [
  { badge: "Early Adopter", title: "MCP-Expertise von Anfang an", desc: "Wir arbeiten seit der Veröffentlichung des Model Context Protocols produktiv mit MCP. Von einfachen Dateisystem-Tools bis zu komplexen Enterprise-Integrationen kennen wir das Protokoll in der Praxis." },
  { badge: "Hosting: AT / EU", title: "DSGVO-konform auf EU-Servern", desc: "Alle MCP Server laufen auf österreichischen oder EU-Servern. Granulare Zugriffskontrolle, Audit-Logging und Verschlüsselung sichern Datenschutz und Compliance ab." },
  { badge: "Flexibel", title: "Managed Service oder Self-Hosted", desc: "Sie entscheiden: Wir betreiben Ihren MCP Server als Managed Service mit SLA, oder Sie hosten selbst und erhalten von uns Entwicklung, Dokumentation und laufenden Support." },
];

const stats = [
  { value: "Offen", label: "Offener Standard, kein Vendor Lock-in" },
  { value: "Any LLM", label: "Claude, GPT, Llama, Mistral und lokal" },
  { value: "EU", label: "Server-Standort, volle DSGVO-Konformität" },
  { value: "JSON-RPC", label: "Standardisiertes Protokoll für jeden Aufruf" },
];

type RelatedService = { href: string; icon: LucideIcon; logo?: string; title: string; desc: string };

const relatedServices: RelatedService[] = [
  { href: "/agentic-ai", icon: Bot, title: "Agentic AI", desc: "Autonome AI Agents, die über MCP Server eigenständig Aufgaben in Ihren Systemen erledigen." },
  { href: "/ki-wissensdatenbank", icon: Brain, title: "KI Wissensdatenbank", desc: "RAG-Systeme, die über MCP-Tools Ihre Dokumente und internen Daten durchsuchen." },
  { href: "/n8n-automatisierung", icon: Network, logo: "n8n", title: "n8n Automatisierung", desc: "Workflow-Automatisierung mit n8n, ideale Ergänzung zu MCP-basierten AI Agents." },
];

// Weisse Box für echte, farbige Tool-Logos, damit sie auf hellem Grund sichtbar bleiben.
function LogoBox({
  slug,
  alt,
  className = "w-8 h-8 rounded-md",
  imgClassName = "w-5 h-5",
}: {
  slug: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <span className={`inline-flex items-center justify-center bg-white border border-border shrink-0 ${className}`}>
      <img src={`/img/logos/${slug}.svg`} alt={alt} className={`${imgClassName} object-contain`} />
    </span>
  );
}

export default function Page() {
  return (
    <>
      <Script id="faq-mcp-server" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-mcp-server" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                    MCP Server, Model Context Protocol
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Ein MCP Server verbindet Ihre KI mit <span className="text-primary">Tools &amp; Daten</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Das Model Context Protocol ist der offene Standard dafür, wie KI-Modelle wie Claude und GPT mit Ihren internen Systemen sprechen. Wir entwickeln und betreiben MCP Server, damit Ihre AI Agents nicht nur antworten, sondern auch handeln.
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
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-primary" /> EU-Hosting & On-Premise</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Hub visual: KI-Modell im Zentrum, verbunden mit Tools/Daten */}
                <Card className="border-2 shadow-xl shadow-primary/5">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="font-semibold text-sm">MCP als Hub</div>
                        <div className="text-xs text-muted-foreground">Ein Protokoll, viele Verbindungen</div>
                      </div>
                      <Badge variant="outline" className="rounded-full text-[10px] bg-primary/10 text-primary border-primary/20">Live</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
                      {/* connecting lines */}
                      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full text-primary" aria-hidden>
                        {hubNodes.map((n, i) => (
                          <line key={i} x1="50" y1="50" x2={n.x} y2={n.y} stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.35" strokeDasharray="2 2" />
                        ))}
                        {hubNodes.map((n, i) => (
                          <circle key={`d-${i}`} cx={n.x} cy={n.y} r="1.1" fill="currentColor" fillOpacity="0.5" />
                        ))}
                      </svg>

                      {/* tool nodes */}
                      {hubNodes.map((n, i) => {
                        const Icon = n.icon;
                        return (
                          <div
                            key={i}
                            className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-1.5 shadow-sm"
                            style={{ left: `${n.x}%`, top: `${n.y}%` }}
                          >
                            <Icon className="w-3.5 h-3.5 text-primary shrink-0" />
                            <span className="text-xs font-medium whitespace-nowrap">{n.label}</span>
                          </div>
                        );
                      })}

                      {/* central node */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                        <div className="w-24 h-24 rounded-2xl bg-primary text-white flex flex-col items-center justify-center shadow-lg shadow-primary/20">
                          <Cpu className="w-7 h-7 mb-1" />
                          <span className="text-[11px] font-semibold leading-tight">KI-Modell</span>
                          <span className="text-[9px] opacity-80">via MCP Server</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-[11px] text-center text-muted-foreground pt-5">
                      JSON-RPC 2.0, OAuth 2.0, Audit-Trail, EU-Server
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* STATS-BAND */}
          <section className="py-10 md:py-12 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-2 md:grid-cols-4 border-2 border-border rounded-2xl overflow-hidden bg-card">
                {stats.map((s, i) => (
                  <div key={i} className="p-6 text-center border-border [&:nth-child(odd)]:border-r [&:nth-child(-n+2)]:border-b md:border-r md:last:border-r-0 md:[&:nth-child(-n+2)]:border-b-0">
                    <div className="text-2xl md:text-3xl font-bold text-primary">{s.value}</div>
                    <div className="text-xs text-muted-foreground mt-2 leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WAS IST MCP (2col + Info-Card) */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Was ist MCP?</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Model Context Protocol, einfach erklärt</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Stellen Sie sich vor, Ihr KI-Assistent soll eine Anfrage aus dem CRM beantworten. Ohne Protokollstandard beginnen Sie für jede Integration von vorne: eigene API-Anbindung, eigene Sicherheitslogik, eigene Fehlerbehandlung. Das <strong className="text-foreground">Model Context Protocol</strong> löst dieses Problem einmalig und universell.
                    </p>
                    <p>
                      MCP folgt einem klaren Prinzip: Ein <strong className="text-foreground">MCP Server</strong> stellt Tools bereit und beschreibt sie maschinenlesbar. Ein <strong className="text-foreground">MCP Client</strong>, zum Beispiel Claude Desktop, verbindet sich mit dem Server. Das KI-Modell sieht die verfügbaren Tools, entscheidet, welches es aufruft, und der Server führt die Aktion kontrolliert aus. Das Modell selbst hat dabei keinen direkten Systemzugriff.
                    </p>
                    <p>
                      Der entscheidende Unterschied zu proprietären Ansätzen: MCP ist ein <strong className="text-foreground">offener Standard</strong>. Einmal entwickelt, funktioniert Ihr MCP Server mit Claude, GPT, Llama oder jedem anderen kompatiblen Modell. Kein Vendor Lock-in, keine doppelte Arbeit.
                    </p>
                    <p>
                      Für den DACH-Markt zählt ein weiterer Punkt: Der MCP Server läuft auf <strong className="text-foreground">Ihrer eigenen Infrastruktur</strong>. In Kombination mit lokalen LLMs wie Ollama verlassen keine Unternehmensdaten die EU.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Offener Standard</Badge>
                    <Badge variant="secondary" className="rounded-full">Herstellerunabhängig</Badge>
                    <Badge variant="secondary" className="rounded-full">On-Premise möglich</Badge>
                  </div>
                </div>

                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">MCP auf einen Blick</CardTitle>
                    <CardDescription>Was den Standard ausmacht.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {[
                      ["Standard von", "Anthropic, offen verfügbar"],
                      ["Protokoll", "JSON-RPC 2.0"],
                      ["Rollen", "MCP Client und MCP Server"],
                      ["Bausteine", "Tools, Resources, Prompts, Sampling"],
                      ["Modelle", "Claude, GPT, Llama, lokal via Ollama"],
                      ["Datenschutz", "DSGVO, EU-Hosting, On-Premise"],
                    ].map(([label, value]) => (
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

          {/* ARCHITEKTUR-DIAGRAMM (clean divs, vertikaler Flow) */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Architektur</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Wie ein MCP Server arbeitet</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Zwischen KI-Modell und Ihren Systemen sitzt der MCP Server als kontrollierte Vermittlungsschicht. Der Client spricht mit dem Modell, das Modell ruft Tools über JSON-RPC auf, und der Server entscheidet, ob und wie die Aktion ausgeführt wird.
                    </p>
                    <p>
                      Jeder Aufruf ist authentifiziert und wird protokolliert. So bleibt nachvollziehbar, welches Tool wann mit welchen Parametern lief. Genau diese Trennung macht KI im Unternehmen sicher beherrschbar.
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3 mt-6">
                    {[
                      { icon: KeyRound, t: "Authentifiziert", d: "OAuth 2.0, JWT, API Keys" },
                      { icon: ScrollText, t: "Protokolliert", d: "Lückenloser Audit-Trail" },
                      { icon: Lock, t: "Eingegrenzt", d: "Nur freigegebene Tools" },
                      { icon: Server, t: "Eigene Infrastruktur", d: "EU oder On-Premise" },
                    ].map(({ icon: Icon, t, d }, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-xl border border-border bg-background">
                        <Icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <div>
                          <div className="text-sm font-semibold">{t}</div>
                          <div className="text-xs text-muted-foreground">{d}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* vertikaler Flow ohne Pfeil-Icons */}
                <div className="mx-auto w-full max-w-md space-y-0">
                  {[
                    { label: "MCP Client", desc: "Claude Desktop, Cursor, Ihr Chatbot", cls: "bg-primary/10 text-primary border-primary/20" },
                    { connector: "JSON-RPC 2.0" },
                    { label: "MCP Server", desc: "Tools, Resources & Prompts, sichere Ausführung", cls: "bg-primary text-white border-primary", strong: true },
                    { connector: "Authentifiziert & geloggt" },
                    { label: "Ihre Systeme", desc: "CRM, ERP, Datenbank, APIs, E-Mail", cls: "bg-background border-border" },
                  ].map((row, i) =>
                    "connector" in row ? (
                      <div key={i} className="flex flex-col items-center py-1">
                        <span className="block w-px h-4 bg-primary/30" aria-hidden />
                        <span className="text-[11px] font-medium text-muted-foreground bg-white/70 rounded-full px-3 py-0.5 border border-border">
                          {row.connector}
                        </span>
                        <span className="block w-px h-4 bg-primary/30" aria-hidden />
                      </div>
                    ) : (
                      <div key={i} className={`rounded-xl border-2 px-5 py-4 ${row.cls}`}>
                        <div className={`text-sm font-bold ${row.strong ? "" : "text-foreground"}`}>{row.label}</div>
                        <div className={`text-xs mt-0.5 ${row.strong ? "opacity-90" : "text-muted-foreground"}`}>{row.desc}</div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* PROTOKOLL-BAUSTEINE (bento) */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Bausteine</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Mehr als nur Tool-Aufrufe</h2>
                <p className="text-lg text-muted-foreground">MCP umfasst fünf Bausteine, die zusammen eine saubere, kontrollierbare KI-Integration ergeben.</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {buildingBlocks.map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <Card key={i} className={`hover-lift border-2 ${i === 0 ? "lg:col-span-2 bg-primary/5 border-primary/20" : ""}`}>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <CardTitle className="text-lg">{b.name}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent><p className="text-muted-foreground leading-relaxed">{b.desc}</p></CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* LEISTUNGEN (bento) */}
          <section id="leistungen" className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">MCP Server: unsere Leistungen</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Von der ersten Tool-Definition bis zum laufenden Betrieb auf EU-Infrastruktur.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {services.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <Card key={i} className={`hover-lift border-2 ${s.featured ? "lg:col-span-2 bg-primary/5 border-primary/20" : ""}`}>
                      <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{s.title}</CardTitle>
                      </CardHeader>
                      <CardContent><p className="text-muted-foreground leading-relaxed">{s.desc}</p></CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* VERGLEICH (full-width table) */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Vergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">MCP, REST-API oder Function Calling?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Drei Wege, ein KI-Modell mit Ihren Systemen zu verbinden. Nur einer ist offen, sicher und modellunabhängig.</p>
              </div>
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[26%] font-bold text-foreground">Kriterium</TableHead>
                      <TableHead className="text-primary font-bold">MCP</TableHead>
                      <TableHead className="text-muted-foreground">REST-API</TableHead>
                      <TableHead className="text-muted-foreground">Function Calling</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparison.map((r, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium text-sm">{r.feature}</TableCell>
                        <TableCell className="text-sm text-primary font-medium">
                          <span className="inline-flex items-start gap-1.5"><Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />{r.mcp}</span>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          <span className="inline-flex items-start gap-1.5"><X className="w-4 h-4 text-muted-foreground/50 mt-0.5 shrink-0" />{r.rest}</span>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          <span className="inline-flex items-start gap-1.5"><X className="w-4 h-4 text-muted-foreground/50 mt-0.5 shrink-0" />{r.func}</span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </section>

          {/* ANWENDUNGSFAELLE (2col + Tabs) */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Anwendungsfälle</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was MCP-Tools in der Praxis leisten</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Ein KI-Modell, das nur Texte generiert, löst keine echten Geschäftsprobleme. Erst wenn es über <strong className="text-foreground">MCP-Tools</strong> in Ihre Systeme eingreifen kann, wird es zum produktiven Werkzeug.
                    </p>
                    <p>
                      Der Unterschied im Alltag ist spürbar: Statt einer vagen Antwort auf die Frage nach dem aktuellen Lagerbestand eines Artikels bekommt Ihr Mitarbeiter die tatsächliche Zahl, direkt aus dem ERP abgerufen, gefiltert und formatiert. Kein manuelles Nachschlagen, kein Systemwechsel.
                    </p>
                    <p>
                      Dieselbe Logik gilt für Vertrieb, Dokumentenverarbeitung, Kommunikation und den IT-Betrieb. Wählen Sie einen Bereich, um typische Szenarien aus unseren Projekten zu sehen, sortiert nach dem System hinter dem jeweiligen Tool.
                    </p>
                  </div>
                  <div className="mt-6">
                    <Button asChild>
                      <a href="#contact">Anwendungsfall besprechen</a>
                    </Button>
                  </div>
                </div>

                <Tabs defaultValue="crm">
                  <TabsList className="flex flex-wrap h-auto gap-1 mb-4 bg-transparent p-0">
                    {useCaseTabs.map((tab) => {
                      const Icon = tab.icon;
                      return (
                        <TabsTrigger key={tab.value} value={tab.value} className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border">
                          <Icon className="w-4 h-4 mr-1.5" />{tab.label}
                        </TabsTrigger>
                      );
                    })}
                  </TabsList>
                  {useCaseTabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <TabsContent key={tab.value} value={tab.value}>
                        <Card className="border-2">
                          <CardHeader>
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Icon className="w-5 h-5 text-primary" />
                              </div>
                              <CardTitle className="text-lg">{tab.head}</CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-3">
                              {tab.items.map((item, j) => (
                                <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </TabsContent>
                    );
                  })}
                </Tabs>
              </div>
            </div>
          </section>

          {/* TECH STACK + FUER WEN (2col) */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Tech Stack</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Womit wir MCP Server bauen</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Wir nutzen das offizielle <strong className="text-foreground">MCP SDK</strong> in Python und TypeScript, die von Anthropic gepflegten Referenzimplementierungen. Daneben setzen wir auf bewährte Enterprise-Middleware und EU-gehostete Infrastruktur, ohne Kompromisse bei der Datensouveränität.
                  </p>
                  <div className="grid gap-2.5">
                    {stack.map(({ category, tools, logos }, i) => (
                      <div key={i} className="flex gap-4 p-3 bg-muted/50 rounded-lg">
                        <div className="text-sm font-semibold text-primary min-w-[130px] shrink-0">{category}</div>
                        <div className="min-w-0">
                          {logos && logos.length > 0 && (
                            <div className="flex flex-wrap items-center gap-1.5 mb-2">
                              {logos.map((l) => (
                                <LogoBox key={l.slug} slug={l.slug} alt={l.alt} />
                              ))}
                            </div>
                          )}
                          <div className="text-sm text-muted-foreground">{tools}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Für wen?</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Wer braucht einen MCP Server?</h2>
                  <div className="space-y-4">
                    {audience.map(({ who, icon: Icon, what }, i) => (
                      <div key={i} className="flex gap-4 p-4 bg-background rounded-xl border border-border hover-lift">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold mb-1">{who}</div>
                          <div className="text-sm text-muted-foreground leading-relaxed">{what}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ABLAUF (Timeline) */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Der Ablauf</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Von der Idee zum laufenden MCP Server</h2>
                <p className="text-lg text-muted-foreground">Vier Schritte, transparent und ohne Überraschungen. Pilotphase inklusive, bevor der Server in Produktion geht.</p>
              </div>
              <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                <div className="hidden lg:block absolute top-8 left-0 right-0 h-px pointer-events-none" aria-hidden>
                  <div className="mx-auto w-3/4 h-px bg-gradient-to-r from-primary/40 via-primary/25 to-primary/40" />
                </div>
                {steps.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.step} className="relative flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-5 shadow-lg shadow-primary/20 relative z-10 ring-8 ring-background">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div className="text-xs font-bold text-primary mb-1 tracking-wide">SCHRITT {s.step}, {s.time}</div>
                      <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{s.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* WARUM KI KANZLEI */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum KI Kanzlei?</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">MCP-Expertise im DACH-Raum</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Wir setzen MCP seit dem Launch des Protokolls produktiv ein und kennen die Fallstricke aus echten Projekten.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {whyUs.map(({ badge, title, desc }, i) => (
                  <Card key={i} className="hover-lift border-2 text-center">
                    <CardHeader>
                      <Badge className="w-fit mx-auto rounded-full mb-2">{badge}</Badge>
                      <CardTitle className="text-lg">{title}</CardTitle>
                    </CardHeader>
                    <CardContent><p className="text-muted-foreground text-sm leading-relaxed">{desc}</p></CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Häufige Fragen zu MCP Server &amp; Model Context Protocol</h2>
                <p className="text-lg text-muted-foreground">Was Entscheider und Entwickler am häufigsten fragen, ehrlich beantwortet.</p>
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
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Mehr Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zum MCP Server</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {relatedServices.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <a key={i} href={s.href} className="group block">
                      <Card className="h-full border-2 hover-lift group-hover:border-primary/40">
                        <CardHeader>
                          {s.logo ? (
                            <LogoBox slug={s.logo} alt={s.title} className="w-12 h-12 rounded-xl mb-2" imgClassName="w-7 h-7" />
                          ) : (
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${serviceLogos[s.href] ? "bg-white border border-border" : "bg-primary/10"}`}>{serviceLogos[s.href] ? <img src={`/img/logos/${serviceLogos[s.href]}.svg`} alt={s.title} className="w-7 h-7 object-contain" /> : <Icon className="w-6 h-6 text-primary" />}</div>
                          )}
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
