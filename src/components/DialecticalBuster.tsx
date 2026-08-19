import React from 'react';
import { ShieldCheck, Sparkles, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface DialecticalBusterProps {
  onCtaClick: () => void;
}

export const DialecticalBuster: React.FC<DialecticalBusterProps> = ({ onCtaClick }) => {
  const { t, formatPrice } = useLanguage();

  return (
    <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 border-b border-slate-800">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-sky-500/20 text-sky-300 text-xs font-black px-3.5 py-1 rounded-full border border-sky-500/30 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>{t.contradictionBuster.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            {t.contradictionBuster.title}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.contradictionBuster.subtitle}
          </p>
        </div>

        {/* 4 Contradiction Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.contradictionBuster.cards.map((item) => (
            <div
              key={item.id}
              className="bg-slate-950/80 border border-slate-800 rounded-3xl p-5 sm:p-6 flex flex-col justify-between space-y-5 shadow-xl relative overflow-hidden group hover:border-sky-700/60 transition-colors"
            >
              <div className="space-y-4">
                
                {/* Contradiction Title */}
                <div className="border-b border-slate-800 pb-3">
                  <h3 className="font-extrabold text-white text-sm sm:text-base leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* Problem vs Breakthrough Comparison */}
                <div className="space-y-3 text-xs">
                  
                  {/* Traditional Pain */}
                  <div className="bg-red-950/40 border border-red-900/40 rounded-2xl p-3 space-y-1 text-red-200">
                    <div className="flex items-center gap-1.5 font-bold text-red-400">
                      <XCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{t.contradictionBuster.traditionalTitle}:</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-[11px]">
                      {item.traditional}
                    </p>
                  </div>

                  {/* PeptiDerm Breakthrough */}
                  <div className="bg-sky-950/60 border border-sky-800/60 rounded-2xl p-3 space-y-1.5 text-sky-100">
                    <div className="flex items-center gap-1.5 font-black text-sky-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>{t.contradictionBuster.breakthroughTitle}:</span>
                    </div>
                    <p className="text-slate-200 leading-relaxed text-[11px] font-medium">
                      {item.peptiDerm}
                    </p>
                  </div>

                </div>

              </div>

              {/* Stat Highlight Metric */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block">{item.statLabel}</span>
                  <span className="text-xl sm:text-2xl font-black text-sky-400">{item.stat}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-sky-900/50 flex items-center justify-center text-sky-300 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="bg-gradient-to-r from-sky-950 via-slate-900 to-sky-950 border border-sky-800/50 rounded-3xl p-6 text-center space-y-4 max-w-2xl mx-auto">
          <h4 className="text-base sm:text-lg font-black text-white">
            {t.hero.headlineSubtitle}
          </h4>
          <button
            onClick={onCtaClick}
            className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-black px-6 sm:px-8 py-3.5 rounded-xl text-xs sm:text-sm transition-all shadow-lg inline-flex items-center gap-2 cursor-pointer active:scale-98"
          >
            <span>{t.comparisonSlider.cta} ({t.header.from} {formatPrice(29)})</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>

      </div>
    </section>
  );
};
