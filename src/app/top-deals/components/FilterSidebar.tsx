'use client';

import { getSubcategoriesForMain, MAIN_CATEGORIES } from '../data/categories';

export type DealFilterState = {
  categories: string[];
  timeLeft: string[];
  subCategories: string[];
  /** When any selected, main content shows subcategory view (grid) instead of category grid + carousel */
  selectedSubcategories: string[];
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

const TIME_LEFT = [
  { id: 'ending-soon', label: 'Ending Soon' },
  { id: '24h', label: '24 Hours Left' },
  { id: 'this-week', label: 'This Week Only' },
];

/** Shown when a main category is selected – options come from getSubcategoriesForMain */

const BRANDS = [
  { id: 'samsung', label: 'Samsung', count: 87693 },
  { id: 'apple', label: 'Apple', count: 123234 },
  { id: 'sony', label: 'Sony', count: 123234 },
  { id: 'lg', label: 'LG', count: 123234 },
  { id: 'del', label: 'Dell', count: 123234 },
  { id: 'hp', label: 'HP', count: 123234 },
  { id: 'lenovo', label: 'Lenovo', count: 123234 },
  { id: 'xiaomi', label: 'Xiaomi', count: 123234 },
];

const COLORS = [
  { id: 'blue', label: 'Blue',count: 322, hex: '#3b82f6' },
  { id: 'white', label: 'White', count: 322, hex: '#ffffff' },
  { id: 'green', label: 'Green', count: 322, hex: '#22c55e' },
  { id: 'navy-blue', label: 'Navy Blue', count: 322, hex: '#1e3a8a' },
  { id: 'black', label: 'Black', count: 322, hex: '#131313' },
  { id: 'red', label: 'Red', count: 322, hex: '#dc2626' },
  { id: 'brown', label: 'Brown', count: 322, hex: '#92400e' },
];

const DISCOUNTS = [
  { id: '10', label: '10% and above' },
  { id: '20', label: '20% and above' },
  { id: '30', label: '30% and above' },
  { id: '40', label: '40% and above' },
  { id: '50', label: '50% and above' },
  { id: '60', label: '60% and above' },
  { id: '70', label: '70% and above' },
  { id: '80', label: '80% and above' },
  { id: '90', label: '90% and above' },
];

const MAX_PRICE = 25000;

type FilterSidebarProps = {
  filters: DealFilterState;
  onFiltersChange: (f: DealFilterState) => void;
  onClearAll: () => void;
  isOpen?: boolean;
  onClose?: () => void;
};

function StarRating({ count }: { count: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#eab308" stroke="#eab308" strokeWidth="2" className="shrink-0">
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
    const next = filters.categories.includes(id) ? filters.categories.filter((c) => c !== id) : [...filters.categories, id];
    const singleMain = next.length === 1 ? next[0] : 'Fashion & Apparel';
    const subcatsForNew = singleMain ? getSubcategoriesForMain(singleMain) : [];
    const keepSubs = filters.selectedSubcategories.filter((id) => subcatsForNew.some((s) => s.id === id));
    onFiltersChange({
      ...filters,
      categories: next,
      selectedSubcategories: keepSubs,
    });
  };
  const toggleTimeLeft = (id: string) => {
    const next = filters.timeLeft.includes(id) ? filters.timeLeft.filter((t) => t !== id) : [...filters.timeLeft, id];
    onFiltersChange({ ...filters, timeLeft: next });
  };
  const toggleSubCategory = (id: string) => {
    const next = filters.subCategories.includes(id) ? filters.subCategories.filter((s) => s !== id) : [...filters.subCategories, id];
    onFiltersChange({ ...filters, subCategories: next });
  };
  const toggleBrand = (id: string) => {
    const next = filters.brands.includes(id) ? filters.brands.filter((b) => b !== id) : [...filters.brands, id];
    onFiltersChange({ ...filters, brands: next });
  };
  const toggleRating = (stars: number) => {
    const next = filters.ratings.includes(stars) ? filters.ratings.filter((r) => r !== stars) : [...filters.ratings, stars];
    onFiltersChange({ ...filters, ratings: next });
  };
  const toggleColor = (id: string) => {
    onFiltersChange({ ...filters, colors: filters.colors.includes(id) ? [] : [id] });
  };

  const setPriceRange = (min: number, max: number) => {
    onFiltersChange({ ...filters, priceMin: min, priceMax: max });
  };

  const setDiscount = (id: string | null) => {
    onFiltersChange({ ...filters, discount: filters.discount === id ? null : id });
  };


  const content = (
    <>
      <div className="sticky top-0 bg-white flex items-center justify-between z-10 p-5">
        <h3 className="text-lg font-bold text-[#131313]">Filters</h3>
        <button type="button" onClick={onClearAll} className="text-sm text-red-500 hover:underline">
          Clear All
        </button>
        {onClose && (
          <button type="button" onClick={onClose} className="lg:hidden w-8 h-8 rounded-full flex items-center justify-center bg-[#e5e7eb]" aria-label="Close">
            ×
          </button>
        )}
      </div>

      <div className="flex flex-col gap-6 p-5">
        <section>
          <h4 className="text-base font-bold text-[#131313] mb-3">Category</h4>
          <ul className="space-y-2">
            {CATEGORIES.map((c) => (
              <li key={c.id} className="flex items-center justify-between gap-3">
                <label htmlFor={`deal-cat-${c.id}`} className="flex-1 min-w-0 cursor-pointer text-sm text-[#131313]">
                  {c.label} <span className="text-[#767676]">({c.count.toLocaleString()})</span>
                </label>
                <input
                  id={`deal-cat-${c.id}`}
                  type="checkbox"
                  checked={filters.categories.includes(c.id)}
                  onChange={() => toggleCategory(c.id)}
                  className="shrink-0 w-4 h-4 rounded cursor-pointer accent-[#1e3a8a]"
                />
              </li>
            ))}
          </ul>
          <button type="button" className="mt-2 mx-auto text-sm text-[#1e3a8a] hover:underline flex items-center gap-1">
            See more
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </section>

        <section>
          <h4 className="text-base font-bold text-[#131313] mb-3">Time Left</h4>
          <ul className="space-y-2">
            {TIME_LEFT.map((t) => (
              <li key={t.id} className="flex items-center justify-between gap-3">
                <label htmlFor={`deal-time-${t.id}`} className="flex-1 cursor-pointer text-sm text-[#131313]">
                  {t.label}
                </label>
                <input
                  id={`deal-time-${t.id}`}
                  type="checkbox"
                  checked={filters.timeLeft.includes(t.id)}
                  onChange={() => toggleTimeLeft(t.id)}
                  className="shrink-0 w-4 h-4 rounded cursor-pointer accent-[#1e3a8a]"
                />
              </li>
            ))}
          </ul>
        </section>

        {(() => {
          const singleMain = MAIN_CATEGORIES.find((c) => filters.categories.includes(c));
          const subcategories = getSubcategoriesForMain(singleMain || 'Fashion & Apparel');
          if (subcategories.length === 0) return null;
          return (
            <section>
              <h4 className="text-base font-bold text-[#131313] mb-3">Sub-Categories</h4>
              <ul className="space-y-2">
                {subcategories.map((s) => (
                  <li key={s.id} className="flex items-center justify-between gap-3">
                    <label htmlFor={`deal-sub-${s.id}`} className="flex-1 min-w-0 cursor-pointer text-sm text-[#131313]">
                      {s.label}
                    </label>
                    <input
                      id={`deal-sub-${s.id}`}
                      type="checkbox"
                      checked={filters.selectedSubcategories.includes(s.id)}
                      onChange={() => {
                        const next = filters.selectedSubcategories.includes(s.id)
                          ? filters.selectedSubcategories.filter((id) => id !== s.id)
                          : [...filters.selectedSubcategories, s.id];
                        onFiltersChange({ ...filters, selectedSubcategories: next });
                      }}
                      className="shrink-0 w-4 h-4 rounded cursor-pointer accent-[#1e3a8a]"
                    />
                  </li>
                ))}
              </ul>
            </section>
          );
        })()}

        <section>
          <h4 className="text-base font-bold text-[#131313] mb-3">Brand</h4>
          <ul className="space-y-2">
            {BRANDS.map((b) => (
              <li key={b.id} className="flex items-center justify-between gap-3">
                <label htmlFor={`deal-brand-${b.id}`} className="flex-1 min-w-0 cursor-pointer text-sm text-[#131313]">
                  {b.label} <span className="text-[#767676]">({b.count})</span>
                </label>
                <input
                  id={`deal-brand-${b.id}`}
                  type="checkbox"
                  checked={filters.brands.includes(b.id)}
                  onChange={() => toggleBrand(b.id)}
                  className="shrink-0 w-4 h-4 rounded cursor-pointer accent-[#1e3a8a]"
                />
              </li>
            ))}
          </ul>
          <button type="button" className="mt-2  mx-auto text-sm text-[#1e3a8a] hover:underline flex items-center gap-1">
            See more
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </section>

        <section>
          <h4 className="text-base font-bold text-[#131313] mb-3">Customer Ratings</h4>
          <ul className="space-y-2">
            {[1, 2, 3, 4, 5].map((stars) => (
              <li key={stars} className="flex items-center justify-between gap-3">
                <label htmlFor={`deal-rating-${stars}`} className="flex-1 cursor-pointer flex items-center gap-1.5 text-sm text-[#131313]">
                  {stars} Star <StarRating count={stars} />
                </label>
                <input
                  id={`deal-rating-${stars}`}
                  type="checkbox"
                  checked={filters.ratings.includes(stars)}
                  onChange={() => toggleRating(stars)}
                  className="shrink-0 w-4 h-4 rounded cursor-pointer accent-[#1e3a8a]"
                />
              </li>
            ))}
          </ul>
          <button type="button" className="mt-2  mx-auto text-sm text-[#1e3a8a] hover:underline flex items-center gap-1">
            See more
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </section>

        <section>
          <h4 className="text-base font-bold text-[#131313] mb-3">Price</h4>
          <div className="relative h-6 flex items-center">
            <div className="absolute top-1/2 left-0 right-0 h-2 -translate-y-1/2 rounded-full bg-[#e5e7eb]" />
            <div
              className="absolute top-1/2 h-2 -translate-y-1/2 rounded-full bg-[#1e3a8a] pointer-events-none"
              style={{
                left: `${(filters.priceMin / MAX_PRICE) * 100}%`,
                width: `${((filters.priceMax - filters.priceMin) / MAX_PRICE) * 100}%`,
              }}
            />
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
              style={{ width: `${(filters.priceMax / MAX_PRICE) * 100}%` }}
            />
            <input
              type="range"
              min={filters.priceMin < MAX_PRICE ? filters.priceMin : MAX_PRICE - 1}
              max={MAX_PRICE}
              value={filters.priceMax}
              onChange={(e) => {
                const val = Number(e.target.value);
                setPriceRange(Math.min(val, filters.priceMin), val);
              }}
              className="price-range-input absolute top-1/2 left-0 h-2 -translate-y-1/2 w-full pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-moz-range-thumb]:pointer-events-auto"
              style={{
                width: `${((MAX_PRICE - filters.priceMin) / MAX_PRICE) * 100}%`,
                left: `${(filters.priceMin / MAX_PRICE) * 100}%`,
              }}
            />
          </div>
          <p className="text-sm text-[#131313] mt-2">
            ${filters.priceMin.toLocaleString()} - ${filters.priceMax.toLocaleString()}
          </p>
        </section>

        <section>
          <h4 className="text-base font-bold text-[#131313] mb-3">Color</h4>
          <ul className="space-y-2">
            {COLORS.map((c) => (
              <li key={c.id} className="flex items-center justify-between gap-3">
                <label htmlFor={`deal-color-${c.id}`} className="flex-1 cursor-pointer flex items-center gap-2 text-sm text-[#131313]">
                  <span className="w-5 h-5 rounded-full shrink-0 border border-[#e5e7eb]" style={{ backgroundColor: c.hex }} />
                  {c.label}
                </label>
                <input
                  id={`deal-color-${c.id}`}
                  type="radio"
                  name="deal-color"
                  checked={filters.colors.includes(c.id)}
                  onChange={() => toggleColor(c.id)}
                  className="shrink-0 w-4 h-4 cursor-pointer accent-[#1e3a8a]"
                />
              </li>
            ))}
          </ul>
          <button type="button" className="mt-2  mx-auto text-sm text-[#1e3a8a] hover:underline flex items-center gap-1">
            See more
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </section>

        <section>
          <h4 className="text-base font-bold text-[#131313] mb-3">Discount</h4>
          <ul className="space-y-2">
            {DISCOUNTS.map((d) => (
              <li key={d.id} className="flex items-center justify-between gap-3">
                <label htmlFor={`deal-discount-${d.id}`} className="flex-1 cursor-pointer text-sm text-[#131313]">
                  {d.label}
                </label>
                <input
                  id={`deal-discount-${d.id}`}
                  type="radio"
                  name="deal-discount"
                  checked={filters.discount === d.id}
                  onChange={() => setDiscount(filters.discount === d.id ? null : d.id)}
                  className="shrink-0 w-4 h-4 cursor-pointer accent-[#1e3a8a]"
                />
              </li>
            ))}
          </ul>
          <button type="button" className="mt-2  mx-auto text-sm text-[#1e3a8a] hover:underline flex items-center gap-1">
            See more
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
        <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" role="presentation" onClick={onClose} aria-hidden />
      )}
      <aside
        className={`bg-white rounded-2xl overflow-y-auto shrink-0 ${isOpen ? 'block' : 'hidden lg:block'} ${
          onClose ? 'fixed lg:relative inset-y-0 left-0 lg:inset-auto w-full max-w-[378px] lg:max-w-none lg:w-[338px] xl:w-[378px] z-50 lg:z-auto' : 'lg:w-[338px] xl:w-[378px]'
        }`}
        aria-label="Filters"
      >
        {content}
      </aside>
    </>
  );
}

export const initialDealFilters: DealFilterState = {
  categories: [],
  timeLeft: [],
  subCategories: [],
  selectedSubcategories: [],
  brands: [],
  ratings: [5],
  priceMin: 0,
  priceMax: MAX_PRICE,
  colors: [],
  discount: '90',
};
