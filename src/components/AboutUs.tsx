import { Linkedin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "./ScrollAnimation";

export const AboutUs = () => {
  useScrollAnimation();
  return (
    <section id="ueber-uns" className="section-spacing">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">
            Über uns
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
            Wer hinter der KI Kanzlei steckt
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-up">
            Ihre Partner für KI Beratung und KI Automatisierung aus Niederösterreich.
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-20">

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Arnold */}
            <div className="group text-center slide-up">
              <div className="relative mb-8 inline-block">
                <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto border-4 border-card shadow-lg group-hover:shadow-xl transition-base overflow-hidden">
                  <img 
                    src="/img/team/arnold_freissling.webp" 
                    alt="Arnold Freissling"
                    className="w-full h-full object-cover object-top rounded-full"
                  />
                </div>
                <a
                  href="https://at.linkedin.com/in/arnold-freissling-95642b256"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-10 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-base hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>

              <h3 className="text-xl font-bold mb-1">Arnold Freissling</h3>
              <div className="text-primary font-semibold mb-3">Geschäftsführer & Vertrieb</div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Entwickelte die KI Kanzlei aus dem Praxisproblem seiner Freundin Katja, einer selbstständigen Psychotherapeutin.
              </p>
            </div>

            {/* Markus */}
            <div className="group text-center slide-up">
              <div className="relative mb-8 inline-block">
                <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto border-4 border-card shadow-lg group-hover:shadow-xl transition-base overflow-hidden">
                  <img
                    src="/img/team/markus_wallner.webp"
                    alt="Markus Wallner"
                    className="w-full h-full object-cover object-top rounded-full"
                  />
                </div>
                <a
                  href="https://at.linkedin.com/in/markuswallner-social-media-marketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-10 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-base hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>

              <h3 className="text-xl font-bold mb-1">Markus Wallner</h3>
              <div className="text-primary font-semibold mb-3">Geschäftsführer & Automatisierungsexperte</div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Spezialist für n8n und Prozessautomatisierung, der die technische Umsetzung baut, System für System.
              </p>
            </div>

            {/* Yasmin */}
            <div className="group text-center slide-up">
              <div className="relative mb-8 inline-block">
                <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto border-4 border-card shadow-lg group-hover:shadow-xl transition-base overflow-hidden">
                  <img
                    src="/img/team/yasmin_berndorfer.webp"
                    alt="Yasmin Berndorfer"
                    className="w-full h-full object-cover object-top rounded-full"
                  />
                </div>
                <a
                  href="https://www.linkedin.com/in/yasmin-berndorfer-984084281/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-10 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-base hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>

              <h3 className="text-xl font-bold mb-1">Yasmin Berndorfer</h3>
              <div className="text-primary font-semibold mb-3">Head of Sales</div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Jahrelange Vertriebserfahrung, strukturiert und mit echtem Gespür für Menschen.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <section id="timeline-section" className="section-spacing">
          <div className="mx-auto max-w-6xl px-4 md:px-6 text-center">
            <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">
              Unsere Story
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">Die Geschichte</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-up">Wie die KI Kanzlei entstanden ist</p>
          </div>
          
          <div className="mt-12 mx-auto max-w-6xl px-4 md:px-6">
            <div className="relative">
              {/* Central Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-border"></div>
              <div className="timeline-line-progress absolute left-1/2 transform -translate-x-1/2 top-0 w-0.5 bg-primary transition-all duration-300 ease-out" style={{height: '0%'}}></div>
              
              {/* Step 1 */}
              <div id="1" className="timeline-card relative py-12 lg:py-20">
                <div className="w-full py-6 px-8 lg:py-8 lg:px-16 rounded-xl shadow-xl border transition-all duration-300 ease-out
                                    bg-primary border-primary
                                    lg:w-[calc(50%-60px)] lg:mr-auto
                                    flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="mb-4 lg:mb-6 w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center shadow-md transition-colors duration-300 ease-out
                                        bg-primary text-white lg:mx-auto lg:hidden">
                    <span className="text-lg lg:text-xl font-bold">1</span>
                  </div>
                  <h3 className="font-bold text-lg lg:text-xl xl:text-2xl mb-3 text-white">Das Problem</h3>
                  <p className="text-sm lg:text-base xl:text-lg opacity-80 text-white leading-relaxed">Katja, eine gute Freundin von Arnold, führt eine psychotherapeutische Praxis in Kärnten. Eigentlich möchte sie für ihre Klienten da sein, doch jeden Monat verschlingen Terminverschiebungen, Formulare, Rechnungen und Telefonate acht bis zehn Stunden. Verwaltung, für die sie nie ausgebildet wurde und die ihr die Kraft für das Wesentliche raubt.</p>
                </div>
                <div className="timeline-center-point hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full items-center justify-center shadow-md transition-colors duration-300 ease-out
                                    bg-primary text-white">
                  <span className="text-xl font-bold">1</span>
                </div>
              </div>

              {/* Step 2 */}
              <div id="2" className="timeline-card relative py-12 lg:py-20">
                <div className="w-full py-6 px-8 lg:py-8 lg:px-16 rounded-xl shadow-xl border transition-all duration-300 ease-out
                                    bg-white border-border
                                    lg:w-[calc(50%-60px)] lg:ml-auto
                                    flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="mb-4 lg:mb-6 w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center shadow-md transition-colors duration-300 ease-out
                                        bg-white text-foreground border border-border lg:mx-auto lg:hidden">
                    <span className="text-lg lg:text-xl font-bold">2</span>
                  </div>
                  <h3 className="font-bold text-lg lg:text-xl xl:text-2xl mb-3 text-foreground">Die Lösung</h3>
                  <p className="text-sm lg:text-base xl:text-lg opacity-80 text-foreground leading-relaxed">Arnold holte sich Markus dazu. Gemeinsam nahmen sie Katjas Abläufe Schritt für Schritt auseinander und automatisierten sie: Terminerinnerungen, Dokumentation, Rückrufe. Schon nach kurzer Zeit lief der Großteil der Verwaltung von selbst, und Katja konnte endlich wieder in Ruhe arbeiten.</p>
                </div>
                <div className="timeline-center-point hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full items-center justify-center shadow-md transition-colors duration-300 ease-out
                                    bg-white text-foreground border border-border">
                  <span className="text-xl font-bold">2</span>
                </div>
              </div>

              {/* Step 3 */}
              <div id="3" className="timeline-card relative py-12 lg:py-20">
                <div className="w-full py-6 px-8 lg:py-8 lg:px-16 rounded-xl shadow-xl border transition-all duration-300 ease-out
                                    bg-white border-border
                                    lg:w-[calc(50%-60px)] lg:mr-auto
                                    flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="mb-4 lg:mb-6 w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center shadow-md transition-colors duration-300 ease-out
                                        bg-white text-foreground border border-border lg:mx-auto lg:hidden">
                    <span className="text-lg lg:text-xl font-bold">3</span>
                  </div>
                  <h3 className="font-bold text-lg lg:text-xl xl:text-2xl mb-3 text-foreground">Die Vision</h3>
                  <p className="text-sm lg:text-base xl:text-lg opacity-80 text-foreground leading-relaxed">Mit einem Mal hatte Katja rund neun Stunden im Monat mehr für ihre Klienten. Für Arnold und Markus stand fest: Was in einer Praxis funktioniert, hilft tausenden Betrieben genauso. So wurde aus einem echten Problem die KI Kanzlei, mit dem Ziel, KI für jedes Unternehmen nutzbar zu machen.</p>
                </div>
                <div className="timeline-center-point hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full items-center justify-center shadow-md transition-colors duration-300 ease-out
                                    bg-white text-foreground border border-border">
                  <span className="text-xl font-bold">3</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
