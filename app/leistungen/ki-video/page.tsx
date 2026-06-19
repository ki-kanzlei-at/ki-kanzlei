import type { Metadata } from "next";
import { serviceLogos } from "@/lib/serviceLogos";
import Script from "next/script";
import { NavigationHome } from "@/components/NavigationHome";
import { ModelLogoStrip } from "@/components/ModelLogoStrip";
import { ToolLogo } from "@/components/ToolBadge";
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
  Video, Film, Clapperboard, Camera, Image as ImageIcon, Palette, PlayCircle, Sparkles, Wand2, Mic,
  Layers, Box, Bot, Shield, ShieldCheck, Lock, Check, X, Search, Rocket, Phone, Clock, MapPin, Zap,
  RefreshCw, Eye, Users, Megaphone, Building2, Lightbulb, Target, TrendingUp, Globe, Settings2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "KI Video & Media Creation für Marketing",
  description:
    "KI-Videos, Bilder und Werbeclips für Marketing: Wir produzieren mit Higgsfield, Sora, Veo und Runway markenkonforme Inhalte in Stunden statt Tagen, rechtssicher nach EU AI Act und integriert in Ihre Automatisierung. DACH-Raum, DSGVO.",
  keywords:
    "KI Video, AI Video Generator, KI Videogenerator, KI Bildgenerator, KI Video erstellen, AI Video, Video Marketing KI, Higgsfield, Sora, Veo, Runway, KI Werbevideo, KI Content Creation, generative Media",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/ki-video" },
};

const faqs = [
  { q: "Was ist KI-Video und wie gut ist die Qualität 2026?", a: "KI-Video bezeichnet Videos, die von generativen KI-Modellen erzeugt oder wesentlich gestaltet werden. 2026 ist die Qualität auf einem Niveau angekommen, das für Social Media, Werbung und Markeninhalte produktionsreif ist. Modelle wie Sora, Google Veo, Higgsfield, Runway und Kling erzeugen physikalisch plausible, hochauflösende Clips mit Kamerabewegung und konsistenten Szenen. Entscheidend ist nicht das Tool allein, sondern die Regie und ein Prozess, der markenkonforme Ergebnisse liefert." },
  { q: "Welche Tools setzt ihr ein?", a: "Wir arbeiten toolübergreifend und wählen je Anforderung das passende Modell. Für cinematic Marketing-Clips nutzen wir bevorzugt Higgsfield mit seinem Cinema Studio, das mehrere Modelle bündelt. Für bestimmte Szenen kommen Sora, Veo, Runway oder Kling zum Einsatz, für Bildwelten Modelle zur Bildgenerierung. So sind wir nicht von einem Anbieter abhängig, sondern liefern das beste Ergebnis je Anlass." },
  { q: "Bleibt das alles markenkonform?", a: "Ja, das ist unser Kernanspruch. Wir definieren Bildsprache, Farben, Tonalität und wiederkehrende Elemente und verankern sie in Vorlagen und Prompts. Mit Funktionen für Charakter- und Stilkonsistenz bleiben Figuren und Look über viele Clips hinweg gleich. So entsteht eine zusammenhängende Markenwelt statt zufälliger Einzelvideos." },
  { q: "Ist KI-generierter Content rechtssicher?", a: "Bei sauberer Umsetzung ja. KI-generierte oder wesentlich veränderte Inhalte unterliegen Transparenzpflichten nach Artikel 50 EU AI Act und sind zu kennzeichnen. Wir klären zudem Rechte an Stimmen, Gesichtern, Marken und Musik und arbeiten mit kommerziell nutzbaren Tarifen, damit Ihre Kampagne rechtlich sauber bleibt." },
  { q: "Wie schnell und wie günstig ist KI-Video wirklich?", a: "Wo klassische Produktion Drehtag, Team und Schnitt braucht, entsteht ein KI-Clip in Stunden, Varianten in Minuten. Die Kosten je Video sinken dadurch deutlich, gerade wenn Sie viel Content für verschiedene Kanäle und Tests brauchen. Im Assessment rechnen wir Ihren konkreten Bedarf durch." },
  { q: "Kann ich auch nur Bilder statt Videos erzeugen lassen?", a: "Ja. Neben Video produzieren wir KI-Bildwelten für Ads, Landingpages, Social Media und Produktinszenierung. Auch hier achten wir auf Markenkonsistenz und rechtssichere Nutzung." },
  { q: "Lässt sich die Produktion automatisieren?", a: "Ja. Wir binden die Content-Produktion an Ihre Automatisierung mit n8n an: vom Briefing über die Generierung und Freigabe bis zur geplanten Ausspielung auf Ihren Kanälen. So wird aus Einzelclips ein verlässlicher Content-Strom." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "KI Video & Media Creation", serviceType: "KI-Videoproduktion, AI Video, KI Bildgenerierung, Content Creation", provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" }, description: "KI-gestützte Video- und Media-Produktion für Marketing im DACH-Raum mit Higgsfield, Sora, Veo und Runway, markenkonform und EU AI Act konform.", areaServed: [{ "@type": "Country", name: "Austria" }, { "@type": "Country", name: "Germany" }, { "@type": "Country", name: "Switzerland" }] };

const stats = [
  { value: "Stunden", label: "statt Drehtage bis zum Clip" },
  { value: "5+", label: "Top-Modelle im Einsatz" },
  { value: "9:16", label: "bis 16:9 aus einer Idee" },
  { value: "EU", label: "konform & gekennzeichnet" },
];
const ataglance = [
  ["Leistung", "Video, Bild, Werbeclips"],
  ["Tools", "Higgsfield, Sora, Veo, Runway"],
  ["Stärke", "Markenkonsistenz & Tempo"],
  ["Formate", "alle Social- & Ad-Formate"],
  ["Recht", "EU AI Act Kennzeichnung"],
  ["Workflow", "automatisierbar mit n8n"],
];
const problems = [
  { problem: "Hochwertiges Video ist teuer und dauert Wochen.", solution: "KI-Produktion liefert cinematic Clips in Stunden, zu einem Bruchteil der Kosten." },
  { problem: "Für jeden Kanal braucht es eigene Formate und Varianten.", solution: "Aus einer Idee entstehen 9:16, 1:1 und 16:9 plus Test-Varianten." },
  { problem: "KI-Content sieht oft beliebig und nicht nach Marke aus.", solution: "Mit Regie, Vorlagen und Stilkonsistenz bleibt alles on brand." },
  { problem: "Rechtsfragen zu KI-Content verunsichern.", solution: "Wir kennzeichnen nach EU AI Act und klären Nutzungsrechte vorab." },
];
const features = [
  { icon: Clapperboard, title: "Toolübergreifende Produktion mit Regie", description: "Wir sind nicht an ein Modell gebunden. Je Szene wählen wir das beste aus Higgsfield, Sora, Veo, Runway oder Kling und führen gezielt Regie über Kamera, Licht und Komposition. So entsteht Bewegtbild, das wie inszeniert wirkt und nicht wie ein KI-Zufall." },
  { icon: Palette, title: "Markenwelt statt Einzelclips", description: "Konsistente Bildsprache, Farben und Charaktere über alle Inhalte hinweg, fest in Vorlagen verankert." },
  { icon: ImageIcon, title: "Video und Bild aus einer Hand", description: "Neben Video erzeugen wir KI-Bildwelten für Ads, Landingpages und Produktinszenierung." },
  { icon: Megaphone, title: "Für Performance gebaut", description: "Hooks, Formate und Varianten für Social Ads, schnell iteriert und auf Wirkung getestet." },
  { icon: ShieldCheck, title: "Rechtssicher & gekennzeichnet", description: "Nutzungsrechte geklärt, KI-Inhalte nach EU AI Act gekennzeichnet, kommerziell nutzbar." },
  { icon: RefreshCw, title: "Automatisierter Content-Strom", description: "Produktion an n8n angebunden, von Briefing bis Ausspielung als verlässlicher Prozess." },
];
const usecases = [
  { value: "ads", label: "Social Ads", icon: Megaphone, head: "Social-Media-Werbung", intro: "Scroll-stoppende Clips in vielen Varianten, schnell getestet.", items: ["Hook-Varianten für TikTok, Reels und Shorts.", "Produkte cinematic inszenieren.", "Alle Formate aus einer Idee.", "A/B-Versionen für Performance."] },
  { value: "produkt", label: "Produkt", icon: Box, head: "Produkt & Brand", intro: "Hochwertige Produktinszenierung ohne Studio.", items: ["Produkte in Wunschumgebungen.", "Lifestyle- und Anwendungsszenen.", "Saisonale Varianten in Minuten.", "Konsistente Markenfarben."] },
  { value: "bild", label: "Bildwelten", icon: ImageIcon, head: "KI-Bilder & Visuals", intro: "Markenbilder für Web, Ads und Social.", items: ["Key-Visuals für Kampagnen.", "Produkt- und Moodbilder.", "Landingpage-Visuals.", "Varianten je Zielgruppe."] },
  { value: "recruiting", label: "Recruiting", icon: Users, head: "Employer Branding", intro: "Emotionale Recruiting-Clips, die auffallen.", items: ["Kultur visuell erzählen.", "Stellen-Hooks für Social Media.", "Konsistente Arbeitgebermarke.", "Schnelle Clips je Position."] },
  { value: "erklaer", label: "Erklärvideo", icon: PlayCircle, head: "Erklär & Content", intro: "Komplexes anschaulich erzählt.", items: ["Abläufe visualisieren.", "Szenenfolgen mit roter Linie.", "Markenkonforme Bildsprache.", "Mehrsprachige Varianten."] },
];
const comparison = [
  { feature: "Zeit bis zum Clip", ki: "Stunden", klassisch: "Tage bis Wochen", stock: "sofort, generisch" },
  { feature: "Kosten je Video", ki: "niedrig", klassisch: "hoch", stock: "niedrig" },
  { feature: "Individualität", ki: "hoch", klassisch: "hoch", stock: "gering" },
  { feature: "Iteration & Varianten", ki: "in Minuten", klassisch: "langsam, teuer", stock: "begrenzt" },
  { feature: "Markenkonsistenz", ki: "mit Vorlagen stark", klassisch: "stark", stock: "schwach" },
  { feature: "Skalierung", ki: "sehr hoch", klassisch: "personalabhängig", stock: "hoch" },
];
const steps = [
  { step: "01", icon: Phone, title: "Kostenlose Erstanalyse", time: "30 Minuten", description: "Wir klären Kanäle, Ziele und Bildsprache und sichten die Video- und Bild-Use-Cases mit dem größten Hebel." },
  { step: "02", icon: Palette, title: "Look & Vorlagen", time: "Woche 1", description: "Wir definieren Bildsprache, Charaktere und Vorlagen, damit jeder Inhalt sofort nach Ihrer Marke aussieht." },
  { step: "03", icon: Clapperboard, title: "Produktion", time: "laufend", description: "Wir produzieren toolübergreifend mit gezielter Regie, in Varianten und Formaten für Ihre Kanäle." },
  { step: "04", icon: Rocket, title: "Ausspielung & Skalierung", time: "ab Woche 2", description: "Wir liefern fertige Assets, kennzeichnen KI-Inhalte rechtssicher und skalieren, auf Wunsch automatisiert mit n8n." },
];
const related = [
  { href: "/leistungen/higgsfield-ai", icon: Clapperboard, title: "Higgsfield AI", desc: "Cinematic KI-Videos mit echter Regie für Marketing und Social Media." },
  { href: "/leistungen/n8n-automatisierung", icon: Settings2, title: "n8n Automatisierung", desc: "Den Content-Workflow automatisieren, von Briefing bis Ausspielung." },
  { href: "/leistungen/agentic-ai", icon: Bot, title: "Agentic AI & AI Agents", desc: "Autonome KI, die Content plant, erstellt und verteilt." },
];

export default function Page() {
  return (
    <>
      <Script id="faq-kivideo" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-kivideo" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center bg-primary/10 border border-primary/20 rounded-xl p-2.5"><Video className="w-7 h-7 text-primary" /></span>
                    <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">KI Video, Media Creation</Badge>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">KI-Videos und Visuals, die <span className="text-primary">Ihre Marke tragen</span></h1>
                  <p className="text-lg text-muted-foreground max-w-xl">Wir produzieren Marketing-Videos und Bildwelten mit den besten KI-Modellen, Higgsfield, Sora, Veo und Runway, markenkonform, in allen Formaten und in Stunden statt Wochen. Rechtssicher nach EU AI Act und auf Wunsch automatisiert.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild><a href="#contact">Kostenloses Assessment</a></Button>
                    <Button size="lg" variant="outline" asChild><a href="#vergleich">KI vs. klassisch</a></Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Film className="w-4 h-4 text-primary" /> Toolübergreifend</span>
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> EU AI Act konform</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>
                <div className="relative">
                  <Card className="border-2 shadow-xl shadow-primary/5 overflow-hidden">
                    <CardHeader className="border-b border-border py-3">
                      <div className="flex items-center gap-2">
                        <span className="flex gap-1.5"><span className="w-3 h-3 rounded-full bg-muted-foreground/20" /><span className="w-3 h-3 rounded-full bg-muted-foreground/20" /><span className="w-3 h-3 rounded-full bg-muted-foreground/20" /></span>
                        <span className="ml-2 font-mono text-xs text-muted-foreground">kampagne-q3.media</span>
                        <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground"><span className="w-2 h-2 rounded-full bg-green-500" /> generiert</span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-3">
                      <div className="grid grid-cols-3 gap-2">
                        <div className="aspect-[9/16] col-span-1 rounded-lg border-2 border-primary/30 bg-primary/5 flex items-center justify-center"><PlayCircle className="w-7 h-7 text-primary/70" /></div>
                        <div className="col-span-2 grid grid-rows-2 gap-2">
                          <div className="rounded-lg border border-border bg-background flex items-center justify-center"><Film className="w-6 h-6 text-primary/60" /></div>
                          <div className="rounded-lg border border-border bg-background flex items-center justify-center"><ImageIcon className="w-6 h-6 text-primary/60" /></div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {["Higgsfield", "Sora", "Veo", "Runway"].map((t) => (<Badge key={t} variant="secondary" className="rounded-full font-normal text-[11px] gap-1"><ToolLogo name={t} imgClassName="w-3 h-3" boxClassName="p-0.5 rounded" />{t}</Badge>))}
                      </div>
                    </CardContent>
                  </Card>
                  <div className="hidden lg:flex absolute -top-4 -right-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium"><Sparkles className="w-3.5 h-3.5 text-primary" /> markenkonform</div>
                  <div className="hidden lg:flex absolute -bottom-4 -left-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium"><Zap className="w-3.5 h-3.5 text-primary" /> alle Formate</div>
                </div>
              </div>
            </div>
          </section>

          <ModelLogoStrip
            caption="Je Szene das beste Videomodell, markenkonform produziert"
            items={[
              { slug: "openai", name: "Sora" },
              { slug: "googlegemini", name: "Veo" },
              { slug: "runway", name: "Runway" },
              { slug: "minimax", name: "Hailuo" },
              { text: "Higgsfield", name: "Higgsfield" },
              { text: "Kling", name: "Kling" },
            ]}
          />

          <section className="py-10 md:py-12 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-2 md:grid-cols-4 border-2 border-border rounded-2xl overflow-hidden bg-card">
                {stats.map(({ value, label }, i) => (<div key={i} className="p-6 md:p-8 text-center border-b md:border-b-0 border-r last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r border-border"><div className="text-3xl md:text-4xl font-bold text-primary">{value}</div><div className="text-xs md:text-sm text-muted-foreground mt-1.5">{label}</div></div>))}
              </div>
            </div>
          </section>

          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Kurz erklärt</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">KI-Video ist 2026 marketingreif</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p><strong className="text-foreground">KI-Video und Media Creation</strong> heißt: Bewegtbild und Bildwelten entstehen mit generativen Modellen, in einem Bruchteil der Zeit klassischer Produktion. 2026 ist die Qualität für Werbung und Marken auf einem ernstzunehmenden Niveau.</p>
                    <p>Wir arbeiten <strong className="text-foreground">toolübergreifend</strong>: Higgsfield für cinematic Regie, dazu Sora, Veo, Runway und Kling, je nach Szene. Entscheidend ist nicht das Tool, sondern der Prozess, der markenkonforme, rechtssichere Ergebnisse liefert.</p>
                    <p>So bekommen Sie <strong className="text-foreground">planbar viel Content</strong> für alle Kanäle, on brand, gekennzeichnet nach EU AI Act und auf Wunsch direkt aus Ihrer Automatisierung heraus.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">AI Video Generator</Badge>
                    <Badge variant="secondary" className="rounded-full">KI Bildgenerator</Badge>
                    <Badge variant="secondary" className="rounded-full">Video Marketing</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader><CardTitle className="text-xl">Media Creation auf einen Blick</CardTitle><CardDescription>Die wichtigsten Eckdaten im Überblick.</CardDescription></CardHeader>
                  <CardContent className="space-y-1">{ataglance.map(([label, value]) => (<div key={label} className="flex items-center justify-between py-2.5 border-b border-border last:border-0"><span className="text-sm font-medium text-foreground">{label}</span><span className="text-sm text-muted-foreground text-right max-w-[55%]">{value}</span></div>))}</CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum jetzt?</Badge><h2 className="text-3xl md:text-4xl font-bold">Mehr Content, weniger Aufwand</h2><p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">KI-Media verschiebt, was sich ein Team an Bewegtbild und Visuals leisten kann.</p></div>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-3"><div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 pl-1">Was heute bremst</div>{problems.map(({ problem }, i) => (<div key={i} className="flex items-start gap-3 p-4 rounded-xl border bg-background"><X className="w-5 h-5 text-destructive mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{problem}</span></div>))}</div>
                <div className="space-y-3"><div className="text-xs font-semibold text-primary uppercase tracking-widest mb-2 pl-1">Was KI-Media ermöglicht</div>{problems.map(({ solution }, i) => (<div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-primary/20 bg-primary/5"><Check className="w-5 h-5 text-primary mt-0.5 shrink-0" /><span className="text-sm leading-relaxed font-medium">{solution}</span></div>))}</div>
              </div>
            </div>
          </section>

          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Was wir liefern</Badge><h2 className="text-3xl md:text-4xl font-bold">Content-Produktion als Prozess</h2><p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Wir machen aus den besten Tools einen verlässlichen Marketing-Output.</p></div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="hover-lift border-2 lg:col-span-2 bg-primary/5 border-primary/20"><CardHeader><div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2"><Clapperboard className="w-6 h-6 text-primary" /></div><CardTitle className="text-xl">{features[0].title}</CardTitle><CardDescription className="text-base leading-relaxed">{features[0].description}</CardDescription></CardHeader></Card>
                {features.slice(1).map((f, i) => { const Icon = f.icon; return (<Card key={i} className="hover-lift border-2"><CardHeader><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2"><Icon className="w-5 h-5 text-primary" /></div><CardTitle className="text-lg">{f.title}</CardTitle><CardDescription className="leading-relaxed">{f.description}</CardDescription></CardHeader></Card>); })}
              </div>
            </div>
          </section>

          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Anwendungsfälle</Badge><h2 className="text-3xl md:text-4xl font-bold">Was wir produzieren</h2><p className="text-lg text-muted-foreground mt-4">Wählen Sie einen Bereich, wir zeigen konkrete Formate.</p></div>
              <Tabs defaultValue="ads" className="w-full">
                <TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">{usecases.map((d) => { const Icon = d.icon; return (<TabsTrigger key={d.value} value={d.value} className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border"><Icon className="w-4 h-4 mr-1.5" />{d.label}</TabsTrigger>); })}</TabsList>
                {usecases.map((d) => (<TabsContent key={d.value} value={d.value}><Card className="border-2"><CardContent className="pt-6"><h3 className="text-xl font-bold mb-2">{d.head}</h3><p className="text-muted-foreground leading-relaxed mb-5">{d.intro}</p><div className="grid sm:grid-cols-2 gap-3">{d.items.map((item, j) => (<div key={j} className="flex items-start gap-2.5 p-3 rounded-lg border bg-background"><Video className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{item}</span></div>))}</div></CardContent></Card></TabsContent>))}
              </Tabs>
            </div>
          </section>

          <section id="vergleich" className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Vergleich</Badge><h2 className="text-3xl md:text-4xl font-bold">KI-Media vs. klassisch vs. Stock</h2><p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">KI ersetzt nicht jede Produktion, macht aber hochwertiges Bewegtbild für viel mehr Anlässe wirtschaftlich.</p></div>
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader><TableRow className="bg-muted/50"><TableHead className="w-[28%] font-bold text-foreground">Merkmal</TableHead><TableHead className="text-primary font-bold">KI-Media</TableHead><TableHead className="text-muted-foreground">Klassisch</TableHead><TableHead className="text-muted-foreground">Stock</TableHead></TableRow></TableHeader>
                  <TableBody>{comparison.map((row, i) => (<TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}><TableCell className="font-medium">{row.feature}</TableCell><TableCell className="text-sm text-primary font-medium">{row.ki}</TableCell><TableCell className="text-sm text-muted-foreground">{row.klassisch}</TableCell><TableCell className="text-sm text-muted-foreground">{row.stock}</TableCell></TableRow>))}</TableBody>
                </Table>
              </Card>
            </div>
          </section>

          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unser Prozess</Badge><h2 className="text-3xl md:text-4xl font-bold">Ihr Media-Projekt in 4 Schritten</h2><p className="text-lg text-muted-foreground mt-4">Von der Bildsprache bis zur skalierten Content-Produktion.</p></div>
              <ProcessSteps steps={steps} />
            </div>
          </section>

          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge><h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zu KI-Video</h2></div>
              <Accordion type="single" collapsible className="w-full space-y-3">{faqs.map((f, i) => (<AccordionItem key={i} value={`item-${i}`} className="border-2 border-border rounded-xl px-6 bg-background data-[state=open]:border-primary/30 data-[state=open]:bg-primary/5"><AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-5">{f.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">{f.a}</AccordionContent></AccordionItem>))}</Accordion>
            </div>
          </section>

          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Mehr Leistungen</Badge><h2 className="text-3xl md:text-4xl font-bold">Passt gut zu KI-Video</h2></div>
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
