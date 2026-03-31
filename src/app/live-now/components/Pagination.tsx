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
    Math.min(currentPage - Math.floor(MAX_VISIBLE_PAGES / 2), totalPages - MAX_VISIBLE_PAGES + 1),
  );
  const endPage = Math.min(startPage + MAX_VISIBLE_PAGES - 1, totalPages);
  const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <nav
      className="mt-4 flex flex-col gap-3 sm:mt-5 sm:flex-row sm:items-center sm:justify-between"
      aria-label="Pagination"
    >
      <p className="text-sm text-[#6b7280]">
        Page {currentPage} of {totalPages}
      </p>

      <div className="ml-auto flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage <= 1}
          className="inline-flex h-9 items-center gap-1 rounded-md border border-[#e5e7eb] bg-white px-3 text-xs font-medium text-[#6b7280] disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ChevronLeft className="h-3.5 w-3.5" /> Prev
        </button>

        {pages.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={`h-9 min-w-[36px] rounded-md px-2.5 text-sm font-medium transition ${
              page === currentPage
                ? 'bg-[#2447A6] text-white'
                : 'bg-white text-[#131313] hover:bg-white/90'
            }`}
          >
            {page}
          </button>
        ))}

        <button
          type="button"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage >= totalPages}
          className="inline-flex h-9 items-center gap-1 rounded-md bg-[#2447A6] px-3 text-xs font-medium text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          Next <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </nav>
  );
}
