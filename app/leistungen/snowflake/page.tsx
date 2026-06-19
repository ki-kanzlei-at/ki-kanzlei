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
  Database, Snowflake, Cloud, Server, BarChart3, TrendingUp, Layers, Share2, Box, Workflow,
  Brain, Shield, ShieldCheck, Lock, Check, X, Search, Rocket, Phone, Clock, MapPin, Zap, RefreshCw,
  Filter, Eye, Users, Building2, Lightbulb, Target, Settings2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Snowflake Data Cloud: Beratung & Migration",
  description:
    "Snowflake für Unternehmen: Wir modellieren, migrieren und optimieren die Snowflake Data Cloud als Fundament für Analytics und KI. Kostenkontrolle, Data Sharing, EU-Region und DSGVO. DACH-Raum, herstellerneutral.",
  keywords:
    "Snowflake, Snowflake Data Cloud, Data Warehouse, Snowflake Beratung, Snowflake Migration, Snowflake Kosten, Data Sharing, Snowflake vs Databricks, Cloud Data Warehouse, Data Engineering, Snowflake DSGVO, Snowflake Beratung Deutschland, Snowflake Schweiz, Snowflake DACH, Data Warehouse DACH",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/snowflake" },
};

const faqs = [
  { q: "Was ist Snowflake und was macht es besonders?", a: "Snowflake ist eine cloudbasierte Datenplattform, oft als Data Cloud bezeichnet. Ihr Markenzeichen ist die Trennung von Speicher und Rechenleistung: Sie skalieren beides unabhängig und zahlen nur für das, was Sie nutzen. Snowflake ist sehr SQL-zentriert, einfach zu bedienen und stark bei strukturierten Daten, Business Intelligence und Data Sharing. Für viele Unternehmen ist es der schnellste Weg zu einem leistungsfähigen, wartungsarmen Data Warehouse in der Cloud." },
  { q: "Wann ist Snowflake die richtige Wahl?", a: "Snowflake passt besonders gut, wenn Sie strukturierte Daten konsolidieren, verlässliches Reporting brauchen und ein wartungsarmes, gut skalierendes Data Warehouse wollen, ohne Cluster selbst zu betreiben. Auch für Data Sharing zwischen Abteilungen oder mit Partnern ist Snowflake stark. Sobald sehr große, unstrukturierte Datenmengen, komplexes Data Engineering und tiefes Machine Learning im Vordergrund stehen, lohnt der Vergleich mit Databricks. Wir beraten herstellerneutral." },
  { q: "Was ist der Unterschied zwischen Snowflake und Databricks?", a: "Snowflake kommt aus der Data-Warehouse-Welt: SQL-zentriert, sehr einfach zu bedienen, stark bei strukturierten Daten und BI. Databricks kommt aus der Data-Engineering- und KI-Welt: offenes Lakehouse mit Delta Lake, stark bei großen, auch unstrukturierten Datenmengen und Machine Learning. Beide sind exzellent. Die Wahl hängt von Ihren Anwendungsfällen ab, häufig ergänzen sie sich sogar. Wir helfen, die passende oder kombinierte Architektur zu finden." },
  { q: "Lässt sich Snowflake DSGVO-konform betreiben?", a: "Ja. Snowflake lässt sich in EU-Regionen betreiben, sodass Ihre Daten in Europa bleiben. Mit Rollen- und Rechtekonzepten, dynamischer Datenmaskierung, Verschlüsselung und Audit-Funktionen setzen wir Datenschutz und Governance sauber um und schließen die nötigen Verträge ab. So bleibt der Betrieb DSGVO-konform." },
  { q: "Wie behält man die Snowflake-Kosten im Griff?", a: "Snowflake rechnet nach genutzter Rechenzeit der Warehouses ab. Ohne Steuerung können hier Kosten entstehen, etwa durch zu große oder dauerhaft laufende Warehouses. Wir dimensionieren Warehouses richtig, nutzen Auto-Suspend und Auto-Resume, trennen Workloads, setzen Ressourcen-Monitore und optimieren teure Abfragen. So zahlen Sie für Wert, nicht für Leerlauf." },
  { q: "Übernehmt ihr eine Migration nach Snowflake?", a: "Ja. Wir migrieren bestehende Data Warehouses und Datenbanken nach Snowflake, planen die Zielmodellierung, bauen die Ladestrecken und stellen sicher, dass Kennzahlen und Reports konsistent bleiben. Wir gehen schrittweise vor, oft parallel zum Altsystem, damit der Betrieb nicht stillsteht." },
  { q: "Spielt Snowflake mit unseren BI- und KI-Tools zusammen?", a: "Ja. Snowflake bindet sich nahtlos an BI-Tools wie Power BI an, lässt sich mit Orchestrierern wie Apache Airflow steuern und über Konnektoren mit vielen Quellen verbinden. Für KI-Anwendungen liefert Snowflake die saubere Datenbasis, die wir mit unseren KI- und Automatisierungslösungen weiterverarbeiten." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Snowflake Data Cloud Beratung & Migration", serviceType: "Snowflake, Data Warehouse, Data Cloud, Data Engineering", provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" }, description: "Snowflake Data Cloud für Unternehmen im DACH-Raum: Modellierung, Migration, Kostenoptimierung und Betrieb als Fundament für Analytics und KI, EU-Region und DSGVO.", areaServed: [{ "@type": "Country", name: "Austria" }, { "@type": "Country", name: "Germany" }, { "@type": "Country", name: "Switzerland" }] };

const stats = [
  { value: "Speicher", label: "und Rechnen getrennt skaliert" },
  { value: "EU", label: "Region möglich, DSGVO" },
  { value: "SQL", label: "vertraut und sofort nutzbar" },
  { value: "0", label: "Cluster selbst betreiben" },
];
const ataglance = [
  ["Typ", "Cloud Data Warehouse"],
  ["Markenzeichen", "Speicher & Compute getrennt"],
  ["Stärke", "SQL, BI, Data Sharing"],
  ["Bedienung", "einfach, wartungsarm"],
  ["Hosting", "EU-Region möglich"],
  ["Abrechnung", "nach Rechenzeit"],
];
const problems = [
  { problem: "Daten liegen in vielen Quellen und Reports widersprechen sich.", solution: "Snowflake konsolidiert alles zu einer verlässlichen Wahrheit." },
  { problem: "Das alte Data Warehouse ist langsam und teuer zu warten.", solution: "Snowflake skaliert elastisch und braucht keinen eigenen Clusterbetrieb." },
  { problem: "Lastspitzen bremsen Reports für alle aus.", solution: "Getrennte Warehouses je Workload, kein gegenseitiges Ausbremsen." },
  { problem: "Datenaustausch mit Partnern ist mühsam.", solution: "Data Sharing teilt Daten sicher, ohne Kopien zu verschicken." },
];
const features = [
  { icon: Layers, title: "Speicher und Rechnen getrennt skaliert", description: "Snowflakes Architektur trennt Speicher von Rechenleistung. Sie geben jedem Team und jeder Last ihr eigenes Warehouse, das automatisch startet und stoppt. So bremst sich nichts gegenseitig aus, und Sie zahlen nur für tatsächlich genutzte Rechenzeit, statt teure Cluster durchlaufen zu lassen." },
  { icon: BarChart3, title: "SQL, BI und Self-Service", description: "Vertraute SQL-Welt, nahtlose Anbindung an Power BI und Co., Self-Service für Fachbereiche auf konsistenten Daten." },
  { icon: Share2, title: "Sicheres Data Sharing", description: "Daten zwischen Abteilungen oder mit Partnern teilen, ohne Kopien, ohne Versand, mit voller Kontrolle." },
  { icon: ShieldCheck, title: "EU-Region & Governance", description: "Betrieb in EU-Regionen, Rollenkonzepte, Datenmaskierung, Verschlüsselung und Audit, DSGVO-konform." },
  { icon: TrendingUp, title: "Kosten im Griff", description: "Richtige Warehouse-Größen, Auto-Suspend, Workload-Trennung und Query-Optimierung halten die Kosten niedrig." },
  { icon: RefreshCw, title: "Migration ohne Stillstand", description: "Bestehende Warehouses schrittweise und konsistent nach Snowflake überführen, parallel zum Altsystem." },
];
const usecases = [
  { value: "warehouse", label: "Data Warehouse", icon: Database, head: "Zentrales Data Warehouse", intro: "Eine verlässliche Datenbasis für das ganze Unternehmen.", items: ["Quellen konsolidieren und modellieren.", "Historisierung und Versionierung.", "Konsistente Kennzahlen für alle.", "Wartungsarmer Betrieb."] },
  { value: "bi", label: "Analytics & BI", icon: BarChart3, head: "Analytics & Reporting", intro: "Aktuelle Auswertungen direkt aus der Data Cloud.", items: ["Anbindung an Power BI und BI-Tools.", "Self-Service für Fachbereiche.", "Performante Abfragen auf großen Daten.", "Dashboards ohne Datenkopien."] },
  { value: "sharing", label: "Data Sharing", icon: Share2, head: "Data Sharing & Marketplace", intro: "Daten sicher teilen und beziehen.", items: ["Daten ohne Kopien mit Partnern teilen.", "Interne Datenprodukte bereitstellen.", "Externe Datenquellen einbinden.", "Volle Zugriffskontrolle."] },
  { value: "ki", label: "KI-Basis", icon: Brain, head: "Fundament für KI", intro: "Saubere Daten als Basis für KI-Anwendungen.", items: ["Konsistente Daten für Modelle bereitstellen.", "Features zentral verwalten.", "Anbindung an KI- und Automatisierung.", "Governance für KI-Daten."] },
];
const comparison = [
  { feature: "Herkunft", sf: "Data Warehouse", db: "Data & KI Engineering", dw: "klassisch, on-prem" },
  { feature: "Bedienung", sf: "sehr einfach, SQL", db: "technischer", dw: "vertraut, aber starr" },
  { feature: "Strukturierte Daten / BI", sf: "sehr stark", db: "stark", dw: "stark" },
  { feature: "Große / unstrukturierte Daten", sf: "gut", db: "sehr stark", dw: "begrenzt" },
  { feature: "Machine Learning nativ", sf: "wachsend", db: "sehr stark", dw: "extern nötig" },
  { feature: "EU-Region / DSGVO", sf: "ja", db: "ja", dw: "je nach Betrieb" },
];
const steps = [
  { step: "01", icon: Phone, title: "Kostenlose Erstanalyse", time: "30 Minuten", description: "Wir klären Datenlandschaft, Reporting-Bedarf und Ziele und prüfen, ob Snowflake der schnellste Weg zum Ziel ist." },
  { step: "02", icon: Search, title: "Modellierung & Konzept", time: "Woche 1 bis 2", description: "Wir entwerfen Datenmodell, Rollen, Warehouses und Kostenstruktur und planen die Migration." },
  { step: "03", icon: Settings2, title: "Aufbau & Migration", time: "Woche 2 bis 6", description: "Wir bauen Ladestrecken, richten Governance ein und migrieren konsistent, mit Tests und Kostenkontrolle." },
  { step: "04", icon: Rocket, title: "Go-Live & Optimierung", time: "ab Woche 6", description: "Die Data Cloud geht produktiv. Wir optimieren Kosten und Performance und bauen Analytics- und KI-Use-Cases aus." },
];
const related = [
  { href: "/leistungen/databricks", icon: Layers, title: "Databricks Lakehouse", desc: "Die Lakehouse-Alternative für Data Engineering und KI, herstellerneutral eingeordnet." },
  { href: "/leistungen/data-engineering", icon: Workflow, title: "Data Engineering", desc: "Saubere Daten-Pipelines als Fundament für Snowflake und KI." },
  { href: "/leistungen/power-bi", icon: BarChart3, title: "Power BI & KI-Analysen", desc: "Dashboards und automatisierte Reports direkt auf Ihrer Data Cloud." },
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
      <Script id="faq-snowflake" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-snowflake" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <LogoBox slug="snowflake" alt="Snowflake" imgClassName="h-9 w-auto max-w-[2.75rem]" boxClassName="rounded-xl p-2 shadow-sm" />
                    <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">Snowflake, Data Cloud</Badge>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Snowflake als <span className="text-primary">verlässliche Data Cloud</span></h1>
                  <p className="text-lg text-muted-foreground max-w-xl">Snowflake trennt Speicher und Rechenleistung und liefert ein leistungsstarkes, wartungsarmes Data Warehouse in der Cloud. Wir modellieren, migrieren und optimieren Ihre Data Cloud als Fundament für Analytics und KI, in EU-Regionen und DSGVO-konform.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild><a href="#contact">Kostenloses Assessment</a></Button>
                    <Button size="lg" variant="outline" asChild><a href="#vergleich">Snowflake vs. Databricks</a></Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><BarChart3 className="w-4 h-4 text-primary" /> SQL & BI stark</span>
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> EU-Region & DSGVO</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>
                <div className="relative">
                  <Card className="border-2 shadow-xl shadow-primary/5 overflow-hidden">
                    <CardHeader className="border-b border-border py-3">
                      <div className="flex items-center gap-2">
                        <span className="flex gap-1.5"><span className="w-3 h-3 rounded-full bg-muted-foreground/20" /><span className="w-3 h-3 rounded-full bg-muted-foreground/20" /><span className="w-3 h-3 rounded-full bg-muted-foreground/20" /></span>
                        <span className="ml-2 font-mono text-xs text-muted-foreground">data-cloud.snowflake</span>
                        <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground"><span className="w-2 h-2 rounded-full bg-green-500" /> aktiv</span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3 rounded-xl border-2 border-border bg-background px-3.5 py-2.5 shadow-sm"><div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><Database className="w-5 h-5 text-primary" /></div><div className="min-w-0"><div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Storage</div><div className="text-sm font-semibold truncate">Ein Speicher, alle Daten</div></div></div>
                      <div className="grid grid-cols-3 gap-2">
                        {[{ t: "BI" }, { t: "Data Science" }, { t: "Sharing" }].map((n, i) => (
                          <div key={i} className="flex flex-col items-center gap-1 rounded-lg border-2 border-primary/30 bg-primary/5 py-2.5"><Cloud className="w-4 h-4 text-primary" /><span className="text-[10px] text-muted-foreground">{n.t}</span><span className="text-[9px] text-primary font-medium">Warehouse</span></div>
                        ))}
                      </div>
                      <div className="text-[11px] text-center text-muted-foreground">Compute pro Workload, unabhängig skaliert</div>
                    </CardContent>
                  </Card>
                  <div className="hidden lg:flex absolute -top-4 -right-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium"><Zap className="w-3.5 h-3.5 text-primary" /> elastisch</div>
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Die Data Cloud, die einfach läuft</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p><strong className="text-foreground">Snowflake</strong> ist eine cloudbasierte Datenplattform, die Speicher und Rechenleistung trennt. Jede Last bekommt ihr eigenes Warehouse, das automatisch startet und stoppt. Das macht Snowflake elastisch, schnell und wartungsarm.</p>
                    <p>Stark ist Snowflake bei <strong className="text-foreground">SQL, Business Intelligence und Data Sharing</strong>. Für viele Unternehmen ist es der schnellste Weg zu einer verlässlichen, konsolidierten Datenbasis, ohne eigene Cluster zu betreiben.</p>
                    <p>Wir machen daraus ein <strong className="text-foreground">kostenoptimiertes, DSGVO-konformes Fundament</strong> in der EU-Region, als Basis für Reporting und KI. Herstellerneutral, mit ehrlichem Vergleich zu Databricks.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Data Cloud</Badge>
                    <Badge variant="secondary" className="rounded-full">Data Warehouse</Badge>
                    <Badge variant="secondary" className="rounded-full">Data Sharing</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader><CardTitle className="text-xl">Snowflake auf einen Blick</CardTitle><CardDescription>Die wichtigsten Eckdaten im Überblick.</CardDescription></CardHeader>
                  <CardContent className="space-y-1">{ataglance.map(([label, value]) => (<div key={label} className="flex items-center justify-between py-2.5 border-b border-border last:border-0"><span className="text-sm font-medium text-foreground">{label}</span><span className="text-sm text-muted-foreground text-right max-w-[55%]">{value}</span></div>))}</CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum Snowflake?</Badge><h2 className="text-3xl md:text-4xl font-bold">Eine Wahrheit statt vieler Reports</h2><p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Wo Daten heute widersprüchlich und verstreut sind, schafft Snowflake eine verlässliche, gemeinsame Basis.</p></div>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-3"><div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 pl-1">Was heute bremst</div>{problems.map(({ problem }, i) => (<div key={i} className="flex items-start gap-3 p-4 rounded-xl border bg-background"><X className="w-5 h-5 text-destructive mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{problem}</span></div>))}</div>
                <div className="space-y-3"><div className="text-xs font-semibold text-primary uppercase tracking-widest mb-2 pl-1">Was Snowflake ermöglicht</div>{problems.map(({ solution }, i) => (<div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-primary/20 bg-primary/5"><Check className="w-5 h-5 text-primary mt-0.5 shrink-0" /><span className="text-sm leading-relaxed font-medium">{solution}</span></div>))}</div>
              </div>
            </div>
          </section>

          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Was wir liefern</Badge><h2 className="text-3xl md:text-4xl font-bold">Snowflake, richtig aufgesetzt</h2><p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Von der Modellierung über Kostenkontrolle bis zur KI-Basis, herstellerneutral und DSGVO-konform.</p></div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="hover-lift border-2 lg:col-span-2 bg-primary/5 border-primary/20"><CardHeader><div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2"><Layers className="w-6 h-6 text-primary" /></div><CardTitle className="text-xl">{features[0].title}</CardTitle><CardDescription className="text-base leading-relaxed">{features[0].description}</CardDescription></CardHeader></Card>
                {features.slice(1).map((f, i) => { const Icon = f.icon; return (<Card key={i} className="hover-lift border-2"><CardHeader><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2"><Icon className="w-5 h-5 text-primary" /></div><CardTitle className="text-lg">{f.title}</CardTitle><CardDescription className="leading-relaxed">{f.description}</CardDescription></CardHeader></Card>); })}
              </div>
            </div>
          </section>

          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Anwendungsfälle</Badge><h2 className="text-3xl md:text-4xl font-bold">Was wir mit Snowflake umsetzen</h2><p className="text-lg text-muted-foreground mt-4">Wählen Sie einen Bereich, wir zeigen konkrete Szenarien.</p></div>
              <Tabs defaultValue="warehouse" className="w-full">
                <TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">{usecases.map((d) => { const Icon = d.icon; return (<TabsTrigger key={d.value} value={d.value} className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border"><Icon className="w-4 h-4 mr-1.5" />{d.label}</TabsTrigger>); })}</TabsList>
                {usecases.map((d) => (<TabsContent key={d.value} value={d.value}><Card className="border-2"><CardContent className="pt-6"><h3 className="text-xl font-bold mb-2">{d.head}</h3><p className="text-muted-foreground leading-relaxed mb-5">{d.intro}</p><div className="grid sm:grid-cols-2 gap-3">{d.items.map((item, j) => (<div key={j} className="flex items-start gap-2.5 p-3 rounded-lg border bg-background"><Database className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{item}</span></div>))}</div></CardContent></Card></TabsContent>))}
              </Tabs>
            </div>
          </section>

          <section id="vergleich" className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Vergleich</Badge><h2 className="text-3xl md:text-4xl font-bold">Snowflake vs. Databricks vs. klassisches Warehouse</h2><p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Welche Plattform passt? Wir beraten herstellerneutral, oft ergänzen sich die Ansätze.</p></div>
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader><TableRow className="bg-muted/50"><TableHead className="w-[28%] font-bold text-foreground">Merkmal</TableHead><TableHead className="text-primary font-bold">Snowflake</TableHead><TableHead className="text-muted-foreground">Databricks</TableHead><TableHead className="text-muted-foreground">Klassisch</TableHead></TableRow></TableHeader>
                  <TableBody>{comparison.map((row, i) => (<TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}><TableCell className="font-medium">{row.feature}</TableCell><TableCell className="text-sm text-primary font-medium">{row.sf}</TableCell><TableCell className="text-sm text-muted-foreground">{row.db}</TableCell><TableCell className="text-sm text-muted-foreground">{row.dw}</TableCell></TableRow>))}</TableBody>
                </Table>
              </Card>
            </div>
          </section>

          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unser Prozess</Badge><h2 className="text-3xl md:text-4xl font-bold">Ihr Snowflake-Projekt in 4 Schritten</h2><p className="text-lg text-muted-foreground mt-4">Von der Modellierung bis zum kostenoptimierten Betrieb.</p></div>
              <ProcessSteps steps={steps} />
            </div>
          </section>

          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge><h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zu Snowflake</h2></div>
              <Accordion type="single" collapsible className="w-full space-y-3">{faqs.map((f, i) => (<AccordionItem key={i} value={`item-${i}`} className="border-2 border-border rounded-xl px-6 bg-background data-[state=open]:border-primary/30 data-[state=open]:bg-primary/5"><AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-5">{f.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">{f.a}</AccordionContent></AccordionItem>))}</Accordion>
            </div>
          </section>

          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Mehr Leistungen</Badge><h2 className="text-3xl md:text-4xl font-bold">Passt gut zu Snowflake</h2></div>
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
