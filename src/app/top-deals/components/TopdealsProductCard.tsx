'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Heart, Play, ShoppingCart } from 'lucide-react';
import type { ExclusiveProduct, ExclusiveProductBadge } from '../data/products';
import ProductDetailModal from './ProductDetailModal';

const BADGE_STYLES: Record<ExclusiveProductBadge, string> = {
  '10off': 'bg-[#FACC15] text-[#131313]',
  exclusive: 'bg-gradient-to-r from-[#5b21b6] to-[#7c3aed] text-white',
  new: 'bg-[#2563eb] text-white',
  trending: 'bg-[#ea580c] text-white',
  sale: 'bg-[#eab308] text-white',
  sold: 'bg-[#eab308] text-white',
  sponsored: 'bg-[#1e3a8a] text-white',
};

const BADGE_LABELS: Record<ExclusiveProductBadge, string> = {
  '10off': '10% OFF',
  exclusive: 'EXCLUSIVE',
  new: 'NEW',
  trending: 'TRENDING',
  sale: 'SALE',
  sold: 'SALE',
  sponsored: 'SPONSORED',
};

type ExclusiveProductCardProps = ExclusiveProduct & {
  variant?: 'horizontal' | 'grid';
  badgePointed?: boolean;
};

export default function ExclusiveProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  badges = [],
  hasVideo = false,
  videoUrl,
  variant = 'grid',
  badgePointed = false,
  quantityLeft,
}: ExclusiveProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const hoverVideoRef = useRef<HTMLVideoElement>(null);

  const isHorizontal = variant === 'horizontal';
  const isGrid = variant === 'grid';
  const showSponsored = badges.includes('sponsored');
  const topBadges = badges.filter((b) => b !== 'sponsored');
  const useWhiteCard = isGrid;
  const canPlayVideo = hasVideo && videoUrl;

  useEffect(() => {
    const video = hoverVideoRef.current;
    if (!isHovered || !canPlayVideo || !video) return;
    video.play().catch(() => {});
    return () => {
      video.pause();
    };
  }, [isHovered, canPlayVideo]);

  const badgeClass = (b: ExclusiveProductBadge) => {
    const base = `px-2 py-0.5 rounded text-[10px] font-semibold uppercase ${BADGE_STYLES[b]}`;
    if (badgePointed) {
      return `${base} rounded-r-none`; // pointed right via clip or border-radius
    }
    return base;
  };

  const productForModal: ExclusiveProduct = {
    id,
    name,
    price,
    originalPrice,
    image,
    badges,
    hasVideo,
    videoUrl,
    ...(quantityLeft != null ? { quantityLeft } : {}),
  };

  return (
    <article
      className={`w-full flex flex-col overflow-hidden rounded-[12px] transition-shadow h-full cursor-pointer ${
        useWhiteCard
          ? 'bg-white shadow-[0_1px_4px_rgba(0,0,0,0.08)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.1)] border border-[#e5e7eb]'
          : 'bg-[#fafaf8] shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]'
      } ${isHorizontal ? 'min-w-[200px] sm:min-w-[240px]' : ''}`}
      style={{ fontFamily: 'var(--font-poppins)' }}
      onClick={() => setDetailModalOpen(true)}
    >
      <div
        className="relative aspect-square bg-[#ffffff] overflow-hidden rounded-t-[12px] shrink-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={image}
          alt={name}
          fill
          className={`object-cover transition-opacity ${isHovered && canPlayVideo ? 'opacity-0' : 'opacity-100'}`}
          sizes={isHorizontal ? '240px' : '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw'}
          unoptimized={typeof image === 'string' && image.startsWith('http')}
        />
        {canPlayVideo && isHovered && (
          <video
            ref={hoverVideoRef}
            src={videoUrl}
            className="absolute inset-0 w-full h-full object-cover z-[1]"
            muted
            loop
            playsInline
          />
        )}
        {/* Top-left badges */}
        <div className="absolute top-2 left-2 flex gap-1 flex-wrap z-[2]">
          {topBadges.map((b) => (
            <span key={b} className={badgeClass(b)} style={badgePointed ? { clipPath: 'polygon(0 0, 100% 0, calc(100% - 6px) 100%, 0 100%)' } : undefined}>
              {BADGE_LABELS[b]}
            </span>
          ))}
        </div>
        <button
          type="button"
          onClick={(e) => e.stopPropagation()}
          className="absolute top-2 right-2 w-9 h-9 rounded-full bg-white border border-black/20 flex items-center justify-center hover:bg-gray-50 transition z-[2]"
          aria-label="Add to wishlist"
        >
          <Heart className="w-4 h-4 text-[#131313]" strokeWidth={1.5} />
        </button>
        {hasVideo && !isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/5 pointer-events-none z-[1]">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md border border-black/10">
              <Play className="w-5 h-5 text-[#131313] ml-0.5" fill="currentColor" />
            </div>
          </div>
        )}
        {/* SPONSORED - bottom-left of image (sponser-badge1.png) */}
        {showSponsored && (
          <div className="absolute bottom-2 left-2 w-[88px] h-6 sm:w-[96px] sm:h-6 z-[2]">
            <Image src="/images/sponser-badge1.png" alt="Sponsored" width={96} height={24} className="h-full w-full object-contain object-left" />
          </div>
        )}
      </div>

      <div className="flex min-h-0 flex-1 flex-col p-3">
        {quantityLeft != null && (
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-[#9ca3af] sm:text-[11px]">
            {quantityLeft} LEFT
          </p>
        )}
        <p className="mb-1.5 line-clamp-2 min-h-[2.25rem] text-xs font-medium leading-snug text-[#131313] sm:mb-1 sm:min-h-0 sm:text-[14px]">
          {name}
        </p>

        <div className="mt-auto flex w-full flex-col gap-2 sm:mt-0 sm:gap-1">
          {originalPrice != null && (
            <span className="hidden text-[11px] leading-none text-[#9ca3af] line-through sm:block md:text-[12px]">
              ${typeof originalPrice === 'number' ? originalPrice.toFixed(0) : originalPrice}
            </span>
          )}

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
            <div className="flex w-full flex-row flex-nowrap items-baseline gap-1 sm:w-auto sm:flex-none">
              {originalPrice != null && (
                <span className="shrink-0 text-[9px] leading-none text-[#9ca3af] line-through sm:hidden">
                  ${typeof originalPrice === 'number' ? originalPrice.toFixed(0) : originalPrice}
                </span>
              )}
              <span className="text-xs font-bold leading-none text-[#131313] sm:text-[16px] md:text-[17px]">
                ${typeof price === 'number' ? price.toFixed(2) : price}
              </span>
            </div>

            <button
              type="button"
              onClick={(e) => e.stopPropagation()}
              className="box-border flex h-9 w-full shrink-0 items-center justify-center gap-1 rounded-lg border border-[#d2d2d2] bg-white px-2 text-[9px] font-semibold leading-none text-[#131313] whitespace-nowrap transition hover:bg-gray-50 sm:h-9 sm:w-auto sm:px-2.5 sm:text-[10px] md:px-3"
            >
              <ShoppingCart className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
              <span>ADD TO CART</span>
            </button>
          </div>
        </div>
      </div>

      <ProductDetailModal
        product={productForModal}
        isOpen={detailModalOpen}
        onClose={() => setDetailModalOpen(false)}
      />
    </article>
  );
}
