import React from 'react';
import { ShieldCheck, Truck, Sparkles } from 'lucide-react';

export const TopOfferBar: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white text-xs py-2.5 px-4 border-b border-sky-900/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left Clinical Guarantee */}
        <div className="hidden md:flex items-center gap-2 text-sky-300 font-bold">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>GMP MEDICAL LAB CERTIFIED • SWISS SGS DERMATOLOGICALLY TESTED</span>
        </div>

        {/* Center Offer Notice */}
        <div className="flex-1 text-center font-extrabold tracking-wide flex items-center justify-center gap-2">
          <span className="bg-sky-500 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded shadow-2xs">
            FLASH SPECIAL
          </span>
          <span className="text-white">
            LIMITED TIME: UP TO 41% OFF + FREE CRYO SPATULA WITH 50ML/100ML + FREE WORLDWIDE EXPRESS SHIPPING
          </span>
        </div>

        {/* Right Guarantee */}
        <div className="hidden md:flex items-center gap-3 text-slate-300 font-medium">
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>30-Day Money-Back Guarantee</span>
          </div>
        </div>

      </div>
    </div>
  );
};
