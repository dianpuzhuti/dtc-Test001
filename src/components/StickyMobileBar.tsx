import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { ProductVariant } from '../types';

interface StickyMobileBarProps {
  selectedVariant: ProductVariant;
  onCtaClick: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({
  selectedVariant,
  onCtaClick,
}) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-3 shadow-2xl">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        
        {/* Left: Price and Variant */}
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-black text-white">
              ${selectedVariant.sellingPrice}
            </span>
            <span className="text-xs text-slate-400 line-through">
              ${selectedVariant.compareAtPrice}
            </span>
          </div>
          <span className="text-[10px] text-sky-400 font-bold">
            {selectedVariant.size} (Save ${selectedVariant.savings})
          </span>
        </div>

        {/* Right: Buy Button */}
        <button
          onClick={onCtaClick}
          className="flex-1 bg-gradient-to-r from-sky-400 to-sky-500 active:scale-98 text-slate-950 font-black text-sm py-3 px-4 rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-all cursor-pointer"
        >
          <span>Order Now</span>
          <ArrowRight className="w-4 h-4 text-slate-950" />
        </button>

      </div>
    </div>
  );
};
