'use client';

import { ChevronDown, SlidersHorizontal } from 'lucide-react';

type JustDroppedSortBarProps = {
  showingStart: number;
  showingEnd: number;
  totalCount: number;
  sortValue: string;
  onSortChange: (v: string) => void;
  popularValue: string;
  onPopularChange: (v: string) => void;
  onOpenFilters?: () => void;
};

export default function JustDroppedSortBar({
  showingStart,
  showingEnd,
  totalCount,
  sortValue,
  onSortChange,
  popularValue,
  onPopularChange,
  onOpenFilters,
}: JustDroppedSortBarProps) {
  return (
    <div
      className="mb-4 flex w-full flex-col gap-2 sm:gap-3 lg:flex-row lg:items-center lg:justify-between"
      style={{ fontFamily: 'var(--font-poppins)' }}
    >
      <p className="order-2 text-xs font-normal text-[#131313] lg:order-1">
        Showing {showingStart}-{showingEnd} of {totalCount} results
      </p>
      <div className="order-1 flex w-full flex-wrap items-center gap-2 sm:gap-3 lg:order-2 lg:w-auto">
        {onOpenFilters && (
          <div className="lg:hidden">
            <button
              type="button"
              onClick={onOpenFilters}
              className="flex h-9 items-center gap-2 rounded-lg border border-[#e5e7eb] bg-white px-3 text-xs font-medium text-[#131313] hover:bg-gray-50 sm:h-10 sm:px-4 sm:text-sm"
            >
              <SlidersHorizontal className="h-4 w-4 shrink-0" />
              Filters
            </button>
          </div>
        )}
        <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2 sm:gap-3 lg:flex-initial">
          <div className="relative min-w-0 flex-1 min-[200px]:w-auto min-[400px]:flex-initial">
            <select
              value={sortValue}
              onChange={(e) => onSortChange(e.target.value)}
              className="h-9 w-full min-w-0 cursor-pointer appearance-none rounded-lg border border-[#e5e7eb] bg-white pl-3 pr-9 text-xs text-[#131313] focus:outline-none focus:ring-1 focus:ring-[#1e3a8a] sm:h-10 sm:pl-4 sm:pr-10 sm:text-sm"
            >
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-[#767676] sm:right-3" />
          </div>
          <div className="relative min-w-0 flex-1 min-[200px]:w-auto min-[400px]:flex-initial">
            <select
              value={popularValue}
              onChange={(e) => onPopularChange(e.target.value)}
              className="h-9 w-full min-w-0 cursor-pointer appearance-none rounded-lg border border-[#e5e7eb] bg-white pl-3 pr-9 text-xs text-[#131313] focus:outline-none focus:ring-1 focus:ring-[#1e3a8a] sm:h-10 sm:pl-4 sm:pr-10 sm:text-sm"
            >
              <option value="popular">Popular</option>
              <option value="newest">Newest</option>
              <option value="rating">Rating</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-[#767676] sm:right-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
