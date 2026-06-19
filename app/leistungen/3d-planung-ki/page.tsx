import type { Metadata } from "next";
import Script from "next/script";
import { NavigationHome } from "@/components/NavigationHome";
import { ModelLogoStrip } from "@/components/ModelLogoStrip";
import { FooterModern } from "@/components/FooterModern";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Check,
  X,
  Phone,
  Search,
  Rocket,
  TrendingUp,
  Boxes,
  Sofa,
  ImageIcon,
  Layers,
  Sparkles,
  Ruler,
  PencilRuler,
  Home,
  Eye,
  Wand2,
  Camera,
  Palette,
  LayoutGrid,
  Building2,
  ShoppingCart,
  Compass,
  Shield,
  Code2,
  FileImage,
  Scan,
} from "lucide-react";

export const metadata: Metadata = {
  title: "3D-Planung & Visualisierung mit KI",
  description:
    "3D-Planung und Visualisierung mit KI für Architektur, Innenarchitektur, Bau und Handel: aus Grundrissen, Skizzen und Fotos schnell 3D-Visualisierungen, Renderings, Moodboards, Einrichtungsvarianten und virtuelles Home Staging. EU AI Act konform und klar gekennzeichnet.",
  keywords:
    "3D Planung, CAD KI, Grundriss KI, Innenarchitektur KI, KI 3D, 3D Visualisierung KI, Home Staging KI, Rendering KI, Architektur Visualisierung, 3D Planung KI DACH, 3D Visualisierung KI Deutschland, KI Architektur Schweiz, Home Staging KI Österreich, Innenarchitektur KI DACH-Raum",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/3d-planung-ki" },
};

const faqs = [
  {
    q: "Was ist 3D-Planung mit KI?",
    a: "3D-Planung mit KI bezeichnet den Einsatz generativer Modelle, um aus Grundrissen, Skizzen oder einfachen Fotos schnell 3D-Visualisierungen, Renderings und Einrichtungsvarianten zu erzeugen. Die KI beschleunigt vor allem die frühen, gestalterischen Phasen: Sie liefert in Minuten erste Bildwelten, Moodboards und Varianten, die sonst Stunden manueller Arbeit kosten. Die tragfähige Fachplanung, Statik und Ausführung bleiben Sache der Architektin oder des Innenarchitekten.",
  },
  {
    q: "Ersetzt KI die Architektur- oder Fachplanung?",
    a: "Nein. KI ist ein Beschleuniger, kein Ersatz für die Fachplanung. Generierte Bilder und 3D-Ansichten sind hervorragend, um Ideen zu zeigen, Stimmungen zu treffen und Kundinnen mitzunehmen. Sie sind aber keine baurechtlich, statisch oder maßlich verbindlichen Planunterlagen. Verbindliche Pläne, Berechnungen und die Verantwortung dafür liegen weiterhin bei den planenden Fachleuten. Wir bauen die Werkzeuge so, dass dieser Unterschied an jeder Stelle klar bleibt.",
  },
  {
    q: "Welche Eingaben braucht die KI für eine Visualisierung?",
    a: "Je nach Ziel reicht sehr wenig: ein Grundriss als Bild oder PDF, eine Handskizze, ein Foto des leeren Raums oder eine kurze Textbeschreibung des gewünschten Stils. Für virtuelles Home Staging genügt oft ein einzelnes Foto pro Raum. Liegen CAD-Daten oder ein bestehendes 3D-Modell vor, lassen sich diese als Grundlage nutzen, damit Proportionen und Raumaufteilung erhalten bleiben.",
  },
  {
    q: "Wie schnell liegen erste Ergebnisse vor?",
    a: "Erste Visualisierungen entstehen in Minuten statt Tagen. Ein Moodboard oder mehrere Einrichtungsvarianten für einen Raum sind oft innerhalb einer Stunde fertig. Das macht KI besonders wertvoll im Erstgespräch und in der Akquise: Sie können Kundinnen sofort verschiedene Richtungen zeigen, statt auf ein externes Renderingbüro zu warten. Die finale, fotorealistische Ausarbeitung dauert je nach Anspruch entsprechend länger.",
  },
  {
    q: "Müssen KI-generierte Bilder gekennzeichnet werden?",
    a: "Ja. Nach EU AI Act müssen künstlich erzeugte oder bearbeitete Bild- und Videoinhalte klar als KI-generiert erkennbar sein. Wir richten Prozesse so ein, dass jede Visualisierung sauber gekennzeichnet wird, etwa in Angeboten, Exposés und Präsentationen, und dass nachvollziehbar bleibt, welche Darstellung ein Entwurf ist und welche eine verbindliche Planung. So nutzen Sie die Technik rechtssicher und transparent gegenüber Ihren Kundinnen.",
  },
  {
    q: "Was ist virtuelles Home Staging mit KI?",
    a: "Virtuelles Home Staging möbliert leere oder veraltete Räume digital. Aus dem Foto eines leeren Zimmers erzeugt die KI eine wohnlich eingerichtete Variante, passend zum Zielpublikum der Immobilie. Für Makler, Bauträger und den Möbel- und Einrichtungshandel ist das ein starker Hebel: Objekte wirken attraktiver, Interessenten können sich das Wohnen besser vorstellen, und das alles ohne echtes Aufstellen von Möbeln. Auch hier gilt die Kennzeichnungspflicht, damit Interessenten die Darstellung richtig einordnen.",
  },
  {
    q: "Wie wird das Ganze datenschutzkonform umgesetzt?",
    a: "Wir planen jede Lösung DSGVO-konform und prüfen, wo Bild- und Projektdaten verarbeitet werden. Auf Wunsch setzen wir auf EU-Hosting oder lokal betriebene Modelle, damit sensible Projektunterlagen das Haus nicht verlassen. Zusätzlich klären wir die Bild- und Nutzungsrechte an Vorlagen und Ergebnissen und dokumentieren den KI-Einsatz nach EU AI Act, inklusive Kennzeichnung der erzeugten Inhalte.",
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
  name: "3D-Planung & Visualisierung mit KI",
  serviceType: "KI 3D-Visualisierung & Rendering",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "3D-Planung und Visualisierung mit KI für Architektur, Innenarchitektur, Bau und Handel: aus Grundrissen, Skizzen und Fotos schnell 3D-Visualisierungen, Renderings, Moodboards, Einrichtungsvarianten und virtuelles Home Staging, EU AI Act konform.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const heroPhases = [
  { icon: FileImage, step: "01", label: "Eingabe erfassen", time: "Minuten", desc: "Grundriss, Skizze, Foto oder Stilbeschreibung als Ausgangspunkt." },
  { icon: Wand2, step: "02", label: "KI-Varianten erzeugen", time: "Minuten", desc: "Moodboards, Einrichtungsvarianten und erste 3D-Ansichten." },
  { icon: Eye, step: "03", label: "Auswahl & Feinschliff", time: "Stunden", desc: "Lieblingsrichtung schärfen, Renderings ausarbeiten, klar gekennzeichnet." },
  { icon: PencilRuler, step: "04", label: "Übergabe an Fachplanung", time: "laufend", desc: "Verbindliche Planung, Maße und Ausführung bei Ihren Fachleuten." },
];

const stats = [
  { value: "Minuten", label: "bis zur ersten Visualisierung statt Tagen" },
  { value: "5+", label: "Einrichtungsvarianten pro Raum auf Knopfdruck" },
  { value: "100%", label: "KI-Inhalte gekennzeichnet nach EU AI Act" },
  { value: "1 Foto", label: "genügt fürs virtuelle Home Staging" },
];

const services = [
  { icon: Boxes, title: "3D-Visualisierung aus Grundrissen", description: "Aus einem Grundriss als Bild oder PDF erzeugt die KI begehbar wirkende 3D-Ansichten und perspektivische Visualisierungen. Ideal, um aus einem Plan in Minuten eine anschauliche Raumwirkung zu zeigen, bevor das finale 3D-Modell steht." },
  { icon: Sofa, title: "Einrichtungsvarianten & Moodboards", description: "Mehrere Stilrichtungen für denselben Raum auf Knopfdruck, von skandinavisch bis industriell. Perfekt, um im Erstgespräch Geschmack und Budget der Kundin schnell einzukreisen." },
  { icon: ImageIcon, title: "Fotorealistische Renderings", description: "Aus Skizzen, Massenmodellen oder einfachen 3D-Szenen entstehen stimmungsvolle Renderings mit passendem Licht, Material und Atmosphäre für Präsentationen und Wettbewerbe." },
  { icon: Home, title: "Virtuelles Home Staging", description: "Leere oder veraltete Räume werden digital möbliert. Aus dem Foto eines leeren Zimmers wird eine wohnliche Variante, die Objekte in Exposés deutlich attraktiver macht." },
  { icon: Wand2, title: "Renovierungs- & Umbau-Vorschau", description: "Bestandsfotos werden in mögliche Sanierungs- oder Umbauzustände übersetzt. Kundinnen sehen vorab, wie eine neue Fassade, Küche oder Bodengestaltung wirken könnte." },
  { icon: Palette, title: "Material-, Farb- & Lichtstudien", description: "Schnelle Durchläufe verschiedener Materialien, Farbwelten und Lichtstimmungen, damit Entscheidungen über Oberflächen und Atmosphäre fundiert und sichtbar getroffen werden." },
];

const maturity = [
  { level: 1, fill: 1, title: "Klassische Visualisierung", desc: "Renderings werden manuell oder extern beauftragt, jede Variante kostet Zeit und Budget. Hier setzt der KI-Beschleuniger an." },
  { level: 2, fill: 2, title: "Erste KI-Experimente", desc: "Einzelne Tools werden ausprobiert, ohne festen Prozess, ohne Kennzeichnung und ohne saubere Rechte-Klärung." },
  { level: 3, fill: 3, title: "Eingespielter KI-Workflow", desc: "KI-Visualisierung ist fester Teil von Akquise und Entwurf, gekennzeichnet und sauber von der Fachplanung getrennt." },
  { level: 4, fill: 4, title: "Integriert & skaliert", desc: "Visualisierung, CAD und Marketing greifen ineinander, mit Governance, EU AI Act Dokumentation und EU-Hosting." },
];

const bigComparison = [
  { feature: "Time-to-Visual", agentur: "Tage bis Wochen pro Variante", inhouse: "Abhängig von freier Kapazität", stock: "Sofort, aber generisch und unspezifisch", kanzlei: "Erste Varianten in Minuten, auf Ihr Projekt bezogen" },
  { feature: "Varianten-Vielfalt", agentur: "Pro Variante teuer", inhouse: "Begrenzt durch Aufwand", stock: "Hoch, aber nicht Ihr Raum", kanzlei: "Viele Stile pro Raum auf Knopfdruck" },
  { feature: "Bezug zum echten Objekt", agentur: "Hoch", inhouse: "Hoch", stock: "Keiner", kanzlei: "Hoch, basierend auf Ihren Plänen und Fotos" },
  { feature: "EU AI Act Kennzeichnung", agentur: "Meist kein Thema", inhouse: "Oft ungeklärt", stock: "Nicht vorgesehen", kanzlei: "Standardmäßig gekennzeichnet und dokumentiert" },
  { feature: "Datenschutz & Hosting", agentur: "Unterschiedlich", inhouse: "Je nach IT-Setup", stock: "US-Plattformen üblich", kanzlei: "EU-Hosting und lokale Modelle möglich" },
  { feature: "Trennung Entwurf vs. Planung", agentur: "Klar, aber langsam", inhouse: "Klar", stock: "Nicht relevant", kanzlei: "Klar getrennt, KI bleibt Beschleuniger" },
];

const industries = [
  { value: "architektur", label: "Architektur", icon: Building2, head: "Architektur & Planungsbüros", text: "Schnelle Entwurfsvisualisierungen für Erstgespräche, Wettbewerbe und Bauherren-Präsentationen. Aus Skizze oder Grundriss entstehen in Minuten Stimmungsbilder, die Sie als Diskussionsgrundlage nutzen, während die verbindliche Planung in Ihren CAD-Werkzeugen entsteht." },
  { value: "innen", label: "Innenarchitektur", icon: Sofa, head: "Innenarchitektur & Interior Design", text: "Einrichtungsvarianten, Materialwelten und Lichtstimmungen auf Knopfdruck. Zeigen Sie Kundinnen mehrere Stilrichtungen für denselben Raum und treffen Sie Geschmack und Budget, bevor Sie in die detaillierte Ausarbeitung gehen." },
  { value: "bau", label: "Bau & Immobilien", icon: Compass, head: "Bauträger & Immobilien", text: "Visualisieren Sie Projekte früh, vermarkten Sie Einheiten vor Fertigstellung und zeigen Sie Sanierungspotenziale mit Vorher-Nachher-Ansichten. Virtuelles Home Staging macht leere Objekte in Exposés sofort attraktiver." },
  { value: "handel", label: "Handel", icon: ShoppingCart, head: "Möbel- & Einrichtungshandel", text: "Stellen Sie Produkte in realistische Wohnsituationen, erzeugen Sie Inszenierungen für Online-Shop und Kataloge und bieten Sie Kundinnen Raumplanungen mit Ihrem Sortiment, schnell und in vielen Varianten." },
];

const toolbox = [
  { icon: Sparkles, name: "Generative Bildmodelle", desc: "Moderne Diffusionsmodelle erzeugen aus Text, Skizze oder Foto hochwertige Visualisierungen, gesteuert über klare Vorgaben zu Stil, Material und Perspektive." },
  { icon: Ruler, name: "Grundriss- & CAD-Anbindung", desc: "Vorhandene Grundrisse, CAD-Daten und 3D-Modelle dienen als Grundlage, damit Proportionen und Raumaufteilung erhalten bleiben." },
  { icon: Scan, name: "Foto-zu-3D & Inpainting", desc: "Bestehende Fotos werden umgestaltet, möbliert oder renoviert. Einzelne Bereiche lassen sich gezielt austauschen, ohne den Raum neu aufzubauen." },
  { icon: Layers, name: "Varianten- & Batch-Erzeugung", desc: "Viele Stile, Farben und Layouts in einem Durchlauf, damit Sie aus einer breiten Auswahl die beste Richtung wählen." },
  { icon: Shield, name: "Kennzeichnung & Governance", desc: "Automatische Markierung KI-erzeugter Inhalte, EU AI Act Dokumentation und Klärung der Bild- und Nutzungsrechte." },
  { icon: LayoutGrid, name: "Integration in Ihren Workflow", desc: "Anbindung an Ihre Tools für Angebote, Exposés und Präsentationen, damit Visualisierungen ohne Medienbruch dort landen, wo Sie sie brauchen." },
];

const steps = [
  { step: "01", icon: Phone, title: "Kostenlose Erstanalyse", time: "30 Minuten", desc: "Wir lernen Ihr Büro oder Geschäft kennen: typische Projekte, aktuelle Visualisierungswege und wo der größte Zeitfresser liegt. Ohne Verpflichtung und ohne Verkaufsdruck." },
  { step: "02", icon: Search, title: "KI Assessment & Workflow", time: "Analyse & Konzept", desc: "Wir definieren die passenden Anwendungsfälle, klären Datenschutz, Bildrechte und Kennzeichnung nach EU AI Act und entwerfen einen Workflow, der KI sauber von der Fachplanung trennt." },
  { step: "03", icon: Rocket, title: "Pilot-Umsetzung", time: "2 bis 4 Wochen", desc: "Wir setzen die erste Lösung an einem echten Projekt um, etwa virtuelles Home Staging oder Einrichtungsvarianten, und zeigen den Effekt an konkreten Ergebnissen." },
  { step: "04", icon: TrendingUp, title: "Skalierung & Begleitung", time: "laufend", desc: "Nach dem Pilot bauen wir weitere Anwendungsfälle aus, schulen Ihr Team und stellen sicher, dass Qualität, Kennzeichnung und Datenschutz dauerhaft stimmen." },
];

const usps = [
  { icon: Wand2, badge: "Beschleuniger", title: "KI ersetzt nicht, sie beschleunigt", desc: "Wir nutzen KI für die schnellen, gestalterischen Phasen. Die verbindliche Planung, Maße und Verantwortung bleiben bei Ihren Fachleuten, klar getrennt und klar kommuniziert." },
  { icon: Shield, badge: "EU AI Act", title: "Gekennzeichnet & rechtssicher", desc: "Jede KI-Visualisierung wird sauber als KI-generiert gekennzeichnet und dokumentiert, damit Kundinnen die Darstellung richtig einordnen." },
  { icon: Eye, badge: "Datenschutz", title: "EU-Hosting & lokale Modelle", desc: "Sensible Projektunterlagen müssen das Haus nicht verlassen. Auf Wunsch betreiben wir Modelle in der EU oder lokal, DSGVO-konform." },
  { icon: Camera, badge: "Praxisnah", title: "Aus einer Hand umgesetzt", desc: "Wir liefern keine reinen Konzepte, sondern setzen den Workflow in Ihrem Betrieb auf, von der ersten Visualisierung bis zur Integration in Angebote und Exposés." },
];

const related = [
  { href: "/leistungen/ki-bildgenerator", icon: ImageIcon, tag: "Bild-KI", title: "KI Bildgenerator", desc: "Die Bildmodell-Grundlage hinter Renderings, Moodboards und Visualisierungen." },
  { href: "/branchen/ki-loesungen-architekten", icon: Building2, tag: "Branche", title: "KI Lösungen für Architekten", desc: "Wie Planungsbüros KI über die Visualisierung hinaus im Alltag einsetzen." },
  { href: "/leistungen/ki-softwareentwicklung", icon: Code2, tag: "Integration", title: "KI Softwareentwicklung", desc: "Maßgefertigte Anbindung an CAD, PIM und Ihre bestehenden Werkzeuge." },
];

const glanceData: [string, string][] = [
  ["Ergebnis", "3D-Visualisierungen & Renderings"],
  ["Eingabe", "Grundriss, Skizze, Foto oder Text"],
  ["Tempo", "erste Varianten in Minuten"],
  ["Rolle der KI", "Beschleuniger, nicht Ersatz der Fachplanung"],
  ["Kennzeichnung", "EU AI Act, klar markiert"],
  ["Markt", "DACH-Raum (AT, DE, CH)"],
];

export default function Page() {
  return (
    <>
      <Script id="faq-3d-planung-ki" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-3d-planung-ki" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO: 4-Phasen-Ablauf */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                    3D-Planung & Visualisierung mit KI
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-primary">3D-Visualisierung mit KI</span>, in Minuten statt Tagen
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Aus Grundrissen, Skizzen und Fotos entstehen schnell 3D-Visualisierungen, Renderings, Moodboards, Einrichtungsvarianten und virtuelles Home Staging. Klar gekennzeichnet nach EU AI Act und gedacht als Beschleuniger, nicht als Ersatz Ihrer Fachplanung.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Erstgespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#leistungen">Leistungen ansehen</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-primary" /> EU AI Act konform</span>
                    <span className="flex items-center gap-1.5"><Eye className="w-4 h-4 text-primary" /> DSGVO & EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><Wand2 className="w-4 h-4 text-primary" /> Beschleuniger, kein Ersatz</span>
                  </div>
                </div>

                {/* Ablauf-Visual */}
                <Card className="relative border-2 shadow-xl shadow-primary/5 overflow-hidden">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-primary tracking-wide">VOM PLAN ZUM BILD</div>
                        <CardTitle className="text-xl">Vier Schritte zur Visualisierung</CardTitle>
                      </div>
                      <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20 text-xs shrink-0">4 Phasen</Badge>
                    </div>
                    <div className="flex gap-1.5 pt-3" aria-hidden>
                      {[0, 1, 2, 3].map((i) => (
                        <div key={i} className="h-1.5 flex-1 rounded-full bg-primary/25" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5">
                    <div className="relative">
                      <div className="absolute left-[1.3rem] top-4 bottom-4 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-primary/50" aria-hidden />
                      <div className="space-y-3.5">
                        {heroPhases.map(({ icon: Icon, step, label, time, desc }) => (
                          <div key={step} className="relative flex items-start gap-4">
                            <div className="relative z-10 w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-md shadow-primary/20 ring-4 ring-card">
                              <Icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0 pt-0.5">
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-xs font-bold text-primary">SCHRITT {step}</span>
                                <span className="text-[11px] text-muted-foreground shrink-0">{time}</span>
                              </div>
                              <div className="font-semibold text-sm leading-tight">{label}</div>
                              <div className="text-xs text-muted-foreground leading-snug mt-0.5">{desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-5 flex items-center justify-between rounded-xl bg-primary/5 border border-primary/20 px-4 py-3">
                      <span className="text-sm font-medium text-foreground">Verbindliche Planung</span>
                      <span className="text-sm text-primary font-semibold">bleibt bei Ihren Fachleuten</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* DEFINITION */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Definition</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was ist 3D-Planung mit KI?</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      <strong className="text-foreground">3D-Planung und Visualisierung mit KI</strong> nutzt generative Modelle, um aus Grundrissen, Skizzen oder Fotos schnell anschauliche 3D-Ansichten, Renderings und Einrichtungsvarianten zu erzeugen. Statt jede Perspektive aufwändig manuell aufzubauen, liefert die KI in Minuten erste Bildwelten, die sich für Akquise, Erstgespräch und Entwurf nutzen lassen.
                    </p>
                    <p>
                      Wichtig ist die Einordnung: KI ist ein <strong className="text-foreground">Beschleuniger, kein Ersatz</strong> für die Fachplanung. Generierte Bilder zeigen Stimmung, Stil und Raumwirkung. Sie sind keine baurechtlich, statisch oder maßlich verbindlichen Unterlagen. Verbindliche Pläne, Berechnungen und die Verantwortung dafür liegen weiterhin bei den planenden Fachleuten.
                    </p>
                    <p>
                      Nach <strong className="text-foreground">EU AI Act</strong> müssen KI-erzeugte Bilder klar gekennzeichnet sein. Wir richten Visualisierung, Kennzeichnung und Dokumentation so ein, dass die Technik rechtssicher und transparent gegenüber Ihren Kundinnen bleibt.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">3D Visualisierung</Badge>
                    <Badge variant="secondary" className="rounded-full">Rendering</Badge>
                    <Badge variant="secondary" className="rounded-full">Home Staging</Badge>
                    <Badge variant="secondary" className="rounded-full">Innenarchitektur</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">3D-Planung mit KI auf einen Blick</CardTitle>
                    <CardDescription>Was ein Projekt mit der KI Kanzlei ausmacht.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {glanceData.map(([label, value]) => (
                      <div key={label} className="flex items-center justify-between py-2.5 border-b border-border last:border-0">
                        <span className="text-sm font-medium text-foreground">{label}</span>
                        <span className="text-sm text-muted-foreground text-right max-w-[58%]">{value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* STATS-BAND */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-2 lg:grid-cols-4 border-2 border-border rounded-2xl overflow-hidden bg-card">
                {stats.map((s, i) => (
                  <div key={i} className="p-7 md:p-8 text-center border-b lg:border-b-0 border-border [&:nth-child(odd)]:border-r lg:[&:not(:last-child)]:border-r">
                    <div className="text-3xl md:text-4xl font-bold text-primary">{s.value}</div>
                    <div className="text-sm text-muted-foreground mt-2 leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <ModelLogoStrip
            caption="Herstellerneutral, wir wählen das passende Bildmodell"
            items={[
              { slug: "openai", name: "OpenAI" },
              { slug: "stability", name: "Stability AI" },
              { slug: "huggingface", name: "Hugging Face" },
              { text: "ComfyUI", name: "ComfyUI" },
              { slug: "ollama", name: "Ollama" },
            ]}
          />

          {/* LEISTUNGEN: BENTO */}
          <section id="leistungen" className="py-14 md:py-20 scroll-mt-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Unsere KI-Visualisierungsleistungen</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Von der ersten Skizze bis zum fotorealistischen Rendering, schnell und in vielen Varianten.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <Card key={i} className={`hover-lift border-2 ${i === 0 ? "lg:col-span-2 bg-primary/5 border-primary/20" : ""}`}>
                      <CardHeader className="pb-3">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{s.title}</CardTitle>
                      </CardHeader>
                      <CardContent><p className="text-muted-foreground leading-relaxed text-sm">{s.description}</p></CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* BRANCHEN: TABS */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Für jede Branche</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">KI-Visualisierung für Ihre Branche</h2>
                <p className="text-lg text-muted-foreground">Wählen Sie Ihren Bereich, wir zeigen, wo KI bei der Visualisierung den größten Hebel hat.</p>
              </div>
              <Tabs defaultValue="architektur" className="w-full">
                <TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">
                  {industries.map((a) => {
                    const Icon = a.icon;
                    return (
                      <TabsTrigger key={a.value} value={a.value} className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border">
                        <Icon className="w-4 h-4 mr-1.5" />{a.label}
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
                {industries.map((a) => (
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

          {/* REIFEGRAD */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Standortbestimmung</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Wo steht Ihr Visualisierungs-Workflow?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Jedes Projekt beginnt mit einer ehrlichen Einordnung. Unser Reifegradmodell zeigt, welcher nächste Schritt für Sie realistisch ist.</p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {maturity.map((m) => (
                  <Card key={m.level} className={`border-2 ${m.level === 4 ? "border-primary/30 bg-primary/5" : ""}`}>
                    <CardContent className="pt-6">
                      <div className="flex items-end gap-1.5 h-16 mb-4" aria-hidden>
                        {[1, 2, 3, 4].map((b) => (
                          <div
                            key={b}
                            className={`flex-1 rounded-t-md ${b <= m.fill ? "bg-primary" : "bg-primary/15"}`}
                            style={{ height: `${b * 25}%` }}
                          />
                        ))}
                      </div>
                      <div className="text-xs font-bold text-primary mb-1">STUFE {m.level}</div>
                      <h3 className="font-bold text-base mb-1.5 leading-tight">{m.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* VERGLEICHS-TABLE */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Wege zur Visualisierung im Vergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">KI Kanzlei vs. Renderingbüro, Inhouse & Stockbilder</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Verschiedene Wege, an Visualisierungen zu kommen, mit sehr unterschiedlichen Stärken. Worauf es bei der Wahl wirklich ankommt.</p>
              </div>
              <Card className="border-2 overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[18%] font-bold text-foreground">Kriterium</TableHead>
                      <TableHead className="text-muted-foreground">Renderingbüro</TableHead>
                      <TableHead className="text-muted-foreground">Inhouse manuell</TableHead>
                      <TableHead className="text-muted-foreground">Stockbilder</TableHead>
                      <TableHead className="text-primary font-bold">KI Kanzlei</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bigComparison.map((r, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{r.feature}</TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          <span className="inline-flex items-start gap-1.5"><X className="w-3.5 h-3.5 text-muted-foreground/60 mt-0.5 shrink-0" />{r.agentur}</span>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          <span className="inline-flex items-start gap-1.5"><X className="w-3.5 h-3.5 text-muted-foreground/60 mt-0.5 shrink-0" />{r.inhouse}</span>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          <span className="inline-flex items-start gap-1.5"><X className="w-3.5 h-3.5 text-muted-foreground/60 mt-0.5 shrink-0" />{r.stock}</span>
                        </TableCell>
                        <TableCell className="text-sm text-primary font-medium">
                          <span className="inline-flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />{r.kanzlei}</span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </section>

          {/* WERKZEUGE */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Werkzeuge</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Womit wir Ihre Visualisierungen umsetzen</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Wir sind nicht auf ein einziges Tool festgelegt. Aus diesem Baukasten wählen wir, was zu Ihrem Anwendungsfall passt.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {toolbox.map((t, i) => {
                  const Icon = t.icon;
                  return (
                    <Card key={i} className="hover-lift border-2">
                      <CardHeader className="pb-3">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{t.name}</CardTitle>
                      </CardHeader>
                      <CardContent><p className="text-muted-foreground leading-relaxed text-sm">{t.desc}</p></CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* PROZESS */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="max-w-2xl mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Der Ablauf</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Unser Weg zur KI-Visualisierung</h2>
                <p className="text-lg text-muted-foreground">Kein Buzzword-Bingo, sondern vier klar definierte Schritte mit konkreten Ergebnissen.</p>
              </div>
              <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="hidden lg:block absolute top-7 left-[12%] right-[12%] h-px bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40" aria-hidden />
                {steps.map(({ step, icon: Icon, title, time, desc }) => (
                  <div key={step} className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center mb-4 shadow-lg shadow-primary/20 relative z-10 ring-8 ring-background">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-bold text-primary mb-1">SCHRITT {step}, {time}</div>
                    <h3 className="text-lg font-bold mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WARUM KI KANZLEI */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum die KI Kanzlei</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Was unsere KI-Visualisierung besonders macht</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {usps.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <Card key={i} className="hover-lift border-2">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <Badge variant="secondary" className="rounded-full text-xs">{c.badge}</Badge>
                        </div>
                        <CardTitle className="text-lg">{c.title}</CardTitle>
                      </CardHeader>
                      <CardContent><p className="text-muted-foreground leading-relaxed text-sm">{c.desc}</p></CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQ: 3D-Planung & Visualisierung mit KI</h2>
                <p className="text-lg text-muted-foreground">Die Fragen, die wir vor fast jedem Projekt hören, ehrlich beantwortet.</p>
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
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Passend dazu</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Womit Sie die KI-Visualisierung verbinden</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Visualisierung ist ein Baustein. Das sind die Services, mit denen Sie KI im Planungs- und Geschäftsalltag breiter nutzen.</p>
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
                          <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">Mehr erfahren</span>
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
