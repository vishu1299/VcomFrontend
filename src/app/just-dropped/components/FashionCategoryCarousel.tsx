'use client';

import { useRef } from 'react';
type CategoryItem = { id: string; label: string; image: string };

type FashionCategoryCarouselProps = {
  categories: CategoryItem[];
  title?: string;
  /** Shown under the title (e.g. "Men's Clothing") */
  subtitle?: string;
};

export default function FashionCategoryCarousel({
  categories,
  title = 'Latest in Fashion & Apparel',
  subtitle,
}: FashionCategoryCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.85;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  if (categories.length === 0) return null;

  return (
    <section
      className="mb-6 sm:mb-8 bg-white p-3 sm:p-4 rounded-xl min-w-0 overflow-hidden"
      aria-labelledby="fashion-carousel-title"
    >
      <h2
        id="fashion-carousel-title"
        className="text-lg sm:text-xl md:text-2xl font-bold text-[#131313] mb-1 sm:mb-2"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-xs sm:text-sm md:text-base text-[#767676] mb-3 sm:mb-4 md:mb-5">{subtitle}</p>
      )}
      <div className="relative min-w-0">
        <div
          ref={scrollRef}
          className="flex gap-3 sm:gap-4 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory -mx-3 px-3 sm:-mx-4 sm:px-4 md:mx-0 md:px-0"
          style={{ scrollBehavior: 'smooth' }}
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="flex h-[268px] w-[140px] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-[#e5e7eb] bg-[#EFEFEF] shadow-sm sm:h-[292px] sm:w-[180px] md:h-[308px] md:w-[200px] lg:h-[324px] lg:w-[220px]"
            >
              {/* Same image box on every card; object-cover fills frame evenly */}
              <div className="relative min-h-0 flex-1 overflow-hidden bg-[#EFEFEF]">
                <img
                  src={cat.image}
                  alt=""
                  className="h-full w-full object-cover object-center"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop';
                  }}
                />
              </div>
              {/* Label strip pinned to bottom, fixed min-height so all cards align */}
              <div className="flex min-h-[52px] shrink-0 items-center justify-center border-t border-[#e5e7eb] bg-white px-2 py-2 sm:min-h-[56px] sm:px-3 sm:py-2.5">
                <span className="line-clamp-2 text-center text-[10px] font-semibold leading-tight text-[#131313] sm:text-xs">
                  {cat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => scroll('left')}
          className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 sm:-translate-x-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-300 shadow items-center justify-center hover:bg-gray-50 z-10"
          aria-label="Previous categories"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#131313] sm:w-5 sm:h-5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scroll('right')}
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 sm:translate-x-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-300 shadow items-center justify-center hover:bg-gray-50 z-10"
          aria-label="Next categories"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#131313] sm:w-5 sm:h-5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
