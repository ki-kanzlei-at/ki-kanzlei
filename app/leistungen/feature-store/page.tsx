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
  Boxes, ArrowRightLeft, Workflow, MapPin, Database, Gauge, Check, X, Lock, Zap, Shield, ShieldCheck,
  FlaskConical, Microscope, Sparkles, Activity, Phone, Search, Settings2, Rocket, Clock, Network,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Feature Store für ML: konsistente Features für Training & Serving",
  description:
    "Feature Store für Machine Learning: Wir bauen zentrale Feature Stores, die ML-Features einmal definieren und in Training und Serving konsistent bereitstellen, gegen Training-Serving-Skew. Self-hosted in der EU, als Teil eines robusten MLOps-Setups im DACH-Raum.",
  keywords:
    "Feature Store, ML Features, Feature Engineering, Feature Store MLOps, Training Serving Skew, Feature Store Machine Learning, Online Store, Offline Store, Feast, Feature Store self-hosted, MLOps DACH, ML Plattform",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/feature-store" },
};

const faqs = [
  {
    q: "Was ist ein Feature Store und wofür braucht man ihn?",
    a: "Ein Feature Store ist eine zentrale Plattform, die ML-Features verwaltet, also die aufbereiteten Merkmale, mit denen Machine-Learning-Modelle lernen und entscheiden. Statt dass jedes Projekt seine Features in eigenen Skripten neu berechnet, werden sie einmal definiert, versioniert und für alle Modelle nutzbar gemacht. Der Feature Store stellt dieselben Features sowohl im Training als auch im Live-Betrieb bereit. Das spart doppelte Arbeit, macht Features wiederverwendbar und sorgt dafür, dass Ihre Modelle in der Produktion genau die Werte sehen, mit denen sie gelernt haben.",
  },
  {
    q: "Was ist Training-Serving-Skew und wie verhindert ihn ein Feature Store?",
    a: "Training-Serving-Skew bezeichnet die Situation, in der ein Feature im Training anders berechnet wird als im Live-Betrieb. Das passiert schnell, wenn Trainings-Pipeline und Produktions-Code getrennt gepflegt werden. Die Folge: Das Modell schneidet im Echtbetrieb schlechter ab als im Test, ohne dass die Ursache offensichtlich ist. Ein Feature Store löst das, indem Offline- und Online-Pfad sich eine einzige Feature-Definition teilen. Beide Wege stammen aus derselben Logik, deshalb wird der Skew konstruktiv vermieden statt mühsam hinterhergeräumt.",
  },
  {
    q: "Worin unterscheiden sich Offline- und Online-Store?",
    a: "Der Offline-Store liefert historische Feature-Werte für das Training und für Batch-Auswertungen. Er ist auf große Datenmengen und Reproduzierbarkeit ausgelegt. Der Online-Store hält die jeweils aktuellen Werte vor und liefert sie in Millisekunden für die Inferenz im Live-Betrieb. Entscheidend ist, dass beide aus einer gemeinsamen Feature-Definition gespeist und synchron gehalten werden. So bekommt das Modell in der Produktion dieselbe Sicht auf die Daten wie im Training.",
  },
  {
    q: "Welche Feature-Store-Technologie setzen Sie ein?",
    a: "Wir arbeiten bevorzugt mit Open-Source-Lösungen wie Feast, die sich self-hosted auf Ihrer Infrastruktur in der EU betreiben lassen. Damit vermeiden Sie Vendor Lock-in und Ihre Feature-Daten bleiben bei Ihnen. Wenn Sie bereits auf einer Plattform wie Databricks aufsetzen, integrieren wir den dortigen Feature Store. Wir wählen die Technologie nach Ihren Datenquellen, Ihrer bestehenden Infrastruktur und Ihren Anforderungen an Latenz und Datenschutz, nicht nach dem, was uns am bequemsten ist.",
  },
  {
    q: "Brauchen wir einen Feature Store oder reichen unsere bestehenden Pipelines?",
    a: "Solange ein einzelnes Modell von einer Person betreut wird, reichen schlanke Pipelines oft aus. Sobald aber mehrere Modelle oder mehrere Personen an ML arbeiten, beginnen Features auseinanderzulaufen, werden doppelt gebaut und im Live-Betrieb anders berechnet als im Training. Ab diesem Punkt zahlt sich ein Feature Store schnell aus. Im kostenlosen Assessment schauen wir uns Ihre konkrete Situation an und sagen ehrlich, ob sich der Aufbau für Sie heute schon lohnt oder noch nicht.",
  },
  {
    q: "Wie passt der Feature Store in unser MLOps-Setup?",
    a: "Der Feature Store ist kein Einzelteil, sondern ein Baustein eines robusten MLOps-Fundaments. Wir verzahnen ihn mit Ihren Datenpipelines, der Modell-Registry, dem Deployment und dem Monitoring. Feature-Definitionen werden versioniert und über CI/CD ausgerollt, Offline- und Online-Store automatisch synchron gehalten und die Feature-Qualität überwacht. So entsteht eine durchgängige Strecke von den Rohdaten bis zum produktiven Modell, ohne Bruchstellen.",
  },
  {
    q: "Ist der Feature Store DSGVO-konform und wo liegen die Daten?",
    a: "Ja. Wir betreiben den Feature Store self-hosted auf Ihrer Infrastruktur in der EU oder bei einem europäischen Anbieter Ihrer Wahl. Ihre Trainings- und Feature-Daten verlassen Ihre Umgebung nicht. Das ist gerade im DACH-Raum entscheidend, wo häufig personenbezogene oder sensible Daten in die Features einfließen. Auf Wunsch unterstützen wir bei Zugriffskonzept, Pseudonymisierung und Dokumentation, damit der Feature Store sauber in Ihre Datenschutzorganisation passt.",
  },
  {
    q: "Wie lange dauert die Einführung eines Feature Stores?",
    a: "Ein erster produktiver Feature Store mit den wichtigsten Features steht oft innerhalb von vier bis sechs Wochen. Wir starten bewusst mit einem konkreten Use Case, der den größten Nutzen bringt, etwa einem Scoring- oder Empfehlungsmodell, und bauen den Feature-Katalog von dort aus schrittweise aus. So sehen Sie früh Ergebnisse, statt monatelang an einer großen Plattform zu bauen, bevor das erste Modell profitiert.",
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
  name: "Feature Store für Machine Learning",
  serviceType: "Feature Store, MLOps, Feature Engineering",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "Feature Store für Machine Learning im DACH-Raum: Aufbau zentraler Feature Stores, die ML-Features einmal definieren und in Training und Serving konsistent bereitstellen, gegen Training-Serving-Skew. Self-hosted in der EU als Teil eines robusten MLOps-Setups.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const stats = [
  { value: "1x", label: "Feature definieren, überall nutzen" },
  { value: "0", label: "Training-Serving-Skew" },
  { value: "EU", label: "self-hosted & DSGVO-konform" },
  { value: "ms", label: "Latenz im Online-Abruf" },
];

const ataglance = [
  ["Typ", "zentrale Feature-Plattform"],
  ["Kernfunktion", "Offline- und Online-Store"],
  ["Verhindert", "Training-Serving-Skew"],
  ["Basis", "Open Source, z. B. Feast"],
  ["Hosting", "self-hosted in der EU"],
  ["Teil von", "Ihrem MLOps-Setup"],
];

const problems = [
  { problem: "Dasselbe Feature wird im Training anders berechnet als im Live-Betrieb.", solution: "Der Feature Store liefert eine einzige Definition für Training und Serving, der Skew verschwindet." },
  { problem: "Jedes Modellprojekt baut seine Feature-Pipelines neu, Arbeit wird doppelt gemacht.", solution: "Features werden einmal definiert, versioniert und vom ganzen Team wiederverwendet." },
  { problem: "Niemand weiß, wie ein Feature entstanden ist oder ob es noch aktuell ist.", solution: "Ein zentraler Katalog dokumentiert Herkunft, Definition und Aktualität jedes Features." },
  { problem: "Im Live-Betrieb fehlen die Werte, die das Modell im Training gesehen hat.", solution: "Der Online-Store stellt aktuelle Feature-Werte in Millisekunden für die Inferenz bereit." },
];

const bentoFeatures = [
  { icon: Boxes, title: "Ein Feature, eine Wahrheit für Training und Serving", description: "Im Feature Store definieren Sie jedes ML-Feature genau einmal. Dieselbe Definition speist Training und Live-Betrieb. So sieht Ihr Modell in der Produktion exakt die Werte, mit denen es gelernt hat. Genau das verhindert Training-Serving-Skew, einen der häufigsten Gründe, warum Modelle im Echtbetrieb schlechter abschneiden als im Test." },
  { icon: ArrowRightLeft, title: "Schluss mit Training-Serving-Skew", description: "Offline- und Online-Pfad teilen sich eine Logik. Abweichungen zwischen Training und Serving werden konstruktiv vermieden, nicht mühsam hinterhergeräumt." },
  { icon: FlaskConical, title: "Feature Engineering, wiederverwendbar", description: "Einmal sauber gebaute Features landen im Katalog und stehen jedem Modellprojekt zur Verfügung. Kein doppeltes Pipeline-Bauen mehr." },
  { icon: Gauge, title: "Online-Store für Echtzeit", description: "Der Online-Store liefert aktuelle Feature-Werte in Millisekunden, damit Ihre Modelle auch im Live-Betrieb mit frischen Daten entscheiden." },
  { icon: ShieldCheck, title: "Self-hosted in der EU", description: "Wir betreiben den Feature Store auf Ihrer Infrastruktur in der EU. Ihre Trainings- und Feature-Daten bleiben bei Ihnen, DSGVO-konform." },
  { icon: Workflow, title: "Teil Ihres MLOps-Setups", description: "Der Feature Store ist kein Einzelteil. Wir verzahnen ihn mit Pipelines, Modell-Registry und Monitoring zu einem robusten MLOps-Fundament." },
];

const departments = [
  { value: "datascience", label: "Data Science", icon: Microscope, head: "Data Science & Modellentwicklung", intro: "Schneller von der Idee zum Modell, mit Features, die schon existieren.", items: ["Vorhandene ML-Features aus dem Katalog wiederverwenden statt jede Pipeline neu zu bauen.", "Neue Features einmal definieren und sofort fürs Training bereitstellen.", "Konsistente Trainingsdaten ohne stilles Auseinanderlaufen von Versionen.", "Experimente schneller starten, weil die Datengrundlage bereitsteht."] },
  { value: "mlops", label: "MLOps", icon: Workflow, head: "MLOps & Betrieb", intro: "Modelle gehen in Produktion, ohne dass die Features zur Blackbox werden.", items: ["Feature-Definitionen versionieren und nachvollziehbar halten.", "Offline- und Online-Store automatisch synchron halten.", "Feature-Qualität und Aktualität überwachen, bevor Modelle leiden.", "Den Feature Store in CI/CD und Modell-Deployment einbinden."] },
  { value: "echtzeit", label: "Echtzeit-Serving", icon: Gauge, head: "Echtzeit-Serving", intro: "Modelle entscheiden im Live-Betrieb mit aktuellen Werten.", items: ["Feature-Werte in Millisekunden für die Online-Inferenz abrufen.", "Aktuelle Ereignisse, etwa die letzte Transaktion, sofort einfließen lassen.", "Hohe Last sauber abfedern, ohne dass Latenzen explodieren.", "Gleiche Feature-Logik wie im Training, garantiert ohne Skew."] },
  { value: "betrug", label: "Betrugserkennung", icon: Shield, head: "Betrugserkennung & Scoring", intro: "Risikomodelle, die im Moment der Entscheidung verlässlich sind.", items: ["Verhaltensmerkmale je Kunde zentral berechnen und vorhalten.", "Echtzeit-Features wie Frequenz und Betrag der letzten Transaktionen nutzen.", "Scoring-Modelle mit denselben Features trainieren und ausliefern.", "Neue Betrugsmuster als Feature ergänzen, ohne alles umzubauen."] },
  { value: "empfehlung", label: "Empfehlungen", icon: Sparkles, head: "Empfehlungen & Personalisierung", intro: "Relevante Vorschläge auf Basis frischer Nutzersignale.", items: ["Nutzer- und Produktmerkmale zentral pflegen und teilen.", "Aktuelles Verhalten in Echtzeit in die Empfehlung einfließen lassen.", "Mehrere Modelle auf derselben Feature-Basis betreiben.", "Kalte Starts abfedern, weil Features bereits vorberechnet sind."] },
  { value: "wartung", label: "Predictive Maintenance", icon: Activity, head: "Predictive Maintenance", intro: "Ausfälle früh erkennen, mit Features aus Sensor- und Maschinendaten.", items: ["Sensor-Aggregationen je Anlage einmal definieren und wiederverwenden.", "Trainings- und Live-Features aus denselben Datenströmen ableiten.", "Schwellen- und Trendmerkmale konsistent über Anlagen hinweg berechnen.", "Neue Maschinentypen anbinden, ohne die Feature-Logik zu duplizieren."] },
];

const comparison = [
  { feature: "Feature-Definition", ohne: "in jedem Projekt neu", eigenbau: "verteilte Skripte", store: "einmal zentral definiert" },
  { feature: "Training vs. Serving", ohne: "weicht oft ab", eigenbau: "manuell abgeglichen", store: "garantiert konsistent" },
  { feature: "Training-Serving-Skew", ohne: "häufig", eigenbau: "schwer zu kontrollieren", store: "konstruktiv vermieden" },
  { feature: "Wiederverwendung", ohne: "kaum", eigenbau: "per Copy-Paste", store: "geteilter Feature-Katalog" },
  { feature: "Echtzeit-Abruf", ohne: "nicht vorgesehen", eigenbau: "aufwändig selbst gebaut", store: "Online-Store in Millisekunden" },
  { feature: "Governance & Historie", ohne: "fehlt", eigenbau: "lückenhaft", store: "versioniert und nachvollziehbar" },
  { feature: "Hosting & Datenhoheit", ohne: "unklar", eigenbau: "uneinheitlich", store: "self-hosted in der EU" },
];

const steps = [
  { step: "01", icon: Phone, title: "Kostenlose Erstanalyse", time: "30 Minuten", description: "Wir schauen uns Ihre ML-Vorhaben und bestehenden Pipelines an und klären, wo inkonsistente Features heute Probleme machen. Sie wissen danach, ob ein Feature Store den Hebel bringt." },
  { step: "02", icon: Search, title: "Feature-Audit & Architektur", time: "Woche 1", description: "Wir erfassen Ihre Datenquellen und vorhandenen Features, entwerfen die Architektur aus Offline- und Online-Store und legen die Technologie fest, self-hosted in der EU." },
  { step: "03", icon: Settings2, title: "Aufbau & Integration", time: "Woche 2 bis 4", description: "Wir setzen den Feature Store auf, migrieren erste Features, verbinden Training und Serving und richten Synchronisation und Monitoring ein." },
  { step: "04", icon: Rocket, title: "Go-Live & Betreuung", time: "ab Woche 4", description: "Ihre Modelle ziehen Features aus dem Store, in Training und Live-Betrieb identisch. Wir überwachen, optimieren und bauen den Katalog mit Ihnen aus." },
];

const related = [
  { href: "/leistungen/mlops", icon: Workflow, title: "MLOps & LLMOps", desc: "Pipelines, Modell-Registry und Monitoring, das robuste Fundament, in das sich Ihr Feature Store einfügt." },
  { href: "/leistungen/databricks", icon: Database, title: "Databricks", desc: "Lakehouse-Plattform für Daten und ML, ideale Basis für Feature-Pipelines und Trainingsdaten." },
  { href: "/leistungen/data-engineering", icon: Network, title: "Data Engineering", desc: "Verlässliche Datenpipelines, die Ihren Feature Store mit sauberen, aktuellen Daten versorgen." },
];

export default function Page() {
  return (
    <>
      <Script id="faq-featurestore" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-featurestore" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

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
                      <Boxes className="w-9 h-9 text-primary" />
                    </span>
                    <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                      Feature Store, MLOps
                    </Badge>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Feature Store: ML-Features <span className="text-primary">konsistent in Training und Serving</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Wir bauen Feature Stores, die Ihre ML-Features zentral verwalten und in Training und Live-Betrieb konsistent bereitstellen. Schluss mit Training-Serving-Skew. Self-hosted in der EU, als fester Teil eines robusten MLOps-Setups.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Assessment</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#vergleich">Feature Store im Vergleich</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ArrowRightLeft className="w-4 h-4 text-primary" /> Kein Training-Serving-Skew</span>
                    <span className="flex items-center gap-1.5"><Workflow className="w-4 h-4 text-primary" /> Teil Ihres MLOps</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Hero visual: Feature flow */}
                <div className="relative">
                  <Card className="border-2 shadow-xl shadow-primary/5 overflow-hidden">
                    <CardHeader className="border-b border-border py-3">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center justify-center bg-primary/10 border border-primary/20 rounded p-1"><Boxes className="w-4 h-4 text-primary" /></span>
                        <span className="font-mono text-xs text-muted-foreground">customer_features.py</span>
                        <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> synchron
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3 rounded-xl border-2 border-primary/40 bg-primary/5 px-3.5 py-2.5">
                        <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0"><Boxes className="w-5 h-5 text-primary" /></div>
                        <div className="min-w-0"><div className="text-[10px] uppercase tracking-wider text-primary font-medium">Definition</div><div className="text-sm font-semibold truncate">customer_30d_spend</div></div>
                      </div>
                      {[
                        { icon: Database, label: "Offline Store", title: "Historische Werte fürs Training" },
                        { icon: Gauge, label: "Online Store", title: "Millisekunden fürs Serving" },
                        { icon: ArrowRightLeft, label: "Kein Skew", title: "Training und Serving identisch" },
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
                    <Boxes className="w-3.5 h-3.5 text-primary" /> 1x definiert
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

          <ModelLogoStrip
            caption="Feature Stores im modernen ML-Stack"
            items={[
              { slug: "databricks", name: "Databricks" },
              { slug: "snowflake", name: "Snowflake" },
              { slug: "redis", name: "Redis" },
              { slug: "postgresql", name: "PostgreSQL" },
              { slug: "mlflow", name: "MLflow" },
            ]}
          />

          {/* DEFINITION */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Kurz erklärt</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was ist ein Feature Store und für wen lohnt er sich?</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p><strong className="text-foreground">Ein Feature Store</strong> ist eine zentrale Plattform, die ML-Features verwaltet, also die aufbereiteten Merkmale, mit denen Modelle lernen und entscheiden. Statt dass jedes Projekt seine Features in eigenen Skripten berechnet, werden sie einmal definiert, versioniert und für alle nutzbar gemacht.</p>
                    <p>Der Kern ist die Trennung in zwei Pfade. Der <strong className="text-foreground">Offline-Store</strong> liefert historische Werte fürs Training, der <strong className="text-foreground">Online-Store</strong> stellt dieselben Features in Millisekunden für den Live-Betrieb bereit. Weil beide aus einer Definition stammen, sieht ein Modell in der Produktion exakt das, was es im Training gelernt hat. Damit verschwindet der <strong className="text-foreground">Training-Serving-Skew</strong>.</p>
                    <p>Für wen sich das lohnt: Sobald mehr als ein Modell oder mehr als ein Mensch an ML arbeitet, zahlt sich gutes <strong className="text-foreground">Feature Engineering</strong> mit Wiederverwendung aus. Wir bauen den Feature Store als festen Bestandteil Ihres MLOps-Setups, self-hosted in der EU, damit Ihre Daten bei Ihnen bleiben.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">ML-Features</Badge>
                    <Badge variant="secondary" className="rounded-full">Feature Engineering</Badge>
                    <Badge variant="secondary" className="rounded-full">Training-Serving-Skew</Badge>
                    <Badge variant="secondary" className="rounded-full">Feature Store MLOps</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Feature Store auf einen Blick</CardTitle>
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
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum ein Feature Store?</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Wo Features heute auseinanderlaufen, schafft der Store eine Wahrheit</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Überall, wo Training und Live-Betrieb getrennt gepflegt werden, entsteht Skew. Der Feature Store hält beide Seiten konsistent, automatisch und nachvollziehbar.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 pl-1">Was heute passiert</div>
                  {problems.map(({ problem }, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl border bg-background"><X className="w-5 h-5 text-destructive mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{problem}</span></div>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-2 pl-1">Was der Feature Store tut</div>
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
                <h2 className="text-3xl md:text-4xl font-bold">Mehr als ein Feature-Speicher</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Wir bauen Feature Stores, die ML-Features konsistent halten, und denken Datenschutz, Echtzeit und MLOps von Anfang an mit.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="hover-lift border-2 lg:col-span-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2"><Boxes className="w-6 h-6 text-primary" /></div>
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
                <h2 className="text-3xl md:text-4xl font-bold">Wofür Teams ML-Features im Store nutzen</h2>
                <p className="text-lg text-muted-foreground mt-4">Wählen Sie einen Bereich, wir zeigen konkrete Abläufe aus der Praxis.</p>
              </div>
              <Tabs defaultValue="datascience" className="w-full">
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
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Im Vergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Ohne Feature Store, Eigenbau oder echter Feature Store</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Was Sie wählen, hängt von der Anzahl Ihrer Modelle, Ihrem Echtzeit-Bedarf und Ihrem Anspruch an Konsistenz ab. Wir beraten unabhängig.</p>
              </div>
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[28%] font-bold text-foreground">Merkmal</TableHead>
                      <TableHead className="text-muted-foreground"><span className="inline-flex items-center gap-1.5"><X className="w-4 h-4" />Ohne Feature Store</span></TableHead>
                      <TableHead className="text-muted-foreground"><span className="inline-flex items-center gap-1.5"><Settings2 className="w-4 h-4" />Eigenbau</span></TableHead>
                      <TableHead className="text-primary font-bold"><span className="inline-flex items-center gap-1.5"><Boxes className="w-4 h-4" />Feature Store</span></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparison.map((row, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{row.feature}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{row.ohne}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{row.eigenbau}</TableCell>
                        <TableCell className="text-sm text-primary font-medium">{row.store}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
              <p className="text-sm text-muted-foreground text-center mt-4">Unser Standard für den DACH-Raum ist ein self-hosted Feature Store in der EU, eingebettet in Ihr <a href="/leistungen/mlops" className="text-primary hover:underline">MLOps</a>-Setup. So bleiben Ihre Feature-Daten bei Ihnen und Ihre Modelle konsistent.</p>
            </div>
          </section>

          {/* PROZESS */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unser Prozess</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Ihr Feature Store in 4 Schritten</h2>
                <p className="text-lg text-muted-foreground mt-4">Transparent, ohne Überraschungen und mit ehrlicher Technologie-Empfehlung.</p>
              </div>
              <ProcessSteps steps={steps} />
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zum Feature Store</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zum Feature Store</h2>
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
