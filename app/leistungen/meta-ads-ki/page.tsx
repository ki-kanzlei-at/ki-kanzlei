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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Check,
  X,
  Phone,
  Search,
  Rocket,
  TrendingUp,
  Target,
  Image as ImageIcon,
  Video,
  PenTool,
  MousePointerClick,
  Megaphone,
  Repeat,
  Sparkles,
  Wand2,
  Eye,
  Filter,
  Shield,
  ShieldCheck,
  Bot,
  Briefcase,
  ShoppingCart,
  Store,
  Building2,
  Layers,
  Gauge,
  LineChart,
  BadgeEuro,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Meta Ads mit KI: Facebook & Instagram Werbung",
  description:
    "Meta Ads mit KI: Facebook und Instagram Werbung mit KI-Creatives, KI-Copywriting, automatisierten A/B-Tests und scharfem Targeting. Niedrigerer CPA, hoehere ROAS, DSGVO-konform im DACH-Raum.",
  keywords:
    "Meta Ads, Facebook Ads, Instagram Ads, Meta Werbung, Meta Ads Agentur, Facebook Ads Agentur, KI Ads, Meta Ads KI, Performance Marketing, KI Werbeanzeigen",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/meta-ads-ki" },
};

const faqs = [
  {
    q: "Was sind Meta Ads mit KI?",
    a: "Meta Ads sind bezahlte Werbeanzeigen auf Facebook und Instagram, beide gehören zum Meta-Konzern und werden über den Meta Ads Manager geschaltet. Bei Meta Ads mit KI kombinieren wir diese Werbung mit kuenstlicher Intelligenz: KI generiert Ad-Creatives als Bild und Video, schreibt Anzeigentexte, testet Varianten automatisiert gegeneinander und optimiert die Auslieferung auf den besten Kosten-pro-Ergebnis-Wert. So entstehen mehr Werbeanzeigen in besserer Qualität und in kuerzerer Zeit.",
  },
  {
    q: "Was kostet eine Meta Ads Agentur mit KI?",
    a: "Das erste Erstgespräch ist bei uns kostenlos. Danach setzen sich die Kosten aus unserem Betreuungshonorar und Ihrem Media-Budget zusammen, das direkt an Meta fliesst. Weil wir Creatives und Texte mit KI produzieren, sparen Sie die teure Einzelproduktion und können schon mit kleineren Monatsbudgets sauber testen. Den konkreten Rahmen kalkulieren wir transparent nach Ziel, Branche und Wettbewerb. Eine tiefe Datenanalyse Ihrer Konten liefert das KI Assessment Center für 490 EUR, anrechenbar bei Beauftragung.",
  },
  {
    q: "Wie verbessert KI die Creatives für Facebook und Instagram Ads?",
    a: "Gute Creatives sind der wichtigste Hebel im Performance Marketing. Mit unserer KI-Bild- und Video-Pipeline erzeugen wir auf Knopfdruck dutzende Varianten: verschiedene Bildwelten, Hooks, Formate für Feed, Story und Reels sowie passende Anzeigentexte. Statt einer einzigen teuren Produktion testen wir viele Ansaetze parallel, finden den Gewinner datenbasiert und liefern fortlaufend frische Motive nach, damit die Anzeigen nicht ermueden.",
  },
  {
    q: "Ist Meta Ads mit KI DSGVO-konform?",
    a: "Ja. Wir richten das Tracking serverseitig über die Meta Conversions API (CAPI) ein, binden ein DSGVO-konformes Consent-Management ein und uebertragen nur Daten, für die eine Einwilligung vorliegt. Personenbezogene Daten werden gehasht, und wir dokumentieren die Verarbeitung sauber. So bleibt die Messung auch nach iOS-Einschraenkungen belastbar, ohne den Datenschutz zu verletzen.",
  },
  {
    q: "Wie schnell sehe ich Ergebnisse mit Meta Ads?",
    a: "Erste Daten liefert die Kampagne schon in den ersten Tagen. Nach rund zwei Wochen ist die Lernphase meist abgeschlossen und wir erkennen, welche Creatives und Zielgruppen liefern. Ab dann optimieren wir laufend: schwache Anzeigen aus, starke hoch. Ein belastbarer Trend bei Kosten pro Ergebnis (CPA) und Return on Ad Spend (ROAS) zeigt sich in der Regel innerhalb der ersten vier bis sechs Wochen.",
  },
  {
    q: "Für wen lohnen sich Meta Ads mit KI?",
    a: "Vor allem für KMU, E-Commerce-Shops und Dienstleister im DACH-Raum, die planbar Anfragen, Leads oder Verkaeufe erzeugen wollen. E-Commerce profitiert von Katalog- und Retargeting-Kampagnen, Dienstleister von Lead-Anzeigen, lokale Anbieter von Reichweite in ihrer Region. Wer bisher an der Creative-Produktion gescheitert ist, gewinnt durch KI besonders viel, weil wir den Engpass Motiv und Text auflösen.",
  },
  {
    q: "Was unterscheidet euch von einer klassischen Facebook Ads Agentur?",
    a: "Wir sind keine reine Media-Agentur, sondern ein KI-Haus. Wir betreiben unsere eigene KI-Bild- und Video-Pipeline und unser KI-Copywriting inhouse, statt Creatives extern einzukaufen. Dadurch testen wir mehr Varianten, reagieren schneller und halten die Kosten niedrig. Dazu kommt sauberes serverseitiges Tracking nach DSGVO und ein Fokus auf messbaren ROAS statt auf Reichweiten-Kennzahlen ohne Geschaeftswert.",
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
  name: "Meta Ads mit KI",
  serviceType: "Performance Marketing & KI Werbeanzeigen",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "Facebook und Instagram Werbung mit kuenstlicher Intelligenz: KI-Creatives, KI-Copywriting, automatisierte A/B-Tests, scharfes Targeting und DSGVO-konformes Tracking für niedrigeren CPA und hoehere ROAS.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const heroPhases = [
  { icon: Search, step: "01", label: "Account- & Markt-Audit", time: "30 Min., kostenlos", desc: "Konten, Zielgruppen und Wettbewerb prüfen, Potenziale sichtbar machen." },
  { icon: Wand2, step: "02", label: "KI-Creatives & Copy", time: "Woche 1", desc: "Bild, Video und Anzeigentexte mit KI in vielen Varianten produzieren." },
  { icon: Rocket, step: "03", label: "Launch & A/B-Tests", time: "Woche 1 bis 2", desc: "Kampagnenstruktur aufsetzen, Varianten datenbasiert gegeneinander testen." },
  { icon: TrendingUp, step: "04", label: "Optimierung & Skalierung", time: "laufend", desc: "Gewinner skalieren, CPA senken, ROAS steigern, frische Motive nachliefern." },
];

const stats = [
  { value: "bis 40%", label: "niedrigerer CPA durch KI-Creatives und Tests" },
  { value: "10x", label: "mehr Creative-Varianten pro Kampagne" },
  { value: "CAPI", label: "serverseitiges Tracking, DSGVO-konform" },
  { value: "2 Mrd.", label: "taegliche Nutzer auf Facebook und Instagram" },
];

const services = [
  { icon: Wand2, title: "KI-Ad-Creatives (Bild & Video)", description: "Aus unserer KI-Bild- und Video-Pipeline entstehen dutzende Anzeigenmotive: Feed, Story und Reels, mit unterschiedlichen Hooks und Bildwelten. So testen wir viele Ansaetze parallel, statt auf eine teure Einzelproduktion zu setzen, und liefern fortlaufend frische Motive gegen Anzeigenmuedigkeit." },
  { icon: PenTool, title: "KI-Copywriting für Anzeigentexte", description: "KI schreibt Primaertexte, Headlines und Call-to-Actions in mehreren Tonalitaeten, abgestimmt auf Zielgruppe und Angebot, und wir kuratieren die besten Varianten." },
  { icon: Target, title: "Targeting & Zielgruppen-Analyse", description: "Wir bauen Custom und Lookalike Audiences, analysieren Interessen und Signale und richten die Auslieferung auf die Menschen mit der höchsten Kaufwahrscheinlichkeit aus." },
  { icon: Repeat, title: "Retargeting & Funnel", description: "Vom ersten Kontakt bis zum Kauf: Wir bauen einen sauberen Funnel mit Retargeting auf Website-Besucher, Warenkorb-Abbrecher und Engagement-Zielgruppen." },
  { icon: MousePointerClick, title: "Automatisierte A/B-Tests", description: "Creatives, Texte, Zielgruppen und Platzierungen werden systematisch gegeneinander getestet. Die KI hilft, Gewinner schnell zu erkennen und Budget dorthin zu lenken." },
  { icon: ShieldCheck, title: "Tracking & CAPI (DSGVO-konform)", description: "Serverseitiges Tracking über die Meta Conversions API mit Consent-Management und gehashten Daten, damit die Messung trotz iOS-Einschraenkungen belastbar und datenschutzkonform bleibt." },
];

const maturity = [
  { level: 1, fill: 1, title: "Kein Paid Social", desc: "Bisher nur organische Posts auf Facebook und Instagram, ohne Werbebudget. Hier setzt das kostenlose Audit an." },
  { level: 2, fill: 2, title: "Boost-Posts", desc: "Einzelne Beitraege werden mit einem Klick beworben, ohne Struktur, Tracking oder echte Optimierung." },
  { level: 3, fill: 3, title: "Strukturierte Kampagnen", desc: "Saubere Kampagnenstruktur, mehrere Creatives, erstes Retargeting und Conversion-Tracking sind im Einsatz." },
  { level: 4, fill: 4, title: "KI-skaliertes Performance Marketing", desc: "KI-Creatives, automatisierte Tests, serverseitiges CAPI-Tracking und planbare Skalierung auf einen Ziel-ROAS." },
];

const bigComparison = [
  { feature: "Creative-Produktion", boost: "Bestehende Posts, kaum Auswahl", freelancer: "Wenige Motive, teuer pro Stück", agency: "Klassische Produktion, lange Vorlaufzeit", kanzlei: "KI-Pipeline, dutzende Varianten schnell" },
  { feature: "Anzeigentexte", boost: "Aus dem Bauch geschrieben", freelancer: "Eine Tonalitaet, wenig Tests", agency: "Solide, aber begrenzte Iteration", kanzlei: "KI-Copy in mehreren Varianten, kuratiert" },
  { feature: "A/B-Testing", boost: "Praktisch keines", freelancer: "Manuell, abhaengig von Zeit", agency: "Vorhanden, oft langsam", kanzlei: "Systematisch und KI-gestuetzt" },
  { feature: "Tracking & DSGVO", boost: "Nur Standard-Pixel", freelancer: "Unterschiedlich", agency: "Pixel, CAPI selten Standard", kanzlei: "Serverseitige CAPI, Consent, gehasht" },
  { feature: "Optimierung", boost: "Einmal gestartet, dann sich selbst ueberlassen", freelancer: "Punktuell je nach Auslastung", agency: "Regelmaessig, mit Reporting", kanzlei: "Laufend auf CPA und ROAS gesteuert" },
  { feature: "Markt & Sprache", boost: "Allgemein", freelancer: "Variabel", agency: "Häufig international standardisiert", kanzlei: "DACH-Fokus, deutschsprachige Creatives" },
];

const industries = [
  { value: "ecommerce", label: "E-Commerce", icon: ShoppingCart, head: "E-Commerce & Online-Shops", text: "Katalog- und Advantage+-Kampagnen, dynamisches Retargeting auf Produktebene und KI-Creatives für jede Kategorie. Wir steuern auf ROAS und holen abgesprungene Warenkoerbe zurück, statt nur Reichweite einzukaufen." },
  { value: "dienstleister", label: "Dienstleister", icon: Briefcase, head: "Dienstleister & B2B", text: "Lead-Kampagnen mit Formularen direkt in Meta oder auf der Landingpage, qualifizierende Anzeigentexte und Retargeting auf Website-Besucher. So entstehen planbar Anfragen statt Streuverlust." },
  { value: "lokal", label: "Lokal & KMU", icon: Store, head: "Lokale Anbieter & KMU", text: "Regionales Targeting im Umkreis, Aktions- und Standortwerbung sowie KI-Creatives, die ohne grosses Marketingteam professionell wirken. Ideal für Gastronomie, Handel, Studios und Praxen." },
  { value: "marken", label: "Marken & D2C", icon: Building2, head: "Marken & D2C", text: "Voller Funnel von Awareness über Consideration bis Conversion, konsistente Bildwelt aus der KI-Pipeline und sauberes Reporting auf Markenebene für nachhaltiges Wachstum." },
];

const toolbox = [
  { icon: ImageIcon, name: "KI-Bildgenerator", desc: "Unsere KI-Bild-Pipeline erzeugt Anzeigenmotive in jedem Format und Stil, vom Produktshot bis zur Lifestyle-Szene, ohne teures Fotoshooting." },
  { icon: Video, name: "KI-Video & Reels", desc: "Kurze, hook-starke Video-Ads und Reels aus der KI-Video-Pipeline, das aktuell performanteste Format auf Facebook und Instagram." },
  { icon: PenTool, name: "KI-Copywriting", desc: "Anzeigentexte, Headlines und Hooks in mehreren Tonalitaeten, schnell variiert und auf die Zielgruppe zugeschnitten." },
  { icon: Megaphone, name: "Meta Ads Manager", desc: "Saubere Kampagnenstruktur mit Advantage+, korrekten Zielen, Budgets und Platzierungen über Facebook und Instagram hinweg." },
  { icon: Gauge, name: "CAPI & Tracking", desc: "Serverseitige Conversions API mit Consent-Management und gehashten Daten für belastbare, DSGVO-konforme Messung." },
  { icon: LineChart, name: "Reporting & Dashboards", desc: "Transparente Auswertung auf CPA, ROAS und Conversions, damit jeder Euro Media-Budget nachvollziehbar bleibt." },
];

const steps = [
  { step: "01", icon: Phone, title: "Kostenloses Erstgespräch", time: "30 Minuten", desc: "Wir lernen Ihr Angebot, Ihre Ziele und Ihren Markt kennen, sichten vorhandene Konten und Kampagnen und zeigen, wo Meta Ads mit KI bei Ihnen den größten Hebel haben. Ohne Verpflichtung." },
  { step: "02", icon: Wand2, title: "Creatives, Copy & Struktur", time: "Woche 1", desc: "Wir produzieren mit der KI-Bild- und Video-Pipeline viele Creative-Varianten, schreiben die Anzeigentexte und bauen die Kampagnenstruktur inklusive Zielgruppen, Funnel und sauberem CAPI-Tracking auf." },
  { step: "03", icon: Rocket, title: "Launch & A/B-Tests", time: "Woche 1 bis 2", desc: "Die Kampagnen gehen live. Creatives, Texte, Zielgruppen und Platzierungen werden systematisch getestet, damit wir datenbasiert erkennen, was wirklich Anfragen und Verkaeufe bringt." },
  { step: "04", icon: TrendingUp, title: "Optimierung & Skalierung", time: "laufend", desc: "Schwache Anzeigen aus, starke hoch: Wir senken den CPA, steigern den ROAS, liefern frische Motive gegen Anzeigenmuedigkeit nach und skalieren die Gewinner planbar auf Ihr Wunschbudget." },
];

const usps = [
  { icon: Wand2, badge: "Inhouse-KI", title: "Eigene Creative-Pipeline", desc: "Wir kaufen Creatives nicht extern ein, sondern produzieren Bild, Video und Text mit unserer eigenen KI. Mehr Varianten, schnellere Iteration, niedrigere Kosten." },
  { icon: ShieldCheck, badge: "DSGVO-first", title: "Sauberes CAPI-Tracking", desc: "Serverseitige Conversions API mit Consent-Management und gehashten Daten. Belastbare Messung trotz iOS-Einschraenkungen, ohne Datenschutz zu riskieren." },
  { icon: Shield, badge: "DACH", title: "Markt und Sprache", desc: "Als oesterreichisches KI-Haus produzieren wir deutschsprachige Creatives und kennen die Eigenheiten des Marktes in AT, DE und CH." },
  { icon: BadgeEuro, badge: "Messbar", title: "Fokus auf ROAS", desc: "Wir steuern auf Kosten pro Ergebnis und Return on Ad Spend, nicht auf Reichweiten-Kennzahlen ohne Geschaeftswert. Jeder Euro bleibt nachvollziehbar." },
];

const related = [
  { href: "/leistungen/ki-bildgenerator", icon: ImageIcon, tag: "Creatives", title: "KI Bildgenerator", desc: "Die Bild-Pipeline hinter unseren Ad-Creatives: Anzeigenmotive in jedem Format ohne Fotoshooting." },
  { href: "/leistungen/ki-video", icon: Video, tag: "Video & Reels", title: "KI Video", desc: "Hook-starke Video-Ads und Reels aus der KI-Video-Pipeline, das Top-Format auf Facebook und Instagram." },
  { href: "/leistungen/agentic-ai", icon: Bot, tag: "Automatisierung", title: "Agentic AI & AI Agents", desc: "Autonome Agenten, die Kampagnen-Routinen und Reporting rund um Ihre Meta Ads automatisieren." },
];

const glanceData: [string, string][] = [
  ["Plattformen", "Facebook & Instagram (Meta)"],
  ["Creatives", "KI-Bild & KI-Video, viele Varianten"],
  ["Texte", "KI-Copywriting, mehrere Tonalitaeten"],
  ["Tracking", "Conversions API (CAPI), DSGVO-konform"],
  ["Ziel", "niedrigerer CPA, hoehere ROAS"],
  ["Markt", "DACH-Raum (AT, DE, CH)"],
];

const adLogos = [
  { src: "/img/logos/meta.svg", alt: "Meta (Facebook & Instagram)" },
  { src: "/img/logos/openai.svg", alt: "OpenAI" },
];

export default function Page() {
  return (
    <>
      <Script id="faq-meta-ads-ki" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-meta-ads-ki" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO: 4-Phasen-Ablauf */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                    Meta Ads mit KI, Facebook & Instagram Werbung
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-primary">Meta Ads mit KI</span>: bessere Creatives, mehr Performance
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Wir kombinieren Facebook und Instagram Werbung mit kuenstlicher Intelligenz: KI-generierte Ad-Creatives als Bild und Video, KI-Copywriting, automatisierte A/B-Tests und scharfes Targeting. Für niedrigeren CPA, hoehere ROAS und DSGVO-konformes Tracking im DACH-Raum.
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
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                  <div className="flex items-center gap-5 pt-4">
                    <span className="text-xs text-muted-foreground">Plattformen & KI</span>
                    <div className="flex items-center gap-5">
                      {adLogos.map((l) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img key={l.src} src={l.src} alt={l.alt} className="h-6 w-auto opacity-70" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Ablauf-Visual */}
                <Card className="relative border-2 shadow-xl shadow-primary/5 overflow-hidden">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-primary tracking-wide">META ADS WORKFLOW</div>
                        <CardTitle className="text-xl">Von der Idee zum ROAS</CardTitle>
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
                      <span className="text-sm text-primary font-semibold">niedrigerer CPA, hoehere ROAS</span>
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was sind Meta Ads mit KI?</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      <strong className="text-foreground">Meta Ads</strong> sind bezahlte Werbeanzeigen auf <strong className="text-foreground">Facebook</strong> und <strong className="text-foreground">Instagram</strong>. Beide Plattformen gehören zum Meta-Konzern und werden gemeinsam über den Meta Ads Manager gesteuert. Damit erreichen Sie über zwei Milliarden Menschen täglich, vom lokalen Umkreis bis zur präzise definierten Zielgruppe.
                    </p>
                    <p>
                      Bei <strong className="text-foreground">Meta Ads mit KI</strong> kombinieren wir diese Werbung mit kuenstlicher Intelligenz. KI erzeugt die Ad-Creatives als Bild und Video, schreibt die Anzeigentexte, testet Varianten automatisiert gegeneinander und unterstützt die Optimierung auf den besten Kosten-pro-Ergebnis-Wert. So entstehen mehr Werbeanzeigen in besserer Qualität und in deutlich kuerzerer Zeit.
                    </p>
                    <p>
                      Der Engpass im <strong className="text-foreground">Performance Marketing</strong> ist fast nie das Budget, sondern die Creative-Produktion. Genau hier setzen wir an: Unsere eigene KI-Bild- und Video-Pipeline liefert laufend frische Motive, damit Ihre Meta Werbung nicht ermuedet und der ROAS planbar wächst.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Facebook Ads</Badge>
                    <Badge variant="secondary" className="rounded-full">Instagram Ads</Badge>
                    <Badge variant="secondary" className="rounded-full">Meta Werbung</Badge>
                    <Badge variant="secondary" className="rounded-full">KI Ads</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Meta Ads mit KI auf einen Blick</CardTitle>
                    <CardDescription>Was ein Kampagnen-Setup mit der KI Kanzlei ausmacht.</CardDescription>
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

          {/* LEISTUNGEN: BENTO */}
          <section id="leistungen" className="py-14 md:py-20 scroll-mt-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Was wir bei Meta Ads mit KI machen</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Von KI-Creatives über Targeting bis zum DSGVO-konformen Tracking, alles aus einer Hand.</p>
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
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Für wen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Meta Ads mit KI für Ihr Geschäft</h2>
                <p className="text-lg text-muted-foreground">Waehlen Sie Ihren Bereich, wir zeigen, wie Facebook und Instagram Werbung bei Ihnen liefert.</p>
              </div>
              <Tabs defaultValue="ecommerce" className="w-full">
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

          {/* REIFEGRAD: clean Diagramm via divs */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Standortbestimmung</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Wo steht Ihre Meta Werbung?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Jedes Setup beginnt mit einer ehrlichen Einordnung. Unser Reifegradmodell zeigt, welcher nächste Schritt für Sie realistisch ist.</p>
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
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Im Vergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">KI Kanzlei vs. Boost-Button, Freelancer & klassische Agentur</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Vier Wege, Meta Ads zu schalten, mit sehr unterschiedlichen Ergebnissen. Worauf es bei der Wahl wirklich ankommt.</p>
              </div>
              <Card className="border-2 overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[18%] font-bold text-foreground">Kriterium</TableHead>
                      <TableHead className="text-muted-foreground">Boost-Button</TableHead>
                      <TableHead className="text-muted-foreground">Freelancer</TableHead>
                      <TableHead className="text-muted-foreground">Klassische Agentur</TableHead>
                      <TableHead className="text-primary font-bold">KI Kanzlei</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bigComparison.map((r, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{r.feature}</TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          <span className="inline-flex items-start gap-1.5"><X className="w-3.5 h-3.5 text-muted-foreground/60 mt-0.5 shrink-0" />{r.boost}</span>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          <span className="inline-flex items-start gap-1.5"><X className="w-3.5 h-3.5 text-muted-foreground/60 mt-0.5 shrink-0" />{r.freelancer}</span>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          <span className="inline-flex items-start gap-1.5"><X className="w-3.5 h-3.5 text-muted-foreground/60 mt-0.5 shrink-0" />{r.agency}</span>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Womit wir Ihre Facebook & Instagram Ads umsetzen</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Von der KI-Creative-Produktion bis zum serverseitigen Tracking, das ist unser Stack für planbare Performance.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Unser Meta Ads Prozess im Detail</h2>
                <p className="text-lg text-muted-foreground">Kein Boost-und-hoffen, sondern vier klar definierte Schritte mit konkreten Ergebnissen.</p>
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
              <div className="mt-10 rounded-2xl border-2 border-primary/20 bg-primary/5 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold mb-1">Tiefe Datenanalyse gewünscht?</h3>
                  <p className="text-sm text-muted-foreground max-w-2xl">Das KI Assessment Center prueft Konten, Zielgruppen und Wettbewerb im Detail und liefert einen konkreten Fahrplan. 490 EUR, bei Beauftragung voll anrechenbar.</p>
                </div>
                <Button size="lg" variant="outline" asChild className="shrink-0">
                  <a href="/ki-assessment">KI Assessment Center</a>
                </Button>
              </div>
            </div>
          </section>

          {/* WARUM KI KANZLEI */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum die KI Kanzlei</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Was uns als Meta Ads Agentur mit KI besonders macht</h2>
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

          {/* ERGEBNISSE */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Ergebnisse</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Was Meta Ads mit KI bewirken</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Mehr Creative-Varianten und sauberes Tracking führen zu messbar besseren Kennzahlen.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                <Card className="border-2 hover-lift">
                  <CardHeader className="pb-3">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2"><BadgeEuro className="w-5 h-5 text-primary" /></div>
                    <CardTitle className="text-lg">Niedrigerer CPA</CardTitle>
                  </CardHeader>
                  <CardContent><p className="text-muted-foreground leading-relaxed text-sm">Mehr getestete Creatives bedeuten guenstigere Kosten pro Ergebnis. Wir senken den CPA Schritt für Schritt, indem nur die Gewinner Budget bekommen.</p></CardContent>
                </Card>
                <Card className="border-2 hover-lift">
                  <CardHeader className="pb-3">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2"><TrendingUp className="w-5 h-5 text-primary" /></div>
                    <CardTitle className="text-lg">Hoehere ROAS</CardTitle>
                  </CardHeader>
                  <CardContent><p className="text-muted-foreground leading-relaxed text-sm">Besseres Targeting und starke Motive heben den Return on Ad Spend. So wird jeder investierte Euro Werbebudget rentabler.</p></CardContent>
                </Card>
                <Card className="border-2 hover-lift">
                  <CardHeader className="pb-3">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2"><Eye className="w-5 h-5 text-primary" /></div>
                    <CardTitle className="text-lg">Weniger Anzeigenmuedigkeit</CardTitle>
                  </CardHeader>
                  <CardContent><p className="text-muted-foreground leading-relaxed text-sm">Weil die KI laufend frische Creatives liefert, sinkt die Frequenz-Ermuedung und Ihre Anzeigen bleiben über Wochen leistungsstark.</p></CardContent>
                </Card>
                <Card className="border-2 hover-lift">
                  <CardHeader className="pb-3">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2"><Filter className="w-5 h-5 text-primary" /></div>
                    <CardTitle className="text-lg">Belastbare Messung</CardTitle>
                  </CardHeader>
                  <CardContent><p className="text-muted-foreground leading-relaxed text-sm">Serverseitiges CAPI-Tracking macht Conversions trotz iOS-Einschraenkungen sichtbar, sauber und DSGVO-konform.</p></CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQ: Meta Ads, Facebook Ads & Instagram Ads mit KI</h2>
                <p className="text-lg text-muted-foreground">Die Fragen, die wir vor fast jedem Kampagnenstart hören, ehrlich beantwortet.</p>
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
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Verwandte Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Die KI hinter Ihren Ad-Creatives</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Unsere Meta Ads leben von starken Bildern, Videos und Automatisierung. Das sind die Leistungen, die sie speisen.</p>
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
