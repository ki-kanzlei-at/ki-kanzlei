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
import { Zap, ShieldCheck, Server, Lock, Gauge, FileCheck, BookOpen, MessageSquare, Activity, Network, Plug, TrendingUp, Check, X, AlertTriangle, Brain, Camera } from "lucide-react";
import { serviceLogos } from "@/lib/serviceLogos";

export const metadata: Metadata = {
  title: "KI für Energieversorger & Energiewirtschaft",
  description:
    "KI für Energieversorger und Stadtwerke: Predictive Maintenance für Netze und Anlagen, automatisiertes ESG- und CSRD-Reporting und eine Wissensdatenbank für Vorschriften. KRITIS-sicher, on-premise und DSGVO-konform.",
  keywords:
    "KI Energie, KI Energieversorger, KI Energiewirtschaft, KI Stadtwerke, KI Netzbetreiber, Predictive Maintenance Energie, KRITIS KI, ESG Reporting KI, Smart Grid KI, EVU KI",
  alternates: { canonical: "https://ki-kanzlei.at/branchen/ki-loesungen-energie" },
};

const faqs = [
  {
    q: "Wie funktioniert Predictive Maintenance für unsere Netze und Anlagen?",
    a: "Die KI wertet laufend Sensor- und Betriebsdaten Ihrer Anlagen aus, etwa Temperatur, Last, Auslastung und Laufzeiten von Transformatoren, Schaltanlagen und Netzbetriebsmitteln, und erkennt Verschleißmuster, lange bevor es zum Ausfall kommt. Sie warnt frühzeitig und schlägt ein Wartungsfenster vor, sodass Sie nach echtem Anlagenzustand planen statt nach starrem Intervall. Ungeplanter Stillstand im Netz sinkt dadurch spürbar.",
  },
  {
    q: "Wir sind kritische Infrastruktur. Bleiben unsere Netz- und Kundendaten im Haus?",
    a: "Ja, auf Wunsch vollständig. Als Betreiber kritischer Infrastruktur brauchen Sie maximale Sicherheit, deshalb steht der Datenschutz bei uns an oberster Stelle. Alle Lösungen laufen DSGVO-konform auf Servern in Europa, ein Auftragsverarbeitungsvertrag ist Teil jeder Umsetzung. Für sensible Netz- und Kundendaten betreiben wir die KI auch komplett on-premise in Ihrer eigenen Infrastruktur, sodass keine Daten das Haus verlassen. KRITIS-Anforderungen berücksichtigen wir von Anfang an.",
  },
  {
    q: "Kann die KI unser ESG- und CSRD-Reporting übernehmen?",
    a: "Ja. Die KI sammelt Verbrauchs-, Emissions- und Betriebsdaten aus Ihren Systemen, gleicht sie ab und erstellt einen prüffähigen Entwurf für ESG- und CSRD-Berichte nach geltenden Vorgaben. Statt wochenlang Daten aus vielen Quellen zusammenzutragen, erhalten Sie eine nachvollziehbare Datenbasis und einen Berichtsentwurf, den Ihr Team final freigibt. Die fachliche Kontrolle bleibt jederzeit bei Ihnen.",
  },
  {
    q: "Lässt sich die KI an unsere Leit- und Abrechnungssysteme anbinden?",
    a: "In aller Regel ja. Wir binden die KI über moderne Schnittstellen und n8n so an, dass Wartungswarnungen, Messdaten und Vorgänge direkt in Ihre Systeme fließen, etwa SCADA, GIS, ERP und Zählerdatenmanagement. Daten gehen dabei in beide Richtungen, ganz ohne doppelte Pflege. Die technische Machbarkeit prüfen wir individuell in einem kostenlosen Analysegespräch.",
  },
  {
    q: "Was kann der Kundenservice- und Bürger-Chatbot beantworten?",
    a: "Der KI-Chatbot beantwortet Anfragen zu Zählerständen, Abschlägen, Tarifen, Anmeldungen und Störungen rund um die Uhr, in natürlicher Sprache und auf Basis Ihrer eigenen Inhalte. Komplexe oder sensible Fälle leitet er gezielt an Ihr Team weiter. So bleibt das Bürgertelefon erreichbar, auch außerhalb der Geschäftszeiten, und niemand hängt in der Warteschleife.",
  },
  {
    q: "Was bringt die Auswertung unserer Smart-Meter-Daten?",
    a: "Die KI wertet Smart-Meter- und Lastgangdaten aus, erkennt Muster und Anomalien und erstellt Verbrauchs- und Lastprognosen. So decken Sie Auffälligkeiten früh auf, verbessern die Netzplanung und nutzen vorhandene Messdaten für fundierte Entscheidungen statt nur für die Abrechnung. Die Verarbeitung erfolgt DSGVO-konform und auf Wunsch vollständig in Ihrer eigenen Infrastruktur.",
  },
  {
    q: "Wie hilft die Wissensdatenbank im Netzbetrieb?",
    a: "Technische Regelwerke, Normen, Anlagendoku und Arbeitsanweisungen werden auf Zuruf verfügbar. Statt im Ordner oder PDF zu suchen, stellt Ihr Team eine Frage und erhält in Sekunden die passende Stelle mit Quellenangabe. Das hilft besonders bei Störungen, im Bereitschaftsdienst und in der Einarbeitung und hält Ihr Wissen auch beim Personalwechsel im Haus.",
  },
  {
    q: "Wie lange dauert die Einrichtung?",
    a: "In der Regel rund 2 bis 4 Wochen bis zum Pilotbetrieb. Nach einem kurzen Erstgespräch konfigurieren wir die Wartungslogik, das Reporting oder die Wissensdatenbank, binden Sensorik und Systeme an, testen mit echten Daten aus Ihrem Betrieb und gehen dann in den Pilot, mit laufender Optimierung danach.",
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
  name: "KI Lösungen für Energieversorger",
  serviceType: "KI für Energieversorger, Predictive Maintenance, ESG-Reporting, KRITIS-Sicherheit",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description: "KI Lösungen für Energieversorger, Stadtwerke und Netzbetreiber im DACH-Raum: Predictive Maintenance für Netze und Anlagen, automatisiertes ESG- und CSRD-Reporting, Wissensdatenbank für Vorschriften sowie KRITIS-sichere und DSGVO-konforme Anbindung, auf Wunsch on-premise.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const problems = [
  "Anlagen und Netzbetriebsmittel fallen ungeplant aus und gefährden die Versorgung",
  "Gewartet wird nach starrem Intervall statt nach echtem Zustand der Anlage",
  "ESG- und CSRD-Berichte kosten Wochen mühsamer Datensammlung aus vielen Quellen",
  "Vorschriften, Normen und technische Doku sind über Ordner und Systeme verstreut",
  "Das Bürgertelefon ist überlastet, Anfragen zu Zählerstand und Störung stauen sich",
  "Smart-Meter-Daten liegen vor, werden aber kaum für Prognosen genutzt",
];

const solutions = [
  "Predictive Maintenance erkennt Verschleiß früh und warnt vor dem Ausfall",
  "Die Wartung wird nach echtem Anlagenzustand geplant, nicht nach Kalender",
  "ESG- und CSRD-Berichte entstehen automatisiert aus geprüften Datenquellen",
  "Die Wissensdatenbank liefert Vorschriften, Normen und Doku auf Zuruf",
  "Der KI-Chatbot beantwortet Bürger- und Kundenanfragen rund um die Uhr",
  "Smart-Meter-Daten werden ausgewertet, KRITIS-sicher und DSGVO-konform",
];

const useCases = [
  {
    value: "wartung",
    label: "Predictive Maintenance",
    icon: Gauge,
    head: "Predictive Maintenance für Netze und Anlagen",
    text: "Die KI wertet laufend Sensor- und Betriebsdaten Ihrer Transformatoren, Schaltanlagen und Netzbetriebsmittel aus, etwa Temperatur, Last und Laufzeiten, und erkennt Verschleiß, bevor es zum Ausfall kommt. Sie warnt frühzeitig und schlägt ein Wartungsfenster vor, sodass Sie nach echtem Zustand planen und ungeplanten Stillstand im Netz vermeiden.",
  },
  {
    value: "esg",
    label: "ESG-Reporting",
    icon: FileCheck,
    head: "ESG- und CSRD-Reporting automatisiert",
    text: "Die KI sammelt Verbrauchs-, Emissions- und Betriebsdaten aus Ihren Systemen, gleicht sie ab und erstellt den Entwurf für ESG- und CSRD-Berichte nach geltenden Vorgaben. Statt wochenlang Daten aus vielen Quellen zusammenzutragen, erhalten Sie eine nachvollziehbare Datenbasis und einen prüffähigen Berichtsentwurf zur Freigabe.",
  },
  {
    value: "wissen",
    label: "Wissensdatenbank",
    icon: BookOpen,
    head: "Wissensdatenbank für Vorschriften und Doku",
    text: "Technische Regelwerke, Normen, Anlagendoku und Arbeitsanweisungen auf Zuruf: Statt im Ordner zu blättern, stellt Ihr Team eine Frage und erhält in Sekunden die passende Stelle mit Quellenangabe. Das hilft im Netzbetrieb, bei Störungen und in der Einarbeitung und hält Ihr Wissen auch beim Personalwechsel im Haus.",
  },
  {
    value: "kundenservice",
    label: "Bürgerservice",
    icon: MessageSquare,
    head: "Kundenservice- und Bürger-Chatbot",
    text: "Ein KI-Chatbot beantwortet Anfragen zu Zählerständen, Abschlägen, Tarifen und Störungen rund um die Uhr, in natürlicher Sprache und auf Basis Ihrer eigenen Inhalte. Komplexe Fälle leitet er gezielt an Ihr Team weiter, sodass das Bürgertelefon entlastet wird und niemand in der Warteschleife hängt.",
  },
  {
    value: "smartmeter",
    label: "Smart Meter",
    icon: Activity,
    head: "Smart-Meter-Datenauswertung",
    text: "Die KI wertet Smart-Meter- und Lastgangdaten aus, erkennt Muster und Anomalien und erstellt Verbrauchs- und Lastprognosen. So decken Sie Auffälligkeiten früh auf, verbessern die Netzplanung und nutzen vorhandene Messdaten für fundierte Entscheidungen statt nur zur Abrechnung.",
  },
  {
    value: "anfragen",
    label: "Anfragen",
    icon: Network,
    head: "Anfrage- und Prozessautomatisierung",
    text: "Wiederkehrende Vorgänge wie An- und Ummeldungen, Zählerstandsmeldungen und Störungsmeldungen werden automatisch erfasst, geprüft und in Ihre Systeme gebucht. Per n8n verbinden wir SCADA, GIS, ERP und Zählerdatenmanagement, sodass Daten in beide Richtungen fließen, ganz ohne doppelte Pflege.",
  },
];

const features = [
  { icon: Gauge, title: "Predictive Maintenance für das Netz", text: "Aus Sensor- und Betriebsdaten von Transformatoren, Schaltanlagen und Netzbetriebsmitteln erkennt die KI Verschleiß früh und warnt vor dem Ausfall. Wartung nach echtem Zustand statt starrem Intervall sichert die Versorgung und senkt ungeplanten Stillstand." },
  { icon: FileCheck, title: "ESG- und CSRD-Reporting", text: "Die KI sammelt Verbrauchs-, Emissions- und Betriebsdaten, gleicht sie ab und erstellt prüffähige Berichtsentwürfe nach geltenden Vorgaben, statt wochenlang Daten aus vielen Quellen zusammenzutragen." },
  { icon: BookOpen, title: "Wissensdatenbank für Vorschriften", text: "Regelwerke, Normen und Anlagendoku auf Zuruf. Ihr Team fragt, die KI-Wissensdatenbank antwortet in Sekunden mit Quelle, das hilft im Netzbetrieb, bei Störungen und in der Einarbeitung." },
  { icon: Plug, title: "Direkt an SCADA, GIS und ERP", text: "Wartungswarnungen, Messdaten und Vorgänge fließen über moderne Schnittstellen und n8n direkt in Ihre Leit-, Netz- und Abrechnungssysteme, ganz ohne doppelte Erfassung." },
  { icon: Lock, title: "KRITIS-Sicherheit und on-premise", text: "Als kritische Infrastruktur brauchen Sie maximale Sicherheit. Alle Lösungen laufen DSGVO-konform auf Servern in Europa oder vollständig on-premise, sodass sensible Netz- und Kundendaten das Haus nicht verlassen." },
  { icon: TrendingUp, title: "Mehr Versorgungssicherheit", text: "Energieversorger senken mit KI ungeplante Ausfälle, beschleunigen Berichte und entlasten den Kundenservice spürbar, das zahlt direkt auf Versorgungssicherheit und Wirtschaftlichkeit ein." },
];

const stats = [
  ["24/7", "Überwachung von Netz und Anlagen"],
  ["0", "ungeplante Ausfälle als Ziel"],
  ["100%", "nachvollziehbare ESG-Datenbasis"],
  ["2-4 Wo.", "vom Erstgespräch bis Pilot"],
];

const blick = [
  ["Einsatz", "Netze, Anlagen, ESG, Doku"],
  ["Überwachung", "Predictive Maintenance 24/7"],
  ["Reporting", "ESG und CSRD automatisiert"],
  ["Anbindung", "SCADA, GIS, ERP via n8n"],
  ["Sicherheit", "KRITIS, DSGVO, on-premise"],
  ["Go-Live", "Pilot in rund 2 bis 4 Wochen"],
];

const related = [
  { href: "/leistungen/ki-wissensdatenbank", icon: Brain, title: "KI Wissensdatenbank", desc: "Vorschriften, Normen und technische Doku auf Zuruf, per RAG und DSGVO-konform, auf Wunsch on-premise." },
  { href: "/leistungen/computer-vision", icon: Camera, title: "Computer Vision & Inspektion", desc: "Erkennt Schäden an Masten, Leitungen und Anlagen automatisch aus Bild- und Drohnendaten statt per Sichtprüfung." },
  { href: "/leistungen/n8n-automatisierung", icon: Network, title: "n8n Automatisierung", desc: "Verbindet Wartungswarnungen, Messdaten und Vorgänge automatisch mit SCADA, GIS und ERP." },
];

const monitor = [
  ["Anlage", "Transformator T-2"],
  ["Befund", "Wicklungstemperatur steigt"],
  ["Prognose", "Ausfallrisiko in 9 Tagen"],
  ["Aktion", "Wartungsfenster vorgeschlagen"],
];

export default function Page() {
  return (
    <>
      <Script id="faq-energie" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-energie" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <style>{`
        @keyframes energiePing { 0% { transform: scale(.8); opacity:.7; } 70%,100% { transform: scale(1.9); opacity:0; } }
        .energie-ping { animation: energiePing 2s ease-out infinite; }
        @keyframes energiePulse { 0%,100% { opacity:.45; } 50% { opacity:1; } }
        .energie-pulse { animation: energiePulse 1.8s ease-in-out infinite; }
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
                    KI für Energieversorger & Stadtwerke
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    KI Lösungen für <span className="text-primary">Energieversorger</span> und Stadtwerke
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Von Predictive Maintenance für Netze und Anlagen über automatisiertes ESG- und CSRD-Reporting bis zur Wissensdatenbank für Vorschriften: Wir senken ungeplante Ausfälle und sichern die Versorgung, KRITIS-sicher und auf Wunsch komplett on-premise.
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
                    <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-primary" /> KRITIS-sicher</span>
                    <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-primary" /> EU-Hosting & on-premise</span>
                  </div>
                </div>

                {/* Live grid monitoring card */}
                <Card className="relative border-2 shadow-xl shadow-primary/5">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">Netzleitstand Umspannwerk Nord</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> Predictive Maintenance aktiv
                        </div>
                      </div>
                      <span className="ml-auto text-[10px] uppercase tracking-wider text-muted-foreground font-medium">EU-Server</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-4">
                    <div className="relative overflow-hidden rounded-xl border-2 border-dashed border-primary/30 bg-muted/40 p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Gauge className="w-4 h-4 text-primary" />
                        <span className="text-xs font-medium text-foreground">Anlagen im Netz</span>
                      </div>
                      <div className="relative h-20 rounded-lg bg-foreground/10 flex items-center justify-around px-4">
                        <span className="w-8 h-10 rounded-md bg-foreground/15" />
                        <span className="w-8 h-10 rounded-md bg-foreground/15" />
                        <span className="relative w-8 h-10 rounded-md bg-red-500/20 border border-red-500/40 energie-pulse">
                          <span className="absolute -top-1 -right-1 block w-3 h-3 rounded-full bg-red-500" />
                          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-red-500/50 energie-ping" aria-hidden />
                        </span>
                        <span className="w-8 h-10 rounded-md bg-foreground/15" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      {monitor.map(([label, value]) => (
                        <div key={label} className="flex items-center justify-between py-1.5 text-sm">
                          <span className="text-muted-foreground">{label}</span>
                          <span className="font-medium text-foreground">{value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-border text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5"><AlertTriangle className="w-4 h-4 text-primary" /> Ausfall vorhergesagt</span>
                      <span className="flex items-center gap-1.5"><FileCheck className="w-4 h-4 text-primary" /> Wartung eingeplant</span>
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

          {/* WAS LEISTET KI IN DER ENERGIEWIRTSCHAFT */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">KI in der Energiewirtschaft</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was KI in der Energiewirtschaft wirklich leistet</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Künstliche Intelligenz in der Energiewirtschaft bedeutet nicht, die Kontrolle über das Netz abzugeben. Sie entlastet alles rund um den Betrieb: die <strong className="text-foreground">Instandhaltung von Netzen und Anlagen</strong>, das ESG- und CSRD-Reporting, die Suche nach Vorschriften und technischer Doku und den Kontakt mit Kunden und Bürgern.</p>
                    <p>Im Zentrum steht die <strong className="text-foreground">Predictive Maintenance</strong>. Die KI wertet Sensor- und Betriebsdaten aus und erkennt Verschleiß, bevor eine Anlage ausfällt. Ergänzt um automatisiertes ESG-Reporting und eine Wissensdatenbank für Regelwerke wird aus verstreuten Daten ein verlässlicher Überblick.</p>
                    <p>Für Energieversorger im DACH-Raum ist dabei eines entscheidend: die <strong className="text-foreground">Sicherheit</strong>. Als Betreiber kritischer Infrastruktur (KRITIS) bauen wir jede Lösung DSGVO-konform, mit Datenhaltung in Europa und auf Wunsch vollständig on-premise, sodass Ihre Netz- und Kundendaten im Haus bleiben.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Predictive Maintenance</Badge>
                    <Badge variant="secondary" className="rounded-full">ESG-Reporting</Badge>
                    <Badge variant="secondary" className="rounded-full">KRITIS-Sicherheit</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Auf einen Blick</CardTitle>
                    <CardDescription>Was KI in Ihrem Versorgungsbetrieb übernimmt.</CardDescription>
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Ausfälle und Berichtsflut, gelöst</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Sichere Versorgung braucht den Fokus auf das Netz. Wir nehmen Ihrem Team den ungeplanten Stillstand und die mühsame Datensammlung ab, damit die Versorgung läuft.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-border">
                  <CardHeader>
                    <CardTitle className="text-xl">Der Versorger-Alltag heute</CardTitle>
                    <CardDescription>Was Betrieb und Verwaltung täglich bremst.</CardDescription>
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
                    <CardDescription>So sieht der Betrieb ab dem Pilotbetrieb aus.</CardDescription>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Moderne KI-Lösungen für Energieversorger</h2>
                <p className="text-lg text-muted-foreground">Weniger Ausfälle, weniger Papierkram, mehr Versorgungssicherheit. Wählen Sie den Bereich, der Sie am meisten entlastet.</p>
              </div>
              <Tabs defaultValue="wartung" className="w-full">
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Gebaut für den Versorger-Alltag</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Sicher, anschlussfähig und spürbar entlastend, von der vorausschauend gewarteten Anlage bis zum fertigen ESG-Bericht.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen aus der Energiewirtschaft</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zur Energiewirtschaft</h2>
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
