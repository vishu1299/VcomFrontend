"use client";

import { useState } from "react";
import Link from "next/link";
import { BadgeCheck } from "lucide-react";
import { REMOTE_IMG } from "@/lib/remoteAssets";

const ELITE_STORE_GRADIENT = "linear-gradient(to right, #D4AF37 0%, #FFECAF 53%, #E9CE73 100%)";

const SELLER_BADGES = [
  { label: "TOP STORE", className: "bg-[#1E40AF] text-white" },
  { label: "# TRENDING NOW", className: "bg-[#E11D48] text-white" },
  { label: "PRO HOST", className: "bg-[#0F172A] text-white" },
  { label: "ELITE STORE", className: "text-white", gradient: ELITE_STORE_GRADIENT },
  { label: "NEW ARRIVAL", className: "bg-[#10B981] text-white" },
];



function ChatIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.73594 17.8412C8.64452 18.8203 10.84 19.0855 12.9268 18.589C15.0136 18.0925 16.8545 16.8671 18.1177 15.1334C19.3809 13.3998 19.9834 11.2719 19.8165 9.13339C19.6497 6.99485 18.7245 4.9862 17.2077 3.46943C15.691 1.95265 13.6823 1.02748 11.5438 0.86065C9.40523 0.693815 7.27741 1.29628 5.54376 2.55948C3.81011 3.82268 2.58463 5.66354 2.08816 7.75035C1.59169 9.83715 1.85688 12.0327 2.83594 13.9412L0.835938 19.8412L6.73594 17.8412Z" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="m8.59 13.51 6.82 3.98M15.41 6.51l-6.82 3.98" />
    </svg>
  );
}

function FlagIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" y1="22" x2="4" y2="15" />
    </svg>
  );
}

const SELLER_SHARE_URL = "https://www.tibilmall/seller/urbantech";

const SOCIAL_ICONS = [
  { name: "WhatsApp", bg: "#25D366", label: "W" },
  { name: "Instagram", bg: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)", label: "IG" },
  { name: "X", bg: "#000000", label: "X" },
  { name: "Facebook", bg: "#1877F2", label: "f" },
  { name: "Gmail", bg: "#EA4335", label: "M" },
];

function ShareModal({ open, onClose, dropdown }: { open: boolean; onClose: () => void; dropdown?: boolean }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SELLER_SHARE_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  if (!open) return null;

  const content = (
    <div className="relative z-10 w-full max-w-md rounded-xl bg-white shadow-lg border border-gray-200 overflow-visible">
      <div className="p-5 pt-4">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition"
          aria-label="Close"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <h3 className="text-sm font-bold text-[#131313] mb-2">Share via</h3>
        <div className="flex gap-2 mb-4">
          {SOCIAL_ICONS.map(({ name, bg, label }) => (
            <button
              key={name}
              type="button"
              className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden hover:opacity-90 transition shrink-0 shadow-sm text-white text-xs font-bold"
              style={{ background: bg }}
              aria-label={`Share on ${name}`}
            >
              {label}
            </button>
          ))}
        </div>

        <h3 className="text-sm font-bold text-[#131313] mb-2">Copy Link</h3>
        <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white overflow-hidden">
          <span className="pl-3 text-gray-500 shrink-0" aria-hidden>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
          </span>
          <input
            type="text"
            readOnly
            value={SELLER_SHARE_URL}
            className="flex-1 min-w-0 py-2 pr-2 text-sm text-[#131313] bg-transparent border-0 focus:ring-0 focus:outline-none"
          />
          <button
            type="button"
            onClick={handleCopy}
            className="p-2.5 rounded-lg bg-sky-100 hover:bg-sky-200 transition shrink-0"
            aria-label="Copy link"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          </button>
        </div>
        {copied && <p className="text-xs text-green-600 mt-1.5">Link copied to clipboard</p>}
      </div>
    </div>
  );

  if (dropdown) {
    return (
      <div className="absolute right-0 top-full z-50 mt-2 min-w-[320px] max-w-[360px]">
        {content}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden />
      {content}
    </div>
  );
}

const REPORT_REASONS = [
  "Seller was abusive or harassing",
  "Seller won't respond to questions or issues",
  "Misleading product listings",
  "Seller sent counterfeit or fake items",
  "Extremely delayed or no shipment",
  "Off-platform transaction request",
  "Price manipulation or fake discounts",
  "Using stolen images or branding",
  "Violates platform policies or legal regulation",
  "Other (please explain)",
];

function ReportSellerModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [reason, setReason] = useState(REPORT_REASONS[REPORT_REASONS.length - 1]);
  const [description, setDescription] = useState("");
  const MAX_CHARS = 500;

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden />
      <div className="relative w-full max-w-lg sm:max-w-2xl lg:max-w-5xl max-h-[95vh] sm:max-h-[90vh] rounded-xl sm:rounded-2xl bg-white shadow-xl p-3 sm:p-6 flex flex-col overflow-hidden">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition shrink-0"
          aria-label="Close"
        >
          <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-sm sm:text-base font-bold text-[#131313] pr-8">Report this seller</h2>
        <p className="text-xs sm:text-sm text-gray-600 mt-0.5 shrink-0">Your report helps keep our marketplace safe.</p>

        <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden">
        <p className="text-xs sm:text-sm font-bold text-[#131313] mt-2 sm:mt-3 mb-1.5">Select Reason</p>
        <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mb-2 sm:mb-3">
          {REPORT_REASONS.map((r) => (
            <label key={r} className="flex items-center justify-between gap-2 p-1.5 sm:p-2 rounded-md border border-gray-200 cursor-pointer hover:bg-gray-50/50 transition">
              <span className="text-[10px] sm:text-sm text-[#131313] line-clamp-2 sm:line-clamp-none leading-tight">{r}</span>
              <input
                type="radio"
                name="report-reason"
                value={r}
                checked={reason === r}
                onChange={() => setReason(r)}
                className="shrink-0 w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1E40AF] border-gray-300 focus:ring-[#1E40AF]"
              />
            </label>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-2 sm:gap-4 min-h-0 flex-1">
          <div className="min-w-0 flex-1 min-h-0">
            <p className="text-xs sm:text-sm font-bold text-[#131313] mb-1">Describe the issue</p>
            <textarea
              placeholder="Explain what happened..."
              value={description}
              onChange={(e) => setDescription(e.target.value.slice(0, MAX_CHARS))}
              maxLength={MAX_CHARS}
              rows={3}
              className="w-full rounded-lg border border-gray-200 px-2.5 py-2 sm:px-3 sm:py-2.5 text-xs sm:text-sm text-[#131313] placeholder:text-gray-400 focus:ring-2 focus:ring-[#1E40AF] focus:border-[#1E40AF] focus:outline-none resize-none"
            />
            <p className="text-[10px] sm:text-xs text-gray-500 text-right mt-0.5">({description.length}/{MAX_CHARS})</p>
          </div>
          <div className="min-w-0 flex-1 min-h-0 shrink-0">
            <p className="text-xs sm:text-sm font-bold text-[#131313] mb-1 sm:mb-2">Upload Supporting Media</p>
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-3 sm:p-6 text-center">
              <div className="flex justify-center mb-1 sm:mb-2">
                <span className="relative w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                  <svg width="18" height="18" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx="12" cy="13" r="4" />
                    <line x1="12" y1="8" x2="12" y2="10" />
                  </svg>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 sm:w-4 sm:h-4 bg-gray-400 rounded-full flex items-center justify-center text-white text-[10px] font-bold leading-none">+</span>
                </span>
              </div>
              <p className="text-[10px] sm:text-sm text-gray-600 mb-0.5 sm:mb-1">Choose file or drag & drop</p>
              <p className="text-[9px] sm:text-xs text-gray-500 mb-2 sm:mb-3">JPEG, PNG, PDF, MP4 · 50 mb</p>
              <button type="button" className="text-[10px] sm:text-sm font-medium text-[#1E40AF] hover:underline">
                Browse File
              </button>
</div>
            </div>
        </div>
        </div>

        <div className="flex justify-end gap-2 sm:gap-3 mt-2 sm:mt-3 pt-2 shrink-0 border-t border-gray-100">
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg border border-gray-200 bg-white text-gray-700 text-xs sm:text-sm font-medium hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => { onClose(); /* submit report */ }}
            className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg bg-[#1E40AF] text-white text-xs sm:text-sm font-medium hover:bg-[#1E3A8A] transition"
          >
            Report
          </button>
        </div>
      </div>
    </div>
  );
}

export default function SellerProfileCard() {
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  return (
    <div className="relative mt-2 mb-4 rounded-2xl bg-white shadow-lg border border-gray-100 w-full overflow-hidden">
      <div className="p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
            <div className="relative shrink-0">
              <div className="w-24 h-24 sm:w-36 sm:h-36 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                <img
                  src={REMOTE_IMG.avatar}
                  alt="UrbanTech"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute -bottom-3 left-8 rounded-md bg-red-600  flex items-center justify-center text-[16px] font-bold text-white px-4 py-0.5">
                &#9679; LIVE
              </span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex flex-wrap gap-2">
                  <h1 className="text-xl sm:text-2xl font-bold text-[#131313]">UrbanTech</h1>
                  <BadgeCheck className="w-7 h-7 shrink-0 text-[#1d4ed8]" aria-label="Verified" />
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {SELLER_BADGES.map((b) => (
                    <span
                      key={b.label}
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded ${b.className}`}
                      style={"gradient" in b && b.gradient ? { background: b.gradient } : undefined}
                    >
                      {b.label}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-[#131313] mt-1">Official Apple Premium Reseller</p>
              <p className="text-sm text-[#131313] mt-1">
                Products:<span className="font-semibold"> 120 </span> Followers:
                <span className="font-semibold"> 4.2 </span>Million
              </p>
              <div className="flex flex-wrap justify-between mt-4 gap-4">
                <div className="flex gap-3">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 bg-[#f5b700] text-sm font-medium px-4 py-2.5 rounded-lg  transition"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Following
                  </button>
                  <Link
                    href="/chat"
                    className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-gray-50 transition"
                  >
                    <ChatIcon />
                    Chat with seller
                  </Link>
                </div>
                <div className="relative flex gap-3 ">
                  <button
                    type="button"
                    onClick={() => setShareModalOpen(true)}
                    className="inline-flex items-center gap-2 border border-gray-300 text-[#131313] text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-gray-50 transition"
                  >
                    <ShareIcon />
                    Share
                  </button>
                  <button
                    type="button"
                    onClick={() => setReportModalOpen(true)}
                    className="inline-flex items-center gap-2 border border-gray-300 text-[#131313] text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-gray-50 transition"
                  >
                    <FlagIcon />
                    Report Seller
                  </button>
                  <ShareModal open={shareModalOpen} onClose={() => setShareModalOpen(false)}  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <ReportSellerModal open={reportModalOpen} onClose={() => setReportModalOpen(false)} />
    </div>
  );
}
