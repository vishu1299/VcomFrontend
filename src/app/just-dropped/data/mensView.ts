import type { JustDroppedCardProduct } from '../types';

/** Men's subcategories for carousel when Fashion + Men's Clothing is selected */
export type MensSubcategory = { id: string; label: string; image: string };

/** Unsplash images matching design: man salmon/plain t-shirt, white collared shirt, blue jeans, brown trousers */
export const MENS_SUBCATEGORIES: MensSubcategory[] = [
  {
    id: 'tshirts',
    label: "T-shirts",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
  },
  {
    id: 'shirts',
    label: "Shirts",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop",
  },
  {
    id: 'jeans',
    label: "Jeans",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop",
  },
  {
    id: 'trousers',
    label: "Trousers",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&h=500&fit=crop",
  },
];

/** Men's shirts – collared, white/formal style (Unsplash) */
const SHIRT_IMAGES = [
  "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=500&h=500&fit=crop",
];

/** Men's t-shirts – polo/casual (Unsplash) */
const TSHIRT_IMAGES = [
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=500&h=500&fit=crop",
];

function buildDealCards(images: string[], prefix: string): JustDroppedCardProduct[] {
  return images.map((image, i) => ({
    id: `mens-${prefix}-${i + 1}`,
    name: "Men's Half Sleeve Solid Casual Reg...",
    price: 29,
    originalPrice: i % 2 === 0 ? 33 : 88,
    image,
    badges: i % 2 === 0 ? ['NEW', '10% OFF'] : ['10% OFF'],
    hasVideo: true,
    sponsored: true,
  }));
}

export const MENS_SHIRT_PRODUCTS: JustDroppedCardProduct[] = buildDealCards(SHIRT_IMAGES, 'shirt');
export const MENS_TSHIRT_PRODUCTS: JustDroppedCardProduct[] = buildDealCards(TSHIRT_IMAGES, 'tshirt');

/** For "Latest in Shirt" grid when Shirts checkbox is selected – uses /images/shirt1–3.png */
const SHIRT_GRID_IMAGES = ['/images/shirt1.png', '/images/shirt2.png', '/images/shirt3.png'];
const SHIRT_GRID_PAGE_SIZE = 12;
const SHIRT_GRID_TOTAL_PAGES = 45;

function buildShirtGridProducts(): JustDroppedCardProduct[] {
  const out: JustDroppedCardProduct[] = [];
  const total = SHIRT_GRID_PAGE_SIZE * SHIRT_GRID_TOTAL_PAGES;
  for (let i = 0; i < total; i++) {
    out.push({
      id: `shirt-grid-${i + 1}`,
      name: "Men's Half Sleeve Solid Casual Reg...",
      price: 29,
      originalPrice: i % 2 === 0 ? 33 : 88,
      image: SHIRT_GRID_IMAGES[i % SHIRT_GRID_IMAGES.length],
      badges: i % 2 === 0 ? ['NEW', '10% OFF'] : ['10% OFF'],
      hasVideo: true,
      sponsored: true,
    });
  }
  return out;
}

export const MENS_SHIRT_GRID_PRODUCTS = buildShirtGridProducts();
export { SHIRT_GRID_PAGE_SIZE, SHIRT_GRID_TOTAL_PAGES };
