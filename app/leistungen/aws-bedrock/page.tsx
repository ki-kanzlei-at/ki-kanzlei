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
  Cloud, Check, X, Shield, ShieldCheck, Server, MapPin, Code2, Bot, Brain, Network, Lock,
  MessageSquare, FileText, Search, Settings2, Rocket, Phone, Clock, Database, Layers, Boxes, Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AWS Bedrock: Managed LLMs auf AWS für Unternehmen",
  description:
    "AWS Bedrock für Unternehmen: Wir bauen DSGVO-konforme KI-Lösungen auf Amazon Bedrock (Claude, Llama, Titan) in EU-Regionen, ohne Datennutzung fürs Training. Enterprise-Integration, RAG, Guardrails, eingebettet in Ihre AWS-Landschaft im DACH-Raum.",
  keywords:
    "AWS Bedrock, Amazon Bedrock, Bedrock, managed LLM AWS, Enterprise KI AWS, Bedrock DSGVO, Bedrock Claude, Bedrock EU, KI auf AWS, Foundation Models AWS, Bedrock Knowledge Bases, Bedrock Guardrails, AWS LLM, AWS KI Beratung",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/aws-bedrock" },
};

const faqs = [
  {
    q: "Was ist AWS Bedrock?",
    a: "AWS Bedrock ist ein vollständig verwalteter Dienst von Amazon Web Services, über den Unternehmen führende Sprachmodelle nutzen können, ohne eigene Infrastruktur zu betreiben. Über eine einzige Schnittstelle stehen Modelle verschiedener Anbieter bereit, etwa Claude von Anthropic, Llama, Amazon Titan und Mistral. Sie zahlen nutzungsbasiert pro Token und können Modelle je nach Anwendungsfall auswählen oder austauschen. Bedrock fügt sich nahtlos in die bestehende AWS-Umgebung ein, samt Identitäts- und Netzwerksteuerung.",
  },
  {
    q: "Welche Modelle stehen in Amazon Bedrock zur Verfügung?",
    a: "In Amazon Bedrock finden Sie eine wachsende Auswahl an Foundation Models. Dazu zählen die Claude-Modelle von Anthropic, die sich für anspruchsvolle Textaufgaben und Agents eignen, die Llama-Modelle von Meta, die Titan-Modelle von Amazon sowie Modelle von Mistral und weiteren Anbietern. Welche Modelle in Ihrer Region verfügbar sind, prüfen wir gemeinsam. Der große Vorteil: Sie sind nicht an einen Anbieter gebunden und können je Anwendungsfall das passende Modell einsetzen.",
  },
  {
    q: "Ist AWS Bedrock DSGVO-konform einsetzbar?",
    a: "Ja. Bedrock lässt sich in EU-Regionen wie Frankfurt oder Irland betreiben, sodass die Verarbeitung in Europa stattfindet. AWS bietet einen Auftragsverarbeitungsvertrag, und Ihre Eingaben werden nicht zum Training der Modelle verwendet. Für eine saubere DSGVO-Umsetzung kommt es zusätzlich auf die Architektur an: Zugriffssteuerung, Verschlüsselung, Datenminimierung und Guardrails. Genau das richten wir für Sie ein und ordnen ehrlich ein, ob Bedrock für Ihre Daten der richtige Weg ist oder ob eine self-hosted Lösung besser passt.",
  },
  {
    q: "Werden meine Daten zum Training der Modelle verwendet?",
    a: "Nein. Bei Bedrock werden Ihre Eingaben und Ausgaben nicht genutzt, um die zugrunde liegenden Foundation Models zu trainieren oder zu verbessern. Ihre Inhalte bleiben in Ihrer AWS-Umgebung und der gewählten Region. Das ist einer der zentralen Gründe, warum Bedrock für Unternehmen mit sensiblen Daten interessant ist. Wir konfigurieren die Lösung so, dass auch Protokollierung und Speicherung Ihren internen Vorgaben entsprechen.",
  },
  {
    q: "Was ist der Unterschied zwischen Bedrock, Azure OpenAI und Vertex AI?",
    a: "Alle drei sind Managed-Dienste großer Cloud-Anbieter, mit denen Sie LLMs nutzen, ohne Modelle selbst zu betreiben. AWS Bedrock punktet mit einer breiten Modellauswahl mehrerer Anbieter und der Integration in die AWS-Welt. Azure OpenAI ist eng mit den OpenAI-Modellen und Microsoft 365 verzahnt. Google Vertex AI setzt auf die Gemini-Modelle und Google Cloud. Die beste Wahl hängt vor allem davon ab, in welcher Cloud Sie bereits arbeiten. Wir beraten unabhängig und empfehlen das, was zu Ihrem Stack passt.",
  },
  {
    q: "Was kostet AWS Bedrock?",
    a: "Bedrock rechnet nutzungsbasiert ab, in der Regel pro verarbeitetem Token, abhängig vom gewählten Modell. Es gibt keine Grundgebühr für die Plattform selbst, Sie zahlen für das, was Sie tatsächlich nutzen. Für planbare, hohe Lasten gibt es zusätzlich Modelle mit reservierter Kapazität. Die tatsächlichen Kosten hängen stark vom Anwendungsfall, der Textmenge und dem Modell ab. Im Assessment rechnen wir Ihren Fall durch und zeigen, wie sich Kosten über Modellwahl und Architektur steuern lassen.",
  },
  {
    q: "Können Sie Bedrock in unsere bestehende AWS-Umgebung integrieren?",
    a: "Ja, das ist unser Standardweg. Wir binden Bedrock über IAM, VPC und Ihre bestehenden Services an, sodass keine neue Sicherheitsbaustelle entsteht. Daten aus S3, Datenbanken oder internen Systemen lassen sich für RAG anbinden, und Zugriffe laufen über Ihre vorhandene Rechtevergabe. So wird KI ein Baustein Ihrer Landschaft statt eines isolierten Tools.",
  },
  {
    q: "Was sind Knowledge Bases und Guardrails in Bedrock?",
    a: "Knowledge Bases sind die RAG-Funktion von Bedrock: Sie verbinden Ihre Dokumente mit dem Modell, sodass die KI auf Ihrem eigenen Wissen antwortet und Quellen nennt, statt frei zu raten. Guardrails sind Schutzregeln, mit denen Sie festlegen, welche Themen, Daten und Formulierungen erlaubt sind. Zusammen sorgen beide dafür, dass die KI fundiert und im freigegebenen Rahmen antwortet. Wir richten beides passend zu Ihren Inhalten und Richtlinien ein.",
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
  name: "AWS Bedrock Beratung & Implementierung",
  serviceType: "Managed LLM, AWS Bedrock, Enterprise KI auf AWS",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "Managed LLMs auf AWS Bedrock für Unternehmen im DACH-Raum: DSGVO-konforme KI-Lösungen mit Claude, Llama und Titan in EU-Regionen, inklusive RAG, Guardrails und Integration in die bestehende AWS-Landschaft.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const stats = [
  { value: "EU", label: "Regionen, z.B. Frankfurt" },
  { value: "0", label: "Daten fürs Modelltraining" },
  { value: "10+", label: "Foundation Models" },
  { value: "DSGVO", label: "konform umgesetzt" },
];

const ataglance = [
  ["Typ", "Managed LLM-Service"],
  ["Anbieter", "Amazon Web Services"],
  ["Modelle", "Claude, Llama, Titan, Mistral"],
  ["Regionen", "EU, z.B. Frankfurt und Irland"],
  ["Abrechnung", "nutzungsbasiert pro Token"],
  ["DSGVO", "konform mit EU-Region + AVV"],
];

const problems = [
  { problem: "Sie wollen LLMs nutzen, dürfen Mandanten- oder Kundendaten aber nicht in eine US-Cloud geben.", solution: "Bedrock läuft in der EU-Region, Ihre Daten bleiben in Europa und werden nicht fürs Training verwendet." },
  { problem: "Jedes KI-Tool bringt einen eigenen Anbieter, eigene Verträge und eigene Sicherheitsfragen.", solution: "Bedrock bündelt führende Modelle unter einem AWS-Vertrag, eingebettet in Ihre bestehende Landschaft." },
  { problem: "Ein eigenes LLM zu betreiben bindet GPU-Budget, Personal und laufende Wartung.", solution: "Als Managed Service ohne eigene Infrastruktur zahlen Sie nur die tatsächliche Nutzung." },
  { problem: "Die KI antwortet frei und unkontrolliert, ohne Schranken für heikle Themen.", solution: "Mit Guardrails filtern wir Themen, Daten und Tonalität, bevor eine Antwort herausgeht." },
];

const bentoFeatures = [
  { icon: Layers, title: "Ein Zugang zu vielen Modellen", description: "Über Bedrock nutzen Sie Claude von Anthropic, Llama, Amazon Titan, Mistral und weitere Modelle über eine einzige Schnittstelle. Wir wählen je Anwendungsfall das passende Modell, statt Sie an einen Anbieter zu binden, und tauschen es aus, sobald ein besseres erscheint." },
  { icon: Database, title: "RAG auf Ihren Daten", description: "Mit Knowledge Bases verbinden wir Bedrock mit Ihren Dokumenten, sodass die KI auf Ihrem Wissen antwortet, mit Quellenangabe statt frei geraten." },
  { icon: ShieldCheck, title: "Guardrails & Kontrolle", description: "Filter für Themen, sensible Daten und Tonalität sorgen dafür, dass die KI im freigegebenen Rahmen bleibt." },
  { icon: Network, title: "In Ihre AWS-Landschaft integriert", description: "Bedrock greift über VPC, IAM und Ihre bestehenden Services auf Daten zu, ohne neue Sicherheitsbaustelle." },
  { icon: Shield, title: "DSGVO in der EU-Region", description: "Wir setzen Bedrock in Frankfurt oder Irland auf, mit AVV, sodass Ihre Daten in Europa bleiben." },
  { icon: Bot, title: "Agents & Automatisierung", description: "Mit Bedrock Agents lösen Modelle mehrstufige Aufgaben, rufen Tools auf und stoßen Aktionen in Ihren Systemen an." },
];

const departments = [
  { value: "wissen", label: "Wissen", icon: Database, head: "Wissensassistenten & RAG", intro: "Ihre Mitarbeitenden fragen in natürlicher Sprache, die KI antwortet aus Ihrem eigenen Wissen.", items: ["Interne Dokumente, Handbücher und Wikis als Knowledge Base anbinden.", "Antworten mit Quellenangabe, damit nichts erfunden wird.", "Zugriff nach Rolle und Berechtigung steuern.", "Wissen aktuell halten, ohne das Modell neu zu trainieren."] },
  { value: "service", label: "Service", icon: MessageSquare, head: "Kundenservice & Support", intro: "Anfragen werden verstanden, eingeordnet und mit fundierten Antworten beantwortet.", items: ["Eingehende Anfragen automatisch kategorisieren und priorisieren.", "Antwortentwürfe aus Ihrer Wissensbasis erzeugen.", "Mehrsprachigen Support ohne zusätzliches Personal abdecken.", "Guardrails halten die KI im freigegebenen Rahmen."] },
  { value: "dokumente", label: "Dokumente", icon: FileText, head: "Dokumente & Analyse", intro: "Große Mengen Text werden gelesen, zusammengefasst und strukturiert.", items: ["Verträge, Berichte und E-Mails zusammenfassen.", "Relevante Informationen aus PDF und Scans extrahieren.", "Dokumente klassifizieren und automatisch ablegen.", "Auffälligkeiten und Risiken markieren statt alles manuell zu prüfen."] },
  { value: "entwicklung", label: "Entwicklung", icon: Code2, head: "Entwicklung & Produktintegration", intro: "Bedrock bringt KI-Funktionen direkt in Ihre eigenen Anwendungen.", items: ["Sprachmodelle über eine stabile API in Ihre Software einbinden.", "Modelle je Anwendungsfall wählen und bei Bedarf tauschen.", "Prototypen schnell bauen und sauber in die Produktion überführen.", "Kosten und Antwortzeiten je Anfrage überwachen."] },
  { value: "agents", label: "Agents", icon: Bot, head: "AI Agents & Automatisierung", intro: "Modelle lösen nicht nur Textaufgaben, sie stoßen Aktionen in Ihren Systemen an.", items: ["Mehrstufige Aufgaben über Bedrock Agents abbilden.", "Tools und APIs aus dem Modell heraus aufrufen.", "Daten abfragen, verarbeiten und zurückschreiben.", "Abläufe mit klaren Grenzen und Protokollierung absichern."] },
  { value: "compliance", label: "Compliance", icon: Shield, head: "Sicherheit & Compliance", intro: "KI lässt sich auch dort einsetzen, wo Datenschutz und Nachvollziehbarkeit zählen.", items: ["Modelle in EU-Regionen betreiben, Daten bleiben in Europa.", "Zugriffe über IAM steuern und protokollieren.", "Guardrails für Themen, sensible Daten und Tonalität definieren.", "Auftragsverarbeitung und Dokumentation für die DSGVO bereitstellen."] },
];

const comparison = [
  { feature: "Modellauswahl", bedrock: "Claude, Llama, Titan, Mistral u.a.", azure: "vor allem OpenAI-Modelle", vertex: "Gemini plus Modellgarten" },
  { feature: "EU-Region & Hosting", bedrock: "EU, z.B. Frankfurt und Irland", azure: "EU-Regionen verfügbar", vertex: "EU-Regionen verfügbar" },
  { feature: "Daten fürs Training", bedrock: "werden nicht genutzt", azure: "werden nicht genutzt", vertex: "werden nicht genutzt" },
  { feature: "Integration", bedrock: "tief in AWS (IAM, VPC, S3)", azure: "tief in Azure und Microsoft 365", vertex: "tief in Google Cloud" },
  { feature: "RAG out of the box", bedrock: "Knowledge Bases", azure: "Azure AI Search", vertex: "Vertex AI Search" },
  { feature: "Guardrails", bedrock: "nativ enthalten", azure: "Content-Filter", vertex: "Safety-Filter" },
  { feature: "Ideal, wenn", bedrock: "Sie bereits auf AWS sind", azure: "Ihr Stack bei Microsoft liegt", vertex: "Ihr Stack bei Google liegt" },
];

const steps = [
  { step: "01", icon: Phone, title: "Kostenlose Erstanalyse", time: "30 Minuten", description: "Wir klären Ihren Anwendungsfall, Ihre Datenlage und ob Sie bereits auf AWS sind. Sie wissen danach, ob Bedrock der richtige Weg ist." },
  { step: "02", icon: Search, title: "Architektur & Modellwahl", time: "Woche 1", description: "Wir entwerfen die Lösung: Region, Modelle, RAG-Quellen, Guardrails und Anbindung an Ihre Systeme, inklusive ehrlicher Einordnung gegenüber Azure, Vertex und self-hosted." },
  { step: "03", icon: Settings2, title: "Umsetzung & Test", time: "Woche 2 bis 4", description: "Wir bauen die Lösung in Ihrer AWS-Umgebung, binden Daten an, richten Guardrails ein und testen mit echten Anfragen." },
  { step: "04", icon: Rocket, title: "Go-Live & Betreuung", time: "ab Woche 4", description: "Die Lösung geht live. Wir überwachen Kosten, Qualität und Sicherheit und bauen weitere Use Cases dazu." },
];

const related = [
  { href: "/leistungen/azure-ai", icon: Cloud, title: "Azure OpenAI & Azure AI", desc: "GPT-Modelle und KI-Dienste in der Microsoft-Cloud, tief integriert in Azure und Microsoft 365." },
  { href: "/leistungen/vertex-ai", icon: Boxes, title: "Google Vertex AI", desc: "Gemini und der Modellgarten von Google Cloud für KI-Lösungen im Unternehmen." },
  { href: "/leistungen/private-ai", icon: Server, title: "Private AI & Lokale KI", desc: "Eigene Modelle on-premises oder in Ihrer Cloud, wenn Daten Ihr Haus gar nicht verlassen dürfen." },
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
      <Script id="faq-bedrock" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-bedrock" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <LogoBox slug="aws" alt="AWS Bedrock" imgClassName="h-9 w-auto max-w-[2.75rem]" boxClassName="rounded-xl p-2 shadow-sm" />
                    <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                      AWS Bedrock, Managed LLMs auf AWS
                    </Badge>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    AWS Bedrock für Unternehmen, <span className="text-primary">DSGVO-konform in der EU</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Wir bauen Ihre KI-Lösungen auf Amazon Bedrock: führende Modelle wie Claude, Llama und Titan über eine Schnittstelle, in EU-Regionen gehostet, ohne dass Ihre Daten fürs Training verwendet werden. RAG, Guardrails und Enterprise-Integration, eingebettet in Ihre bestehende AWS-Landschaft.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Assessment</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#vergleich">Bedrock vs. Azure vs. Vertex</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform in der EU</span>
                    <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-primary" /> In Ihre AWS-Landschaft integriert</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Hero visual: RAG-Pipeline auf Bedrock */}
                <div className="relative">
                  <Card className="border-2 shadow-xl shadow-primary/5 overflow-hidden">
                    <CardHeader className="border-b border-border py-3">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center justify-center bg-primary/10 border border-primary/20 rounded p-1">
                          <Cloud className="w-4 h-4 text-primary" />
                        </span>
                        <span className="font-mono text-xs text-muted-foreground">enterprise-rag.bedrock</span>
                        <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> aktiv
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3 rounded-xl border-2 border-primary/40 bg-primary/5 px-3.5 py-2.5">
                        <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0"><Cloud className="w-5 h-5 text-primary" /></div>
                        <div className="min-w-0"><div className="text-[10px] uppercase tracking-wider text-primary font-medium">Anfrage</div><div className="text-sm font-semibold truncate">Frage an Bedrock</div></div>
                      </div>
                      {[
                        { icon: Database, label: "RAG", title: "Wissensbasis abfragen" },
                        { icon: Brain, label: "Modell", title: "Claude erzeugt Antwort" },
                        { icon: ShieldCheck, label: "Guardrail", title: "Antwort wird geprüft" },
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
                    <Layers className="w-3.5 h-3.5 text-primary" /> 10+ Modelle
                  </div>
                  <div className="hidden lg:flex absolute -bottom-4 -left-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium">
                    <Lock className="w-3.5 h-3.5 text-primary" /> Daten bleiben in der EU
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was ist AWS Bedrock und für wen lohnt es sich?</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p><strong className="text-foreground">AWS Bedrock</strong> ist der Managed-Service von Amazon Web Services, über den Sie führende Sprachmodelle nutzen, ohne eigene Infrastruktur zu betreiben. Statt ein einzelnes LLM einzukaufen, greifen Sie über eine API auf Modelle wie Claude von Anthropic, Llama, Amazon Titan und Mistral zu.</p>
                    <p>Der Reiz von <strong className="text-foreground">Amazon Bedrock</strong> liegt in der Kombination aus Modellvielfalt und AWS-Integration. Daten, Identitäten und Netzwerk bleiben in Ihrer gewohnten AWS-Umgebung, die Modelle laufen in EU-Regionen, und Ihre Eingaben werden nicht zum Training verwendet. Das macht Bedrock zu einer ernsthaften Option für <strong className="text-foreground">Enterprise-KI auf AWS</strong>.</p>
                    <p>Wir bauen auf dieser Basis konkrete Lösungen: <strong className="text-foreground">RAG</strong> auf Ihren Dokumenten, Guardrails für sichere Antworten und Agents für mehrstufige Aufgaben. Und wir ordnen ehrlich ein, wann ein <strong className="text-foreground">Managed LLM auf AWS</strong> der richtige Weg ist und wann Azure, Vertex oder eine self-hosted Lösung besser passt.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Amazon Bedrock</Badge>
                    <Badge variant="secondary" className="rounded-full">Managed LLM</Badge>
                    <Badge variant="secondary" className="rounded-full">Enterprise KI auf AWS</Badge>
                    <Badge variant="secondary" className="rounded-full">RAG & Guardrails</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">AWS Bedrock auf einen Blick</CardTitle>
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
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum Bedrock?</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Wo heute Bedenken sind, steht morgen eine sichere KI</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Überall, wo Datenschutz, Modellauswahl oder Integration bisher gegen den Einsatz von KI sprachen, schafft Bedrock eine saubere Grundlage.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 pl-1">Was heute bremst</div>
                  {problems.map(({ problem }, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl border bg-background"><X className="w-5 h-5 text-destructive mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{problem}</span></div>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-2 pl-1">Was Bedrock möglich macht</div>
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
                <h2 className="text-3xl md:text-4xl font-bold">Mehr als ein API-Key</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Wir liefern keine Demo, sondern eine produktive KI-Lösung auf Bedrock: mit Ihren Daten, Ihren Sicherheitsregeln und Ihrer AWS-Umgebung im Hintergrund.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="hover-lift border-2 lg:col-span-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2"><Layers className="w-6 h-6 text-primary" /></div>
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
                <h2 className="text-3xl md:text-4xl font-bold">Was wir mit AWS Bedrock umsetzen</h2>
                <p className="text-lg text-muted-foreground mt-4">Wählen Sie einen Bereich, wir zeigen konkrete Lösungen aus der Praxis.</p>
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
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Plattform-Vergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">AWS Bedrock vs. Azure OpenAI vs. Vertex AI</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Welche Plattform passt? Das hängt vor allem davon ab, in welcher Cloud Sie bereits arbeiten und wie streng Ihre Datenschutzanforderungen sind. Wir beraten unabhängig.</p>
              </div>
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[28%] font-bold text-foreground">Merkmal</TableHead>
                      <TableHead className="text-primary font-bold"><span className="inline-flex items-center gap-1.5"><Cloud className="w-4 h-4" />AWS Bedrock</span></TableHead>
                      <TableHead className="text-muted-foreground">Azure OpenAI</TableHead>
                      <TableHead className="text-muted-foreground">Vertex AI</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparison.map((row, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{row.feature}</TableCell>
                        <TableCell className="text-sm text-primary font-medium">{row.bedrock}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{row.azure}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{row.vertex}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
              <p className="text-sm text-muted-foreground text-center mt-4">Unser Ansatz: Wenn Sie bereits auf AWS sind, ist Bedrock oft der direkteste Weg zu Enterprise-KI. Liegt Ihr Stack bei Microsoft oder Google, sind Azure oder Vertex die natürlichere Wahl. Dürfen Daten Ihr Haus gar nicht verlassen, beraten wir Sie zu einer <a href="/leistungen/private-ai" className="text-primary hover:underline">self-hosted Private-AI-Lösung</a>.</p>
            </div>
          </section>

          {/* PROZESS */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unser Prozess</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Ihr Bedrock-Projekt in 4 Schritten</h2>
                <p className="text-lg text-muted-foreground mt-4">Transparent, ohne Überraschungen und mit ehrlicher Plattform-Empfehlung.</p>
              </div>
              <ProcessSteps steps={steps} />
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zu AWS Bedrock</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zu AWS Bedrock</h2>
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
