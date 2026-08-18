import React, { useState } from 'react';
import {
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  FlaskConical,
  Activity,
  Layers,
  ChevronRight
} from 'lucide-react';
import { PRODUCT_INFO, PRODUCT_VARIANTS, PRODUCT_IMAGES } from '../data/productData';
import { ProductVariant } from '../types';

interface HeroSectionProps {
  selectedVariant: ProductVariant;
  onSelectVariant: (variant: ProductVariant) => void;
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  selectedVariant,
  onSelectVariant,
  onCtaClick,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const galleryImages = [
    { url: selectedVariant.imageUrl, caption: 'Medical Dual-Chamber Airless Bottle' },
    { url: PRODUCT_IMAGES.heroTexture, caption: 'Snow-Melt Instant Matte Texture' },
    { url: PRODUCT_IMAGES.heroLaboratory, caption: 'ISO 22716 Cleanroom Formulation' },
    { url: PRODUCT_IMAGES.doctorApproval, caption: 'Board-Certified Dermatologist Evaluated' },
  ];

  return (
    <section className="bg-gradient-to-b from-sky-50/60 via-white to-slate-50/50 py-8 sm:py-14 px-4 sm:px-6 border-b border-slate-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Product Gallery & Clinical Visual Proof */}
        <div className="lg:col-span-6 space-y-4">
          
          {/* Main Hero Product Stage */}
          <div className="relative aspect-4/3 rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-white p-6 flex items-center justify-center group">
            <img
              src={galleryImages[activeImageIndex].url}
              alt="PeptiDerm Cellular Renewal Multi-Peptide Cream"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
            />

            {/* Top Lab Badge */}
            <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-white text-[11px] font-black px-3.5 py-1.5 rounded-full border border-slate-700 shadow-md flex items-center gap-1.5">
              <FlaskConical className="w-3.5 h-3.5 text-sky-400" />
              <span>7 BIO-MIMETIC SIGNAL PEPTIDES</span>
            </div>

            {/* Bottom Proof Tag */}
            <div className="absolute bottom-4 right-4 bg-sky-600/90 backdrop-blur-md text-white text-[11px] font-black px-3 py-1 rounded-full shadow-md flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>28-Day Clinical Trial Verified</span>
            </div>
          </div>

          {/* 4 Interactive Gallery Thumbnails */}
          <div className="grid grid-cols-4 gap-2.5">
            {galleryImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative rounded-xl overflow-hidden border-2 aspect-square p-1 bg-white transition-all cursor-pointer ${
                  activeImageIndex === idx
                    ? 'border-sky-600 ring-2 ring-sky-600/20 shadow-md'
                    : 'border-slate-200 hover:border-slate-300 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-lg"
                />
              </button>
            ))}
          </div>

          {/* 4 Quick Clinical Benchmarks */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
            <div className="bg-white border border-slate-200/90 rounded-2xl p-2.5 shadow-2xs">
              <span className="text-sky-700 font-black block text-sm">-42.8%</span>
              <span className="text-slate-500 text-[10px]">Wrinkle Volume</span>
            </div>
            <div className="bg-white border border-slate-200/90 rounded-2xl p-2.5 shadow-2xs">
              <span className="text-sky-700 font-black block text-sm">+68.4%</span>
              <span className="text-slate-500 text-[10px]">Dermal Collagen</span>
            </div>
            <div className="bg-white border border-slate-200/90 rounded-2xl p-2.5 shadow-2xs">
              <span className="text-sky-700 font-black block text-sm">99.8%</span>
              <span className="text-slate-500 text-[10px]">Tolerance Rate</span>
            </div>
            <div className="bg-white border border-slate-200/90 rounded-2xl p-2.5 shadow-2xs">
              <span className="text-emerald-700 font-black block text-sm">3-Sec</span>
              <span className="text-slate-500 text-[10px]">Matte Absorption</span>
            </div>
          </div>

        </div>

        {/* Right Column: Copywriting & Multi-Variant Shopify Selector */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Header & Rating */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-800">
                {PRODUCT_INFO.rating} / 5.0
              </span>
              <span className="text-xs text-slate-400">
                ({PRODUCT_INFO.reviewCount.toLocaleString()} Verified Clinical Reviews)
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-900 text-xs font-black px-3.5 py-1 rounded-full border border-sky-200">
              <Activity className="w-3.5 h-3.5 text-sky-700" />
              <span>CLINICAL BREAKTHROUGH • CELLULAR REGENERATION</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-snug">
              7 Bio-Mimetic Peptides • Rebuild Youthful Collagen in 28 Days
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Resolve the anti-aging contradiction: potent clinical wrinkle repair without barrier damage, peeling, or irritation. Experience 99.8% physiological tolerance and -42.8% wrinkle depth reduction.
            </p>
          </div>

          {/* Interactive Variant Selection Matrix */}
          <div className="space-y-3 bg-slate-50 border border-slate-200 rounded-3xl p-4 sm:p-5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-extrabold text-slate-900 uppercase tracking-wider">
                Select Course (Shopify Variant Matrix):
              </span>
              <span className="text-emerald-700 font-bold">In Stock • Dispatched in 24h</span>
            </div>

            {/* 3 Variant Cards */}
            <div className="grid grid-cols-3 gap-2.5">
              {PRODUCT_VARIANTS.map((variant) => {
                const isSelected = selectedVariant.id === variant.id;
                return (
                  <button
                    key={variant.id}
                    onClick={() => onSelectVariant(variant)}
                    className={`relative p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'border-2 border-sky-600 bg-sky-50/80 ring-2 ring-sky-600/20 shadow-sm'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    {variant.isPopular && (
                      <div className="absolute -top-2.5 right-2 bg-amber-500 text-slate-950 text-[9px] font-black px-2 py-0.5 rounded-full shadow-xs">
                        82% CHOOSE THIS
                      </div>
                    )}
                    {variant.isBestValue && (
                      <div className="absolute -top-2.5 right-2 bg-sky-900 text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-xs">
                        BEST VALUE
                      </div>
                    )}

                    <div className="text-xs font-black text-slate-900">{variant.size}</div>
                    <div className="text-sm font-black text-sky-700 mt-1">
                      ${variant.sellingPrice}{' '}
                      <span className="text-[10px] text-slate-400 line-through font-normal">
                        ${variant.compareAtPrice}
                      </span>
                    </div>
                    <div className="text-[10px] text-emerald-700 font-bold mt-0.5">
                      Save ${variant.savings}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Variant Summary Strip */}
            <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
              <div>
                <span className="text-slate-500">Selected: </span>
                <strong className="text-slate-900 font-black">
                  {selectedVariant.name}
                </strong>
                <span className="text-slate-500 block text-[11px]">
                  {selectedVariant.supplyDuration}
                </span>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-sky-700">
                  ${selectedVariant.sellingPrice.toFixed(2)}
                </span>
                <span className="text-xs text-slate-400 line-through ml-1.5">
                  ${selectedVariant.compareAtPrice.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Gifts / Perks Included */}
            {selectedVariant.includesGifts && selectedVariant.includesGifts.length > 0 && (
              <div className="bg-white border border-slate-200/80 rounded-xl p-2.5 space-y-1 text-[11px]">
                <span className="font-bold text-sky-900 block">Package Inclusions:</span>
                <ul className="space-y-0.5 text-slate-600">
                  {selectedVariant.includesGifts.map((gift, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span>{gift}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

          {/* Conversion Action Button */}
          <div className="space-y-3">
            <button
              onClick={onCtaClick}
              className="w-full bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-slate-950 font-black text-base sm:text-lg py-4 px-6 rounded-2xl shadow-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <span>Order Now ({selectedVariant.size} • ${selectedVariant.sellingPrice})</span>
              <ArrowRight className="w-5 h-5 text-slate-950" />
            </button>

            {/* Risk-Free Assurance Badges */}
            <div className="flex items-center justify-center gap-4 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-sky-600" />
                Free Express Shipping
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <RotateCcw className="w-3.5 h-3.5 text-sky-600" />
                30-Day Money-Back Guarantee
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                100% Authentic Guarantee
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
