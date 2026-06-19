import type { Metadata } from "next";
import { serviceLogos } from "@/lib/serviceLogos";
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
  Server,
  GitBranch,
  Shield,
  ShieldCheck,
  Layers,
  Cpu,
  Check,
  X,
  GitMerge,
  Database,
  Activity,
  Lock,
  Zap,
  FileText,
  Boxes,
  Gauge,
  LineChart,
  Workflow,
  Rocket,
  Search,
  Settings,
  MapPin,
  Network,
  Brain,
  RefreshCw,
  Bell,
  AlertTriangle,
  BarChart3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Echte Tool-Logos (weisse Box, damit farbige Logos auf hellem Grund sichtbar sind)
function LogoBox({ slug, alt }: { slug: string; alt: string }) {
  return (
    <span className="w-9 h-9 rounded-lg bg-white border border-border flex items-center justify-center shrink-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/img/logos/${slug}.svg`} alt={alt} className="w-5 h-5 object-contain" />
    </span>
  );
}

export const metadata: Metadata = {
  title: "MLOps & LLMOps: ML-Pipelines, Deployment & KI-Infrastruktur",
  description:
    "MLOps und LLMOps für den DACH-Raum: reproduzierbare ML-Pipelines, Model-Deployment, vLLM-Serving und Monitoring. Skalierbar auf Kubernetes, DSGVO-konform auf EU-Servern. Jetzt kostenlose Bestandsaufnahme anfragen.",
  keywords:
    "MLOps, LLMOps, ML Pipeline, KI Plattform, KI Infrastruktur, AI Infrastructure, MLflow, Kubeflow, LLM Deployment, vLLM, Model Registry, KI Monitoring, Drift Detection, Kubernetes KI, DSGVO MLOps, EU AI Act MLOps",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/mlops" },
};

const faqs = [
  {
    q: "Was ist MLOps und warum braucht mein Unternehmen das?",
    a: "MLOps (Machine Learning Operations) verbindet Data Science mit DevOps-Prinzipien: automatisierte Trainings-Pipelines, Modell-Versionierung, CI/CD für KI-Modelle und laufendes Monitoring in der Produktion. Ohne MLOps entstehen sogenannte ML-Schulden: Modelle, die niemand mehr reproduzieren kann, Deployments, die immer manuell ausgeführt werden, und keine Warnung, wenn die KI-Qualität schleichend abnimmt. Für Unternehmen, die KI produktiv und verlässlich einsetzen wollen, ist MLOps kein Luxus, sondern die Grundvoraussetzung für planbaren Betrieb.",
  },
  {
    q: "Was ist LLMOps und wie unterscheidet es sich von klassischem MLOps?",
    a: "LLMOps (Large Language Model Operations) ist der spezialisierte Betrieb von Large Language Models in der Produktion. Klassisches MLOps war ursprünglich auf Modelle wie Scikit-learn, XGBoost oder klassische neuronale Netze ausgelegt. LLMOps erweitert das um LLM-spezifische Herausforderungen: Prompt-Management und Versionierung, Inferenz-Optimierung über vLLM und TGI, Token-Kosten-Kontrolle, Evaluierung von Antwortqualität, RAG-Pipeline-Überwachung und die DSGVO-konforme Handhabung von Nutzereingaben. Die Disziplinen überschneiden sich, doch der Betrieb generativer Modelle stellt eigene Anforderungen an Skalierung und Kostensteuerung.",
  },
  {
    q: "MLflow vs. Kubeflow: Welches Tool passt zu uns?",
    a: "MLflow ist ein leichtgewichtiges, entwicklerfreundliches Experiment-Tracking-Tool, ideal für Teams, die gerade mit MLOps starten. Es speichert Experimente, Modelle und Parameter, lässt sich lokal betreiben und erzwingt keine Kubernetes-Abhängigkeit. Kubeflow ist eine vollständige MLOps-Plattform auf Kubernetes-Basis mit Pipelines, Notebooks und Distributed Training, deutlich mächtiger, aber auch aufwändiger im Betrieb. Für den DACH-Mittelstand empfehlen wir meist MLflow als Einstieg, kombiniert mit Kubernetes für das Deployment. Das liefert rund 80 Prozent des Nutzens ohne die Komplexität einer Vollplattform.",
  },
  {
    q: "Kann ich KI DSGVO-konform auf Kubernetes betreiben?",
    a: "Ja. Kubernetes ist sogar eine der besten Plattformen für DSGVO-konformen KI-Betrieb, weil Sie die volle Kontrolle über Ihre Infrastruktur behalten. Wir deployen auf EU-Servern (Hetzner, OVH oder Ihr eigenes Rechenzentrum), implementieren Netzwerksegmentierung, Audit-Logging und rollenbasierte Zugriffskontrolle. Open-Source-LLMs wie Llama 4 oder Mistral laufen vollständig on-premise, sodass keine Anfragen an externe US-Cloud-Anbieter abfließen.",
  },
  {
    q: "Was kostet eine MLOps-Implementierung im Mittelstand?",
    a: "Das hängt stark vom Ausgangspunkt ab. Ein einfaches MLflow-Setup mit automatisierten Deployment-Pipelines ist innerhalb von zwei bis vier Wochen umsetzbar. Eine vollständige KI-Plattform mit Model Registry, Monitoring, Feature Store und Multi-Team-Zugriff dauert drei bis sechs Monate. Wir kalkulieren konkret nach Ihrem Setup. Der erste Schritt ist eine kostenlose Bestandsaufnahme, bei der wir gemeinsam die sinnvolle Ausbaustufe für Ihr Budget bestimmen, statt Funktionen einzubauen, die Sie nie brauchen.",
  },
  {
    q: "Wie hängen MLOps und der EU AI Act zusammen?",
    a: "Der EU AI Act (seit August 2024 in Kraft) stellt klare Anforderungen an produktive KI-Systeme: Dokumentation der Trainingsdaten, Modell-Versionierung, Performance-Monitoring und menschliche Aufsicht für Hochrisiko-Systeme. Eine saubere MLOps-Implementierung erfüllt viele dieser Anforderungen automatisch: Model Registry bedeutet Versionierung, Monitoring liefert den Performance-Nachweis, Experiment-Tracking sichert Reproduzierbarkeit. Wir bauen MLOps-Setups, die EU-AI-Act-Compliance von Anfang an mitdenken.",
  },
  {
    q: "Was ist Model Drift und wie erkennt man ihn rechtzeitig?",
    a: "Model Drift beschreibt den schleichenden Qualitätsverlust eines Modells, wenn sich die Realität von den Trainingsdaten entfernt. Ein Empfehlungs- oder Prognosemodell, das vor einem Jahr exzellent war, kann heute systematisch danebenliegen, ohne dass jemand es bemerkt. Wir richten Drift-Detection ein, die Eingabeverteilungen und Vorhersagequalität laufend mit Referenzwerten vergleicht und automatisch Alarm schlägt, bevor Nutzer oder Kunden den Abfall spüren. Bei Bedarf wird ein Retraining-Workflow automatisch angestoßen.",
  },
  {
    q: "Können Sie auch eine bestehende, gewachsene KI-Infrastruktur übernehmen?",
    a: "Ja. In den meisten Projekten treffen wir nicht auf die grüne Wiese, sondern auf gewachsene Setups: Modelle in Notebooks, manuelle Deployments per SSH, verstreute Skripte ohne Versionierung. Wir machen zunächst eine ehrliche Bestandsaufnahme, sichern Reproduzierbarkeit und führen MLOps schrittweise ein, ohne den laufenden Betrieb zu unterbrechen. Ihr Team wird dabei eingebunden, alles bleibt dokumentiert und übertragbar, damit keine neue Abhängigkeit von uns entsteht.",
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
  name: "MLOps & LLMOps",
  serviceType: "MLOps, LLMOps, KI-Infrastruktur, Model-Deployment",
  provider: {
    "@type": "ProfessionalService",
    name: "KI Kanzlei",
    url: "https://ki-kanzlei.at",
    telephone: "+436642314676",
  },
  description:
    "MLOps und LLMOps für Unternehmen im DACH-Raum: reproduzierbare ML-Pipelines, Model-Deployment, vLLM-Serving und Monitoring auf Kubernetes, DSGVO-konform und EU-gehostet.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

// Hero pipeline visual data
const pipelineStages = [
  { icon: Database, label: "Daten & Features", meta: "Feature Store" },
  { icon: GitMerge, label: "Training", meta: "MLflow Tracking" },
  { icon: Boxes, label: "Model Registry", meta: "versioniert" },
  { icon: Rocket, label: "Deployment", meta: "Canary / Rollback" },
  { icon: Activity, label: "Monitoring", meta: "Drift & Alerting" },
];

const liveMetrics = [
  { label: "p95 Latenz", value: "180 ms", bar: 28, tone: "good" },
  { label: "GPU-Auslastung", value: "71 %", bar: 71, tone: "warn" },
  { label: "Model-Drift", value: "0,03", bar: 14, tone: "good" },
  { label: "Uptime (30 Tage)", value: "99,94 %", bar: 99, tone: "good" },
];

const statBand = [
  { value: "99,9 %", label: "Uptime SLA mit Auto-Scaling" },
  { value: "EU", label: "Hosting in AT, DE und der EU" },
  { value: "100 %", label: "Open Source, kein Lock-in" },
  { value: "2 Wo.", label: "bis zur ersten Pipeline live" },
];

const glossary = [
  ["MLOps", "Betrieb klassischer ML-Modelle"],
  ["LLMOps", "Betrieb generativer LLMs"],
  ["Model Registry", "versionierte Modell-Ablage"],
  ["Feature Store", "konsistente Datenpipelines"],
  ["Drift Detection", "Frühwarnung bei Qualitätsabfall"],
  ["vLLM / TGI", "Hochdurchsatz-Inferenz"],
];

const featureCards = [
  {
    icon: Server,
    title: "LLM-Infrastruktur & Deployment",
    description:
      "Wir deployen Open-Source-LLMs wie Llama 4, Mistral und Qwen auf Ihrem Kubernetes-Cluster oder dedizierten GPU-Servern. Mit vLLM und TGI erreichen wir maximalen Durchsatz bei minimaler Latenz, inklusive OpenAI-kompatibler API. Alles DSGVO-konform auf EU-Servern, ohne Anfragen an externe Dienste.",
    highlight: true,
    tags: ["vLLM", "TGI", "Ollama", "Kubernetes", "GPU-Cluster"],
  },
  {
    icon: GitBranch,
    title: "ML-Pipelines & CI/CD",
    description:
      "Automatisierte Pipelines für Training, Evaluierung und Deployment von KI-Modellen. Mit MLflow tracken wir Experimente reproduzierbar, mit Kubeflow oder Apache Airflow orchestrieren wir komplexe Workflows bis zum automatischen Rollout.",
    highlight: false,
    tags: ["MLflow", "Kubeflow", "Airflow", "CI/CD", "Model Registry"],
  },
  {
    icon: LineChart,
    title: "Monitoring & Observability",
    description:
      "Prometheus, Grafana und Langfuse geben Echtzeit-Einblick in Latenz, Kosten und Modell-Qualität. Drift-Detection erkennt, wenn Ihre KI schlechter wird, lange bevor Nutzer oder Kunden es bemerken.",
    highlight: false,
    tags: ["Prometheus", "Grafana", "Langfuse", "OpenTelemetry", "Alerting"],
  },
];

const lifecycle = [
  { icon: Database, phase: "Ingest", title: "Daten & Features", desc: "Versionierte Datenpipelines und ein Feature Store sorgen dafür, dass Training und Produktion exakt dieselben Merkmale sehen." },
  { icon: GitMerge, phase: "Train", title: "Training & Tracking", desc: "Jedes Experiment wird mit Parametern, Metriken und Artefakten in MLflow protokolliert, reproduzierbar bis zur einzelnen Datei." },
  { icon: Boxes, phase: "Register", title: "Model Registry", desc: "Geprüfte Modelle landen versioniert in der Registry, inklusive Stage-Übergängen von Staging bis Production." },
  { icon: Rocket, phase: "Deploy", title: "Deployment", desc: "Blue-Green- und Canary-Rollouts auf Kubernetes, mit automatischem Rollback, falls eine Version die Qualitätsschwelle reißt." },
  { icon: Activity, phase: "Observe", title: "Monitoring & Drift", desc: "Latenz, Kosten und Datenverteilung werden laufend überwacht. Bei Drift wird alarmiert oder direkt ein Retraining ausgelöst." },
];

const comparisonRows = [
  ["Modell-Deployment", "Manuell per SSH, fehleranfällig", "Automatisierte CI/CD-Pipeline mit Rollback"],
  ["Reproduzierbarkeit", "Experimente gehen verloren", "MLflow Experiment-Tracking, voll versioniert"],
  ["Monitoring", "Kein Drift-Detection, Probleme bleiben unbemerkt", "Echtzeit-Monitoring, Alerting bei Qualitätsabfall"],
  ["Skalierung", "Manuelle Anpassung, ungeplante Downtime", "Kubernetes Auto-Scaling, 99,9 Prozent Uptime"],
  ["Datenschutz", "Daten in externen US-Cloud-Diensten", "EU-Server, DSGVO-konform, on-premise möglich"],
  ["Kosten-Transparenz", "Unkontrollierte API-Kosten, keine Übersicht", "Token-Budget-Monitoring, klare Cost-Attribution"],
  ["Onboarding neuer Modelle", "Wochen, viel Handarbeit", "Standardisierter Pfad, Tage statt Wochen"],
  ["EU AI Act", "Keine Dokumentation, Compliance-Risiko", "Audit-Trail, Versionierung, nachweis-ready"],
];

const useCaseTabs = [
  {
    value: "llm-betrieb",
    label: "LLM-Betrieb",
    icon: Cpu,
    title: "Produktiver LLM-Betrieb auf Ihrer Infrastruktur",
    content:
      "Sie wollen Llama 4, Mistral oder ein fine-getuntes Modell produktiv einsetzen, aber nicht auf den Servern von OpenAI oder Azure. Wir deployen LLMs auf Ihrem Kubernetes-Cluster oder dediziertem GPU-Server. vLLM übernimmt das hochperformante Serving mit OpenAI-kompatibler API, sodass Ihre bestehenden Integrationen ohne Änderungen weiter funktionieren. Ollama eignet sich für kleinere Teams und Entwicklungsumgebungen, mit LiteLLM schaffen wir eine einheitliche API-Schicht über mehrere Modelle hinweg.",
    points: [
      "vLLM Deployment mit OpenAI-kompatibler API",
      "Modell-Quantisierung (AWQ, GGUF) für kosteneffiziente Inferenz",
      "GPU-Auslastungs-Monitoring und Auto-Scaling",
      "Failover zwischen Modellen bei Überlast",
      "DSGVO-konformes Logging und vollständiger Audit-Trail",
    ],
  },
  {
    value: "ml-pipelines",
    label: "ML-Pipelines",
    icon: Workflow,
    title: "Automatisierte ML-Pipelines von Daten bis Deployment",
    content:
      "Ein Modell einmal zu trainieren reicht nicht. Daten ändern sich, Modelle driften, neue Versionen müssen getestet werden. Wir bauen reproduzierbare ML-Pipelines: von der Datenvorverarbeitung über das Training bis zum automatischen A/B-Test und Deployment. MLflow verwaltet alle Experimente, Parameter und Metriken zentral. Jedes Modell wird versioniert und in der Model Registry geführt, sodass Sie jederzeit auf eine frühere Version zurückrollen können.",
    points: [
      "MLflow Experiment-Tracking und Model Registry",
      "Automatisiertes Retraining bei Datendrift",
      "Blue-Green- und Canary-Deployments",
      "Reproduzierbare Trainingsumgebungen via Docker",
      "Automatische Evaluierung mit definierten Qualitätsschwellen",
    ],
  },
  {
    value: "ki-plattform",
    label: "KI-Plattform",
    icon: Layers,
    title: "Unternehmensweite KI-Plattform-Architektur",
    content:
      "Wenn mehrere Teams, Projekte und Modelle zusammenspielen sollen, brauchen Sie eine gemeinsame KI-Plattform. Wir designen und implementieren die gesamte Architektur: Model Registry als Single Source of Truth, Feature Store für konsistente Datenpipelines, Inference Server mit Lastverteilung, API Gateway mit Zugriffskontrolle und Kostenallokation pro Team. Die Plattform wächst mit Ihrem Unternehmen, Sie starten mit dem, was Sie heute wirklich brauchen.",
    points: [
      "Zentraler Feature Store (Feast oder eigene Lösung)",
      "Multi-Team Model Registry mit Zugriffsrollen",
      "API Gateway mit Rate-Limiting und Cost-Tracking",
      "Self-Service-Interface für Data Scientists",
      "Skalierbare Inference-Infrastruktur auf Kubernetes",
    ],
  },
  {
    value: "eu-ai-act",
    label: "EU AI Act",
    icon: FileText,
    title: "EU AI Act Compliance im MLOps-Kontext",
    content:
      "Der EU AI Act ist seit August 2024 in Kraft und stellt konkrete Anforderungen an produktive KI-Systeme. Hochrisiko-Anwendungen wie Personalentscheidungen, Kreditvergabe oder medizinische Diagnose brauchen nachweisbare Dokumentation, menschliche Aufsicht und laufendes Monitoring. Unsere MLOps-Setups sind so konzipiert, dass Compliance-Nachweise automatisch entstehen: jedes Training wird geloggt, jede Modellversion dokumentiert, jede Vorhersage bleibt rückverfolgbar.",
    points: [
      "Automatische Dokumentation von Trainingsdaten und -prozessen",
      "Audit-Trail für alle Modell-Deployments und Vorhersagen",
      "Bias-Monitoring und Fairness-Metriken",
      "Menschliche Aufsichts-Workflows für Hochrisiko-Systeme",
      "Risikoklassifizierung Ihrer KI-Anwendungen nach EU AI Act",
    ],
  },
];

const stack: {
  icon: LucideIcon;
  category: string;
  tools: string;
  logos?: { slug: string; alt: string }[];
}[] = [
  { icon: Boxes, category: "Container & Orchestrierung", tools: "Kubernetes, Docker, Helm", logos: [{ slug: "kubernetes", alt: "Kubernetes" }, { slug: "docker", alt: "Docker" }] },
  { icon: Cpu, category: "LLM Serving", tools: "vLLM, Ollama, TGI, LiteLLM", logos: [{ slug: "ollama", alt: "Ollama" }] },
  { icon: GitBranch, category: "MLOps Plattform", tools: "MLflow, Kubeflow, Weights & Biases", logos: [{ slug: "mlflow", alt: "MLflow" }] },
  { icon: LineChart, category: "Monitoring", tools: "Prometheus, Grafana, OpenTelemetry, Langfuse", logos: [{ slug: "prometheus", alt: "Prometheus" }, { slug: "grafana", alt: "Grafana" }] },
  { icon: Brain, category: "KI-Modelle", tools: "Llama 4, Mistral, Qwen, Phi-4, Command R+", logos: [{ slug: "meta", alt: "Llama" }, { slug: "mistralai", alt: "Mistral" }] },
  { icon: Database, category: "Vector Datenbanken", tools: "Qdrant, Weaviate, pgvector, Milvus", logos: [{ slug: "qdrant", alt: "Qdrant" }, { slug: "postgresql", alt: "pgvector" }] },
  { icon: Workflow, category: "Workflow & Orchestrierung", tools: "n8n, Apache Airflow, Prefect", logos: [{ slug: "n8n", alt: "n8n" }, { slug: "apacheairflow", alt: "Apache Airflow" }] },
  { icon: Server, category: "EU-Hosting", tools: "Hetzner, OVH, On-Premise GPU-Server" },
];

const audiences = [
  { icon: Cpu, who: "Unternehmen mit produktiver KI", what: "Sie betreiben Modelle und wollen Ausfallsicherheit, Monitoring und reproduzierbare Deployments statt manueller Improvisation." },
  { icon: Lock, who: "Datenschutz-sensible Branchen", what: "Kanzleien, Ärzte und Banken: private KI-Infrastruktur auf EU-Servern statt Datenübertragung in US-Cloud-Dienste." },
  { icon: Database, who: "Data-Science-Teams", what: "Sie trainieren Modelle, aber der Weg in die Produktion ist mühsam. MLflow und automatisierte Pipelines beschleunigen das Deployment erheblich." },
  { icon: GitBranch, who: "DevOps- & Platform-Teams", what: "KI-Workloads in bestehende Kubernetes-Infrastruktur integrieren und MLOps-Best-Practices systematisch verankern." },
  { icon: Zap, who: "Software-Unternehmen", what: "KI-Features in SaaS-Produkte integrieren, skalierbar, kosteneffizient und mit voller Kontrolle über Modell-Versionen." },
  { icon: Shield, who: "EU-AI-Act-pflichtige Betriebe", what: "Hochrisiko-KI-Systeme brauchen nachweisbare Dokumentation. Unsere Setups liefern Audit-Trails und Compliance-Nachweise automatisch." },
];

const process = [
  { step: "01", icon: Search, title: "Kostenlose Bestandsaufnahme", time: "30 Minuten", desc: "Wir verstehen Ihre aktuelle KI-Infrastruktur, identifizieren die größten MLOps-Lücken und klären, welcher Ausbaustand zu Ihrem Budget passt." },
  { step: "02", icon: Settings, title: "Assessment & Architektur", time: "1 bis 2 Wochen", desc: "Vollständige Analyse: Welche Pipelines fehlen, welche Tools passen? Sie erhalten eine konkrete Zielarchitektur samt ROI-Kalkulation." },
  { step: "03", icon: GitBranch, title: "Implementierung & Pilot", time: "ab Woche 3", desc: "Wir bauen die MLOps-Infrastruktur schrittweise auf, gemeinsam mit Ihrem Team, dokumentiert und übertragbar. Keine Black Box." },
  { step: "04", icon: Rocket, title: "Go-Live & Betreuung", time: "laufend", desc: "Ihre KI-Infrastruktur geht produktiv. Wir bleiben für Monitoring, Skalierung und den nächsten Ausbauschritt verfügbar." },
];

const principles = [
  { icon: RefreshCw, title: "Reproduzierbar", text: "Jedes Modell, jedes Ergebnis lässt sich exakt wiederherstellen, von der Datenversion bis zum Hyperparameter." },
  { icon: Gauge, title: "Beobachtbar", text: "Latenz, Kosten und Qualität sind jederzeit sichtbar, statt erst im Schadensfall sichtbar zu werden." },
  { icon: ShieldCheck, title: "DSGVO-fest", text: "EU-Hosting, Audit-Logging und rollenbasierte Zugriffe sind keine Option, sondern Standard." },
  { icon: Network, title: "Ohne Lock-in", text: "Reiner Open-Source-Stack auf Kubernetes. Sie könnten alles auch ohne uns weiterbetreiben." },
];

export default function Page() {
  return (
    <>
      <Script id="faq-mlops" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-mlops" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">
                    MLOps & LLMOps für den DACH-Raum
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    KI in Produktion, die <span className="text-primary">nicht still kaputtgeht</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Produktive KI scheitert selten am Modell. Sie scheitert an fehlenden Pipelines, blindem Monitoring und Infrastruktur, die niemand kontrolliert. Wir bauen Ihre MLOps-Grundlage: mit MLflow, Kubernetes, vLLM und DSGVO-konformem EU-Hosting.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenlose MLOps-Analyse</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#vergleich">Status quo vergleichen</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-primary" /> EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Bespoke ML-Pipeline visual */}
                <Card className="relative border-2 shadow-xl shadow-primary/5">
                  <CardHeader className="border-b border-border pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Workflow className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">production-pipeline</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> 5 Stages aktiv, MLflow + Kubernetes
                        </div>
                      </div>
                      <span className="ml-auto text-[10px] uppercase tracking-wider text-muted-foreground font-medium">EU-Server</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5">
                    {/* Stage flow */}
                    <ol className="relative space-y-3">
                      <span className="absolute left-[18px] top-3 bottom-3 w-px bg-gradient-to-b from-primary/40 via-primary/30 to-primary/40" aria-hidden />
                      {pipelineStages.map((s, i) => {
                        const Icon = s.icon;
                        return (
                          <li key={i} className="relative flex items-center gap-3">
                            <span className="relative z-10 w-9 h-9 rounded-lg bg-blue-50 border border-primary/20 flex items-center justify-center shrink-0">
                              <Icon className="w-4 h-4 text-primary" />
                            </span>
                            <span className="flex-1 flex items-center justify-between rounded-lg border border-border bg-muted/30 px-3 py-2">
                              <span className="text-sm font-medium text-foreground">{s.label}</span>
                              <span className="text-[11px] font-medium text-primary">{s.meta}</span>
                            </span>
                          </li>
                        );
                      })}
                    </ol>

                    {/* Monitoring panel */}
                    <div className="mt-5 rounded-xl border border-border bg-muted/20 p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-1.5">
                          <BarChart3 className="w-3.5 h-3.5 text-primary" /> Live Monitoring
                        </span>
                        <span className="text-[11px] text-green-600 font-medium flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> healthy
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-x-5 gap-y-3">
                        {liveMetrics.map((m, i) => (
                          <div key={i}>
                            <div className="flex items-center justify-between text-xs mb-1">
                              <span className="text-muted-foreground">{m.label}</span>
                              <span className="font-semibold text-foreground tabular-nums">{m.value}</span>
                            </div>
                            <div className="h-1.5 rounded-full bg-border overflow-hidden">
                              <span
                                className={`block h-full rounded-full ${m.tone === "warn" ? "bg-amber-500" : "bg-primary"}`}
                                style={{ width: `${m.bar}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-[11px] text-center text-muted-foreground pt-3">
                      Versioniert, Audit-Trail, Drift-Detection aktiv
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* STATS BAND */}
          <section className="py-8 border-y border-border bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {statBand.map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary">{s.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* DEFINITION: 2-col mit Info-Card */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Grundlagen</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">MLOps & LLMOps: KI vom Notebook in die Produktion</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p><strong className="text-foreground">MLOps</strong> (Machine Learning Operations) ist das Fundament für jeden ernsthaften KI-Einsatz. Es verbindet Data-Science-Workflows mit DevOps-Prinzipien: automatisierte Pipelines, Modell-Versionierung in einer Model Registry, CI/CD für KI-Modelle und Monitoring, das Probleme erkennt, bevor sie teuer werden.</p>
                    <p><strong className="text-foreground">LLMOps</strong> geht einen Schritt weiter. Large Language Models wie Llama 4 oder Mistral haben eigene Anforderungen: Prompt-Versionierung, Token-Kosten-Kontrolle, Evaluierung der Antwortqualität, RAG-Pipeline-Überwachung und skalierbare Inferenz über vLLM oder TGI. Im DACH-Raum kommt DSGVO-Compliance hinzu, und genau hier trennt sich professionelles LLMOps von einer schnell zusammengeklickten Lösung.</p>
                    <p>Der teure Moment kommt selten beim Prototyp. Er kommt sechs Monate später, wenn niemand mehr weiß, welche Datenversion ein Modell trainiert hat, das Deployment nur ein Kollege per Hand kann und keine Warnung kommt, wenn die Qualität abrutscht. MLOps macht diesen Moment unmöglich.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">KI-Infrastruktur</Badge>
                    <Badge variant="secondary" className="rounded-full">Model Deployment</Badge>
                    <Badge variant="secondary" className="rounded-full">KI-Plattform</Badge>
                    <Badge variant="secondary" className="rounded-full">AI Infrastructure</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Begriffe in einem Satz</CardTitle>
                    <CardDescription>Die wichtigsten MLOps-Bausteine, kurz erklärt.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {glossary.map(([term, def]) => (
                      <div key={term} className="flex items-center justify-between py-2.5 border-b border-border last:border-0">
                        <span className="text-sm font-medium text-foreground">{term}</span>
                        <span className="text-sm text-muted-foreground text-right max-w-[58%]">{def}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* PRINZIPIEN BAND (kompakte 4er-Karten) */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unsere Prinzipien</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Vier Eigenschaften, an denen wir jedes Setup messen</h2>
                <p className="text-muted-foreground">Was eine MLOps-Implementierung haben muss, damit sie in zwei Jahren noch trägt.</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {principles.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <Card key={i} className="border-2 hover-lift">
                      <CardContent className="pt-6">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="font-bold mb-1.5">{p.title}</div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* LEISTUNGEN: Bento 3 Säulen */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unsere Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Drei Säulen unserer MLOps- & LLMOps-Arbeit</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Von der KI-Infrastruktur über automatisierte Pipelines bis zum laufenden Monitoring, alles aus einer Hand.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {featureCards.map((card, i) => {
                  const Icon = card.icon;
                  return (
                    <Card key={i} className={`hover-lift border-2 ${card.highlight ? "bg-primary/5 border-primary/20" : ""}`}>
                      <CardHeader>
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{card.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <CardDescription className="text-base leading-relaxed text-foreground/70">{card.description}</CardDescription>
                        <div className="flex flex-wrap gap-2">
                          {card.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs rounded-full">{tag}</Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* LIFECYCLE: clean horizontales Diagramm */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Der Lebenszyklus</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Der MLOps-Kreislauf, fünf Stages im Griff</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Ein Modell ist kein Projekt mit Enddatum, sondern ein Produkt im Betrieb. So sieht der Zyklus aus, den wir für Sie automatisieren.</p>
              </div>
              <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="hidden lg:block absolute top-7 left-0 right-0 h-px pointer-events-none" aria-hidden>
                  <div className="mx-auto w-4/5 h-px bg-gradient-to-r from-primary/40 via-primary/25 to-primary/40" />
                </div>
                {lifecycle.map((l, i) => {
                  const Icon = l.icon;
                  return (
                    <div key={i} className="relative flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center mb-4 shadow-lg shadow-primary/20 relative z-10 ring-8 ring-background">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="text-[11px] font-bold text-primary mb-1 tracking-wide uppercase">{l.phase}</div>
                      <h3 className="text-base font-bold mb-2">{l.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{l.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* USE CASES: Tabs */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Anwendungsfälle</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">MLOps in der Praxis, vier Kernszenarien</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Wählen Sie das Szenario, das Ihrem Vorhaben am nächsten kommt.</p>
              </div>
              <Tabs defaultValue="llm-betrieb" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 h-auto gap-1">
                  {useCaseTabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <TabsTrigger key={tab.value} value={tab.value} className="flex items-center gap-2 py-3 text-sm">
                        <Icon className="w-4 h-4" />
                        {tab.label}
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
                {useCaseTabs.map((tab) => (
                  <TabsContent key={tab.value} value={tab.value}>
                    <Card className="border-2">
                      <CardHeader>
                        <CardTitle className="text-2xl">{tab.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="grid md:grid-cols-2 gap-8">
                        <p className="text-muted-foreground leading-relaxed text-base">{tab.content}</p>
                        <ul className="space-y-3">
                          {tab.points.map((point, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="w-3.5 h-3.5 text-primary" />
                              </span>
                              <span className="text-sm text-foreground/80">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>

          {/* VERGLEICH: Tabelle */}
          <section id="vergleich" className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Der Unterschied</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">MLOps mit KI Kanzlei vs. Ad-hoc-ML ohne Struktur</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Was passiert, wenn KI-Projekte ohne MLOps in Produktion gehen, und wie es mit uns aussieht.</p>
              </div>
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-primary/5">
                      <TableHead className="font-bold text-foreground w-1/3">Bereich</TableHead>
                      <TableHead className="font-bold text-foreground w-1/3">
                        <span className="flex items-center gap-2"><X className="w-4 h-4 text-red-500" />Ohne MLOps</span>
                      </TableHead>
                      <TableHead className="font-bold text-foreground w-1/3">
                        <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-600" />Mit KI Kanzlei</span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisonRows.map((row, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-semibold">{row[0]}</TableCell>
                        <TableCell className="text-muted-foreground">
                          <span className="flex items-start gap-2"><X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />{row[1]}</span>
                        </TableCell>
                        <TableCell className="text-foreground">
                          <span className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />{row[2]}</span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </section>

          {/* TECH STACK */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Tech Stack</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Unser MLOps- & LLMOps-Stack</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Ausschließlich bewährte Open-Source-Tools, kein Vendor-Lock-in, volle Kontrolle über jede Schicht.</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stack.map(({ icon: Icon, category, tools, logos }, i) => (
                  <Card key={i} className="hover-lift border-2">
                    <CardContent className="pt-5 pb-5">
                      {logos && logos.length > 0 ? (
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          {logos.map((logo) => (
                            <LogoBox key={logo.slug} slug={logo.slug} alt={logo.alt} />
                          ))}
                        </div>
                      ) : (
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                      )}
                      <div className="font-semibold text-primary mb-1 text-xs uppercase tracking-wide">{category}</div>
                      <div className="text-foreground/80 text-sm leading-relaxed">{tools}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* ZIELGRUPPEN */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Zielgruppen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Wer von professionellem MLOps profitiert</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Sechs Konstellationen, in denen sich eine saubere MLOps-Grundlage besonders schnell auszahlt.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {audiences.map(({ icon: Icon, who, what }, i) => (
                  <Card key={i} className="hover-lift border-2">
                    <CardContent className="pt-6">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="font-bold mb-2">{who}</div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{what}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* WARNSIGNALE / Symptom-Band */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="grid lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-2">
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Woran Sie es merken</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Fünf Warnsignale für fehlendes MLOps</h2>
                  <p className="text-muted-foreground leading-relaxed">Wenn Ihnen mehr als ein Punkt bekannt vorkommt, lohnt sich ein Gespräch. Genau diese Symptome räumen wir zuerst aus dem Weg.</p>
                </div>
                <div className="lg:col-span-3 grid sm:grid-cols-1 gap-3">
                  {[
                    { icon: AlertTriangle, t: "Nur eine Person kann das Modell deployen", d: "Wissen steckt in einem Kopf statt in einer Pipeline." },
                    { icon: RefreshCw, t: "Niemand kann ein altes Ergebnis reproduzieren", d: "Datenversion und Parameter sind nicht festgehalten." },
                    { icon: Bell, t: "Qualitätsabfall fällt erst über Kundenbeschwerden auf", d: "Es fehlt Drift-Detection und Alerting." },
                    { icon: BarChart3, t: "Die monatliche API-Rechnung überrascht Sie", d: "Token- und Kosten-Monitoring sind nicht eingerichtet." },
                    { icon: FileText, t: "Für den EU AI Act fehlt jede Dokumentation", d: "Kein Audit-Trail, keine Versionsnachweise." },
                  ].map((w, i) => {
                    const Icon = w.icon;
                    return (
                      <div key={i} className="flex items-start gap-3 rounded-xl border-2 border-border bg-card px-4 py-3">
                        <span className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </span>
                        <div>
                          <div className="font-semibold text-sm">{w.t}</div>
                          <div className="text-sm text-muted-foreground">{w.d}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* PROZESS: Timeline */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Vorgehen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Von der Analyse zur produktiven KI-Infrastruktur</h2>
                <p className="text-lg text-muted-foreground">Vier Schritte, klar strukturiert und ohne Überraschungen.</p>
              </div>
              <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                <div className="hidden lg:block absolute top-8 left-0 right-0 h-px pointer-events-none" aria-hidden>
                  <div className="mx-auto w-3/4 h-px bg-gradient-to-r from-primary/40 via-primary/25 to-primary/40" />
                </div>
                {process.map((s) => {
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

          {/* FAQ */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zu MLOps, LLMOps & KI-Infrastruktur</h2>
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
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Mehr Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zu MLOps</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {[
                  { href: "/private-ai", icon: Lock, title: "Private AI", desc: "Lokale, vollständig DSGVO-konforme KI-Modelle auf Ihrer eigenen Infrastruktur, ohne US-Cloud." },
                  { href: "/ki-wissensdatenbank", icon: Brain, title: "KI Wissensdatenbank", desc: "RAG-Pipelines, die Ihr Firmenwissen sicher in produktive LLMs bringen, sauber überwacht." },
                  { href: "/n8n-automatisierung", icon: Network, title: "n8n Automatisierung", desc: "Verbinden Sie Modelle und Pipelines mit Ihren Tools, Trigger und Workflows ohne Glue-Code." },
                ].map((s, i) => {
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
