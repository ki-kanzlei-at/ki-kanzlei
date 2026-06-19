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
  Check,
  X,
  Link2,
  FileSearch,
  Bot,
  GitBranch,
  Database,
  Wrench,
  Activity,
  MessageSquare,
  Cpu,
  Sparkles,
  ShieldCheck,
  Server,
  MapPin,
  Scale,
  Building2,
  Hotel,
  Zap,
  Stethoscope,
  FileText,
  Scissors,
  Binary,
  Search,
  ClipboardList,
  Code2,
  Rocket,
  Network,
  Terminal,
  Layers,
  Lock,
  Gauge,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "LangChain Entwicklung, RAG-Systeme & KI-Agenten",
  description:
    "LangChain-Anwendungen, RAG-Systeme, KI-Agenten und LangGraph-Workflows aus einer Hand. Für Unternehmen im DACH-Raum, DSGVO-konform auf EU-Infrastruktur, mit über 100 Integrationen und produktionsreifer Architektur.",
  keywords:
    "LangChain, LangChain Entwicklung, LangChain RAG, LangChain Agent, RAG System, Vector Database, LangGraph, LangSmith, LLM Framework, KI Anwendung, KI Entwicklung, LangChain Python, LangChain Enterprise, LangChain DSGVO, LangChain Österreich, LangChain DACH, LangChain Deutschland, LangChain Schweiz, KI Entwicklung DACH",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/langchain" },
};

const faqs = [
  {
    q: "Was ist LangChain und wofür wird es eingesetzt?",
    a: "LangChain ist ein Open-Source-Framework, das die Entwicklung von Anwendungen auf Basis großer Sprachmodelle (LLMs) erheblich vereinfacht. Es liefert standardisierte Bausteine, sogenannte Chains, Prompts, Retrievers, Tools und Memory, mit denen sich RAG-Systeme, intelligente Chatbots und autonome KI-Agenten zusammensetzen lassen, ohne jede LLM-Integration von Grund auf neu zu programmieren. Wir nutzen LangChain in der Praxis, um Unternehmensdokumente als durchsuchbare Wissensbasis bereitzustellen, Vertriebs- und Backoffice-Prozesse zu automatisieren oder Verträge automatisch zu analysieren.",
  },
  {
    q: "Was ist der Unterschied zwischen LangChain und LlamaIndex?",
    a: "Beide Frameworks decken RAG und Dokumentensuche ab und überschneiden sich dort stark. Der entscheidende Unterschied: LangChain ist breiter aufgestellt, mit über 100 LLM-Integrationen, einem vollständigen Agenten-Framework und LangGraph für zustandsbehaftete Workflows. LlamaIndex glänzt bei der Indexierung sehr großer Dokumentenmengen, hat aber ein schlankeres Ökosystem. Für die meisten Unternehmensanwendungen im DACH-Raum wählen wir LangChain, weil es Flexibilität beim LLM-Wechsel und produktionsreifes Monitoring mit LangSmith bietet. In Einzelfällen kombinieren wir beide.",
  },
  {
    q: "Was ist LangChain RAG und wie funktioniert ein RAG-System?",
    a: "RAG steht für Retrieval-Augmented Generation. Ein LangChain RAG-System nimmt Ihre Dokumente, also PDFs, Word-Dateien, Confluence-Wikis oder Datenbanken, zerlegt sie in sinnvolle Abschnitte, wandelt sie in Vektoren um und speichert sie in einer Vektordatenbank wie Qdrant oder pgvector. Stellt ein Nutzer eine Frage, sucht das System zuerst die passenden Abschnitte und übergibt sie als Kontext an das Sprachmodell. So antwortet das Modell präzise auf Basis Ihrer echten Daten, statt zu halluzinieren. Das ist der Kernunterschied zum Fine-Tuning.",
  },
  {
    q: "Kann man LangChain DSGVO-konform einsetzen?",
    a: "Ja, uneingeschränkt. LangChain ist ein Framework, kein Cloud-Dienst, und läuft vollständig auf Ihrer eigenen Infrastruktur. In Kombination mit lokal betriebenen Modellen über Ollama oder vLLM verlässt kein Datenbyte Ihre Umgebung. Wir betreiben LangChain-Anwendungen auf österreichischen oder deutschen EU-Servern, mit lokalen Vektordatenbanken und vollständiger Datenkontrolle, abgesichert per Auftragsverarbeitungsvertrag. Das ist besonders für Kanzleien, Steuerberater und Finanzdienstleister im DACH-Raum entscheidend.",
  },
  {
    q: "LangChain mit RAG oder Fine-Tuning, was ist sinnvoller?",
    a: "Für die meisten Unternehmen im Mittelstand ist LangChain mit RAG die bessere Wahl. Fine-Tuning erfordert große Mengen beschrifteter Trainingsdaten, rechenintensive GPU-Ressourcen und wird obsolet, sobald sich Ihre Dokumente ändern. Ein RAG-System lernt dagegen in Echtzeit, neue Dokumente werden einfach eingepflegt. Fine-Tuning lohnt sich vor allem dann, wenn Sie Stil oder Verhalten des Modells grundlegend anpassen wollen, nicht um Wissen hinzuzufügen. Häufig kombinieren wir beides.",
  },
  {
    q: "Was ist der Unterschied zwischen LangChain und LangGraph?",
    a: "LangChain verbindet Bausteine zu Ketten, also weitgehend linearen Abläufen. LangGraph erweitert das um echte Graphen: Schleifen, Verzweigungen, parallele Ausführung und Haltepunkte für menschliche Freigaben. Sobald mehrere spezialisierte Agenten koordiniert werden müssen oder ein Prozess Zustand über mehrere Schritte halten soll, setzen wir LangGraph ein. Für einfache Frage-Antwort-Szenarien reicht klassisches LangChain völlig.",
  },
  {
    q: "Welche Vektordatenbank empfehlen Sie?",
    a: "Das hängt von Datenmenge, Hosting und Budget ab. Für DSGVO-sensible Projekte mit eigener Infrastruktur empfehlen wir Qdrant oder pgvector, weil beide on-premise laufen und sich sauber sichern lassen. Für sehr große oder hybride Suchszenarien kommen Weaviate oder Chroma infrage. Wir wählen die Datenbank im Assessment passend zu Ihrem Stack, statt eine Standardlösung überzustülpen.",
  },
  {
    q: "Wie lange dauert die Entwicklung einer LangChain-Anwendung?",
    a: "Ein einfaches RAG-System oder einen LangChain-Chatbot machen wir in zwei bis drei Wochen produktionsreif. Komplexere Anwendungen mit mehreren Agenten, eigenen Tools und ERP-Anbindung dauern vier bis acht Wochen. Wir starten immer mit einem kostenlosen Erstgespräch, in dem wir Ihren Use Case bewerten, bevor eine Zeile Code entsteht. In der Pilotphase erhalten Sie einen funktionierenden Prototypen, den Sie sofort testen können.",
  },
  {
    q: "Können wir die Lösung später selbst warten?",
    a: "Ja, das ist ausdrücklich unser Anspruch. Wir bauen wartbare, dokumentierte Architektur statt undurchsichtiger Prototypen, schulen Ihr Team und übergeben den vollständigen Quellcode. Auf Wunsch übernehmen wir den laufenden Betrieb inklusive Monitoring über LangSmith und regelmäßiger Optimierung, Sie entscheiden, wie viel Sie intern halten möchten.",
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
  name: "LangChain Entwicklung, RAG-Systeme & KI-Agenten",
  serviceType: "LangChain, RAG, KI-Agenten, LangGraph",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "Entwicklung von LangChain-Anwendungen, RAG-Systemen, KI-Agenten und LangGraph-Workflows für Unternehmen im DACH-Raum. DSGVO-konform, EU-gehostet, mit über 100 Integrationen.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const stats = [
  ["100+", "LLM-Integrationen"],
  ["50+", "Vektordatenbanken"],
  ["100k+", "GitHub-Stars"],
  ["DSGVO", "EU-Hosting möglich"],
];

const overview = [
  ["Sprachen", "Python & TypeScript"],
  ["Kernbausteine", "Chains, Tools, Memory, Retriever"],
  ["Anbieter", "über 100 LLMs, frei wechselbar"],
  ["Workflows", "LangGraph, zustandsbehaftet"],
  ["Monitoring", "LangSmith Tracing & Eval"],
  ["Hosting", "On-Premise, AT/EU, DSGVO"],
];

const bento: { span: string; accent?: boolean; icon: typeof Link2; logo?: string; logoAlt?: string; badge: string; title: string; text: string }[] = [
  {
    span: "md:col-span-2",
    accent: true,
    icon: Link2,
    badge: "Das Fundament",
    title: "Chains & Bausteine",
    text: "Prompts, LLM-Aufrufe, Parser und Retriever werden zu wiederverwendbaren Ketten verbunden. Statt fragiler Skripte entsteht eine saubere, testbare Pipeline, die Sie später erweitern statt neu schreiben.",
  },
  {
    span: "",
    icon: FileSearch,
    badge: "RAG",
    title: "RAG-Systeme",
    text: "Ihre Dokumente werden zur intelligenten Wissensbasis. Antworten auf Basis Ihrer echten Daten, ohne Halluzination.",
  },
  {
    span: "",
    icon: Bot,
    badge: "Autonomie",
    title: "KI-Agenten",
    text: "ReAct- und Plan-and-Execute-Agenten recherchieren, rufen Tools auf und erledigen mehrstufige Aufgaben selbstständig.",
  },
  {
    span: "md:col-span-2",
    accent: true,
    icon: GitBranch,
    logo: "/img/logos/langgraph.svg",
    logoAlt: "LangGraph",
    badge: "Orchestrierung",
    title: "LangGraph Workflows",
    text: "Echte Graphen statt linearer Ketten: Schleifen, Bedingungen, parallele Ausführung und Haltepunkte für menschliche Freigaben. Ideal, um mehrere spezialisierte Agenten zu koordinieren, etwa Recherche, Entwurf und Qualitätsprüfung in einem Prozess.",
  },
  {
    span: "",
    icon: Database,
    badge: "Kontext",
    title: "Memory",
    text: "Gesprächsverlauf, Nutzerprofile und Zwischenergebnisse bleiben über mehrere Schritte hinweg erhalten.",
  },
  {
    span: "",
    icon: Wrench,
    badge: "Anbindung",
    title: "Custom Tools",
    text: "Eigene Funktionen, APIs, Datenbanken und ERP-Systeme werden als Werkzeuge eingebunden und sicher aufgerufen.",
  },
  {
    span: "",
    icon: Activity,
    badge: "Betrieb",
    title: "LangSmith",
    text: "Vollständiges Tracing, Evaluierung und Debugging. Sie sehen genau, was Ihr System tut und wo es optimiert wird.",
  },
];

const indexSteps = [
  { icon: FileText, title: "Dokumente", sub: "PDF, Wiki, DB" },
  { icon: Scissors, title: "Chunking", sub: "sinnvolle Abschnitte" },
  { icon: Binary, title: "Embeddings", sub: "Vektorisierung" },
  { icon: Database, title: "Vektor-DB", sub: "Qdrant, pgvector" },
];

const querySteps = [
  { icon: MessageSquare, title: "Nutzerfrage", sub: "frei formuliert" },
  { icon: Search, title: "Semantische Suche", sub: "Top-Treffer" },
  { icon: Layers, title: "Kontext", sub: "relevante Abschnitte" },
  { icon: Cpu, title: "LLM", sub: "Antwortgenerierung" },
  { icon: Sparkles, title: "Antwort", sub: "mit Quellen" },
];

const comparison = [
  {
    feature: "RAG-Systeme",
    langchain: "Vollständig, inkl. Multi-Vector & Hybrid Search",
    llamaindex: "Vollständig, stark bei Indexierung",
    diy: "Manueller Aufwand, keine Bausteine",
  },
  {
    feature: "Agenten-Framework",
    langchain: "ReAct, Plan-and-Execute, Custom Agents",
    llamaindex: "Begrenzt (ReAct)",
    diy: "Von Grund auf selbst bauen",
  },
  {
    feature: "LLM-Anbieter",
    langchain: "100+ (OpenAI, Anthropic, Ollama, HuggingFace)",
    llamaindex: "40+",
    diy: "Jeweils manuell integrieren",
  },
  {
    feature: "Vektordatenbanken",
    langchain: "50+ (Qdrant, Weaviate, pgvector, Chroma)",
    llamaindex: "30+",
    diy: "Keine native Integration",
  },
  {
    feature: "Komplexe Workflows",
    langchain: "LangGraph, zustandsbehaftete Graphen",
    llamaindex: "Nicht verfügbar",
    diy: "Eigene Lösung nötig",
  },
  {
    feature: "Monitoring & Tracing",
    langchain: "LangSmith, vollständig nativ",
    llamaindex: "Extern über OpenTelemetry",
    diy: "Eigenes Logging aufbauen",
  },
  {
    feature: "DSGVO-Hosting",
    langchain: "Vollständig on-premise möglich",
    llamaindex: "Vollständig on-premise möglich",
    diy: "Abhängig vom API-Anbieter",
  },
  {
    feature: "Community & Ökosystem",
    langchain: "Größte LLM-Community, 100k+ Stars",
    llamaindex: "Wachsend, schlanker",
    diy: "Keine Community",
  },
];

const useCases = [
  {
    value: "recht",
    label: "Kanzleien",
    icon: Scale,
    head: "Vertragsanalyse & Mandantenanfragen mit LangChain",
    text: "Anwaltskanzleien setzen LangChain RAG ein, um Verträge in Sekunden zu durchleuchten, einschlägige Urteile aus der internen Sammlung zu finden und Standardanfragen vorzuqualifizieren. Das Modell kennt ausschließlich Ihre Dokumente, es gibt keinen Datenaustausch mit externen Servern und damit kein DSGVO-Problem.",
    bullets: ["Vertragsanalyse & Klausel-Extraktion", "Mandantenanfragen vorqualifizieren", "Urteilsdatenbank durchsuchen", "Schriftsatz-Entwürfe erstellen"],
  },
  {
    value: "steuer",
    label: "Steuerberater",
    icon: Building2,
    head: "Belegverarbeitung & steuerliche Recherche automatisieren",
    text: "Steuerberatungskanzleien profitieren von Agenten, die Belege klassifizieren, Buchungssätze vorschlagen und Fristen überwachen. Kombiniert mit einer RAG-Wissensbasis für österreichisches und deutsches Steuerrecht liefert das System präzise Einschätzungen, DSGVO-konform auf eigener Infrastruktur.",
    bullets: ["Belegklassifizierung & Buchungsvorschläge", "Steuerrechtliche Wissensbasis (RAG)", "Fristenüberwachung mit Alerts", "Mandantenkommunikation unterstützen"],
  },
  {
    value: "it",
    label: "IT & Software",
    icon: Code2,
    head: "LLM-Features in Ihr Produkt oder Ihre Infrastruktur integrieren",
    text: "Entwicklungsteams nutzen LangChain als Backend für KI-Features: Code-Review-Assistenten, interne Entwickler-Chatbots oder automatisierte Incident-Analysen. LangGraph ermöglicht komplexe Workflows mit Freigabelogik und parallelen Agenten, produktionsreif und mit vollem Monitoring.",
    bullets: ["Code-Review & Doku-Assistent", "Incident-Analyse & On-Call-Support", "Interne Developer-Chatbots", "LLM-Features im SaaS-Produkt"],
  },
  {
    value: "vertrieb",
    label: "Vertrieb",
    icon: Zap,
    head: "Lead-Qualifizierung & Angebote beschleunigen",
    text: "Vertriebsteams sparen täglich Stunden, wenn Agenten eingehende Anfragen vorqualifizieren, CRM-Einträge befüllen und erste Angebotsentwürfe aus dem Produktkatalog erstellen. Der Vertriebler entscheidet, der Agent arbeitet vor.",
    bullets: ["Anfragen automatisch vorqualifizieren", "CRM-Einträge befüllen (HubSpot, Salesforce)", "Angebote aus Katalogen erstellen", "Follow-up-Mails personalisiert versenden"],
  },
  {
    value: "hotel",
    label: "Hotellerie",
    icon: Hotel,
    head: "Gästekommunikation & Buchungsanfragen entlasten",
    text: "Hotels und Gastronomiebetriebe setzen LangChain-Chatbots ein, die Verfügbarkeitsanfragen beantworten, Sonderwünsche weiterleiten und Bewertungen auswerten. Der Chatbot kennt Ihr Haus, Ihre Preise und Ihre Policies und antwortet in der Sprache des Gastes.",
    bullets: ["Anfragen in 5+ Sprachen", "Verfügbarkeit & Preise in Echtzeit", "Sonderwünsche kategorisieren", "Gästebewertungen zusammenfassen"],
  },
  {
    value: "gesundheit",
    label: "Gesundheit",
    icon: Stethoscope,
    head: "Wissensbasis & Aufnahme im Gesundheitswesen",
    text: "Praxen und Einrichtungen nutzen RAG-Systeme als internen Wissensassistenten für Leitlinien, Abrechnungsfragen und Abläufe. Mit lokal betriebenen Modellen bleiben sensible Daten vollständig im Haus, eine Voraussetzung im Gesundheitsbereich.",
    bullets: ["Interner Leitlinien-Assistent", "Abrechnungs- & Prozessfragen", "Lokale LLMs, keine Datenweitergabe", "Strukturierte Aufnahme von Anliegen"],
  },
];

const techStack: { icon: typeof Database; label: string; tools: string; logo?: string; alt?: string }[] = [
  { icon: Database, label: "Vektordatenbanken", tools: "Qdrant, Weaviate, pgvector, Chroma", logo: "/img/logos/qdrant.svg", alt: "Qdrant" },
  { icon: Cpu, label: "LLM-Anbieter", tools: "OpenAI, Anthropic, Ollama, vLLM, HuggingFace", logo: "/img/logos/anthropic.svg", alt: "Anthropic" },
  { icon: Workflow, label: "Orchestrierung", tools: "LangGraph, n8n, Airflow, Celery", logo: "/img/logos/langgraph.svg", alt: "LangGraph" },
  { icon: Activity, label: "Monitoring", tools: "LangSmith, Langfuse, OpenTelemetry" },
  { icon: GitBranch, label: "Deployment", tools: "Docker, Kubernetes, FastAPI, LangServe", logo: "/img/logos/docker.svg", alt: "Docker" },
  { icon: Server, label: "Hosting (EU)", tools: "Hetzner, OVH, AWS EU, On-Premise AT/DE" },
];

const reasons = [
  { icon: Layers, badge: "Erfahrung", title: "LangChain aus realen Projekten", desc: "Wir arbeiten seit den frühen Versionen produktiv mit LangChain. Hunderte Chains, RAG-Systeme und Agenten, wir kennen die Best Practices und die Fallstricke." },
  { icon: Lock, badge: "Hosting AT/EU", title: "DSGVO by Design", desc: "Alle Anwendungen laufen auf österreichischen oder EU-Servern. Auf Wunsch mit lokalen LLMs über Ollama oder vLLM, sodass kein Datenbyte Ihre Kontrolle verlässt." },
  { icon: Gauge, badge: "Full-Service", title: "Analyse bis Betrieb", desc: "Erstgespräch, Assessment, Entwicklung, Testing und Betrieb aus einer Hand. Keine Prototypen für die Schublade, sondern Lösungen, die im Alltag ankommen." },
];

const timeline = [
  { step: "01", icon: Search, title: "Kostenlose Erstanalyse", time: "30 Minuten", desc: "Wir klären Ihren Use Case, sichten Datenquellen und identifizieren den Engpass, den die LangChain-Lösung beseitigen soll. Ohne Verpflichtung und ohne Vorbereitung Ihrerseits." },
  { step: "02", icon: ClipboardList, title: "Assessment & Architektur", time: "Woche 1", desc: "Datenaudit, Wahl von LLM, Vektordatenbank und Stack, ROI-Kalkulation und Sicherheitskonzept. Sie erhalten eine klare Architektur, bevor entwickelt wird." },
  { step: "03", icon: Code2, title: "Implementierung & Pilot", time: "Woche 2 bis 4", desc: "Wir bauen RAG, Chains oder Agenten, binden Ihre Systeme an und richten Evaluierung über LangSmith ein. Sie testen einen funktionierenden Prototypen mit echten Daten." },
  { step: "04", icon: Rocket, title: "Go-Live & Betrieb", time: "ab Woche 4", desc: "Deployment auf EU-Infrastruktur, Monitoring, Schulung Ihres Teams und laufende Optimierung. Auf Wunsch mit Wartungsvertrag, auf Wunsch in Ihre Hand übergeben." },
];

const related = [
  { href: "/ki-wissensdatenbank", icon: FileSearch, title: "KI Wissensdatenbank", desc: "Ihre Unternehmensdaten als durchsuchbare RAG-Wissensbasis, DSGVO-konform aufgebaut." },
  { href: "/agentic-ai", icon: Bot, title: "Agentic AI", desc: "Autonome KI-Agenten, die Aufgaben end-to-end erledigen, orchestriert mit LangGraph." },
  { href: "/private-ai", icon: Lock, title: "Private AI & Ollama", desc: "Lokale LLMs ohne Datenweitergabe, on-premise und vollständig in Ihrer Kontrolle." },
  { href: "/mcp-server", icon: Terminal, title: "MCP Server", desc: "Tools und Datenquellen sauber an Ihre KI anbinden, standardisiert über das Model Context Protocol." },
  { href: "/n8n-automatisierung", icon: Network, title: "n8n Automatisierung", desc: "Ergebnisse Ihrer LangChain-Agenten automatisch mit CRM, Kalender und Tools verbinden." },
  { href: "/prompt-engineering", icon: MessageSquare, title: "Prompt Engineering", desc: "Robuste, getestete Prompts als Fundament jeder zuverlässigen LangChain-Anwendung." },
];

function GraphNode({ icon: Icon, title, sub, accent = false }: { icon: typeof Link2; title: string; sub: string; accent?: boolean }) {
  return (
    <div className={`flex items-center gap-3 rounded-xl border-2 px-4 py-3 ${accent ? "border-primary/40 bg-primary/5" : "border-border bg-background"}`}>
      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div className="min-w-0">
        <div className="text-sm font-semibold leading-tight">{title}</div>
        <div className="text-[11px] text-muted-foreground leading-tight">{sub}</div>
      </div>
    </div>
  );
}

function LogoBox({ src, alt, box = "w-11 h-11 rounded-xl", img = "w-6 h-6" }: { src: string; alt: string; box?: string; img?: string }) {
  return (
    <div className={`${box} bg-white border border-border flex items-center justify-center shrink-0`}>
      <img src={src} alt={alt} className={`${img} object-contain`} />
    </div>
  );
}

export default function Page() {
  return (
    <>
      <Script id="faq-langchain" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-langchain" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                    LangChain, RAG, KI-Agenten
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-primary">LangChain</span>-Anwendungen entwickeln lassen, von RAG bis Agent
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    LangChain ist das meistgenutzte LLM-Framework der Welt. Wir bauen damit RAG-Systeme, KI-Agenten und LangGraph-Workflows für Ihr Unternehmen, DSGVO-konform auf EU-Infrastruktur, mit über 100 Integrationen und produktionsreifer Architektur.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Erstgespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#vergleich">LangChain vs. LlamaIndex</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-primary" /> EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Bespoke hero visual: Komponenten-Graph */}
                <Card className="border-2 shadow-xl shadow-primary/5">
                  <CardHeader className="border-b border-border py-4">
                    <div className="flex items-center gap-3">
                      <LogoBox src="/img/logos/langchain.svg" alt="LangChain" box="w-10 h-10 rounded-lg" img="w-6 h-6" />
                      <div>
                        <div className="font-semibold text-sm">LangChain Pipeline</div>
                        <div className="text-xs text-muted-foreground">Komponenten einer Chain</div>
                      </div>
                      <Badge variant="outline" className="ml-auto rounded-full text-[10px] bg-primary/10 text-primary border-primary/20">Chain</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6 pb-6">
                    <div className="flex flex-col items-center">
                      {/* Prompt */}
                      <div className="w-full max-w-[240px]">
                        <GraphNode icon={MessageSquare} title="Prompt" sub="Template + Variablen" />
                      </div>
                      <div className="w-px h-7 bg-primary/30" aria-hidden />
                      {/* Memory - LLM - Tools */}
                      <div className="flex items-stretch justify-center w-full gap-0">
                        <div className="flex-1 flex items-center justify-end">
                          <GraphNode icon={Database} title="Memory" sub="Kontext" />
                        </div>
                        <div className="self-center w-5 h-px bg-primary/30 shrink-0" aria-hidden />
                        <div className="shrink-0">
                          <GraphNode icon={Cpu} title="LLM" sub="frei wählbar" accent />
                        </div>
                        <div className="self-center w-5 h-px bg-primary/30 shrink-0" aria-hidden />
                        <div className="flex-1 flex items-center justify-start">
                          <GraphNode icon={Wrench} title="Tools" sub="APIs & Funktionen" />
                        </div>
                      </div>
                      <div className="w-px h-7 bg-primary/30" aria-hidden />
                      {/* Output */}
                      <div className="w-full max-w-[240px]">
                        <GraphNode icon={Sparkles} title="Antwort" sub="strukturiert, mit Quellen" />
                      </div>
                    </div>
                    <div className="text-[11px] text-center text-muted-foreground pt-5">
                      Orchestriert von LangChain, skaliert mit LangGraph
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* STATS BAND */}
          <section className="py-12">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border-2 border-border rounded-2xl overflow-hidden">
                {stats.map(([v, l], i) => (
                  <div key={i} className="bg-card p-6 md:p-8 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary">{v}</div>
                    <div className="text-sm text-muted-foreground mt-2">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* DEFINITION 2col + Info-Card */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Kurz erklärt</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Warum LangChain der De-facto-Standard für LLM-Anwendungen ist</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      <strong className="text-foreground">LangChain</strong> abstrahiert die Komplexität moderner KI-Entwicklung. Statt jeden LLM-Aufruf, jede Prompt-Verwaltung und jede Retrieval-Logik von Hand zu programmieren, kombinieren Entwickler standardisierte Bausteine, also Chains, Prompts, Retriever, Tools und Memory, zu vollständigen Anwendungen in Python oder TypeScript.
                    </p>
                    <p>
                      Der entscheidende Vorteil für Unternehmen liegt in der <strong className="text-foreground">Herstellerunabhängigkeit</strong>. Erhöht ein Anbieter die Preise, wechseln Sie auf ein anderes Modell oder ein lokal betriebenes Llama, ohne Ihren Anwendungscode anzufassen. Zusammen mit LangGraph für komplexe Workflows und LangSmith für Monitoring wird LangChain so zur vollständigen Plattform für den Unternehmenseinsatz.
                    </p>
                    <p>
                      Als KI-Agentur im DACH-Raum entwickeln wir LangChain-Lösungen für Kanzleien, Steuerberater, IT-Unternehmen und den Mittelstand, mit klarem Fokus auf DSGVO-konformes EU-Hosting und wartbare Architektur, die Ihre Teams langfristig selbst bedienen.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">LLM Framework</Badge>
                    <Badge variant="secondary" className="rounded-full">Open Source</Badge>
                    <Badge variant="secondary" className="rounded-full">Python & TypeScript</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">LangChain auf einen Blick</CardTitle>
                    <CardDescription>Die wichtigsten Eckdaten im Überblick.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {overview.map(([label, value]) => (
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

          {/* BENTO: Ökosystem */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Das Ökosystem</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Alle Bausteine, die wir für Sie kombinieren</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Von der einfachen Chain bis zum vielschichtigen Multi-Agent-Graph, alles aus einem zusammenhängenden Ökosystem.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-4 auto-rows-fr">
                {bento.map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <Card key={i} className={`hover-lift border-2 ${b.span} ${b.accent ? "bg-primary/5 border-primary/20" : ""}`}>
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-3">
                          {b.logo ? (
                            <LogoBox src={b.logo} alt={b.logoAlt ?? b.title} box="w-11 h-11 rounded-xl" img="w-6 h-6" />
                          ) : (
                            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                          )}
                          <div>
                            <Badge variant="outline" className="rounded-full text-[10px] mb-1 bg-primary/10 text-primary border-primary/20">{b.badge}</Badge>
                            <CardTitle className="text-lg leading-tight">{b.title}</CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent><p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p></CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* RAG DIAGRAMM (clean, via divs) */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">So funktioniert RAG</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Vom Dokument zur belegten Antwort</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Retrieval-Augmented Generation in zwei Phasen: einmalige Indexierung Ihrer Daten, dann Antworten in Echtzeit.</p>
              </div>

              <Card className="border-2 p-5 md:p-8 space-y-8">
                {/* Phase 1: Indexierung */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="rounded-full text-xs">Phase 1</Badge>
                    <span className="text-sm font-semibold text-foreground">Indexierung, einmalig pro Datenbestand</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-0">
                    {indexSteps.map((s, i) => {
                      const Icon = s.icon;
                      return (
                        <div key={i} className="contents">
                          <div className="flex-1 flex md:flex-col items-center md:text-center gap-3 md:gap-2">
                            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold leading-tight">{s.title}</div>
                              <div className="text-[11px] text-muted-foreground leading-tight">{s.sub}</div>
                            </div>
                          </div>
                          {i < indexSteps.length - 1 && (
                            <div className="hidden md:flex items-center shrink-0 px-1">
                              <span className="w-6 h-px bg-primary/30" />
                              <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="h-px bg-border" />

                {/* Phase 2: Abfrage */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="rounded-full text-xs">Phase 2</Badge>
                    <span className="text-sm font-semibold text-foreground">Abfrage, in Echtzeit bei jeder Frage</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-0">
                    {querySteps.map((s, i) => {
                      const Icon = s.icon;
                      const last = i === querySteps.length - 1;
                      return (
                        <div key={i} className="contents">
                          <div className="flex-1 flex md:flex-col items-center md:text-center gap-3 md:gap-2">
                            <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${last ? "bg-primary text-white" : "bg-primary/10"}`}>
                              <Icon className={`w-5 h-5 ${last ? "text-white" : "text-primary"}`} />
                            </div>
                            <div>
                              <div className="text-sm font-semibold leading-tight">{s.title}</div>
                              <div className="text-[11px] text-muted-foreground leading-tight">{s.sub}</div>
                            </div>
                          </div>
                          {!last && (
                            <div className="hidden md:flex items-center shrink-0 px-1">
                              <span className="w-6 h-px bg-primary/30" />
                              <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Card>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Der entscheidende Vorteil: Neue Dokumente werden einfach neu indexiert. Das System bleibt aktuell, ganz ohne erneutes Training.
              </p>
            </div>
          </section>

          {/* VERGLEICH */}
          <section id="vergleich" className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Framework-Vergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">LangChain, LlamaIndex oder direkter API-Aufruf?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Eine ehrliche Einschätzung, wann welches Werkzeug sinnvoll ist. Diese Gegenüberstellung fehlt im deutschsprachigen Web bislang fast vollständig.</p>
              </div>
              <Card className="border-2 overflow-hidden">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-primary/5">
                        <TableHead className="font-bold text-foreground min-w-[170px]">Kriterium</TableHead>
                        <TableHead className="font-bold text-primary min-w-[230px]">
                          LangChain <Badge className="ml-2 text-[10px]">Empfohlen</Badge>
                        </TableHead>
                        <TableHead className="font-bold text-foreground min-w-[200px]">LlamaIndex</TableHead>
                        <TableHead className="font-bold text-foreground min-w-[200px]">Direkter API-Aufruf</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {comparison.map((row, i) => (
                        <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                          <TableCell className="font-medium text-foreground">{row.feature}</TableCell>
                          <TableCell className="text-sm text-muted-foreground">
                            <span className="flex items-start gap-2"><Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />{row.langchain}</span>
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground">{row.llamaindex}</TableCell>
                          <TableCell className="text-sm text-muted-foreground">
                            <span className="flex items-start gap-2"><X className="w-4 h-4 text-muted-foreground/50 mt-0.5 shrink-0" />{row.diy}</span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Card>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                LlamaIndex ist eine ausgezeichnete Wahl für reine Dokumenten-Indexierung. Wir empfehlen LangChain, wenn Agenten-Logik, breite Integrationen und produktionsreifes Monitoring zählen.
              </p>
            </div>
          </section>

          {/* USE CASES Tabs */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Anwendungsfälle</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">LangChain in Ihrer Branche</h2>
                <p className="text-lg text-muted-foreground">Vom Rechtsanwalt bis zum Hotelier: konkrete Szenarien für den DACH-Raum.</p>
              </div>
              <Tabs defaultValue="recht" className="w-full">
                <TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">
                  {useCases.map((t) => {
                    const Icon = t.icon;
                    return (
                      <TabsTrigger key={t.value} value={t.value} className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border">
                        <Icon className="w-4 h-4 mr-1.5" />{t.label}
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
                {useCases.map((t) => (
                  <TabsContent key={t.value} value={t.value}>
                    <Card className="border-2">
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-bold mb-2">{t.head}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-5">{t.text}</p>
                        <div className="h-px bg-border mb-5" />
                        <div className="grid sm:grid-cols-2 gap-3">
                          {t.bullets.map((b, i) => (
                            <div key={i} className="flex items-center gap-2.5 text-sm">
                              <Check className="w-4 h-4 text-primary shrink-0" />
                              <span className="text-muted-foreground">{b}</span>
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

          {/* TECH STACK + WARUM WIR */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unser Stack</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Produktionsreife Architektur, kein Prototyp</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Jede Lösung wird von Tag eins auf Wartbarkeit, Monitoring und EU-Compliance ausgelegt.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {techStack.map(({ icon: Icon, label, tools, logo, alt }, i) => (
                  <Card key={i} className="hover-lift border-2">
                    <CardContent className="pt-5 pb-5">
                      <div className="flex items-start gap-3">
                        {logo ? (
                          <LogoBox src={logo} alt={alt ?? label} box="w-10 h-10 rounded-lg" img="w-6 h-6" />
                        ) : (
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                        )}
                        <div>
                          <div className="font-bold text-foreground text-sm mb-1">{label}</div>
                          <div className="text-muted-foreground text-xs leading-relaxed">{tools}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {reasons.map(({ icon: Icon, badge, title, desc }, i) => (
                  <Card key={i} className="hover-lift border-2">
                    <CardHeader className="pb-3">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <Badge variant="outline" className="rounded-full w-fit text-[10px] bg-primary/10 text-primary border-primary/20 mb-1">{badge}</Badge>
                      <CardTitle className="text-lg">{title}</CardTitle>
                    </CardHeader>
                    <CardContent><CardDescription className="text-sm leading-relaxed">{desc}</CardDescription></CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* ABLAUF Timeline */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Der Ablauf</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Von der Erstanalyse bis zum Betrieb</h2>
                <p className="text-lg text-muted-foreground">Vier Schritte, transparent und ohne Überraschungen.</p>
              </div>
              <div className="relative pl-8 md:pl-10">
                <div className="absolute left-[15px] md:left-[19px] top-2 bottom-2 w-px bg-border" aria-hidden />
                <div className="space-y-6">
                  {timeline.map((s) => {
                    const Icon = s.icon;
                    return (
                      <div key={s.step} className="relative">
                        <div className="absolute -left-8 md:-left-10 top-1 w-8 h-8 md:w-10 md:h-10 rounded-xl bg-primary text-white flex items-center justify-center ring-4 ring-background shadow-md shadow-primary/20">
                          <Icon className="w-4 h-4 md:w-5 md:h-5" />
                        </div>
                        <Card className="border-2 ml-2">
                          <CardContent className="py-5">
                            <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                              <span className="text-xs font-bold text-primary tracking-wide">SCHRITT {s.step}</span>
                              <Badge variant="secondary" className="rounded-full text-[10px]">{s.time}</Badge>
                            </div>
                            <h3 className="text-lg font-bold mb-1.5">{s.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                          </CardContent>
                        </Card>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zu LangChain</h2>
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

          {/* RELATED */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Mehr Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zu LangChain</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {related.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <a key={i} href={s.href} className="group block">
                      <Card className="h-full border-2 hover-lift group-hover:border-primary/40">
                        <CardHeader className="pb-3">
                          <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-2 ${serviceLogos[s.href] ? "bg-white border border-border" : "bg-primary/10"}`}>{serviceLogos[s.href] ? <img src={`/img/logos/${serviceLogos[s.href]}.svg`} alt={s.title} className="w-7 h-7 object-contain" /> : <Icon className="w-5 h-5 text-primary" />}</div>
                          <CardTitle className="text-lg">{s.title}</CardTitle>
                        </CardHeader>
                        <CardContent><p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p></CardContent>
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
