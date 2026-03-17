'use client';

import { ChevronDown, SlidersHorizontal } from 'lucide-react';

type ExclusiveFilterSortBarProps = {
  start: number;
  end: number;
  totalResults: number;
  onOpenFilters?: () => void;
};

export default function ExclusiveFilterSortBar({
  start,
  end,
  totalResults,
  onOpenFilters,
}: ExclusiveFilterSortBarProps) {
  return (
    <div
      className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 sm:gap-3 px-0 w-full"
      style={{ fontFamily: 'var(--font-poppins)' }}
    >
      <p className="text-xs sm:text-sm font-normal text-[var(--color-black)] order-2 lg:order-1 shrink-0">
        Showing {start}-{end} of {totalResults} results
      </p>
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 order-1 lg:order-2 w-full lg:w-auto">
        {onOpenFilters && (
          <div className="lg:hidden shrink-0">
            <button
              type="button"
              onClick={onOpenFilters}
              className="flex items-center gap-2 h-9 sm:h-10 px-3 sm:px-4 rounded-lg border border-[var(--color-border)] bg-white text-[var(--color-black)] text-xs sm:text-sm font-medium hover:bg-gray-50 transition"
            >
              <SlidersHorizontal className="w-4 h-4 shrink-0" />
              Filters
            </button>
          </div>
        )}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 min-w-0 flex-1 lg:flex-initial">
          <div className="relative min-w-0 w-full min-[200px]:w-auto flex-1 min-[400px]:flex-initial">
            <select
              className="w-full min-w-0 h-9 sm:h-10 pl-3 sm:pl-4 pr-9 sm:pr-10 appearance-none cursor-pointer bg-white border border-[var(--color-border)] rounded-lg text-xs sm:text-sm font-normal text-[var(--color-black)] focus:outline-none focus:ring-1 focus:ring-[var(--color-main-blue)]"
              defaultValue="low-to-high"
            >
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
            <ChevronDown className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-[var(--color-muted)]" />
          </div>
          <div className="relative min-w-0 w-full min-[200px]:w-auto flex-1 min-[400px]:flex-initial">
            <select
              className="w-full min-w-0 h-9 sm:h-10 pl-3 sm:pl-4 pr-9 sm:pr-10 appearance-none cursor-pointer bg-white border border-[var(--color-border)] rounded-lg text-xs sm:text-sm font-normal text-[var(--color-black)] focus:outline-none focus:ring-1 focus:ring-[var(--color-main-blue)]"
              defaultValue="popular"
            >
              <option value="popular">Popular</option>
              <option value="newest">Newest</option>
              <option value="rating">Rating</option>
            </select>
            <ChevronDown className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-[var(--color-muted)]" />
          </div>
        </div>
      </div>
    </div>
  );
}
