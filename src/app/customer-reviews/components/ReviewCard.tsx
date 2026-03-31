"use client";

import { useState } from "react";
import type { Review } from "../data/reviews";
import ReportReviewModal from "@/components/product/ReportReviewModal";

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

const CUSTOMER_REVIEW_PHOTOS = [
  "/images/customerReviews/review1.png",
  "/images/customerReviews/review2.png",
  "/images/customerReviews/review3.png",
  "/images/customerReviews/review4.png",
  "/images/customerReviews/carasoul1.png",
  "/images/customerReviews/carasoul2.png",
  "/images/customerReviews/carasoul3.png",
  "/images/customerReviews/carasoul4.png",
];

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
        <div className="shrink-0 w-10 h-10 rounded-full bg-[#E7E7E7] flex items-center justify-center overflow-hidden">
          <img
            src="/user.svg"
            alt={`${author} profile`}
            className="w-5 h-5 object-contain"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
            <span className="font-semibold text-[#131313]">{author}</span>
            <span className="text-sm text-[#767676] shrink-0">{date}</span>
          </div>
          <div className="flex items-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} filled={i < rating} />
            ))}
          </div>
          <p className="text-sm text-[#131313] leading-relaxed mb-3">{text}</p>
          {photos && photos.length > 0 && (
            <div className="flex gap-2 mb-3 flex-wrap">
              {photos.map((_, i) => (
                <div
                  key={i}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg border border-gray-200 overflow-hidden bg-gray-50 shrink-0"
                >
                  <img
                    src={CUSTOMER_REVIEW_PHOTOS[i % CUSTOMER_REVIEW_PHOTOS.length]}
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
              className="flex items-center gap-1.5 border border-[#d1d5db] bg-white py-2 px-3 rounded-lg text-sm text-black transition hover:bg-gray-50"
            >
              <ThumbsUpIcon />
              Helpful
            </button>
            <button
              type="button"
              onClick={() => setReportModalOpen(true)}
              className="flex items-center gap-1.5 border border-[#d1d5db] bg-white py-2 px-3 rounded-lg text-sm text-black transition hover:bg-gray-50"
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
        reviewAuthor={author}
        onReport={() => {
          setReportModalOpen(false);
        }}
      />
    </article>
  );
}
