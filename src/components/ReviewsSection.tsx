import React from 'react';
import { Star, ShieldCheck, CheckCircle2, UserCheck, MessageSquareQuote } from 'lucide-react';
import { REVIEWS_LIST, PRODUCT_INFO } from '../data/productData';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="bg-slate-50 py-16 px-4 sm:px-6 border-b border-slate-200">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-900 text-xs font-black px-3.5 py-1 rounded-full border border-sky-200 tracking-wider uppercase">
            <UserCheck className="w-3.5 h-3.5 text-sky-700" />
            <span>REAL PATIENT & USER FEEDBACK • 真实临床与用户口碑</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            超过 3,800+ 位用户的真实逆龄见证
          </h2>

          <div className="flex items-center justify-center gap-3 pt-1">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-slate-900 font-extrabold text-sm">
              {PRODUCT_INFO.rating} / 5.0 临床综合评分
            </span>
            <span className="text-slate-400 text-xs">|</span>
            <span className="text-sky-700 text-xs font-bold">
              88.6% 长期高复购率
            </span>
          </div>
        </div>

        {/* 4 Rich Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {REVIEWS_LIST.map((rev) => (
            <div
              key={rev.id}
              className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-2xs space-y-4 flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div className="space-y-3">
                {/* Author Info & Rating */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-black text-slate-900 text-sm sm:text-base">
                        {rev.author}
                      </h3>
                      {rev.verifiedBuyer && (
                        <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3" />
                          已验证购买
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {rev.skinType} • {rev.timeUsed}
                    </p>
                  </div>

                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Review Title & Content */}
                <div className="space-y-1.5">
                  <h4 className="font-extrabold text-slate-900 text-sm">
                    {rev.title}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {rev.content}
                  </p>
                </div>
              </div>

              {/* Bottom Meta & Purchase Badge */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400 font-semibold">
                  购买规格: <strong className="text-slate-700">{rev.variantPurchased}</strong>
                </span>
                {rev.dermatologistNote && (
                  <span className="bg-sky-50 text-sky-800 text-[10px] font-bold px-2 py-0.5 rounded border border-sky-100">
                    {rev.dermatologistNote}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
