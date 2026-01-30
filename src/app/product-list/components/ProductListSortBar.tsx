'use client';

import { ChevronDown } from 'lucide-react';

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
};

export default function ProductListSortBar({
  totalCount,
  pageSize,
  currentPage,
  sortBy,
  popularSort,
  onSortByChange,
  onPopularSortChange,
}: ProductListSortBarProps) {
  const start = (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, totalCount);

  return (
    <div
      className="w-full py-3 px-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-0"
      style={{ fontFamily: 'var(--font-poppins)' }}
    >
      <p
        className="shrink-0 font-normal"
        style={{ fontSize: FIGMA.fontSize, lineHeight: '100%', color: FIGMA.text }}
      >
        Showing {start}-{end} of {totalCount} results
      </p>
      <div className="flex flex-wrap items-center gap-4 sm:gap-6">
        <div className="flex items-center" style={{ gap: FIGMA.labelGap }}>
          <label
            htmlFor="sort-by"
            className="shrink-0 font-normal"
            style={{ fontSize: FIGMA.fontSize, color: FIGMA.text }}
          >
            Sort:
          </label>
          <div className="relative min-w-[180px] sm:min-w-[200px]">
            <select
              id="sort-by"
              value={sortBy}
              onChange={(e) => onSortByChange(e.target.value as SortOption)}
              className="w-full h-10 pl-4 pr-10 appearance-none cursor-pointer bg-white border font-normal focus:outline-none focus:ring-1 focus:ring-[#1e3a8a]"
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
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none shrink-0"
              style={{ color: FIGMA.text }}
            />
          </div>
        </div>
        <div className="flex items-center" style={{ gap: FIGMA.labelGap }}>
          <label
            htmlFor="popular-sort"
            className="shrink-0 font-normal"
            style={{ fontSize: FIGMA.fontSize, color: FIGMA.text }}
          >
            Sort:
          </label>
          <div className="relative min-w-[120px] sm:min-w-[140px]">
            <select
              id="popular-sort"
              value={popularSort}
              onChange={(e) => onPopularSortChange(e.target.value as PopularSortOption)}
              className="w-full h-10 pl-4 pr-10 appearance-none cursor-pointer bg-white border font-normal focus:outline-none focus:ring-1 focus:ring-[#1e3a8a]"
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
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none shrink-0"
              style={{ color: FIGMA.text }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
