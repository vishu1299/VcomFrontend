'use client';

import Image from 'next/image';
import { Heart, Play, ShoppingCart } from 'lucide-react';
import type { RecommendedProduct } from '../data/products';

type RecommendedProductCardProps = RecommendedProduct;

export default function RecommendedProductCard({
  name,
  price,
  image,
  badges,
  hasVideo = false,
}: RecommendedProductCardProps) {
  return (
    <article className="bg-white rounded-xl border border-[var(--color-border)] overflow-hidden shadow-sm hover:shadow transition flex flex-col h-full shrink-0 w-[240px] sm:w-[260px] lg:w-[280px]">
      <div className="relative aspect-square bg-[var(--color-border)]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 240px, (max-width: 1024px) 260px, 280px"
        />
        <div className="absolute top-2 left-2 flex gap-1 flex-wrap">
          {badges.includes('NEW') && (
            <span className="bg-[var(--color-main-blue)] text-white text-[10px] sm:text-design-12 font-medium px-2 py-0.5 rounded">
              NEW
            </span>
          )}
          {badges.includes('SALE') && (
            <span className="bg-amber-400 text-[var(--color-black)] text-[10px] sm:text-design-12 font-medium px-2 py-0.5 rounded">
              SALE
            </span>
          )}
        </div>
        <button
          type="button"
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white border border-[var(--color-border)]"
          aria-label="Add to wishlist"
        >
          <Heart className="w-4 h-4 text-[var(--color-black)]" />
        </button>
        {hasVideo && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 pointer-events-none">
            <span className="w-12 h-12 rounded-full bg-white/95 flex items-center justify-center border-2 border-[var(--color-border)] shadow">
              <Play className="w-5 h-5 text-[var(--color-black)] ml-0.5" fill="currentColor" />
            </span>
          </div>
        )}
      </div>
      <div className="p-3 sm:p-4 flex flex-col flex-1">
        <p className="text-design-14 sm:text-design-16 font-medium text-[var(--color-black)] line-clamp-2 mb-2 flex-1">
          {name}
        </p>
        <p className="text-design-16 sm:text-design-18 font-bold text-[var(--color-black)] mb-3">
          ${price}
        </p>
        <button
          type="button"
          className="mt-auto w-10 h-10 rounded-lg border border-[var(--color-border)] flex items-center justify-center text-[var(--color-black)] hover:bg-[var(--color-border)] transition"
          aria-label="Add to cart"
        >
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>
    </article>
  );
}
