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
  Search,
  Rocket,
  TrendingUp,
  Target,
  Brain,
  Quote,
  Sparkles,
  Briefcase,
  Scale,
  Stethoscope,
  Hotel,
  ShoppingCart,
  Building2,
  Layers,
  Shield,
  Bot,
  FileCode,
  GraduationCap,
  Database,
  Gauge,
  LineChart,
  Map,
  Network,
  BookOpen,
  Eye,
  ListChecks,
  MessageSquare,
  Code2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "GEO: Generative Engine Optimization & AI SEO",
  description:
    "Generative Engine Optimization (GEO) und AEO: Wir machen Ihr Unternehmen in ChatGPT, Perplexity, Google AI Overviews und Claude sichtbar und zitierbar. AI SEO, LLM SEO, llms.txt und Monitoring der KI-Sichtbarkeit, DSGVO-konform.",
  keywords:
    "Generative Engine Optimization, GEO, GEO Optimierung, AI SEO, ChatGPT SEO, AEO, Answer Engine Optimization, LLM SEO, KI Suchmaschinenoptimierung, in ChatGPT gefunden werden, GEO Österreich, AI SEO Deutschland, GEO Schweiz, generative Suchmaschinenoptimierung DACH",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/generative-engine-optimization" },
};

const faqs = [
  {
    q: "Was ist Generative Engine Optimization (GEO)?",
    a: "Generative Engine Optimization (GEO) ist die Optimierung von Inhalten, Entitäten und Quellen-Autorität, damit ein Unternehmen in den Antworten generativer KI-Systeme wie ChatGPT, Perplexity, Google AI Overviews, Gemini und Claude auftaucht, empfohlen und korrekt zitiert wird. Während klassische SEO auf Rankings in den blauen Links von Google abzielt, sorgt GEO dafür, dass Sie selbst Teil der Antwort werden, die die KI dem Nutzer gibt.",
  },
  {
    q: "Was ist der Unterschied zwischen GEO, AEO und klassischer SEO?",
    a: "Klassische SEO bringt Sie auf Platz 1 der organischen Google-Trefferliste. Answer Engine Optimization (AEO) optimiert für direkte Antworten, etwa Featured Snippets, People Also Ask und Sprachassistenten. Generative Engine Optimization (GEO) geht einen Schritt weiter und optimiert für die generierten Antworten der LLMs selbst, also dafür, in ChatGPT, Perplexity oder AI Overviews als Quelle genannt und empfohlen zu werden. In der Praxis greifen die drei Ebenen ineinander, GEO ist die neue Schicht neben SEO, nicht ihr Ersatz.",
  },
  {
    q: "Wie kann man in ChatGPT gefunden werden?",
    a: "In ChatGPT und anderen LLMs gefunden zu werden gelingt über mehrere Hebel: klar strukturierte, zitierfähige Inhalte, eine saubere Entitäten- und Markenstrategie, korrektes schema.org Markup, eine llms.txt, hochwertige Erwähnungen und Verlinkungen auf vertrauenswürdigen Quellen sowie Konsistenz Ihrer Kernaussagen über das ganze Web hinweg. Wir analysieren, zu welchen Fragen die KI heute antwortet, und bauen Ihre Inhalte so um, dass die Modelle Sie als verlässliche Quelle aufgreifen.",
  },
  {
    q: "Was ist AI SEO beziehungsweise LLM SEO?",
    a: "AI SEO und LLM SEO sind verbreitete Bezeichnungen für dasselbe Ziel wie GEO: Sichtbarkeit in KI-Antworten statt nur in klassischen Suchergebnissen. Manchmal wird AI SEO auch im Sinne von KI-gestützter Suchmaschinenoptimierung verwendet, also dem Einsatz von KI-Tools im SEO-Prozess. Wir meinen damit primär die Optimierung für ChatGPT, Perplexity, Gemini und Co., damit Ihre Marke in deren generierten Antworten erscheint.",
  },
  {
    q: "Wofür ist eine llms.txt gut?",
    a: "Eine llms.txt ist eine maschinenlesbare Datei im Wurzelverzeichnis Ihrer Website, die KI-Systemen kuratiert und kompakt zeigt, welche Inhalte besonders relevant und wie sie strukturiert sind. Sie ergänzt robots.txt und Sitemap und hilft generativen Engines, Ihre wichtigsten Seiten, Definitionen und Fakten korrekt zu erfassen. Wir erstellen und pflegen Ihre llms.txt als Teil der technischen GEO-Grundlage.",
  },
  {
    q: "Wie misst man die Sichtbarkeit in KI-Antworten?",
    a: "Wir messen GEO über mehrere Kennzahlen: AI-Sichtbarkeit (zu welchen Fragen werden Sie überhaupt genannt), Citations (wie oft die KI Ihre Seite als Quelle verlinkt), Share of Voice in KI-Antworten (Ihr Anteil gegenüber dem Wettbewerb) sowie die Korrektheit der über Sie wiedergegebenen Fakten. Dafür stellen wir ein Monitoring auf, das ChatGPT, Perplexity, Gemini und AI Overviews regelmäßig zu Ihren Kernthemen befragt und die Entwicklung dokumentiert.",
  },
  {
    q: "Ersetzt GEO die klassische SEO?",
    a: "Nein. GEO ersetzt SEO nicht, es kommt als zusätzliche Ebene dazu. Viele KI-Antworten stützen sich weiterhin auf Inhalte, die auch klassisch gut ranken, und eine saubere technische Basis nützt beiden Welten. Sinnvoll ist eine integrierte Strategie: solide SEO-Grundlagen plus gezielte GEO-Maßnahmen für Struktur, Entitäten, Zitierbarkeit und Quellen-Autorität. So bleiben Sie sowohl in der klassischen Suche als auch in den neuen KI-Antworten präsent.",
  },
  {
    q: "Für wen lohnt sich Generative Engine Optimization?",
    a: "GEO lohnt sich für alle, deren Zielgruppe zunehmend KI-Assistenten statt klassischer Suche nutzt, um Anbieter, Produkte oder Fachwissen zu finden. Besonders relevant ist es für beratungsintensive Dienstleistungen, B2B-Anbieter, lokale Spezialisten und Marken in umkämpften Märkten. Wer heute in den Empfehlungen von ChatGPT und Perplexity fehlt, verliert Sichtbarkeit genau dort, wo Kaufentscheidungen künftig vorbereitet werden.",
  },
  {
    q: "Ist GEO DSGVO-konform umsetzbar?",
    a: "Ja. GEO arbeitet mit öffentlich zugänglichen Inhalten, Struktur und Markup Ihrer eigenen Website sowie der Beobachtung öffentlicher KI-Antworten. Es werden keine personenbezogenen Daten Dritter verarbeitet, die das erfordern würden. Eingesetzte Tools wählen wir datenschutzfreundlich, mit EU-Hosting wo möglich, und dokumentieren die Verarbeitung sauber. Wo KI im Prozess genutzt wird, achten wir auf DSGVO und EU AI Act.",
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
  name: "Generative Engine Optimization (GEO)",
  serviceType: "Generative Engine Optimization, AEO & AI SEO",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "Generative Engine Optimization (GEO) und Answer Engine Optimization (AEO) für den DACH-Raum: Sichtbarkeit und korrekte Zitierung in ChatGPT, Perplexity, Google AI Overviews, Gemini und Claude, inklusive llms.txt, schema.org und Monitoring der KI-Sichtbarkeit.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const heroPhases = [
  { icon: Search, step: "01", label: "GEO Audit & KI-Check", time: "30 Min., kostenlos", desc: "Wir prüfen, ob und wie ChatGPT, Perplexity und AI Overviews Sie heute nennen." },
  { icon: Map, step: "02", label: "GEO-Strategie & Roadmap", time: "Woche 1 bis 2", desc: "Prioritäre Themen, Entitäten und zitierfähige Inhalte mit klarem Fahrplan." },
  { icon: Rocket, step: "03", label: "Umsetzung & llms.txt", time: "Woche 2 bis 6", desc: "Content, schema.org, Entitäten und llms.txt produktiv ausgerollt." },
  { icon: TrendingUp, step: "04", label: "Monitoring & Skalierung", time: "laufend", desc: "AI-Sichtbarkeit, Citations und Share of Voice messen und ausbauen." },
];

const stats = [
  { value: "5 Engines", label: "ChatGPT, Perplexity, AI Overviews, Gemini, Claude" },
  { value: "60%+", label: "der Suchen enden zunehmend ohne klassischen Klick" },
  { value: "0 Klicks", label: "bis zur Antwort: Sie sind die Quelle, nicht Link 7" },
  { value: "100%", label: "DSGVO- und EU-AI-Act-bewusste Umsetzung" },
];

const services = [
  { icon: Search, title: "GEO Audit & AI-Sichtbarkeits-Analyse", description: "Wir testen systematisch, zu welchen Fragen ChatGPT, Perplexity, Gemini und Google AI Overviews antworten und ob Ihre Marke genannt, empfohlen oder ignoriert wird. Sie erhalten eine ehrliche Bestandsaufnahme Ihrer KI-Sichtbarkeit samt Lücken gegenüber dem Wettbewerb." },
  { icon: BookOpen, title: "Content- & Zitierbarkeits-Optimierung", description: "Wir strukturieren Inhalte so, dass LLMs sie leicht extrahieren und zitieren: klare Definitionen, Antworten direkt am Anfang, Listen, Fakten und eine zitierfähige Sprache, die Modelle gerne übernehmen." },
  { icon: Network, title: "Entitäten- & Markenstrategie", description: "Wir machen aus Ihrem Unternehmen eine klar definierte Entität: konsistente Kernaussagen, Verknüpfungen und Belege, damit die Modelle wissen, wer Sie sind und wofür Sie stehen." },
  { icon: Code2, title: "Strukturierte Daten & schema.org", description: "Organization, Service, FAQPage, Article und Co. sauber ausgezeichnet, damit Suchmaschinen und KI-Systeme Ihre Inhalte maschinenlesbar und eindeutig erfassen." },
  { icon: FileCode, title: "llms.txt & technische GEO-Basis", description: "Wir erstellen Ihre llms.txt, optimieren robots.txt und Sitemap und stellen sicher, dass KI-Crawler Ihre wichtigsten Inhalte zuverlässig finden und korrekt einordnen." },
  { icon: Quote, title: "Quellen-Autorität & Brand Mentions", description: "Wir stärken die Erwähnungen Ihrer Marke auf vertrauenswürdigen Quellen, denn LLMs gewichten Konsens und Autorität. Mehr verlässliche Nennungen bedeuten mehr Empfehlungen." },
  { icon: Eye, title: "AI-Mention-Monitoring", description: "Ein laufendes Monitoring befragt die wichtigsten Engines regelmäßig zu Ihren Themen und dokumentiert, wie oft und wie korrekt Sie genannt und zitiert werden." },
  { icon: Shield, title: "GEO Governance & EU AI Act", description: "Wo KI im Prozess genutzt wird, achten wir auf DSGVO, EU-Hosting und EU AI Act, damit Ihre KI-Sichtbarkeit rechtssicher und nachvollziehbar bleibt." },
];

const maturity = [
  { level: 1, fill: 1, title: "Unsichtbar in KI", desc: "ChatGPT und Perplexity kennen Sie nicht oder geben Falsches wieder. Hier setzt das GEO Audit an." },
  { level: 2, fill: 2, title: "Vereinzelt genannt", desc: "Sie tauchen zu einzelnen Fragen auf, aber unstrukturiert, selten zitiert und ohne Steuerung." },
  { level: 3, fill: 3, title: "Sichtbar & zitiert", desc: "Zu Ihren Kernthemen werden Sie regelmäßig genannt und als Quelle verlinkt, mit gemessenem Share of Voice." },
  { level: 4, fill: 4, title: "Empfohlene Autorität", desc: "Die KI empfiehlt Sie proaktiv als Anbieter und gibt Ihre Aussagen korrekt wieder, über mehrere Engines hinweg." },
];

const bigComparison = [
  { feature: "Ziel", seo: "Platz 1 in den blauen Links", aeo: "Direkte Antwort, Snippet, Voice", geo: "Teil der KI-generierten Antwort sein" },
  { feature: "Wo sichtbar", seo: "Google-Trefferliste", aeo: "Featured Snippets, People Also Ask", geo: "ChatGPT, Perplexity, AI Overviews, Gemini, Claude" },
  { feature: "Erfolgseinheit", seo: "Ranking & Klicks", aeo: "Antwortbox-Platzierung", geo: "Citations & Empfehlungen in der Antwort" },
  { feature: "Optimiert wird auf", seo: "Keywords & Backlinks", aeo: "Fragen & klare Antworten", geo: "Entitäten, Zitierbarkeit, Quellen-Autorität" },
  { feature: "Technische Basis", seo: "robots.txt, Sitemap, Core Web Vitals", aeo: "schema.org, FAQ-Markup", geo: "llms.txt, schema.org, Entitäten-Markup" },
  { feature: "Kennzahl", seo: "Position & organischer Traffic", aeo: "Snippet-Anteil", geo: "AI-Sichtbarkeit & Share of Voice in KI-Antworten" },
];

const tabContent = [
  { value: "geo", label: "GEO", icon: Sparkles, head: "Generative Engine Optimization", text: "GEO optimiert dafür, in den generierten Antworten der großen KI-Modelle vorzukommen. Statt um einen Listenplatz geht es darum, selbst als Quelle und Empfehlung Teil dessen zu sein, was die KI dem Nutzer schreibt. Hebel sind Struktur, Entitäten, Zitierbarkeit, schema.org, llms.txt und Quellen-Autorität." },
  { value: "aeo", label: "AEO", icon: MessageSquare, head: "Answer Engine Optimization", text: "AEO optimiert für direkte Antworten in Suchmaschinen und Assistenten: Featured Snippets, People Also Ask und Voice. Klare Fragen, knappe Antworten am Textanfang und FAQ-Markup sind hier entscheidend. AEO ist die Brücke zwischen klassischer SEO und GEO und nutzt vielen KI-Antworten als Grundlage." },
  { value: "seo", label: "Klassische SEO", icon: Search, head: "Klassische Suchmaschinenoptimierung", text: "Klassische SEO bringt Sie über Keywords, Inhalte und Backlinks auf gute Positionen in der organischen Google-Trefferliste. Sie bleibt das Fundament, denn viele KI-Systeme stützen ihre Antworten weiterhin auf Inhalte, die auch klassisch ranken. GEO ersetzt SEO nicht, es baut darauf auf." },
  { value: "aiseo", label: "AI SEO / LLM SEO", icon: Brain, head: "AI SEO und LLM SEO", text: "AI SEO und LLM SEO sind gängige Bezeichnungen für die Optimierung auf KI-Antworten, also weitgehend Synonyme für GEO. Teils ist auch der Einsatz von KI im SEO-Prozess gemeint. Wir verbinden beide Lesarten: KI-gestützte Analyse plus gezielte Optimierung für die Sichtbarkeit in ChatGPT, Perplexity und Co." },
];

const engines = [
  { icon: Bot, name: "ChatGPT & ChatGPT Search", desc: "Optimierung dafür, in ChatGPT-Antworten genannt und über die integrierte Suche als Quelle zitiert zu werden." },
  { icon: Search, name: "Perplexity", desc: "Perplexity zeigt Quellen prominent an, das macht zitierfähige, klar strukturierte Inhalte besonders wertvoll." },
  { icon: Sparkles, name: "Google AI Overviews & Gemini", desc: "Wir optimieren für die KI-Zusammenfassungen direkt in der Google-Suche und für Antworten in Gemini." },
  { icon: MessageSquare, name: "Claude", desc: "Auch Claude greift auf Web-Inhalte zu, saubere Struktur und Belege erhöhen die Chance, korrekt referenziert zu werden." },
  { icon: Building2, name: "Microsoft Copilot", desc: "Copilot bezieht Antworten aus dem Web-Index, konsistente Marken- und Quellensignale verbessern Ihre Präsenz dort." },
  { icon: Quote, name: "Citations & Share of Voice", desc: "Über alle Engines hinweg messen wir, wie oft und wie korrekt Sie zitiert werden, und steigern Ihren Anteil gezielt." },
];

const steps = [
  { step: "01", icon: Search, title: "Kostenloses GEO-Erstgespräch", time: "30 Minuten", desc: "Wir prüfen live, wie ChatGPT, Perplexity und AI Overviews zu Ihren Kernthemen antworten, und zeigen, wo Sie genannt werden, falsch dargestellt sind oder ganz fehlen. Ohne Verpflichtung, mit ehrlicher Ersteinschätzung." },
  { step: "02", icon: Map, title: "GEO Assessment & Roadmap", time: "Analyse & Fahrplan", desc: "Wir analysieren Inhalte, Entitäten, schema.org und Quellen-Autorität, vergleichen Ihren Share of Voice mit dem Wettbewerb und priorisieren die Themen mit dem höchsten Hebel. Die vertiefte Analyse läuft über unser KI Assessment Center." },
  { step: "03", icon: Rocket, title: "Umsetzung & llms.txt", time: "2 bis 6 Wochen", desc: "Wir optimieren Inhalte auf Zitierbarkeit, schärfen Ihre Entität, ergänzen strukturierte Daten und erstellen Ihre llms.txt. Parallel stärken wir Brand Mentions auf vertrauenswürdigen Quellen." },
  { step: "04", icon: TrendingUp, title: "Monitoring & Skalierung", time: "laufend", desc: "Ein laufendes AI-Mention-Monitoring misst AI-Sichtbarkeit, Citations und Share of Voice über alle Engines. Auf Basis der Daten bauen wir Ihre Präsenz Thema für Thema weiter aus." },
];

const usps = [
  { icon: Layers, badge: "End-to-End", title: "Wir setzen GEO selbst um", desc: "Keine reinen Konzeptfolien: Unser Team optimiert Inhalte, schema.org, Entitäten und llms.txt selbst und richtet das Monitoring ein. Eine Quelle, volle Verantwortung." },
  { icon: Brain, badge: "KI-nativ", title: "Wir verstehen LLMs von innen", desc: "Als KI-Spezialisten wissen wir, wie Modelle Inhalte aufnehmen, gewichten und zitieren. GEO ist für uns angewandte LLM-Praxis, kein nachträglich gelerntes SEO-Add-on." },
  { icon: Shield, badge: "Lokal & vertraut", title: "Österreich & DSGVO-first", desc: "Als österreichisches Unternehmen denken wir DSGVO, EU-Hosting und EU AI Act von Anfang an mit, gerade wenn KI-Tools im Prozess zum Einsatz kommen." },
  { icon: LineChart, badge: "Messbar", title: "AI-Sichtbarkeit statt Bauchgefühl", desc: "Wir definieren klare Kennzahlen, AI-Sichtbarkeit, Citations und Share of Voice, und machen den Fortschritt Ihrer KI-Präsenz nachvollziehbar sichtbar." },
];

const industries = [
  { value: "kmu", label: "KMU", icon: Briefcase, head: "KMU & Mittelstand", text: "Wenn Kunden künftig ChatGPT statt Google fragen, welcher Anbieter in Frage kommt, entscheidet GEO über Ihre Sichtbarkeit. Wir machen Ihr Unternehmen zur Antwort, die die KI gibt, statt zu Link sieben, den niemand mehr öffnet." },
  { value: "legal", label: "Kanzleien", icon: Scale, head: "Rechtsanwälte & Steuerberater", text: "Mandanten recherchieren zunehmend in KI-Assistenten. Wir positionieren Ihre Kanzlei als zitierte Fachquelle zu Ihren Rechts- und Steuerthemen, DSGVO-konform und mit korrekt wiedergegebenen Aussagen." },
  { value: "health", label: "Gesundheit", icon: Stethoscope, head: "Ärzte & Gesundheitswesen", text: "Patienten fragen KI nach Symptomen, Behandlungen und Anbietern. Mit GEO sorgen wir dafür, dass Ihre Praxis und Ihre Fachinhalte verlässlich und korrekt in den Antworten erscheinen." },
  { value: "hotel", label: "Hotellerie", icon: Hotel, head: "Hotels & Gastronomie", text: "Reiseplanung verlagert sich in KI-Assistenten und Perplexity. Wir machen Ihr Haus zur empfohlenen Option, wenn Gäste die KI nach passenden Unterkünften und Erlebnissen fragen." },
  { value: "retail", label: "E-Commerce", icon: ShoppingCart, head: "E-Commerce & Retail", text: "Produktrecherche beginnt heute oft im Chat. Wir optimieren Ihre Produkt- und Markeninhalte so, dass KI-Systeme Ihre Angebote als Empfehlung in ihre Antworten aufnehmen." },
  { value: "b2b", label: "B2B & SaaS", icon: Building2, head: "B2B & SaaS", text: "Im B2B prüfen Entscheider Anbieter zunehmend per KI. Wir verankern Ihre Lösung als zitierte Referenz zu Ihren Kategorien und Use Cases, damit Sie im Auswahlprozess der KI vorkommen." },
];

const related = [
  { href: "/leistungen/ki-wissensdatenbank", icon: Database, tag: "RAG", title: "KI Wissensdatenbank", desc: "Zitierfähiges, strukturiertes Firmenwissen, die ideale Inhaltsbasis für gute GEO-Ergebnisse." },
  { href: "/leistungen/ki-consulting", icon: Target, tag: "Strategie", title: "KI Consulting", desc: "GEO als Teil einer übergreifenden KI-Strategie samt Roadmap und ROI-Betrachtung." },
  { href: "/leistungen/prompt-engineering", icon: MessageSquare, tag: "Prompting", title: "Prompt Engineering", desc: "Saubere Prompts und Inhaltsstrukturen, die LLMs leichter aufgreifen und zitieren." },
];

const glanceData: [string, string][] = [
  ["Ziel", "in KI-Antworten genannt und zitiert werden"],
  ["Engines", "ChatGPT, Perplexity, AI Overviews, Gemini, Claude"],
  ["Audit", "kostenlos, 30 Minuten"],
  ["Kennzahlen", "AI-Sichtbarkeit, Citations, Share of Voice"],
  ["Technik", "schema.org, llms.txt, Entitäten"],
  ["Markt", "DACH-Raum (AT, DE, CH)"],
];

export default function Page() {
  return (
    <>
      <Script id="faq-generative-engine-optimization" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-generative-engine-optimization" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO: 4-Phasen-Roadmap */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                    Generative Engine Optimization, GEO & AEO
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-primary">Generative Engine Optimization</span>, damit die KI Sie empfiehlt
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Klassische SEO bringt Sie in Googles blaue Links. GEO macht Sie zur Antwort, die ChatGPT, Perplexity, Google AI Overviews und Claude geben. Wir optimieren Inhalte, Entitäten, schema.org und llms.txt, damit LLMs Sie nennen und korrekt zitieren.
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
                    <span className="flex items-center gap-1.5"><Network className="w-4 h-4 text-primary" /> EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* GEO-Roadmap-Visual */}
                <Card className="relative border-2 shadow-xl shadow-primary/5 overflow-hidden">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-primary tracking-wide">GEO ROADMAP</div>
                        <CardTitle className="text-xl">Von unsichtbar zu zitiert</CardTitle>
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
                      <span className="text-sm text-primary font-semibold">mehr Citations in KI-Antworten</span>
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was ist Generative Engine Optimization?</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      <strong className="text-foreground">Generative Engine Optimization (GEO)</strong> ist die Disziplin, ein Unternehmen in den Antworten generativer KI-Systeme sichtbar und korrekt zitierbar zu machen, in <strong className="text-foreground">ChatGPT, Perplexity, Google AI Overviews, Gemini und Claude</strong>. Sie ist die neue Schicht neben der klassischen Suchmaschinenoptimierung.
                    </p>
                    <p>
                      Der Unterschied ist grundlegend: Klassische SEO bringt Sie auf gute Positionen in Googles blauen Links. GEO sorgt dafür, dass Sie selbst zur <strong className="text-foreground">Antwort werden, die die KI gibt</strong>, als genannte Quelle und als Empfehlung. Dazu zählt auch <strong className="text-foreground">Answer Engine Optimization (AEO)</strong>, die Optimierung für direkte Antworten und Snippets.
                    </p>
                    <p>
                      Damit Modelle Sie aufgreifen, optimieren wir Inhaltsstruktur, Entitäten, schema.org, Zitierbarkeit, llms.txt, Brand Mentions und Quellen-Autorität. So steigen Ihre KI-Sichtbarkeit, Ihre Citations und Ihr Share of Voice in den Antworten, dort, wo Kaufentscheidungen heute vorbereitet werden.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">GEO Optimierung</Badge>
                    <Badge variant="secondary" className="rounded-full">AI SEO</Badge>
                    <Badge variant="secondary" className="rounded-full">Answer Engine Optimization</Badge>
                    <Badge variant="secondary" className="rounded-full">LLM SEO</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">GEO auf einen Blick</CardTitle>
                    <CardDescription>Was Generative Engine Optimization mit der KI Kanzlei ausmacht.</CardDescription>
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
            caption="Wir optimieren Ihre Sichtbarkeit in den führenden KI-Antwortmaschinen"
            items={[
              { slug: "openai", name: "ChatGPT" },
              { slug: "perplexity", name: "Perplexity" },
              { slug: "googlegemini", name: "Google AI" },
              { slug: "anthropic", name: "Claude" },
              { slug: "meta", name: "Meta AI" },
              { text: "Copilot", name: "Copilot" },
            ]}
          />

          {/* LEISTUNGEN: BENTO */}
          <section id="leistungen" className="py-14 md:py-20 scroll-mt-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Unsere GEO Leistungen</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Vom GEO Audit über Content und schema.org bis zur llms.txt und zum Monitoring der KI-Sichtbarkeit, alles aus einer Hand.</p>
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

          {/* GEO vs AEO vs SEO: TABS */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Die Disziplinen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">GEO, AEO, AI SEO und klassische SEO</h2>
                <p className="text-lg text-muted-foreground">Vier Begriffe, ein Zusammenhang. Wählen Sie eine Disziplin und sehen Sie, wofür sie steht.</p>
              </div>
              <Tabs defaultValue="geo" className="w-full">
                <TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">
                  {tabContent.map((a) => {
                    const Icon = a.icon;
                    return (
                      <TabsTrigger key={a.value} value={a.value} className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border">
                        <Icon className="w-4 h-4 mr-1.5" />{a.label}
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
                {tabContent.map((a) => (
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

          {/* KI-SICHTBARKEITS-REIFEGRAD */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Standortbestimmung</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Wie sichtbar sind Sie in KI-Antworten?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Jede GEO-Strategie beginnt mit einer ehrlichen Einordnung. Unser Reifegradmodell zeigt, wo Sie heute in den Antworten der KI stehen.</p>
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

          {/* GROSSE VERGLEICHS-TABLE: GEO vs AEO vs SEO */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">GEO vs SEO im Vergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Klassische SEO, AEO und GEO direkt gegenübergestellt</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Drei Ebenen der Auffindbarkeit mit unterschiedlichen Zielen. Wo klassische SEO aufhört und GEO beginnt.</p>
              </div>
              <Card className="border-2 overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[20%] font-bold text-foreground">Kriterium</TableHead>
                      <TableHead className="text-muted-foreground">Klassische SEO</TableHead>
                      <TableHead className="text-muted-foreground">AEO</TableHead>
                      <TableHead className="text-primary font-bold">GEO</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bigComparison.map((r, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{r.feature}</TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          <span className="inline-flex items-start gap-1.5"><Search className="w-3.5 h-3.5 text-muted-foreground/60 mt-0.5 shrink-0" />{r.seo}</span>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          <span className="inline-flex items-start gap-1.5"><MessageSquare className="w-3.5 h-3.5 text-muted-foreground/60 mt-0.5 shrink-0" />{r.aeo}</span>
                        </TableCell>
                        <TableCell className="text-sm text-primary font-medium">
                          <span className="inline-flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />{r.geo}</span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </section>

          {/* ENGINES / WO WIR SICHTBAR MACHEN */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Die Engines</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Wo wir Sie sichtbar und zitierbar machen</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">GEO ist nicht auf eine Plattform beschränkt. Wir optimieren über die wichtigsten KI-Antwortsysteme hinweg und messen den Erfolg pro Engine.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {engines.map((t, i) => {
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

          {/* BRANCHEN: TABS */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Für jede Branche</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">GEO für Ihre Branche</h2>
                <p className="text-lg text-muted-foreground">Wählen Sie Ihren Bereich, wir zeigen, warum KI-Sichtbarkeit gerade dort zählt.</p>
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

          {/* PROZESS: Timeline */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="max-w-2xl mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Der Ablauf</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Unser GEO Prozess im Detail</h2>
                <p className="text-lg text-muted-foreground">Kein Buzzword-Bingo, sondern vier klar definierte Schritte von der KI-Sichtbarkeits-Analyse bis zum laufenden Monitoring.</p>
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

          {/* MESSBARE ERGEBNISSE */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Messbare Ergebnisse</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Was GEO konkret messbar macht</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">KI-Sichtbarkeit ist kein Bauchgefühl. Wir machen den Effekt über klare Kennzahlen sichtbar und steuerbar.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="hover-lift border-2 lg:col-span-2 bg-primary/5 border-primary/20">
                  <CardHeader className="pb-3">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                      <Eye className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">AI-Sichtbarkeit</CardTitle>
                  </CardHeader>
                  <CardContent><p className="text-muted-foreground leading-relaxed text-sm">Zu wie vielen Ihrer Kernfragen werden Sie in ChatGPT, Perplexity, Gemini und Google AI Overviews überhaupt genannt? Wir definieren einen Frage-Katalog und messen Ihre Präsenz darin systematisch über die Zeit.</p></CardContent>
                </Card>
                <Card className="hover-lift border-2">
                  <CardHeader className="pb-3">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                      <Quote className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Citations</CardTitle>
                  </CardHeader>
                  <CardContent><p className="text-muted-foreground leading-relaxed text-sm">Wie oft verlinken oder benennen die Engines Ihre Seite als Quelle? Citations sind die harte Währung der GEO und der direkteste Beleg für Ihre Autorität.</p></CardContent>
                </Card>
                <Card className="hover-lift border-2">
                  <CardHeader className="pb-3">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                      <Gauge className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Share of Voice in KI-Antworten</CardTitle>
                  </CardHeader>
                  <CardContent><p className="text-muted-foreground leading-relaxed text-sm">Welchen Anteil an den KI-Antworten zu Ihren Themen halten Sie gegenüber dem Wettbewerb? Wir zeigen Ihren Anteil und bauen ihn gezielt aus.</p></CardContent>
                </Card>
                <Card className="hover-lift border-2">
                  <CardHeader className="pb-3">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                      <ListChecks className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Faktentreue</CardTitle>
                  </CardHeader>
                  <CardContent><p className="text-muted-foreground leading-relaxed text-sm">Geben die Modelle Ihre Leistungen, Zahlen und Aussagen korrekt wieder? Wir erkennen Falschdarstellungen früh und korrigieren sie über bessere Quellensignale.</p></CardContent>
                </Card>
                <Card className="hover-lift border-2">
                  <CardHeader className="pb-3">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                      <LineChart className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Entwicklung über Zeit</CardTitle>
                  </CardHeader>
                  <CardContent><p className="text-muted-foreground leading-relaxed text-sm">Ein laufendes Reporting dokumentiert den Trend Ihrer KI-Sichtbarkeit, damit Sie den Effekt der GEO-Maßnahmen schwarz auf weiß sehen.</p></CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* WARUM KI KANZLEI */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum die KI Kanzlei</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Was uns in der Generative Engine Optimization besonders macht</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQ: Generative Engine Optimization & AI SEO</h2>
                <p className="text-lg text-muted-foreground">Die häufigsten Fragen zu GEO, AEO, ChatGPT SEO und LLM SEO, ehrlich beantwortet.</p>
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
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Passende Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Womit GEO bei Ihnen am besten wirkt</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Generative Engine Optimization entfaltet die volle Wirkung im Zusammenspiel mit diesen Services aus dem KI-Kanzlei-Portfolio.</p>
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
