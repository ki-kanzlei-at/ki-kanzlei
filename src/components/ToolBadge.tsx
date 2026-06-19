import { getToolLogo } from "@/lib/toolLogos";

// Pill mit echtem Tool-Logo (falls vorhanden) + Name. Einheitlicher Stil für alle
// Tech-/Tool-Listen auf den Leistungsseiten. Ohne Logo fällt es auf reinen Text zurück.
export function ToolBadge({ name, className = "" }: { name: string; className?: string }) {
  const logo = getToolLogo(name);
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-sm font-normal text-secondary-foreground ${className}`}
    >
      {logo && (
        <span className="inline-flex items-center justify-center rounded bg-white border border-border p-0.5">
          <img src={logo} alt={name} className="w-3.5 h-3.5 object-contain" />
        </span>
      )}
      {name}
    </span>
  );
}

// Nur das Logo-Kästchen (zum Einsetzen in bestehende Badge-/Card-Markups).
export function ToolLogo({
  name,
  imgClassName = "w-4 h-4",
  boxClassName = "p-1 rounded",
}: {
  name: string;
  imgClassName?: string;
  boxClassName?: string;
}) {
  const logo = getToolLogo(name);
  if (!logo) return null;
  return (
    <span className={`inline-flex items-center justify-center bg-white border border-border ${boxClassName}`}>
      <img src={logo} alt={name} className={`${imgClassName} object-contain`} />
    </span>
  );
}
