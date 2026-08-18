import React from 'react';
import { Truck, RotateCcw, ArrowRight, Tag } from 'lucide-react';
import { PRODUCT_INFO } from '../data/productData';

interface ValueSectionProps {
  onCtaClick: () => void;
}

export const ValueSection: React.FC<ValueSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 border-b border-zinc-200">
      <div className="max-w-3xl mx-auto">
        
        {/* Value Box Container */}
        <div className="bg-zinc-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-zinc-800 text-center space-y-6">
          
          {/* Accent Ribbon */}
          <div className="inline-flex items-center gap-1.5 bg-amber-500 text-zinc-950 font-black text-xs px-3.5 py-1 rounded-full uppercase tracking-wider">
            <Tag className="w-3.5 h-3.5" />
            <span>DIRECT OFFER</span>
          </div>

          <div className="space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Bring DualZone Cooking Home
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-md mx-auto">
              Ninja DZ201 Foodi 8-Quart 6-in-1 DualZone 2-Basket Air Fryer (Grey)
            </p>
          </div>

          {/* Pricing Breakdown Box */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5 max-w-md mx-auto space-y-3">
            
            <div className="flex items-center justify-between text-xs text-zinc-400 pb-2 border-b border-zinc-800">
              <span>Compare at:</span>
              <span className="line-through font-semibold text-zinc-400">
                ${PRODUCT_INFO.compareAtPrice.toFixed(2)}
              </span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="font-bold text-zinc-200">Today:</span>
              <span className="text-3xl font-black text-white tracking-tight">
                ${PRODUCT_INFO.sellingPrice.toFixed(0)}
              </span>
            </div>

            <div className="flex items-center justify-between text-xs text-emerald-400 font-extrabold pt-2 border-t border-zinc-800">
              <span>You Save:</span>
              <span className="bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded border border-emerald-500/30">
                Save ${PRODUCT_INFO.savings.toFixed(2)}
              </span>
            </div>

          </div>

          {/* Guarantees List */}
          <div className="flex items-center justify-center gap-6 text-xs text-zinc-300 font-semibold">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-emerald-400" />
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-emerald-400" />
              <span>30-Day Returns</span>
            </div>
          </div>

          {/* Main CTA */}
          <div className="max-w-md mx-auto pt-2">
            <button
              onClick={onCtaClick}
              className="w-full bg-amber-400 hover:bg-amber-300 text-zinc-950 font-black text-lg py-4 px-6 rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <span>GET IT FOR $99</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-[11px] text-zinc-400 mt-2">
              In Stock • Ships directly • Includes 2 baskets & 2 crisper plates
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
