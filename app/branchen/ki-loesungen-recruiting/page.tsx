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
import { Users, Filter, Star, ShieldCheck, Server, MapPin, Mic, Check, X, Target, Scale, Share2, Network, Database, CalendarCheck, PhoneCall, Bot } from "lucide-react";
import { serviceLogos } from "@/lib/serviceLogos";

export const metadata: Metadata = {
  title: "KI im Recruiting: Bewerbermanagement automatisieren",
  description:
    "KI im Recruiting: Lebenslauf-Screening und Bewerbermanagement automatisieren, fair und EU AI Act konform. Schneller zur richtigen Person, DSGVO-konform.",
  keywords:
    "KI Recruiting, KI Bewerbermanagement, KI Lebenslauf, CV-Screening KI, KI Personalvermittlung, KI HR, Bewerber-Screening, EU AI Act Recruiting",
  alternates: { canonical: "https://ki-kanzlei.at/branchen/ki-loesungen-recruiting" },
};

const faqs = [
  {
    q: "Wie funktioniert das KI-Lebenslauf-Screening?",
    a: "Die KI liest jeden eingehenden Lebenslauf und gleicht Qualifikationen, Erfahrung und Kompetenzen mit Ihrem Anforderungsprofil ab. Sie versteht dabei den Kontext statt nur einzelne Schlagworte und vergibt einen nachvollziehbaren Match-Score je Kandidat. Die Vorauswahl ist so in Minuten erledigt, die finale Entscheidung trifft immer Ihr Recruiting-Team.",
  },
  {
    q: "Ist KI-gestütztes Bewerber-Screening fair und mit dem EU AI Act vereinbar?",
    a: "Recruiting gilt im EU AI Act als Hochrisiko-Anwendung, deshalb legen wir die Systeme von Anfang an entsprechend aus. Die Bewertung stützt sich ausschließlich auf sachliche, jobbezogene Kriterien, sensible Merkmale wie Herkunft, Geschlecht oder Alter bleiben außen vor. Jede Entscheidung ist begründet und protokolliert, der KI-Einsatz wird transparent gekennzeichnet und die Letztentscheidung trifft immer ein Mensch. So bleibt die Vorauswahl diskriminierungsfrei und auditierbar.",
  },
  {
    q: "Was bedeutet Agentic Sourcing?",
    a: "Statt nur auf eingehende Bewerbungen zu warten, suchen autonome KI-Agenten aktiv nach passenden Profilen auf Plattformen wie LinkedIn und XING, gleichen sie mit der offenen Stelle ab und bereiten eine personalisierte Erstansprache vor. Ihr Recruiter übernimmt erst, sobald ein Kandidat Interesse zeigt, und füllt so die Pipeline auch mit passiven Talenten.",
  },
  {
    q: "Wie läuft ein KI Voice Pre-Screening Interview ab?",
    a: "Direkt nach der Bewerbung ruft die KI über unsere Voice-Plattform fonio.ai an oder nimmt den Anruf entgegen und klärt in einem kurzen Gespräch Eckdaten wie Verfügbarkeit, Gehaltsvorstellung und Kündigungsfrist. Das Gespräch wird strukturiert protokolliert, sodass Ihr Team danach nur noch wirklich passende Kandidaten persönlich spricht.",
  },
  {
    q: "Lässt sich die KI an unser Bewerbermanagement und Onboarding anbinden?",
    a: "Ja. Über n8n verbinden wir Ihr bestehendes ATS, Kalender und E-Mail zu einem durchgängigen Workflow. Beim Onboarding laufen Schritte wie Vertragsversand, Zugänge, Checklisten und Begrüßungsmails automatisiert im Hintergrund, während Ihr gewohntes Bewerbermanagementsystem die zentrale Oberfläche bleibt.",
  },
  {
    q: "Ist die Lösung bei sensiblen Bewerberdaten DSGVO-konform?",
    a: "Ja. Alle Bewerberdaten werden verschlüsselt auf Servern in der EU verarbeitet. Wir holen die erforderlichen Einwilligungen im Prozess ein, setzen Löschfristen automatisiert um und sichern alles über einen Auftragsverarbeitungsvertrag (AVV) ab. Ihre Daten verlassen den europäischen Rechtsraum nicht.",
  },
  {
    q: "Wie schnell ist die Lösung einsatzbereit und wie viel Zeit sparen wir?",
    a: "Ein erster Anwendungsfall wie das automatische Lebenslauf-Screening ist meist in wenigen Wochen produktiv. Wir starten mit einer kostenlosen Erstanalyse, definieren den größten Hebel und bauen ihn Schritt für Schritt aus. Weil Screening und Pre-Screening direkt nach Eingang der Bewerbung starten, ist eine deutlich kürzere Time-to-Hire realistisch, das genaue Potenzial kalkulieren wir an Ihren echten Prozessen.",
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
  name: "KI Lösungen für Recruiting",
  serviceType: "KI im Recruiting, Bewerber-Screening, Agentic Sourcing",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description: "KI Lösungen für Recruiting und HR im DACH-Raum: automatisches Lebenslauf-Screening mit Match-Score, faires Bewerbermanagement nach EU AI Act, Agentic Sourcing und Voice Pre-Screening. DSGVO-konform und EU-gehostet.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const problems = [
  "Recruiter sichten stundenlang Lebensläufe, die gar nicht zum Anforderungsprofil passen",
  "Subjektive Vorauswahl nach Bauchgefühl, ohne nachvollziehbare Kriterien und mit Diskriminierungsrisiko",
  "Lange Time-to-Hire, die besten Talente sind weg, bevor das Erstgespräch überhaupt steht",
  "Gute Fachkräfte bewerben sich kaum aktiv, der Talent-Pool aus früheren Bewerbungen liegt brach",
  "Termin-Koordination zwischen Kandidat, Fachabteilung und HR zieht den Prozess unnötig in die Länge",
  "Das Onboarding versinkt in manuellen Schritten: Verträge, Zugänge, Checklisten und Begrüßungsmails",
];

const solutions = [
  "Das KI-Screening bewertet jeden Lebenslauf gegen Ihr Anforderungsprofil und reiht Kandidaten nach Match-Score",
  "Jede Bewertung ist nachvollziehbar dokumentiert, fair und konform mit dem EU AI Act",
  "Voice Pre-Screening und automatische Terminbuchung verkürzen die Time-to-Hire spürbar",
  "Agentic Sourcing füllt Ihre Pipeline proaktiv mit passenden, auch passiven Talenten",
  "Ein RAG-Talent-Pool macht frühere Bewerbungen in Sekunden wieder auffindbar",
  "n8n automatisiert das Onboarding, Verträge, Zugänge und Checklisten laufen im Hintergrund",
];

const useCases = [
  {
    value: "screening",
    label: "CV-Screening",
    icon: Filter,
    head: "KI-Lebenslauf-Screening",
    text: "Die KI prüft jeden eingehenden Lebenslauf gegen Ihr Anforderungsprofil, erkennt Qualifikationen, Erfahrung und Soft Skills und reiht die Kandidaten per Match-Score. Top-Profile sind sofort markiert, statt dass Sie sich durch jeden Stapel arbeiten, und jede Bewertung bleibt nachvollziehbar.",
  },
  {
    value: "sourcing",
    label: "Agentic Sourcing",
    icon: Share2,
    head: "Agentic Sourcing",
    text: "Autonome KI-Agenten identifizieren passende Profile auf LinkedIn und XING, gleichen sie mit Ihrer Stelle ab und personalisieren die Erstansprache. So füllt sich die Pipeline proaktiv mit passiven Talenten, die sich von selbst nie beworben hätten.",
  },
  {
    value: "interview",
    label: "Voice Pre-Screening",
    icon: Mic,
    head: "KI Voice Pre-Screening Interview",
    text: "Über die Voice-Plattform fonio.ai führt die KI direkt nach der Bewerbung ein kurzes Erstgespräch und klärt Verfügbarkeit, Gehaltsvorstellung und Kündigungsfrist, rund um die Uhr und für jeden Kandidaten gleich. Das Ergebnis landet strukturiert in Ihrem System.",
  },
  {
    value: "onboarding",
    label: "Onboarding",
    icon: Network,
    head: "n8n Onboarding-Automatisierung",
    text: "Sobald eine Zusage erfolgt, übernimmt ein n8n-Workflow das Onboarding: Vertragsversand, Systemzugänge, Checklisten und Begrüßungsmails laufen automatisch im Hintergrund. Neue Mitarbeiter starten reibungslos, ohne dass HR jeden Schritt manuell anstoßen muss.",
  },
  {
    value: "termine",
    label: "Terminkoordination",
    icon: CalendarCheck,
    head: "Automatische Terminkoordination",
    text: "Die KI stimmt Gesprächstermine zwischen Kandidat, Fachabteilung und HR selbstständig ab und bucht direkt in den Kalender, kompatibel mit cal.com, Google Calendar und Outlook. Das ständige Hin und Her per E-Mail entfällt komplett.",
  },
  {
    value: "talentpool",
    label: "Talent-Pool",
    icon: Database,
    head: "Talent-Pool Wissensbasis (RAG)",
    text: "Durchsuchen Sie Ihren gesamten Bewerber-Pool in Sekunden. Die KI findet Kandidaten aus früheren Ausschreibungen, die perfekt auf eine neue Rolle passen, dank inhaltlicher Analyse statt reiner Stichwortsuche und vollständig DSGVO-konform.",
  },
];

const features = [
  { icon: Target, title: "Match-Score für jeden Lebenslauf", text: "Jeder Lebenslauf wird gegen Ihr Anforderungsprofil bewertet und nach Eignung gereiht, mit klar markierten Top-Kandidaten. Schluss mit stundenlangem Sichten unpassender Bewerbungen, das Screening liefert in Minuten eine fundierte Vorauswahl." },
  { icon: Scale, title: "Fair und EU AI Act konform", text: "Recruiting ist ein Hochrisiko-Bereich. Wir bewerten nur sachliche, jobbezogene Kriterien, dokumentieren jede Entscheidung nachvollziehbar und halten Transparenz und menschliche Letztentscheidung ein. Das hält die Vorauswahl diskriminierungsfrei." },
  { icon: Share2, title: "Agentic Sourcing", text: "Autonome Agenten finden passende Profile auf LinkedIn und XING und sprechen sie personalisiert an, sodass Ihre Pipeline auch mit passiven Talenten gefüllt bleibt." },
  { icon: Mic, title: "Voice Pre-Screening", text: "Über fonio.ai klärt die KI direkt nach der Bewerbung Eckdaten wie Verfügbarkeit, Gehalt und Kündigungsfrist, professionell, einheitlich und rund um die Uhr." },
  { icon: Network, title: "n8n Onboarding und ATS-Integration", text: "Bewerberdaten, Status-Updates und Onboarding-Schritte synchronisieren sich nahtlos mit Ihrem Bewerbermanagementsystem und Ihren Tools." },
  { icon: ShieldCheck, title: "DSGVO und EU-Hosting", text: "Alle Bewerberdaten werden verschlüsselt auf EU-Servern verarbeitet, mit Auftragsverarbeitungsvertrag und automatischen Löschfristen." },
];

const stats = [
  ["70%", "weniger Zeit fürs CV-Sichten"],
  ["50%", "kürzere Time-to-Hire"],
  ["24/7", "Pre-Screening ohne Wartezeit"],
  ["100%", "nachvollziehbare Bewertung"],
];

const blick = [
  ["Schwerpunkt", "Screening & Bewerbermanagement"],
  ["Sourcing", "agentisch, LinkedIn & XING"],
  ["Bewertung", "Match-Score, nachvollziehbar"],
  ["Konformität", "EU AI Act, fair & transparent"],
  ["Anbindung", "ATS, Kalender, n8n"],
  ["Datenschutz", "DSGVO, EU-Hosting, AVV"],
];

const related = [
  { href: "/leistungen/agentic-ai", icon: Bot, title: "Agentic AI", desc: "Autonome KI-Agenten für Agentic Sourcing, die passende Profile selbstständig finden, bewerten und ansprechen." },
  { href: "/leistungen/voicebot", icon: PhoneCall, title: "Voicebot & KI-Telefonassistent", desc: "Voice Pre-Screening und eine Bewerber-Hotline, die rund um die Uhr Eckdaten klärt und Termine bucht." },
  { href: "/leistungen/n8n-automatisierung", icon: Network, title: "n8n Automatisierung", desc: "Verbindet ATS, Kalender und E-Mail zu einem durchgängigen Recruiting- und Onboarding-Workflow." },
];

const candidates = [
  { name: "Kandidat:in A", note: "8 Jahre Erfahrung, voller Stack-Match", score: 96, top: true },
  { name: "Kandidat:in B", note: "starkes Profil, kleine Lücke", score: 88, top: false },
  { name: "Kandidat:in C", note: "Teilqualifikation, Potenzial", score: 71, top: false },
  { name: "Kandidat:in D", note: "Profil passt nicht zur Stelle", score: 39, top: false },
];

export default function Page() {
  return (
    <>
      <Script id="faq-recruiting" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-recruiting" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <style>{`
        @keyframes rcPing { 0% { transform: scale(.9); opacity:.5; } 70%,100% { transform: scale(1.6); opacity:0; } }
        .rc-ping { animation: rcPing 2s ease-out infinite; }
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
                    KI für Recruiting & HR
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    KI Lösungen für <span className="text-primary">Recruiting</span> und Bewerbermanagement
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Vom KI-Lebenslauf-Screening mit Match-Score bis zum fairen, EU AI Act konformen Bewerbermanagement: Wir reihen Ihre Kandidaten nachvollziehbar nach Eignung und füllen die Pipeline per Agentic Sourcing. Schneller zur richtigen Person.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Analysegespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="tel:+43720080697"><Mic className="w-4 h-4 mr-2" />Voice Pre-Screening testen</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-primary" /> EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Candidate ranking card */}
                <Card className="relative border-2 shadow-xl shadow-primary/5">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                          <Filter className="w-5 h-5 text-primary" />
                        </div>
                        <span className="absolute inset-0 rounded-full border-2 border-primary/40 rc-ping" aria-hidden />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">KI-Lebenslauf-Screening</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> 14 CVs gescreent, automatisch gereiht
                        </div>
                      </div>
                      <span className="ml-auto text-[10px] uppercase tracking-wider text-muted-foreground font-medium">EU-Server</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-3">
                    {candidates.map((c, i) => (
                      <div key={i} className={`rounded-xl border p-3 ${c.top ? "border-primary/30 bg-primary/5" : "border-border"}`}>
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Users className="w-4 h-4 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-foreground truncate">{c.name}</div>
                            <div className="text-xs text-muted-foreground truncate">{c.note}</div>
                          </div>
                          {c.top && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-medium text-primary bg-primary/10 rounded-full px-2 py-0.5 shrink-0">
                              <Star className="w-3 h-3" /> Top-Kandidat
                            </span>
                          )}
                          <div className={`text-sm font-semibold shrink-0 ${c.top ? "text-primary" : "text-muted-foreground"}`}>{c.score}%</div>
                        </div>
                        <div className="mt-2.5 h-1.5 w-full rounded-full bg-muted overflow-hidden">
                          <div className={`h-full rounded-full ${c.top ? "bg-primary" : "bg-primary/40"}`} style={{ width: `${c.score}%` }} />
                        </div>
                      </div>
                    ))}
                    <div className="text-[11px] text-center text-muted-foreground pt-1">
                      EU AI Act konform, Daten in der EU, jede Bewertung nachvollziehbar
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

          {/* WAS LEISTET KI IM RECRUITING */}
          <section className="section-spacing bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">KI im Recruiting</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was KI im Recruiting wirklich leistet</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>KI im Recruiting bedeutet nicht, die Personalentscheidung zu automatisieren. Sie übernimmt die zeitraubende Vorarbeit: das <strong className="text-foreground">Screening der Lebensläufe</strong>, die Bewertung gegen das Anforderungsprofil und die strukturierte Aufbereitung jeder Bewerbung. Ihr Team behält die Entscheidung, gewinnt aber Stunden zurück.</p>
                    <p>Im Zentrum steht das <strong className="text-foreground">KI-Bewerber-Screening</strong>. Es liest jeden Lebenslauf, erkennt relevante Qualifikationen und reiht die Kandidaten nach einem nachvollziehbaren Match-Score. Ergänzt um <strong className="text-foreground">Agentic Sourcing</strong> füllt sich die Pipeline auch mit passiven Talenten, ganz ohne manuelles Durchsuchen von Profilen.</p>
                    <p>Für HR-Teams und Personalagenturen im DACH-Raum ist der rechtliche Rahmen entscheidend. Recruiting zählt im <strong className="text-foreground">EU AI Act</strong> zu den Hochrisiko-Bereichen, deshalb bauen wir jede Lösung fair, diskriminierungsfrei und DSGVO-konform, mit Datenhaltung in Österreich und der EU.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">CV-Screening</Badge>
                    <Badge variant="secondary" className="rounded-full">Agentic Sourcing</Badge>
                    <Badge variant="secondary" className="rounded-full">Bewerbermanagement</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Auf einen Blick</CardTitle>
                    <CardDescription>Was KI in Ihrem Recruiting übernimmt.</CardDescription>
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Vom Lebenslauf-Stapel zur fairen Vorauswahl</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Der War for Talents wird über Geschwindigkeit und Qualität entschieden. Wir nehmen Ihrem Team die Routine ab, damit wieder Zeit für echte Gespräche bleibt.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-border">
                  <CardHeader>
                    <CardTitle className="text-xl">Der Recruiting-Alltag heute</CardTitle>
                    <CardDescription>Was Recruiter täglich ausbremst.</CardDescription>
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
                    <CardDescription>So läuft Ihr Recruiting ab Woche 2.</CardDescription>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Moderne KI-Lösungen für Ihr Recruiting</h2>
                <p className="text-lg text-muted-foreground">Weniger manuelle Arbeit, schneller die richtigen Leute finden. Wählen Sie den Bereich, der Sie am meisten entlastet.</p>
              </div>
              <Tabs defaultValue="screening" className="w-full">
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Gebaut für modernes Recruiting</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Schnell, fair und anschlussfähig, von der ersten Bewerbung bis zum gebuchten Erstgespräch.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zu KI im Recruiting</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zum KI-Recruiting</h2>
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
