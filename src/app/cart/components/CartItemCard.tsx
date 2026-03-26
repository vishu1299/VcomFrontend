'use client';

import NextImage from 'next/image';
import { ChevronDown, ChevronUp, Trash2 } from 'lucide-react';

export type CartItem = {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  colour?: string;
  size?: string;
  seller?: string;
  productNumber?: string;
  shippingDays?: string;
  shippingCost?: number;
};

type CartItemCardProps = {
  item: CartItem;
  onUpdateQuantity: (id: number, qty: number) => void;
  onRemove: (id: number) => void;
};

export function CartItemCard({ item, onUpdateQuantity, onRemove }: CartItemCardProps) {
  const shippingCost = item.shippingCost ?? 10;

  return (
    <article
      className="bg-white rounded-[12px] border shadow-sm overflow-hidden"
      style={{
        borderColor: 'var(--color-border)',
        fontFamily: 'var(--font-poppins)',
      }}
    >
      <div className="flex flex-col gap-4 p-4 sm:p-5 lg:p-6">
        <div className="flex gap-3 sm:gap-4">
          <div className="flex shrink-0 flex-col items-center gap-3">
            <div
              className="relative h-24 w-24 overflow-hidden rounded-[10px] sm:h-28 sm:w-28"
              style={{ backgroundColor: '#E7E7E7' }}
            >
              <label className="absolute left-2 top-2 z-10 inline-flex cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border border-[#D2D2D2] accent-[#1E3A8A]"
                  aria-label={`Select ${item.name}`}
                />
              </label>
              <NextImage
                src={item.image}
                alt={item.name}
                fill
                className="object-contain p-2"
                sizes="112px"
              />
            </div>

            {/* Mobile only: quantity controls below image */}
            <div className="flex items-center gap-2 sm:hidden">
              <button
                type="button"
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                className="flex h-8 w-8 items-center justify-center rounded-[6px] border transition hover:bg-[#f9fafb] touch-manipulation"
                style={{ borderColor: 'var(--color-border)' }}
                aria-label="Increase quantity"
              >
                <ChevronUp className="h-4 w-4" style={{ color: '#1F1D2B' }} strokeWidth={2} />
              </button>
              <span
                className="min-w-[32px] text-center text-[14px] font-medium"
                style={{ color: '#1F1D2B' }}
              >
                {item.quantity}
              </span>
              <button
                type="button"
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                className="flex h-8 w-8 items-center justify-center rounded-[6px] border transition hover:bg-[#f9fafb] touch-manipulation"
                style={{ borderColor: 'var(--color-border)' }}
                aria-label="Decrease quantity"
              >
                <ChevronDown className="h-4 w-4" style={{ color: '#1F1D2B' }} strokeWidth={2} />
              </button>
            </div>

            {/* Mobile only: share + delete below quantity */}
            <div className="flex items-center justify-center gap-2 sm:hidden">
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full transition hover:opacity-90"
                style={{ backgroundColor: '#F3F7FA' }}
                aria-label="Upload"
              >
                <img src="/share.svg" alt="" width={20} height={20} className="h-5 w-5 object-contain" />
              </button>
              <button
                type="button"
                onClick={() => onRemove(item.id)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-[#fdecec]"
                style={{ backgroundColor: '#F3F7FA', color: '#dc2626' }}
                aria-label="Remove item"
              >
                <Trash2 className="h-4 w-4" strokeWidth={2} />
              </button>
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-3">
              <h3
                className="min-w-0 flex-1 truncate text-[14px] font-medium sm:text-[16px]"
                style={{ color: '#1F1D2B' }}
                title={item.name}
              >
                {item.name}
              </h3>
              <div className="shrink-0 whitespace-nowrap text-right">
                <span className="text-[16px] font-semibold sm:text-[18px]" style={{ color: '#1F1D2B' }}>
                  ${item.price.toFixed(2)}
                </span>
                {item.originalPrice != null && (
                  <span className="ml-2 text-[13px] line-through" style={{ color: '#767676' }}>
                    ${item.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] sm:text-[13px]">
              <span style={{ color: '#767676' }}>
                Color: <span style={{ color: '#131313' }}>{item.colour ?? 'Black'}</span>
              </span>
              <span style={{ color: '#767676' }}>
                Size: <span style={{ color: '#131313' }}>{item.size ?? 'M'}</span>
              </span>
              <span style={{ color: '#767676' }}>
                Seller: <span style={{ color: '#131313' }}>{item.seller ?? 'Urbantech'}</span>
              </span>
              <span style={{ color: '#767676' }}>
                Product number: <span style={{ color: '#131313' }}>{item.productNumber ?? 'A302'}</span>
              </span>
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] sm:text-[13px]">
              <span style={{ color: '#767676' }}>
                Shipping time: <span style={{ color: '#131313' }}>{item.shippingDays ?? '3-4'} Days</span>
              </span>
              <span style={{ color: '#767676' }}>
                Shipping cost: <span style={{ color: '#131313' }}>${shippingCost.toFixed(2)}</span>
              </span>
            </div>

            {/* Below shipping: quantity (left) + actions (right) */}
            <div className="mt-1 flex min-w-0 flex-row flex-wrap items-center justify-between gap-y-2 sm:mt-2">
              <div className="hidden items-center gap-2 sm:flex">
                <button
                  type="button"
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  className="flex h-8 w-8 items-center justify-center rounded-[6px] border transition hover:bg-[#f9fafb] touch-manipulation"
                  style={{ borderColor: 'var(--color-border)' }}
                  aria-label="Increase quantity"
                >
                  <ChevronUp className="h-4 w-4" style={{ color: '#1F1D2B' }} strokeWidth={2} />
                </button>
                <span
                  className="min-w-[32px] text-center text-[14px] font-medium"
                  style={{ color: '#1F1D2B' }}
                >
                  {item.quantity}
                </span>
                <button
                  type="button"
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  className="flex h-8 w-8 items-center justify-center rounded-[6px] border transition hover:bg-[#f9fafb] touch-manipulation"
                  style={{ borderColor: 'var(--color-border)' }}
                  aria-label="Decrease quantity"
                >
                  <ChevronDown className="h-4 w-4" style={{ color: '#1F1D2B' }} strokeWidth={2} />
                </button>
              </div>
              <div className="flex flex-wrap items-center justify-start gap-2 sm:justify-end sm:gap-3">
                <button
                  type="button"
                  className="inline-flex min-h-[36px] items-center justify-center rounded-[8px] border px-4 text-[13px] font-medium transition hover:bg-[#f9fafb]"
                  style={{ borderColor: '#D2D2D2', color: '#131313' }}
                >
                  Save later
                </button>
                <button
                  type="button"
                  className="inline-flex min-h-[36px] items-center justify-center rounded-[8px] border px-4 text-[13px] font-medium transition hover:bg-[#f9fafb]"
                  style={{ borderColor: '#D2D2D2', color: '#131313' }}
                >
                  Wishlist
                </button>
                <button
                  type="button"
                  className="hidden h-9 w-9 items-center justify-center rounded-full transition hover:opacity-90 sm:inline-flex"
                  style={{ backgroundColor: '#F3F7FA' }}
                  aria-label="Upload"
                >
                  <img src="/share.svg" alt="" width={20} height={20} className="h-5 w-5 object-contain" />
                </button>
                <button
                  type="button"
                  onClick={() => onRemove(item.id)}
                  className="hidden h-9 w-9 items-center justify-center rounded-full transition hover:bg-[#fdecec] sm:inline-flex"
                  style={{ backgroundColor: '#F3F7FA', color: '#dc2626' }}
                  aria-label="Remove item"
                >
                  <Trash2 className="h-4 w-4" strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default CartItemCard;
