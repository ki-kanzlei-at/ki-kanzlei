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
  Database, Server, Cloud, Cpu, Layers, Boxes, Box, Workflow, Bot, Brain, Shield, ShieldCheck, Lock,
  Check, X, Search, Rocket, Phone, Clock, MapPin, Zap, RefreshCw, Code2, FileText, Eye, Users,
  Building2, Lightbulb, Target, Wand2, FlaskConical, Languages, Image as ImageIcon, Settings2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hugging Face & Open-Source-Modelle für Unternehmen",
  description:
    "Hugging Face für Unternehmen: Wir betreiben Open-Source-Modelle (LLMs, Embeddings, Vision, Speech) DSGVO-konform auf eigener EU-Infrastruktur und passen sie auf Ihre Daten an, statt Daten an US-Cloud-APIs zu geben. DACH-Raum.",
  keywords:
    "Hugging Face, Open Source LLM, Transformers, Open Source KI, Modelle hosten, LLM self-hosted, Hugging Face Beratung, eigene KI Modelle, Open Source Modelle Unternehmen, DSGVO KI",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/hugging-face" },
};

const faqs = [
  { q: "Was ist Hugging Face?", a: "Hugging Face ist die zentrale Plattform der Open-Source-KI-Welt. Auf ihr finden sich hunderttausende frei verfügbare Modelle für Sprache, Bild, Audio und mehr, dazu Datensätze und Werkzeuge wie die Transformers-Bibliothek. Für Unternehmen ist Hugging Face der Zugang zu leistungsfähigen Modellen, die man selbst betreiben und an die eigenen Daten anpassen kann, ohne von einem einzelnen proprietären Anbieter abhängig zu sein." },
  { q: "Warum Open-Source-Modelle statt einer Cloud-API wie OpenAI?", a: "Der entscheidende Grund ist Kontrolle. Open-Source-Modelle lassen sich auf Ihrer eigenen Infrastruktur in der EU betreiben, sodass kein Datensatz an einen US-Anbieter abfließt. Das ist für sensible Daten im DACH-Raum oft ausschlaggebend. Dazu kommen Unabhängigkeit von Preis- und Modelländerungen eines Anbieters, planbare Kosten bei hohem Volumen und die Möglichkeit, Modelle gezielt auf Ihre Fachsprache zu trainieren. Cloud-APIs bleiben sinnvoll, wo maximale Modellqualität ohne Datenschutzbedenken gefragt ist, wir beraten ehrlich." },
  { q: "Welche Modelle setzt ihr ein?", a: "Wir wählen je nach Aufgabe: offene Sprachmodelle für Chat, Textverständnis und Generierung, Embedding-Modelle für semantische Suche und RAG, Vision-Modelle für Bild- und Dokumentenerkennung sowie Speech-Modelle für Transkription. Welche konkreten Modelle passen, hängt von Sprache, Qualitätsanspruch, Hardware und Datenschutz ab. Wir testen Kandidaten an Ihren echten Daten, bevor wir uns festlegen." },
  { q: "Kann man Open-Source-Modelle DSGVO-konform betreiben?", a: "Ja, das ist gerade ihr Vorteil. Wir hosten die Modelle auf Servern in der EU oder direkt in Ihrer Infrastruktur, sodass die Datenverarbeitung Europa nicht verlässt. Zugänge werden abgesichert, Verarbeitung protokolliert und auf Wunsch ein Auftragsverarbeitungsvertrag geschlossen. So nutzen Sie moderne KI, ohne Daten aus der Hand zu geben." },
  { q: "Lassen sich die Modelle auf unsere Daten anpassen?", a: "Ja. Über Fine-Tuning passen wir offene Modelle an Ihre Fachsprache, Ihren Stil und Ihre Aufgaben an, oft mit ressourcenschonenden Verfahren wie LoRA. Für aktuelles Firmenwissen kombinieren wir Modelle mit einer Wissensdatenbank per RAG. So entsteht KI, die Ihre Domäne wirklich versteht." },
  { q: "Brauche ich teure GPU-Hardware dafür?", a: "Nicht zwingend. Viele Open-Source-Modelle laufen effizient auf moderater Hardware, gerade kleinere und quantisierte Varianten. Für höhere Lasten nutzen wir dedizierte EU-GPU-Server oder optimiertes Serving. Wir dimensionieren so, dass Leistung und Kosten zu Ihrem Anwendungsfall passen, statt pauschal die größte Hardware zu wählen." },
  { q: "Wie hängt das mit Private AI zusammen?", a: "Eng. Hugging Face liefert die offenen Modelle, Private AI ist der DSGVO-konforme, self-hosted Betrieb davon auf Ihrer Infrastruktur. Gemeinsam ergeben sie KI, die leistungsfähig ist und gleichzeitig vollständig in Ihrer Kontrolle bleibt." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Hugging Face & Open-Source-Modelle", serviceType: "Open Source LLM, Hugging Face, Transformers, Private AI", provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" }, description: "Open-Source-Modelle von Hugging Face DSGVO-konform auf EU-Infrastruktur betreiben und auf Firmendaten anpassen, für Unternehmen im DACH-Raum.", areaServed: [{ "@type": "Country", name: "Austria" }, { "@type": "Country", name: "Germany" }, { "@type": "Country", name: "Switzerland" }] };

const stats = [
  { value: "1 Mio.+", label: "offene Modelle verfügbar" },
  { value: "EU", label: "Hosting, Daten bleiben da" },
  { value: "0", label: "Datenweitergabe an US-APIs" },
  { value: "Ihre", label: "Fachsprache antrainierbar" },
];
const ataglance = [
  ["Plattform", "Open-Source-KI-Hub"],
  ["Modelle", "Sprache, Bild, Audio"],
  ["Betrieb", "self-hosted in der EU"],
  ["Anpassung", "Fine-Tuning & RAG"],
  ["Datenschutz", "DSGVO, keine US-API"],
  ["Kosten", "planbar, kein Lock-in"],
];
const problems = [
  { problem: "Firmendaten landen über Cloud-APIs bei US-Anbietern.", solution: "Open-Source-Modelle laufen self-hosted in der EU, Daten bleiben im Haus." },
  { problem: "Ein Anbieter ändert Preise, Limits oder das Modell.", solution: "Open Source macht unabhängig, kein Lock-in, kein abgedrehter Dienst." },
  { problem: "Das generische Modell kennt Ihre Fachsprache nicht.", solution: "Wir passen offene Modelle per Fine-Tuning an Ihre Domäne an." },
  { problem: "Bei viel Volumen werden API-Kosten unkalkulierbar.", solution: "Self-hosted Modelle bringen planbare Fixkosten statt Kosten je Anfrage." },
];
const features = [
  { icon: Lock, title: "Open-Source-KI, self-hosted in der EU", description: "Wir betreiben leistungsfähige offene Modelle auf Ihrer Infrastruktur oder auf EU-Servern. Kein Datensatz verlässt Europa, kein US-Anbieter sieht Ihre Inhalte. Genau das, was Kanzleien, Praxen, Behörden und alle brauchen, die mit sensiblen Daten arbeiten und trotzdem moderne KI wollen." },
  { icon: Boxes, title: "Das richtige Modell je Aufgabe", description: "Sprache, Embeddings, Vision, Speech. Wir testen Kandidaten an Ihren Daten und wählen das beste je Anwendungsfall." },
  { icon: Wand2, title: "Auf Ihre Daten angepasst", description: "Per Fine-Tuning lernen Modelle Ihre Fachsprache und Aufgaben, kombiniert mit RAG für aktuelles Wissen." },
  { icon: Cpu, title: "Effizientes Serving", description: "Quantisierung und optimiertes Serving holen Leistung aus moderater Hardware und halten Kosten niedrig." },
  { icon: ShieldCheck, title: "DSGVO von Anfang an", description: "EU-Hosting, abgesicherte Zugänge, Protokollierung und AVV, Datenschutz ist eingebaut, nicht aufgesetzt." },
  { icon: RefreshCw, title: "Unabhängig & zukunftsfähig", description: "Kein Vendor Lock-in. Sie können Modelle wechseln, wenn bessere offene Modelle erscheinen." },
];
const usecases = [
  { value: "sprache", label: "Sprache", icon: FileText, head: "Sprachmodelle (LLMs)", intro: "Chat, Textverständnis und Generierung, self-hosted.", items: ["Interner KI-Assistent auf Firmenwissen.", "Texte zusammenfassen und klassifizieren.", "Entwürfe und Antworten generieren.", "Alles ohne Datenabfluss."] },
  { value: "suche", label: "Suche", icon: Search, head: "Embeddings & semantische Suche", intro: "Wissen findbar machen, als Basis für RAG.", items: ["Dokumente per Bedeutung durchsuchen.", "Embeddings für eigene Inhalte.", "Basis für KI-Wissensdatenbanken.", "Mehrsprachig."] },
  { value: "vision", label: "Vision", icon: ImageIcon, head: "Bild & Dokumente", intro: "Bilder und Dokumente automatisch verstehen.", items: ["Belege und Formulare auslesen.", "Bilder klassifizieren.", "Objekte und Inhalte erkennen.", "On-Premise möglich."] },
  { value: "speech", label: "Speech", icon: Languages, head: "Sprache & Transkription", intro: "Audio in Text und zurück, datenschutzkonform.", items: ["Gespräche transkribieren.", "Sprachbefehle verstehen.", "Mehrsprachige Verarbeitung.", "Lokal betreibbar."] },
];
const comparison = [
  { feature: "Hosting & Datenschutz", os: "self-hosted, EU, DSGVO", api: "US-Cloud meist", schatten: "unkontrolliert" },
  { feature: "Datenabfluss", os: "keiner", api: "an Anbieter", schatten: "an beliebige Tools" },
  { feature: "Anpassbarkeit", os: "voll, Fine-Tuning", api: "begrenzt", schatten: "keine" },
  { feature: "Kosten bei Volumen", os: "planbare Fixkosten", api: "je Anfrage", schatten: "versteckt" },
  { feature: "Vendor Lock-in", os: "keiner", api: "hoch", schatten: "diffus" },
  { feature: "Modellqualität Spitze", os: "sehr gut, wachsend", api: "oft führend", schatten: "zufällig" },
];
const steps = [
  { step: "01", icon: Phone, title: "Kostenlose Erstanalyse", time: "30 Minuten", description: "Wir klären Anwendungsfälle, Datenschutzanforderungen und Hardware und prüfen, welche offenen Modelle passen." },
  { step: "02", icon: FlaskConical, title: "Modellauswahl & Test", time: "Woche 1 bis 2", description: "Wir testen Modelle an Ihren echten Daten, vergleichen Qualität, Kosten und Hardware und legen den Stack fest." },
  { step: "03", icon: Settings2, title: "Aufbau & Anpassung", time: "Woche 2 bis 5", description: "Wir richten EU-Hosting ein, optimieren das Serving und passen Modelle per Fine-Tuning und RAG an Ihre Domäne an." },
  { step: "04", icon: Rocket, title: "Go-Live & Betrieb", time: "ab Woche 5", description: "Die Modelle gehen produktiv, DSGVO-konform und überwacht. Wir optimieren laufend und tauschen Modelle, wenn bessere erscheinen." },
];
const related = [
  { href: "/leistungen/private-ai", icon: Lock, title: "Private AI & Lokale KI", desc: "Der DSGVO-konforme, self-hosted Betrieb offener Modelle auf Ihrer Infrastruktur." },
  { href: "/leistungen/fine-tuning", icon: Wand2, title: "LLM Fine-Tuning", desc: "Offene Modelle gezielt auf Ihre Fachsprache und Aufgaben trainieren." },
  { href: "/leistungen/mlops", icon: Workflow, title: "MLOps & LLMOps", desc: "Modelle zuverlässig in Produktion bringen, betreiben und überwachen." },
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
      <Script id="faq-huggingface" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-huggingface" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <LogoBox slug="huggingface" alt="Hugging Face" imgClassName="w-9 h-9" boxClassName="rounded-xl p-2 shadow-sm" />
                    <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">Hugging Face, Open Source KI</Badge>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Open-Source-Modelle, <span className="text-primary">die Ihnen gehören</span></h1>
                  <p className="text-lg text-muted-foreground max-w-xl">Hugging Face öffnet den Zugang zu über einer Million offener Modelle. Wir betreiben sie DSGVO-konform auf Ihrer EU-Infrastruktur und passen sie auf Ihre Daten an, statt Firmenwissen an US-Cloud-APIs zu geben.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild><a href="#contact">Kostenloses Assessment</a></Button>
                    <Button size="lg" variant="outline" asChild><a href="#vergleich">Open Source vs. Cloud-API</a></Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-primary" /> Self-hosted</span>
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO & EU</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>
                <div className="relative">
                  <Card className="border-2 shadow-xl shadow-primary/5 overflow-hidden">
                    <CardHeader className="border-b border-border py-3">
                      <div className="flex items-center gap-2">
                        <LogoBox slug="huggingface" alt="Hugging Face" imgClassName="w-4 h-4" boxClassName="p-1 rounded" />
                        <span className="font-mono text-xs text-muted-foreground">models.eu-host</span>
                        <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground"><span className="w-2 h-2 rounded-full bg-green-500" /> EU-Server</span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-3">
                      {[{ icon: FileText, t: "LLM, Chat & Text" }, { icon: Search, t: "Embeddings, Suche" }, { icon: ImageIcon, t: "Vision, Dokumente" }, { icon: Languages, t: "Speech, Transkription" }].map((n, i) => { const Icon = n.icon; return (
                        <div key={i} className={`flex items-center gap-3 rounded-xl border-2 px-3.5 py-2.5 ${i === 0 ? "border-primary/40 bg-primary/5" : "border-border bg-background shadow-sm"}`}><div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><Icon className="w-5 h-5 text-primary" /></div><div className="min-w-0 flex-1"><div className="text-sm font-semibold truncate">{n.t}</div></div><Lock className="w-4 h-4 text-primary/60 shrink-0" /></div>
                      ); })}
                    </CardContent>
                  </Card>
                  <div className="hidden lg:flex absolute -top-4 -right-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium"><Boxes className="w-3.5 h-3.5 text-primary" /> 1 Mio.+ Modelle</div>
                  <div className="hidden lg:flex absolute -bottom-4 -left-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium"><Lock className="w-3.5 h-3.5 text-primary" /> kein Datenabfluss</div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-10 md:py-12 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-2 md:grid-cols-4 border-2 border-border rounded-2xl overflow-hidden bg-card">{stats.map(({ value, label }, i) => (<div key={i} className="p-6 md:p-8 text-center border-b md:border-b-0 border-r last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r border-border"><div className="text-3xl md:text-4xl font-bold text-primary">{value}</div><div className="text-xs md:text-sm text-muted-foreground mt-1.5">{label}</div></div>))}</div>
            </div>
          </section>

          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Kurz erklärt</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Der Zugang zur offenen KI-Welt</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p><strong className="text-foreground">Hugging Face</strong> ist die zentrale Plattform der Open-Source-KI: über eine Million freie Modelle für Sprache, Bild und Audio, dazu Datensätze und Werkzeuge wie Transformers. Der Schlüssel zu KI, die Sie selbst betreiben.</p>
                    <p>Der große Vorteil offener Modelle ist <strong className="text-foreground">Kontrolle</strong>: Sie laufen auf Ihrer Infrastruktur in der EU, kein Datensatz fließt an einen US-Anbieter, kein Anbieter ändert Ihnen über Nacht Preise oder Modell.</p>
                    <p>Wir machen daraus produktive, <strong className="text-foreground">DSGVO-konforme KI</strong>: das richtige Modell je Aufgabe, angepasst auf Ihre Fachsprache, effizient betrieben und voll in Ihrer Hand.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Open Source LLM</Badge>
                    <Badge variant="secondary" className="rounded-full">Transformers</Badge>
                    <Badge variant="secondary" className="rounded-full">self-hosted</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader><CardTitle className="text-xl">Hugging Face auf einen Blick</CardTitle><CardDescription>Die wichtigsten Eckdaten im Überblick.</CardDescription></CardHeader>
                  <CardContent className="space-y-1">{ataglance.map(([label, value]) => (<div key={label} className="flex items-center justify-between py-2.5 border-b border-border last:border-0"><span className="text-sm font-medium text-foreground">{label}</span><span className="text-sm text-muted-foreground text-right max-w-[55%]">{value}</span></div>))}</CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum Open Source?</Badge><h2 className="text-3xl md:text-4xl font-bold">KI nutzen, ohne Daten aus der Hand zu geben</h2><p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Open-Source-Modelle lösen genau die Probleme, die Cloud-APIs im DACH-Raum schaffen.</p></div>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-3"><div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 pl-1">Was Cloud-APIs schwierig machen</div>{problems.map(({ problem }, i) => (<div key={i} className="flex items-start gap-3 p-4 rounded-xl border bg-background"><X className="w-5 h-5 text-destructive mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{problem}</span></div>))}</div>
                <div className="space-y-3"><div className="text-xs font-semibold text-primary uppercase tracking-widest mb-2 pl-1">Was offene Modelle ermöglichen</div>{problems.map(({ solution }, i) => (<div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-primary/20 bg-primary/5"><Check className="w-5 h-5 text-primary mt-0.5 shrink-0" /><span className="text-sm leading-relaxed font-medium">{solution}</span></div>))}</div>
              </div>
            </div>
          </section>

          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Was wir liefern</Badge><h2 className="text-3xl md:text-4xl font-bold">Offene Modelle, produktiv gemacht</h2><p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Von der Modellwahl über Anpassung bis zum effizienten, DSGVO-konformen Betrieb.</p></div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="hover-lift border-2 lg:col-span-2 bg-primary/5 border-primary/20"><CardHeader><div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2"><Lock className="w-6 h-6 text-primary" /></div><CardTitle className="text-xl">{features[0].title}</CardTitle><CardDescription className="text-base leading-relaxed">{features[0].description}</CardDescription></CardHeader></Card>
                {features.slice(1).map((f, i) => { const Icon = f.icon; return (<Card key={i} className="hover-lift border-2"><CardHeader><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2"><Icon className="w-5 h-5 text-primary" /></div><CardTitle className="text-lg">{f.title}</CardTitle><CardDescription className="leading-relaxed">{f.description}</CardDescription></CardHeader></Card>); })}
              </div>
            </div>
          </section>

          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Anwendungsfälle</Badge><h2 className="text-3xl md:text-4xl font-bold">Was wir mit offenen Modellen bauen</h2><p className="text-lg text-muted-foreground mt-4">Wählen Sie einen Bereich, wir zeigen konkrete Anwendungen.</p></div>
              <Tabs defaultValue="sprache" className="w-full">
                <TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">{usecases.map((d) => { const Icon = d.icon; return (<TabsTrigger key={d.value} value={d.value} className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border"><Icon className="w-4 h-4 mr-1.5" />{d.label}</TabsTrigger>); })}</TabsList>
                {usecases.map((d) => (<TabsContent key={d.value} value={d.value}><Card className="border-2"><CardContent className="pt-6"><h3 className="text-xl font-bold mb-2">{d.head}</h3><p className="text-muted-foreground leading-relaxed mb-5">{d.intro}</p><div className="grid sm:grid-cols-2 gap-3">{d.items.map((item, j) => (<div key={j} className="flex items-start gap-2.5 p-3 rounded-lg border bg-background"><Brain className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{item}</span></div>))}</div></CardContent></Card></TabsContent>))}
              </Tabs>
            </div>
          </section>

          <section id="vergleich" className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Vergleich</Badge><h2 className="text-3xl md:text-4xl font-bold">Open Source vs. Cloud-API vs. Schatten-KI</h2><p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Schatten-KI heißt: Mitarbeiter nutzen unkontrolliert Tools. Wir bringen KI sicher und kontrolliert ins Unternehmen.</p></div>
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader><TableRow className="bg-muted/50"><TableHead className="w-[28%] font-bold text-foreground">Merkmal</TableHead><TableHead className="text-primary font-bold">Open Source</TableHead><TableHead className="text-muted-foreground">Cloud-API</TableHead><TableHead className="text-muted-foreground">Schatten-KI</TableHead></TableRow></TableHeader>
                  <TableBody>{comparison.map((row, i) => (<TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}><TableCell className="font-medium">{row.feature}</TableCell><TableCell className="text-sm text-primary font-medium">{row.os}</TableCell><TableCell className="text-sm text-muted-foreground">{row.api}</TableCell><TableCell className="text-sm text-muted-foreground">{row.schatten}</TableCell></TableRow>))}</TableBody>
                </Table>
              </Card>
            </div>
          </section>

          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unser Prozess</Badge><h2 className="text-3xl md:text-4xl font-bold">Ihr Open-Source-KI-Projekt in 4 Schritten</h2><p className="text-lg text-muted-foreground mt-4">Von der Modellwahl bis zum sicheren Betrieb in der EU.</p></div>
              <ProcessSteps steps={steps} />
            </div>
          </section>

          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge><h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zu Hugging Face</h2></div>
              <Accordion type="single" collapsible className="w-full space-y-3">{faqs.map((f, i) => (<AccordionItem key={i} value={`item-${i}`} className="border-2 border-border rounded-xl px-6 bg-background data-[state=open]:border-primary/30 data-[state=open]:bg-primary/5"><AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-5">{f.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">{f.a}</AccordionContent></AccordionItem>))}</Accordion>
            </div>
          </section>

          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Mehr Leistungen</Badge><h2 className="text-3xl md:text-4xl font-bold">Passt gut zu Hugging Face</h2></div>
              <div className="grid md:grid-cols-3 gap-5">{related.map((s, i) => { const Icon = s.icon; return (<a key={i} href={s.href} className="group block"><Card className="h-full border-2 hover-lift group-hover:border-primary/40"><CardHeader><div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${serviceLogos[s.href] ? "bg-white border border-border" : "bg-primary/10"}`}>{serviceLogos[s.href] ? <img src={`/img/logos/${serviceLogos[s.href]}.svg`} alt={s.title} className="w-7 h-7 object-contain" /> : <Icon className="w-6 h-6 text-primary" />}</div><CardTitle className="text-xl">{s.title}</CardTitle></CardHeader><CardContent><p className="text-muted-foreground leading-relaxed">{s.desc}</p></CardContent></Card></a>); })}</div>
            </div>
          </section>

          <ContactForm />
        </main>
        <FooterModern />
      </div>
    </>
  );
}
