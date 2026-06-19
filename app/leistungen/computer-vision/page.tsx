import type { Metadata } from "next";
import Script from "next/script";
import { NavigationHome } from "@/components/NavigationHome";
import { FooterModern } from "@/components/FooterModern";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { serviceLogos } from "@/lib/serviceLogos";
import {
  ScanSearch,
  Eye,
  ScanLine,
  Camera,
  Cpu,
  Shield,
  ShieldCheck,
  FileText,
  FileSearch,
  Check,
  X,
  Factory,
  Truck,
  Stethoscope,
  ShoppingBag,
  Search,
  Rocket,
  Server,
  MapPin,
  Boxes,
  Layers,
  Lock,
  Crop,
  Database,
  Gauge,
  Microscope,
  Network,
  Bot,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Computer Vision & KI-Bildverarbeitung entwickeln lassen",
  description:
    "Computer Vision und KI-Bildverarbeitung für Unternehmen im DACH-Raum: Objekterkennung, visuelle Qualitätskontrolle, OCR und Dokumentenerfassung. Custom-Modelle mit PyTorch und TensorFlow, DSGVO-konform On-Premise oder EU-Cloud.",
  keywords:
    "Computer Vision, Bildverarbeitung KI, OCR Software, OCR KI, Objekterkennung, Bilderkennung KI, KI Kamera, Smart Camera, visuelle Inspektion, Qualitätskontrolle KI, Machine Vision, Bildanalyse KI, Texterkennung KI, YOLOv8, Vision Transformer, Edge AI, Computer Vision Österreich, Computer Vision DACH",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/computer-vision" },
};

const faqs = [
  {
    q: "Was ist Computer Vision und wie funktioniert sie?",
    a: "Computer Vision ist das Teilgebiet der künstlichen Intelligenz, das Maschinen das Sehen beibringt. Ein Bild oder Videostream wird in Pixel zerlegt, vorverarbeitet und durch ein neuronales Netz geschickt, das gelernt hat, Muster zu erkennen: Objekte, Defekte, Text, Personen oder Gesten. Das Ergebnis ist keine bloße Anzeige, sondern eine strukturierte Information, etwa Bounding Boxes mit Klassen und Konfidenzwerten oder extrahierte Datenfelder aus einem Dokument. Genau diese strukturierte Ausgabe lässt sich automatisiert in Ihre Systeme einspeisen.",
  },
  {
    q: "Was ist der Unterschied zwischen Computer Vision und Machine Vision?",
    a: "Machine Vision ist der ältere, industriespezifische Begriff für regelbasierte Bildverarbeitungssysteme, typischerweise kalibriert auf eine einzige Aufgabe wie Maßkontrolle oder Barcode-Lesen. Computer Vision im heutigen Sinn meint KI-basierte Systeme, die auf neuronalen Netzen aufbauen. Das Modell lernt aus Ihren Daten statt aus hartcodierten Regeln. In der Praxis bedeutet das: flexibler, adaptierbarer und oft deutlich genauer, besonders wenn sich Produkte, Fehlerbilder oder Umgebungsbedingungen ändern.",
  },
  {
    q: "Wie viele Trainingsdaten brauche ich für ein Computer-Vision-Modell?",
    a: "Das hängt stark vom Anwendungsfall ab. Für eine einfache Defekterkennung in der Fertigung reichen durch Transfer Learning oft bereits 200 bis 500 annotierte Bilder pro Klasse. Bei komplexeren Szenarien, etwa mehrstufiger Objekterkennung in wechselnden Lichtverhältnissen, können einige Tausend nötig sein. Wir prüfen im Erstgespräch, was Sie bereits haben, und zeigen, wie viel Zusatzaufwand realistisch zu erwarten ist. Häufig lässt sich der Annotationsaufwand durch synthetische Daten und Augmentierung deutlich senken.",
  },
  {
    q: "Kann Computer Vision DSGVO-konform betrieben werden?",
    a: "Ja. Der entscheidende Punkt ist die Architektur: Bildanalyse auf On-Premise-Servern oder in der EU-Cloud (etwa Hetzner oder OVH) stellt sicher, dass Ihre Bilder das Unternehmen nie verlassen. Bei Anwendungen mit personenbezogenen Daten, etwa Personentracking, implementieren wir Anonymisierung und Pseudonymisierung nach DSGVO-Vorgaben. Alle Lösungen werden auf EU AI Act Konformität geprüft und dokumentiert. Biometrische Fernidentifikation in öffentlichen Räumen setzen wir bewusst nicht um.",
  },
  {
    q: "Welche Modelle und Frameworks setzen Sie ein?",
    a: "Für Objekterkennung und Segmentierung arbeiten wir mit YOLOv8, Detectron2 und Vision Transformern, für Klassifikation mit ConvNeXt und EfficientNet. OCR realisieren wir mit PaddleOCR, DocTR und Donut für strukturierte Dokumente. Trainiert wird in PyTorch oder TensorFlow, ausgeliefert über ONNX und TensorRT für schnelle Inferenz. Welche Kombination optimal ist, entscheiden wir im Assessment anhand von Genauigkeit, Latenz und Zielhardware, statt eine Standardlösung überzustülpen.",
  },
  {
    q: "Wie lange dauert die Implementierung eines Computer-Vision-Projekts?",
    a: "Ein typisches Pilotprojekt dauert vier bis acht Wochen, von der Datenerfassung über das Modelltraining bis zum ersten produktiven Test. Einfachere Anwendungen wie OCR-basierte Rechnungserfassung sind oft in zwei bis drei Wochen lauffähig. Die Skalierung auf weitere Produktionslinien oder Standorte folgt danach in einem zweiten Schritt, sobald das Modell im Echtbetrieb validiert ist.",
  },
  {
    q: "Welche Hardware brauche ich für Computer Vision im Produktiveinsatz?",
    a: "Das hängt von den Anforderungen ab. Für Echtzeit-Videoanalyse empfehlen wir Industriekameras (GigE oder USB3) plus eine NVIDIA GPU für die Inferenz. Für Edge-Deployments direkt an der Maschine eignen sich NVIDIA Jetson-Module mit eingebetteter Verarbeitung. Wer Bilder in einem Cloud-Workflow verarbeiten möchte, kommt mit deutlich weniger lokaler Hardware aus. Wir empfehlen nach der Analyse immer die günstigste Variante, die Ihre Anforderungen noch zuverlässig erfüllt.",
  },
  {
    q: "Wie genau ist Computer Vision im Vergleich zur manuellen Sichtprüfung?",
    a: "Ein gut trainiertes Modell erreicht in der Defekterkennung regelmäßig über 99 Prozent Trefferquote und bleibt dabei rund um die Uhr konstant, ohne Ermüdung oder Tagesschwankungen. Menschliche Prüfer liegen bei monotonen Aufgaben oft bei 90 bis 95 Prozent, abhängig von Konzentration und Schichtzeit. Der größte Vorteil liegt jedoch in der Reproduzierbarkeit: Das System bewertet jedes Bauteil nach exakt denselben Kriterien und protokolliert jede Entscheidung nachvollziehbar.",
  },
  {
    q: "Was kostet ein Computer-Vision-Projekt typischerweise?",
    a: "Eine OCR-Lösung für strukturierte Dokumente startet bei einigen Tausend Euro. Individuelle Qualitätskontrolle mit Custom-Modell-Training beginnt typischerweise ab 15.000 bis 25.000 Euro für das Pilotprojekt. Komplexere Multi-Kamera-Systeme liegen höher. Der ROI ist dabei schnell sichtbar: Automatisierte Qualitätsprüfung erspart regelmäßig 60 bis 80 Prozent der bisherigen Personalkosten im Prüfbereich. Im kostenlosen Erstgespräch schätzen wir Aufwand und Einsparung konkret für Ihren Fall.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Computer Vision & KI-Bildverarbeitung",
  serviceType: "Computer Vision, Bildverarbeitung KI, OCR, Objekterkennung",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "Entwicklung von Computer-Vision-Lösungen für Unternehmen im DACH-Raum: Objekterkennung, visuelle Qualitätskontrolle, OCR und Dokumentenerfassung. Custom-Modelle, DSGVO-konform, On-Premise oder EU-Cloud.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const detections = [
  { label: "Produkt", conf: "0.98", top: "12%", left: "6%", w: "40%", h: "70%", accent: true },
  { label: "Barcode", conf: "0.95", top: "18%", left: "56%", w: "36%", h: "15%", accent: false },
  { label: "Text-Feld", conf: "0.93", top: "42%", left: "56%", w: "38%", h: "21%", accent: false },
  { label: "Defekt", conf: "0.88", top: "72%", left: "60%", w: "20%", h: "14%", accent: false },
];

const stats: [string, string][] = [
  ["99 %+", "Erkennungsgenauigkeit trainierter Modelle"],
  ["< 50 ms", "Prüfzeit pro Bauteil in der Fertigung"],
  ["80 %", "weniger manueller Erfassungsaufwand"],
  ["EU-only", "Hosting und Verarbeitung in der EU"],
];

const overview: [string, string][] = [
  ["Aufgaben", "Erkennung, Inspektion, OCR"],
  ["Modelle", "YOLOv8, ViT, ConvNeXt"],
  ["Frameworks", "PyTorch & TensorFlow"],
  ["Inferenz", "ONNX, TensorRT, Edge"],
  ["Hosting", "On-Premise, AT/EU"],
  ["Compliance", "DSGVO & EU AI Act geprüft"],
];

const pipeline = [
  { icon: Camera, title: "Bild oder Scan", sub: "Kamera, Video, PDF" },
  { icon: Crop, title: "Vorverarbeitung", sub: "Zuschnitt, Normalisierung" },
  { icon: Cpu, title: "Neuronales Netz", sub: "CNN oder Transformer" },
  { icon: ScanSearch, title: "Erkennung", sub: "Bounding Boxes, Klassen" },
  { icon: Database, title: "Strukturierte Ausgabe", sub: "an ERP, MES, DMS" },
];

const useCases: { icon: typeof Eye; title: string; description: string; featured?: boolean; badge?: string; span?: string }[] = [
  {
    icon: ScanLine,
    title: "Visuelle Qualitätskontrolle",
    description:
      "Defekte, Kratzer, Farbabweichungen und Maßungenauigkeiten in Echtzeit erkennen, direkt in der Produktionslinie, ohne manuelle Sichtkontrolle. Unsere Modelle lernen aus Ihren Fehlerbildern und erreichen Erkennungsraten über 99 Prozent. Typische Prüfzeit pro Bauteil: unter 50 Millisekunden.",
    featured: true,
    badge: "Häufigster Use Case",
    span: "lg:col-span-2",
  },
  {
    icon: Boxes,
    title: "Objekterkennung & Klassifizierung",
    description:
      "Produkte, Bauteile und Objekte automatisch erkennen, klassifizieren und im Bild lokalisieren, mit YOLOv8 und Vision Transformern für maximale Geschwindigkeit bei hoher Genauigkeit.",
  },
  {
    icon: FileText,
    title: "OCR KI & Dokumentenerfassung",
    description:
      "Rechnungen, Lieferscheine, Verträge und Formulare automatisch auslesen und in Ihre Systeme einspeisen. KI-basierte OCR verarbeitet auch schlechte Scan-Qualität und Handschriften zuverlässig.",
  },
  {
    icon: Camera,
    title: "KI Kamera & Smart Camera",
    description:
      "Intelligente Kamerasysteme mit eingebetteter KI-Verarbeitung: Bildanalyse direkt am Gerät, ohne Datenübertragung in die Cloud. Ideal für datenschutzsensible Umgebungen.",
  },
  {
    icon: Cpu,
    title: "Edge AI & Embedded Vision",
    description:
      "Computer Vision direkt auf NVIDIA Jetson oder industriellen Edge-Geräten: maximale Datensicherheit, da Bilder die Produktionshalle nie verlassen müssen.",
  },
  {
    icon: Shield,
    title: "DSGVO & EU AI Act Konformität",
    description:
      "Jede Lösung wird auf DSGVO-Konformität und EU AI Act Relevanz geprüft, On-Premise oder EU-Cloud, transparent dokumentiert und revisionssicher archiviert.",
  },
];

const industryTabs = [
  {
    value: "fertigung",
    label: "Fertigung",
    icon: Factory,
    title: "Computer Vision in der Fertigungsindustrie",
    intro:
      "Automatisierte Sichtkontrolle ist der meistgenutzte Einsatzbereich für KI-Bildverarbeitung. Fehler werden früher erkannt, Ausschuss sinkt, und die Prüfgeschwindigkeit steigt, ohne zusätzliches Prüfpersonal.",
    points: [
      "Defekterkennung (Kratzer, Risse, Einschlüsse, Lunker) in Echtzeit",
      "Maßkontrolle und Geometrieprüfung ohne physischen Kontakt",
      "Montageüberwachung: vollständige Baugruppen automatisch verifizieren",
      "Integration in bestehende SPS, MES und SAP-Systeme",
    ],
    highlight: "< 50 ms Prüfzeit pro Bauteil",
  },
  {
    value: "logistik",
    label: "Logistik",
    icon: Truck,
    title: "KI-Bildverarbeitung in Logistik & Transport",
    intro:
      "Von der Barcode-Erkennung bis zur automatischen Schadenserfassung: Computer Vision beschleunigt Warenein- und -ausgang und reduziert Fehler entlang der gesamten Lieferkette.",
    points: [
      "Barcode- und QR-Code-Erkennung auch bei beschädigten Labels",
      "OCR auf Ladelisten, Etiketten und Frachtpapieren automatisieren",
      "Automatische Schadenserkennung bei Wareneingang und -ausgang",
      "Dimensionsmessung von Paketen und Paletten per Kamera",
    ],
    highlight: "99,5 % Erkennungsrate bei Barcode & OCR",
  },
  {
    value: "medizin",
    label: "Medizin",
    icon: Stethoscope,
    title: "Computer Vision im Gesundheitswesen",
    intro:
      "KI-gestützte Bildanalyse unterstützt Ärzte und Labore bei der Auswertung von Bilddaten: schneller, reproduzierbarer und vollständig datenschutzkonform auf Ihrer eigenen Infrastruktur.",
    points: [
      "Analyse von Röntgen-, CT- und MRT-Bildern auf Auffälligkeiten",
      "Hautveränderungen und Wundklassifikation per Kamera oder Smartphone",
      "Histologie-Auswertung und Zellzählung in Laborbildern",
      "On-Premise-Deployment auf Klinikservern, keine externen Cloud-APIs",
    ],
    highlight: "100 % On-Premise: Daten bleiben in der Klinik",
  },
  {
    value: "dokumente",
    label: "Dokumente",
    icon: FileSearch,
    title: "OCR Software & automatisierte Dokumentenverarbeitung",
    intro:
      "Moderne OCR auf KI-Basis liest strukturierte und unstrukturierte Dokumente, extrahiert Schlüsselfelder und übergibt Daten direkt an ERP oder DMS, ohne manuelles Abtippen.",
    points: [
      "Rechnungserfassung mit automatischer Feld-Extraktion (Betrag, Datum, UID)",
      "Vertragsklassifizierung und Fristenerkennung",
      "Handschriftliche Notizen und Formulare digitalisieren",
      "SAP, Microsoft Dynamics und DATEV-Integration vorhanden",
    ],
    highlight: "Bis zu 80 % weniger Erfassungsaufwand",
  },
  {
    value: "handel",
    label: "Handel",
    icon: ShoppingBag,
    title: "Computer Vision im Einzelhandel & E-Commerce",
    intro:
      "Vom Regal-Monitoring bis zur visuellen Produktsuche: Bilderkennung schafft im Handel Transparenz über Bestände und verbessert das Einkaufserlebnis, online wie stationär.",
    points: [
      "Regalüberwachung und automatische Bestandskontrolle (Out-of-Stock)",
      "Visuelle Produktsuche: Foto rein, passendes Produkt raus",
      "Automatische Kategorisierung und Tagging von Produktbildern",
      "Frischekontrolle und Reifegrad-Erkennung bei Lebensmitteln",
    ],
    highlight: "Bestandslücken in Minuten statt Stunden erkannt",
  },
];

const comparison = [
  { kriterium: "Prüfgeschwindigkeit", ki: "Echtzeit (< 100 ms)", manuell: "Sekunden bis Minuten", klassisch: "Schnell, aber starr" },
  { kriterium: "Erkennungsgenauigkeit", ki: "99 %+", manuell: "90 bis 95 % (schwankend)", klassisch: "90 bis 95 % (fixiert)" },
  { kriterium: "Flexibilität bei neuen Fehlern", ki: "Hoch (Re-Training)", manuell: "Sehr hoch", klassisch: "Niedrig (Neuprogrammierung)" },
  { kriterium: "Reproduzierbarkeit", ki: "Konstant, protokolliert", manuell: "Tagesform-abhängig", klassisch: "Konstant" },
  { kriterium: "Setup-Aufwand", ki: "Mittel (Daten & Training)", manuell: "Gering", klassisch: "Hoch (Regelwerk)" },
  { kriterium: "Laufende Kosten", ki: "Niedrig", manuell: "Hoch (Personal)", klassisch: "Mittel" },
  { kriterium: "Skalierbarkeit", ki: "Sehr hoch", manuell: "Gering", klassisch: "Mittel" },
];

const logos = [
  { src: "/img/logos/python.svg", name: "Python", note: "Kernsprache" },
  { src: "/img/logos/pytorch.svg", name: "PyTorch", note: "Modelltraining" },
  { src: "/img/logos/tensorflow.svg", name: "TensorFlow", note: "Modelltraining" },
  { src: "/img/logos/huggingface.svg", name: "Hugging Face", note: "Vision-Modelle" },
  { src: "/img/logos/fastapi.svg", name: "FastAPI", note: "Inferenz-API" },
  { src: "/img/logos/docker.svg", name: "Docker", note: "Deployment" },
  { src: "/img/logos/kubernetes.svg", name: "Kubernetes", note: "Skalierung" },
  { src: "/img/logos/qdrant.svg", name: "Qdrant", note: "Bild-Embeddings" },
];

const methods = [
  { icon: Boxes, name: "YOLOv8 & Detectron2", desc: "Echtzeit-Objekterkennung mit Bounding Boxes und Instanzsegmentierung." },
  { icon: Layers, name: "Vision Transformer", desc: "Klassifikation mit ViT und ConvNeXt für höchste Genauigkeit." },
  { icon: FileText, name: "PaddleOCR & DocTR", desc: "Text- und Feldextraktion aus Dokumenten, auch bei Handschrift." },
  { icon: Gauge, name: "ONNX & TensorRT", desc: "Optimierte Inferenz für GPU-Server und Edge-Geräte." },
  { icon: Camera, name: "OpenCV", desc: "Bildvorverarbeitung, Kalibrierung und klassische Operatoren." },
  { icon: Server, name: "NVIDIA Jetson", desc: "Embedded Vision direkt an der Maschine, ohne Cloud." },
];

const reasons = [
  {
    icon: Microscope,
    badge: "Maßgeschneidert",
    title: "Custom-Modelle statt Standardware",
    desc: "Wir trainieren Computer-Vision-Modelle auf Ihren Daten und Ihren Fehlerbildern. Das ergibt eine Genauigkeit, die generische Lösungen nicht erreichen, und ein System, das zu Ihren Produkten passt, nicht umgekehrt.",
  },
  {
    icon: Lock,
    badge: "Datenschutz",
    title: "On-Premise & EU-Hosting",
    desc: "Bilder verlassen Ihr Unternehmen nur dann, wenn Sie es wollen. Wir deployen on-premise, auf EU-Servern oder auf Edge-Geräten direkt an der Maschine. DSGVO und EU AI Act sind dabei Ausgangspunkt, kein Nachgedanke.",
  },
  {
    icon: Network,
    badge: "ERP-Integration",
    title: "Volle Integration in Ihre Systeme",
    desc: "SAP, Microsoft Dynamics, DATEV, MES, WMS: Computer Vision ist nur dann wertvoll, wenn sie nahtlos in bestehende Systeme eingebettet ist. Wir übernehmen die Integration inklusive API-Entwicklung und Schnittstellendokumentation.",
  },
];

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Kostenlose Erstanalyse",
    time: "30 Minuten",
    desc: "Wir klären Use Case, Datenlage und technische Rahmenbedingungen. Am Ende wissen beide Seiten, was sinnvoll umsetzbar ist und was nicht.",
  },
  {
    step: "02",
    icon: Layers,
    title: "Assessment & Architektur",
    time: "Woche 1 bis 2",
    desc: "Vollständige Analyse: Bildqualität, Annotationsstrategie, Modellauswahl und ROI-Kalkulation. Sie erhalten einen konkreten Implementierungsplan.",
  },
  {
    step: "03",
    icon: Cpu,
    title: "Pilotprojekt & Training",
    time: "Woche 3 bis 6",
    desc: "Datenaufbereitung, Modelltraining und Integration in Ihre Produktionslinie oder IT-Infrastruktur. Inklusive Evaluierung und Anpassung auf Ihren Use Case.",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Go-Live & Skalierung",
    time: "ab Woche 7",
    desc: "Produktiver Betrieb mit Monitoring-Dashboard. Schrittweise Skalierung auf weitere Linien oder Standorte, mit Support und kontinuierlicher Verbesserung.",
  },
];

const related = [
  { href: "/mlops", icon: Gauge, title: "Deep Learning & MLOps", desc: "Neuronale Netze, ML-Pipelines und produktives Modell-Management als Basis jeder CV-Lösung." },
  { href: "/private-ai", icon: Lock, title: "Private AI & On-Premise", desc: "Lokale KI-Infrastruktur für datenschutzsensible Bildverarbeitung ohne Cloud-Anbindung." },
  { href: "/agentic-ai", icon: Bot, title: "Agentic AI", desc: "Bilderkennung als Baustein autonomer Agenten und größerer Automatisierungsketten." },
  { href: "/n8n-automatisierung", icon: Network, title: "n8n Automatisierung", desc: "Erkennungsergebnisse automatisch an ERP, DMS, CRM und Ihre Tools weitergeben." },
  { href: "/ki-wissensdatenbank", icon: Database, title: "KI Wissensdatenbank", desc: "Extrahierte Dokumenteninhalte als durchsuchbare, DSGVO-konforme Wissensbasis." },
  { href: "/eu-ai-act", icon: Shield, title: "EU AI Act Beratung", desc: "Bildbasierte Systeme rechtssicher einordnen und konform dokumentieren." },
];

export default function Page() {
  return (
    <>
      <Script id="faq-computer-vision" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-computer-vision" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                    Computer Vision, KI-Bildverarbeitung
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-primary">Computer Vision</span>, die Ihre Bilder versteht und auswertet
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Objekterkennung, visuelle Qualitätskontrolle, OCR und Dokumentenerfassung. Wir entwickeln Custom-Modelle, die direkt in Ihre Prozesse passen, mit PyTorch und TensorFlow, On-Premise oder in der EU-Cloud, ohne Kompromisse beim Datenschutz.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenlose Erstanalyse</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#use-cases">Use Cases ansehen</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO-konform</span>
                    <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-primary" /> EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Bespoke hero visual: Erkennung mit Bounding Boxes */}
                <Card className="border-2 shadow-xl shadow-primary/5">
                  <CardHeader className="border-b border-border py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Eye className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">Live-Erkennung</div>
                        <div className="text-xs text-muted-foreground mono">object_detection + ocr</div>
                      </div>
                      <Badge variant="outline" className="ml-auto rounded-full text-[10px] bg-primary/10 text-primary border-primary/20">EU-GPU</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5 pb-5">
                    {/* Detection frame */}
                    <div
                      className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-border bg-gradient-to-br from-muted to-background"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(57,133,239,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(57,133,239,0.08) 1px, transparent 1px)",
                        backgroundSize: "26px 26px",
                      }}
                    >
                      {/* Viewfinder corners */}
                      <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/50" aria-hidden />
                      <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/50" aria-hidden />
                      <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary/50" aria-hidden />
                      <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary/50" aria-hidden />

                      {/* Bounding boxes */}
                      {detections.map((d, i) => (
                        <div
                          key={i}
                          className={`absolute rounded-sm border-2 ${d.accent ? "border-primary bg-primary/5" : "border-foreground/40"}`}
                          style={{ top: d.top, left: d.left, width: d.w, height: d.h }}
                        >
                          <span
                            className={`absolute -top-px left-0 px-1.5 py-0.5 text-[10px] font-medium leading-none rounded-br-sm ${
                              d.accent ? "bg-primary text-white" : "bg-foreground/80 text-background"
                            }`}
                          >
                            {d.label} {d.conf}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Detected classes */}
                    <div className="flex flex-wrap gap-1.5 pt-4">
                      {detections.map((d, i) => (
                        <span key={i} className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-2 py-1 text-[11px] text-muted-foreground">
                          <span className={`w-1.5 h-1.5 rounded-full ${d.accent ? "bg-primary" : "bg-foreground/50"}`} />
                          {d.label}
                        </span>
                      ))}
                    </div>
                    <div className="text-[11px] text-muted-foreground pt-3 mono">4 Objekte erkannt, 18 ms, YOLOv8 + OCR</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* STATS BAND */}
          <section className="py-12">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border-2 border-border rounded-2xl overflow-hidden">
                {stats.map(([v, l], i) => (
                  <div key={i} className="bg-card p-6 md:p-8 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary">{v}</div>
                    <div className="text-sm text-muted-foreground mt-2">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* DEFINITION */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Kurz erklärt</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was Computer Vision heute wirklich leistet</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      <strong className="text-foreground">Computer Vision</strong> ist das Teilgebiet der künstlichen Intelligenz, das Maschinen das Sehen beibringt. Statt Pixel nur anzuzeigen, erkennt ein neuronales Netz darin Bedeutung: welches Objekt wo liegt, ob ein Bauteil fehlerhaft ist, welcher Text auf einem Dokument steht. Das Ergebnis ist eine strukturierte Information, die sich direkt weiterverarbeiten lässt.
                    </p>
                    <p>
                      Der Sprung gegenüber klassischer <strong className="text-foreground">Bildverarbeitung</strong> liegt im Lernen aus Beispielen. Wo früher jede Regel von Hand programmiert werden musste, lernt ein modernes Modell aus Ihren Bildern und generalisiert auf neue Varianten. Das macht KI-Bildverarbeitung flexibler, genauer und wartbarer, gerade wenn sich Produkte oder Fehlerbilder ständig ändern.
                    </p>
                    <p>
                      Für Unternehmen im DACH-Raum ist dabei eines entscheidend: <strong className="text-foreground">Datenschutz</strong>. Wir bauen jede Lösung so, dass Bilder das Haus nicht verlassen müssen, mit Datenhaltung in Österreich und der EU und einer Prüfung auf EU AI Act Konformität von Beginn an.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Bilderkennung KI</Badge>
                    <Badge variant="secondary" className="rounded-full">Machine Vision</Badge>
                    <Badge variant="secondary" className="rounded-full">OCR & Texterkennung</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Computer Vision auf einen Blick</CardTitle>
                    <CardDescription>Die wichtigsten Eckdaten im Überblick.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {overview.map(([label, value]) => (
                      <div key={label} className="flex items-center justify-between py-2.5 border-b border-border last:border-0">
                        <span className="text-sm font-medium text-foreground">{label}</span>
                        <span className="text-sm text-muted-foreground text-right max-w-[58%]">{value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* PIPELINE */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">So sieht eine Maschine</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Vom Rohbild zur strukturierten Information</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Jede Computer-Vision-Lösung folgt derselben Pipeline. Wir optimieren jeden Schritt auf Genauigkeit, Latenz und Ihre Zielhardware.
                </p>
              </div>
              <Card className="border-2 p-5 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-0">
                  {pipeline.map((s, i) => {
                    const Icon = s.icon;
                    const last = i === pipeline.length - 1;
                    return (
                      <div key={i} className="contents">
                        <div className="flex-1 flex md:flex-col items-center md:text-center gap-3 md:gap-2">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${last ? "bg-primary text-white" : "bg-primary/10"}`}>
                            <Icon className={`w-6 h-6 ${last ? "text-white" : "text-primary"}`} />
                          </div>
                          <div>
                            <div className="text-sm font-semibold leading-tight">{s.title}</div>
                            <div className="text-[11px] text-muted-foreground leading-tight">{s.sub}</div>
                          </div>
                        </div>
                        {!last && (
                          <div className="hidden md:flex items-center shrink-0 px-1">
                            <span className="w-6 h-px bg-primary/30" />
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>
          </section>

          {/* USE-CASE BENTO */}
          <section id="use-cases" className="py-14 md:py-20 bg-white/50 scroll-mt-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unsere Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Was Computer Vision für Sie löst</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Von der visuellen Qualitätskontrolle bis zur intelligenten Dokumentenerfassung: wir decken das gesamte Spektrum der KI-Bildverarbeitung ab.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
                {useCases.map((uc, i) => {
                  const Icon = uc.icon;
                  return (
                    <Card key={i} className={`hover-lift border-2 ${uc.span ?? ""} ${uc.featured ? "bg-primary/5 border-primary/20" : ""}`}>
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between gap-3">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          {uc.badge && <Badge className="rounded-full text-xs shrink-0">{uc.badge}</Badge>}
                        </div>
                        <CardTitle className={`mt-3 ${uc.featured ? "text-xl" : "text-lg"}`}>{uc.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed">{uc.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* BRANCHEN TABS */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Branchenspezifisch</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Computer Vision nach Branche & Szenario</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Jede Branche hat andere Anforderungen. Wählen Sie Ihren Use Case und sehen Sie, was konkret möglich ist.
                </p>
              </div>
              <Tabs defaultValue="fertigung" className="w-full">
                <TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-8">
                  {industryTabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <TabsTrigger key={tab.value} value={tab.value} className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border">
                        <Icon className="w-4 h-4 mr-1.5" />
                        {tab.label}
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
                {industryTabs.map((tab) => (
                  <TabsContent key={tab.value} value={tab.value}>
                    <Card className="border-2">
                      <CardHeader>
                        <CardTitle className="text-2xl">{tab.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">{tab.intro}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-8">
                          <ul className="space-y-3">
                            {tab.points.map((point, j) => (
                              <li key={j} className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                <span className="text-sm text-muted-foreground leading-relaxed">{point}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex items-center justify-center">
                            <div className="p-8 rounded-2xl bg-primary/5 border border-primary/10 text-center w-full">
                              <div className="text-xl font-bold text-primary mb-2">{tab.highlight}</div>
                              <div className="text-xs text-muted-foreground mt-1">Typisches Projektergebnis</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>

          {/* VERGLEICH */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Technologievergleich</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">KI-Bildverarbeitung, manuelle Kontrolle oder klassische Systeme?</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Viele Fertigungsunternehmen setzen noch auf regelbasierte Bildverarbeitungssysteme aus den 2000er-Jahren oder auf manuelle Sichtkontrolle. Beides hat seinen Platz, aber bei variabler Fehlervielfalt und steigender Produktkomplexität stoßen beide Ansätze schnell an Grenzen.
                    </p>
                    <p>
                      <strong className="text-foreground">Bildverarbeitung KI</strong> lernt aus Beispielen statt aus Regeln. Das bedeutet: weniger Programmieraufwand bei neuen Fehlerbildern, bessere Generalisierung auf unbekannte Varianten und eine deutlich niedrigere Falsch-Positiv-Rate.
                    </p>
                    <p>
                      Die Integration in bestehende Systeme wie MES, SAP, ERP und WMS gehört zum Standard. Sie müssen dafür keine Infrastruktur neu aufbauen, sondern docken an das an, was Sie bereits betreiben.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">YOLOv8 & Vision Transformer</Badge>
                    <Badge variant="secondary" className="rounded-full">PyTorch & TensorFlow</Badge>
                    <Badge variant="secondary" className="rounded-full">PaddleOCR & DocTR</Badge>
                    <Badge variant="secondary" className="rounded-full">TensorRT Edge-Deployment</Badge>
                  </div>
                </div>

                <Card className="border-2 overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-xl">Direktvergleich: Drei Ansätze</CardTitle>
                    <CardDescription>Wann welche Technologie sinnvoll ist, auf einen Blick.</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-primary/5">
                            <TableHead className="pl-6 font-bold text-foreground">Kriterium</TableHead>
                            <TableHead className="text-primary font-bold">KI-Bildverarbeitung</TableHead>
                            <TableHead className="text-muted-foreground">Manuell</TableHead>
                            <TableHead className="text-muted-foreground">Klassisch</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {comparison.map((row, i) => (
                            <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                              <TableCell className="font-medium pl-6 text-sm">{row.kriterium}</TableCell>
                              <TableCell>
                                <span className="inline-flex items-start gap-1.5 text-sm text-primary font-medium">
                                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                  {row.ki}
                                </span>
                              </TableCell>
                              <TableCell className="text-muted-foreground text-sm">{row.manuell}</TableCell>
                              <TableCell className="text-muted-foreground text-sm">{row.klassisch}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* TECH STACK: echte Logos + Methoden */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unser Stack</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Bewährte Werkzeuge, produktionsreif kombiniert</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Wir bauen auf offene, etablierte Frameworks statt auf eine Blackbox. So bleibt Ihre Lösung wartbar und unabhängig.
                </p>
              </div>

              {/* Logo grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {logos.map((l, i) => (
                  <div key={i} className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-border bg-white p-4 hover-lift">
                    <div className="h-12 flex items-center justify-center">
                      <img src={l.src} alt={l.name} className="h-10 w-10 object-contain" loading="lazy" />
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-foreground leading-tight">{l.name}</div>
                      <div className="text-[11px] text-muted-foreground">{l.note}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Methods (lucide) */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {methods.map((m, i) => {
                  const Icon = m.icon;
                  return (
                    <Card key={i} className="hover-lift border-2">
                      <CardContent className="pt-5 pb-5">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-bold text-foreground text-sm mb-1">{m.name}</div>
                            <div className="text-muted-foreground text-xs leading-relaxed">{m.desc}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* WARUM WIR */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Ihr Vorteil</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Warum KI Kanzlei für Computer Vision im DACH-Raum?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Als österreichische KI-Agentur verbinden wir technische Tiefe mit echtem DSGVO-Know-how und bauen keine Lösungen, die Sie später allein nicht warten können.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {reasons.map(({ icon: Icon, badge, title, desc }, i) => (
                  <Card key={i} className="hover-lift border-2">
                    <CardHeader className="pb-3">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <Badge variant="outline" className="rounded-full w-fit text-[10px] bg-primary/10 text-primary border-primary/20 mb-1">{badge}</Badge>
                      <CardTitle className="text-lg">{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* ABLAUF */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="max-w-2xl mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unser Vorgehen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Von der Erstanalyse bis zum produktiven System</h2>
                <p className="text-lg text-muted-foreground">Vier Schritte, transparent und ohne Überraschungen. Sie steigen jederzeit aus, wenn es nicht passt.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {steps.map((s) => {
                  const Icon = s.icon;
                  return (
                    <Card key={s.step} className="hover-lift border-2 relative overflow-hidden">
                      <div className="absolute top-4 right-4 text-5xl font-black text-primary/5 select-none leading-none">{s.step}</div>
                      <CardHeader className="pb-3">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <Badge variant="outline" className="rounded-full w-fit text-xs mb-2 bg-primary/10 text-primary border-primary/20">{s.time}</Badge>
                        <CardTitle className="text-base">{s.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Häufige Fragen zu Computer Vision</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Die meistgestellten Fragen aus unseren Erstgesprächen, direkt beantwortet, ohne Marketing-Sprech.</p>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqs.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-2 border-border rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:bg-primary/5">
                    <AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-5">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* RELATED */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Mehr Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zu Computer Vision</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {related.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <a key={i} href={s.href} className="group block">
                      <Card className="h-full border-2 hover-lift group-hover:border-primary/40">
                        <CardHeader className="pb-3">
                          <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-2 ${serviceLogos[s.href] ? "bg-white border border-border" : "bg-primary/10"}`}>{serviceLogos[s.href] ? <img src={`/img/logos/${serviceLogos[s.href]}.svg`} alt={s.title} className="w-7 h-7 object-contain" /> : <Icon className="w-5 h-5 text-primary" />}</div>
                          <CardTitle className="text-lg">{s.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
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
