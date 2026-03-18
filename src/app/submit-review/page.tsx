"use client";

import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import RelatedProductsCarousel from "../customer-reviews/components/RelatedProductsCarousel";
import { REMOTE_IMG } from "@/lib/remoteAssets";

const STAR_FILLED = "#F5B700";
const STAR_EMPTY = "#ADADAD";



function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={filled ? STAR_FILLED : "none"} stroke={filled ? STAR_FILLED : STAR_EMPTY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default function SubmitReviewPage() {
  const rating = 4;

  return (
    <main className="page-text-black min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[1100px]">
        <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-xl sm:text-2xl font-bold text-[#131313]">
            Review Submitted Successfully
          </h1>
          <span className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-[#16a34a]" aria-hidden>
            <CheckCircle2 className="w-9 h-9" strokeWidth={2} />
          </span>
        </div>
        <p className="text-sm text-[#131313] mt-3">
          Thank you for sharing your feedback. Your review helps other shoppers
        </p>
        <div className="flex items-center gap-2 flex-wrap mt-6">
          <span className="text-sm text-[#131313]">Your Ratings:</span>
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <StarIcon key={i} filled={i <= rating} />
            ))}
          </div>
          <Link
            href="/customer-reviews"
            className="text-sm font-medium text-[#131313] underline hover:no-underline ml-3 shrink-0"
          >
            See review
          </Link>
        </div>
        <div className="mt-8">
          <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={REMOTE_IMG.productPhone}
              alt="iPhone 17 Pro"
              fill
              className="object-cover"
              sizes="80px"
              unoptimized
            />
          </div>
          <p className="text-sm font-medium text-[#131313] mt-2">iPhone 17 Pro</p>
          </div>
        </div>
        <div className="w-full overflow-hidden">
          <RelatedProductsCarousel title="Recently Browsed" />
        </div>  
      </div>
    </main>
  );
}
