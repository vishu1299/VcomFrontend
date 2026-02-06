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
      className={`w-full rounded-[10px] border border-[#E5E7EB] bg-white shadow-sm hover:shadow transition flex flex-col ${onQuickView ? 'cursor-pointer' : ''}`}
      style={{ fontFamily: 'var(--font-poppins)' }}
    >
      {/* IMAGE */}
      <div className="relative aspect-square bg-[#F3F4F6] rounded-t-[10px] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="280px"
        />

        {/* BADGES */}
        <div className="absolute top-2 left-2 flex gap-1 flex-wrap">
          {badges.includes('SALE') && (
            <span className="bg-[#FACC15] px-2 py-[2px] rounded-[4px] text-[10px] font-semibold text-[#131313]">
              SALE
            </span>
          )}
          {badges.includes('NEW') && (
            <span className="bg-[#2563EB] px-2 py-[2px] rounded-[4px] text-[10px] font-semibold text-white">
              NEW
            </span>
          )}
          {badges.find((b) => typeof b === 'string' && (b as string).includes('% OFF')) && (
            <span className="bg-[#FACC15] px-2 py-[2px] rounded-[4px] text-[10px] font-semibold text-[#131313]">
              {badges.find((b) => typeof b === 'string' && (b as string).includes('% OFF'))}
            </span>
          )}
          {badges.includes('SPONSORED') && (
            <span className="bg-[#2563EB] px-2 py-[2px] rounded-[4px] text-[10px] font-semibold text-white">
              SPONSORED
            </span>
          )}
        </div>

        {/* WISHLIST */}
        <button
          type="button"
          onClick={(e) => e.stopPropagation()}
          className="absolute top-2 right-2 w-[40px] h-[40px] rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center"
        >
          <Heart className="w-4 h-4 text-[#131313]" />
        </button>

        {/* VIDEO */}
        {hasVideo && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            <div className="w-12 h-12 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center">
              <Play className="w-5 h-5 text-[#374151] ml-[2px]" fill="currentColor" />
            </div>
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="px-3 mb-2 md:mb-0 pt-2 pb-3 flex flex-col gap-2">
        {/* TITLE */}
        <p className="text-[14px] font-semibold text-[#131313] leading-snug line-clamp-2">
          {name}
        </p>

        {/* PRICE + CTA */}
        <div className="flex items-center flex-col md:flex-row justify-between h-[40px] gap-2">
          <div className="flex items-center gap-2">
            <span className="text-[18px] font-bold text-[#131313] leading-none">
              ${price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-[12px] text-[#9CA3AF] line-through leading-none">
                ${originalPrice}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            className="h-[40px] p-1 w-[130px] md:w-[138px] rounded-[10px] border border-[#D2D2D2] bg-white flex items-center justify-center gap-[5px] text-[8px] md:text-[10px] font-semibold text-[#131313] hover:bg-gray-50 transition touch-manipulation"
          >
            <ShoppingCart className="w-4 h-4" />
            ADD TO CART
          </button>
        </div>
      </div>
    </article>
  );
}
