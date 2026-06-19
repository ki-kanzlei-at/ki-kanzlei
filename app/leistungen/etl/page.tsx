import type { Metadata } from "next";
import { serviceLogos } from "@/lib/serviceLogos";
import Script from "next/script";
import { NavigationHome } from "@/components/NavigationHome";
import { ModelLogoStrip } from "@/components/ModelLogoStrip";
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
  Database, Server, Cloud, Boxes, Layers, Workflow, Waypoints, Filter, Check, X, Shield, ShieldCheck,
  Lock, MapPin, ArrowRightLeft, RefreshCw, Activity, Gauge, Plug, BarChart3, Brain, Phone, Search,
  Settings2, Rocket, Clock, Wand2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ETL & Datenintegration: Data Pipelines aus der EU",
  description:
    "ETL und ELT vom Profi: Wir bauen robuste Data Pipelines, die verstreute Quellen zu einer verlässlichen Datenbasis konsolidieren. Self-hosted in der EU, DSGVO-konform, mit Monitoring und Fehlerbehandlung, als Fundament für Analytics und KI im DACH-Raum.",
  keywords:
    "ETL, Datenintegration, Data Pipeline, ELT, ETL Tool, Datenpipeline, Datenmigration, ETL Prozess, Extract Transform Load, Data Pipeline Tool, Datenintegration DSGVO, ETL Beratung, Data Warehouse beladen",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/etl" },
};

const faqs = [
  {
    q: "Was ist ETL und wie läuft ein ETL-Prozess ab?",
    a: "ETL steht für Extract, Transform, Load. Im ersten Schritt werden Daten aus den Quellen extrahiert, etwa aus CRM, ERP, Datenbanken, APIs oder CSV-Dateien. Im zweiten Schritt werden sie transformiert, also bereinigt, vereinheitlicht, zusammengeführt und auf Qualität geprüft. Im dritten Schritt werden die fertigen Daten in ein Zielsystem geladen, meist ein Data Warehouse oder einen Data Lake. So entsteht aus verstreuten Quellen eine einzige, verlässliche Datenbasis, auf der Reporting, Analytics und KI aufsetzen können.",
  },
  {
    q: "Was ist der Unterschied zwischen ETL und ELT?",
    a: "Bei ETL werden die Daten erst transformiert und dann geladen, die Aufbereitung passiert also vor dem Zielsystem. Bei ELT (Extract, Load, Transform) werden die Rohdaten zuerst ins Ziel geladen und dort transformiert, typischerweise direkt in einer leistungsstarken Cloud-Datenplattform. ELT spielt seine Stärken bei großen Datenmengen und modernen Warehouses aus, ETL ist oft passender, wenn Daten schon vor dem Laden streng bereinigt oder anonymisiert werden müssen. Wir wählen je nach Ihren Quellen, Ihrem Zielsystem und Ihren Datenschutzanforderungen den richtigen Ansatz, oft eine Kombination aus beidem.",
  },
  {
    q: "Ist Ihre Datenintegration DSGVO-konform?",
    a: "Ja, das ist unser Ausgangspunkt. Wir betreiben Ihre Data Pipelines self-hosted in der EU, auf Wunsch in Ihrer eigenen Infrastruktur. Ihre Daten verlassen Ihren Verantwortungsbereich nicht und landen nicht auf US-Servern. Wo es sinnvoll ist, anonymisieren oder pseudonymisieren wir personenbezogene Daten bereits im Transformationsschritt. So erfüllen Sie die Anforderungen der DSGVO und behalten volle Datensouveränität, auch wenn später Analytics oder KI auf den Daten aufsetzen.",
  },
  {
    q: "Was ist der Unterschied zwischen ETL und Automatisierung mit n8n?",
    a: "Beide bewegen Daten, verfolgen aber unterschiedliche Ziele. n8n automatisiert Abläufe zwischen Anwendungen, etwa einen Lead vom Formular ins CRM und in Slack, ereignisbasiert und in Echtzeit. ETL ist auf Datenintegration spezialisiert, also auf das verlässliche Zusammenführen großer Datenmengen aus vielen Quellen zu einer sauberen Datenbasis, meist im Batch und mit strenger Transformation und Datenqualität. Für App-Automatisierung empfehlen wir n8n, für eine belastbare Datenbasis hinter Analytics und KI bauen wir echte ETL- und ELT-Pipelines. Oft ergänzen sich beide.",
  },
  {
    q: "Welche Datenquellen und Ziele können Sie anbinden?",
    a: "Praktisch alles, was eine Schnittstelle hat. Auf der Quellenseite binden wir relationale Datenbanken wie PostgreSQL, MySQL oder SQL Server an, dazu CRM- und ERP-Systeme, Shops, Marketing-Tools, REST- und GraphQL-APIs sowie Dateien wie CSV oder Excel. Als Ziel dienen Data Warehouses und Plattformen wie Snowflake, BigQuery oder PostgreSQL ebenso wie Data Lakes. Gibt es für eine Quelle keinen fertigen Konnektor, bauen wir die Anbindung über deren API.",
  },
  {
    q: "Wie sorgen Sie für Datenqualität, Monitoring und Fehlerbehandlung?",
    a: "Datenqualität ist in jeder Pipeline fest verankert. Wir definieren Regeln, die Dubletten entfernen, Formate vereinheitlichen, Pflichtfelder prüfen und Ausreißer markieren, bevor Daten ins Ziel gelangen. Jeder Lauf wird protokolliert und überwacht. Schlägt ein Schritt fehl, gibt es automatische Wiederholungen und einen Alert an Ihr Team, statt eines stillen Fehlers, der erst Wochen später auffällt. So können Sie sich auf die Zahlen verlassen, mit denen Sie arbeiten.",
  },
  {
    q: "Was kostet eine ETL-Pipeline und welche Tools setzen Sie ein?",
    a: "Die Kosten hängen von der Anzahl der Quellen, der Komplexität der Transformationen und dem Datenvolumen ab. Wir arbeiten bevorzugt mit Open-Source-Werkzeugen wie Airbyte, dbt und Apache Airflow, die wir self-hosted in der EU betreiben. Dadurch fallen keine nutzungsabhängigen Lizenzgebühren je Datensatz an, sondern planbare Fixkosten für Betrieb und Wartung. Im kostenlosen Assessment sichten wir Ihre Quellen und Ziele und nennen Ihnen einen klaren Rahmen, bevor wir starten.",
  },
  {
    q: "Übernehmen Sie auch Datenmigration und den laufenden Betrieb?",
    a: "Ja. Wir migrieren Daten aus Altsystemen sauber in neue Plattformen, inklusive Bereinigung, Mapping und Validierung, damit beim Systemwechsel nichts verloren geht oder verfälscht wird. Nach dem Go-Live übernehmen wir auf Wunsch den Betrieb Ihrer Pipelines, überwachen die Läufe, reagieren auf Änderungen an Quellen oder Zielen und erweitern die Integration, wenn neue Datenquellen dazukommen. So bleibt Ihre Datenbasis dauerhaft aktuell und verlässlich.",
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
  name: "ETL & Datenintegration",
  serviceType: "ETL, ELT, Datenintegration, Data Pipelines",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "ETL und Datenintegration für Unternehmen im DACH-Raum: robuste Data Pipelines (ETL und ELT), die verstreute Quellen zu einer verlässlichen Datenbasis konsolidieren, self-hosted in der EU, DSGVO-konform und als Fundament für Analytics und KI.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const stats = [
  { value: "EU", label: "Hosting & Datenstandort" },
  { value: "100+", label: "anbindbare Quellen & Ziele" },
  { value: "24/7", label: "laufen Ihre Pipelines" },
  { value: "2-4 Wo.", label: "bis zur ersten Pipeline" },
];

const ataglance = [
  ["Verfahren", "Extract, Transform, Load"],
  ["Varianten", "ETL und ELT"],
  ["Quellen", "DB, API, CSV, ERP, CRM"],
  ["Ziele", "Warehouse, Data Lake, KI"],
  ["Hosting", "self-hosted in der EU"],
  ["DSGVO", "volle Datensouveränität"],
];

const problems = [
  { problem: "Zahlen liegen in CRM, ERP, Shop und Excel, jede Quelle erzählt eine andere Wahrheit.", solution: "Eine ETL-Pipeline führt alle Quellen zusammen, zu einer einzigen verlässlichen Datenbasis." },
  { problem: "Reports werden jeden Monat von Hand aus mehreren Exporten zusammenkopiert.", solution: "Die Datenpipeline lädt aktuelle Daten automatisch ins Warehouse, Reports sind immer frisch." },
  { problem: "Niemand weiß, ob die Zahlen wirklich stimmen, Dubletten und Tippfehler inklusive.", solution: "Transformations- und Validierungsregeln bereinigen, mappen und prüfen jeden Datensatz." },
  { problem: "Wenn ein nächtlicher Import scheitert, merkt es niemand bis zum Quartalsende.", solution: "Monitoring, Alerts und automatische Retries melden Fehler sofort und holen Läufe nach." },
];

const bentoFeatures = [
  { icon: Workflow, title: "Pipelines, die zuverlässig durchlaufen", description: "Wir bauen Ihre ETL- und ELT-Strecken robust auf: mit klarer Logik, inkrementellen Ladevorgängen, Tests und Fehlerbehandlung. Keine fragilen Skripte, die beim ersten Sonderfall brechen, sondern Data Pipelines, auf die sich Ihr Reporting und Ihre KI täglich verlassen können." },
  { icon: Plug, title: "Über 100 Quellen und Ziele verbinden", description: "Datenbanken, ERP, CRM, Shops, APIs und Dateien anbinden und in Ihr Warehouse oder Ihren Data Lake laden. Fehlt ein Konnektor, bauen wir ihn über die API." },
  { icon: Filter, title: "Transformation, Bereinigung & Mapping", description: "Wir vereinheitlichen Formate, entfernen Dubletten, führen Quellen zusammen und prüfen jeden Datensatz, bevor er ins Ziel gelangt." },
  { icon: Activity, title: "Monitoring & Fehlerbehandlung", description: "Jeder Lauf wird überwacht. Bei Fehlern gibt es Retries und Alerts, statt eines stillen Ausfalls, der erst Wochen später auffällt." },
  { icon: Shield, title: "DSGVO & EU-Hosting", description: "Ihre Pipelines laufen self-hosted in der EU, auf Wunsch in Ihrer Infrastruktur. Ihre Daten bleiben bei Ihnen, mit voller Datensouveränität." },
  { icon: Brain, title: "Fundament für Analytics & KI", description: "Eine saubere, konsolidierte Datenbasis ist die Voraussetzung für verlässliche Dashboards, Machine Learning und KI-Anwendungen. Genau die liefern wir." },
];

const departments = [
  { value: "warehouse", label: "Data Warehouse", icon: Boxes, head: "Data Warehouse & Lakehouse beladen", intro: "Alle relevanten Quellen fließen automatisiert in Ihr zentrales Warehouse.", items: ["Daten aus CRM, ERP, Shop und Datenbanken regelmäßig ins Warehouse laden.", "Inkrementelle Ladestrecken, die nur neue und geänderte Datensätze übertragen.", "Historisierung, damit Sie Entwicklungen über die Zeit auswerten können.", "Modellierung der Daten in saubere, abfragefreundliche Tabellen."] },
  { value: "migration", label: "Datenmigration", icon: ArrowRightLeft, head: "Datenmigration & Systemwechsel", intro: "Beim Wechsel auf ein neues System bringen wir Ihre Daten sicher mit.", items: ["Daten aus Altsystemen extrahieren, bereinigen und mappen.", "Dubletten und Inkonsistenzen vor der Übernahme bereinigen.", "Testläufe und Abgleich, damit Quelldaten und Zieldaten zusammenpassen.", "Migration ohne langen Stillstand, schrittweise oder im Stichtagsbetrieb."] },
  { value: "analytics", label: "Analytics & BI", icon: BarChart3, head: "Analytics, BI & Reporting", intro: "Ihre Dashboards ziehen aus einer einzigen, verlässlichen Quelle.", items: ["Kennzahlen aus mehreren Systemen zu einem Gesamtbild zusammenführen.", "Tägliche oder stündliche Aktualisierung statt manueller Exporte.", "Konsistente Definitionen, damit jede Abteilung dieselben Zahlen sieht.", "Anbindung Ihrer BI-Tools wie Power BI, Looker oder Metabase."] },
  { value: "ki", label: "KI & ML", icon: Brain, head: "Fundament für KI & Machine Learning", intro: "Gute KI braucht gute Daten, wir liefern das saubere Fundament.", items: ["Trainings- und Feature-Daten aus verteilten Quellen aufbereiten.", "Datenqualität und Konsistenz sicherstellen, bevor Modelle lernen.", "Pipelines, die KI-Anwendungen kontinuierlich mit frischen Daten versorgen.", "Anonymisierung sensibler Daten direkt im Transformationsschritt."] },
  { value: "sync", label: "System-Sync", icon: RefreshCw, head: "Systeme synchron halten", intro: "Verschiedene Tools sprechen dieselbe Datenwahrheit.", items: ["Stamm- und Bewegungsdaten regelmäßig zwischen Systemen abgleichen.", "Änderungen aus dem führenden System in alle Zielsysteme verteilen.", "Konflikte erkennen und nach klaren Regeln auflösen.", "Geplante Läufe oder ereignisbasierte Aktualisierung je nach Bedarf."] },
  { value: "quality", label: "Datenqualität", icon: Gauge, head: "Datenqualität & Governance", intro: "Sie können sich auf jede Zahl verlassen, die aus der Pipeline kommt.", items: ["Validierungsregeln für Formate, Pflichtfelder und Wertebereiche.", "Dubletten erkennen, zusammenführen und bereinigen.", "Vollständige Protokollierung, wer welche Daten wann verarbeitet hat.", "Klare Verantwortlichkeiten und nachvollziehbare Datenherkunft."] },
];

const comparison = [
  { feature: "Datenquellen verbinden", manual: "manuell, fehleranfällig", saas: "viele Konnektoren", eu: "über 100 Quellen plus jede API" },
  { feature: "Transformation & Datenqualität", manual: "in Excel von Hand", saas: "eingeschränkt", eu: "voll, Regeln & Tests" },
  { feature: "Hosting & Datenstandort", manual: "lokal verstreut", saas: "meist USA", eu: "EU, Ihre Infrastruktur" },
  { feature: "DSGVO-Datensouveränität", manual: "unklar", saas: "eingeschränkt", eu: "voll, Daten bleiben bei Ihnen" },
  { feature: "Monitoring & Fehlerbehandlung", manual: "keins", saas: "Basis", eu: "Alerts, Logs, Retries" },
  { feature: "Kosten bei hohem Volumen", manual: "versteckte Zeitkosten", saas: "steigen mit Datenmenge", eu: "planbare Fixkosten" },
  { feature: "Analytics- & KI-Readiness", manual: "gering", saas: "mittel", eu: "hoch, sauberes Fundament" },
];

const steps = [
  { step: "01", icon: Phone, title: "Kostenlose Erstanalyse", time: "30 Minuten", description: "Wir sichten gemeinsam Ihre Datenquellen, Zielsysteme und den größten Engpass. Sie wissen danach, welche Pipeline den meisten Nutzen bringt." },
  { step: "02", icon: Search, title: "Architektur & Tool-Wahl", time: "Woche 1", description: "Wir entwerfen die Datenarchitektur, wählen zwischen ETL und ELT und legen Quellen, Transformationen und Zielmodell fest, transparent und nachvollziehbar." },
  { step: "03", icon: Settings2, title: "Aufbau & Test", time: "Woche 2 bis 3", description: "Wir bauen die Pipelines, implementieren Transformationen und Qualitätsregeln und testen intensiv, inklusive Monitoring und Fehlerbehandlung." },
  { step: "04", icon: Rocket, title: "Go-Live & Betrieb", time: "ab Woche 3 bis 4", description: "Die Pipelines laufen produktiv. Wir überwachen, optimieren und binden neue Quellen an, sobald Sie weitere Daten konsolidieren wollen." },
];

const related = [
  { href: "/leistungen/data-engineering", icon: Layers, title: "Data Engineering", desc: "Das große Ganze rund um Ihre Daten: Architektur, Pipelines und Plattform, von der Quelle bis zur Auswertung." },
  { href: "/leistungen/apache-airflow", icon: Waypoints, title: "Apache Airflow", desc: "Orchestrierung Ihrer ETL-Jobs: geplante, voneinander abhängige Workflows mit Wiederholungen und voller Transparenz." },
  { href: "/leistungen/snowflake", icon: Cloud, title: "Snowflake Data Cloud", desc: "Die Cloud-Datenplattform als Ziel Ihrer Pipelines, skalierbar und mit getrenntem Storage und Compute." },
];

export default function Page() {
  return (
    <>
      <Script id="faq-etl" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-etl" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 border border-primary/20 rounded-xl p-2.5"><Filter className="w-7 h-7 text-primary" /></div>
                    <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                      ETL, Datenintegration
                    </Badge>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    ETL und Datenintegration für eine <span className="text-primary">verlässliche Datenbasis</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Wir bauen robuste ETL- und ELT-Pipelines, die Ihre verstreuten Quellen zu einer sauberen, verlässlichen Datenbasis zusammenführen. Self-hosted in der EU, DSGVO-konform, mit Monitoring und Fehlerbehandlung, als Fundament für Analytics und KI.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Assessment</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#vergleich">Ansätze im Vergleich</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Brain className="w-4 h-4 text-primary" /> Fundament für KI</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Hero visual: ETL pipeline diagram */}
                <div className="relative">
                  <Card className="border-2 shadow-xl shadow-primary/5 overflow-hidden">
                    <CardHeader className="border-b border-border py-3">
                      <div className="flex items-center gap-2">
                        <div className="bg-primary/10 border border-primary/20 rounded p-1"><Filter className="w-3.5 h-3.5 text-primary" /></div>
                        <span className="font-mono text-xs text-muted-foreground">umsatz.pipeline</span>
                        <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> aktiv
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3 rounded-xl border-2 border-primary/40 bg-primary/5 px-3.5 py-2.5">
                        <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0"><Database className="w-5 h-5 text-primary" /></div>
                        <div className="min-w-0"><div className="text-[10px] uppercase tracking-wider text-primary font-medium">Extract</div><div className="text-sm font-semibold truncate">Quellen: CRM, ERP, CSV</div></div>
                      </div>
                      {[
                        { icon: Wand2, label: "Transform", title: "Bereinigen & Mappen" },
                        { icon: ShieldCheck, label: "Validieren", title: "Datenqualität prüfen" },
                        { icon: Boxes, label: "Load", title: "Ins Data Warehouse laden" },
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
                    <Plug className="w-3.5 h-3.5 text-primary" /> 100+ Quellen
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

          <ModelLogoStrip
            caption="ETL und Datenintegration mit bewährten Tools"
            items={[
              { slug: "apacheairflow", name: "Apache Airflow" },
              { slug: "apachekafka", name: "Apache Kafka" },
              { slug: "apachespark", name: "Apache Spark" },
              { slug: "python", name: "Python" },
              { slug: "postgresql", name: "PostgreSQL" },
              { slug: "n8n", name: "n8n" },
            ]}
          />

          {/* DEFINITION */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Kurz erklärt</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was ist ETL und wozu Datenintegration?</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p><strong className="text-foreground">ETL</strong> steht für Extract, Transform, Load und ist das klassische Verfahren der Datenintegration. Daten werden aus vielen Quellen extrahiert, bereinigt und transformiert und schließlich in ein Zielsystem geladen. Bei <strong className="text-foreground">ELT</strong> dreht sich die Reihenfolge: erst laden, dann im Zielsystem transformieren. Beide Wege führen zu einer sauberen, zentralen Datenbasis.</p>
                    <p>Eine <strong className="text-foreground">Data Pipeline</strong> ist der automatisierte Weg, den Ihre Daten dabei nehmen: von verstreuten Systemen wie CRM, ERP, Shop und Datenbanken hin zu einem Data Warehouse oder Data Lake. Ohne diese Datenpipeline arbeitet jede Abteilung mit eigenen Exporten, und niemand traut den Zahlen so richtig.</p>
                    <p>Wir bauen diese Pipelines robust und <strong className="text-foreground">self-hosted in der EU</strong>, mit Monitoring, Fehlerbehandlung und Datenqualität von Anfang an. So entsteht das verlässliche Fundament für Analytics, BI und KI, DSGVO-konform und ohne dass Ihre Daten auf fremden Servern landen. Geht es dagegen um App-Automatisierung in Echtzeit, ist <a href="/leistungen/n8n-automatisierung" className="text-primary hover:underline">n8n</a> das passendere Werkzeug, wir grenzen das klar ab.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Data Pipeline</Badge>
                    <Badge variant="secondary" className="rounded-full">ELT</Badge>
                    <Badge variant="secondary" className="rounded-full">Datenmigration</Badge>
                    <Badge variant="secondary" className="rounded-full">Data Warehouse</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">ETL auf einen Blick</CardTitle>
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
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum Datenintegration?</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Aus Datensilos wird eine verlässliche Quelle</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Überall, wo Daten heute in getrennten Systemen liegen und von Hand zusammengeführt werden, schafft eine ETL-Pipeline Klarheit: automatisiert, geprüft und immer aktuell.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 pl-1">Was heute passiert</div>
                  {problems.map(({ problem }, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl border bg-background"><X className="w-5 h-5 text-destructive mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{problem}</span></div>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-2 pl-1">Was die Pipeline tut</div>
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
                <h2 className="text-3xl md:text-4xl font-bold">Mehr als Daten von A nach B schieben</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Wir bauen Data Pipelines, die produktiv halten, und denken Datenschutz, Datenqualität und Kosten von Anfang an mit.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold">Was wir mit ETL und ELT lösen</h2>
                <p className="text-lg text-muted-foreground mt-4">Wählen Sie einen Bereich, wir zeigen konkrete Abläufe aus der Praxis.</p>
              </div>
              <Tabs defaultValue="warehouse" className="w-full">
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
                            <div key={j} className="flex items-start gap-2.5 p-3 rounded-lg border bg-background"><Database className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{item}</span></div>
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
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Ansätze im Vergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Manuell vs. Cloud-ETL vs. Self-hosted in der EU</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Welcher Weg zur Datenintegration passt? Das hängt von Ihren Quellen, Ihrem Volumen und Ihrem Anspruch an Datenschutz ab. Wir beraten unabhängig.</p>
              </div>
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[28%] font-bold text-foreground">Merkmal</TableHead>
                      <TableHead className="text-muted-foreground">Manuell / CSV</TableHead>
                      <TableHead className="text-muted-foreground"><span className="inline-flex items-center gap-1.5"><Cloud className="w-4 h-4" />Cloud-ETL (US)</span></TableHead>
                      <TableHead className="text-primary font-bold"><span className="inline-flex items-center gap-1.5"><Server className="w-4 h-4" />Self-hosted (EU)</span></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparison.map((row, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{row.feature}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{row.manual}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{row.saas}</TableCell>
                        <TableCell className="text-sm text-primary font-medium">{row.eu}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
              <p className="text-sm text-muted-foreground text-center mt-4">Unser Standard für den DACH-Raum sind <a href="/leistungen/data-engineering" className="text-primary hover:underline">self-hosted Pipelines in der EU</a>, weil Ihre Daten dort bei Ihnen bleiben. Cloud-ETL-Dienste setzen wir gezielt dort ein, wo Tempo zählt und keine sensiblen Daten betroffen sind.</p>
            </div>
          </section>

          {/* PROZESS */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unser Prozess</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Ihr Datenintegrations-Projekt in 4 Schritten</h2>
                <p className="text-lg text-muted-foreground mt-4">Transparent, ohne Überraschungen und mit ehrlicher Architektur-Empfehlung.</p>
              </div>
              <ProcessSteps steps={steps} />
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zu ETL und Datenintegration</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zu ETL</h2>
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
