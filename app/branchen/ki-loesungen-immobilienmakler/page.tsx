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
import { Building2, ShieldCheck, Server, MapPin, MessageSquare, FileText, Images, Wand2, PhoneCall, Network, Repeat, Check, X, Target, Wallet, BadgeEuro, Clock, Plug, TrendingUp, Sparkles } from "lucide-react";
import { serviceLogos } from "@/lib/serviceLogos";

export const metadata: Metadata = {
  title: "KI für Immobilienmakler: Leads, Exposés & CRM",
  description:
    "KI für Immobilienmakler: Leads automatisch qualifizieren, Exposés in Minuten texten, Objektbilder per Home Staging aufwerten und das CRM anbinden. DSGVO-konform.",
  keywords:
    "KI Immobilien, KI Makler, KI Exposé, Immobilien Lead Generierung, KI für Makler, CRM Automatisierung, Home Staging KI, Immobilien Chatbot",
  alternates: { canonical: "https://ki-kanzlei.at/branchen/ki-loesungen-immobilienmakler" },
};

const faqs = [
  {
    q: "Über welche Kanäle qualifiziert die KI meine Leads?",
    a: "Die KI übernimmt Anfragen aus allen relevanten Quellen: dem Chat auf Ihrer Maklerwebsite, Portalanfragen von willhaben oder ImmoScout24 sowie eingehenden E-Mails. Sie antwortet sofort, stellt die richtigen Rückfragen und sammelt ein vollständiges Interessentenprofil, bevor der Lead bei Ihnen landet.",
  },
  {
    q: "Wie genau qualifiziert die KI einen Interessenten?",
    a: "Die KI fragt strukturiert die entscheidenden Kriterien ab: gewünschte Region, Zimmeranzahl, Budgetrahmen, Stand der Finanzierung, Eigennutzung oder Anlage sowie den Zeithorizont. Daraus berechnet sie einen Lead-Score, sodass Sie sofort erkennen, welche Anfrage sich lohnt und welche reiner Besichtigungstourismus ist.",
  },
  {
    q: "Wie entstehen die Exposé-Texte mit KI?",
    a: "Sie hinterlegen die Objektdaten, also Lage, Fläche, Zimmer, Baujahr, Ausstattung und Energiekennwerte. Die KI formuliert daraus in unter zwei Minuten einen marktgerechten, ansprechenden Exposé-Text inklusive Lagebeschreibung und Highlights. Sie prüfen den Entwurf und geben ihn mit einem Klick frei, der Stil bleibt dabei zu Ihrer Marke passend.",
  },
  {
    q: "Was leistet der KI-Bildgenerator beim Home Staging?",
    a: "Der KI-Bildgenerator hellt dunkle Objektfotos auf, begradigt Perspektiven und möbliert leere Räume virtuell, damit Interessenten sich das Wohnen besser vorstellen können. Virtuell eingerichtete Aufnahmen kennzeichnen wir klar als Visualisierung, damit Ihre Exposés rechtlich sauber bleiben.",
  },
  {
    q: "Lässt sich die KI an mein CRM wie onOffice oder Propstack anbinden?",
    a: "Ja. Über Automatisierungen mit n8n verbinden wir die KI mit gängigen Maklersystemen wie onOffice oder Propstack. Qualifizierte Leads, Notizen und Termine fließen automatisch in Ihr CRM, ganz ohne doppelte Erfassung. Die konkrete Anbindung prüfen wir individuell in einem kostenlosen Erstgespräch.",
  },
  {
    q: "Übernimmt die KI auch die Besichtigungstermine?",
    a: "Ja. Sobald ein Interessent qualifiziert ist, schlägt die KI passende Besichtigungsslots vor und bucht den Termin direkt in Ihren Kalender. Auf Wunsch übernimmt ein Voicebot über die Plattform fonio.ai die Terminvereinbarung sogar telefonisch, mit natürlicher Stimme und österreichischer Sprachfärbung.",
  },
  {
    q: "Ist die Verarbeitung der Interessentendaten DSGVO-konform?",
    a: "Datenschutz steht bei uns an oberster Stelle. Alle Lösungen laufen auf Servern in Europa, die Daten Ihrer Interessenten werden verschlüsselt verarbeitet und ein Auftragsverarbeitungsvertrag ist Teil jeder Umsetzung. So bleiben Sie als Makler bei jeder Anfrage auf der sicheren Seite.",
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
  name: "KI Lösungen für Immobilienmakler",
  serviceType: "KI für Immobilienmakler, Lead-Qualifizierung, Exposé-Automatisierung, CRM-Anbindung",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description: "KI Lösungen für Immobilienmakler im DACH-Raum: automatische Lead-Qualifizierung per Chat, KI-generierte Exposé-Texte, Home Staging mit dem KI-Bildgenerator und CRM-Anbindung an onOffice oder Propstack.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const problems = [
  "Portalanfragen kommen rund um die Uhr, aber niemand antwortet sofort, und der Lead ist beim Mitbewerber",
  "Stundenlanges Schreiben von Exposé-Texten für jedes einzelne Objekt",
  "Dunkle Handyfotos und leere Räume, die Interessenten eher abschrecken als überzeugen",
  "Unqualifizierte Anfragen ohne Budget und Finanzierung füllen den Terminkalender",
  "Besichtigungstermine werden per Telefon-Pingpong mühsam koordiniert",
  "Daten werden mehrfach erfasst, zwischen Portal, Postfach und Maklersoftware",
];

const solutions = [
  "Der KI-Chat antwortet auf jede Anfrage in Sekunden und qualifiziert den Lead sofort",
  "Marktgerechte Exposé-Texte entstehen automatisch aus den Objektdaten, fertig zur Freigabe",
  "Der KI-Bildgenerator wertet Objektfotos auf und möbliert leere Räume per Home Staging",
  "Budget, Region, Finanzierung und Zeithorizont werden abgefragt und zu einem Lead-Score verdichtet",
  "Qualifizierte Interessenten bekommen automatisch passende Besichtigungsslots vorgeschlagen",
  "Alle Daten fließen über n8n direkt in Ihr CRM wie onOffice oder Propstack",
];

const useCases = [
  {
    value: "leads",
    label: "Lead-Qualifizierung",
    icon: MessageSquare,
    head: "KI-Lead-Qualifizierung per Chat",
    text: "Der KI-Chat auf Ihrer Website und bei Portalanfragen antwortet sofort, fragt Region, Budget, Finanzierung und Zeithorizont ab und vergibt einen Lead-Score. So landen nur ernsthafte Kaufinteressenten mit vollständigem Profil in Ihrem Kalender.",
  },
  {
    value: "expose",
    label: "Exposé-Texte",
    icon: FileText,
    head: "Automatische Exposé-Texte",
    text: "Aus Lage, Fläche, Zimmern, Baujahr und Ausstattung formuliert die KI in unter zwei Minuten einen verkaufsstarken Exposé-Text inklusive Lagebeschreibung. Sie prüfen den Entwurf, passen den Ton an Ihre Marke an und geben ihn frei.",
  },
  {
    value: "bilder",
    label: "Home Staging",
    icon: Wand2,
    head: "Bildaufwertung & virtuelles Home Staging",
    text: "Der KI-Bildgenerator hellt Objektfotos auf, korrigiert Perspektiven und möbliert leere Räume virtuell. Interessenten sehen das Potenzial einer Immobilie sofort. Visualisierungen kennzeichnen wir klar und transparent als solche.",
  },
  {
    value: "termine",
    label: "Besichtigungen",
    icon: PhoneCall,
    head: "Besichtigungs-Terminierung per Voice",
    text: "Ein Voicebot über die Plattform fonio.ai vereinbart Besichtigungstermine telefonisch, schlägt freie Slots vor und bucht sie direkt in Ihren Kalender. Natürlich klingend, mit österreichischer Sprachfärbung und rund um die Uhr erreichbar.",
  },
  {
    value: "crm",
    label: "CRM-Sync",
    icon: Network,
    head: "CRM-Anbindung mit n8n",
    text: "Per Automatisierung mit n8n verbinden wir die KI mit Ihrer Maklersoftware wie onOffice oder Propstack. Neue Leads, Notizen und Termine synchronisieren sich automatisch, sodass Sie Daten nie wieder doppelt erfassen.",
  },
  {
    value: "nachfass",
    label: "Nachfass",
    icon: Repeat,
    head: "Automatisierte Nachfass-Sequenzen",
    text: "Die KI bleibt für Sie am Ball: Sie meldet sich nach Besichtigungen automatisch bei Interessenten, fragt das Feedback ab und reaktiviert ältere Leads in der Pipeline. So geht kein Abschluss verloren, nur weil das Nachfassen liegen blieb.",
  },
];

const features = [
  { icon: Target, title: "Leads automatisch qualifiziert", text: "Der KI-Chat beantwortet jede Anfrage in Sekunden, erfragt Budget, Region, Finanzierung und Zeithorizont und vergibt einen Lead-Score. Sie sehen sofort, welcher Kontakt heiß ist und welcher nicht." },
  { icon: Sparkles, title: "Exposé in Minuten statt Stunden", text: "Aus den Objektdaten entsteht automatisch ein marktgerechter, verkaufsstarker Exposé-Text, den Sie nur noch freigeben." },
  { icon: Images, title: "Bilder, die verkaufen", text: "Der KI-Bildgenerator wertet Objektfotos auf und richtet leere Räume per Home Staging virtuell ein, klar als Visualisierung gekennzeichnet." },
  { icon: Plug, title: "Direkt an Ihr CRM angebunden", text: "Über n8n fließen Leads, Termine und Notizen automatisch in onOffice, Propstack und Co., ganz ohne doppelte Erfassung." },
  { icon: ShieldCheck, title: "DSGVO und EU-Hosting", text: "Alle Interessentendaten werden verschlüsselt auf Servern in Europa verarbeitet, mit Auftragsverarbeitungsvertrag für jede Umsetzung." },
  { icon: TrendingUp, title: "Mehr Zeit für den Abschluss", text: "Die KI übernimmt Erstkontakt, Texterstellung und Terminierung. Sie konzentrieren sich auf Beratung, Besichtigung und Vertragsabschluss." },
];

const stats = [
  ["24/7", "Lead-Qualifizierung ohne Wartezeit"],
  ["< 2 Min.", "vom Objektdatensatz zum Exposé"],
  ["0", "verlorene Portal-Anfragen"],
  ["2 Wo.", "vom Erstgespräch bis Go-Live"],
];

const blick = [
  ["Einsatz", "Leads, Exposés, Bilder, CRM"],
  ["Lead-Qualifizierung", "Chat & Web, 24/7"],
  ["Exposé", "automatisch aus Objektdaten"],
  ["Visualisierung", "Home Staging & Bildaufwertung"],
  ["Anbindung", "onOffice, Propstack, CRM"],
  ["Datenschutz", "DSGVO, EU-Hosting, AVV"],
];

const related = [
  { href: "/leistungen/ki-bildgenerator", icon: Images, title: "KI-Bildgenerator", desc: "Objektfotos aufwerten und leere Räume per virtuellem Home Staging einrichten, klar als Visualisierung gekennzeichnet." },
  { href: "/leistungen/voicebot", icon: PhoneCall, title: "Voicebot & KI-Telefonassistent", desc: "Der Voicebot vereinbart Besichtigungstermine telefonisch und bucht freie Slots direkt in Ihren Kalender." },
  { href: "/leistungen/n8n-automatisierung", icon: Network, title: "n8n Automatisierung", desc: "Verbindet die KI mit Ihrem Maklersystem wie onOffice oder Propstack und synchronisiert Leads und Termine automatisch." },
];

const transcript = [
  { who: "KI-Berater", text: "Hallo! Suchen Sie zur Eigennutzung oder als Anlage?" },
  { who: "Interessent", text: "Eigennutzung, 3 Zimmer rund um Graz." },
  { who: "KI-Berater", text: "Verstanden. Wie hoch ist Ihr Budget und steht die Finanzierung schon?" },
  { who: "Interessent", text: "Bis 480.000, Finanzierung ist geklärt." },
];

const leadFields = [
  { icon: Wallet, label: "Budget", value: "bis 480.000 EUR" },
  { icon: MapPin, label: "Region", value: "Graz und Umgebung" },
  { icon: BadgeEuro, label: "Finanzierung", value: "vorab geklärt" },
  { icon: Clock, label: "Zeithorizont", value: "in 3 Monaten" },
];

export default function Page() {
  return (
    <>
      <Script id="faq-immobilienmakler" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-immobilienmakler" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <style>{`
        @keyframes immoPing { 0% { transform: scale(.9); opacity:.5; } 70%,100% { transform: scale(1.6); opacity:0; } }
        .immo-ping { animation: immoPing 2s ease-out infinite; }
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
                    KI für Immobilienmakler
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Mehr qualifizierte Leads für <span className="text-primary">Immobilienmakler</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Die KI qualifiziert Ihre Portal- und Website-Leads rund um die Uhr, schreibt marktgerechte Exposé-Texte aus Ihren Objektdaten und wertet Objektfotos per Home Staging auf. Sie konzentrieren sich auf Beratung und Abschluss.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Analysegespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#contact">Beispiel-Exposé anfordern</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-primary" /> EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Live lead qualification card */}
                <Card className="relative border-2 shadow-xl shadow-primary/5">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                          <MessageSquare className="w-5 h-5 text-primary" />
                        </div>
                        <span className="absolute inset-0 rounded-full border-2 border-primary/40 immo-ping" aria-hidden />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">KI-Lead-Qualifizierung</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> Neuer Lead, willhaben
                        </div>
                      </div>
                      <span className="ml-auto text-[10px] uppercase tracking-wider text-muted-foreground font-medium">EU-Server</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-3">
                    {transcript.map((t, i) => (
                      <div key={i} className={t.who === "KI-Berater" ? "flex justify-end" : "flex justify-start"}>
                        <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-snug ${t.who === "KI-Berater" ? "bg-primary text-white rounded-br-sm" : "bg-muted text-foreground rounded-bl-sm"}`}>
                          {t.text}
                        </div>
                      </div>
                    ))}
                    <div className="rounded-xl border border-border bg-muted/40 p-3 space-y-2">
                      {leadFields.map((f) => {
                        const Icon = f.icon;
                        return (
                          <div key={f.label} className="flex items-center gap-2 text-sm">
                            <Icon className="w-4 h-4 text-primary shrink-0" />
                            <span className="text-muted-foreground">{f.label}</span>
                            <span className="ml-auto font-medium text-foreground">{f.value}</span>
                            <Check className="w-4 h-4 text-primary shrink-0" />
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-border text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5"><Target className="w-4 h-4 text-primary" /> Lead-Score 92/100, heiß</span>
                      <span className="flex items-center gap-1.5"><Network className="w-4 h-4 text-primary" /> an CRM übergeben</span>
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
                    <p>Künstliche Intelligenz im Maklergeschäft ersetzt nicht Ihr Gespür für Menschen und Objekte. Sie übernimmt alles davor und daneben: die <strong className="text-foreground">Qualifizierung von Anfragen</strong>, das Schreiben von Exposés, die Aufbereitung der Objektbilder und die Pflege Ihres CRM.</p>
                    <p>Im Zentrum steht die <strong className="text-foreground">KI-Lead-Qualifizierung</strong>. Sie antwortet auf jede Portal- und Website-Anfrage in Sekunden, fragt Region, Budget, Finanzierung und Zeithorizont ab und vergibt einen Lead-Score, damit Sie sich nur noch um echte Kaufinteressenten kümmern.</p>
                    <p>Für Makler im DACH-Raum ist dabei eines entscheidend: der <strong className="text-foreground">Datenschutz</strong>. Wir bauen jede Lösung DSGVO-konform, mit Datenhaltung in Europa und Auftragsverarbeitungsvertrag für jede Umsetzung.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Lead-Qualifizierung</Badge>
                    <Badge variant="secondary" className="rounded-full">Exposé-Texte</Badge>
                    <Badge variant="secondary" className="rounded-full">Home Staging</Badge>
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Schluss mit kalten Leads und endlosen Exposés</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Vom ersten Klick bis zum Besichtigungstermin: Wir nehmen Ihrem Team die repetitive Arbeit ab, damit wieder Zeit für Beratung und Abschluss bleibt.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-border">
                  <CardHeader>
                    <CardTitle className="text-xl">Der Makleralltag heute</CardTitle>
                    <CardDescription>Was Akquise und Vermarktung täglich bremst.</CardDescription>
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
                    <CardDescription>So sieht Ihre Vermarktung ab Woche 2 aus.</CardDescription>
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
                <p className="text-lg text-muted-foreground">Von der ersten Anfrage bis zum Abschluss. Wählen Sie den Bereich, der Sie am meisten entlastet.</p>
              </div>
              <Tabs defaultValue="leads" className="w-full">
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
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Schnell, anschlussfähig und spürbar entlastend, von der ersten Anfrage bis zum gebuchten Besichtigungstermin.</p>
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
