import type { Metadata } from "next";
import Script from "next/script";
import { NavigationHome } from "@/components/NavigationHome";
import { FooterModern } from "@/components/FooterModern";
import { ContactForm } from "@/components/ContactForm";
import { serviceLogos } from "@/lib/serviceLogos";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Database,
  GitBranch,
  BarChart3,
  Shield,
  ShieldCheck,
  Layers,
  Workflow,
  Check,
  X,
  Brain,
  Zap,
  Cpu,
  Server,
  Search,
  FileText,
  Rocket,
  Lock,
  Network,
  Boxes,
  Gauge,
  Sparkles,
  Activity,
  ShoppingCart,
  Factory,
  Users,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Data Engineering: Daten-Pipelines für KI und Machine Learning",
  description:
    "Data Engineering für KI-Projekte: robuste Daten-Pipelines, ETL- und ELT-Prozesse, Streaming, Datenarchitektur und Data Quality. Von der Quelle über Transform bis zur KI-Pipeline, DSGVO-konform auf EU-Servern.",
  keywords:
    "Data Engineering, Daten Pipeline, ETL, ELT, Data Engineering KI, Datenarchitektur, Data Pipeline Unternehmen, Datenintegration, Data Warehouse, Data Lakehouse, Streaming Pipeline, Apache Kafka, Apache Spark, Apache Airflow, Vector Datenbank, Data Engineering DSGVO",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/data-engineering" },
};

const faqs = [
  {
    q: "Was ist Data Engineering und warum ist es das Fundament jeder KI?",
    a: "Data Engineering ist die Ingenieursdisziplin, die Daten sammelt, transformiert, speichert und bereitstellt. Für KI ist sie das Fundament: Ohne saubere, gut strukturierte und zugängliche Daten lässt sich kein KI-Modell zuverlässig trainieren oder betreiben. Data Engineers bauen die Pipelines, die Rohdaten aus ERP, CRM, Datenbanken, APIs und Dokumenten in KI-taugliche Formate überführen, automatisiert, überwacht und reproduzierbar. Studien zeigen, dass ein Großteil aller KI-Projekte nicht an der Modellierung scheitert, sondern an mangelhafter Datengrundlage.",
  },
  {
    q: "Was ist der Unterschied zwischen ETL und ELT?",
    a: "ETL (Extract, Transform, Load) transformiert Daten, bevor sie ins Zielsystem geladen werden. ELT (Extract, Load, Transform) lädt Rohdaten zuerst ins Zielsystem und transformiert sie dort. Für KI-Projekte empfehlen wir oft ELT, weil moderne Data Warehouses und Lakehouses die Transformation effizient erledigen und Sie dieselben Rohdaten für unterschiedliche KI-Anwendungsfälle immer wieder neu aufbereiten können. ETL bleibt sinnvoll, wenn sensible Daten schon vor dem Laden anonymisiert werden müssen.",
  },
  {
    q: "Was kostet der Aufbau einer Daten-Pipeline?",
    a: "Das hängt von Anzahl und Komplexität der Datenquellen, dem Zielsystem und den Qualitätsanforderungen ab. Eine erste produktive Pipeline ist meist im überschaubaren vierstelligen Bereich realisierbar, eine unternehmensweite Datenplattform bewegt sich höher. Wir starten bewusst mit einem klar abgegrenzten Use-Case, der schnell Wert liefert, und skalieren danach. Im kostenlosen Assessment erhalten Sie eine konkrete Aufwands- und ROI-Einschätzung, bevor Sie sich festlegen.",
  },
  {
    q: "Wie lange dauert die Implementierung einer Daten-Pipeline?",
    a: "Eine erste lauffähige Pipeline für einen klar umrissenen Use-Case steht in der Regel innerhalb von zwei bis vier Wochen. Voraussetzung ist, dass die Datenquellen zugänglich sind und die Anforderungen geklärt sind. Komplexe Streaming-Architekturen oder die Integration vieler heterogener Quellen brauchen länger. Wir arbeiten iterativ: Sie sehen früh erste Ergebnisse, statt monatelang auf ein großes Release zu warten.",
  },
  {
    q: "Welche Tools setzen Sie für Data Engineering ein?",
    a: "Unser Stack ist überwiegend quelloffen und self-hostbar: Apache Airflow für Orchestrierung, dbt für Transformationen, Apache Spark und Polars für Big-Data-Verarbeitung sowie Datenbanken wie PostgreSQL, ClickHouse und DuckDB. Für KI-spezifische Pipelines kommen Embedding-Workflows, Vector-Datenbanken wie Qdrant sowie Streaming-Tools wie Apache Kafka hinzu. Python ist die verbindende Sprache. Wir wählen die Werkzeuge nach Ihrem Anwendungsfall, nicht nach Trend.",
  },
  {
    q: "Was ist eine Vector-Datenbank und wann brauche ich sie?",
    a: "Eine Vector-Datenbank speichert Embeddings, also numerische Vektorrepräsentationen von Texten, Bildern oder anderen Daten, und findet darin semantisch ähnliche Inhalte in Millisekunden. Sie ist die Grundlage für RAG-Systeme, semantische Suche und KI-Wissensdatenbanken. Sobald Ihre KI auf eigenes Firmenwissen zugreifen soll, brauchen Sie eine Embedding-Pipeline, die Dokumente chunkt, in Vektoren umwandelt und in eine Vector-Datenbank wie Qdrant lädt und automatisch aktuell hält.",
  },
  {
    q: "Batch oder Streaming, was ist besser für mein Unternehmen?",
    a: "Batch-Pipelines verarbeiten Daten in geplanten Läufen und sind günstig, robust und für die meisten Reporting- und KI-Trainingsfälle völlig ausreichend. Streaming verarbeitet Ereignisse nahezu in Echtzeit und lohnt sich, wenn KI-Entscheidungen, Empfehlungen oder Alarme mit minimaler Latenz reagieren müssen. Häufig kombinieren wir beides: Batch für die historische Aufbereitung, Streaming für die Live-Schicht. Welches Muster passt, klären wir anhand Ihrer konkreten Anforderungen.",
  },
  {
    q: "Wie sichern Sie die Datenqualität für KI-Projekte?",
    a: "Datenqualität entsteht nicht zufällig, sondern durch automatisierte Prüfungen direkt in der Pipeline: Schema-Validierung, Wertebereichs-Checks, Duplikaterkennung, Vollständigkeits- und Aktualitätsprüfungen sowie Data Profiling. Wir bauen Data Quality Gates ein, die fehlerhafte Daten erkennen, quarantänisieren und melden, bevor sie Ihre KI-Modelle erreichen. Dazu kommt Lineage-Tracking, damit jederzeit nachvollziehbar ist, woher ein Wert stammt.",
  },
  {
    q: "Ist Data Engineering DSGVO-konform umsetzbar?",
    a: "Ja, DSGVO-konformes Data Engineering ist bei uns Standard. Wir implementieren Anonymisierung und Pseudonymisierung direkt in der Pipeline, Zugriffskontrolle und Audit-Logging, Datenminimierung auf nur erforderliche Felder, automatische Löschfristen und Consent-basierte Verarbeitung. Alle Pipelines laufen auf EU-Servern mit verschlüsselter Übertragung, abgesichert per Auftragsverarbeitungsvertrag. Datenschutz ist Teil der Architektur, kein Nachgedanke.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Data Engineering",
  serviceType: "Data Engineering und Daten-Pipelines für KI",
  provider: {
    "@type": "ProfessionalService",
    name: "KI Kanzlei",
    url: "https://ki-kanzlei.at",
    telephone: "+436642314676",
  },
  description:
    "Data Engineering für KI-Projekte im DACH-Raum: Daten-Pipelines, ETL- und ELT-Prozesse, Streaming, Datenarchitektur und Data Quality. Von der Quelle über Transform bis zur KI-Pipeline, DSGVO-konform auf EU-Servern.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

// Hero-Visual: Quelle zu Transform zu KI-Pipeline
const heroFlow = [
  {
    icon: Database,
    label: "Quelle",
    tag: "Extract",
    desc: "ERP, CRM, APIs, Datenbanken, Dateien und Dokumente",
  },
  {
    icon: Workflow,
    label: "Transform",
    tag: "Clean, Embed",
    desc: "Bereinigen, validieren, anreichern, strukturieren, vektorisieren",
  },
  {
    icon: Brain,
    label: "KI-Pipeline",
    tag: "Load",
    desc: "RAG, Feature Store, ML-Training, Vector-DB und Analytics",
  },
];

// Fünf Stufen einer Daten-Pipeline
const pipelineStages = [
  {
    icon: Database,
    step: "01",
    label: "Datenquellen",
    desc: "ERP, CRM, Datenbanken, APIs und Dokumente werden angebunden.",
  },
  {
    icon: GitBranch,
    step: "02",
    label: "Extract",
    desc: "Automatisierte, fehlertolerante Extraktion aus jeder Quelle.",
  },
  {
    icon: Workflow,
    step: "03",
    label: "Transform",
    desc: "Bereinigen, validieren, anreichern, strukturieren und einbetten.",
  },
  {
    icon: Layers,
    step: "04",
    label: "Load",
    desc: "Laden in Warehouse, Lakehouse oder Vector-Datenbank.",
  },
  {
    icon: BarChart3,
    step: "05",
    label: "KI und Analytics",
    desc: "RAG, ML-Training, Feature Store und Live-Dashboards.",
  },
];

// Definition rechts: Key-Properties
const keyProperties = [
  { label: "End-to-End", value: "Von der Datenquelle bis zum KI-Modell" },
  { label: "Automatisiert", value: "Batch- und Streaming-Pipelines ohne Handarbeit" },
  { label: "Skalierbar", value: "Von der ersten Pipeline zur Datenplattform" },
  { label: "Überwacht", value: "Monitoring, Alerting und Data Lineage" },
  { label: "DSGVO-konform", value: "Anonymisierung und EU-Server by Design" },
  { label: "KI-optimiert", value: "Embeddings, Feature Stores und RAG-ready" },
];

// Echte Tool-Logos (slugs unter /img/logos)
const logos = [
  { src: "python", name: "Python", use: "Sprache der Pipelines" },
  { src: "apacheairflow", name: "Apache Airflow", use: "Orchestrierung" },
  { src: "apachespark", name: "Apache Spark", use: "Big-Data-Verarbeitung" },
  { src: "apachekafka", name: "Apache Kafka", use: "Event-Streaming" },
  { src: "postgresql", name: "PostgreSQL", use: "Datenbank und pgvector" },
  { src: "qdrant", name: "Qdrant", use: "Vector-Datenbank" },
  { src: "redis", name: "Redis", use: "Cache und Streams" },
  { src: "elasticsearch", name: "Elasticsearch", use: "Such-Index" },
  { src: "mongodb", name: "MongoDB", use: "Dokumenten-Store" },
  { src: "grafana", name: "Grafana", use: "Dashboards" },
  { src: "prometheus", name: "Prometheus", use: "Pipeline-Monitoring" },
  { src: "docker", name: "Docker", use: "Deployment" },
];

// Vergleich: ETL vs. ELT vs. Streaming
const pipelineComparison = [
  {
    dimension: "Latenz",
    etl: { t: "Hoch, geplante Batch-Läufe", good: false },
    elt: { t: "Mittel, Batch im Zielsystem", good: false },
    streaming: { t: "Sehr niedrig, nahezu Echtzeit", good: true },
  },
  {
    dimension: "Kosten",
    etl: { t: "Mittel, eigene Transform-Stufe", good: false },
    elt: { t: "Niedrig, Warehouse-nativ", good: true },
    streaming: { t: "Hoch, laufender Betrieb", good: false },
  },
  {
    dimension: "Komplexität",
    etl: { t: "Mittel, etablierte Muster", good: false },
    elt: { t: "Niedrig bis mittel", good: true },
    streaming: { t: "Hoch, Event-Infrastruktur nötig", good: false },
  },
  {
    dimension: "Datenvolumen",
    etl: { t: "Durch Transform-Stufe begrenzt", good: false },
    elt: { t: "Sehr hoch, skaliert im Ziel", good: true },
    streaming: { t: "Kontinuierliche Event-Ströme", good: true },
  },
  {
    dimension: "KI-Eignung",
    etl: { t: "Solide für strukturierte Daten", good: false },
    elt: { t: "Ideal für ML, RAG und Re-Processing", good: true },
    streaming: { t: "Ideal für Echtzeit-Features", good: true },
  },
  {
    dimension: "Typischer Einsatz",
    etl: { t: "Vorab-Anonymisierung sensibler Daten", good: true },
    elt: { t: "Analytics und KI-Datenaufbereitung", good: true },
    streaming: { t: "Live-Empfehlungen und Alerts", good: true },
  },
];

// Tech Stack nach Use-Case (Tabs)
const stackByUseCase = [
  {
    value: "rag",
    label: "RAG-Pipelines",
    icon: Brain,
    title: "RAG- und Embedding-Pipelines",
    desc: "Dokumente chunken, Embeddings generieren und in eine Vector-Datenbank laden: die Datengrundlage für KI-Wissensdatenbanken und semantische Suche, automatisch aktuell gehalten und versioniert.",
    tools: ["Apache Airflow", "dbt", "Qdrant", "pgvector", "Python"],
  },
  {
    value: "realtime",
    label: "Real-Time Analytics",
    icon: Zap,
    title: "Real-Time Analytics und Streaming",
    desc: "Event-Streaming und Change Data Capture für Live-Dashboards, Echtzeit-Features und KI-Entscheidungen mit minimaler Latenz, auch bei hohem Durchsatz und vielen Quellen.",
    tools: ["Apache Kafka", "Apache Flink", "Redis Streams", "ClickHouse"],
  },
  {
    value: "feature",
    label: "Feature Engineering",
    icon: Cpu,
    title: "Feature Engineering für ML",
    desc: "Aussagekräftige Features aus Rohdaten berechnen und konsistent für Training und Inferenz bereitstellen, performant auch bei sehr großen Datenmengen und vielen Modellen.",
    tools: ["Apache Spark", "Polars", "Pandas", "dbt", "Feature Store"],
  },
  {
    value: "etl",
    label: "ETL und Warehouse",
    icon: Server,
    title: "ETL und Data Warehouse",
    desc: "Klassische Batch-Pipelines, die strukturierte Daten zuverlässig in ein Warehouse oder Lakehouse überführen: das Fundament für Reporting, Analytics und KI.",
    tools: ["Apache Airflow", "dbt", "PostgreSQL", "DuckDB", "Apache Iceberg"],
  },
];

const capabilities = [
  {
    icon: Database,
    title: "Daten-Pipeline Entwicklung",
    description:
      "Robuste, skalierbare Daten-Pipelines von der Quelle bis zum KI-Modell. Batch- und Streaming-Pipelines, automatisierte Extraktion, Transformation und Laden (ETL und ELT) mit modernen, quelloffenen Frameworks und sauberer Fehlerbehandlung.",
  },
  {
    icon: Layers,
    title: "Datenarchitektur und Lakehouse",
    description:
      "Moderne Datenarchitektur für KI: Data Lakes, Data Warehouses, Lakehouse-Architekturen und Data Mesh. Wir designen die Dateninfrastruktur, die Ihre KI-Strategie heute trägt und morgen mitwächst.",
  },
  {
    icon: Sparkles,
    title: "KI-Datenaufbereitung",
    description:
      "Spezialisierte Pipelines für KI: Embedding-Generierung, Chunking-Strategien für RAG, Feature Engineering, Daten-Labeling-Workflows und automatisierte Datenaugmentation für stabiles ML-Training.",
  },
  {
    icon: Gauge,
    title: "Data Quality und Monitoring",
    description:
      "Automatisierte Qualitätssicherung: Schema-Validierung, Anomalie-Erkennung, Data Profiling, Lineage-Tracking und Alerting bei Qualitätsproblemen, bevor sie Ihre KI-Modelle erreichen.",
  },
  {
    icon: Zap,
    title: "Streaming und Real-Time",
    description:
      "Echtzeit-Datenverarbeitung für KI-Anwendungen: Event-Streaming mit Apache Kafka, Change Data Capture, Real-Time Feature Stores und Low-Latency-Pipelines für Live-Entscheidungen.",
  },
  {
    icon: Shield,
    title: "DSGVO-konforme Pipelines",
    description:
      "Datenschutz by Design: Anonymisierung, Pseudonymisierung, Zugriffskontrolle, Audit-Logging und automatische Löschfristen direkt in der Pipeline. Compliance ist Teil der Architektur.",
  },
];

const stack = [
  { icon: Workflow, category: "Orchestrierung", tools: "Apache Airflow, Prefect, Dagster, n8n" },
  { icon: Boxes, category: "Transformation", tools: "dbt, Apache Spark, Polars, Pandas" },
  { icon: Zap, category: "Streaming", tools: "Apache Kafka, Apache Flink, Redis Streams" },
  { icon: Database, category: "Datenbanken", tools: "PostgreSQL, ClickHouse, DuckDB, TimescaleDB" },
  { icon: Brain, category: "Vector-Datenbanken", tools: "Qdrant, pgvector, Weaviate, Milvus" },
  { icon: Gauge, category: "Data Quality", tools: "Great Expectations, dbt Tests, Soda" },
  { icon: Layers, category: "Storage", tools: "MinIO (S3), Delta Lake, Apache Iceberg" },
  { icon: Activity, category: "Observability", tools: "Grafana, Prometheus, OpenLineage" },
];

const targetGroups = [
  {
    icon: Brain,
    who: "Unternehmen mit KI-Ambitionen",
    what: "Sie wollen KI einsetzen, aber Ihre Daten liegen in Silos, sind inkonsistent oder schwer zugänglich. Data Engineering schafft die belastbare Grundlage dafür.",
  },
  {
    icon: Users,
    who: "Bestehende KI-Teams",
    what: "Ihre Data Scientists verbringen einen Großteil der Zeit mit Datenaufbereitung statt Modellentwicklung. Professionelle Pipelines automatisieren genau diese Arbeit.",
  },
  {
    icon: Sparkles,
    who: "Teams mit RAG-Projekten",
    what: "Sie bauen eine KI-Wissensdatenbank: Embedding-Pipelines, Chunking, Vector-Datenbank-Integration und die automatische Aktualisierung der Wissensbasis.",
  },
  {
    icon: ShieldCheck,
    who: "Regulierte Branchen",
    what: "Ärzte, Banken und Versicherungen: DSGVO-konforme Pipelines mit Anonymisierung, Audit-Trail und automatischen Löschfristen, sauber dokumentiert.",
  },
  {
    icon: ShoppingCart,
    who: "E-Commerce und Retail",
    what: "Echtzeit-Daten für KI-gestützte Empfehlungen, Preisoptimierung und Bestandsmanagement, zusammengeführt aus vielen verschiedenen Quellen.",
  },
  {
    icon: Factory,
    who: "Industrie und Fertigung",
    what: "IoT-, Sensor- und Maschinendaten für Predictive Maintenance und Prozessoptimierung mit KI aufbereiten, auch bei hohem Datenvolumen.",
  },
];

const whyUs = [
  {
    icon: Brain,
    title: "KI-first Denkweise",
    desc: "Wir bauen Pipelines nicht nur für Reporting, sondern primär für KI: Embedding-Pipelines, Feature Stores, ML-optimierte Transformationen und RAG-Architekturen.",
    badge: "KI-Fokus",
  },
  {
    icon: Network,
    title: "End-to-End aus einer Hand",
    desc: "Von der Datenquelle bis zum produktiven KI-Modell: Data Engineering, MLOps und KI-Entwicklung ohne Brüche zwischen verschiedenen Dienstleistern.",
    badge: "Ganzheitlich",
  },
  {
    icon: Lock,
    title: "DSGVO-nativ",
    desc: "Datenschutz ist kein Nachgedanke: Anonymisierung, Pseudonymisierung und Zugriffskontrolle sind fester Bestandteil jeder Pipeline, die wir bauen.",
    badge: "Compliance",
  },
  {
    icon: MapPin,
    title: "EU-Hosting, Open Source",
    desc: "Praxiserprobte, überwiegend quelloffene Werkzeuge, self-hostbar auf EU-Servern. Kein Vendor-Lock-in, volle Kontrolle über Ihre Daten.",
    badge: "Souverän",
  },
];

const processSteps = [
  {
    step: "01",
    icon: Search,
    title: "Kostenlose Erstanalyse",
    time: "30 Minuten",
    desc: "Wir sichten Datenquellen, Systeme und Engpässe und identifizieren die lohnendsten Pipeline-Kandidaten. Kein Verkaufsgespräch, sondern Klartext.",
  },
  {
    step: "02",
    icon: FileText,
    title: "Architektur und Assessment",
    time: "Woche 1",
    desc: "Vollständige Analyse von Datenlage, Quellen und Zielsystemen. Sie erhalten einen Architektur-Entwurf inklusive Aufwands- und ROI-Kalkulation.",
  },
  {
    step: "03",
    icon: Workflow,
    title: "Pipeline-Implementierung",
    time: "Wochen 2 bis 4",
    desc: "Wir bauen die erste Pipeline inklusive Data-Quality-Gates und übergeben einen lauffähigen Prototyp, den Sie sofort produktiv nutzen.",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Go-Live und Betrieb",
    time: "ab Woche 5",
    desc: "Monitoring, Lineage-Tracking und laufende Optimierung, dazu Skalierung auf weitere Quellen, Use-Cases und eine unternehmensweite Datenplattform.",
  },
];

const relatedServices = [
  {
    icon: Workflow,
    title: "MLOps und LLMOps",
    desc: "Professioneller Betrieb, Deployment und Monitoring Ihrer KI-Modelle in der Produktion.",
    href: "/leistungen/mlops",
  },
  {
    icon: Brain,
    title: "KI-Wissensdatenbank",
    desc: "RAG auf Ihrem Firmenwissen, gespeist von genau den Daten-Pipelines, die wir hier bauen.",
    href: "/ki-wissensdatenbank",
  },
  {
    icon: Network,
    title: "n8n Automatisierung",
    desc: "Verbinden Sie Datenflüsse und Systeme automatisiert, ohne durchgehend zu programmieren.",
    href: "/leistungen/n8n-automatisierung",
  },
];

export default function Page() {
  return (
    <>
      <Script
        id="faq-schema-data-engineering"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-schema-data-engineering"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Database className="w-6 h-6 text-primary" />
                    </div>
                    <Badge
                      variant="outline"
                      className="rounded-full bg-primary/10 text-primary border-primary/20"
                    >
                      Data Engineering, Daten-Pipelines
                    </Badge>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Von der Quelle bis zur{" "}
                    <span className="text-primary">KI-Pipeline</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Wir bauen robuste, skalierbare Daten-Pipelines, die Ihre
                    KI-Projekte mit hochwertigen Daten versorgen. ETL und ELT,
                    Streaming, Data Quality und Vektorisierung, DSGVO-konform auf
                    EU-Servern.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Daten-Assessment</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#stack">Tech-Stack ansehen</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Server className="w-4 h-4 text-primary" /> EU-Hosting
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Boxes className="w-4 h-4 text-primary" /> Open Source
                    </span>
                  </div>
                </div>

                {/* Right: bespoke Quelle -> Transform -> KI Visual */}
                <Card className="relative border-2 shadow-xl shadow-primary/5">
                  <div
                    className="absolute -top-4 -right-4 w-28 h-28 bg-primary/5 rounded-full blur-2xl"
                    aria-hidden
                  />
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <CardTitle className="text-lg">Ihre Daten-Pipeline</CardTitle>
                        <CardDescription>Quelle zu Transform zu KI</CardDescription>
                      </div>
                      <Badge
                        variant="outline"
                        className="rounded-full text-[10px] bg-primary/10 text-primary border-primary/20 shrink-0"
                      >
                        Live
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5">
                    <div className="relative">
                      {heroFlow.map((n, i) => {
                        const Icon = n.icon;
                        const last = i === heroFlow.length - 1;
                        return (
                          <div
                            key={n.label}
                            className={`relative flex gap-4 ${last ? "" : "pb-5"}`}
                          >
                            {!last && (
                              <span
                                className="absolute left-[21px] top-12 bottom-1 w-px bg-gradient-to-b from-primary/50 to-primary/10"
                                aria-hidden
                              />
                            )}
                            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 relative z-10">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1 rounded-xl border border-border bg-muted/30 p-3">
                              <div className="flex items-center justify-between gap-2 mb-1">
                                <span className="font-semibold text-sm">{n.label}</span>
                                <span className="text-[10px] font-medium uppercase tracking-wider text-primary">
                                  {n.tag}
                                </span>
                              </div>
                              <p className="text-xs text-muted-foreground leading-snug">
                                {n.desc}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="mt-4 flex items-center justify-between rounded-lg bg-primary/5 px-3 py-2 text-[11px] text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Gauge className="w-3.5 h-3.5 text-primary" /> Automatisiert und überwacht
                      </span>
                      <span>DSGVO, EU-Server</span>
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
                  <Badge
                    variant="outline"
                    className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20"
                  >
                    Definition
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Was ist Data Engineering? Die Grundlage für erfolgreiche KI
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      <strong className="text-foreground">Data Engineering</strong>{" "}
                      ist die Ingenieursdisziplin, die Systeme zur Sammlung,
                      Speicherung, Transformation und Bereitstellung von Daten
                      aufbaut und betreibt. Während Data Scientists Modelle
                      trainieren und Analysen erstellen, sorgen Data Engineers
                      dafür, dass die richtigen Daten zur richtigen Zeit im
                      richtigen Format verfügbar sind. Ohne dieses Fundament
                      scheitern viele KI-Projekte nicht an der KI selbst, sondern
                      an mangelhaften Daten.
                    </p>
                    <p>
                      Eine{" "}
                      <strong className="text-foreground">Daten-Pipeline</strong>{" "}
                      ist das Herzstück: Sie verbindet Datenquellen wie ERP, CRM,
                      Datenbanken, APIs und Dokumente mit den Systemen, die Daten
                      konsumieren, sei es ein KI-Modell, ein Dashboard oder eine
                      Analyseplattform. Moderne Pipelines sind automatisiert,
                      fehlertolerant, skalierbar und überwacht. Sie folgen dem{" "}
                      <strong className="text-foreground">ETL</strong>-Muster
                      (Extract, Transform, Load) oder dem moderneren{" "}
                      <strong className="text-foreground">ELT</strong>-Muster, bei
                      dem Daten zuerst roh geladen und dann im Zielsystem
                      transformiert werden. Für KI ist ELT oft vorteilhafter, weil
                      sich Rohdaten für verschiedene Anwendungsfälle immer wieder
                      neu aufbereiten lassen.
                    </p>
                    <p>
                      Im Kontext von KI kommen spezialisierte Aufgaben hinzu:{" "}
                      <strong className="text-foreground">Feature Engineering</strong>{" "}
                      erzeugt aussagekräftige Merkmale aus Rohdaten,{" "}
                      <strong className="text-foreground">Embedding-Pipelines</strong>{" "}
                      wandeln Texte, Bilder und Dokumente in Vektoren für RAG und
                      semantische Suche um,{" "}
                      <strong className="text-foreground">Data-Labeling-Workflows</strong>{" "}
                      annotieren Trainingsdaten und{" "}
                      <strong className="text-foreground">Feature Stores</strong>{" "}
                      stellen wiederverwendbare Features konsistent für Training
                      und Inferenz bereit.
                    </p>
                    <p>
                      Die{" "}
                      <strong className="text-foreground">Datenarchitektur</strong>{" "}
                      bildet den strategischen Rahmen. Moderne Ansätze wie{" "}
                      <strong className="text-foreground">Data Lakehouse</strong>,
                      die Kombination aus Data Lake und Data Warehouse, oder{" "}
                      <strong className="text-foreground">Data Mesh</strong>, die
                      domänenorientierte, dezentrale Datenverantwortung,
                      ermöglichen es, analytische und KI-Workloads gleichermaßen
                      effizient zu bedienen. Die KI Kanzlei begleitet Unternehmen
                      im DACH-Raum von der ersten Pipeline bis zur
                      unternehmensweiten Datenplattform, immer DSGVO-konform und
                      auf EU-Servern.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Datenintegration</Badge>
                    <Badge variant="secondary" className="rounded-full">Data Warehouse</Badge>
                    <Badge variant="secondary" className="rounded-full">ETL und ELT</Badge>
                    <Badge variant="secondary" className="rounded-full">Data Lakehouse</Badge>
                    <Badge variant="secondary" className="rounded-full">Data Mesh</Badge>
                  </div>
                </div>

                <Card className="border-2 bg-primary/5 border-primary/20 lg:sticky lg:top-24">
                  <CardHeader>
                    <CardTitle className="text-xl">Unsere Pipelines auf einen Blick</CardTitle>
                    <CardDescription>Was professionelle Daten-Pipelines auszeichnet.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {keyProperties.map(({ label, value }) => (
                      <div
                        key={label}
                        className="flex items-center justify-between py-2.5 border-b border-border last:border-0"
                      >
                        <span className="text-sm font-medium text-foreground">{label}</span>
                        <span className="text-sm text-muted-foreground text-right max-w-[55%]">{value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* PIPELINE-STUFEN */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <Badge
                  variant="outline"
                  className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20"
                >
                  Die Pipeline
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Fünf Stufen von der Rohdatenquelle bis zur KI
                </h2>
                <p className="text-lg text-muted-foreground">
                  Jede Stufe automatisiert, getestet und überwacht. So fließen
                  Ihre Daten zuverlässig dorthin, wo sie Wert schaffen.
                </p>
              </div>
              <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <div
                  className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40"
                  aria-hidden
                />
                {pipelineStages.map(({ icon: Icon, step, label, desc }) => (
                  <Card key={step} className="border-2 hover-lift relative">
                    <CardContent className="pt-5 text-center">
                      <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center mb-3 mx-auto shadow-lg shadow-primary/20 relative z-10 ring-4 ring-background">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="text-xs font-bold text-primary mb-1">STUFE {step}</div>
                      <div className="font-bold mb-1.5">{label}</div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* VERGLEICH */}
          <section className="py-14 md:py-20 bg-white/50 relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
              aria-hidden
            />
            <div className="container mx-auto px-4 max-w-7xl relative">
              <div className="text-center mb-12">
                <Badge
                  variant="outline"
                  className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20"
                >
                  Architektur-Vergleich
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  ETL, ELT oder Real-Time Streaming?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Drei Pipeline-Muster mit unterschiedlichen Stärken. Welches zu
                  Ihren Daten und KI-Zielen passt, klären wir im kostenlosen
                  Assessment.
                </p>
              </div>
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[22%] font-bold text-foreground">Kriterium</TableHead>
                      <TableHead className="text-muted-foreground">ETL</TableHead>
                      <TableHead className="text-primary font-bold">ELT</TableHead>
                      <TableHead className="text-muted-foreground">Real-Time Streaming</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pipelineComparison.map((row, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{row.dimension}</TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          <span className="inline-flex items-start gap-1.5">
                            {row.etl.good ? (
                              <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                            ) : (
                              <X className="w-3.5 h-3.5 text-muted-foreground/60 mt-0.5 shrink-0" />
                            )}
                            {row.etl.t}
                          </span>
                        </TableCell>
                        <TableCell className="text-sm text-primary font-medium bg-primary/5">
                          <span className="inline-flex items-start gap-1.5">
                            {row.elt.good ? (
                              <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                            ) : (
                              <X className="w-3.5 h-3.5 text-muted-foreground/60 mt-0.5 shrink-0" />
                            )}
                            {row.elt.t}
                          </span>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          <span className="inline-flex items-start gap-1.5">
                            {row.streaming.good ? (
                              <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                            ) : (
                              <X className="w-3.5 h-3.5 text-muted-foreground/60 mt-0.5 shrink-0" />
                            )}
                            {row.streaming.t}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </section>

          {/* LEISTUNGEN: Bento */}
          <section id="leistungen" className="py-14 md:py-20 scroll-mt-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge
                  variant="outline"
                  className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20"
                >
                  Leistungen
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Unsere Data Engineering Leistungen
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Von der Datenquelle bis zum KI-Modell: professionelle
                  Daten-Pipelines für Ihre KI-Strategie.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {capabilities.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <Card
                      key={i}
                      className={`hover-lift border-2 ${
                        i === 0 ? "lg:col-span-2 bg-primary/5 border-primary/20" : ""
                      }`}
                    >
                      <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{c.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{c.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* TABS: Tech Stack nach Use-Case */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge
                  variant="outline"
                  className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20"
                >
                  Use-Cases
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Der passende Stack für Ihren Anwendungsfall
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Wir wählen die Werkzeuge, die zu Ihrem Use-Case passen, nicht
                  das, was gerade trendet. Ein Auszug nach Einsatzgebiet.
                </p>
              </div>
              <Tabs defaultValue="rag" className="w-full">
                <TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">
                  {stackByUseCase.map((s) => {
                    const Icon = s.icon;
                    return (
                      <TabsTrigger
                        key={s.value}
                        value={s.value}
                        className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border"
                      >
                        <Icon className="w-4 h-4 mr-1.5" />
                        {s.label}
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
                {stackByUseCase.map((s) => (
                  <TabsContent key={s.value} value={s.value}>
                    <Card className="border-2">
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {s.tools.map((tool) => (
                            <Badge key={tool} variant="secondary" className="rounded-full">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>

          {/* TECH-STACK MIT LOGOS */}
          <section id="stack" className="py-14 md:py-20 scroll-mt-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge
                  variant="outline"
                  className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20"
                >
                  Tech-Stack
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Bewährte Werkzeuge, self-hostbar auf EU-Servern
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Überwiegend quelloffene Technologien, die wir in der Produktion
                  betreiben. Kein Vendor-Lock-in, volle Kontrolle über Ihre Daten.
                </p>
              </div>

              {/* Logo-Grid in weißen Boxen */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
                {logos.map((l) => (
                  <div
                    key={l.src}
                    className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-border bg-white p-4 text-center hover-lift"
                  >
                    <img
                      src={`/img/logos/${l.src}.svg`}
                      alt={`${l.name} Logo`}
                      className="w-9 h-9 object-contain"
                      loading="lazy"
                      width={36}
                      height={36}
                    />
                    <div className="text-sm font-semibold leading-tight">{l.name}</div>
                    <div className="text-[11px] text-muted-foreground leading-tight">{l.use}</div>
                  </div>
                ))}
              </div>

              {/* Stack-Kategorien */}
              <div className="grid md:grid-cols-2 gap-4">
                {stack.map(({ icon: Icon, category, tools }, i) => (
                  <Card key={i} className="border-2 hover-lift">
                    <CardContent className="pt-5 flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-primary mb-0.5">{category}</div>
                        <div className="text-muted-foreground text-sm">{tools}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* PROZESS */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="max-w-2xl mb-12">
                <Badge
                  variant="outline"
                  className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20"
                >
                  Der Ablauf
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  In vier Schritten zur produktiven Daten-Pipeline
                </h2>
                <p className="text-lg text-muted-foreground">
                  Von der ersten Analyse bis zum laufenden Betrieb, transparent
                  und ohne Überraschungen.
                </p>
              </div>
              <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div
                  className="hidden lg:block absolute top-7 left-[12%] right-[12%] h-px bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40"
                  aria-hidden
                />
                {processSteps.map(({ step, icon: Icon, title, time, desc }) => (
                  <div key={step} className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center mb-4 shadow-lg shadow-primary/20 relative z-10 ring-4 ring-background">
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

          {/* ZIELGRUPPEN */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge
                  variant="outline"
                  className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20"
                >
                  Für wen
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Wer profitiert von professionellem Data Engineering?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Überall, wo Daten verstreut, inkonsistent oder schwer nutzbar
                  sind und KI das ändern soll.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {targetGroups.map(({ icon: Icon, who, what }, i) => (
                  <Card key={i} className="hover-lift border-2">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="font-bold">{who}</div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{what}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* WARUM KI KANZLEI */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge
                  variant="outline"
                  className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20"
                >
                  Warum die KI Kanzlei
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Data Engineering, das auf KI ausgelegt ist
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {whyUs.map(({ icon: Icon, title, desc, badge }, i) => (
                  <Card key={i} className="hover-lift border-2 text-center">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2 mx-auto">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <Badge variant="secondary" className="rounded-full mx-auto mb-1">{badge}</Badge>
                      <CardTitle className="text-lg">{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* ERGEBNISSE */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-border rounded-2xl overflow-hidden bg-card">
                {[
                  ["10x", "schnellere Datenbereitstellung"],
                  ["99%", "validierte Datenqualität in der Pipeline"],
                  ["EU", "Hosting, DSGVO-konform by Design"],
                ].map(([v, l], i) => (
                  <div
                    key={i}
                    className="p-8 text-center border-b md:border-b-0 md:border-r last:border-0 border-border"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-primary">{v}</div>
                    <div className="text-sm text-muted-foreground mt-2">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20 bg-white/50 relative overflow-hidden">
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50rem] h-[20rem] bg-primary/5 rounded-full blur-3xl pointer-events-none"
              aria-hidden
            />
            <div className="container mx-auto px-4 max-w-3xl relative">
              <div className="text-center mb-12">
                <Badge
                  variant="outline"
                  className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20"
                >
                  FAQ
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Häufige Fragen zu Data Engineering
                </h2>
                <p className="text-lg text-muted-foreground">
                  Alles rund um Daten-Pipelines, ETL und ELT, Streaming und
                  Datenqualität.
                </p>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqs.map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border-2 border-border rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:bg-primary/5"
                  >
                    <AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-5">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* VERWANDTE LEISTUNGEN */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <Badge
                  variant="outline"
                  className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20"
                >
                  Ergänzende Leistungen
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  Das passt zu Data Engineering
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Saubere Daten sind die Grundlage. Diese Leistungen bauen direkt
                  darauf auf.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {relatedServices.map(({ icon: Icon, title, desc, href }) => (
                  <a key={href} href={href} className="group block">
                    <Card className="h-full border-2 hover-lift group-hover:border-primary/40">
                      <CardHeader>
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 transition-colors ${serviceLogos[href] ? "bg-white border border-border" : "bg-primary/10 group-hover:bg-primary"}`}>
                          {serviceLogos[href] ? (
                            <img
                              src={`/img/logos/${serviceLogos[href]}.svg`}
                              alt={title}
                              className="w-7 h-7 object-contain"
                            />
                          ) : (
                            <Icon className="w-6 h-6 text-primary transition-colors group-hover:text-white" />
                          )}
                        </div>
                        <CardTitle className="text-xl">{title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed mb-4">{desc}</p>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                          Mehr erfahren
                        </span>
                      </CardContent>
                    </Card>
                  </a>
                ))}
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
