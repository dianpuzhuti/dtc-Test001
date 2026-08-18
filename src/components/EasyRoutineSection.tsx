import React from 'react';
import { Sparkles, Check, ShieldCheck, Waves } from 'lucide-react';
import { PRODUCT_IMAGES } from '../data/productData';

export const EasyRoutineSection: React.FC = () => {
  return (
    <section className="bg-zinc-50 py-12 px-4 sm:px-6 border-b border-zinc-200">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
            PRACTICAL KITCHEN CARE
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight">
            Cook More. Clean Up Easier.
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Non-stick cooking surfaces and dishwasher-safe components make weeknight cleanup effortless.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Card 1: Non-Stick Crisper Plates */}
          <div className="bg-white border border-zinc-200 rounded-2xl p-5 space-y-3 shadow-2xs hover:border-zinc-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-zinc-900 text-base">Non-Stick Crisper Plates</h3>
            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
              Food releases smoothly off ceramic non-stick plates without heavy grease buildup or scrub cycles.
            </p>
          </div>

          {/* Card 2: Dishwasher-Safe Baskets */}
          <div className="bg-white border border-zinc-200 rounded-2xl p-5 space-y-3 shadow-2xs hover:border-zinc-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center font-bold">
              <Waves className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-zinc-900 text-base">Dishwasher-Safe Baskets</h3>
            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
              Both 4-quart cooking baskets wipe down easily by hand or pop directly into the dishwasher.
            </p>
          </div>

          {/* Card 3: Wipedown Grey Finish */}
          <div className="bg-white border border-zinc-200 rounded-2xl p-5 space-y-3 shadow-2xs hover:border-zinc-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-zinc-900 text-base">Wipe-Clean Grey Exterior</h3>
            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
              Smooth dark grey housing resists smudges and fingerprint marks with a quick damp cloth wipedown.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
