import type { Metadata } from "next";
import Script from "next/script";
import { NavigationHome } from "@/components/NavigationHome";
import { ModelLogoStrip } from "@/components/ModelLogoStrip";
import { FooterModern } from "@/components/FooterModern";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Shield,
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  Check,
  Ban,
  Eye,
  FileText,
  FileWarning,
  Scale,
  Gavel,
  Clock,
  Search,
  RefreshCw,
  Building2,
  Lock,
  Compass,
  Bot,
  Users,
  UserCheck,
  GraduationCap,
  ClipboardCheck,
  ListChecks,
  Cpu,
  Landmark,
  Stethoscope,
  CreditCard,
  Megaphone,
  Factory,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "EU AI Act Beratung: Compliance, Risikoklassen & Checkliste",
  description:
    "EU AI Act Compliance für Unternehmen im DACH-Raum: Risikoklassifizierung, KI-Inventar, Dokumentation und AI Governance. Fristen 2025 bis 2027, Bußgelder bis 35 Mio. EUR und ein klarer Fahrplan zur DSGVO-konformen KI-Nutzung.",
  keywords:
    "EU AI Act, EU AI Act Unternehmen, EU AI Act Compliance, EU AI Act Österreich, EU AI Act Deutschland, EU AI Act Schweiz, EU AI Act Beratung, AI Governance, KI Compliance, EU AI Act Checkliste, EU AI Act Risikostufen, KI Regulierung, AI Act Fristen, KI Verordnung 2024/1689, KI Compliance Beratung DACH, AI Governance Deutschland, KI Compliance Schweiz",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/eu-ai-act" },
};

const faqs = [
  {
    q: "Was ist der EU AI Act?",
    a: "Der EU AI Act (Verordnung (EU) 2024/1689) ist die weltweit erste umfassende gesetzliche Regulierung künstlicher Intelligenz. Er ordnet KI-Systeme nach einem risikobasierten Ansatz vier Stufen zu (minimal, begrenzt, hoch, inakzeptabel) und knüpft daran abgestufte Pflichten. In Kraft seit August 2024, gilt er stufenweise bis 2027 und schafft einen einheitlichen Rechtsrahmen für den gesamten EU-Binnenmarkt.",
  },
  {
    q: "Wen betrifft der EU AI Act konkret?",
    a: "Betroffen sind nicht nur KI-Entwickler. Die Verordnung adressiert Anbieter (Provider), Betreiber (Deployer), Importeure, Händler und Bevollmächtigte. Sobald Sie KI im Unternehmen einsetzen, also ChatGPT, einen Kundenservice-Chatbot, ein Recruiting-Tool oder automatisierte Entscheidungen, fallen Sie als Betreiber unter den AI Act. Auch Unternehmen außerhalb der EU sind erfasst, sobald die Ergebnisse ihrer KI in der EU genutzt werden.",
  },
  {
    q: "Welche Risikostufen gibt es im EU AI Act?",
    a: "Es gibt vier Stufen. Inakzeptables Risiko ist verboten (etwa Social Scoring oder biometrische Massenüberwachung). Hohes Risiko unterliegt strengen Pflichten (etwa KI in HR, Kreditvergabe, Bildung oder kritischer Infrastruktur). Begrenztes Risiko löst Transparenzpflichten aus (Chatbots und Deepfakes müssen gekennzeichnet sein). Minimales Risiko ist kaum reguliert (etwa Spamfilter oder Empfehlungssysteme).",
  },
  {
    q: "Was droht bei Verstößen gegen den EU AI Act?",
    a: "Die Bußgelder sind gestaffelt und empfindlich: bis zu 35 Mio. EUR oder 7 Prozent des weltweiten Jahresumsatzes bei verbotenen KI-Praktiken, bis zu 15 Mio. EUR oder 3 Prozent bei Verstößen gegen Hochrisiko-Pflichten und sonstige Anforderungen sowie bis zu 7,5 Mio. EUR oder 1,5 Prozent bei Fehlinformationen gegenüber Behörden. Maßgeblich ist jeweils der höhere Betrag.",
  },
  {
    q: "Ab wann gelten welche Pflichten?",
    a: "Die Anwendung erfolgt stufenweise. Seit August 2024 ist die Verordnung in Kraft. Seit Februar 2025 gelten die Verbote und die Pflicht zur KI-Kompetenz der Mitarbeitenden. Seit August 2025 greifen die Regeln für GPAI-Modelle und die Governance-Strukturen. Ab August 2026 gelten die Hochrisiko-Pflichten nach Anhang III, ab August 2027 folgt die volle Anwendung auch für Hochrisiko-KI in regulierten Produkten.",
  },
  {
    q: "Muss ich einen KI-Chatbot oder KI-Inhalte kennzeichnen?",
    a: "Ja. Systeme mit begrenztem Risiko unterliegen Transparenzpflichten. Nutzer müssen erkennen können, dass sie mit einer KI interagieren, etwa bei Chatbots und Voicebots. KI-generierte oder manipulierte Inhalte wie Deepfakes sowie maschinell erzeugte Texte von öffentlichem Interesse sind als künstlich erzeugt zu kennzeichnen.",
  },
  {
    q: "Was ist ein GPAI-Modell und gelten dafür Sonderregeln?",
    a: "GPAI steht für General-Purpose AI, also universell einsetzbare Modelle wie große Sprachmodelle. Anbieter solcher Modelle müssen technische Dokumentation bereitstellen, Informationen für nachgelagerte Anbieter liefern und eine Urheberrechts-Policy vorhalten. Bei Modellen mit systemischem Risiko kommen zusätzliche Pflichten wie Modellbewertung, Risikominderung und Vorfallmeldungen hinzu.",
  },
  {
    q: "Müssen meine Mitarbeitenden im Umgang mit KI geschult werden?",
    a: "Ja. Seit Februar 2025 verlangt der EU AI Act ein ausreichendes Maß an KI-Kompetenz bei allen Personen, die KI-Systeme betreiben oder nutzen. Unternehmen müssen sicherstellen, dass ihr Personal Funktionsweise, Grenzen und Risiken der eingesetzten Systeme versteht. Wir bieten dazu praxisnahe Schulungen, abgestimmt auf Ihre konkreten Anwendungsfälle.",
  },
  {
    q: "Wie hängen DSGVO und EU AI Act zusammen?",
    a: "Beide gelten parallel und ergänzen sich. Die DSGVO regelt den Schutz personenbezogener Daten, der EU AI Act regelt das Inverkehrbringen und den Betrieb von KI-Systemen. Setzt Ihre KI personenbezogene Daten ein, müssen beide Regelwerke gleichzeitig erfüllt sein. Wir denken Datenschutz und KI-Compliance daher zusammen und prüfen Datenhaltung, Rechtsgrundlagen und Betroffenenrechte gemeinsam mit der Risikoklasse.",
  },
  {
    q: "Wie unterstützt die KI Kanzlei bei der EU AI Act Compliance?",
    a: "Wir begleiten den gesamten Weg: KI-Inventarisierung aller eingesetzten Systeme, Klassifizierung nach Risikostufen, Gap-Analyse zu den Pflichten, Erstellung der erforderlichen Dokumentation, Aufbau eines AI Governance Frameworks, Mitarbeiterschulung und laufendes Monitoring bei Gesetzesänderungen. Für hochriskante Systeme entwickeln wir bei Bedarf DSGVO-konforme, lokal gehostete Alternativen.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "EU AI Act Compliance Beratung",
  serviceType: "EU AI Act Compliance, AI Governance",
  provider: {
    "@type": "ProfessionalService",
    name: "KI Kanzlei",
    url: "https://ki-kanzlei.at",
    telephone: "+436642314676",
  },
  description:
    "EU AI Act Compliance und AI Governance Beratung für Unternehmen im DACH-Raum: KI-Inventarisierung, Risikoklassifizierung, Compliance-Dokumentation, Schulung und DSGVO-konforme Umsetzung.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const ampel = [
  {
    level: "Inakzeptabel",
    tag: "Verboten",
    icon: Ban,
    dot: "bg-red-500",
    ring: "ring-red-500/30",
    text: "text-red-600",
    width: "62%",
    note: "Darf nicht eingesetzt werden",
  },
  {
    level: "Hoch",
    tag: "Streng reguliert",
    icon: ShieldCheck,
    dot: "bg-orange-500",
    ring: "ring-orange-500/30",
    text: "text-orange-600",
    width: "78%",
    note: "Dokumentation und Aufsicht",
  },
  {
    level: "Begrenzt",
    tag: "Transparenzpflicht",
    icon: Eye,
    dot: "bg-yellow-500",
    ring: "ring-yellow-500/30",
    text: "text-yellow-600",
    width: "90%",
    note: "Kennzeichnung erforderlich",
  },
  {
    level: "Minimal",
    tag: "Frei nutzbar",
    icon: CheckCircle,
    dot: "bg-green-500",
    ring: "ring-green-500/30",
    text: "text-green-600",
    width: "100%",
    note: "Kaum Auflagen",
  },
];

const heroStats = [
  { v: "35 Mio.", l: "EUR maximales Bußgeld" },
  { v: "4", l: "Risikostufen" },
  { v: "2026", l: "Hochrisiko-Pflichten" },
  { v: "2027", l: "volle Anwendung" },
];

const keyFacts = [
  { k: "Rechtsgrundlage", v: "Verordnung (EU) 2024/1689" },
  { k: "In Kraft seit", v: "1. August 2024" },
  { k: "Risikostufen", v: "4 (minimal bis inakzeptabel)" },
  { k: "Verbote gelten", v: "seit Februar 2025" },
  { k: "GPAI & Governance", v: "seit August 2025" },
  { k: "Hochrisiko-Pflichten", v: "ab August 2026" },
  { k: "Volle Anwendung", v: "ab August 2027" },
  { k: "Max. Bußgeld", v: "35 Mio. EUR / 7% Umsatz" },
];

const timeline = [
  {
    date: "Aug 2024",
    event: "EU AI Act in Kraft getreten",
    detail: "Beginn der Übergangsfristen für alle Akteure.",
    done: true,
  },
  {
    date: "Feb 2025",
    event: "Verbote & KI-Kompetenz",
    detail: "Verbotene Praktiken sind untersagt, Personal muss KI-kompetent sein.",
    done: true,
  },
  {
    date: "Aug 2025",
    event: "GPAI-Modelle & Governance",
    detail: "Pflichten für Universalmodelle, nationale Behörden nehmen Arbeit auf.",
    done: true,
  },
  {
    date: "Aug 2026",
    event: "Hochrisiko-KI nach Anhang III",
    detail: "Risikomanagement, Dokumentation und Registrierung werden Pflicht.",
    done: false,
  },
  {
    date: "Aug 2027",
    event: "Volle Anwendung",
    detail: "Hochrisiko-KI in regulierten Produkten vollständig erfasst.",
    done: false,
  },
];

const riskLevels = [
  {
    level: "Inakzeptabel",
    dot: "bg-red-500",
    examples:
      "Social Scoring durch Behörden, biometrische Massenüberwachung, manipulative Systeme, Emotionserkennung am Arbeitsplatz und in Schulen",
    requirements: "Generell unzulässig, keine Ausnahmen für den regulären Einsatz",
    action: "Verboten: darf nicht in Verkehr gebracht oder genutzt werden",
    critical: true,
  },
  {
    level: "Hoch",
    dot: "bg-orange-500",
    examples:
      "KI in HR und Recruiting, Kreditwürdigkeitsprüfung, Bildung und Prüfungen, kritische Infrastruktur, Medizinprodukte, Strafverfolgung",
    requirements:
      "Risikomanagement, technische Dokumentation, Datenqualität, menschliche Aufsicht, Konformitätsbewertung, Registrierung in der EU-Datenbank",
    action: "Strenge Pflichten vor und nach dem Inverkehrbringen",
  },
  {
    level: "Begrenzt",
    dot: "bg-yellow-500",
    examples:
      "Chatbots und Voicebots, Deepfakes, KI-generierte Inhalte, Emotionserkennung außerhalb verbotener Kontexte",
    requirements: "Transparenz- und Kennzeichnungspflichten gegenüber Nutzern",
    action: "Transparenz: Nutzer müssen den KI-Einsatz erkennen können",
  },
  {
    level: "Minimal",
    dot: "bg-green-500",
    examples:
      "Spamfilter, Empfehlungssysteme, KI in Computerspielen, Lagerverwaltung",
    requirements: "Keine verpflichtenden Auflagen",
    action: "Frei nutzbar: freiwillige Verhaltenskodizes empfohlen",
  },
];

const penalties = [
  {
    tier: "35 Mio. EUR / 7%",
    title: "Verbotene KI-Praktiken",
    icon: Ban,
    desc: "Bis zu 35 Mio. EUR oder 7 Prozent des weltweiten Jahresumsatzes beim Einsatz verbotener KI-Praktiken. Es gilt jeweils der höhere Betrag.",
  },
  {
    tier: "15 Mio. EUR / 3%",
    title: "Sonstige Verstöße",
    icon: Gavel,
    desc: "Bis zu 15 Mio. EUR oder 3 Prozent des weltweiten Jahresumsatzes bei Verstößen gegen Pflichten für Hochrisiko-KI, Anbieter und Betreiber.",
  },
  {
    tier: "7,5 Mio. EUR / 1,5%",
    title: "Fehlinformationen",
    icon: FileWarning,
    desc: "Bis zu 7,5 Mio. EUR oder 1,5 Prozent bei falschen oder irreführenden Angaben gegenüber benannten Stellen und Behörden.",
  },
];

const affected = [
  {
    role: "Anbieter (Provider)",
    desc: "Entwickeln KI-Systeme oder lassen sie entwickeln und bringen sie unter eigenem Namen in der EU in Verkehr.",
  },
  {
    role: "Betreiber (Deployer)",
    desc: "Setzen KI-Systeme im professionellen Umfeld ein. Das trifft die große Mehrheit der Unternehmen.",
  },
  {
    role: "Importeure & Händler",
    desc: "Bringen KI-Systeme aus Drittländern in die EU oder stellen sie auf dem Markt bereit.",
  },
  {
    role: "Bevollmächtigte",
    desc: "Vertreten Anbieter aus Drittländern gegenüber den europäischen Aufsichtsbehörden.",
  },
  {
    role: "Drittland-Unternehmen",
    desc: "Fallen ebenfalls darunter, sobald die Ergebnisse ihrer KI-Systeme in der EU genutzt werden.",
  },
];

const gpai = [
  "Technische Dokumentation und Modellinformationen für nachgelagerte Anbieter bereitstellen",
  "Urheberrechts-Policy zur Wahrung der EU-Vorgaben beim Training vorhalten",
  "Zusammenfassung der für das Training verwendeten Inhalte veröffentlichen",
  "Bei systemischem Risiko zusätzlich Modellbewertung, Risikominderung und Vorfallmeldungen",
];

const dsgvoCompare = [
  ["Gegenstand", "Schutz personenbezogener Daten", "Inverkehrbringen und Betrieb von KI"],
  ["In Kraft seit", "2018", "2024, stufenweise bis 2027"],
  ["Ansatz", "datenschutzbasiert", "risikobasiert nach Stufen"],
  ["Zentrale Pflicht", "Rechtsgrundlage und Betroffenenrechte", "Risikoklasse und passende Maßnahmen"],
  ["Max. Bußgeld", "20 Mio. EUR / 4% Umsatz", "35 Mio. EUR / 7% Umsatz"],
  ["Gilt zusammen", "ja, parallel zum AI Act", "ja, parallel zur DSGVO"],
];

const services = [
  {
    icon: ListChecks,
    title: "KI-Inventarisierung",
    desc: "Wir erfassen jedes KI-System in Ihrem Unternehmen, von ChatGPT bis zum eingebetteten Modell im Drittanbieter-Tool, und erstellen ein vollständiges, prüfbares KI-Register als Grundlage jeder Compliance.",
  },
  {
    icon: Scale,
    title: "Risikobewertung",
    desc: "Klassifizierung jedes Systems nach den vier Risikostufen mit dokumentierter Begründung und konkreten Handlungsempfehlungen je System.",
  },
  {
    icon: Shield,
    title: "AI Governance Framework",
    desc: "Interne Strukturen, Rollen, Verantwortlichkeiten und Freigabeprozesse für eine compliant und nachvollziehbare KI-Nutzung.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance-Dokumentation",
    desc: "Technische Dokumentation, Risikomanagement, Konformitätsbewertung und Transparenzhinweise, vorbereitet für Audits und Behörden.",
  },
  {
    icon: GraduationCap,
    title: "KI-Kompetenz & Schulung",
    desc: "Praxisnahe Schulungen, damit Ihr Personal die Pflicht zur KI-Kompetenz erfüllt und Risiken im Alltag richtig einschätzt.",
  },
  {
    icon: RefreshCw,
    title: "Laufendes Monitoring",
    desc: "Regelmäßige Reviews, Updates bei Gesetzesänderungen und Vorbereitung auf die nächsten Fristen 2026 und 2027.",
  },
];

const useCases = [
  {
    value: "hr",
    label: "HR & Recruiting",
    icon: Users,
    risk: "Hochrisiko",
    head: "Personalauswahl und Recruiting",
    text: "KI, die Bewerbungen sichtet, vorsortiert oder bewertet, gilt als Hochrisiko-System. Erforderlich sind Dokumentation, Datenqualität, menschliche Aufsicht und Transparenz gegenüber Bewerbern. Wir prüfen Tools wie Matching-Software und automatisierte Vorauswahl und schaffen die Nachweise.",
  },
  {
    value: "finanz",
    label: "Banken & Versicherung",
    icon: CreditCard,
    risk: "Hochrisiko",
    head: "Kreditwürdigkeit und Risikobewertung",
    text: "KI zur Bonitätsprüfung von Privatpersonen oder zur Risikobewertung in der Versicherung zählt zu Hochrisiko. Neben dem AI Act greifen oft sektorale Vorgaben. Wir verbinden beide Welten und sorgen für Konformitätsbewertung und nachvollziehbare Entscheidungen.",
  },
  {
    value: "gesundheit",
    label: "Gesundheit",
    icon: Stethoscope,
    risk: "Hochrisiko",
    head: "Diagnose und medizinische KI",
    text: "KI als Medizinprodukt oder zur Diagnoseunterstützung ist regelmäßig Hochrisiko und unterliegt zusätzlich dem Medizinprodukterecht. Wir koordinieren Risikomanagement, technische Dokumentation und menschliche Aufsicht für den klinischen Einsatz.",
  },
  {
    value: "marketing",
    label: "Marketing & Service",
    icon: Megaphone,
    risk: "Begrenztes Risiko",
    head: "Chatbots, Voicebots und Content",
    text: "Kundenservice-Chatbots, Voicebots und KI-generierte Inhalte fallen meist unter begrenztes Risiko. Pflicht ist die Transparenz: Nutzer müssen den KI-Einsatz erkennen, Deepfakes und maschinell erzeugte Inhalte sind zu kennzeichnen. Wir liefern die passenden Hinweise und Prozesse.",
  },
  {
    value: "bildung",
    label: "Bildung",
    icon: GraduationCap,
    risk: "Hochrisiko",
    head: "Prüfungen und Zugangsentscheidungen",
    text: "KI, die über Zugang zu Bildung entscheidet oder Prüfungsleistungen bewertet, ist Hochrisiko. Bewertungssysteme und Proctoring brauchen Dokumentation, Aufsicht und Fairnessnachweise. Wir begleiten Bildungseinrichtungen durch die Anforderungen.",
  },
  {
    value: "industrie",
    label: "Industrie & KMU",
    icon: Factory,
    risk: "Meist begrenzt bis minimal",
    head: "Prozesse, Wartung und Office-KI",
    text: "Viele Anwendungen in Industrie und KMU, etwa Predictive Maintenance, Qualitätskontrolle oder Office-KI, liegen bei begrenztem oder minimalem Risiko. Trotzdem braucht es ein KI-Inventar und klare Regeln. Wir schaffen Überblick ohne Überregulierung.",
  },
];

const checklist = [
  "KI-Inventar erstellen: Welche KI-Systeme setzen Sie ein? ChatGPT, Chatbots, automatisierte Entscheidungen, eingebettete Modelle in Software",
  "Risikobewertung: Welche Risikostufe hat jedes einzelne KI-System nach dem EU AI Act?",
  "Verbotene Praktiken ausschließen: kein Social Scoring, keine biometrische Massenüberwachung, keine manipulativen Systeme",
  "Hochrisiko-KI dokumentieren: technische Dokumentation, Risikomanagement, menschliche Aufsicht, Registrierung",
  "Transparenzpflichten erfüllen: Chatbots, Voicebots und KI-generierte Inhalte sichtbar kennzeichnen",
  "DSGVO-Kompatibilität sicherstellen: Rechtsgrundlage, Datenhaltung in der EU und Betroffenenrechte prüfen",
  "AI Governance etablieren: Rollen, Verantwortlichkeiten, Freigabe- und Monitoring-Prozesse festlegen",
  "KI-Kompetenz aufbauen: Mitarbeitende zu Funktionsweise, Grenzen und Risiken der Systeme schulen",
  "Fristen im Blick behalten: Vorbereitung auf August 2026 und August 2027 einplanen",
];

const steps = [
  {
    step: "01",
    icon: Search,
    time: "Start",
    title: "Kostenlose Erstanalyse, 30 Minuten",
    desc: "Wir besprechen, welche KI-Systeme Sie einsetzen oder planen. In 30 Minuten zeigen wir, welche EU AI Act Kategorien für Sie relevant sind und wo akuter Handlungsbedarf besteht.",
  },
  {
    step: "02",
    icon: FileText,
    time: "Analyse",
    title: "Assessment & vollständiges KI-Inventar",
    desc: "Detailliertes Assessment aller Systeme: Risikoklassifizierung, Gap-Analyse zu den Pflichten, Priorisierung und ein konkreter Umsetzungsfahrplan mit Zeitplan und Budget.",
  },
  {
    step: "03",
    icon: Shield,
    time: "Umsetzung",
    title: "Dokumentation & Maßnahmen",
    desc: "Wir erstellen alle erforderlichen Dokumente, richten Transparenzhinweise ein, bauen das AI Governance Framework auf und schulen Ihr Team.",
  },
  {
    step: "04",
    icon: RefreshCw,
    time: "laufend",
    title: "Monitoring & Updates",
    desc: "Gesetze ändern sich, wir bleiben aktuell. Jährliche Reviews, Updates bei neuen Anforderungen und Vorbereitung auf die nächsten Fristen.",
  },
];

const reasons = [
  {
    icon: Scale,
    badge: "Dual Expertise",
    title: "Technisch und rechtlich",
    desc: "Wir verbinden KI-technisches Know-how mit dem Verständnis des EU AI Acts und sprechen beide Sprachen: die Ihrer IT und die Ihrer Rechtsabteilung.",
  },
  {
    icon: Building2,
    badge: "Austria",
    title: "Österreich-Fokus",
    desc: "Als österreichische KI Agentur kennen wir die nationalen Umsetzungsgesetze, die zuständigen Behörden und die Besonderheiten des österreichischen Datenschutzes.",
  },
  {
    icon: Clock,
    badge: "Vorausschauend",
    title: "Proaktiv statt reaktiv",
    desc: "Wir warten nicht auf Bußgelder. Mit unserem Assessment sind Sie vorbereitet, bevor die nächsten Pflichten greifen.",
  },
];

const related = [
  {
    href: "/leistungen/private-ai",
    icon: Lock,
    tag: "DSGVO-konform",
    title: "Private AI & lokale KI",
    desc: "Hochrisiko-KI durch DSGVO-konforme, lokal gehostete Alternativen ersetzen.",
  },
  {
    href: "/leistungen/ki-consulting",
    icon: Compass,
    tag: "Beratung",
    title: "KI Consulting",
    desc: "Strategische Beratung für eine verantwortungsvolle KI-Einführung im Unternehmen.",
  },
  {
    href: "/leistungen/ki-schulung",
    icon: GraduationCap,
    tag: "Schulung",
    title: "KI Schulung",
    desc: "Mitarbeiterschulung zu KI-Kompetenz und verantwortungsvollem KI-Einsatz nach AI Act.",
  },
  {
    href: "/leistungen/agentic-ai",
    icon: Bot,
    tag: "Automatisierung",
    title: "Agentic AI",
    desc: "Autonome KI-Agents, jeweils geprüft auf Risikostufe und Transparenzpflichten.",
  },
];

export default function Page() {
  return (
    <>
      <Script
        id="faq-eu-ai-act"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-eu-ai-act"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge
                    variant="outline"
                    className="rounded-full bg-primary/10 text-primary border-primary/20"
                  >
                    EU AI Act, Compliance & AI Governance
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-primary">EU AI Act</span>: vom Risiko
                    zur sauberen Compliance
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Die KI-Verordnung ist in Kraft, ihre Pflichten greifen
                    stufenweise bis 2027. Wir bringen Ihre KI-Systeme in
                    Ordnung: Risikoklasse bestimmen, Pflichten erfüllen,
                    Bußgelder vermeiden. Klar, technisch fundiert und
                    DSGVO-konform.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Erstgespräch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#risikostufen">Risikostufen ansehen</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Landmark className="w-4 h-4 text-primary" /> Verordnung
                      2024/1689
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-primary" /> Made in Austria
                    </span>
                  </div>
                </div>

                {/* Bespoke Hero Visual: Risikostufen-Ampel als Pyramide */}
                <Card className="relative border-2 shadow-xl shadow-primary/5">
                  <CardHeader className="border-b border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">
                          Risikostufen-Ampel
                        </CardTitle>
                        <CardDescription className="text-xs">
                          Vier Stufen, von verboten bis frei nutzbar
                        </CardDescription>
                      </div>
                      <Badge
                        variant="outline"
                        className="rounded-full text-[10px] uppercase tracking-wider bg-primary/10 text-primary border-primary/20"
                      >
                        AI Act
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-2.5">
                    {ampel.map((a) => {
                      const Icon = a.icon;
                      return (
                        <div
                          key={a.level}
                          className="mx-auto rounded-xl border border-border bg-muted/30 px-3 py-2.5 flex items-center gap-3"
                          style={{ width: a.width }}
                        >
                          <span
                            className={`w-3.5 h-3.5 rounded-full shrink-0 ring-4 ${a.dot} ${a.ring}`}
                            aria-hidden
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="text-sm font-bold text-foreground">
                                {a.level}
                              </span>
                              <span className={`text-xs font-medium ${a.text}`}>
                                {a.tag}
                              </span>
                            </div>
                            <div className="text-[11px] text-muted-foreground truncate">
                              {a.note}
                            </div>
                          </div>
                          <Icon className={`w-4 h-4 shrink-0 ${a.text}`} />
                        </div>
                      );
                    })}
                    <div className="text-[11px] text-center text-muted-foreground pt-1.5">
                      Je höher das Risiko, desto strenger die Pflichten
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* STATS-BAND */}
          <section className="py-8 md:py-10 bg-white/50 border-y border-border">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {heroStats.map((s) => (
                  <div key={s.l} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary">
                      {s.v}
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground mt-1">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <ModelLogoStrip
            caption="Wir prüfen Ihren KI-Einsatz herstellerneutral"
            items={[
              { slug: "openai", name: "OpenAI" },
              { slug: "anthropic", name: "Anthropic" },
              { slug: "googlegemini", name: "Google Gemini" },
              { slug: "mistralai", name: "Mistral AI" },
              { slug: "huggingface", name: "Hugging Face" },
              { slug: "ollama", name: "Ollama" },
            ]}
          />

          {/* DEFINITION 2-col + Info-Card */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge
                    variant="outline"
                    className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20"
                  >
                    Definition
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Was ist der EU AI Act?
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      <strong className="text-foreground">Der EU AI Act</strong>{" "}
                      (Verordnung (EU) 2024/1689) ist die weltweit erste
                      umfassende gesetzliche Regulierung künstlicher Intelligenz.
                      Er verfolgt einen risikobasierten Ansatz: Je höher das
                      Risiko eines KI-Systems für Sicherheit und Grundrechte,
                      desto strenger die Pflichten. Ziel ist vertrauenswürdige KI
                      in einem einheitlichen europäischen Binnenmarkt.
                    </p>
                    <p>
                      Betroffen sind nicht nur KI-Entwickler, sondern{" "}
                      <strong className="text-foreground">
                        jedes Unternehmen, das KI-Systeme einsetzt
                      </strong>
                      : vom ChatGPT-Account über den Service-Chatbot bis zur
                      automatisierten Bewerbervorauswahl. Auch Betriebe außerhalb
                      der EU fallen darunter, sobald ihre KI-Ergebnisse in der EU
                      genutzt werden. Damit hat der AI Act, ähnlich wie die DSGVO,
                      eine weltweite Reichweite.
                    </p>
                    <p>
                      Die Pflichten greifen{" "}
                      <strong className="text-foreground">
                        stufenweise zwischen 2024 und 2027
                      </strong>
                      . Wer früh ein KI-Inventar aufbaut, Risikoklassen bestimmt
                      und seine Governance aufsetzt, vermeidet teures Nachbessern
                      und Bußgelder von bis zu 35 Mio. EUR oder 7 Prozent des
                      weltweiten Jahresumsatzes. Frühzeitige Compliance ist dabei
                      mehr als Pflichterfüllung, sie schafft Vertrauen bei Kunden
                      und Partnern.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">
                      Verordnung (EU) 2024/1689
                    </Badge>
                    <Badge variant="secondary" className="rounded-full">
                      Risikobasiert
                    </Badge>
                    <Badge variant="secondary" className="rounded-full">
                      Seit Aug 2024
                    </Badge>
                    <Badge variant="secondary" className="rounded-full">
                      DACH & EU
                    </Badge>
                  </div>
                </div>

                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      Der EU AI Act auf einen Blick
                    </CardTitle>
                    <CardDescription>
                      Die wichtigsten Eckdaten der KI-Verordnung.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {keyFacts.map((f) => (
                      <div
                        key={f.k}
                        className="flex items-center justify-between py-2.5 border-b border-border last:border-0"
                      >
                        <span className="text-sm font-medium text-foreground">
                          {f.k}
                        </span>
                        <span className="text-sm text-muted-foreground text-right max-w-[55%]">
                          {f.v}
                        </span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* RISIKO-DIAGRAMM (Bento) + TABELLE */}
          <section
            id="risikostufen"
            className="py-14 md:py-20 bg-white/50 scroll-mt-20"
          >
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge
                  variant="outline"
                  className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20"
                >
                  Risikoklassen
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Die vier Risikostufen des EU AI Acts
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Jedes KI-System wird genau einer Stufe zugeordnet. Die
                  Einstufung entscheidet über sämtliche Pflichten. Welche Stufe
                  für Ihre Systeme gilt, klären wir im kostenlosen Assessment.
                </p>
              </div>

              {/* Bento der 4 Stufen */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {ampel.map((a, i) => {
                  const Icon = a.icon;
                  return (
                    <Card
                      key={a.level}
                      className={`border-2 hover-lift ${
                        i === 0 ? "border-red-500/30 bg-red-500/5" : ""
                      }`}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="w-10 h-10 rounded-xl flex items-center justify-center bg-muted">
                            <Icon className={`w-5 h-5 ${a.text}`} />
                          </span>
                          <span
                            className={`w-3 h-3 rounded-full ${a.dot}`}
                            aria-hidden
                          />
                        </div>
                        <CardTitle className="text-lg">{a.level}</CardTitle>
                        <CardDescription className={`font-medium ${a.text}`}>
                          {a.tag}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {a.note}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Detailtabelle */}
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="font-bold text-foreground">
                        Risikostufe
                      </TableHead>
                      <TableHead className="font-bold text-foreground">
                        Beispiele
                      </TableHead>
                      <TableHead className="font-bold text-foreground">
                        Anforderungen
                      </TableHead>
                      <TableHead className="font-bold text-foreground">
                        Konsequenz
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {riskLevels.map((r, i) => (
                      <TableRow
                        key={i}
                        className={r.critical ? "bg-primary/5" : ""}
                      >
                        <TableCell className="font-semibold align-top">
                          <span className="inline-flex items-center gap-2">
                            <span
                              className={`w-2.5 h-2.5 rounded-full shrink-0 ${r.dot}`}
                              aria-hidden
                            />
                            <span className={r.critical ? "text-primary" : ""}>
                              {r.level}
                            </span>
                          </span>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm align-top">
                          {r.examples}
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm align-top">
                          {r.requirements}
                        </TableCell>
                        <TableCell
                          className={`text-sm font-medium align-top ${
                            r.critical ? "text-primary" : ""
                          }`}
                        >
                          <span className="inline-flex items-start gap-1.5">
                            {r.critical ? (
                              <AlertTriangle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            ) : (
                              <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            )}
                            {r.action}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </section>

          {/* TIMELINE / FRISTEN */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-10">
                <Badge
                  variant="outline"
                  className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20"
                >
                  Zeitplan
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  EU AI Act: Fristen bis 2027
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Die Pflichten treten gestaffelt in Kraft. So bleibt Zeit zur
                  Vorbereitung, aber das Fenster wird kleiner.
                </p>
              </div>
              <div className="space-y-3">
                {timeline.map(({ date, event, detail, done }, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-4 p-4 rounded-xl border-2 ${
                      done
                        ? "bg-background border-border opacity-80"
                        : "bg-primary/5 border-primary/20"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                        done ? "bg-muted" : "bg-primary"
                      }`}
                    >
                      {done ? (
                        <CheckCircle className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <Clock className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span
                          className={`font-bold ${
                            done ? "text-muted-foreground" : "text-primary"
                          }`}
                        >
                          {date}
                        </span>
                        <span className="font-semibold text-foreground">
                          {event}
                        </span>
                        {!done && (
                          <span className="text-xs bg-primary text-white px-3 py-1 rounded-full">
                            Handlungsbedarf
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SANKTIONEN, GELTUNGSBEREICH, GPAI (Tabs) */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge
                  variant="outline"
                  className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20"
                >
                  Sanktionen & Geltungsbereich
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Bußgelder, Betroffene und GPAI-Modelle
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Der EU AI Act gilt breit und Verstöße werden teuer. Ein
                  Überblick über die drei zentralen Fragen.
                </p>
              </div>
              <Tabs defaultValue="bussgelder" className="w-full">
                <TabsList className="mb-8 mx-auto flex flex-wrap h-auto w-fit gap-1">
                  <TabsTrigger value="bussgelder">Bußgelder</TabsTrigger>
                  <TabsTrigger value="betroffen">Wer ist betroffen?</TabsTrigger>
                  <TabsTrigger value="gpai">GPAI-Modelle</TabsTrigger>
                </TabsList>

                <TabsContent value="bussgelder">
                  <div className="grid md:grid-cols-3 gap-5">
                    {penalties.map((p, i) => {
                      const Icon = p.icon;
                      return (
                        <Card
                          key={i}
                          className={`hover-lift border-2 ${
                            i === 0 ? "border-primary/30 bg-primary/5" : ""
                          }`}
                        >
                          <CardHeader>
                            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                            <div className="text-2xl font-bold text-primary">
                              {p.tier}
                            </div>
                            <CardTitle className="text-lg">{p.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                              {p.desc}
                            </p>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </TabsContent>

                <TabsContent value="betroffen">
                  <Card className="border-2">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">
                        Diese Akteure trifft der EU AI Act
                      </CardTitle>
                      <CardDescription>
                        Der Geltungsbereich reicht weit über reine KI-Entwickler
                        hinaus.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {affected.map((a) => (
                          <div
                            key={a.role}
                            className="flex items-start gap-3 p-3 rounded-xl bg-muted/30"
                          >
                            <UserCheck className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                            <div>
                              <div className="text-sm font-bold text-foreground">
                                {a.role}
                              </div>
                              <div className="text-sm text-muted-foreground leading-relaxed">
                                {a.desc}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="gpai">
                  <Card className="border-2">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                        <Cpu className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">
                        Pflichten für GPAI-Modelle
                      </CardTitle>
                      <CardDescription>
                        Universalmodelle wie große Sprachmodelle unterliegen
                        eigenen Transparenz- und Dokumentationspflichten.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {gpai.map((g) => (
                          <li key={g} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                            <span className="text-muted-foreground leading-relaxed">
                              {g}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* USE-CASES nach Branche (Tabs) */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge
                  variant="outline"
                  className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20"
                >
                  Branchen & Use-Cases
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Welche Risikoklasse trifft Ihre Branche?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Die Einstufung hängt vom Einsatzzweck ab. Wählen Sie Ihren
                  Bereich und sehen Sie, worauf es ankommt.
                </p>
              </div>
              <Tabs defaultValue="hr" className="w-full">
                <TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">
                  {useCases.map((u) => {
                    const Icon = u.icon;
                    return (
                      <TabsTrigger
                        key={u.value}
                        value={u.value}
                        className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border"
                      >
                        <Icon className="w-4 h-4 mr-1.5" />
                        {u.label}
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
                {useCases.map((u) => (
                  <TabsContent key={u.value} value={u.value}>
                    <Card className="border-2">
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between gap-4 mb-3 flex-wrap">
                          <h3 className="text-xl font-bold">{u.head}</h3>
                          <Badge
                            variant="outline"
                            className="rounded-full bg-primary/10 text-primary border-primary/20"
                          >
                            {u.risk}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {u.text}
                        </p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>

          {/* DSGVO vs EU AI ACT (Vergleichstabelle) */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge
                  variant="outline"
                  className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20"
                >
                  Abgrenzung
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  DSGVO oder EU AI Act?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Beide Regelwerke gelten parallel und ergänzen sich. Der direkte
                  Vergleich zeigt, wo sie sich unterscheiden.
                </p>
              </div>
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[26%] font-bold text-foreground">
                        Merkmal
                      </TableHead>
                      <TableHead className="font-bold text-foreground">
                        DSGVO
                      </TableHead>
                      <TableHead className="text-primary font-bold">
                        EU AI Act
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dsgvoCompare.map((row, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{row[0]}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {row[1]}
                        </TableCell>
                        <TableCell className="text-sm text-primary font-medium">
                          {row[2]}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </section>

          {/* BERATUNGSLEISTUNGEN (Bento) */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge
                  variant="outline"
                  className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20"
                >
                  Unser Angebot
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Unsere EU AI Act Beratungsleistungen
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Von der ersten Bestandsaufnahme bis zur laufenden Auditierung:
                  alles, was Sie für die Compliance brauchen.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {services.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <Card
                      key={i}
                      className={`hover-lift border-2 ${
                        i === 0 ? "lg:col-span-2 bg-primary/5 border-primary/20" : ""
                      }`}
                    >
                      <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{s.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                          {s.desc}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CHECKLISTE */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge
                  variant="outline"
                  className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20"
                >
                  Checkliste
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  EU AI Act Checkliste für Unternehmen
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Neun Schritte zu einer belastbaren Compliance. Den
                  vollständigen Fahrplan erstellen wir gemeinsam.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {checklist.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 bg-background rounded-xl border-2 border-border"
                  >
                    <div className="w-7 h-7 rounded-lg bg-primary/10 shrink-0 mt-0.5 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">
                        {i + 1}
                      </span>
                    </div>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PROZESS (Timeline) */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="max-w-2xl mb-12">
                <Badge
                  variant="outline"
                  className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20"
                >
                  Der Ablauf
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  EU AI Act Compliance in vier Schritten
                </h2>
                <p className="text-lg text-muted-foreground">
                  Ein strukturierter Weg zu vollständiger Compliance, mit der KI
                  Kanzlei als Partner an Ihrer Seite.
                </p>
              </div>
              <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div
                  className="hidden lg:block absolute top-7 left-[12%] right-[12%] h-px bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40"
                  aria-hidden
                />
                {steps.map(({ step, icon: Icon, time, title, desc }) => (
                  <div key={step} className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center mb-4 shadow-lg shadow-primary/20 relative z-10 ring-8 ring-background">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-bold text-primary mb-1 tracking-wide">
                      SCHRITT {step}, {time}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WARUM KI KANZLEI */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge
                  variant="outline"
                  className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20"
                >
                  Warum die KI Kanzlei
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Warum die KI Kanzlei für EU AI Act Compliance?
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {reasons.map((r, i) => {
                  const Icon = r.icon;
                  return (
                    <Card key={i} className="hover-lift border-2">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <Badge variant="secondary" className="rounded-full">
                            {r.badge}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{r.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {r.desc}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge
                  variant="outline"
                  className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20"
                >
                  FAQ
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Häufige Fragen zum EU AI Act
                </h2>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqs.map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border-2 border-border rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:bg-primary/5"
                  >
                    <AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-5">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* VERWANDTE LEISTUNGEN */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <Badge
                  variant="outline"
                  className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20"
                >
                  Ergänzende KI-Services
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Das passt zur EU AI Act Compliance
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {related.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a key={s.href} href={s.href} className="group block">
                      <Card className="h-full border-2 hover-lift group-hover:border-primary/40">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary">
                              <Icon className="w-6 h-6 text-primary transition-colors group-hover:text-white" />
                            </div>
                            <Badge variant="secondary" className="rounded-full">
                              {s.tag}
                            </Badge>
                          </div>
                          <CardTitle className="text-lg">{s.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed text-sm">
                            {s.desc}
                          </p>
                        </CardContent>
                      </Card>
                    </a>
                  );
                })}
              </div>
            </div>
          </section>

          <ContactForm />
        </main>
        <FooterModern />
      </div>
    </>
  );
}
