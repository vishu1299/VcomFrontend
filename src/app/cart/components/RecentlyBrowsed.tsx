'use client';

import { useState, useCallback } from 'react';
import NextImage from 'next/image';
import { ChevronLeft, ChevronRight, ShoppingCart, Heart } from 'lucide-react';
import Link from 'next/link';

const recentlyBrowsed = [
  { id: 1, name: 'Apple iPhone X 256GB 3GB RAM', price: 29, originalPrice: 30, image: '/images/signin.png', badges: ['SALE', 'NEW'] },
  { id: 2, name: 'Wireless Headphones Pro', price: 89, originalPrice: 99, image: '/images/create.png', badges: ['NEW'] },
  { id: 3, name: 'Designer Sunglasses', price: 45, originalPrice: 60, image: '/images/logo.png', badges: ['SALE'] },
  { id: 4, name: 'Smart Watch Series 5', price: 199, originalPrice: 249, image: '/images/forgot.png', badges: ['SALE', 'NEW'] },
];

const CARD_GAP = 16;          // px (Figma gap)
const CARD_WIDTH = 320;      // px (measured from screenshot)

export function RecentlyBrowsed() {
  const [current, setCurrent] = useState(0);

  const maxIndex = Math.max(0, recentlyBrowsed.length - 1);

  const goPrev = useCallback(() => {
    setCurrent((p) => Math.max(p - 1, 0));
  }, []);

  const goNext = useCallback(() => {
    setCurrent((p) => Math.min(p + 1, maxIndex));
  }, [maxIndex]);

  return (
    <section
      className="mt-10 sm:mt-12 lg:mt-16"
      style={{ fontFamily: 'var(--font-poppins)' }}
      aria-label="Recently browsed"
    >
      <h2
        className="font-semibold text-[18px] sm:text-[20px] lg:text-[24px] mb-4 sm:mb-6"
        style={{ color: '#1F1D2B' }}
      >
        Recently Browsed
      </h2>

      <div className="relative overflow-hidden">
        {/* TRACK */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            gap: `${CARD_GAP}px`,
            transform: `translateX(-${current * (CARD_WIDTH + CARD_GAP)}px)`,
          }}
        >
          {recentlyBrowsed.map((product) => (
            <div
              key={product.id}
              className="shrink-0"
              style={{
                width: 'clamp(220px, 22vw, 320px)', // 🔥 responsive + figma-accurate
              }}
            >
              <article
                className="bg-white rounded-[12px] border shadow-sm overflow-hidden h-full"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <Link href="/product-list" className="block h-full">
                  {/* IMAGE */}
                  <div
                    className="relative aspect-square"
                    style={{ backgroundColor: '#F7F7F7' }}
                  >
                    <NextImage
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 70vw, (max-width: 1024px) 33vw, 320px"
                    />

                    {/* BADGES */}
                    <div className="absolute top-2 left-2 flex gap-1.5">
                      {product.badges.includes('SALE') && (
                        <span className="px-2 py-0.5 rounded-[4px] text-[10px] font-medium bg-amber-400 text-[#1F1D2B]">
                          SALE
                        </span>
                      )}
                      {product.badges.includes('NEW') && (
                        <span className="px-2 py-0.5 rounded-[4px] text-[10px] font-medium bg-[#1E3A8A] text-white">
                          NEW
                        </span>
                      )}
                    </div>

                    {/* WISHLIST */}
                    <button
                      type="button"
                      onClick={(e) => e.preventDefault()}
                      className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white flex items-center justify-center border shadow-sm"
                      style={{ borderColor: 'var(--color-border)' }}
                    >
                      <Heart className="w-4 h-4" strokeWidth={2} style={{ color: '#1F1D2B' }} />
                    </button>
                  </div>

                  {/* CONTENT */}
                  <div className="p-3 sm:p-4 flex flex-col h-full">
                    <p className="text-[13px] sm:text-[14px] line-clamp-2 mb-1 text-[#1F1D2B]">
                      {product.name}
                    </p>

                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="font-semibold text-[14px] sm:text-[16px] text-[#1F1D2B]">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-[12px] line-through text-[var(--color-muted-alt-2)]">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>

                    <span
                      className="mt-auto inline-flex items-center justify-center gap-2 w-full min-h-[40px] rounded-[6px] border text-[12px] sm:text-[14px] font-medium"
                      style={{ borderColor: 'var(--color-border)', color: '#1F1D2B' }}
                    >
                      <ShoppingCart className="w-4 h-4" strokeWidth={2} />
                      ADD TO CART
                    </span>
                  </div>
                </Link>
              </article>
            </div>
          ))}
        </div>

        {/* ARROWS */}
        <button
          onClick={goPrev}
          aria-label="Previous"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border shadow-md flex items-center justify-center z-10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={goNext}
          aria-label="Next"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border shadow-md flex items-center justify-center z-10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
