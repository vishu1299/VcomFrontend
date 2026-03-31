import type { ExclusiveProduct } from '@/app/exclusive/data/products';
import {
  getSampleVideoUrl,
  EXCLUSIVE_HORIZONTAL_PRODUCTS,
  LATEST_EXCLUSIVE_PRODUCTS,
  SPONSORED_EXCLUSIVE_PRODUCTS,
} from '@/app/exclusive/data/products';
import { RECOMMENDED_PRODUCTS } from '@/app/product-categories/data/recommended-products';
import { getSubCategoryProducts } from '@/app/product-categories/[slug]/data/products';
import { MENS_RECOMMENDED_PRODUCTS } from '@/app/mens/data/recommended-products';
import { ALL_DEAL_PRODUCTS } from '@/app/just-dropped/data/dealProducts';
import { justDroppedCardToExclusive } from '@/app/just-dropped/lib/mapJustDroppedToExclusive';
import {
  RECENTLY_ADDED as SELLER_RECENTLY_ADDED,
  ALL_PRODUCTS as SELLER_ALL_PRODUCTS,
  RECENTLY_SEARCHED as SELLER_RECENTLY_SEARCHED,
} from '@/app/seller-page/data/products';
import { sellerProductToExclusive } from '@/app/seller-page/lib/sellerProductToExclusive';
import { RELATED_CAROUSEL_PRODUCTS } from '@/app/customer-reviews/data/relatedCarouselProducts';
import { productCardPropsToExclusive } from '@/app/product-list/lib/productCardPropsToExclusive';

export interface ProductDetail extends ExclusiveProduct {
  productNumber: string;
  category: string;
  colours: { name: string; hex: string }[];
  storageOptions: string[];
  sellerName: string;
  description: string;
  specifications: { label: string; value: string }[];
  images: string[];
}

const COLOURS = [
  { name: 'Orange', hex: '#ea580c' },
  { name: 'Dark Grey', hex: '#4b5563' },
  { name: 'White', hex: '#ffffff' },
  { name: 'Pink', hex: '#f9a8d4' },
  { name: 'Yellow', hex: '#eab308' },
];

const DEFAULT_SPECS = [
  { label: 'Display', value: 'Super Retina XDR display 15.93 cm / 6.3 in (diagonal) all-screen OLED display 2622x1206-pixel resolution at 460 ppi' },
  { label: 'Camera & Video', value: '48MP Pro Fusion camera system with optical image stabilisation. Cinematic mode, ProRes video. Front TrueDepth 12MP camera.' },
  { label: 'In The box', value: 'iPhone with iOS 26 USB-C Charge Cable (1 m) Documentation' },
  { label: 'Height', value: '150 mm' },
  { label: 'Width', value: '71.9 mm' },
  { label: 'Depth', value: '8.75 mm' },
  { label: 'Weight', value: '204 g' },
];

function toDetail(p: ExclusiveProduct, index: number): ProductDetail {
  const discount = p.originalPrice ? Math.round((1 - p.price / p.originalPrice) * 100) : 14;
  return {
    ...p,
    images: [p.image, p.image, p.image, p.image, p.image],
    productNumber: `A${3100 + index}`,
    category: index % 2 === 0 ? 'Electronics' : 'Fashion',
    colours: COLOURS,
    storageOptions: ['64 GB', '256 GB', '512 GB'],
    sellerName: 'Urbantech',
    description: `The ${p.name} features a stunning Super Retina XDR display with ProMotion technology for smooth 120 Hz refresh rates. The all-screen OLED design delivers vivid colours and deep blacks.\n\nPowered by the latest chip, it handles demanding apps and games with ease. The advanced camera system includes a 48MP main sensor with optical image stabilisation, plus ultra-wide and telephoto lenses for versatile photography.\n\nBuilt with a titanium frame for durability, the device offers all-day battery life and supports fast charging. LIDAR enables enhanced AR experiences and improved low-light photography.`,
    specifications: DEFAULT_SPECS,
  };
}

function sellerPageExclusiveProducts(): ExclusiveProduct[] {
  const byId = new Map<string, ExclusiveProduct>();
  for (const p of [
    ...SELLER_RECENTLY_ADDED,
    ...SELLER_ALL_PRODUCTS,
    ...SELLER_RECENTLY_SEARCHED,
  ]) {
    byId.set(p.id, sellerProductToExclusive(p));
  }
  return Array.from(byId.values());
}

const ALL_PRODUCTS: ExclusiveProduct[] = [
  ...EXCLUSIVE_HORIZONTAL_PRODUCTS,
  ...LATEST_EXCLUSIVE_PRODUCTS,
  ...SPONSORED_EXCLUSIVE_PRODUCTS,
  ...RECOMMENDED_PRODUCTS,
  ...MENS_RECOMMENDED_PRODUCTS,
  ...ALL_DEAL_PRODUCTS.map((p) => justDroppedCardToExclusive(p)),
  ...sellerPageExclusiveProducts(),
  ...RELATED_CAROUSEL_PRODUCTS.map((p) => productCardPropsToExclusive(p)),
];

let detailCache: Map<string, ProductDetail> | null = null;

function getDetailCache(): Map<string, ProductDetail> {
  if (!detailCache) {
    detailCache = new Map();
    ALL_PRODUCTS.forEach((p, i) => detailCache!.set(p.id, toDetail(p, i)));
  }
  return detailCache;
}

export function getProductDetail(id: string): ProductDetail | null {
  const cached = getDetailCache().get(id);
  if (cached) return cached;
  const subProducts = getSubCategoryProducts();
  const index = subProducts.findIndex((p) => p.id === id);
  if (index === -1) return null;
  return toDetail(subProducts[index], 1000 + index);
}

export function getSellerRecommendedProducts(currentId: string): ExclusiveProduct[] {
  return RECOMMENDED_PRODUCTS.filter((p) => p.id !== currentId).slice(0, 6);
}
