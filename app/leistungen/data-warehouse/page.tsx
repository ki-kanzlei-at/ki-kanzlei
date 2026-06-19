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
  Database, Layers, Cloud, ArrowRightLeft, Workflow, Shield, ShieldCheck, Lock, Check, X,
  Search, Rocket, Phone, Clock, MapPin, RefreshCw, BarChart3, Brain, Calculator, TrendingUp,
  Cog, Server, Gauge,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cloud Data Warehouse Beratung & Aufbau (DWH)",
  description:
    "Data Warehouse Beratung für den DACH-Raum: Wir konzipieren, bauen und migrieren moderne Cloud Data Warehouses auf Snowflake, BigQuery und Databricks als Analytics-Fundament für Reporting und KI. EU-Region, DSGVO, herstellerneutral, mit Kostenkontrolle.",
  keywords:
    "Data Warehouse, Cloud Data Warehouse, DWH, Data Warehouse Beratung, Datenlager, Analytics Fundament, Snowflake, BigQuery, Databricks, Data Warehouse Aufbau, Data Warehouse Migration, Single Source of Truth, DSGVO Data Warehouse, Data Warehouse DACH",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/data-warehouse" },
};

const faqs = [
  {
    q: "Was ist ein Data Warehouse und wofür brauchen wir es?",
    a: "Ein Data Warehouse, kurz DWH oder auf Deutsch Datenlager, ist eine zentrale Datenbank, die Daten aus all Ihren Systemen wie CRM, ERP, Shop und Buchhaltung zusammenführt, historisiert und für Auswertungen aufbereitet. Statt dass jedes Team mit eigenen Excel-Listen rechnet, entsteht eine einzige, abgestimmte Datenbasis, die sogenannte Single Source of Truth. Auf diesem Fundament bauen verlässliche Dashboards, sauberes Controlling und ernstzunehmende KI-Projekte auf. Ohne ein Data Warehouse scheitern Analytics und KI oft schlicht an widersprüchlichen oder unvollständigen Daten.",
  },
  {
    q: "Was ist der Unterschied zwischen Data Warehouse, Data Lake und Lakehouse?",
    a: "Ein Data Warehouse speichert strukturierte, aufbereitete Daten, optimiert für schnelle Auswertungen und Reporting. Ein Data Lake nimmt dagegen große Mengen roher Daten in jedem Format auf, auch unstrukturiert, und eignet sich gut für Data Science. Ein Lakehouse, wie es Databricks umsetzt, verbindet beide Welten: die Flexibilität des Data Lake mit der Struktur und Performance eines Warehouse. Welcher Ansatz passt, hängt von Ihren Datenarten und Zielen ab. Für klassisches Reporting reicht oft ein Cloud Data Warehouse, für kombinierte Daten- und KI-Vorhaben ist ein Lakehouse häufig die bessere Wahl.",
  },
  {
    q: "Welche Cloud-Plattform ist die richtige: Snowflake, BigQuery oder Databricks?",
    a: "Das hängt von Ihrem Anwendungsfall ab. Snowflake punktet mit einfachem Betrieb, elastischer Skalierung und unkompliziertem Data Sharing und ist eine starke Wahl für klassisches Data Warehousing und BI. BigQuery ist serverlos, fügt sich nahtlos in das Google-Ökosystem ein und rechnet nutzungsbasiert ab. Databricks vereint Data Engineering, Analytics und Machine Learning auf einer Lakehouse-Plattform und ist ideal, wenn Daten und KI eng zusammenspielen. Wir beraten herstellerneutral und wählen die Plattform nach Ihren Anforderungen, nicht nach Anbieter.",
  },
  {
    q: "Ist ein Cloud Data Warehouse DSGVO-konform?",
    a: "Ja, wenn es richtig aufgesetzt wird. Snowflake, BigQuery und Databricks bieten alle EU-Regionen an, in denen Ihre Daten physisch in der Europäischen Union liegen. Hinzu kommen Auftragsverarbeitungsvertrag, durchdachte Rollen- und Zugriffskonzepte, Verschlüsselung und nachvollziehbare Protokollierung. Wir achten von Anfang an auf eine saubere Governance, damit Ihr Data Warehouse den Anforderungen der DSGVO entspricht und auch bei einer Prüfung Bestand hat.",
  },
  {
    q: "Wie lange dauert der Aufbau eines Data Warehouse?",
    a: "Ein erstes, produktives Data Warehouse mit den wichtigsten Quellen und Dashboards steht meist in vier bis acht Wochen. Wir starten bewusst mit dem Anwendungsfall, der den größten Nutzen bringt, etwa einem konsolidierten Umsatz- oder Vertriebsreport, und erweitern von dort aus Schritt für Schritt. So sehen Sie früh Ergebnisse, statt monatelang auf ein großes Projekt zu warten.",
  },
  {
    q: "Was kostet ein Cloud Data Warehouse und wie behalten wir die Kosten im Griff?",
    a: "Cloud Data Warehouses rechnen nutzungsbasiert ab, getrennt nach Speicher und Rechenleistung. Das macht den Start günstig, kann bei unkontrolliertem Wachstum aber teuer werden. Wir dimensionieren die Rechenressourcen passend, trennen Lasten sauber, setzen automatisches Pausieren ein und überwachen den Verbrauch. So bleibt Ihre Cloud-Rechnung planbar. Im kostenlosen Assessment rechnen wir Ihren konkreten Fall durch und zeigen die zu erwartenden Kosten realistisch auf.",
  },
  {
    q: "Können Sie unser bestehendes DWH oder unsere Altsysteme migrieren?",
    a: "Ja. Wir migrieren bestehende Data Warehouses, etwa aus einer lokalen Datenbank oder einem alten On-Premise-System, in eine moderne Cloud-Plattform, ohne dass Ihr Reporting stillsteht. Dabei analysieren wir vorhandene Datenmodelle und Logiken, übertragen sie sauber und bauen veraltete Stellen gleich zukunftsfähig um. Auch die Anbindung von Altsystemen und Datensilos gehört dazu.",
  },
  {
    q: "Brauchen wir ein Data Warehouse, um KI einzusetzen?",
    a: "In den meisten Fällen ja. KI- und Machine-Learning-Modelle sind nur so gut wie die Daten, mit denen sie arbeiten. Ein Data Warehouse liefert die saubere, historisierte und konsolidierte Datenbasis, aus der sich Trainingsdaten, Feature-Tabellen und reproduzierbare Datenstände gewinnen lassen. Genau deshalb ist ein verlässliches Analytics-Fundament fast immer der erste Schritt, bevor KI-Projekte echten Mehrwert bringen.",
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
  name: "Data Warehouse Beratung & Aufbau",
  serviceType: "Cloud Data Warehouse, Data Warehousing, Analytics-Fundament",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "Data Warehouse Beratung, Konzeption, Aufbau und Migration für Unternehmen im DACH-Raum: moderne Cloud Data Warehouses auf Snowflake, BigQuery und Databricks als Fundament für Reporting, Analytics und KI, mit EU-Region und Kostenkontrolle.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const stats = [
  { value: "1", label: "Single Source of Truth" },
  { value: "EU", label: "Region & DSGVO" },
  { value: "100 %", label: "herstellerneutral" },
  { value: "4-8 Wo.", label: "bis zum ersten DWH" },
];

const ataglance = [
  ["Typ", "Cloud Data Warehouse"],
  ["Plattformen", "Snowflake, BigQuery, Databricks"],
  ["Architektur", "ELT, Layer-Modell"],
  ["Hosting", "EU-Region wählbar"],
  ["Zweck", "Reporting, Analytics, KI"],
  ["DSGVO", "EU-Region, herstellerneutral"],
];

const problems = [
  { problem: "Zahlen aus CRM, ERP und Shop widersprechen sich, jedes Team rechnet mit eigenen Listen.", solution: "Ein zentrales Data Warehouse liefert eine konsolidierte, abgestimmte Datenbasis für alle." },
  { problem: "Reports werden in Excel von Hand zusammenkopiert und sind oft schon veraltet.", solution: "Daten fließen automatisch ins DWH, Dashboards aktualisieren sich von selbst." },
  { problem: "KI- und Analytics-Projekte scheitern, weil saubere, historisierte Daten fehlen.", solution: "Das Data Warehouse liefert das verlässliche Fundament für Modelle und Auswertungen." },
  { problem: "Datensilos und Altsysteme blockieren jede neue Auswertung.", solution: "Wir binden alle Quellen an und vereinen sie in einem klaren Datenmodell." },
];

const bentoFeatures = [
  { icon: Layers, title: "Architektur & Datenmodell", description: "Wir entwerfen Ihr Data Warehouse vom Datenmodell bis zur Plattform: skalierbar, sauber in Layern strukturiert und auf Reporting wie KI ausgerichtet. Kein Datenlager, das nach einem Jahr unübersichtlich wird, sondern ein Fundament, das mit Ihren Anforderungen mitwächst." },
  { icon: Cloud, title: "Plattform herstellerneutral", description: "Snowflake, BigQuery oder Databricks, wir wählen die Plattform nach Ihrem Anwendungsfall, nicht nach Anbieter." },
  { icon: ArrowRightLeft, title: "Migration & Anbindung", description: "Wir binden CRM, ERP, Shop und Altsysteme an und führen bestehende Datenlager verlustfrei in die Cloud über." },
  { icon: Workflow, title: "ELT-Pipelines & Modellierung", description: "Automatisierte Ladestrecken und ein klares Layer-Modell machen aus Rohdaten verlässliche, dokumentierte Kennzahlen." },
  { icon: Shield, title: "EU-Region & DSGVO", description: "Ihre Daten liegen in einer EU-Region, mit sauberer Governance, Rollen und Zugriffsrechten von Anfang an." },
  { icon: Gauge, title: "Kostenkontrolle", description: "Wir trennen Speicher und Rechenleistung, dimensionieren richtig und überwachen den Verbrauch, damit die Cloud-Rechnung planbar bleibt." },
];

const departments = [
  { value: "bi", label: "Reporting & BI", icon: BarChart3, head: "Reporting & Business Intelligence", intro: "Alle Kennzahlen aus einer abgestimmten Quelle, in Echtzeit statt aus alten Excel-Dateien.", items: ["Dashboards in Power BI, Tableau oder Looker direkt auf dem Data Warehouse.", "Ein konsolidiertes Datenmodell, das alle Abteilungen gleich interpretieren.", "Historisierte Daten für Trends, Vergleiche und Forecasts.", "Self-Service-Auswertungen, ohne dass die IT jeden Report bauen muss."] },
  { value: "ki", label: "KI & Data Science", icon: Brain, head: "KI & Data Science", intro: "Saubere, historisierte Daten als verlässliches Fundament für Modelle und Analytics.", items: ["Feature-Tabellen und Trainingsdaten direkt aus dem Warehouse.", "Vorbereitung von Daten für Machine Learning und Prognosen.", "Anbindung an Snowflake Cortex, BigQuery ML oder Databricks für Modelle.", "Reproduzierbare Datenstände für nachvollziehbare KI-Ergebnisse."] },
  { value: "controlling", label: "Controlling", icon: Calculator, head: "Finanzen & Controlling", intro: "Zahlen, die zusammenpassen, statt drei Versionen der Wahrheit.", items: ["Umsatz, Kosten und Margen aus ERP, CRM und Buchhaltung zusammenführen.", "Automatisierte Monats- und Quartalsberichte aus einer Quelle.", "Plan-Ist-Vergleiche und Forecasts auf konsistenter Datenbasis.", "Nachvollziehbare Herkunft jeder Kennzahl bis zur Quelle."] },
  { value: "vertrieb", label: "Vertrieb", icon: TrendingUp, head: "Vertrieb & Marketing", intro: "Den ganzen Funnel an einem Ort, von der Kampagne bis zum Abschluss.", items: ["Leads, Deals und Umsätze aus CRM und Shop zusammenführen.", "Kampagnen-Kosten und Erlöse für echte ROI-Auswertungen verbinden.", "Kundensegmente und Customer Lifetime Value berechnen.", "Attribution über mehrere Kanäle hinweg auf einer Datenbasis."] },
  { value: "operations", label: "Operations", icon: Cog, head: "Operations & Logistik", intro: "Bestände, Durchlaufzeiten und Auslastung transparent und aktuell.", items: ["Bestands- und Lagerdaten aus mehreren Systemen konsolidieren.", "Durchlaufzeiten und Engpässe sichtbar machen.", "Lieferanten- und Qualitätskennzahlen auswerten.", "Frühwarnindikatoren aus historischen Daten ableiten."] },
  { value: "it", label: "IT & Daten", icon: Server, head: "IT & Data Engineering", intro: "Eine wartbare Datenplattform statt wuchernder Einzelskripte und Datensilos.", items: ["ELT-Pipelines, die Quellen zuverlässig und nachvollziehbar laden.", "Klares Layer-Modell von Rohdaten bis zur fertigen Kennzahl.", "Zugriffsrechte, Rollen und Governance sauber umgesetzt.", "Monitoring, Tests und Dokumentation für stabilen Betrieb."] },
];

const comparison = [
  { feature: "Typ", snowflake: "Cloud Data Warehouse", bigquery: "Serverless Warehouse", databricks: "Lakehouse" },
  { feature: "Stärke", snowflake: "einfacher Betrieb, Sharing", bigquery: "serverlos, Google-Stack", databricks: "Data Science, ML, Spark" },
  { feature: "Skalierung", snowflake: "Compute getrennt, elastisch", bigquery: "automatisch, serverlos", databricks: "Cluster, elastisch" },
  { feature: "EU-Region", snowflake: "verfügbar", bigquery: "verfügbar", databricks: "verfügbar" },
  { feature: "KI & ML", snowflake: "Cortex, Anbindung", bigquery: "BigQuery ML", databricks: "nativ, inkl. MLflow" },
  { feature: "Abrechnung", snowflake: "Compute pro Sekunde", bigquery: "pro Abfrage oder Slots", databricks: "DBU pro Nutzung" },
  { feature: "Ideal für", snowflake: "klassisches DWH & BI", bigquery: "Analytics im Google-Stack", databricks: "Daten und KI vereint" },
];

const steps = [
  { step: "01", icon: Phone, title: "Kostenlose Erstanalyse", time: "30 Minuten", description: "Wir schauen, welche Datenquellen Sie haben, wo Reporting heute schmerzt und welche Ziele Sie verfolgen. Sie wissen danach, wo der größte Hebel für ein Data Warehouse liegt." },
  { step: "02", icon: Search, title: "Architektur & Plattform-Wahl", time: "Woche 1 bis 2", description: "Wir entwerfen das Datenmodell, empfehlen herstellerneutral Snowflake, BigQuery oder Databricks und kalkulieren Aufwand, Kosten und ROI transparent." },
  { step: "03", icon: Cog, title: "Aufbau & Migration", time: "Woche 2 bis 6", description: "Wir bauen das Data Warehouse, binden Ihre Quellen an, richten ELT-Pipelines ein und modellieren Ihre Kennzahlen in sauberen Layern." },
  { step: "04", icon: Rocket, title: "Go-Live & Betrieb", time: "ab Woche 6", description: "Die Dashboards laufen auf einer Single Source of Truth. Wir überwachen Betrieb und Kosten, optimieren und erweitern das DWH Schritt für Schritt." },
];

const related = [
  { href: "/leistungen/snowflake", icon: Cloud, title: "Snowflake Data Cloud", desc: "Die Cloud-Plattform für skalierbares Data Warehousing mit einfachem Betrieb und Data Sharing." },
  { href: "/leistungen/databricks", icon: Layers, title: "Databricks", desc: "Lakehouse für Data Engineering, Analytics und KI auf einer vereinten Plattform." },
  { href: "/leistungen/data-engineering", icon: Workflow, title: "Data Engineering", desc: "Robuste Pipelines, die Ihre Quellen zuverlässig und nachvollziehbar ins Data Warehouse bringen." },
];

export default function Page() {
  return (
    <>
      <Script id="faq-dwh" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-dwh" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center bg-primary/10 border border-primary/20 rounded-xl p-2.5">
                      <Database className="w-9 h-9 text-primary" />
                    </span>
                    <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                      Data Warehouse, Analytics-Fundament
                    </Badge>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Ihr Cloud Data Warehouse als <span className="text-primary">Fundament für Analytics und KI</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Wir konzipieren, bauen und migrieren moderne Cloud Data Warehouses auf Snowflake, BigQuery oder Databricks, als verlässliche, konsolidierte Datenbasis für Reporting und KI. Herstellerneutral, in der EU-Region und mit Kostenkontrolle.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Assessment</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#vergleich">Snowflake vs. BigQuery vs. Databricks</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> EU-Region & DSGVO</span>
                    <span className="flex items-center gap-1.5"><Cloud className="w-4 h-4 text-primary" /> Snowflake, BigQuery, Databricks</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Hero visual: DWH pipeline diagram */}
                <div className="relative">
                  <Card className="border-2 shadow-xl shadow-primary/5 overflow-hidden">
                    <CardHeader className="border-b border-border py-3">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center justify-center bg-primary/10 border border-primary/20 rounded p-1"><Database className="w-4 h-4 text-primary" /></span>
                        <span className="font-mono text-xs text-muted-foreground">dwh-pipeline.sql</span>
                        <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> live
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3 rounded-xl border-2 border-primary/40 bg-primary/5 px-3.5 py-2.5">
                        <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0"><Database className="w-5 h-5 text-primary" /></div>
                        <div className="min-w-0"><div className="text-[10px] uppercase tracking-wider text-primary font-medium">Quellen</div><div className="text-sm font-semibold truncate">CRM, ERP, Shop, Dateien</div></div>
                      </div>
                      {[
                        { icon: RefreshCw, label: "Laden (ELT)", title: "Daten konsolidieren" },
                        { icon: Layers, label: "Modellieren", title: "Single Source of Truth" },
                        { icon: BarChart3, label: "Analytics & KI", title: "Reporting und Modelle" },
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
                    <Layers className="w-3.5 h-3.5 text-primary" /> Single Source of Truth
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

          <ModelLogoStrip
            caption="Moderne Data-Warehouse-Plattformen"
            items={[
              { slug: "snowflake", name: "Snowflake" },
              { slug: "databricks", name: "Databricks" },
              { slug: "googlecloud", name: "BigQuery" },
              { slug: "postgresql", name: "PostgreSQL" },
              { slug: "aws", name: "Redshift" },
            ]}
          />

          {/* DEFINITION */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Kurz erklärt</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was ist ein Data Warehouse und wann lohnt es sich?</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p><strong className="text-foreground">Ein Data Warehouse</strong> (kurz DWH, auf Deutsch Datenlager) ist eine zentrale Datenbank, die Daten aus all Ihren Systemen zusammenführt, historisiert und für Auswertungen aufbereitet. Statt verstreuter Insellösungen entsteht eine einzige, abgestimmte Datenbasis, eine <strong className="text-foreground">Single Source of Truth</strong>.</p>
                    <p>Ein <strong className="text-foreground">Cloud Data Warehouse</strong> wie Snowflake, BigQuery oder Databricks bringt das in die Cloud: elastisch skalierbar, ohne eigene Server und mit getrennter Abrechnung von Speicher und Rechenleistung. Genau dieses Fundament brauchen verlässliche Dashboards und ernstzunehmende KI-Projekte.</p>
                    <p>Wir konzipieren, bauen und migrieren Ihr Data Warehouse <strong className="text-foreground">herstellerneutral</strong> und mit EU-Region. Sie bekommen ein Analytics-Fundament, das zu Ihren Daten, Ihrem Budget und Ihrer DSGVO-Verpflichtung passt, nicht das, was ein einzelner Anbieter am liebsten verkauft.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Cloud Data Warehouse</Badge>
                    <Badge variant="secondary" className="rounded-full">DWH Beratung</Badge>
                    <Badge variant="secondary" className="rounded-full">Single Source of Truth</Badge>
                    <Badge variant="secondary" className="rounded-full">Analytics-Fundament</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Data Warehouse auf einen Blick</CardTitle>
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
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum ein Data Warehouse?</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Wo heute Datenchaos herrscht, steht morgen ein Fundament</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Überall, wo Zahlen sich widersprechen oder Reports von Hand entstehen, schafft ein Data Warehouse eine verlässliche, gemeinsame Datenbasis.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 pl-1">Was heute passiert</div>
                  {problems.map(({ problem }, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl border bg-background"><X className="w-5 h-5 text-destructive mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{problem}</span></div>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-2 pl-1">Was das Data Warehouse leistet</div>
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
                <h2 className="text-3xl md:text-4xl font-bold">Mehr als eine Datenbank in der Cloud</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Wir bauen ein Data Warehouse, das verlässlich liefert, und denken Datenschutz und Kosten von Anfang an mit.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold">Wofür Ihr Data Warehouse arbeitet</h2>
                <p className="text-lg text-muted-foreground mt-4">Wählen Sie einen Bereich, wir zeigen konkrete Auswertungen aus der Praxis.</p>
              </div>
              <Tabs defaultValue="bi" className="w-full">
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
                            <div key={j} className="flex items-start gap-2.5 p-3 rounded-lg border bg-background"><BarChart3 className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{item}</span></div>
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
                <h2 className="text-3xl md:text-4xl font-bold">Snowflake vs. BigQuery vs. Databricks</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Welche Plattform passt? Das hängt von Ihrem Anwendungsfall, Ihrem Ökosystem und Ihrem Anspruch an KI ab. Wir beraten herstellerneutral.</p>
              </div>
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[28%] font-bold text-foreground">Merkmal</TableHead>
                      <TableHead className="text-primary font-bold"><span className="inline-flex items-center gap-1.5"><Cloud className="w-4 h-4" />Snowflake</span></TableHead>
                      <TableHead className="text-muted-foreground"><span className="inline-flex items-center gap-1.5"><Database className="w-4 h-4" />BigQuery</span></TableHead>
                      <TableHead className="text-muted-foreground"><span className="inline-flex items-center gap-1.5"><Layers className="w-4 h-4" />Databricks</span></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparison.map((row, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{row.feature}</TableCell>
                        <TableCell className="text-sm">{row.snowflake}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{row.bigquery}</TableCell>
                        <TableCell className="text-sm text-primary font-medium">{row.databricks}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
              <p className="text-sm text-muted-foreground text-center mt-4">Wir wählen die Plattform <a href="/leistungen/snowflake" className="text-primary hover:underline">herstellerneutral</a> nach Ihrem Anwendungsfall, Ihrem Budget und Ihrer bestehenden IT-Landschaft, nicht nach Anbieter-Provision.</p>
            </div>
          </section>

          {/* PROZESS */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unser Prozess</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Ihr Data Warehouse in 4 Schritten</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zum Data Warehouse</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zum Data Warehouse</h2>
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
