import React from 'react';
import { X, ShoppingBag, CheckCircle, ExternalLink, ShieldAlert } from 'lucide-react';
import { PRODUCT_INFO } from '../data/productData';

interface PrototypeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrototypeModal: React.FC<PrototypeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-zinc-200 space-y-5 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Icon */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 border border-amber-200 flex items-center justify-center shrink-0">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <div>
            <span className="bg-amber-100 text-amber-900 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded border border-amber-200">
              SHOPIFY SHRINE INTEGRATION POINT
            </span>
            <h3 className="font-extrabold text-lg text-zinc-900 mt-0.5">
              Visual Prototype CTA Trigger
            </h3>
          </div>
        </div>

        {/* Product Box */}
        <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 space-y-2">
          <div className="flex items-center justify-between text-xs text-zinc-500 font-medium">
            <span>Selected Item</span>
            <span className="text-emerald-700 font-bold flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" />
              Ready for Shrine Theme
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-extrabold text-sm text-zinc-900">{PRODUCT_INFO.title}</p>
              <p className="text-xs text-zinc-500">Color: {PRODUCT_INFO.color} • Size: {PRODUCT_INFO.size}</p>
            </div>
            <div className="text-right shrink-0">
              <span className="font-black text-base text-zinc-900">${PRODUCT_INFO.sellingPrice.toFixed(2)}</span>
              <span className="block text-[10px] text-zinc-400 line-through">${PRODUCT_INFO.compareAtPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Explanation text as requested */}
        <div className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-3.5 text-xs text-amber-950 space-y-1.5 leading-relaxed">
          <div className="flex items-center gap-1.5 font-bold">
            <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
            <span>Production Hand-off Specification:</span>
          </div>
          <p className="text-zinc-700">
            In the production release inside your Shopify Shrine theme, this button connects directly to the native product form submit action:
          </p>
          <ul className="list-disc list-inside space-y-0.5 text-zinc-600 font-mono text-[11px] pt-1">
            <li>Shopify Native Add-to-Cart (AJAX)</li>
            <li>Shrine Theme Cart Drawer Slide-out</li>
            <li>Direct Express Checkout / Shop Pay</li>
          </ul>
        </div>

        {/* Action Button */}
        <button
          onClick={onClose}
          className="w-full bg-zinc-900 hover:bg-black text-white font-extrabold text-sm py-3 px-4 rounded-xl shadow-md transition-colors cursor-pointer"
        >
          <span>Continue Prototype Preview</span>
        </button>

      </div>
    </div>
  );
};
