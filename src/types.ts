export interface MealPairing {
  id: string;
  title: string;
  subtitle: string;
  zone1Food: string;
  zone1Image: string;
  zone2Food: string;
  zone2Image: string;
  badge: string;
  description: string;
}

export interface CookingFunction {
  id: string;
  name: string;
  iconName: string;
  bestFor: string;
  description: string;
  keyBenefit: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProductDetail {
  title: string;
  model: string;
  color: string;
  size: string;
  sellingPrice: number;
  compareAtPrice: number;
  savings: number;
  savingsPercent: number;
  currencySymbol: string;
  shipping: string;
  returns: string;
}

export interface FoodResultItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  isRealAsset: boolean;
  basketTag?: string;
}

export interface WhatsInBoxItem {
  id: string;
  name: string;
  quantity: string;
  description: string;
}
