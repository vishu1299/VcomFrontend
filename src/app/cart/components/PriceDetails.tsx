"use client";

import Link from "next/link";
import { useState } from "react";

type PriceDetailsProps = {
  price: number;
  /** Positive savings amount, or negative (e.g. -100) — displayed as absolute discount */
  savings: number;
  deliveryCharges: number;
  totalAmount: number;
  /** Primary CTA destination (default: next checkout step) */
  continueHref?: string;
};

/** Matches cart `OrderSummary` layout/styles for shipping sidebar */
export default function PriceDetails({
  price,
  savings,
  deliveryCharges,
  totalAmount,
  continueHref = "/paymentMethod",
}: PriceDetailsProps) {
  const [coupon, setCoupon] = useState("");
  const savingsPositive = Math.abs(savings);

  return (
    <aside
      className="h-fit rounded-[12px] border bg-white p-5 shadow-sm sm:p-6"
      style={{
        borderColor: "var(--color-border)",
        fontFamily: "var(--font-poppins)",
      }}
    >
      <h2
        className="mb-4 text-[16px] font-semibold sm:text-[18px]"
        style={{ color: "#1F1D2B" }}
      >
        Price Details
      </h2>

      <div className="mb-4 flex flex-col gap-3">
        <div className="flex justify-between text-[14px]">
          <span style={{ color: "var(--color-muted-alt-2)" }}>Price</span>
          <span className="font-medium" style={{ color: "#1F1D2B" }}>
            ${price.toFixed(2)}
          </span>
        </div>
        {savingsPositive > 0 && (
          <div className="flex justify-between text-[14px]">
            <span style={{ color: "var(--color-muted-alt-2)" }}>Savings</span>
            <span
              className="font-medium"
              style={{ color: "var(--color-cart-save)" }}
            >
              -${savingsPositive.toFixed(2)}
            </span>
          </div>
        )}
        <div className="flex justify-between text-[14px]">
          <span style={{ color: "var(--color-muted-alt-2)" }}>
            Delivery Total Charges
          </span>
          <span className="font-medium" style={{ color: "#1F1D2B" }}>
            ${deliveryCharges.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Enter Coupon Code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          className="min-h-[44px] flex-1 rounded-[6px] border px-4 text-[14px] focus:outline-none focus:ring-1 focus:ring-[#1E3A8A]"
          style={{
            borderColor: "var(--color-border)",
            color: "#1F1D2B",
          }}
        />
        <button
          type="button"
          className="shrink-0 self-center text-[14px] font-medium"
          style={{ color: "#1E3A8A" }}
        >
          Apply
        </button>
      </div>

      <div className="mb-6 border-t pt-4" style={{ borderColor: "var(--color-border)" }}>
        <div className="mb-1 flex items-center justify-between">
          <span
            className="text-[16px] font-semibold sm:text-[18px]"
            style={{ color: "#1F1D2B" }}
          >
            Total Amount
          </span>
          <span
            className="text-[16px] font-semibold sm:text-[18px]"
            style={{ color: "#1F1D2B" }}
          >
            ${totalAmount.toFixed(2)}
          </span>
        </div>
        {savingsPositive > 0 && (
          <p
            className="text-[12px] sm:text-[13px]"
            style={{ color: "var(--color-cart-save)" }}
          >
            You will save ${savingsPositive.toFixed(2)} on this order
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <Link
          href={continueHref}
          className="flex min-h-[48px] w-full items-center justify-center rounded-[6px] text-[16px] font-medium transition hover:opacity-95"
          style={{
            backgroundColor: "#F5B700",
            color: "#1F1D2B",
          }}
        >
          Continue
        </Link>
        <Link
          href="/product-list"
          className="flex min-h-[48px] w-full touch-manipulation items-center justify-center rounded-[6px] border text-[16px] font-medium transition hover:bg-[#f9fafb]"
          style={{
            borderColor: "var(--color-border)",
            color: "#1F1D2B",
          }}
        >
          Continue Shopping
        </Link>
      </div>
    </aside>
  );
}
