import React from 'react';
import { WHATS_IN_THE_BOX_DATA, PRODUCT_IMAGES } from '../data/productData';
import { CheckCircle, ShieldCheck, Package } from 'lucide-react';

export const WhatsInBoxSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 border-b border-slate-200">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-900 text-xs font-black px-3.5 py-1 rounded-full border border-sky-200 tracking-wider uppercase">
            <Package className="w-3.5 h-3.5 text-sky-700" />
            <span>PACKAGE ARCHITECTURE • 医用级开箱配置</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            每一处细节，皆遵循临床制药标准
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            从真空锁鲜泵体到抑菌合金微导勺，全套医用标准配置，确保成分纯粹与使用卫生。
          </p>
        </div>

        {/* Box Contents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xs">
          
          {/* Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs p-4 flex items-center justify-center">
              <img
                src={PRODUCT_IMAGES.heroMain}
                alt="PeptiDerm 医用级开箱实物图"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
              <div className="absolute top-3 left-3 bg-slate-900 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-md">
                CLINICAL UNBOXING
              </div>
            </div>
          </div>

          {/* Checklist Items (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {WHATS_IN_THE_BOX_DATA.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-2xs space-y-1.5 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-slate-900 text-sm sm:text-base">
                      {item.name}
                    </span>
                    <span className="text-xs font-black text-sky-800 bg-sky-100 border border-sky-200 px-2 py-0.5 rounded">
                      {item.quantity}
                    </span>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {item.description}
                  </p>
                  <span className="text-[10px] text-sky-700 font-semibold pt-1 border-t border-slate-100 block">
                    ✓ {item.clinicalSpec}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-sky-50 border border-sky-200 rounded-xl p-3.5 text-center text-xs text-sky-900 font-semibold flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-sky-600 shrink-0" />
              <span>全系标配 30 天无理由全额退款保障 & 全球极速包邮</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
