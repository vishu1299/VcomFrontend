import type { DealCardProps } from '../components/DealCard';
import { MAIN_CATEGORIES, SUBCATEGORIES_BY_MAIN } from './categories';

export type DealProduct = DealCardProps & { category: string; subcategory?: string };

/** Your /public images first, then Unsplash for variety – all relevant to category */
const FASHION_IMAGES = [
  '/images/cloth1.png',
  '/images/cloth2.png',
  '/images/cloth3.png',
  '/images/cloth4.png',
  '/images/cloth5.png',
  '/images/cloth6.png',
  '/images/cloth7.png',
  '/images/cloth8.png',
  'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&h=500&fit=crop',
];

const BEAUTY_IMAGES = [
  '/images/beauty1.png',
  '/images/beauty2.png',
  '/images/beauty3.png',
  '/images/dryer.png',
  '/images/massajar.png',
  'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&h=500&fit=crop',
];

const HOME_IMAGES = [
  '/images/home-living-product-1.png',
  '/images/home-living-product-2.png',
  '/images/home-living-product-3.png',
  '/images/create.png',
  '/images/speaker.png',
  '/images/punch.png',
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&h=500&fit=crop',
];

const IMAGES_BY_CATEGORY: Record<string, string[]> = {
  'Fashion & Apparel': FASHION_IMAGES,
  'Beauty & Personal Care': BEAUTY_IMAGES,
  'Home & Living': HOME_IMAGES,
};

function buildDealProducts(): DealProduct[] {
  const out: DealProduct[] = [];
  let id = 1;
  MAIN_CATEGORIES.forEach((category) => {
    const images = IMAGES_BY_CATEGORY[category];
    const subcats = SUBCATEGORIES_BY_MAIN[category];
    const countPerCategory = 66;
    for (let i = 0; i < countPerCategory; i++) {
      const sub = subcats[i % subcats.length];
      out.push({
        id: `deal-${id}`,
        name: "Men's Half Sleeve Solid Casual Reg...",
        price: 29,
        originalPrice: 33,
        image: images[i % images.length],
        badges: i % 3 === 0 ? ['NEW', '10% OFF'] : [`${(i % 9) * 10 + 10}% OFF`],
        hasVideo: i % 2 === 0,
        sponsored: i % 2 === 0,
        category,
        subcategory: sub.id,
      });
      id += 1;
    }
  });
  return out;
}

export const ALL_DEAL_PRODUCTS = buildDealProducts();
export const PAGE_SIZE = 14;
