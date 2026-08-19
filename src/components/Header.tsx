import React from 'react';
import { ShieldCheck, Award, ShoppingBag, Activity } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

interface HeaderFeature {
  icon?: 'activity' | 'award' | 'shield';
  text: string;
}

interface HeaderProps {
  brandName?: string;
  tagline?: string;
  logoUrl?: string;
  startingPrice?: number;
  ctaText?: string;
  features?: HeaderFeature[];
  onCtaClick: () => void;
  cartCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  brandName,
  tagline,
  logoUrl,
  startingPrice = 29,
  ctaText,
  features,
  onCtaClick,
}) => {
  const { t, formatPrice } = useLanguage();

  const activeBrandName = brandName || t.header.brandName;
  const activeTagline = tagline || t.header.tagline;

  const defaultFeatures: HeaderFeature[] = [
    { icon: 'activity', text: t.header.features[0] },
    { icon: 'award', text: t.header.features[1] },
    { icon: 'shield', text: t.header.features[2] },
  ];

  const activeFeatures = features || defaultFeatures;

  const getIcon = (type?: string) => {
    switch (type) {
      case 'award':
        return <Award className="w-3.5 h-3.5 text-sky-600 shrink-0" />;
      case 'shield':
        return <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />;
      case 'activity':
      default:
        return <Activity className="w-3.5 h-3.5 text-sky-600 shrink-0" />;
    }
  };

  const dynamicButtonText =
    ctaText || `${t.header.orderNow} (${t.header.from} ${formatPrice(startingPrice)})`;

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-slate-200/80 sticky top-[33px] sm:top-[37px] z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-18 flex items-center justify-between gap-3 sm:gap-4">
        
        {/* Dynamic Brand & Lab Identity */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          {logoUrl ? (
            <img
              src={logoUrl}
              alt={activeBrandName}
              referrerPolicy="no-referrer"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl object-contain"
            />
          ) : (
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-sky-600 to-slate-900 flex items-center justify-center text-white font-black text-base sm:text-xl shadow-md shrink-0">
              {activeBrandName.charAt(0)}
            </div>
          )}
          <div className="min-w-0">
            <div className="flex items-center gap-1">
              <span className="font-black text-base sm:text-xl text-slate-900 tracking-tight truncate">
                {activeBrandName}
              </span>
              <span className="text-[10px] sm:text-xs text-sky-600 font-extrabold">™</span>
            </div>
            {activeTagline && (
              <span className="text-[9px] sm:text-[10px] uppercase font-bold text-slate-500 tracking-wider block -mt-0.5 truncate max-w-[130px] sm:max-w-xs">
                {activeTagline}
              </span>
            )}
          </div>
        </div>

        {/* Dynamic Clinical Proof Badges (Hidden on mobile/small tablets, visible on large screens) */}
        {activeFeatures && activeFeatures.length > 0 && (
          <div className="hidden xl:flex items-center gap-5 text-xs text-slate-600 font-semibold whitespace-nowrap">
            {activeFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                {getIcon(feat.icon)}
                <span>{feat.text}</span>
              </div>
            ))}
          </div>
        )}

        {/* Right Header Actions: Multi-Language Selector + CTA */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Language Switcher */}
          <LanguageSwitcher variant="standard" />

          {/* Direct Order Button */}
          <button
            type="button"
            onClick={onCtaClick}
            className="bg-slate-900 hover:bg-sky-950 text-white font-black text-xs sm:text-sm px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-xs transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer active:scale-98 whitespace-nowrap"
          >
            <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400" />
            <span className="hidden xs:inline">{dynamicButtonText}</span>
            <span className="xs:hidden">{t.header.orderNow}</span>
          </button>
        </div>

      </div>
    </header>
  );
};
