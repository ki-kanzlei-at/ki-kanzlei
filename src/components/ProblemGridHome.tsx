import { Clock, FileText, MessageSquare, Users, TrendingDown, Zap, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const problems = [
  {
    icon: Users,
    title: "Zeitaufwendige Lead-Generierung & Recherche",
    description: "Manuelle Suche nach Kontakten auf LinkedIn und E-Mail-Listen kostet Stunden pro Woche.",
    size: "large",
  },
  {
    icon: TrendingDown,
    title: "Niedrige Conversion-Raten bei Outreach",
    description: "Generische Nachrichten führen zu schlechten Antwortquoten und verschwendeten Ressourcen.",
    size: "medium",
  },
  {
    icon: FileText,
    title: "Content-Erstellung bindet zu viele Ressourcen",
    description: "Blogartikel, SEO-Optimierung und regelmäßige Updates erfordern spezialisierte Expertise & Zeit.",
    size: "medium",
  },
  {
    icon: Database,
    title: "Informationen sind fragmentiert",
    description: "Mitarbeiter suchen Antworten in verschiedenen Dokumenten & Wikis statt zentral.",
    size: "large",
  },
  {
    icon: Clock,
    title: "Verpasste Anrufe und Anfragen",
    description: "Kunden können nicht erreicht werden, wenn das Team nicht verfügbar ist, wertvolle Leads gehen verloren.",
    size: "medium",
  },
  {
    icon: MessageSquare,
    title: "Administrative Aufgaben rauben Fokus",
    description: "E-Mail-Management, Terminplanung und Datenpflege binden wertvolle Arbeitszeit.",
    size: "medium",
  },
  {
    icon: Zap,
    title: "Kanal-Chaos bei Kundenanfragen",
    description: "Anfragen über E-Mail, WhatsApp, Formulare landen überall, kein zentrales System.",
    size: "medium",
  },
];

export const ProblemGridHome = () => {
  return (
    <section id="probleme" className="section-spacing">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">
            Probleme & Lösungen
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
            Diese Probleme kennen Sie nur zu gut
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-up">
            Jeden Tag dieselben manuellen Aufgaben. Mit gezielter KI Automatisierung gewinnen Sie die Zeit zurück, die Sie lieber für Ihr Unternehmen nutzen.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            const sizeClasses = {
              small: "md:col-span-1 lg:col-span-1",
              medium: "md:col-span-1 lg:col-span-2",
              large: "md:col-span-2 lg:col-span-3",
            };
            return (
              <div
                key={index}
                className={`group p-6 bg-background rounded-2xl border-2 border-border hover-lift hover:border-primary/40 transition-base cursor-pointer slide-up ${sizeClasses[problem.size as keyof typeof sizeClasses]}`}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-base">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-16 slide-up">
          <p className="text-lg text-muted-foreground mb-6">
            Ziel: Automatisierung, die Zeit spart und Ihr Unternehmen voranbringt
          </p>
          <Button size="lg" asChild>
            <a href="#contact">Analysegespräch vereinbaren</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
