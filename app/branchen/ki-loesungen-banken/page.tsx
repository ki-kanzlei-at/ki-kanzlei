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
import { Banknote, ShieldCheck, Server, MapPin, Lock, Check, X, FileCheck, Database, ScanSearch, MessageSquare, BadgeCheck, Brain, Network, Plug, TrendingUp } from "lucide-react";
import { serviceLogos } from "@/lib/serviceLogos";

export const metadata: Metadata = {
  title: "KI für Banken & Finanzdienstleister",
  description:
    "KI für Banken und Finanzdienstleister: Kreditanträge und Onboarding automatisch prüfen, Compliance-Fragen zu BaFin, MaRisk und DORA mit Quelle beantworten, Betrug erkennen. On-Premise und DSGVO-konform.",
  keywords:
    "KI Bank, KI Banken, KI Banking, KI Finanzbranche, KI im Bankwesen, Kreditprüfung KI, Betrugserkennung KI, BaFin KI, KYC Automatisierung, KI Sparkasse",
  alternates: { canonical: "https://ki-kanzlei.at/branchen/ki-loesungen-banken" },
};

const faqs = [
  {
    q: "Können wir die KI On-Premise im eigenen Rechenzentrum betreiben?",
    a: "Ja, und für Banken ist das oft der Königsweg. Wir betreiben die KI vollständig On-Premise in Ihrem Rechenzentrum oder in einer dedizierten Private Cloud in der EU. Die Modelle laufen lokal, kein Datenpunkt verlässt Ihre kontrollierte Umgebung und es gibt keinen Drittlandtransfer. So vereinbaren Sie moderne KI mit dem Bankgeheimnis und Ihren internen Sicherheitsvorgaben.",
  },
  {
    q: "Wie stellt die KI die Einhaltung von BaFin, MaRisk und DORA sicher?",
    a: "Regulatorische Konformität ist von Anfang an Teil der Architektur. Alle Verarbeitungen sind protokolliert und nachvollziehbar, Entscheidungen der KI bleiben durch den Menschen freigabepflichtig, und das Auslagerungs- und Risikomanagement nach MaRisk und DORA wird sauber dokumentiert. Auskünfte der Compliance-Wissensdatenbank werden stets mit der konkreten Fundstelle ausgegeben, damit jede Antwort belegbar ist.",
  },
  {
    q: "Woher nimmt die Compliance-Wissensdatenbank ihre Antworten?",
    a: "Ausschließlich aus Ihren eigenen und den einschlägigen regulatorischen Quellen: BaFin-Rundschreiben, MaRisk, DORA, interne Richtlinien, Arbeitsanweisungen und Organisationshandbücher. Jede Antwort enthält einen Verweis auf die konkrete Textstelle, sodass Ihre Mitarbeiter die Auskunft sofort prüfen und im Audit belegen können.",
  },
  {
    q: "Wie läuft die automatische Prüfung von Kreditanträgen ab?",
    a: "Die KI liest die eingereichten Unterlagen aus, prüft sie auf Vollständigkeit und Plausibilität, gleicht sie mit Ihren Vergaberichtlinien ab und bereitet eine strukturierte Entscheidungsvorlage vor. Auffälligkeiten und fehlende Nachweise werden markiert. Die finale Kreditentscheidung trifft immer Ihr Sachbearbeiter, die KI beschleunigt nur die Vorarbeit.",
  },
  {
    q: "Wie erkennt die KI Betrug und Anomalien?",
    a: "Die KI überwacht Transaktionen und Vorgänge laufend und erkennt Muster, die vom normalen Verhalten abweichen, etwa ungewöhnliche Beträge, Häufungen oder geografische Auffälligkeiten. Verdächtige Fälle werden mit einer nachvollziehbaren Begründung markiert und an Ihre Fachabteilung eskaliert, sodass Ihr Team gezielt prüfen kann statt manuell zu suchen.",
  },
  {
    q: "Erfüllt die Lösung den EU AI Act und die DSGVO?",
    a: "Ja. Wir bauen jede Lösung DSGVO-konform mit Datenhaltung in Europa und berücksichtigen die Anforderungen des EU AI Act an Transparenz, Dokumentation und menschliche Aufsicht. Risikoreiche Anwendungsfälle wie die Kreditwürdigkeitsprüfung werden mit der gebotenen Sorgfalt, Erklärbarkeit und menschlichen Letztentscheidung umgesetzt.",
  },
  {
    q: "Lässt sich die KI an unser Kernbanksystem anbinden?",
    a: "In aller Regel ja. Wir binden die KI über gesicherte Schnittstellen so an, dass geprüfte Anträge, Compliance-Auskünfte und Fallmeldungen direkt in Ihre bestehenden Systeme fließen, ganz ohne Doppelerfassung. Die technische Machbarkeit und das Berechtigungskonzept klären wir individuell in einem kostenlosen Analysegespräch.",
  },
  {
    q: "Wie lange dauert die Einrichtung?",
    a: "Nach einem kurzen Erstgespräch konfigurieren wir die Antragsprüfung, befüllen die Compliance-Wissensdatenbank mit Ihren Regelwerken, richten On-Premise-Betrieb und Anbindung ein und testen mit echten Fällen, bevor wir live gehen. Ein klar abgegrenzter Pilot ist meist in wenigen Wochen produktiv, der weitere Rollout erfolgt schrittweise und kontrolliert.",
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
  name: "KI Lösungen für Banken und Finanzdienstleister",
  serviceType: "KI für Banken, Antragsautomatisierung, Compliance-Wissensdatenbank, Betrugserkennung",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description: "KI Lösungen für Banken, Finanzdienstleister und Sparkassen im DACH-Raum: automatisierte Dokumenten- und Antragsprüfung, Compliance-Wissensdatenbank mit Quellenangabe über BaFin, MaRisk und DORA, Betrugs- und Anomalieerkennung sowie KYC-Automatisierung. On-Premise, DSGVO-konform und ohne Drittlandtransfer.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const problems = [
  "Kreditanträge und Onboarding-Unterlagen werden manuell geprüft, das kostet Tage und bindet Sachbearbeiter",
  "Für jede regulatorische Frage wird mühsam in BaFin-Rundschreiben, MaRisk und DORA nachgeschlagen",
  "Verdächtige Transaktionen und Anomalien fallen erst spät oder gar nicht auf",
  "Wiederkehrende Kundenanfragen zu Konto, Kredit und Status binden den gesamten Service",
  "KYC- und Onboarding-Prozesse sind langwierig, fehleranfällig und schlecht dokumentiert",
  "Cloud-KI scheidet aus, weil sensible Bankdaten das Haus und die EU nicht verlassen dürfen",
];

const solutions = [
  "Die KI prüft Kreditanträge und Onboarding-Dokumente automatisch, plausibilisiert und vollständig nachvollziehbar",
  "Die Compliance-Wissensdatenbank beantwortet Fragen zu BaFin, MaRisk und DORA in Sekunden, mit Fundstelle",
  "Anomalien und verdächtige Muster werden in Echtzeit erkannt, begründet markiert und eskaliert",
  "Wiederkehrende Kundenanfragen beantwortet der KI-Chatbot rund um die Uhr, der Rest geht an Ihr Team",
  "KYC- und Onboarding-Schritte laufen automatisiert, geprüft und prüfsicher dokumentiert",
  "Alles läuft On-Premise oder in einer Private Cloud in der EU, ohne Drittlandtransfer Ihrer Daten",
];

const useCases = [
  {
    value: "antraege",
    label: "Antragsprüfung",
    icon: FileCheck,
    head: "Dokumenten- und Antragsautomatisierung",
    text: "Ob Kreditantrag oder Kontoeröffnung: Die KI liest die eingereichten Unterlagen aus, prüft Vollständigkeit und Plausibilität, gleicht sie mit Ihren Vergaberichtlinien ab und erstellt eine strukturierte Entscheidungsvorlage. Fehlende Nachweise und Auffälligkeiten werden markiert, die finale Entscheidung trifft Ihr Sachbearbeiter.",
  },
  {
    value: "compliance",
    label: "Compliance-Wissen",
    icon: Database,
    head: "Compliance-Wissensdatenbank (RAG)",
    text: "Stellen Sie jede regulatorische Frage im Chat und erhalten Sie in Sekunden eine belegte Antwort, mit Verweis auf die konkrete Stelle in BaFin-Rundschreiben, MaRisk, DORA oder Ihren internen Richtlinien. Schluss mit dem Blättern in hunderten Seiten Regelwerk, jede Auskunft bleibt belegbar und auditfest.",
  },
  {
    value: "betrug",
    label: "Betrugserkennung",
    icon: ScanSearch,
    head: "Betrugs- und Anomalieerkennung",
    text: "Die KI überwacht Transaktionen und Vorgänge laufend und erkennt Muster, die vom normalen Verhalten abweichen. Verdächtige Fälle werden mit nachvollziehbarer Begründung markiert und an Ihre Fachabteilung eskaliert, sodass Ihr Team gezielt prüft statt manuell zu suchen.",
  },
  {
    value: "service",
    label: "Kundenservice",
    icon: MessageSquare,
    head: "Kundenservice-Chatbot",
    text: "Der KI-Chatbot beantwortet wiederkehrende Kundenanfragen zu Konto, Kredit, Konditionen und Status rund um die Uhr und erstellt für komplexe Fälle passgenaue Antwortvorschläge zur Freigabe durch Ihr Team. Persönliche Beratung bleibt persönlich, die Routine übernimmt die KI.",
  },
  {
    value: "kyc",
    label: "KYC",
    icon: BadgeCheck,
    head: "KYC- und Onboarding-Automatisierung",
    text: "Die KI unterstützt die Identitäts- und Legitimationsprüfung, gleicht Angaben mit den erforderlichen Nachweisen ab, prüft auf Vollständigkeit und dokumentiert jeden Schritt prüfsicher. So wird das Onboarding schneller, einheitlicher und besser belegbar.",
  },
  {
    value: "private",
    label: "Private AI",
    icon: Lock,
    head: "Private AI im eigenen Haus",
    text: "Auf Wunsch läuft die gesamte KI On-Premise in Ihrem Rechenzentrum oder in einer dedizierten Private Cloud in der EU. Die Modelle arbeiten lokal, sensible Bankdaten bleiben in Ihrer kontrollierten Umgebung und es gibt keinen Drittlandtransfer.",
  },
];

const features = [
  { icon: FileCheck, title: "Antrags- und Dokumentenprüfung automatisiert", text: "Kreditanträge und Onboarding-Unterlagen werden auf Vollständigkeit und Plausibilität geprüft, mit Ihren Richtlinien abgeglichen und zur Entscheidungsvorlage verdichtet, vollständig nachvollziehbar und mit menschlicher Letztentscheidung." },
  { icon: Brain, title: "Compliance-Antworten mit Fundstelle", text: "Die Wissensdatenbank beantwortet Fragen zu BaFin, MaRisk, DORA und internen Richtlinien mit Verweis auf die konkrete Quelle. So ist jede Auskunft belegbar und auditfest." },
  { icon: ScanSearch, title: "Betrugs- und Anomalieerkennung", text: "Auffällige Transaktionen und Muster werden in Echtzeit erkannt, begründet markiert und an die zuständige Fachabteilung eskaliert." },
  { icon: Lock, title: "Höchste Datensicherheit & On-Premise", text: "Betrieb On-Premise oder in einer Private Cloud in der EU, kein Drittlandtransfer, verschlüsselte Verarbeitung und ein sauberes Berechtigungskonzept, abgestimmt auf das Bankgeheimnis." },
  { icon: ShieldCheck, title: "Regulatorisch konform", text: "Konzipiert entlang BaFin, MaRisk, DORA, EU AI Act und DSGVO, mit lückenloser Protokollierung und menschlicher Aufsicht über jede risikoreiche Entscheidung." },
  { icon: TrendingUp, title: "Spürbar schneller", text: "Antragsbearbeitung und Recherche werden deutlich beschleunigt, während Qualität, Nachvollziehbarkeit und Kontrolle steigen." },
];

const stats = [
  ["60-80%", "schnellere Antragsbearbeitung"],
  ["24/7", "Anomalie- und Betrugs-Monitoring"],
  ["0", "Drittlandtransfer Ihrer Daten"],
  ["EU", "Datenhaltung oder On-Premise"],
];

const blick = [
  ["Einsatz", "Anträge, Compliance, Betrug"],
  ["Antragsprüfung", "automatisiert & nachvollziehbar"],
  ["Wissensbasis", "BaFin, MaRisk, DORA mit Quelle"],
  ["Betrieb", "On-Premise oder Private Cloud"],
  ["Datenschutz", "DSGVO, EU, kein Drittlandtransfer"],
  ["Konformität", "BaFin, MaRisk, DORA, EU AI Act"],
];

const related = [
  { href: "/leistungen/private-ai", icon: Lock, title: "Private AI & On-Premise", desc: "KI vollständig im eigenen Haus oder in der Private Cloud, ohne Drittlandtransfer und abgestimmt auf das Bankgeheimnis." },
  { href: "/leistungen/ki-wissensdatenbank", icon: Brain, title: "KI Wissensdatenbank", desc: "BaFin, MaRisk, DORA und interne Richtlinien sekundenschnell abrufbar, per RAG und stets mit Quellenangabe." },
  { href: "/leistungen/rpa", icon: Network, title: "RPA & Prozessautomatisierung", desc: "Verbindet Antragsprüfung, KYC und Fallmeldungen automatisch mit Ihrem Kernbanksystem, ganz ohne Doppelerfassung." },
];

const pruefung = [
  { label: "Unterlagen geprüft", value: "vollständig & plausibel" },
  { label: "Bonität bewertet", value: "risikoarm, Score 1,8" },
  { label: "Compliance-Check", value: "konform, MaRisk BTO 1.2.1" },
];

export default function Page() {
  return (
    <>
      <Script id="faq-banken" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-banken" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <style>{`
        @keyframes bankenPing { 0% { transform: scale(.9); opacity:.5; } 70%,100% { transform: scale(1.6); opacity:0; } }
        .banken-ping { animation: bankenPing 2s ease-out infinite; }
      `}</style>

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                    KI für Banken & Finanzdienstleister
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    KI Lösungen für <span className="text-primary">Banken</span> und Finanzdienstleister
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Von der automatisch geprüften Kreditakte über die Compliance-Wissensdatenbank, die jede Frage zu BaFin, MaRisk und DORA mit Quelle beantwortet, bis zur Betrugserkennung in Echtzeit: Wir bringen KI ins Bankwesen, On-Premise und ohne dass sensible Daten Ihr Haus verlassen.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Analysegespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="/leistungen/private-ai">Private AI ansehen</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-primary" /> On-Premise möglich</span>
                    <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-primary" /> Kein Drittlandtransfer</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Credit application check card */}
                <Card className="relative border-2 shadow-xl shadow-primary/5">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                          <Banknote className="w-5 h-5 text-primary" />
                        </div>
                        <span className="absolute inset-0 rounded-full border-2 border-primary/40 banken-ping" aria-hidden />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">Kreditantrag, Prüfung läuft</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> Automatisch geprüft, 00:04
                        </div>
                      </div>
                      <span className="ml-auto text-[10px] uppercase tracking-wider text-muted-foreground font-medium">On-Premise</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-3">
                    <div className="flex justify-start">
                      <div className="max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-snug bg-muted text-foreground rounded-bl-sm">
                        Kreditantrag über 240.000 EUR für eine Immobilienfinanzierung, Antragsteller selbstständig.
                      </div>
                    </div>
                    {pruefung.map((s, i) => (
                      <div key={i} className="flex items-center gap-3 rounded-xl border border-border px-3 py-2">
                        <span className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                          <Check className="w-4 h-4 text-primary" />
                        </span>
                        <span className="text-sm font-medium text-foreground">{s.label}</span>
                        <span className="ml-auto text-xs text-muted-foreground text-right">{s.value}</span>
                      </div>
                    ))}
                    <div className="flex items-center justify-between pt-2 border-t border-border text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5"><FileCheck className="w-4 h-4 text-primary" /> Entscheidungsvorlage erstellt</span>
                      <span className="flex items-center gap-1.5"><Plug className="w-4 h-4 text-primary" /> ins Kernbanksystem übertragen</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* STATS BAND */}
          <section className="pb-4">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-2 md:grid-cols-4 border-2 border-border rounded-2xl overflow-hidden bg-card">
                {stats.map(([v, l], i) => (
                  <div key={i} className="p-8 text-center border-b md:border-b-0 border-r last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r border-border">
                    <div className="text-4xl md:text-5xl font-bold text-primary">{v}</div>
                    <div className="text-sm text-muted-foreground mt-2">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WAS LEISTET KI IN DER BANK */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">KI im Bankwesen</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was KI in der Bank wirklich leistet</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Künstliche Intelligenz in der Bank ersetzt nicht die Kreditentscheidung und nicht die Beratung. Sie übernimmt die <strong className="text-foreground">Routine rundherum</strong>: das Prüfen von Anträgen und Unterlagen, das Nachschlagen in Regelwerken und die laufende Überwachung auf Auffälligkeiten.</p>
                    <p>Im Zentrum stehen drei Bausteine. Die <strong className="text-foreground">Dokumenten- und Antragsautomatisierung</strong> prüft Kreditanträge und Onboarding-Unterlagen und verdichtet sie zur Entscheidungsvorlage. Die <strong className="text-foreground">Compliance-Wissensdatenbank</strong> beantwortet Fragen zu BaFin, MaRisk und DORA in Sekunden, immer mit Fundstelle. Die <strong className="text-foreground">Betrugs- und Anomalieerkennung</strong> markiert verdächtige Muster, bevor Schaden entsteht.</p>
                    <p>Für Banken im DACH-Raum ist dabei eines entscheidend: <strong className="text-foreground">höchste Datensicherheit</strong>. Wir bauen jede Lösung On-Premise oder als Private AI, DSGVO-konform, ohne Drittlandtransfer und regulatorisch sauber dokumentiert.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Antragsautomatisierung</Badge>
                    <Badge variant="secondary" className="rounded-full">Compliance-Wissensdatenbank</Badge>
                    <Badge variant="secondary" className="rounded-full">Betrugserkennung</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Auf einen Blick</CardTitle>
                    <CardDescription>Was KI in Ihrem Haus übernimmt.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {blick.map(([label, value]) => (
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

          {/* PROBLEM ZU LÖSUNG */}
          <section className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-14">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Vom Problem zur Lösung</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Manuelle Prüfung und Regelwerk-Dschungel, gelöst</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Sicherheit und Tempo sind kein Widerspruch. Wir nehmen Ihrem Haus die Routine bei Anträgen, Compliance und Überwachung ab, ohne dass Daten oder Kontrolle das Haus verlassen.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-border">
                  <CardHeader>
                    <CardTitle className="text-xl">Der Bankalltag heute</CardTitle>
                    <CardDescription>Was Sachbearbeitung und Compliance täglich bremst.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {problems.map((p, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-muted flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-4 h-4 text-muted-foreground" />
                        </span>
                        <span className="text-muted-foreground leading-relaxed">{p}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                <Card className="border-2 border-primary/30 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="text-xl">Mit KI Kanzlei</CardTitle>
                    <CardDescription>So arbeitet Ihr Haus nach dem Rollout.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {solutions.map((s, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-primary" />
                        </span>
                        <span className="text-foreground leading-relaxed">{s}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* USE CASES TABS */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Lösungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Moderne KI-Lösungen für Ihr Haus</h2>
                <p className="text-lg text-muted-foreground">Weniger manuelle Prüfung, mehr Sicherheit und Tempo. Wählen Sie den Bereich, der Ihr Haus am meisten entlastet.</p>
              </div>
              <Tabs defaultValue="antraege" className="w-full">
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
                        <h3 className="text-xl font-bold mb-2">{u.head}</h3>
                        <p className="text-muted-foreground leading-relaxed">{u.text}</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>

          {/* FEATURES BENTO */}
          <section className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-14">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum es funktioniert</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Gebaut für das Bankwesen</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Sicher, regulatorisch konform und spürbar schneller, vom eingereichten Antrag bis zur belegten Compliance-Auskunft.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {features.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <Card key={i} className={`hover-lift border-2 ${i === 0 ? "lg:col-span-2 bg-primary/5 border-primary/20" : ""}`}>
                      <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{f.title}</CardTitle>
                      </CardHeader>
                      <CardContent><p className="text-muted-foreground leading-relaxed">{f.text}</p></CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen aus dem Bankwesen</h2>
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

          {/* RELATED LEISTUNGEN */}
          <section className="section-spacing">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Mehr Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zur Bank</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {related.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <a key={i} href={s.href} className="group block">
                      <Card className="h-full border-2 hover-lift group-hover:border-primary/40">
                        <CardHeader>
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${serviceLogos[s.href] ? "bg-white border border-border" : "bg-primary/10"}`}>
                            {serviceLogos[s.href] ? <img src={`/img/logos/${serviceLogos[s.href]}.svg`} alt={s.title} className="w-7 h-7 object-contain" /> : <Icon className="w-6 h-6 text-primary" />}
                          </div>
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
