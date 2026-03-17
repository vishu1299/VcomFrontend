'use client';

type SortBarProps = {
  showingStart: number;
  showingEnd: number;
  totalCount: number;
  sortValue: string;
  onSortChange: (value: string) => void;
  popularValue: string;
  onPopularChange: (value: string) => void;
};

export default function SortBar({
  showingStart,
  showingEnd,
  totalCount,
  sortValue,
  onSortChange,
  popularValue,
  onPopularChange,
}: SortBarProps) {
  return (
    <div className="w-full py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4">
      <p className="text-sm text-[#131313]">
        Showing {showingStart}-{showingEnd} of {totalCount} results
      </p>
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <div className="relative min-w-[120px] sm:min-w-[140px]">
          <select
            value={sortValue}
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full h-10 pl-4 pr-10 appearance-none cursor-pointer bg-white border border-[#e5e7eb] rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#1e3a8a] py-2 px-3"
          >
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
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
        <div className="relative min-w-[120px] sm:min-w-[140px]">
          <select
            value={popularValue}
            onChange={(e) => onPopularChange(e.target.value)}
            className="w-full h-10 pl-4 pr-10 appearance-none cursor-pointer bg-white border border-[#e5e7eb] rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#1e3a8a] py-2 px-3"
          >
            <option value="popular">Popular</option>
            <option value="newest">Newest</option>
            <option value="rating">Rating</option>
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
  );
}
