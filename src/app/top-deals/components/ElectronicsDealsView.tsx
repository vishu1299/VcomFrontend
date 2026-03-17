'use client';

import { useRef, useState } from 'react';
import ElectronicsDealCard from './ElectronicsDealCard';
import { ELECTRONICS_SECTIONS } from '../data/electronicsDeals';
import type { ElectronicsDealItem } from '../data/electronicsDeals';
import Pagination from './Pagination';

function CarouselSection({ title, products }: { title: string; products: ElectronicsDealItem[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.85;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  if (products.length === 0) return null;

  return (
    <section className="bg-white rounded-xl p-4 sm:p-6 mb-8" aria-labelledby={title.replace(/\s+/g, '-')}>
      <h2 className="text-xl sm:text-2xl font-bold text-[#131313] mb-5 sm:mb-6" id={title.replace(/\s+/g, '-')}>
        {title}
      </h2>
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollBehavior: 'smooth' }}
        >
          {products.map((product) => (
            <div key={product.id} className="min-w-[220px] sm:min-w-[240px] lg:min-w-[260px] snap-start shrink-0">
              <ElectronicsDealCard {...product} />
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => scroll('left')}
          className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-white border border-gray-300 shadow items-center justify-center hover:bg-gray-50 z-10"
          aria-label={`Previous ${title}`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#131313]">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scroll('right')}
          className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-white border border-gray-300 shadow items-center justify-center hover:bg-gray-50 z-10"
          aria-label={`Next ${title}`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#131313]">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}

const PAGINATION_TOTAL_PAGES = 45;

export default function ElectronicsDealsView() {
  const [currentPage, setCurrentPage] = useState(1);
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(PAGINATION_TOTAL_PAGES, startPage + 4);
  const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <div className="flex flex-col gap-4">
      <div className=" mb-6">
        {ELECTRONICS_SECTIONS.map((section) => (
          <CarouselSection key={section.id} title={section.title} products={section.products} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={PAGINATION_TOTAL_PAGES}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
