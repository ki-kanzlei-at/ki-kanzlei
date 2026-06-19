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
import { Umbrella, ShieldCheck, Server, MapPin, Check, X, FileWarning, ClipboardCheck, Database, MessageSquare, Repeat, Phone, FileSearch, Brain, Network, Plug, TrendingUp } from "lucide-react";
import { serviceLogos } from "@/lib/serviceLogos";

export const metadata: Metadata = {
  title: "KI für Versicherungsmakler: Schaden & Verwaltung",
  description:
    "KI für Versicherungsmakler: Schadenmeldungen automatisch erfassen, Polizzen- und Produktwissen mit Quelle abrufen und die Maklerverwaltung entlasten. DSGVO-konform.",
  keywords:
    "KI Versicherung, KI Versicherungsmakler, KI Schadenmeldung, Maklerverwaltung KI, Polizzen-Analyse, KI Finanzberatung, Versicherung Automatisierung, Schadensregulierung KI",
  alternates: { canonical: "https://ki-kanzlei.at/branchen/ki-loesungen-versicherungsmakler" },
};

const faqs = [
  {
    q: "Lässt sich die KI an unser Maklerverwaltungsprogramm anbinden?",
    a: "In aller Regel ja. Wir binden die KI über moderne Schnittstellen so an, dass Schäden, Anfragen und Kundendaten direkt in Ihr bestehendes Verwaltungssystem fließen, ganz ohne Doppelerfassung. Die technische Machbarkeit prüfen wir individuell in einem kostenlosen Analysegespräch.",
  },
  {
    q: "Wie erfasst die KI eine Schadenmeldung automatisch?",
    a: "Egal ob der Kunde den Schaden per Online-Formular, E-Mail oder telefonisch meldet: Die KI liest die relevanten Angaben aus, ordnet den Fall der richtigen Sparte zu, legt den Schadenakt an und weist ihn dem zuständigen Sachbearbeiter zu. Der Kunde erhält automatisch eine Eingangsbestätigung, Ihr Team behält die finale Kontrolle.",
  },
  {
    q: "Woher nimmt die KI die Antworten auf Produkt- und Deckungsfragen?",
    a: "Die Produkt-Wissensdatenbank arbeitet ausschließlich auf Basis Ihrer eigenen Unterlagen: Bedingungswerke, Tarifblätter, interne Leitfäden und die Polizzen der Versicherer. Jede Antwort wird mit einem Verweis auf die konkrete Quelle ausgegeben, sodass jede Auskunft belegbar und nachvollziehbar bleibt.",
  },
  {
    q: "Wie steht es um DSGVO und die sensiblen Kundendaten?",
    a: "Datenschutz steht an oberster Stelle. Alle Lösungen laufen auf DSGVO-konformen Servern in Europa, sensible Vertrags- und Kundendaten werden verschlüsselt verarbeitet, und jede Auskunft ist nachvollziehbar protokolliert. Ein Auftragsverarbeitungsvertrag ist Teil jeder Umsetzung.",
  },
  {
    q: "Kann die KI auch beim Cross-Selling und der Bestandspflege helfen?",
    a: "Ja. Über automatisierte Nachfass-Strecken erinnert die KI an offene Angebote und ablaufende Verträge und erkennt Cross-Selling-Anlässe im Bestand, etwa nach einem Umzug, einer Familiengründung oder einem Schadenfall. Passende Folgeangebote werden vorbereitet, die Beratung führen Sie persönlich.",
  },
  {
    q: "Übernimmt die KI auch telefonische Kundenanfragen?",
    a: "Auf Wunsch ja. Über unsere Voicebot-Plattform fonio.ai nimmt die KI telefonische Anfragen und einfache Schadenmeldungen entgegen, qualifiziert das Anliegen und leitet bei Bedarf an den richtigen Ansprechpartner weiter. Der Schwerpunkt im Maklerbüro liegt aber auf der Schaden- und Anfrage-Automatisierung.",
  },
  {
    q: "Wie lange dauert die Einrichtung?",
    a: "In der Regel rund 2 Wochen. Nach einem kurzen Erstgespräch konfigurieren wir die Schadenerfassung, befüllen die Wissensdatenbank mit Ihren Bedingungswerken, richten die Anbindung an Ihr Maklerverwaltungsprogramm ein, testen mit echten Fällen und gehen dann live, mit laufender Optimierung danach.",
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
  name: "KI Lösungen für Versicherungsmakler",
  serviceType: "KI für Versicherungsmakler, Schadenmeldung-Automatisierung, Maklerverwaltung",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description: "KI Lösungen für Versicherungsmakler und Finanzberater im DACH-Raum: automatisierte Schadenmeldung, Produkt- und Polizzen-Wissensdatenbank mit Quellenangabe, Anfrage-Automatisierung und Nachfass, DSGVO-konform mit EU-Hosting.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const problems = [
  "Schadenmeldungen kommen per Telefon, E-Mail und Formular und müssen mühsam von Hand erfasst werden",
  "Jede Deckungs- oder Polizzenfrage bedeutet Nachschlagen in den Bedingungswerken verschiedener Versicherer",
  "Wiederkehrende Anfragen zu Prämie, Deckung und Schadenstatus binden das gesamte Büro",
  "Nachfass bei offenen Angeboten und ablaufenden Verträgen bleibt im Tagesgeschäft liegen",
  "Cross-Selling-Potenzial im Bestand bleibt ungenutzt, weil schlicht die Zeit fehlt",
  "Daten werden doppelt erfasst, im Maklerverwaltungsprogramm und in Excel-Listen",
];

const solutions = [
  "Die KI erfasst jede Schadenmeldung automatisch, kategorisiert nach Sparte und ordnet sie dem richtigen Sachbearbeiter zu",
  "Die Produkt-Wissensdatenbank beantwortet Deckungsfragen in Sekunden, mit Quellenangabe aus dem Bedingungswerk",
  "Wiederkehrende Anfragen zu Prämie, Deckung und Schadenstatus beantwortet die KI rund um die Uhr",
  "Nachfass-Strecken erinnern automatisch an offene Angebote und ablaufende Verträge",
  "Die KI erkennt Cross-Selling-Anlässe im Bestand und bereitet passende Angebote vor",
  "Daten fließen über Schnittstellen direkt in Ihr Maklerverwaltungsprogramm, ganz ohne Doppelerfassung",
];

const useCases = [
  {
    value: "schaden",
    label: "Schadenannahme",
    icon: ClipboardCheck,
    head: "Automatisierte Schadenmeldung",
    text: "Der Kunde meldet einen Schaden per Formular, E-Mail oder Telefon. Die KI erfasst die Angaben, kategorisiert den Fall nach Sparte, legt den Schadenakt an und ordnet ihn dem zuständigen Sachbearbeiter zu, inklusive automatischer Eingangsbestätigung an den Kunden.",
  },
  {
    value: "wissen",
    label: "Wissensdatenbank",
    icon: Database,
    head: "Produkt- & Polizzen-Wissensdatenbank",
    text: "Stellen Sie jede Deckungs- oder Produktfrage im Chat und erhalten Sie in Sekunden eine belegte Antwort, mit Verweis auf die passende Stelle im Bedingungswerk des Versicherers. Schluss mit dem Blättern in unzähligen PDFs.",
  },
  {
    value: "anfragen",
    label: "Anfragen",
    icon: MessageSquare,
    head: "KI-Anfrage-Manager",
    text: "Beantwortet wiederkehrende Kundenanfragen zu Prämie, Deckung und Schadenstatus automatisch und erstellt passgenaue Antwortvorschläge zur schnellen Freigabe durch Ihr Team.",
  },
  {
    value: "nachfass",
    label: "Nachfass & Cross-Sell",
    icon: Repeat,
    head: "Nachfass und Cross-Selling",
    text: "Über n8n erinnert die KI automatisch an offene Angebote und ablaufende Verträge, erkennt Cross-Selling-Anlässe im Bestand und bereitet passende Folgeangebote vor. So bleibt kein Potenzial mehr liegen.",
  },
  {
    value: "telefon",
    label: "Telefon",
    icon: Phone,
    head: "Telefonische Anfragen rund um die Uhr",
    text: "Über die Voicebot-Plattform fonio.ai nimmt die KI telefonische Anfragen und einfache Schadenmeldungen entgegen, qualifiziert das Anliegen und leitet bei Bedarf an den richtigen Ansprechpartner im Büro weiter.",
  },
  {
    value: "polizzen",
    label: "Polizzen-Analyse",
    icon: FileSearch,
    head: "Polizzen-Analyse & Vergleich",
    text: "Die KI liest bestehende Polizzen aus, fasst Deckungen, Summen und Ausschlüsse strukturiert zusammen und unterstützt beim Deckungsvergleich verschiedener Anbieter, eine solide Grundlage für Ihr nächstes Beratungsgespräch.",
  },
];

const features = [
  { icon: ClipboardCheck, title: "Schadenmeldung vollautomatisch erfasst", text: "Egal ob per Formular, E-Mail oder Telefon: Die KI erfasst jede Schadenmeldung, kategorisiert sie nach Sparte und ordnet sie in unter einer Minute dem richtigen Sachbearbeiter zu, samt angelegtem Schadenakt." },
  { icon: Brain, title: "Antworten mit Quelle", text: "Die Produkt-Wissensdatenbank beantwortet Deckungs- und Produktfragen mit Verweis auf das jeweilige Bedingungswerk. So ist jede Auskunft belegbar und nachvollziehbar." },
  { icon: Plug, title: "Direkt am Maklerverwaltungsprogramm", text: "Schäden, Anfragen und Kundendaten fließen über Schnittstellen direkt in Ihr bestehendes Verwaltungssystem, ganz ohne doppelte Erfassung." },
  { icon: Repeat, title: "Nachfass & Cross-Selling", text: "Automatische Strecken erinnern an offene Angebote und ablaufende Verträge und heben ungenutztes Cross-Selling-Potenzial in Ihrem Bestand." },
  { icon: ShieldCheck, title: "DSGVO und EU-Hosting", text: "Sensible Kunden- und Vertragsdaten werden verschlüsselt auf Servern in Europa verarbeitet, mit Auftragsverarbeitungsvertrag und voller Nachvollziehbarkeit." },
  { icon: TrendingUp, title: "10 bis 15 Stunden Entlastung", text: "Maklerbüros sparen pro Woche typischerweise 10 bis 15 Stunden Verwaltungszeit, die wieder in Beratung und Neugeschäft fließt." },
];

const stats = [
  ["10-15h", "weniger Verwaltung pro Woche"],
  ["< 1 Min.", "von der Meldung zum Schadenakt"],
  ["24/7", "Anfragen und Schadenannahme"],
  ["2 Wo.", "vom Erstgespräch bis Go-Live"],
];

const blick = [
  ["Einsatz", "Schaden, Anfragen, Wissen"],
  ["Schadenannahme", "automatisch erfasst & zugeordnet"],
  ["Wissensbasis", "Polizzen & Bedingungen mit Quelle"],
  ["Anbindung", "Maklerverwaltungsprogramm"],
  ["Datenschutz", "DSGVO, EU-Hosting, AVV"],
  ["Go-Live", "in rund 2 Wochen"],
];

const related = [
  { href: "/leistungen/ki-wissensdatenbank", icon: Brain, title: "KI Wissensdatenbank", desc: "Polizzen, Bedingungswerke und Produktwissen sekundenschnell abrufbar, per RAG und stets mit Quellenangabe." },
  { href: "/leistungen/n8n-automatisierung", icon: Network, title: "n8n Automatisierung", desc: "Verbindet Schadenmeldung, Nachfass und Cross-Selling automatisch mit Ihrem Maklerverwaltungsprogramm." },
  { href: "/leistungen/voicebot", icon: Phone, title: "Voicebot & KI-Telefonassistent", desc: "Nimmt telefonische Anfragen und einfache Schadenmeldungen entgegen und leitet sie strukturiert weiter." },
];

const intake = [
  { label: "Schaden erfasst", value: "Leitungswasser" },
  { label: "Kategorisiert", value: "Sparte Eigenheim / Haushalt" },
  { label: "Zugeordnet", value: "Sachbearbeiterin Schaden" },
];

export default function Page() {
  return (
    <>
      <Script id="faq-versicherungsmakler" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-versicherungsmakler" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <style>{`
        @keyframes versicherungPing { 0% { transform: scale(.9); opacity:.5; } 70%,100% { transform: scale(1.6); opacity:0; } }
        .versicherung-ping { animation: versicherungPing 2s ease-out infinite; }
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
                    KI für Versicherungsmakler & Finanzberater
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    KI Lösungen für <span className="text-primary">Versicherungsmakler</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Von der automatisch erfassten Schadenmeldung bis zur Produkt-Wissensdatenbank, die jede Deckungsfrage mit Quelle beantwortet: Wir nehmen Ihrem Maklerbüro die Routine ab und schaffen wieder Zeit für Beratung und Neugeschäft.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Analysegespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="/leistungen/ki-wissensdatenbank">Produkt-Wissensdatenbank ansehen</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-primary" /> EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Claim intake card */}
                <Card className="relative border-2 shadow-xl shadow-primary/5">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                          <FileWarning className="w-5 h-5 text-primary" />
                        </div>
                        <span className="absolute inset-0 rounded-full border-2 border-primary/40 versicherung-ping" aria-hidden />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">Schadenmeldung-Eingang</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> Automatisch erfasst, 00:03
                        </div>
                      </div>
                      <span className="ml-auto text-[10px] uppercase tracking-wider text-muted-foreground font-medium">EU-Server</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-3">
                    <div className="flex justify-start">
                      <div className="max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-snug bg-muted text-foreground rounded-bl-sm">
                        Wasserschaden in der Küche, ein Rohr unter der Spüle ist gebrochen.
                      </div>
                    </div>
                    {intake.map((s, i) => (
                      <div key={i} className="flex items-center gap-3 rounded-xl border border-border px-3 py-2">
                        <span className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                          <Check className="w-4 h-4 text-primary" />
                        </span>
                        <span className="text-sm font-medium text-foreground">{s.label}</span>
                        <span className="ml-auto text-xs text-muted-foreground text-right">{s.value}</span>
                      </div>
                    ))}
                    <div className="flex items-center justify-between pt-2 border-t border-border text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5"><ClipboardCheck className="w-4 h-4 text-primary" /> Schadenakt angelegt</span>
                      <span className="flex items-center gap-1.5"><Plug className="w-4 h-4 text-primary" /> ins Maklersystem übertragen</span>
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

          {/* WAS LEISTET KI IM MAKLERBÜRO */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">KI im Maklerbüro</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was KI im Maklerbüro wirklich leistet</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Künstliche Intelligenz im Maklerbüro ersetzt nicht die Beratung. Sie übernimmt die <strong className="text-foreground">Routine rundherum</strong>: die Erfassung von Schadenmeldungen, die Beantwortung wiederkehrender Kundenanfragen und das Nachschlagen in Bedingungswerken.</p>
                    <p>Im Zentrum stehen zwei Bausteine. Die <strong className="text-foreground">automatisierte Schadenmeldung</strong> erfasst jeden eingehenden Schaden, kategorisiert ihn nach Sparte und leitet ihn an den richtigen Sachbearbeiter weiter. Die <strong className="text-foreground">Produkt-Wissensdatenbank</strong> beantwortet Deckungs- und Polizzenfragen in Sekunden, immer mit Verweis auf die Quelle.</p>
                    <p>Für Maklerbüros im DACH-Raum ist dabei der <strong className="text-foreground">Datenschutz</strong> entscheidend. Wir bauen jede Lösung DSGVO-konform, mit Datenhaltung in Europa und voller Nachvollziehbarkeit jeder Auskunft.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Schadenmeldung</Badge>
                    <Badge variant="secondary" className="rounded-full">Polizzen-Wissensdatenbank</Badge>
                    <Badge variant="secondary" className="rounded-full">Maklerverwaltung</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Auf einen Blick</CardTitle>
                    <CardDescription>Was KI in Ihrem Maklerbüro übernimmt.</CardDescription>
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Schadenflut und Zettelwirtschaft, gelöst</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Gute Beratung braucht Zeit. Wir nehmen Ihrem Büro die Routine bei Schaden, Anfragen und Recherche ab, damit der Fokus auf dem Kunden bleibt.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-border">
                  <CardHeader>
                    <CardTitle className="text-xl">Der Makleralltag heute</CardTitle>
                    <CardDescription>Was Büro und Beratung täglich bremst.</CardDescription>
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
                    <CardDescription>So arbeitet Ihr Büro ab Woche 2.</CardDescription>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Moderne KI-Lösungen für Ihr Maklerbüro</h2>
                <p className="text-lg text-muted-foreground">Weniger Verwaltung, mehr Beratung. Wählen Sie den Bereich, der Ihr Büro am meisten entlastet.</p>
              </div>
              <Tabs defaultValue="schaden" className="w-full">
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Gebaut für den Makleralltag</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Sicher, anschlussfähig und spürbar entlastend, von der eingehenden Schadenmeldung bis zum belegten Beratungsgespräch.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen aus dem Maklerbüro</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zum Maklerbüro</h2>
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
