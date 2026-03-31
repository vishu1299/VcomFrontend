'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

const MAX_VISIBLE_PAGES = 5;

type ProductListPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function ProductListPagination({
  currentPage,
  totalPages,
  onPageChange,
}: ProductListPaginationProps) {
  // Design only: always show. Use at least 2 pages so layout looks correct
  const totalPagesToShow = Math.max(totalPages, 45);

  // Show a window of page numbers (e.g. 1,2,3,4,5)
  let start = Math.max(1, currentPage - Math.floor(MAX_VISIBLE_PAGES / 2));
  const end = Math.min(totalPagesToShow, start + MAX_VISIBLE_PAGES - 1);
  if (end - start + 1 < MAX_VISIBLE_PAGES) {
    start = Math.max(1, end - MAX_VISIBLE_PAGES + 1);
  }
  const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  // Design only: clicks do nothing (no navigation)
  const noop = () => {};

  const buttons = (
    <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center">
      <button
        type="button"
        onClick={noop}
        className="flex h-9 items-center gap-1.5 rounded-lg border px-2 text-[14px] font-medium transition cursor-pointer shrink-0 min-[381px]:px-3"
        style={{
          borderColor: '#D2D2D2',
          backgroundColor: '#F5F5F5',
          color: '#131313',
        }}
        aria-label="Previous page"
      >
        <ChevronLeft className="h-4 w-4" style={{ color: '#131313' }} aria-hidden />
        <span className="max-[380px]:hidden">Prev</span>
      </button>
      <div className="flex items-center gap-1">
        {pages.map((page) => (
          <button
            key={page}
            type="button"
            onClick={noop}
            className={`min-w-[32px] sm:min-w-[36px] h-9 px-1.5 sm:px-2 rounded-lg text-[14px] font-medium transition cursor-pointer shrink-0 ${
              page === currentPage
                ? 'bg-white text-[#374151] border-2 border-[#1e3a8a]'
                : 'bg-transparent text-[#374151] border border-transparent hover:bg-[#f3f4f6]'
            }`}
            aria-label={`Page ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={noop}
        className="flex h-9 items-center gap-1.5 rounded-lg bg-[#1e3a8a] px-2 text-[14px] font-medium text-white transition cursor-pointer shrink-0 hover:bg-[#1e40af] min-[381px]:px-3"
        aria-label="Next page"
      >
        <span className="max-[380px]:hidden">Next</span>
        <ChevronRight className="h-4 w-4" aria-hidden />
      </button>
    </div>
  );

  return (
    <nav
      className="relative flex flex-col sm:flex-row sm:items-center w-full mt-6 sm:mt-8 pt-4  gap-3 sm:gap-0 sm:min-h-[48px]"
      aria-label="Pagination"
    >
      {/* Mobile: row 1. Web: left — Page text */}
      <div className="w-full sm:w-auto sm:shrink-0 text-left order-1 sm:relative sm:z-10">
        <p className="text-[14px]" style={{ color: '#131313' }}>
          Page {currentPage} of {totalPagesToShow}
        </p>
      </div>

      {/* Mobile: row 2 — buttons in flow */}
      <div className="flex items-center justify-center min-w-0 order-2 sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
        {buttons}
      </div>
    </nav>
  );
}
