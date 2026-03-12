'use client';

import Image from 'next/image';
import { Heart, Play, ShoppingCart } from 'lucide-react';

export type ProductCardProps = {
  id: string | number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badges?: string[];
  hasVideo?: boolean;
};

export default function ProductCard({
  name,
  price,
  originalPrice,
  image,
  badges = [],
  hasVideo = false,
}: ProductCardProps) {
  return (
    <article
      className="w-full rounded-[10px] border border-[#E5E7EB] bg-white shadow-sm hover:shadow transition flex flex-col"
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
        <div className="absolute top-2 left-2 flex gap-1">
          {badges.includes('10% OFF') && (
            <span className="bg-[#FACC15] px-2 py-[2px] rounded-[4px] text-[10px] font-semibold text-[#131313]">
              10% OFF
            </span>
          )}
          {badges.includes('SPONSORED') && (
            <span
              className="px-2 py-[2px] rounded-[4px] text-[10px] font-semibold text-white"
              style={{
                background: "linear-gradient(to right, #628AFF 0%, #4164C7 60%, #1E3A8A 100%)",
              }}
            >
              SPONSORED
            </span>
          )}
        </div>

        {/* WISHLIST */}
        <button className="absolute top-2 right-2 w-[40px] h-[40px] rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center">
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

          <button className="h-[40px] p-1 w-[130px] md:w-[138px]  rounded-[10px] border border-[#D2D2D2] bg-white flex items-center justify-center gap-[5px] text-[8px] md:text-[10px] font-semibold text-[#131313] hover:bg-gray-50 transition">
            <ShoppingCart className="w-4 h-4" />
            ADD TO CART
          </button>
        </div>
      </div>
    </article>
  );
}
