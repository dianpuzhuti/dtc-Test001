import React, { useState } from 'react';
import { Sparkles, ShieldCheck, CheckCircle2, ChevronRight, Activity, X } from 'lucide-react';
import { ACTIVE_INGREDIENTS } from '../data/productData';

export const ActiveIngredientsSection: React.FC = () => {
  const [selectedIngredientId, setSelectedIngredientId] = useState<string>(ACTIVE_INGREDIENTS[0].id);

  const selectedIngredient = ACTIVE_INGREDIENTS.find((ing) => ing.id === selectedIngredientId) || ACTIVE_INGREDIENTS[0];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 border-b border-slate-200">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-900 text-xs font-black px-3.5 py-1 rounded-full border border-sky-200 uppercase tracking-wider">
            <Activity className="w-3.5 h-3.5 text-sky-700" />
            <span>BIO-ACTIVE FORMULA • 7-TIER TARGETED PEPTIDES</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Transparent Deck: Every Single Peptide Has a Dermal Target
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We eliminated filler plant extracts with zero clinical proof. Every milligram in PeptiDerm serves a dedicated signaling pathway in cellular collagen regeneration.
          </p>
        </div>

        {/* 2-Column Interactive Ingredient Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Ingredient Tab Selector List */}
          <div className="lg:col-span-5 space-y-2.5">
            {ACTIVE_INGREDIENTS.map((ing) => {
              const isSelected = ing.id === selectedIngredientId;
              return (
                <button
                  key={ing.id}
                  onClick={() => setSelectedIngredientId(ing.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 cursor-pointer ${
                    isSelected
                      ? 'border-sky-600 bg-sky-50/80 shadow-sm ring-1 ring-sky-600/30'
                      : 'border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                >
                  <div>
                    <span className="text-[10px] uppercase font-bold text-sky-700 block">
                      {ing.purity}
                    </span>
                    <h4 className="font-black text-slate-900 text-sm sm:text-base">
                      {ing.name}
                    </h4>
                    <span className="text-xs text-slate-500 block">
                      {ing.role}
                    </span>
                  </div>

                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      isSelected ? 'text-sky-600 translate-x-1' : 'text-slate-300'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Molecular Card */}
          <div className="lg:col-span-7 bg-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6 relative overflow-hidden">
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-950/80 border border-sky-800 px-3 py-1 rounded-full">
                  {selectedIngredient.purity}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {selectedIngredient.chemicalName}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {selectedIngredient.name}
              </h3>
              
              <p className="text-sm font-semibold text-sky-300">
                {selectedIngredient.role}
              </p>
            </div>

            {/* Target Skin Layer */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Target Dermal Layer:
              </span>
              <span className="font-extrabold text-white text-sm">
                {selectedIngredient.skinLayer}
              </span>
            </div>

            {/* Mechanism of Action */}
            <div className="space-y-2 text-xs sm:text-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Cellular Mechanism:
              </span>
              <p className="text-slate-300 leading-relaxed">
                {selectedIngredient.mechanism}
              </p>
            </div>

            {/* Clinical Benefit Highlight */}
            <div className="bg-sky-950/50 border border-sky-700/60 rounded-2xl p-4 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-sky-300 block">Key Clinical Outcome:</span>
                <span className="text-sm font-black text-white">{selectedIngredient.benefit}</span>
              </div>
            </div>

          </div>

        </div>

        {/* Zero-Tolerance Purity Clean Standard */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="text-center space-y-1">
            <h3 className="text-lg font-black text-slate-900">
              Clean Medical Grade: 0% Toxic Additives Guarantee
            </h3>
            <p className="text-xs text-slate-500">
              Every drop is formulated without compromising your lipid barrier or triggering sensitivity.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-center text-xs font-bold">
            <div className="bg-white border border-slate-200 p-3 rounded-2xl text-slate-700">
              0% Fragrance
            </div>
            <div className="bg-white border border-slate-200 p-3 rounded-2xl text-slate-700">
              0% Drying Alcohol
            </div>
            <div className="bg-white border border-slate-200 p-3 rounded-2xl text-slate-700">
              0% Mineral Oil
            </div>
            <div className="bg-white border border-slate-200 p-3 rounded-2xl text-slate-700">
              0% Parabens
            </div>
            <div className="bg-white border border-slate-200 p-3 rounded-2xl text-slate-700">
              0% Artificial Dyes
            </div>
            <div className="bg-white border border-slate-200 p-3 rounded-2xl text-emerald-700">
              Cruelty-Free
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
