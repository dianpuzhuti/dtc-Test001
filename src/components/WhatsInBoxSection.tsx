import React from 'react';
import { WHATS_IN_THE_BOX_DATA, PRODUCT_IMAGES } from '../data/productData';
import { CheckCircle, Package } from 'lucide-react';

export const WhatsInBoxSection: React.FC = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 border-b border-zinc-200">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full border border-zinc-200">
            PACKAGE CONTENTS
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight">
            What’s in the Box
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Everything you need to start dual-basket cooking right out of the box.
          </p>
        </div>

        {/* Compact Package Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-50 border border-zinc-200 rounded-3xl p-6 sm:p-8 shadow-xs">
          
          {/* Visual Diagram Representation (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-xs p-3 flex items-center justify-center">
              <img
                src={PRODUCT_IMAGES.heroProductGrey}
                alt="Ninja DZ201 Air Fryer and included components"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
              <div className="absolute top-3 left-3 bg-zinc-900 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-md">
                DZ201 COMPLETE KIT
              </div>
            </div>
          </div>

          {/* Included Items Checklist (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {WHATS_IN_THE_BOX_DATA.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-zinc-200/90 rounded-2xl p-4 shadow-2xs space-y-1.5 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-zinc-900 text-sm sm:text-base">
                      {item.name}
                    </span>
                    <span className="text-xs font-black text-amber-900 bg-amber-100 border border-amber-200 px-2 py-0.5 rounded">
                      {item.quantity}
                    </span>
                  </div>
                  <p className="text-zinc-500 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-center text-xs text-emerald-800 font-semibold flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Includes 30-Day Money Back Guarantee & Free Standard Shipping</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
