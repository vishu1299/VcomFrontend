'use client';

import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ExclusiveProductCard from './ExclusiveProductCard';
import { EXCLUSIVE_HORIZONTAL_PRODUCTS } from '../data/products';

export default function ExclusiveHorizontalScroll() {
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

  /* Desktop: smooth scroll by ~80% container width */
  const scrollDesktop = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  /* Mobile: snap to exact card index */
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
      className="mt-2 sm:mt-4 lg:mt-6 mb-8 sm:mb-10 lg:mb-12 rounded-[10px] overflow-hidden bg-[#fef9e7]"
      aria-label="Exclusive on TibilMall"
      style={{ fontFamily: 'var(--font-poppins)' }}
    >
      <div className="px-4 sm:px-6 lg:px-8 pt-5 sm:pt-6 pb-4 lg:pb-5">

        {/* Header */}
        <div className="mb-4 lg:mb-5">
          <h2 className="font-bold text-design-18 sm:text-design-20 lg:text-design-24 mb-1.5 leading-tight text-[#b91c3c]">
            Exclusive on TibilMall
          </h2>
          <p className="text-design-14 text-[var(--color-muted-alt)] font-normal leading-normal">
            Discover products available exclusively on our platform.
          </p>
        </div>

        {/* Scroll area */}
        <div className="relative">

          {/* Prev button — always visible */}
          <button
            type="button"
            onClick={handleLeft}
            disabled={isMobile && currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow-md border border-[#e5e7eb] flex items-center justify-center hover:bg-[#f3f4f6] transition disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#374151]" />
          </button>

          {/* Next button — always visible */}
          <button
            type="button"
            onClick={handleRight}
            disabled={isMobile && currentIndex === total - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow-md border border-[#e5e7eb] flex items-center justify-center hover:bg-[#f3f4f6] transition disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#374151]" />
          </button>

          {/* Track */}
          <div
            ref={scrollRef}
            className="flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth pb-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {EXCLUSIVE_HORIZONTAL_PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="shrink-0"
                style={{
                  /* Mobile: full width (1 card). sm+: fluid multi-card */
                  width: isMobile ? '100%' : 'clamp(180px, 22vw, 260px)',
                }}
              >
                <ExclusiveProductCard {...product} variant="horizontal" />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile dot indicators */}
        {isMobile && (
          <div className="flex justify-center gap-1.5 mt-3">
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
                  i === currentIndex
                    ? 'w-2.5 h-2.5 bg-[#b91c3c]'
                    : 'w-2 h-2 bg-[#d1d5db]'
                }`}
                aria-label={`Go to product ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}