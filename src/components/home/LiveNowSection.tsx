'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const products = [
  {
    name: "Women's Black Leather Jacket",
    price: 125.99,
    originalPrice: 129,
    image: '/images/cloth1.png',
    badges: ['LIVE NOW', 'FLASH SALE', 'NEW'],
  },
  {
    name: 'British Only Hoodie',
    price: 89.99,
    originalPrice: 99,
    image: '/images/cloth2.png',
    badges: ['LIVE NOW', 'SALE', 'NEW'],
  },
  {
    name: 'EDGY BLUE DENIM JACKET',
    price: 149.99,
    originalPrice: 179,
    image: '/images/cloth3.png',
    badges: ['LIVE NOW', 'NEW'],
  },
  {
    name: "Men's Running Shoes",
    price: 79.99,
    originalPrice: 89,
    image: '/images/cloth4.png',
    badges: ['LIVE NOW', 'FLASH SALE'],
  },
  {
    name: "Men's Running Shoes",
    price: 79.99,
    originalPrice: 89,
    image: '/images/cloth5.png',
    badges: ['LIVE NOW', 'FLASH SALE'],
  },
  {
    name: 'Classic White Sneakers',
    price: 69.99,
    originalPrice: 79,
    image: '/images/cloth1.png',
    badges: ['LIVE NOW', 'NEW'],
  },
  {
    name: 'Urban Cargo Pants',
    price: 59.99,
    originalPrice: 69,
    image: '/images/cloth2.png',
    badges: ['LIVE NOW', 'SALE'],
  },
  {
    name: 'Silk Evening Dress',
    price: 189.99,
    originalPrice: 220,
    image: '/images/cloth3.png',
    badges: ['LIVE NOW', 'FLASH SALE'],
  },
  {
    name: 'Leather Crossbody Bag',
    price: 99.99,
    originalPrice: 119,
    image: '/images/cloth4.png',
    badges: ['LIVE NOW', 'NEW'],
  },
];

export default function LiveNowSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByDir = (dir: 'left' | 'right') => {
    const el = trackRef.current;
    if (!el) return;
    const step = Math.max(220, Math.floor(el.clientWidth * 0.7));
    el.scrollBy({ left: dir === 'left' ? -step : step, behavior: 'smooth' });
  };

  return (
    <section
      className="w-full min-w-0 overflow-hidden px-4 py-4 sm:px-5 sm:py-5 lg:px-6 lg:py-6"
      style={{ background: '#FAE5F1' }}
      aria-label="LIVE NOW products"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="mb-4 sm:mb-5">
          <h2 className="text-design-20  sm:text-design-24 font-bold text-[var(--color-error)] mb-1 flex items-center gap-2">
           <Image src="/images/tv.png" alt="Live Now" width={22} height={22} /> LIVE NOW
          </h2>
          <p className="text-design-14 sm:text-design-16 text-[var(--color-muted-alt-2)]">
            Showcasing Active Stores Live Streams in real-time.
          </p>
        </div>

        <div className="relative">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 scrollbar-hide sm:gap-4 -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {products.map((product, i) => (
              <article
                key={i}
                className="min-w-[180px] sm:min-w-[195px] lg:min-w-[205px] bg-white rounded-lg overflow-hidden shadow-sm border border-[var(--color-border)] snap-start shrink-0 flex flex-col"
              >
                <div className="flex items-center gap-1 bg-white px-2 pt-2">
                  <span className="inline-flex items-center gap-1 bg-[var(--color-error)] text-white text-[9px] font-medium px-1.5 py-0.5 rounded">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    LIVE NOW
                  </span>
                  {product.badges.includes('FLASH SALE') && (
                    <span className="bg-amber-400 text-[var(--color-black)] text-[9px] font-medium px-1.5 py-0.5 rounded">
                      FLASH SALE
                    </span>
                  )}
                  <span className="bg-[var(--color-main-blue)] text-white text-[9px] font-medium px-1.5 py-0.5 rounded ml-auto">
                    NEW
                  </span>
                </div>
                <div className="relative h-[150px] sm:h-[165px] bg-white">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-3"
                    sizes="(max-width: 640px) 180px, (max-width: 1024px) 195px, 205px"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="h-8 w-8 rounded-full bg-white/90 flex items-center justify-center">
                      <Play className="w-3.5 h-3.5 text-[var(--color-black)] ml-0.5" fill="currentColor" />
                    </span>
                  </div>
                </div>
                <div className="p-2.5 sm:p-3">
                  <p className="min-h-[38px] text-[14px] font-medium text-[var(--color-black)] line-clamp-2 mb-1">
                    {product.name}
                  </p>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="text-[20px] leading-none font-semibold text-[var(--color-black)]">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-[13px] text-[var(--color-muted-alt-2)] line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="w-full bg-[var(--color-error)] text-white text-[14px] font-medium py-1.5 rounded-md hover:opacity-95 flex items-center justify-center gap-1.5"
                  >
                    Join Live
                    <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-white text-[var(--color-error)]">
                      <ChevronRight className="h-3 w-3" />
                    </span>
                  </button>
                </div>
              </article>
            ))}
          </div>
          <button
            type="button"
            onClick={() => scrollByDir('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-white/90 border border-[var(--color-border)] shadow items-center justify-center hover:bg-white transition"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-[var(--color-black)]" />
          </button>
          <button
            type="button"
            onClick={() => scrollByDir('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-white/90 border border-[var(--color-border)] shadow items-center justify-center hover:bg-white transition"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-[var(--color-black)]" />
          </button>
        </div>

        <div className="text-center mt-4">
          <Link
            href="/all-live-now"
            className="text-design-14 sm:text-design-16 font-medium text-[var(--color-black)] hover:underline"
          >
            View all
          </Link>
        </div>
      </div>
    </section>
  );
}
