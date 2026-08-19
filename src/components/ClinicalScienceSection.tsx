import React from 'react';
import { TrendingUp, TrendingDown, CheckCircle2, FileCheck } from 'lucide-react';
import { PRODUCT_IMAGES } from '../data/productData';
import { useLanguage } from '../context/LanguageContext';

export const ClinicalScienceSection: React.FC = () => {
  const { t, language } = useLanguage();

  const labelsByLang = {
    en: {
      cleanroomSubtitle: 'Rigorous Dermatological Standards',
      cleanroomTitle: '100,000-Class GMP Cleanroom Formulation & Packaging',
      cleanroomDesc: 'Every single batch is packaged under medical cleanroom standards in dual-chamber airless vacuum containers. This eliminates oxygen exposure and microbial contamination, keeping peptide active chains at peak bioavailability from first press to last drop.',
      standards: [
        'Zero Micro-Exfoliation',
        'Zero Photosensitivity (AM/PM)',
        '1:1 Natural Sebum Ratio',
        'Non-Comedogenic Tested'
      ],
      improvement: 'Improvement',
      reduction: 'Reduction',
      verified: 'Verified'
    },
    fr: {
      cleanroomSubtitle: 'Standards Dermatologiques Rigoureux',
      cleanroomTitle: 'Formulation et Conditionnement en Salle Blanche BPF Classe 100 000',
      cleanroomDesc: 'Chaque lot est conditionné selon les normes de salle blanche médicale dans des flacons sous vide Airless. Cela élimine toute exposition à l’oxygène et la contamination bactérienne, garantissant la biodisponibilité maximale des peptides.',
      standards: [
        'Zéro desquamation agressive',
        'Zéro photosensibilité (Matin/Soir)',
        'Ratio sébum biomimétique 1:1',
        'Testé non comédogène'
      ],
      improvement: 'Amélioration',
      reduction: 'Réduction',
      verified: 'Vérifié'
    },
    ru: {
      cleanroomSubtitle: 'Строгие дерматологические стандарты',
      cleanroomTitle: 'Производство и фасовка в чистых помещениях GMP Класса 100 000',
      cleanroomDesc: 'Каждая партия фасуется в вакуумные флаконы Airless в условиях медицинских чистых помещений. Это полностью исключает окисление кислородом и бактериальное загрязнение, сохраняя пиковую биоактивность пептидных цепочек.',
      standards: [
        'Без травмирующего шелушения',
        'Фотостабильно (утро / вечер)',
        '1:1 соотношение с липидами кожи',
        'Некомедогенно протестировано'
      ],
      improvement: 'Улучшение',
      reduction: 'Снижение',
      verified: 'Подтверждено'
    },
    es: {
      cleanroomSubtitle: 'Estándares Dermatológicos Rigurosos',
      cleanroomTitle: 'Formulación y Envasado en Sala Limpia GMP Clase 100,000',
      cleanroomDesc: 'Cada lote se envasa bajo estrictos estándares médicos en envases Airless al vacío. Esto elimina la oxidación por aire y la contaminación microbiana, conservando la máxima biodisponibilidad de los péptidos hasta la última gota.',
      standards: [
        'Cero descamación agresiva',
        'Cero fotosensibilidad (Día/Noche)',
        'Ratio 1:1 con lípidos naturales',
        'Testado No Comedogénico'
      ],
      improvement: 'Mejora',
      reduction: 'Reducción',
      verified: 'Verificado'
    }
  };

  const currentLabels = labelsByLang[language] || labelsByLang.en;

  return (
    <section className="bg-slate-50 py-16 px-4 sm:px-6 border-b border-slate-200">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-900 text-xs font-black px-3.5 py-1 rounded-full border border-sky-200 uppercase tracking-wider">
            <FileCheck className="w-3.5 h-3.5 text-sky-700" />
            <span>{t.clinicalScience.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            {t.clinicalScience.title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.clinicalScience.subtitle}
          </p>
        </div>

        {/* 4 Clinical Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.clinicalScience.metrics.map((res, idx) => {
            const isReduction = res.value.startsWith('-');
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200/90 p-6 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-sky-800 bg-sky-50 px-2.5 py-0.5 rounded-full inline-block border border-sky-100">
                    {res.timeframe}
                  </span>

                  <div className="flex items-baseline justify-between pt-1">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                      {res.value}
                    </span>
                    <span className={`inline-flex items-center text-xs font-bold ${
                      !isReduction ? 'text-emerald-600' : 'text-sky-600'
                    }`}>
                      {!isReduction ? <TrendingUp className="w-4 h-4 mr-0.5" /> : <TrendingDown className="w-4 h-4 mr-0.5" />}
                      {!isReduction ? currentLabels.improvement : currentLabels.reduction}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-slate-900 text-base">
                    {res.label}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed">
                    {res.note}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
                  <span>ISO 22716 / Swiss SGS</span>
                  <span className="font-semibold text-emerald-600">{currentLabels.verified}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clinical Instrument Visual & Protocol Box */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xs">
          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-4/3">
            <img
              src={PRODUCT_IMAGES.clinicalLab}
              alt="Medical Dermatology Laboratory"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-sky-700 uppercase tracking-wide">
                {currentLabels.cleanroomSubtitle}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                {currentLabels.cleanroomTitle}
              </h3>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {currentLabels.cleanroomDesc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-bold text-slate-700">
              {currentLabels.standards.map((std, i) => (
                <div key={i} className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{std}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
