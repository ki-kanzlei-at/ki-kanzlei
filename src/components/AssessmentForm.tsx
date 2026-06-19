'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Check, Loader2, ShieldCheck, Clock, Phone } from "lucide-react";

const WEBHOOK_URL = "/api/lead";

const branchen = [
  "Arztpraxis / Gesundheit", "Steuerberatung", "Rechtsanwalt / Kanzlei",
  "Hotel / Gastronomie", "E-Commerce / Handel", "Handwerk / Bau",
  "Immobilien", "Versicherung / Finanzen", "Marketing / Agentur",
  "Industrie / Produktion", "Logistik", "Andere",
];

export const AssessmentForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [branche, setBranche] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot
    if ((fd.get("company_website") as string)?.length) return;

    const data = {
      firstName: fd.get("firstName"),
      lastName: fd.get("lastName"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      company: fd.get("company"),
      branche,
      message: fd.get("message"),
      source: "KI Assessment Center",
    };

    if (!data.firstName || !data.email || !data.phone) {
      setError("Bitte Vorname, E-Mail und Telefon ausfüllen.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, submittedAt: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setSuccess(true);
    } catch {
      // Fallback: E-Mail-Entwurf, damit keine Anfrage verloren geht.
      const body = encodeURIComponent(
        `Vorname: ${data.firstName}\nNachname: ${data.lastName}\nE-Mail: ${data.email}\nTelefon: ${data.phone}\nUnternehmen: ${data.company}\nBranche: ${branche}\n\n${data.message}`
      );
      window.location.href = `mailto:info@ki-kanzlei.at?subject=KI%20Assessment%20Center%20Anfrage&body=${body}`;
      setSuccess(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-10 text-center">
        <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-5">
          <Check className="w-7 h-7" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Danke, wir melden uns.</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Wir haben Ihre Anfrage erhalten und melden uns innerhalb eines Werktags für Ihr kostenloses Erstgespräch zum KI Assessment Center.
        </p>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-start">
      {/* Form */}
      <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 md:p-8">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="firstName">Vorname *</Label>
            <Input id="firstName" name="firstName" placeholder="Max" required />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="lastName">Nachname</Label>
            <Input id="lastName" name="lastName" placeholder="Mustermann" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email">E-Mail *</Label>
            <Input id="email" name="email" type="email" placeholder="max@firma.at" required />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="phone">Telefon *</Label>
            <Input id="phone" name="phone" type="tel" placeholder="+43 ..." required />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="company">Unternehmen</Label>
            <Input id="company" name="company" placeholder="Firma GmbH" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="branche">Branche</Label>
            <Select value={branche} onValueChange={setBranche}>
              <SelectTrigger id="branche"><SelectValue placeholder="Bitte wählen" /></SelectTrigger>
              <SelectContent>
                {branchen.map((b) => <SelectItem key={b} value={b}>{b}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-1.5 mt-4">
          <Label htmlFor="message">Worum geht es? (optional)</Label>
          <Textarea id="message" name="message" rows={4} placeholder="Kurz Ihre Ausgangslage oder was Sie sich von KI erhoffen." />
        </div>

        {/* Honeypot */}
        <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

        {error && <p className="text-sm text-destructive mt-4">{error}</p>}

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-6">
          <Button type="submit" size="lg" disabled={submitting} className="sm:w-auto w-full">
            {submitting ? (<><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Wird gesendet</>) : "Erstgespräch anfragen"}
          </Button>
          <p className="text-xs text-muted-foreground">
            Kostenlos und unverbindlich. Wir melden uns innerhalb eines Werktags.
          </p>
        </div>
      </form>

      {/* Reassurance side panel */}
      <div className="rounded-2xl border border-border bg-muted/30 p-6 space-y-5">
        <div className="text-sm font-semibold">Was Sie erwartet</div>
        {[
          { icon: Phone, t: "30 Min. Erstgespräch", d: "Kostenlos, wir klären Ihre Ausgangslage." },
          { icon: Clock, t: "Assessment in 2 Wochen", d: "490 Euro, bei Umsetzung voll anrechenbar." },
          { icon: ShieldCheck, t: "DSGVO-konform", d: "EU-Hosting, Ihre Daten bleiben sicher." },
        ].map((it, i) => {
          const Icon = it.icon;
          return (
            <div key={i} className="flex gap-3">
              <span className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-primary" />
              </span>
              <div>
                <div className="text-sm font-semibold">{it.t}</div>
                <div className="text-xs text-muted-foreground">{it.d}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
