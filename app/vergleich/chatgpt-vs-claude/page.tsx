import type { Metadata } from "next";
import Script from "next/script";
import { NavigationHome } from "@/components/NavigationHome";
import { ModelLogoStrip } from "@/components/ModelLogoStrip";
import { FooterModern } from "@/components/FooterModern";
import { ContactForm } from "@/components/ContactForm";
import { serviceLogos } from "@/lib/serviceLogos";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Check,
  Shield,
  Brain,
  Code,
  FileText,
  Wrench,
  Euro,
  Globe,
  Scale,
  Gauge,
  MessageSquare,
  Lock,
  GraduationCap,
  Bot,
  Sparkles,
  BookOpen,
  Building2,
  Layers,
  Server,
  Target,
  Briefcase,
  Stethoscope,
  ShoppingCart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ChatGPT vs Claude: Welche KI für Unternehmen?",
  description:
    "ChatGPT (OpenAI) vs Claude (Anthropic) im ehrlichen Vergleich für Unternehmen: Textqualität, lange Dokumente, Coding, Datenschutz und DSGVO, Tool- und MCP-Nutzung, Preis und Verfügbarkeit im DACH-Raum. Herstellerneutral, mit klarer Empfehlung je Anwendungsfall.",
  keywords:
    "ChatGPT vs Claude, Claude vs ChatGPT, Claude oder ChatGPT, beste KI Unternehmen, LLM Vergleich, ChatGPT Alternative, Claude KI",
  alternates: { canonical: "https://ki-kanzlei.at/vergleich/chatgpt-vs-claude" },
};

const faqs = [
  {
    q: "ChatGPT oder Claude: Was ist besser für Unternehmen?",
    a: "Pauschal gewinnt kein Anbieter. ChatGPT (OpenAI) punktet mit einem riesigen Ökosystem, Bild- und Sprachfunktionen und sehr breiter Verbreitung. Claude (Anthropic) überzeugt vor allem bei langen Dokumenten, sorgfältigem Schreiben, Coding und einer eher vorsichtigen, zuverlässigen Arbeitsweise. Für Unternehmen entscheidet der konkrete Anwendungsfall, nicht der Markenname. Wir beraten herstellerneutral und wählen das Modell, das zu Ihrer Aufgabe, Ihrem Budget und Ihren Datenschutzanforderungen passt.",
  },
  {
    q: "Welche KI ist besser für lange Dokumente und große Kontexte?",
    a: "Beide Modelle verarbeiten heute sehr große Kontextfenster und damit umfangreiche Dokumente. Claude gilt bei vielen Anwendern als besonders stark darin, lange Texte konsistent zusammenzufassen, querzulesen und ohne Detailverlust zu bearbeiten. ChatGPT ist hier ebenfalls leistungsfähig und spielt seine Stärken zusätzlich aus, wenn Bilder, Tabellen oder Sprache mit im Spiel sind. Für reine Dokumentenarbeit über viele Seiten ist Claude oft die ruhigere Wahl.",
  },
  {
    q: "Welches LLM eignet sich besser zum Programmieren?",
    a: "Beide sind exzellente Coding-Assistenten. Claude wird von vielen Entwicklerteams für komplexe Refactorings, große Codebasen und sauberes, gut erklärtes Programmieren geschätzt. ChatGPT ist breit aufgestellt, eng in viele Entwicklerwerkzeuge integriert und stark bei schnellen Prototypen. In der Praxis setzen Teams häufig beide parallel ein und lassen das jeweils passende Modell die Aufgabe übernehmen.",
  },
  {
    q: "Wie steht es um Datenschutz und DSGVO bei ChatGPT und Claude?",
    a: "Über die normalen Endkunden-Apps verlassen Eingaben in der Regel die EU, was für Unternehmen heikel sein kann. Beide Anbieter stellen jedoch Geschäfts- und API-Angebote bereit, bei denen Inhalte nicht für das Training verwendet werden und Auftragsverarbeitungsverträge möglich sind. Eine DSGVO-konforme Nutzung ist mit der richtigen Architektur machbar, etwa über EU-Regionen, europäische Cloud-Anbieter oder eine vorgelagerte Anonymisierung. Genau das setzen wir für Sie sauber auf.",
  },
  {
    q: "Was bedeutet MCP und welches Modell nutzt Tools besser?",
    a: "MCP (Model Context Protocol) ist ein offener Standard, über den KI-Modelle sicher auf externe Werkzeuge, Datenquellen und Systeme zugreifen. Anthropic hat MCP maßgeblich vorangetrieben, weshalb Claude hier ein sehr ausgereiftes Tool- und Agenten-Verhalten zeigt. ChatGPT bietet ebenfalls leistungsfähige Funktionsaufrufe, Tools und ein großes Plugin- und Aktions-Ökosystem. Für agentische Automatisierung mit vielen angebundenen Systemen sind beide geeignet, mit jeweils unterschiedlichen Stärken.",
  },
  {
    q: "Was kosten ChatGPT und Claude im Unternehmenseinsatz?",
    a: "Beide Anbieter haben ein abgestuftes Preismodell mit kostenlosen Einstiegsversionen, monatlichen Team-Abos und nutzungsbasierten API-Preisen je verarbeiteter Texteinheit. Die Kosten hängen stark vom gewählten Modell, der Textmenge und dem Einsatzszenario ab. Für planbare Budgets vergleichen wir die konkreten Tarife zum Projektzeitpunkt und rechnen den realen Verbrauch Ihres Anwendungsfalls durch, statt mit Listenpreisen zu argumentieren.",
  },
  {
    q: "Können wir ChatGPT und Claude auch parallel einsetzen?",
    a: "Ja, und das ist häufig die beste Lösung. Wir bauen Ihre KI-Architektur so, dass Modelle austauschbar bleiben und je Aufgabe das passende LLM zum Einsatz kommt. So vermeiden Sie ein Vendor Lock-in, nutzen jeweils die Stärken beider Anbieter und können bei Preis- oder Qualitätsänderungen jederzeit umsteigen. Herstellerneutralität ist bei uns kein Schlagwort, sondern Architekturprinzip.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ChatGPT vs Claude: Welche KI für Unternehmen?",
  description:
    "Ehrlicher Vergleich von ChatGPT (OpenAI) und Claude (Anthropic) für Unternehmen im DACH-Raum: Textqualität, lange Dokumente, Coding, Datenschutz und DSGVO, Tool- und MCP-Nutzung, Preis und Verfügbarkeit.",
  inLanguage: "de-AT",
  author: { "@type": "Organization", name: "KI Kanzlei", url: "https://ki-kanzlei.at" },
  publisher: {
    "@type": "ProfessionalService",
    name: "KI Kanzlei",
    url: "https://ki-kanzlei.at",
    telephone: "+436642314676",
    areaServed: [
      { "@type": "Country", name: "Austria" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "Switzerland" },
    ],
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ki-kanzlei.at/vergleich/chatgpt-vs-claude" },
};

const glanceData: [string, string][] = [
  ["Anbieter", "OpenAI (ChatGPT) vs Anthropic (Claude)"],
  ["Bester Allrounder", "kommt auf den Anwendungsfall an"],
  ["Lange Dokumente", "Tendenz Claude"],
  ["Ökosystem & Multimodal", "Tendenz ChatGPT"],
  ["Tool- & MCP-Nutzung", "beide stark, MCP-Wurzel bei Claude"],
  ["Datenschutz", "DSGVO-konform mit richtiger Architektur"],
  ["Unser Ansatz", "herstellerneutral, EU-Hosting möglich"],
];

type Lead = "chatgpt" | "claude" | "even";
const bigComparison: { criterion: string; icon: typeof Brain; chatgpt: string; claude: string; lead: Lead }[] = [
  {
    criterion: "Textqualität",
    icon: MessageSquare,
    chatgpt: "Sehr vielseitig, kreativ und flott im Ton, breit in vielen Sprachen und Formaten zuhause.",
    claude: "Besonders sorgfältig, natürlich und nuanciert beim Schreiben langer, anspruchsvoller Texte.",
    lead: "even",
  },
  {
    criterion: "Lange Dokumente & Kontext",
    icon: FileText,
    chatgpt: "Großes Kontextfenster, stark wenn Bilder und Tabellen mitverarbeitet werden müssen.",
    claude: "Sehr großes Kontextfenster, konsistent beim Querlesen und Zusammenfassen vieler Seiten.",
    lead: "claude",
  },
  {
    criterion: "Coding",
    icon: Code,
    chatgpt: "Breit integriert in Entwicklerwerkzeuge, stark bei schnellen Prototypen und Skripten.",
    claude: "Geschätzt für komplexe Refactorings, große Codebasen und sauber erklärten Code.",
    lead: "even",
  },
  {
    criterion: "Datenschutz & EU",
    icon: Shield,
    chatgpt: "Geschäftsangebote mit AVV und kein Training auf Ihren Daten, EU-Optionen über Partner.",
    claude: "Geschäftsangebote mit AVV und kein Training auf Ihren Daten, EU-Optionen über Partner.",
    lead: "even",
  },
  {
    criterion: "Tool- & MCP-Nutzung",
    icon: Wrench,
    chatgpt: "Leistungsfähige Funktionsaufrufe und ein großes Ökosystem an Aktionen und Plugins.",
    claude: "Sehr ausgereiftes Tool- und Agentenverhalten, MCP wurde von Anthropic mitgeprägt.",
    lead: "claude",
  },
  {
    criterion: "Preis",
    icon: Euro,
    chatgpt: "Abgestufte Abos und nutzungsbasierte API-Preise, je nach Modell sehr wettbewerbsfähig.",
    claude: "Abgestufte Abos und nutzungsbasierte API-Preise, je nach Modell sehr wettbewerbsfähig.",
    lead: "even",
  },
  {
    criterion: "Verfügbarkeit",
    icon: Globe,
    chatgpt: "Sehr breite Verbreitung, viele Integrationen und über große Clouds gut erreichbar.",
    claude: "Stabil verfügbar, über mehrere große Cloud-Plattformen und Partner buchbar.",
    lead: "chatgpt",
  },
];

const leadLabel: Record<Lead, string> = {
  chatgpt: "Tendenz ChatGPT",
  claude: "Tendenz Claude",
  even: "Gleichauf",
};

const chatgptStrengths = [
  { icon: Sparkles, title: "Großes Ökosystem", desc: "Sehr viele Integrationen, Aktionen und Drittanbieter-Tools rund um ChatGPT, ideal für breite Einführung im Team." },
  { icon: Layers, title: "Multimodal stark", desc: "Bild, Sprache und Text in einem Werkzeug, hilfreich für Marketing, Recherche und visuelle Aufgaben." },
  { icon: Gauge, title: "Schnell & flexibel", desc: "Flotte Antworten und sehr gute Allround-Qualität für den breiten Büroalltag und schnelle Prototypen." },
];

const claudeStrengths = [
  { icon: BookOpen, title: "Lange Dokumente", desc: "Verarbeitet umfangreiche Verträge, Berichte und Wissensbestände konsistent und ohne Detailverlust." },
  { icon: Code, title: "Sorgfältiges Coding", desc: "Beliebt bei Entwicklerteams für große Codebasen, saubere Refactorings und nachvollziehbare Erklärungen." },
  { icon: Wrench, title: "Agenten & MCP", desc: "Sehr ausgereifte Tool-Nutzung über das von Anthropic mitgeprägte Model Context Protocol." },
];

const useCases = [
  {
    value: "schreiben",
    label: "Schreiben & Recherche",
    icon: MessageSquare,
    head: "Texte, Recherche und Kommunikation",
    rec: "Beide geeignet, Claude bei langen, anspruchsvollen Texten",
    text: "Für tägliche E-Mails, Marketing und schnelle Recherche sind beide Modelle hervorragend. Geht es um lange, sorgfältig formulierte Dokumente, Gutachten oder mehrseitige Zusammenfassungen, liefert Claude oft den ruhigeren, konsistenteren Ton. Für visuelle Aufgaben und multimodale Recherche spielt ChatGPT seine Stärken aus.",
  },
  {
    value: "coding",
    label: "Software & Coding",
    icon: Code,
    head: "Programmierung und Entwicklung",
    rec: "Häufig Claude für komplexe Projekte, ChatGPT für Prototypen",
    text: "Bei großen Codebasen, anspruchsvollen Refactorings und sauber erklärtem Code greifen viele Teams zu Claude. ChatGPT ist breit in Entwicklerwerkzeuge integriert und stark, wenn es schnell um einen Prototyp oder ein kurzes Skript geht. Im Idealfall stehen beide zur Verfügung.",
  },
  {
    value: "dokumente",
    label: "Dokumente & Wissen",
    icon: FileText,
    head: "Verträge, Akten und Wissensdatenbanken",
    rec: "Tendenz Claude, in Kombination mit eigener Wissensbasis",
    text: "Für Berufsgeheimnisträger und dokumentenlastige Branchen ist die konsistente Verarbeitung langer Texte entscheidend. Hier liegt Claude oft vorn. Kombiniert mit einer eigenen, DSGVO-konformen Wissensdatenbank entsteht ein verlässlicher Assistent, der mit Quellenangabe antwortet.",
  },
  {
    value: "agenten",
    label: "Automatisierung & Agenten",
    icon: Bot,
    head: "Agentische Workflows und Tool-Nutzung",
    rec: "Beide stark, MCP-Vorsprung bei Claude",
    text: "Sollen Modelle eigenständig Werkzeuge bedienen, Systeme anbinden und mehrstufige Aufgaben erledigen, zählen Tool-Zuverlässigkeit und Standards. Über MCP zeigt Claude hier ein sehr ausgereiftes Verhalten, ChatGPT bietet ebenfalls starke Funktionsaufrufe und ein großes Aktions-Ökosystem.",
  },
];

const privacyPoints = [
  { icon: Lock, title: "Kein Training auf Ihren Daten", desc: "In den Geschäfts- und API-Angeboten beider Anbieter werden Ihre Inhalte nicht zum Training der Modelle verwendet." },
  { icon: FileText, title: "Auftragsverarbeitung", desc: "Mit AVV und passender Konfiguration lassen sich beide Anbieter rechtssicher in europäische Prozesse einbinden." },
  { icon: Server, title: "EU-Hosting & Anonymisierung", desc: "Über EU-Regionen, europäische Clouds oder eine vorgelagerte Anonymisierung halten wir sensible Daten geschützt." },
  { icon: Scale, title: "EU AI Act im Blick", desc: "Wir prüfen die Risikoklasse Ihres Anwendungsfalls und sorgen für Kennzeichnung und Dokumentation." },
];

const verdictRows = [
  { label: "Wenn lange Dokumente zentral sind", value: "Tendenz Claude" },
  { label: "Wenn Bild, Sprache und Ökosystem zählen", value: "Tendenz ChatGPT" },
  { label: "Wenn agentische Automatisierung gefragt ist", value: "beide stark, MCP-Vorteil bei Claude" },
  { label: "Wenn maximale Unabhängigkeit zählt", value: "beide parallel, austauschbar gebaut" },
];

const industries = [
  { icon: Scale, label: "Kanzleien", text: "Dokumentenanalyse und Schriftsätze für Rechtsanwälte und Steuerberater, DSGVO-konform und nachvollziehbar." },
  { icon: Stethoscope, label: "Gesundheit", text: "Entlastung bei Dokumentation und Kommunikation, mit besonderem Augenmerk auf den Schutz sensibler Daten." },
  { icon: ShoppingCart, label: "E-Commerce", text: "Kundenservice, Produkttexte und Recherche, je nach Aufgabe mit dem passenden Modell im Hintergrund." },
  { icon: Briefcase, label: "KMU & Mittelstand", text: "Ein klarer Einstieg ohne eigene IT-Abteilung, mit Modellwahl je Anwendungsfall statt pauschalem Abo." },
  { icon: Building2, label: "Öffentlicher Bereich", text: "Hohe Anforderungen an Datenschutz und Transparenz, abgesichert über EU-Hosting und Dokumentation." },
  { icon: Target, label: "Industrie", text: "Wissensbestände und technische Dokumentation durchsuchbar machen und in Workflows einbinden." },
];

const related = [
  { href: "/leistungen/claude-schulung", icon: GraduationCap, tag: "Training", title: "Claude Schulung", desc: "Ihr Team lernt, Claude im Arbeitsalltag sicher und produktiv einzusetzen." },
  { href: "/leistungen/chatgpt-alternative", icon: Shield, tag: "Alternative", title: "ChatGPT Alternative", desc: "DSGVO-konforme Alternativen zu ChatGPT, gehostet in der EU und herstellerneutral ausgewählt." },
  { href: "/leistungen/ki-consulting", icon: Brain, tag: "Beratung", title: "KI Consulting", desc: "Unabhängige Beratung zur richtigen Modellwahl und Architektur für Ihren Anwendungsfall." },
];

export default function Page() {
  return (
    <>
      <Script id="faq-chatgpt-vs-claude" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-chatgpt-vs-claude" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                    LLM Vergleich, Herstellerneutral
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-primary">ChatGPT vs Claude</span>: Welche KI für Ihr Unternehmen?
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Der ehrliche Vergleich von ChatGPT (OpenAI) und Claude (Anthropic) für den Einsatz im DACH-Raum. Welches Modell für welche Aufgabe, was Datenschutz und DSGVO bedeuten und warum kein Anbieter pauschal gewinnt.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Erstgespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#vergleich">Direkt zum Vergleich</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Scale className="w-4 h-4 text-primary" /> Herstellerneutral</span>
                    <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-primary" /> EU-Hosting möglich</span>
                  </div>
                </div>

                {/* Versus-Visual */}
                <Card className="relative border-2 shadow-xl shadow-primary/5 overflow-hidden">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-primary tracking-wide">DIREKTVERGLEICH</div>
                        <CardTitle className="text-xl">Zwei führende Modelle</CardTitle>
                      </div>
                      <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20 text-xs shrink-0">7 Kriterien</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl border-2 border-border p-4 text-center">
                        <img src="/img/logos/openai.svg" alt="ChatGPT von OpenAI" className="h-8 w-auto mx-auto object-contain" />
                        <div className="font-semibold text-sm mt-3">ChatGPT</div>
                        <div className="text-xs text-muted-foreground">OpenAI</div>
                      </div>
                      <div className="rounded-xl border-2 border-primary/30 bg-primary/5 p-4 text-center">
                        <img src="/img/logos/anthropic.svg" alt="Claude von Anthropic" className="h-8 w-auto mx-auto object-contain" />
                        <div className="font-semibold text-sm mt-3">Claude</div>
                        <div className="text-xs text-muted-foreground">Anthropic</div>
                      </div>
                    </div>
                    <div className="mt-4 space-y-1">
                      {glanceData.slice(2).map(([label, value]) => (
                        <div key={label} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                          <span className="text-sm font-medium text-foreground">{label}</span>
                          <span className="text-sm text-muted-foreground text-right max-w-[55%]">{value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-between rounded-xl bg-primary/5 border border-primary/20 px-4 py-3">
                      <span className="text-sm font-medium text-foreground">Fazit</span>
                      <span className="text-sm text-primary font-semibold">Auswahl je Anwendungsfall</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* EINLEITUNG / AUF EINEN BLICK */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Einordnung</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">ChatGPT und Claude im Unternehmenskontext</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      <strong className="text-foreground">ChatGPT</strong> von OpenAI und <strong className="text-foreground">Claude</strong> von Anthropic gehören zu den leistungsfähigsten Sprachmodellen am Markt. Beide schreiben Texte, fassen zusammen, programmieren, recherchieren und steuern Werkzeuge. Die spannende Frage ist deshalb nicht, welches Modell besser ist, sondern welches für Ihre konkrete Aufgabe das passende ist.
                    </p>
                    <p>
                      ChatGPT bringt ein sehr breites Ökosystem, starke multimodale Fähigkeiten und enorme Verbreitung mit. Claude überzeugt vor allem bei langen Dokumenten, sorgfältigem Schreiben, Coding und einer ausgereiften, zuverlässigen Tool-Nutzung über das offene Model Context Protocol.
                    </p>
                    <p>
                      Wir sind <strong className="text-foreground">herstellerneutral</strong> und erhalten keine Provisionen. Unser Ziel ist eine Architektur, in der Modelle austauschbar bleiben und Ihre Daten <strong className="text-foreground">DSGVO-konform</strong> verarbeitet werden, bei Bedarf mit Hosting in der EU.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">ChatGPT</Badge>
                    <Badge variant="secondary" className="rounded-full">Claude</Badge>
                    <Badge variant="secondary" className="rounded-full">LLM Vergleich</Badge>
                    <Badge variant="secondary" className="rounded-full">DSGVO</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Der Vergleich auf einen Blick</CardTitle>
                    <CardDescription>Die wichtigsten Punkte kompakt zusammengefasst.</CardDescription>
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

          <ModelLogoStrip
            caption="Herstellerneutral, wir empfehlen das passende Modell je Anwendungsfall"
            items={[
              { slug: "openai", name: "OpenAI" },
              { slug: "anthropic", name: "Anthropic" },
              { slug: "googlegemini", name: "Google Gemini" },
              { slug: "mistralai", name: "Mistral AI" },
              { slug: "huggingface", name: "Hugging Face" },
              { slug: "ollama", name: "Ollama" },
            ]}
          />

          {/* GROSSE VERGLEICHS-TABLE */}
          <section id="vergleich" className="py-14 md:py-20 scroll-mt-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Der direkte Vergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">ChatGPT vs Claude: 7 Kriterien im Detail</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Eine ehrliche Gegenüberstellung. Die Spalte Tendenz zeigt, wohin der Vorteil im jeweiligen Kriterium leicht ausschlägt, ohne dass ein Modell pauschal gewinnt.</p>
              </div>
              <Card className="border-2 overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[18%] font-bold text-foreground">Kriterium</TableHead>
                      <TableHead className="text-foreground font-semibold">ChatGPT (OpenAI)</TableHead>
                      <TableHead className="text-primary font-bold">Claude (Anthropic)</TableHead>
                      <TableHead className="w-[14%] text-muted-foreground">Tendenz</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bigComparison.map((r, i) => {
                      const Icon = r.icon;
                      return (
                        <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                          <TableCell className="font-medium">
                            <span className="inline-flex items-center gap-2"><Icon className="w-4 h-4 text-primary shrink-0" />{r.criterion}</span>
                          </TableCell>
                          <TableCell className="text-muted-foreground text-sm">{r.chatgpt}</TableCell>
                          <TableCell className="text-foreground text-sm">{r.claude}</TableCell>
                          <TableCell>
                            <Badge variant={r.lead === "even" ? "secondary" : "outline"} className={`rounded-full text-xs whitespace-nowrap ${r.lead === "claude" ? "bg-primary/10 text-primary border-primary/20" : ""}`}>
                              {leadLabel[r.lead]}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </Card>
              <p className="text-sm text-muted-foreground mt-4 text-center max-w-3xl mx-auto">
                Beide Modelle entwickeln sich schnell weiter. Bei jedem Projekt prüfen wir die aktuellen Versionen, Preise und Funktionen neu, statt uns auf veraltete Momentaufnahmen zu verlassen.
              </p>
            </div>
          </section>

          {/* STAERKEN GEGENUEBERSTELLUNG */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Stärken im Überblick</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Wo jedes Modell glänzt</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Statt eines Siegers zeigen wir, wofür sich ChatGPT und Claude jeweils besonders eignen.</p>
              </div>
              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="border-2">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center gap-3">
                      <img src="/img/logos/openai.svg" alt="ChatGPT von OpenAI" className="h-7 w-auto object-contain" />
                      <CardTitle className="text-xl">Stärken von ChatGPT</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-4">
                    {chatgptStrengths.map((s) => {
                      const Icon = s.icon;
                      return (
                        <div key={s.title} className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold text-sm">{s.title}</div>
                            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>
                <Card className="border-2 border-primary/30 bg-primary/5">
                  <CardHeader className="border-b border-primary/20">
                    <div className="flex items-center gap-3">
                      <img src="/img/logos/anthropic.svg" alt="Claude von Anthropic" className="h-7 w-auto object-contain" />
                      <CardTitle className="text-xl">Stärken von Claude</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-4">
                    {claudeStrengths.map((s) => {
                      const Icon = s.icon;
                      return (
                        <div key={s.title} className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold text-sm">{s.title}</div>
                            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* WELCHES LLM WOFUER: TABS */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Welches LLM wofür</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Empfehlung nach Anwendungsfall</h2>
                <p className="text-lg text-muted-foreground">Wählen Sie den Bereich, der zu Ihnen passt. Wir zeigen, welches Modell sich tendenziell besser eignet.</p>
              </div>
              <Tabs defaultValue="schreiben" className="w-full">
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
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                          <h3 className="text-xl font-bold">{u.head}</h3>
                          <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20 text-xs">{u.rec}</Badge>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{u.text}</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>

          {/* DATENSCHUTZ / DSGVO */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Datenschutz & DSGVO</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Datenschutz: der entscheidende Unterschied</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Über die Endkunden-Apps verlassen Daten oft die EU. Mit der richtigen Architektur lassen sich beide Modelle dennoch DSGVO-konform nutzen.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {privacyPoints.map((p) => {
                  const Icon = p.icon;
                  return (
                    <Card key={p.title} className="hover-lift border-2">
                      <CardHeader className="pb-3">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">{p.title}</CardTitle>
                      </CardHeader>
                      <CardContent><p className="text-muted-foreground leading-relaxed text-sm">{p.desc}</p></CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* BRANCHEN */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Im DACH-Raum</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Was das für Ihre Branche bedeutet</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Die richtige Modellwahl hängt stark von Ihren Daten und Anforderungen ab. Ein paar typische Bilder aus der Praxis.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {industries.map((b) => {
                  const Icon = b.icon;
                  return (
                    <Card key={b.label} className="hover-lift border-2">
                      <CardHeader className="pb-3">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{b.label}</CardTitle>
                      </CardHeader>
                      <CardContent><p className="text-muted-foreground leading-relaxed text-sm">{b.text}</p></CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* EHRLICHES FAZIT */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Ehrliches Fazit</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Kein Anbieter gewinnt pauschal</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Wer eine eindeutige Krönung erwartet, wird enttäuscht, und das ist gut so. ChatGPT und Claude sind beide hervorragend und entwickeln sich in einem rasanten Tempo weiter. Die ehrliche Antwort lautet: Es kommt auf Ihren Anwendungsfall, Ihre Daten und Ihr Budget an.
                    </p>
                    <p>
                      Genau deshalb arbeiten wir <strong className="text-foreground">herstellerneutral</strong>. Wir binden uns nicht an einen Anbieter, sondern bauen Ihre KI-Architektur so, dass Modelle austauschbar bleiben. So nutzen Sie die Stärken beider Welten und vermeiden ein Vendor Lock-in.
                    </p>
                    <p>
                      Und unabhängig vom Modell sorgen wir dafür, dass Ihre Lösung <strong className="text-foreground">DSGVO-konform</strong> läuft, bei Bedarf mit Hosting in der EU, klaren Verträgen und einer Architektur, die Ihre sensiblen Daten schützt.
                    </p>
                  </div>
                  <div className="mt-6">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Erstgespräch</a>
                    </Button>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Unsere Empfehlung in Kürze</CardTitle>
                    <CardDescription>Wohin der Vorteil je Situation tendiert.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {verdictRows.map((r) => (
                      <div key={r.label} className="flex items-start justify-between gap-4 py-3 border-b border-border last:border-0">
                        <span className="text-sm font-medium text-foreground flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />{r.label}
                        </span>
                        <span className="text-sm text-primary font-semibold text-right max-w-[42%]">{r.value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQ: ChatGPT vs Claude</h2>
                <p className="text-lg text-muted-foreground">Die häufigsten Fragen zum Vergleich, ehrlich beantwortet.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-3">So setzen Sie das Richtige um</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Von der Schulung über die DSGVO-konforme Alternative bis zur unabhängigen Beratung.</p>
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
