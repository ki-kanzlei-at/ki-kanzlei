'use client';

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Code } from "lucide-react";
import Link from 'next/link';

export const JobsSectionHome = () => {
    const featuredJobs = [
        {
            title: "Vertriebspartner KI (Freelance)",
            category: "Vertrieb & Partnerschaft",
            shortDesc: "Du kennst Unternehmer und kannst unsere KI-Lösungen überzeugend präsentieren.",
            link: "/jobs/vertriebspartner-ki",
            icon: <Users className="w-6 h-6" />,
        },
        {
            title: "n8n Experte / KI Entwickler (Freelance)",
            category: "Technik & Implementierung",
            shortDesc: "Du baust Workflows in n8n, integrierst APIs und setzt LLMs sinnvoll ein.",
            link: "/jobs/n8n-experte-ki-entwickler",
            icon: <Code className="w-6 h-6" />,
        }
    ];

    return (
        <section className="section-spacing">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="max-w-2xl">
                        <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">
                            Karriere
                        </Badge>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold slide-up tracking-tight">
                            Wachsen wir gemeinsam <br className="hidden sm:block" />
                            an der <span className="text-primary">KI-Revolution</span>
                        </h2>
                    </div>
                    <div className="slide-up">
                        <Button variant="outline" size="lg" asChild>
                            <Link href="/jobs">
                                Alle Jobs ansehen
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 slide-up">
                    {featuredJobs.map((job, index) => (
                        <Link href={job.link} key={index} className="group">
                            <Card className="h-full border border-border/50 bg-white/50 backdrop-blur-sm rounded-3xl overflow-hidden hover-lift hover:border-primary/40 transition-base">
                                <CardContent className="p-8 flex items-start gap-6">
                                    <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        {job.icon}
                                    </div>
                                    <div className="space-y-2">
                                        <span className="text-primary text-xs font-bold uppercase tracking-wider">{job.category}</span>
                                        <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                                            {job.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                                            {job.shortDesc}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
