import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, MessageCircleQuestion } from 'lucide-react';
import { FAQ_LIST } from '../data/productData';

export const FAQSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-retinol-diff");

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-slate-50 py-16 px-4 sm:px-6 border-b border-slate-200">
      <div className="max-w-3xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-900 text-xs font-black px-3.5 py-1 rounded-full border border-sky-200 tracking-wider uppercase">
            <MessageCircleQuestion className="w-3.5 h-3.5 text-sky-700" />
            <span>CLINICAL ADVISORY • 皮肤科医生常见疑虑解答</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            关于多肽细胞抗老，您想了解的一切
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            科学护肤，明明白白消费。以下为临床实验室针对核心关切的专业解答。
          </p>
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-3">
          {FAQ_LIST.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/80 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black uppercase tracking-wider bg-sky-50 text-sky-800 border border-sky-100 px-2 py-0.5 rounded shrink-0">
                      {faq.category}
                    </span>
                    <span className="font-extrabold text-slate-900 text-sm sm:text-base">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-sky-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/40">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Doctor Consultation Note */}
        <div className="bg-sky-50/80 border border-sky-200 rounded-2xl p-4 text-center text-xs text-sky-950 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
          <span>仍有其他肤质疑问？我们的在线皮肤科顾问团队提供 1v1 免费咨询。</span>
        </div>

      </div>
    </section>
  );
};
