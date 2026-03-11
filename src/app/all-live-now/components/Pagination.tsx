'use client';

import { useState, useEffect } from 'react';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const MAX_VISIBLE_PAGES_DESKTOP = 5;
const MAX_VISIBLE_PAGES_MOBILE = 3;
const MOBILE_BREAKPOINT = 640;

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const [maxVisible, setMaxVisible] = useState(MAX_VISIBLE_PAGES_DESKTOP);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const update = () => setMaxVisible(mql.matches ? MAX_VISIBLE_PAGES_MOBILE : MAX_VISIBLE_PAGES_DESKTOP);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);

  const startPage = Math.max(
    1,
    Math.min(
      currentPage - Math.floor(maxVisible / 2),
      totalPages - maxVisible + 1
    )
  );
  const endPage = Math.min(startPage + maxVisible - 1, totalPages);
  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return (
    <nav
      className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2"
      aria-label="Pagination"
    >
      <button
        type="button"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage <= 1}
        className="min-h-[36px] sm:min-h-[40px] px-3 sm:px-4 rounded-lg border border-[#e5e7eb] bg-white text-[#131313] text-[13px] sm:text-[14px] font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition flex gap-1.5 sm:gap-2 justify-center items-center shrink-0"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sm:w-4 sm:h-4 shrink-0">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Prev
      </button>
      <div className="flex items-center gap-1 sm:gap-1.5">
        {pages.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={`min-w-[32px] sm:min-w-[40px] h-9 sm:h-10 rounded-lg text-[13px] sm:text-[14px] font-medium transition shrink-0 border ${
              page === currentPage
                ? 'bg-[#111827] text-white border-[#111827]'
                : 'bg-white border-[#e5e7eb] text-[#131313] hover:bg-gray-50'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage >= totalPages}
        className="min-h-[36px] sm:min-h-[40px] px-3 sm:px-6 rounded-lg border border-[#111827] bg-[#111827] text-white text-[13px] sm:text-[14px] font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:border-gray-300 transition flex gap-1.5 sm:gap-2 justify-center items-center shrink-0"
      >
        Next
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sm:w-4 sm:h-4 shrink-0">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </nav>
  );
}
