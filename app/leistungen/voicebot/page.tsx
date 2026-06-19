import type { Metadata } from "next";
import { serviceLogos } from "@/lib/serviceLogos";
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
import { Phone, PhoneCall, CalendarCheck, Filter, Globe, PhoneOutgoing, ShieldCheck, Clock, Check, X, Server, MapPin, Stethoscope, Scale, Hotel, Hammer, Calculator, ShoppingBag, Search, FileText, Settings, Rocket, Bot, Brain, Network } from "lucide-react";

export const metadata: Metadata = {
  title: "Voicebot & KI-Telefonassistent für Unternehmen",
  description:
    "Voicebot und KI-Telefonassistent von der KI Kanzlei: nimmt Anrufe 24/7 entgegen, bucht Termine und qualifiziert Anfragen, menschlich klingend auf Deutsch. DSGVO-konform, EU-gehostet, in rund 2 Wochen live.",
  keywords:
    "Voicebot, KI Telefonassistent, KI Sprachassistent, Voice Agent, Voicebot Deutsch, Voicebot Österreich, Voicebot Deutschland, Voicebot Schweiz, Voicebot DACH, KI Telefon, KI Anrufassistent, Telefon-KI, automatischer Telefonassistent, Voicebot Unternehmen, KI Voicebot",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/voicebot" },
};

const faqs = [
  {
    q: "Was ist ein Voicebot und was kann ein KI-Telefonassistent?",
    a: "Ein Voicebot (auch KI-Telefonassistent oder KI-Sprachassistent) ist ein System, das Telefongespräche vollautomatisch führt. Es versteht natürliche Sprache, antwortet in Echtzeit, bucht Termine, beantwortet Fragen und leitet bei Bedarf an Ihr Team weiter, auf Deutsch und rund um die Uhr.",
  },
  {
    q: "Klingt der Voicebot wirklich menschlich?",
    a: "Ja. Über unsere Voicebot-Plattform fonio.ai und moderne Neural-Text-to-Speech-Technologie klingt der KI-Telefonassistent mit natürlicher Sprachmelodie, Pausen und Intonation verblüffend echt. Viele Anrufer merken nicht, dass sie mit einer KI sprechen. Auf Wunsch weisen wir transparent auf den KI-Einsatz hin (EU AI Act konform).",
  },
  {
    q: "Was ist der Unterschied zwischen Voicebot und IVR (Drücken Sie 1)?",
    a: "Ein klassisches IVR-Menü zwingt Anrufer durch starre Tastenmenüs und scheitert an freien Fragen. Ein Voicebot mit KI versteht frei gesprochene Sprache, reagiert flexibel auf den Kontext und löst das Anliegen direkt, statt nur weiterzuleiten.",
  },
  {
    q: "Ist ein Voicebot DSGVO-konform?",
    a: "Ja, bei richtiger Implementierung. Wir hosten alle Gesprächsdaten auf Servern in Österreich beziehungsweise der EU, geben nichts an US-Anbieter weiter, dokumentieren alles mit Auftragsverarbeitungsvertrag (AVV) und kennzeichnen den KI-Einsatz auf Wunsch transparent.",
  },
  {
    q: "Für welche Branchen eignet sich ein KI-Telefonassistent?",
    a: "Für alle Betriebe mit Telefonaufkommen: Arztpraxen und Kliniken (Terminbuchung, Triage), Rechtsanwälte und Steuerberater (Erstanfragen, Fristen), Hotels und Gastronomie (Buchungen), Handwerk und KMU (Notfalltelefon, Auftragserfassung) sowie E-Commerce und Kundenservice.",
  },
  {
    q: "Lässt sich der Voicebot in meinen Kalender und mein CRM integrieren?",
    a: "Ja. Der Voicebot prüft Verfügbarkeiten in Echtzeit und bucht direkt, kompatibel mit cal.com, Google Calendar und Outlook. Gesprächsergebnisse und Kontaktdaten landen sauber protokolliert in Ihrem CRM oder werden per n8n an Ihre Systeme weitergegeben.",
  },
  {
    q: "Wie lange dauert die Einrichtung?",
    a: "In der Regel rund 2 Wochen. Nach einem kurzen Erstgespräch konfigurieren wir Stimme, Wissen, Eskalationslogik und Integrationen, testen mit echten Anrufszenarien und gehen dann live, mit laufender Optimierung danach.",
  },
  {
    q: "Was passiert, wenn der Voicebot nicht weiterweiß?",
    a: "Der KI-Telefonassistent erkennt seine Grenzen und übergibt sauber an eine echte Person oder nimmt eine Rückrufnotiz mit allen Details auf. So fühlt sich kein Anrufer abgewimmelt und kein Anliegen geht verloren.",
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
  name: "Voicebot & KI-Telefonassistent",
  serviceType: "Voicebot, KI-Telefonassistent",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description: "Voicebot und KI-Telefonassistent für Unternehmen im DACH-Raum: 24/7 Anrufannahme, Terminbuchung, Qualifizierung. DSGVO-konform, EU-gehostet.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const features = [
  { icon: PhoneCall, title: "24/7 Anrufannahme", text: "Der Voicebot nimmt jeden Anruf entgegen, auch abends, am Wochenende und an Feiertagen. Kein verpasster Lead mehr." },
  { icon: CalendarCheck, title: "Automatische Terminbuchung", text: "Prüft den Kalender in Echtzeit und bucht direkt, kompatibel mit cal.com, Google Calendar und Outlook." },
  { icon: Filter, title: "Anfragen qualifizieren", text: "Stellt die richtigen Fragen, erfasst alle Daten und leitet nur passende Anfragen an Ihr Team weiter." },
  { icon: Globe, title: "Mehrsprachig", text: "Spricht Deutsch inklusive österreichischer Färbung sowie Englisch und weitere Sprachen für internationale Kundschaft." },
  { icon: PhoneOutgoing, title: "Outbound-Anrufe", text: "Erinnerungen, Nachfassaktionen und Terminbestätigungen, vollautomatisch und skalierbar ausgehend." },
  { icon: ShieldCheck, title: "DSGVO & EU-Hosting", text: "Alle Gespräche werden auf EU-Servern verarbeitet, mit AVV abgesichert und auf Wunsch als KI gekennzeichnet." },
];

const comparison = [
  ["Versteht freie Sprache", "ja, im Kontext", "nein, starres Menü", "nur teils, lange Wartezeit"],
  ["Erreichbarkeit", "24/7, sofort", "24/7, aber stur", "nur zu Bürozeiten"],
  ["Terminbuchung", "direkt im Kalender", "nicht möglich", "manuell"],
  ["Qualifizierung", "automatisch", "keine", "personalabhängig"],
  ["Kosten pro Anruf", "sehr niedrig", "niedrig", "hoch"],
  ["Skaliert bei Anrufspitzen", "unbegrenzt", "begrenzt", "Warteschleife"],
];

const branchen = [
  { value: "aerzte", label: "Arztpraxen", icon: Stethoscope, head: "Arztpraxen & Kliniken", text: "Terminvergabe, Terminverschiebungen, Rezept- und Rückrufanfragen werden automatisch abgewickelt. Die Praxis bleibt erreichbar, ohne dass die Rezeption im Dauerstress ist, ärztliche Verschwiegenheit inklusive." },
  { value: "kanzlei", label: "Kanzleien", icon: Scale, head: "Anwälte & Steuerberater", text: "Der KI-Telefonassistent qualifiziert Erstanfragen, erfasst den Sachverhalt strukturiert und vergibt Termine, ohne dass sensible Mandantendaten das Haus verlassen." },
  { value: "hotel", label: "Hotels", icon: Hotel, head: "Hotels & Gastronomie", text: "Zimmeranfragen, Reservierungen und Sonderwünsche werden rund um die Uhr über alle Kanäle angenommen, gerade in den Abendstunden, wenn die Rezeption ausgelastet ist." },
  { value: "handwerk", label: "Handwerk", icon: Hammer, head: "Handwerk & Betriebe", text: "Ein KI-Notfalltelefon nimmt Aufträge auf, priorisiert dringende Fälle und vereinbart Termine, während Sie auf der Baustelle sind." },
  { value: "steuer", label: "Steuerberatung", icon: Calculator, head: "Steuerberatung", text: "Klientenanfragen, Fristenabfragen und Rückrufmanagement laufen automatisch, sauber dokumentiert und an Ihre Tools angebunden." },
  { value: "ecommerce", label: "E-Commerce", icon: ShoppingBag, head: "E-Commerce & Service", text: "Bestellstatus, Retouren und häufige Fragen werden sofort beantwortet, ohne Warteschleife und ohne zusätzliches Personal." },
];

const steps = [
  { step: "01", icon: Search, title: "Erstgespräch & Demo", time: "30 Minuten", desc: "Sie rufen unseren Voicebot live an und testen ihn. Gemeinsam klären wir Ihre Anforderungen: Terminbuchung, FAQ, Triage oder Outbound." },
  { step: "02", icon: Settings, title: "Konfiguration", time: "Woche 1", desc: "Wir richten Stimme, Wissen, Eskalationslogik und Integrationen ein (Kalender, CRM, Telefonanlage) und trainieren den Assistenten auf Ihre Domäne." },
  { step: "03", icon: FileText, title: "Testphase", time: "Woche 2", desc: "Sie testen mit echten Anrufszenarien. Wir optimieren Antworten, Tonfall und Übergaben, bis alles sitzt." },
  { step: "04", icon: Rocket, title: "Go-Live & Betreuung", time: "ab Woche 2", desc: "Der Voicebot geht auf Ihrer Nummer live. Wir überwachen den Betrieb DSGVO-konform und verbessern laufend." },
];

const tech = [
  { name: "fonio.ai", badge: "Offizieller Implementierungspartner", desc: "Wir sind offizieller Implementierungspartner von fonio.ai, der auf den deutschsprachigen Markt spezialisierten Voicebot-Plattform mit Verständnis für österreichische Sprachfärbung und natürliche Gesprächsführung. Als Partner setzen wir Ihren Telefon-KI-Assistenten sauber auf und betreuen ihn laufend." },
  { name: "Neural Text-to-Speech", badge: "Stimme über fonio", desc: "Im Hintergrund sorgt moderne Neural-TTS für menschlich klingende Stimmen mit natürlicher Intonation und Pausen." },
  { name: "Automatische Spracherkennung", badge: "Verstehen über fonio", desc: "Hochpräzise Spracherkennung erfasst auch bei Nebengeräuschen, Akzenten und schnellem Sprechen zuverlässig, was der Anrufer sagt." },
  { name: "EU-Hosting", badge: "Datenschutz", desc: "Gesprächsdaten auf Servern in Österreich und der EU, keine Weitergabe an US-Anbieter, vollständiger AVV." },
];

const transcript = [
  { who: "Anrufer", text: "Guten Tag, ich hätte gern einen Termin nächste Woche." },
  { who: "Anna", text: "Sehr gern. Mittwoch um 14:30 Uhr wäre frei, passt Ihnen das?" },
  { who: "Anrufer", text: "Ja, perfekt." },
  { who: "Anna", text: "Erledigt. Sie bekommen die Bestätigung gleich per SMS." },
];

const waveHeights = [40, 70, 30, 90, 55, 75, 35, 85, 50, 65, 25, 80, 45, 70, 35, 60];

export default function Page() {
  return (
    <>
      <Script id="faq-voicebot" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-voicebot" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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
                    Voicebot, KI-Telefonassistent
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Der Voicebot, der für Sie telefoniert, <span className="text-primary">rund um die Uhr</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Unser KI-Telefonassistent nimmt Anrufe entgegen, bucht Termine und beantwortet Fragen, menschlich klingend und auf Deutsch. Kein Anruf geht mehr verloren, auch nicht nach Feierabend.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="tel:+43720080697">Voicebot live anrufen</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#contact">Kostenloses KI Audit</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-primary" /> EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                  <div className="flex items-center gap-2.5 pt-1 text-sm text-muted-foreground">
                    <span>Offizieller Implementierungspartner von</span>
                    <a href="https://fonio.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white border border-border rounded-lg px-2.5 py-1.5 shadow-sm hover:border-primary/40 transition-colors">
                      <img src="/img/logos/fonio.webp" alt="fonio.ai" className="h-5 w-auto" />
                    </a>
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
                        <div className="font-semibold text-sm">Anna, KI-Telefonassistent</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> Live im Gespräch, 00:38
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
                      DSGVO, TLS 1.3, Aufzeichnung nur mit Einwilligung
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* WAS IST */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Kurz erklärt</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was ein Voicebot heute wirklich kann</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Ein <strong className="text-foreground">Voicebot</strong>, oft auch KI-Telefonassistent oder KI-Sprachassistent genannt, ist ein System, das Telefongespräche vollautomatisch führt. Er versteht frei gesprochene Sprache, antwortet in Echtzeit und erledigt ganze Aufgaben: von der Terminbuchung über die Erstberatung bis zum Kundensupport.</p>
                    <p>Im Gegensatz zu alten IVR-Systemen, die Anrufer durch starre Tastenmenüs zwingen, reagiert ein moderner <strong className="text-foreground">KI-Telefonassistent</strong> flexibel auf den Kontext und löst das Anliegen direkt. Das Ergebnis ist ein Telefon, das Ihre Mitarbeiter spürbar entlastet und kein Anliegen unbeantwortet lässt.</p>
                    <p>Für Unternehmen im DACH-Raum ist dabei eines entscheidend: <strong className="text-foreground">Datenschutz</strong>. Wir bauen jeden Voicebot DSGVO-konform, mit Datenhaltung in Österreich und der EU und transparenter Kennzeichnung des KI-Einsatzes nach EU AI Act.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">KI Sprachassistent</Badge>
                    <Badge variant="secondary" className="rounded-full">Voice Agent</Badge>
                    <Badge variant="secondary" className="rounded-full">Telefon-KI</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Voicebot auf einen Blick</CardTitle>
                    <CardDescription>Was den KI-Telefonassistenten ausmacht.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {[
                      ["Erreichbarkeit", "24/7, ohne Wartezeit"],
                      ["Sprache", "Deutsch, menschlich klingend"],
                      ["Aufgaben", "Termine, Fragen, Qualifizierung"],
                      ["Integration", "Kalender, CRM, Telefonanlage"],
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

          {/* FUNKTIONEN */}
          <section className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-14">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Funktionen</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Was Ihr Voicebot übernimmt</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Voicebot, IVR oder klassischer Service?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Drei Wege, ein Telefon zu betreiben. Nur einer ist immer erreichbar und versteht, was der Anrufer wirklich will.</p>
              </div>
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[28%] font-bold text-foreground">Merkmal</TableHead>
                      <TableHead className="text-primary font-bold">Voicebot (KI)</TableHead>
                      <TableHead className="text-muted-foreground">IVR-Menü</TableHead>
                      <TableHead className="text-muted-foreground">Klassischer Service</TableHead>
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

          {/* BRANCHEN */}
          <section className="section-spacing">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Branchen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ein Voicebot für Ihre Branche</h2>
                <p className="text-lg text-muted-foreground">Wählen Sie Ihren Bereich, wir zeigen das passende Szenario.</p>
              </div>
              <Tabs defaultValue="aerzte" className="w-full">
                <TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">
                  {branchen.map((b) => {
                    const Icon = b.icon;
                    return (
                      <TabsTrigger key={b.value} value={b.value} className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border">
                        <Icon className="w-4 h-4 mr-1.5" />{b.label}
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
                {branchen.map((b) => (
                  <TabsContent key={b.value} value={b.value}>
                    <Card className="border-2">
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-bold mb-2">{b.head}</h3>
                        <p className="text-muted-foreground leading-relaxed">{b.text}</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>

          {/* TECHNOLOGIE */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-14">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Technologie</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Die Technik hinter der Stimme</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Als offizieller Implementierungspartner von fonio.ai, der Voicebot-Plattform für den DACH-Raum, bauen wir mit ihren Bausteinen eine natürliche, sichere und zuverlässige Telefon-KI.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                {tech.map((t, i) => (
                  <Card key={i} className={`hover-lift border-2 ${i === 0 ? "border-primary/30 bg-primary/5" : ""}`}>
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <CardTitle className="text-xl flex items-center gap-2.5">
                          {t.name === "fonio.ai" && (
                            <span className="inline-flex items-center justify-center bg-white border border-border rounded-lg p-1.5 shadow-sm">
                              <img src="/img/logos/fonio.webp" alt="fonio.ai Logo" className="h-6 w-auto" />
                            </span>
                          )}
                          {t.name}
                        </CardTitle>
                        <Badge variant="outline" className="rounded-full text-xs shrink-0 bg-primary/10 text-primary border-primary/20">{t.badge}</Badge>
                      </div>
                      <CardDescription className="leading-relaxed">{t.desc}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* ABLAUF */}
          <section className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Der Ablauf</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">In rund 2 Wochen am Telefon</h2>
                <p className="text-lg text-muted-foreground">Vier Schritte, transparent und ohne Überraschungen.</p>
              </div>
              <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                <div className="hidden lg:block absolute top-8 left-0 right-0 h-px pointer-events-none" aria-hidden>
                  <div className="mx-auto w-3/4 h-px bg-gradient-to-r from-primary/40 via-primary/25 to-primary/40" />
                </div>
                {steps.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.step} className="relative flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-5 shadow-lg shadow-primary/20 relative z-10 ring-8 ring-background">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div className="text-xs font-bold text-primary mb-1 tracking-wide">SCHRITT {s.step}, {s.time}</div>
                      <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{s.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ERGEBNISSE */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-border rounded-2xl overflow-hidden bg-card">
                {[
                  ["24/7", "erreichbar, ohne Wartezeit"],
                  ["0", "verpasste Anrufe und Leads"],
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

          {/* FAQ */}
          <section className="section-spacing">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zum Voicebot</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zum Voicebot</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {[
                  { href: "/agentic-ai", icon: Bot, title: "Agentic AI", desc: "Autonome KI-Agents, die nicht nur antworten, sondern Aufgaben end-to-end erledigen." },
                  { href: "/ki-wissensdatenbank", icon: Brain, title: "KI Wissensdatenbank", desc: "Geben Sie dem Voicebot Zugriff auf Ihr Firmenwissen, DSGVO-konform per RAG." },
                  { href: "/n8n-automatisierung", icon: Network, title: "n8n Automatisierung", desc: "Verbinden Sie Gesprächsergebnisse automatisch mit CRM, Kalender und Ihren Tools." },
                ].map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <a key={i} href={s.href} className="group block">
                      <Card className="h-full border-2 hover-lift group-hover:border-primary/40">
                        <CardHeader>
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
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
