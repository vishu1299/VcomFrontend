'use client';

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Search, X } from 'lucide-react';

const MAIN_BLUE = '#1E3A8A';

type SearchMode = 'brand' | 'vendor' | 'category';

const MODES: { id: SearchMode; label: string }[] = [
  { id: 'brand', label: 'Search by Brand' },
  { id: 'vendor', label: 'Search by Vendor' },
  { id: 'category', label: 'Search by Category' },
];

const MOCK_BRAND = {
  name: 'Nike',
  logo: '/images/logo.png',
};

const MOCK_PRODUCTS: { brand: string; name: string; image: string }[] = [
  { brand: 'Nike', name: 'Shoes for man', image: '/images/signin.png' },
  { brand: 'Nike', name: 'Sneakers for man', image: '/images/create.png' },
  { brand: 'Nike', name: 'Shoes for woman', image: '/images/logo.png' },
  { brand: 'Nike', name: 'Slidders', image: '/images/forgot.png' },
  { brand: 'Nike', name: 'air jordan 1', image: '/images/otp.png' },
];

function matchesNikeQuery(q: string) {
  const s = q.trim().toLowerCase();
  return s.length >= 2 && (s.includes('nik') || s.includes('nike'));
}

function CategorySearchPanelBody({
  searchMode,
  setSearchMode,
  innerQuery,
  setInnerQuery,
}: {
  searchMode: SearchMode;
  setSearchMode: (m: SearchMode) => void;
  innerQuery: string;
  setInnerQuery: (q: string) => void;
}) {
  const showNikeDemo = matchesNikeQuery(innerQuery);

  return (
    <div
      className="p-3 sm:p-4 md:p-5"
      style={{ fontFamily: 'var(--font-poppins)' }}
    >
      {/* Search mode — pills with radio on the right */}
      <div
        className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-stretch"
        role="radiogroup"
        aria-label="Search mode"
      >
        {MODES.map(({ id, label }) => {
          const active = searchMode === id;
          return (
            <button
              key={id}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setSearchMode(id)}
              className={`grid w-full min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-0.5 rounded-full border px-4 py-2.5 text-left text-[12px] font-medium transition sm:min-w-[160px] sm:flex-1 md:min-w-[180px] md:text-[13px] ${
                active
                  ? 'border-[#1E3A8A] bg-[#eff6ff]/60 text-[#131313]'
                  : 'border-[#e5e7eb] bg-white text-[#131313] hover:border-[#d1d5db]'
              }`}
            >
              <span className="min-w-0 text-left leading-snug">{label}</span>
              <span
                className={`flex h-4 w-4 shrink-0 items-center justify-center justify-self-end rounded-full border-2 ${
                  active
                    ? 'border-[#1E3A8A] bg-[#1E3A8A]'
                    : 'border-[#9ca3af] bg-white'
                }`}
                aria-hidden
              >
                {active && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-4 sm:mt-5">
        <label
          htmlFor="header-category-inner-search"
          className="mb-1.5 block text-[11px] font-medium text-[#767676] sm:text-[12px]"
        >
          Search
        </label>
        <input
          id="header-category-inner-search"
          type="search"
          value={innerQuery}
          onChange={(e) => setInnerQuery(e.target.value)}
          placeholder="Search brands, vendors…"
          className="h-11 w-full rounded-lg border border-[#d1d5db] bg-white px-3 text-[13px] text-[#131313] placeholder:text-[#9ca3af] focus:border-[#1E3A8A] focus:outline-none focus:ring-1 focus:ring-[#1E3A8A]/30 sm:h-12 sm:px-4 sm:text-[14px]"
          autoComplete="off"
        />
      </div>

      {showNikeDemo && (
        <>
          <div className="mt-3 border-t border-[#f0f0f0] pt-3">
            <Link
              href="/product-list"
              className="flex items-center gap-3 rounded-lg px-2 py-2.5 transition hover:bg-[#f9fafb]"
            >
              <Search className="h-4 w-4 shrink-0 text-[#9ca3af]" aria-hidden />
              <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-[#f3f4f6] ring-1 ring-[#e5e7eb]">
                <Image
                  src={MOCK_BRAND.logo}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              </span>
              <span className="text-[14px] font-medium text-[#131313]">
                {MOCK_BRAND.name}
              </span>
            </Link>
          </div>

          <div className="mt-4 border-t border-[#f0f0f0] pt-4">
            <p className="mb-2 text-[11px] font-medium uppercase tracking-wide text-[#9ca3af] sm:text-[12px]">
              Product Suggestions
            </p>
            <ul className="flex flex-col gap-0.5">
              {MOCK_PRODUCTS.map((p, i) => (
                <li key={i}>
                  <Link
                    href="/product-list"
                    className="flex items-center gap-3 rounded-lg px-2 py-2.5 transition hover:bg-[#f9fafb]"
                  >
                    <Search
                      className="h-4 w-4 shrink-0 text-[#9ca3af]"
                      aria-hidden
                    />
                    <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-md bg-[#f3f4f6] ring-1 ring-[#e5e7eb]">
                      <Image
                        src={p.image}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </span>
                    <span className="min-w-0 text-[13px] leading-snug text-[#131313] sm:text-[14px]">
                      <span className="font-normal">{p.brand}</span>{' '}
                      <span className="font-semibold">{p.name}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {!showNikeDemo && innerQuery.trim().length > 0 && (
        <p className="mt-4 text-center text-[13px] text-[#767676]">
          No matches. Try typing <span className="font-medium">Nik</span> for a
          sample.
        </p>
      )}
    </div>
  );
}

/** Desktop: All Categories + main search + dropdown aligned to full bar width */
export function DesktopCategorySearchBar() {
  const [open, setOpen] = useState(false);
  const [searchMode, setSearchMode] = useState<SearchMode>('brand');
  const [innerQuery, setInnerQuery] = useState('');
  const [mounted, setMounted] = useState(false);
  const [panelPos, setPanelPos] = useState({ top: 0, left: 0, width: 0 });
  const rootRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!open || !rootRef.current) return;
    const update = () => {
      const el = rootRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      setPanelPos({ top: r.bottom + 4, left: r.left, width: r.width });
    };
    update();
    window.addEventListener('resize', update);
    window.addEventListener('scroll', update, true);
    return () => {
      window.removeEventListener('resize', update);
      window.removeEventListener('scroll', update, true);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      const t = e.target as Node;
      if (
        rootRef.current?.contains(t) ||
        panelRef.current?.contains(t)
      ) {
        return;
      }
      close();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open, close]);

  return (
    <div ref={rootRef} className="relative w-full min-w-0 lg:py-1">
      <div className="flex w-full min-w-0 overflow-visible rounded-lg border border-[#d1d5db] bg-white focus-within:border-[#1E3A8A] focus-within:ring-1 focus-within:ring-[#1E3A8A]">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-haspopup="dialog"
          className="flex h-10 shrink-0 items-center gap-1.5 rounded-none border-r border-[#1E3A8A]/30 px-3 text-[12px] font-medium text-white lg:gap-2 lg:px-4 lg:text-[14px]"
          style={{ backgroundColor: MAIN_BLUE }}
        >
          All Categories
          <ChevronDown
            className={`h-3.5 w-3.5 shrink-0 transition-transform lg:h-4 lg:w-4 ${open ? 'rotate-180' : ''}`}
          />
        </button>
        <input
          type="search"
          className="h-10 min-w-0 flex-1 border-0 bg-white px-3 text-[12px] text-[#131313] placeholder:text-[#767676] focus:outline-none focus:ring-0 lg:px-4 lg:text-[14px]"
          placeholder="Search for products..."
        />
        <button
          type="button"
          className="h-10 shrink-0 border-l border-[#1E3A8A]/30 px-4 text-[12px] font-medium text-white lg:px-5 lg:text-[14px]"
          style={{ backgroundColor: MAIN_BLUE }}
        >
          Search
        </button>
      </div>

      {open &&
        mounted &&
        createPortal(
          <div
            ref={panelRef}
            role="dialog"
            aria-label="Search by category"
            className="fixed z-[200] max-h-[min(80vh,560px)] overflow-y-auto rounded-lg border border-[#e5e7eb] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.12)] scrollbar-hide"
            style={{
              top: panelPos.top,
              left: panelPos.left,
              width: Math.max(panelPos.width, 280),
              scrollbarWidth: 'none',
            }}
          >
            <CategorySearchPanelBody
              searchMode={searchMode}
              setSearchMode={setSearchMode}
              innerQuery={innerQuery}
              setInnerQuery={setInnerQuery}
            />
          </div>,
          document.body
        )}
    </div>
  );
}

/** Mobile: full-screen sheet with same panel */
export function MobileCategorySearchSheet() {
  const [open, setOpen] = useState(false);
  const [searchMode, setSearchMode] = useState<SearchMode>('brand');
  const [innerQuery, setInnerQuery] = useState('');

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <div className="flex w-full min-w-0 flex-col gap-2">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex h-10 w-full items-center justify-center gap-2 rounded-full border border-[#1E3A8A]/40 bg-[#1E3A8A] px-4 text-[13px] font-semibold text-white shadow-sm"
        >
          All Categories
          <ChevronDown className="h-4 w-4" />
        </button>
        <div className="flex h-10 min-w-0 items-stretch rounded-full border border-[#e5e7eb] bg-[#f9fafb] pl-3 pr-1.5 focus-within:border-[#1E3A8A] focus-within:bg-white focus-within:ring-1 focus-within:ring-[#1E3A8A]/25">
          <input
            type="search"
            enterKeyHint="search"
            className="min-h-0 min-w-0 flex-1 bg-transparent py-2 text-[13px] text-[#131313] placeholder:text-[#9ca3af] focus:outline-none focus:ring-0"
            placeholder="Search products..."
          />
          <button
            type="button"
            className="my-1 flex h-8 w-8 shrink-0 items-center justify-center self-center rounded-full text-white"
            style={{ backgroundColor: MAIN_BLUE }}
            aria-label="Search"
          >
            <Search className="h-4 w-4" strokeWidth={2.25} />
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex flex-col bg-white lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="All categories search"
        >
          <div className="flex items-center justify-between border-b border-[#e5e7eb] px-4 py-3">
            <h2 className="text-[16px] font-semibold text-[#131313]">
              All Categories
            </h2>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-[#131313] hover:bg-[#f3f4f6]"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto">
            <CategorySearchPanelBody
              searchMode={searchMode}
              setSearchMode={setSearchMode}
              innerQuery={innerQuery}
              setInnerQuery={setInnerQuery}
            />
          </div>
        </div>
      )}
    </>
  );
}
