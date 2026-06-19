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
  GitBranch, FlaskConical, BarChart3, Boxes, Rocket, Check, X, ShieldCheck, Server, MapPin,
  Lock, RefreshCw, Network, Activity, Users, Phone, Search, Settings2, Clock, Workflow,
  Database, Cloud, FileText, Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "MLflow: Experiment-Tracking, Model Registry & Deployment",
  description:
    "MLflow für den gesamten ML-Lebenszyklus: Wir setzen MLflow für reproduzierbares Experiment-Tracking, Model Registry, Versionierung und Deployment ein, self-hosted in der EU. So kommen Ihre KI-Modelle vom Notebook zuverlässig in Produktion, als Teil eines sauberen MLOps-Prozesses im DACH-Raum.",
  keywords:
    "MLflow, MLflow Tracking, Model Registry, Experiment Tracking, ML Lifecycle, Model Tracking, MLOps Tool, MLflow self-hosted, Model Deployment, Modellversionierung, MLflow Beratung, MLflow Hosting, MLOps, Machine Learning Lebenszyklus",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/mlflow" },
};

const faqs = [
  {
    q: "Was ist MLflow und wofür wird es eingesetzt?",
    a: "MLflow ist eine quelloffene Plattform für den gesamten Machine-Learning-Lebenszyklus. Sie deckt vier Bereiche ab: das Tracking von Experimenten, reproduzierbare Projekte, das Verpacken von Modellen und eine zentrale Model Registry. Statt dass Parameter, Metriken und Modelle über Notebooks, Laptops und Chats verstreut sind, bringt MLflow alles an einen Ort. Teams nutzen es, um Experimente vergleichbar zu machen, Modelle sauber zu versionieren und zuverlässig in Produktion zu bringen.",
  },
  {
    q: "Was bedeutet Experiment-Tracking mit MLflow konkret?",
    a: "Beim Experiment-Tracking erfasst MLflow zu jedem Trainingslauf automatisch die verwendeten Parameter, die erreichten Metriken, die Code-Version und alle erzeugten Artefakte wie Modelle oder Diagramme. Im Web-UI sehen Sie alle Läufe nebeneinander und können sie nach Genauigkeit oder anderen Kennzahlen sortieren. So wählen Sie das beste Modell objektiv aus und können jeden Lauf später exakt nachstellen, auch Monate danach.",
  },
  {
    q: "Was ist die MLflow Model Registry?",
    a: "Die Model Registry ist das zentrale Verzeichnis für Ihre trainierten Modelle. Jedes Modell bekommt einen Namen, jede Verbesserung eine neue Version. Über Stages wie Staging und Production legen Sie fest, welche Version getestet wird und welche live geht. Übergänge und Freigaben werden protokolliert. Damit ist jederzeit nachvollziehbar, welches Modell gerade in Produktion läuft und wie es dorthin gekommen ist.",
  },
  {
    q: "Können Sie MLflow DSGVO-konform self-hosted in der EU betreiben?",
    a: "Ja. MLflow ist Open Source und lässt sich vollständig auf Ihrer eigenen oder auf unserer EU-Infrastruktur betreiben. Trainingsdaten, Metriken und Modelle verlassen Ihre Umgebung nicht und landen nicht in einer US-Cloud. Damit ist MLflow für den DACH-Raum und für sensible Daten gut geeignet und fügt sich sauber in eine DSGVO-konforme MLOps-Architektur ein.",
  },
  {
    q: "Wie bringt MLflow ein Modell vom Notebook in Produktion?",
    a: "MLflow verpackt ein Modell in einem standardisierten Format inklusive seiner Abhängigkeiten. Aus der Model Registry heraus lässt es sich dann reproduzierbar ausrollen, etwa als REST-API, als Batch-Job oder als Container. Neue Versionen ersetzen die alte ohne Stillstand, und bei einem Problem wechseln Sie in Minuten auf eine geprüfte frühere Version zurück. So wird aus einem Experiment im Notebook ein verlässlicher Produktionsdienst.",
  },
  {
    q: "Welche Frameworks und Sprachen unterstützt MLflow?",
    a: "MLflow ist bewusst framework-unabhängig. Es arbeitet mit scikit-learn, PyTorch, TensorFlow, XGBoost, Spark MLlib und vielen weiteren Bibliotheken zusammen und kann auch große Sprachmodelle begleiten. Die Hauptschnittstelle ist Python, daneben gibt es Anbindungen für R und Java sowie eine REST-API. In der Praxis lässt sich damit nahezu jeder bestehende Trainings-Stack anbinden.",
  },
  {
    q: "Wie passt MLflow in einen MLOps-Prozess?",
    a: "MLflow ist ein zentraler Baustein, aber kein vollständiger MLOps-Prozess für sich. Wir verbinden es mit Ihren Datenpipelines, mit CI/CD für automatisiertes Training und Deployment sowie mit Monitoring, das Modellgüte und Drift im Betrieb beobachtet. So entsteht ein durchgehender Kreislauf vom Daten-Input über das Tracking und die Registry bis zum überwachten Modell in Produktion, inklusive automatischem Retraining bei Bedarf.",
  },
  {
    q: "Was kostet MLflow und wie schnell sind Sie startklar?",
    a: "MLflow selbst ist Open Source und damit lizenzkostenfrei. Es fallen nur die Kosten für die Infrastruktur an, auf der es läuft, was bei self-hosted Betrieb planbar bleibt. Ein erstes Tracking-Setup ist oft innerhalb einer Woche nutzbar. Bis Registry, Deployment und die Anbindung an Ihre Pipelines stehen, planen wir je nach Umfang zwei bis vier Wochen. Wir starten dort, wo der größte Nutzen entsteht, und bauen von dort aus weiter.",
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
  name: "MLflow für den Machine-Learning-Lebenszyklus",
  serviceType: "MLOps, Experiment-Tracking, Model Registry, Model Deployment",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "MLflow für Unternehmen im DACH-Raum: reproduzierbares Experiment-Tracking, zentrale Model Registry, Versionierung und Deployment, self-hosted in der EU und eingebettet in einen sauberen MLOps-Prozess.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const stats = [
  { value: "100 %", label: "reproduzierbare Runs" },
  { value: "4", label: "MLflow-Bausteine vereint" },
  { value: "EU", label: "self-hosted, datensouverän" },
  { value: "1", label: "Quelle der Wahrheit für Modelle" },
];

const ataglance = [
  ["Typ", "Open-Source MLOps-Plattform"],
  ["Bausteine", "Tracking, Projects, Models, Registry"],
  ["Lizenz", "Open Source, Apache 2.0"],
  ["Hosting", "self-hosted in der EU"],
  ["Frameworks", "scikit-learn, PyTorch, TensorFlow u. v. m."],
  ["DSGVO", "voll, Daten bleiben bei Ihnen"],
];

const problems = [
  { problem: "Niemand weiß mehr, mit welchen Daten und Parametern das beste Modell trainiert wurde.", solution: "MLflow Tracking erfasst Parameter, Metriken, Code-Version und Artefakte zu jedem Lauf automatisch." },
  { problem: "Modelle liegen als pickle-Dateien auf Laptops und in Chats verstreut.", solution: "Die Model Registry verwaltet alle Modelle zentral, versioniert und mit klaren Stages." },
  { problem: "Ein Modell aus dem Notebook in Produktion zu bringen ist jedes Mal Handarbeit.", solution: "Wir verpacken Modelle als MLflow-Standard und deployen sie reproduzierbar als API oder Batch-Job." },
  { problem: "Welches Modell läuft gerade in Produktion, und ist es noch das beste?", solution: "Stages, Versionen und Metriken machen jederzeit sichtbar, was live ist und warum." },
];

const bentoFeatures = [
  { icon: FlaskConical, title: "Experiment-Tracking, das nichts vergisst", description: "Zu jedem Trainingslauf hält MLflow Parameter, Metriken, Code-Version, Datensatz und Artefakte fest. Sie vergleichen hunderte Experimente objektiv, finden das beste Modell und können jeden Lauf jederzeit reproduzieren, statt sich auf Screenshots und Erinnerung zu verlassen." },
  { icon: Boxes, title: "Model Registry & Versionierung", description: "Jedes Modell zentral registriert, sauber versioniert und mit Stages von Staging bis Production. Sie sehen jederzeit, welche Version live ist und warum." },
  { icon: Rocket, title: "Vom Notebook ins Deployment", description: "Wir verpacken Modelle als MLflow-Standard und rollen sie reproduzierbar aus, als REST-API, Batch-Job oder Container." },
  { icon: RefreshCw, title: "Reproduzierbar und vergleichbar", description: "Parameter, Code, Daten und Umgebung sind festgehalten, sodass sich jeder Lauf nachstellen und gegen andere vergleichen lässt." },
  { icon: Server, title: "Self-hosted in der EU", description: "Wir betreiben MLflow auf Ihrer oder unserer EU-Infrastruktur. Ihre Trainingsdaten und Modelle bleiben unter Ihrer Kontrolle." },
  { icon: Network, title: "Teil eines sauberen MLOps-Prozesses", description: "MLflow greift in CI/CD, Monitoring und Datenpipelines, statt als Insellösung neben Ihren Tools zu stehen." },
];

const departments = [
  { value: "tracking", label: "Tracking", icon: BarChart3, head: "Experiment-Tracking", intro: "Jeder Trainingslauf wird festgehalten, vergleichbar und nachstellbar.", items: ["Parameter, Metriken und Artefakte zu jedem Trainingslauf automatisch erfassen.", "Hunderte Experimente vergleichen und das beste Modell objektiv auswählen.", "Datensatz-Version, Code-Commit und Umgebung zu jedem Run festhalten.", "Ergebnisse im Web-UI teilen, statt sie in Notebooks zu vergraben."] },
  { value: "registry", label: "Registry", icon: Boxes, head: "Model Registry & Versionierung", intro: "Alle Modelle zentral, versioniert und mit klaren Stages.", items: ["Modelle zentral registrieren, statt pickle-Dateien zu verschicken.", "Versionen sauber führen und jederzeit auf eine frühere zurückwechseln.", "Stages von Staging bis Production klar vergeben und dokumentieren.", "Freigaben und Übergänge nachvollziehbar protokollieren."] },
  { value: "deployment", label: "Deployment", icon: Rocket, head: "Deployment & Serving", intro: "Vom registrierten Modell zum verlässlichen Produktionsdienst.", items: ["Registrierte Modelle als REST-API, Batch-Job oder Container ausrollen.", "Modelle reproduzierbar verpacken, inklusive aller Abhängigkeiten.", "Neue Versionen ohne Stillstand gegen die alte austauschen.", "Roll-back auf eine geprüfte Version in Minuten."] },
  { value: "monitoring", label: "Monitoring", icon: Activity, head: "Monitoring & Retraining", intro: "Modelle bleiben im Betrieb beobachtet, nicht sich selbst überlassen.", items: ["Modellgüte und Drift im laufenden Betrieb beobachten.", "Automatisches Retraining anstoßen, wenn die Qualität sinkt.", "Neue Kandidaten gegen das Produktionsmodell vergleichen.", "Alerts auslösen, wenn ein Modell aus dem Ruder läuft."] },
  { value: "team", label: "Team", icon: Users, head: "Zusammenarbeit im Team", intro: "Data Scientists und Engineers arbeiten an einer gemeinsamen Quelle.", items: ["Alle arbeiten an einer zentralen, gemeinsamen Quelle der Wahrheit.", "Ergebnisse bleiben nachvollziehbar, auch wenn jemand das Team verlässt.", "Onboarding wird schneller, weil die Historie dokumentiert ist.", "Doppelarbeit entfällt, weil bestehende Experimente sichtbar sind."] },
  { value: "governance", label: "Governance", icon: ShieldCheck, head: "Governance & Compliance", intro: "Lückenlose Nachvollziehbarkeit für Revision und EU AI Act.", items: ["Nachvollziehen, welches Modell wann mit welchen Daten entstand.", "Audit-Trail für interne Revision und den EU AI Act bereitstellen.", "Daten und Modelle bleiben self-hosted in der EU.", "Zugriffsrechte und Freigabeprozesse sauber abbilden."] },
];

const comparison = [
  { feature: "Experiment-Tracking", mlflow: "automatisch und vollständig", manuell: "Excel, Notizen, Screenshots", saas: "automatisch" },
  { feature: "Reproduzierbarkeit", mlflow: "Code, Daten und Umgebung erfasst", manuell: "kaum gegeben", saas: "gut" },
  { feature: "Model Registry", mlflow: "integriert, mit Stages", manuell: "Dateinamen nach Zufall", saas: "je nach Tarif" },
  { feature: "Hosting & Datenhoheit", mlflow: "self-hosted in der EU", manuell: "lokal verstreut", saas: "meist US-Cloud" },
  { feature: "Deployment", mlflow: "ein Standard bis ins Serving", manuell: "Handarbeit je Modell", saas: "teils extra zu lösen" },
  { feature: "Kosten", mlflow: "Open Source, nur Infrastruktur", manuell: "versteckte Zeitkosten", saas: "pro Seat und pro Run" },
  { feature: "Lock-in", mlflow: "keiner, offener Standard", manuell: "keiner, aber chaotisch", saas: "hoch" },
];

const steps = [
  { step: "01", icon: Phone, title: "Kostenlose Erstanalyse", time: "30 Minuten", description: "Wir schauen, wie Ihre Modelle heute entstehen und wo Tracking, Registry oder ein reproduzierbares Deployment fehlen. Sie wissen danach, wo der größte Hebel liegt." },
  { step: "02", icon: Search, title: "Architektur & Setup", time: "Woche 1", description: "Wir richten MLflow self-hosted in der EU ein, binden Ihre Frameworks an und definieren die Registry-Stages und Konventionen." },
  { step: "03", icon: Settings2, title: "Integration & Pilot", time: "Woche 2 bis 4", description: "Wir verdrahten das Tracking in Ihre Trainings, migrieren bestehende Modelle in die Registry und bringen ein erstes Modell reproduzierbar in Produktion." },
  { step: "04", icon: Rocket, title: "Go-Live & Betrieb", time: "ab Woche 4", description: "Die Modelle laufen reproduzierbar. Wir überwachen Güte und Drift, automatisieren das Retraining und erweitern den MLOps-Prozess." },
];

const related = [
  { href: "/leistungen/mlops", icon: Workflow, title: "MLOps & LLMOps", desc: "Der gesamte Betrieb Ihrer Modelle, von der Datenpipeline über CI/CD bis zum Monitoring in Produktion." },
  { href: "/leistungen/databricks", icon: Database, title: "Databricks", desc: "Die Lakehouse-Plattform für Daten und ML, auf der MLflow ursprünglich entstanden ist." },
  { href: "/leistungen/vertex-ai", icon: Cloud, title: "Google Vertex AI", desc: "Managed ML-Plattform von Google, wenn Sie Training und Deployment gebündelt in der Cloud betreiben wollen." },
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
      <Script id="faq-mlflow" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-mlflow" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <LogoBox slug="mlflow" alt="MLflow" imgClassName="h-9 w-auto max-w-[2.75rem]" boxClassName="rounded-xl p-2 shadow-sm" />
                    <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                      MLflow, ML-Lebenszyklus
                    </Badge>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    MLflow, vom Experiment <span className="text-primary">zuverlässig in Produktion</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Wir setzen MLflow für reproduzierbares Experiment-Tracking, eine zentrale Model Registry, saubere Versionierung und Deployment ein. So kommen Ihre KI-Modelle vom Notebook verlässlich in Produktion, self-hosted in der EU und als Teil eines sauberen MLOps-Prozesses.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Assessment</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#vergleich">MLflow im Vergleich</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> Self-hosted in der EU</span>
                    <span className="flex items-center gap-1.5"><GitBranch className="w-4 h-4 text-primary" /> Reproduzierbare Runs</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Hero visual: ML lifecycle pipeline */}
                <div className="relative">
                  <Card className="border-2 shadow-xl shadow-primary/5 overflow-hidden">
                    <CardHeader className="border-b border-border py-3">
                      <div className="flex items-center gap-2">
                        <GitBranch className="w-4 h-4 text-primary" />
                        <span className="font-mono text-xs text-muted-foreground">churn-model.run</span>
                        <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> aktiv
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3 rounded-xl border-2 border-primary/40 bg-primary/5 px-3.5 py-2.5">
                        <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0"><FlaskConical className="w-5 h-5 text-primary" /></div>
                        <div className="min-w-0"><div className="text-[10px] uppercase tracking-wider text-primary font-medium">Experiment-Run</div><div className="text-sm font-semibold truncate">churn-predictor v3</div></div>
                      </div>
                      {[
                        { icon: BarChart3, label: "Tracking", title: "Parameter und Metriken geloggt" },
                        { icon: Boxes, label: "Registry", title: "Version 3 registriert" },
                        { icon: Rocket, label: "Deployment", title: "Stage: Production" },
                      ].map((n, i) => {
                        const Icon = n.icon;
                        return (
                          <div key={i} className="flex items-center gap-3 rounded-xl border-2 border-border bg-background px-3.5 py-2.5 shadow-sm">
                            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><Icon className="w-5 h-5 text-primary" /></div>
                            <div className="min-w-0 flex-1"><div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">{n.label}</div><div className="text-sm font-semibold truncate">{n.title}</div></div>
                            <Check className="w-4 h-4 text-green-600 shrink-0" />
                          </div>
                        );
                      })}
                    </CardContent>
                  </Card>
                  <div className="hidden lg:flex absolute -top-4 -right-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium">
                    <GitBranch className="w-3.5 h-3.5 text-primary" /> Tracking, Registry, Deploy
                  </div>
                  <div className="hidden lg:flex absolute -bottom-4 -left-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium">
                    <Lock className="w-3.5 h-3.5 text-primary" /> self-hosted in der EU
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* STATS */}
          <section className="py-10 md:py-12 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-2 md:grid-cols-4 border-2 border-border rounded-2xl overflow-hidden bg-card">
                {stats.map(({ value, label }, i) => (
                  <div key={i} className="p-6 md:p-8 text-center border-b md:border-b-0 border-r last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r border-border">
                    <div className="text-3xl md:text-4xl font-bold text-primary">{value}</div>
                    <div className="text-xs md:text-sm text-muted-foreground mt-1.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* DEFINITION */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Kurz erklärt</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was ist MLflow und wofür brauchen Sie es?</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p><strong className="text-foreground">MLflow</strong> ist die führende Open-Source-Plattform für den gesamten <strong className="text-foreground">ML-Lebenszyklus</strong>. Sie bündelt <strong className="text-foreground">Experiment-Tracking</strong>, eine <strong className="text-foreground">Model Registry</strong>, reproduzierbare Projekte und Modell-Deployment an einem Ort, statt dass jedes Team seine eigene Insellösung bastelt.</p>
                    <p>Der Kern ist das <strong className="text-foreground">Model Tracking</strong>: Zu jedem Trainingslauf werden Parameter, Metriken, Code-Version und Artefakte automatisch erfasst. So lassen sich hunderte Experimente objektiv vergleichen und jederzeit nachstellen. Die <strong className="text-foreground">Model Registry</strong> verwaltet anschließend jede Modellversion zentral, mit klaren Stages von Staging bis Production.</p>
                    <p>Als <strong className="text-foreground">MLOps-Tool</strong> ist MLflow framework-unabhängig und greift in Ihre bestehende Pipeline. Wir betreiben es <strong className="text-foreground">self-hosted in der EU</strong>, sodass Trainingsdaten und Modelle bei Ihnen bleiben, und binden es in CI/CD, Monitoring und Datenpipelines ein. Sie bekommen einen reproduzierbaren Weg vom Notebook bis ins Deployment.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Experiment Tracking</Badge>
                    <Badge variant="secondary" className="rounded-full">Model Registry</Badge>
                    <Badge variant="secondary" className="rounded-full">ML Lifecycle</Badge>
                    <Badge variant="secondary" className="rounded-full">MLOps Tool</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">MLflow auf einen Blick</CardTitle>
                    <CardDescription>Die wichtigsten Eckdaten im Überblick.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {ataglance.map(([label, value]) => (
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

          {/* PROBLEM -> LÖSUNG */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum MLflow?</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Vom Notebook-Chaos zum reproduzierbaren Modell</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Überall, wo Modelle ohne System entstehen, schafft MLflow Nachvollziehbarkeit, Ordnung und einen klaren Weg in die Produktion.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 pl-1">Was heute passiert</div>
                  {problems.map(({ problem }, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl border bg-background"><X className="w-5 h-5 text-destructive mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{problem}</span></div>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-2 pl-1">Was MLflow daraus macht</div>
                  {problems.map(({ solution }, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-primary/20 bg-primary/5"><Check className="w-5 h-5 text-primary mt-0.5 shrink-0" /><span className="text-sm leading-relaxed font-medium">{solution}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* BENTO */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Was wir liefern</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Mehr als ein Tracking-Tool installieren</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Wir bringen Struktur in Ihren ML-Lebenszyklus, von der ersten Metrik bis zum Modell in Produktion.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="hover-lift border-2 lg:col-span-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2"><FlaskConical className="w-6 h-6 text-primary" /></div>
                    <CardTitle className="text-xl">{bentoFeatures[0].title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{bentoFeatures[0].description}</CardDescription>
                  </CardHeader>
                </Card>
                {bentoFeatures.slice(1).map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <Card key={i} className="hover-lift border-2">
                      <CardHeader>
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2"><Icon className="w-5 h-5 text-primary" /></div>
                        <CardTitle className="text-lg">{f.title}</CardTitle>
                        <CardDescription className="leading-relaxed">{f.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* USE CASES */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Anwendungsfälle</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Was MLflow im ML-Lebenszyklus übernimmt</h2>
                <p className="text-lg text-muted-foreground mt-4">Wählen Sie eine Phase, wir zeigen konkrete Abläufe aus der Praxis.</p>
              </div>
              <Tabs defaultValue="tracking" className="w-full">
                <TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">
                  {departments.map((d) => {
                    const Icon = d.icon;
                    return (
                      <TabsTrigger key={d.value} value={d.value} className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border">
                        <Icon className="w-4 h-4 mr-1.5" />{d.label}
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
                {departments.map((d) => (
                  <TabsContent key={d.value} value={d.value}>
                    <Card className="border-2">
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-bold mb-2">{d.head}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-5">{d.intro}</p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {d.items.map((item, j) => (
                            <div key={j} className="flex items-start gap-2.5 p-3 rounded-lg border bg-background"><Zap className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{item}</span></div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>

          {/* VERGLEICH */}
          <section id="vergleich" className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Vergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">MLflow vs. manuelles Tracking vs. SaaS-Tool</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Manuelles Tracking ist günstig zu starten und teuer im Unterhalt. SaaS-Tools sind komfortabel, aber oft US-Cloud und teuer pro Run. MLflow vereint beides, self-hosted und offen.</p>
              </div>
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[28%] font-bold text-foreground">Merkmal</TableHead>
                      <TableHead className="text-primary font-bold"><span className="inline-flex items-center gap-1.5"><GitBranch className="w-4 h-4" />MLflow</span></TableHead>
                      <TableHead className="text-muted-foreground"><span className="inline-flex items-center gap-1.5"><FileText className="w-4 h-4" />Manuell</span></TableHead>
                      <TableHead className="text-muted-foreground"><span className="inline-flex items-center gap-1.5"><Cloud className="w-4 h-4" />SaaS-Tool</span></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparison.map((row, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{row.feature}</TableCell>
                        <TableCell className="text-sm text-primary font-medium">{row.mlflow}</TableCell>
                        <TableCell className="text-sm">{row.manuell}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{row.saas}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
              <p className="text-sm text-muted-foreground text-center mt-4">Unser Standard für den DACH-Raum ist MLflow self-hosted in der EU, weil Ihre Daten und Modelle dort bei Ihnen bleiben. Verbunden mit <a href="/leistungen/mlops" className="text-primary hover:underline">MLOps</a> wird daraus ein durchgehender Betrieb.</p>
            </div>
          </section>

          {/* PROZESS */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unser Prozess</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Ihr MLflow-Projekt in 4 Schritten</h2>
                <p className="text-lg text-muted-foreground mt-4">Transparent, ohne Überraschungen und mit reproduzierbarem Ergebnis.</p>
              </div>
              <ProcessSteps steps={steps} />
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zu MLflow</h2>
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

          {/* RELATED */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Mehr Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zu MLflow</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {related.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <a key={i} href={s.href} className="group block">
                      <Card className="h-full border-2 hover-lift group-hover:border-primary/40">
                        <CardHeader>
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${serviceLogos[s.href] ? "bg-white border border-border" : "bg-primary/10"}`}>{serviceLogos[s.href] ? <img src={`/img/logos/${serviceLogos[s.href]}.svg`} alt={s.title} className="w-7 h-7 object-contain" /> : <Icon className="w-6 h-6 text-primary" />}</div>
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
