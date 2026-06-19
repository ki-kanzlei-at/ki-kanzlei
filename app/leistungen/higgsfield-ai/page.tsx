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
  Clapperboard, Film, Video, Camera, Palette, PlayCircle, Sparkles, Wand2, Layers, Box, Bot,
  Shield, ShieldCheck, Lock, Check, X, Search, Rocket, Phone, Clock, MapPin, Zap, RefreshCw,
  Eye, Users, Megaphone, Building2, Lightbulb, Target, TrendingUp, Globe, Settings2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Higgsfield AI: Cinematic KI-Videos für Marketing",
  description:
    "Higgsfield AI für Unternehmen: Wir produzieren cinematic KI-Videos für Social Media und Marketing, mit Regie über Kamera, Licht und Szene, markenkonform und rechtssicher nach EU AI Act. Beratung, Produktion, Schulung im DACH-Raum.",
  keywords:
    "Higgsfield AI, Higgsfield, Higgsfield Video, KI Video erstellen, cinematic AI video, AI Video Marketing, KI Werbevideo, Higgsfield Agentur, KI Video Produktion, Social Media Video KI",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/higgsfield-ai" },
};

const faqs = [
  { q: "Was ist Higgsfield AI?", a: "Higgsfield AI ist eine generative KI-Plattform für cinematic Videos. Anders als einfache Videogeneratoren funktioniert Higgsfield wie eine Regie: Sie steuern Kamerabewegung, Licht, Bildkomposition und Szene gezielt. Unter einem Abo bündelt Higgsfield mehr als 15 Modelle, darunter Veo, Kling und Seedance, sowie ein Cinema Studio für die Szenenregie. So entstehen marketingreife, hochwertige Videos in einem Bruchteil der Zeit klassischer Produktion." },
  { q: "Wofür eignet sich Higgsfield AI im Marketing?", a: "Higgsfield eignet sich besonders für Social-Media-Ads, Produktvideos, Markeninhalte und schnelle Kampagnen-Iterationen. Wo früher ein Drehtag, ein Team und Schnitt nötig waren, entsteht ein cinematic Clip heute in Stunden. Gerade für Unternehmen, die viel Content brauchen und schnell testen wollen, ist das ein enormer Hebel." },
  { q: "Klingt das nicht nach Spielerei, taugt das für seriöse Marken?", a: "Higgsfield ist 2026 zu einem professionellen Werkzeug gereift und wird als Creative OS für Marketing eingesetzt. Entscheidend ist die Regie: Mit gezielter Kameraführung, konsistenten Charakteren und abgestimmter Bildsprache entstehen Videos, die zur Marke passen. Genau hier liegt unsere Arbeit, wir bauen den Prozess so, dass das Ergebnis markenkonform und wiedererkennbar bleibt." },
  { q: "Wie stellt ihr Markenkonsistenz sicher?", a: "Wir definieren mit Ihnen Bildsprache, Farben, Tonalität und wiederkehrende Elemente und gießen das in feste Vorlagen und Prompts. Higgsfield bietet Funktionen für Charakterkonsistenz, sodass Figuren und Stil über mehrere Clips hinweg gleich bleiben. So wird aus Einzelvideos eine zusammenhängende Markenwelt." },
  { q: "Ist KI-Video rechtlich unbedenklich, Stichwort EU AI Act?", a: "KI-generierte oder wesentlich veränderte Inhalte unterliegen Transparenzpflichten nach Artikel 50 EU AI Act und müssen entsprechend gekennzeichnet werden. Wir achten auf rechtssichere Nutzung, klären Rechte an Stimmen, Gesichtern und Musik und kennzeichnen KI-Inhalte korrekt, damit Ihre Kampagne sauber bleibt." },
  { q: "Bekomme ich die Videos exklusiv und kommerziell nutzbar?", a: "Ja. Wir arbeiten mit den kommerziellen Tarifen und klären die Nutzungsrechte für Ihren Einsatzzweck vorab. Sie erhalten die fertigen Assets zur Verwendung in Ihren Kanälen. Sensible Markeninhalte behandeln wir vertraulich." },
  { q: "Produziert ihr für uns oder schult ihr unser Team?", a: "Beides. Wir übernehmen die Produktion als Service oder richten Higgsfield in Ihrem Team ein, schulen auf Regie und Prompting und bauen einen wiederholbaren Workflow auf, inklusive Anbindung an Ihre Automatisierung mit n8n." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Higgsfield AI Video-Produktion", serviceType: "KI-Videoproduktion, Higgsfield AI, AI Video Marketing", provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" }, description: "Cinematic KI-Videos mit Higgsfield AI für Marketing und Social Media im DACH-Raum: Beratung, Produktion und Schulung, markenkonform und EU AI Act konform.", areaServed: [{ "@type": "Country", name: "Austria" }, { "@type": "Country", name: "Germany" }, { "@type": "Country", name: "Switzerland" }] };

const stats = [
  { value: "15+", label: "KI-Modelle unter einem Dach" },
  { value: "Stunden", label: "statt Drehtage bis zum Clip" },
  { value: "Cinema", label: "Studio für echte Regie" },
  { value: "1 Tag", label: "bis zum ersten Marketing-Video" },
];
const ataglance = [
  ["Typ", "cinematic KI-Videoplattform"],
  ["Stärke", "Regie über Kamera & Szene"],
  ["Modelle", "Veo, Kling, Seedance, mehr"],
  ["Ideal für", "Social Ads & Markenvideos"],
  ["Markenkonsistenz", "Charaktere & Stil stabil"],
  ["Recht", "EU AI Act Kennzeichnung"],
];
const problems = [
  { problem: "Eine Videoproduktion kostet Drehtag, Team und Wochen Zeit.", solution: "Higgsfield erzeugt cinematic Clips in Stunden, ohne Set und Crew." },
  { problem: "Für Social Media fehlt ständig frischer Videocontent.", solution: "Wir produzieren laufend markenkonforme Clips für jeden Kanal." },
  { problem: "Varianten zum Testen sind teuer und langsam.", solution: "Neue Schnitte, Formate und Hooks entstehen in Minuten." },
  { problem: "KI-Videos wirken oft beliebig und nicht wie die Marke.", solution: "Mit Regie, Vorlagen und Charakterkonsistenz bleibt alles on brand." },
];
const features = [
  { icon: Clapperboard, title: "Cinema Studio: echte Regie", description: "Higgsfield ist kein Zufallsgenerator. Wir steuern Kamerafahrten, Licht, Perspektive und Szenenaufbau gezielt, sodass jeder Clip wie bewusst inszeniert wirkt und nicht wie ein KI-Experiment. Das ist der Unterschied zwischen Spielerei und marketingreifem Video." },
  { icon: Layers, title: "15+ Modelle, eine Plattform", description: "Veo, Kling, Seedance, Soul und mehr unter einem Abo. Wir wählen je Szene das beste Modell." },
  { icon: Palette, title: "Markenwelt statt Einzelclips", description: "Konsistente Charaktere, Farben und Bildsprache über alle Videos hinweg, fest in Vorlagen verankert." },
  { icon: Megaphone, title: "Für Performance gebaut", description: "Hooks, Formate und Varianten für Social Ads, schnell iteriert und auf Wirkung getestet." },
  { icon: ShieldCheck, title: "Rechtssicher & gekennzeichnet", description: "Wir klären Nutzungsrechte und kennzeichnen KI-Inhalte nach EU AI Act, damit die Kampagne sauber bleibt." },
  { icon: RefreshCw, title: "Wiederholbarer Workflow", description: "Von Briefing bis Export ein klarer Prozess, auf Wunsch automatisiert und an Ihre Tools angebunden." },
];
const usecases = [
  { value: "ads", label: "Social Ads", icon: Megaphone, head: "Social-Media-Werbung", intro: "Scroll-stoppende Clips in vielen Varianten, schnell getestet.", items: ["Hook-Varianten für TikTok, Reels und Shorts erzeugen.", "Produkt in cinematic Szenen inszenieren.", "Formate 9:16, 1:1 und 16:9 aus einer Idee.", "A/B-Versionen für Performance-Tests."] },
  { value: "produkt", label: "Produktvideos", icon: Box, head: "Produkt & Brand", intro: "Hochwertige Produktinszenierung ohne Studio.", items: ["Produkte in Wunschumgebungen zeigen.", "Lifestyle- und Anwendungsszenen erzeugen.", "Markenfarben und Stil konsequent halten.", "Saisonale Varianten in Minuten."] },
  { value: "recruiting", label: "Recruiting", icon: Users, head: "Employer Branding", intro: "Emotionale Recruiting-Clips, die auffallen.", items: ["Kultur und Team-Spirit visuell erzählen.", "Stellen-Hooks für Social Media.", "Konsistente Arbeitgebermarke.", "Schnelle Clips je offener Position."] },
  { value: "erklaer", label: "Erklärvideos", icon: PlayCircle, head: "Erklär & Content", intro: "Komplexes anschaulich und cinematic erklärt.", items: ["Abläufe und Leistungen visualisieren.", "Szenenfolgen mit roter Linie.", "Markenkonforme Bildsprache.", "Mehrsprachige Varianten."] },
];
const comparison = [
  { feature: "Zeit bis zum Clip", hf: "Stunden", klassisch: "Tage bis Wochen", stock: "sofort, aber generisch" },
  { feature: "Kosten je Video", hf: "niedrig", klassisch: "hoch", stock: "niedrig" },
  { feature: "Regie & Kontrolle", hf: "hoch, Cinema Studio", klassisch: "voll, aber teuer", stock: "keine" },
  { feature: "Iteration & Varianten", hf: "in Minuten", klassisch: "langsam, teuer", stock: "begrenzt" },
  { feature: "Markenkonsistenz", hf: "mit Vorlagen stark", klassisch: "stark", stock: "schwach" },
  { feature: "Individualität", hf: "hoch", klassisch: "hoch", stock: "gering" },
];
const steps = [
  { step: "01", icon: Phone, title: "Kostenlose Erstanalyse", time: "30 Minuten", description: "Wir klären Kanäle, Ziele und Bildsprache und sichten, welche Video-Use-Cases den größten Hebel haben." },
  { step: "02", icon: Palette, title: "Look & Vorlagen", time: "Woche 1", description: "Wir definieren Bildsprache, Charaktere und Vorlagen, damit jeder Clip sofort nach Ihrer Marke aussieht." },
  { step: "03", icon: Clapperboard, title: "Produktion & Regie", time: "laufend", description: "Wir produzieren cinematic Clips mit gezielter Regie, in Varianten und Formaten für Ihre Kanäle." },
  { step: "04", icon: Rocket, title: "Ausspielung & Skalierung", time: "ab Woche 2", description: "Wir liefern fertige Assets, kennzeichnen KI-Inhalte rechtssicher und skalieren die Produktion, auf Wunsch automatisiert." },
];
const related = [
  { href: "/leistungen/ki-video", icon: Video, title: "KI Video & Media Creation", desc: "Der breite Service rund um KI-Video, Bild und Werbeclips für Marketing." },
  { href: "/leistungen/agentic-ai", icon: Bot, title: "Agentic AI & AI Agents", desc: "Autonome KI, die Content-Prozesse plant und end-to-end durchzieht." },
  { href: "/leistungen/n8n-automatisierung", icon: Settings2, title: "n8n Automatisierung", desc: "Den Produktions-Workflow automatisieren, vom Briefing bis zur Ausspielung." },
];

export default function Page() {
  return (
    <>
      <Script id="faq-higgsfield" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-higgsfield" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center bg-primary/10 border border-primary/20 rounded-xl p-2.5"><Clapperboard className="w-7 h-7 text-primary" /></span>
                    <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">Higgsfield AI, KI-Video</Badge>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Cinematic KI-Videos mit <span className="text-primary">Higgsfield AI</span></h1>
                  <p className="text-lg text-muted-foreground max-w-xl">Higgsfield macht aus einer Idee einen cinematic Clip, mit echter Regie über Kamera, Licht und Szene. Wir produzieren markenkonforme Marketing-Videos in Stunden statt Drehtagen, rechtssicher und in vielen Varianten.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild><a href="#contact">Kostenloses Assessment</a></Button>
                    <Button size="lg" variant="outline" asChild><a href="#vergleich">KI-Video vs. klassisch</a></Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Clapperboard className="w-4 h-4 text-primary" /> Cinema Studio</span>
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> EU AI Act konform</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>
                <div className="relative">
                  <Card className="border-2 shadow-xl shadow-primary/5 overflow-hidden">
                    <CardHeader className="border-b border-border py-3">
                      <div className="flex items-center gap-2">
                        <span className="flex gap-1.5"><span className="w-3 h-3 rounded-full bg-muted-foreground/20" /><span className="w-3 h-3 rounded-full bg-muted-foreground/20" /><span className="w-3 h-3 rounded-full bg-muted-foreground/20" /></span>
                        <span className="ml-2 font-mono text-xs text-muted-foreground">cinema-studio.higgsfield</span>
                        <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground"><span className="w-2 h-2 rounded-full bg-green-500" /> rendert</span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-3">
                      <div className="aspect-video rounded-xl border-2 border-primary/30 bg-primary/5 flex items-center justify-center relative overflow-hidden">
                        <PlayCircle className="w-14 h-14 text-primary/70" />
                        <span className="absolute bottom-2 left-2 text-[10px] uppercase tracking-wider text-primary font-medium bg-background/80 rounded px-1.5 py-0.5">Szene 1, Kamerafahrt</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {[{ icon: Camera, t: "Kamera" }, { icon: Sparkles, t: "Licht" }, { icon: Palette, t: "Look" }].map((n, i) => { const Icon = n.icon; return (
                          <div key={i} className="flex flex-col items-center gap-1 rounded-lg border border-border bg-background py-2.5"><Icon className="w-4 h-4 text-primary" /><span className="text-[11px] text-muted-foreground">{n.t}</span></div>
                        ); })}
                      </div>
                    </CardContent>
                  </Card>
                  <div className="hidden lg:flex absolute -top-4 -right-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium"><Film className="w-3.5 h-3.5 text-primary" /> 15+ Modelle</div>
                  <div className="hidden lg:flex absolute -bottom-4 -left-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium"><Zap className="w-3.5 h-3.5 text-primary" /> Clip in Stunden</div>
                </div>
              </div>
            </div>
          </section>

          <ModelLogoStrip
            caption="Higgsfield im Zusammenspiel mit den besten Videomodellen"
            items={[
              { text: "Higgsfield", name: "Higgsfield" },
              { slug: "runway", name: "Runway" },
              { slug: "googlegemini", name: "Veo" },
              { slug: "openai", name: "Sora" },
              { text: "Kling", name: "Kling" },
            ]}
          />

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

          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Kurz erklärt</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Higgsfield ist Regie, kein Zufall</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p><strong className="text-foreground">Higgsfield AI</strong> ist eine generative Plattform für cinematic Videos. Der Unterschied zu simplen Generatoren: Sie führen Regie. Kamerabewegung, Licht, Bildausschnitt und Szene lassen sich gezielt steuern, statt auf den Zufall zu hoffen.</p>
                    <p>Unter einem Abo bündelt Higgsfield über <strong className="text-foreground">15 Modelle</strong> wie Veo, Kling und Seedance und ein <strong className="text-foreground">Cinema Studio</strong> für die Szenenregie. So entstehen Videos, die professionell wirken und sich gezielt auf die Marke ausrichten lassen.</p>
                    <p>Wir bringen das in einen <strong className="text-foreground">wiederholbaren Marketing-Prozess</strong>: markenkonform, rechtssicher nach EU AI Act und auf Wunsch direkt in Ihre Automatisierung eingebunden.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">KI Video erstellen</Badge>
                    <Badge variant="secondary" className="rounded-full">AI Video Marketing</Badge>
                    <Badge variant="secondary" className="rounded-full">cinematic AI</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader><CardTitle className="text-xl">Higgsfield auf einen Blick</CardTitle><CardDescription>Die wichtigsten Eckdaten im Überblick.</CardDescription></CardHeader>
                  <CardContent className="space-y-1">
                    {ataglance.map(([label, value]) => (
                      <div key={label} className="flex items-center justify-between py-2.5 border-b border-border last:border-0"><span className="text-sm font-medium text-foreground">{label}</span><span className="text-sm text-muted-foreground text-right max-w-[55%]">{value}</span></div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum jetzt?</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Videocontent, der sonst zu teuer wäre</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">KI-Video verschiebt, was sich ein Marketingteam an Bewegtbild leisten kann, drastisch nach oben.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 pl-1">Was heute bremst</div>
                  {problems.map(({ problem }, i) => (<div key={i} className="flex items-start gap-3 p-4 rounded-xl border bg-background"><X className="w-5 h-5 text-destructive mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{problem}</span></div>))}
                </div>
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-2 pl-1">Was Higgsfield ermöglicht</div>
                  {problems.map(({ solution }, i) => (<div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-primary/20 bg-primary/5"><Check className="w-5 h-5 text-primary mt-0.5 shrink-0" /><span className="text-sm leading-relaxed font-medium">{solution}</span></div>))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Was wir liefern</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Von der Idee zum markenkonformen Clip</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Wir machen aus dem Werkzeug einen Prozess, der zuverlässig Marketing-Videos liefert.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="hover-lift border-2 lg:col-span-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2"><Clapperboard className="w-6 h-6 text-primary" /></div>
                    <CardTitle className="text-xl">{features[0].title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{features[0].description}</CardDescription>
                  </CardHeader>
                </Card>
                {features.slice(1).map((f, i) => { const Icon = f.icon; return (
                  <Card key={i} className="hover-lift border-2"><CardHeader><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2"><Icon className="w-5 h-5 text-primary" /></div><CardTitle className="text-lg">{f.title}</CardTitle><CardDescription className="leading-relaxed">{f.description}</CardDescription></CardHeader></Card>
                ); })}
              </div>
            </div>
          </section>

          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Anwendungsfälle</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Wofür wir Higgsfield einsetzen</h2>
                <p className="text-lg text-muted-foreground mt-4">Wählen Sie einen Bereich, wir zeigen konkrete Videoformate.</p>
              </div>
              <Tabs defaultValue="ads" className="w-full">
                <TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">
                  {usecases.map((d) => { const Icon = d.icon; return (<TabsTrigger key={d.value} value={d.value} className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border"><Icon className="w-4 h-4 mr-1.5" />{d.label}</TabsTrigger>); })}
                </TabsList>
                {usecases.map((d) => (
                  <TabsContent key={d.value} value={d.value}>
                    <Card className="border-2"><CardContent className="pt-6"><h3 className="text-xl font-bold mb-2">{d.head}</h3><p className="text-muted-foreground leading-relaxed mb-5">{d.intro}</p><div className="grid sm:grid-cols-2 gap-3">{d.items.map((item, j) => (<div key={j} className="flex items-start gap-2.5 p-3 rounded-lg border bg-background"><Video className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{item}</span></div>))}</div></CardContent></Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>

          <section id="vergleich" className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Vergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">KI-Video vs. klassische Produktion vs. Stock</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">KI-Video ersetzt nicht jede Produktion, aber es macht hochwertiges Bewegtbild für viel mehr Anlässe wirtschaftlich.</p>
              </div>
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[28%] font-bold text-foreground">Merkmal</TableHead>
                      <TableHead className="text-primary font-bold">Higgsfield / KI</TableHead>
                      <TableHead className="text-muted-foreground">Klassisch</TableHead>
                      <TableHead className="text-muted-foreground">Stock</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparison.map((row, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{row.feature}</TableCell>
                        <TableCell className="text-sm text-primary font-medium">{row.hf}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{row.klassisch}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{row.stock}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </section>

          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unser Prozess</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Ihr KI-Video-Projekt in 4 Schritten</h2>
                <p className="text-lg text-muted-foreground mt-4">Von der Bildsprache bis zur skalierten Produktion.</p>
              </div>
              <ProcessSteps steps={steps} />
            </div>
          </section>

          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge><h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zu Higgsfield AI</h2></div>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqs.map((f, i) => (<AccordionItem key={i} value={`item-${i}`} className="border-2 border-border rounded-xl px-6 bg-background data-[state=open]:border-primary/30 data-[state=open]:bg-primary/5"><AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-5">{f.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">{f.a}</AccordionContent></AccordionItem>))}
              </Accordion>
            </div>
          </section>

          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-10"><Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Mehr Leistungen</Badge><h2 className="text-3xl md:text-4xl font-bold">Passt gut zu Higgsfield</h2></div>
              <div className="grid md:grid-cols-3 gap-5">
                {related.map((s, i) => { const Icon = s.icon; return (
                  <a key={i} href={s.href} className="group block"><Card className="h-full border-2 hover-lift group-hover:border-primary/40"><CardHeader><div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${serviceLogos[s.href] ? "bg-white border border-border" : "bg-primary/10"}`}>{serviceLogos[s.href] ? <img src={`/img/logos/${serviceLogos[s.href]}.svg`} alt={s.title} className="w-7 h-7 object-contain" /> : <Icon className="w-6 h-6 text-primary" />}</div><CardTitle className="text-xl">{s.title}</CardTitle></CardHeader><CardContent><p className="text-muted-foreground leading-relaxed">{s.desc}</p></CardContent></Card></a>
                ); })}
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
