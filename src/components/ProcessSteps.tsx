import { Badge } from "@/components/ui/badge";
import { Clock, type LucideIcon } from "lucide-react";

export interface ProcessStep {
  step: string;
  icon: LucideIcon;
  title: string;
  time: string;
  description: string;
}

/**
 * Moderne, verbundene Prozess-Timeline.
 * Desktop: horizontale Schritte mit durchgehender Verbindungslinie und nummerierten Nodes.
 * Mobil: vertikale Liste mit linker Linie.
 * Ersetzt die alte schlichte 4-Karten-Liste in den Detailseiten.
 */
export function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="relative">
      {/* Verbindungslinie Desktop */}
      <div className="hidden lg:block absolute top-11 left-0 right-0 h-px pointer-events-none" aria-hidden>
        <div className="mx-auto w-[78%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="grid gap-8 lg:gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map(({ step, icon: Icon, title, time, description }, i) => (
          <div key={i} className="relative flex flex-col items-center text-center group">
            {/* Node */}
            <div className="relative z-10 mb-5">
              <div className="w-[5.5rem] h-[5.5rem] rounded-[1.4rem] bg-card border-2 border-border shadow-sm flex items-center justify-center ring-8 ring-background transition-base group-hover:border-primary/40 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-primary/10">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <span className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shadow-md ring-4 ring-background">
                {step}
              </span>
            </div>

            <Badge
              variant="outline"
              className="rounded-full mb-2.5 text-[11px] inline-flex items-center gap-1 bg-primary/5 text-primary border-primary/20"
            >
              <Clock className="w-3 h-3" />
              {time}
            </Badge>
            <h3 className="font-bold text-base mb-1.5 leading-snug">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[15rem]">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
