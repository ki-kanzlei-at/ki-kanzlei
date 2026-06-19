import type { Metadata } from "next";
import Script from "next/script";
import { NavigationHome } from "@/components/NavigationHome";
import { FooterModern } from "@/components/FooterModern";
import { ContactForm } from "@/components/ContactForm";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import {
  Smartphone,
  MessageSquare,
  Eye,
  Sparkles,
  Mic,
  Workflow,
  Shield,
  Globe,
  MapPin,
  Check,
  Search,
  Settings2,
  Rocket,
  Apple,
  Code2,
  Bot,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "App mit KI: KI-App-Entwicklung für iOS, Android & Web",
  description:
    "Apps mit KI entwickeln lassen: mobile und Web-Apps mit eingebauten KI-Features wie Chat, Bilderkennung, Sprache und Personalisierung. DSGVO-konform, EU-Hosting, Made in Austria.",
  keywords:
    "App mit KI, KI App Entwicklung, KI App entwickeln lassen, AI App, Mobile App KI, KI Features App, App mit ChatGPT, KI App Österreich, KI App DACH, KI App Deutschland, KI App Schweiz, KI App Entwicklung Schweiz, AI App Development",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/app-mit-ki" },
};

const logos = [
  { slug: "react", name: "React Native" },
  { slug: "nextdotjs", name: "Next.js" },
  { slug: "typescript", name: "TypeScript" },
  { slug: "python", name: "Python" },
  { slug: "fastapi", name: "FastAPI" },
  { slug: "openai", name: "OpenAI" },
  { slug: "anthropic", name: "Claude" },
  { slug: "googlegemini", name: "Gemini" },
  { slug: "postgresql", name: "PostgreSQL" },
  { slug: "docker", name: "Docker" },
];

const features = [
  { icon: MessageSquare, title: "KI-Chat & Assistent", text: "Ein eingebauter Assistent beantwortet Fragen, führt durch die App und erledigt Aufgaben per Sprache oder Text." },
  { icon: Eye, title: "Bilderkennung", text: "Fotos analysieren, Objekte erkennen, Dokumente auslesen, direkt in der App per Computer Vision." },
  { icon: Sparkles, title: "Personalisierung", text: "Inhalte und Empfehlungen passen sich pro Nutzer an, statt für alle gleich auszusehen." },
  { icon: Mic, title: "Sprachsteuerung", text: "Nutzer sprechen mit der App, Spracheingabe und natürliche Antworten inklusive." },
  { icon: Workflow, title: "Automatisierung im Flow", text: "Wiederkehrende Schritte laufen im Hintergrund, angebunden an Ihre Systeme per API und n8n." },
  { icon: Shield, title: "DSGVO by Design", text: "Datenhaltung in der EU, Verschlüsselung und transparente KI-Kennzeichnung nach EU AI Act." },
];

const platforms = [
  { icon: Apple, title: "iOS", text: "Native Performance auf iPhone und iPad, App-Store-ready." },
  { icon: Smartphone, title: "Android", text: "Ein Code, beide Plattformen, dank React Native oder Flutter." },
  { icon: Globe, title: "Web & PWA", text: "Installierbare Web-Apps, die ohne Store auf jedem Gerät laufen." },
];

const useCases = [
  { title: "Kundenservice-App", text: "KI-Assistent beantwortet Fragen, nimmt Anliegen auf und leitet bei Bedarf an Ihr Team weiter." },
  { title: "Field-Service-App", text: "Techniker fotografieren vor Ort, die KI erkennt Teile, schlägt Schritte vor und erstellt den Bericht." },
  { title: "Interne Mitarbeiter-App", text: "Wissensdatenbank, Formulare und Genehmigungen mit KI-Suche und Auto-Ausfüllen in einer App." },
  { title: "Commerce-App", text: "Personalisierte Empfehlungen, visuelle Suche und ein Einkaufsassistent steigern den Warenkorb." },
];

const steps = [
  { step: "01", icon: Search, title: "Kostenlose Erstanalyse", time: "30 Minuten", description: "Wir klären Idee, Zielgruppe und die KI-Features, die echten Mehrwert bringen, und grenzen den ersten Funktionsumfang ab." },
  { step: "02", icon: Settings2, title: "Konzept & Prototyp", time: "Woche 1 bis 2", description: "Sie erhalten ein Klick-Konzept und einen ersten Prototyp der Kern-Features, bevor voll entwickelt wird." },
  { step: "03", icon: Code2, title: "Entwicklung & Integration", time: "ab Woche 2", description: "Wir bauen die App, binden KI-Modelle und Ihre Systeme an und testen auf echten Geräten." },
  { step: "04", icon: Rocket, title: "Launch & Betreuung", time: "laufend", description: "Veröffentlichung in den Stores oder als Web-App, danach Updates, Monitoring und Weiterentwicklung." },
];

const faqs = [
  {
    q: "Was ist eine App mit KI?",
    a: "Eine App mit KI ist eine mobile oder Web-Anwendung, in die künstliche Intelligenz direkt eingebaut ist, etwa ein Chat-Assistent, Bilderkennung, Sprachsteuerung oder personalisierte Empfehlungen. Die KI ist kein Nebenfeature, sondern Teil des Erlebnisses und nimmt Nutzern echte Arbeit ab.",
  },
  {
    q: "Was ist der Unterschied zur klassischen KI-Softwareentwicklung?",
    a: "Bei der KI-Softwareentwicklung bauen wir Software, Backends und Integrationen für Ihre Prozesse, oft ohne klassische App-Oberfläche. Bei einer App mit KI steht die Endnutzer-Anwendung im Vordergrund, also die mobile oder Web-App, die Ihre Kunden oder Mitarbeiter direkt bedienen. Beides lässt sich kombinieren.",
  },
  {
    q: "Für welche Plattformen entwickeln Sie?",
    a: "Für iOS, Android und das Web. Mit modernen Cross-Platform-Frameworks wie React Native entsteht aus einer Codebasis eine App für alle Plattformen, das spart Zeit und Kosten. Auf Wunsch auch als installierbare Progressive Web App ganz ohne Store.",
  },
  {
    q: "Welche KI-Modelle kommen zum Einsatz?",
    a: "Je nach Anforderung OpenAI, Claude (Anthropic), Google Gemini oder lokale Open-Source-Modelle. Für sensible Daten setzen wir auf EU-Hosting oder lokale Modelle, sodass keine Daten an US-Anbieter abfließen.",
  },
  {
    q: "Ist die App DSGVO-konform?",
    a: "Ja. Wir hosten in der EU, verschlüsseln Daten, schließen einen Auftragsverarbeitungsvertrag ab und kennzeichnen den KI-Einsatz nach EU AI Act transparent.",
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
  name: "App mit KI / KI-App-Entwicklung",
  serviceType: "KI-App-Entwicklung, Mobile App, Web App",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "Entwicklung von mobilen und Web-Apps mit eingebauten KI-Features für iOS, Android und Web. DSGVO-konform, EU-Hosting, Made in Austria.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const related = [
  { href: "/leistungen/ki-softwareentwicklung", icon: Code2, title: "KI Softwareentwicklung", desc: "Individuelle Software, Backends und Integrationen, die Basis hinter jeder App." },
  { href: "/leistungen/ki-chatbot", icon: MessageSquare, title: "KI Chatbot", desc: "Der Assistent in Ihrer App, trainiert auf Ihr Wissen, DSGVO-konform per RAG." },
  { href: "/leistungen/agentic-ai", icon: Bot, title: "Agentic AI & AI Agents", desc: "Autonome Agenten, die in der App mehrstufige Aufgaben end-to-end erledigen." },
];

export default function Page() {
  return (
    <>
      <Script id="faq-app-mit-ki" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-app-mit-ki" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                    App mit KI, KI-App-Entwicklung
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Apps mit <span className="text-primary">KI</span>, die Nutzern Arbeit abnehmen
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Wir entwickeln mobile und Web-Apps mit eingebauter KI, vom Chat-Assistenten über Bilderkennung bis zur Personalisierung. Für iOS, Android und das Web, DSGVO-konform und made in Austria.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Erstgespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#features">KI-Features ansehen</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-primary" /> EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                <Card className="relative border-2 shadow-xl shadow-primary/5 overflow-hidden">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Smartphone className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">Ihre App mit KI</CardTitle>
                      </div>
                      <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20 text-xs shrink-0">iOS, Android, Web</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-2.5">
                    {features.slice(0, 5).map((f) => {
                      const Icon = f.icon;
                      return (
                        <div key={f.title} className="flex items-center gap-3 rounded-xl border-2 border-border bg-background px-3.5 py-2.5">
                          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <Icon className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-sm font-medium leading-tight">{f.title}</span>
                          <Check className="w-4 h-4 text-green-600 ml-auto shrink-0" />
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* TECH LOGOS */}
          <section className="py-10 md:py-12 bg-white/50">
            <div className="container mx-auto px-4 max-w-6xl">
              <p className="text-center text-sm text-muted-foreground mb-6">Gebaut mit bewährtem Stack und führenden KI-Modellen</p>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                {logos.map((l) => (
                  <div key={l.slug} className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-border bg-white p-4 hover-lift">
                    <img src={`/img/logos/${l.slug}.svg`} alt={l.name} className="w-7 h-7 object-contain" />
                    <span className="text-xs text-muted-foreground text-center leading-tight">{l.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FEATURES */}
          <section id="features" className="py-14 md:py-20 scroll-mt-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">KI-Features</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Was KI in Ihrer App leisten kann</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Keine KI um der KI willen, sondern Funktionen, die Nutzern spürbar Zeit und Klicks sparen.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {features.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <Card key={i} className="hover-lift border-2">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{f.title}</CardTitle>
                        <CardDescription className="leading-relaxed">{f.text}</CardDescription>
                      </CardHeader>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* PLATTFORMEN */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Plattformen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Eine Codebasis, alle Geräte</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Mit modernen Cross-Platform-Frameworks entsteht Ihre App effizient für iOS, Android und Web zugleich.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {platforms.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <Card key={i} className="hover-lift border-2">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{p.title}</CardTitle>
                        <CardDescription className="leading-relaxed">{p.text}</CardDescription>
                      </CardHeader>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* USE CASES */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Anwendungsfälle</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Apps, die wir mit KI bauen</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                {useCases.map((u, i) => (
                  <Card key={i} className="hover-lift border-2">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <Layers className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <div>
                          <h3 className="text-lg font-bold mb-1">{u.title}</h3>
                          <p className="text-muted-foreground leading-relaxed text-sm">{u.text}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* ABLAUF */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unser Prozess</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Von der Idee zur App im Store</h2>
              </div>
              <ProcessSteps steps={steps} />
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zu Apps mit KI</h2>
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
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Mehr Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zur App mit KI</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {related.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <a key={i} href={s.href} className="group block">
                      <Card className="h-full border-2 hover-lift group-hover:border-primary/40">
                        <CardHeader>
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                            <Icon className="w-6 h-6 text-primary" />
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
