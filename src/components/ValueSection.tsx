import React from 'react';
import { Truck, RotateCcw, ArrowRight, Tag, Sparkles, Check, ShieldCheck, Flame, Award } from 'lucide-react';
import { PRODUCT_VARIANTS, PRODUCT_INFO } from '../data/productData';
import { ProductVariant } from '../types';

interface ValueSectionProps {
  selectedVariant: ProductVariant;
  onSelectVariant: (variant: ProductVariant) => void;
  onCtaClick: () => void;
}

export const ValueSection: React.FC<ValueSectionProps> = ({
  selectedVariant,
  onSelectVariant,
  onCtaClick,
}) => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 border-b border-slate-200">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-900 text-xs font-black px-3.5 py-1 rounded-full border border-sky-200 tracking-wider uppercase">
            <Tag className="w-3.5 h-3.5 text-sky-700" />
            <span>CLINICAL PRICING MATRIX • 官方直降选购</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            选择适合您的细胞逆龄疗程
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            临床皮肤科医生推荐按 28 天细胞代谢周期使用。选择多瓶或大容量装享更高折扣与专属赠品。
          </p>
        </div>

        {/* 3 Variant Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PRODUCT_VARIANTS.map((variant) => {
            const isSelected = selectedVariant.id === variant.id;
            return (
              <div
                key={variant.id}
                onClick={() => onSelectVariant(variant)}
                className={`rounded-3xl border-2 p-6 sm:p-7 flex flex-col justify-between space-y-6 transition-all cursor-pointer relative ${
                  variant.isPopular
                    ? 'border-sky-600 bg-gradient-to-b from-sky-50/70 to-white shadow-xl ring-2 ring-sky-600/20 md:-translate-y-2'
                    : isSelected
                    ? 'border-sky-500 bg-white shadow-lg ring-2 ring-sky-500/10'
                    : 'border-slate-200 bg-white hover:border-slate-300 shadow-2xs'
                }`}
              >
                {/* Top Badge */}
                {variant.badge && (
                  <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-black px-3.5 py-1 rounded-full shadow-xs whitespace-nowrap ${
                    variant.isPopular
                      ? 'bg-amber-500 text-slate-950'
                      : variant.isBestValue
                      ? 'bg-sky-800 text-white'
                      : 'bg-slate-800 text-white'
                  }`}>
                    {variant.badge}
                  </div>
                )}

                <div className="space-y-4 pt-1">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-black text-slate-900">{variant.size}</h3>
                      <span className="text-xs font-extrabold text-sky-700 bg-sky-100 px-2 py-0.5 rounded">
                        立省 ${variant.savings}
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 font-medium block mt-0.5">
                      {variant.volume} • {variant.supplyDuration}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-slate-900">
                        ${variant.sellingPrice}
                      </span>
                      <span className="text-sm text-slate-400 line-through font-semibold">
                        ${variant.compareAtPrice}
                      </span>
                    </div>
                    <span className="text-[11px] text-emerald-600 font-extrabold block">
                      立省 {variant.savingsPercent}% • 平均 ${(variant.sellingPrice / (variant.size === '30ml' ? 20 : variant.size === '50ml' ? 45 : 90)).toFixed(2)}/天
                    </span>
                  </div>

                  {/* Subtitle description */}
                  <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {variant.subTitle}
                  </p>

                  {/* Gifts and inclusions list */}
                  <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                    <span className="font-extrabold text-slate-800 text-[11px] block">
                      包含配置与权益：
                    </span>
                    <ul className="space-y-1.5 text-slate-600 text-[11px]">
                      {variant.includesGifts.map((gift, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                          <span>{gift}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="space-y-2 pt-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectVariant(variant);
                      onCtaClick();
                    }}
                    className={`w-full py-3.5 px-4 rounded-xl font-black text-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-98 ${
                      variant.isPopular
                        ? 'bg-sky-600 hover:bg-sky-500 text-white shadow-md'
                        : isSelected
                        ? 'bg-slate-900 hover:bg-slate-800 text-white'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200'
                    }`}
                  >
                    <span>选购 {variant.size} (${variant.sellingPrice})</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <span className="text-[10px] text-center block text-slate-400 font-semibold">
                    库存仅剩 {variant.stockLeft} 瓶 • 支持30天退款保障
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Guarantee Strip */}
        <div className="max-w-2xl mx-auto flex items-center justify-center gap-6 text-xs text-slate-600 font-semibold text-center">
          <div className="flex items-center gap-1.5">
            <Truck className="w-4 h-4 text-sky-600" />
            <span>全境极速免费包邮</span>
          </div>
          <div className="flex items-center gap-1.5">
            <RotateCcw className="w-4 h-4 text-sky-600" />
            <span>30天无理由退款</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>瑞士 SGS 安全认证</span>
          </div>
        </div>

      </div>
    </section>
  );
};
