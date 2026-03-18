'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import HeroBanner from './components/HeroBanner';
import StoreHeader from './components/StoreHeader';
import LiveNowProductCard from './components/LiveNowProductCard';
import UpcomingLiveCard from './components/UpcomingLiveCard';
import Pagination from './components/Pagination';
import FilterBar, { type TabType } from './components/FilterBar';
import { ALL_LIVE_PRODUCTS, UPCOMING_LIVE_PRODUCTS, PAGE_SIZE } from './data/products';

export default function AllLiveNowPage() {
    const [activeTab, setActiveTab] = useState<TabType>('live-now');
    const [sortValue, setSortValue] = useState('low-to-high');
    const [categoryValue, setCategoryValue] = useState('fashion');
    const [currentPage, setCurrentPage] = useState(1);

    const sortedLiveProducts = useMemo(() => {
        const result = [...ALL_LIVE_PRODUCTS];
        if (sortValue === 'high-to-low') {
            result.sort((a, b) => b.price - a.price);
        } else {
            result.sort((a, b) => a.price - b.price);
        }
        return result;
    }, [sortValue]);

    const liveTotalCount = sortedLiveProducts.length;
    const upcomingTotalCount = UPCOMING_LIVE_PRODUCTS.length;
    const totalCount = activeTab === 'live-now' ? liveTotalCount : upcomingTotalCount;
    const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));

    const paginatedLiveProducts = useMemo(() => {
        const start = (currentPage - 1) * PAGE_SIZE;
        return sortedLiveProducts.slice(start, start + PAGE_SIZE);
    }, [sortedLiveProducts, currentPage]);

    const paginatedUpcomingProducts = useMemo(() => {
        const start = (currentPage - 1) * PAGE_SIZE;
        return UPCOMING_LIVE_PRODUCTS.slice(start, start + PAGE_SIZE);
    }, [currentPage]);

    const showingStart = totalCount === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1;
    const showingEnd = Math.min(currentPage * PAGE_SIZE, totalCount);

    function handleTabChange(tab: TabType) {
        setActiveTab(tab);
        setCurrentPage(1);
    }

    return (
        <main className="page-text-black min-h-screen bg-[#f3f7fa]">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-4 sm:py-6">
                <nav className="flex items-center gap-4 mb-4 sm:mb-6 text-[14px] sm:text-[16px] text-[#131313]">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                    <span className="text-[#767676]">/</span>
                    <span className="font-medium text-[#131313]">All Live Now</span>
                </nav>

                <HeroBanner />

                <FilterBar
                    activeTab={activeTab}
                    onTabChange={handleTabChange}
                    showingStart={showingStart}
                    showingEnd={showingEnd}
                    totalCount={totalCount}
                    sortValue={sortValue}
                    categoryValue={categoryValue}
                    onSortChange={setSortValue}
                    onCategoryChange={setCategoryValue}
                />

                {activeTab === 'live-now' ? (
                    <>
                        <div className="bg-white rounded-xl sm:rounded-2xl border border-[#e5e7eb] p-4 sm:p-6">
                            <StoreHeader
                                storeName="UrbanTech"
                                handle="@urbantechco"
                                profileImage="/images/profile.png"
                            />
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
                                {paginatedLiveProducts.slice(0, 4).map((product) => (
                                    <LiveNowProductCard key={product.id} {...product} />
                                ))}
                            </div>
                        </div>
                        <div className="mt-4 sm:mt-6 bg-white rounded-xl sm:rounded-2xl border border-[#e5e7eb] p-4 sm:p-6">
                            <StoreHeader
                                storeName="UrbanTech"
                                handle="@urbantechco"
                                profileImage="/images/profile.png"
                            />
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
                                {paginatedLiveProducts.map((product) => (
                                    <LiveNowProductCard key={product.id} {...product} />
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="p-4 sm:p-6">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
                            {paginatedUpcomingProducts.map((product) => (
                                <UpcomingLiveCard key={product.id} {...product} />
                            ))}
                        </div>
                        <div className="mt-6 flex justify-center">
                            <button
                                type="button"
                                className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[var(--color-main-blue)] hover:underline"
                            >
                                See more
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}

                <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <p className="text-[13px] sm:text-[14px] text-[#767676] order-2 sm:order-1">
                        Page {currentPage} of {totalPages}
                    </p>
                    <div className="order-1 sm:order-2 w-full sm:w-auto overflow-x-auto">
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
