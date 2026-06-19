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
import { ToolLogo } from "@/components/ToolBadge";
import {
  Video, Film, Clapperboard, Wand2, ArrowRightLeft, Palette, Layers, ShieldCheck, Sparkles,
  MapPin, Megaphone, PlayCircle, Box, Users, Camera, Phone, Lightbulb, Rocket, Clock, Check, X,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Runway ML: KI-Video für Ihr Marketing",
  description:
    "Runway ML für markenkonforme Marketing-Clips: Wir produzieren KI-Video mit Gen-Video, Motion Brush und Video-to-Video, kombiniert mit Sora, Veo und Higgsfield, rechtssicher nach EU AI Act im DACH-Raum. Fertige Clips statt Generator-Output.",
  keywords:
    "Runway ML, Runway, Runway Video, KI Video, AI Video, Video Marketing KI, KI-Videoproduktion, Gen-Video, Motion Brush, Video-to-Video, Runway Alternative, Sora, Veo, Higgsfield, KI Video Agentur, AI Video Marketing",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/runway" },
};

const faqs = [
  {
    q: "Was ist Runway ML und wofür wird es im Marketing eingesetzt?",
    a: "Runway ML, oft nur Runway genannt, ist eine der führenden KI-Videoplattformen, die aus Text, Bild oder vorhandenem Video bewegte Szenen erzeugt. Im Marketing nutzen wir Runway, um schnell und günstig Bewegtbild zu produzieren: Reels, Ads, Produktclips und Imagefilme. Statt Crew, Drehtag und langem Schnitt entsteht ein erster Clip oft in Tagen. Wir setzen Runway dabei nicht als Spielerei ein, sondern als Produktionswerkzeug für fertige, markenkonforme Clips.",
  },
  {
    q: "Wie sorgen Sie dafür, dass die KI-Videos markenkonform sind?",
    a: "Wir starten nicht mit einem Prompt, sondern mit Ihrem Markenrahmen. Farben, Bildsprache, Typografie, Tonalität und Botschaft halten wir aus dem Markenhandbuch fest und steuern Runway gezielt darauf hin. Über mehrere Iterationen, Motion Brush für die Bewegung und einen sauberen Schnitt bringen wir jeden Clip auf Markenniveau. Das Ergebnis sieht nach Ihrem Unternehmen aus, nicht nach generischem KI-Output.",
  },
  {
    q: "Was bedeuten Gen-Video, Motion Brush und Video-to-Video?",
    a: "Gen-Video beschreibt das Erzeugen von Bewegtbild aus Text oder Bild. Motion Brush ist ein Werkzeug, mit dem wir festlegen, welche Bereiche im Bild sich wie bewegen, also gezielte Kamerafahrt und Bewegung statt Zufall. Video-to-Video verwandelt bestehendes Material in einen neuen Look, etwa um einen Clip zu restylen, ohne neu zu drehen. Diese drei Funktionen kombinieren wir je nach Clip und Zielkanal.",
  },
  {
    q: "Ist KI-Video mit Runway rechtssicher und DSGVO-konform?",
    a: "Wir produzieren nach den Vorgaben des EU AI Act. Das heißt unter anderem klare Kennzeichnung von KI-generierten Inhalten, geklärte Rechte an verwendeten Stimmen, Gesichtern und Marken sowie eine saubere Dokumentation. Personenbezogene Daten behandeln wir DSGVO-konform. So vermeiden Sie rechtliche Risiken, die bei unbedachtem Einsatz von KI-Video schnell entstehen, und können die Clips ohne Bauchschmerzen veröffentlichen.",
  },
  {
    q: "Warum kombinieren Sie Runway mit Sora, Veo und Higgsfield?",
    a: "Kein Tool ist in allem das beste. Runway glänzt bei Steuerung, Editing und schneller Iteration. Sora ist stark bei langen, kohärenten Szenen, Veo bei fotorealistischer Physik und Higgsfield bei dynamischen Kamerafahrten und Effekten. Wir wählen je Szene das passende Werkzeug und führen alles in einem Clip zusammen. So bekommen Sie das beste Ergebnis, statt sich auf die Grenzen eines einzelnen Generators zu beschränken.",
  },
  {
    q: "Was kostet eine KI-Videoproduktion mit Runway?",
    a: "Die Kosten hängen von Länge, Anzahl der Varianten, Komplexität und Aufwand für den Feinschliff ab. Ein einzelner Social-Clip ist deutlich günstiger als ein klassischer Dreh, ein aufwändiger Imagefilm liegt höher. Weil aus einem Konzept oft viele Varianten entstehen, sinken die Stückkosten je Clip stark. Im kostenlosen Assessment schätzen wir Ihren konkreten Bedarf und nennen einen klaren Rahmen, bevor wir starten.",
  },
  {
    q: "Wie lange dauert die Produktion eines Clips?",
    a: "Ein klar umrissener Social-Clip ist oft in wenigen Tagen fertig. Aufwändigere Produktionen mit Storyboard, mehreren Szenen, Vertonung und mehreren Toolschritten brauchen ein bis zwei Wochen. Wir starten bewusst mit dem Format, das den größten Effekt bringt, liefern schnell einen ersten Clip und bauen von dort aus weitere Varianten und Kanäle auf.",
  },
  {
    q: "Bekommen wir fertige Clips oder nur den Generator-Output?",
    a: "Sie bekommen fertige Clips. Ein roher Export aus dem Generator ist selten sendefertig und selten markenkonform. Wir liefern geschnittene, vertonte und markengerechte Videos in allen benötigten Formaten, inklusive Untertitel, Call-to-Action und Kennzeichnung nach EU AI Act. Auf Wunsch übernehmen wir auch laufend neue Clips, damit Ihr Bewegtbild nicht nach einem einzelnen Projekt versiegt.",
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
  name: "Runway ML KI-Videoproduktion für Marketing",
  serviceType: "KI-Videoproduktion, Runway ML, Video Marketing",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "Runway ML KI-Videoproduktion für Marketing im DACH-Raum: markenkonforme Clips mit Gen-Video, Motion Brush und Video-to-Video, kombiniert mit Sora, Veo und Higgsfield, rechtssicher nach EU AI Act.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const stats = [
  { value: "4K", label: "Export für jede Plattform" },
  { value: "10x", label: "günstiger als klassischer Dreh" },
  { value: "100 %", label: "markenkonforme Clips" },
  { value: "Tage", label: "statt Wochen bis zum Clip" },
];

const ataglance = [
  ["Typ", "KI-Videoplattform im Browser"],
  ["Kernfunktionen", "Gen-Video, Motion Brush, V2V"],
  ["Eingabe", "Text, Bild, Video"],
  ["Export", "bis 4K, gängige Formate"],
  ["Einsatz", "Marketing, Social, Ads, Brand"],
  ["Rechtslage", "EU AI Act, klare Kennzeichnung"],
];

const problems = [
  { problem: "Ein Profi-Videodreh kostet viel Budget und Wochen Vorlauf für einen einzigen Clip.", solution: "Mit Runway entstehen markenkonforme Clips in Tagen, ohne Crew und ohne Drehtag." },
  { problem: "Generator-Tools liefern beeindruckende, aber unbrauchbare Clips, die nicht zur Marke passen.", solution: "Wir steuern Look, Bewegung und Botschaft, bis der Clip wirklich nach Ihrer Marke aussieht." },
  { problem: "Für jede Plattform braucht es ein anderes Format, das Budget reicht nie für alle.", solution: "Aus einem Konzept liefern wir Varianten für Reels, Ads, Web und Messe im richtigen Format." },
  { problem: "Niemand im Team weiß, ob KI-Videos rechtlich überhaupt erlaubt sind.", solution: "Wir produzieren nach EU AI Act, kennzeichnen sauber und klären Rechte an Stimmen und Gesichtern." },
];

const bentoFeatures = [
  { icon: Clapperboard, title: "Fertige Clips statt Generator-Output", description: "Sie bekommen keinen rohen Generator-Export, sondern fertig geschnittene, vertonte und markenkonforme Clips, die direkt online gehen. Wir übernehmen Konzept, Storyboard, Produktion und Feinschliff, damit aus beeindruckenden KI-Bildern echtes Marketing wird." },
  { icon: Wand2, title: "Gezielte Bewegung mit Motion Brush", description: "Mit Motion Brush bestimmen wir, was sich im Bild bewegt und wie. So entstehen gezielte Kamerafahrt und Bewegung statt zufälligem Flackern." },
  { icon: ArrowRightLeft, title: "Video-to-Video Restyling", description: "Bestehendes Material verwandeln wir per Video-to-Video in einen neuen Look, ohne komplett neu zu drehen." },
  { icon: Palette, title: "Markenkonform in Look und Ton", description: "Farben, Bildsprache, Typo und Tonalität richten wir an Ihrem Markenhandbuch aus, jeder Clip sieht nach Ihnen aus." },
  { icon: Layers, title: "Toolübergreifend mit Sora, Veo, Higgsfield", description: "Wir setzen Runway als Kern ein und ergänzen je nach Szene Sora, Veo oder Higgsfield, immer das Tool, das den besten Clip liefert." },
  { icon: ShieldCheck, title: "Rechtssicher nach EU AI Act", description: "Wir produzieren mit klarer Kennzeichnung, geklärten Rechten an Stimmen und Gesichtern und sauberer Dokumentation nach EU AI Act." },
];

const departments = [
  { value: "social", label: "Social", icon: Megaphone, head: "Social Media & Reels", intro: "Kurze, scrollstoppende Clips für Instagram, TikTok und LinkedIn, im richtigen Format und Tempo.", items: ["Reels und Shorts aus einem Konzept in mehreren Seitenverhältnissen produzieren.", "Wiederkehrende Content-Formate mit konstantem Marken-Look bespielen.", "Trends schnell aufgreifen, ohne jedes Mal einen Dreh zu organisieren.", "Hook, Untertitel und Call-to-Action direkt mitliefern."] },
  { value: "ads", label: "Werbung", icon: PlayCircle, head: "Performance Ads", intro: "Werbeclips, die getestet werden wollen, in vielen Varianten statt einer teuren Produktion.", items: ["Mehrere Ad-Varianten für A/B-Tests aus demselben Briefing erzeugen.", "Produkt und Botschaft in den ersten Sekunden klar in Szene setzen.", "Schnelle Iteration auf Basis der Kampagnenzahlen.", "Formate für Meta, YouTube, TikTok und Display in einem Rutsch."] },
  { value: "produkt", label: "Produkt", icon: Box, head: "Produkt & Launch", intro: "Produkte erklären und in Bewegung zeigen, auch wenn noch kein fertiges Realbild existiert.", items: ["Produktszenen und Anwendungen visualisieren, bevor ein Studio gebucht wird.", "Feature-Highlights als kurze, klare Clips aufbereiten.", "Launch-Teaser und Countdown-Clips markenkonform gestalten.", "Bestehende Renderings oder Fotos zu Bewegtbild erweitern."] },
  { value: "brand", label: "Brand", icon: Sparkles, head: "Brand & Image", intro: "Imagefilme und Markenmomente mit einem Look, der wirklich zu Ihrer Marke passt.", items: ["Stimmungsvolle Marken-Clips für Website und Social produzieren.", "Konsistenten visuellen Stil über alle Clips hinweg halten.", "Abstrakte Botschaften wie Werte oder Vision visuell erlebbar machen.", "Intro- und Outro-Sequenzen für Ihre Videos gestalten."] },
  { value: "sales", label: "Vertrieb", icon: Users, head: "Vertrieb & Pitch", intro: "Bewegtbild für Pitches, Angebote und Outreach, das in Erinnerung bleibt.", items: ["Personalisierte Clips für wichtige Accounts erstellen.", "Komplexe Angebote als kurzes Erklärvideo aufbereiten.", "Pitch-Decks mit kurzen Bewegtbild-Sequenzen aufwerten.", "Messe- und Event-Einladungen als Clip versenden."] },
  { value: "event", label: "Event", icon: Camera, head: "Event & Messe", intro: "Loops, Teaser und Recaps für Bühne, Messestand und Nachbereitung.", items: ["Hintergrund-Loops für Messestand und Bühne produzieren.", "Teaser im Vorfeld und Recap-Clips danach erstellen.", "Speaker und Programm visuell ankündigen.", "Markenkonforme Visuals für LED-Wände und Screens liefern."] },
];

const comparison = [
  { feature: "Größte Stärke", runway: "Steuerung & Editing", sora: "lange, kohärente Szenen", veo: "fotorealistische Physik" },
  { feature: "Eingabe", runway: "Text, Bild, Video", sora: "Text, Bild", veo: "Text, Bild" },
  { feature: "Feinsteuerung", runway: "Motion Brush, präzise", sora: "über Prompt", veo: "über Prompt" },
  { feature: "Video-to-Video", runway: "ja, Restyling", sora: "eingeschränkt", veo: "eingeschränkt" },
  { feature: "Marketing-Tempo", runway: "schnelle Iteration", sora: "stark bei Hero-Clips", veo: "stark bei Realismus" },
  { feature: "Marken-Konsistenz", runway: "hoch, gut steuerbar", sora: "mittel", veo: "mittel" },
  { feature: "Unser Einsatz", runway: "Kern jeder Produktion", sora: "ergänzend für Hero-Szenen", veo: "ergänzend für Realfilm-Look" },
];

const steps = [
  { step: "01", icon: Phone, title: "Kostenlose Erstanalyse", time: "30 Minuten", description: "Wir klären Ziel, Kanal und Markenrahmen und prüfen, welche Clips die größte Wirkung bringen. Sie wissen danach, wo der schnellste Hebel liegt." },
  { step: "02", icon: Lightbulb, title: "Konzept & Storyboard", time: "Woche 1", description: "Wir entwickeln Idee, Storyboard und Look und wählen die passenden Tools, Runway als Kern, Sora, Veo oder Higgsfield ergänzend." },
  { step: "03", icon: Clapperboard, title: "Produktion & Feinschliff", time: "Woche 1 bis 2", description: "Wir generieren die Szenen, steuern die Bewegung, vertonen, schneiden und bringen den Clip auf Markenniveau." },
  { step: "04", icon: Rocket, title: "Lieferung & Varianten", time: "ab Woche 2", description: "Sie erhalten fertige Clips in allen Formaten, inklusive Kennzeichnung nach EU AI Act und Varianten für jeden Kanal." },
];

const related = [
  { href: "/leistungen/ki-video", icon: Film, title: "KI Video & Media Creation", desc: "Strategie und Produktion für KI-Video und Media Creation, von der Idee bis zum fertigen Clip." },
  { href: "/leistungen/sora", icon: Clapperboard, title: "Sora", desc: "OpenAIs Modell für lange, kohärente Szenen, das wir für Hero-Clips mit Runway kombinieren." },
  { href: "/leistungen/higgsfield-ai", icon: Sparkles, title: "Higgsfield AI", desc: "Kamerafahrten und Effekte auf Kino-Niveau, ergänzend zu Runway für dynamische Clips." },
];

export default function Page() {
  return (
    <>
      <Script id="faq-runway" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-runway" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center bg-primary/10 border border-primary/20 rounded-xl p-2.5">
                      <Video className="w-6 h-6 text-primary" />
                    </span>
                    <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                      Runway ML, KI-Video für Marketing
                    </Badge>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Runway ML: KI-Video, das <span className="text-primary">nach Ihrer Marke aussieht</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Wir produzieren mit Runway markenkonforme Marketing-Clips, mit Gen-Video, Motion Brush und Video-to-Video. Toolübergreifend kombiniert mit Sora, Veo und Higgsfield, rechtssicher nach EU AI Act. Sie bekommen fertige Clips, nicht nur Generator-Output.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Assessment</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#vergleich">Runway vs. Sora vs. Veo</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> EU AI Act konform</span>
                    <span className="flex items-center gap-1.5"><Film className="w-4 h-4 text-primary" /> Fertige Clips</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Hero visual: Produktions-Pipeline */}
                <div className="relative">
                  <Card className="border-2 shadow-xl shadow-primary/5 overflow-hidden">
                    <CardHeader className="border-b border-border py-3">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center justify-center bg-primary/10 border border-primary/20 rounded p-1">
                          <Video className="w-4 h-4 text-primary" />
                        </span>
                        <span className="font-mono text-xs text-muted-foreground">brand-clip-04.mp4</span>
                        <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> fertig
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3 rounded-xl border-2 border-primary/40 bg-primary/5 px-3.5 py-2.5">
                        <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0"><Clapperboard className="w-5 h-5 text-primary" /></div>
                        <div className="min-w-0"><div className="text-[10px] uppercase tracking-wider text-primary font-medium">Briefing</div><div className="text-sm font-semibold truncate">Marken-Storyboard</div></div>
                      </div>
                      {[
                        { icon: Sparkles, label: "Gen-Video", title: "Szene aus Text & Bild" },
                        { icon: Wand2, label: "Motion Brush", title: "Bewegung gezielt steuern" },
                        { icon: Film, label: "Finish", title: "Schnitt, Ton, Marken-Look" },
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
                    <Sparkles className="w-3.5 h-3.5 text-primary" /> Gen-Video bis 4K
                  </div>
                  <div className="hidden lg:flex absolute -bottom-4 -left-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-primary" /> EU AI Act konform
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ModelLogoStrip
            caption="Runway plus die besten Videomodelle, je Szene kombiniert"
            items={[
              { slug: "runway", name: "Runway" },
              { slug: "openai", name: "Sora" },
              { slug: "googlegemini", name: "Veo" },
              { text: "Higgsfield", name: "Higgsfield" },
            ]}
          />

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
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was ist Runway ML und was bringt es im Marketing?</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p><strong className="text-foreground">Runway ML</strong> ist eine der führenden KI-Videoplattformen. Aus Text, Bild oder vorhandenem Video erzeugt Runway bewegte Szenen, sogenanntes <strong className="text-foreground">Gen-Video</strong>, das Sie mit Werkzeugen wie <strong className="text-foreground">Motion Brush</strong> und Video-to-Video gezielt steuern.</p>
                    <p>Der Reiz für das Marketing liegt im Tempo. Wo früher Crew, Drehtag und Schnitt Wochen und ein großes Budget brauchten, entsteht ein <strong className="text-foreground">KI-Video</strong> heute in Tagen. Gerade für Social, Ads und Produktclips bedeutet das deutlich mehr Bewegtbild bei kleinerem Budget.</p>
                    <p>Der Haken: Ein roher Generator-Export ist selten markenkonform und selten sendefertig. Genau hier setzen wir an. Wir verbinden Runway mit Sora, Veo und Higgsfield und liefern fertige, <strong className="text-foreground">rechtssichere</strong> Clips, nicht nur Generator-Output.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">KI Video</Badge>
                    <Badge variant="secondary" className="rounded-full">AI Video</Badge>
                    <Badge variant="secondary" className="rounded-full">Runway Video</Badge>
                    <Badge variant="secondary" className="rounded-full">Video Marketing KI</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Runway auf einen Blick</CardTitle>
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
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum KI-Video?</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Wo heute ein teurer Dreh nötig ist, entsteht morgen ein Clip</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Überall, wo Sie regelmäßig Bewegtbild brauchen, liefert Runway schneller und günstiger, ohne dass die Marke leidet.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 pl-1">Was heute passiert</div>
                  {problems.map(({ problem }, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl border bg-background"><X className="w-5 h-5 text-destructive mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{problem}</span></div>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-2 pl-1">Was wir mit Runway liefern</div>
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
                <h2 className="text-3xl md:text-4xl font-bold">Mehr als ein Klick im Generator</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Wir produzieren markenkonforme KI-Videos und denken Look, Tempo und Recht von Anfang an mit.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="hover-lift border-2 lg:col-span-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2"><Clapperboard className="w-6 h-6 text-primary" /></div>
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
                <h2 className="text-3xl md:text-4xl font-bold">Was wir mit Runway produzieren</h2>
                <p className="text-lg text-muted-foreground mt-4">Wählen Sie einen Bereich, wir zeigen konkrete Clips aus der Praxis.</p>
              </div>
              <Tabs defaultValue="social" className="w-full">
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
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Tool-Vergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Runway vs. Sora vs. Veo</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Welches KI-Video-Tool passt? Das hängt von Szene, Look und Steuerung ab. Wir kombinieren die Stärken, statt uns auf ein einziges Tool festzulegen.</p>
              </div>
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[28%] font-bold text-foreground">Merkmal</TableHead>
                      <TableHead className="text-primary font-bold"><span className="inline-flex items-center gap-1.5"><ToolLogo name="Runway" />Runway</span></TableHead>
                      <TableHead className="text-muted-foreground"><span className="inline-flex items-center gap-1.5"><ToolLogo name="Sora" />Sora</span></TableHead>
                      <TableHead className="text-muted-foreground"><span className="inline-flex items-center gap-1.5"><ToolLogo name="Veo" />Veo</span></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparison.map((row, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{row.feature}</TableCell>
                        <TableCell className="text-sm text-primary font-medium">{row.runway}</TableCell>
                        <TableCell className="text-sm">{row.sora}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{row.veo}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
              <p className="text-sm text-muted-foreground text-center mt-4">Unser Standard für Marketing-Clips ist <a href="/leistungen/runway" className="text-primary hover:underline">Runway</a>, weil Steuerung und Editing hier am stärksten sind. <a href="/leistungen/sora" className="text-primary hover:underline">Sora</a> und Veo setzen wir gezielt für lange Hero-Szenen und fotorealistische Aufnahmen ein.</p>
            </div>
          </section>

          {/* PROZESS */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unser Prozess</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Ihr KI-Video-Projekt in 4 Schritten</h2>
                <p className="text-lg text-muted-foreground mt-4">Transparent, markenkonform und rechtssicher von der Idee bis zum fertigen Clip.</p>
              </div>
              <ProcessSteps steps={steps} />
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zu Runway und KI-Video</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zu Runway</h2>
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
