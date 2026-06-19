import type { Metadata } from "next";
import { serviceLogos } from "@/lib/serviceLogos";
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
  Bot,
  Brain,
  Eye,
  Play,
  RotateCw,
  Network,
  Workflow,
  ShieldCheck,
  Lock,
  Check,
  X,
  Clock,
  TrendingUp,
  Layers,
  FileText,
  Mail,
  Target,
  Headphones,
  Briefcase,
  Calculator,
  Users,
  Scale,
  Settings,
  GitBranch,
  Boxes,
  Cpu,
  ListChecks,
  Server,
  MapPin,
  Search,
  Rocket,
  Database,
  Compass,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Agentic AI & autonome AI Agents für Unternehmen",
  description:
    "Agentic AI von der KI Kanzlei: autonome AI Agents und Multi-Agent-Systeme, die wahrnehmen, planen, handeln und evaluieren. Komplexe Aufgaben end-to-end erledigt, DSGVO-konform, EU AI Act ready, produktiv in 30 Tagen.",
  keywords:
    "Agentic AI, AI Agent, AI Agents, KI Agent, autonome KI, Multi Agent System, LLM Agent, AI Orchestration, KI Automatisierung, Hyperautomation, Intelligent Automation, AI Workflow Automation, KI Prozessautomatisierung, n8n KI Agent, LangGraph, CrewAI, Agentic AI DACH, AI Agents Deutschland, AI Agents Schweiz, KI Agenten Österreich, KI Automatisierung DACH",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/agentic-ai" },
};

const faqData = [
  {
    q: "Was ist Agentic AI genau?",
    a: "Agentic AI bezeichnet KI-Systeme, die eigenständig Ziele verfolgen, Pläne erstellen und Aktionen ausführen, ohne dass ein Mensch jeden einzelnen Schritt bestätigen muss. Ein solcher AI Agent nimmt seinen Kontext wahr, zerlegt das Ziel in Teilschritte, nutzt Tools wie E-Mail, CRM, ERP, APIs und Datenbanken und prüft am Ende sein eigenes Ergebnis. Der entscheidende Unterschied zu einem klassischen KI Chatbot: Der Chatbot antwortet auf eine Frage, der Agent erledigt eine ganze Aufgabe.",
  },
  {
    q: "Was ist ein Multi Agent System?",
    a: "Ein Multi Agent System besteht aus mehreren spezialisierten AI Agents, die wie ein eingespieltes Team zusammenarbeiten. Einer recherchiert, einer analysiert, einer kommuniziert mit Kunden, ein weiterer kontrolliert das Ergebnis, alles automatisch koordiniert über einen Orchestrator. So laufen komplexe Geschäftsprozesse durch, die ein einzelner Agent nicht zuverlässig bewältigen würde, und das deutlich schneller als jede manuelle Bearbeitung.",
  },
  {
    q: "Wie unterscheidet sich Agentic AI von RPA?",
    a: "RPA (Robotic Process Automation) automatisiert starre, regelbasierte Abläufe über Klick-Skripte und scheitert, sobald eine Ausnahme auftritt oder sich eine Oberfläche ändert. Agentic AI versteht stattdessen den Kontext, erkennt Abweichungen selbstständig und passt ihr Vorgehen an. RPA folgt einem Script. Ein AI Agent trifft Entscheidungen. In der Praxis kombinieren wir beides: Der Agent steuert die Logik, robuste Schnittstellen erledigen die Ausführung.",
  },
  {
    q: "Was ist der Unterschied zwischen einem AI Agent und einem KI Chatbot?",
    a: "Ein KI Chatbot ist reaktiv: Er wartet auf eine Eingabe und liefert eine Antwort. Ein AI Agent ist proaktiv: Er startet von selbst, plant mehrere Schritte voraus, nutzt externe Werkzeuge und arbeitet eine Aufgabe vollständig ab, inklusive Fehlerkorrektur. Vereinfacht gesagt: Der Chatbot redet, der Agent handelt. Viele Unternehmen starten mit einem Chatbot und erweitern ihn später zu einem handlungsfähigen Agenten.",
  },
  {
    q: "Welche Frameworks setzen Sie für AI Agents ein?",
    a: "Wir setzen auf praxiserprobte, überwiegend quelloffene Frameworks: n8n für DSGVO-konforme Workflow-Orchestrierung im DACH-Raum, LangGraph für komplexe, mehrstufige Agent-Logik, CrewAI für rollenbasierte Multi-Agent-Szenarien und AutoGen für kooperative, analytische Aufgaben. Für die Tool-Anbindung nutzen wir offene Standards wie das Model Context Protocol. Welche Kombination passt, hängt von Ihrem Anwendungsfall ab, wir bleiben herstellerneutral.",
  },
  {
    q: "Ist Agentic AI DSGVO-konform und EU-AI-Act-ready?",
    a: "Ja. Wir implementieren jedes AI Agent System mit Datenhaltung auf österreichischen oder EU-Servern, Verschlüsselung und Auftragsverarbeitungsvertrag (AVV). Für den EU AI Act prüfen wir jeden Agenten auf Risikostufe und Transparenzpflichten und dokumentieren Entscheidungen lückenlos. So sind die Anforderungen an Datensouveränität, Nachvollziehbarkeit und menschliche Aufsicht von Anfang an erfüllt, ohne teures Nachbessern.",
  },
  {
    q: "Wie behalten wir die Kontrolle über autonome Agents?",
    a: "Sie definieren genau, wo ein Agent autonom handeln darf und wo nicht. Kritische Aktionen wie Zahlungen oder externe Kommunikation laufen über eine menschliche Freigabe (Human-in-the-loop). Guardrails begrenzen erlaubte Tools und Wertebereiche, und vollständige Audit-Logs machen jede Entscheidung nachvollziehbar. Autonomie heißt bei uns nie Kontrollverlust, sondern klar definierte Handlungsspielräume.",
  },
  {
    q: "Was kostet ein AI Agent und ab wann rechnet sich das?",
    a: "Die Kosten hängen vom Umfang ab: Ein einzelner Agent für eine klar umrissene Aufgabe ist günstiger als ein Multi-Agent-System über mehrere Abteilungen. Wir starten bewusst mit einem überschaubaren Piloten, der einen messbaren Engpass löst. In der Erstanalyse kalkulieren wir gemeinsam den ROI. Bei Routineprozessen mit 70 bis 90 Prozent Zeitersparnis amortisiert sich ein Agent in der Regel innerhalb weniger Monate.",
  },
  {
    q: "Wie lange dauert die Implementierung eines AI Agent Systems?",
    a: "Ein einfacher AI Agent ist in 2 bis 4 Wochen produktiv. Komplexere Multi-Agent-Systeme, die mehrere Abteilungen verbinden, brauchen 4 bis 8 Wochen. Wir beginnen immer mit einem kostenlosen Analysegespräch und einem Piloten, den Sie sofort erleben können, bevor Sie sich für die volle Umsetzung entscheiden.",
  },
  {
    q: "Für welche Aufgaben eignen sich AI Agents besonders?",
    a: "Überall dort, wo wiederkehrende, mehrstufige Wissensarbeit anfällt: E-Mail- und Ticketbearbeitung, Recherche und Reporting, Rechnungsverarbeitung, Lead-Qualifizierung, Vertragsmonitoring und Datenpflege zwischen Systemen. Je mehr Schritte, Quellen und Tools ein Prozess umfasst, desto größer ist der Hebel eines Agenten gegenüber einer einfachen Automatisierung.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Agentic AI & autonome AI Agents",
  serviceType: "Agentic AI, AI Agents, Multi-Agent-Systeme",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "Entwicklung autonomer AI Agents und Multi-Agent-Systeme für Unternehmen im DACH-Raum: wahrnehmen, planen, handeln, evaluieren. DSGVO-konform, EU AI Act ready, EU-gehostet.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const loopPhases = [
  { n: "01", icon: Eye, name: "Wahrnehmen", pos: "top-[14%] left-1/2", short: "Kontext lesen", bullets: ["Liest E-Mails, Tickets, Dokumente, Datenbanken und API-Antworten.", "Erfasst den vollständigen Kontext, bevor irgendetwas passiert."] },
  { n: "02", icon: Brain, name: "Planen", pos: "top-1/2 left-[86%]", short: "Schritte ableiten", bullets: ["Zerlegt das Ziel in konkrete Teilschritte und wählt die passenden Tools.", "Wägt Alternativen ab, statt stur einem Script zu folgen."] },
  { n: "03", icon: Play, name: "Handeln", pos: "top-[86%] left-1/2", short: "Tools nutzen", bullets: ["Ruft APIs und Tools auf, schreibt Daten, verschickt Nachrichten.", "Führt mehrere Routineschritte hintereinander aus, ohne Rückfrage."] },
  { n: "04", icon: RotateCw, name: "Evaluieren", pos: "top-1/2 left-[14%]", short: "Ergebnis prüfen", bullets: ["Prüft das Ergebnis gegen das Ziel und erkennt Fehler selbst.", "Korrigiert, wiederholt oder eskaliert, dann startet der Loop neu."] },
];

const heroStats = [
  { v: "30 Tage", l: "bis zum ersten produktiven AI Agent" },
  { v: "bis 90 %", l: "weniger Aufwand bei Routinearbeit" },
  { v: "24/7", l: "autonomer Betrieb, ohne Pausen" },
  { v: "EU", l: "Datenhaltung in AT, DE und CH" },
];

const keyProps = [
  ["Proaktives Handeln", "Wartet nicht, startet von selbst"],
  ["Mehrstufige Planung", "Zerlegt Aufgaben in einzelne Schritte"],
  ["Tool-Nutzung", "CRM, ERP, E-Mail, APIs, Datenbanken"],
  ["Fehlerkorrektur", "Erkennt Probleme und passt sich an"],
  ["Zusammenarbeit", "Multi-Agent-Systeme mit klaren Rollen"],
  ["Auditierbarkeit", "Jede Aktion ist protokolliert"],
];

const comparison = [
  ["Handlungsweise", "Reaktiv, antwortet nur", "Starres Script, regelbasiert", "Proaktiv, plant und entscheidet"],
  ["Komplexität", "Einzelne Antworten", "Einfache, repetitive Abläufe", "Mehrstufige, komplexe Prozesse"],
  ["Ausnahmen", "Scheitert an Ausnahmen", "Scheitert bei Abweichungen", "Erkennt und löst sie selbst"],
  ["Tool-Nutzung", "Begrenzt oder keine", "GUI-basiert, Screen Scraping", "APIs, CRM, ERP, E-Mail, Kalender"],
  ["Lernfähigkeit", "Statisch nach Training", "Keine", "Adaptiv durch Kontext"],
  ["DSGVO-Eignung", "Variabel", "Gut, regelbasiert", "Sehr gut bei richtiger Konfiguration"],
  ["Wartungsaufwand", "Niedrig, aber begrenzt", "Hoch bei jeder Änderung", "Moderat, robust gegenüber Wandel"],
];

const useCases = [
  { icon: Mail, title: "E-Mail AI Agent", description: "Liest, kategorisiert, priorisiert und beantwortet E-Mails automatisch. Leitet sensible Anfragen an die richtige Person weiter, sodass keine Nachricht verloren geht, auch nicht nach Feierabend." },
  { icon: Network, title: "Multi-Agent Recherche-System", description: "Mehrere spezialisierte AI Agents recherchieren parallel, prüfen Quellen kritisch und verdichten die Ergebnisse zu einem belastbaren Report mit Belegen, in Minuten statt Stunden." },
  { icon: Workflow, title: "KI Prozessautomatisierung", description: "Agents steuern komplette Workflows end-to-end: von der Anfrage über die Bearbeitung bis zur Rückmeldung, auch wenn Ausnahmen auftreten, die starre RPA-Skripte zum Scheitern bringen würden." },
  { icon: Brain, title: "Entscheidungsassistent", description: "Der Agent zieht Daten aus CRM, ERP und externen Quellen zusammen und liefert Ihrem Team fundierte Empfehlungen in Echtzeit, inklusive Quellenangaben und Begründung." },
  { icon: ShieldCheck, title: "Compliance- und Monitoring-Agent", description: "Überwacht Verträge, regulatorische Fristen und interne Richtlinien kontinuierlich und alarmiert proaktiv, bevor aus einer Abweichung ein Problem wird." },
  { icon: Target, title: "Agentic Lead-Qualifizierung", description: "Agents recherchieren potenzielle Kunden selbstständig, bewerten das Potenzial und bereiten personalisierte Erstkontakte vor, ohne manuellen Rechercheaufwand." },
  { icon: FileText, title: "Dokumenten-Agent", description: "Liest Verträge, Rechnungen und Formulare, extrahiert die relevanten Felder, validiert sie und überträgt sie strukturiert in Ihre Systeme, samt Prüfprotokoll." },
  { icon: Headphones, title: "Customer-Support-Agent", description: "Bearbeitet wiederkehrende Tickets vollständig, greift dafür auf Ihre Wissensdatenbank zu und eskaliert nur die wirklich kniffligen Fälle an Ihr Team." },
];

const bereiche = [
  { value: "vertrieb", label: "Vertrieb", icon: Briefcase, head: "Vertrieb und Lead-Management", text: "AI Agents recherchieren Leads, reichern CRM-Datensätze an, priorisieren nach Potenzial und bereiten personalisierte Erstkontakte vor. Ihr Vertrieb spricht nur noch mit vorqualifizierten Kontakten, statt Zeit in kalte Recherche zu stecken." },
  { value: "finance", label: "Finance", icon: Calculator, head: "Buchhaltung und Finance", text: "Eingangsrechnungen werden gelesen, geprüft, kontiert und zur Freigabe vorbereitet. Zahlungsabgleiche und Mahnläufe laufen automatisch, jeder Schritt mit vollständigem Audit-Log und klarer Eskalation bei Auffälligkeiten." },
  { value: "service", label: "Kundenservice", icon: Headphones, head: "Kundenservice und Support", text: "Ein Support-Agent bearbeitet wiederkehrende Tickets end-to-end, greift auf Ihre Wissensdatenbank zu und löst Standardanliegen sofort. Knifflige Fälle übergibt er sauber mit allem Kontext an einen Mitarbeiter." },
  { value: "hr", label: "HR", icon: Users, head: "HR und Recruiting", text: "Vom Screening eingehender Bewerbungen über die Terminkoordination bis zu strukturierten Vorab-Zusammenfassungen entlastet der Agent das Team von Routine. Die Entscheidung über Menschen bleibt selbstverständlich bei Menschen." },
  { value: "ops", label: "Operations", icon: Settings, head: "Operations und IT", text: "Agents überwachen Systeme, fassen Logs zusammen, erstellen Reports und stoßen definierte Routinen an, bevor aus einer Warnung ein Ausfall wird. Wiederkehrende Betriebsaufgaben laufen verlässlich im Hintergrund." },
  { value: "legal", label: "Legal", icon: Scale, head: "Legal und Compliance", text: "Verträge und Fristen werden kontinuierlich überwacht, Abweichungen von Richtlinien proaktiv gemeldet. Der Agent liefert die Vorarbeit, die juristische Bewertung und Entscheidung trifft Ihr Team." },
];

const frameworks = [
  { name: "n8n", icon: Workflow, logo: "n8n", badge: "Open Source, Self-Hosted", desc: "Die ideale Plattform für DSGVO-konforme AI Agents im DACH-Raum. n8n verbindet Ihre bestehenden Tools und orchestriert Agents visuell, mit über 500 fertigen Integrationen, vollständig auf Ihren eigenen Servern.", tags: ["DSGVO", "Self-Hosted", "500+ Integrationen"] },
  { name: "LangGraph", icon: GitBranch, logo: "langgraph", badge: "Komplexe Agent-Logik", desc: "LangGraph eignet sich für Agents mit mehrstufiger Entscheidungslogik, Schleifen und bedingten Pfaden, ideal für Prozesse, die mehr als ein einfaches Wenn-Dann erfordern und sauber debugbar sein müssen.", tags: ["Zustandsmanagement", "Python", "Debugging"] },
  { name: "CrewAI", icon: Boxes, logo: "crewai", badge: "Multi-Agent-Systeme", desc: "CrewAI strukturiert die Zusammenarbeit mehrerer Agents mit klar definierten Rollen. Geeignet, sobald ein einzelner Agent nicht ausreicht und ein ganzes Team koordiniert werden muss.", tags: ["Rollenbasiert", "Parallelisierung", "Koordination"] },
  { name: "AutoGen", icon: Cpu, logo: null, badge: "Microsoft, forschungsstark", desc: "AutoGen von Microsoft Research bietet ausgefeilte Gesprächsmodelle zwischen Agents und ist besonders stark bei analytischen, datenintensiven Aufgaben mit mehreren beteiligten Rollen.", tags: ["Conversational", "Enterprise-ready", "Open Source"] },
];

const advantages = [
  { icon: Clock, title: "70 bis 90 % Zeitersparnis", desc: "Repetitive Abläufe wie E-Mail-Bearbeitung, Datenpflege oder Reporting laufen vollautomatisch. Ihr Team konzentriert sich auf das Wesentliche." },
  { icon: TrendingUp, title: "Skaliert ohne Personalaufwand", desc: "AI Agents arbeiten rund um die Uhr, ohne Urlaub oder Einarbeitung. Mehr Volumen wird abgearbeitet, ohne die Headcount-Planung anzufassen." },
  { icon: Lock, title: "DSGVO und EU AI Act konform", desc: "Datenhaltung in AT und der EU, transparente Entscheidungsprotokolle und volle Auditierbarkeit, bereit für aktuelle und kommende Anforderungen." },
  { icon: Layers, title: "Herstellerneutral und zukunftssicher", desc: "Wir nutzen offene Frameworks ohne Vendor-Lock-in. Erscheint ein besseres Modell, tauschen Sie es, ohne die Architektur neu zu bauen." },
];

const guardrails = [
  { icon: Users, title: "Human-in-the-loop", desc: "Kritische Aktionen wie Zahlungen oder externe Kommunikation geben Sie per Freigabe frei. Sie bestimmen, wo der Agent autonom handelt und wo nicht." },
  { icon: ShieldCheck, title: "Guardrails und Grenzen", desc: "Klare Regeln, erlaubte Tools und Wertebereiche begrenzen, was ein Agent tun darf. Kein Zugriff jenseits der Berechtigung, kein unkontrolliertes Verhalten." },
  { icon: ListChecks, title: "Vollständige Audit-Logs", desc: "Jede Wahrnehmung, Entscheidung und Aktion wird protokolliert und ist nachvollziehbar. Bei Bedarf rekonstruieren Sie jeden einzelnen Schritt." },
  { icon: Server, title: "EU-Hosting und DSGVO", desc: "Datenhaltung in Österreich und der EU, Verschlüsselung und AVV. Keine Weitergabe an US-Anbieter, EU AI Act im Blick von Tag eins." },
];

const steps = [
  { step: "01", icon: Search, title: "Kostenlose Erstanalyse", time: "30 Minuten", desc: "Wir lernen Ihre Prozesse kennen und identifizieren die 2 bis 3 Stellen mit dem höchsten Automatisierungspotenzial. Kein Verkaufsgespräch, sondern eine ehrliche Einschätzung, wo ein Agent wirklich Sinn ergibt." },
  { step: "02", icon: FileText, title: "KI Assessment Center", time: "Woche 1", desc: "Vollständige Analyse von Prozessen, Datenlage und Tech-Stack. Sie erhalten einen konkreten Implementierungsplan inklusive Architektur, Tool-Auswahl und ROI-Kalkulation." },
  { step: "03", icon: Bot, title: "Pilot und erster Agent", time: "Woche 2 bis 4", desc: "Wir bauen den ersten AI Agent, testen ihn intensiv gegen reale Szenarien und übergeben einen Prototypen, den Sie sofort in der Praxis erleben und bewerten können." },
  { step: "04", icon: Rocket, title: "Go-Live und Skalierung", time: "ab Woche 5", desc: "Nach dem Go-Live überwachen und optimieren wir laufend und skalieren auf weitere Prozesse oder ein Multi-Agent-System, sobald Sie den Mehrwert sehen." },
];

function LogoBox({ slug, alt, className }: { slug: string; alt: string; className?: string }) {
  return (
    <div className={`rounded-xl bg-white border border-border flex items-center justify-center shrink-0 p-2 ${className ?? ""}`}>
      <img src={`/img/logos/${slug}.svg`} alt={alt} className="w-full h-full object-contain" />
    </div>
  );
}

export default function Page() {
  return (
    <>
      <Script id="faq-agentic-ai" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-agentic-ai" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO mit Agent-Loop-Visual */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                    Agentic AI, autonome AI Agents
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    AI Agents, die nicht nur antworten, sondern <span className="text-primary">handeln</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Agentic AI geht weit über den klassischen KI Chatbot hinaus. Unsere AI Agents nehmen ihren Kontext wahr, planen selbstständig, nutzen Ihre Tools und erledigen komplexe Aufgaben end-to-end. Produktiv in 30 Tagen, DSGVO-konform und EU AI Act ready.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Erstgespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#use-cases">Use Cases ansehen</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-primary" /> EU AI Act ready</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Agent-Loop Diagramm */}
                <Card className="relative border-2 shadow-xl shadow-primary/5">
                  <CardHeader className="border-b border-border">
                    <Badge variant="outline" className="w-fit rounded-full mb-1 bg-primary/10 text-primary border-primary/20">Wie ein AI Agent arbeitet</Badge>
                    <CardTitle className="text-2xl">Der Agent-Loop</CardTitle>
                    <CardDescription>Vier Phasen, die kontinuierlich ineinandergreifen, vollautomatisch.</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="relative mx-auto aspect-square w-full max-w-[20rem]">
                      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden>
                        <circle cx="50" cy="50" r="36" fill="none" stroke="hsl(var(--primary))" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="3 2.5" />
                      </svg>
                      {/* Zentrum */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                        <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/25">
                          <Bot className="w-7 h-7" />
                        </div>
                        <span className="mt-1.5 text-[11px] font-semibold text-foreground">AI Agent</span>
                      </div>
                      {/* Phasen-Knoten */}
                      {loopPhases.map((p) => {
                        const Icon = p.icon;
                        return (
                          <div key={p.n} className={`absolute -translate-x-1/2 -translate-y-1/2 ${p.pos}`}>
                            <div className="relative w-12 h-12 rounded-xl bg-background border-2 border-primary/30 flex items-center justify-center shadow-sm">
                              <Icon className="w-5 h-5 text-primary" />
                              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-foreground text-background text-[10px] font-bold flex items-center justify-center">{p.n}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {/* Legende */}
                    <div className="grid grid-cols-2 gap-2 mt-5">
                      {loopPhases.map((p) => (
                        <div key={p.n} className="rounded-lg bg-muted/40 px-3 py-2">
                          <div className="text-xs font-bold text-primary">{p.n}, {p.name}</div>
                          <div className="text-xs text-muted-foreground">{p.short}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* STATS-BAND */}
          <section className="py-10 md:py-12 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-2 lg:grid-cols-4 border-2 border-border rounded-2xl overflow-hidden bg-card">
                {heroStats.map((s, i) => (
                  <div key={i} className="p-6 md:p-8 text-center border-b lg:border-b-0 border-r last:border-r-0 [&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r border-border">
                    <div className="text-3xl md:text-4xl font-bold text-primary">{s.v}</div>
                    <div className="text-sm text-muted-foreground mt-2">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* DEFINITION, 2-spaltig + Info-Card */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Definition</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was ist Agentic AI, und warum jetzt?</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p><strong className="text-foreground">Agentic AI</strong> bezeichnet KI-Systeme, die eigenständig handeln: Sie setzen Ziele, planen Schritte, nutzen externe Tools und erledigen Aufgaben vollständig. Was früher mehrere Mitarbeiter und etliche Systemzugriffe brauchte, läuft heute durch einen einzigen AI Agent, der den ganzen Vorgang von Anfang bis Ende verantwortet.</p>
                    <p>Der Begriff ist neu, das Konzept dahinter nicht ganz: <strong className="text-foreground">LLM Agents</strong> gibt es seit dem Aufkommen großer Sprachmodelle. Geändert hat sich die Reife der Frameworks und die Verlässlichkeit der Ausführung. Praxistaugliche <strong className="text-foreground">Multi-Agent-Systeme</strong>, in denen mehrere spezialisierte Agents als Team zusammenarbeiten, sind heute in wenigen Wochen produktiv.</p>
                    <p>Für Unternehmen im DACH-Raum kommt ein entscheidender Faktor hinzu: <strong className="text-foreground">DSGVO und EU AI Act</strong> stellen klare Anforderungen an Transparenz, Datensouveränität und menschliche Aufsicht. Wir bauen Agentic AI so, dass diese Anforderungen von Anfang an erfüllt sind, statt sie teuer nachzurüsten.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">KI Automatisierung</Badge>
                    <Badge variant="secondary" className="rounded-full">Intelligent Automation</Badge>
                    <Badge variant="secondary" className="rounded-full">AI Orchestration</Badge>
                    <Badge variant="secondary" className="rounded-full">Hyperautomation</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Agentic AI auf einen Blick</CardTitle>
                    <CardDescription>Was autonome KI Agents auszeichnet.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {keyProps.map(([label, value]) => (
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

          {/* AGENT-LOOP DEEP DIVE, 4-spaltig */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Der Agent-Loop im Detail</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Wahrnehmen, Planen, Handeln, Evaluieren</h2>
                <p className="text-lg text-muted-foreground">Diese vier Phasen unterscheiden einen handelnden Agenten von einem reinen Chatbot. Sie laufen nicht einmalig ab, sondern als kontinuierliche Schleife, bis das Ziel erreicht ist.</p>
              </div>
              <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="hidden lg:block absolute top-7 left-[12%] right-[12%] h-px bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40 pointer-events-none" aria-hidden />
                {loopPhases.map((p) => {
                  const Icon = p.icon;
                  return (
                    <Card key={p.n} className="border-2 hover-lift relative">
                      <CardHeader className="pb-3">
                        <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center mb-3 shadow-lg shadow-primary/20 relative z-10 ring-4 ring-background">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="text-xs font-bold text-primary">PHASE {p.n}</div>
                        <CardTitle className="text-lg">{p.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {p.bullets.map((b, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground leading-snug">
                              <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* VERGLEICHS-TABLE */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Technologie-Vergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Agentic AI, RPA oder KI Chatbot?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Drei Technologien mit sehr unterschiedlichen Fähigkeiten. Welche zu Ihrem Anwendungsfall passt, klären wir im kostenlosen Assessment.</p>
              </div>
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[24%] font-bold text-foreground">Merkmal</TableHead>
                      <TableHead className="text-muted-foreground">KI Chatbot</TableHead>
                      <TableHead className="text-muted-foreground">RPA</TableHead>
                      <TableHead className="text-primary font-bold">Agentic AI</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparison.map((row, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{row[0]}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          <span className="inline-flex items-start gap-1.5"><X className="w-3.5 h-3.5 text-muted-foreground/50 mt-0.5 shrink-0" />{row[1]}</span>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          <span className="inline-flex items-start gap-1.5"><X className="w-3.5 h-3.5 text-muted-foreground/50 mt-0.5 shrink-0" />{row[2]}</span>
                        </TableCell>
                        <TableCell className="text-sm text-primary font-medium">
                          <span className="inline-flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />{row[3]}</span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </section>

          {/* USE-CASES BENTO */}
          <section id="use-cases" className="py-14 md:py-20 scroll-mt-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Anwendungsfälle</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">AI Agents für jeden Unternehmensbereich</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Von autonomen E-Mail-Agenten bis zu komplexen Multi-Agent-Systemen: KI Prozessautomatisierung, die echte Arbeit abnimmt.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {useCases.map((uc, i) => {
                  const Icon = uc.icon;
                  return (
                    <Card key={i} className={`hover-lift border-2 ${i === 0 ? "lg:col-span-2 bg-primary/5 border-primary/20" : ""}`}>
                      <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{uc.title}</CardTitle>
                      </CardHeader>
                      <CardContent><p className="text-muted-foreground leading-relaxed text-sm">{uc.description}</p></CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* BEREICHE TABS */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Nach Bereich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Agentic AI in Ihrer Abteilung</h2>
                <p className="text-lg text-muted-foreground">Wählen Sie einen Bereich, wir zeigen ein konkretes Szenario.</p>
              </div>
              <Tabs defaultValue="vertrieb" className="w-full">
                <TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">
                  {bereiche.map((b) => {
                    const Icon = b.icon;
                    return (
                      <TabsTrigger key={b.value} value={b.value} className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border">
                        <Icon className="w-4 h-4 mr-1.5" />{b.label}
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
                {bereiche.map((b) => (
                  <TabsContent key={b.value} value={b.value}>
                    <Card className="border-2">
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-bold mb-2">{b.head}</h3>
                        <p className="text-muted-foreground leading-relaxed">{b.text}</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>

          {/* FRAMEWORKS + VORTEILE */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Technologie und Mehrwert</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Womit wir bauen, und was Sie davon haben</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Wir wählen das Framework, das zu Ihrem Prozess passt, nicht das, das gerade trendet. Für die Tool-Anbindung nutzen wir offene Standards wie das Model Context Protocol.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                {frameworks.map((fw, i) => {
                  const Icon = fw.icon;
                  return (
                    <Card key={i} className={`hover-lift border-2 ${i === 0 ? "border-primary/30 bg-primary/5" : ""}`}>
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            {fw.logo ? (
                              <LogoBox slug={fw.logo} alt={fw.name} className="w-10 h-10" />
                            ) : (
                              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                <Icon className="w-5 h-5 text-primary" />
                              </div>
                            )}
                            <CardTitle className="text-xl">{fw.name}</CardTitle>
                          </div>
                          <Badge variant="outline" className="rounded-full text-xs shrink-0 bg-primary/10 text-primary border-primary/20">{fw.badge}</Badge>
                        </div>
                        <CardDescription className="leading-relaxed pt-1">{fw.desc}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {fw.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="rounded-full text-xs">{tag}</Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
                {advantages.map((adv, i) => {
                  const Icon = adv.icon;
                  return (
                    <Card key={i} className="border-2 hover-lift">
                      <CardHeader className="pb-3">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-base leading-snug">{adv.title}</CardTitle>
                      </CardHeader>
                      <CardContent><p className="text-sm text-muted-foreground leading-relaxed">{adv.desc}</p></CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* SICHERHEIT & KONTROLLE */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-3 gap-10 items-start">
                <div className="lg:col-span-1">
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Sicherheit und Kontrolle</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Autonom, aber nie unkontrolliert</h2>
                  <p className="text-muted-foreground leading-relaxed">Autonomie heißt bei uns klar definierte Handlungsspielräume, nicht Kontrollverlust. Sie entscheiden, was ein Agent allein darf und wo ein Mensch zustimmt. Vier Bausteine sorgen dafür, dass Sie jederzeit die Hand am Steuer behalten.</p>
                </div>
                <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
                  {guardrails.map((g, i) => {
                    const Icon = g.icon;
                    return (
                      <Card key={i} className="border-2 hover-lift">
                        <CardHeader className="pb-3">
                          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <CardTitle className="text-lg">{g.title}</CardTitle>
                        </CardHeader>
                        <CardContent><p className="text-sm text-muted-foreground leading-relaxed">{g.desc}</p></CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* ABLAUF, vertikale Timeline */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Der Ablauf</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">In vier Schritten zu Ihrem AI Agent</h2>
                <p className="text-lg text-muted-foreground">Vom ersten Gespräch bis zum produktiven Agentic AI System, transparent und ohne Überraschungen.</p>
              </div>
              <div className="relative">
                <div className="absolute left-5 md:left-6 top-3 bottom-3 w-px bg-gradient-to-b from-primary/40 via-primary/25 to-primary/40" aria-hidden />
                <div className="space-y-7">
                  {steps.map((s) => {
                    const Icon = s.icon;
                    return (
                      <div key={s.step} className="relative flex gap-5">
                        <div className="relative z-10 shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20 ring-4 ring-background">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="pt-0.5">
                          <div className="text-xs font-bold text-primary mb-1 tracking-wide">SCHRITT {s.step}, {s.time}</div>
                          <h3 className="text-lg font-bold mb-1.5">{s.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Häufige Fragen zu Agentic AI</h2>
                <p className="text-lg text-muted-foreground">Die Fragen, die wir in fast jedem Erstgespräch hören, und unsere ehrlichen Antworten.</p>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqData.map((f, i) => (
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
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zu Agentic AI</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {[
                  { href: "/n8n-automatisierung", icon: Network, logo: "n8n", title: "n8n Automatisierung", desc: "AI Agents DSGVO-konform orchestrieren: die Open-Source-Plattform für agentische Workflows im DACH-Raum." },
                  { href: "/ki-wissensdatenbank", icon: Database, logo: null, title: "KI Wissensdatenbank", desc: "Geben Sie Ihren Agents Zugriff auf Ihr Firmenwissen, sicher und DSGVO-konform per RAG." },
                  { href: "/ki-consulting", icon: Compass, logo: null, title: "KI Consulting", desc: "Strategische Beratung: Welche Prozesse eignen sich wirklich für autonome AI Agents?" },
                ].map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <a key={i} href={s.href} className="group block">
                      <Card className="h-full border-2 hover-lift group-hover:border-primary/40">
                        <CardHeader>
                          {s.logo ? (
                            <LogoBox slug={s.logo} alt={s.title} className="w-12 h-12 mb-2" />
                          ) : (
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                              {serviceLogos[s.href] ? <img src={`/img/logos/${serviceLogos[s.href]}.svg`} alt={s.title} className="w-7 h-7 object-contain" /> : <Icon className="w-6 h-6 text-primary" />}
                            </div>
                          )}
                          <CardTitle className="text-xl">{s.title}</CardTitle>
                        </CardHeader>
                        <CardContent><p className="text-muted-foreground leading-relaxed">{s.desc}</p></CardContent>
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
