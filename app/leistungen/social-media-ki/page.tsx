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
import { serviceLogos } from "@/lib/serviceLogos";
import {
  Check,
  X,
  Phone,
  Search,
  Rocket,
  TrendingUp,
  Shield,
  Bot,
  Workflow,
  Gauge,
  LineChart,
  Image,
  Video,
  CalendarDays,
  Send,
  MessageSquare,
  Palette,
  PenLine,
  Megaphone,
  CheckCircle,
  Sparkles,
  Briefcase,
  Scale,
  Stethoscope,
  Hotel,
  ShoppingCart,
  Factory,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Social Media mit KI: Content & Automatisierung",
  description:
    "Social Media mit KI für den DACH-Raum: KI Content Erstellung für Posts, Captions, Bilder und Reels, Redaktionsplan, automatisches Posten auf mehreren Kanälen, Community-Hilfe und Reporting. Markenkonform, DSGVO-konform und mit Freigabe beim Menschen.",
  keywords:
    "KI Social Media, Social Media Automatisierung, KI Content Erstellung, Social Media mit KI, KI Posting, Content Automatisierung, Social Media Agentur KI, KI Reels",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/social-media-ki" },
};

const faqs = [
  {
    q: "Was bedeutet Social Media mit KI?",
    a: "Social Media mit KI bedeutet, dass künstliche Intelligenz Sie bei der Content-Produktion und -Planung unterstützt: KI schreibt Entwürfe für Posts und Captions, generiert Bilder und Kurzvideos, schlägt einen Redaktionsplan vor und postet auf Wunsch automatisch auf mehreren Kanälen. Die KI nimmt die Fleißarbeit ab, die strategische und redaktionelle Freigabe bleibt aber immer beim Menschen.",
  },
  {
    q: "Wie funktioniert KI Content Erstellung für Social Media konkret?",
    a: "Wir hinterlegen einmalig Ihre Markenstimme, Zielgruppen und Themen. Auf dieser Basis erzeugt die KI Content Erstellung Varianten für Captions, Hooks und Hashtags, passende Bilder über einen KI-Bildgenerator und kurze Reels über KI-Video. Sie sehen alles als Entwurf, kürzen oder korrigieren mit wenigen Klicks und geben erst dann frei. So entsteht in einem Bruchteil der Zeit deutlich mehr Output.",
  },
  {
    q: "Was umfasst Social Media Automatisierung bei der KI Kanzlei?",
    a: "Social Media Automatisierung reicht von der Themenfindung über die Produktion bis zum KI Posting. Wir richten einen Content-Kalender ein, verbinden Ihre Kanäle wie Instagram, LinkedIn, Facebook, TikTok und YouTube und automatisieren das Veröffentlichen zu den besten Zeiten. Wiederkehrende Aufgaben wie das Umformatieren eines Beitrags für mehrere Plattformen laufen im Hintergrund über Workflow-Tools wie n8n.",
  },
  {
    q: "Bleibt die Marke bei automatisch erstelltem Content erkennbar?",
    a: "Ja, Markenkonsistenz ist der Kern unserer Arbeit. Wir hinterlegen Tonalität, Wording, Farben, Schrift und No-Gos in einem Brand-Profil, an das sich jede KI-Ausgabe hält. Dadurch klingen und wirken die Beiträge wie von Ihrem Team, nicht generisch. Vor jeder Veröffentlichung steht zudem die menschliche Freigabe, damit nichts Unpassendes online geht.",
  },
  {
    q: "Welche Social Media KI Tools nutzt ihr?",
    a: "Wir sind anbieterunabhängig und kombinieren das passende Social Media KI Tool je nach Bedarf: Sprachmodelle wie GPT und Claude für Texte, KI-Bildgeneratoren wie Flux und Stable Diffusion für Visuals, KI-Video für Reels sowie Automatisierungs- und Planungstools für das Posting. Statt Sie an ein einzelnes Tool zu binden, bauen wir einen Stack, der zu Ihren Kanälen, Ihrem Budget und der DSGVO passt.",
  },
  {
    q: "Ist Social Media mit KI DSGVO-konform?",
    a: "Ja. Wir planen jede Content Automatisierung datenschutzkonform mit Datenhaltung in Österreich und der EU, schließen Auftragsverarbeitungsverträge ab und prüfen die Anforderungen des EU AI Act. KI-generierte Inhalte kennzeichnen wir dort, wo es nötig ist, und achten bei Bildern und Videos auf Rechte und Persönlichkeitsschutz.",
  },
  {
    q: "Für wen lohnt sich KI Social Media?",
    a: "KI Social Media lohnt sich für alle, die regelmäßig posten wollen, aber wenig Zeit haben: KMU, Selbstständige, Hotels, Gastronomie, Handel, Kanzleien und Dienstleister. Gerade kleine Teams gewinnen am meisten, weil die KI die aufwendige Produktion übernimmt und aus einem Termin pro Woche ein voller Redaktionsplan wird, der über alle Kanäle ausgespielt werden kann.",
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
  name: "Social Media mit KI",
  serviceType: "KI Social Media & Content Automatisierung",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "Social Media mit KI für den DACH-Raum: KI Content Erstellung, Redaktionsplan, automatisches Posten auf mehreren Kanälen, Community-Hilfe und Reporting, markenkonform und DSGVO-konform mit Freigabe beim Menschen.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const heroPhases = [
  { icon: Search, step: "01", label: "Strategie & Kanalcheck", time: "30 Min., kostenlos", desc: "Ziele, Zielgruppen und Markenstimme klären, Kanäle bewerten." },
  { icon: CalendarDays, step: "02", label: "Redaktionsplan", time: "Woche 1", desc: "Themen, Formate und Postingzeiten in einem klaren Content-Kalender." },
  { icon: Sparkles, step: "03", label: "KI-Content-Produktion", time: "laufend", desc: "Captions, Bilder und Reels als Entwurf, Sie geben frei." },
  { icon: Send, step: "04", label: "Posten & Reporting", time: "automatisch", desc: "Multi-Channel-Posting, Community-Hilfe und monatliche Auswertung." },
];

const stats = [
  { value: "5x", label: "mehr Content-Output pro Woche" },
  { value: "80%", label: "weniger Zeit pro Beitrag" },
  { value: "100%", label: "Freigabe bleibt beim Menschen" },
  { value: "7+", label: "Kanäle aus einem Redaktionsplan" },
];

const services = [
  { icon: PenLine, title: "KI Content Erstellung: Posts & Captions", description: "Die KI liefert in Ihrer Markenstimme Hooks, Captions, Varianten und passende Hashtags. Sie schreibt nicht ins Blaue, sondern auf Basis Ihrer Themen, Zielgruppen und bewährter Formate. Sie kürzen, schärfen und geben frei, statt vor dem leeren Blatt zu sitzen." },
  { icon: Image, title: "KI-Bilder für Social Media", description: "Markenkonforme Visuals und Grafiken per KI-Bildgenerator, abgestimmt auf Farben, Schrift und Bildsprache Ihres Profils." },
  { icon: Video, title: "Kurzvideos & Reels mit KI", description: "KI-Reels und Shorts aus Skript, Szenen und Untertiteln, ideal für Instagram, TikTok und YouTube, ohne Drehteam." },
  { icon: CalendarDays, title: "Redaktionsplan & Content-Kalender", description: "Ein klarer Plan mit Themen, Formaten und Postingzeiten, damit kein Kanal verwaist und nichts dem Zufall überlassen bleibt." },
  { icon: Send, title: "Automatisches Posten auf mehreren Kanälen", description: "Ein Beitrag, alle Plattformen: KI Posting formatiert und veröffentlicht automatisch zu den besten Zeiten auf jedem Kanal." },
  { icon: MessageSquare, title: "Community- & Kommentar-Hilfe", description: "Die KI schlägt Antworten auf Kommentare und Nachrichten vor, erkennt Stimmungen und entlastet das Community-Management." },
  { icon: BarChart3, title: "Social Media Reporting", description: "Monatliche Auswertung zu Reichweite, Interaktion und bestem Content, mit klaren Empfehlungen für den nächsten Monat." },
  { icon: Palette, title: "Markenkonsistenz & Tonalität", description: "Ein Brand-Profil mit Wording, Farben und No-Gos sorgt dafür, dass jeder KI-Beitrag nach Ihnen klingt und aussieht." },
];

const maturity = [
  { level: 1, fill: 1, title: "Ad-hoc & unregelmäßig", desc: "Es wird gepostet, wenn Zeit bleibt. Kein Plan, kein roter Faden. Hier setzt die Erstanalyse an." },
  { level: 2, fill: 2, title: "Einzelne Tools", desc: "Erste KI- oder Planungstools im Einsatz, aber ohne Strategie, Redaktionsplan oder Messung." },
  { level: 3, fill: 3, title: "Geplant & teilautomatisiert", desc: "Redaktionsplan steht, Beiträge werden produziert und automatisch ausgespielt, Ergebnisse werden gemessen." },
  { level: 4, fill: 4, title: "KI-gestützter Content-Motor", desc: "Content entsteht planbar über alle Kanäle, mit Markenprofil, Automatisierung und laufender Optimierung." },
];

const bigComparison = [
  { feature: "Content-Output", internal: "Schwankt mit der freien Zeit", freelancer: "Hoch, aber teuer pro Beitrag", big: "Hoch, aber oft generisch", kanzlei: "Hoch und markenkonform aus einem Plan" },
  { feature: "Time-to-Post", internal: "Lange, alles manuell", freelancer: "Abstimmungsschleifen kosten Tage", big: "Schnell, aber ohne Kontext", kanzlei: "Schnell, mit Freigabe in Minuten" },
  { feature: "Markenkonsistenz", internal: "Abhängig von der Tagesform", freelancer: "Gut, solange dieselbe Person liefert", big: "Generisch, ohne Brand Voice", kanzlei: "Brand-Profil steuert jede Ausgabe" },
  { feature: "Kosten", internal: "Versteckt in Arbeitszeit", freelancer: "Hohe laufende Kosten", big: "Abo, aber Aufbau bleibt bei Ihnen", kanzlei: "Klar kalkuliert, kostenlose Erstanalyse" },
  { feature: "Kontrolle & Freigabe", internal: "Voll, aber zeitintensiv", freelancer: "Über Abstimmung", big: "Postet schnell ohne Prüfung", kanzlei: "Mensch gibt jeden Beitrag frei" },
  { feature: "DACH & DSGVO", internal: "Je nach Wissen im Team", freelancer: "Unterschiedlich", big: "Oft US-Tools ohne EU-Bezug", kanzlei: "Österreichisch, DSGVO- und EU-AI-Act-geprüft" },
];

const industries = [
  { value: "kmu", label: "KMU", icon: Briefcase, head: "KMU & Dienstleister", text: "Sichtbar bleiben ohne eigene Marketingabteilung: Die KI übernimmt Produktion und Planung, Sie geben frei. Aus einem Termin pro Woche wird ein voller Redaktionsplan über alle relevanten Kanäle." },
  { value: "hotel", label: "Hotellerie", icon: Hotel, head: "Hotels & Tourismus", text: "Stimmungsvolle Reels, saisonale Angebote und Gästemomente automatisch aufbereitet und geplant, damit Ihr Haus auch in der Hochsaison präsent bleibt, wenn das Team keine Zeit für Social Media hat." },
  { value: "gastro", label: "Gastronomie", icon: ShoppingCart, head: "Gastronomie & Handel", text: "Wochenkarten, Aktionen und neue Produkte werden zu Posts, Stories und Reels, automatisch für jeden Kanal formatiert, sodass spontane Angebote sofort sichtbar sind." },
  { value: "health", label: "Gesundheit", icon: Stethoscope, head: "Praxen & Gesundheit", text: "Aufklärung, Tipps und Praxisnews in seriösem, markenkonformem Ton, mit menschlicher Freigabe und Rücksicht auf sensible Themen und Berufsrecht." },
  { value: "legal", label: "Kanzleien", icon: Scale, head: "Kanzleien & Beratung", text: "Fachthemen verständlich aufbereitet für LinkedIn und Co., um Expertise zu zeigen und Mandate zu gewinnen, mit Tonalität, die zum Berufsstand passt." },
  { value: "industry", label: "Industrie", icon: Factory, head: "Industrie & B2B", text: "Employer Branding, Produktneuheiten und Messeauftritte als planbarer Content-Strom für LinkedIn und YouTube, mit konsistenter Markenführung über alle Beiträge." },
];

const toolbox = [
  { icon: Bot, name: "Sprachmodelle für Texte", desc: "GPT und Claude erzeugen Captions, Hooks und Varianten in Ihrer Markenstimme, statt austauschbarer Standardtexte." },
  { icon: Image, name: "KI-Bildgeneratoren", desc: "Flux und Stable Diffusion liefern markenkonforme Visuals und Grafiken für Feed, Story und Cover." },
  { icon: Video, name: "KI-Video & Reels", desc: "Aus Skript und Szenen entstehen kurze Reels und Shorts mit Untertiteln, ohne Drehteam und Schnittsoftware." },
  { icon: Workflow, name: "Posting- & Planungs-Automatisierung", desc: "n8n und Planungstools verbinden Ihre Kanäle und veröffentlichen automatisch zu den besten Zeiten." },
  { icon: Palette, name: "Brand-Profil & Tonalität", desc: "Wording, Farben, Schrift und No-Gos sind hinterlegt, sodass jede KI-Ausgabe markenkonform bleibt." },
  { icon: Gauge, name: "Analytics & Reporting", desc: "Dashboards bündeln Reichweite und Interaktion und zeigen, welcher Content wirklich funktioniert." },
];

const steps = [
  { step: "01", icon: Phone, title: "Kostenlose Erstanalyse", time: "30 Minuten", desc: "Wir schauen uns Ihre Kanäle, Ziele und Zielgruppe an und klären, wo KI bei Ihrer Content-Produktion den größten Hebel hat. Ohne Verpflichtung und ohne Verkaufsdruck." },
  { step: "02", icon: Search, title: "KI Assessment Center", time: "Analyse & Plan", desc: "Wir definieren Markenstimme, Themen und Formate, bauen den Redaktionsplan und legen den passenden Tool-Stack für Text, Bild, Video und Posting fest, inklusive Aufwand und erwarteter Wirkung." },
  { step: "03", icon: Rocket, title: "Pilot: erste Content-Welle", time: "2 bis 4 Wochen", desc: "Statt langer Konzepte starten wir mit echter Produktion: erste Posts, Bilder und Reels als Entwurf, Ihre Freigabe, automatisches Ausspielen auf den Kanälen und eine erste Messung." },
  { step: "04", icon: TrendingUp, title: "Skalierung & Begleitung", time: "laufend", desc: "Wir bauen den Content-Motor aus, ergänzen Kanäle und Formate und optimieren anhand des Reportings. In regelmäßigen Reviews drehen wir an dem, was nachweislich Reichweite bringt." },
];

const usps = [
  { icon: CheckCircle, badge: "Freigabe beim Menschen", title: "Mensch behält die Kontrolle", desc: "KI erstellt Entwürfe, Sie entscheiden. Kein Beitrag geht ohne Ihre Freigabe online, so bleibt die Verantwortung dort, wo sie hingehört." },
  { icon: Palette, badge: "Markenkonform", title: "Immer in Ihrer Markenstimme", desc: "Tonalität, Farben und No-Gos sind im Brand-Profil hinterlegt. Inhalte klingen und wirken wie von Ihrem Team, nicht generisch." },
  { icon: Shield, badge: "Lokal & DSGVO", title: "Österreich & DSGVO-first", desc: "Als österreichisches Unternehmen planen wir jede Content Automatisierung DSGVO-konform mit EU-Hosting und prüfen den EU AI Act." },
  { icon: LineChart, badge: "Messbar", title: "Reporting statt Bauchgefühl", desc: "Wir messen Reichweite und Interaktion und entscheiden über kommende Inhalte mit Zahlen, nicht mit dem Bauch." },
];

const related = [
  { href: "/leistungen/ki-bildgenerator", icon: Image, tag: "Bild", title: "KI Bildgenerator", desc: "Markenkonforme Bilder und Grafiken für jeden Social-Media-Beitrag, direkt aus dem Text-Prompt." },
  { href: "/leistungen/ki-video", icon: Video, tag: "Video", title: "KI Video & Reels", desc: "Kurzvideos und Reels mit KI produzieren, von Skript bis Untertitel, ohne Kamera und Schnittplatz." },
  { href: "/leistungen/meta-ads-ki", icon: Megaphone, tag: "Ads", title: "Meta Ads mit KI", desc: "Aus organischem Content werden performante Anzeigen auf Facebook und Instagram, datengetrieben optimiert." },
];

const glanceData: [string, string][] = [
  ["Ergebnis", "laufender Content-Motor"],
  ["Erstanalyse", "kostenlos, 30 Minuten"],
  ["Kanäle", "Instagram, LinkedIn, TikTok, YouTube & Co."],
  ["Freigabe", "immer beim Menschen"],
  ["Datenschutz", "DSGVO, EU-Hosting, EU AI Act"],
  ["Markt", "DACH-Raum (AT, DE, CH)"],
];

export default function Page() {
  return (
    <>
      <Script id="faq-social-media-ki" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-social-media-ki" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO: 4-Phasen-Roadmap */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                    Social Media mit KI, Content & Automatisierung
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-primary">Social Media mit KI</span>, von der Idee bis zum fertigen Post
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    KI Content Erstellung für Posts, Captions, Bilder und Reels, ein klarer Redaktionsplan und automatisches Posten auf allen Kanälen. Markenkonform, DSGVO-konform und mit Freigabe, die immer beim Menschen bleibt.
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
                    <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-primary" /> Freigabe beim Menschen</span>
                    <span className="flex items-center gap-1.5"><Palette className="w-4 h-4 text-primary" /> Markenkonform</span>
                  </div>
                </div>

                {/* Roadmap-Visual */}
                <Card className="relative border-2 shadow-xl shadow-primary/5 overflow-hidden">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-primary tracking-wide">SOCIAL MEDIA WORKFLOW</div>
                        <CardTitle className="text-xl">Von der Idee zum Reporting</CardTitle>
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
                                <span className="text-xs font-bold text-primary">PHASE {step}</span>
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
                      <span className="text-sm font-medium text-foreground">Ergebnis</span>
                      <span className="text-sm text-primary font-semibold">planbarer Content über alle Kanäle</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* DEFINITION: 2-spaltig mit Info-Card */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Definition</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was ist Social Media mit KI?</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      <strong className="text-foreground">Social Media mit KI</strong> verbindet die klassische Redaktionsarbeit mit künstlicher Intelligenz. Die KI übernimmt die aufwendige Produktion und Planung: Sie liefert Entwürfe für Posts und Captions, erzeugt Bilder über einen <strong className="text-foreground">KI-Bildgenerator</strong>, schneidet Kurzvideos und Reels per KI-Video und schlägt einen Redaktionsplan vor.
                    </p>
                    <p>
                      Der Kern guter <strong className="text-foreground">Social Media Automatisierung</strong> ist nicht, den Menschen zu ersetzen, sondern ihn zu entlasten. Wiederkehrende Schritte wie das Umformatieren eines Beitrags für mehrere Plattformen oder das Posten zur besten Zeit laufen automatisch. Die strategische und redaktionelle Freigabe bleibt aber immer bei Ihnen.
                    </p>
                    <p>
                      Entscheidend ist die Markenkonsistenz. Wir hinterlegen Ihre Tonalität, Wording, Farben und No-Gos in einem Brand-Profil, an das sich jede KI Content Erstellung hält. So entsteht in einem Bruchteil der bisherigen Zeit deutlich mehr Output, der trotzdem nach Ihnen klingt und aussieht.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">KI Content Erstellung</Badge>
                    <Badge variant="secondary" className="rounded-full">Social Media Automatisierung</Badge>
                    <Badge variant="secondary" className="rounded-full">KI Posting</Badge>
                    <Badge variant="secondary" className="rounded-full">KI Reels</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Social Media mit KI auf einen Blick</CardTitle>
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
            caption="Herstellerneutral, wir kombinieren die passenden Tools"
            items={[
              { slug: "openai", name: "OpenAI" },
              { slug: "anthropic", name: "Anthropic" },
              { slug: "flux", name: "Flux" },
              { slug: "stability", name: "Stable Diffusion" },
              { slug: "runway", name: "Runway" },
              { slug: "n8n", name: "n8n" },
            ]}
          />

          {/* LEISTUNGEN: BENTO */}
          <section id="leistungen" className="py-14 md:py-20 scroll-mt-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Unsere Leistungen für Social Media mit KI</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Von der KI Content Erstellung bis zum automatischen Posten und Reporting, alles aus einer Hand.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">KI Social Media für Ihre Branche</h2>
                <p className="text-lg text-muted-foreground">Wählen Sie Ihren Bereich, wir zeigen, wie KI Ihre Kanäle füllt.</p>
              </div>
              <Tabs defaultValue="kmu" className="w-full">
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

          {/* SOCIAL-MEDIA-REIFEGRAD: clean Diagramm via divs */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Standortbestimmung</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Wo steht Ihr Social Media?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Jedes Projekt beginnt mit einer ehrlichen Einordnung. Unser Reifegradmodell zeigt, welcher nächste Schritt zum KI-gestützten Content-Motor für Sie realistisch ist.</p>
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

          {/* GROSSE VERGLEICHS-TABLE */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Wege im Vergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">KI Kanzlei vs. inhouse, Agentur & reines KI-Tool</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Vier Wege, Social Media mit Content zu füllen, mit sehr unterschiedlichen Stärken. Worauf es bei der Wahl wirklich ankommt.</p>
              </div>
              <Card className="border-2 overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[18%] font-bold text-foreground">Kriterium</TableHead>
                      <TableHead className="text-muted-foreground">Manuell / Inhouse</TableHead>
                      <TableHead className="text-muted-foreground">Klassische Agentur</TableHead>
                      <TableHead className="text-muted-foreground">Reines KI-Tool</TableHead>
                      <TableHead className="text-primary font-bold">KI Kanzlei</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bigComparison.map((r, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{r.feature}</TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          <span className="inline-flex items-start gap-1.5"><X className="w-3.5 h-3.5 text-muted-foreground/60 mt-0.5 shrink-0" />{r.internal}</span>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          <span className="inline-flex items-start gap-1.5"><X className="w-3.5 h-3.5 text-muted-foreground/60 mt-0.5 shrink-0" />{r.freelancer}</span>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          <span className="inline-flex items-start gap-1.5"><X className="w-3.5 h-3.5 text-muted-foreground/60 mt-0.5 shrink-0" />{r.big}</span>
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

          {/* WERKZEUGE / TECH */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Werkzeuge</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Womit wir Ihr Social Media mit KI umsetzen</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Wir sind nicht auf ein einziges Social Media KI Tool festgelegt. Aus diesem Baukasten wählen wir, was zu Ihren Kanälen und Ihrem Budget passt.</p>
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

          {/* PROZESS: Timeline */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="max-w-2xl mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Der Ablauf</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Unser Weg zu Social Media mit KI</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold">Was uns bei Social Media mit KI besonders macht</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQ: Social Media mit KI</h2>
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
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Verwandte Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Das gehört zu Social Media mit KI dazu</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Bild, Video und Anzeigen aus einer Hand. Das sind die Services, mit denen aus dem Redaktionsplan ein voller Content-Motor wird.</p>
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
