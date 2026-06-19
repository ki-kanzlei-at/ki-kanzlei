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
import { UtensilsCrossed, ShieldCheck, Server, MapPin, Phone, PhoneCall, CalendarCheck, Activity, Check, X, MessageSquare, Star, Languages, BellRing, Megaphone, Plug, Mic, TrendingUp, Brain, Network } from "lucide-react";
import { serviceLogos } from "@/lib/serviceLogos";

export const metadata: Metadata = {
  title: "KI für Restaurants: Reservierung & Gäste-Service",
  description:
    "KI für Restaurants und Gastronomie: Reservierungen per Telefon und Web-Chat annehmen, Gästeanfragen beantworten und Bewertungen managen. DSGVO-konform und rund um die Uhr.",
  keywords:
    "KI Restaurant, KI Gastronomie, KI Reservierung, Restaurant Chatbot, Bewertungsmanagement KI, Gastro Automatisierung, No-Show Reduktion, Tischreservierung KI",
  alternates: { canonical: "https://ki-kanzlei.at/branchen/ki-loesungen-gastronomie" },
};

const faqs = [
  {
    q: "Wie nimmt die KI Reservierungen entgegen, am Telefon und online?",
    a: "Beides. Die KI nimmt Anrufe rund um die Uhr entgegen, fragt Datum, Uhrzeit und Personenzahl ab, prüft die freie Tischkapazität und bestätigt sofort. Parallel beantwortet ein Web-Chatbot auf Ihrer Website und Google-Profil dieselben Anfragen schriftlich. Beide Kanäle buchen direkt in Ihr Reservierungssystem.",
  },
  {
    q: "Lässt sich die KI an mein bestehendes Reservierungssystem anbinden?",
    a: "In aller Regel ja. Wir binden die KI über moderne Schnittstellen an gängige Systeme wie OpenTable, resmio, aleno oder Ihren Kalender an, sodass Tische in Echtzeit abgeglichen werden und keine Doppelbuchung entsteht. Die technische Machbarkeit prüfen wir kostenlos in einem Erstgespräch.",
  },
  {
    q: "Wie reduziert die KI No-Shows?",
    a: "Die KI verschickt automatisch Erinnerungen per SMS oder E-Mail vor dem Termin und bietet einen einfachen Weg zum Umbuchen oder Stornieren an. Gäste, die nicht mehr kommen, sagen so frühzeitig ab und der Tisch wird wieder freigegeben. Das senkt No-Shows in der Praxis spürbar.",
  },
  {
    q: "Kann die KI auf Google-Rezensionen reagieren?",
    a: "Ja. Das KI-Bewertungsmanagement erkennt neue Rezensionen, erstellt passende, höfliche Antwortentwürfe im Ton Ihres Hauses und legt sie zur Freigabe vor oder antwortet auf Wunsch automatisch. So bleibt kein Gast unbeantwortet und Ihr Online-Ruf wird aktiv gepflegt.",
  },
  {
    q: "Spricht die KI mit Gästen auch in anderen Sprachen?",
    a: "Ja. Die KI kommuniziert mehrsprachig, etwa Deutsch, Englisch, Italienisch oder Französisch, und erkennt die Sprache des Gastes automatisch. So fühlen sich auch Touristen und internationale Gäste sofort gut betreut, ohne dass Ihr Team jede Sprache beherrschen muss.",
  },
  {
    q: "Klingt der KI-Telefonassistent wirklich menschlich?",
    a: "Ja. Über unsere Voicebot-Plattform fonio.ai spricht der Assistent natürlich und freundlich, mit österreichischer Sprachfärbung sowie passenden Pausen und Betonungen. Viele Anrufer merken nicht, dass sie mit einer KI sprechen. Auf Wunsch weisen wir transparent auf den KI-Einsatz hin.",
  },
  {
    q: "Wie lange dauert die Einrichtung?",
    a: "In der Regel rund 2 Wochen. Nach einem kurzen Erstgespräch konfigurieren wir Stimme, Speisekarten-Wissen, Tischlogik und die Anbindung an Ihr Reservierungssystem, testen mit echten Reservierungsszenarien und gehen dann live, mit laufender Optimierung danach.",
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
  name: "KI Lösungen für Gastronomie und Restaurants",
  serviceType: "KI für Restaurants, KI-Reservierungsannahme, Gäste-Chatbot, Bewertungsmanagement",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description: "KI Lösungen für Restaurants und Gastronomie im DACH-Raum: 24/7 KI-Reservierungsannahme per Telefon und Web-Chat, Gäste-Chatbot, automatisches Bewertungsmanagement und No-Show-Reduktion, DSGVO-konform.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const problems = [
  "Das Telefon klingelt während des Service, niemand hat Zeit für Reservierungen",
  "Anrufe abends und am Wochenende bleiben unbeantwortet, Gäste reservieren woanders",
  "No-Shows lassen Tische leer, obwohl die Anfrage da war",
  "Google-Rezensionen bleiben unbeantwortet und der Online-Ruf leidet",
  "Internationale Gäste fragen in Sprachen an, die am Empfang niemand spricht",
  "Social-Media-Pflege und Speisekarten-Anfragen kosten Zeit, die im Betrieb fehlt",
];

const solutions = [
  "Die KI nimmt jede Reservierung per Telefon und Web-Chat an, auch mitten im Service",
  "Gäste reservieren rund um die Uhr, auch nachts und am Ruhetag",
  "Automatische Erinnerungen senken No-Shows und geben Tische rechtzeitig frei",
  "Das KI-Bewertungsmanagement beantwortet Google-Rezensionen freundlich und im Ton Ihres Hauses",
  "Mehrsprachige Gästekommunikation, automatisch in der Sprache des Gastes",
  "KI erstellt Social-Media-Content und beantwortet Fragen zur Speisekarte",
];

const useCases = [
  {
    value: "reservierung",
    label: "Reservierung",
    icon: CalendarCheck,
    head: "KI-Reservierungsannahme, Telefon und Web",
    text: "Nimmt Reservierungen rund um die Uhr per Telefon und Web-Chat entgegen, fragt Datum, Uhrzeit und Personenzahl ab, prüft die freie Tischkapazität und bestätigt sofort. Die Buchung landet direkt in Ihrem Reservierungssystem, ganz ohne Doppelbuchung.",
  },
  {
    value: "chatbot",
    label: "Gäste-Chatbot",
    icon: MessageSquare,
    head: "Bestell- und Gäste-Chatbot",
    text: "Beantwortet auf Website, WhatsApp und Google-Profil Fragen zu Öffnungszeiten, Speisekarte, Allergenen und Parkmöglichkeiten und nimmt Bestellungen für Abholung und Lieferung entgegen, sodass Ihr Team sich auf den Service konzentrieren kann.",
  },
  {
    value: "bewertungen",
    label: "Bewertungen",
    icon: Star,
    head: "Automatisches Bewertungsmanagement",
    text: "Erkennt neue Google-Rezensionen, erstellt höfliche Antwortentwürfe im Ton Ihres Hauses und legt sie zur Freigabe vor oder antwortet automatisch. So bleibt keine Bewertung unbeantwortet und Ihr Online-Ruf wird aktiv gepflegt.",
  },
  {
    value: "sprachen",
    label: "Mehrsprachig",
    icon: Languages,
    head: "Mehrsprachige Gästekommunikation",
    text: "Erkennt die Sprache des Gastes automatisch und antwortet in Deutsch, Englisch, Italienisch oder Französisch. So fühlen sich Touristen und internationale Gäste sofort gut betreut, ohne dass Ihr Team jede Sprache beherrschen muss.",
  },
  {
    value: "noshow",
    label: "No-Show",
    icon: BellRing,
    head: "No-Show-Reduktion durch Erinnerungen",
    text: "Verschickt automatisch Erinnerungen vor dem Termin und bietet einen einfachen Weg zum Umbuchen oder Stornieren. Gäste sagen rechtzeitig ab, der Tisch wird freigegeben und leere Plätze trotz Reservierung gehören der Vergangenheit an.",
  },
  {
    value: "marketing",
    label: "Social Media",
    icon: Megaphone,
    head: "KI-Social-Media-Content",
    text: "Werden Sie sichtbarer in Ihrer Region. Die KI erstellt regelmäßig Beiträge zu Tagesgerichten, Aktionen und Events für Instagram und Facebook, abgestimmt auf Ihr Haus und Ihre Speisekarte.",
  },
];

const features = [
  { icon: CalendarCheck, title: "Reservierung per Telefon und Web", text: "Die KI nimmt jede Reservierung an, am Telefon und im Web-Chat, prüft die Tischkapazität in Echtzeit und bestätigt sofort. Kein Anruf während des Service geht mehr verloren." },
  { icon: Plug, title: "Direkt am Reservierungssystem", text: "Tische und Buchungen fließen über moderne Schnittstellen direkt in Systeme wie OpenTable, resmio oder aleno, ganz ohne doppelte Erfassung und ohne Doppelbuchung." },
  { icon: Star, title: "Bewertungsmanagement", text: "Die KI erkennt neue Google-Rezensionen und erstellt passende Antwortentwürfe im Ton Ihres Hauses, sodass kein Gast unbeantwortet bleibt." },
  { icon: Mic, title: "Menschlich klingende Stimme", text: "Über die Plattform fonio.ai spricht der Assistent natürlich und freundlich, mit österreichischer Sprachfärbung. Viele Anrufer merken den Unterschied nicht." },
  { icon: ShieldCheck, title: "DSGVO und EU-Hosting", text: "Alle Gästedaten werden verschlüsselt auf Servern in Europa verarbeitet, mit Auftragsverarbeitungsvertrag und sauberer Einwilligung." },
  { icon: TrendingUp, title: "Weniger No-Shows, mehr Auslastung", text: "Automatische Erinnerungen und einfache Stornos senken No-Shows spürbar und sorgen für eine gleichmäßigere Auslastung Ihrer Tische." },
];

const stats = [
  ["24/7", "Reservierungsannahme ohne Wartezeit"],
  ["0", "verpasste Reservierungsanrufe"],
  ["bis 30%", "weniger No-Shows durch Erinnerungen"],
  ["2 Wo.", "vom Erstgespräch bis Go-Live"],
];

const blick = [
  ["Einsatz", "Reservierung, Chat, Bewertungen"],
  ["Kanäle", "Telefon, Web-Chat, WhatsApp"],
  ["Erreichbarkeit", "24/7, auch am Ruhetag"],
  ["Sprachen", "mehrsprachig, automatisch"],
  ["Anbindung", "bestehendes Reservierungssystem"],
  ["Datenschutz", "DSGVO, EU-Hosting, AVV"],
];

const related = [
  { href: "/leistungen/voicebot", icon: PhoneCall, title: "Voicebot & KI-Telefonassistent", desc: "Der KI-Telefonassistent, der Reservierungen annimmt, Tische bucht und Gästefragen beantwortet, rund um die Uhr." },
  { href: "/leistungen/chatgpt-alternative", icon: Brain, title: "Gäste-Chatbot & KI-Assistent", desc: "Ein DSGVO-konformer Chatbot für Website und WhatsApp, der Anfragen zu Speisekarte, Allergenen und Öffnungszeiten beantwortet." },
  { href: "/leistungen/n8n-automatisierung", icon: Network, title: "n8n Automatisierung", desc: "Verbindet Reservierungen, No-Show-Erinnerungen und Bewertungen automatisch mit Ihrem Reservierungssystem." },
];

const transcript = [
  { who: "Gast", text: "Guten Abend, hätten Sie am Freitag um 19 Uhr einen Tisch für 4 Personen?" },
  { who: "KI-Service", text: "Sehr gern. Freitag, 19:00 Uhr, Tisch für 4, das passt bei uns." },
  { who: "Gast", text: "Perfekt, bitte reservieren." },
  { who: "KI-Service", text: "Erledigt. Sie erhalten die Bestätigung gleich per SMS." },
];

export default function Page() {
  return (
    <>
      <Script id="faq-gastronomie" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-gastronomie" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <style>{`
        @keyframes gastroPing { 0% { transform: scale(.9); opacity:.5; } 70%,100% { transform: scale(1.6); opacity:0; } }
        .gastro-ping { animation: gastroPing 2s ease-out infinite; }
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
                    KI für Restaurants & Gastronomie
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    KI Lösungen für <span className="text-primary">Restaurants</span> und Gastronomie
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Von der KI-Reservierungsannahme per Telefon und Web-Chat bis zum Gäste-Chatbot und automatischen Bewertungsmanagement: Wir entlasten Ihr Team, halten Sie rund um die Uhr erreichbar und sorgen für volle Tische.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Analysegespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="tel:+43720080697">KI-Reservierung live anrufen</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-primary" /> EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Live reservation card */}
                <Card className="relative border-2 shadow-xl shadow-primary/5">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                          <Phone className="w-5 h-5 text-primary" />
                        </div>
                        <span className="absolute inset-0 rounded-full border-2 border-primary/40 gastro-ping" aria-hidden />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">KI-Service Restaurant</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> Live im Gespräch, 00:21
                        </div>
                      </div>
                      <span className="ml-auto text-[10px] uppercase tracking-wider text-muted-foreground font-medium">EU-Server</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-3">
                    {transcript.map((t, i) => (
                      <div key={i} className={t.who === "KI-Service" ? "flex justify-end" : "flex justify-start"}>
                        <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-snug ${t.who === "KI-Service" ? "bg-primary text-white rounded-br-sm" : "bg-muted text-foreground rounded-bl-sm"}`}>
                          {t.text}
                        </div>
                      </div>
                    ))}
                    <div className="flex items-center justify-between pt-2 border-t border-border text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5"><CalendarCheck className="w-4 h-4 text-primary" /> Tisch für 4 gebucht</span>
                      <span className="flex items-center gap-1.5"><Activity className="w-4 h-4 text-primary" /> Bestätigung verschickt</span>
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

          {/* WAS LEISTET KI IN DER GASTRONOMIE */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">KI in der Gastronomie</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was KI im Restaurant wirklich leistet</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Künstliche Intelligenz in der Gastronomie bedeutet nicht, das Gastgeben zu automatisieren. Sie entlastet alles rund um den Service: die <strong className="text-foreground">Reservierungsannahme am Telefon</strong>, die Gästeanfragen im Web-Chat, das Bewertungsmanagement und die Social-Media-Pflege.</p>
                    <p>Im Zentrum steht die <strong className="text-foreground">KI-Reservierungsannahme</strong>. Sie nimmt Anrufe und Web-Anfragen rund um die Uhr entgegen, prüft die Tischkapazität, bucht direkt in Ihr Reservierungssystem und bestätigt sofort, sodass Ihr Team mitten im Service nicht ans Telefon muss.</p>
                    <p>Für Betriebe im DACH-Raum ist dabei eines entscheidend: der <strong className="text-foreground">Datenschutz</strong>. Wir bauen jede Lösung DSGVO-konform, mit Datenhaltung in Europa und sauberer Einwilligung der Gäste.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">KI-Reservierung</Badge>
                    <Badge variant="secondary" className="rounded-full">Gäste-Chatbot</Badge>
                    <Badge variant="secondary" className="rounded-full">Bewertungsmanagement</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Auf einen Blick</CardTitle>
                    <CardDescription>Was KI in Ihrem Restaurant übernimmt.</CardDescription>
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Verpasste Reservierungen und leere Tische, gelöst</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Gastfreundschaft braucht Fokus. Wir nehmen Ihrem Team die Reservierungsannahme und die Gästekommunikation ab, damit wieder Zeit für den Service bleibt.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-border">
                  <CardHeader>
                    <CardTitle className="text-xl">Der Gastro-Alltag heute</CardTitle>
                    <CardDescription>Was Service und Team täglich bremst.</CardDescription>
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
                    <CardDescription>So sieht der Betrieb ab Woche 2 aus.</CardDescription>
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
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Lösungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Moderne KI-Lösungen für Ihr Restaurant</h2>
                <p className="text-lg text-muted-foreground">Weniger Telefonstress, mehr Zeit für Ihre Gäste. Wählen Sie den Bereich, der Sie am meisten entlastet.</p>
              </div>
              <Tabs defaultValue="reservierung" className="w-full">
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Gebaut für den Gastro-Alltag</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Sicher, anschlussfähig und spürbar entlastend, vom ersten Klingeln bis zum bestätigten Tisch.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen aus der Gastronomie</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zum Restaurant</h2>
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
