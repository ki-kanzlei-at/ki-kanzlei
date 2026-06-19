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
  BarChart3, LineChart, PieChart, Database, TrendingUp, Layers, Workflow, Brain, ShieldCheck, Lock,
  Check, X, Search, Rocket, Phone, Clock, MapPin, Zap, RefreshCw, Filter, Eye, Users, Building2,
  Lightbulb, Target, Settings2, Gauge, Cloud, Bot,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tableau Beratung & Dashboards mit KI",
  description:
    "Tableau für Unternehmen: Wir bauen aussagekräftige Tableau-Dashboards, automatisieren das Reporting und reichern Auswertungen mit KI an. DSGVO-konform im DACH-Raum, herstellerneutral inklusive Power-BI-Vergleich.",
  keywords:
    "Tableau, Tableau Dashboard, Tableau Beratung, Business Intelligence, Datenvisualisierung, Tableau vs Power BI, BI Dashboards, Reporting automatisieren, KI Analysen, Data Analytics",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/tableau" },
};

const faqs = [
  { q: "Was ist Tableau?", a: "Tableau ist eine der führenden Plattformen für Business Intelligence und Datenvisualisierung. Mit Tableau verbinden Sie Datenquellen, bauen interaktive Dashboards und machen komplexe Kennzahlen für Fachbereiche verständlich, ohne dass jede Auswertung neu programmiert werden muss. Stark ist Tableau besonders bei der visuellen Analyse und bei anspruchsvollen, explorativen Dashboards." },
  { q: "Was ist der Unterschied zwischen Tableau und Power BI?", a: "Beide sind exzellente BI-Tools. Tableau gilt als besonders stark bei der visuellen Analyse, der Gestaltungstiefe und der explorativen Arbeit mit Daten. Power BI ist eng in die Microsoft-Welt integriert und für viele Unternehmen günstiger im Einstieg. Welches Tool passt, hängt von Ihrem Bestand, Budget und Anspruch ab. Wir beraten herstellerneutral und setzen das ein, was zu Ihnen passt." },
  { q: "Könnt ihr KI in Tableau-Dashboards einbinden?", a: "Ja. Wir reichern Dashboards mit KI an: automatische Erkennung von Auffälligkeiten und Trends, Prognosen sowie Auswertungen, die sich in natürlicher Sprache abfragen lassen. So wird aus dem reinen Anzeigen von Zahlen ein Werkzeug, das aktiv auf Muster und Chancen hinweist." },
  { q: "Lässt sich das Reporting automatisieren?", a: "Ja. Wir automatisieren die Datenaufbereitung und die Aktualisierung der Dashboards, sodass Reports immer aktuell sind, ohne manuelles Zusammenkopieren. Über unsere Automatisierung mit n8n verbinden wir Tableau mit Ihren Quellen und stoßen Verteilung und Benachrichtigungen automatisch an." },
  { q: "Ist Tableau DSGVO-konform nutzbar?", a: "Ja, bei sauberer Umsetzung. Wir achten auf rechtmäßige Datenquellen, Rollen- und Rechtekonzepte, Zugriffsbeschränkungen und einen Betrieb, der die Anforderungen der DSGVO erfüllt. Sensible Daten werden nur denen zugänglich, die sie sehen dürfen." },
  { q: "Woher kommen die Daten für die Dashboards?", a: "Tableau bindet zahlreiche Quellen an: Datenbanken, Data Warehouses wie Snowflake, Cloud-Dienste und Dateien. Sinnvoll ist meist eine saubere Datenbasis im Hintergrund. Auf Wunsch bauen wir diese mit unserem Data Engineering auf, damit die Dashboards auf verlässlichen, konsistenten Daten stehen." },
  { q: "Wie schnell steht ein erstes Dashboard?", a: "Ein erstes aussagekräftiges Dashboard steht oft in ein bis zwei Wochen, sobald die Datenanbindung steht. Wir starten mit den Kennzahlen, die den größten Mehrwert bringen, und bauen von dort aus weiter." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Tableau Beratung & Dashboards", serviceType: "Business Intelligence, Tableau, Datenvisualisierung, Reporting", provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" }, description: "Tableau-Dashboards, automatisiertes Reporting und KI-gestützte Analysen für Unternehmen im DACH-Raum, DSGVO-konform und herstellerneutral.", areaServed: [{ "@type": "Country", name: "Austria" }, { "@type": "Country", name: "Germany" }, { "@type": "Country", name: "Switzerland" }] };

const stats = [
  { value: "1 Blick", label: "statt Zahlenwüste" },
  { value: "live", label: "immer aktuelle Dashboards" },
  { value: "+KI", label: "Trends & Anomalien erkannt" },
  { value: "1-2 Wo.", label: "bis zum ersten Dashboard" },
];
const ataglance = [
  ["Typ", "Business Intelligence"],
  ["Stärke", "visuelle Analyse"],
  ["Quellen", "DBs, Warehouses, Cloud"],
  ["KI", "Trends, Prognosen, NLQ"],
  ["Reporting", "automatisiert"],
  ["Datenschutz", "Rollen & DSGVO"],
];
const problems = [
  { problem: "Reports entstehen jede Woche per Hand in Excel.", solution: "Tableau aktualisiert Dashboards automatisch, ohne Copy-Paste." },
  { problem: "Niemand versteht die Zahlen ohne Erklärung.", solution: "Interaktive Visualisierungen machen Kennzahlen sofort verständlich." },
  { problem: "Daten liegen in vielen Tools, die Sicht fehlt.", solution: "Tableau führt Quellen zu einem Bild zusammen." },
  { problem: "Auffälligkeiten fallen erst zu spät auf.", solution: "KI im Dashboard meldet Trends und Anomalien aktiv." },
];
const features = [
  { icon: BarChart3, title: "Dashboards, die man sofort versteht", description: "Wir bauen Tableau-Dashboards, die nicht nur Zahlen zeigen, sondern Antworten geben. Klar strukturiert, interaktiv und auf die Fragen Ihrer Fachbereiche zugeschnitten, damit Entscheidungen auf einen Blick getroffen werden können statt nach langem Suchen in Tabellen." },
  { icon: Brain, title: "KI-gestützte Analysen", description: "Automatische Trend- und Anomalieerkennung, Prognosen und Abfragen in natürlicher Sprache, direkt im Dashboard." },
  { icon: RefreshCw, title: "Automatisiertes Reporting", description: "Datenaufbereitung und Aktualisierung laufen automatisch, Reports sind immer aktuell, mit n8n verbunden." },
  { icon: Database, title: "Saubere Datenbasis", description: "Auf Wunsch bauen wir das Data Engineering im Hintergrund, damit Dashboards auf verlässlichen Daten stehen." },
  { icon: ShieldCheck, title: "Rollen & DSGVO", description: "Feingranulare Rechte, sodass jeder nur die Daten sieht, die er sehen darf, DSGVO-konform." },
  { icon: Target, title: "Herstellerneutral", description: "Tableau oder Power BI, wir empfehlen ehrlich, was zu Bestand, Budget und Anspruch passt." },
];
const usecases = [
  { value: "management", label: "Management", icon: TrendingUp, head: "Management-Dashboards", intro: "Die wichtigsten Kennzahlen auf einen Blick.", items: ["KPIs über alle Bereiche bündeln.", "Soll-Ist-Vergleiche und Ziele.", "Drill-down vom Überblick ins Detail.", "Automatische Aktualisierung."] },
  { value: "vertrieb", label: "Vertrieb", icon: Users, head: "Vertrieb & Marketing", intro: "Pipeline, Kampagnen und Performance sichtbar.", items: ["Pipeline und Forecast visualisieren.", "Kampagnen-Performance auswerten.", "Lead-Quellen vergleichen.", "Ziele je Team verfolgen."] },
  { value: "finanzen", label: "Finanzen", icon: PieChart, head: "Finanzen & Controlling", intro: "Liquidität, Umsatz und Kosten im Griff.", items: ["Umsatz und Marge nach Dimensionen.", "Liquiditäts- und Kostenanalyse.", "Offene Posten und Forderungen.", "Prognosen mit KI."] },
  { value: "ops", label: "Betrieb", icon: Gauge, head: "Operations", intro: "Prozesse und Auslastung transparent.", items: ["Auslastung und Durchlaufzeiten.", "Qualitäts- und Fehlerkennzahlen.", "Anomalien automatisch erkennen.", "Echtzeitnahe Aktualisierung."] },
];
const comparison = [
  { feature: "Visuelle Analyse", tab: "sehr stark", pbi: "stark", excel: "begrenzt" },
  { feature: "Einstieg / Kosten", tab: "höher", pbi: "günstiger", excel: "niedrig" },
  { feature: "Microsoft-Integration", tab: "gut", pbi: "sehr stark", excel: "nativ" },
  { feature: "Interaktivität", tab: "sehr hoch", pbi: "hoch", excel: "gering" },
  { feature: "Automatisches Reporting", tab: "ja", pbi: "ja", excel: "manuell" },
  { feature: "KI-Analysen", tab: "ja", pbi: "ja", excel: "kaum" },
];
const steps = [
  { step: "01", icon: Phone, title: "Kostenlose Erstanalyse", time: "30 Minuten", description: "Wir klären, welche Fragen Ihre Dashboards beantworten sollen und welche Daten dafür nötig sind." },
  { step: "02", icon: Database, title: "Datenanbindung", time: "Woche 1", description: "Wir binden Ihre Quellen an und sorgen, wo nötig, für eine saubere, konsistente Datenbasis." },
  { step: "03", icon: BarChart3, title: "Dashboard-Bau & KI", time: "Woche 1 bis 3", description: "Wir bauen die Dashboards, gestalten sie verständlich und reichern sie mit KI-Analysen an." },
  { step: "04", icon: Rocket, title: "Go-Live & Automatisierung", time: "ab Woche 3", description: "Dashboards gehen live, Reporting läuft automatisch. Wir schulen Ihr Team und bauen aus." },
];
const related = [
  { href: "/leistungen/power-bi", icon: BarChart3, title: "Power BI & KI-Analysen", desc: "Die Microsoft-Alternative für Dashboards, herstellerneutral eingeordnet." },
  { href: "/leistungen/data-engineering", icon: Database, title: "Data Engineering", desc: "Die saubere Datenbasis im Hintergrund Ihrer Dashboards." },
  { href: "/leistungen/snowflake", icon: Layers, title: "Snowflake Data Cloud", desc: "Verlässliche Datenquelle als Fundament für Tableau und KI." },
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
      <Script id="faq-tableau" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-tableau" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24"><div className="container mx-auto px-4 max-w-7xl"><div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3"><LogoBox slug="tableau" alt="Tableau" imgClassName="h-9 w-auto max-w-[2.75rem]" boxClassName="rounded-xl p-2 shadow-sm" /><Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">Tableau, Business Intelligence</Badge></div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Tableau-Dashboards, die <span className="text-primary">Antworten geben</span></h1>
              <p className="text-lg text-muted-foreground max-w-xl">Wir bauen aussagekräftige Tableau-Dashboards, automatisieren Ihr Reporting und reichern Auswertungen mit KI an, von Trends bis Anomalien. DSGVO-konform und herstellerneutral, inklusive ehrlichem Power-BI-Vergleich.</p>
              <div className="flex flex-col sm:flex-row gap-4"><Button size="lg" asChild><a href="#contact">Kostenloses Assessment</a></Button><Button size="lg" variant="outline" asChild><a href="#vergleich">Tableau vs. Power BI</a></Button></div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground"><span className="flex items-center gap-1.5"><Brain className="w-4 h-4 text-primary" /> KI-Analysen</span><span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> Rollen & DSGVO</span><span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span></div>
            </div>
            <div className="relative">
              <Card className="border-2 shadow-xl shadow-primary/5 overflow-hidden"><CardHeader className="border-b border-border py-3"><div className="flex items-center gap-2"><span className="flex gap-1.5"><span className="w-3 h-3 rounded-full bg-muted-foreground/20" /><span className="w-3 h-3 rounded-full bg-muted-foreground/20" /><span className="w-3 h-3 rounded-full bg-muted-foreground/20" /></span><span className="ml-2 font-mono text-xs text-muted-foreground">umsatz-2026.twb</span><span className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground"><span className="w-2 h-2 rounded-full bg-green-500" /> live</span></div></CardHeader>
                <CardContent className="p-6 space-y-3">
                  <div className="grid grid-cols-3 gap-2">{[["Umsatz", "+18%"], ["Marge", "32%"], ["Leads", "1.240"]].map(([l, v], i) => (<div key={i} className="rounded-lg border-2 border-primary/30 bg-primary/5 p-3 text-center"><div className="text-lg font-bold text-primary">{v}</div><div className="text-[10px] text-muted-foreground">{l}</div></div>))}</div>
                  <div className="rounded-xl border border-border bg-background p-3 flex items-end gap-1.5 h-24">{[40, 65, 50, 80, 60, 90, 70, 100].map((h, i) => (<span key={i} className="flex-1 rounded-t bg-primary/60" style={{ height: `${h}%` }} />))}</div>
                  <div className="flex items-center gap-2 text-[11px] text-muted-foreground"><Brain className="w-3.5 h-3.5 text-primary" /> KI: Anstieg in KW 24 erkannt</div>
                </CardContent>
              </Card>
              <div className="hidden lg:flex absolute -top-4 -right-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium"><LineChart className="w-3.5 h-3.5 text-primary" /> interaktiv</div>
              <div className="hidden lg:flex absolute -bottom-4 -left-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium"><RefreshCw className="w-3.5 h-3.5 text-primary" /> immer aktuell</div>
            </div>
          </div></div></section>

          <section className="py-10 md:py-12 bg-white/50"><div className="container mx-auto px-4 max-w-7xl"><div className="grid grid-cols-2 md:grid-cols-4 border-2 border-border rounded-2xl overflow-hidden bg-card">{stats.map(({ value, label }, i) => (<div key={i} className="p-6 md:p-8 text-center border-b md:border-b-0 border-r last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r border-border"><div className="text-3xl md:text-4xl font-bold text-primary">{value}</div><div className="text-xs md:text-sm text-muted-foreground mt-1.5">{label}</div></div>))}</div></div></section>

          <section className="py-14 md:py-20"><div className="container mx-auto px-4 max-w-7xl"><div className="grid lg:grid-cols-2 gap-12 items-start">
            <div><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Kurz erklärt</Badge><h2 className="text-3xl md:text-4xl font-bold mb-6">Aus Daten werden Entscheidungen</h2><div className="space-y-4 text-muted-foreground leading-relaxed"><p><strong className="text-foreground">Tableau</strong> ist eine führende Plattform für Business Intelligence und Datenvisualisierung. Sie verbindet Datenquellen und macht Kennzahlen als interaktive Dashboards sofort verständlich.</p><p>Besonders stark ist Tableau bei <strong className="text-foreground">visueller, explorativer Analyse</strong>. Wir kombinieren das mit KI, sodass Dashboards nicht nur zeigen, sondern auf Trends und Auffälligkeiten aktiv hinweisen.</p><p>Dazu kommt <strong className="text-foreground">automatisiertes Reporting</strong> und eine saubere Datenbasis, damit Entscheidungen auf verlässlichen, aktuellen Zahlen stehen.</p></div><div className="flex flex-wrap gap-2 mt-6"><Badge variant="secondary" className="rounded-full">BI Dashboards</Badge><Badge variant="secondary" className="rounded-full">Datenvisualisierung</Badge><Badge variant="secondary" className="rounded-full">KI Analysen</Badge></div></div>
            <Card className="border-2 bg-primary/5 border-primary/20"><CardHeader><CardTitle className="text-xl">Tableau auf einen Blick</CardTitle><CardDescription>Die wichtigsten Eckdaten im Überblick.</CardDescription></CardHeader><CardContent className="space-y-1">{ataglance.map(([label, value]) => (<div key={label} className="flex items-center justify-between py-2.5 border-b border-border last:border-0"><span className="text-sm font-medium text-foreground">{label}</span><span className="text-sm text-muted-foreground text-right max-w-[55%]">{value}</span></div>))}</CardContent></Card>
          </div></div></section>

          <section className="py-14 md:py-20 bg-white/50"><div className="container mx-auto px-4 max-w-7xl"><div className="text-center mb-12"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum Tableau?</Badge><h2 className="text-3xl md:text-4xl font-bold">Schluss mit dem Excel-Report-Marathon</h2></div><div className="grid md:grid-cols-2 gap-5"><div className="space-y-3"><div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 pl-1">Was heute bremst</div>{problems.map(({ problem }, i) => (<div key={i} className="flex items-start gap-3 p-4 rounded-xl border bg-background"><X className="w-5 h-5 text-destructive mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{problem}</span></div>))}</div><div className="space-y-3"><div className="text-xs font-semibold text-primary uppercase tracking-widest mb-2 pl-1">Was Tableau ermöglicht</div>{problems.map(({ solution }, i) => (<div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-primary/20 bg-primary/5"><Check className="w-5 h-5 text-primary mt-0.5 shrink-0" /><span className="text-sm leading-relaxed font-medium">{solution}</span></div>))}</div></div></div></section>

          <section className="py-14 md:py-20"><div className="container mx-auto px-4 max-w-7xl"><div className="text-center mb-12"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Was wir liefern</Badge><h2 className="text-3xl md:text-4xl font-bold">Dashboards, die arbeiten</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"><Card className="hover-lift border-2 lg:col-span-2 bg-primary/5 border-primary/20"><CardHeader><div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2"><BarChart3 className="w-6 h-6 text-primary" /></div><CardTitle className="text-xl">{features[0].title}</CardTitle><CardDescription className="text-base leading-relaxed">{features[0].description}</CardDescription></CardHeader></Card>{features.slice(1).map((f, i) => { const Icon = f.icon; return (<Card key={i} className="hover-lift border-2"><CardHeader><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2"><Icon className="w-5 h-5 text-primary" /></div><CardTitle className="text-lg">{f.title}</CardTitle><CardDescription className="leading-relaxed">{f.description}</CardDescription></CardHeader></Card>); })}</div></div></section>

          <section className="py-14 md:py-20 bg-white/50"><div className="container mx-auto px-4 max-w-5xl"><div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Anwendungsfälle</Badge><h2 className="text-3xl md:text-4xl font-bold">Dashboards für jeden Bereich</h2></div><Tabs defaultValue="management" className="w-full"><TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">{usecases.map((d) => { const Icon = d.icon; return (<TabsTrigger key={d.value} value={d.value} className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border"><Icon className="w-4 h-4 mr-1.5" />{d.label}</TabsTrigger>); })}</TabsList>{usecases.map((d) => (<TabsContent key={d.value} value={d.value}><Card className="border-2"><CardContent className="pt-6"><h3 className="text-xl font-bold mb-2">{d.head}</h3><p className="text-muted-foreground leading-relaxed mb-5">{d.intro}</p><div className="grid sm:grid-cols-2 gap-3">{d.items.map((item, j) => (<div key={j} className="flex items-start gap-2.5 p-3 rounded-lg border bg-background"><BarChart3 className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{item}</span></div>))}</div></CardContent></Card></TabsContent>))}</Tabs></div></section>

          <section id="vergleich" className="py-14 md:py-20"><div className="container mx-auto px-4 max-w-5xl"><div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Vergleich</Badge><h2 className="text-3xl md:text-4xl font-bold">Tableau vs. Power BI vs. Excel</h2></div><Card className="border-2 overflow-hidden"><Table><TableHeader><TableRow className="bg-muted/50"><TableHead className="w-[28%] font-bold text-foreground">Merkmal</TableHead><TableHead className="text-primary font-bold">Tableau</TableHead><TableHead className="text-muted-foreground">Power BI</TableHead><TableHead className="text-muted-foreground">Excel</TableHead></TableRow></TableHeader><TableBody>{comparison.map((row, i) => (<TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}><TableCell className="font-medium">{row.feature}</TableCell><TableCell className="text-sm text-primary font-medium">{row.tab}</TableCell><TableCell className="text-sm text-muted-foreground">{row.pbi}</TableCell><TableCell className="text-sm text-muted-foreground">{row.excel}</TableCell></TableRow>))}</TableBody></Table></Card></div></section>

          <section className="py-14 md:py-20 bg-white/50"><div className="container mx-auto px-4 max-w-4xl"><div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unser Prozess</Badge><h2 className="text-3xl md:text-4xl font-bold">Ihr Tableau-Projekt in 4 Schritten</h2></div><ProcessSteps steps={steps} /></div></section>

          <section className="py-14 md:py-20"><div className="container mx-auto px-4 max-w-3xl"><div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge><h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zu Tableau</h2></div><Accordion type="single" collapsible className="w-full space-y-3">{faqs.map((f, i) => (<AccordionItem key={i} value={`item-${i}`} className="border-2 border-border rounded-xl px-6 bg-background data-[state=open]:border-primary/30 data-[state=open]:bg-primary/5"><AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-5">{f.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">{f.a}</AccordionContent></AccordionItem>))}</Accordion></div></section>

          <section className="py-14 md:py-20 bg-white/50"><div className="container mx-auto px-4 max-w-6xl"><div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Mehr Leistungen</Badge><h2 className="text-3xl md:text-4xl font-bold">Passt gut zu Tableau</h2></div><div className="grid md:grid-cols-3 gap-5">{related.map((s, i) => { const Icon = s.icon; return (<a key={i} href={s.href} className="group block"><Card className="h-full border-2 hover-lift group-hover:border-primary/40"><CardHeader><div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${serviceLogos[s.href] ? "bg-white border border-border" : "bg-primary/10"}`}>{serviceLogos[s.href] ? <img src={`/img/logos/${serviceLogos[s.href]}.svg`} alt={s.title} className="w-7 h-7 object-contain" /> : <Icon className="w-6 h-6 text-primary" />}</div><CardTitle className="text-xl">{s.title}</CardTitle></CardHeader><CardContent><p className="text-muted-foreground leading-relaxed">{s.desc}</p></CardContent></Card></a>); })}</div></div></section>

          <ContactForm />
        </main>
        <FooterModern />
      </div>
    </>
  );
}
