'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import LiveNowBanner from './components/LiveNowBanner';
import LiveNowFilters, { type TabType } from './components/LiveNowFilters';
import LiveNowProductCard from './components/LiveNowProductCard';
import Pagination from './components/Pagination';
import { LIVE_PRODUCTS, PAGE_SIZE } from './data/products';
import type { LiveNowProduct } from './data/products';

function sortProducts(products: LiveNowProduct[], sortPrice: string): LiveNowProduct[] {
  const result = [...products];
  if (sortPrice === 'low-to-high') {
    result.sort((a, b) => a.price - b.price);
  } else if (sortPrice === 'high-to-low') {
    result.sort((a, b) => b.price - a.price);
  }
  return result;
}

function StoreHeader() {
  return (
    <div className="mb-3 flex items-center gap-2">
      <div className="relative h-8 w-8 overflow-hidden rounded-full border border-[#e5e7eb]">
        <Image src="/images/profile.png" alt="UrbanTech" fill className="object-cover" sizes="32px" />
      </div>
      <div className="min-w-0">
        <p className="truncate text-xs font-semibold text-[#131313]">UrbanTech</p>
        <p className="truncate text-[11px] text-[#6b7280]">@urbantech</p>
      </div>
      <span className="ml-1 rounded-sm bg-[#f5c400] px-1.5 py-0.5 text-[9px] font-semibold text-[#131313]">
        Follow
      </span>
      <span className="rounded-sm bg-[#f20000] px-1.5 py-0.5 text-[9px] font-semibold text-white">
        LIVE NOW
      </span>
    </div>
  );
}

export default function LiveNowPage() {
  const [activeTab, setActiveTab] = useState<TabType>('live-now');
  const [sortPrice, setSortPrice] = useState('low-to-high');
  const [sortFashion, setSortFashion] = useState('fashion');
  const [currentPage, setCurrentPage] = useState(1);

  const sortedProducts = useMemo(() => sortProducts(LIVE_PRODUCTS, sortPrice), [sortPrice]);
  const filteredProducts = useMemo(
    () => (activeTab === 'live-now' ? sortedProducts : []),
    [activeTab, sortedProducts],
  );

  const totalCount = filteredProducts.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredProducts.slice(start, start + PAGE_SIZE);
  }, [filteredProducts, currentPage]);

  const firstRow = paginatedProducts.slice(0, 4);
  const secondRow = paginatedProducts.slice(4, 12);
  const thirdRow = paginatedProducts.slice(12, 16);

  const showingStart = totalCount === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1;
  const showingEnd = Math.min(currentPage * PAGE_SIZE, totalCount);

  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <div className="mx-auto max-w-[1440px] px-4 py-4 sm:px-6 sm:py-6 lg:px-8 xl:px-10 2xl:px-12">
        <LiveNowBanner />

        <LiveNowFilters
          activeTab={activeTab}
          onTabChange={(tab) => {
            setActiveTab(tab);
            setCurrentPage(1);
          }}
          showingStart={showingStart}
          showingEnd={showingEnd}
          totalCount={totalCount}
          sortPrice={sortPrice}
          sortFashion={sortFashion}
          onSortPriceChange={setSortPrice}
          onSortFashionChange={setSortFashion}
        />

        {activeTab === 'upcoming' ? (
          <div className="rounded-xl border border-white/15 bg-white p-6 text-center text-sm text-[#6b7280]">
            Upcoming live design will be added here.
          </div>
        ) : (
          <div className="space-y-3 sm:space-y-4">
            {firstRow.length > 0 && (
              <section className="rounded-xl border border-[#d9d9d9] bg-white p-2.5 sm:p-3">
                <StoreHeader />
                <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
                  {firstRow.map((product) => (
                    <LiveNowProductCard key={product.id} {...product} />
                  ))}
                </div>
              </section>
            )}

            {secondRow.length > 0 && (
              <section className="rounded-xl border border-[#d9d9d9] bg-white p-2.5 sm:p-3">
                <StoreHeader />
                <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
                  {secondRow.map((product) => (
                    <LiveNowProductCard key={product.id} {...product} />
                  ))}
                </div>
              </section>
            )}

            {thirdRow.length > 0 && (
              <section className="rounded-xl border border-[#d9d9d9] bg-white p-2.5 sm:p-3">
                <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
                  {thirdRow.map((product) => (
                    <LiveNowProductCard key={product.id} {...product} />
                  ))}
                </div>
              </section>
            )}
          </div>
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </main>
  );
}
