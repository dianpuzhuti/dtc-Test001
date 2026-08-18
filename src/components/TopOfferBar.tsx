import React from 'react';

export const TopOfferBar: React.FC = () => {
  return (
    <div className="bg-zinc-900 text-zinc-100 text-xs sm:text-sm font-medium py-2 px-4 text-center tracking-wide flex items-center justify-center gap-2 border-b border-zinc-800">
      <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
      <span>
        <strong className="text-white font-semibold">$99 Today</strong>
        <span className="mx-2 opacity-50">•</span>
        <span>Free Shipping</span>
        <span className="mx-2 opacity-50">•</span>
        <span>30-Day Returns</span>
      </span>
    </div>
  );
};
