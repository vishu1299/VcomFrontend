'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

import TopDealsCarousel from './components/TopDealsCarousel';
import SortBar from './components/SortBar';
import FilterSidebar, { initialDealFilters, type DealFilterState } from './components/FilterSidebar';
import DealsSection from './components/DealsSection';
import CategoryGridSection from './components/CategoryGridSection';
import TopDealsGridSection, { GRID_PAGE_SIZE } from './components/TopDealsGridSection';
import ElectronicsDealsView from './components/ElectronicsDealsView';
import Pagination from './components/Pagination';
import type { DealCardProps } from './components/DealCard';
import { ALL_DEAL_PRODUCTS, PAGE_SIZE } from './data/products';
import { MAIN_CATEGORIES, getSubcategoriesForMain, SUBCATEGORIES_BY_MAIN } from './data/categories';
import HeroBanner from '../top-products/components/HeroBanner';

export function filterAndSort(
  products: typeof ALL_DEAL_PRODUCTS,
  filters: DealFilterState,
  sortValue: string
): typeof ALL_DEAL_PRODUCTS {
  let result = [...products];
  if (filters.priceMin > 0 || filters.priceMax < 25000) {
    result = result.filter((p) => p.price >= filters.priceMin && p.price <= filters.priceMax);
  }
  if (sortValue === 'high-to-low') {
    result.sort((a, b) => b.price - a.price);
  } else {
    result.sort((a, b) => a.price - b.price);
  }
  return result;
}

export function groupByCategory(products: typeof ALL_DEAL_PRODUCTS): Map<string, DealCardProps[]> {
  const map = new Map<string, DealCardProps[]>();
  for (const p of products) {
    const list = map.get(p.category) ?? [];
    list.push({
      id: p.id,
      name: p.name,
      price: p.price,
      originalPrice: p.originalPrice,
      image: p.image,
      badges: p.badges,
      hasVideo: p.hasVideo,
      sponsored: p.sponsored,
    });
    map.set(p.category, list);
  }
  return map;
}

function toCardProps(p: (typeof ALL_DEAL_PRODUCTS)[number]): DealCardProps {
  return {
    id: p.id,
    name: p.name,
    price: p.price,
    originalPrice: p.originalPrice,
    image: p.image,
    badges: p.badges,
    hasVideo: p.hasVideo,
    sponsored: p.sponsored,
  };
}

export default function TopDealsPage() {
  const [filters, setFilters] = useState<DealFilterState>(initialDealFilters);
  const [sortValue, setSortValue] = useState('low-to-high');
  const [popularValue, setPopularValue] = useState('popular');
  const [currentPage, setCurrentPage] = useState(1);
  const [subcategoryPage, setSubcategoryPage] = useState(1);
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);

  const filtered = useMemo(
    () => filterAndSort(ALL_DEAL_PRODUCTS, filters, sortValue),
    [filters, sortValue]
  );

  const singleMainCategory = useMemo(() => {
    const selected = MAIN_CATEGORIES.filter((c) => filters.categories.includes(c));
    return selected.length === 1 ? selected[0] : null;
  }, [filters.categories]);

  const isSubcategoryView = Boolean(
    singleMainCategory && filters.selectedSubcategories.length > 0
  );

  const subcategoryLabel = useMemo(() => {
    if (!singleMainCategory || filters.selectedSubcategories.length === 0) return null;
    const subs = SUBCATEGORIES_BY_MAIN[singleMainCategory] ?? [];
    const labels = filters.selectedSubcategories
      .map((id) => subs.find((s) => s.id === id)?.label)
      .filter(Boolean) as string[];
    return labels.length === 1 ? labels[0] : labels.length > 1 ? 'Selected' : null;
  }, [singleMainCategory, filters.selectedSubcategories]);

  const filteredByCategory = useMemo(() => {
    if (!singleMainCategory) return filtered;
    return filtered.filter((p) => p.category === singleMainCategory);
  }, [filtered, singleMainCategory]);

  const subcategoryProducts = useMemo(() => {
    if (filters.selectedSubcategories.length === 0) return [];
    return filteredByCategory.filter((p) =>
      p.subcategory && filters.selectedSubcategories.includes(p.subcategory)
    );
  }, [filteredByCategory, filters.selectedSubcategories]);

  const subcategoryTotalPages = Math.max(
    1,
    Math.ceil(subcategoryProducts.length / GRID_PAGE_SIZE)
  );
  const subcategoryPaginated = useMemo(() => {
    const start = (subcategoryPage - 1) * GRID_PAGE_SIZE;
    return subcategoryProducts.slice(start, start + GRID_PAGE_SIZE).map(toCardProps);
  }, [subcategoryProducts, subcategoryPage]);

  const totalCount = filtered.length;
  const byCategoryFull = useMemo(() => groupByCategory(filtered), [filtered]);
  const totalPages = useMemo(() => {
    let maxPages = 1;
    MAIN_CATEGORIES.forEach((cat) => {
      const list = byCategoryFull.get(cat) ?? [];
      maxPages = Math.max(maxPages, Math.ceil(list.length / PAGE_SIZE));
    });
    return maxPages;
  }, [byCategoryFull]);

  const byCategory = useMemo(() => {
    const map = new Map<string, DealCardProps[]>();
    MAIN_CATEGORIES.forEach((cat) => {
      const list = byCategoryFull.get(cat) ?? [];
      const start = (currentPage - 1) * PAGE_SIZE;
      map.set(cat, list.slice(start, start + PAGE_SIZE));
    });
    return map;
  }, [byCategoryFull, currentPage]);

  const showingStart = totalCount === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1;
  const showingEnd = Math.min(currentPage * PAGE_SIZE, totalCount);

  const clearAll = () => {
    setFilters(initialDealFilters);
    setCurrentPage(1);
    setSubcategoryPage(1);
  };

  const handleSubcategoryClick = (subcategoryId: string, _label: string) => {
    setFilters((prev) => {
      const next = prev.selectedSubcategories.includes(subcategoryId)
        ? prev.selectedSubcategories.filter((id) => id !== subcategoryId)
        : [...prev.selectedSubcategories, subcategoryId];
      return { ...prev, selectedSubcategories: next };
    });
    setSubcategoryPage(1);
  };

  const showMainCategoryView = singleMainCategory && filters.selectedSubcategories.length === 0;
  const mainCategoryProducts = showMainCategoryView
    ? (byCategory.get(singleMainCategory!) ?? [])
    : [];

  const isElectronicsEndingSoon =
    filters.categories.includes('Electronics & Gadgets') &&
    filters.timeLeft.includes('ending-soon');

  return (
    <main className="min-h-screen bg-[#f3f7fa]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-4 sm:py-6">
        <nav className="flex items-center gap-4 mb-4 sm:mb-6 text-sm sm:text-base text-[#131313]">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="text-[#767676]">/</span>
          <span className="font-medium text-[#131313]">Top Deals</span>
        </nav>

        <HeroBanner />
        <TopDealsCarousel title="Top Deals" textcolor="" subtitle="Unbeatable discounts on top products across every category" />

        <SortBar
          showingStart={showingStart}
          showingEnd={showingEnd}
          totalCount={totalCount}
          sortValue={sortValue}
          onSortChange={setSortValue}
          popularValue={popularValue}
          onPopularChange={setPopularValue}
        />

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 xl:gap-8">
          <FilterSidebar
            filters={filters}
            onFiltersChange={setFilters}
            onClearAll={clearAll}
            isOpen={filterDrawerOpen}
            onClose={() => setFilterDrawerOpen(false)}
          />

          <div className="flex-1 min-w-0 flex flex-col">
            <div className="lg:hidden mb-4 flex justify-end">
              <button
                type="button"
                onClick={() => setFilterDrawerOpen(true)}
                className="min-h-[44px] px-4 rounded-xl border border-[#e5e7eb] bg-white text-sm font-medium flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="4" y1="21" x2="4" y2="14" />
                  <line x1="4" y1="10" x2="4" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12" y2="3" />
                  <line x1="20" y1="21" x2="20" y2="16" />
                  <line x1="20" y1="12" x2="20" y2="3" />
                  <line x1="1" y1="14" x2="7" y2="14" />
                  <line x1="9" y1="8" x2="15" y2="8" />
                  <line x1="17" y1="16" x2="23" y2="16" />
                </svg>
                Filters
              </button>
            </div>

            {isElectronicsEndingSoon ? (
              <ElectronicsDealsView />
            ) : isSubcategoryView && subcategoryLabel ? (
              <TopDealsGridSection
                title={`Top Deals in ${subcategoryLabel}`}
                products={subcategoryPaginated}
                currentPage={subcategoryPage}
                totalPages={subcategoryTotalPages}
                onPageChange={setSubcategoryPage}
              />
            ) : showMainCategoryView && singleMainCategory ? (
              <>
                <CategoryGridSection
                  title={singleMainCategory}
                  subcategories={getSubcategoriesForMain(singleMainCategory)}
                  onSubcategoryClick={handleSubcategoryClick}
                />
                <DealsSection
                  title={`Top Deals in ${singleMainCategory}`}
                  products={mainCategoryProducts}
                />
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </>
            ) : (
              <>
                {MAIN_CATEGORIES.map((cat) => (
                  <DealsSection
                    key={cat}
                    title={`Top Deals In ${cat}`}
                    products={byCategory.get(cat) ?? []}
                  />
                ))}
                <Pagination
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
