'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Settings } from "lucide-react";
import { CookieGlyph } from "@/components/CookieGlyph";
import { initGA, updateGAConsent } from "@/lib/analytics";

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [cookies, setCookies] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    setCookies({
      necessary: true,
      analytics: true,
      marketing: true,
    });
    savePreferences();
  };

  const acceptNecessary = () => {
    setCookies({
      necessary: true,
      analytics: false,
      marketing: false,
    });
    savePreferences();
  };

  const savePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(cookies));
    setIsVisible(false);
    setShowSettings(false);

    // Here you would typically initialize analytics/marketing scripts
    if (cookies.analytics) {
      // Initialize Google Analytics
      initGA();
      updateGAConsent(true);
    } else {
      updateGAConsent(false);
    }
    if (cookies.marketing) {
      // Initialize marketing scripts
      // Marketing cookies enabled
    }
  };

  const toggleCookie = (type: 'analytics' | 'marketing') => {
    setCookies(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 md:bottom-4 md:right-4 md:left-auto z-50">
      <div className="bg-white rounded-t-2xl md:rounded-2xl shadow-xl border border-border w-full md:w-96 lg:w-96 max-w-sm md:max-w-none mx-auto md:mx-0">
        {!showSettings ? (
          // Main Banner
          <div className="p-4">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 shadow-sm shadow-primary/30">
                <CookieGlyph className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-gray-900 mb-1">
                  Cookies
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Wir verwenden Cookies für eine bessere Erfahrung und Funktionalität.
                </p>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors flex-shrink-0"
              >
                <X className="w-3 h-3 text-gray-600" />
              </button>
            </div>

            <div className="flex gap-2">
              <Button
                onClick={acceptNecessary}
                variant="outline"
                size="sm"
                className="text-xs px-3 py-1 h-7 hover:bg-background hover:border-input hover:text-foreground"
              >
                Ablehnen
              </Button>
              <Button
                onClick={() => setShowSettings(true)}
                variant="outline"
                size="sm"
                className="text-xs px-3 py-1 h-7 hover:bg-background hover:border-input"
              >
                <Settings className="w-3 h-3 mr-1" />
                Einstellungen
              </Button>
              <Button
                onClick={acceptAll}
                size="sm"
                className="text-xs px-3 py-1 h-7 hover:bg-primary"
              >
                Akzeptieren
              </Button>
            </div>
          </div>
        ) : (
          // Settings Panel
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-gray-900">
                Cookie-Einstellungen
              </h3>
              <button
                onClick={() => setShowSettings(false)}
                className="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <X className="w-3 h-3 text-gray-600" />
              </button>
            </div>

            <div className="space-y-3 mb-4">
              {/* Necessary Cookies */}
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CookieGlyph className="w-3.5 h-3.5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-xs font-semibold text-gray-900">Notwendige</h4>
                    <div className="px-2 py-0.5 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                      Aktiv
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">
                    Grundfunktionen der Website.
                  </p>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Settings className="w-3 h-3 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-xs font-semibold text-gray-900">Analytics</h4>
                    <button
                      onClick={() => toggleCookie('analytics')}
                      className={`w-8 h-4 rounded-full transition-colors ${cookies.analytics ? 'bg-primary' : 'bg-gray-300'
                        }`}
                    >
                      <div className={`w-3 h-3 bg-white rounded-full transition-transform ${cookies.analytics ? 'translate-x-4' : 'translate-x-0.5'
                        }`} />
                    </button>
                  </div>
                  <p className="text-xs text-gray-600">
                    Website-Nutzung analysieren.
                  </p>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Settings className="w-3 h-3 text-purple-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-xs font-semibold text-gray-900">Marketing</h4>
                    <button
                      onClick={() => toggleCookie('marketing')}
                      className={`w-8 h-4 rounded-full transition-colors ${cookies.marketing ? 'bg-primary' : 'bg-gray-300'
                        }`}
                    >
                      <div className={`w-3 h-3 bg-white rounded-full transition-transform ${cookies.marketing ? 'translate-x-4' : 'translate-x-0.5'
                        }`} />
                    </button>
                  </div>
                  <p className="text-xs text-gray-600">
                    Relevante Anzeigen zeigen.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                onClick={acceptNecessary}
                variant="outline"
                size="sm"
                className="text-xs px-3 py-1 h-7 hover:bg-background hover:border-input hover:text-foreground"
              >
                Ablehnen
              </Button>
              <Button
                onClick={savePreferences}
                size="sm"
                className="text-xs px-3 py-1 h-7"
              >
                Speichern
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
