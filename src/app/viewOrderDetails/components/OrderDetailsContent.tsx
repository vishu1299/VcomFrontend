"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

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
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#131313]">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function ChevronUpIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#131313]">
      <path d="M18 15l-6-6-6 6" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="pointer-events-none inline-block shrink-0 align-middle" aria-hidden>
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

const SUMMARY_ROW =
  "flex items-start justify-between gap-4 text-sm text-[#131313]";

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
    <div className="w-full rounded-xl border border-gray-200/80 bg-white p-4 shadow-sm sm:rounded-2xl sm:p-6 lg:p-8">
      <h2 className="mb-3 text-xl font-bold text-[#131313] sm:mb-4 sm:text-2xl">Order Details</h2>

      {/* Order number bar (collapsible header) */}
      <button
        type="button"
        onClick={() => setOrderBarExpanded(!orderBarExpanded)}
        className="mb-4 flex w-full items-center justify-between gap-3 rounded-lg border border-[#D2D2D2] bg-[#F3F7FA] px-4 py-3 text-left text-sm text-[#131313] transition hover:bg-[#e8eef5]"
      >
        <span>
          <span className="font-semibold">Order Number</span>{" "}
          <span className="font-medium">{ORDER_NUMBER}</span>
        </span>
        {orderBarExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </button>

      {/* Product order card — header matches Order Number bar above */}
      <div className="mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <button
          type="button"
          onClick={() => setCardExpanded(!cardExpanded)}
          className={`flex w-full items-center justify-between gap-3 border border-[#D2D2D2] bg-[#F3F7FA] px-4 py-3 text-left text-sm text-[#131313] transition hover:bg-[#e8eef5] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D2D2D2] ${cardExpanded ? "rounded-t-xl" : "rounded-xl"}`}
        >
          <span>
            <span className="font-semibold">Order Number</span>{" "}
            <span className="font-medium">{ORDER_NUMBER}</span>
          </span>
          {cardExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </button>

        {cardExpanded && (
          <div className="flex flex-col gap-5 p-4 sm:gap-6 sm:p-6">
            <div className="flex flex-col gap-6 rounded-xl border border-gray-200 p-4 sm:flex-row sm:p-5">
              <div className="flex min-w-0 flex-1 gap-4 sm:gap-5">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg  sm:h-28 sm:w-28">
                  <Image
                    src="/images/phone.png"
                    alt="iPhone 17 Pro"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 96px, 112px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="line-clamp-2 text-sm font-bold leading-snug text-[#131313] sm:text-base">
                    iPhone 17 Pro 256 GB: 15.93 cm (6.3&quot;) Display
                  </h3>
                  <dl className="mt-0 flex flex-col gap-2.5 text-sm sm:mt-1 sm:gap-1">
                    <div className="flex flex-wrap items-baseline gap-x-1.5">
                      <dt className="shrink-0 text-[#767676]">Seller:</dt>
                      <dd className="text-[#131313]">Urbantech</dd>
                    </div>
                    <div className="flex flex-wrap items-baseline gap-x-1.5">
                      <dt className="shrink-0 text-[#767676]">Product Number:</dt>
                      <dd className="text-[#131313]">43-4234324</dd>
                    </div>
                    <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1 sm:gap-x-8">
                      <div className="flex flex-wrap items-baseline gap-x-1.5">
                        <dt className="shrink-0 text-[#767676]">QTY:</dt>
                        <dd className="m-0 text-[#131313]">1</dd>
                      </div>
                      <div className="flex flex-wrap items-baseline gap-x-1.5">
                        <dt className="shrink-0 text-[#767676]">Color:</dt>
                        <dd className="m-0 font-medium text-[#131313]">Orange</dd>
                      </div>
                    </div>
                  </dl>
                  <div className="mt-4 flex flex-wrap items-baseline gap-2">
                    <span className="text-lg font-bold text-[#1E3A8A]">$299.99</span>
                    <span className="text-sm text-[#767676] line-through">$310.00</span>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-[220px] sm:max-w-[280px] sm:shrink-0 sm:justify-center">
                <Link
                  href="/trackOrder"
                  className="flex min-h-[48px] w-full items-center justify-center rounded-lg bg-amber-400 px-8 py-2.5 text-center text-sm font-semibold text-[#131313] transition hover:bg-amber-500"
                >
                  Track your Order
                </Link>
                <button
                  type="button"
                  className="flex min-h-[48px] w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-8 py-2.5 text-sm font-medium text-[#131313] transition hover:bg-gray-50"
                >
                  Continue Shopping
                </button>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 p-4 sm:p-5">
              <dl className="flex flex-col gap-4 text-sm">
                {ORDER_SUMMARY.map(({ label, value, copyable }) => (
                  <div key={label} className={SUMMARY_ROW}>
                    <dt className="shrink-0 text-[#131313]">{label}</dt>
                    <dd className="flex min-w-0 items-center justify-end gap-1.5 text-right font-semibold text-[#131313]">
                      {value}
                      {copyable && (
                        <button
                          type="button"
                          onClick={handleCopyOrderNumber}
                          className="shrink-0 p-0.5 text-blue-600 hover:text-blue-700"
                          aria-label="Copy order number"
                        >
                          <CopyIcon />
                        </button>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-xl border border-gray-200 p-4 sm:p-5">
              <dl className="flex flex-col gap-4 text-sm">
                {RECIPIENT_INFO.map(({ label, value }) => (
                  <div key={label} className={SUMMARY_ROW}>
                    <dt className="shrink-0 text-[#131313]">{label}</dt>
                    <dd className="min-w-0 break-words text-right font-semibold text-[#131313]">{value}</dd>
                  </div>
                ))}
              </dl>
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
