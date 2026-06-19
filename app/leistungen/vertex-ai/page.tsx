import type { Metadata } from "next";
import { serviceLogos } from "@/lib/serviceLogos";
import Script from "next/script";
import { NavigationHome } from "@/components/NavigationHome";
import { FooterModern } from "@/components/FooterModern";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Cloud, Server, Cpu, Database, Brain, Layers, Boxes, Workflow, GitBranch, Bot, Shield, ShieldCheck,
  Lock, Check, X, Search, Rocket, Phone, Clock, MapPin, Zap, RefreshCw, Network, FileText, Filter,
  Eye, Users, Building2, Lightbulb, Target, Settings2, Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Google Vertex AI & Gemini für Unternehmen",
  description:
    "Google Vertex AI für Unternehmen: Wir bauen Lösungen mit Gemini, Model Garden und Vertex Pipelines in EU-Regionen, DSGVO-konform und ohne Datennutzung fürs Training. Vom Prototyp zur produktiven ML-Plattform im DACH-Raum.",
  keywords:
    "Vertex AI, Google Vertex AI, Gemini API, Vertex AI Beratung, Google Cloud KI, ML Plattform, managed KI, Vertex AI Pipelines, Model Garden, Vertex AI DSGVO, MLOps Google Cloud",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/vertex-ai" },
};

const faqs = [
  { q: "Was ist Google Vertex AI?", a: "Vertex AI ist die zentrale Plattform für Machine Learning und generative KI auf der Google Cloud. Sie bündelt den Zugang zu Googles Gemini-Modellen, einen Model Garden mit vielen Modellen, Werkzeuge für Training, Tuning und Deployment sowie Pipelines für den produktiven Betrieb. Statt einzelne Bausteine selbst zusammenzusetzen, erhalten Sie eine durchgängige, verwaltete Umgebung von der Idee bis zum produktiven KI-Service." },
  { q: "Lässt sich Vertex AI DSGVO-konform in der EU betreiben?", a: "Ja. Vertex AI lässt sich in europäischen Regionen wie europe-west betreiben, sodass Verarbeitung und Datenspeicherung in der EU bleiben. Google nutzt die über die API verarbeiteten Kundendaten nicht zum Training der eigenen Modelle. Mit Data Residency, feingranularen Berechtigungen über IAM, Verschlüsselung und privaten Netzwerkzugängen setzen wir einen DSGVO-konformen Betrieb um und schließen die nötigen Verträge ab." },
  { q: "Was ist der Unterschied zu Azure OpenAI?", a: "Beide bieten Enterprise-KI in der Cloud mit EU-Regionen. Azure OpenAI bringt vor allem die GPT-Modelle von OpenAI in die Microsoft-Welt und passt gut, wenn Sie ohnehin stark auf Microsoft setzen. Vertex AI bietet Googles Gemini-Modelle, einen breiten Model Garden und starke MLOps- und Data-Tools, eng verzahnt mit BigQuery und der Google-Cloud-Datenwelt. Welche Plattform passt, hängt von Ihrem Bestand, Ihren Modellpräferenzen und Use Cases ab. Wir beraten herstellerneutral." },
  { q: "Wann ist Vertex AI besser als eine self-hosted Lösung?", a: "Vertex AI spielt seine Stärke aus, wenn Sie schnell mit starken Modellen produktiv werden wollen, ohne Infrastruktur selbst zu betreiben, und wenn Sie bereits in der Google Cloud arbeiten. Eine self-hosted Lösung wie Private AI ist die bessere Wahl, wenn maximale Datenkontrolle, Unabhängigkeit von einem Cloud-Anbieter oder Betrieb in der eigenen Infrastruktur im Vordergrund steht. Oft ist eine Kombination sinnvoll, wir ordnen das ehrlich ein." },
  { q: "Können wir eigene Daten und Modelle einbinden?", a: "Ja. Über RAG binden wir Ihr Firmenwissen an Gemini an, sodass Antworten auf Ihren Dokumenten basieren. Über Tuning passen wir Modelle an Ihre Aufgaben an, und im Model Garden lassen sich auch offene Modelle betreiben. Eigene ML-Modelle trainieren und deployen Sie über Vertex Training und Endpoints. So entsteht KI, die auf Ihre Daten und Prozesse zugeschnitten ist." },
  { q: "Wie helft ihr beim Übergang vom Prototyp in Produktion?", a: "Viele KI-Projekte bleiben im Prototyp stecken. Wir bauen mit Vertex Pipelines, Model Registry und Monitoring einen sauberen MLOps-Prozess, sodass Modelle reproduzierbar trainiert, versioniert, ausgerollt und überwacht werden. So wird aus einem vielversprechenden Versuch ein zuverlässiger, wartbarer Dienst." },
  { q: "Wie behält man die Kosten im Griff?", a: "Wir wählen Modelle und Recheninstanzen passend zum Anwendungsfall, nutzen Caching, begrenzen Kontextgrößen sinnvoll und überwachen den Verbrauch mit Budgets und Alerts. So zahlen Sie für Wert statt für überdimensionierte Aufrufe, und die Kosten bleiben planbar." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Google Vertex AI Beratung & Implementierung", serviceType: "Vertex AI, Gemini, Managed KI, MLOps", provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" }, description: "Lösungen auf Google Vertex AI und Gemini für Unternehmen im DACH-Raum: EU-Regionen, DSGVO-konform, vom Prototyp zur produktiven ML-Plattform.", areaServed: [{ "@type": "Country", name: "Austria" }, { "@type": "Country", name: "Germany" }, { "@type": "Country", name: "Switzerland" }] };

const stats = [
  { value: "Gemini", label: "und Model Garden" },
  { value: "europe-", label: "west als EU-Region" },
  { value: "0", label: "Training mit Ihren Daten" },
  { value: "MLOps", label: "von Prototyp zu Produktion" },
];
const ataglance = [
  ["Anbieter", "Google Cloud"],
  ["Modelle", "Gemini & Model Garden"],
  ["Region", "europe-west (EU)"],
  ["Stärke", "Daten- & MLOps-Tools"],
  ["Datenschutz", "Data Residency, IAM"],
  ["Einsatz", "GenAI & klassisches ML"],
];
const problems = [
  { problem: "KI-Prototypen schaffen es nie in den produktiven Betrieb.", solution: "Vertex Pipelines und Monitoring bringen Modelle zuverlässig in Produktion." },
  { problem: "Starke Modelle, aber Sorge um Datenschutz und US-Cloud.", solution: "Betrieb in EU-Regionen, ohne Datennutzung fürs Training, DSGVO-konform." },
  { problem: "Eigenes Modell-Hosting ist aufwendig und teuer.", solution: "Vertex AI liefert verwaltete Infrastruktur, Sie konzentrieren sich auf Use Cases." },
  { problem: "Firmenwissen steckt in Dokumenten, nicht im Modell.", solution: "Wir binden Ihr Wissen per RAG an Gemini an, Antworten mit Quellen." },
];
const features = [
  { icon: Brain, title: "Gemini und Model Garden in der EU", description: "Wir bauen Lösungen mit Googles Gemini-Modellen und dem Model Garden, betrieben in europäischen Regionen. So nutzen Sie starke, aktuelle KI, ohne dass Ihre Daten Europa verlassen oder für das Training fremder Modelle verwendet werden." },
  { icon: GitBranch, title: "MLOps mit Vertex Pipelines", description: "Reproduzierbares Training, Model Registry, Deployment und Monitoring, der Weg vom Prototyp zum wartbaren Dienst." },
  { icon: FileText, title: "Ihr Wissen per RAG", description: "Gemini auf Ihren Dokumenten antworten lassen, mit Quellen und ohne Halluzinationen ins Blaue." },
  { icon: Database, title: "Verzahnt mit Ihren Daten", description: "Enge Anbindung an BigQuery und die Google-Cloud-Datenwelt als saubere Basis für KI." },
  { icon: ShieldCheck, title: "EU-Region & Governance", description: "Data Residency, IAM-Berechtigungen, Verschlüsselung und private Zugänge, DSGVO-konform umgesetzt." },
  { icon: RefreshCw, title: "Kostenkontrolle", description: "Passende Modelle und Instanzen, Caching, Budgets und Alerts halten den Verbrauch planbar." },
];
const usecases = [
  { value: "genai", label: "GenAI", icon: Sparkles, head: "Generative KI mit Gemini", intro: "Assistenten und Textanwendungen auf Basis von Gemini.", items: ["Interner Assistent auf Firmenwissen.", "Texte zusammenfassen und generieren.", "Multimodale Auswertung von Dokumenten.", "RAG mit Quellenangabe."] },
  { value: "ml", label: "Machine Learning", icon: Brain, head: "Klassisches ML & Vorhersagen", intro: "Eigene Modelle trainieren, deployen und betreiben.", items: ["Prognosen und Klassifikation.", "Training auf eigenen Daten.", "Endpoints für Echtzeit-Vorhersagen.", "Versionierung und Monitoring."] },
  { value: "mlops", label: "MLOps", icon: GitBranch, head: "MLOps & Betrieb", intro: "Vom Experiment zum zuverlässigen Dienst.", items: ["Pipelines für reproduzierbares Training.", "Model Registry und Rollouts.", "Monitoring von Qualität und Drift.", "Automatisierte Retrainings."] },
  { value: "daten", label: "Daten", icon: Database, head: "Daten & BigQuery", intro: "KI direkt auf Ihrer Datenbasis.", items: ["Anbindung an BigQuery.", "Features nahe an den Daten.", "Batch- und Echtzeit-Inferenz.", "Saubere Data Governance."] },
];
const comparison = [
  { feature: "Modelle", vx: "Gemini, Model Garden", az: "OpenAI GPT", priv: "offene Modelle" },
  { feature: "Ökosystem", vx: "Google Cloud, BigQuery", az: "Microsoft, Azure", priv: "Ihre Infrastruktur" },
  { feature: "EU-Region / DSGVO", vx: "ja, europe-west", az: "ja, EU-Regionen", priv: "voll, self-hosted" },
  { feature: "Daten fürs Training", vx: "nein", az: "nein", priv: "nein" },
  { feature: "Datenkontrolle", vx: "hoch (Cloud)", az: "hoch (Cloud)", priv: "maximal" },
  { feature: "MLOps-Tooling", vx: "sehr stark", az: "stark", priv: "selbst gebaut" },
];
const steps = [
  { step: "01", icon: Phone, title: "Kostenlose Erstanalyse", time: "30 Minuten", description: "Wir klären Anwendungsfälle, Datenschutzanforderungen und Cloud-Bestand und prüfen, ob Vertex AI der schnellste Weg ist." },
  { step: "02", icon: Search, title: "Architektur & Region", time: "Woche 1", description: "Wir wählen Modelle, EU-Region und Sicherheitskonzept (IAM, private Zugänge) und planen Datenanbindung und Kosten." },
  { step: "03", icon: Settings2, title: "Aufbau & MLOps", time: "Woche 2 bis 5", description: "Wir bauen die Lösung, binden Daten und RAG an und richten Pipelines, Deployment und Monitoring ein." },
  { step: "04", icon: Rocket, title: "Go-Live & Betrieb", time: "ab Woche 5", description: "Die Lösung geht produktiv, überwacht und DSGVO-konform. Wir optimieren Qualität und Kosten und bauen aus." },
];
const related = [
  { href: "/leistungen/mlops", icon: GitBranch, title: "MLOps & LLMOps", desc: "KI-Modelle zuverlässig in Produktion bringen und betreiben, plattformübergreifend." },
  { href: "/leistungen/azure-ai", icon: Cloud, title: "Azure OpenAI & Azure AI", desc: "Die Microsoft-Cloud-Alternative für Enterprise-LLMs, herstellerneutral eingeordnet." },
  { href: "/leistungen/data-engineering", icon: Database, title: "Data Engineering", desc: "Saubere Daten-Pipelines als Fundament für KI auf der Google Cloud." },
];


function LogoBox({ slug, alt, imgClassName = "w-5 h-5", boxClassName = "" }: { slug: string; alt: string; imgClassName?: string; boxClassName?: string }) {
  return (
    <span className={`inline-flex items-center justify-center bg-white border border-border rounded ${boxClassName}`}>
      <img src={`/img/logos/${slug}.svg`} alt={alt} className={imgClassName} />
    </span>
  );
}

export default function Page() {
  return (
    <>
      <Script id="faq-vertex" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-vertex" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <LogoBox slug="googlecloud" alt="Google Vertex AI" imgClassName="h-9 w-auto max-w-[2.75rem]" boxClassName="rounded-xl p-2 shadow-sm" />
                    <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">Vertex AI, Gemini</Badge>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Vertex AI: <span className="text-primary">Googles KI, produktiv gemacht</span></h1>
                  <p className="text-lg text-muted-foreground max-w-xl">Mit Gemini, Model Garden und Vertex Pipelines bauen wir KI-Lösungen, die vom Prototyp in den zuverlässigen Betrieb kommen, in EU-Regionen, DSGVO-konform und ohne dass Ihre Daten fürs Training verwendet werden.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild><a href="#contact">Kostenloses Assessment</a></Button>
                    <Button size="lg" variant="outline" asChild><a href="#vergleich">Vertex vs. Azure</a></Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Brain className="w-4 h-4 text-primary" /> Gemini-Modelle</span>
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> EU-Region & DSGVO</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>
                <div className="relative">
                  <Card className="border-2 shadow-xl shadow-primary/5 overflow-hidden">
                    <CardHeader className="border-b border-border py-3">
                      <div className="flex items-center gap-2">
                        <span className="flex gap-1.5"><span className="w-3 h-3 rounded-full bg-muted-foreground/20" /><span className="w-3 h-3 rounded-full bg-muted-foreground/20" /><span className="w-3 h-3 rounded-full bg-muted-foreground/20" /></span>
                        <span className="ml-2 font-mono text-xs text-muted-foreground">pipeline.vertex-ai</span>
                        <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground"><span className="w-2 h-2 rounded-full bg-green-500" /> europe-west</span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-3">
                      {[{ icon: Database, l: "Daten", t: "BigQuery & Quellen" }, { icon: Brain, l: "Modell", t: "Gemini / Model Garden" }, { icon: GitBranch, l: "Pipeline", t: "Training & Deploy" }, { icon: Eye, l: "Betrieb", t: "Monitoring & Drift" }].map((n, i) => { const Icon = n.icon; return (
                        <div key={i} className={`flex items-center gap-3 rounded-xl border-2 px-3.5 py-2.5 ${i === 1 ? "border-primary/40 bg-primary/5" : "border-border bg-background shadow-sm"}`}><div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><Icon className="w-5 h-5 text-primary" /></div><div className="min-w-0 flex-1"><div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">{n.l}</div><div className="text-sm font-semibold truncate">{n.t}</div></div></div>
                      ); })}
                    </CardContent>
                  </Card>
                  <div className="hidden lg:flex absolute -top-4 -right-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium"><Sparkles className="w-3.5 h-3.5 text-primary" /> Gemini</div>
                  <div className="hidden lg:flex absolute -bottom-4 -left-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium"><Lock className="w-3.5 h-3.5 text-primary" /> EU-Region</div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-10 md:py-12 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-2 md:grid-cols-4 border-2 border-border rounded-2xl overflow-hidden bg-card">{stats.map(({ value, label }, i) => (<div key={i} className="p-6 md:p-8 text-center border-b md:border-b-0 border-r last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r border-border"><div className="text-3xl md:text-4xl font-bold text-primary">{value}</div><div className="text-xs md:text-sm text-muted-foreground mt-1.5">{label}</div></div>))}</div>
            </div>
          </section>

          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Kurz erklärt</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Eine Plattform von Idee bis Produktion</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p><strong className="text-foreground">Vertex AI</strong> ist Googles verwaltete Plattform für KI und Machine Learning. Sie bündelt <strong className="text-foreground">Gemini</strong>, einen Model Garden, Werkzeuge für Training und Tuning sowie Pipelines für den produktiven Betrieb, alles an einem Ort.</p>
                    <p>Für Unternehmen heißt das: starke, aktuelle Modelle <strong className="text-foreground">ohne eigenes Infrastruktur-Gefrickel</strong>, betrieben in EU-Regionen und ohne dass Ihre Daten zum Training verwendet werden.</p>
                    <p>Wir bringen Ihre KI <strong className="text-foreground">vom Prototyp in den zuverlässigen Betrieb</strong>: mit sauberem MLOps, Anbindung an Ihre Daten und Wissen, DSGVO-konform und kostenbewusst.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Gemini API</Badge>
                    <Badge variant="secondary" className="rounded-full">Model Garden</Badge>
                    <Badge variant="secondary" className="rounded-full">Vertex Pipelines</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader><CardTitle className="text-xl">Vertex AI auf einen Blick</CardTitle><CardDescription>Die wichtigsten Eckdaten im Überblick.</CardDescription></CardHeader>
                  <CardContent className="space-y-1">{ataglance.map(([label, value]) => (<div key={label} className="flex items-center justify-between py-2.5 border-b border-border last:border-0"><span className="text-sm font-medium text-foreground">{label}</span><span className="text-sm text-muted-foreground text-right max-w-[55%]">{value}</span></div>))}</CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum Vertex AI?</Badge><h2 className="text-3xl md:text-4xl font-bold">Vom Experiment zum echten Dienst</h2><p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Vertex AI schließt die Lücke zwischen vielversprechendem Prototyp und produktiver, sicherer KI.</p></div>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-3"><div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 pl-1">Was heute bremst</div>{problems.map(({ problem }, i) => (<div key={i} className="flex items-start gap-3 p-4 rounded-xl border bg-background"><X className="w-5 h-5 text-destructive mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{problem}</span></div>))}</div>
                <div className="space-y-3"><div className="text-xs font-semibold text-primary uppercase tracking-widest mb-2 pl-1">Was Vertex AI ermöglicht</div>{problems.map(({ solution }, i) => (<div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-primary/20 bg-primary/5"><Check className="w-5 h-5 text-primary mt-0.5 shrink-0" /><span className="text-sm leading-relaxed font-medium">{solution}</span></div>))}</div>
              </div>
            </div>
          </section>

          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Was wir liefern</Badge><h2 className="text-3xl md:text-4xl font-bold">Vertex AI, richtig eingesetzt</h2><p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Von Gemini-Anwendungen über MLOps bis zur Datenanbindung, DSGVO-konform in der EU.</p></div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="hover-lift border-2 lg:col-span-2 bg-primary/5 border-primary/20"><CardHeader><div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2"><Brain className="w-6 h-6 text-primary" /></div><CardTitle className="text-xl">{features[0].title}</CardTitle><CardDescription className="text-base leading-relaxed">{features[0].description}</CardDescription></CardHeader></Card>
                {features.slice(1).map((f, i) => { const Icon = f.icon; return (<Card key={i} className="hover-lift border-2"><CardHeader><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2"><Icon className="w-5 h-5 text-primary" /></div><CardTitle className="text-lg">{f.title}</CardTitle><CardDescription className="leading-relaxed">{f.description}</CardDescription></CardHeader></Card>); })}
              </div>
            </div>
          </section>

          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Anwendungsfälle</Badge><h2 className="text-3xl md:text-4xl font-bold">Was wir auf Vertex AI bauen</h2><p className="text-lg text-muted-foreground mt-4">Wählen Sie einen Bereich, wir zeigen konkrete Szenarien.</p></div>
              <Tabs defaultValue="genai" className="w-full">
                <TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">{usecases.map((d) => { const Icon = d.icon; return (<TabsTrigger key={d.value} value={d.value} className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border"><Icon className="w-4 h-4 mr-1.5" />{d.label}</TabsTrigger>); })}</TabsList>
                {usecases.map((d) => (<TabsContent key={d.value} value={d.value}><Card className="border-2"><CardContent className="pt-6"><h3 className="text-xl font-bold mb-2">{d.head}</h3><p className="text-muted-foreground leading-relaxed mb-5">{d.intro}</p><div className="grid sm:grid-cols-2 gap-3">{d.items.map((item, j) => (<div key={j} className="flex items-start gap-2.5 p-3 rounded-lg border bg-background"><Cloud className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{item}</span></div>))}</div></CardContent></Card></TabsContent>))}
              </Tabs>
            </div>
          </section>

          <section id="vergleich" className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Vergleich</Badge><h2 className="text-3xl md:text-4xl font-bold">Vertex AI vs. Azure OpenAI vs. Private AI</h2><p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Welche Plattform passt? Das hängt von Cloud-Bestand, Modellpräferenz und Datenkontrolle ab. Wir beraten herstellerneutral.</p></div>
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader><TableRow className="bg-muted/50"><TableHead className="w-[28%] font-bold text-foreground">Merkmal</TableHead><TableHead className="text-primary font-bold">Vertex AI</TableHead><TableHead className="text-muted-foreground">Azure OpenAI</TableHead><TableHead className="text-muted-foreground">Private AI</TableHead></TableRow></TableHeader>
                  <TableBody>{comparison.map((row, i) => (<TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}><TableCell className="font-medium">{row.feature}</TableCell><TableCell className="text-sm text-primary font-medium">{row.vx}</TableCell><TableCell className="text-sm text-muted-foreground">{row.az}</TableCell><TableCell className="text-sm text-muted-foreground">{row.priv}</TableCell></TableRow>))}</TableBody>
                </Table>
              </Card>
            </div>
          </section>

          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unser Prozess</Badge><h2 className="text-3xl md:text-4xl font-bold">Ihr Vertex-AI-Projekt in 4 Schritten</h2><p className="text-lg text-muted-foreground mt-4">Von der Architektur bis zum überwachten Produktivbetrieb.</p></div>
              <ProcessSteps steps={steps} />
            </div>
          </section>

          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge><h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zu Vertex AI</h2></div>
              <Accordion type="single" collapsible className="w-full space-y-3">{faqs.map((f, i) => (<AccordionItem key={i} value={`item-${i}`} className="border-2 border-border rounded-xl px-6 bg-background data-[state=open]:border-primary/30 data-[state=open]:bg-primary/5"><AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-5">{f.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">{f.a}</AccordionContent></AccordionItem>))}</Accordion>
            </div>
          </section>

          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Mehr Leistungen</Badge><h2 className="text-3xl md:text-4xl font-bold">Passt gut zu Vertex AI</h2></div>
              <div className="grid md:grid-cols-3 gap-5">{related.map((s, i) => { const Icon = s.icon; return (<a key={i} href={s.href} className="group block"><Card className="h-full border-2 hover-lift group-hover:border-primary/40"><CardHeader><div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${serviceLogos[s.href] ? "bg-white border border-border" : "bg-primary/10"}`}>{serviceLogos[s.href] ? <img src={`/img/logos/${serviceLogos[s.href]}.svg`} alt={s.title} className="w-7 h-7 object-contain" /> : <Icon className="w-6 h-6 text-primary" />}</div><CardTitle className="text-xl">{s.title}</CardTitle></CardHeader><CardContent><p className="text-muted-foreground leading-relaxed">{s.desc}</p></CardContent></Card></a>); })}</div>
            </div>
          </section>

          <ContactForm />
        </main>
        <FooterModern />
      </div>
    </>
  );
}
