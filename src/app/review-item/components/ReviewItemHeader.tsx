"use client";

import Image from "next/image";

const STAR_COLOR_FILLED = "#F5B700";
const STAR_COLOR_EMPTY = "#D9D9D9";

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill={filled ? STAR_COLOR_FILLED : "none"} stroke={filled ? STAR_COLOR_FILLED : STAR_COLOR_EMPTY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

type ReviewItemHeaderProps = {
  overallRating: number;
  onOverallRatingChange: (value: number) => void;
};

export default function ReviewItemHeader({ overallRating, onOverallRatingChange }: ReviewItemHeaderProps) {
  return (
    <div className="mb-3">
      <h1 className="text-xl sm:text-2xl font-bold text-[#131313]">Review Item</h1>
      <p className="mt-1 text-md text-[#767676]">Share your experience with this product.</p>
      <div className="flex flex-col gap-2 mt-6">
        <div className="relative h-32 w-32 rounded-lg overflow-hidden shrink-0">
          <Image
            src="/images/phone.png"
            alt="iPhone 17 Pro"
            fill
            className="object-contain"
            sizes="128px"
          />
        </div>
          <p className="text-sm font-medium text-[#131313] ml-5">iPhone 17 Pro</p>

          <p className="mt-5 text-sm font-semibold text-[#131313]">How would you rate your experience with this product?</p>
          <div className="flex items-center gap-1" role="group" aria-label="Overall rating">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => onOverallRatingChange(value)}
                className="p-0.5 focus:outline-none focus:ring-2 focus:ring-[#3581EA] focus:ring-offset-1"
                aria-label={`${value} star${value === 1 ? "" : "s"}`}
                aria-pressed={overallRating === value}
              >
                <StarIcon filled={value <= overallRating} />
              </button>
            ))}

        </div>
      </div>
    </div>
  );
}
