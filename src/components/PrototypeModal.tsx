import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  ShieldCheck,
  Truck,
  Lock,
  ArrowRight,
  Sparkles,
  ShoppingBag,
  Plus,
  Minus
} from 'lucide-react';
import { PRODUCT_INFO, PRODUCT_VARIANTS } from '../data/productData';
import { ProductVariant } from '../types';

interface PrototypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedVariant: ProductVariant;
  onSelectVariant: (variant: ProductVariant) => void;
}

export const PrototypeModal: React.FC<PrototypeModalProps> = ({
  isOpen,
  onClose,
  selectedVariant,
  onSelectVariant,
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [promoCode, setPromoCode] = useState<string>('PEPTIDE10');
  const [discountApplied, setDiscountApplied] = useState<boolean>(true);
  const [isCheckingOut, setIsCheckingOut] = useState<boolean>(false);
  const [checkoutComplete, setCheckoutComplete] = useState<boolean>(false);

  if (!isOpen) return null;

  const itemTotal = selectedVariant.sellingPrice * quantity;
  const promoDiscount = discountApplied ? itemTotal * 0.1 : 0;
  const finalTotal = itemTotal - promoDiscount;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 text-slate-900 relative max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white p-4 sm:p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-sky-600 flex items-center justify-center text-white">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-black text-sm sm:text-base">Shopify Instant Cart & Checkout</h3>
              <p className="text-[10px] text-sky-300">PeptiDerm™ Direct Medical Dispatch</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1 text-xs sm:text-sm">
          
          {checkoutComplete ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-black text-slate-900">Order Confirmed Successfully!</h3>
                <p className="text-xs text-slate-500">
                  Order ID: #PD-{Math.floor(100000 + Math.random() * 900000)} • Tracked Express Dispatch in 24h
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-left space-y-2 text-xs">
                <div className="flex justify-between font-bold text-slate-800">
                  <span>Selected Course:</span>
                  <span>{selectedVariant.name} x {quantity}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Final Total:</span>
                  <span className="font-extrabold text-sky-700">${finalTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-emerald-700 font-semibold pt-1 border-t border-slate-200">
                  <span>Complimentary Gifts:</span>
                  <span>Cryo Sculpting Spatula + 28-Day Tracking Card</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setCheckoutComplete(false);
                  onClose();
                }}
                className="w-full bg-slate-900 text-white font-bold py-3.5 rounded-xl cursor-pointer hover:bg-slate-800 transition-all"
              >
                Done & Return to Store
              </button>
            </div>
          ) : (
            <>
              {/* Variant Switcher Pills */}
              <div className="space-y-2">
                <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                  Select Course Size (Shopify Variant):
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {PRODUCT_VARIANTS.map((v) => {
                    const isSelected = selectedVariant.id === v.id;
                    return (
                      <button
                        key={v.id}
                        onClick={() => onSelectVariant(v)}
                        className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'border-sky-600 bg-sky-50 text-slate-900 font-black shadow-xs ring-1 ring-sky-600/30'
                            : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-600'
                        }`}
                      >
                        <div className="text-xs font-black">{v.size}</div>
                        <div className="text-[11px] text-sky-700 font-bold">${v.sellingPrice}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Selected Product Summary Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 flex items-center gap-3.5">
                <img
                  src={selectedVariant.imageUrl}
                  alt={selectedVariant.name}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 rounded-xl object-cover border border-slate-200 shrink-0"
                />
                <div className="flex-1 space-y-1">
                  <h4 className="font-black text-slate-900 text-xs sm:text-sm line-clamp-1">
                    {selectedVariant.name}
                  </h4>
                  <div className="flex items-baseline gap-2">
                    <span className="font-black text-slate-900 text-base">
                      ${selectedVariant.sellingPrice.toFixed(2)}
                    </span>
                    <span className="text-xs text-slate-400 line-through">
                      ${selectedVariant.compareAtPrice.toFixed(2)}
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-700 font-bold bg-emerald-100 px-1.5 py-0.2 rounded">
                    You Save ${selectedVariant.savings.toFixed(2)}
                  </span>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg p-1">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-6 h-6 flex items-center justify-center text-slate-600 hover:bg-slate-100 rounded cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-5 text-center font-black text-xs">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-6 h-6 flex items-center justify-center text-slate-600 hover:bg-slate-100 rounded cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Promo Code Input */}
              <div className="bg-sky-50/60 border border-sky-200/80 rounded-xl p-3 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-sky-600 shrink-0" />
                  <div>
                    <span className="font-extrabold text-slate-900 text-xs block">First Order 10% Off Applied</span>
                    <span className="text-[10px] text-sky-700">Code: PEPTIDE10 (-10%)</span>
                  </div>
                </div>
                <span className="text-xs font-black text-emerald-700">
                  -${promoDiscount.toFixed(2)}
                </span>
              </div>

              {/* Price Calculation Breakdown */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span>${itemTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Worldwide Tracked Shipping</span>
                  <span className="text-emerald-600 font-bold">FREE</span>
                </div>
                {discountApplied && (
                  <div className="flex justify-between text-emerald-700 font-bold">
                    <span>Promo Discount (PEPTIDE10)</span>
                    <span>-${promoDiscount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-900 font-black text-base pt-2 border-t border-slate-200">
                  <span>Total (USD)</span>
                  <span className="text-sky-700">${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Express Checkout Action Button */}
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-slate-950 font-black py-4 rounded-xl text-base shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                {isCheckingOut ? (
                  <span>Connecting to Shopify Secure Checkout...</span>
                ) : (
                  <>
                    <Lock className="w-4 h-4 text-slate-950" />
                    <span>Secure Checkout • ${finalTotal.toFixed(2)}</span>
                    <ArrowRight className="w-4 h-4 text-slate-950" />
                  </>
                )}
              </button>

              {/* Security Trust Badges */}
              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  256-Bit SSL Encryption
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-sky-600" />
                  Tracked 24h Dispatch
                </span>
              </div>
            </>
          )}

        </div>

      </div>

    </div>
  );
};
