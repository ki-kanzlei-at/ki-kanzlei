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
import { Factory, ShieldCheck, Server, MapPin, Camera, ScanLine, Gauge, BookOpen, FileText, LineChart, Mic, Check, X, Plug, AlertTriangle, TrendingUp, Network, Brain, PackageCheck } from "lucide-react";
import { serviceLogos } from "@/lib/serviceLogos";

export const metadata: Metadata = {
  title: "KI in der Fertigung & Industrie",
  description:
    "KI für Fertigung und Industrie: visuelle Qualitätskontrolle per Computer Vision, Predictive Maintenance und Werkerassistenz auf Zuruf. DSGVO-konform, on-premise möglich.",
  keywords:
    "KI Fertigung, KI Produktion, KI Industrie, Industrie 4.0 KI, Qualitätskontrolle KI, Predictive Maintenance, Machine Vision, KI Maschinenbau, Werkerassistenz KI",
  alternates: { canonical: "https://ki-kanzlei.at/branchen/ki-loesungen-industrie" },
};

const faqs = [
  {
    q: "Welche Defekte erkennt die visuelle Qualitätskontrolle?",
    a: "Die KI erkennt per Computer Vision typische Oberflächen- und Formfehler: Kratzer, Risse, Dellen, Lunker, fehlende Teile, falsche Montage, Verfärbungen oder Maßabweichungen. Sie prüft jedes Teil an der Linie statt nur Stichproben und markiert fehlerhafte Stücke automatisch als Ausschuss. Selten auftretende Fehlerbilder trainieren wir gezielt mit Ihren eigenen Beispielen nach.",
  },
  {
    q: "Müssen wir dafür unsere Produktionslinie umbauen?",
    a: "In aller Regel nicht. Für die Sichtprüfung genügt meist eine Industriekamera an der bestehenden Linie, die wir an die KI anbinden. Predictive Maintenance nutzt vorhandene Maschinen- und Sensordaten aus SPS, MES oder Ihrer Steuerung. Was technisch nötig ist, klären wir vorab in einem kostenlosen Analysegespräch direkt bei Ihnen im Werk.",
  },
  {
    q: "Wie funktioniert Predictive Maintenance konkret?",
    a: "Die KI wertet laufend Sensor- und Maschinendaten wie Vibration, Temperatur, Stromaufnahme und Laufzeiten aus und erkennt Verschleißmuster, lange bevor es zum Ausfall kommt. Sie warnt frühzeitig und schlägt ein Wartungsfenster vor, sodass Sie nach echtem Maschinenzustand planen statt nach starrem Intervall. Ungeplanter Stillstand der Linie sinkt dadurch spürbar.",
  },
  {
    q: "Was kann die Werkerassistenz beantworten?",
    a: "Die KI-Wissensdatenbank liefert Werkern auf Zuruf die richtige Antwort aus Ihrer Maschinen-Doku, aus Anleitungen, Wartungsplänen, Normen und Arbeitsanweisungen. Statt im Ordner oder PDF zu suchen, stellt der Werker einfach eine Frage und erhält in Sekunden die passende Stelle mit Quellenangabe. Das verkürzt Rüstzeiten und hilft besonders bei Einarbeitung und Schichtwechsel.",
  },
  {
    q: "Lässt sich die KI an unser MES oder ERP anbinden?",
    a: "In aller Regel ja. Wir binden die KI über moderne Schnittstellen und n8n so an, dass Prüfergebnisse, Wartungswarnungen und Auftragsdaten direkt in Ihr MES, ERP oder Ihre Steuerung fließen. Daten gehen dabei in beide Richtungen, ganz ohne doppelte Pflege. Die technische Machbarkeit prüfen wir individuell.",
  },
  {
    q: "Bleiben unsere Werks- und Produktionsdaten im Haus?",
    a: "Ja, auf Wunsch vollständig. Datenschutz steht bei uns an oberster Stelle. Alle Lösungen laufen DSGVO-konform auf Servern in Europa, ein Auftragsverarbeitungsvertrag ist Teil jeder Umsetzung. Für sensible Werksdaten betreiben wir die KI auch komplett on-premise in Ihrer eigenen Infrastruktur, sodass keine Produktionsdaten das Haus verlassen.",
  },
  {
    q: "Wie lange dauert die Einrichtung?",
    a: "In der Regel rund 2 bis 4 Wochen bis zum Pilotbetrieb. Nach einem kurzen Erstgespräch konfigurieren wir die Bilderkennung, die Wartungslogik oder die Wissensdatenbank, binden Kamera, Sensorik und Systeme an, testen mit echten Teilen und Daten aus Ihrer Produktion und gehen dann in den Pilot, mit laufender Optimierung danach.",
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
  name: "KI Lösungen für Industrie und Fertigung",
  serviceType: "KI für Fertigung, visuelle Qualitätskontrolle, Predictive Maintenance, Werkerassistenz",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description: "KI Lösungen für Industrie und Fertigung im DACH-Raum: visuelle Qualitätskontrolle per Computer Vision, Predictive Maintenance, Werkerassistenz per KI-Wissensdatenbank und DSGVO-konforme Anbindung an MES und ERP, auf Wunsch on-premise.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const problems = [
  "Defekte fallen erst beim Kunden auf, Reklamationen und Nacharbeit kosten Marge",
  "Die Sichtprüfung per Stichprobe übersieht Fehler und ermüdet das Personal",
  "Maschinen fallen ungeplant aus und legen die ganze Linie still",
  "Gewartet wird nach starrem Intervall statt nach echtem Maschinenzustand",
  "Werker suchen Maschinen-Doku, Anleitungen und Normen mühsam in Ordnern",
  "Auftrags- und Lieferdaten werden von Hand ins ERP getippt",
];

const solutions = [
  "Computer Vision prüft jedes Teil an der Linie und erkennt Defekte in Echtzeit",
  "Fehlerhafte Teile werden automatisch als Ausschuss markiert und protokolliert",
  "Predictive Maintenance erkennt Verschleiß früh und warnt vor dem Ausfall",
  "Die Wartung wird nach echtem Maschinenzustand geplant, nicht nach Kalender",
  "Die KI-Wissensdatenbank liefert Doku, Anleitungen und Normen auf Zuruf",
  "Auftragsdaten fließen automatisch ins MES und ERP, DSGVO-konform oder on-premise",
];

const useCases = [
  {
    value: "qualitaet",
    label: "Qualitätskontrolle",
    icon: Camera,
    head: "Visuelle Qualitätskontrolle per Computer Vision",
    text: "Eine Industriekamera prüft jedes Teil direkt an der Linie. Die KI erkennt Kratzer, Risse, fehlende Teile und Maßabweichungen in Echtzeit, markiert fehlerhafte Stücke automatisch als Ausschuss und protokolliert jeden Befund. So geht kein Defekt mehr an den Kunden, ganz ohne ermüdende Stichprobe.",
  },
  {
    value: "wartung",
    label: "Predictive Maintenance",
    icon: Gauge,
    head: "Vorausschauende Wartung statt ungeplantem Stillstand",
    text: "Die KI wertet Vibration, Temperatur, Stromaufnahme und Laufzeiten Ihrer Maschinen aus und erkennt Verschleiß, bevor es zum Ausfall kommt. Sie warnt frühzeitig und schlägt ein Wartungsfenster vor, sodass Sie nach echtem Zustand planen und teuren Stillstand der Linie vermeiden.",
  },
  {
    value: "werkerassistenz",
    label: "Werkerassistenz",
    icon: BookOpen,
    head: "Werkerassistenz per KI-Wissensdatenbank",
    text: "Maschinen-Doku, Anleitungen, Wartungspläne und Normen auf Zuruf: Statt im Ordner zu blättern, stellt der Werker eine Frage und erhält in Sekunden die passende Stelle mit Quellenangabe. Das verkürzt Rüst- und Einarbeitungszeiten und hilft besonders beim Schichtwechsel.",
  },
  {
    value: "dokumente",
    label: "Auftragsdaten",
    icon: FileText,
    head: "Dokumenten- und Auftragsautomatisierung",
    text: "Auftragsbestätigungen, Lieferscheine, Prüfprotokolle und Rechnungen werden per Computer Vision gelesen und strukturiert ins ERP gebucht. Die KI extrahiert Positionen, Mengen und Termine zuverlässig, statt sie fehleranfällig von Hand abzutippen.",
  },
  {
    value: "optimierung",
    label: "Produktion",
    icon: LineChart,
    head: "Produktionsoptimierung mit KI",
    text: "Die KI analysiert Durchlaufzeiten, Ausschussquoten und Maschinendaten, deckt Engpässe und Muster auf und liefert konkrete Stellhebel für mehr Output. So optimieren Sie Auslastung und Qualität auf Basis echter Produktionsdaten statt Bauchgefühl.",
  },
  {
    value: "voicebot",
    label: "Voicebot",
    icon: Mic,
    head: "Voicebot für Anrufe und Anfragen",
    text: "Ein KI-Telefonassistent nimmt Anrufe von Lieferanten und Kunden entgegen, gibt Auskunft zu Auftrags- und Lieferständen und leitet komplexe Fälle gezielt weiter. So bleibt die Leitung frei und Ihr Innendienst ungestört.",
  },
];

const features = [
  { icon: Camera, title: "Fehlererkennung an der Linie", text: "Computer Vision prüft jedes Teil in Echtzeit auf Kratzer, Risse, fehlende Teile und Maßabweichungen, markiert Ausschuss automatisch und protokolliert jeden Befund. 100 Prozent geprüft statt Stichprobe." },
  { icon: Gauge, title: "Predictive Maintenance", text: "Aus Vibration, Temperatur und Laufzeiten erkennt die KI Verschleiß früh und warnt vor dem Ausfall. Wartung nach echtem Maschinenzustand statt starrem Intervall senkt ungeplanten Stillstand." },
  { icon: BookOpen, title: "Werkerassistenz auf Zuruf", text: "Maschinen-Doku, Anleitungen und Normen sofort abrufbar. Der Werker fragt, die KI-Wissensdatenbank antwortet in Sekunden mit Quelle, das verkürzt Rüst- und Einarbeitungszeiten." },
  { icon: Plug, title: "Direkt an MES und ERP", text: "Prüfergebnisse, Wartungswarnungen und Auftragsdaten fließen über moderne Schnittstellen und n8n direkt in Ihre Systeme, ganz ohne doppelte Erfassung." },
  { icon: ShieldCheck, title: "DSGVO, EU-Hosting, on-premise", text: "Alle Daten werden verschlüsselt auf Servern in Europa verarbeitet, mit Auftragsverarbeitungsvertrag. Auf Wunsch läuft die KI komplett im Haus, sodass Werksdaten Ihre Infrastruktur nicht verlassen." },
  { icon: TrendingUp, title: "Weniger Ausschuss und Stillstand", text: "Fertiger senken mit KI typischerweise Ausschuss, Nacharbeit und ungeplanten Stillstand spürbar, das zahlt direkt auf Marge und Liefertreue ein." },
];

const stats = [
  ["100%", "geprüfte Teile statt Stichprobe"],
  ["24/7", "Inspektion ohne Ermüdung"],
  ["0", "übersehene Defekte am Band"],
  ["2-4 Wo.", "vom Erstgespräch bis Pilot"],
];

const blick = [
  ["Einsatz", "Qualität, Wartung, Werkerassistenz"],
  ["Prüfung", "100% per Computer Vision"],
  ["Wartung", "Ausfälle vorausschauend erkannt"],
  ["Anbindung", "MES, ERP und SPS via n8n"],
  ["Datenschutz", "DSGVO, EU-Hosting, on-premise"],
  ["Go-Live", "Pilot in rund 2 bis 4 Wochen"],
];

const related = [
  { href: "/leistungen/computer-vision", icon: Camera, title: "Computer Vision & Qualitätskontrolle", desc: "Erkennt Defekte an der Linie in Echtzeit, prüft jedes Teil statt Stichprobe und markiert Ausschuss automatisch." },
  { href: "/leistungen/ki-wissensdatenbank", icon: Brain, title: "KI Wissensdatenbank", desc: "Maschinen-Doku, Anleitungen und Normen auf Zuruf, per RAG und DSGVO-konform, auf Wunsch on-premise." },
  { href: "/leistungen/n8n-automatisierung", icon: Network, title: "n8n Automatisierung", desc: "Verbindet Prüfergebnisse, Wartungswarnungen und Auftragsdaten automatisch mit Ihrem MES und ERP." },
];

const inspect = [
  ["Prüfobjekt", "Gehäuse Typ B-12"],
  ["Befund", "Kratzer an Oberkante"],
  ["Position", "X 142 / Y 38"],
  ["Aktion", "als Ausschuss markiert"],
];

export default function Page() {
  return (
    <>
      <Script id="faq-industrie" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-industrie" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <style>{`
        @keyframes industrieScan { 0% { top: 0; opacity: .9; } 50% { opacity: .4; } 100% { top: 100%; opacity: .9; } }
        .industrie-scan { animation: industrieScan 2.4s ease-in-out infinite; }
        @keyframes industriePing { 0% { transform: scale(.8); opacity:.7; } 70%,100% { transform: scale(1.9); opacity:0; } }
        .industrie-ping { animation: industriePing 2s ease-out infinite; }
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
                    KI für Fertigung & Industrie
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    KI Lösungen für die <span className="text-primary">Fertigung</span> und Industrie
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Von der visuellen Qualitätskontrolle per Computer Vision über Predictive Maintenance bis zur Werkerassistenz auf Zuruf: Wir senken Ausschuss und Stillstand und machen Ihre Produktion robuster, DSGVO-konform und auf Wunsch komplett on-premise.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Analysegespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#use-cases">Lösungen ansehen</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-primary" /> EU-Hosting & on-premise</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Live quality inspection card */}
                <Card className="relative border-2 shadow-xl shadow-primary/5">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                        <Factory className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">Sichtprüfung Linie 3</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> Computer Vision aktiv
                        </div>
                      </div>
                      <span className="ml-auto text-[10px] uppercase tracking-wider text-muted-foreground font-medium">EU-Server</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-4">
                    <div className="relative overflow-hidden rounded-xl border-2 border-dashed border-primary/30 bg-muted/40 p-4">
                      <span className="absolute left-0 right-0 h-0.5 bg-primary/60 industrie-scan" aria-hidden />
                      <div className="flex items-center gap-2 mb-3">
                        <Camera className="w-4 h-4 text-primary" />
                        <span className="text-xs font-medium text-foreground">Teil wird geprüft</span>
                      </div>
                      <div className="relative h-20 rounded-lg bg-foreground/10 flex items-center justify-center">
                        <div className="w-2/3 h-10 rounded-md bg-foreground/15" />
                        <span className="absolute right-7 top-4">
                          <span className="block w-3 h-3 rounded-full bg-red-500" />
                          <span className="absolute inset-0 rounded-full border-2 border-red-500/50 industrie-ping" aria-hidden />
                        </span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      {inspect.map(([label, value]) => (
                        <div key={label} className="flex items-center justify-between py-1.5 text-sm">
                          <span className="text-muted-foreground">{label}</span>
                          <span className="font-medium text-foreground">{value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-border text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5"><AlertTriangle className="w-4 h-4 text-primary" /> Defekt erkannt</span>
                      <span className="flex items-center gap-1.5"><PackageCheck className="w-4 h-4 text-primary" /> als Ausschuss protokolliert</span>
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

          {/* WAS LEISTET KI IN DER FERTIGUNG */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">KI in der Produktion</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was KI in der Fertigung wirklich leistet</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Künstliche Intelligenz in der Fertigung bedeutet nicht, die Steuerung aus der Hand zu geben. Sie entlastet alles rund um die Linie: die <strong className="text-foreground">Qualitätsprüfung</strong>, die Instandhaltung, die Suche nach der richtigen Maschinen-Doku und die Erfassung der Auftragsdaten.</p>
                    <p>Im Zentrum steht die <strong className="text-foreground">visuelle Qualitätskontrolle per Computer Vision</strong>. Eine Kamera prüft jedes Teil an der Linie, erkennt Defekte in Echtzeit und markiert Ausschuss automatisch. Ergänzt um Predictive Maintenance erkennt die KI Verschleiß, bevor eine Maschine ausfällt.</p>
                    <p>Für Fertiger im DACH-Raum ist dabei eines entscheidend: der <strong className="text-foreground">Datenschutz</strong>. Wir bauen jede Lösung DSGVO-konform, mit Datenhaltung in Europa und auf Wunsch vollständig on-premise, sodass Ihre Werksdaten im Haus bleiben.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Qualitätskontrolle</Badge>
                    <Badge variant="secondary" className="rounded-full">Predictive Maintenance</Badge>
                    <Badge variant="secondary" className="rounded-full">Werkerassistenz</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Auf einen Blick</CardTitle>
                    <CardDescription>Was KI in Ihrer Produktion übernimmt.</CardDescription>
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Ausschuss und Stillstand, gelöst</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Wirtschaftliche Produktion braucht Fokus auf die Wertschöpfung. Wir nehmen Ihrem Team die ermüdende Prüfung und den ungeplanten Stillstand ab, damit die Linie läuft.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-border">
                  <CardHeader>
                    <CardTitle className="text-xl">Der Fertigungsalltag heute</CardTitle>
                    <CardDescription>Was Produktion und Instandhaltung täglich bremst.</CardDescription>
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
                    <CardDescription>So sieht die Linie ab dem Pilotbetrieb aus.</CardDescription>
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
          <section id="use-cases" className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Lösungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Moderne KI-Lösungen für Ihre Fertigung</h2>
                <p className="text-lg text-muted-foreground">Weniger Ausschuss, weniger Stillstand, mehr Zeit für Wertschöpfung. Wählen Sie den Bereich, der Sie am meisten entlastet.</p>
              </div>
              <Tabs defaultValue="qualitaet" className="w-full">
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Gebaut für den Fertigungsalltag</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Robust, anschlussfähig und spürbar entlastend, vom ersten geprüften Teil bis zur vorausschauend gewarteten Maschine.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen aus der Fertigung</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zur Fertigung</h2>
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
