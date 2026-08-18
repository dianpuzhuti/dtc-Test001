import React from 'react';
import { ShoppingBag, ShieldCheck } from 'lucide-react';
import { PRODUCT_INFO } from '../data/productData';

interface HeaderProps {
  onCtaClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCtaClick }) => {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-zinc-200/80 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo & Product Badge */}
        <div className="flex items-center gap-2.5">
          <div className="flex flex-col">
            <span className="font-extrabold tracking-tight text-xl text-zinc-900 leading-none">
              NINJA<span className="text-zinc-500 font-normal text-xs ml-1">Foodi®</span>
            </span>
            <span className="text-[10px] font-medium tracking-wider text-zinc-500 uppercase mt-0.5">
              DZ201 • 8-QT DualZone
            </span>
          </div>
        </div>

        {/* Right Header Action */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-zinc-600 bg-zinc-100 px-2.5 py-1 rounded-full border border-zinc-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Official $99 Offer</span>
          </div>

          <button
            onClick={onCtaClick}
            className="flex items-center gap-1.5 bg-zinc-900 hover:bg-black text-white text-xs sm:text-sm font-bold px-3.5 py-2 rounded-full transition-all shadow-xs active:scale-98 cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>GET IT FOR ${PRODUCT_INFO.sellingPrice.toFixed(0)}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
