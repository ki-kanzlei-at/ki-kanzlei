import { Phone, MessageSquare, Brain, Bot, Network, Workflow, ImageIcon, Video, ShieldCheck, Cpu, Compass, Scale, Code2, Megaphone, Sparkles, GraduationCap, Smartphone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { serviceLogos } from "@/lib/serviceLogos";

const services = [
  { icon: Phone, title: "Voicebot & KI-Telefonassistent", desc: "Nimmt Anrufe 24/7 an, bucht Termine und qualifiziert Anfragen, menschlich auf Deutsch.", link: "/leistungen/voicebot" },
  { icon: MessageSquare, title: "KI Chatbot & ChatGPT Alternative", desc: "DSGVO-konformer KI-Chatbot für Kundenservice und Website, EU-gehostet.", link: "/leistungen/chatgpt-alternative" },
  { icon: Brain, title: "KI Wissensdatenbank (RAG)", desc: "Ihr Firmenwissen wird zur präzisen Antwortquelle, mit Quellenangabe statt Halluzination.", link: "/leistungen/ki-wissensdatenbank" },
  { icon: Bot, title: "Agentic AI & AI Agents", desc: "Autonome KI-Agenten, die Aufgaben end-to-end erledigen, von E-Mail bis CRM.", link: "/leistungen/agentic-ai" },
  { icon: Network, title: "n8n Automatisierung", desc: "DSGVO-konforme Workflow-Automatisierung, die Ihre Tools verbindet und Routinen übernimmt.", link: "/leistungen/n8n-automatisierung" },
  { icon: Workflow, title: "RPA & Robotic AI", desc: "Automatisierung auch ohne Schnittstelle: DATEV, BMD und Altsysteme per Software-Roboter.", link: "/leistungen/rpa" },
  { icon: ImageIcon, title: "KI-Bildgenerator", desc: "Markenkonforme Produktbilder, Key-Visuals und Ad-Creatives in Minuten.", link: "/leistungen/ki-bildgenerator" },
  { icon: Video, title: "KI Video & Media", desc: "Marketing-Videos mit KI, markenkonform und in Stunden statt Wochen.", link: "/leistungen/ki-video" },
  { icon: ShieldCheck, title: "Private AI & Lokale KI", desc: "KI auf eigener Infrastruktur, 100 Prozent DSGVO-konform, ohne Datenweitergabe.", link: "/leistungen/private-ai" },
  { icon: Cpu, title: "MLOps & LLMOps", desc: "KI zuverlässig in Produktion bringen und betreiben, von Pipeline bis Monitoring.", link: "/leistungen/mlops" },
  { icon: Code2, title: "KI-Softwareentwicklung", desc: "Custom Software, KI-Apps und eigene SaaS-Produkte, schnell gebaut mit KI-gestütztem Development.", link: "/leistungen/ki-softwareentwicklung" },
  { icon: Smartphone, title: "App mit KI", desc: "Mobile und Web-Apps mit eingebauten KI-Features wie Chat, Bilderkennung und Sprache, für iOS, Android und Web.", link: "/leistungen/app-mit-ki" },
  { icon: Megaphone, title: "Meta Ads mit KI", desc: "Facebook- und Instagram-Werbung mit KI-Creatives, schärferem Targeting und mehr Performance.", link: "/leistungen/meta-ads-ki" },
  { icon: Sparkles, title: "Generative Engine Optimization", desc: "Sichtbar werden in ChatGPT, Perplexity und Google AI Overviews, die neue Ebene neben SEO.", link: "/leistungen/generative-engine-optimization" },
  { icon: GraduationCap, title: "Claude Schulung", desc: "Anthropic Claude im Team produktiv und sicher nutzen: Prompting, Projects, Tools und DSGVO.", link: "/leistungen/claude-schulung" },
  { icon: Compass, title: "KI Consulting", desc: "Herstellerneutrale KI-Strategie, Potenzialanalyse und Implementierung im DACH-Raum.", link: "/leistungen/ki-consulting" },
  { icon: Scale, title: "EU AI Act Beratung", desc: "Compliance-Analyse, Risikobewertung und AI Governance für rechtssicheren KI-Einsatz.", link: "/leistungen/eu-ai-act" },
];

export const LeistungenHome = () => {
  return (
    <section id="leistungen" className="section-spacing bg-white/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">
            Leistungen
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
            KI-Lösungen für Ihr Unternehmen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-up">
            Von Voicebot und KI-Chatbot über Wissensdatenbanken und Automatisierung bis Private AI und EU AI Act, alles aus einer Hand und DSGVO-konform.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, index) => {
            const Icon = s.icon;
            return (
              <a key={index} href={s.link} className="block h-full">
                <div className="group p-6 bg-card rounded-2xl border border-border hover-lift hover:border-primary/40 transition-base cursor-pointer h-full">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-base ${serviceLogos[s.link] ? "bg-white border border-border" : "bg-primary/10 group-hover:bg-primary/20"}`}>
                    {serviceLogos[s.link] ? <img src={`/img/logos/${serviceLogos[s.link]}.svg`} alt={s.title} className="w-7 h-7 object-contain" /> : <Icon className="w-6 h-6 text-primary" />}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </a>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <a href="/leistungen" className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-base">
            Alle Leistungen ansehen
          </a>
        </div>
      </div>
    </section>
  );
};
