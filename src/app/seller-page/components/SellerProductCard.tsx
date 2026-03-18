"use client";

import type { SellerProduct } from "../data/products";

function HeartIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

type SellerProductCardProps = SellerProduct;

export default function SellerProductCard({
  name,
  price,
  originalPrice,
  image,
  badges,
  hasVideo,
  sponsored,
}: SellerProductCardProps) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow transition flex flex-col overflow-hidden">
      <div className="relative aspect-square overflow-hidden bg-white">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute top-2 left-2 flex gap-1.5">
          {badges.includes("SALE") && (
            <span className="bg-orange-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
              SALE
            </span>
          )}
          {badges.includes("NEW") && (
            <span className="bg-blue-600 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
              NEW
            </span>
          )}
        </div>
        <button
          type="button"
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 border border-gray-200 flex items-center justify-center text-[#131313] hover:bg-white transition"
          aria-label="Add to wishlist"
        >
          <HeartIcon />
        </button>
        {hasVideo && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-200 shadow-md">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="ml-0.5 text-[#131313]"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </div>
        )}
      </div>
      <div className="p-3 flex flex-col flex-1">
        {sponsored && (
          <span
            className="inline-block text-[10px] font-medium text-white px-2 py-0.5 rounded mb-2 w-fit"
            style={{
              background:
                "linear-gradient(to right, #628AFF 0%, #4164C7 60%, #1E3A8A 100%)",
            }}
          >
            SPONSORED
          </span>
        )}
        <p className="text-sm font-medium text-[#131313] line-clamp-2 mb-2">
          {name}
        </p>
        <div className="flex items-center justify-between gap-2 mt-auto">
          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-[#131313]">${price}</span>
            {originalPrice != null && (
              <span className="text-sm text-gray-400 line-through">
                ${originalPrice}
              </span>
            )}
          </div>
          <button
            type="button"
            className="flex items-center gap-1.5 text-xs font-medium text-[#131313] border border-gray-200 hover:bg-gray-50 rounded-lg py-2 px-3 transition shrink-0"
          >
            <CartIcon />
            ADD TO CART
          </button>
        </div>
      </div>
    </article>
  );
}
