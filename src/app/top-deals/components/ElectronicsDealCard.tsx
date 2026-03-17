'use client';

import type { ElectronicsDealItem } from '../data/electronicsDeals';

function HeartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-gray-600">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function RotateIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-gray-600">
      <path d="M21 2v6h-6" />
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <path d="M3 22v-6h6" />
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-gray-600">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

export default function ElectronicsDealCard({ name, price, originalPrice, image, topBadge, bottomBadge, hasVideo = true }: ElectronicsDealItem) {
  return (
    <article className="w-full rounded-xl border border-[#e5e7eb] bg-white shadow-sm hover:shadow transition flex flex-col shrink-0">
      <div className="relative aspect-square bg-gray-100 rounded-t-xl overflow-hidden">
        <img src={image} alt={name} className="absolute inset-0 w-full h-full object-contain" />

        {topBadge === 'NEW' && (
          <span className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-semibold px-2 py-1 rounded-br-lg">
            NEW
          </span>
        )}
        {bottomBadge && (
          <span
            className={`absolute bottom-2 left-2 text-white text-[10px] font-medium px-2 py-1 rounded-md ${
              bottomBadge === "LIMITED" ? "bg-blue-600" : ""
            }`}
            style={
              bottomBadge === "SPONSORED"
                ? { background: "linear-gradient(to right, #628AFF 0%, #4164C7 60%, #1E3A8A 100%)" }
                : undefined
            }
          >
            {bottomBadge}
          </span>
        )}

        <div className="absolute top-2 right-2 flex items-center gap-1">
          <button type="button" className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50" aria-label="Wishlist">
            <HeartIcon />
          </button>
        </div>

        {hasVideo && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center border border-gray-200 shadow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-600 ml-0.5">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </div>
        )}
      </div>

      <div className="px-3 pt-2 pb-3 flex flex-col flex-1">
        <p className="text-sm font-medium text-[#131313] line-clamp-1 mb-2">{name}</p>
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-[#131313]">${price.toFixed(2)}</span>
            {originalPrice != null && (
              <span className="text-sm text-gray-400 line-through">${originalPrice}</span>
            )}
          </div>
          <button
            type="button"
            className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:underline"
            aria-label="Add to cart"
          >
            <CartIcon /> Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
