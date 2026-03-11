'use client';

import Link from 'next/link';
import ProductCard, { type ProductCardProps } from './ProductCard';

const carouselProducts: ProductCardProps[] = [
  {
    id: 'c1',
    name: "Men's Half Sleeve Solid Casual Reg...",
    price: 29,
    originalPrice: 33,
    image: '/images/dryer.png',
    badges: ['10% OFF'],
    hasVideo: true,
  },
  {
    id: 'c2',
    name: "Men's Half Sleeve Solid Casual Reg...",
    price: 29,
    originalPrice: 33,
    image: '/images/watch.png',
    badges: ['10% OFF'],
    sponsored: true,
    hasVideo: true,
  },
  {
    id: 'c3',
    name: "Men's Half Sleeve Solid Casual Reg...",
    price: 29,
    originalPrice: 33,
    image: '/images/massajar.png',
    badges: ['10% OFF'],
    hasVideo: true,
  },
  {
    id: 'c4',
    name: "Men's Half Sleeve Solid Casual Reg...",
    price: 29,
    originalPrice: 33,
    image: '/images/dryer.png',
    badges: ['10% OFF'],
    hasVideo: true,
  },
  {
    id: 'c5',
    name: "Men's Half Sleeve Solid Casual Reg...",
    price: 29,
    originalPrice: 33,
    image: '/images/watch.png',
    badges: ['10% OFF'],
    hasVideo: true,
  },
];

export default function TopProductsSection() {
  return (
    <section className="mb-2 sm:mb-4 bg-[#fff3cf] p-4 rounded-lg" aria-label="Top products">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-4 sm:mb-5">
        <div className="flex gap-2">
          <h2 className="text-design-18 sm:text-design-20 font-bold text-[var(--color-black)]">
            Top Products
          </h2>
          <p className="text-design-14 sm:text-design-16 text-[var(--color-muted-alt-2)] mt-0.5">
            Most selling products in all categories
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
          {carouselProducts.map((product) => (
            <div
              key={product.id}
              className="min-w-[240px] sm:min-w-[240px] lg:min-w-[250px] snap-start shrink-0"
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
        <button
          type="button"
          className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-white border border-[var(--color-border)] shadow items-center justify-center hover:bg-gray-100 transition z-10"
          aria-label="Previous products"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--color-black)]">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          type="button"
          className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-white border border-[var(--color-border)] shadow items-center justify-center hover:bg-gray-100 transition z-10"
          aria-label="Next products"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--color-black)]">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
