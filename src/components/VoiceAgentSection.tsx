'use client';

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";

export const VoiceAgentSection = () => {
    return (
        <section id="loesungen" className="section-spacing overflow-hidden bg-white/50 backdrop-blur-sm relative">
            <div className="container px-4 mx-auto relative z-10">
                <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
                    <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">
                        Live-Demo
                    </Badge>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 slide-up" style={{ animationDelay: "100ms" }}>
                        Testen Sie unsere <span className="text-primary">digitale Berater:in Anna</span>
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-2xl slide-up" style={{ animationDelay: "200ms" }}>
                        Voicebot und KI-Telefonassistent in einem: Anna versteht natürliche Sprache, antwortet in Echtzeit und klingt dabei verblüffend echt.
                    </p>
                </div>

                <div className="relative flex flex-col items-center justify-center py-10">
                    {/* Fonio.ai Style Animation */}
                    <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
                        {/* Outer Waves */}
                        <div className="absolute inset-0 rounded-full bg-primary/5 animate-ping opacity-20"></div>
                        <div className="absolute inset-4 rounded-full bg-primary/10 animate-pulse opacity-40" style={{ animationDuration: "3s" }}></div>
                        <div className="absolute inset-8 rounded-full bg-primary/20 animate-pulse opacity-60" style={{ animationDuration: "2s" }}></div>

                        {/* Core Circle */}
                        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-primary flex items-center justify-center shadow-xl shadow-primary/30 z-20 overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent opacity-80 group-hover:scale-110 transition-transform duration-500"></div>

                            {/* Symbolic Waveforms */}
                            <div className="relative flex items-end gap-1 h-12">
                                {[
                                    { h: 45, d: 1.2 },
                                    { h: 70, d: 1.5 },
                                    { h: 55, d: 1.1 },
                                    { h: 85, d: 1.4 },
                                    { h: 35, d: 1.3 },
                                    { h: 60, d: 1.6 },
                                ].map((bar, i) => (
                                    <div
                                        key={i}
                                        className="w-1.5 bg-white rounded-full animate-voice-wave"
                                        style={{
                                            height: `${bar.h}%`,
                                            animationDelay: `${i * 150}ms`,
                                            animationDuration: `${bar.d}s`,
                                        }}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 flex flex-col sm:flex-row gap-4 items-center slide-up" style={{ animationDelay: "400ms" }}>
                        <Button size="lg" asChild>
                            <a href="tel:+43720080697">
                                <Phone className="mr-2 h-4 w-4" />
                                Jetzt anrufen
                            </a>
                        </Button>

                        <span className="text-sm text-muted-foreground">
                            Keine Wartezeit, 24/7 erreichbar
                        </span>
                    </div>

                    <p className="mt-8 text-xs text-muted-foreground max-w-lg text-center slide-up" style={{ animationDelay: "500ms" }}>
                        Mit dem Anruf stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer{" "}
                        <a href="/datenschutz#voice-agents" className="underline hover:text-primary transition-colors">
                            Datenschutzerklärung
                        </a>{" "}
                        zu.
                    </p>
                </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 translate-x-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

            <style>{`
        @keyframes voice-wave {
          0%, 100% { height: 30%; transform: scaleY(1); }
          50% { height: 100%; transform: scaleY(1.2); }
        }
        .animate-voice-wave {
          animation: voice-wave infinite ease-in-out;
        }
      `}</style>
        </section>
    );
};
