import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Activity, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ActiveIngredientsSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const selectedIngredient = t.activeIngredients.ingredients[selectedIndex] || t.activeIngredients.ingredients[0];

  const standardsByLang = {
    en: {
      standardsTitle: 'Clean Clinical Standards',
      biocompatibility: '100% Physiological Biocompatibility',
      biocompatibilityDesc: 'Formulated with zero barrier-stripping chemicals.',
      items: [
        '0% Fragrance',
        '0% Drying Alcohol',
        '0% Mineral Oil',
        '0% Parabens',
        '0% Synthetic Dyes',
        'Cruelty-Free'
      ],
      patchTest: '✓ Swiss SGS Dermatological Patch Tested • 99.8% Tolerance',
      targetLevel: 'Dermal Target Level:',
      cellularAction: 'Cellular Action:',
      primaryBenefit: 'Primary Clinical Benefit'
    },
    fr: {
      standardsTitle: 'Standards Cliniques Purs',
      biocompatibility: '100% Biocompatibilité Physiologique',
      biocompatibilityDesc: 'Formulé sans aucun composant altérant la barrière cutanée.',
      items: [
        '0% Parfum',
        '0% Alcool Desséchant',
        '0% Huile Minérale',
        '0% Parabènes',
        '0% Colorants Synthétiques',
        'Non Testé sur Animaux'
      ],
      patchTest: '✓ Test Épicutané Dermatologique SGS Suisse • 99.8% Tolérance',
      targetLevel: 'Niveau d’Action Cutanée :',
      cellularAction: 'Action Cellulaire :',
      primaryBenefit: 'Bénéfice Clinique Principal'
    },
    ru: {
      standardsTitle: 'Чистые клинические стандарты',
      biocompatibility: '100% физиологическая биосовместимость',
      biocompatibilityDesc: 'Формула без балластных и травмирующих кожный барьер компонентов.',
      items: [
        '0% Отдушек',
        '0% Спирта',
        '0% Минеральных масел',
        '0% Парабенов',
        '0% Синтетических красителей',
        'Cruelty-Free'
      ],
      patchTest: '✓ Дерматологический патч-тест Swiss SGS • 99.8% Переносимость',
      targetLevel: 'Глубина воздействия:',
      cellularAction: 'Клеточное действие:',
      primaryBenefit: 'Главный клинический эффект'
    },
    es: {
      standardsTitle: 'Estándares Clínicos Limpios',
      biocompatibility: '100% Biocompatibilidad Fisiológica',
      biocompatibilityDesc: 'Formulado sin componentes que dañen o irriten la barrera dérmica.',
      items: [
        '0% Fragancia',
        '0% Alcohol Secante',
        '0% Aceite Mineral',
        '0% Parabenos',
        '0% Colorantes Sintéticos',
        'Libre de Crueldad'
      ],
      patchTest: '✓ Test Parche Dermatológico SGS Suiza • 99.8% Tolerancia',
      targetLevel: 'Nivel Dérmico Objetivo:',
      cellularAction: 'Acción Celular:',
      primaryBenefit: 'Beneficio Clínico Principal'
    }
  };

  const currentStandards = standardsByLang[language] || standardsByLang.en;

  return (
    <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 border-b border-slate-200">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-2.5 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-900 text-xs font-black px-3.5 py-1 rounded-full border border-sky-200 uppercase tracking-wider">
            <Activity className="w-3.5 h-3.5 text-sky-700" />
            <span>{t.activeIngredients.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            {t.activeIngredients.title}
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            {t.activeIngredients.subtitle}
          </p>
        </div>

        {/* Mobile Horizontal Pill Scroll / Desktop Chip Bar */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center no-scrollbar">
          {t.activeIngredients.ingredients.map((ing, idx) => {
            const isSelected = idx === selectedIndex;
            return (
              <button
                key={idx}
                onClick={() => setSelectedIndex(idx)}
                className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl text-xs font-black transition-all shrink-0 flex items-center gap-2 cursor-pointer border ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-sky-500/30'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-sky-400' : 'bg-slate-400'}`} />
                <span>{ing.name.split('(')[0].trim()}</span>
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
                  99.8% Purity
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  ISO 22716 Certified
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
                    <span>{currentStandards.targetLevel}</span>
                  </span>
                  <span className="font-black text-sky-300">{selectedIngredient.target}</span>
                </div>
                
                {/* Visual Depth Meter */}
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden flex">
                  <div className="bg-sky-500 h-full w-3/4 rounded-full animate-pulse" />
                </div>
              </div>

              {/* Cellular Mechanism */}
              <div className="space-y-1.5 text-xs sm:text-sm">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  {currentStandards.cellularAction}
                </span>
                <p className="text-slate-300 leading-relaxed">
                  {selectedIngredient.desc}
                </p>
              </div>
            </div>

            {/* Key Clinical Outcome Badge */}
            <div className="bg-sky-950/60 border border-sky-700/60 rounded-2xl p-4 flex items-center gap-3 mt-4">
              <Sparkles className="w-5 h-5 text-sky-400 shrink-0" />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-300 block">
                  {currentStandards.primaryBenefit}
                </span>
                <span className="text-xs sm:text-sm font-black text-white">{selectedIngredient.role}</span>
              </div>
            </div>

          </div>

          {/* Right: Visual 6-Purity Certification Bento Grid */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-black uppercase text-sky-700 tracking-wider">
                {currentStandards.standardsTitle}
              </span>
              <h4 className="font-black text-slate-900 text-lg mt-1">
                {currentStandards.biocompatibility}
              </h4>
              <p className="text-xs text-slate-600 mt-1">
                {currentStandards.biocompatibilityDesc}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5 text-xs font-bold">
              {currentStandards.items.map((item, idx) => (
                <div key={idx} className="bg-white border border-slate-200/90 p-3 rounded-2xl flex items-center gap-2 text-slate-800 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-3.5 text-center text-xs font-black text-sky-900">
              {currentStandards.patchTest}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
