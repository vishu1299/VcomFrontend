'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import HeroBanner from '../top-products/components/HeroBanner';
import FilterSidebar, { type DealFilterState, initialDealFilters } from './components/FilterSidebar';
import JustDroppedHeroCarousel from './components/JustDroppedHeroCarousel';
import JustDroppedSortBar from './components/JustDroppedSortBar';
import JustDroppedDealsSection from './components/JustDroppedDealsSection';
import TopdealsProductCard from '../top-deals/components/TopdealsProductCard';
import TopdealsPagination from '../top-deals/components/TopdealsPagination';
import { ALL_DEAL_PRODUCTS, PAGE_SIZE, type DealProduct } from './data/dealProducts';
import { JUST_DROPPED_HOME_SECTION_CATEGORIES } from './data/categories';
import FashionCategoryCarousel from './components/FashionCategoryCarousel';
import { FASHION_VIEW_CATEGORIES } from './data/fashionView';
import {
  filterAndSort,
  groupByCategory,
  dealProductToCard,
} from './lib/filterJustDroppedProducts';
import { justDroppedCardToExclusive } from './lib/mapJustDroppedToExclusive';
import type { JustDroppedCardProduct } from './types';
import {
  MENS_SUBCATEGORIES,
  MENS_SHIRT_PRODUCTS,
  MENS_TSHIRT_PRODUCTS,
  MENS_SHIRT_GRID_PRODUCTS,
  SHIRT_GRID_PAGE_SIZE,
  SHIRT_GRID_TOTAL_PAGES,
} from './data/mensView';

export default function JustDroppedPage() {
  const [filters, setFilters] = useState<DealFilterState>(initialDealFilters);
  const [sortValue, setSortValue] = useState('low-to-high');
  const [popularValue, setPopularValue] = useState('popular');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);

  const filtered = useMemo(
    () => filterAndSort(ALL_DEAL_PRODUCTS, filters, sortValue),
    [filters, sortValue]
  );
  const totalCount = filtered.length;
  const showingStart = totalCount === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1;
  const showingEnd = Math.min(currentPage * PAGE_SIZE, totalCount);
  const clearAll = () => {
    setFilters(initialDealFilters);
    setCurrentPage(1);
  };
  const byCategoryFull = useMemo(() => groupByCategory(filtered), [filtered]);
  const byCategory = useMemo(() => {
    const map = new Map<string, JustDroppedCardProduct[]>();
    JUST_DROPPED_HOME_SECTION_CATEGORIES.forEach((cat) => {
      const list = byCategoryFull.get(cat) ?? [];
      const start = (currentPage - 1) * PAGE_SIZE;
      map.set(cat, list.slice(start, start + PAGE_SIZE));
    });
    return map;
  }, [byCategoryFull, currentPage]);
  const totalPages = useMemo(() => {
    let maxPages = 1;
    JUST_DROPPED_HOME_SECTION_CATEGORIES.forEach((cat) => {
      const list = byCategoryFull.get(cat) ?? [];
      maxPages = Math.max(maxPages, Math.ceil(list.length / PAGE_SIZE));
    });
    return maxPages;
  }, [byCategoryFull]);

  const visibleHomeCategories = useMemo(
    () =>
      JUST_DROPPED_HOME_SECTION_CATEGORIES.filter(
        (cat) => (byCategory.get(cat) ?? []).length > 0
      ),
    [byCategory]
  );

  const isFashionOnly =
    filters.categories.length === 1 && filters.categories[0] === 'Fashion & Apparel';

  const isMensView =
    isFashionOnly && filters.selectedSubcategories.includes('mens-wear');

  const isShirtGridView =
    isMensView && filters.selectedMensSubcategories.includes('shirts');

  const shirtGridPaginated = useMemo(() => {
    if (!isShirtGridView) return [];
    const start = (currentPage - 1) * SHIRT_GRID_PAGE_SIZE;
    return MENS_SHIRT_GRID_PRODUCTS.slice(start, start + SHIRT_GRID_PAGE_SIZE);
  }, [isShirtGridView, currentPage]);

  const fashionBySubcategory = useMemo(() => {
    if (!isFashionOnly) return new Map<string, JustDroppedCardProduct[]>();
    const fashionProducts = (filtered as DealProduct[]).filter(
      (p) => p.category === 'Fashion & Apparel' && p.subcategory
    );
    const map = new Map<string, JustDroppedCardProduct[]>();
    for (const p of fashionProducts) {
      const list = map.get(p.subcategory!) ?? [];
      list.push(dealProductToCard(p));
      map.set(p.subcategory!, list);
    }
    return map;
  }, [filtered, isFashionOnly]);

  const fashionTotalPages = useMemo(() => {
    if (!isFashionOnly) return 1;
    let maxPages = 1;
    FASHION_VIEW_CATEGORIES.forEach(({ id }) => {
      const list = fashionBySubcategory.get(id) ?? [];
      maxPages = Math.max(maxPages, Math.ceil(list.length / PAGE_SIZE));
    });
    return maxPages;
  }, [isFashionOnly, fashionBySubcategory]);

  const fashionPaginated = useMemo(() => {
    if (!isFashionOnly) return new Map<string, JustDroppedCardProduct[]>();
    const map = new Map<string, JustDroppedCardProduct[]>();
    const start = (currentPage - 1) * PAGE_SIZE;
    FASHION_VIEW_CATEGORIES.forEach(({ id }) => {
      const list = fashionBySubcategory.get(id) ?? [];
      map.set(id, list.slice(start, start + PAGE_SIZE));
    });
    return map;
  }, [isFashionOnly, fashionBySubcategory, currentPage]);

  return (
    <main className="page-text-black min-h-screen bg-[#f3f7fa]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-5 sm:py-6 lg:py-8">
      

        <HeroBanner />
        <JustDroppedHeroCarousel
          title="Just Dropped"
          titleClassName="text-[#131313]"
          subtitle="Fresh arrivals added this week - be the first to explore the newest products"
        />

        <JustDroppedSortBar
          showingStart={showingStart}
          showingEnd={showingEnd}
          totalCount={totalCount}
          sortValue={sortValue}
          onSortChange={setSortValue}
          popularValue={popularValue}
          onPopularChange={setPopularValue}
          onOpenFilters={() => setFilterDrawerOpen(true)}
        />

        {/* items-start: sidebar stays natural height when main column is taller (same as product-list) */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-6 xl:gap-8">
          <FilterSidebar
            filters={filters}
            onFiltersChange={setFilters}
            onClearAll={clearAll}
            isOpen={filterDrawerOpen}
            onClose={() => setFilterDrawerOpen(false)}
          />

          <div className="flex min-w-0 flex-1 flex-col">
            {isShirtGridView ? (
              <>
                <div className="mb-6 rounded-2xl border border-[#e5e7eb] bg-white p-4 sm:p-6">
                  <h2 className="mb-5 text-xl font-bold text-[#131313] sm:mb-6 sm:text-2xl">
                    Latest in Shirt
                  </h2>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-4 lg:gap-5">
                    {shirtGridPaginated.map((product) => (
                      <TopdealsProductCard
                        key={product.id}
                        {...justDroppedCardToExclusive(product)}
                        variant="grid"
                      />
                    ))}
                  </div>
                </div>
                <TopdealsPagination
                  currentPage={currentPage}
                  totalPages={SHIRT_GRID_TOTAL_PAGES}
                  onPageChange={setCurrentPage}
                />
              </>
            ) : isMensView ? (
              <>
                <div className="mb-6 rounded-2xl">
                  <FashionCategoryCarousel
                    title="Latest in Fashion & Apparel"
                    subtitle="Men's Clothing"
                    categories={MENS_SUBCATEGORIES}
                  />
                  <JustDroppedDealsSection title="Latest in Shirts" products={MENS_SHIRT_PRODUCTS} />
                  <JustDroppedDealsSection title="Latest in T-Shirts" products={MENS_TSHIRT_PRODUCTS} />
                </div>
                <TopdealsPagination
                  currentPage={currentPage}
                  totalPages={45}
                  onPageChange={setCurrentPage}
                />
              </>
            ) : isFashionOnly ? (
              <>
                <div className="mb-6">
                  <FashionCategoryCarousel categories={FASHION_VIEW_CATEGORIES} />
                  {FASHION_VIEW_CATEGORIES.map(({ id, label }) => (
                    <JustDroppedDealsSection
                      key={id}
                      title={`Latest in ${label}`}
                      products={fashionPaginated.get(id) ?? []}
                    />
                  ))}
                </div>
                <TopdealsPagination
                  currentPage={currentPage}
                  totalPages={fashionTotalPages}
                  onPageChange={setCurrentPage}
                />
              </>
            ) : (
              <>
                {visibleHomeCategories.map((cat) => (
                  <JustDroppedDealsSection
                    key={cat}
                    title={`Top Deals In ${cat}`}
                    products={byCategory.get(cat) ?? []}
                  />
                ))}
                <TopdealsPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
