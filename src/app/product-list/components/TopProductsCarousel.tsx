'use client';

import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductListCarouselCard from './ProductListCarouselCard';
import type { ProductCardProps } from './ProductCard';

const carouselProducts: ProductCardProps[] = [
  {
    id: '1',
    name: "Men's Half Sleeve Solid Casual Regular Fit",
    price: 29,
    originalPrice: 32,
    image: '/images/product1.png',
    badges: ['10% OFF','SPONSORED'],
    hasVideo: true,
  },
  {
    id: '2',
    name: "Men's Half Sleeve Solid Casual Regular Fit",
    price: 29,
    originalPrice: 32,
    image: '/images/product2.png',
    badges: ['10% OFF', 'NEW'],
    hasVideo: true,
  },
  {
    id: '3',
    name: "Men's Half Sleeve Solid Casual Regular Fit",
    price: 29,
    originalPrice: 32,
    image: '/images/product3.png',
    badges: ['10% OFF','SPONSORED'],
    hasVideo: true,
  },
  {
    id: '4',
    name: "Men's Half Sleeve Solid Casual Regular Fit",
    price: 29,
    originalPrice: 58,
    image: '/images/product1.png',
    badges: ['10% OFF'],
    hasVideo: false,
  },
  {
    id: '5',
    name: "Men's Half Sleeve Solid Casual Regular Fit",
    price: 29,
    originalPrice: 32,
    image: '/images/product2.png',
    badges: ['10% OFF','SPONSORED'],
    hasVideo: true,
  },
];

type TopProductsCarouselProps = {
  onProductClick?: (product: ProductCardProps) => void;
};

export default function TopProductsCarousel({ onProductClick }: TopProductsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const total = carouselProducts.length;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const scrollDesktop = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  const [currentIndex, setCurrentIndex] = useState(0);
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
      className="mb-2 px-6 py-4 sm:mb-2 md:px-4"
      style={{ background: '#FFF3CF' }}
      aria-label="Top products"
    >
      <div className="mb-4 flex flex-wrap items-baseline gap-2 sm:mb-5 sm:gap-3">
        <h2 className="text-design-24 font-bold text-black sm:text-design-28 lg:text-design-32">
          Top Products
        </h2>
        <p className="text-design-16 text-[#767676] sm:text-design-14">
          Most selling across all categories - updated daily
        </p>
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={handleLeft}
          disabled={isMobile && currentIndex === 0}
          className="absolute left-0 top-1/2 z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5e7eb] bg-white shadow-md transition hover:bg-[#f3f4f6] disabled:cursor-not-allowed disabled:opacity-30 sm:h-9 sm:w-9"
          aria-label="Previous products"
        >
          <ChevronLeft className="h-4 w-4 text-[#374151] sm:h-5 sm:w-5" />
        </button>
        <button
          type="button"
          onClick={handleRight}
          disabled={isMobile && currentIndex === total - 1}
          className="absolute right-0 top-1/2 z-10 flex h-8 w-8 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5e7eb] bg-white shadow-md transition hover:bg-[#f3f4f6] disabled:cursor-not-allowed disabled:opacity-30 sm:h-9 sm:w-9"
          aria-label="Next products"
        >
          <ChevronRight className="h-4 w-4 text-[#374151] sm:h-5 sm:w-5" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scroll-smooth pb-2 sm:gap-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {carouselProducts.map((product) => (
            <div
              key={product.id}
              className="flex w-[200px] shrink-0 flex-col sm:w-[220px] md:w-[240px]"
            >
              <ProductListCarouselCard
                {...product}
                onQuickView={onProductClick ? () => onProductClick(product) : undefined}
              />
            </div>
          ))}
        </div>

        {isMobile && (
          <div className="mt-3 flex justify-center gap-1.5">
            {carouselProducts.map((_, i) => (
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
                aria-label={`Go to product ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
