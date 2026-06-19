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
import { Building2, ShieldCheck, Server, MapPin, MessageSquare, Ticket, Check, X, Wrench, Database, Mail, PhoneCall, Clock, Plug, AlertTriangle, TrendingUp, Brain, Network, BellRing, ClipboardList, Tag } from "lucide-react";
import { serviceLogos } from "@/lib/serviceLogos";

export const metadata: Metadata = {
  title: "KI für die Hausverwaltung: Mieteranliegen & Tickets",
  description:
    "KI für die Hausverwaltung: Der Mieter-Chatbot erfasst jedes Anliegen als Ticket, kategorisiert Schadensmeldungen und ordnet sie dem richtigen Handwerker zu.",
  keywords:
    "KI Hausverwaltung, KI Mieter, Schadensmeldung Automatisierung, Liegenschaft KI, Immobilienverwaltung KI, Mieter-Chatbot, Ticket Automatisierung",
  alternates: { canonical: "https://ki-kanzlei.at/branchen/ki-loesungen-hausverwaltung" },
};

const faqs = [
  {
    q: "Wie erfasst die KI ein Mieteranliegen automatisch als Ticket?",
    a: "Der Mieter beschreibt sein Anliegen im Chat oder über ein Web-Formular, etwa eine defekte Heizung. Die KI versteht den Text, legt sofort ein strukturiertes Ticket an, vergibt eine Kategorie wie Heizung, Sanitär oder Allgemeinschaden und ordnet es dem richtigen Objekt und der richtigen Wohneinheit zu. Niemand muss mehr etwas abtippen.",
  },
  {
    q: "Lässt sich die Lösung an unsere Hausverwaltungssoftware anbinden?",
    a: "In aller Regel ja. Über n8n und moderne Schnittstellen verbinden wir die KI mit Ihrer bestehenden Verwaltungssoftware, sodass Tickets, Objektstammdaten und Mieterkontakte automatisch hin und her fließen. Die technische Machbarkeit prüfen wir individuell in einem kostenlosen Analysegespräch.",
  },
  {
    q: "Woher weiß die KI, welcher Handwerker zuständig ist?",
    a: "Aus Ihren hinterlegten Objekt- und Dienstleisterdaten. Die KI gleicht Kategorie, Objekt und Dringlichkeit ab und leitet das Ticket automatisch an den passenden Handwerker oder Rahmenvertragspartner weiter, inklusive aller relevanten Angaben zu Wohneinheit und Schaden. Auf Wunsch geben Sie jede Beauftragung vorher frei.",
  },
  {
    q: "Was passiert bei einem Notfall außerhalb der Bürozeiten?",
    a: "Für echte Notfälle wie Wasserrohrbruch oder Heizungsausfall im Winter steht eine KI-Notfall-Hotline bereit. Sie nimmt Anrufe rund um die Uhr entgegen, erkennt die Dringlichkeit, dokumentiert den Schaden und alarmiert bei Bedarf sofort den Notdienst oder die Bereitschaft. Betrieben wird die Stimme über die Plattform fonio.ai.",
  },
  {
    q: "Können auch Eigentümer und die WEG die KI nutzen?",
    a: "Ja. Die KI beantwortet wiederkehrende Eigentümer- und Mieteranfragen automatisch, etwa zu Betriebskostenabrechnung, Hausordnung, Zählerständen oder dem Stand einer Reparatur. Komplexe oder rechtlich heikle Fälle leitet sie sauber dokumentiert an Ihr Team weiter.",
  },
  {
    q: "Wie wird die DSGVO bei Mieter- und Objektdaten gewahrt?",
    a: "Datenschutz steht bei uns an oberster Stelle. Alle Lösungen laufen auf DSGVO-konformen Servern in Europa, die Verarbeitung erfolgt verschlüsselt und ein Auftragsverarbeitungsvertrag ist Teil jeder Umsetzung. Mieter- und Eigentümerdaten verlassen den europäischen Rechtsraum nicht.",
  },
  {
    q: "Wie lange dauert die Einrichtung?",
    a: "In der Regel rund 2 Wochen. Nach einem kurzen Erstgespräch konfigurieren wir Kategorien, Eskalationslogik, Handwerker-Zuordnung und die Anbindung an Ihre Verwaltungssoftware, testen mit echten Schadensmeldungen und gehen dann live, mit laufender Optimierung danach.",
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
  name: "KI Lösungen für die Hausverwaltung",
  serviceType: "KI für Hausverwaltung, Mieter-Chatbot, Ticket-Automatisierung",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description: "KI Lösungen für Hausverwaltungen und Immobilienverwaltungen im DACH-Raum: Mieter-Chatbot, automatische Ticket-Erfassung von Schadensmeldungen, Handwerker-Zuordnung, Liegenschafts-Wissensdatenbank und DSGVO-konforme Anfragebearbeitung.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const problems = [
  "Mieter melden Schäden per Telefon, E-Mail und Zuruf, nichts ist zentral erfasst",
  "Anliegen versanden, weil niemand sie strukturiert einem Objekt zuordnet",
  "Jede Schadensmeldung wird von Hand in die Verwaltungssoftware getippt",
  "Mieter rufen ständig nach dem Status ihrer Reparatur, ohne klare Antwort",
  "Dringende Wasser- und Heizungsschäden gehen außerhalb der Bürozeiten unter",
  "Wiederkehrende Eigentümer- und Mieterfragen binden den ganzen Tag",
];

const solutions = [
  "Der Mieter-Chatbot nimmt jedes Anliegen an und legt automatisch ein Ticket an",
  "Jedes Ticket wird kategorisiert und dem richtigen Objekt und Handwerker zugeordnet",
  "Schadensmeldungen fließen strukturiert in Ihre Verwaltungssoftware, ohne Abtippen",
  "Mieter sehen den Bearbeitungsstatus jederzeit selbst, das Telefon bleibt ruhig",
  "Die Notfall-Hotline nimmt Wasser- und Heizungsschäden rund um die Uhr an",
  "Standardfragen von Eigentümern und Mietern beantwortet die KI automatisch",
];

const useCases = [
  {
    value: "tickets",
    label: "Ticket-KI",
    icon: Ticket,
    head: "Anliegen- und Ticket-Automatisierung",
    text: "Das Herzstück: Jede Schadensmeldung wird automatisch als Ticket erfasst, mit n8n kategorisiert, dem richtigen Objekt zugeordnet und an den passenden Handwerker weitergeleitet. Aus einer formlosen Nachricht wird ein nachverfolgbarer Vorgang, ganz ohne manuelle Erfassung.",
  },
  {
    value: "chatbot",
    label: "Mieter-Chat",
    icon: MessageSquare,
    head: "Mieter-Chatbot rund um die Uhr",
    text: "Mieter melden Schäden, fragen nach Zählerständen oder dem Stand ihrer Reparatur, jederzeit per Chat auf Website oder Mieterportal. Der Chatbot antwortet sofort, erfasst alle nötigen Angaben und entlastet Ihr Team von Standardanfragen.",
  },
  {
    value: "notfall",
    label: "Notfall-Hotline",
    icon: PhoneCall,
    head: "Notfall-Hotline außerhalb der Bürozeiten",
    text: "Für Wasserrohrbruch, Heizungsausfall oder Stromstörung nimmt eine KI-Sprachhotline Anrufe rund um die Uhr entgegen, erkennt die Dringlichkeit und alarmiert bei Bedarf sofort Notdienst oder Bereitschaft. Betrieben über die Plattform fonio.ai.",
  },
  {
    value: "wissen",
    label: "Wissensbasis",
    icon: Database,
    head: "Liegenschafts-Wissensdatenbank (RAG)",
    text: "Hausordnungen, Verträge, Objektdaten, Wartungspläne und Ansprechpartner in Sekunden abrufbar. Ihr Team stellt einfach eine Frage im Chat und erhält sofort die korrekte Antwort aus den eigenen Unterlagen, vollständig DSGVO-konform.",
  },
  {
    value: "anfragen",
    label: "Anfragen",
    icon: Mail,
    head: "Eigentümer- und Mieteranfragen automatisch beantworten",
    text: "Die KI bearbeitet wiederkehrende E-Mail-Anfragen zu Betriebskostenabrechnung, Hausordnung oder Reparaturstatus und erstellt passgenaue Antwortvorschläge zur schnellen Freigabe durch Ihr Team.",
  },
  {
    value: "dispatch",
    label: "Handwerker",
    icon: Wrench,
    head: "Automatische Handwerker-Disposition",
    text: "n8n leitet jedes Ticket an den passenden Rahmenvertragspartner weiter, übermittelt Objekt, Wohneinheit und Schadensbeschreibung und holt Terminbestätigungen ein. So verkürzt sich die Zeit bis zur Reparatur spürbar.",
  },
];

const features = [
  { icon: ClipboardList, title: "Automatische Ticket-Erfassung", text: "Jedes Mieteranliegen wird sofort als strukturiertes Ticket erfasst, kategorisiert und dem richtigen Objekt sowie der richtigen Wohneinheit zugeordnet, ganz ohne Abtippen in die Verwaltungssoftware." },
  { icon: Wrench, title: "Richtiger Handwerker, sofort", text: "n8n leitet jedes Ticket automatisch an den passenden Handwerker oder Rahmenvertragspartner weiter, inklusive aller Angaben zu Objekt und Schaden." },
  { icon: Plug, title: "Anbindung an Ihre Software", text: "Tickets, Objektstammdaten und Mieterkontakte fließen über Schnittstellen direkt in Ihre bestehende Hausverwaltungssoftware, ohne doppelte Erfassung." },
  { icon: BellRing, title: "Statusverfolgung für Mieter", text: "Mieter sehen jederzeit den Bearbeitungsstand ihres Anliegens. Rückfragen am Telefon entfallen und Ihr Team wird spürbar ruhiger." },
  { icon: ShieldCheck, title: "DSGVO und EU-Hosting", text: "Alle Mieter- und Objektdaten werden verschlüsselt auf Servern in Europa verarbeitet, mit Auftragsverarbeitungsvertrag und ohne Datenabfluss." },
  { icon: TrendingUp, title: "70% weniger Erfassungsaufwand", text: "Hausverwaltungen reduzieren die manuelle Ticket-Erfassung typischerweise um rund 70 Prozent, die Zeit fließt zurück in die Betreuung der Objekte." },
];

const stats = [
  ["70%", "weniger manuelle Ticket-Erfassung"],
  ["24/7", "Anliegen-Annahme für Mieter"],
  ["0", "verlorene Schadensmeldungen"],
  ["2 Wo.", "vom Erstgespräch bis Go-Live"],
];

const blick = [
  ["Einsatz", "Anliegen, Tickets, Schäden"],
  ["Kanäle", "Chat, E-Mail, Web-Formular, Telefon"],
  ["Automatisierung", "erfassen, kategorisieren, zuteilen"],
  ["Anbindung", "Verwaltungssoftware & Handwerker"],
  ["Datenschutz", "DSGVO, EU-Hosting, AVV"],
  ["Go-Live", "in rund 2 Wochen"],
];

const related = [
  { href: "/leistungen/n8n-automatisierung", icon: Network, title: "n8n Automatisierung", desc: "Verbindet Mieter-Chatbot, Tickets, Verwaltungssoftware und Handwerker zu einem durchgängigen Workflow, ganz ohne manuelle Übergaben." },
  { href: "/leistungen/ki-wissensdatenbank", icon: Brain, title: "KI Wissensdatenbank", desc: "Hausordnungen, Verträge und Objektdaten sekundenschnell abrufbar, per RAG und DSGVO-konform für Ihr gesamtes Team." },
  { href: "/leistungen/voicebot", icon: PhoneCall, title: "Voicebot & Notfall-Hotline", desc: "Die KI-Sprachhotline für Notfälle außerhalb der Bürozeiten, nimmt Wasser- und Heizungsschäden rund um die Uhr an." },
];

const chat = [
  { who: "Mieter", text: "Die Heizung in Wohnung 12 ist seit gestern komplett kalt." },
  { who: "Chatbot", text: "Das tut mir leid. Ich habe dazu ein Ticket angelegt. Tritt auch Wasser aus?" },
  { who: "Mieter", text: "Nein, nur kalt." },
  { who: "Chatbot", text: "Danke. Ich leite es an den Heizungsinstallateur für Ihr Objekt weiter." },
];

const ticketRows = [
  ["Ticket", "#4827"],
  ["Kategorie", "Heizung / Schaden"],
  ["Objekt", "Hauptstraße 12, Whg. 12"],
  ["Zugeteilt", "Installateur Berger GmbH"],
];

export default function Page() {
  return (
    <>
      <Script id="faq-hausverwaltung" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-hausverwaltung" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <style>{`
        @keyframes hausPing { 0% { transform: scale(.9); opacity:.5; } 70%,100% { transform: scale(1.6); opacity:0; } }
        .haus-ping { animation: hausPing 2s ease-out infinite; }
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
                    KI für Hausverwaltungen
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    KI Lösungen für die <span className="text-primary">Hausverwaltung</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Mieter melden Schäden im Chat, die KI legt automatisch ein Ticket an, kategorisiert es und ordnet es dem richtigen Objekt und Handwerker zu. Ihr Team verliert keine Anfrage mehr und gewinnt Zeit für die Liegenschaften.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Analysegespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="tel:+43720080697">Notfall-Hotline testen</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-primary" /> EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Ticket intake card */}
                <Card className="relative border-2 shadow-xl shadow-primary/5">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                          <MessageSquare className="w-5 h-5 text-primary" />
                        </div>
                        <span className="absolute inset-0 rounded-full border-2 border-primary/40 haus-ping" aria-hidden />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">Mieter-Chatbot</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> Ticket #4827 erstellt
                        </div>
                      </div>
                      <span className="ml-auto text-[10px] uppercase tracking-wider text-muted-foreground font-medium">EU-Server</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-3">
                    {chat.map((t, i) => (
                      <div key={i} className={t.who === "Chatbot" ? "flex justify-end" : "flex justify-start"}>
                        <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-snug ${t.who === "Chatbot" ? "bg-primary text-white rounded-br-sm" : "bg-muted text-foreground rounded-bl-sm"}`}>
                          {t.text}
                        </div>
                      </div>
                    ))}
                    <div className="rounded-xl border border-border bg-muted/40 p-3 space-y-1.5">
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Automatisch erfasst</div>
                      {ticketRows.map(([label, value]) => (
                        <div key={label} className="flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">{label}</span>
                          <span className="font-medium text-foreground text-right">{value}</span>
                        </div>
                      ))}
                      <div className="flex items-center justify-between text-xs pt-1">
                        <span className="text-muted-foreground">Status</span>
                        <span className="flex items-center gap-1.5 font-medium text-foreground"><span className="w-2 h-2 rounded-full bg-amber-500" /> in Bearbeitung</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-1 border-t border-border text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5"><Tag className="w-4 h-4 text-primary" /> kategorisiert</span>
                      <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4 text-primary" /> Objekt zugeordnet</span>
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

          {/* WAS LEISTET KI IN DER HAUSVERWALTUNG */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">KI in der Verwaltung</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was KI in der Hausverwaltung wirklich leistet</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Künstliche Intelligenz in der Hausverwaltung ersetzt nicht den Verwalter. Sie automatisiert alles rund um eingehende Anliegen: die <strong className="text-foreground">Erfassung von Schadensmeldungen</strong>, die Kategorisierung, die Zuordnung zu Objekt und Handwerker sowie die Statuskommunikation an die Mieter.</p>
                    <p>Im Zentrum steht die <strong className="text-foreground">Anliegen- und Ticket-Automatisierung</strong> mit n8n und einem Mieter-Chatbot. Aus einer formlosen Nachricht wird automatisch ein nachverfolgbares Ticket, das direkt im richtigen Postfach und in Ihrer Verwaltungssoftware landet.</p>
                    <p>Für Hausverwaltungen im DACH-Raum ist dabei eines entscheidend: der <strong className="text-foreground">Datenschutz</strong>. Wir bauen jede Lösung DSGVO-konform, mit Datenhaltung in Europa und einem Auftragsverarbeitungsvertrag für Mieter- und Eigentümerdaten.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Ticket-Automatisierung</Badge>
                    <Badge variant="secondary" className="rounded-full">Mieter-Chatbot</Badge>
                    <Badge variant="secondary" className="rounded-full">Handwerker-Disposition</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Auf einen Blick</CardTitle>
                    <CardDescription>Was KI in Ihrer Verwaltung übernimmt.</CardDescription>
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Das Schadensmeldungs-Chaos, gelöst</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Anliegen kommen über jeden Kanal herein und versanden. Wir machen aus jeder Meldung ein nachverfolgbares Ticket, das automatisch beim richtigen Handwerker landet.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-border">
                  <CardHeader>
                    <CardTitle className="text-xl">Der Verwaltungsalltag heute</CardTitle>
                    <CardDescription>Was Verwalter und Team täglich bremst.</CardDescription>
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
                    <CardDescription>So sieht die Anliegenbearbeitung ab Woche 2 aus.</CardDescription>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Moderne KI-Lösungen für Ihre Hausverwaltung</h2>
                <p className="text-lg text-muted-foreground">Weniger Papierkram, mehr Zeit für die Objekte. Wählen Sie den Bereich, der Sie am meisten entlastet.</p>
              </div>
              <Tabs defaultValue="tickets" className="w-full">
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Gebaut für den Verwaltungsalltag</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Sicher, anschlussfähig und spürbar entlastend, von der Schadensmeldung bis zur erledigten Reparatur.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen aus der Hausverwaltung</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zur Hausverwaltung</h2>
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
