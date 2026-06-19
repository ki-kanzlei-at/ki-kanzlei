import {
    Linkedin,
    Mail,
    Search,
    Database,
    Phone,
    MessageSquare,
    User,
    CheckCircle2,
    Table,
    Zap,
    Globe,
    Bot
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const outreachProducts = [
    {
        title: "LinkedIn Outreach Agent",
        badge: "Basis Agent",
        description: "Autonomer Networking-Agent für LinkedIn. Identifiziert Kontakte, versendet personalisierte Anfragen und liefert Status-Updates via Telegram.",
        setup: "€4.790 inkl. USt.",
        monthly: "€290 inkl. USt.",
        icon: Linkedin,
        tech: ["Supabase", "Unipile API", "Gemini", "n8n", "Telegram"],
    },
    {
        title: "Cold Email Outreach Agent",
        badge: "Scale Agent",
        description: "Automatisierte B2B-Neukundengewinnung per E-Mail. Generiert hyper-personalisierte Nachrichten basierend auf Website-Daten und garantiert maximale Zustellbarkeit.",
        setup: "€4.190 inkl. USt.",
        monthly: "€290-€510 inkl. USt.",
        icon: Mail,
        tech: ["Google Sheets", "Firmendaten", "Nodemailer", "n8n"],
    },
    {
        title: "SEO Agent",
        badge: "Organic Growth",
        description: "KI-Agent für organische Sichtbarkeit. Identifiziert Content-Chancen, schreibt SEO-optimierte Fachartikel und veröffentlicht diese vollautomatisch.",
        setup: "€3.890 inkl. USt.",
        monthly: "€290-€370 inkl. USt.",
        icon: Search,
        tech: ["Sitemap Parser", "Gemini Imagen", "ImgBB", "Custom CMS"],
    },
];

const generalProducts = [
    {
        title: "KI-Wissensdatenbank (RAG Agent)",
        description: "Maßgeschneiderter Wissensassistent auf Basis interner Firmendaten & Dokumente. Mitarbeiter und Kunden erhalten präzise, quellenbasierte Antworten.",
        setup: "€5.890 inkl. USt.",
        monthly: "€290-550 inkl. USt.",
        icon: Database,
        tech: ["OpenWebUI", "pgvector", "Sharepoint", "Cohere"],
    },
    {
        title: "KI-Anrufassistent",
        description: "DSGVO-konformer KI-Sprachassistent für 24/7-Erreichbarkeit. Nimmt Anrufe entgegen, qualifiziert Leads und bucht Termine direkt in den Kalender.",
        setup: "€3.180 inkl. USt.",
        monthly: "Variabel",
        icon: Phone,
        tech: ["Fonio.ai", "Gemini Live API", "Twilio", "Calendar"],
    },
    {
        title: "KI Multi-Channel Automatisierung",
        description: "Alle Anfragen, ein System - E-Mail, WhatsApp, Formulare automatisiert beantwortet durch einen einheitlichen KI-Agenten.",
        setup: "€3.890 inkl. USt.",
        monthly: "€360-490 inkl. USt.",
        icon: MessageSquare,
        tech: ["Supachat", "Smart Routing", "Azure AI", "n8n"],
    },
    {
        title: "Persönliche/r KI-Sekretär/in",
        description: "Zentraler KI-Sekretär für administrative Aufgaben. Gesteuert via Sprachnachricht, mit Zugriff auf CRM, Kalender und E-Mails.",
        setup: "€3.690 inkl. USt.",
        monthly: "€290 inkl. USt.",
        icon: User,
        tech: ["Telegram Voice", "HubSpot", "Outlook", "Tasks"],
    },
];

const ProductCard = ({ product }: { product: any }) => {
    const Icon = product.icon;
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-[32px] border border-border shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full group"
        >
            <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                </div>
                {product.badge && (
                    <span className="px-3 py-1 bg-primary/5 text-primary text-xs font-bold rounded-full border border-primary/10">
                        {product.badge}
                    </span>
                )}
            </div>

            <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                {product.title}
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                {product.description}
            </p>

            <div className="space-y-4 pt-6 border-t border-border/50">
                <div className="flex flex-wrap gap-2">
                    {product.tech.map((t: string) => (
                        <span key={t} className="text-[10px] font-medium px-2 py-0.5 bg-gray-100 text-gray-500 rounded-md">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                    <div>
                        <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Setup</div>
                        <div className="font-bold text-gray-900">{product.setup}</div>
                    </div>
                    <div className="text-right">
                        <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Laufend</div>
                        <div className="font-bold text-primary">{product.monthly}</div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export const ProductsHome = () => {
    return (
        <section id="loesungen" className="py-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none opacity-50">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Unsere KI-Lösungen</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Von der Neukundengewinnung bis zur internen Effizienzsteigerung -
                        wir bauen die passenden KI-Agenten für Ihr Unternehmen.
                    </p>
                </div>

                {/* Outreach Products */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-10 overflow-hidden">
                        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent flex-grow" />
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary whitespace-nowrap px-4 py-2 bg-primary/5 rounded-full border border-primary/10">
                            Outreach & Sales Agenten
                        </span>
                        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent flex-grow" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {outreachProducts.map((p, i) => (
                            <ProductCard key={i} product={p} />
                        ))}
                    </div>
                </div>

                {/* General Products */}
                <div>
                    <div className="flex items-center gap-4 mb-10 overflow-hidden">
                        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent flex-grow" />
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary whitespace-nowrap px-4 py-2 bg-primary/5 rounded-full border border-primary/10">
                            Effizienz & Operations
                        </span>
                        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent flex-grow" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {generalProducts.map((p, i) => (
                            <ProductCard key={i} product={p} />
                        ))}
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <div className="inline-flex items-center gap-6 p-4 rounded-3xl bg-white border border-border shadow-sm">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-400">
                                    {i}
                                </div>
                            ))}
                        </div>
                        <p className="text-sm font-medium text-gray-600">
                            Über <span className="text-primary font-bold">20+</span> erfolgreich umgesetzte KI-Projekte
                        </p>
                        <Button variant="ghost" className="text-primary font-bold hover:bg-primary/5" asChild>
                            <a href="#contact">Alle Cases ansehen</a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
