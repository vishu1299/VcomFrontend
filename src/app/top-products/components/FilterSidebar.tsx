'use client';

export type FilterState = {
  categories: string[];
  bestSeller: string | null;
  brands: string[];
  ratings: number[];
  priceMin: number;
  priceMax: number;
  colors: string[];
  discount: string | null;
};

const CATEGORIES = [
  { id: 'Fashion & Apparel', label: 'Fashion & Apparel', count: 3456 },
  { id: 'Beauty & Personal Care', label: 'Beauty & Personal Care', count: 1234 },
  { id: 'Home & Living', label: 'Home & Living', count: 12 },
  { id: 'Jewelry & Watches', label: 'Jewelry & Watches', count: 1232 },
  { id: 'Electronics & Gadgets', label: 'Electronics & Gadgets', count: 1232 },
  { id: 'Toys & Kids', label: 'Toys & Kids', count: 1232 },
  { id: 'Spiritual & Cultural Goods', label: 'Spiritual & Cultural Goods', count: 1232 },
];

const BEST_SELLER = [
  { id: '7', label: 'Last 7 Days' },
  { id: '30', label: 'Last 30 Days' },
  { id: '90', label: 'Last 90 Days' },
];

const BRANDS = [
  { id: 'samsung', label: 'Samsung', count: 1234 },
  { id: 'Seekbuylove', label: 'Seekbuylove', count: 1234 },
  { id: 'Roadstar', label: 'Roadstar', count: 1234 },
  { id: 'HRX', label: 'HRX', count: 1234 },
  { id: 'Friskers', label: 'Friskers', count: 1234 },
  { id: 'Tommy Hilfiger', label: 'Tommy Hilfiger', count: 1234 },
  { id: 'Greylangg', label: 'Greylangg', count: 1234 },
  { id: 'US. Polo Assn.', label: 'US. Polo Assn.', count: 1234 },
];

const COLORS = [
  { id: 'blue', label: 'Blue', hex: '#3b82f6' },
  { id: 'white', label: 'White', hex: '#ffffff' },
  { id: 'green', label: 'Green', hex: '#22c55e' },
  { id: 'navy', label: 'Navy Blue', hex: '#1e3a8a' },
  { id: 'black', label: 'Black', hex: '#131313' },
  { id: 'red', label: 'Red', hex: '#dc2626' },
  { id: 'brown', label: 'Brown', hex: '#92400e' },
];

const DISCOUNTS = [
  { id: '10', label: '10% and above' },
  { id: '20', label: '20% and above' },
  { id: '30', label: '30% and above' },
  { id: '40', label: '40% and above' },
  { id: '50', label: '50% and above' },
  { id: '60', label: '60% and above' },
];

type FilterSidebarProps = {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  onClearAll: () => void;
  isOpen?: boolean;
  onClose?: () => void;
};

function StarRating({ count }: { count: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="#eab308"
          stroke="#eab308"
          strokeWidth="2"
          className="shrink-0"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </span>
  );
}

export default function FilterSidebar({
  filters,
  onFiltersChange,
  onClearAll,
  isOpen = true,
  onClose,
}: FilterSidebarProps) {
  const toggleCategory = (id: string) => {
    const next = filters.categories.includes(id)
      ? filters.categories.filter((c) => c !== id)
      : [...filters.categories, id];
    onFiltersChange({ ...filters, categories: next });
  };

  const setBestSeller = (id: string | null) => {
    onFiltersChange({ ...filters, bestSeller: filters.bestSeller === id ? null : id });
  };

  const toggleBrand = (id: string) => {
    const next = filters.brands.includes(id)
      ? filters.brands.filter((b) => b !== id)
      : [...filters.brands, id];
    onFiltersChange({ ...filters, brands: next });
  };

  const toggleRating = (stars: number) => {
    const next = filters.ratings.includes(stars)
      ? filters.ratings.filter((r) => r !== stars)
      : [...filters.ratings, stars];
    onFiltersChange({ ...filters, ratings: next });
  };

  const setPriceRange = (min: number, max: number) => {
    onFiltersChange({ ...filters, priceMin: min, priceMax: max });
  };

  const setColor = (id: string) => {
    const next = filters.colors.includes(id) ? [] : [id];
    onFiltersChange({ ...filters, colors: next });
  };

  const setDiscount = (id: string | null) => {
    onFiltersChange({ ...filters, discount: filters.discount === id ? null : id });
  };

  const content = (
    <>
      <div className="sticky top-0 bg-white flex items-center justify-between z-10 p-5">
        <h3 className="text-[18px] font-medium text-[#131313]">Filters</h3>
        <button
          type="button"
          onClick={onClearAll}
          className="text-[14px] font-medium text-[var(--color-error)] hover:underline"
        >
          Clear All
        </button>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="lg:hidden w-8 h-8 rounded-full flex items-center justify-center bg-[#e5e7eb]"
            aria-label="Close filters"
          >
            ×
          </button>
        )}
      </div>

      <div className="flex flex-col gap-[31px] p-5">
        <section>
          <h4 className="text-[18px] font-medium text-[#131313] mb-3">Categories</h4>
          <ul className="space-y-2">
            {CATEGORIES.map((c) => (
              <li key={c.id} className="flex items-center justify-between gap-3">
                <label
                  htmlFor={`filter-cat-${c.id}`}
                  className="flex-1 min-w-0 cursor-pointer text-[16px] text-[#131313]"
                >
                  {c.label} <span className="text-[#767676]">({c.count})</span>
                </label>
                <input
                  id={`filter-cat-${c.id}`}
                  type="checkbox"
                  checked={filters.categories.includes(c.id)}
                  onChange={() => toggleCategory(c.id)}
                  className="shrink-0 w-4 h-4 rounded  cursor-pointer accent-[#1e3a8a]"
                />
              </li>
            ))}
          </ul>
          <button type="button" className="mt-2 mx-auto text-[14px] text-[#1e3a8a] hover:underline flex items-center gap-1">
            See More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </section>


        <section>
          <h4 className="text-[18px] font-medium text-[#131313] mb-3">Best Seller</h4>
          <ul className="space-y-2">
            {BEST_SELLER.map((b) => (
              <li key={b.id} className="flex items-center justify-between gap-3">
                <label htmlFor={`filter-best-${b.id}`} className="flex-1 cursor-pointer text-[16px] text-[#131313]">
                  {b.label}
                </label>
                <input
                  id={`filter-best-${b.id}`}
                  type="checkbox"
                  checked={filters.bestSeller === b.id}
                  onChange={() => setBestSeller(b.id)}
                  className="shrink-0 w-4 h-4 rounded cursor-pointer accent-[#1e3a8a]"
                />
              </li>
            ))}
          </ul>
          <button type="button" className="mt-2 mx-auto text-[14px] text-[#1e3a8a] hover:underline flex items-center gap-1">
            See More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </section>

        

        <section>
          <h4 className="text-[18px] font-medium text-[#131313] mb-3">Brand</h4>
          <ul className="space-y-2">
            {BRANDS.map((b) => (
              <li key={b.id} className="flex items-center justify-between gap-3">
                <label htmlFor={`filter-brand-${b.id}`} className="flex-1 min-w-0 cursor-pointer text-[16px] text-[#131313]">
                  {b.label} <span className="text-[#767676]">({b.count})</span>
                </label>
                <input
                  id={`filter-brand-${b.id}`}
                  type="checkbox"
                  checked={filters.brands.includes(b.id)}
                  onChange={() => toggleBrand(b.id)}
                  className="shrink-0 w-4 h-4 rounded border border-[#e5e7eb] cursor-pointer accent-[#1e3a8a]"
                />
              </li>
            ))}
          </ul>
          <button type="button" className="mt-2 mx-auto text-[14px] text-[#1e3a8a] hover:underline flex items-center gap-1">
            See More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </section>

        

        <section>
          <h4 className="text-[18px] font-medium text-[#131313] mb-3">Customer Ratings</h4>
          <ul className="space-y-2">
            {[1, 2, 3, 4, 5].map((stars) => (
              <li key={stars} className="flex items-center justify-between gap-3">
                <label
                  htmlFor={`filter-rating-${stars}`}
                  className="flex-1 cursor-pointer flex items-center gap-1.5 text-[16px] text-[#131313]"
                >
                  {stars} Star
                  <StarRating count={stars} />
                </label>
                <input
                  id={`filter-rating-${stars}`}
                  type="checkbox"
                  checked={filters.ratings.includes(stars)}
                  onChange={() => toggleRating(stars)}
                  className="shrink-0 w-4 h-4 rounded cursor-pointer accent-[#1e3a8a]"
                />
              </li>
            ))}
          </ul>
          <button type="button" className="mt-2 mx-auto text-[14px] text-[#1e3a8a] hover:underline flex items-center gap-1">
            See More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </section>

        

        <section>
          <h4 className="text-[18px] font-medium text-[#131313] mb-3">Price</h4>
          <div className="relative h-6 flex items-center">
            {/* Track background (light gray) */}
            <div className="absolute top-1/2 left-0 right-0 h-2 -translate-y-1/2 rounded-full bg-[#e5e7eb]" />
            {/* Selected range fill (dark blue between handles) */}
            <div
              className="absolute top-1/2 h-2 -translate-y-1/2 rounded-full bg-[#1e3a8a] pointer-events-none"
              style={{
                left: `${(filters.priceMin / 100000) * 100}%`,
                width: `${((filters.priceMax - filters.priceMin) / 100000) * 100}%`,
              }}
            />
            {/* Min handle - only covers left portion so thumb is draggable */}
            <input
              type="range"
              min={0}
              max={Math.max(filters.priceMax, 1)}
              value={filters.priceMin}
              onChange={(e) => {
                const val = Number(e.target.value);
                setPriceRange(val, Math.max(val, filters.priceMax));
              }}
              className="price-range-input absolute top-1/2 left-0 h-2 -translate-y-1/2 w-full pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-moz-range-thumb]:pointer-events-auto"
              style={{ width: `${(filters.priceMax / 100000) * 100}%` }}
            />
            {/* Max handle - only covers right portion */}
            <input
              type="range"
              min={filters.priceMin < 100000 ? filters.priceMin : 99999}
              max={100000}
              value={filters.priceMax}
              onChange={(e) => {
                const val = Number(e.target.value);
                setPriceRange(Math.min(val, filters.priceMin), val);
              }}
              className="price-range-input absolute top-1/2 left-0 h-2 -translate-y-1/2 w-full pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-moz-range-thumb]:pointer-events-auto"
              style={{
                width: `${((100000 - filters.priceMin) / 100000) * 100}%`,
                left: `${(filters.priceMin / 100000) * 100}%`,
              }}
            />
          </div>
          <p className="text-[14px] font-normal text-[#131313] mt-2">
            ${filters.priceMin.toLocaleString()} - ${filters.priceMax.toLocaleString()}
          </p>
        </section>

        

        <section>
          <h4 className="text-[18px] font-medium text-[#131313] mb-3">Color</h4>
          <ul className="space-y-2">
            {COLORS.map((c) => (
              <li key={c.id} className="flex items-center justify-between gap-3">
                <label
                  htmlFor={`filter-color-${c.id}`}
                  className="flex-1 cursor-pointer flex items-center gap-2 text-[16px] text-[#131313]"
                >
                  <span
                    className="w-5 h-5 rounded-full shrink-0 border border-[#e5e7eb]"
                    style={{ backgroundColor: c.hex }}
                  />
                  {c.label}
                </label>
                <input
                  id={`filter-color-${c.id}`}
                  type="radio"
                  name="filter-color"
                  checked={filters.colors.includes(c.id)}
                  onChange={() => setColor(c.id)}
                  className="shrink-0 w-4 h-4 cursor-pointer accent-[#1e3a8a]"
                />
              </li>
            ))}
          </ul>
          <button type="button" className="mt-2 mx-auto text-[14px] text-[#1e3a8a] hover:underline flex items-center gap-1">
            See More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </section>

        

        <section>
          <h4 className="text-[18px] font-medium text-[#131313] mb-3">Discount</h4>
          <ul className="space-y-2">
            {DISCOUNTS.map((d) => (
              <li key={d.id} className="flex items-center justify-between gap-3">
                <label htmlFor={`filter-discount-${d.id}`} className="flex-1 cursor-pointer text-[16px] text-[#131313]">
                  {d.label}
                </label>
                <input
                  id={`filter-discount-${d.id}`}
                  type="radio"
                  name="filter-discount"
                  checked={filters.discount === d.id}
                  onChange={() => setDiscount(filters.discount === d.id ? null : d.id)}
                  className="shrink-0 w-4 h-4 cursor-pointer accent-[#1e3a8a]"
                />
              </li>
            ))}
          </ul>
          <button type="button" className="mt-2 mx-auto text-[14px] text-[#1e3a8a] hover:underline flex items-center gap-1">
            See More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </section>
      </div>
    </>
  );

  return (
    <>
      {onClose && isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          role="presentation"
          onClick={onClose}
          onKeyDown={(e) => e.key === 'Escape' && onClose()}
          aria-hidden
        />
      )}
      <aside
        className={`bg-white rounded-2xl overflow-y-auto shrink-0 ${isOpen ? 'block' : 'hidden lg:block'} ${
          onClose
            ? 'fixed lg:relative inset-y-0 left-0 lg:inset-auto w-full max-w-[378px] lg:max-w-none lg:w-[338px] xl:w-[378px] z-50 lg:z-auto'
            : 'lg:w-[338px] xl:w-[378px]'
        }`}
        aria-label="Filters"
      >
        {content}
      </aside>
    </>
  );
}

export const initialFilters: FilterState = {
  categories: ['jewelry', 'electronics'],
  bestSeller: '7',
  brands: [],
  ratings: [4],
  priceMin: 0,
  priceMax: 100000,
  colors: [],
  discount: null,
};
