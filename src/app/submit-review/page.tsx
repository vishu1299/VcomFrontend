"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import RelatedProductsCarousel from "../customer-reviews/components/RelatedProductsCarousel";
import type { ProductCardProps } from "../product-list/components/ProductCard";
import QuickViewModal from "../product-list/components/QuickViewModal";
import { getProductDetail } from "../product-list/data/productDetails";

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
  const [quickViewProduct, setQuickViewProduct] = useState<ProductCardProps | null>(null);

  return (
    <main className="page-text-black min-h-screen bg-gray-50">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-4 sm:px-6 sm:py-6 lg:px-8 xl:px-10 2xl:px-12">
      <div className="w-full rounded-xl bg-white p-4 shadow-lg sm:p-6">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-xl sm:text-2xl font-bold text-[#131313]">
            Review Submitted Successfully
          </h1>
          <Image src="/success-tick.svg" alt="" width={36} height={36} className="h-9 w-9 shrink-0" />
        </div>
        <p className="text-sm text-[#131313] mt-1">
          Thank you for sharing your feedback. Your review helps other shoppers
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <span className="text-sm text-[#131313]">Your Ratings:</span>
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <StarIcon key={i} filled={i <= rating} />
            ))}
          </div>
          <Link
            href="/customer-reviews"
            className="ml-0 shrink-0 text-sm font-medium text-[#131313] underline hover:no-underline sm:ml-3"
          >
            See review
          </Link>
        </div>
        <div className="mt-6 sm:mt-8">
          <div className="relative h-24 w-24 overflow-hidden rounded-lg">
            <Image
              src="/images/phone.png"
              alt="iPhone 17 Pro"
              fill
              className="object-contain"
              sizes="96px"
            />
          </div>
          <p className="mt-2 text-sm font-medium text-[#131313]">iPhone 17 Pro</p>
          </div>
        </div>
        <div className="-mx-2 mt-3 w-[calc(100%+1rem)] min-w-0 overflow-visible sm:mx-0 sm:mt-4 sm:w-full">
          <RelatedProductsCarousel
            title="Recently Browsed"
            onProductClick={setQuickViewProduct}
          />
        </div>  
      </div>
      {quickViewProduct && (
        <QuickViewModal
          product={getProductDetail(quickViewProduct)}
          onClose={() => setQuickViewProduct(null)}
          onGoToProduct={() => setQuickViewProduct(null)}
        />
      )}
    </main>
  );
}
