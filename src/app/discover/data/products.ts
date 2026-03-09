export type DiscoverProduct = {
  id: string;
  name: string;
  subtitle?: string;
  price: number;
  originalPrice: number;
  image: string;
  badges?: string[];
};

export const DISCOVER_STREAM_PRODUCTS: DiscoverProduct[] = [
  {
    id: '1',
    name: 'iPhone 17 Pro 15.93 cm (6.3")',
    subtitle: 'Display',
    price: 299,
    originalPrice: 349,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484429e0?w=400&q=80',
    badges: ['SALE', 'NEW'],
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    subtitle: '6.8" Dynamic AMOLED',
    price: 349,
    originalPrice: 429,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&q=80',
    badges: ['SALE', 'NEW'],
  },
  {
    id: '3',
    name: 'Galaxy F17 5G 6.5"',
    subtitle: 'Super AMOLED Display',
    price: 199,
    originalPrice: 249,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80',
    badges: ['SALE', 'NEW'],
  },
  {
    id: '4',
    name: 'Galaxy F07 6.4"',
    subtitle: 'Infinity-U Display',
    price: 149,
    originalPrice: 199,
    image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&q=80',
    badges: ['SALE', 'NEW'],
  },
  {
    id: '5',
    name: 'Galaxy S23 5G',
    subtitle: '6.1" FHD+ Dynamic AMOLED',
    price: 279,
    originalPrice: 329,
    image: 'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=400&q=80',
    badges: ['SALE', 'NEW'],
  },
  {
    id: '6',
    name: 'Pixel 8 Pro',
    subtitle: '6.7" LTPO OLED Display',
    price: 319,
    originalPrice: 399,
    image: 'https://images.unsplash.com/photo-1666919643134-d97687c1826c?w=400&q=80',
    badges: ['SALE', 'NEW'],
  },
];
