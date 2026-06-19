import type { Metadata } from "next";
import { serviceLogos } from "@/lib/serviceLogos";
import Script from "next/script";
import { NavigationHome } from "@/components/NavigationHome";
import { ModelLogoStrip } from "@/components/ModelLogoStrip";
import { FooterModern } from "@/components/FooterModern";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Check, X, Shield, ShieldCheck, MapPin, Bot, Workflow, Lock, Server,
  Calculator, Building2, Landmark, FileText, Scale, Stethoscope, Search, Settings2, Rocket, Phone,
  Clock, MousePointerClick, KeyRound, Brain, Eye, AlertTriangle, Repeat, Cpu,
} from "lucide-react";

export const metadata: Metadata = {
  title: "RPA & Robotic AI: Automatisierung ohne Schnittstelle",
  description:
    "RPA (Robotic Process Automation) und Robotic AI für Systeme ohne API: Software-Roboter bedienen DATEV, BMD, ERP und Altsysteme wie ein Mensch, mit KI angereichert. DSGVO-konform, EU-gehostet, für den DACH-Raum.",
  keywords:
    "RPA, Robotic Process Automation, Robotic AI, RPA Steuerberater, DATEV Automatisierung, BMD Automatisierung, DATEV Schnittstelle, Prozessautomatisierung, intelligent automation, hyperautomation, Software Roboter, Automatisierung ohne API, Bot Automatisierung, RPA Deutschland, DATEV Automatisierung Deutschland, RPA Schweiz, Prozessautomatisierung DACH, Deutschland, Schweiz, DACH",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/rpa" },
};

const faqs = [
  {
    q: "Was ist RPA (Robotic Process Automation)?",
    a: "RPA steht für Robotic Process Automation. Ein Software-Roboter bedient bestehende Programme genauso, wie es ein Mensch tun würde: Er öffnet Anwendungen, klickt durch Masken, kopiert Werte, tippt in Felder und liest Bildschirminhalte aus. Der entscheidende Vorteil: RPA funktioniert auch dort, wo es keine Programmierschnittstelle (API) gibt. Damit lassen sich gerade ältere Fachprogramme, Portale und Desktop-Software automatisieren, die sich klassischen Integrationen verschließen.",
  },
  {
    q: "Was ist der Unterschied zwischen RPA und Robotic AI?",
    a: "Klassisches RPA folgt festen Regeln: Es klickt immer denselben Weg und kommt bei unerwarteten Situationen ins Stocken. Robotic AI verbindet RPA mit künstlicher Intelligenz. Der Roboter versteht jetzt unstrukturierte Inhalte, liest Belege per KI aus, trifft Entscheidungen anhand von Wahrscheinlichkeiten und passt sich an Abweichungen an. Aus einem stur klickenden Bot wird so eine intelligente Automatisierung, die auch dann zuverlässig arbeitet, wenn Dokumente unterschiedlich aussehen oder Daten unvollständig sind.",
  },
  {
    q: "Können Sie DATEV oder BMD automatisieren, obwohl es keine offene Schnittstelle gibt?",
    a: "Ja, genau dafür ist RPA gemacht. Viele Steuer- und Buchhaltungsprogramme wie DATEV oder BMD bieten nur eingeschränkte oder gar keine offenen Schnittstellen für individuelle Automatisierung. Ein RPA-Roboter bedient die Software über die Oberfläche: Er legt Belege an, überträgt Buchungssätze, exportiert Auswertungen oder pflegt Stammdaten, so wie es sonst ein Mitarbeiter tun würde. Dabei halten wir uns strikt an die Nutzungsbedingungen und Sicherheitsvorgaben der jeweiligen Software.",
  },
  {
    q: "Für wen lohnt sich RPA besonders?",
    a: "RPA lohnt sich überall, wo Mitarbeiter täglich dieselben Schritte in Programmen ausführen, die sich nicht per API anbinden lassen. Typisch sind Steuerberater und Buchhaltungen (DATEV, BMD), Banken- und Versicherungsportale, Behördensysteme, ERP-Altsysteme sowie Branchensoftware ohne Exportfunktion. Wenn ein Prozess regelbasiert, wiederkehrend und mit hohem Volumen ist, ist er ein idealer Kandidat für einen Software-Roboter.",
  },
  {
    q: "Ist RPA DSGVO-konform?",
    a: "Ja, bei sauberer Umsetzung. Wir betreiben RPA-Roboter auf Servern oder Rechnern innerhalb der EU, oft direkt in Ihrer Infrastruktur, sodass keine Daten an Dritte oder ins Ausland abfließen. Zugänge werden verschlüsselt verwaltet, Aktionen protokolliert und Berechtigungen eng gefasst. Auf Wunsch schließen wir einen Auftragsverarbeitungsvertrag (AVV) ab und dokumentieren die Verarbeitung vollständig.",
  },
  {
    q: "Was passiert, wenn sich die Oberfläche der Software ändert?",
    a: "Das ist die klassische Herausforderung bei RPA, und wir begegnen ihr auf zwei Wegen. Erstens bauen wir die Roboter robust, sodass sie Elemente nicht nur an starren Bildschirmpositionen erkennen. Zweitens nutzen wir KI-gestützte Erkennung, die auch bei kleineren Layout-Änderungen weiterarbeitet. Sollte sich eine Software grundlegend ändern, passen wir den Roboter im Rahmen der Wartung schnell an, bevor Prozesse stillstehen.",
  },
  {
    q: "RPA oder echte API-Integration, was ist besser?",
    a: "Wo eine stabile API existiert, ist die direkte Integration fast immer die bessere, robustere Wahl, etwa mit n8n. RPA ist die richtige Lösung genau dann, wenn es keine Schnittstelle gibt oder eine Anbindung unverhältnismäßig teuer wäre. In der Praxis kombinieren wir beides: API, wo möglich, RPA, wo nötig. So entsteht eine durchgehende Automatisierung, die keine Lücke offenlässt.",
  },
  {
    q: "Wie lange dauert die Einführung eines RPA-Roboters?",
    a: "Ein klar umrissener, regelbasierter Prozess ist oft in zwei bis vier Wochen produktiv. Komplexere Abläufe mit mehreren Systemen, KI-Komponenten und Ausnahmebehandlung brauchen länger. Wir starten mit einem konkreten Use Case, der schnell sichtbar entlastet, und bauen von dort aus weiter.",
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
  name: "RPA & Robotic AI",
  serviceType: "Robotic Process Automation, RPA, Intelligent Automation",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "RPA und Robotic AI für den DACH-Raum: Software-Roboter automatisieren Systeme ohne API wie DATEV, BMD und Altsysteme, KI-gestützt, DSGVO-konform und EU-gehostet.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const stats = [
  { value: "0 API", label: "nötig, RPA bedient die Oberfläche" },
  { value: "24/7", label: "arbeiten die Roboter" },
  { value: "100 %", label: "Daten in der EU" },
  { value: "2-4 Wo.", label: "bis zum ersten Roboter" },
];

const ataglance = [
  ["Prinzip", "bedient Software wie ein Mensch"],
  ["Braucht API", "nein"],
  ["Ideal für", "DATEV, BMD, Altsysteme"],
  ["Mit KI", "Belege lesen, entscheiden"],
  ["Betrieb", "EU-Server oder bei Ihnen"],
  ["Datenschutz", "DSGVO, AVV, protokolliert"],
];

const problems = [
  { problem: "Buchungssätze werden täglich von Hand in DATEV oder BMD getippt.", solution: "Ein Roboter überträgt die Sätze automatisch, geprüft und ohne Tippfehler." },
  { problem: "Die wichtige Fachsoftware hat schlicht keine Schnittstelle.", solution: "RPA bedient sie über die Oberfläche, ganz ohne API." },
  { problem: "Mitarbeiter exportieren wöchentlich dieselben Auswertungen aus einem Portal.", solution: "Der Roboter loggt sich ein, holt die Reports und legt sie sauber ab." },
  { problem: "Belege werden manuell ausgelesen und in mehrere Systeme eingepflegt.", solution: "KI liest die Belege, der Roboter pflegt sie in alle Zielsysteme ein." },
  { problem: "Stammdaten müssen parallel in alten Systemen gepflegt werden.", solution: "Ein Roboter hält die Systeme synchron, auch ohne gemeinsame Schnittstelle." },
];

const bentoFeatures = [
  { icon: KeyRound, title: "Automatisierung ganz ohne Schnittstelle", description: "Der größte Hebel von RPA: Es funktioniert dort, wo klassische Integrationen scheitern. Hat Ihre Fachsoftware keine API, bedient der Roboter sie über Tastatur, Maus und Bildschirm, genau wie ein Mitarbeiter. So automatisieren wir auch DATEV, BMD, Portale und Altsysteme, an denen andere Anbieter aufgeben." },
  { icon: Brain, title: "Robotic AI statt stures Klicken", description: "KI macht den Roboter intelligent: Er liest unstrukturierte Belege, trifft Entscheidungen und meistert Ausnahmen, statt bei jeder Abweichung zu stoppen." },
  { icon: Eye, title: "KI-gestützte Bildschirmerkennung", description: "Elemente werden nicht nur an starren Positionen erkannt. Das hält die Roboter stabil, auch wenn sich Layouts leicht ändern." },
  { icon: Shield, title: "DSGVO & EU-Betrieb", description: "Roboter laufen in der EU oder direkt bei Ihnen. Daten bleiben im Haus, Aktionen werden protokolliert, AVV inklusive." },
  { icon: AlertTriangle, title: "Robuste Ausnahmebehandlung", description: "Klare Fallback-Pfade und Alerts sorgen dafür, dass Sonderfälle sauber an einen Menschen übergeben werden." },
  { icon: Repeat, title: "Wartung, die mitläuft", description: "Ändert sich eine Software, passen wir den Roboter schnell an, bevor Prozesse ins Stocken geraten." },
];

const branchen = [
  { value: "steuer", label: "Steuerberatung", icon: Calculator, head: "Steuerberater & Buchhaltung", intro: "Genau hier ist RPA am stärksten: DATEV und BMD bieten kaum offene Schnittstellen für individuelle Automatisierung. Ein Roboter übernimmt die wiederkehrende Klickarbeit.", items: ["Buchungssätze automatisch in DATEV oder BMD übertragen.", "Belege per KI auslesen und als Buchung anlegen.", "Auswertungen und Saldenlisten regelmäßig exportieren und ablegen.", "Stammdaten zwischen Kanzleisoftware und Fachprogramm synchron halten."] },
  { value: "finanz", label: "Finanz & Banken", icon: Landmark, head: "Banken- & Versicherungsportale", intro: "Viele Portale lassen sich nur über die Oberfläche bedienen. Der Roboter erledigt die Routine zuverlässig.", items: ["Kontoauszüge und Belege aus Portalen herunterladen.", "Zahlungseingänge mit offenen Posten abgleichen.", "Schaden- oder Vertragsdaten aus Maklerportalen übernehmen.", "Wiederkehrende Meldungen fristgerecht einreichen."] },
  { value: "verwaltung", label: "Verwaltung", icon: Building2, head: "Verwaltung & Backoffice", intro: "Wo Daten zwischen Systemen wandern, die nicht miteinander reden, schließt RPA die Lücke.", items: ["Daten aus E-Mails und PDFs in Fachsysteme eintragen.", "Bestellungen und Aufträge in ERP-Altsysteme erfassen.", "Berichte aus mehreren Programmen zusammenführen.", "Routinepflege von Listen und Stammdaten übernehmen."] },
  { value: "recht", label: "Kanzleien", icon: Scale, head: "Rechtsanwälte & Notare", intro: "Fristen, Akten und Behördenportale binden Zeit. Ein Roboter erledigt die immer gleichen Schritte.", items: ["Daten in Anwaltssoftware und Behördenportale übertragen.", "Dokumente strukturiert ablegen und benennen.", "Fristen aus Eingängen erfassen und eintragen.", "Standardschriftsätze vorbereiten und vorbefüllen."] },
  { value: "gesundheit", label: "Gesundheit", icon: Stethoscope, head: "Praxen & Gesundheitswesen", intro: "Praxis- und Abrechnungssoftware ist oft geschlossen. RPA arbeitet trotzdem damit.", items: ["Abrechnungsdaten zwischen Systemen übertragen.", "Termin- und Patientendaten pflegen, datenschutzkonform.", "Auswertungen und Meldungen automatisch erstellen.", "Dokumente in die Patientenakte einsortieren."] },
];

const comparison = [
  { feature: "Funktioniert ohne API", rpa: "ja, Kernstärke", api: "nein, API nötig", manuell: "ja, aber per Hand" },
  { feature: "Geschwindigkeit", rpa: "hoch, rund um die Uhr", api: "sehr hoch", manuell: "langsam" },
  { feature: "Fehlerquote", rpa: "sehr gering", api: "minimal", manuell: "menschliche Fehler" },
  { feature: "Eignung für Altsysteme", rpa: "ideal", api: "oft unmöglich", manuell: "Standard heute" },
  { feature: "Umgang mit Belegen (KI)", rpa: "mit Robotic AI ja", api: "je nach System", manuell: "manuell prüfen" },
  { feature: "Stabilität bei UI-Änderung", rpa: "gut, mit Wartung", api: "sehr stabil", manuell: "unverändert" },
  { feature: "Skalierung", rpa: "mehrere Roboter parallel", api: "sehr hoch", manuell: "nur über Personal" },
];

const steps = [
  { step: "01", icon: Phone, title: "Kostenlose Erstanalyse", time: "30 Minuten", description: "Wir prüfen, welche manuellen Klickabläufe Sie Zeit kosten und welche Systeme keine Schnittstelle bieten. Sie wissen danach, wo ein Roboter den größten Hebel hat." },
  { step: "02", icon: Search, title: "Prozessaufnahme & Konzept", time: "Woche 1 bis 2", description: "Wir nehmen den Prozess Schritt für Schritt auf, definieren Regeln und Ausnahmen und entscheiden, wo KI sinnvoll ist und wo eine API doch der bessere Weg wäre." },
  { step: "03", icon: Settings2, title: "Roboter bauen & testen", time: "Woche 2 bis 4", description: "Wir entwickeln den Roboter, binden KI-Erkennung ein und testen mit echten Fällen inklusive Sonderfällen, Protokollierung und Übergabe an Menschen." },
  { step: "04", icon: Rocket, title: "Go-Live & Wartung", time: "ab Woche 4", description: "Der Roboter arbeitet produktiv, überwacht und DSGVO-konform. Wir passen ihn bei Softwareänderungen an und automatisieren den nächsten Prozess." },
];

const related = [
  { href: "/leistungen/n8n-automatisierung", icon: Workflow, title: "n8n Automatisierung", desc: "Wo eine API existiert, ist die direkte Integration die robustere Wahl. Wir kombinieren beides." },
  { href: "/leistungen/agentic-ai", icon: Bot, title: "Agentic AI & AI Agents", desc: "Autonome KI-Agenten, die Aufgaben planen und end-to-end erledigen, über RPA hinaus." },
  { href: "/leistungen/ki-wissensdatenbank", icon: FileText, title: "KI Wissensdatenbank", desc: "Belege und Dokumente per RAG durchsuchbar machen und in Prozesse einspeisen." },
];

export default function Page() {
  return (
    <>
      <Script id="faq-rpa" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-rpa" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                    RPA, Robotic AI, Intelligent Automation
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Automatisierung auch <span className="text-primary">ohne Schnittstelle</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Wenn DATEV, BMD oder ein Altsystem keine API bietet, scheitern klassische Integrationen, RPA nicht. Unsere Software-Roboter bedienen jede Anwendung wie ein Mensch und werden mit KI zur intelligenten Automatisierung, die liest, entscheidet und zuverlässig arbeitet.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Assessment</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#vergleich">RPA vs. API vs. manuell</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><KeyRound className="w-4 h-4 text-primary" /> Keine API nötig</span>
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Hero visual: robot working a no-API app */}
                <div className="relative">
                  <Card className="border-2 shadow-xl shadow-primary/5 overflow-hidden">
                    <CardHeader className="border-b border-border py-3">
                      <div className="flex items-center gap-2">
                        <span className="flex gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-muted-foreground/20" />
                          <span className="w-3 h-3 rounded-full bg-muted-foreground/20" />
                          <span className="w-3 h-3 rounded-full bg-muted-foreground/20" />
                        </span>
                        <span className="ml-2 font-mono text-xs text-muted-foreground">datev-buchung.bot</span>
                        <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> Roboter aktiv
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-full flex items-center gap-3 rounded-xl border-2 border-border bg-background px-3.5 py-2.5 shadow-sm">
                          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><FileText className="w-5 h-5 text-primary" /></div>
                          <div className="min-w-0"><div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Eingang</div><div className="text-sm font-semibold truncate">Eingangsrechnung (PDF)</div></div>
                        </div>
                        <div className="w-full flex items-center gap-3 rounded-xl border-2 border-primary/40 bg-primary/5 px-3.5 py-2.5">
                          <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0"><Brain className="w-5 h-5 text-primary" /></div>
                          <div className="min-w-0 flex-1"><div className="text-[10px] uppercase tracking-wider text-primary font-medium">Robotic AI</div><div className="text-sm font-semibold truncate">Beleg auslesen & prüfen</div></div>
                          <Badge variant="outline" className="rounded-full text-[10px] shrink-0 bg-primary/10 text-primary border-primary/20">KI</Badge>
                        </div>
                        <div className="w-full flex items-center gap-3 rounded-xl border-2 border-border bg-background px-3.5 py-2.5 shadow-sm">
                          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><MousePointerClick className="w-5 h-5 text-primary" /></div>
                          <div className="min-w-0 flex-1"><div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Roboter klickt</div><div className="text-sm font-semibold truncate">Buchung in DATEV anlegen</div></div>
                        </div>
                        <div className="w-full flex items-center gap-3 rounded-xl border-2 border-border bg-background px-3.5 py-2.5 shadow-sm">
                          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><Check className="w-5 h-5 text-primary" /></div>
                          <div className="min-w-0 flex-1"><div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Fertig</div><div className="text-sm font-semibold truncate">Gebucht & protokolliert</div></div>
                          <Check className="w-4 h-4 text-green-600 shrink-0" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="hidden lg:flex absolute -top-4 -right-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium">
                    <KeyRound className="w-3.5 h-3.5 text-primary" /> ohne API
                  </div>
                  <div className="hidden lg:flex absolute -bottom-4 -left-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium">
                    <Lock className="w-3.5 h-3.5 text-primary" /> Daten bleiben in der EU
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* STATS */}
          <section className="py-10 md:py-12 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-2 md:grid-cols-4 border-2 border-border rounded-2xl overflow-hidden bg-card">
                {stats.map(({ value, label }, i) => (
                  <div key={i} className="p-6 md:p-8 text-center border-b md:border-b-0 border-r last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r border-border">
                    <div className="text-3xl md:text-4xl font-bold text-primary">{value}</div>
                    <div className="text-xs md:text-sm text-muted-foreground mt-1.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <ModelLogoStrip
            caption="RPA-Integration mit Ihren Systemen"
            items={[
              { text: "UiPath", name: "UiPath" },
              { text: "Power Automate", name: "Power Automate" },
              { slug: "n8n", name: "n8n" },
              { slug: "python", name: "Python" },
              { slug: "datev", name: "DATEV" },
              { text: "BMD", name: "BMD" },
            ]}
          />

          {/* DEFINITION */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Kurz erklärt</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was RPA kann, was klassische Integration nicht kann</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p><strong className="text-foreground">RPA (Robotic Process Automation)</strong> ist Automatisierung über die Benutzeroberfläche. Ein Software-Roboter öffnet Programme, klickt durch Masken, kopiert Werte und tippt in Felder, exakt wie ein Mitarbeiter. Dadurch braucht RPA <strong className="text-foreground">keine Schnittstelle</strong> und automatisiert sogar Software, die sich jeder API verschließt.</p>
                    <p>Mit <strong className="text-foreground">Robotic AI</strong> kommt Intelligenz dazu: Der Roboter liest unstrukturierte Belege per KI aus, trifft Entscheidungen und bewältigt Ausnahmen, statt bei jeder Abweichung zu stoppen. Aus sturem Klicken wird eine Automatisierung, die versteht.</p>
                    <p>Damit ist RPA der ideale Weg für <strong className="text-foreground">Steuerberater, Buchhaltungen und Betriebe mit Altsystemen</strong>: DATEV, BMD, Portale und geschlossene Branchensoftware lassen sich automatisieren, ohne auf eine Schnittstelle zu warten, die es nie geben wird.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Robotic Process Automation</Badge>
                    <Badge variant="secondary" className="rounded-full">DATEV Automatisierung</Badge>
                    <Badge variant="secondary" className="rounded-full">BMD Automatisierung</Badge>
                    <Badge variant="secondary" className="rounded-full">Intelligent Automation</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">RPA auf einen Blick</CardTitle>
                    <CardDescription>Die wichtigsten Eckdaten im Überblick.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {ataglance.map(([label, value]) => (
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

          {/* PROBLEM -> LÖSUNG */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum RPA?</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Die Klickarbeit, die niemand machen will</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Überall, wo Mitarbeiter dieselben Schritte in geschlossener Software wiederholen, übernimmt ein Roboter.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 pl-1">Was heute passiert</div>
                  {problems.map(({ problem }, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl border bg-background"><X className="w-5 h-5 text-destructive mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{problem}</span></div>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-2 pl-1">Was der Roboter stattdessen tut</div>
                  {problems.map(({ solution }, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-primary/20 bg-primary/5"><Check className="w-5 h-5 text-primary mt-0.5 shrink-0" /><span className="text-sm leading-relaxed font-medium">{solution}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* BENTO */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Die Vorteile</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Warum RPA mit KI der Unterschied ist</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Ein Roboter, der nur klickt, ist fragil. Ein Roboter, der versteht, arbeitet zuverlässig, auch bei Sonderfällen.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="hover-lift border-2 lg:col-span-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2"><KeyRound className="w-6 h-6 text-primary" /></div>
                    <CardTitle className="text-xl">{bentoFeatures[0].title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{bentoFeatures[0].description}</CardDescription>
                  </CardHeader>
                </Card>
                {bentoFeatures.slice(1).map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <Card key={i} className="hover-lift border-2">
                      <CardHeader>
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2"><Icon className="w-5 h-5 text-primary" /></div>
                        <CardTitle className="text-lg">{f.title}</CardTitle>
                        <CardDescription className="leading-relaxed">{f.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* BRANCHEN / USE CASES */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Anwendungsfälle</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Wo Software-Roboter am meisten leisten</h2>
                <p className="text-lg text-muted-foreground mt-4">Wählen Sie Ihren Bereich, wir zeigen typische Roboter aus der Praxis.</p>
              </div>
              <Tabs defaultValue="steuer" className="w-full">
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
                        <p className="text-muted-foreground leading-relaxed mb-5">{b.intro}</p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {b.items.map((item, j) => (
                            <div key={j} className="flex items-start gap-2.5 p-3 rounded-lg border bg-background"><Bot className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{item}</span></div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>

          {/* VERGLEICH */}
          <section id="vergleich" className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Einordnung</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">RPA vs. API-Integration vs. manuell</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Wir empfehlen ehrlich: Gibt es eine API, integrieren wir direkt. Gibt es keine, ist RPA der Weg. Oft kombinieren wir beides.</p>
              </div>
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[28%] font-bold text-foreground">Merkmal</TableHead>
                      <TableHead className="text-primary font-bold"><span className="inline-flex items-center gap-1.5"><Bot className="w-4 h-4" />RPA / Robotic AI</span></TableHead>
                      <TableHead className="text-muted-foreground"><span className="inline-flex items-center gap-1.5"><Cpu className="w-4 h-4" />API-Integration</span></TableHead>
                      <TableHead className="text-muted-foreground">Manuell</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparison.map((row, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{row.feature}</TableCell>
                        <TableCell className="text-sm text-primary font-medium">{row.rpa}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{row.api}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{row.manuell}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
              <p className="text-sm text-muted-foreground text-center mt-4">Wo eine stabile Schnittstelle existiert, setzen wir auf <a href="/leistungen/n8n-automatisierung" className="text-primary hover:underline">n8n</a>. RPA ist die Lösung genau dort, wo es keine gibt.</p>
            </div>
          </section>

          {/* PROZESS */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unser Prozess</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Ihr RPA-Projekt in 4 Schritten</h2>
                <p className="text-lg text-muted-foreground mt-4">Von der Prozessaufnahme bis zum wartungsstabilen Roboter, transparent und DSGVO-konform.</p>
              </div>
              <ProcessSteps steps={steps} />
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zu RPA & Robotic AI</h2>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqs.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-2 border-border rounded-xl px-6 bg-background data-[state=open]:border-primary/30 data-[state=open]:bg-primary/5">
                    <AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-5">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* RELATED */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Mehr Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zu RPA</h2>
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
