import type { ExclusiveProduct } from '../../exclusive/data/products';
import { getSampleVideoUrl } from '../../exclusive/data/products';

const UNSPLASH = (id: string, w = 400) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&fit=crop`;

/** Recommended products: SALE + NEW, some SPONSORED; play button on all cards; videos play in modal */
export const RECOMMENDED_PRODUCTS: ExclusiveProduct[] = [
  { id: 'r1', name: 'Apple iPhone X 256GB 3GB RAM', price: 29, originalPrice: 33, image: UNSPLASH('1510557880212-41d2cd8e3b54'), badges: ['sale', 'new'], hasVideo: true, videoUrl: getSampleVideoUrl(0) },
  { id: 'r2', name: 'Wireless Bluetooth Headphones', price: 49, originalPrice: 59, image: UNSPLASH('1505740420928-5e860c3d1b38'), badges: ['sale', 'new'], hasVideo: true, videoUrl: getSampleVideoUrl(1) },
  { id: 'r3', name: 'Classic Analog Wristwatch', price: 89, originalPrice: 99, image: UNSPLASH('1523275335684-37898b6baf30'), badges: ['sale', 'new', 'sponsored'], hasVideo: true, videoUrl: getSampleVideoUrl(2) },
  { id: 'r4', name: 'Designer Sunglasses', price: 79, originalPrice: 95, image: UNSPLASH('1572635198757-2e7c7367df25'), badges: ['sale', 'new', 'sponsored'], hasVideo: true, videoUrl: getSampleVideoUrl(3) },
  { id: 'r5', name: 'Premium Leather Bag', price: 129, originalPrice: 149, image: UNSPLASH('1548036328-c925fa1c6904'), badges: ['sale', 'new'], hasVideo: true, videoUrl: getSampleVideoUrl(4) },
  { id: 'r6', name: 'Smart Speaker', price: 69, originalPrice: 79, image: UNSPLASH('1589492477829-5e65395b66cc'), badges: ['sale', 'new'], hasVideo: true, videoUrl: getSampleVideoUrl(5) },
];
