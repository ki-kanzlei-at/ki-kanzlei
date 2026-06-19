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
  BarChart3, PieChart, Table2, TrendingUp, Brain, Database, Layers, Share2, Check, X,
  Shield, ShieldCheck, Lock, MapPin, RefreshCw, Gauge, Target, Calculator, Megaphone, Cog,
  Users, Activity, Workflow, Search, Settings2, Rocket, Phone, Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Power BI Beratung, Dashboards & KI-Analysen",
  description:
    "Power BI für Unternehmen im DACH-Raum: Wir bauen aussagekräftige Dashboards, automatisieren Ihr Reporting mit n8n und reichern Daten per KI an, mit Anomalie-Erkennung, Forecasts und Auswertungen in natürlicher Sprache. DSGVO-konform mit EU-Region. Ehrlicher Vergleich Power BI vs. Tableau.",
  keywords:
    "Power BI, Power BI Dashboard, Power BI Beratung, Business Intelligence, automatisierte Reports, KI Analysen, Power BI vs Tableau, Tableau, BI Dashboards, Reporting Automatisierung, Data Analytics, Power BI Agentur, Power BI Experten, Power BI Österreich, Power BI Deutschland, Power BI Schweiz, Business Intelligence DACH",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/power-bi" },
};

const faqs = [
  {
    q: "Was ist Power BI und wofür wird es eingesetzt?",
    a: "Power BI ist die Business-Intelligence-Plattform von Microsoft. Sie verbindet Ihre Datenquellen, etwa ERP, CRM, Buchhaltung oder Webshop, zu einem zentralen Datenmodell und stellt die Kennzahlen als interaktive Dashboards dar. Statt Zahlen monatlich von Hand in Excel zusammenzutragen, sehen Sie Umsatz, Marge, Pipeline oder Auslastung jederzeit aktuell. Power BI eignet sich vom kleinen Team bis zum Konzern und lässt sich eng mit Microsoft 365 verzahnen.",
  },
  {
    q: "Wie automatisieren Sie Reports mit Power BI?",
    a: "Power BI aktualisiert die Daten nach Zeitplan automatisch, sodass Dashboards immer aktuell sind. Für den Versand und die Verteilung von Berichten kombinieren wir Power BI mit n8n: Reports werden geplant erstellt, als PDF exportiert und automatisch per Mail oder Teams an die richtigen Empfänger geschickt. So entfällt die manuelle Arbeit am Monatsende komplett, und alle bekommen ihre Zahlen pünktlich und einheitlich.",
  },
  {
    q: "Ist Power BI DSGVO-konform einsetzbar?",
    a: "Ja, mit der richtigen Konfiguration. Power BI läuft in der Microsoft-Azure-Cloud, die Sie auf eine EU-Region festlegen können, sodass die Daten in Europa verarbeitet werden. Dazu gehören ein Auftragsverarbeitungsvertrag, ein sauberes Rechte- und Rollenkonzept sowie sparsame, aggregierte Auswertungen bei sensiblen Daten. Wir richten Power BI so ein, dass es zu den Anforderungen im DACH-Raum passt, und beraten ehrlich, wo zusätzliche Vorsicht nötig ist.",
  },
  {
    q: "Power BI oder Tableau, was passt besser?",
    a: "Beide sind starke BI-Werkzeuge. Power BI ist günstiger pro Nutzer, fühlt sich für Microsoft-Anwender vertraut an und integriert sich nahtlos in Microsoft 365, das macht es für die meisten Unternehmen im DACH-Raum zur wirtschaftlichsten Wahl. Tableau spielt seine Stärken bei sehr großen Datenmengen und hohem gestalterischen Anspruch an die Visualisierung aus, kostet dafür aber deutlich mehr. Wir empfehlen unabhängig, was zu Ihren Daten, Ihrem Budget und Ihrer Systemlandschaft passt.",
  },
  {
    q: "Welche KI-Analysen sind mit Power BI möglich?",
    a: "Power BI bringt KI direkt mit. Dazu gehören die automatische Erkennung von Anomalien und Ausreißern, Forecasts für Trends und Saisonalität sowie Auswertungen in natürlicher Sprache, bei denen Sie einfach Ihre Frage eintippen. Mit dem Copilot lassen sich Berichte und Erklärungen generieren. Wo Standardfunktionen nicht reichen, binden wir eigene KI-Modelle an, etwa für Prognosen oder Klassifikationen, die genau zu Ihrem Geschäft passen.",
  },
  {
    q: "Können Sie unsere bestehenden Excel-Reports ablösen?",
    a: "Ja, das ist einer der häufigsten Anlässe. Wir übernehmen die Logik Ihrer gewachsenen Excel-Reports, bauen sie als robustes Power BI Modell nach und automatisieren die Aktualisierung. Statt fragiler Tabellen mit Verknüpfungen, die niemand mehr versteht, bekommen Sie verlässliche Dashboards mit einer einzigen Datenwahrheit. Excel bleibt für schnelle Ad-hoc-Rechnungen sinnvoll, das laufende Reporting übernimmt Power BI.",
  },
  {
    q: "Wie lange dauert es bis zum ersten Dashboard?",
    a: "Ein erstes, klar umrissenes Dashboard ist oft schon nach ein bis zwei Wochen produktiv. Wie schnell es geht, hängt vor allem von der Datenqualität und der Zahl der Quellen ab. Wir starten bewusst mit der Auswertung, die den größten Nutzen bringt, und bauen von dort aus weiter. Komplexere Modelle mit vielen Quellen, KI-Analysen und automatisierter Verteilung brauchen entsprechend etwas länger.",
  },
  {
    q: "Übernehmen Sie auch Wartung und Weiterentwicklung?",
    a: "Ja. Auf Wunsch überwachen wir die geplanten Aktualisierungen, halten die Anbindungen bei Änderungen an Ihren Systemen stabil, optimieren die Performance und bauen neue Auswertungen, wenn sich Ihre Fragestellungen ändern. So bleibt Ihre Berichtslandschaft dauerhaft verlässlich, statt nach dem ersten Aufbau langsam zu veralten.",
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
  name: "Power BI Beratung & Dashboards",
  serviceType: "Business Intelligence, Power BI, Reporting-Automatisierung",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "Power BI für Unternehmen im DACH-Raum: Konzeption und Aufbau von Dashboards, automatisierte Reports mit n8n, KI-Analysen sowie DSGVO-konforme Einrichtung mit EU-Region.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const stats = [
  { value: "85 %", label: "weniger Zeit fürs Reporting" },
  { value: "100+", label: "anbindbare Datenquellen" },
  { value: "24/7", label: "aktuelle Live-Dashboards" },
  { value: "1-3 Wo.", label: "bis zum ersten Dashboard" },
];

const ataglance = [
  ["Typ", "Business Intelligence & Dashboards"],
  ["Datenquellen", "über 100 Konnektoren"],
  ["Abrechnung", "pro Nutzer oder Kapazität"],
  ["Hosting", "Microsoft Azure, EU-Region möglich"],
  ["KI-Funktionen", "Copilot, Anomalien, Forecast"],
  ["DSGVO", "mit AVV und EU-Region"],
];

const problems = [
  { problem: "Reports werden jeden Monat von Hand in Excel zusammengeklickt und kopiert.", solution: "Power BI zieht die Daten automatisch und aktualisiert die Dashboards von selbst." },
  { problem: "Jede Abteilung rechnet anders, niemand traut den Zahlen so richtig.", solution: "Ein zentrales Datenmodell liefert eine einheitliche Wahrheit für alle Bereiche." },
  { problem: "Probleme fallen erst auf, wenn der Monat längst gelaufen ist.", solution: "KI erkennt Anomalien und Trends früh und meldet sie automatisch." },
  { problem: "Das Management wartet Tage auf Auswertungen, die schon beim Versand veraltet sind.", solution: "Live-Dashboards beantworten Fragen sofort, auf Wunsch in natürlicher Sprache." },
];

const bentoFeatures = [
  { icon: BarChart3, title: "Dashboards, die Entscheidungen tragen", description: "Wir bauen Ihre Power BI Dashboards so auf, dass die wichtigen Kennzahlen sofort ins Auge fallen: klar strukturiert, mit sauberem Datenmodell, sinnvollen Drill-downs und Ampeln. Keine bunte Zahlenwand, sondern Auswertungen, mit denen Ihr Team täglich arbeitet und entscheidet." },
  { icon: Database, title: "Über 100 Datenquellen anbinden", description: "ERP, CRM, Buchhaltung, Webshop, Datenbanken und Cloud-Dienste. Wir führen Ihre Daten zu einem verlässlichen Modell zusammen." },
  { icon: Brain, title: "KI-Analysen statt nur Zahlen", description: "Anomalie-Erkennung, Forecasts und Auswertungen in natürlicher Sprache machen aus Ihren Daten echte Antworten." },
  { icon: RefreshCw, title: "Automatisierte Reports mit n8n", description: "Berichte werden geplant erstellt und automatisch verteilt, per Mail, Teams oder als PDF, ganz ohne Handarbeit." },
  { icon: Shield, title: "DSGVO & EU-Region", description: "Wir richten Power BI mit EU-Hosting, Auftragsverarbeitung und sauberem Rechte-Konzept ein, passend für den DACH-Raum." },
  { icon: Gauge, title: "Betrieb & Weiterentwicklung", description: "Wir überwachen Aktualisierungen, optimieren die Performance und bauen neue Auswertungen, wenn sich Ihre Fragen ändern." },
];

const departments = [
  { value: "management", label: "Management", icon: Target, head: "Geschäftsführung & Controlling", intro: "Alle wichtigen Kennzahlen auf einen Blick, in Echtzeit statt im Monatsrückblick.", items: ["Zentrales Management-Dashboard mit Umsatz, Marge und Liquidität auf einen Blick.", "Automatische Soll-Ist-Vergleiche und Ampeln für kritische Kennzahlen.", "Forecasts per KI, damit Sie Entwicklungen früh erkennen.", "Auswertungen in natürlicher Sprache, einfach die Frage eintippen."] },
  { value: "vertrieb", label: "Vertrieb", icon: TrendingUp, head: "Vertrieb & Sales", intro: "Pipeline, Abschlüsse und Performance jederzeit transparent.", items: ["Sales-Dashboard mit Pipeline, Forecast und Zielerreichung je Region und Person.", "Auswertung der Conversion über alle Phasen des Funnels.", "KI erkennt gefährdete Deals und Abwanderungsrisiken frühzeitig.", "Automatischer Wochenreport für das Vertriebsteam per Mail."] },
  { value: "finanzen", label: "Finanzen", icon: Calculator, head: "Finanzen & Controlling", intro: "Zahlen aus allen Systemen zusammengeführt, ohne Copy-Paste.", items: ["Daten aus BMD, DATEV oder ERP automatisch zusammenführen.", "Liquiditäts-, Kostenstellen- und Deckungsbeitrags-Auswertungen live.", "Anomalie-Erkennung deckt ungewöhnliche Buchungen automatisch auf.", "Monats- und Quartalsabschluss-Reports auf Knopfdruck."] },
  { value: "marketing", label: "Marketing", icon: Megaphone, head: "Marketing & Kampagnen", intro: "Kampagnen-Performance kanalübergreifend an einem Ort.", items: ["Daten aus Google Ads, Meta, GA4 und CRM in einem Dashboard bündeln.", "ROAS, CPL und Funnel je Kanal automatisch berechnen.", "Attribution und Trends sichtbar machen statt in Tabellen zu suchen.", "Automatischer Kampagnen-Report fürs Team und die Leitung."] },
  { value: "produktion", label: "Produktion", icon: Cog, head: "Produktion & Logistik", intro: "Auslastung, Qualität und Lieferketten in Echtzeit im Blick.", items: ["Produktions- und Maschinendaten live visualisieren.", "OEE, Ausschuss und Durchlaufzeiten automatisch auswerten.", "KI meldet Anomalien und drohende Engpässe frühzeitig.", "Bestände und Lieferzeiten mit Schwellwert-Alarmen überwachen."] },
  { value: "hr", label: "HR", icon: Users, head: "HR & Personal", intro: "Personalkennzahlen sauber aufbereitet, datenschutzkonform.", items: ["Headcount, Fluktuation und Krankenstand übersichtlich darstellen.", "Recruiting-Funnel und Time-to-Hire automatisch messen.", "Skill- und Kapazitätsplanung auf einer Datenbasis.", "Aggregierte, anonymisierte Auswertungen im Einklang mit der DSGVO."] },
];

const comparison = [
  { feature: "Einstieg & Bedienung", powerbi: "vertraut im Microsoft-Look", tableau: "mächtig, eigene Logik", excel: "jeder kennt es" },
  { feature: "Kosten", powerbi: "günstig pro Nutzer", tableau: "deutlich teurer", excel: "scheinbar gratis, hoher Zeitaufwand" },
  { feature: "Datenmenge", powerbi: "Millionen Zeilen", tableau: "sehr große Datenmengen", excel: "stößt schnell an Grenzen" },
  { feature: "Automatisierung", powerbi: "geplante Aktualisierung", tableau: "geplante Aktualisierung", excel: "manuell, fehleranfällig" },
  { feature: "KI-Analysen", powerbi: "Copilot, Anomalien, Forecast", tableau: "Einstein, Forecast", excel: "praktisch keine" },
  { feature: "Microsoft 365", powerbi: "nahtlos integriert", tableau: "über Konnektoren", excel: "nativ, aber statisch" },
  { feature: "DSGVO & EU-Hosting", powerbi: "EU-Region, AVV", tableau: "EU-Region, AVV", excel: "lokal, aber unkontrolliert verteilt" },
];

const steps = [
  { step: "01", icon: Phone, title: "Kostenlose Erstanalyse", time: "30 Minuten", description: "Wir klären, welche Kennzahlen Ihnen fehlen, wo die Daten liegen und welches Dashboard den größten Hebel bringt. Danach wissen Sie, wo wir starten." },
  { step: "02", icon: Search, title: "Datenquellen & Konzept", time: "Woche 1", description: "Wir definieren die KPIs, prüfen die Datenquellen und entwerfen das Datenmodell. Sie bekommen eine klare Empfehlung zu Tools und Aufwand." },
  { step: "03", icon: Settings2, title: "Dashboards & Automatisierung", time: "Woche 1 bis 3", description: "Wir bauen die Dashboards, binden die Quellen an, richten die KI-Analysen ein und automatisieren die Report-Verteilung mit n8n." },
  { step: "04", icon: Rocket, title: "Go-Live & Betreuung", time: "ab Woche 3", description: "Die Dashboards sind live. Wir schulen Ihr Team, überwachen die Aktualisierung und entwickeln die Auswertungen weiter." },
];

const related = [
  { href: "/leistungen/data-engineering", icon: Database, title: "Data Engineering", desc: "Saubere Datenpipelines und ein stabiles Datenmodell als Fundament für verlässliche Dashboards." },
  { href: "/leistungen/n8n-automatisierung", icon: Workflow, title: "n8n Automatisierung", desc: "Reports automatisch erstellen und verteilen, Datenquellen anbinden und Abläufe rund um Power BI automatisieren." },
  { href: "/leistungen/ki-consulting", icon: Brain, title: "KI Consulting", desc: "Wir finden die Stellen, an denen KI Ihre Auswertungen wirklich besser macht, von Forecasts bis Natural Language." },
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
      <Script id="faq-powerbi" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-powerbi" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <LogoBox slug="powerbi" alt="Power BI" imgClassName="h-9 w-auto max-w-[2.75rem]" boxClassName="rounded-xl p-2 shadow-sm" />
                    <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                      Power BI, Business Intelligence
                    </Badge>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Power BI Dashboards, die <span className="text-primary">Klarheit schaffen</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Wir bauen aussagekräftige Power BI Dashboards, automatisieren Ihr Reporting mit n8n und reichern Ihre Daten per KI an, mit Anomalie-Erkennung, Forecasts und Auswertungen in natürlicher Sprache. DSGVO-konform mit EU-Region für den DACH-Raum.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Assessment</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#vergleich">Power BI vs. Tableau</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO & EU-Region</span>
                    <span className="flex items-center gap-1.5"><Brain className="w-4 h-4 text-primary" /> KI-Analysen</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Hero visual: Report-Pipeline */}
                <div className="relative">
                  <Card className="border-2 shadow-xl shadow-primary/5 overflow-hidden">
                    <CardHeader className="border-b border-border py-3">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-primary/10"><BarChart3 className="w-4 h-4 text-primary" /></span>
                        <span className="font-mono text-xs text-muted-foreground">umsatz-report.pbix</span>
                        <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> aktuell
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3 rounded-xl border-2 border-primary/40 bg-primary/5 px-3.5 py-2.5">
                        <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0"><Database className="w-5 h-5 text-primary" /></div>
                        <div className="min-w-0"><div className="text-[10px] uppercase tracking-wider text-primary font-medium">Datenquelle</div><div className="text-sm font-semibold truncate">ERP, CRM & Buchhaltung</div></div>
                      </div>
                      {[
                        { icon: Layers, label: "Modell", title: "Daten bereinigen & modellieren" },
                        { icon: Brain, label: "KI-Schritt", title: "Anomalien & Forecast berechnen" },
                        { icon: Share2, label: "Verteilung", title: "Report automatisch versenden" },
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
                    <BarChart3 className="w-3.5 h-3.5 text-primary" /> Live-Dashboards
                  </div>
                  <div className="hidden lg:flex absolute -bottom-4 -left-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium">
                    <Lock className="w-3.5 h-3.5 text-primary" /> DSGVO & EU-Region
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was ist Power BI und für wen lohnt es sich?</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p><strong className="text-foreground">Power BI</strong> ist die Business-Intelligence-Plattform von Microsoft. Sie verbinden Ihre Datenquellen zu einem zentralen Datenmodell und stellen die Kennzahlen als interaktive <strong className="text-foreground">Dashboards</strong> dar, statt sie monatlich von Hand in Excel zusammenzutragen.</p>
                    <p>Die Stärke von Power BI ist die <strong className="text-foreground">Wirtschaftlichkeit</strong> und die enge Verzahnung mit Microsoft 365. Für viele Unternehmen ist es günstig pro Nutzer und schnell startklar. Erst bei sehr großen Datenmengen oder hohem Visualisierungsanspruch lohnt der Blick auf Alternativen wie Tableau.</p>
                    <p>Genau hier setzen wir an: Wir bauen Dashboards, die wirklich genutzt werden, automatisieren das Reporting und reichern Ihre Daten per <strong className="text-foreground">KI</strong> an. Und wir beraten ehrlich, welches Werkzeug zu Ihren Daten, Ihrem Budget und Ihrer Systemlandschaft passt, nicht das, an dem wir am meisten verdienen.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Power BI Dashboard</Badge>
                    <Badge variant="secondary" className="rounded-full">Business Intelligence</Badge>
                    <Badge variant="secondary" className="rounded-full">Automatisierte Reports</Badge>
                    <Badge variant="secondary" className="rounded-full">KI-Analysen</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Power BI auf einen Blick</CardTitle>
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
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum Dashboards?</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Wo heute Excel-Handarbeit ist, läuft morgen ein Dashboard</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Überall, wo Sie Zahlen manuell zusammentragen und kopieren, übernimmt Power BI: schneller, aktueller und ohne Übertragungsfehler.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 pl-1">Was heute passiert</div>
                  {problems.map(({ problem }, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl border bg-background"><X className="w-5 h-5 text-destructive mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{problem}</span></div>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-2 pl-1">Was Power BI tut</div>
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
                <h2 className="text-3xl md:text-4xl font-bold">Mehr als bunte Diagramme</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Wir bauen Business Intelligence, die trägt, und denken Datenschutz, Automatisierung und KI von Anfang an mit.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="hover-lift border-2 lg:col-span-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2"><BarChart3 className="w-6 h-6 text-primary" /></div>
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
                <h2 className="text-3xl md:text-4xl font-bold">Was wir mit Power BI auswerten</h2>
                <p className="text-lg text-muted-foreground mt-4">Wählen Sie einen Bereich, wir zeigen konkrete Dashboards und Auswertungen aus der Praxis.</p>
              </div>
              <Tabs defaultValue="management" className="w-full">
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
                            <div key={j} className="flex items-start gap-2.5 p-3 rounded-lg border bg-background"><Activity className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{item}</span></div>
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
                <h2 className="text-3xl md:text-4xl font-bold">Power BI vs. Tableau vs. Excel</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Welches Werkzeug passt? Das hängt von Ihren Datenmengen, Ihrem Budget und Ihrer Microsoft-Welt ab. Wir beraten unabhängig.</p>
              </div>
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[28%] font-bold text-foreground">Merkmal</TableHead>
                      <TableHead className="text-primary font-bold"><span className="inline-flex items-center gap-1.5"><BarChart3 className="w-4 h-4" />Power BI</span></TableHead>
                      <TableHead className="text-muted-foreground"><span className="inline-flex items-center gap-1.5"><PieChart className="w-4 h-4" />Tableau</span></TableHead>
                      <TableHead className="text-muted-foreground"><span className="inline-flex items-center gap-1.5"><Table2 className="w-4 h-4" />Excel</span></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparison.map((row, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{row.feature}</TableCell>
                        <TableCell className="text-sm text-primary font-medium">{row.powerbi}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{row.tableau}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{row.excel}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
              <p className="text-sm text-muted-foreground text-center mt-4">Power BI ist für die meisten Unternehmen im DACH-Raum die wirtschaftlichste Wahl, besonders mit Microsoft 365. Das Fundament dafür ist ein sauberes <a href="/leistungen/data-engineering" className="text-primary hover:underline">Data Engineering</a>, damit die Zahlen in jedem Dashboard stimmen.</p>
            </div>
          </section>

          {/* PROZESS */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unser Prozess</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Ihr Power BI Projekt in 4 Schritten</h2>
                <p className="text-lg text-muted-foreground mt-4">Transparent, ohne Überraschungen und mit ehrlicher Werkzeug-Empfehlung.</p>
              </div>
              <ProcessSteps steps={steps} />
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zu Power BI</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zu Power BI</h2>
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
