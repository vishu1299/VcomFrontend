'use client';

import { useState, useMemo } from 'react';
import LiveNowBanner from './components/LiveNowBanner';
import LiveNowFilters, { type TabType } from './components/LiveNowFilters';
import LiveNowProductCard from './components/LiveNowProductCard';
import Pagination from './components/Pagination';
import { LIVE_PRODUCTS, PAGE_SIZE } from './data/products';
import type { LiveNowProduct } from './data/products';

function sortProducts(
  products: LiveNowProduct[],
  sortPrice: string,
  _sortDesign: string,
  _sortFashion: string
): LiveNowProduct[] {
  const result = [...products];
  if (sortPrice === 'low-to-high') {
    result.sort((a, b) => a.price - b.price);
  } else if (sortPrice === 'high-to-low') {
    result.sort((a, b) => b.price - a.price);
  }
  return result;
}

export default function LiveNowPage() {
  const [activeTab, setActiveTab] = useState<TabType>('live-now');
  const [sortPrice, setSortPrice] = useState('low-to-high');
  const [sortDesign, setSortDesign] = useState('design');
  const [sortFashion, setSortFashion] = useState('fashion');
  const [currentPage, setCurrentPage] = useState(1);

  const sortedProducts = useMemo(
    () => sortProducts(LIVE_PRODUCTS, sortPrice, sortDesign, sortFashion),
    [sortPrice, sortDesign, sortFashion]
  );

  const totalCount = sortedProducts.length;
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return sortedProducts.slice(start, start + PAGE_SIZE);
  }, [sortedProducts, currentPage]);

  const showingStart = totalCount === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1;
  const showingEnd = Math.min(currentPage * PAGE_SIZE, totalCount);
  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));

  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-4 sm:py-6">
        <LiveNowBanner />

        <LiveNowFilters
          activeTab={activeTab}
          onTabChange={setActiveTab}
          showingStart={showingStart}
          showingEnd={showingEnd}
          totalCount={totalCount}
          sortPrice={sortPrice}
          sortDesign={sortDesign}
          sortFashion={sortFashion}
          onSortPriceChange={setSortPrice}
          onSortDesignChange={setSortDesign}
          onSortFashionChange={setSortFashion}
        />

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {paginatedProducts.map((product) => (
            <LiveNowProductCard key={product.id} {...product} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </main>
  );
}
