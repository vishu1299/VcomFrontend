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

  const productForModal: ExclusiveProduct = { id, name, price, originalPrice, image, badges, hasVideo, videoUrl };

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
        className="relative aspect-square bg-[#f3f4f6] overflow-hidden rounded-t-[12px] shrink-0"
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

      <div className="p-3 flex flex-col shrink-0 min-h-0 sm:h-[104px]">
        <p className="text-xs sm:text-[14px] font-medium text-[#131313] leading-snug mb-1.5 sm:mb-2 h-8 sm:h-10 overflow-hidden shrink-0" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as const }}>
          {name}
        </p>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="text-sm sm:text-[18px] font-bold text-[#131313] leading-none">
              ${typeof price === 'number' ? price.toFixed(2) : price}
            </span>
            {originalPrice != null && (
              <span className="text-[10px] sm:text-[12px] text-[#9ca3af] line-through leading-none">
                ${typeof originalPrice === 'number' ? originalPrice.toFixed(0) : originalPrice}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={(e) => e.stopPropagation()}
            className="shrink-0 h-8 sm:h-9 px-2.5 sm:px-3 rounded-lg border border-[#d2d2d2] bg-white flex items-center justify-center gap-1.5 text-[9px] sm:text-[10px] font-semibold text-[#131313] hover:bg-gray-50 transition w-full sm:w-auto"
          >
            <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            ADD TO CART
          </button>
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
