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
import { Megaphone, ShieldCheck, Server, MapPin, Image as ImageIcon, Video, PenTool, Share2, Sparkles, Check, X, Search, Layers, Clock, Plug, AlertTriangle, TrendingUp, Brain, Network } from "lucide-react";
import { serviceLogos } from "@/lib/serviceLogos";

export const metadata: Metadata = {
  title: "KI für Marketingagenturen: Content, Bild & Video",
  description:
    "KI für Marketingagenturen: Content, Social-Media-Posts, Ad-Creatives und Videos in Markenqualität. Aus einem Kampagnen-Briefing entstehen markenkonforme Assets in Minuten.",
  keywords:
    "KI Marketing, KI Marketingagentur, KI Content, KI Social Media, KI Texterstellung, KI Werbeagentur, Content Automatisierung, KI Ad Creatives",
  alternates: { canonical: "https://ki-kanzlei.at/branchen/ki-loesungen-marketingagenturen" },
};

const faqs = [
  {
    q: "Bleibt unsere Markenidentität bei KI-Content erhalten?",
    a: "Ja, das ist der Kern unseres Ansatzes. Wir trainieren die KI auf Ihr Brand-Manual: Tonalität, Wording, Farben, Logo-Regeln und Bildsprache. Jeder generierte Text und jedes Visual entsteht markenkonform, sodass die Ergebnisse zur jeweiligen Kundenmarke passen und nicht nach generischer KI aussehen.",
  },
  {
    q: "Ersetzt die KI unsere Texter und Art-Direktoren?",
    a: "Nein. Die KI übernimmt die zeitfressenden ersten Entwürfe und Varianten, Ihr Team kuratiert, verfeinert und gibt frei. Der Mensch behält die kreative Kontrolle und die finale Freigabe. So produzieren Ihre Kreativen mehr Output in höherer Qualität, statt mit dem leeren Blatt zu kämpfen.",
  },
  {
    q: "Welche Assets kann die KI aus einem Briefing erstellen?",
    a: "Aus einem Kampagnen-Briefing entstehen Captions und Copy für Social Media, Ad-Headlines, Key-Visuals und Ad-Creatives, Produktbilder, kurze Reel- und Ad-Videos sowie Reel-Skripte. Alles markenkonform und in mehreren Varianten zum Testen.",
  },
  {
    q: "Wie steht es um Bildrechte und Urheberrecht bei KI-Bildern?",
    a: "Wir setzen auf Modelle und Workflows mit klaren Nutzungsrechten für den kommerziellen Einsatz und dokumentieren die Herkunft der Assets. Auf Wunsch arbeiten wir ausschließlich mit lizenzkonformen Modellen und Ihren eigenen Produkt- und Markenbildern als Referenz, damit Ihre Kampagnen rechtssicher bleiben.",
  },
  {
    q: "Wie schnell ist eine Kampagne damit produktionsreif?",
    a: "Statt Tagen für die ersten Entwürfe liefert die KI Captions, Key-Visuals und Reel-Skripte in Minuten. Pitches, Moodboards und Kampagnen-Konzepte lassen sich dadurch oft um 50 bis 70 Prozent schneller bis zur Präsentationsreife bringen.",
  },
  {
    q: "Werden Datenschutz und DSGVO eingehalten?",
    a: "Ja. Alle Lösungen laufen DSGVO-konform mit Datenhaltung in Europa. Kundenbriefings, Marken-Assets und Kampagnendaten bleiben geschützt, auf Wunsch setzen wir private, lokal gehostete Modelle ein, damit sensible Inhalte Ihrer Kunden Ihre Infrastruktur nicht verlassen.",
  },
  {
    q: "Wie lange dauert die Einrichtung in unserer Agentur?",
    a: "In der Regel rund 2 Wochen. Nach einem Erstgespräch hinterlegen wir Brand-Guidelines, bauen Vorlagen für Texte, Bilder und Videos, binden Ihre Tools an und schulen Ihr Team. Danach läuft die Content-Produktion direkt in Ihren bestehenden Workflows weiter.",
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
  name: "KI Lösungen für Marketingagenturen",
  serviceType: "KI Marketing, KI-Content-Produktion, KI-Bildgenerator, KI-Video",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description: "KI Lösungen für Marketing- und Werbeagenturen im DACH-Raum: markenkonforme Content-Produktion, KI-Bildgenerator für Ad-Creatives, KI-Video für Reels und Ads, Copywriting und Social-Media-Automatisierung.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const problems = [
  "Content-Produktion frisst Stunden, bevor der erste Entwurf überhaupt steht",
  "Jeder Kanal braucht eigene Formate, Captions und Visuals in hoher Frequenz",
  "Ad-Creatives und Produktbilder hängen an knappen Designressourcen fest",
  "Pitches und Moodboards binden das Team, bevor klar ist, ob der Etat kommt",
  "Generische KI-Tools treffen die Markentonalität der Kunden nicht",
  "Skalierung scheitert, weil Qualität und Freigaben nicht mitwachsen",
];

const solutions = [
  "Aus einem Kampagnen-Briefing entstehen Captions, Key-Visuals und Reel-Skripte in Minuten",
  "Die KI liefert pro Kanal passende Formate und Varianten zum Testen",
  "Der KI-Bildgenerator erstellt Ad-Creatives und Produktbilder ohne Wartezeit",
  "Pitches und Moodboards werden 50 bis 70 Prozent schneller präsentationsreif",
  "Jedes Asset entsteht markenkonform, trainiert auf Tonalität und Bildsprache",
  "Ihr Team kuratiert und gibt frei, der Mensch behält die kreative Kontrolle",
];

const useCases = [
  {
    value: "content",
    label: "Content-Produktion",
    icon: Sparkles,
    head: "KI-Content-Produktion in Markenqualität",
    text: "Aus einem Kampagnen-Briefing wie Sommer-Sale generiert die KI in Minuten passende Captions, Ad-Copy, Key-Visuals und Reel-Skripte, alles markenkonform und in mehreren Varianten. Ihr Team kuratiert, verfeinert und gibt frei. So wird aus einem Briefing eine ganze Kampagne, ohne dass die Kreativität am leeren Blatt scheitert.",
  },
  {
    value: "bild",
    label: "Bildgenerator",
    icon: ImageIcon,
    head: "KI-Bildgenerator für Ad-Creatives",
    text: "Erstellt Ad-Creatives, Key-Visuals und Produktbilder in Markenlook, auf Wunsch mit Ihren eigenen Produktfotos als Referenz. So testen Sie schneller mehr Bildvarianten, ohne jede Idee in einem aufwendigen Shooting umsetzen zu müssen.",
  },
  {
    value: "video",
    label: "Video & Reels",
    icon: Video,
    head: "KI-Video für Reels und Ads",
    text: "Produziert kurze Reels, Social-Ads und Video-Schnitte aus Skript, Bildern und Vorlagen. Aus einem Reel-Skript entsteht ein fertiger Clip im passenden Format für Instagram, TikTok und YouTube Shorts, markenkonform und in hoher Frequenz.",
  },
  {
    value: "copy",
    label: "Copywriting",
    icon: PenTool,
    head: "Texterstellung & Copywriting",
    text: "Liefert Headlines, Body-Copy, Newsletter, Landingpage-Texte und Claims im Wording Ihrer Kundenmarken. Mehrere Varianten auf Knopfdruck, damit Ihre Texter aus starken Entwürfen kuratieren statt bei null zu beginnen.",
  },
  {
    value: "social",
    label: "Social Media",
    icon: Share2,
    head: "Social-Media-Planung & Automatisierung",
    text: "Plant, erstellt und terminiert Posts über alle Kanäle, schlägt Hashtags und Posting-Zeiten vor und hält den Content-Kalender voll. So bleibt die Frequenz hoch, ohne dass das Team jeden Post manuell vorbereitet.",
  },
  {
    value: "seo",
    label: "SEO-Content",
    icon: Search,
    head: "SEO-Content auf Knopfdruck",
    text: "Recherchiert Keywords, erstellt Briefings und schreibt SEO-optimierte Blog- und Website-Texte für Ihre Kunden. So skalieren Sie Content-Marketing, das rankt, ohne dass jeder Artikel Tage in Anspruch nimmt.",
  },
];

const features = [
  { icon: Megaphone, title: "Vom Briefing zur fertigen Kampagne", text: "Ein Kampagnen-Briefing wie Sommer-Sale wird zu Captions, Key-Visuals und Reel-Skripten in Minuten. Markenkonform, in Varianten und bereit zur Freigabe durch Ihr Team." },
  { icon: ImageIcon, title: "Ad-Creatives und Produktbilder", text: "Der KI-Bildgenerator erstellt Werbe-Visuals und Produktbilder im Markenlook, auf Wunsch mit Ihren eigenen Produktfotos als Referenz." },
  { icon: Video, title: "Reels und Video-Ads", text: "Kurze Clips für Instagram, TikTok und YouTube Shorts entstehen aus Skript und Bildern, im passenden Format und in hoher Frequenz." },
  { icon: Layers, title: "Markenkonform per Brand-Training", text: "Die KI lernt Tonalität, Wording, Farben und Bildsprache jeder Kundenmarke, sodass jedes Asset zur Marke passt statt nach generischer KI auszusehen." },
  { icon: ShieldCheck, title: "DSGVO und EU-Hosting", text: "Kundenbriefings und Marken-Assets bleiben geschützt. Auf Wunsch arbeiten wir mit privaten, lokal gehosteten Modellen für sensible Inhalte." },
  { icon: TrendingUp, title: "50 bis 70 Prozent schnellere Pitches", text: "Moodboards, Konzepte und Pitches werden deutlich schneller präsentationsreif, sodass Ihre Agentur mehr Etats in kürzerer Zeit gewinnt." },
];

const stats = [
  ["10x", "mehr Content-Varianten pro Kampagne"],
  ["Min.", "vom Briefing zu ersten Assets"],
  ["50-70%", "schnellere Pitches und Moodboards"],
  ["2 Wo.", "vom Erstgespräch bis Go-Live"],
];

const blick = [
  ["Einsatz", "Text, Bild, Video, Social"],
  ["Output", "Captions, Creatives, Reels"],
  ["Qualität", "markenkonform per Brand-Training"],
  ["Kontrolle", "Mensch kuratiert und gibt frei"],
  ["Datenschutz", "DSGVO, EU-Hosting, private KI"],
  ["Go-Live", "in rund 2 Wochen"],
];

const related = [
  { href: "/leistungen/ki-bildgenerator", icon: ImageIcon, title: "KI-Bildgenerator", desc: "Ad-Creatives, Key-Visuals und Produktbilder im Markenlook, auf Knopfdruck und in vielen Varianten zum Testen." },
  { href: "/leistungen/ki-video", icon: Video, title: "KI-Video", desc: "Reels, Social-Ads und Video-Schnitte aus Skript und Bildern, im passenden Format für jeden Kanal." },
  { href: "/leistungen/agentic-ai", icon: Brain, title: "Agentic AI", desc: "Autonome KI-Agenten, die ganze Content-Workflows von Briefing bis Veröffentlichung orchestrieren." },
];

const assets = [
  { who: "Briefing", text: "Kampagne Sommer-Sale, Zielgruppe 25 bis 40, sportlich, frischer Markenton." },
  { who: "KI-Output", text: "3 Captions im Markenwording, getestet auf Tonalität." },
  { who: "KI-Output", text: "1 Key-Visual als Ad-Creative im Markenlook." },
  { who: "KI-Output", text: "1 Reel-Skript für ein 15-Sekunden-Video." },
];

export default function Page() {
  return (
    <>
      <Script id="faq-marketingagenturen" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-marketingagenturen" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <style>{`
        @keyframes mktgPing { 0% { transform: scale(.9); opacity:.5; } 70%,100% { transform: scale(1.6); opacity:0; } }
        .mktg-ping { animation: mktgPing 2s ease-out infinite; }
      `}</style>

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                    KI für Marketing- & Werbeagenturen
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    KI Lösungen für <span className="text-primary">Marketingagenturen</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    KI-Content-Produktion in Markenqualität: Texte, Social-Media-Posts, Bilder und Videos. Aus einem Kampagnen-Briefing entstehen markenkonforme Assets in Minuten, Ihr Team kuratiert und gibt frei.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Analysegespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#use-cases">Anwendungsfälle ansehen</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-primary" /> EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Briefing zu Assets card */}
                <Card className="relative border-2 shadow-xl shadow-primary/5">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                          <Megaphone className="w-5 h-5 text-primary" />
                        </div>
                        <span className="absolute inset-0 rounded-full border-2 border-primary/40 mktg-ping" aria-hidden />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">KI-Kampagnen-Studio</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> Assets werden generiert, markenkonform
                        </div>
                      </div>
                      <span className="ml-auto text-[10px] uppercase tracking-wider text-muted-foreground font-medium">EU-Server</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-3">
                    {assets.map((t, i) => (
                      <div key={i} className={t.who === "KI-Output" ? "flex justify-end" : "flex justify-start"}>
                        <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-snug ${t.who === "KI-Output" ? "bg-primary text-white rounded-br-sm" : "bg-muted text-foreground rounded-bl-sm"}`}>
                          {t.text}
                        </div>
                      </div>
                    ))}
                    <div className="flex items-center justify-between pt-2 border-t border-border text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-primary" /> 5 Assets erstellt</span>
                      <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary" /> bereit zur Freigabe</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* STATS BAND */}
          <section className="pb-4">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-2 md:grid-cols-4 border-2 border-border rounded-2xl overflow-hidden bg-card">
                {stats.map(([v, l], i) => (
                  <div key={i} className="p-8 text-center border-b md:border-b-0 border-r last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r border-border">
                    <div className="text-4xl md:text-5xl font-bold text-primary">{v}</div>
                    <div className="text-sm text-muted-foreground mt-2">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WAS LEISTET KI IN DER AGENTUR */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">KI in der Agentur</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was KI in der Marketingagentur wirklich leistet</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Künstliche Intelligenz in der Agentur ersetzt nicht die Kreativität. Sie beschleunigt die <strong className="text-foreground">Content-Produktion</strong>: Texte, Captions, Bilder, Ad-Creatives und Videos entstehen aus einem Briefing in Minuten statt in Tagen.</p>
                    <p>Im Zentrum steht die <strong className="text-foreground">markenkonforme Asset-Produktion</strong>. Aus einem Kampagnen-Briefing generiert die KI Captions, Key-Visuals und Reel-Skripte, trainiert auf Tonalität und Bildsprache jeder Kundenmarke. Ihr Team kuratiert, verfeinert und gibt frei.</p>
                    <p>Für Agenturen im DACH-Raum bleibt eines entscheidend: der <strong className="text-foreground">Datenschutz</strong>. Wir bauen jede Lösung DSGVO-konform, mit Datenhaltung in Europa und auf Wunsch privaten, lokal gehosteten Modellen für sensible Kundeninhalte.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">KI-Content-Produktion</Badge>
                    <Badge variant="secondary" className="rounded-full">Bild & Video</Badge>
                    <Badge variant="secondary" className="rounded-full">Markenkonform</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Auf einen Blick</CardTitle>
                    <CardDescription>Was KI in Ihrer Agentur übernimmt.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {blick.map(([label, value]) => (
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

          {/* PROBLEM ZU LÖSUNG */}
          <section className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-14">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Vom Problem zur Lösung</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Der Content-Engpass in der Agentur, gelöst</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Mehr Kanäle, mehr Formate, mehr Frequenz. Wir nehmen Ihrem Team die zeitfressenden Entwürfe ab, damit wieder Zeit für echte Kreativität bleibt.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-border">
                  <CardHeader>
                    <CardTitle className="text-xl">Der Agenturalltag heute</CardTitle>
                    <CardDescription>Was Kreative und Produktion täglich bremst.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {problems.map((p, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-muted flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-4 h-4 text-muted-foreground" />
                        </span>
                        <span className="text-muted-foreground leading-relaxed">{p}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                <Card className="border-2 border-primary/30 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="text-xl">Mit KI Kanzlei</CardTitle>
                    <CardDescription>So sieht die Produktion ab Woche 2 aus.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {solutions.map((s, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-primary" />
                        </span>
                        <span className="text-foreground leading-relaxed">{s}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* USE CASES TABS */}
          <section id="use-cases" className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Lösungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Moderne KI-Lösungen für Ihre Agentur</h2>
                <p className="text-lg text-muted-foreground">Mehr Output, gleiche Markenqualität. Wählen Sie den Bereich, der Ihre Produktion am meisten entlastet.</p>
              </div>
              <Tabs defaultValue="content" className="w-full">
                <TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">
                  {useCases.map((u) => {
                    const Icon = u.icon;
                    return (
                      <TabsTrigger key={u.value} value={u.value} className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border">
                        <Icon className="w-4 h-4 mr-1.5" />{u.label}
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
                {useCases.map((u) => (
                  <TabsContent key={u.value} value={u.value}>
                    <Card className="border-2">
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-bold mb-2">{u.head}</h3>
                        <p className="text-muted-foreground leading-relaxed">{u.text}</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>

          {/* FEATURES BENTO */}
          <section className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-14">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum es funktioniert</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Gebaut für die Content-Produktion</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Markenkonform, schnell und kuratierbar, vom Briefing bis zum fertigen Asset.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {features.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <Card key={i} className={`hover-lift border-2 ${i === 0 ? "lg:col-span-2 bg-primary/5 border-primary/20" : ""}`}>
                      <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{f.title}</CardTitle>
                      </CardHeader>
                      <CardContent><p className="text-muted-foreground leading-relaxed">{f.text}</p></CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen aus der Agentur</h2>
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

          {/* RELATED LEISTUNGEN */}
          <section className="section-spacing">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Mehr Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zur Marketingagentur</h2>
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
