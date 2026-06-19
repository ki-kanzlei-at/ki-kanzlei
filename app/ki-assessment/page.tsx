import type { Metadata } from "next";
import Script from "next/script";
import { NavigationHome } from "@/components/NavigationHome";
import { FooterModern } from "@/components/FooterModern";
import { AssessmentForm } from "@/components/AssessmentForm";
import { KIReifegradTest } from "@/components/KIReifegradTest";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, BarChart3, FileText, Rocket, Check, X, Shield, ShieldCheck, Star, Building2, Brain, Target, Stethoscope, Scale, Hotel, Cpu, Briefcase, Phone, Compass, GraduationCap, Bot, Gauge } from "lucide-react";

export const metadata: Metadata = {
  title: "KI Assessment Center: KI-Analyse, ROI-Report & Roadmap",
  description:
    "KI Assessment Center: 490 Euro für die komplette Analyse von Prozessen, Tech-Stack, KI-Reifegrad und ROI plus PDF-Report. Bei Beauftragung der Umsetzung voll anrechenbar, DSGVO-konform im DACH-Raum.",
  keywords:
    "KI Assessment Center, KI Assessment, KI Reifegrad, KI Analyse Unternehmen, KI Potenzialanalyse, KI Audit, KI Readiness Check, AI Assessment, KI ROI Analyse, KI Implementierungsplan, KI Strategie",
  alternates: { canonical: "https://ki-kanzlei.at/ki-assessment" },
};

const faqs = [
  {
    q: "Was bringt mir das KI Assessment konkret?",
    a: "Klarheit. Sie sehen schwarz auf weiß, welche Ihrer Abläufe sich wirklich lohnen zu automatisieren, was die Umsetzung kostet und was sie spart. Am Ende halten Sie einen Report in der Hand, mit dem Sie sofort starten können, auch ohne uns.",
  },
  {
    q: "Was kostet das KI Assessment Center?",
    a: "490 Euro pauschal, fix und ohne Kleingedrucktes. Dafür schauen wir uns alles an und Sie bekommen den vollständigen Report als PDF. Entscheiden Sie sich danach für die Umsetzung mit uns, rechnen wir die 490 Euro voll auf das Projekt an. So ist das Assessment praktisch kostenneutral und Sie gehen kein Risiko ein. Das kurze Erstgespräch davor bleibt kostenlos und unverbindlich.",
  },
  {
    q: "Wie lange dauert es bis zum fertigen Report?",
    a: "Nach einem kurzen Telefonat von etwa 30 Minuten brauchen wir rund zwei Wochen. In der ersten Woche analysieren wir, in der zweiten bekommen Sie Ihren Report als PDF, mit priorisierten Use Cases, ROI pro Anwendungsfall und einer Roadmap.",
  },
  {
    q: "Wir haben mit KI noch nie gearbeitet. Ist das trotzdem sinnvoll?",
    a: "Gerade dann. Sie müssen nichts vorbereiten und kein Vorwissen mitbringen. Wir holen Sie da ab, wo Sie stehen, und zeigen die zwei, drei Dinge, die bei Ihnen am schnellsten Wirkung zeigen, ohne Fachchinesisch.",
  },
  {
    q: "Wie läuft der KI-Reifegrad-Test ab?",
    a: "In sechs kurzen Fragen schätzen wir Datenlage, Automatisierungsgrad, KI-Nutzung, Team-Know-how, Zeitfresser und Strategie ein. Sie bekommen sofort einen Score von 0 bis 100 Prozent und Ihre Stufe von KI-Neuling bis KI-nativ. Im vollen Assessment vertiefen wir das mit echten Zahlen aus Ihrem Betrieb.",
  },
  {
    q: "Bleiben unsere Daten sicher?",
    a: "Ja. Wir arbeiten DSGVO-konform, die Server stehen in der EU, und jeder empfohlene Use Case wird auf Datenschutz und EU-AI-Act-Relevanz geprüft. Auf Wunsch unterschreiben wir vorab eine Vertraulichkeitsvereinbarung.",
  },
  {
    q: "Müssen wir danach mit euch weiterarbeiten?",
    a: "Nein. Der Report gehört Ihnen, Punkt. Sie entscheiden in Ruhe, ob Sie selbst loslegen, einen anderen Partner holen oder mit uns umsetzen. Keine Verpflichtung, kein Nachfassen mit Verkaufsdruck.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "KI Assessment Center",
  serviceType: "KI Assessment, KI-Reifegrad-Analyse",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at" },
  description: "KI Assessment Center für Unternehmen im DACH-Raum: KI-Reifegrad-Bewertung, Prozessanalyse, ROI-Kalkulation und Implementierungsplan als PDF-Report. 490 Euro, bei Beauftragung der Umsetzung voll anrechenbar.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
  offers: { "@type": "Offer", price: "490", priceCurrency: "EUR", description: "KI Assessment Center inkl. PDF-Report, bei Umsetzung voll anrechenbar" },
};

const deliverables = [
  { icon: BarChart3, title: "KI-Reifegrad auf 5 Stufen", description: "Wo steht Ihr Betrieb heute? Wir bewerten Daten, Prozesse, Know-how und Technik, nachvollziehbar und ehrlich." },
  { icon: Search, title: "Die lohnendsten Use Cases", description: "Wir filtern aus Ihrem Alltag die fünf Stellen heraus, an denen Automatisierung am schnellsten Zeit zurückbringt." },
  { icon: Target, title: "ROI, durchgerechnet", description: "Pro Use Case: gesparte Stunden pro Woche, Euro pro Monat und ab wann sich die Investition trägt." },
  { icon: Brain, title: "Passender Tech-Stack", description: "Welche Modelle, Tools und Plattformen zu Ihnen passen, von Open-Source-LLMs über n8n bis zur Speziallösung." },
  { icon: FileText, title: "Konkrete Roadmap", description: "Was zuerst, was später, wer wird gebraucht. Mit Zeitachse, Meilensteinen und ein paar schnellen Erfolgen zum Start." },
  { icon: Shield, title: "DSGVO- & AI-Act-Check", description: "Wir prüfen jeden Vorschlag auf Datenschutz und EU AI Act, damit Sie nicht später nachbessern müssen." },
];

const audience = [
  { value: "kmu", label: "KMU", icon: Briefcase, head: "Mittelstand & KMU ab 5 Mitarbeitern", text: "Sie spüren, dass viel Zeit in Routine versickert, wissen aber nicht, wo der Hebel sitzt. Wir zeigen ihn und fangen klein an, mit etwas, das sich schnell rechnet." },
  { value: "health", label: "Gesundheit", icon: Stethoscope, head: "Ärzte, Praxen & Therapeuten", text: "Telefon, Terminverschiebungen, Dokumentation: das frisst Stunden, die Sie lieber für Patienten hätten. Genau da setzen wir an, ärztliche Verschwiegenheit inklusive." },
  { value: "legal", label: "Kanzleien", icon: Scale, head: "Anwälte & Steuerberater", text: "Aktenberge, Erstanfragen, Belegchaos. Wir finden die Routinen, die KI übernehmen kann, ohne dass sensible Mandantendaten je das Haus verlassen." },
  { value: "hotel", label: "Hotellerie", icon: Hotel, head: "Hotels & Gastronomie", text: "Anrufe am Abend, Anfragen über fünf Kanäle, Angebote von Hand. Ein Assessment zeigt, was sich automatisieren lässt, ohne dass die Gastfreundschaft leidet." },
  { value: "tech", label: "Tech", icon: Cpu, head: "IT- & Software-Unternehmen", text: "Sie nutzen schon KI, wollen aber sauber skalieren: MLOps, eigene Agents, RAG. Wir schauen auf Ihre Architektur und zeigen den nächsten sinnvollen Schritt." },
  { value: "enterprise", label: "Enterprise", icon: Building2, head: "Konzerne & große Betriebe", text: "Viele Ideen, wenig Priorisierung. Wir bringen Struktur rein: welche Use Cases zuerst, mit welchem ROI und welchem Risiko." },
];

const comparison = [
  { feature: "Kosten", assessment: "490 € pauschal, bei Umsetzung angerechnet", classic: "Tagessätze ab ca. 1.500 €" },
  { feature: "Ergebnis", assessment: "Konkreter PDF-Report zum Mitnehmen", classic: "Meist Präsentation & Slides" },
  { feature: "ROI-Kalkulation", assessment: "Pro Use Case durchgerechnet", classic: "Selten konkret" },
  { feature: "Herstellerneutral", assessment: "Ja, keine Provisionen", classic: "Oft an Partner gebunden" },
  { feature: "Umsetzung möglich", assessment: "Auf Wunsch durch dasselbe Team", classic: "Häufig separater Anbieter" },
  { feature: "Dauer", assessment: "Rund 2 Wochen", classic: "Oft mehrere Monate" },
];

const levels = [
  { n: "1", name: "KI-Neuling", range: "0 bis 20 %", what: "Daten leben auf Papier, in Köpfen und in verstreuten Excel-Dateien. KI ist noch kein Thema, und genau hier liegt das größte Potenzial.", focus: "Erste Prozessanalyse, schnelle Quick Wins bei Telefon und E-Mail." },
  { n: "2", name: "KI-Interessiert", range: "21 bis 40 %", what: "Das Bewusstsein ist da, einzelne nutzen ChatGPT privat. Was fehlt, ist ein roter Faden und eine saubere Datengrundlage.", focus: "Use Cases priorisieren, Daten zentralisieren, erstes Pilotprojekt." },
  { n: "3", name: "KI-Starter", range: "41 bis 60 %", what: "Erste KI-Tools sind offiziell im Einsatz und liefern Ergebnisse. Jetzt geht es ums Verknüpfen und Skalieren, hier entsteht echter ROI.", focus: "Workflows verbinden, Wissensdatenbank per RAG, Team schulen." },
  { n: "4", name: "KI-Fortgeschritten", range: "61 bis 80 %", what: "KI steckt in mehreren Kernprozessen, geschulte Mitarbeiter treiben das Thema. Effizienz und Governance rücken in den Fokus.", focus: "Agentic AI, MLOps, EU-AI-Act-Konformität, Feinschliff." },
  { n: "5", name: "KI-nativ", range: "81 bis 100 %", what: "KI gehört zur DNA des Betriebs, ein eigenes Team steuert die Entwicklung. Jetzt zählt der Wettbewerbsvorsprung.", focus: "Custom Agents, weitere Skalierung, neue Anwendungsfälle." },
];

const ladder = [
  { lvl: "L1", cls: "bg-primary/20", h: "20%" },
  { lvl: "L2", cls: "bg-primary/35", h: "40%" },
  { lvl: "L3", cls: "bg-primary/55", h: "60%" },
  { lvl: "L4", cls: "bg-primary/75", h: "80%" },
  { lvl: "L5", cls: "bg-primary", h: "100%" },
];

const steps = [
  { step: "01", icon: Phone, title: "Kurzes Telefonat", time: "30 Minuten", desc: "Wir lernen uns kennen, Sie schildern, wo der Schuh drückt. Danach wissen beide Seiten, ob ein volles Assessment Sinn macht." },
  { step: "02", icon: Search, title: "KI Assessment Center (490 €)", time: "Woche 1", desc: "Wir nehmen Tech-Stack, Prozesse und Reifegrad unter die Lupe und sprechen mit Ihrem Team. Hier entsteht das Bild. Die 490 Euro rechnen wir bei der Umsetzung voll an." },
  { step: "03", icon: FileText, title: "Ihr Report", time: "Woche 2", desc: "Sie bekommen das PDF: priorisierte Use Cases, ROI, Tech-Empfehlung und Roadmap. Verständlich, nicht akademisch." },
  { step: "04", icon: Rocket, title: "Umsetzung", time: "ab Woche 3", desc: "Wenn Sie wollen, setzen wir es mit Ihnen um, vom Pilot bis zum Go-live. Wenn nicht, behalten Sie trotzdem den Plan." },
];

const stats = [
  { v: "2 Wo.", l: "vom Erstgespräch bis zum Report" },
  { v: "5+", l: "priorisierte Use Cases pro Report" },
  { v: "490 €", l: "fix, bei Umsetzung voll anrechenbar" },
  { v: "100 %", l: "DSGVO-konform, EU-Hosting" },
];

const related = [
  { href: "/leistungen/ki-consulting", icon: Compass, tag: "Beratung", title: "KI Consulting", desc: "Wir setzen die Empfehlungen aus dem Report mit Ihnen um: von der Priorisierung über die Umsetzung bis zum laufenden Sparring." },
  { href: "/leistungen/ki-schulung", icon: GraduationCap, tag: "Training", title: "KI Schulung", desc: "Damit Ihr Team die neuen Tools nicht nur hat, sondern täglich nutzt, praxisnah an echten Fällen aus Ihrem Alltag." },
  { href: "/leistungen/agentic-ai", icon: Bot, tag: "Automatisierung", title: "Agentic AI", desc: "Autonome Agents, die ganze Aufgaben übernehmen, nicht nur antworten, sondern eigenständig handeln und abschließen." },
];

export default function Page() {
  return (
    <>
      <Script id="faq-schema-ki-assessment" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-schema-ki-assessment" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <style>{`
        @keyframes kaPulse { 0%,100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.3); opacity: .55; } }
        .ka-pulse { animation: kaPulse 1.8s ease-in-out infinite; }
        @keyframes kaRise { 0% { transform: scaleY(.4); opacity: .4; } 100% { transform: scaleY(1); opacity: 1; } }
        .ka-bar { transform-origin: bottom; animation: kaRise .7s ease-out both; }
      `}</style>

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                    KI Assessment Center, 490 €, voll anrechenbar
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Wo steht Ihr Unternehmen <span className="text-primary">in Sachen KI?</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Erst der 60-Sekunden-Selbsttest gratis, dann das KI Assessment Center: Für 490 Euro schauen wir uns alles an, Prozesse, Daten und Technik, und liefern einen klaren Report mit priorisierten Use Cases und ROI. Entscheiden Sie sich für die Umsetzung, rechnen wir die 490 Euro voll an.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#test">Selbsttest starten</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#offer">Assessment Center buchen (490 €)</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-sm">
                    <span className="flex items-center gap-1.5">
                      <span className="flex">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </span>
                      <span className="font-semibold">5,0</span>
                      <span className="text-muted-foreground">von Kunden im DACH-Raum bewertet</span>
                    </span>
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform & EU-Hosting
                    </span>
                  </div>
                </div>

                {/* Creative reifegrad ladder */}
                <Card className="relative border-2 shadow-xl shadow-primary/5">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Gauge className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg leading-tight">KI-Reifegradmodell</CardTitle>
                        <CardDescription>Fünf Stufen bis KI-nativ, Score von 0 bis 100</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    {/* Staircase */}
                    <div className="relative flex items-end justify-between gap-2 sm:gap-3 h-44">
                      {ladder.map((b, i) => (
                        <div key={b.lvl} className="relative flex-1 flex flex-col items-center justify-end h-full">
                          {i === 1 && (
                            <span className="absolute -top-1 left-1/2 -translate-x-1/2 flex items-center gap-1 whitespace-nowrap rounded-full bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 text-[10px] font-semibold">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary ka-pulse" /> Die meisten starten hier
                            </span>
                          )}
                          <div
                            className={`ka-bar w-full rounded-t-lg ${b.cls}`}
                            style={{ height: b.h, animationDelay: `${i * 0.08}s` }}
                          />
                          <span className="mt-2 text-[11px] font-semibold text-muted-foreground tabular-nums">{b.lvl}</span>
                        </div>
                      ))}
                    </div>
                    <div className="h-px bg-border mt-1 mb-4" />
                    {/* Legend */}
                    <div className="space-y-2">
                      {levels.map((l) => (
                        <div key={l.n} className="flex items-center gap-2 text-sm">
                          <span className="w-5 h-5 rounded-md bg-primary/10 text-primary text-[11px] font-bold flex items-center justify-center shrink-0">{l.n}</span>
                          <span className="font-medium">{l.name}</span>
                          <span className="ml-auto text-xs text-muted-foreground tabular-nums">{l.range}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* STATS */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-2 lg:grid-cols-4 border-2 border-border rounded-2xl overflow-hidden bg-card">
                {stats.map((s, i) => (
                  <div key={i} className="p-8 text-center border-b lg:border-b-0 border-r last:border-r-0 [&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r border-border">
                    <div className="text-4xl md:text-5xl font-bold text-primary">{s.v}</div>
                    <div className="text-sm text-muted-foreground mt-2">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SELBSTTEST */}
          <section id="test" className="py-14 md:py-20 relative overflow-hidden scroll-mt-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-3xl pointer-events-none" aria-hidden />
            <div className="container mx-auto px-4 max-w-7xl relative">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Selbsttest, ohne Anmeldung</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Machen Sie den Schnell-Check</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Sechs Fragen, eine ehrliche Einschätzung. Am Ende wissen Sie, wo Sie stehen und was der nächste Schritt ist.</p>
              </div>
              <KIReifegradTest />
            </div>
          </section>

          {/* WAS IST DAS + VERGLEICH */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Kurz erklärt</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Mehr als ein nettes Beratungsgespräch</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Die meisten Unternehmen ahnen, dass KI ihnen Arbeit abnehmen könnte. Woran es hakt, ist die Frage „Wo fangen wir an?". Genau die beantwortet das <strong className="text-foreground">KI Assessment Center</strong> der KI Kanzlei.</p>
                    <p>Wir schauen uns Ihre Abläufe an, prüfen Datenlage und Technik und reden mit den Leuten, die täglich damit arbeiten. Kein Bauchgefühl, sondern eine saubere Bestandsaufnahme, und daraus ein Plan, der zu Ihrem Betrieb passt.</p>
                    <p>Das Ergebnis ist ein <strong className="text-foreground">Report zum Mitnehmen</strong>: Reifegrad, die lohnendsten Use Cases, der ROI dazu und eine Roadmap. Das Assessment kostet 490 Euro pauschal, und die rechnen wir voll an, wenn Sie die Umsetzung mit uns beauftragen. Ob Sie damit selbst loslegen oder mit uns, das entscheiden Sie hinterher.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Herstellerneutral</Badge>
                    <Badge variant="secondary" className="rounded-full">Branchenspezifisch</Badge>
                    <Badge variant="secondary" className="rounded-full">Ohne Verkaufsdruck</Badge>
                  </div>
                </div>
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-xl">Assessment vs. klassische Beratung</CardTitle>
                    <CardDescription>Warum sich der Vergleich lohnt.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[34%]" />
                          <TableHead className="text-primary font-semibold">KI Assessment</TableHead>
                          <TableHead>Klassisch</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {comparison.map((r, i) => (
                          <TableRow key={i}>
                            <TableCell className="font-medium">{r.feature}</TableCell>
                            <TableCell><span className="inline-flex items-start gap-1.5"><Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />{r.assessment}</span></TableCell>
                            <TableCell className="text-muted-foreground"><span className="inline-flex items-start gap-1.5"><X className="w-4 h-4 text-muted-foreground/60 mt-0.5 shrink-0" />{r.classic}</span></TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* IM REPORT - BENTO */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Im Report enthalten</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Was am Ende auf dem Tisch liegt</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Ein PDF, mit dem Sie wirklich etwas anfangen können, kein Hochglanz ohne Substanz.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {deliverables.map((d, i) => {
                  const Icon = d.icon;
                  return (
                    <Card key={i} className={`hover-lift border-2 ${i === 0 ? "lg:col-span-2 bg-primary/5 border-primary/20" : ""}`}>
                      <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{d.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{d.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* OFFER / PREIS */}
          <section id="offer" className="py-14 md:py-20 scroll-mt-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Das Angebot</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Ein fixer Preis, voll anrechenbar</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Kein Tagessatz-Risiko, kein Knebelvertrag. Ein klarer Preis fürs komplette Assessment und den Report. Setzen Sie um, ist er wieder drin.</p>
              </div>
              <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {/* Preis-Karte */}
                <Card className="border-2 border-primary/30 bg-primary/5 flex flex-col">
                  <CardHeader>
                    <Badge className="rounded-full w-fit mb-2">KI Assessment Center</Badge>
                    <div className="flex items-end gap-2">
                      <span className="text-5xl md:text-6xl font-bold text-primary">490 €</span>
                      <span className="text-muted-foreground mb-2">einmalig, exkl. USt.</span>
                    </div>
                    <CardDescription className="text-base">Komplettes Assessment, persönlich durchgegangen, plus PDF-Report zum Mitnehmen.</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-3 mb-6">
                      {[
                        "Wir schauen uns alles an: Prozesse, Datenlage, Tech-Stack",
                        "KI-Reifegrad und die lohnendsten Use Cases",
                        "ROI pro Use Case, durchgerechnet in Euro und Stunden",
                        "Tech-Empfehlung, Roadmap und DSGVO- & AI-Act-Check",
                        "Alles im PDF-Report, der Ihnen gehört",
                      ].map((t, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5"><Check className="w-4 h-4 text-primary" /></span>
                          <span className="text-foreground leading-relaxed">{t}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto">
                      <Button size="lg" className="w-full" asChild><a href="#contact">Assessment Center buchen</a></Button>
                      <p className="text-xs text-muted-foreground text-center mt-3">Davor: kostenloses, unverbindliches Erstgespräch (30 Min.)</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Anrechnung erklärt */}
                <Card className="border-2 flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-xl">So funktioniert die Anrechnung</CardTitle>
                    <CardDescription>Warum das Assessment am Ende fast nichts kostet.</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-5">
                      {[
                        { n: "1", t: "Sie buchen das Assessment", d: "490 Euro, fix. Wir gehen alles durch und liefern Ihnen den vollständigen Report." },
                        { n: "2", t: "Sie entscheiden in Ruhe", d: "Der Report gehört Ihnen. Sie setzen selbst um, mit einem anderen Partner oder mit uns. Kein Druck." },
                        { n: "3", t: "Umsetzung mit uns? 490 € weg", d: "Beauftragen Sie die Implementierung, ziehen wir die 490 Euro vom Projektpreis ab. Das Assessment ist damit kostenneutral." },
                      ].map((s) => (
                        <div key={s.n} className="flex gap-4">
                          <span className="w-9 h-9 rounded-xl bg-primary text-white font-bold flex items-center justify-center shrink-0">{s.n}</span>
                          <div>
                            <div className="font-semibold">{s.t}</div>
                            <p className="text-muted-foreground leading-relaxed text-sm mt-0.5">{s.d}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20 text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Unterm Strich: </span>
                      Sie zahlen 490 Euro für Klarheit und ein Risiko von null. Entweder Sie haben einen Plan zum Mitnehmen, oder einen Plan, der sich bei der Umsetzung selbst bezahlt.
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* REIFEGRADMODELL */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Das Reifegradmodell</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Fünf Stufen von KI-Neuling bis KI-nativ</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Im Assessment ordnen wir Sie ehrlich ein und zeigen, was der nächste sinnvolle Schritt ist, nicht der größtmögliche.</p>
              </div>
              <div className="max-w-4xl mx-auto space-y-4">
                {levels.map((l, i) => (
                  <Card key={l.n} className={`border-2 ${i === levels.length - 1 ? "border-primary/30 bg-primary/5" : ""}`}>
                    <CardContent className="pt-6 flex flex-col sm:flex-row gap-4 sm:gap-6">
                      <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:w-48 shrink-0">
                        <span className="w-11 h-11 rounded-xl bg-primary text-white text-lg font-bold flex items-center justify-center shrink-0">{l.n}</span>
                        <div>
                          <div className="font-bold leading-tight">{l.name}</div>
                          <div className="text-xs text-muted-foreground tabular-nums">{l.range}</div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-muted-foreground leading-relaxed">{l.what}</p>
                        <div className="mt-3 text-sm">
                          <span className="font-semibold text-primary">Fokus: </span>
                          <span className="text-muted-foreground">{l.focus}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* FÜR WEN - TABS */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Passt das zu uns?</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Für wen sich das Assessment lohnt</h2>
                <p className="text-lg text-muted-foreground">Wählen Sie Ihre Branche, wir sagen Ihnen ehrlich, wo der Hebel liegt.</p>
              </div>
              <Tabs defaultValue="kmu" className="w-full">
                <TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">
                  {audience.map((a) => {
                    const Icon = a.icon;
                    return (
                      <TabsTrigger key={a.value} value={a.value} className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border">
                        <Icon className="w-4 h-4 mr-1.5" />{a.label}
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
                {audience.map((a) => (
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

          {/* ABLAUF - TIMELINE */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Der Ablauf</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">In zwei Wochen vom Erstgespräch zum Plan</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Vier Schritte, transparent und ohne Überraschungen. Sie steigen jederzeit aus, wenn es nicht passt.</p>
              </div>
              <div className="max-w-3xl mx-auto">
                {steps.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.step} className="relative flex gap-5 pb-10 last:pb-0">
                      {i < steps.length - 1 && <span className="absolute left-7 top-14 bottom-0 w-px bg-border" aria-hidden />}
                      <div className="relative z-10 w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                        <Icon className="w-6 h-6" />
                      </div>
                      <Card className="border-2 flex-1">
                        <CardContent className="pt-5">
                          <div className="text-xs font-bold text-primary mb-1 tracking-wide">SCHRITT {s.step}, {s.time}</div>
                          <h3 className="text-lg font-bold mb-1">{s.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* WARUM WIR */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum die KI Kanzlei</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Drei Gründe, warum Sie uns den Blick reinwerfen lassen sollten</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Check, title: "Wir empfehlen, was Ihnen nützt", text: "Open Source, Cloud oder On-Premise: uns ist egal, was Sie nehmen, solange es für Sie das Beste ist. Keine Provisionen, keine versteckten Upsells." },
                  { icon: Shield, title: "Datenschutz zuerst, nicht zuletzt", text: "Jeder Vorschlag ist von Anfang an auf DSGVO und EU AI Act geprüft. So sparen Sie sich böse Überraschungen bei der Umsetzung." },
                  { icon: Building2, title: "Wir kennen den DACH-Alltag", text: "Österreichische, deutsche und Schweizer Betriebe ticken anders als das Silicon Valley, regulatorisch und kulturell. Das berücksichtigen wir." },
                ].map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <Card key={i} className="hover-lift border-2">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2"><Icon className="w-6 h-6 text-primary" /></div>
                        <CardTitle className="text-lg">{c.title}</CardTitle>
                      </CardHeader>
                      <CardContent><p className="text-muted-foreground leading-relaxed">{c.text}</p></CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Häufige Fragen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Was Kunden vor dem Assessment fragen</h2>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqs.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-2 border-border rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:bg-primary/5">
                    <AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-5">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* VERWANDTE LEISTUNGEN */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Nach dem Assessment</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Wie es danach weitergeht</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Der Report ist erst der Anfang. Das sind die drei Wege, die unsere Kunden danach am häufigsten einschlagen.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {related.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <a key={i} href={s.href} className="group block">
                      <Card className="h-full border-2 hover-lift transition-all group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/5">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary">
                              <Icon className="w-6 h-6 text-primary transition-colors group-hover:text-white" />
                            </div>
                            <Badge variant="secondary" className="rounded-full">{s.tag}</Badge>
                          </div>
                          <CardTitle className="text-xl">{s.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                          <span className="text-sm font-semibold text-primary">Mehr erfahren</span>
                        </CardContent>
                      </Card>
                    </a>
                  );
                })}
              </div>
            </div>
          </section>

          {/* KONTAKT / ANFRAGE */}
          <section id="contact" className="py-14 md:py-20 scroll-mt-20 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Jetzt anfragen</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Starten Sie mit dem Erstgespräch</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Hinterlassen Sie Ihre Kontaktdaten, wir melden uns für Ihr kostenloses Erstgespräch. Danach folgt auf Wunsch das KI Assessment Center.</p>
              </div>
              <AssessmentForm />
            </div>
          </section>
        </main>
        <FooterModern />
      </div>
    </>
  );
}
