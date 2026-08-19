import React from 'react';
import { CheckCircle2, Sparkles, Truck, ShieldCheck, ArrowRight } from 'lucide-react';
import { PRODUCT_VARIANTS } from '../data/productData';
import { ProductVariant } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ValueSectionProps {
  selectedVariant: ProductVariant;
  onSelectVariant: (variant: ProductVariant) => void;
  onCtaClick: () => void;
}

export const ValueSection: React.FC<ValueSectionProps> = ({
  selectedVariant,
  onSelectVariant,
  onCtaClick,
}) => {
  const { t, formatPrice } = useLanguage();

  const getVariantTranslation = (variantId: string) => {
    if (variantId === 'variant-30ml') return t.variants.starter;
    if (variantId === 'variant-50ml') return t.variants.core;
    return t.variants.course;
  };

  return (
    <section className="bg-slate-50 py-16 px-4 sm:px-6 border-b border-slate-200">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-900 text-xs font-black px-3.5 py-1 rounded-full border border-sky-200 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-700" />
            <span>{t.hero.selectCourse}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            {t.finalCta.title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.hero.headlineSubtitle}
          </p>
        </div>

        {/* 3 Shopify Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PRODUCT_VARIANTS.map((variant) => {
            const isSelected = selectedVariant.id === variant.id;
            const varT = getVariantTranslation(variant.id);
            return (
              <div
                key={variant.id}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-6 transition-all relative ${
                  variant.isPopular
                    ? 'bg-gradient-to-b from-sky-50 to-white border-2 border-sky-600 shadow-xl md:-translate-y-2'
                    : 'bg-white border border-slate-200 shadow-sm'
                }`}
              >
                {/* Popular / Best Value Badge */}
                {variant.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 text-xs font-black px-4 py-1 rounded-full shadow-sm whitespace-nowrap">
                    🔥 {t.variants.popular}
                  </div>
                )}
                {variant.isBestValue && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-sky-900 text-white text-xs font-black px-4 py-1 rounded-full shadow-sm whitespace-nowrap">
                    👑 {t.variants.bestValue}
                  </div>
                )}

                <div className="space-y-4 pt-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-black text-xl text-slate-900">
                        {varT.name}
                      </h3>
                      <span className="text-xs text-slate-500 block mt-0.5">
                        {varT.duration}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md shrink-0">
                      {t.variants.save} {formatPrice(variant.savings)}
                    </span>
                  </div>

                  {/* Price Row */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-slate-900">
                      {formatPrice(variant.sellingPrice)}
                    </span>
                    <span className="text-base text-slate-400 line-through">
                      {formatPrice(variant.compareAtPrice)}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {varT.subTitle}
                  </p>

                  {/* Inclusions List */}
                  {varT.gifts && (
                    <ul className="space-y-2 pt-3 border-t border-slate-200/80 text-xs text-slate-700 font-medium">
                      {varT.gifts.map((gift, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{gift}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Card CTA Button */}
                <button
                  onClick={() => {
                    onSelectVariant(variant);
                    onCtaClick();
                  }}
                  className={`w-full py-4 rounded-xl font-black text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    variant.isPopular
                      ? 'bg-sky-600 hover:bg-sky-500 text-white shadow-md active:scale-98'
                      : 'bg-slate-900 hover:bg-slate-800 text-white active:scale-98'
                  }`}
                >
                  <span>{t.hero.ctaButton} ({variant.size} • {formatPrice(variant.sellingPrice)})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            );
          })}
        </div>

        {/* Risk-Free Assurance Footer Strip */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-medium text-center">
          <span className="flex items-center gap-1.5">
            <Truck className="w-4 h-4 text-sky-600" />
            {t.topBar.leftGuarantee}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            {t.topBar.rightGuarantee}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-sky-600" />
            {t.hero.secureGuarantee}
          </span>
        </div>

      </div>
    </section>
  );
};
