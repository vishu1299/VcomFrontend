'use client';

import { useState } from 'react';
import ExclusiveHeroBanner from './components/ExclusiveHeroBanner';
import ExclusiveHorizontalScroll from './components/ExclusiveHorizontalScroll';
import ExclusiveFilterSortBar from './components/ExclusiveFilterSortBar';
import ExclusiveFilterSidebar from './components/ExclusiveFilterSidebar';
import ExclusiveProductSection from './components/ExclusiveProductSection';
import ExclusivePagination from './components/ExclusivePagination';
import {
  initialExclusiveFilters,
  type ExclusiveFilterState,
} from './data/filters';
import {
  LATEST_EXCLUSIVE_PRODUCTS,
  MOST_SOLD_PRODUCTS,
  SPONSORED_EXCLUSIVE_PRODUCTS,
  EXCLUSIVE_PAGE_SIZE,
  EXCLUSIVE_TOTAL_RESULTS,
} from './data/products';

export default function ExclusivePage() {
  const [filters, setFilters] = useState<ExclusiveFilterState>(initialExclusiveFilters);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);

  const totalResults = EXCLUSIVE_TOTAL_RESULTS;
  const totalPages = Math.ceil(totalResults / EXCLUSIVE_PAGE_SIZE);
  const start = (currentPage - 1) * EXCLUSIVE_PAGE_SIZE + 1;
  const end = Math.min(currentPage * EXCLUSIVE_PAGE_SIZE, totalResults);

  const clearAllFilters = () => {
    setFilters(initialExclusiveFilters);
    setCurrentPage(1);
  };

  return (
    <main className="min-h-screen bg-[#f3f7fa]" style={{ fontFamily: 'var(--font-poppins)' }}>
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-5 sm:py-6 lg:py-8">
        <ExclusiveHeroBanner />
        <ExclusiveHorizontalScroll />

        {/* Sort / results bar — own white card, gap below shows page bg */}
        <div className="mb-4 lg:mb-5 rounded-xl border border-[#e5e7eb] bg-white p-4 sm:p-5 shadow-sm">
          <ExclusiveFilterSortBar
            start={start}
            end={end}
            totalResults={totalResults}
            onOpenFilters={() => setFilterDrawerOpen(true)}
          />
        </div>

        {/* Filters (left) and product blocks (right) — separate whites; gap = #f3f7fa */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 xl:gap-6 items-start">
          <ExclusiveFilterSidebar
            filters={filters}
            onFiltersChange={setFilters}
            onClearAll={clearAllFilters}
            isOpen={filterDrawerOpen}
            onClose={() => setFilterDrawerOpen(false)}
          />

          <div className="flex-1 min-w-0 w-full flex flex-col gap-4 lg:gap-5 xl:gap-6">
            <ExclusiveProductSection
              title="Latest exclusive products"
              products={LATEST_EXCLUSIVE_PRODUCTS}
              layout="carousel"
            />
            <ExclusiveProductSection
              title="Most sold"
              products={MOST_SOLD_PRODUCTS}
              layout="carousel"
            />
            <ExclusiveProductSection
              title="Sponsored Exclusive"
              products={SPONSORED_EXCLUSIVE_PRODUCTS}
              layout="carousel"
              badgePointed
            />
            <ExclusivePagination
              embedded
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
