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
  Image as ImageIcon,
  Clock,
  TrendingUp,
  MapPin,
  ScrollText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "KI Schulung & AI Training für Unternehmen",
  description:
    "KI Schulung für Unternehmen im DACH-Raum: praxisnahe AI Trainings, KI Workshops und Prompt Engineering für Teams, Führungskräfte und IT. Vom Einsteiger bis zum Profi, DSGVO-konform und maßgeschneidert auf Ihre Branche.",
  keywords:
    "KI Schulung, AI Training, KI Workshop, KI Weiterbildung, AI Schulung Unternehmen, KI Mitarbeiterschulung, Prompt Engineering Schulung, KI Training DACH, KI Kompetenz, KI Kurs Unternehmen, KI Seminar, Inhouse KI Schulung",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/ki-schulung" },
};

const faqs = [
  {
    q: "Was ist eine KI Schulung für Unternehmen?",
    a: "Eine KI Schulung für Unternehmen vermittelt Mitarbeitern und Führungskräften praxisnahes Wissen über künstliche Intelligenz: Wie nutze ich KI-Tools effektiv? Wie funktioniert Prompt Engineering? Welche KI-Anwendungen lohnen sich für meine Branche? Eine gute KI Schulung bleibt nicht bei der Theorie stehen, sondern arbeitet an echten Aufgaben aus Ihrem Alltag und ist auf die konkreten Prozesse, Tools und Datenschutzanforderungen Ihres Unternehmens zugeschnitten.",
  },
  {
    q: "Was beinhaltet ein KI Workshop?",
    a: "Ein KI Workshop umfasst typischerweise: Grundlagen der KI und der Large Language Models, Prompt Engineering für effektive und reproduzierbare KI-Nutzung, praktische Übungen mit aktuellen KI-Tools wie ChatGPT-Alternativen und AI Agents, branchenspezifische Anwendungsfälle sowie einen konkreten Fahrplan für die KI-Einführung im eigenen Betrieb. Statt reiner Vorträge setzen wir auf Hands-on-Übungen, in denen Ihr Team direkt mit den Werkzeugen arbeitet.",
  },
  {
    q: "Für wen ist eine KI Schulung geeignet?",
    a: "KI Schulungen eignen sich für alle Mitarbeiterebenen. Führungskräfte lernen KI-Strategie und ROI-Bewertung, Fachanwender den effizienten KI-Einsatz im Tagesgeschäft, IT- und Entwickler-Teams die Implementierung und Integration und Marketing-Teams die Nutzung von KI für Content, Analyse und Personalisierung. Wir passen Tempo, Tiefe und Beispiele an die jeweilige Rolle an, damit jede Gruppe genau das mitnimmt, was sie in der Praxis braucht.",
  },
  {
    q: "Wie lange dauert eine KI Schulung?",
    a: "Das hängt vom Ziel ab. Wir bieten halbtägige Einführungsworkshops (rund 4 Stunden), ganztägige praxisintensive Trainings (8 Stunden) und mehrtägige oder mehrwöchige Programme für vertiefende Themen wie Prompt Engineering, AI Agents oder Private AI. Für nachhaltigen Kompetenzaufbau kombinieren viele Unternehmen einen Kick-off-Workshop mit begleitenden Praxisphasen über mehrere Wochen.",
  },
  {
    q: "Was kostet eine KI Schulung?",
    a: "Die Kosten richten sich nach Format, Dauer, Teilnehmerzahl und Individualisierung. Ein halbtägiger Inhouse-Workshop ist deutlich günstiger als ein mehrwöchiges Zertifizierungsprogramm mit Begleitung. Im kostenlosen Erstgespräch ermitteln wir Ihren Bedarf und schlagen das wirtschaftlichste Format vor. Gemessen am Produktivitätsgewinn zählt eine KI Schulung zu den Investitionen mit dem höchsten ROI im Unternehmen.",
  },
  {
    q: "Findet die KI Schulung inhouse, online oder hybrid statt?",
    a: "Alle drei Varianten sind möglich. Wir kommen für Inhouse-Schulungen zu Ihnen, führen Workshops live online durch oder kombinieren beides als hybrides Format. Bei verteilten Teams hat sich ein Online-Kick-off mit anschließenden regionalen Vertiefungen bewährt. Die Inhalte bleiben in jedem Format gleich praxisnah.",
  },
  {
    q: "Brauchen die Teilnehmer technisches Vorwissen?",
    a: "Nein. Unsere Einführungsformate setzen kein Vorwissen voraus und holen jeden Teilnehmer dort ab, wo er steht. Für fortgeschrittene Themen wie AI Agents, Workflow-Automatisierung oder Private AI ist Grundwissen hilfreich, das wir bei Bedarf in einem vorgeschalteten Modul aufbauen. So lernt jede Gruppe auf dem passenden Niveau, ohne über- oder unterfordert zu sein.",
  },
  {
    q: "Kann die KI Schulung DSGVO-konform durchgeführt werden?",
    a: "Ja. Unsere KI Schulungen arbeiten ausschließlich mit DSGVO-konformen Beispielen und Tools. Wir zeigen, welche KI-Werkzeuge für welche Datenkategorien geeignet sind, wo die Grenzen liegen und wie Ihr Team KI sicher und rechtskonform einsetzt, ohne Risiken durch ungeprüfte US-Cloud-Dienste. Der EU AI Act und seine Pflichten sind fester Bestandteil der Schulung.",
  },
  {
    q: "Erhalten die Teilnehmer ein Zertifikat?",
    a: "Auf Wunsch ja. Unser mehrwöchiges Zertifizierungsprogramm schließt mit einem Abschluss-Zertifikat ab, das die erworbene KI-Kompetenz belegt. Auch kürzere Formate können mit einer Teilnahmebestätigung dokumentiert werden, die sich gut für interne Weiterbildungsnachweise eignet.",
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
  name: "KI Schulung & AI Training",
  serviceType: "KI Schulung, AI Training, KI Workshop",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "Praxisnahe KI Schulungen und AI Trainings für Unternehmen im DACH-Raum: KI Workshops, Prompt Engineering und KI-Kompetenzaufbau für Mitarbeiter, Führungskräfte und IT-Teams, DSGVO-konform und maßgeschneidert.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

// Hero learning-path modules with competence depth (out of 6 segments)
const pathModules = [
  { name: "KI-Grundlagen & LLMs", level: 3 },
  { name: "Prompt Engineering", level: 4 },
  { name: "KI-Tools im Alltag", level: 4 },
  { name: "AI Agents & Automatisierung", level: 5 },
  { name: "Private AI & DSGVO", level: 5 },
  { name: "KI-Strategie & ROI", level: 6 },
];

const formats = [
  {
    icon: GraduationCap,
    title: "KI Einführungs-Workshop",
    description:
      "Halbtägiger Workshop für ganze Teams: KI-Grundlagen, die wichtigsten aktuellen Tools und erste konkrete Anwendungsfälle für Ihre Branche. Kein Vorwissen nötig, maximaler Aha-Effekt.",
    duration: "4 Stunden",
  },
  {
    icon: BookOpen,
    title: "Prompt Engineering Training",
    description:
      "Ganztägiges Training: Wie formuliere ich KI-Anfragen optimal und reproduzierbar? Fortgeschrittene Prompt-Techniken, Vorlagen und Bibliotheken für maximale KI-Effizienz im Arbeitsalltag.",
    duration: "1 Tag",
  },
  {
    icon: Zap,
    title: "KI-Tools & Automatisierung",
    description:
      "Praktischer Workshop: AI Agents bauen, Workflows mit n8n und Make automatisieren und KI sauber in bestehende Tools integrieren, damit aus Einzelaufgaben durchgängige Prozesse werden.",
    duration: "1 bis 2 Tage",
  },
  {
    icon: Target,
    title: "KI-Strategie für Führungskräfte",
    description:
      "Exklusives Führungskräfte-Seminar: KI-ROI bewerten, eine realistische KI-Roadmap entwickeln, das Team auf den Wandel vorbereiten und Risiken nach EU AI Act sauber managen.",
    duration: "4 Stunden",
  },
  {
    icon: Users,
    title: "Maßgeschneiderte Team-Schulung",
    description:
      "Individuell auf Ihre Branche und Prozesse zugeschnitten: KI-Schulung für Ärzte, Anwälte, Steuerberater, Hotel-Teams, Handwerk oder KMU, mit Übungen an Ihren echten Fällen.",
    duration: "Individuell",
  },
  {
    icon: Award,
    title: "KI-Zertifizierungsprogramm",
    description:
      "Mehrwöchiges Programm mit Abschluss-Zertifikat: von den KI-Grundlagen bis zur eigenständigen Planung und Umsetzung von KI-Projekten, inklusive begleiteter Praxisphasen.",
    duration: "4 bis 8 Wochen",
  },
];

const properties = [
  { label: "Praxisfokus", value: "Übungen an echten Fällen aus Ihrem Alltag" },
  { label: "DSGVO-konform", value: "Nur geprüfte, rechtssichere Tools und Beispiele" },
  { label: "Branchenanpassung", value: "Zugeschnitten auf Ihre Prozesse" },
  { label: "Alle Ebenen", value: "Vom Einsteiger bis zur Führungskraft" },
  { label: "Aktuelles Wissen", value: "LLMs, Prompt Engineering, AI Agents" },
  { label: "Format", value: "Inhouse, online oder hybrid" },
  { label: "Abschluss", value: "Auf Wunsch mit Zertifikat" },
];

const levels = [
  {
    label: "Stufe 01, Einsteiger",
    icon: Lightbulb,
    title: "KI verstehen",
    fill: 2,
    points: ["Was LLMs können und was nicht", "Erste sichere Tool-Nutzung im Alltag", "KI-Mythen von der Realität trennen"],
  },
  {
    label: "Stufe 02, Fortgeschritten",
    icon: Zap,
    title: "KI produktiv nutzen",
    fill: 4,
    points: ["Prompt Engineering routiniert anwenden", "Routineaufgaben spürbar beschleunigen", "Ergebnisse kritisch prüfen und absichern"],
  },
  {
    label: "Stufe 03, Profi",
    icon: Rocket,
    title: "KI selbst gestalten",
    fill: 6,
    points: ["AI Agents und Workflows aufbauen", "Private AI DSGVO-konform betreiben", "KI-Roadmap und ROI eigenständig steuern"],
  },
];

const comparison = [
  {
    feature: "Praxisfokus auf Ihre Prozesse",
    online: "Standardisiert, generisch",
    trainer: "Teils, oft allgemein",
    kanzlei: "Ja, an echten Fällen",
  },
  {
    feature: "DSGVO & EU AI Act",
    online: "Oft US-Tools, unklar",
    trainer: "Variabel",
    kanzlei: "Durchgängig berücksichtigt",
  },
  {
    feature: "Aktuelles KI-Spezialwissen",
    online: "Schnell veraltet",
    trainer: "Breit, nicht KI-spezialisiert",
    kanzlei: "KI-fokussiert und aktuell",
  },
  {
    feature: "Branchenanpassung",
    online: "Keine",
    trainer: "Begrenzt",
    kanzlei: "Branchenspezifisch",
  },
  {
    feature: "Hands-on-Übungen",
    online: "Passives Video",
    trainer: "Unterschiedlich",
    kanzlei: "Durchgehend praktisch",
  },
  {
    feature: "Zertifikat",
    online: "Teils automatisiert",
    trainer: "Teils",
    kanzlei: "Auf Wunsch mit Abschluss",
  },
  {
    feature: "Begleitung nach der Schulung",
    online: "Keine",
    trainer: "Selten",
    kanzlei: "Fortlaufendes Sparring",
  },
];

const roles = [
  {
    value: "fuehrung",
    label: "Führungskräfte",
    icon: Target,
    head: "Führungskräfte & Entscheider",
    text: "Führungskräfte lernen, KI strategisch einzuordnen, den ROI von Projekten zu bewerten und ihr Unternehmen sicher durch den KI-Wandel zu führen, ohne in Hype oder Aktionismus zu verfallen.",
    goals: [
      "KI-ROI bewerten und Projekte priorisieren",
      "Eine tragfähige KI-Roadmap entwickeln",
      "Das Team auf den KI-Wandel vorbereiten",
      "Chancen und Risiken realistisch einschätzen",
    ],
  },
  {
    value: "fachnutzer",
    label: "Fachnutzer",
    icon: Users,
    head: "Fachanwender im Tagesgeschäft",
    text: "Fachanwender lernen den effizienten KI-Einsatz im Tagesgeschäft, damit KI-Tools nicht nur vorhanden sind, sondern täglich messbar Zeit sparen und die Qualität der Ergebnisse heben.",
    goals: [
      "KI-Tools sicher im Alltag einsetzen",
      "Mit Prompt Engineering präzise Ergebnisse erzielen",
      "Routineaufgaben spürbar schneller erledigen",
      "Ergebnisse kritisch prüfen statt blind übernehmen",
    ],
  },
  {
    value: "it",
    label: "IT-Teams",
    icon: Cpu,
    head: "IT- & Entwickler-Teams",
    text: "IT-Teams lernen KI-Implementierung und -Integration, von AI Agents über Workflow-Automatisierung bis zu DSGVO-konformer Private AI, und wie sich KI-Lösungen sicher und wartbar betreiben lassen.",
    goals: [
      "AI Agents und Workflows mit n8n und Make bauen",
      "KI in bestehende Systeme integrieren",
      "Private AI DSGVO-konform betreiben",
      "KI-Lösungen sicher und wartbar gestalten",
    ],
  },
  {
    value: "branche",
    label: "Branche & Marketing",
    icon: Building2,
    head: "Branchen- & Marketing-Teams",
    text: "Marketing- und Fachteams lernen KI für Content, Analyse und Personalisierung, ergänzt um branchenspezifische Anwendungsfälle für Ärzte, Anwälte, Steuerberater, Hotellerie und KMU.",
    goals: [
      "KI für Content, Analyse und Personalisierung nutzen",
      "Branchenspezifische Anwendungsfälle umsetzen",
      "KI-Workflows für Recht, Medizin, Handel und Handwerk",
      "Schulung zugeschnitten auf Ihre Prozesse",
    ],
  },
];

const curriculum = [
  { topic: "KI-Grundlagen & Large Language Models", detail: "Wie funktioniert moderne KI? Was können LLMs zuverlässig, wo liegen ihre Grenzen, und welche Tools gibt es?" },
  { topic: "Prompt Engineering", detail: "Vom einfachen Prompt bis zu Rollen-, Few-Shot- und Chain-of-Thought-Techniken für präzise, reproduzierbare Ergebnisse." },
  { topic: "KI-Tools im Arbeitsalltag", detail: "ChatGPT-Alternativen, Claude und Co. sinnvoll einsetzen, vergleichen und je nach Aufgabe richtig auswählen." },
  { topic: "AI Agents & Automatisierung", detail: "Autonome KI-Agenten verstehen und Workflows mit n8n und Make automatisieren, von der Idee bis zum laufenden Prozess." },
  { topic: "Private AI & Datenschutz", detail: "KI sicher und rechtskonform einsetzen, lokale und EU-gehostete Modelle nutzen, ohne US-Cloud-Risiken." },
  { topic: "KI für Ihre Branche", detail: "Konkrete Anwendungsfälle für Recht, Medizin, Steuern, Handel und Handwerk, direkt an Ihren Prozessen." },
  { topic: "KI-Strategie & ROI", detail: "Wie priorisieren Sie KI-Projekte, rechnen den Nutzen und führen KI nachhaltig in der Organisation ein?" },
  { topic: "EU AI Act & Compliance", detail: "Welche Pflichten gelten, wie kennzeichnen Sie KI korrekt und wie bleiben Sie rechtssicher unterwegs?" },
];

const tools = [
  { name: "ChatGPT-Alternativen & LLMs", icon: Brain, badge: "Sprachmodelle", desc: "Claude, GPT, Gemini und europäische Alternativen: ihre Stärken, Grenzen und der passende Einsatz je Aufgabe und Datenschutzniveau." },
  { name: "Prompt-Frameworks", icon: ScrollText, badge: "Methodik", desc: "Bewährte Strukturen für präzise Prompts, von Zero-Shot über Rollen-Prompting bis zu Chain-of-Thought und wiederverwendbaren Vorlagen." },
  { name: "n8n & Make", icon: Workflow, badge: "Automatisierung", desc: "Visuelle Workflow-Automatisierung: KI in bestehende Tools einbinden und ganze Abläufe verketten, ohne tiefes Programmieren." },
  { name: "Private AI", icon: ShieldCheck, badge: "Datenschutz", desc: "Lokale und EU-gehostete Modelle für sensible Daten, damit auch vertrauliche Informationen sicher mit KI verarbeitet werden." },
  { name: "RAG & Wissensdatenbank", icon: Database, badge: "Firmenwissen", desc: "Wie KI auf Ihr eigenes Firmenwissen zugreift und belegbare, aktuelle Antworten aus Ihren Dokumenten liefert." },
  { name: "Multimodale KI", icon: ImageIcon, badge: "Bild, Audio, Text", desc: "Bildgenerierung, Transkription und Dokumentenanalyse sinnvoll in den Arbeitsalltag integrieren und sicher nutzen." },
];

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Readiness-Assessment",
    time: "Vorbereitung",
    desc: "Wir ermitteln den KI-Wissensstand Ihres Teams, sichten Ihre Tools und Prozesse und definieren gemeinsam die Lernziele, pro Rolle und Abteilung.",
  },
  {
    step: "02",
    icon: GraduationCap,
    title: "Kern-Training",
    time: "Workshops",
    desc: "Praxisnahe Workshops zu KI-Grundlagen, Prompt Engineering und den passenden Tools, im Format, das zu Ihnen passt, mit vielen Hands-on-Übungen.",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Praxis-Projekte",
    time: "Anwendung",
    desc: "Ihr Team wendet das Gelernte an echten Fällen aus dem eigenen Alltag an und baut erste KI-Workflows, so bleibt das Wissen wirklich hängen.",
  },
  {
    step: "04",
    icon: Award,
    title: "Begleitung & Zertifikat",
    time: "Nachhaltigkeit",
    desc: "Wir begleiten Ihr Team über die Schulung hinaus mit Sparring und Updates und schließen auf Wunsch mit einem Zertifikat ab.",
  },
];

const related = [
  {
    href: "/prompt-engineering",
    icon: Sparkles,
    tag: "Vertiefung",
    title: "Prompt Engineering",
    desc: "Das Spezialthema im Detail: wie Ihr Team mit ausgefeilten Prompt-Techniken konstant präzise KI-Ergebnisse erzielt.",
  },
  {
    href: "/ki-consulting",
    icon: Compass,
    tag: "Beratung",
    title: "KI Consulting",
    desc: "Strategische Begleitung über die Schulung hinaus: welche Prozesse sich für KI lohnen und wie Sie sie priorisieren.",
  },
  {
    href: "/agentic-ai",
    icon: Bot,
    tag: "Automatisierung",
    title: "Agentic AI",
    desc: "Autonome AI Agents, die ganze Aufgaben übernehmen, das nächste Level, auf das Ihre Schulung aufbaut.",
  },
];

export default function Page() {
  return (
    <>
      <Script id="faq-ki-schulung" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-ki-schulung" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                    KI Schulung, AI Training
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-primary">KI Schulung</span>, die Ihr Team in der Praxis weiterbringt
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    KI verändert jede Branche, Ihr Team muss mithalten. Unsere praxisnahen KI Schulungen und AI Workshops bringen Mitarbeiter, Führungskräfte und IT auf den neuesten Stand: von den KI-Grundlagen über Prompt Engineering bis zu AI Agents und Workflow-Automatisierung. DSGVO-konform und auf Ihre Branche zugeschnitten.
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
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO & EU AI Act</span>
                    <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-primary" /> Inhouse, online, hybrid</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> DACH-weit</span>
                  </div>
                </div>

                {/* Bespoke hero visual: KI-Lernpfad / Kompetenz-Spektrum */}
                <Card className="relative border-2 shadow-xl shadow-primary/5">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <GraduationCap className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">KI-Lernpfad</div>
                        <div className="text-xs text-muted-foreground">6 Module, Einsteiger bis Profi</div>
                      </div>
                      <Badge variant="outline" className="ml-auto rounded-full text-[10px] bg-primary/10 text-primary border-primary/20">
                        mit Zertifikat
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
                        <span>Profi</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* STATS-BAND */}
          <section className="py-12 bg-white/50 border-y border-border">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: TrendingUp, v: "bis 40%", l: "schneller bei KI-gestützter Arbeit" },
                  { icon: Layers, v: "6", l: "Schulungsformate, individuell kombinierbar" },
                  { icon: Clock, v: "ab 4 Std.", l: "vom Kompakt-Workshop bis zum Programm" },
                  { icon: CheckCircle, v: "100%", l: "praxisorientiert mit Hands-on-Übungen" },
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

          <ModelLogoStrip
            caption="Praxisnah an den Tools, die Ihr Team täglich nutzt"
            items={[
              { slug: "openai", name: "ChatGPT" },
              { slug: "anthropic", name: "Claude" },
              { slug: "googlegemini", name: "Gemini" },
              { slug: "n8n", name: "n8n" },
              { text: "Microsoft 365", name: "Microsoft 365" },
            ]}
          />

          {/* WARUM: Definition 2col + Info-Card */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum KI Schulung</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Warum Ihr Team jetzt eine KI Schulung braucht</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      <strong className="text-foreground">KI-Tools</strong> werden immer mächtiger, doch ohne das richtige Know-how bleibt ihr Potenzial ungenutzt oder wird sogar zum Risiko. Mitarbeiter, die KI souverän einsetzen, arbeiten spürbar schneller und liefern bessere Ergebnisse, während andere noch raten, welches Tool wofür taugt. Eine professionelle <strong className="text-foreground">KI Schulung</strong> schließt genau diese Lücke und zählt zu den Investitionen mit dem höchsten ROI im Unternehmen.
                    </p>
                    <p>
                      Gleichzeitig müssen Unternehmen im DACH-Raum sicherstellen, dass KI <strong className="text-foreground">DSGVO-konform</strong> und im Einklang mit dem EU AI Act genutzt wird. Ungeprüfte Tools, in die sensible Daten wandern, sind ein echtes Haftungsthema. Unsere Schulungen verbinden deshalb maximale Effizienz mit rechtssicherer KI-Nutzung, statt nur Begeisterung für neue Spielereien zu wecken.
                    </p>
                    <p>
                      Der dritte Faktor ist <strong className="text-foreground">Nachhaltigkeit</strong>. Ein einmaliger Vortrag verpufft. Deshalb arbeiten wir an Ihren echten Fällen, bauen erste Workflows direkt im Workshop und begleiten Ihr Team danach weiter, damit aus Wissen dauerhaft gelebte Praxis wird.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Praxisnah</Badge>
                    <Badge variant="secondary" className="rounded-full">Branchenspezifisch</Badge>
                    <Badge variant="secondary" className="rounded-full">DSGVO-konform</Badge>
                    <Badge variant="secondary" className="rounded-full">Maßgeschneidert</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Was eine gute KI Schulung ausmacht</CardTitle>
                    <CardDescription>Worauf es bei wirksamer KI-Weiterbildung wirklich ankommt.</CardDescription>
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

          {/* KOMPETENZ-SPEKTRUM: clean Diagramm via divs */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Kompetenz-Spektrum</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Von ersten Schritten bis zur eigenen KI-Lösung</h2>
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Unsere KI Schulungsformate</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Von der halbtägigen KI-Einführung bis zum mehrwöchigen Zertifizierungsprogramm, einzeln oder als Lernpfad kombiniert.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Die KI Schulungs-Module im Überblick</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Diese Bausteine kombinieren wir je nach Format und Zielgruppe zu Ihrer maßgeschneiderten Schulung.
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

          {/* TABS: Für jede Rolle */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Für jede Rolle</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">KI Schulung für jede Rolle</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  KI Schulungen passen für alle Mitarbeiterebenen, mit Lernzielen, die zur jeweiligen Aufgabe passen.
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
                  Worin sich eine spezialisierte, praxisnahe KI Schulung von Standardangeboten unterscheidet.
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

          {/* TOOLS, die wir schulen */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Werkzeuge</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Diese KI-Werkzeuge lernt Ihr Team kennen</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Wir bilden nicht an einem einzelnen Tool aus, sondern vermitteln den souveränen Umgang mit dem ganzen KI-Werkzeugkasten.
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

          {/* ABLAUF: Timeline */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="max-w-2xl mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Der Ablauf</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">In vier Phasen zur KI-Kompetenz</h2>
                <p className="text-lg text-muted-foreground">
                  Vom Readiness-Assessment bis zum Zertifikat, transparent und auf nachhaltige Wirkung ausgelegt.
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
                    <div className="text-xs font-bold text-primary mb-1">SCHRITT {step}, {time}</div>
                    <h3 className="text-lg font-bold mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Häufige Fragen zur KI Schulung</h2>
                <p className="text-lg text-muted-foreground">
                  Die häufigsten Fragen zu KI Schulungen und AI Workshops, ehrlich beantwortet.
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
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Verwandte Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Womit es nach der Schulung weitergeht</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Eine KI Schulung ist der Startpunkt. Diese Leistungen bauen direkt darauf auf.
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
