"use client";

import Image from "next/image";
import { REMOTE_IMG } from "@/lib/remoteAssets";

const STAR_COLOR_FILLED = "#F5B700";
const STAR_COLOR_EMPTY = "#ADADAD";

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
    <div className="mb-8">
      <h1 className="text-xl sm:text-2xl font-bold text-[#131313]">Review Item</h1>
      <p className="text-sm text-[#131313] mt-1">Share your experience with this product.</p>
      <div className="flex flex-col gap-2 mt-6">
        <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-gray-100">
          <Image
            src={REMOTE_IMG.productPhone}
            alt="iPhone 17 Pro"
            fill
            className="object-cover"
            sizes="96px"
            unoptimized
          />
        </div>
          <p className="text-sm font-medium text-[#131313] ml-5">iPhone 17 Pro</p>

          <p className="text-sm text-[#131313] ">How would you rate your experience with this product?</p>
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
