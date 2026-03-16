"use client";

import { useState } from "react";
import type { CartItem as CartItemType } from "../data/items";

function TruckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-gray-500">
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function DollarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-gray-500">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function ShareArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" y1="2" x2="12" y2="15" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <line x1="10" y1="11" x2="10" y2="17" />
      <line x1="14" y1="11" x2="14" y2="17" />
    </svg>
  );
}

function ChevronUpIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
      <path d="M18 15l-6-6-6 6" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

type CartItemCardProps = {
  item: CartItemType;
  onSelectChange?: (id: string, selected: boolean) => void;
  onQuantityChange?: (id: string, quantity: number) => void;
  onRemove?: (id: string) => void;
};

export default function CartItemCard({ item, onSelectChange, onQuantityChange, onRemove }: CartItemCardProps) {
  const [quantity, setQuantity] = useState(item.quantity);
  const [selected, setSelected] = useState(item.selected);

  const handleQuantityUp = () => {
    const next = quantity + 1;
    setQuantity(next);
    onQuantityChange?.(item.id, next);
  };

  const handleQuantityDown = () => {
    if (quantity <= 1) return;
    const next = quantity - 1;
    setQuantity(next);
    onQuantityChange?.(item.id, next);
  };

  const handleCheckbox = () => {
    const next = !selected;
    setSelected(next);
    onSelectChange?.(item.id, next);
  };

  return (
    <article className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex gap-4">
        <div className="relative shrink-0">
          <input
            type="checkbox"
            id={`cart-${item.id}`}
            checked={selected}
            onChange={handleCheckbox}
            className="absolute left-2 top-2 z-10 h-4 w-4 rounded border-gray-300 bg-gray-100 accent-[#1E3A8A] focus:ring-[#1E3A8A]"
          />
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
            <img src={item.image} alt={item.name} className="w-full h-full p-4 object-cover" />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">

            <h2 className="text-sm font-bold text-[#131313] line-clamp-1">{item.name}</h2>
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-bold text-[#131313]">${item.price.toFixed(2)}</span>
              <span className="text-xs text-gray-400 line-through">${item.originalPrice.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-1  mt-2">
            <button
              type="button"
              onClick={handleQuantityDown}
              className="p-1.5 text-gray-600 hover:bg-gray-100 transition"
              aria-label="Decrease quantity"
            >
              <ChevronDownIcon />
            </button>
            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
              <span className="min-w-[2rem] text-center text-sm font-medium text-[#131313] py-1">{quantity}</span>
            </div>
            <button
              type="button"
              onClick={handleQuantityUp}
              className="p-1.5 text-gray-600 hover:bg-gray-100 transition"
              aria-label="Increase quantity"
            >
              <ChevronUpIcon />
            </button>

          </div>
            <p className="text-xs text-gray-600 mt-2">
              Colour: <span className="font-semibold">{item.colour}</span> Size: <span className="font-semibold">{item.size}</span> Seller: <span className="font-semibold">{item.seller}</span> Product number <span className="font-semibold">{item.productNumber}</span>
            </p>
          <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1 mt-1">
            <div className="flex items-center gap-1.5 mt-1 text-xs text-gray-600">
              <TruckIcon />
              <span>Shipping time in {item.shippingDays}</span>
            </div>
            <div className="flex items-center gap-1.5 mt-0.5 text-xs text-gray-600">
              <DollarIcon />
              <span>Shipping Cost <span className="font-bold">${item.shippingCost}</span></span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-3 pt-3">
            <button type="button" className="border border-gray-200 rounded-lg p-2 text-xs font-medium text-gray-700 hover:text-[#131313] transition">
              Save for later
            </button>
            <button type="button" className="border border-gray-200 rounded-lg p-2 inline-flex items-center gap-1.5 text-xs font-medium text-gray-700 hover:text-[#131313] transition" aria-label="Wishlist">
              <HeartIcon />
              Wishlist
            </button>
            <button type="button" className="bg-gray-100 rounded-full p-2 text-gray-500 hover:text-gray-700 transition" aria-label="Share">
              <ShareArrowIcon />
            </button>
            <button
              type="button"
              onClick={() => onRemove?.(item.id)}
              className="bg-gray-100 rounded-full p-2 text-red-500 hover:text-red-600 transition"
              aria-label="Remove"
            >
              <TrashIcon />
            </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
