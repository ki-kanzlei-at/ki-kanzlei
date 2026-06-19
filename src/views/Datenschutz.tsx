import { NavigationHome } from "@/components/NavigationHome";
import { FooterModern } from "@/components/FooterModern";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Datenschutz = () => {
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
              Datenschutzerklärung
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Wie die KI Kanzlei Ihre Daten verarbeitet und welche Rechte Sie nach DSGVO haben.
            </p>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="border-2">
              <CardContent className="p-6 md:p-10">
                <div className="space-y-10 text-muted-foreground">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  I. Welche Daten verarbeiten wir, wenn Sie unsere Website besuchen?
                </h2>

                <div className="text-left space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Willkommen auf unserer Website! Bitte bekommen Sie ein Bild darüber, wie wir Ihre personenbezogenen Daten verarbeiten, wenn Sie unsere Website besuchen (Art 13, Art 14 DSGVO; § 165 Abs 3 TKG).
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    Beim Besuch unserer Website können folgende Daten verarbeitet werden:
                  </p>

                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Browsertyp,</li>
                    <li>Betriebssystem,</li>
                    <li>Land,</li>
                    <li>Datum,</li>
                    <li>Uhrzeit und Dauer des Zugriffs,</li>
                    <li>Name des Access-Providers,</li>
                    <li>IP-Adresse und besuchte Seiten auf unserer Webseite inklusive Ein- und Ausstiegsseiten,</li>
                    <li>Kontaktseite auf Website,</li>
                    <li>Daten im Zuge der Vorbereitung des Erstgespräches</li>
                    <li>Newsletter</li>
                    <li>Live-Chat (Chatwoot)</li>
                  </ul>

                  <p className="text-muted-foreground leading-relaxed">
                    Die Verarbeitung dieser Daten ist erforderlich, um die Sicherheit des Betriebes der Website zu bewerkstelligen und die Funktionalität der Website aus technischen Gesichtspunkten sicherzustellen. Die Erhebung dieser Daten erfolgt zum Teil über technische Cookies. Diese technischen Cookies werden nur im notwendigen Umfang eingesetzt (§ 165 Abs 3 TKG). Die Verarbeitung dieser Daten ist durch unser berechtigtes Interesse am Betrieb unserer Website gerechtfertigt (Art 6 Abs 1 lit f DSGVO).
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    Für den Betrieb unserer Website kann es notwendig sein, dass wir Ihre Daten den folgenden Empfängern offenlegen:
                  </p>

                  <div className="space-y-6 mt-6">

                    <div className="bg-muted/50 border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Empfänger Daten: Cookie-Management-System CookieScript</h3>
                      <p className="text-sm text-muted-foreground">Zweck der Datenverarbeitung: E-Commerce-Agentur</p>
                      <p className="text-sm text-muted-foreground">Rechtsgrundlage der Datenverarbeitung: Überwiegend berechtigtes Interesse (Art 6 Abs 1 lit f DSGVO); Auftragsverarbeitervertrag nach Art 28 DSGVO</p>
                      <p className="text-sm text-muted-foreground">Geschäftssitz: Deutschland</p>
                    </div>

                    <div className="bg-muted/50 border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Empfänger Daten: Cookie-Management-System CookieScript</h3>
                      <p className="text-sm text-muted-foreground">Zweck der Datenverarbeitung: Cookie Management Tool</p>
                      <p className="text-sm text-muted-foreground">Rechtsgrundlage der Datenverarbeitung: Überwiegend berechtigtes Interesse (Art 6 Abs 1 lit f DSGVO)</p>
                      <p className="text-sm text-muted-foreground">Geschäftssitz: Laisves st. 60, LT-05120 Vilnius, Lithuania</p>
                    </div>

                    <div className="bg-muted/50 border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Empfänger Daten: Typeform</h3>
                      <p className="text-sm text-muted-foreground">Zweck der Datenverarbeitung: Datenerfassungs-Tool welches dabei hilft im Weg der Beantwortung von Fragen die Bedürfnisse der Kunden/Interessenten besser einzuschätzen</p>
                      <p className="text-sm text-muted-foreground">Rechtsgrundlage der Datenverarbeitung: Einwilligung (Art 6 Abs 1 lit a DSGVO)</p>
                      <p className="text-sm text-muted-foreground">Geschäftssitz: Spanien</p>
                      <p className="text-sm text-muted-foreground">Sichere Übermittlung in ein Drittland: Innerhalb der EU</p>
                    </div>

                    <div className="bg-muted/50 border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Empfänger Daten: Calendly LLC</h3>
                      <p className="text-sm text-muted-foreground">Zweck der Datenverarbeitung: Tool zur Vereinbarung von Terminen</p>
                      <p className="text-sm text-muted-foreground">Rechtsgrundlage der Datenverarbeitung: Überwiegend berechtigtes Interesse (Art 6 Abs 1 lit f DSGVO)</p>
                      <p className="text-sm text-muted-foreground">Geschäftssitz: USA</p>
                      <p className="text-sm text-muted-foreground">Sichere Übermittlung in ein Drittland: Calendly LLC ist EU-US-Data Privacy Framework gelistet (Non-HR Data)</p>
                    </div>

                    <div className="bg-muted/50 border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Empfänger Daten: Microsoft Teams, Google Meets, Zoom</h3>
                      <p className="text-sm text-muted-foreground">Zweck der Datenverarbeitung: Online-Besprechung</p>
                      <p className="text-sm text-muted-foreground">Rechtsgrundlage der Datenverarbeitung: Überwiegend berechtigtes Interesse (Art 6 Abs 1 lit f DSGVO)</p>
                      <p className="text-sm text-muted-foreground">Geschäftssitz: USA</p>
                      <p className="text-sm text-muted-foreground">Sichere Übermittlung in ein Drittland: Microsoft, Google und Zoom sind jeweils EU-US-Data Privacy Framework gelistet</p>
                    </div>

                    <div className="bg-muted/50 border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Empfänger Daten: Aircall SAS</h3>
                      <p className="text-sm text-muted-foreground">Zweck der Datenverarbeitung: Telefon-Tool und Transkription eines Anrufes</p>
                      <p className="text-sm text-muted-foreground">Rechtsgrundlage der Datenverarbeitung: Einwilligung (Art 6 Abs 1 lit a DSGVO)</p>
                      <p className="text-sm text-muted-foreground">Geschäftssitz: Frankreich</p>
                      <p className="text-sm text-muted-foreground">Sichere Übermittlung in ein Drittland: Innerhalb der EU</p>
                    </div>

                    <div className="bg-muted/50 border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Empfänger Daten: fonio.ai GmbH</h3>
                      <p className="text-sm text-muted-foreground">Zweck der Datenverarbeitung: Erbringung von KI-Sprachdiensten (Text-to-Speech, Speech-to-Text), Voice-Agent-Funktionalität und Datenverarbeitung gemäß Data Processing Addendum (DPA).</p>
                      <p className="text-sm text-muted-foreground">Rechtsgrundlage der Datenverarbeitung: Einwilligung (Art 6 Abs 1 lit a DSGVO); Auftragsverarbeitervertrag (DPA) nach Art 28 DSGVO.</p>
                      <p className="text-sm text-muted-foreground">Geschäftssitz: Österreich</p>
                      <p className="text-sm text-muted-foreground">Serverstandort: Hetzner, Nürnberg (DE) - Innerhalb der EU, DSGVO-konform.</p>
                    </div>

                    <div className="bg-muted/50 border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Empfänger Daten: Cal.com, Inc. (Cal.ai)</h3>
                      <p className="text-sm text-muted-foreground">Zweck der Datenverarbeitung: Tool zur Terminbuchung und KI-gestützte Planung von Terminen (Cal.ai).</p>
                      <p className="text-sm text-muted-foreground">Rechtsgrundlage der Datenverarbeitung: Überwiegend berechtigtes Interesse (Art 6 Abs 1 lit f DSGVO) bzw. Einwilligung (Art 6 Abs 1 lit a DSGVO).</p>
                      <p className="text-sm text-muted-foreground">Geschäftssitz: USA</p>
                      <p className="text-sm text-muted-foreground">Sichere Übermittlung in ein Drittland: Cal.com nutzt Standardvertragsklauseln (SCCs) zur Absicherung der Datenübertragung.</p>
                    </div>

                    <div className="bg-muted/50 border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Empfänger Daten: Google LLC (Google Analytics 4, Google Tag Manager, Google reCAPTCHA)</h3>
                      <p className="text-sm text-muted-foreground">Zweck der Datenverarbeitung: Statistische Auswertung der Website; Analyse der Websitebesuche; Schutz vor Spam und Missbrauch durch Bot-Erkennung</p>
                      <p className="text-sm text-muted-foreground">Rechtsgrundlage der Datenverarbeitung: Einwilligung (Art 6 Abs 1 lit a DSGVO) für Analytics; Überwiegend berechtigtes Interesse (Art 6 Abs 1 lit f DSGVO) für reCAPTCHA zur Sicherstellung der Netz- und Informationssicherheit</p>
                      <p className="text-sm text-muted-foreground">Geschäftssitz: USA</p>
                      <p className="text-sm text-muted-foreground">Sichere Übermittlung in ein Drittland: Google LLC ist EU-US-Data Privacy Framework gelistet</p>
                    </div>

                    <div className="bg-muted/50 border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Empfänger Daten: Meta Platforms Inc (Facebook)</h3>
                      <p className="text-sm text-muted-foreground">Zweck der Datenverarbeitung: Statistische Auswertung der Website; Analyse der Websitebesuche</p>
                      <p className="text-sm text-muted-foreground">Rechtsgrundlage der Datenverarbeitung: Einwilligung (Art 6 Abs 1 lit a DSGVO)</p>
                      <p className="text-sm text-muted-foreground">Geschäftssitz: USA</p>
                      <p className="text-sm text-muted-foreground">Sichere Übermittlung in ein Drittland: Meta Platforms Inc ist EU-US-Data Privacy Framework gelistet (jedoch nur hinsichtlich Non-HR Data)</p>
                    </div>

                    <div className="bg-muted/50 border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Empfänger Daten: Cloudflare, Inc</h3>
                      <p className="text-sm text-muted-foreground">Zweck der Datenverarbeitung: Während des Aufrufs der Website wird der Benutzer getrackt um die User-Experience zu optimieren und individuelle Lösungen anzubieten</p>
                      <p className="text-sm text-muted-foreground">Rechtsgrundlage der Datenverarbeitung: Einwilligung (Art 6 Abs 1 lit a DSGVO);</p>
                      <p className="text-sm text-muted-foreground">Geschäftssitz: USA</p>
                      <p className="text-sm text-muted-foreground">Sichere Übermittlung in ein Drittland: Cloudflare, Inc ist EU-US-Data Privacy Framework gelistet</p>
                    </div>

                    <div className="bg-muted/50 border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Empfänger Daten: HubSpot, Inc und Newsletter</h3>
                      <p className="text-sm text-muted-foreground">Zweck der Datenverarbeitung: Customer Relationship Management</p>
                      <p className="text-sm text-muted-foreground">Rechtsgrundlage der Datenverarbeitung:  Überwiegend berechtigtes Interesse (Art 6 Abs 1 lit f DSGVO)</p>
                      <p className="text-sm text-muted-foreground">Geschäftssitz: USA</p>
                      <p className="text-sm text-muted-foreground">Sichere Übermittlung in ein Drittland: HubSpot, Inc ist EU-US-Data Privacy Framework gelistet (allerdings nur hinsichtlich Non-HR Data)</p>
                    </div>

                    <div className="bg-muted/50 border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Empfänger Daten: SevDesk GmbH</h3>
                      <p className="text-sm text-muted-foreground">Zweck der Datenverarbeitung: Buchhaltungs-Software</p>
                      <p className="text-sm text-muted-foreground">Rechtsgrundlage der Datenverarbeitung: Vertragliche Notwendigkeit (Art 6 Abs 1 lit b DSGVO)</p>
                      <p className="text-sm text-muted-foreground">Geschäftssitz: Deutschland</p>
                      <p className="text-sm text-muted-foreground">Sichere Übermittlung in ein Drittland: Innerhalb der EU</p>
                    </div>

                    <div className="bg-muted/50 border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Empfänger Daten: Erste Bank</h3>
                      <p className="text-sm text-muted-foreground">Zweck der Datenverarbeitung: Bank</p>
                      <p className="text-sm text-muted-foreground">Rechtsgrundlage der Datenverarbeitung: Vertragliche Notwendigkeit (Art 6 Abs 1 lit b DSGVO)</p>
                      <p className="text-sm text-muted-foreground">Geschäftssitz: Österreich</p>
                      <p className="text-sm text-muted-foreground">Sichere Übermittlung in ein Drittland: Innerhalb der EU</p>
                    </div>

                    <div className="bg-muted/50 border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Empfänger Daten: Rechtsanwalt (Dr. Tobias Tretzmüller, LL.M.)</h3>
                      <p className="text-sm text-muted-foreground">Zweck der Datenverarbeitung: Geltendmachung einer Forderung und Abwehr von Rechtsansprüchen</p>
                      <p className="text-sm text-muted-foreground">Rechtsgrundlage der Datenverarbeitung: Vertragliche Notwendigkeit (Art 6 Abs 1 lit b DSGVO)</p>
                      <p className="text-sm text-muted-foreground">Geschäftssitz: Österreich</p>
                      <p className="text-sm text-muted-foreground">Sichere Übermittlung in ein Drittland: Innerhalb der EU</p>
                    </div>

                    <div className="bg-muted/50 border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Empfänger Daten: Steuerberatung</h3>
                      <p className="text-sm text-muted-foreground">Zweck der Datenverarbeitung: Steuerberatung</p>
                      <p className="text-sm text-muted-foreground">Rechtsgrundlage der Datenverarbeitung: Vertragliche Notwendigkeit (Art 6 Abs 1 lit b DSGVO)</p>
                      <p className="text-sm text-muted-foreground">Geschäftssitz: Österreich</p>
                      <p className="text-sm text-muted-foreground">Sichere Übermittlung in ein Drittland: Innerhalb der EU</p>
                    </div>

                    <div className="bg-muted/50 border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Empfänger Daten: Chatwoot Inc.</h3>
                      <p className="text-sm text-muted-foreground">Zweck der Datenverarbeitung: Bereitstellung einer Live-Chat-Funktionalität zur Kundenbetreuung</p>
                      <p className="text-sm text-muted-foreground">Rechtsgrundlage der Datenverarbeitung: Einwilligung (Art 6 Abs 1 lit a DSGVO) oder Überwiegend berechtigtes Interesse (Art 6 Abs 1 lit f DSGVO)</p>
                      <p className="text-sm text-muted-foreground">Geschäftssitz: USA</p>
                      <p className="text-sm text-muted-foreground">Sichere Übermittlung in ein Drittland: Chatwoot nutzt Standardvertragsklauseln (SCCs) und ist Teil des EU-US Data Privacy Frameworks.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  II.1. Übersicht der eingesetzten „technischen“ Cookies
                </h2>

                <div className="text-left space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Die oben genannten Daten werden über sogenannte „Cookies“[1] gespeichert. Cookies sind Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Webseite ermöglichen. Sie dienen zur Wiedererkennung und Speicherung temporärer Daten des Homepagebesucher. Wir nutzen Cookies grundsätzlich nur im erforderlichen Umfang um über die Homepage mit Ihnen zu kommunizieren.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    Diese technischen Cookies sind aktiviert, sobald Sie unsere Website besuchen.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    Folgende Cookies werden auf Basis unseres überwiegend berechtigten Interesses (Art 6 Abs 1 lit f DSGVO) auf unserer Website eingesetzt:
                  </p>

                  <p className="text-xs text-muted-foreground/70 mt-4">
                    [1] Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern. Wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Homepage vollumfänglich nutzen können.
                  </p>
                </div>
              </div>

              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  II.2. Übersicht über die eingesetzten „Werbe-Cookies“
                </h2>

                <div className="text-left space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Neben den oben beschriebenen „technischen Cookies“ setzen wir auch sogenannte Werbe-Cookies (inklusive „Statistische Cookies“) ein. Diese Werbe-Cookies ermöglichen es, Ihre Interessen besser nachvollziehen und auswerten zu können. Mithilfe der Werbe-Cookies können wir Ihr „Surfverhalten“ über die Grenzen unserer Website hinweg mit Daten von anderen Websites zusammenführen. Dadurch möchten wir in die Lage versetzt werden, die Interessen unserer Homepagebesucher besser zu verstehen und diese gezielter ansprechen zu können.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    Wir respektieren, dass dies nicht jeder Besucher der Website möchte. Daher verarbeiten wir Ihre Daten im Zuge von Werbe-Cookies nur, wenn Sie damit einverstanden sind (Art 6 Abs 1 lit a DSGVO). Diese Einwilligung können Sie jederzeit widerrufen, wobei die bis zum Zeitpunkt des Widerrufes erfolgte Datenverarbeitung gerechtfertigt bleibt.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    Eine Liste der Werbe-Cookies finden Sie hier:
                  </p>

                  <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 mt-4">
                    <h3 className="font-bold text-foreground mb-3 text-lg">Google Analytics 4 (GA4)</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Wir nutzen Google Analytics 4, um das Nutzerverhalten auf unserer Website zu analysieren. Dabei werden Ereignisse (Events) wie Klicks auf Buttons, Formular-Starts und Seitenaufrufe erfasst. Zudem nutzen wir Attribution-Tracking, um die Herkunft unserer Besucher (z.B. über UTM-Parameter) besser zu verstehen und unsere Marketingaktivitäten zu optimieren.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Die Daten werden anonymisiert verarbeitet. Sie können Ihre Einwilligung jederzeit über unseren Cookie-Banner widerrufen.
                    </p>
                  </div>
                </div>
              </div>

              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  II.3. Schutz vor Missbrauch (Google reCAPTCHA)
                </h2>

                <div className="text-left space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Um für ausreichend Datensicherheit bei der Übermittlung von Formularen Sorge zu tragen, verwenden wir den Service reCAPTCHA des Unternehmens Google LLC. Dies dient primär zur Unterscheidung, ob die Eingabe durch eine natürliche Person erfolgt oder missbräuchlich durch maschinelle und automatisierte Verarbeitung erfolgt.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Der Service inkludiert den Versand der IP-Adresse und ggf. weiterer von Google für den Dienst reCAPTCHA benötigter Daten an Google. Hierfür gelten die abweichenden Datenschutzbestimmungen von Google. Weitere Informationen zu den Datenschutzrichtlinien von Google finden Sie unter: <a href="https://www.google.com/intl/de/policies/privacy/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.google.com/intl/de/policies/privacy/</a>.
                  </p>
                </div>
              </div>

              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  III. Für welche Zwecke verarbeiten wir Ihre Daten, wenn Sie sich für unser Unternehmen interessieren?
                </h2>

                <div className="text-left space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Im Zuge unserer Geschäftsbeziehung mit Kunden und Geschäftspartnern verarbeiten wir Daten aufgrund vertraglicher (Abwicklung des Vertragsverhältnisses mit Ihnen, vorvertragliche Verpflichtungen, Abrechnung von Leistungen, Versand von Dokumenten, Kommunikation zur Abwicklung des Vertrages) und gesetzlicher Verpflichtungen (gesetzlich erforderliche Aufbewahrung im Sinne des § 132 BAO) (Art 6 Abs 1 lit b und c DSGVO) sowie aufgrund unserer berechtigten Interessen oder aufgrund von berechtigten Interessen Dritter (Art 6 Abs 1 lit f DSGVO), nämlich:
                  </p>

                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>zum Zwecke der internen Administration und Verwaltung Ihres Geschäftsfalles im erforderlichen Umfang (z.B.: Bearbeitung Ihres Geschäftsfalles, Weitergabe Ihres Geschäftsfalles an Assistenz, Aktenablage, Archivierungszwecke, Korrespondenz mit Ihnen; Erbringung unserer Dienstleistung);</li>
                    <li>zum Zwecke der Direktwerbung (Newsletter, Werbung für eigene Produkte). Wir möchten Sie ausdrücklich darauf aufmerksam machen, dass Sie einer Datenverarbeitung für Werbezwecke jederzeit und grundlos widersprechen kannst (Art 21 Abs 2 DSGVO);</li>
                    <li>zum Zwecke der Bereitstellung unserer Dienstleistungen;</li>
                    <li>Geltendmachung und Abwehr von Rechtsansprüchen</li>
                  </ul>

                  <p className="text-muted-foreground leading-relaxed">
                    jeweils im erforderlichen Umfang. Die Verarbeitung Ihrer Daten dient der Anbahnung, Aufrechterhaltung und Abwicklung unserer Geschäftsbeziehungen. Wenn Sie uns diese Daten nicht zur Verfügung stellst, können wir Ihre Geschäftsfall leider nicht abwickeln.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    Gegebenenfalls verarbeiten wir Ihre Daten basierend auf Ihrer freiwilligen, ausdrücklichen Einwilligung (Art 6 Abs 1 lit a DSGVO).
                  </p>
                </div>
              </div>

              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  IV. Datenverarbeitung im Rahmen unseres Lead-Funnels (Whitepaper & Infomaterial)
                </h2>

                <div className="text-left space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Wenn Sie über unsere Website Infomaterial (z.B. die KI-Roadmap oder Whitepaper) anfordern, verarbeiten wir die von Ihnen im Formular eingegebenen Daten (Vorname, Nachname, E-Mail-Adresse, Telefonnummer).
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    Die Verarbeitung dieser Daten erfolgt zu folgenden Zwecken:
                  </p>

                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Zusendung des angeforderten Infomaterials per E-Mail;</li>
                    <li>Kontaktaufnahme zur Klärung von Rückfragen zum angeforderten Material;</li>
                    <li>Kurze telefonische oder schriftliche Nachfrage, ob das Material hilfreich war und ob Interesse an einer weiterführenden Analyse besteht.</li>
                  </ul>

                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Rechtsgrundlage:</strong> Die Verarbeitung erfolgt auf Basis der Durchführung vorvertraglicher Maßnahmen (Art 6 Abs 1 lit b DSGVO) sowie unseres berechtigten Interesses an der Lead-Generierung und Kundenbetreuung (Art 6 Abs 1 lit f DSGVO).
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Speicherdauer:</strong> Wir speichern diese Daten für die Dauer der Bearbeitung Ihrer Anfrage bzw. bis zu einem Jahr nach dem letzten Kontakt, sofern keine weitere Geschäftsbeziehung zustande kommt oder gesetzliche Aufbewahrungspflichten entgegenstehen.
                  </p>
                </div>
              </div>

              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  V. Wie lange werden Ihre Daten gespeichert?
                </h2>

                <div className="text-left space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Wir werden Ihre Daten nur so lange speichern, wie es für jene Zwecke erforderlich ist, für die wir Ihre Daten erhoben haben. In diesem Zusammenhang sind gesetzliche Aufbewahrungspflichten zu berücksichtigen (so sind etwa aus steuerrechtlichen Gründen Verträge und sonstige Dokumente aus unserem Vertragsverhältnis grundsätzlich für die Dauer von sieben Jahren aufzubewahren (§ 132 BAO)). In begründeten Einzelfällen, etwa zur Geltendmachung und Abwehr von Rechtsansprüchen, können wir Ihre Daten auch bis zu 30 Jahre nach Beendigung der Geschäftsbeziehung speichern.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    Daten von Interessenten speichern wir bis zu einem Jahre ab dem Zeitpunkt der letztmaligen Kontaktaufnahme durch den Interessenten.
                  </p>
                </div>
              </div>

              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  VI. Datenempfang aus dritten Quellen (Art 14 DSGVO)
                </h2>

                <div className="text-left space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Zum Zwecke der Geschäftsanbahnung können personenbezogene Daten aus nachstehenden Quellen empfangen werden:
                  </p>

                  <div className="bg-muted/50 border border-border rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">Quelle: KSV-Kreditschutzverband (Österreich); Leadify (Markus Wallner, Österreich); Geschäftspartner und Reseller mit Sitz in Deutschland (Christian Wilhelm Roth)</p>
                    <p className="text-sm text-muted-foreground">Art der Daten: Kontaktdaten: Telefonnummer, E-Mail, Website, Firma, LinedIn-Profil</p>
                  </div>
                </div>
              </div>

              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  VII. Welche Rechte stehen Ihnen hinsichtlich der Datenverarbeitung zu?
                </h2>

                <div className="text-left space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Wir möchten Sie darüber informieren, dass Sie, sofern die gesetzlichen Voraussetzungen dafür vorliegen:
                  </p>

                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Das Recht haben, Auskunft darüber zu verlangen, welche Daten von Dir bei uns verarbeitet werden (siehe im Detail Art 15 DSGVO).</li>
                    <li>Das Recht haben, die Berichtigung oder Vervollständigung Sie betreffender unrichtiger oder unvollständiger Daten zu verlangen (siehe im Detail Art 16 DSGVO).</li>
                    <li>Das Recht auf Löschung Ihrer Daten (siehe im Detail Art 17 DSGVO) haben.</li>
                    <li>Das Recht haben, gegen eine Verarbeitung Ihrer Daten, die zur Wahrung unserer berechtigten Interessen oder eines Dritten erforderlich sind, Widerspruch (siehe im Detail Art 21 DSGVO) einzulegen. Dies gilt insbesondere in Bezug auf die Verarbeitung Ihrer Daten für Werbezwecke.</li>
                    <li>Das Recht haben, die Übertragung der von Ihnen bereitgestellten Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</li>
                  </ul>

                  <p className="text-muted-foreground leading-relaxed">
                    Sofern wir Ihrer Daten auf Basis Deiner Einwilligung verarbeiten, haben Sie das Recht, diese Einwilligung jederzeit per E-Mail zu widerrufen. Dadurch wird die Rechtmäßigkeit der bis zu diesem Zeitpunkt erfolgten Datenverarbeitung nicht beeinträchtigt (Art 7 Abs 3 DSGVO).
                  </p>
                </div>
              </div>

              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  VIII. Welche Beschwerderechte stehen Ihnen zu?
                </h2>

                <div className="text-left space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Sollte es, wider Erwarten, zu einer Verletzung Deines Rechtes auf rechtmäßige Verarbeitung Ihrer Daten kommen, setzen Sie sich bitte mit uns postalisch oder per E-Mail in Verbindung. Wir werden uns bemühen, Ihr Anliegen umgehend zu bearbeiten. Sie haben aber auch das Recht, eine Beschwerde bei der für Sie zuständigen Aufsichtsbehörde für Datenschutzangelegenheiten zu erheben.
                  </p>

                  <div className="bg-muted/50 border border-border rounded-lg p-4">
                    <p className="text-muted-foreground font-semibold">Die Adresse der österreichischen Datenschutzbehörde lautet:</p>
                    <p className="text-muted-foreground mt-2">
                      Österreichische Datenschutzbehörde<br />
                      Barichgasse 40-42,<br />
                      1030 Wien
                    </p>
                  </div>
                </div>
              </div>

              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  IX. Wie können Sie mit uns Kontakt aufnehmen?
                </h2>

                <div className="text-left">
                  <p className="text-muted-foreground leading-relaxed">
                    Sollten Sie weitere Fragen zur Verarbeitung Ihrer Daten haben, können Sie sich gerne an unseren Datenschutzkoordinator per unten angeführten Kontaktdaten wenden.
                  </p>
                </div>
              </div>

              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  X. Verantwortliche
                </h2>

                <div className="text-left bg-muted/50 border border-border rounded-lg p-6">
                  <p className="text-muted-foreground font-semibold mb-4">Verantwortliche im Sinne des Art 4 Z 7 DSGVO ist:</p>
                  <p className="text-muted-foreground">Arnold Freissling</p>
                  <p className="text-muted-foreground">Anschrift: Rossatzbach 3/2, 3602 Rossatz</p>
                  <p className="text-muted-foreground">Telefonnummer: <a href="tel:+436642314676" className="text-primary hover:text-primary/80 transition-colors">+43 664 2314676</a></p>
                  <p className="text-muted-foreground">E-Mail: <a href="mailto:info@ki-kanzlei.at" className="text-primary hover:text-primary/80 transition-colors">info@ki-kanzlei.at</a></p>
                </div>
              </div>

              <div id="voice-agents" className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  XI. Einsatz von KI-Technologien / Voice Agents
                </h2>

                <div className="text-left space-y-4 pt-8 border-t border-border">
                  <h3 className="text-xl font-semibold text-foreground">Einsatz von fonio.ai (Voice Agents)</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Wir nutzen auf unserer Webseite die Dienste der fonio.ai GmbH (Österreich), um interaktive KI-Telefonassistenten bereitzustellen. Hierbei werden Ihre Spracheingaben verarbeitet, um eine Antwort zu generieren.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Rechtsgrundlage:</strong> Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO, die Sie vor Beginn der Interaktion erteilen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Serverstandort:</strong> Die Infrastruktur wird bei Hetzner in Nürnberg (DE) gehostet. Sämtliche Datenverarbeitung findet innerhalb der EU statt - eine Drittlandübermittlung ist nicht erforderlich.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>LLM-Partner:</strong> Die KI-Sprachdienste basieren auf Large Language Models (LLMs), insbesondere OpenAI. Um die DSGVO- und EU AI Act-Konformität sicherzustellen, werden diese über Microsoft Azure-Server in Europa betrieben.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Anbieter:</strong> fonio.ai GmbH, Österreich.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Speicherdauer:</strong> fonio.ai speichert ausschließlich die absolut notwendigen Daten und kann auf Wunsch alle Daten in Echtzeit löschen.
                  </p>
                </div>
              </div>

              <div id="chatwoot" className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  XII. Einsatz von Chatwoot (Live-Chat)
                </h2>

                <div className="text-left space-y-4 pt-8 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    Wir nutzen auf unserer Webseite den Live-Chat-Dienst von Chatwoot Inc. (USA), um Ihnen eine direkte Kommunikation mit uns zu ermöglichen. Wenn Sie den Chat nutzen, werden die von Ihnen eingegebenen Daten (Name, E-Mail-Adresse, Chat-Inhalt) sowie technische Daten (IP-Adresse, Browsertyp) verarbeitet.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Rechtsgrundlage:</strong> Die Verarbeitung erfolgt auf Basis Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) oder unseres berechtigten Interesses an einer effizienten Kundenbetreuung (Art. 6 Abs. 1 lit. f DSGVO).
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Drittlandübermittlung:</strong> Die Daten werden in den USA verarbeitet. Die Absicherung erfolgt über Standardvertragsklauseln sowie die Zertifizierung unter dem EU-US Data Privacy Framework.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Anbieter:</strong> Chatwoot Inc., USA.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Speicherdauer:</strong> Wir speichern diese Daten für die Dauer der Bearbeitung Ihrer Anfrage bzw. gemäß den gesetzlichen Aufbewahrungspflichten.
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

export default Datenschutz;
