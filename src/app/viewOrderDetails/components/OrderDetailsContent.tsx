"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { REMOTE_IMG } from "@/lib/remoteAssets";

const ORDER_NUMBER = "#ORD-78461";
const ORDER_SUMMARY = [
  { label: "Order Number:", value: ORDER_NUMBER, copyable: true },
  { label: "Order Date:", value: "10 Nov 2025" },
  { label: "Payment Status:", value: "Paid" },
  { label: "Delivery Type:", value: "Express Delivery (1-2 Days)" },
  { label: "Estimated Delivery:", value: "13 Nov 2025" },
];
const RECIPIENT_INFO = [
  { label: "Recipient Name:", value: "Prateek Sharma" },
  { label: "Full Address:", value: "FT-43 Street NO.32 New Delhi" },
  { label: "Phone Number:", value: "+17984 468764" },
  { label: "Email:", value: "Prateek.sharma199404@gmail.com" },
];

function ChevronDownIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function ChevronUpIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
      <path d="M18 15l-6-6-6 6" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 inline-block align-middle cursor-pointer hover:text-blue-600" aria-hidden>
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

export default function OrderDetailsContent() {
  const [orderBarExpanded, setOrderBarExpanded] = useState(false);
  const [cardExpanded, setCardExpanded] = useState(true);

  const handleCopyOrderNumber = async () => {
    try {
      await navigator.clipboard.writeText(ORDER_NUMBER);
    } catch {
      // ignore
    }
  };

  return (
    <div className="mx-auto max-w-[1100px] px-4 sm:px-4 py-6 bg-white rounded-lg">
      <h2 className="text-xl sm:text-2xl font-bold text-[#131313] mb-4">Order Details</h2>

      {/* Order number bar (collapsible header) */}
      <button
        type="button"
        onClick={() => setOrderBarExpanded(!orderBarExpanded)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg bg-gray-100 text-[#131313] text-sm font-medium hover:bg-gray-200 transition mb-4"
      >
        <span>Order Number {ORDER_NUMBER}</span>
        {orderBarExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </button>

      {/* Product order card */}
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden mb-8">
        <button
          type="button"
          onClick={() => setCardExpanded(!cardExpanded)}
          className="w-full flex items-center justify-between gap-3 px-4 sm:px-6 pt-2 text-left hover:bg-gray-300/80 transition"
        >
          <span className="text-sm font-semibold text-[#131313]">Order Number {ORDER_NUMBER}</span>
          {cardExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </button>

        {cardExpanded && (
            <div className="p-4 sm:p-6 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-6 rounded-xl border border-gray-200  p-4 ">
                <div className="flex gap-4 flex-1 min-w-0">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                    <Image
                      src={REMOTE_IMG.productPhone}
                      alt="iPhone 17 Pro"
                      fill
                      className="object-cover"
                      sizes="96px"
                      unoptimized
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-[#131313] line-clamp-2">
                      iPhone 17 Pro 256 GB: 15.93 cm (6.3&quot;) Display
                    </h3>
                    <p className="text-xs text-[#131313] mt-1">Seller: Urbantech</p>
                    <p className="text-xs text-[#131313]">Product Number: 43-4234324</p>
                    <p className="text-xs text-[#131313] mt-0.5">
                      QTY: 1 Color: <span className=" font-medium">Orange</span>
                    </p>
                    <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-lg font-bold text-[#1E3A8A]">$299.99</span>
                      <span className="text-sm text-[#131313] line-through">$310.00</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 sm:shrink-0 sm:justify-center">
                <Link
                  href="/trackOrder"
                    type="button"
                    className="px-4 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-500 text-[#131313] font-semibold text-sm transition whitespace-nowrap"
                  >
                    Track your Order
                  </Link>
                  <button
                    type="button"
                    className="px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-[#131313] font-medium text-sm hover:bg-gray-50 transition whitespace-nowrap"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
              <div className="">
                <div className="rounded-xl border border-gray-200  p-4 sm:p-5">
                  <dl className="space-y-3 text-sm">
                    {ORDER_SUMMARY.map(({ label, value, copyable }) => (
                      <div key={label} className="flex justify-between items-center gap-4">
                        <dt className="text-[#131313] font-medium shrink-0">{label}</dt>
                        <dd className="text-[#131313] text-right flex items-center justify-end gap-1.5 min-w-0">
                          {value}
                          {copyable && (
                            <button type="button" onClick={handleCopyOrderNumber} className="p-0.5 shrink-0 text-blue-600" aria-label="Copy order number">
                              <CopyIcon />
                            </button>
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              {/* Recipient information */}
              <div>
                <div className="rounded-xl border border-gray-200  p-4 sm:p-5">
                  <dl className="space-y-3 text-sm">
                    {RECIPIENT_INFO.map(({ label, value }) => (
                      <div key={label} className="flex justify-between items-center gap-4">
                        <dt className="text-[#131313] font-medium shrink-0">{label}</dt>
                        <dd className="text-[#131313] text-right min-w-0 break-words">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
        )}
      </div>

      <div className="mt-8 flex flex-col gap-3 border-t border-gray-200 pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <p className="text-sm font-medium text-[#131313]">What&apos;s next?</p>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/trackOrder"
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-gray-300 bg-white px-5 text-sm font-semibold text-[#131313] transition hover:bg-gray-50"
          >
            Track order
          </Link>
          <Link
            href="/orderDelivered"
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#1e3a8a] px-5 text-sm font-semibold text-white transition hover:bg-[#1e3a8a]/90"
          >
            View delivered order
          </Link>
        </div>
      </div>
    </div>
  );
}
