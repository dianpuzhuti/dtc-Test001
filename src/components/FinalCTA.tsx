import React from 'react';
import { Truck, RotateCcw, ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCT_INFO, PRODUCT_IMAGES } from '../data/productData';

interface FinalCTAProps {
  onCtaClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onCtaClick }) => {
  return (
    <section className="bg-gradient-to-b from-white via-amber-50/30 to-zinc-100 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto bg-white border-2 border-zinc-900 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Product Visual */}
          <div className="md:col-span-5 space-y-3">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-zinc-200 shadow-md">
              <img
                src={PRODUCT_IMAGES.heroMain}
                alt="Ninja DZ201 8-QT Air Fryer"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-2 left-2 bg-amber-500 text-zinc-950 font-black text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wide">
                $99 SPECIAL OFFER
              </div>
            </div>

            <div className="bg-zinc-50 border border-zinc-200/80 rounded-xl p-3 text-center text-xs space-y-1">
              <span className="font-extrabold text-zinc-900 block">{PRODUCT_INFO.title}</span>
              <span className="text-zinc-500 text-[11px] block">Grey • 8-QT Capacity • Model DZ201</span>
            </div>
          </div>

          {/* Right Column: Final Call to Action */}
          <div className="md:col-span-7 space-y-5 text-left">
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full border border-amber-300/60">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>DUALZONE™ WEEKNIGHT CONVENIENCE</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight">
                Make Weeknight Meals Easier.
              </h2>

              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                Cook two foods in independent baskets at the same time and bring your meal together with less batch cooking.
              </p>
            </div>

            {/* Price Row */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl sm:text-4xl font-black text-zinc-900">
                $99
              </span>
              <span className="text-lg text-zinc-400 line-through font-semibold">
                ${PRODUCT_INFO.compareAtPrice.toFixed(2)}
              </span>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-full border border-emerald-300/60">
                Save ${PRODUCT_INFO.savings.toFixed(2)}
              </span>
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={onCtaClick}
                className="w-full bg-zinc-900 hover:bg-black text-white font-extrabold text-lg py-4 px-6 rounded-xl shadow-md transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer active:scale-98"
              >
                <span>GET IT FOR $99</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Trust Line */}
              <div className="flex items-center justify-center gap-4 text-xs font-semibold text-zinc-600 mt-3">
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-zinc-700" />
                  Free Shipping
                </span>
                <span className="text-zinc-300">•</span>
                <span className="flex items-center gap-1">
                  <RotateCcw className="w-3.5 h-3.5 text-zinc-700" />
                  30-Day Returns
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
