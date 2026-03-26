'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  ChevronDown,
  ShoppingCart,
  Eye,
  Play,
  LayoutGrid,
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

function GridIcon() {
  return (
    <LayoutGrid
      className="w-4 h-4 sm:w-5 sm:h-5 shrink-0"
      style={{ color: FIGMA.iconColor }}
      strokeWidth={2}
      aria-hidden
    />
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
      className={`bg-white overflow-hidden flex flex-col rounded-[10px] sm:rounded-[12px] border shadow-sm hover:shadow transition min-w-0 ${className}`}
      style={{
        borderColor: FIGMA.borderColor,
        backgroundColor: FIGMA.cardBg,
      }}
    >
      <div
        className="relative aspect-square"
        style={{ backgroundColor: FIGMA.imageBg }}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
        />
        {/* Badges top-left: SALE (amber), NEW (blue) */}
        <div className="absolute top-1.5 sm:top-2 left-1.5 sm:left-2 flex gap-1">
          {product.badges.includes('SALE') && (
            <span
              className="px-1.5 sm:px-2 py-0.5 rounded-[4px] font-medium text-[10px] sm:text-[12px]"
              style={{
                backgroundColor: FIGMA.saleBadge,
                color: FIGMA.titleColor,
                fontFamily: 'var(--font-poppins)',
              }}
            >
              SALE
            </span>
          )}
          {product.badges.includes('NEW') && (
            <span
              className="px-1.5 sm:px-2 py-0.5 rounded-[4px] font-medium text-[10px] sm:text-[12px] text-white"
              style={{
                backgroundColor: FIGMA.newBadge,
                fontFamily: 'var(--font-poppins)',
              }}
            >
              NEW
            </span>
          )}
        </div>
        {/* Watching badge top-right: Eye + count */}
        <div
          className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 flex items-center gap-0.5 sm:gap-1 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-white text-[9px] sm:text-[11px] font-medium"
          style={{
            backgroundColor: FIGMA.watchingBadge,
            fontFamily: 'var(--font-poppins)',
          }}
        >
          <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" strokeWidth={2} />
          {product.watching} Watching
        </div>
        {/* Play button center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            type="button"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition border touch-manipulation"
            style={{ borderColor: FIGMA.borderColor }}
            aria-label="Play"
          >
            <Play
              className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5 text-amber-500 fill-amber-500"
              strokeWidth={2}
            />
          </button>
        </div>
      </div>
      <div className="p-3 sm:p-4 flex flex-col flex-1 min-w-0">
        {/* Tags */}
        <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-1.5 sm:mb-2">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="px-1.5 sm:px-2 py-0.5 rounded-[4px] text-[9px] sm:text-[11px] font-normal"
              style={{
                color: FIGMA.mutedColor,
                backgroundColor: FIGMA.sectionBg,
                fontFamily: 'var(--font-poppins)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <p
          className="font-medium line-clamp-2 mb-0.5 sm:mb-1 text-[12px] sm:text-[14px]"
          style={{
            color: FIGMA.titleColor,
            fontFamily: 'var(--font-poppins)',
          }}
        >
          {product.name}
        </p>
        <p
          className="mb-1 sm:mb-2 text-[10px] sm:text-[12px]"
          style={{
            color: FIGMA.mutedColor,
            fontFamily: 'var(--font-poppins)',
          }}
        >
          ⭐ {product.rating} ({product.reviews} Reviews)
        </p>
        <p
          className="font-semibold mb-2 sm:mb-3 text-[14px] sm:text-[16px]"
          style={{
            color: FIGMA.titleColor,
            fontFamily: 'var(--font-poppins)',
          }}
        >
          ${product.price}
        </p>
        <button
          type="button"
          className="mt-auto min-h-[44px] sm:min-h-[40px] py-2 flex items-center justify-center gap-2 w-full rounded-[6px] font-medium border transition hover:bg-[#f9fafb] active:bg-[#f3f4f6] touch-manipulation text-[12px] sm:text-[14px]"
          style={{
            color: FIGMA.titleColor,
            borderColor: FIGMA.borderColor,
            fontFamily: 'var(--font-poppins)',
          }}
        >
          <ShoppingCart className="w-4 h-4 shrink-0" />
          ADD TO CART
        </button>
      </div>
    </article>
  );
}

export default function TopProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState('beauty');
  const [sortBy, setSortBy] = useState('Most Browsed');

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
          <GridIcon />
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
                  className={`flex items-center gap-2 px-4 py-3 rounded-[8px] whitespace-nowrap shrink-0 lg:shrink-none transition font-normal ${
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

        {/* Product grid — 2 cols mobile, 3 tablet, 4 desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 flex-1 min-w-0">
          {products.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
