export interface ProductVariant {
  id: string;
  size: string;
  volume: string;
  name: string;
  subTitle: string;
  sellingPrice: number;
  compareAtPrice: number;
  savings: number;
  savingsPercent: number;
  badge?: string;
  isPopular?: boolean;
  isBestValue?: boolean;
  supplyDuration: string;
  includesGifts: string[];
  stockLeft: number;
  sku: string;
  imageUrl: string;
}

export interface ProductDetail {
  brand: string;
  name: string;
  englishName: string;
  modelCode: string;
  tagline: string;
  dermatologyGrade: string;
  rating: number;
  reviewCount: number;
  repurchaseRate: number;
  currencySymbol: string;
  shipping: string;
  returns: string;
  guarantee: string;
}

export interface DialecticalContradiction {
  id: string;
  title: string;
  coreContradiction: string;
  traditionalPain: string;
  traditionalWhy: string;
  peptiDermBreakthrough: string;
  molecularMechanism: string;
  clinicalProof: string;
  statNumber: string;
  statLabel: string;
  accentColor: string;
}

export interface ClinicalTrialResult {
  id: string;
  metric: string;
  changeValue: string;
  changeDirection: 'decrease' | 'increase';
  timeframe: string;
  sampleSize: string;
  description: string;
  methodology: string;
}

export interface ActiveIngredient {
  id: string;
  name: string;
  chemicalName: string;
  purity: string;
  role: string;
  skinLayer: string;
  mechanism: string;
  benefit: string;
}

export interface ComparisonRow {
  feature: string;
  peptiDerm: {
    text: string;
    isHighlight: boolean;
    subtext?: string;
  };
  retinolCream: {
    text: string;
    isNegative?: boolean;
  };
  traditionalMoisturizer: {
    text: string;
    isNegative?: boolean;
  };
}

export interface ReviewItem {
  id: string;
  author: string;
  age: number;
  skinType: string;
  variantPurchased: string;
  rating: number;
  timeUsed: string;
  title: string;
  content: string;
  verifiedBuyer: boolean;
  dermatologistNote?: string;
  avatarUrl?: string;
  beforeAfterImage?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface WhatsInBoxItem {
  id: string;
  name: string;
  quantity: string;
  description: string;
  clinicalSpec: string;
}
