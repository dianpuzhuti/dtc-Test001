import React from 'react';
import { Utensils, Clock, Layers } from 'lucide-react';
import { PRODUCT_IMAGES } from '../data/productData';

export const FamilyWeeknight: React.FC = () => {
  return (
    <section className="bg-amber-50/50 py-12 px-4 sm:px-6 border-b border-zinc-200">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Real Kitchen Photo */}
        <div className="md:col-span-6 space-y-3">
          <div className="relative aspect-4/3 sm:aspect-16/10 rounded-2xl overflow-hidden border border-amber-200/80 shadow-md bg-zinc-100">
            <img
              src={PRODUCT_IMAGES.familyLifestyle}
              alt="Real kitchen setup with family weeknight dinner"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="bg-amber-500 text-zinc-950 text-[10px] font-black uppercase px-2.5 py-1 rounded-md tracking-wider">
                REAL KITCHEN ROUTINE
              </span>
              <p className="text-xs sm:text-sm font-semibold mt-1 text-amber-50">
                Fresh, complete weeknight meals served together.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Benefits */}
        <div className="md:col-span-6 space-y-5">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-200/60 px-3 py-1 rounded-full border border-amber-300/60">
              WEEKNIGHT CONVENIENCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight">
              Built for Real Weeknights.
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Designed for busy households who need complete, wholesome dinners with minimal fuss.
            </p>
          </div>

          {/* Short Bullet Points */}
          <div className="space-y-3">
            
            {/* Benefit 1 */}
            <div className="bg-white border border-amber-200/80 rounded-xl p-4 shadow-2xs flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                <Utensils className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-zinc-900 text-sm sm:text-base">
                  Less batch cooking
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm mt-0.5">
                  Prepare main dishes and sides simultaneously in 8-QT total capacity without running round two.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white border border-amber-200/80 rounded-xl p-4 shadow-2xs flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-zinc-900 text-sm sm:text-base">
                  More meal flexibility
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm mt-0.5">
                  Cook different foods with separate temperature controls and functions for picky eaters or mixed diets.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white border border-amber-200/80 rounded-xl p-4 shadow-2xs flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-zinc-900 text-sm sm:text-base">
                  Less waiting between foods
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm mt-0.5">
                  Smart Finish coordinates timers so both baskets are served piping hot at the exact same time.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
