import type { Metadata } from "next";
import { serviceLogos } from "@/lib/serviceLogos";
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
  Settings,
  UserCog,
  FileText,
  Braces,
  ShieldCheck,
  Check,
  X,
  Target,
  Zap,
  Brain,
  Database,
  Network,
  Lock,
  Wrench,
  Workflow,
  Search,
  FlaskConical,
  Rocket,
  Layers,
  MessageSquare,
  BookOpen,
  Shield,
  Gauge,
  ListChecks,
  SlidersHorizontal,
  Scale,
  Stethoscope,
  Megaphone,
  Code2,
  Users,
  Building2,
  Sparkles,
  Bot,
  GraduationCap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Prompt Engineering für Unternehmen: KI-Prompts optimal formulieren",
  description:
    "Professionelles Prompt Engineering für Unternehmen im DACH-Raum: System-Prompts, Rollen, Kontext, Output und Guardrails sauber komponiert. Prompt-Strategie, Workshops und Integration für ChatGPT, Claude und Open-Source-LLMs. DSGVO-konform.",
  keywords:
    "Prompt Engineering, Prompting, KI Prompts, ChatGPT Prompts, LLM Prompting, Prompt Techniken, Prompt Design, Prompt Optimierung, System-Prompt, Chain-of-Thought, Few-Shot, RAG, Prompt Engineering Workshop, AI Prompting Deutsch, Prompt Engineering Österreich, Prompt Engineering Deutschland, Prompt Engineering Schweiz, Prompt Engineering DACH, KI Prompts DACH",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/prompt-engineering" },
};

const faqs = [
  {
    q: "Was ist Prompt Engineering?",
    a: "Prompt Engineering ist die Disziplin, Anfragen an KI-Modelle wie ChatGPT, Claude oder Llama so zu strukturieren, dass sie zuverlässig die bestmöglichen Ergebnisse liefern. Es umfasst Techniken wie System-Prompts, Rollen-Definitionen, Chain-of-Thought, Few-Shot Learning und Retrieval-Augmented Generation. Gutes Prompt Engineering verbessert die Qualität der KI-Ausgaben nachweislich um 50 bis 300 Prozent und ist die Voraussetzung für den produktiven Einsatz von LLMs im Unternehmen. Es geht dabei nicht um einzelne, zufällig gute Eingaben, sondern um systematische und reproduzierbare Prompt-Strategien, die fest in Workflows und Automatisierungen verankert werden.",
  },
  {
    q: "Warum ist Prompt Engineering für Unternehmen wichtig?",
    a: "Unternehmen, die KI ohne professionelles Prompting einsetzen, verschenken bis zu 80 Prozent des Potenzials ihrer KI-Tools. Durchdachtes Prompt Engineering reduziert Halluzinationen, erhöht die Konsistenz und spart dadurch erheblich Zeit und Kosten. Besonders in regulierten Branchen wie Recht, Medizin und Finanzen ist präzises Prompting essenziell, um verlässliche und nachvollziehbare Ergebnisse zu erhalten. Erst gut komponierte Prompts machen die Automatisierung komplexer Aufgaben überhaupt möglich, die mit unpräzisen Eingaben scheitern würden.",
  },
  {
    q: "Aus welchen Bausteinen besteht ein professioneller Prompt?",
    a: "Ein professioneller Prompt setzt sich aus fünf Bausteinen zusammen: dem System-Prompt (die grundlegende Verhaltens- und Identitätsanweisung), der Rolle (die KI als Fachexperte positionieren), dem Kontext (relevante Daten, Dokumente und Beispiele gezielt bereitstellen), dem Output-Format (JSON, Tabellen oder strukturierte Texte vorgeben) und den Guardrails (Leitplanken gegen Halluzinationen, Prompt Injection und unerwünschte Ausgaben). Erst das saubere Zusammenspiel dieser Komponenten macht aus einer beliebigen Frage einen verlässlichen, produktionsreifen Prompt.",
  },
  {
    q: "Welche Prompt Techniken gibt es?",
    a: "Die wichtigsten Prompt Techniken sind: Zero-Shot Prompting (direkte Anweisung ohne Beispiele), Few-Shot Prompting (Anweisung mit Beispielen), Chain-of-Thought (schrittweises Denken erzwingen), System-Prompts (Rolle und Kontext definieren), Retrieval-Augmented Generation (eigene Daten einbinden) und Prompt Chaining (mehrere Prompts verketten). Fortgeschrittene Methoden wie Tree-of-Thought, ReAct und Self-Consistency erlauben noch präzisere Steuerung für anspruchsvolle Unternehmensanwendungen.",
  },
  {
    q: "Was ist ein System-Prompt und warum ist er so entscheidend?",
    a: "Der System-Prompt ist die übergeordnete Instanz, die das Verhalten der KI über alle Anfragen hinweg festlegt: Identität, Tonalität, erlaubte und verbotene Handlungen, Ausgabeformat und Qualitätsmaßstäbe. Er ist der Hebel mit dem größten Effekt, denn er wirkt auf jede einzelne Antwort. Ein sorgfältig formulierter System-Prompt sorgt dafür, dass dieselbe KI für Ihr Unternehmen markenkonform, konsistent und überprüfbar arbeitet, statt bei jeder Eingabe neu zu raten.",
  },
  {
    q: "Wie reduziert Prompt Engineering Halluzinationen?",
    a: "Halluzinationen entstehen häufig, wenn ein Modell ohne ausreichenden Kontext zur Auskunft gedrängt wird. Prompt Engineering begegnet dem mit mehreren Mitteln: gezielter Kontext über RAG, explizite Anweisungen wie Bei fehlender Information nachfragen statt erfinden, Chain-of-Thought für nachvollziehbare Begründungen sowie Guardrails und Validierungen der Ausgabe. In Kombination lassen sich Fehlausgaben in der Praxis um 60 bis 80 Prozent senken, was den Einsatz in sensiblen Bereichen erst verantwortbar macht.",
  },
  {
    q: "Funktioniert Prompt Engineering auch auf Deutsch und für den DACH-Raum?",
    a: "Ja, erfordert aber besondere Strategien. Die meisten Modelle sind primär auf englische Daten trainiert, deshalb braucht deutschsprachiges Prompting explizite Sprachangaben, kulturelle Kontextualisierung und branchenspezifische Fachterminologie. Ein Prompt, der auf Englisch glänzt, kann auf Deutsch versagen und umgekehrt. Wir entwickeln Prompts gezielt für österreichisches, deutsches und Schweizer Deutsch, also für den gesamten DACH-Raum, inklusive der jeweiligen Fach- und Rechtssprache.",
  },
  {
    q: "Was ist Prompt Injection und wie schützt man sich davor?",
    a: "Prompt Injection bezeichnet den Versuch, über manipulierte Eingaben die ursprünglichen Anweisungen der KI zu überschreiben, etwa um Daten abzugreifen oder Schutzregeln zu umgehen. Schutz bieten klar getrennte System- und Nutzerebenen, Input-Validierung, Output-Filter, Guardrails-Frameworks und kontinuierliches Monitoring. Für Unternehmensanwendungen ist dieser Schutz Pflicht, sobald die KI mit externen Eingaben oder sensiblen Daten arbeitet.",
  },
  {
    q: "Welches LLM eignet sich am besten: ChatGPT, Claude oder Open Source?",
    a: "Das hängt vom Anwendungsfall ab. ChatGPT und Claude liefern hohe Qualität und breite Fähigkeiten, Claude punktet bei langen Kontexten und sorgfältigem Reasoning. Open-Source-Modelle wie Llama oder Mistral lassen sich lokal und vollständig DSGVO-konform betreiben, was bei sensiblen Daten entscheidend ist. Gutes Prompt Engineering ist weitgehend modellübergreifend, gleichzeitig optimieren wir Prompts für das jeweils eingesetzte Modell, da sich Formulierungen unterschiedlich auswirken.",
  },
  {
    q: "Kann man Prompt Engineering lernen und was kostet es?",
    a: "Prompt Engineering ist erlernbar und sollte systematisch geschult werden. Unsere praxisnahen Workshops reichen von den Grundlagen über fortgeschrittene Techniken bis zur Integration in bestehende Workflows, mit branchenspezifischen Beispielen aus Ihrem Arbeitsalltag. Workshops starten ab rund 2.000 Euro für ein Team, individuelle Prompt-Entwicklung ab rund 3.000 Euro. Der ROI ist hoch: durchschnittlich 2 bis 5 Stunden Zeitersparnis pro Mitarbeiter und Woche bei deutlich niedrigeren Fehlerquoten. Im kostenlosen Erstgespräch analysieren wir Ihr Potenzial und erstellen ein individuelles Angebot.",
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
  name: "Prompt Engineering",
  serviceType: "Prompt Engineering, KI-Prompting, LLM-Optimierung",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "Professionelles Prompt Engineering für Unternehmen im DACH-Raum: Prompt-Strategie, System-Prompts, RAG-Integration, Guardrails, Testing und Workshops für ChatGPT, Claude und Open-Source-LLMs. DSGVO-konform, EU-gehostet.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

// Hero-Visual: die fünf Prompt-Bausteine
const blocks = [
  {
    tag: "System",
    icon: Settings,
    snippet: "Du bist der KI-Assistent der KI Kanzlei. Antworte sachlich, präzise und auf Deutsch.",
  },
  {
    tag: "Rolle",
    icon: UserCog,
    snippet: "Agiere als erfahrener Steuerberater mit Fokus auf österreichisches Steuerrecht.",
  },
  {
    tag: "Kontext",
    icon: FileText,
    snippet: "Nutze ausschließlich die bereitgestellten Mandantenunterlagen und Belege.",
  },
  {
    tag: "Output",
    icon: Braces,
    snippet: "Liefere das Ergebnis als JSON mit den Feldern befund, frist und quelle.",
  },
  {
    tag: "Guardrails",
    icon: ShieldCheck,
    snippet: "Erfinde keine Paragraphen. Bei Unsicherheit frage nach, statt zu raten.",
  },
];

// Anatomie-Bento: dieselben Bausteine, ausführlich erklärt
const anatomy = [
  {
    icon: Settings,
    tag: "01, System",
    title: "System-Prompt",
    desc: "Die übergeordnete Verhaltensanweisung. Sie legt Identität, Tonalität, erlaubte Handlungen und Qualitätsmaßstäbe fest und wirkt auf jede einzelne Antwort. Der Baustein mit dem größten Hebel.",
    feature: true,
  },
  {
    icon: UserCog,
    tag: "02, Rolle",
    title: "Rollen-Definition",
    desc: "Positioniert die KI als Fachexperte für Ihre Domäne, etwa als Jurist, Mediziner oder Marketing-Lead. Das aktiviert das passende Vokabular und die richtige Denkweise.",
  },
  {
    icon: FileText,
    tag: "03, Kontext",
    title: "Kontext & Daten",
    desc: "Relevante Informationen, Dokumente und Beispiele werden gezielt bereitgestellt, oft per RAG aus Ihrer Wissensdatenbank. So antwortet die KI auf Basis Ihrer Fakten statt aus dem Training.",
  },
  {
    icon: Braces,
    tag: "04, Output",
    title: "Output-Format",
    desc: "Gibt die Form des Ergebnisses vor: JSON, Tabelle, Gliederung oder strukturierter Text. Maschinenlesbare Ausgaben lassen sich direkt weiterverarbeiten und automatisieren.",
  },
  {
    icon: ShieldCheck,
    tag: "05, Guardrails",
    title: "Guardrails",
    desc: "Leitplanken gegen Halluzinationen, Prompt Injection und unerwünschte Ausgaben. Validierungen stellen sicher, dass nur korrekte und erlaubte Ergebnisse das System verlassen.",
  },
];

const beforeAfter = {
  weak: [
    "Schreib mir was über das neue Datenschutzgesetz.",
  ],
  strong: [
    "System: Du bist Jurist mit Fokus auf EU-Datenschutz.",
    "Kontext: Beziehe dich auf die Art. 5 bis 9 DSGVO im Anhang.",
    "Aufgabe: Fasse die Pflichten für KMU in 5 Punkten zusammen.",
    "Output: Tabelle mit Pflicht, Frist und Quelle.",
    "Guardrail: Keine Quelle erfinden, bei Lücken kennzeichnen.",
  ],
};

const techniques = {
  basics: [
    { icon: Target, title: "Zero-Shot Prompting", desc: "Die KI erhält eine direkte Anweisung ohne Beispiele. Schnell und ausreichend für einfache, klar umrissene Aufgaben mit eindeutigem Ziel." },
    { icon: Zap, title: "Few-Shot Prompting", desc: "Der Prompt enthält einige Musterbeispiele. Die KI orientiert sich am Muster und liefert deutlich konsistentere und formattreue Ausgaben." },
    { icon: ListChecks, title: "Strukturierte Anweisung", desc: "Aufgabe, Kontext, Format und Regeln werden klar getrennt notiert. Diese Gliederung allein hebt die Trefferquote spürbar an." },
  ],
  advanced: [
    { icon: Brain, title: "Chain-of-Thought", desc: "Die KI wird angewiesen, schrittweise zu denken. Das verbessert die Qualität bei logischen, rechnerischen und mehrstufigen Aufgaben erheblich." },
    { icon: Database, title: "Retrieval-Augmented Generation", desc: "Eigene Dokumente und Datenbanken werden in den Prompt eingebunden. Die KI antwortet auf Basis Ihres Wissens: präzise, aktuell und belegbar." },
    { icon: Network, title: "Prompt Chaining", desc: "Komplexe Aufgaben werden in verkettete Schritte zerlegt, ideal für mehrstufige Analysen und Automatisierung mit n8n oder LangChain." },
    { icon: SlidersHorizontal, title: "Self-Consistency & ReAct", desc: "Mehrere Denkpfade werden verglichen oder mit Tool-Aufrufen kombiniert, um die zuverlässigste Antwort zu ermitteln." },
  ],
  security: [
    { icon: Shield, title: "Guardrails", desc: "Validierungen und Leitplanken stellen sicher, dass die KI ausschließlich erlaubte und korrekte Ausgaben produziert." },
    { icon: Lock, title: "Prompt Injection Schutz", desc: "Getrennte System- und Nutzerebenen, Input-Validierung und Output-Filter schützen vor manipulierten Eingaben und Jailbreaking." },
    { icon: Gauge, title: "Monitoring & Evaluierung", desc: "Kontinuierliche Überwachung und Bewertung der Ausgaben halten die Qualität auch im Dauerbetrieb stabil." },
  ],
  tools: [
    { icon: Wrench, title: "LangChain", desc: "Framework für Prompt Chaining und LLM-Orchestrierung in komplexen, mehrstufigen KI-Workflows." },
    { icon: Workflow, title: "n8n", desc: "DSGVO-konforme Workflow-Plattform, um Prompts in Automatisierungen und bestehende Systeme einzubetten." },
    { icon: Search, title: "Langfuse & LangSmith", desc: "Monitoring, Testing und Evaluierung von Prompts für reproduzierbare Produktionsqualität." },
  ],
};

const comparison = [
  { feature: "Ergebnisqualität", standard: "Vage, oft unbrauchbar", pe: "Strukturiert und direkt verwertbar" },
  { feature: "Halluzinationen", standard: "Häufig, schwer kontrollierbar", pe: "Um 60 bis 80 Prozent reduziert" },
  { feature: "Konsistenz", standard: "Schwankt von Anfrage zu Anfrage", pe: "Reproduzierbar durch System-Prompts" },
  { feature: "Datenbezug", standard: "Rät aus dem Trainingswissen", pe: "Antwortet aus Ihren Daten per RAG" },
  { feature: "Zeit pro Aufgabe", standard: "Viel manuelle Nachbearbeitung", pe: "Weniger Iterationen, schneller fertig" },
  { feature: "Sicherheit", standard: "Anfällig für Prompt Injection", pe: "Guardrails und Validierung aktiv" },
  { feature: "ROI", standard: "Potenzial bleibt ungenutzt", pe: "50 bis 300 Prozent bessere Ergebnisse" },
];

const stats = [
  { v: "300%", l: "bessere KI-Ergebnisse" },
  { v: "80%", l: "weniger Halluzinationen" },
  { v: "5 h", l: "Zeitersparnis pro Woche" },
  { v: "60%", l: "weniger Nachbearbeitung" },
];

const capabilities = [
  { icon: MessageSquare, title: "Prompt-Strategie & Design", text: "Wir entwickeln maßgeschneiderte System-Prompts, Rollen, Ausgabeformate und Qualitätskontrollen, abgestimmt auf ChatGPT, Claude oder Open-Source-LLMs." },
  { icon: Target, title: "Prompt-Optimierung & Testing", text: "Systematische A/B-Tests und Evaluierung: Wir messen Qualität, Konsistenz und Zuverlässigkeit und optimieren iterativ bis zur Produktionsreife." },
  { icon: Layers, title: "Prompt Chaining & Workflows", text: "Komplexe Aufgaben in mehrere Schritte zerlegen, mit n8n oder LangChain für mehrstufige Analysen und automatisierte Entscheidungen." },
  { icon: Database, title: "RAG & Kontext-Integration", text: "Ihre Dokumente, Datenbanken und Wissensdatenbanken werden eingebunden, damit die KI präzise auf Basis Ihrer eigenen Daten antwortet." },
  { icon: BookOpen, title: "Prompt-Engineering-Workshops", text: "Praxisnahe Schulungen für Ihre Teams, von den Grundlagen bis zu Chain-of-Thought, Few-Shot und Tool-Use, mit Beispielen aus Ihrem Alltag." },
  { icon: Shield, title: "Prompt Security & Guardrails", text: "Schutz vor Prompt Injection und Fehlausgaben durch Guardrails, Validierungen und Monitoring für sichere KI im Unternehmenskontext." },
];

const audience = [
  { icon: Building2, who: "Unternehmen mit KI-Tools", what: "Sie nutzen ChatGPT, Copilot oder andere KI-Tools und wollen die Ergebnisqualität systematisch verbessern und standardisieren." },
  { icon: Code2, who: "Entwickler & IT-Teams", what: "Prompt Engineering für API-Integrationen: System-Prompts, Function Calling, Tool-Use und automatisierte KI-Pipelines." },
  { icon: Scale, who: "Rechtsanwälte & Kanzleien", what: "Präzise Prompts für juristische Recherche, Vertragsprüfung und Dokumentenanalyse mit minimalen Halluzinationen." },
  { icon: Stethoscope, who: "Arztpraxen & Medizin", what: "Strukturierte Zusammenfassungen, Befundtexte und Patientenkommunikation mit klaren Guardrails und Datenschutz." },
  { icon: Megaphone, who: "Marketing & Content", what: "Konsistente Markenkommunikation: Tonalität, Style Guides und Brand Voice fest in System-Prompts verankert." },
  { icon: Users, who: "HR & Recruiting", what: "KI-gestützte Stellenbeschreibungen, Bewerbungsanalyse und Kandidatenkommunikation mit professionellen Prompts." },
];

const stack = [
  { category: "LLM-Modelle", tools: "ChatGPT (GPT-4o), Claude (Anthropic), Llama, Mistral, Gemini" },
  { category: "Prompt Management", tools: "LangSmith, Langfuse, PromptLayer, Promptfoo" },
  { category: "RAG & Kontext", tools: "LangChain, LlamaIndex, Qdrant, pgvector" },
  { category: "Workflow & Automation", tools: "n8n, LangGraph, CrewAI, Semantic Kernel" },
  { category: "Testing & Evaluierung", tools: "Promptfoo, RAGAS, DeepEval, eigene Benchmarks" },
  { category: "Security & Guardrails", tools: "Guardrails AI, NeMo Guardrails, Prompt Shields" },
];

const steps = [
  { step: "01", icon: Search, title: "Kostenlose Erstanalyse", time: "30 Minuten", desc: "Wir lernen Ihre KI-Nutzung kennen und identifizieren die Stellen, an denen besseres Prompting den größten Hebel bietet. Kein Verkaufsgespräch." },
  { step: "02", icon: Layers, title: "Prompt-Audit & Assessment", time: "Woche 1", desc: "Wir analysieren bestehende Prompts, Use Cases und Tools und definieren eine maßgeschneiderte Prompt-Strategie mit klaren Qualitätszielen." },
  { step: "03", icon: FlaskConical, title: "Prompt-Design & Testing", time: "Wochen 2 bis 3", desc: "Wir bauen System-Prompts, RAG-Anbindung und Guardrails, testen systematisch gegen Benchmarks und optimieren bis zur Produktionsreife." },
  { step: "04", icon: Rocket, title: "Workshop & Integration", time: "ab Woche 4", desc: "Wir schulen Ihr Team praxisnah und verankern die Prompts in Ihren Workflows, damit das Wissen im Unternehmen bleibt und produktiv genutzt wird." },
];

const reasons = [
  { icon: Sparkles, title: "DACH-Expertise", badge: "Made in Austria", desc: "Unsere Prompts sind für den deutschsprachigen Markt im DACH-Raum optimiert: österreichisches, deutsches und Schweizer Deutsch, Fachterminologie und kultureller Kontext statt generischer englischer Templates." },
  { icon: Target, title: "Branchenspezifisch", badge: "Maßgeschneidert", desc: "Wir entwickeln Prompts, die Ihre Branche verstehen: juristische Sprache für Kanzleien, medizinische Terminologie für Praxen, technische Dokumentation für IT." },
  { icon: Gauge, title: "Messbare Ergebnisse", badge: "Datengetrieben", desc: "Jede Optimierung wird systematisch evaluiert und getestet. Sie erhalten Vorher-Nachher-Vergleiche und klare KPIs für die Verbesserung Ihrer Ergebnisse." },
];

const related = [
  { href: "/leistungen/ki-schulung", icon: GraduationCap, title: "KI Schulung & Workshops", desc: "Umfassende Schulungen für Ihr Team, von Prompt Engineering bis zur KI-Strategie." },
  { href: "/leistungen/ki-wissensdatenbank", icon: Database, title: "KI Wissensdatenbank", desc: "RAG-Anbindung, damit Ihre Prompts auf Ihr Firmenwissen zugreifen, DSGVO-konform." },
  { href: "/leistungen/agentic-ai", icon: Bot, title: "Agentic AI", desc: "Autonome KI-Agents, die durchdachte Prompts in mehrstufige Aufgaben übersetzen." },
];

export default function Page() {
  return (
    <>
      <Script id="faq-prompt-engineering" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-prompt-engineering" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                    Prompt Engineering, KI-Prompting
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Prompt Engineering, das aus jeder KI <span className="text-primary">verlässliche Ergebnisse</span> macht
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Dieselben Modelle, völlig andere Resultate. Wir komponieren System, Rolle, Kontext, Output und Guardrails zu Prompts, die zuverlässig, präzise und reproduzierbar arbeiten. Für ChatGPT, Claude und Open-Source-LLMs im DACH-Raum.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Erstgespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#bausteine">Prompt-Bausteine ansehen</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-primary" /> EU AI Act</span>
                    <span className="flex items-center gap-1.5"><Brain className="w-4 h-4 text-primary" /> Modellübergreifend</span>
                  </div>
                </div>

                {/* Hero-Visual: Prompt-Bausteine */}
                <Card className="relative border-2 shadow-xl shadow-primary/5">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Braces className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">prompt.compose</div>
                        <div className="text-xs text-muted-foreground">5 Bausteine, ein zuverlässiger Output</div>
                      </div>
                      <Badge variant="outline" className="ml-auto rounded-full text-[10px] bg-primary/10 text-primary border-primary/20">geprüft</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-2.5">
                    {blocks.map((b, i) => {
                      const Icon = b.icon;
                      return (
                        <div key={i} className="flex gap-3 rounded-lg border border-border bg-muted/30 p-3">
                          <div className="flex flex-col items-center pt-0.5">
                            <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                              <Icon className="w-3.5 h-3.5 text-primary" />
                            </div>
                            {i < blocks.length - 1 && <span className="w-px flex-1 mt-1 bg-border" aria-hidden />}
                          </div>
                          <div className="min-w-0">
                            <div className="text-[11px] font-bold uppercase tracking-wider text-primary mb-0.5">{b.tag}</div>
                            <div className="text-sm text-foreground leading-snug">{b.snippet}</div>
                          </div>
                        </div>
                      );
                    })}
                    <div className="flex items-center gap-2 pt-1 text-[11px] text-muted-foreground">
                      <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                      Strukturiert, konsistent und überprüfbar statt vage geraten.
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* ANATOMIE: Bento der fünf Bausteine */}
          <section id="bausteine" className="py-14 md:py-20 bg-white/50 scroll-mt-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Anatomie</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Die fünf Bausteine eines starken Prompts</h2>
                <p className="text-lg text-muted-foreground">Ein professioneller Prompt ist kein Satz, sondern eine Komposition. Erst das Zusammenspiel dieser Komponenten macht KI-Ausgaben verlässlich.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {anatomy.map((a, i) => {
                  const Icon = a.icon;
                  return (
                    <Card key={i} className={`hover-lift border-2 ${a.feature ? "lg:col-span-2 bg-primary/5 border-primary/20" : ""}`}>
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-1">
                          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <span className="text-xs font-bold uppercase tracking-wider text-primary">{a.tag}</span>
                        </div>
                        <CardTitle className="text-lg">{a.title}</CardTitle>
                      </CardHeader>
                      <CardContent><p className="text-muted-foreground leading-relaxed text-sm">{a.desc}</p></CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* DEFINITION: 2-spaltig mit Info-Card */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Definition</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was ist Prompt Engineering?</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p><strong className="text-foreground">Prompt Engineering</strong> ist die Disziplin, Anfragen an KI-Modelle so zu strukturieren, dass sie zuverlässig die bestmöglichen Ergebnisse liefern. Ob Sie ChatGPT für Texterstellung nutzen, Claude für Datenanalyse oder ein Open-Source-LLM wie Llama für interne Prozesse: die Qualität hängt maßgeblich davon ab, wie Sie Ihre <strong className="text-foreground">KI-Prompts</strong> formulieren. Schlechte Prompts liefern vage, inkonsistente oder falsche Antworten, professionell komponierte Prompts produzieren zuverlässige, strukturierte und verwertbare Ergebnisse.</p>
                    <p>In der Praxis bedeutet <strong className="text-foreground">Prompting</strong> weit mehr als eine Frage in ChatGPT zu tippen. Es umfasst System-Prompts als grundlegende Verhaltensanweisung, Rollen-Definitionen, die die KI als Experten positionieren, Output-Spezifikationen wie JSON oder Tabellen und gezieltes Kontext-Management. Fortgeschrittene <strong className="text-foreground">Prompt Techniken</strong> wie Chain-of-Thought, Few-Shot Learning und Retrieval-Augmented Generation machen selbst komplexe Aufgaben wie juristische Analysen oder technische Dokumentation zuverlässig bearbeitbar.</p>
                    <p>Für Unternehmen im DACH-Raum ist Prompt Engineering besonders relevant, weil die meisten Modelle primär auf englische Daten trainiert sind. Deutsche Prompts erfordern explizite Sprachangaben, kulturelle Kontextualisierung und branchenspezifische Fachterminologie. Wir kennen diese Feinheiten und entwickeln Prompts, die spezifisch für den deutschsprachigen Markt optimiert sind.</p>
                    <p>Der ROI ist hoch: Unternehmen berichten von 50 bis 300 Prozent besseren Ergebnissen, 60 bis 80 Prozent weniger Nachbearbeitung und 2 bis 5 Stunden Zeitersparnis pro Mitarbeiter und Woche. Gleichzeitig sinkt das Risiko von <strong className="text-foreground">Halluzinationen</strong> drastisch, ein entscheidender Faktor in regulierten Branchen wie Recht, Medizin und Finanzen.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">System-Prompts</Badge>
                    <Badge variant="secondary" className="rounded-full">Chain-of-Thought</Badge>
                    <Badge variant="secondary" className="rounded-full">Few-Shot Learning</Badge>
                    <Badge variant="secondary" className="rounded-full">RAG</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Prompt Engineering auf einen Blick</CardTitle>
                    <CardDescription>Was professionelles Prompting im Unternehmen leistet.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {[
                      ["Ziel", "zuverlässige, reproduzierbare KI-Ausgaben"],
                      ["Bausteine", "System, Rolle, Kontext, Output, Guardrails"],
                      ["Modelle", "ChatGPT, Claude, Llama, Mistral"],
                      ["Datenbezug", "RAG aus Ihren eigenen Dokumenten"],
                      ["Sicherheit", "Guardrails gegen Prompt Injection"],
                      ["Sprache", "DACH-optimiert, Fachterminologie"],
                    ].map(([label, value]) => (
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

          {/* VORHER / NACHHER */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Vorher / Nachher</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ein Beispiel sagt mehr als jede Theorie</h2>
                <p className="text-lg text-muted-foreground">Dieselbe Absicht, zwei Welten. Links eine beiläufige Frage, rechts ein durchkomponierter Prompt.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <Card className="border-2">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                        <X className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <CardTitle className="text-base text-muted-foreground">Schwacher Prompt</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-2">
                    {beforeAfter.weak.map((line, i) => (
                      <div key={i} className="rounded-lg bg-muted/40 px-3 py-2 text-sm text-foreground leading-snug">{line}</div>
                    ))}
                    <p className="text-xs text-muted-foreground pt-2">Ergebnis: oberflächlicher Fließtext, kein Datenbezug, schwer überprüfbar, jedes Mal anders.</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-primary/30 bg-primary/5">
                  <CardHeader className="border-b border-primary/20">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <CardTitle className="text-base">Engineerter Prompt</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-2">
                    {beforeAfter.strong.map((line, i) => (
                      <div key={i} className="rounded-lg bg-background border border-border px-3 py-2 text-sm text-foreground leading-snug">{line}</div>
                    ))}
                    <p className="text-xs text-muted-foreground pt-2">Ergebnis: strukturierte, belegte Tabelle, reproduzierbar und direkt weiterverarbeitbar.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* TECHNIKEN: Tabs */}
          <section id="techniken" className="py-14 md:py-20 scroll-mt-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Techniken & Methoden</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Prompt Techniken: von Basics bis Security</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Welche Technik wann sinnvoll ist, hängt vom Anwendungsfall ab. Wir kombinieren sie zu robusten Prompt-Strategien.</p>
              </div>
              <Tabs defaultValue="basics" className="w-full">
                <TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">
                  {[["basics", "Basics"], ["advanced", "Advanced"], ["security", "Security"], ["tools", "Tools"]].map(([v, l]) => (
                    <TabsTrigger key={v} value={v} className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border">{l}</TabsTrigger>
                  ))}
                </TabsList>
                {(["basics", "advanced", "security", "tools"] as const).map((key) => (
                  <TabsContent key={key} value={key}>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {techniques[key].map((t, i) => {
                        const Icon = t.icon;
                        return (
                          <Card key={i} className="hover-lift border-2">
                            <CardHeader>
                              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                                <Icon className="w-5 h-5 text-primary" />
                              </div>
                              <CardTitle className="text-lg">{t.title}</CardTitle>
                            </CardHeader>
                            <CardContent><p className="text-muted-foreground leading-relaxed text-sm">{t.desc}</p></CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>

          {/* VERGLEICH: Table */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Der Unterschied</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Standard-KI-Nutzung vs. mit Prompt Engineering</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Dieselben Modelle, völlig andere Ergebnisse. Professionelles Prompting entscheidet, ob KI im Unternehmen wirklich produktiv wird.</p>
              </div>
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[26%] font-bold text-foreground">Kriterium</TableHead>
                      <TableHead className="text-muted-foreground">Standard-KI-Nutzung</TableHead>
                      <TableHead className="text-primary font-bold">Mit Prompt Engineering</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparison.map((r, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{r.feature}</TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          <span className="inline-flex items-start gap-1.5"><X className="w-3.5 h-3.5 text-muted-foreground/60 mt-0.5 shrink-0" />{r.standard}</span>
                        </TableCell>
                        <TableCell className="text-sm text-primary font-medium">
                          <span className="inline-flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />{r.pe}</span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </section>

          {/* STATS-BAND */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-2 lg:grid-cols-4 border-2 border-border rounded-2xl overflow-hidden bg-card">
                {stats.map((s, i) => (
                  <div key={i} className="p-7 md:p-8 text-center border-b lg:border-b-0 border-border [&:nth-child(odd)]:border-r lg:[&:not(:last-child)]:border-r">
                    <div className="text-4xl md:text-5xl font-bold text-primary">{s.v}</div>
                    <div className="text-sm text-muted-foreground mt-2">{s.l}</div>
                  </div>
                ))}
              </div>
              <p className="text-center text-xs text-muted-foreground mt-4">Erfahrungswerte aus Prompt-Optimierungen für Unternehmen im DACH-Raum.</p>
            </div>
          </section>

          <ModelLogoStrip
            caption="Optimiert für die führenden Sprachmodelle"
            items={[
              { slug: "openai", name: "OpenAI" },
              { slug: "anthropic", name: "Anthropic" },
              { slug: "mistralai", name: "Mistral AI" },
              { slug: "googlegemini", name: "Google Gemini" },
              { slug: "meta", name: "Llama" },
            ]}
          />

          {/* LEISTUNGEN: Bento */}
          <section id="leistungen" className="py-14 md:py-20 bg-white/50 scroll-mt-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unsere Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Was wir im Prompt Engineering übernehmen</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Von der Strategie bis zum produktiven Einsatz: wir machen Ihre KI-Kommunikation professionell und wartbar.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {capabilities.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <Card key={i} className={`hover-lift border-2 ${i === 0 ? "lg:col-span-2 bg-primary/5 border-primary/20" : ""}`}>
                      <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{c.title}</CardTitle>
                      </CardHeader>
                      <CardContent><p className="text-muted-foreground leading-relaxed text-sm">{c.text}</p></CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ANWENDUNGSFÄLLE / ZIELGRUPPEN */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Anwendungsfälle</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Für wen sich Prompt Engineering rechnet</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Überall, wo KI-Tools im Einsatz sind, entscheidet professionelles Prompting über die Qualität der Ergebnisse.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {audience.map((a, i) => {
                  const Icon = a.icon;
                  return (
                    <Card key={i} className="hover-lift border-2">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-2.5 mb-2">
                          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <Icon className="w-4 h-4 text-primary" />
                          </div>
                          <div className="font-bold text-foreground">{a.who}</div>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{a.what}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* TECH STACK */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Tech Stack</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Unser Prompt Engineering Tech Stack</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {stack.map(({ category, tools }, i) => (
                  <Card key={i} className="border-2">
                    <CardContent className="pt-6">
                      <div className="font-bold text-primary mb-1">{category}</div>
                      <div className="text-muted-foreground text-sm">{tools}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* PROZESS: vertikale Timeline */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Der Ablauf</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">In 4 Schritten zu professionellen Prompts</h2>
                <p className="text-lg text-muted-foreground">Von der ersten Analyse bis zur Integration in Ihre Workflows, transparent und ohne Überraschungen.</p>
              </div>
              <div className="relative">
                <div className="absolute left-6 top-3 bottom-3 w-px bg-gradient-to-b from-primary/40 via-primary/25 to-primary/40 hidden sm:block" aria-hidden />
                <div className="space-y-5">
                  {steps.map((s) => {
                    const Icon = s.icon;
                    return (
                      <div key={s.step} className="relative flex gap-4 sm:gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shrink-0 shadow-lg shadow-primary/20 relative z-10 ring-4 ring-background">
                          <Icon className="w-5 h-5" />
                        </div>
                        <Card className="border-2 flex-1">
                          <CardContent className="py-4">
                            <div className="text-xs font-bold text-primary mb-1 tracking-wide">SCHRITT {s.step}, {s.time}</div>
                            <h3 className="text-lg font-bold mb-1">{s.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                          </CardContent>
                        </Card>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* WARUM KI KANZLEI */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum die KI Kanzlei</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Warum Prompt Engineering von der KI Kanzlei?</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {reasons.map(({ icon: Icon, title, desc, badge }, i) => (
                  <Card key={i} className="hover-lift border-2">
                    <CardHeader>
                      <div className="flex items-center justify-between gap-3 mb-1">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <Badge variant="outline" className="rounded-full text-xs bg-primary/10 text-primary border-primary/20">{badge}</Badge>
                      </div>
                      <CardTitle className="text-lg">{title}</CardTitle>
                    </CardHeader>
                    <CardContent><p className="text-muted-foreground text-sm leading-relaxed">{desc}</p></CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Häufige Fragen zum Prompt Engineering</h2>
                <p className="text-lg text-muted-foreground">Die wichtigsten Fragen rund um Prompting, klar beantwortet.</p>
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

          {/* VERWANDTE LEISTUNGEN */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Mehr Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zum Prompt Engineering</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {related.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <a key={i} href={s.href} className="group block">
                      <Card className="h-full border-2 hover-lift group-hover:border-primary/40">
                        <CardHeader>
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                            {serviceLogos[s.href] ? <img src={`/img/logos/${serviceLogos[s.href]}.svg`} alt={s.title} className="w-7 h-7 object-contain" /> : <Icon className="w-6 h-6 text-primary" />}
                          </div>
                          <CardTitle className="text-xl">{s.title}</CardTitle>
                        </CardHeader>
                        <CardContent><p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p></CardContent>
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
