import React from 'react';
import { Package, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { WHATS_IN_THE_BOX_DATA, PRODUCT_IMAGES } from '../data/productData';

export const WhatsInBoxSection: React.FC = () => {
  return (
    <section className="bg-slate-50 py-16 px-4 sm:px-6 border-b border-slate-200">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-900 text-xs font-black px-3.5 py-1 rounded-full border border-sky-200 uppercase tracking-wider">
            <Package className="w-3.5 h-3.5 text-sky-700" />
            <span>UNBOXING & PACKAGING • CLINICAL INTEGRITY</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            What’s in the Box: Medical-Grade Freshness Guaranteed
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every component is engineered to protect peptide active molecular chains from oxidation and contamination.
          </p>
        </div>

        {/* 4 Box Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {WHATS_IN_THE_BOX_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-slate-200/90 p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
                    {item.clinicalSpec}
                  </span>
                  <h3 className="font-extrabold text-slate-900 text-base mt-2">
                    {item.name}
                  </h3>
                </div>
                <span className="text-xs font-bold text-slate-400">
                  {item.quantity}
                </span>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
