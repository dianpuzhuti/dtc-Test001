import React from 'react';
import { Sun, Moon, Sparkles, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

export const RoutineGuideSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 border-b border-slate-200">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-900 text-xs font-black px-3.5 py-1 rounded-full border border-sky-200 uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5 text-sky-700" />
            <span>CLINICAL PROTOCOL • AM & PM APPLICATION</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            How to Use PeptiDerm in Your Daily Clinical Routine
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Unlike photosensitive retinoids, our bio-peptide formula is non-photosensitive and empowers both morning oxidative protection and evening deep collagen repair.
          </p>
        </div>

        {/* 2-Column Morning / Evening Ritual */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Morning Routine Card */}
          <div className="bg-sky-50/50 border border-sky-200/80 rounded-3xl p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between border-b border-sky-200/60 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
                  <Sun className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-black uppercase text-amber-700 tracking-wider">Step 04 • Morning</span>
                  <h3 className="text-lg font-black text-slate-900">Anti-Glycation & Photo-Defense</h3>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              In the morning, Decarboxy Carnosine and 5 Ceramides shield against daytime free radicals, blue light, and sugar-induced collagen stiffening.
            </p>

            <div className="space-y-2.5 text-xs text-slate-700 font-medium">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>Apply 1 pump after cleanser and Vitamin C serum</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>Absorbs in 3 seconds to a breathable matte primer finish</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>Follow with daily sunscreen; makeup glides on without pilling</span>
              </div>
            </div>
          </div>

          {/* Evening Routine Card */}
          <div className="bg-slate-950 text-white border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-sky-900 text-sky-300 flex items-center justify-center">
                  <Moon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-black uppercase text-sky-400 tracking-wider">Step 04 • Evening</span>
                  <h3 className="text-lg font-black text-white">Deep Cellular Collagen Sculpting</h3>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              During your skin’s peak nighttime repair cycle, Copper Tripeptide and Hexapeptide-8 activate fibroblasts for intensive tissue rebuilding.
            </p>

            <div className="space-y-2.5 text-xs text-slate-300 font-medium">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Apply 1-2 pumps over cleansed face, neck, and décolletage</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Use the cold zinc-alloy spatula in upward strokes along jawline</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Wake up to deeply plump, calm, and rested skin with zero pillow grease</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
