import type { Metadata } from "next";
import Script from "next/script";
import { NavigationHome } from "@/components/NavigationHome";
import { FooterModern } from "@/components/FooterModern";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { HardHat, ShieldCheck, Server, MapPin, Search, FileText, FileSearch, Calculator, ClipboardList, PhoneCall, Box, Database, Check, X, Megaphone, Clock, Plug, AlertTriangle, Mic, TrendingUp, Brain } from "lucide-react";
import { serviceLogos } from "@/lib/serviceLogos";

export const metadata: Metadata = {
  title: "KI für Bauunternehmen & Baugewerbe",
  description:
    "KI für Bauunternehmen: Ausschreibungen und Leistungsverzeichnisse per KI-Wissensdatenbank durchsuchen, Kalkulation und Bautagebuch beschleunigen, Anrufe trotz Baustelle annehmen. DSGVO-konform mit EU-Hosting.",
  keywords:
    "KI Bau, KI Bauunternehmen, KI Baubranche, Bau Software KI, Ausschreibung KI, Leistungsverzeichnis KI, Baustelle KI, Kalkulation KI, Bautagebuch KI",
  alternates: { canonical: "https://ki-kanzlei.at/branchen/ki-loesungen-bau" },
};

const faqs = [
  {
    q: "Kann die KI unsere Ausschreibungen und Leistungsverzeichnisse durchsuchen?",
    a: "Ja, genau dafür ist die KI-Wissensdatenbank gebaut. Sie liest Ausschreibungen, Leistungsverzeichnisse und Pläne ein und beantwortet Fragen in natürlicher Sprache. Sie erhalten die passende Position samt Fundstelle, also Seite und Titel im Dokument, in Sekunden statt nach langem Blättern.",
  },
  {
    q: "Wie hilft KI konkret bei der Kalkulation und beim Angebot?",
    a: "Die KI bereitet Mengen, Positionen und wiederkehrende Textbausteine automatisch auf und gleicht sie mit Ihren Erfahrungswerten ab. So entsteht die Grundlage für Ihr Angebot deutlich schneller. Die fachliche und kaufmännische Freigabe bleibt selbstverständlich bei Ihnen.",
  },
  {
    q: "Lässt sich die Lösung an unsere bestehende Bau- und Kalkulationssoftware anbinden?",
    a: "In aller Regel ja. Wir binden die KI über moderne Schnittstellen so an, dass Daten direkt in Ihre vorhandenen Systeme fließen, ohne doppelte Erfassung. Die technische Machbarkeit prüfen wir individuell in einem kostenlosen Analysegespräch.",
  },
  {
    q: "Was passiert mit Anrufen, wenn die Bauleitung auf der Baustelle ist?",
    a: "Der Voicebot nimmt jeden Anruf entgegen, beantwortet Standardfragen und qualifiziert Anliegen vor. Dringende Fälle werden sofort weitergeleitet, alles andere landet strukturiert als Notiz im System. So bleibt Ihr Unternehmen erreichbar, auch wenn niemand im Büro sitzt.",
  },
  {
    q: "Kann die KI auch das Bautagebuch und die Mängeldokumentation übernehmen?",
    a: "Ja. Sie diktieren unterwegs, was auf der Baustelle passiert, und die KI strukturiert das Protokoll, ordnet es dem richtigen Projekt zu und bereitet die Mängeldokumentation auf. Das spart das mühsame Nachtragen am Abend und sorgt für eine lückenlose, nachvollziehbare Dokumentation.",
  },
  {
    q: "Was bietet die 3D-Visualisierung von Entwürfen?",
    a: "Aus Ihren Entwürfen und Vorgaben erzeugt die KI fotorealistische 3D-Visualisierungen und Varianten. Bauherren sehen das Ergebnis schon vor dem ersten Spatenstich, Entscheidungen fallen schneller und Rückfragen werden seltener.",
  },
  {
    q: "Wie werden unsere Projekt- und Kundendaten geschützt?",
    a: "Datenschutz hat bei uns höchste Priorität. Alle Lösungen laufen auf DSGVO-konformen Servern in Europa, die Verarbeitung erfolgt verschlüsselt und ein Auftragsverarbeitungsvertrag ist Teil jeder Umsetzung. Ihre Projekt- und Kundendaten bleiben jederzeit geschützt.",
  },
  {
    q: "Wie lange dauert die Einrichtung?",
    a: "In der Regel rund 2 Wochen. Nach einem kurzen Erstgespräch binden wir Ihre Dokumente an, konfigurieren Wissensbasis, Telefonannahme und Eskalationslogik, testen mit echten Projekten und gehen dann live, mit laufender Optimierung danach.",
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
  name: "KI Lösungen für Bauunternehmen",
  serviceType: "KI für Bauunternehmen, KI-Wissensdatenbank, Kalkulation, Bautagebuch",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description: "KI Lösungen für Bauunternehmen und das Baugewerbe im DACH-Raum: Ausschreibungen und Leistungsverzeichnisse per RAG durchsuchen, Kalkulation und Angebote beschleunigen, Bautagebuch und Telefonannahme automatisieren, alles DSGVO-konform mit EU-Hosting.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const problems = [
  "Ausschreibungen und Leistungsverzeichnisse durchsuchen kostet vor jedem Angebot Stunden",
  "Kalkulationen ziehen sich, weil Positionen und Preise mühsam zusammengesucht werden",
  "Anrufe und Anfragen bleiben liegen, weil die Bauleitung auf der Baustelle ist",
  "Bautagebuch und Mängeldokumentation werden abends per Hand nachgetragen",
  "Wissen zu Normen, Projekten und Lieferanten steckt in Köpfen und verstreuten Ordnern",
  "Sorge um Projekt- und Kundendaten bremst jede Automatisierung aus",
];

const solutions = [
  "Die KI-Wissensdatenbank durchsucht Ausschreibungen und Leistungsverzeichnisse und nennt Position samt Fundstelle",
  "Angebote und Kalkulationen entstehen schneller, weil Mengen und Positionen automatisch aufbereitet werden",
  "Der Voicebot nimmt jeden Anruf entgegen und qualifiziert Anfragen, auch wenn niemand im Büro ist",
  "Bautagebuch und Mängeldokumentation werden direkt aus dem Sprachprotokoll strukturiert erfasst",
  "Normen, Projektwissen und Lieferantendaten sind per Frage im Chat sofort abrufbar",
  "DSGVO-konform mit EU-Hosting, Ihre Projekt- und Kundendaten bleiben geschützt",
];

const useCases = [
  {
    value: "ausschreibung",
    label: "Ausschreibung",
    icon: FileSearch,
    head: "Ausschreibungen & Leistungsverzeichnisse durchsuchbar",
    text: "Die KI-Wissensdatenbank liest Ausschreibungen, Leistungsverzeichnisse und Pläne ein und beantwortet Ihre Fragen in natürlicher Sprache. Sie erhalten die passende Position samt Fundstelle, also Seite und Titel, in Sekunden statt nach langem Blättern.",
  },
  {
    value: "kalkulation",
    label: "Kalkulation",
    icon: Calculator,
    head: "Angebote & Kalkulation beschleunigen",
    text: "Die KI bereitet Mengen, Positionen und wiederkehrende Textbausteine automatisch auf und gleicht sie mit Ihren Erfahrungswerten ab. So entsteht die Grundlage für Ihr Angebot deutlich schneller, die kaufmännische Freigabe bleibt bei Ihnen.",
  },
  {
    value: "doku",
    label: "Bautagebuch",
    icon: ClipboardList,
    head: "Bautagebuch & Mängel-Doku automatisieren",
    text: "Diktieren Sie unterwegs, was auf der Baustelle passiert. Die KI strukturiert das Protokoll, ordnet es dem richtigen Projekt zu und bereitet die Mängeldokumentation auf, lückenlos und ohne mühsames Nachtragen am Abend.",
  },
  {
    value: "telefon",
    label: "Telefon",
    icon: PhoneCall,
    head: "Anfragen & Telefon trotz Baustelle",
    text: "Der Voicebot nimmt Anrufe entgegen, beantwortet Standardfragen und qualifiziert Anliegen vor, auch wenn die Bauleitung gerade unterwegs ist. Dringendes wird sofort weitergeleitet, alles andere landet strukturiert als Notiz im System.",
  },
  {
    value: "visualisierung",
    label: "3D-Visualisierung",
    icon: Box,
    head: "3D-Visualisierung von Entwürfen",
    text: "Aus Ihren Entwürfen und Vorgaben erzeugt die KI fotorealistische 3D-Visualisierungen und Varianten. Bauherren sehen das Ergebnis schon vor dem ersten Spatenstich, Entscheidungen fallen schneller und Rückfragen werden seltener.",
  },
  {
    value: "wissen",
    label: "Wissensbasis",
    icon: Database,
    head: "Bau-Wissensbasis (RAG)",
    text: "Greift in Sekunden auf Normen, abgeschlossene Projekte, Lieferantendaten und interne Standards zu. Ihr Team stellt einfach eine Frage im Chat und erhält sofort die korrekte Antwort mit Quelle, vollständig DSGVO-konform.",
  },
];

const features = [
  { icon: FileSearch, title: "Position samt Fundstelle in Sekunden", text: "Die KI-Wissensdatenbank durchsucht Ausschreibungen, Leistungsverzeichnisse und Pläne und liefert die richtige Position mit Seite und Titel, statt dass Ihr Team stundenlang blättert." },
  { icon: Calculator, title: "Schneller zum Angebot", text: "Mengen, Positionen und Textbausteine werden automatisch aufbereitet und mit Erfahrungswerten abgeglichen, sodass Ihre Kalkulation und Ihr Angebot spürbar schneller stehen." },
  { icon: ClipboardList, title: "Bautagebuch ohne Abendarbeit", text: "Diktiertes Baustellengeschehen wird automatisch strukturiert, dem Projekt zugeordnet und als Mängeldokumentation aufbereitet, lückenlos und nachvollziehbar." },
  { icon: PhoneCall, title: "Erreichbar trotz Baustelle", text: "Der Voicebot nimmt jeden Anruf an, qualifiziert Anfragen und leitet Dringendes weiter, auch wenn die Bauleitung gerade unterwegs ist." },
  { icon: ShieldCheck, title: "DSGVO und EU-Hosting", text: "Alle Daten werden verschlüsselt auf Servern in Europa verarbeitet, mit Auftragsverarbeitungsvertrag. Ihre Projekt- und Kundendaten bleiben geschützt." },
  { icon: Plug, title: "Direkt an Ihrer Bausoftware", text: "Über moderne Schnittstellen fließen Daten direkt in Ihre bestehende Bau- und Kalkulationssoftware, ganz ohne doppelte Erfassung." },
];

const stats = [
  ["Sek.", "bis zur Fundstelle im Leistungsverzeichnis"],
  ["24/7", "Anrufannahme trotz Baustelle"],
  ["bis 70%", "schneller kalkulieren und dokumentieren"],
  ["2 Wo.", "vom Erstgespräch bis Go-Live"],
];

const blick = [
  ["Einsatz", "Ausschreibung, Kalkulation, Doku"],
  ["Suche", "Position samt Fundstelle in Sekunden"],
  ["Erreichbarkeit", "24/7, auch unterwegs am Bau"],
  ["Anbindung", "bestehende Bau- und Kalkulationssoftware"],
  ["Datenschutz", "DSGVO, EU-Hosting, AVV"],
  ["Go-Live", "in rund 2 Wochen"],
];

const related = [
  { href: "/leistungen/ki-wissensdatenbank", icon: Brain, title: "KI Wissensdatenbank", desc: "Ausschreibungen, Leistungsverzeichnisse und Pläne per RAG durchsuchbar, mit Position und Fundstelle in Sekunden." },
  { href: "/leistungen/3d-planung-ki", icon: Box, title: "3D-Planung mit KI", desc: "Entwürfe und Varianten als fotorealistische 3D-Visualisierung, damit Bauherren das Ergebnis schon vor dem Spatenstich sehen." },
  { href: "/leistungen/voicebot", icon: PhoneCall, title: "Voicebot & KI-Telefonassistent", desc: "Nimmt Anrufe an und qualifiziert Anfragen, auch wenn die Bauleitung gerade auf der Baustelle ist." },
];

const search = {
  query: "Wo ist die Position für die Bodenplatte aus Stahlbeton?",
  results: [
    { pos: "Pos. 03.02.040, Stahlbeton-Bodenplatte C25/30", src: "Leistungsverzeichnis Neubau, Seite 14, Titel 03 Rohbau" },
    { pos: "Pos. 03.02.055, Bewehrung BSt 550, ca. 4,2 t", src: "Leistungsverzeichnis Neubau, Seite 15, Titel 03 Rohbau" },
  ],
};

export default function Page() {
  return (
    <>
      <Script id="faq-bau" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-bau" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <style>{`
        @keyframes bauPing { 0% { transform: scale(.9); opacity:.5; } 70%,100% { transform: scale(1.6); opacity:0; } }
        .bau-ping { animation: bauPing 2s ease-out infinite; }
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
                    KI für Bau & Baugewerbe
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    KI Lösungen für <span className="text-primary">Bauunternehmen</span> und das Baugewerbe
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Von der durchsuchbaren Ausschreibung über die schnellere Kalkulation bis zum automatisierten Bautagebuch: Wir machen Ihr Bauwissen in Sekunden abrufbar und nehmen Ihrem Team die Zettelwirtschaft ab, damit wieder Zeit fürs Bauen bleibt.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Analysegespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="tel:+436642314676">Direkt anrufen</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-primary" /> EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Live search card */}
                <Card className="relative border-2 shadow-xl shadow-primary/5">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                          <HardHat className="w-5 h-5 text-primary" />
                        </div>
                        <span className="absolute inset-0 rounded-full border-2 border-primary/40 bau-ping" aria-hidden />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">KI-Wissensdatenbank, Ausschreibung</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> Treffer in 0,8 s
                        </div>
                      </div>
                      <span className="ml-auto text-[10px] uppercase tracking-wider text-muted-foreground font-medium">EU-Server</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-3">
                    <div className="flex items-start gap-2 rounded-2xl bg-muted px-4 py-2.5">
                      <Search className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm leading-snug text-foreground">{search.query}</span>
                    </div>
                    {search.results.map((r, i) => (
                      <div key={i} className="rounded-2xl border border-border px-4 py-3">
                        <div className="flex items-start gap-2">
                          <FileText className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm font-medium leading-snug text-foreground">{r.pos}</span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1.5 pl-6">{r.src}</div>
                      </div>
                    ))}
                    <div className="flex items-center justify-between pt-2 border-t border-border text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary" /> Angebot vorbereitet</span>
                      <span className="flex items-center gap-1.5"><Calculator className="w-4 h-4 text-primary" /> in Kalkulation übernommen</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* STATS BAND */}
          <section className="pb-4">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-2 md:grid-cols-4 border-2 border-border rounded-2xl overflow-hidden bg-card">
                {stats.map(([v, l], i) => (
                  <div key={i} className="p-8 text-center border-b md:border-b-0 border-r last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r border-border">
                    <div className="text-4xl md:text-5xl font-bold text-primary">{v}</div>
                    <div className="text-sm text-muted-foreground mt-2">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WAS LEISTET KI IM BAUUNTERNEHMEN */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">KI im Bauunternehmen</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was KI in der Baubranche wirklich leistet</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Künstliche Intelligenz im Bauunternehmen ersetzt keine Fachleute. Sie entlastet alles rund um die Baustelle: die <strong className="text-foreground">Suche in Ausschreibungen und Leistungsverzeichnissen</strong>, die Kalkulation, die Beantwortung von Anfragen und die Dokumentation.</p>
                    <p>Im Zentrum steht die <strong className="text-foreground">KI-Wissensdatenbank</strong>. Sie liest Ihre Ausschreibungen, Leistungsverzeichnisse und Pläne ein und liefert auf Zuruf die passende Position samt Fundstelle, sodass Ihr Team die Grundlage fürs Angebot in Sekunden statt in Stunden hat.</p>
                    <p>Für Bauunternehmen im DACH-Raum ist dabei eines entscheidend: der <strong className="text-foreground">Datenschutz</strong>. Wir bauen jede Lösung DSGVO-konform, mit Datenhaltung in Europa und geschützten Projekt- und Kundendaten.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">KI-Wissensdatenbank</Badge>
                    <Badge variant="secondary" className="rounded-full">Kalkulation</Badge>
                    <Badge variant="secondary" className="rounded-full">Bautagebuch</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Auf einen Blick</CardTitle>
                    <CardDescription>Was KI in Ihrem Bauunternehmen übernimmt.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {blick.map(([label, value]) => (
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

          {/* PROBLEM ZU LÖSUNG */}
          <section className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-14">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Vom Problem zur Lösung</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Die Zettelwirtschaft am Bau, gelöst</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Gute Bauprojekte brauchen Fokus. Wir nehmen Ihrem Team die Sucherei in Dokumenten und die manuelle Doku ab, damit wieder Zeit fürs Bauen bleibt.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-border">
                  <CardHeader>
                    <CardTitle className="text-xl">Der Baualltag heute</CardTitle>
                    <CardDescription>Was Büro und Bauleitung täglich bremst.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {problems.map((p, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-muted flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-4 h-4 text-muted-foreground" />
                        </span>
                        <span className="text-muted-foreground leading-relaxed">{p}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                <Card className="border-2 border-primary/30 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="text-xl">Mit KI Kanzlei</CardTitle>
                    <CardDescription>So sieht der Bauablauf ab Woche 2 aus.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {solutions.map((s, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-primary" />
                        </span>
                        <span className="text-foreground leading-relaxed">{s}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* USE CASES TABS */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Lösungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Moderne KI-Lösungen für Ihr Bauunternehmen</h2>
                <p className="text-lg text-muted-foreground">Weniger Sucherei, weniger Papierkram, mehr Zeit fürs Bauen. Wählen Sie den Bereich, der Sie am meisten entlastet.</p>
              </div>
              <Tabs defaultValue="ausschreibung" className="w-full">
                <TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">
                  {useCases.map((u) => {
                    const Icon = u.icon;
                    return (
                      <TabsTrigger key={u.value} value={u.value} className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border">
                        <Icon className="w-4 h-4 mr-1.5" />{u.label}
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
                {useCases.map((u) => (
                  <TabsContent key={u.value} value={u.value}>
                    <Card className="border-2">
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-bold mb-2">{u.head}</h3>
                        <p className="text-muted-foreground leading-relaxed">{u.text}</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>

          {/* FEATURES BENTO */}
          <section className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-14">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum es funktioniert</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Gebaut für den Baualltag</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Sicher, anschlussfähig und spürbar entlastend, von der ersten Ausschreibung bis zum fertigen Angebot.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {features.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <Card key={i} className={`hover-lift border-2 ${i === 0 ? "lg:col-span-2 bg-primary/5 border-primary/20" : ""}`}>
                      <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{f.title}</CardTitle>
                      </CardHeader>
                      <CardContent><p className="text-muted-foreground leading-relaxed">{f.text}</p></CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen aus dem Baugewerbe</h2>
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

          {/* RELATED LEISTUNGEN */}
          <section className="section-spacing">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Mehr Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zum Bauunternehmen</h2>
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
