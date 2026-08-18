import {
  ProductDetail,
  ProductVariant,
  DialecticalContradiction,
  ClinicalTrialResult,
  ActiveIngredient,
  ComparisonRow,
  ReviewItem,
  FAQItem,
  WhatsInBoxItem
} from '../types';

export const PRODUCT_INFO: ProductDetail = {
  brand: "PeptiDerm™ Laboratories",
  name: "Cellular Renewal Multi-Peptide Cream",
  englishName: "Cellular Renewal Multi-Peptide Cream",
  modelCode: "PD-CLINICAL-07",
  tagline: "Resolving the Anti-Aging Contradiction • 7 Bio-Mimetic Peptides Penetrate Deep to Rebuild Dermal Collagen",
  dermatologyGrade: "Clinical Dermatology Grade",
  rating: 4.96,
  reviewCount: 3842,
  repurchaseRate: 88.6,
  currencySymbol: "$",
  shipping: "Free Worldwide Tracked Express Shipping",
  returns: "30-Day Money Back Guarantee",
  guarantee: "Double-Blind Clinical Proof • 0% Fragrance, Alcohol, or Mineral Oil",
};

export const PRODUCT_VARIANTS: ProductVariant[] = [
  {
    id: "variant-30ml",
    size: "30ml",
    volume: "30ml / 1.0 fl.oz",
    name: "30ml Discovery Starter Kit",
    subTitle: "First Trial • Experience 3-Second Absorption & Instant Hydration",
    sellingPrice: 29.0,
    compareAtPrice: 49.0,
    savings: 20.0,
    savingsPercent: 41,
    badge: "Starter Discovery",
    isPopular: false,
    isBestValue: false,
    supplyDuration: "2-3 Weeks Daily Supply",
    includesGifts: ["Medical Vacuum Airless Bottle", "Dermatology Application Protocol Card"],
    stockLeft: 23,
    sku: "PD-CRM-30ML",
    imageUrl: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "variant-50ml",
    size: "50ml",
    volume: "50ml / 1.7 fl.oz",
    name: "50ml Core Cellular Treatment",
    subTitle: "Dermatologist Recommended • Witness 28-Day Deep Cellular Collagen Renewal",
    sellingPrice: 49.0,
    compareAtPrice: 79.0,
    savings: 30.0,
    savingsPercent: 38,
    badge: "🔥 82% OF CUSTOMERS CHOOSE THIS",
    isPopular: true,
    isBestValue: false,
    supplyDuration: "6-8 Weeks (Full 28-Day Metabolism Cycle)",
    includesGifts: [
      "FREE Cryo Zinc-Alloy Sculpting Spatula ($18 Value)",
      "FREE 28-Day Cellular Skin Tracking Journal",
      "FREE Global Tracked Express Shipping"
    ],
    stockLeft: 11,
    sku: "PD-CRM-50ML",
    imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "variant-100ml",
    size: "100ml",
    volume: "100ml / 3.4 fl.oz",
    name: "100ml Clinical Double Course",
    subTitle: "Face & Neck Intensive Lift • Total Dermal Extracellular Matrix Restructure",
    sellingPrice: 79.0,
    compareAtPrice: 129.0,
    savings: 50.0,
    savingsPercent: 39,
    badge: "👑 BEST VALUE / CLINICAL COURSE",
    isPopular: false,
    isBestValue: true,
    supplyDuration: "3-4 Months Intensive Regimen",
    includesGifts: [
      "FREE 30ml Travel Discovery Edition ($29 Value)",
      "FREE Cryo Zinc-Alloy Sculpting Spatula ($18 Value)",
      "Lifetime VIP Dermatology Consultation Access",
      "Priority Priority Express Shipping"
    ],
    stockLeft: 7,
    sku: "PD-CRM-100ML",
    imageUrl: "https://images.unsplash.com/photo-1608248597359-25f0a8d67280?auto=format&fit=crop&w=800&q=80",
  },
];

export const PRODUCT_IMAGES = {
  heroMain: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
  heroLaboratory: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80",
  heroTexture: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80",
  clinicalLab: "https://images.unsplash.com/photo-1579165466791-788226ab77b6?auto=format&fit=crop&w=1200&q=80",
  molecularGraphic: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
  skinBeforeAfter: "https://images.unsplash.com/photo-1512290900672-1f5511b512c4?auto=format&fit=crop&w=1000&q=80",
  doctorApproval: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=80",
  airlessJar: "https://images.unsplash.com/photo-1608248597359-25f0a8d67280?auto=format&fit=crop&w=1000&q=80",
};

// Dialectical Contradiction Busters
export const DIALECTICAL_CONTRADICTIONS: DialecticalContradiction[] = [
  {
    id: "contradiction-tolerance",
    title: "Contradiction 1: Potent Anti-Aging vs. Barrier Tolerance",
    coreContradiction: "“Effective treatments cause irritation, while gentle creams deliver zero results.”",
    traditionalPain: "High-strength retinoids and chemical acids strip the epidermis, triggering redness, flaking, burning, and damaged lipid barriers. Meanwhile, gentle plant extracts lack the potency to reach the dermis or rebuild collagen.",
    traditionalWhy: "Traditional chemical peeling relies on destructive exfoliation—sacrificing your natural protective barrier for temporary surface turnover.",
    peptiDermBreakthrough: "Bio-Mimetic Signal Peptide Complex",
    molecularMechanism: "Without disrupting the stratum corneum, bio-mimetic peptides bind directly to fibroblast cell receptors, signaling endogenous production of Type I & III collagen and elastin with saline-like gentleness.",
    clinicalProof: "0% peeling, 0% redness, zero purge period. Safe for sensitive skin, post-procedure recovery, and both morning/night use.",
    statNumber: "99.8%",
    statLabel: "Clinical subjects with zero adverse irritation",
    accentColor: "blue",
  },
  {
    id: "contradiction-texture",
    title: "Contradiction 2: Deep Nourishment vs. Weightless Matte Finish",
    coreContradiction: "“Rich creams clog pores, while light gels evaporate in 2 hours.”",
    traditionalPain: "Conventional anti-aging creams rely on heavy mineral oils, petrolatum, and synthetic waxes that suffocate pores and cause breakouts. Lightweight gels evaporate rapidly in air-conditioned environments, leaving skin dehydrated.",
    traditionalWhy: "Bulky emulsion droplets (>5000nm) cannot enter intercellular lipid channels, remaining on the surface to oxidize and clog pores.",
    peptiDermBreakthrough: "Liquid Crystal Micro-Liposome Delivery",
    molecularMechanism: "Using pure sugarcane phytosqualane and 5 skin-identical ceramides, we formulated sub-80nm liposomes matching human sebum 1:1 for 3-second rapid absorption and a breathable moisture seal.",
    clinicalProof: "Snow-melt texture that absorbs instantly to a soft-matte finish. Clog-free for oily skin, 24-hour continuous comfort for dry skin.",
    statNumber: "89.4%",
    statLabel: "Reduction in 24-hour Transepidermal Water Loss (TEWL)",
    accentColor: "cyan",
  },
  {
    id: "contradiction-longevity",
    title: "Contradiction 3: Instant Firming vs. Long-Term Structural Lifting",
    coreContradiction: "“Instant film-formers wash off down the drain vs. slow treatments take months to show.”",
    traditionalPain: "Most instant firming products rely on synthetic polymers and mica to create a 10-minute optical illusion of tightness that disappears upon washing. Generic moisturizers take months with no visible lifting.",
    traditionalWhy: "Physical surface tensioners only pull on dead surface cells without addressing underlying fibroblast senescence or dermal collagen collapse.",
    peptiDermBreakthrough: "Dual-Phase Cellular Collagen Matrix",
    molecularMechanism: "Phase 1: Micro-crosslinked polysaccharides relax superficial facial muscle micro-tension within 10 minutes. Phase 2: Acetyl Hexapeptide-8 and Copper Tripeptide-1 rebuild deep extracellular matrix over 28 days.",
    clinicalProof: "Immediately softens dry lines; 28-day double-blind clinical trial proves a +68.4% increase in dermal collagen density with zero rebound.",
    statNumber: "-42.8%",
    statLabel: "28-Day reduction in deep wrinkle volume",
    accentColor: "indigo",
  },
];

// Active Ingredients
export const ACTIVE_INGREDIENTS: ActiveIngredient[] = [
  {
    id: "hexapeptide-8",
    name: "Acetyl Hexapeptide-8 (Argireline®)",
    chemicalName: "Acetyl Hexapeptide-8",
    purity: "99.4% Medical Grade Purity",
    role: "Targeted Expression Line Relaxing Peptide",
    skinLayer: "Neuromuscular Synaptic Junctions",
    mechanism: "Inhibits SNARE complex assembly to gently soften repetitive micro-contractions, targeting forehead creases, crow's feet, and nasolabial folds at the source.",
    benefit: "Smoothes dynamic expression lines and prevents static wrinkle formation",
  },
  {
    id: "copper-peptide",
    name: "Bio-Active Copper Tripeptide-1 (GHK-Cu)",
    chemicalName: "Copper Tripeptide-1",
    purity: "99.8% Crystalline Purity",
    role: "Dermal Collagen Synthesis & Tissue Regeneration",
    skinLayer: "Dermal Fibroblasts",
    mechanism: "Chelates trace copper to trigger Type I and Type III collagen synthesis and GAGs production while promoting cellular autophagy to clear senescent debris.",
    benefit: "Restores facial volume and sharpens the jawline contour",
  },
  {
    id: "matrixyl-3000",
    name: "Matrixyl® 3000 Bio-Complex",
    chemicalName: "Palmitoyl Tripeptide-1 & Palmitoyl Tetrapeptide-7",
    purity: "French Patented Formulation",
    role: "Extracellular Matrix (ECM) Restructuring Factor",
    skinLayer: "Dermal-Epidermal Junction (DEJ)",
    mechanism: "Regulates the TGF-beta signaling pathway to replenish basement membrane anchoring fibrils, repairing deep UV-induced photoaging damage.",
    benefit: "Heals deep structural photo-damage and restores youthful elasticity",
  },
  {
    id: "carnosine",
    name: "Decarboxy L-Carnosine Dipeptide",
    chemicalName: "L-Carnosine Dipeptide",
    purity: "99.9% Bio-Active Grade",
    role: "Dual Anti-Glycation & Anti-Oxidation Shield",
    skinLayer: "Full-Depth Intercellular Matrix",
    mechanism: "Binds to free sugars before they attack collagen fibers, preventing AGEs formation to stop collagen cross-linking, yellowing, and brittleness.",
    benefit: "Reverses dullness and restores a luminous, translucent complexion",
  },
  {
    id: "ceramides",
    name: "5-Tier Skin-Identical Ceramide Complex",
    chemicalName: "Ceramide NP / AP / EOP / NS / AS",
    purity: "Liposome Encapsulation",
    role: "Physiological Lipid Barrier Rebuilder",
    skinLayer: "Stratum Corneum Lipid Matrix",
    mechanism: "Formulated in the golden 3:1:1 physiological ratio with cholesterol and fatty acids to reconstruct compromised lipid barriers and lock in active peptides.",
    benefit: "Strengthens barrier integrity and prevents moisture evaporation",
  },
  {
    id: "squalane",
    name: "100% Pure Plant-Derived Phytosqualane",
    chemicalName: "Phytosqualane 99.9%",
    purity: "Sugarcane Bio-Fermentation",
    role: "Bio-Identical Lipid & Nano-Penetration Vector",
    skinLayer: "Epidermal Micro-Ecosystem",
    mechanism: "Bio-identical to human sebum with zero pore-clogging potential, acting as a carrier to shuttle peptides past the stratum corneum within 3 seconds.",
    benefit: "Weightless, non-comedogenic moisture that balances oil and hydration",
  },
];

// 28-Day Clinical Trial Results
export const CLINICAL_TRIAL_RESULTS: ClinicalTrialResult[] = [
  {
    id: "metric-wrinkles",
    metric: "Wrinkle Depth & Volume",
    changeValue: "-42.8%",
    changeDirection: "decrease",
    timeframe: "28 Consecutive Days",
    sampleSize: "n=60 Women Aged 28-55, Double-Blind Trial",
    description: "Evaluated using VISIA-CR and PRIMOS 3D optical topography, crow's feet and nasolabial fold depth showed statistically significant volume reduction.",
    methodology: "PRIMOS 3D Optical Micro-Topography",
  },
  {
    id: "metric-elasticity",
    metric: "Dermal Collagen Density (R2)",
    changeValue: "+68.4%",
    changeDirection: "increase",
    timeframe: "28 Consecutive Days",
    sampleSize: "n=60 Women Aged 28-55, Double-Blind Trial",
    description: "High-frequency ultrasound echogenicity demonstrated dense extracellular matrix regeneration and visible firming of facial contours.",
    methodology: "DermaLab High-Frequency Ultrasound Probe",
  },
  {
    id: "metric-barrier",
    metric: "Transepidermal Water Retention (TEWL)",
    changeValue: "+89.2%",
    changeDirection: "increase",
    timeframe: "12 Hours Post-Single Application",
    sampleSize: "n=60 Multi-Skin Type Cohort",
    description: "Stratum corneum capacitance remained elevated for 24 continuous hours, with transepidermal water loss reduced by 64.7%.",
    methodology: "Tewameter® Moisture Loss Measurement",
  },
  {
    id: "metric-tolerance",
    metric: "Sensitive Skin Clinical Tolerance",
    changeValue: "99.8%",
    changeDirection: "increase",
    timeframe: "4-Week Continuous Monitoring",
    sampleSize: "Includes 30 Subjects with Reactive Sensitive Skin",
    description: "Zero incidents of erythema, burning, peeling, or comedones reported. Certified non-irritating by Swiss SGS dermatological patch testing.",
    methodology: "Human Repeat Insult Patch Test (HRIPT)",
  },
];

// Comparison Benchmark Matrix
export const COMPARISON_DATA: ComparisonRow[] = [
  {
    feature: "Anti-Aging Mechanism",
    peptiDerm: {
      text: "7 Bio-Mimetic Peptides Signal Targeted Regeneration",
      isHighlight: true,
      subtext: "Activates natural collagen I & III without damaging skin layers",
    },
    retinolCream: {
      text: "Forced Chemical Exfoliation & Acid Turnover",
      isNegative: true,
    },
    traditionalMoisturizer: {
      text: "Superficial Glycerin Hydration (Cannot reach dermis)",
      isNegative: true,
    },
  },
  {
    feature: "Skin Tolerance & Sensitivity",
    peptiDerm: {
      text: "99.8% High Tolerance • Safe for Sensitive Skin",
      isHighlight: true,
      subtext: "0% peeling, no purge period, AM & PM safe",
    },
    retinolCream: {
      text: "Prone to redness, peeling, burning & requires slow ramp-up",
      isNegative: true,
    },
    traditionalMoisturizer: {
      text: "Gentle but provides zero wrinkle repair",
    },
  },
  {
    feature: "Texture & Breathability",
    peptiDerm: {
      text: "Snow-Melt Liposome • 3-Sec Matte Finish",
      isHighlight: true,
      subtext: "Breathable squalane seal, zero pore-clogging",
    },
    retinolCream: {
      text: "Often buffered with heavy petrolatum, prone to breakouts",
      isNegative: true,
    },
    traditionalMoisturizer: {
      text: "Greasy film on surface or evaporates in 2 hours",
      isNegative: true,
    },
  },
  {
    feature: "Daytime Photosensitivity",
    peptiDerm: {
      text: "100% Non-Photosensitive • Day & Night Safe",
      isHighlight: true,
      subtext: "Contains Carnosine to actively shield against photo-glycation",
    },
    retinolCream: {
      text: "Highly photosensitive, day use triggers hyperpigmentation",
      isNegative: true,
    },
    traditionalMoisturizer: {
      text: "No photosensitivity, but zero UV photo-defense",
    },
  },
  {
    feature: "28-Day Clinical Outcome",
    peptiDerm: {
      text: "-42.8% Wrinkle Volume (Double-Blind Verified)",
      isHighlight: true,
      subtext: "Enduring results that do not collapse upon stopping use",
    },
    retinolCream: {
      text: "Wrinkles often reappear once forced peeling ceases",
      isNegative: true,
    },
    traditionalMoisturizer: {
      text: "No measurable firming or wrinkle reduction",
      isNegative: true,
    },
  },
  {
    feature: "Formula Purity Guarantee",
    peptiDerm: {
      text: "0% Fragrance, Alcohol, Parabens, Mineral Oil",
      isHighlight: true,
      subtext: "Sterile medical airless vacuum pump sealing",
    },
    retinolCream: {
      text: "Heavy stabilizers and preservatives required",
    },
    traditionalMoisturizer: {
      text: "Contains artificial fragrances, dyes, and fillers",
      isNegative: true,
    },
  },
];

// What's in the Box Items
export const WHATS_IN_THE_BOX_DATA: WhatsInBoxItem[] = [
  {
    id: "item-cream-jar",
    name: "PeptiDerm Cellular Renewal Multi-Peptide Cream",
    quantity: "1 Bottle (Selected 30ml / 50ml / 100ml)",
    description: "Housed in a medical-grade dual-chamber airless vacuum pump that seals out light and oxygen to preserve 99.8% bio-active peptide potency.",
    clinicalSpec: "Medical-Grade UV-Opaque Shield • Precision Vacuum Metering",
  },
  {
    id: "item-micro-spatula",
    name: "Cryo Zinc-Alloy Sculpting Micro-Spatula",
    quantity: "1 Piece (FREE with 50ml & 100ml)",
    description: "Ergonomically contoured for hygienic application and cool lymphatic drainage massage along jawlines, crow's feet, and smile lines.",
    clinicalSpec: "Medical Antibacterial Zinc Alloy • Cryo-Cooling Touch",
  },
  {
    id: "item-tracker-card",
    name: "28-Day Cellular Renewal Progress Journal",
    quantity: "1 Guide",
    description: "Designed by clinical dermatologists with weekly self-assessment benchmarks and lymphatic contour massage diagrams.",
    clinicalSpec: "Dermatological Clinical Protocol Standard",
  },
  {
    id: "item-seal-box",
    name: "Sterile GMP Batch-Coded Packaging Box",
    quantity: "1 Sealed Unit",
    description: "Every box includes an individual laboratory batch verification QR code and SGS tamper-evident seal.",
    clinicalSpec: "ISO 22716 Cleanroom Packaged",
  },
];

// Verified Clinical & Patient Reviews
export const REVIEWS_LIST: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Dr. Evelyn Vance, MD (Board-Certified Dermatologist)",
    age: 39,
    skinType: "Dry & Reactive Skin • Post-Acid Compromised",
    variantPurchased: "100ml Clinical Double Course",
    rating: 5,
    timeUsed: "6 Weeks Consecutive Use",
    title: "“Finally, medical-grade wrinkle reduction with physiological gentleness.”",
    content: "As a dermatologist, I treat countless patients whose skin barriers collapsed from aggressive retinoid regimens. PeptiDerm's bio-mimetic peptide approach communicates directly with fibroblast receptors. When I tested it on my own post-laser skin, it absorbed in 3 seconds with zero stinging. Ultrasound imaging confirmed a >30% boost in dermal density.",
    verifiedBuyer: true,
    dermatologistNote: "Clinical Trial Recommended • Ideal for sensitive and barrier-compromised skin",
  },
  {
    id: "rev-2",
    author: "Sarah Jenkins (Finance Director / Frequent Traveler)",
    age: 34,
    skinType: "Combination / Prone to Congested Pores",
    variantPurchased: "50ml Core Treatment",
    rating: 5,
    timeUsed: "28 Consecutive Days",
    title: "“The holy grail for oily skin: wake up with soft, matte, plump skin.”",
    content: "Most anti-aging creams either break me out or leave a greasy film on my pillow. This snow-melt texture is pure magic—it literally melts on contact and leaves a velvety matte finish. By week three, my dullness disappeared and my foundation stopped settling into smile lines!",
    verifiedBuyer: true,
  },
  {
    id: "rev-3",
    author: "Claire Kensington (Architect / Focus on Neck & Jawline)",
    age: 46,
    skinType: "Mature Dry Skin • Pronounced Expression Lines",
    variantPurchased: "100ml Clinical Double Course",
    rating: 5,
    timeUsed: "2 Months Consecutive Use",
    title: "“The 100ml bottle lifted my jawline and softened deep neck lines.”",
    content: "After my 40s, collagen loss made my jawline sag. I bought the 100ml size to use on both face and neck. Using the cold metal spatula every night for upward sculpting visibly lifted my lower face. Even my husband asked what clinic treatment I had done.",
    verifiedBuyer: true,
  },
  {
    id: "rev-4",
    author: "Jessica Martinez (Clean Beauty Formulator)",
    age: 29,
    skinType: "Sensitive Normal Skin • Early Fine Lines",
    variantPurchased: "50ml Core Treatment",
    rating: 5,
    timeUsed: "3 Weeks Consecutive Use",
    title: "“The ingredient list is immaculate—pure active peptides at therapeutic doses.”",
    content: "I analyze skincare formulas for a living. Seeing Acetyl Hexapeptide-8 and Copper Tripeptide at the top of the deck without filler fragrances or cheap mineral oils is extraordinary at this price point. I have already subscribed to the 100ml replenishment.",
    verifiedBuyer: true,
  },
];

// Clinical FAQs
export const FAQ_LIST: FAQItem[] = [
  {
    id: "faq-retinol-diff",
    category: "Formulation Science",
    question: "How is PeptiDerm fundamentally different from standard Retinol creams?",
    answer: "Retinol works through forced chemical exfoliation, which thins the stratum corneum and frequently causes redness, stinging, peeling, and high UV photosensitivity. PeptiDerm uses bio-mimetic cellular peptides that signal fibroblasts to synthesize collagen from within without peeling the surface. It offers 99.8% tolerance, zero photosensitivity, and requires no acclimation period.",
  },
  {
    id: "faq-sensitive-skin",
    category: "Skin Compatibility",
    question: "Is this safe for sensitive, rosacea-prone, or post-procedure skin?",
    answer: "Yes, absolutely. Our formula was developed with dermatologists and is 100% free of fragrances, drying alcohols, parabens, and mineral oils. With bio-active Copper Tripeptide and 5 skin-identical Ceramides, it actively calms redness and rebuilds the lipid matrix while delivering potent anti-aging benefits.",
  },
  {
    id: "faq-timeline",
    category: "Results Timeline",
    question: "When should I expect to see visible firming and wrinkle reduction?",
    answer: "[Immediate / 10 Minutes]: Micro-liposomes absorb instantly, boosting moisture and immediately softening superficial dry lines. [14 Days]: Cellular renewal kicks in; skin texture becomes silky and tone brightens. [28-Day Full Cycle]: Double-blind clinical testing proves an average +68.4% increase in dermal collagen density and -42.8% reduction in deep wrinkle volume.",
  },
  {
    id: "faq-texture-breakout",
    category: "Texture & Finish",
    question: "Will this clog pores or feel heavy on oily / combination skin?",
    answer: "No. PeptiDerm utilizes an innovative Liquid Crystal Micro-Liposome emulsion that melts instantly upon skin contact and sets to a breathable, soft-matte finish. In clinical testing, 0% of oily skin subjects experienced clogged pores or breakouts.",
  },
  {
    id: "faq-routine-order",
    category: "Regimen Order",
    question: "Where does this fit in my skincare routine? Can I layer it with Vitamin C or AHA/BHA?",
    answer: "Apply morning and night after cleansing and serums. Because peptides are non-reactive and pH-balanced, PeptiDerm pairs harmoniously with Vitamin C, Niacinamide, Hyaluronic Acid, and mild chemical exfoliants without causing irritation.",
  },
  {
    id: "faq-shopify-shipping",
    category: "Shipping & Returns",
    question: "How fast is shipping, and how does the 30-Day Guarantee work?",
    answer: "All orders are dispatched within 24 hours via tracked express courier. We provide an unconditional 30-Day Money Back Guarantee: if you are not thrilled with your results, simply contact our support team for a full refund.",
  },
];
