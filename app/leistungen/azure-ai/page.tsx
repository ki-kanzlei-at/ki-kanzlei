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
  Cloud, Check, X, ShieldCheck, Lock, Server, Sparkles, MapPin, Code2, Bot, Brain,
  Database, Search, Settings2, Rocket, Phone, Clock, Layers, Calculator, FileText,
  Gauge, Cog, GitBranch, Plug,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Azure OpenAI Service & Azure AI für Unternehmen",
  description:
    "Azure OpenAI und Azure AI für Unternehmen: Wir implementieren GPT-Modelle DSGVO-konform in Ihrer EU-Region, ohne Datenweitergabe ans Training, mit RBAC, Private Endpoints und Integration in Ihre Microsoft-Landschaft. Enterprise KI im DACH-Raum.",
  keywords:
    "Azure AI, Azure OpenAI, Azure OpenAI Service, Azure Machine Learning, Enterprise KI, GPT Azure, DSGVO KI Cloud, Azure GPT, Azure OpenAI EU, Microsoft KI, Azure AI Beratung, Azure OpenAI Implementierung, GPT-4o Azure",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/azure-ai" },
};

const faqs = [
  {
    q: "Was ist der Azure OpenAI Service und wie unterscheidet er sich von ChatGPT?",
    a: "Der Azure OpenAI Service stellt dieselben Modelle wie OpenAI bereit, etwa GPT-4o, GPT-4 und Embedding-Modelle, allerdings betrieben in der Microsoft Azure Cloud. Während ChatGPT eine fertige Endnutzer-Anwendung von OpenAI in den USA ist, bekommen Sie über Azure eine Enterprise-Plattform mit eigener Ressource in einer von Ihnen gewählten Region. Sie entscheiden, in welchem Rechenzentrum die Verarbeitung läuft, regeln Zugriffe über Ihre Microsoft-Identitäten und binden die Modelle per API in Ihre eigenen Anwendungen ein. Kurz gesagt, gleiche Modellqualität, aber unter Ihrer Kontrolle statt als offenes Web-Tool.",
  },
  {
    q: "Ist Azure OpenAI DSGVO-konform einsetzbar?",
    a: "Ja, mit der richtigen Konfiguration. Sie wählen eine EU-Region als Hosting-Standort, etwa Schweden oder Frankreich, schließen mit Microsoft einen Auftragsverarbeitungsvertrag ab und nutzen Azure-Funktionen wie Private Endpoints, Verschlüsselung und rollenbasierte Zugriffskontrolle. Eingaben werden nicht zum Training der OpenAI-Modelle verwendet. Wir richten Ihre Umgebung so ein, dass Datenschutz und EU-Hosting von Anfang an sauber dokumentiert sind, sodass auch Ihre Rechts- und Datenschutzabteilung die Lösung freigeben kann.",
  },
  {
    q: "Werden unsere Eingaben zum Training der Modelle verwendet?",
    a: "Nein. Microsoft verarbeitet Ihre Prompts und Antworten ausschließlich zur Erbringung des Dienstes. Ihre Inhalte werden nicht an OpenAI weitergegeben und nicht zum Training oder zur Verbesserung der Basismodelle genutzt. Das ist einer der zentralen Unterschiede zur direkten Nutzung von OpenAI oder zur privaten Verwendung von ChatGPT durch Ihre Mitarbeiter und einer der Hauptgründe, warum Unternehmen im DACH-Raum den Weg über Azure gehen.",
  },
  {
    q: "Welche Modelle stehen in Azure OpenAI zur Verfügung?",
    a: "Verfügbar sind unter anderem GPT-4o und GPT-4 für Text und multimodale Aufgaben, kleinere und schnellere Modelle für hohe Volumen sowie Embedding-Modelle für die semantische Suche und für RAG-Anwendungen. Welche Modelle in welcher Region verfügbar sind, ändert sich laufend. Wir wählen mit Ihnen gemeinsam das Modell aus, das Qualität, Geschwindigkeit und Kosten für Ihren konkreten Anwendungsfall am besten ausbalanciert, statt pauschal das größte Modell zu nehmen.",
  },
  {
    q: "Wann ist Azure OpenAI sinnvoll und wann eine self-hosted Private AI?",
    a: "Azure OpenAI passt, wenn Sie schnell mit erstklassigen Modellen starten wollen, bereits in der Microsoft-Welt arbeiten und eine EU-Region mit Auftragsverarbeitungsvertrag als Datenschutzrahmen ausreicht. Eine self-hosted Private AI mit Open-Source-Modellen empfehlen wir, wenn höchste Datensouveränität gefordert ist, die Daten das eigene Rechenzentrum nicht verlassen dürfen oder bei sehr hohem Dauervolumen die Fixkosten eigener Hardware günstiger sind. Wir beraten ehrlich, oft ist auch eine Kombination aus beidem der beste Weg.",
  },
  {
    q: "Was kostet Azure OpenAI?",
    a: "Azure OpenAI rechnet standardmäßig pro verarbeitetem Token ab, also nach Menge des Ein- und Ausgabetexts. Für planbare, hohe Last gibt es zusätzlich reservierte Kapazität in Form von Provisioned Throughput Units mit festem Monatspreis. Bei moderater Nutzung ist das tokenbasierte Modell günstig und flexibel, bei konstant hoher Last lohnt sich die reservierte Variante. Im kostenlosen Assessment schätzen wir Ihren Token-Bedarf realistisch ab und zeigen, welches Abrechnungsmodell für Sie am sinnvollsten ist.",
  },
  {
    q: "Lässt sich Azure OpenAI in unsere bestehende Microsoft-Umgebung integrieren?",
    a: "Ja, das ist eine der größten Stärken. Zugriffe steuern Sie über Microsoft Entra ID mit Ihren bestehenden Identitäten und Rollen, die Verbindung sichern Sie über Private Endpoints im eigenen virtuellen Netzwerk ab und die Modelle binden Sie an Microsoft 365, SharePoint, Teams oder eigene Fachanwendungen an. So entsteht kein isoliertes KI-Werkzeug neben Ihrer IT, sondern ein in Ihre Landschaft eingebetteter Dienst mit zentraler Verwaltung, Monitoring und Kostenkontrolle.",
  },
  {
    q: "Was ist Azure Machine Learning und brauchen wir das zusätzlich?",
    a: "Azure Machine Learning ist die Plattform, um eigene Modelle zu trainieren, zu betreiben und zu überwachen, inklusive Pipelines, Versionierung und Deployment. Für reine Anwendungen rund um Sprachmodelle brauchen Sie das nicht zwingend, hier genügt oft der Azure OpenAI Service. Sobald Sie jedoch eigene Modelle anpassen, klassische ML-Aufgaben lösen oder einen sauberen MLOps-Betrieb aufbauen wollen, ist Azure Machine Learning die passende Ergänzung. Wir helfen bei der Einordnung, was Sie wirklich benötigen, und vermeiden überdimensionierte Architekturen.",
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
  name: "Azure OpenAI Service & Azure AI Implementierung",
  serviceType: "Azure OpenAI, Azure AI, Enterprise KI, Azure Machine Learning",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "Azure OpenAI und Azure AI für Unternehmen im DACH-Raum: DSGVO-konforme Implementierung von GPT-Modellen in EU-Regionen, mit RBAC, Private Endpoints und Integration in die Microsoft-Landschaft.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const stats = [
  { value: "EU", label: "Hosting-Region wählbar" },
  { value: "0", label: "Daten ins Modelltraining" },
  { value: "99,9 %", label: "SLA-Verfügbarkeit" },
  { value: "2-4 Wo.", label: "bis zum Produktivbetrieb" },
];

const ataglance = [
  ["Anbieter", "Microsoft Azure"],
  ["Modelle", "GPT-4o, GPT-4, Embeddings"],
  ["Hosting-Region", "EU wählbar, z. B. Schweden, Frankreich"],
  ["Abrechnung", "pro Token oder reservierte Kapazität"],
  ["Integration", "Microsoft 365, Entra ID, Azure"],
  ["DSGVO", "mit EU-Region und AVV machbar"],
];

const problems = [
  { problem: "Mitarbeiter nutzen ChatGPT privat und kopieren Firmendaten in US-Tools.", solution: "Ein kontrollierter GPT-Zugang in Ihrer Azure-EU-Region, den die IT zentral verwaltet." },
  { problem: "Die Rechtsabteilung blockiert KI, weil unklar ist, wohin die Daten fließen.", solution: "Azure OpenAI in der EU-Region, ohne Weitergabe Ihrer Eingaben ans Modelltraining." },
  { problem: "KI-Tools stehen isoliert neben Ihrer gewachsenen Microsoft-Landschaft.", solution: "Integration in Entra ID, Microsoft 365 und Ihre Azure-Dienste mit einheitlicher Verwaltung." },
  { problem: "Niemand sieht, wer welche Modelle wie oft nutzt und was das kostet.", solution: "RBAC, Monitoring und transparente Kostenkontrolle pro Team direkt in Azure." },
];

const bentoFeatures = [
  { icon: Cloud, title: "Azure OpenAI in Ihrer EU-Region", description: "Wir richten Ihre Azure-OpenAI-Ressource in einem europäischen Rechenzentrum ein, etwa Schweden oder Frankreich, mit Auftragsverarbeitungsvertrag und sauberer Datenschutz-Dokumentation. Sie nutzen GPT-Modelle in Enterprise-Qualität, ohne dass Ihre Daten den europäischen Rechtsraum verlassen oder ins Training fließen." },
  { icon: Lock, title: "Private Endpoints & Verschlüsselung", description: "Die Verbindung läuft abgesichert über Ihr virtuelles Netzwerk, nicht über das offene Internet, mit Verschlüsselung in Ruhe und Übertragung." },
  { icon: ShieldCheck, title: "RBAC & Entra ID", description: "Zugriffe steuern Sie über Ihre bestehenden Microsoft-Identitäten und Rollen, granular pro Team und nachvollziehbar protokolliert." },
  { icon: Layers, title: "Integration in Microsoft 365", description: "Wir binden die Modelle an SharePoint, Teams und Ihre Fachanwendungen an, statt ein weiteres isoliertes Werkzeug zu schaffen." },
  { icon: Brain, title: "Das richtige Modell je Use Case", description: "GPT-4o, schlanke Modelle für hohe Volumen oder Embeddings für die Suche, wir wählen nach Qualität, Tempo und Kosten." },
  { icon: Calculator, title: "Kostenkontrolle & Governance", description: "Wir machen Verbrauch und Kosten sichtbar, setzen Limits und beraten ehrlich, wann self-hosted günstiger wäre." },
];

const departments = [
  { value: "wissen", label: "Wissen", icon: Database, head: "Wissensmanagement & RAG", intro: "Ihre Mitarbeiter finden Antworten in Ihren eigenen Dokumenten, mit Quellenangabe.", items: ["Interne Dokumente, Richtlinien und Handbücher durchsuchbar machen, per Embeddings in der EU-Region.", "Antworten mit Verweis auf die Quelle erzeugen, statt frei erfundene Aussagen.", "Wissensassistenten in Teams oder im Intranet bereitstellen.", "Zugriff je nach Rolle steuern, sodass jeder nur sieht, was er sehen darf."] },
  { value: "service", label: "Service", icon: Bot, head: "Kundenservice & Chatbots", intro: "Anfragen werden schneller beantwortet, mit Ihren Inhalten als Grundlage.", items: ["Chatbots und Assistenten auf Basis Ihrer Wissensbasis aufbauen.", "Antwortentwürfe für das Service-Team aus früheren Fällen erzeugen.", "Anfragen automatisch kategorisieren und an das richtige Team leiten.", "Mehrsprachige Antworten ohne separate Übersetzungstools."] },
  { value: "dokumente", label: "Dokumente", icon: FileText, head: "Dokumente & Verträge", intro: "Lange Texte werden in Sekunden erfasst, zusammengefasst und geprüft.", items: ["Verträge, Berichte und E-Mails automatisch zusammenfassen.", "Wichtige Daten aus Dokumenten extrahieren und strukturieren.", "Auffälligkeiten und fehlende Klauseln markieren lassen.", "Vorlagen und Entwürfe auf Basis Ihrer Bausteine erzeugen."] },
  { value: "entwicklung", label: "Entwicklung", icon: Code2, head: "Entwicklung & Copilot", intro: "Ihre Teams bauen KI-Funktionen sicher in eigene Anwendungen ein.", items: ["GPT-Modelle per API in bestehende Fachanwendungen integrieren.", "Eigene Copilot-Funktionen für Ihre Software entwickeln.", "Prompt-Logik und Guardrails sauber kapseln und versionieren.", "Test- und Produktivumgebungen getrennt und kontrolliert betreiben."] },
  { value: "analyse", label: "Analyse", icon: Gauge, head: "Daten & Analyse", intro: "Aus unstrukturierten Texten werden auswertbare Erkenntnisse.", items: ["Freitext aus Umfragen und Tickets automatisch klassifizieren.", "Stimmung und Themen in großen Textmengen erkennen.", "Berichte aus Rohdaten in verständliche Sprache übersetzen.", "Wiederkehrende Auswertungen automatisiert erzeugen."] },
  { value: "betrieb", label: "Betrieb", icon: Cog, head: "IT & Betrieb", intro: "Die Plattform läuft kontrolliert, überwacht und kostenbewusst.", items: ["Monitoring von Auslastung, Latenz und Fehlern einrichten.", "Kostenlimits und Alarme pro Team und Anwendung setzen.", "Modell-Versionen kontrolliert aktualisieren ohne Ausfall.", "Zugriffe und Nutzung revisionssicher protokollieren."] },
];

const comparison = [
  { feature: "Hosting-Region", azure: "EU wählbar", openai: "USA", private: "Ihr Rechenzentrum oder EU" },
  { feature: "Datenschutz (DSGVO)", azure: "mit EU-Region und AVV", openai: "kritisch", private: "voll, Daten bleiben im Haus" },
  { feature: "Daten im Modelltraining", azure: "ausgeschlossen", openai: "vertraglich regelbar", private: "ausgeschlossen" },
  { feature: "Enterprise-Integration", azure: "nativ in Microsoft 365 & Entra", openai: "über API", private: "individuell, voller Zugriff" },
  { feature: "Modellauswahl", azure: "GPT-4o, GPT-4, Embeddings", openai: "neueste Modelle zuerst", private: "Open Source, z. B. Llama, Mistral" },
  { feature: "Kosten", azure: "pro Token oder reservierte Kapazität", openai: "pro Token, oft günstiger", private: "Fixkosten für Hardware & Betrieb" },
  { feature: "Kontrolle & Datensouveränität", azure: "hoch", openai: "gering", private: "vollständig" },
];

const steps = [
  { step: "01", icon: Phone, title: "Kostenlose Erstanalyse", time: "30 Minuten", description: "Wir klären Ihre Use Cases und Datenschutzanforderungen und schauen, ob Azure OpenAI oder eine self-hosted Lösung besser passt. Sie wissen danach, welcher Weg für Sie sinnvoll ist." },
  { step: "02", icon: Search, title: "Architektur & Region-Konzept", time: "Woche 1", description: "Wir legen EU-Region, Modelle, Netzwerk, RBAC und Private Endpoints fest und schätzen Token-Bedarf sowie Kosten realistisch ab." },
  { step: "03", icon: Settings2, title: "Aufbau & Integration", time: "Woche 1 bis 3", description: "Wir richten die Azure-OpenAI-Ressource ein, sichern die Endpoints ab, binden Microsoft 365 und Ihre Anwendungen an und testen gründlich." },
  { step: "04", icon: Rocket, title: "Go-Live & Betreuung", time: "ab Woche 3", description: "Die Plattform läuft produktiv. Wir überwachen Auslastung und Kosten, halten Modelle aktuell und bauen den nächsten Use Case, wenn Sie bereit sind." },
];

const related = [
  { href: "/leistungen/mlops", icon: GitBranch, title: "MLOps & LLMOps", desc: "Modelle, Prompts und Pipelines sauber betreiben, versionieren und überwachen, auch in Azure Machine Learning." },
  { href: "/leistungen/private-ai", icon: Server, title: "Private AI & Lokale KI", desc: "Wenn die Daten das Haus nicht verlassen dürfen, betreiben wir Open-Source-Modelle vollständig self-hosted." },
  { href: "/leistungen/chatgpt-alternative", icon: Bot, title: "ChatGPT Alternative", desc: "Ein DSGVO-konformer GPT-Zugang für Ihr Team, statt unkontrollierter Nutzung privater Tools." },
];

function LogoBox({ slug, alt, imgClassName = "w-5 h-5", boxClassName = "" }: { slug: string; alt: string; imgClassName?: string; boxClassName?: string }) {
  return (
    <span className={`inline-flex items-center justify-center bg-white border border-border rounded ${boxClassName}`}>
      <img src={`/img/logos/${slug}.svg`} alt={alt} className={imgClassName} />
    </span>
  );
}

export default function Page() {
  return (
    <>
      <Script id="faq-azure" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-azure" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <LogoBox slug="azure" alt="Azure AI" imgClassName="h-9 w-auto max-w-[2.75rem]" boxClassName="rounded-xl p-2 shadow-sm" />
                    <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                      Azure OpenAI, Enterprise KI
                    </Badge>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Azure OpenAI für Unternehmen, <span className="text-primary">DSGVO-konform in der EU-Cloud</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Wir implementieren Azure OpenAI und Azure AI in Ihrer europäischen Region: GPT-Modelle ohne Datenweitergabe ans US-Training, abgesichert mit RBAC und Private Endpoints und sauber integriert in Ihre bestehende Microsoft-Landschaft. Und wenn self-hosted besser passt, sagen wir es ehrlich.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Assessment</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#vergleich">Azure vs. OpenAI vs. Private AI</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> EU-Region & AVV</span>
                    <span className="flex items-center gap-1.5"><Bot className="w-4 h-4 text-primary" /> GPT-4o & Embeddings</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Hero visual: Azure OpenAI request flow */}
                <div className="relative">
                  <Card className="border-2 shadow-xl shadow-primary/5 overflow-hidden">
                    <CardHeader className="border-b border-border py-3">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center justify-center bg-white border border-border rounded p-1"><Cloud className="w-4 h-4 text-primary" /></span>
                        <span className="font-mono text-xs text-muted-foreground">gpt-eu-region.azure</span>
                        <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> aktiv
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3 rounded-xl border-2 border-primary/40 bg-primary/5 px-3.5 py-2.5">
                        <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0"><Plug className="w-5 h-5 text-primary" /></div>
                        <div className="min-w-0"><div className="text-[10px] uppercase tracking-wider text-primary font-medium">Anfrage</div><div className="text-sm font-semibold truncate">Aus Ihrer App oder Microsoft 365</div></div>
                      </div>
                      {[
                        { icon: Lock, label: "Private Endpoint", title: "Verschlüsselte Verbindung" },
                        { icon: Brain, label: "Azure OpenAI", title: "GPT-4o in EU-Region" },
                        { icon: ShieldCheck, label: "Datenschutz", title: "Keine Weitergabe ans Training" },
                      ].map((n, i) => {
                        const Icon = n.icon;
                        return (
                          <div key={i} className="flex items-center gap-3 rounded-xl border-2 border-border bg-background px-3.5 py-2.5 shadow-sm">
                            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><Icon className="w-5 h-5 text-primary" /></div>
                            <div className="min-w-0 flex-1"><div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">{n.label}</div><div className="text-sm font-semibold truncate">{n.title}</div></div>
                            <Check className="w-4 h-4 text-green-600 shrink-0" />
                          </div>
                        );
                      })}
                    </CardContent>
                  </Card>
                  <div className="hidden lg:flex absolute -top-4 -right-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium">
                    <Cloud className="w-3.5 h-3.5 text-primary" /> EU-Rechenzentrum
                  </div>
                  <div className="hidden lg:flex absolute -bottom-4 -left-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium">
                    <Lock className="w-3.5 h-3.5 text-primary" /> DSGVO-konform
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* STATS */}
          <section className="py-10 md:py-12 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-2 md:grid-cols-4 border-2 border-border rounded-2xl overflow-hidden bg-card">
                {stats.map(({ value, label }, i) => (
                  <div key={i} className="p-6 md:p-8 text-center border-b md:border-b-0 border-r last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r border-border">
                    <div className="text-3xl md:text-4xl font-bold text-primary">{value}</div>
                    <div className="text-xs md:text-sm text-muted-foreground mt-1.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* DEFINITION */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Kurz erklärt</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was ist Azure OpenAI und für wen lohnt es sich?</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Der <strong className="text-foreground">Azure OpenAI Service</strong> bringt die Modelle von OpenAI, etwa <strong className="text-foreground">GPT-4o</strong> und Embedding-Modelle, in die Microsoft Azure Cloud. Statt eines offenen Web-Tools bekommen Sie eine eigene Ressource in einer Region Ihrer Wahl, eingebunden per API in Ihre eigenen Anwendungen.</p>
                    <p>Die Stärke liegt in der Kombination aus <strong className="text-foreground">Enterprise-Kontrolle</strong> und Spitzenmodellen. Sie wählen eine EU-Region, steuern Zugriffe über Microsoft Entra ID, sichern die Verbindung über Private Endpoints und nutzen Modelle, deren Eingaben nicht ins Training fließen. Damit wird KI auch für regulierte Branchen freigabefähig.</p>
                    <p>Genau hier setzen wir an: Wir richten Azure OpenAI <strong className="text-foreground">DSGVO-konform</strong> ein, integrieren es in Ihre Microsoft-Landschaft und beraten ehrlich, wann die Cloud reicht und wann eine self-hosted Private AI der bessere Weg ist. Sie bekommen die Lösung, die zu Ihren Daten und Ihrem Volumen passt.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Azure OpenAI Service</Badge>
                    <Badge variant="secondary" className="rounded-full">Enterprise KI</Badge>
                    <Badge variant="secondary" className="rounded-full">GPT in der EU</Badge>
                    <Badge variant="secondary" className="rounded-full">DSGVO-konforme Cloud</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Azure OpenAI auf einen Blick</CardTitle>
                    <CardDescription>Die wichtigsten Eckdaten im Überblick.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {ataglance.map(([label, value]) => (
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

          {/* PROBLEM -> LÖSUNG */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum Azure OpenAI?</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Wo heute KI blockiert ist, läuft morgen Azure OpenAI</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Überall, wo Datenschutz oder fehlende Integration KI bisher ausgebremst haben, schafft eine kontrollierte EU-Cloud-Umgebung die Grundlage für den produktiven Einsatz.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 pl-1">Was heute passiert</div>
                  {problems.map(({ problem }, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl border bg-background"><X className="w-5 h-5 text-destructive mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{problem}</span></div>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-2 pl-1">Was Azure OpenAI ändert</div>
                  {problems.map(({ solution }, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-primary/20 bg-primary/5"><Check className="w-5 h-5 text-primary mt-0.5 shrink-0" /><span className="text-sm leading-relaxed font-medium">{solution}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* BENTO */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Was wir liefern</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Mehr als nur ein API-Schlüssel</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Wir bauen eine Azure-OpenAI-Umgebung, die produktiv läuft, und denken Datenschutz, Integration und Kosten von Anfang an mit.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="hover-lift border-2 lg:col-span-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2"><Cloud className="w-6 h-6 text-primary" /></div>
                    <CardTitle className="text-xl">{bentoFeatures[0].title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{bentoFeatures[0].description}</CardDescription>
                  </CardHeader>
                </Card>
                {bentoFeatures.slice(1).map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <Card key={i} className="hover-lift border-2">
                      <CardHeader>
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2"><Icon className="w-5 h-5 text-primary" /></div>
                        <CardTitle className="text-lg">{f.title}</CardTitle>
                        <CardDescription className="leading-relaxed">{f.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* USE CASES */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Anwendungsfälle</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Was wir mit Azure OpenAI und Azure AI umsetzen</h2>
                <p className="text-lg text-muted-foreground mt-4">Wählen Sie einen Bereich, wir zeigen konkrete Abläufe aus der Praxis.</p>
              </div>
              <Tabs defaultValue="wissen" className="w-full">
                <TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">
                  {departments.map((d) => {
                    const Icon = d.icon;
                    return (
                      <TabsTrigger key={d.value} value={d.value} className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border">
                        <Icon className="w-4 h-4 mr-1.5" />{d.label}
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
                {departments.map((d) => (
                  <TabsContent key={d.value} value={d.value}>
                    <Card className="border-2">
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-bold mb-2">{d.head}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-5">{d.intro}</p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {d.items.map((item, j) => (
                            <div key={j} className="flex items-start gap-2.5 p-3 rounded-lg border bg-background"><Sparkles className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{item}</span></div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>

          {/* VERGLEICH */}
          <section id="vergleich" className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Vergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Azure OpenAI vs. OpenAI direkt vs. Private AI</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Welcher Weg passt? Das hängt von Ihren Daten, Ihrem Datenschutzanspruch und Ihrem Volumen ab. Wir beraten unabhängig.</p>
              </div>
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[28%] font-bold text-foreground">Merkmal</TableHead>
                      <TableHead className="text-primary font-bold"><span className="inline-flex items-center gap-1.5"><Cloud className="w-4 h-4" />Azure OpenAI (EU)</span></TableHead>
                      <TableHead className="text-muted-foreground"><span className="inline-flex items-center gap-1.5"><Sparkles className="w-4 h-4" />OpenAI (US)</span></TableHead>
                      <TableHead className="text-muted-foreground"><span className="inline-flex items-center gap-1.5"><Server className="w-4 h-4" />Private AI</span></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparison.map((row, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{row.feature}</TableCell>
                        <TableCell className="text-sm text-primary font-medium">{row.azure}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{row.openai}</TableCell>
                        <TableCell className="text-sm">{row.private}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
              <p className="text-sm text-muted-foreground text-center mt-4">Unser Ansatz: Azure OpenAI, wenn Sie schnell starten und Ihre Microsoft-Landschaft nutzen wollen. <a href="/leistungen/private-ai" className="text-primary hover:underline">Private AI</a>, wenn maximale Datensouveränität zählt. Wir empfehlen ehrlich, was zu Ihren Daten passt.</p>
            </div>
          </section>

          {/* PROZESS */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unser Prozess</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Ihr Azure-OpenAI-Projekt in 4 Schritten</h2>
                <p className="text-lg text-muted-foreground mt-4">Transparent, ohne Überraschungen und mit ehrlicher Empfehlung zwischen Cloud und self-hosted.</p>
              </div>
              <ProcessSteps steps={steps} />
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zu Azure OpenAI</h2>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqs.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-2 border-border rounded-xl px-6 bg-background data-[state=open]:border-primary/30 data-[state=open]:bg-primary/5">
                    <AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-5">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* RELATED */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Mehr Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zu Azure AI</h2>
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
