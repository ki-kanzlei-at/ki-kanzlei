import type { Metadata } from "next";
import { serviceLogos } from "@/lib/serviceLogos";
import Script from "next/script";
import { NavigationHome } from "@/components/NavigationHome";
import { WorkflowExamples } from "@/components/WorkflowExamples";
import { ShoppingCart as WfCart, CalendarCheck as WfCal, UserPlus as WfUserPlus, Receipt as WfReceipt, MessageSquare as WfMessage, Megaphone as WfMega } from "lucide-react";
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
  Check, X, Shield, ShieldCheck, MapPin, Bot, Workflow, TrendingUp, Lock, GitBranch,
  Users, Megaphone, Calculator, MessageSquare, UserPlus, Cog, Search, Settings2, Rocket, Phone,
  Clock, Database, RefreshCw, ArrowRightLeft, Boxes, Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Make.com Automatisierung (ehemals Integromat)",
  description:
    "Make.com (früher Integromat) für Unternehmen: Wir bauen visuelle Automatisierungs-Szenarien, verbinden Ihre Tools, integrieren KI und beraten DSGVO-konform mit EU-Alternative. Prozessautomatisierung im DACH-Raum.",
  keywords:
    "Make.com, Make Automatisierung, Integromat, Make Szenario, Make Agentur, Make Beratung, Make vs Zapier, Make Alternative, Make n8n, Workflow Automatisierung, Prozessautomatisierung, Integromat Nachfolger, Make DSGVO",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/make" },
};

const faqs = [
  {
    q: "Was ist Make.com und was war Integromat?",
    a: "Make.com ist eine visuelle Plattform für Workflow-Automatisierung und der direkte Nachfolger von Integromat. 2022 wurde Integromat in Make umbenannt, die Technologie und die meisten Funktionen blieben erhalten und wurden stark erweitert. In Make bauen Sie Automatisierungen als sogenannte Szenarien auf einer grafischen Leinwand: Module für einzelne Apps werden verbunden, dazwischen liegen Filter, Verzweigungen und Transformationen. Make gilt als besonders mächtig bei komplexer Logik und ist dabei oft günstiger als Zapier.",
  },
  {
    q: "Was ist der Unterschied zwischen Make und Zapier?",
    a: "Zapier ist auf maximale Einfachheit getrimmt und hat die meisten App-Anbindungen, rechnet aber pro Task ab und wird bei Volumen teuer. Make bietet eine visuelle Leinwand mit deutlich mehr Logik je Szenario, etwa Schleifen, Aggregationen und Routing, und ist im Verhältnis günstiger, weil mehrere Schritte oft als eine Operation zählen. Make eignet sich daher besonders, wenn Ihre Abläufe verzweigt sind und Sie Wert auf Kostenkontrolle legen. Für volle Datensouveränität im DACH-Raum bleibt eine self-hosted Lösung wie n8n die datenschutzfreundlichste Variante.",
  },
  {
    q: "Ist Make.com DSGVO-konform?",
    a: "Make bietet EU-Rechenzentren und einen Auftragsverarbeitungsvertrag, was die DSGVO-Lage gegenüber rein US-basierten Diensten verbessert. Für viele Anwendungsfälle lässt sich Make damit rechtskonform einsetzen. Bei besonders sensiblen Daten, etwa Mandanten-, Patienten- oder Personaldaten, empfehlen wir dennoch zu prüfen, ob eine vollständig selbst gehostete EU-Lösung sinnvoller ist. Wir bewerten Ihren konkreten Fall und sagen Ihnen klar, was tragfähig ist.",
  },
  {
    q: "Können Sie bestehende Integromat- oder Make-Szenarien übernehmen?",
    a: "Ja. Wir übernehmen vorhandene Szenarien, räumen sie auf, ergänzen Fehlerbehandlung und Monitoring und senken bei Bedarf die Operationskosten. Wenn Sie noch alte Integromat-Abläufe nutzen, modernisieren wir sie auf den aktuellen Make-Standard oder migrieren sie auf eine Alternative.",
  },
  {
    q: "Lässt sich KI in Make integrieren?",
    a: "Ja. Make bietet Module für OpenAI und weitere KI-Dienste. Damit lassen sich Texte generieren, Inhalte klassifizieren, Bilder verarbeiten oder Daten anreichern, direkt im Szenario. Für komplexe AI-Agent-Logik mit lokalen Modellen und voller Kontrolle ist n8n flexibler. Wir zeigen Ihnen, welcher Ansatz zu Ihrem Vorhaben passt.",
  },
  {
    q: "Wie lange dauert die Umsetzung eines Make-Szenarios?",
    a: "Ein klar umrissenes Szenario ist häufig in wenigen Tagen produktiv. Umfangreichere Automatisierungen mit mehreren Apps, Routing, KI-Schritten und Fehlerbehandlung brauchen ein bis zwei Wochen. Wir starten mit dem Use Case, der den größten Effekt bringt, und bauen schrittweise aus.",
  },
  {
    q: "Was kostet Make im Vergleich?",
    a: "Make rechnet nach Operationen ab, also nach einzelnen Modulaktionen je Durchlauf. Weil ein Szenario mit mehreren Schritten oft günstiger ist als die gleiche Logik in einzelnen Zapier-Tasks, ist Make bei verzweigten Abläufen meist die wirtschaftlichere Cloud-Option. Im Assessment rechnen wir Ihr Volumen durch und vergleichen mit einer self-hosted Lösung, damit Sie die Gesamtkosten kennen.",
  },
  {
    q: "Übernehmen Sie auch Betrieb und Wartung?",
    a: "Ja. Wir überwachen Ihre Szenarien, reagieren auf Fehler, passen sie an Änderungen Ihrer Tools an und erweitern sie um neue Use Cases. So bleibt Ihre Automatisierung dauerhaft stabil und wächst mit Ihren Anforderungen.",
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
  name: "Make.com Automatisierung & Beratung",
  serviceType: "Workflow-Automatisierung, Make, Integromat, Prozessautomatisierung",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "Make.com (ehemals Integromat) Automatisierung für Unternehmen im DACH-Raum: visuelle Szenarien, KI-Integration, Optimierung und DSGVO-konforme EU-Alternativen.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const stats = [
  { value: "2000+", label: "verbindbare Apps" },
  { value: "EU", label: "Rechenzentren möglich" },
  { value: "24/7", label: "laufen Ihre Szenarien" },
  { value: "1-2 Wo.", label: "bis zum ersten Szenario" },
];

const ataglance = [
  ["Typ", "Cloud, visuell"],
  ["Früherer Name", "Integromat"],
  ["App-Anbindungen", "über 2000"],
  ["Abrechnung", "pro Operation"],
  ["Hosting", "EU oder USA"],
  ["Stärke", "komplexe Logik je Szenario"],
];

const problems = [
  { problem: "Verzweigte Abläufe scheitern an starren Automatisierungstools.", solution: "Make bildet Routing, Schleifen und Bedingungen sauber in einem Szenario ab." },
  { problem: "Die Cloud-Automatisierung wird mit jedem Schritt teurer.", solution: "Make bündelt Schritte zu Operationen und senkt so die laufenden Kosten." },
  { problem: "Daten müssen zwischen vielen Apps hin- und herkopiert werden.", solution: "Ein Szenario verteilt die Daten automatisch an alle Zielsysteme." },
  { problem: "Bei Fehlern bemerkt niemand, dass ein Ablauf hängt.", solution: "Wir bauen Fehlerbehandlung, Wiederholungen und Alerts in jedes Szenario." },
];

const bentoFeatures = [
  { icon: Layers, title: "Komplexe Szenarien, sauber gebaut", description: "Make spielt seine Stärke bei verzweigter Logik aus: Routing, Iteratoren, Aggregatoren und Datentransformationen. Wir bauen Ihre Szenarien strukturiert, nachvollziehbar und mit robuster Fehlerbehandlung, sodass auch anspruchsvolle Abläufe zuverlässig durchlaufen." },
  { icon: ArrowRightLeft, title: "Über 2000 Apps verbinden", description: "CRM, Shop, Mail, Datenbanken, Buchhaltung und mehr, plus jede REST-API über das HTTP-Modul." },
  { icon: TrendingUp, title: "Kosten im Griff", description: "Wir optimieren den Operationsverbrauch je Szenario, damit Ihre Automatisierung wirtschaftlich bleibt." },
  { icon: Bot, title: "KI in Ihre Szenarien", description: "OpenAI und weitere Modelle direkt im Ablauf: zusammenfassen, klassifizieren, generieren, anreichern." },
  { icon: Shield, title: "EU-Hosting & DSGVO", description: "Wir konfigurieren Make mit EU-Rechenzentrum und AVV und beraten ehrlich, wann eine self-hosted Lösung besser passt." },
  { icon: RefreshCw, title: "Betrieb & Ausbau", description: "Wir überwachen, warten und erweitern Ihre Szenarien, statt sie nach dem Setup sich selbst zu überlassen." },
];

const departments = [
  { value: "vertrieb", label: "Vertrieb", icon: Users, head: "Vertrieb & CRM", intro: "Leads, Angebote und Follow-ups laufen automatisch durch.", items: ["Leads aus allen Kanälen ins CRM eintragen und nach Regeln zuweisen.", "Angebote aus Vorlagen erzeugen und versenden.", "Automatische Erinnerungen bei stillen Leads.", "Datenanreicherung aus mehreren Quellen vor der Übergabe."] },
  { value: "marketing", label: "Marketing", icon: Megaphone, head: "Marketing & Content", intro: "Kampagnen und Daten fließen vernetzt, nicht in Silos.", items: ["Leads aus Ads anreichern, taggen und segmentieren.", "Content-Freigaben und Veröffentlichungen orchestrieren.", "Kampagnen-Kennzahlen aus mehreren Quellen aggregieren.", "Listen über alle Tools synchron halten."] },
  { value: "finanzen", label: "Finanzen", icon: Calculator, head: "Finanzen & Buchhaltung", intro: "Belege und Zahlen landen geprüft in Ihrer Fachsoftware.", items: ["Rechnungen aus dem Postfach einsammeln und strukturiert ablegen.", "Belegdaten auslesen und an die Buchhaltung übergeben.", "Zahlungseingänge mit offenen Posten abgleichen.", "Wiederkehrende Finanz-Reports automatisch erzeugen."] },
  { value: "support", label: "Service", icon: MessageSquare, head: "Kundenservice & Support", intro: "Anfragen werden erkannt, geroutet und vorbereitet.", items: ["Tickets klassifizieren und an das richtige Team verteilen.", "Antwortentwürfe per KI vorbereiten.", "Status-Updates automatisch versenden.", "Eskalationen sofort melden."] },
  { value: "hr", label: "HR", icon: UserPlus, head: "HR & Recruiting", intro: "Recruiting-Routine vom Eingang bis zum Onboarding.", items: ["Bewerbungen sammeln und ins Tool übernehmen.", "Bestätigungen und Termine automatisch versenden.", "Onboarding-Schritte koordiniert anstoßen.", "Abwesenheiten erfassen und eintragen."] },
  { value: "ops", label: "Betrieb", icon: Cog, head: "Operations & IT", intro: "Systeme, Daten und Alarme verbunden statt abgetippt.", items: ["Daten zwischen Datenbanken und APIs synchronisieren.", "Routineaufgaben zeitgesteuert ausführen.", "Webhooks entgegennehmen und verarbeiten.", "Benachrichtigungen bündeln und ausspielen."] },
];

const comparison = [
  { feature: "Bedienung", make: "visuell, mächtig", zapier: "sehr einfach", n8n: "etwas technischer" },
  { feature: "Komplexe Logik", make: "stark (Routing, Iteratoren)", zapier: "begrenzt", n8n: "voll, plus Custom Code" },
  { feature: "App-Anbindungen", make: "über 2000", zapier: "über 6000", n8n: "über 500 plus jede API" },
  { feature: "Kostenmodell", make: "pro Operation, günstiger", zapier: "pro Task, teurer", n8n: "Fixkosten, keine je Lauf" },
  { feature: "Hosting", make: "EU oder USA, Cloud", zapier: "USA, Cloud", n8n: "self-hosted in der EU" },
  { feature: "Datensouveränität", make: "teilweise", zapier: "eingeschränkt", n8n: "voll, bei Ihnen" },
  { feature: "KI- & AI-Agents", make: "begrenzt", zapier: "begrenzt", n8n: "nativ" },
];

const steps = [
  { step: "01", icon: Phone, title: "Kostenlose Erstanalyse", time: "30 Minuten", description: "Wir identifizieren die Abläufe mit dem größten Zeitverlust und prüfen, welche sich als Make-Szenario eignen." },
  { step: "02", icon: Search, title: "Konzept & Tool-Wahl", time: "Woche 1", description: "Wir skizzieren die Szenarien, schätzen Operationsverbrauch und Kosten und empfehlen ehrlich Make, Zapier oder n8n." },
  { step: "03", icon: Settings2, title: "Umsetzung & Test", time: "Woche 1 bis 2", description: "Wir bauen die Szenarien, verbinden Ihre Tools und testen gründlich inklusive Fehlerpfaden und Monitoring." },
  { step: "04", icon: Rocket, title: "Go-Live & Betreuung", time: "ab Woche 2", description: "Die Szenarien laufen. Wir überwachen, optimieren die Kosten und bauen den nächsten Use Case." },
];

const related = [
  { href: "/leistungen/zapier", icon: ArrowRightLeft, title: "Zapier", desc: "Die einfachste Cloud-Automatisierung mit den meisten App-Anbindungen." },
  { href: "/leistungen/n8n-automatisierung", icon: Workflow, title: "n8n Automatisierung", desc: "Die DSGVO-konforme, self-hosted Alternative ohne Kosten je Ausführung." },
  { href: "/leistungen/rpa", icon: Bot, title: "RPA & Robotic AI", desc: "Automatisierung auch für Systeme ohne Schnittstelle, etwa DATEV, BMD oder Altsysteme." },
];

function LogoBox({ slug, alt, imgClassName = "w-5 h-5", boxClassName = "" }: { slug: string; alt: string; imgClassName?: string; boxClassName?: string }) {
  return (
    <span className={`inline-flex items-center justify-center bg-white border border-border rounded ${boxClassName}`}>
      <img src={`/img/logos/${slug}.svg`} alt={alt} className={imgClassName} />
    </span>
  );
}

export default function Page() {
  return (
    <>
      <Script id="faq-make" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-make" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <LogoBox slug="make" alt="Make.com" imgClassName="w-9 h-9" boxClassName="rounded-xl p-2 shadow-sm" />
                    <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                      Make.com, ehemals Integromat
                    </Badge>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Make.com Automatisierung für <span className="text-primary">komplexe Abläufe</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Make (früher Integromat) bildet auch verzweigte Prozesse sauber ab, zu planbaren Kosten. Wir konzipieren, bauen und optimieren Ihre Szenarien, integrieren KI und beraten DSGVO-konform mit EU-Hosting oder self-hosted Alternative.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Assessment</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#vergleich">Make vs. Zapier vs. n8n</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> EU-Rechenzentrum möglich</span>
                    <span className="flex items-center gap-1.5"><GitBranch className="w-4 h-4 text-primary" /> Komplexe Logik</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Hero visual: Make scenario */}
                <div className="relative">
                  <Card className="border-2 shadow-xl shadow-primary/5 overflow-hidden">
                    <CardHeader className="border-b border-border py-3">
                      <div className="flex items-center gap-2">
                        <LogoBox slug="make" alt="Make" imgClassName="w-4 h-4" boxClassName="p-1 rounded" />
                        <span className="font-mono text-xs text-muted-foreground">rechnungs-routing.scenario</span>
                        <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> aktiv
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-full flex items-center gap-3 rounded-xl border-2 border-primary/40 bg-primary/5 px-3.5 py-2.5">
                          <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0"><Database className="w-5 h-5 text-primary" /></div>
                          <div className="min-w-0"><div className="text-[10px] uppercase tracking-wider text-primary font-medium">Modul</div><div className="text-sm font-semibold truncate">Neue Rechnung erkannt</div></div>
                        </div>
                        <div className="w-full grid grid-cols-2 gap-3">
                          <div className="flex items-center gap-2.5 rounded-xl border-2 border-border bg-background px-3 py-2.5 shadow-sm">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><GitBranch className="w-4 h-4 text-primary" /></div>
                            <div className="min-w-0"><div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Router</div><div className="text-xs font-semibold truncate">Über 1000 €</div></div>
                          </div>
                          <div className="flex items-center gap-2.5 rounded-xl border-2 border-border bg-background px-3 py-2.5 shadow-sm">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><Bot className="w-4 h-4 text-primary" /></div>
                            <div className="min-w-0"><div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">KI</div><div className="text-xs font-semibold truncate">Felder prüfen</div></div>
                          </div>
                        </div>
                        <div className="w-full flex items-center gap-3 rounded-xl border-2 border-border bg-background px-3.5 py-2.5 shadow-sm">
                          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><Check className="w-5 h-5 text-primary" /></div>
                          <div className="min-w-0 flex-1"><div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Aktion</div><div className="text-sm font-semibold truncate">An Buchhaltung übergeben</div></div>
                          <Check className="w-4 h-4 text-green-600 shrink-0" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="hidden lg:flex absolute -top-4 -right-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium">
                    <Layers className="w-3.5 h-3.5 text-primary" /> Routing & Schleifen
                  </div>
                  <div className="hidden lg:flex absolute -bottom-4 -left-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium">
                    <Lock className="w-3.5 h-3.5 text-primary" /> EU-Hosting möglich
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

          {/* DEFINITION */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Kurz erklärt</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Make.com, der mächtige Integromat-Nachfolger</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p><strong className="text-foreground">Make.com</strong> ist die visuelle Automatisierungsplattform, die 2022 aus <strong className="text-foreground">Integromat</strong> hervorging. Sie bauen Abläufe als <strong className="text-foreground">Szenarien</strong>: Module für einzelne Apps werden auf einer Leinwand verbunden, dazwischen liegen Filter, Router und Transformationen.</p>
                    <p>Der große Vorteil gegenüber Zapier ist die <strong className="text-foreground">Tiefe der Logik</strong>: Schleifen, Aggregationen, bedingtes Routing und Datenmanipulation gehören zum Standard. Weil mehrere Schritte oft als eine Operation zählen, ist Make bei verzweigten Abläufen meist günstiger.</p>
                    <p>Wir bauen Make-Szenarien, die auch bei komplexen Prozessen <strong className="text-foreground">stabil und nachvollziehbar</strong> bleiben, und beraten ehrlich, wann das EU-Hosting von Make ausreicht und wann eine self-hosted Lösung wie n8n der datenschutzfreundlichere Weg ist.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Make Szenario</Badge>
                    <Badge variant="secondary" className="rounded-full">Integromat Nachfolger</Badge>
                    <Badge variant="secondary" className="rounded-full">Make Alternative</Badge>
                    <Badge variant="secondary" className="rounded-full">Prozessautomatisierung</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Make auf einen Blick</CardTitle>
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
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum Make?</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Wenn einfache Tools an Grenzen stoßen</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Make ist die richtige Wahl, sobald Ihre Abläufe verzweigt sind und Kostenkontrolle zählt.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 pl-1">Was heute passiert</div>
                  {problems.map(({ problem }, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl border bg-background"><X className="w-5 h-5 text-destructive mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{problem}</span></div>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-2 pl-1">Was Make stattdessen tut</div>
                  {problems.map(({ solution }, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-primary/20 bg-primary/5"><Check className="w-5 h-5 text-primary mt-0.5 shrink-0" /><span className="text-sm leading-relaxed font-medium">{solution}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <WorkflowExamples
            tool="Make.com"
            examples={[
              { icon: WfCart, title: "Bestellung bis Versand automatisieren", trigger: "Neue Bestellung im Shop", steps: ["Lagerbestand aktualisieren", "Versandlabel erzeugen und Logistik informieren", "Kunden-Mail mit Tracking senden"], result: "Vom Klick bis zum Versand ohne Handarbeit" },
              { icon: WfCal, title: "Termine rund um die Uhr koordinieren", trigger: "Termin online gebucht", steps: ["Eintrag in Kalender und CRM", "Erinnerung per SMS und E-Mail", "Vorbereitungs-Dokument bereitstellen"], result: "Weniger No-Shows, kein manuelles Nachfassen" },
              { icon: WfUserPlus, title: "Leads automatisch nachfassen", trigger: "Neue Anfrage über Anzeige oder Formular", steps: ["Lead im CRM anlegen und bewerten", "Passende Folge-Mails ausspielen", "Vertrieb bei heißen Leads benachrichtigen"], result: "Jeder Lead wird verlässlich betreut" },
              { icon: WfReceipt, title: "Rechnungen und Belege verarbeiten", trigger: "Beleg per Mail oder Upload", steps: ["Daten per KI auslesen", "An Buchhaltung übergeben", "Sauber in der Ablage archivieren"], result: "Schluss mit manueller Belegerfassung" },
              { icon: WfMessage, title: "Bewertungen und Feedback steuern", trigger: "Neue Bewertung oder Umfrage-Antwort", steps: ["Stimmung per KI einordnen", "Bei Kritik sofort Team alarmieren", "Antwortentwurf vorbereiten"], result: "Kein Feedback bleibt unbeantwortet" },
              { icon: WfMega, title: "Marketing-Kampagnen orchestrieren", trigger: "Kampagne oder Content geplant", steps: ["Assets an alle Kanäle verteilen", "Werbebudgets und Listen aktualisieren", "Ergebnisse im Dashboard sammeln"], result: "Kampagnen laufen synchron, ohne Copy-Paste" },
            ]}
          />

          {/* BENTO */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Was wir liefern</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Make-Szenarien, die halten</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Wir nutzen die volle Tiefe von Make und denken Kosten und Datenschutz von Anfang an mit.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="hover-lift border-2 lg:col-span-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2"><Layers className="w-6 h-6 text-primary" /></div>
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

          {/* USE CASES */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Anwendungsfälle</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Was wir mit Make automatisieren</h2>
                <p className="text-lg text-muted-foreground mt-4">Wählen Sie einen Bereich, wir zeigen konkrete Szenarien aus der Praxis.</p>
              </div>
              <Tabs defaultValue="vertrieb" className="w-full">
                <TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">
                  {departments.map((d) => {
                    const Icon = d.icon;
                    return (
                      <TabsTrigger key={d.value} value={d.value} className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border">
                        <Icon className="w-4 h-4 mr-1.5" />{d.label}
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
                {departments.map((d) => (
                  <TabsContent key={d.value} value={d.value}>
                    <Card className="border-2">
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-bold mb-2">{d.head}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-5">{d.intro}</p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {d.items.map((item, j) => (
                            <div key={j} className="flex items-start gap-2.5 p-3 rounded-lg border bg-background"><Workflow className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{item}</span></div>
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
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Tool-Vergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Make vs. Zapier vs. n8n</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Make glänzt bei komplexer Logik und Kosten, n8n bei Datensouveränität, Zapier bei Einfachheit. Wir beraten unabhängig.</p>
              </div>
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[28%] font-bold text-foreground">Merkmal</TableHead>
                      <TableHead className="text-primary font-bold"><span className="inline-flex items-center gap-1.5"><LogoBox slug="make" alt="Make" imgClassName="w-4 h-4" boxClassName="p-0.5" />Make</span></TableHead>
                      <TableHead className="text-muted-foreground"><span className="inline-flex items-center gap-1.5"><LogoBox slug="zapier" alt="Zapier" imgClassName="w-4 h-4" boxClassName="p-0.5" />Zapier</span></TableHead>
                      <TableHead className="text-muted-foreground"><span className="inline-flex items-center gap-1.5"><LogoBox slug="n8n" alt="n8n" imgClassName="w-4 h-4" boxClassName="p-0.5" />n8n</span></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparison.map((row, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{row.feature}</TableCell>
                        <TableCell className="text-sm text-primary font-medium">{row.make}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{row.zapier}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{row.n8n}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </section>

          {/* PROZESS */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unser Prozess</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Ihr Make-Projekt in 4 Schritten</h2>
                <p className="text-lg text-muted-foreground mt-4">Transparent, mit ehrlicher Tool-Empfehlung und Kostenblick.</p>
              </div>
              <ProcessSteps steps={steps} />
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zu Make.com</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zu Make</h2>
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
