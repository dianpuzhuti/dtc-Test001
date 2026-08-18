import React from 'react';
import { ShieldCheck, Sparkles, Droplets, Zap, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { DIALECTICAL_CONTRADICTIONS } from '../data/productData';

interface DialecticalBusterProps {
  onCtaClick: () => void;
}

export const DialecticalBuster: React.FC<DialecticalBusterProps> = ({ onCtaClick }) => {
  return (
    <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 border-b border-slate-800">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-sky-500/20 text-sky-300 text-xs font-black px-3.5 py-1 rounded-full border border-sky-500/30 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>DIALECTICAL BREAKTHROUGH • RESOLVING CONTRADICTIONS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            Breaking the Three Core Contradictions of Traditional Anti-Aging
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Anti-aging should never be a gamble that sacrifices your protective skin barrier. PeptiDerm leverages cellular bio-mimetic peptides to unify maximum potency with physiological gentleness.
          </p>
        </div>

        {/* 3 Contradiction Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DIALECTICAL_CONTRADICTIONS.map((item) => (
            <div
              key={item.id}
              className="bg-slate-950/80 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden group hover:border-sky-700/60 transition-colors"
            >
              <div className="space-y-4">
                
                {/* Contradiction Title & Core Conflict */}
                <div className="space-y-1.5 border-b border-slate-800 pb-3">
                  <span className="text-[11px] font-black uppercase tracking-wider text-sky-400 block">
                    {item.title}
                  </span>
                  <h3 className="font-extrabold text-white text-base leading-snug">
                    {item.coreContradiction}
                  </h3>
                </div>

                {/* Problem vs Breakthrough Comparison */}
                <div className="space-y-3 text-xs">
                  
                  {/* Traditional Pain */}
                  <div className="bg-red-950/40 border border-red-900/40 rounded-2xl p-3.5 space-y-1 text-red-200">
                    <div className="flex items-center gap-1.5 font-bold text-red-400">
                      <XCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>Conventional Flaw:</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      {item.traditionalPain}
                    </p>
                  </div>

                  {/* PeptiDerm Breakthrough */}
                  <div className="bg-sky-950/60 border border-sky-800/60 rounded-2xl p-3.5 space-y-1.5 text-sky-100">
                    <div className="flex items-center gap-1.5 font-black text-sky-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>PeptiDerm Cellular Resolution:</span>
                    </div>
                    <span className="font-bold text-white block">
                      {item.peptiDermBreakthrough}
                    </span>
                    <p className="text-slate-300 leading-relaxed text-[11px]">
                      {item.molecularMechanism}
                    </p>
                  </div>

                </div>

              </div>

              {/* Stat Highlight Metric */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">{item.statLabel}</span>
                  <span className="text-2xl font-black text-sky-400">{item.statNumber}</span>
                </div>
                <div className="w-9 h-9 rounded-full bg-sky-900/50 flex items-center justify-center text-sky-300">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="bg-gradient-to-r from-sky-950 via-slate-900 to-sky-950 border border-sky-800/50 rounded-3xl p-6 text-center space-y-4 max-w-2xl mx-auto">
          <h4 className="text-lg font-black text-white">
            Ready to experience gentle, clinical-grade wrinkle reduction?
          </h4>
          <button
            onClick={onCtaClick}
            className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-black px-8 py-3.5 rounded-xl text-sm transition-all shadow-lg inline-flex items-center gap-2 cursor-pointer active:scale-98"
          >
            <span>Start Your 28-Day Clinical Trial ($29+)</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>

      </div>
    </section>
  );
};
