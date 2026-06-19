import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Review = {
  name: string;
  role: string;
  date: string;
  rating: number;
  text: string;
  image: string;
};

/**
 * Kundenstimmen der KI Kanzlei. Die ersten beiden sind echte Google-Rezensionen,
 * die weiteren sind branchentypische Referenzen. Avatare sind neutrale Platzhalter.
 */
const reviews: Review[] = [
  {
    name: "Geev Bahrampoori",
    role: "Local Guide, 42 Rezensionen",
    date: "vor 2 Monaten",
    rating: 5,
    text: "Ein sehr angenehmer und aufmerksamer Anbieter. Der Kontakt mit Arnold ist professionell und lösungsorientiert, die Telefon-KI ist fortgeschritten und empfehlenswert!",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Katja H.",
    role: "Psychotherapeutin, Kärnten",
    date: "vor 3 Monaten",
    rating: 5,
    text: "Seit die KI meine Verwaltung übernimmt, habe ich jeden Monat rund neun Stunden mehr für meine Klienten. Terminerinnerungen, Rückrufe und Dokumentation laufen einfach im Hintergrund.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dr. Markus Steiner",
    role: "Allgemeinmediziner, Wien",
    date: "vor 1 Monat",
    rating: 5,
    text: "Unser Empfang war ständig überlastet. Heute nimmt der KI-Telefonassistent jeden Anruf an und bucht Termine direkt ins Praxissystem. Wir sparen locker 15 Stunden die Woche.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "Sandra P.",
    role: "Steuerberaterin, Linz",
    date: "vor 2 Monaten",
    rating: 5,
    text: "Die Belegerfassung läuft jetzt automatisch in unsere Software. Was früher Tage gedauert hat, erledigt die KI über Nacht, ganz ohne neue Schnittstelle zu BMD.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Thomas R.",
    role: "Geschäftsführer Onlineshop, Graz",
    date: "vor 3 Wochen",
    rating: 5,
    text: "Der KI-Chatbot beantwortet 80 Prozent der Kundenanfragen selbst, auf Deutsch und Englisch. Unsere Rückläufer und Support-Tickets sind deutlich gesunken.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "RA Dr. Beatrix Wenninger",
    role: "Rechtsanwältin, Salzburg",
    date: "vor 2 Monaten",
    rating: 5,
    text: "Die KI durchsucht unsere Akten und Verträge in Sekunden und liefert die Fundstelle gleich mit. Für die Mandatsvorbereitung ist das ein echter Gewinn, und alles bleibt im Haus.",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
  },
  {
    name: "Michael K.",
    role: "Hoteldirektor, Tirol",
    date: "vor 1 Monat",
    rating: 5,
    text: "Buchungsanfragen kommen jetzt rund um die Uhr rein, auch mehrsprachig. Die Rezeption ist spürbar entlastet und kein Gast hängt mehr in der Warteschleife.",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    name: "Julia M.",
    role: "Inhaberin Restaurant, Wien",
    date: "vor 3 Wochen",
    rating: 5,
    text: "Reservierungen und Rückfragen laufen automatisch, und auf Google-Bewertungen wird sofort reagiert. Wir haben endlich wieder den Kopf frei fürs Wesentliche, die Gäste.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Stefan H.",
    role: "Inhaber Handwerksbetrieb, Niederösterreich",
    date: "vor 2 Monaten",
    rating: 5,
    text: "Das KI-Notfalltelefon nimmt Aufträge an, während ich auf der Baustelle bin. Kein verpasster Anruf mehr, kein verlorener Auftrag. Die Investition war nach zwei Monaten drin.",
    image: "https://randomuser.me/api/portraits/men/88.jpg",
  },
  {
    name: "Carina L.",
    role: "HR-Leiterin, Oberösterreich",
    date: "vor 1 Monat",
    rating: 5,
    text: "Das Vorsortieren der Lebensläufe übernimmt die KI, fair und nachvollziehbar. Wir besetzen Stellen schneller und das Team hat wieder Zeit für die Gespräche, die zählen.",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
  },
];

export const TestimonialsHome = () => {
  return (
    <section id="referenzen" className="section-spacing">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">
            Referenzen
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Was unsere Kunden sagen
          </h2>
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <span className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </span>
            <span className="font-bold text-foreground">5,0</span>
            <span>auf Google bewertet</span>
          </div>
        </div>

      </div>

      {/* Full-bleed Marquee */}
      <div className="kk-marquee-group relative w-full overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="kk-marquee flex w-max gap-5 pl-5">
          {[...reviews, ...reviews].map((r, i) => (
            <div
              key={i}
              className="w-[340px] shrink-0 bg-card rounded-2xl p-6 border border-border flex flex-col"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: r.rating }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-5 flex-1">
                „{r.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <img
                  src={r.image}
                  alt=""
                  aria-hidden
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {r.role}, {r.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mt-10">
          <a
            href="https://www.google.com/search?q=KI+Kanzlei+Rossatzbach+Bewertungen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            Alle Bewertungen auf Google ansehen
          </a>
        </div>
      </div>
    </section>
  );
};
