'use client';

import { ChevronDown, SlidersHorizontal } from 'lucide-react';

/** Figma: full-width bar above filter + product list. Results left, two Sort dropdowns right. */
const FIGMA = {
  text: '#131313',
  border: '#e5e7eb',
  fontSize: 14,
  selectRadius: 6,
  labelGap: 8,
  dropdownGap: 16,
} as const;

export type SortOption =
  | 'most-wishlisted'
  | 'most-viewed'
  | 'newest'
  | 'low-to-high'
  | 'high-to-low'
  | 'customer-rating';

export const SORT_LABELS: Record<SortOption, string> = {
  'most-wishlisted': 'Most Wishlisted Products',
  'most-viewed': 'Top 10 Most viewed Products',
  newest: 'Newest-Rolling Products',
  'low-to-high': 'Low to High',
  'high-to-low': 'High to Low',
  'customer-rating': 'Customer Rating',
};

export const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'most-wishlisted', label: 'Most Wishlisted Products' },
  { value: 'most-viewed', label: 'Top 10 Most viewed Products' },
  { value: 'newest', label: 'Newest-Rolling Products' },
  { value: 'low-to-high', label: 'Low to High' },
  { value: 'high-to-low', label: 'High to Low' },
  { value: 'customer-rating', label: 'Customer Rating' },
];

export const POPULAR_OPTIONS = [
  { value: 'low-to-high', label: 'Low to High' },
  { value: 'high-to-low', label: 'High to Low' },
  { value: 'newest', label: 'Browse newest' },
  { value: 'customer-rating', label: 'Customer Rating' },
] as const;

export type PopularSortOption = (typeof POPULAR_OPTIONS)[number]['value'];

type ProductListSortBarProps = {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  sortBy: SortOption;
  popularSort: PopularSortOption;
  onSortByChange: (value: SortOption) => void;
  onPopularSortChange: (value: PopularSortOption) => void;
  /** Opens filter drawer on small screens only (button is hidden from `lg`). */
  onMobileFilterClick?: () => void;
};

export default function ProductListSortBar({
  totalCount,
  pageSize,
  currentPage,
  sortBy,
  popularSort,
  onSortByChange,
  onPopularSortChange,
  onMobileFilterClick,
}: ProductListSortBarProps) {
  const start = (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, totalCount);

  return (
    <div
      className="mb-4 flex w-full flex-col gap-3 py-3 px-0 sm:mb-0 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
      style={{ fontFamily: 'var(--font-poppins)' }}
    >
      <p
        className="shrink-0 font-normal"
        style={{ fontSize: FIGMA.fontSize, lineHeight: '100%', color: FIGMA.text }}
      >
        Showing {start}-{end} of {totalCount} results
      </p>
      <div className="flex min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-3 lg:flex-initial lg:justify-end">
        <div className="flex w-full items-center sm:w-auto" style={{ gap: FIGMA.labelGap }}>
          <label
            htmlFor="sort-by"
            className="shrink-0 font-normal"
            style={{ fontSize: FIGMA.fontSize, color: FIGMA.text }}
          >
            Sort:
          </label>
          <div className="relative min-w-0 flex-1 sm:min-w-[200px] sm:flex-initial">
            <select
              id="sort-by"
              value={sortBy}
              onChange={(e) => onSortByChange(e.target.value as SortOption)}
              className="h-10 w-full cursor-pointer appearance-none border bg-white pl-4 pr-10 font-normal focus:outline-none focus:ring-1 focus:ring-[#1e3a8a]"
              style={{
                fontSize: FIGMA.fontSize,
                color: FIGMA.text,
                borderColor: FIGMA.border,
                borderRadius: FIGMA.selectRadius,
                fontFamily: 'var(--font-poppins)',
              }}
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 shrink-0 -translate-y-1/2"
              style={{ color: FIGMA.text }}
            />
          </div>
        </div>
        {/* Second sort + filters (same row below lg); icon-only filter on very narrow screens */}
        <div className="flex w-full min-w-0 items-center gap-2 sm:w-auto lg:gap-6">
          <div
            className="flex min-w-0 flex-1 items-center sm:flex-initial"
            style={{ gap: FIGMA.labelGap }}
          >
            <label
              htmlFor="popular-sort"
              className="shrink-0 font-normal"
              style={{ fontSize: FIGMA.fontSize, color: FIGMA.text }}
            >
              Sort:
            </label>
            <div className="relative min-w-0 flex-1 sm:min-w-[140px] sm:flex-initial">
              <select
                id="popular-sort"
                value={popularSort}
                onChange={(e) => onPopularSortChange(e.target.value as PopularSortOption)}
                className="h-10 w-full cursor-pointer appearance-none border bg-white pl-4 pr-10 font-normal focus:outline-none focus:ring-1 focus:ring-[#1e3a8a]"
                style={{
                  fontSize: FIGMA.fontSize,
                  color: FIGMA.text,
                  borderColor: FIGMA.border,
                  borderRadius: FIGMA.selectRadius,
                  fontFamily: 'var(--font-poppins)',
                }}
              >
                {POPULAR_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 shrink-0 -translate-y-1/2"
                style={{ color: FIGMA.text }}
              />
            </div>
          </div>
          {onMobileFilterClick ? (
            <button
              type="button"
              onClick={onMobileFilterClick}
              className="inline-flex h-9 shrink-0 items-center justify-center gap-1.5 rounded-lg border border-[#1e3a8a] bg-white px-2 text-sm font-normal text-[#131313] transition hover:bg-[rgba(30,58,138,0.04)] min-[381px]:px-3 lg:hidden"
              aria-label="Open filters"
            >
              <SlidersHorizontal className="h-3.5 w-3.5 shrink-0" aria-hidden />
              <span className="max-[380px]:hidden">Filters</span>
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
