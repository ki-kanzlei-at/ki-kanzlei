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
import { Progress } from "@/components/ui/progress";
import {
  Gauge,
  Zap,
  Server,
  Cpu,
  Layers,
  BarChart3,
  ShieldCheck,
  Check,
  X,
  CheckCircle,
  AlertCircle,
  TrendingDown,
  Boxes,
  Network,
  Rocket,
  Search,
  Settings,
  Activity,
  Scale,
  Stethoscope,
  Landmark,
  ShoppingBag,
  Code2,
  FlaskConical,
  Lock,
  Timer,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "vLLM Serving, Inferenz & Hosting für Unternehmen",
  description:
    "vLLM Deployment, Hosting und Inferenz vom DACH-Spezialisten: hochperformantes LLM Serving auf eigener Infrastruktur, bis zu 24x höherer Throughput, DSGVO-konform EU-gehostet und 5 bis 10x günstiger als Cloud-APIs. Jetzt kostenloses LLM-Assessment sichern.",
  keywords:
    "vLLM, LLM Serving, LLM Inference, vLLM Docker, vLLM Kubernetes, LLM Hosting, PagedAttention, Continuous Batching, Self Hosted LLM, Private LLM, LLM Throughput, LLM Benchmark, vLLM vs Ollama, LLM Deployment DSGVO, Open Source LLM Serving",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/vllm" },
};

const faqs = [
  {
    q: "Was ist vLLM und wie funktioniert es?",
    a: "vLLM ist ein quelloffenes Framework für hochperformantes LLM Serving, ursprünglich an der UC Berkeley entwickelt. Das Herzstück ist PagedAttention: eine Technik, die den GPU-Speicher ähnlich verwaltet wie ein Betriebssystem den Arbeitsspeicher, mit virtuellen Speicherseiten und dynamischer Allokation. Statt für jede Anfrage zusammenhängenden Speicher zu reservieren, arbeitet vLLM mit kleinen Seiten und vermeidet so Fragmentierung und Verschwendung. Dazu kommt Continuous Batching, das eingehende Anfragen laufend in den GPU-Batch einfädelt, statt auf einen kompletten Batch zu warten. Das Ergebnis ist ein bis zu 24x höherer Durchsatz gegenüber naiven Implementierungen auf derselben Hardware. vLLM unterstützt alle gängigen Open-Source-Modelle wie Llama, Mistral, Qwen, Phi und Gemma und stellt eine OpenAI-kompatible REST-API bereit.",
  },
  {
    q: "vLLM oder Ollama: Was soll ich einsetzen?",
    a: "Ollama ist ideal für lokale Entwicklung und Prototyping: einfaches Setup, breite Modellbibliothek, läuft auch ohne Enterprise-GPU. vLLM ist dagegen für produktive Workloads mit hohem Anfragevolumen gebaut: maximaler Durchsatz durch PagedAttention, professionelles GPU-Management, Multi-GPU-Unterstützung und eine robuste OpenAI-kompatible API. Als grobe Faustregel: Für weniger als 100 Anfragen pro Stunde genügt Ollama. Ab etwa 1.000 parallelen Anfragen täglich empfehlen wir vLLM. In vielen Setups ergänzen sich beide hervorragend: Ollama für die Entwicklung am Laptop, vLLM für den Betrieb in der Produktion.",
  },
  {
    q: "Welche Hardware brauche ich für vLLM?",
    a: "Die Anforderungen hängen vom Modell ab. Kleine Modelle mit 7 bis 8 Milliarden Parametern laufen auf einer NVIDIA A10 oder L4 mit 24 GB VRAM. Mittlere Modelle mit 13 bis 34 Milliarden Parametern benötigen eine A100 40 GB oder zwei A10. Große Modelle ab 70 Milliarden Parametern erfordern 2 bis 4x A100 80 GB oder H100. Durch Quantisierung mit AWQ, GPTQ oder FP8 lässt sich der VRAM-Bedarf deutlich senken: Ein 70B-Modell passt in 4-Bit-Quantisierung auf eine einzige A100 80 GB. Wir beraten Sie bei der Hardware-Auswahl und unterstützen bei der Beschaffung über EU-Anbieter wie Hetzner oder OVH.",
  },
  {
    q: "Lässt sich vLLM per Docker und Kubernetes betreiben?",
    a: "Ja, vLLM ist für containerbasierte Deployments ausgelegt. Für vLLM Docker genügt ein einziges NVIDIA-GPU-fähiges Image; mit docker run und der Option für alle GPUs läuft der Dienst in wenigen Minuten. Für Kubernetes nutzen wir das NVIDIA Device Plugin für das GPU-Scheduling, Helm-Charts für reproduzierbare Konfiguration und den Horizontal Pod Autoscaler für automatische Skalierung bei Lastspitzen. Prometheus-Metriken sind in vLLM eingebaut und lassen sich direkt in Grafana-Dashboards einbinden. Wir betreiben vLLM produktiv auf Kubernetes-Clustern bei EU-Hostern wie Hetzner und OVH sowie On-Premise.",
  },
  {
    q: "Ist Self-Hosted LLM Serving mit vLLM DSGVO-konform?",
    a: "Ja, und das ist einer der größten Vorteile gegenüber Cloud-APIs. Bei vLLM auf EU-Servern verlassen Ihre Daten niemals den europäischen Rechtsraum. Alle Anfragen und Antworten werden lokal verarbeitet, ohne Übertragung an OpenAI, Azure oder andere US-Anbieter. Das macht vLLM besonders attraktiv für datenschutzsensible Branchen wie Kanzleien, Steuerberater, Banken, Versicherungen oder das Gesundheitswesen. Wir deployen vLLM ausschließlich auf EU-Servern, dokumentieren alles mit Auftragsverarbeitungsvertrag und unterstützen Sie bei der Vorbereitung auf den EU AI Act.",
  },
  {
    q: "Was kostet Self-Hosted LLM Serving im Vergleich zu Cloud-APIs?",
    a: "Bei hohem Anfragevolumen ab etwa 100.000 API-Calls pro Monat ist Self-Hosted Serving mit vLLM typischerweise 5 bis 10x günstiger als die Nutzung kommerzieller Cloud-APIs. Eine Hetzner-GPU-Instanz mit A100 80 GB kostet rund 2 bis 3 Euro pro Stunde. Bei guter Auslastung ist das gegenüber den Token-Preisen großer kommerzieller Modelle um ein Vielfaches günstiger. Die Anfangsinvestition in Setup, Konfiguration und Monitoring amortisiert sich bei mittleren Unternehmen oft schon innerhalb von 3 bis 6 Monaten, bei gleichzeitig besserer Latenz und voller Datenkontrolle. Wir erstellen Ihnen eine individuelle ROI-Kalkulation auf Basis Ihres aktuellen API-Volumens.",
  },
  {
    q: "Welche Modelle werden von vLLM unterstützt?",
    a: "vLLM unterstützt nahezu alle bedeutenden Open-Source-Architekturen, darunter Llama in allen Generationen, Mistral und Mixtral, Qwen, Phi, Gemma, Command R sowie zahlreiche Code- und Embedding-Modelle. Sie können öffentlich verfügbare Modelle direkt von Hugging Face laden oder eigene, feingetunte Gewichte einsetzen. Mehrere Modelle lassen sich parallel auf einem Cluster betreiben und über eine einheitliche API ansprechen, etwa ein allgemeines Sprachmodell für Chat und ein spezialisiertes Modell für Code oder Klassifikation.",
  },
  {
    q: "Was bedeuten Throughput, TTFT und TPS beim LLM Serving?",
    a: "Throughput beschreibt, wie viele Tokens ein System pro Sekunde über alle gleichzeitigen Anfragen hinweg erzeugt; er ist der zentrale Hebel für Kosten pro Anfrage. TTFT steht für Time To First Token, also die Zeit bis das erste Token beim Nutzer ankommt; dieser Wert prägt die gefühlte Reaktionsgeschwindigkeit. TPS bedeutet Tokens pro Sekunde je Anfrage und bestimmt, wie flüssig sich eine Antwort aufbaut. vLLM optimiert alle drei Größen gemeinsam: hoher Gesamtdurchsatz bei niedriger TTFT durch Continuous Batching und PagedAttention. Wir messen diese Kennzahlen vor und nach dem Deployment und tunen die Batching-Parameter darauf.",
  },
  {
    q: "Unterstützt vLLM Quantisierung und lange Kontexte?",
    a: "Ja. vLLM unterstützt gängige Quantisierungsverfahren wie AWQ, GPTQ und FP8, mit denen sich der Speicherbedarf stark senken lässt, ohne die Qualität spürbar zu beeinträchtigen. Für lange Kontexte sorgt das seitenbasierte Speichermanagement dafür, dass auch große Kontextfenster effizient genutzt werden, und Prefix-Caching beschleunigt wiederkehrende System-Prompts erheblich. So lassen sich umfangreiche Dokumente, RAG-Kontexte und lange Gesprächsverläufe wirtschaftlich verarbeiten.",
  },
  {
    q: "Bietet KI Kanzlei vLLM auch als Managed Service mit SLA an?",
    a: "Ja. Sie können vLLM von uns als Managed Service mit definierten Service-Level betreiben lassen: Wir übernehmen Monitoring, Updates, Skalierung und Incident-Reaktion. Alternativ richten wir die Plattform ein, dokumentieren sie sauber und übergeben den Betrieb vollständig an Ihr Team. Beide Modelle laufen auf EU-Infrastruktur und sind DSGVO-konform dokumentiert.",
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
  name: "vLLM Serving, Inferenz & Hosting",
  serviceType: "vLLM Deployment, LLM Serving, LLM Inference Hosting",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "Hochperformantes LLM Serving mit vLLM für Unternehmen im DACH-Raum: bis zu 24x höherer Throughput, OpenAI-kompatible API, Docker- und Kubernetes-Deployment, DSGVO-konform auf EU-Servern.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const problems = [
  "Cloud-API-Kosten explodieren, sobald das Anfragevolumen steigt",
  "Sensible Unternehmensdaten landen auf US-Servern, ein DSGVO-Risiko",
  "Vendor-Lock-in: Preise und Modelle ändern sich ohne Vorwarnung",
  "Latenz durch API-Roundtrips bremst Ihre Anwendungen aus",
  "Kein Einfluss auf Modellverhalten, Filterung oder Ausgabeformat",
];

const solutions = [
  "Planbare Kosten durch eigene GPU-Hardware statt Token-Abrechnung",
  "Volle Datenkontrolle, alle Anfragen bleiben auf EU-Servern",
  "Open Source ohne Abhängigkeit von einem einzelnen Anbieter",
  "Niedrigere Latenz durch lokale Inferenz ohne API-Overhead",
  "Eigene Modelle, eigenes Fine-Tuning, eigene System-Prompts",
];

const capabilities = [
  {
    icon: Zap,
    title: "PagedAttention & Continuous Batching",
    desc: "PagedAttention verwaltet den GPU-Speicher wie ein Betriebssystem, mit virtuellen Seiten und dynamischer Allokation. Continuous Batching fädelt neue Anfragen laufend in den Batch ein, statt auf einen vollen Batch zu warten. Zusammen liefern beide bis zu 24x mehr Durchsatz als naive Implementierungen, auf exakt derselben Hardware.",
    highlight: true,
  },
  {
    icon: Server,
    title: "OpenAI-kompatible API",
    desc: "Ein Drop-in-Ersatz für bestehende Integrationen. Anwendungen, die heute eine OpenAI-API ansprechen, laufen ohne Codeänderung gegen Ihr eigenes vLLM, inklusive Chat Completions, Embeddings und Streaming.",
    highlight: false,
  },
  {
    icon: Cpu,
    title: "GPU-Optimierung & Quantisierung",
    desc: "AWQ, GPTQ und FP8 senken den VRAM-Bedarf erheblich, ohne die Qualität spürbar zu opfern. Tensor-Parallelismus verteilt große Modelle nahtlos auf mehrere GPUs.",
    highlight: false,
  },
  {
    icon: BarChart3,
    title: "Monitoring & Observability",
    desc: "Eingebaute Prometheus-Metriken für Durchsatz, Latenz, GPU-Auslastung und Queue-Tiefe, direkt anbindbar an Grafana, OpenTelemetry und Langfuse für sauberes LLMOps.",
    highlight: false,
  },
  {
    icon: Layers,
    title: "Multi-Modell-Serving",
    desc: "Mehrere LLMs parallel auf einem GPU-Cluster: ein Allzweckmodell für Chat, ein spezialisiertes Modell für Code, ein branchenspezifisches Modell für Ihre Domäne, alle über eine einheitliche API.",
    highlight: false,
  },
  {
    icon: ShieldCheck,
    title: "DSGVO-konformes EU-Hosting",
    desc: "Deployment auf Hetzner, OVH oder On-Premise: Ihre Daten verlassen den europäischen Rechtsraum nicht. Vollständige Nachvollziehbarkeit für regulierte Branchen.",
    highlight: false,
  },
];

const benchmarkRows = [
  { tool: "vLLM", rel: 95, ttft: "0,8 s", multiGpu: "Ja", openAi: "Ja", highlight: true },
  { tool: "SGLang", rel: 92, ttft: "0,8 s", multiGpu: "Ja", openAi: "Ja", highlight: false },
  { tool: "Triton Inference Server", rel: 88, ttft: "0,9 s", multiGpu: "Ja", openAi: "Nein", highlight: false },
  { tool: "TGI (Hugging Face)", rel: 72, ttft: "1,2 s", multiGpu: "Ja", openAi: "Teilweise", highlight: false },
  { tool: "Ollama", rel: 28, ttft: "2,8 s", multiGpu: "Nein", openAi: "Ja", highlight: false },
];

const vsOllama = [
  ["Einsatzzweck", "Produktion, hohes Volumen", "Entwicklung, Prototyping"],
  ["Durchsatz", "sehr hoch, PagedAttention", "moderat, sequenziell"],
  ["Multi-GPU", "ja, Tensor-Parallelismus", "nein"],
  ["Continuous Batching", "ja, in Echtzeit", "begrenzt"],
  ["OpenAI-API", "vollständig", "vollständig"],
  ["Setup-Aufwand", "höher, dafür skalierbar", "minimal, in Minuten"],
];

const deployOptions = [
  {
    logo: "docker",
    fallbackIcon: Boxes,
    title: "vLLM Docker",
    badge: "Einfachster Start",
    desc: "Ein NVIDIA-GPU-fähiges Image, ein docker run mit Zugriff auf alle GPUs, und vLLM läuft in wenigen Minuten. Modelle werden direkt von Hugging Face geladen oder aus einem lokalen Volume gemountet. Ideal für erste Tests und Deployments bis zu einer GPU.",
  },
  {
    logo: "kubernetes",
    fallbackIcon: Network,
    title: "Kubernetes-Cluster",
    badge: "Produktionsreif",
    desc: "Für produktive Workloads deployen wir vLLM als Kubernetes-Deployment mit GPU-Requests, NVIDIA Device Plugin und Horizontal Pod Autoscaler. LoadBalancer für die API, Prometheus für Metriken, alles auf EU-Clustern bei Hetzner oder OVH.",
  },
  {
    logo: null,
    fallbackIcon: TrendingDown,
    title: "ROI gegenüber Cloud-APIs",
    badge: "5 bis 10x günstiger",
    desc: "Eine Hetzner-GPU-Instanz mit A100 80 GB kostet rund 2 bis 3 Euro pro Stunde. Bei 100.000 Calls pro Monat mit einem 70B-Modell ist Self-Hosted mit vLLM typischerweise 5 bis 10x günstiger als kommerzielle Cloud-APIs. Wir erstellen Ihnen eine konkrete ROI-Kalkulation.",
  },
];

const branchen = [
  {
    value: "kanzlei",
    label: "Kanzleien",
    icon: Scale,
    head: "Kanzleien & Steuerberatung",
    text: "Mandantenschriftsätze, Verträge und Akten enthalten hochsensible Daten, die niemals an US-Clouds gehen dürfen. Mit vLLM auf EU-Servern analysieren und entwerfen Sie Dokumente lokal, schnell genug für den Kanzleialltag und vollständig DSGVO-dokumentiert.",
  },
  {
    value: "gesundheit",
    label: "Gesundheitswesen",
    icon: Stethoscope,
    head: "Kliniken & Praxen",
    text: "Arztbriefe, Befunde und Patientenkommunikation lassen sich mit lokal gehosteten Modellen verarbeiten, ohne dass Gesundheitsdaten den eigenen Rechtsraum verlassen. Hoher Durchsatz hält auch bei vielen gleichzeitigen Anfragen die Antwortzeiten niedrig.",
  },
  {
    value: "finanz",
    label: "Banken",
    icon: Landmark,
    head: "Banken & Versicherungen",
    text: "Regulatorik, Revisionssicherheit und Datenschutz machen eigene LLM-Infrastruktur oft zur Pflicht. vLLM liefert die nötige Performance für Dokumentenprüfung, Risikoanalyse und internen Support, vollständig auditierbar und auf eigener Hardware.",
  },
  {
    value: "ecommerce",
    label: "E-Commerce",
    icon: ShoppingBag,
    head: "E-Commerce & Service",
    text: "Produktbeschreibungen, Übersetzungen und Kundensupport in großem Volumen werden mit Cloud-APIs schnell teuer. Self-Hosted Serving mit vLLM senkt die Kosten pro Anfrage drastisch und skaliert in Lastspitzen wie dem Saisongeschäft mit.",
  },
  {
    value: "saas",
    label: "SaaS",
    icon: Code2,
    head: "SaaS & Softwarehäuser",
    text: "Wer KI-Funktionen in das eigene Produkt einbettet, braucht planbare Stückkosten und stabile Latenz. Mit vLLM betreiben Sie Inferenz als eigene Plattform, behalten Marge und Datenhoheit und vermeiden die Abhängigkeit von einem einzelnen Anbieter.",
  },
  {
    value: "public",
    label: "Forschung",
    icon: FlaskConical,
    head: "Forschung & Public Sector",
    text: "Universitäten, Forschungseinrichtungen und Behörden verarbeiten oft vertrauliche oder schützenswerte Daten. vLLM auf eigenen oder EU-gehosteten GPUs ermöglicht groß angelegte Experimente und Anwendungen, ohne Daten aus der Hand zu geben.",
  },
];

const stack = [
  { slug: "huggingface", name: "Hugging Face" },
  { slug: "pytorch", name: "PyTorch" },
  { slug: "python", name: "Python" },
  { slug: "docker", name: "Docker" },
  { slug: "kubernetes", name: "Kubernetes" },
  { slug: "terraform", name: "Terraform" },
  { slug: "prometheus", name: "Prometheus" },
  { slug: "grafana", name: "Grafana" },
  { slug: "fastapi", name: "FastAPI" },
  { slug: "langchain", name: "LangChain" },
  { slug: "langgraph", name: "LangGraph" },
  { slug: "n8n", name: "n8n" },
  { slug: "qdrant", name: "Qdrant" },
  { slug: "redis", name: "Redis" },
  { slug: "ollama", name: "Ollama" },
  { slug: "githubactions", name: "GitHub Actions" },
];

const stackCats = [
  { cat: "LLM Serving", tools: "vLLM, SGLang, TGI, LiteLLM Proxy" },
  { cat: "Modelle", tools: "Llama, Mistral, Mixtral, Qwen, Phi, Gemma" },
  { cat: "GPU-Hardware", tools: "NVIDIA A100, H100, L4, A10 bei Hetzner, OVH, On-Premise" },
  { cat: "Quantisierung", tools: "AWQ, GPTQ, FP8, GGUF, BitsAndBytes" },
  { cat: "Orchestrierung", tools: "Kubernetes, Docker, Helm, NVIDIA GPU Operator" },
  { cat: "Monitoring", tools: "Prometheus, Grafana, OpenTelemetry, Langfuse" },
  { cat: "Integration", tools: "n8n, LangChain, LangGraph, OpenAI-kompatibler Endpoint" },
  { cat: "EU-Hosting", tools: "Hetzner GPU Cloud, OVH Cloud, eigene On-Premise-Server" },
];

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Kostenlose Erstanalyse",
    time: "30 Minuten",
    desc: "Wir analysieren Ihr aktuelles API-Volumen, die genutzten Modelle und Ihre Anforderungen an Datenschutz und Latenz. Ergebnis: ein klares Bild, ob und welche vLLM-Architektur für Ihre Workloads sinnvoll ist.",
  },
  {
    num: "02",
    icon: Settings,
    title: "Architektur & Hardware",
    time: "Woche 1",
    desc: "Wir wählen Modell, GPU-Hardware und Quantisierungsstrategie und rechnen den ROI gegen Ihren bisherigen Cloud-Spend, mit konkreten Zahlen statt Marketing.",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Deployment & Integration",
    time: "Woche 2",
    desc: "Wir deployen vLLM via Docker oder Kubernetes, konfigurieren die OpenAI-kompatible API, richten Load Balancing und Health Checks ein und binden Ihre Systeme an: n8n, LangChain, LlamaIndex oder direkte REST-Calls.",
  },
  {
    num: "04",
    icon: Activity,
    title: "Monitoring & Betrieb",
    time: "laufend",
    desc: "Nach dem Go-Live richten wir Prometheus- und Grafana-Dashboards ein, konfigurieren Alerting für GPU-Engpässe und optimieren laufend die Batching-Parameter, optional als Managed Service mit SLA.",
  },
];

const metricTiles = [
  { icon: Timer, label: "TTFT", value: "0,8 s" },
  { icon: Cpu, label: "GPU-Last", value: "92 %" },
  { icon: Layers, label: "Batch", value: "64" },
  { icon: Activity, label: "p99-Latenz", value: "1,4 s" },
];

export default function Page() {
  return (
    <>
      <Script id="faq-vllm" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-vllm" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <style>{`
        @keyframes vllmStream { to { stroke-dashoffset: -28; } }
        .vllm-stream { stroke-dasharray: 7 7; animation: vllmStream 1.1s linear infinite; }
      `}</style>

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">
                    LLM Serving, Inferenz, Hosting
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="inline-flex items-center gap-3">
                      <span className="inline-flex w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 items-center justify-center align-middle">
                        <Gauge className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                      </span>
                      <span className="text-primary">vLLM</span>
                    </span>
                    <br />
                    Schnelles LLM-Serving auf eigener Infrastruktur
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    vLLM ist der Industriestandard für produktives LLM Serving. Wir deployen und betreiben es auf EU-Servern: bis zu 24x höherer Durchsatz, OpenAI-kompatible API und voll DSGVO-konform, statt teurer und intransparenter Cloud-APIs.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses LLM-Assessment</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#benchmark">Benchmark ansehen</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-primary" /> EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* HERO VISUAL: Throughput / Latenz-Gauge */}
                <Card className="relative border-2 shadow-xl shadow-primary/5">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                        <Gauge className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">Inferenz-Monitor</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> Llama 70B, A100 80 GB, AWQ
                        </div>
                      </div>
                      <span className="ml-auto text-[10px] uppercase tracking-wider text-muted-foreground font-medium">EU-Server</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    {/* Gauge */}
                    <div className="relative">
                      <svg viewBox="0 0 220 132" className="w-full max-w-[280px] mx-auto" role="img" aria-label="Durchsatz-Anzeige">
                        <path d="M 25 112 A 85 85 0 0 1 195 112" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round" className="text-muted" opacity={0.3} />
                        <path d="M 25 112 A 85 85 0 0 1 195 112" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round" pathLength={100} strokeDasharray="91 100" className="text-primary" />
                        <line x1="110" y1="112" x2="177" y2="91" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" className="text-foreground" />
                        <circle cx="110" cy="112" r="6" className="fill-foreground" />
                        <circle cx="110" cy="112" r="2.5" className="fill-background" />
                      </svg>
                      <div className="absolute inset-x-0 bottom-1 text-center">
                        <div className="text-3xl font-bold text-primary leading-none">3.240</div>
                        <div className="text-xs text-muted-foreground mt-1">Token / Sekunde, Durchsatz</div>
                      </div>
                    </div>

                    {/* Token-Stream line */}
                    <div className="mt-5 rounded-lg border border-border bg-muted/30 px-3 py-2">
                      <div className="flex items-center justify-between text-[11px] text-muted-foreground mb-1.5">
                        <span>Token-Stream</span>
                        <span className="font-medium text-foreground">live</span>
                      </div>
                      <svg viewBox="0 0 240 20" className="w-full h-5" aria-hidden="true">
                        <line x1="2" y1="10" x2="238" y2="10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-primary vllm-stream" />
                      </svg>
                    </div>

                    {/* Metric tiles */}
                    <div className="mt-4 grid grid-cols-2 gap-2.5">
                      {metricTiles.map((m) => {
                        const Icon = m.icon;
                        return (
                          <div key={m.label} className="rounded-lg border border-border bg-background px-3 py-2.5">
                            <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                              <Icon className="w-3.5 h-3.5 text-primary" />
                              {m.label}
                            </div>
                            <div className="text-lg font-bold mt-0.5 tabular-nums">{m.value}</div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="text-[11px] text-center text-muted-foreground pt-3">
                      Continuous Batching, PagedAttention, OpenAI-kompatibel
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Stat band */}
              <div className="mt-14 grid grid-cols-3 rounded-2xl border-2 border-border bg-card overflow-hidden">
                {[
                  ["24x", "höherer Durchsatz"],
                  ["5 bis 10x", "günstiger als Cloud-APIs"],
                  ["EU", "DSGVO-konformes Hosting"],
                ].map(([v, l], i) => (
                  <div key={i} className="p-6 text-center border-r last:border-r-0 border-border">
                    <div className="text-3xl md:text-4xl font-bold text-primary">{v}</div>
                    <div className="text-xs md:text-sm text-muted-foreground mt-1">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* DEFINITION */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Kurz erklärt</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was vLLM ist und warum es so schnell ist</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p><strong className="text-foreground">vLLM</strong> ist ein quelloffener Inferenz- und Serving-Layer für große Sprachmodelle. Es nimmt Ihre Modelle entgegen und stellt sie als skalierbaren Dienst mit OpenAI-kompatibler API bereit, optimiert auf maximalen Durchsatz und niedrige Latenz auf eigener GPU-Hardware.</p>
                    <p>Der Geschwindigkeitsvorteil entsteht durch zwei Ideen. <strong className="text-foreground">PagedAttention</strong> verwaltet den knappen GPU-Speicher in kleinen Seiten statt in großen, festen Blöcken und verschwendet so kaum Speicher. <strong className="text-foreground">Continuous Batching</strong> bündelt eingehende Anfragen fortlaufend, sodass die GPU nie auf einen vollen Batch warten muss und durchgehend ausgelastet bleibt.</p>
                    <p>Für Unternehmen im DACH-Raum zählt vor allem eines: <strong className="text-foreground">Datenhoheit</strong>. Wir betreiben jede vLLM-Instanz auf Servern in Österreich und der EU, ohne Datenabfluss an US-Anbieter und mit vollständiger Dokumentation nach DSGVO und EU AI Act.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">PagedAttention</Badge>
                    <Badge variant="secondary" className="rounded-full">Continuous Batching</Badge>
                    <Badge variant="secondary" className="rounded-full">OpenAI-kompatibel</Badge>
                    <Badge variant="secondary" className="rounded-full">Self-Hosted</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">vLLM auf einen Blick</CardTitle>
                    <CardDescription>Die wichtigsten Eckdaten im Überblick.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {[
                      ["Zweck", "produktives LLM Serving"],
                      ["Kerntechnik", "PagedAttention, Batching"],
                      ["Schnittstelle", "OpenAI-kompatible REST-API"],
                      ["Modelle", "Llama, Mistral, Qwen, Phi, Gemma"],
                      ["Betrieb", "Docker, Kubernetes, On-Premise"],
                      ["Datenschutz", "EU-Hosting, DSGVO, AVV"],
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

          {/* PROBLEM / LÖSUNG */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Cloud-API vs. Self-Hosted</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Warum Cloud-LLM-APIs für viele Unternehmen zu teuer werden</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Monatliche Rechnungen im vier- bis fünfstelligen Bereich sind bei wachsendem KI-Einsatz keine Seltenheit. vLLM gibt Ihnen die Kontrolle über Kosten, Daten und Performance zurück.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-muted bg-muted/20">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-muted-foreground" />
                      Das Problem mit Cloud-LLM-APIs
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {problems.map((p, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <X className="w-4 h-4 text-muted-foreground/60 mt-0.5 shrink-0" />
                        <span className="text-muted-foreground text-sm">{p}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                <Card className="border-2 border-primary/20 bg-primary/5 hover-lift">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2 text-primary">
                      <CheckCircle className="w-5 h-5" />
                      Die Lösung: vLLM auf EU-Servern
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {solutions.map((s, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm">{s}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* TECHNISCHE STÄRKEN (Bento) */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Technische Stärken</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Was vLLM Inference so leistungsstark macht</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Von GPU-Optimierung bis zum DSGVO-konformen Hosting: die Eigenschaften, die vLLM zur ersten Wahl für produktive Workloads machen.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {capabilities.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <Card key={i} className={`hover-lift border-2 ${c.highlight ? "lg:col-span-2 bg-primary/5 border-primary/20" : "border-border"}`}>
                      <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                          <Icon className="w-6 h-6 text-primary" />
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

          {/* BENCHMARK */}
          <section id="benchmark" className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">LLM Benchmark</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">vLLM im Vergleich: Durchsatz und Latenz</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Vergleich gängiger Serving-Engines mit Llama 70B in 4-Bit AWQ bei 50 gleichzeitigen Anfragen auf einer NVIDIA A100 80 GB. Die Werte spiegeln typische Produktionsgrößen wider; Ihre Performance hängt von Modell, Hardware und Request-Mix ab.</p>
              </div>
              <Card className="border-2 border-border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="font-bold text-foreground">Engine</TableHead>
                      <TableHead className="font-bold text-foreground">Relativer Durchsatz</TableHead>
                      <TableHead className="font-bold text-foreground">Ø TTFT</TableHead>
                      <TableHead className="font-bold text-foreground">Multi-GPU</TableHead>
                      <TableHead className="font-bold text-foreground">OpenAI-API</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {benchmarkRows.map((row, i) => (
                      <TableRow key={i} className={row.highlight ? "bg-primary/5" : i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className={row.highlight ? "font-bold text-primary" : "font-medium"}>
                          {row.tool}
                          {row.highlight && <Badge className="ml-2 text-xs" variant="secondary">Empfohlen</Badge>}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Progress value={row.rel} className="w-24 h-2" />
                            <span className="text-sm tabular-nums">{row.rel}%</span>
                          </div>
                        </TableCell>
                        <TableCell className="tabular-nums">{row.ttft}</TableCell>
                        <TableCell>{row.multiGpu}</TableCell>
                        <TableCell>{row.openAi}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Testsystem: NVIDIA A100 80 GB, Llama 70B AWQ, 50 simultane Anfragen, 512 Output-Tokens. Eigene Messungen, Richtwerte.
              </p>
            </div>
          </section>

          {/* DEPLOYMENT */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Deployment</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Von vLLM Docker bis zum skalierten Cluster</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">vLLM startet in Minuten als Container und skaliert auf Kubernetes horizontal. Wir begleiten Sie vom ersten Test bis zum produktiven Betrieb auf EU-Infrastruktur.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {deployOptions.map((o, i) => {
                  const Fallback = o.fallbackIcon;
                  return (
                    <Card key={i} className="hover-lift border-2 border-border">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          {o.logo ? (
                            <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center">
                              <img src={`/img/logos/${o.logo}.svg`} alt={o.title} className="w-7 h-7" />
                            </div>
                          ) : (
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                              <Fallback className="w-6 h-6 text-primary" />
                            </div>
                          )}
                          <Badge variant="secondary" className="text-xs">{o.badge}</Badge>
                        </div>
                        <CardTitle className="text-lg mt-3">{o.title}</CardTitle>
                      </CardHeader>
                      <CardContent><p className="text-muted-foreground leading-relaxed text-sm">{o.desc}</p></CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* vLLM vs OLLAMA */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Direktvergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">vLLM oder Ollama?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Beide haben ihre Stärken. Ollama glänzt in der Entwicklung, vLLM in der Produktion. Oft ist die Kombination die beste Antwort.</p>
              </div>
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[34%] font-bold text-foreground">Kriterium</TableHead>
                      <TableHead className="text-primary font-bold">
                        <span className="inline-flex items-center gap-2">
                          <span className="w-6 h-6 rounded bg-primary/10 inline-flex items-center justify-center"><Gauge className="w-3.5 h-3.5 text-primary" /></span>
                          vLLM
                        </span>
                      </TableHead>
                      <TableHead className="text-muted-foreground font-bold">
                        <span className="inline-flex items-center gap-2">
                          <span className="w-6 h-6 rounded bg-white border border-border inline-flex items-center justify-center"><img src="/img/logos/ollama.svg" alt="Ollama" className="w-3.5 h-3.5" /></span>
                          Ollama
                        </span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {vsOllama.map((row, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{row[0]}</TableCell>
                        <TableCell className="text-sm text-primary font-medium">
                          <span className="inline-flex items-start gap-1.5"><Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />{row[1]}</span>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">{row[2]}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </section>

          {/* USE CASES / BRANCHEN */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Anwendungsfälle</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Wer von schnellem, privatem LLM-Serving profitiert</h2>
                <p className="text-lg text-muted-foreground">Wählen Sie Ihre Branche, wir zeigen das passende Szenario.</p>
              </div>
              <Tabs defaultValue="kanzlei" className="w-full">
                <TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">
                  {branchen.map((b) => {
                    const Icon = b.icon;
                    return (
                      <TabsTrigger key={b.value} value={b.value} className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border">
                        <Icon className="w-4 h-4 mr-1.5" />{b.label}
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
                {branchen.map((b) => (
                  <TabsContent key={b.value} value={b.value}>
                    <Card className="border-2">
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-bold mb-2">{b.head}</h3>
                        <p className="text-muted-foreground leading-relaxed">{b.text}</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>

          {/* TECH STACK mit Logos */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Tech-Stack</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Unser LLM-Serving-Stack</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Bewährte Open-Source-Werkzeuge, die wir in Produktionsumgebungen im DACH-Raum einsetzen.</p>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-10">
                {stack.map((s) => (
                  <div key={s.slug} className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl border border-border bg-white hover-lift">
                    <img src={`/img/logos/${s.slug}.svg`} alt={s.name} className="w-9 h-9" />
                    <span className="text-[11px] text-muted-foreground text-center leading-tight">{s.name}</span>
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stackCats.map((c, i) => (
                  <div key={i} className="p-5 bg-background rounded-xl border border-border">
                    <div className="font-bold text-primary mb-1 text-sm">{c.cat}</div>
                    <div className="text-muted-foreground text-sm leading-relaxed">{c.tools}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PROZESS */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Der Ablauf</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">So bringen wir vLLM in Ihre Produktion</h2>
                <p className="text-lg text-muted-foreground">Vier klare Schritte, kein Blackbox-Consulting.</p>
              </div>
              <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                <div className="hidden lg:block absolute top-8 left-0 right-0 h-px pointer-events-none" aria-hidden>
                  <div className="mx-auto w-3/4 h-px bg-gradient-to-r from-primary/40 via-primary/25 to-primary/40" />
                </div>
                {steps.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.num} className="relative flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-5 shadow-lg shadow-primary/20 relative z-10 ring-8 ring-background">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div className="text-xs font-bold text-primary mb-1 tracking-wide">SCHRITT {s.num}, {s.time}</div>
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
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zu vLLM und LLM Serving</h2>
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

          {/* VERWANDTE LEISTUNGEN */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Mehr Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zu vLLM</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  { href: "/ollama", icon: Boxes, title: "Ollama, lokale LLMs", desc: "Einfaches LLM-Serving für Development und Prototyping, die ideale Ergänzung zu vLLM in der Produktion." },
                  { href: "/mlops", icon: Activity, title: "MLOps & LLMOps", desc: "ML-Pipelines, Model Registry, Observability und Deployment-Automatisierung für stabile KI-Systeme." },
                  { href: "/kubernetes", icon: Network, title: "Kubernetes für KI", desc: "GPU-Scheduling, Auto-Scaling und GitOps für produktive LLM-Workloads auf eigenem Cluster." },
                  { href: "/private-ai", icon: Lock, title: "Private AI", desc: "Lokale, DSGVO-konforme KI-Plattformen, vollständig in Ihrer Infrastruktur betrieben." },
                ].map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <a key={i} href={s.href} className="group block">
                      <Card className="h-full border-2 hover-lift group-hover:border-primary/40">
                        <CardHeader>
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                            {serviceLogos[s.href] ? <img src={`/img/logos/${serviceLogos[s.href]}.svg`} alt={s.title} className="w-7 h-7 object-contain" /> : <Icon className="w-6 h-6 text-primary" />}
                          </div>
                          <CardTitle className="text-lg">{s.title}</CardTitle>
                        </CardHeader>
                        <CardContent><p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p></CardContent>
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
