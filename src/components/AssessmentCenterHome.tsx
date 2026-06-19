import { Check, FileText, Gauge, Target, ShieldCheck, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const included = [
  { icon: Gauge, text: "KI-Reifegrad und Standortbestimmung" },
  { icon: Target, text: "Die lohnendsten Use Cases, ROI durchgerechnet" },
  { icon: FileText, text: "Tech-Empfehlung, Roadmap und PDF-Report" },
  { icon: ShieldCheck, text: "DSGVO- und EU-AI-Act-Check inklusive" },
];

export const AssessmentCenterHome = () => {
  return (
    <section id="assessment" className="section-spacing">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="rounded-3xl border-2 border-primary/20 bg-primary/5 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left: Pitch */}
            <div className="p-8 md:p-12">
              <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">
                KI Assessment Center
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Klarheit, was sich für Sie lohnt, <span className="text-primary">in zwei Wochen</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-xl">
                Wir schauen uns alles an: Prozesse, Datenlage und Technik. Sie bekommen einen Report mit priorisierten Use Cases, ROI und Roadmap. Ein fixer Preis statt Tagessatz-Risiko.
              </p>
              <ul className="space-y-3 mb-8">
                {included.map((it, i) => {
                  const Icon = it.icon;
                  return (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </span>
                      <span className="text-foreground leading-relaxed flex items-center gap-2">
                        <Icon className="w-4 h-4 text-primary shrink-0" />
                        {it.text}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/ki-assessment" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-base">
                  Assessment Center ansehen <ArrowRight className="w-4 h-4" />
                </a>
                <a href="/ki-assessment#test" className="inline-flex items-center justify-center rounded-md border border-border bg-card px-8 py-3 text-sm font-semibold hover:border-primary/40 transition-base">
                  Gratis-Selbsttest (60 Sek.)
                </a>
              </div>
            </div>

            {/* Right: Price panel */}
            <div className="bg-card border-t-2 lg:border-t-0 lg:border-l-2 border-primary/20 p-8 md:p-12 flex flex-col justify-center">
              <div className="text-sm font-medium text-muted-foreground mb-2">Fixer Preis fürs komplette Assessment</div>
              <div className="flex items-end gap-2 mb-1">
                <span className="text-6xl md:text-7xl font-bold text-primary">490 €</span>
                <span className="text-muted-foreground mb-3">einmalig</span>
              </div>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary mb-6">
                <Check className="w-4 h-4" /> Bei Umsetzung voll angerechnet
              </div>
              <div className="space-y-3 text-sm text-muted-foreground border-t border-border pt-6">
                <p>Entscheiden Sie sich für die Implementierung mit uns, ziehen wir die 490 Euro vom Projektpreis ab. Das Assessment ist damit kostenneutral, Ihr Risiko gleich null.</p>
                <p className="text-xs">Davor: kostenloses, unverbindliches Erstgespräch (30 Min.).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
