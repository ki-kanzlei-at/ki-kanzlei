// Logo-Strip für KI-Modell-/Tool-Seiten. Items mit echtem SVG (slug) zeigen das
// Logo aus /img/logos; Items ohne verfügbares Markenlogo (text) zeigen eine saubere
// Wortmarke im selben weißen Kasten, damit die Reihe vollständig und ehrlich bleibt.
type LogoItem = { slug?: string; text?: string; name: string };

export function ModelLogoStrip({ caption, items }: { caption: string; items: LogoItem[] }) {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8">{caption}</p>
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
          {items.map((m) => (
            <div
              key={m.name}
              title={m.name}
              className="h-16 md:h-20 min-w-[5rem] px-4 rounded-xl bg-white border border-border flex items-center justify-center hover-lift"
            >
              {m.slug ? (
                <img src={`/img/logos/${m.slug}.svg`} alt={m.name} className="max-h-9 md:max-h-11 w-auto object-contain" />
              ) : (
                <span className="text-base md:text-lg font-semibold tracking-tight text-foreground whitespace-nowrap">{m.text ?? m.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
