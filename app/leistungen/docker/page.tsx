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
  Box,
  Boxes,
  Layers,
  Shield,
  ShieldCheck,
  Cpu,
  GitBranch,
  Settings,
  Check,
  X,
  Package,
  Server,
  Network,
  Database,
  Building2,
  Rocket,
  MapPin,
  Search,
  ClipboardList,
  Code2,
  Gauge,
  Lock,
  Terminal,
  Activity,
  FlaskConical,
  HardDrive,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Docker für KI: Container, Compose & GPU-Deployment",
  description:
    "Docker Container für KI-Anwendungen: GPU-beschleunigte LLM-Container, Docker Compose KI-Stacks, Multi-Stage Builds, Container-Security und Enterprise Deployment. DSGVO-konform auf EU-Servern, von der KI Kanzlei aus Österreich.",
  keywords:
    "Docker, Docker Container, Docker KI, Docker Compose, Docker Kubernetes, Docker GPU, Docker ML, Containerisierung, Container Orchestrierung, Docker Enterprise, NVIDIA Docker, Docker Deployment, Docker DACH, Docker Österreich, Docker DSGVO",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/docker" },
};

const faqs = [
  {
    q: "Was ist Docker und warum ist es die Grundlage moderner KI-Infrastruktur?",
    a: "Docker ist die weltweit führende Container-Plattform. Sie verpackt eine Anwendung samt aller Abhängigkeiten, also Betriebssystem-Libraries, Python-Pakete, CUDA-Treiber und Konfiguration, in eine isolierte, portable Einheit. Für KI ist das entscheidend, weil Machine-Learning-Modelle notorisch komplexe Abhängigkeitsketten haben. Ein Container garantiert, dass Ihr KI-Modell auf dem Entwickler-Laptop, im Test und auf dem Produktionsserver exakt gleich läuft. So verschwindet das klassische Problem, dass etwas nur auf einem bestimmten Rechner funktioniert.",
  },
  {
    q: "Was ist der Unterschied zwischen Docker und Docker Compose?",
    a: "Docker verwaltet einzelne Container, Docker Compose orchestriert mehrere Container als zusammenhängende Anwendung. Für KI-Projekte ist Compose praktisch unverzichtbar: Ein realer KI-Stack besteht aus mehreren Diensten, etwa einem LLM-Server (vLLM oder Ollama), einer Vektor-Datenbank (Qdrant), einem API-Gateway, einem Cache (Redis) und Monitoring (Prometheus, Grafana). Docker Compose definiert all diese Services in einer einzigen YAML-Datei und startet, stoppt und skaliert sie mit einem Befehl. Ein kompletter ML-Stack lässt sich so reproduzierbar hochfahren.",
  },
  {
    q: "Kann Docker GPU-beschleunigte KI-Modelle ausführen?",
    a: "Ja. Mit dem NVIDIA Container Toolkit (früher nvidia-docker) greifen Container direkt auf GPU-Hardware zu. Das ermöglicht GPU-beschleunigtes Training und Inferenz innerhalb von Containern, inklusive Multi-GPU-Support und CUDA-Optimierung. Wir konfigurieren Docker so, dass Ihre lokalen Modelle wie Llama, Mistral oder Qwen mit voller GPU-Leistung laufen und sich mehrere Container die vorhandenen GPUs effizient teilen.",
  },
  {
    q: "Wie spielen Docker und Kubernetes bei KI-Workloads zusammen?",
    a: "Docker baut die Container-Images, Kubernetes betreibt sie in der Produktion. Kubernetes übernimmt Auto-Scaling (mehr Container bei Last), Load Balancing, Rolling Updates ohne Downtime, Selbstheilung bei Ausfällen und GPU-Scheduling. Zusammen bilden beide das Rückgrat jeder skalierbaren KI-Infrastruktur. Für kleinere Setups reicht oft Docker Compose oder Docker Swarm; den Sprung zu Kubernetes empfehlen wir erst, wenn echtes Scaling über mehrere Knoten gebraucht wird.",
  },
  {
    q: "Worin unterscheidet sich ein Docker Container von einer virtuellen Maschine?",
    a: "Eine virtuelle Maschine virtualisiert komplette Hardware und bringt ein eigenes Gast-Betriebssystem mit, was Gigabytes an Overhead und Boot-Zeiten im Minutenbereich bedeutet. Ein Docker Container teilt sich den Kernel des Host-Systems und isoliert nur den Prozess über Namespaces und cgroups. Das Ergebnis: Images im Megabyte- statt Gigabyte-Bereich, Start in Sekunden und deutlich höhere Dichte pro Server. Für KI-Inferenz, die schnell skalieren muss, ist das ein massiver Vorteil.",
  },
  {
    q: "Sind Docker Container DSGVO-konform und sicher genug für sensible Daten?",
    a: "Ja, bei sauberer Konfiguration. Wir härten Container nach Best Practices: Rootless-Betrieb, minimale Basis-Images, automatisiertes Image-Scanning, Secrets Management, Netzwerk-Segmentierung und klar gesetzte Ressourcen-Limits. Betrieben werden die Container auf österreichischen oder EU-Servern, auf Wunsch vollständig on-premise. In Kombination mit lokal laufenden Modellen verlässt kein Datenbyte Ihre Umgebung, abgesichert per Auftragsverarbeitungsvertrag. Das ist gerade für Ärzte, Kanzleien und Banken im DACH-Raum entscheidend.",
  },
  {
    q: "Was ist ein Multi-Stage Build und warum ist er für KI-Images wichtig?",
    a: "Ein Multi-Stage Build trennt die Bau-Phase von der Laufzeit-Phase. In der ersten Stufe werden Abhängigkeiten kompiliert und Modelle vorbereitet, in der finalen Stufe landet nur das Nötigste im Image. Bei KI-Anwendungen reduziert das die Image-Größe oft von mehreren Gigabyte auf einen Bruchteil, beschleunigt Deployments, senkt die Angriffsfläche und spart Registry- sowie Transferkosten. Wir setzen Multi-Stage Builds standardmäßig für jedes KI-Image ein.",
  },
  {
    q: "Lassen sich bestehende KI-Anwendungen nachträglich containerisieren?",
    a: "In den allermeisten Fällen ja. Wir analysieren Ihre vorhandene Anwendung, dokumentieren die Abhängigkeiten und schreiben ein optimiertes Dockerfile, ohne dass Sie den Code neu aufsetzen müssen. Auch gewachsene Setups mit GPU-Treibern, speziellen Python-Versionen oder Legacy-Bibliotheken bekommen wir sauber in reproduzierbare Container. Das Ergebnis ist eine portable Version Ihrer KI-Anwendung, die identisch in jeder Umgebung läuft.",
  },
  {
    q: "Was kostet eine Docker-basierte KI-Infrastruktur?",
    a: "Docker selbst ist Open Source und kostenlos. Kosten entstehen durch Infrastruktur (Server, GPUs) und das professionelle Setup. In der Praxis ist eine Docker-basierte KI-Infrastruktur mit Open-Source-Modellen auf eigener Hardware typischerweise deutlich günstiger als proprietäre Cloud-KI-Dienste, weil keine Pro-Token-Gebühren anfallen und Sie die Auslastung selbst steuern. Wir starten immer mit einer kostenlosen Erstanalyse, um Ihren konkreten Bedarf und die erwarteten Kosten realistisch zu ermitteln.",
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
  name: "Docker & Container für KI",
  serviceType: "Docker, Containerisierung, Container-Orchestrierung",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "Professionelle Docker Containerisierung für KI-Anwendungen im DACH-Raum: GPU-Container, Docker Compose KI-Stacks, Multi-Stage Builds, Container-Security und Enterprise Deployment. DSGVO-konform auf EU-Servern.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const stats = [
  ["60%", "weniger Infrastrukturkosten gegenüber Cloud-KI"],
  ["Sekunden", "Deploy-Zeit pro Container-Service"],
  ["100%", "reproduzierbare Deployments"],
  ["DSGVO", "EU-Hosting & On-Premise möglich"],
];

const imageLayers = [
  { cmd: 'CMD ["uvicorn", "app:app"]', note: "Startbefehl des Containers", size: "1 KB" },
  { cmd: "COPY ./app /app", note: "Ihr Anwendungscode", size: "24 MB" },
  { cmd: "RUN pip install -r requirements.txt", note: "vLLM, FastAPI, Transformers", size: "2.1 GB" },
  { cmd: "RUN apt-get install -y cuda-toolkit", note: "GPU-Laufzeit", size: "1.8 GB" },
];
const baseLayer = { cmd: "FROM python:3.12-slim", note: "Basis-Image", size: "180 MB" };

const overview = [
  ["Kernprinzip", "App + Abhängigkeiten in einem Image"],
  ["Portabilität", "läuft identisch vom Laptop bis Server"],
  ["GPU", "NVIDIA Container Toolkit, CUDA"],
  ["Orchestrierung", "Compose, Swarm, Kubernetes"],
  ["Sicherheit", "Rootless, Scanning, Secrets"],
  ["Hosting", "On-Premise, AT/EU, DSGVO"],
];

const architecture = [
  { icon: Box, layer: "Container Layer", desc: "Laufende Instanz: isolierter Prozess mit eigenem, beschreibbarem Dateisystem über Namespaces und cgroups." },
  { icon: Layers, layer: "Image Layer", desc: "Read-only Vorlage aus geschichteten, gecachten Dateisystem-Layern (Union File System)." },
  { icon: Settings, layer: "Runtime", desc: "containerd und runc starten, stoppen und verwalten die Container auf dem Host." },
  { icon: Database, layer: "Registry", desc: "Zentraler Speicher für Images: Docker Hub, Harbor oder eine private Registry." },
];

const composeServices = [
  { slug: "fastapi", name: "API Gateway", port: ":8080" },
  { slug: "ollama", name: "LLM-Server", port: ":11434" },
  { slug: "qdrant", name: "Vektor-DB", port: ":6333" },
  { slug: "postgresql", name: "PostgreSQL", port: ":5432" },
  { slug: "redis", name: "Redis Cache", port: ":6379" },
  { slug: "grafana", name: "Monitoring", port: ":3000" },
];

const comparison = [
  {
    feature: "Portabilität",
    docker: "Sehr hoch, Image läuft überall identisch",
    vm: "Mittel, große Images, Hypervisor nötig",
    onprem: "Gering, an die Hardware gebunden",
  },
  {
    feature: "Start- und Deploy-Zeit",
    docker: "Sekunden, Image starten",
    vm: "Minuten, Gast-OS booten",
    onprem: "Stunden bis Tage, manuelles Setup",
  },
  {
    feature: "Ressourcen-Overhead",
    docker: "Minimal, teilt den Host-Kernel",
    vm: "Hoch, eigenes Gast-OS pro VM",
    onprem: "Keiner, aber keine Isolation",
  },
  {
    feature: "GPU-Support",
    docker: "Ja, via NVIDIA Container Toolkit",
    vm: "Eingeschränkt, GPU-Passthrough nötig",
    onprem: "Nativ, direkter Hardware-Zugriff",
  },
  {
    feature: "Isolation",
    docker: "Prozess-Ebene (Namespaces, cgroups)",
    vm: "Hardware-Ebene, sehr stark",
    onprem: "Keine",
  },
  {
    feature: "Skalierung",
    docker: "Einfach, Compose oder Kubernetes",
    vm: "Aufwändig, ganze VMs klonen",
    onprem: "Schwierig, neue Hardware nötig",
  },
  {
    feature: "Reproduzierbarkeit",
    docker: "Garantiert, Image ist die Spezifikation",
    vm: "Bedingt, Snapshots driften",
    onprem: "Fehleranfällig, manuelle Pflege",
  },
];

const orchestration = [
  {
    value: "compose",
    label: "Docker Compose",
    icon: Layers,
    name: "Docker Compose",
    badge: "Single-Host, YAML",
    audience: "Entwickler, kleine Teams und Single-Server-Setups",
    desc: "Docker Compose beschreibt mehrere Container in einer einzigen YAML-Datei und startet sie gemeinsam auf einem Host. Ideal, um einen kompletten KI-Stack mit einem Befehl reproduzierbar hochzufahren, von der lokalen Entwicklung bis zum dedizierten Server.",
    useCases: [
      "Lokale KI-Entwicklung mit reproduzierbarer Umgebung",
      "KI-Stack auf einem Server: LLM, Vektor-DB, Cache, Monitoring",
      "Prototyping und Proof-of-Concept in Stunden statt Tagen",
    ],
  },
  {
    value: "swarm",
    label: "Docker Swarm",
    icon: Network,
    name: "Docker Swarm",
    badge: "Cluster, Docker-nativ",
    audience: "Teams, die einen einfachen Cluster ohne Kubernetes-Komplexität wollen",
    desc: "Docker Swarm ist die in die Docker Engine integrierte Clustering-Lösung. Sie verteilt Container über mehrere Hosts und bietet Service-Discovery sowie Load Balancing, mit spürbar geringerer Einstiegshürde als Kubernetes.",
    useCases: [
      "Kleine bis mittlere Multi-Host-Cluster",
      "Einfaches Hochverfügbarkeits-Setup ohne Spezialwissen",
      "Schneller, pragmatischer Einstieg in Orchestrierung",
    ],
  },
  {
    value: "kubernetes",
    label: "Kubernetes",
    icon: Settings,
    name: "Kubernetes",
    badge: "Enterprise, Industriestandard",
    audience: "Enterprise und große, skalierbare Produktionsumgebungen",
    desc: "Kubernetes ist der Industriestandard für Container-Orchestrierung im großen Maßstab. Es übernimmt Auto-Scaling, Load Balancing, Rolling Updates, Selbstheilung und GPU-Scheduling für anspruchsvolle KI-Workloads über viele Knoten hinweg.",
    useCases: [
      "Auto-Scaling von LLM-Inferenz unter wechselnder Last",
      "Rolling Updates und A/B-Tests ohne Downtime",
      "GPU-Scheduling und Multi-Node-Training",
    ],
  },
];

const capabilities: { span: string; accent?: boolean; icon: typeof Box; badge: string; title: string; text: string }[] = [
  {
    span: "md:col-span-2",
    accent: true,
    icon: Box,
    badge: "Containerisierung",
    title: "Docker Container für KI-Modelle",
    text: "Wir verpacken Ihre KI-Anwendung in optimierte, schlanke Images: Multi-Stage Builds für minimale Größe, festgepinnte Versionen für volle Reproduzierbarkeit und Healthchecks für stabilen Betrieb. Egal ob LLM-Inferenz, Klassifikator oder komplette KI-API.",
  },
  {
    span: "",
    icon: Layers,
    badge: "Compose",
    title: "Docker Compose KI-Stacks",
    text: "Komplette Multi-Container-Architekturen: LLM-Server, Vektor-DB, Gateway, Cache und Monitoring, alles mit einem Befehl deploybar.",
  },
  {
    span: "",
    icon: Cpu,
    badge: "GPU",
    title: "GPU-Container & NVIDIA Docker",
    text: "GPU-beschleunigte Container für Inferenz und Training: NVIDIA Container Toolkit, CUDA-Tuning, Multi-GPU und effizientes GPU-Sharing.",
  },
  {
    span: "",
    icon: Shield,
    badge: "Security",
    title: "Container Security & Compliance",
    text: "Rootless Container, Image-Scanning, Secrets Management, Netzwerk-Isolation und DSGVO-konforme Konfiguration für produktive KI.",
  },
  {
    span: "",
    icon: GitBranch,
    badge: "CI/CD",
    title: "Container-Pipelines",
    text: "Automatisierte Build- und Deploy-Pipelines: Multi-Stage Builds, Tests, Registry-Management und GitOps-Deployments.",
  },
  {
    span: "md:col-span-2",
    accent: true,
    icon: Settings,
    badge: "Enterprise",
    title: "Docker Enterprise Management",
    text: "Unternehmensweites Container-Management: private Registry, zentrales Monitoring, Log-Aggregation, Ressourcen-Limits und automatisierte Wartung Ihrer gesamten Container-Flotte. So bleibt Ihre KI-Infrastruktur auch bei vielen Diensten beherrschbar.",
  },
];

const stackLogos = [
  { slug: "docker", name: "Docker Engine", cat: "Runtime" },
  { slug: "kubernetes", name: "Kubernetes", cat: "Orchestrierung" },
  { slug: "ollama", name: "Ollama", cat: "LLM-Serving" },
  { slug: "python", name: "Python", cat: "Sprache" },
  { slug: "fastapi", name: "FastAPI", cat: "API" },
  { slug: "qdrant", name: "Qdrant", cat: "Vektor-DB" },
  { slug: "postgresql", name: "PostgreSQL", cat: "Datenbank" },
  { slug: "redis", name: "Redis", cat: "Cache" },
  { slug: "prometheus", name: "Prometheus", cat: "Metriken" },
  { slug: "grafana", name: "Grafana", cat: "Monitoring" },
  { slug: "githubactions", name: "GitHub Actions", cat: "CI/CD" },
  { slug: "terraform", name: "Terraform", cat: "Infrastructure as Code" },
  { slug: "pytorch", name: "PyTorch", cat: "ML-Framework" },
  { slug: "huggingface", name: "Hugging Face", cat: "Modelle" },
  { slug: "langchain", name: "LangChain", cat: "LLM-Apps" },
  { slug: "n8n", name: "n8n", cat: "Automatisierung" },
];

const audiences = [
  { icon: Rocket, who: "KI-Startups & Scale-ups", what: "Schnelle Iteration und skalierbare Deployments: Mit Containern bringen Sie KI-Prototypen in Stunden statt Wochen in die Produktion und skalieren bei Erfolg ohne Umbau." },
  { icon: Building2, who: "Enterprise IT-Teams", what: "Standardisierte Container-Infrastruktur für unternehmensweite KI: einheitliche Build-Prozesse, Sicherheitsrichtlinien und Deployment-Standards über alle Teams hinweg." },
  { icon: Workflow, who: "DevOps & MLOps Engineers", what: "Docker als Basis automatisierter CI/CD-Pipelines: reproduzierbare Builds, automatisierte Tests und GitOps-Deployments für Modelle und Services." },
  { icon: Lock, who: "Datenschutz-sensible Branchen", what: "Isolierte Container für DSGVO-konforme KI: Netzwerk-Segmentierung, Secrets Management und sichere Container auf EU-Servern für Ärzte, Anwälte und Banken." },
  { icon: FlaskConical, who: "Forschung & Entwicklung", what: "Reproduzierbare ML-Experimente: identische Umgebungen für Training, Evaluierung und Deployment garantieren vergleichbare, nachprüfbare Ergebnisse." },
  { icon: Code2, who: "Software-Unternehmen", what: "Docker für KI-Features in SaaS-Produkten: Microservices-Architektur, unabhängige Skalierung einzelner KI-Komponenten und einfache, sichere Updates." },
];

const steps = [
  { step: "01", icon: Search, title: "Erstanalyse & Container-Audit", time: "30 Minuten", desc: "Wir sichten Ihre KI-Anwendung, dokumentieren Abhängigkeiten und GPU-Bedarf und identifizieren den Engpass, den die Containerisierung lösen soll. Kostenlos und ohne Vorbereitung Ihrerseits." },
  { step: "02", icon: Box, title: "Containerisierung & Compose-Stack", time: "Woche 1", desc: "Wir schreiben optimierte Dockerfiles mit Multi-Stage Builds und orchestrieren den kompletten KI-Stack in einer Compose-Konfiguration: LLM-Server, Vektor-DB, Gateway und Anwendung, deploybar mit einem Befehl." },
  { step: "03", icon: Shield, title: "GPU, Security & Härtung", time: "Woche 2", desc: "GPU-Passthrough via NVIDIA Container Toolkit plus Härtung: Rootless Container, Image-Scanning, Secrets Management, Netzwerk-Isolation und klar gesetzte Ressourcen-Limits." },
  { step: "04", icon: Rocket, title: "Monitoring, CI/CD & Go-Live", time: "ab Woche 2", desc: "Healthchecks, Prometheus- und Grafana-Monitoring sowie automatisierte CI/CD-Pipelines bringen Ihre Container produktiv und halten sie stabil. Auf Wunsch mit laufender Betreuung." },
];

const reasons = [
  { icon: Cpu, badge: "KI-Fokus", title: "KI-optimierte Container", desc: "Wir bauen nicht einfach Container, wir optimieren sie für KI-Workloads: GPU-Passthrough, CUDA-Tuning, Multi-Stage Builds für minimale Image-Größe und maximale Inferenz-Performance." },
  { icon: Server, badge: "Production-Ready", title: "Produktionsreif von Tag eins", desc: "Unsere Setups sind keine Proof-of-Concepts: Healthchecks, Restart-Policies, Log-Management, Monitoring und Sicherheitshärtung gehören von Anfang an dazu." },
  { icon: MapPin, badge: "Österreich", title: "DACH-Expertise & EU-Hosting", desc: "Als österreichische KI-Agentur kennen wir die Anforderungen im DACH-Raum: DSGVO-konforme Konfiguration, Hosting in AT und der EU sowie deutschsprachiger Support." },
];

const related = [
  { href: "/leistungen/mlops", icon: Activity, title: "MLOps", desc: "Den kompletten ML-Lebenszyklus automatisieren: Training, Deployment und Monitoring auf Container-Basis." },
  { href: "/leistungen/private-ai", icon: Lock, title: "Private AI & Ollama", desc: "Lokale LLMs in Containern, ohne Datenweitergabe, vollständig in Ihrer Kontrolle." },
  { href: "/leistungen/langchain", icon: Workflow, title: "LangChain & RAG", desc: "RAG-Systeme und KI-Agenten, sauber containerisiert und produktionsreif ausgeliefert." },
  { href: "/leistungen/n8n-automatisierung", icon: Network, title: "n8n Automatisierung", desc: "Workflows und Tool-Anbindungen als Container neben Ihrem KI-Stack betreiben." },
  { href: "/leistungen/ki-wissensdatenbank", icon: Database, title: "KI Wissensdatenbank", desc: "Ihre Daten als durchsuchbare RAG-Wissensbasis, betrieben in isolierten Containern." },
  { href: "/leistungen/ki-consulting", icon: ClipboardList, title: "KI Consulting", desc: "Strategie, Architektur und Roadmap für Ihre gesamte KI-Infrastruktur." },
];

function LogoBox({ slug, alt, size = "w-7 h-7" }: { slug: string; alt: string; size?: string }) {
  return (
    <div className="w-12 h-12 rounded-xl bg-white border border-border shadow-sm flex items-center justify-center shrink-0">
      <img src={`/img/logos/${slug}.svg`} alt={alt} className={`${size} object-contain`} loading="lazy" />
    </div>
  );
}

export default function Page() {
  return (
    <>
      <Script id="faq-docker" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-docker" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-3 rounded-2xl bg-white border border-border shadow-sm px-4 py-3">
                    <img src="/img/logos/docker.svg" alt="Docker Logo" className="w-11 h-11 object-contain" />
                    <div>
                      <div className="font-bold text-lg leading-none">Docker</div>
                      <div className="text-xs text-muted-foreground mt-1">Container-Plattform für KI</div>
                    </div>
                  </div>
                  <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                    Containerisierung, GPU, MLOps
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-primary">Docker</span> Container für KI-Anwendungen, sauber deployt
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Wir containerisieren Ihre KI-Systeme professionell: von GPU-beschleunigten LLM-Containern über Docker Compose KI-Stacks bis zur Enterprise-Container-Plattform. Reproduzierbar, sicher und DSGVO-konform auf EU-Servern.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Erstgespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#orchestrierung">Orchestrierung vergleichen</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-primary" /> EU-Hosting & On-Premise</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Bespoke hero visual: Container-Layer-Stack */}
                <Card className="border-2 shadow-xl shadow-primary/5">
                  <CardHeader className="border-b border-border py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center shrink-0">
                        <img src="/img/logos/docker.svg" alt="Docker" className="w-6 h-6 object-contain" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-sm leading-tight">rag-api:latest</div>
                        <div className="text-xs text-muted-foreground leading-tight">Image aus geschichteten Layern</div>
                      </div>
                      <Badge variant="outline" className="ml-auto rounded-full text-[10px] bg-primary/10 text-primary border-primary/20">Image</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6 pb-6">
                    {/* Running container on top */}
                    <div className="rounded-xl border-2 border-primary/40 bg-primary/5 px-4 py-3 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary text-white flex items-center justify-center shrink-0">
                        <Boxes className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold leading-tight">Container läuft</div>
                        <div className="text-[11px] text-muted-foreground leading-tight">Port 8000, GPU aktiv, Up 3 days</div>
                      </div>
                      <span className="ml-auto w-2.5 h-2.5 rounded-full bg-green-500 shrink-0" aria-hidden />
                    </div>

                    <div className="flex justify-center my-2" aria-hidden>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">read-write Layer</span>
                    </div>

                    {/* Layer stack */}
                    <div className="rounded-xl border border-border overflow-hidden divide-y divide-border">
                      {imageLayers.map((l, i) => (
                        <div key={i} className="flex items-center gap-3 px-3 py-2.5 bg-background hover:bg-muted/40 transition-colors">
                          <Layers className="w-4 h-4 text-primary/70 shrink-0" />
                          <div className="min-w-0 flex-1">
                            <div className="text-[12px] font-semibold text-foreground truncate">{l.cmd}</div>
                            <div className="text-[10px] text-muted-foreground leading-tight">{l.note}</div>
                          </div>
                          <span className="text-[10px] text-muted-foreground tabular-nums shrink-0">{l.size}</span>
                        </div>
                      ))}
                      {/* Base layer */}
                      <div className="flex items-center gap-3 px-3 py-2.5 bg-primary/5">
                        <HardDrive className="w-4 h-4 text-primary shrink-0" />
                        <div className="min-w-0 flex-1">
                          <div className="text-[12px] font-bold text-foreground truncate">{baseLayer.cmd}</div>
                          <div className="text-[10px] text-muted-foreground leading-tight">{baseLayer.note}</div>
                        </div>
                        <span className="text-[10px] text-muted-foreground tabular-nums shrink-0">{baseLayer.size}</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-center text-muted-foreground pt-4">
                      Jede Zeile im Dockerfile wird zu einem gecachten Layer. Gleiches Image, gleiches Verhalten, überall.
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

          {/* DEFINITION 2col + Architektur-Card */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Container-Technologie erklärt</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was ist Docker, und warum braucht KI Container?</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      <strong className="text-foreground">Docker</strong> ist die weltweit führende Container-Plattform und das Fundament moderner KI-Infrastruktur. Ein Docker Container verpackt eine Anwendung mit sämtlichen Abhängigkeiten, also Betriebssystem-Libraries, Python-Pakete, CUDA-Treiber und Konfiguration, in eine portable, isolierte Einheit. Was auf Ihrem Entwicklungsrechner funktioniert, funktioniert damit garantiert auch auf dem Produktionsserver. Für KI ist das ein entscheidender Vorteil, denn Machine-Learning-Modelle haben notorisch komplexe Abhängigkeitsketten.
                    </p>
                    <p>
                      Die <strong className="text-foreground">Containerisierung</strong> löst eines der größten Probleme der KI-Entwicklung: das berühmte &quot;Works on my machine&quot;-Problem. Ein Modell, das lokal trainiert und getestet wurde, verhält sich in der Produktion plötzlich anders, weil Python-Versionen, Library-Versionen oder System-Konfigurationen abweichen. Docker eliminiert das vollständig. Jeder Container enthält exakt dieselbe Umgebung, unabhängig davon, wo er läuft. Besonders wichtig, wenn Sie Modelle wie Llama, Mistral oder Qwen produktiv betreiben.
                    </p>
                    <p>
                      <strong className="text-foreground">Docker Compose</strong> erweitert das um die Fähigkeit, mehrere Container als eine Anwendung zu verwalten. In der Praxis besteht ein KI-System selten aus einem einzigen Dienst: Sie brauchen einen LLM-Inference-Server (vLLM, Ollama), eine Vektor-Datenbank für RAG (Qdrant, Weaviate), ein API-Gateway, einen Cache, Monitoring und Ihre eigentliche Anwendung. Compose definiert all das in einer YAML-Datei und startet, stoppt und skaliert es gemeinsam. Ein vollständiger ML-Stack lässt sich so mit einem einzigen Befehl deployen.
                    </p>
                    <p>
                      Im Enterprise-Kontext kommen <strong className="text-foreground">Image-Scanning, Content Trust, Role-Based Access Control</strong> und Compliance-Reporting dazu. In Kombination mit <strong className="text-foreground">Kubernetes</strong> entsteht eine hochskalierbare Plattform: automatisches Skalieren von KI-Modellen, A/B-Tests zwischen Versionen und Rolling Updates ohne Downtime. Die KI Kanzlei nutzt Docker als Grundbaustein für jedes KI-Infrastrukturprojekt im DACH-Raum, von der ersten Containerisierung bis zur vollständigen Plattform.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Containerisierung</Badge>
                    <Badge variant="secondary" className="rounded-full">Docker Compose</Badge>
                    <Badge variant="secondary" className="rounded-full">GPU-Container</Badge>
                    <Badge variant="secondary" className="rounded-full">Multi-Stage Build</Badge>
                  </div>
                </div>

                <div className="space-y-5">
                  <Card className="border-2 bg-primary/5 border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-xl">Docker-Architektur auf einen Blick</CardTitle>
                      <CardDescription>Die vier Bausteine jeder Container-Umgebung.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-1">
                      {architecture.map(({ icon: Icon, layer, desc }) => (
                        <div key={layer} className="flex items-start gap-3 py-2.5 border-b border-primary/15 last:border-0">
                          <div className="w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-foreground mb-0.5">{layer}</div>
                            <div className="text-sm text-muted-foreground leading-snug">{desc}</div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                  <Card className="border-2">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Docker im Überblick</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-1">
                      {overview.map(([label, value]) => (
                        <div key={label} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                          <span className="text-sm font-medium text-foreground">{label}</span>
                          <span className="text-sm text-muted-foreground text-right max-w-[58%]">{value}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* VERGLEICH */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Technologie-Vergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Docker, virtuelle Maschine oder Bare Metal?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Drei Wege, KI-Anwendungen zu betreiben. Für portable, effiziente und schnell deploybare KI-Workloads sind Container fast immer die erste Wahl.
                </p>
              </div>
              <Card className="border-2 overflow-hidden">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-primary/5">
                        <TableHead className="w-[22%] font-bold text-foreground min-w-[150px]">Merkmal</TableHead>
                        <TableHead className="text-primary font-bold min-w-[220px]">
                          Docker <Badge className="ml-2 text-[10px]">Empfohlen</Badge>
                        </TableHead>
                        <TableHead className="text-muted-foreground min-w-[200px]">Virtuelle Maschine</TableHead>
                        <TableHead className="text-muted-foreground min-w-[200px]">Bare Metal</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {comparison.map((r, i) => (
                        <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                          <TableCell className="font-medium text-foreground">{r.feature}</TableCell>
                          <TableCell className="text-sm text-primary font-medium">
                            <span className="inline-flex items-start gap-1.5">
                              <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                              {r.docker}
                            </span>
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground">{r.vm}</TableCell>
                          <TableCell className="text-sm text-muted-foreground">{r.onprem}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Card>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Bare Metal bleibt sinnvoll, wenn maximale GPU-Performance ohne jede Isolation zählt. Für alles, was reproduzierbar, portabel und schnell skalierbar sein soll, gewinnt Docker.
              </p>
            </div>
          </section>

          {/* COMPOSE STACK: bespoke visual + Text */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">So sieht ein KI-Stack aus</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Ein kompletter KI-Stack mit Docker Compose</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Eine produktive KI-Anwendung ist nie nur ein einzelner Dienst. Damit ein RAG-System oder ein KI-Agent zuverlässig läuft, müssen mehrere Container zusammenspielen: ein API-Gateway nimmt Anfragen entgegen, ein LLM-Server liefert die Inferenz, eine Vektor-Datenbank hält die Embeddings, ein Cache beschleunigt wiederkehrende Anfragen und Monitoring behält alles im Blick.
                    </p>
                    <p>
                      Mit <strong className="text-foreground">Docker Compose</strong> beschreiben wir diese Dienste in einer einzigen YAML-Datei. Ein Befehl, <strong className="text-foreground">docker compose up</strong>, und der gesamte Stack steht: lokal beim Entwickeln genauso wie auf dem EU-Server in Produktion. Jeder Dienst läuft in seinem eigenen, isolierten Container und kommuniziert über ein privates Docker-Netzwerk.
                    </p>
                  </div>
                  <ul className="space-y-2.5 mt-6">
                    {[
                      "Ein Befehl startet den kompletten Stack reproduzierbar",
                      "Jeder Dienst skaliert und aktualisiert sich unabhängig",
                      "Privates Netzwerk isoliert die Dienste nach außen",
                      "Identische Umgebung in Entwicklung, Test und Produktion",
                    ].map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bespoke visual: compose network with real logos */}
                <Card className="border-2 shadow-xl shadow-primary/5">
                  <CardHeader className="border-b border-border py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Terminal className="w-5 h-5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-sm leading-tight">docker compose up -d</div>
                        <div className="text-xs text-muted-foreground leading-tight">compose.yaml</div>
                      </div>
                      <Badge variant="outline" className="ml-auto rounded-full text-[10px] bg-primary/10 text-primary border-primary/20">6 Services</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6 pb-6">
                    <div className="rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Network className="w-3.5 h-3.5 text-primary" />
                        <span className="text-[11px] font-bold uppercase tracking-wider text-primary">Netzwerk: ki-stack</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {composeServices.map((s) => (
                          <div key={s.slug} className="rounded-lg border border-border bg-background p-3 flex flex-col items-center text-center gap-2">
                            <div className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center">
                              <img src={`/img/logos/${s.slug}.svg`} alt={s.name} className="w-6 h-6 object-contain" loading="lazy" />
                            </div>
                            <div className="text-xs font-semibold leading-tight">{s.name}</div>
                            <div className="text-[10px] text-muted-foreground tabular-nums">{s.port}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-[11px] text-center text-muted-foreground pt-4">
                      Sechs Container, ein Netzwerk, ein Befehl. So deployen wir KI-Stacks reproduzierbar.
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* ORCHESTRIERUNG Tabs */}
          <section id="orchestrierung" className="py-14 md:py-20 scroll-mt-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Orchestrierung</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Docker Compose, Swarm oder Kubernetes?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Welches Orchestrierungs-Werkzeug passt, hängt von Teamgröße, Skalierungsbedarf und Komplexität ab. Wir wählen das richtige, nicht das komplizierteste.
                </p>
              </div>
              <Tabs defaultValue="compose" className="w-full">
                <TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">
                  {orchestration.map((o) => {
                    const Icon = o.icon;
                    return (
                      <TabsTrigger key={o.value} value={o.value} className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border">
                        <Icon className="w-4 h-4 mr-1.5" />{o.label}
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
                {orchestration.map((o) => (
                  <TabsContent key={o.value} value={o.value}>
                    <Card className="border-2">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <CardTitle className="text-xl">{o.name}</CardTitle>
                          <Badge variant="outline" className="rounded-full text-xs shrink-0 bg-primary/10 text-primary border-primary/20">{o.badge}</Badge>
                        </div>
                        <CardDescription className="leading-relaxed">{o.desc}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-xs font-bold text-primary mb-1">PASST ZU</div>
                        <p className="text-muted-foreground mb-5">{o.audience}</p>
                        <div className="text-xs font-bold text-primary mb-2">TYPISCHE USE CASES</div>
                        <ul className="space-y-2">
                          {o.useCases.map((uc) => (
                            <li key={uc} className="flex items-start gap-2 text-muted-foreground">
                              <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                              <span>{uc}</span>
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

          {/* CAPABILITIES Bento */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere Docker & Container Services</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Von der ersten Containerisierung bis zur Enterprise-Container-Plattform: Docker-Expertise speziell für KI-Projekte.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-4 auto-rows-fr">
                {capabilities.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <Card key={i} className={`hover-lift border-2 ${c.span} ${c.accent ? "bg-primary/5 border-primary/20" : ""}`}>
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <Badge variant="outline" className="rounded-full text-[10px] mb-1 bg-primary/10 text-primary border-primary/20">{c.badge}</Badge>
                            <CardTitle className="text-lg leading-tight">{c.title}</CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent><p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p></CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* TECH STACK mit echten Logos */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Tech Stack</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Womit wir Ihre Container betreiben</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Bewährte, offene Werkzeuge rund um Docker: für Orchestrierung, GPU-Serving, Datenhaltung, CI/CD und Monitoring Ihrer KI-Infrastruktur.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {stackLogos.map((t) => (
                  <Card key={t.slug} className="hover-lift border-2">
                    <CardContent className="p-4 flex items-center gap-3">
                      <LogoBox slug={t.slug} alt={`${t.name} Logo`} />
                      <div className="min-w-0">
                        <div className="font-bold text-sm leading-tight truncate">{t.name}</div>
                        <div className="text-xs text-muted-foreground leading-tight">{t.cat}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* ZIELGRUPPEN */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Für wen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Für wen sich Docker-basierte KI-Infrastruktur lohnt</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Vom Startup bis zur regulierten Branche: Container schaffen überall dieselbe verlässliche Grundlage.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {audiences.map(({ icon: Icon, who, what }, i) => (
                  <Card key={i} className="hover-lift border-2">
                    <CardHeader className="pb-3">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{who}</CardTitle>
                    </CardHeader>
                    <CardContent><p className="text-sm text-muted-foreground leading-relaxed">{what}</p></CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* ABLAUF Timeline (vertikal) */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Der Ablauf</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">In vier Schritten zur produktiven Container-Infrastruktur</h2>
                <p className="text-lg text-muted-foreground">Von der ersten Containerisierung bis zum überwachten Produktivbetrieb, strukturiert und reproduzierbar.</p>
              </div>
              <div className="relative pl-8 md:pl-10">
                <div className="absolute left-[15px] md:left-[19px] top-2 bottom-2 w-px bg-border" aria-hidden />
                <div className="space-y-6">
                  {steps.map((s) => {
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

          {/* WARUM KI KANZLEI */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum die KI Kanzlei</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Warum KI Kanzlei für Docker & Container?</h2>
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

          {/* FAQ */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zu Docker & Container für KI</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zu Docker</h2>
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
