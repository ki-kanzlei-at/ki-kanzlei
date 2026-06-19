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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Phone, PhoneCall, Clock, ShieldCheck, Server, MapPin, Check, X, CalendarCheck, Filter, MessageSquare, Database, Search, Mic, Hammer, Workflow, AlertTriangle, Wrench } from "lucide-react";
import { serviceLogos } from "@/lib/serviceLogos";

export const metadata: Metadata = {
  title: "Handwerker-Software & KI für Betriebe",
  description:
    "KI fürs Handwerk: KI-Notfalltelefon, Auftragserfassung und Terminplanung automatisieren, auch während Sie auf der Baustelle sind. Ergänzt Ihre Handwerker-Software.",
  keywords:
    "Handwerker Software, KI Handwerk, Handwerkersoftware, KI Handwerksbetrieb, Auftragserfassung, KI Telefonassistent Handwerk, KI Notfalltelefon, Angebote automatisieren, KI Automatisierung Handwerk",
  alternates: { canonical: "https://ki-kanzlei.at/branchen/ki-loesungen-handwerker" },
};

const faqs = [
  {
    q: "Was passiert, wenn die KI eine Frage nicht beantworten kann?",
    a: "In diesem Fall nimmt der KI-Telefonassistent alle notwendigen Kontaktdaten und das Anliegen des Kunden auf und leitet diese Informationen sofort per Mail oder Push-Benachrichtigung an Sie weiter. So können Sie gezielt zurückrufen, wenn Sie von der Baustelle zurück sind.",
  },
  {
    q: "Kann die KI Notfälle von normalen Anfragen unterscheiden?",
    a: "Ja. Die KI ist darauf trainiert, Schlüsselwörter und die Dringlichkeit zu erkennen, etwa bei Rohrbruch oder Stromausfall. Notfälle werden priorisiert behandelt oder direkt an einen Notdienst-Techniker weitergeleitet, während normale Anfragen in die Terminplanung wandern.",
  },
  {
    q: "Wie funktioniert die Terminbuchung?",
    a: "Wir verknüpfen die KI mit Ihrem digitalen Kalender, etwa Google Calendar oder Outlook. Die KI kennt Ihre freien Slots und bucht Besichtigungs- und Servicetermine nur innerhalb der von Ihnen vorgegebenen Zeiten. Sie behalten jederzeit die volle Kontrolle.",
  },
  {
    q: "Ist die Lösung auch für Ein-Personen-Unternehmen (EPU) geeignet?",
    a: "Absolut. Gerade EPU profitieren massiv von der durchgehenden Erreichbarkeit, da sie oft selbst auf der Baustelle stehen und kein eigenes Sekretariat haben. Die KI fungiert als Ihr digitaler Erstkontakt und sorgt dafür, dass kein Auftrag mehr verloren geht.",
  },
  {
    q: "Wie sicher sind meine Kundendaten?",
    a: "Alle Daten werden nach strengster DSGVO verarbeitet. Wir nutzen Serverstandorte innerhalb der EU und legen höchsten Wert auf Verschlüsselung und Datenschutz. Eine Weitergabe an US-Anbieter findet nicht statt, alles wird mit Auftragsverarbeitungsvertrag abgesichert.",
  },
  {
    q: "Klingt der KI-Telefonassistent wirklich menschlich?",
    a: "Ja. Über unsere Voicebot-Plattform fonio.ai versteht der Assistent natürliche Sprache, antwortet in Echtzeit und klingt dabei verblüffend echt. Viele Anrufer merken nicht, dass sie mit einer KI sprechen. Auf Wunsch weisen wir transparent auf den KI-Einsatz hin.",
  },
  {
    q: "Wie viel Zeit spare ich mit KI im Handwerk?",
    a: "In der Praxis entlasten unsere Betriebe ihr Büro um rund 8 bis 12 Stunden pro Woche, weil Anrufannahme, Terminkoordination und Erstantworten automatisch laufen. Diese Zeit fließt zurück in die Baustelle oder in echte Freizeit, statt in Papierkram nach Feierabend.",
  },
  {
    q: "Wie lange dauert die Einrichtung?",
    a: "Meist in rund zwei Wochen. Nach einem kurzen Analysegespräch konfigurieren wir Stimme, Wissen, Notfalllogik und Integrationen zu Kalender und CRM, testen mit echten Anrufszenarien und gehen dann auf Ihrer Nummer live, mit laufender Optimierung danach.",
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
  name: "KI Lösungen für Handwerk und Betriebe",
  serviceType: "KI für Handwerksbetriebe, KI-Telefonassistent, Prozessautomatisierung",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description: "KI für Handwerksbetriebe im DACH-Raum: 24/7 Notfalltelefon, automatische Terminbuchung, Auftrags-Qualifizierung und weniger Büroarbeit. DSGVO-konform, EU-gehostet.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const features = [
  { icon: PhoneCall, title: "24/7 KI-Notfalltelefon", text: "Der KI-Telefonassistent nimmt jeden Anruf entgegen, während Ihre Profis auf der Leiter oder an der Maschine stehen. Auch abends und am Wochenende geht kein lukrativer Notdienst-Auftrag mehr an die Konkurrenz verloren." },
  { icon: CalendarCheck, title: "Automatische Terminbuchung", text: "Prüft Verfügbarkeiten in Echtzeit und bucht Besichtigungs- und Servicetermine direkt in Ihren Kalender, kompatibel mit Google Calendar und Outlook." },
  { icon: Filter, title: "Auftrags-Qualifizierung", text: "Filtert Anfragen nach Gewerk, Dringlichkeit und Ort vor, damit Ihr Team nur an Aufträgen arbeitet, die exakt zu Ihrem Fachgebiet passen." },
  { icon: Database, title: "Wissen per Sprache", text: "Greifen Sie auf der Baustelle per Sprache auf Datenblätter, Einbauanleitungen und Normen zu. Die KI liefert die richtige Info sofort aus Ihren PDFs." },
  { icon: MessageSquare, title: "Multi-Channel Antworten", text: "Reagiert sofort auf Anfragen per WhatsApp oder Mail, erstellt Erst-Antworten und fragt nötige Infos wie Fotos vom Schaden schon vorab ab." },
  { icon: ShieldCheck, title: "DSGVO & EU-Hosting", text: "Alle Kundendaten werden DSGVO-konform auf Serverstandorten in Österreich und der EU verarbeitet, verschlüsselt und mit Auftragsverarbeitungsvertrag abgesichert." },
];

const comparison = [
  ["Anrufe auf der Baustelle", "jeder Anruf wird angenommen", "Anruf verpasst", "Mailbox, oft ohne Rückruf"],
  ["Erreichbarkeit", "24/7, auch im Notfall", "nur zu Bürozeiten", "nur wenn jemand frei ist"],
  ["Auftrags-Qualifizierung", "automatisch nach Gewerk und Ort", "keine", "personalabhängig"],
  ["Terminvergabe", "direkt im Kalender", "manuell, abends", "manuell, fehleranfällig"],
  ["Büroaufwand am Abend", "deutlich reduziert", "hoch", "hoch"],
  ["Datenschutz", "DSGVO, EU-Hosting", "unklar", "unklar"],
];

const useCases = [
  { value: "telefon", label: "Büroassistent", icon: PhoneCall, head: "KI-Büroassistent (24/7 Voice)", text: "Nimmt alle Anrufe entgegen, während Sie auf der Baustelle sind. Erkennt Notfälle wie Rohrbruch oder Stromausfall, prüft Verfügbarkeiten und bucht Besichtigungstermine direkt in Ihren Kalender. So bleibt Ihr Betrieb rund um die Uhr erreichbar, ohne dass jemand am Telefon sitzen muss." },
  { value: "qualifizierung", label: "Qualifizierung", icon: Filter, head: "Digitale Auftrags-Qualifizierung", text: "Filtert Anfragen nach Gewerk, Dringlichkeit und Ort vor. So arbeitet Ihr Team nur an lukrativen Aufträgen, die exakt zu Ihrem Fachgebiet passen, statt Zeit mit unpassenden Anfragen zu verlieren." },
  { value: "wissen", label: "Wissensdatenbank", icon: Database, head: "Zentrale Wissensdatenbank (RAG)", text: "Greifen Sie auf der Baustelle per Sprache auf technische Datenblätter, Einbauanleitungen und Normen zu. Die KI liefert sofort die richtige Info aus Ihren PDFs, ohne langes Suchen in Ordnern." },
  { value: "channel", label: "Multi-Channel", icon: MessageSquare, head: "Multi-Channel Response", text: "Reagieren Sie sofort auf Anfragen per WhatsApp oder Mail. Die KI erstellt automatisierte Erst-Antworten und fragt notwendige Infos wie Fotos vom Schaden bereits vorab ab, damit Sie gut vorbereitet zum Termin kommen." },
  { value: "content", label: "Content-Agent", icon: Search, head: "Content-Agent für Handwerker", text: "Werden Sie der sichtbarste Betrieb in Ihrer Region. Die KI erstellt wöchentlich Beiträge zu Referenzprojekten und Wartungstipps für Ihre Website und Ihre Kanäle, damit neue Anfragen von selbst kommen." },
  { value: "meister", label: "Meister-Assistenz", icon: Mic, head: "Automatisierte Meister-Assistenz", text: "Diktieren Sie Aufmaße und Notizen nach dem Termin per Sprachnachricht. Die KI erstellt daraus Arbeitsanweisungen oder Entwürfe für Materialbestellungen, sodass mühsame Angebotserstellung keine Meister-Stunden mehr bindet." },
];

const problems = [
  { title: "Anrufe auf der Baustelle", text: "Ihre Profis stehen auf der Leiter, verpasste Anrufe bedeuten verlorene Aufträge." },
  { title: "Notfälle nach Feierabend", text: "Ein Rohrbruch wartet nicht auf Geschäftszeiten, ohne Erreichbarkeit wandern Notdienste ab." },
  { title: "Abends noch Büroarbeit", text: "Nach acht Stunden körperlicher Arbeit noch Termine koordinieren führt zu Stress und Fehlern." },
  { title: "Unqualifizierte Anfragen", text: "Viel Zeit geht für Anrufe drauf, die gar nicht zu Ihrem Fachgebiet passen." },
  { title: "Mühsame Angebotserstellung", text: "Das Sammeln von Infos für Standard-Angebote bindet wertvolle Meister-Ressourcen." },
];

const solutions = [
  { title: "Kein Anruf geht verloren", text: "Der KI-Telefonassistent nimmt jeden Anruf an und protokolliert das Anliegen sauber für Sie." },
  { title: "Notfälle werden erkannt", text: "Dringende Fälle werden priorisiert und direkt an den Bereitschaftsdienst weitergeleitet." },
  { title: "Büro läuft automatisch", text: "Terminkoordination und Erst-Antworten laufen automatisch, das entlastet das Büro um 8 bis 12 Stunden pro Woche." },
  { title: "Nur passende Aufträge", text: "Die KI filtert nach Gewerk, Dringlichkeit und Ort vor, Ihr Team arbeitet nur an passenden Aufträgen." },
  { title: "Angebote vorbereitet", text: "Diktierte Aufmaße und vorab erfasste Infos werden zu Entwürfen, das spart Meister-Stunden." },
];

const transcript = [
  { who: "Anrufer", text: "Hallo, bei mir ist ein Rohr geplatzt, das Wasser steht schon im Keller." },
  { who: "Anna", text: "Das klingt dringend. Ich markiere den Fall als Notfall und verständige den Bereitschaftsdienst." },
  { who: "Anrufer", text: "Super, vielen Dank." },
  { who: "Anna", text: "Ein Techniker meldet sich in wenigen Minuten bei Ihnen, die Details sind notiert." },
];

const waveHeights = [40, 70, 30, 90, 55, 75, 35, 85, 50, 65, 25, 80, 45, 70, 35, 60];

export default function Page() {
  return (
    <>
      <Script id="faq-handwerk" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-handwerk" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <style>{`
        @keyframes vbWave { 0%,100% { transform: scaleY(.3); } 50% { transform: scaleY(1); } }
        .vb-bar { transform-origin: bottom; animation: vbWave 1.1s ease-in-out infinite; }
        @keyframes vbPing { 0% { transform: scale(.9); opacity:.5; } 70%,100% { transform: scale(1.6); opacity:0; } }
        .vb-ping { animation: vbPing 2s ease-out infinite; }
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
                    Handwerk und Betriebe
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    KI Lösungen für <span className="text-primary">Handwerker</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Vom 24/7 KI-Notfalltelefon bis zur automatisierten Terminbuchung: Wir entlasten Ihr Büro, damit sich Ihre Profis auf die Baustelle konzentrieren können. Weniger Büro, mehr Handwerk.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Analysegespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="tel:+43720080697">KI-Telefon live testen</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-primary" /> EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Creative live-call card */}
                <Card className="relative border-2 shadow-xl shadow-primary/5">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                          <Phone className="w-5 h-5 text-primary" />
                        </div>
                        <span className="absolute inset-0 rounded-full border-2 border-primary/40 vb-ping" aria-hidden />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">Anna, KI-Notfalltelefon</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> Live im Gespräch, 00:24
                        </div>
                      </div>
                      <span className="ml-auto text-[10px] uppercase tracking-wider text-muted-foreground font-medium">EU-Server</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-3">
                    {transcript.map((t, i) => (
                      <div key={i} className={t.who === "Anna" ? "flex justify-end" : "flex justify-start"}>
                        <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-snug ${t.who === "Anna" ? "bg-primary text-white rounded-br-sm" : "bg-muted text-foreground rounded-bl-sm"}`}>
                          {t.text}
                        </div>
                      </div>
                    ))}
                    <div className="flex items-end justify-center gap-1 h-10 pt-2">
                      {waveHeights.map((h, i) => (
                        <span
                          key={i}
                          className="vb-bar w-1 rounded-full bg-primary/70"
                          style={{ height: `${h}%`, animationDelay: `${(i % 8) * 0.1}s` }}
                        />
                      ))}
                    </div>
                    <div className="text-[11px] text-center text-muted-foreground pt-1">
                      Notfall erkannt, Bereitschaftsdienst verständigt, DSGVO-konform
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* STATS BAND */}
          <section className="pb-4">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-border rounded-2xl overflow-hidden bg-card">
                {[
                  ["8-12h", "Büro-Entlastung pro Woche"],
                  ["24/7", "Notfall-Erreichbarkeit"],
                  ["100%", "DSGVO-konform"],
                ].map(([v, l], i) => (
                  <div key={i} className="p-8 text-center border-b md:border-b-0 md:border-r last:border-0 border-border">
                    <div className="text-4xl md:text-5xl font-bold text-primary">{v}</div>
                    <div className="text-sm text-muted-foreground mt-2">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WAS BRINGT KI IM HANDWERK */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Kurz erklärt</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was KI im Handwerk wirklich leistet</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Das <strong className="text-foreground">Handwerk hat goldenen Boden</strong>, doch die Bürokratie hält viele Betriebe am Boden. Während Ihre Profis auf der Baustelle gebraucht werden, klingelt das Telefon, häufen sich Anfragen und wartet abends noch die Verwaltung.</p>
                    <p>Genau hier setzt <strong className="text-foreground">KI für Handwerksbetriebe</strong> an. Ein KI-Telefonassistent nimmt Anrufe rund um die Uhr entgegen, erkennt Notfälle, bucht Termine und qualifiziert Anfragen. Multi-Channel-Antworten und eine sprachgesteuerte Wissensdatenbank erledigen den Rest, sodass weniger Büro und mehr echtes Handwerk übrig bleibt.</p>
                    <p>Für Betriebe im DACH-Raum ist dabei eines entscheidend: <strong className="text-foreground">Datenschutz</strong>. Wir bauen jede Lösung DSGVO-konform, mit Datenhaltung in Österreich und der EU und transparenter Kennzeichnung des KI-Einsatzes.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full"><Clock className="w-3.5 h-3.5 mr-1" /> Rund um die Uhr</Badge>
                    <Badge variant="secondary" className="rounded-full"><Wrench className="w-3.5 h-3.5 mr-1" /> Für jedes Gewerk</Badge>
                    <Badge variant="secondary" className="rounded-full"><ShieldCheck className="w-3.5 h-3.5 mr-1" /> DSGVO-konform</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Handwerk mit KI auf einen Blick</CardTitle>
                    <CardDescription>Was Ihren Betrieb spürbar entlastet.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {[
                      ["Erreichbarkeit", "24/7, auch nach Feierabend"],
                      ["Entlastung", "8 bis 12 Stunden Büro pro Woche"],
                      ["Aufgaben", "Anrufe, Termine, Angebote, Qualifizierung"],
                      ["Notfälle", "erkannt und priorisiert"],
                      ["Integration", "Kalender, WhatsApp, CRM"],
                      ["Datenschutz", "DSGVO, EU-Hosting, AVV"],
                    ].map(([label, value]) => (
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
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Vorher und nachher</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Wo Handwerksbetriebe Zeit und Geld verlieren</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Die typischen Engpässe im Betriebsalltag, und wie KI sie auflöst.</p>
              </div>
              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2.5">
                      <span className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center"><AlertTriangle className="w-5 h-5 text-muted-foreground" /></span>
                      Die Herausforderung
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {problems.map((p) => (
                      <div key={p.title} className="flex items-start gap-3">
                        <X className="w-5 h-5 text-muted-foreground/60 mt-0.5 shrink-0" />
                        <div>
                          <div className="font-semibold text-foreground">{p.title}</div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                <Card className="border-2 border-primary/30 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2.5">
                      <span className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center"><Check className="w-5 h-5 text-primary" /></span>
                      Mit KI gelöst
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {solutions.map((s) => (
                      <div key={s.title} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <div>
                          <div className="font-semibold text-foreground">{s.title}</div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* ANWENDUNGSFÄLLE TABS */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Anwendungsfälle</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Moderne Lösungen für das Handwerk</h2>
                <p className="text-lg text-muted-foreground">Wählen Sie einen Bereich, wir zeigen das passende Szenario für Ihren Betrieb.</p>
              </div>
              <Tabs defaultValue="telefon" className="w-full">
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

          {/* FUNKTIONEN BENTO */}
          <section className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-14">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Funktionen</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Was Ihre KI im Betrieb übernimmt</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Vom ersten Klingeln bis zum gebuchten Termin, alles automatisch und nachvollziehbar protokolliert.</p>
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

          {/* VERGLEICH */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Vergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Mit KI, ohne KI oder mit Anrufbeantworter?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Drei Wege, mit Anfragen umzugehen. Nur einer ist immer erreichbar und filtert gleich vor.</p>
              </div>
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[28%] font-bold text-foreground">Situation</TableHead>
                      <TableHead className="text-primary font-bold">Mit KI Kanzlei</TableHead>
                      <TableHead className="text-muted-foreground">Ohne KI</TableHead>
                      <TableHead className="text-muted-foreground">Anrufbeantworter</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparison.map((row, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{row[0]}</TableCell>
                        <TableCell className="text-sm text-primary font-medium">
                          <span className="inline-flex items-start gap-1.5"><Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />{row[1]}</span>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          <span className="inline-flex items-start gap-1.5"><X className="w-4 h-4 text-muted-foreground/50 mt-0.5 shrink-0" />{row[2]}</span>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          <span className="inline-flex items-start gap-1.5"><X className="w-4 h-4 text-muted-foreground/50 mt-0.5 shrink-0" />{row[3]}</span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </section>

          {/* FAQ */}
          <section className="section-spacing">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zu KI im Handwerk</h2>
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

          {/* VERWANDTE LEISTUNGEN */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Mehr Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zum Handwerksbetrieb</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {[
                  { href: "/leistungen/voicebot", icon: PhoneCall, title: "Voicebot & KI-Telefonassistent", desc: "Das 24/7 Notfalltelefon, das jeden Anruf annimmt, Termine bucht und Notfälle erkennt." },
                  { href: "/leistungen/n8n-automatisierung", icon: Workflow, title: "n8n Automatisierung", desc: "Verbindet Anfragen, Kalender, WhatsApp und CRM zu durchgängigen Abläufen ohne manuelle Übertragung." },
                  { href: "/leistungen/ki-wissensdatenbank", icon: Database, title: "KI Wissensdatenbank", desc: "Datenblätter, Anleitungen und Normen per Sprache abrufbar, direkt von der Baustelle." },
                ].map((s, i) => {
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
