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
import { Landmark, ShieldCheck, Server, MapPin, MessageSquare, Brain, Languages, FileText, Accessibility, Network, PhoneCall, Users, Check, X } from "lucide-react";
import { serviceLogos } from "@/lib/serviceLogos";

export const metadata: Metadata = {
  title: "E-Government & KI für die öffentliche Verwaltung",
  description:
    "Bürger-Chatbot und KI-Wissensdatenbank für die öffentliche Verwaltung: Anfragen sofort mit Quelle beantworten, mehrsprachig, barrierearm und DSGVO-konform.",
  keywords:
    "KI Verwaltung, E-Government, KI Behörde, Bürger-Chatbot, KI öffentliche Verwaltung, Verwaltungsdigitalisierung, KI Amt, barrierefreie KI",
  alternates: { canonical: "https://ki-kanzlei.at/branchen/ki-loesungen-oeffentliche-einrichtungen" },
};

const faqs = [
  {
    q: "Was ist ein Bürger-Chatbot und wie entlastet er unsere Verwaltung?",
    a: "Ein Bürger-Chatbot ist ein digitaler Assistent auf Ihrer Website oder im Amtsportal, der Anfragen von Bürgerinnen und Bürgern rund um die Uhr beantwortet, etwa zu Meldezettel, Förderungen, Öffnungszeiten, Fristen, Gebühren und benötigten Unterlagen. Er beantwortet den Großteil der wiederkehrenden Standardfragen sofort und nennt zu jeder Auskunft die zuständige Stelle. So sinkt der Andrang am Parteienverkehr und am Bürgertelefon spürbar.",
  },
  {
    q: "Woher kennt der Chatbot die richtigen Antworten und bleibt er aktuell?",
    a: "Die Antworten stammen ausschließlich aus Ihrer eigenen KI-Wissensdatenbank: aus geprüften Verordnungen, Satzungen, Amtsblättern, Merkblättern und internen Leitfäden. Über das RAG-Verfahren gibt die KI zu jeder Antwort die Quelle und einen Amtsverweis an, statt frei zu formulieren. Ändert sich die Rechtslage, aktualisieren Sie die Wissensbasis zentral und alle Auskünfte sind sofort wieder korrekt.",
  },
  {
    q: "Kann der Bürger-Chatbot mehrsprachig antworten?",
    a: "Ja. Der Assistent erkennt die Sprache der Anfrage automatisch und antwortet in der jeweiligen Sprache, etwa Deutsch, Englisch, Türkisch oder BKS. Dieselbe geprüfte Wissensbasis liefert die Inhalte, lediglich die Ausgabe wird übersetzt. So erreichen Sie auch nicht deutschsprachige Bürgerinnen und Bürger, ohne zusätzliche Übersetzungsstellen.",
  },
  {
    q: "Ist die Lösung barrierefrei und in einfacher Sprache nutzbar?",
    a: "Barrierefreiheit ist von Anfang an eingeplant. Die Oberfläche orientiert sich an den WCAG-Kriterien, ist mit Screenreadern und Tastatur bedienbar und kontrastreich gestaltet. Antworten lassen sich zusätzlich in leichter Sprache ausgeben. So entspricht der Bürgerservice den Anforderungen an digitale Zugänglichkeit für die öffentliche Hand.",
  },
  {
    q: "Wie wird der Datenschutz bei Bürgerdaten gewährleistet?",
    a: "Wir setzen ausschließlich auf DSGVO-konforme Infrastruktur in Österreich und der EU, mit voller Datensouveränität. Personenbezogene Daten werden verschlüsselt und nur für den jeweiligen Behördenzweck verarbeitet, nichts fließt zu Anbietern außerhalb der EU ab. Alles wird revisionssicher protokolliert und per Auftragsverarbeitungsvertrag abgesichert. Auf Wunsch ist auch ein vollständig lokaler Betrieb in Ihrem Rechenzentrum möglich.",
  },
  {
    q: "Lässt sich die KI an unsere bestehenden Systeme anbinden?",
    a: "Ja. Wir binden den Chatbot und die Wissensdatenbank über Schnittstellen an Ihre Website, das Amtsportal, ELAK-Lösungen und gängige Fachverfahren an. Formular- und Antragsstrecken lassen sich über n8n automatisieren, sodass aus einer Bürgeranfrage direkt der passende Vorgang im Fachverfahren entsteht. Es entsteht keine Insellösung, sondern eine Ergänzung Ihrer bestehenden Verwaltungslandschaft.",
  },
  {
    q: "Kann die KI auch telefonische Anfragen am Bürgertelefon entgegennehmen?",
    a: "Ja, das ist die sprachgeführte Erweiterung. Über unsere Voicebot-Plattform fonio.ai nimmt ein KI-Bürgertelefon Anrufe entgegen, beantwortet dieselben Standardfragen wie der Chatbot und entlastet so die Amtsleitungen. Sensible oder komplexe Anliegen werden mit allen bereits erfassten Informationen sauber an die zuständige Sachbearbeitung übergeben. Die Entscheidung im Einzelfall bleibt immer beim Menschen.",
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
  name: "KI Lösungen für die öffentliche Verwaltung",
  serviceType: "Bürger-Chatbot, KI-Wissensdatenbank, E-Government",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description: "KI Lösungen für Städte, Gemeinden und Behörden im DACH-Raum: Bürger-Chatbot und KI-Wissensdatenbank mit Antworten samt Quelle, mehrsprachig und barrierearm. Dazu Formular-Assistent, n8n Prozess-Automatisierung und KI-Bürgertelefon. DSGVO-konform, EU-gehostet und mit voller Datensouveränität.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const problems = [
  "Tägliche Flut gleicher Bürgeranfragen zu Meldezettel, Förderungen, Fristen und benötigten Unterlagen",
  "Auskünfte fallen je nach Sachbearbeiter unterschiedlich aus und sind bei neuer Rechtslage schnell veraltet",
  "Das Amt ist nur zu Parteienverkehrszeiten erreichbar, abends und am Wochenende bleibt niemand für Fragen da",
  "Anfragen kommen mehrsprachig, nicht jede Auskunftsstelle kann darauf verlässlich eingehen",
  "Das Wissen steckt verstreut in Verordnungen, Merkblättern und in den Köpfen einzelner Mitarbeiter",
  "Fachkräftemangel im Amt, offene Stellen am Bürgerservice lassen sich kaum noch besetzen",
];

const solutions = [
  "Der Bürger-Chatbot beantwortet Standardanfragen sofort, jede Antwort mit Quelle und Amtsverweis",
  "Die KI-Wissensdatenbank zieht Auskünfte aus geprüften Verordnungen und Merkblättern, stets auf aktuellem Stand",
  "Bürger erhalten rund um die Uhr Auskunft, auch außerhalb der Parteienverkehrszeiten",
  "Antworten erfolgen automatisch mehrsprachig und auf Wunsch in einfacher, barrierearmer Sprache",
  "Das Wissen liegt zentral gebündelt, jede Auskunft ist konsistent und nachvollziehbar belegt",
  "DSGVO-konform mit EU-Hosting und Datensouveränität, sensible Fälle gehen an die zuständige Sachbearbeitung",
];

const useCases = [
  {
    value: "chatbot",
    label: "Bürger-Chatbot",
    icon: MessageSquare,
    head: "Bürger-Chatbot mit Quellenangabe",
    text: "Der digitale Assistent auf Website und Amtsportal beantwortet Fragen zu Meldezettel, Förderungen, Gebühren, Fristen und Zuständigkeiten sofort. Jede Antwort nennt die Quelle und den zuständigen Amtsverweis, ist mehrsprachig und barrierearm gestaltet. Komplexe Einzelfälle leitet der Chatbot an die richtige Stelle weiter.",
  },
  {
    value: "wissen",
    label: "Wissensdatenbank",
    icon: Brain,
    head: "KI-Wissensdatenbank (RAG)",
    text: "Amts- und Verfahrenswissen aus Gesetzen, Verordnungen, Satzungen, Amtsblättern und internen Leitfäden wird in eine durchsuchbare Wissensbasis überführt. Über das RAG-Verfahren liefert die KI in Sekunden präzise Auskünfte mit Quellenangabe, statt frei zu formulieren. Aktualisieren Sie ein Dokument, ist jede Antwort sofort wieder korrekt.",
  },
  {
    value: "mehrsprachig",
    label: "Mehrsprachig",
    icon: Languages,
    head: "Mehrsprachige Bürgerkommunikation",
    text: "Die KI erkennt die Sprache der Anfrage und antwortet automatisch in Deutsch, Englisch, Türkisch, BKS und weiteren Sprachen, auf Basis derselben geprüften Wissensbasis. Auch Formulare, Bescheide und Merkblätter lassen sich auf Knopfdruck übersetzen. So erreichen Sie alle Bürgerinnen und Bürger, ohne zusätzliche Übersetzungsstellen.",
  },
  {
    value: "formulare",
    label: "Formular-Assistent",
    icon: FileText,
    head: "Formular-Assistent und Prozess-Automatisierung",
    text: "Der Assistent führt Bürger Schritt für Schritt durch Anträge, prüft Eingaben auf Vollständigkeit und füllt Formulare vor. Über n8n verbinden wir die Antragsstrecke direkt mit Ihren Fachverfahren, sodass aus der Anfrage automatisch der passende Vorgang entsteht, papierlos und nachvollziehbar protokolliert.",
  },
  {
    value: "buergertelefon",
    label: "Bürgertelefon",
    icon: PhoneCall,
    head: "KI-Bürgertelefon zur Entlastung",
    text: "Als sprachgeführte Erweiterung nimmt ein KI-Bürgertelefon über die Plattform fonio.ai Anrufe entgegen und beantwortet dieselben Standardfragen wie der Chatbot. Das entlastet die Amtsleitungen und beendet Besetztzeichen und Warteschleifen. Komplexe Anliegen werden mit allen erfassten Daten an die Sachbearbeitung übergeben.",
  },
  {
    value: "intern",
    label: "Mitarbeiter-KI",
    icon: Users,
    head: "Wissensassistent für die Sachbearbeitung",
    text: "Auch intern beschleunigt die KI-Wissensdatenbank die Arbeit: Sachbearbeiter stellen eine Frage und erhalten sofort die einschlägige Verordnung, Frist oder Vorgehensweise samt Fundstelle, statt lange in Aktenordnern und Merkblättern zu suchen. Das sorgt für einheitliche, rechtssichere Auskünfte im ganzen Amt.",
  },
];

const features = [
  { icon: MessageSquare, title: "Bürger-Chatbot mit Quellenangabe", text: "Der digitale Assistent beantwortet Bürgeranfragen sofort und rund um die Uhr, jede Auskunft mit Quelle und Amtsverweis. Mehrsprachig, barrierearm und auf Wunsch in leichter Sprache, direkt auf Ihrer Website und im Amtsportal." },
  { icon: Brain, title: "KI-Wissensdatenbank (RAG)", text: "Amts- und Verfahrenswissen aus Verordnungen, Satzungen und Leitfäden ist sekundenschnell abrufbar, mit präziser Fundstelle und immer auf aktuellem Stand." },
  { icon: Languages, title: "Mehrsprachig und einfache Sprache", text: "Antworten und Übersetzungen in Deutsch, Englisch, Türkisch, BKS und mehr, auf Basis derselben geprüften Inhalte, auf Wunsch in leichter Sprache." },
  { icon: Accessibility, title: "Barrierearm nach WCAG", text: "Bedienbar mit Screenreader und Tastatur, kontrastreich und nach den WCAG-Kriterien gestaltet, passend zu den Vorgaben für digitale Zugänglichkeit der öffentlichen Hand." },
  { icon: ShieldCheck, title: "DSGVO, EU-Hosting und Datensouveränität", text: "Alle Daten werden in Österreich und der EU verschlüsselt verarbeitet, revisionssicher protokolliert und per Auftragsverarbeitungsvertrag abgesichert. Lokaler Betrieb möglich." },
  { icon: Network, title: "E-Government Integration", text: "Anbindung an Website, Amtsportal, ELAK und Fachverfahren über Schnittstellen, mit n8n-Automatisierung für Formulare und Anträge, ohne Bruch im laufenden Betrieb." },
];

const stats: [string, string][] = [
  ["70%", "Bürgeranfragen sofort automatisch beantwortet"],
  ["24/7", "Auskunft für Bürger, auch außerhalb der Amtszeiten"],
  ["30+", "Sprachen für Antwort und Übersetzung"],
  ["100%", "DSGVO-konform, gehostet in Österreich und der EU"],
];

const blick: [string, string][] = [
  ["Primärlösung", "Bürger-Chatbot + Wissensdatenbank"],
  ["Antworten", "sofort, mit Quelle und Amtsverweis"],
  ["Sprachen", "mehrsprachig, leichte Sprache"],
  ["Zugänglichkeit", "barrierearm nach WCAG"],
  ["Datenschutz", "DSGVO, EU-Hosting, Datensouveränität"],
  ["Anbindung", "E-Government, ELAK, Fachverfahren"],
];

const related = [
  { href: "/leistungen/chatgpt-alternative", icon: MessageSquare, title: "ChatGPT Alternative", desc: "Der behördentaugliche Bürger-Chatbot: DSGVO-konforme KI mit EU-Hosting statt Datenabfluss, Antworten nur aus Ihrer geprüften Wissensbasis." },
  { href: "/leistungen/ki-wissensdatenbank", icon: Brain, title: "KI Wissensdatenbank", desc: "Amts- und Verfahrenswissen aus Verordnungen, Satzungen und Merkblättern, sekundenschnell abrufbar und mit Quellenangabe per RAG." },
  { href: "/leistungen/n8n-automatisierung", icon: Network, title: "n8n Automatisierung", desc: "Verbindet Formular- und Antragsstrecken automatisch mit Ihren Fachverfahren, sodass aus der Bürgeranfrage der passende Vorgang entsteht." },
];

type ChatTurn = { who: "Bürger" | "Assistent"; text: string; source?: string };

const chat: ChatTurn[] = [
  { who: "Bürger", text: "Welche Unterlagen brauche ich für den Meldezettel?" },
  {
    who: "Assistent",
    text: "Für die Wohnsitz-Anmeldung benötigen Sie das ausgefüllte Meldeformular und einen amtlichen Lichtbildausweis. Sie können den Meldezettel auch online einreichen.",
    source: "Quelle: Meldegesetz 1991, § 3, Bürgerservice",
  },
];

export default function Page() {
  return (
    <>
      <Script id="faq-verwaltung" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-verwaltung" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <style>{`
        @keyframes egPing { 0% { transform: scale(.9); opacity:.5; } 70%,100% { transform: scale(1.6); opacity:0; } }
        .eg-ping { animation: egPing 2s ease-out infinite; }
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
                    KI für die öffentliche Verwaltung
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Bürger-Chatbot und <span className="text-primary">Wissensdatenbank</span> für Städte und Gemeinden
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Beantworten Sie Bürgeranfragen sofort und rund um die Uhr: Der KI-Bürger-Chatbot greift auf Ihr geprüftes Amts- und Verfahrenswissen zu, antwortet mit Quelle und Amtsverweis, mehrsprachig und barrierearm. DSGVO-konform, mit Datenhaltung in Österreich.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Analysegespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="/leistungen/chatgpt-alternative">Bürger-Chatbot entdecken</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-primary" /> EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Bürger-Chatbot live card */}
                <Card className="relative border-2 shadow-xl shadow-primary/5">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                          <MessageSquare className="w-5 h-5 text-primary" />
                        </div>
                        <span className="absolute inset-0 rounded-full border-2 border-primary/40 eg-ping" aria-hidden />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">Bürger-Assistent, Stadtportal</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> Online, antwortet sofort
                        </div>
                      </div>
                      <span className="ml-auto text-[10px] uppercase tracking-wider text-muted-foreground font-medium">EU-Server</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-3">
                    {chat.map((c, i) => (
                      <div key={i} className={c.who === "Assistent" ? "flex flex-col items-end" : "flex flex-col items-start"}>
                        <div className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-snug ${c.who === "Assistent" ? "bg-primary text-white rounded-br-sm" : "bg-muted text-foreground rounded-bl-sm"}`}>
                          {c.text}
                        </div>
                        {c.source && (
                          <span className="mt-1.5 inline-flex items-center gap-1.5 text-[11px] text-muted-foreground">
                            <FileText className="w-3.5 h-3.5 text-primary" /> {c.source}
                          </span>
                        )}
                      </div>
                    ))}
                    <div className="flex items-center justify-between pt-2 border-t border-border text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5"><Languages className="w-4 h-4 text-primary" /> DE, EN, TR, BKS</span>
                      <span className="flex items-center gap-1.5"><Accessibility className="w-4 h-4 text-primary" /> Leichte Sprache</span>
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

          {/* WAS LEISTET KI IN DER VERWALTUNG */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">KI im Amt</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was KI in der öffentlichen Verwaltung wirklich leistet</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>KI in der Verwaltung bedeutet nicht, Entscheidungen zu automatisieren. Sie entlastet die Auskunft und den Service: das <strong className="text-foreground">Beantworten wiederkehrender Bürgeranfragen</strong>, das Durchsuchen von Verordnungen und das Ausfüllen von Formularen.</p>
                    <p>Im Zentrum steht der <strong className="text-foreground">Bürger-Chatbot mit KI-Wissensdatenbank</strong>. Er greift auf Ihr geprüftes Amts- und Verfahrenswissen zu, beantwortet Fragen zu Meldezettel, Förderungen und Fristen sofort und nennt zu jeder Auskunft die Quelle und den zuständigen Amtsverweis, mehrsprachig und barrierearm.</p>
                    <p>Für Städte, Gemeinden und Behörden im DACH-Raum ist dabei eines entscheidend: <strong className="text-foreground">Datenschutz und Datensouveränität</strong>. Wir hosten alle Daten in Österreich und der EU, arbeiten DSGVO-konform und revisionssicher und kennzeichnen den KI-Einsatz transparent.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Bürger-Chatbot</Badge>
                    <Badge variant="secondary" className="rounded-full">KI-Wissensdatenbank</Badge>
                    <Badge variant="secondary" className="rounded-full">E-Government</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Auf einen Blick</CardTitle>
                    <CardDescription>Was die KI in Ihrem Amt übernimmt.</CardDescription>
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Der Bürokratiestau am Bürgerservice, gelöst</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Bürokratie und knappe Ressourcen bremsen den Verwaltungsalltag. Wir nehmen Ihrem Team die repetitive Auskunft ab, damit mehr Zeit für die Fälle bleibt, die echtes Fachwissen erfordern.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-border">
                  <CardHeader>
                    <CardTitle className="text-xl">Der Verwaltungsalltag heute</CardTitle>
                    <CardDescription>Was Bürgerservice und Personal täglich bremst.</CardDescription>
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
                    <CardDescription>So sieht der Bürgerservice ab Woche 2 aus.</CardDescription>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Moderne KI-Lösungen für Ihre Verwaltung</h2>
                <p className="text-lg text-muted-foreground">Weniger Andrang am Schalter, schnellere Auskunft für Bürger. Wählen Sie den Bereich, der Ihr Amt am meisten entlastet.</p>
              </div>
              <Tabs defaultValue="chatbot" className="w-full">
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Gebaut für den Verwaltungsalltag</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Sicher, anschlussfähig und spürbar entlastend, von der ersten Bürgeranfrage bis zur belegten Auskunft.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zur Verwaltungs-KI</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zur öffentlichen Verwaltung</h2>
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
