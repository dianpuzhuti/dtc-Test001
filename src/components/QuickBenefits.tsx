import React from 'react';
import { Layers, Clock, Maximize2 } from 'lucide-react';

export const QuickBenefits: React.FC = () => {
  const benefits = [
    {
      id: "independent-baskets",
      title: "Two Independent Baskets",
      description: "Cook different foods separately.",
      icon: <Layers className="w-6 h-6 text-zinc-900" />,
    },
    {
      id: "smart-finish",
      title: "Smart Finish",
      description: "Coordinate both zones to finish together.",
      icon: <Clock className="w-6 h-6 text-zinc-900" />,
    },
    {
      id: "family-capacity",
      title: "8-QT Capacity",
      description: "Flexible space for everyday meals.",
      icon: <Maximize2 className="w-6 h-6 text-zinc-900" />,
    },
  ];

  return (
    <section className="bg-white py-8 px-4 sm:px-6 border-b border-zinc-200">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-zinc-50 border border-zinc-200 rounded-2xl p-5 transition-all flex items-start gap-4 shadow-xs hover:border-zinc-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200/90 shadow-2xs flex items-center justify-center shrink-0">
                {benefit.icon}
              </div>
              <div>
                <h3 className="font-extrabold text-zinc-900 text-base tracking-tight mb-0.5">
                  {benefit.title}
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm font-medium">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
