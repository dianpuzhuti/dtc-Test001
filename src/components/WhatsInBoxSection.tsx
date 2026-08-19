import React from 'react';
import { Package } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const WhatsInBoxSection: React.FC = () => {
  const { t } = useLanguage();

  const cardImages = [
    {
      img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
      badge: '100% AIRLESS VACUUM',
      tag: 'Medical Packaging'
    },
    {
      img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80',
      badge: 'CRYO METAL APPLICATOR',
      tag: 'Antibacterial Zinc-Alloy'
    },
    {
      img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80',
      badge: 'SGS BATCH-VERIFIED',
      tag: 'Clinical Protocol'
    },
  ];

  return (
    <section className="bg-slate-50 py-12 sm:py-16 px-4 sm:px-6 border-b border-slate-200">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-2.5 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-900 text-xs font-black px-3.5 py-1 rounded-full border border-sky-200 uppercase tracking-wider">
            <Package className="w-3.5 h-3.5 text-sky-700" />
            <span>{t.whatsInBox.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            {t.whatsInBox.title}
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            {t.whatsInBox.subtitle}
          </p>
        </div>

        {/* Visual Packaging Highlight Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {t.whatsInBox.items.slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="aspect-4/3 overflow-hidden bg-slate-100 relative">
                <img
                  src={cardImages[idx]?.img}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-black px-2.5 py-1 rounded-full">
                  {cardImages[idx]?.badge}
                </div>
              </div>
              <div className="p-5 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
                  {cardImages[idx]?.tag}
                </span>
                <h3 className="font-extrabold text-slate-900 text-base">
                  {item.name}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
