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
  Video, Film, Clapperboard, Camera, Image as ImageIcon, Palette, PlayCircle, Sparkles, Layers, Box,
  Bot, ShieldCheck, Lock, Check, X, Search, Rocket, Phone, Clock, MapPin, Zap, RefreshCw, Eye, Users,
  Megaphone, Building2, Lightbulb, Target, Globe, Settings2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sora für Marketing: KI-Video-Produktion",
  description:
    "Sora für Unternehmen: Wir produzieren mit OpenAIs Sora hochwertige KI-Videos für Marketing und Social Media, markenkonform und rechtssicher nach EU AI Act, integriert in Ihre Automatisierung. DACH-Raum, kommerziell nutzbar.",
  keywords:
    "Sora, OpenAI Sora, Sora Video, KI Video erstellen, AI Video, Sora Marketing, KI Werbevideo, Sora Agentur, AI Video Generator, Text to Video",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/sora" },
};

const faqs = [
  { q: "Was ist Sora?", a: "Sora ist das Text-zu-Video-Modell von OpenAI. Aus einer textlichen Beschreibung erzeugt Sora kurze, hochauflösende Videoclips mit erstaunlich realistischer Bewegung, Licht und Bildsprache. Für Unternehmen ist Sora ein Werkzeug, um Videoideen in kürzester Zeit sichtbar zu machen, von der Produktszene bis zum Social-Media-Clip, ohne Drehteam und Set." },
  { q: "Wie nutzt ihr Sora für unser Marketing?", a: "Wir setzen Sora als Teil eines toolübergreifenden Produktionsprozesses ein. Nach Briefing und Bildsprache erzeugen wir Szenen mit Sora, kombinieren bei Bedarf andere Modelle, schneiden, vertonen und liefern markenkonforme Clips für Ihre Kanäle. Sie bekommen fertige Videos, nicht nur Rohmaterial aus einem Generator." },
  { q: "Sind mit Sora erstellte Videos kommerziell nutzbar?", a: "Ja, über die kommerziellen Tarife. Wir klären die Nutzungsrechte für Ihren Einsatzzweck vorab und achten auf rechtssichere Inhalte, etwa bei Marken, Gesichtern und Musik. So können Sie die Videos bedenkenlos in Ihren Kampagnen verwenden." },
  { q: "Muss ich KI-Videos kennzeichnen?", a: "In der Regel ja. KI-generierte oder wesentlich veränderte Inhalte unterliegen Transparenzpflichten nach Artikel 50 EU AI Act und sind entsprechend zu kennzeichnen. Wir setzen die Kennzeichnung korrekt um, sodass Ihre Kampagne rechtlich sauber bleibt." },
  { q: "Wie bleibt das markenkonform?", a: "Wir definieren mit Ihnen Bildsprache, Farben und Tonalität und verankern sie in Vorlagen und Prompts. So sehen die mit Sora erzeugten Clips nach Ihrer Marke aus und nicht nach beliebigem KI-Material. Über mehrere Videos hinweg halten wir Look und Stil konsistent." },
  { q: "Wie schnell habe ich fertige Videos?", a: "Erste Clips entstehen oft innerhalb weniger Tage, Varianten in Stunden. Statt wochenlanger Produktion testen Sie schnell verschiedene Ansätze und skalieren, was funktioniert. Den genauen Rahmen klären wir im kostenlosen Erstgespräch." },
  { q: "Sora, Higgsfield oder Veo, was ist besser?", a: "Jedes Modell hat Stärken. Sora überzeugt mit Realismus und Bewegung, Higgsfield bietet als Plattform echte Regie und bündelt mehrere Modelle, Google Veo ist stark bei bestimmten Szenen und Längen. Wir sind nicht an ein Tool gebunden und wählen je Szene das beste. So bekommen Sie das beste Ergebnis statt eines Anbieter-Kompromisses." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Sora KI-Video-Produktion", serviceType: "KI-Videoproduktion, Sora, AI Video Marketing", provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" }, description: "KI-Video-Produktion mit OpenAIs Sora für Marketing im DACH-Raum: markenkonform, rechtssicher nach EU AI Act, toolübergreifend.", areaServed: [{ "@type": "Country", name: "Austria" }, { "@type": "Country", name: "Germany" }, { "@type": "Country", name: "Switzerland" }] };

const stats = [
  { value: "Text", label: "wird zu Video" },
  { value: "Tage", label: "statt Wochen Produktion" },
  { value: "EU", label: "konform & gekennzeichnet" },
  { value: "fertig", label: "Clips statt Rohmaterial" },
];
const ataglance = [
  ["Anbieter", "OpenAI"],
  ["Typ", "Text-zu-Video"],
  ["Stärke", "Realismus & Bewegung"],
  ["Einsatz", "Social, Ads, Produkt"],
  ["Recht", "EU AI Act Kennzeichnung"],
  ["Lieferung", "fertig geschnitten"],
];
const problems = [
  { problem: "Videoideen scheitern an Budget und Produktionszeit.", solution: "Mit Sora wird die Idee in Tagen zum sichtbaren Clip." },
  { problem: "Für Social Media fehlt ständig frisches Bewegtbild.", solution: "Wir liefern laufend markenkonforme Clips für jeden Kanal." },
  { problem: "Varianten zum Testen sind teuer.", solution: "Neue Szenen und Hooks entstehen in Stunden." },
  { problem: "KI-Video wirkt oft beliebig.", solution: "Mit Bildsprache und Vorlagen bleibt alles on brand." },
];
const features = [
  { icon: Clapperboard, title: "Sora im echten Produktionsprozess", description: "Sora erzeugt beeindruckende Szenen, aber ein Marketing-Video braucht mehr: Briefing, Bildsprache, Schnitt, Ton und Kennzeichnung. Wir betten Sora in einen sauberen Prozess ein und liefern fertige, markenkonforme Clips, nicht nur Generator-Output." },
  { icon: Sparkles, title: "Realistische Szenen", description: "Sora glänzt mit natürlicher Bewegung und Licht, ideal für Produkt- und Lifestyle-Szenen." },
  { icon: Layers, title: "Toolübergreifend", description: "Wir kombinieren Sora bei Bedarf mit Higgsfield, Veo und Runway, je Szene das beste Modell." },
  { icon: Megaphone, title: "Für Performance gebaut", description: "Hooks, Formate und Varianten für Social Ads, schnell iteriert und getestet." },
  { icon: ShieldCheck, title: "Rechtssicher & gekennzeichnet", description: "Nutzungsrechte geklärt, KI-Inhalte nach EU AI Act gekennzeichnet, kommerziell nutzbar." },
  { icon: RefreshCw, title: "In Ihren Workflow", description: "Produktion an n8n angebunden, von Briefing bis Ausspielung als verlässlicher Prozess." },
];
const usecases = [
  { value: "ads", label: "Social Ads", icon: Megaphone, head: "Social-Media-Werbung", intro: "Scroll-stoppende Clips in vielen Varianten.", items: ["Hook-Varianten für Reels und Shorts.", "Produkte realistisch inszenieren.", "Alle Formate aus einer Idee.", "A/B-Tests in Stunden."] },
  { value: "produkt", label: "Produkt", icon: Box, head: "Produkt & Brand", intro: "Produktszenen ohne Studio und Set.", items: ["Produkte in Wunschumgebungen.", "Lifestyle- und Anwendungsszenen.", "Saisonale Varianten.", "Konsistenter Markenlook."] },
  { value: "erklaer", label: "Story", icon: PlayCircle, head: "Story & Erklär", intro: "Kurze Geschichten und Konzepte sichtbar machen.", items: ["Szenenfolgen mit roter Linie.", "Konzepte und Visionen visualisieren.", "Markenkonforme Bildsprache.", "Mehrsprachige Varianten."] },
];
const comparison = [
  { feature: "Realismus & Bewegung", sora: "sehr stark", klassisch: "real, teuer", stock: "fix, generisch" },
  { feature: "Zeit bis Clip", sora: "Tage", klassisch: "Wochen", stock: "sofort" },
  { feature: "Kosten je Video", sora: "niedrig", klassisch: "hoch", stock: "niedrig" },
  { feature: "Individualität", sora: "hoch", klassisch: "hoch", stock: "gering" },
  { feature: "Iteration", sora: "in Stunden", klassisch: "langsam", stock: "begrenzt" },
  { feature: "Markenkonsistenz", sora: "mit Vorlagen", klassisch: "stark", stock: "schwach" },
];
const steps = [
  { step: "01", icon: Phone, title: "Kostenlose Erstanalyse", time: "30 Minuten", description: "Wir klären Kanäle, Ziele und Bildsprache und sichten die Video-Use-Cases mit dem größten Hebel." },
  { step: "02", icon: Palette, title: "Look & Vorlagen", time: "Woche 1", description: "Wir definieren Bildsprache und Vorlagen, damit jeder Clip nach Ihrer Marke aussieht." },
  { step: "03", icon: Clapperboard, title: "Produktion mit Sora", time: "laufend", description: "Wir erzeugen Szenen, kombinieren Modelle, schneiden und vertonen zu fertigen Clips." },
  { step: "04", icon: Rocket, title: "Ausspielung & Skalierung", time: "ab Woche 2", description: "Wir liefern fertige Assets, kennzeichnen KI-Inhalte und skalieren, auf Wunsch automatisiert." },
];
const related = [
  { href: "/leistungen/ki-video", icon: Video, title: "KI Video & Media Creation", desc: "Der breite Service rund um KI-Video, Bild und Werbeclips fürs Marketing." },
  { href: "/leistungen/higgsfield-ai", icon: Clapperboard, title: "Higgsfield AI", desc: "Cinematic KI-Videos mit echter Regie und gebündelten Modellen." },
  { href: "/leistungen/veo", icon: Film, title: "Google Veo", desc: "Googles KI-Videomodell, je Szene als Alternative oder Ergänzung." },
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
      <Script id="faq-sora" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-sora" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <LogoBox slug="openai" alt="Sora" imgClassName="h-9 w-auto max-w-[2.75rem]" boxClassName="rounded-xl p-2 shadow-sm" />
                    <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">Sora, KI-Video</Badge>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Marketing-Videos mit <span className="text-primary">Sora</span></h1>
                  <p className="text-lg text-muted-foreground max-w-xl">OpenAIs Sora macht aus einer Beschreibung realistische Videoszenen. Wir setzen Sora in einem echten Produktionsprozess ein und liefern markenkonforme, rechtssichere Clips für Ihre Kanäle, in Tagen statt Wochen.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild><a href="#contact">Kostenloses Assessment</a></Button>
                    <Button size="lg" variant="outline" asChild><a href="#vergleich">Sora vs. klassisch</a></Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-primary" /> realistisch</span>
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> EU AI Act konform</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>
                <div className="relative">
                  <Card className="border-2 shadow-xl shadow-primary/5 overflow-hidden">
                    <CardHeader className="border-b border-border py-3"><div className="flex items-center gap-2"><span className="flex gap-1.5"><span className="w-3 h-3 rounded-full bg-muted-foreground/20" /><span className="w-3 h-3 rounded-full bg-muted-foreground/20" /><span className="w-3 h-3 rounded-full bg-muted-foreground/20" /></span><span className="ml-2 font-mono text-xs text-muted-foreground">prompt-to-clip.sora</span><span className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground"><span className="w-2 h-2 rounded-full bg-green-500" /> rendert</span></div></CardHeader>
                    <CardContent className="p-6 space-y-3">
                      <div className="rounded-lg border border-border bg-background px-3 py-2 text-xs text-muted-foreground font-mono">„Produkt auf Holztisch, weiches Morgenlicht, langsame Kamerafahrt"</div>
                      <div className="aspect-video rounded-xl border-2 border-primary/30 bg-primary/5 flex items-center justify-center relative"><PlayCircle className="w-14 h-14 text-primary/70" /><span className="absolute bottom-2 left-2 text-[10px] uppercase tracking-wider text-primary font-medium bg-background/80 rounded px-1.5 py-0.5">Sora, 1080p</span></div>
                    </CardContent>
                  </Card>
                  <div className="hidden lg:flex absolute -top-4 -right-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium"><Zap className="w-3.5 h-3.5 text-primary" /> Text zu Video</div>
                  <div className="hidden lg:flex absolute -bottom-4 -left-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium"><Sparkles className="w-3.5 h-3.5 text-primary" /> markenkonform</div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-10 md:py-12 bg-white/50"><div className="container mx-auto px-4 max-w-7xl"><div className="grid grid-cols-2 md:grid-cols-4 border-2 border-border rounded-2xl overflow-hidden bg-card">{stats.map(({ value, label }, i) => (<div key={i} className="p-6 md:p-8 text-center border-b md:border-b-0 border-r last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r border-border"><div className="text-3xl md:text-4xl font-bold text-primary">{value}</div><div className="text-xs md:text-sm text-muted-foreground mt-1.5">{label}</div></div>))}</div></div></section>

          <section className="py-14 md:py-20"><div className="container mx-auto px-4 max-w-7xl"><div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Kurz erklärt</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Sora ist das Werkzeug, der Prozess macht den Unterschied</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p><strong className="text-foreground">Sora</strong> ist OpenAIs Text-zu-Video-Modell. Aus einer Beschreibung entstehen realistische Clips mit natürlicher Bewegung und Licht. Für Marketing ist das ein enormer Hebel.</p>
                <p>Doch aus einer guten Szene wird erst mit <strong className="text-foreground">Briefing, Schnitt, Ton und Kennzeichnung</strong> ein Marketing-Video. Genau das liefern wir: fertige, markenkonforme Clips statt Generator-Rohmaterial.</p>
                <p>Wir sind <strong className="text-foreground">nicht an ein Tool gebunden</strong>: Sora, Higgsfield, Veo und Runway je nach Szene, immer mit Blick auf Marke und Recht.</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6"><Badge variant="secondary" className="rounded-full">Text to Video</Badge><Badge variant="secondary" className="rounded-full">AI Video</Badge><Badge variant="secondary" className="rounded-full">Video Marketing</Badge></div>
            </div>
            <Card className="border-2 bg-primary/5 border-primary/20"><CardHeader><CardTitle className="text-xl">Sora auf einen Blick</CardTitle><CardDescription>Die wichtigsten Eckdaten im Überblick.</CardDescription></CardHeader><CardContent className="space-y-1">{ataglance.map(([label, value]) => (<div key={label} className="flex items-center justify-between py-2.5 border-b border-border last:border-0"><span className="text-sm font-medium text-foreground">{label}</span><span className="text-sm text-muted-foreground text-right max-w-[55%]">{value}</span></div>))}</CardContent></Card>
          </div></div></section>

          <section className="py-14 md:py-20 bg-white/50"><div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum jetzt?</Badge><h2 className="text-3xl md:text-4xl font-bold">Bewegtbild, das sonst zu teuer wäre</h2><p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">KI-Video verschiebt, was sich ein Team an Videocontent leisten kann.</p></div>
            <div className="grid md:grid-cols-2 gap-5"><div className="space-y-3"><div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 pl-1">Was heute bremst</div>{problems.map(({ problem }, i) => (<div key={i} className="flex items-start gap-3 p-4 rounded-xl border bg-background"><X className="w-5 h-5 text-destructive mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{problem}</span></div>))}</div><div className="space-y-3"><div className="text-xs font-semibold text-primary uppercase tracking-widest mb-2 pl-1">Was Sora ermöglicht</div>{problems.map(({ solution }, i) => (<div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-primary/20 bg-primary/5"><Check className="w-5 h-5 text-primary mt-0.5 shrink-0" /><span className="text-sm leading-relaxed font-medium">{solution}</span></div>))}</div></div>
          </div></section>

          <section className="py-14 md:py-20"><div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Was wir liefern</Badge><h2 className="text-3xl md:text-4xl font-bold">Fertige Clips, nicht nur Output</h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"><Card className="hover-lift border-2 lg:col-span-2 bg-primary/5 border-primary/20"><CardHeader><div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2"><Clapperboard className="w-6 h-6 text-primary" /></div><CardTitle className="text-xl">{features[0].title}</CardTitle><CardDescription className="text-base leading-relaxed">{features[0].description}</CardDescription></CardHeader></Card>{features.slice(1).map((f, i) => { const Icon = f.icon; return (<Card key={i} className="hover-lift border-2"><CardHeader><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2"><Icon className="w-5 h-5 text-primary" /></div><CardTitle className="text-lg">{f.title}</CardTitle><CardDescription className="leading-relaxed">{f.description}</CardDescription></CardHeader></Card>); })}</div>
          </div></section>

          <section className="py-14 md:py-20 bg-white/50"><div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Anwendungsfälle</Badge><h2 className="text-3xl md:text-4xl font-bold">Wofür wir Sora einsetzen</h2></div>
            <Tabs defaultValue="ads" className="w-full"><TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">{usecases.map((d) => { const Icon = d.icon; return (<TabsTrigger key={d.value} value={d.value} className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border"><Icon className="w-4 h-4 mr-1.5" />{d.label}</TabsTrigger>); })}</TabsList>{usecases.map((d) => (<TabsContent key={d.value} value={d.value}><Card className="border-2"><CardContent className="pt-6"><h3 className="text-xl font-bold mb-2">{d.head}</h3><p className="text-muted-foreground leading-relaxed mb-5">{d.intro}</p><div className="grid sm:grid-cols-2 gap-3">{d.items.map((item, j) => (<div key={j} className="flex items-start gap-2.5 p-3 rounded-lg border bg-background"><Video className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{item}</span></div>))}</div></CardContent></Card></TabsContent>))}</Tabs>
          </div></section>

          <section id="vergleich" className="py-14 md:py-20"><div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Vergleich</Badge><h2 className="text-3xl md:text-4xl font-bold">Sora vs. klassische Produktion vs. Stock</h2></div>
            <Card className="border-2 overflow-hidden"><Table><TableHeader><TableRow className="bg-muted/50"><TableHead className="w-[28%] font-bold text-foreground">Merkmal</TableHead><TableHead className="text-primary font-bold">Sora / KI</TableHead><TableHead className="text-muted-foreground">Klassisch</TableHead><TableHead className="text-muted-foreground">Stock</TableHead></TableRow></TableHeader><TableBody>{comparison.map((row, i) => (<TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}><TableCell className="font-medium">{row.feature}</TableCell><TableCell className="text-sm text-primary font-medium">{row.sora}</TableCell><TableCell className="text-sm text-muted-foreground">{row.klassisch}</TableCell><TableCell className="text-sm text-muted-foreground">{row.stock}</TableCell></TableRow>))}</TableBody></Table></Card>
          </div></section>

          <section className="py-14 md:py-20 bg-white/50"><div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unser Prozess</Badge><h2 className="text-3xl md:text-4xl font-bold">Ihr KI-Video-Projekt in 4 Schritten</h2></div>
            <ProcessSteps steps={steps} />
          </div></section>

          <section className="py-14 md:py-20"><div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge><h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zu Sora</h2></div>
            <Accordion type="single" collapsible className="w-full space-y-3">{faqs.map((f, i) => (<AccordionItem key={i} value={`item-${i}`} className="border-2 border-border rounded-xl px-6 bg-background data-[state=open]:border-primary/30 data-[state=open]:bg-primary/5"><AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-5">{f.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">{f.a}</AccordionContent></AccordionItem>))}</Accordion>
          </div></section>

          <section className="py-14 md:py-20 bg-white/50"><div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Mehr Leistungen</Badge><h2 className="text-3xl md:text-4xl font-bold">Passt gut zu Sora</h2></div>
            <div className="grid md:grid-cols-3 gap-5">{related.map((s, i) => { const Icon = s.icon; return (<a key={i} href={s.href} className="group block"><Card className="h-full border-2 hover-lift group-hover:border-primary/40"><CardHeader><div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${serviceLogos[s.href] ? "bg-white border border-border" : "bg-primary/10"}`}>{serviceLogos[s.href] ? <img src={`/img/logos/${serviceLogos[s.href]}.svg`} alt={s.title} className="w-7 h-7 object-contain" /> : <Icon className="w-6 h-6 text-primary" />}</div><CardTitle className="text-xl">{s.title}</CardTitle></CardHeader><CardContent><p className="text-muted-foreground leading-relaxed">{s.desc}</p></CardContent></Card></a>); })}</div>
          </div></section>

          <ContactForm />
        </main>
        <FooterModern />
      </div>
    </>
  );
}
