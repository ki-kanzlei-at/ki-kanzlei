import type { Metadata } from "next";
import Script from "next/script";
import { NavigationHome } from "@/components/NavigationHome";
import { FooterModern } from "@/components/FooterModern";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import {
  Search,
  Brain,
  Mail,
  Linkedin,
  Share2,
  Inbox,
  BarChart3,
  PenLine,
  Send,
  Clock,
  Download,
  Shield,
  Globe,
  MapPin,
  Check,
  ArrowRight,
  Target,
  Server,
} from "lucide-react";

export const metadata: Metadata = {
  title: "firmeo, KI-Outreach-Plattform für Neukundengewinnung",
  description:
    "firmeo ist die KI-Outreach-Plattform der KI Kanzlei: Leads finden, per AI Researcher anreichern und scoren, über E-Mail, LinkedIn und Social Media automatisiert ansprechen und alle Antworten in einer Unified Inbox managen. DSGVO-konform, EU-Hosting.",
  keywords:
    "firmeo, Outreach Plattform, Leadsuche, AI Researcher, Lead Scoring, LinkedIn Automation, Cold Email, Social Media Automation, Unified Inbox, B2B Akquise, Neukundengewinnung DSGVO",
  alternates: { canonical: "https://ki-kanzlei.at/produkte/firmeo" },
};

// Kern-Module der Plattform (firmeo.ai)
const modules = [
  { icon: Search, title: "Leadsuche", tag: "", desc: "Finde tausende passende Unternehmen nach Branche, Region und Größe, samt Firmenadressen und Ansprechpartnern in AT, DE und CH." },
  { icon: Brain, title: "AI Researcher", tag: "", desc: "Beantwortet Fragen zu jedem Lead in Sekunden, aus Website, Google, LinkedIn und Presse, mit Quellen und erkannten Kaufsignalen." },
  { icon: Mail, title: "E-Mail-Kampagnen", tag: "", desc: "Automatisierte Sequenzen mit KI-personalisierten Nachrichten und smarten Follow-ups, die pausieren, sobald jemand antwortet." },
  { icon: Linkedin, title: "LinkedIn-Automation", tag: "", desc: "Profilbesuche, Vernetzungsanfragen und Follow-up-Nachrichten automatisch, mit persönlicher Notiz und sicheren Tageslimits." },
  { icon: Share2, title: "Social Media", tag: "Neu", desc: "Beiträge mit KI-Unterstützung erstellen und über mehrere Kanäle planen, mit Redaktionskalender." },
  { icon: Inbox, title: "Unified Inbox", tag: "", desc: "Antworten aus E-Mail und LinkedIn an einem Ort, mit KI-Antwortvorschlägen in deinem Ton." },
];

const features = [
  { icon: BarChart3, title: "Lead-Scoring", desc: "Die KI bewertet jeden Kontakt nach Fit und Kaufwahrscheinlichkeit, damit Sie die besten zuerst angehen." },
  { icon: PenLine, title: "KI-Personalisierung", desc: "Jede Nachricht wird pro Empfänger:in getextet, keine Massenmail." },
  { icon: Send, title: "Zustellbarkeit & Postfächer", desc: "Versand über Ihr eigenes Postfach (Google Workspace, Microsoft 365) mit Warmup und Rotation für hohe Zustellbarkeit." },
  { icon: Clock, title: "Suchverlauf", desc: "Gespeicherte Suchen erneut laufen lassen und neue Treffer holen, ohne Filter neu zu setzen." },
  { icon: Download, title: "CSV-Export", desc: "Leads und Kontakte als CSV exportieren und direkt im eigenen Stack weiterverwenden." },
  { icon: Shield, title: "DSGVO-konform", desc: "Hosting in der EU, dokumentierte Datenquellen und volle Kontrolle über Ihre Daten." },
];

const steps = [
  { icon: Target, step: "01", title: "Zielgruppe definieren", desc: "Branche, Region und Größe festlegen. Die Leadsuche liefert passende Firmen samt Ansprechpartnern." },
  { icon: Brain, step: "02", title: "Recherchieren & scoren", desc: "Der AI Researcher reichert jeden Lead an, das Lead-Scoring priorisiert die vielversprechendsten." },
  { icon: Send, step: "03", title: "Multichannel ansprechen", desc: "Automatisierte, KI-personalisierte Sequenzen über E-Mail, LinkedIn und Social Media, mit smarten Follow-ups." },
  { icon: Inbox, step: "04", title: "Zentral managen", desc: "Alle Antworten landen in der Unified Inbox, inklusive KI-Antwortvorschlägen in Ihrem Ton." },
];

const benefits = [
  { icon: Server, title: "Self-Service", text: "Sie bedienen firmeo selbst und behalten volle Kontrolle, kein Agentur-Lock-in, keine Blackbox." },
  { icon: Globe, title: "EU-Hosting", text: "Frische Web-Recherche statt gekaufter Datenbanken, gehostet in der EU." },
  { icon: MapPin, title: "Made in Austria", text: "Ein Produkt der KI Kanzlei, mit Verständnis für den DACH-Markt (AT, DE, CH)." },
  { icon: ArrowRight, title: "Begleiteter Start", text: "Auf Wunsch richten wir Ihre erste Kampagne gemeinsam ein und optimieren mit Ihnen." },
];

const faqs = [
  {
    q: "Welche Kanäle deckt firmeo ab?",
    a: "firmeo bündelt E-Mail-Kampagnen, LinkedIn-Automation und neu auch Social Media in einer Oberfläche. Davor finden Sie über die Leadsuche passende Firmen und reichern sie mit dem AI Researcher an. Alle Antworten laufen in der Unified Inbox zusammen.",
  },
  {
    q: "Woher kommen die Leads?",
    a: "firmeo durchsucht das Web frisch in Echtzeit, statt auf gekaufte Datenbanken zu setzen. Sie filtern nach Branche, Region und Größe und erhalten aktuelle Firmenadressen und Ansprechpartner in Österreich, Deutschland und der Schweiz.",
  },
  {
    q: "Ist der Versand zustellbar und DSGVO-konform?",
    a: "Ja. Sie versenden über Ihr eigenes Postfach (Google Workspace oder Microsoft 365) mit Warmup und Rotation für hohe Zustellbarkeit. Hosting in der EU, dokumentierte Datenquellen und ein AVV sorgen für DSGVO-Konformität.",
  },
  {
    q: "Brauche ich technisches Wissen?",
    a: "Nein. firmeo ist als Self-Service-Plattform gebaut und führt Sie durch jeden Schritt. Wenn Sie möchten, übernehmen wir Setup und Feinschliff gemeinsam mit Ihnen.",
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
  name: "firmeo",
  url: "https://firmeo.ai",
  serviceType: "Outreach-Automatisierung, Lead-Generierung, Multichannel-Akquise",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "firmeo: KI-Outreach-Plattform für Neukundengewinnung. Leadsuche, AI Researcher, Lead-Scoring, E-Mail, LinkedIn und Social Media plus Unified Inbox. DSGVO-konform, EU-Hosting.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

export default function Page() {
  return (
    <>
      <Script id="faq-firmeo" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-firmeo" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center justify-center bg-white border border-border rounded-xl p-2 shadow-sm">
                      <img src="/img/logos/firmeo.svg" alt="firmeo Logo" className="h-8 w-auto" />
                    </span>
                    <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                      Outreach-Plattform
                    </Badge>
                    <Badge variant="secondary" className="rounded-full">Warteliste offen</Badge>
                    <span className="text-sm text-muted-foreground">powered by <a href="/" className="font-semibold text-foreground hover:text-primary transition-colors">KI Kanzlei</a>, jetzt unter <a href="https://firmeo.ai" target="_blank" rel="noopener" className="font-semibold text-foreground hover:text-primary transition-colors">firmeo.ai</a></span>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Neukunden auf <span className="text-primary">Autopilot</span> mit firmeo
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Von der Leadsuche bis zur Antwort: firmeo findet passende Firmen, recherchiert und scort sie per KI und spricht sie über E-Mail, LinkedIn und Social Media automatisiert an, alles DSGVO-konform.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="https://firmeo.ai/warteliste" target="_blank" rel="noopener">Für den Early Access anmelden</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#module">Funktionen ansehen</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-primary" /> EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> AT, DE, CH</span>
                  </div>
                </div>

                {/* Visual: Module-Pipeline */}
                <Card className="relative border-2 shadow-xl shadow-primary/5 overflow-hidden">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Eine Plattform, alle Schritte</CardTitle>
                      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"><span className="w-2 h-2 rounded-full bg-amber-500" /> Warteliste offen</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-2.5">
                    {modules.map((m) => {
                      const Icon = m.icon;
                      return (
                        <div key={m.title} className="flex items-center gap-3 rounded-xl border-2 border-border bg-background px-3.5 py-2.5">
                          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <span className="text-sm font-semibold">{m.title}</span>
                          {m.tag ? (
                            <Badge className="ml-auto rounded-full text-[10px]">{m.tag}</Badge>
                          ) : (
                            <Check className="w-4 h-4 text-green-600 ml-auto shrink-0" />
                          )}
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* MODULE */}
          <section id="module" className="py-14 md:py-20 scroll-mt-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Die Module</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Alles für Akquise in einer Oberfläche</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Sechs Module, die ineinandergreifen, von der ersten Recherche bis zur Antwort im Postfach.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {modules.map((m) => {
                  const Icon = m.icon;
                  return (
                    <Card key={m.title} className="hover-lift border-2 h-full">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          {m.tag && <Badge className="rounded-full text-xs">{m.tag}</Badge>}
                        </div>
                        <CardTitle className="text-xl">{m.title}</CardTitle>
                        <CardDescription className="leading-relaxed">{m.desc}</CardDescription>
                      </CardHeader>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* FEATURES */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Funktionen im Detail</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Was firmeo stark macht</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Die Funktionen, die aus Kontakten echte Gespräche machen.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {features.map((f) => {
                  const Icon = f.icon;
                  return (
                    <Card key={f.title} className="hover-lift border-2 h-full">
                      <CardHeader>
                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{f.title}</CardTitle>
                        <CardDescription className="leading-relaxed">{f.desc}</CardDescription>
                      </CardHeader>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ABLAUF */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">So funktioniert firmeo</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">In vier Schritten zu neuen Kunden</h2>
              </div>
              <div className="relative grid md:grid-cols-4 gap-6">
                <div className="hidden md:block absolute top-7 left-[12%] right-[12%] h-px bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40" aria-hidden />
                {steps.map(({ icon: Icon, step, title, desc }) => (
                  <div key={step} className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center mb-4 shadow-lg shadow-primary/20 relative z-10 ring-8 ring-background">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-bold text-primary mb-1">SCHRITT {step}</div>
                    <h3 className="text-lg font-bold mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* VORTEILE */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum firmeo</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Plattform statt Blackbox</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {benefits.map(({ icon: Icon, title, text }, i) => (
                  <Card key={i} className="border-2 hover-lift">
                    <CardHeader>
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{title}</CardTitle>
                      <CardDescription className="leading-relaxed">{text}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Bereit für Neukunden auf Autopilot?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">firmeo startet bald im Early Access, die Warteliste auf firmeo.ai ist offen, mit begrenzten Plätzen und Early-Bird-Preisen. Melden Sie sich früh an oder lassen Sie sich in einem kurzen Gespräch zeigen, wie es für Ihr Angebot funktioniert.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="https://firmeo.ai/warteliste" target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-base">
                    Für den Early Access anmelden <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-border bg-card px-7 py-3 text-sm font-semibold hover:border-primary/40 transition-base">Demo anfragen</a>
                </div>
                <p className="mt-6 text-sm text-muted-foreground">firmeo ist ein Produkt der <a href="/" className="font-semibold text-foreground hover:text-primary transition-colors">KI Kanzlei</a>, made in Austria.</p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Häufige Fragen zu firmeo</h2>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-2 border-border rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:bg-primary/5">
                    <AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-5">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          <ContactForm />
        </main>
        <FooterModern />
      </div>
    </>
  );
}
