import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowLeftRight, Eye, ShieldCheck, Layers, ZoomIn } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface InteractiveSkinComparisonProps {
  onCtaClick?: () => void;
}

export const InteractiveSkinComparison: React.FC<InteractiveSkinComparisonProps> = ({ onCtaClick }) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [activeConcern, setActiveConcern] = useState<'nasolabial' | 'crowsfeet' | 'forehead'>('nasolabial');
  const [viewMode, setViewMode] = useState<'slider' | 'sideBySide'>('slider');
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const { t, language } = useLanguage();

  const concernsI18n = {
    en: {
      nasolabial: {
        tab: 'Smile Folds (-42.8%)',
        title: 'Nasolabial Smile Fold Depth & Volume',
        stat: '-42.8%',
        days: 'Day 28 Clinical Topography',
        notes: 'PRIMOS 3D optical profilometry confirms -42.8% fold depth reduction with zero erythema or peeling.',
        baselineDesc: 'Day 0: Deepened nasolabial creases, loss of dermal rebound, uneven skin texture.',
        peptiDermDesc: 'Day 28: Plumped dermal extracellular matrix, lifted fold contours, smooth luminous finish.'
      },
      crowsfeet: {
        tab: 'Eye Contour (-38.5%)',
        title: "Crow's Feet & Peri-Orbital Lines",
        stat: '-38.5%',
        days: 'Day 21 High-Precision Scan',
        notes: 'Argireline® Hexapeptide relaxes repetitive dynamic micro-tension for silky smooth eye contours.',
        baselineDesc: 'Day 0: Pronounced lateral canthal dynamic creases and dryness-induced micro-wrinkles.',
        peptiDermDesc: 'Day 21: Visible micro-line relaxation, firmer delicate eye area without puffiness.'
      },
      forehead: {
        tab: 'Collagen Density (+68.4%)',
        title: 'Forehead Static Lines & Dermal Density',
        stat: '+68.4%',
        days: 'Day 28 High-Frequency Ultrasound',
        notes: 'Copper Tripeptide-1 restructures dermal extracellular matrix to plump and tighten from within.',
        baselineDesc: 'Day 0: Horizontal static forehead lines, depleted collagen matrix, dull fatigued tone.',
        peptiDermDesc: 'Day 28: Substantial collagen replenishment (+68.4%), resilient tightness, youthful bounce.'
      },
      significant: 'Statistically Significant (p < 0.001)',
      benefit1: '0% skin peeling, flaking, or barrier compromise',
      benefit2: 'Certified safe for continuous morning & evening application',
      subtext: 'Double-Blind German PRIMOS 3D Topography',
      sliderTab: 'Interactive Split Slider',
      sideBySideTab: 'Side-by-Side Clinical Proof',
      dragHint: 'Drag the slider to compare baseline vs. 28-day cellular renewal'
    },
    fr: {
      nasolabial: {
        tab: 'Sillons Nasogéniens (-42,8%)',
        title: 'Profondeur & Volume des Sillons Nasogéniens',
        stat: '-42,8%',
        days: 'Topographie Clinique Jour 28',
        notes: 'La profilométrie optique 3D PRIMOS atteste de -42,8% de volume sans rougeur ni desquamation.',
        baselineDesc: 'Jour 0 : Sillons marqués, perte de fermeté et texture rugueuse.',
        peptiDermDesc: 'Jour 28 : Matrice dermique redensifiée, sillons lissés et teint lumineux.'
      },
      crowsfeet: {
        tab: 'Contour des Yeux (-38,5%)',
        title: "Pattes d'Oie & Rides Péri-Oculaires",
        stat: '-38,5%',
        days: 'Scan Haute Précision Jour 21',
        notes: "L'Hexapeptide Argireline® détend les micro-tensions pour un regard visiblement lissé.",
        baselineDesc: 'Jour 0 : Ridules d’expression accentuées et sécheresse cutanée.',
        peptiDermDesc: 'Jour 21 : Lissage remarquable des ridules et contour tonifié.'
      },
      forehead: {
        tab: 'Densité Collagène (+68,4%)',
        title: 'Rides Frontales & Densité Dermique',
        stat: '+68,4%',
        days: 'Échographie Haute Fréquence Jour 28',
        notes: 'Le Tripeptide de Cuivre-1 restructure la matrice extracellulaire pour repulper de l’intérieur.',
        baselineDesc: 'Jour 0 : Rides horizontales statiques, matrice affaiblie.',
        peptiDermDesc: 'Jour 28 : Synthèse accrue de collagène (+68,4%) et rebond élastique.'
      },
      significant: 'Statistiquement Significatif (p < 0,001)',
      benefit1: '0% desquamation, tiraillement ou altération de barrière',
      benefit2: 'Formule sûre et photostable matin & soir',
      subtext: 'Topographie 3D Allemande PRIMOS',
      sliderTab: 'Curseur Interactif',
      sideBySideTab: 'Comparatif Côte à Côte',
      dragHint: 'Faites glisser le curseur pour comparer Jour 0 et Jour 28'
    },
    ru: {
      nasolabial: {
        tab: 'Носогубные складки (-42.8%)',
        title: 'Глубина и объем носогубных складок',
        stat: '-42.8%',
        days: 'Клиническая топография 28 день',
        notes: '3D-оптическая профилометрия PRIMOS подтверждает уменьшение объема на 42.8% без шелушений.',
        baselineDesc: 'День 0: Глубокие носогубные заломы, сниженный тургор кожи.',
        peptiDermDesc: 'День 28: Плотный экстрацеллюлярный матрикс, разглаженные контуры.'
      },
      crowsfeet: {
        tab: 'Зона вокруг глаз (-38.5%)',
        title: '«Гусиные лапки» и контур глаз',
        stat: '-38.5%',
        days: 'Высокоточный скан 21 день',
        notes: 'Гексапептид Argireline® мягко снимает спазм мимических мышц, разглаживая морщинки.',
        baselineDesc: 'День 0: Мимические морщины в уголках глаз, сухой эпидермис.',
        peptiDermDesc: 'День 21: Выраженное расслабление заломов, подтянутая зона вокруг глаз.'
      },
      forehead: {
        tab: 'Плотность коллагена (+68.4%)',
        title: 'Морщины лба и плотность коллагена',
        stat: '+68.4%',
        days: 'УЗИ дермы 28 день',
        notes: 'Трипептид меди-1 перезапускает синтез коллагена I и III типа, укрепляя каркас лица.',
        baselineDesc: 'День 0: Горизонтальные статические линии, потеря плотности.',
        peptiDermDesc: 'День 28: Прирост коллагена (+68.4%), упругость и гладкий рельеф.'
      },
      significant: 'Статистически достоверно (p < 0.001)',
      benefit1: '0% шелушений, жжения и повреждений барьера',
      benefit2: 'Безопасно для утреннего и вечернего нанесения',
      subtext: 'Немецкая 3D-топография PRIMOS',
      sliderTab: 'Интерактивный слайдер',
      sideBySideTab: 'Сравнение бок о бок',
      dragHint: 'Тяните слайдер влево и вправо для сравнения'
    },
    es: {
      nasolabial: {
        tab: 'Surcos Nasogenianos (-42.8%)',
        title: 'Profundidad de Surcos Nasogenianos',
        stat: '-42.8%',
        days: 'Topografía Clínica Día 28',
        notes: 'El escaneo óptico 3D PRIMOS certifica -42.8% de volumen sin rojeces ni descamación.',
        baselineDesc: 'Día 0: Pliegues nasogenianos marcados, pérdida de turgencia.',
        peptiDermDesc: 'Día 28: Matriz dérmica redensificada, surcos visiblemente atenuados.'
      },
      crowsfeet: {
        tab: 'Contorno de Ojos (-38.5%)',
        title: 'Patas de Gallo y Contorno Ocular',
        stat: '-38.5%',
        days: 'Escaneo de Precisión Día 21',
        notes: 'El Hexapéptido Argireline® relaja las microtensiones dejando un contorno de ojos terso.',
        baselineDesc: 'Día 0: Líneas de expresión perioculares y sequedad.',
        peptiDermDesc: 'Día 21: Relajación visible de arrugas dinámicas y mirada descansada.'
      },
      forehead: {
        tab: 'Densidad de Colágeno (+68.4%)',
        title: 'Líneas Frontales y Densidad Dérmica',
        stat: '+68.4%',
        days: 'Ecografía Dérmica Día 28',
        notes: 'El Tripéptido de Cobre-1 reestructura la matriz dérmica para redensificar desde el interior.',
        baselineDesc: 'Día 0: Líneas frontales estáticas y tono apagado.',
        peptiDermDesc: 'Día 28: Aumento de densidad colagénica (+68.4%) y firmeza duradera.'
      },
      significant: 'Estadísticamente Significativo (p < 0.001)',
      benefit1: '0% descamación o daño a la barrera cutánea',
      benefit2: 'Uso seguro por la mañana y por la noche',
      subtext: 'Topografía 3D Alemana PRIMOS',
      sliderTab: 'Control Deslizante',
      sideBySideTab: 'Comparativa Lado a Lado',
      dragHint: 'Arrastre el control para comparar Día 0 y Día 28'
    }
  };

  // High-Resolution Dermatology Visual Assets (Clinically relevant, flawless skin texture matching)
  const clinicalImages = {
    nasolabial: {
      beforeImg: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1200&q=85',
      afterImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=85',
    },
    crowsfeet: {
      beforeImg: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=85',
      afterImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
    },
    forehead: {
      beforeImg: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1200&q=85',
      afterImg: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=85',
    }
  };

  const currentI18n = concernsI18n[language] || concernsI18n.en;
  const current = currentI18n[activeConcern];
  const currentImgs = clinicalImages[activeConcern];

  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-14 sm:py-20 px-4 sm:px-6 border-b border-slate-800 relative overflow-hidden">
      
      {/* Molecular Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-sky-500/20 text-sky-300 text-xs font-black px-4 py-1.5 rounded-full border border-sky-500/30 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>{t.comparisonSlider.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            {t.comparisonSlider.title}
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            {t.comparisonSlider.subtitle}
          </p>
        </div>

        {/* Top Controls: Concern Switcher + View Mode Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
          
          {/* 3 Clinical Concern Tabs */}
          <div className="inline-flex p-1 bg-slate-950 border border-slate-800 rounded-2xl gap-1 max-w-full overflow-x-auto shadow-inner">
            <button
              onClick={() => setActiveConcern('nasolabial')}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeConcern === 'nasolabial'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {currentI18n.nasolabial.tab}
            </button>
            <button
              onClick={() => setActiveConcern('crowsfeet')}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeConcern === 'crowsfeet'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {currentI18n.crowsfeet.tab}
            </button>
            <button
              onClick={() => setActiveConcern('forehead')}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeConcern === 'forehead'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {currentI18n.forehead.tab}
            </button>
          </div>

          {/* View Mode Switcher */}
          <div className="inline-flex items-center gap-1 bg-slate-950 border border-slate-800 p-1 rounded-xl text-xs">
            <button
              onClick={() => setViewMode('slider')}
              className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'slider'
                  ? 'bg-slate-800 text-sky-300 shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <ArrowLeftRight className="w-3.5 h-3.5" />
              <span>{currentI18n.sliderTab}</span>
            </button>
            <button
              onClick={() => setViewMode('sideBySide')}
              className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'sideBySide'
                  ? 'bg-slate-800 text-sky-300 shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{currentI18n.sideBySideTab}</span>
            </button>
          </div>

        </div>

        {/* Stage Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Main Visual Comparison Frame */}
          <div className="lg:col-span-8 bg-slate-950 rounded-3xl p-3 sm:p-4 border border-slate-800 shadow-2xl relative">
            
            {viewMode === 'slider' ? (
              /* High Precision Split Comparison using CSS clip-path (Zero distortion, zero squishing) */
              <div 
                className="relative aspect-4/3 sm:aspect-16/10 rounded-2xl overflow-hidden select-none bg-slate-900 border border-slate-800"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {/* 1. Base Layer: Day 28 Post PeptiDerm (Full Frame) */}
                <img
                  src={currentImgs.afterImg}
                  alt={t.comparisonSlider.day28Label}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
                />

                {/* Day 28 Label Pill */}
                <div className="absolute top-3 right-3 bg-sky-600/90 backdrop-blur-md text-white text-[10px] sm:text-xs font-black px-3.5 py-1 rounded-full shadow-lg z-10 border border-sky-400/40">
                  {t.comparisonSlider.day28Label}
                </div>

                {/* 2. Top Layer: Day 0 Baseline with flawless clipPath */}
                <div
                  className="absolute inset-0 pointer-events-none select-none"
                  style={{
                    clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
                  }}
                >
                  <img
                    src={currentImgs.beforeImg}
                    alt={t.comparisonSlider.day0Label}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
                  />
                  {/* Day 0 Label Pill */}
                  <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md text-slate-200 text-[10px] sm:text-xs font-black px-3.5 py-1 rounded-full shadow-lg z-10 border border-slate-700">
                    {t.comparisonSlider.day0Label}
                  </div>
                </div>

                {/* 3. Draggable Line & Center Handle */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] z-20 pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 sm:w-11 sm:h-11 bg-white text-slate-950 rounded-full flex items-center justify-center shadow-2xl border-2 border-sky-500 transform active:scale-95 transition-transform">
                    <ArrowLeftRight className="w-4 h-4 sm:w-5 sm:h-5 text-sky-700 stroke-[2.5]" />
                  </div>
                </div>

                {/* Interactive Slider Input */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-30 touch-none"
                  aria-label={currentI18n.dragHint}
                />
              </div>
            ) : (
              /* Side-by-Side Diagnostic Proof Mode */
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 aspect-auto">
                <div className="space-y-2">
                  <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
                    <img
                      src={currentImgs.beforeImg}
                      alt={t.comparisonSlider.day0Label}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-slate-900/90 text-slate-200 text-[10px] font-black px-2.5 py-1 rounded-full border border-slate-700">
                      {t.comparisonSlider.day0Label}
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400 px-1 leading-snug">
                    {current.baselineDesc}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-sky-800/60 bg-slate-900 shadow-md">
                    <img
                      src={currentImgs.afterImg}
                      alt={t.comparisonSlider.day28Label}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute top-2.5 right-2.5 bg-sky-600 text-white text-[10px] font-black px-2.5 py-1 rounded-full border border-sky-400">
                      {t.comparisonSlider.day28Label}
                    </div>
                  </div>
                  <p className="text-[11px] text-sky-300 px-1 leading-snug">
                    {current.peptiDermDesc}
                  </p>
                </div>
              </div>
            )}

            {/* Slider Interaction Tip */}
            <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-400 pt-3 px-2 gap-2">
              <span className="flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>{currentI18n.dragHint}</span>
              </span>
              <span className="text-sky-400 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{currentI18n.subtext}</span>
              </span>
            </div>

          </div>

          {/* Right Column: Clinical Metrics Card */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-slate-950/90 border border-slate-800 rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl">
              
              <div className="space-y-1.5 border-b border-slate-800 pb-3">
                <span className="text-[10px] font-black uppercase tracking-wider text-sky-400 block">
                  {current.days}
                </span>
                <h3 className="font-black text-white text-lg sm:text-xl leading-snug">
                  {current.title}
                </h3>
              </div>

              {/* Big Stat Box */}
              <div className="bg-gradient-to-br from-sky-950/80 to-slate-900 border border-sky-800/80 rounded-2xl p-4 flex items-baseline justify-between shadow-inner">
                <div>
                  <span className="text-3xl sm:text-4xl font-black text-sky-400 tracking-tight">
                    {current.stat}
                  </span>
                  <span className="text-xs text-slate-300 block mt-0.5 font-semibold">
                    {currentI18n.significant}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-emerald-300 font-extrabold bg-emerald-950/90 px-2.5 py-1 rounded-full border border-emerald-700">
                    p &lt; 0.001
                  </span>
                </div>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {current.notes}
              </p>

              {/* Verified Clinical Benefits */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80 text-xs">
                <div className="flex items-start gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>{currentI18n.benefit1}</span>
                </div>
                <div className="flex items-start gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{currentI18n.benefit2}</span>
                </div>
              </div>

              {onCtaClick && (
                <button
                  type="button"
                  onClick={onCtaClick}
                  className="w-full mt-2 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 active:scale-98 text-slate-950 font-black py-3.5 rounded-xl text-xs sm:text-sm shadow-lg transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>{t.comparisonSlider.cta}</span>
                  <span>→</span>
                </button>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
