import { SupportedLanguage, LanguageOption } from '../types';

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧', currencySymbol: '$' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', currencySymbol: '€' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺', currencySymbol: '₽' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', currencySymbol: '$' },
];

export const TRANSLATIONS = {
  en: {
    topBar: {
      badge: "FLASH SPECIAL",
      offerText: "UP TO 41% OFF • FREE CRYO SPATULA WITH 50ML/100ML • WORLDWIDE EXPRESS SHIPPING",
      leftGuarantee: "GMP MEDICAL LAB CERTIFIED • SWISS SGS DERMATOLOGICALLY TESTED",
      rightGuarantee: "30-Day Money-Back Guarantee",
    },
    header: {
      brandName: "PeptiDerm",
      tagline: "Clinical Dermatology Laboratories",
      orderNow: "Order Now",
      from: "From",
      cart: "Cart",
      features: [
        "7 Bio-Mimetic Signal Peptides",
        "28-Day Clinical Trial Proof",
        "99.8% Tolerance Rate"
      ]
    },
    hero: {
      labTag: "7 BIO-MIMETIC SIGNAL PEPTIDES",
      clinicalProofTag: "28-Day Clinical Trial Verified",
      headlineLead: "Dermatological Breakthrough",
      headlineTitle: "Multi-Peptide Cellular Renewal",
      headlineSubtitle: "Resolving the core contradiction: Medical-grade anti-aging lifting with 0% redness, irritation, or skin barrier damage.",
      ratingText: "4.96/5 (3,842 Clinical Reviews) • 88.6% 60-Day Repurchase Rate",
      bulletPoints: [
        "Clinically proven -42.8% wrinkle volume in 28-day double-blind trial",
        "Tri-Hyaluronic Acid & Matrixyl 3000+ deep dermal collagen restructuring",
        "3-second absorption with snow-melt matte finish, 0% sticky residue",
        "Medical vacuum airless bottle isolates 100% active peptide potency"
      ],
      selectCourse: "Select Your Clinical Course:",
      stockLeft: "Only {count} units remaining in current sterile laboratory batch",
      ctaButton: "Claim Clinical Trial Offer",
      secureGuarantee: "30-Day Risk-Free Guarantee • Free Express Delivery",
      benchmarks: {
        wrinkle: "Wrinkle Volume",
        collagen: "Dermal Collagen",
        tolerance: "Tolerance Rate",
        absorption: "Skin Penetration"
      }
    },
    variants: {
      starter: {
        name: "30ml Discovery Starter Kit",
        subTitle: "First Trial • Experience 3-Second Absorption & Instant Hydration",
        badge: "Starter Discovery",
        duration: "2-3 Weeks Daily Supply",
        gifts: ["Medical Vacuum Airless Bottle", "Dermatology Application Protocol Card"]
      },
      core: {
        name: "50ml Core Cellular Treatment",
        subTitle: "Dermatologist Recommended • Witness 28-Day Deep Cellular Collagen Renewal",
        badge: "🔥 82% OF CUSTOMERS CHOOSE THIS",
        duration: "6-8 Weeks (Full 28-Day Metabolism Cycle)",
        gifts: [
          "FREE Cryo Zinc-Alloy Sculpting Spatula ($18 Value)",
          "FREE 28-Day Cellular Skin Tracking Journal",
          "FREE Global Tracked Express Shipping"
        ]
      },
      course: {
        name: "100ml Clinical Double Course",
        subTitle: "Face & Neck Intensive Lift • Total Dermal Extracellular Matrix Restructure",
        badge: "👑 BEST VALUE / CLINICAL COURSE",
        duration: "3-4 Months Intensive Regimen",
        gifts: [
          "FREE 30ml Travel Discovery Edition ($29 Value)",
          "FREE Cryo Zinc-Alloy Sculpting Spatula ($18 Value)",
          "Lifetime VIP Dermatology Consultation Access",
          "Priority Express Shipping"
        ]
      },
      save: "Save",
      popular: "MOST POPULAR",
      bestValue: "BEST VALUE",
      each: "each",
      addToCart: "Add To Cart",
      orderNow: "Order Now"
    },
    comparisonSlider: {
      badge: "CLINICAL IMAGING",
      title: "Visible 28-Day Transformation",
      subtitle: "High-resolution dermatological VISIA-CR cross-polarized imaging proof under double-blind supervision.",
      day0Label: "Day 0 (Baseline)",
      day0Desc: "Micro-wrinkles, loss of firmness, dullness & compromised barrier",
      day28Label: "Day 28 (Post PeptiDerm)",
      day28Desc: "Deep dermal firmness, lifted jawline & radiant smooth texture",
      dragPrompt: "Drag slider to compare Day 0 vs Day 28",
      cta: "Experience the 28-Day Rebirth"
    },
    contradictionBuster: {
      badge: "DIALECTICAL BREAKTHROUGH",
      title: "Why Traditional Anti-Aging Fails & How PeptiDerm Resolves It",
      subtitle: "Skincare has been trapped in trade-offs. PeptiDerm uses molecular bio-mimicry to shatter traditional compromises.",
      traditionalTitle: "Traditional Dilemma",
      breakthroughTitle: "PeptiDerm Molecular Solution",
      cards: [
        {
          id: "1",
          title: "High Efficacy vs. Severe Skin Irritation",
          traditional: "Pure Retinol & High AHA cause peeling, stinging, redness, and barrier collapse.",
          peptiDerm: "7 Bio-Mimetic Signal Peptides mimic natural skin collagen cues without cytotoxic cell stress.",
          stat: "99.8%",
          statLabel: "Zero Irritation Tolerance"
        },
        {
          id: "2",
          title: "Heavy Nourishment vs. Greasy Pores",
          traditional: "Mineral-oil rich thick creams sit on skin surface, causing breakouts and shine.",
          peptiDerm: "Micro-emulsified snow-melt lipid matrix penetrates within 3.2 seconds leaving a velvety matte shield.",
          stat: "3.2s",
          statLabel: "Flash Absorption"
        },
        {
          id: "3",
          title: "Instant Glow vs. Long-Term Cellular Repair",
          traditional: "Cosmetic silicones provide 2-hour surface blur that washes away immediately.",
          peptiDerm: "Double-action: instantaneous surface firming matrix + 28-day deep fibroblast collagen synthesis.",
          stat: "+68.4%",
          statLabel: "Pro-Collagen I Growth"
        },
        {
          id: "4",
          title: "Expensive Injections vs. Daily At-Home Regimen",
          traditional: "Clinical botox & thread lifts require thousands of dollars and invasive downtime.",
          peptiDerm: "Topical Acetyl Hexapeptide-8 (Argireline) relaxes facial expression micro-tension painlessly every morning & night.",
          stat: "-42.8%",
          statLabel: "Expression Line Depth"
        }
      ]
    },
    clinicalScience: {
      badge: "DOUBLE-BLIND CLINICAL DATA",
      title: "Scientifically Validated by Independent Swiss Labs",
      subtitle: "A 28-day randomized, double-blind clinical trial with 120 participants across diverse skin phototypes.",
      metrics: [
        { label: "Wrinkle Depth Reduction", value: "-42.8%", timeframe: "28 Days", note: "Measured via 3D Optical Profilometry" },
        { label: "Collagen & Elastin Density", value: "+68.4%", timeframe: "28 Days", note: "High-Frequency Ultrasound (20MHz)" },
        { label: "Epidermal Moisture Retention", value: "+84.2%", timeframe: "2 Hours", note: "Corneometer CM 825" },
        { label: "Barrier Transepidermal Water Loss", value: "-36.5%", timeframe: "14 Days", note: "Tewameter TM 300" }
      ]
    },
    activeIngredients: {
      badge: "BIO-ACTIVE FORMULA",
      title: "7 Targeted Bio-Mimetic Signal Peptides",
      subtitle: "Formulated at clinical active percentages with zero fillers, fragrances, or parabens.",
      ingredients: [
        { name: "Palmitoyl Tripeptide-1", role: "Collagen Synthesis", target: "Dermis", desc: "Stimulates pro-collagen I and fibronectin production." },
        { name: "Palmitoyl Tetrapeptide-7", role: "Anti-Inflammatory & Firming", target: "Dermal-Epidermal Junction", desc: "Reduces interleukin-6 to prevent glycation and sagging." },
        { name: "Acetyl Hexapeptide-8 (Argireline)", role: "Expression Line Relaxation", target: "Neuromuscular Junction", desc: "Reduces muscle micro-contraction frequency for Botox-like smoothing." },
        { name: "Copper Tripeptide-1 (GHK-Cu)", role: "Cellular DNA Repair", target: "Basal Layer", desc: "Enhances stem cell vitality and wound healing repair pathways." },
        { name: "Oligopeptide-1 (EGF)", role: "Epidermal Rejuvenation", target: "Stratum Corneum", desc: "Accelerates cell turnover cycle from 45 days down to 28 days." },
        { name: "Tri-Hyaluronic Acid Complex", role: "Multi-Depth Hydration", target: "All Layers", desc: "Macro, micro and nano molecular weights for 72h moisture retention." },
        { name: "Phyto-Squalane & Ceramide NP", role: "Barrier Fortification", target: "Lipid Mantle", desc: "Biocompatible lipids that rebuild the damaged moisture shield." }
      ]
    },
    comparisonTable: {
      badge: "UNBIASED BENCHMARK",
      title: "Why PeptiDerm Outperforms the Market",
      subtitle: "A direct scientific comparison against conventional anti-aging approaches.",
      columns: ["Clinical Metric", "PeptiDerm™ Cellular", "High-Strength Retinol", "Traditional Moisturizer"],
      rows: [
        { feature: "Skin Barrier Safety", peptiDerm: "100% Non-irritating • 0% Peeling", retinol: "Causes flaking, redness & sensitivity", trad: "Safe but minimal cellular change" },
        { feature: "Deep Collagen Induction", peptiDerm: "+68.4% Proven in 28 Days", retinol: "Effective but high barrier damage", trad: "0% collagen synthesis" },
        { feature: "Day & Night Versatility", peptiDerm: "Photostable • Safe with sunlight", retinol: "Night only • High UV photosensitivity", trad: "Day & night safe" },
        { feature: "Instant Absorption Speed", peptiDerm: "3.2 Seconds Snow-Melt Matte", retinol: "Often oily or heavy formulation", trad: "Sticky or superficial film" },
        { feature: "Packaging Integrity", peptiDerm: "Medical Vacuum Airless Bottle", retinol: "Jar/dropper oxidizes active potency", trad: "Standard open jar" }
      ]
    },
    routineGuide: {
      badge: "APPLICATION PROTOCOL",
      title: "Optimized Morning & Night Regimen",
      subtitle: "Simple 2-step clinical application takes less than 60 seconds per day.",
      morning: {
        title: "Morning Routine: Shield & Energize",
        steps: [
          "Cleanse face with gentle lukewarm water",
          "Pump 1-2 doses of PeptiDerm cream onto fingertips",
          "Gently press along jawline and forehead upward",
          "Apply SPF 50+ sunscreen for maximum daytime photoprotection"
        ]
      },
      night: {
        title: "Night Routine: Cellular Regeneration",
        steps: [
          "Double-cleanse to remove daily pollutants and makeup",
          "Apply 2 full pumps of PeptiDerm evenly across face & neck",
          "Use the Cryo Zinc-Alloy Spatula to contour jawline for 60 seconds",
          "Let peptides penetrate overnight during peak cell mitosis"
        ]
      }
    },
    whatsInBox: {
      badge: "MEDICAL GRADE PACKAGING",
      title: "What's Included in Your Delivery",
      subtitle: "Every order is packaged inside a sterile, tamper-evident medical delivery container.",
      items: [
        { name: "PeptiDerm™ Vacuum Airless Jar", desc: "Dual-piston medical airless dispenser that prevents 100% oxidation and bacterial contamination." },
        { name: "Cryo Zinc-Alloy Sculpting Spatula", desc: "Medical cooling metal applicator for hygienic dosing and lymphatic facial drainage contouring." },
        { name: "28-Day Cellular Progress Tracker", desc: "Dermatologist-designed visual measurement card to record wrinkle depth improvements weekly." },
        { name: "Certificate of Analysis (COA)", desc: "Lot-specific verification verifying Swiss SGS non-irritation rating and 99.8% peptide purity." }
      ]
    },
    reviews: {
      badge: "VERIFIED PATIENTS & CLINICIANS",
      title: "Real Dermatologist & Customer Results",
      subtitle: "Over 3,800+ verified purchasers give PeptiDerm an average 4.96/5 star rating.",
      verified: "Verified Buyer",
      dermatologist: "Board-Certified Dermatologist",
      filterAll: "All Reviews (3,842)",
      filterVerified: "Verified Orders Only",
      filterPhotos: "With Photos",
      items: [
        {
          author: "Dr. Elena Rostova, MD",
          age: 46,
          skinType: "Sensitive / Mature",
          variant: "100ml Clinical Double Course",
          rating: 5,
          title: "The only topical cream I prescribe to patients intolerant to Retinol",
          content: "As a practicing clinical dermatologist, my biggest hurdle was patients with compromised barriers who could not tolerate retinoids. PeptiDerm achieves equivalent collagen upregulation without triggering transepidermal water loss. Exceptional formulation."
        },
        {
          author: "Sophie Laurent",
          age: 38,
          skinType: "Combination / Fine Lines",
          variant: "50ml Core Cellular Treatment",
          rating: 5,
          title: "My nasolabial folds visibly softened in just 3 weeks!",
          content: "I was skeptical because most creams just sit on top of the skin. PeptiDerm literally melts in seconds. My husband noticed my skin looks plumper and the fine lines around my eyes are drastically diminished."
        },
        {
          author: "Carlos Morales",
          age: 52,
          skinType: "Dry / Photo-Damaged",
          variant: "100ml Clinical Double Course",
          rating: 5,
          title: "Remarkable neck and jawline tightening",
          content: "Ordered the 100ml kit with the metal spatula. Using it every evening has transformed my neck texture and erased the sun spots from years of outdoor sports. Worth every single penny."
        }
      ]
    },
    faq: {
      badge: "FREQUENTLY ASKED QUESTIONS",
      title: "Clinical Dermatology Q&A",
      subtitle: "Everything you need to know about peptide science, usage, shipping, and guarantees.",
      items: [
        {
          q: "How soon can I expect to see visible results?",
          a: "In clinical trials, 94% of users observed instant hydration and surface smoothing within 30 minutes. Deep dermal collagen restructuring, reduced wrinkle depth (-42.8%), and jawline lifting typically become distinctly noticeable at days 14 through 28."
        },
        {
          q: "Is PeptiDerm safe for ultra-sensitive or rosacea-prone skin?",
          a: "Yes! Unlike Retinol or Glycolic Acids, PeptiDerm contains 0% fragrance, 0% alcohol, and 0% parabens. It was tested by Swiss SGS labs on 120 sensitive skin subjects with a 99.8% zero-reaction tolerance rate."
        },
        {
          q: "Can I use PeptiDerm with my Vitamin C and sunscreen?",
          a: "Absolutely. PeptiDerm's bio-mimetic peptides are completely photostable and pH-neutral (pH 5.5). It works synergistically under SPF 50 during daytime and alongside your evening serums."
        },
        {
          q: "What is your return & guarantee policy?",
          a: "We provide an ironclad 30-day money-back guarantee. If you do not see a visible improvement in your skin's firmness and texture, simply email our clinical support for an immediate full refund."
        }
      ]
    },
    finalCta: {
      badge: "LIMITED LABORATORY BATCH",
      title: "Transform Your Skin with Clinical Precision Today",
      subtitle: "Unlock medical-grade multi-peptide cellular renewal. Risk-free for 30 days with free tracked worldwide delivery.",
      orderNow: "Claim Your Clinical Bottle",
      stockWarning: "Only 11 units left in today's sterile cleanroom dispatch queue.",
      deliveryNotice: "Dispatches within 24 hours with tracked express courier."
    },
    stickyMobile: {
      orderNow: "Order Now",
      save: "Save"
    },
    modal: {
      title: "Shopify Instant Cart & Checkout",
      subtitle: "PeptiDerm™ Direct Medical Dispatch",
      course: "Selected Course",
      orderConfirmed: "Order Confirmed Successfully!",
      orderId: "Order ID",
      dispatchNotice: "Tracked Express Dispatch in 24h",
      quantity: "Quantity",
      promoCode: "Promo / Clinical Discount Code",
      apply: "Apply",
      applied: "10% VIP Lab Discount Applied",
      subtotal: "Subtotal",
      discount: "Discount",
      shipping: "Global Express Shipping",
      free: "FREE",
      total: "Final Total",
      giftsIncluded: "Complimentary Medical Gifts Included:",
      instantCheckout: "Proceed to Instant Secure Checkout",
      processing: "Securing 256-Bit SSL Connection...",
      guaranteeNotice: "30-Day Money Back Guarantee • Encrypted Medical Dispatch"
    },
    footer: {
      brand: "PeptiDerm™ Clinical Dermatology Laboratories",
      cert: "ISO 22716 / GMP Certified",
      desc: "Cellular Renewal Multi-Peptide Cream • Formulated with 7 targeted bio-mimetic signal peptides. 1:1 native integration with Shopify multi-variant SKUs ($29 / $49 / $79) and instant checkout drawer.",
      rights: "All rights reserved.",
      disclaimer: "GMP Class 100,000 Cleanroom Manufactured • Swiss SGS Certified Non-Irritating • 100% Cruelty-Free • 256-Bit SSL Encrypted Checkout"
    }
  },

  fr: {
    topBar: {
      badge: "OFFRE SPÉCIALE",
      offerText: "JUSQU'À -41% • SPATULE CRYO OFFERTE AVEC 50ML/100ML • LIVRAISON EXPRESS MONDIALE",
      leftGuarantee: "CERTIFIÉ LABORATOIRE GMP • TESTÉ DERMATOLOGIQUEMENT SGS SUISSE",
      rightGuarantee: "Garantie Satisfait ou Remboursé 30 Jours",
    },
    header: {
      brandName: "PeptiDerm",
      tagline: "Laboratoires de Dermatologie Clinique",
      orderNow: "Commander",
      from: "Dès",
      cart: "Panier",
      features: [
        "7 Peptides Signaux Bio-Mimétiques",
        "Preuve Clinique sous 28 Jours",
        "Taux de Tolérance de 99,8%"
      ]
    },
    hero: {
      labTag: "7 PEPTIDES SIGNAUX BIO-MIMÉTIQUES",
      clinicalProofTag: "Vérifié par Essai Clinique 28 Jours",
      headlineLead: "Avancée Dermatologique Majeure",
      headlineTitle: "Régénération Cellulaire Multi-Peptides",
      headlineSubtitle: "Résolution de la contradiction fondamentale : Un lifting anti-âge de grade médical avec 0% de rougeur, d'irritation ou d'altération de la barrière cutanée.",
      ratingText: "4.96/5 (3 842 Avis Cliniques) • 88.6% de Réachat sous 60 Jours",
      bulletPoints: [
        "Prouvé cliniquement : -42,8% de volume des rides en essai double aveugle de 28 jours",
        "Complexe Tri-Acide Hyaluronique & Matrixyl 3000+ pour restructurer le collagène dermique",
        "Absorption ultra-rapide en 3 secondes au fini mat velouté, 0% film gras",
        "Flacon sous vide médical Airless protégeant 100% de la puissance active des peptides"
      ],
      selectCourse: "Sélectionnez Votre Cure Clinique :",
      stockLeft: "Plus que {count} unités disponibles dans le lot stérile actuel de laboratoire",
      ctaButton: "Profiter de l'Offre Clinique",
      secureGuarantee: "Garantie Sans Risque 30 Jours • Livraison Express Gratuite",
      benchmarks: {
        wrinkle: "Volume des Rides",
        collagen: "Collagène Dermique",
        tolerance: "Tolérance Cutanée",
        absorption: "Pénétration Cutanée"
      }
    },
    variants: {
      starter: {
        name: "Kit Découverte Starter 30ml",
        subTitle: "Premier Essai • Découvrez l'Absorption en 3s & l'Hydratation Immédiate",
        badge: "Découverte Starter",
        duration: "Cure de 2 à 3 Semaines",
        gifts: ["Flacon Airless sous Vide Médical", "Protocole d'Application Dermatologique"]
      },
      core: {
        name: "Soin Cellulaire Fondamental 50ml",
        subTitle: "Recommandé par les Dermatologues • Renouvellement Cellulaire en 28 Jours",
        badge: "🔥 82% DES CLIENTS CHOISISSENT CETTE CURE",
        duration: "Cure de 6 à 8 Semaines (Cycle Métabolique Complet)",
        gifts: [
          "Spatule Cryo Sculptante en Alliage de Zinc OFFERTE (Valeur 18€)",
          "Journal de Suivi Cutané 28 Jours OFFERT",
          "Livraison Express Suivie Mondiale OFFERTE"
        ]
      },
      course: {
        name: "Double Cure Clinique Intensive 100ml",
        subTitle: "Lifting Intensif Visage & Cou • Restructuration Totale de la Matrice Dermique",
        badge: "👑 MEILLEURE VALEUR / CURE CLINIQUE",
        duration: "Cure Intensive de 3 à 4 Mois",
        gifts: [
          "Édition Voyage 30ml OFFERTE (Valeur 29€)",
          "Spatule Cryo Sculptante en Alliage de Zinc OFFERTE (Valeur 18€)",
          "Accès VIP Illimité à la Consultation Dermatologique",
          "Livraison Express Prioritaire OFFERTE"
        ]
      },
      save: "Économisez",
      popular: "LE PLUS POPULAIRE",
      bestValue: "MEILLEUR PRIX",
      each: "l'unité",
      addToCart: "Ajouter au Panier",
      orderNow: "Commander Maintenant"
    },
    comparisonSlider: {
      badge: "IMAGERIE CLINIQUE",
      title: "Transformation Visible en 28 Jours",
      subtitle: "Preuve dermatologique par imagerie haute résolution polarisée VISIA-CR sous contrôle double aveugle.",
      day0Label: "Jour 0 (État Initial)",
      day0Desc: "Micro-rides, relâchement cutané, teint terne et barrière fragilisée",
      day28Label: "Jour 28 (Après PeptiDerm)",
      day28Desc: "Fermeté dermique restaurée, ovale du visage regalbé et texture soyeuse",
      dragPrompt: "Faites glisser le curseur pour comparer Jour 0 vs Jour 28",
      cta: "Découvrir la Renaissance en 28 Jours"
    },
    contradictionBuster: {
      badge: "RUPTURE DIALECTIQUE",
      title: "Pourquoi l'Anti-Âge Traditionnel Échoue & Comment PeptiDerm Résout le Problème",
      subtitle: "Les soins traditionnels imposent des compromis inacceptables. PeptiDerm s'appuie sur le bio-mimétisme moléculaire pour briser ces limites.",
      traditionalTitle: "Dilemme Traditionnel",
      breakthroughTitle: "Solution Moléculaire PeptiDerm",
      cards: [
        {
          id: "1",
          title: "Haute Efficacité vs. Irritation Sévère",
          traditional: "Le Rétinol pur et les AHA puissants provoquent desquamation, brûlures et altération de la barrière.",
          peptiDerm: "7 Peptides bio-mimétiques stimulent le collagène sans stress cellulaire cytotoxique.",
          stat: "99.8%",
          statLabel: "Tolérance Sans Irritation"
        },
        {
          id: "2",
          title: "Nutrition Profonde vs. Pores Obstrués",
          traditional: "Les crèmes épaisses aux huiles minérales étouffent l'épiderme et provoquent des brillances.",
          peptiDerm: "Une matrice lipidique micro-émulsionnée pénètre en 3,2 secondes pour un bouclier velouté mat.",
          stat: "3.2s",
          statLabel: "Absorption Éclair"
        },
        {
          id: "3",
          title: "Éclat Éphémère vs. Réparation Cellulaire Durable",
          traditional: "Les silicones cosmétiques créent un floutage artificiel de 2h qui disparaît au rinçage.",
          peptiDerm: "Double action : effet tenseur immédiat + synthèse profonde de collagène par les fibroblastes en 28 jours.",
          stat: "+68.4%",
          statLabel: "Croissance du Pro-Collagène I"
        },
        {
          id: "4",
          title: "Injections Coûteuses vs. Soin Quotidien à Domicile",
          traditional: "Le Botox et les fils tenseurs coûtent des milliers d'euros et nécessitent une éviction sociale.",
          peptiDerm: "L'Acétyl Hexapeptide-8 (Argireline) détend les micro-tensions d'expression sans douleur matin et soir.",
          stat: "-42.8%",
          statLabel: "Profondeur des Rides d'Expression"
        }
      ]
    },
    clinicalScience: {
      badge: "DONNÉES CLINIQUES DOUBLE AVEUGLE",
      title: "Scientifiquement Validé par des Laboratoires Suisses Indépendants",
      subtitle: "Essai clinique randomisé en double aveugle sur 28 jours mené auprès de 120 participantes aux phototypes variés.",
      metrics: [
        { label: "Réduction du Volume des Rides", value: "-42,8%", timeframe: "28 Jours", note: "Mesuré par Profilométrie Optique 3D" },
        { label: "Densité de Collagène & Élastine", value: "+68,4%", timeframe: "28 Jours", note: "Échographie Cutanée Haute Fréquence (20MHz)" },
        { label: "Rétention d'Hydratation Épidermique", value: "+84,2%", timeframe: "2 Heures", note: "Cornéométrie CM 825" },
        { label: "Diminution de la Perte Insensible en Eau", value: "-36,5%", timeframe: "14 Jours", note: "Téwamétrie TM 300" }
      ]
    },
    activeIngredients: {
      badge: "FORMULE BIO-ACTIVE",
      title: "7 Peptides Signaux Bio-Mimétiques Ciblés",
      subtitle: "Dosés à des pourcentages actifs cliniques, formulés sans charges, sans parfum et sans parabènes.",
      ingredients: [
        { name: "Palmitoyl Tripeptide-1", role: "Synthèse de Collagène", target: "Derme", desc: "Stimule la production de pro-collagène I et de fibronectine." },
        { name: "Palmitoyl Tetrapeptide-7", role: "Anti-Inflammatoire & Fermeté", target: "Jonction Dermo-Épidermique", desc: "Réduit l'interleukine-6 pour prévenir la glycation et le relâchement." },
        { name: "Acétyl Hexapeptide-8 (Argireline)", role: "Relaxation des Rides d'Expression", target: "Jonction Neuromusculaire", desc: "Atténue les micro-contractions musculaires pour un effet lissant type Botox." },
        { name: "Tripeptide de Cuivre (GHK-Cu)", role: "Réparation de l'ADN Cellulaire", target: "Couche Basale", desc: "Booste la vitalité des cellules souches et les voies de cicatrisation cutanée." },
        { name: "Oligopeptide-1 (EGF)", role: "Régénération Épidermique", target: "Couche Cornée", desc: "Accélère le cycle de renouvellement cellulaire de 45 jours à 28 jours." },
        { name: "Complexe Tri-Acide Hyaluronique", role: "Hydratation Multi-Niveaux", target: "Toutes Couches", desc: "Poids moléculaires macro, micro et nano pour 72h d'hydratation continue." },
        { name: "Phyto-Squalane & Céramide NP", role: "Renforcement Barrière", target: "Film Hydrolipidique", desc: "Lipides biocompatibles qui restaurent le bouclier protecteur cutané." }
      ]
    },
    comparisonTable: {
      badge: "BENCHMARK IMPARTIAL",
      title: "Pourquoi PeptiDerm Surpasse les Soins Traditionnels",
      subtitle: "Comparaison scientifique rigoureuse face aux approches anti-âge conventionnelles.",
      columns: ["Critère Clinique", "PeptiDerm™ Cellulaire", "Rétinol Fort Dosage", "Crème Hydratante Standard"],
      rows: [
        { feature: "Respect de la Barrière Cutanée", peptiDerm: "100% Non Irritant • 0% Desquamation", retinol: "Desquamation, rougeurs & intolérance", trad: "Sûr mais aucun impact cellulaire profond" },
        { feature: "Stimulation Profonde du Collagène", peptiDerm: "+68,4% Prouvé en 28 Jours", retinol: "Efficace mais barrière abîmée", trad: "0% de synthèse de collagène" },
        { feature: "Usage Jour & Nuit Polyvalent", peptiDerm: "Photostable • Compatible soleil", retinol: "Nuit uniquement • Fortement photosensibilisant", trad: "Compatible jour et nuit" },
        { feature: "Rapidité d'Absorption", peptiDerm: "3,2s Effet Velouté Mat", retinol: "Texture souvent grasse et collante", trad: "Laisse un film gras en surface" },
        { feature: "Intégrité du Flaconnage", peptiDerm: "Flacon Airless Médical sous Vide", retinol: "Pot ouvert qui oxyde les actifs", trad: "Pot classique sans protection" }
      ]
    },
    routineGuide: {
      badge: "PROTOCOLE D'APPLICATION",
      title: "Protocole Matin & Soir Optimisé",
      subtitle: "Une application clinique simple en 2 étapes qui prend moins de 60 secondes par jour.",
      morning: {
        title: "Routine Matin : Protéger & Dynamiser",
        steps: [
          "Nettoyer le visage à l'eau tiède douce",
          "Prélever 1 à 2 pressions de crème PeptiDerm sur le bout des doigts",
          "Masser délicatement le long de la mâchoire et du front vers le haut",
          "Appliquer une protection solaire SPF 50+ pour la journée"
        ]
      },
      night: {
        title: "Routine Soir : Régénération Cellulaire",
        steps: [
          "Effectuer un double nettoyage pour éliminer les impuretés et le maquillage",
          "Appliquer 2 pressions complètes de PeptiDerm sur le visage et le cou",
          "Utiliser la spatule cryo en alliage de zinc pour sculpter les contours pendant 60s",
          "Laisser les peptides réparer la matrice cellulaire durant la nuit"
        ]
      }
    },
    whatsInBox: {
      badge: "PACKAGING MÉDICAL DE PRÉCISION",
      title: "Ce qui est Inclus dans Votre Commande",
      subtitle: "Chaque commande est emballée dans un coffret médical stérile avec scellé d'inviolabilité.",
      items: [
        { name: "Flacon Airless Sous Vide PeptiDerm™", desc: "Distributeur médical à double piston empêchant toute oxydation et contamination bactérienne." },
        { name: "Spatule Cryo Sculptante en Alliage de Zinc", desc: "Applicateur métallique thermorégulateur pour un dosage hygiénique et un drainage lymphatique." },
        { name: "Guide de Suivi Cellulaire 28 Jours", desc: "Fiche d'évaluation visuelle conçue par des dermatologues pour mesurer la réduction des rides." },
        { name: "Certificat d'Analyse Clinique (COA)", desc: "Validation de lot attestant de la non-irritation SGS Suisse et de la pureté à 99,8% des peptides." }
      ]
    },
    reviews: {
      badge: "PATIENTS & DERMATOLOGUES VÉRIFIÉS",
      title: "Résultats Constatés par les Médecins & Utilisateurs",
      subtitle: "Plus de 3 800 acheteurs vérifiés attribuent à PeptiDerm une note moyenne de 4,96/5 étoiles.",
      verified: "Acheteur Vérifié",
      dermatologist: "Dermatologue Certifié",
      filterAll: "Tous les Avis (3 842)",
      filterVerified: "Commandes Vérifiées",
      filterPhotos: "Avec Photos",
      items: [
        {
          author: "Dr. Elena Rostova, MD",
          age: 46,
          skinType: "Sensible / Mature",
          variant: "Double Cure Clinique Intensive 100ml",
          rating: 5,
          title: "La seule crème que je prescris aux patients intolérants au Rétinol",
          content: "En tant que dermatologue praticienne, mon plus grand défi était les peaux à barrière altérée ne supportant pas les rétinoïdes. PeptiDerm apporte une stimulation équivalente du collagène sans agresser la peau. Une formulation exceptionnelle."
        },
        {
          author: "Sophie Laurent",
          age: 38,
          skinType: "Mixte / Premières Rides",
          variant: "Soin Cellulaire Fondamental 50ml",
          rating: 5,
          title: "Mes sillons nasogéniens sont visiblement estompés en 3 semaines !",
          content: "J'étais sceptique car la plupart des crèmes restent grasses en surface. PeptiDerm fond littéralement en quelques secondes. Mon teint est rebondi et mes ridules du contour des yeux ont nettement diminué."
        },
        {
          author: "Carlos Morales",
          age: 52,
          skinType: "Sèche / Photo-Vieillie",
          variant: "Double Cure Clinique Intensive 100ml",
          rating: 5,
          title: "Raffermissement remarquable du cou et du bas du visage",
          content: "J'ai commandé le coffret 100ml avec la spatule métallique. L'utiliser chaque soir a transformé la texture de ma peau et atténué les taches solaires accumulées au fil des années."
        }
      ]
    },
    faq: {
      badge: "QUESTIONS FRÉQUEMMENT POSÉES",
      title: "Questions / Réponses Dermatologiques",
      subtitle: "Tout ce que vous devez savoir sur la science des peptides, l'utilisation, la livraison et les garanties.",
      items: [
        {
          q: "En combien de temps puis-je constater des résultats visibles ?",
          a: "Lors des essais cliniques, 94% des utilisateurs ont constaté un gain d'hydratation et un lissage de surface dès 30 minutes. La restructuration profonde du collagène, l'atténuation des rides (-42,8%) et le raffermissement deviennent nettement visibles entre le 14ème et le 28ème jour."
        },
        {
          q: "PeptiDerm convient-elle aux peaux très sensibles ou sujettes à la couperose ?",
          a: "Oui ! Contrairement au Rétinol ou aux Acides Glycoliques, PeptiDerm contient 0% de parfum, 0% d'alcool et 0% de parabènes. Elle a été testée par les laboratoires suisses SGS sur 120 peaux sensibles avec un taux de tolérance de 99,8% sans aucune réaction."
        },
        {
          q: "Puis-je associer PeptiDerm à ma Vitamine C et à ma crème solaire ?",
          a: "Absolument. Les peptides bio-mimétiques de PeptiDerm sont totalement photostables et possèdent un pH neutre (pH 5,5). La crème s'applique idéalement sous un SPF 50 en journée et en complément de vos sérums le soir."
        },
        {
          q: "Quelle est votre politique de garantie et de retour ?",
          a: "Nous offrons une garantie satisfait ou remboursé de 30 jours. Si vous ne constatez pas d'amélioration visible de la fermeté et de la texture de votre peau, contactez simplement notre service clinique pour un remboursement intégral immédiat."
        }
      ]
    },
    finalCta: {
      badge: "LOT DE LABORATOIRE LIMITÉ",
      title: "Révélez la Jeunesse de Votre Peau avec Précision Clinique",
      subtitle: "Bénéficiez d'une régénération cellulaire multi-peptides de grade médical. Essai sans risque pendant 30 jours avec livraison suivie offerte.",
      orderNow: "Commander Mon Flacon Clinique",
      stockWarning: "Plus que 11 unités disponibles dans la file d'expédition stérile du jour.",
      deliveryNotice: "Expédié sous 24h par transporteur express sécurisé."
    },
    stickyMobile: {
      orderNow: "Commander",
      save: "Économisez"
    },
    modal: {
      title: "Panier Instantané & Paiement Sécurisé",
      subtitle: "Expédition Médicale Directe PeptiDerm™",
      course: "Cure Sélectionnée",
      orderConfirmed: "Commande Confirmée avec Succès !",
      orderId: "Numéro de Commande",
      dispatchNotice: "Expédition Express Suivie sous 24h",
      quantity: "Quantité",
      promoCode: "Code Promotionnel / Remise Clinique",
      apply: "Appliquer",
      applied: "Remise VIP Laboratoire 10% Appliquée",
      subtotal: "Sous-total",
      discount: "Remise",
      shipping: "Livraison Express Mondiale",
      free: "GRATUIT",
      total: "Total Final",
      giftsIncluded: "Cadeaux Médicaux Inclus :",
      instantCheckout: "Procéder au Paiement Sécurisé",
      processing: "Connexion Sécurisée SSL 256-Bit en cours...",
      guaranteeNotice: "Garantie Remboursement 30 Jours • Envoi Médical Crypté"
    },
    footer: {
      brand: "Laboratoires de Dermatologie Clinique PeptiDerm™",
      cert: "Certifié ISO 22716 / BPF (GMP)",
      desc: "Crème Régénération Cellulaire Multi-Peptides • Formulée avec 7 peptides signaux bio-mimétiques ciblés. Intégration 1:1 avec le catalogue multi-variantes Shopify (29€ / 49€ / 79€) et tiroir de paiement instantané.",
      rights: "Tous droits réservés.",
      disclaimer: "Fabriqué en Salle Blanche BPF Classe 100 000 • Certifié Non Irritant SGS Suisse • 100% Non Testé sur les Animaux • Paiement Crypté SSL 256-Bit"
    }
  },

  ru: {
    topBar: {
      badge: "СПЕЦПРЕДЛОЖЕНИЕ",
      offerText: "СКИДКИ ДО 41% • КРИО-ШПАТЕЛЬ В ПОДАРОК ПРИ ЗАКАЗЕ 50МЛ/100МЛ • ЭКСПРЕСС-ДОСТАВКА",
      leftGuarantee: "СЕРТИФИЦИРОВАНО ПО СТАНДАРТУ GMP • ДЕРМАТОЛОГИЧЕСКИ ПРОТЕСТИРОВАНО SGS (ШВЕЙЦАРИЯ)",
      rightGuarantee: "30 дней гарантии возврата средств",
    },
    header: {
      brandName: "PeptiDerm",
      tagline: "Лаборатории Клинической Дерматологии",
      orderNow: "Заказать",
      from: "От",
      cart: "Корзина",
      features: [
        "7 биомиметических сигнальных пептидов",
        "Клинически доказано за 28 дней",
        "99.8% переносимость кожей"
      ]
    },
    hero: {
      labTag: "7 БИОМИМЕТИЧЕСКИХ СИГНАЛЬНЫХ ПЕПТИДОВ",
      clinicalProofTag: "Подтверждено 28-дневными испытаниями",
      headlineLead: "Дерматологический прорыв",
      headlineTitle: "Клеточное обновление с мультипептидами",
      headlineSubtitle: "Разрешение главного противоречия: Медицинский омолаживающий лифтинг без покраснений, раздражений и повреждения защитного барьера кожи.",
      ratingText: "4.96/5 (3 842 клинических отзыва) • 88.6% повторных заказов за 60 дней",
      bulletPoints: [
        "Клинически доказано: уменьшение объема морщин на 42.8% за 28 дней двойного слепого теста",
        "Тройной комплекс гиалуроновой кислоты и Matrixyl 3000+ для глубокого синтеза коллагена",
        "Мгновенное впитывание за 3 секунды с бархатным матовым финишем без жирного блеска",
        "Медицинский вакуумный флакон Airless на 100% сохраняет биологическую активность пептидов"
      ],
      selectCourse: "Выберите Ваш клинический курс:",
      stockLeft: "Осталось всего {count} шт. в текущей стерильной лабораторной партии",
      ctaButton: "Получить клиническое предложение",
      secureGuarantee: "30 дней без риска • Бесплатная экспресс-доставка",
      benchmarks: {
        wrinkle: "Объем морщин",
        collagen: "Дермальный коллаген",
        tolerance: "Переносимость",
        absorption: "Глубина проникновения"
      }
    },
    variants: {
      starter: {
        name: "Стартовый набор Discovery 30мл",
        subTitle: "Первое знакомство • Впитывание за 3 сек и мгновенная гидратация",
        badge: "Стартовый набор",
        duration: "Курс на 2-3 недели",
        gifts: ["Медицинский вакуумный флакон Airless", "Протокол дерматологического нанесения"]
      },
      core: {
        name: "Основной клеточный курс 50мл",
        subTitle: "Рекомендовано дерматологами • 28-дневный цикл клеточного обновления",
        badge: "🔥 ВЫБОР 82% ПОКУПАТЕЛЕЙ",
        duration: "Курс на 6-8 недель (полный метаболический цикл)",
        gifts: [
          "Крио-шпатель из цинкового сплава В ПОДАРОК (стоимость 18$)",
          "Дневник отслеживания состояния кожи на 28 дней В ПОДАРОК",
          "Международная экспресс-доставка с трек-номером В ПОДАРОК"
        ]
      },
      course: {
        name: "Двойной интенсивный клинический курс 100мл",
        subTitle: "Интенсивный лифтинг лица и шеи • Полная реструктуризация дермального матрикса",
        badge: "👑 МАКСИМАЛЬНАЯ ВЫГОДА / КУРС",
        duration: "Интенсивный курс на 3-4 месяца",
        gifts: [
          "Travel-версия 30мл В ПОДАРОК (стоимость 29$)",
          "Крио-шпатель из цинкового сплава В ПОДАРОК (стоимость 18$)",
          "Бессрочный VIP-доступ к консультациям дерматолога",
          "Приоритетная экспресс-доставка"
        ]
      },
      save: "Экономия",
      popular: "ХИТ ПРОДАЖ",
      bestValue: "ЛУЧШАЯ ЦЕНА",
      each: "за шт.",
      addToCart: "В корзину",
      orderNow: "Заказать сейчас"
    },
    comparisonSlider: {
      badge: "КЛИНИЧЕСКАЯ ВИЗУАЛИЗАЦИЯ",
      title: "Видимое преображение за 28 дней",
      subtitle: "Фотопротокол высокого разрешения дерматологической системы VISIA-CR в поляризованном свете под контролем врачей.",
      day0Label: "День 0 (До начала)",
      day0Desc: "Микроморщины, потеря упругости, тусклый тон и поврежденный липидный барьер",
      day28Label: "День 28 (После PeptiDerm)",
      day28Desc: "Глубокая плотность кожи, подтянутый овал лица и сияющая гладкая текстура",
      dragPrompt: "Передвигайте ползунок для сравнения: День 0 / День 28",
      cta: "Оценить преображение за 28 дней"
    },
    contradictionBuster: {
      badge: "ДИАЛЕКТИЧЕСКИЙ ПРОРЫВ",
      title: "Почему традиционный антивозрастной уход не работает и как PeptiDerm решает эту проблему",
      subtitle: "Косметология десятилетиями вынуждала идти на компромиссы. PeptiDerm использует молекулярную биомимикрию, чтобы навсегда устранить противоречия.",
      traditionalTitle: "Традиционная дилемма",
      breakthroughTitle: "Молекулярное решение PeptiDerm",
      cards: [
        {
          id: "1",
          title: "Высокая эффективность vs. Сильное раздражение",
          traditional: "Чистый ретинол и сильные кислоты вызывают шелушение, жжение, покраснение и разрушение защитного барьера.",
          peptiDerm: "7 биомиметических пептидов подают сигнал фибробластам без цитотоксического стресса для клеток.",
          stat: "99.8%",
          statLabel: "Переносимость без раздражений"
        },
        {
          id: "2",
          title: "Глубокое питание vs. Забитые поры и жирность",
          traditional: "Плотные кремы на минеральных маслах лежат пленкой на поверхности, провоцируя воспаления.",
          peptiDerm: "Микроэмульсионная тающая липидная матрица проникает в кожу за 3.2 секунды, оставляя матовый финиш.",
          stat: "3.2с",
          statLabel: "Мгновенное впитывание"
        },
        {
          id: "3",
          title: "Мгновенный визуальный эффект vs. Долгосрочный результат",
          traditional: "Косметические силиконы создают видимость гладкости на 2 часа, которая смывается водой.",
          peptiDerm: "Двойное действие: мгновенное поверхностное натяжение + 28 дней глубокого синтеза коллагена I типа.",
          stat: "+68.4%",
          statLabel: "Прирост проколлагена I"
        },
        {
          id: "4",
          title: "Дорогие инъекции vs. Ежедневный домашний уход",
          traditional: "Ботокс и нити требуют регулярных болезненных процедур, больших затрат и периода реабилитации.",
          peptiDerm: "Ацетил Гексапептид-8 (Аргирелин) безболезненно расслабляет микронапряжение мимических мышц каждый день.",
          stat: "-42.8%",
          statLabel: "Глубина мимических морщин"
        }
      ]
    },
    clinicalScience: {
      badge: "ДВОЙНОЕ СЛЕПОЕ ТЕСТИРОВАНИЕ",
      title: "Научно подтверждено независимыми швейцарскими лабораториями",
      subtitle: "28-дневное рандомизированное двойное слепое клиническое исследование с участием 120 добровольцев с различными фототипами кожи.",
      metrics: [
        { label: "Уменьшение глубины морщин", value: "-42.8%", timeframe: "28 дней", note: "Измерено 3D-оптической профилометрией" },
        { label: "Плотность коллагена и эластина", value: "+68.4%", timeframe: "28 дней", note: "Высокочастотное УЗИ кожи (20 МГц)" },
        { label: "Удержание влаги в эпидермисе", value: "+84.2%", timeframe: "2 часа", note: "Корнеометрия CM 825" },
        { label: "Снижение трансэпидермальной потери влаги", value: "-36.5%", timeframe: "14 дней", note: "Теваметрия TM 300" }
      ]
    },
    activeIngredients: {
      badge: "БИОАКТИВНАЯ ФОРМУЛА",
      title: "7 целевых биомиметических сигнальных пептидов",
      subtitle: "Введены в клинически доказанных терапевтических концентрациях: 0% балластных веществ, отдушек и парабенов.",
      ingredients: [
        { name: "Пальмитоил Трипептид-1", role: "Синтез коллагена", target: "Дерма", desc: "Стимулирует выработку проколлагена I и фибронектина." },
        { name: "Пальмитоил Тетрапептид-7", role: "Укрепление и снятие воспалений", target: "Дермо-эпидермальное соединение", desc: "Снижает интерлейкин-6, замедляя процессы гликации и птоза." },
        { name: "Ацетил Гексапептид-8 (Аргирелин)", role: "Разглаживание мимических морщин", target: "Нервно-мышечные синапсы", desc: "Снижает частоту микросокращений мимических мышц с эффектом ботулотоксина." },
        { name: "Трипептид Меди-1 (GHK-Cu)", role: "Клеточная репарация ДНК", target: "Базальный слой", desc: "Активирует стволовые клетки кожи и ускоряет регенерацию тканей." },
        { name: "Олигопептид-1 (EGF)", role: "Обновление эпидермиса", target: "Роговой слой", desc: "Ускоряет цикл обновления клеток с 45 до 28 дней." },
        { name: "Тройной комплекс гиалуроновой кислоты", role: "Многоуровневое увлажнение", target: "Все слои кожи", desc: "Макро-, микро- и наномолекулярная масса для 72 часов непрерывного увлажнения." },
        { name: "Фитосквалан и Церамиды NP", role: "Восстановление барьера", target: "Липидная мантия", desc: "Биосовместимые липиды, восстанавливающие поврежденный защитный барьер." }
      ]
    },
    comparisonTable: {
      badge: "ОБЪЕКТИВНОЕ СРАВНЕНИЕ",
      title: "Почему PeptiDerm превосходит аналоги на рынке",
      subtitle: "Прямое научное сопоставление с традиционными антивозрастными средствами.",
      columns: ["Клинический критерий", "PeptiDerm™ Cellular", "Высококонцентрированный ретинол", "Обычный увлажняющий крем"],
      rows: [
        { feature: "Безопасность для кожного барьера", peptiDerm: "100% не раздражает • 0% шелушений", retinol: "Вызывает сухость, красноту и дерматит", trad: "Безопасно, но без антивозрастного эффекта" },
        { feature: "Глубокая стимуляция коллагена", peptiDerm: "+68.4% доказано за 28 дней", retinol: "Эффективно, но разрушает барьер", trad: "0% стимуляции синтеза коллагена" },
        { feature: "Использование день / ночь", peptiDerm: "Фотостабилен • Совместим с солнцем", retinol: "Только на ночь • Повышает фоточувствительность", trad: "Подходит для дня и ночи" },
        { feature: "Скорость впитывания", peptiDerm: "3.2 секунды • Матовый финиш", retinol: "Часто жирная липкая основа", trad: "Оставляет пленку на коже" },
        { feature: "Герметичность упаковки", peptiDerm: "Медицинский вакуумный Airless", retinol: "Баночки и пипетки окисляют формулу", trad: "Стандартная открытая банка" }
      ]
    },
    routineGuide: {
      badge: "ПРОТОКОЛ ПРИМЕНЕНИЯ",
      title: "Оптимальный утренний и вечерний протокол",
      subtitle: "Простая клиническая 2-шаговая процедура занимает менее 60 секунд в день.",
      morning: {
        title: "Утренний протокол: Защита и энергия",
        steps: [
          "Очистите кожу мягкой теплой водой",
          "Выдавите 1-2 нажатия крема PeptiDerm на кончики пальцев",
          "Легкими восходящими движениями распределите по контуру лица и лбу",
          "Нанесите солнцезащитный крем SPF 50+ для защиты в течение дня"
        ]
      },
      night: {
        title: "Вечерний протокол: Клеточная регенерация",
        steps: [
          "Тщательно очистите кожу от макияжа и городской пыли",
          "Нанесите 2 полных нажатия PeptiDerm на лицо и шею",
          "Массажируйте контур лица крио-шпателем из цинкового сплава в течение 60 сек",
          "Оставьте пептиды восстанавливать дермальный матрикс во время ночного сна"
        ]
      }
    },
    whatsInBox: {
      badge: "МЕДИЦИНСКАЯ УПАКОВКА",
      title: "Комплектация вашего заказа",
      subtitle: "Каждый заказ упаковывается в стерильный медицинский бокс с контролем первого вскрытия.",
      items: [
        { name: "Вакуумный Airless-флакон PeptiDerm™", desc: "Двухпоршневой медицинский дозатор, полностью исключающий окисление и попадание бактерий." },
        { name: "Крио-шпатель из цинкового сплава", desc: "Охлаждающий металлоаппликатор для гигиеничного нанесения и лимфодренажного моделирования овала лица." },
        { name: "Дневник отслеживания результатов на 28 дней", desc: "Разработанная дерматологами карта для еженедельной фиксации изменений плотности кожи." },
        { name: "Сертификат качества и анализа (COA)", desc: "Документ с подтверждением гипоаллергенности Swiss SGS и 99.8% чистоты пептидного сырья." }
      ]
    },
    reviews: {
      badge: "РЕАЛЬНЫЕ ОТЗЫВЫ ВРАЧЕЙ И КЛИЕНТОВ",
      title: "Результаты подтверждены дерматологами и пациентами",
      subtitle: "Более 3 800 подтвержденных покупателей оценили PeptiDerm на 4.96 из 5 звезд.",
      verified: "Подтвержденная покупка",
      dermatologist: "Сертифицированный врач-дерматолог",
      filterAll: "Все отзывы (3 842)",
      filterVerified: "Только подтвержденные заказы",
      filterPhotos: "С фотографиями",
      items: [
        {
          author: "Д-р Елена Ростова, MD",
          age: 46,
          skinType: "Чувствительная / Зрелая",
          variant: "Двойной интенсивный клинический курс 100мл",
          rating: 5,
          title: "Единственный крем, который я назначаю пациентам с непереносимостью ретинола",
          content: "Как практикующий дерматолог, я часто сталкиваюсь с пациентами с поврежденным барьером, которые не могут применять ретиноиды. PeptiDerm дает сопоставимый синтез коллагена без раздражения и обезвоживания. Выдающаяся формула."
        },
        {
          author: "Софи Лоран",
          age: 38,
          skinType: "Комбинированная / Первые морщины",
          variant: "Основной клеточный курс 50мл",
          rating: 5,
          title: "Носогубные складки заметно разгладились уже через 3 недели!",
          content: "Я относилась скептически, так как большинство кремов просто лежат пленкой. PeptiDerm буквально тает на коже за пару секунд. Муж заметил, что лицо посвежело, а мелкие морщинки вокруг глаз почти исчезли."
        },
        {
          author: "Карлос Моралес",
          age: 52,
          skinType: "Сухая / Фотоповрежденная",
          variant: "Двойной интенсивный клинический курс 100мл",
          rating: 5,
          title: "Заметная подтяжка кожи шеи и овала лица",
          content: "Заказал курс 100мл со специальным металлическим шпателем. Ежедневный вечерний массаж вернул плотность коже шеи и помог осветлить пигментные пятна после многолетних занятий спортом на солнце."
        }
      ]
    },
    faq: {
      badge: "ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ",
      title: "Ответы экспертов-дерматологов",
      subtitle: "Все, что нужно знать о пептидах, способе применения, доставке и гарантиях.",
      items: [
        {
          q: "Когда я увижу первые заметные результаты?",
          a: "В клинических испытаниях 94% участников отметили мгновенное увлажнение и гладкость уже через 30 минут. Глубокая реструктуризация коллагена, сокращение морщин (-42.8%) и лифтинг овала лица становятся явно выраженными на 14–28 день применения."
        },
        {
          q: "Подходит ли PeptiDerm для ультрачувствительной кожи и при розацеа?",
          a: "Да! В отличие от ретинола или гликолевой кислоты, PeptiDerm содержит 0% отдушек, 0% спирта и 0% парабенов. Средство протестировано швейцарской лабораторией SGS на 120 добровольцах с чувствительной кожей: зафиксирована 99.8% идеальная переносимость."
        },
        {
          q: "Можно ли сочетать PeptiDerm с витамином C и солнцезащитным кремом?",
          a: "Да, абсолютно. Сигнальные пептиды PeptiDerm фотостабильны и имеют физиологичный pH 5.5. Крем отлично наносится под SPF 50 утром и сочетается с ночными сыворотками."
        },
        {
          q: "Каковы условия гарантии и возврата?",
          a: "Мы предоставляем 100% гарантию возврата средств в течение 30 дней. Если вы не заметите видимого улучшения упругости и текстуры вашей кожи, просто свяжитесь с нашей службой поддержки для полного возврата средств."
        }
      ]
    },
    finalCta: {
      badge: "ЛИМИТИРОВАННАЯ ЛАБОРАТОРНАЯ ПАРТИЯ",
      title: "Подарите вашей коже клиническую точность обновления уже сегодня",
      subtitle: "Запустите медицинское мультипептидное клеточное восстановление. 30 дней без риска с бесплатной международной экспресс-доставкой.",
      orderNow: "Заказать клинический крем",
      stockWarning: "Осталось всего 11 упаковок в сегодняшней очереди стерильной отправки.",
      deliveryNotice: "Отправка в течение 24 часов курьерской экспресс-службой."
    },
    stickyMobile: {
      orderNow: "Заказать",
      save: "Скидка"
    },
    modal: {
      title: "Мгновенная корзина и оформление заказа Shopify",
      subtitle: "Прямая медицинская отправка PeptiDerm™",
      course: "Выбранный курс",
      orderConfirmed: "Заказ успешно подтвержден!",
      orderId: "Номер заказа",
      dispatchNotice: "Экспресс-отправка в течение 24 часов",
      quantity: "Количество",
      promoCode: "Промокод / Клиническая скидка",
      apply: "Применить",
      applied: "Скидка 10% VIP лаборатории применена",
      subtotal: "Подытог",
      discount: "Скидка",
      shipping: "Международная экспресс-доставка",
      free: "БЕСПЛАТНО",
      total: "Итого к оплате",
      giftsIncluded: "Подарочные медицинские аксессуары:",
      instantCheckout: "Перейти к безопасной оплате",
      processing: "Установка защищенного соединения 256-Bit SSL...",
      guaranteeNotice: "30 дней гарантии возврата • Зашифрованная медицинская отправка"
    },
    footer: {
      brand: "Лаборатории Клинической Дерматологии PeptiDerm™",
      cert: "Сертифицировано ISO 22716 / GMP",
      desc: "Крем для клеточного обновления с 7 целевыми биомиметическими сигнальными пептидами. 1:1 нативная интеграция со Shopify SKUs (29$ / 49$ / 79$) и мгновенным чекаутом.",
      rights: "Все права защищены.",
      disclaimer: "Произведено в чистых помещениях класса GMP 100 000 • Сертифицировано SGS Швейцария • Не тестируется на животных • Защита платежей SSL 256-Bit"
    }
  },

  es: {
    topBar: {
      badge: "ESPECIAL FLASH",
      offerText: "HASTA 41% DTO • ESPÁTULA CRYO GRATIS CON 50ML/100ML • ENVÍO EXPRESS MUNDIAL",
      leftGuarantee: "CERTIFICADO LABORATORIO GMP • TESTADO DERMATOLÓGICAMENTE POR SGS SUIZA",
      rightGuarantee: "Garantía de Devolución de 30 Días",
    },
    header: {
      brandName: "PeptiDerm",
      tagline: "Laboratorios de Dermatología Clínica",
      orderNow: "Ordenar Ahora",
      from: "Desde",
      cart: "Carrito",
      features: [
        "7 Péptidos Señal Bio-Miméticos",
        "Prueba Clínica en 28 Días",
        "99.8% Tasa de Tolerancia"
      ]
    },
    hero: {
      labTag: "7 PÉPTIDOS SEÑAL BIO-MIMÉTICOS",
      clinicalProofTag: "Verificado en Ensayo Clínico de 28 Días",
      headlineLead: "Avance Dermatológico Clínico",
      headlineTitle: "Renovación Celular Multi-Péptidos",
      headlineSubtitle: "Resolviendo la contradicción fundamental: Lifting antienvejecimiento de grado médico con 0% de rojeces, irritación o daño a la barrera cutánea.",
      ratingText: "4.96/5 (3,842 Reseñas Clínicas) • 88.6% Tasa de Recompra a 60 Días",
      bulletPoints: [
        "Clínicamente probado: -42.8% volumen de arrugas en ensayo doble ciego de 28 días",
        "Complejo Tri-Ácido Hialurónico y Matrixyl 3000+ para reestructurar el colágeno dérmico",
        "Absorción flash en 3 segundos con acabado mate aterciopelado, 0% sensación grasa",
        "Envase médico Airless al vacío que aísla el 100% de la potencia activa de los péptidos"
      ],
      selectCourse: "Seleccione su Tratamiento Clínico:",
      stockLeft: "Solo quedan {count} unidades en el lote estéril actual de laboratorio",
      ctaButton: "Aprovechar Oferta Clínica",
      secureGuarantee: "Garantía Sin Riesgo de 30 Días • Envío Express Gratuito",
      benchmarks: {
        wrinkle: "Volumen de Arrugas",
        collagen: "Colágeno Dérmico",
        tolerance: "Tasa de Tolerancia",
        absorption: "Penetración Cutánea"
      }
    },
    variants: {
      starter: {
        name: "Kit Starter Descubrimiento 30ml",
        subTitle: "Primera Prueba • Experimente Absorción en 3s e Hidratación Instantánea",
        badge: "Descubrimiento Starter",
        duration: "Tratamiento de 2-3 Semanas",
        gifts: ["Frasco Airless al Vacío Médico", "Protocolo Dermatológico de Aplicación"]
      },
      core: {
        name: "Tratamiento Celular Fundamental 50ml",
        subTitle: "Recomendado por Dermatólogos • Renovación de Colágeno en 28 Días",
        badge: "🔥 82% DE LOS CLIENTES ELIGEN ESTE TRATAMIENTO",
        duration: "Tratamiento de 6-8 Semanas (Ciclo Metabólico Completo)",
        gifts: [
          "Espátula Cryo Esculpidora en Aleación de Zinc GRATIS (Valor $18)",
          "Diario de Seguimiento Cutáneo 28 Días GRATIS",
          "Envío Express con Seguimiento Mundial GRATIS"
        ]
      },
      course: {
        name: "Doble Tratamiento Clínico Intensivo 100ml",
        subTitle: "Lifting Intensivo Facial y Cuello • Reestructuración Dérmica Profunda",
        badge: "👑 MEJOR VALOR / TRATAMIENTO CLÍNICO",
        duration: "Tratamiento Intensivo de 3-4 Meses",
        gifts: [
          "Edición de Viaje 30ml GRATIS (Valor $29)",
          "Espátula Cryo Esculpidora en Aleación de Zinc GRATIS (Valor $18)",
          "Acceso VIP Ilimitado a Consulta Dermatológica",
          "Envío Express Prioritario GRATIS"
        ]
      },
      save: "Ahorra",
      popular: "MÁS POPULAR",
      bestValue: "MEJOR PRECIO",
      each: "unidad",
      addToCart: "Añadir al Carrito",
      orderNow: "Comprar Ahora"
    },
    comparisonSlider: {
      badge: "IMÁGENES CLÍNICAS",
      title: "Transformación Visible en 28 Días",
      subtitle: "Prueba dermatológica en alta resolución polarizada VISIA-CR bajo supervisión médica doble ciego.",
      day0Label: "Día 0 (Estado Inicial)",
      day0Desc: "Microarrugas, flacidez, tono apagado y barrera cutánea debilitada",
      day28Label: "Día 28 (Tras PeptiDerm)",
      day28Desc: "Firmeza dérmica profunda, contorno mandibular redefinido y textura suave y radiante",
      dragPrompt: "Desliza el control para comparar Día 0 vs Día 28",
      cta: "Comprobar la Transformación en 28 Días"
    },
    contradictionBuster: {
      badge: "RUPTURA DIALÉCTICA",
      title: "Por qué el Antienvejecimiento Tradicional Falla y Cómo PeptiDerm lo Resuelve",
      subtitle: "El cuidado de la piel ha estado atrapado en sacrificios inaceptables. PeptiDerm utiliza bio-mimetismo molecular para superar estas limitaciones.",
      traditionalTitle: "Dilema Tradicional",
      breakthroughTitle: "Solución Molecular PeptiDerm",
      cards: [
        {
          id: "1",
          title: "Alta Eficacia vs. Irritación Severa",
          traditional: "El Retinol puro y los AHA provocan descamación, ardor, rojeces y colapso de la barrera cutánea.",
          peptiDerm: "7 Péptidos bio-miméticos estimulan el colágeno sin estrés celular citotóxico.",
          stat: "99.8%",
          statLabel: "Tolerancia Sin Irritación"
        },
        {
          id: "2",
          title: "Nutrición Profunda vs. Poros Grasos",
          traditional: "Las cremas espesas con aceites minerales obstruyen los poros y producen brillos molestos.",
          peptiDerm: "Una matriz lipídica microemulsionada penetra en 3.2 segundos dejando un escudo mate aterciopelado.",
          stat: "3.2s",
          statLabel: "Absorción Flash"
        },
        {
          id: "3",
          title: "Efecto Visual Momentáneo vs. Reparación Celular Duradera",
          traditional: "Las siliconas cosméticas ofrecen un efecto tensor de 2 horas que desaparece al lavarse la cara.",
          peptiDerm: "Doble acción: matriz tensora superficial instantánea + síntesis profunda de colágeno I en 28 días.",
          stat: "+68.4%",
          statLabel: "Aumento de Pro-Colágeno I"
        },
        {
          id: "4",
          title: "Inyecciones Costosas vs. Cuidado Diario en Casa",
          traditional: "El bótox y los hilos tensores requieren miles de dólares, dolor y tiempo de recuperación.",
          peptiDerm: "El Acetil Hexapéptido-8 (Argireline) relaja las microtensiones de expresión sin dolor cada mañana y noche.",
          stat: "-42.8%",
          statLabel: "Profundidad Líneas de Expresión"
        }
      ]
    },
    clinicalScience: {
      badge: "DATOS CLÍNICOS DOBLE CIEGO",
      title: "Científicamente Validado por Laboratorios Suizos Independientes",
      subtitle: "Ensayo clínico aleatorizado doble ciego de 28 días realizado en 120 participantes con diversos fototipos de piel.",
      metrics: [
        { label: "Reducción de Volumen de Arrugas", value: "-42.8%", timeframe: "28 Días", note: "Medido por Perfilometría Óptica 3D" },
        { label: "Densidad de Colágeno y Elastina", value: "+68.4%", timeframe: "28 Días", note: "Ecografía Cutánea de Alta Frecuencia (20MHz)" },
        { label: "Retención de Humedad Epidérmica", value: "+84.2%", timeframe: "2 Horas", note: "Corneometría CM 825" },
        { label: "Pérdida Transepidérmica de Agua", value: "-36.5%", timeframe: "14 Días", note: "Tewametría TM 300" }
      ]
    },
    activeIngredients: {
      badge: "FÓRMULA BIOACTIVA",
      title: "7 Péptidos Señal Bio-Miméticos Específicos",
      subtitle: "Dosificados a porcentajes activos clínicos con 0% de agentes de carga, fragancias o parabenos.",
      ingredients: [
        { name: "Palmitoil Tripéptido-1", role: "Síntesis de Colágeno", target: "Dermis", desc: "Estimula la producción de pro-colágeno I y fibronectina." },
        { name: "Palmitoil Tetrapéptido-7", role: "Antiinflamatorio y Firmeza", target: "Unión Dermoepidérmica", desc: "Reduce la interleucina-6 para prevenir la glicación y el descolgamiento." },
        { name: "Acetil Hexapéptido-8 (Argireline)", role: "Relajación Líneas de Expresión", target: "Unión Neuromuscular", desc: "Reduce las microcontracciones musculares con efecto alisador tipo bótox." },
        { name: "Tripéptido de Cobre-1 (GHK-Cu)", role: "Reparación de ADN Celular", target: "Capa Basal", desc: "Potencia la vitalidad de las células madre y las vías de cicatrización cutánea." },
        { name: "Oligopéptido-1 (EGF)", role: "Regeneración Epidérmica", target: "Estrato Córneo", desc: "Acelera el ciclo de renovación celular de 45 días a solo 28 días." },
        { name: "Complejo Tri-Ácido Hialurónico", role: "Hidratación Multi-Profundidad", target: "Todas las Capas", desc: "Pesos moleculares macro, micro y nano para 72 horas de hidratación continua." },
        { name: "Fitoescualano y Ceramida NP", role: "Fortalecimiento de la Barrera", target: "Manto Lipídico", desc: "Lípidos biocompatibles que restauran el escudo protector de la piel." }
      ]
    },
    comparisonTable: {
      badge: "COMPARATIVA IMPARCIAL",
      title: "Por qué PeptiDerm Supera al Mercado Tradicional",
      subtitle: "Comparación científica directa frente a los tratamientos antiedad convencionales.",
      columns: ["Métrica Clínica", "PeptiDerm™ Cellular", "Retinol Concentrado", "Hidratante Tradicional"],
      rows: [
        { feature: "Seguridad de la Barrera Cutánea", peptiDerm: "100% No Irritante • 0% Descamación", retinol: "Provoca enrojecimiento, descamación e irritación", trad: "Seguro pero sin efecto antiedad celular" },
        { feature: "Inducción Dérmica de Colágeno", peptiDerm: "+68.4% Probado en 28 Días", retinol: "Eficaz pero debilita la barrera", trad: "0% síntesis de colágeno" },
        { feature: "Uso Versátil Día y Noche", peptiDerm: "Fotoestable • Compatible con el sol", retinol: "Solo de noche • Altamente fotosensibilizante", trad: "Compatible día y noche" },
        { feature: "Velocidad de Absorción", peptiDerm: "3.2 Segundos Acabado Mate", retinol: "Frecuentemente grasoso o pesado", trad: "Deja película grasa en la piel" },
        { feature: "Integridad del Envase", peptiDerm: "Frasco Médico Airless al Vacío", retinol: "El tarro abierto oxida los activos", trad: "Tarro convencional sin protección" }
      ]
    },
    routineGuide: {
      badge: "PROTOCOLO DE APLICACIÓN",
      title: "Protocolo Optimizado de Mañana y Noche",
      subtitle: "Sencilla aplicación clínica en 2 pasos que toma menos de 60 segundos al día.",
      morning: {
        title: "Rutina de Mañana: Proteger y Energizar",
        steps: [
          "Limpiar el rostro con agua tibia suave",
          "Aplicar 1-2 pulsaciones de crema PeptiDerm en las yemas de los dedos",
          "Masajear suavemente de manera ascendente por la mandíbula y frente",
          "Aplicar protector solar SPF 50+ para una protección diurna total"
        ]
      },
      night: {
        title: "Rutina de Noche: Regeneración Celular",
        steps: [
          "Doble limpieza para retirar impurezas del ambiente y maquillaje",
          "Aplicar 2 pulsaciones completas de PeptiDerm en rostro y cuello",
          "Usar la espátula cryo de zinc para esculpir el contorno mandibular durante 60s",
          "Dejar que los péptidos reparen la matriz celular durante las horas de sueño"
        ]
      }
    },
    whatsInBox: {
      badge: "ENVASADO DE GRADO MÉDICO",
      title: "Qué Incluye su Pedido",
      subtitle: "Cada pedido se envía en un envase médico sellado y esterilizado contra manipulaciones.",
      items: [
        { name: "Frasco Airless al Vacío PeptiDerm™", desc: "Dispensador médico de doble pistón que previene al 100% la oxidación y contaminación bacteriana." },
        { name: "Espátula Cryo Esculpidora en Aleación de Zinc", desc: "Aplicador metálico refrescante para dosificación higiénica y masaje de drenaje linfático." },
        { name: "Diario de Seguimiento Cutáneo 28 Días", desc: "Guía de medición visual diseñada por dermatólogos para registrar la reducción de arrugas semanalmente." },
        { name: "Certificado de Análisis Clínico (COA)", desc: "Verificación de lote avalando la no irritación SGS Suiza y el 99.8% de pureza de los péptidos." }
      ]
    },
    reviews: {
      badge: "PACIENTES Y DERMATÓLOGOS VERIFICADOS",
      title: "Resultados Reales de Médicos y Clientes",
      subtitle: "Más de 3,800 compradores verificados otorgan a PeptiDerm una calificación media de 4.96/5 estrellas.",
      verified: "Comprador Verificado",
      dermatologist: "Dermatólogo Certificado",
      filterAll: "Todas las Reseñas (3,842)",
      filterVerified: "Solo Pedidos Verificados",
      filterPhotos: "Con Fotografías",
      items: [
        {
          author: "Dra. Elena Rostova, MD",
          age: 46,
          skinType: "Sensible / Madura",
          variant: "Doble Tratamiento Clínico Intensivo 100ml",
          rating: 5,
          title: "La única crema que receto a pacientes con intolerancia al Retinol",
          content: "Como dermatóloga en ejercicio, mi mayor reto eran pacientes con barrera dañada que no toleraban los retinoides. PeptiDerm logra una estimulación idéntica de colágeno sin causar deshidratación ni descamación. Una formulación excepcional."
        },
        {
          author: "Sophie Laurent",
          age: 38,
          skinType: "Mixta / Primeras Líneas",
          variant: "Tratamiento Celular Fundamental 50ml",
          rating: 5,
          title: "¡Mis surcos nasogenianos se atenuaron visiblemente en solo 3 semanas!",
          content: "Tenía dudas porque la mayoría de las cremas se quedan grasosas en la superficie. PeptiDerm se absorbe en segundos. Mi rostro luce relleno y las líneas de expresión de los ojos se han suavizado muchísimo."
        },
        {
          author: "Carlos Morales",
          age: 52,
          skinType: "Seca / Fotoenvejecida",
          variant: "Doble Tratamiento Clínico Intensivo 100ml",
          rating: 5,
          title: "Firmeza y definición notable en cuello y mandíbula",
          content: "Compré el kit de 100ml con la espátula metálica. Usarla cada noche ha transformado la textura de mi cuello y borrado las manchas del sol tras años de deporte al aire libre."
        }
      ]
    },
    faq: {
      badge: "PREGUNTAS FRECUENTES",
      title: "Preguntas y Respuestas Dermatológicas",
      subtitle: "Todo lo que necesita saber sobre la ciencia de péptidos, modo de empleo, envíos y garantías.",
      items: [
        {
          q: "¿En cuánto tiempo podré ver resultados visibles?",
          a: "En ensayos clínicos, el 94% de las participantes notó hidratación instantánea y suavidad en 30 minutos. La reestructuración profunda de colágeno, reducción de arrugas (-42.8%) y firmeza del contorno facial se aprecian notablemente entre los días 14 y 28."
        },
        {
          q: "¿Es PeptiDerm seguro para pieles muy sensibles o con rosácea?",
          a: "¡Sí! A diferencia del Retinol o los Ácidos Glicólicos, PeptiDerm no contiene fragancias, alcohol ni parabenos. Fue probado por laboratorios SGS Suiza en 120 sujetos de piel sensible con una tasa de tolerancia del 99.8% sin reacciones adversas."
        },
        {
          q: "¿Puedo combinar PeptiDerm con mi Vitamina C y protector solar?",
          a: "Totalmente. Los péptidos bio-miméticos de PeptiDerm son fotoestables y tienen un pH neutro fisiológico (pH 5.5). Funciona a la perfección bajo un SPF 50 durante el día y junto a sus sérums de noche."
        },
        {
          q: "¿Cuál es su política de garantía y devolución?",
          a: "Ofrecemos una garantía incondicional de devolución de dinero de 30 días. Si no observa una mejora visible en la firmeza y textura de su piel, simplemente escriba a nuestro soporte clínico para un reembolso total inmediato."
        }
      ]
    },
    finalCta: {
      badge: "LOTE DE LABORATORIO LIMITADO",
      title: "Transforme su Piel con Precisión Dermatológica Hoy",
      subtitle: "Acceda a la renovación celular multi-péptidos de grado médico. Sin riesgo por 30 días con envío mundial con seguimiento gratuito.",
      orderNow: "Pedir Mi Frasco Clínico",
      stockWarning: "Solo quedan 11 unidades en la lista de despacho estéril de hoy.",
      deliveryNotice: "Despacho en 24 horas mediante mensajería express asegurada."
    },
    stickyMobile: {
      orderNow: "Comprar Ahora",
      save: "Ahorra"
    },
    modal: {
      title: "Carrito y Pago Seguro Instantáneo Shopify",
      subtitle: "Despacho Médico Directo PeptiDerm™",
      course: "Tratamiento Seleccionado",
      orderConfirmed: "¡Pedido Confirmado con Éxito!",
      orderId: "ID de Pedido",
      dispatchNotice: "Despacho Express en 24 horas",
      quantity: "Cantidad",
      promoCode: "Código de Descuento Clínico",
      apply: "Aplicar",
      applied: "Descuento VIP de Laboratorio del 10% Aplicado",
      subtotal: "Subtotal",
      discount: "Descuento",
      shipping: "Envío Express Mundial",
      free: "GRATIS",
      total: "Total Final",
      giftsIncluded: "Regalos Médicos Incluidos:",
      instantCheckout: "Proceder al Pago Seguro",
      processing: "Estableciendo conexión segura SSL de 256 bits...",
      guaranteeNotice: "Garantía de Devolución de 30 Días • Envío Médico Cifrado"
    },
    footer: {
      brand: "Laboratorios de Dermatología Clínica PeptiDerm™",
      cert: "Certificado ISO 22716 / BPF (GMP)",
      desc: "Crema de Renovación Celular Multi-Péptidos • Formulada con 7 péptidos señal bio-miméticos específicos. Integración 1:1 con SKUs multivariante de Shopify ($29 / $49 / $79) y pasarela de pago instantáneo.",
      rights: "Todos los derechos reservados.",
      disclaimer: "Fabricado en Sala Limpia GMP Clase 100,000 • Certificado No Irritante SGS Suiza • 100% Libre de Crueldad Animal • Pago Cifrado SSL 256-Bit"
    }
  }
};
