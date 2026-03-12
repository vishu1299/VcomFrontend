"use client";

import { useRef } from "react";

const PHOTOS = [
  "/images/customerReviews/carasoul1.png",
  "/images/customerReviews/carasoul2.png",
  "/images/customerReviews/carasoul3.png",
  "/images/customerReviews/carasoul4.png",
  "/images/customerReviews/carasoul5.png",
  "/images/customerReviews/carasoul6.png",
  "/images/customerReviews/carasoul7.png",
  "/images/customerReviews/carasoul8.png",
  "/images/customerReviews/carasoul3.png",
  "/images/customerReviews/carasoul4.png",
];

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export default function PhotosCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 160;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div className="mb-8">
      <h2 className="text-base font-medium text-[#131313] mb-3">Photos</h2>
      <div className="relative flex items-center gap-2">
        <button
          type="button"
          onClick={() => scroll("left")}
          className="absolute -left-3 shrink-0 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50 transition"
          aria-label="Previous photos"
        >
          <ChevronLeft />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scroll-smooth scrollbar-hide py-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {PHOTOS.map((src, i) => (
            <div
              key={i}
              className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg border border-gray-200 overflow-hidden bg-gray-50"
            >
              <img
                src={src}
                alt={`Customer photo ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => scroll("right")}
          className="absolute -right-3 shrink-0 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50 transition"
          aria-label="Next photos"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
