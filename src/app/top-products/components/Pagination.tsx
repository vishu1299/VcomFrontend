'use client';

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
    Math.min(
      currentPage - Math.floor(MAX_VISIBLE_PAGES / 2),
      totalPages - MAX_VISIBLE_PAGES + 1
    )
  );
  const endPage = Math.min(startPage + MAX_VISIBLE_PAGES - 1, totalPages);
  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return (
    <nav
      className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-[#e5e7eb]"
      aria-label="Pagination"
    >
      <div className="flex items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage <= 1}
          className="min-h-[20px] md:min-h-[40px] px-2 md:px-4 rounded-lg bg-[var(--color-main-blue)] text-white md:text-[14px] text-[10px] font-medium hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center gap-1"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Prev
        </button>
        <div className="flex items-center gap-1">
          {pages.map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              className={`min-w-[20px] md:min-w-[40px] h-6 md:h-10 rounded-lg md:text-[14px] text-[10px] font-medium transition ${
                page === currentPage
                  ? 'bg-[var(--color-main-blue)] text-white'
                  : 'bg-white border border-[#e5e7eb] text-[#131313] hover:bg-gray-50'
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
          className="min-h-[20px] md:min-h-[40px] px-2 md:px-4 rounded-lg bg-[var(--color-main-blue)] text-white md:text-[14px] text-[10px] font-medium hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center gap-1"
        >
          Next
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
