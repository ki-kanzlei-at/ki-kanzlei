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
  Lightbulb,
  PenLine,
  Code2,
  Globe,
  Sparkles,
  Zap,
  Image,
  FileText,
  Palette,
  Server,
  Shield,
  LayoutDashboard,
  MapPin,
  Unlock,
  Users,
  Briefcase,
  Stethoscope,
  Hotel,
  ShoppingCart,
  Factory,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Website mit KI erstellen lassen",
  description:
    "Website mit KI erstellen lassen: schnelle, individuelle KI-Websites mit Next.js und React, KI-generierten Texten und Bildern, SEO und GEO von Anfang an, DSGVO-konform und mit EU-Hosting. Kein Baukasten, kein Lock-in.",
  keywords:
    "KI Website, Website mit KI erstellen, KI Website Generator, KI Webdesign, Homepage mit KI, Website erstellen lassen, KI Webentwicklung, SEO Website, KI Website Österreich, KI Website Deutschland, KI Website Schweiz, KI Webdesign DACH, Website erstellen lassen Deutschland, KI Webentwicklung DACH",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/ki-website" },
};

const faqs = [
  {
    q: "Was kostet es, eine Website mit KI erstellen zu lassen?",
    a: "Das hängt vom Umfang ab, von der einseitigen Landing Page bis zur mehrsprachigen Website mit Onlineshop. Das erste Beratungsgespräch ist kostenlos, danach kalkulieren wir transparent und zum Festpreis. Weil wir KI im Development, beim Texten und bei der Bilderstellung einsetzen, liegen wir spürbar unter klassischen Agenturpreisen, ohne bei Qualität oder Performance zu sparen.",
  },
  {
    q: "Was ist eine KI-Website und was bedeutet Website mit KI erstellen?",
    a: "Eine KI-Website entsteht mit KI-Unterstützung in mehreren Schritten: KI hilft beim Entwurf von Struktur und KI Webdesign, generiert Texte und Bilder und beschleunigt die KI Webentwicklung mit Next.js und React. Wichtig ist die menschliche Kontrolle: Wir prüfen, verfeinern und optimieren jedes Ergebnis. So entsteht aus einer Homepage mit KI keine Massenware, sondern eine individuelle, schnelle und sichtbare Website.",
  },
  {
    q: "Reicht ein KI Website Generator wie Wix ADI nicht aus?",
    a: "Ein KI Website Generator im Baukasten liefert in Minuten ein Ergebnis, das aber wie tausende andere aussieht, oft langsam lädt, schwer für Google zu optimieren ist und Sie an ein Abo bindet. Wir nutzen KI auf einer anderen Ebene: für individuelles Design, sauberen Code und echte Performance. Sie bekommen eine eigenständige Website ohne Lock-in, deren Code Ihnen gehört.",
  },
  {
    q: "Wie lange dauert es, eine Homepage mit KI zu erstellen?",
    a: "Deutlich kürzer als bei einer klassischen Agentur. Durch KI-gestütztes Development und KI-generierte Inhalte ist eine fokussierte Website meist in rund zwei bis vier Wochen live. Umfangreichere Projekte mit Shop oder mehreren Sprachen dauern länger, bleiben aber dank KI schneller als der klassische Weg.",
  },
  {
    q: "Ist eine mit KI erstellte Website gut für SEO und Google?",
    a: "Ja, sogar besser als die meisten Baukasten-Seiten. Wir bauen technisches SEO von Anfang an ein: sauberer, semantischer Code, schnelle Ladezeiten, strukturierte Daten, Sitemap und mobile Optimierung. Die KI-generierten Texte werden auf Ihre Keywords ausgerichtet und redaktionell geprüft, damit Ihre SEO Website bei Google rankt statt unterzugehen.",
  },
  {
    q: "Was ist GEO und warum ist Sichtbarkeit in ChatGPT wichtig?",
    a: "GEO steht für Generative Engine Optimization, also die Optimierung für KI-Antwortmaschinen wie ChatGPT, Perplexity und Google AI Overviews. Immer mehr Menschen suchen nicht mehr bei Google, sondern fragen direkt eine KI. Wir bereiten Ihre Inhalte so auf, dass diese Systeme Ihre Website verstehen und als Quelle nennen, damit Sie auch in der neuen Suche sichtbar bleiben.",
  },
  {
    q: "Ist eine KI-Website DSGVO-konform und wo wird sie gehostet?",
    a: "Datenschutz ist bei uns Ausgangspunkt, nicht Nachgedanke. Wir hosten in der EU, arbeiten mit verschlüsselter Datenübertragung, datensparsamen Analyse-Tools und schließen einen Auftragsverarbeitungsvertrag ab. So ist Ihre Website DSGVO-konform, anders als viele Baukästen mit Servern in den USA.",
  },
  {
    q: "Kann ich die Website danach selbst pflegen?",
    a: "Ja. Wir binden ein einfaches Content-Management-System ein, mit dem Sie Texte, Bilder und neue Seiten ohne Programmierkenntnisse selbst ändern. Auf Wunsch übernehmen wir die laufende Pflege oder ergänzen eine KI-gestützte Inhaltspflege, etwa für Blog und News, damit Ihre Website ohne Aufwand aktuell bleibt.",
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
  name: "Website mit KI erstellen",
  serviceType: "KI Webdesign & KI Webentwicklung",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "Website mit KI erstellen lassen: individuelle, schnelle KI-Websites mit Next.js und React, KI-generierten Texten und Bildern, SEO und GEO von Anfang an, DSGVO-konform und mit EU-Hosting.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const heroPhases = [
  { icon: Lightbulb, step: "01", label: "Konzept & Strategie", time: "Tag 1, kostenlos", desc: "Ziele, Zielgruppe und Seitenstruktur klären, bevor eine Zeile Code entsteht." },
  { icon: PenLine, step: "02", label: "KI-Design & Content", time: "Woche 1", desc: "Individuelles Design, KI-generierte Texte und Bilder, redaktionell verfeinert." },
  { icon: Code2, step: "03", label: "KI Webentwicklung", time: "Woche 1 bis 3", desc: "Schnelle Umsetzung mit Next.js und React, SEO und GEO von Anfang an eingebaut." },
  { icon: Rocket, step: "04", label: "Go-Live & Sichtbarkeit", time: "Woche 3 bis 4", desc: "Launch auf EU-Hosting, sichtbar in Google und in KI-Antwortmaschinen." },
];

const stats = [
  { value: "90+/100", label: "PageSpeed-Score dank Next.js" },
  { value: "2 bis 4", label: "Wochen bis zur fertigen Website" },
  { value: "100%", label: "DSGVO-konform mit EU-Hosting" },
  { value: "0 EUR", label: "fürs erste Beratungsgespräch" },
];

const services = [
  { icon: Palette, title: "Individuelles KI Webdesign", description: "Kein Template von der Stange: Wir gestalten Ihr Webdesign individuell und KI-gestützt, abgestimmt auf Marke, Zielgruppe und Conversion. Modern, klar und auf jedem Gerät überzeugend, statt austauschbarer Baukasten-Optik." },
  { icon: FileText, title: "KI-generierte Texte", description: "Suchmaschinenstarke Texte, mit KI erstellt und von uns redaktionell verfeinert, ausgerichtet auf Ihre Keywords und Ihre Sprache." },
  { icon: Image, title: "KI-Bilder & Visuals", description: "Passende Bilder, Grafiken und Illustrationen werden mit KI generiert, statt teurer Stockfotos oder leerer Platzhalter." },
  { icon: Search, title: "SEO von Anfang an", description: "Technisches SEO ist eingebaut, nicht aufgesetzt: sauberer Code, strukturierte Daten, Sitemap und Ladezeiten, die Google belohnt." },
  { icon: Globe, title: "GEO für KI-Antwortmaschinen", description: "Wir machen Ihre Website sichtbar in ChatGPT, Perplexity und Google AI, damit Sie auch dort gefunden werden, wo heute gesucht wird." },
  { icon: Zap, title: "Blitzschnelle Ladezeiten", description: "Mit Next.js und React erreichen wir Top-Werte bei den Core Web Vitals. Schnelle Seiten bedeuten bessere Rankings und mehr Conversions." },
  { icon: LayoutDashboard, title: "CMS & einfache Pflege", description: "Über ein einfaches Content-Management-System ändern Sie Texte und Bilder selbst, ganz ohne Programmierkenntnisse." },
  { icon: Shield, title: "DSGVO & EU-Hosting", description: "Rechtssicher von der ersten Minute: Hosting in der EU, datensparsame Tools und ein Auftragsverarbeitungsvertrag inklusive." },
];

const maturity = [
  { level: 1, fill: 1, title: "Keine oder veraltete Website", desc: "Eine digitale Visitenkarte aus dem letzten Jahrzehnt oder gar keine Präsenz. Hier setzt das Erstgespräch an." },
  { level: 2, fill: 2, title: "Baukasten-Seite", desc: "Mit Wix oder Jimdo schnell gebaut, aber langsam, austauschbar und schwer bei Google auffindbar." },
  { level: 3, fill: 3, title: "Individuelle Profi-Website", desc: "Eigenes Design, sauberer Code, gute Ladezeiten und solides SEO, von einer Agentur umgesetzt." },
  { level: 4, fill: 4, title: "KI-optimierte Website", desc: "Sichtbar in Google und in KI-Antwortmaschinen, mit KI-gepflegten Inhalten und Top-Performance." },
];

const bigComparison = [
  { feature: "Design", baukasten: "Vorlagen, schnell austauschbar", agentur: "Individuell, aber teuer und langwierig", kanzlei: "Individuell und KI-gestützt, in Tagen statt Monaten" },
  { feature: "Ladezeit & Performance", baukasten: "Oft langsam durch unnötigen Ballast", agentur: "Stark abhängig von der Umsetzung", kanzlei: "Next.js, Top Core Web Vitals" },
  { feature: "SEO", baukasten: "Technisch eingeschränkt", agentur: "Häufig Aufpreis und nachgelagert", kanzlei: "Von Anfang an fest eingebaut" },
  { feature: "Sichtbar in ChatGPT (GEO)", baukasten: "Nicht vorgesehen", agentur: "Selten ein Thema", kanzlei: "Standard, gezielt GEO-optimiert" },
  { feature: "Texte & Bilder", baukasten: "Selbst erstellen", agentur: "Texter und Fotograf kosten extra", kanzlei: "KI-generiert und inklusive" },
  { feature: "Lock-in", baukasten: "Voll im Abo-System gefangen", agentur: "Teils proprietäre Systeme", kanzlei: "Kein Lock-in, der Code gehört Ihnen" },
  { feature: "Datenschutz", baukasten: "Oft Server in den USA", agentur: "Unterschiedlich gehandhabt", kanzlei: "DSGVO-konform mit EU-Hosting" },
  { feature: "Pflege", baukasten: "Selbst, technisch eingeschränkt", agentur: "Meist kostenpflichtiger Wartungsvertrag", kanzlei: "Einfaches CMS oder KI-gestützte Pflege" },
];

const industries = [
  { value: "kmu", label: "KMU", icon: Users, head: "KMU & Selbstständige", text: "Eine professionelle Website, die neue Kunden bringt, ohne dass Sie selbst zum Webdesigner werden müssen. Wir liefern eine schnelle, individuelle Homepage mit KI, die Vertrauen schafft und gefunden wird." },
  { value: "service", label: "Dienstleister", icon: Briefcase, head: "Dienstleister & Beratung", text: "Klare Positionierung, überzeugende Texte und ein Design, das Kompetenz ausstrahlt. Mit Terminbuchung, Kontaktstrecken und SEO, das Anfragen statt nur Klicks bringt." },
  { value: "health", label: "Gesundheit", icon: Stethoscope, head: "Ärzte & Praxen", text: "Eine barrierearme, DSGVO-konforme Praxis-Website mit Online-Terminanfrage, klaren Informationen und schnellen Ladezeiten, die auch am Handy überzeugt." },
  { value: "hotel", label: "Hotellerie", icon: Hotel, head: "Hotels & Gastronomie", text: "Eine Website, die Gäste in Buchungen verwandelt: ansprechende KI-Bilder, mehrsprachige Inhalte und eine schnelle, mobile Buchungsstrecke." },
  { value: "shop", label: "E-Commerce", icon: ShoppingCart, head: "Onlineshop & E-Commerce", text: "Ein performanter Onlineshop mit KI-generierten Produkttexten, sauberem SEO und schnellen Ladezeiten, der für Conversions gebaut ist." },
  { value: "trade", label: "Handwerk", icon: Factory, head: "Handwerk & lokale Betriebe", text: "Lokale Sichtbarkeit, die wirkt: optimiert für die Suche in Ihrer Region und für KI-Antwortmaschinen, damit Sie vor Ort gefunden und beauftragt werden." },
];

const toolbox = [
  { icon: Code2, name: "Next.js & React", desc: "Modernes Framework für blitzschnelle, sichere und skalierbare Websites, die Google und Nutzer lieben." },
  { icon: Sparkles, name: "KI-Content-Pipeline", desc: "Sprachmodelle und Bild-KI liefern Texte und Visuals, die wir redaktionell verfeinern, statt sie ungeprüft zu übernehmen." },
  { icon: Search, name: "Technisches SEO", desc: "Saubere Struktur, strukturierte Daten, Sitemaps und optimierte Core Web Vitals als festes Fundament." },
  { icon: Globe, name: "GEO-Optimierung", desc: "Inhalte so aufbereitet, dass ChatGPT, Perplexity und Google AI Ihre Website verstehen und als Quelle nennen." },
  { icon: LayoutDashboard, name: "Headless CMS", desc: "Inhalte einfach selbst pflegen, ohne Code anzufassen, mit voller Kontrolle über Texte, Bilder und Seiten." },
  { icon: Server, name: "EU-Hosting & DSGVO", desc: "Hosting in der EU, verschlüsselt und datensparsam, mit Auftragsverarbeitungsvertrag und ohne US-Tracking." },
];

const steps = [
  { step: "01", icon: Phone, title: "Kostenloses Erstgespräch", time: "30 Minuten", desc: "Wir klären Ziele, Zielgruppe und Wettbewerb, schauen uns Ihre bestehende Website an und legen gemeinsam fest, was die neue Seite leisten soll. Ohne Verpflichtung und ohne Verkaufsdruck." },
  { step: "02", icon: PenLine, title: "KI-Design & Content", time: "Woche 1", desc: "Wir entwerfen Layout und Design und erstellen Texte und Bilder mit KI, abgestimmt auf Ihre Keywords und Marke. Sie sehen früh einen klickbaren Entwurf und geben Feedback." },
  { step: "03", icon: Code2, title: "KI Webentwicklung", time: "Woche 1 bis 3", desc: "Wir setzen die Website mit Next.js und React um, mit eingebautem SEO, GEO und blitzschnellen Ladezeiten. Sauberer Code statt Baukasten-Ballast, voll in Ihrem Besitz." },
  { step: "04", icon: Rocket, title: "Go-Live & Betreuung", time: "ab Woche 3", desc: "Wir gehen auf EU-Hosting live, richten Analyse und Monitoring ein und übergeben das CMS. Auf Wunsch übernehmen wir die laufende Pflege und Weiterentwicklung." },
];

const usps = [
  { icon: Zap, badge: "Schnell", title: "Live in Wochen, nicht Monaten", desc: "KI-gestütztes Development und KI-generierte Inhalte verkürzen die Bauzeit drastisch, ohne dass die Qualität leidet." },
  { icon: Unlock, badge: "Unabhängig", title: "Kein Lock-in", desc: "Kein Baukasten-Abo, keine proprietäre Falle. Sie erhalten eine eigenständige Website, deren Code und Inhalte Ihnen gehören." },
  { icon: Globe, badge: "Sichtbar", title: "Google und KI-Suche", desc: "SEO und GEO sind von Anfang an eingebaut, damit Sie klassisch bei Google und in KI-Antwortmaschinen wie ChatGPT gefunden werden." },
  { icon: Shield, badge: "Rechtssicher", title: "DSGVO & Made in Austria", desc: "Als österreichisches Unternehmen hosten wir in der EU und planen jede Website datenschutzkonform, von Anfang an." },
];

const related = [
  { href: "/leistungen/ki-softwareentwicklung", icon: Code2, tag: "Software", title: "KI Softwareentwicklung", desc: "Mehr als eine Website: individuelle Webanwendungen und Software, KI-gestützt entwickelt." },
  { href: "/leistungen/generative-engine-optimization", icon: Sparkles, tag: "GEO", title: "Generative Engine Optimization", desc: "Sichtbar werden in ChatGPT, Perplexity und Google AI, das natürliche Upgrade zu Ihrer neuen Website." },
  { href: "/leistungen/meta-ads-ki", icon: Target, tag: "Werbung", title: "Meta Ads mit KI", desc: "Bringen Sie sofort qualifizierten Traffic auf Ihre neue Website, mit KI-optimierten Kampagnen." },
];

const glanceData: [string, string][] = [
  ["Ergebnis", "individuelle, schnelle Website"],
  ["Erstgespräch", "kostenlos, 30 Minuten"],
  ["Bauzeit", "rund 2 bis 4 Wochen"],
  ["Technologie", "Next.js, React, Headless CMS"],
  ["Sichtbarkeit", "SEO und GEO inklusive"],
  ["Datenschutz", "DSGVO, EU-Hosting, Made in Austria"],
];

export default function Page() {
  return (
    <>
      <Script id="faq-ki-website" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-ki-website" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO: Build-Roadmap */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                    KI Website, Website mit KI erstellen
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-primary">Website mit KI erstellen</span> lassen, schnell und individuell
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Wir bauen moderne, blitzschnelle Websites mit KI-gestütztem Development, KI-generierten Texten und Bildern, von Anfang an optimiert für Google und für KI-Antwortmaschinen wie ChatGPT. Individuell statt Baukasten, DSGVO-konform und ohne Lock-in.
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
                    <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-primary" /> EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Build-Visual */}
                <Card className="relative border-2 shadow-xl shadow-primary/5 overflow-hidden">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-primary tracking-wide">VON DER IDEE ONLINE</div>
                        <CardTitle className="text-xl">So entsteht Ihre KI-Website</CardTitle>
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
                      <span className="text-sm text-primary font-semibold">live in rund 2 bis 4 Wochen</span>
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was heißt Website mit KI erstellen?</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Eine <strong className="text-foreground">Website mit KI erstellen</strong> bedeutet nicht, einen Knopf zu drücken und ein fertiges Ergebnis zu nehmen. Wir setzen künstliche Intelligenz dort ein, wo sie wirklich hilft: beim Entwurf der Struktur, beim <strong className="text-foreground">KI Webdesign</strong>, beim Schreiben von Texten, beim Erzeugen von Bildern und in der <strong className="text-foreground">KI Webentwicklung</strong> mit Next.js und React.
                    </p>
                    <p>
                      Der Unterschied zu einem reinen <strong className="text-foreground">KI Website Generator</strong> liegt in der menschlichen Kontrolle. Jeder Text wird redaktionell geprüft, jedes Bild auf Marke und Aussage abgestimmt, jede Seite auf Geschwindigkeit und Auffindbarkeit optimiert. So wird aus einer Homepage mit KI kein Massenprodukt, sondern eine individuelle Website mit Substanz.
                    </p>
                    <p>
                      Entscheidend ist die Sichtbarkeit in beiden Welten: in der klassischen Google-Suche per SEO und in den neuen KI-Antwortmaschinen per GEO. Eine Website, die heute gebaut wird, muss für ChatGPT und Co. genauso verständlich sein wie für Suchmaschinen.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">KI Website</Badge>
                    <Badge variant="secondary" className="rounded-full">KI Webdesign</Badge>
                    <Badge variant="secondary" className="rounded-full">KI Webentwicklung</Badge>
                    <Badge variant="secondary" className="rounded-full">SEO Website</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">KI-Website auf einen Blick</CardTitle>
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
            caption="Moderner Tech-Stack statt Baukasten-Ballast"
            items={[
              { slug: "nextdotjs", name: "Next.js" },
              { slug: "react", name: "React" },
              { slug: "python", name: "Python" },
              { slug: "openai", name: "OpenAI" },
            ]}
          />

          {/* LEISTUNGEN: BENTO */}
          <section id="leistungen" className="py-14 md:py-20 scroll-mt-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Was in Ihrer KI-Website steckt</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Vom KI Webdesign über Inhalte bis zum Hosting, alles aus einer Hand und sauber aufeinander abgestimmt.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">KI-Websites für Ihre Branche</h2>
                <p className="text-lg text-muted-foreground">Wählen Sie Ihren Bereich, wir zeigen, was eine moderne Website bei Ihnen leisten kann.</p>
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

          {/* WEBSITE-REIFEGRAD */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Standortbestimmung</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Wo steht Ihre Website heute?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Vier Reifegrade, von der veralteten Seite bis zur KI-optimierten Website. Wir holen Sie dort ab, wo Sie stehen.</p>
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
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Baukasten vs. Agentur vs. KI Kanzlei</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Drei Wege zur neuen Website im Vergleich</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Baukasten wie Wix oder Jimdo, klassische Agentur oder KI-gestützter Ansatz. Worauf es bei der Wahl wirklich ankommt.</p>
              </div>
              <Card className="border-2 overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[22%] font-bold text-foreground">Kriterium</TableHead>
                      <TableHead className="text-muted-foreground">Baukasten (Wix/Jimdo)</TableHead>
                      <TableHead className="text-muted-foreground">Klassische Agentur</TableHead>
                      <TableHead className="text-primary font-bold">KI Kanzlei</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bigComparison.map((r, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{r.feature}</TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          <span className="inline-flex items-start gap-1.5"><X className="w-3.5 h-3.5 text-muted-foreground/60 mt-0.5 shrink-0" />{r.baukasten}</span>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          <span className="inline-flex items-start gap-1.5"><X className="w-3.5 h-3.5 text-muted-foreground/60 mt-0.5 shrink-0" />{r.agentur}</span>
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
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Tech-Stack</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Womit wir Ihre Website bauen</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Moderne, bewährte Technologie statt geschlossener Baukasten-Systeme. Schnell, sicher und voll in Ihrem Besitz.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">In vier Schritten zur neuen Website</h2>
                <p className="text-lg text-muted-foreground">Kein endloses Projekt, sondern ein klarer Weg von der Idee bis zum Go-Live, mit KI als Beschleuniger.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold">Warum Ihre Website bei uns richtig ist</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQ: Website mit KI erstellen</h2>
                <p className="text-lg text-muted-foreground">Die häufigsten Fragen rund um KI-Websites, ehrlich beantwortet.</p>
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
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Passt dazu</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Mehr aus Ihrer neuen Website holen</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Eine starke Website ist der Anfang. Das sind die Leistungen, mit denen daraus messbares Wachstum wird.</p>
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
