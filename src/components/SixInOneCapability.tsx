import React, { useState } from 'react';
import { Wind, Flame, Sparkles, PieChart, RotateCcw, Sun, CheckCircle2 } from 'lucide-react';
import { COOKING_FUNCTIONS } from '../data/productData';

export const SixInOneCapability: React.FC = () => {
  const [activeFuncId, setActiveFuncId] = useState<string>("air-fry");

  const getFunctionIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wind':
        return <Wind className="w-5 h-5" />;
      case 'Flame':
        return <Flame className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'PieChart':
        return <PieChart className="w-5 h-5" />;
      case 'RotateCcw':
        return <RotateCcw className="w-5 h-5" />;
      case 'Sun':
        return <Sun className="w-5 h-5" />;
      default:
        return <Wind className="w-5 h-5" />;
    }
  };

  const activeFunc = COOKING_FUNCTIONS.find((f) => f.id === activeFuncId) || COOKING_FUNCTIONS[0];

  return (
    <section className="bg-white py-12 px-4 sm:px-6 border-b border-zinc-200">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full border border-zinc-200">
            6-IN-1 FUNCTIONALITY
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight">
            6 Ways to Cook. One Appliance.
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            From quick crisping and roasting to gentle reheating, choose the perfect mode for every dish.
          </p>
        </div>

        {/* 6 Clean Function Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {COOKING_FUNCTIONS.map((func) => {
            const isSelected = func.id === activeFuncId;
            return (
              <button
                key={func.id}
                onClick={() => setActiveFuncId(func.id)}
                className={`flex flex-col items-center text-center p-4 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'border-zinc-900 bg-zinc-900 text-white shadow-md scale-102'
                    : 'border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-800'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl mb-2 flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-amber-400 text-zinc-950' : 'bg-white border border-zinc-200 text-zinc-800'
                  }`}
                >
                  {getFunctionIcon(func.iconName)}
                </div>
                <span className="font-extrabold text-sm tracking-tight">{func.name}</span>
                <span className={`text-[10px] mt-1 font-medium ${isSelected ? 'text-zinc-300' : 'text-zinc-500'}`}>
                  {func.keyBenefit}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Function Details */}
        <div className="bg-zinc-50 border border-zinc-200/90 rounded-2xl p-5 sm:p-6 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="bg-amber-100 text-amber-900 text-xs font-extrabold px-2.5 py-0.5 rounded uppercase tracking-wider">
                {activeFunc.name} Mode
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-zinc-900">{activeFunc.description}</h3>
            <p className="text-xs sm:text-sm text-zinc-600">
              <strong className="text-zinc-900">Great for:</strong> {activeFunc.bestFor}
            </p>
          </div>

          <div className="bg-white border border-zinc-200 rounded-xl p-3.5 shrink-0 text-center w-full md:w-auto shadow-2xs space-y-1">
            <span className="text-xs text-emerald-700 font-semibold flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Independent Control Per Basket</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
