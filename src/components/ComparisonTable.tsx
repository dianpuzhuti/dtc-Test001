import React from 'react';
import { CheckCircle2, XCircle, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ComparisonTableProps {
  onCtaClick: () => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ onCtaClick }) => {
  const { t, formatPrice } = useLanguage();

  return (
    <section className="bg-slate-50 py-16 px-4 sm:px-6 border-b border-slate-200">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-900 text-xs font-black px-3.5 py-1 rounded-full border border-sky-200 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-700" />
            <span>{t.comparisonTable.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            {t.comparisonTable.title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.comparisonTable.subtitle}
          </p>
        </div>

        {/* 3-Column Comparative Benchmark Table */}
        <div className="overflow-x-auto rounded-3xl border border-slate-200/90 shadow-sm bg-white">
          <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="p-4 sm:p-5 font-black text-slate-600 w-1/4">
                  {t.comparisonTable.columns[0]}
                </th>
                <th className="p-4 sm:p-5 font-black text-white bg-slate-950 w-2/5 shadow-md">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm sm:text-base">{t.comparisonTable.columns[1]}</span>
                  </div>
                  <span className="text-[10px] text-sky-400 font-bold block uppercase tracking-wider">
                    ISO 22716 Clinical
                  </span>
                </th>
                <th className="p-4 sm:p-5 font-bold text-slate-700 w-1/5">
                  {t.comparisonTable.columns[2]}
                </th>
                <th className="p-4 sm:p-5 font-bold text-slate-500 w-1/5">
                  {t.comparisonTable.columns[3]}
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {t.comparisonTable.rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  
                  {/* Feature Name */}
                  <td className="p-4 sm:p-5 font-extrabold text-slate-900 bg-slate-50/30">
                    {row.feature}
                  </td>

                  {/* PeptiDerm Highlight Column */}
                  <td className="p-4 sm:p-5 font-black text-slate-900 bg-sky-50/40 border-x border-sky-100/80">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-sky-950 font-black block">{row.peptiDerm}</span>
                      </div>
                    </div>
                  </td>

                  {/* High-Strength Retinol */}
                  <td className="p-4 sm:p-5 text-slate-600">
                    <div className="flex items-start gap-1.5">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700 leading-snug">{row.retinol}</span>
                    </div>
                  </td>

                  {/* Traditional Moisturizer */}
                  <td className="p-4 sm:p-5 text-slate-500">
                    <div className="flex items-start gap-1.5">
                      <XCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span className="text-slate-500 leading-snug">{row.trad}</span>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA Footer Note */}
        <div className="text-center space-y-3">
          <button
            onClick={onCtaClick}
            className="bg-slate-900 hover:bg-sky-950 text-white font-black text-xs sm:text-sm py-3.5 px-8 rounded-xl shadow-md transition-all inline-flex items-center gap-2 cursor-pointer active:scale-98"
          >
            <span>{t.hero.ctaButton} ({t.header.from} {formatPrice(29)})</span>
            <ArrowRight className="w-4 h-4 text-sky-400" />
          </button>
          <p className="text-[11px] text-slate-500">
            {t.topBar.rightGuarantee} • {t.hero.secureGuarantee}
          </p>
        </div>

      </div>
    </section>
  );
};
