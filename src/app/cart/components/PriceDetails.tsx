"use client";

import { useState } from "react";

type PriceDetailsProps = {
  price: number;
  savings: number;
  deliveryCharges: number;
  totalAmount: number;
};

export default function PriceDetails({ price, savings, deliveryCharges, totalAmount }: PriceDetailsProps) {
  const [couponCode, setCouponCode] = useState("");

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm h-fit">
      <h2 className="text-base font-bold text-[#131313] mb-4">Price Details</h2>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between text-gray-700">
          <span>Price</span>
          <span>${price.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Savings</span>
          <span className="text-green-600">-${Math.abs(savings).toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Delivery Total Charges</span>
          <span>${deliveryCharges.toFixed(2)}</span>
        </div>
      </div>

      <div className="mt-4 pt-4 ">
        <div className="flex items-center gap-2 border border-gray-200 p-2 rounded-lg">
          <input
            type="text"
            placeholder="Enter Coupon Code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="flex-1 min-w-0 text-sm text-[#131313] placeholder:text-gray-400 bg-transparent focus:outline-none"
          />
          <button type="button" className="text-sm font-medium text-blue-600 hover:underline shrink-0">
            Apply
          </button>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="text-base font-bold text-[#131313]">Total Amount</span>
          <span className="text-base font-bold text-[#131313]">${totalAmount.toFixed(2)}</span>
        </div>
        <p className="text-xs text-green-600 mt-2">You will save ${Math.abs(savings).toFixed(2)} on this order</p>
      </div>

      <div className="mt-5 space-y-3">
        <button
          type="button"
          className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-[#131313] font-semibold text-sm transition"
        >
          Continue
        </button>
        <button
          type="button"
          className="w-full py-3 rounded-xl border border-gray-200 bg-white text-[#131313] font-medium text-sm hover:bg-gray-50 transition"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
