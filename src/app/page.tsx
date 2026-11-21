"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { PortfolioMarquee } from "@/components/sections/PortfolioMarquee";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { QuoteModal } from "@/components/sections/QuoteModal";

export default function HomePage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedService(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col relative selection:bg-[#C2671A] selection:text-white bg-[#FAF7F2]">
      {/* Sticky Navigation Header */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with Interactive Viewport Preview */}
        <HeroSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 2. Core Quality Highlights */}
        <StatsSection />

        {/* 3. Company Overview & Industries Served */}
        <AboutSection />

        {/* 4. Core Services Grid (No Pricing) */}
        <ServicesSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 5. Interactive Modern Tech Stack Matrix */}
        <TechStackSection />

        {/* 6. 5-Stage Client Delivery Process */}
        <ProcessSection />

        {/* 7. Demonstrated Case Studies & Partner Marquee */}
        <PortfolioMarquee />

        {/* 8. Kathmandu Office & Inquiry Form */}
        <ContactSection />
      </main>

      {/* 9. Corporate Footer */}
      <Footer />

      {/* 10. Consultation Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        preselectedService={selectedService}
      />
    </div>
  );
}
