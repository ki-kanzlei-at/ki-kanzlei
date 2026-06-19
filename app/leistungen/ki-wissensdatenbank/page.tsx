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
import {
  MessageSquare,
  Database,
  Sparkles,
  FileStack,
  Layers,
  FolderSearch,
  FileCheck2,
  Search,
  FileText,
  Lock,
  Zap,
  Network,
  Check,
  X,
  Scale,
  Building2,
  Stethoscope,
  Landmark,
  Rocket,
  ShieldCheck,
  Server,
  MapPin,
  BookOpen,
  Quote,
  Bot,
  Workflow,
  Brain,
} from "lucide-react";

export const metadata: Metadata = {
  title: "KI Wissensdatenbank mit RAG: Retrieval Augmented Generation",
  description:
    "KI Wissensdatenbank mit RAG (Retrieval Augmented Generation) von der KI Kanzlei: Ihre Firmendokumente werden zur intelligenten Wissensquelle. Mitarbeiter fragen in natürlicher Sprache und erhalten präzise Antworten mit Quellenangabe. DSGVO-konform, EU-gehostet, Pilot in 2 bis 4 Wochen.",
  keywords:
    "KI Wissensdatenbank, RAG KI, Retrieval Augmented Generation, RAG System, private Wissensdatenbank, KI Dokumentensuche, KI Wissensmanagement, Vector Datenbank, KI interne Dokumente, Unternehmens KI, semantische Suche, Enterprise Search KI, DSGVO KI Wissensdatenbank, KI Wissensdatenbank Deutschland, KI Wissensdatenbank Schweiz, KI Wissensmanagement DACH, RAG System DACH, Deutschland, Schweiz, DACH",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/ki-wissensdatenbank" },
};

const faqs = [
  {
    q: "Was ist Retrieval Augmented Generation (RAG)?",
    a: "Retrieval Augmented Generation (RAG) ist eine KI-Technologie, die ein Large Language Model (LLM) mit Ihrer eigenen Wissensdatenbank verbindet. Statt aus dem Training zu raten, sucht das System bei jeder Frage zuerst in Ihren echten Dokumenten, wählt die relevantesten Textstellen aus und lässt das Modell daraus eine Antwort formulieren. So entstehen präzise, nachvollziehbare Antworten, die immer auf Ihren tatsächlichen Daten beruhen.",
  },
  {
    q: "Was ist eine KI Wissensdatenbank und wie unterscheidet sie sich von einem normalen Wiki?",
    a: "Eine KI Wissensdatenbank macht Ihre internen Dokumente, Handbücher, Verträge, Richtlinien und Protokolle in natürlicher Sprache durchsuchbar. Ein klassisches Wiki oder Fileshare zwingt zur Stichwortsuche und zum manuellen Durchklicken. Bei einer KI Wissensdatenbank stellen Mitarbeiter einfach eine Frage und erhalten eine fertig formulierte Antwort samt Quellenangabe, so als würden sie einen Kollegen fragen, der jedes Dokument im Haus gelesen hat.",
  },
  {
    q: "Wie unterscheidet sich RAG von einem normalen ChatGPT-Account?",
    a: "Ein öffentliches Modell wie das Standard-ChatGPT kennt Ihre Firmendaten nicht und neigt bei Fachfragen zum Halluzinieren. Eine RAG-Wissensdatenbank greift dagegen auf Ihre echten Dokumente zu, antwortet ausschließlich auf deren Basis und nennt die Quelle. Zudem bleiben Ihre Daten bei unserer Lösung in der EU und werden nicht für das Training fremder Modelle verwendet.",
  },
  {
    q: "Welche Dokumente und Formate kann die KI Wissensdatenbank verarbeiten?",
    a: "Unsere RAG-Wissensdatenbank verarbeitet PDFs, Word-, Excel- und PowerPoint-Dateien, SharePoint- und Confluence-Inhalte, E-Mails, Webseiten, Wikis und klassische Datenbanken. Auch gescannte Dokumente und Bilder werden per OCR (Texterkennung) erfasst. Neue oder geänderte Dateien lassen sich automatisiert nachladen, sodass die Wissensbasis stets aktuell bleibt.",
  },
  {
    q: "Ist die KI Wissensdatenbank DSGVO-konform?",
    a: "Ja, vollständig. Wir hosten die RAG-Systeme auf Servern in Österreich beziehungsweise der EU oder direkt bei Ihnen On-Premise. Ihre Daten verlassen niemals Ihre Infrastruktur, werden nicht für das Training fremder Modelle genutzt und sind verschlüsselt. Sie erhalten einen vollständigen Auftragsverarbeitungsvertrag (AVV), und der KI-Einsatz wird nach EU AI Act dokumentiert.",
  },
  {
    q: "Wie wird verhindert, dass die KI halluziniert?",
    a: "Durch das Retrieval-Prinzip. Das Modell darf nur antworten, was in den gefundenen Dokumenten tatsächlich steht, und belegt jede Aussage mit der konkreten Quelldatei und Textstelle. Findet das System keine passende Information, sagt es das offen, statt etwas zu erfinden. So bleiben Antworten überprüfbar und vertrauenswürdig.",
  },
  {
    q: "Wie funktioniert die Rechte- und Zugriffsverwaltung?",
    a: "Die Wissensdatenbank respektiert Ihre bestehenden Berechtigungen. Jeder Mitarbeiter sieht nur Antworten aus Dokumenten, auf die er ohnehin zugreifen darf. Vertrauliche Personal-, Finanz- oder Mandantendaten lassen sich pro Rolle, Abteilung oder Projekt abgrenzen, inklusive Protokollierung jeder Abfrage.",
  },
  {
    q: "Wie schnell ist die Implementierung einer KI Wissensdatenbank?",
    a: "Ein erster Pilot ist in der Regel in 2 bis 4 Wochen produktiv. Wir analysieren Ihre Dokumentenlandschaft, richten das RAG-System ein, verbinden die Datenquellen und schulen Ihr Team. Nach dem Go-Live erweitern wir die Datenbasis und optimieren die Antwortqualität laufend.",
  },
  {
    q: "Was kostet eine KI Wissensdatenbank?",
    a: "Die Kosten hängen von Datenmenge, Anzahl der Quellen, gewünschtem Hosting und Integrationen ab. Ein schlanker Pilot startet überschaubar, größere Rollouts skalieren mit. In der kostenlosen Erstanalyse erhalten Sie eine konkrete Aufwands- und ROI-Einschätzung, transparent und ohne versteckte Lizenzkosten dank Open-Source-Stack.",
  },
  {
    q: "Lässt sich die Wissensdatenbank mit Chatbot oder Voicebot verbinden?",
    a: "Ja. Dieselbe RAG-Wissensbasis kann ein internes Chat-Interface, einen Kunden-Chatbot auf Ihrer Website und sogar einen Voicebot am Telefon speisen. So beantworten alle Kanäle Fragen aus einer einzigen, gepflegten Wissensquelle, konsistent und mit denselben Quellen.",
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
  name: "KI Wissensdatenbank mit RAG",
  serviceType: "KI Wissensdatenbank, RAG, Retrieval Augmented Generation, KI Wissensmanagement",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "KI Wissensdatenbank mit Retrieval Augmented Generation (RAG) für Unternehmen im DACH-Raum: Firmendokumente werden zur intelligenten, quellenbasierten Wissensquelle. DSGVO-konform, EU-gehostet, ohne Halluzinationen.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const heroSources = [
  { file: "Rahmenvertrag_Meier_2025.pdf", loc: "Seite 12, Abschnitt 4", score: 98 },
  { file: "Einkaufs-AGB_intern.docx", loc: "Abschnitt 7", score: 91 },
];

const stats = [
  ["80%", "weniger Zeit für die Dokumentensuche"],
  ["0", "Halluzinationen, jede Antwort belegt"],
  ["100%", "DSGVO-konform und EU-gehostet"],
  ["2 bis 4 Wo.", "vom Erstgespräch bis zum Piloten"],
];

const keyProperties = [
  ["Erreichbarkeit", "Wissen 24/7 in Sekunden abrufbar"],
  ["Antwort", "Natürliche Sprache statt Trefferliste"],
  ["Quelle", "Jede Aussage mit Datei und Textstelle"],
  ["Halluzinationen", "Ausgeschlossen, nur echte Inhalte"],
  ["Formate", "PDF, Word, Excel, SharePoint, E-Mails"],
  ["Datenschutz", "EU-Hosting oder On-Premise, voller AVV"],
];

const pipeline = [
  { icon: FileStack, step: "01", title: "Quellen anbinden", desc: "Dokumente, SharePoint, E-Mails und Datenbanken werden sicher angebunden." },
  { icon: Layers, step: "02", title: "Chunking & Embeddings", desc: "Inhalte werden in sinnvolle Abschnitte zerlegt und in Vektoren übersetzt." },
  { icon: Database, step: "03", title: "Vector-Datenbank", desc: "Die Vektoren landen in einer durchsuchbaren, DSGVO-konformen Vector-DB." },
  { icon: FolderSearch, step: "04", title: "Retrieval & Re-Ranking", desc: "Zur Frage werden die relevantesten Stellen gesucht und neu sortiert." },
  { icon: FileCheck2, step: "05", title: "Antwort mit Quelle", desc: "Das LLM formuliert die Antwort und belegt sie mit der exakten Quelle." },
];

const compareRows: { feature: string; cells: { text: string; mark?: "yes" | "no" }[] }[] = [
  {
    feature: "Greift auf Ihre Firmendaten zu",
    cells: [
      { text: "Nein", mark: "no" },
      { text: "Nein", mark: "no" },
      { text: "Ja, lokal", mark: "yes" },
      { text: "Ja, in Echtzeit", mark: "yes" },
    ],
  },
  {
    feature: "Antwort in natürlicher Sprache",
    cells: [
      { text: "Ja", mark: "yes" },
      { text: "Nur Linkliste", mark: "no" },
      { text: "Nur Stichwortsuche", mark: "no" },
      { text: "Ja, formulierte Antwort", mark: "yes" },
    ],
  },
  {
    feature: "Quellenangabe mit Textstelle",
    cells: [
      { text: "Meist keine", mark: "no" },
      { text: "Quelle ist ein Link", mark: "no" },
      { text: "Nur Dateiname", mark: "no" },
      { text: "Exakte Datei und Stelle", mark: "yes" },
    ],
  },
  {
    feature: "Halluzinationsrisiko",
    cells: [
      { text: "Hoch", mark: "no" },
      { text: "Keines, Originale", mark: "yes" },
      { text: "Keines", mark: "yes" },
      { text: "Minimiert, belegt", mark: "yes" },
    ],
  },
  {
    feature: "Datenstand",
    cells: [
      { text: "Trainingsstichtag", mark: "no" },
      { text: "Aktuelles Web", mark: "yes" },
      { text: "Aktuell lokal", mark: "yes" },
      { text: "So aktuell wie Ihre Daten", mark: "yes" },
    ],
  },
  {
    feature: "Rechte- und Zugriffsverwaltung",
    cells: [
      { text: "Keine", mark: "no" },
      { text: "Keine", mark: "no" },
      { text: "Eingeschränkt", mark: "no" },
      { text: "Pro Rolle und Abteilung", mark: "yes" },
    ],
  },
  {
    feature: "DSGVO-konform für interne Daten",
    cells: [
      { text: "US-Anbieter", mark: "no" },
      { text: "Daten ans Web", mark: "no" },
      { text: "Lokal", mark: "yes" },
      { text: "EU oder On-Premise, AVV", mark: "yes" },
    ],
  },
  {
    feature: "Mehrkanal-fähig (Chat, Bot, Telefon)",
    cells: [
      { text: "Nur Chat", mark: "no" },
      { text: "Nein", mark: "no" },
      { text: "Nein", mark: "no" },
      { text: "Eine Wissensbasis, alle Kanäle", mark: "yes" },
    ],
  },
];

const features = [
  { icon: Search, title: "Semantische Dokumentensuche", text: "Durchsuchen Sie PDFs, Word-Dateien, SharePoint und E-Mails in Sekunden, mit natürlicher Sprache statt Stichworten. Die KI versteht die Bedeutung der Frage, nicht nur die Wörter." },
  { icon: FileText, title: "Quellenbasierte Antworten", text: "Jede Antwort zeigt die genaue Quelldatei und Textstelle. Mitarbeiter können mit einem Klick nachprüfen, woher die Information stammt, für volle Transparenz und Vertrauen." },
  { icon: Lock, title: "Privat und DSGVO-konform", text: "Ihre Daten bleiben in Ihrer Infrastruktur. Kein Training mit Ihren Inhalten, keine Weitergabe an Dritte, Hosting in Österreich, der EU oder On-Premise mit vollem AVV." },
  { icon: Database, title: "Alle Formate, immer aktuell", text: "PDF, Word, Excel, PowerPoint, SharePoint, E-Mails, Webseiten und Datenbanken, auch gescannte Dokumente per OCR. Neue Dateien werden automatisch nachgeladen." },
  { icon: MessageSquare, title: "Chat-Interface für jeden", text: "Ein intuitives Chat-Interface, das jeder Mitarbeiter sofort nutzt. Keine Schulung, keine technischen Vorkenntnisse, einfach fragen und Antwort mit Quelle erhalten." },
  { icon: Network, title: "Integration in Ihre Tools", text: "Nahtlos eingebunden in SharePoint, Teams, Slack, CRM und ERP. Die Wissensdatenbank lebt dort, wo Ihr Team ohnehin arbeitet, per Widget, Bot oder REST-API." },
  { icon: Zap, title: "Eine Basis, viele Kanäle", text: "Dieselbe Wissensbasis speist internen Chat, Website-Chatbot und Voicebot am Telefon, konsistent beantwortet aus einer einzigen, gepflegten Quelle." },
];

const audienceTabs = [
  {
    value: "kanzlei",
    label: "Kanzleien & Beratung",
    icon: Scale,
    items: [
      { who: "Steuerberater & Wirtschaftsprüfer", what: "Steuerrecht, BMD- und DATEV-Handbücher sowie Mandanteninformationen sind sofort abrufbar, samt Fristen und internen Arbeitsanweisungen." },
      { who: "Rechtsanwälte & Notare", what: "Rechtsdatenbanken, Musterverträge, Schriftsätze und Urteile in Sekunden durchsucht, ohne dass Mandantendaten das Haus verlassen." },
      { who: "Unternehmensberatung", what: "Frühere Projekte, Methoden-Decks und Angebotsvorlagen werden zur durchsuchbaren Wissensbasis für das ganze Team." },
    ],
  },
  {
    value: "mittelstand",
    label: "Mittelstand & Handwerk",
    icon: Building2,
    items: [
      { who: "Handwerk & KMU", what: "Technische Dokumentationen, Garantiebedingungen und Produktdatenblätter sind direkt auf der Baustelle oder im Innendienst greifbar." },
      { who: "Hotels & Gastronomie", what: "Hausregeln, Speisekarten, Buchungs- und Stornorichtlinien stehen jedem Mitarbeiter rund um die Uhr zur Verfügung." },
      { who: "HR & Recruiting", what: "Onboarding-Materialien, Stellenprofile und Personalrichtlinien werden auf Knopfdruck beantwortet, statt im Intranet gesucht." },
    ],
  },
  {
    value: "gesundheit",
    label: "Gesundheit & Pflege",
    icon: Stethoscope,
    items: [
      { who: "Arztpraxen & Kliniken", what: "Behandlungsleitlinien, Hygienevorschriften und interne Abläufe sind sofort abrufbar, mit strenger Trennung sensibler Patientendaten." },
      { who: "Pflege & Soziales", what: "Pflegestandards, Dienstanweisungen und Dokumentationspflichten werden klar und einheitlich beantwortet." },
    ],
  },
  {
    value: "public",
    label: "Öffentlicher Sektor",
    icon: Landmark,
    items: [
      { who: "Öffentliche Verwaltung", what: "Gesetze, Verordnungen und Behördenrichtlinien sind schnell und korrekt abrufbar, mit voller Nachvollziehbarkeit der Quelle." },
      { who: "Bildung & Forschung", what: "Studienordnungen, Förderrichtlinien und Forschungsdokumente werden für Mitarbeiter und Studierende zugänglich gemacht." },
    ],
  },
];

const techStack = [
  { name: "Vector-Datenbanken", tools: "Qdrant, Weaviate, pgvector, Milvus", badge: "Datenhaltung" },
  { name: "LLM / KI-Modelle", tools: "Llama, Mistral, Qwen, Phi, lokal oder in der EU-Cloud", badge: "Intelligenz" },
  { name: "Embedding-Modelle", tools: "BGE-M3, E5-Multilingual, Nomic Embed, mehrsprachig", badge: "Vektorisierung" },
  { name: "Datenquellen", tools: "PDF, Word, Excel, SharePoint, Confluence, Webseiten, E-Mails, OCR", badge: "Input" },
  { name: "Interfaces", tools: "Chat-Widget, Teams-Bot, Slack, REST-API, Open WebUI", badge: "Frontend" },
  { name: "Hosting", tools: "EU-Server (Österreich, Deutschland, Finnland) oder On-Premise", badge: "Infrastruktur" },
];

const steps = [
  { step: "01", icon: Search, title: "Kostenlose Erstanalyse", time: "30 Minuten", desc: "Wir sichten Ihre Dokumentenlandschaft: Welche Daten liegen wo, in welchen Formaten und mit welchen Zugriffsrechten? In einem kurzen Gespräch erkennen wir, welche Wissensquellen den größten Hebel bieten." },
  { step: "02", icon: FileText, title: "KI Assessment & Konzept", time: "Woche 1", desc: "Auf Basis der Analyse erstellen wir ein konkretes Konzept: Technologie-Stack aus Vector-DB, LLM und Embedding-Modell, anzubindende Quellen, Rollen- und Rechtemodell sowie ein Rollout-Plan mit Kosten und Zeitrahmen." },
  { step: "03", icon: Database, title: "Aufbau & Integration", time: "2 bis 4 Wochen", desc: "Wir bauen Ihre RAG-Wissensdatenbank: Datenimport, Chunking, Vektorisierung, LLM-Anbindung und Chat-Interface, integriert in SharePoint, Teams, Slack oder als eigenständiges System." },
  { step: "04", icon: Rocket, title: "Go-Live, Schulung & Betrieb", time: "laufend", desc: "Ihre Mitarbeiter werden eingeführt, die Wissensdatenbank geht live. Wir überwachen die Antwortqualität DSGVO-konform, erweitern die Datenbasis und feilen kontinuierlich an der Relevanz." },
];

const trust = [
  { icon: ShieldCheck, badge: "Vertrauenswürdig", title: "Belegte statt erfundene Antworten", desc: "Unser RAG-System antwortet ausschließlich auf Basis Ihrer echten Dokumente und zeigt zu jeder Aussage die Quelle. Mitarbeiter prüfen Antworten in Sekunden nach, statt blind zu vertrauen." },
  { icon: Lock, badge: "100% privat", title: "Volle Datensouveränität", desc: "Alle Daten bleiben auf EU-Servern oder bei Ihnen On-Premise. Kein Training durch fremde Anbieter, vollständiger AVV und EU-AI-Act-konforme Dokumentation des KI-Einsatzes." },
  { icon: BookOpen, badge: "Open Source", title: "Kein Lizenz-Lock-in", desc: "Wir setzen auf bewährte Open-Source-Technologien. Sie behalten die Kontrolle über Modelle, Daten und Kosten, ohne Abhängigkeit von einem einzelnen Cloud-Anbieter." },
];

const relatedServices = [
  { icon: Lock, tag: "Private AI", title: "Private AI & Lokale KI", desc: "Betreiben Sie die KI Wissensdatenbank vollständig lokal, ganz ohne Cloud.", href: "/private-ai", logo: null },
  { icon: Bot, tag: "Agentic AI", title: "Agentic AI & AI Agents", desc: "Geben Sie autonomen KI-Agents per RAG Zugriff auf Ihr Firmenwissen.", href: "/agentic-ai", logo: null },
  { icon: Workflow, tag: "Automatisierung", title: "n8n Automatisierung", desc: "Laden Sie neue Dokumente automatisiert in die Wissensdatenbank.", href: "/n8n-automatisierung", logo: "n8n" },
];

function LogoBox({ slug, alt, className }: { slug: string; alt: string; className?: string }) {
  return (
    <div className={`rounded-xl bg-white border border-border flex items-center justify-center shrink-0 p-2 ${className ?? ""}`}>
      <img src={`/img/logos/${slug}.svg`} alt={alt} className="w-full h-full object-contain" />
    </div>
  );
}

export default function Page() {
  return (
    <>
      <Script id="faq-wissensdatenbank" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-wissensdatenbank" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                    KI Wissensdatenbank, RAG
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Ihr Firmenwissen, das auf jede Frage <span className="text-primary">eine belegte Antwort</span> gibt
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Retrieval Augmented Generation (RAG) macht Ihre internen Dokumente zur intelligenten Wissensquelle. Mitarbeiter fragen in natürlicher Sprache, die KI antwortet präzise und nennt die exakte Quelle, ohne Halluzinationen. DSGVO-konform und in 2 bis 4 Wochen einsatzbereit.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Erstgespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#vergleich">RAG im Vergleich</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-primary" /> EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Bespoke Hero-Visual: Frage zu Quelle zu Antwort */}
                <div className="relative">
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/5 rounded-full blur-3xl" aria-hidden />
                  <Card className="relative border-2 shadow-xl shadow-primary/5">
                    <CardHeader className="border-b border-border pb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold">RAG-Abfrage live</span>
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">EU-Server</span>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-5 space-y-2">
                      {/* Stufe 1: Frage */}
                      <div className="rounded-xl border border-border bg-muted/30 p-3.5">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <MessageSquare className="w-3.5 h-3.5 text-primary" />
                          </span>
                          <span className="text-xs font-bold text-primary tracking-wide">01, FRAGE</span>
                        </div>
                        <p className="text-sm text-foreground leading-snug">
                          Welche Kündigungsfrist gilt laut unserem Rahmenvertrag mit Lieferant Meier?
                        </p>
                      </div>

                      <div className="flex items-center gap-2 pl-3.5">
                        <span className="h-4 w-px bg-primary/40" aria-hidden />
                        <span className="text-[11px] text-muted-foreground">Semantische Suche in der Vector-Datenbank</span>
                      </div>

                      {/* Stufe 2: Quellen */}
                      <div className="rounded-xl border border-border bg-muted/30 p-3.5">
                        <div className="flex items-center gap-2 mb-2.5">
                          <span className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <Database className="w-3.5 h-3.5 text-primary" />
                          </span>
                          <span className="text-xs font-bold text-primary tracking-wide">02, QUELLEN</span>
                        </div>
                        <div className="space-y-2.5">
                          {heroSources.map((s) => (
                            <div key={s.file}>
                              <div className="flex items-center justify-between gap-2 mb-1">
                                <span className="text-[12px] font-medium text-foreground truncate">{s.file}</span>
                                <span className="text-[11px] text-primary font-semibold shrink-0">{s.score}%</span>
                              </div>
                              <div className="h-1.5 rounded-full bg-border overflow-hidden">
                                <div className="h-full rounded-full bg-primary" style={{ width: `${s.score}%` }} />
                              </div>
                              <div className="text-[10px] text-muted-foreground mt-0.5">{s.loc}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 pl-3.5">
                        <span className="h-4 w-px bg-primary/40" aria-hidden />
                        <span className="text-[11px] text-muted-foreground">Antwort wird aus den Treffern formuliert</span>
                      </div>

                      {/* Stufe 3: Antwort */}
                      <div className="rounded-xl border-2 border-primary/30 bg-primary/5 p-3.5">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center shrink-0">
                            <Sparkles className="w-3.5 h-3.5 text-white" />
                          </span>
                          <span className="text-xs font-bold text-primary tracking-wide">03, ANTWORT</span>
                        </div>
                        <p className="text-sm text-foreground leading-snug mb-2.5">
                          Die Kündigungsfrist beträgt 3 Monate zum Quartalsende.
                        </p>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-background border border-primary/20 px-2.5 py-1 text-[11px] text-primary font-medium">
                          <FileText className="w-3 h-3" /> Quelle: Rahmenvertrag_Meier_2025.pdf, S. 12
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* STATS-BAND */}
          <section className="py-10 md:py-12">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-2 lg:grid-cols-4 border-2 border-border rounded-2xl overflow-hidden bg-card">
                {stats.map(([v, l], i) => (
                  <div key={i} className="p-6 md:p-8 text-center border-b lg:border-b-0 border-r last:border-r-0 [&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r border-border">
                    <div className="text-3xl md:text-4xl font-bold text-primary">{v}</div>
                    <div className="text-xs md:text-sm text-muted-foreground mt-2 leading-snug">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* DEFINITION - 2col mit Info-Card */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Definition</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was ist eine KI Wissensdatenbank mit RAG?</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      <strong className="text-foreground">RAG (Retrieval Augmented Generation)</strong> verbindet ein Large Language Model mit Ihrer privaten <strong className="text-foreground">KI Wissensdatenbank</strong>. Stellt ein Mitarbeiter eine Frage, durchsucht das System zuerst Ihre echten Dokumente, wählt die relevantesten Textstellen aus und formuliert daraus eine Antwort. Keine Erfindungen, keine veralteten Trainingsdaten, nur verifizierte Informationen aus Ihren eigenen Unterlagen.
                    </p>
                    <p>
                      Das Ergebnis ist eine <strong className="text-foreground">private KI</strong>, die Ihr gesamtes Unternehmenswissen kennt: Handbücher, Verträge, Protokolle, E-Mails und SharePoint-Inhalte. Statt minutenlang in Ordnern zu suchen, bekommt Ihr Team in Sekunden eine korrekte, belegte Antwort, so als hätte ein Kollege jedes Dokument im Haus gelesen.
                    </p>
                    <p>
                      Für Unternehmen im DACH-Raum ist dabei <strong className="text-foreground">Datenschutz</strong> entscheidend. Wir bauen jede Wissensdatenbank DSGVO-konform, mit Datenhaltung in Österreich und der EU oder On-Premise, und dokumentieren den KI-Einsatz nach EU AI Act.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">RAG System</Badge>
                    <Badge variant="secondary" className="rounded-full">Vector Datenbank</Badge>
                    <Badge variant="secondary" className="rounded-full">private Wissensdatenbank</Badge>
                    <Badge variant="secondary" className="rounded-full">KI Wissensmanagement</Badge>
                    <Badge variant="secondary" className="rounded-full">semantische Suche</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">KI Wissensdatenbank auf einen Blick</CardTitle>
                    <CardDescription>Was eine RAG-Wissensdatenbank auszeichnet.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {keyProperties.map(([label, value]) => (
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

          {/* WIE RAG FUNKTIONIERT - clean Diagramm / Pipeline */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">So funktioniert es</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Von Ihren Dokumenten zur belegten Antwort</h2>
                <p className="text-lg text-muted-foreground">Fünf Schritte von der Rohdatei bis zur Antwort. Einmal aufgebaut, läuft die Pipeline für jede Frage automatisch.</p>
              </div>
              <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40" aria-hidden />
                {pipeline.map(({ icon: Icon, step, title, desc }) => (
                  <div key={step} className="relative">
                    <Card className="h-full border-2 hover-lift">
                      <CardContent className="pt-5 text-center">
                        <div className="w-14 h-14 mx-auto rounded-2xl bg-primary text-white flex items-center justify-center mb-3 shadow-lg shadow-primary/20 relative z-10 ring-8 ring-background">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="text-xs font-bold text-primary mb-1">SCHRITT {step}</div>
                        <h3 className="text-base font-bold mb-1.5">{title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FEATURE-BENTO */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Funktionen</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Was Ihre KI Wissensdatenbank leistet</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Alles, um Ihr Unternehmenswissen intelligent, sicher und sofort zugänglich zu machen.</p>
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
                      <CardContent><p className="text-muted-foreground leading-relaxed text-sm">{f.text}</p></CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* VERGLEICH */}
          <section id="vergleich" className="py-14 md:py-20 scroll-mt-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Vergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">RAG, Standard-ChatGPT, Google oder lokale Suche?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Warum eine RAG-Wissensdatenbank Ihre Firmendaten besser zugänglich macht als ein öffentliches Modell oder klassische Suche.</p>
              </div>
              <Card className="border-2 overflow-hidden">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="w-[24%] font-bold text-foreground">Merkmal</TableHead>
                        <TableHead className="text-muted-foreground">Standard ChatGPT</TableHead>
                        <TableHead className="text-muted-foreground">Google Suche</TableHead>
                        <TableHead className="text-muted-foreground">Lokale Suche</TableHead>
                        <TableHead className="text-primary font-bold">RAG Wissensdatenbank</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {compareRows.map((row, i) => (
                        <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                          <TableCell className="font-medium">{row.feature}</TableCell>
                          {row.cells.map((c, ci) => {
                            const isRag = ci === 3;
                            return (
                              <TableCell key={ci} className={isRag ? "text-sm text-primary font-medium" : "text-sm text-muted-foreground"}>
                                <span className="inline-flex items-start gap-1.5">
                                  {c.mark === "yes" && <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${isRag ? "text-primary" : "text-muted-foreground/60"}`} />}
                                  {c.mark === "no" && <X className="w-3.5 h-3.5 mt-0.5 shrink-0 text-muted-foreground/50" />}
                                  {c.text}
                                </span>
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Card>
            </div>
          </section>

          {/* ANWENDUNGSFAELLE - Tabs */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Anwendungsfälle</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Für wen sich eine KI Wissensdatenbank lohnt</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Wählen Sie Ihren Bereich, wir zeigen, welches Wissen sofort abrufbar wird.</p>
              </div>
              <Tabs defaultValue="kanzlei" className="w-full">
                <TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">
                  {audienceTabs.map((t) => {
                    const Icon = t.icon;
                    return (
                      <TabsTrigger key={t.value} value={t.value} className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border">
                        <Icon className="w-4 h-4 mr-1.5" />{t.label}
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
                {audienceTabs.map((t) => (
                  <TabsContent key={t.value} value={t.value}>
                    <div className="grid md:grid-cols-2 gap-4">
                      {t.items.map(({ who, what }, i) => (
                        <Card key={i} className="border-2">
                          <CardContent className="pt-6">
                            <div className="font-bold text-primary mb-1">{who}</div>
                            <div className="text-muted-foreground text-sm leading-relaxed">{what}</div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>

          {/* TECH-STACK */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Technologie</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Der Stack hinter Ihrer RAG-Wissensdatenbank</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Wir nutzen bewährte Open-Source-Technologien, die DSGVO-konform auf EU-Servern oder On-Premise laufen, ohne Lizenz-Lock-in.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {techStack.map(({ name, tools, badge }, i) => (
                  <Card key={i} className="hover-lift border-2">
                    <CardHeader>
                      <div className="flex items-center justify-between gap-3">
                        <CardTitle className="text-lg text-primary">{name}</CardTitle>
                        <Badge variant="secondary" className="rounded-full text-xs shrink-0">{badge}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent><p className="text-muted-foreground leading-relaxed text-sm">{tools}</p></CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* ABLAUF - vertikale Timeline */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Der Ablauf</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ihre KI Wissensdatenbank in 4 Schritten</h2>
                <p className="text-lg text-muted-foreground">Vom ersten Gespräch bis zur produktiven RAG-Lösung, transparent in 2 bis 4 Wochen.</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-primary/25 to-primary/10" aria-hidden />
                <div className="space-y-8">
                  {steps.map(({ step, icon: Icon, title, time, desc }) => (
                    <div key={step} className="relative">
                      <div className="absolute -left-8 top-0 w-8 h-8 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20 ring-4 ring-background">
                        <Icon className="w-4 h-4" />
                      </div>
                      <Card className="border-2">
                        <CardContent className="pt-5">
                          <div className="text-xs font-bold text-primary mb-1 tracking-wide">SCHRITT {step}, {time}</div>
                          <h3 className="text-lg font-bold mb-1.5">{title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* WARUM KI KANZLEI - Trust Bento */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum KI Kanzlei</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Warum Unternehmen uns ihr Wissen anvertrauen</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Drei Gründe, warum eine Wissensdatenbank von der KI Kanzlei sicher, belastbar und zukunftsfest ist.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {trust.map((w, i) => {
                  const Icon = w.icon;
                  return (
                    <Card key={i} className={`hover-lift border-2 ${i === 0 ? "lg:col-span-2 bg-primary/5 border-primary/20" : ""}`}>
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <Badge variant="secondary" className="rounded-full">{w.badge}</Badge>
                        </div>
                        <CardTitle className="text-lg">{w.title}</CardTitle>
                      </CardHeader>
                      <CardContent><p className="text-muted-foreground leading-relaxed text-sm">{w.desc}</p></CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ZITAT / EINORDNUNG */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-4xl">
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="pt-8 pb-8 text-center">
                  <Quote className="w-8 h-8 text-primary mx-auto mb-4" />
                  <p className="text-xl md:text-2xl font-semibold leading-relaxed text-foreground">
                    Wissen, das niemand findet, ist kein Wissen. Eine RAG-Wissensdatenbank verwandelt verstreute Dokumente in eine einzige Quelle, die jede Frage in Sekunden korrekt und belegt beantwortet.
                  </p>
                  <div className="mt-5 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Brain className="w-4 h-4 text-primary" />
                    KI Kanzlei, KI Wissensmanagement für den DACH-Raum
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Häufige Fragen zu KI Wissensdatenbank & RAG</h2>
                <p className="text-lg text-muted-foreground">Die wichtigsten Fragen rund um Retrieval Augmented Generation und private Wissensdatenbanken.</p>
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
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Mehr Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Passt gut zur Wissensdatenbank</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Diese Services kombinieren sich besonders gut mit Ihrer KI Wissensdatenbank.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {relatedServices.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a key={s.href} href={s.href} className="group block">
                      <Card className="h-full border-2 hover-lift transition-all group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/5">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            {s.logo ? (
                              <LogoBox slug={s.logo} alt={s.title} className="w-12 h-12" />
                            ) : (
                              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary">
                                <Icon className="w-6 h-6 text-primary transition-colors group-hover:text-white" />
                              </div>
                            )}
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
