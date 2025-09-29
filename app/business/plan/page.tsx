"use client";

import { useEffect } from "react";
import HeroSection from "../../../src/components/HeroSection";
import FeaturesSection from "../../../src/components/FeaturesSection";
import TestimonialsSection from "../../../src/components/TestimonialsSection";
import ProcessSection from "../../../src/components/ProcessSection";
import UrgencySection from "../../../src/components/UrgencySection";
import GuaranteeSection from "../../../src/components/GuaranteeSection";
import FloatingChat from "../../../src/components/FloatingChat";
import LanguageToggle from "../../../src/components/LanguageToggle";
import { LanguageProvider } from "../../../src/contexts/LanguageContext";

export default function PlanPage() {
  // Add scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <LanguageToggle />
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <ProcessSection />
        <UrgencySection />
        <GuaranteeSection />
        <FloatingChat />
      </main>
    </LanguageProvider>
  );
}
