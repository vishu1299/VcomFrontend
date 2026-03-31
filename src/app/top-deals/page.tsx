'use client';

import { useState, useEffect } from 'react';
import ExclusiveHeroBanner from './components/TopdealsHeroBanner';
import ExclusiveHorizontalScroll from './components/TopdealsHorizontalScroll';
import ExclusiveFilterSortBar from './components/TopdealsFilterSortBar';
import ExclusiveProductSection from './components/TopdealsProductSection';
import ExclusivePagination from './components/TopdealsPagination';
import TopdealsCategoryView from './components/TopdealsCategoryView';
import TopdealsEndingSoonView from './components/TopdealsEndingSoonView';
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
import FilterSidebar from './components/TopdealsFilterSidebar';

export default function ExclusivePage() {
  const [filters, setFilters] = useState<ExclusiveFilterState>(initialExclusiveFilters);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  /** When exactly one category is selected: subcategory product drill-down */
  const [activeSubcategoryId, setActiveSubcategoryId] = useState<string | null>(null);

  const singleCategoryId =
    filters.categories.length === 1 ? filters.categories[0] : null;
  const showCategoryPage = Boolean(singleCategoryId);
  /** Time left → “Ending Soon” replaces main product blocks */
  const showEndingSoonLayout = filters.timeLeft.includes('ending-soon');

  useEffect(() => {
    setActiveSubcategoryId(null);
  }, [filters.categories]);

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

        <div className="mb-4 lg:mb-6">
          <ExclusiveFilterSortBar
            start={start}
            end={end}
            totalResults={totalResults}
            onOpenFilters={() => setFilterDrawerOpen(true)}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-10">
        <FilterSidebar
            filters={filters}
            onFiltersChange={setFilters}
            onClearAll={clearAllFilters}
            isOpen={filterDrawerOpen}
            onClose={() => setFilterDrawerOpen(false)}
          />
          <div className="flex-1 min-w-0">
            {showEndingSoonLayout ? (
              <TopdealsEndingSoonView />
            ) : showCategoryPage && singleCategoryId ? (
              <TopdealsCategoryView
                categoryId={singleCategoryId}
                activeSubcategoryId={activeSubcategoryId}
                onSelectSubcategory={setActiveSubcategoryId}
              />
            ) : (
              <>
                <ExclusiveProductSection
                  title="Top Deals in Fashion & Apparel"
                  products={LATEST_EXCLUSIVE_PRODUCTS}
                  layout="carousel"
                />
                <ExclusiveProductSection
                  title="Top Deals in Beauty & Personal Care"
                  products={MOST_SOLD_PRODUCTS}
                  layout="carousel"
                />
                <ExclusiveProductSection
                  title="Top Deals  in Home & Living"
                  products={SPONSORED_EXCLUSIVE_PRODUCTS}
                  layout="carousel"
                  badgePointed
                />
              </>
            )}
            <ExclusivePagination
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
