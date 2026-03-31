"use client";

export default function ReviewFilters() {
  return (
    <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div className="relative w-full lg:w-[30%]">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3-3" />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search Customer Review..."
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-[#131313] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400"
        />
      </div>
      <div className="flex flex-wrap gap-6 lg:flex-nowrap lg:gap-4">
        <div className="flex flex-col items-start gap-1.5">
          <label htmlFor="sort-by" className="text-sm text-[#131313]">
            Sort by
          </label>
          <div className="relative">
            <select
              id="sort-by"
              className="pl-4 pr-9 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400 appearance-none cursor-pointer min-w-[160px]"
              defaultValue="top"
            >
              <option value="top">Top Reviews</option>
              <option value="recent">Most Recent</option>
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none ">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </div>
        </div>
        <div className="flex flex-col items-start gap-1.5">
          <label htmlFor="filter-by" className="text-sm  text-[#131313]">
            Filter by
          </label>
          <div className="relative">
            <select
              id="filter-by"
              className="pl-4 pr-9 py-2.5 rounded-lg border border-gray-200 bg-white text-sm  focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400 appearance-none cursor-pointer min-w-[140px]"
              defaultValue="all"
            >
              <option value="all">All Reviews</option>
              <option value="with-photos">With Photos</option>
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none ">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </div>
        </div>
        <div className="flex flex-col items-start gap-1.5">
          <label htmlFor="star" className="text-sm  text-[#131313]">
            Star
          </label>
          <div className="relative">
            <select
              id="star"
              className="pl-4 pr-9 py-2.5 rounded-lg border border-gray-200 bg-white text-sm  focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400 appearance-none cursor-pointer min-w-[120px]"
              defaultValue="5"
            >
              <option value="5">5 - Star</option>
              <option value="4">4 - Star</option>
              <option value="3">3 - Star</option>
              <option value="2">2 - Star</option>
              <option value="1">1 - Star</option>
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none ">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
