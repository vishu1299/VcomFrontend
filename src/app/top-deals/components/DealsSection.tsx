'use client';

import { useRef } from 'react';
import DealCard, { type DealCardProps } from './DealCard';

type DealsSectionProps = {
  title: string;
  products: DealCardProps[];
};



export default function DealsSection({ title, products }: DealsSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.85;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  if (products.length === 0) return null;

  const sectionId = title.replace(/\s+/g, '-').toLowerCase();
  return (
    <section
      className="mb-5 bg-white p-4 rounded-2xl border-[#e5e7eb] last:border-b-0 last:pb-0 last:mb-0"
      aria-labelledby={`section-${sectionId}`}
    >
      <h2
        id={`section-${sectionId}`}
        className="text-xl sm:text-2xl font-bold text-[#131313] mb-5 sm:mb-6"
      >
        {title}
      </h2>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollBehavior: 'smooth' }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[220px] sm:min-w-[240px] lg:min-w-[260px] snap-start shrink-0"
            >
              <DealCard {...product} />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scroll('left')}
          className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-gray-200/95 border border-[#e5e7eb] items-center justify-center hover:bg-gray-300 transition z-10 shadow-sm"
          aria-label={`Previous ${title}`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#131313]">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scroll('right')}
          className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-gray-200/95 border border-[#e5e7eb] items-center justify-center hover:bg-gray-300 transition z-10 shadow-sm"
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
