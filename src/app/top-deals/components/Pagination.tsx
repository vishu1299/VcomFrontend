'use client';

import { useState, useEffect } from 'react';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  /** Dark bar style (e.g. for Electronics Ending Soon view) */
  variant?: 'light' | 'dark';
};

const MAX_VISIBLE_DESKTOP = 5;
const MAX_VISIBLE_MOBILE = 3;
const MOBILE_BREAKPOINT = 640;

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  variant = 'light',
}: PaginationProps) {
  const [maxVisible, setMaxVisible] = useState(MAX_VISIBLE_DESKTOP);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const update = () => setMaxVisible(mql.matches ? MAX_VISIBLE_MOBILE : MAX_VISIBLE_DESKTOP);
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
    { length: Math.max(0, endPage - startPage + 1) },
    (_, i) => startPage + i
  );

  const isDark = variant === 'dark';

  const wrapperClass = isDark
    ? 'rounded-lg bg-[#111827] px-4 py-3 sm:px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4'
    : 'flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4';

  const labelClass = isDark
    ? 'text-sm text-gray-300 order-2 sm:order-1 text-center sm:text-left'
    : 'text-sm text-[#767676] order-2 sm:order-1';

  const prevNextClass = isDark
    ? 'min-h-[36px] sm:min-h-[40px] px-3 sm:px-4 rounded-md text-sm font-medium flex items-center gap-1.5 sm:gap-2 shrink-0 bg-transparent text-white hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition'
    : 'min-h-[36px] sm:min-h-[40px] px-3 sm:px-4 rounded-lg border border-[#e5e7eb] bg-white text-[#131313] text-sm font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center gap-2';

  const pageBtnClass = (active: boolean) =>
    isDark
      ? `min-w-[32px] sm:min-w-[40px] h-9 sm:h-10 rounded-md text-[13px] sm:text-sm font-medium transition shrink-0 ${
          active ? 'bg-white text-[#111827]' : 'bg-gray-700 text-white hover:bg-gray-600'
        }`
      : `min-w-[32px] sm:min-w-[40px] h-9 sm:h-10 rounded-lg text-[13px] sm:text-sm font-medium transition shrink-0 border ${
          active
            ? 'bg-[#111827] text-white border-[#111827]'
            : 'bg-white border border-[#e5e7eb] text-[#131313] hover:bg-gray-50'
        }`;

  const nextBtnClass = isDark
    ? prevNextClass
    : 'min-h-[36px] sm:min-h-[40px] px-3 sm:px-4 rounded-lg border border-[#1e3a8a] bg-[#1e3a8a] text-white text-sm font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center gap-2 shrink-0';

  return (
    <div className={wrapperClass}>
      <p className={labelClass}>
        Page {currentPage} of {totalPages}
      </p>
      <nav
        className="flex flex-wrap items-center justify-center sm:justify-end gap-1.5 sm:gap-2 order-1 sm:order-2"
        aria-label="Pagination"
      >
        <button
          type="button"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage <= 1}
          className={prevNextClass}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sm:w-4 sm:h-4 shrink-0">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Prev
        </button>
        <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-1.5">
          {pages.map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              className={pageBtnClass(page === currentPage)}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage >= totalPages}
          className={nextBtnClass}
        >
          Next
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sm:w-4 sm:h-4 shrink-0">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </nav>
    </div>
  );
}
