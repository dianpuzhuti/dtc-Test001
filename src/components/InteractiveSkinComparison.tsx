import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Award, ArrowLeftRight, Eye, Shield } from 'lucide-react';

interface InteractiveSkinComparisonProps {
  onCtaClick?: () => void;
}

export const InteractiveSkinComparison: React.FC<InteractiveSkinComparisonProps> = ({ onCtaClick }) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [activeConcern, setActiveConcern] = useState<'nasolabial' | 'crowsfeet' | 'forehead'>('nasolabial');

  const concerns = {
    nasolabial: {
      title: 'Nasolabial Smile Fold Depth',
      stat: '-42.8%',
      days: 'Day 28 Clinical Scan',
      beforeImg: 'https://images.unsplash.com/photo-1512290900672-1f5511b512c4?auto=format&fit=crop&w=800&q=80',
      afterImg: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
      notes: 'PRIMOS 3D Optical scan proves -42.8% volume reduction with zero barrier redness.'
    },
    crowsfeet: {
      title: "Crow's Feet & Eye Contour",
      stat: '-38.5%',
      days: 'Day 21 Clinical Scan',
      beforeImg: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
      afterImg: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
      notes: 'Argireline® Hexapeptide relaxes repetitive micro-tension for silky smooth eye contours.'
    },
    forehead: {
      title: 'Forehead Static & Dynamic Lines',
      stat: '+68.4%',
      days: 'Day 28 Dermal Collagen',
      beforeImg: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
      afterImg: 'https://images.unsplash.com/photo-1579165466791-788226ab77b6?auto=format&fit=crop&w=800&q=80',
      notes: 'Copper Tripeptide-1 restructures dermal extracellular matrix to plump from within.'
    }
  };

  const current = concerns[activeConcern];

  return (
    <section className="bg-slate-900 text-white py-12 sm:py-16 px-4 sm:px-6 border-b border-slate-800">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        
        {/* Section Header with concise visual punch */}
        <div className="text-center space-y-2.5 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-sky-500/20 text-sky-300 text-xs font-black px-3.5 py-1 rounded-full border border-sky-500/30 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>28-DAY OPTICAL TOPOGRAPHY PROOF</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            Visual Proof: Before & After 28-Day Clinical Trial
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm">
            Drag the interactive slider below to inspect dermatological skin topography changes.
          </p>
        </div>

        {/* Tab Selector for Mobile / Desktop */}
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
              Smile Folds (-42.8%)
            </button>
            <button
              onClick={() => setActiveConcern('crowsfeet')}
              className={`px-3.5 sm:px-5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeConcern === 'crowsfeet'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Eye Contour (-38.5%)
            </button>
            <button
              onClick={() => setActiveConcern('forehead')}
              className={`px-3.5 sm:px-5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeConcern === 'forehead'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Collagen Density (+68.4%)
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
                src={current.afterImg}
                alt="After 28 Days Clinical Treatment"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-sky-600/90 backdrop-blur-md text-white text-[11px] font-black px-3 py-1 rounded-full shadow-md z-10">
                DAY 28 • PEPTIDERM
              </div>

              {/* Before Image (Clipped Left Layer) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={current.beforeImg}
                  alt="Day 0 Baseline Skin"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: '100%', height: '100%' }}
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md text-slate-200 text-[11px] font-black px-3 py-1 rounded-full shadow-md z-10">
                  DAY 0 • BASELINE
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

              {/* Range Input Overlay for Seamless Touch and Desktop Control */}
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
                <span>Drag slider left / right to compare</span>
              </span>
              <span className="text-sky-400 font-semibold">German PRIMOS 3D Topography</span>
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
                  <span className="text-xs text-slate-300 block mt-0.5 font-medium">Statistically Significant</span>
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
                  <span>0% skin peeling or barrier compromise</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Safe for morning and evening application</span>
                </div>
              </div>

              {onCtaClick && (
                <button
                  type="button"
                  onClick={onCtaClick}
                  className="w-full mt-2 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-slate-950 font-black py-3 rounded-xl text-xs sm:text-sm shadow-lg transition-all cursor-pointer"
                >
                  Experience 28-Day Cellular Lift ($29+) →
                </button>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
