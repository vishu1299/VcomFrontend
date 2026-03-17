import type { ExclusiveProduct } from '../../exclusive/data/products';
import { getSampleVideoUrl } from '../../exclusive/data/products';

const UNSPLASH = (id: string, w = 400) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&fit=crop`;

export const MENS_RECOMMENDED_PRODUCTS: ExclusiveProduct[] = [
  { id: 'm1', name: 'Pure Cotton Half Sleeves Regular Fit T-shirt', price: 29, originalPrice: 688, image: UNSPLASH('1521572160342-696fcf89bda9'), badges: ['sale', 'new'], hasVideo: true, videoUrl: getSampleVideoUrl(0) },
  { id: 'm2', name: 'Casual Half Sleeve Cottonblend Printed T-shirt', price: 29, originalPrice: 599, image: UNSPLASH('1576566588028-4147f3842f27'), badges: ['sale', 'new'], hasVideo: true, videoUrl: getSampleVideoUrl(1) },
  { id: 'm3', name: 'Trendy Half Sleeve Oversized Cotton T-shirt', price: 35, originalPrice: 699, image: UNSPLASH('1552374196-c4e7ffc6e126'), badges: ['sale', 'new', 'sponsored'], hasVideo: true, videoUrl: getSampleVideoUrl(2) },
  { id: 'm4', name: 'Slim Fit Solid Casual Shirt', price: 39, originalPrice: 799, image: UNSPLASH('1596755094511-9ebf7a1c0a18'), badges: ['sale', 'new', 'sponsored'], hasVideo: true, videoUrl: getSampleVideoUrl(3) },
  { id: 'm5', name: 'Regular Fit Stretchable Jeans', price: 49, originalPrice: 999, image: UNSPLASH('1541099649105-02e4e4be2ce0'), badges: ['sale', 'new'], hasVideo: true, videoUrl: getSampleVideoUrl(4) },
  { id: 'm6', name: 'Cotton Blend Hoodie with Kangaroo Pocket', price: 59, originalPrice: 1299, image: UNSPLASH('1556821840-3a63f95609a7'), badges: ['sale', 'new'], hasVideo: true, videoUrl: getSampleVideoUrl(5) },
];
