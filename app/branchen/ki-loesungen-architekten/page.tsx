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
import { Ruler, ShieldCheck, Server, MapPin, Search, FileText, BookOpen, Check, X, UserPlus, Image as ImageIcon, Database, Mail, Plug, TrendingUp, Brain, Network } from "lucide-react";
import { serviceLogos } from "@/lib/serviceLogos";

export const metadata: Metadata = {
  title: "KI für Architekten & Planungsbüros",
  description:
    "KI für Architekten und Planungsbüros: eine KI-Wissensdatenbank beantwortet Fragen zu Normen, Ausschreibungen und Projektakten mit Quelle. DSGVO-konform und projektsicher.",
  keywords:
    "KI Architekt, KI Planungsbüro, KI Ausschreibung, Architektur Visualisierung KI, Dokumentenmanagement KI, KI Bau, ÖNORM KI, Leistungsverzeichnis KI",
  alternates: { canonical: "https://ki-kanzlei.at/branchen/ki-loesungen-architekten" },
};

const faqs = [
  {
    q: "Woher weiß ich, dass die Antwort der KI wirklich stimmt?",
    a: "Unsere KI-Wissensdatenbank arbeitet nach dem RAG-Prinzip und antwortet ausschließlich auf Basis Ihrer hinterlegten Dokumente. Zu jeder Antwort liefert sie die Fundstelle mit, also das Dokument, die Norm und den Abschnitt. So können Sie jede Aussage in Sekunden gegenprüfen, statt sie blind zu übernehmen.",
  },
  {
    q: "Kann die KI auch ÖNORMEN und OIB-Richtlinien einbeziehen?",
    a: "Ja. Wir hinterlegen Ihre lizenzierten Normen, OIB-Richtlinien, Leistungsverzeichnisse und Ausschreibungsunterlagen in der Wissensdatenbank. Die KI durchsucht diese Quellen und nennt Ihnen die passende Bestimmung samt Fundstelle, sodass Sie nicht mehr ganze Dokumente durchblättern müssen.",
  },
  {
    q: "Bleiben unsere Projektdaten und Pläne vertraulich?",
    a: "Datenschutz steht bei uns an oberster Stelle. Alle Lösungen laufen auf DSGVO-konformen Servern in Europa, Ihre Projektakten und Pläne verlassen den geschützten Rahmen nicht und werden nicht für fremdes Training verwendet. Ein Auftragsverarbeitungsvertrag ist Teil jeder Umsetzung.",
  },
  {
    q: "Wie realistisch sind die KI-Renderings und Moodboards?",
    a: "Die KI-Bildgenerierung liefert in Minuten fotorealistische Stimmungsbilder, Material- und Fassadenvarianten sowie Moodboards für die Akquise. Sie ersetzt nicht das finale Wettbewerbsrendering, beschleunigt aber die frühe Entwurfs- und Präsentationsphase enorm und hilft, Bauherren ein Gefühl für die Idee zu geben.",
  },
  {
    q: "Hilft die Lösung bei der Erstellung von Leistungsverzeichnissen?",
    a: "Ja. Die KI greift auf vergangene Projekte, Standardpositionen und Ihre Vorlagen zu und erstellt strukturierte Entwürfe für Leistungsverzeichnisse und Angebote. Ihr Team prüft und finalisiert, statt jedes LV von Grund auf neu zu tippen. Das verkürzt die Angebotsphase deutlich.",
  },
  {
    q: "Lässt sich die KI an unser Projektmanagement anbinden?",
    a: "Über n8n verbinden wir die KI mit Ihren bestehenden Werkzeugen, etwa Projektmanagement, Cloud-Ablage und E-Mail. Neue Anfragen, Protokolle und Dokumente werden automatisch eingeordnet und an der richtigen Stelle abgelegt, ohne manuelle Doppelerfassung.",
  },
  {
    q: "Wie lange dauert die Einrichtung?",
    a: "In der Regel rund 2 bis 3 Wochen. Nach einem kurzen Erstgespräch indexieren wir Ihre Normen, Projektakten und Vorlagen, konfigurieren Zugriffsrechte und Quellenangaben, testen mit echten Fragestellungen aus Ihrem Büro und gehen dann live, mit laufender Optimierung danach.",
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
  name: "KI Lösungen für Architekten und Planungsbüros",
  serviceType: "KI für Architekten, KI-Wissensdatenbank, Ausschreibungsrecherche, Architektur-Visualisierung",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description: "KI Lösungen für Architekten und Planungsbüros im DACH-Raum: KI-Wissensdatenbank zu Normen, Ausschreibungen und Projektakten mit Quellenangabe, KI-Visualisierung, Lead-Qualifizierung und DSGVO-konforme Automatisierung.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const problems = [
  "Stundenlange Suche nach der richtigen ÖNORM oder OIB-Bestimmung in der Ausschreibung",
  "Wissen steckt in alten Projektakten und in den Köpfen einzelner Mitarbeiter",
  "Leistungsverzeichnisse und Angebote werden jedes Mal mühsam neu aufgebaut",
  "Frühe Entwurfsvisualisierungen für Bauherren kosten Tage statt Stunden",
  "Bauherren-Anfragen kommen unstrukturiert und binden teure Planungszeit",
  "Protokolle und E-Mails landen verstreut statt geordnet im Projekt",
];

const solutions = [
  "Die KI-Wissensdatenbank nennt Norm, Ausschreibungspunkt und Fundstelle in Sekunden",
  "Projektwissen aus allen Akten wird zentral durchsuchbar, unabhängig von Personen",
  "Leistungsverzeichnisse und Angebote entstehen als Entwurf aus Ihren Vorlagen",
  "KI-Renderings und Moodboards liefern Stimmungsbilder in Minuten",
  "Bauherren-Anfragen werden vorqualifiziert und sauber strukturiert übergeben",
  "Protokolle und E-Mails werden automatisch eingeordnet und im Projekt abgelegt",
];

const useCases = [
  {
    value: "wissen",
    label: "Wissensdatenbank",
    icon: Database,
    head: "KI-Wissensdatenbank für Normen und Ausschreibungen (RAG)",
    text: "Stellen Sie eine Frage zu einer ÖNORM, OIB-Richtlinie, Ausschreibung oder einem Leistungsverzeichnis und erhalten Sie in Sekunden die präzise Antwort, immer mit Quelle und Fundstelle. Die KI durchsucht Ihre Normen und Projektakten, sodass niemand mehr ganze Dokumente durchblättern muss.",
  },
  {
    value: "visualisierung",
    label: "Visualisierung",
    icon: ImageIcon,
    head: "KI-Visualisierung, Renderings und Moodboards",
    text: "Erzeugen Sie in Minuten fotorealistische Stimmungsbilder, Fassaden- und Materialvarianten sowie Moodboards für die Akquise. So vermitteln Sie Bauherren früh ein Gefühl für den Entwurf, lange bevor das finale Wettbewerbsrendering steht.",
  },
  {
    value: "leads",
    label: "Lead-Qualifizierung",
    icon: UserPlus,
    head: "Lead-Qualifizierung von Bauherren-Anfragen",
    text: "Die KI nimmt Anfragen von Bauherren entgegen, fragt Budget, Projektart, Standort und Zeithorizont strukturiert ab und übergibt nur qualifizierte Leads an Ihr Büro. So fließt teure Planungszeit nur in echte Projekte.",
  },
  {
    value: "angebote",
    label: "LV & Angebote",
    icon: FileText,
    head: "Angebots- und LV-Erstellung beschleunigen",
    text: "Die KI greift auf vergangene Projekte, Standardpositionen und Ihre Vorlagen zu und erstellt strukturierte Entwürfe für Leistungsverzeichnisse und Angebote. Ihr Team prüft und finalisiert, statt jedes LV von Grund auf neu zu tippen.",
  },
  {
    value: "protokolle",
    label: "Protokolle",
    icon: Mail,
    head: "Protokoll- und E-Mail-Automatisierung",
    text: "Aus Besprechungsnotizen entstehen saubere Protokolle, E-Mail-Anfragen werden vorsortiert und Antwortentwürfe vorbereitet. Alles wird automatisch dem richtigen Projekt zugeordnet, sodass nichts mehr verloren geht.",
  },
  {
    value: "anbindung",
    label: "Anbindung",
    icon: Network,
    head: "n8n-Anbindung an Ihr Projektmanagement",
    text: "Über n8n verbinden wir die KI mit Projektmanagement, Cloud-Ablage und E-Mail. Dokumente, Aufgaben und Termine wandern automatisch an die richtige Stelle, ohne manuelle Doppelerfassung und über Werkzeuggrenzen hinweg.",
  },
];

const features = [
  { icon: Search, title: "Antworten mit Quelle", text: "Die KI-Wissensdatenbank antwortet auf Basis Ihrer Normen und Projektakten und nennt zu jeder Aussage Dokument, Norm und Fundstelle. So prüfen Sie jede Antwort in Sekunden gegen, statt sie blind zu übernehmen." },
  { icon: BookOpen, title: "ÖNORM und OIB im Zugriff", text: "Lizenzierte Normen, OIB-Richtlinien und Ausschreibungsunterlagen werden durchsuchbar. Statt zu blättern fragen Sie einfach und erhalten die passende Bestimmung." },
  { icon: ImageIcon, title: "Renderings in Minuten", text: "Fotorealistische Stimmungsbilder, Material- und Fassadenvarianten sowie Moodboards entstehen in Minuten und beschleunigen die frühe Entwurfsphase." },
  { icon: Plug, title: "An Ihr Projektmanagement angebunden", text: "Über n8n fließen Dokumente, Anfragen und Protokolle automatisch in Ihre bestehenden Werkzeuge, ganz ohne doppelte Erfassung." },
  { icon: ShieldCheck, title: "DSGVO und EU-Hosting", text: "Alle Projektdaten und Pläne werden verschlüsselt auf Servern in Europa verarbeitet, mit Auftragsverarbeitungsvertrag und ohne fremdes Training." },
  { icon: TrendingUp, title: "Mehr Zeit fürs Planen", text: "Büros sparen durch Recherche, Visualisierung und Automatisierung typischerweise viele Stunden pro Woche, die zurück in die eigentliche Planung fließen." },
];

const stats = [
  ["10x", "schnellere Normen- und LV-Recherche"],
  ["Sek.", "bis zur Antwort mit Fundstelle"],
  ["Min.", "für erste Renderings statt Tage"],
  ["2-3 Wo.", "vom Erstgespräch bis Go-Live"],
];

const blick = [
  ["Kern", "Wissensdatenbank mit Quelle"],
  ["Quellen", "ÖNORM, OIB, Ausschreibungen, Akten"],
  ["Visualisierung", "Renderings und Moodboards"],
  ["Anbindung", "Projektmanagement via n8n"],
  ["Datenschutz", "DSGVO, EU-Hosting, AVV"],
  ["Go-Live", "in 2 bis 3 Wochen"],
];

const related = [
  { href: "/leistungen/ki-wissensdatenbank", icon: Brain, title: "KI Wissensdatenbank", desc: "Normen, Ausschreibungen, Leistungsverzeichnisse und Projektakten sekundenschnell abrufbar, per RAG und immer mit Fundstelle." },
  { href: "/leistungen/ki-bildgenerator", icon: ImageIcon, title: "KI Bildgenerator", desc: "Fotorealistische Renderings, Material- und Fassadenvarianten sowie Moodboards für Entwurf und Akquise in Minuten." },
  { href: "/leistungen/n8n-automatisierung", icon: Network, title: "n8n Automatisierung", desc: "Verbindet Wissensdatenbank, Projektmanagement und E-Mail automatisch, sodass Dokumente und Aufgaben am richtigen Ort landen." },
];

const transcript = [
  { who: "Planer", text: "Welche Brüstungshöhe schreibt die OIB-Richtlinie 4 für absturzgefährdete Stellen vor?" },
  { who: "Wissensdatenbank", text: "Ab einer Absturzhöhe über 12 m sind mindestens 1,10 m gefordert, darunter 1,00 m." },
  { who: "Planer", text: "Und woher stammt das?" },
  { who: "Wissensdatenbank", text: "Quelle: OIB-Richtlinie 4, Abschnitt 4.2 (Fundstelle im Projektordner verlinkt)." },
];

export default function Page() {
  return (
    <>
      <Script id="faq-architekten" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-architekten" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <style>{`
        @keyframes architektenPing { 0% { transform: scale(.9); opacity:.5; } 70%,100% { transform: scale(1.6); opacity:0; } }
        .architekten-ping { animation: architektenPing 2s ease-out infinite; }
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
                    KI für Architekten & Planungsbüros
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    KI Lösungen für <span className="text-primary">Architekten</span> und Planungsbüros
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Von der KI-Wissensdatenbank, die Fragen zu Normen, Ausschreibungen und Projektakten mit Quelle beantwortet, bis zur Lead-Qualifizierung von Bauherren: Wir nehmen Ihrem Büro die Recherche ab und schaffen wieder Zeit fürs Planen.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Analysegespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#leistungen">Lösungen ansehen</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-primary" /> EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Wissensdatenbank query card */}
                <Card className="relative border-2 shadow-xl shadow-primary/5">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                          <Search className="w-5 h-5 text-primary" />
                        </div>
                        <span className="absolute inset-0 rounded-full border-2 border-primary/40 architekten-ping" aria-hidden />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">KI-Wissensdatenbank Planungsbüro</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> Antwort mit Quelle, 0,8 s
                        </div>
                      </div>
                      <span className="ml-auto text-[10px] uppercase tracking-wider text-muted-foreground font-medium">EU-Server</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-3">
                    {transcript.map((t, i) => (
                      <div key={i} className={t.who === "Wissensdatenbank" ? "flex justify-end" : "flex justify-start"}>
                        <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-snug ${t.who === "Wissensdatenbank" ? "bg-primary text-white rounded-br-sm" : "bg-muted text-foreground rounded-bl-sm"}`}>
                          {t.text}
                        </div>
                      </div>
                    ))}
                    <div className="flex items-center justify-between pt-2 border-t border-border text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5"><FileText className="w-4 h-4 text-primary" /> Fundstelle belegt</span>
                      <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4 text-primary" /> aus Norm zitiert</span>
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

          {/* WAS LEISTET KI IM PLANUNGSBÜRO */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">KI im Planungsbüro</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was KI im Architekturbüro wirklich leistet</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Künstliche Intelligenz im Planungsbüro bedeutet nicht, das Entwerfen zu automatisieren. Sie entlastet alles drumherum: die <strong className="text-foreground">Recherche in Normen und Ausschreibungen</strong>, die Visualisierung früher Ideen, die Erstellung von Leistungsverzeichnissen und die Projektkommunikation.</p>
                    <p>Im Zentrum steht die <strong className="text-foreground">KI-Wissensdatenbank</strong>. Sie beantwortet Fragen zu ÖNORMEN, OIB-Richtlinien, Ausschreibungen und Projektakten in Sekunden, immer mit Quelle und Fundstelle, sodass Ihr Team statt zu blättern wieder planen kann.</p>
                    <p>Für Büros im DACH-Raum ist dabei eines entscheidend: der <strong className="text-foreground">Datenschutz</strong>. Wir bauen jede Lösung DSGVO-konform, mit Datenhaltung in Europa und ohne fremdes Training mit Ihren Projektdaten.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">KI-Wissensdatenbank</Badge>
                    <Badge variant="secondary" className="rounded-full">Ausschreibungsrecherche</Badge>
                    <Badge variant="secondary" className="rounded-full">KI-Visualisierung</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Auf einen Blick</CardTitle>
                    <CardDescription>Was KI in Ihrem Büro übernimmt.</CardDescription>
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Die Normen- und Aktenflut, gelöst</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Gute Planung braucht Fokus. Wir nehmen Ihrem Büro die endlose Suche in Normen, Ausschreibungen und alten Akten ab, damit wieder Zeit für den Entwurf bleibt.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-border">
                  <CardHeader>
                    <CardTitle className="text-xl">Der Büroalltag heute</CardTitle>
                    <CardDescription>Was Planung und Team täglich bremst.</CardDescription>
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
                    <CardDescription>So arbeitet Ihr Büro ab Woche 3.</CardDescription>
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
          <section id="leistungen" className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Lösungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Moderne KI-Lösungen für Ihr Planungsbüro</h2>
                <p className="text-lg text-muted-foreground">Weniger Suchen und Tippen, mehr Zeit für den Entwurf. Wählen Sie den Bereich, der Ihr Büro am meisten entlastet.</p>
              </div>
              <Tabs defaultValue="wissen" className="w-full">
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Gebaut für den Büroalltag</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Belegbar, anschlussfähig und spürbar entlastend, von der ersten Recherche bis zum fertigen Angebot.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen aus dem Planungsbüro</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zum Planungsbüro</h2>
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
