'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ExclusiveProductCard from './ExclusiveProductCard';
import ExclusivePagination from './ExclusivePagination';
import type { ExclusiveProduct } from '../data/products';

type ExclusiveProductSectionProps = {
  title: string;
  products: ExclusiveProduct[];
  layout?: 'grid' | 'carousel';
  badgePointed?: boolean;
  showPagination?: boolean;
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
};

export default function ExclusiveProductSection({
  title,
  products,
  layout = 'carousel',
  badgePointed = false,
  showPagination = false,
  currentPage = 1,
  totalPages = 1,
  onPageChange,
}: ExclusiveProductSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.85;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section
      className="mb-6 sm:mb-8 rounded-xl overflow-hidden bg-[#f5f5f5]"
      aria-label={title}
      style={{ fontFamily: 'var(--font-poppins)' }}
    >
      <div className="px-4 sm:px-6 py-4 sm:py-5">
        <h2 className="font-bold text-[var(--color-black)] text-design-18 sm:text-design-20 lg:text-design-24 leading-tight mb-4">
          {title}
        </h2>

        {layout === 'carousel' ? (
          <div className="relative -mx-4 sm:mx-0">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-[#e5e7eb] flex items-center justify-center hover:bg-gray-50 transition -ml-2 sm:ml-0 shadow"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-[#374151]" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-[#e5e7eb] flex items-center justify-center hover:bg-gray-50 transition -mr-2 sm:mr-0 shadow"
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
                <div key={product.id} className="w-[200px] sm:w-[220px] md:w-[240px] flex-shrink-0 flex flex-col">
                  <ExclusiveProductCard {...product} variant="grid" badgePointed={badgePointed} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
            {products.map((product) => (
              <ExclusiveProductCard key={product.id} {...product} variant="grid" badgePointed={badgePointed} />
            ))}
          </div>
        )}

        {showPagination && onPageChange && totalPages > 0 && (
          <div className="mt-6">
            <ExclusivePagination compact currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
          </div>
        )}
      </div>
    </section>
  );
}
