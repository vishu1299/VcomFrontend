'use client';

import Link from 'next/link';
import { useState } from 'react';

type OrderSummaryProps = {
  price: number;
  savings: number;
  delivery: number;
  total: number;
};

export function OrderSummary({ price, savings, delivery, total }: OrderSummaryProps) {
  const [coupon, setCoupon] = useState('');

  return (
    <aside
      className="bg-white rounded-[12px] border shadow-sm p-5 sm:p-6 h-fit"
      style={{
        borderColor: 'var(--color-border)',
        fontFamily: 'var(--font-poppins)',
      }}
    >
      <h2
        className="font-semibold text-[16px] sm:text-[18px] mb-4"
        style={{ color: '#1F1D2B' }}
      >
        Price Details
      </h2>

      <div className="flex flex-col gap-3 mb-4">
        <div className="flex justify-between text-[14px]">
          <span style={{ color: 'var(--color-muted-alt-2)' }}>Price</span>
          <span className="font-medium" style={{ color: '#1F1D2B' }}>
            ${price.toFixed(2)}
          </span>
        </div>
        {savings > 0 && (
          <div className="flex justify-between text-[14px]">
            <span style={{ color: 'var(--color-muted-alt-2)' }}>Savings</span>
            <span className="font-medium" style={{ color: 'var(--color-cart-save)' }}>
              -${savings.toFixed(2)}
            </span>
          </div>
        )}
        <div className="flex justify-between text-[14px]">
          <span style={{ color: 'var(--color-muted-alt-2)' }}>Delivery Total Charges</span>
          <span className="font-medium" style={{ color: '#1F1D2B' }}>
            ${delivery.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Coupon */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter Coupon Code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          className="flex-1 min-h-[44px] px-4 rounded-[6px] border text-[14px] focus:outline-none focus:ring-1 focus:ring-[#1E3A8A]"
          style={{
            borderColor: 'var(--color-border)',
            color: '#1F1D2B',
          }}
        />
        <button
          type="button"
          className="text-[14px] font-medium  shrink-0 self-center"
          style={{ color: '#1E3A8A' }}
        >
          Apply
        </button>
      </div>

      <div className="border-t pt-4 mb-6" style={{ borderColor: 'var(--color-border)' }}>
        <div className="flex justify-between items-center mb-1">
          <span className="font-semibold text-[16px] sm:text-[18px]" style={{ color: '#1F1D2B' }}>
            Total Amount
          </span>
          <span className="font-semibold text-[16px] sm:text-[18px]" style={{ color: '#1F1D2B' }}>
            ${total.toFixed(2)}
          </span>
        </div>
        {savings > 0 && (
          <p className="text-[12px] sm:text-[13px]" style={{ color: 'var(--color-cart-save)' }}>
            You will save ${savings.toFixed(2)} on this order
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <Link
          href="/shipping"
          className="w-full min-h-[48px] flex items-center justify-center rounded-[6px] font-medium text-[16px] transition hover:opacity-95"
          style={{
            backgroundColor: '#F5B700',
            color: '#1F1D2B',
          }}
        >
          Continue
        </Link>
        <Link
          href="/product-list"
          className="w-full min-h-[48px] flex items-center justify-center rounded-[6px] font-medium text-[16px] border transition hover:bg-[#f9fafb] touch-manipulation"
          style={{
            borderColor: 'var(--color-border)',
            color: '#1F1D2B',
          }}
        >
          Continue Shopping
        </Link>
      </div>
    </aside>
  );
}
