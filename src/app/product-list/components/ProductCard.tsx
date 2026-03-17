'use client';

import Image from 'next/image';
import { Heart, Play, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export type ProductCardProps = {
  id: string | number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badges?: string[];
  hasVideo?: boolean;
  onQuickView?: () => void;
};

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  badges = [],
  hasVideo = false,
  onQuickView,
}: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({ id, name, price, originalPrice, image });
  };

  const handleCardClick = () => {
    onQuickView?.();
  };

  return (
    <article
      role={onQuickView ? 'button' : undefined}
      tabIndex={onQuickView ? 0 : undefined}
      onClick={onQuickView ? handleCardClick : undefined}
      onKeyDown={onQuickView ? (e) => e.key === 'Enter' && handleCardClick() : undefined}
      className={`w-full rounded-[10px] border border-[#D2D2D2] bg-white shadow-sm hover:shadow transition flex flex-col overflow-visible ${onQuickView ? 'cursor-pointer' : ''}`}
      style={{ fontFamily: 'var(--font-poppins)' }}
    >
      {/* IMAGE */}
      <div className="relative aspect-square bg-white rounded-t-[10px] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain"
          sizes="280px"
        />

        {/* BADGES (left) + WISHLIST (right) */}
        <div className="absolute top-2 left-2 right-2 flex items-center justify-between gap-2 z-10">
          <div className="flex items-center gap-1 min-w-0 flex-wrap">
            {badges.includes('SALE') && (
              <span className="bg-[#FACC15] px-2 py-[2px] rounded-[4px] text-[10px] font-semibold text-[#131313] shrink-0">SALE</span>
            )}
            {badges.includes('NEW') && (
              <span className="bg-[#2563EB] px-2 py-[2px] rounded-[4px] text-[10px] font-semibold text-white shrink-0">NEW</span>
            )}
            {badges.find((b) => typeof b === 'string' && (b as string).includes('% OFF')) && (
              <span className="bg-[#FACC15] px-2 py-[2px] rounded-[4px] text-[10px] font-semibold text-[#131313] shrink-0">
                {badges.find((b) => typeof b === 'string' && (b as string).includes('% OFF'))}
              </span>
            )}
            {badges.includes('SPONSORED') && (
              <span className="bg-[#2563EB] px-2 py-[2px] rounded-[4px] text-[10px] font-semibold text-white shrink-0">SPONSORED</span>
            )}
          </div>
          <button type="button" onClick={(e) => e.stopPropagation()} className="w-[40px] h-[40px] shrink-0 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition-shadow" aria-label="Add to wishlist">
            <Heart className="w-4 h-4 text-black" />
          </button>
        </div>

        {/* VIDEO */}
        {hasVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white border border-[#D2D2D2] flex items-center justify-center">
              <Play className="w-5 h-5 text-[#374151] ml-[2px]" fill="currentColor" />
            </div>
          </div>
        )}
      </div>

      {/* CONTENT — overflow-visible so SPONSORED badge isn't cut when moved up */}
      <div className="px-3 mb-2 md:mb-0 pt-2 pb-3 flex flex-col gap-2 overflow-visible">
        {/* Reserve fixed height for SPONSORED row so Add to cart aligns across all cards */}
        <div className="min-h-[28px] flex items-end">
          {badges.includes('SPONSORED') && (
            <div className="flex justify-start -mt-4.5 relative z-10">
              <span
                className="inline-block px-2.5 py-1 rounded-[4px] text-[10px] font-semibold text-white uppercase tracking-wide"
                style={{
                  background: 'linear-gradient(180deg, #4b7be8 0%, #2563EB 35%, #1d4ed8 70%, #1e3a8a 100%)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25), 0 2px 4px rgba(0,0,0,0.2)',
                }}
              >
                SPONSORED
              </span>
            </div>
          )}
        </div>
        {/* TITLE */}
        <p className="text-[14px] font-semibold text-[#131313] leading-snug line-clamp-2">
          {name}
        </p>

        {/* PRICE + CTA: mobile = 2 rows (price row, then button); desktop = 1 row (price left, button right) */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 min-h-0">
          <div className="flex items-center gap-2 min-w-0 flex-shrink">
            <span className="text-[16px] sm:text-[18px] font-bold text-[#131313] leading-none whitespace-nowrap">
              ${price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-[12px] sm:text-[14px] text-[#9CA3AF] line-through leading-none whitespace-nowrap">
                ${originalPrice}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            className="h-[36px] sm:h-[40px] w-full md:w-auto px-2 sm:px-3 rounded-[10px] border border-[#D2D2D2] bg-white flex items-center justify-center gap-1 sm:gap-[5px] text-[12px] font-semibold text-[#131313] hover:bg-gray-50 transition"
          >
            <ShoppingCart className="w-4 h-4" />
            ADD TO CART
          </button>
        </div>
      </div>
    </article>
  );
}
