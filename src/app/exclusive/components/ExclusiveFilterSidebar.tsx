'use client';

import { Star, ChevronDown, X } from 'lucide-react';
import {
  CATEGORIES,
  SUB_CATEGORIES,
  BRANDS,
  COLORS,
  DISCOUNT_OPTIONS,
  type ExclusiveFilterState,
} from '../data/filters';

const SIDEBAR = {
  border: '#e5e7eb',
  text: '#131313',
  textMuted: '#6b7280',
  clearRed: '#dc2626',
  accentBlue: '#2563eb',
  checkboxSize: 16,
} as const;

type ExclusiveFilterSidebarProps = {
  filters: ExclusiveFilterState;
  onFiltersChange: (f: ExclusiveFilterState) => void;
  onClearAll: () => void;
  isOpen?: boolean;
  onClose?: () => void;
};

export default function ExclusiveFilterSidebar({
  filters,
  onFiltersChange,
  onClearAll,
  isOpen = true,
  onClose,
}: ExclusiveFilterSidebarProps) {
  const toggleCategory = (id: string) => {
    const next = filters.categories.includes(id) ? filters.categories.filter((x) => x !== id) : [...filters.categories, id];
    onFiltersChange({ ...filters, categories: next });
  };
  const toggleSubCategory = (id: string) => {
    const next = filters.subCategories.includes(id) ? filters.subCategories.filter((x) => x !== id) : [...filters.subCategories, id];
    onFiltersChange({ ...filters, subCategories: next });
  };
  const toggleBrand = (id: string) => {
    const next = filters.brands.includes(id) ? filters.brands.filter((x) => x !== id) : [...filters.brands, id];
    onFiltersChange({ ...filters, brands: next });
  };
  const toggleRating = (stars: number) => {
    const next = filters.ratings.includes(stars) ? filters.ratings.filter((r) => r !== stars) : [...filters.ratings, stars];
    onFiltersChange({ ...filters, ratings: next });
  };
  const toggleColor = (id: string) => {
    const next = filters.colors.includes(id) ? filters.colors.filter((x) => x !== id) : [...filters.colors, id];
    onFiltersChange({ ...filters, colors: next });
  };
  const setPriceMax = (max: number) => onFiltersChange({ ...filters, priceMax: max });
  const setDiscount = (id: string | null) => onFiltersChange({ ...filters, discount: filters.discount === id ? null : id });

  const SeeMoreLink = () => (
    <button type="button" className="mt-1.5 flex items-center gap-1 text-[12px] font-normal text-[var(--color-muted-alt)] hover:underline">
      See more <ChevronDown className="w-3.5 h-3.5 shrink-0" />
    </button>
  );

  const CheckRow = ({
    id,
    htmlFor,
    checked,
    onToggle,
    children,
  }: {
    id: string;
    htmlFor: string;
    checked: boolean;
    onToggle: () => void;
    children: React.ReactNode;
  }) => (
    <li className="flex items-center justify-between gap-2 py-0.5">
      <label htmlFor={htmlFor} className="flex-1 min-w-0 cursor-pointer truncate text-[13px] font-normal" style={{ color: SIDEBAR.text }}>
        {children}
      </label>
      <input
        id={htmlFor}
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        className="shrink-0 rounded cursor-pointer border-2 border-[#d1d5db] bg-white checked:bg-[var(--color-main-blue)] checked:border-[var(--color-main-blue)]"
        style={{ width: SIDEBAR.checkboxSize, height: SIDEBAR.checkboxSize, accentColor: SIDEBAR.accentBlue }}
      />
    </li>
  );

  return (
    <>
      {onClose && isOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" role="presentation" onClick={onClose} onKeyDown={(e) => e.key === 'Escape' && onClose()} aria-hidden />
      )}
      <aside
        className={`bg-[#fafaf8] overflow-y-auto shrink-0 rounded-b-xl ${
          onClose
            ? `${!isOpen ? 'hidden lg:block' : 'block'} fixed lg:relative inset-y-0 left-0 lg:inset-auto w-full max-w-[85vw] sm:max-w-[300px] lg:max-w-none lg:w-[240px] xl:w-[260px] h-full max-h-screen lg:h-auto lg:max-h-none z-50 lg:z-auto shadow-xl lg:shadow-none border border-[var(--color-border)] lg:border-0`
            : 'lg:w-[240px] xl:w-[260px] rounded-b-xl border border-[var(--color-border)]'
        }`}
        style={{ fontFamily: 'var(--font-poppins)' }}
        aria-label="Filters"
      >
        {/* Header: Filters (bold) | Clear All (red) */}
        <div className="sticky top-0 bg-[#fafaf8] z-10 border-b border-[var(--color-border)] px-3 py-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-[14px] sm:text-[15px]" style={{ color: SIDEBAR.text }}>
              Filters
            </h3>
            <div className="flex items-center gap-2">
              <button type="button" onClick={onClearAll} className="font-medium text-[12px] hover:underline" style={{ color: SIDEBAR.clearRed }}>
                Clear All
              </button>
              {onClose && (
                <button type="button" onClick={onClose} className="lg:hidden w-8 h-8 rounded-full flex items-center justify-center border border-[var(--color-border)]" aria-label="Close">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="px-3 py-4 flex flex-col gap-7 bg-[#fafaf8]">
          {/* Categories */}
          <section>
            <h4 className="font-bold text-[13px] sm:text-[14px] mb-2.5" style={{ color: SIDEBAR.text }}>
              Categories
            </h4>
            <ul className="space-y-0">
              {CATEGORIES.map((c) => (
                <CheckRow key={c.id} id={c.id} htmlFor={`ex-cat-${c.id}`} checked={filters.categories.includes(c.id)} onToggle={() => toggleCategory(c.id)}>
                  <><span>{c.label}</span> <span style={{ color: SIDEBAR.textMuted }}>({c.count.toLocaleString()})</span></>
                </CheckRow>
              ))}
            </ul>
            <SeeMoreLink />
          </section>

          <hr className="border-t border-[var(--color-border)]" />

          {/* Sub-Categories */}
          <section>
            <h4 className="font-bold text-[13px] sm:text-[14px] mb-2.5" style={{ color: SIDEBAR.text }}>
              Sub-Categories
            </h4>
            <ul className="space-y-0">
              {SUB_CATEGORIES.map((c) => (
                <CheckRow key={c.id} id={c.id} htmlFor={`ex-sub-${c.id}`} checked={filters.subCategories.includes(c.id)} onToggle={() => toggleSubCategory(c.id)}>
                  <><span>{c.label}</span> <span style={{ color: SIDEBAR.textMuted }}>({c.count.toLocaleString()})</span></>
                </CheckRow>
              ))}
            </ul>
            <SeeMoreLink />
          </section>

          <hr className="border-t border-[var(--color-border)]" />

          {/* Brand */}
          <section>
            <h4 className="font-bold text-[13px] sm:text-[14px] mb-2.5" style={{ color: SIDEBAR.text }}>
              Brand
            </h4>
            <ul className="space-y-0">
              {BRANDS.map((b) => (
                <CheckRow key={b.id} id={b.id} htmlFor={`ex-brand-${b.id}`} checked={filters.brands.includes(b.id)} onToggle={() => toggleBrand(b.id)}>
                  <><span>{b.label}</span> <span style={{ color: SIDEBAR.textMuted }}>({b.count.toLocaleString()})</span></>
                </CheckRow>
              ))}
            </ul>
            <SeeMoreLink />
          </section>

          <hr className="border-t border-[var(--color-border)]" />

          {/* Customer Ratings */}
          <section>
            <h4 className="font-bold text-[13px] sm:text-[14px] mb-2.5" style={{ color: SIDEBAR.text }}>
              Customer Ratings
            </h4>
            <ul className="space-y-0">
              {[1, 2, 3, 4, 5].map((stars) => (
                <CheckRow key={stars} id={`rating-${stars}`} htmlFor={`ex-rating-${stars}`} checked={filters.ratings.includes(stars)} onToggle={() => toggleRating(stars)}>
                  <span className="flex items-center gap-1">{stars} Star {Array.from({ length: stars }).map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />)}</span>
                </CheckRow>
              ))}
            </ul>
            <SeeMoreLink />
          </section>

          <hr className="border-t border-[var(--color-border)]" />

          {/* Price */}
          <section>
            <h4 className="font-bold text-[13px] sm:text-[14px] mb-2.5" style={{ color: SIDEBAR.text }}>
              Price
            </h4>
            <div className="mb-2">
              <input
                type="range"
                min={12}
                max={20000}
                value={filters.priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer bg-[#e5e7eb] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[var(--color-main-blue)] [&::-webkit-slider-thumb]:cursor-pointer"
                style={{ accentColor: 'var(--color-main-blue)' }}
              />
            </div>
            <p className="font-medium text-[12px] sm:text-[13px]" style={{ color: SIDEBAR.text }}>
              ${filters.priceMin} - ${filters.priceMax.toLocaleString()}
            </p>
          </section>

          <hr className="border-t border-[var(--color-border)]" />

          {/* Color */}
          <section>
            <h4 className="font-bold text-[13px] sm:text-[14px] mb-2.5" style={{ color: SIDEBAR.text }}>
              Color
            </h4>
            <ul className="space-y-0">
              {COLORS.map((c) => (
                <CheckRow key={c.id} id={c.id} htmlFor={`ex-color-${c.id}`} checked={filters.colors.includes(c.id)} onToggle={() => toggleColor(c.id)}>
                  <span className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full shrink-0 border border-[var(--color-border)]" style={{ backgroundColor: c.hex }} />
                    <span>{c.label}</span>
                    <span style={{ color: SIDEBAR.textMuted }}>({c.count})</span>
                  </span>
                </CheckRow>
              ))}
            </ul>
            <SeeMoreLink />
          </section>

          <hr className="border-t border-[var(--color-border)]" />

          {/* Discount - radio buttons */}
          <section>
            <h4 className="font-bold text-[13px] sm:text-[14px] mb-2.5" style={{ color: SIDEBAR.text }}>
              Discount
            </h4>
            <ul className="space-y-0">
              {DISCOUNT_OPTIONS.map((d) => (
                <li key={d.id} className="flex items-center justify-between gap-2 py-0.5">
                  <label htmlFor={`ex-discount-${d.id}`} className="flex-1 min-w-0 cursor-pointer truncate text-[13px] font-normal" style={{ color: SIDEBAR.text }}>
                    {d.label}
                  </label>
                  <input
                    id={`ex-discount-${d.id}`}
                    type="radio"
                    name="exclusive-discount"
                    checked={filters.discount === d.id}
                    onChange={() => setDiscount(filters.discount === d.id ? null : d.id)}
                    className="shrink-0 w-4 h-4 cursor-pointer"
                    style={{ accentColor: SIDEBAR.accentBlue }}
                  />
                </li>
              ))}
            </ul>
            <SeeMoreLink />
          </section>
        </div>
      </aside>
    </>
  );
}
