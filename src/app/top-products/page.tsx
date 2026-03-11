'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import HeroBanner from './components/HeroBanner';
import TopProductsSection from './components/TopProductsSection';
import SortBar, { type SortOption, type PriceOption } from './components/SortBar';
import FilterSidebar, { initialFilters, type FilterState } from './components/FilterSidebar';
import ProductGrid from './components/ProductGrid';
import Pagination from './components/Pagination';
import type { ProductCardProps } from './components/ProductCard';
import {
  ALL_PRODUCTS_PAGINATED,
  TOTAL_PRODUCTS,
  PAGE_SIZE,
} from './data/products';

function filterAndSortProducts(
  products: ProductCardProps[],
  filters: FilterState,
  _sortBy: SortOption,
  priceSort: PriceOption
): ProductCardProps[] {
  let result = [...products];

  if (filters.priceMin > 0 || filters.priceMax < 100000) {
    result = result.filter(
      (p) => p.price >= filters.priceMin && p.price <= filters.priceMax
    );
  }

  const isPriceHighToLow =
    priceSort === 'price-high-to-low' || priceSort === 'popular';
  if (isPriceHighToLow) {
    result.sort((a, b) => b.price - a.price);
  } else {
    result.sort((a, b) => a.price - b.price);
  }

  return result;
}

export default function TopProductsPage() {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [sortBy, setSortBy] = useState<SortOption>('top-10-most-viewed-products');
  const [priceSort, setPriceSort] = useState<PriceOption>('price-low-to-high');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);

  const filteredProducts = useMemo(
    () =>
      filterAndSortProducts(
        ALL_PRODUCTS_PAGINATED,
        filters,
        sortBy,
        priceSort
      ),
    [filters, sortBy, priceSort]
  );

  const totalCount = filteredProducts.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredProducts.slice(start, start + PAGE_SIZE);
  }, [filteredProducts, currentPage]);

  const showingStart = totalCount === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1;
  const showingEnd = Math.min(currentPage * PAGE_SIZE, totalCount);

  const clearAllFilters = () => {
    setFilters(initialFilters);
    setCurrentPage(1);
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-4 sm:py-6">
        <nav className="flex items-center gap-4 mb-4 sm:mb-6 text-design-14 sm:text-design-16 text-[var(--color-black)]">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="text-[var(--color-muted-alt-2)]">/</span>
          <span className="font-medium text-[var(--color-black)]">
            Top Products
          </span>
        </nav>

        <HeroBanner />
        <TopProductsSection />

        <SortBar
          showingStart={showingStart}
          showingEnd={showingEnd}
          totalCount={totalCount}
          sortBy={sortBy}
          priceSort={priceSort}
          onSortByChange={setSortBy}
          onPriceSortChange={setPriceSort}
        />

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 xl:gap-8">
          <FilterSidebar
            filters={filters}
            onFiltersChange={setFilters}
            onClearAll={clearAllFilters}
            isOpen={filterDrawerOpen}
            onClose={() => setFilterDrawerOpen(false)}
          />

          <div className="flex-1 min-w-0 flex flex-col">
            <div className="lg:hidden mb-4 flex justify-end">
              <button
                type="button"
                onClick={() => setFilterDrawerOpen(true)}
                className="min-h-[44px] px-4 rounded-xl border border-[var(--color-border)] bg-white text-design-14 font-medium flex items-center gap-2"
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

            <ProductGrid products={paginatedProducts} />
            <Pagination
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
