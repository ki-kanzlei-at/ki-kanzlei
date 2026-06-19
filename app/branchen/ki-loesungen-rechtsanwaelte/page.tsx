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
import { Scale, ShieldCheck, Server, MapPin, FileSearch, FileText, FileCheck, Quote, AlertTriangle, Check, X, Database, ScrollText, CalendarClock, PhoneCall, Lock, TrendingUp, Brain, Network } from "lucide-react";
import { serviceLogos } from "@/lib/serviceLogos";

export const metadata: Metadata = {
  title: "Legal Tech & KI für Rechtsanwälte und Kanzleien",
  description:
    "KI für Rechtsanwälte und Kanzleien: KI-Vertragsanalyse und Dokumentenprüfung mit Quellenbeleg plus RAG-Wissensdatenbank über Ihre Akten. DSGVO-konform, EU-Hosting.",
  keywords:
    "Legal Tech, KI Rechtsanwalt, KI Kanzlei, KI Vertragsanalyse, KI Dokumentenanalyse, KI für Anwälte, Kanzleisoftware, KI Wissensdatenbank Kanzlei",
  alternates: { canonical: "https://ki-kanzlei.at/branchen/ki-loesungen-rechtsanwaelte" },
};

const faqs = [
  {
    q: "Wie analysiert die KI Verträge und Dokumente?",
    a: "Die KI liest Verträge, AGB und Schriftsätze, hebt die relevanten Klauseln hervor, findet die einschlägige Passage samt Fundstelle und kennzeichnet riskante oder unübliche Formulierungen. Sie erhalten eine strukturierte Einschätzung mit Quellenangabe und entscheiden auf dieser Basis. Die juristische Letztverantwortung bleibt immer bei Ihnen.",
  },
  {
    q: "Bleibt die anwaltliche Verschwiegenheit gewahrt?",
    a: "Ja. Das anwaltliche Berufsgeheimnis hat bei uns oberste Priorität. Alle Lösungen laufen DSGVO-konform auf Servern in Europa, Mandantendaten werden verschlüsselt verarbeitet und nicht zum Training fremder Modelle verwendet. Ein Auftragsverarbeitungsvertrag ist Teil jeder Umsetzung.",
  },
  {
    q: "Ist die KI auf österreichisches Recht abgestimmt?",
    a: "Ja. Wir richten Modelle, Prompts und Wissensbasis auf den österreichischen Rechtsrahmen aus, von ABGB und UGB bis ZPO, und schneiden sie auf die Fachgebiete Ihrer Kanzlei zu. Auf Wunsch berücksichtigen wir auch deutschsprachige Nachbarrechtsordnungen für grenzüberschreitende Mandate.",
  },
  {
    q: "Kann die KI auf unseren bestehenden Aktenbestand zugreifen?",
    a: "Ja. Über eine RAG-Wissensdatenbank binden wir Ihre Akten, früheren Schriftsätze und Musterverträge ein. Ihr Team stellt eine Frage im Chat und erhält die passende Antwort mit Verweis auf das konkrete Dokument. Die Anbindung an Ihre Kanzleisoftware prüfen wir individuell in einem kostenlosen Analysegespräch.",
  },
  {
    q: "Erfindet die KI Inhalte oder kann ich mich auf die Antworten verlassen?",
    a: "Unsere Lösungen arbeiten quellenbasiert: Jede Aussage wird mit der konkreten Fundstelle in Akte, Vertrag oder Paragraf belegt, sodass Sie sie sofort verifizieren können. Damit reduzieren wir Halluzinationen deutlich. Die KI liefert einen geprüften Vorschlag, die fachliche Freigabe erfolgt immer durch die Kanzlei.",
  },
  {
    q: "Übernimmt die KI auch den telefonischen Erstkontakt?",
    a: "Auf Wunsch ja. Als ergänzende Lösung nimmt ein KI-Sekretariat über die Plattform fonio.ai Anrufe entgegen, qualifiziert das Anliegen, erfasst die Eckdaten zur Mandatsanbahnung und bucht Termine, auch außerhalb der Kanzleizeiten. Der Schwerpunkt unserer Arbeit für Kanzleien liegt aber auf Dokumentenanalyse und Wissensdatenbank.",
  },
  {
    q: "Wie lange dauert die Einrichtung?",
    a: "In der Regel rund 2 Wochen. Nach einem kurzen Erstgespräch binden wir Ihre Dokumente und Vorlagen an, konfigurieren Analyse, Wissensbasis und Berechtigungen, testen mit echten Akten und gehen dann produktiv, mit laufender Optimierung danach.",
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
  name: "KI Lösungen für Rechtsanwälte und Kanzleien",
  serviceType: "Legal Tech, KI-Vertragsanalyse, KI-Dokumentenanalyse, KI-Wissensdatenbank",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description: "Legal Tech und KI für Rechtsanwälte und Kanzleien im DACH-Raum: KI-Dokumenten- und Vertragsanalyse mit Quellenbeleg, RAG-Wissensdatenbank über Akten und Schriftsätze, KI-Sekretariat und Fristenautomatisierung. DSGVO-konform, auf österreichisches Recht abgestimmt.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const problems = [
  "Stundenlanges Wälzen von Verträgen, AGB und Schriftsätzen nach der entscheidenden Klausel",
  "Wissen verteilt über tausende Akten, niemand findet den passenden Präzedenzfall schnell",
  "Risikobehaftete oder unübliche Klauseln werden unter Zeitdruck übersehen",
  "Junganwälte verbringen abrechenbare Zeit mit reiner Recherche statt mit Mandantenarbeit",
  "Standard-Schriftsätze und Entwürfe werden jedes Mal von Grund auf neu getippt",
  "Die Sorge um das anwaltliche Berufsgeheimnis blockiert jeden Einsatz von Cloud-KI",
];

const solutions = [
  "Die KI liest Verträge in Minuten, markiert relevante Klauseln und kennzeichnet Risiken",
  "Die RAG-Wissensdatenbank durchsucht Ihren gesamten Aktenbestand in Sekunden",
  "Jede Antwort kommt mit Quellenangabe auf Akte, Paragraf oder Schriftsatz",
  "Recherche und Entwürfe entstehen in Minuten, Sie prüfen und geben final frei",
  "Auf österreichisches Recht abgestimmt, von ABGB und UGB bis ZPO",
  "DSGVO-konform mit EU-Datenhaltung, die anwaltliche Verschwiegenheit bleibt gewahrt",
];

const useCases = [
  {
    value: "vertragsanalyse",
    label: "Vertragsanalyse",
    icon: FileSearch,
    head: "KI-Dokumenten- und Vertragsanalyse",
    text: "Die KI liest Verträge, AGB und Schriftsätze in Minuten, hebt relevante Klauseln hervor, findet die einschlägige Passage samt Quellenangabe und kennzeichnet riskante oder unübliche Formulierungen. Sie prüfen den Vorschlag und entscheiden, die Kontrolle bleibt vollständig bei Ihnen.",
  },
  {
    value: "wissensbasis",
    label: "Wissensdatenbank",
    icon: Database,
    head: "KI-Wissensdatenbank (RAG) für Akten und Schriftsätze",
    text: "Greift in Sekunden auf Ihren gesamten Aktenbestand, frühere Schriftsätze und Musterverträge zu. Eine Frage im Chat genügt und Sie erhalten die passende Antwort, immer mit Verweis auf Akte, Paragraf oder Dokument. So findet das gesamte Team den richtigen Präzedenzfall ohne langes Suchen.",
  },
  {
    value: "schriftsaetze",
    label: "Schriftsätze",
    icon: ScrollText,
    head: "Recherche und Schriftsatz-Entwürfe",
    text: "Erstellt auf Basis Ihrer Vorlagen und der Aktenlage strukturierte Entwürfe für Schriftsätze, Stellungnahmen und Standardkorrespondenz. Die KI recherchiert die einschlägigen Bestimmungen und belegt sie, Sie redigieren und geben final frei.",
  },
  {
    value: "duediligence",
    label: "Due Diligence",
    icon: FileCheck,
    head: "Dokumenten-Review und Due Diligence",
    text: "Bei großen Datenräumen sichtet die KI hunderte Dokumente, extrahiert Fristen, Kündigungsrechte, Change-of-Control-Klauseln und Auffälligkeiten und fasst sie strukturiert zusammen, inklusive Fundstelle. Das verkürzt die Prüfung von Tagen auf Stunden.",
  },
  {
    value: "sekretariat",
    label: "KI-Sekretariat",
    icon: PhoneCall,
    head: "KI-Sekretariat für Erstkontakt und Mandatsanbahnung",
    text: "Über die Voice-Plattform fonio.ai nimmt das KI-Sekretariat Anrufe entgegen, qualifiziert das Anliegen, erfasst die Eckdaten zur Mandatsanbahnung und bucht Termine, auch außerhalb der Kanzleizeiten. So geht kein potenzielles Mandat verloren.",
  },
  {
    value: "fristen",
    label: "Fristen",
    icon: CalendarClock,
    head: "Fristen und Korrespondenz mit n8n",
    text: "Automatisierte Workflows mit n8n verbinden Posteingang, Kalender und Kanzleisoftware: Fristen werden erfasst und überwacht, eingehende Korrespondenz wird vorsortiert und Routineantworten werden vorbereitet, alles zur Freigabe durch die Kanzlei.",
  },
];

const features = [
  { icon: FileSearch, title: "Vertragsanalyse mit Quellenbeleg", text: "Die KI prüft Verträge und Dokumente, markiert relevante Klauseln, kennzeichnet Risiken und belegt jede Aussage mit der konkreten Fundstelle. So bleibt jede Einschätzung für Sie nachvollziehbar und jederzeit überprüfbar." },
  { icon: Database, title: "Wissensdatenbank über den Aktenbestand", text: "Per RAG durchsucht die KI Akten, Schriftsätze und Musterverträge und liefert die passende Antwort in Sekunden, statt im Archiv zu blättern." },
  { icon: Scale, title: "Auf österreichisches Recht abgestimmt", text: "Modelle, Prompts und Wissensbasis sind auf den österreichischen Rechtsrahmen ausgerichtet, von ABGB und UGB bis ZPO, und lassen sich auf Ihre Fachgebiete zuschneiden." },
  { icon: Lock, title: "Anwaltliche Verschwiegenheit gewahrt", text: "Mandantendaten verlassen den geschützten Rahmen nicht. Verarbeitung und Speicherung erfolgen so, dass das anwaltliche Berufsgeheimnis jederzeit gewahrt bleibt." },
  { icon: Server, title: "DSGVO und EU-Datenhaltung", text: "Alle Daten werden verschlüsselt auf Servern in Europa verarbeitet, mit Auftragsverarbeitungsvertrag und ohne Training fremder Modelle mit Ihren Inhalten." },
  { icon: TrendingUp, title: "Spürbar weniger Rechercheaufwand", text: "Kanzleien sparen bei Prüfung und Recherche typischerweise mehrere Stunden pro Woche, die zurück in die Mandatsarbeit fließen." },
];

const stats = [
  ["bis 70%", "weniger Zeit für die Vertragsprüfung"],
  ["Sekunden", "statt Stunden für die Aktenrecherche"],
  ["100%", "Antworten mit Quellenangabe"],
  ["2 Wo.", "bis zum produktiven Einsatz"],
];

const blick = [
  ["Einsatz", "Vertrags- und Dokumentenanalyse"],
  ["Wissensbasis", "Akten, Schriftsätze, Verträge (RAG)"],
  ["Recht", "auf österreichisches Recht abgestimmt"],
  ["Kontrolle", "jede Antwort mit Quellenbeleg"],
  ["Verschwiegenheit", "Berufsgeheimnis gewahrt"],
  ["Datenschutz", "DSGVO, EU-Hosting, AVV"],
];

const related = [
  { href: "/leistungen/ki-wissensdatenbank", icon: Brain, title: "KI Wissensdatenbank", desc: "Akten, Schriftsätze und Musterverträge per RAG in Sekunden durchsuchbar, jede Antwort mit Quellenangabe." },
  { href: "/leistungen/agentic-ai", icon: Network, title: "Agentic AI", desc: "Autonome KI-Agenten, die mehrstufige Recherche, Dokumenten-Review und Routineprozesse in der Kanzlei übernehmen." },
  { href: "/leistungen/voicebot", icon: PhoneCall, title: "Voicebot & KI-Sekretariat", desc: "Das KI-Sekretariat nimmt Anrufe an, qualifiziert Anliegen und bucht Termine zur Mandatsanbahnung, rund um die Uhr." },
];

const clauses = [
  { label: "§ 6 Haftung", note: "Haftungsausschluss sehr weit gefasst", risk: true },
  { label: "§ 4 Leistungsumfang", note: "Klar geregelt, kein Handlungsbedarf", risk: false },
  { label: "§ 9 Gerichtsstand", note: "Abweichung von § 14 JN geprüft", risk: false },
];

export default function Page() {
  return (
    <>
      <Script id="faq-rechtsanwaelte" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-rechtsanwaelte" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <style>{`
        @keyframes raPing { 0% { transform: scale(.9); opacity:.5; } 70%,100% { transform: scale(1.6); opacity:0; } }
        .ra-ping { animation: raPing 2s ease-out infinite; }
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
                    Legal Tech für Rechtsanwälte & Kanzleien
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    KI für Rechtsanwälte: <span className="text-primary">Vertrags- und Dokumentenanalyse</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Die KI prüft Verträge und Schriftsätze in Minuten, hebt relevante Klauseln hervor, findet die einschlägige Passage mit Quellenangabe und kennzeichnet Risiken. Dazu eine RAG-Wissensdatenbank über Ihren gesamten Aktenbestand, auf österreichisches Recht abgestimmt.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Analysegespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="/leistungen/ki-wissensdatenbank">KI-Wissensdatenbank ansehen</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-primary" /> EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Document analysis card */}
                <Card className="relative border-2 shadow-xl shadow-primary/5">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                          <FileSearch className="w-5 h-5 text-primary" />
                        </div>
                        <span className="absolute inset-0 rounded-full border-2 border-primary/40 ra-ping" aria-hidden />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">Vertragsanalyse, Werkvertrag_AG.pdf</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> Analyse abgeschlossen, 12 Seiten
                        </div>
                      </div>
                      <span className="ml-auto text-[10px] uppercase tracking-wider text-muted-foreground font-medium">EU-Server</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-3">
                    {clauses.map((c, i) => (
                      <div key={i} className="flex items-start gap-3 rounded-xl border border-border p-3">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${c.risk ? "bg-amber-100" : "bg-primary/15"}`}>
                          {c.risk ? <AlertTriangle className="w-4 h-4 text-amber-600" /> : <Check className="w-4 h-4 text-primary" />}
                        </span>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold">{c.label}</div>
                          <div className="text-xs text-muted-foreground">{c.note}</div>
                        </div>
                        {c.risk && <span className="ml-auto text-[10px] uppercase tracking-wider text-amber-600 font-semibold shrink-0">Risiko</span>}
                      </div>
                    ))}
                    <div className="rounded-xl bg-primary/5 border border-primary/20 p-3">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-primary mb-1">
                        <Quote className="w-3.5 h-3.5" /> Relevante Passage gefunden
                      </div>
                      <p className="text-sm text-foreground leading-snug">„Die Haftung des Auftragnehmers wird auf Vorsatz und grobe Fahrlässigkeit beschränkt."</p>
                      <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground mt-2">
                        <FileText className="w-3.5 h-3.5 text-primary" /> Quelle: Werkvertrag_AG.pdf, § 6 Abs. 2, Seite 4
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-border text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5"><FileCheck className="w-4 h-4 text-primary" /> 3 Klauseln geprüft</span>
                      <span className="flex items-center gap-1.5"><AlertTriangle className="w-4 h-4 text-amber-600" /> 1 Risiko markiert</span>
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

          {/* WAS LEISTET KI IN DER KANZLEI */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">KI in der Kanzlei</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was KI in der Kanzlei wirklich leistet</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Künstliche Intelligenz in der Kanzlei ersetzt nicht die juristische Würdigung. Sie beschleunigt die Arbeit davor: das <strong className="text-foreground">Lesen und Prüfen von Verträgen</strong>, die Recherche im Aktenbestand, das Entwerfen von Schriftsätzen und die wiederkehrende Korrespondenz.</p>
                    <p>Im Zentrum steht die <strong className="text-foreground">KI-Dokumenten- und Vertragsanalyse</strong> in Kombination mit einer <strong className="text-foreground">RAG-Wissensdatenbank</strong> über Akten und Schriftsätze. Die KI findet die einschlägige Stelle, belegt sie mit der Fundstelle und kennzeichnet Risiken, damit Sie schneller zu einer fundierten Einschätzung kommen.</p>
                    <p>Für Kanzleien im DACH-Raum ist eines entscheidend: das <strong className="text-foreground">anwaltliche Berufsgeheimnis</strong>. Wir bauen jede Lösung DSGVO-konform, mit Datenhaltung in Europa und auf österreichisches Recht abgestimmt.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Vertragsanalyse</Badge>
                    <Badge variant="secondary" className="rounded-full">Wissensdatenbank (RAG)</Badge>
                    <Badge variant="secondary" className="rounded-full">Schriftsatz-Recherche</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Auf einen Blick</CardTitle>
                    <CardDescription>Was KI in Ihrer Kanzlei übernimmt.</CardDescription>
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Stundenlange Akten- und Vertragsrecherche, gelöst</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Juristische Qualität braucht Zeit für das Wesentliche. Wir nehmen Ihrem Team das Suchen, Querlesen und Vorformulieren ab, damit mehr Zeit für die eigentliche Mandatsarbeit bleibt.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-border">
                  <CardHeader>
                    <CardTitle className="text-xl">Der Kanzleialltag heute</CardTitle>
                    <CardDescription>Was Anwälte und Mitarbeiter täglich bremst.</CardDescription>
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
                    <CardDescription>So arbeitet die Kanzlei ab Woche 2.</CardDescription>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Moderne KI-Lösungen für Ihre Kanzlei</h2>
                <p className="text-lg text-muted-foreground">Von der Vertragsanalyse bis zur Fristenkontrolle. Wählen Sie den Bereich, der Ihre Kanzlei am meisten entlastet.</p>
              </div>
              <Tabs defaultValue="vertragsanalyse" className="w-full">
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Gebaut für die juristische Arbeit</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Quellenbasiert, anschlussfähig und vertraulich, von der ersten Klauselprüfung bis zum fertigen Schriftsatzentwurf.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen aus der Kanzlei</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zur Kanzlei</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {related.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <a key={i} href={s.href} className="group block">
                      <Card className="h-full border-2 hover-lift group-hover:border-primary/40">
                        <CardHeader>
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${serviceLogos[s.href] ? "bg-white border border-border" : "bg-primary/10"}`}>{serviceLogos[s.href] ? <img src={`/img/logos/${serviceLogos[s.href]}.svg`} alt={s.title} className="w-7 h-7 object-contain" /> : <Icon className="w-6 h-6 text-primary" />}</div>
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
