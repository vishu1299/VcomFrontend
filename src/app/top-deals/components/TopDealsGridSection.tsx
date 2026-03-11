'use client';

import { useRef } from 'react';
import DealCard, { type DealCardProps } from './DealCard';
import Pagination from './Pagination';

const GRID_PAGE_SIZE = 9;

type TopDealsGridSectionProps = {
  title: string;
  products: DealCardProps[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function TopDealsGridSection({
  title,
  products,
  currentPage,
  totalPages,
  onPageChange,
}: TopDealsGridSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.9;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section className="mb-8" aria-labelledby="top-deals-grid-title">
      <h2
        id="top-deals-grid-title"
        className="text-2xl sm:text-3xl font-bold text-[#131313] mb-6 sm:mb-8"
      >
        {title}
      </h2>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 md:overflow-visible md:grid md:grid-cols-3 md:gap-4 lg:gap-5"
          style={{ scrollBehavior: 'smooth' }}
        >
          {products.length === 0 ? (
            <p className="text-[#767676] text-sm py-8">No deals in this category.</p>
          ) : (
            products.map((product) => (
              <div
                key={product.id}
                className="min-w-[220px] sm:min-w-[240px] snap-start shrink-0 md:min-w-0"
              >
                <DealCard {...product} />
              </div>
            ))
          )}
        </div>

        <button
          type="button"
          onClick={() => scroll('left')}
          className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-10 h-10 rounded-full bg-white border border-gray-300 shadow flex items-center justify-center hover:bg-gray-50 z-10"
          aria-label="Previous"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scroll('right')}
          className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-10 h-10 rounded-full bg-white border border-gray-300 shadow flex items-center justify-center hover:bg-gray-50 z-10"
          aria-label="Next"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </section>
  );
}

export { GRID_PAGE_SIZE };
