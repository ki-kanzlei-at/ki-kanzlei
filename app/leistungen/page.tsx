import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { NavigationHome } from "@/components/NavigationHome";
import { FooterModern } from "@/components/FooterModern";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Phone, MessageSquare, Brain, Network, Bot, ShieldCheck, Cpu, Database, Target, Compass,
  GraduationCap, Scale, Workflow, Server, Sparkles, Eye, Box, Zap, Boxes, MapPin,
  Layers, Cloud, BarChart3, Video, Wand2, Waypoints, Clapperboard, Film, Image as ImageIcon, LineChart,
  Filter, Share2, GitBranch, Code2, Megaphone, Globe, Smartphone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "KI-Leistungen & Lösungen für Unternehmen",
  description:
    "Alle KI-Leistungen der KI Kanzlei im Überblick: Voicebot, KI Wissensdatenbank (RAG), n8n Automatisierung, Agentic AI, Private AI, MLOps, KI Consulting, KI Schulung und EU AI Act. DSGVO-konform, EU-gehostet, im DACH-Raum.",
  keywords:
    "KI Leistungen, KI Lösungen, KI Automatisierung, Voicebot, KI Telefonassistent, KI Wissensdatenbank, RAG, n8n Automatisierung, Agentic AI, Private AI, MLOps, KI Consulting, KI Schulung, EU AI Act, ChatGPT Alternative, KI Kanzlei",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen" },
};

const groups = [
  {
    eyebrow: "KI-Kommunikation",
    title: "Kundenkontakt automatisieren",
    items: [
      { icon: Phone, title: "Voicebot & KI-Telefonassistent", desc: "Nimmt Anrufe 24/7 entgegen, bucht Termine und qualifiziert Anfragen, menschlich klingend auf Deutsch.", href: "/leistungen/voicebot" },
      { icon: MessageSquare, title: "KI Chatbot", desc: "Beantwortet Kundenfragen 24/7 auf Website und WhatsApp, mit Quellen aus Ihrem Wissen, mehrsprachig.", href: "/leistungen/ki-chatbot" },
      { icon: MessageSquare, title: "ChatGPT Alternative", desc: "DSGVO-konforme, EU-gehostete KI statt ChatGPT, ohne dass Ihre Daten das Haus verlassen.", href: "/leistungen/chatgpt-alternative" },
    ],
  },
  {
    eyebrow: "Wissen & Agenten",
    title: "Wissen nutzbar machen, Agenten arbeiten lassen",
    items: [
      { icon: Brain, title: "KI Wissensdatenbank (RAG)", desc: "Ihr Firmenwissen wird zur intelligenten Quelle: präzise Antworten mit Quellenangabe, ohne Halluzinationen.", href: "/ki-wissensdatenbank" },
      { icon: Bot, title: "Agentic AI", desc: "Autonome KI-Agents, die nicht nur antworten, sondern Aufgaben end-to-end erledigen.", href: "/agentic-ai" },
      { icon: Waypoints, title: "Autonome KI-Agenten", desc: "Die neue Generation (OpenClaw, Hermes, Manus, OpenHands), self-hosted und DSGVO-konform.", href: "/leistungen/autonome-ki-agenten" },
      { icon: Workflow, title: "LangChain", desc: "Framework für komplexe LLM-Anwendungen und mehrstufige Agenten-Logik.", href: "/langchain" },
      { icon: Server, title: "MCP Server", desc: "Model Context Protocol: KI sicher an Ihre Tools, Daten und Systeme anbinden.", href: "/mcp-server" },
    ],
  },
  {
    eyebrow: "Automatisierung",
    title: "Prozesse end-to-end automatisieren",
    items: [
      { icon: Network, title: "n8n Automatisierung", desc: "DSGVO-konforme Workflow-Automatisierung, die Ihre Tools verbindet und Routinen übernimmt.", href: "/leistungen/n8n-automatisierung" },
      { icon: Zap, title: "Zapier Automatisierung", desc: "Über 6000 Apps verbinden, KI integrieren, plus ehrliche DSGVO-Alternative.", href: "/leistungen/zapier" },
      { icon: Workflow, title: "Make.com (Integromat)", desc: "Visuelle Szenarien für komplexe, verzweigte Abläufe zu planbaren Kosten.", href: "/leistungen/make" },
      { icon: Bot, title: "RPA & Robotic AI", desc: "Automatisierung auch ohne Schnittstelle: DATEV, BMD und Altsysteme per Software-Roboter.", href: "/leistungen/rpa" },
      { icon: Sparkles, title: "Prompt Engineering", desc: "Bessere, verlässlichere Ergebnisse aus LLMs durch professionell gestaltete Prompts.", href: "/prompt-engineering" },
      { icon: Eye, title: "Computer Vision", desc: "Bilder und Dokumente automatisch erkennen, klassifizieren und auswerten.", href: "/computer-vision" },
    ],
  },
  {
    eyebrow: "Infrastruktur & Betrieb",
    title: "Sichere KI im Eigenbetrieb",
    items: [
      { icon: ShieldCheck, title: "Private AI", desc: "Lokale KI ohne Cloud, 100 Prozent DSGVO-konform und mit voller Datensouveränität.", href: "/private-ai" },
      { icon: Box, title: "Ollama", desc: "Lokale LLMs einfach, schnell und DSGVO-konform betreiben.", href: "/ollama" },
      { icon: Zap, title: "vLLM", desc: "Schnelles, effizientes LLM-Serving für hohe Lasten und niedrige Latenz.", href: "/vllm" },
      { icon: Cpu, title: "MLOps & LLMOps", desc: "KI zuverlässig in Produktion bringen und betreiben, von der Pipeline bis zum Monitoring.", href: "/mlops" },
      { icon: Box, title: "Docker", desc: "Container-Technologie für portable, reproduzierbare KI-Deployments.", href: "/docker" },
      { icon: Boxes, title: "Kubernetes", desc: "Skalierbarer Betrieb und Orchestrierung Ihrer KI-Workloads, herstellerneutral und ohne Lock-in.", href: "/leistungen/kubernetes" },
      { icon: Database, title: "Data Engineering", desc: "Saubere Daten-Pipelines als Fundament für KI, von ETL bis Feature Store.", href: "/data-engineering" },
    ],
  },
  {
    eyebrow: "Daten & Analytics",
    title: "Das Datenfundament für KI",
    items: [
      { icon: Layers, title: "Databricks", desc: "Lakehouse für Data Engineering, Analytics und KI auf einer Plattform, EU-Region.", href: "/leistungen/databricks" },
      { icon: Database, title: "Snowflake", desc: "Die Data Cloud als verlässliches, wartungsarmes Data Warehouse für Analytics und KI.", href: "/leistungen/snowflake" },
      { icon: BarChart3, title: "Power BI & KI-Analysen", desc: "Dashboards, automatisierte Reports und KI-gestützte Auswertungen, DSGVO-konform.", href: "/leistungen/power-bi" },
      { icon: LineChart, title: "Tableau", desc: "Interaktive BI-Dashboards mit KI-Analysen, herstellerneutral und DSGVO-konform.", href: "/leistungen/tableau" },
      { icon: Workflow, title: "Apache Airflow", desc: "Datenpipelines, ETL und Orchestrierung für Data- und ML-Workflows, self-hosted.", href: "/leistungen/apache-airflow" },
      { icon: Share2, title: "Apache Kafka", desc: "Echtzeit-Datenstreaming und Event-Driven-Architektur als Nervensystem für KI.", href: "/leistungen/apache-kafka" },
      { icon: Filter, title: "ETL & Datenintegration", desc: "Quellen zu einer verlässlichen Datenbasis konsolidieren, self-hosted und DSGVO-konform.", href: "/leistungen/etl" },
      { icon: Database, title: "Data Warehouse", desc: "Modernes Cloud Data Warehouse als Fundament für Analytics und KI, herstellerneutral.", href: "/leistungen/data-warehouse" },
      { icon: Database, title: "Data Engineering", desc: "Saubere Daten-Pipelines als Fundament für KI, von ETL bis Feature Store.", href: "/data-engineering" },
    ],
  },
  {
    eyebrow: "Cloud-KI & Modelle",
    title: "Modelle, Plattformen und Anpassung",
    items: [
      { icon: Cloud, title: "Azure OpenAI & Azure AI", desc: "Enterprise-LLMs in der Microsoft-Cloud, EU-Region und DSGVO-konform.", href: "/leistungen/azure-ai" },
      { icon: Cloud, title: "Google Vertex AI", desc: "Gemini und Model Garden produktiv betreiben, in EU-Regionen mit MLOps.", href: "/leistungen/vertex-ai" },
      { icon: Boxes, title: "Hugging Face", desc: "Open-Source-Modelle DSGVO-konform auf eigener EU-Infrastruktur betreiben.", href: "/leistungen/hugging-face" },
      { icon: Wand2, title: "LLM Fine-Tuning", desc: "Eigene Sprachmodelle auf Ihre Fachsprache und Aufgaben trainieren.", href: "/leistungen/fine-tuning" },
      { icon: Database, title: "Vektordatenbanken", desc: "Qdrant, Pinecone und Co. als Fundament für RAG und semantische Suche.", href: "/leistungen/vector-database" },
      { icon: Cloud, title: "AWS Bedrock", desc: "Managed LLMs auf AWS in EU-Regionen, DSGVO-konform und enterprise-tauglich.", href: "/leistungen/aws-bedrock" },
      { icon: GitBranch, title: "MLflow", desc: "Experiment-Tracking, Model Registry und Deployment für sauberes MLOps.", href: "/leistungen/mlflow" },
      { icon: Boxes, title: "Feature Store", desc: "Konsistente ML-Features für Training und Serving, gegen Training-Serving-Skew.", href: "/leistungen/feature-store" },
    ],
  },
  {
    eyebrow: "KI-Content & Media",
    title: "Bewegtbild und Visuals mit KI",
    items: [
      { icon: Video, title: "KI Video & Media Creation", desc: "Marketing-Videos und Bildwelten mit KI, markenkonform und in Stunden statt Wochen.", href: "/leistungen/ki-video" },
      { icon: Clapperboard, title: "Higgsfield AI", desc: "Cinematic KI-Videos mit echter Regie für Social Media und Werbung.", href: "/leistungen/higgsfield-ai" },
      { icon: Sparkles, title: "Sora", desc: "OpenAIs KI-Videomodell, produktiv und markenkonform fürs Marketing eingesetzt.", href: "/leistungen/sora" },
      { icon: Film, title: "Google Veo", desc: "Kohärente KI-Videos, auf Wunsch direkt mit Ton, je Szene das beste Modell.", href: "/leistungen/veo" },
      { icon: ImageIcon, title: "KI-Bildgenerator", desc: "Markenkonforme Produktbilder, Key-Visuals und Ad-Creatives in Minuten.", href: "/leistungen/ki-bildgenerator" },
      { icon: Film, title: "Runway", desc: "KI-Videoproduktion mit Runway, je Szene das beste Modell, fürs Marketing.", href: "/leistungen/runway" },
    ],
  },
  {
    eyebrow: "Software, Marketing & Wachstum",
    title: "Eigene Software, Reichweite und KI-Sichtbarkeit",
    items: [
      { icon: Code2, title: "KI-Softwareentwicklung", desc: "Custom Software, KI-Apps und eigene SaaS-Produkte, schnell gebaut mit KI-gestütztem Development.", href: "/leistungen/ki-softwareentwicklung" },
      { icon: Smartphone, title: "App mit KI", desc: "Mobile und Web-Apps mit eingebauten KI-Features wie Chat, Bilderkennung und Sprache, für iOS, Android und Web.", href: "/leistungen/app-mit-ki" },
      { icon: Globe, title: "Website mit KI", desc: "Schnelle, individuelle Websites mit KI, von Anfang an SEO- und GEO-optimiert und DSGVO-konform.", href: "/leistungen/ki-website" },
      { icon: Megaphone, title: "Meta Ads mit KI", desc: "Facebook- und Instagram-Werbung mit KI-Creatives, schärferem Targeting und mehr Performance.", href: "/leistungen/meta-ads-ki" },
      { icon: Share2, title: "Social Media mit KI", desc: "Content, Bilder und Reels für Social Media mit KI, markenkonform und planbar.", href: "/leistungen/social-media-ki" },
      { icon: Sparkles, title: "Generative Engine Optimization (GEO)", desc: "Sichtbar werden in ChatGPT, Perplexity und Google AI Overviews, die neue Ebene neben SEO.", href: "/leistungen/generative-engine-optimization" },
      { icon: BarChart3, title: "Monitoring & Grafana", desc: "Observability und Alerting für KI und Infrastruktur mit Grafana und Prometheus, self-hosted in der EU.", href: "/leistungen/monitoring-grafana" },
    ],
  },
  {
    eyebrow: "Beratung, Schulung & Compliance",
    title: "Strategie, Know-how und Rechtssicherheit",
    items: [
      { icon: Target, title: "KI Assessment Center", desc: "490 Euro für die komplette Analyse von Reifegrad, Use Cases und ROI, voll auf die Umsetzung anrechenbar.", href: "/ki-assessment" },
      { icon: Compass, title: "KI Consulting", desc: "Strategie, Implementierung und ROI: herstellerneutrale KI Beratung für den DACH-Raum.", href: "/ki-consulting" },
      { icon: GraduationCap, title: "KI Schulung", desc: "Praxisnahe Workshops, damit Ihr Team KI täglich produktiv nutzt.", href: "/ki-schulung" },
      { icon: GraduationCap, title: "Claude Schulung", desc: "Anthropic Claude im Team produktiv und sicher nutzen: Prompting, Projects, Tools und DSGVO.", href: "/leistungen/claude-schulung" },
      { icon: Scale, title: "EU AI Act", desc: "Compliance-Beratung und Checkliste, damit Ihr KI-Einsatz rechtssicher bleibt.", href: "/eu-ai-act" },
    ],
  },
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "KI-Leistungen der KI Kanzlei",
  url: "https://ki-kanzlei.at/leistungen",
  about: "KI-Lösungen für Unternehmen: Voicebot, RAG, n8n, Agentic AI, Private AI, MLOps, Consulting, Schulung, EU AI Act.",
};

// Tool-Leistungen mit echtem Markenlogo (Rest nutzt das lucide-Icon).
const titleLogos: Record<string, string> = {
  "LangChain": "langchain",
  "n8n Automatisierung": "n8n",
  "Zapier Automatisierung": "zapier",
  "Make.com (Integromat)": "make",
  "Ollama": "ollama",
  "Docker": "docker",
  "Kubernetes": "kubernetes",
  "Databricks": "databricks",
  "Snowflake": "snowflake",
  "Power BI & KI-Analysen": "powerbi",
  "Tableau": "tableau",
  "Apache Airflow": "apacheairflow",
  "Apache Kafka": "apachekafka",
  "Azure OpenAI & Azure AI": "azure",
  "Google Vertex AI": "googlecloud",
  "Hugging Face": "huggingface",
  "AWS Bedrock": "aws",
  "MLflow": "mlflow",
  "Sora": "openai",
  "Google Veo": "googlegemini",
  "Runway": "runway",
};

export default function Page() {
  const totalCount = groups.reduce((n, g) => n + g.items.length, 0);
  return (
    <>
      <Script id="leistungen-collection" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO 2-spaltig */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">Leistungen</Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    KI-Lösungen, die Ihr Unternehmen <span className="text-primary">voranbringen</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Von Voicebots über Wissensdatenbanken bis n8n-Automatisierung: Wir bauen produktionsreife KI-Lösungen für Unternehmen im DACH-Raum. DSGVO-konform, EU-gehostet und messbar.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses KI Audit</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/ki-assessment">KI Assessment ansehen</Link>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-primary" /> EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Visual: Leistungsbereiche-Überblick */}
                <Card className="border-2 shadow-xl shadow-primary/5">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">Leistungsbereiche</CardTitle>
                      <Badge className="rounded-full">{totalCount} Leistungen</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {groups.map((g) => (
                      <a
                        key={g.eyebrow}
                        href={`#${g.eyebrow.toLowerCase().replace(/[^a-zäöü]+/g, "-")}`}
                        className="flex items-center justify-between py-3 border-b border-border last:border-0 group"
                      >
                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-base">{g.eyebrow}</span>
                        <span className="text-xs text-muted-foreground tabular-nums">{g.items.length}</span>
                      </a>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* GROUPS */}
          {groups.map((group, gi) => (
            <section
              key={gi}
              id={group.eyebrow.toLowerCase().replace(/[^a-zäöü]+/g, "-")}
              className={`section-spacing scroll-mt-24 ${gi % 2 === 1 ? "bg-white/50" : ""}`}
            >
              <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-12">
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">{group.eyebrow}</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold">{group.title}</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {group.items.map((item, i) => {
                    const Icon = item.icon;
                    const logo = titleLogos[item.title];
                    return (
                      <Link key={i} href={item.href} className="group block">
                        <Card className="h-full border-2 hover-lift group-hover:border-primary/40 transition-base">
                          <CardHeader>
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 transition-base ${logo ? "bg-white border border-border" : "bg-primary/10 group-hover:bg-primary/20"}`}>
                              {logo ? (
                                <img src={`/img/logos/${logo}.svg`} alt={item.title} className="w-7 h-7 object-contain" />
                              ) : (
                                <Icon className="w-6 h-6 text-primary" />
                              )}
                            </div>
                            <CardTitle className="text-lg">{item.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
                            <span className="text-sm font-semibold text-primary">Mehr erfahren</span>
                          </CardContent>
                        </Card>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </section>
          ))}

          <ContactForm />
        </main>
        <FooterModern />
      </div>
    </>
  );
}
