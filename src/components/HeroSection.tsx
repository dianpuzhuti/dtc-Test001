import React, { useState } from 'react';
import {
  ShieldCheck,
  Truck,
  Sparkles,
  ArrowRight,
  Check,
  Star,
  Activity,
  Flame,
  Award,
  Zap,
  RotateCcw
} from 'lucide-react';
import { PRODUCT_INFO, PRODUCT_VARIANTS, PRODUCT_IMAGES } from '../data/productData';
import { ProductVariant } from '../types';

interface HeroSectionProps {
  selectedVariant: ProductVariant;
  onSelectVariant: (variant: ProductVariant) => void;
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  selectedVariant,
  onSelectVariant,
  onCtaClick,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const heroGallery = [
    {
      src: PRODUCT_IMAGES.heroMain,
      alt: "PeptiDerm 多肽细胞更新抗衰保湿霜 官方医用真空瓶实物",
      label: "医用真空锁鲜瓶",
    },
    {
      src: PRODUCT_IMAGES.heroTexture,
      alt: "融雪冰淇淋质地 3秒哑光透皮吸收",
      label: "融雪微囊质地",
    },
    {
      src: PRODUCT_IMAGES.clinicalLab,
      alt: "瑞士无菌实验室 双盲临床实验研发背景",
      label: "十万级GMP实验室",
    },
    {
      src: PRODUCT_IMAGES.skinBeforeAfter,
      alt: "28天受试者真皮层胶原新生与淡纹效果对比",
      label: "28天胶原新生",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 via-white to-sky-50/40 pt-6 pb-14 px-4 sm:px-6 border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Clinical Gallery Showcase (5 cols) */}
        <div className="lg:col-span-6 flex flex-col gap-3.5">
          
          {/* Main Visual Frame */}
          <div className="relative aspect-4/3 sm:aspect-1/1 w-full rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-md group">
            <img
              src={heroGallery[selectedImageIndex].src}
              alt={heroGallery[selectedImageIndex].alt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-103"
            />

            {/* Top Floating Badges */}
            <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2">
              <span className="bg-slate-900/90 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-xs flex items-center gap-1.5 shadow-xs border border-slate-700">
                <Activity className="w-3.5 h-3.5 text-sky-400" />
                7重仿生信号肽
              </span>
              <span className="bg-sky-600 text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-xs flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                99.8% 敏感肌耐受
              </span>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-3.5 right-3.5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl text-[11px] font-bold text-slate-800 shadow-sm border border-slate-200/80 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
              {heroGallery[selectedImageIndex].label}
            </div>
          </div>

          {/* Thumbnail Gallery Row */}
          <div className="grid grid-cols-4 gap-2.5">
            {heroGallery.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className={`relative aspect-4/3 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                  selectedImageIndex === idx
                    ? 'border-sky-600 ring-2 ring-sky-600/30 shadow-xs scale-102'
                    : 'border-slate-200 opacity-70 hover:opacity-100 hover:border-slate-300'
                }`}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Clinical Formula Specs Strip */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 grid grid-cols-3 gap-2 text-center text-xs shadow-2xs">
            <div className="space-y-0.5">
              <span className="block text-slate-400 font-bold text-[10px] uppercase tracking-wider">核心成分</span>
              <span className="font-extrabold text-slate-900">六肽-8 + 蓝铜胜肽</span>
            </div>
            <div className="border-x border-slate-200 px-1 space-y-0.5">
              <span className="block text-slate-400 font-bold text-[10px] uppercase tracking-wider">配方安全</span>
              <span className="font-extrabold text-emerald-700">0% 香精/酒精/矿油</span>
            </div>
            <div className="space-y-0.5">
              <span className="block text-slate-400 font-bold text-[10px] uppercase tracking-wider">28天临床</span>
              <span className="font-extrabold text-sky-700">-42.8% 皱纹深度</span>
            </div>
          </div>

        </div>

        {/* Right Column: High-Converting Medical Offer & Variant Selector (7 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
          
          {/* Header Reviews & Dermatologist Endorsement */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="flex items-center gap-1 text-amber-500 bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded-full text-xs font-black">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-slate-900 ml-1 font-extrabold">{PRODUCT_INFO.rating}</span>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              基于 <strong>{PRODUCT_INFO.reviewCount}+</strong> 临床及真实用户评价
            </span>
            <span className="bg-sky-100 text-sky-900 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-sky-200">
              复购率 {PRODUCT_INFO.repurchaseRate}%
            </span>
          </div>

          {/* Medical Eyebrow */}
          <div className="inline-flex items-center gap-1.5 self-start bg-sky-100/90 border border-sky-300 px-3.5 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-sky-800" />
            <span className="text-sky-950 font-black text-[11px] sm:text-xs tracking-wider uppercase">
              突破抗衰与耐受的对立矛盾 • 临床级多肽
            </span>
          </div>

          {/* Main Title & Tagline */}
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              PeptiDerm™ 多肽细胞更新抗衰保湿霜
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              7重仿生信号肽深透真皮层促生I/III型胶原。告别传统视黄醇(A醇)脱皮泛红，融雪微囊质地3秒哑光吸收，油皮不闷痘、干皮恒润24小时。
            </p>
          </div>

          {/* 1:1 Shopify Variant Selection Matrix */}
          <div className="space-y-3 pt-1">
            <div className="flex items-center justify-between">
              <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <span>选择疗程规格 (Select Variant):</span>
                <span className="text-sky-700 font-black">{selectedVariant.volume}</span>
              </label>
              <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                当前库存充足 (仅剩 {selectedVariant.stockLeft} 瓶)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {PRODUCT_VARIANTS.map((variant) => {
                const isSelected = selectedVariant.id === variant.id;
                return (
                  <div
                    key={variant.id}
                    onClick={() => onSelectVariant(variant)}
                    className={`relative p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                      isSelected
                        ? 'border-sky-600 bg-sky-50/50 shadow-md ring-2 ring-sky-600/20'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/60'
                    }`}
                  >
                    {/* Badge */}
                    {variant.badge && (
                      <div className={`absolute -top-2.5 left-3 text-[10px] font-black px-2 py-0.5 rounded-full shadow-2xs ${
                        variant.isPopular
                          ? 'bg-amber-500 text-slate-950'
                          : variant.isBestValue
                          ? 'bg-sky-700 text-white'
                          : 'bg-slate-700 text-white'
                      }`}>
                        {variant.badge}
                      </div>
                    )}

                    <div className="pt-1">
                      <div className="flex items-center justify-between">
                        <span className="font-black text-slate-900 text-base">{variant.size}</span>
                        <span className="text-xs font-extrabold text-sky-700 bg-sky-100 px-1.5 py-0.5 rounded">
                          省 ${variant.savings}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 font-medium mt-0.5 leading-snug">
                        {variant.supplyDuration}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-baseline justify-between">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xl font-black text-slate-900">
                          ${variant.sellingPrice}
                        </span>
                        <span className="text-xs text-slate-400 line-through">
                          ${variant.compareAtPrice}
                        </span>
                      </div>
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        isSelected ? 'border-sky-600 bg-sky-600' : 'border-slate-300'
                      }`}>
                        {isSelected && <Check className="w-2.5 h-2.5 text-white stroke-[3]" />}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active Variant Perks Box */}
          <div className="bg-slate-900 text-white rounded-2xl p-4 sm:p-5 shadow-sm space-y-3.5 border border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider block">
                  已选定疗程方案:
                </span>
                <span className="font-extrabold text-sm sm:text-base text-white">
                  {selectedVariant.name}
                </span>
              </div>
              <div className="text-right flex sm:flex-col items-baseline sm:items-end gap-2 sm:gap-0">
                <span className="text-2xl sm:text-3xl font-black text-sky-300">
                  ${selectedVariant.sellingPrice.toFixed(2)}
                </span>
                <span className="text-xs text-slate-400 line-through">
                  原价 ${selectedVariant.compareAtPrice.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Included Gifts Checklist */}
            {selectedVariant.includesGifts.length > 0 && (
              <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/80 space-y-1.5 text-xs">
                <span className="text-[11px] font-extrabold text-amber-400 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  本规格独家赠礼权益：
                </span>
                <ul className="space-y-1 text-slate-300 text-[11px]">
                  {selectedVariant.includesGifts.map((gift, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{gift}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Main Action Button */}
            <div className="pt-1 space-y-2.5">
              <button
                onClick={onCtaClick}
                className="w-full bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-slate-950 font-black text-base sm:text-lg py-4 px-6 rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <span>立即订购 {selectedVariant.size} • ${selectedVariant.sellingPrice} (立省 ${selectedVariant.savings})</span>
                <ArrowRight className="w-5 h-5 text-slate-950" />
              </button>

              {/* Guarantees & Free Shipping */}
              <div className="flex items-center justify-center gap-4 text-xs font-semibold text-slate-300">
                <span className="flex items-center gap-1 text-sky-300">
                  <Truck className="w-3.5 h-3.5 text-sky-400" />
                  全球免运费
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1 text-emerald-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  30天无理由退款
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1 text-slate-300">
                  <Award className="w-3.5 h-3.5 text-sky-400" />
                  正品防伪防拆封
                </span>
              </div>
            </div>
          </div>

          {/* Trust Points */}
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-sky-600 shrink-0" />
              <span>医药级真空阻氧避光泵仓</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-sky-600 shrink-0" />
              <span>瑞士 SGS 无刺激安全检测</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-sky-600 shrink-0" />
              <span>早晚均可使用 • 无光敏性</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-sky-600 shrink-0" />
              <span>完美兼容各类精华与VC</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
