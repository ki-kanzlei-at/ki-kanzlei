import { Building2, Heart, Hotel, Briefcase, ShoppingBag, Home, Car, Hammer, Stethoscope, Users, Dumbbell, ShieldCheck, UtensilsCrossed, Ruler, Megaphone, Truck, Factory, HardHat, Banknote, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const industries = [
  {
    icon: Stethoscope,
    title: "Ärzte & Spezialisten",
    description: "Ordinations-Entlastung, Terminbuchung, Patienten-Triage rund um die Uhr.",
    link: "/branchen/ki-loesungen-aerzte",
  },
  {
    icon: Heart,
    title: "Psychotherapie",
    description: "Terminverwaltung, Dokumentation, Klientenkommunikation, alles automatisiert.",
    link: "/branchen/ki-loesungen-psychotherapeuten",
  },
  {
    icon: Hotel,
    title: "Hotels & Gastronomie",
    description: "KI-Abendrezeptionist, Buchungsautomatisierung, Multi-Channel-Management.",
    link: "/branchen/ki-loesungen-hotels",
  },
  {
    icon: Briefcase,
    title: "Rechtsanwälte & Notare",
    description: "Lead-Generierung, Terminplanung, Follow-up-Automatisierung.",
    link: "/branchen/ki-loesungen-rechtsanwaelte",
  },
  {
    icon: Users,
    title: "Recruiting & HR",
    description: "Automatisches Bewerber-Screening, Voice-Interviews & Sourcing.",
    link: "/branchen/ki-loesungen-recruiting",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce & Retail",
    description: "Kundenkommunikation, Bestellabwicklung, Social-Media-Automatisierung.",
    link: "/branchen/ki-loesungen-ecommerce",
  },
  {
    icon: Dumbbell,
    title: "Fitness & Sport",
    description: "Mitglieder-Wachstum, automatisierte Probetrainings & Feedback-Loops.",
    link: "/branchen/ki-loesungen-fitness",
  },
  {
    icon: Building2,
    title: "Öffentliche Einrichtungen & Verwaltung",
    description: "KI-Sekretariat, automatisierte Bürger-Anfragen & Prozess-Entlastung.",
    link: "/branchen/ki-loesungen-oeffentliche-einrichtungen",
  },
  {
    icon: Building2,
    title: "Hausverwaltung",
    description: "KI-Mieter-Hotline, Liegenschafts-Wissen, automatisierte Schadensmeldungen.",
    link: "/branchen/ki-loesungen-hausverwaltung",
  },
  {
    icon: Home,
    title: "Immobilienmakler",
    description: "24/7 Lead-Qualifizierung, automatisierte Besichtigungstermine, Exposé-Assistenz.",
    link: "/branchen/ki-loesungen-immobilienmakler",
  },
  {
    icon: Car,
    title: "Autohaus",
    description: "Service-Annahme, Werkstatt-Termine, 24/7 Lead-Management im Verkauf.",
    link: "/branchen/ki-loesungen-autohaus",
  },
  {
    icon: Hammer,
    title: "Handwerker",
    description: "24/7 KI-Notfalltelefon, automatisierte Terminbuchung & Büro-Entlastung.",
    link: "/branchen/ki-loesungen-handwerker",
  },
  {
    icon: Briefcase,
    title: "Steuerberater",
    description: "BMD/DATEV-Anbindung, automatisierte Belegverarbeitung & Klienten-Support.",
    link: "/branchen/ki-loesungen-steuerberater",
  },
  {
    icon: ShieldCheck,
    title: "Versicherungsmakler",
    description: "24/7 Schadensmeldungen, Polizzen-Analyse & automatisierte Lead-Qualifizierung.",
    link: "/branchen/ki-loesungen-versicherungsmakler",
  },
  {
    icon: UtensilsCrossed,
    title: "Gastronomie & Restaurants",
    description: "KI-Reservierung, Bestell- & Gäste-Chatbot, automatisches Bewertungsmanagement.",
    link: "/branchen/ki-loesungen-gastronomie",
  },
  {
    icon: Ruler,
    title: "Architekten & Planungsbüros",
    description: "Ausschreibungs-RAG, Lead-Qualifizierung & KI-Visualisierung für Planungsbüros.",
    link: "/branchen/ki-loesungen-architekten",
  },
  {
    icon: Megaphone,
    title: "Marketingagenturen",
    description: "KI-Content, Social Media, Bild- und Videoproduktion in Markenqualität.",
    link: "/branchen/ki-loesungen-marketingagenturen",
  },
  {
    icon: Truck,
    title: "Logistik & Spedition",
    description: "Frachtdokumente automatisch erfassen, Tracking-Chatbot & entlastete Disposition.",
    link: "/branchen/ki-loesungen-logistik",
  },
  {
    icon: Factory,
    title: "Industrie & Fertigung",
    description: "Visuelle Qualitätskontrolle, Predictive Maintenance & Werkerassistenz.",
    link: "/branchen/ki-loesungen-industrie",
  },
  {
    icon: HardHat,
    title: "Bau & Bauunternehmen",
    description: "Ausschreibungen & Pläne per KI durchsuchbar, Kalkulation & Angebote beschleunigen.",
    link: "/branchen/ki-loesungen-bau",
  },
  {
    icon: Banknote,
    title: "Banken & Finanz",
    description: "Antragsprüfung, Compliance-Wissen (BaFin, DORA) & Betrugserkennung, On-Premise.",
    link: "/branchen/ki-loesungen-banken",
  },
  {
    icon: Zap,
    title: "Energieversorger",
    description: "Predictive Maintenance, ESG- & CSRD-Reporting, Wissensdatenbank, KRITIS-sicher.",
    link: "/branchen/ki-loesungen-energie",
  },
  {
    icon: Building2,
    title: "Weitere Branchen",
    description: "Wir passen unsere Lösungen an Ihre spezifischen Anforderungen an.",
  },
];

export const IndustriesHome = () => {
  return (
    <section id="branchen" className="section-spacing">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">
            Branchen
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
            KI Lösungen für Ihre Branche
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-up">
            Von der Arztpraxis über die Steuerkanzlei bis zum Onlineshop: KI-Chatbot, Automatisierung und Telefonassistent, zugeschnitten auf die Prozesse Ihrer Branche.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const content = (
              <div className="group p-6 bg-card rounded-2xl border border-border hover-lift hover:border-primary/40 transition-base cursor-pointer h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-base">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-3">{industry.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            );

            return industry.link ? (
              <a key={index} href={industry.link} className="block h-full">
                {content}
              </a>
            ) : (
              <div key={index}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};





