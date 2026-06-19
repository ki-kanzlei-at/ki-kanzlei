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
import { serviceLogos } from "@/lib/serviceLogos";
import {
  Phone,
  PhoneCall,
  CalendarCheck,
  FileText,
  Megaphone,
  MessageSquare,
  Database,
  Languages,
  ShieldCheck,
  Server,
  MapPin,
  Check,
  X,
  Clock,
  BedDouble,
  Building2,
  Sparkles,
  Brain,
  Network,
} from "lucide-react";

export const metadata: Metadata = {
  title: "KI für Hotels: Telefonassistent, Chatbot & Buchungen",
  description:
    "KI für Hotels und Gastronomie: KI-Telefonassistent und Chatbot nehmen Anfragen und Buchungen rund um die Uhr entgegen, auch wenn die Rezeption ausgelastet ist.",
  keywords:
    "KI Hotel, Hotel Chatbot, KI Rezeption, KI Telefonassistent Hotel, Hotel Automatisierung, Buchungsautomatisierung, mehrsprachiger Gäste-Chatbot, Voicebot Hotel",
  alternates: { canonical: "https://ki-kanzlei.at/branchen/ki-loesungen-hotels" },
};

const faqs = [
  {
    q: "Wie lange dauert die Digitalisierung meines Hotels?",
    a: "In rund 30 Tagen ist Ihr Hotelbetrieb digitalisiert. Nach dem ersten Gespräch analysieren wir Ihre Prozesse, implementieren die Lösungen System für System und testen alles gründlich. Sie erhalten regelmäßige Updates und können jederzeit Anpassungen wünschen.",
  },
  {
    q: "Ist die Lösung wirklich DSGVO-konform?",
    a: "Ja, absolut. Alle Daten werden in Österreich gehostet. Wir arbeiten mit zertifizierten Cloud-Providern, setzen Ende-zu-Ende-Verschlüsselung ein und stellen sicher, dass alle Gästedaten nach höchsten Datenschutzstandards verarbeitet werden. Sie erhalten von uns ein vollständiges DSGVO-Compliance-Paket.",
  },
  {
    q: "Wie viel Zeit spare ich wirklich?",
    a: "Unsere Kunden sparen im Schnitt 10 bis 15 Stunden pro Woche, also 40 bis 60 Stunden im Monat, die Sie wieder voll und ganz Ihren Gästen widmen können. Der KI-Abendrezeptionist spart 8 bis 10 Stunden pro Woche, automatische Buchungen 3 bis 4 Stunden, Angebotserstellung 2 bis 3 Stunden und das Multi-Channel-Management noch einmal 2 bis 3 Stunden.",
  },
  {
    q: "Wie zuverlässig ist der KI-Abendrezeptionist?",
    a: "Unser KI-Abendrezeptionist erreicht eine Verständnisrate von über 95 Prozent. Bei Unklarheiten oder komplexen Anliegen leitet der Agent an einen Menschen weiter. Wir trainieren die KI laufend mit echten Hotel-Dialogen, die Uptime liegt bei 99,9 Prozent.",
  },
  {
    q: "Funktioniert die Lösung mit meinem Buchungssystem?",
    a: "Ja. Wir integrieren uns nahtlos in alle gängigen Buchungssysteme, etwa Protel, SmartOffer oder Mews. Die Anbindung erfolgt über sichere APIs und wird vor der Inbetriebnahme gründlich getestet. Sie behalten die volle Kontrolle über Ihre Daten und Prozesse.",
  },
  {
    q: "Kann der KI-Abendrezeptionist auch Notfälle erkennen?",
    a: "Ja. Das System erkennt Notfälle automatisch und leitet sie sofort an den zuständigen Mitarbeiter weiter. Zusätzlich können Sie individuelle Notfall-Szenarien definieren, die priorisiert behandelt werden. Bei kritischen Situationen erfolgt eine sofortige Benachrichtigung per SMS oder Anruf.",
  },
  {
    q: "Wie funktioniert die Multi-Channel-Integration?",
    a: "Alle Anfragen aus Instagram, Facebook, WhatsApp, E-Mail und Ihrer Website laufen in einem zentralen Posteingang zusammen. Ein KI-Agent beantwortet alle Kanäle einheitlich und kann bei Bedarf an Ihr Team übergeben. So behalten Sie die volle Übersicht über die gesamte Gästekommunikation.",
  },
  {
    q: "Was passiert mit meinen Gästedaten?",
    a: "Ihre Gästedaten bleiben Ihre Daten. Wir speichern und verarbeiten sie ausschließlich in Ihrem Auftrag gemäß Auftragsverarbeitungsvertrag (AVV). Die Daten werden verschlüsselt gespeichert, regelmäßig gesichert und Sie können den Zugriff jederzeit widerrufen oder Daten exportieren und löschen.",
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
  name: "KI Lösungen für Hotels und Gastronomie",
  serviceType: "KI für Hotels, Hotelautomatisierung, KI-Abendrezeption",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "KI-Lösungen für Hotels und Gastronomie im DACH-Raum: KI-Abendrezeption, automatische Buchungen, Angebote und Multi-Channel-Gästekommunikation. DSGVO-konform, gehostet in Österreich.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const features = [
  { icon: PhoneCall, title: "KI-Abendrezeption rund um die Uhr", text: "Hebt ab, wenn niemand da ist, abends, nachts und am Wochenende. Beantwortet Standardfragen, nimmt Buchungen entgegen und erkennt Notfälle, die sofort weitergeleitet werden." },
  { icon: CalendarCheck, title: "Automatische Buchungen", text: "Prüft die Echtzeit-Verfügbarkeit, nimmt Gästedaten fehlerfrei auf, reserviert sofort und versendet Bestätigungen, während der nächste Gast bereits bedient wird." },
  { icon: FileText, title: "Angebote als fertige PDF", text: "Aus jeder Anfrage über Telefon, WhatsApp oder Instagram entsteht automatisch ein fertiges PDF-Angebot, das je nach Kanal sofort versendet wird. Schluss mit 20 Minuten Schreibarbeit pro Anfrage." },
  { icon: MessageSquare, title: "Multi-Channel Inbound", text: "Instagram, Facebook, WhatsApp, E-Mail und Website laufen in einem Posteingang zusammen. Ein Agent beantwortet alle Kanäle einheitlich, statt Kanal-Chaos." },
  { icon: Megaphone, title: "Echtzeit-Benachrichtigungen", text: "Störungen wie ein defekter Fernseher werden sofort gemeldet. Ihr Team bekommt automatisch SMS oder E-Mail und reagiert proaktiv, Wertschätzung statt Beschwerde." },
  { icon: Database, title: "KI Wissensdatenbank", text: "Ihre Hotel-Dokumente, FAQs und internes Wissen werden durchsuchbar. Der Agent findet sofort die richtige Antwort, für Gästeanfragen wie für interne Fragen." },
  { icon: Languages, title: "Mehrsprachige Gästekommunikation", text: "Antwortet international anreisenden Gästen in ihrer Sprache, natürlich klingend und rund um die Uhr." },
  { icon: ShieldCheck, title: "DSGVO & Hosting in Österreich", text: "Alle Gästedaten werden verschlüsselt und in Österreich verarbeitet, abgesichert per Auftragsverarbeitungsvertrag und transparenter KI-Kennzeichnung." },
];

const problems = [
  { p: "Abend- und Nachtanrufe bleiben liegen, Gäste landen auf der Mailbox und Beschwerden eskalieren.", s: "Der KI-Abendrezeptionist hebt ab, wenn niemand da ist, beantwortet Fragen und nimmt Buchungen entgegen." },
  { p: "Verfügbarkeiten werden manuell zwischen Telefon, Buchungssystem und Excel geprüft, während der nächste Gast wartet.", s: "Die KI prüft die Echtzeit-Verfügbarkeit direkt und bucht sofort, ohne Springen zwischen den Systemen." },
  { p: "Angebote werden pro Anfrage manuell erstellt, je Kanal noch einmal 20 Minuten Bildschirmzeit.", s: "Aus jeder Anfrage entsteht automatisch ein fertiges PDF-Angebot, passend zum Kanal sofort versendet." },
  { p: "Dieselben Standardfragen zu Frühstück, Parkplatz und Spa rauben der Rezeption den Fokus.", s: "Die KI beantwortet wiederkehrende Fragen automatisch, damit sich Ihr Team um Check-in und Gäste kümmert." },
  { p: "Umbuchungen und Stornos kosten jeden Vormittag wertvolle Morgenstunden.", s: "Nächte verschieben, Stornos abwickeln und Bestätigungen versenden laufen automatisch ab." },
  { p: "Kanal-Chaos zwischen Instagram, WhatsApp, Booking.com und Website statt echter Gästebetreuung.", s: "Alle Kanäle landen in einem Posteingang, ein Agent beantwortet sie einheitlich." },
];

const useCases = [
  {
    value: "abendrezeption",
    label: "Abendrezeption",
    icon: PhoneCall,
    head: "KI-Abendrezeptionist",
    text: "Hebt ab, wenn niemand da ist, abends, nachts und am Wochenende. Beantwortet Standardfragen zu Frühstück, Parkplatz, Spa und Late Check-out, nimmt Buchungen entgegen, verschiebt Nächte und storniert. Erkennt Notfälle und leitet sie an Ihr Team weiter.",
  },
  {
    value: "buchungen",
    label: "Buchungen",
    icon: CalendarCheck,
    head: "Automatische Buchungen",
    text: "Kein Springen mehr zwischen Telefon, Buchungssystem und Excel. Die KI prüft die Echtzeit-Verfügbarkeit direkt, nimmt Gästedaten fehlerfrei auf, reserviert sofort und versendet Bestätigungen, während der nächste Gast bereits bedient wird.",
  },
  {
    value: "angebote",
    label: "Angebote",
    icon: FileText,
    head: "Angebote und Bestätigungen",
    text: "Keine 20 Minuten Schreibarbeit mehr. Wenn jemand über Telefon, WhatsApp oder Instagram einen Bedarf hat, generiert die Automatisierung ein fertiges PDF-Angebot und schickt es je nach Kanal sofort an den Gast. Bestätigungen und Erinnerungen laufen automatisch mit.",
  },
  {
    value: "benachrichtigungen",
    label: "Hinweise",
    icon: Megaphone,
    head: "Echtzeit-Benachrichtigungen",
    text: "Störungen werden sofort gemeldet, etwa ein defekter Fernseher. Eine automatische SMS oder E-Mail erreicht Ihr Team, damit Sie proaktiv reagieren können. So wird aus einer drohenden Beschwerde echte Wertschätzung.",
  },
  {
    value: "multichannel",
    label: "Multi-Channel",
    icon: MessageSquare,
    head: "Multi-Channel Inbound",
    text: "Kein Kanal-Chaos mehr. Alle Anfragen aus Instagram, Facebook, WhatsApp, E-Mail und Website landen in einem Posteingang. Ein Agent beantwortet alle Kanäle einheitlich, während der Gast vor Ihnen wartet.",
  },
  {
    value: "wissen",
    label: "Wissensbasis",
    icon: Database,
    head: "KI Wissensdatenbank",
    text: "Ihre Hotel-Dokumente, FAQs und Ihr internes Wissen werden durchsuchbar. Der Agent findet sofort die richtige Antwort, ob für Gästeanfragen oder interne Fragen. Kein langes Suchen mehr in PDFs und E-Mails.",
  },
];

const ueberblick: [string, string][] = [
  ["Erreichbarkeit", "24/7, auch abends und nachts"],
  ["Sprache", "Deutsch, mehrsprachig, menschlich klingend"],
  ["Aufgaben", "Buchungen, Fragen, Angebote, Stornos"],
  ["Kanäle", "Telefon, WhatsApp, Instagram, E-Mail"],
  ["Datenschutz", "DSGVO, Hosting in Österreich, AVV"],
  ["Zeitersparnis", "10 bis 15 Stunden pro Woche"],
  ["Go-Live", "in rund 30 Tagen"],
];

const results = [
  { icon: Clock, value: ">95%", label: "Verständnisrate der KI-Abendrezeption" },
  { icon: Building2, value: "30 Tage", label: "vom Erstgespräch bis zum digitalisierten Betrieb" },
  { icon: Sparkles, value: "99,9%", label: "Uptime, damit kein Anliegen verloren geht" },
];

const transcript = [
  { who: "Gast", text: "Guten Abend, haben Sie morgen noch ein Doppelzimmer frei?" },
  { who: "Anna", text: "Guten Abend. Ja, ein Doppelzimmer mit Frühstück ist frei. Soll ich es für Sie reservieren?" },
  { who: "Gast", text: "Ja, sehr gern." },
  { who: "Anna", text: "Erledigt. Die Bestätigung kommt gleich per E-Mail zu Ihnen." },
];

const waveHeights = [40, 70, 30, 90, 55, 75, 35, 85, 50, 65, 25, 80, 45, 70, 35, 60];

const related = [
  { href: "/leistungen/voicebot", icon: Phone, title: "Voicebot & KI-Telefonassistent", desc: "Die KI-Stimme, die abends und nachts Anrufe annimmt, Fragen beantwortet und Buchungen entgegennimmt." },
  { href: "/leistungen/n8n-automatisierung", icon: Network, title: "n8n Automatisierung", desc: "Verbindet Buchungssystem, Kalender und Messenger zu einem durchgängigen, automatischen Ablauf." },
  { href: "/leistungen/chatgpt-alternative", icon: MessageSquare, title: "KI-Chatbot & ChatGPT Alternative", desc: "Mehrsprachiger Gäste-Chatbot auf der Website, der Fragen beantwortet und Buchungsanfragen aufnimmt, DSGVO-konform." },
];

export default function Page() {
  return (
    <>
      <Script id="faq-hotels" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-hotels" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <style>{`
        @keyframes htWave { 0%,100% { transform: scaleY(.3); } 50% { transform: scaleY(1); } }
        .ht-bar { transform-origin: bottom; animation: htWave 1.1s ease-in-out infinite; }
        @keyframes htPing { 0% { transform: scale(.9); opacity:.5; } 70%,100% { transform: scale(1.6); opacity:0; } }
        .ht-ping { animation: htPing 2s ease-out infinite; }
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
                    Hotels & Gastronomie, KI-Lösungen
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    KI Lösungen für <span className="text-primary">Hotels</span> und Gastronomie
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Personalmangel und Kommunikationsstress in Ihrem Betrieb? Mit unseren KI-Lösungen automatisieren und optimieren wir Ihre Hotelprozesse, effizient, sicher und DSGVO-konform. Kein Anruf und keine Anfrage geht mehr verloren, auch nicht nach Feierabend.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Analysegespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="tel:+43720080697">Anna live anrufen</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-primary" /> Hosting in Österreich</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Live-call card */}
                <Card className="relative border-2 shadow-xl shadow-primary/5">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                          <BedDouble className="w-5 h-5 text-primary" />
                        </div>
                        <span className="absolute inset-0 rounded-full border-2 border-primary/40 ht-ping" aria-hidden />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">Anna, KI-Abendrezeption</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> Live im Gespräch, 22:14
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
                          className="ht-bar w-1 rounded-full bg-primary/70"
                          style={{ height: `${h}%`, animationDelay: `${(i % 8) * 0.1}s` }}
                        />
                      ))}
                    </div>
                    <div className="text-[11px] text-center text-muted-foreground pt-1">
                      DSGVO, TLS 1.3, Hosting in Österreich
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
                {[
                  ["10-15h", "gespart pro Woche"],
                  ["350%", "ROI"],
                  ["30 Tage", "bis zum Go-Live"],
                  ["24/7", "erreichbar, ohne Wartezeit"],
                ].map(([v, l], i) => (
                  <div key={i} className="p-8 text-center border-b md:border-b-0 border-r last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r border-border">
                    <div className="text-3xl md:text-4xl font-bold text-primary">{v}</div>
                    <div className="text-sm text-muted-foreground mt-2">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WAS KI IM HOTEL LEISTET */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Kurz erklärt</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was KI im Hotel heute wirklich leistet</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Hotellerie und Gastronomie kämpfen mit denselben Engpässen: <strong className="text-foreground">Personalmangel</strong>, verpasste Anrufe und ein ständiges Springen zwischen Telefon, Buchungssystem und Messenger. Genau hier setzt KI an, indem sie wiederkehrende Aufgaben übernimmt und Ihr Team entlastet.</p>
                    <p>Unser <strong className="text-foreground">KI-Abendrezeptionist</strong> hebt ab, wenn niemand da ist, beantwortet Standardfragen, nimmt Buchungen entgegen und erkennt Notfälle. Automatisierungen rund um Angebote, Bestätigungen und Stornos sparen pro Vorgang wertvolle Minuten, in Summe 10 bis 15 Stunden pro Woche.</p>
                    <p>Für Betriebe im DACH-Raum ist dabei eines entscheidend: <strong className="text-foreground">Datenschutz</strong>. Wir hosten alle Gästedaten in Österreich, sichern alles per Auftragsverarbeitungsvertrag ab und kennzeichnen den KI-Einsatz transparent nach EU AI Act.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">KI-Abendrezeption</Badge>
                    <Badge variant="secondary" className="rounded-full">Gästekommunikation</Badge>
                    <Badge variant="secondary" className="rounded-full">Hotelautomatisierung</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Hotel-KI auf einen Blick</CardTitle>
                    <CardDescription>Was die Lösung für Ihren Betrieb leistet.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {ueberblick.map(([label, value]) => (
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
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Vorher / Nachher</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Diese Probleme kennen Sie nur zu gut</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Jeden Tag derselbe Wahnsinn an der Rezeption. So sieht der Alltag mit KI Kanzlei aus.</p>
              </div>
              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="border-2 border-border">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">Der Alltag heute</CardTitle>
                    <CardDescription>Wo Zeit und Gäste verloren gehen.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {problems.map((row, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-muted flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-4 h-4 text-muted-foreground" />
                        </span>
                        <p className="text-sm text-muted-foreground leading-relaxed">{row.p}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                <Card className="border-2 border-primary/30 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">Mit KI Kanzlei</CardTitle>
                    <CardDescription>Zuverlässige Gästekommunikation, ohne zusätzlichen Personalaufwand.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {problems.map((row, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-primary" />
                        </span>
                        <p className="text-sm text-foreground leading-relaxed">{row.s}</p>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ihre Lösung: Hotel-Automatisierung</h2>
                <p className="text-lg text-muted-foreground">Wählen Sie einen Bereich, wir zeigen den passenden KI-Workflow.</p>
              </div>
              <Tabs defaultValue="abendrezeption" className="w-full">
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Was Ihre Hotel-KI übernimmt</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">DSGVO-konform, natürlich klingend und nahtlos in Ihre Systeme integriert.</p>
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

          {/* TRUST / RESULT BAND */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-border rounded-2xl overflow-hidden bg-card">
                {results.map((r, i) => {
                  const Icon = r.icon;
                  return (
                    <div key={i} className="p-8 text-center border-b md:border-b-0 md:border-r last:border-0 border-border">
                      <Icon className="w-7 h-7 text-primary mx-auto mb-3" />
                      <div className="text-3xl md:text-4xl font-bold text-primary">{r.value}</div>
                      <div className="text-sm text-muted-foreground mt-2">{r.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="section-spacing">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zu KI im Hotel</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zu Ihrem Hotel</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {related.map((s, i) => {
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
