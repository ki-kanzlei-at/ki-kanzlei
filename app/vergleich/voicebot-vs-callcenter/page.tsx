import type { Metadata } from "next";
import Script from "next/script";
import { NavigationHome } from "@/components/NavigationHome";
import { FooterModern } from "@/components/FooterModern";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Check,
  X,
  PhoneCall,
  PhoneForwarded,
  Voicemail,
  Headphones,
  Bot,
  Clock,
  Euro,
  BadgeEuro,
  PiggyBank,
  Users,
  UserCheck,
  Scale,
  ShieldCheck,
  AlertTriangle,
  ThumbsUp,
  Zap,
  Repeat,
  Building2,
  Stethoscope,
  Hotel,
  Wrench,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "KI-Voicebot vs Callcenter: der ehrliche Vergleich",
  description:
    "KI-Voicebot, klassisches Callcenter oder Anrufbeantworter? Der ehrliche Vergleich zu Kosten, 24/7 Erreichbarkeit, Wartezeit, Skalierung, Qualität und Datenschutz, mit klarer Empfehlung für KMU im DACH-Raum.",
  keywords:
    "Voicebot vs Callcenter, KI Telefonassistent vs Callcenter, Telefonservice Alternative, KI Anrufbeantworter, Voicebot Kosten, 24/7 Erreichbarkeit",
  alternates: { canonical: "https://ki-kanzlei.at/vergleich/voicebot-vs-callcenter" },
};

const faqs = [
  {
    q: "Was ist der Unterschied zwischen einem KI-Voicebot und einem Callcenter?",
    a: "Ein KI-Voicebot ist ein KI-Telefonassistent, der Anrufe selbstständig annimmt, versteht und in natürlicher Sprache beantwortet, rund um die Uhr und parallel für beliebig viele Anrufer. Ein klassisches Callcenter besteht aus menschlichen Agenten, die nacheinander Gespräche führen. Der Voicebot übernimmt wiederkehrende Anfragen sofort und ohne Warteschleife, während Menschen sich auf komplexe und emotionale Fälle konzentrieren können.",
  },
  {
    q: "Was kostet ein Voicebot im Vergleich zu einem Callcenter oder Telefonservice?",
    a: "Ein externer Telefonservice rechnet meist pro Minute oder pro Anruf ab, ein eigenes Callcenter verursacht Personal-, Schulungs- und Raumkosten. Ein KI-Voicebot läuft zu planbaren monatlichen Kosten, die kaum von der Zahl der Anrufe abhängen. Gerade bei schwankendem oder steigendem Anrufvolumen sind die Kosten pro Gespräch deutlich niedriger und vorab kalkulierbar. Das erste Analysegespräch bei uns ist kostenlos.",
  },
  {
    q: "Ist ein Voicebot wirklich rund um die Uhr erreichbar?",
    a: "Ja. Ein KI-Voicebot ist 24/7 erreichbar, an sieben Tagen die Woche, auch nachts, am Wochenende und an Feiertagen. Er kennt keine Pausen, keine Krankheit und keinen Urlaub. Ein menschliches Callcenter erreicht eine echte 24/7 Abdeckung nur über Schichtbetrieb mit hohen Personalkosten, ein Anrufbeantworter nimmt zwar immer ab, kann aber nichts beantworten oder erledigen.",
  },
  {
    q: "Verliere ich mit einem Voicebot den menschlichen Kontakt?",
    a: "Nein, im Gegenteil. Der Voicebot ist kein Ersatz für Ihr Team, sondern ein Filter davor. Routinefragen, Terminbuchungen und Qualifizierung erledigt die KI sofort. Sobald ein Anliegen komplex, sensibel oder emotional wird, übergibt der Voicebot per Eskalation sauber an einen Menschen, inklusive Gesprächskontext. So gibt es weniger Warteschleife und mehr Zeit für die Gespräche, in denen ein Mensch wirklich gebraucht wird.",
  },
  {
    q: "Wie gut versteht ein Voicebot Anrufer im Vergleich zu einem Menschen?",
    a: "Moderne Voicebots verstehen natürliche Sprache, Dialekte und auch mehrere Sprachen sehr zuverlässig und antworten in gleichbleibender Qualität, ohne schlechte Tage. Bei klar abgegrenzten Themen wie Terminen, Öffnungszeiten oder Standardanfragen ist die KI extrem stark. Bei sehr verschachtelten oder ungewöhnlichen Anliegen bleibt der Mensch überlegen, deshalb arbeiten Voicebot und Team bei uns immer zusammen.",
  },
  {
    q: "Ist ein KI-Voicebot DSGVO-konform und sicher?",
    a: "Bei uns ja. Wir betreiben Voicebots mit Datenhaltung in der EU, schließen Auftragsverarbeitungsverträge ab und kennzeichnen die KI transparent gegenüber den Anrufern, wie es der EU AI Act vorsieht. Viele klassische Telefonservices und Offshore-Callcenter verarbeiten Daten dagegen in Drittländern, was datenschutzrechtlich heikel sein kann. Datenschutz ist bei uns kein Add-on, sondern Ausgangspunkt der Lösung.",
  },
  {
    q: "Für wen lohnt sich ein Voicebot statt eines Callcenters am meisten?",
    a: "Besonders für Unternehmen mit vielen wiederkehrenden Anrufen, schwankendem Volumen oder dem Wunsch nach echter 24/7 Erreichbarkeit. Handwerksbetriebe, Arztpraxen, Hotels, Kanzleien und Dienstleister profitieren stark, weil kein Anruf und damit kein Auftrag mehr verloren geht. Faustregel: Je planbarer die Anfragen und je teurer ein verpasster Anruf, desto schneller rechnet sich der Voicebot gegenüber Callcenter und Anrufbeantworter.",
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
  headline: "KI-Voicebot vs Callcenter: der ehrliche Vergleich",
  description:
    "Vergleich von KI-Voicebot, klassischem Callcenter, Telefonservice und Anrufbeantworter zu Kosten, 24/7 Erreichbarkeit, Wartezeit, Skalierung, Qualität und Datenschutz.",
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
  mainEntityOfPage: "https://ki-kanzlei.at/vergleich/voicebot-vs-callcenter",
};

const contenders = [
  {
    icon: Bot,
    badge: "KI-gestützt",
    title: "KI-Voicebot",
    desc: "Ein KI-Telefonassistent, der Anrufe selbstständig annimmt, versteht, Termine bucht und Anfragen qualifiziert. Rund um die Uhr, ohne Warteschleife und parallel für viele Anrufer.",
    highlight: true,
  },
  {
    icon: Headphones,
    badge: "Mensch",
    title: "Callcenter / Telefonservice",
    desc: "Menschliche Agenten nehmen Anrufe entgegen, oft als ausgelagerter Telefonservice. Stark bei komplexen Gesprächen, aber begrenzt durch Personal, Schichtzeiten und Kosten pro Minute.",
    highlight: false,
  },
  {
    icon: Voicemail,
    badge: "Passiv",
    title: "Anrufbeantworter / Mailbox",
    desc: "Nimmt eine Nachricht auf, wenn niemand abnimmt. Günstig und einfach, aber er beantwortet nichts, bucht nichts und sorgt häufig dafür, dass Anrufer einfach auflegen.",
    highlight: false,
  },
];

const stats = [
  { value: "24/7", label: "Erreichbarkeit ohne Schichtbetrieb" },
  { value: "0 Sek.", label: "Warteschleife bei parallelen Anrufen" },
  { value: "bis 70%", label: "der Anrufe sind wiederkehrende Routine" },
  { value: "planbar", label: "monatliche Kosten statt Preis pro Minute" },
];

type Rating = "good" | "mid" | "bad";

const comparison: {
  feature: string;
  voicebot: { t: string; r: Rating };
  callcenter: { t: string; r: Rating };
  mailbox: { t: string; r: Rating };
}[] = [
  {
    feature: "Erreichbarkeit",
    voicebot: { t: "24/7, auch nachts, am Wochenende und an Feiertagen", r: "good" },
    callcenter: { t: "Nur zu besetzten Schichtzeiten, 24/7 sehr teuer", r: "mid" },
    mailbox: { t: "Nimmt immer ab, erledigt aber nichts", r: "bad" },
  },
  {
    feature: "Wartezeit",
    voicebot: { t: "Keine Warteschleife, viele Anrufe gleichzeitig", r: "good" },
    callcenter: { t: "Warteschleife bei Andrang, ein Gespräch pro Agent", r: "bad" },
    mailbox: { t: "Sofort, aber nur als Ansage ohne Antwort", r: "mid" },
  },
  {
    feature: "Kostenmodell",
    voicebot: { t: "Planbare monatliche Pauschale, kaum vom Volumen abhängig", r: "good" },
    callcenter: { t: "Preis pro Minute oder pro Anruf, plus Personalkosten", r: "mid" },
    mailbox: { t: "Sehr günstig, dafür hohe Kosten durch verlorene Leads", r: "mid" },
  },
  {
    feature: "Skalierung bei Lastspitzen",
    voicebot: { t: "Skaliert sofort, hunderte Anrufe parallel möglich", r: "good" },
    callcenter: { t: "Nur durch mehr Personal, mit Vorlauf und Schulung", r: "bad" },
    mailbox: { t: "Unbegrenzt Nachrichten, aber null Bearbeitung", r: "bad" },
  },
  {
    feature: "Qualität & Konsistenz",
    voicebot: { t: "Gleichbleibend, keine schlechten Tage, immer auf Stand", r: "good" },
    callcenter: { t: "Sehr gut bei guten Agenten, schwankt je nach Person", r: "mid" },
    mailbox: { t: "Keine inhaltliche Qualität, nur Aufzeichnung", r: "bad" },
  },
  {
    feature: "Komplexe & emotionale Fälle",
    voicebot: { t: "Erkennt Grenzen und eskaliert sauber an einen Menschen", r: "mid" },
    callcenter: { t: "Stärke des Menschen, Empathie und freie Lösung", r: "good" },
    mailbox: { t: "Keine Bearbeitung, Anrufer bleibt allein", r: "bad" },
  },
  {
    feature: "Termine & Aktionen",
    voicebot: { t: "Bucht Termine, qualifiziert Leads, legt Tickets an", r: "good" },
    callcenter: { t: "Möglich, abhängig von Anbindung und Schulung", r: "mid" },
    mailbox: { t: "Keine Aktionen, nur Rückrufbitte", r: "bad" },
  },
  {
    feature: "Sprachen & Dialekte",
    voicebot: { t: "Mehrsprachig, versteht Dialekte zuverlässig", r: "good" },
    callcenter: { t: "Abhängig von den verfügbaren Agenten", r: "mid" },
    mailbox: { t: "Eine feste Ansage, keine Interaktion", r: "bad" },
  },
  {
    feature: "Datenschutz (DSGVO)",
    voicebot: { t: "EU-Hosting, AV-Vertrag und KI-Kennzeichnung möglich", r: "good" },
    callcenter: { t: "Bei Offshore-Diensten oft heikel, Drittland-Transfer", r: "mid" },
    mailbox: { t: "Einfach, aber Nachrichten oft ungeschützt abgelegt", r: "mid" },
  },
];

const ratingMeta: Record<Rating, { Icon: typeof Check; cls: string }> = {
  good: { Icon: Check, cls: "text-primary" },
  mid: { Icon: AlertTriangle, cls: "text-amber-500" },
  bad: { Icon: X, cls: "text-muted-foreground/60" },
};

const costFactors = [
  {
    icon: BadgeEuro,
    title: "Telefonservice pro Minute",
    desc: "Externe Telefonservices rechnen meist pro Minute oder pro Anruf ab. Bei steigendem Volumen wachsen die Kosten ungebremst mit, gerade in Stoßzeiten und Kampagnen.",
  },
  {
    icon: Users,
    title: "Eigenes Callcenter",
    desc: "Ein internes Team verursacht Personal-, Schulungs-, Software- und Raumkosten. Echte 24/7 Abdeckung bedeutet Schichtbetrieb und damit ein Vielfaches der Grundkosten.",
  },
  {
    icon: PiggyBank,
    title: "Voicebot mit Pauschale",
    desc: "Ein KI-Voicebot läuft zu einer planbaren monatlichen Pauschale, die kaum vom Anrufvolumen abhängt. Die Kosten pro Gespräch sinken, je mehr Anrufe abgefangen werden.",
  },
  {
    icon: AlertTriangle,
    title: "Versteckte Kosten verpasster Anrufe",
    desc: "Der teuerste Posten steht auf keiner Rechnung: der verlorene Auftrag. Anrufbeantworter und besetzte Leitungen führen dazu, dass Interessenten zur Konkurrenz wechseln.",
  },
];

const voicebotWins = [
  { icon: Clock, title: "24/7 ohne Schichtbetrieb", desc: "Wenn Erreichbarkeit rund um die Uhr zählt, ohne Personal für Nacht und Wochenende zu finanzieren." },
  { icon: Repeat, title: "Viele wiederkehrende Anfragen", desc: "Termine, Öffnungszeiten, Statusfragen und Standardanliegen erledigt die KI sofort und gleichbleibend." },
  { icon: Zap, title: "Schwankendes Anrufvolumen", desc: "Lastspitzen, Kampagnen oder saisonale Wellen fängt der Voicebot ohne Warteschleife und Neueinstellungen ab." },
  { icon: Euro, title: "Planbare, niedrige Kosten", desc: "Wenn kalkulierbare monatliche Kosten wichtiger sind als ein variabler Minutenpreis." },
];

const humanWins = [
  { icon: ThumbsUp, title: "Komplexe Beratung", desc: "Verschachtelte, individuelle Anliegen, bei denen freie Lösungswege und Erfahrung gefragt sind." },
  { icon: UserCheck, title: "Emotionale Gespräche", desc: "Beschwerden, sensible Themen oder Eskalationen, in denen echte Empathie den Unterschied macht." },
  { icon: Scale, title: "Verhandlung & Entscheidung", desc: "Situationen mit Spielraum, in denen abgewogen, verhandelt und entschieden werden muss." },
  { icon: PhoneForwarded, title: "Saubere Eskalation", desc: "Der Voicebot erkennt diese Fälle und übergibt mit vollem Gesprächskontext an den richtigen Menschen." },
];

const useCases = [
  { icon: Wrench, title: "Handwerk & Dienstleistung", text: "Monteure sind auf der Baustelle, das Telefon klingelt trotzdem. Der Voicebot nimmt jeden Anruf an, erfasst das Anliegen und vereinbart Termine, statt Aufträge an die Mailbox zu verlieren." },
  { icon: Stethoscope, title: "Arztpraxen & Gesundheit", text: "Die Rezeption ist überlastet, die Leitung dauerbesetzt. Der Voicebot entlastet die Anmeldung, beantwortet Standardfragen und reicht medizinisch heikle Anliegen an das Team weiter." },
  { icon: Hotel, title: "Hotels & Gastronomie", text: "Buchungs- und Reservierungsanfragen kommen rund um die Uhr, oft abends. Der Voicebot nimmt sie sofort entgegen, auch wenn das Team gerade am Gast ist." },
  { icon: Building2, title: "KMU & Dienstleister", text: "Kleine Teams können nicht jeden Anruf abnehmen. Der Voicebot sorgt für durchgehende Erreichbarkeit und qualifiziert Anfragen, bevor sie beim richtigen Mitarbeiter landen." },
];

const related = [
  { href: "/leistungen/voicebot", icon: PhoneCall, tag: "Leistung", title: "Voicebot & KI-Telefonassistent", desc: "Wie wir Ihren KI-Voicebot aufsetzen: Anrufannahme, Terminbuchung und Eskalation, DSGVO-konform und 24/7." },
  { href: "/leistungen/ki-chatbot", icon: Bot, tag: "Leistung", title: "KI Chatbot", desc: "Dieselbe Logik für Text: ein KI-Chatbot, der Routineanfragen auf Website und Messenger sofort beantwortet." },
  { href: "/branchen/ki-loesungen-handwerker", icon: Wrench, tag: "Branche", title: "KI-Lösungen für Handwerker", desc: "Warum gerade Handwerksbetriebe von durchgehender telefonischer Erreichbarkeit am stärksten profitieren." },
];

const glanceData: [string, string][] = [
  ["Vergleich", "Voicebot vs Callcenter vs Anrufbeantworter"],
  ["Stärke Voicebot", "24/7, planbare Kosten, keine Warteschleife"],
  ["Stärke Mensch", "komplexe und emotionale Fälle"],
  ["Bestes Modell", "Voicebot plus Eskalation an das Team"],
  ["Datenschutz", "EU-Hosting, AV-Vertrag, EU AI Act"],
  ["Markt", "DACH-Raum (AT, DE, CH)"],
];

export default function Page() {
  return (
    <>
      <Script id="faq-voicebot-vs-callcenter" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-voicebot-vs-callcenter" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                    Vergleich, Voicebot vs Callcenter
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-primary">KI-Voicebot vs Callcenter</span>: der ehrliche Vergleich
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    KI-Telefonassistent, klassischer Telefonservice oder doch der Anrufbeantworter? Wir vergleichen Kosten, Erreichbarkeit, Wartezeit, Skalierung, Qualität und Datenschutz, ohne Marketing-Lärm, mit klarer Empfehlung.
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
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" /> 24/7 erreichbar</span>
                    <span className="flex items-center gap-1.5"><Euro className="w-4 h-4 text-primary" /> planbare Kosten</span>
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                  </div>
                </div>

                {/* Visual: drei Kontrahenten */}
                <Card className="relative border-2 shadow-xl shadow-primary/5 overflow-hidden">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-primary tracking-wide">DREI WEGE ANS TELEFON</div>
                        <CardTitle className="text-xl">Wer nimmt den Anruf an?</CardTitle>
                      </div>
                      <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20 text-xs shrink-0">3 Modelle</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-3">
                    {contenders.map(({ icon: Icon, badge, title, highlight }) => (
                      <div
                        key={title}
                        className={`flex items-center gap-4 rounded-xl border p-3.5 ${highlight ? "border-primary/30 bg-primary/5" : "border-border"}`}
                      >
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${highlight ? "bg-primary text-white" : "bg-primary/10 text-primary"}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm leading-tight">{title}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{badge}</div>
                        </div>
                        {highlight && <Badge variant="secondary" className="rounded-full text-xs shrink-0">Empfehlung</Badge>}
                      </div>
                    ))}
                    <div className="mt-1 flex items-center justify-between rounded-xl bg-primary/5 border border-primary/20 px-4 py-3">
                      <span className="text-sm font-medium text-foreground">Fazit vorweg</span>
                      <span className="text-sm text-primary font-semibold">Voicebot plus Mensch bei Bedarf</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* DIE DREI MODELLE */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Worum es geht</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Voicebot, Callcenter oder Anrufbeantworter?</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Jeder verpasste Anruf ist ein potenziell verlorener Auftrag. Die Frage ist nur, wer abnimmt, wenn das eigene Team nicht kann: ein <strong className="text-foreground">KI-Voicebot</strong>, ein <strong className="text-foreground">klassisches Callcenter</strong> beziehungsweise ein externer Telefonservice, oder schlicht der <strong className="text-foreground">Anrufbeantworter</strong>.
                    </p>
                    <p>
                      Alle drei haben ihre Berechtigung, aber sehr unterschiedliche Stärken. Der Anrufbeantworter ist günstig, erledigt aber nichts. Das Callcenter ist stark bei komplexen Gesprächen, aber teuer und in der Erreichbarkeit begrenzt. Der Voicebot ist rund um die Uhr da, skaliert sofort und arbeitet zu planbaren Kosten.
                    </p>
                    <p>
                      Wichtig: Der ehrliche Vergleich endet selten mit einem klaren Entweder-oder. Die beste Lösung kombiniert den Voicebot für alles Wiederkehrende mit einer sauberen Eskalation an Menschen für die Fälle, in denen es wirklich auf Erfahrung und Empathie ankommt.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Erreichbarkeit</Badge>
                    <Badge variant="secondary" className="rounded-full">Kosten</Badge>
                    <Badge variant="secondary" className="rounded-full">Wartezeit</Badge>
                    <Badge variant="secondary" className="rounded-full">Skalierung</Badge>
                    <Badge variant="secondary" className="rounded-full">Datenschutz</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Der Vergleich auf einen Blick</CardTitle>
                    <CardDescription>Worauf es bei der Wahl wirklich ankommt.</CardDescription>
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

              <div className="grid md:grid-cols-3 gap-4 mt-12">
                {contenders.map(({ icon: Icon, badge, title, desc, highlight }) => (
                  <Card key={title} className={`border-2 ${highlight ? "border-primary/30 bg-primary/5" : ""}`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <Badge variant="secondary" className="rounded-full text-xs">{badge}</Badge>
                      </div>
                      <CardTitle className="text-lg">{title}</CardTitle>
                    </CardHeader>
                    <CardContent><p className="text-muted-foreground leading-relaxed text-sm">{desc}</p></CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* STATS */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-2 lg:grid-cols-4 border-2 border-border rounded-2xl overflow-hidden bg-card">
                {stats.map((s, i) => (
                  <div key={i} className="p-7 md:p-8 text-center border-b lg:border-b-0 border-border [&:nth-child(odd)]:border-r lg:[&:not(:last-child)]:border-r">
                    <div className="text-3xl md:text-4xl font-bold text-primary">{s.value}</div>
                    <div className="text-sm text-muted-foreground mt-2 leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ZENTRALE VERGLEICHS-TABLE */}
          <section id="vergleich" className="py-14 md:py-20 scroll-mt-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Der direkte Vergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Voicebot vs Callcenter vs Anrufbeantworter</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Neun Kriterien, drei Modelle, eine ehrliche Bewertung. Grün heißt klare Stärke, Gelb heißt mit Einschränkung, Grau heißt klare Schwäche.</p>
              </div>
              <Card className="border-2 overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[20%] font-bold text-foreground">Kriterium</TableHead>
                      <TableHead className="text-primary font-bold">KI-Voicebot</TableHead>
                      <TableHead className="text-muted-foreground">Callcenter / Telefonservice</TableHead>
                      <TableHead className="text-muted-foreground">Anrufbeantworter</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparison.map((r, i) => {
                      const V = ratingMeta[r.voicebot.r];
                      const C = ratingMeta[r.callcenter.r];
                      const M = ratingMeta[r.mailbox.r];
                      return (
                        <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                          <TableCell className="font-medium align-top">{r.feature}</TableCell>
                          <TableCell className="text-sm text-primary font-medium align-top">
                            <span className="inline-flex items-start gap-1.5"><V.Icon className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${V.cls}`} />{r.voicebot.t}</span>
                          </TableCell>
                          <TableCell className="text-muted-foreground text-sm align-top">
                            <span className="inline-flex items-start gap-1.5"><C.Icon className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${C.cls}`} />{r.callcenter.t}</span>
                          </TableCell>
                          <TableCell className="text-muted-foreground text-sm align-top">
                            <span className="inline-flex items-start gap-1.5"><M.Icon className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${M.cls}`} />{r.mailbox.t}</span>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </section>

          {/* KOSTEN */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Kosten ehrlich gerechnet</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Was kostet die Erreichbarkeit wirklich?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Der Minutenpreis ist nur die halbe Wahrheit. Entscheidend ist, was ein Gespräch wirklich kostet, inklusive der Anrufe, die niemand annimmt.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {costFactors.map(({ icon: Icon, title, desc }, i) => (
                  <Card key={i} className="hover-lift border-2">
                    <CardHeader className="pb-3">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-base leading-tight">{title}</CardTitle>
                    </CardHeader>
                    <CardContent><p className="text-muted-foreground leading-relaxed text-sm">{desc}</p></CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* WANN WAS: Voicebot vs Mensch */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Wann was</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Wann der Voicebot, wann der Mensch?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Es ist kein Wettkampf, sondern eine Arbeitsteilung. So verteilen sich die Anrufe sinnvoll.</p>
              </div>
              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="border-2 border-primary/30 bg-primary/5">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-1">
                      <div className="w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center"><Bot className="w-5 h-5" /></div>
                      <CardTitle className="text-xl">Der Voicebot übernimmt</CardTitle>
                    </div>
                    <CardDescription>Alles Wiederkehrende, sofort und rund um die Uhr.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {voicebotWins.map(({ icon: Icon, title, desc }) => (
                      <div key={title} className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><Icon className="w-4 h-4 text-primary" /></div>
                        <div>
                          <div className="font-semibold text-sm">{title}</div>
                          <div className="text-sm text-muted-foreground leading-relaxed">{desc}</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-1">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center"><Headphones className="w-5 h-5" /></div>
                      <CardTitle className="text-xl">Der Mensch übernimmt</CardTitle>
                    </div>
                    <CardDescription>Die Fälle, in denen Erfahrung und Empathie zählen.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {humanWins.map(({ icon: Icon, title, desc }) => (
                      <div key={title} className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><Icon className="w-4 h-4 text-primary" /></div>
                        <div>
                          <div className="font-semibold text-sm">{title}</div>
                          <div className="text-sm text-muted-foreground leading-relaxed">{desc}</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* FAZIT */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="pt-8 pb-8">
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Fazit</Badge>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Unser ehrliches Fazit</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Für <strong className="text-foreground">24/7 Erreichbarkeit, planbare Kosten und null Warteschleife</strong> ist der KI-Voicebot dem klassischen Callcenter und erst recht dem Anrufbeantworter überlegen. Er fängt zuverlässig alle wiederkehrenden Anfragen ab, skaliert ohne Neueinstellungen und sorgt dafür, dass kein Anruf und damit kein Auftrag mehr verloren geht.
                    </p>
                    <p>
                      Für <strong className="text-foreground">komplexe und emotionale Fälle</strong> bleibt der Mensch unersetzlich. Genau deshalb empfehlen wir keine Entweder-oder-Lösung, sondern den Voicebot als ersten Kontakt mit sauberer <strong className="text-foreground">Eskalation</strong> an Ihr Team. So bekommen Anrufer sofort eine Antwort, und Ihre Mitarbeiter gewinnen Zeit für die Gespräche, die wirklich zählen.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Erstgespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="/leistungen/voicebot">Voicebot Leistung ansehen</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* BRANCHEN / USE CASES */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">In der Praxis</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Wo der Voicebot das Callcenter ersetzt</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Branchen, in denen ein verpasster Anruf besonders teuer ist und der Voicebot deshalb den größten Hebel hat.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {useCases.map(({ icon: Icon, title, text }, i) => (
                  <Card key={i} className="hover-lift border-2">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><Icon className="w-5 h-5 text-primary" /></div>
                        <CardTitle className="text-lg">{title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent><p className="text-muted-foreground leading-relaxed text-sm">{text}</p></CardContent>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQ: Voicebot vs Callcenter</h2>
                <p className="text-lg text-muted-foreground">Die Fragen, die vor fast jeder Entscheidung fallen, ehrlich beantwortet.</p>
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

          {/* VERWANDTE SEITEN */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Weiterlesen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Passend zum Thema</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Vom Vergleich zur Umsetzung: So holen Sie die telefonische Erreichbarkeit in Ihren Betrieb.</p>
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
                          <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">Mehr erfahren <ArrowRight className="w-4 h-4" /></span>
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
