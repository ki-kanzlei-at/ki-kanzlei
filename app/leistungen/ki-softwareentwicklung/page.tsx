import type { Metadata } from "next";
import Script from "next/script";
import { NavigationHome } from "@/components/NavigationHome";
import { ModelLogoStrip } from "@/components/ModelLogoStrip";
import { FooterModern } from "@/components/FooterModern";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Check,
  X,
  Phone,
  Search,
  Rocket,
  TrendingUp,
  Code,
  Smartphone,
  Globe,
  Boxes,
  Layers,
  Blocks,
  Package,
  Cpu,
  Brain,
  Bot,
  Database,
  Server,
  Cloud,
  Shield,
  Zap,
  Wrench,
  Sparkles,
  RefreshCw,
  Building2,
  Briefcase,
  Target,
  Plug,
  Terminal,
  AppWindow,
  Puzzle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "KI-Softwareentwicklung: SaaS, Custom Software & MVP",
  description:
    "KI-Softwareentwicklung aus Österreich für den DACH-Raum: SaaS, Custom Software und Web-Apps schneller dank KI-gestützter Programmierung. Produktionsreif, DSGVO-konform und mit EU-Hosting in Österreich, Deutschland und der Schweiz.",
  keywords:
    "KI Softwareentwicklung, KI Programmierung, KI Software, SaaS Entwicklung, KI SaaS, MVP Entwicklung, Custom Software, Web-App Entwicklung, Softwareentwicklung mit KI, Software as a Service, KI Softwareentwicklung Österreich, KI Softwareentwicklung Deutschland, KI Softwareentwicklung Schweiz, SaaS Entwicklung DACH, Softwareentwicklung DACH-Raum",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/ki-softwareentwicklung" },
};

const faqs = [
  {
    q: "Was ist KI-Softwareentwicklung?",
    a: "KI-Softwareentwicklung bezeichnet zwei Dinge zugleich: Software, in die KI-Funktionen wie LLMs, AI Agents oder Sprachverarbeitung eingebaut sind, und die Art, wie wir diese Software bauen. Wir nutzen KI-gestützte Programmierung, also moderne Coding-Assistenten und KI-Tooling im gesamten Entwicklungsprozess. Das Ergebnis ist produktionsreife Custom Software, KI-Apps oder ein SaaS-Produkt, das deutlich schneller entsteht als in der klassischen Entwicklung.",
  },
  {
    q: "Was kostet KI-Programmierung beziehungsweise eine eigene KI-App?",
    a: "Die Kosten hängen vom Umfang ab. Ein klar abgegrenztes MVP lässt sich oft als Festpreis-Projekt umsetzen, sodass Sie volle Planungssicherheit haben. Das erste Erstgespräch ist kostenlos. Wer vor dem Bau eine fundierte Entscheidungsgrundlage möchte, kann mit dem KI Assessment Center für 490 EUR starten, das bei einer anschließenden Beauftragung voll angerechnet wird. Größere Custom-Software-Vorhaben kalkulieren wir transparent nach Aufwand oder in festen Arbeitspaketen.",
  },
  {
    q: "Wie schnell kann ich mein SaaS oder meine Software entwickeln lassen?",
    a: "Durch KI-gestützte Entwicklung verkürzt sich die Zeit von der Idee zum lauffähigen Produkt erheblich. Einen klickbaren Prototyp zeigen wir oft schon nach wenigen Tagen, ein erstes nutzbares MVP in der Regel innerhalb von vier bis acht Wochen. Danach entwickeln wir in kurzen Iterationen weiter, sodass Sie früh echtes Nutzerfeedback bekommen, statt monatelang an einem fertigen Big-Bang-Release zu bauen.",
  },
  {
    q: "Welcher Tech-Stack kommt bei der Softwareentwicklung mit KI zum Einsatz?",
    a: "Für Web- und Mobile-Apps setzen wir auf Next.js und React, ergänzt um React Native, wo native Apps gefragt sind. Im Backend arbeiten wir mit Python und Node.js, für Daten mit PostgreSQL und Vektordatenbanken. KI-Funktionen binden wir über LLM-APIs oder lokale Modelle ein, je nach Datenschutzanforderung. Gehostet wird DSGVO-konform in der EU. Den Stack wählen wir immer passend zu Ihrem Use Case, nicht nach Mode.",
  },
  {
    q: "Worin unterscheiden sich SaaS, Custom Software und eine Web-App?",
    a: "Custom Software ist eine maßgeschneiderte Anwendung oder ein Programm für einen konkreten Prozess. Eine Web-App ist eine browserbasierte Software, etwa ein Portal oder internes Tool. Ein SaaS geht weiter: ein mandantenfähiges Produkt mit Benutzerverwaltung, Abrechnung und Self-Service, das Sie an viele Kunden verkaufen. Alle drei beginnen sinnvoll mit einem MVP. Native Mobile-Apps und klassische Websites bauen wir ebenfalls, dafür gibt es die eigenen Leistungen App mit KI und Website mit KI.",
  },
  {
    q: "Könnt ihr KI in bestehende Software integrieren oder Altsysteme modernisieren?",
    a: "Ja, das ist einer unserer häufigsten Fälle. Wir binden KI-Funktionen über APIs in Ihre vorhandene Software ein, etwa eine KI-Suche, einen Chat-Assistenten oder automatisierte Auswertungen, ohne dass Sie alles neu bauen müssen. Bei in die Jahre gekommenen Altsystemen modernisieren wir gezielt: Wir lösen Engpässe, erneuern das Frontend oder migrieren auf einen wartbaren Stack, immer in überschaubaren Schritten statt mit einem riskanten Komplettumbau.",
  },
  {
    q: "Ist die KI-Software DSGVO-konform und wo liegen die Daten?",
    a: "Datenschutz ist bei uns Ausgangspunkt, nicht Nachgedanke. Wir hosten in der EU, schließen Auftragsverarbeitungsverträge und wählen KI-Modelle so, dass sensible Daten bei Bedarf das Haus nicht verlassen, etwa über lokale oder europäische Modelle. Jede Anwendung planen wir DSGVO-konform und berücksichtigen die Anforderungen des EU AI Act, inklusive Kennzeichnung und Dokumentation, damit Ihr Produkt von Anfang an rechtssicher läuft.",
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
  name: "KI-Softwareentwicklung",
  serviceType: "KI Softwareentwicklung, KI-App- & SaaS-Entwicklung",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "KI-Softwareentwicklung für Startups und KMU im DACH-Raum: Custom Software, KI-Apps und SaaS-MVPs mit moderner KI-gestützter Entwicklung, DSGVO-konform und mit EU-Hosting.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const heroPhases = [
  { icon: Search, step: "01", label: "Discovery", time: "30 Min., kostenlos", desc: "Idee, Ziele und Anforderungen schärfen, Scope und MVP definieren." },
  { icon: Blocks, step: "02", label: "MVP-Entwicklung", time: "4 bis 8 Wochen", desc: "Schnell zum lauffähigen Produkt dank KI-gestützter Entwicklung." },
  { icon: RefreshCw, step: "03", label: "Iteration", time: "fortlaufend", desc: "Nutzerfeedback einarbeiten, Funktionen erweitern, Qualität sichern." },
  { icon: Rocket, step: "04", label: "Go-live & Betrieb", time: "laufend", desc: "Produktiver Launch mit EU-Hosting, Monitoring und Weiterentwicklung." },
];

const stats = [
  { value: "4 bis 8 Wo.", label: "von der Idee zum lauffähigen MVP" },
  { value: "Festpreis", label: "klar kalkulierbares MVP-Paket möglich" },
  { value: "100%", label: "EU-Hosting, DSGVO-konform" },
  { value: "Next.js", label: "moderner Stack: React, Python, LLM" },
];

const services = [
  { icon: Code, title: "Custom Software mit KI", description: "Maßgeschneiderte Software für Ihren Prozess, von Grund auf gebaut und mit KI-Funktionen wie Auswertung, Suche oder Assistenten erweitert. Statt Standardtool, das nie ganz passt, bekommen Sie eine Lösung, die genau Ihre Abläufe abbildet, produktionsreif und wartbar." },
  { icon: AppWindow, title: "Web-Apps & Portale", description: "Schnelle Web-Apps, Kundenportale und interne Tools mit Next.js und React, mit eingebauter KI-Logik. Native Mobile-Apps und klassische Websites sind eigene Leistungen, die wir nahtlos ergänzen." },
  { icon: Boxes, title: "SaaS-Entwicklung & MVP", description: "Von der Idee zum lauffähigen SaaS-Produkt: mandantenfähig, mit Benutzerverwaltung, Abrechnung und Self-Service. Wir bringen Ihr MVP schnell auf den Markt, damit Sie früh validieren, statt lange ins Blaue zu entwickeln." },
  { icon: Plug, title: "KI- & API-Integration", description: "Wir binden LLMs, AI Agents und Drittsysteme über saubere APIs ein, in neue oder bestehende Software. So bekommt Ihr Produkt KI-Funktionen, ohne dass Sie alles neu bauen müssen." },
  { icon: RefreshCw, title: "Modernisierung von Altsystemen", description: "Veraltete Software bremst aus. Wir modernisieren gezielt: neues Frontend, wartbarer Stack, Engpässe beseitigt und KI ergänzt, in überschaubaren Schritten statt riskantem Komplettumbau." },
  { icon: Wrench, title: "Betrieb & Weiterentwicklung", description: "Nach dem Launch ist vor der nächsten Version. Wir betreiben Ihre Anwendung mit EU-Hosting und Monitoring und entwickeln sie in kurzen Iterationen entlang echter Nutzung weiter." },
];

const maturity = [
  { level: 1, fill: 1, title: "Idee & Konzept", desc: "Eine Produktidee steht, aber es gibt noch nichts Lauffähiges. Hier hilft das Discovery-Gespräch, den richtigen Scope zu finden." },
  { level: 2, fill: 2, title: "Prototyp & MVP", desc: "Ein klickbarer Prototyp oder erstes MVP existiert und wird mit echten Nutzern getestet." },
  { level: 3, fill: 3, title: "Produktiv im Einsatz", desc: "Die Software läuft produktiv, wird genutzt und in Iterationen weiterentwickelt." },
  { level: 4, fill: 4, title: "Skaliertes Produkt", desc: "Ein gewachsenes Produkt mit vielen Nutzern, klarer Architektur, Monitoring und stabilem Betrieb." },
];

const bigComparison = [
  { feature: "Time-to-Market", agency: "Oft mehrere Monate bis zum ersten Release", offshore: "Günstig, aber lange Abstimmungswege", inhouse: "Hängt von freier Kapazität ab", kanzlei: "MVP in 4 bis 8 Wochen dank KI-gestützter Entwicklung" },
  { feature: "KI-Kompetenz", agency: "KI oft zugekauft oder oberflächlich", offshore: "Stark variabel je nach Team", inhouse: "Selten KI-Spezialisten an Bord", kanzlei: "KI von LLM-Integration bis AI Agents im Kern" },
  { feature: "Custom Software", agency: "Häufig auf Baukästen festgelegt", offshore: "Umsetzung ja, Produktdenken oft fehlt", inhouse: "Vorhanden, aber ausgelastet", kanzlei: "Maßgeschneidert, produktionsreif und wartbar" },
  { feature: "Festpreis-MVP", agency: "Eher selten angeboten", offshore: "Preis niedrig, Risiko hoch", inhouse: "Nicht anwendbar", kanzlei: "Klar abgegrenztes MVP als Festpreis möglich" },
  { feature: "DSGVO & Hosting", agency: "Unterschiedlich, oft US-Tools", offshore: "Datenstandort häufig unklar", inhouse: "Je nach IT-Setup", kanzlei: "EU- und Österreich-Hosting, DSGVO-konform" },
  { feature: "Betrieb danach", agency: "Wartung oft teuer", offshore: "Übergabe und Support schwierig", inhouse: "Bindet eigene Ressourcen", kanzlei: "Betrieb und Weiterentwicklung aus einer Hand" },
];

const industries = [
  { value: "startup", label: "Startups", icon: Rocket, head: "Startups mit Produktidee", text: "Sie haben eine Idee und müssen schnell validieren, bevor das Budget knapp wird. Wir bauen ein fokussiertes MVP mit den entscheidenden Funktionen, oft als Festpreis, damit Sie früh am Markt sind, echtes Feedback sammeln und investorenreif weiterentwickeln." },
  { value: "kmu", label: "KMU", icon: Briefcase, head: "KMU mit eigenem Bedarf", text: "Standardsoftware passt nie ganz, eigene Entwicklung schien bisher zu groß. Mit KI-gestützter Entwicklung wird Custom Software auch für den Mittelstand bezahlbar: ein internes Tool, ein Kundenportal oder die Modernisierung eines Altsystems, Schritt für Schritt." },
  { value: "saas", label: "SaaS", icon: Boxes, head: "Software-Produkte & SaaS", text: "Aus einer Idee soll ein verkaufbares SaaS werden: mandantenfähig, mit Login, Abrechnung und Self-Service. Wir bringen das MVP schnell auf den Markt und bauen es entlang der Nutzung zum tragfähigen KI-SaaS aus." },
  { value: "agency", label: "Agenturen", icon: Building2, head: "Agenturen & Dienstleister", text: "Sie brauchen technische Umsetzungskraft für Kundenprojekte mit KI-Anteil. Wir liefern als verlässlicher Entwicklungspartner im Hintergrund: KI-Apps, Integrationen und produktionsreife Software, pünktlich und im Stil Ihrer Marke." },
  { value: "health", label: "Health & Legal", icon: Shield, head: "Gesundheit & Kanzleien", text: "Für sensible Branchen zählt Datenschutz. Wir bauen Software mit lokalen oder europäischen KI-Modellen, sodass Patienten- oder Mandantendaten das Haus nicht verlassen, DSGVO-konform und nach EU AI Act dokumentiert." },
  { value: "scaleup", label: "Scale-ups", icon: TrendingUp, head: "Scale-ups & Wachstum", text: "Das Produkt läuft, soll aber schneller besser werden. Wir verstärken Ihr Team, modernisieren Engpässe und ergänzen KI-Funktionen, ohne den laufenden Betrieb zu gefährden." },
];

const toolbox = [
  { icon: Globe, name: "Next.js & React", desc: "Schnelle, moderne Web-Apps und Portale mit erstklassiger Performance, SEO und Developer-Experience." },
  { icon: Boxes, name: "SaaS-Infrastruktur", desc: "Mandantenfähigkeit, Benutzerverwaltung, Auth und Abrechnung als solides Fundament für Ihr SaaS-Produkt." },
  { icon: Terminal, name: "Python & Node.js", desc: "Robuste Backends, Datenpipelines und APIs als stabile Basis für Custom Software und SaaS." },
  { icon: Brain, name: "LLM-Integration", desc: "Anbindung von Sprachmodellen für Chat, Suche, Auswertung und Assistenten, per API oder lokalem Modell." },
  { icon: Database, name: "Daten & Vektor-DB", desc: "PostgreSQL und Vektordatenbanken für klassische Daten und semantische KI-Suche im selben System." },
  { icon: Cloud, name: "EU-Hosting & DevOps", desc: "DSGVO-konformes Hosting in der EU mit CI/CD, Monitoring und sauberem Betrieb von Anfang an." },
];

const steps = [
  { step: "01", icon: Phone, title: "Discovery & Erstgespräch", time: "kostenlos", desc: "Wir verstehen Ihre Idee, Zielgruppe und Anforderungen, klären den Funktionsumfang und schneiden ein sinnvolles MVP zu. Ohne Verpflichtung, mit ehrlicher Einschätzung von Machbarkeit, Aufwand und Risiken." },
  { step: "02", icon: Blocks, title: "MVP-Entwicklung", time: "4 bis 8 Wochen", desc: "Statt monatelanger Konzepte bauen wir KI-gestützt ein lauffähiges MVP mit den entscheidenden Funktionen. Auf Wunsch zum Festpreis, sodass Sie früh ein echtes Produkt in den Händen halten, das Sie testen können." },
  { step: "03", icon: RefreshCw, title: "Iteration & Feedback", time: "fortlaufend", desc: "Wir arbeiten in kurzen Zyklen: Nutzerfeedback einsammeln, priorisieren, umsetzen. So entwickelt sich aus dem MVP planbar das Produkt, das der Markt wirklich braucht, mit Tests und sauberem Code." },
  { step: "04", icon: Rocket, title: "Go-live & Betrieb", time: "laufend", desc: "Wir bringen Ihre Software produktiv auf EU-Hosting, richten Monitoring ein und betreiben sie zuverlässig. Auf Wunsch entwickeln wir laufend weiter oder übergeben sauber dokumentiert an Ihr internes Team." },
];

const usps = [
  { icon: Zap, badge: "Tempo", title: "Schneller durch KI-Entwicklung", desc: "Wir nutzen KI-gestützte Programmierung im gesamten Prozess. Das verkürzt die Zeit von der Idee zum lauffähigen Produkt deutlich, ohne Abstriche bei Qualität und Wartbarkeit." },
  { icon: Package, badge: "Planbar", title: "Festpreis-MVP möglich", desc: "Für klar abgegrenzte MVPs bieten wir Festpreise. Sie kennen Kosten und Umfang vorab und tragen kein offenes Budgetrisiko in der heißen Anfangsphase." },
  { icon: Shield, badge: "Sicher", title: "DSGVO & EU-Hosting", desc: "Als österreichisches Unternehmen bauen wir datenschutzkonform: EU-Hosting, lokale Modelle wo nötig und EU-AI-Act-Dokumentation von Anfang an." },
  { icon: Layers, badge: "Aus einer Hand", title: "Produkt, Code & Betrieb", desc: "Von Discovery über Entwicklung bis Betrieb begleiten wir alles. Eine Quelle, klare Verantwortung und ein Team, das auch nach dem Go-live an Bord bleibt." },
];

const related = [
  { href: "/leistungen/app-mit-ki", icon: Smartphone, tag: "Mobile & App", title: "App mit KI", desc: "Native und plattformübergreifende Mobile-Apps mit KI, wenn Ihr Produkt aufs Smartphone gehört." },
  { href: "/leistungen/ki-website", icon: Globe, tag: "Website", title: "Website mit KI", desc: "Marketing-Websites und Landingpages mit KI, getrennt von Ihrer Produktentwicklung." },
  { href: "/leistungen/agentic-ai", icon: Bot, tag: "KI-Funktion", title: "Agentic AI & AI Agents", desc: "Autonome Agenten als KI-Kern Ihrer Software, die mehrstufige Aufgaben eigenständig erledigen." },
];

const glanceData: [string, string][] = [
  ["Leistung", "Custom Software, KI-Apps, SaaS"],
  ["Erstgespräch", "kostenlos, 30 Minuten"],
  ["MVP", "in 4 bis 8 Wochen, Festpreis möglich"],
  ["Stack", "Next.js, React, Python, LLM"],
  ["Datenschutz", "DSGVO, EU-Hosting, EU AI Act"],
  ["Markt", "DACH-Raum (AT, DE, CH)"],
];

export default function Page() {
  return (
    <>
      <Script id="faq-ki-softwareentwicklung" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-ki-softwareentwicklung" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO: 4-Phasen-Ablauf */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                    KI-Softwareentwicklung, SaaS, Custom Software & MVP
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-primary">KI-Softwareentwicklung</span>, die schneller zum Produkt führt
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Wir bauen SaaS-Produkte, Custom Software und Web-Apps mit moderner, KI-gestützter Entwicklung. Von der Idee zum lauffähigen Produkt in Wochen statt Monaten, produktionsreif, DSGVO-konform und mit EU-Hosting.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Erstgespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#leistungen">Leistungen ansehen</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Cloud className="w-4 h-4 text-primary" /> EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Ablauf-Visual */}
                <Card className="relative border-2 shadow-xl shadow-primary/5 overflow-hidden">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-primary tracking-wide">VON DER IDEE ZUM SAAS</div>
                        <CardTitle className="text-xl">Ablauf der Entwicklung</CardTitle>
                      </div>
                      <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20 text-xs shrink-0">4 Phasen</Badge>
                    </div>
                    <div className="flex gap-1.5 pt-3" aria-hidden>
                      {[0, 1, 2, 3].map((i) => (
                        <div key={i} className="h-1.5 flex-1 rounded-full bg-primary/25" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5">
                    <div className="relative">
                      <div className="absolute left-[1.3rem] top-4 bottom-4 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-primary/50" aria-hidden />
                      <div className="space-y-3.5">
                        {heroPhases.map(({ icon: Icon, step, label, time, desc }) => (
                          <div key={step} className="relative flex items-start gap-4">
                            <div className="relative z-10 w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-md shadow-primary/20 ring-4 ring-card">
                              <Icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0 pt-0.5">
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-xs font-bold text-primary">PHASE {step}</span>
                                <span className="text-[11px] text-muted-foreground shrink-0">{time}</span>
                              </div>
                              <div className="font-semibold text-sm leading-tight">{label}</div>
                              <div className="text-xs text-muted-foreground leading-snug mt-0.5">{desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-5 flex items-center justify-between rounded-xl bg-primary/5 border border-primary/20 px-4 py-3">
                      <span className="text-sm font-medium text-foreground">Ergebnis</span>
                      <span className="text-sm text-primary font-semibold">lauffähiges MVP in 4 bis 8 Wochen</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* DEFINITION: 2-spaltig mit Info-Card */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Definition</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was ist KI-Softwareentwicklung?</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      <strong className="text-foreground">KI-Softwareentwicklung</strong> meint zwei Dinge zugleich. Erstens <strong className="text-foreground">KI-Software</strong>: Anwendungen, in die Funktionen wie Sprachmodelle, AI Agents oder semantische Suche eingebaut sind. Zweitens die <strong className="text-foreground">Softwareentwicklung mit KI</strong> selbst, also moderne KI-Programmierung mit Coding-Assistenten über den gesamten Prozess, vom Entwurf bis zum Test.
                    </p>
                    <p>
                      Genau diese KI-gestützte Entwicklung ist der Tempovorteil. Wir kommen schneller von der Idee zum lauffähigen Produkt, ohne bei Codequalität, Sicherheit oder Wartbarkeit Abstriche zu machen. So entstehen produktionsreife Custom Software, KI-Apps und ganze SaaS-Produkte in einem Bruchteil der klassischen Zeit.
                    </p>
                    <p>
                      Unser Schwerpunkt liegt auf drei Bereichen: maßgeschneiderter Custom Software mit KI, KI-Apps für Web und Mobile sowie eigener SaaS-Entwicklung. Gerade beim SaaS starten wir mit einem fokussierten MVP und führen Ihre Produktidee Schritt für Schritt zum marktreifen, skalierbaren KI-SaaS.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">KI Programmierung</Badge>
                    <Badge variant="secondary" className="rounded-full">KI App erstellen</Badge>
                    <Badge variant="secondary" className="rounded-full">SaaS Entwicklung</Badge>
                    <Badge variant="secondary" className="rounded-full">MVP Entwicklung</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">KI-Softwareentwicklung auf einen Blick</CardTitle>
                    <CardDescription>Was ein Projekt mit der KI Kanzlei ausmacht.</CardDescription>
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
            </div>
          </section>

          {/* STATS-BAND */}
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

          <ModelLogoStrip
            caption="Unser Tech-Stack für Software, Apps und SaaS"
            items={[
              { slug: "nextdotjs", name: "Next.js" },
              { slug: "react", name: "React" },
              { slug: "typescript", name: "TypeScript" },
              { slug: "python", name: "Python" },
              { slug: "postgresql", name: "PostgreSQL" },
              { slug: "anthropic", name: "Claude" },
              { slug: "openai", name: "OpenAI" },
            ]}
          />

          {/* LEISTUNGEN: BENTO */}
          <section id="leistungen" className="py-14 md:py-20 scroll-mt-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Unsere Leistungen in der KI-Softwareentwicklung</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Von der KI-App über Custom Software bis zum SaaS-MVP, produktionsreif und aus einer Hand.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <Card key={i} className={`hover-lift border-2 ${i === 0 ? "lg:col-span-2 bg-primary/5 border-primary/20" : ""}`}>
                      <CardHeader className="pb-3">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{s.title}</CardTitle>
                      </CardHeader>
                      <CardContent><p className="text-muted-foreground leading-relaxed text-sm">{s.description}</p></CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* FUER WEN: TABS */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Für wen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">KI-Softwareentwicklung für Ihre Situation</h2>
                <p className="text-lg text-muted-foreground">Wählen Sie Ihren Fall, wir zeigen, wie wir Ihre Software oder Ihr SaaS umsetzen.</p>
              </div>
              <Tabs defaultValue="startup" className="w-full">
                <TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">
                  {industries.map((a) => {
                    const Icon = a.icon;
                    return (
                      <TabsTrigger key={a.value} value={a.value} className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border">
                        <Icon className="w-4 h-4 mr-1.5" />{a.label}
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
                {industries.map((a) => (
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

          {/* PRODUKT-REIFEGRAD */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Standortbestimmung</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Wo steht Ihr Produkt?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Egal ob noch Idee oder bereits im Einsatz: Wir holen Sie genau dort ab, wo Ihr Software-Vorhaben gerade steht.</p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {maturity.map((m) => (
                  <Card key={m.level} className={`border-2 ${m.level === 4 ? "border-primary/30 bg-primary/5" : ""}`}>
                    <CardContent className="pt-6">
                      <div className="flex items-end gap-1.5 h-16 mb-4" aria-hidden>
                        {[1, 2, 3, 4].map((b) => (
                          <div
                            key={b}
                            className={`flex-1 rounded-t-md ${b <= m.fill ? "bg-primary" : "bg-primary/15"}`}
                            style={{ height: `${b * 25}%` }}
                          />
                        ))}
                      </div>
                      <div className="text-xs font-bold text-primary mb-1">STUFE {m.level}</div>
                      <h3 className="font-bold text-base mb-1.5 leading-tight">{m.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* GROSSE VERGLEICHS-TABLE */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Entwicklungswege im Vergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">KI Kanzlei vs. klassische Agentur, Offshore & Inhouse</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Vier Wege, Ihre Software bauen zu lassen, mit sehr unterschiedlichen Stärken. Worauf es bei KI-Software wirklich ankommt.</p>
              </div>
              <Card className="border-2 overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[18%] font-bold text-foreground">Kriterium</TableHead>
                      <TableHead className="text-muted-foreground">Klassische Agentur</TableHead>
                      <TableHead className="text-muted-foreground">Offshore-Team</TableHead>
                      <TableHead className="text-muted-foreground">Inhouse</TableHead>
                      <TableHead className="text-primary font-bold">KI Kanzlei</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bigComparison.map((r, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{r.feature}</TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          <span className="inline-flex items-start gap-1.5"><X className="w-3.5 h-3.5 text-muted-foreground/60 mt-0.5 shrink-0" />{r.agency}</span>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          <span className="inline-flex items-start gap-1.5"><X className="w-3.5 h-3.5 text-muted-foreground/60 mt-0.5 shrink-0" />{r.offshore}</span>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          <span className="inline-flex items-start gap-1.5"><X className="w-3.5 h-3.5 text-muted-foreground/60 mt-0.5 shrink-0" />{r.inhouse}</span>
                        </TableCell>
                        <TableCell className="text-sm text-primary font-medium">
                          <span className="inline-flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />{r.kanzlei}</span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </section>

          {/* TECH-STACK / WERKZEUGE */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Tech-Stack</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Womit wir Ihre KI-Software bauen</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Ein moderner, bewährter Stack. Wir wählen die Technologie passend zu Ihrem Use Case, nicht nach Trend.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {toolbox.map((t, i) => {
                  const Icon = t.icon;
                  return (
                    <Card key={i} className="hover-lift border-2">
                      <CardHeader className="pb-3">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{t.name}</CardTitle>
                      </CardHeader>
                      <CardContent><p className="text-muted-foreground leading-relaxed text-sm">{t.desc}</p></CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ABLAUF: Timeline */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="max-w-2xl mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Der Ablauf</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Von der Idee zum lauffähigen SaaS</h2>
                <p className="text-lg text-muted-foreground">Kein Big-Bang-Projekt, sondern vier klare Schritte mit greifbaren Ergebnissen, getrieben von KI-gestützter Entwicklung.</p>
              </div>
              <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="hidden lg:block absolute top-7 left-[12%] right-[12%] h-px bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40" aria-hidden />
                {steps.map(({ step, icon: Icon, title, time, desc }) => (
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
              <div className="mt-12 rounded-2xl border-2 border-primary/20 bg-primary/5 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5 justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Optionaler nächster Schritt: KI Assessment Center</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm max-w-2xl">
                      Sie möchten vor dem Bau eine fundierte Entscheidungsgrundlage? Im KI Assessment Center analysieren wir Idee, Machbarkeit und Architektur und liefern einen konkreten Umsetzungsplan. Pauschal 490 EUR, bei Beauftragung voll anrechenbar.
                    </p>
                  </div>
                </div>
                <Button size="lg" variant="outline" asChild className="shrink-0">
                  <a href="/ki-assessment">KI Assessment Center</a>
                </Button>
              </div>
            </div>
          </section>

          {/* WARUM KI KANZLEI */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Vorteile</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Warum KI-Softwareentwicklung mit der KI Kanzlei</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {usps.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <Card key={i} className="hover-lift border-2">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <Badge variant="secondary" className="rounded-full text-xs">{c.badge}</Badge>
                        </div>
                        <CardTitle className="text-lg">{c.title}</CardTitle>
                      </CardHeader>
                      <CardContent><p className="text-muted-foreground leading-relaxed text-sm">{c.desc}</p></CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQ: KI-Softwareentwicklung, Apps & SaaS</h2>
                <p className="text-lg text-muted-foreground">Die Fragen, die wir vor fast jedem Software-Projekt hören, ehrlich beantwortet.</p>
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

          {/* VERWANDTE LEISTUNGEN */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Verwandte Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Passende KI-Bausteine für Ihre Software</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Diese Services kombinieren wir häufig mit der Entwicklung, damit Ihre Anwendung echte KI-Power bekommt.</p>
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
