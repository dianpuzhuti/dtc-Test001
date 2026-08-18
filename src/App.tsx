import React, { useState } from 'react';
import { TopOfferBar } from './components/TopOfferBar';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
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
      
      {/* 1. TOP CLINICAL ANNOUNCEMENT BAR */}
      <TopOfferBar />

      {/* 2. MEDICAL LAB HEADER */}
      <Header onCtaClick={handleCtaClick} cartCount={1} />

      <main className="pb-20 sm:pb-0">
        {/* 3. HERO SECTION — CLINICAL MULTI-PEPTIDE CONTRADICTION BUSTER */}
        <HeroSection
          selectedVariant={selectedVariant}
          onSelectVariant={handleSelectVariant}
          onCtaClick={handleCtaClick}
        />

        {/* 4. DIALECTICAL CONTRADICTION BUSTER (矛盾论核心破局) */}
        <DialecticalBuster onCtaClick={handleCtaClick} />

        {/* 5. 28-DAY DOUBLE-BLIND CLINICAL DATA (双盲临床数据背书) */}
        <ClinicalScienceSection />

        {/* 6. 7 BIO-MIMETIC PEPTIDES COMPLEX (7重仿生分子多肽) */}
        <ActiveIngredientsSection />

        {/* 7. DIALECTICAL COMPARISON TABLE (矛盾论三方硬核横评表) */}
        <ComparisonTable onCtaClick={handleCtaClick} />

        {/* 8. CLINICAL MORNING & NIGHT ROUTINE (晨晚医学护肤仪式) */}
        <RoutineGuideSection />

        {/* 9. MEDICAL UNBOXING & ACCESSORIES (开箱与配件清单) */}
        <WhatsInBoxSection />

        {/* 10. REAL CLINICAL PATIENT & USER FEEDBACK (真实口碑与医生手记) */}
        <ReviewsSection />

        {/* 11. SHOPIFY 1:1 VARIANT MATRIX (30ml $29 / 50ml $49 / 100ml $79 选购矩阵) */}
        <ValueSection
          selectedVariant={selectedVariant}
          onSelectVariant={handleSelectVariant}
          onCtaClick={handleCtaClick}
        />

        {/* 12. CLINICAL FAQ (皮肤科医生疑虑解答) */}
        <FAQSection />

        {/* 13. FINAL CONVERSION CARD (收尾医学信任转化) */}
        <FinalCTA
          selectedVariant={selectedVariant}
          onCtaClick={handleCtaClick}
        />
      </main>

      {/* Footer Branding & Shopify Clinical Integration Disclaimer */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-4 text-center border-t border-slate-800 text-xs space-y-4">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="font-black text-white text-base">
              PeptiDerm™ Clinical Dermatology Laboratories
            </span>
            <span className="bg-sky-900 text-sky-300 text-[10px] font-black px-2 py-0.5 rounded">
              ISO 22716 / GMP 认证
            </span>
          </div>

          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed text-xs">
            多肽细胞更新抗衰保湿霜 (Cellular Renewal Multi-Peptide Cream) • 配方专研 7 重仿生信号胜肽。本页面为适配 Shopify Shrine / Dawn 高端独立站模板设计，1:1 无缝对接 Shopify 后台多变体 SKU 价格与原生结账抽屉。
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-500 text-[11px] pt-2">
            <span>GMP 十万级净化实验室制造</span>
            <span>•</span>
            <span>瑞士 SGS 无刺激检测通过</span>
            <span>•</span>
            <span>0% 动物实验 (Cruelty-Free)</span>
            <span>•</span>
            <span>256-bit SSL 安全支付网关</span>
          </div>
        </div>

        <p className="text-slate-600 text-[10px] pt-4 border-t border-slate-900">
          © {new Date().getFullYear()} PeptiDerm™ Dermatology Inc. 保留所有权利。
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
