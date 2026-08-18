import React from 'react';
import { CheckCircle2, XCircle, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPARISON_DATA } from '../data/productData';

interface ComparisonTableProps {
  onCtaClick: () => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ onCtaClick }) => {
  return (
    <section className="bg-slate-50 py-16 px-4 sm:px-6 border-b border-slate-200">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-900 text-xs font-black px-3.5 py-1 rounded-full border border-sky-200 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-700" />
            <span>CLINICAL BENCHMARK • 3-WAY COMPARISON</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Why Bio-Peptides Outperform Traditional Retinol and Generic Creams
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Compare mechanism of action, barrier tolerance, finish, and 28-day clinical efficacy side by side.
          </p>
        </div>

        {/* 3-Column Comparative Benchmark Table */}
        <div className="overflow-x-auto rounded-3xl border border-slate-200/90 shadow-sm bg-white">
          <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="p-4 sm:p-5 font-black text-slate-600 w-1/4">
                  Assessment Metric
                </th>
                <th className="p-4 sm:p-5 font-black text-white bg-slate-950 w-2/5 shadow-md">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm sm:text-base">PeptiDerm™ (Bio-Peptides)</span>
                  </div>
                  <span className="text-[10px] text-sky-400 font-bold block uppercase tracking-wider">
                    Official Formula
                  </span>
                </th>
                <th className="p-4 sm:p-5 font-bold text-slate-700 w-1/5">
                  High-Strength Retinoid
                </th>
                <th className="p-4 sm:p-5 font-bold text-slate-500 w-1/5">
                  Generic Moisturizer
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {COMPARISON_DATA.map((row, idx) => (
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
                        <span className="text-sky-950 font-black block">{row.peptiDerm.text}</span>
                        {row.peptiDerm.subtext && (
                          <span className="text-[11px] text-sky-800 font-medium block mt-0.5">
                            {row.peptiDerm.subtext}
                          </span>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* High-Strength Retinol */}
                  <td className="p-4 sm:p-5 text-slate-600">
                    <div className="flex items-start gap-1.5">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700 leading-snug">{row.retinolCream.text}</span>
                    </div>
                  </td>

                  {/* Traditional Moisturizer */}
                  <td className="p-4 sm:p-5 text-slate-500">
                    <div className="flex items-start gap-1.5">
                      <XCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span className="text-slate-500 leading-snug">{row.traditionalMoisturizer.text}</span>
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
            className="bg-slate-900 hover:bg-sky-950 text-white font-black text-sm py-3.5 px-8 rounded-xl shadow-md transition-all inline-flex items-center gap-2 cursor-pointer active:scale-98"
          >
            <span>Claim Your 50ml Core Regimen ($49)</span>
            <ArrowRight className="w-4 h-4 text-sky-400" />
          </button>
          <p className="text-[11px] text-slate-500">
            Backed by our 30-Day Money-Back Guarantee • Zero Risk Trial
          </p>
        </div>

      </div>
    </section>
  );
};
