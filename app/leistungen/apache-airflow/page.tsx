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
  Database, Server, Filter, Clock, GitBranch, Lock, Workflow, Brain, Gauge, ShieldCheck,
  RefreshCw, Code2, MapPin, Check, X, Search, Rocket, Phone, Settings2, BarChart3, Boxes,
  Plug, Activity, Waypoints,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Apache Airflow: Datenpipelines, ETL & Orchestrierung",
  description:
    "Apache Airflow für Datenpipelines, ETL und Workflow-Orchestrierung: Wir konzipieren, bauen und betreiben robuste DAGs, ETL/ELT- und ML-Pipelines, self-hosted in der EU und DSGVO-konform. Mit Scheduling, Monitoring, Retries und Alerting im DACH-Raum.",
  keywords:
    "Apache Airflow, Airflow, ETL, Datenpipeline, Data Pipeline, Workflow Orchestrierung, DAG, ELT, ML-Pipeline, Airflow Beratung, Airflow Agentur, Data Engineering, Airflow self-hosted, Airflow DSGVO, Workflow Automatisierung",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/apache-airflow" },
};

const faqs = [
  {
    q: "Was ist Apache Airflow und wie funktioniert es?",
    a: "Apache Airflow ist eine Open-Source-Plattform, um Datenpipelines und Workflows als Code zu definieren, zu planen und zu überwachen. Ein Workflow wird als DAG beschrieben, ein gerichteter azyklischer Graph aus einzelnen Aufgaben (Tasks) mit klaren Abhängigkeiten. Der Scheduler startet jeden Lauf nach Zeitplan oder Auslöser, führt die Tasks in der richtigen Reihenfolge aus und protokolliert jeden Schritt. Beispiel: Nachts werden Daten aus mehreren Quellen geladen, bereinigt, zusammengeführt und ins Data Warehouse geschrieben, vollautomatisch und nachvollziehbar.",
  },
  {
    q: "Wofür wird Apache Airflow eingesetzt?",
    a: "Airflow ist das Werkzeug der Wahl für alles, was als geplante, mehrstufige Datenstrecke läuft. Typische Einsätze sind ETL- und ELT-Pipelines, das Befüllen von Data Warehouses, das Aufbereiten von Daten für Reporting und BI sowie das Orchestrieren von Machine-Learning-Pipelines von der Feature-Aufbereitung über das Training bis zum Deployment. Überall, wo viele Schritte zuverlässig, wiederholbar und überwacht ablaufen müssen, spielt Airflow seine Stärken aus.",
  },
  {
    q: "Was ist ein DAG in Apache Airflow?",
    a: "DAG steht für Directed Acyclic Graph, also gerichteter azyklischer Graph. In Airflow beschreibt ein DAG eine komplette Pipeline: Welche Tasks es gibt, in welcher Reihenfolge sie laufen und welcher Schritt von welchem abhängt. Weil es ein azyklischer Graph ist, kann sich kein Schritt im Kreis selbst aufrufen. Jeder DAG wird als Python-Code geschrieben, liegt im Git und ist damit versioniert, nachvollziehbar und im Team wartbar.",
  },
  {
    q: "Ist Apache Airflow DSGVO-konform einsetzbar?",
    a: "Ja. Airflow ist Open Source und wird self-hosted betrieben, das heißt es läuft auf Ihrer eigenen Infrastruktur oder in unserer EU-Cloud. Ihre Daten verlassen den DSGVO-Raum nicht und werden nicht an einen US-Cloud-Anbieter übertragen. Damit eignet sich Airflow besonders für sensible Datenpipelines im DACH-Raum, etwa mit Mandanten-, Patienten- oder Personaldaten. Wir richten Hosting, Zugriffsrechte und Protokollierung sauber und prüfbar ein.",
  },
  {
    q: "Apache Airflow oder n8n, was passt zu mir?",
    a: "Beide orchestrieren Abläufe, sind aber für unterschiedliche Aufgaben gebaut. Airflow ist code-first und auf Daten- und ML-Pipelines mit großen Datenmengen, komplexen Abhängigkeiten und striktem Scheduling spezialisiert. n8n ist no-code und visuell und glänzt bei der Automatisierung zwischen Apps wie CRM, Mail oder Shop. Faustregel: Geht es um ETL, Data Warehouse und ML, ist Airflow richtig. Geht es um App-zu-App-Automatisierung ohne Programmierung, ist n8n die bessere Wahl. Oft kombinieren wir beide.",
  },
  {
    q: "Was kostet Apache Airflow?",
    a: "Airflow selbst ist Open Source und kostenlos, es fallen keine Lizenzgebühren und keine Kosten je Ausführung an. Zu kalkulieren sind die Infrastruktur, auf der Airflow läuft, sowie Einrichtung, Pipeline-Entwicklung und Betrieb. Gerade bei hohem Datenvolumen ist das deutlich planbarer als Cloud-Dienste, die pro Task abrechnen. Im kostenlosen Assessment rechnen wir Ihren Anwendungsfall durch und zeigen Ihnen die zu erwartenden Betriebskosten transparent auf.",
  },
  {
    q: "Können Sie bestehende Cron-Skripte oder ETL-Jobs migrieren?",
    a: "Ja. Wir analysieren Ihre vorhandenen Cron-Jobs, Skripte und Datenstrecken, schneiden sie in saubere Tasks und überführen sie schrittweise in versionierte Airflow-DAGs, ohne dass Ihre nächtlichen Läufe ausfallen. Dabei ergänzen wir das, was bei losen Skripten meist fehlt: definierte Abhängigkeiten, automatische Retries, Monitoring und Alerting. So wird aus einer fragilen Skriptsammlung eine robuste, überwachte Pipeline.",
  },
  {
    q: "Übernehmen Sie auch den laufenden Betrieb der Pipelines?",
    a: "Ja. Auf Wunsch betreiben und überwachen wir Ihre Airflow-Umgebung, reagieren auf fehlgeschlagene Läufe, optimieren Laufzeiten und passen Pipelines bei Änderungen an Quellen oder Zielsystemen an. So bleiben Ihre Datenstrecken dauerhaft zuverlässig und liefern pünktlich, statt nach dem ersten Aufsetzen langsam zu verfallen.",
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
  name: "Apache Airflow Datenpipelines & Workflow-Orchestrierung",
  serviceType: "Datenpipelines, ETL, Workflow-Orchestrierung, Apache Airflow",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "Apache Airflow für den DACH-Raum: Konzeption, Aufbau und Betrieb von DAGs, ETL/ELT- und ML-Pipelines, self-hosted in der EU und DSGVO-konform, mit Scheduling, Monitoring, Retries und Alerting.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const stats = [
  { value: "100 %", label: "Pipelines als Code" },
  { value: "24/7", label: "geplante DAG-Läufe" },
  { value: "EU", label: "self-hosted gehostet" },
  { value: "2-4 Wo.", label: "bis zur ersten Pipeline" },
];

const ataglance = [
  ["Typ", "Code-first, Python"],
  ["Workflows", "DAGs (gerichtete Graphen)"],
  ["Einsatz", "ETL, ELT, ML-Pipelines"],
  ["Scheduling", "Cron, zeit- und ereignisbasiert"],
  ["Hosting", "self-hosted in der EU"],
  ["DSGVO", "voll, Daten bleiben bei Ihnen"],
];

const problems = [
  { problem: "Nächtliche ETL-Jobs laufen als Cron-Skripte, die niemand überwacht.", solution: "Airflow plant jeden Lauf, zeigt den Status je Schritt und alarmiert sofort bei Fehlern." },
  { problem: "Fällt ein Schritt aus, steht die ganze Datenstrecke und fehlt im Reporting.", solution: "Definierte Abhängigkeiten und automatische Retries setzen genau dort wieder an, wo es klemmt." },
  { problem: "Datenpipelines stecken in Skripten auf einem Server, den nur eine Person versteht.", solution: "Pipelines als Code im Git, versioniert, nachvollziehbar und im ganzen Team wartbar." },
  { problem: "Keiner weiß, ob die Zahlen im Dashboard von heute Nacht oder von letzter Woche stammen.", solution: "Jeder DAG-Lauf ist protokolliert, mit Zeitstempel, Dauer und klarem Erfolgsstatus." },
];

const bentoFeatures = [
  { icon: Workflow, title: "DAGs, die zuverlässig durchlaufen", description: "Wir modellieren Ihre Datenstrecken als gerichtete Graphen mit klaren Abhängigkeiten, Retries und Timeouts. Fällt ein Schritt aus, setzt die Pipeline gezielt dort wieder an, statt die ganze Nacht zu verlieren. So liefern Ihre Daten pünktlich und vollständig, Lauf für Lauf." },
  { icon: Database, title: "ETL & ELT aus jeder Quelle", description: "Datenbanken, APIs, Dateien, SaaS-Tools: Wir holen Daten zuverlässig ab, bereinigen sie und laden sie ins Data Warehouse." },
  { icon: Brain, title: "ML-Pipelines orchestrieren", description: "Feature-Aufbereitung, Training, Validierung und Deployment laufen als wiederholbare, geplante und überwachte Abläufe." },
  { icon: Gauge, title: "Monitoring & Alerting", description: "Jeder Lauf ist sichtbar. Bei Fehlern oder Verzögerungen werden Sie sofort über Slack, Teams oder E-Mail informiert." },
  { icon: ShieldCheck, title: "Self-hosted in der EU", description: "Airflow läuft auf Ihrer Infrastruktur oder in unserer EU-Cloud. Ihre Daten verlassen den DSGVO-Raum nicht." },
  { icon: RefreshCw, title: "Betrieb & Optimierung", description: "Wir überwachen, warten und erweitern Ihre Pipelines, statt sie nach dem Aufsetzen sich selbst zu überlassen." },
];

const departments = [
  { value: "etl", label: "ETL & ELT", icon: Database, head: "ETL & ELT Pipelines", intro: "Daten zuverlässig abholen, bereinigen und laden, in der richtigen Reihenfolge.", items: ["Daten aus Datenbanken, APIs und Dateien zeitgesteuert abholen.", "Rohdaten bereinigen, deduplizieren und in ein einheitliches Schema bringen.", "Inkrementelle Ladestrecken, die nur neue oder geänderte Datensätze verarbeiten.", "Transformationen mit dbt oder SQL orchestriert und versioniert."] },
  { value: "ml", label: "ML-Pipelines", icon: Brain, head: "Machine-Learning-Pipelines", intro: "Vom Rohdatensatz bis zum produktiven Modell, reproduzierbar und geplant.", items: ["Feature-Aufbereitung und Trainingsdaten reproduzierbar erzeugen.", "Modelltraining zeitgesteuert oder bei neuen Daten auslösen.", "Validierung, Metriken und Freigabe als feste Schritte im DAG.", "Modelle automatisiert ausrollen und Inferenz-Jobs planen."] },
  { value: "warehouse", label: "Data Warehouse", icon: Boxes, head: "Data Warehouse befüllen", intro: "Ihr Warehouse bleibt aktuell, geordnet und geprüft.", items: ["Tabellen in Snowflake, BigQuery oder PostgreSQL zuverlässig befüllen.", "Staging-, Core- und Mart-Schichten in klarer Reihenfolge aufbauen.", "Datenqualitäts-Checks vor dem Laden ins produktive Warehouse.", "Historisierung und Snapshots für nachvollziehbare Auswertungen."] },
  { value: "reporting", label: "Reporting & BI", icon: BarChart3, head: "Reporting & Business Intelligence", intro: "Dashboards zeigen morgens, was heute Nacht berechnet wurde.", items: ["Kennzahlen nächtlich berechnen, damit Dashboards morgens aktuell sind.", "Reports erzeugen und automatisch an die richtigen Empfänger verteilen.", "Datenstände für Power BI, Tableau oder Metabase vorbereiten.", "Aggregationen und KPIs an einer zentralen, geprüften Stelle berechnen."] },
  { value: "integration", label: "Integration", icon: Plug, head: "Systeme & Quellen anbinden", intro: "Daten fließen verbunden statt abgetippt zwischen Ihren Systemen.", items: ["SaaS-Tools wie CRM, Shop oder Buchhaltung per API anbinden.", "Webhooks und Events als Auslöser für Pipelines verarbeiten.", "Daten zwischen Systemen synchron halten, in beide Richtungen.", "Bestehende Cron-Skripte schrittweise nach Airflow migrieren."] },
  { value: "betrieb", label: "Betrieb", icon: Activity, head: "Betrieb & Skalierung", intro: "Eine zentrale Sicht auf alle Pipelines, mit Retries und Alerting.", items: ["Zentrale Sicht auf alle Pipelines, Läufe und Laufzeiten.", "Automatische Retries, Timeouts und Alerting bei Fehlern.", "Ressourcen über Worker und Pools sauber skalieren.", "SLAs definieren und überwachen, damit Daten pünktlich bereitliegen."] },
];

const comparison = [
  { feature: "Schwerpunkt", airflow: "Daten- & ML-Pipelines", n8n: "App-Automatisierung", cron: "einzelne Skripte" },
  { feature: "Ansatz", airflow: "Code-first (Python)", n8n: "No-Code, visuell", cron: "Skripte je Server" },
  { feature: "ETL & große Datenmengen", airflow: "Kernstärke", n8n: "für kleine Mengen", cron: "händisch gebaut" },
  { feature: "Scheduling", airflow: "nativ, zeit- & ereignisbasiert", n8n: "einfache Zeitpläne", cron: "Crontab, starr" },
  { feature: "Abhängigkeiten & Retries", airflow: "feingranular, automatisch", n8n: "begrenzt", cron: "keine" },
  { feature: "Monitoring & Alerting", airflow: "umfassend, je Schritt", n8n: "grundlegend", cron: "keines, blind" },
  { feature: "Skalierung", airflow: "horizontal über Worker", n8n: "moderat", cron: "kaum" },
  { feature: "Hosting & DSGVO", airflow: "self-hosted in der EU", n8n: "self-hosted in der EU", cron: "eigener Server" },
];

const steps = [
  { step: "01", icon: Phone, title: "Kostenlose Erstanalyse", time: "30 Minuten", description: "Wir schauen uns Ihre Datenquellen, bestehenden Skripte und Reporting-Anforderungen an und finden die Pipeline mit dem größten Hebel. Sie wissen danach, wo der Anfang liegt." },
  { step: "02", icon: Search, title: "Konzept & Architektur", time: "Woche 1", description: "Wir entwerfen die DAGs, klären Quellen, Zielsysteme und Scheduling und legen Monitoring, Retries und Fehlerbehandlung von Anfang an fest." },
  { step: "03", icon: Settings2, title: "Aufbau & Test", time: "Woche 2 bis 3", description: "Wir bauen die Pipelines als Code, richten Airflow self-hosted in der EU ein und testen mit echten Daten, inklusive Retries, Alerting und Logging." },
  { step: "04", icon: Rocket, title: "Go-Live & Betrieb", time: "ab Woche 3", description: "Die Pipelines laufen geplant und überwacht. Wir optimieren Laufzeiten und bauen die nächste Datenstrecke, sobald Sie bereit sind." },
];

const related = [
  { href: "/leistungen/data-engineering", icon: Database, title: "Data Engineering", desc: "Datenarchitektur, Data Warehouse und Pipelines, sauber aufgebaut als Fundament für Airflow." },
  { href: "/leistungen/mlops", icon: Brain, title: "MLOps & LLMOps", desc: "Modelle trainieren, ausrollen und überwachen, mit Airflow als Taktgeber für Ihre ML-Pipelines." },
  { href: "/leistungen/n8n-automatisierung", icon: Workflow, title: "n8n Automatisierung", desc: "No-Code-Automatisierung zwischen Apps, die ideale Ergänzung zu Airflows Daten-Pipelines." },
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
      <Script id="faq-airflow" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-airflow" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <LogoBox slug="apacheairflow" alt="Apache Airflow" imgClassName="w-9 h-9" boxClassName="rounded-xl p-2 shadow-sm" />
                    <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                      Apache Airflow, Datenpipelines
                    </Badge>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Datenpipelines mit Airflow, die <span className="text-primary">pünktlich liefern</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Wir konzipieren, bauen und betreiben Ihre Apache-Airflow-Pipelines: DAGs, Scheduling, ETL/ELT und ML-Pipelines, self-hosted in der EU und DSGVO-konform. Robust dank Monitoring, automatischer Retries und Alerting, statt fragiler Cron-Skripte.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Assessment</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#vergleich">Airflow vs. n8n vs. Cron</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> Self-hosted in der EU</span>
                    <span className="flex items-center gap-1.5"><Code2 className="w-4 h-4 text-primary" /> Pipelines als Code</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Hero visual: DAG diagram */}
                <div className="relative">
                  <Card className="border-2 shadow-xl shadow-primary/5 overflow-hidden">
                    <CardHeader className="border-b border-border py-3">
                      <div className="flex items-center gap-2">
                        <LogoBox slug="apacheairflow" alt="Apache Airflow" imgClassName="w-4 h-4" boxClassName="p-1 rounded" />
                        <span className="font-mono text-xs text-muted-foreground">daily_etl.dag</span>
                        <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> aktiv
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3 rounded-xl border-2 border-primary/40 bg-primary/5 px-3.5 py-2.5">
                        <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0"><Clock className="w-5 h-5 text-primary" /></div>
                        <div className="min-w-0"><div className="text-[10px] uppercase tracking-wider text-primary font-medium">Scheduler</div><div className="text-sm font-semibold truncate">Täglich 02:00 Uhr</div></div>
                      </div>
                      {[
                        { icon: Database, label: "Extract", title: "Daten aus Quellen laden" },
                        { icon: Filter, label: "Transform", title: "Bereinigen & zusammenführen" },
                        { icon: Server, label: "Load", title: "Ins Data Warehouse schreiben" },
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
                    <GitBranch className="w-3.5 h-3.5 text-primary" /> DAGs als Code
                  </div>
                  <div className="hidden lg:flex absolute -bottom-4 -left-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium">
                    <Lock className="w-3.5 h-3.5 text-primary" /> Self-hosted in der EU
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was ist Apache Airflow und wann lohnt es sich?</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p><strong className="text-foreground">Apache Airflow</strong> ist die führende Open-Source-Plattform, um Datenpipelines als Code zu definieren, zu planen und zu überwachen. Jeder Workflow ist ein <strong className="text-foreground">DAG</strong>, ein gerichteter Graph aus Aufgaben mit klaren Abhängigkeiten. Der Scheduler startet jeden Lauf, hält die Reihenfolge ein und protokolliert jeden Schritt.</p>
                    <p>Die Stärke von Airflow ist die <strong className="text-foreground">Verlässlichkeit</strong> bei komplexen Datenstrecken: ETL und ELT, das Befüllen von Data Warehouses und das Orchestrieren von ML-Pipelines. Wo lose Cron-Skripte still scheitern, liefert Airflow definierte Abhängigkeiten, automatische Retries und volle Sichtbarkeit über jeden Lauf.</p>
                    <p>Genau hier setzen wir an: Wir bauen Ihre Pipelines <strong className="text-foreground">code-first</strong>, versioniert im Git und self-hosted in der EU, damit Ihre Daten den DSGVO-Raum nicht verlassen. Sie bekommen Datenstrecken, die pünktlich liefern und die Ihr Team versteht, statt einer Blackbox auf einem einzelnen Server.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">DAGs erstellen</Badge>
                    <Badge variant="secondary" className="rounded-full">ETL-Pipelines</Badge>
                    <Badge variant="secondary" className="rounded-full">Workflow-Orchestrierung</Badge>
                    <Badge variant="secondary" className="rounded-full">Data Engineering</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Apache Airflow auf einen Blick</CardTitle>
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
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum orchestrieren?</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Wo heute Cron-Skripte sind, läuft morgen ein DAG</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Überall, wo Daten nachts geladen, transformiert und verteilt werden, übernimmt Airflow: geplant, überwacht und ohne stille Ausfälle.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 pl-1">Was heute passiert</div>
                  {problems.map(({ problem }, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl border bg-background"><X className="w-5 h-5 text-destructive mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{problem}</span></div>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-2 pl-1">Was die Orchestrierung tut</div>
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
                <h2 className="text-3xl md:text-4xl font-bold">Mehr als ein paar Skripte planen</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Wir bauen Datenpipelines, die produktiv halten, und denken Datenschutz, Monitoring und Betrieb von Anfang an mit.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="hover-lift border-2 lg:col-span-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2"><Workflow className="w-6 h-6 text-primary" /></div>
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
                <h2 className="text-3xl md:text-4xl font-bold">Was wir mit Airflow orchestrieren</h2>
                <p className="text-lg text-muted-foreground mt-4">Wählen Sie einen Bereich, wir zeigen konkrete Pipelines aus der Praxis.</p>
              </div>
              <Tabs defaultValue="etl" className="w-full">
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
                            <div key={j} className="flex items-start gap-2.5 p-3 rounded-lg border bg-background"><Waypoints className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{item}</span></div>
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
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Tool-Vergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Apache Airflow vs. n8n vs. Cron-Skripte</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Welches Werkzeug passt? Das hängt davon ab, ob es um Daten- und ML-Pipelines, um App-Automatisierung oder um simple Zeitpläne geht. Wir beraten unabhängig.</p>
              </div>
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[28%] font-bold text-foreground">Merkmal</TableHead>
                      <TableHead className="text-primary font-bold"><span className="inline-flex items-center gap-1.5"><LogoBox slug="apacheairflow" alt="Apache Airflow" imgClassName="w-4 h-4" boxClassName="p-0.5" />Airflow</span></TableHead>
                      <TableHead className="text-muted-foreground"><span className="inline-flex items-center gap-1.5"><LogoBox slug="n8n" alt="n8n" imgClassName="w-4 h-4" boxClassName="p-0.5" />n8n</span></TableHead>
                      <TableHead className="text-muted-foreground"><span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4" />Cron-Skripte</span></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparison.map((row, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{row.feature}</TableCell>
                        <TableCell className="text-sm text-primary font-medium">{row.airflow}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{row.n8n}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{row.cron}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
              <p className="text-sm text-muted-foreground text-center mt-4">Für Daten- und ML-Pipelines ist <strong className="text-foreground">Airflow</strong> unser Standard, weil es Scheduling, Abhängigkeiten und Monitoring vereint. Für App-zu-App-Automatisierung ergänzen wir gezielt <a href="/leistungen/n8n-automatisierung" className="text-primary hover:underline">n8n</a>. Beides self-hosted in der EU.</p>
            </div>
          </section>

          {/* PROZESS */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unser Prozess</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Ihr Pipeline-Projekt in 4 Schritten</h2>
                <p className="text-lg text-muted-foreground mt-4">Transparent, ohne Überraschungen und mit ehrlicher Architekturempfehlung.</p>
              </div>
              <ProcessSteps steps={steps} />
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zu Apache Airflow</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zu Apache Airflow</h2>
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
