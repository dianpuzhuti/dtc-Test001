import React from 'react';
import { Package, ShieldCheck, CheckCircle2, Sparkles, Wind, Droplets, Shield } from 'lucide-react';
import { WHATS_IN_THE_BOX_DATA, PRODUCT_IMAGES } from '../data/productData';

export const WhatsInBoxSection: React.FC = () => {
  return (
    <section className="bg-slate-50 py-12 sm:py-16 px-4 sm:px-6 border-b border-slate-200">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-2.5 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-900 text-xs font-black px-3.5 py-1 rounded-full border border-sky-200 uppercase tracking-wider">
            <Package className="w-3.5 h-3.5 text-sky-700" />
            <span>UNBOXING & PACKAGING • CLINICAL INTEGRITY</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Medical Packaging: Fresh Bio-Peptides to the Last Drop
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Sensitive peptide chains oxidize when exposed to air. We engineered a 100% sterile vacuum seal.
          </p>
        </div>

        {/* Visual Packaging Highlight Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Card 1: Airless Jar */}
          <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="aspect-4/3 overflow-hidden bg-slate-100 relative">
              <img
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
                alt="Airless Vacuum Chamber Unit"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-black px-2.5 py-1 rounded-full">
                100% AIRLESS VACUUM
              </div>
            </div>
            <div className="p-5 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
                Precision Metered Pump
              </span>
              <h3 className="font-extrabold text-slate-900 text-base">
                Dual-Chamber Vacuum Shield
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Prevents 100% of oxygen and UV degradation, keeping bio-peptides at 99.8% peak potency.
              </p>
            </div>
          </div>

          {/* Card 2: Cryo Sculpting Wand */}
          <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="aspect-4/3 overflow-hidden bg-slate-100 relative">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
                alt="Cryo Zinc-Alloy Sculpting Wand"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-amber-500 text-slate-950 text-[10px] font-black px-2.5 py-1 rounded-full">
                FREE WITH 50ML / 100ML ($18 VALUE)
              </div>
            </div>
            <div className="p-5 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                Antibacterial Zinc-Alloy
              </span>
              <h3 className="font-extrabold text-slate-900 text-base">
                Cryo Sculpting Micro-Spatula
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Instant cooling contact relieves morning puffiness and contours the jawline via lymphatic drainage.
              </p>
            </div>
          </div>

          {/* Card 3: 28-Day Clinical Journal & GMP Seal */}
          <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="aspect-4/3 overflow-hidden bg-slate-100 relative">
              <img
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80"
                alt="28-Day Clinical Progress Journal"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-sky-900 text-white text-[10px] font-black px-2.5 py-1 rounded-full">
                SGS BATCH-VERIFIED
              </div>
            </div>
            <div className="p-5 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                Clinical Benchmarks
              </span>
              <h3 className="font-extrabold text-slate-900 text-base">
                28-Day Skin Tracking Protocol
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Step-by-step weekly self-assessment guide designed by dermatologists to track your collagen density.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
