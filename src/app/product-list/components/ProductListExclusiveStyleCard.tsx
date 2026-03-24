'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Heart, Play, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import type { ProductCardProps } from './ProductCard';
import { getSampleVideoUrlForProduct } from '../lib/sampleVideoUrl';

export type ProductListCardVariant = 'carousel' | 'grid';

export type ProductListExclusiveStyleCardProps = ProductCardProps & {
  variant: ProductListCardVariant;
};

/**
 * Exclusive-page style product card: cover image, hover plays video, sponsored badge, cart.
 * Used by ProductListCarouselCard and ProductListGridCard only.
 */
export default function ProductListExclusiveStyleCard({
  id,
  name,
  price,
  originalPrice,
  image,
  badges = [],
  hasVideo = false,
  videoUrl: videoUrlProp,
  onQuickView,
  variant,
}: ProductListExclusiveStyleCardProps) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const hoverVideoRef = useRef<HTMLVideoElement>(null);

  const videoUrl =
    videoUrlProp ?? (hasVideo ? getSampleVideoUrlForProduct(id) : undefined);
  const canPlayVideo = Boolean(hasVideo && videoUrl);

  const topBadges = badges.filter((b) => b !== 'SPONSORED');
  const showSponsored = badges.includes('SPONSORED');

  useEffect(() => {
    const video = hoverVideoRef.current;
    if (!isHovered || !canPlayVideo || !video) return;
    video.play().catch(() => {});
    return () => {
      video.pause();
    };
  }, [isHovered, canPlayVideo]);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({ id, name, price, originalPrice, image });
  };

  const handleCardClick = () => {
    onQuickView?.();
  };

  const isCarousel = variant === 'carousel';
  const articleClass =
    variant === 'grid'
      ? 'w-full flex flex-col overflow-hidden rounded-[12px] transition-shadow h-full cursor-pointer bg-white shadow-[0_1px_4px_rgba(0,0,0,0.08)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.1)] border border-[#e5e7eb]'
      : 'flex h-full min-w-0 w-full max-w-full flex-col overflow-hidden rounded-[12px] cursor-pointer bg-[#fafaf8] shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]';

  return (
    <article
      role={onQuickView ? 'button' : undefined}
      tabIndex={onQuickView ? 0 : undefined}
      onClick={onQuickView ? handleCardClick : undefined}
      onKeyDown={
        onQuickView
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleCardClick();
              }
            }
          : undefined
      }
      className={articleClass}
      style={{ fontFamily: 'var(--font-poppins)' }}
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
          className={`object-cover transition-opacity ${
            isHovered && canPlayVideo ? 'opacity-0' : 'opacity-100'
          }`}
          sizes={
            isCarousel
              ? '(max-width: 639px) 200px, (max-width: 767px) 220px, 240px'
              : '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw'
          }
        />
        {canPlayVideo && isHovered && (
          <video
            ref={hoverVideoRef}
            src={videoUrl}
            className="absolute inset-0 z-[1] h-full w-full object-cover"
            muted
            loop
            playsInline
          />
        )}

        <div className="absolute top-2 left-2 z-[2] flex flex-wrap gap-1">
          {topBadges.includes('SALE') && (
            <span className="rounded px-2 py-0.5 text-[10px] font-semibold uppercase bg-[#eab308] text-white">
              SALE
            </span>
          )}
          {topBadges.includes('NEW') && (
            <span className="rounded px-2 py-0.5 text-[10px] font-semibold uppercase bg-[#2563eb] text-white">
              NEW
            </span>
          )}
          {topBadges
            .filter((b) => typeof b === 'string' && b.includes('% OFF'))
            .map((b) => (
              <span
                key={b}
                className="rounded px-2 py-0.5 text-[10px] font-semibold uppercase bg-[#FACC15] text-[#131313]"
              >
                {b}
              </span>
            ))}
        </div>

        <button
          type="button"
          onClick={(e) => e.stopPropagation()}
          className="absolute top-2 right-2 z-[2] flex h-9 w-9 items-center justify-center rounded-full border border-black/20 bg-white transition hover:bg-gray-50"
          aria-label="Add to wishlist"
        >
          <Heart className="h-4 w-4 text-[#131313]" strokeWidth={1.5} />
        </button>

        {hasVideo && !isHovered && (
          <div className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center bg-black/5">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white shadow-md">
              <Play className="ml-0.5 h-5 w-5 fill-current text-[#131313]" />
            </div>
          </div>
        )}

        {showSponsored && (
          <div className="absolute bottom-2 left-2 z-[2] h-6 w-[88px] sm:h-6 sm:w-[96px]">
            <Image
              src="/images/sponser-badge1.png"
              alt="Sponsored"
              width={96}
              height={24}
              className="h-full w-full object-contain object-left"
            />
          </div>
        )}
      </div>

      <div className="flex min-h-0 shrink-0 flex-col p-3">
        <p className="mb-1.5 line-clamp-2 min-h-[2.25rem] shrink-0 text-xs font-medium leading-snug text-[#131313] sm:mb-1 sm:min-h-0 sm:text-[14px]">
          {name}
        </p>
        {/*
          Web (sm+): row1 = original only; row2 = sale price (left) + Add to cart (right).
          Mobile: row1 = original + sale; row2 = full-width button.
          mt-auto only on mobile so equal-height grid rows don’t leave a gap above prices on web.
        */}
        <div className="mt-auto flex w-full flex-col gap-2 sm:mt-0 sm:gap-1">
          {originalPrice != null && (
            <span className="hidden text-[11px] leading-none text-[#9ca3af] line-through sm:block md:text-[12px]">
              ${originalPrice.toFixed(0)}
            </span>
          )}

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
            <div className="flex w-full flex-row flex-nowrap items-baseline gap-1 sm:w-auto sm:flex-none">
              {originalPrice != null && (
                <span className="shrink-0 text-[9px] leading-none text-[#9ca3af] line-through sm:hidden">
                  ${originalPrice.toFixed(0)}
                </span>
              )}
              <span className="text-xs font-bold leading-none text-[#131313] sm:text-[16px] md:text-[17px]">
                ${price.toFixed(2)}
              </span>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className="box-border flex h-9 w-full shrink-0 items-center justify-center gap-1 rounded-lg border border-[#d2d2d2] bg-white px-2 text-[9px] font-semibold leading-none text-[#131313] whitespace-nowrap transition hover:bg-gray-50 sm:h-9 sm:w-auto sm:px-2.5 sm:text-[10px] md:px-3"
            >
              <ShoppingCart className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
              <span>ADD TO CART</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
