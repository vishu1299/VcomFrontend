'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import SectionHeader from './SectionHeader';

const products = [
  {
    name: "Women's Black Leather Jacket",
    price: 125.99,
    originalPrice: 129,
    image: '/images/signin.png',
    badges: ['LIVE NOW', 'FLASH SALE', 'NEW'],
  },
  {
    name: 'British Only Hoodie',
    price: 89.99,
    originalPrice: 99,
    image: '/images/create.png',
    badges: ['LIVE NOW', 'SALE', 'NEW'],
  },
  {
    name: 'EDGY BLUE DENIM JACKET',
    price: 149.99,
    originalPrice: 179,
    image: '/images/logo.png',
    badges: ['LIVE NOW', 'NEW'],
  },
  {
    name: "Men's Running Shoes",
    price: 79.99,
    originalPrice: 89,
    image: '/images/forgot.png',
    badges: ['LIVE NOW', 'FLASH SALE'],
  },
];

export default function LiveNowSection() {
  return (
    <section
      className=" p-7 mt-8 sm:mt-10 lg:mt-12 py-6 sm:py-8 lg:py-10"
      style={{ background: '#FAE5F1' }}
      aria-label="LIVE NOW products"
    >
      <div className="mb-4 sm:mb-5">
        <h2 className="text-design-20 border-b border-red-500 sm:text-design-24 font-bold text-[var(--color-error)] mb-1">
          LIVE NOW
        </h2>
        <p className="text-design-14 sm:text-design-16 text-[var(--color-muted-alt-2)]">
          Showcasing Active Stores Live Streams in real-time.
        </p>
      </div>

      <div className="relative">
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
          {products.map((product, i) => (
            <article
              key={i}
              className="min-w-[240px] sm:min-w-[260px] lg:min-w-[280px] bg-white rounded-xl overflow-hidden shadow-sm border border-[var(--color-border)] snap-start shrink-0 flex flex-col"
            >
              <div className="relative aspect-[4/5] bg-[var(--color-border)]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 240px, 280px"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <span className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center border border-[var(--color-border)]">
                    <Play className="w-5 h-5 text-[var(--color-black)] ml-0.5" fill="currentColor" />
                  </span>
                </div>
                <div className="absolute top-2 left-2 right-2 flex justify-between items-start gap-1 flex-wrap">
                  <span className="bg-[var(--color-error)] border-b border-red-500 text-white text-[10px] sm:text-design-12 font-medium px-2 py-0.5 rounded">
                    LIVE NOW
                  </span>
                  {product.badges.includes('FLASH SALE') && (
                    <span className="bg-amber-400 text-[var(--color-black)] text-[10px] sm:text-design-12 font-medium px-2 py-0.5 rounded">
                      FLASH SALE
                    </span>
                  )}
                  <span className="bg-[var(--color-main-blue)] text-white text-[10px] sm:text-design-12 font-medium px-2 py-0.5 rounded ml-auto">
                    NEW
                  </span>
                </div>
              </div>
              <div className="p-3 sm:p-4 flex flex-col flex-1">
                <p className="text-design-14 sm:text-design-16 font-medium text-[var(--color-black)] line-clamp-2 mb-2">
                  {product.name}
                </p>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-design-16 sm:text-design-18 font-semibold text-[var(--color-black)]">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-design-12 sm:text-design-14 text-[var(--color-muted-alt-2)] line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                </div>
                <button
                  type="button"
                  className="mt-auto w-full bg-[var(--color-error)] text-white text-design-14 font-medium py-2.5 rounded-lg hover:opacity-95 flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4" fill="currentColor" />
                  Join Live
                </button>
              </div>
            </article>
          ))}
        </div>
        <button
          type="button"
          className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-white/90 border border-[var(--color-border)] shadow items-center justify-center hover:bg-white transition"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 text-[var(--color-black)]" />
        </button>
        <button
          type="button"
          className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-white/90 border border-[var(--color-border)] shadow items-center justify-center hover:bg-white transition"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 text-[var(--color-black)]" />
        </button>
      </div>

      <div className="text-center mt-4">
        <a href="#" className="text-design-14 sm:text-design-16 font-medium text-[var(--color-black)] hover:underline">
          View all
        </a>
      </div>
    </section>
  );
}
