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
import { Truck, ShieldCheck, Server, MapPin, ScanLine, FileText, Check, X, MessageSquare, Bell, Plug, AlertTriangle, Mic, TrendingUp, Mail, Network, Boxes } from "lucide-react";
import { serviceLogos } from "@/lib/serviceLogos";

export const metadata: Metadata = {
  title: "KI für Logistik & Spedition: Dokumente & Tracking",
  description:
    "KI für Logistik und Spedition: automatische Erfassung von Frachtdokumenten per Computer Vision und ein Tracking-Chatbot für Sendungsanfragen. DSGVO-konform und TMS-angebunden.",
  keywords:
    "KI Logistik, KI Spedition, Frachtdokumente KI, Tracking Chatbot, Disposition KI, Lieferketten KI, OCR Frachtbrief, TMS Automatisierung",
  alternates: { canonical: "https://ki-kanzlei.at/branchen/ki-loesungen-logistik" },
};

const faqs = [
  {
    q: "Welche Frachtdokumente kann die KI automatisch erfassen?",
    a: "Die KI liest Lieferscheine, Frachtbriefe und CMR-Dokumente, Rechnungen, Zollpapiere und Packlisten. Per Computer Vision und OCR extrahiert sie strukturiert die relevanten Felder wie Sendungsnummer, Empfänger, Gewicht und Positionen, auch von Fotos, Scans oder PDF-Anhängen. Selten genutzte Sonderformate trainieren wir gezielt nach.",
  },
  {
    q: "Lässt sich die Lösung an unser TMS oder ERP anbinden?",
    a: "In aller Regel ja. Wir binden die KI über moderne Schnittstellen und n8n so an, dass erfasste Dokumente und Sendungsdaten direkt in Ihr Transport-Management-System oder ERP fließen. Die technische Machbarkeit prüfen wir individuell in einem kostenlosen Analysegespräch.",
  },
  {
    q: "Wie zuverlässig erkennt die KI die Daten auf einem Frachtbrief?",
    a: "Bei sauberen Dokumenten liegt die Erkennungsrate sehr hoch. Unsicher gelesene Felder kennzeichnet die KI und legt sie Ihrem Team zur kurzen Freigabe vor, statt einfach zu raten. So bleibt die Datenqualität im TMS hoch und Fehlbuchungen sinken deutlich.",
  },
  {
    q: "Was kann der Tracking-Chatbot konkret beantworten?",
    a: "Der Chatbot beantwortet Sendungsanfragen rund um die Uhr: Wo ist meine Sendung, wann kommt sie an, welcher Status liegt vor. Er zieht den aktuellen Stand aus Ihrem TMS, gibt Auskunft zu voraussichtlichen Lieferzeiten und entlastet so die Disposition von wiederkehrenden Rückfragen.",
  },
  {
    q: "Hilft die Lösung auch bei akutem Personalmangel in der Disposition?",
    a: "Absolut. Die KI übernimmt die repetitive Dokumentenerfassung und die Beantwortung von Standard-Sendungsanfragen vollständig. Dadurch bleibt Ihre Disposition auch mit weniger Personal handlungsfähig und kann sich auf Tourenplanung und Ausnahmen konzentrieren.",
  },
  {
    q: "Wie steht es um Datenschutz und DSGVO?",
    a: "Datenschutz steht bei uns an oberster Stelle. Alle Lösungen laufen auf DSGVO-konformen Servern in Europa, die Verarbeitung der Dokumente und Sendungsdaten erfolgt verschlüsselt und ein Auftragsverarbeitungsvertrag ist Teil jeder Umsetzung. Auf Wunsch betreiben wir die KI auch vollständig in Ihrer eigenen Infrastruktur.",
  },
  {
    q: "Wie lange dauert die Einrichtung?",
    a: "In der Regel rund 2 bis 4 Wochen. Nach einem kurzen Erstgespräch konfigurieren wir die Dokumentenerkennung, den Tracking-Chatbot und die Anbindung an Ihr TMS, testen mit echten Frachtbelegen und Anfragen und gehen dann live, mit laufender Optimierung danach.",
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
  name: "KI Lösungen für Logistik und Spedition",
  serviceType: "KI für Logistik, Frachtdokumenten-Erfassung, Tracking-Chatbot, TMS-Automatisierung",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description: "KI Lösungen für Logistik und Spedition im DACH-Raum: automatische Erfassung von Frachtdokumenten per Computer Vision, Tracking-Chatbot für Sendungsanfragen und DSGVO-konforme Anbindung ans TMS und ERP.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const problems = [
  "Frachtbriefe, Lieferscheine und Rechnungen werden mühsam von Hand ins TMS getippt",
  "Tippfehler bei Sendungsnummern und Gewichten führen zu Fehlbuchungen und Reklamationen",
  "Die Disposition versinkt in Rückfragen, wo eine bestimmte Sendung gerade steckt",
  "Statusmeldungen an Kunden gehen unter oder kommen zu spät",
  "E-Mail-Postfach voll mit Transportanfragen, die alle einzeln beantwortet werden müssen",
  "Fahrer- und Kundenanrufe binden Personal, das eigentlich Touren planen sollte",
];

const solutions = [
  "Die KI liest Frachtbriefe und Lieferscheine automatisch und bucht die Daten ins TMS",
  "Computer Vision extrahiert Sendungsnummer, Empfänger und Gewicht zuverlässig statt fehleranfällig per Hand",
  "Der Tracking-Chatbot beantwortet Wo-ist-meine-Sendung-Anfragen rund um die Uhr",
  "Statusmeldungen und Benachrichtigungen werden automatisch ausgelöst und versendet",
  "Eingehende Transportanfragen per E-Mail werden vorqualifiziert und mit Antwortentwürfen beantwortet",
  "Ein Voicebot nimmt Fahrer- und Kundenanrufe entgegen, DSGVO-konform mit EU-Hosting",
];

const useCases = [
  {
    value: "dokumente",
    label: "Dokumente",
    icon: ScanLine,
    head: "Automatische Frachtdokumenten-Erfassung",
    text: "Lieferscheine, Frachtbriefe, CMR und Rechnungen werden per Computer Vision und OCR gelesen. Die KI extrahiert Sendungsnummer, Empfänger, Gewicht und Positionen und bucht sie direkt ins TMS, ganz ohne Abtippen.",
  },
  {
    value: "tracking",
    label: "Tracking",
    icon: MessageSquare,
    head: "Tracking-Chatbot für Sendungsanfragen",
    text: "Der Chatbot beantwortet Wo-ist-meine-Sendung-Anfragen rund um die Uhr, zieht den aktuellen Status aus Ihrem TMS und nennt voraussichtliche Lieferzeiten. So bleibt die Disposition frei von repetitiven Rückfragen.",
  },
  {
    value: "status",
    label: "Statusmeldungen",
    icon: Bell,
    head: "Automatische Statusmeldungen",
    text: "Bei jedem relevanten Ereignis, von der Abholung bis zur Zustellung, löst die KI automatisch die passende Benachrichtigung an Kunden und Partner aus. Keine vergessenen Updates, keine manuellen Sammelmails mehr.",
  },
  {
    value: "anfragen",
    label: "Anfragen",
    icon: Mail,
    head: "Anfrage- und E-Mail-Automatisierung",
    text: "Eingehende Transport- und Preisanfragen werden automatisch erfasst, vorqualifiziert und mit passgenauen Antwortentwürfen zur schnellen Freigabe vorbereitet. Ihr Team antwortet in Minuten statt Stunden.",
  },
  {
    value: "voicebot",
    label: "Voicebot",
    icon: Mic,
    head: "Voicebot für Fahrer- und Kundenanrufe",
    text: "Ein KI-Telefonassistent nimmt Anrufe von Fahrern und Kunden entgegen, gibt Auskunft zu Sendungen und Terminen und leitet komplexe Fälle gezielt weiter. So bleibt die Leitung frei und die Disposition ungestört.",
  },
  {
    value: "anbindung",
    label: "TMS-Anbindung",
    icon: Network,
    head: "Anbindung ans TMS und ERP via n8n",
    text: "Über n8n verbinden wir Dokumentenerfassung, Tracking und Benachrichtigungen automatisch mit Ihrem Transport-Management-System und ERP. Daten fließen in beide Richtungen, ganz ohne doppelte Pflege.",
  },
];

const features = [
  { icon: ScanLine, title: "Frachtdokumente automatisch erfasst", text: "Lieferscheine, Frachtbriefe, CMR und Rechnungen werden per Computer Vision und OCR gelesen. Sendungsnummer, Empfänger und Gewicht landen ohne Abtippen strukturiert im TMS." },
  { icon: Plug, title: "Direkt am TMS und ERP", text: "Erfasste Daten und Sendungsstände fließen über moderne Schnittstellen und n8n direkt in Ihr bestehendes Transport-Management-System, ganz ohne doppelte Erfassung." },
  { icon: MessageSquare, title: "Tracking rund um die Uhr", text: "Der Tracking-Chatbot beantwortet Sendungsanfragen jederzeit, zieht den Live-Status aus dem TMS und entlastet die Disposition von wiederkehrenden Rückfragen." },
  { icon: AlertTriangle, title: "Sichere Datenqualität", text: "Unsicher gelesene Felder kennzeichnet die KI und legt sie zur kurzen Freigabe vor, statt zu raten. So sinken Fehlbuchungen und Reklamationen spürbar." },
  { icon: ShieldCheck, title: "DSGVO und EU-Hosting", text: "Alle Dokumente und Sendungsdaten werden verschlüsselt auf Servern in Europa verarbeitet, mit Auftragsverarbeitungsvertrag. Auf Wunsch auch in Ihrer eigenen Infrastruktur." },
  { icon: TrendingUp, title: "Spürbare Entlastung", text: "Speditionen sparen pro Woche typischerweise viele Stunden Erfassungs- und Telefonzeit, die zurück in Tourenplanung und Kundenbetreuung fließen." },
];

const stats = [
  ["90%", "weniger manuelle Dokumentenerfassung"],
  ["24/7", "Tracking-Auskunft ohne Wartezeit"],
  ["0", "verlorene Sendungsanfragen"],
  ["2-4 Wo.", "vom Erstgespräch bis Go-Live"],
];

const blick = [
  ["Einsatz", "Dokumente, Tracking, Anfragen"],
  ["Erfassung", "Frachtbrief, CMR, Lieferschein"],
  ["Erreichbarkeit", "24/7 Tracking-Chatbot"],
  ["Anbindung", "TMS und ERP via n8n"],
  ["Datenschutz", "DSGVO, EU-Hosting, AVV"],
  ["Go-Live", "in rund 2 bis 4 Wochen"],
];

const related = [
  { href: "/leistungen/computer-vision", icon: ScanLine, title: "Computer Vision & OCR", desc: "Liest Frachtbriefe, CMR, Lieferscheine und Rechnungen automatisch aus und extrahiert die Daten strukturiert fürs TMS." },
  { href: "/leistungen/n8n-automatisierung", icon: Network, title: "n8n Automatisierung", desc: "Verbindet Dokumentenerfassung, Tracking und Statusmeldungen automatisch mit Ihrem TMS und ERP." },
  { href: "/leistungen/voicebot", icon: Mic, title: "Voicebot & KI-Telefonassistent", desc: "Nimmt Fahrer- und Kundenanrufe entgegen, gibt Auskunft zu Sendungen und leitet komplexe Fälle weiter." },
];

const extracted = [
  ["Sendungsnummer", "AT-2026-884219"],
  ["Empfänger", "Logistikzentrum Linz"],
  ["Gewicht", "1.240 kg"],
  ["Positionen", "8 Paletten"],
];

export default function Page() {
  return (
    <>
      <Script id="faq-logistik" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-logistik" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <style>{`
        @keyframes logistikScan { 0% { top: 0; opacity: .9; } 50% { opacity: .4; } 100% { top: 100%; opacity: .9; } }
        .logistik-scan { animation: logistikScan 2.4s ease-in-out infinite; }
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
                    KI für Logistik & Spedition
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    KI Lösungen für <span className="text-primary">Logistik</span> und Spedition
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Von der automatischen Erfassung Ihrer Frachtdokumente per Computer Vision bis zum Tracking-Chatbot für Sendungsanfragen: Wir entlasten Ihre Disposition vom Abtippen und von Rückfragen und schaffen wieder Zeit für die Touren.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Analysegespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#use-cases">Lösungen ansehen</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-primary" /> EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Document scan card */}
                <Card className="relative border-2 shadow-xl shadow-primary/5">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">Frachtbrief wird erfasst</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> Computer Vision aktiv
                        </div>
                      </div>
                      <span className="ml-auto text-[10px] uppercase tracking-wider text-muted-foreground font-medium">EU-Server</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-4">
                    <div className="relative overflow-hidden rounded-xl border-2 border-dashed border-primary/30 bg-muted/40 p-4">
                      <span className="absolute left-0 right-0 h-0.5 bg-primary/60 logistik-scan" aria-hidden />
                      <div className="flex items-center gap-2 mb-3">
                        <ScanLine className="w-4 h-4 text-primary" />
                        <span className="text-xs font-medium text-foreground">Lieferschein / CMR</span>
                      </div>
                      <div className="space-y-1.5">
                        <div className="h-2 w-3/4 rounded bg-foreground/15" />
                        <div className="h-2 w-2/3 rounded bg-foreground/15" />
                        <div className="h-2 w-1/2 rounded bg-foreground/15" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      {extracted.map(([label, value]) => (
                        <div key={label} className="flex items-center justify-between py-1.5 text-sm">
                          <span className="text-muted-foreground">{label}</span>
                          <span className="font-medium text-foreground">{value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-border text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary" /> Daten extrahiert</span>
                      <span className="flex items-center gap-1.5"><Boxes className="w-4 h-4 text-primary" /> ins TMS gebucht</span>
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

          {/* WAS LEISTET KI IN DER LOGISTIK */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">KI in der Spedition</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was KI in der Logistik wirklich leistet</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Künstliche Intelligenz in der Logistik bedeutet nicht, die Tourenplanung aus der Hand zu geben. Sie entlastet alles rund um die Sendung: die <strong className="text-foreground">Erfassung der Frachtdokumente</strong>, die Auskunft zu Sendungsständen, die Statusmeldungen und die Beantwortung wiederkehrender Anfragen.</p>
                    <p>Im Zentrum steht die <strong className="text-foreground">automatische Dokumentenerfassung</strong>. Per Computer Vision liest die KI Lieferscheine, Frachtbriefe und Rechnungen, extrahiert Sendungsnummer, Empfänger und Gewicht und bucht sie direkt ins TMS, sodass Ihre Disposition nicht mehr abtippen muss.</p>
                    <p>Für Speditionen im DACH-Raum ist dabei eines entscheidend: der <strong className="text-foreground">Datenschutz</strong>. Wir bauen jede Lösung DSGVO-konform, mit Datenhaltung in Europa und auf Wunsch vollständig in Ihrer eigenen Infrastruktur.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Frachtdokumenten-Erfassung</Badge>
                    <Badge variant="secondary" className="rounded-full">Tracking-Chatbot</Badge>
                    <Badge variant="secondary" className="rounded-full">TMS-Automatisierung</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Auf einen Blick</CardTitle>
                    <CardDescription>Was KI in Ihrer Spedition übernimmt.</CardDescription>
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Der Papierkram in der Disposition, gelöst</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Effiziente Logistik braucht Fokus auf die Touren. Wir nehmen Ihrer Disposition das Abtippen und die Rückfragen ab, damit wieder Zeit für die Planung bleibt.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-border">
                  <CardHeader>
                    <CardTitle className="text-xl">Der Speditionsalltag heute</CardTitle>
                    <CardDescription>Was Disposition und Team täglich bremst.</CardDescription>
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
                    <CardDescription>So sieht die Disposition ab Woche 4 aus.</CardDescription>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Moderne KI-Lösungen für Ihre Spedition</h2>
                <p className="text-lg text-muted-foreground">Weniger Abtippen, mehr Zeit für die Touren. Wählen Sie den Bereich, der Sie am meisten entlastet.</p>
              </div>
              <Tabs defaultValue="dokumente" className="w-full">
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Gebaut für den Speditionsalltag</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Sicher, anschlussfähig und spürbar entlastend, vom eingehenden Frachtbrief bis zur zugestellten Sendung.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen aus der Logistik</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zur Spedition</h2>
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
