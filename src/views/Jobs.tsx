'use client';

import { NavigationHome } from "@/components/NavigationHome";
import { FooterModern } from "@/components/FooterModern";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Users,
    Globe,
    ArrowRight,
    Code,
    Rocket,
    Star,
    Linkedin,
    Zap,
    TrendingUp,
    Clock,
    Heart,
    Handshake,
    Target,
    Sparkles,
    MessageSquare,
} from "lucide-react";
import Link from "next/link";

const jobOpenings = [
    {
        title: "Vertriebspartner KI (Freelance)",
        category: "Vertrieb & Partnerschaft",
        shortDesc:
            "Du kennst Unternehmer, verstehst ihre Engpässe und präsentierst unsere KI-Lösungen überzeugend. Wir liefern die Technik, du baust die Beziehungen.",
        link: "/jobs/vertriebspartner-ki",
        icon: Users,
        tags: ["Provision", "Remote", "Freelance"],
    },
    {
        title: "n8n Experte / KI Entwickler (Freelance)",
        category: "Technik & Implementierung",
        shortDesc:
            "Du baust Workflows in n8n, integrierst APIs und setzt LLMs sinnvoll ein. Echte Projekte mit messbarem Nutzen statt Proof-of-Concept-Friedhof.",
        link: "/jobs/n8n-experte-ki-entwickler",
        icon: Code,
        tags: ["Projektbasiert", "Remote", "Freelance"],
    },
];

const perks = [
    {
        icon: Zap,
        title: "Echte Projekte, echter Nutzen",
        text: "Wir bauen Systeme, die Unternehmen im DACH-Raum täglich verwenden. Kein Schnickschnack, sondern Automatisierungen, die nachweisbar Zeit und Kosten sparen.",
    },
    {
        icon: Globe,
        title: "Remote-first im DACH-Raum",
        text: "Freelance und Remote sind bei uns Standard, nicht die Ausnahme. Du arbeitest von dort, wo du am produktivsten bist, in Österreich, Deutschland oder der Schweiz.",
    },
    {
        icon: Clock,
        title: "Deine Zeit, deine Einteilung",
        text: "Solange die Qualität und die Termine passen, hast du volle Freiheit bei der Planung. Wir bewerten Ergebnisse, nicht Anwesenheit.",
    },
    {
        icon: TrendingUp,
        title: "Mentoring auf Augenhöhe",
        text: "Arnold bringt jahrzehntelange Vertriebserfahrung mit, Markus das technische Tiefenwissen. Du wirst bei jedem Schritt unterstützt statt allein gelassen.",
    },
    {
        icon: Handshake,
        title: "Partner statt Angestellter",
        text: "Bei uns bist du kein klassischer Mitarbeiter, sondern Partner im Projekt. Faire Konditionen, klare Absprachen und Wertschätzung für deine Arbeit.",
    },
    {
        icon: Rocket,
        title: "Wir wachsen, du wächst mit",
        text: "KI ist eines der spannendsten Felder der nächsten Jahre. Wer früh dabei ist und liefert, wächst mit uns in größere Verantwortung hinein.",
    },
];

const values = [
    {
        icon: Target,
        title: "Ergebnisse vor Buzzwords",
        text: "Wir messen den Effekt jeder Lösung. Was nicht hilft, bauen wir nicht. Diese Ehrlichkeit erwarten wir auch von dir gegenüber Kunden.",
    },
    {
        icon: Heart,
        title: "Kunden langfristig glücklich machen",
        text: "Schnelle Abschlüsse interessieren uns weniger als zufriedene Unternehmen, die gerne weiterempfehlen. Vertrauen ist unser wichtigstes Kapital.",
    },
    {
        icon: Sparkles,
        title: "Neugier auf neue Technik",
        text: "Das Feld verändert sich monatlich. Wer Lust hat, Neues auszuprobieren und dazuzulernen, ist bei uns goldrichtig.",
    },
    {
        icon: MessageSquare,
        title: "Klare, ehrliche Kommunikation",
        text: "Kurze Wege, direkte Absprachen, keine Politik. Probleme sprechen wir früh an und lösen sie gemeinsam.",
    },
];

const stats: [string, string][] = [
    ["100%", "Remote & Freelance"],
    ["DACH", "Österreich, Deutschland, Schweiz"],
    ["2", "offene Rollen aktuell"],
    ["1:1", "Mentoring vom Gründerteam"],
];

const team = [
    {
        name: "Arnold Freissling",
        role: "Strategie & Vertrieb",
        img: "/img/team/arnold_freissling.webp",
        linkedin: "https://at.linkedin.com/in/arnold-freissling-95642b256",
        text: "Arnold ist dein Ansprechpartner für alles Strategische. Er zeigt dir, wie Vertrieb wirklich funktioniert und wie man Kunden langfristig glücklich macht.",
    },
    {
        name: "Markus Wallner",
        role: "Technik & Automatisierung",
        img: "/img/team/markus_wallner.webp",
        linkedin: "https://at.linkedin.com/in/markuswallner-social-media-marketing",
        text: "Markus verantwortet die technische Umsetzung. Er unterstützt dich bei allen Fragen rund um n8n und hilft dir, komplexe Prozesse stabil zu bauen.",
    },
    {
        name: "Yasmin Berndorfer",
        role: "Head of Sales",
        img: "/img/team/yasmin_berndorfer.webp",
        linkedin: "https://www.linkedin.com/in/yasmin-berndorfer-984084281/",
        text: "Yasmin bringt jahrelange Vertriebserfahrung mit und sorgt dafuer, dass unsere Lösungen bei den richtigen Unternehmen ankommen, strukturiert und mit echtem Gespuer für Menschen.",
    },
];

const Jobs = () => {
    return (
        <div className="min-h-screen gradient-bg">
            <NavigationHome />
            <main>
                {/* HERO */}
                <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                                    Karriere bei der KI Kanzlei
                                </Badge>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                    Baue mit uns an der <span className="text-primary">Zukunft der KI</span>
                                </h1>
                                <p className="text-lg text-muted-foreground max-w-xl">
                                    Wir suchen Menschen mit Lust auf echte Projekte. Bei uns arbeitest du nicht als klassischer Angestellter, sondern als Partner auf Augenhoehe, 100% Remote und mitten in einem der spannendsten Felder der nächsten Jahre.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button size="lg" asChild>
                                        <a href="#offene-stellen">Offene Stellen ansehen</a>
                                    </Button>
                                    <Button size="lg" variant="outline" asChild>
                                        <a href="#contact">Kostenloses Erstgespräch</a>
                                    </Button>
                                </div>
                                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                                    <span className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-primary" /> Remote im DACH-Raum</span>
                                    <span className="flex items-center gap-1.5"><Handshake className="w-4 h-4 text-primary" /> Partner statt Angestellter</span>
                                    <span className="flex items-center gap-1.5"><TrendingUp className="w-4 h-4 text-primary" /> Mentoring inklusive</span>
                                </div>
                            </div>

                            {/* Visual: offene Rollen Karte */}
                            <Card className="relative border-2 shadow-xl shadow-primary/5 overflow-hidden">
                                <CardHeader className="border-b border-border">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-xs font-bold text-primary tracking-wide">WIR WACHSEN</div>
                                            <CardTitle className="text-xl">Aktuell offene Rollen</CardTitle>
                                        </div>
                                        <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20 text-xs shrink-0">
                                            {jobOpenings.length} offen
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-5 space-y-3">
                                    {jobOpenings.map((job) => {
                                        const Icon = job.icon;
                                        return (
                                            <Link
                                                key={job.link}
                                                href={job.link}
                                                className="group flex items-center gap-4 rounded-xl border border-border p-3 transition-all hover:border-primary/30 hover:bg-primary/5"
                                            >
                                                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                                    <Icon className="w-5 h-5 text-primary" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="font-semibold text-sm leading-tight group-hover:text-primary transition-colors">
                                                        {job.title}
                                                    </div>
                                                    <div className="text-xs text-muted-foreground mt-0.5">{job.category}</div>
                                                </div>
                                                <ArrowRight className="w-4 h-4 text-primary shrink-0 transition-transform group-hover:translate-x-0.5" />
                                            </Link>
                                        );
                                    })}
                                    <div className="flex items-center justify-between rounded-xl bg-primary/5 border border-primary/20 px-4 py-3">
                                        <span className="text-sm font-medium text-foreground">Nichts dabei?</span>
                                        <a href="#initiativ" className="text-sm text-primary font-semibold hover:underline">
                                            Initiativ bewerben
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* STATS BAND */}
                <section className="pb-4">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="grid grid-cols-2 md:grid-cols-4 border-2 border-border rounded-2xl overflow-hidden bg-card">
                            {stats.map(([v, l], i) => (
                                <div
                                    key={i}
                                    className="p-8 text-center border-b md:border-b-0 border-r last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r border-border"
                                >
                                    <div className="text-3xl md:text-4xl font-bold text-primary">{v}</div>
                                    <div className="text-sm text-muted-foreground mt-2 leading-snug">{l}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WARUM MIT UNS / PERKS */}
                <section className="section-spacing bg-white/50">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-12">
                            <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum mit uns</Badge>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Was die Arbeit bei uns ausmacht</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Wir bieten dir nicht den nächsten 0815-Job, sondern die Chance, an echten KI-Projekten mitzubauen, mit Freiheit, Verantwortung und Leuten, die ihr Handwerk verstehen.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {perks.map((p, i) => {
                                const Icon = p.icon;
                                return (
                                    <Card key={i} className={`hover-lift border-2 ${i === 0 ? "lg:col-span-2 bg-primary/5 border-primary/20" : ""}`}>
                                        <CardHeader className="pb-3">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                                                <Icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <CardTitle className="text-lg">{p.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent><p className="text-muted-foreground leading-relaxed text-sm">{p.text}</p></CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* OFFENE STELLEN */}
                <section id="offene-stellen" className="section-spacing scroll-mt-20">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-12">
                            <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Offene Stellen</Badge>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lust, an der KI-Entwicklung teilzuhaben?</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Aktuell suchen wir Verstaerkung in diesen Bereichen. Klick dich rein und sieh, ob es passt.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {jobOpenings.map((job) => {
                                const Icon = job.icon;
                                return (
                                    <Link href={job.link} key={job.link} className="group block">
                                        <Card className="h-full border-2 hover-lift transition-all group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/5">
                                            <CardHeader>
                                                <div className="flex items-center justify-between mb-2">
                                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary">
                                                        <Icon className="w-6 h-6 text-primary transition-colors group-hover:text-white" />
                                                    </div>
                                                    <div className="flex flex-wrap justify-end gap-2">
                                                        {job.tags.map((tag, t) => (
                                                            <Badge key={t} variant="secondary" className="rounded-full text-xs">{tag}</Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="text-sm font-medium text-primary">{job.category}</div>
                                                <CardTitle className="text-2xl">{job.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-muted-foreground leading-relaxed mb-4">{job.shortDesc}</p>
                                                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                                                    Mehr erfahren <ArrowRight className="w-4 h-4" />
                                                </span>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* WERTE / KULTUR */}
                <section className="section-spacing bg-white/50">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-12">
                            <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unsere Kultur</Badge>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Wie wir arbeiten und ticken</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Vier Grundsaetze, die bestimmen, wie wir mit Kunden und untereinander umgehen.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                            {values.map((v, i) => {
                                const Icon = v.icon;
                                return (
                                    <Card key={i} className="hover-lift border-2">
                                        <CardHeader className="pb-3">
                                            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                                                <Icon className="w-5 h-5 text-primary" />
                                            </div>
                                            <CardTitle className="text-lg">{v.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent><p className="text-muted-foreground leading-relaxed text-sm">{v.text}</p></CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* TEAM */}
                <section className="section-spacing">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-14">
                            <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Das Team</Badge>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Deine direkten Ansprechpartner</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Kleines Team, kurze Wege. Mit diesen Menschen arbeitest du vom ersten Tag an direkt zusammen.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                            {team.map((m) => (
                                <div key={m.name} className="group text-center">
                                    <div className="relative mb-6 inline-block">
                                        <div className="w-44 h-44 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto border-4 border-card shadow-lg group-hover:shadow-xl transition-all overflow-hidden">
                                            <img
                                                src={m.img}
                                                alt={m.name}
                                                className="w-full h-full object-cover object-top rounded-full"
                                            />
                                        </div>
                                        <a
                                            href={m.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute bottom-2 right-6 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110 shadow-lg"
                                            aria-label={`${m.name} auf LinkedIn`}
                                        >
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                    </div>
                                    <h3 className="text-xl font-bold mb-1">{m.name}</h3>
                                    <div className="text-primary font-semibold mb-3">{m.role}</div>
                                    <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">{m.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* INITIATIVBEWERBUNG CTA */}
                <section id="initiativ" className="section-spacing bg-white/50 scroll-mt-20">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <Card className="border-2 border-primary/20 bg-primary/5">
                            <CardContent className="p-10 sm:p-14 text-center">
                                <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20">
                                    <Rocket className="w-7 h-7" />
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Nichts Passendes dabei, aber trotzdem Lust?</h2>
                                <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                                    Wenn du Skills mitbringst, die wir brauchen können, melde dich einfach. Wir sind immer offen für gute Leute, auch ausserhalb der ausgeschriebenen Rollen.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button size="lg" asChild>
                                        <a href="mailto:info@ki-kanzlei.at?subject=Initiativbewerbung">
                                            Initiativbewerbung schicken
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </a>
                                    </Button>
                                    <Button size="lg" variant="outline" asChild>
                                        <a href="#contact">Kostenloses Erstgespräch</a>
                                    </Button>
                                </div>
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

export default Jobs;
