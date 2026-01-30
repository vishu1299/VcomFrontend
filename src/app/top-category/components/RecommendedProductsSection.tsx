'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import RecommendedProductCard from './RecommendedProductCard';
import { RECOMMENDED_PRODUCTS } from '../data/products';

export default function RecommendedProductsSection() {
  return (
    <section className="mb-8 sm:mb-10 lg:mb-12" aria-label="Recommended products">
      <h2 className="text-design-20 sm:text-design-24 font-bold text-[var(--color-black)] mb-6 sm:mb-8">
        Recommended Products
      </h2>

      <div className="relative">
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
          {RECOMMENDED_PRODUCTS.map((product) => (
            <div key={product.id} className="snap-start shrink-0">
              <RecommendedProductCard {...product} />
            </div>
          ))}
        </div>
        <button
          type="button"
          className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-white border border-[var(--color-border)] shadow items-center justify-center hover:bg-[var(--color-border)] transition z-10"
          aria-label="Previous products"
        >
          <ChevronLeft className="w-5 h-5 text-[var(--color-black)]" />
        </button>
        <button
          type="button"
          className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-white border border-[var(--color-border)] shadow items-center justify-center hover:bg-[var(--color-border)] transition z-10"
          aria-label="Next products"
        >
          <ChevronRight className="w-5 h-5 text-[var(--color-black)]" />
        </button>
      </div>
    </section>
  );
}
