import Script from "next/script";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

// Eine FAQ fuer die Startseite: allgemeine Fragen + die haeufigsten Einwaende, gemischt.
const faqs = [
  {
    question: "Wie lange dauert die Implementierung?",
    answer: "In der Regel rund 30 Tage von der ersten Analyse bis zur produktiven Nutzung. Nach dem Erstgespräch analysieren wir Ihre Prozesse, setzen die Lösungen System für System um und testen gründlich. Sie bekommen laufend Updates und können jederzeit Anpassungen wünschen.",
  },
  {
    question: "Ist die Lösung wirklich DSGVO-konform?",
    answer: "Ja. Alle Daten werden in der EU gehostet (Österreich, Deutschland) oder auf Wunsch direkt bei Ihnen im Haus, mit Auftragsverarbeitungsvertrag, Verschlüsselung und ohne Weitergabe an US-Anbieter. Sie erhalten ein vollständiges DSGVO-Paket, auch für Berufsgeheimnisträger wie Ärzte, Anwälte und Steuerberater.",
  },
  {
    question: "Welche KI-Lösungen passen zu meinem Unternehmen?",
    answer: "Das klären wir im kostenlosen Erstgespräch. Je nach Bedarf kommen Voicebot und KI-Telefonassistent, KI-Chatbot, eine KI-Wissensdatenbank (RAG), n8n-Automatisierung oder autonome KI-Agenten in Frage. Wir starten mit dem Prozess, der am meisten Zeit frisst, und bauen modular aus.",
  },
  {
    question: "Wir nutzen doch schon ChatGPT oder Copilot, wozu noch etwas Eigenes?",
    answer: "ChatGPT und Copilot sind gut fürs Brainstorming, kennen aber Ihre Daten nicht, halten sich nicht an Ihre Prozesse und sind für sensible Daten heikel. Wir bauen Lösungen, die auf Ihren Dokumenten arbeiten, in Ihre Tools eingebunden sind und DSGVO-konform laufen. Den Unterschied merken Sie ab dem ersten echten Use Case.",
  },
  {
    question: "Bei uns gibt es Altsysteme wie DATEV und SAP. Geht das?",
    answer: "Ja. Wir binden auch ältere Systeme an, per Schnittstelle oder, wo es keine gibt, per Software-Roboter (RPA). DATEV, BMD, SAP und gewachsene IT-Landschaften sind für uns Alltag. Wir bauen um Ihre Systeme herum, statt sie umzukrempeln.",
  },
  {
    question: "KI halluziniert doch, woher weiß ich, dass die Antworten stimmen?",
    answer: "Wir setzen auf RAG: Die KI antwortet nur auf Basis Ihrer freigegebenen Dokumente und nennt die Quelle dazu. Bei kritischen Fällen bleibt ein Mensch in der Schleife. So bekommen Sie nachvollziehbare, belegte Antworten statt erfundener.",
  },
  {
    question: "Wie viel Zeit spare ich wirklich?",
    answer: "Das hängt von den automatisierten Prozessen ab. Unsere Kunden sparen im Schnitt 10 bis 20 Stunden pro Woche durch die Automatisierung wiederkehrender Aufgaben. Die konkrete Ersparnis rechnen wir vorab im Assessment durch.",
  },
  {
    question: "Was passiert mit meinen Daten?",
    answer: "Ihre Daten bleiben Ihre Daten. Wir verarbeiten sie ausschließlich in Ihrem Auftrag laut Auftragsverarbeitungsvertrag (AVV), verschlüsselt und regelmäßig gesichert. Sie können den Zugriff jederzeit widerrufen oder Daten exportieren und löschen lassen.",
  },
  {
    question: "Brauche ich technische Kenntnisse?",
    answer: "Nein. Wir übernehmen Einrichtung, Betrieb und Wartung komplett und schulen Ihr Team so weit wie nötig. Sie kümmern sich um Ihr Geschäft, wir um die Technik.",
  },
  {
    question: "Was ist, wenn etwas nicht funktioniert?",
    answer: "Unser Team überwacht die Systeme und reagiert schnell bei Problemen. Sie erhalten laufende Updates und können jederzeit Anpassungen wünschen. Ziel ist, dass Sie sich um Ihr Unternehmen kümmern, nicht um die Technik.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

export const FAQHome = () => {
  return (
    <section id="faq" className="section-spacing">
      <Script id="faq-home-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">
            FAQ
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-up">
            Häufig gestellte Fragen
          </h2>
          <p className="text-lg text-muted-foreground slide-up">
            Alles, was Sie über KI Automatisierung, Voicebot und unsere KI Beratung im DACH-Raum wissen müssen.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-2 border-border rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:bg-primary/5"
            >
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
