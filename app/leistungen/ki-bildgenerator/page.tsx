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
  Image as ImageIcon, Palette, Wand2, Camera, Sparkles, Layers, Box, Video, Bot, ShieldCheck, Lock,
  Check, X, Search, Rocket, Phone, Clock, MapPin, Zap, RefreshCw, Eye, Users, Megaphone, Building2,
  Lightbulb, Target, Globe, Settings2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "KI-Bildgenerator für Marketing: KI-Bilder erstellen",
  description:
    "KI-Bilder für Unternehmen: Wir erzeugen markenkonforme Visuals, Produktbilder und Key-Visuals mit KI-Bildgeneratoren, rechtssicher nach EU AI Act und in Ihre Prozesse integriert. Bildwelten in Minuten statt Tagen, DACH-Raum.",
  keywords:
    "KI Bildgenerator, KI Bilder erstellen, AI Bildgenerierung, KI Bild, AI Image Generator, KI Produktbilder, KI Visuals, Bildgenerator KI, generative Bilder, KI Grafik",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/ki-bildgenerator" },
};

const faqs = [
  { q: "Was ist ein KI-Bildgenerator?", a: "Ein KI-Bildgenerator erzeugt aus einer textlichen Beschreibung oder Vorlagen fotorealistische oder illustrative Bilder. Moderne Modelle liefern Visuals in hoher Qualität, von Produktszenen über Key-Visuals bis zu Illustrationen, in Minuten statt Stunden oder Tagen. Für Marketing ist das ein enormer Hebel, um schnell und günstig viele hochwertige Bilder zu erhalten." },
  { q: "Wie sorgt ihr für markenkonforme Bilder?", a: "Wir definieren mit Ihnen Bildsprache, Farben, Stil und wiederkehrende Elemente und verankern sie in Vorlagen und Prompts. So sehen die erzeugten Bilder nach Ihrer Marke aus und bleiben über viele Motive hinweg konsistent, statt wie zufälliges KI-Material zu wirken." },
  { q: "Sind KI-Bilder kommerziell nutzbar und rechtssicher?", a: "Ja, über die kommerziellen Tarife der Modelle. Wir klären die Nutzungsrechte für Ihren Einsatzzweck und achten auf rechtssichere Inhalte, etwa bei Marken, Personen und geschützten Werken. KI-generierte Inhalte kennzeichnen wir, wo erforderlich, nach den Vorgaben des EU AI Act." },
  { q: "Welche Modelle setzt ihr ein?", a: "Wir arbeiten toolübergreifend und wählen je Anforderung das passende Modell, für Fotorealismus, Illustrationen oder grafische Stile. Auf Wunsch betreiben wir Bildmodelle auch DSGVO-konform auf eigener EU-Infrastruktur, wenn sensible oder exklusive Inhalte im Spiel sind." },
  { q: "Können bestehende Produktbilder einbezogen werden?", a: "Ja. Wir können Ihre Produkte als Vorlage nutzen und in neue Szenen und Umgebungen setzen, Hintergründe austauschen oder Varianten erzeugen. So entsteht aus einem Produktfoto eine ganze Bildwelt für unterschiedliche Kanäle und Kampagnen." },
  { q: "Wie schnell bekomme ich Bilder?", a: "Erste markenkonforme Bilder entstehen oft am selben oder nächsten Tag, sobald Stil und Vorlagen stehen. Varianten dauern Minuten. So produzieren Sie schnell viel Material und testen, was wirkt." },
  { q: "Lässt sich die Bildproduktion automatisieren?", a: "Ja. Wir binden die Bildgenerierung an Ihre Prozesse und Automatisierung mit n8n an, etwa um automatisch Varianten für Produkte, Kampagnen oder Kanäle zu erzeugen und sauber abzulegen." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "KI-Bildgenerierung für Marketing", serviceType: "KI-Bildgenerierung, AI Image, Visual Content", provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" }, description: "Markenkonforme KI-Bilder, Produktbilder und Key-Visuals für Marketing im DACH-Raum, rechtssicher nach EU AI Act und auf Wunsch DSGVO-konform self-hosted.", areaServed: [{ "@type": "Country", name: "Austria" }, { "@type": "Country", name: "Germany" }, { "@type": "Country", name: "Switzerland" }] };

const stats = [
  { value: "Minuten", label: "statt Stunden je Bild" },
  { value: "1 Stil", label: "über alle Motive" },
  { value: "EU", label: "konform & rechtssicher" },
  { value: "∞", label: "Varianten für Tests" },
];
const ataglance = [
  ["Leistung", "Bilder, Visuals, Grafik"],
  ["Stärke", "Tempo & Markenkonsistenz"],
  ["Quellen", "Text oder Ihre Vorlagen"],
  ["Einsatz", "Ads, Web, Produkt, Social"],
  ["Recht", "EU AI Act Kennzeichnung"],
  ["Option", "self-hosted, DSGVO"],
];
const problems = [
  { problem: "Profifotos kosten Shooting, Zeit und viel Geld.", solution: "KI erzeugt hochwertige Bilder in Minuten, ohne Shooting." },
  { problem: "Für jeden Kanal braucht es eigene Formate und Motive.", solution: "Aus einer Idee entstehen viele Varianten und Formate." },
  { problem: "Stockbilder wirken beliebig und nicht nach Marke.", solution: "Mit Vorlagen und Stil bleiben alle Bilder on brand." },
  { problem: "Rechtsfragen zu KI-Bildern verunsichern.", solution: "Wir klären Rechte und kennzeichnen nach EU AI Act." },
];
const features = [
  { icon: Palette, title: "Markenwelt statt Zufallsbilder", description: "Ein KI-Bildgenerator liefert beeindruckende Motive, aber ohne Steuerung wirkt das beliebig. Wir verankern Ihre Bildsprache, Farben und Stilelemente in Vorlagen, sodass jedes erzeugte Bild nach Ihrer Marke aussieht und über alle Motive hinweg konsistent bleibt." },
  { icon: Camera, title: "Produkte in jede Szene", description: "Wir setzen Ihre Produkte in neue Umgebungen, tauschen Hintergründe und erzeugen Lifestyle-Szenen, aus einem Foto wird eine Bildwelt." },
  { icon: Sparkles, title: "Fotorealismus oder Illustration", description: "Toolübergreifend wählen wir je Anforderung das beste Modell, vom realistischen Bild bis zur grafischen Illustration." },
  { icon: Megaphone, title: "Für Performance gebaut", description: "Viele Varianten für Ads und Social Media, schnell erzeugt und auf Wirkung getestet." },
  { icon: ShieldCheck, title: "Rechtssicher & gekennzeichnet", description: "Nutzungsrechte geklärt, KI-Inhalte nach EU AI Act gekennzeichnet, kommerziell nutzbar. Auf Wunsch DSGVO-konform self-hosted." },
  { icon: RefreshCw, title: "Automatisierte Bildproduktion", description: "An n8n angebunden, erzeugen wir automatisch Varianten für Produkte, Kampagnen und Kanäle." },
];
const usecases = [
  { value: "ads", label: "Ads & Social", icon: Megaphone, head: "Werbung & Social Media", intro: "Viele markenkonforme Visuals für jeden Kanal.", items: ["Ad-Creatives in vielen Varianten.", "Formate für jede Plattform.", "Saisonale Motive in Minuten.", "Schnelle A/B-Tests."] },
  { value: "produkt", label: "Produkt", icon: Box, head: "Produktbilder", intro: "Produkte hochwertig und flexibel inszeniert.", items: ["Produkte in neue Szenen setzen.", "Hintergründe austauschen.", "Lifestyle- und Anwendungsbilder.", "Konsistenter Markenlook."] },
  { value: "web", label: "Web", icon: Globe, head: "Website & Landingpages", intro: "Key-Visuals und Bildwelten für Ihren Auftritt.", items: ["Hero- und Key-Visuals.", "Bildwelten je Zielgruppe.", "Passende Illustrationen.", "Schnelle Anpassungen."] },
  { value: "content", label: "Content", icon: ImageIcon, head: "Content & Blog", intro: "Begleitbilder, die zur Marke passen.", items: ["Beitragsbilder im Markenstil.", "Illustrationen für Konzepte.", "Social-Karten und Banner.", "Mehrsprachige Varianten."] },
];
const comparison = [
  { feature: "Zeit je Bild", ki: "Minuten", shooting: "Stunden bis Tage", stock: "sofort" },
  { feature: "Kosten", ki: "niedrig", shooting: "hoch", stock: "niedrig" },
  { feature: "Individualität", ki: "hoch", shooting: "hoch", stock: "gering" },
  { feature: "Varianten", ki: "beliebig", shooting: "teuer", stock: "begrenzt" },
  { feature: "Markenkonsistenz", ki: "mit Vorlagen stark", shooting: "stark", stock: "schwach" },
  { feature: "Exklusivität", ki: "hoch", shooting: "hoch", stock: "gering" },
];
const steps = [
  { step: "01", icon: Phone, title: "Kostenlose Erstanalyse", time: "30 Minuten", description: "Wir klären Einsatzzwecke, Kanäle und Bildsprache und sichten, wo KI-Bilder den größten Hebel haben." },
  { step: "02", icon: Palette, title: "Stil & Vorlagen", time: "Tage", description: "Wir definieren Bildsprache, Stil und Vorlagen, damit jedes Bild sofort nach Ihrer Marke aussieht." },
  { step: "03", icon: Wand2, title: "Produktion", time: "laufend", description: "Wir erzeugen Bilder und Varianten, setzen Produkte in Szene und liefern fertige, kanalgerechte Visuals." },
  { step: "04", icon: Rocket, title: "Ausspielung & Automatisierung", time: "ab Woche 1", description: "Wir liefern und kennzeichnen die Bilder rechtssicher und automatisieren auf Wunsch die laufende Produktion." },
];
const related = [
  { href: "/leistungen/ki-video", icon: Video, title: "KI Video & Media Creation", desc: "Der breite Service rund um KI-Video, Bild und Werbeclips fürs Marketing." },
  { href: "/leistungen/higgsfield-ai", icon: Sparkles, title: "Higgsfield AI", desc: "Cinematic KI-Videos mit echter Regie, passend zu Ihren Bildwelten." },
  { href: "/leistungen/n8n-automatisierung", icon: Settings2, title: "n8n Automatisierung", desc: "Die Bildproduktion automatisieren, von der Idee bis zur Ablage." },
];

export default function Page() {
  return (
    <>
      <Script id="faq-kibild" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-kibild" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24"><div className="container mx-auto px-4 max-w-7xl"><div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3"><span className="inline-flex items-center justify-center bg-primary/10 border border-primary/20 rounded-xl p-2.5"><ImageIcon className="w-7 h-7 text-primary" /></span><Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">KI-Bildgenerator</Badge></div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">KI-Bilder, die <span className="text-primary">nach Ihrer Marke aussehen</span></h1>
              <p className="text-lg text-muted-foreground max-w-xl">Wir erzeugen markenkonforme Produktbilder, Key-Visuals und Ad-Creatives mit KI-Bildgeneratoren, in Minuten statt Tagen. Rechtssicher nach EU AI Act, auf Wunsch DSGVO-konform self-hosted und in Ihre Prozesse integriert.</p>
              <div className="flex flex-col sm:flex-row gap-4"><Button size="lg" asChild><a href="#contact">Kostenloses Assessment</a></Button><Button size="lg" variant="outline" asChild><a href="#vergleich">KI vs. Shooting vs. Stock</a></Button></div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground"><span className="flex items-center gap-1.5"><Palette className="w-4 h-4 text-primary" /> markenkonform</span><span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> EU AI Act konform</span><span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span></div>
            </div>
            <div className="relative">
              <Card className="border-2 shadow-xl shadow-primary/5 overflow-hidden"><CardHeader className="border-b border-border py-3"><div className="flex items-center gap-2"><span className="flex gap-1.5"><span className="w-3 h-3 rounded-full bg-muted-foreground/20" /><span className="w-3 h-3 rounded-full bg-muted-foreground/20" /><span className="w-3 h-3 rounded-full bg-muted-foreground/20" /></span><span className="ml-2 font-mono text-xs text-muted-foreground">visuals.batch</span><span className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground"><span className="w-2 h-2 rounded-full bg-green-500" /> generiert</span></div></CardHeader>
                <CardContent className="p-6 space-y-3"><div className="rounded-lg border border-border bg-background px-3 py-2 text-xs text-muted-foreground font-mono">„Produkt, Studio-Licht, Markenfarbe Blau, 4 Varianten"</div><div className="grid grid-cols-4 gap-2">{[0, 1, 2, 3].map((i) => (<div key={i} className={`aspect-square rounded-lg border-2 flex items-center justify-center ${i === 0 ? "border-primary/40 bg-primary/5" : "border-border bg-background"}`}><ImageIcon className={`w-6 h-6 ${i === 0 ? "text-primary" : "text-primary/50"}`} /></div>))}</div><div className="flex items-center gap-2 text-[11px] text-muted-foreground"><Palette className="w-3.5 h-3.5 text-primary" /> Markenstil über alle Varianten</div></CardContent>
              </Card>
              <div className="hidden lg:flex absolute -top-4 -right-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium"><Zap className="w-3.5 h-3.5 text-primary" /> in Minuten</div>
              <div className="hidden lg:flex absolute -bottom-4 -left-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium"><Lock className="w-3.5 h-3.5 text-primary" /> self-hosted möglich</div>
            </div>
          </div></div></section>

          <ModelLogoStrip
            caption="Wir nutzen je Motiv das beste Bildmodell"
            items={[
              { slug: "openai", name: "DALL-E" },
              { slug: "googlegemini", name: "Imagen" },
              { slug: "flux", name: "FLUX" },
              { slug: "stability", name: "Stable Diffusion" },
              { text: "Midjourney", name: "Midjourney" },
            ]}
          />

          <section className="py-10 md:py-12 bg-white/50"><div className="container mx-auto px-4 max-w-7xl"><div className="grid grid-cols-2 md:grid-cols-4 border-2 border-border rounded-2xl overflow-hidden bg-card">{stats.map(({ value, label }, i) => (<div key={i} className="p-6 md:p-8 text-center border-b md:border-b-0 border-r last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r border-border"><div className="text-3xl md:text-4xl font-bold text-primary">{value}</div><div className="text-xs md:text-sm text-muted-foreground mt-1.5">{label}</div></div>))}</div></div></section>

          <section className="py-14 md:py-20"><div className="container mx-auto px-4 max-w-7xl"><div className="grid lg:grid-cols-2 gap-12 items-start">
            <div><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Kurz erklärt</Badge><h2 className="text-3xl md:text-4xl font-bold mb-6">Bildwelten auf Knopfdruck, mit System</h2><div className="space-y-4 text-muted-foreground leading-relaxed"><p>Ein <strong className="text-foreground">KI-Bildgenerator</strong> erzeugt aus Text oder Vorlagen hochwertige Bilder in Minuten, von Produktszenen über Key-Visuals bis zu Illustrationen.</p><p>Der Unterschied zwischen beliebigem KI-Bild und nutzbarem Marketing liegt im <strong className="text-foreground">System</strong>: Bildsprache, Vorlagen und Stilkonsistenz. Genau das bringen wir mit.</p><p>Dazu <strong className="text-foreground">Rechtssicherheit</strong> nach EU AI Act und auf Wunsch DSGVO-konformer, self-hosted Betrieb für sensible oder exklusive Inhalte.</p></div><div className="flex flex-wrap gap-2 mt-6"><Badge variant="secondary" className="rounded-full">KI Bilder erstellen</Badge><Badge variant="secondary" className="rounded-full">AI Image</Badge><Badge variant="secondary" className="rounded-full">Produktbilder</Badge></div></div>
            <Card className="border-2 bg-primary/5 border-primary/20"><CardHeader><CardTitle className="text-xl">KI-Bilder auf einen Blick</CardTitle><CardDescription>Die wichtigsten Eckdaten im Überblick.</CardDescription></CardHeader><CardContent className="space-y-1">{ataglance.map(([label, value]) => (<div key={label} className="flex items-center justify-between py-2.5 border-b border-border last:border-0"><span className="text-sm font-medium text-foreground">{label}</span><span className="text-sm text-muted-foreground text-right max-w-[55%]">{value}</span></div>))}</CardContent></Card>
          </div></div></section>

          <section className="py-14 md:py-20 bg-white/50"><div className="container mx-auto px-4 max-w-7xl"><div className="text-center mb-12"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum jetzt?</Badge><h2 className="text-3xl md:text-4xl font-bold">Mehr Visuals, weniger Aufwand</h2></div><div className="grid md:grid-cols-2 gap-5"><div className="space-y-3"><div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 pl-1">Was heute bremst</div>{problems.map(({ problem }, i) => (<div key={i} className="flex items-start gap-3 p-4 rounded-xl border bg-background"><X className="w-5 h-5 text-destructive mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{problem}</span></div>))}</div><div className="space-y-3"><div className="text-xs font-semibold text-primary uppercase tracking-widest mb-2 pl-1">Was KI-Bilder ermöglichen</div>{problems.map(({ solution }, i) => (<div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-primary/20 bg-primary/5"><Check className="w-5 h-5 text-primary mt-0.5 shrink-0" /><span className="text-sm leading-relaxed font-medium">{solution}</span></div>))}</div></div></div></section>

          <section className="py-14 md:py-20"><div className="container mx-auto px-4 max-w-7xl"><div className="text-center mb-12"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Was wir liefern</Badge><h2 className="text-3xl md:text-4xl font-bold">Bilder mit System</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"><Card className="hover-lift border-2 lg:col-span-2 bg-primary/5 border-primary/20"><CardHeader><div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2"><Palette className="w-6 h-6 text-primary" /></div><CardTitle className="text-xl">{features[0].title}</CardTitle><CardDescription className="text-base leading-relaxed">{features[0].description}</CardDescription></CardHeader></Card>{features.slice(1).map((f, i) => { const Icon = f.icon; return (<Card key={i} className="hover-lift border-2"><CardHeader><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2"><Icon className="w-5 h-5 text-primary" /></div><CardTitle className="text-lg">{f.title}</CardTitle><CardDescription className="leading-relaxed">{f.description}</CardDescription></CardHeader></Card>); })}</div></div></section>

          <section className="py-14 md:py-20 bg-white/50"><div className="container mx-auto px-4 max-w-5xl"><div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Anwendungsfälle</Badge><h2 className="text-3xl md:text-4xl font-bold">Wofür wir KI-Bilder erzeugen</h2></div><Tabs defaultValue="ads" className="w-full"><TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">{usecases.map((d) => { const Icon = d.icon; return (<TabsTrigger key={d.value} value={d.value} className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border"><Icon className="w-4 h-4 mr-1.5" />{d.label}</TabsTrigger>); })}</TabsList>{usecases.map((d) => (<TabsContent key={d.value} value={d.value}><Card className="border-2"><CardContent className="pt-6"><h3 className="text-xl font-bold mb-2">{d.head}</h3><p className="text-muted-foreground leading-relaxed mb-5">{d.intro}</p><div className="grid sm:grid-cols-2 gap-3">{d.items.map((item, j) => (<div key={j} className="flex items-start gap-2.5 p-3 rounded-lg border bg-background"><ImageIcon className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{item}</span></div>))}</div></CardContent></Card></TabsContent>))}</Tabs></div></section>

          <section id="vergleich" className="py-14 md:py-20"><div className="container mx-auto px-4 max-w-5xl"><div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Vergleich</Badge><h2 className="text-3xl md:text-4xl font-bold">KI-Bilder vs. Shooting vs. Stock</h2></div><Card className="border-2 overflow-hidden"><Table><TableHeader><TableRow className="bg-muted/50"><TableHead className="w-[28%] font-bold text-foreground">Merkmal</TableHead><TableHead className="text-primary font-bold">KI-Bilder</TableHead><TableHead className="text-muted-foreground">Shooting</TableHead><TableHead className="text-muted-foreground">Stock</TableHead></TableRow></TableHeader><TableBody>{comparison.map((row, i) => (<TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}><TableCell className="font-medium">{row.feature}</TableCell><TableCell className="text-sm text-primary font-medium">{row.ki}</TableCell><TableCell className="text-sm text-muted-foreground">{row.shooting}</TableCell><TableCell className="text-sm text-muted-foreground">{row.stock}</TableCell></TableRow>))}</TableBody></Table></Card></div></section>

          <section className="py-14 md:py-20 bg-white/50"><div className="container mx-auto px-4 max-w-4xl"><div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unser Prozess</Badge><h2 className="text-3xl md:text-4xl font-bold">Ihr KI-Bild-Projekt in 4 Schritten</h2></div><ProcessSteps steps={steps} /></div></section>

          <section className="py-14 md:py-20"><div className="container mx-auto px-4 max-w-3xl"><div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge><h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zu KI-Bildern</h2></div><Accordion type="single" collapsible className="w-full space-y-3">{faqs.map((f, i) => (<AccordionItem key={i} value={`item-${i}`} className="border-2 border-border rounded-xl px-6 bg-background data-[state=open]:border-primary/30 data-[state=open]:bg-primary/5"><AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-5">{f.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">{f.a}</AccordionContent></AccordionItem>))}</Accordion></div></section>

          <section className="py-14 md:py-20 bg-white/50"><div className="container mx-auto px-4 max-w-6xl"><div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Mehr Leistungen</Badge><h2 className="text-3xl md:text-4xl font-bold">Passt gut zu KI-Bildern</h2></div><div className="grid md:grid-cols-3 gap-5">{related.map((s, i) => { const Icon = s.icon; return (<a key={i} href={s.href} className="group block"><Card className="h-full border-2 hover-lift group-hover:border-primary/40"><CardHeader><div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${serviceLogos[s.href] ? "bg-white border border-border" : "bg-primary/10"}`}>{serviceLogos[s.href] ? <img src={`/img/logos/${serviceLogos[s.href]}.svg`} alt={s.title} className="w-7 h-7 object-contain" /> : <Icon className="w-6 h-6 text-primary" />}</div><CardTitle className="text-xl">{s.title}</CardTitle></CardHeader><CardContent><p className="text-muted-foreground leading-relaxed">{s.desc}</p></CardContent></Card></a>); })}</div></div></section>

          <ContactForm />
        </main>
        <FooterModern />
      </div>
    </>
  );
}
