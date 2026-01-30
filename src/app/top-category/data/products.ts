export type RecommendedProduct = {
  id: string;
  name: string;
  price: number;
  image: string;
  badges: ('NEW' | 'SALE')[];
  hasVideo?: boolean;
};

export const RECOMMENDED_PRODUCTS: RecommendedProduct[] = [
  {
    id: '1',
    name: 'Apple iPhone 13 (256GB) MMX',
    price: 29,
    image: '/images/signin.png',
    badges: ['NEW', 'SALE'],
    hasVideo: true,
  },
  {
    id: '2',
    name: 'Silver Over-Ear Headphones',
    price: 89,
    image: '/images/create.png',
    badges: ['NEW'],
    hasVideo: false,
  },
  {
    id: '3',
    name: 'Black Smartphone Pro',
    price: 299,
    image: '/images/logo.png',
    badges: ['SALE'],
    hasVideo: true,
  },
  {
    id: '4',
    name: 'Black Over-Ear Headphones',
    price: 79,
    image: '/images/forgot.png',
    badges: ['NEW', 'SALE'],
    hasVideo: false,
  },
  {
    id: '5',
    name: 'Designer Sunglasses',
    price: 49,
    image: '/images/otp.png',
    badges: ['NEW'],
    hasVideo: false,
  },
  {
    id: '6',
    name: 'Wireless Earbuds Pro',
    price: 59,
    image: '/images/success.png',
    badges: ['SALE'],
    hasVideo: true,
  },
];
