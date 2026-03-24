export type ExclusiveProductBadge = 'exclusive' | 'new' | 'trending' | 'sale' | 'sold' | '10off' | 'sponsored';

export interface ExclusiveProduct {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badges?: ExclusiveProductBadge[];
  hasVideo?: boolean;
  /** URL to product video - plays in modal when play button is clicked */
  videoUrl?: string;
  /** “57 LEFT” line above title (Limited Quantity grid) */
  quantityLeft?: number;
}

/** Sample video URLs for product cards (free to use for testing) */
const SAMPLE_VIDEOS = [
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreet.mp4',
] as const;
/** Get a sample video URL by index (for product cards). */
export const getSampleVideoUrl = (i: number) => SAMPLE_VIDEOS[i % SAMPLE_VIDEOS.length];
const vid = getSampleVideoUrl;

/** Horizontal scroller: "Exclusive on TibilMall" - 10% OFF, some SPONSORED */
export const EXCLUSIVE_HORIZONTAL_PRODUCTS: ExclusiveProduct[] = [
  { id: 'h1', name: "Men's half sleeve solid casual regular fit", price: 29, originalPrice: 33, image: '/images/signin.png', badges: ['10off', 'sponsored'], hasVideo: true, videoUrl: vid(0) },
  { id: 'h2', name: "Men's half sleeve solid casual regular fit", price: 29, originalPrice: 33, image: '/images/create.png', badges: ['10off', 'sponsored'], hasVideo: true, videoUrl: vid(1) },
  { id: 'h3', name: "Men's half sleeve solid casual regular fit", price: 29, originalPrice: 33, image: '/images/logo.png', badges: ['10off', 'sponsored'], hasVideo: true, videoUrl: vid(2) },
  { id: 'h4', name: "Men's half sleeve solid casual regular fit", price: 29, originalPrice: 33, image: '/images/forgot.png', badges: ['10off', 'sponsored'], hasVideo: true, videoUrl: vid(3) },
  { id: 'h5', name: "Men's half sleeve solid casual regular fit", price: 29, originalPrice: 33, image: '/images/otp.png', badges: ['10off', 'sponsored'], hasVideo: true, videoUrl: vid(4) },
  { id: 'h6', name: "Men's half sleeve solid casual regular fit", price: 29, originalPrice: 33, image: '/images/success.png', badges: ['10off', 'sponsored'], hasVideo: true, videoUrl: vid(5) },
];

/** Latest exclusive products - EXCLUSIVE (gradient purple) + NEW (blue); some without NEW */
export const LATEST_EXCLUSIVE_PRODUCTS: ExclusiveProduct[] = [
  { id: 'l1', name: "Men's half sleeve solid casual regular fit", price: 29, originalPrice: 33, image: '/images/signin.png', badges: [ 'new', 'sponsored'], hasVideo: true, videoUrl: vid(0) },
  { id: 'l2', name: "Men's half sleeve solid casual regular fit", price: 29, originalPrice: 33, image: '/images/create.png', badges: [ 'new'], hasVideo: true, videoUrl: vid(1) },
  { id: 'l3', name: "Men's half sleeve solid casual regular fit", price: 29, originalPrice: 33, image: '/images/logo.png', badges: ['new', 'sponsored'], hasVideo: true, videoUrl: vid(2) },
  { id: 'l4', name: "Men's half sleeve solid casual regular fit", price: 29, originalPrice: 33, image: '/images/forgot.png', badges: [ 'new'], hasVideo: false },
  { id: 'l5', name: "Men's half sleeve solid casual regular fit", price: 29, originalPrice: 33, image: '/images/otp.png', badges: [ 'new', 'sponsored'], hasVideo: true, videoUrl: vid(4) },
  { id: 'l6', name: "Men's half sleeve solid casual regular fit", price: 29, originalPrice: 33, image: '/images/success.png', badges: ['new', 'sponsored'], hasVideo: true, videoUrl: vid(5) },
];

/** Most sold - TRENDING (orange) + SALE (yellow); first card can have no tags */
export const MOST_SOLD_PRODUCTS: ExclusiveProduct[] = [
  { id: 's1', name: "Men's half sleeve solid casual regular fit", price: 29, originalPrice: 33, image: '/images/signin.png', badges: ['sponsored'], hasVideo: true, videoUrl: vid(0) },
  { id: 's2', name: "Men's half sleeve solid casual regular fit", price: 29, originalPrice: 33, image: '/images/create.png', badges: [ 'new'], hasVideo: true, videoUrl: vid(1) },
  { id: 's3', name: "Men's half sleeve solid casual regular fit", price: 29, originalPrice: 33, image: '/images/logo.png', badges: [ 'new'], hasVideo: true, videoUrl: vid(2) },
  { id: 's4', name: "Men's half sleeve solid casual regular fit", price: 27.99, originalPrice: 33, image: '/images/forgot.png', badges: [ 'sponsored'], hasVideo: false },
  { id: 's5', name: "Men's half sleeve solid casual regular fit", price: 12.99, originalPrice: 18, image: '/images/otp.png', badges: [], hasVideo: true, videoUrl: vid(4) },
  { id: 's6', name: "Men's half sleeve solid casual regular fit", price: 39.99, originalPrice: 45, image: '/images/success.png', badges: [], hasVideo: true, videoUrl: vid(5) },
];

/** Sponsored Exclusive - EXCLUSIVE (dark purple) + SPONSORED (dark blue), pointed badges */
export const SPONSORED_EXCLUSIVE_PRODUCTS: ExclusiveProduct[] = [
  { id: 'p1', name: "Men's half sleeve solid casual regular fit", price: 27.99, originalPrice: 33, image: '/images/signin.png', badges: ['sponsored', 'new'], hasVideo: true, videoUrl: vid(0) },
  { id: 'p2', name: "Men's half sleeve solid casual regular fit", price: 12.99, originalPrice: 18, image: '/images/create.png', badges: [ 'sponsored'], hasVideo: true, videoUrl: vid(1) },
  { id: 'p3', name: "Men's half sleeve solid casual regular fit", price: 39.99, originalPrice: 45, image: '/images/logo.png', badges: [ 'sponsored', 'new'], hasVideo: true, videoUrl: vid(2) },
  { id: 'p4', name: "Men's half sleeve solid casual regular fit", price: 29, originalPrice: 33, image: '/images/forgot.png', badges: [ 'sponsored'], hasVideo: false },
  { id: 'p5', name: "Men's half sleeve solid casual regular fit", price: 29, originalPrice: 33, image: '/images/otp.png', badges: [ 'sponsored'], hasVideo: true, videoUrl: vid(4) },
  { id: 'p6', name: "Men's half sleeve solid casual regular fit", price: 29, originalPrice: 33, image: '/images/success.png', badges: [ 'sponsored'], hasVideo: true, videoUrl: vid(5) },
];

const halfSleeve = "Men's Half Sleeve Solid Casual Reg...";

/** Shown when filter Time left → “Ending Soon” is selected */
export const DEALS_EXPIRING_SOON_PRODUCTS: ExclusiveProduct[] = [
  { id: 'es-1', name: halfSleeve, price: 29, originalPrice: 33, image: '/images/signin.png', badges: ['new', 'sponsored'], hasVideo: true, videoUrl: vid(0) },
  { id: 'es-2', name: halfSleeve, price: 29, originalPrice: 33, image: '/images/create.png', badges: ['new'], hasVideo: true, videoUrl: vid(1) },
  { id: 'es-3', name: halfSleeve, price: 29, originalPrice: 33, image: '/images/logo.png', badges: [ 'sponsored'], hasVideo: true, videoUrl: vid(2) },
  { id: 'es-4', name: halfSleeve, price: 29, originalPrice: 33, image: '/images/forgot.png', badges: ['new', 'sponsored'], hasVideo: false },
  { id: 'es-5', name: halfSleeve, price: 29, originalPrice: 33, image: '/images/otp.png', badges: [], hasVideo: true, videoUrl: vid(3) },
  { id: 'es-6', name: halfSleeve, price: 29, originalPrice: 33, image: '/images/success.png', badges: [], hasVideo: true, videoUrl: vid(4) },
];

export const SELLING_FAST_PRODUCTS: ExclusiveProduct[] = [
  { id: 'sf-1', name: halfSleeve, price: 29, originalPrice: 33, image: '/images/create.png', badges: ['new', 'sponsored'], hasVideo: true, videoUrl: vid(2) },
  { id: 'sf-2', name: halfSleeve, price: 29, originalPrice: 33, image: '/images/signin.png', badges: ['new'], hasVideo: true, videoUrl: vid(0) },
  { id: 'sf-3', name: halfSleeve, price: 29, originalPrice: 33, image: '/images/beauty1.png', badges: ['sponsored'], hasVideo: true, videoUrl: vid(1) },
  { id: 'sf-4', name: halfSleeve, price: 29, originalPrice: 33, image: '/images/beauty2.png', badges: ['new', 'sponsored'], hasVideo: true, videoUrl: vid(3) },
  { id: 'sf-5', name: halfSleeve, price: 29, originalPrice: 33, image: '/images/logo.png', badges: [], hasVideo: false },
  { id: 'sf-6', name: halfSleeve, price: 29, originalPrice: 33, image: '/images/forgot.png', badges: ['new', 'sponsored'], hasVideo: true, videoUrl: vid(5) },
];

export const LIMITED_QUANTITY_PRODUCTS: ExclusiveProduct[] = [
  { id: 'lq-1', name: halfSleeve, price: 29, originalPrice: 33, image: '/images/signin.png', badges: ['new', 'sponsored'], hasVideo: true, videoUrl: vid(0), quantityLeft: 57 },
  { id: 'lq-2', name: halfSleeve, price: 29, originalPrice: 33, image: '/images/create.png', badges: ['new', 'sponsored'], hasVideo: true, videoUrl: vid(1), quantityLeft: 12 },
  { id: 'lq-3', name: halfSleeve, price: 29, originalPrice: 33, image: '/images/logo.png', badges: ['new', 'sponsored'], hasVideo: true, videoUrl: vid(2), quantityLeft: 8 },
  { id: 'lq-4', name: halfSleeve, price: 29, originalPrice: 33, image: '/images/forgot.png', badges: ['new', 'sponsored'], hasVideo: false, quantityLeft: 24 },
  { id: 'lq-5', name: halfSleeve, price: 29, originalPrice: 33, image: '/images/otp.png', badges: ['new', 'sponsored'], hasVideo: true, videoUrl: vid(3), quantityLeft: 3 },
  { id: 'lq-6', name: halfSleeve, price: 29, originalPrice: 33, image: '/images/success.png', badges: ['new', 'sponsored'], hasVideo: true, videoUrl: vid(4), quantityLeft: 41 },
  { id: 'lq-7', name: halfSleeve, price: 29, originalPrice: 33, image: '/images/beauty3.png', badges: ['new', 'sponsored'], hasVideo: true, videoUrl: vid(5), quantityLeft: 19 },
  { id: 'lq-8', name: halfSleeve, price: 29, originalPrice: 33, image: '/images/dryer.png', badges: ['new', 'sponsored'], hasVideo: true, videoUrl: vid(6), quantityLeft: 6 },
];

export const DEALS_UNDER_50_PRODUCTS: ExclusiveProduct[] = [
  { id: 'u50-1', name: halfSleeve, price: 29, originalPrice: 33, image: '/images/signin.png', badges: ['new'], hasVideo: true, videoUrl: vid(0) },
  { id: 'u50-2', name: halfSleeve, price: 24.99, originalPrice: 39, image: '/images/create.png', badges: ['new', 'sponsored'], hasVideo: true, videoUrl: vid(1) },
  { id: 'u50-3', name: halfSleeve, price: 39.5, originalPrice: 49, image: '/images/logo.png', badges: ['new', 'sponsored'], hasVideo: true, videoUrl: vid(2) },
  { id: 'u50-4', name: halfSleeve, price: 12.99, originalPrice: 22, image: '/images/forgot.png', badges: ['new', 'sponsored'], hasVideo: false },
  { id: 'u50-5', name: halfSleeve, price: 45, originalPrice: 59, image: '/images/otp.png', badges: ['new', 'sponsored'], hasVideo: true, videoUrl: vid(3) },
  { id: 'u50-6', name: halfSleeve, price: 18, originalPrice: 28, image: '/images/success.png', badges: ['new', 'sponsored'], hasVideo: true, videoUrl: vid(4) },
  { id: 'u50-7', name: halfSleeve, price: 33, originalPrice: 44, image: '/images/beauty1.png', badges: ['new', 'sponsored'], hasVideo: true, videoUrl: vid(5) },
  { id: 'u50-8', name: halfSleeve, price: 47.99, originalPrice: 65, image: '/images/beauty2.png', badges: ['new', 'sponsored'], hasVideo: true, videoUrl: vid(6) },
];

export const EXCLUSIVE_PAGE_SIZE = 14;
export const EXCLUSIVE_TOTAL_RESULTS = 120;

/** ─── Category page: Beauty & Personal Care (subcategories + dedicated products) ─── */

export type CategorySubcategory = {
  id: string;
  label: string;
  image: string;
};

/** Subcategory tiles (3 per row on desktop) — image area uses #EFEFEF in UI */
export const BEAUTY_SUBCATEGORIES: CategorySubcategory[] = [
  { id: 'beauty-makeup', label: 'Makeup & Cosmetics', image: '/images/makeup.png' },
  { id: 'beauty-skincare', label: 'Skincare & Face Masks', image: '/images/skincare.png' },
  { id: 'beauty-bath', label: 'Bath & Body', image: '/images/hair.png' },
  { id: 'beauty-hair', label: 'Haircare & Tools', image: '/images/hair.png' },
  { id: 'beauty-grooming', label: 'Grooming (Men/Women)', image: '/images/grooming.png' },
  { id: 'beauty-oils', label: 'Essential Oils & Wellness', image: '/images/oils.png' },
];

/** Horizontal “Top Deals in Beauty & Personal Care” — not reused from lists above */
export const BEAUTY_CATEGORY_TOP_DEALS: ExclusiveProduct[] = [
  { id: 'bd-c1', name: 'Hydra Glow Face Serum 30ml', price: 29, originalPrice: 39, image: '/images/beauty1.png', badges: ['new', 'sponsored'], hasVideo: true, videoUrl: vid(0) },
  { id: 'bd-c2', name: 'Vitamin C Brightening Cream', price: 24.5, originalPrice: 32, image: '/images/beauty2.png', badges: ['new'], hasVideo: true, videoUrl: vid(1) },
  { id: 'bd-c3', name: 'Overnight Repair Night Mask', price: 34, originalPrice: 42, image: '/images/beauty3.png', badges: ['sponsored'], hasVideo: true, videoUrl: vid(2) },
  { id: 'bd-c4', name: 'Rosehip Nourishing Oil', price: 19.99, originalPrice: 26, image: '/images/dryer.png', badges: ['new', 'sponsored'], hasVideo: false },
  { id: 'bd-c5', name: 'Aloe Calming Body Lotion', price: 16, originalPrice: 22, image: '/images/massajar.png', badges: ['new'], hasVideo: true, videoUrl: vid(4) },
  { id: 'bd-c6', name: 'Keratin Shine Shampoo 400ml', price: 21, originalPrice: 28, image: '/images/create.png', badges: ['sponsored'], hasVideo: true, videoUrl: vid(5) },
];

function beautyGrid(
  prefix: string,
  names: string[],
  images: string[],
  startVid: number
): ExclusiveProduct[] {
  return names.map((name, i) => ({
    id: `${prefix}-${i + 1}`,
    name,
        price: 29,
        originalPrice: 33,
        image: images[i % images.length],
    badges: i % 2 === 0 ? (['new', 'sponsored'] as const) : (['new'] as const),
    hasVideo: i % 3 !== 2,
    videoUrl: i % 3 !== 2 ? vid(startVid + i) : undefined,
  }));
}

/** Product listing when a Beauty subcategory button is clicked — 3 columns on large screens */
export const BEAUTY_SUBCATEGORY_PRODUCTS: Record<string, ExclusiveProduct[]> = {
  'beauty-makeup': beautyGrid(
    'bm',
    [
      'Velvet Matte Lipstick Set',
      'Waterproof Mascara Duo',
      'Illuminating Primer Base',
      'Contour & Highlight Palette',
      'Setting Spray Long Wear',
      'Brow Sculpt Gel',
    ],
    ['/images/beauty1.png', '/images/beauty2.png', '/images/beauty3.png'],
    0
  ),
  'beauty-skincare': beautyGrid(
    'bs',
    [
      'Daily SPF 50 Moisturizer',
      'Niacinamide Pore Refining Toner',
      'Retinol Night Treatment',
      'Hyaluronic Acid Essence',
      'Clay Purifying Mask',
      'Cica Repair Ampoule',
    ],
    ['/images/beauty2.png', '/images/beauty3.png', '/images/beauty1.png'],
    2
  ),
  'beauty-bath': beautyGrid(
    'bb',
    [
      'Lavender Bath Soak Salts',
      'Shea Butter Body Butter',
      'Exfoliating Sugar Scrub',
      'Coconut Shower Gel',
      'Hand Cream Trio Pack',
      'Eucalyptus Steam Tablets',
    ],
    ['/images/beauty3.png', '/images/massajar.png', '/images/dryer.png'],
    4
  ),
  'beauty-hair': beautyGrid(
    'bh',
    [
      'Ceramide Repair Conditioner',
      'Ionic Ceramic Hair Dryer',
      'Argan Oil Heat Protectant',
      'Scalp Detox Scrub',
      'Wide-Tooth Detangle Comb Set',
      'Silk Sleep Hair Wrap',
    ],
    ['/images/dryer.png', '/images/beauty1.png', '/images/beauty2.png'],
    1
  ),
  'beauty-grooming': beautyGrid(
    'bg',
    [
      'Precision Safety Razor Kit',
      'Beard Balm Cedarwood',
      'Electric Trimmer 12-in-1',
      'Aftershave Cooling Gel',
      'Charcoal Face Wash',
      'Travel Grooming Pouch',
    ],
    ['/images/massajar.png', '/images/create.png', '/images/beauty3.png'],
    3
  ),
  'beauty-oils': beautyGrid(
    'bo',
    [
      'Lavender Calming Blend 15ml',
      'Peppermint Focus Roll-On',
      'Tea Tree Purifying Oil',
      'Eucalyptus Steam Oil',
      'Frankincense Diffuser Blend',
      'Citrus Uplift Mix',
    ],
    ['/images/create.png', '/images/beauty2.png', '/images/beauty1.png'],
    5
  ),
};

export function getSubcategoriesForTopDealsCategory(categoryId: string): CategorySubcategory[] {
  if (categoryId === 'beauty') return BEAUTY_SUBCATEGORIES;
  return [];
}

export function getCategoryTopDealsForPage(categoryId: string): ExclusiveProduct[] {
  if (categoryId === 'beauty') return BEAUTY_CATEGORY_TOP_DEALS;
  return [];
}

export function getSubcategoryProductList(
  categoryId: string,
  subcategoryId: string
): ExclusiveProduct[] {
  if (categoryId === 'beauty') return BEAUTY_SUBCATEGORY_PRODUCTS[subcategoryId] ?? [];
  return [];
}
