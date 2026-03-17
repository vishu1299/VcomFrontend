"use client";
import Link from "next/link";
import HeroBanner from "../top-products/components/HeroBanner";
import TopDealsCarousel from "../top-deals/components/TopDealsCarousel";
import SortBar from "../top-deals/components/SortBar";
import FilterSidebar, { DealFilterState, initialDealFilters } from "./components/FilterSidebar";
import { useMemo, useState } from "react";
import { ALL_DEAL_PRODUCTS, PAGE_SIZE, type DealProduct } from "../top-deals/data/products";
import { MAIN_CATEGORIES } from "../top-deals/data/categories";
import DealsSection from "../top-deals/components/DealsSection";
import Pagination from "../top-deals/components/Pagination";
import { DealCardProps } from "../top-deals/components/DealCard";
import { filterAndSort, groupByCategory } from "../top-deals/page";
import FashionCategoryCarousel from "./components/FashionCategoryCarousel";
import { FASHION_VIEW_CATEGORIES } from "./data/fashionView";
import DealCard from "../top-deals/components/DealCard";
import {
    MENS_SUBCATEGORIES,
    MENS_SHIRT_PRODUCTS,
    MENS_TSHIRT_PRODUCTS,
    MENS_SHIRT_GRID_PRODUCTS,
    SHIRT_GRID_PAGE_SIZE,
    SHIRT_GRID_TOTAL_PAGES,
} from "./data/mensView";

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
        const map = new Map<string, DealCardProps[]>();
        MAIN_CATEGORIES.forEach((cat) => {
            const list = byCategoryFull.get(cat) ?? [];
            const start = (currentPage - 1) * PAGE_SIZE;
            map.set(cat, list.slice(start, start + PAGE_SIZE));
        });
        return map;
    }, [byCategoryFull, currentPage]);
    const totalPages = useMemo(() => {
        let maxPages = 1;
        MAIN_CATEGORIES.forEach((cat) => {
            const list = byCategoryFull.get(cat) ?? [];
            maxPages = Math.max(maxPages, Math.ceil(list.length / PAGE_SIZE));
        });
        return maxPages;
    }, [byCategoryFull]);

    const isFashionOnly =
        filters.categories.length === 1 && filters.categories[0] === "Fashion & Apparel";

    const isMensView =
        isFashionOnly && filters.selectedSubcategories.includes("mens-wear");

    const isShirtGridView =
        isMensView && filters.selectedMensSubcategories.includes("shirts");

    const shirtGridPaginated = useMemo(() => {
        if (!isShirtGridView) return [];
        const start = (currentPage - 1) * SHIRT_GRID_PAGE_SIZE;
        return MENS_SHIRT_GRID_PRODUCTS.slice(start, start + SHIRT_GRID_PAGE_SIZE);
    }, [isShirtGridView, currentPage]);

    const fashionBySubcategory = useMemo(() => {
        if (!isFashionOnly) return new Map<string, DealCardProps[]>();
        const fashionProducts = (filtered as DealProduct[]).filter(
            (p) => p.category === "Fashion & Apparel" && p.subcategory
        );
        const map = new Map<string, DealCardProps[]>();
        for (const p of fashionProducts) {
            const list = map.get(p.subcategory!) ?? [];
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
        if (!isFashionOnly) return new Map<string, DealCardProps[]>();
        const map = new Map<string, DealCardProps[]>();
        const start = (currentPage - 1) * PAGE_SIZE;
        FASHION_VIEW_CATEGORIES.forEach(({ id }) => {
            const list = fashionBySubcategory.get(id) ?? [];
            map.set(id, list.slice(start, start + PAGE_SIZE));
        });
        return map;
    }, [isFashionOnly, fashionBySubcategory, currentPage]);

  return (
      <main className="min-h-screen bg-[#f3f7fa]">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-4 sm:py-6">
              <nav className="flex items-center gap-4 mb-4 sm:mb-6 text-sm sm:text-base text-[#131313]">
                  <Link href="/" className="hover:underline">
                      Home
                  </Link>
                  <span className="text-[#767676]">/</span>
                  <span className="font-medium text-[#131313]">Just Dropped</span>
              </nav>

              <HeroBanner />
              <TopDealsCarousel title="Just Dropped" textcolor="black" subtitle="Fresh arrivals added this week - be the first to explore the newest products" />

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
                      {isShirtGridView ? (
                          <>
                              <div className="mb-6 bg-white p-4 sm:p-6 rounded-2xl border border-[#e5e7eb]">
                                  <h2 className="text-xl sm:text-2xl font-bold text-[#131313] mb-5 sm:mb-6">
                                      Latest in Shirt
                                  </h2>
                                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                                      {shirtGridPaginated.map((product) => (
                                          <DealCard key={product.id} {...product} />
                                      ))}
                                  </div>
                              </div>
                              <Pagination
                                  currentPage={currentPage}
                                  totalPages={SHIRT_GRID_TOTAL_PAGES}
                                  onPageChange={setCurrentPage}
                              />
                          </>
                      ) : isMensView ? (
                          <>
                              <div className="mb-6 rounded-2xl ">
                                  <FashionCategoryCarousel
                                      title="Latest in Fashion & Apparel"
                                      subtitle="Men's Clothing"
                                      categories={MENS_SUBCATEGORIES}
                                  />
                                  <DealsSection
                                      title="Latest in Shirts"
                                      products={MENS_SHIRT_PRODUCTS}
                                  />
                                  <DealsSection
                                      title="Latest in T-Shirts"
                                      products={MENS_TSHIRT_PRODUCTS}
                                  />
                              </div>
                              <Pagination
                                  
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
                                      <DealsSection
                                          key={id}
                                          title={`Latest in ${label}`}
                                          products={fashionPaginated.get(id) ?? []}
                                      />
                                  ))}
                              </div>
                              <Pagination 
                                  currentPage={currentPage}
                                  totalPages={fashionTotalPages}
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