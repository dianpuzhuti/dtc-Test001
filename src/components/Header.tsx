import React from 'react';
import { ShieldCheck, ShoppingBag, Award, Activity } from 'lucide-react';
import { PRODUCT_INFO } from '../data/productData';

interface HeaderProps {
  onCtaClick: () => void;
  cartCount?: number;
}

export const Header: React.FC<HeaderProps> = ({ onCtaClick, cartCount = 1 }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Medical Lab Identity */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-900 to-sky-700 text-white flex items-center justify-center font-black shadow-xs tracking-tighter">
            <Activity className="w-5 h-5 text-sky-300" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                PeptiDerm<span className="text-sky-600 font-bold text-xs align-super ml-0.5">™</span>
              </span>
              <span className="hidden md:inline-block bg-sky-100 text-sky-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-sky-200">
                CLINICAL DERM LAB
              </span>
            </div>
            <p className="text-[10px] text-slate-500 hidden sm:block">多肽细胞更新抗衰保湿霜 • 临床医学级</p>
          </div>
        </div>

        {/* Clinical Trust Badges (Desktop) */}
        <div className="hidden lg:flex items-center gap-6 text-xs text-slate-600 font-medium">
          <span className="flex items-center gap-1 text-slate-700">
            <Award className="w-4 h-4 text-sky-600" />
            <span>28天双盲临床验证</span>
          </span>
          <span className="flex items-center gap-1 text-slate-700">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>99.8% 敏感肌耐受</span>
          </span>
          <span className="text-sky-700 font-bold bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
            ★ {PRODUCT_INFO.rating} ({PRODUCT_INFO.reviewCount}+ 评价)
          </span>
        </div>

        {/* Right Actions: Buy Button & Cart */}
        <div className="flex items-center gap-3">
          <button
            onClick={onCtaClick}
            className="hidden sm:flex items-center gap-1.5 bg-slate-900 hover:bg-sky-950 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs transition-all cursor-pointer"
          >
            <span>立即选购</span>
            <span className="text-sky-300 font-extrabold">$29 起</span>
          </button>

          <button
            onClick={onCtaClick}
            className="relative p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors cursor-pointer"
            title="查看购物车与结算"
          >
            <ShoppingBag className="w-5 h-5 text-slate-800" />
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-sky-600 text-white text-[10px] font-black flex items-center justify-center shadow-xs">
              {cartCount}
            </span>
          </button>
        </div>

      </div>
    </header>
  );
};
