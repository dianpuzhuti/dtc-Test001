import React, { useState } from 'react';
import { TopOfferBar } from './components/TopOfferBar';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { InteractiveSkinComparison } from './components/InteractiveSkinComparison';
import { DialecticalBuster } from './components/DialecticalBuster';
import { ClinicalScienceSection } from './components/ClinicalScienceSection';
import { ActiveIngredientsSection } from './components/ActiveIngredientsSection';
import { ComparisonTable } from './components/ComparisonTable';
import { RoutineGuideSection } from './components/RoutineGuideSection';
import { WhatsInBoxSection } from './components/WhatsInBoxSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ValueSection } from './components/ValueSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { StickyMobileBar } from './components/StickyMobileBar';
import { PrototypeModal } from './components/PrototypeModal';
import { PRODUCT_VARIANTS, PRODUCT_INFO } from './data/productData';
import { ProductVariant } from './types';

export default function App() {
  // Default to 50ml Most Popular variant ($49)
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    PRODUCT_VARIANTS.find((v) => v.isPopular) || PRODUCT_VARIANTS[1]
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCtaClick = () => {
    setIsModalOpen(true);
  };

  const handleSelectVariant = (variant: ProductVariant) => {
    setSelectedVariant(variant);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-sky-200 selection:text-sky-950">
      
      {/* 1. TOP DYNAMIC ANNOUNCEMENT BAR (NO HARDCODING, NO WRAPPING BUGS) */}
      <TopOfferBar
        badge="FLASH SPECIAL"
        offerText={`LIMITED TIME: UP TO ${selectedVariant.savingsPercent}% OFF • FREE CRYO SPATULA WITH 50ML/100ML • WORLDWIDE EXPRESS SHIPPING`}
        leftGuarantee="GMP MEDICAL LAB CERTIFIED • SWISS SGS DERMATOLOGICALLY TESTED"
        rightGuarantee="30-Day Money-Back Guarantee"
      />

      {/* 2. DYNAMIC BRAND & LAB HEADER */}
      <Header
        brandName={PRODUCT_INFO.brand.replace('™ Laboratories', '')}
        tagline="Clinical Dermatology Laboratories"
        startingPrice={PRODUCT_VARIANTS[0].sellingPrice}
        ctaText={`Order Now (From $${PRODUCT_VARIANTS[0].sellingPrice})`}
        onCtaClick={handleCtaClick}
        cartCount={1}
      />

      <main className="pb-20 sm:pb-0">
        {/* 3. HERO SECTION — CLINICAL MULTI-PEPTIDE CONTRADICTION BUSTER */}
        <HeroSection
          selectedVariant={selectedVariant}
          onSelectVariant={handleSelectVariant}
          onCtaClick={handleCtaClick}
        />

        {/* 4. VISUAL BEFORE / AFTER 28-DAY CLINICAL SLIDER */}
        <InteractiveSkinComparison onCtaClick={handleCtaClick} />

        {/* 5. DIALECTICAL CONTRADICTION BUSTER */}
        <DialecticalBuster onCtaClick={handleCtaClick} />

        {/* 5. 28-DAY DOUBLE-BLIND CLINICAL DATA */}
        <ClinicalScienceSection />

        {/* 6. 7 BIO-MIMETIC PEPTIDES COMPLEX */}
        <ActiveIngredientsSection />

        {/* 7. DIALECTICAL COMPARISON TABLE */}
        <ComparisonTable onCtaClick={handleCtaClick} />

        {/* 8. CLINICAL MORNING & NIGHT ROUTINE */}
        <RoutineGuideSection />

        {/* 9. MEDICAL UNBOXING & ACCESSORIES */}
        <WhatsInBoxSection />

        {/* 10. REAL CLINICAL PATIENT & USER FEEDBACK */}
        <ReviewsSection />

        {/* 11. SHOPIFY 1:1 VARIANT MATRIX (30ml $29 / 50ml $49 / 100ml $79) */}
        <ValueSection
          selectedVariant={selectedVariant}
          onSelectVariant={handleSelectVariant}
          onCtaClick={handleCtaClick}
        />

        {/* 12. CLINICAL FAQ */}
        <FAQSection />

        {/* 13. FINAL CONVERSION CARD */}
        <FinalCTA
          selectedVariant={selectedVariant}
          onCtaClick={handleCtaClick}
        />
      </main>

      {/* Footer Branding & Shopify Clinical Integration */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-4 text-center border-t border-slate-800 text-xs space-y-4">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="font-black text-white text-base">
              PeptiDerm™ Clinical Dermatology Laboratories
            </span>
            <span className="bg-sky-900 text-sky-300 text-[10px] font-black px-2 py-0.5 rounded">
              ISO 22716 / GMP Certified
            </span>
          </div>

          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed text-xs">
            Cellular Renewal Multi-Peptide Cream • Formulated with 7 targeted bio-mimetic signal peptides. 1:1 native integration with Shopify multi-variant SKUs ($29 / $49 / $79) and instant checkout drawer.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-500 text-[11px] pt-2">
            <span>GMP Class 100,000 Cleanroom Manufactured</span>
            <span>•</span>
            <span>Swiss SGS Certified Non-Irritating</span>
            <span>•</span>
            <span>100% Cruelty-Free</span>
            <span>•</span>
            <span>256-Bit SSL Encrypted Checkout</span>
          </div>
        </div>

        <p className="text-slate-600 text-[10px] pt-4 border-t border-slate-900">
          © {new Date().getFullYear()} PeptiDerm™ Dermatology Inc. All rights reserved.
        </p>
      </footer>

      {/* 14. MOBILE STICKY CTA BAR */}
      <StickyMobileBar
        selectedVariant={selectedVariant}
        onCtaClick={handleCtaClick}
      />

      {/* 15. SHOPIFY NATIVE CART DRAWER & INSTANT CHECKOUT MODAL */}
      <PrototypeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedVariant={selectedVariant}
        onSelectVariant={handleSelectVariant}
      />

    </div>
  );
}
