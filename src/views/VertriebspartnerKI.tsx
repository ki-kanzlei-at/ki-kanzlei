import { NavigationHome } from "@/components/NavigationHome";
import { FooterModern } from "@/components/FooterModern";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Target, CheckCircle2, TrendingUp, Handshake, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const requirements = [
    "Du kannst auf Augenhöhe mit Geschäftsführern reden",
    "Interesse an KI und Automatisierung",
    "Gutes Deutsch, Englisch ist ein Plus",
    "Keine Vorerfahrung im Vertrieb nötig - das zeigen wir dir",
];

const benefits = [
    {
        icon: TrendingUp,
        title: "Attraktive Provision",
        text: "Wir beteiligen dich fair an jedem Deal. Bei Fleiß sind hohe 5-stellige Beträge absolut machbar.",
    },
    {
        icon: Handshake,
        title: "Support von Arnold",
        text: "Arnold teilt sein Wissen aus 30 Jahren Vertrieb mit dir. Du lernst direkt aus der Praxis, was funktioniert.",
    },
    {
        icon: Users,
        title: "Gemeinsam wachsen",
        text: "Du bist kein Einzelkämpfer. Wir unterstützen dich bei Terminen und in der technischen Vorbereitung.",
    },
];

const VertriebspartnerKI = () => {
    return (
        <div className="min-h-screen gradient-bg">
            <NavigationHome />
            <main>
                {/* HERO */}
                <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="flex justify-end mb-8">
                            <Link href="/jobs" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                                <ArrowLeft className="w-4 h-4" /> Zurück zur Übersicht
                            </Link>
                        </div>
                        <div className="space-y-6">
                            <div className="flex flex-wrap items-center gap-3">
                                <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                                    Freelance
                                </Badge>
                                <span className="text-muted-foreground text-sm">Remote / DACH-Raum</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                Vertriebspartner KI <span className="text-primary">(m/w/d)</span>
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                                Du hast ein gutes Netzwerk, verstehst Business und kannst Leuten erklären, warum KI ihr Unternehmen nach vorne bringt? Dann könnten wir gut zusammenpassen.
                            </p>
                        </div>
                    </div>
                </section>

                {/* WAS DU MACHST / WAS DU MITBRINGST */}
                <section className="section-spacing bg-white/50">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="border-2 hover-lift">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                                        <Target className="w-6 h-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl">Was du machst</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Du sprichst mit Unternehmern, hörst dir ihre Probleme an und zeigst ihnen, wie wir mit KI helfen können. Du bist kein klassischer Verkäufer, sondern eher ein Berater, der Lösungen bringt.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-2 hover-lift">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                                        <CheckCircle2 className="w-6 h-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl">Was du mitbringst</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3 text-muted-foreground">
                                        {requirements.map((req) => (
                                            <li key={req} className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                                {req}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* BENEFITS */}
                <section className="section-spacing">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-12">
                            <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Deine Vorteile</Badge>
                            <h2 className="text-3xl md:text-4xl font-bold">Was wir dir bieten</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-5">
                            {benefits.map((b, i) => {
                                const Icon = b.icon;
                                return (
                                    <Card key={i} className="hover-lift border-2">
                                        <CardHeader className="pb-3">
                                            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                                                <Icon className="w-5 h-5 text-primary" />
                                            </div>
                                            <CardTitle className="text-lg">{b.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent><p className="text-muted-foreground leading-relaxed text-sm">{b.text}</p></CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section-spacing bg-white/50">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <Card className="border-2 border-primary/20 bg-primary/5">
                            <CardContent className="p-10 sm:p-14 text-center">
                                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Klingt gut?</h2>
                                <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
                                    Schreib uns einfach eine Mail mit ein paar Sätzen über dich. Kein Lebenslauf nötig, wir wollen wissen, wer du bist.
                                </p>
                                <Button size="lg" className="w-full sm:w-auto" asChild>
                                    <a href="mailto:info@ki-kanzlei.at?subject=Bewerbung%20Vertriebspartner%20KI">
                                        Jetzt bewerben
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <ContactForm />
            </main>
            <FooterModern />
        </div>
    );
};

export default VertriebspartnerKI;
