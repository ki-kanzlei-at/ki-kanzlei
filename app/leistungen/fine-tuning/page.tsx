import type { Metadata } from "next";
import { serviceLogos } from "@/lib/serviceLogos";
import Script from "next/script";
import { NavigationHome } from "@/components/NavigationHome";
import { ModelLogoStrip } from "@/components/ModelLogoStrip";
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
  Wand2, FlaskConical, Box, Layers, Gauge, FileText, Brain, Shield, ShieldCheck, Lock,
  Target, Filter, Bot, Building2, Code2, Network, Sparkles, Database, Server, Boxes,
  Check, X, Search, Rocket, Phone, Clock, MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "LLM Fine-Tuning & eigenes Sprachmodell trainieren",
  description:
    "LLM Fine-Tuning für Unternehmen: Wir passen Open-Source-Modelle per LoRA, QLoRA und Instruction-Tuning an Ihre Daten und Fachsprache an, DSGVO-konform auf EU-Infrastruktur. Eigenes LLM trainieren, ehrliche Einordnung Fine-Tuning vs. RAG vs. Prompting im DACH-Raum.",
  keywords:
    "fine tuning, llm fine tuning, fine-tuning, modell trainieren, eigenes llm, lora, qlora, instruction tuning, domain adaption, sprachmodell anpassen, open source llm, fine tuning vs rag, fine tuning beratung, modell feintunen",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/fine-tuning" },
};

const faqs = [
  {
    q: "Was ist LLM Fine-Tuning und wie funktioniert es?",
    a: "Beim Fine-Tuning trainieren wir ein bereits vortrainiertes Sprachmodell mit Ihren eigenen Daten weiter, sodass es Ihre Fachsprache, Ihre Aufgaben und Ihren Stil übernimmt. Das Basis-Modell bringt allgemeines Sprachverständnis mit, im Fine-Tuning lernt es gezielt Ihre Domäne dazu. Praktisch sammeln wir Beispiele aus Ihrem Unternehmen, etwa Frage-Antwort-Paare, Dokumente oder Musterantworten, bereiten sie auf und trainieren das Modell darauf. Das Ergebnis ist ein Modell, das konsistent in Ihrer Terminologie antwortet, ohne dass Sie bei jeder Anfrage lange Beispiel-Prompts mitschicken müssen.",
  },
  {
    q: "Wann lohnt sich Fine-Tuning und wann reichen RAG oder Prompting?",
    a: "Ehrliche Antwort: Fine-Tuning ist nicht immer der richtige Weg. Geht es um aktuelles Wissen, das sich oft ändert, etwa Preise, Produktdaten oder Dokumente, ist eine Wissensdatenbank mit RAG meist besser, weil das Wissen außerhalb des Modells liegt und jederzeit aktualisierbar ist. Geht es nur um wenige, einfache Aufgaben, reicht oft gutes Prompting. Fine-Tuning lohnt sich, wenn das Modell dauerhaft eine bestimmte Fachsprache, Tonalität, Struktur oder ein spezielles Verhalten beherrschen soll, das sich mit Prompts nicht stabil erreichen lässt. In der Praxis kombinieren wir die Ansätze häufig.",
  },
  {
    q: "Was ist der Unterschied zwischen LoRA, QLoRA und vollständigem Fine-Tuning?",
    a: "Beim vollständigen Fine-Tuning werden alle Parameter des Modells angepasst, das ist sehr rechenintensiv und teuer. LoRA (Low-Rank Adaptation) trainiert stattdessen nur kleine, zusätzliche Gewichtsmatrizen, was den Aufwand drastisch senkt, bei nahezu gleicher Qualität für die meisten Anwendungsfälle. QLoRA kombiniert LoRA mit Quantisierung, sodass sich auch große Modelle auf vergleichsweise wenig Hardware feintunen lassen. Für die meisten Unternehmensprojekte sind LoRA oder QLoRA die wirtschaftlichste Wahl, und genau diese Methoden setzen wir standardmäßig ein.",
  },
  {
    q: "Welche und wie viele Daten brauche ich für ein Fine-Tuning?",
    a: "Entscheidend ist Qualität vor Menge. Für Instruction-Tuning genügen je nach Aufgabe oft einige hundert bis wenige tausend saubere Beispiele, etwa Frage-Antwort-Paare, Musterdokumente oder annotierte Fälle aus Ihrem Alltag. Wichtiger als die reine Anzahl ist, dass die Beispiele Ihre echten Anwendungsfälle, Ihre Tonalität und die gewünschten Ausgabeformate widerspiegeln. Wir helfen Ihnen bei Auswahl, Bereinigung und Strukturierung der Daten und bauen, wo sinnvoll, zusätzliche Trainingsbeispiele aus vorhandenen Quellen auf.",
  },
  {
    q: "Ist Fine-Tuning DSGVO-konform und wo läuft das Training?",
    a: "Ja. Wir trainieren auf Open-Source-Modellen und führen Training wie Betrieb auf EU-Infrastruktur oder direkt bei Ihnen durch. Ihre Trainingsdaten verlassen dabei nicht Ihren Kontrollbereich und gehen nicht an US-Cloud-APIs. Das fertige Modell gehört Ihnen und kann lokal oder in einer privaten EU-Cloud betrieben werden. So lassen sich auch sensible Mandanten-, Patienten- oder Personaldaten verarbeiten, ohne dass Sie die Datenhoheit aufgeben. Auf Wunsch dokumentieren wir den gesamten Prozess für Ihre Datenschutz- und Compliance-Anforderungen.",
  },
  {
    q: "Welche Open-Source-Modelle eignen sich als Basis?",
    a: "Als Basis nutzen wir offene Modelle, die sich frei feintunen und betreiben lassen, etwa aus den Familien Llama, Mistral oder vergleichbaren Modellen vom Hugging Face Hub. Welches Modell passt, hängt von Aufgabe, gewünschter Qualität, Sprache und verfügbarer Hardware ab. Für deutschsprachige Fachanwendungen wählen wir Modelle mit guter Deutsch-Leistung und passender Größe, damit Qualität und Betriebskosten in einem sinnvollen Verhältnis stehen. Wir beraten herstellerunabhängig und wählen die Basis, die zu Ihren Zielen passt, nicht die, die gerade im Trend liegt.",
  },
  {
    q: "Was kostet ein Fine-Tuning-Projekt und wie lange dauert es?",
    a: "Das hängt von Datenlage, Modellgröße und Zielqualität ab. Ein klar umrissenes LoRA-Projekt mit vorhandenen, guten Daten ist oft in zwei bis vier Wochen produktiv. Aufwendiger wird es, wenn Trainingsdaten erst aufgebaut, bereinigt oder annotiert werden müssen. Im kostenlosen Assessment schauen wir uns Ihre Daten und Ihr Ziel an und nennen Ihnen einen realistischen Rahmen für Aufwand, Dauer und Betriebskosten, bevor Sie sich festlegen.",
  },
  {
    q: "Übernehmen Sie auch Evaluation, Betrieb und Updates des Modells?",
    a: "Ja. Ein Modell ist erst fertig, wenn es nachweisbar gut funktioniert. Wir messen die Qualität mit eigens erstellten Testsets, vergleichen gegen das Basis-Modell und bessern gezielt nach. Auf Wunsch übernehmen wir das Deployment auf Ihrer Infrastruktur, überwachen das Modell im Betrieb und trainieren es nach, wenn sich Anforderungen, Sprache oder Daten ändern. So bleibt Ihr Modell dauerhaft nützlich, statt einmal trainiert und dann vergessen zu werden.",
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
  name: "LLM Fine-Tuning & eigene Sprachmodelle",
  serviceType: "LLM Fine-Tuning, LoRA, QLoRA, Instruction-Tuning, Domain-Adaption",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "LLM Fine-Tuning für Unternehmen im DACH-Raum: Open-Source-Modelle per LoRA, QLoRA und Instruction-Tuning an Firmendaten und Fachsprache anpassen, DSGVO-konform auf EU-Infrastruktur, inklusive Evaluation und Betrieb.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const stats = [
  { value: "100 %", label: "Ihr Modell, Ihre Daten" },
  { value: "LoRA", label: "ressourcenschonend trainiert" },
  { value: "EU", label: "DSGVO-konformes Training" },
  { value: "2-6 Wo.", label: "bis zum eigenen Modell" },
];

const ataglance = [
  ["Methode", "LoRA, QLoRA, Instruction-Tuning"],
  ["Basis-Modelle", "Open Source, z. B. Llama, Mistral"],
  ["Ziel", "Fachsprache & Verhalten anpassen"],
  ["Training", "EU-Infrastruktur, DSGVO-konform"],
  ["Daten", "Ihre Firmen- und Fachdaten"],
  ["Ergebnis", "Ihr eigenes Modell, ohne Lock-in"],
];

const problems = [
  { problem: "Das Standard-Modell kennt Ihre Fachbegriffe nicht und formuliert konsequent daneben.", solution: "Per Fine-Tuning lernt das Modell Ihre Fachsprache, Tonalität und Abkürzungen verlässlich." },
  { problem: "Sie schicken sensible Daten an US-Cloud-APIs, ohne volle Kontrolle darüber.", solution: "Wir trainieren und betreiben das Modell DSGVO-konform auf EU-Infrastruktur." },
  { problem: "Lange Prompts mit vielen Beispielen kosten Tokens und liefern trotzdem inkonsistente Ergebnisse.", solution: "Das antrainierte Verhalten steckt im Modell, kurze Prompts genügen." },
  { problem: "Sie sind unsicher, ob Sie überhaupt Fine-Tuning, RAG oder nur Prompting brauchen.", solution: "Wir ordnen ehrlich ein und kombinieren die Ansätze passend zu Ihrem Ziel." },
];

const bentoFeatures = [
  { icon: Wand2, title: "Modelle, die Ihre Sprache sprechen", description: "Wir passen Open-Source-LLMs per Fine-Tuning an Ihre Fachsprache, Tonalität und Aufgaben an. Statt generischer Antworten bekommen Sie ein Modell, das Ihre Begriffe, Formate und Qualitätsansprüche kennt, weil es genau darauf trainiert wurde, und das konsistent statt zufällig liefert." },
  { icon: Layers, title: "LoRA & QLoRA, effizient trainiert", description: "Mit ressourcenschonenden Methoden trainieren wir auch große Modelle ohne riesige Hardware, schnell und kostengünstig." },
  { icon: Brain, title: "Instruction- & Domain-Tuning", description: "Wir bringen dem Modell Ihre Aufgaben und Ihr Fachgebiet bei, von Verträgen bis zu Support-Antworten." },
  { icon: Shield, title: "DSGVO-konform in der EU", description: "Training und Betrieb laufen auf EU-Infrastruktur. Ihre Trainingsdaten verlassen nie Ihren Kontrollbereich." },
  { icon: Target, title: "Ehrliche Einordnung", description: "Wir sagen klar, wann Fine-Tuning lohnt und wann RAG oder besseres Prompting günstiger zum Ziel führt." },
  { icon: Gauge, title: "Evaluation & Updates", description: "Wir messen Qualität mit Testsets, bessern gezielt nach und halten Ihr Modell aktuell." },
];

const departments = [
  { value: "fachsprache", label: "Fachsprache", icon: FileText, head: "Fachsprache & Tonalität", intro: "Das Modell schreibt in Ihrer Terminologie, Ihrem Stil und Ihren Formaten.", items: ["Branchen- und Fachbegriffe korrekt verwenden, statt generischer Umschreibungen.", "Tonalität und Ansprache an Ihre Marke und Zielgruppe anpassen.", "Vorgegebene Antwort- und Dokumentformate zuverlässig einhalten.", "Mehrsprachige Ausgaben in konsistenter Fachsprache erzeugen."] },
  { value: "extraktion", label: "Extraktion", icon: Filter, head: "Klassifikation & Extraktion", intro: "Das Modell ordnet ein und holt strukturierte Daten aus Ihren Texten.", items: ["E-Mails, Tickets und Dokumente zuverlässig kategorisieren.", "Felder aus Verträgen, Rechnungen und Formularen extrahieren.", "Stimmung und Dringlichkeit von Anfragen einschätzen.", "Freitext in saubere, weiterverarbeitbare JSON-Strukturen überführen."] },
  { value: "support", label: "Support", icon: Bot, head: "Kundenservice & Support", intro: "Antworten in Ihrem Stil, auf Basis Ihrer typischen Fälle.", items: ["Antwortentwürfe im Ton Ihres Hauses vorschlagen.", "Wiederkehrende Anfragen konsistent und korrekt beantworten.", "Interne Wissensfragen in Ihrer Fachsprache beantworten.", "Eskalationsfälle erkennen und sauber zusammenfassen."] },
  { value: "branchen", label: "Branchen", icon: Building2, head: "Branchen & Fachgebiete", intro: "Domain-Adaption für regulierte und spezialisierte Branchen.", items: ["Modelle für Recht, Steuer und Compliance auf Ihre Praxis trimmen.", "Medizinische und technische Fachsprache verlässlich abbilden.", "Interne Normen, Richtlinien und Vorlagen einarbeiten.", "Sektor-spezifische Abkürzungen und Begriffe korrekt deuten."] },
  { value: "code", label: "Code", icon: Code2, head: "Code & technische Texte", intro: "Modelle für Ihre Codebasis, Frameworks und Konventionen.", items: ["Code-Vorschläge an Ihre internen Konventionen anpassen.", "Wiederkehrende technische Dokumentation generieren.", "Konfigurationen und Skripte nach Ihren Vorlagen erzeugen.", "Legacy-Code in Ihrer Hausstruktur erklären und kommentieren."] },
  { value: "agenten", label: "Agenten", icon: Network, head: "Agenten & strukturierte Ausgaben", intro: "Zuverlässiges Verhalten für KI-Agenten und Automatisierungen.", items: ["Werkzeugaufrufe und strukturierte Ausgaben stabil treffen.", "Vorgegebene Schritte und Entscheidungslogik einhalten.", "Klare, knappe Ausgaben für nachgelagerte Systeme erzeugen.", "Fehlerträchtige Freitext-Antworten durch feste Formate ersetzen."] },
];

const comparison = [
  { feature: "Neues Wissen & Aktualität", finetuning: "im Modell verankert, Update nötig", rag: "immer aktuell aus der Quelle", prompting: "nur was im Prompt steht" },
  { feature: "Fachsprache & Stil", finetuning: "stark, fest antrainiert", rag: "begrenzt", prompting: "nur mit Beispielen im Prompt" },
  { feature: "Spezialaufgaben & Formate", finetuning: "sehr zuverlässig", rag: "solide", prompting: "schwankend" },
  { feature: "Laufende Kosten", finetuning: "niedrig, kurze Prompts", rag: "mittel, Abruf je Anfrage", prompting: "hoch bei langen Prompts" },
  { feature: "Einmaliger Aufwand", finetuning: "hoch, Daten & Training", rag: "mittel, Datenpipeline", prompting: "gering" },
  { feature: "Datenschutz & Datenkontrolle", finetuning: "voll, EU-Training möglich", rag: "voll, EU-Hosting möglich", prompting: "abhängig vom Anbieter" },
  { feature: "Quellen & Nachvollziehbarkeit", finetuning: "ohne Quellenangabe", rag: "mit Quellen belegbar", prompting: "ohne Quellen" },
];

const steps = [
  { step: "01", icon: Phone, title: "Kostenlose Erstanalyse", time: "30 Minuten", description: "Wir klären, welche Aufgabe Sie lösen wollen und ob Fine-Tuning, RAG oder Prompting der richtige Weg ist. Sie wissen danach, worauf es bei Ihrem Modell ankommt." },
  { step: "02", icon: Search, title: "Daten & Zieldefinition", time: "Woche 1", description: "Wir sichten Ihre Daten, definieren das Zielverhalten und klare Erfolgskriterien und bereiten ein sauberes Trainingsset auf." },
  { step: "03", icon: FlaskConical, title: "Training & Evaluation", time: "Woche 2 bis 4", description: "Wir trainieren das Modell mit LoRA oder QLoRA, messen die Qualität gegen Testsets und bessern gezielt nach." },
  { step: "04", icon: Rocket, title: "Deployment & Betreuung", time: "ab Woche 4", description: "Wir bringen das Modell auf Ihre EU-Infrastruktur, überwachen den Betrieb und trainieren bei Bedarf nach." },
];

const related = [
  { href: "/leistungen/private-ai", icon: Server, title: "Private AI & Lokale KI", desc: "Ihr feingetuntes Modell lokal oder in der privaten EU-Cloud betreiben, ohne Daten an Dritte zu geben." },
  { href: "/leistungen/hugging-face", icon: Boxes, title: "Hugging Face & Open-Source-Modelle", desc: "Das passende offene Basis-Modell auswählen, hosten und produktiv einsetzen, herstellerunabhängig." },
  { href: "/leistungen/ki-wissensdatenbank", icon: Database, title: "KI Wissensdatenbank (RAG)", desc: "Aktuelles Firmenwissen abrufbar machen, oft die bessere oder ergänzende Alternative zum Fine-Tuning." },
];

export default function Page() {
  return (
    <>
      <Script id="faq-finetuning" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-finetuning" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center rounded-xl bg-primary/10 p-2 shadow-sm"><FlaskConical className="w-9 h-9 text-primary" /></span>
                    <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                      Fine-Tuning, Eigene Sprachmodelle
                    </Badge>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Eigene Sprachmodelle, <span className="text-primary">auf Ihre Daten trainiert</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Wir passen Open-Source-LLMs per Fine-Tuning mit LoRA, QLoRA und Instruction-Tuning an Ihre Daten und Fachsprache an, DSGVO-konform auf EU-Infrastruktur. Und wir sagen Ihnen ehrlich, wann Fine-Tuning lohnt und wann RAG oder Prompting der bessere Weg ist.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Assessment</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#vergleich">Fine-Tuning vs. RAG vs. Prompting</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Brain className="w-4 h-4 text-primary" /> LoRA & Instruction-Tuning</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Hero visual: Training pipeline */}
                <div className="relative">
                  <Card className="border-2 shadow-xl shadow-primary/5 overflow-hidden">
                    <CardHeader className="border-b border-border py-3">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center justify-center rounded bg-primary/10 p-1"><FlaskConical className="w-4 h-4 text-primary" /></span>
                        <span className="font-mono text-xs text-muted-foreground">fachmodell-v2.lora</span>
                        <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> bereit
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3 rounded-xl border-2 border-primary/40 bg-primary/5 px-3.5 py-2.5">
                        <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0"><Box className="w-5 h-5 text-primary" /></div>
                        <div className="min-w-0"><div className="text-[10px] uppercase tracking-wider text-primary font-medium">Basis-Modell</div><div className="text-sm font-semibold truncate">Open-Source-LLM</div></div>
                      </div>
                      {[
                        { icon: FileText, label: "Schritt 1", title: "Firmendaten aufbereiten" },
                        { icon: Layers, label: "Schritt 2", title: "LoRA-Fine-Tuning" },
                        { icon: Gauge, label: "Schritt 3", title: "Evaluation & Deployment" },
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
                    <Layers className="w-3.5 h-3.5 text-primary" /> LoRA & QLoRA
                  </div>
                  <div className="hidden lg:flex absolute -bottom-4 -left-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium">
                    <Lock className="w-3.5 h-3.5 text-primary" /> DSGVO-konform, EU
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

          <ModelLogoStrip
            caption="Fine-Tuning auf bewährten Frameworks"
            items={[
              { slug: "huggingface", name: "Hugging Face" },
              { slug: "pytorch", name: "PyTorch" },
              { slug: "tensorflow", name: "TensorFlow" },
              { slug: "meta", name: "Llama" },
              { slug: "mistralai", name: "Mistral AI" },
              { slug: "openai", name: "OpenAI" },
            ]}
          />

          {/* DEFINITION */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Kurz erklärt</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was ist Fine-Tuning und wann lohnt es sich?</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p><strong className="text-foreground">Fine-Tuning</strong> bedeutet, ein bereits vortrainiertes Sprachmodell mit Ihren eigenen Daten weiterzutrainieren. Aus einem generischen <strong className="text-foreground">LLM</strong> wird so ein Modell, das Ihre Fachsprache, Ihre Aufgaben und Ihren Stil beherrscht, ohne dass Sie bei jeder Anfrage lange Beispiele mitliefern müssen.</p>
                    <p>Wir setzen auf <strong className="text-foreground">Open-Source-Modelle</strong> und effiziente Methoden wie LoRA und QLoRA. Damit lässt sich auch ohne riesige Rechenzentren ein eigenes Modell trainieren, das Ihnen gehört und DSGVO-konform auf EU-Infrastruktur läuft. Kein Vendor Lock-in, keine Abhängigkeit von einer US-Cloud.</p>
                    <p>Genauso wichtig ist die ehrliche <strong className="text-foreground">Einordnung</strong>: Nicht jedes Problem braucht Fine-Tuning. Oft ist eine Wissensdatenbank mit RAG oder besseres Prompting der schnellere und günstigere Weg. Wir sagen Ihnen klar, welcher Ansatz, oder welche Kombination, Ihr Ziel am besten erreicht.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">LoRA</Badge>
                    <Badge variant="secondary" className="rounded-full">Instruction-Tuning</Badge>
                    <Badge variant="secondary" className="rounded-full">Domain-Adaption</Badge>
                    <Badge variant="secondary" className="rounded-full">Eigenes LLM</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Fine-Tuning auf einen Blick</CardTitle>
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
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum ein eigenes Modell?</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Wo ein Standard-Modell an Grenzen stößt</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Generische Modelle kennen Ihr Unternehmen nicht. Mit gezieltem Fine-Tuning bekommen sie genau das Wissen und Verhalten, das Ihnen fehlt.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 pl-1">Mit einem Standard-Modell</div>
                  {problems.map(({ problem }, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl border bg-background"><X className="w-5 h-5 text-destructive mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{problem}</span></div>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-2 pl-1">Mit einem feingetunten Modell</div>
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
                <h2 className="text-3xl md:text-4xl font-bold">Mehr als ein Modell feintunen</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Wir bauen Modelle, die im Alltag tragen, und denken Datenschutz, Kosten und Wartbarkeit von Anfang an mit.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="hover-lift border-2 lg:col-span-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2"><Wand2 className="w-6 h-6 text-primary" /></div>
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
                <h2 className="text-3xl md:text-4xl font-bold">Wofür Unternehmen eigene Modelle trainieren</h2>
                <p className="text-lg text-muted-foreground mt-4">Wählen Sie einen Bereich, wir zeigen konkrete Einsatzszenarien aus der Praxis.</p>
              </div>
              <Tabs defaultValue="fachsprache" className="w-full">
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
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Methoden-Vergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Fine-Tuning vs. RAG vs. Prompting</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Welcher Ansatz passt? Das hängt von Ihrem Ziel, Ihren Daten und Ihrem Budget ab. Wir beraten unabhängig und kombinieren, wo es sinnvoll ist.</p>
              </div>
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[28%] font-bold text-foreground">Merkmal</TableHead>
                      <TableHead className="text-primary font-bold"><span className="inline-flex items-center gap-1.5"><Wand2 className="w-4 h-4" />Fine-Tuning</span></TableHead>
                      <TableHead className="text-muted-foreground"><span className="inline-flex items-center gap-1.5"><Database className="w-4 h-4" />RAG</span></TableHead>
                      <TableHead className="text-muted-foreground"><span className="inline-flex items-center gap-1.5"><Sparkles className="w-4 h-4" />Prompting</span></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparison.map((row, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{row.feature}</TableCell>
                        <TableCell className="text-sm text-primary font-medium">{row.finetuning}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{row.rag}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{row.prompting}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
              <p className="text-sm text-muted-foreground text-center mt-4">Oft ist die beste Lösung eine Kombination: <a href="/leistungen/ki-wissensdatenbank" className="text-primary hover:underline">RAG</a> für aktuelles Wissen, Fine-Tuning für Fachsprache und Verhalten. Wir ordnen ehrlich ein, was Ihr Anwendungsfall wirklich braucht.</p>
            </div>
          </section>

          {/* PROZESS */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unser Prozess</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Ihr Fine-Tuning-Projekt in 4 Schritten</h2>
                <p className="text-lg text-muted-foreground mt-4">Transparent, mit ehrlicher Methodenwahl und messbarer Qualität.</p>
              </div>
              <ProcessSteps steps={steps} />
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zu Fine-Tuning</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zu Fine-Tuning</h2>
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
