'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowRight, ArrowLeft, RotateCcw, Sparkles, Check, Brain, Loader2, Mail } from "lucide-react";

type Option = { label: string; points: number };
type Question = { id: string; q: string; hint?: string; options: Option[] };

const QUESTIONS: Question[] = [
  {
    id: "data",
    q: "Wie sind Ihre Unternehmensdaten organisiert?",
    hint: "Die Datengrundlage ist die Basis für jede KI.",
    options: [
      { label: "Papier, Köpfe & einzelne Excel-Dateien", points: 0 },
      { label: "Teilweise digital, aber in Silos verteilt", points: 1 },
      { label: "Zentral digital & gut gepflegt", points: 2 },
      { label: "Strukturiert, API-fähig, in der Cloud", points: 3 },
    ],
  },
  {
    id: "automation",
    q: "Wie stark sind Ihre Prozesse schon automatisiert?",
    options: [
      { label: "Fast alles läuft manuell", points: 0 },
      { label: "Einzelne Tools, kaum verknüpft", points: 1 },
      { label: "Mehrere Workflows automatisiert (z. B. n8n, Make)", points: 2 },
      { label: "End-to-end automatisierte Prozessketten", points: 3 },
    ],
  },
  {
    id: "ki-usage",
    q: "Wie nutzen Sie aktuell KI im Unternehmen?",
    options: [
      { label: "Gar nicht", points: 0 },
      { label: "Einzelne nutzen ChatGPT privat", points: 1 },
      { label: "Erste KI-Tools offiziell im Einsatz", points: 2 },
      { label: "KI fest in Kernprozesse integriert", points: 3 },
    ],
  },
  {
    id: "team",
    q: "Wie viel KI-Know-how steckt im Team?",
    options: [
      { label: "Kaum vorhanden", points: 0 },
      { label: "Ein paar Interessierte", points: 1 },
      { label: "Mehrere geschulte Mitarbeiter", points: 2 },
      { label: "Eigenes KI-/Data-Team", points: 3 },
    ],
  },
  {
    id: "pain",
    q: "Wie viel Zeit frisst repetitive Arbeit pro Woche?",
    hint: "Telefon, E-Mails, Dokumente, Dateneingabe …",
    options: [
      { label: "Sehr viel, ein Großteil des Tages", points: 0 },
      { label: "Spürbar viel", points: 1 },
      { label: "Mittel, nur einzelne Bereiche", points: 2 },
      { label: "Wenig, ist schon gut optimiert", points: 3 },
    ],
  },
  {
    id: "strategy",
    q: "Gibt es eine KI-Strategie oder Roadmap?",
    options: [
      { label: "Nein, noch gar nicht", points: 0 },
      { label: "Lose Ideen im Kopf", points: 1 },
      { label: "Erste konkrete Pläne", points: 2 },
      { label: "Klare Roadmap mit Budget", points: 3 },
    ],
  },
];

const LEVELS = [
  { min: 0, name: "KI-Neuling", variant: "destructive" as const, text: "Sie stehen am Anfang, und genau da liegt das größte Potenzial. Mit den richtigen ersten Schritten holen Sie schnell viel Zeit zurück.", focus: "Quick Wins: Telefon- & E-Mail-Automatisierung, erste Prozessanalyse." },
  { min: 21, name: "KI-Interessiert", variant: "secondary" as const, text: "Das Bewusstsein ist da, die Umsetzung fehlt noch. Ein strukturierter Plan bringt Sie jetzt am schnellsten voran.", focus: "Use Cases priorisieren, Datengrundlage schaffen, Pilotprojekt starten." },
  { min: 41, name: "KI-Starter", variant: "default" as const, text: "Erste Erfolge sind da, jetzt geht es ums Skalieren und Verknüpfen. Hier entsteht der echte ROI.", focus: "Workflows verbinden, Wissensdatenbank (RAG), Team schulen." },
  { min: 61, name: "KI-Fortgeschritten", variant: "default" as const, text: "Sie sind weiter als die meisten. Jetzt zählen Effizienz, Governance und der nächste Innovationssprung.", focus: "Agentic AI, MLOps, EU-AI-Act-Compliance, Feinschliff." },
  { min: 81, name: "KI-nativ", variant: "default" as const, text: "Stark, KI gehört bei Ihnen zur DNA. Wir helfen beim Feinschliff, bei Skalierung und neuen Anwendungsfällen.", focus: "Custom Agents, Skalierung, Wettbewerbsvorsprung sichern." },
];

function levelFor(pct: number) {
  return [...LEVELS].reverse().find((l) => pct >= l.min) ?? LEVELS[0];
}

const LEAD_ENDPOINT = "/api/lead";

export const KIReifegradTest = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [done, setDone] = useState(false);
  const [lead, setLead] = useState({ name: "", email: "", phone: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const total = Object.values(answers).reduce((a, b) => a + b, 0);
  const max = QUESTIONS.length * 3;
  const pct = Math.round((total / max) * 100);
  const level = levelFor(pct);
  const current = QUESTIONS[step];

  const sendLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!lead.name || !lead.email) return;
    setSending(true);
    const payload = {
      ...lead,
      source: "KI-Reifegrad-Test",
      reifegrad: `${pct}%`,
      level: level.name,
      answers,
      submittedAt: new Date().toISOString(),
    };
    try {
      const res = await fetch(LEAD_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      const body = encodeURIComponent(`Name: ${lead.name}\nE-Mail: ${lead.email}\nTelefon: ${lead.phone}\nKI-Reifegrad: ${pct}% (${level.name})`);
      window.location.href = `mailto:info@ki-kanzlei.at?subject=KI-Reifegrad-Test%20Ergebnis&body=${body}`;
      setSent(true);
    } finally {
      setSending(false);
    }
  };
  const progress = Math.round(((done ? QUESTIONS.length : step) / QUESTIONS.length) * 100);

  const choose = (points: number) => {
    setAnswers({ ...answers, [current.id]: points });
    if (step < QUESTIONS.length - 1) setStep(step + 1);
    else setDone(true);
  };

  const reset = () => { setAnswers({}); setStep(0); setDone(false); };

  return (
    <Card className="relative max-w-3xl mx-auto border-2 shadow-xl shadow-primary/10 overflow-hidden">
      <CardHeader className="border-b">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <Brain className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <div className="font-bold leading-tight">KI-Reifegrad-Test</div>
            <div className="text-xs text-muted-foreground">In 60 Sekunden zu Ihrem Score</div>
          </div>
          <Badge variant="secondary" className="tabular-nums">{progress}%</Badge>
        </div>
        <Progress value={progress} className="h-2 mt-3" />
      </CardHeader>

      <CardContent className="p-6 md:p-8">
        {!done ? (
          <div key={step} className="fade-in">
            <div className="flex items-center justify-between mb-3">
              <Badge variant="outline" className="rounded-full">Frage {step + 1} / {QUESTIONS.length}</Badge>
              {step > 0 && (
                <Button variant="ghost" size="sm" onClick={() => setStep(step - 1)} className="h-7 text-muted-foreground">
                  <ArrowLeft className="w-3.5 h-3.5 mr-1" /> zurück
                </Button>
              )}
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-1">{current.q}</h3>
            {current.hint && <p className="text-sm text-muted-foreground mb-5">{current.hint}</p>}
            <div className="grid gap-3 mt-4">
              {current.options.map((o, i) => {
                const active = answers[current.id] === o.points;
                return (
                  <Button
                    key={i}
                    variant="outline"
                    onClick={() => choose(o.points)}
                    className={`group h-auto justify-start gap-3 py-4 px-4 text-left whitespace-normal border-2 hover:border-primary hover:bg-primary/5 ${active ? "border-primary bg-primary/5" : ""}`}
                  >
                    <span className={`w-6 h-6 shrink-0 rounded-full border-2 flex items-center justify-center transition-colors ${active ? "border-primary bg-primary" : "border-border group-hover:border-primary"}`}>
                      {active && <Check className="w-4 h-4 text-white" />}
                    </span>
                    <span className="font-medium flex-1">{o.label}</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="fade-in text-center">
            <Badge className="rounded-full mb-5"><Sparkles className="w-3.5 h-3.5 mr-1" /> Ihr Ergebnis</Badge>
            <div className="text-6xl font-bold text-primary tabular-nums mb-1">{pct}%</div>
            <div className="text-sm text-muted-foreground mb-4">KI-Reifegrad</div>
            <Progress value={pct} className="h-3 max-w-md mx-auto mb-6" />
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-lg font-semibold">Ihr Level:</span>
              <Badge variant={level.variant} className="text-sm">{level.name}</Badge>
            </div>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed mb-5">{level.text}</p>
            <Card className="max-w-xl mx-auto bg-primary/5 border-primary/10 text-left mb-6">
              <CardContent className="pt-4">
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Ihr nächster Schritt</div>
                <div className="text-sm">{level.focus}</div>
              </CardContent>
            </Card>
            {sent ? (
              <Card className="max-w-xl mx-auto border-2 border-primary/20 bg-primary/5">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6" />
                  </div>
                  <div className="font-bold text-lg mb-1">Danke, wir melden uns.</div>
                  <p className="text-sm text-muted-foreground">Sie hören innerhalb eines Werktags von uns. Wir besprechen Ihr Ergebnis und die nächsten Schritte, kostenlos und unverbindlich.</p>
                  <Button variant="ghost" size="sm" onClick={reset} className="mt-3 text-muted-foreground"><RotateCcw className="w-3.5 h-3.5 mr-1.5" /> Test wiederholen</Button>
                </CardContent>
              </Card>
            ) : (
              <form onSubmit={sendLead} className="max-w-xl mx-auto text-left">
                <div className="text-center text-sm text-muted-foreground mb-4">
                  Ergebnis besprechen? Wir melden uns für ein kostenloses Erstgespräch und schicken Ihnen Ihre Auswertung.
                </div>
                <div className="grid sm:grid-cols-3 gap-3">
                  <Input placeholder="Name *" value={lead.name} onChange={(e) => setLead({ ...lead, name: e.target.value })} required />
                  <Input type="email" placeholder="E-Mail *" value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} required />
                  <Input type="tel" placeholder="Telefon" value={lead.phone} onChange={(e) => setLead({ ...lead, phone: e.target.value })} />
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
                  <Button type="submit" size="lg" disabled={sending}>
                    {sending ? (<><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Wird gesendet</>) : (<><Mail className="w-4 h-4 mr-2" /> Ergebnis besprechen</>)}
                  </Button>
                  <Button type="button" size="lg" variant="outline" onClick={reset}>
                    <RotateCcw className="w-4 h-4 mr-2" /> Test wiederholen
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-4 text-center">Kostenlos und unverbindlich. Im KI Assessment Center vertiefen wir Ihr Ergebnis mit ROI-Kalkulation, voll auf die Umsetzung anrechenbar.</p>
              </form>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
