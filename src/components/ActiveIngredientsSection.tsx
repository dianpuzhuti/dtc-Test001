import React, { useState } from 'react';
import { Sparkles, ShieldCheck, Check, Layers, ChevronRight, Dna } from 'lucide-react';
import { ACTIVE_INGREDIENTS } from '../data/productData';

export const ActiveIngredientsSection: React.FC = () => {
  const [activeIngredientId, setActiveIngredientId] = useState<string>("hexapeptide-8");

  const currentIng = ACTIVE_INGREDIENTS.find((i) => i.id === activeIngredientId) || ACTIVE_INGREDIENTS[0];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 border-b border-slate-200">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-900 text-xs font-black px-3.5 py-1 rounded-full border border-sky-200 tracking-wider uppercase">
            <Dna className="w-3.5 h-3.5 text-sky-700" />
            <span>BIO-MIMETIC PEPTIDE COMPLEX • 7重仿生分子多肽</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            每一滴，都是高纯生物活性信号肽
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            摒弃概念性微量添加。PeptiDerm 采用医药级纯度原料，靶向作用于真皮成纤维细胞与基底膜(DEJ)。
          </p>
        </div>

        {/* 6 Ingredient Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {ACTIVE_INGREDIENTS.map((ing) => {
            const isSelected = ing.id === activeIngredientId;
            return (
              <button
                key={ing.id}
                onClick={() => setActiveIngredientId(ing.id)}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-1.5 ${
                  isSelected
                    ? 'border-sky-600 bg-sky-900 text-white shadow-md'
                    : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800'
                }`}
              >
                <span className={`text-[10px] font-black uppercase tracking-wider ${
                  isSelected ? 'text-sky-300' : 'text-slate-500'
                }`}>
                  {ing.role.split('与')[0]}
                </span>
                
                <h3 className="font-extrabold text-xs sm:text-sm tracking-tight line-clamp-2">
                  {ing.name}
                </h3>

                <span className={`text-[10px] font-semibold ${
                  isSelected ? 'text-sky-200' : 'text-sky-700'
                }`}>
                  {ing.purity}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Ingredient Molecular Deep-Dive Card */}
        <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-sky-500 text-slate-950 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md">
                  {currentIng.purity}
                </span>
                <span className="text-xs text-sky-300 font-bold">{currentIng.chemicalName}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                {currentIng.name}
              </h3>
            </div>

            <div className="bg-slate-800/80 border border-slate-700 px-3.5 py-1.5 rounded-xl text-xs text-slate-300 shrink-0">
              <span className="text-slate-400 block text-[10px]">靶向作用靶点:</span>
              <strong className="text-sky-300">{currentIng.skinLayer}</strong>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <h4 className="text-sm font-black text-sky-300 uppercase tracking-wider">
                【生物学作用机理】
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentIng.mechanism}
              </p>
              <div className="pt-2 text-xs text-emerald-300 font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>临床预期收益：{currentIng.benefit}</span>
              </div>
            </div>

            <div className="md:col-span-4 bg-slate-800/60 rounded-2xl p-4 border border-slate-700/60 space-y-2 text-center">
              <span className="text-xs font-black text-white block">无有害化学添加承诺</span>
              <div className="grid grid-cols-2 gap-1.5 text-[11px] text-slate-300">
                <span className="bg-slate-900/60 py-1 rounded">0% 矿物油</span>
                <span className="bg-slate-900/60 py-1 rounded">0% 人工香精</span>
                <span className="bg-slate-900/60 py-1 rounded">0% 酒精乙醇</span>
                <span className="bg-slate-900/60 py-1 rounded">0% 传统防腐剂</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
