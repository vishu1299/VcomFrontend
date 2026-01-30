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
  sortDesign: string;
  sortFashion: string;
  onSortPriceChange: (value: string) => void;
  onSortDesignChange: (value: string) => void;
  onSortFashionChange: (value: string) => void;
};

export default function LiveNowFilters({
  activeTab,
  onTabChange,
  showingStart,
  showingEnd,
  totalCount,
  sortPrice,
  sortDesign,
  sortFashion,
  onSortPriceChange,
  onSortDesignChange,
  onSortFashionChange,
}: LiveNowFiltersProps) {
  return (
    <div className="mb-6 sm:mb-8">
      <h2 className="text-design-18 sm:text-design-20 font-bold text-[var(--color-black)] mb-4">
        Live now
      </h2>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => onTabChange('live-now')}
            className={`min-h-[44px] px-4 sm:px-5 rounded-lg text-design-14 sm:text-design-16 font-medium transition ${
              activeTab === 'live-now'
                ? 'bg-[var(--color-main-blue)] text-white'
                : 'bg-[var(--color-border)] text-[var(--color-black)] hover:bg-[var(--color-muted-alt-2)]/20'
            }`}
          >
            Live now
          </button>
          <button
            type="button"
            onClick={() => onTabChange('upcoming')}
            className={`min-h-[44px] px-4 sm:px-5 rounded-lg text-design-14 sm:text-design-16 font-medium transition ${
              activeTab === 'upcoming'
                ? 'bg-[var(--color-main-blue)] text-white'
                : 'bg-[var(--color-border)] text-[var(--color-black)] hover:bg-[var(--color-muted-alt-2)]/20'
            }`}
          >
            Upcoming Live
          </button>
        </div>

        <p className="text-design-12 sm:text-design-14 text-[var(--color-muted-alt-2)]">
          Showing {showingStart}-{showingEnd} of {totalCount} products
        </p>
      </div>

      <div className="flex flex-wrap gap-3 sm:gap-4 items-center">
        <div className="relative min-w-[140px] sm:min-w-[160px]">
          <select
            value={sortPrice}
            onChange={(e) => onSortPriceChange(e.target.value)}
            className="input-design min-h-[40px] py-2 px-4 pr-10 text-design-14 w-full appearance-none cursor-pointer bg-white"
          >
            <option value="low-to-high">Low to high</option>
            <option value="high-to-low">High to low</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-muted-alt)] pointer-events-none" />
        </div>
        <div className="relative min-w-[120px] sm:min-w-[140px]">
          <select
            value={sortDesign}
            onChange={(e) => onSortDesignChange(e.target.value)}
            className="input-design min-h-[40px] py-2 px-4 pr-10 text-design-14 w-full appearance-none cursor-pointer bg-white"
          >
            <option value="design">Design</option>
            <option value="all">All</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-muted-alt)] pointer-events-none" />
        </div>
        <div className="relative min-w-[120px] sm:min-w-[140px]">
          <select
            value={sortFashion}
            onChange={(e) => onSortFashionChange(e.target.value)}
            className="input-design min-h-[40px] py-2 px-4 pr-10 text-design-14 w-full appearance-none cursor-pointer bg-white"
          >
            <option value="fashion">Fashion</option>
            <option value="all">All</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-muted-alt)] pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
