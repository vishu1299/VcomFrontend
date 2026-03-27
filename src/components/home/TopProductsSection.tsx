'use client';

import { useState, useRef, useCallback, type SyntheticEvent } from 'react';
import Image from 'next/image';
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Eye,
  Play,
  Shirt,
  Sparkles,
  Home,
  Gem,
  Smartphone,
  Baby,
  Hand,
} from 'lucide-react';

/** Figma: section #F8F8FA, title #1F1D2B 20-24px, icon #8B5CF6, sidebar #1F1D2B, cards white 12px radius */
const FIGMA = {
  sectionBg: '#F8F8FA',
  titleColor: '#1F1D2B',
  titleSize: 'clamp(20px, 2.5vw, 24px)',
  iconColor: '#8B5CF6',
  mutedColor: '#767676',
  mutedSize: 14,
  borderColor: '#E5E7EB',
  cardRadius: 12,
  cardBg: '#FFFFFF',
  imageBg: '#F7F7F7',
  sidebarBg: '#1F1D2B',
  sidebarRadius: 8,
  headerPaddingTop: 30,
  headerPaddingX: 15,
  headerGap: 8,
  categoryWidth: 264,
  saleBadge: '#FBBF24',
  newBadge: '#1E3A8A',
  watchingBadge: 'rgba(0,0,0,0.5)',
} as const;

const CATEGORY_ICONS = {
  all: Shirt,
  beauty: Sparkles,
  home: Home,
  jewelry: Gem,
  electronics: Smartphone,
  toys: Baby,
  handmade: Hand,
} as const;

const categories = [
  { id: 'all', label: 'Fashion & Apparel' },
  { id: 'beauty', label: 'Beauty & Personal Care' },
  { id: 'home', label: 'Home & Living' },
  { id: 'jewelry', label: 'Jewelry & Watches' },
  { id: 'electronics', label: 'Electronic & Gadgets' },
  { id: 'toys', label: 'Toys & Kids' },
  { id: 'handmade', label: 'Handmade & Artisanal' },
];

const products = [
  {
    name: 'Aloe Vera Face Serum',
    price: 229,
    rating: 4.9,
    reviews: '349',
    watching: '2.8K',
    image: '/images/signin.png',
    badges: ['SALE', 'NEW'],
    tags: ['DRY SKIN', '30ML', 'NATURAL'],
  },
  {
    name: 'Vitamin C Serum',
    price: 189,
    rating: 4.9,
    reviews: '2.1K',
    watching: '1.5K',
    image: '/images/create.png',
    badges: ['NEW'],
    tags: ['OILY SKIN', '50ML', 'ORGANIC'],
  },
  {
    name: 'Hydrating Face Cream',
    price: 149,
    rating: 4.7,
    reviews: '980',
    watching: '890',
    image: '/images/logo.png',
    badges: ['SALE'],
    tags: ['ALL SKIN', '60ML', 'HYPOALLERGENIC'],
  },
  {
    name: 'Organic Face Oil',
    price: 199,
    rating: 4.8,
    reviews: '1.5K',
    watching: '1.2K',
    image: '/images/forgot.png',
    badges: ['NEW', 'SALE'],
    tags: ['DRY SKIN', '30ML', 'NATURAL'],
  },
];

function samplePlayTintFromImage(img: HTMLImageElement): string {
  try {
    const w = img.naturalWidth;
    const h = img.naturalHeight;
    if (!w || !h) return '#262626';
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return '#262626';
    const sw = Math.min(48, Math.floor(w * 0.2));
    const sh = Math.min(48, Math.floor(h * 0.2));
    const sx = Math.floor(w / 2 - sw / 2);
    const sy = Math.floor(h / 2 - sh / 2);
    canvas.width = sw;
    canvas.height = sh;
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, sw, sh);
    const data = ctx.getImageData(0, 0, sw, sh).data;
    let r = 0;
    let g = 0;
    let b = 0;
    let count = 0;
    for (let i = 0; i < data.length; i += 4) {
      if (data[i + 3] < 40) continue;
      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
      count += 1;
    }
    if (!count) return '#262626';
    r = Math.round(r / count);
    g = Math.round(g / count);
    b = Math.round(b / count);
    const darken = 0.72;
    r = Math.min(255, Math.round(r * darken));
    g = Math.min(255, Math.round(g * darken));
    b = Math.min(255, Math.round(b * darken));
    return `rgb(${r},${g},${b})`;
  } catch {
    return '#262626';
  }
}

function AdaptivePlayControl({ imageSrc }: { imageSrc: string }) {
  const [tint, setTint] = useState('#262626');

  const onHiddenImageLoad = useCallback((e: SyntheticEvent<HTMLImageElement>) => {
    setTint(samplePlayTintFromImage(e.currentTarget));
  }, []);

  return (
    <>
      {/* Same-origin image used only to sample center pixels for play icon tint */}
      <img
        src={imageSrc}
        alt=""
        width={1}
        height={1}
        className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0"
        aria-hidden
        onLoad={onHiddenImageLoad}
      />
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <button
          type="button"
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/95 shadow-md transition hover:scale-105 active:scale-95 sm:h-12 sm:w-12"
          style={{ borderColor: FIGMA.borderColor }}
          aria-label="Play"
        >
          <Play
            className="ml-0.5 h-5 w-5 sm:h-6 sm:w-6"
            style={{ color: tint, fill: tint }}
            fill="currentColor"
            strokeWidth={0}
          />
        </button>
      </div>
    </>
  );
}

function ProductCard({
  product,
  className = '',
}: {
  product: (typeof products)[0];
  className?: string;
}) {
  return (
    <article
      className={`relative h-[min(420px,78vw)] w-[min(280px,72vw)] shrink-0 snap-start overflow-hidden rounded-2xl shadow-md transition hover:shadow-lg sm:h-[440px] sm:w-[300px] ${className}`}
      style={{ fontFamily: 'var(--font-poppins)' }}
    >
      <Image
        src={product.image}
        alt={product.name}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 72vw, 300px"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10"
        aria-hidden
      />
      {/* Badges top-left: SALE, NEW — no avatar / s&d overlay */}
      <div className="absolute left-2 top-2 z-10 flex flex-wrap gap-1 sm:left-3 sm:top-3">
        {product.badges.includes('SALE') && (
          <span
            className="rounded px-2 py-0.5 text-[10px] font-semibold sm:text-[11px]"
            style={{
              backgroundColor: FIGMA.saleBadge,
              color: FIGMA.titleColor,
            }}
          >
            SALE
          </span>
        )}
        {product.badges.includes('NEW') && (
          <span
            className="rounded px-2 py-0.5 text-[10px] font-semibold text-white sm:text-[11px]"
            style={{ backgroundColor: FIGMA.newBadge }}
          >
            NEW
          </span>
        )}
      </div>
      {/* Watching: eye + count only (reference) */}
      <div
        className="absolute right-2 top-2 z-10 flex items-center gap-1 rounded-lg px-2 py-1 text-[10px] font-medium text-white sm:right-3 sm:top-3 sm:text-[11px]"
        style={{ backgroundColor: FIGMA.watchingBadge }}
      >
        <Eye className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" strokeWidth={2} />
        {product.watching}
      </div>
      <AdaptivePlayControl imageSrc={product.image} />
      <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col gap-2 p-3 sm:p-4">
        <div className="flex flex-wrap gap-1">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-black/25 px-1.5 py-0.5 text-[9px] font-normal text-white/95 backdrop-blur-[2px] sm:text-[10px]"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="line-clamp-2 text-[15px] font-semibold leading-snug text-white sm:text-[16px]">
          {product.name}
        </p>
        <p className="text-[11px] text-white/85 sm:text-[12px]">
          <span className="text-amber-300">★</span> {product.rating} (
          {product.reviews} Reviews)
        </p>
        <div className="flex items-center justify-between gap-2 pt-0.5">
          <span className="text-[22px] font-bold leading-none text-white sm:text-2xl">
            ${product.price}
          </span>
          <button
            type="button"
            className="flex shrink-0 items-center gap-1.5 rounded-md border border-white/90 bg-transparent px-2.5 py-2 text-[10px] font-semibold uppercase tracking-wide text-white transition hover:bg-white/10 sm:gap-2 sm:px-3 sm:text-[11px]"
          >
            <ShoppingCart className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            ADD TO CART
          </button>
        </div>
      </div>
    </article>
  );
}

export default function TopProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState('beauty');
  const [sortBy, setSortBy] = useState('Most Browsed');
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (dir: 'left' | 'right') => {
    const el = carouselRef.current;
    if (!el) return;
    const step = Math.max(280, Math.floor(el.clientWidth * 0.75));
    el.scrollBy({ left: dir === 'left' ? -step : step, behavior: 'smooth' });
  };

  return (
    <section
      className="w-full min-w-0 overflow-hidden rounded-2xl py-4 sm:py-6 lg:py-8 px-3 sm:px-4 md:px-5 lg:px-6"
      style={{
        backgroundColor: FIGMA.sectionBg,
        fontFamily: 'var(--font-poppins)',
      }}
      aria-label="Top products"
    >
      {/* Header: Title + Sort */}
      <div
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6 pt-4 sm:pt-6 lg:pt-8"
      >
        <h2
          className="font-semibold flex items-center gap-2 text-[18px] sm:text-[20px] lg:text-[24px]"
          style={{
            lineHeight: '100%',
            color: FIGMA.titleColor,
          }}
        >
          <Image
            src="/images/top.png"
            alt=""
            width={24}
            height={24}
            className="h-5 w-5 shrink-0 object-contain sm:h-6 sm:w-6"
            aria-hidden
          />
          Top Products
        </h2>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <label
            htmlFor="sort-top-products"
            className="font-normal shrink-0 text-[13px] sm:text-[14px]"
            style={{ color: FIGMA.mutedColor }}
          >
            Sort by
          </label>
          <div className="relative flex-1 sm:flex-initial min-w-0 sm:min-w-[140px] lg:min-w-[180px]">
            <select
              id="sort-top-products"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full min-h-[44px] sm:h-10 pl-3 sm:pl-4 pr-10 appearance-none cursor-pointer bg-white border rounded-[6px] font-normal focus:outline-none focus:ring-1 focus:ring-[#1E3A8A] text-[13px] sm:text-[14px]"
              style={{
                fontSize: FIGMA.mutedSize,
                color: FIGMA.titleColor,
                borderColor: FIGMA.borderColor,
                fontFamily: 'var(--font-poppins)',
              }}
            >
              <option>Most Browsed</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
            <ChevronDown
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none shrink-0"
              style={{ color: FIGMA.mutedColor }}
            />
          </div>
        </div>
      </div>

      {/* Main: Category sidebar + Product grid */}
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
        {/* Category sidebar — dark #1F1D2B, vertical on desktop */}
        <aside
          className="w-full max-w-full shrink-0 rounded-[8px] p-2 lg:w-[264px] lg:max-w-none"
          style={{ backgroundColor: FIGMA.sidebarBg }}
        >
          <nav
            className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-hide"
            aria-label="Categories"
          >
            {categories.map((cat) => {
              const Icon = CATEGORY_ICONS[cat.id as keyof typeof CATEGORY_ICONS];
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-[5px] whitespace-nowrap shrink-0 lg:shrink-none transition font-normal ${
                    selectedCategory === cat.id
                      ? 'bg-amber-400 text-[#1F1D2B] font-medium'
                      : 'text-white hover:opacity-90'
                  }`}
                  style={{
                    fontSize: FIGMA.mutedSize,
                    fontFamily: 'var(--font-poppins)',
                  }}
                >
                  {Icon && (
                    <Icon
                      className="w-4 h-4 shrink-0"
                      strokeWidth={2}
                      aria-hidden
                    />
                  )}
                  {cat.label}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Product carousel — matches reference; no s&d / avatar overlay */}
        <div className="relative min-w-0 flex-1">
          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 scrollbar-hide sm:gap-4 md:gap-5"
          >
            {products.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
          <button
            type="button"
            onClick={() => scrollCarousel('left')}
            className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-x-1 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-border)] bg-white/95 shadow-md transition hover:bg-white md:flex"
            aria-label="Previous products"
          >
            <ChevronLeft className="h-5 w-5" style={{ color: FIGMA.titleColor }} />
          </button>
          <button
            type="button"
            onClick={() => scrollCarousel('right')}
            className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 translate-x-1 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-border)] bg-white/95 shadow-md transition hover:bg-white md:flex"
            aria-label="Next products"
          >
            <ChevronRight className="h-5 w-5" style={{ color: FIGMA.titleColor }} />
          </button>
        </div>
      </div>
    </section>
  );
}
