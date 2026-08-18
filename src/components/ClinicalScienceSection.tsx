import React from 'react';
import { Activity, Award, CheckCircle2, TrendingUp, TrendingDown, Layers, FileCheck } from 'lucide-react';
import { CLINICAL_TRIAL_RESULTS, PRODUCT_IMAGES } from '../data/productData';

export const ClinicalScienceSection: React.FC = () => {
  return (
    <section className="bg-slate-50 py-16 px-4 sm:px-6 border-b border-slate-200">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-900 text-xs font-black px-3.5 py-1 rounded-full border border-sky-200 uppercase tracking-wider">
            <FileCheck className="w-3.5 h-3.5 text-sky-700" />
            <span>DOUBLE-BLIND CLINICAL DATA • 28-DAY EVIDENCE</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Backed by Clinical Double-Blind Instruments, Not Subjective Guesswork
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Tested across 60 subjects over 28 consecutive days using German PRIMOS 3D micro-topography, DermaLab high-frequency ultrasound, and Swiss SGS patch testing.
          </p>
        </div>

        {/* 4 Clinical Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CLINICAL_TRIAL_RESULTS.map((res) => {
            const isIncrease = res.changeDirection === 'increase';
            return (
              <div
                key={res.id}
                className="bg-white rounded-3xl border border-slate-200/90 p-6 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-sky-800 bg-sky-50 px-2.5 py-0.5 rounded-full inline-block border border-sky-100">
                    {res.timeframe}
                  </span>

                  <div className="flex items-baseline justify-between pt-1">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                      {res.changeValue}
                    </span>
                    <span className={`inline-flex items-center text-xs font-bold ${
                      isIncrease ? 'text-emerald-600' : 'text-sky-600'
                    }`}>
                      {isIncrease ? <TrendingUp className="w-4 h-4 mr-0.5" /> : <TrendingDown className="w-4 h-4 mr-0.5" />}
                      {isIncrease ? 'Improvement' : 'Reduction'}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-slate-900 text-base">
                    {res.metric}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed">
                    {res.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-600 flex items-center justify-between">
                  <span>{res.methodology}</span>
                  <span className="font-semibold text-slate-700">Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clinical Instrument Visual & Protocol Box */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xs">
          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-4/3">
            <img
              src={PRODUCT_IMAGES.clinicalLab}
              alt="Medical Dermatology Laboratory"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-sky-700 uppercase tracking-wide">
                Rigorous Dermatological Standards
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                100,000-Class GMP Cleanroom Formulation & Packaging
              </h3>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Every single batch is packaged under medical cleanroom standards in dual-chamber airless vacuum containers. This eliminates oxygen exposure and microbial contamination, keeping peptide active chains at peak bioavailability from first press to last drop.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Micro-Exfoliation</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Photosensitivity (AM/PM)</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>1:1 Natural Sebum Ratio</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Non-Comedogenic Tested</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
