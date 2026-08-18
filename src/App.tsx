import React, { useState } from 'react';
import { TopOfferBar } from './components/TopOfferBar';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { QuickBenefits } from './components/QuickBenefits';
import { ProblemSolution } from './components/ProblemSolution';
import { DualBasketFeature } from './components/DualBasketFeature';
import { RealFoodResults } from './components/RealFoodResults';
import { FamilyWeeknight } from './components/FamilyWeeknight';
import { MealCombinations } from './components/MealCombinations';
import { SixInOneCapability } from './components/SixInOneCapability';
import { EasyRoutineSection } from './components/EasyRoutineSection';
import { WhatsInBoxSection } from './components/WhatsInBoxSection';
import { ValueSection } from './components/ValueSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { StickyMobileBar } from './components/StickyMobileBar';
import { PrototypeModal } from './components/PrototypeModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCtaClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans antialiased selection:bg-amber-200 selection:text-amber-950">
      
      {/* 1. TOP OFFER BAR */}
      <TopOfferBar />

      {/* Header Navigation */}
      <Header onCtaClick={handleCtaClick} />

      <main className="pb-16 sm:pb-0">
        {/* 2. HERO — WEEKNIGHT CONVENIENCE */}
        <HeroSection onCtaClick={handleCtaClick} />

        {/* 3. QUICK BENEFITS */}
        <QuickBenefits />

        {/* 4. PROBLEM → SOLUTION */}
        <ProblemSolution onCtaClick={handleCtaClick} />

        {/* 5. DUALZONE FEATURE */}
        <DualBasketFeature />

        {/* 6. REAL FOOD RESULTS */}
        <RealFoodResults />

        {/* 7. REAL-WORLD ROUTINE */}
        <FamilyWeeknight />

        {/* 8. MEAL COMBINATIONS */}
        <MealCombinations />

        {/* 9. 6-IN-1 FUNCTIONALITY */}
        <SixInOneCapability />

        {/* 10. EASY CLEANUP / PRACTICAL USE */}
        <EasyRoutineSection />

        {/* 11. WHAT'S INCLUDED */}
        <WhatsInBoxSection />

        {/* 12. VALUE / OFFER SECTION */}
        <ValueSection onCtaClick={handleCtaClick} />

        {/* 13. FAQ */}
        <FAQSection />

        {/* 14. FINAL CTA */}
        <FinalCTA onCtaClick={handleCtaClick} />
      </main>

      {/* Footer Branding & Shopify Integration Disclaimer */}
      <footer className="bg-zinc-950 text-zinc-400 py-10 px-4 text-center border-t border-zinc-800 text-xs space-y-3">
        <div className="max-w-4xl mx-auto space-y-2">
          <p className="font-extrabold text-white text-sm">
            NINJA Foodi® DualZone™ Air Fryer (DZ201) • 8-QT Grey Edition
          </p>
          <p className="text-zinc-500 max-w-xl mx-auto leading-relaxed">
            High-converting DTC landing page template designed for Shopify Shrine theme deployment. Product forms, native cart drawers, and Shopify Checkout integrate via standard Shopify liquid themes.
          </p>
        </div>
        <p className="text-zinc-600 text-[10px] pt-4 border-t border-zinc-900">
          © {new Date().getFullYear()} Ninja DZ201 Landing Page Template.
        </p>
      </footer>

      {/* 15. MOBILE STICKY CTA BAR */}
      <StickyMobileBar onCtaClick={handleCtaClick} />

      {/* Prototype Action Modal */}
      <PrototypeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
}
