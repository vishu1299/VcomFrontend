'use client';

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import {
  Baby,
  BookOpen,
  ChevronDown,
  ChevronRight,
  Cpu,
  Dumbbell,
  Footprints,
  Gem,
  Home,
  Palette,
  Shirt,
  ShoppingBag,
  Sparkles,
  Sun,
  Watch,
  type LucideIcon,
} from 'lucide-react';

type SubCategory = { label: string; count: number; icon: LucideIcon };
type PrimaryCategory = {
  id: string;
  label: string;
  icon: LucideIcon;
  subs: SubCategory[];
};

const BROWSE_MEGA_DATA: PrimaryCategory[] = [
  {
    id: 'fashion',
    label: 'Fashion & Apparel',
    icon: Shirt,
    subs: [
      { label: "Men's", count: 4390, icon: Shirt },
      { label: "Women's", count: 289, icon: Sparkles },
      { label: 'Kids & Baby', count: 4390, icon: Baby },
      { label: 'Jackets & Outerwear', count: 4390, icon: Shirt },
      { label: 'Ethnic & Cultural', count: 4390, icon: Palette },
      { label: 'Shoes & Footwear', count: 4390, icon: Footprints },
      { label: 'Bags & Backpacks', count: 4390, icon: ShoppingBag },
      { label: 'Hats & Accessories', count: 4390, icon: Sun },
    ],
  },
  {
    id: 'beauty',
    label: 'Beauty & Personal Care',
    icon: Sparkles,
    subs: [
      { label: 'Skincare', count: 1204, icon: Sparkles },
      { label: 'Makeup', count: 892, icon: Palette },
      { label: 'Hair Care', count: 567, icon: Sun },
      { label: 'Fragrance', count: 340, icon: Gem },
    ],
  },
  {
    id: 'home',
    label: 'Home & Living',
    icon: Home,
    subs: [
      { label: 'Furniture', count: 2100, icon: Home },
      { label: 'Decor', count: 1540, icon: Sun },
      { label: 'Kitchen', count: 980, icon: Palette },
      { label: 'Bedding', count: 720, icon: Shirt },
    ],
  },
  {
    id: 'jewelry',
    label: 'Jewelry & Watches',
    icon: Watch,
    subs: [
      { label: 'Watches', count: 890, icon: Watch },
      { label: 'Rings', count: 650, icon: Gem },
      { label: 'Necklaces', count: 520, icon: Sparkles },
      { label: 'Bracelets', count: 410, icon: Gem },
    ],
  },
  {
    id: 'electronics',
    label: 'Electronics & Gadgets',
    icon: Cpu,
    subs: [
      { label: 'Phones', count: 3200, icon: Cpu },
      { label: 'Audio', count: 890, icon: Sparkles },
      { label: 'Wearables', count: 560, icon: Watch },
      { label: 'Accessories', count: 1200, icon: Home },
    ],
  },
  {
    id: 'handmade',
    label: 'Handmade & Artisanal',
    icon: Palette,
    subs: [
      { label: 'Art', count: 430, icon: Palette },
      { label: 'Crafts', count: 780, icon: Sparkles },
      { label: 'Gifts', count: 560, icon: Gem },
    ],
  },
  {
    id: 'toys',
    label: 'Toys & Kids',
    icon: Baby,
    subs: [
      { label: 'Learning', count: 340, icon: BookOpen },
      { label: 'Outdoor', count: 290, icon: Sun },
      { label: 'Games', count: 510, icon: Sparkles },
    ],
  },
  {
    id: 'spiritual',
    label: 'Spiritual & Cultural Goods',
    icon: BookOpen,
    subs: [
      { label: 'Books', count: 220, icon: BookOpen },
      { label: 'Ritual', count: 180, icon: Sparkles },
      { label: 'Decor', count: 95, icon: Home },
    ],
  },
  {
    id: 'wellness',
    label: 'Lifestyle & Wellness',
    icon: Dumbbell,
    subs: [
      { label: 'Fitness', count: 670, icon: Dumbbell },
      { label: 'Nutrition', count: 440, icon: Sparkles },
      { label: 'Mindfulness', count: 210, icon: Sun },
    ],
  },
  {
    id: 'seasonal',
    label: 'Seasonal & Limited Edition',
    icon: Sun,
    subs: [
      { label: 'Holiday', count: 120, icon: Sun },
      { label: 'Limited drops', count: 85, icon: Gem },
    ],
  },
];

const MAIN_BLUE = '#1E3A8A';

export function BrowseCategoriesBarRow({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeId, setActiveId] = useState(BROWSE_MEGA_DATA[0].id);
  const [panelPos, setPanelPos] = useState({ top: 0, left: 0 });
  const rowRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const updatePosition = useCallback(() => {
    const row = rowRef.current;
    const trigger = triggerRef.current;
    const panel = panelRef.current;
    if (!row) return;
    const r = row.getBoundingClientRect();
    const pad = 16;
    // Align panel left edge with the Browse Categories button, not the row container edge
    let left = trigger ? trigger.getBoundingClientRect().left : r.left;
    if (panel) {
      const pr = panel.getBoundingClientRect();
      if (pr.right > window.innerWidth - pad) {
        left = Math.max(pad, window.innerWidth - pad - pr.width);
      }
    }
    setPanelPos({ top: r.bottom, left });
  }, []);

  useLayoutEffect(() => {
    if (!open) return;
    updatePosition();
    const id = requestAnimationFrame(() => updatePosition());
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [open, activeId, updatePosition]);

  useLayoutEffect(() => {
    if (!open || !panelRef.current) return;
    const ro = new ResizeObserver(() => updatePosition());
    ro.observe(panelRef.current);
    return () => ro.disconnect();
  }, [open, updatePosition]);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      const t = e.target as Node;
      if (
        rowRef.current?.contains(t) ||
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

  const active = BROWSE_MEGA_DATA.find((c) => c.id === activeId) ?? BROWSE_MEGA_DATA[0];
  const ActiveIcon = active.icon;

  return (
    <div
      ref={rowRef}
      className="max-w-[1920px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-[136px] py-2 border-b border-[#e5e7eb]"
    >
      <div className="flex flex-nowrap items-center gap-3 sm:gap-4 min-w-0">
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-haspopup="dialog"
          aria-controls="browse-categories-mega-panel"
          className="flex items-center gap-2 h-9 px-3 sm:px-4 rounded-sm text-white text-[14px] font-medium shrink-0 transition hover:opacity-95"
          style={{ backgroundColor: MAIN_BLUE, fontFamily: 'var(--font-poppins)' }}
        >
          Browse Categories
          <ChevronDown
            className={`w-4 h-4 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
            aria-hidden
          />
        </button>
        <div
          className="flex-1 min-w-0 overflow-x-auto overflow-y-hidden scrollbar-hide overscroll-x-contain"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {children}
        </div>
      </div>

      {open &&
        mounted &&
        createPortal(
          <div
            ref={panelRef}
            id="browse-categories-mega-panel"
            role="dialog"
            aria-label="Browse categories"
            className="fixed z-[200] max-h-[min(85vh,720px)] w-max max-w-[calc(100vw-32px)] overflow-hidden rounded-xl border border-[#e5e7eb] bg-white shadow-[0_16px_48px_rgba(0,0,0,0.12)]"
            style={{
              top: panelPos.top,
              left: panelPos.left,
              fontFamily: 'var(--font-poppins)',
            }}
          >
            <div
              className="max-h-[min(85vh,720px)] overflow-y-auto overscroll-contain scrollbar-hide"
              style={{ scrollbarWidth: 'none' }}
            >
              <div className="flex min-h-[min(50vh,420px)] gap-0 overflow-hidden">
                <nav
                  className="w-[272px] shrink-0 border-r border-[#e5e7eb] bg-white py-2 sm:w-[280px]"
                  aria-label="Main categories"
                >
                  <ul className="flex flex-col gap-0.5 px-1">
                    {BROWSE_MEGA_DATA.map((cat) => {
                      const Icon = cat.icon;
                      const isActive = cat.id === activeId;
                      return (
                        <li key={cat.id}>
                          <button
                            type="button"
                            onMouseEnter={() => setActiveId(cat.id)}
                            onFocus={() => setActiveId(cat.id)}
                            onClick={() => setActiveId(cat.id)}
                            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[13px] font-medium text-[#131313] transition sm:text-[14px] ${
                              isActive
                                ? 'bg-[#eff6ff] text-[#131313]'
                                : 'hover:bg-[#f9fafb]'
                            }`}
                          >
                            <Icon
                              className="h-5 w-5 shrink-0 text-[#131313] opacity-80"
                              strokeWidth={1.75}
                              aria-hidden
                            />
                            <span className="min-w-0 flex-1 leading-snug">{cat.label}</span>
                            <ChevronRight
                              className="h-4 w-4 shrink-0 text-[#9ca3af]"
                              aria-hidden
                            />
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                <div className="w-max max-w-[520px] min-w-0 shrink-0 bg-[#fafafa] p-4 sm:p-5 md:p-6">
                  <div className="mb-3 flex items-center gap-2 text-[13px] font-semibold text-[#131313] sm:text-[14px]">
                    <ActiveIcon className="h-5 w-5 shrink-0 opacity-80" strokeWidth={1.75} />
                    <span>{active.label}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {active.subs.map((sub) => {
                      const SubIcon = sub.icon;
                      return (
                        <Link
                          key={sub.label}
                          href="/product-list"
                          onClick={close}
                          className="inline-flex items-center gap-2 rounded-full border border-transparent bg-[#f3f4f6] px-3 py-2 text-[12px] font-medium text-[#131313] transition hover:border-[#e5e7eb] hover:bg-[#e5e7eb]/60 sm:px-3.5 sm:text-[13px]"
                        >
                          <SubIcon
                            className="h-4 w-4 shrink-0 text-[#131313]/70"
                            strokeWidth={1.75}
                            aria-hidden
                          />
                          <span>{sub.label}</span>
                          <span className="text-[#6b7280]">({sub.count.toLocaleString()})</span>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mt-5 border-t border-[#e5e7eb] pt-4">
                    <Link
                      href="/product-categories"
                      onClick={close}
                      className="text-[13px] font-medium text-[#1E3A8A] hover:underline"
                    >
                      View all categories
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
