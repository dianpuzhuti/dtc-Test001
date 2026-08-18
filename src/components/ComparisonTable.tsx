import React from 'react';
import { Check, X, ShieldCheck, Activity, Award, Sparkles } from 'lucide-react';
import { COMPARISON_DATA } from '../data/productData';

interface ComparisonTableProps {
  onCtaClick: () => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ onCtaClick }) => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 border-b border-slate-200/90">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-900 text-xs font-black px-3.5 py-1 rounded-full border border-sky-200 tracking-wider uppercase">
            <Award className="w-3.5 h-3.5 text-sky-700" />
            <span>CLINICAL BENCHMARK • 临床硬核横评</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            为什么生物多肽全面超越传统抗衰？
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            从作用机制、耐受安全性、肤感质地到停用反弹率，看 PeptiDerm 如何用科学配方建立新标杆。
          </p>
        </div>

        {/* Responsive Medical Comparison Table */}
        <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm bg-white">
          <table className="w-full text-left border-collapse min-w-[620px]">
            
            {/* Table Header */}
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80">
                <th className="p-4 sm:p-5 text-xs font-black text-slate-500 uppercase tracking-wider w-1/4">
                  评估维度 (Metric)
                </th>

                {/* PeptiDerm Highlight Column */}
                <th className="p-4 sm:p-5 text-xs font-black uppercase tracking-wider w-2/5 bg-gradient-to-b from-sky-900 to-slate-900 text-white rounded-t-2xl sm:rounded-t-3xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-sky-400" />
                      <span className="text-sm sm:text-base font-black text-sky-300">PeptiDerm™ 多肽霜</span>
                    </div>
                    <span className="text-[10px] bg-sky-500 text-slate-950 px-2 py-0.5 rounded font-black uppercase">
                      本品
                    </span>
                  </div>
                </th>

                {/* Retinol Column */}
                <th className="p-4 sm:p-5 text-xs font-bold text-slate-700 uppercase tracking-wider w-1/4">
                  传统高浓 A醇 (视黄醇)
                </th>

                {/* Traditional Moisturizer */}
                <th className="p-4 sm:p-5 text-xs font-bold text-slate-500 uppercase tracking-wider w-1/4">
                  普通矿油保湿霜
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {COMPARISON_DATA.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  
                  {/* Metric Name */}
                  <td className="p-4 sm:p-5 font-black text-slate-800 bg-slate-50/40">
                    {row.feature}
                  </td>

                  {/* PeptiDerm Cell */}
                  <td className="p-4 sm:p-5 font-extrabold text-slate-900 bg-sky-50/40 border-x-2 border-sky-500/30">
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-sky-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <div>
                        <span className="text-slate-950 font-black text-sm block">
                          {row.peptiDerm.text}
                        </span>
                        {row.peptiDerm.subtext && (
                          <span className="text-[11px] text-sky-800 font-medium block mt-0.5">
                            {row.peptiDerm.subtext}
                          </span>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* Retinol Cell */}
                  <td className="p-4 sm:p-5 text-slate-600 font-medium">
                    <div className="flex items-start gap-1.5">
                      <div className="w-4 h-4 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span className={row.retinolCream.isNegative ? 'text-slate-600' : 'text-slate-500'}>
                        {row.retinolCream.text}
                      </span>
                    </div>
                  </td>

                  {/* Traditional Moisturizer Cell */}
                  <td className="p-4 sm:p-5 text-slate-500 font-medium">
                    <div className="flex items-start gap-1.5">
                      <div className="w-4 h-4 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span>{row.traditionalMoisturizer.text}</span>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* Clinical Summary Guarantee Banner */}
        <div className="bg-gradient-to-r from-sky-50 via-slate-50 to-sky-50 border border-sky-200/90 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                拒绝“猛药翻车”与“无功无过”的二选一
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                现在选购享 30 天无理由退款，不耐受或无明显淡纹全额退款。
              </p>
            </div>
          </div>

          <button
            onClick={onCtaClick}
            className="bg-slate-900 hover:bg-sky-950 text-white font-black text-xs px-6 py-3.5 rounded-xl shrink-0 transition-all cursor-pointer shadow-xs"
          >
            以 $29 体验多肽高效抗老
          </button>
        </div>

      </div>
    </section>
  );
};
