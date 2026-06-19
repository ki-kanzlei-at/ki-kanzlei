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
  Database, Layers, ShieldCheck, Brain, MapPin, Lock, Check, X, Workflow, BarChart3,
  RefreshCw, Cog, Gauge, Search, Settings2, Rocket, Phone, Clock, Cloud, Server, GitBranch,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Databricks Beratung & Lakehouse-Implementierung",
  description:
    "Databricks für Unternehmen im DACH-Raum: Wir beraten, implementieren und betreiben Ihre Data-Lakehouse-Plattform mit Delta Lake, Unity Catalog und MLflow. Data Engineering, MLOps und KI auf einer Plattform, DSGVO-konform in der EU-Region.",
  keywords:
    "Databricks, Databricks Beratung, Databricks Implementierung, Data Lakehouse, Delta Lake, Unity Catalog, MLflow, Data Engineering, MLOps, Databricks Alternative, Databricks Snowflake, Lakehouse Plattform, KI Plattform, Data Platform DACH",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/databricks" },
};

const faqs = [
  {
    q: "Was ist Databricks und was ist ein Data Lakehouse?",
    a: "Databricks ist eine cloudbasierte Datenplattform, die das Konzept des Data Lakehouse geprägt hat. Ein Lakehouse vereint die günstige, flexible Speicherung eines Data Lake mit der Struktur und Performance eines Data Warehouse auf einer einzigen Plattform. Statt Rohdaten in einem Lake und aufbereitete Daten in einem getrennten Warehouse zu halten, liegt bei Databricks alles offen im Delta-Lake-Format. Darauf laufen Data Engineering, Analytics, BI und KI/ML gemeinsam. So entfällt das ständige Kopieren zwischen Systemen, und Ihre Daten bleiben die einzige Wahrheit für alle Auswertungen und Modelle.",
  },
  {
    q: "Was ist der Unterschied zwischen Databricks und Snowflake?",
    a: "Beide sind starke Cloud-Datenplattformen, setzen aber andere Schwerpunkte. Snowflake kommt aus dem klassischen Data Warehousing, ist sehr SQL-zentriert und besonders stark, wenn es um strukturierte Daten, BI und einfache Bedienung geht. Databricks kommt aus der Data-Engineering- und Machine-Learning-Welt, basiert auf offenem Delta Lake und ist stärker, wenn es um große, auch unstrukturierte Datenmengen, komplexe Pipelines und KI/ML auf derselben Plattform geht. Wir beraten Sie ehrlich: Geht es vor allem um SQL-Reporting, kann Snowflake die einfachere Wahl sein. Sobald Data Engineering und KI zusammenkommen, spielt Databricks seine Stärke aus.",
  },
  {
    q: "Ist Databricks DSGVO-konform in der EU einsetzbar?",
    a: "Ja. Databricks lässt sich in einer EU-Region auf Azure, AWS oder GCP betreiben, sodass Ihre Daten den europäischen Rechtsraum nicht verlassen müssen. Über Unity Catalog steuern Sie zentral, wer auf welche Daten zugreift, woher Daten stammen und wie sie genutzt werden. Zusammen mit Auftragsverarbeitungsvertrag, Verschlüsselung und einer sauberen Berechtigungsstruktur ist ein DSGVO-konformer Betrieb gut umsetzbar. Wir richten die Plattform so ein, dass Datenschutz und Compliance von Anfang an eingebaut sind, statt nachträglich aufgesetzt zu werden.",
  },
  {
    q: "Wofür brauche ich Unity Catalog und Delta Lake?",
    a: "Delta Lake ist das Speicherformat im Kern von Databricks. Es bringt Transaktionssicherheit, Versionierung und Performance in den Data Lake, sodass Ihre Daten zuverlässig und reproduzierbar bleiben. Unity Catalog ist die zentrale Governance-Schicht darüber: Er verwaltet Berechtigungen, Datenkataloge, Herkunft (Lineage) und Audit über alle Workspaces und Workloads hinweg. Gemeinsam sorgen die beiden dafür, dass Ihre Daten sauber strukturiert, sicher zugänglich und jederzeit nachvollziehbar sind, was gerade im DACH-Raum für Compliance entscheidend ist.",
  },
  {
    q: "Wie hilft Databricks bei MLOps und KI-Projekten?",
    a: "Databricks bringt mit MLflow ein integriertes Werkzeug für den gesamten Machine-Learning-Lebenszyklus mit: vom Experiment über das Tracking und die Versionierung bis zum Deployment und Monitoring der Modelle. Weil Daten, Feature Engineering, Training und Betrieb auf einer Plattform liegen, schaffen es Modelle deutlich zuverlässiger aus dem Notebook in den produktiven Einsatz. Wir bauen darauf saubere MLOps-Prozesse auf, sodass Ihre KI-Anwendungen reproduzierbar, überwacht und wartbar bleiben, statt als einmaliges Experiment zu verpuffen.",
  },
  {
    q: "Was kostet Databricks und wie lassen sich Kosten optimieren?",
    a: "Databricks rechnet im Wesentlichen nach genutzter Rechenleistung ab, getrennt vom Speicher. Das ist flexibel, kann bei unsauberer Konfiguration aber teuer werden, etwa durch zu große Cluster oder schlecht optimierte Jobs. Wir optimieren Ihre Kosten gezielt: über passende Cluster-Größen, automatisches Herunterfahren, effiziente Pipelines, Caching und eine durchdachte Aufteilung von Workloads. In vielen Fällen senken wir die laufenden Kosten deutlich, ohne dass die Performance leidet.",
  },
  {
    q: "Können Sie unser bestehendes Data Warehouse zu Databricks migrieren?",
    a: "Ja. Wir analysieren Ihr bestehendes Data Warehouse oder Ihren Data Lake, planen die Zielarchitektur im Lakehouse und migrieren Daten, Pipelines und Auswertungen Schritt für Schritt. Dabei gehen wir risikoarm vor, oft parallel zum Altsystem, sodass der Betrieb nicht stillsteht. Sie gewinnen eine offene, zukunftsfähige Plattform, auf der Reporting und KI endlich zusammenlaufen, statt in getrennten Silos zu arbeiten.",
  },
  {
    q: "Übernehmen Sie auch den laufenden Betrieb der Plattform?",
    a: "Ja. Auf Wunsch betreiben und betreuen wir Ihre Databricks-Plattform dauerhaft: Wir überwachen Pipelines und Jobs, halten Governance und Berechtigungen aktuell, optimieren Kosten und Performance und bauen neue Use Cases dazu. So bleibt Ihr Lakehouse zuverlässig und wirtschaftlich, statt nach dem Aufbau langsam unübersichtlich zu werden.",
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
  name: "Databricks Beratung & Lakehouse-Implementierung",
  serviceType: "Data Lakehouse, Databricks, Data Engineering, MLOps",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "Databricks-Beratung und -Implementierung für Unternehmen im DACH-Raum: Lakehouse-Architektur mit Delta Lake, Unity Catalog und MLflow, Data Engineering, MLOps und KI auf einer Plattform, DSGVO-konform in der EU-Region.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const stats = [
  { value: "1", label: "Plattform für Daten & KI" },
  { value: "EU", label: "Region, DSGVO-konform" },
  { value: "Delta", label: "Lake als offenes Format" },
  { value: "4-8 Wo.", label: "bis zur ersten Pipeline" },
];

const ataglance = [
  ["Typ", "Data-Lakehouse-Plattform"],
  ["Kernkomponenten", "Delta Lake, Unity Catalog, MLflow"],
  ["Stärke", "Data Engineering plus KI/ML"],
  ["Hosting", "Azure, AWS, GCP, EU-Region"],
  ["Datenformat", "offen, Delta und Parquet"],
  ["DSGVO", "EU-Region, Governance via Unity Catalog"],
];

const problems = [
  { problem: "Daten liegen verteilt in Silos, jede Auswertung braucht erst tagelange Aufbereitung.", solution: "Im Lakehouse landen alle Daten an einem Ort, sauber modelliert von Bronze bis Gold." },
  { problem: "Das klassische Data Warehouse rechnet teuer ab und skaliert bei großen Datenmengen schlecht.", solution: "Databricks trennt Speicher und Rechenleistung, Sie zahlen nur die genutzte Compute." },
  { problem: "Data-Science-Modelle entstehen im Notebook und schaffen es nie zuverlässig in den Betrieb.", solution: "Mit MLflow und sauberen MLOps-Prozessen gehen Modelle versioniert und reproduzierbar in Produktion." },
  { problem: "Niemand weiß genau, wer auf welche Daten zugreifen darf, Compliance wird zum Risiko.", solution: "Unity Catalog regelt Zugriff, Herkunft und Audit zentral über alle Workloads hinweg." },
];

const bentoFeatures = [
  { icon: Layers, title: "Lakehouse von Bronze bis Gold", description: "Wir bauen Ihr Data Lakehouse mit klarer Architektur: Rohdaten als Bronze, bereinigte Daten als Silber, ausgewertete Daten als Gold. Auf Delta Lake aufgesetzt, transaktionssicher und versioniert. So haben Reporting, Analytics und KI dieselbe verlässliche Datenbasis, statt mit verstreuten Kopien zu arbeiten." },
  { icon: Workflow, title: "Data Engineering & Pipelines", description: "Robuste, automatisierte Pipelines von der Quelle bis zur Auswertung, mit Spark, Delta Live Tables und sauberer Fehlerbehandlung." },
  { icon: Brain, title: "KI & ML auf einer Plattform", description: "Feature Engineering, Training, MLflow und Deployment direkt neben Ihren Daten, ohne Brüche zwischen Data Lake und Modell." },
  { icon: ShieldCheck, title: "Unity Catalog Governance", description: "Zentrale Berechtigungen, Datenkataloge, Lineage und Audit über alle Workspaces, damit Compliance und Übersicht gewahrt bleiben." },
  { icon: Gauge, title: "Kostenoptimierung", description: "Passende Cluster, automatisches Herunterfahren und effiziente Jobs senken Ihre Compute-Kosten spürbar, ohne Performance zu opfern." },
  { icon: RefreshCw, title: "Betrieb & Plattform-Management", description: "Wir überwachen, warten und erweitern Ihre Plattform, statt sie nach dem Aufbau sich selbst zu überlassen." },
];

const departments = [
  { value: "engineering", label: "Data Engineering", icon: Workflow, head: "Data Engineering & Pipelines", intro: "Aus verstreuten Rohdaten wird eine saubere, automatisierte Datenbasis.", items: ["Quellsysteme anbinden und Daten zuverlässig ins Lakehouse laden.", "Bronze-, Silber- und Gold-Schichten mit Delta Lake modellieren.", "Pipelines mit Delta Live Tables automatisieren und überwachen.", "Datenqualität, Tests und Fehlerbehandlung von Anfang an einbauen."] },
  { value: "analytics", label: "Analytics & BI", icon: BarChart3, head: "Analytics & Business Intelligence", intro: "Reporting und Self-Service-BI auf einer einzigen, verlässlichen Datenbasis.", items: ["Databricks SQL als performante Schicht für Auswertungen bereitstellen.", "Dashboards in Power BI, Tableau oder Looker direkt anbinden.", "Kennzahlen zentral und einheitlich definieren.", "Aufwändige Reports automatisiert statt manuell erzeugen."] },
  { value: "ml", label: "ML & KI", icon: Brain, head: "Machine Learning & KI", intro: "Vom Experiment bis zum produktiven Modell, alles auf einer Plattform.", items: ["Feature Engineering und Training direkt auf Ihren Daten.", "Experimente und Modelle mit MLflow versionieren und vergleichen.", "Modelle reproduzierbar in den Betrieb bringen und überwachen.", "Generative KI und LLM-Anwendungen auf Ihren eigenen Daten aufsetzen."] },
  { value: "governance", label: "Governance", icon: ShieldCheck, head: "Governance & Compliance", intro: "Klare Regeln, wer welche Daten sieht und nutzt, über die ganze Plattform.", items: ["Berechtigungen zentral über Unity Catalog steuern.", "Herkunft und Nutzung der Daten lückenlos nachvollziehen.", "Sensible Daten maskieren und Zugriffe protokollieren.", "DSGVO-Anforderungen in der EU-Region sauber umsetzen."] },
  { value: "migration", label: "Migration", icon: RefreshCw, head: "Migration & Modernisierung", intro: "Vom klassischen Data Warehouse zum offenen Lakehouse, ohne Stillstand.", items: ["Bestehendes Warehouse und Pipelines analysieren und bewerten.", "Zielarchitektur im Lakehouse planen und schrittweise aufbauen.", "Daten, Logik und Reports risikoarm migrieren.", "Parallelbetrieb absichern, bis das neue System stabil läuft."] },
  { value: "betrieb", label: "Plattform-Betrieb", icon: Cog, head: "Betrieb & Optimierung", intro: "Die Plattform bleibt zuverlässig, sicher und wirtschaftlich.", items: ["Jobs, Pipelines und Cluster laufend überwachen.", "Kosten und Performance kontinuierlich optimieren.", "Governance, Berechtigungen und Updates aktuell halten.", "Neue Use Cases bedarfsgerecht ergänzen."] },
];

const comparison = [
  { feature: "Architektur", databricks: "Lakehouse, offen", snowflake: "Cloud Data Warehouse", dwh: "klassisches Warehouse" },
  { feature: "ML & KI nativ", databricks: "ja, inkl. MLflow", snowflake: "wächst, SQL-nah", dwh: "nein, separate Tools" },
  { feature: "Data Engineering", databricks: "stark, Spark & Delta", snowflake: "gut, SQL-zentriert", dwh: "ETL-lastig" },
  { feature: "Unstrukturierte Daten", databricks: "ja, voll unterstützt", snowflake: "eingeschränkt", dwh: "kaum" },
  { feature: "Datenformat", databricks: "offen, Delta Lake", snowflake: "proprietär", dwh: "proprietär" },
  { feature: "Kostenmodell", databricks: "Compute getrennt, flexibel", snowflake: "Credits, planbar", dwh: "Lizenz plus Hardware" },
  { feature: "EU-Region & DSGVO", databricks: "ja, EU-Region", snowflake: "ja, EU-Region", dwh: "je nach Betrieb" },
  { feature: "Vendor Lock-in", databricks: "gering, offene Formate", snowflake: "höher, proprietär", dwh: "hoch" },
];

const steps = [
  { step: "01", icon: Phone, title: "Kostenlose Erstanalyse", time: "30 Minuten", description: "Wir schauen uns Ihre Datenlandschaft, Ziele und Engpässe an und klären, ob ein Lakehouse der richtige Weg ist. Sie wissen danach, wo der größte Hebel liegt." },
  { step: "02", icon: Search, title: "Architektur & Konzept", time: "Woche 1 bis 2", description: "Wir entwerfen die Lakehouse-Architektur, Governance mit Unity Catalog, Kostenrahmen und ehrliche Einordnung gegenüber Snowflake oder Ihrem Bestand." },
  { step: "03", icon: Settings2, title: "Implementierung & Pipelines", time: "Woche 2 bis 6", description: "Wir setzen die Plattform auf, bauen Pipelines mit Delta Lake, richten Governance ein und integrieren ML und KI dort, wo sie Wert schaffen." },
  { step: "04", icon: Rocket, title: "Go-Live & Betrieb", time: "ab Woche 6", description: "Die Plattform geht produktiv. Wir überwachen, optimieren Kosten und Performance und erweitern um neue Use Cases, wenn Sie bereit sind." },
];

const related = [
  { href: "/leistungen/mlops", icon: GitBranch, title: "MLOps & LLMOps", desc: "Modelle und LLMs zuverlässig in Produktion bringen, versioniert, überwacht und reproduzierbar." },
  { href: "/leistungen/snowflake", icon: Cloud, title: "Snowflake Data Cloud", desc: "Die SQL-zentrierte Data Cloud, wenn klassisches Data Warehousing im Vordergrund steht." },
  { href: "/leistungen/data-engineering", icon: Database, title: "Data Engineering", desc: "Robuste Datenpipelines von der Quelle bis zur Auswertung, sauber modelliert und automatisiert." },
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
      <Script id="faq-databricks" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-databricks" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <LogoBox slug="databricks" alt="Databricks" imgClassName="h-9 w-auto max-w-[2.75rem]" boxClassName="rounded-xl p-2 shadow-sm" />
                    <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                      Databricks, Lakehouse-Plattform
                    </Badge>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Databricks als <span className="text-primary">Daten- und KI-Fundament</span> Ihres Unternehmens
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Wir beraten, implementieren und betreiben Ihre Data-Lakehouse-Plattform mit Delta Lake, Unity Catalog und MLflow. Data Engineering, MLOps und KI laufen auf einer Plattform zusammen, DSGVO-konform in der EU-Region.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Assessment</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#vergleich">Databricks vs. Snowflake</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> EU-Region & DSGVO</span>
                    <span className="flex items-center gap-1.5"><Brain className="w-4 h-4 text-primary" /> Daten & KI vereint</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Hero visual: Lakehouse pipeline */}
                <div className="relative">
                  <Card className="border-2 shadow-xl shadow-primary/5 overflow-hidden">
                    <CardHeader className="border-b border-border py-3">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center justify-center p-1 rounded bg-primary/10">
                          <Database className="w-4 h-4 text-primary" />
                        </span>
                        <span className="font-mono text-xs text-muted-foreground">lakehouse.dbx</span>
                        <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> aktiv
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3 rounded-xl border-2 border-primary/40 bg-primary/5 px-3.5 py-2.5">
                        <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0"><Database className="w-5 h-5 text-primary" /></div>
                        <div className="min-w-0"><div className="text-[10px] uppercase tracking-wider text-primary font-medium">Quelle</div><div className="text-sm font-semibold truncate">Rohdaten aus Quellsystemen</div></div>
                      </div>
                      {[
                        { icon: Layers, label: "Delta Lake", title: "Bronze, Silber, Gold" },
                        { icon: ShieldCheck, label: "Unity Catalog", title: "Governance & Zugriff" },
                        { icon: Brain, label: "MLflow", title: "Modell in Produktion" },
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
                    <Layers className="w-3.5 h-3.5 text-primary" /> Lakehouse-Architektur
                  </div>
                  <div className="hidden lg:flex absolute -bottom-4 -left-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium">
                    <Lock className="w-3.5 h-3.5 text-primary" /> EU-Region & DSGVO
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was ist Databricks und für wen lohnt es sich?</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p><strong className="text-foreground">Databricks</strong> ist die Plattform, die das <strong className="text-foreground">Data Lakehouse</strong> populär gemacht hat. Ein Lakehouse vereint die günstige Speicherung eines Data Lake mit der Struktur und Performance eines Data Warehouse, sodass Data Engineering, Analytics und KI auf einer einzigen, offenen Datenbasis laufen.</p>
                    <p>Das Fundament bilden <strong className="text-foreground">Delta Lake</strong> als transaktionssicheres Speicherformat, <strong className="text-foreground">Unity Catalog</strong> für Governance und Berechtigungen sowie <strong className="text-foreground">MLflow</strong> für den gesamten Machine-Learning-Lebenszyklus. Statt Daten ständig zwischen Lake, Warehouse und ML-Tools zu kopieren, bleibt alles an einem Ort.</p>
                    <p>Databricks lohnt sich vor allem dort, wo <strong className="text-foreground">Data Engineering und KI zusammenkommen</strong> und große oder unstrukturierte Datenmengen im Spiel sind. Geht es rein um SQL-Reporting, ist Snowflake oft die einfachere Wahl. Wir beraten Sie <strong className="text-foreground">ehrlich</strong>, welche Plattform zu Ihren Daten, Zielen und Ihrem Budget passt.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Delta Lake</Badge>
                    <Badge variant="secondary" className="rounded-full">Unity Catalog</Badge>
                    <Badge variant="secondary" className="rounded-full">MLflow</Badge>
                    <Badge variant="secondary" className="rounded-full">Data Engineering</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Databricks auf einen Blick</CardTitle>
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
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum ein Lakehouse?</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Wo heute Datensilos sind, steht morgen ein Lakehouse</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Überall, wo Daten verteilt liegen, Auswertungen mühsam sind und KI im Notebook hängen bleibt, schafft Databricks eine gemeinsame, verlässliche Basis.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 pl-1">Was heute passiert</div>
                  {problems.map(({ problem }, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl border bg-background"><X className="w-5 h-5 text-destructive mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{problem}</span></div>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-2 pl-1">Was das Lakehouse tut</div>
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
                <h2 className="text-3xl md:text-4xl font-bold">Mehr als nur Databricks einrichten</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Wir bauen ein Lakehouse, das produktiv trägt, und denken Governance, Kosten und KI von Anfang an mit.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="hover-lift border-2 lg:col-span-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2"><Layers className="w-6 h-6 text-primary" /></div>
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
                <h2 className="text-3xl md:text-4xl font-bold">Was wir auf Databricks umsetzen</h2>
                <p className="text-lg text-muted-foreground mt-4">Wählen Sie einen Bereich, wir zeigen konkrete Abläufe aus der Praxis.</p>
              </div>
              <Tabs defaultValue="engineering" className="w-full">
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
                            <div key={j} className="flex items-start gap-2.5 p-3 rounded-lg border bg-background"><Check className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{item}</span></div>
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
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Plattform-Vergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Databricks vs. Snowflake vs. klassisches Data Warehouse</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Welche Plattform passt? Das hängt von Ihren Daten, Ihrem KI-Anspruch und Ihrem Budget ab. Wir beraten unabhängig und ehrlich.</p>
              </div>
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[28%] font-bold text-foreground">Merkmal</TableHead>
                      <TableHead className="text-primary font-bold"><span className="inline-flex items-center gap-1.5"><Database className="w-4 h-4" />Databricks</span></TableHead>
                      <TableHead className="text-muted-foreground"><span className="inline-flex items-center gap-1.5"><Cloud className="w-4 h-4" />Snowflake</span></TableHead>
                      <TableHead className="text-muted-foreground"><span className="inline-flex items-center gap-1.5"><Server className="w-4 h-4" />Data Warehouse</span></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparison.map((row, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{row.feature}</TableCell>
                        <TableCell className="text-sm text-primary font-medium">{row.databricks}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{row.snowflake}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{row.dwh}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
              <p className="text-sm text-muted-foreground text-center mt-4">Unser Standard für daten- und KI-getriebene Projekte ist Databricks, weil Data Engineering und KI auf einer Plattform zusammenlaufen. <a href="/leistungen/snowflake" className="text-primary hover:underline">Snowflake</a> setzen wir gezielt dort ein, wo klassisches SQL-Data-Warehousing im Vordergrund steht.</p>
            </div>
          </section>

          {/* PROZESS */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unser Prozess</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Ihr Databricks-Projekt in 4 Schritten</h2>
                <p className="text-lg text-muted-foreground mt-4">Transparent, ohne Überraschungen und mit ehrlicher Plattform-Empfehlung.</p>
              </div>
              <ProcessSteps steps={steps} />
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zu Databricks</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zu Databricks</h2>
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
