// Cleanes, markenkonformes Cookie-Icon. Nutzt currentColor, übernimmt also die
// Textfarbe (Brand-Blau / weiß). Bite-Notch oben rechts + dezente Chips.
export const CookieGlyph = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M21.5 12.4A9.5 9.5 0 1 1 11.6 2.5a6.6 6.6 0 0 0 1.9 5.6 6.6 6.6 0 0 0 5.6 1.9 9.5 9.5 0 0 1 2.4 2.4Z"
      fill="currentColor"
      fillOpacity="0.16"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <circle cx="8.6" cy="10.4" r="1.05" fill="currentColor" />
    <circle cx="12.8" cy="14.6" r="1.15" fill="currentColor" />
    <circle cx="8.4" cy="15.2" r="0.85" fill="currentColor" />
    <circle cx="16" cy="13.4" r="0.9" fill="currentColor" />
  </svg>
);
