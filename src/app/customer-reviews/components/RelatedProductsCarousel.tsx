"use client";

import { useRef } from "react";
import { RELATED_PRODUCTS } from "../data/relatedProducts";
import RelatedProductCard from "./RelatedProductCard";

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export default function RelatedProductsCarousel({ title = "Sold by this seller" }: { title?: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const gap = 16;
    const cardMin = 200;
    const scrollDistance = cardMin + gap;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -scrollDistance : scrollDistance,
      behavior: "smooth",
    });
  };

  return (
    <section className="max-w-[1100px] mx-auto py-8 sm:py-10">
      <h2 className="text-xl sm:text-2xl font-bold text-[#131313] mb-4 sm:mb-6">{title}</h2>
      <div className="relative flex items-stretch">
        <button
          type="button"
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:bg-gray-50 transition"
          aria-label="Previous products"
        >
          <ChevronLeft />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth scrollbar-hide py-2 px-1 sm:px-2 min-w-0 w-full snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {RELATED_PRODUCTS.map((product) => (
            <div key={product.id} className="snap-start shrink-0">
              <RelatedProductCard {...product} />
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:bg-gray-50 transition"
          aria-label="Next products"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
