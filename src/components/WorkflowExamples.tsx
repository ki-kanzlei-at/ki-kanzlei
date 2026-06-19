import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, type LucideIcon } from "lucide-react";

export type WorkflowExample = {
  icon: LucideIcon;
  title: string;
  trigger: string;
  steps: string[];
  result: string;
};

export function WorkflowExamples({
  eyebrow = "Beispiel-Workflows",
  title = "Workflows, die jedes Unternehmen braucht",
  subtitle = "Drei Beispiele aus der Praxis. Wir bauen sie auf Ihre Tools und Ablaeufe zu.",
  tool,
  examples,
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  tool: string;
  examples: WorkflowExample[];
}) {
  return (
    <section className="py-14 md:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">{eyebrow}</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {examples.map((ex, i) => {
            const Icon = ex.icon;
            return (
              <Card key={i} className="border-2 hover-lift flex flex-col">
                <CardContent className="pt-6 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold leading-tight">{ex.title}</h3>
                  </div>

                  {/* Flow */}
                  <div className="space-y-2.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground w-14 shrink-0">Trigger</span>
                      <span className="text-sm font-medium bg-muted rounded-lg px-3 py-1.5 flex-1">{ex.trigger}</span>
                    </div>
                    {ex.steps.map((s, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <span className="w-14 shrink-0 flex justify-center text-primary/50">
                          <ArrowRight className="w-3.5 h-3.5 rotate-90" />
                        </span>
                        <span className="text-sm bg-primary/5 border border-primary/10 rounded-lg px-3 py-1.5 flex-1 flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full bg-primary/15 text-primary text-[10px] font-bold flex items-center justify-center shrink-0">{j + 1}</span>
                          {s}
                        </span>
                      </div>
                    ))}
                    <div className="flex items-center gap-2 pt-1">
                      <span className="w-14 shrink-0 flex justify-center text-primary">
                        <Zap className="w-4 h-4" />
                      </span>
                      <span className="text-sm font-semibold text-primary bg-primary/10 rounded-lg px-3 py-1.5 flex-1">{ex.result}</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-border text-xs text-muted-foreground">
                    Gebaut mit {tool}, DSGVO-konform und auf Wunsch self-hosted.
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
