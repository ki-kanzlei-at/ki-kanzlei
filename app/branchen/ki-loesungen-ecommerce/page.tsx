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
import { ShoppingBag, ShieldCheck, Server, MapPin, Bot, MessageSquare, FileText, Image as ImageIcon, Languages, RefreshCw, Megaphone, Network, Check, X, Sparkles, Globe } from "lucide-react";
import { serviceLogos } from "@/lib/serviceLogos";

export const metadata: Metadata = {
  title: "KI für E-Commerce: Kundenservice & Shop automatisieren",
  description:
    "KI für E-Commerce: ein KI-Chatbot löst Fragen zu Bestellstatus, Retoure und Produkten sofort, dazu automatische Produktbeschreibungen und KI-Produktbilder. DSGVO-konform.",
  keywords:
    "KI E-Commerce, KI Chatbot, Chatbot Kundenservice, KI Onlineshop, KI Produktbeschreibungen, KI Bildgenerator, Shop Automatisierung, KI Retail",
  alternates: { canonical: "https://ki-kanzlei.at/branchen/ki-loesungen-ecommerce" },
};

const faqs = [
  {
    q: "Funktioniert der KI-Chatbot mit Shopify, WooCommerce und Shopware?",
    a: "Ja. Der KI-Chatbot lässt sich nahtlos über APIs oder Tools wie n8n in alle gängigen Shop-Systeme einbinden, von Shopify und WooCommerce bis Shopware und Magento. So sieht der Bot Bestellungen, Sendungsstatus und Produktdaten in Echtzeit und kann konkret antworten statt nur allgemeine Hinweise zu geben.",
  },
  {
    q: "Wie viele Kundenanfragen löst der KI-Chatbot wirklich allein?",
    a: "In der Praxis übernimmt der Chatbot bis zu 80 Prozent der Standardanfragen, etwa zu Bestellstatus, Lieferzeit, Retoure und Produktfragen. Komplexe Fälle werden sauber an Ihr Team übergeben, inklusive Zusammenfassung des bisherigen Chats. So entlasten Sie den Support deutlich, ohne dass die Servicequalität leidet.",
  },
  {
    q: "Antwortet der Chatbot auch auf Englisch und in anderen Sprachen?",
    a: "Ja. Der KI-Chatbot erkennt die Sprache des Kunden automatisch und antwortet in über 30 Sprachen, von Deutsch und Englisch bis Italienisch und Französisch. Internationale Kunden werden in ihrer eigenen Sprache betreut, ohne dass Sie mehrsprachiges Personal aufbauen müssen.",
  },
  {
    q: "Wie gut sind die automatisch erstellten Produktbeschreibungen?",
    a: "Die KI erzeugt SEO-optimierte Produktbeschreibungen in Ihrer Brand-Voice, abgestimmt auf Zielgruppe, Keywords und Tonalität. Sie liefern einmal Ihre Vorgaben und Eckdaten, danach skalieren Sie hunderte SKUs in Minuten. Jeder Text bleibt vor der Veröffentlichung in Ihrer Kontrolle und lässt sich frei nachbearbeiten.",
  },
  {
    q: "Sehen die KI-generierten Produktbilder professionell aus?",
    a: "Ja. Der KI-Bildgenerator erstellt und optimiert Produktbilder, Freisteller, Lifestyle-Szenen und Varianten in konsistenter Bildsprache, ohne teures Fotoshooting für jeden neuen Artikel. So testen Sie Motive schnell und halten Ihren Katalog optisch einheitlich.",
  },
  {
    q: "Wie steht es um den Datenschutz meiner Kundendaten?",
    a: "Datenschutz hat höchste Priorität. Wir arbeiten DSGVO-konform, nutzen europäische Serverstandorte und anonymisieren Daten, bevor sie an KI-Modelle übermittelt werden. Ein Auftragsverarbeitungsvertrag ist Teil jeder Umsetzung, sodass Sie als Händler rechtssicher aufgestellt sind.",
  },
  {
    q: "Wie schnell ist die KI-Lösung in meinem Shop live?",
    a: "Erste Erfolge in der Support-Entlastung sind meist sofort nach dem Go-Live sichtbar. In der Regel ist das Gesamtsystem aus Chatbot, Produkttexten und Automatisierung innerhalb von rund 30 Tagen produktiv. Wir starten mit einem kostenlosen Analysegespräch und bauen modular auf, sodass jeder Baustein einem messbaren Nutzen entspricht.",
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
  name: "KI Lösungen für E-Commerce & Onlineshops",
  serviceType: "KI-Chatbot Kundenservice, KI-Produktbeschreibungen, KI-Bildgenerator, Shop-Automatisierung",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description: "KI Lösungen für E-Commerce und Onlinehandel im DACH-Raum: ein KI-Chatbot für den Kundenservice rund um die Uhr, automatische Produktbeschreibungen, KI-Produktbilder und automatisierte Bestellabwicklung. DSGVO-konform, EU-gehostet.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const problems = [
  "Standardfragen zu Bestellstatus, Lieferzeit und Retoure binden Ihr Support-Team den ganzen Tag",
  "Nachts und am Wochenende bleiben Fragen offen, der Warenkorb wird abgebrochen statt gekauft",
  "Internationale Kunden schreiben auf Englisch, Italienisch oder Französisch, das Team kommt sprachlich nicht hinterher",
  "Produktbeschreibungen für hunderte SKUs zu texten ist mühsam, teuer und nie rechtzeitig fertig",
  "Professionelle Produktbilder kosten bei jedem neuen Artikel Zeit und Geld im Fotostudio",
  "Bestelldaten und Lagerbestände wandern händisch zwischen Shop, ERP und Versand",
];

const solutions = [
  "Ein KI-Chatbot beantwortet bis zu 80% der Anfragen zu Bestellstatus, Retoure und Produkten sofort",
  "Der Chatbot ist rund um die Uhr im Shop aktiv und rettet Warenkörbe, bevor der Kunde abspringt",
  "Er erkennt die Sprache automatisch und antwortet in über 30 Sprachen, in der Sprache des Kunden",
  "KI schreibt SEO-Produktbeschreibungen für hunderte Artikel in Minuten, in Ihrer Brand-Voice",
  "Der KI-Bildgenerator erstellt und optimiert Produktbilder ganz ohne teures Fotoshooting",
  "n8n-Workflows synchronisieren Bestellungen, Lager und Versand vollautomatisch",
];

const useCases = [
  {
    value: "chatbot",
    label: "KI-Chatbot",
    icon: MessageSquare,
    head: "KI-Chatbot für den Kundenservice",
    text: "Der KI-Chatbot beantwortet Fragen zu Bestellstatus, Retoure und Produkten sofort, direkt im Shop und auf Basis Ihrer echten Bestell- und Produktdaten. Er erkennt die Sprache des Kunden automatisch, schlägt passende Upsells und Cross-Sells vor und übergibt komplexe Fälle sauber an Ihr Team. So lösen Sie den Großteil der Anfragen rund um die Uhr, ohne Wartezeit für den Kunden.",
  },
  {
    value: "texte",
    label: "Produkttexte",
    icon: FileText,
    head: "Automatische Produktbeschreibungen",
    text: "KI generiert SEO-optimierte Produktbeschreibungen für hunderte Artikel in Minuten, perfekt abgestimmt auf Ihre Brand-Voice, Zielgruppe und Keywords. Aus Stichworten und Eckdaten entstehen verkaufsstarke Texte, Bullet Points und Meta-Beschreibungen. So skalieren Sie Ihren Content, ohne ein ganzes Redaktionsteam aufzubauen.",
  },
  {
    value: "bilder",
    label: "Produktbilder",
    icon: ImageIcon,
    head: "KI-Bildgenerator für Produktbilder",
    text: "Der KI-Bildgenerator erstellt Freisteller, Lifestyle-Szenen und Varianten in konsistenter Bildsprache, ohne teures Fotoshooting für jeden neuen Artikel. Sie testen Motive schnell, halten Ihren Katalog optisch einheitlich und reagieren flexibel auf Saisons und Kampagnen.",
  },
  {
    value: "uebersetzung",
    label: "Übersetzung",
    icon: Languages,
    head: "Mehrsprachiger Shop und Support",
    text: "KI übersetzt Produkttexte, Kategorien und Support-Antworten in über 30 Sprachen, mit Blick auf Tonalität und Branchenbegriffe. So erschließen Sie neue Märkte im DACH-Raum und darüber hinaus, ohne für jede Sprache ein eigenes Team aufzubauen.",
  },
  {
    value: "fulfillment",
    label: "Bestellabwicklung",
    icon: RefreshCw,
    head: "Automatisierte Bestellabwicklung und Lager",
    text: "n8n-Workflows verbinden Shop, ERP, Lager und Versanddienstleister zu durchgängigen Prozessen. Bestellungen, Bestände und Sendungsinfos fließen automatisch, Inkonsistenzen werden früh erkannt und Überverkäufe gehören der Vergangenheit an, ganz ohne manuelles Übertragen.",
  },
  {
    value: "social",
    label: "Social Media",
    icon: Megaphone,
    head: "Social-Media-Content auf Knopfdruck",
    text: "KI erstellt Captions, Produkt-Posts und Kampagnentexte für Instagram, TikTok und Newsletter, abgestimmt auf Ihr Sortiment und Ihre Marke. So bleibt Ihr Shop sichtbar und Sie bespielen Ihre Kanäle regelmäßig, ohne jeden Beitrag von Hand zu texten.",
  },
];

const features = [
  { icon: Bot, title: "KI-Chatbot für Ihren Shop", text: "Beantwortet Fragen zu Bestellstatus, Retoure und Produkten sofort, schlägt passende Upsells vor und ist rund um die Uhr im Shop aktiv. Komplexe Fälle gehen mit voller Gesprächshistorie an Ihr Team, mehrsprachig und auf Basis Ihrer echten Shop-Daten." },
  { icon: FileText, title: "KI-Produktbeschreibungen", text: "SEO-optimierte Produkttexte für hunderte SKUs in Minuten, in Ihrer Brand-Voice und mit den passenden Keywords." },
  { icon: ImageIcon, title: "KI-Bildgenerator", text: "Erstellt und optimiert Produktbilder, Freisteller und Lifestyle-Szenen ohne teures Fotostudio, in konsistenter Bildsprache." },
  { icon: Languages, title: "Mehr als 30 Sprachen", text: "Chat, Produkttexte und Support automatisch in der Sprache des Kunden, für internationale Märkte ohne extra Team." },
  { icon: Network, title: "n8n & Shop-Integration", text: "Verbindet Shopify, WooCommerce, Shopware und Magento mit ERP, Lager und Versand zu automatischen Workflows." },
  { icon: ShieldCheck, title: "DSGVO & EU-Hosting", text: "Alle Daten werden auf EU-Servern verarbeitet, anonymisiert und mit Auftragsverarbeitungsvertrag abgesichert." },
];

const stats = [
  ["80%", "der Anfragen automatisch gelöst"],
  ["24/7", "Kundenservice im Shop"],
  ["30+", "Sprachen im Chatbot"],
  ["100+", "Produkttexte pro Stunde"],
];

const blick = [
  ["Im Zentrum", "KI-Chatbot für den Kundenservice"],
  ["Sprachen", "30+, automatisch erkannt"],
  ["Content", "Produkttexte und Produktbilder per KI"],
  ["Integration", "Shopify, WooCommerce, Shopware"],
  ["Datenschutz", "DSGVO, EU-Hosting, AVV"],
  ["Go-Live", "produktiv in rund 30 Tagen"],
];

const related = [
  { href: "/leistungen/chatgpt-alternative", icon: Sparkles, title: "ChatGPT Alternative", desc: "Das DSGVO-konforme Sprachmodell hinter Chatbot und Produkttexten, gehostet in der EU und auf Ihren Shop trainierbar." },
  { href: "/leistungen/ki-bildgenerator", icon: ImageIcon, title: "KI-Bildgenerator", desc: "Erstellt und optimiert Produktbilder, Freisteller und Lifestyle-Szenen ohne Fotostudio, in konsistenter Bildsprache." },
  { href: "/leistungen/n8n-automatisierung", icon: Network, title: "n8n Automatisierung", desc: "Verbindet Shop, ERP, Lager und Versand zu automatischen Workflows ohne manuelle Übertragung." },
];

const transcript = [
  { who: "Kunde", text: "Hi, where is my order #4815?" },
  { who: "Bot", text: "Hi! Order #4815 ships today and arrives tomorrow by 12:00." },
  { who: "Kunde", text: "Can I return the blue shirt?" },
  { who: "Bot", text: "Done, your return label is on the way. The matching jacket is 15% off today." },
];

export default function Page() {
  return (
    <>
      <Script id="faq-ecommerce" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-ecommerce" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <style>{`
        @keyframes ecPing { 0% { transform: scale(.9); opacity:.5; } 70%,100% { transform: scale(1.6); opacity:0; } }
        .ec-ping { animation: ecPing 2s ease-out infinite; }
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
                    KI für E-Commerce & Onlineshops
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    KI-Chatbot und Automatisierung für Ihren <span className="text-primary">Online-Shop</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Ein KI-Chatbot beantwortet Fragen zu Bestellstatus, Retoure und Produkten rund um die Uhr und mehrsprachig, während KI Ihre Produktbeschreibungen und Produktbilder automatisch erstellt. Mehr Umsatz bei spürbar weniger Aufwand.
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

                {/* Live KI-Chatbot card */}
                <Card className="relative border-2 shadow-xl shadow-primary/5">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                          <Bot className="w-5 h-5 text-primary" />
                        </div>
                        <span className="absolute inset-0 rounded-full border-2 border-primary/40 ec-ping" aria-hidden />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">KI-Chatbot, Ihr Onlineshop</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> Online, antwortet sofort
                        </div>
                      </div>
                      <span className="ml-auto text-[10px] uppercase tracking-wider text-muted-foreground font-medium">EU-Server</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-3">
                    {transcript.map((t, i) => (
                      <div key={i} className={t.who === "Bot" ? "flex justify-end" : "flex justify-start"}>
                        <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-snug ${t.who === "Bot" ? "bg-primary text-white rounded-br-sm" : "bg-muted text-foreground rounded-bl-sm"}`}>
                          {t.text}
                        </div>
                      </div>
                    ))}
                    <div className="flex items-center justify-between pt-2 border-t border-border text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-primary" /> Sprache automatisch erkannt</span>
                      <span className="flex items-center gap-1.5"><ShoppingBag className="w-4 h-4 text-primary" /> Upsell vorgeschlagen</span>
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

          {/* WAS LEISTET KI IM E-COMMERCE */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">KI im Onlinehandel</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was KI im E-Commerce wirklich leistet</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>KI im E-Commerce heißt nicht, Ihren Shop von der Stange zu automatisieren. Sie nimmt Ihrem Team die zeitfressenden Aufgaben ab: den <strong className="text-foreground">Kundenservice</strong>, das Texten von Produktbeschreibungen, die Bildproduktion und die Prozesse zwischen Shop, Lager und Versand.</p>
                    <p>Im Zentrum steht der <strong className="text-foreground">KI-Chatbot</strong>. Er beantwortet Fragen zu Bestellstatus, Retoure und Produkten sofort, schlägt passende Upsells vor und ist rund um die Uhr mehrsprachig erreichbar, sodass Ihr Team sich auf die kniffligen Fälle konzentrieren kann.</p>
                    <p>Für Händler im DACH-Raum ist dabei eines entscheidend: der <strong className="text-foreground">Datenschutz</strong>. Wir bauen jede Lösung DSGVO-konform, mit Datenhaltung in Österreich und der EU und sauberer Integration in Shopify, WooCommerce und Shopware.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">KI-Chatbot</Badge>
                    <Badge variant="secondary" className="rounded-full">Produktbeschreibungen</Badge>
                    <Badge variant="secondary" className="rounded-full">KI-Produktbilder</Badge>
                    <Badge variant="secondary" className="rounded-full">Shop-Automatisierung</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Auf einen Blick</CardTitle>
                    <CardDescription>Was KI in Ihrem Shop übernimmt.</CardDescription>
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Der Anfragen-Stau im Shop, gelöst</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Wachstum braucht Fokus. Wir nehmen Ihrem Team die repetitive Kundenkommunikation und den Content-Berg ab, damit wieder Zeit für Marke und Strategie bleibt.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-border">
                  <CardHeader>
                    <CardTitle className="text-xl">Der Shop-Alltag heute</CardTitle>
                    <CardDescription>Was Support und Operations täglich bremst.</CardDescription>
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
                    <CardDescription>So sieht Ihr Shop ab Tag 30 aus.</CardDescription>
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
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Anwendungsfälle</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">KI-Lösungen für Ihren Onlineshop</h2>
                <p className="text-lg text-muted-foreground">Weniger Routine, mehr Umsatz. Wählen Sie den Bereich, der Ihren Shop am meisten entlastet.</p>
              </div>
              <Tabs defaultValue="chatbot" className="w-full">
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Gebaut für den Shop-Alltag</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Sicher, anschlussfähig und spürbar umsatzstark, vom ersten Chat bis zum versendeten Paket.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zu KI im E-Commerce</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zu Ihrem Shop</h2>
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
