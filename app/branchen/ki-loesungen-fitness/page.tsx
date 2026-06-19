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
import { Dumbbell, Phone, PhoneCall, CalendarCheck, MessageSquare, Repeat, Database, Heart, Megaphone, TrendingUp, Users, ShieldCheck, Server, MapPin, Check, X, AlertTriangle, Sparkles, Network, Brain } from "lucide-react";
import { serviceLogos } from "@/lib/serviceLogos";

export const metadata: Metadata = {
  title: "KI fürs Fitnessstudio: Mitgliederverwaltung & Telefon",
  description:
    "KI für Fitnessstudios: KI-Telefonassistent, Terminbuchung und Mitgliederbetreuung automatisieren. Mehr Zeit fürs Studio, weniger Verwaltung.",
  keywords:
    "Fitnessstudio Software, KI Fitnessstudio, Mitgliederverwaltung Software, KI Telefonassistent, Fitness Automatisierung, Fitness Chatbot, Probetraining Automatisierung, KI Mitgliederbetreuung",
  alternates: { canonical: "https://ki-kanzlei.at/branchen/ki-loesungen-fitness" },
};

const faqs = [
  {
    q: "Wie funktioniert die Terminbuchung für Probetrainings?",
    a: "Wir verknüpfen die KI mit Ihrer bestehenden Studio-Software (zum Beispiel Magicline) oder einem digitalen Kalender. Die KI prüft freie Termine in Echtzeit und bucht das Probetraining sofort ein, inklusive Bestätigung per Mail an den Interessenten.",
  },
  {
    q: "Mit welchen Studio-Systemen lässt sich die KI verbinden?",
    a: "Die KI lässt sich mit gängiger Studio-Software wie Magicline, mit Google Calendar und Outlook sowie mit Ihrem CRM und WhatsApp koppeln. Über n8n verbinden wir Anfragen, Buchungen und Follow-Ups automatisch mit den Tools, die Sie ohnehin nutzen.",
  },
  {
    q: "Können Mitglieder auch Verträge über die KI ändern oder pausieren?",
    a: "Ja. Wir richten automatisierte Prozesse ein, bei denen die KI Anfragen zu Vertragsänderungen, Pausen oder Tarifwechseln strukturiert aufnimmt, die Identität prüft und die notwendigen Schritte in Ihrem CRM anstößt. Das entlastet Ihre Verwaltung und reduziert Fehler.",
  },
  {
    q: "Hilft KI wirklich dabei, Kündigungen zu verhindern?",
    a: "Ja. Durch intelligentes Tracking erkennen wir Mitglieder, die länger nicht im Studio waren, und sprechen sie automatisch an, laden sie zu passenden Kursen oder Events ein und motivieren sie, bevor sie kündigen. So senken Sie die Fluktuation spürbar.",
  },
  {
    q: "Klingt der KI-Telefonassistent menschlich?",
    a: "Ja. Über unsere Voicebot-Plattform fonio.ai und moderne Neural-Text-to-Speech-Technologie klingt der Assistent mit natürlicher Sprachmelodie und österreichischer Färbung verblüffend echt. Viele Anrufer merken nicht, dass sie mit einer KI sprechen. Auf Wunsch weisen wir transparent auf den KI-Einsatz hin.",
  },
  {
    q: "Was passiert, wenn die KI eine komplexe Frage nicht beantworten kann?",
    a: "In diesem Fall leitet die KI das Gespräch oder die Anfrage sofort an einen menschlichen Mitarbeiter weiter und übergibt eine Zusammenfassung des bisherigen Anliegens. So fühlt sich niemand abgewimmelt und kein Interessent geht verloren.",
  },
  {
    q: "Ist die Lösung DSGVO-konform für meine Mitgliederdaten?",
    a: "Sicherheit hat höchste Priorität. Alle Daten werden nach strengen EU-Richtlinien auf europäischen Servern verarbeitet, mit Auftragsverarbeitungsvertrag abgesichert und rechtssicher dokumentiert. Eine Weitergabe an US-Anbieter findet nicht statt.",
  },
  {
    q: "Wie lange dauert die Einrichtung?",
    a: "In der Regel rund 2 Wochen. Nach einem kurzen Erstgespräch konfigurieren wir Stimme, Wissen, Buchungslogik und Integrationen, testen mit echten Anrufszenarien und gehen dann live, mit laufender Optimierung danach.",
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
  name: "KI Lösungen für Fitnessstudios",
  serviceType: "KI für Fitnessstudios, KI-Telefonassistent, Lead-Automatisierung",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description: "KI Lösungen für Fitnessstudios und Sportzentren im DACH-Raum: 24/7 KI-Telefonassistent, automatische Probetraining-Buchung, Lead-Management und Mitglieder-Bindung. DSGVO-konform, EU-gehostet.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const useCases = [
  { value: "voice", label: "KI-Telefon", icon: PhoneCall, head: "KI-Studioassistent (24/7 Voice)", text: "Nimmt alle Anrufe entgegen, qualifiziert Interessenten vor und bucht Probetrainings direkt in Ihren Kursplaner oder Trainer-Kalender, rund um die Uhr und ohne Warteschleife." },
  { value: "lead", label: "Lead Response", icon: MessageSquare, head: "Instant Lead Response", text: "Reagiert in Sekunden auf Website-Anfragen und WhatsApp-Nachrichten, beantwortet Fragen zu Preisen und Leistungen und führt den Interessenten direkt zur Terminbuchung." },
  { value: "followup", label: "Follow-Up", icon: Repeat, head: "Automatisches Follow-Up", text: "Sorgt dafür, dass kein Lead verloren geht. Die KI erinnert Interessenten an ihr Probetraining und fragt nach dem Besuch automatisch nach Feedback und Vertragsabschluss." },
  { value: "wissen", label: "Wissensbasis", icon: Database, head: "Mitglieder-Wissensbasis (RAG)", text: "Gibt Mitgliedern und Trainern sofort Zugriff auf Trainingspläne, Studio-Regeln und Infos zu Zusatzleistungen, per Chat oder Sprachabfrage." },
  { value: "bindung", label: "Mitglieder-Bindung", icon: Heart, head: "KI-Mitglieder-Bindung", text: "Identifiziert inaktive Mitglieder und sendet personalisierte Re-Engagement-Kampagnen zu neuen Kursen und Angeboten, um die Kündigungsrate spürbar zu senken." },
  { value: "marketing", label: "Marketing", icon: Megaphone, head: "Social-Media-Marketing Turbo", text: "Erstellt wöchentlich Beiträge zu Transformationen, Erfolgsgeschichten und Fitness-Tipps für Ihre Kanäle, um laufend neue Leads zu generieren." },
];

const features = [
  { icon: PhoneCall, title: "24/7 Anrufannahme", text: "Der KI-Telefonassistent nimmt jeden Anruf an, auch abends, am Wochenende und in Stoßzeiten. Kein Besetzt-Zeichen kostet Sie mehr ein Neu-Mitglied." },
  { icon: CalendarCheck, title: "Automatische Probetraining-Buchung", text: "Prüft freie Termine in Echtzeit und bucht direkt in Magicline, Google Calendar oder Ihren Trainer-Kalender, inklusive Bestätigung per Mail." },
  { icon: TrendingUp, title: "30% höhere Lead-Conversion", text: "Durch Reaktion in Sekunden statt Stunden verlieren Sie keinen Interessenten mehr an das Studio um die Ecke." },
  { icon: Users, title: "Trainer zurück auf die Fläche", text: "Routinefragen zu Öffnungszeiten, Tarifen und Verträgen übernimmt die KI, Ihre Trainer betreuen wieder Mitglieder statt das Telefon." },
  { icon: Heart, title: "Weniger Kündigungen", text: "Die KI erkennt passive Mitglieder und holt sie mit Re-Engagement-Kampagnen automatisch zurück, bevor sie kündigen." },
  { icon: ShieldCheck, title: "DSGVO & EU-Hosting", text: "Alle Mitgliederdaten werden auf EU-Servern verarbeitet, mit Auftragsverarbeitungsvertrag abgesichert und auf Wunsch als KI gekennzeichnet." },
];

const problemsList = [
  "Interessenten rufen an, wenn der Empfang nicht besetzt ist, jedes Besetzt-Zeichen kostet ein Neu-Mitglied.",
  "Website-Anfragen bleiben Stunden liegen, der Interessent ist längst beim Studio um die Ecke.",
  "Manuelles Nachtelefonieren von Leads kostet Stunden und wird im vollen Studio vergessen.",
  "Trainer hängen am Telefon und beantworten Vertragsfragen, statt Mitglieder zu betreuen.",
  "Kündigungen, Pausen und Tarifwechsel binden die Verwaltung und führen zu Fehlern.",
  "Passive Mitglieder kündigen, weil niemand sie rechtzeitig zurückholt.",
];

const solutionsList = [
  "Der KI-Telefonassistent nimmt jeden Anruf an, 24/7, ohne Warteschleife.",
  "Anfragen werden in Sekunden beantwortet und direkt zur Terminbuchung geführt.",
  "Automatisches Follow-Up erinnert an Probetrainings und fragt nach dem Besuch nach.",
  "Routinefragen erledigt die KI, Ihre Trainer bleiben auf der Fläche.",
  "Vertragsanfragen werden strukturiert aufgenommen und im CRM angestoßen.",
  "Inaktive Mitglieder werden erkannt und automatisch reaktiviert, bevor sie kündigen.",
];

const comparison = [
  ["Erreichbarkeit für Interessenten", "24/7, jeder Anruf wird angenommen", "nur wenn der Empfang besetzt ist"],
  ["Reaktion auf Website-Anfragen", "in Sekunden", "oft erst nach Stunden oder Tagen"],
  ["Probetraining-Buchung", "automatisch im Kalender", "manuell und fehleranfällig"],
  ["Lead-Nachverfolgung", "automatisches Follow-Up", "geht im Tagesgeschäft unter"],
  ["Trainer am Empfang", "entlastet, zurück auf der Fläche", "gebunden durch Telefon und Admin"],
  ["Kündigungen (Churn)", "Frühwarnung und Re-Engagement", "fällt erst bei der Kündigung auf"],
];

const transcript = [
  { who: "Anrufer", text: "Hallo, ich würde gern ein Probetraining ausmachen." },
  { who: "KI", text: "Sehr gern. Morgen um 18:00 Uhr ist ein Trainer frei, passt Ihnen das?" },
  { who: "Anrufer", text: "Ja, perfekt." },
  { who: "KI", text: "Erledigt. Sie bekommen die Bestätigung gleich per Mail." },
];

const waveHeights = [40, 70, 30, 90, 55, 75, 35, 85, 50, 65, 25, 80, 45, 70, 35, 60];

export default function Page() {
  return (
    <>
      <Script id="faq-fitness" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-fitness" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <style>{`
        @keyframes fitWave { 0%,100% { transform: scaleY(.3); } 50% { transform: scaleY(1); } }
        .fit-bar { transform-origin: bottom; animation: fitWave 1.1s ease-in-out infinite; }
        @keyframes fitPing { 0% { transform: scale(.9); opacity:.5; } 70%,100% { transform: scale(1.6); opacity:0; } }
        .fit-ping { animation: fitPing 2s ease-out infinite; }
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
                    KI für Fitnessstudios & Sportzentren
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    KI Lösungen für <span className="text-primary">Fitnessstudios</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Vom 24/7 KI-Interessenten-Telefon bis zum automatisierten Lead-Management: Wir bauen Lösungen, die Ihre Studio-Auslastung maximieren und Ihr Personal entlasten. Kein verpasstes Probetraining mehr, auch nicht nach Feierabend.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Analysegespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="tel:+43720080697">KI-Telefon live anrufen</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-primary" /> EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Live-call card */}
                <Card className="relative border-2 shadow-xl shadow-primary/5">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                          <Phone className="w-5 h-5 text-primary" />
                        </div>
                        <span className="absolute inset-0 rounded-full border-2 border-primary/40 fit-ping" aria-hidden />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">KI-Studioassistent</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> Live im Gespräch, 00:24
                        </div>
                      </div>
                      <span className="ml-auto text-[10px] uppercase tracking-wider text-muted-foreground font-medium">EU-Server</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-3">
                    {transcript.map((t, i) => (
                      <div key={i} className={t.who === "KI" ? "flex justify-end" : "flex justify-start"}>
                        <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-snug ${t.who === "KI" ? "bg-primary text-white rounded-br-sm" : "bg-muted text-foreground rounded-bl-sm"}`}>
                          {t.text}
                        </div>
                      </div>
                    ))}
                    <div className="flex items-end justify-center gap-1 h-10 pt-2">
                      {waveHeights.map((h, i) => (
                        <span
                          key={i}
                          className="fit-bar w-1 rounded-full bg-primary/70"
                          style={{ height: `${h}%`, animationDelay: `${(i % 8) * 0.1}s` }}
                        />
                      ))}
                    </div>
                    <div className="text-[11px] text-center text-muted-foreground pt-1">
                      Probetraining gebucht, Bestätigung per Mail, DSGVO-konform
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
                  ["30%", "höhere Lead-Conversion"],
                  ["24/7", "erreichbar, ohne Warteschleife"],
                  ["2 Wo.", "vom Erstgespräch bis Go-Live"],
                ].map(([v, l], i) => (
                  <div key={i} className="p-8 text-center border-b md:border-b-0 md:border-r last:border-0 border-border">
                    <div className="text-4xl md:text-5xl font-bold text-primary">{v}</div>
                    <div className="text-sm text-muted-foreground mt-2">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WAS IST / DEFINITION */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Kurz erklärt</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was KI im Fitnessstudio wirklich leistet</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>KI im Fitnessstudio bedeutet vor allem eines: Ihr Studio bleibt erreichbar und reaktionsschnell, auch wenn der Empfang gerade nicht besetzt ist. Ein <strong className="text-foreground">KI-Telefonassistent</strong> nimmt jeden Anruf an, qualifiziert Interessenten vor und bucht Probetrainings direkt in Ihren Kursplaner oder Trainer-Kalender, rund um die Uhr.</p>
                    <p>Im Gegensatz zur klassischen Verwaltung, in der Anfragen liegen bleiben, reagiert die KI in Sekunden auf Website-Formulare und WhatsApp-Nachrichten. So verlieren Sie keinen Interessenten mehr an das Studio um die Ecke, und Ihre Trainer können auf der Fläche bleiben, statt am Telefon Vertragsfragen zu beantworten.</p>
                    <p>Für Studios im DACH-Raum ist <strong className="text-foreground">Datenschutz</strong> entscheidend. Wir bauen jede Lösung DSGVO-konform, mit Datenhaltung in Österreich und der EU, damit Mitgliederdaten sicher und rechtssicher dokumentiert bleiben.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">KI-Studioassistent</Badge>
                    <Badge variant="secondary" className="rounded-full">Lead-Management</Badge>
                    <Badge variant="secondary" className="rounded-full">Mitglieder-Bindung</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">KI fürs Studio auf einen Blick</CardTitle>
                    <CardDescription>Was die Lösung für Ihr Studio übernimmt.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {[
                      ["Erreichbarkeit", "24/7, ohne Warteschleife"],
                      ["Aufgaben", "Probetrainings, Anfragen, Follow-Up"],
                      ["Integration", "Magicline, Kalender, CRM, WhatsApp"],
                      ["Mitglieder", "Churn-Frühwarnung und Re-Engagement"],
                      ["Datenschutz", "DSGVO, EU-Hosting, AVV"],
                      ["Go-Live", "in rund 2 Wochen"],
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
              <div className="text-center mb-14">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Herausforderung & Lösung</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Vom Studio-Alltag zur Automatisierung</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Wachstum braucht Systematik. Wir automatisieren Interessenten-Gewinnung und Mitglieder-Betreuung, damit Sie sich auf das Training konzentrieren können.</p>
              </div>
              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="border-2 h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-2">
                      <AlertTriangle className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-xl">Der Studio-Alltag heute</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {problemsList.map((p, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <X className="w-5 h-5 text-muted-foreground/50 mt-0.5 shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{p}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                <Card className="border-2 border-primary/30 bg-primary/5 h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Mit KI Kanzlei</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {solutionsList.map((s, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
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
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Anwendungsfälle</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Moderne Systeme für Ihr Studio</h2>
                <p className="text-lg text-muted-foreground">Weniger Verwaltung, mehr Zeit für Ihre Mitglieder. Wählen Sie einen Bereich.</p>
              </div>
              <Tabs defaultValue="voice" className="w-full">
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
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Funktionen</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Was Ihr KI-System übernimmt</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Vom ersten Klingeln bis zum gebuchten Probetraining, alles automatisch und nachvollziehbar protokolliert.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Studio-Alltag mit und ohne KI</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Derselbe Tag im Studio, einmal mit und einmal ohne automatisierte Prozesse.</p>
              </div>
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[34%] font-bold text-foreground">Merkmal</TableHead>
                      <TableHead className="text-primary font-bold">Mit KI Kanzlei</TableHead>
                      <TableHead className="text-muted-foreground">Ohne KI</TableHead>
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
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zu KI im Fitnessstudio</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zu Ihrem Studio</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {[
                  { href: "/leistungen/voicebot", icon: PhoneCall, title: "Voicebot & KI-Telefonassistent", desc: "Der 24/7 KI-Telefonassistent, der Probetrainings annimmt und direkt im Kalender bucht." },
                  { href: "/leistungen/n8n-automatisierung", icon: Network, title: "n8n Automatisierung", desc: "Verbindet Anfragen, Magicline und CRM zu automatischen Lead- und Follow-Up-Workflows." },
                  { href: "/leistungen/chatgpt-alternative", icon: MessageSquare, title: "KI-Chatbot & ChatGPT Alternative", desc: "Mitglieder-Chatbot auf Website und WhatsApp, der Tarife, Kursfragen und Probetrainings sofort beantwortet." },
                ].map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <a key={i} href={s.href} className="group block">
                      <Card className="h-full border-2 hover-lift group-hover:border-primary/40">
                        <CardHeader>
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${serviceLogos[s.href] ? "bg-white border border-border" : "bg-primary/10"}`}>
                            {serviceLogos[s.href] ? <img src={`/img/logos/${serviceLogos[s.href]}.svg`} alt={s.title} className="w-7 h-7 object-contain" /> : <Icon className="w-6 h-6 text-primary" />}
                          </div>
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
