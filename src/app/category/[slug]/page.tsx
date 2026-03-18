'use client';

import { useParams, notFound } from 'next/navigation';
import { useMemo, useState } from 'react';
import SubCategoryHero from '@/app/product-categories/[slug]/components/SubCategoryHero';
import SubCategoryScroll from '@/app/product-categories/[slug]/components/SubCategoryScroll';
import ExclusiveFilterSortBar from '@/app/exclusive/components/ExclusiveFilterSortBar';
import ExclusiveFilterSidebar from '@/app/exclusive/components/ExclusiveFilterSidebar';
import ExclusiveProductCard from '@/app/exclusive/components/ExclusiveProductCard';
import ExclusivePagination from '@/app/exclusive/components/ExclusivePagination';
import { initialExclusiveFilters, type ExclusiveFilterState } from '@/app/exclusive/data/filters';
import { SUB_CATEGORY_ITEMS } from '@/app/product-categories/[slug]/data/subcategories';
import {
  getSubCategoryProducts,
  SUB_CATEGORY_PAGE_SIZE,
  SUB_CATEGORY_TOTAL_RESULTS,
} from '@/app/product-categories/[slug]/data/products';
import { getStandaloneCategory } from './data';

export default function CategorySlugPage() {
  const params = useParams();
  const slug = typeof params?.slug === 'string' ? params.slug : '';

  const meta = useMemo(() => (slug ? getStandaloneCategory(slug) : null), [slug]);

  const [filters, setFilters] = useState<ExclusiveFilterState>(initialExclusiveFilters);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);

  const title = meta?.name ?? 'Category';
  const totalResults = SUB_CATEGORY_TOTAL_RESULTS;
  const totalPages = Math.ceil(totalResults / SUB_CATEGORY_PAGE_SIZE);
  const start = (currentPage - 1) * SUB_CATEGORY_PAGE_SIZE + 1;
  const end = Math.min(currentPage * SUB_CATEGORY_PAGE_SIZE, totalResults);
  const products = useMemo(() => getSubCategoryProducts(), []);

  const clearAllFilters = () => {
    setFilters(initialExclusiveFilters);
    setCurrentPage(1);
  };

  if (!slug || !meta) {
    notFound();
  }

  return (
    <main
      className="min-h-screen bg-white overflow-x-hidden"
      style={{ fontFamily: 'var(--font-poppins)' }}
    >
      <div className="mx-auto max-w-[1440px] w-full px-3 sm:px-5 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-4 sm:py-5 lg:py-8">
        <SubCategoryHero title={title} image={meta.image} />

        <div className="mb-3 sm:mb-4">
          <div className="flex flex-col gap-3 sm:gap-0 sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-black order-2 sm:order-1">
              {title}
            </h2>
            <div className="order-1 sm:order-2 w-full sm:w-auto">
              <ExclusiveFilterSortBar
                start={start}
                end={end}
                totalResults={totalResults}
                onOpenFilters={() => setFilterDrawerOpen(true)}
              />
            </div>
          </div>
          <SubCategoryScroll
            items={SUB_CATEGORY_ITEMS}
            categorySlug={slug}
            linkMode="category"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
          <ExclusiveFilterSidebar
            filters={filters}
            onFiltersChange={setFilters}
            onClearAll={clearAllFilters}
            isOpen={filterDrawerOpen}
            onClose={() => setFilterDrawerOpen(false)}
          />

          <div className="flex-1 min-w-0 overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
              {products.map((product) => (
                <ExclusiveProductCard key={product.id} {...product} variant="grid" />
              ))}
            </div>
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
