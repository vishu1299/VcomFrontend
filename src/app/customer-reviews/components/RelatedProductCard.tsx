"use client";

import type { RelatedProduct } from "../data/relatedProducts";

function HeartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

type RelatedProductCardProps = RelatedProduct;

export default function RelatedProductCard({
  name,
  price,
  originalPrice,
  image,
  badges,
  hasVideo,
  sponsored,
}: RelatedProductCardProps) {
  return (
    <article className="w-full min-w-0 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow transition flex flex-col overflow-hidden">
      <div className="relative w-full h-full aspect-square rounded-t-xl overflow-hidden bg-white p-2">
        <div className="p-2 top-2 left-2 flex gap-1.5">
          {badges.includes("SALE") && (
            <span className="bg-[#f5b700] text-[10px] font-semibold px-2 py-0.5 rounded">
              SALE
            </span>
          )}
          {badges.includes("NEW") && (
            <span className="bg-[#3581ea] text-white text-[10px] font-semibold px-2 py-0.5 rounded">
              NEW
            </span>
          )}
        </div>
        <img src={image} alt={name} className="w-50 h-50 object-cover m-auto" />
        <button
          type="button"
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-[#131313] hover:bg-white transition"
          aria-label="Add to wishlist"
        >
          <HeartIcon />
        </button>
        {hasVideo && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="black" className="ml-0.5">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </div>
        )}
      </div>
      <div className="px-3 pt-2 pb-3 flex flex-col flex-1 relative">
        {sponsored && (
          <span
            className="absolute -top-3 inline-block text-xs font-medium text-white px-2 py-0.5 rounded mb-2 w-fit"
            style={{
              background: "linear-gradient(to right, #628AFF 0%, #4164C7 60%, #1E3A8A 100%)",
            }}
          >
            SPONSORED
          </span>
        )}
        <p className="text-sm font-medium text-[#131313] line-clamp-1 mb-1 min-w-0">{name}</p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-2 min-w-0">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-base font-bold text-[#131313]">${price}</span>
            {originalPrice != null && originalPrice > 0 && (
              <span className="text-sm text-gray-400 line-through">${originalPrice}</span>
            )}
          </div>
          <button
            type="button"
            className="flex items-center justify-center gap-1.5 text-xs font-medium text-[#131313] border border-gray-200 hover:bg-gray-50 rounded-lg py-2 px-3 transition w-full sm:w-auto shrink-0 whitespace-nowrap"
          >
            <CartIcon />
            ADD TO CART
          </button>
        </div>
      </div>
    </article>
  );
}
