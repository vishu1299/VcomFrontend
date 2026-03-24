'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

type ExclusivePaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  compact?: boolean;
};

const MAX_VISIBLE_SMALL = 3;
const MAX_VISIBLE_LARGE = 5;

function getPageRange(currentPage: number, totalPages: number, maxVisible: number) {
  const start = Math.max(1, Math.min(currentPage - Math.floor(maxVisible / 2), totalPages - maxVisible + 1));
  const end = Math.min(start + maxVisible - 1, totalPages);
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

export default function ExclusivePagination({
  currentPage,
  totalPages,
  onPageChange,
  compact = false,
}: ExclusivePaginationProps) {
  const pagesSmall = getPageRange(currentPage, totalPages, MAX_VISIBLE_SMALL);
  const pagesLarge = getPageRange(currentPage, totalPages, MAX_VISIBLE_LARGE);

  const navClass = compact ? 'pt-4 border-t border-[var(--color-border)]' : 'pt-4 sm:pt-6 lg:pt-8 border-t border-[var(--color-border)] mt-4 sm:mt-6 lg:mt-8';
  const btnClass = 'min-h-[36px] sm:min-h-[40px] rounded-lg text-xs sm:text-sm font-medium transition';
  const pageBtnClass = (page: number) =>
    page === currentPage ? 'bg-[#1e3a8a] text-white' : 'bg-white border border-[#e5e7eb] text-[#131313] hover:bg-[#f5f5f5]';

  return (
    <nav className={`${navClass}`} aria-label="Pagination" style={{ fontFamily: 'var(--font-poppins)' }}>
      {/* Small screens: Page on row 1, < numbers > on row 2 */}
      <div className="flex flex-col gap-3 lg:hidden">
        <p className="text-xs sm:text-sm font-normal text-[#374151] text-center w-full">
          Page {currentPage} of {totalPages}
        </p>
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-nowrap">
          <button
            type="button"
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage <= 1}
            className="min-w-[36px] sm:min-w-[40px] h-9 sm:h-10 rounded-lg border border-[#e5e7eb] bg-white flex items-center justify-center text-[#131313] hover:bg-[#f5f5f5] disabled:opacity-50 disabled:cursor-not-allowed transition"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-1">
            {pagesSmall.map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => onPageChange(page)}
                className={`min-w-[32px] sm:min-w-[40px] h-9 sm:h-10 rounded-lg ${pageBtnClass(page)}`}
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage >= totalPages}
            className={`min-w-[36px] sm:min-w-[40px] h-9 sm:h-10 rounded-lg flex items-center justify-center transition ${
              currentPage >= totalPages
                ? 'border border-[#e5e7eb] bg-white text-[#131313] opacity-50 cursor-not-allowed'
                : 'bg-[#1e3a8a] text-white border-0 hover:opacity-90'
            }`}
            aria-label="Next page"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Large screens: one row — Page | Prev [1 2 3 4 5] Next */}
      <div className="hidden lg:flex flex-nowrap items-center justify-between gap-4">
        <p className="text-sm font-normal text-[#374151] shrink-0">
          Page {currentPage} of {totalPages}
        </p>
        <div className="flex items-center gap-2 flex-nowrap">
          <button
            type="button"
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage <= 1}
            className={`${btnClass} px-4 border border-[#e5e7eb] bg-white text-[#131313] hover:bg-[#f5f5f5] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1`}
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            <ChevronLeft className="w-4 h-4 shrink-0" />
            Prev
          </button>
          <div className="flex items-center gap-1">
            {pagesLarge.map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => onPageChange(page)}
                className={`min-w-[40px] h-10 rounded-lg ${pageBtnClass(page)}`}
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage >= totalPages}
            className={`${btnClass} px-4 flex items-center gap-1 ${
              currentPage >= totalPages
                ? 'border border-[#e5e7eb] bg-white text-[#131313] opacity-50 cursor-not-allowed'
                : 'bg-[#1e3a8a] text-white border-0 hover:opacity-90'
            }`}
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            Next
            <ChevronRight className="w-4 h-4 shrink-0" />
          </button>
        </div>
      </div>
    </nav>
  );
}
