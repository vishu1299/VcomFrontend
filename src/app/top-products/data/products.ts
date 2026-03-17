import type { ProductCardProps } from '../components/ProductCard';

export const ALL_PRODUCTS: ProductCardProps[] = [
  {
    id: '1',
    name: "Men's Half Sleeve Solid Casual Regular Fit",
    price: 29,
    originalPrice: 32,
    image: '/images/phone.png',
    badges: ['NEW', '10% OFF'],
    hasVideo: true,
  },
  {
    id: '2',
    name: "Men's Half Sleeve Solid Casual Regular Fit",
    price: 29.99,
    originalPrice: 32,
    image: '/images/watch.png',
    badges: ['10% OFF'],
    hasVideo: true,
  },
  {
    id: '3',
    name: "Men's Half Sleeve Solid Casual Regular Fit",
    price: 29,
    originalPrice: 58,
    image: '/images/watch.png',
    badges: ['50% OFF'],
    hasVideo: true,
    sponsored: true,
  },
  {
    id: '4',
    name: "Men's Half Sleeve Solid Casual Regular Fit",
    price: 49,
    originalPrice: 58,
    image: '/images/massajar.png',
    badges: ['10% OFF'],
    hasVideo: true,
  },
  {
    id: '5',
    name: "Men's Half Sleeve Solid Casual Regular Fit",
    price: 39,
    originalPrice: 45,
    image: '/images/punch.png',
    badges: ['10% OFF', 'NEW ARRIVAL'],
    hasVideo: false,
  },
  {
    id: '6',
    name: "Men's Half Sleeve Solid Casual Regular Fit",
    price: 59,
    originalPrice: 69,
    image: '/images/mouse.png',
    badges: ['10% OFF', 'NEW ARRIVAL'],
    hasVideo: true,
  },
  {
    id: '7',
    name: "Men's Half Sleeve Solid Casual Regular Fit",
    price: 19,
    originalPrice: 25,
    image: '/images/sd.png',
    badges: ['20% OFF'],
    hasVideo: false,
  },
  {
    id: '8',
    name: "Men's Half Sleeve Solid Casual Regular Fit",
    price: 79,
    originalPrice: 99,
    image: '/images/mouse1.png',
    badges: ['10% OFF'],
    hasVideo: true,
  },
  {
    id: '9',
    name: "Men's Half Sleeve Solid Casual Regular Fit",
    price: 34,
    originalPrice: 40,
    image: '/images/speaker.png',
    badges: ['10% OFF'],
    hasVideo: true,
  },
  {
    id: '10',
    name: "Men's Half Sleeve Solid Casual Regular Fit",
    price: 44,
    originalPrice: 52,
    image: '/images/speaker1.png',
    badges: ['NEW ARRIVAL', '10% OFF'],
    hasVideo: false,
  },
  {
    id: '11',
    name: "Men's Half Sleeve Solid Casual Regular Fit",
    price: 24,
    originalPrice: 30,
    image: '/images/speaker2.png',
    badges: ['20% OFF'],
    hasVideo: true,
  },
  {
    id: '12',
    name: "Men's Half Sleeve Solid Casual Regular Fit",
    price: 89,
    originalPrice: 110,
    image: '/images/sd.png',
    badges: ['10% OFF'],
    hasVideo: true,
  },
  {
    id: '13',
    name: "Men's Half Sleeve Solid Casual Regular Fit",
    price: 54,
    originalPrice: 64,
    image: '/images/watch.png',
    badges: ['10% OFF'],
    hasVideo: false,
  },
  {
    id: '14',
    name: "Men's Half Sleeve Solid Casual Regular Fit",
    price: 69,
    originalPrice: 79,
    image: '/images/create.png',
    badges: ['NEW ARRIVAL', '10% OFF'],
    hasVideo: true,
  },
];

export const TOTAL_PRODUCTS = 120;
export const PAGE_SIZE = 14;

function buildFullList(): ProductCardProps[] {
  const out: ProductCardProps[] = [];
  for (let i = 0; i < TOTAL_PRODUCTS; i++) {
    const src = ALL_PRODUCTS[i % ALL_PRODUCTS.length];
    out.push({ ...src, id: String(i + 1) });
  }
  return out;
}

export const ALL_PRODUCTS_PAGINATED = buildFullList();
