"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ReportSellerModal from "@/components/product/ReportSellerModal";

const SELLER_SHARE_URL = "https://www.tibilmall/seller/urbantech";

const SOCIAL_SHARES = [
  { name: "WhatsApp", icon: "/images/share/whatsapp.png" },
  { name: "Instagram", icon: "/images/share/instagram.png" },
  { name: "X", icon: "/images/share/x.png" },
  { name: "Facebook", icon: "/images/share/facebook.png" },
  { name: "Gmail", icon: "/images/share/gmail.png" },
] as const;

function SellerShareModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SELLER_SHARE_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
      role="presentation"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="seller-share-title"
        className="relative w-full max-w-md rounded-xl border border-gray-200 bg-white p-5 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-[#131313] transition hover:bg-gray-100"
          aria-label="Close"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <h2
          id="seller-share-title"
          className="pr-8 text-sm font-bold text-[#131313]"
        >
          Share via
        </h2>

        <div className="mt-4 flex flex-wrap gap-2">
          {SOCIAL_SHARES.map(({ name, icon }) => (
            <button
              key={name}
              type="button"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F2F2F2] transition hover:opacity-90"
              aria-label={`Share on ${name}`}
            >
              <Image
                src={icon}
                alt=""
                width={22}
                height={22}
                className="object-contain"
              />
            </button>
          ))}
        </div>

        <h3 className="mt-5 text-sm font-bold text-[#131313]">Copy Link</h3>
        <div className="mt-2 flex min-w-0 items-center gap-2">
          <div className="flex min-w-0 flex-1 items-center gap-2 overflow-hidden rounded-xl border border-gray-200 bg-white py-2 pl-3 pr-3">
            <span className="shrink-0 text-[#131313]" aria-hidden>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </span>
            <input
              type="text"
              readOnly
              value={SELLER_SHARE_URL}
              className="min-w-0 flex-1 border-0 bg-transparent text-sm text-[#131313] focus:outline-none focus:ring-0"
            />
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-[#0ea5e9] transition hover:bg-gray-50"
            aria-label="Copy link"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          </button>
        </div>
        {copied && (
          <p className="mt-1.5 text-xs text-green-600">Link copied to clipboard</p>
        )}
      </div>
    </div>
  );
}

const ELITE_STORE_GRADIENT =
  "linear-gradient(to right, #D4AF37 0%, #FFECAF 53%, #E9CE73 100%)";

const LIVE_GRADIENT =
  "linear-gradient(to right, #B90000 0%, #FF0000 100%)";

const SELLER_BADGES = [
  { label: "TOP STORE", className: "bg-[#1E40AF] text-white" },
  { label: "# TRENDING NOW", className: "bg-[#E11D48] text-white" },
  {
    label: "ELITE STORE",
    className: "text-black font-semibold",
    gradient: ELITE_STORE_GRADIENT,
  },
  { label: "PRO HOST", className: "bg-[#0F172A] text-white" },
  { label: "NEW ARRIVAL", className: "bg-[#10B981] text-white" },
];

function badgeSpan(b: (typeof SELLER_BADGES)[number]) {
  return (
    <span
      key={b.label}
      className={`text-[10px] px-2 py-0.5 rounded whitespace-nowrap font-semibold ${b.className}`}
      style={
        "gradient" in b && b.gradient
          ? { background: b.gradient }
          : undefined
      }
    >
      {b.label}
    </span>
  );
}

const actionBtnOutlineMobile =
  "inline-flex w-full min-h-[44px] items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm font-medium text-[#131313] transition hover:bg-gray-50";

const followingBtnMobile =
  "inline-flex w-full min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#f5b700] px-3 py-2.5 text-sm font-medium text-[#131313] transition hover:brightness-95";

/** Web only: intrinsic width, same row in a tight group */
const actionBtnOutlineDesktop =
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-[#131313] transition hover:bg-gray-50 whitespace-nowrap";

const followingBtnDesktop =
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#f5b700] px-4 py-2.5 text-sm font-medium text-[#131313] transition hover:brightness-95 whitespace-nowrap";

export default function SellerProfileCard() {
  const [shareOpen, setShareOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);

  return (
    <div className="relative mt-2 mb-4 w-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg">
      <div className="p-4 sm:p-6 lg:p-8">
        {/* Top: avatar (left) + name / tagline / stats (right) — same row on all sizes */}
        <div className="flex w-full flex-row items-start gap-3 sm:gap-4 lg:gap-6">
          <div className="relative shrink-0 pb-2 sm:pb-3 lg:pb-4">
            <div className="size-[88px] overflow-hidden rounded-full bg-gray-200 ring-2 ring-white sm:size-28 lg:size-36">
              <Image
                src="/images/circle.png"
                alt="UrbanTech"
                width={144}
                height={144}
                className="h-full w-full object-cover"
              />
            </div>
            <span
              className="absolute bottom-5 left-1/2 flex -translate-x-1/2 translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-md px-3 py-1 text-[10px] font-bold text-white shadow-md sm:text-xs"
              style={{ background: LIVE_GRADIENT }}
            >
              <span className="size-1.5 shrink-0 rounded-full bg-white sm:size-2" />
              LIVE
            </span>
          </div>

          <div className="min-w-0 flex-1 pt-0.5">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-lg font-bold text-[#131313] sm:text-xl lg:text-2xl">
                UrbanTech
              </h1>
              <Image
                src="/verified.svg"
                alt="Verified"
                width={24}
                height={24}
                className="h-5 w-5 shrink-0 sm:h-6 sm:w-6"
              />
              {/* Desktop / large: badges inline with name */}
              <div className="hidden flex-wrap gap-2 lg:flex">
                {SELLER_BADGES.map((b) => badgeSpan(b))}
              </div>
            </div>

            <p className="mt-1.5 text-sm leading-snug text-[#131313] sm:mt-2">
              Official Apple Premium Reseller
            </p>

            <p className="mt-1.5 text-sm text-[#131313] sm:mt-2">
              Products: <span className="font-semibold">120</span>
              <span className="mx-2 sm:mx-3">&nbsp;</span>
              Followers: <span className="font-semibold">4.2M</span>
            </p>

            {/* Desktop: left group + right group, each only as wide as content */}
            <div className="mt-4 hidden w-full flex-row items-center justify-between gap-3 lg:flex">
              <div className="flex shrink-0 flex-row flex-wrap items-center gap-2 sm:gap-3">
                <button type="button" className={followingBtnDesktop}>
                  <Image
                    src="/following.svg"
                    alt=""
                    width={16}
                    height={16}
                  />
                  Following
                </button>
                <Link href="/chat" className={actionBtnOutlineDesktop}>
                  <Image src="/chat.svg" alt="" width={16} height={16} />
                  Chat with seller
                </Link>
              </div>
              <div className="flex shrink-0 flex-row flex-wrap items-center justify-end gap-2 sm:gap-3">
                <button
                  type="button"
                  className={actionBtnOutlineDesktop}
                  onClick={() => setShareOpen(true)}
                >
                  <Image src="/share1.svg" alt="" width={16} height={16} />
                  Share
                </button>
                <button
                  type="button"
                  className={actionBtnOutlineDesktop}
                  onClick={() => setReportOpen(true)}
                >
                  <Image src="/report.svg" alt="" width={16} height={16} />
                  Report Seller
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / tablet: badges — tight gap under header */}
        <div className="mt-1.5 flex flex-wrap gap-2 sm:mt-2 lg:hidden">
          {SELLER_BADGES.map((b) => badgeSpan(b))}
        </div>

        {/* Mobile / tablet: 2×2 actions */}
        <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3 lg:hidden">
          <button type="button" className={followingBtnMobile}>
            <Image src="/following.svg" alt="" width={16} height={16} />
            Following
          </button>
          <Link href="/chat" className={actionBtnOutlineMobile}>
            <Image src="/chat.svg" alt="" width={16} height={16} />
            Chat
          </Link>
          <button
            type="button"
            className={actionBtnOutlineMobile}
            onClick={() => setShareOpen(true)}
          >
            <Image src="/share1.svg" alt="" width={16} height={16} />
            Share
          </button>
          <button
            type="button"
            className={actionBtnOutlineMobile}
            onClick={() => setReportOpen(true)}
          >
            <Image src="/report.svg" alt="" width={16} height={16} />
            Report
          </button>
        </div>
      </div>

      <SellerShareModal open={shareOpen} onClose={() => setShareOpen(false)} />
      <ReportSellerModal
        isOpen={reportOpen}
        onClose={() => setReportOpen(false)}
      />
    </div>
  );
}
