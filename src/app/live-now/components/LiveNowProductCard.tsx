'use client';

import Image from 'next/image';
import { ChevronRight, Play } from 'lucide-react';
import type { LiveNowProduct } from '../data/products';

type LiveNowProductCardProps = Pick<
  LiveNowProduct,
  'title' | 'price' | 'originalPrice' | 'image' | 'badges'
>;

export default function LiveNowProductCard({
  title,
  price,
  originalPrice,
  image,
  badges,
}: LiveNowProductCardProps) {
  return (
    <article className="min-w-0 overflow-hidden rounded-lg border border-[#e5e7eb] bg-white shadow-sm">
      <div className="flex items-center gap-1 bg-white px-2 pt-2">
        {badges.includes('LIVE NOW') && (
          <span className="inline-flex items-center gap-1 rounded bg-[#f20000] px-1.5 py-0.5 text-[9px] font-medium text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            LIVE NOW
          </span>
        )}
        {badges.includes('FLASH SALE') && (
          <span className="rounded bg-amber-400 px-1.5 py-0.5 text-[9px] font-medium text-[#131313]">
            FLASH SALE
          </span>
        )}
        {badges.includes('NEW') && (
          <span className="ml-auto rounded bg-[#2447A6] px-1.5 py-0.5 text-[9px] font-medium text-white">
            NEW
          </span>
        )}
      </div>

      <div className="relative h-[150px] bg-white sm:h-[165px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-3"
          sizes="(max-width: 640px) 44vw, (max-width: 1024px) 28vw, 18vw"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90">
            <Play className="ml-0.5 h-3.5 w-3.5 text-[#131313]" fill="currentColor" />
          </span>
        </div>
      </div>

      <div className="p-2.5 sm:p-3">
        <p className="mb-1 min-h-[38px] line-clamp-2 text-[14px] font-medium text-[#131313]">
          {title}
        </p>

        <div className="mb-1.5 flex items-center gap-1.5">
          <span className="text-[20px] font-semibold leading-none text-[#131313]">
            ${price.toFixed(2)}
          </span>
          <span className="text-[13px] text-[#9ca3af] line-through">
            ${originalPrice.toFixed(2)}
          </span>
        </div>

        <button
          type="button"
          className="flex w-full items-center justify-center gap-1.5 rounded-md bg-[#f20000] py-1.5 text-[14px] font-medium text-white transition hover:opacity-95"
        >
          Join Live
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-white text-[#f20000]">
            <ChevronRight className="h-3 w-3" />
          </span>
        </button>
      </div>
    </article>
  );
}
