import React, { useState } from 'react';
import { FOOD_RESULTS } from '../data/productData';
import { FoodResultItem } from '../types';
import { Utensils, Maximize2, X, Sparkles } from 'lucide-react';

export const RealFoodResults: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalItem, setActiveModalItem] = useState<FoodResultItem | null>(null);

  const categories = ["All", "Mains & Poultry", "Sides & Crispy", "Sides & Healthy", "Bake & Desserts"];

  const filteredFoods = selectedCategory === "All"
    ? FOOD_RESULTS
    : FOOD_RESULTS.filter((f) => f.category === selectedCategory);

  return (
    <section className="bg-zinc-50/80 py-12 px-4 sm:px-6 border-b border-zinc-200">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
            REAL COOKED RESULTS
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight">
            From Quick Snacks to Full Meals.
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Authentic results from crispy golden chicken and French fries to roasted vegetables and fresh baked pastries.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full font-bold text-xs transition-all cursor-pointer border ${
                selectedCategory === cat
                  ? 'bg-zinc-900 text-white border-zinc-900 shadow-xs'
                  : 'bg-white text-zinc-700 hover:bg-zinc-100 border-zinc-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Food Gallery Grid (6 Image Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredFoods.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-zinc-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                {/* Zone Badge */}
                {item.basketTag && (
                  <div className="absolute top-3 left-3 bg-zinc-900/90 text-amber-400 text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-amber-400/30 backdrop-blur-xs flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>{item.basketTag}</span>
                  </div>
                )}

                {/* Hover zoom indicator */}
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/90 text-zinc-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-xs">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] uppercase font-extrabold tracking-wider text-amber-300 block">
                    {item.category}
                  </span>
                  <h3 className="text-base font-black tracking-tight">{item.title}</h3>
                </div>
              </div>

              <div className="p-3.5 bg-white border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-600">
                <span className="truncate">{item.description}</span>
                <span className="text-amber-800 font-bold shrink-0 ml-2">View</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox for Image Inspection */}
        {activeModalItem && (
          <div className="fixed inset-0 z-50 bg-zinc-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
            <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-zinc-200 relative space-y-0">
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-zinc-900/80 hover:bg-zinc-900 text-white flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-4/3 w-full bg-zinc-900">
                <img
                  src={activeModalItem.imageUrl}
                  alt={activeModalItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 space-y-3 bg-white">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-1 rounded">
                    {activeModalItem.basketTag || activeModalItem.category}
                  </span>
                  <span className="text-xs text-zinc-400 font-semibold">Authentic Cooked Photo</span>
                </div>
                <h3 className="text-xl font-black text-zinc-900">{activeModalItem.title}</h3>
                <p className="text-sm text-zinc-600">{activeModalItem.description}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
