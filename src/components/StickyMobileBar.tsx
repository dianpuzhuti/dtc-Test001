import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ProductVariant } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface StickyMobileBarProps {
  selectedVariant: ProductVariant;
  onCtaClick: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({
  selectedVariant,
  onCtaClick,
}) => {
  const { t, formatPrice } = useLanguage();

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800/90 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-2xl transition-all">
      <div className="flex items-center justify-between gap-3.5 max-w-md mx-auto">
        
        {/* Left: Price and Variant */}
        <div className="flex flex-col shrink-0">
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-black text-white tracking-tight">
              {formatPrice(selectedVariant.sellingPrice)}
            </span>
            <span className="text-xs text-slate-500 line-through">
              {formatPrice(selectedVariant.compareAtPrice)}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[10px] text-sky-400 font-extrabold uppercase">
              {selectedVariant.size}
            </span>
            <span className="text-[10px] text-emerald-400 font-bold">
              • {t.variants.save} {formatPrice(selectedVariant.savings)}
            </span>
          </div>
        </div>

        {/* Right: Buy Action Button with thumb-friendly touch target */}
        <button
          type="button"
          onClick={onCtaClick}
          className="flex-1 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 active:scale-95 text-slate-950 font-black text-sm py-3.5 px-4 rounded-2xl shadow-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer select-none"
        >
          <span>{t.stickyMobile.orderNow}</span>
          <ArrowRight className="w-4 h-4 text-slate-950 stroke-[3]" />
        </button>

      </div>
    </div>
  );
};
