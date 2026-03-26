'use client';

import ExclusiveProductSection from '@/app/top-deals/components/TopdealsProductSection';
import type { ExclusiveProduct } from '@/app/top-deals/data/products';

const RECENTLY_BROWSED_PRODUCTS: ExclusiveProduct[] = [
  {
    id: 'h1',
    name: 'Apple iPhone X 256GB 3GB RAM',
    price: 29,
    originalPrice: 30,
    image: '/images/signin.png',
    badges: ['sale', 'new'],
    hasVideo: true,
  },
  {
    id: 'h2',
    name: 'Wireless Headphones Pro latest',
    price: 89,
    originalPrice: 99,
    image: '/images/create.png',
    badges: ['new'],
    hasVideo: true,
  },
  {
    id: 'h3',
    name: 'Designer Sunglasses Raybon latest',
    price: 45,
    originalPrice: 60,
    image: '/images/logo.png',
    badges: ['sale'],
    hasVideo: false,
  },
  {
    id: 'h4',
    name: 'Smart Watch Series 5 latest launch',
    price: 199,
    originalPrice: 249,
    image: '/images/forgot.png',
    badges: ['sale', 'new'],
    hasVideo: true,
  },
  {
    id: 'h5',
    name: 'Apple iPhone X 256GB 3GB RAM',
    price: 29,
    originalPrice: 30,
    image: '/images/signin.png',
    badges: ['sale', 'new'],
    hasVideo: true,
  },
  {
    id: 'h6',
    name: 'Wireless Headphones Pro latest',
    price: 89,
    originalPrice: 99,
    image: '/images/create.png',
    badges: ['new'],
    hasVideo: true,
  },

];

export function RecentlyBrowsed() {
  return (
    <div style={{ fontFamily: 'var(--font-poppins)' }}>
      <ExclusiveProductSection
        title="Recently Browsed"
        products={RECENTLY_BROWSED_PRODUCTS}
        layout="carousel"
        sectionVariant="white"
      />
    </div>
  );
}

export default RecentlyBrowsed;
