'use client';

import { ChevronDown } from 'lucide-react';

export type TabType = 'live-now' | 'upcoming';

type LiveNowFiltersProps = {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  showingStart: number;
  showingEnd: number;
  totalCount: number;
  sortPrice: string;
  sortFashion: string;
  onSortPriceChange: (value: string) => void;
  onSortFashionChange: (value: string) => void;
};

export default function LiveNowFilters({
  activeTab,
  onTabChange,
  showingStart,
  showingEnd,
  totalCount,
  sortPrice,
  sortFashion,
  onSortPriceChange,
  onSortFashionChange,
}: LiveNowFiltersProps) {
  return (
    <section className="mb-4 sm:mb-5" aria-label="Live now filters">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onTabChange('live-now')}
          className={`h-9 rounded-lg px-5 text-[16px] font-medium transition ${
            activeTab === 'live-now'
              ? 'bg-[#2447A6] text-white'
              : 'bg-[#e5e7eb] text-[#131313] hover:bg-[#d1d5db]'
          }`}
        >
          Live now
        </button>
        <button
          type="button"
          onClick={() => onTabChange('upcoming')}
          className={`h-9 rounded-lg px-5 text-[16px] font-medium transition ${
            activeTab === 'upcoming'
              ? 'bg-[#2447A6] text-white'
              : 'bg-[#e5e7eb] text-[#131313] hover:bg-[#d1d5db]'
          }`}
        >
          Upcoming Live
        </button>
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[16px] text-[#6b7280]">
          Showing {showingStart}-{showingEnd} of {totalCount} results
        </p>

        <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto sm:justify-end">
          <span className="text-[16px] text-[#131313]">Price</span>
          <div className="relative min-w-[150px] flex-1 sm:flex-initial">
            <select
              value={sortPrice}
              onChange={(e) => onSortPriceChange(e.target.value)}
              className="h-9 w-full appearance-none rounded-lg border border-[#e5e7eb] bg-white px-3 pr-8 text-[16px] font-medium text-[#131313]"
            >
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4b5563]" />
          </div>

          <span className="ml-2 text-[16px] text-[#131313]">Category</span>
          <div className="relative min-w-[140px] flex-1 sm:flex-initial">
            <select
              value={sortFashion}
              onChange={(e) => onSortFashionChange(e.target.value)}
              className="h-9 w-full appearance-none rounded-lg border border-[#e5e7eb] bg-white px-3 pr-8 text-[16px] font-medium text-[#131313]"
            >
              <option value="fashion">Fashion</option>
              <option value="all">All</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4b5563]" />
          </div>
        </div>
      </div>
    </section>
  );
}
