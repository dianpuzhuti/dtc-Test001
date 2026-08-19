import React from 'react';
import { Sun, Moon, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const RoutineGuideSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 border-b border-slate-200">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-2.5 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-900 text-xs font-black px-3.5 py-1 rounded-full border border-sky-200 uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5 text-sky-700" />
            <span>{t.routineGuide.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            {t.routineGuide.title}
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            {t.routineGuide.subtitle}
          </p>
        </div>

        {/* 2-Column Morning / Evening Ritual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Morning Routine Card */}
          <div className="bg-gradient-to-b from-amber-50/50 to-sky-50/40 border border-amber-200/70 rounded-3xl p-6 sm:p-8 space-y-5 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-amber-200/60 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                    <Sun className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900">{t.routineGuide.morning.title}</h3>
                  </div>
                </div>
                <span className="text-xs font-black text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full">
                  1-2 Pumps
                </span>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                {t.routineGuide.morning.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-white/80 p-3 rounded-2xl border border-amber-100">
                    <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-100/60 text-amber-900 p-3 rounded-2xl text-xs font-bold text-center">
              ✓ Photostable Bio-Peptides • Zero UV Sensitivity
            </div>
          </div>

          {/* Evening Routine Card */}
          <div className="bg-slate-950 text-white border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-5 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-sky-900 text-sky-300 flex items-center justify-center font-bold">
                    <Moon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-white">{t.routineGuide.night.title}</h3>
                  </div>
                </div>
                <span className="text-xs font-black text-sky-300 bg-sky-950 px-2.5 py-1 rounded-full border border-sky-800">
                  2 Pumps
                </span>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                {t.routineGuide.night.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-slate-900/90 p-3 rounded-2xl border border-slate-800">
                    <span className="w-5 h-5 rounded-full bg-sky-500 text-slate-950 flex items-center justify-center text-[10px] font-bold shrink-0">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-sky-950/60 text-sky-300 border border-sky-800 p-3 rounded-2xl text-xs font-bold text-center">
              ✓ Overnight Fibroblast Collagen Mitosis Active
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
