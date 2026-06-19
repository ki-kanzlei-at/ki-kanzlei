import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import "@/styles/home-modern.css";

export const metadata: Metadata = {
  title: "KI Kanzlei: KI-Automatisierung für Unternehmen im DACH-Raum",
  description:
    "KI Kanzlei: Ihr österreichischer Partner für KI-Automatisierung. Voice-Agenten, Wissensdatenbanken und n8n-Workflows, DSGVO-konform, EU-gehostet, in 30 Tagen einsatzbereit.",
  keywords:
    "KI Kanzlei, KI-Automatisierung DACH, KI-Automatisierung Österreich, KI-Agent, Voice Agent, n8n Workflow, RAG Wissensdatenbank, DSGVO konform",
  robots: { index: false, follow: false },
};

/* ─── SVG string constants ─────────────────────────────────────────────────── */

const HERO_BOT_SVG = `<svg class="illu bot-large" viewBox="0 0 380 380" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <linearGradient id="bot-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="1" stop-color="#dfeeff"/>
    </linearGradient>
    <linearGradient id="bot-head" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="1" stop-color="#cfe6ff"/>
    </linearGradient>
    <radialGradient id="visor" cx=".5" cy=".4" r=".7">
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
    <rect x="120" y="80" width="140" height="120" rx="36" fill="url(#bot-head)" stroke="#0e1a2b" stroke-width="2.5"/>
    <rect x="138" y="108" width="104" height="58" rx="20" fill="url(#visor)"/>
    <g class="bot-eye">
      <circle cx="168" cy="138" r="7" fill="#fff"/>
      <circle cx="212" cy="138" r="7" fill="#fff"/>
    </g>
    <path d="M170 178 Q190 188 210 178" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"/>
    <circle cx="116" cy="140" r="8" fill="#0e1a2b"/>
    <circle cx="264" cy="140" r="8" fill="#0e1a2b"/>
    <rect x="178" y="200" width="24" height="14" fill="#cfe6ff" stroke="#0e1a2b" stroke-width="2.5"/>
    <rect x="100" y="214" width="180" height="120" rx="34" fill="url(#bot-body)" stroke="#0e1a2b" stroke-width="2.5"/>
    <circle cx="190" cy="270" r="14" fill="#3985ef"/>
    <circle cx="190" cy="270" r="22" fill="#3985ef" opacity=".25" class="pulse-ring"/>
    <rect x="76" y="232" width="22" height="70" rx="11" fill="#cfe6ff" stroke="#0e1a2b" stroke-width="2.5"/>
    <rect x="282" y="232" width="22" height="70" rx="11" fill="#cfe6ff" stroke="#0e1a2b" stroke-width="2.5"/>
  </g>
</svg>`;

const CHIP_SVG_1 = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M12 7v5l3 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`;

const CHIP_SVG_3 = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`;

const PROB_SVG_1 = `<svg class="illu" viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="44" fill="#fff" opacity=".5" class="pulse-ring"/><g class="bot-bob"><rect x="42" y="34" width="36" height="58" rx="8" fill="#fff" stroke="#0e1a2b" stroke-width="2.2"/><rect x="48" y="42" width="24" height="34" rx="2" fill="#3985ef"/><text x="60" y="64" text-anchor="middle" font-family="Satoshi, sans-serif" font-size="11" font-weight="700" fill="#fff">24/7</text><circle cx="60" cy="84" r="3" fill="#0e1a2b"/></g></svg>`;

const PROB_SVG_2 = `<svg class="illu" viewBox="0 0 120 120" aria-hidden="true"><g class="bot-bob"><rect x="22" y="30" width="60" height="46" rx="6" fill="#fff" stroke="#0e1a2b" stroke-width="2"/><line x1="32" y1="42" x2="72" y2="42" stroke="#0e1a2b" stroke-width="1.5" opacity=".4"/><line x1="32" y1="52" x2="60" y2="52" stroke="#0e1a2b" stroke-width="1.5" opacity=".4"/><line x1="32" y1="62" x2="68" y2="62" stroke="#0e1a2b" stroke-width="1.5" opacity=".4"/><circle cx="78" cy="78" r="14" fill="#fff" stroke="#0e1a2b" stroke-width="2.5"/><line x1="88" y1="88" x2="98" y2="98" stroke="#0e1a2b" stroke-width="3" stroke-linecap="round"/></g></svg>`;

const PROB_SVG_3 = `<svg class="illu" viewBox="0 0 120 120" aria-hidden="true"><g class="bot-bob"><rect x="24" y="38" width="50" height="34" rx="4" fill="#fff" stroke="#0e1a2b" stroke-width="2" class="drift-1"/><rect x="44" y="58" width="50" height="34" rx="4" fill="#3985ef" stroke="#0e1a2b" stroke-width="2" class="drift-2"/><circle cx="60" cy="75" r="2" fill="#fff"/><circle cx="68" cy="75" r="2" fill="#fff"/><circle cx="76" cy="75" r="2" fill="#fff"/></g></svg>`;

const PROB_SVG_4 = `<svg class="illu" viewBox="0 0 120 120" aria-hidden="true"><g class="bot-bob"><circle cx="60" cy="60" r="18" fill="#3985ef"/><text x="60" y="65" text-anchor="middle" font-family="Instrument Serif" font-style="italic" font-size="22" fill="#fff">&#8721;</text><circle cx="28" cy="40" r="9" fill="#fff" stroke="#0e1a2b" stroke-width="2"/><circle cx="92" cy="40" r="9" fill="#fff" stroke="#0e1a2b" stroke-width="2"/><circle cx="28" cy="86" r="9" fill="#fff" stroke="#0e1a2b" stroke-width="2"/><circle cx="92" cy="86" r="9" fill="#fff" stroke="#0e1a2b" stroke-width="2"/><line x1="36" y1="44" x2="46" y2="54" class="dash-line" stroke="#0e1a2b" stroke-width="1.5"/><line x1="84" y1="44" x2="74" y2="54" class="dash-line" stroke="#0e1a2b" stroke-width="1.5"/><line x1="36" y1="82" x2="46" y2="70" class="dash-line" stroke="#0e1a2b" stroke-width="1.5"/><line x1="84" y1="82" x2="74" y2="70" class="dash-line" stroke="#0e1a2b" stroke-width="1.5"/></g></svg>`;

const PROB_SVG_5 = `<svg class="illu" viewBox="0 0 120 120" aria-hidden="true"><g class="bot-bob"><rect x="22" y="30" width="76" height="56" rx="6" fill="#fff" stroke="#0e1a2b" stroke-width="2"/><polyline points="30,76 46,62 60,68 76,48 92,40" fill="none" stroke="#3985ef" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="92" cy="40" r="4" fill="#3985ef"/><circle cx="92" cy="40" r="8" fill="#3985ef" opacity=".3" class="pulse-ring"/></g></svg>`;

const PROB_SVG_6 = `<svg class="illu" viewBox="0 0 120 120" aria-hidden="true"><g class="bot-bob"><rect x="28" y="34" width="64" height="14" rx="4" fill="#fff" stroke="#0e1a2b" stroke-width="2"/><rect x="28" y="54" width="64" height="14" rx="4" fill="#fff" stroke="#0e1a2b" stroke-width="2"/><rect x="28" y="74" width="64" height="14" rx="4" fill="#3985ef" stroke="#0e1a2b" stroke-width="2"/><path d="M40 41 l3 3 6-6" stroke="#3985ef" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M40 61 l3 3 6-6" stroke="#3985ef" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M40 81 l3 3 6-6" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/></g></svg>`;

const ANNA_ORB_SVG = `<svg class="illu" viewBox="0 0 200 200" aria-hidden="true">
  <defs><radialGradient id="orb-g" cx=".5" cy=".4" r=".7"><stop offset="0" stop-color="#fff"/><stop offset=".5" stop-color="#cfe6ff"/><stop offset="1" stop-color="#7cc8ff"/></radialGradient></defs>
  <circle cx="100" cy="100" r="84" fill="url(#orb-g)" class="pulse-ring"/>
  <circle cx="100" cy="100" r="62" fill="#fff" opacity=".6"/>
  <g class="bot-bob"><circle cx="100" cy="100" r="40" fill="#3985ef"/>
    <g transform="translate(80,90)">
      <rect x="0" y="6" width="3" height="8" rx="1.5" fill="#fff"><animate attributeName="height" values="6;18;6" dur=".9s" repeatCount="indefinite"/><animate attributeName="y" values="7;1;7" dur=".9s" repeatCount="indefinite"/></rect>
      <rect x="6" y="2" width="3" height="16" rx="1.5" fill="#fff"><animate attributeName="height" values="14;4;14" dur="1.1s" repeatCount="indefinite"/><animate attributeName="y" values="3;8;3" dur="1.1s" repeatCount="indefinite"/></rect>
      <rect x="12" y="6" width="3" height="8" rx="1.5" fill="#fff"><animate attributeName="height" values="8;20;8" dur=".7s" repeatCount="indefinite"/><animate attributeName="y" values="6;0;6" dur=".7s" repeatCount="indefinite"/></rect>
      <rect x="18" y="0" width="3" height="20" rx="1.5" fill="#fff"><animate attributeName="height" values="18;6;18" dur="1s" repeatCount="indefinite"/><animate attributeName="y" values="1;7;1" dur="1s" repeatCount="indefinite"/></rect>
      <rect x="24" y="4" width="3" height="12" rx="1.5" fill="#fff"><animate attributeName="height" values="10;22;10" dur=".85s" repeatCount="indefinite"/><animate attributeName="y" values="5;-1;5" dur=".85s" repeatCount="indefinite"/></rect>
      <rect x="30" y="6" width="3" height="8" rx="1.5" fill="#fff"><animate attributeName="height" values="6;16;6" dur="1.2s" repeatCount="indefinite"/><animate attributeName="y" values="7;2;7" dur="1.2s" repeatCount="indefinite"/></rect>
      <rect x="36" y="4" width="3" height="12" rx="1.5" fill="#fff"><animate attributeName="height" values="12;4;12" dur=".95s" repeatCount="indefinite"/><animate attributeName="y" values="4;8;4" dur=".95s" repeatCount="indefinite"/></rect>
    </g>
  </g>
</svg>`;

const FOOTER_BOT_SVG = `<svg viewBox="0 0 280 280" style="width:100%;height:100%" aria-hidden="true">
  <defs><linearGradient id="fbot-h" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#cfe6ff"/></linearGradient></defs>
  <g class="bot-bob">
    <line x1="140" y1="58" x2="140" y2="38" stroke="#0e1a2b" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="140" cy="34" r="6" fill="#fff"/>
    <rect x="86" y="58" width="108" height="92" rx="28" fill="url(#fbot-h)" stroke="#0e1a2b" stroke-width="2.5"/>
    <rect x="100" y="80" width="80" height="46" rx="16" fill="#1f6fd6"/>
    <circle cx="125" cy="103" r="5" fill="#fff"/>
    <circle cx="155" cy="103" r="5" fill="#fff"/>
    <path d="M124 140 Q140 148 156 140" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round" opacity=".7"/>
    <rect x="132" y="150" width="16" height="10" fill="#cfe6ff" stroke="#0e1a2b" stroke-width="2"/>
    <rect x="74" y="160" width="132" height="80" rx="24" fill="url(#fbot-h)" stroke="#0e1a2b" stroke-width="2.5"/>
    <circle cx="140" cy="200" r="10" fill="#3985ef"/>
  </g>
</svg>`;

const ORG_SCHEMA = `{
  "@context":"https://schema.org",
  "@type":"Organization",
  "name":"KI Kanzlei",
  "url":"https://ki-kanzlei.at",
  "logo":"https://ki-kanzlei.at/img/ki_kanzlei_logo_black.svg",
  "telephone":"+43 664 2314676",
  "email":"info@ki-kanzlei.at",
  "address":{"@type":"PostalAddress","streetAddress":"Rossatzbach 3/2","addressLocality":"Rossatz","postalCode":"3602","addressRegion":"Niederösterreich","addressCountry":"AT"},
  "areaServed":"AT",
  "sameAs":["https://at.linkedin.com/company/ki-kanzlei-at","https://www.instagram.com/kikanzlei"]
}`;

/* ─── Page ──────────────────────────────────────────────────────────────────── */

export default function ModernPage() {
  return (
    <div className="kk-home">
      <Script
        id="org-schema-modern"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ORG_SCHEMA }}
      />

      <div className="page">

        {/* NAV */}
        <header className="nav" role="banner">
          <Link href="/" className="nav-logo" aria-label="KI Kanzlei Startseite">
            <img src="/img/logo-premium.png" className="logo-mark" alt="KI Kanzlei Logo" width={34} height={34} />
            <span className="logo-word">ki-kanzlei</span>
          </Link>
          <nav className="nav-links" aria-label="Hauptnavigation">
            <a href="#probleme">Probleme</a>
            <a href="#branchen">Branchen</a>
            <a href="#ueber-uns">Über uns</a>
            <Link href="/blog">Blog</Link>
            <Link href="/jobs">Jobs</Link>
          </nav>
          <div className="nav-cta">
            <a href="#contact" className="btn btn-blue btn-sm">Kostenloses Erstgespräch</a>
          </div>
        </header>

        {/* HERO */}
        <section className="hero" aria-labelledby="h">
          <div className="hero-eyebrows">
            <span className="eyebrow"><span className="em"></span> Ihr österreichischer KI-Partner</span>
          </div>
          <h1 id="h" className="h1">
            Wir automatisieren Ihr Unternehmen mit <span className="serif">KI</span>
          </h1>
          <p className="hero-sub">
            Von Voice-Agenten bis Social-Media-Automatisierung: Wir bauen produktionsreife KI-Lösungen, die Zeit sparen und Prozesse optimieren, DSGVO-konform und messbar.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Kostenloses Erstgespräch</a>
            <a href="#anna" className="btn btn-secondary">Anna live testen</a>
          </div>

          <div className="hero-stage" aria-hidden="true">
            <div className="hero-blob"></div>
            <div className="chip chip-1">
              <span className="ic" dangerouslySetInnerHTML={{ __html: CHIP_SVG_1 }} />
              {" "}10 bis 15 h / Woche
            </div>
            <div className="chip chip-2">
              <span className="ic live"><span className="livedot"></span></span>
              {" "}Anna, 24/7 erreichbar
            </div>
            <div className="chip chip-3">
              <span className="ic" dangerouslySetInnerHTML={{ __html: CHIP_SVG_3 }} />
              {" "}350% Ø ROI
            </div>
            <div className="hero-anim" dangerouslySetInnerHTML={{ __html: HERO_BOT_SVG }} />
          </div>
        </section>

        {/* PROBLEMS */}
        <section className="s" id="probleme" aria-labelledby="p-h">
          <div className="wrap">
            <div className="s-head">
              <span className="eyebrow"><span className="em"></span> Probleme, Lösungen</span>
              <h2 id="p-h" className="h2">Diese Probleme <br /><span className="h2-accent">kennen Sie nur zu gut.</span></h2>
              <p className="lead">Jeden Tag dieselben manuellen Aufgaben. Zeit, die Sie lieber für Ihr Unternehmen nutzen würden.</p>
            </div>

            <div className="prob-grid">
              <article className="prob">
                <div>
                  <span className="prob-tag">24/7</span>
                  <h3>Verpasste Anrufe und Anfragen</h3>
                  <p>Kunden können nicht erreicht werden, wenn das Team nicht verfügbar ist, wertvolle Leads gehen verloren.</p>
                </div>
                <div className="vis" dangerouslySetInnerHTML={{ __html: PROB_SVG_1 }} />
              </article>
              <article className="prob">
                <div>
                  <span className="prob-tag">-8h/Woche</span>
                  <h3>Zeitaufwendige Lead-Generierung und Recherche</h3>
                  <p>Manuelle Suche nach Kontakten auf LinkedIn und E-Mail-Listen kostet Stunden pro Woche.</p>
                </div>
                <div className="vis" dangerouslySetInnerHTML={{ __html: PROB_SVG_2 }} />
              </article>
              <article className="prob">
                <div>
                  <span className="prob-tag">1 Inbox</span>
                  <h3>Kanal-Chaos bei Kundenanfragen</h3>
                  <p>Anfragen über E-Mail, WhatsApp, Formulare landen überall, kein zentrales System.</p>
                </div>
                <div className="vis" dangerouslySetInnerHTML={{ __html: PROB_SVG_3 }} />
              </article>
              <article className="prob">
                <div>
                  <span className="prob-tag">1 Quelle</span>
                  <h3>Informationen sind fragmentiert</h3>
                  <p>Mitarbeiter suchen Antworten in verschiedenen Dokumenten und Wikis statt zentral.</p>
                </div>
                <div className="vis" dangerouslySetInnerHTML={{ __html: PROB_SVG_4 }} />
              </article>
              <article className="prob">
                <div>
                  <span className="prob-tag">Conversion</span>
                  <h3>Niedrige Conversion-Raten bei Outreach</h3>
                  <p>Generische Nachrichten führen zu schlechten Antwortquoten und verschwendeten Ressourcen.</p>
                </div>
                <div className="vis" dangerouslySetInnerHTML={{ __html: PROB_SVG_5 }} />
              </article>
              <article className="prob">
                <div>
                  <span className="prob-tag">Auto</span>
                  <h3>Administrative Aufgaben rauben Fokus</h3>
                  <p>E-Mail-Management, Terminplanung und Datenpflege binden wertvolle Arbeitszeit.</p>
                </div>
                <div className="vis" dangerouslySetInnerHTML={{ __html: PROB_SVG_6 }} />
              </article>
            </div>

            <div style={{ textAlign: "center", marginTop: "48px" }}>
              <a href="#contact" className="btn btn-primary">Kostenloses Erstgespräch</a>
            </div>
          </div>
        </section>

        {/* ANNA */}
        <section className="s" id="anna" aria-labelledby="anna-h">
          <div className="wrap">
            <div className="s-head">
              <span className="eyebrow"><span className="em"></span> Live-Demo</span>
              <h2 className="h2">Testen Sie unsere digitale <span className="serif">Berater:in Anna</span></h2>
              <p className="lead">Anna versteht natürliche Sprache, antwortet in Echtzeit und klingt dabei verblüffend echt.</p>
            </div>

            <div className="anna-wrap">
              <div className="anna-info">
                <h2 id="anna-h" className="h3" style={{ fontSize: "28px", marginBottom: "14px" }}>
                  Ihr digitaler Anrufassistent, menschlich. präzise. immer da.
                </h2>
                <p className="lead">Trainiert auf Ihre Domäne. Verbindet, qualifiziert, bucht Termine und protokolliert sauber im CRM.</p>
                <ul className="anna-bullets">
                  <li><span className="b">EU</span> EU-gehostet, DSGVO-konform, TLS-1.3</li>
                  <li><span className="b">&#8734;</span> Verfügbar rund um die Uhr, ohne Pause</li>
                  <li><span className="b">★</span> Lernt Ihren Tonfall und Ihr Wissen</li>
                </ul>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
                  <a href="tel:+43720080697" className="btn btn-blue">Jetzt anrufen</a>
                  <a href="#contact" className="btn btn-secondary">Demo-Termin buchen</a>
                  <span style={{ fontSize: "13px", color: "var(--ink-3)" }}>Keine Wartezeit, 24/7 erreichbar</span>
                </div>
              </div>
              <div className="anna-stage">
                <div className="anna-orb" dangerouslySetInnerHTML={{ __html: ANNA_ORB_SVG }} />
                <div className="anna-card">
                  <div className="row"><span className="dot"></span> Live-Anruf, Anna <span className="clock">00:42</span></div>
                  <div className="bars">
                    <span></span><span></span><span></span><span></span><span></span>
                    <span></span><span></span><span></span><span></span><span></span>
                    <span></span><span></span><span></span><span></span><span></span>
                    <span></span><span></span><span></span><span></span><span></span>
                  </div>
                  <div className="row" style={{ fontSize: "12px", color: "var(--ink-3)", fontFamily: "var(--fm)", letterSpacing: ".04em" }}>EU-SERVER, DSGVO, TLS-1.3</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section className="s" aria-labelledby="cmp-h">
          <div className="wrap">
            <div className="s-head">
              <span className="eyebrow"><span className="em"></span> Vergleich</span>
              <h2 id="cmp-h" className="h2">Was uns von <span className="h2-accent">Standard-KI</span> unterscheidet.</h2>
              <p className="lead">Wir liefern keine Demo, wir liefern Systeme, die im Tagesgeschäft halten.</p>
            </div>

            <div className="compare-wrap">
              <div className="compare">
                <div className="col-h" style={{ gridColumn: "1" }}>{" "}</div>
                <div className="col-h us">KI Kanzlei</div>
                <div className="col-h">Generische Anbieter</div>

                <div className="compare-row">
                  <div>EU-Hosting, DSGVO-Verträge inkludiert</div>
                  <div className="us-col yes">✓ Inklusive</div>
                  <div className="no">Aufpreis</div>
                </div>
                <div className="compare-row">
                  <div>Branchenspezifisches Training (RAG)</div>
                  <div className="us-col yes">✓ Pro Kunde</div>
                  <div className="no">Generisch</div>
                </div>
                <div className="compare-row">
                  <div>Voice-Agent in deutscher Tonalität</div>
                  <div className="us-col yes">✓ Auf Sie trainiert</div>
                  <div className="no">Robotische Stimme</div>
                </div>
                <div className="compare-row">
                  <div>n8n-Self-Hosted, keine Lock-Ins</div>
                  <div className="us-col yes">✓ Sie besitzen den Workflow</div>
                  <div className="no">SaaS-Abhängigkeit</div>
                </div>
                <div className="compare-row">
                  <div>Live-Betrieb in 30 Tagen</div>
                  <div className="us-col yes">✓ Garantiert</div>
                  <div className="no">3 bis 6 Monate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="s" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="stats">
              <div className="stat">
                <div className="v"><em>10 bis 15</em> h</div>
                <div className="l">Zeit gespart pro Mitarbeiter und Woche</div>
              </div>
              <div className="stat">
                <div className="v"><em>350</em>%</div>
                <div className="l">Durchschnittlicher ROI im ersten Jahr</div>
              </div>
              <div className="stat">
                <div className="v"><em>30</em> Tage</div>
                <div className="l">Bis Ihre KI im Live-Betrieb arbeitet</div>
              </div>
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="s" id="branchen" aria-labelledby="ind-h">
          <div className="wrap">
            <div className="s-head">
              <span className="eyebrow"><span className="em"></span> Branchen</span>
              <h2 id="ind-h" className="h2">Für welche Branchen <span className="h2-accent">wir arbeiten.</span></h2>
              <p className="lead">Von Psychotherapie bis E-Commerce, wir automatisieren Prozesse in verschiedenen Branchen.</p>
            </div>

            <ul className="ind-grid" role="list" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li><Link className="ind" href="/branchen/ki-loesungen-aerzte"><span className="vis">Är</span><h3>Ärzte &amp; Spezialisten</h3><p>Ordinations-Entlastung, Terminbuchung, Patienten-Triage rund um die Uhr.</p></Link></li>
              <li><Link className="ind" href="/branchen/ki-loesungen-psychotherapeuten"><span className="vis">Ps</span><h3>Psychotherapie</h3><p>Terminverwaltung, Dokumentation, Klientenkommunikation, alles automatisiert.</p></Link></li>
              <li><Link className="ind" href="/branchen/ki-loesungen-hotels"><span className="vis">Ho</span><h3>Hotels &amp; Gastronomie</h3><p>KI-Abendrezeptionist, Buchungsautomatisierung, Multi-Channel-Management.</p></Link></li>
              <li><Link className="ind" href="/branchen/ki-loesungen-rechtsanwaelte"><span className="vis">Re</span><h3>Rechtsanwälte &amp; Notare</h3><p>Lead-Generierung, Terminplanung, Follow-up-Automatisierung.</p></Link></li>
              <li><Link className="ind" href="/branchen/ki-loesungen-recruiting"><span className="vis">HR</span><h3>Recruiting &amp; HR</h3><p>Automatisches Bewerber-Screening, Voice-Interviews und Sourcing.</p></Link></li>
              <li><Link className="ind" href="/branchen/ki-loesungen-ecommerce"><span className="vis">EC</span><h3>E-Commerce &amp; Retail</h3><p>Kundenkommunikation, Bestellabwicklung, Social-Media-Automatisierung.</p></Link></li>
              <li><Link className="ind" href="/branchen/ki-loesungen-fitness"><span className="vis">Fi</span><h3>Fitness &amp; Sport</h3><p>Mitglieder-Wachstum, automatisierte Probetrainings und Feedback-Loops.</p></Link></li>
              <li><Link className="ind" href="/branchen/ki-loesungen-oeffentliche-einrichtungen"><span className="vis">Öf</span><h3>Öffentliche Einrichtungen &amp; Verwaltung</h3><p>KI-Sekretariat, automatisierte Bürger-Anfragen und Prozess-Entlastung.</p></Link></li>
              <li><Link className="ind" href="/branchen/ki-loesungen-hausverwaltung"><span className="vis">Ha</span><h3>Hausverwaltung</h3><p>KI-Mieter-Hotline, Liegenschafts-Wissen, automatisierte Schadensmeldungen.</p></Link></li>
              <li><Link className="ind" href="/branchen/ki-loesungen-immobilienmakler"><span className="vis">Im</span><h3>Immobilienmakler</h3><p>24/7 Lead-Qualifizierung, automatisierte Besichtigungstermine, Exposé-Assistenz.</p></Link></li>
              <li><Link className="ind" href="/branchen/ki-loesungen-autohaus"><span className="vis">Au</span><h3>Autohaus</h3><p>Service-Annahme, Werkstatt-Termine, 24/7 Lead-Management im Verkauf.</p></Link></li>
              <li><Link className="ind" href="/branchen/ki-loesungen-handwerker"><span className="vis">Hw</span><h3>Handwerker</h3><p>24/7 KI-Notfalltelefon, automatisierte Terminbuchung und Büro-Entlastung.</p></Link></li>
              <li><Link className="ind" href="/branchen/ki-loesungen-steuerberater"><span className="vis">St</span><h3>Steuerberater</h3><p>BMD/DATEV-Anbindung, automatisierte Belegverarbeitung und Klienten-Support.</p></Link></li>
              <li><Link className="ind" href="/branchen/ki-loesungen-versicherungsmakler"><span className="vis">Ve</span><h3>Versicherungsmakler</h3><p>24/7 Schadensmeldungen, Polizzen-Analyse und automatisierte Lead-Qualifizierung.</p></Link></li>
            </ul>
          </div>
        </section>

        {/* TEAM */}
        <section className="s" id="ueber-uns" aria-labelledby="t-h">
          <div className="wrap">
            <div className="s-head">
              <span className="eyebrow"><span className="em"></span> Über uns</span>
              <h2 id="t-h" className="h2">Wer hinter der <span className="h2-accent">KI Kanzlei</span> steckt.</h2>
              <p className="lead">Drei Menschen aus Niederösterreich, die KI nicht als Buzzword behandeln, sondern als Werkzeug.</p>
            </div>

            <div className="team-grid">
              <article className="team-card">
                <div className="team-photo">
                  <img src="/img/team/arnold_freissling.webp" alt="Arnold Freissling, Geschäftsführer und Vertrieb der KI Kanzlei" loading="lazy" width={320} height={320} />
                </div>
                <div className="team-body">
                  <h3 className="team-name">Arnold Freissling</h3>
                  <div className="team-role">Geschäftsführer &amp; Vertrieb</div>
                  <p className="team-bio">Hat die Idee zur KI-Kanzlei entwickelt, nachdem er die Probleme seiner Freundin Katja, einer selbstständigen Psychotherapeutin, live und hautnah miterlebt hat.</p>
                  <a className="team-link" href="https://at.linkedin.com/in/arnold-freissling-95642b256" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
              </article>
              <article className="team-card">
                <div className="team-photo">
                  <img src="/img/team/markus_wallner.webp" alt="Markus Wallner, Geschäftsführer und Automatisierungsexperte der KI Kanzlei" loading="lazy" width={320} height={320} />
                </div>
                <div className="team-body">
                  <h3 className="team-name">Markus Wallner</h3>
                  <div className="team-role">Geschäftsführer &amp; Automatisierungsexperte</div>
                  <p className="team-bio">Spezialist für n8n und Prozessautomatisierung. Entwickelt die technischen Lösungen und implementiert sie System für System.</p>
                  <a className="team-link" href="https://at.linkedin.com/in/markuswallner-social-media-marketing" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
              </article>
              <article className="team-card">
                <div className="team-photo">
                  <img src="/img/team/yasmin_berndorfer.webp" alt="Yasmin Berndorfer, Head of Sales bei KI Kanzlei" loading="lazy" width={320} height={320} />
                </div>
                <div className="team-body">
                  <h3 className="team-name">Yasmin Berndorfer</h3>
                  <div className="team-role">Head of Sales</div>
                  <p className="team-bio">Bringt jahrelange Vertriebserfahrung mit und sorgt dafür, dass unsere Lösungen bei den richtigen Unternehmen ankommen, überzeugend, strukturiert und mit echtem Gespür für Menschen.</p>
                  <a className="team-link" href="https://www.linkedin.com/in/yasmin-berndorfer-984084281/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* STORY */}
        <section className="s" style={{ paddingTop: 0 }} aria-labelledby="story-h">
          <div className="wrap">
            <div className="s-head">
              <span className="eyebrow"><span className="em"></span> Die Geschichte</span>
              <h2 id="story-h" className="h2">Wie die <span className="h2-accent">KI Kanzlei</span> entstanden ist.</h2>
              <p className="lead">Aus einem echten Problem, einer echten Lösung und der Erkenntnis: das brauchen tausende andere auch.</p>
            </div>

            <div className="story-grid">
              <div className="story-card is-accent">
                <span className="story-num">1</span>
                <h3>Das Problem</h3>
                <p>Katja, Arnolds Freundin, arbeitet als Psychotherapeutin in Kärnten. Jeden Morgen: „Können wir den Termin verschieben?" Dann: Formulare ausfüllen, Rechnungen schreiben, Klienten anrufen. 8 bis 10 Stunden pro Monat nur für Papierkram. „Ich bin doch keine Sekretärin".</p>
              </div>
              <div className="story-card">
                <span className="story-num">2</span>
                <h3>Die Lösung</h3>
                <p>Arnold rief Markus an: „Du, Katja ist völlig fertig mit der Verwaltung. Kannst du da was machen?" Ständige Meetings, Video-Calls, Screensharing. Er implementierte alles Schritt für Schritt, und Katja konnte endlich wieder in Ruhe arbeiten.</p>
              </div>
              <div className="story-card">
                <span className="story-num">3</span>
                <h3>Die Vision</h3>
                <p>„Ich hab plötzlich 9 Stunden mehr Zeit für meine Klienten!" Arnold dachte: „Wenn das bei Katja funktioniert, brauchen das tausende andere auch." So entstand die KI Kanzlei, aus einem echten Problem, einer echten Lösung und der Erkenntnis: „Wir können das für alle machen."</p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="s" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="testi">
              <div className="testi-photo">
                <div className="placeholder">GOOGLE REZENSION</div>
              </div>
              <div className="testi-body">
                <div className="stars">★ ★ ★ ★ ★</div>
                <p className="testi-quote">&ldquo;Ein sehr angenehmer und aufmerksamer Anbieter. Der Kontakt mit Arnold ist professionell und lösungsorientiert, die Telefon-KI ist fortgeschritten und empfehlenswert!&rdquo;</p>
                <div className="testi-cite">
                  <strong>Geev Bahrampoori</strong>, Google Rezension, Local Guide
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="s" id="faq" aria-labelledby="faq-h">
          <div className="wrap">
            <div className="s-head">
              <span className="eyebrow"><span className="em"></span> FAQ</span>
              <h2 id="faq-h" className="h2">Häufig gestellte <span className="h2-accent">Fragen.</span></h2>
              <p className="lead">Alles, was Sie über unsere Lösung wissen müssen.</p>
            </div>

            <div className="faq-list">
              <details className="faq-item">
                <summary>Wie lange dauert die Implementierung?<span className="faq-ic">+</span></summary>
                <p className="faq-answer">In der Regel 30 Tage von der ersten Analyse bis zur produktiven Nutzung. Nach dem ersten Gespräch analysieren wir Ihre Prozesse, implementieren die Lösungen System für System und testen alles gründlich. Sie erhalten regelmäßige Updates und können jederzeit Anpassungen wünschen.</p>
              </details>
              <details className="faq-item">
                <summary>Ist die Lösung wirklich DSGVO-konform?<span className="faq-ic">+</span></summary>
                <p className="faq-answer">Ja, absolut. Alle Daten werden in Österreich gehostet. Wir arbeiten mit zertifizierten Cloud-Providern, implementieren Ende-zu-Ende-Verschlüsselung und stellen sicher, dass alle Daten nach höchsten Datenschutzstandards verarbeitet werden. Sie erhalten von uns ein vollständiges DSGVO-Compliance-Paket.</p>
              </details>
              <details className="faq-item">
                <summary>Wie viel Zeit spare ich wirklich?<span className="faq-ic">+</span></summary>
                <p className="faq-answer">Das hängt von den automatisierten Prozessen ab. Unsere Kunden sparen durchschnittlich 10 bis 20 Stunden pro Woche durch Automatisierung von wiederkehrenden Aufgaben. Die genaue Zeitersparnis analysieren wir gemeinsam im ersten Gespräch.</p>
              </details>
              <details className="faq-item">
                <summary>Welche Lösungen passen zu meinem Unternehmen?<span className="faq-ic">+</span></summary>
                <p className="faq-answer">Das hängt von Ihren spezifischen Bedürfnissen ab. Wir bieten verschiedene Agenten: KI Wissensdatenbank, LinkedIn Outreach, SEO, Email Outreach, Social Media Content und CRM Datenlieferer. Im ersten Gespräch identifizieren wir gemeinsam, welche Lösungen für Sie am sinnvollsten sind.</p>
              </details>
              <details className="faq-item">
                <summary>Was passiert mit meinen Daten?<span className="faq-ic">+</span></summary>
                <p className="faq-answer">Ihre Daten bleiben Ihre Daten. Wir speichern und verarbeiten sie ausschließlich in Ihrem Auftrag gemäß Auftragsverarbeitungsvertrag (AVV). Die Daten werden verschlüsselt gespeichert, regelmäßig gesichert und Sie können jederzeit den Zugriff widerrufen oder Daten exportieren/löschen.</p>
              </details>
              <details className="faq-item">
                <summary>Brauche ich technische Kenntnisse?<span className="faq-ic">+</span></summary>
                <p className="faq-answer">Nein. Wir übernehmen die komplette technische Implementierung und Wartung. Sie können bei Bedarf einfache Anpassungen selbst vornehmen. Unser Support-Team steht jederzeit zur Verfügung, auch für nicht-technische Fragen.</p>
              </details>
              <details className="faq-item">
                <summary>Was ist, wenn etwas nicht funktioniert?<span className="faq-ic">+</span></summary>
                <p className="faq-answer">Unser Support-Team ist für Sie da. Wir überwachen alle Systeme 24/7 und reagieren sofort bei Problemen. Zusätzlich erhalten Sie regelmäßige Updates und können jederzeit Anpassungen wünschen. Unser Ziel ist, dass Sie sich um Ihr Unternehmen kümmern können, nicht um die Technik.</p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="s" id="termin">
          <div className="wrap">
            <div className="cta">
              <div>
                <span className="eyebrow"><span className="em"></span> Nächster Schritt</span>
                <h2 className="h2" style={{ marginTop: "14px" }}>30 Minuten. <br /><span className="h2-accent">Kostenlos. Unverbindlich.</span></h2>
                <p className="lead">Wir analysieren Ihre Prozesse und zeigen die 2 bis 3 Stellen mit dem höchsten Hebel.</p>
                <div className="cta-actions">
                  <a href="#contact" className="btn btn-primary">Kostenloses Erstgespräch</a>
                  <a href="tel:+436642314676" className="btn btn-secondary">+43 664 2314676</a>
                </div>
              </div>
              <div className="cta-meta">
                <div className="row"><span>Dauer</span><span>30 Min, Online</span></div>
                <div className="row"><span>Kosten</span><span>0 €</span></div>
                <div className="row"><span>Ergebnis</span><span>2 bis 3 ROI-Hebel</span></div>
                <div className="row"><span>Sprachen</span><span>Deutsch, Englisch</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* CAL.COM BOOKING */}
        <ContactForm />

        {/* FOOTER WITH WORDMARK */}
        <footer className="footer-mark" role="contentinfo">
          <div className="wrap">
            <div className="top">
              <div className="col">
                <h5>KI Kanzlei</h5>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,.92)", lineHeight: "1.5", margin: 0 }}>
                  Ihr österreichischer Partner für KI-Automatisierung.<br />
                  Rossatzbach 3/2, 3602 Rossatz<br />
                  UID ATU82628738
                </p>
              </div>
              <div className="col">
                <h5>Lösungen</h5>
                <Link href="/voicebot">Voice-Agent Anna</Link>
                <Link href="/n8n-automatisierung">Workflow-Automation</Link>
                <Link href="/ki-wissensdatenbank">RAG / Wissensdatenbank</Link>
                <Link href="/ki-consulting">KI Consulting</Link>
              </div>
              <div className="col">
                <h5>Unternehmen</h5>
                <a href="#ueber-uns">Über uns</a>
                <Link href="/blog">Blog</Link>
                <Link href="/jobs">Jobs</Link>
                <a href="#contact">Kontakt</a>
              </div>
              <div className="col">
                <h5>Rechtliches</h5>
                <Link href="/impressum">Impressum</Link>
                <Link href="/datenschutz">Datenschutz</Link>
                <Link href="/agb">AGB</Link>
              </div>
            </div>
          </div>
          <div className="wordmark">ki-kanzlei</div>
          <div className="bot-anim" aria-hidden="true" dangerouslySetInnerHTML={{ __html: FOOTER_BOT_SVG }} />
          <div className="wrap">
            <div className="legal">
              <span>© 2026 KI Kanzlei, Made in Niederösterreich</span>
              <span>Server in der EU, DSGVO-konform</span>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
