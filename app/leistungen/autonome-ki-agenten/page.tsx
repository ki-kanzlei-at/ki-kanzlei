import type { Metadata } from "next";
import { serviceLogos } from "@/lib/serviceLogos";
import Script from "next/script";
import { NavigationHome } from "@/components/NavigationHome";
import { FooterModern } from "@/components/FooterModern";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Bot, Brain, Workflow, Network, Waypoints, GitBranch, Boxes, Box, Layers, Cpu, Server, Cloud,
  Shield, ShieldCheck, Lock, Check, X, Search, Rocket, Phone, Clock, MapPin, Zap, RefreshCw,
  Code2, FileText, Eye, Users, Building2, Lightbulb, Target, MessageSquare, Smartphone, Settings2, KeyRound,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Autonome KI-Agenten: OpenClaw, Hermes, Manus & Co.",
  description:
    "Echte autonome KI-Agenten für Unternehmen: Wir konzipieren und betreiben Agenten, die Aufgaben eigenständig end-to-end erledigen, mit Fokus auf self-hosted und DSGVO (OpenClaw, OpenHands, Hermes) statt reiner US-Cloud. Guardrails, Human-in-the-Loop, sicherer Betrieb im DACH-Raum.",
  keywords:
    "autonome KI Agenten, KI Agent, AI Agent, AI Agents, Manus AI, OpenClaw, open claw, OpenHands, Hermes, Hermes Agent, autonome KI, KI Agent DSGVO, self-hosted AI Agent, AI Agent Unternehmen, agentic AI",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/autonome-ki-agenten" },
};

const faqs = [
  { q: "Was ist ein autonomer KI-Agent?", a: "Ein autonomer KI-Agent ist ein System, das ein Ziel entgegennimmt und die nötigen Schritte selbst plant und ausführt, statt nur einzelne Fragen zu beantworten. Er nutzt ein Sprachmodell als Gehirn, ruft eigenständig Werkzeuge auf, liest und schreibt Daten, trifft Zwischenentscheidungen und arbeitet eine Aufgabe end-to-end ab. Anders als ein Chatbot, der reagiert, handelt ein Agent." },
  { q: "Was ist OpenClaw und warum ist es für den DACH-Raum interessant?", a: "OpenClaw ist ein kostenloser, quelloffener und local-first KI-Agent, der Anfang 2026 viral ging und in kurzer Zeit über 145.000 GitHub-Stars erreichte. Das Besondere: Er läuft auf Ihrer eigenen Hardware und verwandelt Messaging-Apps wie WhatsApp, Telegram oder Slack in eine Kommandozentrale für Ihren Rechner, ohne dass ein US-Konzern Zugriff auf Ihre Daten bekommt. Genau dieser local-first Ansatz passt ideal zu DSGVO und Datensouveränität im DACH-Raum." },
  { q: "Was ist der Unterschied zu Manus AI und OpenHands?", a: "Manus AI ist ein cloudbasierter, generalistischer Agent, der Aufgaben in einer eigenen Web-Umgebung erledigt, leistungsstark, aber geschlossen und in der Cloud. OpenHands ist ein quelloffener, self-hostbarer Agent, der auf autonome Softwareentwicklung spezialisiert ist und Code schreibt, testet und ausliefert. OpenClaw ist der local-first Generalist für den eigenen Rechner, Hermes reiht sich als weiterer Agent dieser neuen Generation ein. Wir wählen je nach Use Case und Datenschutzanforderung das passende System." },
  { q: "Sind autonome Agenten nicht ein Sicherheitsrisiko?", a: "Ohne Leitplanken ja, deshalb bauen wir sie nie ohne. Wir definieren enge Berechtigungen, klare Grenzen, was ein Agent darf und was nicht, sowie Human-in-the-Loop-Freigaben für kritische Aktionen. Jede Aktion wird protokolliert. So nutzen Sie die Autonomie, behalten aber jederzeit die Kontrolle und die Nachvollziehbarkeit." },
  { q: "Kann ein Agent DSGVO-konform betrieben werden?", a: "Ja. Wir setzen bevorzugt auf self-hosted und local-first Agenten wie OpenClaw oder OpenHands, die auf Ihrer Infrastruktur in der EU laufen. Daten bleiben im Haus, Modelle lassen sich lokal oder über EU-Endpunkte betreiben, und wir sichern Zugänge, Protokollierung und Berechtigungen sauber ab, inklusive Auftragsverarbeitungsvertrag." },
  { q: "Worin unterscheidet sich das von eurer Agentic-AI-Leistung?", a: "Unsere Agentic-AI-Leistung deckt das gesamte Feld der KI-Agenten und ihrer Orchestrierung ab. Diese Seite fokussiert auf die neue, besonders autonome Generation rund um OpenClaw, Hermes, Manus und OpenHands, also Agenten, die sehr eigenständig ganze Aufgaben übernehmen. In der Praxis kombinieren wir beides je nach Reifegrad und Risiko." },
  { q: "Was kann so ein Agent konkret für mein Unternehmen tun?", a: "Typische Aufgaben sind Recherche und Reporting, das Abarbeiten wiederkehrender Backoffice-Prozesse, das Bedienen mehrerer Tools nacheinander, Softwareentwicklung mit Codeagenten oder ein persönlicher Assistent, der über Messaging gesteuert wird. Wir starten mit einem klar abgegrenzten, risikoarmen Use Case und erweitern den Aktionsradius schrittweise." },
  { q: "Wie startet ein Projekt mit autonomen Agenten?", a: "Mit einem kostenlosen Assessment. Wir prüfen, welche Aufgaben sich für einen Agenten eignen, welche Datenschutz- und Sicherheitsanforderungen gelten und welches System passt. Dann bauen wir einen ersten Agenten mit klaren Leitplanken, testen ihn gründlich und gehen kontrolliert in den Betrieb." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Autonome KI-Agenten", serviceType: "Autonome KI-Agenten, AI Agents, OpenClaw, Hermes, Manus, OpenHands", provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" }, description: "Konzeption und Betrieb autonomer KI-Agenten für Unternehmen im DACH-Raum, mit Fokus auf self-hosted und DSGVO (OpenClaw, OpenHands), Guardrails und Human-in-the-Loop.", areaServed: [{ "@type": "Country", name: "Austria" }, { "@type": "Country", name: "Germany" }, { "@type": "Country", name: "Switzerland" }] };

const stats = [
  { value: "145k+", label: "GitHub-Stars für OpenClaw" },
  { value: "self", label: "hosted & local-first möglich" },
  { value: "end-to-end", label: "Aufgaben statt Einzelantworten" },
  { value: "100 %", label: "Aktionen protokolliert" },
];
const ataglance = [
  ["Prinzip", "Ziel rein, Agent handelt"],
  ["Fokus", "self-hosted & DSGVO"],
  ["Systeme", "OpenClaw, Hermes, OpenHands, Manus"],
  ["Sicherheit", "Guardrails & Freigaben"],
  ["Steuerung", "auch per Messaging"],
  ["Betrieb", "EU-Infrastruktur, AVV"],
];
const problems = [
  { problem: "Mitarbeiter hangeln sich durch viele Tools für eine Aufgabe.", solution: "Ein Agent bedient die Tools nacheinander selbst und liefert das Ergebnis." },
  { problem: "Recherche und Reporting fressen Stunden.", solution: "Ein Research-Agent sammelt, prüft und fasst zusammen, on demand." },
  { problem: "Cloud-Agenten geben Firmendaten an US-Anbieter.", solution: "Self-hosted Agenten wie OpenClaw halten Daten im Haus, DSGVO-konform." },
  { problem: "Autonome KI macht Angst vor Kontrollverlust.", solution: "Enge Berechtigungen, Freigaben und Protokolle behalten die Kontrolle." },
];
const features = [
  { icon: KeyRound, title: "Local-first & DSGVO statt Big-Tech-Cloud", description: "Wir setzen bevorzugt auf self-hosted und local-first Agenten wie OpenClaw und OpenHands. Sie laufen auf Ihrer Infrastruktur in der EU, Daten verlassen das Haus nicht, und kein US-Konzern bekommt Einblick in Ihre Prozesse. Genau das, was Datensouveränität im DACH-Raum verlangt." },
  { icon: Shield, title: "Guardrails & Human-in-the-Loop", description: "Enge Berechtigungen, klare Grenzen und Freigaben für kritische Aktionen. Autonomie mit Sicherheitsnetz." },
  { icon: Network, title: "Tool- & Systemanbindung", description: "Der Agent ruft Ihre Tools, APIs und Datenquellen auf, sicher angebunden und kontrolliert." },
  { icon: Smartphone, title: "Steuerung per Messaging", description: "Auf Wunsch bedienen Sie den Agenten über WhatsApp, Telegram oder Slack, wie OpenClaw es vormacht." },
  { icon: Eye, title: "Volle Nachvollziehbarkeit", description: "Jede Aktion wird protokolliert. Sie sehen, was der Agent getan hat, und können eingreifen." },
  { icon: RefreshCw, title: "Schrittweiser Ausbau", description: "Start mit einem risikoarmen Use Case, dann wächst der Aktionsradius kontrolliert mit dem Vertrauen." },
];
const usecases = [
  { value: "research", label: "Research", icon: Search, head: "Recherche & Reporting", intro: "Ein Agent sammelt, prüft und verdichtet Informationen zu fertigen Berichten.", items: ["Markt- und Wettbewerbsrecherche on demand.", "Mehrere Quellen zusammenführen und gewichten.", "Strukturierte Reports mit Quellenangabe.", "Regelmäßige Briefings automatisch erstellen."] },
  { value: "backoffice", label: "Backoffice", icon: FileText, head: "Backoffice & Prozesse", intro: "Wiederkehrende Abläufe über mehrere Systeme hinweg eigenständig abarbeiten.", items: ["Daten aus Dokumenten in Systeme übertragen.", "Mehrstufige Freigabe- und Routing-Prozesse.", "Standardvorgänge end-to-end erledigen.", "Ausnahmen sauber an Menschen übergeben."] },
  { value: "code", label: "Engineering", icon: Code2, head: "Software-Engineering", intro: "Codeagenten wie OpenHands schreiben, testen und liefern Code.", items: ["Features umsetzen und Tests schreiben.", "Bugs reproduzieren und beheben.", "Pull Requests vorbereiten.", "Routine-Refactorings übernehmen."] },
  { value: "assistent", label: "Assistent", icon: MessageSquare, head: "Persönlicher Assistent", intro: "Ein über Messaging gesteuerter Agent erledigt Aufgaben am Rechner.", items: ["Termine, Mails und Notizen managen.", "Dateien und Tools per Nachricht bedienen.", "Aufgaben anstoßen und überwachen.", "Erinnerungen und Follow-ups."] },
  { value: "vertrieb", label: "Vertrieb", icon: Users, head: "Vertrieb & Support", intro: "Agenten qualifizieren, recherchieren und bereiten Aktionen vor.", items: ["Leads recherchieren und anreichern.", "Antwortentwürfe vorbereiten.", "CRM-Pflege übernehmen.", "Folgeaufgaben planen."] },
];
const comparison = [
  { feature: "Hosting & Datenschutz", oc: "self-hosted, DSGVO", manus: "US-Cloud", rpa: "je nach Setup" },
  { feature: "Autonomiegrad", oc: "hoch, generalistisch", manus: "hoch, generalistisch", rpa: "regelbasiert" },
  { feature: "Steuerung", oc: "Messaging & lokal", manus: "Web-Interface", rpa: "im Hintergrund" },
  { feature: "Anpassbarkeit", oc: "voll, Open Source", manus: "begrenzt", rpa: "mittel" },
  { feature: "Umgang mit Neuem", oc: "flexibel (LLM)", manus: "flexibel (LLM)", rpa: "stur bei Abweichung" },
  { feature: "Kosten", oc: "Infrastruktur", manus: "Abo/Cloud", rpa: "Lizenz/Bot" },
];
const steps = [
  { step: "01", icon: Phone, title: "Kostenlose Erstanalyse", time: "30 Minuten", description: "Wir prüfen, welche Aufgaben sich für einen autonomen Agenten eignen und welche Datenschutz- und Sicherheitsanforderungen gelten." },
  { step: "02", icon: Target, title: "Use-Case & System-Wahl", time: "Woche 1", description: "Wir wählen das passende System (OpenClaw, Hermes, OpenHands, Manus) und definieren Ziel, Berechtigungen und Leitplanken." },
  { step: "03", icon: Settings2, title: "Agent bauen & absichern", time: "Woche 2 bis 4", description: "Wir binden Tools an, setzen Guardrails und Human-in-the-Loop und testen mit echten Aufgaben inklusive Ausnahmen." },
  { step: "04", icon: Rocket, title: "Go-Live & Ausbau", time: "ab Woche 4", description: "Der Agent geht kontrolliert in Betrieb, protokolliert und überwacht. Wir erweitern den Aktionsradius schrittweise." },
];
const related = [
  { href: "/leistungen/agentic-ai", icon: Bot, title: "Agentic AI & AI Agents", desc: "Das gesamte Feld der KI-Agenten und ihrer Orchestrierung im Überblick." },
  { href: "/leistungen/n8n-automatisierung", icon: Workflow, title: "n8n Automatisierung", desc: "Agenten in robuste, nachvollziehbare Workflows einbetten und anbinden." },
  { href: "/leistungen/private-ai", icon: Lock, title: "Private AI & Lokale KI", desc: "Die DSGVO-konforme Modellbasis für self-hosted Agenten in der EU." },
];

export default function Page() {
  return (
    <>
      <Script id="faq-agenten" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-agenten" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center bg-primary/10 border border-primary/20 rounded-xl p-2.5"><Bot className="w-7 h-7 text-primary" /></span>
                    <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">Autonome KI-Agenten</Badge>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">KI-Agenten, die <span className="text-primary">eigenständig handeln</span></h1>
                  <p className="text-lg text-muted-foreground max-w-xl">Die neue Generation autonomer Agenten, OpenClaw, Hermes, Manus, OpenHands, erledigt Aufgaben end-to-end statt nur zu antworten. Wir bauen sie für Unternehmen mit Fokus auf self-hosted und DSGVO, mit klaren Leitplanken und voller Nachvollziehbarkeit.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild><a href="#contact">Kostenloses Assessment</a></Button>
                    <Button size="lg" variant="outline" asChild><a href="#vergleich">OpenClaw vs. Manus</a></Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><KeyRound className="w-4 h-4 text-primary" /> Local-first</span>
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO & Guardrails</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>
                <div className="relative">
                  <Card className="border-2 shadow-xl shadow-primary/5 overflow-hidden">
                    <CardHeader className="border-b border-border py-3">
                      <div className="flex items-center gap-2">
                        <span className="flex gap-1.5"><span className="w-3 h-3 rounded-full bg-muted-foreground/20" /><span className="w-3 h-3 rounded-full bg-muted-foreground/20" /><span className="w-3 h-3 rounded-full bg-muted-foreground/20" /></span>
                        <span className="ml-2 font-mono text-xs text-muted-foreground">research-agent.local</span>
                        <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground"><span className="w-2 h-2 rounded-full bg-green-500" /> arbeitet</span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3 rounded-xl border-2 border-primary/40 bg-primary/5 px-3.5 py-2.5"><div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0"><Target className="w-5 h-5 text-primary" /></div><div className="min-w-0"><div className="text-[10px] uppercase tracking-wider text-primary font-medium">Ziel</div><div className="text-sm font-semibold truncate">Marktanalyse erstellen</div></div></div>
                      {[{ icon: Search, t: "Plant Schritte & recherchiert" }, { icon: Network, t: "Ruft Tools & Quellen auf" }, { icon: FileText, t: "Schreibt Report mit Quellen" }].map((n, i) => { const Icon = n.icon; return (
                        <div key={i} className="flex items-center gap-3 rounded-xl border-2 border-border bg-background px-3.5 py-2.5 shadow-sm"><div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><Icon className="w-5 h-5 text-primary" /></div><div className="min-w-0 flex-1"><div className="text-sm font-semibold truncate">{n.t}</div></div><Check className="w-4 h-4 text-green-600 shrink-0" /></div>
                      ); })}
                    </CardContent>
                  </Card>
                  <div className="hidden lg:flex absolute -top-4 -right-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium"><KeyRound className="w-3.5 h-3.5 text-primary" /> self-hosted</div>
                  <div className="hidden lg:flex absolute -bottom-4 -left-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium"><Shield className="w-3.5 h-3.5 text-primary" /> mit Guardrails</div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-10 md:py-12 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-2 md:grid-cols-4 border-2 border-border rounded-2xl overflow-hidden bg-card">
                {stats.map(({ value, label }, i) => (<div key={i} className="p-6 md:p-8 text-center border-b md:border-b-0 border-r last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r border-border"><div className="text-3xl md:text-4xl font-bold text-primary">{value}</div><div className="text-xs md:text-sm text-muted-foreground mt-1.5">{label}</div></div>))}
              </div>
            </div>
          </section>

          {/* FRAMEWORK-LOGOS */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 max-w-7xl">
              <p className="text-center text-sm font-medium text-muted-foreground mb-8">
                Self-hosted und DSGVO-konform, auf bewährten Open-Source-Frameworks
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                {[
                  { slug: "langchain", name: "LangChain" },
                  { slug: "langgraph", name: "LangGraph" },
                  { slug: "n8n", name: "n8n" },
                  { slug: "ollama", name: "Ollama" },
                  { slug: "anthropic", name: "Anthropic" },
                  { slug: "openai", name: "OpenAI" },
                ].map((m) => (
                  <div key={m.slug} className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white border border-border flex items-center justify-center p-3 hover-lift">
                    <img src={`/img/logos/${m.slug}.svg`} alt={m.name} className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Kurz erklärt</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Vom Chatbot zum handelnden Agenten</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Ein <strong className="text-foreground">autonomer KI-Agent</strong> nimmt ein Ziel entgegen und plant die nötigen Schritte selbst. Er nutzt ein Sprachmodell als Gehirn, ruft eigenständig Werkzeuge auf und arbeitet eine Aufgabe end-to-end ab. Ein Chatbot reagiert, ein Agent handelt.</p>
                    <p>Die neue Generation, allen voran <strong className="text-foreground">OpenClaw</strong> (open-source, local-first, über 145.000 GitHub-Stars), dazu Hermes, Manus und OpenHands, hebt das auf ein neues Niveau. OpenClaw läuft auf Ihrer Hardware und macht Messaging-Apps zur Kommandozentrale, ohne dass ein Konzern mitliest.</p>
                    <p>Wir bringen diese Autonomie sicher ins Unternehmen: <strong className="text-foreground">self-hosted, DSGVO-konform und mit Leitplanken</strong>, damit Sie den Nutzen heben und die Kontrolle behalten.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">OpenClaw</Badge>
                    <Badge variant="secondary" className="rounded-full">Manus AI</Badge>
                    <Badge variant="secondary" className="rounded-full">OpenHands</Badge>
                    <Badge variant="secondary" className="rounded-full">Hermes</Badge>
                    <Badge variant="secondary" className="rounded-full">KI Agent</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader><CardTitle className="text-xl">Agenten auf einen Blick</CardTitle><CardDescription>Die wichtigsten Eckdaten im Überblick.</CardDescription></CardHeader>
                  <CardContent className="space-y-1">{ataglance.map(([label, value]) => (<div key={label} className="flex items-center justify-between py-2.5 border-b border-border last:border-0"><span className="text-sm font-medium text-foreground">{label}</span><span className="text-sm text-muted-foreground text-right max-w-[55%]">{value}</span></div>))}</CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum Agenten?</Badge><h2 className="text-3xl md:text-4xl font-bold">Arbeit, die sich selbst erledigt</h2><p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Überall, wo eine Aufgabe viele Schritte über mehrere Tools braucht, kann ein Agent übernehmen.</p></div>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-3"><div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 pl-1">Was heute bremst</div>{problems.map(({ problem }, i) => (<div key={i} className="flex items-start gap-3 p-4 rounded-xl border bg-background"><X className="w-5 h-5 text-destructive mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{problem}</span></div>))}</div>
                <div className="space-y-3"><div className="text-xs font-semibold text-primary uppercase tracking-widest mb-2 pl-1">Was ein Agent stattdessen tut</div>{problems.map(({ solution }, i) => (<div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-primary/20 bg-primary/5"><Check className="w-5 h-5 text-primary mt-0.5 shrink-0" /><span className="text-sm leading-relaxed font-medium">{solution}</span></div>))}</div>
              </div>
            </div>
          </section>

          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Was wir liefern</Badge><h2 className="text-3xl md:text-4xl font-bold">Autonomie mit Sicherheitsnetz</h2><p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Wir bauen Agenten, die viel können und trotzdem kontrollierbar bleiben.</p></div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="hover-lift border-2 lg:col-span-2 bg-primary/5 border-primary/20"><CardHeader><div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2"><KeyRound className="w-6 h-6 text-primary" /></div><CardTitle className="text-xl">{features[0].title}</CardTitle><CardDescription className="text-base leading-relaxed">{features[0].description}</CardDescription></CardHeader></Card>
                {features.slice(1).map((f, i) => { const Icon = f.icon; return (<Card key={i} className="hover-lift border-2"><CardHeader><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2"><Icon className="w-5 h-5 text-primary" /></div><CardTitle className="text-lg">{f.title}</CardTitle><CardDescription className="leading-relaxed">{f.description}</CardDescription></CardHeader></Card>); })}
              </div>
            </div>
          </section>

          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Anwendungsfälle</Badge><h2 className="text-3xl md:text-4xl font-bold">Was autonome Agenten übernehmen</h2><p className="text-lg text-muted-foreground mt-4">Wählen Sie einen Bereich, wir zeigen konkrete Agenten.</p></div>
              <Tabs defaultValue="research" className="w-full">
                <TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">{usecases.map((d) => { const Icon = d.icon; return (<TabsTrigger key={d.value} value={d.value} className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border"><Icon className="w-4 h-4 mr-1.5" />{d.label}</TabsTrigger>); })}</TabsList>
                {usecases.map((d) => (<TabsContent key={d.value} value={d.value}><Card className="border-2"><CardContent className="pt-6"><h3 className="text-xl font-bold mb-2">{d.head}</h3><p className="text-muted-foreground leading-relaxed mb-5">{d.intro}</p><div className="grid sm:grid-cols-2 gap-3">{d.items.map((item, j) => (<div key={j} className="flex items-start gap-2.5 p-3 rounded-lg border bg-background"><Bot className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{item}</span></div>))}</div></CardContent></Card></TabsContent>))}
              </Tabs>
            </div>
          </section>

          <section id="vergleich" className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Vergleich</Badge><h2 className="text-3xl md:text-4xl font-bold">OpenClaw vs. Manus AI vs. RPA</h2><p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Welcher Ansatz passt? Das hängt von Datenschutz, Autonomiegrad und Aufgabe ab. Wir beraten unabhängig.</p></div>
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader><TableRow className="bg-muted/50"><TableHead className="w-[28%] font-bold text-foreground">Merkmal</TableHead><TableHead className="text-primary font-bold">OpenClaw</TableHead><TableHead className="text-muted-foreground">Manus AI</TableHead><TableHead className="text-muted-foreground">RPA</TableHead></TableRow></TableHeader>
                  <TableBody>{comparison.map((row, i) => (<TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}><TableCell className="font-medium">{row.feature}</TableCell><TableCell className="text-sm text-primary font-medium">{row.oc}</TableCell><TableCell className="text-sm text-muted-foreground">{row.manus}</TableCell><TableCell className="text-sm text-muted-foreground">{row.rpa}</TableCell></TableRow>))}</TableBody>
                </Table>
              </Card>
              <p className="text-sm text-muted-foreground text-center mt-4">Für regelbasierte Aufgaben ohne Schnittstelle ist oft <a href="/leistungen/rpa" className="text-primary hover:underline">RPA</a> der bessere Weg. Wir kombinieren beides.</p>
            </div>
          </section>

          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unser Prozess</Badge><h2 className="text-3xl md:text-4xl font-bold">Ihr Agenten-Projekt in 4 Schritten</h2><p className="text-lg text-muted-foreground mt-4">Vom Use Case zum sicher betriebenen Agenten.</p></div>
              <ProcessSteps steps={steps} />
            </div>
          </section>

          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge><h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zu autonomen KI-Agenten</h2></div>
              <Accordion type="single" collapsible className="w-full space-y-3">{faqs.map((f, i) => (<AccordionItem key={i} value={`item-${i}`} className="border-2 border-border rounded-xl px-6 bg-background data-[state=open]:border-primary/30 data-[state=open]:bg-primary/5"><AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-5">{f.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">{f.a}</AccordionContent></AccordionItem>))}</Accordion>
            </div>
          </section>

          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Mehr Leistungen</Badge><h2 className="text-3xl md:text-4xl font-bold">Passt gut zu autonomen Agenten</h2></div>
              <div className="grid md:grid-cols-3 gap-5">{related.map((s, i) => { const Icon = s.icon; return (<a key={i} href={s.href} className="group block"><Card className="h-full border-2 hover-lift group-hover:border-primary/40"><CardHeader><div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${serviceLogos[s.href] ? "bg-white border border-border" : "bg-primary/10"}`}>{serviceLogos[s.href] ? <img src={`/img/logos/${serviceLogos[s.href]}.svg`} alt={s.title} className="w-7 h-7 object-contain" /> : <Icon className="w-6 h-6 text-primary" />}</div><CardTitle className="text-xl">{s.title}</CardTitle></CardHeader><CardContent><p className="text-muted-foreground leading-relaxed">{s.desc}</p></CardContent></Card></a>); })}</div>
            </div>
          </section>

          <ContactForm />
        </main>
        <FooterModern />
      </div>
    </>
  );
}
