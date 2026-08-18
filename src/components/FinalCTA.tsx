import React from 'react';
import { Truck, RotateCcw, ArrowRight, Sparkles, ShieldCheck, Award, Star } from 'lucide-react';
import { PRODUCT_INFO, PRODUCT_IMAGES } from '../data/productData';
import { ProductVariant } from '../types';

interface FinalCTAProps {
  selectedVariant: ProductVariant;
  onCtaClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ selectedVariant, onCtaClick }) => {
  return (
    <section className="bg-gradient-to-b from-white via-sky-50/40 to-slate-100 py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 via-sky-950 to-slate-950 text-white border-2 border-sky-600/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        
        {/* Background Molecular Accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Column: Product Visual */}
          <div className="md:col-span-5 space-y-3">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-slate-700 shadow-md bg-slate-950">
              <img
                src={PRODUCT_IMAGES.heroMain}
                alt="PeptiDerm 多肽细胞更新抗衰保湿霜"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-2.5 left-2.5 bg-sky-500 text-slate-950 font-black text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wide">
                官方直降限时特惠
              </div>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3 text-center text-xs space-y-1">
              <span className="font-extrabold text-white block">{PRODUCT_INFO.name}</span>
              <span className="text-slate-400 text-[11px] block">7重仿生多肽 • 28天双盲临床验证</span>
            </div>
          </div>

          {/* Right Column: Final Call to Action */}
          <div className="md:col-span-7 space-y-5 text-left">
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 bg-sky-900/80 text-sky-300 text-xs font-bold px-3 py-1 rounded-full border border-sky-500/40">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>30-DAY CELLULAR RENEWAL GUARANTEE</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
                给肌肤一次温和且强效的胶原新生机会。
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                无需忍受A醇脱皮刺痛，无需妥协于普通面霜的无功无过。现在下单，见证28天深层淡纹奇迹。
              </p>
            </div>

            {/* Price Row for Selected Variant */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl sm:text-4xl font-black text-white">
                ${selectedVariant.sellingPrice}
              </span>
              <span className="text-lg text-slate-400 line-through font-semibold">
                ${selectedVariant.compareAtPrice}
              </span>
              <span className="text-xs bg-emerald-950 text-emerald-300 font-bold px-2.5 py-1 rounded-full border border-emerald-700">
                已选 {selectedVariant.size} (立省 ${selectedVariant.savings})
              </span>
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={onCtaClick}
                className="w-full bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-300 hover:to-sky-400 text-slate-950 font-black text-lg py-4 px-6 rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer active:scale-98"
              >
                <span>立即订购 {selectedVariant.size} • ${selectedVariant.sellingPrice}</span>
                <ArrowRight className="w-5 h-5 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Trust Line */}
              <div className="flex items-center justify-center gap-4 text-xs font-semibold text-slate-400 mt-3">
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-sky-400" />
                  全球免运费
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1">
                  <RotateCcw className="w-3.5 h-3.5 text-sky-400" />
                  30天无理由退款
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  100% 正品保障
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
