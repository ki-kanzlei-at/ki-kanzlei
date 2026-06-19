'use client';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { CookieBanner } from "@/components/CookieBanner";
import { CaptchaProvider } from "@/components/CaptchaProvider";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <CaptchaProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <ScrollToTop />
          <ScrollReveal />
          <AnalyticsTracker />
          {children}
          <CookieBanner />
        </TooltipProvider>
      </CaptchaProvider>
    </QueryClientProvider>
  );
}
