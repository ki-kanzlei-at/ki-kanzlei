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
import { Phone, PhoneCall, CalendarCheck, FileText, MessageSquare, Calculator, Megaphone, Stethoscope, ShieldCheck, Server, MapPin, Clock, Check, AlertTriangle, Receipt, Network, Brain } from "lucide-react";
import { serviceLogos } from "@/lib/serviceLogos";

export const metadata: Metadata = {
  title: "KI für Psychotherapie: Terminassistent & Entlastung",
  description:
    "KI für Psychotherapie und Psychologen: diskreter KI-Telefonassistent für Terminvergabe und Rückrufe, weniger Bürokratie. DSGVO-konform und vertraulich.",
  keywords:
    "KI Psychotherapie, Praxissoftware Psychotherapie, KI Telefonassistent, Terminbuchung Praxis, KI für Psychologen, KI Transkription, KI Dokumentation Therapie, Klientenkommunikation KI",
  alternates: { canonical: "https://ki-kanzlei.at/branchen/ki-loesungen-psychotherapeuten" },
};

const faqs = [
  {
    q: "Wie lange dauert die Digitalisierung meiner Praxis?",
    a: "In rund 30 Tagen ist Ihre Praxis vollständig digitalisiert. Nach dem ersten Gespräch analysieren wir Ihre Prozesse, implementieren die Lösungen System für System und testen alles gründlich. Sie erhalten regelmäßige Updates und können jederzeit Anpassungen wünschen.",
  },
  {
    q: "Ist die KI-Lösung wirklich DSGVO-konform?",
    a: "Ja, absolut. Alle Daten werden in Österreich gehostet. Wir arbeiten mit zertifizierten Cloud-Providern, implementieren Ende-zu-Ende-Verschlüsselung und stellen sicher, dass alle Klientendaten nach höchsten Datenschutzstandards verarbeitet werden. Sie erhalten von uns ein vollständiges DSGVO-Compliance-Paket.",
  },
  {
    q: "Wie viel Zeit spare ich wirklich?",
    a: "Unsere Kunden sparen durchschnittlich 8 bis 10 Stunden pro Woche. Das sind 32 bis 40 Stunden im Monat, die Sie wieder voll für Ihre Klienten nutzen können. KI-Anrufannahme spart rund 8h pro Woche, die automatische Klientenkommunikation 8 bis 10h, die KI-Dokumentation 4h und die Dokumentenverarbeitung 3h.",
  },
  {
    q: "Was passiert mit meinen Klientendaten?",
    a: "Ihre Klientendaten bleiben Ihre Daten. Wir speichern und verarbeiten sie ausschließlich in Ihrem Auftrag gemäß Auftragsverarbeitungsvertrag (AVV). Die Daten werden verschlüsselt gespeichert, regelmäßig gesichert und Sie können jederzeit den Zugriff widerrufen oder Daten exportieren und löschen.",
  },
  {
    q: "Wie zuverlässig ist die KI-Anrufannahme?",
    a: "Unser KI-Telefonassistent erreicht eine Verständnisrate von über 95 Prozent. Bei Unklarheiten leitet der Assistent an einen Menschen weiter. Wir trainieren die KI kontinuierlich mit echten Praxis-Dialogen und Sie können jederzeit Anpassungen wünschen. Die Verfügbarkeit liegt bei 99,9 Prozent.",
  },
  {
    q: "Brauche ich technische Kenntnisse?",
    a: "Nein. Wir übernehmen die komplette technische Implementierung und Wartung. Bei Bedarf können Sie einfache Anpassungen selbst vornehmen. Unser Support-Team steht jederzeit zur Verfügung, auch für nicht-technische Fragen.",
  },
  {
    q: "Mit welcher Praxissoftware arbeiten Sie zusammen?",
    a: "Wir integrieren die KI direkt in Ihre bestehende Praxisverwaltung, etwa Freudio, und verbinden Telefon, E-Mail, Kalender und Abrechnung per n8n zu durchgängigen Abläufen. Termine, Dokumente und Berichte landen automatisch dort, wo Sie sie ohnehin verwalten.",
  },
  {
    q: "Was ist, wenn etwas nicht funktioniert?",
    a: "Unser Support-Team ist für Sie da. Wir überwachen alle Systeme rund um die Uhr und reagieren sofort bei Problemen. Zusätzlich erhalten Sie regelmäßige Updates und können jederzeit Anpassungen wünschen. Unser Ziel ist, dass Sie sich um Ihre Klienten kümmern, nicht um die Technik.",
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
  name: "KI Lösungen für Psychotherapeuten",
  serviceType: "KI für Psychotherapie, Praxisautomatisierung",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description: "KI-Lösungen für psychotherapeutische Praxen im DACH-Raum: KI-Anrufannahme, Dokumentation, Terminverwaltung und Abrechnung automatisieren. DSGVO-konform, Hosting in Österreich.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const stats = [
  ["8-10h", "gespart pro Woche"],
  ["40%", "mehr Effizienz im Praxisalltag"],
  ["30 Tage", "bis zur digitalen Praxis"],
  ["100%", "DSGVO-konform, Hosting in Österreich"],
];

const ueberblick: [string, string][] = [
  ["Einsatzbereich", "Termine, Dokumentation, Abrechnung"],
  ["Erreichbarkeit", "24/7 KI-Anrufannahme"],
  ["Zeitersparnis", "8 bis 10 Stunden pro Woche"],
  ["Integration", "Freudio, Kalender, n8n"],
  ["Datenschutz", "DSGVO, Hosting in Österreich, AVV"],
  ["Go-Live", "in rund 30 Tagen"],
];

const probleme = [
  "Termin-Chaos: Anrufe zum Verschieben kosten täglich wertvolle Minuten.",
  "Papierberge: Therapieberichte, Abrechnungen und Formulare stapeln sich.",
  "Kommunikationsstress: Das Telefon klingelt mitten in der Therapiesitzung.",
  "Dokumentenaufwand: Verträge und Formulare werden manuell ausgefüllt und abgetippt.",
  "Vergessene Rückrufe: Notizen gehen verloren, zugesagte Termine werden vergessen.",
  "Social Media: Posts und Newsletter bleiben dauerhaft liegen.",
];

const loesungen = [
  "KI-Anrufannahme nimmt Anliegen rund um die Uhr entgegen und bucht Termine direkt in Freudio.",
  "Automatische Dokumentenverarbeitung importiert eingehende PDFs ohne Abtippen.",
  "Der KI-Telefonassistent entlastet das Telefon, Sie bleiben ungestört in der Sitzung.",
  "Digitale Formulare mit automatischer Übernahme der Klientendaten.",
  "Automatische SMS- und E-Mail-Erinnerungen, kein Rückruf geht mehr verloren.",
  "Ein KI-Agent erstellt und plant Social-Media-Posts automatisch.",
];

const useCases = [
  {
    value: "anruf",
    label: "Anrufannahme",
    icon: PhoneCall,
    head: "KI-Anrufannahme",
    savings: "8h pro Woche",
    text: "Beantwortet Anrufe rund um die Uhr auf Deutsch oder Englisch, qualifiziert Klienten und bucht Termine automatisch in Freudio, angebunden über n8n. So bleibt die Praxis erreichbar, ohne dass die Rezeption im Dauerstress ist.",
  },
  {
    value: "doku",
    label: "Dokumente",
    icon: FileText,
    head: "Automatische Dokumentenverarbeitung",
    savings: "3h pro Woche",
    text: "Klienten senden PDFs per E-Mail, etwa Verschwiegenheitserklärung und Einverständniserklärungen. Die Dateien werden automatisch verarbeitet und in Freudio importiert, ohne manuelles Abtippen.",
  },
  {
    value: "komm",
    label: "Kommunikation",
    icon: MessageSquare,
    head: "Automatische Klientenkommunikation",
    savings: "8 bis 10h pro Woche",
    text: "SMS-Erinnerungen, E-Mails mit Dokumenten zum Ausfüllen, automatische Terminbestätigungen und laufende Synchronisation mit Freudio. Ihre Klienten sind informiert, ohne dass Sie selbst nachfassen müssen.",
  },
  {
    value: "bericht",
    label: "Dokumentation",
    icon: Stethoscope,
    head: "KI-Dokumentation",
    savings: "4h pro Woche",
    text: "Die integrierte KI-Dokumentation erstellt automatisch Therapieberichte und Zusammenfassungen direkt in der Praxisverwaltung. Sie behalten die Kontrolle und sparen den Aufwand des Tippens.",
  },
  {
    value: "buchhaltung",
    label: "Abrechnung",
    icon: Calculator,
    head: "Automatisierte Buchhaltung",
    savings: "2h pro Woche",
    text: "Die integrierte Abrechnungsfunktion generiert automatisch Rechnungen, ICD-11 Kodierung und die Krankenkassen-Abrechnung direkt in Freudio und verwaltet alle buchhaltungsrelevanten Daten.",
  },
  {
    value: "marketing",
    label: "Marketing",
    icon: Megaphone,
    head: "Automatisches Marketing",
    savings: "3h pro Woche",
    text: "Ein KI-Agent generiert automatisch Posts zu von Ihnen gewählten Themen und veröffentlicht sie zu optimalen Zeiten auf Ihren Social-Media-Kanälen. Sichtbarkeit ohne zusätzlichen Aufwand.",
  },
];

const features = [
  { icon: PhoneCall, title: "24/7 KI-Anrufannahme", text: "Nimmt Anrufe rund um die Uhr auf Deutsch und Englisch entgegen, qualifiziert Klienten und bucht Termine automatisch. Kein Anliegen geht mehr verloren." },
  { icon: ShieldCheck, title: "DSGVO & Hosting in Österreich", text: "Alle Klientendaten werden verschlüsselt in Österreich verarbeitet, abgesichert per Auftragsverarbeitungsvertrag." },
  { icon: CalendarCheck, title: "Automatische Erinnerungen", text: "SMS- und E-Mail-Erinnerungen sowie Terminbestätigungen, synchron mit Ihrer Praxisverwaltung." },
  { icon: FileText, title: "KI-Dokumentation", text: "Erstellt Therapieberichte und Zusammenfassungen automatisch, direkt in der Praxissoftware." },
  { icon: Receipt, title: "Abrechnung & ICD-11", text: "Generiert Rechnungen, ICD-11 Kodierung und Krankenkassen-Abrechnung automatisch in Freudio." },
  { icon: Megaphone, title: "Automatisches Marketing", text: "Ein KI-Agent erstellt Social-Media-Posts und veröffentlicht sie zu optimalen Zeiten." },
];

const related = [
  { href: "/leistungen/voicebot", icon: PhoneCall, title: "Voicebot & KI-Telefonassistent", desc: "Nimmt Anrufe 24/7 entgegen, bucht Termine und qualifiziert Klientenanfragen." },
  { href: "/leistungen/n8n-automatisierung", icon: Network, title: "n8n Automatisierung", desc: "Verbindet Anrufe, Dokumente und Praxissoftware wie Freudio zu durchgängigen Abläufen." },
  { href: "/leistungen/ki-wissensdatenbank", icon: Brain, title: "KI Wissensdatenbank", desc: "Macht Ihr Praxiswissen für die KI nutzbar, DSGVO-konform per RAG." },
];

const transcript = [
  { who: "Anrufer", text: "Guten Tag, ich bräuchte einen Ersttermin bei Ihnen." },
  { who: "Anna", text: "Sehr gern. Donnerstag um 16:00 Uhr wäre frei, passt Ihnen das?" },
  { who: "Anrufer", text: "Ja, das passt." },
  { who: "Anna", text: "Erledigt. Sie erhalten die Bestätigung gleich per SMS." },
];

const waveHeights = [40, 70, 30, 90, 55, 75, 35, 85, 50, 65, 25, 80, 45, 70, 35, 60];

export default function Page() {
  return (
    <>
      <Script id="faq-psycho" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-psycho" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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
                    Psychotherapie, KI-Praxisassistent
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    KI Lösungen für <span className="text-primary">Psychotherapeuten</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Termin-Chaos, Dokumentenaufwand und Kommunikationsstress? Mit unserer KI-Lösung automatisieren Sie Ihre Praxisprozesse, effizient, sicher und DSGVO-konform. So gewinnen Sie bis zu 10 Stunden pro Woche zurück.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Beratungsgespräch</a>
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
                          <Phone className="w-5 h-5 text-primary" />
                        </div>
                        <span className="absolute inset-0 rounded-full border-2 border-primary/40 vb-ping" aria-hidden />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">Anna, KI-Praxisassistentin</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> Live im Gespräch, 00:42
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

          {/* STATS BAND */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-2 md:grid-cols-4 border-2 border-border rounded-2xl overflow-hidden bg-card">
                {stats.map(([v, l], i) => (
                  <div key={i} className="p-8 text-center border-b md:border-b-0 border-r last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r [&:nth-child(3)]:border-b-0 border-border">
                    <div className="text-4xl md:text-5xl font-bold text-primary">{v}</div>
                    <div className="text-sm text-muted-foreground mt-2">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WAS KI LEISTET */}
          <section className="section-spacing">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Kurz erklärt</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was KI in der psychotherapeutischen Praxis leistet</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Eine <strong className="text-foreground">KI-Lösung für Psychotherapeuten</strong> übernimmt die wiederkehrenden Aufgaben rund um Ihre Praxis: Sie nimmt Anrufe entgegen, bucht und verschiebt Termine, verarbeitet Dokumente und erstellt Berichte. Sie selbst gewinnen Zeit für das, was zählt, die Arbeit mit Ihren Klienten.</p>
                    <p>Im Zentrum steht die <strong className="text-foreground">KI-Anrufannahme</strong>: Ein KI-Telefonassistent ist rund um die Uhr erreichbar, qualifiziert Anliegen und bucht Termine direkt in Ihrer Praxissoftware. Das Telefon klingelt nicht mehr mitten in der Sitzung, und kein Anrufer landet in der Warteschleife.</p>
                    <p>Für Praxen im DACH-Raum ist eines entscheidend: <strong className="text-foreground">Datenschutz</strong>. Wir hosten alle Klientendaten verschlüsselt in Österreich, sichern alles per Auftragsverarbeitungsvertrag ab und arbeiten mit zertifizierten Cloud-Providern.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Praxisautomatisierung</Badge>
                    <Badge variant="secondary" className="rounded-full">Freudio-Integration</Badge>
                    <Badge variant="secondary" className="rounded-full">DSGVO</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Ihre KI-Praxis auf einen Blick</CardTitle>
                    <CardDescription>Was die Lösung für Ihre Praxis ausmacht.</CardDescription>
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
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Vorher und nachher</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Diese Probleme kennen Sie nur zu gut</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Jeden Tag dasselbe Theater. Zeit, die Sie lieber mit Ihren Klienten verbringen würden.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-border">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2.5">
                      <span className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center">
                        <AlertTriangle className="w-5 h-5 text-muted-foreground" />
                      </span>
                      Der Praxisalltag heute
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {probleme.map((p, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                          <AlertTriangle className="w-5 h-5 text-muted-foreground/60 mt-0.5 shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-2 border-primary/30 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2.5">
                      <span className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Check className="w-5 h-5 text-primary" />
                      </span>
                      Mit der KI Kanzlei
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {loesungen.map((l, i) => (
                        <li key={i} className="flex items-start gap-3 text-foreground leading-relaxed">
                          <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                          <span>{l}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* USE CASES */}
          <section className="section-spacing">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Anwendungsfälle</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ihre Lösung: digitale Praxisoptimierung</h2>
                <p className="text-lg text-muted-foreground">Wählen Sie einen Bereich, wir zeigen das passende Szenario und die typische Zeitersparnis.</p>
              </div>
              <Tabs defaultValue="anruf" className="w-full">
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
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h3 className="text-xl font-bold">{u.head}</h3>
                          <Badge variant="outline" className="rounded-full text-xs shrink-0 bg-primary/10 text-primary border-primary/20">
                            <Clock className="w-3.5 h-3.5 mr-1" />spart {u.savings}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{u.text}</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>

          {/* FEATURES BENTO */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-14">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Funktionen</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Was Ihre KI-Praxis übernimmt</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Vom ersten Klingeln bis zur fertigen Abrechnung, alles automatisch und nachvollziehbar protokolliert.</p>
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
          <section className="section-spacing">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen von Psychotherapeuten</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zur KI-Praxis</h2>
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
