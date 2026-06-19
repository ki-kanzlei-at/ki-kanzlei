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
  GraduationCap,
  BookOpen,
  Zap,
  Target,
  Users,
  CheckCircle,
  Check,
  X,
  Cpu,
  Building2,
  Compass,
  Bot,
  Search,
  Rocket,
  Award,
  Sparkles,
  Brain,
  Lightbulb,
  ShieldCheck,
  Layers,
  Workflow,
  Database,
  FolderKanban,
  Puzzle,
  MessageSquare,
  FileText,
  Clock,
  TrendingUp,
  MapPin,
  ScrollText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Claude Schulung & Training für Unternehmen",
  description:
    "Claude Schulung für Unternehmen im DACH-Raum: praxisnahes Anthropic Claude Training für Teams, Führungskräfte und Fachabteilungen. Prompting, Projects, Artifacts, MCP und Tools, DSGVO-konform und inhouse oder remote.",
  keywords:
    "Claude Schulung, Claude Training, Claude KI, Anthropic Claude, Claude AI Schulung, Claude Kurs, KI Schulung, ChatGPT Schulung, Claude für Unternehmen, Anthropic Training",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/claude-schulung" },
};

const faqs = [
  {
    q: "Was ist eine Claude Schulung?",
    a: "Eine Claude Schulung vermittelt Ihrem Team, wie es Anthropic Claude produktiv und sicher im Arbeitsalltag einsetzt. Statt allgemeiner KI-Theorie arbeiten wir konkret mit Claude: effektives Prompting, der Einsatz von Projects und Artifacts, die Nutzung von Tools und MCP-Servern sowie die rechtssichere Verwendung im Unternehmen. Die Inhalte sind auf Ihre Prozesse, Abteilungen und Datenschutzanforderungen zugeschnitten, damit aus dem Tool Claude KI ein echter Produktivitaetsgewinn wird.",
  },
  {
    q: "Was beinhaltet ein Claude Training für Teams?",
    a: "Ein Claude Training umfasst typischerweise die Grundlagen von Claude und der zugrunde liegenden Modelle, effektives Prompting für reproduzierbare Ergebnisse, die Arbeit mit Projects für wiederkehrende Aufgaben, das Erstellen von Artifacts wie Dokumenten und Code, die Anbindung eigener Daten und Tools über MCP sowie die sichere Unternehmensnutzung. Dazu kommen Anwendungsfaelle pro Abteilung. Statt reiner Vortraege setzen wir auf Hands-on-Uebungen, in denen Ihr Team direkt mit Claude arbeitet.",
  },
  {
    q: "Was ist der Unterschied zwischen einer Claude Schulung und einer ChatGPT Schulung?",
    a: "Beide vermitteln den souveraenen Umgang mit einem KI-Assistenten, doch Claude von Anthropic hat eigene Stärken und ein eigenes Bedienkonzept. Eine Claude Schulung geht gezielt auf Projects, Artifacts, das große Kontextfenster und das Model Context Protocol ein, also Funktionen, die in einer ChatGPT Schulung so nicht vorkommen. Wir zeigen ausserdem, wo Claude im Vergleich zu ChatGPT die bessere Wahl ist und wie sich beide Werkzeuge sinnvoll nebeneinander einsetzen lassen.",
  },
  {
    q: "Für wen ist eine Claude Schulung geeignet?",
    a: "Claude Schulungen eignen sich für alle Mitarbeiterebenen. Führungskräfte lernen die strategische Einordnung und ROI-Bewertung, Fachabteilungen den effizienten Claude-Einsatz im Tagesgeschaeft, IT- und Entwickler-Teams die Anbindung von Tools und MCP-Servern und Marketing- oder Fachteams die Nutzung von Claude für Content, Analyse und Recherche. Wir passen Tempo, Tiefe und Beispiele an die jeweilige Rolle an, damit jede Gruppe genau das mitnimmt, was sie in der Praxis braucht.",
  },
  {
    q: "Findet die Claude Schulung inhouse oder remote statt?",
    a: "Beide Varianten sind möglich. Wir kommen für eine Inhouse-Schulung zu Ihnen ins Unternehmen oder führen das Claude Training live remote durch. Bei verteilten Teams hat sich ein Remote-Kick-off mit anschliessenden Vertiefungen bewaehrt. Die Inhalte bleiben in jedem Format gleich praxisnah, und wir buchen die Workshop-Tage so, dass sie sich gut in Ihren Betriebsalltag einfügen.",
  },
  {
    q: "Ist Claude DSGVO-konform im Unternehmen nutzbar?",
    a: "Ja, bei richtiger Einrichtung. Anthropic Claude laesst sich über datenschutzfreundliche Wege nutzen, etwa Claude for Work mit klaren Datennutzungsregeln oder Claude über Amazon Bedrock und Google Cloud mit EU-Hosting. In der Schulung zeigen wir, welcher Zugangsweg für welche Datenkategorien passt, wo die Grenzen liegen und wie Ihr Team Claude sicher und im Einklang mit DSGVO und EU AI Act einsetzt, ohne sensible Daten in ungepruefte Kanäle zu geben.",
  },
  {
    q: "Brauchen die Teilnehmer technisches Vorwissen für das Claude Training?",
    a: "Nein. Unsere Einfuehrungsformate setzen kein Vorwissen voraus und holen jeden Teilnehmer dort ab, wo er steht. Für fortgeschrittene Themen wie die Anbindung von Tools und MCP-Servern oder Claude in automatisierten Workflows ist Grundwissen hilfreich, das wir bei Bedarf in einem vorgeschalteten Modul aufbauen. So lernt jede Gruppe auf dem passenden Niveau, vom Fachanwender bis zum Entwickler-Team.",
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
  name: "Claude Schulung",
  serviceType: "Claude Schulung, Claude Training, Anthropic Training",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "Praxisnahe Claude Schulungen und Anthropic Claude Trainings für Unternehmen im DACH-Raum: Prompting, Projects, Artifacts, MCP und Tools sowie sichere Unternehmensnutzung für Teams, Führungskräfte und Fachabteilungen, DSGVO-konform und inhouse oder remote.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

// Hero learning-path modules with competence depth (out of 6 segments)
const pathModules = [
  { name: "Claude-Grundlagen", level: 3 },
  { name: "Effektives Prompting", level: 4 },
  { name: "Projects & Artifacts", level: 4 },
  { name: "Tools & MCP", level: 5 },
  { name: "Claude in Workflows", level: 5 },
  { name: "Sichere Unternehmensnutzung", level: 6 },
];

const formats = [
  {
    icon: GraduationCap,
    title: "Claude Einfuehrungs-Workshop",
    description:
      "Halbtaegiger Workshop für ganze Teams: Wie tickt Anthropic Claude, was kann Claude KI im Alltag und wie gelingen die ersten produktiven Anwendungsfaelle? Kein Vorwissen nötig, maximaler Aha-Effekt.",
    duration: "4 Stunden",
  },
  {
    icon: BookOpen,
    title: "Prompting & Projects Training",
    description:
      "Ganztaegiges Training: effektives Prompting für reproduzierbare Ergebnisse, der Aufbau von Projects für wiederkehrende Aufgaben und das Erstellen von Artifacts wie Dokumenten, Tabellen und Code.",
    duration: "1 Tag",
  },
  {
    icon: Zap,
    title: "Tools, MCP & Workflows",
    description:
      "Praktischer Workshop für fortgeschrittene Teams: eigene Daten und Tools über MCP an Claude anbinden und Claude sauber in bestehende Ablaeufe und Automatisierungen integrieren.",
    duration: "1 bis 2 Tage",
  },
  {
    icon: Target,
    title: "Claude für Führungskräfte",
    description:
      "Exklusives Führungskräfte-Seminar: Claude strategisch einordnen, den ROI bewerten, Claude gegen ChatGPT abwaegen und den sicheren, DSGVO-konformen Einsatz im Unternehmen verankern.",
    duration: "4 Stunden",
  },
  {
    icon: Users,
    title: "Massgeschneiderte Abteilungs-Schulung",
    description:
      "Individuell auf Ihre Fachabteilung zugeschnitten: Claude Training für Vertrieb, Marketing, Recht, Personal, Support oder Finance, mit Uebungen an Ihren echten Aufgaben und Dokumenten.",
    duration: "Individuell",
  },
  {
    icon: Award,
    title: "Claude Power-User-Programm",
    description:
      "Mehrtaegiges Programm mit Begleitung: von den Grundlagen bis zur eigenstaendigen Nutzung von Projects, Artifacts und MCP, inklusive interner Multiplikatoren, die Claude im Team weitertragen.",
    duration: "2 bis 4 Tage",
  },
];

const properties = [
  { label: "Praxisfokus", value: "Uebungen an echten Aufgaben aus Ihrem Alltag" },
  { label: "DSGVO-konform", value: "Claude for Work, Bedrock und EU-Hosting" },
  { label: "Abteilungsbezug", value: "Use Cases pro Fachabteilung" },
  { label: "Alle Ebenen", value: "Vom Einsteiger bis zur Fuehrungskraft" },
  { label: "Claude-Tiefe", value: "Projects, Artifacts, Tools und MCP" },
  { label: "Format", value: "Inhouse oder remote, DACH-weit" },
  { label: "Abgrenzung", value: "Klarer Vergleich Claude und ChatGPT" },
];

const levels = [
  {
    label: "Stufe 01 - Einsteiger",
    icon: Lightbulb,
    title: "Claude verstehen",
    fill: 2,
    points: ["Was Claude kann und was nicht", "Erste sichere Nutzung im Alltag", "Claude richtig ansprechen statt raten"],
  },
  {
    label: "Stufe 02 - Fortgeschritten",
    icon: Zap,
    title: "Claude produktiv nutzen",
    fill: 4,
    points: ["Effektives Prompting routiniert anwenden", "Projects und Artifacts gezielt einsetzen", "Ergebnisse kritisch prüfen und absichern"],
  },
  {
    label: "Stufe 03 - Power-User",
    icon: Rocket,
    title: "Claude erweitern",
    fill: 6,
    points: ["Tools und MCP-Server anbinden", "Claude in Workflows integrieren", "Claude DSGVO-konform im Team verankern"],
  },
];

const comparison = [
  {
    feature: "Fokus auf Claude und Anthropic",
    online: "Generisch, oft nur ChatGPT",
    trainer: "Teils, selten Claude-spezifisch",
    kanzlei: "Voll auf Claude ausgerichtet",
  },
  {
    feature: "Projects & Artifacts",
    online: "Kaum behandelt",
    trainer: "Variabel",
    kanzlei: "Ausfuehrlich und praktisch",
  },
  {
    feature: "Tools & MCP-Anbindung",
    online: "Nicht enthalten",
    trainer: "Selten Thema",
    kanzlei: "Eigenes Aufbaumodul",
  },
  {
    feature: "DSGVO & EU AI Act",
    online: "Oft unklar",
    trainer: "Variabel",
    kanzlei: "Bedrock, EU-Hosting, Compliance",
  },
  {
    feature: "Abteilungsspezifische Use Cases",
    online: "Keine",
    trainer: "Begrenzt",
    kanzlei: "Pro Fachabteilung",
  },
  {
    feature: "Hands-on an echten Aufgaben",
    online: "Passives Video",
    trainer: "Unterschiedlich",
    kanzlei: "Durchgehend praktisch",
  },
  {
    feature: "Vergleich Claude und ChatGPT",
    online: "Einseitig",
    trainer: "Selten neutral",
    kanzlei: "Ehrlich und entscheidungsreif",
  },
];

const roles = [
  {
    value: "fuehrung",
    label: "Führungskräfte",
    icon: Target,
    head: "Führungskräfte & Entscheider",
    text: "Führungskräfte lernen, Claude strategisch einzuordnen, den ROI eines breiten Claude-Rollouts zu bewerten und ihr Unternehmen sicher durch den KI-Wandel zu führen, inklusive einer fundierten Entscheidung zwischen Claude und ChatGPT.",
    goals: [
      "Claude-Einsatz strategisch bewerten und priorisieren",
      "Claude und ChatGPT fundiert gegeneinander abwaegen",
      "Einen sicheren, DSGVO-konformen Rollout planen",
      "Das Team auf die Arbeit mit Claude vorbereiten",
    ],
  },
  {
    value: "fachabteilung",
    label: "Fachabteilungen",
    icon: Users,
    head: "Fachabteilungen im Tagesgeschaeft",
    text: "Fachabteilungen lernen den effizienten Claude-Einsatz im Tagesgeschaeft, damit Claude nicht nur lizenziert ist, sondern in Vertrieb, Marketing, Recht, Personal oder Support täglich messbar Zeit spart.",
    goals: [
      "Claude sicher im Alltag der Abteilung einsetzen",
      "Mit effektivem Prompting präzise Ergebnisse erzielen",
      "Projects für wiederkehrende Aufgaben aufbauen",
      "Ergebnisse kritisch prüfen statt blind uebernehmen",
    ],
  },
  {
    value: "it",
    label: "IT-Teams",
    icon: Cpu,
    head: "IT- & Entwickler-Teams",
    text: "IT-Teams lernen, Claude über das Model Context Protocol an eigene Daten und Tools anzubinden, Claude in Workflows zu integrieren und den unternehmensweiten Einsatz sicher und wartbar aufzusetzen.",
    goals: [
      "Eigene Tools und Daten über MCP anbinden",
      "Claude in bestehende Systeme und Workflows integrieren",
      "Claude über Bedrock und EU-Hosting bereitstellen",
      "Zugriffe, Rechte und Compliance sauber regeln",
    ],
  },
  {
    value: "marketing",
    label: "Marketing & Fach",
    icon: Building2,
    head: "Marketing- & Fachteams",
    text: "Marketing- und Fachteams lernen, Claude für Content, Analyse, Recherche und Aufbereitung zu nutzen, ergaenzt um abteilungsspezifische Anwendungsfaelle und den Einsatz von Artifacts für fertige Ergebnisse.",
    goals: [
      "Claude für Content, Analyse und Recherche nutzen",
      "Artifacts für Texte, Tabellen und Vorlagen erstellen",
      "Grosse Dokumente im Kontextfenster auswerten",
      "Abteilungsspezifische Anwendungsfaelle umsetzen",
    ],
  },
];

const curriculum = [
  { topic: "Grundlagen von Claude", detail: "Wie funktioniert Anthropic Claude, welche Modelle gibt es und worin liegen die Stärken von Claude KI gegenüber anderen Assistenten?" },
  { topic: "Effektives Prompting", detail: "Vom einfachen Prompt bis zu Rollen, Few-Shot und strukturierten Anweisungen für präzise, reproduzierbare Ergebnisse mit Claude." },
  { topic: "Projects & Artifacts", detail: "Projects für wiederkehrende Aufgaben einrichten und Artifacts wie Dokumente, Tabellen und Code direkt in Claude erstellen und verfeinern." },
  { topic: "Tools & MCP-Nutzung", detail: "Eigene Daten und Anwendungen über das Model Context Protocol an Claude anbinden, damit Claude auf Ihr Firmenwissen zugreift." },
  { topic: "Claude in Workflows", detail: "Claude sinnvoll in bestehende Ablaeufe und Automatisierungen einbetten, von der Idee bis zum laufenden, wiederholbaren Prozess." },
  { topic: "Sichere Unternehmensnutzung", detail: "Claude DSGVO-konform einsetzen über Claude for Work, Amazon Bedrock und EU-Hosting, mit klaren Regeln pro Datenkategorie." },
  { topic: "Use Cases pro Abteilung", detail: "Konkrete Claude-Anwendungsfaelle für Vertrieb, Marketing, Recht, Personal, Support und Finance, direkt an Ihren Aufgaben." },
  { topic: "Claude vs. ChatGPT", detail: "Wo Claude die bessere Wahl ist, wo ChatGPT, und wie sich beide Werkzeuge im Unternehmen sinnvoll nebeneinander nutzen lassen." },
];

const tools = [
  { name: "Claude Modelle", icon: Brain, badge: "Anthropic", desc: "Die Claude-Modellfamilie verstehen: Stärken bei langen Texten, Analyse und Code sowie die richtige Modellwahl je nach Aufgabe und Budget." },
  { name: "Effektives Prompting", icon: ScrollText, badge: "Methodik", desc: "Bewaehrte Strukturen für präzise Prompts mit Claude, von klaren Rollen über Beispiele bis zu wiederverwendbaren Vorlagen." },
  { name: "Projects", icon: FolderKanban, badge: "Wiederverwendung", desc: "Projects buendeln Anweisungen, Wissen und Dateien für wiederkehrende Aufgaben, damit das Team konsistente Ergebnisse erzielt." },
  { name: "Artifacts", icon: FileText, badge: "Ergebnisse", desc: "Dokumente, Tabellen, Code und kleine Apps direkt in Claude erstellen, iterieren und als fertiges Arbeitsergebnis weiterverwenden." },
  { name: "Tools & MCP", icon: Puzzle, badge: "Integration", desc: "Über das Model Context Protocol greift Claude auf eigene Daten, Systeme und Tools zu, statt isoliert im Chat zu bleiben." },
  { name: "Sicherer Zugang", icon: ShieldCheck, badge: "Datenschutz", desc: "Claude for Work, Amazon Bedrock und EU-Hosting für eine DSGVO-konforme Nutzung, auch bei sensiblen Unternehmensdaten." },
];

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Readiness-Check",
    time: "Vorbereitung",
    desc: "Wir ermitteln den Wissensstand Ihres Teams, klaeren den vorhandenen Claude-Zugang und definieren gemeinsam die Lernziele, pro Rolle und Abteilung.",
  },
  {
    step: "02",
    icon: GraduationCap,
    title: "Claude-Training",
    time: "Workshop-Tage",
    desc: "Praxisnahe Workshops zu Grundlagen, Prompting, Projects und Artifacts, inhouse oder remote, mit vielen Hands-on-Uebungen an echten Aufgaben.",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Tools & Praxis",
    time: "Anwendung",
    desc: "Ihr Team bindet eigene Daten und Tools über MCP an, baut erste Workflows und wendet Claude direkt auf den eigenen Arbeitsalltag an.",
  },
  {
    step: "04",
    icon: Award,
    title: "Verankerung",
    time: "Nachhaltigkeit",
    desc: "Wir begleiten Ihr Team über die Schulung hinaus, etablieren interne Multiplikatoren und sichern den DSGVO-konformen Dauerbetrieb von Claude.",
  },
];

const related = [
  {
    href: "/leistungen/ki-schulung",
    icon: GraduationCap,
    tag: "Grundlage",
    title: "KI Schulung",
    desc: "Die breite KI Schulung für Ihr Team: KI-Grundlagen, Prompt Engineering und Tools über Anbieter hinweg, ideal als Einstieg vor der Claude-Vertiefung.",
  },
  {
    href: "/leistungen/prompt-engineering",
    icon: Sparkles,
    tag: "Vertiefung",
    title: "Prompt Engineering",
    desc: "Das Spezialthema im Detail: wie Ihr Team mit ausgefeilten Prompt-Techniken konstant präzise Ergebnisse aus Claude und anderen Modellen holt.",
  },
  {
    href: "/leistungen/mcp-server",
    icon: Puzzle,
    tag: "Integration",
    title: "MCP Server",
    desc: "Eigene Daten und Tools über das Model Context Protocol an Claude anbinden, das technische Fundament für Claude im Unternehmen.",
  },
];

const logos = [
  { slug: "claude", name: "Claude" },
];

export default function Page() {
  return (
    <>
      <Script id="faq-claude-schulung" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-claude-schulung" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                    Claude Schulung - Anthropic Training
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-primary">Claude Schulung</span>, damit Ihr Team Claude wirklich beherrscht
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Anthropic Claude gehört zu den staerksten KI-Assistenten, doch das volle Potenzial entfaltet sich erst mit dem richtigen Know-how. Unser praxisnahes Claude Training bringt Teams, Führungskräfte und Fachabteilungen auf den neuesten Stand: effektives Prompting, Projects und Artifacts, Tools und MCP sowie die sichere Nutzung im Unternehmen. Inhouse oder remote, DSGVO-konform und DACH-weit.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Erstgespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#formate">Schulungsformate ansehen</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO & EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-primary" /> Inhouse oder remote</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> DACH-weit</span>
                  </div>
                </div>

                {/* Bespoke hero visual: Claude-Lernpfad / Kompetenz-Spektrum */}
                <Card className="relative border-2 shadow-xl shadow-primary/5">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <GraduationCap className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">Claude-Lernpfad</div>
                        <div className="text-xs text-muted-foreground">6 Module - Einsteiger bis Power-User</div>
                      </div>
                      <Badge variant="outline" className="ml-auto rounded-full text-[10px] bg-primary/10 text-primary border-primary/20">
                        Anthropic
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-3.5">
                    {pathModules.map((m) => (
                      <div key={m.name}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm font-medium text-foreground">{m.name}</span>
                          <span className="text-[11px] text-muted-foreground tabular-nums">{m.level}/6</span>
                        </div>
                        <div className="flex gap-1" aria-hidden>
                          {Array.from({ length: 6 }).map((_, k) => (
                            <span key={k} className={`h-2 flex-1 rounded-sm ${k < m.level ? "bg-primary" : "bg-muted"}`} />
                          ))}
                        </div>
                      </div>
                    ))}
                    <div className="pt-3 mt-1 border-t border-border">
                      <div className="flex gap-1" aria-hidden>
                        {Array.from({ length: 14 }).map((_, k) => (
                          <span
                            key={k}
                            className="h-2.5 flex-1 rounded-sm bg-primary"
                            style={{ opacity: 0.16 + (k / 13) * 0.84 }}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between text-[10px] uppercase tracking-wider text-muted-foreground font-medium mt-2">
                        <span>Einsteiger</span>
                        <span>Aufbau</span>
                        <span>Power-User</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Logo-Strip */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                    Schulung rund um
                  </span>
                  {logos.map((l) => (
                    <div key={l.slug} className="flex items-center gap-2.5 opacity-80">
                      <div className="w-7 h-7 flex items-center justify-center">
                        <img src={`/img/logos/${l.slug}.svg`} alt={`${l.name} Logo`} className="w-full h-full object-contain" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{l.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* STATS-BAND */}
          <section className="py-12 bg-white/50 border-y border-border">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: TrendingUp, v: "bis 40%", l: "schneller bei Claude-gestuetzter Arbeit" },
                  { icon: Layers, v: "6", l: "Schulungsformate, individuell kombinierbar" },
                  { icon: Clock, v: "ab 4 Std.", l: "vom Kompakt-Workshop bis zum Programm" },
                  { icon: CheckCircle, v: "100%", l: "praxisorientiert mit Hands-on-Uebungen" },
                ].map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-2xl md:text-3xl font-bold text-primary leading-none">{s.v}</div>
                        <div className="text-xs text-muted-foreground mt-1.5 leading-snug">{s.l}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* WARUM: Definition 2col + Info-Card */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum Claude Schulung</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Warum Ihr Team jetzt eine Claude Schulung braucht</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      <strong className="text-foreground">Anthropic Claude</strong> ueberzeugt mit starker Analyse, langen Kontexten und durchdachter Bedienung. Doch viele Teams nutzen Claude KI wie eine bessere Suchmaschine und lassen die eigentlichen Hebel liegen: Projects, Artifacts und die Anbindung eigener Tools. Eine professionelle <strong className="text-foreground">Claude Schulung</strong> schliesst genau diese Luecke und macht aus einer Lizenz einen echten Produktivitaetsgewinn.
                    </p>
                    <p>
                      Gleichzeitig müssen Unternehmen im DACH-Raum sicherstellen, dass Claude <strong className="text-foreground">DSGVO-konform</strong> und im Einklang mit dem EU AI Act genutzt wird. Über Claude for Work, Amazon Bedrock und EU-Hosting laesst sich das sauber loesen, wenn das Team weiss, welcher Zugangsweg für welche Daten passt. Unsere Schulung verbindet deshalb maximale Effizienz mit rechtssicherer Nutzung.
                    </p>
                    <p>
                      Der dritte Faktor ist die <strong className="text-foreground">Abgrenzung zu ChatGPT</strong>. Viele Teams kennen nur den einen Assistenten und treffen Werkzeug-Entscheidungen aus dem Bauch heraus. Wir zeigen ehrlich, wo Claude die bessere Wahl ist, wo ChatGPT, und wie sich beide sinnvoll nebeneinander einsetzen lassen.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Praxisnah</Badge>
                    <Badge variant="secondary" className="rounded-full">Projects & Artifacts</Badge>
                    <Badge variant="secondary" className="rounded-full">Tools & MCP</Badge>
                    <Badge variant="secondary" className="rounded-full">DSGVO-konform</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Was eine gute Claude Schulung ausmacht</CardTitle>
                    <CardDescription>Worauf es bei wirksamem Anthropic Claude Training wirklich ankommt.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {properties.map(({ label, value }) => (
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

          {/* KOMPETENZ-SPEKTRUM */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Kompetenz-Spektrum</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Vom ersten Prompt bis zur eigenen Claude-Integration</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Wir holen jeden Teilnehmer auf seinem Niveau ab und führen ihn entlang eines klaren Spektrums weiter, Schritt für Schritt.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {levels.map((lvl, i) => {
                  const Icon = lvl.icon;
                  return (
                    <Card key={i} className="border-2 hover-lift relative">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <span className="text-[11px] font-bold text-primary uppercase tracking-wide">{lvl.label}</span>
                        </div>
                        <div className="flex gap-1 mb-3" aria-hidden>
                          {Array.from({ length: 6 }).map((_, k) => (
                            <span key={k} className={`h-1.5 flex-1 rounded-sm ${k < lvl.fill ? "bg-primary" : "bg-muted"}`} />
                          ))}
                        </div>
                        <CardTitle className="text-lg">{lvl.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2.5">
                        {lvl.points.map((p) => (
                          <div key={p} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span className="text-sm text-muted-foreground leading-snug">{p}</span>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* FORMATE: Bento-Grid */}
          <section id="formate" className="py-14 md:py-20 scroll-mt-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Schulungsformate</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Unsere Claude Schulungsformate</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Vom halbtaegigen Claude-Einstieg bis zum mehrtaegigen Power-User-Programm, einzeln oder als Lernpfad kombiniert.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {formats.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <Card key={i} className={`hover-lift border-2 ${i === 0 ? "lg:col-span-2 bg-primary/5 border-primary/20" : ""}`}>
                      <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex items-start justify-between gap-2">
                          <CardTitle className="text-lg">{f.title}</CardTitle>
                          <Badge variant="outline" className="rounded-full text-xs shrink-0 bg-primary/10 text-primary border-primary/20">{f.duration}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed text-sm">{f.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CURRICULUM: nummerierte Module */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Lerninhalte</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Das deckt die Claude Schulung ab</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Diese Bausteine kombinieren wir je nach Format und Zielgruppe zu Ihrem maßgeschneiderten Claude Training.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-px bg-border border-2 border-border rounded-2xl overflow-hidden">
                {curriculum.map((c, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-card hover:bg-primary/5 transition-colors">
                    <span className="text-lg font-bold text-primary tabular-nums shrink-0 mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="font-semibold text-foreground mb-1">{c.topic}</div>
                      <div className="text-sm text-muted-foreground leading-relaxed">{c.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* TABS: Use Cases pro Abteilung / Rolle */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Für jede Rolle</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Claude Training für jede Rolle und Abteilung</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Claude Schulungen passen für alle Ebenen, mit Lernzielen und Use Cases, die zur jeweiligen Aufgabe passen.
                </p>
              </div>
              <Tabs defaultValue="fuehrung" className="w-full">
                <TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">
                  {roles.map((role) => {
                    const Icon = role.icon;
                    return (
                      <TabsTrigger
                        key={role.value}
                        value={role.value}
                        className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border"
                      >
                        <Icon className="w-4 h-4 mr-1.5" />
                        {role.label}
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
                {roles.map((role) => (
                  <TabsContent key={role.value} value={role.value}>
                    <Card className="border-2">
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-bold mb-2">{role.head}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">{role.text}</p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {role.goals.map((goal) => (
                            <div key={goal} className="flex items-start gap-2.5">
                              <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                              <span className="text-sm text-muted-foreground">{goal}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>

          {/* VERGLEICHS-TABELLE */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Im Vergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">KI Kanzlei, Online-Kurs oder klassischer Trainer?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Worin sich eine spezialisierte, auf Claude fokussierte Schulung von generischen KI- oder ChatGPT-Kursen unterscheidet.
                </p>
              </div>
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[26%] font-bold text-foreground">Merkmal</TableHead>
                      <TableHead className="text-muted-foreground">Generische Online-Kurse</TableHead>
                      <TableHead className="text-muted-foreground">Klassische Trainer</TableHead>
                      <TableHead className="text-primary font-bold">KI Kanzlei</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparison.map((r, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{r.feature}</TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          <span className="inline-flex items-start gap-1.5">
                            <X className="w-3.5 h-3.5 text-muted-foreground/60 mt-0.5 shrink-0" />
                            {r.online}
                          </span>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          <span className="inline-flex items-start gap-1.5">
                            <X className="w-3.5 h-3.5 text-muted-foreground/60 mt-0.5 shrink-0" />
                            {r.trainer}
                          </span>
                        </TableCell>
                        <TableCell className="text-sm text-primary font-medium">
                          <span className="inline-flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                            {r.kanzlei}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </section>

          {/* WAS IHR TEAM LERNT: Claude-Funktionen */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Claude im Detail</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Diese Claude-Funktionen beherrscht Ihr Team danach</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Wir bleiben nicht beim Chatfenster stehen, sondern vermitteln den souveraenen Umgang mit dem ganzen Funktionsumfang von Claude.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {tools.map((t, i) => {
                  const Icon = t.icon;
                  return (
                    <Card key={i} className="hover-lift border-2">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between gap-3 mb-2">
                          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <Badge variant="outline" className="rounded-full text-xs bg-primary/10 text-primary border-primary/20">{t.badge}</Badge>
                        </div>
                        <CardTitle className="text-lg">{t.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed text-sm">{t.desc}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* WARUM CLAUDE: Stärken + DSGVO */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum Claude</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Warum gerade Anthropic Claude im Unternehmen</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Claude punktet bei Aufgaben, die im Unternehmensalltag zählen: das Auswerten langer Dokumente dank grossem Kontextfenster, durchdachtes Schreiben, saubere Analyse und solide Code-Unterstützung. Viele Teams empfinden Claude als nuechtern, präzise und wenig zum Halluzinieren neigend, was die Arbeit mit sensiblen Inhalten erleichtert.
                    </p>
                    <p>
                      Für den Datenschutz entscheidend: Claude laesst sich über <strong className="text-foreground">Claude for Work</strong> mit klaren Datennutzungsregeln sowie über <strong className="text-foreground">Amazon Bedrock</strong> und Google Cloud mit EU-Hosting betreiben. So bleiben Daten in der gewuenschten Region, und der Einsatz laesst sich DSGVO-konform und im Einklang mit dem EU AI Act gestalten. In der Schulung machen wir genau diese Wege praktisch nutzbar.
                    </p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: FileText, t: "Grosses Kontextfenster", d: "Lange Verträge, Berichte und Wissensbestaende in einem Rutsch auswerten." },
                    { icon: MessageSquare, t: "Praezises Schreiben", d: "Klare, nuechterne Texte und Analysen, die wenig Nacharbeit brauchen." },
                    { icon: ShieldCheck, t: "Sicher betreibbar", d: "Claude for Work, Bedrock und EU-Hosting für DSGVO-konformen Einsatz." },
                    { icon: Database, t: "Eigenes Wissen", d: "Über MCP greift Claude auf Ihre Daten und Systeme zu." },
                  ].map((b, i) => {
                    const Icon = b.icon;
                    return (
                      <Card key={i} className="border-2 hover-lift">
                        <CardContent className="pt-6">
                          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="font-semibold text-foreground mb-1.5">{b.t}</div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{b.d}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* ABLAUF: Timeline */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="max-w-2xl mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Der Ablauf</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">In vier Phasen zur Claude-Kompetenz</h2>
                <p className="text-lg text-muted-foreground">
                  Vom Readiness-Check bis zur dauerhaften Verankerung, transparent und auf nachhaltige Wirkung ausgelegt.
                </p>
              </div>
              <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div
                  className="hidden lg:block absolute top-7 left-[12%] right-[12%] h-px bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40"
                  aria-hidden
                />
                {steps.map(({ step, icon: Icon, title, time, desc }) => (
                  <div key={step} className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center mb-4 shadow-lg shadow-primary/20 relative z-10">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-bold text-primary mb-1">SCHRITT {step} - {time}</div>
                    <h3 className="text-lg font-bold mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 rounded-2xl border-2 border-primary/20 bg-primary/5 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Compass className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-foreground mb-1">Tiefere Analyse gewünscht?</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Wenn Sie vor dem Training genau wissen wollen, welche Prozesse sich für Claude lohnen und wie eine sichere Architektur aussieht, liefert das KI Assessment Center die vollständige Analyse mit ROI-Kalkulation. Die 490 EUR sind bei einer Beauftragung voll anrechenbar.
                  </p>
                </div>
                <Button variant="outline" asChild className="shrink-0">
                  <a href="/ki-assessment">KI Assessment Center</a>
                </Button>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Häufige Fragen zur Claude Schulung</h2>
                <p className="text-lg text-muted-foreground">
                  Die häufigsten Fragen zu Claude Trainings und Anthropic Claude Workshops, ehrlich beantwortet.
                </p>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border-2 border-border rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:bg-primary/5"
                  >
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
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Womit es rund um die Claude Schulung weitergeht</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Eine Claude Schulung ist ein Baustein. Diese Leistungen ergaenzen sie und bauen darauf auf.
                </p>
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
