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
  Check,
  X,
  Boxes,
  Cpu,
  Gauge,
  GitBranch,
  ShieldCheck,
  Cloud,
  Network,
  Lock,
  Layers,
  Zap,
  Server,
  Database,
  Activity,
  CheckCircle2,
  Search,
  ClipboardList,
  Rocket,
  Cog,
  RefreshCw,
  Brain,
  Scale,
  Building2,
  ShoppingBag,
  Stethoscope,
  Workflow,
  HeartPulse,
  MapPin,
  Settings,
} from "lucide-react";
import { serviceLogos } from "@/lib/serviceLogos";

export const metadata: Metadata = {
  title: "Kubernetes & Container-Orchestrierung für KI",
  description:
    "Kubernetes (K8s) für produktive KI-Workloads im DACH-Raum: Cluster-Setup, GPU-Scheduling, Auto-Scaling und Betrieb. Hochverfügbar, DSGVO-konform auf EU-Servern. Jetzt kostenlose Erstanalyse anfordern.",
  keywords:
    "Kubernetes, kubernetes cluster, k8s, container orchestrierung, kubernetes deployment, kubernetes vs docker, kubernetes as a service, was ist kubernetes, kubernetes gpu, kubernetes hosting, managed kubernetes, kubernetes beratung, kubernetes österreich, kubernetes Deutschland, kubernetes Schweiz, kubernetes DACH-Raum, kubernetes DSGVO, GPU scheduling",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/kubernetes" },
};

const faqs = [
  {
    q: "Was ist Kubernetes und wofür wird es eingesetzt?",
    a: "Kubernetes (kurz K8s) ist ein Open-Source-System zur Container-Orchestrierung, ursprünglich von Google entwickelt und heute der weltweite Standard für containerisierte Anwendungen. Es beantwortet eine scheinbar simple Frage: Wie betreibt man hunderte Container auf dutzenden Servern zuverlässig, automatisch und ohne dass ein Team rund um die Uhr manuell eingreift. Kubernetes plant Container automatisch ein, startet ausgefallene Instanzen neu, verteilt Last und führt Updates ohne Downtime durch. Für KI-Workloads ist das besonders wertvoll, weil GPU-Ressourcen zentral verwaltet, mehrere Modelle gleichzeitig betrieben und Deployments reproduzierbar gemacht werden.",
  },
  {
    q: "Was ist ein Kubernetes Cluster und wie funktioniert er?",
    a: "Ein Kubernetes Cluster ist ein Verbund von Servern, auf dem containerisierte Anwendungen automatisch geplant, gestartet und überwacht werden. Er besteht aus einem Control Plane (Master), der alle Entscheidungen trifft, und mehreren Worker Nodes, auf denen die eigentlichen Workloads als Pods laufen. Der Scheduler entscheidet, auf welchem Node ein Pod startet, das Kubelet auf jedem Node hält die Container am Leben, und etcd speichert den gesamten Cluster-Zustand. Fällt ein Node aus, verteilt Kubernetes die betroffenen Pods automatisch auf gesunde Nodes um. Für echte Hochverfügbarkeit setzen wir mindestens drei Control-Plane-Nodes ein.",
  },
  {
    q: "Was ist der Unterschied zwischen Kubernetes und Docker?",
    a: "Docker und Kubernetes ergänzen sich, konkurrieren aber nicht direkt. Docker ist ein Tool zum Erstellen und Ausführen von Containern auf einem einzelnen Server. Kubernetes ist ein System zur Orchestrierung von Containern über viele Server hinweg. Praktisch gesagt: Docker baut und startet einen Container, Kubernetes entscheidet, auf welchem von hundert Servern dieser Container laufen soll, hält ihn am Leben, skaliert ihn bei Bedarf und stellt ihn wieder her, wenn etwas schiefläuft. Für Entwicklung und kleine Setups reicht Docker Compose oft aus. Sobald Sie KI-Dienste produktiv und hochverfügbar betreiben, führt kein Weg an Kubernetes vorbei.",
  },
  {
    q: "Wie funktioniert GPU-Scheduling in Kubernetes?",
    a: "GPU-Scheduling in Kubernetes basiert auf dem NVIDIA Device Plugin und dem GPU Operator. Kubernetes erkennt verfügbare GPUs als planbare Ressourcen und weist sie Pods nach Bedarf zu. Mit dem NVIDIA GPU Operator werden Treiber, CUDA-Toolkit und Container-Runtime automatisch konfiguriert. Fortgeschrittene Features wie MIG (Multi-Instance GPU) erlauben es, eine einzelne A100 oder H100 in mehrere isolierte Instanzen aufzuteilen. Time-Slicing ermöglicht die zeitliche Aufteilung zwischen mehreren Workloads für maximale Auslastung und Kosteneffizienz. So wartet keine teure GPU mehr ungenutzt auf Anfragen.",
  },
  {
    q: "Wann lohnt sich Kubernetes und wann reicht Docker Compose?",
    a: "Docker Compose ist ausreichend, wenn Sie einen einzelnen Server nutzen, keine automatische Skalierung brauchen und Ausfallzeiten von ein paar Minuten tolerierbar sind. Kubernetes lohnt sich ab dem Moment, in dem Sie mehrere Server benötigen, GPU-Workloads effizient verwalten wollen, hohe Uptime brauchen oder mehrere Teams auf einer gemeinsamen Infrastruktur arbeiten. Für KI-Workloads, speziell LLM-Serving mit schwankendem Traffic, ist Kubernetes fast immer die richtige Wahl, weil KEDA und der Cluster Autoscaler GPU-Nodes automatisch hoch- und herunterfahren und so die laufenden Kosten erheblich senken.",
  },
  {
    q: "Managed oder Self-Hosted Kubernetes: Was ist besser für KI-Workloads?",
    a: "Managed Kubernetes (etwa Hetzner HKE, OVH Managed K8s, STACKIT) nimmt Ihnen den Betrieb des Control Planes ab. Updates, Zertifikate und Backups laufen automatisiert. Das spart Betriebsaufwand und ist für die meisten Unternehmen die bessere Wahl. Self-Hosted Kubernetes (RKE2, k3s) gibt Ihnen maximale Kontrolle, sinnvoll bei spezifischer Hardware, On-Premise-Anforderungen oder strengen Datenschutzauflagen. Wir empfehlen in der Regel Managed Kubernetes auf EU-Providern, um DSGVO-Konformität und niedrigen Betriebsaufwand zu verbinden. On-Premise setzen wir RKE2 oder k3s ein.",
  },
  {
    q: "Wie stelle ich die Hochverfügbarkeit meiner KI-Dienste auf Kubernetes sicher?",
    a: "Hochverfügbarkeit für KI auf Kubernetes erfordert mehrere Ebenen. Auf Cluster-Ebene setzen wir Multi-Master-Setups mit mindestens drei Control-Plane-Nodes ein. Für die Workloads konfigurieren wir Pod Disruption Budgets, die sicherstellen, dass immer genügend Modell-Instanzen verfügbar sind. Anti-Affinity-Regeln verteilen Replicas auf verschiedene Nodes und Availability Zones. Health Checks (Liveness und Readiness Probes) erkennen nicht-responsive Modell-Server automatisch und starten sie neu. Service Meshes wie Istio oder Cilium ermöglichen intelligentes Traffic-Routing und Circuit Breaking. Das Ergebnis ist hohe, planbare Verfügbarkeit Ihrer KI-Dienste.",
  },
  {
    q: "Wie läuft eine Migration zu Kubernetes ab und wie lange dauert sie?",
    a: "Wir starten immer mit einer kostenlosen Erstanalyse, in der wir Ihre bestehende Infrastruktur, Workloads und Compliance-Anforderungen sichten. Im Assessment entwerfen wir die Zielarchitektur, wählen Distribution, GPU-Setup, Storage und Netzwerk und kalkulieren Kosten und ROI. Danach bauen wir den Cluster auf, containerisieren Ihre Anwendungen, falls nötig, und migrieren Workload für Workload, meist parallel zum Altsystem, um Ausfälle zu vermeiden. Ein erster produktiver Cluster steht je nach Komplexität in wenigen Wochen. Anschließend übernehmen wir auf Wunsch den laufenden Betrieb mit Monitoring, Updates und Optimierung.",
  },
  {
    q: "Ist Kubernetes für KI im DACH-Raum DSGVO-konform betreibbar?",
    a: "Ja. Wir betreiben Kubernetes-Cluster bewusst nicht auf US-Hyperscalern, sondern auf EU-Infrastruktur bei Hetzner, OVH oder STACKIT sowie On-Premise. In Kombination mit lokal betriebenen Modellen über Ollama oder vLLM verlässt kein Datenbyte Ihre Umgebung. Wir sichern den Cluster mit RBAC, Network Policies, verschlüsselten Secrets über Vault und vollständigem Audit-Logging ab und berücksichtigen die Anforderungen des EU AI Acts von Anfang an. Das ist besonders für Banken, Versicherungen, das Gesundheitswesen und öffentliche Stellen entscheidend.",
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
  name: "Kubernetes & Container-Orchestrierung",
  serviceType: "Kubernetes, Container-Orchestrierung, GPU-Scheduling, MLOps-Infrastruktur",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "Aufbau und Betrieb von Kubernetes-Clustern für produktive KI-Workloads im DACH-Raum: GPU-Scheduling, Auto-Scaling, Hochverfügbarkeit. DSGVO-konform, EU-gehostet.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const stats: [string, string][] = [
  ["99,9 %", "Uptime mit Multi-Master-Cluster"],
  ["3+", "Control-Plane-Nodes für echte HA"],
  ["GPU", "Scheduling mit MIG & Time-Slicing"],
  ["EU", "DSGVO-konform gehostet"],
];

const overview: [string, string][] = [
  ["Abkürzung", "K8s, Container-Orchestrierung"],
  ["Ursprung", "Google, heute CNCF Graduated"],
  ["Bausteine", "Pods, Deployments, Services, Nodes"],
  ["Skalierung", "horizontal, vertikal, Scale-to-Zero"],
  ["GPU", "NVIDIA Operator, MIG, Time-Slicing"],
  ["Betrieb", "Managed, Self-Hosted oder Hybrid"],
  ["Hosting", "Hetzner, OVH, STACKIT, On-Premise"],
];

// Hero-Visual: Cluster mit Worker-Nodes und Pods-Grid
const clusterNodes: { name: string; role: string; pods: string[] }[] = [
  { name: "gpu-node-01", role: "GPU", pods: ["run", "run", "run2", "idle", "run", "run2"] },
  { name: "worker-02", role: "CPU", pods: ["run", "run2", "run", "idle", "run2", "run"] },
  { name: "worker-03", role: "CPU", pods: ["run2", "run", "idle", "run", "run", "idle"] },
];

const controlPlane = ["api-server", "etcd", "scheduler"];

const workloads: { slug: string; label: string }[] = [
  { slug: "ollama", label: "Ollama" },
  { slug: "qdrant", label: "Qdrant" },
  { slug: "postgresql", label: "Postgres" },
  { slug: "redis", label: "Redis" },
  { slug: "fastapi", label: "FastAPI" },
  { slug: "n8n", label: "n8n" },
];

function podClass(state: string) {
  if (state === "run") return "bg-primary";
  if (state === "run2") return "bg-primary/55";
  return "bg-primary/15";
}

// Architektur
const cpComponents = [
  { label: "API Server", desc: "Die einzige Schnittstelle zum Cluster, jede Operation läuft darüber" },
  { label: "etcd", desc: "Verteilte Key-Value-Datenbank, hält den gesamten Cluster-Zustand" },
  { label: "Scheduler", desc: "Weist Pods anhand von Ressourcen, GPU-Bedarf und Affinität den richtigen Nodes zu" },
  { label: "Controller Manager", desc: "Gleicht laufend Ist- und Soll-Zustand ab und korrigiert Abweichungen" },
];

const workerComponents = [
  { label: "Kubelet", desc: "Agent auf jedem Node, startet und überwacht die Container der Pods" },
  { label: "Container Runtime", desc: "containerd oder CRI-O führt die Container tatsächlich aus" },
  { label: "kube-proxy", desc: "Regelt Netzwerk und Service-Routing zwischen den Pods" },
  { label: "GPU Operator", desc: "Stellt Treiber, CUDA und Device-Plugin auf GPU-Nodes bereit" },
];

// Capabilities / Leistungen
const capabilities = [
  {
    icon: Boxes,
    badge: "Architektur",
    title: "Cluster-Setup & Architektur",
    text: "Multi-Master-Architektur, GPU-Node-Pools, Netzwerk und Storage auf EU-Infrastruktur, sauber von Grund auf aufgebaut. Wir treffen die Architekturentscheidungen mit Blick auf Ihr Wachstum, statt eine Standardvorlage überzustülpen.",
    span: "md:col-span-2",
    accent: true,
  },
  {
    icon: Cpu,
    badge: "GPU",
    title: "GPU-Scheduling",
    text: "NVIDIA GPU Operator, MIG und Time-Slicing für maximale Auslastung teurer GPU-Hardware statt teurer Leerlaufzeit.",
    span: "",
    accent: false,
  },
  {
    icon: Gauge,
    badge: "Effizienz",
    title: "Auto-Scaling & KEDA",
    text: "HPA, VPA, Cluster Autoscaler und KEDA für event-driven Scale-to-Zero. GPU-Ressourcen kosten nur, wenn sie wirklich gebraucht werden.",
    span: "",
    accent: false,
  },
  {
    icon: GitBranch,
    badge: "Automatisierung",
    title: "GitOps & CI/CD",
    text: "ArgoCD und Flux für automatisierte, reproduzierbare Deployments. Modell-Updates rollen kontrolliert aus, jederzeit nachvollziehbar und ohne manuellen Eingriff.",
    span: "md:col-span-2",
    accent: true,
  },
  {
    icon: ShieldCheck,
    badge: "Security",
    title: "Security & DSGVO",
    text: "RBAC, Network Policies, Vault für Secrets und Audit-Logging. DSGVO-konforme Konfiguration für regulierte Branchen.",
    span: "",
    accent: false,
  },
  {
    icon: Cloud,
    badge: "Flexibilität",
    title: "Multi-Cloud & Hybrid",
    text: "Cluster über mehrere EU-Provider und On-Premise hinweg, zentral verwaltet mit Rancher und sauberer Workload-Migration.",
    span: "",
    accent: false,
  },
];

// Betriebsmodelle
const betriebsmodelle = [
  {
    icon: Cloud,
    title: "Managed Kubernetes",
    tagline: "Empfohlen für die meisten",
    desc: "Control Plane, Updates und Backups laufen beim EU-Provider. Sie konzentrieren sich auf Ihre KI-Workloads, wir auf den Betrieb.",
    points: ["Hetzner HKE, OVH, STACKIT", "Geringer Betriebsaufwand", "Schneller Start"],
    accent: true,
  },
  {
    icon: Server,
    title: "Self-Hosted",
    tagline: "Maximale Kontrolle",
    desc: "RKE2 oder k3s auf eigener Hardware oder im eigenen Rechenzentrum. Volle Souveränität über jede Schicht des Stacks.",
    points: ["RKE2, k3s, kubeadm", "On-Premise möglich", "Eigene Hardware & GPUs"],
    accent: false,
  },
  {
    icon: Network,
    title: "Hybrid & Multi-Cloud",
    tagline: "Das Beste aus beidem",
    desc: "Sensible Workloads on-premise, elastische Last in der EU-Cloud. Zentral gemanagt über Rancher, mit konsistenter Sicherheit.",
    points: ["Rancher Management", "Burst in die Cloud", "Konsistente Policies"],
    accent: false,
  },
];

const gpuDetails = [
  { label: "NVIDIA GPU Operator", desc: "Automatische Konfiguration von Treibern, CUDA und Container-Runtime auf allen GPU-Nodes" },
  { label: "MIG (Multi-Instance GPU)", desc: "Eine A100 oder H100 in mehrere isolierte GPU-Instanzen aufteilen, ideal für parallele Modell-Anfragen" },
  { label: "Time-Slicing", desc: "Zeitliche Aufteilung von GPU-Ressourcen zwischen mehreren Workloads für maximale Auslastung" },
  { label: "DCGM Exporter", desc: "Prometheus-Metriken für GPU-Auslastung, Temperatur und Speicher, sichtbar in Grafana" },
];

// Vergleich
const comparison: [string, string, string][] = [
  ["Einsatzbereich", "Einzelner Server, Entwicklung", "Multi-Server, Produktion"],
  ["Skalierung", "manuell, begrenzt", "automatisch, horizontal & vertikal"],
  ["Hochverfügbarkeit", "kein automatischer Failover", "Multi-Master, Self-Healing"],
  ["GPU-Support", "NVIDIA Container Toolkit", "GPU Operator, MIG, Scheduling"],
  ["KI-Serving", "für einfache Setups ausreichend", "Standard für produktives LLM-Serving"],
  ["Updates", "manuell, mit Downtime", "Rolling Updates ohne Downtime"],
  ["Self-Healing", "nicht vorhanden", "Pods werden automatisch neu gestartet"],
  ["DSGVO-Hosting", "je nach Hosting-Entscheidung", "EU-Cluster: Hetzner, OVH, STACKIT"],
  ["Empfehlung", "Prototyp, kleines Team", "Produktion, Enterprise, KI-Scale"],
];

// Tech-Stack mit echten Logos
const stackLogos: { slug: string; label: string }[] = [
  { slug: "kubernetes", label: "Kubernetes" },
  { slug: "docker", label: "Docker" },
  { slug: "terraform", label: "Terraform" },
  { slug: "githubactions", label: "GitHub Actions" },
  { slug: "prometheus", label: "Prometheus" },
  { slug: "grafana", label: "Grafana" },
  { slug: "redis", label: "Redis" },
  { slug: "postgresql", label: "PostgreSQL" },
  { slug: "elasticsearch", label: "Elasticsearch" },
  { slug: "python", label: "Python" },
  { slug: "fastapi", label: "FastAPI" },
  { slug: "ollama", label: "Ollama" },
];

const stackCategories: { icon: typeof Boxes; category: string; tools: string }[] = [
  { icon: Boxes, category: "Distribution", tools: "RKE2, k3s, kubeadm, Hetzner HKE, OVH Managed K8s, STACKIT" },
  { icon: Cpu, category: "GPU-Orchestrierung", tools: "NVIDIA GPU Operator, Device Plugin, MIG, Time-Slicing, DCGM" },
  { icon: Brain, category: "KI-Serving", tools: "vLLM, Ollama, Triton Inference Server, KServe, Ray Serve" },
  { icon: GitBranch, category: "GitOps & CI/CD", tools: "ArgoCD, Flux, Helm, Kustomize, GitHub Actions, Tekton" },
  { icon: Gauge, category: "Autoscaling", tools: "HPA, VPA, Cluster Autoscaler, KEDA (Scale-to-Zero), Karpenter" },
  { icon: Activity, category: "Monitoring", tools: "Prometheus, Grafana, Loki, DCGM Exporter, OpenTelemetry" },
  { icon: Network, category: "Service Mesh & Netzwerk", tools: "Istio, Cilium, Linkerd, Traefik, ingress-nginx" },
  { icon: Database, category: "Storage", tools: "Longhorn, Rook-Ceph, OpenEBS, NFS, MinIO (S3-kompatibel)" },
  { icon: Lock, category: "Security & Secrets", tools: "RBAC, Network Policies, Falco, OPA/Gatekeeper, Vault, cert-manager" },
];

// Use Cases (Tabs)
const useCases = [
  {
    value: "saas",
    label: "SaaS & Produkt",
    icon: Boxes,
    head: "Multi-Tenant-KI-Features skalierbar betreiben",
    text: "SaaS-Anbieter mit KI-Funktionen betreiben ihre Modelle Multi-Tenant: isolierte Namespaces pro Kunde, Resource Quotas gegen laute Nachbarn und automatische Skalierung bei Lastspitzen. Kubernetes sorgt dafür, dass ein einzelner Kunde nie die Plattform für alle anderen ausbremst.",
    bullets: ["Isolierte Namespaces je Mandant", "Resource Quotas & Limits", "Autoscaling pro Kunde", "Rolling Updates ohne Downtime"],
  },
  {
    value: "mlops",
    label: "MLOps & Data",
    icon: Workflow,
    head: "Reproduzierbare Pipelines für Training und Serving",
    text: "MLOps- und Data-Engineering-Teams nutzen Kubernetes als einheitliche Plattform für CI/CD von Modellen, automatisierte Trainings-Jobs und reproduzierbare Deployments. Kombiniert mit ArgoCD und KServe entsteht ein durchgängiger Weg vom Commit bis zum produktiven Modell-Endpoint.",
    bullets: ["CI/CD für Modelle (ArgoCD, Flux)", "Trainings-Jobs als K8s-Jobs", "Model-Serving mit KServe & vLLM", "Versionierte, reproduzierbare Deployments"],
  },
  {
    value: "reguliert",
    label: "Regulierte Branchen",
    icon: Lock,
    head: "DSGVO-konforme KI-Infrastruktur für sensible Daten",
    text: "Banken, Versicherungen, Gesundheitswesen und öffentliche Stellen brauchen KI-Infrastruktur, die nachweislich auf EU-Servern läuft. Wir bauen Cluster mit Audit-Logging, RBAC, Network Policies und lokal betriebenen Modellen, sodass keine Daten die kontrollierte Umgebung verlassen.",
    bullets: ["EU-Hosting, kein US-Transfer", "Audit-Logging & Compliance-Doku", "Lokale LLMs über Ollama, vLLM", "EU AI Act von Anfang an mitgedacht"],
  },
  {
    value: "startup",
    label: "KI-Startups",
    icon: Rocket,
    head: "Vom Proof of Concept zur skalierbaren Produktion",
    text: "KI-Startups und Scale-ups müssen schnell wachsen, ohne die GPU-Rechnung explodieren zu lassen. Kubernetes wächst mit dem Unternehmen mit: Scale-to-Zero über KEDA hält die Kosten in ruhigen Phasen niedrig, der Cluster Autoscaler fängt jeden Traffic-Spike automatisch ab.",
    bullets: ["Scale-to-Zero spart GPU-Kosten", "Schnelles Hochskalieren bei Bedarf", "Eine Plattform, die mitwächst", "Kosteneffizientes GPU-Sharing"],
  },
  {
    value: "enterprise",
    label: "Enterprise IT",
    icon: Building2,
    head: "Standardisierte KI-Plattform für viele Teams",
    text: "Enterprise-IT-Abteilungen schaffen mit Kubernetes eine zentrale, standardisierte KI-Plattform: gemeinsame GPU-Verwaltung, Self-Service-Namespaces für Fachteams und unternehmensweites Monitoring. Statt vieler Schatten-Setups entsteht eine governte, sichere Plattform.",
    bullets: ["Zentrale GPU-Verwaltung", "Self-Service-Namespaces", "Unternehmensweites Monitoring", "Governance & Kostentransparenz"],
  },
  {
    value: "ecommerce",
    label: "E-Commerce",
    icon: ShoppingBag,
    head: "KI-Services, die jeden Saison-Peak abfangen",
    text: "Im E-Commerce schwankt die Last extrem: Empfehlungssysteme, Such-Reranking und Chatbots müssen den Black-Friday-Peak genauso bedienen wie die ruhige Nacht. Kubernetes skaliert diese Dienste automatisch und hält die Latenz stabil, ohne dass Sie Hardware für den Worst Case dauerhaft vorhalten.",
    bullets: ["Automatische Lastspitzen-Skalierung", "Stabile Latenz unter Last", "Empfehlung, Suche, Chatbot", "Keine Überprovisionierung"],
  },
];

// Ablauf
const timeline = [
  { step: "01", icon: Search, title: "Kostenlose Erstanalyse", time: "30 Minuten", desc: "Wir sichten Ihre bestehende Infrastruktur, Workloads und Compliance-Anforderungen und identifizieren den Engpass, den Kubernetes beseitigen soll. Ohne Verpflichtung und ohne Vorbereitung Ihrerseits." },
  { step: "02", icon: ClipboardList, title: "Assessment & Architektur", time: "Woche 1", desc: "Wir entwerfen die Zielarchitektur, wählen Distribution, GPU-Setup, Storage und Netzwerk, kalkulieren Kosten und ROI und legen das Sicherheitskonzept fest. Sie erhalten einen klaren Plan, bevor gebaut wird." },
  { step: "03", icon: Cog, title: "Aufbau, Migration & Pilot", time: "Woche 2 bis 4", desc: "Wir bauen den Cluster auf, containerisieren bei Bedarf Ihre Anwendungen und migrieren Workload für Workload, meist parallel zum Altsystem. Sie testen einen produktiven Cluster mit echten Daten." },
  { step: "04", icon: Rocket, title: "Go-Live & Betrieb", time: "ab Woche 4", desc: "Go-Live auf EU-Infrastruktur, Monitoring mit Prometheus und Grafana, Schulung Ihres Teams und laufende Optimierung. Auf Wunsch mit Betriebsvertrag, auf Wunsch in Ihre Hand übergeben." },
];

const reasons = [
  { icon: Layers, badge: "Erfahrung", title: "Kubernetes aus echten KI-Projekten", desc: "Wir haben Cluster für LLM-Serving, MLOps-Pipelines und Multi-Tenant-Plattformen aufgebaut und produktiv betrieben, von Startups bis Enterprise. Wir kennen die Best Practices und die Fallstricke." },
  { icon: Cpu, badge: "GPU-Fokus", title: "KI-spezifische Infrastruktur", desc: "Wir sind auf GPU-Workloads spezialisiert: NVIDIA GPU Operator, MIG, vLLM-Serving und optimiertes Scheduling für maximale Auslastung bei minimalen Kosten." },
  { icon: Lock, badge: "EU-Hosting", title: "DSGVO & EU AI Act by Design", desc: "Alle Cluster laufen auf EU-Infrastruktur. Wir beraten zu Datenschutz, EU AI Act und souveräner Cloud-Strategie für Österreich, Deutschland und die Schweiz." },
];

const related = [
  { href: "/leistungen/n8n-automatisierung", icon: Workflow, title: "n8n Automatisierung", desc: "Workflows und Integrationen, die auf Ihrem Cluster zuverlässig und skalierbar laufen." },
  { href: "/mlops", icon: RefreshCw, title: "MLOps", desc: "ML-Pipelines, Model-Registry und automatisierte Deployments. Kubernetes als Infrastruktur, MLOps als Prozessschicht." },
  { href: "/private-ai", icon: Lock, title: "Private AI", desc: "Lokale LLMs ohne Datenweitergabe, betrieben in Ihrem Kubernetes-Cluster auf EU-Servern." },
  { href: "/leistungen/langchain", icon: Brain, title: "LangChain", desc: "RAG-Systeme und KI-Agenten, produktionsreif containerisiert und auf Kubernetes deployt." },
  { href: "/ki-wissensdatenbank", icon: Database, title: "KI Wissensdatenbank", desc: "RAG-Wissensbasis mit Vektordatenbank, hochverfügbar im Cluster betrieben." },
  { href: "/eu-ai-act", icon: ShieldCheck, title: "EU AI Act", desc: "Compliance-Beratung für KI-Systeme, technisch sauber auf souveräner Infrastruktur umgesetzt." },
];

export default function Page() {
  return (
    <>
      <Script id="faq-kubernetes" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-kubernetes" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-xl bg-white border-2 border-border flex items-center justify-center p-2.5 shadow-sm shrink-0">
                      <img src="/img/logos/kubernetes.svg" alt="Kubernetes Logo" className="w-full h-full" />
                    </div>
                    <div>
                      <div className="font-bold leading-tight">Kubernetes</div>
                      <div className="text-xs text-muted-foreground">CNCF Graduated, Open Source</div>
                    </div>
                  </div>
                  <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                    Container-Orchestrierung für KI-Infrastruktur
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-primary">Kubernetes</span> für produktive KI-Workloads
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Kubernetes (K8s) ist der De-facto-Standard für produktive KI-Infrastruktur. Wir bauen und betreiben Ihren Cluster für LLM-Serving, MLOps-Pipelines und GPU-Workloads: hochverfügbar, auto-skalierend und DSGVO-konform auf EU-Servern.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Erstgespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#vergleich">Kubernetes vs. Docker</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-primary" /> EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Bespoke Hero-Visual: Cluster mit Pods-Grid */}
                <Card className="border-2 shadow-xl shadow-primary/5">
                  <CardHeader className="border-b border-border py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white border border-border flex items-center justify-center p-1.5 shrink-0">
                        <img src="/img/logos/kubernetes.svg" alt="Kubernetes" className="w-full h-full" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">k8s-prod-cluster</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> Healthy, region eu-central
                        </div>
                      </div>
                      <Badge variant="outline" className="ml-auto rounded-full text-[10px] bg-primary/10 text-primary border-primary/20">v1.30</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5">
                    {/* Control Plane */}
                    <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-3 mb-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-semibold flex items-center gap-1.5">
                          <Network className="w-3.5 h-3.5 text-primary" /> Control Plane
                        </span>
                        <span className="text-[10px] text-muted-foreground">3 Master, HA</span>
                      </div>
                      <div className="grid grid-cols-3 gap-1.5">
                        {controlPlane.map((c) => (
                          <span key={c} className="text-[10px] font-medium text-center rounded bg-background border border-border px-1 py-1.5 text-muted-foreground truncate">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Worker Nodes mit Pods-Grid */}
                    <div className="grid grid-cols-3 gap-2">
                      {clusterNodes.map((n) => (
                        <div key={n.name} className="rounded-lg border-2 border-border bg-background p-2">
                          <div className="flex items-center justify-between mb-2 gap-1">
                            <span className="text-[10px] font-semibold flex items-center gap-1 truncate">
                              <Boxes className="w-3 h-3 text-primary shrink-0" />
                              <span className="truncate">{n.name}</span>
                            </span>
                          </div>
                          <Badge variant="outline" className="rounded-full text-[8px] px-1.5 py-0 mb-2 bg-primary/10 text-primary border-primary/20">{n.role}</Badge>
                          <div className="grid grid-cols-3 gap-1" aria-hidden>
                            {n.pods.map((p, i) => (
                              <span key={i} className={`aspect-square rounded ${podClass(p)}`} />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Deployed Workloads mit echten Logos */}
                    <div className="mt-3 pt-3 border-t border-border">
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Deployed Workloads</div>
                      <div className="flex flex-wrap gap-1.5">
                        {workloads.map((w) => (
                          <span key={w.slug} className="flex items-center gap-1.5 rounded-full bg-background border border-border pl-1 pr-2 py-0.5">
                            <span className="w-5 h-5 rounded-full bg-white border border-border flex items-center justify-center p-0.5 shrink-0">
                              <img src={`/img/logos/${w.slug}.svg`} alt={w.label} className="w-full h-full" />
                            </span>
                            <span className="text-[10px] font-medium text-muted-foreground">{w.label}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-[11px] text-center text-muted-foreground pt-3">
                      18 Pods, 3 Nodes, Auto-Scaling aktiv, DSGVO EU
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

          {/* DEFINITION */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Kurz erklärt</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was ist Kubernetes? Die Plattform für produktive KI</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      <strong className="text-foreground">Kubernetes</strong> (kurz K8s) ist ein Open-Source-System zur Container-Orchestrierung, ursprünglich von Google entwickelt und heute der weltweite Standard für containerisierte Anwendungen. Im Kern beantwortet es eine Frage: Wie betreibt man hunderte Container auf dutzenden Servern, zuverlässig und automatisch, ohne dass jemand rund um die Uhr manuell eingreift.
                    </p>
                    <p>
                      Für KI-Workloads ist das besonders relevant. LLM-Inferenz braucht dedizierte GPU-Ressourcen, Trainings-Jobs verbrauchen massive Rechenleistung in kurzen Zeitfenstern, und mehrere Modelle wie Llama oder Mistral müssen gleichzeitig laufen, versioniert und aktualisiert werden. Kubernetes löst das mit automatischem <strong className="text-foreground">GPU-Scheduling</strong>, KEDA für Scale-to-Zero und GitOps-basierten Deployments über ArgoCD oder Flux.
                    </p>
                    <p>
                      Im <strong className="text-foreground">DACH-Raum</strong> verbinden wir Kubernetes mit DSGVO-konformer EU-Infrastruktur. Statt US-Hyperscalern betreiben wir Ihre Cluster bei Hetzner, OVH oder STACKIT, Ihre Daten verlassen die EU nie, und die Anforderungen des EU AI Acts sind von Anfang an berücksichtigt.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {["Auto-Scaling", "Self-Healing", "Rolling Updates", "GPU-Scheduling", "GitOps", "DSGVO-konform"].map((tag) => (
                      <Badge key={tag} variant="secondary" className="rounded-full">{tag}</Badge>
                    ))}
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Kubernetes auf einen Blick</CardTitle>
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

          {/* ARCHITEKTUR */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Anatomie eines Clusters</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Control Plane und Worker Nodes</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Ein Kubernetes Cluster teilt sich klar in zwei Welten: den steuernden Control Plane und die Worker Nodes, auf denen Ihre KI tatsächlich rechnet.
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Network className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <Badge variant="outline" className="rounded-full text-[10px] mb-1 bg-primary/10 text-primary border-primary/20">Das Gehirn</Badge>
                        <CardTitle className="text-lg leading-tight">Control Plane</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {cpComponents.map((c) => (
                      <div key={c.label} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <div>
                          <span className="font-semibold text-sm">{c.label}</span>
                          <span className="text-sm text-muted-foreground">: {c.desc}</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Boxes className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <Badge variant="outline" className="rounded-full text-[10px] mb-1 bg-primary/10 text-primary border-primary/20">Die Muskeln</Badge>
                        <CardTitle className="text-lg leading-tight">Worker Node</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {workerComponents.map((c) => (
                      <div key={c.label} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <div>
                          <span className="font-semibold text-sm">{c.label}</span>
                          <span className="text-sm text-muted-foreground">: {c.desc}</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 mt-6">
                <Card className="border-2 hover-lift">
                  <CardContent className="pt-6">
                    <Zap className="w-7 h-7 text-primary mb-3" />
                    <div className="font-bold text-sm mb-1">Pods & Deployments</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">Die kleinste deploybare Einheit, mit automatischem Restart bei Ausfällen und definierter Replica-Zahl.</p>
                  </CardContent>
                </Card>
                <Card className="border-2 hover-lift">
                  <CardContent className="pt-6">
                    <Layers className="w-7 h-7 text-primary mb-3" />
                    <div className="font-bold text-sm mb-1">Namespaces</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">Isolierte Bereiche für Teams, Projekte oder Umgebungen, sauber getrennt mit eigenen Quotas.</p>
                  </CardContent>
                </Card>
                <Card className="border-2 hover-lift">
                  <CardContent className="pt-6">
                    <Settings className="w-7 h-7 text-primary mb-3" />
                    <div className="font-bold text-sm mb-1">Services & Ingress</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">Stabile Endpunkte und Load Balancing, die Anfragen zuverlässig an die richtigen Pods verteilen.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CAPABILITIES / LEISTUNGEN (Bento) */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unsere Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Was wir rund um Ihren Cluster übernehmen</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Von der ersten Architekturentscheidung bis zum laufenden Betrieb, alles aus einer Hand und auf KI-Workloads zugeschnitten.</p>
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

          {/* GPU & KI WORKLOADS */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                  <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">GPU & KI-Infrastruktur</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold">Kubernetes für GPU-Workloads und LLM-Serving</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    GPU-Zeit ist teuer. Ein schlecht konfigurierter Cluster bedeutet, dass Ihre A100 acht Stunden am Tag auf Anfragen wartet, ohne zu rechnen. Wir konfigurieren Ihre Infrastruktur so, dass GPUs produktiv ausgelastet und trotzdem kosteneffizient betrieben werden.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Zentral ist dabei <strong className="text-foreground">KEDA</strong> (Kubernetes Event-Driven Autoscaling): Es skaliert Ihre LLM-Dienste auf null, wenn keine Anfragen kommen, und fährt sie innerhalb von Sekunden wieder hoch, sobald Bedarf besteht. So zahlen Sie GPU-Ressourcen nur, wenn sie tatsächlich genutzt werden.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Für den Inference-Layer setzen wir auf <strong className="text-foreground">vLLM</strong> oder <strong className="text-foreground">KServe</strong>, die über den cluster-internen Load Balancer eingehende Anfragen auf mehrere Modell-Instanzen verteilen. Das Ergebnis: stabile Latenz auch bei Lastspitzen, ohne manuelle Eingriffe.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="rounded-xl border-2 border-border bg-card p-4 text-center">
                      <div className="text-2xl font-bold text-primary mb-1">vLLM</div>
                      <p className="text-xs text-muted-foreground">Hochperformantes LLM-Serving im Cluster</p>
                    </div>
                    <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-4 text-center">
                      <div className="text-2xl font-bold text-primary mb-1">KEDA</div>
                      <p className="text-xs text-muted-foreground">Event-driven Scale-to-Zero</p>
                    </div>
                  </div>
                </div>

                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">GPU-Scheduling im Detail</CardTitle>
                    <CardDescription>So holen wir das Maximum aus teurer GPU-Hardware.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {gpuDetails.map((g) => (
                      <div key={g.label} className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-sm">{g.label}</span>
                          <p className="text-sm text-muted-foreground leading-relaxed">{g.desc}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* VERGLEICH */}
          <section id="vergleich" className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Vergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Kubernetes vs. Docker: Was ist der Unterschied?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Beide Technologien arbeiten zusammen, lösen aber sehr unterschiedliche Probleme. Hier der direkte Vergleich.
                </p>
              </div>
              <Card className="border-2 overflow-hidden">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-primary/5">
                        <TableHead className="font-bold text-foreground min-w-[150px]">Kriterium</TableHead>
                        <TableHead className="font-bold text-foreground min-w-[210px]">Docker (Compose)</TableHead>
                        <TableHead className="font-bold text-primary min-w-[230px]">
                          Kubernetes (K8s) <Badge className="ml-2 text-[10px]">KI-Scale</Badge>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {comparison.map((row, i) => (
                        <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                          <TableCell className="font-medium text-foreground">{row[0]}</TableCell>
                          <TableCell className="text-sm text-muted-foreground">
                            <span className="flex items-start gap-2"><X className="w-4 h-4 text-muted-foreground/50 mt-0.5 shrink-0" />{row[1]}</span>
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground">
                            <span className="flex items-start gap-2"><Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />{row[2]}</span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Card>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Unsicher, ob Docker Compose oder Kubernetes das Richtige für Sie ist?{" "}
                <a href="#contact" className="text-primary underline underline-offset-2">Sprechen Sie uns an, kostenlose Ersteinschätzung.</a>
              </p>
            </div>
          </section>

          {/* BETRIEBSMODELLE */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Betriebsmodelle</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Managed, Self-Hosted oder Hybrid?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Wir empfehlen das Modell, das zu Ihren Anforderungen passt, statt einer Standardlösung. Alle drei laufen DSGVO-konform auf EU-Infrastruktur.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {betriebsmodelle.map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <Card key={i} className={`hover-lift border-2 h-full ${b.accent ? "bg-primary/5 border-primary/20" : ""}`}>
                      <CardHeader className="pb-3">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <Badge variant="outline" className="rounded-full w-fit text-[10px] bg-primary/10 text-primary border-primary/20 mb-1">{b.tagline}</Badge>
                        <CardTitle className="text-lg">{b.title}</CardTitle>
                        <CardDescription className="leading-relaxed">{b.desc}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {b.points.map((p) => (
                            <div key={p} className="flex items-center gap-2 text-sm">
                              <Check className="w-4 h-4 text-primary shrink-0" />
                              <span className="text-muted-foreground">{p}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* TECH STACK */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Tech Stack</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Unser Kubernetes & KI Tech Stack</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Bewährte Open-Source-Tools, die wir täglich in Produktionsumgebungen einsetzen.</p>
              </div>

              {/* Logo-Grid */}
              <Card className="border-2 mb-8">
                <CardContent className="py-8">
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                    {stackLogos.map((l) => (
                      <div key={l.slug} className="flex flex-col items-center gap-2">
                        <div className="w-16 h-16 rounded-xl bg-white border-2 border-border flex items-center justify-center p-3 shadow-sm">
                          <img src={`/img/logos/${l.slug}.svg`} alt={`${l.label} Logo`} className="max-w-full max-h-full" />
                        </div>
                        <span className="text-xs text-muted-foreground font-medium text-center">{l.label}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Kategorisiert */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {stackCategories.map(({ icon: Icon, category, tools }, i) => (
                  <Card key={i} className="hover-lift border-2">
                    <CardContent className="pt-5 pb-5">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-bold text-foreground text-sm mb-1">{category}</div>
                          <div className="text-muted-foreground text-xs leading-relaxed">{tools}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* USE CASES */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Anwendungsfälle</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Wer braucht Kubernetes für KI?</h2>
                <p className="text-lg text-muted-foreground">Sobald KI-Workloads produktiv und skalierbar laufen müssen, lohnt sich Kubernetes. Wählen Sie Ihr Profil.</p>
              </div>
              <Tabs defaultValue="saas" className="w-full">
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

          {/* ABLAUF */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Der Ablauf</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Von der Erstanalyse zum produktiven Cluster</h2>
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

          {/* WARUM WIR */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Ihr Kubernetes-Partner</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Warum KI Kanzlei im DACH-Raum?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Tiefe Kubernetes-Expertise, KI-Fokus und kompromisslose EU-Compliance, aus einer Hand.</p>
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
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zu Kubernetes</h2>
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
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Mehr Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zu Kubernetes</h2>
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
