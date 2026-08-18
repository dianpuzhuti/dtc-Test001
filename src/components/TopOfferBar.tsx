import React from 'react';
import { ShieldCheck, Truck, Sparkles, Clock } from 'lucide-react';
import { PRODUCT_INFO } from '../data/productData';

export const TopOfferBar: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white text-xs py-2 px-3 border-b border-sky-900/50 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs">
        
        {/* Left: Lab Badge */}
        <div className="flex items-center gap-1.5 text-sky-300 font-semibold">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
          <span>{PRODUCT_INFO.dermatologyGrade}</span>
        </div>

        {/* Center: Special Offer */}
        <div className="hidden sm:flex items-center gap-2 text-slate-200">
          <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0" />
          <span>
            7重仿生信号肽直降特惠：<strong>30ml $29</strong> / <strong>50ml $49</strong> / <strong>100ml $79</strong>
          </span>
        </div>

        {/* Right: Guarantee & Shipping */}
        <div className="flex items-center gap-3 text-slate-300">
          <span className="flex items-center gap-1">
            <Truck className="w-3 h-3 text-sky-400" />
            <span>全球免运费</span>
          </span>
          <span className="text-slate-600">|</span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            <span>30天退款保障</span>
          </span>
        </div>

      </div>
    </div>
  );
};
