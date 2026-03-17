'use client';

import NextImage from 'next/image';
import { ChevronUp, ChevronDown, Truck, DollarSign, Heart, Bell, Trash2 } from 'lucide-react';

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
  const lineTotal = item.price * item.quantity;
  const shippingCost = item.shippingCost ?? 10;

  return (
    <article
      className="bg-white rounded-[12px] border shadow-sm overflow-hidden"
      style={{
        borderColor: 'var(--color-border)',
        fontFamily: 'var(--font-poppins)',
      }}
    >
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-5 lg:p-6">
        {/* Left: Image + Quantity */}
        <div className="flex flex-row sm:flex-col gap-4 sm:gap-3 shrink-0">
          <div
            className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-[8px] shrink-0 overflow-hidden"
            style={{ backgroundColor: '#F7F7F7' }}
          >
            <NextImage
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              sizes="112px"
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="w-8 h-8 rounded-[6px] border flex items-center justify-center hover:bg-[#f9fafb] transition touch-manipulation"
              style={{ borderColor: 'var(--color-border)' }}
              aria-label="Increase quantity"
            >
              <ChevronUp className="w-4 h-4" style={{ color: '#1F1D2B' }} strokeWidth={2} />
            </button>
            <span
              className="w-8 text-center text-[14px] font-medium min-w-[32px]"
              style={{ color: '#1F1D2B' }}
            >
              {item.quantity}
            </span>
            <button
              type="button"
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              className="w-8 h-8 rounded-[6px] border flex items-center justify-center hover:bg-[#f9fafb] transition touch-manipulation"
              style={{ borderColor: 'var(--color-border)' }}
              aria-label="Decrease quantity"
            >
              <ChevronDown className="w-4 h-4" style={{ color: '#1F1D2B' }} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Middle: Details + Shipping */}
        <div className="flex-1 min-w-0">
          <h3
            className="font-medium text-[14px] sm:text-[16px] mb-2 line-clamp-2"
            style={{ color: '#1F1D2B' }}
          >
            {item.name}
          </h3>
          <p
            className="text-[12px] sm:text-[13px] mb-2"
            style={{ color: 'var(--color-muted-alt-2)' }}
          >
            Colour: {item.colour ?? 'Black'} Size: {item.size ?? 'M'} Seller: {item.seller ?? 'Urbantech'} Product number: {item.productNumber ?? 'A302'}
          </p>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-[12px] sm:text-[13px]" style={{ color: 'var(--color-muted-alt-2)' }}>
              <Truck className="w-4 h-4 shrink-0" strokeWidth={2} />
              Shipping time in {item.shippingDays ?? '3-4'} Days
            </div>
            <div className="flex items-center gap-2 text-[12px] sm:text-[13px]" style={{ color: 'var(--color-muted-alt-2)' }}>
              <DollarSign className="w-4 h-4 shrink-0" strokeWidth={2} />
              Shipping Cost: ${shippingCost}
            </div>
          </div>
        </div>

        {/* Right: Price + Actions */}
        <div className="flex flex-col sm:items-end justify-between gap-3 sm:gap-4">
          <div className="flex items-baseline gap-2">
            <span className="font-semibold text-[16px] sm:text-[18px]" style={{ color: '#1F1D2B' }}>
              ${item.price.toFixed(2)}
            </span>
            {item.originalPrice != null && (
              <span className="text-[13px] line-through" style={{ color: 'var(--color-muted-alt-2)' }}>
                ${item.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <button
              type="button"
              className="text-[12px] sm:text-[13px] hover:underline"
              style={{ color: 'var(--color-muted-alt-2)' }}
            >
              Save for later
            </button>
            <button
              type="button"
              className="flex items-center gap-1 text-[12px] sm:text-[13px] hover:underline"
              style={{ color: 'var(--color-muted-alt-2)' }}
            >
              <Heart className="w-3.5 h-3.5" strokeWidth={2} />
              Wishlist
            </button>
            <button
              type="button"
              className="p-1 rounded hover:bg-[#f3f4f6] transition"
              style={{ color: 'var(--color-muted-alt-2)' }}
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4" strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={() => onRemove(item.id)}
              className="p-1 rounded hover:bg-[#fee2e2] transition"
              style={{ color: 'var(--color-error)' }}
              aria-label="Remove item"
            >
              <Trash2 className="w-4 h-4" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default CartItemCard;
