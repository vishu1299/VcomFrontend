"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ExclusiveProduct } from "@/app/exclusive/data/products";
import ExclusiveProductCard from "@/app/exclusive/components/ExclusiveProductCard";

type Props = { products: ExclusiveProduct[] };

const SELLER_CARD_IMAGES = [
  "/images/customerReviews/seller1.png",
  "/images/customerReviews/seller2.png",
  "/images/customerReviews/seller4.png",
  "/images/phone.png",
  "/images/phone2.jpg",
];

export default function SoldBySellerCarousel({ products }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-8" style={{ fontFamily: "var(--font-poppins)" }}>
      <h2 className="text-lg font-bold text-gray-900 mb-4">
        Sold by this seller
      </h2>
      <div className="relative overflow-visible">
        <button
          type="button"
          onClick={() => scroll("left")}
          className="absolute top-1/2 -left-5 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center hover:bg-gray-50"
        >
          <ChevronLeft className="w-5 h-5 text-gray-900" />
        </button>
        <button
          type="button"
          onClick={() => scroll("right")}
          className="absolute top-1/2 -right-5 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center hover:bg-gray-50"
        >
          <ChevronRight className="w-5 h-5 text-gray-900" />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              className="shrink-0 w-[200px] sm:w-[220px] md:w-[240px]"
            >
              <ExclusiveProductCard
                {...product}
                image={SELLER_CARD_IMAGES[index % SELLER_CARD_IMAGES.length]}
                variant="grid"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
