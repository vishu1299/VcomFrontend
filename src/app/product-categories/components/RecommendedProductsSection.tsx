'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ExclusiveProductCard from '../../exclusive/components/ExclusiveProductCard';
import type { ExclusiveProduct } from '../../exclusive/data/products';

type RecommendedProductsSectionProps = {
  products: ExclusiveProduct[];
};

export default function RecommendedProductsSection({ products }: RecommendedProductsSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.85;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section
      className="px-4 sm:px-6 py-5 sm:py-6 lg:py-8"
      aria-label="Recommended products"
      style={{ fontFamily: 'var(--font-poppins)' }}
    >
      <h2 className="font-bold text-black text-[17px] sm:text-[18px] lg:text-[20px] leading-tight mb-4 sm:mb-5">
        Recommended Products
      </h2>

      <div className="relative -mx-4 sm:mx-0">
        <button
          type="button"
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-[#e5e7eb] flex items-center justify-center hover:bg-gray-50 transition shadow -ml-2 sm:ml-0"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 text-[#374151]" />
        </button>
        <button
          type="button"
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-[#e5e7eb] flex items-center justify-center hover:bg-gray-50 transition shadow -mr-2 sm:mr-0"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 text-[#374151]" />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-2 px-4 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[200px] sm:w-[220px] md:w-[240px] flex-shrink-0 flex flex-col"
            >
              <ExclusiveProductCard {...product} variant="grid" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
