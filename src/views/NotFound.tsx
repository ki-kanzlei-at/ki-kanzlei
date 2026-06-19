import Link from "next/link";
import { NavigationHome } from "@/components/NavigationHome";
import { FooterModern } from "@/components/FooterModern";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, Compass, Search } from "lucide-react";

const vorschlaege = [
  { href: "/leistungen", label: "Alle Leistungen" },
  { href: "/leistungen/voicebot", label: "Voicebot & KI-Telefonassistent" },
  { href: "/ki-assessment", label: "KI Assessment Center" },
  { href: "/#contact", label: "Kontakt" },
];

const NotFound = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <NavigationHome />
      <main>
        <section className="gradient-hero pt-32 md:pt-40 pb-20 md:pb-28">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center space-y-8">
              <h1 className="text-8xl md:text-[11rem] font-bold text-primary/15 leading-none">404</h1>

              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20">
                <Search className="w-9 h-9 text-primary" />
              </div>

              <div className="space-y-4">
                <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                  Seite nicht gefunden
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Hier ist leider nichts</h2>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                  Die Seite, die Sie suchen, existiert nicht oder wurde verschoben. Über die Links unten finden Sie schnell weiter.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" asChild>
                  <Link href="/">
                    <Home className="w-4 h-4 mr-2" />
                    Zur Startseite
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/leistungen">
                    <Compass className="w-4 h-4 mr-2" />
                    Alle Leistungen
                  </Link>
                </Button>
              </div>

              <div className="pt-8">
                <p className="text-sm text-muted-foreground mb-4">Vielleicht suchen Sie nach:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {vorschlaege.map((v) => (
                    <Link
                      key={v.href}
                      href={v.href}
                      className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary transition-base"
                    >
                      {v.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterModern />
    </div>
  );
};

export default NotFound;
