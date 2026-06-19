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
import { Stethoscope, ShieldCheck, Server, MapPin, Phone, PhoneCall, CalendarCheck, Activity, Check, X, UserPlus, MessageSquare, Database, Repeat, Megaphone, Clock, Plug, AlertTriangle, Mic, TrendingUp, Brain, Network } from "lucide-react";
import { serviceLogos } from "@/lib/serviceLogos";

export const metadata: Metadata = {
  title: "KI für Arztpraxen: Telefonassistent & Praxissoftware",
  description:
    "KI für Arztpraxen: ein KI-Telefonassistent nimmt Anrufe an und bucht Termine, Spracherkennung übernimmt die Dokumentation. DSGVO-konform und spürbar entlastend.",
  keywords:
    "KI Arztpraxis, KI für Ärzte, Praxissoftware, KI Telefonassistent Arztpraxis, KI Spracherkennung Arzt, KI Dokumentation, Terminbuchung Praxis, KI Chatbot Arztpraxis, Patientenkommunikation KI",
  alternates: { canonical: "https://ki-kanzlei.at/branchen/ki-loesungen-aerzte" },
};

const faqs = [
  {
    q: "Ist die Lösung mit meinem bestehenden Praxissystem kompatibel?",
    a: "In aller Regel ja. Wir binden die KI über moderne Schnittstellen so an, dass Termine und Daten direkt in Ihr bestehendes Verwaltungssystem fließen. Die technische Machbarkeit prüfen wir individuell in einem kostenlosen Analysegespräch.",
  },
  {
    q: "Wie werden ärztliche Verschwiegenheit und DSGVO gewahrt?",
    a: "Datenschutz steht bei uns an oberster Stelle. Alle Lösungen laufen auf DSGVO-konformen Servern in Europa, die Sprachverarbeitung erfolgt verschlüsselt und wir stellen sicher, dass alle Einwilligungen rechtssicher eingeholt und dokumentiert werden. Ein Auftragsverarbeitungsvertrag ist Teil jeder Umsetzung.",
  },
  {
    q: "Kann die KI auch Rezept- und Befundanfragen bearbeiten?",
    a: "Ja. Der KI-Anfrage-Manager nimmt vordefinierte Anfragen entgegen, gleicht die notwendigen Daten ab und bereitet Antwortentwürfe vor, die Ihr Personal final medizinisch freigibt. So bleibt die ärztliche Kontrolle jederzeit erhalten.",
  },
  {
    q: "Hilft die Lösung auch bei akutem Personalmangel?",
    a: "Absolut. Die KI übernimmt die repetitive Erstkommunikation am Telefon vollständig. Dadurch bleibt die Ordination auch mit weniger Personal am Empfang voll erreichbar und Ihre Patienten landen nicht in der Warteschleife.",
  },
  {
    q: "Was passiert, wenn die KI einen Notfall am Telefon erkennt?",
    a: "Die KI ist darauf trainiert, akute Notfallsituationen sofort zu erkennen. In solchen Fällen wird der Anruf priorisiert an den Notruf 144 verwiesen oder direkt zu einer Mitarbeiterin durchgestellt. Sicherheit geht hier immer vor.",
  },
  {
    q: "Wie viel Zeit spart unsere Praxis konkret?",
    a: "Ordinationen, die unseren KI-Empfang einsetzen, entlasten ihr Team typischerweise um 12 bis 18 Stunden pro Woche. Diese Zeit fließt zurück in die Betreuung der Patienten vor Ort statt in repetitive Telefonate und Zettelwirtschaft.",
  },
  {
    q: "Klingt der KI-Telefonassistent wirklich menschlich?",
    a: "Ja. Über unsere Voicebot-Plattform fonio.ai spricht der Assistent natürlich und ruhig, mit österreichischer Sprachfärbung sowie passenden Pausen und Betonungen. Viele Anrufer merken nicht, dass sie mit einer KI sprechen. Auf Wunsch weisen wir transparent auf den KI-Einsatz hin.",
  },
  {
    q: "Wie lange dauert die Einrichtung?",
    a: "In der Regel rund 2 Wochen. Nach einem kurzen Erstgespräch konfigurieren wir Stimme, Wissen, Eskalationslogik und Anbindung an Ihr Praxissystem, testen mit echten Anrufszenarien und gehen dann live, mit laufender Optimierung danach.",
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
  name: "KI Lösungen für Arztpraxen",
  serviceType: "KI für Arztpraxen, KI-Telefonassistent, Terminmanagement",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description: "KI Lösungen für Arztpraxen und Fachärzte im DACH-Raum: 24/7 KI-Telefonassistent, automatische Terminvergabe, Patienten-Triage und DSGVO-konforme Anfragebearbeitung.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const problems = [
  "Dauerbesetztes Telefon und Patienten, die in der Warteschleife hängen",
  "Personal gebunden durch repetitive Telefonate zur Terminvergabe",
  "Terminbuchung nur zu Kernzeiten, abends und am Wochenende niemand erreichbar",
  "Postfach voll mit Anfragen zu Rezepten, Befunden und Öffnungszeiten",
  "Telefonnotizen müssen mühsam ins System übertragen werden",
  "Sorge um die Patientendaten bremst jede Automatisierung aus",
];

const solutions = [
  "Der KI-Telefonassistent nimmt jeden Anruf parallel entgegen, ganz ohne Warteschleife",
  "Termine werden automatisch vergeben, Ihr Team bleibt bei den Patienten",
  "Patienten buchen rund um die Uhr, auch abends und am Wochenende",
  "Der KI-Anfrage-Manager erstellt fertige Antwortvorschläge zur Freigabe",
  "Gesprächsergebnisse landen strukturiert und protokolliert im Praxissystem",
  "DSGVO-konform mit EU-Hosting, die ärztliche Verschwiegenheit bleibt gewahrt",
];

const useCases = [
  {
    value: "empfang",
    label: "KI-Empfang",
    icon: PhoneCall,
    head: "KI-Empfangs-Assistent, 24/7",
    text: "Nimmt alle Anrufe entgegen, auch wenn alle Leitungen besetzt sind, bucht Termine direkt in Ihr Praxissystem und gibt Auskunft zu Öffnungszeiten. So bleibt die Ordination erreichbar, ohne dass die Rezeption im Dauerstress ist.",
  },
  {
    value: "triage",
    label: "Triage",
    icon: UserPlus,
    head: "Smarte Patienten-Triage",
    text: "Qualifiziert das Anliegen schon am Telefon vor, erkennt dringende Fälle, fragt relevante Symptome ab und stellt sicher, dass jeder Patient den passenden Zeitslot erhält.",
  },
  {
    value: "anfragen",
    label: "Anfragen",
    icon: MessageSquare,
    head: "KI-Anfrage-Manager",
    text: "Automatisiert die Beantwortung von E-Mail-Anfragen zu Befunden, Rezeptwünschen oder Terminen und erstellt passgenaue Antwortvorschläge zur schnellen Freigabe durch Ihr Personal.",
  },
  {
    value: "wissen",
    label: "Wissensbasis",
    icon: Database,
    head: "Ordinations-Wissensbasis (RAG)",
    text: "Greift in Sekunden auf interne Leitfäden, IGeL-Leistungen und Praxisabläufe zu. Ihr Team stellt einfach eine Frage im Chat und erhält sofort die korrekte Antwort, vollständig DSGVO-konform.",
  },
  {
    value: "recall",
    label: "Recall",
    icon: Repeat,
    head: "Automatisierte Recall-Systeme",
    text: "Erinnert Patienten automatisch per Anruf oder SMS an Vorsorgen und Folgetermine. Das steigert die Patiententreue und sorgt für eine gleichmäßigere Auslastung der Ordination.",
  },
  {
    value: "marketing",
    label: "Marketing",
    icon: Megaphone,
    head: "KI-Praxismarketing",
    text: "Werden Sie die erste Anlaufstelle in Ihrer Region. Die KI erstellt regelmäßig medizinische Info-Beiträge und Patiententipps für Ihre Website und Ihre Social-Media-Kanäle.",
  },
];

const features = [
  { icon: Clock, title: "Rund um die Uhr erreichbar", text: "Der KI-Empfang nimmt jeden Anruf an, auch abends, am Wochenende und an Feiertagen. Kein Patient landet mehr in der Warteschleife und kein Termin geht verloren." },
  { icon: Plug, title: "Direkt am Praxissystem", text: "Termine und Daten fließen über moderne Schnittstellen direkt in Ihr bestehendes Verwaltungssystem, ganz ohne doppelte Erfassung." },
  { icon: AlertTriangle, title: "Notfall-Erkennung", text: "Die KI erkennt akute Notfälle und verweist sofort an den Notruf 144 oder stellt direkt zu einer Mitarbeiterin durch." },
  { icon: Mic, title: "Menschlich klingende Stimme", text: "Über die Plattform fonio.ai spricht der Assistent natürlich und ruhig, mit österreichischer Sprachfärbung. Viele Anrufer merken den Unterschied nicht." },
  { icon: ShieldCheck, title: "DSGVO und EU-Hosting", text: "Alle Daten werden verschlüsselt auf Servern in Europa verarbeitet, mit Auftragsverarbeitungsvertrag und gewahrter ärztlicher Verschwiegenheit." },
  { icon: TrendingUp, title: "12 bis 18 Stunden Entlastung", text: "Ordinationen sparen pro Woche typischerweise 12 bis 18 Stunden Verwaltungszeit, die wieder den Patienten zugutekommt." },
];

const stats = [
  ["12-18h", "weniger Verwaltung pro Woche"],
  ["24/7", "Terminannahme ohne Wartezeit"],
  ["0", "verpasste Anrufe und Patienten"],
  ["2 Wo.", "vom Erstgespräch bis Go-Live"],
];

const blick = [
  ["Einsatz", "Telefon, Termine, Anfragen"],
  ["Erreichbarkeit", "24/7, ohne Warteschleife"],
  ["Entlastung", "12 bis 18 Stunden pro Woche"],
  ["Anbindung", "bestehendes Praxissystem"],
  ["Datenschutz", "DSGVO, EU-Hosting, AVV"],
  ["Go-Live", "in rund 2 Wochen"],
];

const related = [
  { href: "/leistungen/voicebot", icon: PhoneCall, title: "Voicebot & KI-Telefonassistent", desc: "Der KI-Telefonassistent, der Anrufe annimmt, Termine bucht und Anliegen qualifiziert, rund um die Uhr." },
  { href: "/leistungen/ki-wissensdatenbank", icon: Brain, title: "KI Wissensdatenbank", desc: "Praxisabläufe, Leitfäden und IGeL-Leistungen sekundenschnell abrufbar, per RAG und DSGVO-konform." },
  { href: "/leistungen/n8n-automatisierung", icon: Network, title: "n8n Automatisierung", desc: "Verbindet Termine, Recall-Erinnerungen und Anfragen automatisch mit Ihrem Praxissystem." },
];

const transcript = [
  { who: "Anrufer", text: "Guten Tag, ich bräuchte einen Termin zur Vorsorge." },
  { who: "KI-Empfang", text: "Sehr gern. Donnerstag um 9:15 Uhr wäre frei, passt Ihnen das?" },
  { who: "Anrufer", text: "Ja, das passt." },
  { who: "KI-Empfang", text: "Erledigt. Sie erhalten die Bestätigung gleich per SMS." },
];

export default function Page() {
  return (
    <>
      <Script id="faq-aerzte" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-aerzte" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <style>{`
        @keyframes aerztePing { 0% { transform: scale(.9); opacity:.5; } 70%,100% { transform: scale(1.6); opacity:0; } }
        .aerzte-ping { animation: aerztePing 2s ease-out infinite; }
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
                    KI für Ärzte & Fachärzte
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    KI Lösungen für <span className="text-primary">Arztpraxen</span> und Fachärzte
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Vom 24/7 KI-Telefonassistenten für Terminbuchungen bis zur automatisierten Beantwortung von Patientenanfragen: Wir entlasten Ihr Team am Empfang nachhaltig und schaffen wieder Zeit für die Medizin.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Analysegespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="tel:+43720080697">KI-Empfang live anrufen</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-primary" /> EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Live booking card */}
                <Card className="relative border-2 shadow-xl shadow-primary/5">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                          <Phone className="w-5 h-5 text-primary" />
                        </div>
                        <span className="absolute inset-0 rounded-full border-2 border-primary/40 aerzte-ping" aria-hidden />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">KI-Empfang Ordination</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> Live im Gespräch, 00:24
                        </div>
                      </div>
                      <span className="ml-auto text-[10px] uppercase tracking-wider text-muted-foreground font-medium">EU-Server</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-3">
                    {transcript.map((t, i) => (
                      <div key={i} className={t.who === "KI-Empfang" ? "flex justify-end" : "flex justify-start"}>
                        <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-snug ${t.who === "KI-Empfang" ? "bg-primary text-white rounded-br-sm" : "bg-muted text-foreground rounded-bl-sm"}`}>
                          {t.text}
                        </div>
                      </div>
                    ))}
                    <div className="flex items-center justify-between pt-2 border-t border-border text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5"><CalendarCheck className="w-4 h-4 text-primary" /> Termin gebucht</span>
                      <span className="flex items-center gap-1.5"><Activity className="w-4 h-4 text-primary" /> ins Praxissystem übertragen</span>
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

          {/* WAS LEISTET KI IN DER ORDINATION */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">KI in der Ordination</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was KI in der Arztpraxis wirklich leistet</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Künstliche Intelligenz in der Arztpraxis bedeutet nicht, Medizin zu automatisieren. Sie entlastet alles rund um die Behandlung: das <strong className="text-foreground">Telefon am Empfang</strong>, die Terminvergabe, die Beantwortung wiederkehrender Patientenanfragen und die Dokumentation.</p>
                    <p>Im Zentrum steht der <strong className="text-foreground">KI-Telefonassistent</strong>. Er nimmt Anrufe rund um die Uhr entgegen, bucht Termine direkt in Ihr Praxissystem und beantwortet Standardfragen, sodass Ihr Team wieder Zeit für die Patienten vor Ort hat.</p>
                    <p>Für Ordinationen im DACH-Raum ist dabei eines entscheidend: der <strong className="text-foreground">Datenschutz</strong>. Wir bauen jede Lösung DSGVO-konform, mit Datenhaltung in Europa und gewahrter ärztlicher Verschwiegenheit.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">KI-Telefonassistent</Badge>
                    <Badge variant="secondary" className="rounded-full">Terminmanagement</Badge>
                    <Badge variant="secondary" className="rounded-full">Patientenkommunikation</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Auf einen Blick</CardTitle>
                    <CardDescription>Was KI in Ihrer Praxis übernimmt.</CardDescription>
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Das Telefon-Chaos am Empfang, gelöst</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Medizinische Qualität erfordert Fokus. Wir nehmen Ihrem Team die repetitive Erstkommunikation ab, damit wieder Zeit für die Patienten bleibt.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-border">
                  <CardHeader>
                    <CardTitle className="text-xl">Der Praxisalltag heute</CardTitle>
                    <CardDescription>Was Empfang und Personal täglich bremst.</CardDescription>
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
                    <CardDescription>So sieht der Empfang ab Woche 2 aus.</CardDescription>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Moderne KI-Lösungen für Ihre Praxis</h2>
                <p className="text-lg text-muted-foreground">Weniger Papierkram, mehr Zeit für Patienten. Wählen Sie den Bereich, der Sie am meisten entlastet.</p>
              </div>
              <Tabs defaultValue="empfang" className="w-full">
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Gebaut für den Praxisalltag</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Sicher, anschlussfähig und spürbar entlastend, vom ersten Klingeln bis zum gebuchten Termin.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen aus der Ordination</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zur Arztpraxis</h2>
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
