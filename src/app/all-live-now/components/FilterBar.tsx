'use client';

export type TabType = 'live-now' | 'upcoming-live';

type FilterBarProps = {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  showingStart: number;
  showingEnd: number;
  totalCount: number;
  sortValue: string;
  categoryValue: string;
  onSortChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
};

export default function FilterBar({
  activeTab,
  onTabChange,
  showingStart,
  showingEnd,
  totalCount,
  sortValue,
  categoryValue,
  onSortChange,
  onCategoryChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-col gap-4 mb-4 sm:mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
        <div>
          <h2 className="text-[16px] sm:text-[18px] font-semibold text-[#131313]">Live now</h2>
          <p className="text-[13px] sm:text-[14px] text-[#767676] mt-0.5">
            Showcasing active live streams in real time
          </p>
        <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => onTabChange('live-now')}
            className={`min-h-[40px] px-4 sm:px-5 rounded-lg text-[14px] font-medium transition ${activeTab === 'live-now'
              ? 'bg-[var(--color-main-blue)]  text-white'
              : 'bg-white border border-[#e5e7eb] text-[#131313] hover:bg-gray-50'
            }`}
          >
            Live now
          </button>
          <button
            type="button"
            onClick={() => onTabChange('upcoming-live')}
            className={`min-h-[40px] px-4 sm:px-5 rounded-lg text-[14px] font-medium transition ${activeTab === 'upcoming-live'
              ? 'bg-[var(--color-main-blue)] text-white'
              : 'bg-white border border-[#e5e7eb] text-[#131313] hover:bg-gray-50'
            }`}
          >
            Upcoming Live
          </button>
        </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
        <p className="text-[13px] sm:text-[14px] text-[#767676] shrink-0">
          Showing {showingStart}-{showingEnd} of {totalCount} results
        </p>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative min-w-[120px] sm:min-w-[140px]">
            <select
              value={sortValue}
              onChange={(e) => onSortChange(e.target.value)}
              className="w-full h-10 pl-4 pr-10 appearance-none cursor-pointer bg-white border border-[#e5e7eb] rounded-lg text-[14px] text-[#131313] focus:outline-none focus:ring-1 focus:ring-[#1e3a8a]"
            >
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#131313]">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
          <div className="relative min-w-[120px] sm:min-w-[140px]">
            <select
              value={categoryValue}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="w-full h-10 pl-4 pr-10 appearance-none cursor-pointer bg-white border border-[#e5e7eb] rounded-lg text-[14px] text-[#131313] focus:outline-none focus:ring-1 focus:ring-[#1e3a8a]"
            >
              <option value="fashion">Fashion</option>
              <option value="electronics">Electronics</option>
              <option value="home">Home</option>
            </select>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#131313]">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
