import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

interface TopOfferBarProps {
  badge?: string;
  offerText?: string;
  leftGuarantee?: string;
  rightGuarantee?: string;
}

export const TopOfferBar: React.FC<TopOfferBarProps> = ({
  badge,
  offerText,
  leftGuarantee,
  rightGuarantee,
}) => {
  const { t } = useLanguage();

  const displayBadge = badge || t.topBar.badge;
  const displayOffer = offerText || t.topBar.offerText;
  const displayLeft = leftGuarantee || t.topBar.leftGuarantee;
  const displayRight = rightGuarantee || t.topBar.rightGuarantee;

  return (
    <div className="bg-gradient-to-r from-slate-950 via-sky-950 to-slate-950 text-white text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-sky-900/60 sticky top-0 z-50 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Left Clinical Guarantee (Desktop only) */}
        {displayLeft && (
          <div className="hidden xl:flex items-center gap-2 text-sky-300 font-bold text-[11px] shrink-0 whitespace-nowrap">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{displayLeft}</span>
          </div>
        )}

        {/* Center Dynamic Offer Announcement - Guaranteed Single Line, Never Wraps into 8 Lines */}
        <div className="flex-1 flex items-center justify-center gap-2 min-w-0 overflow-hidden">
          {displayBadge && (
            <span className="bg-sky-500 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded shrink-0 shadow-2xs">
              {displayBadge}
            </span>
          )}
          <span className="font-extrabold text-[11px] sm:text-xs text-white tracking-wide truncate">
            {displayOffer}
          </span>
        </div>

        {/* Right Section: Guarantee + Minimal Language Switcher */}
        <div className="flex items-center gap-3 shrink-0">
          {displayRight && (
            <div className="hidden lg:flex items-center gap-1.5 text-slate-300 text-[11px] font-semibold shrink-0 whitespace-nowrap">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{displayRight}</span>
            </div>
          )}

          {/* Minimal Language Switcher in Top Bar */}
          <div className="sm:hidden">
            <LanguageSwitcher variant="minimal" />
          </div>
        </div>

      </div>
    </div>
  );
};
