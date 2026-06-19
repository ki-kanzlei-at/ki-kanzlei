import { motion } from "framer-motion";

const pressLogos = [
    {
        name: "Der Standard",
        quote: "KI automatisiert zunehmend Einstiegspositionen und repetitive Aufgaben",
        source: "Der Standard",
    },
    {
        name: "Kronen Zeitung",
        quote: "64% der Firmen sind auf den EU AI Act nicht vorbereitet",
        source: "Krone.at",
    },
    {
        name: "oe24",
        quote: "Ein Drittel der österreichischen Unternehmen setzt bereits auf KI",
        source: "oe24.at",
    },
    {
        name: "Kurier",
        quote: "Texterstellung, Chatbots & Sprachassistenten sind die Top-Anwendungen",
        source: "Kurier.at",
    },
];

export const PressSection = () => {
    return (
        <section className="py-24 bg-gray-50/50 overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Was österreichische Medien berichten
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Die Relevanz von KI in der heimischen Wirtschaft wächst täglich
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pressLogos.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-base flex flex-col justify-between"
                        >
                            <div>
                                <div className="text-primary font-bold text-xl mb-4 italic">
                                    {item.name}
                                </div>
                                <blockquote className="text-gray-600 leading-relaxed mb-6">
                                    "{item.quote}"
                                </blockquote>
                            </div>
                            <div className="text-xs font-bold uppercase tracking-wider text-gray-400">
                                - {item.source}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
