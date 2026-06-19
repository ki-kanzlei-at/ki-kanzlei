import type { Metadata } from "next";
import Script from "next/script";
import { NavigationHome } from "@/components/NavigationHome";
import { FooterModern } from "@/components/FooterModern";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { serviceLogos } from "@/lib/serviceLogos";
import {
  Check,
  Shield,
  Globe,
  MapPin,
  ArrowRight,
  Sparkles,
  Workflow,
  Bot,
  Database,
  MessageSquare,
  UserCog,
  Rocket,
} from "lucide-react";

export const metadata: Metadata = {
  title: "KI-Produkte von KI Kanzlei: firmeo & mehr in Entwicklung",
  description:
    "Die eigenen KI-Produkte der KI Kanzlei. firmeo, unsere Outreach-Plattform, startet bald in der Beta, weitere KI-Produkte sind in Planung. DSGVO-konform, EU-Hosting, Made in Austria.",
  keywords:
    "KI Produkte, fertige KI-Lösungen, firmeo, Outreach Plattform, KI Agenten, KI Software Produkte, KI Kanzlei Produkte",
  alternates: { canonical: "https://ki-kanzlei.at/produkte" },
};

const comingSoon = [
  { icon: Database, title: "KI-Wissensdatenbank", desc: "Ihr Firmenwissen als eigene, durchsuchbare App, quellenbasiert per RAG. In Planung." },
];

const faqs = [
  {
    q: "Welche KI-Produkte sind geplant?",
    a: "Unser erstes Produkt firmeo, eine Self-Service-Plattform für automatisierte Neukundengewinnung, ist im Aufbau und startet bald in der Beta: Leads finden, über E-Mail, LinkedIn und Social Media ansprechen und Antworten zentral managen. Weitere KI-Produkte wie eine eigene Wissensdatenbank-App sind in Planung und folgen Schritt für Schritt.",
  },
  {
    q: "Was, wenn ich jetzt schon mehr brauche?",
    a: "Dann bauen wir es individuell. Viele unserer kommenden Produkte gibt es heute bereits als maßgeschneiderte Lösung, als KI-Agent oder n8n-Workflow direkt auf Ihre Prozesse zugeschnitten. Sprechen Sie uns einfach an.",
  },
  {
    q: "Sind die Produkte DSGVO-konform?",
    a: "Ja. Daten werden in der EU gehostet, die Verarbeitung ist über einen Auftragsverarbeitungsvertrag (AVV) geregelt und Sie behalten die Kontrolle über Ihre Daten.",
  },
  {
    q: "Werde ich über neue Produkte informiert?",
    a: "Gern. Melden Sie sich kurz über das Kontaktformular, dann sagen wir Bescheid, sobald ein neues Produkt verfügbar ist.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const related = [
  { href: "/leistungen/n8n-automatisierung", icon: Workflow, tag: "Workflow", title: "n8n Automatisierung", desc: "Individuelle Workflows, die Ihre Systeme verbinden, die Engine hinter unseren Produkten." },
  { href: "/leistungen/agentic-ai", icon: Bot, tag: "Automatisierung", title: "Agentic AI & AI Agents", desc: "Autonome KI-Agenten, die mehrstufige Aufgaben planen und end-to-end erledigen." },
  { href: "/leistungen/ki-wissensdatenbank", icon: Database, tag: "Wissen", title: "KI Wissensdatenbank", desc: "Ihr Firmenwissen wird durchsuchbar und beantwortet Fragen quellenbasiert per RAG." },
];

export default function Page() {
  return (
    <>
      <Script id="faq-produkte" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                    Produkte
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Unsere <span className="text-primary">KI-Produkte</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Wir bauen unsere eigenen KI-Produkte. Den Anfang macht firmeo, unsere Outreach-Plattform, die bald in der Beta startet, weitere sind in Planung.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#produkte">Produkte ansehen</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#contact">Über Neues informieren</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-primary" /> EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Visual: Produkt-Roadmap */}
                <Card className="relative border-2 shadow-xl shadow-primary/5 overflow-hidden">
                  <CardHeader className="border-b border-border">
                    <CardTitle className="text-lg">Produkt-Roadmap</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-2.5">
                    <div className="flex items-center gap-3 rounded-xl border-2 border-primary/30 bg-primary/5 px-3.5 py-2.5">
                      <span className="inline-flex items-center justify-center bg-white border border-border rounded-lg p-1 shrink-0">
                        <img src="/img/logos/firmeo.svg" alt="firmeo" className="h-5 w-auto" />
                      </span>
                      <span className="text-sm font-semibold">firmeo</span>
                      <Badge variant="secondary" className="ml-auto rounded-full text-[10px]">Beta bald</Badge>
                    </div>
                    {comingSoon.map((p) => {
                      const Icon = p.icon;
                      return (
                        <div key={p.title} className="flex items-center gap-3 rounded-xl border-2 border-dashed border-border bg-background px-3.5 py-2.5 opacity-75">
                          <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center shrink-0">
                            <Icon className="w-4 h-4 text-muted-foreground" />
                          </div>
                          <span className="text-sm font-medium text-muted-foreground leading-tight">{p.title}</span>
                          <Badge variant="secondary" className="ml-auto rounded-full text-[10px]">Coming soon</Badge>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* PRODUKTE */}
          <section id="produkte" className="py-14 md:py-20 scroll-mt-24 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unsere Produkte</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">firmeo, und was als Nächstes kommt</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">firmeo startet bald in der Beta. Die nächsten Produkte sind in Planung, bis dahin gibt es jede Lösung auch individuell.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
                {/* firmeo, Beta bald */}
                <Card className="border-2 border-primary/30 bg-primary/5 hover-lift flex flex-col h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-flex items-center justify-center bg-white border border-border rounded-xl p-2 shadow-sm">
                        <img src="/img/logos/firmeo.svg" alt="firmeo Logo" className="h-7 w-auto" />
                      </span>
                      <Badge variant="secondary" className="rounded-full">Beta bald</Badge>
                    </div>
                    <CardTitle className="text-xl">firmeo</CardTitle>
                    <CardDescription className="leading-relaxed">
                      Unsere Outreach-Plattform: Leads finden, über E-Mail, LinkedIn und Social Media ansprechen und Antworten zentral managen. Neukunden auf Autopilot, DSGVO-konform. Die Beta startet in Kürze.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto flex flex-col gap-3">
                    <a href="/produkte/firmeo" className="inline-flex items-center justify-center gap-1.5 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-base">
                      Details <ArrowRight className="w-4 h-4" />
                    </a>
                    <a href="#contact" className="text-center text-xs text-muted-foreground hover:text-primary transition-base">Für die Beta vormerken</a>
                  </CardContent>
                </Card>

                {/* coming soon */}
                {comingSoon.map((p) => {
                  const Icon = p.icon;
                  return (
                    <Card key={p.title} className="border-2 border-dashed flex flex-col h-full">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center">
                            <Icon className="w-5 h-5 text-muted-foreground" />
                          </div>
                          <Badge variant="secondary" className="rounded-full">Coming soon</Badge>
                        </div>
                        <CardTitle className="text-lg text-muted-foreground">{p.title}</CardTitle>
                        <CardDescription className="leading-relaxed">{p.desc}</CardDescription>
                      </CardHeader>
                      <CardContent className="mt-auto">
                        <span className="text-xs text-muted-foreground">Heute schon als individuelle Lösung möglich.</span>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* WEITERE PRODUKTE / INDIVIDUELL */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="py-10 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">Weitere Produkte folgen</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                    Wir entwickeln unsere Produkte Schritt für Schritt. Sie brauchen etwas schon heute? Wir setzen jede Lösung individuell als KI-Agent oder Workflow um, auf Ihre Prozesse zugeschnitten.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button size="lg" asChild>
                      <a href="#contact">Individuelle Lösung anfragen</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="/leistungen">Alle Leistungen ansehen</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Häufige Fragen</h2>
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

          {/* VERWANDTE LEISTUNGEN */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Passende Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Brauchen Sie etwas Individuelles?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Diese Leistungen bilden die Basis unserer Produkte und lassen sich frei auf Ihre Prozesse zuschneiden.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {related.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <a key={i} href={s.href} className="group block">
                      <Card className="h-full border-2 hover-lift transition-all group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/5">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${serviceLogos[s.href] ? "bg-white border border-border" : "bg-primary/10 group-hover:bg-primary"}`}>
                              {serviceLogos[s.href] ? <img src={`/img/logos/${serviceLogos[s.href]}.svg`} alt={s.title} className="w-7 h-7 object-contain" /> : <Icon className="w-6 h-6 text-primary transition-colors group-hover:text-white" />}
                            </div>
                            <Badge variant="secondary" className="rounded-full">{s.tag}</Badge>
                          </div>
                          <CardTitle className="text-xl">{s.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                          <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">Mehr erfahren <ArrowRight className="w-4 h-4" /></span>
                        </CardContent>
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
