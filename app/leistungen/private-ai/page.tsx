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
import { serviceLogos } from "@/lib/serviceLogos";
import {
  Lock,
  Server,
  Shield,
  ShieldCheck,
  Eye,
  Globe,
  CheckCircle,
  Check,
  X,
  Search,
  Brain,
  Cpu,
  Stethoscope,
  Scale,
  Calculator,
  Landmark,
  Building2,
  Briefcase,
  Database,
  MessageSquare,
  HardDrive,
  CloudOff,
  MapPin,
  FileText,
  Mail,
  Code,
  Workflow,
  KeyRound,
  Boxes,
  Gauge,
  Rocket,
  Layers,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Private AI & Lokale KI: DSGVO-konforme KI ohne Cloud",
  description:
    "Private AI für Unternehmen: lokale KI ohne Cloud, volle Datensouveränität und 100% DSGVO-konform. On-Premise, Private Cloud oder EU-Server, Open-Source-Modelle wie Llama 4, Mistral und Qwen, kein Vendor Lock-in, betreut von der KI Kanzlei.",
  keywords:
    "Private AI, Private KI, lokale KI, KI ohne Cloud, on premise KI, eigene KI, KI Datensouveränität, KI DSGVO, private KI Infrastruktur, KI lokal betreiben, Enterprise AI, KI Unternehmen, Llama lokal, Mistral lokal, Open Source KI Unternehmen, Private AI Österreich, Private AI Deutschland, Private AI Schweiz, lokale KI DACH, Private KI DACH, KI ohne Cloud DACH, DSGVO konforme KI Deutschland, Deutschland, Schweiz, DACH",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/private-ai" },
};

const faqs = [
  {
    q: "Was ist Private AI?",
    a: "Private AI bezeichnet KI-Systeme, die vollständig auf Ihrer eigenen Infrastruktur oder in einer für Sie reservierten privaten Umgebung betrieben werden, ohne dass Ihre Daten externe Dienste wie OpenAI, Google oder Microsoft erreichen. Sie erhalten die volle Leistung moderner Sprachmodelle bei vollständiger Datenkontrolle, eindeutiger Datenhaltung in Österreich oder der EU und nachvollziehbarer Protokollierung.",
  },
  {
    q: "Was ist der Unterschied zwischen Private AI und Cloud AI?",
    a: "Cloud AI wie ChatGPT oder Gemini sendet jede Anfrage an externe Server, häufig außerhalb der EU. Private AI läuft lokal oder in Ihrer eigenen Cloud, Ihre Inhalte verlassen niemals Ihre Infrastruktur. Das ist entscheidend für DSGVO-Compliance, für Berufsgeheimnisse von Anwälten und Ärzten und für jede Art von sensiblen Unternehmens- und Mandantendaten.",
  },
  {
    q: "Welche KI-Modelle können lokal betrieben werden?",
    a: "Moderne Open-Source-Modelle wie Llama 4, Mistral, Qwen, DeepSeek und Gemma erreichen heute ein Niveau, das mit ChatGPT vergleichbar ist, und lassen sich vollständig lokal oder auf EU-Servern betreiben. Wir wählen Größe und Modell passend zu Ihrem Anwendungsfall, von kompakten Modellen für einzelne Aufgaben bis zu großen Modellen für anspruchsvolle Analysen.",
  },
  {
    q: "Für wen ist Private AI besonders wichtig?",
    a: "Private AI ist besonders wichtig für Organisationen mit strengen Datenschutzanforderungen: Ärzte und Kliniken mit Patientendaten, Rechtsanwälte mit Mandantengeheimnissen, Steuerberater mit Finanzdaten, Banken und Versicherungen mit regulatorischen Vorgaben wie DORA und MaRisk, öffentliche Verwaltung mit Bürgerdaten sowie jedes KMU mit schützenswerten Geschäftsgeheimnissen.",
  },
  {
    q: "Was kostet die Implementierung einer Private AI Lösung?",
    a: "Cloud-basierte EU-Lösungen starten ab einigen hundert Euro pro Monat. On-Premise-Lösungen mit eigener GPU-Hardware kalkulieren wir individuell, da Hardware, Modellgröße und Nutzerzahl den Aufwand bestimmen. Im kostenlosen Erstgespräch analysieren wir Ihren Bedarf und erstellen ein transparentes Angebot mit klaren Betriebskosten, ohne überraschende Nutzungsgebühren.",
  },
  {
    q: "Brauche ich für Private AI eigene Hardware oder GPUs?",
    a: "Nicht zwingend. Für echtes On-Premise betreiben wir die KI auf Ihrer eigenen GPU-Hardware im Haus. Möchten Sie keine Hardware anschaffen, betreiben wir dieselbe Lösung auf einem dedizierten Server in einem österreichischen oder EU-Rechenzentrum. In beiden Fällen bleiben Ihre Daten getrennt von anderen Kunden und unter Ihrer Kontrolle.",
  },
  {
    q: "Erreicht lokale KI wirklich das Niveau von ChatGPT?",
    a: "Für die allermeisten Geschäftsanwendungen ja. Aktuelle Open-Source-Modelle liefern bei Textgenerierung, Zusammenfassung, Klassifizierung und Beantwortung von Fachfragen Ergebnisse auf vergleichbarem Niveau. In Kombination mit einer Wissensdatenbank über Ihre eigenen Dokumente sind die Antworten oft sogar präziser, weil das Modell auf Ihr internes Wissen zugreift statt nur auf Allgemeinwissen.",
  },
  {
    q: "Wie wird Private AI in bestehende Systeme integriert?",
    a: "Wir binden die Private AI dort an, wo Ihr Team bereits arbeitet: SharePoint, Microsoft Teams, Outlook, gängige ERP- und CRM-Systeme sowie Fachanwendungen. Über Schnittstellen und Automatisierungen mit n8n verbinden wir die KI mit Ihren Datenquellen, sodass Mitarbeitende ohne neue Tools sofort produktiv sind.",
  },
  {
    q: "Wie lange dauert die Einführung einer Private AI?",
    a: "Eine erste produktive Lösung steht in der Regel innerhalb von zwei bis vier Wochen. Nach dem Assessment wählen wir Modell und Deployment, richten die Umgebung ein, integrieren Ihre Systeme und testen mit echten Anwendungsfällen. Danach folgt der laufende Betrieb mit Updates und Optimierung.",
  },
  {
    q: "Wer betreibt und wartet die Private AI im laufenden Betrieb?",
    a: "Auf Wunsch übernimmt die KI Kanzlei den vollständigen Betrieb als Managed Service: Updates der Modelle, Monitoring, Sicherheit und laufende Optimierung. Sie behalten jederzeit die volle Datenhoheit, wir kümmern uns um den technischen Unterbau, damit Ihre KI aktuell, stabil und sicher bleibt.",
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
  name: "Private AI & Lokale KI",
  serviceType: "Private AI, lokale KI, On-Premise KI",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "Private AI für Unternehmen im DACH-Raum: lokale KI ohne Cloud, volle Datensouveränität und 100% DSGVO-konform. On-Premise, Private Cloud oder EU-Server mit Open-Source-Modellen.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const stats = [
  { v: "100%", l: "Datensouveränität, Ihre Daten bleiben im Haus" },
  { v: "0", l: "Byte an US-Anbieter weitergegeben" },
  { v: "AT/EU", l: "Hosting-Standort vertraglich garantiert" },
  { v: "Open", l: "Source-Modelle, kein Vendor Lock-in" },
];

const keyProps = [
  { label: "Deployment", value: "On-Premise, Private Cloud oder EU-Server" },
  { label: "Modelle", value: "Llama 4, Mistral, Qwen, DeepSeek (Open Source)" },
  { label: "Datenhaltung", value: "100% in Ihrer eigenen Infrastruktur" },
  { label: "Integration", value: "SharePoint, Teams, Outlook, ERP, CRM" },
  { label: "Qualität", value: "vergleichbar mit ChatGPT" },
  { label: "Betrieb", value: "Managed Service durch KI Kanzlei" },
  { label: "Vendor Lock-in", value: "keiner, Modell jederzeit wechselbar" },
];

const deployments = [
  {
    icon: HardDrive,
    name: "On-Premise",
    badge: "Maximale Kontrolle",
    desc: "Die KI läuft auf Ihrer eigenen GPU-Hardware in Ihrem Haus. Daten verlassen Ihr Netzwerk physisch nie, ideal bei höchsten Geheimhaltungsanforderungen.",
    points: ["Eigene GPU-Server im Haus", "Volle physische Datenkontrolle", "Auch ohne Internet betreibbar"],
  },
  {
    icon: Server,
    name: "Private Cloud",
    badge: "Dediziert & flexibel",
    desc: "Eine für Sie reservierte, isolierte Umgebung bei einem EU-Provider. Keine geteilte Infrastruktur, schnell skalierbar und ohne Anschaffung eigener Hardware.",
    points: ["Dedizierte, isolierte Instanz", "Flexibel skalierbar", "Keine eigene Hardware nötig"],
  },
  {
    icon: MapPin,
    name: "EU-Managed-Server",
    badge: "Schnellster Start",
    desc: "Betrieb in einem österreichischen oder EU-Rechenzentrum, vollständig von der KI Kanzlei betreut. Der schnellste Weg zu einer datensouveränen KI.",
    points: ["Hosting in AT/EU", "Komplett gemanagt", "In wenigen Wochen live"],
  },
];

const benefits = [
  {
    icon: Lock,
    title: "Vollständige Datensouveränität",
    description:
      "Ihre Daten verlassen niemals Ihre Infrastruktur. Es gibt kein Training mit Ihren Inhalten, keine Datenweitergabe an Dritte und keine versteckte Speicherung. Sie behalten zu jeder Zeit die volle Kontrolle über jede Information.",
  },
  {
    icon: Shield,
    title: "100% DSGVO-konform",
    description:
      "Datenverarbeitung ausschließlich in Österreich oder der EU, abgesichert mit Auftragsverarbeitungsvertrag. Ideal für Ärzte, Anwälte, Steuerberater, Banken und alle Organisationen mit sensiblen Daten.",
  },
  {
    icon: KeyRound,
    title: "Kein Vendor Lock-in",
    description:
      "Open-Source-Modelle ohne Abhängigkeit von einem einzelnen Tech-Konzern. Wechseln Sie das Modell jederzeit, ohne Ihre Daten oder Prozesse neu aufbauen zu müssen.",
  },
  {
    icon: Globe,
    title: "Nahtlose Integration",
    description:
      "Anbindung an SharePoint, Teams, Outlook, ERP und CRM. Die Private AI funktioniert dort, wo Ihr Team schon arbeitet, ohne neue Tools und ohne Bruch im Arbeitsalltag.",
  },
  {
    icon: Gauge,
    title: "Planbare Kosten",
    description:
      "Transparente, fixe Betriebskosten statt schwer planbarer Nutzungsgebühren pro Anfrage. Sie wissen von Anfang an, was Ihre KI kostet, unabhängig vom Nutzungsvolumen.",
  },
  {
    icon: ShieldCheck,
    title: "EU AI Act ready",
    description:
      "Risikoklassifizierung, Transparenz- und Aufsichtspflichten sind von Beginn an mitgedacht. So bleibt Ihre KI nicht nur datenschutzkonform, sondern auch regulatorisch zukunftssicher.",
  },
];

const comparison = [
  {
    feature: "Datensouveränität",
    cloud: { text: "Daten gehen an externe Anbieter", good: false },
    oss: { text: "Daten bleiben im eigenen Haus", good: true },
    privat: { text: "Daten bleiben vollständig bei Ihnen", good: true },
  },
  {
    feature: "EU-Hosting / DSGVO",
    cloud: { text: "oft US-Server, DSGVO-kritisch", good: false },
    oss: { text: "abhängig von eigener Infrastruktur", good: false },
    privat: { text: "AT/EU-Hosting garantiert", good: true },
  },
  {
    feature: "Kosten-Transparenz",
    cloud: { text: "nutzungsbasiert, schwer planbar", good: false },
    oss: { text: "Hardware und Betrieb selbst tragen", good: false },
    privat: { text: "transparent kalkuliert, planbar", good: true },
  },
  {
    feature: "Vendor Lock-in",
    cloud: { text: "hoch, Modell und API des Anbieters", good: false },
    oss: { text: "keiner, Open-Source-Modelle", good: true },
    privat: { text: "keiner, jederzeit wechselbar", good: true },
  },
  {
    feature: "Betrieb & Wartung",
    cloud: { text: "vom Anbieter übernommen", good: true },
    oss: { text: "komplett in Eigenregie", good: false },
    privat: { text: "managed durch KI Kanzlei", good: true },
  },
  {
    feature: "Integration in Ihre Systeme",
    cloud: { text: "begrenzt, nach Anbieter-Vorgabe", good: false },
    oss: { text: "möglich, aber Eigenleistung", good: false },
    privat: { text: "tief in SharePoint, Teams, ERP", good: true },
  },
  {
    feature: "EU AI Act Readiness",
    cloud: { text: "anbieterabhängig", good: false },
    oss: { text: "selbst nachzuweisen", good: false },
    privat: { text: "von Anfang an mitgedacht", good: true },
  },
];

const models = [
  { name: "Llama 4", vendor: "Meta", strength: "Vielseitiges Allround-Modell für Chat, Analyse und Textarbeit", size: "klein bis sehr groß" },
  { name: "Mistral", vendor: "Mistral AI (EU)", strength: "Effizient und schnell, starkes Preis-Leistungs-Verhältnis", size: "kompakt bis groß" },
  { name: "Qwen", vendor: "Alibaba", strength: "Sehr stark bei Mehrsprachigkeit und langen Dokumenten", size: "kompakt bis sehr groß" },
  { name: "DeepSeek", vendor: "DeepSeek", strength: "Ausgeprägte Stärke bei Logik, Code und Reasoning", size: "mittel bis groß" },
  { name: "Gemma", vendor: "Google", strength: "Schlanke Modelle, ideal für lokale Geräte und schnelle Antworten", size: "sehr kompakt" },
];

const techStack: { icon: LucideIcon; logo?: string; logoAlt?: string; name: string; desc: string }[] = [
  { icon: Cpu, logo: "ollama", logoAlt: "Ollama", name: "Ollama & vLLM", desc: "Bewährte Laufzeitumgebungen, um Open-Source-Modelle effizient lokal und auf GPU-Servern auszuführen." },
  { icon: Database, name: "RAG & Vektordatenbank", desc: "Anbindung Ihres Firmenwissens, damit die KI auf Ihre Dokumente antwortet, statt zu raten." },
  { icon: Workflow, logo: "n8n", logoAlt: "n8n", name: "n8n Automatisierung", desc: "Verbindet die KI mit Ihren Systemen und automatisiert wiederkehrende Abläufe Ende zu Ende." },
  { icon: Layers, name: "GPU-Infrastruktur", desc: "Dimensionierung und Betrieb der Hardware, lokal oder in einem EU-Rechenzentrum." },
  { icon: Eye, name: "Monitoring & Logging", desc: "Nachvollziehbare Protokollierung und Überwachung für Stabilität, Sicherheit und Audits." },
  { icon: ShieldCheck, name: "Zugriffs- & Rechtekonzept", desc: "Feingranulare Rollen und Rechte, damit jeder nur sieht, was er sehen darf." },
];

const useCases = [
  { icon: FileText, title: "Dokumente & Verträge", desc: "Verträge, Akten und Berichte zusammenfassen, prüfen und durchsuchen, ohne dass ein einziges Dokument das Haus verlässt." },
  { icon: MessageSquare, title: "Interner KI-Assistent", desc: "Ein firmeneigener Chatbot, der Fragen zu internen Richtlinien, Prozessen und Wissen sofort und korrekt beantwortet." },
  { icon: Mail, title: "E-Mails & Schriftsätze", desc: "Entwürfe für Korrespondenz, Angebote und Schreiben auf Basis Ihrer Vorlagen und Ihres Tonfalls erstellen." },
  { icon: Database, title: "Wissensdatenbank (RAG)", desc: "Antworten direkt aus Ihren eigenen Dokumenten, mit Quellenangabe und vollständig auf eigener Infrastruktur." },
  { icon: Code, title: "Code & Entwicklung", desc: "Ein lokaler Coding-Assistent für Ihr Entwicklungsteam, ohne dass Quellcode an externe Dienste gelangt." },
  { icon: Boxes, title: "Daten extrahieren & sortieren", desc: "Strukturierte Daten aus Formularen, Rechnungen und Mails ziehen, klassifizieren und in Ihre Systeme übergeben." },
];

const audience = [
  { value: "medizin", label: "Medizin", icon: Stethoscope, head: "Ärzte & Arztpraxen", text: "Patientendaten sind hochsensibel und unterliegen der ärztlichen Schweigepflicht. Private AI stellt sicher, dass keine Gesundheitsdaten externe Server erreichen, und unterstützt zugleich bei Befunden, Dokumentation und Patientenkommunikation." },
  { value: "legal", label: "Legal", icon: Scale, head: "Rechtsanwälte & Notare", text: "Mandantengeheimnisse, Verträge und Schriftsätze dürfen niemals externe KI-Dienste passieren. Mit Private AI recherchieren, fassen zusammen und entwerfen Sie Dokumente, ohne die anwaltliche Verschwiegenheit zu gefährden." },
  { value: "steuer", label: "Steuer", icon: Calculator, head: "Steuerberater & Wirtschaftsprüfer", text: "Finanzdaten, Bilanzen und Steuererklärungen gehören auf private Infrastruktur, nicht in eine fremde Cloud. Private AI beschleunigt Auswertung und Korrespondenz bei voller Vertraulichkeit." },
  { value: "finance", label: "Finance", icon: Landmark, head: "Banken & Versicherungen", text: "Regulatorische Anforderungen wie DORA und MaRisk verlangen volle Datenkontrolle und EU-Hosting. Private AI erfüllt diese Vorgaben und automatisiert dennoch Analyse, Reporting und Kundenkommunikation." },
  { value: "public", label: "Public", icon: Building2, head: "Öffentliche Verwaltung", text: "Behörden- und Bürgerdaten müssen auf österreichischen oder EU-Servern verbleiben. Private AI bringt moderne KI in die Verwaltung, ohne die Datenhoheit aufzugeben." },
  { value: "kmu", label: "KMU", icon: Briefcase, head: "KMU mit sensiblen Daten", text: "Ob Produktionsdaten, Kundenstamm oder Geschäftsgeheimnisse: Private AI schützt das Wissen, das Ihren Wettbewerbsvorteil ausmacht, und macht es zugleich nutzbar." },
];

const steps = [
  { step: "01", icon: Search, title: "Assessment", time: "30 Minuten", desc: "Wir analysieren Ihre Datenschutzanforderungen, Anwendungsfälle und bestehende Infrastruktur und identifizieren die Stellen mit dem größten Nutzen. Sie erhalten eine klare Einschätzung, welche Daten besonders schützenswert sind und wo Private AI sofort Wirkung zeigt." },
  { step: "02", icon: Brain, title: "Modell- & Deployment-Wahl", time: "Woche 1", desc: "Wir wählen das passende Open-Source-Modell und das richtige Deployment, ob On-Premise, Private Cloud oder EU-Server. Dabei wägen wir Qualität, Geschwindigkeit, Kosten und Ihre Sicherheitsanforderungen sorgfältig gegeneinander ab." },
  { step: "03", icon: Server, title: "Deployment & Integration", time: "Wochen 2 bis 4", desc: "Installation in Ihrer gewählten Umgebung, inklusive Anbindung an SharePoint, Teams, Outlook, ERP und CRM sowie Aufbau Ihrer Wissensdatenbank. Rollen, Rechte und Protokollierung werden von Beginn an sauber eingerichtet." },
  { step: "04", icon: Rocket, title: "Go-Live & Managed Service", time: "laufend", desc: "Nach Tests mit echten Anwendungsfällen geht Ihre Private AI live. Wir übernehmen auf Wunsch Updates, Monitoring, Sicherheit und laufende Optimierung, damit die KI aktuell, stabil und vollständig unter Ihrer Kontrolle bleibt." },
];

const compliance = [
  "DSGVO-konform, Verarbeitung in AT/EU",
  "EU AI Act ready, Transparenzpflichten erfüllt",
  "Keine Datenweitergabe an Dritte",
  "Kein Training mit Ihren Daten",
];

const relatedServices = [
  { href: "/chatgpt-alternative", icon: MessageSquare, tag: "Alternative", title: "ChatGPT Alternative", desc: "DSGVO-konforme Alternativen zu ChatGPT, die volle Leistung moderner KI, ohne Ihre Daten an US-Anbieter zu senden." },
  { href: "/ki-wissensdatenbank", icon: Database, tag: "RAG", title: "KI Wissensdatenbank", desc: "Geben Sie Ihrer Private AI Zugriff auf Ihr Firmenwissen, über ein DSGVO-konformes RAG-System auf eigener Infrastruktur." },
  { href: "/n8n-automatisierung", icon: Workflow, tag: "Automatisierung", title: "n8n Automatisierung", desc: "Verbinden Sie Ihre Private AI mit ERP, CRM und Fachsystemen und automatisieren Sie Abläufe Ende zu Ende." },
];

function LogoBox({ slug, alt, boxClassName, imgClassName }: { slug: string; alt: string; boxClassName: string; imgClassName: string }) {
  return (
    <div className={`${boxClassName} rounded-xl bg-white border border-border flex items-center justify-center`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/img/logos/${slug}.svg`} alt={alt} className={imgClassName} />
    </div>
  );
}

export default function Page() {
  return (
    <>
      <Script id="faq-private-ai" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-private-ai" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <style>{`
        @keyframes paScan { 0% { top: 8%; opacity: 0; } 12% { opacity: 1; } 88% { opacity: 1; } 100% { top: 92%; opacity: 0; } }
        .pa-scan { animation: paScan 3.2s ease-in-out infinite; }
      `}</style>

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="rounded-full mb-1 bg-primary/10 text-primary border-primary/20">
                    Private AI, Lokale KI, On-Premise
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Private AI, lokale KI <span className="text-primary">ohne Cloud</span>, 100% DSGVO-konform
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Nutzen Sie die volle Leistung moderner KI, ohne sensible Daten in eine fremde Cloud zu senden. Ihre eigene KI, auf Ihrer eigenen Infrastruktur, vollständig unter Ihrer Kontrolle. Gemacht für Ärzte, Anwälte, Steuerberater, Banken und KMU mit echten Datenschutzanforderungen.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Erstgespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#vergleich">Private vs. Cloud AI</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-primary" /> EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><KeyRound className="w-4 h-4 text-primary" /> Kein Vendor Lock-in</span>
                  </div>
                </div>

                {/* Bespoke hero visual: On-Premise / Compliance-Check */}
                <Card className="relative border-2 shadow-xl shadow-primary/5 overflow-hidden">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                        <ShieldCheck className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">Compliance-Check</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> Datenfluss geprüft
                        </div>
                      </div>
                      <span className="ml-auto text-[10px] uppercase tracking-wider text-muted-foreground font-medium">On-Premise</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-4">
                    {/* Boundary diagram */}
                    <div className="relative rounded-2xl border-2 border-dashed border-primary/40 bg-primary/5 p-4">
                      <span className="pa-scan absolute left-3 right-3 h-px bg-primary/50" aria-hidden />
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-primary flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" /> Ihre Infrastruktur, AT/EU
                        </span>
                        <Lock className="w-4 h-4 text-primary" />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="rounded-xl bg-card border border-border px-3 py-2.5 flex items-center gap-2">
                          <Brain className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-xs font-medium leading-tight">KI-Modell<br /><span className="text-muted-foreground font-normal">Llama 4 lokal</span></span>
                        </div>
                        <div className="rounded-xl bg-card border border-border px-3 py-2.5 flex items-center gap-2">
                          <Database className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-xs font-medium leading-tight">Ihre Daten<br /><span className="text-muted-foreground font-normal">bleiben im Haus</span></span>
                        </div>
                      </div>
                    </div>

                    {/* Blocked external cloud */}
                    <div className="flex items-center gap-3 rounded-xl border border-border bg-muted/30 px-3 py-2.5">
                      <CloudOff className="w-5 h-5 text-muted-foreground shrink-0" />
                      <span className="text-xs text-muted-foreground leading-tight">Externe US-Cloud</span>
                      <span className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-foreground">
                        <X className="w-3.5 h-3.5 text-red-500" /> blockiert
                      </span>
                    </div>

                    {/* Compliance checklist */}
                    <div className="space-y-2">
                      {compliance.map((c) => (
                        <div key={c} className="flex items-center gap-2.5">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-xs text-foreground">{c}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-[11px] text-center text-muted-foreground pt-1 border-t border-border">
                      DSGVO, AVV, Datenhaltung in Österreich und der EU
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
                {stats.map((s, i) => (
                  <div key={i} className="p-6 md:p-8 text-center border-b lg:border-b-0 border-border [&:nth-child(odd)]:border-r lg:[&:not(:last-child)]:border-r">
                    <div className="text-3xl md:text-4xl font-bold text-primary">{s.v}</div>
                    <div className="text-xs md:text-sm text-muted-foreground mt-2 leading-snug">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* DEFINITION 2col + Info-Card */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Definition</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Warum Private AI statt Cloud KI?</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      <strong className="text-foreground">Cloud-KI-Dienste</strong> wie ChatGPT oder Google Gemini sind leistungsstark, doch sie verarbeiten jede Eingabe auf fremden Servern, häufig außerhalb der EU. Für Organisationen mit sensiblen Kunden-, Patienten- oder Finanzdaten ist genau das ein ernstes Problem, rechtlich wie wirtschaftlich. <strong className="text-foreground">Private AI</strong> löst dieses Dilemma: Sie erhalten dieselbe KI-Qualität, aber vollständig unter Ihrer Kontrolle.
                    </p>
                    <p>
                      Mit modernen <strong className="text-foreground">Open-Source-Modellen</strong> wie Llama 4, Mistral, Qwen und DeepSeek erzielen lokale KI-Systeme heute Ergebnisse auf vergleichbarem Niveau wie die großen Cloud-Dienste, ohne Vendor Lock-in und ohne Datenschutzrisiko. Die Modelle laufen auf Ihrer Hardware oder auf einem dedizierten EU-Server, je nach Anforderung.
                    </p>
                    <p>
                      Der entscheidende Unterschied liegt nicht in der Leistung, sondern in der <strong className="text-foreground">Kontrolle</strong>: Wo liegen Ihre Daten, wer hat Zugriff, und können Sie das jederzeit belegen? Mit Private AI lautet die Antwort eindeutig, dass alles bei Ihnen bleibt.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Datensouveränität</Badge>
                    <Badge variant="secondary" className="rounded-full">On-Premise</Badge>
                    <Badge variant="secondary" className="rounded-full">Private Cloud</Badge>
                    <Badge variant="secondary" className="rounded-full">Kein Vendor Lock-in</Badge>
                  </div>
                </div>

                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Private AI auf einen Blick</CardTitle>
                    <CardDescription>Was eine lokale KI-Lösung der KI Kanzlei auszeichnet.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {keyProps.map(({ label, value }) => (
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

          {/* DEPLOYMENT-MODELLE (clean diagram via divs) */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Deployment</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Drei Wege, Ihre KI privat zu betreiben</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Vom eigenen Server-Rack bis zum gemanagten EU-Hosting. Wir wählen mit Ihnen das Modell, das zu Ihrer Infrastruktur und Ihrem Schutzbedarf passt.</p>
              </div>
              {/* Spectrum bar */}
              <div className="hidden md:flex items-center justify-between mb-6 px-2">
                <span className="text-xs font-semibold text-primary flex items-center gap-1.5"><HardDrive className="w-3.5 h-3.5" /> Maximale Kontrolle</span>
                <div className="flex-1 mx-4 h-px bg-gradient-to-r from-primary/50 via-primary/25 to-primary/50" />
                <span className="text-xs font-semibold text-primary flex items-center gap-1.5"><Rocket className="w-3.5 h-3.5" /> Schnellster Start</span>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {deployments.map((d, i) => {
                  const Icon = d.icon;
                  return (
                    <Card key={i} className={`hover-lift border-2 ${i === 0 ? "border-primary/30 bg-primary/5" : ""}`}>
                      <CardHeader>
                        <div className="flex items-start justify-between gap-3 mb-1">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <Badge variant="outline" className="rounded-full text-xs shrink-0 bg-primary/10 text-primary border-primary/20">{d.badge}</Badge>
                        </div>
                        <CardTitle className="text-xl">{d.name}</CardTitle>
                        <CardDescription className="leading-relaxed">{d.desc}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {d.points.map((p) => (
                            <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />{p}
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

          {/* BENEFITS, Bento */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Vorteile</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Volle KI-Leistung, volle Datenkontrolle</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Mit Private AI schließen sich Leistung und Datenschutz nicht länger aus. Diese sechs Punkte machen den Unterschied.</p>
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
                      <CardContent><p className="text-muted-foreground leading-relaxed text-sm">{b.description}</p></CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* VERGLEICHS-TABLE */}
          <section id="vergleich" className="py-14 md:py-20 bg-white/50 scroll-mt-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Vergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Private AI vs. Cloud AI vs. Self-Hosted Open Source</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Drei Wege zu KI im Unternehmen mit sehr unterschiedlichen Folgen für Datenschutz, Hosting, Kosten und Betrieb. Welcher zu Ihnen passt, klären wir im kostenlosen Assessment.</p>
              </div>
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[22%] font-bold text-foreground">Merkmal</TableHead>
                      <TableHead className="text-muted-foreground">Cloud AI</TableHead>
                      <TableHead className="text-muted-foreground">Self-Hosted Open Source</TableHead>
                      <TableHead className="text-primary font-bold">Private AI</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparison.map((row, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{row.feature}</TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          <span className="inline-flex items-start gap-1.5">
                            {row.cloud.good ? <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" /> : <X className="w-3.5 h-3.5 text-muted-foreground/50 mt-0.5 shrink-0" />}
                            {row.cloud.text}
                          </span>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          <span className="inline-flex items-start gap-1.5">
                            {row.oss.good ? <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" /> : <X className="w-3.5 h-3.5 text-muted-foreground/50 mt-0.5 shrink-0" />}
                            {row.oss.text}
                          </span>
                        </TableCell>
                        <TableCell className="text-sm text-primary font-medium">
                          <span className="inline-flex items-start gap-1.5">
                            {row.privat.good ? <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" /> : <X className="w-3.5 h-3.5 text-muted-foreground/50 mt-0.5 shrink-0" />}
                            {row.privat.text}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </section>

          {/* USE CASES */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Anwendungsfälle</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Was Sie mit Private AI konkret tun</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Dieselben Aufgaben, für die Unternehmen heute ChatGPT nutzen, nur dass Ihre Daten dabei vollständig im Haus bleiben.</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {useCases.map((u, i) => {
                  const Icon = u.icon;
                  return (
                    <Card key={i} className="hover-lift border-2 h-full">
                      <CardContent className="pt-6">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-bold mb-1.5">{u.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{u.desc}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* MODELLE + TECH-STACK (Tabs) */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Technologie</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Modelle und Technik hinter Ihrer Private AI</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Wir setzen ausschließlich auf bewährte Open-Source-Modelle und einen robusten Technik-Unterbau, den wir auf Ihre Anforderungen zuschneiden.</p>
              </div>
              <Tabs defaultValue="modelle" className="w-full">
                <TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">
                  <TabsTrigger value="modelle" className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-5 py-2 border border-border">
                    <Brain className="w-4 h-4 mr-1.5" />Open-Source-Modelle
                  </TabsTrigger>
                  <TabsTrigger value="stack" className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-5 py-2 border border-border">
                    <Layers className="w-4 h-4 mr-1.5" />Tech-Stack
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="modelle">
                  <Card className="border-2 overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/50">
                          <TableHead className="font-bold text-foreground">Modell</TableHead>
                          <TableHead className="text-muted-foreground">Herkunft</TableHead>
                          <TableHead className="text-muted-foreground">Stärke</TableHead>
                          <TableHead className="text-muted-foreground">Größen</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {models.map((m, i) => (
                          <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                            <TableCell className="font-semibold text-primary">{m.name}</TableCell>
                            <TableCell className="text-sm text-muted-foreground">{m.vendor}</TableCell>
                            <TableCell className="text-sm text-muted-foreground">{m.strength}</TableCell>
                            <TableCell className="text-sm text-muted-foreground">{m.size}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Card>
                  <p className="text-sm text-muted-foreground text-center mt-4">Welches Modell für Sie optimal ist, hängt von Aufgabe, Geschwindigkeit und Budget ab. Wir testen und empfehlen im Assessment.</p>
                </TabsContent>

                <TabsContent value="stack">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {techStack.map((t, i) => {
                      const Icon = t.icon;
                      return (
                        <Card key={i} className="hover-lift border-2 h-full">
                          <CardContent className="pt-6">
                            {t.logo ? (
                              <LogoBox slug={t.logo} alt={t.logoAlt ?? t.name} boxClassName="w-11 h-11 mb-3" imgClassName="w-6 h-6" />
                            ) : (
                              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                                <Icon className="w-5 h-5 text-primary" />
                              </div>
                            )}
                            <h3 className="font-bold mb-1.5">{t.name}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* BRANCHEN, Tabs */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Für wen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Besonders wichtig für diese Branchen</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Wählen Sie Ihre Branche, wir zeigen, warum Datensouveränität hier nicht verhandelbar ist.</p>
              </div>
              <Tabs defaultValue="medizin" className="w-full">
                <TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">
                  {audience.map((a) => {
                    const Icon = a.icon;
                    return (
                      <TabsTrigger key={a.value} value={a.value} className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border">
                        <Icon className="w-4 h-4 mr-1.5" />{a.label}
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
                {audience.map((a) => (
                  <TabsContent key={a.value} value={a.value}>
                    <Card className="border-2">
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-bold mb-2">{a.head}</h3>
                        <p className="text-muted-foreground leading-relaxed">{a.text}</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>

          {/* ABLAUF, vertikale Timeline */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Der Ablauf</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">In vier Schritten zu Ihrer Private AI</h2>
                <p className="text-lg text-muted-foreground">Vom ersten Gespräch bis zur produktiven, lokal betriebenen KI, transparent und ohne Überraschungen.</p>
              </div>
              <div className="relative">
                <div className="absolute left-7 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-primary/25 to-primary/40 hidden sm:block" aria-hidden />
                <div className="space-y-6">
                  {steps.map(({ step, icon: Icon, title, time, desc }) => (
                    <div key={step} className="relative flex gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shrink-0 shadow-lg shadow-primary/20 relative z-10 ring-8 ring-background">
                        <Icon className="w-6 h-6" />
                      </div>
                      <Card className="border-2 flex-1">
                        <CardContent className="py-5">
                          <div className="text-xs font-bold text-primary mb-1 tracking-wide">SCHRITT {step}, {time}</div>
                          <h3 className="text-lg font-bold mb-1.5">{title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Häufige Fragen zu Private AI</h2>
                <p className="text-lg text-muted-foreground">Die wichtigsten Fragen rund um lokale, DSGVO-konforme KI und unsere ehrlichen Antworten.</p>
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
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Mehr Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zur Private AI</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {relatedServices.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a key={s.href} href={s.href} className="group block">
                      <Card className="h-full border-2 hover-lift transition-all group-hover:border-primary/40">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${serviceLogos[s.href] ? "bg-white border border-border" : "bg-primary/10 group-hover:bg-primary"}`}>
                              {serviceLogos[s.href] ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={`/img/logos/${serviceLogos[s.href]}.svg`} alt={s.title} className="w-7 h-7 object-contain" />
                              ) : (
                                <Icon className="w-6 h-6 text-primary transition-colors group-hover:text-white" />
                              )}
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
