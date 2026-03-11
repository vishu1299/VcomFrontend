'use client';

export type SortOption =
  | 'top-10-most-viewed-products'
  | 'top-repeated-purchase-items'
  | 'most-reviewed-products'
  | 'most-wishlisted-products'
  | 'fastest-rising-products-last-24h';

export type PriceOption =
  | 'recommended'
  | 'popular'
  | 'price-low-to-high'
  | 'price-high-to-low'
  | 'customer-rating';

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'top-10-most-viewed-products', label: 'Top 10 Most Viewed Products' },
  { value: 'top-repeated-purchase-items', label: 'Top Repeated-Purchase items' },
  { value: 'most-reviewed-products', label: 'Most Reviewed Products' },
  { value: 'most-wishlisted-products', label: 'Most Wishlisted Products' },
  { value: 'fastest-rising-products-last-24h', label: 'Fastest- Rising Products(last 24h / 7d)' },
];

const PRICE_OPTIONS: { value: PriceOption; label: string }[] = [
  { value: 'recommended', label: 'Recommended' },
  { value: 'popular', label: 'Popular' },
  { value: 'price-low-to-high', label: 'Price: Low to High' },
  { value: 'price-high-to-low', label: 'Price: High to Low' },
  { value: 'customer-rating', label: 'Customer Rating' },
];

type SortBarProps = {
  showingStart: number;
  showingEnd: number;
  totalCount: number;
  sortBy: SortOption;
  priceSort: PriceOption;
  onSortByChange: (value: SortOption) => void;
  onPriceSortChange: (value: PriceOption) => void;
};

export default function SortBar({
  showingStart,
  showingEnd,
  totalCount,
  sortBy,
  priceSort,
  onSortByChange,
  onPriceSortChange,
}: SortBarProps) {
  return (
    <div
      className="w-full py-3 px-0 flex flex-col sm:flex-row sm:items-center sm:gap-50 gap-3 sm:gap-4 mb-4"
      style={{ fontFamily: 'var(--font-poppins)' }}
    >
      <p className="shrink-0 text-[14px] text-[#131313]">
        Showing {showingStart}-{showingEnd} of {totalCount} results
      </p>
      <div className="flex flex-wrap items-center gap-4 sm:gap-6">
        <div className="flex items-center gap-2">
          <label htmlFor="sort-viewed" className="shrink-0 text-[14px] text-[#131313]">
            Sort:
          </label>
          <div className="relative min-w-[180px] sm:min-w-[200px]">
            <select
              id="sort-viewed"
              value={sortBy}
              onChange={(e) => onSortByChange(e.target.value as SortOption)}
              className="w-full h-10 pl-4 pr-10 appearance-none cursor-pointer bg-white border border-[#e5e7eb] rounded-md text-[14px] text-[#131313] focus:outline-none focus:ring-1 focus:ring-[#1e3a8a]"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#131313]"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="sort-price" className="shrink-0 text-[14px] text-[#131313]">
            Price:
          </label>
          <div className="relative min-w-[120px] sm:min-w-[140px]">
            <select
              id="sort-price"
              value={priceSort}
              onChange={(e) => onPriceSortChange(e.target.value as PriceOption)}
              className="w-full h-10 pl-4 pr-10 appearance-none cursor-pointer bg-white border border-[#e5e7eb] rounded-md text-[14px] text-[#131313] focus:outline-none focus:ring-1 focus:ring-[#1e3a8a]"
            >
              {PRICE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#131313]"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
