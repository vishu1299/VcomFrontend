"use client";

import { useState } from "react";
import { X, Copy } from "lucide-react";

const SOCIAL_ICONS_BASE = "/Tibil Mall-socialicons";

const SOCIAL_OPTIONS = [
  { id: "twitter", label: "Twitter", icon: "twitter.png" },
  { id: "facebook", label: "Facebook", icon: "facebook.png" },
  { id: "instagram", label: "Instagram", icon: "instagram.png" },
  { id: "reddit", label: "Reddit", icon: "redit.png" },
  { id: "whatsapp", label: "WhatsApp", icon: "watsapp.png" },
];

type ShareProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
  productUrl?: string;
};

export default function ShareProductModal({
  isOpen,
  onClose,
  productName = "Product",
  productUrl = "https://tibilmall.com/product/iphone-17-pro",
}: ShareProductModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(productUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50"
      role="dialog"
      aria-modal
      aria-label="Share this product"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-white shadow-xl p-4 sm:p-6"
        onClick={(e) => e.stopPropagation()}
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition"
          aria-label="Close"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <h2 className="text-base sm:text-lg font-bold text-black pr-8">Share this Product</h2>
        <p className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1 mb-4 sm:mb-6">
          If you like this product share it with your friends.
        </p>

        {/* 3-per-row grid on small screens, flex wrap on larger */}
        <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-6 mb-4 sm:mb-6">
          {SOCIAL_OPTIONS.map(({ id, label, icon }) => (
            <button
              key={id}
              type="button"
              className="flex flex-col items-center gap-1 sm:gap-1.5"
              aria-label={`Share on ${label}`}
            >
              <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-gray-100 shrink-0 overflow-hidden p-1 sm:p-1.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={encodeURI(`${SOCIAL_ICONS_BASE}/${icon}`)}
                  alt={label}
                  width={28}
                  height={28}
                  className="object-contain w-full h-full max-w-[24px] max-h-[24px] sm:max-w-[28px] sm:max-h-[28px]"
                  loading="lazy"
                />
              </span>
              <span className="text-[9px] sm:text-xs font-medium text-black leading-tight">{label}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 overflow-hidden">
          <input
            type="text"
            readOnly
            value={productUrl}
            className="flex-1 min-w-0 px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-black bg-transparent border-0 outline-none"
          />
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 shrink-0 text-black hover:bg-gray-200 transition"
            aria-label="Copy link"
          >
            <Copy className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
        {copied && (
          <p className="text-xs text-green-600 mt-2 text-center">Link copied to clipboard</p>
        )}
      </div>
    </div>
  );
}
