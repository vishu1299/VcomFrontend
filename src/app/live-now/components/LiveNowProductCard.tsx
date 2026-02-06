'use client';

import Image from 'next/image';
import { Play, ShoppingCart, Video } from 'lucide-react';
import type { LiveNowProduct } from '../data/product-list';

type LiveNowProductCardProps = LiveNowProduct;

export default function LiveNowProductCard({
  sellerName,
  sellerImage,
  sellerTags,
  title,
  price,
  originalPrice,
  image,
  badges,
}: LiveNowProductCardProps) {
  return (
    <article className="bg-white rounded-xl border border-[var(--color-border)] overflow-hidden shadow-sm hover:shadow transition flex flex-col h-full">
      <div className="p-3 sm:p-4 flex items-center gap-2 border-b border-[var(--color-border)]">
        <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden shrink-0 bg-[var(--color-border)]">
          <Image
            src={sellerImage}
            alt={sellerName}
            fill
            className="object-cover"
            sizes="36px"
          />
        </div>
        <span className="text-design-12 sm:text-design-14 font-medium text-[var(--color-black)] truncate flex-1 min-w-0">
          {sellerName}
        </span>
        <div className="flex gap-1 shrink-0">
          {sellerTags.includes('FOLLOW') && (
            <span className="bg-amber-400 text-[var(--color-black)] text-[10px] sm:text-design-12 font-medium px-1.5 py-0.5 rounded">
              FOLLOW
            </span>
          )}
          {sellerTags.includes('FEATURED') && (
            <span className="bg-[var(--color-error)] text-white text-[10px] sm:text-design-12 font-medium px-1.5 py-0.5 rounded">
              FEATURED
            </span>
          )}
        </div>
      </div>

      <div className="relative aspect-square bg-[var(--color-border)] flex-1 min-h-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 pointer-events-none">
          <span className="w-12 h-12 rounded-full bg-white/95 flex items-center justify-center border-2 border-[var(--color-border)] shadow">
            <Play className="w-5 h-5 text-[var(--color-black)] ml-0.5" fill="currentColor" />
          </span>
        </div>
        <div className="absolute top-2 left-2 right-2 flex justify-between items-start gap-1 flex-wrap">
          {badges.includes('LIVE NOW') && (
            <span className="bg-[var(--color-error)] text-white text-[10px] sm:text-design-12 font-medium px-2 py-0.5 rounded">
              LIVE NOW
            </span>
          )}
          {badges.includes('FLASH SALE') && (
            <span className="bg-amber-400 text-[var(--color-black)] text-[10px] sm:text-design-12 font-medium px-2 py-0.5 rounded">
              FLASH SALE
            </span>
          )}
          {badges.includes('NEW') && (
            <span className="bg-[var(--color-main-blue)] text-white text-[10px] sm:text-design-12 font-medium px-2 py-0.5 rounded ml-auto">
              NEW
            </span>
          )}
        </div>
      </div>

      <div className="p-3 sm:p-4 flex flex-col flex-1">
        <p className="text-design-14 sm:text-design-16 font-medium text-[var(--color-black)] line-clamp-2 mb-2">
          {title}
        </p>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-design-18 sm:text-design-20 font-bold text-[var(--color-error)]">
            ${price.toFixed(2)}
          </span>
          <span className="text-design-14 text-[var(--color-muted-alt-2)] line-through">
            ${originalPrice.toFixed(2)}
          </span>
        </div>
        <div className="flex items-center gap-2 mt-auto">
          <button
            type="button"
            className="flex-1 min-h-[44px] rounded-lg bg-[var(--color-error)] text-white text-design-14 font-medium flex items-center justify-center gap-2 hover:opacity-95 transition"
          >
            <Video className="w-4 h-4" />
            Join Live
          </button>
          <button
            type="button"
            className="w-11 h-11 rounded-lg border border-[var(--color-border)] flex items-center justify-center text-[var(--color-black)] hover:bg-[var(--color-border)] transition shrink-0"
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </article>
  );
}
