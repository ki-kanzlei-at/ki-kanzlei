'use client';

import { useState, useEffect } from "react";
import { NavigationHome } from "@/components/NavigationHome";
import { HeroHome } from "@/components/HeroHome";
import { ProblemGridHome } from "@/components/ProblemGridHome";
import { ProductsHome } from "@/components/ProductsHome";
import { PressSection } from "@/components/PressSection";
import { IndustriesHome } from "@/components/IndustriesHome";
import { VoiceAgentSection } from "@/components/VoiceAgentSection";
import { LeistungenHome } from "@/components/LeistungenHome";
import { AssessmentCenterHome } from "@/components/AssessmentCenterHome";
import { AboutUs } from "@/components/AboutUs";
import { ContactForm } from "@/components/ContactForm";
import { BlogSectionHome } from "@/components/BlogSectionHome";
import { FAQHome } from "@/components/FAQHome";
import { JobsSectionHome } from "@/components/JobsSectionHome";
import { FooterModern } from "@/components/FooterModern";
import { TestimonialsHome } from "@/components/TestimonialsHome";
import { LeadMagnetModal } from "@/components/LeadMagnetModal";

const Home = () => {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  useEffect(() => {
    document.title = "KI Automatisierung & KI Agentur für Unternehmen | KI Kanzlei Österreich";

    // Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'KI Kanzlei: Voice-Agenten, KI Chatbots, Wissensdatenbanken (RAG) und n8n-Automatisierung für KMU. DSGVO-konform, EU-gehostet, in 30 Tagen live. Jetzt kostenloses KI Audit sichern.');
  }, []);

  return (
    <div className="min-h-screen gradient-bg">
      <NavigationHome />
      <main>
        <HeroHome onCtaClick={() => setIsLeadModalOpen(true)} />
        <ProblemGridHome />
        {/* <PressSection /> */}
        {/* <ProductsHome /> */}
        <VoiceAgentSection />
        <LeistungenHome />
        <AssessmentCenterHome />
        <IndustriesHome />
        <AboutUs />
        <TestimonialsHome />
        <FAQHome />
        <BlogSectionHome />
        <JobsSectionHome />
        <ContactForm />
      </main>
      <FooterModern />
      <LeadMagnetModal isOpen={isLeadModalOpen} onOpenChange={setIsLeadModalOpen} />
    </div>
  );
};

export default Home;


