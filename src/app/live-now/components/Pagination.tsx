'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const MAX_VISIBLE_PAGES = 5;

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const startPage = Math.max(
    1,
    Math.min(currentPage - Math.floor(MAX_VISIBLE_PAGES / 2), totalPages - MAX_VISIBLE_PAGES + 1)
  );
  const endPage = Math.min(startPage + MAX_VISIBLE_PAGES - 1, totalPages);
  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return (
    <nav
      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 sm:pt-8 border-t border-[var(--color-border)] mt-6 sm:mt-8"
      aria-label="Pagination"
    >
      <p className="text-design-14 text-[var(--color-muted-alt-2)]">
        Page {currentPage} of {totalPages}
      </p>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage <= 1}
          className="min-h-[40px] px-3 sm:px-4 rounded-lg border border-[var(--color-border)] bg-white text-design-14 font-medium text-[var(--color-black)] hover:bg-[var(--color-border)] disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center gap-1"
        >
          <ChevronLeft className="w-4 h-4" />
          Prev
        </button>
        <div className="flex items-center gap-1">
          {pages.map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              className={`min-w-[40px] h-10 rounded-lg text-design-14 font-medium transition ${
                page === currentPage
                  ? 'bg-[var(--color-main-blue)] text-white'
                  : 'bg-[var(--color-border)] text-[var(--color-black)] hover:bg-[var(--color-muted-alt-2)]/20'
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
          className="min-h-[40px] px-3 sm:px-4 rounded-lg border border-[var(--color-border)] bg-white text-design-14 font-medium text-[var(--color-black)] hover:bg-[var(--color-border)] disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center gap-1"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
}
