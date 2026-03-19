'use client';

import { Star, ChevronDown } from 'lucide-react';

/** Figma: Frame radius 16px, padding 20px, gap 31px. Header 18px Medium #131313. Section titles 18px Medium. List value 14px Regular #131313, count #767676. Content left, checkbox right. */
const FIGMA = {
  radius: 16,
  padding: 20,
  gap: 31,
  border: '#e5e7eb',
  black: '#131313',
  muted: '#767676',
  red: '#dc2626',
  blue: '#1e3a8a',
  checkboxSize: 16,
  valueFontSize: 14,
} as const;

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
  { id: 'fashion', label: 'Fashion & Apparel', count: 2340 },
  { id: 'beauty', label: 'Beauty & Personal Care', count: 1204 },
  { id: 'home', label: 'Home & Living', count: 3102 },
  { id: 'jewelry', label: 'Jewelry & Watches', count: 560 },
  { id: 'electronics', label: 'Electronics & Gadgets', count: 700 },
  { id: 'handmade', label: 'Handmade & Artisanal', count: 7100 },
  { id: 'toys', label: 'Toys & Kids', count: 4450 },
  { id: 'spiritual', label: 'Spiritual & Cultural Goods', count: 7180 },
];

const BEST_SELLER = [
  { id: '7', label: 'Last 7 Days' },
  { id: '30', label: 'Last 30 Days' },
  { id: '90', label: 'Last 90 Days' },
];

const BRANDS = [
  { id: 'wool', label: 'WOOLTRED', count: 1890 },
  { id: 'easy', label: 'Easybuylove', count: 1204 },
  { id: 'nex', label: 'NexGribes', count: 1204 },
  { id: 'nik', label: 'NIK', count: 1204 },
  { id: 'tommy', label: 'Tommy Hilfiger', count: 21234 },
];

const COLORS = [
  { id: 'blue', label: 'Blue', hex: '#3b82f6', count: 322 },
  { id: 'white', label: 'White', hex: '#ffffff', count: 321 },
  { id: 'green', label: 'Green', hex: '#22c55e', count: 212 },
  { id: 'navy', label: 'Navy Blue', hex: '#1e3a8a', count: 700 },
  { id: 'black', label: 'Black', hex: '#131313', count: 212 },
  { id: 'red', label: 'Red', hex: '#dc2626', count: 212 },
  { id: 'brown', label: 'Brown', hex: '#92400e', count: 322 },
];

const DISCOUNTS = [
  { id: '10', label: '10% and above' },
  { id: '20', label: '20% and above' },
  { id: '30', label: '30% and above' },
  { id: '40', label: '40% and above' },
  { id: '50', label: '50% and above' },
  { id: '60', label: '60% and above' },
];

const MAX_PRICE = 20000;

type FilterSidebarProps = {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  onClearAll: () => void;
  isOpen?: boolean;
  onClose?: () => void;
};

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

  const toggleColor = (id: string) => {
    const next = filters.colors.includes(id)
      ? filters.colors.filter((c) => c !== id)
      : [...filters.colors, id];
    onFiltersChange({ ...filters, colors: next });
  };

  const setDiscount = (id: string | null) => {
    onFiltersChange({ ...filters, discount: filters.discount === id ? null : id });
  };

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
        className={`bg-white border shadow-sm overflow-y-auto shrink-0 ${isOpen ? 'block' : 'hidden lg:block'} ${
          onClose ? 'fixed lg:relative inset-y-0 left-0 lg:inset-auto w-full max-w-[378px] lg:max-w-none lg:w-[338px] xl:w-[320px] z-50 lg:z-auto' : 'lg:w-[338px] xl:w-[378px]'
        }`}
        style={{
          borderRadius: FIGMA.radius,
          borderColor: FIGMA.border,
          fontFamily: 'var(--font-poppins)',
        }}
        aria-label="Filters"
      >
        <div
          className="sticky top-0 bg-white flex items-center justify-between z-10 border-b"
          style={{ padding: FIGMA.padding, borderColor: FIGMA.border }}
        >
          <h3
            className="font-medium"
            style={{ fontSize: 18, lineHeight: '100%', color: FIGMA.black }}
          >
            Filters
          </h3>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClearAll}
              className="font-medium hover:underline"
              style={{ fontSize: 14, color: FIGMA.red }}
            >
              Clear All
            </button>
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="lg:hidden w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: FIGMA.border }}
                aria-label="Close filters"
              >
                ×
              </button>
            )}
          </div>
        </div>

        <div
          className="flex flex-col"
          style={{ padding: FIGMA.padding, gap: FIGMA.gap }}
        >
          <section>
            <h4
              className="font-medium mb-3"
              style={{ fontSize: 18, lineHeight: '100%', color: FIGMA.black }}
            >
              Categories
            </h4>
            <ul className="space-y-2">
              {CATEGORIES.map((c) => (
                <li key={c.id} className="flex items-center justify-between gap-3">
                  <label
                    htmlFor={`filter-cat-${c.id}`}
                    className="flex-1 min-w-0 cursor-pointer flex items-baseline gap-1 truncate"
                  >
                    <span style={{ fontSize: FIGMA.valueFontSize, fontWeight: 400, color: FIGMA.black }}>{c.label}</span>
                    <span style={{ fontSize: FIGMA.valueFontSize, fontWeight: 400, color: FIGMA.muted }}> ({c.count})</span>
                  </label>
                  <input
                    id={`filter-cat-${c.id}`}
                    type="checkbox"
                    checked={filters.categories.includes(c.id)}
                    onChange={() => toggleCategory(c.id)}
                    className="shrink-0 rounded border cursor-pointer"
                    style={{
                      width: FIGMA.checkboxSize,
                      height: FIGMA.checkboxSize,
                      borderColor: FIGMA.border,
                      accentColor: FIGMA.blue,
                    }}
                  />
                </li>
              ))}
            </ul>
            <button type="button" className="mt-2 w-full flex items-center justify-center gap-1 hover:underline font-normal" style={{ fontSize: 14, color: FIGMA.blue }}>
              See more <ChevronDown className="w-4 h-4 shrink-0" />
            </button>
          </section>

          <hr className="border-t" style={{ borderColor: FIGMA.border }} />

          <section>
            <h4
              className="font-medium mb-3"
              style={{ fontSize: 18, lineHeight: '100%', color: FIGMA.black }}
            >
              Best Seller
            </h4>
            <ul className="space-y-2">
              {BEST_SELLER.map((b) => (
                <li key={b.id} className="flex items-center justify-between gap-3">
                  <label
                    htmlFor={`filter-best-${b.id}`}
                    className="flex-1 min-w-0 cursor-pointer truncate"
                    style={{ fontSize: FIGMA.valueFontSize, fontWeight: 400, color: FIGMA.black }}
                  >
                    {b.label}
                  </label>
                  <input
                    id={`filter-best-${b.id}`}
                    type="checkbox"
                    checked={filters.bestSeller === b.id}
                    onChange={() => setBestSeller(b.id)}
                    className="shrink-0 rounded border cursor-pointer"
                    style={{
                      width: FIGMA.checkboxSize,
                      height: FIGMA.checkboxSize,
                      borderColor: FIGMA.border,
                      accentColor: FIGMA.blue,
                    }}
                  />
                </li>
              ))}
            </ul>
            <button type="button" className="mt-2 w-full flex items-center justify-center gap-1 hover:underline font-normal" style={{ fontSize: 14, color: FIGMA.blue }}>
              See more <ChevronDown className="w-4 h-4 shrink-0" />
            </button>
          </section>

          <hr className="border-t" style={{ borderColor: FIGMA.border }} />

          <section>
            <h4
              className="font-medium mb-3"
              style={{ fontSize: 18, lineHeight: '100%', color: FIGMA.black }}
            >
              Brand
            </h4>
            <ul className="space-y-2">
              {BRANDS.map((b) => (
                <li key={b.id} className="flex items-center justify-between gap-3">
                  <label
                    htmlFor={`filter-brand-${b.id}`}
                    className="flex-1 min-w-0 cursor-pointer flex items-baseline gap-1 truncate"
                  >
                    <span style={{ fontSize: FIGMA.valueFontSize, fontWeight: 400, color: FIGMA.black }}>{b.label}</span>
                    <span style={{ fontSize: FIGMA.valueFontSize, fontWeight: 400, color: FIGMA.muted }}> ({b.count})</span>
                  </label>
                  <input
                    id={`filter-brand-${b.id}`}
                    type="checkbox"
                    checked={filters.brands.includes(b.id)}
                    onChange={() => toggleBrand(b.id)}
                    className="shrink-0 rounded border cursor-pointer"
                    style={{
                      width: FIGMA.checkboxSize,
                      height: FIGMA.checkboxSize,
                      borderColor: FIGMA.border,
                      accentColor: FIGMA.blue,
                    }}
                  />
                </li>
              ))}
            </ul>
            <button type="button" className="mt-2 w-full flex items-center justify-center gap-1 hover:underline font-normal" style={{ fontSize: 14, color: FIGMA.blue }}>
              See more <ChevronDown className="w-4 h-4 shrink-0" />
            </button>
          </section>

          <hr className="border-t" style={{ borderColor: FIGMA.border }} />

          <section>
            <h4
              className="font-medium mb-3"
              style={{ fontSize: 18, lineHeight: '100%', color: FIGMA.black }}
            >
              Customer Ratings
            </h4>
            <ul className="space-y-2">
              {[1,2,3,4,5].map((stars) => (
                <li key={stars} className="flex items-center justify-between gap-3">
                  <label
                    htmlFor={`filter-rating-${stars}`}
                    className="flex-1 min-w-0 cursor-pointer flex items-center gap-1"
                    style={{ fontSize: FIGMA.valueFontSize, fontWeight: 400, color: FIGMA.black }}
                  >
                    {stars} Star
                    {Array.from({ length: stars }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0" />
                    ))}
                  </label>
                  <input
                    id={`filter-rating-${stars}`}
                    type="checkbox"
                    checked={filters.ratings.includes(stars)}
                    onChange={() => toggleRating(stars)}
                    className="shrink-0 rounded border cursor-pointer"
                    style={{
                      width: FIGMA.checkboxSize,
                      height: FIGMA.checkboxSize,
                      borderColor: FIGMA.border,
                      accentColor: FIGMA.blue,
                    }}
                  />
                </li>
              ))}
            </ul>
            <button type="button" className="mt-2 w-full flex items-center justify-center gap-1 hover:underline font-normal" style={{ fontSize: 14, color: FIGMA.blue }}>
              See more <ChevronDown className="w-4 h-4 shrink-0" />
            </button>
          </section>

          <hr className="border-t" style={{ borderColor: FIGMA.border }} />

          <section>
            <h4
              className="font-medium mb-3"
              style={{ fontSize: 18, lineHeight: '100%', color: FIGMA.black }}
            >
              Price
            </h4>
            <div className="relative h-6 flex items-center mb-2">
              <div
                className="absolute top-1/2 left-0 right-0 h-2 -translate-y-1/2 rounded-full"
                style={{ backgroundColor: FIGMA.border }}
              />
              <div
                className="absolute top-1/2 h-2 -translate-y-1/2 rounded-full pointer-events-none"
                style={{
                  left: `${(filters.priceMin / MAX_PRICE) * 100}%`,
                  width: `${((filters.priceMax - filters.priceMin) / MAX_PRICE) * 100}%`,
                  backgroundColor: FIGMA.blue,
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
                className="price-range-input absolute top-1/2 left-0 h-2 -translate-y-1/2 w-full pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-moz-range-thumb]:pointer-events-auto rounded-full appearance-none cursor-pointer"
                style={{ accentColor: FIGMA.blue, width: `${(filters.priceMax / MAX_PRICE) * 100}%` }}
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
                className="price-range-input absolute top-1/2 left-0 h-2 -translate-y-1/2 w-full pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-moz-range-thumb]:pointer-events-auto rounded-full appearance-none cursor-pointer"
                style={{
                  accentColor: FIGMA.blue,
                  width: `${((MAX_PRICE - filters.priceMin) / MAX_PRICE) * 100}%`,
                  left: `${(filters.priceMin / MAX_PRICE) * 100}%`,
                }}
              />
            </div>
            <p style={{ fontSize: 14, color: FIGMA.black }}>
              ${filters.priceMin} - ${filters.priceMax}
            </p>
          </section>

          <hr className="border-t" style={{ borderColor: FIGMA.border }} />

          <section>
            <h4
              className="font-medium mb-3"
              style={{ fontSize: 18, lineHeight: '100%', color: FIGMA.black }}
            >
              Color
            </h4>
            <ul className="space-y-2">
              {COLORS.map((c) => (
                <li key={c.id} className="flex items-center justify-between gap-3">
                  <label
                    htmlFor={`filter-color-${c.id}`}
                    className="flex-1 min-w-0 cursor-pointer flex items-center gap-2 truncate"
                  >
                    <span
                      className="w-5 h-5 rounded-full shrink-0 border"
                      style={{ backgroundColor: c.hex, borderColor: c.hex === '#ffffff' ? FIGMA.border : 'transparent' }}
                    />
                    <span style={{ fontSize: FIGMA.valueFontSize, fontWeight: 400, color: FIGMA.black }}>{c.label}</span>
                    <span style={{ fontSize: FIGMA.valueFontSize, fontWeight: 400, color: FIGMA.muted }}> ({c.count})</span>
                  </label>
                  <input
                    id={`filter-color-${c.id}`}
                    type="checkbox"
                    checked={filters.colors.includes(c.id)}
                    onChange={() => toggleColor(c.id)}
                    className="shrink-0 rounded border cursor-pointer"
                    style={{
                      width: FIGMA.checkboxSize,
                      height: FIGMA.checkboxSize,
                      borderColor: FIGMA.border,
                      accentColor: FIGMA.blue,
                    }}
                  />
                </li>
              ))}
            </ul>
            <button type="button" className="mt-2 w-full flex items-center justify-center gap-1 hover:underline font-normal" style={{ fontSize: 14, color: FIGMA.blue }}>
              See more <ChevronDown className="w-4 h-4 shrink-0" />
            </button>
          </section>

          <hr className="border-t" style={{ borderColor: FIGMA.border }} />

          <section>
            <h4
              className="font-medium mb-3"
              style={{ fontSize: 18, lineHeight: '100%', color: FIGMA.black }}
            >
              Discount
            </h4>
            <ul className="space-y-2">
              {DISCOUNTS.map((d) => (
                <li key={d.id} className="flex items-center justify-between gap-3">
                  <label
                    htmlFor={`filter-discount-${d.id}`}
                    className="flex-1 min-w-0 cursor-pointer truncate"
                    style={{ fontSize: FIGMA.valueFontSize, fontWeight: 400, color: FIGMA.black }}
                  >
                    {d.label}
                  </label>
                  <input
                    id={`filter-discount-${d.id}`}
                    type="radio"
                    name="discount"
                    checked={filters.discount === d.id}
                    onChange={() => setDiscount(d.id)}
                    className="shrink-0 cursor-pointer"
                    style={{ accentColor: FIGMA.blue }}
                  />
                </li>
              ))}
            </ul>
            <button type="button" className="mt-2 w-full flex items-center justify-center gap-1 hover:underline font-normal" style={{ fontSize: 14, color: FIGMA.blue }}>
              See more <ChevronDown className="w-4 h-4 shrink-0" />
            </button>
          </section>
        </div>
      </aside>
    </>
  );
}

export const initialFilters: FilterState = {
  categories: [],
  bestSeller: null,
  brands: [],
  ratings: [],
  priceMin: 0,
  priceMax: 20000,
  colors: [],
  discount: null,
};
