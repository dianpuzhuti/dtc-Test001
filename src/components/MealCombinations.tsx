import React, { useState } from 'react';
import { MEAL_PAIRINGS } from '../data/productData';
import { Layers, Sparkles, ChevronRight, Plus } from 'lucide-react';

export const MealCombinations: React.FC = () => {
  const [activePairingId, setActivePairingId] = useState<string>("chicken-fries");

  const currentPairing = MEAL_PAIRINGS.find((p) => p.id === activePairingId) || MEAL_PAIRINGS[0];

  return (
    <section className="bg-white py-12 px-4 sm:px-6 border-b border-zinc-200">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
            DINNER PAIRINGS
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight">
            Two Baskets. More Options.
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            See how two independent 4-QT baskets bring everyday weeknight meal combinations together seamlessly.
          </p>
        </div>

        {/* Pairing Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {MEAL_PAIRINGS.map((pairing) => (
            <button
              key={pairing.id}
              onClick={() => setActivePairingId(pairing.id)}
              className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-1 ${
                activePairingId === pairing.id
                  ? 'bg-zinc-900 text-white border-zinc-900 shadow-sm'
                  : 'bg-zinc-50 text-zinc-700 hover:bg-zinc-100 border-zinc-200'
              }`}
            >
              <span className={`text-[10px] font-extrabold uppercase tracking-wider ${
                activePairingId === pairing.id ? 'text-amber-400' : 'text-zinc-400'
              }`}>
                {pairing.badge}
              </span>
              <h3 className="font-extrabold text-sm tracking-tight">{pairing.title}</h3>
            </button>
          ))}
        </div>

        {/* Selected Meal Combination Showcase */}
        <div className="bg-zinc-900 rounded-3xl p-5 sm:p-8 text-white border border-zinc-800 shadow-xl space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-amber-500 text-zinc-950 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full">
                  {currentPairing.badge}
                </span>
                <span className="text-xs text-zinc-400 font-medium">{currentPairing.subtitle}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                {currentPairing.title}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 max-w-md">
              {currentPairing.description}
            </p>
          </div>

          {/* Visual Dual Basket Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
            
            {/* Basket 1 Food */}
            <div className="md:col-span-5 bg-zinc-800/90 border border-amber-500/40 rounded-2xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="bg-amber-500 text-zinc-950 font-black text-[10px] px-2.5 py-1 rounded-md uppercase">
                  BASKET 1 (4-QT)
                </span>
                <span className="text-xs text-amber-400 font-bold">Main Dish</span>
              </div>

              <div className="relative aspect-4/3 rounded-xl overflow-hidden border border-zinc-700">
                <img
                  src={currentPairing.zone1Image}
                  alt={currentPairing.zone1Food}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-2.5 left-3 text-sm font-black text-white">
                  {currentPairing.zone1Food}
                </div>
              </div>
            </div>

            {/* Plus Icon Divider */}
            <div className="md:col-span-1 flex items-center justify-center py-2">
              <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-600 text-amber-400 font-black flex items-center justify-center shadow-md">
                <Plus className="w-5 h-5" />
              </div>
            </div>

            {/* Basket 2 Food */}
            <div className="md:col-span-5 bg-zinc-800/90 border border-emerald-500/40 rounded-2xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="bg-emerald-500 text-zinc-950 font-black text-[10px] px-2.5 py-1 rounded-md uppercase">
                  BASKET 2 (4-QT)
                </span>
                <span className="text-xs text-emerald-400 font-bold">Side Dish</span>
              </div>

              <div className="relative aspect-4/3 rounded-xl overflow-hidden border border-zinc-700">
                <img
                  src={currentPairing.zone2Image}
                  alt={currentPairing.zone2Food}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-2.5 left-3 text-sm font-black text-white">
                  {currentPairing.zone2Food}
                </div>
              </div>
            </div>

          </div>

          <div className="text-center text-xs text-amber-300 font-bold pt-2 flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Smart Finish automatically syncs both baskets so your entire meal completes simultaneously.</span>
          </div>

        </div>

      </div>
    </section>
  );
};
