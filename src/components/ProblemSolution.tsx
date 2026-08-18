import React from 'react';
import { XCircle, CheckCircle, ArrowRight, Clock, Plus, Layers } from 'lucide-react';
import { PRODUCT_IMAGES } from '../data/productData';

interface ProblemSolutionProps {
  onCtaClick: () => void;
}

export const ProblemSolution: React.FC<ProblemSolutionProps> = ({ onCtaClick }) => {
  return (
    <section className="bg-zinc-50 py-12 px-4 sm:px-6 border-b border-zinc-200">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
            THE WEEKNIGHT DINNER DILEMMA
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight">
            Stop Cooking One Batch at a Time.
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Eliminate the frustration of cooking main dishes first while sides get cold waiting for round two.
          </p>
        </div>

        {/* Visual Sequential Flow Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* OLD WAY: FRUSTRATION OF SEQUENTIAL BATCHES */}
          <div className="bg-white border-2 border-red-200/90 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-red-600 font-extrabold text-xs uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full w-fit">
                <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                <span>Single Basket Cooking Dilemma</span>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs font-bold text-zinc-500 border-b border-zinc-100 pb-2">
                  <span>Sequential Batch Process</span>
                  <span className="text-red-600 font-extrabold">Extra Waiting</span>
                </div>

                {/* Step 1 */}
                <div className="flex items-center gap-3 p-3 bg-red-50/50 rounded-xl border border-red-100 text-xs">
                  <span className="w-6 h-6 rounded-full bg-red-200 text-red-800 font-black flex items-center justify-center shrink-0 text-[11px]">1</span>
                  <div className="flex-1">
                    <span className="font-bold text-zinc-900 block">Cook Food 1 (Main Dish)</span>
                    <span className="text-zinc-500">Wait 20-25 mins while side sits raw</span>
                  </div>
                </div>

                {/* Arrow indicator */}
                <div className="flex justify-center my-0.5 text-zinc-300">
                  <Clock className="w-4 h-4 text-red-400" />
                </div>

                {/* Step 2 */}
                <div className="flex items-center gap-3 p-3 bg-red-50/50 rounded-xl border border-red-100 text-xs">
                  <span className="w-6 h-6 rounded-full bg-red-200 text-red-800 font-black flex items-center justify-center shrink-0 text-[11px]">2</span>
                  <div className="flex-1">
                    <span className="font-bold text-zinc-900 block">Wait & Swap Baskets</span>
                    <span className="text-zinc-500">Food 1 rests on counter & cools down</span>
                  </div>
                </div>

                {/* Arrow indicator */}
                <div className="flex justify-center my-0.5 text-zinc-300">
                  <Clock className="w-4 h-4 text-red-400" />
                </div>

                {/* Step 3 */}
                <div className="flex items-center gap-3 p-3 bg-red-50/50 rounded-xl border border-red-100 text-xs">
                  <span className="w-6 h-6 rounded-full bg-red-200 text-red-800 font-black flex items-center justify-center shrink-0 text-[11px]">3</span>
                  <div className="flex-1">
                    <span className="font-bold text-zinc-900 block">Cook Food 2 (Side Dish)</span>
                    <span className="text-red-700 font-semibold">Food 1 is lukewarm by dinner time</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-zinc-100 text-xs text-red-800 font-bold bg-red-50/80 p-3 rounded-xl text-center">
              Result: Staggered dinner times & microwave reheating
            </div>
          </div>

          {/* DUALZONE SOLUTION */}
          <div className="bg-zinc-900 text-white rounded-2xl p-6 shadow-md flex flex-col justify-between space-y-5 border border-zinc-800">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-xs uppercase tracking-wider bg-emerald-950/80 border border-emerald-800/80 px-3 py-1 rounded-full">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>DualZone™ 2-Basket Solution</span>
                </div>
                <span className="text-[11px] font-extrabold text-amber-400 uppercase tracking-wide">
                  TOGETHER
                </span>
              </div>

              {/* Real usage image */}
              <div className="relative aspect-16/9 rounded-xl overflow-hidden border border-zinc-700 shadow-xs">
                <img
                  src={PRODUCT_IMAGES.openBasketsFood}
                  alt="Dual basket air fryer cooking main dish and side dish together"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-xs font-bold text-white">
                  <span>Basket 1: Main Dish</span>
                  <Plus className="w-4 h-4 text-emerald-400" />
                  <span>Basket 2: Side Dish</span>
                </div>
              </div>

              {/* Parallel Breakdown */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-3 space-y-1">
                  <span className="text-[10px] font-bold text-amber-400 uppercase">Basket 1 (4-QT)</span>
                  <p className="font-extrabold text-white">Main Dish</p>
                  <p className="text-[11px] text-zinc-400">Cooks independently</p>
                </div>
                <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-3 space-y-1">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase">Basket 2 (4-QT)</span>
                  <p className="font-extrabold text-white">Side Dish</p>
                  <p className="text-[11px] text-zinc-400">Smart Finish synced</p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-zinc-800 flex items-center justify-between gap-3">
              <div className="text-xs text-emerald-300 font-extrabold flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Complete meal ready at the same time!</span>
              </div>
              <button
                onClick={onCtaClick}
                className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black text-xs px-3.5 py-2 rounded-xl transition-all flex items-center gap-1 shrink-0 cursor-pointer"
              >
                <span>GET $99 OFFER</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
