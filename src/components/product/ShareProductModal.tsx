"use client";

import { useState } from "react";
import {
  X,
  Copy,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  Globe,
} from "lucide-react";
import ShareIconImg from "@/components/ShareIconImg";

type ShareProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
  productUrl?: string;
};

function buildShareTargets(productUrl: string, productName: string) {
  const text = encodeURIComponent(`Check out ${productName}`);
  const u = encodeURIComponent(productUrl);
  return [
    {
      id: "twitter",
      label: "Twitter",
      Icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${u}&text=${text}`,
      className: "bg-sky-500 text-white",
    },
    {
      id: "facebook",
      label: "Facebook",
      Icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
      className: "bg-[#1877F2] text-white",
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      Icon: MessageCircle,
      href: `https://wa.me/?text=${text}%20${u}`,
      className: "bg-[#25D366] text-white",
    },
    {
      id: "reddit",
      label: "Reddit",
      Icon: Globe,
      href: `https://www.reddit.com/submit?url=${u}&title=${text}`,
      className: "bg-[#FF4500] text-white",
    },
    {
      id: "instagram",
      label: "Instagram",
      Icon: Instagram,
      href: `https://www.instagram.com/`,
      className: "bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] text-white",
    },
  ] as const;
}

export default function ShareProductModal({
  isOpen,
  onClose,
  productName = "Product",
  productUrl = "",
}: ShareProductModalProps) {
  const [copied, setCopied] = useState(false);
  const resolvedUrl =
    productUrl.trim() ||
    (typeof window !== "undefined" ? window.location.href : "");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(resolvedUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  const targets = buildShareTargets(resolvedUrl, productName);

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

        <h2 className="flex items-center gap-2 text-base sm:text-lg font-bold text-black pr-8">
          <ShareIconImg className="w-5 h-5 sm:w-6 sm:h-6" size={24} />
          Share this Product
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1 mb-4 sm:mb-6">
          If you like this product share it with your friends.
        </p>

        <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-6 mb-4 sm:mb-6">
          {targets.map(({ id, label, Icon, href, className }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 sm:gap-1.5"
              aria-label={`Share on ${label}`}
            >
              <span
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 ${className}`}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
              </span>
              <span className="text-[9px] sm:text-xs font-medium text-black leading-tight text-center">
                {label}
              </span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 overflow-hidden">
          <input
            type="text"
            readOnly
            value={resolvedUrl}
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
          <p className="text-xs text-green-600 mt-2 text-center">
            Link copied to clipboard
          </p>
        )}
      </div>
    </div>
  );
}
