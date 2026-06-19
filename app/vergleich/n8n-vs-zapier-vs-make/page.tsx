import type { Metadata } from "next";
import Script from "next/script";
import { NavigationHome } from "@/components/NavigationHome";
import { FooterModern } from "@/components/FooterModern";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { serviceLogos } from "@/lib/serviceLogos";
import {
  Check,
  X,
  Minus,
  Workflow,
  Zap,
  Boxes,
  Shield,
  Server,
  Euro,
  Gauge,
  Bot,
  Plug,
  Cloud,
  Lock,
  GitBranch,
  Network,
  Sparkles,
  Building2,
  Wrench,
  Code,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "n8n vs Zapier vs Make: Automatisierung im Vergleich",
  description:
    "n8n vs Zapier vs Make.com im ehrlichen Vergleich für Unternehmen im DACH-Raum: Kosten, DSGVO und Self-Hosting, Komplexität, KI-Integration und App-Anbindungen. Mit klarer Empfehlung, welches Workflow-Tool für wen passt.",
  keywords:
    "n8n vs zapier, n8n vs make, zapier vs make, Automatisierung Vergleich, n8n Alternative, Make Alternative, Workflow Tool Vergleich, DSGVO Automatisierung",
  alternates: { canonical: "https://ki-kanzlei.at/vergleich/n8n-vs-zapier-vs-make" },
};

const faqs = [
  {
    q: "Was ist der Unterschied zwischen n8n, Zapier und Make?",
    a: "Alle drei verbinden Apps und automatisieren Workflows, sie unterscheiden sich aber im Ansatz. Zapier ist die einfachste, aber teuerste Lösung mit linearen Zaps und der größten App-Auswahl. Make (früher Integromat) bietet einen visuellen Editor mit Verzweigungen und Schleifen zu deutlich günstigeren Preisen. n8n ist Open Source, lässt sich selbst hosten und ist damit die flexibelste und für den DACH-Raum oft DSGVO-freundlichste Variante.",
  },
  {
    q: "Welches Tool ist am günstigsten?",
    a: "Bei der reinen Software ist selbst gehostetes n8n am günstigsten, weil es kostenlos ist und nur Serverkosten anfallen, unabhängig von der Zahl der Ausführungen. Bei den Cloud-Diensten ist Make pro Operation deutlich preiswerter als Zapier. Zapier ist bei hohem Volumen mit Abstand am teuersten, weil pro Task abgerechnet wird. Wichtig ist die Gesamtrechnung inklusive Wartung, nicht nur der Listenpreis.",
  },
  {
    q: "Welches Automatisierungs-Tool ist am besten für die DSGVO?",
    a: "Für strenge Datenschutzanforderungen im DACH-Raum ist selbst gehostetes n8n meist die beste Wahl, weil alle Daten auf Ihrem eigenen Server in der EU oder in Österreich bleiben und nichts an einen US-Anbieter fließt. Zapier und Make verarbeiten Daten überwiegend in der Cloud des Anbieters. Mit einem Auftragsverarbeitungsvertrag und EU-Rechenzentrum lassen sich auch diese rechtskonform betreiben, das volle Self-Hosting bietet aber nur n8n.",
  },
  {
    q: "Kann ich n8n wirklich kostenlos nutzen?",
    a: "Ja. Die Community Edition von n8n ist Open Source und kostenlos, wenn Sie sie selbst hosten. Es fallen nur die Kosten für den Server an, oft schon ab wenigen Euro im Monat. Zusätzlich gibt es eine kostenpflichtige n8n Cloud, falls Sie sich nicht selbst um den Betrieb kümmern möchten. Für die meisten Unternehmen lohnt sich das Self-Hosting wirtschaftlich sehr schnell.",
  },
  {
    q: "Welches Tool eignet sich am besten für KI-Integration?",
    a: "n8n hat hier die Nase vorn, weil es native KI-Bausteine, einen AI-Agent-Knoten und freie API-Aufrufe an beliebige Modelle wie OpenAI, Anthropic oder lokale Modelle erlaubt. Make bietet ebenfalls solide KI-Module und ein gutes Preis-Leistungs-Verhältnis. Zapier hat KI-Funktionen, rechnet diese aber pro Aktion ab, was komplexe KI-Workflows schnell teuer macht.",
  },
  {
    q: "Ist n8n schwieriger zu bedienen als Zapier?",
    a: "Ja, n8n hat eine steilere Lernkurve. Zapier ist bewusst so einfach gehalten, dass auch Mitarbeiter ohne technisches Vorwissen einen Zap bauen können. Make liegt in der Mitte, der visuelle Editor ist mächtig, braucht aber etwas Einarbeitung. n8n bietet die meiste Freiheit, dafür sind Grundkenntnisse zu APIs, JSON und Logik hilfreich. Genau hier unterstützen wir Sie bei Einrichtung und Betrieb.",
  },
  {
    q: "Kann ich später von Zapier oder Make zu n8n wechseln?",
    a: "Ja, ein Wechsel ist möglich und für viele Unternehmen der natürliche nächste Schritt, sobald Volumen, Kosten oder Datenschutzanforderungen steigen. Die Workflows müssen dabei in n8n neu aufgebaut werden, ein direkter Import existiert nicht. Wir migrieren bestehende Zaps und Make-Szenarien regelmäßig nach n8n und sorgen dafür, dass dabei nichts verloren geht.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "n8n vs Zapier vs Make: Automatisierung im Vergleich",
  description:
    "Ehrlicher Vergleich der Automatisierungs-Tools n8n, Zapier und Make.com für Unternehmen im DACH-Raum: Kosten, DSGVO und Self-Hosting, Komplexität, KI-Integration und App-Anbindungen.",
  inLanguage: "de-AT",
  mainEntityOfPage: "https://ki-kanzlei.at/vergleich/n8n-vs-zapier-vs-make",
  author: { "@type": "Organization", name: "KI Kanzlei", url: "https://ki-kanzlei.at" },
  publisher: {
    "@type": "ProfessionalService",
    name: "KI Kanzlei",
    url: "https://ki-kanzlei.at",
    telephone: "+436642314676",
    areaServed: [
      { "@type": "Country", name: "Austria" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "Switzerland" },
    ],
  },
};

const tools = [
  {
    icon: Workflow,
    name: "n8n",
    tag: "Self-Hosted & Open Source",
    verdict: "Der DSGVO-Sieger für den DACH-Raum",
    desc: "Open Source, selbst hostbar und maximal flexibel. Ideal, wenn Daten im Haus bleiben sollen und das Volumen wächst.",
    highlight: true,
    href: "/leistungen/n8n-automatisierung",
  },
  {
    icon: Boxes,
    name: "Make.com",
    tag: "Visuell & günstiger",
    verdict: "Das beste Preis-Leistungs-Verhältnis in der Cloud",
    desc: "Visueller Editor mit Verzweigungen, Schleifen und fairen Preisen pro Operation. Stark für mittlere Komplexität ohne eigenen Server.",
    highlight: false,
    href: "/leistungen/make",
  },
  {
    icon: Zap,
    name: "Zapier",
    tag: "Einfach & teuer",
    verdict: "Am schnellsten startklar, aber am teuersten",
    desc: "Die einfachste Bedienung und die größte App-Auswahl. Perfekt für simple Zaps, wird bei Volumen aber schnell kostspielig.",
    highlight: false,
    href: "/leistungen/zapier",
  },
];

type Rating = "good" | "mid" | "bad";

const ratingIcon: Record<Rating, typeof Check> = { good: Check, mid: Minus, bad: X };
const ratingClass: Record<Rating, string> = {
  good: "text-primary",
  mid: "text-muted-foreground/70",
  bad: "text-muted-foreground/50",
};

const comparison: { feature: string; n8n: [Rating, string]; make: [Rating, string]; zapier: [Rating, string] }[] = [
  {
    feature: "Preismodell",
    n8n: ["good", "Kostenlos self-hosted, nur Serverkosten"],
    make: ["good", "Pro Operation, faire Staffelung"],
    zapier: ["bad", "Pro Task, schnell teuer bei Volumen"],
  },
  {
    feature: "DSGVO & Datenhaltung",
    n8n: ["good", "Volles Self-Hosting in EU oder Österreich"],
    make: ["mid", "Cloud mit EU-Rechenzentrum und AVV"],
    zapier: ["bad", "Primär US-Cloud, Daten verlassen die EU"],
  },
  {
    feature: "Einstieg & Bedienung",
    n8n: ["mid", "Steilere Lernkurve, dafür mächtig"],
    make: ["mid", "Visuell, etwas Einarbeitung nötig"],
    zapier: ["good", "Sehr einfach, ohne Technikwissen nutzbar"],
  },
  {
    feature: "Komplexe Logik",
    n8n: ["good", "Verzweigungen, Schleifen, eigener Code"],
    make: ["good", "Visuelle Routing- und Schleifen-Logik"],
    zapier: ["bad", "Eher lineare Zaps, begrenzte Logik"],
  },
  {
    feature: "KI-Integration",
    n8n: ["good", "AI-Agent-Knoten, freie Modell-Anbindung"],
    make: ["good", "Solide KI-Module, gutes Verhältnis"],
    zapier: ["mid", "KI vorhanden, pro Aktion abgerechnet"],
  },
  {
    feature: "App-Anbindungen",
    n8n: ["mid", "Über 400 plus freie HTTP-Aufrufe"],
    make: ["good", "Mehr als 2.000 fertige Integrationen"],
    zapier: ["good", "Über 7.000 Apps, die größte Auswahl"],
  },
  {
    feature: "Eigener Code & Erweiterung",
    n8n: ["good", "JavaScript, Python, eigene Nodes"],
    make: ["mid", "Custom-Apps und HTTP-Module möglich"],
    zapier: ["mid", "Code-Steps, aber eingeschränkt"],
  },
  {
    feature: "Kostenkontrolle bei Skalierung",
    n8n: ["good", "Volumen ändert die Lizenzkosten nicht"],
    make: ["mid", "Skaliert planbar mit Operationen"],
    zapier: ["bad", "Kosten steigen stark mit dem Volumen"],
  },
];

const costRows = [
  { tool: "n8n (self-hosted)", model: "Open Source, kostenlos", scaling: "Nur Serverkosten, ab wenigen Euro im Monat", verdict: "good" as Rating },
  { tool: "n8n Cloud", model: "Abo nach Ausführungen", scaling: "Planbar, ohne eigenen Betrieb", verdict: "good" as Rating },
  { tool: "Make.com", model: "Abo pro Operation", scaling: "Günstig pro Schritt, fair gestaffelt", verdict: "mid" as Rating },
  { tool: "Zapier", model: "Abo pro Task", scaling: "Steigt schnell bei vielen Ausführungen", verdict: "bad" as Rating },
];

const dsgvoCards = [
  {
    icon: Server,
    title: "n8n: volle Datenhoheit",
    desc: "Self-Hosting auf Ihrem Server in Österreich oder der EU. Keine Daten gehen an Dritte, ideal für Kanzleien, Ärzte und sensible Branchen.",
  },
  {
    icon: Cloud,
    title: "Make: EU-Cloud mit AVV",
    desc: "Betrieb in der Anbieter-Cloud mit Rechenzentren in der EU und Auftragsverarbeitungsvertrag. Solider Kompromiss aus Komfort und Datenschutz.",
  },
  {
    icon: Lock,
    title: "Zapier: US-Cloud beachten",
    desc: "Verarbeitung überwiegend in den USA. Für unkritische Daten praktikabel, bei personenbezogenen Daten ist Vorsicht und Prüfung geboten.",
  },
];

const useCases = [
  {
    icon: Zap,
    badge: "Schnellstart",
    title: "Zapier passt, wenn",
    points: [
      "Sie ohne Technikwissen sofort loslegen wollen",
      "die Workflows einfach und linear sind",
      "exotische Apps angebunden werden müssen",
      "das monatliche Volumen niedrig bleibt",
    ],
  },
  {
    icon: Boxes,
    badge: "Preis-Leistung",
    title: "Make passt, wenn",
    points: [
      "Sie verzweigte Logik visuell bauen möchten",
      "die Kosten pro Schritt gering bleiben sollen",
      "kein eigener Server gewünscht ist",
      "mittlere Komplexität gefragt ist",
    ],
  },
  {
    icon: Workflow,
    badge: "DACH-Empfehlung",
    title: "n8n passt, wenn",
    points: [
      "Daten DSGVO-konform im Haus bleiben müssen",
      "das Volumen wächst und Kosten planbar sein sollen",
      "tiefe KI-Integration gefragt ist",
      "eigener Code und volle Flexibilität zählen",
    ],
    highlight: true,
  },
];

const fazitPoints = [
  { icon: Zap, label: "Zapier", text: "Am einfachsten und am schnellsten startklar, aber bei wachsendem Volumen mit Abstand am teuersten. Gut für simple Aufgaben und seltene Ausführungen." },
  { icon: Boxes, label: "Make.com", text: "Der visuelle Editor und faire Preise pro Operation machen Make zum starken Allrounder für mittlere Komplexität ohne eigenen Server." },
  { icon: Workflow, label: "n8n", text: "Open Source, self-hosted und DSGVO-stark: für den DACH-Raum die nachhaltigste Wahl, sobald Datenschutz, Volumen und Flexibilität zählen." },
];

const related = [
  { href: "/leistungen/n8n-automatisierung", icon: Workflow, tag: "Self-Hosted", title: "n8n Automatisierung", desc: "DSGVO-konforme Workflow-Automatisierung mit n8n, self-hosted in der EU und voll von uns betreut." },
  { href: "/leistungen/make", icon: Boxes, tag: "Visuell", title: "Make.com Automatisierung", desc: "Visuelle Szenarien mit Make.com, schnell umgesetzt und günstig im Betrieb pro Operation." },
  { href: "/leistungen/zapier", icon: Zap, tag: "Schnellstart", title: "Zapier Automatisierung", desc: "Schnelle Zaps mit der größten App-Auswahl, eingerichtet und optimiert für Ihren Anwendungsfall." },
];

const glanceData: [string, string][] = [
  ["Günstigster Betrieb", "n8n self-hosted"],
  ["Einfachster Einstieg", "Zapier"],
  ["Bestes Preis-Leistungs-Verhältnis", "Make.com"],
  ["DSGVO-Sieger für DACH", "n8n"],
  ["Meiste App-Anbindungen", "Zapier (über 7.000)"],
  ["Beste KI-Integration", "n8n"],
];

export default function Page() {
  return (
    <>
      <Script id="faq-vergleich-tools" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-vergleich-tools" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                    Vergleich, Automatisierungs-Tools
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-primary">n8n vs Zapier vs Make</span>: Automatisierung im Vergleich
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Welches Workflow-Tool ist das richtige für Ihr Unternehmen? Wir vergleichen n8n, Zapier und Make.com ehrlich nach Kosten, DSGVO und Self-Hosting, Komplexität, KI-Integration und App-Anbindungen, mit klarer Empfehlung für den DACH-Raum.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Erstgespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#vergleich">Direkt zum Vergleich</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-primary" /> DSGVO im Fokus</span>
                    <span className="flex items-center gap-1.5"><Euro className="w-4 h-4 text-primary" /> Kosten transparent</span>
                    <span className="flex items-center gap-1.5"><Network className="w-4 h-4 text-primary" /> Anbieterunabhängig</span>
                  </div>
                </div>

                {/* Tool-Vergleich-Visual */}
                <Card className="relative border-2 shadow-xl shadow-primary/5 overflow-hidden">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-primary tracking-wide">DREI TOOLS, EIN ZIEL</div>
                        <CardTitle className="text-xl">Workflow-Automatisierung</CardTitle>
                      </div>
                      <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20 text-xs shrink-0">3 im Test</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-3">
                    {tools.map(({ icon: Icon, name, tag, verdict, highlight }) => (
                      <div
                        key={name}
                        className={`flex items-start gap-4 rounded-xl border px-4 py-3.5 ${highlight ? "bg-primary/5 border-primary/30" : "border-border"}`}
                      >
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${highlight ? "bg-primary text-white" : "bg-primary/10 text-primary"}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-sm">{name}</span>
                            <span className="text-[11px] text-muted-foreground">{tag}</span>
                          </div>
                          <div className={`text-xs leading-snug mt-0.5 ${highlight ? "text-primary font-medium" : "text-muted-foreground"}`}>{verdict}</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* TL;DR / Verdict-Karten */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Kurzfassung</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Das Wichtigste in drei Sätzen</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Wer wenig Zeit hat, liest nur das hier. Die Details folgen weiter unten in der großen Vergleichstabelle.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {tools.map(({ icon: Icon, name, tag, desc, highlight, href }) => (
                  <a key={name} href={href} className="group block">
                    <Card className={`h-full border-2 hover-lift transition-all group-hover:border-primary/40 ${highlight ? "bg-primary/5 border-primary/30" : ""}`}>
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${serviceLogos[href] ? "bg-white border border-border" : highlight ? "bg-primary" : "bg-primary/10"}`}>
                            {serviceLogos[href] ? <img src={`/img/logos/${serviceLogos[href]}.svg`} alt={name} className="w-7 h-7 object-contain" /> : <Icon className={`w-6 h-6 ${highlight ? "text-white" : "text-primary"}`} />}
                          </div>
                          <Badge variant="secondary" className="rounded-full text-xs">{tag}</Badge>
                        </div>
                        <CardTitle className="text-xl">{name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed text-sm mb-4">{desc}</p>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">Zur Leistung <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" /></span>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* AUF EINEN BLICK */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Überblick</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Worauf es bei der Wahl ankommt</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      <strong className="text-foreground">n8n, Zapier und Make</strong> lösen dieselbe Aufgabe: Sie verbinden Ihre Apps und automatisieren wiederkehrende Abläufe. Der richtige Anbieter hängt aber stark davon ab, wie wichtig Ihnen <strong className="text-foreground">Datenschutz</strong>, Kosten bei Skalierung und tiefe <strong className="text-foreground">KI-Integration</strong> sind.
                    </p>
                    <p>
                      Für viele Unternehmen im DACH-Raum ist <strong className="text-foreground">self-hosted n8n</strong> die nachhaltigste Lösung, weil Daten im Haus bleiben und die Kosten unabhängig vom Volumen kalkulierbar sind. Wer maximale Einfachheit sucht, ist mit Zapier gut bedient, wer Preis und visuelle Logik abwägt, mit Make.
                    </p>
                    <p>
                      Wir sind anbieterunabhängig und empfehlen ehrlich, was zu Ihrem Anwendungsfall passt. Häufig ist auch eine Kombination sinnvoll, etwa Zapier für eine exotische App und n8n als zentrale Schaltzentrale.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">DSGVO</Badge>
                    <Badge variant="secondary" className="rounded-full">Self-Hosting</Badge>
                    <Badge variant="secondary" className="rounded-full">KI-Integration</Badge>
                    <Badge variant="secondary" className="rounded-full">Kostenkontrolle</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Der Vergleich auf einen Blick</CardTitle>
                    <CardDescription>Wer in welcher Disziplin vorne liegt.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {glanceData.map(([label, value]) => (
                      <div key={label} className="flex items-center justify-between py-2.5 border-b border-border last:border-0 gap-3">
                        <span className="text-sm font-medium text-foreground">{label}</span>
                        <span className="text-sm text-primary font-semibold text-right">{value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* ZENTRALE 3-SPALTEN VERGLEICHSTABELLE */}
          <section id="vergleich" className="py-14 md:py-20 scroll-mt-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Direktvergleich</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">n8n vs Zapier vs Make im Detail</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Acht Kriterien, drei Tools, eine ehrliche Bewertung. Ein Haken steht für stark, ein Strich für solide, ein Kreuz für schwach.</p>
              </div>
              <Card className="border-2 overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[20%] font-bold text-foreground">Kriterium</TableHead>
                      <TableHead className="text-primary font-bold">n8n</TableHead>
                      <TableHead className="text-foreground font-bold">Make.com</TableHead>
                      <TableHead className="text-foreground font-bold">Zapier</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparison.map((r, i) => {
                      const N = ratingIcon[r.n8n[0]];
                      const M = ratingIcon[r.make[0]];
                      const Z = ratingIcon[r.zapier[0]];
                      return (
                        <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                          <TableCell className="font-medium align-top">{r.feature}</TableCell>
                          <TableCell className="text-sm align-top">
                            <span className="inline-flex items-start gap-1.5">
                              <N className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${ratingClass[r.n8n[0]]}`} />
                              <span className={r.n8n[0] === "good" ? "text-primary font-medium" : "text-muted-foreground"}>{r.n8n[1]}</span>
                            </span>
                          </TableCell>
                          <TableCell className="text-sm align-top">
                            <span className="inline-flex items-start gap-1.5">
                              <M className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${ratingClass[r.make[0]]}`} />
                              <span className="text-muted-foreground">{r.make[1]}</span>
                            </span>
                          </TableCell>
                          <TableCell className="text-sm align-top">
                            <span className="inline-flex items-start gap-1.5">
                              <Z className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${ratingClass[r.zapier[0]]}`} />
                              <span className="text-muted-foreground">{r.zapier[1]}</span>
                            </span>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </section>

          {/* KOSTEN */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Kosten</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Was kosten n8n, Zapier und Make wirklich?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Der Listenpreis täuscht. Entscheidend ist, wie die Kosten mit dem Volumen Ihrer Automatisierungen mitwachsen.</p>
              </div>
              <Card className="border-2 overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="font-bold text-foreground">Lösung</TableHead>
                      <TableHead className="text-muted-foreground">Preismodell</TableHead>
                      <TableHead className="text-muted-foreground">Verhalten bei Skalierung</TableHead>
                      <TableHead className="text-foreground">Bewertung</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {costRows.map((r, i) => {
                      const R = ratingIcon[r.verdict];
                      return (
                        <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                          <TableCell className="font-medium">{r.tool}</TableCell>
                          <TableCell className="text-muted-foreground text-sm">{r.model}</TableCell>
                          <TableCell className="text-muted-foreground text-sm">{r.scaling}</TableCell>
                          <TableCell>
                            <R className={`w-4 h-4 ${ratingClass[r.verdict]}`} />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </Card>
              <p className="text-sm text-muted-foreground mt-4 max-w-3xl">
                Faustregel: Bei niedrigem Volumen ist Zapier komfortabel, ab mittlerem Volumen wird Make günstiger, und bei hohem oder wachsendem Volumen schlägt self-hosted n8n alle, weil die Lizenzkosten konstant bei null bleiben.
              </p>
            </div>
          </section>

          {/* DSGVO / SELF-HOSTING */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">DSGVO & Self-Hosting</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Datenschutz entscheidet im DACH-Raum</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Für Kanzleien, Ärzte und alle, die mit personenbezogenen Daten arbeiten, ist die Frage der Datenhaltung oft wichtiger als der Preis.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {dsgvoCards.map(({ icon: Icon, title, desc }, i) => (
                  <Card key={i} className={`border-2 hover-lift ${i === 0 ? "bg-primary/5 border-primary/30" : ""}`}>
                    <CardHeader className="pb-3">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-2 ${i === 0 ? "bg-primary" : "bg-primary/10"}`}>
                        <Icon className={`w-5 h-5 ${i === 0 ? "text-white" : "text-primary"}`} />
                      </div>
                      <CardTitle className="text-lg">{title}</CardTitle>
                    </CardHeader>
                    <CardContent><p className="text-muted-foreground leading-relaxed text-sm">{desc}</p></CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* KI-INTEGRATION & APP-ANBINDUNGEN */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="border-2">
                  <CardHeader>
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                      <Bot className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">KI-Integration</CardTitle>
                    <CardDescription>Wie gut sich künstliche Intelligenz in die Workflows einbauen lässt.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                    <p><strong className="text-foreground">n8n</strong> bietet native KI-Bausteine, einen AI-Agent-Knoten und freie API-Aufrufe an OpenAI, Anthropic oder lokale Modelle. Komplexe KI-Abläufe lassen sich ohne Aufpreis pro Aktion bauen.</p>
                    <p><strong className="text-foreground">Make</strong> hat solide, fertige KI-Module mit gutem Preis-Leistungs-Verhältnis, ideal für überschaubare KI-Schritte im visuellen Editor.</p>
                    <p><strong className="text-foreground">Zapier</strong> liefert KI-Funktionen bequem, rechnet sie aber pro Aktion ab. Bei vielen KI-Aufrufen wird das schnell teuer.</p>
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardHeader>
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                      <Plug className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">App-Anbindungen</CardTitle>
                    <CardDescription>Wie viele Dienste sich ohne Eigenentwicklung verbinden lassen.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                    <p><strong className="text-foreground">Zapier</strong> hat mit über 7.000 Apps die mit Abstand größte Auswahl, ideal, wenn eine exotische Software angebunden werden muss.</p>
                    <p><strong className="text-foreground">Make</strong> bietet mehr als 2.000 fertige Integrationen und deckt damit die allermeisten gängigen Tools ab.</p>
                    <p><strong className="text-foreground">n8n</strong> kommt auf über 400 Integrationen, gleicht das aber durch freie HTTP-Aufrufe aus: Jede API mit Schnittstelle lässt sich anbinden.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* WELCHES TOOL FÜR WEN */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Empfehlung</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Welches Tool für welches Unternehmen?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Es gibt keinen pauschalen Sieger. Diese drei Profile helfen Ihnen, schnell die passende Richtung zu erkennen.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {useCases.map(({ icon: Icon, badge, title, points, highlight }, i) => (
                  <Card key={i} className={`border-2 h-full ${highlight ? "bg-primary/5 border-primary/30" : ""}`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${highlight ? "bg-primary" : "bg-primary/10"}`}>
                          <Icon className={`w-5 h-5 ${highlight ? "text-white" : "text-primary"}`} />
                        </div>
                        <Badge variant="secondary" className="rounded-full text-xs">{badge}</Badge>
                      </div>
                      <CardTitle className="text-lg">{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2.5">
                        {points.map((p, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground leading-snug">
                            <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* EHRLICHES FAZIT */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Ehrliches Fazit</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere Empfehlung als KI Kanzlei</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Ohne Schönfärberei: Jedes Tool hat seinen Platz, aber für die meisten Unternehmen im DACH-Raum führt der Weg langfristig zu n8n.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-5 mb-8">
                {fazitPoints.map(({ icon: Icon, label, text }, i) => (
                  <Card key={i} className={`border-2 ${i === 2 ? "bg-primary/5 border-primary/30" : ""}`}>
                    <CardHeader className="pb-3">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-2 ${i === 2 ? "bg-primary" : "bg-primary/10"}`}>
                        <Icon className={`w-5 h-5 ${i === 2 ? "text-white" : "text-primary"}`} />
                      </div>
                      <CardTitle className="text-lg">{label}</CardTitle>
                    </CardHeader>
                    <CardContent><p className="text-muted-foreground leading-relaxed text-sm">{text}</p></CardContent>
                  </Card>
                ))}
              </div>
              <Card className="border-2 bg-primary/5 border-primary/20">
                <CardContent className="py-7 px-6 md:px-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
                    <div className="flex items-center gap-3 shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <Building2 className="w-8 h-8 text-primary/40 hidden md:block" />
                    </div>
                    <p className="text-base text-foreground leading-relaxed">
                      <strong>Unsicher, welches Tool zu Ihnen passt?</strong> Wir analysieren Ihre Prozesse, Datenschutzanforderungen und das erwartete Volumen und empfehlen anbieterunabhängig die wirtschaftlichste Lösung, von Zapier über Make bis self-hosted n8n. Die Umsetzung übernehmen wir auf Wunsch komplett.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* MERKMALE / TRUST-STRIP */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-2 lg:grid-cols-4 border-2 border-border rounded-2xl overflow-hidden bg-card">
                {[
                  { icon: Wrench, value: "Aus einer Hand", label: "Beratung und Umsetzung" },
                  { icon: Shield, value: "DSGVO-first", label: "EU- und Österreich-Hosting" },
                  { icon: GitBranch, value: "Migration", label: "Wechsel zu n8n inklusive" },
                  { icon: Code, value: "Anbieterneutral", label: "ehrliche Tool-Empfehlung" },
                ].map(({ icon: Icon, value, label }, i) => (
                  <div key={i} className="p-7 md:p-8 text-center border-b lg:border-b-0 border-border [&:nth-child(odd)]:border-r lg:[&:not(:last-child)]:border-r">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-lg md:text-xl font-bold text-primary">{value}</div>
                    <div className="text-sm text-muted-foreground mt-1 leading-snug">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Häufige Fragen zum Tool-Vergleich</h2>
                <p className="text-lg text-muted-foreground">n8n, Zapier oder Make, die Fragen, die uns am häufigsten gestellt werden.</p>
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
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Wir setzen Ihre Automatisierung um</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Egal für welches Tool Sie sich entscheiden, wir richten es ein, optimieren es und betreuen den laufenden Betrieb.</p>
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
                          <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">Mehr erfahren <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" /></span>
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
