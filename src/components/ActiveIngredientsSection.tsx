import React, { useState } from 'react';
import { Sparkles, ShieldCheck, CheckCircle2, ChevronRight, Activity, Zap, Layers } from 'lucide-react';
import { ACTIVE_INGREDIENTS } from '../data/productData';

export const ActiveIngredientsSection: React.FC = () => {
  const [selectedIngredientId, setSelectedIngredientId] = useState<string>(ACTIVE_INGREDIENTS[0].id);

  const selectedIngredient = ACTIVE_INGREDIENTS.find((ing) => ing.id === selectedIngredientId) || ACTIVE_INGREDIENTS[0];

  return (
    <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 border-b border-slate-200">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-2.5 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-900 text-xs font-black px-3.5 py-1 rounded-full border border-sky-200 uppercase tracking-wider">
            <Activity className="w-3.5 h-3.5 text-sky-700" />
            <span>BIO-ACTIVE FORMULATION • 7 TARGETED PEPTIDES</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Targeted Cellular Deck: Every Peptide Has a Dermal Mission
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Zero filler extracts. Each medical-grade peptide specifically triggers deep fibroblast collagen pathways.
          </p>
        </div>

        {/* Mobile Horizontal Pill Scroll / Desktop Chip Bar */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center no-scrollbar">
          {ACTIVE_INGREDIENTS.map((ing) => {
            const isSelected = ing.id === selectedIngredientId;
            return (
              <button
                key={ing.id}
                onClick={() => setSelectedIngredientId(ing.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-black transition-all shrink-0 flex items-center gap-2 cursor-pointer border ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-sky-500/30'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-sky-400' : 'bg-slate-400'}`} />
                <span>{ing.name.split('(')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Visual Peptide Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: Deep Molecular Infographic Card */}
          <div className="lg:col-span-7 bg-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6 flex flex-col justify-between relative overflow-hidden">
            
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-950/80 border border-sky-800 px-3 py-1 rounded-full">
                  {selectedIngredient.purity}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {selectedIngredient.chemicalName}
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-3xl font-black text-white leading-tight">
                  {selectedIngredient.name}
                </h3>
                <span className="text-xs sm:text-sm font-semibold text-sky-300 block mt-1">
                  {selectedIngredient.role}
                </span>
              </div>

              {/* Skin Layer Depth Visualizer */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-400 flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-sky-400" />
                    <span>Dermal Target Level:</span>
                  </span>
                  <span className="font-black text-sky-300">{selectedIngredient.skinLayer}</span>
                </div>
                
                {/* Visual Depth Meter */}
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden flex">
                  <div className="bg-sky-500 h-full w-3/4 rounded-full animate-pulse" />
                </div>
              </div>

              {/* Cellular Mechanism */}
              <div className="space-y-1.5 text-xs sm:text-sm">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Cellular Action:
                </span>
                <p className="text-slate-300 leading-relaxed">
                  {selectedIngredient.mechanism}
                </p>
              </div>
            </div>

            {/* Key Clinical Outcome Badge */}
            <div className="bg-sky-950/60 border border-sky-700/60 rounded-2xl p-4 flex items-center gap-3 mt-4">
              <Sparkles className="w-5 h-5 text-sky-400 shrink-0" />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-300 block">Primary Clinical Benefit</span>
                <span className="text-xs sm:text-sm font-black text-white">{selectedIngredient.benefit}</span>
              </div>
            </div>

          </div>

          {/* Right: Visual 6-Purity Certification Bento Grid */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-black uppercase text-sky-700 tracking-wider">Clean Clinical Standards</span>
              <h4 className="font-black text-slate-900 text-lg mt-1">100% Physiological Biocompatibility</h4>
              <p className="text-xs text-slate-600 mt-1">Formulated with zero barrier-stripping chemicals.</p>
            </div>

            <div className="grid grid-cols-2 gap-2.5 text-xs font-bold">
              <div className="bg-white border border-slate-200/90 p-3 rounded-2xl flex items-center gap-2 text-slate-800 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>0% Fragrance</span>
              </div>
              <div className="bg-white border border-slate-200/90 p-3 rounded-2xl flex items-center gap-2 text-slate-800 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>0% Drying Alcohol</span>
              </div>
              <div className="bg-white border border-slate-200/90 p-3 rounded-2xl flex items-center gap-2 text-slate-800 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>0% Mineral Oil</span>
              </div>
              <div className="bg-white border border-slate-200/90 p-3 rounded-2xl flex items-center gap-2 text-slate-800 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>0% Parabens</span>
              </div>
              <div className="bg-white border border-slate-200/90 p-3 rounded-2xl flex items-center gap-2 text-slate-800 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>0% Synthetic Dyes</span>
              </div>
              <div className="bg-white border border-slate-200/90 p-3 rounded-2xl flex items-center gap-2 text-emerald-700 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Cruelty-Free</span>
              </div>
            </div>

            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-3.5 text-center text-xs font-black text-sky-900">
              ✓ Swiss SGS Dermatological Patch Tested • 99.8% Tolerance
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
