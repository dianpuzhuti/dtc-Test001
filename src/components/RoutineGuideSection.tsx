import React from 'react';
import { Sun, Moon, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { PRODUCT_IMAGES } from '../data/productData';

export const RoutineGuideSection: React.FC = () => {
  return (
    <section className="bg-slate-50 py-16 px-4 sm:px-6 border-b border-slate-200">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-900 text-xs font-black px-3.5 py-1 rounded-full border border-sky-200 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-sky-700" />
            <span>CLINICAL RITUAL • 临床级晨晚护肤仪式</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            早抗糖抗光老，晚促胶原新生
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            无光敏性配方，早晚皆宜。配合赠送的医用冷感锌合金微导勺，促进面部淋巴排浊与微循环。
          </p>
        </div>

        {/* 2-Card Morning & Evening Protocol */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Morning Card */}
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-2xs space-y-4 relative overflow-hidden group hover:border-sky-300 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-black">
                  <Sun className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-black text-amber-900 uppercase">AM MORNING PROTOCOL</span>
                  <h3 className="font-black text-base text-slate-900">晨间：抗糖抗氧化 • 哑光持妆</h3>
                </div>
              </div>
              <span className="text-[11px] font-extrabold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                无光敏性
              </span>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              左旋肌肽优先抵御日间紫外线糖化反应，角鲨烷形成透气哑光薄膜，不搓泥、不浮油，后续底妆服帖一整天。
            </p>

            <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>洁面与水精华后，按压1泵均匀涂抹全脸</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>3秒瞬吸化水，直接跟防晒与妆容</span>
              </li>
            </ul>
          </div>

          {/* Evening Card */}
          <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-lg space-y-4 relative overflow-hidden group hover:border-sky-500 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-sky-900 text-sky-300 flex items-center justify-center font-black">
                  <Moon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-black text-sky-400 uppercase">PM NIGHT PROTOCOL</span>
                  <h3 className="font-black text-base text-white">夜间：深层促胶原 • 密集淡纹</h3>
                </div>
              </div>
              <span className="text-[11px] font-extrabold bg-sky-950 text-sky-300 px-2 py-0.5 rounded border border-sky-800">
                黄金修护期
              </span>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              夜间细胞代谢旺盛期，乙酰基六肽-8与蓝铜胜肽协同渗透真皮层，舒缓表情纹肌肉紧张，激活内源性胶原网重构。
            </p>

            <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>按压2泵，在眼周、法令纹、抬头纹处重点厚敷</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>用冷感合金微导勺沿下颌线向上提拉3-5次</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
