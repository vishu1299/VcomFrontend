import { FASHION_VIEW_CATEGORIES } from './fashionView';
import { MAIN_CATEGORIES } from './categories';

export type DealProduct = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  subcategory?: string;
  badges: string[];
  hasVideo: boolean;
  sponsored: boolean;
};

export const PAGE_SIZE = 6;

const IMAGES = [
  '/images/signin.png',
  '/images/create.png',
  '/images/logo.png',
  '/images/forgot.png',
  '/images/otp.png',
  '/images/success.png',
];

function buildAllDeals(): DealProduct[] {
  const out: DealProduct[] = [];
  let n = 0;
  const fashionIds = FASHION_VIEW_CATEGORIES.map((c) => c.id);

  for (const cat of MAIN_CATEGORIES) {
    const count = cat === 'Fashion & Apparel' ? 24 : 10;
    for (let i = 0; i < count; i++) {
      n += 1;
      out.push({
        id: `jd-${n}`,
        name: "Men's Half Sleeve Solid Casual Reg...",
        price: 18 + (i % 12) + (n % 5),
        originalPrice: 33 + (i % 8),
        image: IMAGES[n % IMAGES.length],
        category: cat,
        subcategory:
          cat === 'Fashion & Apparel' ? fashionIds[i % fashionIds.length] : undefined,
        badges: i % 2 === 0 ? ['NEW', '10% OFF'] : ['10% OFF'],
        hasVideo: true,
        sponsored: i % 3 !== 0,
      });
    }
  }
  return out;
}

export const ALL_DEAL_PRODUCTS: DealProduct[] = buildAllDeals();
