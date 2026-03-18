'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { SubCategoryItem } from '../data/subcategories';

type SubCategoryScrollProps = {
  items: SubCategoryItem[];
  categorySlug: string;
  /** `/category/[slug]` (men's & subcats) vs default `/product-categories/...?sub=` */
  linkMode?: 'product-categories' | 'category';
};

export default function SubCategoryScroll({
  items,
  categorySlug,
  linkMode = 'product-categories',
}: SubCategoryScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full mb-3 sm:mb-4 lg:mb-6" style={{ fontFamily: 'var(--font-poppins)' }}>
      <button
        type="button"
        onClick={() => scroll('left')}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white border border-[#e5e7eb] flex items-center justify-center hover:bg-gray-50 transition shadow-md"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#374151]" />
      </button>
      <button
        type="button"
        onClick={() => scroll('right')}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white border border-[#e5e7eb] flex items-center justify-center hover:bg-gray-50 transition shadow-md"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#374151]" />
      </button>
      {/* Small screens: 2 cards visible; large screens: full width, as many cards as fit */}
      <div
        ref={scrollRef}
        className="flex gap-3 sm:gap-4 overflow-x-auto overflow-y-hidden scroll-smooth pb-2 pt-1 mx-auto w-[252px] sm:w-[296px] md:w-[336px] lg:w-full lg:max-w-full"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        {items.map((item) => (
          <Link
            key={item.id}
            href={
              linkMode === 'category'
                ? `/category/${item.slug}`
                : `/product-categories/${categorySlug}?sub=${item.slug}`
            }
            className="shrink-0 w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] group"
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[#e5e7eb] h-full flex flex-col">
              <div className="relative w-full aspect-square bg-[#f5f5f5] shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 480px) 120px, (max-width: 640px) 130px, (max-width: 768px) 150px, (max-width: 1024px) 170px, 200px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  unoptimized={item.image.startsWith('http')}
                />
              </div>
              <p className="p-2 sm:p-3 text-center text-xs sm:text-sm font-medium text-black line-clamp-2 min-h-[36px] sm:min-h-[40px] flex items-center justify-center">
                {item.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
