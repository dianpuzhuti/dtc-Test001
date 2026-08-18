import React, { useState } from 'react';
import { Truck, RotateCcw, Check, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { PRODUCT_INFO, PRODUCT_IMAGES } from '../data/productData';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const heroGallery = [
    {
      src: PRODUCT_IMAGES.heroMain,
      alt: "Ninja DZ201 Foodi 8-Quart DualZone Air Fryer in Grey on Kitchen Counter",
      label: "Main Counter View",
    },
    {
      src: PRODUCT_IMAGES.heroProductGrey,
      alt: "Ninja DZ201 Grey Finish Close-Up",
      label: "Grey Finish",
    },
    {
      src: PRODUCT_IMAGES.openBasketsFood,
      alt: "Dual baskets showing simultaneous cooking of chicken and vegetables",
      label: "Dual Baskets",
    },
    {
      src: PRODUCT_IMAGES.familyLifestyle,
      alt: "Family weeknight dinner served hot together",
      label: "Family Meal",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-zinc-50 via-white to-zinc-50/80 pt-6 pb-12 px-4 sm:px-6 overflow-hidden border-b border-zinc-200/60">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column (Mobile First Gallery Showcase) */}
        <div className="md:col-span-6 flex flex-col gap-3.5">
          
          {/* Main Hero Image Container */}
          <div className="relative aspect-4/3 sm:aspect-1/1 w-full rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200/90 shadow-sm group">
            <img
              src={heroGallery[selectedImageIndex].src}
              alt={heroGallery[selectedImageIndex].alt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-102"
            />

            {/* Badges */}
            <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2">
              <span className="bg-zinc-900/90 text-white text-[11px] font-semibold px-3 py-1 rounded-full backdrop-blur-xs flex items-center gap-1.5 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
                Grey • 8-QT Capacity
              </span>
              <span className="bg-amber-500 text-zinc-950 text-[11px] font-extrabold px-3 py-1 rounded-full shadow-xs flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                DualZone™
              </span>
            </div>

            {/* Image caption badge */}
            <div className="absolute bottom-3.5 right-3.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg text-[11px] font-semibold text-zinc-800 shadow-xs border border-zinc-200">
              {heroGallery[selectedImageIndex].label}
            </div>
          </div>

          {/* Thumbnail Gallery Row */}
          <div className="grid grid-cols-4 gap-2.5">
            {heroGallery.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className={`relative aspect-4/3 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                  selectedImageIndex === idx
                    ? 'border-zinc-900 ring-2 ring-zinc-900/20 shadow-xs'
                    : 'border-zinc-200 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Quick Specs Strip */}
          <div className="bg-white border border-zinc-200 rounded-xl p-3.5 grid grid-cols-3 gap-2 text-center text-xs shadow-2xs">
            <div>
              <span className="block text-zinc-400 font-medium text-[10px] uppercase tracking-wider">Capacity</span>
              <span className="font-bold text-zinc-900">8-Quart Total</span>
            </div>
            <div className="border-x border-zinc-200 px-1">
              <span className="block text-zinc-400 font-medium text-[10px] uppercase tracking-wider">Design</span>
              <span className="font-bold text-zinc-900">2 x 4-QT Baskets</span>
            </div>
            <div>
              <span className="block text-zinc-400 font-medium text-[10px] uppercase tracking-wider">Finish</span>
              <span className="font-bold text-zinc-900">Sleek Grey</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Pitch & Conversion Block */}
        <div className="md:col-span-6 flex flex-col justify-center space-y-5">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-1.5 self-start bg-amber-100/90 border border-amber-300/80 px-3.5 py-1 rounded-full">
            <Layers className="w-3.5 h-3.5 text-amber-900" />
            <span className="text-amber-950 font-extrabold text-[11px] sm:text-xs tracking-wider uppercase">
              DUAL-ZONE WEEKNIGHT COOKING
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-900 tracking-tight leading-snug">
            Dinner, Without the Waiting.
          </h1>

          {/* Subheadline */}
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Cook different foods in two independent baskets and bring your meal together with less batch cooking.
          </p>

          {/* Pricing Box */}
          <div className="bg-white border-2 border-emerald-500/20 rounded-2xl p-4 sm:p-6 shadow-sm relative overflow-hidden space-y-4">
            <div className="absolute top-0 right-0 bg-emerald-600 text-white font-extrabold text-xs px-3.5 py-1.5 rounded-bl-xl tracking-wide uppercase shadow-xs">
              SAVE ${PRODUCT_INFO.savings.toFixed(2)}
            </div>

            <div className="flex flex-col gap-1.5 pt-1">
              <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">Special Direct Offer</span>
              
              <div className="flex items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
                  ${PRODUCT_INFO.sellingPrice.toFixed(0)}
                </span>
                <span className="text-lg text-zinc-400 line-through font-semibold">
                  ${PRODUCT_INFO.compareAtPrice.toFixed(2)}
                </span>
                <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">
                  Save ${PRODUCT_INFO.savings.toFixed(2)}
                </span>
              </div>

              <div className="flex items-center gap-2 mt-0.5 text-xs text-emerald-800 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Free Shipping • 30-Day Returns</span>
              </div>
            </div>

            {/* Primary CTA Button */}
            <div className="pt-2 border-t border-zinc-100">
              <button
                onClick={onCtaClick}
                className="w-full bg-zinc-900 hover:bg-black text-white font-extrabold text-base sm:text-lg py-3.5 px-6 rounded-xl shadow-md transition-all duration-200 flex items-center justify-center gap-2.5 group cursor-pointer active:scale-98"
              >
                <span>GET IT FOR $99</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Trust Line */}
              <div className="flex items-center justify-center gap-5 text-xs font-semibold text-zinc-600 mt-3.5">
                <span className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-zinc-700" />
                  Free Shipping
                </span>
                <span className="text-zinc-300">•</span>
                <span className="flex items-center gap-1.5">
                  <RotateCcw className="w-3.5 h-3.5 text-zinc-700" />
                  30-Day Returns
                </span>
              </div>
            </div>
          </div>

          {/* Trust Checklist */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-zinc-700 pt-1">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Two independent 4-QT baskets</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Smart Finish timer synchronization</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>6-in-1 cooking versatility</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Non-stick, dishwasher-safe baskets</span>
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
};
