import type { Metadata } from "next";
import { serviceLogos } from "@/lib/serviceLogos";
import Script from "next/script";
import { NavigationHome } from "@/components/NavigationHome";
import { FooterModern } from "@/components/FooterModern";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Database, Search, Binary, Brain, Network, Lock, ShieldCheck, MapPin, Bot, Check, X,
  Filter, Gauge, RefreshCw, Building2, Shield, Eye, Code2, Settings2, Rocket, Phone,
  Clock, Workflow, Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Vector Database & Vektordatenbank für RAG",
  description:
    "Vektordatenbank für RAG und semantische Suche: Wir wählen, betreiben und optimieren Qdrant, Pinecone, Weaviate und pgvector als Fundament Ihrer KI-Wissensdatenbank. Embeddings, Indexierung, Hybrid-Suche, DSGVO-konform und self-hosted in der EU.",
  keywords:
    "vector database, vektordatenbank, pinecone, qdrant, weaviate, pgvector, semantic search, semantische suche, embeddings, vektorsuche, RAG, hybrid search, ähnlichkeitssuche, KI Wissensdatenbank",
  alternates: { canonical: "https://ki-kanzlei.at/leistungen/vector-database" },
};

const faqs = [
  {
    q: "Was ist eine Vektordatenbank und wie funktioniert sie?",
    a: "Eine Vektordatenbank speichert Texte, Dokumente, Bilder oder Audiodaten nicht als Stichworte, sondern als numerische Vektoren, sogenannte Embeddings. Jedes Embedding beschreibt die Bedeutung eines Inhalts als Punkt in einem hochdimensionalen Raum. Bei einer Suche wird die Frage ebenfalls in einen Vektor umgewandelt, und die Datenbank liefert die inhaltlich ähnlichsten Treffer, gemessen über die Distanz im Vektorraum. Genau das ist die Grundlage für semantische Suche und für RAG, also für KI-Antworten auf Basis Ihrer eigenen Daten.",
  },
  {
    q: "Was ist der Unterschied zwischen Qdrant, Pinecone und Weaviate?",
    a: "Alle drei sind dedizierte Vektordatenbanken, unterscheiden sich aber im Betriebsmodell. Qdrant ist Open Source und lässt sich self-hosted auf EU-Servern betreiben, ist also DSGVO-freundlich und ohne nutzungsabhängige Cloud-Gebühren. Pinecone ist ein vollständig gehosteter US-Cloud-Dienst, sehr komfortabel, aber mit Daten in den USA und nutzungsabhängiger Abrechnung. Weaviate gibt es sowohl als Open-Source-Variante zum Selbstbetrieb als auch als Managed Cloud, mit starken Hybrid-Such-Funktionen. Wir wählen unabhängig die Lösung, die zu Ihren Daten, Ihrem Volumen und Ihren Datenschutzanforderungen passt.",
  },
  {
    q: "Sind Vektordatenbanken DSGVO-konform einsetzbar?",
    a: "Das hängt stark von Hosting und Anbieter ab. Eine self-hosted Lösung wie Qdrant oder pgvector auf Servern in der EU bleibt vollständig in Ihrer Hand, die Daten verlassen Ihre Infrastruktur nicht. Managed US-Clouds wie Pinecone sind bei sensiblen Mandanten-, Patienten- oder Personaldaten datenschutzrechtlich heikel, weil Daten in den USA verarbeitet werden. Für den DACH-Raum setzen wir bei vertraulichen Inhalten daher standardmäßig auf EU-Self-Hosting mit Zugriffskontrolle und Mandantentrennung.",
  },
  {
    q: "Was sind Embeddings und welches Modell ist das richtige?",
    a: "Embeddings sind die Zahlenvektoren, die die Bedeutung Ihrer Inhalte abbilden. Sie werden von einem Embedding-Modell erzeugt, das Sie entweder lokal betreiben oder über eine API anbinden. Die Wahl hängt von Sprache, Domäne, gewünschter Genauigkeit und Datenschutz ab. Für deutschsprachige Fachtexte und sensible Daten setzen wir oft auf lokale Modelle, damit nichts das Haus verlässt. Wir testen mehrere Modelle gegen Ihre echten Daten und wählen das, das die besten Treffer liefert.",
  },
  {
    q: "Wofür brauche ich eine Vektordatenbank bei RAG?",
    a: "RAG, also Retrieval Augmented Generation, lässt ein Sprachmodell nicht aus dem Gedächtnis antworten, sondern auf Basis Ihrer Dokumente. Damit das LLM die passenden Stellen findet, braucht es einen schnellen, semantischen Index, und genau das ist die Vektordatenbank. Sie liefert zu jeder Frage die relevantesten Textabschnitte, die dann als Kontext an das Modell übergeben werden. Ohne eine sauber aufgesetzte und optimierte Vektordatenbank bleibt RAG ungenau und wird mit wachsender Datenmenge langsam.",
  },
  {
    q: "Was ist semantische Suche und wie unterscheidet sie sich von Volltextsuche?",
    a: "Die klassische Volltextsuche findet nur exakte Wörter und Wortstämme. Wer nach Kündigungsfrist sucht, findet keine Dokumente, die von Vertragsende sprechen. Semantische Suche arbeitet über Embeddings und findet Inhalte nach Bedeutung, auch bei völlig anderer Wortwahl. In der Praxis kombinieren wir beides zur Hybrid-Suche, also semantische Nähe plus Stichwort- und Metadatenfilter, weil so die präzisesten Treffer entstehen.",
  },
  {
    q: "Wann reicht pgvector und wann brauche ich eine dedizierte Vektordatenbank?",
    a: "pgvector ist eine Erweiterung für PostgreSQL und ideal, wenn Sie ohnehin eine Postgres-Datenbank betreiben und nur moderate Mengen an Vektoren haben. Sie sparen sich ein zusätzliches System und nutzen vertraute SQL-Filter. Sobald Sie aber Millionen oder Milliarden Vektoren, sehr niedrige Latenzen oder horizontale Skalierung brauchen, spielt eine dedizierte Vektordatenbank wie Qdrant ihre Stärken aus. Im Assessment rechnen wir Ihren konkreten Fall durch und empfehlen ehrlich, ab wann sich der Wechsel lohnt.",
  },
  {
    q: "Übernehmen Sie auch Betrieb und Skalierung der Vektordatenbank?",
    a: "Ja. Auf Wunsch betreiben wir Ihre Vektordatenbank im laufenden Betrieb, überwachen Indizes und Latenzen, halten Embeddings bei neuen Dokumenten aktuell und skalieren mit, wenn Ihr Wissensbestand wächst. Wir kümmern uns um Re-Indexierung, Backups und Performance-Tuning, damit Ihre semantische Suche dauerhaft schnell und zuverlässig bleibt, statt nach dem ersten Setup langsam zu verfallen.",
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
  name: "Vektordatenbanken für RAG & semantische Suche",
  serviceType: "Vektordatenbank, RAG, semantische Suche, Embeddings",
  provider: { "@type": "ProfessionalService", name: "KI Kanzlei", url: "https://ki-kanzlei.at", telephone: "+436642314676" },
  description:
    "Vektordatenbanken für Unternehmen im DACH-Raum: Auswahl, Betrieb und Optimierung von Qdrant, Pinecone, Weaviate und pgvector als Fundament für RAG, semantische Suche und KI-Wissensdatenbanken, DSGVO-konform und self-hosted in der EU.",
  areaServed: [
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
};

const stats = [
  { value: "100 %", label: "EU-Hosting möglich" },
  { value: "< 50 ms", label: "typische Suchlatenz" },
  { value: "Mrd.+", label: "Vektoren pro Index" },
  { value: "1-2 Wo.", label: "bis zum Pilot-Index" },
];

const ataglance = [
  ["Aufgabe", "Ähnlichkeitssuche auf Embeddings"],
  ["Fundament für", "RAG, semantische Suche"],
  ["Indexverfahren", "HNSW, IVF, Hybrid"],
  ["Hosting", "self-hosted EU oder Cloud"],
  ["Beispiele", "Qdrant, Pinecone, pgvector"],
  ["DSGVO", "voll, bei EU-Self-Hosting"],
];

const problems = [
  { problem: "Die Volltextsuche findet nur exakte Wörter, nicht den eigentlichen Sinn der Frage.", solution: "Semantische Suche über Embeddings findet Inhalte nach Bedeutung, auch bei ganz anderer Wortwahl." },
  { problem: "Der RAG-Prototyp wird mit mehr Dokumenten spürbar langsamer und ungenauer.", solution: "Eine richtig gewählte und indexierte Vektordatenbank bleibt schnell, auch bei Millionen von Text-Chunks." },
  { problem: "Sensible Dokumente sollen auf keinen Fall in eine US-Cloud wandern.", solution: "Self-hosted Qdrant oder pgvector in der EU, Ihre Daten verlassen Ihre Infrastruktur nicht." },
  { problem: "Niemand weiß, warum die KI manchmal unpassende Stellen aus dem Index zieht.", solution: "Wir tunen Embeddings, Chunking, Filter und Hybrid-Suche, bis die Treffer verlässlich stimmen." },
];

const bentoFeatures = [
  { icon: Database, title: "Die richtige Vektordatenbank für Ihren Fall", description: "Qdrant, Pinecone, Weaviate oder pgvector? Wir wählen unabhängig nach Volumen, Latenz, Budget und Datenschutz, statt jedem Projekt dasselbe Tool überzustülpen. Sie bekommen das Fundament, das zu Ihren Daten passt, sauber aufgesetzt und so, dass es auch beim zehnfachen Datenbestand noch trägt." },
  { icon: Binary, title: "Embeddings, die passen", description: "Wir wählen und betreiben das passende Embedding-Modell für Ihre Sprache und Ihre Fachdomäne, lokal oder per API, und testen es gegen Ihre echten Daten." },
  { icon: Filter, title: "Hybrid-Suche & Filter", description: "Semantische Nähe kombiniert mit Stichwort- und Metadatenfiltern, für präzise Treffer statt grober Ähnlichkeit. Berechtigungen und Mandanten inklusive." },
  { icon: Gauge, title: "Performance & Indexierung", description: "HNSW-Tuning, Quantisierung und Sharding, damit Suchen auch bei Millionen Vektoren in Millisekunden zurückkommen, ohne dass die Qualität leidet." },
  { icon: ShieldCheck, title: "DSGVO & EU-Self-Hosting", description: "Self-hosted in der EU, mit Zugriffskontrolle, Verschlüsselung und Mandantentrennung. Ihre Daten und Embeddings bleiben in Ihrer Infrastruktur." },
  { icon: RefreshCw, title: "Betrieb & Skalierung", description: "Wir überwachen Indizes und Latenzen, halten Embeddings bei neuen Dokumenten aktuell und skalieren mit, wenn Ihr Wissensbestand wächst." },
];

const departments = [
  { value: "wissen", label: "Wissen", icon: Brain, head: "Wissensmanagement & RAG", intro: "Ihr gesamtes Firmenwissen wird durchsuchbar und liefert die Basis für verlässliche KI-Antworten.", items: ["Handbücher, Verträge und Richtlinien als Embeddings indexieren und semantisch durchsuchbar machen.", "RAG-Antworten aus der eigenen Wissensbasis erzeugen, inklusive Quellenangabe.", "Neue Dokumente automatisch einbetten und in den Index aufnehmen.", "Zugriff pro Abteilung und Rolle über Metadatenfilter steuern."] },
  { value: "service", label: "Service", icon: Bot, head: "Kundenservice & Support", intro: "Anfragen werden in Sekunden mit den passenden Inhalten beantwortet.", items: ["Support-Anfragen semantisch mit der Wissensdatenbank abgleichen.", "Antwortentwürfe aus echten Hilfeartikeln und Tickets generieren.", "Ähnliche frühere Fälle automatisch vorschlagen.", "Häufige Fragen ohne exakte Stichworte zuverlässig beantworten."] },
  { value: "ecommerce", label: "E-Commerce", icon: Building2, head: "E-Commerce & Produktsuche", intro: "Kunden finden Produkte nach Bedeutung, nicht nur nach exaktem Suchwort.", items: ["Semantische Produktsuche, die auch bei vager Beschreibung passende Artikel findet.", "Empfehlungen über Ähnlichkeit von Produkt-Embeddings erzeugen.", "Bild- und Textsuche kombinieren, etwa für visuelle Ähnlichkeit.", "Suchergebnisse mit Filtern für Preis, Kategorie und Verfügbarkeit verbinden."] },
  { value: "recht", label: "Recht", icon: Shield, head: "Recht & Compliance", intro: "Klauseln, Akten und Vorschriften werden nach Inhalt auffindbar, DSGVO-konform.", items: ["Vertragsklauseln und Präzedenzfälle semantisch durchsuchen.", "Relevante Paragraphen und Richtlinien zu einer Frage finden.", "Sensible Dokumente ausschließlich self-hosted in der EU indexieren.", "Zugriffe protokollieren und mandantengetrennt absichern."] },
  { value: "analyse", label: "Analyse", icon: Eye, head: "Analyse & Forschung", intro: "Große Textmengen werden nach Themen und Ähnlichkeit erschließbar.", items: ["Studien, Berichte und Protokolle nach Bedeutung clustern.", "Duplikate und thematisch verwandte Dokumente erkennen.", "Forschungsdaten semantisch durchsuchen und vergleichen.", "Trends und wiederkehrende Muster über Embeddings sichtbar machen."] },
  { value: "entwicklung", label: "Entwicklung", icon: Code2, head: "Entwicklung & IT", intro: "Code, Logs und technische Dokumentation werden semantisch durchsuchbar.", items: ["Code- und Doku-Suche über Embeddings statt nur über Dateinamen.", "Vektorsuche per API in eigene Anwendungen einbinden.", "Logs und Fehlermeldungen nach Ähnlichkeit gruppieren.", "Hybrid-Suche für interne Tools und Self-Service-Portale bereitstellen."] },
];

const comparison = [
  { feature: "Hosting & Datenstandort", qdrant: "self-hosted in der EU", pinecone: "US-Cloud, managed", pgvector: "in Ihrer Postgres-DB" },
  { feature: "DSGVO-Datensouveränität", qdrant: "voll, Daten bleiben bei Ihnen", pinecone: "eingeschränkt, US-Anbieter", pgvector: "voll, je nach DB-Standort" },
  { feature: "Performance bei vielen Vektoren", qdrant: "sehr hoch, HNSW", pinecone: "sehr hoch, managed", pgvector: "gut bis mittlere Größe" },
  { feature: "Skalierung", qdrant: "horizontal, Sharding", pinecone: "automatisch, serverless", pgvector: "an Postgres gebunden" },
  { feature: "Betriebsaufwand", qdrant: "mittel, wir betreiben es", pinecone: "gering, fully managed", pgvector: "gering, falls Postgres schon läuft" },
  { feature: "Kosten bei hohem Volumen", qdrant: "planbare Fixkosten", pinecone: "nutzungsabhängig in USD", pgvector: "kaum Zusatzkosten" },
  { feature: "Hybrid-Suche & Filter", qdrant: "nativ, sehr stark", pinecone: "vorhanden", pgvector: "über SQL, einfacher" },
];

const steps = [
  { step: "01", icon: Phone, title: "Kostenlose Erstanalyse", time: "30 Minuten", description: "Wir klären, welche Daten Sie durchsuchbar machen wollen, wie groß der Bestand ist und welche Datenschutzanforderungen gelten. Sie wissen danach, welcher Weg sich lohnt." },
  { step: "02", icon: Search, title: "Konzept & Tool-Wahl", time: "Woche 1", description: "Wir wählen Vektordatenbank und Embedding-Modell, skizzieren die Architektur und rechnen Kosten und Aufwand durch, ehrlich zwischen Qdrant, Pinecone und pgvector." },
  { step: "03", icon: Settings2, title: "Index-Aufbau & Test", time: "Woche 1 bis 3", description: "Wir erzeugen Embeddings, bauen den Index auf, setzen Hybrid-Suche und Filter um und prüfen die Trefferqualität gegen echte Fragen aus Ihrem Alltag." },
  { step: "04", icon: Rocket, title: "Go-Live & Betreuung", time: "ab Woche 3", description: "Die Vektorsuche geht produktiv. Wir überwachen Latenz und Qualität, halten Embeddings aktuell und skalieren mit, wenn Ihr Datenbestand wächst." },
];

const related = [
  { href: "/leistungen/ki-wissensdatenbank", icon: Brain, title: "KI Wissensdatenbank (RAG)", desc: "Die fertige Wissensdatenbank auf Basis Ihrer Vektordatenbank, mit zuverlässigen, quellenbasierten Antworten." },
  { href: "/leistungen/private-ai", icon: Lock, title: "Private AI & Lokale KI", desc: "Sprachmodelle und Embeddings in Ihrer eigenen Infrastruktur, ohne dass Daten die EU verlassen." },
  { href: "/leistungen/mlops", icon: Workflow, title: "MLOps & LLMOps", desc: "Betrieb, Monitoring und Skalierung Ihrer KI-Pipelines, inklusive Embedding- und Index-Lifecycle." },
];

function LogoBox({ slug, alt, imgClassName = "w-5 h-5", boxClassName = "" }: { slug: string; alt: string; imgClassName?: string; boxClassName?: string }) {
  return (
    <span className={`inline-flex items-center justify-center bg-white border border-border rounded ${boxClassName}`}>
      <img src={`/img/logos/${slug}.svg`} alt={alt} className={imgClassName} />
    </span>
  );
}

export default function Page() {
  return (
    <>
      <Script id="faq-vectordb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-vectordb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen gradient-bg">
        <NavigationHome />
        <main>
          {/* HERO */}
          <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <LogoBox slug="qdrant" alt="Qdrant" imgClassName="w-9 h-9" boxClassName="rounded-xl p-2 shadow-sm" />
                    <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                      Vektordatenbank, RAG-Fundament
                    </Badge>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Die Vektordatenbank als Fundament für <span className="text-primary">RAG und semantische Suche</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Wir wählen, betreiben und optimieren Ihre Vektordatenbank, von Qdrant über Pinecone und Weaviate bis pgvector. Embeddings, Indexierung, Hybrid-Suche und Skalierung, DSGVO-konform und self-hosted in der EU, als verlässliches Fundament für Ihre KI-Wissensdatenbank.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">Kostenloses Assessment</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="#vergleich">Qdrant vs. Pinecone vs. pgvector</a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> DSGVO & EU-Hosting</span>
                    <span className="flex items-center gap-1.5"><Brain className="w-4 h-4 text-primary" /> RAG-ready</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Made in Austria</span>
                  </div>
                </div>

                {/* Hero visual: Vektorsuche-Pipeline */}
                <div className="relative">
                  <Card className="border-2 shadow-xl shadow-primary/5 overflow-hidden">
                    <CardHeader className="border-b border-border py-3">
                      <div className="flex items-center gap-2">
                        <LogoBox slug="qdrant" alt="Qdrant" imgClassName="w-4 h-4" boxClassName="p-1 rounded" />
                        <span className="font-mono text-xs text-muted-foreground">semantic-search.qdrant</span>
                        <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <span className="w-2 h-2 rounded-full bg-green-500" /> indexiert
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3 rounded-xl border-2 border-primary/40 bg-primary/5 px-3.5 py-2.5">
                        <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0"><Search className="w-5 h-5 text-primary" /></div>
                        <div className="min-w-0"><div className="text-[10px] uppercase tracking-wider text-primary font-medium">Anfrage</div><div className="text-sm font-semibold truncate">Frage des Nutzers</div></div>
                      </div>
                      {[
                        { icon: Binary, label: "Embedding", title: "Frage in Vektor umwandeln" },
                        { icon: Database, label: "Vektorsuche", title: "Top-k Treffer finden" },
                        { icon: Brain, label: "Kontext", title: "An das LLM übergeben" },
                      ].map((n, i) => {
                        const Icon = n.icon;
                        return (
                          <div key={i} className="flex items-center gap-3 rounded-xl border-2 border-border bg-background px-3.5 py-2.5 shadow-sm">
                            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><Icon className="w-5 h-5 text-primary" /></div>
                            <div className="min-w-0 flex-1"><div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">{n.label}</div><div className="text-sm font-semibold truncate">{n.title}</div></div>
                            <Check className="w-4 h-4 text-green-600 shrink-0" />
                          </div>
                        );
                      })}
                    </CardContent>
                  </Card>
                  <div className="hidden lg:flex absolute -top-4 -right-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium">
                    <Network className="w-3.5 h-3.5 text-primary" /> Mrd.+ Vektoren
                  </div>
                  <div className="hidden lg:flex absolute -bottom-4 -left-4 items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-1.5 shadow-md text-xs font-medium">
                    <Lock className="w-3.5 h-3.5 text-primary" /> DSGVO, EU-Hosting
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* STATS */}
          <section className="py-10 md:py-12 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid grid-cols-2 md:grid-cols-4 border-2 border-border rounded-2xl overflow-hidden bg-card">
                {stats.map(({ value, label }, i) => (
                  <div key={i} className="p-6 md:p-8 text-center border-b md:border-b-0 border-r last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r border-border">
                    <div className="text-3xl md:text-4xl font-bold text-primary">{value}</div>
                    <div className="text-xs md:text-sm text-muted-foreground mt-1.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* DEFINITION */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Kurz erklärt</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Was ist eine Vektordatenbank und wofür brauchen Sie sie?</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Eine <strong className="text-foreground">Vektordatenbank</strong> speichert Ihre Inhalte als <strong className="text-foreground">Embeddings</strong>, also als numerische Vektoren, die deren Bedeutung abbilden. Zu jeder Frage liefert sie die inhaltlich ähnlichsten Treffer, gemessen über die Distanz im Vektorraum. Das ist die Grundlage für <strong className="text-foreground">semantische Suche</strong> und für RAG.</p>
                    <p>Die Stärke liegt darin, dass nach <strong className="text-foreground">Bedeutung</strong> statt nach exakten Stichworten gesucht wird. So findet die Suche passende Inhalte auch bei ganz anderer Wortwahl, und Ihre KI antwortet auf Basis Ihrer eigenen Dokumente, statt zu raten. Bei großen Datenmengen entscheidet die richtige Wahl der Datenbank über Tempo und Trefferqualität.</p>
                    <p>Genau hier setzen wir an: Wir wählen, betreiben und optimieren die passende Lösung, von <strong className="text-foreground">Qdrant</strong> über Pinecone und Weaviate bis <strong className="text-foreground">pgvector</strong>, DSGVO-konform und auf Wunsch self-hosted in der EU. Sie bekommen das Fundament, das zu Ihren Daten und Ihrem Volumen passt.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="rounded-full">Embeddings</Badge>
                    <Badge variant="secondary" className="rounded-full">Semantische Suche</Badge>
                    <Badge variant="secondary" className="rounded-full">RAG-Fundament</Badge>
                    <Badge variant="secondary" className="rounded-full">Hybrid-Suche</Badge>
                  </div>
                </div>
                <Card className="border-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Vektordatenbank auf einen Blick</CardTitle>
                    <CardDescription>Die wichtigsten Eckdaten im Überblick.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {ataglance.map(([label, value]) => (
                      <div key={label} className="flex items-center justify-between py-2.5 border-b border-border last:border-0">
                        <span className="text-sm font-medium text-foreground">{label}</span>
                        <span className="text-sm text-muted-foreground text-right max-w-[55%]">{value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* PROBLEM -> LÖSUNG */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Warum semantisch suchen?</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Wo Stichwortsuche aufhört, fängt semantische Suche an</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Überall, wo Inhalte nach Bedeutung gefunden werden müssen, liefert die Vektordatenbank: schneller, präziser und auch bei anderer Wortwahl.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 pl-1">Was heute passiert</div>
                  {problems.map(({ problem }, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl border bg-background"><X className="w-5 h-5 text-destructive mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{problem}</span></div>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-2 pl-1">Was die Vektorsuche tut</div>
                  {problems.map(({ solution }, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-primary/20 bg-primary/5"><Check className="w-5 h-5 text-primary mt-0.5 shrink-0" /><span className="text-sm leading-relaxed font-medium">{solution}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* BENTO */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Was wir liefern</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Mehr als nur Vektoren speichern</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Wir bauen Vektordatenbanken, die schnell, präzise und DSGVO-konform bleiben, und denken Embeddings, Performance und Skalierung von Anfang an mit.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="hover-lift border-2 lg:col-span-2 bg-primary/5 border-primary/20">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2"><Database className="w-6 h-6 text-primary" /></div>
                    <CardTitle className="text-xl">{bentoFeatures[0].title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{bentoFeatures[0].description}</CardDescription>
                  </CardHeader>
                </Card>
                {bentoFeatures.slice(1).map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <Card key={i} className="hover-lift border-2">
                      <CardHeader>
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2"><Icon className="w-5 h-5 text-primary" /></div>
                        <CardTitle className="text-lg">{f.title}</CardTitle>
                        <CardDescription className="leading-relaxed">{f.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* USE CASES */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Anwendungsfälle</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Wofür Unternehmen Vektordatenbanken einsetzen</h2>
                <p className="text-lg text-muted-foreground mt-4">Wählen Sie einen Bereich, wir zeigen konkrete Einsatzszenarien aus der Praxis.</p>
              </div>
              <Tabs defaultValue="wissen" className="w-full">
                <TabsList className="flex flex-wrap h-auto justify-center gap-1 bg-transparent mb-6">
                  {departments.map((d) => {
                    const Icon = d.icon;
                    return (
                      <TabsTrigger key={d.value} value={d.value} className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-4 py-2 border border-border">
                        <Icon className="w-4 h-4 mr-1.5" />{d.label}
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
                {departments.map((d) => (
                  <TabsContent key={d.value} value={d.value}>
                    <Card className="border-2">
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-bold mb-2">{d.head}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-5">{d.intro}</p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {d.items.map((item, j) => (
                            <div key={j} className="flex items-start gap-2.5 p-3 rounded-lg border bg-background"><Sparkles className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span className="text-sm leading-relaxed">{item}</span></div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>

          {/* VERGLEICH */}
          <section id="vergleich" className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Tool-Vergleich</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Qdrant vs. Pinecone vs. pgvector</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Welche Vektordatenbank passt? Das hängt von Datenmenge, Latenz, Budget und Ihrem Anspruch an Datenschutz ab. Wir beraten unabhängig.</p>
              </div>
              <Card className="border-2 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[28%] font-bold text-foreground">Merkmal</TableHead>
                      <TableHead className="text-primary font-bold"><span className="inline-flex items-center gap-1.5"><LogoBox slug="qdrant" alt="Qdrant" imgClassName="w-4 h-4" boxClassName="p-0.5" />Qdrant</span></TableHead>
                      <TableHead className="text-muted-foreground">Pinecone</TableHead>
                      <TableHead className="text-muted-foreground">pgvector</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparison.map((row, i) => (
                      <TableRow key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <TableCell className="font-medium">{row.feature}</TableCell>
                        <TableCell className="text-sm text-primary font-medium">{row.qdrant}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{row.pinecone}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{row.pgvector}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
              <p className="text-sm text-muted-foreground text-center mt-4">Unser Standard für sensible Daten im DACH-Raum ist <a href="/leistungen/private-ai" className="text-primary hover:underline">self-hosted Qdrant in der EU</a>, weil Ihre Vektoren dort nicht das Haus verlassen. Pinecone setzen wir, wenn maximaler Komfort zählt, pgvector, wenn Sie ohnehin schon Postgres betreiben.</p>
            </div>
          </section>

          {/* PROZESS */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Unser Prozess</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Ihr Vektordatenbank-Projekt in 4 Schritten</h2>
                <p className="text-lg text-muted-foreground mt-4">Transparent, ohne Überraschungen und mit ehrlicher Tool-Empfehlung.</p>
              </div>
              <ProcessSteps steps={steps} />
            </div>
          </section>

          {/* FAQ */}
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen zu Vektordatenbanken</h2>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqs.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-2 border-border rounded-xl px-6 bg-background data-[state=open]:border-primary/30 data-[state=open]:bg-primary/5">
                    <AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-5">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* RELATED */}
          <section className="py-14 md:py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-10">
                <Badge variant="outline" className="rounded-full mb-4 bg-primary/10 text-primary border-primary/20">Mehr Leistungen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Passt gut zur Vektordatenbank</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {related.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <a key={i} href={s.href} className="group block">
                      <Card className="h-full border-2 hover-lift group-hover:border-primary/40">
                        <CardHeader>
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${serviceLogos[s.href] ? "bg-white border border-border" : "bg-primary/10"}`}>{serviceLogos[s.href] ? <img src={`/img/logos/${serviceLogos[s.href]}.svg`} alt={s.title} className="w-7 h-7 object-contain" /> : <Icon className="w-6 h-6 text-primary" />}</div>
                          <CardTitle className="text-xl">{s.title}</CardTitle>
                        </CardHeader>
                        <CardContent><p className="text-muted-foreground leading-relaxed">{s.desc}</p></CardContent>
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
