"use client";

import { useRef } from "react";
import ProductListGridCard from "@/app/product-list/components/ProductListGridCard";
import type { ProductCardProps } from "@/app/product-list/components/ProductCard";
import { RELATED_CAROUSEL_PRODUCTS } from "../data/relatedCarouselProducts";

function ChevronLeft() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="shrink-0"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="shrink-0"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export default function RelatedProductsCarousel({
  title = "Sold by this seller",
  onProductClick,
}: {
  title?: string;
  /** When set, card click opens quick view (e.g. seller upcoming live section). */
  onProductClick?: (product: ProductCardProps) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const gap = 16;
    const cardMin = 220;
    const scrollDistance = cardMin + gap;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -scrollDistance : scrollDistance,
      behavior: "smooth",
    });
  };

  return (
    <section className="mx-auto max-w-[1440px] overflow-visible py-2 sm:py-5">
      <h2 className="mb-2 text-xl font-bold text-[#131313] sm:mb-4 sm:text-2xl">
        {title}
      </h2>
      <div className="relative flex items-stretch overflow-visible">
        <button
          type="button"
          onClick={() => scroll("left")}
          className="absolute -left-4 top-1/2 z-10 flex h-9 w-9 shrink-0 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-[#131313] shadow-md transition hover:bg-gray-50 sm:h-10 sm:w-10"
          aria-label="Previous products"
        >
          <ChevronLeft />
        </button>
        <div
          ref={scrollRef}
          className="scrollbar-hide flex min-w-0 w-full snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-1 py-2 sm:gap-4 sm:px-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {RELATED_CAROUSEL_PRODUCTS.map((product) => (
            <div
              key={String(product.id)}
              className="w-[200px] shrink-0 snap-start sm:w-[220px] md:w-[240px]"
            >
              <ProductListGridCard
                {...product}
                onQuickView={
                  onProductClick ? () => onProductClick(product) : undefined
                }
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => scroll("right")}
          className="absolute -right-4 top-1/2 z-10 flex h-9 w-9 shrink-0 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-[#131313] shadow-md transition hover:bg-gray-50 sm:h-10 sm:w-10"
          aria-label="Next products"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
