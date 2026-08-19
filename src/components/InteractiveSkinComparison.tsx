import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowLeftRight, Eye } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface InteractiveSkinComparisonProps {
  onCtaClick?: () => void;
}

export const InteractiveSkinComparison: React.FC<InteractiveSkinComparisonProps> = ({ onCtaClick }) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [activeConcern, setActiveConcern] = useState<'nasolabial' | 'crowsfeet' | 'forehead'>('nasolabial');
  const { t, language } = useLanguage();

  const concernsI18n = {
    en: {
      nasolabial: {
        tab: 'Smile Folds (-42.8%)',
        title: 'Nasolabial Smile Fold Depth',
        stat: '-42.8%',
        days: 'Day 28 Clinical Scan',
        notes: 'PRIMOS 3D Optical scan proves -42.8% volume reduction with zero barrier redness.'
      },
      crowsfeet: {
        tab: 'Eye Contour (-38.5%)',
        title: "Crow's Feet & Eye Contour",
        stat: '-38.5%',
        days: 'Day 21 Clinical Scan',
        notes: 'Argireline® Hexapeptide relaxes repetitive micro-tension for silky smooth eye contours.'
      },
      forehead: {
        tab: 'Collagen Density (+68.4%)',
        title: 'Forehead Static & Dynamic Lines',
        stat: '+68.4%',
        days: 'Day 28 Dermal Collagen',
        notes: 'Copper Tripeptide-1 restructures dermal extracellular matrix to plump from within.'
      },
      significant: 'Statistically Significant',
      benefit1: '0% skin peeling or barrier compromise',
      benefit2: 'Safe for morning and evening application',
      subtext: 'German PRIMOS 3D Topography'
    },
    fr: {
      nasolabial: {
        tab: 'Sillons Nasogéniens (-42,8%)',
        title: 'Profondeur des Sillons Nasogéniens',
        stat: '-42,8%',
        days: 'Scan Clinique Jour 28',
        notes: 'Le scan optique 3D PRIMOS atteste de -42,8% de volume sans aucune rougeur de la barrière.'
      },
      crowsfeet: {
        tab: 'Contour des Yeux (-38,5%)',
        title: "Pattes d'Oie & Rides Péri-Oculaires",
        stat: '-38,5%',
        days: 'Scan Clinique Jour 21',
        notes: "L'Hexapeptide Argireline® détend les micro-tensions pour un regard visiblement lissé."
      },
      forehead: {
        tab: 'Densité Collagène (+68,4%)',
        title: 'Rides Frontales Statiques & Dynamiques',
        stat: '+68,4%',
        days: 'Collagène Dermique Jour 28',
        notes: 'Le Tripeptide de Cuivre-1 restructure la matrice extracellulaire pour repulper de l’intérieur.'
      },
      significant: 'Statistiquement Significatif',
      benefit1: '0% desquamation ou altération de la barrière',
      benefit2: 'Formule sûre pour le matin et le soir',
      subtext: 'Topographie 3D Allemande PRIMOS'
    },
    ru: {
      nasolabial: {
        tab: 'Носогубные складки (-42.8%)',
        title: 'Глубина носогубных складок',
        stat: '-42.8%',
        days: 'Клинический скан 28 день',
        notes: '3D-сканирование PRIMOS доказывает уменьшение объема на 42.8% без малейшего покраснения.'
      },
      crowsfeet: {
        tab: 'Зона вокруг глаз (-38.5%)',
        title: '«Гусиные лапки» и контур глаз',
        stat: '-38.5%',
        days: 'Клинический скан 21 день',
        notes: 'Гексапептид Argireline® расслабляет микронапряжение, разглаживая мимические морщинки.'
      },
      forehead: {
        tab: 'Плотность коллагена (+68.4%)',
        title: 'Мимические и статические морщины лба',
        stat: '+68.4%',
        days: 'Дермальный коллаген 28 день',
        notes: 'Трипептид меди-1 стимулирует экстрацеллюлярный матрикс, восстанавливая упругость изнутри.'
      },
      significant: 'Статистически достоверно',
      benefit1: '0% шелушений и раздражений кожного барьера',
      benefit2: 'Безопасно для утреннего и вечернего нанесения',
      subtext: 'Немецкая 3D-топография PRIMOS'
    },
    es: {
      nasolabial: {
        tab: 'Surcos Nasogenianos (-42.8%)',
        title: 'Profundidad de Surcos Nasogenianos',
        stat: '-42.8%',
        days: 'Escaneo Clínico Día 28',
        notes: 'El escaneo óptico 3D PRIMOS certifica -42.8% de volumen sin rojeces en la barrera.'
      },
      crowsfeet: {
        tab: 'Contorno de Ojos (-38.5%)',
        title: 'Patas de Gallo y Contorno Ocular',
        stat: '-38.5%',
        days: 'Escaneo Clínico Día 21',
        notes: 'El Hexapéptido Argireline® relaja las microtensiones dejando un contorno de ojos terso.'
      },
      forehead: {
        tab: 'Densidad de Colágeno (+68.4%)',
        title: 'Líneas Frontales Estáticas y Dinámicas',
        stat: '+68.4%',
        days: 'Colágeno Dérmico Día 28',
        notes: 'El Tripéptido de Cobre-1 reestructura la matriz dérmica para redensificar desde el interior.'
      },
      significant: 'Estadísticamente Significativo',
      benefit1: '0% descamación o daño a la barrera cutánea',
      benefit2: 'Uso seguro por la mañana y por la noche',
      subtext: 'Topografía 3D Alemana PRIMOS'
    }
  };

  const images = {
    nasolabial: {
      beforeImg: 'https://images.unsplash.com/photo-1512290900672-1f5511b512c4?auto=format&fit=crop&w=800&q=80',
      afterImg: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    },
    crowsfeet: {
      beforeImg: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
      afterImg: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    },
    forehead: {
      beforeImg: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
      afterImg: 'https://images.unsplash.com/photo-1579165466791-788226ab77b6?auto=format&fit=crop&w=800&q=80',
    }
  };

  const currentI18n = concernsI18n[language] || concernsI18n.en;
  const current = currentI18n[activeConcern];
  const currentImgs = images[activeConcern];

  return (
    <section className="bg-slate-900 text-white py-12 sm:py-16 px-4 sm:px-6 border-b border-slate-800">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-2.5 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-sky-500/20 text-sky-300 text-xs font-black px-3.5 py-1 rounded-full border border-sky-500/30 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>{t.comparisonSlider.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            {t.comparisonSlider.title}
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm">
            {t.comparisonSlider.subtitle}
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center">
          <div className="inline-flex p-1 bg-slate-950/80 border border-slate-800 rounded-2xl gap-1 max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveConcern('nasolabial')}
              className={`px-3.5 sm:px-5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeConcern === 'nasolabial'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {currentI18n.nasolabial.tab}
            </button>
            <button
              onClick={() => setActiveConcern('crowsfeet')}
              className={`px-3.5 sm:px-5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeConcern === 'crowsfeet'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {currentI18n.crowsfeet.tab}
            </button>
            <button
              onClick={() => setActiveConcern('forehead')}
              className={`px-3.5 sm:px-5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeConcern === 'forehead'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {currentI18n.forehead.tab}
            </button>
          </div>
        </div>

        {/* Interactive Visual Comparison Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Interactive Split Slider Container */}
          <div className="lg:col-span-8 bg-slate-950 rounded-3xl p-3 sm:p-4 border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="relative aspect-4/3 sm:aspect-16/10 rounded-2xl overflow-hidden select-none touch-none">
              
              {/* After Image (Full Background) */}
              <img
                src={currentImgs.afterImg}
                alt="After 28 Days Clinical Treatment"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-sky-600/90 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-black px-3 py-1 rounded-full shadow-md z-10">
                {t.comparisonSlider.day28Label}
              </div>

              {/* Before Image (Clipped Left Layer) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={currentImgs.beforeImg}
                  alt="Day 0 Baseline Skin"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: '100%', height: '100%' }}
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md text-slate-200 text-[10px] sm:text-[11px] font-black px-3 py-1 rounded-full shadow-md z-10">
                  {t.comparisonSlider.day0Label}
                </div>
              </div>

              {/* Draggable Vertical Divider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-2xl"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white text-slate-900 rounded-full flex items-center justify-center shadow-2xl border-2 border-sky-600">
                  <ArrowLeftRight className="w-4 h-4 text-sky-600" />
                </div>
              </div>

              {/* Range Input Overlay */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-30"
                aria-label="Compare Day 0 and Day 28 skin results"
              />
            </div>

            {/* Slider Interaction Tip */}
            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-3 px-2">
              <span className="flex items-center gap-1">
                <Eye className="w-3.5 h-3.5 text-sky-400" />
                <span>{t.comparisonSlider.dragPrompt}</span>
              </span>
              <span className="text-sky-400 font-semibold">{currentI18n.subtext}</span>
            </div>
          </div>

          {/* Right Column: Visual Clinical Summary Card */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-5 sm:p-6 space-y-4">
              <div className="space-y-1 border-b border-slate-800 pb-3">
                <span className="text-[10px] font-black uppercase tracking-wider text-sky-400">
                  {current.days}
                </span>
                <h3 className="font-extrabold text-white text-lg sm:text-xl">
                  {current.title}
                </h3>
              </div>

              <div className="bg-sky-950/60 border border-sky-800/80 rounded-2xl p-4 flex items-baseline justify-between">
                <div>
                  <span className="text-3xl sm:text-4xl font-black text-sky-400">{current.stat}</span>
                  <span className="text-xs text-slate-300 block mt-0.5 font-medium">{currentI18n.significant}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                    p &lt; 0.001
                  </span>
                </div>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {current.notes}
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-800/80 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{currentI18n.benefit1}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{currentI18n.benefit2}</span>
                </div>
              </div>

              {onCtaClick && (
                <button
                  type="button"
                  onClick={onCtaClick}
                  className="w-full mt-2 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-slate-950 font-black py-3 rounded-xl text-xs sm:text-sm shadow-lg transition-all cursor-pointer"
                >
                  {t.comparisonSlider.cta} →
                </button>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
