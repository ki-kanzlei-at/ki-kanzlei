import { NavigationHome } from "@/components/NavigationHome";
import { FooterModern } from "@/components/FooterModern";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const AGB = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <NavigationHome />
      <main>
        <section className="pt-32 md:pt-40 pb-12 md:pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Badge variant="outline" className="rounded-full mb-5 bg-primary/10 text-primary border-primary/20">
              Rechtliches
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Allgemeine Geschäftsbedingungen
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              AGB der KI Kanzlei für B2B-Leistungen im Bereich KI-gestützter Prozessautomatisierung.
            </p>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="border-2">
              <CardContent className="p-6 md:p-10">
                <div className="space-y-8 text-muted-foreground">
                  <div>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>KI Kanzlei | Arnold Freissling, Einzelunternehmen</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Rossatzbach 3/2, 3602 Rossatz | UID: ATU82628738 | info@ki-kanzlei.at
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Stand: März 2026
                </p>
                <p className="text-muted-foreground leading-relaxed italic mb-8">
                  Geltungsbereich: Diese AGB gelten ausschließlich im unternehmerischen Geschäftsverkehr (B2B). Sie richten sich an Unternehmer im Sinne des § 1 Abs. 1 Z 1 KSchG. Verbraucher im Sinne des KSchG sind nicht Adressat dieser AGB.
                </p>

                {/* § 1 */}
                <div className="text-left space-y-4 mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">§ 1 Geltungsbereich</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    1.1 Diese Allgemeinen Geschäftsbedingungen (nachfolgend AGB) der KI Kanzlei, Arnold Freissling, Einzelunternehmen, Rossatzbach 3/2, 3602 Rossatz (nachfolgend Auftragnehmer), gelten für sämtliche Leistungsverhältnisse mit Unternehmern (nachfolgend Auftraggeber). Sie gelten nicht gegenüber Verbrauchern.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    1.2 Abweichende, entgegenstehende oder ergänzende AGB des Auftraggebers werden nicht Vertragsbestandteil, auch wenn der Auftragnehmer diesen nicht ausdrücklich widerspricht. Sondervereinbarungen bedürften der ausdrücklichen schriftlichen Bestätigung durch den Auftragnehmer.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    1.3 Diese AGB gelten in der bei Vertragsschluss gültigen Fassung auch für alle künftigen Leistungsbeziehungen mit demselben Auftraggeber, ohne dass es eines erneuten Hinweises bedarf.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    1.4 Maßgebliche Rechtsgrundlagen: ABGB, UGB, ECG, UrhG, DSG, DSGVO (EU 2016/679) sowie Verordnung (EU) 2024/1689 (EU AI Act).
                  </p>
                </div>

                {/* § 2 */}
                <div className="text-left space-y-4 mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">§ 2 Leistungsgegenstand und Leistungsmodelle</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    2.1 Der Auftragnehmer erbringt Leistungen im Bereich der KI-gestützten Prozessautomatisierung. Das Leistungsspektrum umfasst insbesondere folgende Produkte sowie damit verbundene Beratungs-, Implementierungs- und Betreuungsleistungen:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>(a) Outreach-Produkte: LinkedIn Outreach Agent, Cold Email Outreach Agent, SEO & Content Agent</li>
                    <li>(b) Allgemeine Produkte: KI-Wissensdatenbank (RAG Agent), KI-Anrufassistent, KI Multi-Channel Automatisierung, Persönliche KI-Sekretärin</li>
                    <li>(c) Individuelle KI-Workflow-Entwicklung: Maßgeschneiderte Automatisierungslösungen nach individueller Anforderungsanalyse</li>
                    <li>(d) KI-Beratungsleistungen: Strategische und technische Beratung zu KI-Einsatz, Prozessanalyse und Implementierungsplanung auf Stundenbasis</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    2.2 Es werden drei Leistungsmodelle angeboten:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>(a) Einmalige Projektimplementierung (Fix-Preis/Setupgebühr): Entwicklung und Implementierung einer individuellen KI-Automatisierungslösung auf Basis einer vorab schriftlich vereinbarten Leistungsbeschreibung.</li>
                    <li>(b) Monatliches Retainer-/Abonnementmodell: Laufende Betreuung, Wartung, Optimierung und Support bestehender Lösungen gegen monatliche Pauschalvergütung.</li>
                    <li>(c) KI-Beratung auf Stundenbasis: Strategische und technische Beratung nach tatsächlichem Aufwand zum vereinbarten Stundensatz (derzeit EUR 120,00 netto pro Stunde). Die Abrechnung erfolgt monatlich nach Aufwand.</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    2.3 Der genaue Leistungsumfang ergibt sich aus dem jeweiligen schriftlichen Angebot. Mündliche Nebenabreden bedürften der schriftlichen Bestätigung.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    2.4 Der Auftragnehmer erbringt ausschließlich technische Automatisierungsleistungen. Die Leistungen umfassen keine Rechts-, Steuer-, Finanz- oder sonstige regulierte Fachberatung. Durch automatisierte Systeme generierte Inhalte ersetzen keine Fachberatung.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    2.5 Zur Leistungserbringung setzt der Auftragnehmer Drittanbieter-Technologien ein. Sämtliche eingesetzten Dienste werden ausschließlich auf Servern innerhalb der Europäischen Union betrieben oder sind auf EU-Datenhaltung konfiguriert:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>n8n (Workflow-Automatisierung, Self-hosted auf IONOS-Server, Rechenzentrum Frankfurt/Deutschland)</li>
                    <li>Google Vertex AI / Gemini API und Gemini Imagen (EU-Regional-Endpoint europe-west4/europe-west3, Datenverarbeitung ausschließlich in der EU)</li>
                    <li>OpenAI via Microsoft Azure (EU-Server, Datenverarbeitung ausschließlich in Europa)</li>
                    <li>Supabase (PostgreSQL pgvector, AWS-Region eu-central-1, Rechenzentrum Frankfurt/Deutschland)</li>
                    <li>Unipile API (LinkedIn-Integration, Sitz: 168 rue de la Rotonde, 42153 Riorges, Frankreich; DSGVO-konform, SOC 2 Type II zertifiziert, Daten in europäischen Rechenzentren)</li>
                    <li>OpenWebUI (Chat-Frontend, Open Source unter MIT-Lizenz, Self-hosted auf IONOS-Server des Auftragnehmers)</li>
                    <li>Supachat (Multi-Channel-Kommunikation)</li>
                    <li>fonio.ai (KI-Anrufassistent, als zertifizierter Reseller-Partner; Server: Nürnberg/Deutschland via Hetzner)</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    2.5a Der Auftragnehmer haftet nicht für Ausfälle, Änderungen, Preiserhöhungen oder Einstellung dieser Drittanbieter-Dienste.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    2.6 Änderungen des Leistungsumfangs nach Vertragsschluss (Change Requests) bedürfen einer schriftlichen Vereinbarung und können zu Vergütungs- und Terminanpassungen führen. Der Auftragnehmer ist nicht verpflichtet, Change Requests anzunehmen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    2.7 Der Auftragnehmer ist berechtigt, Teile der Leistung an qualifizierte Subunternehmer zu vergeben. Folgende Unterauftragsverarbeiter werden zum Zeitpunkt des Vertragsschlusses eingesetzt:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>IONOS SE, Montabaur, Deutschland (Server-Hosting, Rechenzentrum Frankfurt)</li>
                    <li>Google Cloud / Vertex AI, EU-Endpoints europe-west3/europe-west4 (KI-Textgenerierung, Bildgenerierung)</li>
                    <li>Microsoft Azure (OpenAI), EU-Rechenzentren (KI-Sprachmodelle)</li>
                    <li>Supabase Inc., AWS eu-central-1 Frankfurt (Datenbank, Vektordatenbank)</li>
                    <li>Unipile SAS, 168 rue de la Rotonde, 42153 Riorges, Frankreich (LinkedIn-API-Integration)</li>
                    <li>fonio GmbH, Joanelligasse 5/16, 1060 Wien, Österreich / Hetzner Nürnberg (KI-Anrufassistent)</li>
                  </ul>
                </div>

                {/* § 3 */}
                <div className="text-left space-y-4 mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">§ 3 Mitwirkungspflichten des Auftraggebers</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    3.1 Der Auftraggeber stellt alle erforderlichen Informationen, Zugänge, Daten und Unterlagen vollständig, korrekt und rechtzeitig zur Verfügung. Mehrkosten und Verzögerungen durch mangelnde Mitwirkung gehen zu Lasten des Auftraggebers.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    3.2 Der Auftraggeber benennt einen Ansprechpartner mit ausreichender Entscheidungskompetenz.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    3.3 Der Auftraggeber gewährleistet, dass bereitgestellte Daten, Inhalte und Systeme rechtmäßig genutzt werden dürfen und keine Rechte Dritter verletzen. Er haftet für alle daraus entstehenden Schäden und Drittansprüche.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    3.4 Der Auftraggeber ist vor dem Produktivbetrieb verpflichtet, ausreichende Tests durchzuführen. Der produktive Einsatz ungenügend getesteter Systeme liegt in seiner alleinigen Verantwortung.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    3.5 Zugangsdaten und API-Schlüssel sind sicher zu verwahren. Bei Verdacht auf Missbrauch sind diese unverzüglich zu ändern und der Auftragnehmer zu informieren. Haftung des Auftragnehmers für Missbrauch vom Auftraggeber verwalteter Daten ist ausgeschlossen.
                  </p>
                </div>

                {/* § 4 */}
                <div className="text-left space-y-4 mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">§ 4 Termine und Fristen</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    4.1 Angegebene Termine - insbesondere das Implementierungsziel von 30 Tagen - sind Richtwerte und keine verbindlichen Fixtermine, sofern nicht ausdrücklich schriftlich als verbindlich vereinbart.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    4.2 Verschiebungen durch mangelnde Mitwirkung des Auftraggebers, Drittanbieter-Verzögerungen oder höhere Gewalt berechtigen den Auftragnehmer zur angemessenen Terminanpassung.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    4.3 Verzögerungen durch den Auftraggeber berechtigen den Auftragnehmer, anfallende Mehrkosten gesondert zu verrechnen.
                  </p>
                </div>

                {/* § 5 */}
                <div className="text-left space-y-4 mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">§ 5 Vergütung und Zahlungsbedingungen</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    5.1 Die Vergütung richtet sich nach dem jeweiligen schriftlichen Angebot. Preise verstehen sich in Euro (EUR). Im B2B-Verhältnis werden Preise netto zuzüglich gesetzlicher USt. fakturiert, sofern nicht ausdrücklich inkl. USt. ausgewiesen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    5.2 Für Projektimplementierungen gilt: 50 % der Vergütung (Anzahlung) sind bei Vertragsschluss fällig. Die restlichen 50 % (Schlussrate) sind bei Abnahme fällig. Leistungserbringung beginnt erst nach vollständiger Anzahlung.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    5.3 Für Retainer-Verträge ist die monatliche Pauschalvergütung jeweils zum Ersten des Leistungsmonats im Voraus fällig.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    5.3a Für KI-Beratungsleistungen auf Stundenbasis gilt der im Angebot vereinbarte Stundensatz. Die Abrechnung erfolgt monatlich nach tatsächlichem Aufwand auf Basis von Tätigkeitsnachweisen. Rechnungen sind innerhalb von 14 Kalendertagen ab Rechnungsdatum zu begleichen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    5.4 Rechnungen sind innerhalb von 14 Kalendertagen ab Rechnungsdatum ohne Abzug zu begleichen. Nach Fristablauf tritt Verzug ohne Mahnung ein.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    5.5 Bei Zahlungsverzug sind Verzugszinsen von 9,2 Prozentpunkten über dem Basiszinssatz gem. § 456 UGB fällig. Der Auftragnehmer ist berechtigt, bei Zahlungsverzug alle Leistungen einzustellen und Systemzugänge zu sperren.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    5.6 Laufende Drittanbieter-Kosten (API-Kosten Google Gemini, OpenAI, fonio.ai-Minuten, Supabase, Unipile etc.) sind nicht in der Vergütung enthalten, sofern nicht ausdrücklich vereinbart, und gehen zu Lasten des Auftraggebers.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    5.7 Aufrechnung mit Gegenforderungen ist nur mit unbestrittenen oder rechtskräftig festgestellten Forderungen zulässig. Ein Zurückbehaltungsrecht des Auftraggebers ist ausgeschlossen.
                  </p>
                </div>

                {/* § 6 */}
                <div className="text-left space-y-4 mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">§ 6 Abnahme</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    6.1 Nach Fertigstellung hat der Auftraggeber innerhalb von 10 Werktagen schriftlich abzunehmen oder konkrete Mängel schriftlich zu benennen. Der Auftragnehmer weist in seiner Übergabemitteilung auf diese Frist hin.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    6.2 Unwesentliche Mängel berechtigen nicht zur Abnahmeverweigerung und sind gesondert zu dokumentieren.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    6.3 Erfolgt innerhalb der Frist weder Abnahme noch schriftliche Mängelrüge, gilt die Leistung als abgenommen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    6.4 Die Abnahme gilt ebenfalls als erteilt, wenn der Auftraggeber die Lösung produktiv in Betrieb nimmt, ohne vorher Mängel schriftlich zu rügen.
                  </p>
                </div>

                {/* § 7 */}
                <div className="text-left space-y-4 mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">§ 7 Gewährleistung</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    7.1 Die Gewährleistungsfrist beträgt 6 Monate ab Abnahme.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    7.2 Mängel sind unverzüglich, spätestens innerhalb von 5 Werktagen nach Entdeckung, schriftlich mit genauer Fehlerbeschreibung zu rügen. Verspätete oder ungenügend beschriebene Rügen schließen Gewährleistungsansprüche aus.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    7.3 Von der Gewährleistung ausgeschlossen sind Beeinträchtigungen durch:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Änderungen oder Eingriffe des Auftraggebers oder Dritter an implementierten Systemen</li>
                    <li>Nichtbeachtung von Betriebs- oder Nutzungshinweisen</li>
                    <li>Änderungen, Ausfälle oder Inkompatibilitäten bei Drittanbieter-APIs und -Diensten</li>
                    <li>Einsatz außerhalb des vereinbarten Verwendungszwecks oder in nicht vorgesehenen Systemumgebungen</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    7.4 Der Auftragnehmer wählt Art und Weise der Mängelbeseitigung nach eigenem Ermessen. Schlägt die Verbesserung zweimal fehl, steht dem Auftraggeber Preisminderung oder Wandlung zu.
                  </p>
                </div>

                {/* § 8 */}
                <div className="text-left space-y-4 mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">§ 8 KI-spezifische Bestimmungen und EU AI Act</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    8.1 Die vom Auftragnehmer entwickelten KI-Systeme fallen nach derzeitiger Einschätzung in die Kategorie Minimales oder Begrenztes Risiko gem. Verordnung (EU) 2024/1689 (EU AI Act). Der Auftragnehmer gibt keine Garantie ab, dass eingesetzte Modelle dauerhaft einer bestimmten Risikokategorie angehören.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    8.2 Der Auftraggeber trägt die alleinige Verantwortung dafür, die implementierten KI-Systeme rechtskonform einzusetzen und selbst zu prüfen, ob der Einsatz den Anforderungen des EU AI Act, der DSGVO sowie sonstiger Vorschriften genügt.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    8.3 Soll eine implementierte Lösung in einem Bereich eingesetzt werden, der nach EU AI Act als Hochrisiko-KI-System einzustufen wäre (Art. 6 i.V.m. Anhang III EU AI Act), hat der Auftraggeber den Auftragnehmer vorab schriftlich zu informieren. Ohne Information und gesonderte Vereinbarung ist ein solcher Einsatz untersagt.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    8.4 KI-generierte Ausgaben können Ungenauigkeiten oder Fehler enthalten (sog. Halluzinationen). Der Auftraggeber ist verpflichtet, ein angemessenes menschliches Kontrollverfahren (Human-in-the-Loop) zu implementieren und alle KI-generierten Ergebnisse vor geschäftlicher Verwendung zu prüfen. Der Auftragnehmer haftet nicht für Schäden aus einer unkritischen oder automatisierten Weiterverwendung.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    8.5 Der Auftraggeber ist verpflichtet, beim Einsatz der KI-Systeme gegenüber seinen Kunden und betroffenen Personen die gesetzlich vorgeschriebenen Transparenzhinweise zum KI-Einsatz zu erteilen (Art. 50 EU AI Act). Der Auftragnehmer haftet nicht für Verstöße des Auftraggebers gegen Transparenzpflichten.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    8.6 Für KI-gestützte Outreach-Maßnahmen (LinkedIn, E-Mail, Anruf) ist der Auftraggeber allein verantwortlich für die Einhaltung von TKG, DSGVO, Spam- und Wettbewerbsrecht.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    8.7 Der Auftragnehmer unterstützt den Auftraggeber auf Wunsch bei der Erstellung von Dokumentation gemäß EU AI Act als gesondert zu vergütende Leistung.
                  </p>
                </div>

                {/* § 9 */}
                <div className="text-left space-y-4 mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">§ 9 Haftungsbeschränkung</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    9.1 Der Auftragnehmer haftet - soweit gesetzlich zulässig - ausschließlich für Schäden durch grob fahrlässiges oder vorsätzliches Verhalten. Jede Haftung für leichte Fahrlässigkeit ist vollständig ausgeschlossen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    9.2 Die Gesamthaftung je Schadensfall ist auf die im jeweiligen Einzelauftrag vereinbarte Nettogesamtvergütung beschränkt.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    9.3 Die Haftung für mittelbare Schäden, Folgeschäden, entgangenen Gewinn, Datenverlust, Betriebsunterbrechung und immaterielle Schäden ist vollständig ausgeschlossen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    9.4 Der Auftragnehmer haftet nicht für:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Ausfälle oder Änderungen von Drittanbieter-Diensten (Google Vertex AI/Gemini, OpenAI/Azure, n8n/IONOS, fonio.ai, Unipile, Supabase, Supachat u.a.)</li>
                    <li>Schäden durch ungeprüft weiterverwendete KI-Ausgaben</li>
                    <li>Schäden durch fehlerhafte Informationen oder mangelnde Mitwirkung des Auftraggebers</li>
                    <li>Schäden durch Nichtbefolgung von Betriebs- oder Sicherheitshinweisen</li>
                    <li>Einsatz der Lösung außerhalb des vereinbarten Verwendungszwecks</li>
                    <li>Rechtsverstöße des Auftraggebers gegen EU AI Act, DSGVO, TKG, Wettbewerbs- oder Spam-Recht</li>
                    <li>Missbrauch von Zugangsdaten im Einflussbereich des Auftraggebers</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    9.5 Der Auftraggeber trägt das alleinige unternehmerische Risiko für Entscheidungen auf Basis KI-generierter Daten, Empfehlungen oder Inhalte.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    9.6 Der Auftraggeber stellt den Auftragnehmer von allen Ansprüchen Dritter frei, die aus dem rechtswidrigen Einsatz der implementierten Systeme entstehen.
                  </p>
                </div>

                {/* § 10 */}
                <div className="text-left space-y-4 mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">§ 10 Geistiges Eigentum und Nutzungsrechte</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    10.1 Mit vollständiger Bezahlung räumt der Auftragnehmer dem Auftraggeber ein einfaches, nicht übertragbares, zeitlich und räumlich unbeschränktes Nutzungsrecht an den individuell erstellten Projektergebnissen ein.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    10.2 Allgemeines Know-how, Methoden, Frameworks, Vorlagen, Workflow-Bausteine, Prompt-Templates und sonstige Tools des Auftragnehmers verbleiben ausschließlich beim Auftragnehmer, auch wenn sie im Projekt eingesetzt wurden.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    10.3 Vor vollständiger Bezahlung ist jede Nutzung, Weitergabe oder Veröffentlichung von Projektergebnissen untersagt.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    10.4 Implementierte Lösungen dürfen ohne schriftliche Zustimmung des Auftragnehmers nicht an Dritte weitergegeben, lizenziert, verkauft oder als eigene Leistung angeboten werden.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    10.5 Soweit Open-Source-Software (insb. n8n) eingesetzt wird, gelten ergänzend die jeweiligen Open-Source-Lizenzbedingungen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    10.6 Der Auftragnehmer ist berechtigt, den Auftraggeber als Referenzkunden mit Name und Logo zu nennen, sofern nicht schriftlich widersprochen wird.
                  </p>
                </div>

                {/* § 11 */}
                <div className="text-left space-y-4 mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">§ 11 Vertraulichkeit</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    11.1 Beide Parteien verpflichten sich, alle vertraulichen Informationen der jeweils anderen Partei strikt geheim zu halten, nicht an Dritte weiterzugeben und ausschließlich zur Vertragsdurchführung zu verwenden.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    11.2 Als vertraulich gelten insbesondere: Geschäftsprozesse, Kundendaten, Preisgestaltung, technische Konzepte, Workflow-Architekturen und Strategien.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    11.3 Die Vertraulichkeitspflicht gilt nicht für allgemein bekannte Informationen oder solche, die dem Empfänger bereits vor Zusammenarbeit rechtmäßig bekannt waren.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    11.4 Die Vertraulichkeitsverpflichtung gilt für drei Jahre nach Vertragsende fort.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    11.5 Bei nachgewiesener schuldhafter Verletzung ist eine Vertragsstrafe von EUR 5.000,- pro Einzelfall fällig, unbeschadet weitergehender Schadenersatzansprüche.
                  </p>
                </div>

                {/* § 12 */}
                <div className="text-left space-y-4 mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">§ 12 Datenschutz und DSGVO</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    12.1 Der Auftragnehmer verarbeitet personenbezogene Daten des Auftraggebers ausschließlich zur Vertragsdurchführung auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO. Datenschutzerklärung: www.ki-kanzlei.at/datenschutz.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    12.2 Soweit der Auftragnehmer personenbezogene Daten des Auftraggebers oder dessen Kunden verarbeitet, ist vor Beginn der Verarbeitung ein Auftragsverarbeitungsvertrag (AVV) gem. Art. 28 DSGVO abzuschließen. Ohne AVV erfolgt keine Verarbeitung personenbezogener Daten.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    12.3 Der Auftraggeber haftet allein für die Rechtmäßigkeit der von ihm bereitgestellten Daten und stellt den Auftragnehmer von allen daraus entstehenden Ansprüchen frei.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    12.4 Beim Einsatz von KI-Systemen, die personenbezogene Daten verarbeiten (insb. Outreach-Agents, Anrufassistent, Multi-Channel), stellt der Auftraggeber eigenverantwortlich sicher, dass Rechtsgrundlage und Informationspflichten gem. Art. 6 und 13/14 DSGVO erfüllt sind.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    12.5 EU-Hosting und DSGVO-Konformität der eingesetzten Infrastruktur: Alle vom Auftragnehmer eingesetzten Drittanbieter-Dienste werden ausschließlich auf Servern innerhalb der Europäischen Union betrieben oder sind technisch auf EU-Datenhaltung konfiguriert. Im Einzelnen:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>n8n: Self-hosted auf IONOS-Server, Rechenzentrum Frankfurt am Main, Deutschland. IONOS ist ein deutsches Unternehmen und unterliegt vollständig der DSGVO.</li>
                    <li>Google Vertex AI / Gemini: Betrieb ausschließlich über EU-Regional-Endpoints (europe-west4/europe-west3). Google bietet Data Residency für ML-Verarbeitung und Datenspeicherung innerhalb der EU bei Nutzung regionaler Endpoints. Kundendaten werden von Google nicht für das Training eigener Modelle verwendet.</li>
                    <li>OpenAI: Zugriff ausschließlich über Microsoft Azure EU-Server (Rechenzentrum Europa). Datenverarbeitung erfolgt innerhalb der EU.</li>
                    <li>Supabase: Gehostet in der AWS-Region eu-central-1, Rechenzentrum Frankfurt am Main, Deutschland.</li>
                    <li>fonio.ai: Server-Standort Nürnberg, Deutschland, betrieben über Hetzner Online GmbH (Sitz: Industriestr. 25, 91710 Gunzenhausen, Deutschland). fonio GmbH mit Sitz in Wien, Österreich (Joanelligasse 5/16, 1060 Wien).</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    12.6 Trotz EU-Hosting haben die eingesetzten Drittanbieter eigene Datenschutzbestimmungen und Auftragsverarbeitungsverträge. Deren vollständige Einhaltung durch den Auftraggeber im Rahmen seiner eigenen Datenverarbeitungsaktivitäten liegt in seiner Verantwortung.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    12.7 Der Auftragnehmer kann auf Anfrage Nachweise über die EU-Konformität der eingesetzten Infrastruktur (z.B. Zertifikate, Datenverarbeitungsverträge mit Drittanbietern) zur Verfügung stellen.
                  </p>
                </div>

                {/* § 13 */}
                <div className="text-left space-y-4 mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">§ 13 Höhere Gewalt</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    13.1 Der Auftragnehmer haftet nicht für Nichterfüllung oder Verzögerungen durch Ereignisse außerhalb seines Einflussbereichs (höhere Gewalt), insbesondere: Naturkatastrophen, Pandemien, Krieg, Cyberangriffe auf Infrastruktur Dritter, Internetausfälle, Ausfälle von Cloud- oder KI-Diensten Dritter (Google/Vertex AI, Microsoft Azure, OpenAI, fonio.ai, IONOS) sowie behördliche Maßnahmen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    13.2 In solchen Fällen ist der Auftragnehmer berechtigt, Leistungen zu verzögern oder den Vertrag ohne Schadenersatzpflicht zu kündigen.
                  </p>
                </div>

                {/* § 14 */}
                <div className="text-left space-y-4 mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">§ 14 Laufzeit und Kündigung</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    14.1 Projektverträge enden mit vollständiger Abnahme und Bezahlung.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    14.2 Retainer-/Abonnementverträge laufen auf unbestimmte Zeit und können von beiden Parteien mit 30 Tagen Frist zum Monatsende schriftlich ordentlich gekündigt werden. Eine Mindestvertragslaufzeit von sechs Monaten gilt stets. Eine ordentliche Kündigung ist frühestens zum Ablauf der Mindestvertragslaufzeit möglich.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    14.3 Fristlose außerordentliche Kündigung aus wichtigem Grund bleibt unberührt. Wichtige Gründe für den Auftragnehmer: Zahlungsverzug &gt;14 Tage trotz Mahnung, wesentliche Verletzung der Mitwirkungspflichten, Insolvenz des Auftraggebers, Verletzung von Vertraulichkeits- oder Datenschutzpflichten.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    14.4 Alle bis zur Beendigung erbrachten Leistungen bleiben vollständig vergütungspflichtig. Anzahlungen werden nur anteilig für nachweislich nicht erbrachte Leistungen erstattet.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    14.5 Nach Vertragsende ist der Auftragnehmer berechtigt, alle Systemzugänge zu sperren. Datenmigration und Übergabe sind gesondert zu vereinbaren und zu vergüten.
                  </p>
                </div>

                {/* § 15 */}
                <div className="text-left space-y-4 mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">§ 15 Schlussbestimmungen</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    15.1 Es gilt österreichisches Recht unter Ausschluss der Kollisionsnormen des IPR sowie des UN-Kaufrechts (CISG).
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    15.2 Ausschließlicher Gerichtsstand ist das sachlich zuständige Gericht in Krems an der Donau, Österreich.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    15.3 Sollten einzelne Bestimmungen unwirksam sein, berührt dies die Gültigkeit der übrigen nicht (salvatorische Klausel). Die unwirksame Bestimmung ist durch eine wirtschaftlich gleichwertige zu ersetzen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    15.4 Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    15.5 Für laufende Retainer-Verträge ist der Auftragnehmer berechtigt, diese AGB mit 30 Tagen Vorankündigung anzupassen. Ohne schriftlichen Widerspruch gelten die aktualisierten AGB als angenommen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    15.6 Der Auftraggeber bestätigt mit Vertragsschluss, diese AGB vollständig gelesen, verstanden und akzeptiert zu haben. Die AGB sind vor Vertragsschluss zu übergeben; eine bloß rückseitige Aufnahme auf Rechnungen oder Lieferscheinen genügt nicht.
                  </p>
                </div>

                {/* § 16 */}
                <div className="text-left space-y-4 mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">§ 16 Preisanpassung</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    16.1 Bei Retainer-Verträgen auf unbestimmte Zeit ist der Auftragnehmer berechtigt, jährlich eine angemessene Preisanpassung unter Berücksichtigung des österreichischen Verbraucherpreisindex (VPI) vorzunehmen. Die Anpassung wird dem Auftraggeber 30 Tage im Voraus schriftlich bekanntgegeben.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    16.2 Darüber hinaus ist der Auftragnehmer berechtigt, nach Vertragsabschluss eine Preisanpassung vorzunehmen, wenn sich die Kosten der Leistungserbringung - insbesondere Drittanbieter-API-Kosten - um mehr als 5 % erhöhen, ohne dass dies vom Auftragnehmer beeinflussbar ist.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    16.3 Ungerechtfertigter Rücktritt: Tritt der Auftraggeber ohne grob fahrlässiges oder vorsätzliches Verschulden des Auftragnehmers ganz oder teilweise vom Auftrag zurück, gebührt dem Auftragnehmer trotzdem die vereinbarte Vergütung. Der Auftragnehmer muss sich lediglich Ersparnisse aus noch nicht getätigten Zukäufen anrechnen lassen.
                  </p>
                </div>

                {/* § 17 */}
                <div className="text-left space-y-4 mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">§ 17 Abwerbeverbot und Treuepflichten</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    17.1 Der Auftraggeber verpflichtet sich, weder während der Vertragslaufzeit noch innerhalb von drei Jahren nach Vertragsende Mitarbeiter oder Subunternehmer des Auftragnehmers abzuwerben, direkt einzustellen oder mittelbar zu engagieren. Bei einem Verstoß gegen dieses Abwerbeverbot ist eine Konventionalstrafe in Höhe des Bruttojahresgehalts bzw. Jahreshonorars der abgeworbenen Person fällig.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    17.2 Die Vertragsparteien verpflichten sich gegenseitig, das Ansehen des jeweils anderen Vertragspartners zu wahren und gegenüber Dritten keine unbegründete Kritik zu äußern. Diese Verpflichtung gilt auch nach Vertragsende fort.
                  </p>
                </div>

                {/* § 18 */}
                <div className="text-left space-y-4 mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">§ 18 Ergänzende Haftungs- und Verfahrensbestimmungen</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    18.1 Beweislast: Eine Beweislastumkehr zu Lasten des Auftragnehmers ist ausgeschlossen. Das Vorliegen eines Mangels zum Übergabezeitpunkt, der Zeitpunkt der Feststellung des Mangels, die Rechtzeitigkeit der Mängelrüge sowie das Vorliegen und der Grad eines Verschuldens sind vom Auftraggeber zu beweisen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    18.2 Irrtum und Läsion: Das Recht zur Anfechtung wegen Irrtums sowie wegen Verkürzung über die Hälfte (laesio enormis, § 934 ABGB) ist ausgeschlossen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    18.3 Nachfrist: Im Fall einer nicht vereinbarungsgemäßen Vertragserfüllung ist der Auftraggeber erst dann zur Geltendmachung von Schadenersatz- oder sonstigen Ansprüchen berechtigt, wenn er dem Auftragnehmer schriftlich eine angemessene Nachfrist von mindestens 14 Tagen gewährt hat. Dies gilt auch für die Auflösung des Vertrages aus wichtigem Grund.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    18.4 Vertragsrücktritt: Ein Rücktritt vom Vertrag durch den Auftraggeber ist schriftlich per eingeschriebenem Brief oder per E-Mail mit Lesebestätigung zu erklären.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    18.5 Schutzwirkung: Dieser Vertrag entfaltet keine Schutzwirkung zugunsten Dritter.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    18.6 ECG-Informationspflichten: Die in § 9 Abs. 1 Z 1-4 ECG normierten Informationspflichten des Auftragnehmers bei Vertragsschlüssen im elektronischen Geschäftsverkehr werden abbedungen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    18.7 Eingriffe des Auftraggebers: Nimmt der Auftraggeber eigenmächtig und ohne Abstimmung Änderungen an implementierten Systemen vor, haftet er für den dadurch entstehenden Mehraufwand des Auftragnehmers für Fertigstellung, Nachprüfung, Dokumentation, Mängelfeststellung und -behebung. Die Gewährleistungspflicht des Auftragnehmers entfällt für betroffene Leistungsteile.
                  </p>
                </div>

                {/* § 19 */}
                <div className="text-left space-y-4 mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">§ 19 Support und Fehlerklassen (Retainer-Verträge)</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    19.1 Für Retainer-Verträge gelten folgende Fehlerklassen und Reaktionszeiten als Richtwerte. Verbindliche Service Level Agreements (SLA) bedürfen einer gesonderten schriftlichen Vereinbarung:
                  </p>
                  <ul className="list-none text-muted-foreground space-y-3 ml-4">
                    <li><strong>Klasse 1 (Kritisch):</strong> Die implementierte Lösung ist vollständig ausgefallen oder nicht nutzbar. Reaktionszeitbeginn: 24 Stunden (Werktage).</li>
                    <li><strong>Klasse 2 (Wesentlich):</strong> Die Nutzung ist erheblich eingeschränkt, aber eine Weiterverwendung bleibt möglich. Reaktionszeitbeginn: 72 Stunden (Werktage).</li>
                    <li><strong>Klasse 3 (Geringfügig):</strong> Die Nutzung ist leicht eingeschränkt, Betrieb bleibt im Wesentlichen möglich. Bearbeitung: innerhalb von 4 Wochen.</li>
                    <li><strong>Klasse 4 (Kosmetisch):</strong> Keine funktionale Einschränkung. Bearbeitung: nach Ermessen des Auftragnehmers.</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    19.2 Mängelrügen sind schriftlich an info@ki-kanzlei.at zu richten und müssen enthalten: genaue Fehlerbeschreibung, Zeitpunkt des Auftretens, betroffene Systemkomponenten und wirtschaftliche Auswirkungen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    19.3 Schulungen und laufende Erklärungen aufgrund von Wissensdefiziten des Auftraggebers sind nicht im Retainer enthalten und werden gesondert vergütet.
                  </p>
                </div>

                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <FooterModern />
    </div>
  );
};

export default AGB;
