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
  Download,
  Cpu,
  Server,
  Lock,
  Settings,
  Shield,
  Building2,
  GraduationCap,
  Search,
  Rocket,
  Terminal,
  Gauge,
  HardDrive,
  Layers,
  Network,
  Boxes,
  ShieldCheck,
  MapPin,
  Euro,
  Stethoscope,
  Scale,
  Calculator,
  Database,
  Workflow,
  Brain,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ollama für Unternehmen: Lokale LLMs DSGVO-konform betreiben",
  description:
    "Ollama Setup, GPU-Optimierung und Enterprise-Deployment im DACH-Raum. Lokale LLMs wie Llama 3, Mistral und Qwen einfach installieren, hochverfügbar betreiben und 100% DSGVO-konform nutzen, ohne Cloud-Abhängigkeit.",
  keywords:
    "Ollama, Ollama installieren, Ollama Deutsch, Ollama Unternehmen, lokale LLMs, LLM lokal, Ollama Setup, Ollama GPU, Ollama DSGVO, Ollama Enterprise, Ollama Kubernetes, Open Source LLM, Llama 3 lokal, Mistral lokal, On-Premise KI",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/ollama" },
};

const faqs = [
  {
    q: "Was ist Ollama und wofür wird es verwendet?",
    a: "Ollama ist ein Open-Source-Tool, das die Installation und den Betrieb von Large Language Models (LLMs) auf lokaler Hardware radikal vereinfacht. Statt komplexer Setups mit Python-Umgebungen, CUDA-Treibern und Modell-Konvertierung genügt ein einziger Befehl wie 'ollama run llama3', und das Modell läuft lokal auf Ihrem Rechner oder Server. Ollama unterstützt alle gängigen Open-Source-Modelle wie Llama 3, Mistral, Qwen, Phi und Gemma im GGUF-Format und optimiert die Inferenz automatisch für die verfügbare Hardware, inklusive GPU-Beschleunigung mit NVIDIA und AMD.",
  },
  {
    q: "Wie installiere ich Ollama auf meinem System?",
    a: "Die Installation ist denkbar einfach: Unter macOS und Linux genügt ein einziger Terminal-Befehl (curl -fsSL https://ollama.com/install.sh | sh), für Windows gibt es einen Installer. Danach laden Sie mit 'ollama pull llama3' ein Modell herunter und starten es mit 'ollama run llama3'. Ollama verwaltet Modelle automatisch, erkennt die GPU selbst und stellt eine REST-API auf localhost:11434 bereit, die kompatibel zur OpenAI-API ist. Für Unternehmen übernehmen wir das professionelle Setup auf dedizierten Servern mit GPU-Optimierung, Monitoring und Hochverfügbarkeit.",
  },
  {
    q: "Ist Ollama DSGVO-konform für den Unternehmenseinsatz?",
    a: "Ja, und genau darin liegt einer der größten Vorteile. Da alle Daten lokal verarbeitet werden und keine Informationen an externe Server gesendet werden, ist Ollama von Natur aus DSGVO-konform. Keine Daten verlassen Ihr Netzwerk, es gibt keine Drittanbieter-Verarbeitung und keine Cloud-Abhängigkeit. Für Branchen mit strengen Datenschutzanforderungen wie Ärzte, Anwälte, Steuerberater oder Finanzdienstleister ist Ollama daher die ideale Lösung. Kombiniert mit einer Web-Oberfläche wie Open WebUI erhalten Ihre Mitarbeiter ein ChatGPT-ähnliches Interface, komplett auf eigener Infrastruktur.",
  },
  {
    q: "Welche GPU brauche ich für Ollama im Unternehmen?",
    a: "Das hängt von der Modellgröße ab. Für kleinere Modelle (7B bis 8B Parameter wie Llama 3 8B oder Mistral 7B) reicht eine NVIDIA GPU mit 8 bis 24 GB VRAM. Für große Modelle (70B Parameter) benötigen Sie 40 bis 80 GB VRAM, also A100 oder H100 GPUs. Ollama unterstützt auch reine CPU-Inferenz für kleinere Modelle und Quantisierung (4-bit, 5-bit), die den VRAM-Bedarf drastisch senkt. Für Enterprise-Deployments empfehlen wir dedizierte GPU-Server mit NVIDIA A100 oder L40S, die wir auf EU-Servern bei Hetzner oder OVH einrichten und betreuen.",
  },
  {
    q: "Kann ich Ollama mit anderen Tools und Anwendungen integrieren?",
    a: "Absolut. Ollama bietet eine OpenAI-kompatible REST-API, die sich nahtlos in bestehende Anwendungen einfügt. Sie können Ollama mit Open WebUI als Chat-Interface verbinden, mit n8n oder LangChain für KI-Automatisierungen nutzen, als Backend für RAG-Systeme mit Wissensdatenbanken einsetzen oder über API-Gateways wie LiteLLM in Microservice-Architekturen einbinden. Auch die Integration mit Kubernetes für skalierbare Multi-Modell-Deployments ist möglich. Wir helfen bei Architektur und Implementierung Ihrer individuellen Ollama-Integration.",
  },
  {
    q: "Was kostet der Betrieb von Ollama im Vergleich zu Cloud-APIs?",
    a: "Ollama selbst ist Open Source und kostenlos. Es entstehen also keine Lizenz- und keine Pro-Anfrage-Kosten wie bei OpenAI oder Anthropic. Stattdessen investieren Sie einmalig in Hardware (eigene GPU oder gemietete EU-Server) plus laufenden Betrieb. Bei kontinuierlicher Nutzung amortisiert sich das oft innerhalb weniger Monate, gerade bei hohem Anfragevolumen oder vielen Nutzern. Wir rechnen den ROI im Assessment transparent gegen Ihre aktuellen oder geplanten Cloud-API-Kosten durch.",
  },
  {
    q: "Welche Modelle kann ich mit Ollama betreiben?",
    a: "Ollama unterstützt nahezu alle relevanten Open-Weight-Modelle: Llama 3 und 3.1 (Meta), Mistral und Mixtral, Qwen 2.5 (Alibaba), Phi (Microsoft), Gemma 2 (Google), Command R sowie spezialisierte Modelle für Code (Code Llama, DeepSeek Coder) und Embeddings (nomic-embed, mxbai). Sie können auch eigene feingetunte Modelle im GGUF-Format einspielen. Wir wählen mit Ihnen das Modell, das Sprachqualität, Hardware-Bedarf und Anwendungsfall optimal ausbalanciert.",
  },
  {
    q: "Lässt sich Ollama hochverfügbar und skalierbar betreiben?",
    a: "Ja. Für produktive Workloads betreiben wir Ollama hinter einem Reverse Proxy mit TLS, kombiniert mit Load Balancing über mehrere Instanzen, Health Checks und automatischen Restarts. Auf Kubernetes lässt sich das Setup horizontal skalieren und auf mehrere GPUs verteilen. Für sehr hohen Durchsatz ergänzen wir Ollama auf Wunsch mit vLLM als Serving-Engine. Monitoring über Prometheus und Grafana hält GPU-Auslastung, Latenz und Fehlerraten im Blick.",
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
  name: "Ollama Setup & Enterprise-Deployment",
  serviceType: "Ollama, lokale LLMs, On-Premise KI",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "Ollama für Unternehmen im DACH-Raum: Installation, GPU-Optimierung, Quantisierung, Enterprise-Deployment und DSGVO-konformer Betrieb lokaler LLMs.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
  offers: { "@type": "Offer", priceCurrency: "EUR", description: "Kostenloses Erstgespräch & Ollama-Beratung" },
};

// Hero: laufender Modell-Stack im Terminal
const terminalLines = [
  { prompt: true, text: "ollama pull llama3.1:8b" },
  { prompt: false, text: "pulling manifest ... success" },
  { prompt: true, text: "ollama run llama3.1:8b" },
  { prompt: false, text: ">>> Fasse den Mandantenakt zusammen." },
  { prompt: false, text: "Der Sachverhalt betrifft ..." },
];

const runningModels = [
  { name: "llama3.1:8b", vram: 38, status: "aktiv" },
  { name: "mistral:7b", vram: 31, status: "aktiv" },
  { name: "qwen2.5:14b", vram: 58, status: "geladen" },
  { name: "nomic-embed", vram: 9, status: "aktiv" },
];

const keyProps = [
  { label: "Lizenz", value: "Open Source, kostenlos" },
  { label: "Datenverarbeitung", value: "100% lokal, kein Cloud-Transfer" },
  { label: "API", value: "OpenAI-kompatibel, Port 11434" },
  { label: "Modell-Format", value: "GGUF mit Q4/Q5/Q8" },
  { label: "Hardware", value: "NVIDIA & AMD GPU, auch CPU" },
  { label: "Hosting", value: "On-Premise oder EU-Server" },
];

// Modell-Katalog
const models = [
  { name: "Llama 3.1 8B", maker: "Meta", params: "8B", vram: "8 GB VRAM", use: "Chat, Zusammenfassung, RAG", icon: Brain },
  { name: "Mistral 7B", maker: "Mistral AI", params: "7B", vram: "8 GB VRAM", use: "Schnelle Assistenten, Klassifikation", icon: Cpu },
  { name: "Qwen 2.5 14B", maker: "Alibaba", params: "14B", vram: "16 GB VRAM", use: "Mehrsprachig, lange Kontexte", icon: Layers },
  { name: "Llama 3.1 70B", maker: "Meta", params: "70B", vram: "48 GB+ VRAM", use: "Komplexe Analyse, Reasoning", icon: Boxes },
  { name: "Gemma 2 9B", maker: "Google", params: "9B", vram: "10 GB VRAM", use: "Kompakter Allrounder", icon: Brain },
  { name: "nomic-embed", maker: "Nomic", params: "0.1B", vram: "2 GB VRAM", use: "Embeddings für Vektorsuche", icon: Database },
];

const capabilities = [
  {
    icon: Download,
    title: "Ollama Setup & Installation",
    description:
      "Professionelle Installation auf Ihren Servern oder dedizierten GPU-Maschinen. Optimierte Konfiguration mit automatischem GPU-Offloading, Modell-Registry und sauberem Service-Management.",
    span: true,
  },
  {
    icon: Cpu,
    title: "GPU-Optimierung & Quantisierung",
    description:
      "Hardware-optimiertes Serving: NVIDIA CUDA-Konfiguration, Quantisierung (GGUF Q4/Q5/Q8), Multi-GPU-Setup und VRAM-Tuning für maximalen Durchsatz bei minimalen Kosten.",
    span: false,
  },
  {
    icon: Server,
    title: "Enterprise-Deployment",
    description:
      "Hochverfügbarer Betrieb mit Load Balancing, Health Checks, automatischen Restarts, Reverse Proxy mit TLS und Anbindung an Ihre bestehende IT-Infrastruktur.",
    span: false,
  },
  {
    icon: Lock,
    title: "DSGVO-konforme lokale KI",
    description:
      "100% lokale Verarbeitung ohne Cloud-Abhängigkeit. Netzwerksegmentierung, Zugriffskontrolle und Audit-Logging für regulierte Branchen in Gesundheit, Recht und Finanzen.",
    span: false,
  },
  {
    icon: Settings,
    title: "Modell-Management & Updates",
    description:
      "Zentrale Verwaltung Ihrer LLMs: Registry, automatisierte Updates, A/B-Tests verschiedener Modellversionen und Rollback-Strategien für produktive Umgebungen.",
    span: false,
  },
  {
    icon: Shield,
    title: "Monitoring & Support",
    description:
      "Proaktives Monitoring: GPU-Auslastung, Latenz, Durchsatz und Fehlerraten in Prometheus/Grafana-Dashboards, mit Alerting bei kritischen Ereignissen.",
    span: false,
  },
];

const llmRows = [
  {
    feature: "Deployment-Einfachheit",
    ollama: { t: "Ein Befehl, sofort startklar", ok: true },
    vllm: { t: "Python-Setup & Tuning nötig", ok: false },
    llamacpp: { t: "Kompilieren & CLI-Flags", ok: false },
    tgi: { t: "Docker & Konfiguration", ok: false },
  },
  {
    feature: "API-Kompatibilität",
    ollama: { t: "OpenAI-kompatible REST-API", ok: true },
    vllm: { t: "OpenAI-kompatibler Server", ok: true },
    llamacpp: { t: "OpenAI-kompatibler Server", ok: true },
    tgi: { t: "Messages-API (OpenAI)", ok: true },
  },
  {
    feature: "GPU-Support",
    ollama: { t: "NVIDIA & AMD, Auto-Erkennung", ok: true },
    vllm: { t: "NVIDIA CUDA & AMD ROCm", ok: true },
    llamacpp: { t: "CPU, NVIDIA, AMD, Apple Metal", ok: true },
    tgi: { t: "NVIDIA, AMD, Intel", ok: true },
  },
  {
    feature: "Quantisierung",
    ollama: { t: "GGUF Q4 bis Q8, integriert", ok: true },
    vllm: { t: "AWQ, GPTQ, FP8", ok: true },
    llamacpp: { t: "GGUF, alle Stufen", ok: true },
    tgi: { t: "AWQ, GPTQ, EETQ", ok: true },
  },
  {
    feature: "Enterprise-Durchsatz",
    ollama: { t: "Solide für Teams & KMU", ok: true },
    vllm: { t: "Sehr hoch (PagedAttention)", ok: true },
    llamacpp: { t: "Leichtgewichtig, Edge-Fokus", ok: false },
    tgi: { t: "Hoch, produktionsreif", ok: true },
  },
];

const scenarios = [
  {
    value: "kmu",
    label: "Kleine Unternehmen",
    icon: Building2,
    head: "7B-Modelle auf einer RTX 4090",
    text: "Für Teams, die KI lokal und budgetschonend nutzen wollen: Modelle wie Llama 3 8B oder Mistral 7B laufen flüssig auf einer einzelnen NVIDIA RTX 4090 mit 24 GB VRAM. Quantisierung im Q4/Q5-Format senkt den Speicherbedarf zusätzlich. Ideal für Chat-Assistenten, Dokumentenanalyse und interne Wissensabfragen, ganz ohne laufende API-Kosten.",
    tags: ["RTX 4090, 24 GB VRAM", "Llama 3 8B / Mistral 7B", "Q4/Q5-Quantisierung"],
  },
  {
    value: "enterprise",
    label: "Enterprise",
    icon: Server,
    head: "70B-Modelle auf A100/H100 mit Kubernetes",
    text: "Für produktive Workloads mit hohem Anfragevolumen: Große Modelle mit 70 Milliarden Parametern benötigen 40 bis 80 GB VRAM und laufen auf NVIDIA A100- oder H100-GPUs. Über Kubernetes betreiben wir mehrere Ollama-Instanzen mit Load Balancing, Health Checks und Autoscaling, hochverfügbar und auf EU-Servern.",
    tags: ["A100 / H100, 40 bis 80 GB", "Llama 3 70B", "Kubernetes & Load Balancing"],
  },
  {
    value: "reguliert",
    label: "Regulierte Branchen",
    icon: ShieldCheck,
    head: "Air-Gapped Setup für sensible Daten",
    text: "Für Kanzleien, Praxen und Finanzdienstleister, bei denen Daten das Haus nicht verlassen dürfen: ein vollständig abgeschottetes On-Premise-Setup ohne Internetzugang im Inferenzpfad. Patienten-, Mandanten- und Finanzdaten werden ausschließlich lokal verarbeitet, mit Zugriffskontrolle und Audit-Logging für die Compliance-Dokumentation.",
    tags: ["On-Premise / Air-Gapped", "Audit-Logging", "Zugriffskontrolle"],
  },
  {
    value: "hochschule",
    label: "Hochschule & Forschung",
    icon: GraduationCap,
    head: "Multi-Modell-Cluster für Forschung & Lehre",
    text: "Für Universitäten und Forschungseinrichtungen, die vielen Nutzern unterschiedliche Modelle bereitstellen: Ein Multi-Modell-Cluster hostet mehrere LLMs parallel und verteilt Anfragen über ein API-Gateway. So arbeiten Studierende und Forschende mit verschiedenen Modellen, datensouverän auf eigener Infrastruktur.",
    tags: ["Multi-Modell-Cluster", "API-Gateway (LiteLLM)", "Datensouverän"],
  },
];

// Tech-Stack mit echten Logos
const logoStack = [
  { name: "Ollama", logo: "ollama", role: "LLM Runtime" },
  { name: "Docker", logo: "docker", role: "Containerisierung" },
  { name: "Kubernetes", logo: "kubernetes", role: "Orchestrierung" },
  { name: "Python", logo: "python", role: "Integration & Skripte" },
  { name: "FastAPI", logo: "fastapi", role: "API-Layer" },
  { name: "LangChain", logo: "langchain", role: "RAG & Agenten" },
  { name: "Hugging Face", logo: "huggingface", role: "Modell-Quelle" },
  { name: "Qdrant", logo: "qdrant", role: "Vektor-DB" },
  { name: "PostgreSQL", logo: "postgresql", role: "pgvector & Daten" },
  { name: "Redis", logo: "redis", role: "Caching & Queue" },
  { name: "n8n", logo: "n8n", role: "Automatisierung" },
  { name: "Prometheus", logo: "prometheus", role: "Metriken" },
  { name: "Grafana", logo: "grafana", role: "Dashboards" },
  { name: "Next.js", logo: "nextdotjs", role: "Chat-Frontend" },
];

const audience = [
  { who: "Ärzte & Gesundheitswesen", what: "Patientendaten dürfen nicht in die Cloud. Mit Ollama verarbeiten Sie medizinische Dokumente 100% lokal und DSGVO-konform.", icon: Stethoscope },
  { who: "Anwälte & Kanzleien", what: "Mandantendaten bleiben auf Ihrem Server. Ollama ermöglicht KI-gestützte Vertragsanalyse und Recherche ohne Datenschutzrisiko.", icon: Scale },
  { who: "Steuerberater & Wirtschaftsprüfer", what: "Sensible Finanzdaten lokal verarbeiten: Dokumentenanalyse, Zusammenfassungen und Klassifikation mit privaten LLMs.", icon: Calculator },
  { who: "Unternehmen mit Datenschutz-Fokus", what: "Keine API-Kosten, keine Datenübertragung an Dritte. Volle Datensouveränität und Kostenkontrolle.", icon: Lock },
  { who: "IT- & DevOps-Teams", what: "Einfache Integration in bestehende Infrastruktur, Docker- und Kubernetes-Support sowie OpenAI-kompatible API.", icon: Network },
  { who: "Startups & Innovationsteams", what: "Schnelles Prototyping mit lokalen LLMs, keine Cloud-Kosten im Entwicklungsprozess und volle Kontrolle über die Modell-Auswahl.", icon: Rocket },
];

const steps = [
  { step: "01", icon: Search, title: "Kostenlose Erstanalyse", time: "30 Minuten", desc: "Wir klären Anwendungsfall, Datenschutz-Anforderungen und welche Open-Source-Modelle für Sie infrage kommen. Kein Verkaufsgespräch." },
  { step: "02", icon: Cpu, title: "Architektur & Hardware", time: "Woche 1", desc: "Wir wählen Modelle, Quantisierung und GPU-Setup, planen die Deployment-Architektur und rechnen den ROI gegenüber Cloud-APIs durch." },
  { step: "03", icon: Download, title: "Installation & Pilot", time: "Wochen 2 bis 3", desc: "Wir installieren Ollama GPU-optimiert, binden Open WebUI oder die API an und übergeben einen produktionsnahen Piloten zum Testen." },
  { step: "04", icon: Rocket, title: "Go-Live & Betreuung", time: "ab Woche 4", desc: "Hochverfügbarer Produktivbetrieb mit Monitoring, Modell-Updates und laufendem Support, auf Wunsch skaliert auf weitere Modelle und Teams." },
];

const related = [
  { href: "/leistungen/private-ai", icon: Lock, tag: "On-Premise", title: "Private AI", desc: "Vollständig lokale KI-Plattform auf eigener Infrastruktur, mit Open WebUI als ChatGPT-Alternative." },
  { href: "/leistungen/ki-wissensdatenbank", icon: Database, tag: "RAG", title: "KI Wissensdatenbank", desc: "Verbinden Sie Ihre lokalen Ollama-Modelle per RAG mit dem Firmenwissen, DSGVO-konform und durchsuchbar." },
  { href: "/leistungen/langchain", icon: Workflow, tag: "Entwicklung", title: "LangChain Entwicklung", desc: "RAG-Systeme und KI-Agenten auf Basis Ihrer lokalen LLMs, produktionsreif und integriert." },
];

const heroTrust = [
  { icon: ShieldCheck, text: "DSGVO-konform" },
  { icon: Server, text: "EU-Hosting & On-Premise" },
  { icon: Euro, text: "Keine API-Kosten" },
  { icon: MapPin, text: "Made in Austria" },
];

export default function Page() {
  return (
    <>
      <Script id="faq-ollama" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-ollama" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

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
                    <div className="w-14 h-14 rounded-xl bg-white border border-border shadow-sm flex items-center justify-center shrink-0">
                      <img src="/img/logos/ollama.svg" alt="Ollama Logo" className="w-9 h-9" />
                    </div>
                    <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                      Ollama, Lokale LLMs
                    </Badge>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-primary">Ollama</span> für Unternehmen: lokale LLMs einfach und DSGVO-konform betreiben
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Ollama macht den Betrieb lokaler Sprachmodelle so einfach wie nie. Wir richten Ollama GPU-optimiert und hochverfügbar auf Ihrer eigenen Infrastruktur ein, 100% DSGVO-konform. Kein Datentransfer an Dritte, keine Cloud-Abhängigkeit, keine Pro-Anfrage-Kosten.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Erstgespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#szenarien">Einsatz-Szenarien ansehen</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    {heroTrust.map((t) => {
                      const Icon = t.icon;
                      return (
                        <span key={t.text} className="flex items-center gap-1.5">
                          <Icon className="w-4 h-4 text-primary" /> {t.text}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Right: Terminal + Modell-Stack */}
                <Card className="relative border-2 shadow-xl shadow-primary/5 overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/40">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="ml-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                      <Terminal className="w-3.5 h-3.5" /> ollama, localhost:11434
                    </span>
                    <span className="ml-auto text-[10px] uppercase tracking-wider text-muted-foreground font-medium">EU-Server</span>
                  </div>
                  <CardContent className="pt-4 pb-3 font-mono text-[13px] leading-relaxed bg-foreground/[0.02]">
                    {terminalLines.map((l, i) => (
                      <div key={i} className={l.prompt ? "text-foreground" : "text-muted-foreground"}>
                        {l.prompt && <span className="text-primary mr-1.5">$</span>}
                        {l.text}
                      </div>
                    ))}
                    <div className="text-primary mt-1">
                      <span className="inline-block w-2 h-4 align-middle bg-primary/70" aria-hidden /> bereit
                    </div>
                  </CardContent>
                  <div className="border-t border-border px-4 py-4 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-foreground inline-flex items-center gap-1.5">
                        <HardDrive className="w-3.5 h-3.5 text-primary" /> Geladene Modelle
                      </span>
                      <span className="text-muted-foreground inline-flex items-center gap-1.5">
                        <Gauge className="w-3.5 h-3.5" /> VRAM
                      </span>
                    </div>
                    {runningModels.map((m) => (
                      <div key={m.name} className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-mono text-foreground inline-flex items-center gap-1.5">
                            <span className={`w-1.5 h-1.5 rounded-full ${m.status === "aktiv" ? "bg-green-500" : "bg-muted-foreground/40"}`} />
                            {m.name}
                          </span>
                          <span className="text-muted-foreground tabular-nums">{m.vram}%</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                          <div className="h-full rounded-full bg-primary/70" style={{ width: `${m.vram}%` }} />
                        </div>
                      </div>
                    ))}
                    <div className="text-[11px] text-center text-muted-foreground pt-1">
                      100% lokal, OpenAI-kompatible API, keine Daten verlassen den Server
                    </div>
                  </div>
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was ist Ollama? Lokale LLMs für Unternehmen</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      <strong className="text-foreground">Ollama</strong> ist ein Open-Source-Framework, das die Installation und den Betrieb von Large Language Models (LLMs) auf lokaler Hardware revolutioniert. Während klassische LLM-Deployments tiefes Wissen über Python-Umgebungen, CUDA-Treiber, Modell-Formate und Inferenz-Engines erfordern, reduziert Ollama den gesamten Prozess auf wenige einfache Befehle. Mit <code className="text-foreground font-mono text-sm bg-muted px-1.5 py-0.5 rounded">ollama run llama3</code> läuft ein leistungsfähiges Sprachmodell innerhalb von Minuten auf Ihrem eigenen Server, vollständig lokal und ohne dass Daten Ihr Netzwerk verlassen.
                    </p>
                    <p>
                      Die Stärke von Ollama liegt in der Einfachheit bei gleichzeitiger Leistungsfähigkeit. Ollama unterstützt alle relevanten Open-Source-Modelle, von <strong className="text-foreground">Llama 3</strong> (Meta) über <strong className="text-foreground">Mistral</strong> und <strong className="text-foreground">Qwen</strong> (Alibaba) bis zu <strong className="text-foreground">Phi</strong> (Microsoft) und <strong className="text-foreground">Gemma</strong> (Google). Die Modelle werden im optimierten GGUF-Format verwaltet, das verschiedene Quantisierungsstufen (4-bit, 5-bit, 8-bit) erlaubt. So lassen sich selbst Modelle mit 70 Milliarden Parametern auf mittelgroßen Servern effizient betreiben. Ollama erkennt vorhandene NVIDIA- und AMD-GPUs automatisch und nutzt sie für deutlich schnellere Antwortzeiten.
                    </p>
                    <p>
                      Für den <strong className="text-foreground">Unternehmenseinsatz</strong> ergeben sich entscheidende Vorteile: Erstens ist die <strong className="text-foreground">DSGVO-Konformität</strong> inhärent gegeben, da alle Daten lokal verarbeitet werden und keine Auftragsverarbeitungsverträge mit US-Cloud-Anbietern nötig sind. Zweitens entstehen nach der Hardware-Investition <strong className="text-foreground">keine laufenden API-Kosten</strong>, anders als bei OpenAI oder Anthropic, wo jede Anfrage einzeln abgerechnet wird. Drittens behalten Sie die <strong className="text-foreground">volle Kontrolle</strong> über Modelle, Daten und Infrastruktur.
                    </p>
                    <p>
                      Die Integration in bestehende Unternehmens-IT ist dank standardisierter API unkompliziert. Ollama lässt sich mit <strong className="text-foreground">n8n</strong> für automatisierte Workflows verbinden, als Backend für <strong className="text-foreground">RAG-Systeme</strong> mit Wissensdatenbanken nutzen oder über <strong className="text-foreground">LangChain</strong> in komplexe KI-Anwendungen einbinden. Für größere Deployments läuft Ollama auf <strong className="text-foreground">Kubernetes</strong>, um mehrere Modelle gleichzeitig zu hosten und automatisch zu skalieren. Wir unterstützen bei Modellauswahl, Performance-Optimierung und sorgen dafür, dass Ihr Setup produktionsreif, sicher und wartbar ist.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Open Source</Badge>
                    <Badge variant="secondary" className="rounded-full">GGUF-Quantisierung</Badge>
                    <Badge variant="secondary" className="rounded-full">OpenAI-kompatible API</Badge>
                    <Badge variant="secondary" className="rounded-full">On-Premise</Badge>
                  </div>
                </div>

                <Card className="border-2 bg-primary/5 border-primary/20 lg:sticky lg:top-24">
                  <CardHeader>
                    <CardTitle className="text-xl">Ollama auf einen Blick</CardTitle>
                    <CardDescription>Die wichtigsten Eigenschaften für den Unternehmenseinsatz.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {keyProps.map(({ label, value }) => (
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

          {/* MODELL-KATALOG */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Modelle</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Welche Modelle laufen lokal mit Ollama?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Vom kompakten 7B-Modell auf der Workstation bis zum 70B-Modell auf dem GPU-Server. Wir wählen mit Ihnen die richtige Balance aus Qualität und Hardware-Bedarf.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {models.map((m) => {
                  const Icon = m.icon;
                  return (
                    <Card key={m.name} className="border-2 hover-lift">
                      <CardContent className="pt-5">
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <Badge variant="secondary" className="rounded-full text-xs">{m.params}</Badge>
                        </div>
                        <div className="font-bold text-foreground">{m.name}</div>
                        <div className="text-xs text-muted-foreground mb-3">{m.maker}</div>
                        <div className="text-sm text-muted-foreground mb-2">{m.use}</div>
                        <div className="inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                          <HardDrive className="w-3.5 h-3.5" /> {m.vram}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* LEISTUNGEN (Bento) */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Unsere Ollama-Services für Unternehmen</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Von der Installation bis zum produktiven Betrieb, wir machen Ollama enterprise-ready.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {capabilities.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <Card key={i} className={`hover-lift border-2 ${c.span ? "lg:col-span-2 bg-primary/5 border-primary/20" : ""}`}>
                      <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{c.title}</CardTitle>
                      </CardHeader>
                      <CardContent><p className="text-muted-foreground leading-relaxed text-sm">{c.description}</p></CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* VERGLEICH */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Runtime-Vergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ollama vs. vLLM vs. llama.cpp vs. TGI</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Vier Wege, lokale LLMs zu betreiben. Welche Runtime zu Ihrem Anwendungsfall passt, klären wir im kostenlosen Assessment.
                </p>
              </div>
              <Card className="border-2 overflow-hidden">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="w-[22%] font-bold text-foreground">Merkmal</TableHead>
                        <TableHead className="text-primary font-bold">Ollama</TableHead>
                        <TableHead className="text-muted-foreground">vLLM</TableHead>
                        <TableHead className="text-muted-foreground">llama.cpp</TableHead>
                        <TableHead className="text-muted-foreground">TGI</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {llmRows.map((row, i) => (
                        <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                          <TableCell className="font-medium">{row.feature}</TableCell>
                          <TableCell className="text-sm text-primary font-medium">
                            <span className="inline-flex items-start gap-1.5">
                              <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                              {row.ollama.t}
                            </span>
                          </TableCell>
                          {[row.vllm, row.llamacpp, row.tgi].map((cell, j) => (
                            <TableCell key={j} className="text-muted-foreground text-sm">
                              <span className="inline-flex items-start gap-1.5">
                                {cell.ok ? (
                                  <Check className="w-3.5 h-3.5 text-primary/70 mt-0.5 shrink-0" />
                                ) : (
                                  <X className="w-3.5 h-3.5 text-muted-foreground/50 mt-0.5 shrink-0" />
                                )}
                                {cell.t}
                              </span>
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Card>
            </div>
          </section>

          {/* EINSATZ-SZENARIEN (Tabs) */}
          <section id="szenarien" className="py-14 md:py-20 bg-white/50 scroll-mt-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Einsatz-Szenarien</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Von der Workstation bis zum GPU-Cluster</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Ollama skaliert vom einzelnen Arbeitsplatz bis zum hochverfügbaren Cluster. Wählen Sie das Szenario, das zu Ihnen passt.
                </p>
              </div>
              <Tabs defaultValue="kmu" className="w-full">
                <TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">
                  {scenarios.map((s) => {
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
                {scenarios.map((s) => (
                  <TabsContent key={s.value} value={s.value}>
                    <Card className="border-2">
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-bold mb-2">{s.head}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">{s.text}</p>
                        <div className="flex flex-wrap gap-2">
                          {s.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="rounded-full text-xs">{tag}</Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>

          {/* TECH-STACK mit echten Logos */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Tech-Stack</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Unser Stack rund um Ollama</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Bewährte Open-Source-Bausteine für ein produktionsreifes, DSGVO-konformes LLM-Setup, von der Runtime über die Vektor-Datenbank bis zum Monitoring.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
                {logoStack.map((t) => (
                  <Card key={t.name} className="border-2 hover-lift">
                    <CardContent className="flex flex-col items-center text-center p-4 gap-2">
                      <div className="w-14 h-14 rounded-xl bg-white border border-border shadow-sm flex items-center justify-center">
                        <img src={`/img/logos/${t.logo}.svg`} alt={`${t.name} Logo`} className="w-8 h-8 object-contain" />
                      </div>
                      <div className="text-sm font-semibold text-foreground leading-tight">{t.name}</div>
                      <div className="text-[11px] text-muted-foreground leading-tight">{t.role}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* ZIELGRUPPEN */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Zielgruppen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Für wen ist Ollama die richtige Lösung?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Überall, wo Daten das Haus nicht verlassen dürfen und volle Kostenkontrolle zählt.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {audience.map(({ who, what, icon: Icon }, i) => (
                  <Card key={i} className="border-2 hover-lift">
                    <CardContent className="pt-5 flex gap-4">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground mb-1">{who}</div>
                        <div className="text-muted-foreground text-sm leading-relaxed">{what}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* ABLAUF */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="max-w-2xl mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Der Ablauf</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">In 4 Schritten zu Ihrem lokalen LLM</h2>
                <p className="text-lg text-muted-foreground">
                  Von der Erstanalyse bis zum hochverfügbaren Produktivbetrieb, transparent und ohne Überraschungen.
                </p>
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

          {/* ERGEBNISSE */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-2 md:grid-cols-4 border-2 border-border rounded-2xl overflow-hidden bg-card">
                {[
                  ["Open", "Source & kostenlos"],
                  ["100%", "lokal & privat"],
                  ["0 €", "Pro-Anfrage-Kosten"],
                  ["EU", "DSGVO-konform"],
                ].map(([v, l], i) => (
                  <div key={i} className="p-8 text-center border-b md:border-b-0 border-r last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r border-border">
                    <div className="text-3xl md:text-4xl font-bold text-primary">{v}</div>
                    <div className="text-sm text-muted-foreground mt-2">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Häufige Fragen zu Ollama & lokalen LLMs</h2>
                <p className="text-lg text-muted-foreground">Installation, Betrieb, Hardware und Datenschutz auf einen Blick.</p>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqs.map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border-2 border-border rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:bg-primary/5"
                  >
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
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Passt gut zu Ollama</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Ollama ist selten allein im Einsatz. Das ergänzt Ihr lokales LLM-Setup am häufigsten.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {related.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <a key={i} href={s.href} className="group block">
                      <Card className="h-full border-2 hover-lift transition-all group-hover:border-primary/40">
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
                          <p className="text-muted-foreground leading-relaxed mb-4 text-sm">{s.desc}</p>
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
