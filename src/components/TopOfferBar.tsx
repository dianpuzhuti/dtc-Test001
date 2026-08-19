import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface TopOfferBarProps {
  badge?: string;
  offerText?: string;
  leftGuarantee?: string;
  rightGuarantee?: string;
}

export const TopOfferBar: React.FC<TopOfferBarProps> = ({
  badge = "FLASH SPECIAL",
  offerText = "UP TO 41% OFF • FREE CRYO SPATULA WITH 50ML/100ML • WORLDWIDE EXPRESS SHIPPING",
  leftGuarantee = "GMP MEDICAL LAB CERTIFIED • SWISS SGS DERMATOLOGICALLY TESTED",
  rightGuarantee = "30-Day Money-Back Guarantee",
}) => {
  return (
    <div className="bg-gradient-to-r from-slate-950 via-sky-950 to-slate-950 text-white text-xs py-2 px-3 sm:px-4 border-b border-sky-900/60 sticky top-0 z-50 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Left Clinical Guarantee (Desktop only) */}
        {leftGuarantee && (
          <div className="hidden xl:flex items-center gap-2 text-sky-300 font-bold text-[11px] shrink-0 whitespace-nowrap">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{leftGuarantee}</span>
          </div>
        )}

        {/* Center Dynamic Offer Announcement - Guaranteed Single Line, Never Wraps into 8 Lines */}
        <div className="flex-1 flex items-center justify-center gap-2 min-w-0 overflow-hidden">
          {badge && (
            <span className="bg-sky-500 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded shrink-0 shadow-2xs">
              {badge}
            </span>
          )}
          <span className="font-extrabold text-[11px] sm:text-xs text-white tracking-wide truncate">
            {offerText}
          </span>
        </div>

        {/* Right Guarantee (Tablet/Desktop) */}
        {rightGuarantee && (
          <div className="hidden lg:flex items-center gap-1.5 text-slate-300 text-[11px] font-semibold shrink-0 whitespace-nowrap">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>{rightGuarantee}</span>
          </div>
        )}

      </div>
    </div>
  );
};
