import React from 'react';
import { Activity, ShieldCheck, TrendingUp, TrendingDown, Award, Microscope, FileText } from 'lucide-react';
import { CLINICAL_TRIAL_RESULTS, PRODUCT_IMAGES } from '../data/productData';

export const ClinicalScienceSection: React.FC = () => {
  return (
    <section className="bg-slate-50 py-16 px-4 sm:px-6 border-b border-slate-200">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-900 text-xs font-black px-3.5 py-1 rounded-full border border-sky-200 tracking-wider uppercase">
            <Microscope className="w-3.5 h-3.5 text-sky-700" />
            <span>DOUBLE-BLIND CLINICAL DATA • 双盲临床数据背书</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            不靠玄学概念，只看临床仪器数据
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            由第三方权威皮肤科医学机构开展为期 28 天的随机双盲人体对照测试（n=60），经 PRIMOS 3D 及 DermaLab 仪器精准检测。
          </p>
        </div>

        {/* 4 Clinical Big Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CLINICAL_TRIAL_RESULTS.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-3 relative overflow-hidden group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-wider text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                  {item.timeframe}
                </span>
                {item.changeDirection === 'decrease' ? (
                  <span className="flex items-center gap-0.5 text-emerald-600 text-xs font-black">
                    <TrendingDown className="w-3.5 h-3.5" />
                    减缓改善
                  </span>
                ) : (
                  <span className="flex items-center gap-0.5 text-sky-600 text-xs font-black">
                    <TrendingUp className="w-3.5 h-3.5" />
                    新生提升
                  </span>
                )}
              </div>

              <div>
                <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight block">
                  {item.changeValue}
                </span>
                <h3 className="font-extrabold text-sm text-slate-800 mt-1">
                  {item.metric}
                </h3>
              </div>

              <div className="pt-2 border-t border-slate-100 space-y-1">
                <p className="text-slate-500 text-xs leading-relaxed">
                  {item.description}
                </p>
                <span className="text-[10px] text-slate-400 font-semibold block pt-1">
                  🔬 检测法: {item.methodology}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Laboratory & Medical Protocol Spotlight */}
        <div className="bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="bg-sky-500 text-slate-950 text-[10px] font-black uppercase px-2.5 py-1 rounded-md tracking-wider">
                GMP 医疗级无菌制药标准
              </span>
              <span className="text-xs text-sky-300 font-bold">十万级净化车间</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
              医药级真空冷链封装，锁死 99.8% 胜肽生物活性
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              多肽分子对紫外光与氧气极度敏感。PeptiDerm 舍弃传统广口敞开式面霜罐，研发医用级双层真空避光按压泵仓，每一次按压都是刚出厂的鲜活活性。
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/80">
                <span className="text-sky-400 font-extrabold text-xs block">0% 细菌二次污染</span>
                <span className="text-[11px] text-slate-400">真空活塞隔离手指接触</span>
              </div>
              <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/80">
                <span className="text-sky-400 font-extrabold text-xs block">100% 阻氧遮光</span>
                <span className="text-[11px] text-slate-400">高分子避光材质抗氧化</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 space-y-3">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-slate-700 shadow-lg bg-slate-950">
              <img
                src={PRODUCT_IMAGES.clinicalLab}
                alt="PeptiDerm 临床实验室"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-4 right-4 text-xs text-slate-200">
                <span className="font-extrabold text-white block">SGS 人体临床无刺激检测报告</span>
                <span className="text-[11px] text-sky-300">报告编号: SGS-DERM-2025-0814</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
