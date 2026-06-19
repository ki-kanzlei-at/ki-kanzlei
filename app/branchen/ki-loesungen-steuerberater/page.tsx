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
import { Calculator, Receipt, Plug, ScanLine, FileText, FileCheck2, Database, MessageSquare, PhoneCall, CalendarClock, Brain, ShieldCheck, TrendingUp, Server, MapPin, Check, X, Network } from "lucide-react";
import { serviceLogos } from "@/lib/serviceLogos";

export const metadata: Metadata = {
  title: "KI für Steuerberater: DATEV-Automatisierung",
  description:
    "KI für Steuerberater: Belege per OCR erfassen, kontieren und automatisch in DATEV oder BMD buchen, auch ohne Schnittstelle. RPA-Buchhaltung, DSGVO-konform.",
  keywords:
    "KI Steuerberatung, KI Steuerberater, KI Buchhaltung, RPA DATEV, Belegerfassung KI, Kanzleisoftware, KI Steuerkanzlei, BMD Automatisierung",
  alternates: { canonical: "https://ki-kanzlei.at/branchen/ki-loesungen-steuerberater" },
};

const faqs = [
  {
    q: "Wie funktioniert die Anbindung an DATEV oder BMD, wenn es keine offene Schnittstelle gibt?",
    a: "Über RPA. Ein Software-Roboter bedient DATEV oder BMD genauso wie ein Mitarbeiter, also direkt in der gewohnten Oberfläche. So buchen wir Belege auch dann automatisiert ein, wenn keine offizielle API zur Verfügung steht. Wo eine Schnittstelle existiert, nutzen wir sie selbstverständlich bevorzugt.",
  },
  {
    q: "Wie zuverlässig erkennt die OCR Rechnungen und Belege?",
    a: "Sehr zuverlässig. Die KI liest Lieferant, Rechnungsdatum, Netto- und Bruttobetrag, USt-Satz und UID strukturiert aus, auch aus Fotos, PDFs und Scans gemischter Qualität. Unsichere Felder werden markiert und Ihrem Team zur kurzen Kontrolle vorgelegt, statt blind verbucht zu werden.",
  },
  {
    q: "Bleibt die fachliche Kontrolle über die Buchungen beim Steuerberater?",
    a: "Ja, vollständig. Die Automatisierung arbeitet nach Ihren Kontierungsregeln und legt strittige Fälle zur Freigabe vor. Sie behalten die Hoheit über jede Buchung, die KI übernimmt nur die wiederkehrende Fleißarbeit der Belegerfassung und Vorkontierung.",
  },
  {
    q: "Ist die Lösung DSGVO-konform und mit dem Berufsrecht vereinbar?",
    a: "Datenschutz steht bei uns an oberster Stelle. Alle Belege und Mandantendaten werden verschlüsselt auf Servern in Europa verarbeitet, ein Auftragsverarbeitungsvertrag ist Teil jeder Umsetzung. Die berufsrechtliche Verschwiegenheitspflicht bleibt dabei jederzeit gewahrt.",
  },
  {
    q: "Hilft die Automatisierung gegen Fachkräftemangel und Saisonspitzen?",
    a: "Genau dafür ist sie gemacht. Die RPA-Bots erfassen und buchen Belege rund um die Uhr und skalieren in den Stoßzeiten rund um Jahresabschluss und Umsatzsteuervoranmeldung mühelos mit. Ihr Team wird von der Tipparbeit entlastet und kann sich auf Beratung und Bilanzierung konzentrieren.",
  },
  {
    q: "Können Mandantenfragen zu Fristen und Unterlagen automatisch beantwortet werden?",
    a: "Ja. Eine Mandanten-Wissensdatenbank auf RAG-Basis beantwortet wiederkehrende Fragen zu Fristen, benötigten Unterlagen und Abläufen rund um die Uhr, per Chatbot oder auf Wunsch auch telefonisch über unsere Voicebot-Plattform fonio.ai. Komplexe Fälle werden sauber an Ihr Team übergeben.",
  },
  {
    q: "Wie lange dauert die Einrichtung?",
    a: "In der Regel rund 2 Wochen. Nach einem kurzen Erstgespräch bilden wir Ihre Kontierungsregeln ab, richten OCR und die Anbindung an DATEV oder BMD ein, testen mit echten Belegen und gehen dann live, mit laufender Optimierung danach.",
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
  name: "KI Lösungen für Steuerberater",
  serviceType: "KI für Steuerberater, RPA Belegerfassung, DATEV und BMD Automatisierung",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description: "KI Lösungen für Steuerberater und Steuerkanzleien im DACH-Raum: RPA-Belegerfassung per OCR, automatische Kontierung und Buchung in DATEV und BMD auch ohne Schnittstelle, Mandanten-Wissensdatenbank und DSGVO-konforme Mandantenkommunikation.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const problems = [
  "Belege und Rechnungen werden manuell abgetippt und einzeln kontiert",
  "DATEV oder BMD bietet für Ihre Vorsysteme keine offene Schnittstelle",
  "Mandanten reichen Belege bunt gemischt als Foto, PDF und Papier ein",
  "Wiederkehrende Mandantenfragen zu Fristen und Unterlagen binden das Team",
  "Jahresabschluss und USt-Voranmeldung sorgen für überlastende Saisonspitzen",
  "Fachkräftemangel: jede Stunde Tipparbeit fehlt bei der echten Beratung",
];

const solutions = [
  "RPA-Bots erfassen Belege per OCR, kontieren sie und buchen sie automatisch",
  "Wir binden DATEV und BMD direkt in der Oberfläche an, auch ohne offene Schnittstelle",
  "Egal ob Foto, PDF oder Scan: die KI liest Betrag, Datum, USt und Lieferant zuverlässig aus",
  "Eine Mandanten-Wissensdatenbank beantwortet Fristen- und Unterlagenfragen automatisch",
  "Die Automatisierung skaliert mit, gerade in den Stoßzeiten rund um Abschluss und UVA",
  "Ihr Team gewinnt Zeit zurück für Beratung, Bilanzanalyse und Mandantenbindung",
];

const useCases = [
  {
    value: "belege",
    label: "Belegerfassung",
    icon: Receipt,
    head: "RPA-Belegerfassung & automatische Buchung",
    text: "Software-Roboter ziehen eingehende Belege automatisch aus Postfach, Upload-Portal oder Scanner, lesen sie per OCR aus, kontieren sie nach Ihren Regeln und buchen sie ein. Aus der täglichen Tipparbeit wird ein überwachter Prozess, bei dem nur noch Sonderfälle auf Ihrem Tisch landen.",
  },
  {
    value: "datev",
    label: "DATEV/BMD",
    icon: Plug,
    head: "Anbindung an DATEV & BMD ohne Schnittstelle",
    text: "Wo eine offizielle Schnittstelle fehlt, bedient ein RPA-Bot DATEV oder BMD genau wie eine Mitarbeiterin, direkt in der gewohnten Oberfläche. So fließen Belege, Buchungen und Stammdaten automatisiert in Ihr Kanzleisystem, ohne dass Sie Software wechseln müssen.",
  },
  {
    value: "wissen",
    label: "Wissensdatenbank",
    icon: Database,
    head: "Mandanten-Wissensdatenbank (RAG)",
    text: "Beantwortet wiederkehrende Fragen zu Abgabefristen, benötigten Unterlagen und Abläufen automatisch. Mandanten erhalten rund um die Uhr verlässliche Auskünfte, Ihr Team verbringt weniger Zeit mit denselben Rückfragen, vollständig DSGVO-konform.",
  },
  {
    value: "chatbot",
    label: "Mandanten-Chat",
    icon: MessageSquare,
    head: "Mandanten-Chatbot auf der Kanzlei-Website",
    text: "Nimmt Anliegen direkt auf der Website auf, sammelt fehlende Unterlagen strukturiert ein und qualifiziert neue Mandantenanfragen vor. So kommen Anfragen bereits sortiert und vollständig in Ihrer Kanzlei an, statt verstreut über Telefon und Postfach.",
  },
  {
    value: "voice",
    label: "Telefon",
    icon: PhoneCall,
    head: "KI-Telefonassistent für Mandantenanfragen",
    text: "Über die Voicebot-Plattform fonio.ai nimmt ein KI-Assistent Anrufe entgegen, beantwortet Standardfragen zu Fristen und Belegen und leitet komplexe Anliegen geordnet an Ihr Team weiter. So bleibt die Kanzlei auch in Stoßzeiten erreichbar.",
  },
  {
    value: "fristen",
    label: "Fristen",
    icon: CalendarClock,
    head: "Automatisierte Fristen & Reminder (n8n)",
    text: "Workflows in n8n überwachen Fristen für UVA, Jahresabschluss und Meldungen, erinnern Mandanten automatisch an fehlende Unterlagen und benachrichtigen Ihr Team rechtzeitig. So geht keine Frist mehr in der Belegflut unter.",
  },
];

const features = [
  { icon: Receipt, title: "RPA-Belegerfassung & Buchung", text: "Eingehende Belege werden automatisch ausgelesen, nach Ihren Regeln kontiert und in DATEV oder BMD gebucht. Aus stundenlanger Tipparbeit wird ein überwachter Prozess, der auch Saisonspitzen mühelos abfedert." },
  { icon: Plug, title: "DATEV & BMD ohne Schnittstelle", text: "Per RPA binden wir Ihr Kanzleisystem direkt in der Oberfläche an, auch ohne offizielle API, ganz ohne doppelte Erfassung oder Softwarewechsel." },
  { icon: ScanLine, title: "Zuverlässige OCR-Erkennung", text: "Lieferant, Datum, Netto, Brutto, USt-Satz und UID werden strukturiert aus Foto, PDF und Scan ausgelesen. Unsichere Felder gehen zur kurzen Kontrolle an Ihr Team." },
  { icon: Brain, title: "Mandanten-Wissensdatenbank", text: "Fristen, Unterlagenlisten und Kanzlei-FAQs sekundenschnell abrufbar, per RAG und DSGVO-konform, für Team und Mandanten." },
  { icon: ShieldCheck, title: "DSGVO und EU-Hosting", text: "Belege und Mandantendaten werden verschlüsselt auf Servern in Europa verarbeitet, mit Auftragsverarbeitungsvertrag und gewahrter Verschwiegenheitspflicht." },
  { icon: TrendingUp, title: "Bis zu 80% Entlastung", text: "Kanzleien reduzieren die manuelle Belegerfassung typischerweise um bis zu 80 Prozent. Die gewonnene Zeit fließt zurück in Beratung und Bilanzierung." },
];

const stats = [
  ["80%", "weniger manuelle Belegerfassung"],
  ["0", "Schnittstelle zu DATEV/BMD nötig"],
  ["3x", "schnellere Mandantenbuchhaltung"],
  ["2 Wo.", "vom Erstgespräch bis Go-Live"],
];

const blick = [
  ["Einsatz", "Belege, Kontierung, Buchung"],
  ["Anbindung", "DATEV & BMD, auch ohne API"],
  ["Erkennung", "OCR für Rechnungen & Belege"],
  ["Entlastung", "bis zu 80% weniger Handarbeit"],
  ["Datenschutz", "DSGVO, EU-Hosting, AVV"],
  ["Go-Live", "in rund 2 Wochen"],
];

const related = [
  { href: "/leistungen/rpa", icon: Receipt, title: "RPA & Belegautomatisierung", desc: "Software-Roboter erfassen Belege per OCR, kontieren sie und buchen sie automatisch in DATEV oder BMD, auch ohne Schnittstelle." },
  { href: "/leistungen/ki-wissensdatenbank", icon: Brain, title: "KI Wissensdatenbank", desc: "Fristen, Mandantenunterlagen und Kanzlei-FAQs sekundenschnell abrufbar, per RAG und DSGVO-konform." },
  { href: "/leistungen/n8n-automatisierung", icon: Network, title: "n8n Automatisierung", desc: "Verbindet Fristenkalender, Reminder und Mandantenanfragen automatisch mit Ihren Kanzleisystemen." },
];

const steps = [
  { label: "Beleg erkannt (OCR)", value: "Eingangsrechnung.pdf", icon: ScanLine },
  { label: "Betrag & USt ausgelesen", value: "1.428,00 €, 20% USt", icon: FileText },
  { label: "Automatisch kontiert", value: "Kto. 5400, Wareneinkauf", icon: Calculator },
  { label: "In BMD/DATEV gebucht", value: "Beleg-Nr. 2026-0473", icon: Receipt },
];

export default function Page() {
  return (
    <>
      <Script id="faq-steuerberater" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-steuerberater" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <style>{`
        @keyframes stbPing { 0% { transform: scale(.9); opacity:.5; } 70%,100% { transform: scale(1.6); opacity:0; } }
        .stb-ping { animation: stbPing 2s ease-out infinite; }
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
                    KI für Steuerberater & Steuerkanzleien
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    KI Lösungen für <span className="text-primary">Steuerberater</span> und Steuerkanzleien
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Von der automatischen Belegerfassung per OCR bis zur Buchung direkt in DATEV oder BMD, auch ohne offene Schnittstelle: RPA-Bots übernehmen die repetitive Buchhaltung, damit Ihr Team wieder Zeit für die Beratung gewinnt.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Analysegespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="/leistungen/rpa">RPA-Belegautomatisierung ansehen</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-primary" /> EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Beleg processing card */}
                <Card className="relative border-2 shadow-xl shadow-primary/5">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                          <Receipt className="w-5 h-5 text-primary" />
                        </div>
                        <span className="absolute inset-0 rounded-full border-2 border-primary/40 stb-ping" aria-hidden />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">RPA-Belegerfassung</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> Live, Verarbeitung läuft
                        </div>
                      </div>
                      <span className="ml-auto text-[10px] uppercase tracking-wider text-muted-foreground font-medium">EU-Server</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-3">
                    {steps.map((s, i) => {
                      const Icon = s.icon;
                      return (
                        <div key={i} className="flex items-center gap-3 rounded-xl border border-border bg-muted/40 px-3 py-2.5">
                          <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <Icon className="w-4 h-4 text-primary" />
                          </span>
                          <div className="min-w-0">
                            <div className="text-xs text-muted-foreground">{s.label}</div>
                            <div className="text-sm font-medium text-foreground truncate">{s.value}</div>
                          </div>
                          <Check className="w-4 h-4 text-green-500 ml-auto shrink-0" />
                        </div>
                      );
                    })}
                    <div className="flex items-center justify-between pt-2 border-t border-border text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5"><FileCheck2 className="w-4 h-4 text-primary" /> Status: verbucht</span>
                      <span className="flex items-center gap-1.5"><Plug className="w-4 h-4 text-primary" /> ohne Schnittstelle</span>
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

          {/* WAS LEISTET KI IN DER STEUERKANZLEI */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">KI in der Steuerkanzlei</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was KI in der Steuerkanzlei wirklich leistet</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Künstliche Intelligenz in der Steuerkanzlei ersetzt nicht die fachliche Beurteilung. Sie übernimmt die repetitive Vorarbeit: die <strong className="text-foreground">Belegerfassung</strong>, die Kontierung, die Buchung und die wiederkehrende Mandantenkommunikation.</p>
                    <p>Im Zentrum steht die <strong className="text-foreground">RPA-Belegautomatisierung</strong>. OCR liest jeden Beleg aus, ein Software-Roboter kontiert ihn nach Ihren Regeln und bucht ihn direkt in DATEV oder BMD, auch wenn keine offene Schnittstelle existiert.</p>
                    <p>Für Kanzleien im DACH-Raum entscheidend: <strong className="text-foreground">Datenschutz und Berufsrecht</strong>. Jede Lösung läuft DSGVO-konform mit Datenhaltung in Europa, die Verschwiegenheitspflicht bleibt jederzeit gewahrt.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">RPA-Belegerfassung</Badge>
                    <Badge variant="secondary" className="rounded-full">DATEV & BMD</Badge>
                    <Badge variant="secondary" className="rounded-full">Mandantenkommunikation</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Auf einen Blick</CardTitle>
                    <CardDescription>Was KI in Ihrer Kanzlei übernimmt.</CardDescription>
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Die Belegflut und Tipparbeit, automatisiert</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Fundierte Beratung braucht freie Köpfe. Wir nehmen Ihrem Team die repetitive Belegerfassung und Buchung ab, damit wieder Zeit für die Mandanten bleibt.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-border">
                  <CardHeader>
                    <CardTitle className="text-xl">Der Kanzleialltag heute</CardTitle>
                    <CardDescription>Was Buchhaltung und Team täglich bremst.</CardDescription>
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
                    <CardDescription>So läuft die Buchhaltung ab Woche 2.</CardDescription>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Moderne KI-Lösungen für Ihre Kanzlei</h2>
                <p className="text-lg text-muted-foreground">Weniger Tipparbeit, mehr Zeit für Beratung. Wählen Sie den Bereich, der Ihre Kanzlei am meisten entlastet.</p>
              </div>
              <Tabs defaultValue="belege" className="w-full">
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Gebaut für den Kanzleialltag</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Sicher, anschlussfähig und spürbar entlastend, vom eingescannten Beleg bis zur fertigen Buchung.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen aus der Steuerkanzlei</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zur Steuerkanzlei</h2>
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
