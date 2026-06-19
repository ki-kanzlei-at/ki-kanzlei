import type { Metadata } from "next";
import Script from "next/script";
import { NavigationHome } from "@/components/NavigationHome";
import { FooterModern } from "@/components/FooterModern";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import {
  BookOpen,
  Brain,
  Sparkles,
  Database,
  Bot,
  Cpu,
  Shield,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "KI-Glossar: Die wichtigsten KI-Begriffe einfach erklärt",
  description:
    "KI-Glossar mit klaren, kurzen Definitionen der wichtigsten KI-Begriffe: LLM, RAG, KI-Agent, Prompt, Token, Halluzination, Embedding, Vektordatenbank, EU AI Act, GEO und mehr. Verständlich erklärt für den DACH-Raum.",
  keywords:
    "KI Glossar, KI Begriffe, KI Lexikon, was ist ein LLM, was ist RAG, was ist ein KI Agent, KI Definitionen, KI erklärt",
  alternates: { canonical: "https://ki-kanzlei.at/ki-glossar" },
};

type Term = {
  term: string;
  slug: string;
  def: string;
  link?: { href: string; label: string };
};

type Group = {
  id: string;
  short: string;
  label: string;
  icon: typeof Brain;
  intro: string;
  terms: Term[];
};

const groups: Group[] = [
  {
    id: "grundlagen",
    short: "Grundlagen",
    label: "Sprachmodelle & Grundlagen",
    icon: Brain,
    intro: "Die Bausteine, auf denen heutige KI-Systeme aufbauen, von Sprachmodellen über Token bis zum Kontextfenster.",
    terms: [
      {
        term: "LLM (Large Language Model)",
        slug: "llm",
        def: "Ein LLM (Large Language Model, großes Sprachmodell) ist ein KI-Modell, das auf riesigen Textmengen trainiert wurde und jeweils das wahrscheinlichste nächste Wort vorhersagt. Auf dieser Basis kann es Texte verstehen, zusammenfassen, übersetzen und neu formulieren. Bekannte Beispiele sind GPT, Claude, Gemini und Mistral.",
        link: { href: "/leistungen/chatgpt-alternative", label: "Sprachmodelle im Vergleich" },
      },
      {
        term: "Token",
        slug: "token",
        def: "Ein Token ist die kleinste Verarbeitungseinheit eines Sprachmodells, meist ein Wortteil, ein kurzes ganzes Wort oder ein Satzzeichen. Sprachmodelle zerlegen jeden Text in Token und rechnen damit. Im Deutschen entspricht ein Token grob vier Zeichen, und die Abrechnung von KI-Diensten erfolgt meist pro Token.",
      },
      {
        term: "Kontextfenster",
        slug: "kontextfenster",
        def: "Das Kontextfenster beschreibt, wie viele Token ein Sprachmodell gleichzeitig berücksichtigen kann, also die maximale Länge von Eingabe und Antwort zusammen. Ist es zu klein, verliert das Modell frühere Teile eines langen Gesprächs oder Dokuments. Moderne Modelle erreichen Kontextfenster von mehreren hunderttausend Token.",
      },
      {
        term: "Inferenz",
        slug: "inferenz",
        def: "Inferenz bezeichnet den Betrieb eines fertig trainierten KI-Modells, also den Moment, in dem es zu einer Eingabe eine Antwort berechnet. Anders als das Training, das einmalig und sehr rechenintensiv ist, fällt Inferenz bei jeder Nutzung an. Die Inferenzkosten bestimmen daher maßgeblich die laufenden Kosten einer KI-Anwendung.",
        link: { href: "/leistungen/vllm", label: "Effiziente Inferenz mit vLLM" },
      },
      {
        term: "Multimodale KI",
        slug: "multimodale-ki",
        def: "Multimodale KI verarbeitet mehrere Datenarten zugleich, etwa Text, Bilder, Audio und Video, statt nur Text. So kann ein multimodales Modell ein Foto beschreiben, eine Grafik auswerten oder gesprochene Sprache verstehen. Multimodalität ist die Grundlage für KI, die verschiedene Sinneskanäle wie ein Mensch kombiniert.",
      },
      {
        term: "Halluzination",
        slug: "halluzination",
        def: "Eine Halluzination ist eine Antwort, die ein Sprachmodell überzeugend formuliert, die aber sachlich falsch oder frei erfunden ist. Sie entsteht, weil das Modell Wahrscheinlichkeiten für Wörter berechnet und kein echtes Faktenwissen prüft. Techniken wie RAG und Antworten mit Quellenangabe senken das Halluzinationsrisiko deutlich.",
        link: { href: "/leistungen/ki-wissensdatenbank", label: "Antworten mit Quellen via RAG" },
      },
    ],
  },
  {
    id: "prompting",
    short: "Prompting",
    label: "Prompting & Steuerung",
    icon: Sparkles,
    intro: "Wie Menschen Sprachmodelle anweisen und so zuverlässig brauchbare Ergebnisse erzielen.",
    terms: [
      {
        term: "Prompt",
        slug: "prompt",
        def: "Ein Prompt ist die Eingabe oder Anweisung, mit der ein Mensch ein KI-Modell steuert, also die Frage, der Auftrag oder der mitgegebene Kontext. Je präziser der Prompt, desto besser die Antwort. Ein Prompt kann eine einzelne Frage sein oder eine ausführliche Anleitung mit Rolle, Beispielen und gewünschtem Format.",
      },
      {
        term: "Prompt Engineering",
        slug: "prompt-engineering",
        def: "Prompt Engineering ist das gezielte Gestalten von Prompts, damit ein Sprachmodell verlässlich gute Ergebnisse liefert. Dazu gehören klare Rollen, Beispiele, Schritt-für-Schritt-Anweisungen und ein definiertes Ausgabeformat. Gutes Prompt Engineering verbessert Qualität und Konsistenz, ohne das Modell selbst zu verändern.",
        link: { href: "/leistungen/prompt-engineering", label: "Prompt Engineering Leistung" },
      },
    ],
  },
  {
    id: "wissen",
    short: "Wissen & Daten",
    label: "Wissen, Daten & Training",
    icon: Database,
    intro: "Wie KI auf Ihr eigenes Firmenwissen zugreift und für spezielle Aufgaben angepasst wird.",
    terms: [
      {
        term: "RAG (Retrieval Augmented Generation)",
        slug: "rag",
        def: "RAG (Retrieval Augmented Generation) verbindet ein Sprachmodell mit einer durchsuchbaren Wissensbasis. Vor der Antwort sucht das System passende Dokumente heraus und gibt sie dem Modell als Kontext mit, sodass es auf Basis Ihrer eigenen, aktuellen Daten antwortet. RAG reduziert Halluzinationen und ermöglicht Antworten mit Quellenangabe.",
        link: { href: "/leistungen/ki-wissensdatenbank", label: "KI Wissensdatenbank mit RAG" },
      },
      {
        term: "Embedding",
        slug: "embedding",
        def: "Ein Embedding ist die Übersetzung von Text, Bildern oder anderen Daten in eine Liste von Zahlen, einen Vektor, der die Bedeutung abbildet. Inhalte mit ähnlicher Bedeutung liegen im Vektorraum nahe beieinander. Embeddings sind die Grundlage für semantische Suche und für RAG.",
        link: { href: "/leistungen/vector-database", label: "Vektordatenbanken & Embeddings" },
      },
      {
        term: "Vektordatenbank",
        slug: "vektordatenbank",
        def: "Eine Vektordatenbank speichert Embeddings und findet zu einer Anfrage blitzschnell die inhaltlich ähnlichsten Einträge. Anders als eine klassische Datenbank sucht sie nach Bedeutung statt nach exakten Stichwörtern. Sie ist das Gedächtnis hinter RAG-Systemen und semantischer Suche.",
        link: { href: "/leistungen/vector-database", label: "Vektordatenbank Leistung" },
      },
      {
        term: "Fine-Tuning",
        slug: "fine-tuning",
        def: "Fine-Tuning ist das gezielte Nachtrainieren eines vortrainierten Modells mit eigenen Beispieldaten, damit es einen bestimmten Stil, ein Fachgebiet oder ein Format zuverlässig beherrscht. Es lohnt sich, wenn Prompting und RAG an ihre Grenzen stoßen. Im Ergebnis entsteht ein spezialisiertes Modell für Ihren Anwendungsfall.",
        link: { href: "/leistungen/fine-tuning", label: "Fine-Tuning Leistung" },
      },
    ],
  },
  {
    id: "agenten",
    short: "Agenten",
    label: "Agenten & Automatisierung",
    icon: Bot,
    intro: "KI, die nicht nur antwortet, sondern eigenständig handelt und Arbeitsabläufe automatisiert.",
    terms: [
      {
        term: "KI-Agent / Agentic AI",
        slug: "ki-agent",
        def: "Ein KI-Agent ist ein KI-System, das nicht nur antwortet, sondern Aufgaben eigenständig plant, Werkzeuge nutzt und mehrere Schritte bis zum Ziel ausführt. Agentic AI beschreibt diesen Ansatz, bei dem Agenten zum Beispiel Daten abrufen, E-Mails schreiben oder Systeme bedienen. So werden ganze Arbeitsabläufe automatisiert statt einzelner Antworten.",
        link: { href: "/leistungen/agentic-ai", label: "Agentic AI & KI-Agenten" },
      },
      {
        term: "MCP (Model Context Protocol)",
        slug: "mcp",
        def: "MCP (Model Context Protocol) ist ein offener Standard, über den KI-Modelle sicher mit externen Werkzeugen, Daten und Systemen verbunden werden. Statt für jede Anbindung eine eigene Schnittstelle zu bauen, sprechen Modell und Anwendung eine gemeinsame Sprache. MCP ist damit eine wichtige Grundlage für leistungsfähige KI-Agenten.",
        link: { href: "/leistungen/mcp-server", label: "MCP Server Leistung" },
      },
      {
        term: "n8n",
        slug: "n8n",
        def: "n8n ist eine quelloffene Plattform zur Workflow-Automatisierung, mit der sich Anwendungen, APIs und KI-Modelle ohne viel Programmierung verbinden lassen. Abläufe werden als visuelle Flüsse aus einzelnen Knoten gebaut. Weil n8n selbst gehostet werden kann, bleiben Daten DSGVO-konform im eigenen Haus.",
        link: { href: "/leistungen/n8n-automatisierung", label: "n8n Automatisierung" },
      },
      {
        term: "RPA (Robotic Process Automation)",
        slug: "rpa",
        def: "RPA (Robotic Process Automation) automatisiert wiederkehrende, regelbasierte Aufgaben, indem Software die Klicks und Eingaben eines Menschen in bestehenden Programmen nachahmt. Klassische RPA folgt festen Regeln, in Kombination mit KI kann sie auch unstrukturierte Daten verarbeiten. Typische Einsätze sind Rechnungsverarbeitung und das Übertragen von Daten zwischen Systemen.",
        link: { href: "/leistungen/rpa", label: "RPA Leistung" },
      },
      {
        term: "Voicebot",
        slug: "voicebot",
        def: "Ein Voicebot ist ein KI-gestützter Telefon- und Sprachassistent, der Anrufe in natürlicher Sprache entgegennimmt und beantwortet. Er kann Termine buchen, Fragen klären und Anliegen qualifizieren, rund um die Uhr. So werden Telefonzeiten abgedeckt, ohne dass Mitarbeiter durchgehend am Apparat sein müssen.",
        link: { href: "/leistungen/voicebot", label: "Voicebot & Telefon-KI" },
      },
      {
        term: "Chatbot",
        slug: "chatbot",
        def: "Ein KI-Chatbot ist ein textbasierter Assistent, der Fragen von Kunden oder Mitarbeitern im Dialog beantwortet. Moderne Chatbots nutzen Sprachmodelle und greifen per RAG auf Ihr Firmenwissen zu, statt nur starre Antwortbausteine abzuspielen. Sie entlasten den Support und sind jederzeit verfügbar.",
        link: { href: "/leistungen/ki-chatbot", label: "KI Chatbot Leistung" },
      },
    ],
  },
  {
    id: "betrieb",
    short: "Betrieb",
    label: "Betrieb & Spezialgebiete",
    icon: Cpu,
    intro: "Wie KI-Systeme stabil produktiv laufen und welche Spezialgebiete dabei eine Rolle spielen.",
    terms: [
      {
        term: "MLOps (Machine Learning Operations)",
        slug: "mlops",
        def: "MLOps (Machine Learning Operations) bündelt Methoden und Werkzeuge, um KI-Modelle zuverlässig in Betrieb zu nehmen, zu überwachen und aktuell zu halten. Dazu gehören Versionierung, automatisiertes Ausrollen, Monitoring und erneutes Training bei nachlassender Qualität. MLOps macht aus einem Prototyp ein stabiles Produktivsystem.",
        link: { href: "/leistungen/mlops", label: "MLOps Leistung" },
      },
      {
        term: "Computer Vision",
        slug: "computer-vision",
        def: "Computer Vision ist das Teilgebiet der KI, das Bilder und Videos auswertet und versteht. Damit lassen sich Objekte erkennen, Texte aus Dokumenten lesen, Qualitätsmängel aufspüren oder Stückzahlen zählen. Typische Anwendungen reichen von der Qualitätskontrolle in der Produktion bis zur automatischen Belegerfassung.",
        link: { href: "/leistungen/computer-vision", label: "Computer Vision Leistung" },
      },
      {
        term: "Private AI / lokale KI",
        slug: "private-ai",
        def: "Private AI bezeichnet KI, die in Ihrer eigenen Infrastruktur oder einer EU-Cloud läuft, statt Daten an externe Anbieter zu senden. So bleiben sensible Informationen im Haus und unter Ihrer Kontrolle. Lokale KI ist besonders für Berufsgeheimnisträger und stark regulierte Branchen relevant.",
        link: { href: "/leistungen/private-ai", label: "Private AI & lokale KI" },
      },
    ],
  },
  {
    id: "recht",
    short: "Recht & Sichtbarkeit",
    label: "Recht, Datenschutz & Sichtbarkeit",
    icon: Shield,
    intro: "Die rechtlichen Leitplanken für KI und die neue Disziplin, in KI-Antwortmaschinen sichtbar zu sein.",
    terms: [
      {
        term: "EU AI Act",
        slug: "eu-ai-act",
        def: "Der EU AI Act ist die erste umfassende KI-Verordnung der Europäischen Union. Er teilt KI-Systeme in Risikoklassen ein und knüpft daran Pflichten wie Transparenz, Dokumentation und menschliche Aufsicht. Unternehmen müssen ihre KI-Anwendungen einordnen und je nach Risiko die entsprechenden Auflagen erfüllen.",
        link: { href: "/leistungen/eu-ai-act", label: "EU AI Act Leistung" },
      },
      {
        term: "DSGVO bei KI",
        slug: "dsgvo-bei-ki",
        def: "Bei KI gilt die DSGVO immer dann, wenn personenbezogene Daten verarbeitet werden, etwa in Prompts, Trainingsdaten oder Protokollen. Wichtig sind eine Rechtsgrundlage, Datensparsamkeit, ein Auftragsverarbeitungsvertrag mit dem Anbieter und möglichst eine Datenhaltung in der EU. DSGVO-konforme KI plant den Datenschutz von Anfang an mit, nicht erst nachträglich.",
        link: { href: "/leistungen/private-ai", label: "DSGVO-konforme KI" },
      },
      {
        term: "GEO (Generative Engine Optimization)",
        slug: "geo",
        def: "GEO (Generative Engine Optimization) ist die Optimierung von Inhalten dafür, von KI-Antwortmaschinen wie ChatGPT, Perplexity oder den KI-Überblicken von Google zitiert zu werden. Anders als klassisches SEO zielt GEO nicht auf Ranking-Plätze, sondern darauf, als Quelle in generierten Antworten aufzutauchen. Klar strukturierte, eigenständig zitierbare Definitionen und Fakten sind dafür entscheidend.",
        link: { href: "/leistungen/generative-engine-optimization", label: "GEO Leistung" },
      },
    ],
  },
];

const allTerms: Term[] = groups.flatMap((g) => g.terms);

const faqs = [
  {
    q: "Was ist ein LLM?",
    a: "Ein LLM (Large Language Model, großes Sprachmodell) ist ein KI-Modell, das auf riesigen Textmengen trainiert wurde und jeweils das wahrscheinlichste nächste Wort vorhersagt. Dadurch kann es Texte verstehen, zusammenfassen, übersetzen und neu formulieren. Bekannte Beispiele sind GPT von OpenAI, Claude von Anthropic, Gemini von Google und Mistral.",
  },
  {
    q: "Was ist RAG?",
    a: "RAG steht für Retrieval Augmented Generation und verbindet ein Sprachmodell mit einer durchsuchbaren Wissensbasis. Vor der Antwort sucht das System passende Dokumente heraus und gibt sie dem Modell als Kontext mit, sodass es auf Basis Ihrer eigenen, aktuellen Daten antwortet. RAG reduziert Halluzinationen und ermöglicht Antworten mit Quellenangabe.",
  },
  {
    q: "Was bedeutet GEO?",
    a: "GEO steht für Generative Engine Optimization und bezeichnet die Optimierung von Inhalten dafür, von KI-Antwortmaschinen wie ChatGPT, Perplexity oder den KI-Überblicken von Google zitiert zu werden. Anders als klassisches SEO geht es nicht um Ranking-Plätze, sondern darum, als Quelle in generierten Antworten aufzutauchen. Klar strukturierte, eigenständig zitierbare Fakten und Definitionen sind dafür entscheidend.",
  },
  {
    q: "Was ist der Unterschied zwischen einem Chatbot und einem KI-Agenten?",
    a: "Ein Chatbot beantwortet Fragen im Dialog und liefert vor allem Text. Ein KI-Agent geht weiter und führt Aufgaben eigenständig aus: Er plant Schritte, nutzt Werkzeuge und bedient andere Systeme, um ein Ziel zu erreichen. Vereinfacht gesagt antwortet der Chatbot, während der Agent handelt.",
  },
  {
    q: "Was ist eine Halluzination bei KI?",
    a: "Eine Halluzination ist eine Antwort, die ein Sprachmodell überzeugend formuliert, die aber sachlich falsch oder frei erfunden ist. Sie entsteht, weil das Modell Wahrscheinlichkeiten für Wörter berechnet und kein echtes Faktenwissen prüft. Techniken wie RAG, Quellenangaben und menschliche Kontrolle senken das Risiko deutlich.",
  },
  {
    q: "Was ist ein Token bei Sprachmodellen?",
    a: "Ein Token ist die kleinste Verarbeitungseinheit eines Sprachmodells, meist ein Wortteil, ein kurzes Wort oder ein Satzzeichen. Sprachmodelle zerlegen jeden Text in Token und rechnen damit, im Deutschen entspricht ein Token grob vier Zeichen. Da die meisten KI-Dienste pro Token abrechnen, bestimmt die Token-Menge direkt die Kosten.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const definedTermSetSchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "KI-Glossar der KI Kanzlei",
  description:
    "Glossar mit klaren, kurzen Definitionen der wichtigsten Begriffe rund um künstliche Intelligenz, von LLM und RAG bis EU AI Act und GEO.",
  url: "https://ki-kanzlei.at/ki-glossar",
  hasDefinedTerm: allTerms.map((t) => ({
    "@type": "DefinedTerm",
    name: t.term,
    description: t.def,
    url: `https://ki-kanzlei.at/ki-glossar#${t.slug}`,
  })),
};

export default function Page() {
  return (
    <>
      <Script id="faq-ki-glossar" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="terms-ki-glossar" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                    KI-Glossar, Lexikon
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Die wichtigsten <span className="text-primary">KI-Begriffe</span> einfach erklärt
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Von LLM über RAG bis zum EU AI Act: In unserem KI-Glossar finden Sie klare, kurze Definitionen der wichtigsten Begriffe rund um künstliche Intelligenz. Jede Definition ist präzise und eigenständig verständlich, damit Sie schnell den Überblick behalten.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Erstgespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#begriffe">Alle Begriffe ansehen</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4 text-primary" /> {allTerms.length} Begriffe</span>
                    <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-primary" /> Kurz & verständlich</span>
                    <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-primary" /> Für den DACH-Raum</span>
                  </div>
                </div>

                {/* THEMEN-CARD */}
                <Card className="relative border-2 shadow-xl shadow-primary/5 overflow-hidden">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-primary tracking-wide">THEMENGEBIETE</div>
                        <CardTitle className="text-xl">Das Glossar im Überblick</CardTitle>
                      </div>
                      <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20 text-xs shrink-0">{groups.length} Bereiche</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5">
                    <div className="space-y-1">
                      {groups.map((g) => {
                        const Icon = g.icon;
                        return (
                          <a key={g.id} href={`#${g.id}`} className="flex items-center gap-3 py-2.5 border-b border-border last:border-0 group">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition-colors group-hover:bg-primary">
                              <Icon className="w-5 h-5 text-primary transition-colors group-hover:text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-sm leading-tight">{g.label}</div>
                              <div className="text-xs text-muted-foreground">{g.terms.length} Begriffe</div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0 transition-colors group-hover:text-primary" />
                          </a>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* SCHNELLZUGRIFF */}
          <section className="py-8 border-y border-border bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="flex flex-wrap items-center justify-center gap-2">
                <span className="text-sm font-semibold text-muted-foreground mr-2">Schnellzugriff:</span>
                {groups.map((g) => (
                  <a
                    key={g.id}
                    href={`#${g.id}`}
                    className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {g.label}
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* BEGRIFFE NACH THEMEN */}
          <div id="begriffe" className="scroll-mt-20">
            {groups.map((g, gi) => {
              const Icon = g.icon;
              return (
                <section
                  key={g.id}
                  id={g.id}
                  className={`py-14 md:py-20 scroll-mt-20 ${gi % 2 === 1 ? "bg-white/50" : ""}`}
                >
                  <div className="container mx-auto px-4 max-w-7xl">
                    <div className="max-w-2xl mb-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">{g.short}</Badge>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-3">{g.label}</h2>
                      <p className="text-lg text-muted-foreground">{g.intro}</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {g.terms.map((t) => (
                        <Card key={t.slug} id={t.slug} className="hover-lift border-2 scroll-mt-24 flex flex-col">
                          <CardHeader className="pb-2">
                            <h3 className="text-lg font-bold leading-tight">{t.term}</h3>
                          </CardHeader>
                          <CardContent className="flex flex-col flex-1">
                            <p className="text-muted-foreground leading-relaxed text-sm">{t.def}</p>
                            {t.link && (
                              <a
                                href={t.link.href}
                                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary"
                              >
                                {t.link.label}
                                <ArrowRight className="w-4 h-4" />
                              </a>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </section>
              );
            })}
          </div>

          {/* FAQ */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Häufige Fragen zu KI-Begriffen</h2>
                <p className="text-lg text-muted-foreground">Kurze, klare Antworten auf die Fragen, die uns am häufigsten gestellt werden.</p>
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

          {/* CTA / BERATUNG */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <Card className="border-2 bg-primary/5 border-primary/20">
                <CardHeader className="text-center">
                  <Badge variant="outline" className="rounded-full mb-2 mx-auto bg-primary/10 text-primary border-primary/20">Von der Theorie zur Praxis</Badge>
                  <CardTitle className="text-2xl md:text-3xl">Sie kennen die Begriffe, wir bringen sie in Ihren Betrieb</CardTitle>
                  <CardDescription className="text-base max-w-2xl mx-auto pt-2">
                    Ob LLM, RAG-Wissensdatenbank, Voicebot oder DSGVO-konforme lokale KI: Wir beraten anbieterunabhängig und setzen die passenden Lösungen selbst um. Das erste Gespräch ist kostenlos und unverbindlich.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button size="lg" asChild>
                    <a href="#contact">Kostenloses Erstgespräch</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/leistungen/ki-consulting">Zur KI Beratung</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          <ContactForm />
        </main>
        <FooterModern />
      </div>
    </>
  );
}
