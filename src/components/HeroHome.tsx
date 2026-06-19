import { Button } from "@/components/ui/button";
import { Clock, TrendingUp, ShieldCheck } from "lucide-react";
import { trackCtaClick } from "@/lib/analytics";
import "@/styles/modern-anim.css";

interface HeroHomeProps {
  onCtaClick: () => void;
}

const HERO_BOT_SVG = `<svg class="illu" viewBox="0 0 380 380" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <linearGradient id="bot-body-hero" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="1" stop-color="#dfeeff"/>
    </linearGradient>
    <linearGradient id="bot-head-hero" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="1" stop-color="#cfe6ff"/>
    </linearGradient>
    <radialGradient id="visor-hero" cx=".5" cy=".4" r=".7">
      <stop offset="0" stop-color="#3985ef"/>
      <stop offset="1" stop-color="#1f6fd6"/>
    </radialGradient>
  </defs>
  <circle cx="190" cy="200" r="150" fill="#3985ef" opacity=".08" class="pulse-ring"/>
  <circle cx="190" cy="200" r="120" fill="#3985ef" opacity=".10" class="pulse-ring" style="animation-delay:.6s"/>
  <g class="bot-bob">
    <line x1="190" y1="80" x2="190" y2="55" stroke="#0e1a2b" stroke-width="3" stroke-linecap="round"/>
    <circle cx="190" cy="50" r="8" fill="#3985ef"/>
    <circle cx="190" cy="50" r="14" fill="#3985ef" opacity=".25" class="pulse-ring"/>
    <rect x="120" y="80" width="140" height="120" rx="36" fill="url(#bot-head-hero)" stroke="#0e1a2b" stroke-width="2.5"/>
    <rect x="138" y="108" width="104" height="58" rx="20" fill="url(#visor-hero)"/>
    <g class="bot-eye">
      <circle cx="168" cy="138" r="7" fill="#fff"/>
      <circle cx="212" cy="138" r="7" fill="#fff"/>
    </g>
    <path d="M170 178 Q190 188 210 178" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"/>
    <circle cx="116" cy="140" r="8" fill="#0e1a2b"/>
    <circle cx="264" cy="140" r="8" fill="#0e1a2b"/>
    <rect x="178" y="200" width="24" height="14" fill="#cfe6ff" stroke="#0e1a2b" stroke-width="2.5"/>
    <rect x="100" y="214" width="180" height="120" rx="34" fill="url(#bot-body-hero)" stroke="#0e1a2b" stroke-width="2.5"/>
    <circle cx="190" cy="270" r="14" fill="#3985ef"/>
    <circle cx="190" cy="270" r="22" fill="#3985ef" opacity=".25" class="pulse-ring"/>
    <rect x="76" y="232" width="22" height="70" rx="11" fill="#cfe6ff" stroke="#0e1a2b" stroke-width="2.5"/>
    <rect x="282" y="232" width="22" height="70" rx="11" fill="#cfe6ff" stroke="#0e1a2b" stroke-width="2.5"/>
  </g>
</svg>`;

export const HeroHome = ({ onCtaClick }: HeroHomeProps) => {
  return (
    <section id="home" className="gradient-hero section-spacing overflow-hidden min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl w-full">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-block slide-up mt-8 md:mt-0">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-medium">
              Ihr österreichischer KI-Partner
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight slide-up">
            KI Automatisierung für Ihr Unternehmen, <span className="text-primary">die sich rechnet</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto slide-up">
            Als KI Agentur aus Österreich bauen wir Voicebots, KI-Telefonassistenten, Wissensdatenbanken und n8n-Automatisierungen, die Zeit sparen und Prozesse optimieren. DSGVO-konform, EU-gehostet und messbar.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 slide-up">
            <Button
              size="lg"
              className="w-full sm:w-auto"
              asChild
              onClick={() => trackCtaClick("KI Assessment starten", "HeroHome")}
            >
              <a href="#contact">Jetzt KI Assessment starten</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => {
                trackCtaClick("Whitepaper sichern", "HeroHome");
                onCtaClick();
              }}
            >
              Kostenloses Whitepaper sichern
            </Button>
          </div>

          {/* Mascot with floating chips */}
          <div
            className="kk-anim relative mx-auto fade-in"
            style={{ width: "min(520px, 92vw)", height: "360px", animationDelay: "0.35s", animationFillMode: "both" }}
          >
            <div className="chip chip-1">
              <span className="ic"><Clock className="w-3.5 h-3.5" /></span>
              10-15 h gespart / Woche
            </div>
            <div className="chip chip-2">
              <span className="ic"><TrendingUp className="w-3.5 h-3.5" /></span>
              350 % Ø ROI
            </div>
            <div className="chip chip-3">
              <span className="ic"><ShieldCheck className="w-3.5 h-3.5" /></span>
              100 % DSGVO-konform
            </div>
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ width: "300px", maxWidth: "70vw" }}
              aria-hidden="true"
              dangerouslySetInnerHTML={{ __html: HERO_BOT_SVG }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};
