import React from 'react';
import { ShieldCheck, Award, ShoppingBag, Sparkles, Activity } from 'lucide-react';
import { PRODUCT_INFO } from '../data/productData';

interface HeaderProps {
  onCtaClick: () => void;
  cartCount?: number;
}

export const Header: React.FC<HeaderProps> = ({ onCtaClick, cartCount = 1 }) => {
  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-slate-200/80 sticky top-[37px] z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
        
        {/* Brand & Lab Identity */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-600 to-slate-900 flex items-center justify-center text-white font-black text-xl shadow-md">
            P
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-black text-lg sm:text-xl text-slate-900 tracking-tight">
                PeptiDerm
              </span>
              <span className="text-xs text-sky-600 font-extrabold">™</span>
            </div>
            <span className="text-[10px] uppercase font-bold text-slate-600 tracking-widest block -mt-0.5">
              Clinical Dermatology Laboratories
            </span>
          </div>
        </div>

        {/* Clinical Proof Badges */}
        <div className="hidden lg:flex items-center gap-6 text-xs text-slate-600 font-semibold">
          <div className="flex items-center gap-1.5">
            <Activity className="w-4 h-4 text-sky-600" />
            <span>7 Bio-Mimetic Signal Peptides</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-sky-600" />
            <span>28-Day Double-Blind Clinical Proof</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>99.8% Sensitive Skin Tolerance</span>
          </div>
        </div>

        {/* Right Header Action: Shopify Instant Cart Drawer */}
        <div className="flex items-center gap-3">
          <button
            onClick={onCtaClick}
            className="bg-slate-900 hover:bg-sky-950 text-white font-black text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-xl shadow-xs transition-all flex items-center gap-2 cursor-pointer active:scale-98"
          >
            <ShoppingBag className="w-4 h-4 text-sky-400" />
            <span>Order Now (From $29)</span>
          </button>
        </div>

      </div>
    </header>
  );
};
