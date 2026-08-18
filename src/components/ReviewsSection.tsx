import React from 'react';
import { Star, ShieldCheck, CheckCircle2, Award, UserCheck, MessageSquare } from 'lucide-react';
import { REVIEWS_LIST, PRODUCT_INFO } from '../data/productData';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 border-b border-slate-200">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-900 text-xs font-black px-3.5 py-1 rounded-full border border-sky-200 uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5 text-sky-700" />
            <span>VERIFIED FEEDBACK • CLINICAL & CONSUMER REVIEWS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Loved by Dermatologists and 3,800+ Verified Customers
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm font-black text-slate-900">
              {PRODUCT_INFO.rating} / 5.0 Overall Rating
            </span>
            <span className="text-xs text-slate-500 font-medium">
              (88.6% 60-Day Repurchase Rate)
            </span>
          </div>
        </div>

        {/* 4 Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS_LIST.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-50 rounded-3xl border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between space-y-5 shadow-xs"
            >
              <div className="space-y-3">
                
                {/* Rating & Verified Buyer Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                    <UserCheck className="w-3 h-3" />
                    <span>Verified Purchase</span>
                  </div>
                </div>

                {/* Review Title */}
                <h3 className="font-black text-slate-900 text-base leading-snug">
                  {rev.title}
                </h3>

                {/* Review Body */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {rev.content}
                </p>

                {/* Dermatologist Note if present */}
                {rev.dermatologistNote && (
                  <div className="bg-sky-50 border border-sky-200 rounded-xl p-3 text-xs text-sky-900 font-medium flex items-start gap-2">
                    <Award className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{rev.dermatologistNote}</span>
                  </div>
                )}

              </div>

              {/* Author & Skin Profile */}
              <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-500">
                <div>
                  <span className="font-extrabold text-slate-900 block">{rev.author}</span>
                  <span className="text-[11px] text-slate-500">{rev.skinType}</span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-sky-700 font-bold block">{rev.variantPurchased}</span>
                  <span className="text-[10px] text-slate-400">{rev.timeUsed}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
