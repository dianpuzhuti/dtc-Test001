import React, { useState } from 'react';
import {
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  Activity,
  ArrowRight,
  ShieldAlert,
  Zap,
  Layers,
  ChevronRight
} from 'lucide-react';
import { DIALECTICAL_CONTRADICTIONS } from '../data/productData';

interface DialecticalBusterProps {
  onCtaClick: () => void;
}

export const DialecticalBuster: React.FC<DialecticalBusterProps> = ({ onCtaClick }) => {
  const [activeTabId, setActiveTabId] = useState<string>("contradiction-tolerance");

  const activeItem = DIALECTICAL_CONTRADICTIONS.find((c) => c.id === activeTabId) || DIALECTICAL_CONTRADICTIONS[0];

  return (
    <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 border-b border-slate-800 relative overflow-hidden">
      
      {/* Background Molecular Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto space-y-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-sky-500/20 text-sky-300 text-xs font-black px-3.5 py-1 rounded-full border border-sky-500/30 tracking-wider uppercase">
            <Activity className="w-3.5 h-3.5" />
            <span>DIALECTICAL BREAKTHROUGH • 矛盾论破局</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug">
            破解传统抗衰三大对立矛盾
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            抗衰老不应是以牺牲皮肤屏障为代价的赌博。PeptiDerm 运用细胞生物学仿生信号肽，实现功效与温和的双重统一。
          </p>
        </div>

        {/* 3 Contradiction Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {DIALECTICAL_CONTRADICTIONS.map((item) => {
            const isSelected = item.id === activeTabId;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTabId(item.id)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-2 relative overflow-hidden ${
                  isSelected
                    ? 'border-sky-500 bg-sky-950/70 shadow-lg ring-2 ring-sky-500/30'
                    : 'border-slate-800 bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-black uppercase tracking-wider ${
                    isSelected ? 'text-sky-400' : 'text-slate-400'
                  }`}>
                    {item.title.split('：')[0]}
                  </span>
                  <span className={`text-xs font-black ${
                    isSelected ? 'text-white' : 'text-slate-500'
                  }`}>
                    {item.statNumber}
                  </span>
                </div>
                
                <h3 className="font-extrabold text-sm sm:text-base text-white tracking-tight">
                  {item.title.split('：')[1]}
                </h3>

                <p className="text-[11px] text-slate-400 line-clamp-1 italic">
                  {item.coreContradiction}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Contradiction Deep-Dive Comparison Matrix */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-8">
          
          {/* Header of Active Contradiction */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block">
                {activeItem.title}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                {activeItem.coreContradiction}
              </h3>
            </div>

            <div className="bg-sky-900/40 border border-sky-500/40 rounded-2xl px-4 py-2 text-right shrink-0 flex items-center gap-3">
              <div>
                <span className="text-2xl sm:text-3xl font-black text-sky-300 block leading-none">
                  {activeItem.statNumber}
                </span>
                <span className="text-[10px] text-slate-300 font-semibold">
                  {activeItem.statLabel}
                </span>
              </div>
              <Sparkles className="w-6 h-6 text-sky-400 shrink-0" />
            </div>
          </div>

          {/* 2-Column Dialectical Battle: Traditional Dilemma vs PeptiDerm Breakthrough */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left: Traditional Dilemma (The Thesis) */}
            <div className="bg-red-950/30 border-2 border-red-900/40 rounded-2xl p-5 sm:p-6 space-y-4">
              <div className="flex items-center gap-2 text-red-400 font-black text-xs uppercase tracking-wider bg-red-950/80 border border-red-800/80 px-3 py-1 rounded-full w-fit">
                <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                <span>传统抗衰方案的困境与妥协</span>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-black text-slate-200">受试者真实痛点：</h4>
                  <p className="text-xs text-red-200/90 mt-1 leading-relaxed">
                    {activeItem.traditionalPain}
                  </p>
                </div>

                <div className="pt-2 border-t border-red-900/40 text-[11px] text-slate-400">
                  <strong className="text-red-300">根源机制缺陷：</strong> {activeItem.traditionalWhy}
                </div>
              </div>
            </div>

            {/* Right: PeptiDerm Synthesis Breakthrough (The Dialectical Resolution) */}
            <div className="bg-gradient-to-b from-sky-950/60 to-slate-900 border-2 border-sky-500/60 rounded-2xl p-5 sm:p-6 space-y-4 shadow-lg relative">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sky-300 font-black text-xs uppercase tracking-wider bg-sky-900/80 border border-sky-500/60 px-3 py-1 rounded-full w-fit">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  <span>PeptiDerm 多肽仿生破局方案</span>
                </div>
                <span className="text-[10px] font-black text-emerald-400 uppercase bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                  100% 破局
                </span>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-black text-white">生物分子技术创新：</h4>
                  <p className="text-xs text-sky-100 font-semibold mt-1">
                    {activeItem.peptiDermBreakthrough}
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeItem.molecularMechanism}
                </p>

                <div className="pt-2 border-t border-sky-800/80 text-[11px] text-sky-300 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>{activeItem.clinicalProof}</span>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Action Strip */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-slate-800">
            <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
              <Zap className="w-4 h-4 text-amber-400 shrink-0" />
              <span>无需建立耐受 • 早晚均可涂抹 • 敏感肌直接见证淡纹</span>
            </div>

            <button
              onClick={onCtaClick}
              className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-xs px-5 py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-98 shadow-md"
            >
              <span>体验多肽破局配方 $29 起</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
