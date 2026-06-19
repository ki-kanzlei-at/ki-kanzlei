import { NavigationHome } from "@/components/NavigationHome";
import { FooterModern } from "@/components/FooterModern";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Layers, Cpu, Zap, Database, ArrowRight, Code } from "lucide-react";
import Link from "next/link";

const techStack = [
    "n8n",
    "OpenAI / Anthropic",
    "REST APIs",
    "JavaScript",
    "Supabase / SQL",
    "Python (nice to have)",
];

const benefits = [
    {
        icon: Zap,
        title: "Fokus auf Resultate",
        text: "Wir arbeiten asynchron und verzichten auf unnötige Meetings. Was zählt, ist die Qualität der Workflows.",
    },
    {
        icon: Database,
        title: "Spannende Projekte",
        text: "Du entwickelst Systeme, die wirklich im Einsatz sind. Keine graue Theorie, sondern echte Hilfe für Unternehmen.",
    },
    {
        icon: Code,
        title: "Austausch mit Markus",
        text: "Markus steht dir bei technischen Fragen zur Seite. Wir finden gemeinsam die beste Lösung für jede Herausforderung.",
    },
];

const N8nExperteKI = () => {
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
                                <span className="text-muted-foreground text-sm">100% Remote</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                n8n Experte / KI Entwickler <span className="text-primary">(m/w/d)</span>
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                                Du baust gerne Dinge, die funktionieren? n8n, APIs, LLMs sind keine Fremdwörter für dich? Dann lass uns reden.
                            </p>
                        </div>
                    </div>
                </section>

                {/* WAS DU MACHST / WOMIT WIR ARBEITEN */}
                <section className="section-spacing bg-white/50">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="border-2 hover-lift">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                                        <Layers className="w-6 h-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl">Was du machst</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Du baust Automatisierungen für echte Unternehmen. n8n-Workflows designen, APIs anbinden, LLMs integrieren und dafür sorgen, dass alles stabil läuft. Keine Spielerei, sondern Produktionssysteme.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-2 hover-lift">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                                        <Cpu className="w-6 h-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl">Womit wir arbeiten</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="grid grid-cols-2 gap-3 text-muted-foreground text-sm">
                                        {techStack.map((tech) => (
                                            <li key={tech} className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                {tech}
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
                            <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Was dich erwartet</Badge>
                            <h2 className="text-3xl md:text-4xl font-bold">Warum du bei uns richtig bist</h2>
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
                                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Interesse?</h2>
                                <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
                                    Schick uns einen Link zu deinem GitHub oder zeig uns ein paar n8n-Workflows, auf die du stolz bist. Wir wollen sehen, was du kannst.
                                </p>
                                <Button size="lg" className="w-full sm:w-auto" asChild>
                                    <a href="mailto:info@ki-kanzlei.at?subject=Bewerbung%20n8n%20Experte%20KI%20Entwickler">
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

export default N8nExperteKI;
