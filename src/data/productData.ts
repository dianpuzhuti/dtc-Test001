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
  brand: "PeptiDerm™ 实验室",
  name: "多肽细胞更新抗衰保湿霜",
  englishName: "Cellular Renewal Multi-Peptide Cream",
  modelCode: "PD-CLINICAL-07",
  tagline: "突破抗衰与耐受的对立矛盾 • 7重仿生信号肽深透真皮层促生胶原",
  dermatologyGrade: "临床医学级 (Clinical Dermatology Grade)",
  rating: 4.96,
  reviewCount: 3842,
  repurchaseRate: 88.6,
  currencySymbol: "$",
  shipping: "全球顺丰/DHL包邮 (Free Tracked Shipping)",
  returns: "30天无理由退款保障 (30-Day Money Back Guarantee)",
  guarantee: "临床双盲实验认证 • 0%香精/酒精/矿物油",
};

export const PRODUCT_VARIANTS: ProductVariant[] = [
  {
    id: "variant-30ml",
    size: "30ml",
    volume: "30ml / 1.0 fl.oz",
    name: "30ml 尝鲜体验装 (Starter Discovery)",
    subTitle: "初次体验 • 感受3秒瞬吸与水润提亮",
    sellingPrice: 29.0,
    compareAtPrice: 49.0,
    savings: 20.0,
    savingsPercent: 41,
    badge: "初次尝鲜",
    isPopular: false,
    isBestValue: false,
    supplyDuration: "约 2-3 周用量 (Daily Trial)",
    includesGifts: ["便携双层密封包装", "基础护肤使用指导卡"],
    stockLeft: 23,
    sku: "PD-CRM-30ML",
    imageUrl: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "variant-50ml",
    size: "50ml",
    volume: "50ml / 1.7 fl.oz",
    name: "50ml 经典抗衰装 (Core Treatment)",
    subTitle: "皮肤科医生推荐 • 见证28天细胞新生与淡纹",
    sellingPrice: 49.0,
    compareAtPrice: 79.0,
    savings: 30.0,
    savingsPercent: 38,
    badge: "🔥 82% 用户首选",
    isPopular: true,
    isBestValue: false,
    supplyDuration: "约 6-8 周标准代谢周期 (Full 28-Day Cycle)",
    includesGifts: [
      "赠 医用级冷感锌合金微导按摩勺 ($18价值)",
      "赠 28天细胞逆龄皮肤追踪手册",
      "全境极速免费包邮"
    ],
    stockLeft: 11,
    sku: "PD-CRM-50ML",
    imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "variant-100ml",
    size: "100ml",
    volume: "100ml / 3.4 fl.oz",
    name: "100ml 院线双倍疗程装 (Max Value Course)",
    subTitle: "面颈全效抗衰 • 深度重塑真皮胶原支撑网",
    sellingPrice: 79.0,
    compareAtPrice: 129.0,
    savings: 50.0,
    savingsPercent: 39,
    badge: "👑 最高性价比 / 深度疗程",
    isPopular: false,
    isBestValue: true,
    supplyDuration: "约 3-4 个月全周期巩固 (Extended Course)",
    includesGifts: [
      "赠 30ml 独立便携旅行装 ($29价值)",
      "赠 医用级冷感锌合金微导按摩勺 ($18价值)",
      "赠 终身VIP会员资格与定期皮肤科专家回访",
      "优先顺丰次日达发货"
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

// 矛盾论核心破局点 (Dialectical Contradiction Busters)
export const DIALECTICAL_CONTRADICTIONS: DialecticalContradiction[] = [
  {
    id: "contradiction-tolerance",
    title: "矛盾一：强效抗衰 vs. 屏障耐受",
    coreContradiction: "“有效的不敢用，敢用的没效果”",
    traditionalPain: "传统高浓A醇/果酸强行剥脱角质，极易引起刺痛、泛红、脱屑脱皮、爆痘，甚至彻底破坏皮脂膜；而普通植物提取物温和却无法穿透基底膜刺激胶原。",
    traditionalWhy: "传统化学剥脱机制是破坏性再生，以牺牲屏障为代价换取短暂表皮代谢。",
    peptiDermBreakthrough: "生物仿生信号多肽技术（Bio-mimetic Signal Peptides）",
    molecularMechanism: "不破坏表皮角质层，直接模拟细胞内源信号与成纤维细胞受体结合，靶向激活 I/III 型胶原蛋白与弹性蛋白自生，温和度堪比生理盐水。",
    clinicalProof: "0脱皮、0泛红、无需建立耐受。敏感肌、早晚、刷酸受损期均可直接使用。",
    statNumber: "99.8%",
    statLabel: "临床受试者0不良刺激反应率",
    accentColor: "blue",
  },
  {
    id: "contradiction-texture",
    title: "矛盾二：深度滋润修护 vs. 清爽哑光不闷痘",
    coreContradiction: "“滋润的太厚重闷闭口，清爽的浮于表面2小时挥发”",
    traditionalPain: "传统抗衰面霜依赖高比例矿物油、石蜡与合成酯封包，涂抹黏腻厚重、油光满面、引发闭口粉刺；清爽凝胶乳液却在空调房迅速蒸发，无法长效锁水。",
    traditionalWhy: "传统油水乳化颗粒粗大（>5000nm），无法进入毛孔间隙，只能悬浮在皮肤表面氧化堵塞。",
    peptiDermBreakthrough: "液晶仿生微囊递送系统（Liquid Crystal Micro-Liposome）",
    molecularMechanism: "利用高纯植物角鲨烷与5重仿生神经酰胺，构建与人体天然皮脂膜结构1:1贴合的纳米微囊（<80nm），3秒瞬透皮下，形成透气微孔锁水网。",
    clinicalProof: "融雪冰淇淋质地，哑光吸收不泛油光。油皮不闷痘、干皮恒润24小时。",
    statNumber: "89.4%",
    statLabel: "24小时经皮水分流失率(TEWL)降低",
    accentColor: "cyan",
  },
  {
    id: "contradiction-longevity",
    title: "矛盾三：即时紧致抚纹 vs. 长期基底抗老",
    coreContradiction: "“即时成膜洗脸就打回原形 vs. 长期调理见效遥遥无期”",
    traditionalPain: "市面即时紧致霜充斥高分子硅油、成膜剂与云母闪粉，制造10分钟‘假滑紧绷’视错觉，一洗脸皱纹依然在；普通调理品使用三个月毫无肉眼可见改变。",
    traditionalWhy: "物理物理膜仅在角质层表面张拉，并未解决真皮层细胞衰老塌陷与ECM基质降解根源。",
    peptiDermBreakthrough: "双轨立体胶原重构（Dual-Phase Anti-Aging Matrix）",
    molecularMechanism: "即时层：小分子微交联多糖网络10分钟舒缓表层表情肌微张力；根源层：乙酰基六肽-8与蓝铜胜肽28天内源性促生胶原与细胞外基质。",
    clinicalProof: "即刻抚平干纹，28天临床双盲实验证实真皮层胶原密度增加+68.4%，停用不反弹。",
    statNumber: "-42.8%",
    statLabel: "28天深层皱纹容积减少率",
    accentColor: "indigo",
  },
];

// 核心多肽与有效成分表
export const ACTIVE_INGREDIENTS: ActiveIngredient[] = [
  {
    id: "hexapeptide-8",
    name: "乙酰基六肽-8 (Argireline®)",
    chemicalName: "Acetyl Hexapeptide-8",
    purity: "99.4% 医药级纯度",
    role: "类肉毒靶向抚纹肽",
    skinLayer: "表情肌神经突触受体",
    mechanism: "靶向阻断SNARE蛋白复合体组装，舒缓面部动态表情肌微收缩，从源头淡化抬头纹、鱼尾纹与法令纹。",
    benefit: "抚平动态皱纹，预防静态真性纹生成",
  },
  {
    id: "copper-peptide",
    name: "高活性蓝铜胜肽 (GHK-Cu)",
    chemicalName: "Copper Tripeptide-1",
    purity: "99.8% 结晶纯度",
    role: "基底胶原促生与创面修护",
    skinLayer: "真皮层成纤维细胞",
    mechanism: "微量铜元素与三肽螯合，强力激活胶原蛋白（Col-I, Col-III）合成与糖胺聚糖（GAGs）生成，加速细胞自噬清理老旧废弃物。",
    benefit: "充盈苹果肌，重塑下颌线紧致轮廓",
  },
  {
    id: "matrixyl-3000",
    name: "Matrixyl® 3000 复合多肽",
    chemicalName: "Palmitoyl Tripeptide-1 & 7",
    purity: "法国专利配方",
    role: "细胞外基质ECM修复因子",
    skinLayer: "真皮表皮连接处(DEJ)",
    mechanism: "协同调节TGF-β信号通路，刺激基底膜层层网状纤维新生，修复日光紫外线造成的深层光老化塌陷。",
    benefit: "修复深层光损伤，恢复肌肤幼态弹力",
  },
  {
    id: "carnosine",
    name: "左旋脱羧肌肽 (Carnosine)",
    chemicalName: "L-Carnosine Dipeptide",
    purity: "99.9% 生物活性级",
    role: "双重抗糖化 & 抗氧化屏障",
    skinLayer: "全皮层细胞间质",
    mechanism: "代替胶原蛋白优先与游离糖基结合，逆转AGEs糖基化终产物，保护胶原纤维不发黄、不硬化断裂。",
    benefit: "击退暗沉熬夜脸，透出通透冷白光泽",
  },
  {
    id: "ceramides",
    name: "5重仿生神经酰胺复合物",
    chemicalName: "Ceramide NP/AP/EOP/NS/AS",
    purity: "脂质体包裹技术",
    role: "皮脂膜生理砖墙结构修复",
    skinLayer: "角质层皮脂屏障",
    mechanism: "按照天然皮脂3:1:1黄金比例（神经酰胺:胆固醇:游离脂肪酸）配比，瞬间浇筑受损屏障，牢牢锁住多肽活性成分。",
    benefit: "强韧脆弱屏障，杜绝经皮水分流失",
  },
  {
    id: "squalane",
    name: "高纯植物角鲨烷 (Squalane)",
    chemicalName: "Phytosqualane 99.9%",
    purity: "甘蔗发酵萃取",
    role: "仿生皮脂与纳米促渗载体",
    skinLayer: "表皮微生态层",
    mechanism: "与人体皮脂结构完全一致，无排异亲和力，包裹多肽成分直穿角质间隙，实现3秒哑光瞬吸。",
    benefit: "轻盈不闷痘，长效维稳水油平衡",
  },
];

// 28天双盲临床实验数据 (Clinical Trial Data)
export const CLINICAL_TRIAL_RESULTS: ClinicalTrialResult[] = [
  {
    id: "metric-wrinkles",
    metric: "皱纹深度与容积",
    changeValue: "-42.8%",
    changeDirection: "decrease",
    timeframe: "连续使用 28 天",
    sampleSize: "n=60 名 28-55 岁女性临床双盲测试",
    description: "通过 VISIA-CR 与 PRIMOS 3D 皮肤三维成像仪测量，鱼尾纹及法令纹凹陷容积显著减小，表皮平整度提升。",
    methodology: "PRIMOS 3D 光学微地形扫描",
  },
  {
    id: "metric-elasticity",
    metric: "真皮层胶原紧实度 (R2)",
    changeValue: "+68.4%",
    changeDirection: "increase",
    timeframe: "连续使用 28 天",
    sampleSize: "n=60 名 28-55 岁女性临床双盲测试",
    description: "高频超声真皮回声强度大幅增强，基底成纤维细胞胶原分泌量大幅增加，下颌线条紧致上提。",
    methodology: "DermaLab 高频皮肤超声回声探头",
  },
  {
    id: "metric-barrier",
    metric: "屏障锁水保湿度 (TEWL)",
    changeValue: "+89.2%",
    changeDirection: "increase",
    timeframe: "单次涂抹 12 小时后",
    sampleSize: "n=60 名不同肤质受试者",
    description: "角质层含水量持续处于健康饱满状态，经表皮失水率降低 64.7%，全天候维持水润清透状态。",
    methodology: "Tewameter® 经皮水分散失仪",
  },
  {
    id: "metric-tolerance",
    metric: "敏感肌临床耐受率",
    changeValue: "99.8%",
    changeDirection: "increase",
    timeframe: "为期 4 周持续监测",
    sampleSize: "包含 30 名红血丝敏感肌受试者",
    description: "0 例出现刺痛、灼热、脱皮或闭口现象。温和亲肤性获瑞士 SGS 临床无刺激安全认证。",
    methodology: "人体斑贴试验 & 皮肤科医师临床评分",
  },
];

// 矛盾论维度对比矩阵 (Dialectical Comparison Table)
export const COMPARISON_DATA: ComparisonRow[] = [
  {
    feature: "抗衰作用机理",
    peptiDerm: {
      text: "7重仿生信号肽细胞靶向激活",
      isHighlight: true,
      subtext: "模拟自体生物信号，内源性促生I/III型胶原蛋白",
    },
    retinolCream: {
      text: "维A酸强行剥脱角质与化学代谢",
      isNegative: true,
    },
    traditionalMoisturizer: {
      text: "仅表皮甘油吸水，无法作用于真皮层",
      isNegative: true,
    },
  },
  {
    feature: "皮肤耐受与敏感度",
    peptiDerm: {
      text: "99.8% 极高耐受 • 敏感肌直接用",
      isHighlight: true,
      subtext: "0% 剥脱损伤，无需建立耐受，早晚皆宜",
    },
    retinolCream: {
      text: "易泛红、刺痛、脱皮脱屑、需建立耐受",
      isNegative: true,
    },
    traditionalMoisturizer: {
      text: "温和但无抗衰修护机能",
    },
  },
  {
    feature: "肤感质地与透气性",
    peptiDerm: {
      text: "融雪微囊 3秒瞬透 • 哑光透气",
      isHighlight: true,
      subtext: "角鲨烷仿生透气膜，油皮不闷、干皮恒润",
    },
    retinolCream: {
      text: "为缓解刺激常配复厚重矿脂，易闷闭口",
      isNegative: true,
    },
    traditionalMoisturizer: {
      text: "油腻浮于表面或2小时挥发变干",
      isNegative: true,
    },
  },
  {
    feature: "日间光敏性",
    peptiDerm: {
      text: "无光敏性 • 早晚均可安心涂抹",
      isHighlight: true,
      subtext: "内含肌肽抗光老化，白天抵抗紫外线糖化",
    },
    retinolCream: {
      text: "强光敏性，白天使用易反黑反干",
      isNegative: true,
    },
    traditionalMoisturizer: {
      text: "无光敏，但无日间抗光老化防护",
    },
  },
  {
    feature: "28天胶原逆龄效果",
    peptiDerm: {
      text: "临床双盲证实 -42.8% 皱纹深度",
      isHighlight: true,
      subtext: "停用后真皮胶原不塌陷反弹",
    },
    retinolCream: {
      text: "停用后表皮角质增厚，皱纹易反扑",
      isNegative: true,
    },
    traditionalMoisturizer: {
      text: "无实质淡纹紧致效果",
      isNegative: true,
    },
  },
  {
    feature: "配方纯净度承诺",
    peptiDerm: {
      text: "0香精/0酒精/0矿物油/0防腐剂",
      isHighlight: true,
      subtext: "医药级无菌真空锁鲜灌装",
    },
    retinolCream: {
      text: "常添加防腐剂以稳定活性",
    },
    traditionalMoisturizer: {
      text: "多含大量合成香精、防腐剂与增稠剂",
      isNegative: true,
    },
  },
];

// 包装与配件清单
export const WHATS_IN_THE_BOX_DATA: WhatsInBoxItem[] = [
  {
    id: "item-cream-jar",
    name: "PeptiDerm 多肽细胞更新抗衰保湿霜",
    quantity: "1 瓶 (按选定规格 30ml/50ml/100ml)",
    description: "采用医用级阻氧遮光双层真空泵瓶，彻底隔绝光线与空气，锁死多肽分子与蓝铜胜肽的99.8%活性。",
    clinicalSpec: "医药级高分子避光材质 • 定量真空按压出料",
  },
  {
    id: "item-micro-spatula",
    name: "医用冷感锌合金微导按摩取样勺",
    quantity: "1 支 (50ml & 100ml 免费赠送)",
    description: "符合人体工学微弧面设计，不仅隔绝手部细菌污染，更可在眼周、法令纹处进行冷感微循环提拉引流。",
    clinicalSpec: "医用级无菌锌合金镀层 • 抑菌自洁",
  },
  {
    id: "item-tracker-card",
    name: "28天细胞代谢逆龄追踪日志卡",
    quantity: "1 份",
    description: "由皮肤科团队编制的专业打卡追踪卡，提供每周胶原新生自检指标与科学按摩手法图解。",
    clinicalSpec: "专业皮肤科临床护理指导标准",
  },
  {
    id: "item-seal-box",
    name: "医用无菌防伪密封包装盒",
    quantity: "1 个",
    description: "每一盒均附带独一无二的实验室生产批次溯源码与 SGS 临床检测防伪密封封条。",
    clinicalSpec: "十万级无尘 GMP 制药车间封装",
  },
];

// 用户真实临床与购买评价
export const REVIEWS_LIST: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Dr. 林雅文 (皮肤科主治医师 / 敏弱肌用户)",
    age: 38,
    skinType: "干性敏弱肌 • 曾经历A醇翻车",
    variantPurchased: "100ml 院线双倍疗程装",
    rating: 5,
    timeUsed: "连续使用 6 周",
    title: "“终于有一款兼具猛药级淡纹效果与生理级温和的面霜”",
    content: "作为皮肤科医生，我见过太多因为跟风早C晚A导致屏障彻底垮掉的患者。PeptiDerm 采用的生物信号肽路线非常聪明，利用细胞间通讯机制直接指挥胶原再生。我自己在刷酸脱皮期使用它，上脸3秒吸收，没有任何刺痛感。用仪器测试我的法令纹区域，真皮层回声密度确实增加了30%以上。",
    verifiedBuyer: true,
    dermatologistNote: "临床受试推荐 • 适合屏障受损及敏感肌抗老",
  },
  {
    id: "rev-2",
    author: "张思涵 (金融高管 / 经常熬夜出差)",
    age: 32,
    skinType: "混油皮 • 容易水油失衡与长闭口",
    variantPurchased: "50ml 经典抗衰装",
    rating: 5,
    timeUsed: "连续使用 28 天",
    title: "“油皮也可以闭眼入的抗老霜，早上起来脸是软糯哑光的”",
    content: "以前买过很多大牌抗老面霜，要么太油闷出一脑门闭口，要么太薄干到起皮。这款融雪质地太神奇了，涂在脸上就像化成水一样直接吃进皮肤里，完全不黏枕头。用了大概三周，最明显的是原本因为熬夜发黄暗沉的嘴角和眼下，变得透亮紧绷，化妆再也没卡过粉！",
    verifiedBuyer: true,
  },
  {
    id: "rev-3",
    author: "陈晓敏 (全职妈妈 / 关注颈纹与法令纹)",
    age: 44,
    skinType: "熟龄干性肌 • 抬头纹与法令纹明显",
    variantPurchased: "100ml 院线双倍疗程装",
    rating: 5,
    timeUsed: "连续使用 2 个月",
    title: "“双倍疗程装拿来抹脖子和全脸，下颌线明显紧致上提”",
    content: "生完二胎后感觉胶原蛋白断崖式流失，法令纹深得显老5岁。抱着试一试心态买了100ml装。配合送的锌合金勺子每天往上提拉按摩，两个月下来，法令纹肉眼可见浅了一大截，下颌缘的肉没有以前那么垮了。老公都说我最近气色像回到了三十出头。",
    verifiedBuyer: true,
  },
  {
    id: "rev-4",
    author: "赵雪琪 (美妆测评博主)",
    age: 27,
    skinType: "敏感中性肌 • 动态干纹初老",
    variantPurchased: "50ml 经典抗衰装",
    rating: 5,
    timeUsed: "连续使用 3 周",
    title: "“配方表极其华丽干脆，把钱真正花在刀刃活性肽上”",
    content: "查了成分表，乙酰基六肽-8加蓝铜胜肽排在非常靠前的位置，没有乱七八糟的香精增稠剂防腐剂，全靠神经酰胺和角鲨烷做基底。这种配方成本极高，但在市面上卖这个价格堪称降维打击。已经回购了100ml装屯着。",
    verifiedBuyer: true,
  },
];

// 核心 FAQ 清单
export const FAQ_LIST: FAQItem[] = [
  {
    id: "faq-retinol-diff",
    category: "配方机理",
    question: "PeptiDerm 与市面上的 A醇(视黄醇) 面霜有什么本质区别？",
    answer: "A醇属于化学剥脱与表皮强刺激机制，虽有抗老效果但极易导致角质层变薄、泛红刺痛、脱皮甚至屏障受损，且具有强烈日光光敏性。PeptiDerm 采用的是仿生多肽细胞信号机制，直接靶向刺激真皮成纤维细胞促生胶原，不破坏表皮，耐受度高达99.8%，早晚均可使用，无光敏性，无需建立耐受。",
  },
  {
    id: "faq-sensitive-skin",
    category: "肤质适用",
    question: "敏感肌、医美光电术后、或屏障受损期可以使用吗？",
    answer: "完全可以。本品经过皮肤科严格斑贴与人体双盲测试，配方中严格剔除酒精、香精、矿物油、传统防腐剂等致敏源。内含高活性蓝铜胜肽与5重仿生神经酰胺，在抗衰淡纹的同时具有卓越的皮脂膜砖墙重筑与褪红镇静功效，非常适合敏感肌及屏障修护期安心使用。",
  },
  {
    id: "faq-timeline",
    category: "见效周期",
    question: "通常需要使用多久才能看到明显的淡纹与紧致效果？",
    answer: "【即刻使用 (10分钟)】：小分子微囊迅速渗透，经皮水分流失率骤降，干纹得到即刻充盈平抚，肤感柔嫩水润；【14天】：细胞代谢更新启动，皮肤暗沉改善，细腻度与弹性明显上升；【28天完整周期】：临床双盲证实真皮层胶原密度平均提升+68.4%，深层皱纹深度减少-42.8%，下颌线条重获紧实支撑。",
  },
  {
    id: "faq-texture-breakout",
    category: "使用肤感",
    question: "我是油性皮肤/混油皮，使用后会闷痘或感觉厚重油腻吗？",
    answer: "不会。PeptiDerm 摒弃了传统抗衰面霜常用的封闭性厚重矿物油与合成蜡，采用纳米液晶微囊融雪乳化技术。触肤即化，3秒哑光吸收，只在表层留下透气仿生皮脂锁水膜。经临床测试，油皮受试者闭口粉刺发生率为 0%，水油平衡显著改善。",
  },
  {
    id: "faq-routine-order",
    category: "搭配使用",
    question: "在日常护肤步骤中，应该在第几步使用？可以与VC或果酸叠加吗？",
    answer: "洁面、爽肤水/精华液后，取黄豆大小均匀涂抹于面部与颈部即可。由于多肽分子结构稳定且极为温和，可完美兼容维生素C、烟酰胺、透明质酸、B5及各类果酸产品，不会产生配方冲突或刺激倍增效应。",
  },
  {
    id: "faq-shopify-shipping",
    category: "售后与物流",
    question: "下单后多久发货？如果使用不满意如何退换？",
    answer: "所有订单在 24 小时内由顺丰/国际特快专递发出，提供全程物流追踪号。我们承诺 30 天无理由退款保障：若您在使用后对肤感或效果有任何不满意，联系客服即可全额退款，免去您的一切后顾之忧。",
  },
];
