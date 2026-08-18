import React, { useState, useEffect } from 'react';
import { Layers, Zap, CheckCircle2, Play, Pause, RotateCcw } from 'lucide-react';
import { PRODUCT_IMAGES } from '../data/productData';

export const DualBasketFeature: React.FC = () => {
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [zone1Time, setZone1Time] = useState<number>(20);
  const [zone2Time, setZone2Time] = useState<number>(14);

  useEffect(() => {
    let interval: any = null;
    if (isSimulating) {
      interval = setInterval(() => {
        setZone1Time((prev) => (prev <= 1 ? 20 : prev - 1));
        setZone2Time((prev) => (prev <= 1 ? 14 : prev - 1));
      }, 800);
    }
    return () => clearInterval(interval);
  }, [isSimulating]);

  const handleResetSim = () => {
    setIsSimulating(false);
    setZone1Time(20);
    setZone2Time(14);
  };

  const benefitsList = [
    {
      title: "Two independent cooking zones",
      desc: "Each 4-QT basket operates with its own heating element and fan for customized cooking.",
    },
    {
      title: "Prepare different foods separately",
      desc: "Cook main protein in Zone 1 while crisping vegetable or starch sides in Zone 2 with zero flavor transfer.",
    },
    {
      title: "Smart Finish helps coordinate timing",
      desc: "Intelligent timer control synchronizes both zones so both baskets finish cooking at the exact same moment.",
    },
    {
      title: "More flexibility for everyday meals",
      desc: "Accommodate different tastes, dietary needs, or cook larger single batches using Match Cook.",
    },
  ];

  return (
    <section className="bg-white py-12 px-4 sm:px-6 border-b border-zinc-200">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full border border-zinc-200">
            DUALZONE™ TECHNOLOGY
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight">
            Two Zones. One Mealtime.
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Separate cooking controls and Smart Finish timer sync keep dinner running smoothly.
          </p>
        </div>

        {/* Feature Grid: Image / Interactive Display + Core Bullet Points */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Visual Showcase (7 cols) */}
          <div className="lg:col-span-7 bg-zinc-900 rounded-3xl p-5 sm:p-6 text-white shadow-lg border border-zinc-800 space-y-5">
            
            {/* Top Sync Indicator */}
            <div className="flex items-center justify-between bg-zinc-800/90 border border-zinc-700 rounded-2xl p-3.5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-extrabold text-xs text-white block">Smart Finish™ Timer Sync</span>
                  <span className="text-[10px] text-zinc-400">Both baskets finish at the same time</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setIsSimulating(!isSimulating)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                    isSimulating ? 'bg-amber-500 text-zinc-950' : 'bg-zinc-700 text-white hover:bg-zinc-600'
                  }`}
                >
                  {isSimulating ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                  <span>{isSimulating ? 'Pause' : 'Sync Demo'}</span>
                </button>
                <button
                  onClick={handleResetSim}
                  className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 cursor-pointer"
                  title="Reset"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Split Image Visual */}
            <div className="grid grid-cols-2 gap-3 relative">
              <div className="bg-zinc-800 border border-amber-500/30 rounded-xl p-3 space-y-2">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="bg-amber-500 text-zinc-950 font-black px-2 py-0.5 rounded uppercase">
                    ZONE 1 • 4-QT
                  </span>
                  <span className="font-mono text-amber-400 font-bold">{zone1Time}:00</span>
                </div>
                <div className="aspect-4/3 rounded-lg overflow-hidden border border-zinc-700">
                  <img
                    src={PRODUCT_IMAGES.foodWingsCrispy}
                    alt="Zone 1 Food"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="block text-[11px] font-bold text-center text-zinc-200">Crispy Protein</span>
              </div>

              <div className="bg-zinc-800 border border-emerald-500/30 rounded-xl p-3 space-y-2">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="bg-emerald-500 text-zinc-950 font-black px-2 py-0.5 rounded uppercase">
                    ZONE 2 • 4-QT
                  </span>
                  <span className="font-mono text-emerald-400 font-bold">{zone2Time}:00</span>
                </div>
                <div className="aspect-4/3 rounded-lg overflow-hidden border border-zinc-700">
                  <img
                    src={PRODUCT_IMAGES.foodFries}
                    alt="Zone 2 Food"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="block text-[11px] font-bold text-center text-zinc-200">Golden Side</span>
              </div>
            </div>

            <p className="text-center text-xs text-zinc-400 font-medium pt-1">
              "Cook different foods independently in each basket."
            </p>
          </div>

          {/* Core Bullet Points (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {benefitsList.map((item, idx) => (
              <div
                key={idx}
                className="bg-zinc-50 border border-zinc-200/90 rounded-2xl p-4 shadow-2xs flex items-start gap-3.5"
              >
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-900 font-black flex items-center justify-center shrink-0 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-extrabold text-zinc-900 text-sm sm:text-base">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 text-xs sm:text-sm mt-0.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
