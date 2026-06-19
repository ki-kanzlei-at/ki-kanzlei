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
  Shield,
  ShieldCheck,
  Lock,
  Server,
  Database,
  Globe,
  Check,
  X,
  Scale,
  Stethoscope,
  Calculator,
  Landmark,
  Building2,
  Search,
  FileText,
  Rocket,
  Network,
  Cloud,
  MapPin,
  Settings,
  Euro,
  Plug,
  KeyRound,
  Gauge,
  Zap,
  Brain,
  MonitorSmartphone,
  FileWarning,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ChatGPT Alternative DSGVO-konform für Unternehmen",
  description:
    "DSGVO-konforme ChatGPT Alternative für Unternehmen im DACH-Raum: Private KI mit Open-Source-Modellen wie Llama 4, Mistral und Qwen. EU-Hosting oder On-Premise, keine Datenweitergabe an US-Anbieter, gleiche Qualität wie ChatGPT. Jetzt kostenlos beraten lassen.",
  keywords:
    "ChatGPT Alternative, ChatGPT Alternative Unternehmen, ChatGPT Alternative DSGVO, DSGVO konforme KI, Open Source KI Alternative, lokale KI Alternative, Private KI, KI ohne Cloud, EU KI, Llama Alternative ChatGPT, Mistral, Qwen, Private AI Österreich, ChatGPT Ersatz Firma, ChatGPT Alternative Deutschland, ChatGPT Alternative Schweiz, ChatGPT Alternative DACH, DSGVO konforme KI Deutschland, Private AI DACH, KI Deutschland, KI Schweiz, KI DACH, Deutschland, Schweiz, DACH",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/chatgpt-alternative" },
};

const faqs = [
  {
    q: "Was ist die beste ChatGPT Alternative für Unternehmen?",
    a: "Die beste ChatGPT Alternative für Unternehmen ist eine Private-KI-Lösung mit modernen Open-Source-Modellen wie Llama 4 (Meta), Mistral Large oder Qwen. Diese Modelle liefern ChatGPT-vergleichbare Qualität, sind aber vollständig DSGVO-konform und laufen auf eigener Infrastruktur oder EU-Servern, ohne dass auch nur ein Byte an US-Anbieter geht. Welches Modell für Sie das beste ist, hängt von Ihren Aufgaben, Ihren Daten und Ihrem Budget ab. Genau das klären wir in der kostenlosen Erstanalyse.",
  },
  {
    q: "Warum brauche ich überhaupt eine ChatGPT Alternative?",
    a: "ChatGPT von OpenAI verarbeitet Ihre Eingaben auf Servern in den USA. Für Unternehmen mit sensiblen Daten ist das ein echtes Problem: Es drohen DSGVO-Risiken, die Verletzung von Berufsgeheimnissen bei Anwälten, Ärzten und Steuerberatern sowie der Abfluss von Geschäfts- und Kundendaten in ein Drittland. Eine europäische ChatGPT Alternative ohne Datenweitergabe löst dieses Problem grundlegend, statt es nur mit Nutzungsregeln zu kaschieren.",
  },
  {
    q: "Welche Open-Source-KI-Modelle ersetzen ChatGPT wirklich?",
    a: "Moderne Open-Source-Modelle wie Llama 4 (Meta), Mistral Large (Frankreich), Qwen 2.5 (Alibaba) und Command R+ (Cohere) erreichen heute das Niveau von ChatGPT-4o bei Texten, Analysen und Dokumentenverarbeitung. Für den DACH-Raum gibt es zusätzlich europäische Modelle wie Teuken, die gezielt auf alle EU-Sprachen trainiert wurden. Alle lassen sich vollständig lokal oder auf EU-Servern betreiben, als echte DSGVO-konforme ChatGPT Alternative.",
  },
  {
    q: "Ist eine ChatGPT Alternative günstiger als ChatGPT?",
    a: "Langfristig in der Regel ja. Open-Source-Modelle verursachen keine nutzungsabhängigen API-Kosten pro Token wie ChatGPT, sondern planbare Fixkosten für Hosting und Betrieb. Bei hohem oder wachsendem Nutzungsvolumen amortisiert sich eine Private-KI-Lösung oft schon nach wenigen Monaten. Hinzu kommt der eingesparte Aufwand für Compliance, AVV-Management und das vermiedene Risiko teurer Datenschutzverletzungen.",
  },
  {
    q: "Kann ich ChatGPT in meinem Unternehmen einfach weiter nutzen?",
    a: "Nur sehr eingeschränkt. ChatGPT darf nicht für sensible Unternehmens-, Kunden- oder Patientendaten verwendet werden. Rechtsanwälte, Ärzte, Notare und Steuerberater unterliegen einem strengen Berufsgeheimnis, das die Weitergabe an externe KI-Dienste praktisch ausschließt. In diesen Fällen ist eine Private KI oder eine EU-konforme ChatGPT Alternative nicht nur empfehlenswert, sondern faktisch Pflicht.",
  },
  {
    q: "Ist eine ChatGPT Alternative wirklich DSGVO-konform?",
    a: "Ja, bei korrekter Umsetzung vollständig. Wir hosten Ihre KI in Österreich oder der EU beziehungsweise direkt in Ihrem Haus (On-Premise). Es gibt keinen Drittlandtransfer, kein Training mit Ihren Daten und keine Weitergabe an Subdienstleister. Wir dokumentieren die Datenverarbeitung lückenlos, sodass Sie gegenüber Datenschutzbehörde, Mandanten oder Patienten jederzeit nachweisen können, dass alles regelkonform läuft.",
  },
  {
    q: "Erreichen Open-Source-Modelle wirklich die Qualität von ChatGPT?",
    a: "Für die meisten Geschäftsaufgaben ja. Bei E-Mails, Zusammenfassungen, Recherche, Übersetzung, Vertrags- und Dokumentenanalyse liefern Llama 4 und Mistral Ergebnisse auf ChatGPT-4o-Niveau. In Blindtests merken Mitarbeiter meist keinen Unterschied. Wir wählen für jeden Anwendungsfall das passende Modell und können es per Fine-Tuning und RAG auf Ihre Fachsprache und Ihre Dokumente zuschneiden, was generisches ChatGPT gar nicht bietet.",
  },
  {
    q: "Worin unterscheidet sich das von ChatGPT Enterprise?",
    a: "ChatGPT Enterprise verspricht mehr Datenschutz, bleibt aber ein proprietärer US-Dienst: Ihre Daten werden weiterhin bei OpenAI verarbeitet, Sie sind an einen einzigen Anbieter gebunden und zahlen pro Sitz beziehungsweise pro Nutzung. Eine Private KI läuft dagegen auf Ihrer eigenen oder einer EU-Infrastruktur, das Modell gehört dem Open-Source-Ökosystem, ist frei wechselbar und voll anpassbar. Datensouveränität statt Vertrauensversprechen.",
  },
  {
    q: "Wie lange dauert die Einführung einer ChatGPT Alternative?",
    a: "In der Regel zwei bis vier Wochen. Nach der kostenlosen Erstanalyse erstellen wir ein KI-Assessment mit Modell-Empfehlung, deployen das Modell auf einem EU-Server oder Ihrer Hardware, richten ein Chat-Interface ein und binden es in Ihre Tools wie Teams, SharePoint oder Browser ein. Danach folgen eine kurze Schulung und der Go-Live. Den laufenden Betrieb betreuen wir DSGVO-konform weiter.",
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
  name: "DSGVO-konforme ChatGPT Alternative",
  serviceType: "ChatGPT Alternative, Private KI, DSGVO-konforme KI",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "DSGVO-konforme ChatGPT Alternative für Unternehmen im DACH-Raum: Private KI mit Open-Source-Modellen wie Llama 4, Mistral und Qwen, EU-Hosting oder On-Premise, ohne Datenweitergabe an US-Anbieter.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const heroRisks = [
  "Eingaben landen auf US-Servern",
  "DSGVO- und Berufsrechts-Risiko",
  "Mögliche Trainingsnutzung Ihrer Daten",
  "Abhängig von einem US-Anbieter",
];

const heroSolution = [
  "Daten bleiben in der EU oder bei Ihnen",
  "Voll DSGVO- und berufsrechtskonform",
  "Kein Training, keine Weitergabe",
  "Open Source, jederzeit wechselbar",
];

const trustChips = [
  { icon: ShieldCheck, label: "DSGVO-konform" },
  { icon: Scale, label: "EU AI Act ready" },
  { icon: MapPin, label: "Hosting in Österreich/EU" },
  { icon: FileText, label: "Vollständiger AVV" },
  { icon: Server, label: "On-Premise möglich" },
  { icon: Lock, label: "Keine US-Cloud" },
];

const solutionFacts = [
  { label: "Modelle", value: "Llama 4, Mistral & Qwen auf ChatGPT-Niveau" },
  { label: "Hosting", value: "On-Premise oder Server in Österreich/EU" },
  { label: "Datenschutz", value: "Kein Training, keine Weitergabe, kein Drittland" },
  { label: "Bindung", value: "Open Source, Modell jederzeit frei wechselbar" },
  { label: "Compliance", value: "DSGVO und Berufsrecht, lückenlos dokumentiert" },
  { label: "Kosten", value: "Planbare Fixkosten statt steigender API-Gebühren" },
];

const flowRisk = ["Ihre Eingabe", "OpenAI API", "US-Rechenzentrum"];
const flowSafe = ["Ihre Eingabe", "EU-Server / On-Premise", "Antwort an Sie"];

const comparisons = [
  { feature: "Datenverarbeitung", chatgpt: "US-Server bei OpenAI", alt: "Österreich, EU oder On-Premise" },
  { feature: "DSGVO-Konformität", chatgpt: "Eingeschränkt, AVV-abhängig", alt: "Vollständig und dokumentiert" },
  { feature: "Datenweitergabe", chatgpt: "An OpenAI und Subdienstleister", alt: "Keine, Daten bleiben bei Ihnen" },
  { feature: "Berufsgeheimnis (Anwalt, Arzt)", chatgpt: "Rechtlich heikel bis unzulässig", alt: "Geeignet und abgesichert" },
  { feature: "Training mit Ihren Daten", chatgpt: "Möglich, Opt-out nötig", alt: "Niemals" },
  { feature: "Hosting-Standort", chatgpt: "USA, kaum wählbar", alt: "Frei wählbar, EU oder eigenes Haus" },
  { feature: "Modellauswahl", chatgpt: "Nur OpenAI-Modelle", alt: "Llama, Mistral, Qwen, frei wechselbar" },
  { feature: "Anpassung & Fine-Tuning", chatgpt: "Stark begrenzt", alt: "Vollständig auf Ihre Daten" },
  { feature: "Offline-/On-Premise-Betrieb", chatgpt: "Nicht möglich", alt: "Möglich, auch ohne Internet" },
  { feature: "Vendor Lock-in", chatgpt: "Hoch, proprietär", alt: "Keiner, Open Source" },
  { feature: "Kosten bei hohem Volumen", chatgpt: "Steigen linear pro Token", alt: "Planbare Fixkosten" },
  { feature: "Auditierbarkeit", chatgpt: "Black Box", alt: "Vollständig protokollierbar" },
];

const modelsByBranch = [
  {
    value: "legal",
    label: "Anwälte",
    icon: Scale,
    model: "Mistral Large",
    maker: "Mistral AI (FR)",
    note: "Europäisches Modell, exzellent für Deutsch und Recht",
    context:
      "Mandantengeheimnisse dürfen das Haus nicht verlassen. Ein europäisches Open-Source-Modell, on-premise oder in der EU gehostet, hält Schriftsätze, Akten und Korrespondenz vollständig in Ihrer Hand. Per RAG durchsucht die KI Ihre Aktenbestände und Vorlagen, ohne dass ein einziges Dokument eine US-Cloud erreicht.",
  },
  {
    value: "health",
    label: "Healthcare",
    icon: Stethoscope,
    model: "Llama 4",
    maker: "Meta",
    note: "ChatGPT-4o-Niveau, multimodal, vollständig open source",
    context:
      "Patientendaten fallen unter strengen Datenschutz und ärztliche Schweigepflicht. Llama 4 läuft auf Ihrer eigenen Hardware oder einem EU-Server, kein Byte erreicht eine US-Cloud. Damit lassen sich Befunde zusammenfassen, Dokumentation entlasten und Anfragen vorbereiten, rechtssicher und nachvollziehbar.",
  },
  {
    value: "finance",
    label: "Finanz",
    icon: Landmark,
    model: "Qwen 2.5",
    maker: "Alibaba",
    note: "Spitzen-Benchmarks, stark bei Analyse und Code",
    context:
      "Banken und Versicherungen unterliegen DORA, MaRisk und DSGVO. Ein analytisch starkes Modell wertet Finanzdaten, Reports und Verträge aus, ohne die Datensouveränität aufzugeben. Der gesamte Verarbeitungsweg bleibt protokolliert und auditierbar, genau wie es Aufsicht und Revision verlangen.",
  },
  {
    value: "kmu",
    label: "KMU",
    icon: Building2,
    model: "Command R+",
    maker: "Cohere",
    note: "Spezialisiert auf RAG und Dokumentenverarbeitung",
    context:
      "KMU verarbeiten täglich Verträge, Angebote, Mails und Kundendaten. Command R+ ist auf Dokumentenverarbeitung und RAG spezialisiert und damit ideal, um verstreutes Firmenwissen sicher nutzbar zu machen. Mitarbeiter fragen in natürlicher Sprache, die KI antwortet auf Basis Ihrer eigenen Unterlagen.",
  },
  {
    value: "public",
    label: "Verwaltung",
    icon: Globe,
    model: "Teuken & Llama 4",
    maker: "OpenGPT-X (EU)",
    note: "Europäisches Modell, auf alle EU-Sprachen trainiert",
    context:
      "Behörden und öffentliche Einrichtungen dürfen Bürgerdaten nicht in Drittländer geben. Mit einem europäischen Modell auf österreichischen oder EU-Servern bleibt jede Verarbeitung im rechtlichen Rahmen. Das ist die Grundlage für KI-Unterstützung im öffentlichen Sektor, von Anfragenbearbeitung bis Aktenrecherche.",
  },
];

const benefits = [
  { icon: Shield, title: "100% DSGVO-konform", desc: "Hosting in Österreich oder der EU, kein Transfer in Drittländer, vollständige und prüfbare Compliance für Ihr gesamtes Unternehmen." },
  { icon: Lock, title: "Volle Datensouveränität", desc: "Ihre Daten verlassen Ihre Infrastruktur nicht. Kein Training mit Ihren Inhalten, keine Weitergabe an Subdienstleister, keine versteckten Logs." },
  { icon: Server, title: "On-Premise oder EU-Cloud", desc: "Flexible Deployment-Optionen: lokal auf Ihrer Hardware, im eigenen Rechenzentrum oder sicher auf EU-Servern in Österreich." },
  { icon: Zap, title: "Qualität wie ChatGPT", desc: "Llama 4, Mistral und Qwen erreichen ChatGPT-4o-Niveau bei Texten, Analysen, Übersetzung und Dokumentenverarbeitung." },
  { icon: Plug, title: "Integration in Ihre Tools", desc: "Nahtlose Anbindung an Teams, SharePoint, CRM und ERP. Ihre Private KI arbeitet dort, wo Ihr Team ohnehin schon ist." },
  { icon: Euro, title: "Planbare Fixkosten", desc: "Keine linear steigenden Token-Gebühren. Sie zahlen für Betrieb statt pro Anfrage und behalten die Kosten im Griff." },
];

const audiences = [
  { icon: Scale, who: "Rechtsanwälte & Notare", what: "Mandantengeheimnisse dürfen niemals durch ChatGPT laufen. Das Berufsrecht verbietet die Weitergabe an externe US-Dienste." },
  { icon: Stethoscope, who: "Ärzte & Kliniken", what: "Patientendaten fallen unter Datenschutz und Schweigepflicht. Eine Verarbeitung in der US-Cloud ist ausgeschlossen." },
  { icon: Calculator, who: "Steuerberater & Wirtschaftsprüfer", what: "Bilanzen, Steuererklärungen und Mandantenzahlen gehören nicht in fremde Hände und schon gar nicht zu OpenAI." },
  { icon: Landmark, who: "Banken & Versicherungen", what: "DORA, MaRisk und DSGVO verlangen vollständige Datensouveränität und einen nachweisbaren Verarbeitungsweg." },
  { icon: Building2, who: "KMU mit sensiblen Daten", what: "Kundendaten, Produktionsgeheimnisse und Verträge sind das Kapital Ihres Betriebs. ChatGPT ist dafür keine sichere Option." },
  { icon: Globe, who: "Öffentliche Verwaltung", what: "Behörden- und Bürgerdaten müssen auf österreichischen oder EU-Servern bleiben, ohne Umweg über Drittländer." },
];

const archLayers = [
  { icon: MonitorSmartphone, title: "Zugriff & Oberfläche", items: ["Open WebUI", "MS Teams", "Browser-Plugin", "API"] },
  { icon: Brain, title: "KI-Modell", items: ["Llama 4", "Mistral Large", "Qwen 2.5", "frei wechselbar"] },
  { icon: Database, title: "Wissen & Daten (RAG)", items: ["Ihre Dokumente", "SharePoint", "Dateiablagen", "CRM / ERP"] },
  { icon: Server, title: "Betrieb & Hosting", items: ["EU-Server Österreich", "On-Premise", "MLOps", "Monitoring"] },
];

const steps = [
  {
    step: "01",
    icon: Search,
    time: "kostenlos, 30 Min.",
    title: "Kostenlose Erstanalyse",
    desc: "Wir analysieren, wie Ihr Team ChatGPT heute nutzt: Für welche Aufgaben? Welche Daten werden eingegeben? Welche Risiken bestehen? Sie erhalten eine ehrliche Einschätzung Ihrer DSGVO-Lage, ganz ohne Verkaufsdruck.",
  },
  {
    step: "02",
    icon: FileText,
    time: "Woche 1",
    title: "KI-Assessment & Modellwahl",
    desc: "Wir erstellen ein Assessment mit konkreter Empfehlung: Llama 4, Mistral oder Qwen? EU-Cloud oder On-Premise? Wir wählen die kosteneffizienteste Option mit ChatGPT-vergleichbarer Qualität für Ihren Anwendungsfall.",
  },
  {
    step: "03",
    icon: Settings,
    time: "Woche 1 bis 2",
    title: "Setup & Integration",
    desc: "Wir deployen das Modell auf EU-Servern oder Ihrer Hardware, richten ein sicheres Chat-Interface ein und binden es per RAG an Ihre Dokumente und Tools an: Teams, SharePoint, Browser.",
  },
  {
    step: "04",
    icon: Rocket,
    time: "ab Woche 3",
    title: "Go-Live, Schulung & Support",
    desc: "Ihr Team erhält eine kurze Einführung, dann geht die Private KI als direkter ChatGPT-Ersatz live. Wir überwachen den Betrieb DSGVO-konform und optimieren das Modell laufend weiter.",
  },
];

const usps = [
  { badge: "Unabhängig", title: "Kein Vendor Lock-in", desc: "Wir binden Sie an keine einzelne Lösung. Erscheint morgen ein besseres Open-Source-Modell, wechseln wir es, ohne Mehrkosten und ohne Migrationsdrama für Sie." },
  { badge: "Top Qualität", title: "Gleiche Leistung, private Daten", desc: "Llama 4 und Mistral erreichen heute ChatGPT-4o-Niveau. Ihre Mitarbeiter merken im Alltag keinen Unterschied, außer dass ihre Daten sicher bleiben." },
  { badge: "Rechtskonform", title: "DSGVO & Berufsgeheimnis", desc: "Speziell für Anwälte, Ärzte und Steuerberater dokumentieren wir vollständig, wie Ihre Private KI datenschutz- und berufsrechtskonform betrieben wird." },
];

const relatedServices = [
  { href: "/private-ai", icon: Server, tag: "Basis", title: "Private AI & lokale KI", desc: "Die technische Grundlage für Ihre DSGVO-konforme ChatGPT Alternative." },
  { href: "/ki-wissensdatenbank", icon: Database, tag: "RAG", title: "KI Wissensdatenbank", desc: "Private KI kombiniert mit Ihren Firmendaten, für präzise Antworten aus Ihren eigenen Dokumenten." },
  { href: "/mlops", icon: Network, tag: "Betrieb", title: "MLOps & LLMOps", desc: "Professioneller, skalierbarer Betrieb Ihrer Private KI auf moderner Infrastruktur." },
  { href: "/eu-ai-act", icon: Scale, tag: "Recht", title: "EU AI Act", desc: "Wir bringen Ihre KI-Nutzung sauber in Einklang mit dem EU AI Act." },
];

export default function Page() {
  return (
    <>
      <Script id="faq-chatgpt-alternative" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-chatgpt-alternative" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO mit Risiko-vs-Lösung-Gegenueberstellung */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                    ChatGPT Alternative, DSGVO-konform
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Die <span className="text-primary">ChatGPT Alternative</span>, die Ihre Daten in der EU lässt
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    ChatGPT verarbeitet Ihre Eingaben auf US-Servern, für sensible Unternehmens-, Kunden- und Patientendaten ist das ein Problem. Unsere Private KI nutzt Open-Source-Modelle wie Llama 4 und Mistral: gleiche Qualität, volle DSGVO-Konformität, Hosting in Österreich oder der EU.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Erstgespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#vergleich">ChatGPT direkt vergleichen</a>
                    </Button>
                  </div>
                  <div className="flex items-center gap-6 pt-2">
                    <div>
                      <div className="text-3xl font-bold text-primary">100%</div>
                      <div className="text-xs text-muted-foreground">DSGVO-konform</div>
                    </div>
                    <div className="h-10 w-px bg-border" />
                    <div>
                      <div className="text-3xl font-bold text-primary">0</div>
                      <div className="text-xs text-muted-foreground">Datenweitergabe an US-Anbieter</div>
                    </div>
                    <div className="h-10 w-px bg-border" />
                    <div>
                      <div className="text-3xl font-bold text-primary">EU</div>
                      <div className="text-xs text-muted-foreground">Hosting in Österreich/EU</div>
                    </div>
                  </div>
                </div>

                {/* Bespoke Hero-Visual: Risiko vs. Lösung */}
                <Card className="relative border-2 shadow-xl shadow-primary/5 overflow-hidden">
                  <div className="px-5 pt-5 pb-3 border-b border-border">
                    <div className="text-sm font-bold">Dieselbe Anfrage, zwei Wege</div>
                    <div className="text-xs text-muted-foreground">Wohin gehen Ihre Daten wirklich?</div>
                  </div>
                  <div className="grid grid-cols-2 relative">
                    {/* Risiko-Seite */}
                    <div className="p-5 bg-muted/40 border-r border-border">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-9 h-9 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                          <Cloud className="w-4 h-4 text-destructive" />
                        </div>
                        <div>
                          <div className="text-sm font-bold">ChatGPT</div>
                          <div className="text-[11px] text-muted-foreground">US-Cloud</div>
                        </div>
                      </div>
                      <ul className="space-y-2.5">
                        {heroRisks.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-xs text-muted-foreground leading-snug">
                            <X className="w-3.5 h-3.5 text-destructive mt-0.5 shrink-0" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Loesungs-Seite */}
                    <div className="p-5 bg-primary/5">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <ShieldCheck className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm font-bold">Private KI</div>
                          <div className="text-[11px] text-muted-foreground">EU / On-Premise</div>
                        </div>
                      </div>
                      <ul className="space-y-2.5">
                        {heroSolution.map((s) => (
                          <li key={s} className="flex items-start gap-2 text-xs text-foreground leading-snug">
                            <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* VS-Marker */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <span className="flex items-center justify-center w-9 h-9 rounded-full bg-background border-2 border-border text-[11px] font-bold text-foreground shadow-sm">
                        VS
                      </span>
                    </div>
                  </div>
                  <div className="border-t border-border px-5 py-3 text-[11px] text-center text-muted-foreground">
                    Ein Weg verlässt die EU. Der andere nicht.
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* TRUST-BAND */}
          <section className="py-8 border-y border-border bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
                {trustChips.map(({ icon: Icon, label }) => (
                  <span key={label} className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <Icon className="w-4 h-4 text-primary" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* MODELL-LOGOS: DSGVO-konforme Alternativen */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 max-w-7xl">
              <p className="text-center text-sm font-medium text-muted-foreground mb-8">
                DSGVO-konforme Modelle, die wir EU-gehostet für Sie betreiben
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                {[
                  { slug: "anthropic", name: "Claude (Anthropic)" },
                  { slug: "mistralai", name: "Mistral AI" },
                  { slug: "googlegemini", name: "Google Gemini" },
                  { slug: "huggingface", name: "Hugging Face" },
                  { slug: "ollama", name: "Ollama" },
                  { slug: "meta", name: "Meta Llama" },
                ].map((m) => (
                  <div key={m.slug} className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white border border-border flex items-center justify-center p-3 hover-lift">
                    <img src={`/img/logos/${m.slug}.svg`} alt={m.name} className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* DEFINITION: 2-col mit Info-Card */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Definition</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was ist eine ChatGPT Alternative und warum brauchen Unternehmen sie?</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Eine <strong className="text-foreground">ChatGPT Alternative</strong> ist ein KI-Sprachmodell, das dieselben Aufgaben wie ChatGPT erledigt, also Texte schreiben, zusammenfassen, übersetzen, recherchieren und Dokumente analysieren, ohne dass Ihre Daten an OpenAI in die USA fließen. In der Praxis bedeutet das eine <strong className="text-foreground">Private KI</strong> auf Basis von Open-Source-Modellen, betrieben in Österreich, der EU oder direkt in Ihrem Haus.
                    </p>
                    <p>
                      ChatGPT selbst ist mächtig, sendet Ihre Eingaben aber an US-Server. Für viele Unternehmen ist das ein kritisches Problem: Die <strong className="text-foreground">DSGVO</strong> verlangt eine EU-konforme Datenverarbeitung, Berufsgeheimnisse von Anwälten, Ärzten und Steuerberatern dürfen keine externen KI-Dienste nutzen, und sensible Geschäftsdaten gehören schlicht nicht in fremde Hände.
                    </p>
                    <p>
                      Mit Modellen wie <strong className="text-foreground">Llama 4</strong> (Meta), <strong className="text-foreground">Mistral</strong> (Frankreich) oder <strong className="text-foreground">Qwen</strong> steht heute eine echte Alternative bereit: vergleichbare oder bessere Qualität, vollständig unter Ihrer Kontrolle und DSGVO-konform gehostet. Sie bekommen den Nutzen generativer KI, ohne die Datenschutzrisiken in Kauf zu nehmen.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">DSGVO konforme KI</Badge>
                    <Badge variant="secondary" className="rounded-full">Open Source KI Alternative</Badge>
                    <Badge variant="secondary" className="rounded-full">Private KI</Badge>
                    <Badge variant="secondary" className="rounded-full">EU KI</Badge>
                  </div>
                </div>

                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Die Lösung auf einen Blick</CardTitle>
                    <CardDescription>Was eine DSGVO-konforme ChatGPT Alternative ausmacht.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {solutionFacts.map(({ label, value }) => (
                      <div key={label} className="flex items-start justify-between gap-4 py-2.5 border-b border-border last:border-0">
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                          <Check className="w-4 h-4 text-primary shrink-0" />
                          {label}
                        </span>
                        <span className="text-sm text-muted-foreground text-right max-w-[55%]">{value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* DATENFLUSS-DIAGRAMM (clean, divs) */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Datenfluss</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Was wirklich mit Ihren Daten passiert</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Jede Eingabe nimmt einen Weg. Bei ChatGPT führt er aus der EU heraus, bei einer Private KI bleibt er bei Ihnen.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                {/* ChatGPT-Lane */}
                <Card className="border-2 border-destructive/20">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-5">
                      <FileWarning className="w-5 h-5 text-destructive" />
                      <span className="font-bold">ChatGPT (OpenAI)</span>
                    </div>
                    <div className="space-y-2.5">
                      {flowRisk.map((node, i) => (
                        <div key={node}>
                          <div className="flex items-center gap-3 rounded-lg border border-border bg-muted/40 px-4 py-3 text-sm font-medium">
                            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-destructive/10 text-destructive text-xs font-bold shrink-0">{i + 1}</span>
                            {node}
                          </div>
                          {i < flowRisk.length - 1 && <div className="ml-6 h-4 w-px bg-destructive/30" aria-hidden />}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-5 leading-relaxed">
                      Ihre Daten verlassen die EU. Es gelten US-Recht und der Cloud Act, eine Trainingsnutzung ist möglich.
                    </p>
                  </CardContent>
                </Card>

                {/* Private-KI-Lane */}
                <Card className="border-2 border-primary/30 bg-primary/5">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-5">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                      <span className="font-bold">Private KI (EU)</span>
                    </div>
                    <div className="space-y-2.5">
                      {flowSafe.map((node, i) => (
                        <div key={node}>
                          <div className="flex items-center gap-3 rounded-lg border border-primary/20 bg-background px-4 py-3 text-sm font-medium">
                            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-primary/10 text-primary text-xs font-bold shrink-0">{i + 1}</span>
                            {node}
                          </div>
                          {i < flowSafe.length - 1 && <div className="ml-6 h-4 w-px bg-primary/30" aria-hidden />}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-5 leading-relaxed">
                      Ihre Daten bleiben in Ihrer Infrastruktur. Kein Drittlandtransfer, kein Training, kein fremder Zugriff.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* VERGLEICHS-TABLE */}
          <section id="vergleich" className="py-14 md:py-20 scroll-mt-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Direkter Vergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">ChatGPT vs. Private KI Alternative</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Zwölf Merkmale, ein klares Bild: Wo eine DSGVO-konforme Alternative gegenüber ChatGPT punktet.
                </p>
              </div>
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[30%] font-bold text-foreground">Merkmal</TableHead>
                      <TableHead className="text-muted-foreground">ChatGPT (OpenAI)</TableHead>
                      <TableHead className="text-primary font-bold">Private KI Alternative</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisons.map(({ feature, chatgpt, alt }, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{feature}</TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          <span className="inline-flex items-start gap-1.5">
                            <X className="w-3.5 h-3.5 text-muted-foreground/60 mt-0.5 shrink-0" />
                            {chatgpt}
                          </span>
                        </TableCell>
                        <TableCell className="text-sm text-primary font-medium">
                          <span className="inline-flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                            {alt}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </section>

          {/* MODELLE nach Branche: Tabs */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Modelle nach Branche</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Diese Open-Source-Modelle ersetzen ChatGPT</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Modernste Open-Source-Modelle erreichen heute ChatGPT-4o-Niveau und laufen vollständig privat. Wählen Sie Ihre Branche und sehen Sie das passende Modell.
                </p>
              </div>
              <Tabs defaultValue="legal" className="w-full">
                <TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">
                  {modelsByBranch.map((m) => {
                    const Icon = m.icon;
                    return (
                      <TabsTrigger key={m.value} value={m.value} className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border">
                        <Icon className="w-4 h-4 mr-1.5" />
                        {m.label}
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
                {modelsByBranch.map((m) => (
                  <TabsContent key={m.value} value={m.value}>
                    <Card className="border-2">
                      <CardHeader>
                        <div className="flex items-center justify-between gap-4">
                          <CardTitle className="text-2xl text-primary">{m.model}</CardTitle>
                          <Badge variant="outline" className="rounded-full text-xs shrink-0 bg-primary/10 text-primary border-primary/20">{m.maker}</Badge>
                        </div>
                        <CardDescription className="text-base">{m.note}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{m.context}</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>

          {/* VORTEILE: Bento */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Ihre Vorteile</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Was eine Private KI Ihnen bringt</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Die Leistung von ChatGPT, aber unter Ihrer Kontrolle, DSGVO-konform und ohne Datenweitergabe.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {benefits.map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <Card key={i} className={`hover-lift border-2 ${i === 0 ? "lg:col-span-2 bg-primary/5 border-primary/20" : ""}`}>
                      <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{b.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{b.desc}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ARCHITEKTUR-DIAGRAMM (clean, divs) */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Architektur</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">So bauen wir Ihre Private KI auf</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Eine ChatGPT Alternative ist mehr als ein Modell. Sie ist ein abgestimmter Stack aus Oberfläche, Sprachmodell, Wissensanbindung und sicherem Betrieb. Jede Schicht liegt in Ihrer Infrastruktur, nichts davon erreicht eine US-Cloud.
                    </p>
                    <p>
                      Ihre Mitarbeiter arbeiten über eine vertraute Oberfläche, im Hintergrund läuft ein Open-Source-Modell, das per RAG auf Ihre eigenen Dokumente zugreift. Betrieb und Monitoring übernehmen wir DSGVO-konform und skalierbar.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full"><Lock className="w-3.5 h-3.5 mr-1" />Kein Drittland</Badge>
                    <Badge variant="secondary" className="rounded-full"><KeyRound className="w-3.5 h-3.5 mr-1" />Zugriffskontrolle</Badge>
                    <Badge variant="secondary" className="rounded-full"><Gauge className="w-3.5 h-3.5 mr-1" />Skalierbar</Badge>
                  </div>
                </div>

                <div className="rounded-2xl border-2 border-primary/20 bg-background p-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">Ihre Infrastruktur</span>
                    <Badge variant="outline" className="rounded-full text-[11px] bg-primary/10 text-primary border-primary/20">EU / On-Premise</Badge>
                  </div>
                  <div className="space-y-2.5">
                    {archLayers.map(({ icon: Icon, title, items }) => (
                      <div key={title} className="flex items-center gap-4 rounded-xl border border-border bg-muted/30 px-4 py-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-bold">{title}</div>
                          <div className="flex flex-wrap gap-x-2 gap-y-0.5 mt-0.5">
                            {items.map((it) => (
                              <span key={it} className="text-xs text-muted-foreground">{it}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-[11px] text-muted-foreground justify-center">
                    <Shield className="w-3.5 h-3.5 text-primary" />
                    Daten verlassen diese Grenze nie
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ZIELGRUPPEN */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Zielgruppen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Wer dringend eine ChatGPT Alternative braucht</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Überall, wo Daten sensibel oder rechtlich geschützt sind, ist die US-Cloud keine Option.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {audiences.map(({ icon: Icon, who, what }, i) => (
                  <Card key={i} className="hover-lift border-2">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{who}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed text-sm">{what}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* ABLAUF: Timeline */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="max-w-2xl mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Der Ablauf</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ihre ChatGPT Alternative in 4 Schritten</h2>
                <p className="text-lg text-muted-foreground">
                  Von der ehrlichen Analyse bis zur fertigen Private KI, in der Regel in 2 bis 4 Wochen.
                </p>
              </div>
              <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="hidden lg:block absolute top-7 left-[12%] right-[12%] h-px bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40" aria-hidden />
                {steps.map(({ step, icon: Icon, time, title, desc }) => (
                  <div key={step} className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center mb-4 shadow-lg shadow-primary/20 relative z-10 ring-8 ring-background">
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

          {/* WARUM KI KANZLEI */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum die KI Kanzlei</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Warum KI Kanzlei für Ihre ChatGPT Alternative?</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {usps.map(({ badge, title, desc }, i) => (
                  <Card key={i} className="hover-lift border-2 text-center">
                    <CardHeader>
                      <Badge variant="outline" className="mx-auto w-fit rounded-full mb-2 bg-primary/10 text-primary border-primary/20">{badge}</Badge>
                      <CardTitle className="text-lg">{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed text-sm">{desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* STATS-BAND */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-2 md:grid-cols-4 border-2 border-border rounded-2xl overflow-hidden bg-card">
                {[
                  ["0", "Datenweitergabe an US-Anbieter"],
                  ["100%", "DSGVO-konform & dokumentiert"],
                  ["4o", "ChatGPT-Niveau bei Open-Source-Modellen"],
                  ["2 bis 4 Wo.", "von der Analyse bis zum Go-Live"],
                ].map(([v, l], i) => (
                  <div key={i} className="p-7 text-center border-b md:border-b-0 md:border-r last:border-0 border-border [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r">
                    <div className="text-3xl md:text-4xl font-bold text-primary">{v}</div>
                    <div className="text-sm text-muted-foreground mt-2">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zur ChatGPT Alternative</h2>
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
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Ergänzende Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Das passt zu Ihrer ChatGPT Alternative</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Bausteine, die Ihre Private KI noch leistungsfähiger und sicherer machen.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {relatedServices.map(({ href, icon: Icon, tag, title, desc }) => (
                  <a key={href} href={href} className="group block">
                    <Card className="h-full border-2 hover-lift transition-all group-hover:border-primary/40">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary">
                            <Icon className="w-6 h-6 text-primary transition-colors group-hover:text-white" />
                          </div>
                          <Badge variant="secondary" className="rounded-full">{tag}</Badge>
                        </div>
                        <CardTitle className="text-lg">{title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed text-sm mb-4">{desc}</p>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">Mehr erfahren</span>
                      </CardContent>
                    </Card>
                  </a>
                ))}
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
