import "@/styles/footer-modern.css";
import "@/styles/modern-anim.css";

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

export const FooterModern = () => {
  return (
    <footer className="kk-foot" role="contentinfo">
      <div className="kk-foot-inner">
        <div className="kk-foot-top">
          <div className="kk-foot-col kk-foot-brand">
            <a href="/" className="kk-foot-logo-word" aria-label="KI Kanzlei Startseite"><img src="/img/ki_kanzlei_logo_white.svg" alt="KI Kanzlei" /></a>
            <p>Ihr österreichischer Partner für KI-Automatisierung. DSGVO-konform, schnell, zuverlässig.</p>
            <ul className="kk-foot-contact">
              <li><a href="mailto:info@ki-kanzlei.at">info@ki-kanzlei.at</a></li>
              <li><a href="tel:+436642314676">+43 664 2314676</a></li>
              <li>Rossatzbach 3/2<br />3602 Rossatz</li>
            </ul>
          </div>

          <div className="kk-foot-col">
            <h5>Automatisierung & Agenten</h5>
            <a href="/leistungen">Alle Leistungen</a>
            <a href="/leistungen/voicebot">Voicebot</a>
            <a href="/leistungen/ki-chatbot">KI Chatbot</a>
            <a href="/leistungen/ki-wissensdatenbank">KI Wissensdatenbank</a>
            <a href="/leistungen/agentic-ai">Agentic AI</a>
            <a href="/leistungen/n8n-automatisierung">n8n Automatisierung</a>
            <a href="/leistungen/zapier">Zapier</a>
            <a href="/leistungen/make">Make.com</a>
            <a href="/leistungen/rpa">RPA & Robotic AI</a>
          </div>

          <div className="kk-foot-col">
            <h5>KI, Daten & Content</h5>
            <a href="/leistungen/private-ai">Private AI</a>
            <a href="/leistungen/mlops">MLOps & LLMOps</a>
            <a href="/leistungen/ki-softwareentwicklung">KI Softwareentwicklung</a>
            <a href="/leistungen/app-mit-ki">App mit KI</a>
            <a href="/leistungen/ki-website">Website mit KI</a>
            <a href="/leistungen/ki-bildgenerator">KI-Bildgenerator</a>
            <a href="/leistungen/ki-video">KI Video</a>
            <a href="/leistungen/meta-ads-ki">Meta Ads mit KI</a>
            <a href="/leistungen/social-media-ki">Social Media mit KI</a>
            <a href="/leistungen/generative-engine-optimization">GEO</a>
            <a href="/leistungen/sap-integration">SAP-Integration</a>
            <a href="/leistungen/monitoring-grafana">Monitoring & Grafana</a>
          </div>

          <div className="kk-foot-col">
            <h5>Branchen</h5>
            <a href="/branchen">Alle Branchen</a>
            <a href="/branchen/ki-loesungen-aerzte">KI für Ärzte</a>
            <a href="/branchen/ki-loesungen-steuerberater">KI für Steuerberater</a>
            <a href="/branchen/ki-loesungen-rechtsanwaelte">Legal Tech</a>
            <a href="/branchen/ki-loesungen-hotels">KI für Hotels</a>
            <a href="/branchen/ki-loesungen-gastronomie">KI für Gastronomie</a>
            <a href="/branchen/ki-loesungen-ecommerce">KI für E-Commerce</a>
            <a href="/branchen/ki-loesungen-handwerker">KI für Handwerk</a>
            <a href="/branchen/ki-loesungen-immobilienmakler">KI für Immobilien</a>
          </div>

          <div className="kk-foot-col">
            <h5>Produkte, Wissen & Firma</h5>
            <a href="/produkte">Produkte</a>
            <a href="/produkte/firmeo">firmeo (Warteliste offen)</a>
            <a href="/ki-assessment">KI Assessment Center</a>
            <a href="/ki-glossar">KI-Glossar</a>
            <a href="/blog">Blog</a>
            <a href="/ueber-uns">Über uns</a>
            <a href="/jobs">Jobs</a>
            <a href="/kontakt">Kontakt</a>
          </div>

        </div>
      </div>

      <div className="kk-foot-wordmark">ki kanzlei</div>
      <div className="kk-anim kk-foot-bot" aria-hidden="true" dangerouslySetInnerHTML={{ __html: FOOTER_BOT_SVG }} />

      <div className="kk-foot-inner">
        <div className="kk-foot-legal">
          <span>© 2026 | KI Kanzlei</span>
          <div className="kk-foot-legal-links">
            <a href="/impressum">Impressum</a>
            <a href="/datenschutz">Datenschutz</a>
            <a href="/agb">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
