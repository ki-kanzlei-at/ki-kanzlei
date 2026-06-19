import type { Metadata } from "next";
import Script from "next/script";
import { NavigationHome } from "@/components/NavigationHome";
import { ModelLogoStrip } from "@/components/ModelLogoStrip";
import { FooterModern } from "@/components/FooterModern";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { serviceLogos } from "@/lib/serviceLogos";
import {
  Check,
  X,
  Phone,
  Search,
  Rocket,
  TrendingUp,
  Map,
  Activity,
  Gauge,
  LineChart,
  Bell,
  Server,
  Database,
  Cpu,
  Layers,
  Unlock,
  ShieldCheck,
  Bot,
  Boxes,
  Globe,
  LayoutDashboard,
  FileText,
  Network,
  Plug,
  Container,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Monitoring & Observability mit Grafana",
  description:
    "Monitoring und Observability mit Grafana und Prometheus für KI-Systeme, Server und Anwendungen: Grafana Dashboards, Metriken, Loki-Logs, Alerting, Uptime sowie LLM- und Kosten-Monitoring. Self-hosted in der EU, DSGVO-konform.",
  keywords:
    "Grafana, Monitoring, Observability, Prometheus Grafana, Grafana Dashboards, Monitoring Beratung, Kubernetes Monitoring, LLM Monitoring, Alerting, DevOps, Monitoring Österreich, Monitoring DACH, Grafana DACH, Kubernetes Monitoring Deutschland, Observability Schweiz, Deutschland, Schweiz, DACH",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/monitoring-grafana" },
};

const faqs = [
  {
    q: "Was ist der Unterschied zwischen Monitoring und Observability?",
    a: "Monitoring beantwortet die Frage, ob ein System läuft: Es überwacht bekannte Kennzahlen wie CPU-Last, Speicher, Antwortzeiten oder Fehlerraten und schlägt Alarm, wenn ein Schwellwert überschritten wird. Observability geht einen Schritt weiter und macht ein System von innen heraus verständlich, sodass Sie auch unbekannte Probleme nachvollziehen können. Die drei Säulen der Observability sind Metriken, Logs und Traces. Mit einem Grafana-Stack führen wir alle drei an einer Stelle zusammen, damit Sie nicht nur sehen, dass etwas hakt, sondern auch warum.",
  },
  {
    q: "Was ist Grafana und wofür wird es eingesetzt?",
    a: "Grafana ist die führende Open-Source-Plattform für Dashboards und Visualisierung von Monitoring-Daten. Grafana zapft verschiedene Datenquellen an, allen voran Prometheus für Metriken und Loki für Logs, und stellt sie in übersichtlichen, interaktiven Grafana Dashboards dar. So entsteht eine einzige Oberfläche für Ihre gesamte Infrastruktur, vom KI-Modell über Kubernetes bis zur Datenbank. Wir bauen maßgeschneiderte Dashboards, die genau die Kennzahlen zeigen, die für Ihr Team und Ihr Geschäft relevant sind, statt einer Flut nichtssagender Graphen.",
  },
  {
    q: "Wie arbeiten Prometheus und Grafana zusammen?",
    a: "Prometheus und Grafana sind das Standard-Duo der modernen Observability. Prometheus sammelt und speichert Zeitreihen-Metriken: Es fragt in regelmäßigen Abständen sogenannte Exporter ab, etwa node_exporter für Server oder kube-state-metrics für Kubernetes, und legt die Werte in einer effizienten Time-Series-Datenbank ab. Grafana greift per Abfragesprache PromQL auf diese Daten zu und macht sie sichtbar. Das Zusammenspiel von Prometheus Grafana ist Open Source, herstellerneutral und voll self-hosted betreibbar, sodass keine sensiblen Betriebsdaten an externe Cloud-Dienste abfließen.",
  },
  {
    q: "Wie funktioniert Alerting und wer wird benachrichtigt?",
    a: "Alerting bedeutet, dass Ihr Monitoring nicht nur Daten sammelt, sondern proaktiv warnt, bevor aus einem Problem ein Ausfall wird. Über Grafana Alerting beziehungsweise den Prometheus Alertmanager definieren wir Schwellwerte und Regeln, etwa für hohe Fehlerraten, knappen Speicher oder eine steigende LLM-Latenz. Wird eine Regel verletzt, geht die Benachrichtigung automatisch an den richtigen Kanal: E-Mail, Slack, Microsoft Teams, Telegram oder ein On-Call-Tool. Eskalationsstufen und stille Zeiten sorgen dafür, dass wichtige Alarme ankommen und unwichtige nicht in Alarmmüdigkeit untergehen.",
  },
  {
    q: "Bietet ihr Kubernetes Monitoring an?",
    a: "Ja. Kubernetes Monitoring ist einer unserer Schwerpunkte. Wir überwachen Cluster, Nodes, Pods und jedes Kubernetes Deployment durchgängig: Ressourcen-Auslastung, Pod-Neustarts, fehlgeschlagene Rollouts, Engpässe bei CPU, RAM und GPU sowie die Gesundheit Ihrer Workloads. Dafür kombinieren wir Prometheus, kube-state-metrics, den Node Exporter und fertige sowie individuelle Grafana Dashboards. So erkennen Sie Probleme im Cluster, bevor Nutzer sie bemerken, und behalten gerade bei rechenintensiven KI-Workloads die Kosten im Blick.",
  },
  {
    q: "Was ist LLM Monitoring und warum ist es wichtig?",
    a: "LLM Monitoring überwacht den Betrieb von KI- und Sprachmodellen im produktiven Einsatz. Bei klassischen Anwendungen genügen Antwortzeiten und Fehlerraten, bei KI-Systemen kommen eigene Kennzahlen hinzu: Token-Verbrauch pro Anfrage, Latenz pro Modell, Kosten je Endpunkt, Trefferquote des Caches sowie Fehler- und Timeout-Raten der Modell-Provider. Wir bilden diese Werte in Grafana ab, sodass Sie genau sehen, welches Feature wie viele Tokens und welches Budget verbraucht. Das verhindert Kostenexplosionen und macht den Wert Ihrer KI-Investition messbar.",
  },
  {
    q: "Ist der Monitoring-Stack self-hosted und DSGVO-konform?",
    a: "Ja. Wir betreiben den gesamten Grafana-Stack aus Grafana, Prometheus, Loki und Alerting self-hosted auf Servern in Österreich oder der EU, auf Wunsch auch in Ihrer eigenen Infrastruktur. Ihre Metriken, Logs und Betriebsdaten verlassen die EU nicht und landen nicht bei US-SaaS-Anbietern. Das ist datenschutzrechtlich sauber, vermeidet Vendor-Lock-in und hält die laufenden Kosten planbar, weil keine nutzungsabhängigen Lizenzgebühren pro Host oder Metrik anfallen. Auf Wunsch schließen wir einen Auftragsverarbeitungsvertrag ab und dokumentieren den Betrieb DSGVO-konform.",
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
  name: "Monitoring und Observability mit Grafana",
  serviceType: "Monitoring & Observability",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "Monitoring-, Alerting- und Observability-Stacks mit Grafana und Prometheus für KI-Systeme, Server und Anwendungen. Self-hosted in der EU, DSGVO-konform, inklusive LLM- und Kosten-Monitoring.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const heroPhases = [
  { icon: Search, step: "01", label: "Monitoring-Audit", time: "30 Min., kostenlos", desc: "Blinde Flecken finden, kritische Systeme und Kennzahlen klären." },
  { icon: Map, step: "02", label: "Stack-Architektur", time: "Woche 1", desc: "Metriken, Logs und Alerts festlegen, Datenquellen anbinden." },
  { icon: Rocket, step: "03", label: "Implementierung", time: "Woche 1 bis 3", desc: "Grafana, Prometheus, Loki und Alerting self-hosted aufsetzen." },
  { icon: TrendingUp, step: "04", label: "Betrieb & Optimierung", time: "laufend", desc: "Dashboards verfeinern, Alarme tunen, neue Systeme aufnehmen." },
];

const stats = [
  { value: "100%", label: "self-hosted in der EU, DSGVO-konform" },
  { value: "360 Grad", label: "Sicht auf Metriken, Logs und Traces" },
  { value: "unter 5 Min", label: "vom Vorfall zum Alarm dank Alerting" },
  { value: "24/7", label: "automatische Überwachung rund um die Uhr" },
];

const services = [
  { icon: LayoutDashboard, title: "Grafana Dashboards", description: "Maßgeschneiderte Grafana Dashboards als zentrale Oberfläche für Ihre gesamte Infrastruktur. Statt einer Flut von Graphen zeigen wir genau die Kennzahlen, die für Betrieb und Geschäft zählen, vom KI-Endpunkt bis zur Datenbank, übersichtlich auf einem Bildschirm." },
  { icon: Activity, title: "Prometheus Metriken", description: "Wir sammeln Zeitreihen-Metriken mit Prometheus: Server, Container, Datenbanken und Anwendungen liefern Werte, die per PromQL auswertbar sind." },
  { icon: FileText, title: "Loki Log-Management", description: "Mit Loki bündeln wir Logs aller Systeme zentral und durchsuchbar. Fehlersuche wird zur Sache von Minuten statt Stunden, direkt neben den passenden Metriken." },
  { icon: Bell, title: "Alerting & On-Call", description: "Sinnvolle Schwellwerte und Regeln warnen über E-Mail, Slack, Teams oder On-Call-Tools, mit Eskalationsstufen, bevor aus einem Vorfall ein Ausfall wird." },
  { icon: Gauge, title: "Uptime & Verfügbarkeit", description: "Blackbox-Checks und Health-Probes überwachen Erreichbarkeit, SSL-Zertifikate und SLAs Ihrer Dienste rund um die Uhr, von außen wie von innen." },
  { icon: Bot, title: "LLM- & Kosten-Monitoring", description: "Token-Verbrauch, Latenz und Kosten pro Modell und Feature in Echtzeit. So bleiben KI-Workloads transparent und Budgets unter Kontrolle." },
];

const targets = [
  { value: "ki", label: "KI-Systeme", icon: Bot, head: "KI- & LLM-Systeme", text: "LLM Monitoring für produktive KI: Token-Verbrauch, Latenz pro Modell, Kosten je Endpunkt, Fehler- und Timeout-Raten der Provider sowie GPU-Auslastung. Sie sehen genau, welches Feature welches Budget verbraucht, und vermeiden Kostenüberraschungen." },
  { value: "k8s", label: "Kubernetes", icon: Boxes, head: "Kubernetes & Cluster", text: "Kubernetes Monitoring mit Prometheus und kube-state-metrics: Cluster, Nodes, Pods und jedes Kubernetes Deployment im Blick, inklusive Pod-Neustarts, fehlgeschlagener Rollouts und Ressourcen-Engpässen bei CPU, RAM und GPU." },
  { value: "infra", label: "Server & VMs", icon: Server, head: "Server, VMs & Hardware", text: "Mit dem node_exporter überwachen wir CPU, Arbeitsspeicher, Festplatten, Netzwerk und Temperatur Ihrer Server und virtuellen Maschinen. Kapazitätsengpässe werden sichtbar, lange bevor sie zum Problem werden." },
  { value: "db", label: "Datenbanken", icon: Database, head: "Datenbanken & Caches", text: "PostgreSQL, MySQL, Redis und Co. werden auf Abfragezeiten, Verbindungen, Replikation und Sperren überwacht. Langsame Queries und volle Verbindungspools fallen früh auf, nicht erst beim Ausfall." },
  { value: "apps", label: "Anwendungen", icon: Activity, head: "Anwendungen & APIs", text: "Antwortzeiten, Durchsatz und Fehlerraten Ihrer Web-Apps und Schnittstellen nach den bewährten RED- und USE-Methoden. So erkennen Sie Performance-Probleme aus Sicht der Nutzer, nicht nur der Maschine." },
  { value: "uptime", label: "Uptime & SSL", icon: Globe, head: "Uptime & Zertifikate", text: "Externe Blackbox-Checks prüfen Erreichbarkeit, Antwortzeiten und HTTP-Status Ihrer Dienste weltweit. Ablaufende SSL-Zertifikate und Domain-Fristen melden wir rechtzeitig, bevor sie Schaden anrichten." },
];

const maturity = [
  { level: 1, fill: 1, title: "Blindflug", desc: "Kein Monitoring im Einsatz. Ausfälle fallen erst auf, wenn Kunden oder Mitarbeiter sich beschweren. Hier setzt das Audit an." },
  { level: 2, fill: 2, title: "Basis-Metriken", desc: "Einzelne Checks und Bordmittel laufen, aber ohne zentrale Sicht und ohne verlässliches Alerting." },
  { level: 3, fill: 3, title: "Zentrale Observability", desc: "Metriken, Logs und Alerts laufen in Grafana zusammen. Probleme werden früh erkannt und gezielt benachrichtigt." },
  { level: 4, fill: 4, title: "Full-Stack Observability", desc: "Metriken, Logs und Traces, SLOs sowie LLM- und Kosten-Monitoring greifen ineinander, mit kontinuierlicher Optimierung." },
];

const bigComparison = [
  { feature: "Datenhaltung", internal: "Je nach Setup, oft uneinheitlich", freelancer: "Meist US-SaaS-Cloud", big: "Provider-Rechenzentren weltweit", kanzlei: "Self-hosted in Österreich und der EU" },
  { feature: "Kostenmodell", internal: "Versteckter Zeitaufwand", freelancer: "Pro Host und Metrik, schnell teuer", big: "An Provider-Tarife gebunden", kanzlei: "Open Source, planbare Fixkosten" },
  { feature: "Vendor-Lock-in", internal: "Bastellösungen, schwer wartbar", freelancer: "Hoch, proprietäre Agenten", big: "An einen Anbieter gebunden", kanzlei: "Open Source, voll portabel" },
  { feature: "LLM- & KI-Monitoring", internal: "Selten abgedeckt", freelancer: "Teures Add-on", big: "Kaum vorhanden", kanzlei: "Tokens, Latenz und Kosten von Anfang an" },
  { feature: "Dashboards & Anpassung", internal: "Aufwändig selbst gebaut", freelancer: "Auf das SaaS-Schema begrenzt", big: "Standardisiert, wenig flexibel", kanzlei: "Maßgeschneiderte Grafana Dashboards" },
  { feature: "DSGVO & Datenschutz", internal: "Abhängig vom IT-Setup", freelancer: "Daten in der US-Cloud", big: "International standardisiert", kanzlei: "DSGVO-konform, EU-Hosting, AV-Vertrag" },
];

const toolbox = [
  { icon: LayoutDashboard, name: "Grafana", desc: "Die zentrale Oberfläche für Visualisierung, Dashboards und Alerting, herstellerneutral und Open Source." },
  { icon: Activity, name: "Prometheus", desc: "Time-Series-Datenbank und Sammler für Metriken, abfragbar per PromQL, das Herz des Stacks." },
  { icon: FileText, name: "Loki", desc: "Skalierbares Log-Management, das Logs direkt neben den passenden Metriken durchsuchbar macht." },
  { icon: Bell, name: "Alertmanager", desc: "Routing, Gruppierung und Eskalation von Alarmen an E-Mail, Slack, Teams oder On-Call-Tools." },
  { icon: Network, name: "Tempo & OpenTelemetry", desc: "Verteiltes Tracing, um Anfragen über mehrere Dienste hinweg lückenlos nachzuverfolgen." },
  { icon: Plug, name: "Exporter & Integrationen", desc: "node_exporter, cAdvisor, kube-state-metrics und Blackbox-Exporter binden jedes System sauber an." },
];

const steps = [
  { step: "01", icon: Phone, title: "Kostenlose Erstanalyse", time: "30 Minuten", desc: "Wir verschaffen uns ein Bild Ihrer Systeme: Welche Dienste sind kritisch, wo gibt es blinde Flecken, was soll alarmieren? Ohne Verpflichtung und ohne Verkaufsdruck." },
  { step: "02", icon: Search, title: "KI Assessment Center", time: "Architektur & Plan", desc: "Wir definieren die Stack-Architektur: welche Metriken und Logs erfasst werden, welche Dashboards und Alerts entstehen und wie der Betrieb DSGVO-konform und self-hosted aussieht." },
  { step: "03", icon: Rocket, title: "Implementierung", time: "1 bis 3 Wochen", desc: "Wir setzen Grafana, Prometheus, Loki und das Alerting auf, binden Ihre Systeme an, bauen die Dashboards und richten sinnvolle Schwellwerte und Benachrichtigungen ein." },
  { step: "04", icon: TrendingUp, title: "Betrieb & Optimierung", time: "laufend", desc: "Auf Wunsch betreuen wir den Stack dauerhaft: Wir verfeinern Dashboards, reduzieren Fehlalarme, nehmen neue Systeme auf und halten alles aktuell und sicher." },
];

const usps = [
  { icon: Layers, badge: "End-to-End", title: "Aufbau und Betrieb", desc: "Wir liefern keine Folien, sondern einen laufenden Stack: vom Architektur-Konzept über die Implementierung bis zum dauerhaften Betrieb, aus einer Hand." },
  { icon: Unlock, badge: "Open Source", title: "Kein Vendor-Lock-in", desc: "Grafana, Prometheus und Loki sind Open Source. Sie behalten volle Kontrolle über Ihre Daten und Ihren Stack, ohne nutzungsabhängige Lizenzfallen." },
  { icon: ShieldCheck, badge: "EU & DSGVO", title: "Self-hosted in der EU", desc: "Alle Betriebsdaten bleiben in Österreich oder der EU, auf Wunsch in Ihrer eigenen Infrastruktur. DSGVO-konform und ohne Umweg über US-Clouds." },
  { icon: LineChart, badge: "Messbar", title: "Weniger Ausfälle, klare Kosten", desc: "Probleme werden früh sichtbar, Ausfälle seltener und kürzer. LLM- und Kosten-Monitoring macht jeden Euro Ihrer KI-Infrastruktur transparent." },
];

const related = [
  { href: "/leistungen/kubernetes", icon: Boxes, tag: "Infrastruktur", title: "Kubernetes", desc: "Cluster-Betrieb und Container-Orchestrierung, lückenlos überwacht mit Prometheus und Grafana." },
  { href: "/leistungen/mlops", icon: Cpu, tag: "MLOps", title: "MLOps", desc: "Modelle stabil betreiben und versionieren, mit Monitoring von Latenz, Drift und Kosten." },
  { href: "/leistungen/docker", icon: Container, tag: "Container", title: "Docker", desc: "Containerisierte Anwendungen sauber paketiert und über cAdvisor und Grafana im Blick." },
];

const glanceData: [string, string][] = [
  ["Ergebnis", "zentrale Observability-Plattform"],
  ["Stack", "Grafana, Prometheus, Loki"],
  ["Hosting", "self-hosted in der EU"],
  ["Alerting", "rund um die Uhr, mehrkanalig"],
  ["Datenschutz", "DSGVO-konform, EU-Hosting"],
  ["Markt", "DACH-Raum (AT, DE, CH)"],
];

export default function Page() {
  return (
    <>
      <Script id="faq-monitoring-grafana" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-monitoring-grafana" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO: 4-Phasen-Roadmap */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                    Monitoring & Observability, Grafana und Prometheus
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-primary">Monitoring & Observability</span> mit Grafana, das nichts übersieht
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Wir bauen Monitoring-, Alerting- und Observability-Stacks für KI-Systeme, Server und Anwendungen: Grafana Dashboards, Prometheus-Metriken, Loki-Logs, Alerting sowie LLM- und Kosten-Monitoring. Self-hosted in der EU, DSGVO-konform.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Erstgespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#leistungen">Leistungen ansehen</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-primary" /> EU-Hosting, self-hosted</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Roadmap-Visual */}
                <Card className="relative border-2 shadow-xl shadow-primary/5 overflow-hidden">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-primary tracking-wide">MONITORING ROADMAP</div>
                        <CardTitle className="text-xl">Vom Blindflug zur vollen Sicht</CardTitle>
                      </div>
                      <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20 text-xs shrink-0">4 Phasen</Badge>
                    </div>
                    <div className="flex gap-1.5 pt-3" aria-hidden>
                      {[0, 1, 2, 3].map((i) => (
                        <div key={i} className="h-1.5 flex-1 rounded-full bg-primary/25" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5">
                    <div className="relative">
                      <div className="absolute left-[1.3rem] top-4 bottom-4 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-primary/50" aria-hidden />
                      <div className="space-y-3.5">
                        {heroPhases.map(({ icon: Icon, step, label, time, desc }) => (
                          <div key={step} className="relative flex items-start gap-4">
                            <div className="relative z-10 w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-md shadow-primary/20 ring-4 ring-card">
                              <Icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0 pt-0.5">
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-xs font-bold text-primary">PHASE {step}</span>
                                <span className="text-[11px] text-muted-foreground shrink-0">{time}</span>
                              </div>
                              <div className="font-semibold text-sm leading-tight">{label}</div>
                              <div className="text-xs text-muted-foreground leading-snug mt-0.5">{desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-5 flex items-center justify-between rounded-xl bg-primary/5 border border-primary/20 px-4 py-3">
                      <span className="text-sm font-medium text-foreground">Ergebnis</span>
                      <span className="text-sm text-primary font-semibold">eine Oberfläche für alle Systeme</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* DEFINITION: 2-spaltig mit Info-Card */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Definition</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was ist Monitoring und Observability?</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      <strong className="text-foreground">Monitoring</strong> beantwortet die Frage, ob Ihre Systeme laufen, und schlägt Alarm, wenn ein bekannter Schwellwert überschritten wird. <strong className="text-foreground">Observability</strong> geht weiter und macht ein System von innen verständlich, sodass Sie auch unerwartete Probleme nachvollziehen können, über die drei Säulen Metriken, Logs und Traces.
                    </p>
                    <p>
                      Das technische Fundament dafür ist Open Source und herstellerneutral: <strong className="text-foreground">Grafana</strong> für Dashboards und Visualisierung, <strong className="text-foreground">Prometheus</strong> für Metriken und Loki für Logs. Das Zusammenspiel von Prometheus Grafana ist der De-facto-Standard moderner Infrastruktur und lässt sich vollständig self-hosted betreiben.
                    </p>
                    <p>
                      Wir bringen diesen Stack in Ihren Betrieb, von der KI-Anwendung über Kubernetes bis zum klassischen Server. Statt nur zu sehen, dass etwas hakt, sehen Sie warum, und werden gewarnt, bevor aus einem Vorfall ein Ausfall wird.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Grafana</Badge>
                    <Badge variant="secondary" className="rounded-full">Prometheus</Badge>
                    <Badge variant="secondary" className="rounded-full">Observability</Badge>
                    <Badge variant="secondary" className="rounded-full">Alerting</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Monitoring auf einen Blick</CardTitle>
                    <CardDescription>Was ein Monitoring-Projekt mit der KI Kanzlei ausmacht.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {glanceData.map(([label, value]) => (
                      <div key={label} className="flex items-center justify-between py-2.5 border-b border-border last:border-0">
                        <span className="text-sm font-medium text-foreground">{label}</span>
                        <span className="text-sm text-muted-foreground text-right max-w-[58%]">{value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* STATS-BAND */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-2 lg:grid-cols-4 border-2 border-border rounded-2xl overflow-hidden bg-card">
                {stats.map((s, i) => (
                  <div key={i} className="p-7 md:p-8 text-center border-b lg:border-b-0 border-border [&:nth-child(odd)]:border-r lg:[&:not(:last-child)]:border-r">
                    <div className="text-3xl md:text-4xl font-bold text-primary">{s.value}</div>
                    <div className="text-sm text-muted-foreground mt-2 leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <ModelLogoStrip
            caption="Open Source und herstellerneutral, wir setzen auf bewährte Tools"
            items={[
              { slug: "grafana", name: "Grafana" },
              { slug: "prometheus", name: "Prometheus" },
              { slug: "kubernetes", name: "Kubernetes" },
              { slug: "docker", name: "Docker" },
              { text: "Loki", name: "Loki" },
              { text: "OpenTelemetry", name: "OpenTelemetry" },
            ]}
          />

          {/* LEISTUNGEN: BENTO */}
          <section id="leistungen" className="py-14 md:py-20 scroll-mt-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Unsere Monitoring & Observability Leistungen</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Von Grafana Dashboards bis LLM Monitoring, ein kompletter Stack aus einer Hand.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <Card key={i} className={`hover-lift border-2 ${i === 0 ? "lg:col-span-2 bg-primary/5 border-primary/20" : ""}`}>
                      <CardHeader className="pb-3">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{s.title}</CardTitle>
                      </CardHeader>
                      <CardContent><p className="text-muted-foreground leading-relaxed text-sm">{s.description}</p></CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* WAS WIR ÜBERWACHEN: TABS */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Für jedes System</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Was wir für Sie überwachen</h2>
                <p className="text-lg text-muted-foreground">Wählen Sie einen Bereich, wir zeigen, welche Kennzahlen wir dort sichtbar machen.</p>
              </div>
              <Tabs defaultValue="ki" className="w-full">
                <TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">
                  {targets.map((a) => {
                    const Icon = a.icon;
                    return (
                      <TabsTrigger key={a.value} value={a.value} className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border">
                        <Icon className="w-4 h-4 mr-1.5" />{a.label}
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
                {targets.map((a) => (
                  <TabsContent key={a.value} value={a.value}>
                    <Card className="border-2">
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-bold mb-2">{a.head}</h3>
                        <p className="text-muted-foreground leading-relaxed">{a.text}</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>

          {/* OBSERVABILITY-REIFEGRAD: clean Diagramm via divs */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Standortbestimmung</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Wie reif ist Ihre Observability?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Jedes Monitoring-Projekt beginnt mit einer ehrlichen Einordnung. Unser Reifegradmodell zeigt, welcher nächste Schritt für Sie realistisch ist.</p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {maturity.map((m) => (
                  <Card key={m.level} className={`border-2 ${m.level === 4 ? "border-primary/30 bg-primary/5" : ""}`}>
                    <CardContent className="pt-6">
                      <div className="flex items-end gap-1.5 h-16 mb-4" aria-hidden>
                        {[1, 2, 3, 4].map((b) => (
                          <div
                            key={b}
                            className={`flex-1 rounded-t-md ${b <= m.fill ? "bg-primary" : "bg-primary/15"}`}
                            style={{ height: `${b * 25}%` }}
                          />
                        ))}
                      </div>
                      <div className="text-xs font-bold text-primary mb-1">STUFE {m.level}</div>
                      <h3 className="font-bold text-base mb-1.5 leading-tight">{m.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* GROSSE VERGLEICHS-TABLE */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Monitoring-Ansätze im Vergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Self-hosted Grafana vs. Eigenbau, SaaS & Cloud-Provider</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Vier Wege, Systeme zu überwachen, mit sehr unterschiedlichen Folgen für Kosten, Datenschutz und Kontrolle.</p>
              </div>
              <Card className="border-2 overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[18%] font-bold text-foreground">Kriterium</TableHead>
                      <TableHead className="text-muted-foreground">Eigenbau</TableHead>
                      <TableHead className="text-muted-foreground">SaaS-Tools</TableHead>
                      <TableHead className="text-muted-foreground">Cloud-Provider</TableHead>
                      <TableHead className="text-primary font-bold">KI Kanzlei</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bigComparison.map((r, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{r.feature}</TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          <span className="inline-flex items-start gap-1.5"><X className="w-3.5 h-3.5 text-muted-foreground/60 mt-0.5 shrink-0" />{r.internal}</span>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          <span className="inline-flex items-start gap-1.5"><X className="w-3.5 h-3.5 text-muted-foreground/60 mt-0.5 shrink-0" />{r.freelancer}</span>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          <span className="inline-flex items-start gap-1.5"><X className="w-3.5 h-3.5 text-muted-foreground/60 mt-0.5 shrink-0" />{r.big}</span>
                        </TableCell>
                        <TableCell className="text-sm text-primary font-medium">
                          <span className="inline-flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />{r.kanzlei}</span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </section>

          {/* WERKZEUGE / TECH */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Tech-Stack</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Womit wir Ihren Monitoring-Stack bauen</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Alles Open Source, alles self-hosted betreibbar. Aus diesem Baukasten setzen wir genau das zusammen, was Ihre Systeme brauchen.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {toolbox.map((t, i) => {
                  const Icon = t.icon;
                  return (
                    <Card key={i} className="hover-lift border-2">
                      <CardHeader className="pb-3">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{t.name}</CardTitle>
                      </CardHeader>
                      <CardContent><p className="text-muted-foreground leading-relaxed text-sm">{t.desc}</p></CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* PROZESS: Timeline */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="max-w-2xl mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Der Ablauf</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Unser Weg zu Ihrem Monitoring-Stack</h2>
                <p className="text-lg text-muted-foreground">Kein Tool-Wildwuchs, sondern vier klar definierte Schritte mit konkreten Ergebnissen.</p>
              </div>
              <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="hidden lg:block absolute top-7 left-[12%] right-[12%] h-px bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40" aria-hidden />
                {steps.map(({ step, icon: Icon, title, time, desc }) => (
                  <div key={step} className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center mb-4 shadow-lg shadow-primary/20 relative z-10 ring-8 ring-background">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-bold text-primary mb-1">SCHRITT {step}, {time}</div>
                    <h3 className="text-lg font-bold mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WARUM KI KANZLEI */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum die KI Kanzlei</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Was unsere Monitoring Beratung besonders macht</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {usps.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <Card key={i} className="hover-lift border-2">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <Badge variant="secondary" className="rounded-full text-xs">{c.badge}</Badge>
                        </div>
                        <CardTitle className="text-lg">{c.title}</CardTitle>
                      </CardHeader>
                      <CardContent><p className="text-muted-foreground leading-relaxed text-sm">{c.desc}</p></CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQ: Monitoring, Grafana & Observability</h2>
                <p className="text-lg text-muted-foreground">Die Fragen, die wir vor fast jedem Monitoring-Projekt hören, ehrlich beantwortet.</p>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-2 border-border rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:bg-primary/5">
                    <AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-5">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* VERWANDTE LEISTUNGEN */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Passend dazu</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Verwandte Leistungen</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Monitoring entfaltet seine volle Wirkung im Zusammenspiel mit Ihrer Infrastruktur. Das passt direkt dazu.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {related.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <a key={i} href={s.href} className="group block">
                      <Card className="h-full border-2 hover-lift transition-all group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/5">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${serviceLogos[s.href] ? "bg-white border border-border" : "bg-primary/10 group-hover:bg-primary"}`}>
                              {serviceLogos[s.href] ? <img src={`/img/logos/${serviceLogos[s.href]}.svg`} alt={s.title} className="w-7 h-7 object-contain" /> : <Icon className="w-6 h-6 text-primary transition-colors group-hover:text-white" />}
                            </div>
                            <Badge variant="secondary" className="rounded-full">{s.tag}</Badge>
                          </div>
                          <CardTitle className="text-xl">{s.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                          <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">Mehr erfahren</span>
                        </CardContent>
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
