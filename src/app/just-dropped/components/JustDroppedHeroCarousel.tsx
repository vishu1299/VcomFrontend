'use client';

import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ExclusiveProductCard from '@/app/top-deals/components/TopdealsProductCard';
import { EXCLUSIVE_HORIZONTAL_PRODUCTS } from '@/app/top-deals/data/products';

type JustDroppedHeroCarouselProps = {
  title: string;
  subtitle: string;
  /** e.g. text-[#131313] for black */
  titleClassName?: string;
};

/** Same scroll UX as top-deals horizontal strip; customizable heading for Just Dropped. */
export default function JustDroppedHeroCarousel({
  title,
  subtitle,
  titleClassName = 'text-[#131313]',
}: JustDroppedHeroCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const total = EXCLUSIVE_HORIZONTAL_PRODUCTS.length;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const scrollDesktop = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({
      left: dir === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  const scrollMobile = (dir: 'left' | 'right') => {
    const next =
      dir === 'left'
        ? Math.max(0, currentIndex - 1)
        : Math.min(total - 1, currentIndex + 1);
    setCurrentIndex(next);
    if (!scrollRef.current) return;
    const card = scrollRef.current.children[next] as HTMLElement;
    card?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  };

  const handleLeft = () => (isMobile ? scrollMobile('left') : scrollDesktop('left'));
  const handleRight = () => (isMobile ? scrollMobile('right') : scrollDesktop('right'));

  return (
    <section
      className="mt-2 sm:mt-4 lg:mt-6 mb-6 sm:mb-8 rounded-[10px] overflow-hidden bg-[#fef9e7]"
      aria-label={title}
      style={{ fontFamily: 'var(--font-poppins)' }}
    >
      <div className="px-4 sm:px-6 lg:px-8 pt-5 sm:pt-6 pb-4 lg:pb-5">
        <div className="mb-4 lg:mb-5 flex flex-col gap-0">
          <h2
            className={`font-bold text-design-18 sm:text-design-20 lg:text-design-24 mb-1.5 leading-tight ${titleClassName}`}
          >
            {title}
          </h2>
          <p className="text-design-14 text-[var(--color-muted-alt)] font-normal leading-normal">
            {subtitle}
          </p>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={handleLeft}
            disabled={isMobile && currentIndex === 0}
            className="absolute left-0 top-1/2 z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5e7eb] bg-white shadow-md transition hover:bg-[#f3f4f6] disabled:cursor-not-allowed disabled:opacity-30 sm:h-9 sm:w-9"
            aria-label="Previous"
          >
            <ChevronLeft className="h-4 w-4 text-[#374151] sm:h-5 sm:w-5" />
          </button>
          <button
            type="button"
            onClick={handleRight}
            disabled={isMobile && currentIndex === total - 1}
            className="absolute right-0 top-1/2 z-10 flex h-8 w-8 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5e7eb] bg-white shadow-md transition hover:bg-[#f3f4f6] disabled:cursor-not-allowed disabled:opacity-30 sm:h-9 sm:w-9"
            aria-label="Next"
          >
            <ChevronRight className="h-4 w-4 text-[#374151] sm:h-5 sm:w-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto scroll-smooth pb-1 sm:gap-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {EXCLUSIVE_HORIZONTAL_PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="flex w-[200px] shrink-0 flex-col sm:w-[220px] md:w-[240px]"
              >
                <ExclusiveProductCard {...product} variant="horizontal" />
              </div>
            ))}
          </div>
        </div>

        {isMobile && (
          <div className="mt-3 flex justify-center gap-1.5">
            {EXCLUSIVE_HORIZONTAL_PRODUCTS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setCurrentIndex(i);
                  const card = scrollRef.current?.children[i] as HTMLElement;
                  card?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }}
                className={`rounded-full transition-all ${
                  i === currentIndex ? 'h-2.5 w-2.5 bg-[#131313]' : 'h-2 w-2 bg-[#d1d5db]'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
