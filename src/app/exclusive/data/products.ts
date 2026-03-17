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
  { id: 'h1', name: "Men's half sleeve solid casual regular fit", price: 29, originalPrice: 33, image: '/images/signin.png', badges: ['10off'], hasVideo: true, videoUrl: vid(0) },
  { id: 'h2', name: "Men's half sleeve solid casual regular fit", price: 29, originalPrice: 33, image: '/images/create.png', badges: ['10off', 'sponsored'], hasVideo: true, videoUrl: vid(1) },
  { id: 'h3', name: "Men's half sleeve solid casual regular fit", price: 29, originalPrice: 33, image: '/images/logo.png', badges: ['10off'], hasVideo: true, videoUrl: vid(2) },
  { id: 'h4', name: "Men's half sleeve solid casual regular fit", price: 29, originalPrice: 33, image: '/images/forgot.png', badges: ['10off'], hasVideo: true, videoUrl: vid(3) },
  { id: 'h5', name: "Men's half sleeve solid casual regular fit", price: 29, originalPrice: 33, image: '/images/otp.png', badges: ['10off'], hasVideo: true, videoUrl: vid(4) },
  { id: 'h6', name: "Men's half sleeve solid casual regular fit", price: 29, originalPrice: 33, image: '/images/success.png', badges: ['10off'], hasVideo: true, videoUrl: vid(5) },
];

/** Latest exclusive products - EXCLUSIVE (gradient purple) + NEW (blue); some without NEW */
export const LATEST_EXCLUSIVE_PRODUCTS: ExclusiveProduct[] = [
  { id: 'l1', name: "Men's half sleeve solid casual regular fit", price: 29, originalPrice: 33, image: '/images/signin.png', badges: ['exclusive', 'new'], hasVideo: true, videoUrl: vid(0) },
  { id: 'l2', name: "Men's half sleeve solid casual regular fit", price: 29, originalPrice: 33, image: '/images/create.png', badges: ['exclusive', 'new'], hasVideo: true, videoUrl: vid(1) },
  { id: 'l3', name: "Men's half sleeve solid casual regular fit", price: 29, originalPrice: 33, image: '/images/logo.png', badges: ['exclusive'], hasVideo: true, videoUrl: vid(2) },
  { id: 'l4', name: "Men's half sleeve solid casual regular fit", price: 29, originalPrice: 33, image: '/images/forgot.png', badges: ['exclusive', 'new'], hasVideo: false },
  { id: 'l5', name: "Men's half sleeve solid casual regular fit", price: 29, originalPrice: 33, image: '/images/otp.png', badges: ['exclusive', 'new'], hasVideo: true, videoUrl: vid(4) },
  { id: 'l6', name: "Men's half sleeve solid casual regular fit", price: 29, originalPrice: 33, image: '/images/success.png', badges: ['exclusive'], hasVideo: true, videoUrl: vid(5) },
];

/** Most sold - TRENDING (orange) + SALE (yellow); first card can have no tags */
export const MOST_SOLD_PRODUCTS: ExclusiveProduct[] = [
  { id: 's1', name: "Men's half sleeve solid casual regular fit", price: 29, originalPrice: 33, image: '/images/signin.png', badges: [], hasVideo: true, videoUrl: vid(0) },
  { id: 's2', name: "Men's half sleeve solid casual regular fit", price: 29, originalPrice: 33, image: '/images/create.png', badges: ['trending', 'sale'], hasVideo: true, videoUrl: vid(1) },
  { id: 's3', name: "Men's half sleeve solid casual regular fit", price: 29, originalPrice: 33, image: '/images/logo.png', badges: ['trending', 'sale'], hasVideo: true, videoUrl: vid(2) },
  { id: 's4', name: "Men's half sleeve solid casual regular fit", price: 27.99, originalPrice: 33, image: '/images/forgot.png', badges: ['trending', 'sale'], hasVideo: false },
  { id: 's5', name: "Men's half sleeve solid casual regular fit", price: 12.99, originalPrice: 18, image: '/images/otp.png', badges: ['trending', 'sale'], hasVideo: true, videoUrl: vid(4) },
  { id: 's6', name: "Men's half sleeve solid casual regular fit", price: 39.99, originalPrice: 45, image: '/images/success.png', badges: ['trending', 'sale'], hasVideo: true, videoUrl: vid(5) },
];

/** Sponsored Exclusive - EXCLUSIVE (dark purple) + SPONSORED (dark blue), pointed badges */
export const SPONSORED_EXCLUSIVE_PRODUCTS: ExclusiveProduct[] = [
  { id: 'p1', name: "Men's half sleeve solid casual regular fit", price: 27.99, originalPrice: 33, image: '/images/signin.png', badges: ['exclusive', 'sponsored'], hasVideo: true, videoUrl: vid(0) },
  { id: 'p2', name: "Men's half sleeve solid casual regular fit", price: 12.99, originalPrice: 18, image: '/images/create.png', badges: ['exclusive', 'sponsored'], hasVideo: true, videoUrl: vid(1) },
  { id: 'p3', name: "Men's half sleeve solid casual regular fit", price: 39.99, originalPrice: 45, image: '/images/logo.png', badges: ['exclusive', 'sponsored'], hasVideo: true, videoUrl: vid(2) },
  { id: 'p4', name: "Men's half sleeve solid casual regular fit", price: 29, originalPrice: 33, image: '/images/forgot.png', badges: ['exclusive', 'sponsored'], hasVideo: false },
  { id: 'p5', name: "Men's half sleeve solid casual regular fit", price: 29, originalPrice: 33, image: '/images/otp.png', badges: ['exclusive', 'sponsored'], hasVideo: true, videoUrl: vid(4) },
  { id: 'p6', name: "Men's half sleeve solid casual regular fit", price: 29, originalPrice: 33, image: '/images/success.png', badges: ['exclusive', 'sponsored'], hasVideo: true, videoUrl: vid(5) },
];

export const EXCLUSIVE_PAGE_SIZE = 14;
export const EXCLUSIVE_TOTAL_RESULTS = 120;
