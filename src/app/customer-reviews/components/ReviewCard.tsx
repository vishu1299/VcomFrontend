"use client";

import { useState } from "react";
import type { Review } from "../data/reviews";

const REPORT_REASONS = [
  {
    value: "off-topic",
    label: "Off Topic",
    description: "Not about the product.",
  },
  {
    value: "inappropriate",
    label: "Inappropriate",
    description: "Disrespect, hateful, obsence.",
  },
  { value: "fake", label: "Fake", description: "Paid for, inauthentic." },
  { value: "other", label: "Other", description: "Something else." },
] as const;

function ReportReviewModal({
  open,
  onClose,
  onReport,
}: {
  open: boolean;
  onClose: () => void;
  onReport: (reason: string) => void;
}) {
  const [selected, setSelected] = useState<string>("off-topic");

  if (!open) return null;

  const handleSubmit = () => {
    onReport(selected);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative w-full max-w-3xl rounded-xl bg-white shadow-xl p-6">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-[#131313] hover:bg-gray-100 transition"
          aria-label="Close"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-lg font-bold text-[#131313] pr-8">
          Report this review
        </h2>
        <p className="text-sm text-[#131313] mt-1">
          Your report helps keep our marketplace safe.
        </p>
        <hr className="my-4 border-gray-200 -ml-[1.5rem] -mr-[1.5rem]" />
        <p className="text-sm font-bold text-[#131313] mt-6 mb-3">
          Select Reason
        </p>
        <div className="grid grid-cols-2 gap-3 mb-4">
          {REPORT_REASONS.map((r) => (
            <label
              key={r.value}
              className="flex items-center justify-between gap-3 p-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50/50 transition"
            >
              <div>
                <span className="text-sm font-medium text-[#131313] block">
                  {r.label}
                </span>
                <span className="text-xs text-[#131313]">{r.description}</span>
              </div>
              <input
                type="radio"
                name="report-reason"
                value={r.value}
                checked={selected === r.value}
                onChange={() => setSelected(r.value)}
                className="mt-0.5 w-4 h-4 text-[#1e3a8a] border-gray-300 focus:ring-[#1e3a8a]"
              />
            </label>
          ))}
        </div>

        <p className="text-sm text-[#131313] mb-6">
          Thank you for reporting. If this review doesn&apos;t match our
          guidelines, we&apos;ll remove it.
        </p>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-[#131313] text-sm font-medium hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="px-4 py-2.5 rounded-lg bg-[#1e3a8a] text-white text-sm font-medium hover:bg-[#233876] transition"
          >
            Report
          </button>
        </div>
      </div>
    </div>
  );
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill={filled ? "#eab308" : "none"}
      stroke="#eab308"
      strokeWidth="1.5"
      className="shrink-0"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function ThumbsUpIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
    </svg>
  );
}

function FlagIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" y1="22" x2="4" y2="15" />
    </svg>
  );
}

type ReviewCardProps = Review;

export default function ReviewCard({
  author,
  rating,
  date,
  text,
  photos,
}: ReviewCardProps) {
  const [reportModalOpen, setReportModalOpen] = useState(false);

  return (
    <article className="py-6 border-b border-gray-200">
      <div className="flex gap-4">
        <div className="shrink-0 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
          <span className="text-sm font-medium text-[#131313]">
            {author.charAt(0)}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
            <span className="font-semibold text-[#131313]">{author}</span>
            <span className="text-sm text-[#131313] shrink-0">{date}</span>
          </div>
          <div className="flex items-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} filled={i < rating} />
            ))}
          </div>
          <p className="text-sm text-[#131313] leading-relaxed mb-3">{text}</p>
          {photos && photos.length > 0 && (
            <div className="flex gap-2 mb-3 flex-wrap">
              {photos.map((src, i) => (
                <div
                  key={i}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg border border-gray-200 overflow-hidden bg-gray-50 shrink-0"
                >
                  <img
                    src={src}
                    alt={`Review photo ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="flex items-center gap-1.5 border border-gray-300 py-2 px-3 rounded-lg text-sm text-black transition"
            >
              <ThumbsUpIcon />
              Helpful
            </button>
            <button
              type="button"
              onClick={() => setReportModalOpen(true)}
              className="flex items-center gap-1.5 border border-gray-300 py-2 px-3 rounded-lg text-sm text-black transition hover:bg-gray-50"
            >
              <FlagIcon />
              Report
            </button>
          </div>
        </div>
      </div>

      <ReportReviewModal
        open={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
        onReport={(reason) => {
          setReportModalOpen(false);
          // Optional: send reason to API or analytics
        }}
      />
    </article>
  );
}
