import { CookingFunction, FAQItem, FoodResultItem, MealPairing, ProductDetail, WhatsInBoxItem } from '../types';

export const PRODUCT_INFO: ProductDetail = {
  title: "Ninja DZ201 Foodi 8-Quart 6-in-1 DualZone 2-Basket Air Fryer",
  model: "DZ201",
  color: "Grey",
  size: "8-QT DualZone",
  sellingPrice: 99.00,
  compareAtPrice: 159.94,
  savings: 60.94,
  savingsPercent: 38,
  currencySymbol: "$",
  shipping: "Free Shipping",
  returns: "30-Day Returns",
};

export const PRODUCT_IMAGES = {
  // Main Grey Product Shot
  heroMain: "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=1200&q=80",
  heroProductGrey: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=1000&q=80",
  dualZoneDiagram: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
  openBasketsFood: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=1200&q=80",
  familyLifestyle: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
  
  // Real Food Photos
  foodWingsGlazed: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=1000&q=80",
  foodWingsCrispy: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=1000&q=80",
  foodFries: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1000&q=80",
  foodVeggies: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80",
  foodSalmon: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1000&q=80",
  foodPastries: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80",
};

export const QUICK_BENEFITS = [
  {
    id: "independent-baskets",
    title: "Two Independent Baskets",
    description: "Cook different foods separately.",
    icon: "Layers",
  },
  {
    id: "smart-finish",
    title: "Smart Finish",
    description: "Coordinate both zones to finish together.",
    icon: "Clock",
  },
  {
    id: "family-capacity",
    title: "8-QT Capacity",
    description: "Flexible space for everyday meals.",
    icon: "Maximize2",
  },
];

export const FOOD_RESULTS: FoodResultItem[] = [
  {
    id: "crispy-wings",
    title: "Crispy Glazed Wings",
    category: "Mains & Poultry",
    description: "Golden and evenly cooked in Zone 1 with high circulation convection heat.",
    imageUrl: PRODUCT_IMAGES.foodWingsCrispy,
    isRealAsset: true,
    basketTag: "Zone 1 • Air Fry",
  },
  {
    id: "golden-fries",
    title: "Golden French Fries",
    category: "Sides & Crispy",
    description: "Crispy exterior and fluffy interior prepared simultaneously alongside main proteins.",
    imageUrl: PRODUCT_IMAGES.foodFries,
    isRealAsset: true,
    basketTag: "Zone 2 • Air Fry",
  },
  {
    id: "roasted-veggies",
    title: "Roasted Seasoned Vegetables",
    category: "Sides & Healthy",
    description: "Evenly caramelised garlic vegetables cooked with gentle, controlled roasting.",
    imageUrl: PRODUCT_IMAGES.foodVeggies,
    isRealAsset: true,
    basketTag: "Zone 2 • Roast",
  },
  {
    id: "glazed-wings-plate",
    title: "Honey Glazed Wings",
    category: "Mains & Poultry",
    description: "Juicy interior with a rich, caramelized exterior cooked without excess grease.",
    imageUrl: PRODUCT_IMAGES.foodWingsGlazed,
    isRealAsset: true,
    basketTag: "Zone 1 • Air Fry",
  },
  {
    id: "fresh-bakery",
    title: "Golden Custard Pastries",
    category: "Bake & Desserts",
    description: "Flaky, golden pastry crusts baked right in the non-stick basket.",
    imageUrl: PRODUCT_IMAGES.foodPastries,
    isRealAsset: true,
    basketTag: "Zone 1 • Bake",
  },
  {
    id: "salmon-fillets",
    title: "Garlic Butter Salmon",
    category: "Mains & Proteins",
    description: "Tender, flaky fish fillets seared to perfection without heating up the kitchen oven.",
    imageUrl: PRODUCT_IMAGES.foodSalmon,
    isRealAsset: true,
    basketTag: "Zone 1 • Roast",
  },
];

export const MEAL_PAIRINGS: MealPairing[] = [
  {
    id: "chicken-fries",
    title: "Chicken + Fries",
    subtitle: "A Weeknight Favorite",
    badge: "Popular Combo",
    description: "Prepare crispy chicken tenders in Zone 1 while golden fries crisp independently in Zone 2.",
    zone1Food: "Crispy Chicken Tenders",
    zone1Image: PRODUCT_IMAGES.foodWingsCrispy,
    zone2Food: "Golden French Fries",
    zone2Image: PRODUCT_IMAGES.foodFries,
  },
  {
    id: "protein-veggies",
    title: "Protein + Vegetables",
    subtitle: "Balanced Family Dinner",
    badge: "Balanced Meal",
    description: "Cook fresh salmon or steak in Zone 1 alongside garlic roasted vegetables in Zone 2.",
    zone1Food: "Garlic Butter Salmon",
    zone1Image: PRODUCT_IMAGES.foodSalmon,
    zone2Food: "Roasted Vegetables",
    zone2Image: PRODUCT_IMAGES.foodVeggies,
  },
  {
    id: "kids-adults",
    title: "Kids' Food + Adults' Food",
    subtitle: "Satisfy Different Tastes",
    badge: "Family Favorite",
    description: "Cook mild favorites for children in Zone 1 while preparing seasoned wings or sides for adults in Zone 2.",
    zone1Food: "Kids' Chicken Bites",
    zone1Image: PRODUCT_IMAGES.foodWingsCrispy,
    zone2Food: "Glazed Wings & Sides",
    zone2Image: PRODUCT_IMAGES.foodWingsGlazed,
  },
  {
    id: "main-side",
    title: "Main + Side",
    subtitle: "Complete Dinner Served Hot",
    badge: "Everyday Classic",
    description: "Bring a complete dinner to the table together without waiting for batch two.",
    zone1Food: "Seasoned Main Dish",
    zone1Image: PRODUCT_IMAGES.foodWingsGlazed,
    zone2Food: "Complementary Side Dish",
    zone2Image: PRODUCT_IMAGES.foodFries,
  },
];

export const COOKING_FUNCTIONS: CookingFunction[] = [
  {
    id: "air-fry",
    name: "Air Fry",
    iconName: "Wind",
    bestFor: "Chicken tenders, fries, mozzarella bites, fish fillets",
    description: "Circulates super-heated air for crispy, golden results with little to no added oil.",
    keyBenefit: "Crispy Texture with Less Added Oil",
  },
  {
    id: "roast",
    name: "Roast",
    iconName: "Flame",
    bestFor: "Seasoned meats, root vegetables, salmon, chicken breasts",
    description: "Tenderizes meats and roasts fresh vegetables evenly with balanced heat distribution.",
    keyBenefit: "Tender Interiors & Even Browning",
  },
  {
    id: "broil",
    name: "Broil",
    iconName: "Sparkles",
    bestFor: "Melting cheese, searing proteins, caramelizing glazes",
    description: "Direct top-down high heat quickly sears toppings and finishes dishes with rich texture.",
    keyBenefit: "Direct High-Heat Finishing",
  },
  {
    id: "bake",
    name: "Bake",
    iconName: "PieChart",
    bestFor: "Savory casseroles, quick breads, biscuits, sweet treats",
    description: "Convection baking prepares baked meals and desserts without heating up your main kitchen oven.",
    keyBenefit: "Gentle & Even Baking Heat",
  },
  {
    id: "reheat",
    name: "Reheat",
    iconName: "RotateCcw",
    bestFor: "Leftover pizza, fried chicken, roasted potatoes, sides",
    description: "Revives leftover food back to original crispy texture quickly and evenly.",
    keyBenefit: "Crispy Leftovers Without Sogginess",
  },
  {
    id: "dehydrate",
    name: "Dehydrate",
    iconName: "Sun",
    bestFor: "Fruit slices, vegetable chips, dried herbs, meat jerky",
    description: "Gently removes moisture at low heat to prepare healthy homemade dried snacks for the household.",
    keyBenefit: "Healthy Homemade Dried Snacks",
  },
];

export const WHATS_IN_THE_BOX_DATA: WhatsInBoxItem[] = [
  {
    id: "main-unit",
    name: "Ninja DZ201 Air Fryer Unit",
    quantity: "1x",
    description: "Grey finish, 8-QT total capacity housing with DualZone™ control panel.",
  },
  {
    id: "baskets",
    name: "Independent Cooking Baskets",
    quantity: "2x",
    description: "4-QT capacity each, featuring non-stick coating and ergonomic handles.",
  },
  {
    id: "crisper-plates",
    name: "Non-stick Crisper Plates",
    quantity: "2x",
    description: "Removable plates that elevate food for 360° air flow and easy cleaning.",
  },
  {
    id: "quick-guide",
    name: "Quick Start & Recipe Guide",
    quantity: "1x",
    description: "Official guide with cooking charts and chef-tested recipe inspiration.",
  },
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: "faq-size",
    question: "How large is the air fryer?",
    answer: "The Ninja DZ201 features an 8-quart total capacity split evenly across two 4-quart independent cooking baskets. This offers ample room to cook a complete main dish and side dish simultaneously for a family meal.",
  },
  {
    id: "faq-different-foods",
    question: "Can the two baskets cook different foods?",
    answer: "Yes. Each basket functions independently with its own controls, heating element, and fan. You can cook two different foods using different settings at the same time without flavor transfer.",
  },
  {
    id: "faq-smart-finish",
    question: "What is Smart Finish?",
    answer: "Smart Finish is Ninja's intelligent timer synchronization feature. When set, Smart Finish automatically coordinates both cooking zones so that both foods complete cooking at the exact same time.",
  },
  {
    id: "faq-functions",
    question: "What cooking functions are included?",
    answer: "The 6-in-1 DualZone includes Air Fry, Roast, Broil, Bake, Reheat, and Dehydrate. You can set different functions for each basket at the same time.",
  },
  {
    id: "faq-shipping",
    question: "Is shipping free?",
    answer: "Yes, free standard shipping is included with every order.",
  },
  {
    id: "faq-returns",
    question: "What is the return policy?",
    answer: "Every purchase includes a 30-Day Returns policy. If you are not satisfied with your purchase, you can return it within 30 days.",
  },
];
