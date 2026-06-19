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
  Network, Activity, Brain, GitBranch, Server, Eye, Database, Zap, Check, X, Gauge, Lock,
  ShieldCheck, MapPin, Cpu, ShoppingBag, Workflow, Phone, Search, Settings2, Rocket, Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Apache Kafka: Echtzeit-Datenstreaming & Event-Driven",
  description:
    "Apache Kafka für Unternehmen: Wir konzipieren und betreiben Kafka für Echtzeit-Datenstreaming und Event-Driven-Architekturen, als Nervensystem für datengetriebene und KI-Anwendungen. Self-hosted in der EU, DSGVO-konform, mit Monitoring im DACH-Raum.",
  keywords:
    "Apache Kafka, Kafka, Event Streaming, Echtzeit Daten, Event Driven, Datenstreaming, Kafka Beratung, Kafka self-hosted, Event-Driven-Architektur, Kafka DSGVO, Streaming vs Batch, Kafka Monitoring, Kafka DACH",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/apache-kafka" },
};

const faqs = [
  {
    q: "Was ist Apache Kafka und wofür wird es eingesetzt?",
    a: "Apache Kafka ist eine verteilte Open-Source-Plattform für Event Streaming. Anwendungen schreiben Ereignisse in dauerhafte Logs, die Topics heißen, und beliebig viele Verbraucher lesen diese Events in Echtzeit oder zeitversetzt. Eingesetzt wird Kafka überall, wo große Datenmengen in dem Moment fließen sollen, in dem sie entstehen: für Echtzeit-Analytics, Event-Driven-Microservices, das Speisen von KI-Modellen, IoT-Telemetrie und die zentrale Sammlung von Logs. Kafka wird so zum Nervensystem, über das alle Systeme entkoppelt Daten austauschen.",
  },
  {
    q: "Was ist der Unterschied zwischen Streaming mit Kafka und Batch zum Beispiel mit Airflow?",
    a: "Beim Streaming verarbeitet Kafka jedes Ereignis einzeln und sofort, sobald es eintrifft, mit Latenzen im Millisekundenbereich. Beim Batch sammelt ein Werkzeug wie Apache Airflow Daten und verarbeitet sie in geplanten Läufen, etwa stündlich oder nächtlich. Streaming ist die richtige Wahl, wenn Entscheidungen, Alerts oder Modelle in Echtzeit reagieren müssen. Batch passt, wenn große Mengen in Ruhe und nach Zeitplan transformiert werden, etwa für Reports oder das Beladen eines Data Warehouse. In der Praxis kombinieren wir beides: Kafka für den Echtzeit-Strom, Airflow für die geplanten Strecken.",
  },
  {
    q: "Ist Apache Kafka DSGVO-konform betreibbar?",
    a: "Ja. Kafka ist Open Source und lässt sich vollständig self-hosted betreiben. Wir richten Ihren Cluster auf Servern in der EU ein, sodass personenbezogene Daten Ihr Haus nicht verlassen und keinem US-Cloud-Anbieter überlassen werden. Mit Verschlüsselung, Zugriffskontrolle und definierten Aufbewahrungsfristen erfüllen Sie die Anforderungen der DSGVO. Sie behalten die volle Datensouveränität über jeden Event-Stream.",
  },
  {
    q: "Wie hilft Kafka bei KI- und Machine-Learning-Anwendungen?",
    a: "KI-Modelle sind nur so gut wie die Daten, mit denen sie arbeiten. Kafka liefert diese Daten in Echtzeit: Feature-Streams für das Training, aktuelle Ereignisse für die Inferenz und einen Rückkanal, über den Vorhersagen als Events zurück in Ihre Systeme fließen. Auch LLM- und RAG-Pipelines lassen sich an Kafka anbinden, damit sie mit dem aktuellen Stand arbeiten statt mit veralteten Daten. So wird der Event-Stream zur Grundlage für produktionsreife, datengetriebene KI.",
  },
  {
    q: "Was ist eine Event-Driven-Architektur und warum eignet sich Kafka dafür?",
    a: "In einer Event-Driven-Architektur kommunizieren Systeme über Ereignisse statt über direkte Aufrufe. Ein Dienst meldet, dass etwas passiert ist, andere Dienste reagieren darauf, ohne dass die Beteiligten sich direkt kennen müssen. Das entkoppelt Systeme, macht sie robuster und leichter erweiterbar. Kafka ist dafür ideal, weil es Ereignisse dauerhaft speichert, hohe Last verträgt und beliebig viele Consumer bedient, jeder in seinem eigenen Tempo.",
  },
  {
    q: "Wie hoch sind Durchsatz und Latenz von Kafka?",
    a: "Kafka ist auf hohen Durchsatz ausgelegt und verarbeitet je nach Hardware und Konfiguration Millionen Events pro Sekunde. Die Latenz vom Schreiben bis zum Lesen liegt typischerweise im Bereich weniger Millisekunden. Skaliert wird horizontal: Topics werden in Partitionen aufgeteilt, die über mehrere Server verteilt sind. Wächst die Last, fügen wir Broker und Partitionen hinzu, ohne den laufenden Betrieb zu unterbrechen. Wir dimensionieren den Cluster passend zu Ihrem tatsächlichen Volumen.",
  },
  {
    q: "Übernehmen Sie auch Betrieb und Monitoring des Kafka-Clusters?",
    a: "Ja. Auf Wunsch betreiben wir Ihren Kafka-Cluster vollständig. Wir überwachen Consumer-Lag, Durchsatz, Speicher und Broker-Gesundheit mit Prometheus und Grafana, richten Alerts ein und reagieren auf Engpässe, bevor sie zum Problem werden. So bleiben Ihre Datenströme dauerhaft zuverlässig, statt nach dem Aufsetzen langsam ins Wanken zu geraten.",
  },
  {
    q: "Wie lange dauert die Einführung von Kafka?",
    a: "Ein erster, klar umrissener Anwendungsfall ist oft in zwei bis vier Wochen produktiv, vom Aufsetzen des Clusters über die ersten Producer und Consumer bis zum Monitoring. Umfangreiche Architekturen mit vielen Quellen, Schema-Verwaltung und mehreren Teams brauchen entsprechend länger. Wir starten bewusst mit dem Anwendungsfall, der den größten Nutzen bringt, und erweitern die Streaming-Plattform von dort aus Schritt für Schritt.",
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
  name: "Apache Kafka Beratung & Betrieb",
  serviceType: "Event Streaming, Echtzeit-Datenstreaming, Event-Driven-Architektur",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "Apache Kafka für Unternehmen im DACH-Raum: Konzeption, Aufbau und Betrieb von Event-Streaming- und Event-Driven-Architekturen, self-hosted in der EU und DSGVO-konform, als Nervensystem für datengetriebene und KI-Anwendungen.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const stats = [
  { value: "Mio./s", label: "Events pro Sekunde" },
  { value: "< 10 ms", label: "Latenz im Echtzeit-Stream" },
  { value: "100 %", label: "Daten bleiben in der EU" },
  { value: "24/7", label: "laufende Datenströme" },
];

const ataglance = [
  ["Typ", "Verteiltes Event-Streaming"],
  ["Modell", "Publish, Subscribe, Log"],
  ["Durchsatz", "Millionen Events pro Sekunde"],
  ["Persistenz", "dauerhaftes Log, Replay"],
  ["Hosting", "self-hosted in der EU"],
  ["DSGVO", "volle Datensouveränität"],
];

const problems = [
  { problem: "Daten landen erst über Nacht im Batch im Reporting, Entscheidungen kommen zu spät.", solution: "Kafka streamt Ereignisse in Echtzeit, Dashboards und Modelle reagieren in Sekunden." },
  { problem: "Jedes System fragt die Datenbank direkt ab, bei Last bricht alles zusammen.", solution: "Ein Event-Log entkoppelt Quellen und Verbraucher, jeder liest im eigenen Tempo." },
  { problem: "Microservices reichen Daten über brüchige Punkt-zu-Punkt-Schnittstellen weiter.", solution: "Event-Driven über Kafka: ein Producer, viele Consumer, ohne enge Kopplung." },
  { problem: "Geht ein Verbraucher offline, sind die Daten dieser Zeit verloren.", solution: "Das persistente Log hält Events vor, ein Consumer holt verpasste Events einfach nach." },
];

const bentoFeatures = [
  { icon: Network, title: "Kafka als Nervensystem Ihrer Daten", description: "Apache Kafka verbindet Ihre Systeme zu einem zentralen Event-Log: Quellen schreiben Ereignisse hinein, beliebig viele Verbraucher lesen daraus. Datenbanken, Microservices, KI-Modelle und Dashboards hängen am selben Strom, entkoppelt und in Echtzeit. So entsteht ein verlässliches Nervensystem für datengetriebene und KI-gestützte Anwendungen." },
  { icon: Activity, title: "Echtzeit statt Batch", description: "Statt über Nacht in Batches zu rechnen, verarbeiten Sie Ereignisse in dem Moment, in dem sie entstehen. Entscheidungen, Alerts und Modelle reagieren in Sekunden." },
  { icon: Brain, title: "Datenströme für KI", description: "Wir speisen Machine-Learning- und LLM-Pipelines mit Live-Daten aus Kafka, damit Ihre Modelle auf dem aktuellen Stand arbeiten statt auf dem von gestern." },
  { icon: GitBranch, title: "Event-Driven-Architektur", description: "Wir entkoppeln Ihre Dienste über Events. Producer und Consumer kennen sich nicht, das macht Systeme robuster und leichter erweiterbar." },
  { icon: Server, title: "Self-hosted in der EU", description: "Wir betreiben Kafka auf Servern in der EU, damit Ihre Daten Ihr Haus nicht verlassen. Volle Datensouveränität, DSGVO-konform." },
  { icon: Eye, title: "Monitoring & Betrieb", description: "Wir überwachen Cluster, Consumer-Lag und Durchsatz mit Prometheus und Grafana und sorgen dafür, dass die Ströme zuverlässig fließen." },
];

const departments = [
  { value: "analytics", label: "Echtzeit-Analytics", icon: Activity, head: "Echtzeit-Analytics & Dashboards", intro: "Kennzahlen sind sichtbar, sobald sie entstehen, nicht erst am nächsten Morgen.", items: ["Klicks, Bestellungen und Transaktionen als Events erfassen und live auswerten.", "Echtzeit-Dashboards in Grafana oder Ihrem BI-Tool füttern.", "Kennzahlen ohne nächtlichen Batch sofort sichtbar machen.", "Anomalien und Schwellenwerte in Sekunden erkennen und melden."] },
  { value: "ki", label: "KI & ML", icon: Brain, head: "KI, Machine Learning & LLMOps", intro: "Ihre Modelle arbeiten mit aktuellen Daten statt mit dem Stand von gestern.", items: ["Feature-Streams für Machine-Learning-Modelle in Echtzeit bereitstellen.", "LLM- und RAG-Pipelines mit aktuellen Ereignissen versorgen.", "Modell-Vorhersagen als Events zurück in die Systeme streamen.", "Trainings- und Inferenzdaten sauber entkoppelt sammeln."] },
  { value: "microservices", label: "Microservices", icon: GitBranch, head: "Event-Driven Microservices", intro: "Dienste tauschen Daten über Events aus, statt eng aneinander zu hängen.", items: ["Dienste über Events entkoppeln statt über brüchige direkte Aufrufe.", "Ein Producer, viele Consumer, jeder im eigenen Tempo.", "Zustandsänderungen als nachvollziehbares Event-Log festhalten.", "Neue Services andocken, ohne bestehende anzufassen."] },
  { value: "iot", label: "IoT & Sensoren", icon: Cpu, head: "IoT, Sensorik & Telemetrie", intro: "Hochfrequente Maschinen- und Sensordaten landen zuverlässig im Strom.", items: ["Sensordaten von Maschinen und Geräten zentral einsammeln.", "Telemetrie in hoher Frequenz zuverlässig puffern.", "Datenströme an Edge und Cloud gleichzeitig verteilen.", "Ausfälle und Grenzwerte in Echtzeit überwachen."] },
  { value: "monitoring", label: "Logs & Monitoring", icon: Eye, head: "Log-Aggregation & Monitoring", intro: "Logs und Metriken aus vielen Systemen fließen an einer Stelle zusammen.", items: ["Logs aus vielen Systemen zentral als Stream sammeln.", "Metriken und Events an Elasticsearch oder Grafana weiterreichen.", "Sicherheitsrelevante Ereignisse in Echtzeit auswerten.", "Lange Aufbewahrung für Audit und Nachvollziehbarkeit."] },
  { value: "commerce", label: "E-Commerce", icon: ShoppingBag, head: "E-Commerce & Transaktionen", intro: "Bestellungen, Bestände und Zahlungen bleiben konsistent und in Echtzeit synchron.", items: ["Bestellungen, Zahlungen und Lagerbewegungen als Events abbilden.", "Warenkorb- und Verfügbarkeits-Updates in Echtzeit verteilen.", "Betrugsmuster im Zahlungsstrom sofort erkennen.", "Bestandssysteme, Shop und Versand konsistent synchron halten."] },
];

const comparison = [
  { feature: "Verarbeitungsmodell", kafka: "Echtzeit-Event-Streaming", redis: "In-Memory Pub/Sub", airflow: "geplante Batch-Jobs" },
  { feature: "Persistenz & Replay", kafka: "dauerhaftes Log, Replay möglich", redis: "flüchtig, kurze Haltung", airflow: "Task-Historie, keine Daten" },
  { feature: "Durchsatz", kafka: "Millionen Events pro Sekunde", redis: "sehr hoch", airflow: "nicht für Echtzeit gedacht" },
  { feature: "Latenz", kafka: "wenige Millisekunden", redis: "Sub-Millisekunde", airflow: "Minuten bis Stunden" },
  { feature: "Typischer Einsatz", kafka: "Event-Backbone, Streaming", redis: "Cache, schnelle Queues", airflow: "ETL- und Batch-Pipelines" },
  { feature: "Skalierung", kafka: "horizontal über Partitionen", redis: "über Cluster", airflow: "über Worker" },
  { feature: "Hosting & DSGVO", kafka: "self-hosted in der EU", redis: "self-hosted in der EU", airflow: "self-hosted in der EU" },
];

const steps = [
  { step: "01", icon: Phone, title: "Kostenlose Erstanalyse", time: "30 Minuten", description: "Wir klären, welche Daten in Echtzeit fließen sollten und wo heute ein Batch oder eine Datenbankabfrage bremst. Sie wissen danach, ob Kafka der richtige Hebel ist." },
  { step: "02", icon: Search, title: "Architektur & Konzept", time: "Woche 1 bis 2", description: "Wir entwerfen Topics, Partitionen und Schemas, schätzen Durchsatz und Latenz und legen fest, welche Quellen und Consumer angebunden werden." },
  { step: "03", icon: Settings2, title: "Aufbau & Integration", time: "Woche 2 bis 4", description: "Wir setzen den Cluster self-hosted in der EU auf, bauen Producer, Consumer und Connectoren und testen unter Last inklusive Fehlerfällen." },
  { step: "04", icon: Rocket, title: "Go-Live & Betrieb", time: "ab Woche 4", description: "Die Datenströme laufen. Wir überwachen Lag und Durchsatz, skalieren mit und binden die nächsten Event-Quellen an, wenn Sie bereit sind." },
];

const related = [
  { href: "/leistungen/data-engineering", icon: Database, title: "Data Engineering", desc: "Pipelines, Data Warehouse und saubere Datenmodelle als Fundament für Ihre Streaming-Architektur." },
  { href: "/leistungen/apache-airflow", icon: Workflow, title: "Apache Airflow", desc: "Der Batch-Gegenpart zu Kafka: geplante ETL- und Datenpipelines, zuverlässig orchestriert." },
  { href: "/leistungen/mlops", icon: Brain, title: "MLOps & LLMOps", desc: "Modelle in Produktion bringen und betreiben, gespeist mit Echtzeit-Daten aus Kafka." },
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
      <Script id="faq-kafka" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-kafka" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <LogoBox slug="apachekafka" alt="Apache Kafka" imgClassName="w-9 h-9" boxClassName="rounded-xl p-2 shadow-sm" />
                    <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                      Apache Kafka, Event Streaming
                    </Badge>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Apache Kafka, das <span className="text-primary">Nervensystem Ihrer Echtzeit-Daten</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Wir konzipieren und betreiben Apache Kafka für Echtzeit-Datenstreaming und Event-Driven-Architekturen, als Nervensystem für Ihre datengetriebenen und KI-gestützten Anwendungen. Self-hosted in der EU, DSGVO-konform und mit vollständigem Monitoring.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Assessment</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#vergleich">Streaming vs. Batch</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> Self-hosted in der EU</span>
                    <span className="flex items-center gap-1.5"><Brain className="w-4 h-4 text-primary" /> KI-ready Datenströme</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Hero visual: Event-Stream diagram */}
                <div className="relative">
                  <Card className="border-2 shadow-xl shadow-primary/5 overflow-hidden">
                    <CardHeader className="border-b border-border py-3">
                      <div className="flex items-center gap-2">
                        <LogoBox slug="apachekafka" alt="Apache Kafka" imgClassName="w-4 h-4" boxClassName="p-1 rounded" />
                        <span className="font-mono text-xs text-muted-foreground">orders.events.stream</span>
                        <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> aktiv
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3 rounded-xl border-2 border-primary/40 bg-primary/5 px-3.5 py-2.5">
                        <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0"><Zap className="w-5 h-5 text-primary" /></div>
                        <div className="min-w-0"><div className="text-[10px] uppercase tracking-wider text-primary font-medium">Producer</div><div className="text-sm font-semibold truncate">Neue Bestellung erzeugt Event</div></div>
                      </div>
                      {[
                        { icon: Database, label: "Consumer", title: "In Data Warehouse schreiben" },
                        { icon: Brain, label: "Consumer", title: "KI-Modell in Echtzeit speisen" },
                        { icon: Activity, label: "Consumer", title: "Live-Dashboard aktualisieren" },
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
                    <Gauge className="w-3.5 h-3.5 text-primary" /> Mio. Events/s
                  </div>
                  <div className="hidden lg:flex absolute -bottom-4 -left-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium">
                    <Lock className="w-3.5 h-3.5 text-primary" /> DSGVO, EU-Hosting
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was ist Apache Kafka und wann brauchen Sie es?</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p><strong className="text-foreground">Apache Kafka</strong> ist eine verteilte Plattform für Event Streaming. Anwendungen schreiben Ereignisse, sogenannte Events, in dauerhafte Logs, die <strong className="text-foreground">Topics</strong> heißen. Beliebig viele Verbraucher lesen diese Events in der Reihenfolge, in der sie entstanden sind, in Echtzeit oder später.</p>
                    <p>Anders als eine klassische Datenbank speichert Kafka einen <strong className="text-foreground">fortlaufenden Strom</strong> von Ereignissen. Das macht es zur idealen Grundlage für Echtzeit-Daten, Event-Driven-Architekturen und für Systeme, die mit hohem Durchsatz und niedriger Latenz arbeiten müssen.</p>
                    <p>Wir konzipieren, bauen und betreiben Kafka für Sie, <strong className="text-foreground">self-hosted in der EU</strong> und DSGVO-konform. Sie bekommen ein stabiles Nervensystem für Ihre Daten, mit Monitoring und klarer Abgrenzung, wo Streaming sinnvoll ist und wo ein Batch-Ansatz die bessere Wahl bleibt.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Event Streaming</Badge>
                    <Badge variant="secondary" className="rounded-full">Echtzeit-Daten</Badge>
                    <Badge variant="secondary" className="rounded-full">Event-Driven</Badge>
                    <Badge variant="secondary" className="rounded-full">Datenstreaming</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Apache Kafka auf einen Blick</CardTitle>
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
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum Streaming?</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Wo heute Batch wartet, fließt morgen ein Echtzeit-Stream</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Überall, wo Daten heute warten müssen, bis ein Batch sie abholt, bringt Kafka Tempo: Ereignisse fließen in dem Moment, in dem sie passieren.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 pl-1">Was heute passiert</div>
                  {problems.map(({ problem }, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl border bg-background"><X className="w-5 h-5 text-destructive mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{problem}</span></div>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-2 pl-1">Was Kafka tut</div>
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
                <h2 className="text-3xl md:text-4xl font-bold">Mehr als einen Cluster aufsetzen</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Wir bauen Streaming-Architekturen, die produktiv halten, und denken Datenschutz, Durchsatz und Betrieb von Anfang an mit.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="hover-lift border-2 lg:col-span-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2"><Network className="w-6 h-6 text-primary" /></div>
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
                <h2 className="text-3xl md:text-4xl font-bold">Was wir mit Apache Kafka umsetzen</h2>
                <p className="text-lg text-muted-foreground mt-4">Wählen Sie einen Bereich, wir zeigen konkrete Datenströme aus der Praxis.</p>
              </div>
              <Tabs defaultValue="analytics" className="w-full">
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
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Tool-Vergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Apache Kafka vs. Redis vs. Airflow</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Streaming, schnelle Queue oder geplanter Batch? Welcher Weg passt, hängt von Latenz, Datenmenge und Anwendungsfall ab. Wir beraten unabhängig.</p>
              </div>
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[28%] font-bold text-foreground">Merkmal</TableHead>
                      <TableHead className="text-primary font-bold"><span className="inline-flex items-center gap-1.5"><LogoBox slug="apachekafka" alt="Apache Kafka" imgClassName="w-4 h-4" boxClassName="p-0.5" />Kafka</span></TableHead>
                      <TableHead className="text-muted-foreground"><span className="inline-flex items-center gap-1.5"><LogoBox slug="redis" alt="Redis" imgClassName="w-4 h-4" boxClassName="p-0.5" />Redis</span></TableHead>
                      <TableHead className="text-muted-foreground"><span className="inline-flex items-center gap-1.5"><LogoBox slug="apacheairflow" alt="Apache Airflow" imgClassName="w-4 h-4" boxClassName="p-0.5" />Airflow</span></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparison.map((row, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{row.feature}</TableCell>
                        <TableCell className="text-sm text-primary font-medium">{row.kafka}</TableCell>
                        <TableCell className="text-sm">{row.redis}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{row.airflow}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
              <p className="text-sm text-muted-foreground text-center mt-4">Für geplante Batch-Verarbeitung kombinieren wir Kafka mit <a href="/leistungen/apache-airflow" className="text-primary hover:underline">Apache Airflow</a>. Kafka liefert den Echtzeit-Strom, Airflow orchestriert die geplanten Strecken. Oft ist die Kombination aus beidem die richtige Antwort.</p>
            </div>
          </section>

          {/* PROZESS */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unser Prozess</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Ihr Kafka-Projekt in 4 Schritten</h2>
                <p className="text-lg text-muted-foreground mt-4">Transparent, ohne Überraschungen und mit ehrlicher Empfehlung zwischen Streaming und Batch.</p>
              </div>
              <ProcessSteps steps={steps} />
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zu Apache Kafka</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zu Apache Kafka</h2>
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
