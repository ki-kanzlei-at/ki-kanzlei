'use client';

import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { trackLinkClick, trackCtaClick } from "@/lib/analytics";

const loesungenGroups = [
  {
    title: "Kommunikation & Wissen",
    items: [
      { label: "Voicebot & Telefonassistent", href: "/leistungen/voicebot" },
      { label: "KI Chatbot", href: "/leistungen/ki-chatbot" },
      { label: "ChatGPT Alternative", href: "/leistungen/chatgpt-alternative" },
      { label: "KI Wissensdatenbank (RAG)", href: "/leistungen/ki-wissensdatenbank" },
      { label: "Private AI & Lokale KI", href: "/leistungen/private-ai" },
    ],
  },
  {
    title: "Agenten & Automatisierung",
    items: [
      { label: "Agentic AI & AI Agents", href: "/leistungen/agentic-ai" },
      { label: "Autonome KI-Agenten", href: "/leistungen/autonome-ki-agenten" },
      { label: "n8n Automatisierung", href: "/leistungen/n8n-automatisierung" },
      { label: "Zapier Automatisierung", href: "/leistungen/zapier" },
      { label: "Make.com (Integromat)", href: "/leistungen/make" },
      { label: "RPA & Robotic AI", href: "/leistungen/rpa" },
      { label: "MCP Server", href: "/leistungen/mcp-server" },
      { label: "LangChain", href: "/leistungen/langchain" },
      { label: "Computer Vision", href: "/leistungen/computer-vision" },
      { label: "Prompt Engineering", href: "/leistungen/prompt-engineering" },
    ],
  },
  {
    title: "Content & Media",
    items: [
      { label: "KI-Bildgenerator", href: "/leistungen/ki-bildgenerator" },
      { label: "KI Video & Media", href: "/leistungen/ki-video" },
      { label: "Sora", href: "/leistungen/sora" },
      { label: "Google Veo", href: "/leistungen/veo" },
      { label: "Runway", href: "/leistungen/runway" },
      { label: "Higgsfield AI", href: "/leistungen/higgsfield-ai" },
    ],
  },
  {
    title: "Daten & Infrastruktur",
    items: [
      { label: "MLOps & LLMOps", href: "/leistungen/mlops" },
      { label: "Kubernetes", href: "/leistungen/kubernetes" },
      { label: "Docker", href: "/leistungen/docker" },
      { label: "Databricks", href: "/leistungen/databricks" },
      { label: "Snowflake", href: "/leistungen/snowflake" },
      { label: "Power BI & Tableau", href: "/leistungen/power-bi" },
      { label: "Apache Airflow & Kafka", href: "/leistungen/apache-airflow" },
      { label: "Hugging Face", href: "/leistungen/hugging-face" },
      { label: "Ollama (lokale LLMs)", href: "/leistungen/ollama" },
      { label: "Vektordatenbanken", href: "/leistungen/vector-database" },
      { label: "LLM Fine-Tuning", href: "/leistungen/fine-tuning" },
      { label: "Monitoring & Grafana", href: "/leistungen/monitoring-grafana" },
      { label: "SAP-Integration", href: "/leistungen/sap-integration" },
      { label: "Azure, Vertex & Bedrock", href: "/leistungen/azure-ai" },
    ],
  },
  {
    title: "Software, Web & Marketing",
    items: [
      { label: "KI Softwareentwicklung", href: "/leistungen/ki-softwareentwicklung" },
      { label: "App mit KI", href: "/leistungen/app-mit-ki" },
      { label: "Website mit KI", href: "/leistungen/ki-website" },
      { label: "Meta Ads mit KI", href: "/leistungen/meta-ads-ki" },
      { label: "Social Media mit KI", href: "/leistungen/social-media-ki" },
      { label: "3D-Planung mit KI", href: "/leistungen/3d-planung-ki" },
      { label: "Generative Engine Optimization", href: "/leistungen/generative-engine-optimization" },
      { label: "KI Assessment Center", href: "/ki-assessment" },
      { label: "KI Consulting", href: "/leistungen/ki-consulting" },
      { label: "KI Schulung", href: "/leistungen/ki-schulung" },
      { label: "Claude Schulung", href: "/leistungen/claude-schulung" },
      { label: "EU AI Act", href: "/leistungen/eu-ai-act" },
    ],
  },
  {
    title: "Wissen & Vergleiche",
    items: [
      { label: "KI-Glossar", href: "/ki-glossar" },
      { label: "ChatGPT vs Claude", href: "/vergleich/chatgpt-vs-claude" },
      { label: "n8n vs Zapier vs Make", href: "/vergleich/n8n-vs-zapier-vs-make" },
      { label: "Voicebot vs Callcenter", href: "/vergleich/voicebot-vs-callcenter" },
    ],
  },
];

// Flache Liste für das Mobile-Menü (abgeleitet aus den Gruppen).
const loesungenLinks = [
  { label: "Alle Leistungen", href: "/leistungen" },
  ...loesungenGroups.flatMap((g) => g.items),
];

const branchenLinks = [
  { label: "Alle Branchen", href: "/branchen" },
  { label: "Ärzte & Spezialisten", href: "/branchen/ki-loesungen-aerzte" },
  { label: "Psychotherapie", href: "/branchen/ki-loesungen-psychotherapeuten" },
  { label: "Hotels & Gastro", href: "/branchen/ki-loesungen-hotels" },
  { label: "Rechtsanwälte", href: "/branchen/ki-loesungen-rechtsanwaelte" },
  { label: "Recruiting & HR", href: "/branchen/ki-loesungen-recruiting" },
  { label: "E-Commerce", href: "/branchen/ki-loesungen-ecommerce" },
  { label: "Fitness & Sport", href: "/branchen/ki-loesungen-fitness" },
  { label: "Öffentliche Verwaltung", href: "/branchen/ki-loesungen-oeffentliche-einrichtungen" },
  { label: "Hausverwaltung", href: "/branchen/ki-loesungen-hausverwaltung" },
  { label: "Immobilienmakler", href: "/branchen/ki-loesungen-immobilienmakler" },
  { label: "Autohaus", href: "/branchen/ki-loesungen-autohaus" },
  { label: "Handwerker", href: "/branchen/ki-loesungen-handwerker" },
  { label: "Steuerberater", href: "/branchen/ki-loesungen-steuerberater" },
  { label: "Versicherungsmakler", href: "/branchen/ki-loesungen-versicherungsmakler" },
  { label: "Gastronomie & Restaurants", href: "/branchen/ki-loesungen-gastronomie" },
  { label: "Architekten & Planungsbüros", href: "/branchen/ki-loesungen-architekten" },
  { label: "Marketingagenturen", href: "/branchen/ki-loesungen-marketingagenturen" },
  { label: "Logistik & Spedition", href: "/branchen/ki-loesungen-logistik" },
  { label: "Industrie & Fertigung", href: "/branchen/ki-loesungen-industrie" },
  { label: "Bau & Bauunternehmen", href: "/branchen/ki-loesungen-bau" },
  { label: "Banken & Finanz", href: "/branchen/ki-loesungen-banken" },
  { label: "Energieversorger", href: "/branchen/ki-loesungen-energie" },
];

export const NavigationHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoesungenOpen, setIsLoesungenOpen] = useState(false);
  const [isBranchenOpen, setIsBranchenOpen] = useState(false);
  const [isMobileLoesungenOpen, setIsMobileLoesungenOpen] = useState(false);
  const [isMobileBranchenOpen, setIsMobileBranchenOpen] = useState(false);
  const loesungenRef = useRef<HTMLDivElement>(null);
  const branchenRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  // Hover-Intent: kurzer Delay, damit der Weg vom Trigger zum (viewport-zentrierten) Panel das Menü nicht schließt.
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cancelClose = () => { if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; } };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => { setIsLoesungenOpen(false); setIsBranchenOpen(false); }, 160);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (loesungenRef.current && !loesungenRef.current.contains(e.target as Node)) {
        setIsLoesungenOpen(false);
      }
      if (branchenRef.current && !branchenRef.current.contains(e.target as Node)) {
        setIsBranchenOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLoesungenOpen(false);
        setIsBranchenOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleNavClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      const hash = href.substring(1);

      if (pathname === "/") {
        e.preventDefault();
        const section = document.getElementById(hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
          setIsMenuOpen(false);
        }
      } else {
        e.preventDefault();
        router.push("/" + href);
        setIsMenuOpen(false);
      }
    }
  };

  const menuItems = [
    { label: "Über uns", href: "/ueber-uns" },
    { label: "Blog", href: "/blog" },
    { label: "Jobs", href: "/jobs" },
  ];

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="bg-white rounded-full shadow-lg border border-gray-200/50 backdrop-blur-md w-full lg:w-auto max-w-7xl">
        <div className="px-8 py-3">
          <div className="flex items-center justify-between gap-4 md:gap-6 lg:gap-7">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center gap-2.5">
                <img
                  src="/img/logo-premium.png"
                  alt="KI Kanzlei Logo"
                  className="h-9 w-9 rounded-lg object-contain"
                />
                <span className="text-xl font-bold tracking-tight text-gray-900 whitespace-nowrap">ki kanzlei</span>
              </a>
            </div>

            {/* Desktop Menu (show from lg up) */}
            <div className="hidden lg:flex items-center justify-center gap-5 xl:gap-7 mx-auto">
              {/* Lösungen Dropdown */}
              <div
                className="relative"
                ref={loesungenRef}
                onMouseEnter={() => { cancelClose(); setIsLoesungenOpen(true); setIsBranchenOpen(false); }}
                onMouseLeave={scheduleClose}
              >
                <div className="flex items-center gap-1 text-[13px] lg:text-[15px] xl:text-base font-normal text-gray-700 whitespace-nowrap px-1">
                  <Link
                    href="/leistungen"
                    onClick={() => trackLinkClick("Lösungen", "NavigationHome")}
                    className="hover:text-gray-900 transition-colors"
                  >
                    Leistungen
                  </Link>
                  <ChevronDown
                    className="w-4 h-4 transition-transform duration-200"
                    style={{ transform: isLoesungenOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </div>
                {isLoesungenOpen && (
                  <div className="fixed left-1/2 -translate-x-1/2 top-[4.75rem] pt-2 z-50" onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
                    <div className="bg-white rounded-2xl border border-gray-200/50 shadow-xl backdrop-blur-md p-6 w-[min(94vw,1040px)] max-h-[85vh] overflow-y-auto overscroll-contain">
                      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-5 gap-y-4">
                        {loesungenGroups.map((group) => (
                          <div key={group.title}>
                            <div className="text-[11px] font-semibold uppercase tracking-wider text-primary mb-1.5 px-3">
                              {group.title}
                            </div>
                            <div className="flex flex-col">
                              {group.items.map((link) => (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  onClick={() => {
                                    setIsLoesungenOpen(false);
                                    trackLinkClick(link.label, "NavigationHome-Lösungen");
                                  }}
                                  className="text-sm text-gray-700 hover:text-primary px-3 py-1 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-5 pt-4 border-t border-gray-100">
                        <Link
                          href="/leistungen"
                          onClick={() => { setIsLoesungenOpen(false); trackLinkClick("Alle Leistungen", "NavigationHome-Lösungen"); }}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all px-3"
                        >
                          Alle Leistungen ansehen
                          <ChevronDown className="w-4 h-4 -rotate-90" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Branchen Dropdown */}
              <div
                className="relative"
                ref={branchenRef}
                onMouseEnter={() => { cancelClose(); setIsBranchenOpen(true); setIsLoesungenOpen(false); }}
                onMouseLeave={scheduleClose}
              >
                <div className="flex items-center gap-1 text-[13px] lg:text-[15px] xl:text-base font-normal text-gray-700 whitespace-nowrap px-1">
                  <Link
                    href="/branchen"
                    onClick={() => trackLinkClick("Branchen", "NavigationHome")}
                    className="hover:text-gray-900 transition-colors"
                  >
                    Branchen
                  </Link>
                  <ChevronDown
                    className="w-4 h-4 transition-transform duration-200"
                    style={{ transform: isBranchenOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </div>
                {isBranchenOpen && (
                  <div className="fixed left-1/2 -translate-x-1/2 top-[4.75rem] pt-2 z-50" onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
                    <div className="bg-white rounded-2xl border border-gray-200/50 shadow-xl backdrop-blur-md p-4 w-[min(96vw,720px)] max-h-[90vh] overflow-y-auto overscroll-contain">
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
                        {branchenLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => {
                              setIsBranchenOpen(false);
                              trackLinkClick(link.label, "NavigationHome-Branchen");
                            }}
                            className="text-sm text-gray-700 hover:text-primary px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e: any) => {
                    trackLinkClick(item.label, "NavigationHome");
                    handleNavClick(item.href, e);
                  }}
                  className="flex items-center gap-1 text-[13px] lg:text-[15px] xl:text-base font-normal text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap px-1"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA Button (show from lg up) */}
            <div className="hidden lg:flex items-center">
              {isHomePage ? (
                <Button size="lg" asChild onClick={() => trackCtaClick("Kostenloses KI Audit erhalten", "NavigationHome")}>
                  <a href="#contact">Kostenloses KI Audit erhalten</a>
                </Button>
              ) : (
                <Button
                  size="lg"
                  onClick={() => {
                    trackCtaClick("Kostenloses KI Audit erhalten", "NavigationHome");
                    router.push("/");
                    setTimeout(() => {
                      const section = document.getElementById("contact");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }, 100);
                  }}
                >
                  Kostenloses KI Audit erhalten
                </Button>
              )}
            </div>

            {/* Mobile Menu Button (show below lg) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (show below lg) */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-white rounded-2xl shadow-xl border border-gray-200/50 backdrop-blur-md max-h-[calc(100dvh-7rem)] overflow-y-auto overscroll-contain">
            <div className="p-6">
              <div className="flex flex-col gap-1">
                {/* Lösungen mobile accordion */}
                <div>
                  <button
                    onClick={() => setIsMobileLoesungenOpen(!isMobileLoesungenOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-normal text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors"
                  >
                    Leistungen
                    <ChevronDown
                      className="w-4 h-4 transition-transform duration-200"
                      style={{ transform: isMobileLoesungenOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                  </button>
                  {isMobileLoesungenOpen && (
                    <div className="pl-4 flex flex-col gap-0.5 mt-1">
                      {loesungenLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsMobileLoesungenOpen(false);
                            trackLinkClick(link.label, "NavigationHome-Mobile-Lösungen");
                          }}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 rounded-xl transition-colors"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Branchen mobile accordion */}
                <div>
                  <button
                    onClick={() => setIsMobileBranchenOpen(!isMobileBranchenOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-normal text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors"
                  >
                    Branchen
                    <ChevronDown
                      className="w-4 h-4 transition-transform duration-200"
                      style={{ transform: isMobileBranchenOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                  </button>
                  {isMobileBranchenOpen && (
                    <div className="pl-4 flex flex-col gap-0.5 mt-1">
                      {branchenLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsMobileBranchenOpen(false);
                            trackLinkClick(link.label, "NavigationHome-Mobile-Branchen");
                          }}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 rounded-xl transition-colors"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      handleNavClick(item.href, e);
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center justify-between px-4 py-3 text-base font-normal text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4 mt-2 border-t border-gray-200">
                  {isHomePage ? (
                    <Button size="lg" className="w-full" asChild>
                      <a href="#contact" onClick={() => {
                        trackCtaClick("Kostenloses KI Audit erhalten", "NavigationHomeMobile");
                        setIsMenuOpen(false);
                      }}>
                        Kostenloses KI Audit erhalten
                      </a>
                    </Button>
                  ) : (
                    <Button
                      size="lg"
                      className="w-full"
                      onClick={() => {
                        trackCtaClick("Kostenloses KI Audit erhalten", "NavigationHomeMobile");
                        router.push("/");
                        setTimeout(() => {
                          const section = document.getElementById("contact");
                          if (section) {
                            section.scrollIntoView({ behavior: "smooth", block: "start" });
                          }
                        }, 100);
                        setIsMenuOpen(false);
                      }}
                    >
                      Kostenloses KI Audit erhalten
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
