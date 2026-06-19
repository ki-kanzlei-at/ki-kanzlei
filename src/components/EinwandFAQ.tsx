import Script from "next/script";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

// Einwand-Behandlung: die echten Bedenken, die Entscheider vor einem KI-Projekt haben.
const einwaende = [
  {
    q: "Wir nutzen doch schon ChatGPT oder Copilot, wozu noch etwas extra?",
    a: "ChatGPT und Copilot sind gut fürs Brainstorming, aber sie kennen Ihre Daten nicht, halten sich nicht an Ihre Prozesse und sind für sensible Daten heikel. Wir bauen Lösungen, die auf Ihren Dokumenten arbeiten, in Ihre Tools eingebunden sind und DSGVO-konform laufen. Den Unterschied merken Sie ab dem ersten echten Use Case.",
  },
  {
    q: "Unsere Daten sind sensibel, geht das überhaupt rechtssicher?",
    a: "Genau dafür sind wir gemacht. Alles läuft auf Servern in der EU oder direkt bei Ihnen im Haus, mit Auftragsverarbeitungsvertrag, Verschlüsselung und ohne Datenweitergabe an US-Anbieter. Für Berufsgeheimnisträger wie Ärzte, Anwälte und Steuerberater ist das Pflicht, und wir setzen es sauber um.",
  },
  {
    q: "Bei uns gibt es Altsysteme, DATEV, SAP, eine gewachsene IT. Geht das?",
    a: "Ja. Wir binden auch ältere Systeme an, per Schnittstelle oder, wo es keine gibt, per Software-Roboter (RPA). DATEV, BMD, SAP und gewachsene Strukturen sind für uns Alltag, kein Hindernis. Wir bauen um Ihre Landschaft herum, statt sie umzukrempeln.",
  },
  {
    q: "Unser Team ist klein und hat keine KI-Erfahrung.",
    a: "Müssen sie auch nicht. Wir übernehmen Einrichtung, Betrieb und Wartung komplett und schulen Ihr Team genau so weit, wie es nötig ist. Sie kümmern sich um Ihr Geschäft, wir um die Technik.",
  },
  {
    q: "KI halluziniert doch, woher weiß ich, dass die Antworten stimmen?",
    a: "Berechtigte Sorge. Wir setzen auf RAG: die KI antwortet nur auf Basis Ihrer freigegebenen Dokumente und nennt die Quelle dazu. Bei kritischen Fällen bleibt ein Mensch in der Schleife. So bekommen Sie nachvollziehbare Antworten statt erfundener.",
  },
  {
    q: "Lohnt sich das für einen kleineren Betrieb überhaupt?",
    a: "Gerade dann. Wir starten mit dem einen Prozess, der am meisten Zeit frisst, und rechnen den ROI vorher durch. Das KI Assessment Center kostet 490 Euro und wird bei der Umsetzung voll angerechnet. Ihr Risiko ist also praktisch null.",
  },
  {
    q: "Bei uns dauern Entscheidungen, Gremien, Freigaben.",
    a: "Kennen wir. Deshalb liefern wir mit dem Assessment gleich die Unterlagen mit, die Sie intern brauchen: ROI-Rechnung, Datenschutz-Doku und einen klaren Plan. Damit überzeugen Sie mit Fakten statt mit Versprechen.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: einwaende.map((e) => ({ "@type": "Question", name: e.q, acceptedAnswer: { "@type": "Answer", text: e.a } })),
};

export const EinwandFAQ = () => {
  return (
    <section className="section-spacing">
      <Script id="einwand-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Ehrlich gefragt</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Ihre Bedenken, ehrlich beantwortet</h2>
          <p className="text-lg text-muted-foreground">Das hören wir am häufigsten, bevor ein Projekt startet. Keine Sales-Floskeln, sondern wie es wirklich ist.</p>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-3">
          {einwaende.map((e, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-2 border-border rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:bg-primary/5">
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-5">{e.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">{e.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
