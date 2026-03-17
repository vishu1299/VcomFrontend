import type { ExclusiveProduct } from '@/app/exclusive/data/products';
import { getSampleVideoUrl } from '@/app/exclusive/data/products';

const UNSPLASH = (id: string, w = 400) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&fit=crop`;

export function getSubCategoryProducts(): ExclusiveProduct[] {
  const v = getSampleVideoUrl;
  return [
    { id: '1', name: "Men's Half Sleeve Solid Green Polo T-Shirt", price: 29, originalPrice: 39, image: UNSPLASH('1521572160342-696fcf89bda9'), badges: ['sale', 'new', 'sponsored'], hasVideo: true, videoUrl: v(0) },
    { id: '2', name: "Men's Solid Unique Design T-shirt", price: 24.99, originalPrice: 35, image: UNSPLASH('1576566588028-4147f3842f27'), badges: ['sale'], hasVideo: true, videoUrl: v(1) },
    { id: '3', name: "Men's Regular Fit Casual Shirt", price: 39, originalPrice: 49, image: UNSPLASH('1596755094511-9ebf7a1c0a18'), badges: ['new', 'sponsored'], hasVideo: false },
    { id: '4', name: "Slim Fit Stretchable Jeans", price: 49, originalPrice: 69, image: UNSPLASH('1541099649105-02e4e4be2ce0'), badges: ['sale', 'new'], hasVideo: true, videoUrl: v(3) },
    { id: '5', name: "Cotton Blend Hoodie with Kangaroo Pocket", price: 59, originalPrice: 79, image: UNSPLASH('1556821840-3a63f95609a7'), badges: ['sale', 'sponsored'], hasVideo: true, videoUrl: v(4) },
    { id: '6', name: "Classic Denim Jacket", price: 79, originalPrice: 99, image: UNSPLASH('1556906781-9a412961c28c'), badges: ['new'], hasVideo: false },
    { id: '7', name: "Men's Striped Round Neck T-Shirt", price: 22, originalPrice: 30, image: UNSPLASH('1521572160342-696fcf89bda9'), badges: ['sale', 'new', 'sponsored'], hasVideo: true, videoUrl: v(6) },
    { id: '8', name: "Formal Cotton Trousers", price: 44, originalPrice: 59, image: UNSPLASH('1624378439575-d8705ad7ae80'), badges: ['sale'], hasVideo: false },
    { id: '9', name: "Oversized Graphic Print T-Shirt", price: 27, originalPrice: 38, image: UNSPLASH('1576566588028-4147f3842f27'), badges: ['new'], hasVideo: true, videoUrl: v(7) },
    { id: '10', name: "Men's Half Sleeve Solid Casual Regular Fit", price: 29, originalPrice: 33, image: UNSPLASH('1596755094511-9ebf7a1c0a18'), badges: ['sale', 'new'], hasVideo: true, videoUrl: v(0) },
    { id: '11', name: "Lightweight Summer Shirt", price: 34, originalPrice: 45, image: UNSPLASH('1541099649105-02e4e4be2ce0'), badges: ['sale', 'sponsored'], hasVideo: false },
    { id: '12', name: "Jogger Pants with Elastic Waist", price: 42, originalPrice: 55, image: UNSPLASH('1556906781-9a412961c28c'), badges: ['sale', 'new'], hasVideo: true, videoUrl: v(1) },
  ];
}

export const SUB_CATEGORY_PAGE_SIZE = 16;
export const SUB_CATEGORY_TOTAL_RESULTS = 80;
