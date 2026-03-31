'use client';

import { useState, useMemo } from 'react';
import ProductListBanner from './components/ProductListBanner';
import TopProductsCarousel from './components/TopProductsCarousel';
import ProductListSortBar, {
  type SortOption,
  type PopularSortOption,
} from './components/ProductListSortBar';
import FilterSidebar, { initialFilters, type FilterState } from './components/FilterSidebar';
import ProductGrid from './components/ProductGrid';
import ProductListPagination from './components/ProductListPagination';
import QuickViewModal from './components/QuickViewModal';
import { ALL_PRODUCTS, PAGE_SIZE } from './data/products';
import { getProductDetail } from './data/productDetails';
import type { ProductCardProps } from './components/ProductCard';

function filterAndSortProducts(
  products: ProductCardProps[],
  filters: FilterState,
  sortBy: SortOption,
  popularSort: PopularSortOption
): ProductCardProps[] {
  let result = [...products];

  if (filters.priceMin > 0 || filters.priceMax < 20000) {
    result = result.filter(
      (p) => p.price >= filters.priceMin && p.price <= filters.priceMax
    );
  }

  const effectiveSort = popularSort === 'low-to-high' || popularSort === 'high-to-low'
    ? popularSort
    : sortBy === 'low-to-high' || sortBy === 'high-to-low'
      ? sortBy
      : 'low-to-high';

  if (effectiveSort === 'low-to-high') {
    result.sort((a, b) => a.price - b.price);
  } else if (effectiveSort === 'high-to-low') {
    result.sort((a, b) => b.price - a.price);
  } else if (effectiveSort === 'newest' || sortBy === 'newest') {
    result.reverse();
  }

  return result;
}

export default function ProductListPage() {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [sortBy, setSortBy] = useState<SortOption>('most-wishlisted');
  const [popularSort, setPopularSort] = useState<PopularSortOption>('low-to-high');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<ProductCardProps | null>(null);

  const filteredProducts = useMemo(
    () => filterAndSortProducts(ALL_PRODUCTS, filters, sortBy, popularSort),
    [filters, sortBy, popularSort]
  );

  const totalCount = filteredProducts.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredProducts.slice(start, start + PAGE_SIZE);
  }, [filteredProducts, currentPage]);

  const clearAllFilters = () => {
    setFilters(initialFilters);
    setCurrentPage(1);
  };

  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-4 sm:py-6">
        <ProductListBanner />
        <TopProductsCarousel onProductClick={setQuickViewProduct} />

        {/* Sort bar above filter + product list (Figma: full-width top strip) */}
        <ProductListSortBar
          totalCount={totalCount}
          pageSize={PAGE_SIZE}
          currentPage={currentPage}
          sortBy={sortBy}
          popularSort={popularSort}
          onSortByChange={setSortBy}
          onPopularSortChange={setPopularSort}
          onMobileFilterClick={() => setFilterDrawerOpen(true)}
        />

        {/* Two columns: filter (left) | product grid (right). items-start keeps sidebar at content height when grid is taller. */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-6 xl:gap-8">
          <FilterSidebar
            filters={filters}
            onFiltersChange={setFilters}
            onClearAll={clearAllFilters}
            isOpen={filterDrawerOpen}
            onClose={() => setFilterDrawerOpen(false)}
          />

          <div className="flex-1 min-w-0 flex flex-col">
            <ProductGrid
              products={paginatedProducts}
              onProductClick={setQuickViewProduct}
            />
            <ProductListPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>

      {quickViewProduct && (
        <QuickViewModal
          product={getProductDetail(quickViewProduct)}
          onClose={() => setQuickViewProduct(null)}
          onGoToProduct={() => setQuickViewProduct(null)}
        />
      )}
    </main>
  );
}

