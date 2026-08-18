import React, { useState, useEffect } from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { PRODUCT_INFO } from '../data/productData';

interface StickyMobileBarProps {
  onCtaClick: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onCtaClick }) => {
  const [showBar, setShowBar] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling past 350px
      if (window.scrollY > 350) {
        setShowBar(true);
      } else {
        setShowBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!showBar) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-zinc-200/90 shadow-2xl p-3 sm:hidden animate-in slide-in-from-bottom duration-200">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        
        {/* Price & Name */}
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Ninja DualZone™</span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-black text-zinc-900 tracking-tight">
              ${PRODUCT_INFO.sellingPrice.toFixed(0)}
            </span>
            <span className="text-xs text-zinc-400 line-through">
              ${PRODUCT_INFO.compareAtPrice.toFixed(0)}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={onCtaClick}
          className="flex-1 bg-zinc-900 active:bg-black text-white font-extrabold text-xs py-2.5 px-4 rounded-xl shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>GET IT FOR ${PRODUCT_INFO.sellingPrice.toFixed(0)}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

      </div>
    </div>
  );
};
