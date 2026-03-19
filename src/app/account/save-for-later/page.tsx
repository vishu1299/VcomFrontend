'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import { Search, Heart, ShoppingCart, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';

interface SavedProduct {
  id: string;
  name: string;
  price: string;
  image: string;
  sale?: boolean;
  liveNow?: boolean;
}

interface RelatedProduct {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  sale?: boolean;
  isNew?: boolean;
}

const MOCK_SAVED: SavedProduct[] = [
  { id: '1', name: 'iPhone 17 Pro 256 GB: 15.93 cm (6.3") Display', price: '$299.00', image: '/images/phone.png', sale: true, liveNow: true },
  { id: '2', name: 'iPhone 17 Pro 256 GB: 15.93 cm (6.3") Display', price: '$299.00', image: '/images/phone2.jpg', sale: true, liveNow: true },
  { id: '3', name: 'iPhone 17 Pro 256 GB: 15.93 cm (6.3") Display', price: '$299.00', image: '/images/phone.png', sale: true },
  { id: '4', name: 'iPhone 17 Pro 256 GB: 15.93 cm (6.3") Display', price: '$299.00', image: '/images/phone2.jpg', sale: true, liveNow: true },
  { id: '5', name: 'iPhone 17 Pro 256 GB: 15.93 cm (6.3") Display', price: '$299.00', image: '/images/phone.png', sale: true, liveNow: true },
  { id: '6', name: 'iPhone 17 Pro 256 GB: 15.93 cm (6.3") Display', price: '$299.00', image: '/images/phone2.jpg', sale: true, liveNow: true },
  { id: '7', name: 'iPhone 17 Pro 256 GB: 15.93 cm (6.3") Display', price: '$299.00', image: '/images/phone.png', sale: true },
  { id: '8', name: 'iPhone 17 Pro 256 GB: 15.93 cm (6.3") Display', price: '$299.00', image: '/images/phone2.jpg', sale: true, liveNow: true },
];

const MOCK_RELATED: RelatedProduct[] = [
  { id: 'r1', name: 'Apple iPhone X 256GB 3GB RAM', price: '$29', originalPrice: '$33', image: '/images/phone2.jpg', sale: true, isNew: true },
  { id: 'r2', name: 'Apple iPhone X 256GB 3GB RAM', price: '$29', originalPrice: '$33', image: '/images/phone.png', sale: true, isNew: true },
  { id: 'r3', name: 'Apple iPhone X 256GB 3GB RAM', price: '$29', originalPrice: '$33', image: '/images/phone2.jpg', sale: true },
  { id: 'r4', name: 'Apple iPhone X 256GB 3GB RAM', price: '$29', originalPrice: '$33', image: '/images/phone.png', sale: true, isNew: true },
  { id: 'r5', name: 'Apple iPhone X 256GB 3GB RAM', price: '$29', originalPrice: '$33', image: '/images/phone2.jpg', sale: true },
];

const dropdownArrowStyle = { backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%236b7280\' stroke-width=\'2\'%3E%3Cpath d=\'M6 9l6 6 6-6\'/%3E%3C/svg%3E")' };

function SavedProductCard({ product, onRemove }: { product: SavedProduct; onRemove: (id: string) => void }) {
  const [saved, setSaved] = useState(true);

  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-white overflow-hidden shadow-sm">
      <div className="relative aspect-square bg-white-100">
        <Image src={product.image} alt={product.name} fill className="object-contain" />
        <div className="absolute top-1.5 sm:top-2 left-1.5 sm:left-2 flex flex-wrap gap-1 sm:gap-1.5">
          {product.sale && (
            <span className="rounded px-1 sm:px-1.5 py-0.5 text-[9px] sm:text-[10px] font-medium text-black" style={{ backgroundColor: '#FFD93D' }}>
              SALE
            </span>
          )}
          {product.liveNow && (
            <span className="rounded px-1 sm:px-1.5 py-0.5 text-[9px] sm:text-[10px] font-medium text-white flex items-center gap-0.5 sm:gap-1" style={{ backgroundColor: '#DC2626' }}>
              <span className="w-1 h-1 rounded-full bg-white" />
              LIVE NOW
            </span>
          )}
        </div>
        <button
          type="button"
          className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 p-1 sm:p-1.5 rounded-full bg-white/90 hover:bg-white border border-gray-200"
          onClick={() => setSaved(!saved)}
          aria-label={saved ? 'Remove from saved' : 'Save'}
        >
          <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${saved ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} strokeWidth={1.5} />
        </button>
      </div>
      <div className="p-2 sm:p-3">
        <p className="text-xs sm:text-sm font-medium text-[var(--color-black-01)] line-clamp-2 mb-0.5 sm:mb-1">{product.name}</p>
        <p className="text-xs sm:text-sm font-bold mb-2 sm:mb-3" style={{ color: '#1E3A8A' }}>{product.price}</p>
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            className="flex-1 min-w-0 inline-flex items-center justify-center gap-1 sm:gap-1.5 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium border text-black hover:bg-gray-50"
            style={{ borderColor: '#D2D2D2' }}
          >
            <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span className="sm:hidden">Add</span>
            <span className="hidden sm:inline">Add to Cart</span>
          </button>
          <button
            type="button"
            className="p-1.5 sm:p-2 rounded-full text-red-500 hover:opacity-90 flex items-center justify-center shrink-0"
            style={{ backgroundColor: '#F3F7FA' }}
            onClick={() => onRemove(product.id)}
            aria-label="Remove"
          >
            <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
          <button type="button" className="p-1.5 sm:p-2 rounded-lg text-gray-600 hover:bg-gray-50 flex items-center justify-center shrink-0" aria-label="Share">
            <Image src="/share.svg" alt="" width={20} height={20} className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function RelatedProductCard({ product }: { product: RelatedProduct }) {
  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-white overflow-hidden shadow-sm shrink-0 w-[150px] sm:w-[220px]">
      <div className="relative aspect-square bg-white-100">
        <Image src={product.image} alt={product.name} fill className="object-contain" />
        <div className="absolute top-1.5 sm:top-2 left-1.5 sm:left-2 flex flex-wrap gap-1 sm:gap-1.5">
          {product.sale && (
            <span className="rounded px-1 sm:px-1.5 py-0.5 text-[9px] sm:text-[10px] font-medium text-black" style={{ backgroundColor: '#FFD93D' }}>
              SALE
            </span>
          )}
          {product.isNew && (
            <span className="rounded px-1 sm:px-1.5 py-0.5 text-[9px] sm:text-[10px] font-medium text-white" style={{ backgroundColor: '#60A5FA' }}>
              NEW
            </span>
          )}
        </div>
        <button type="button" className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 p-1 sm:p-1.5 rounded-full bg-white/90 border border-gray-200" aria-label="Save">
          <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" strokeWidth={1.5} />
        </button>
      </div>
      <div className="p-2 sm:p-3">
        <p className="text-xs sm:text-sm font-medium text-[var(--color-black-01)] line-clamp-2 mb-1 sm:mb-2">{product.name}</p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
          <div className="flex items-baseline gap-1 sm:gap-2">
            <span className="text-xs sm:text-base font-bold text-black">{product.price}</span>
            {product.originalPrice && (
              <span className="text-[10px] sm:text-sm line-through" style={{ color: '#A6A6A6' }}>
                {product.originalPrice}
              </span>
            )}
          </div>
          <button
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-0.5 sm:gap-1 py-1 sm:py-1.5 px-1.5 sm:px-2 rounded-lg text-[10px] sm:text-xs font-medium border text-black hover:bg-gray-50"
            style={{ borderColor: '#D2D2D2' }}
          >
            <ShoppingCart className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default function SaveForLaterPage() {
  const [search, setSearch] = useState('');
  const [dateFilter, setDateFilter] = useState('This Month');
  const [priceFilter, setPriceFilter] = useState('Above $300');
  const [savedProducts, setSavedProducts] = useState<SavedProduct[]>(MOCK_SAVED);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleRemoveSaved = (id: string) => {
    setSavedProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const scrollCarousel = (dir: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const step = 240;
    carouselRef.current.scrollBy({ left: dir === 'left' ? -step : step, behavior: 'smooth' });
  };

  return (
    <div className="p-6 lg:p-8">
      {/* Header: title + search + filters - no white bg */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-black-01)] mb-1">Saved for later</h1>
          <p className="text-[14px] text-[var(--color-muted-alt-2)]">Here&apos;s your saved products</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[180px] max-w-[280px]">
            <input
              type="text"
              placeholder="Search product"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full min-h-[40px] pl-3 pr-10 py-2 text-sm border rounded-lg outline-none focus:border-[var(--color-main-blue)] placeholder:text-[#767676]"
              style={{ borderColor: '#D2D2D2', color: '#767676' }}
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-muted-alt-2)] pointer-events-none" />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm text-[var(--color-black-01)] whitespace-nowrap">Date</label>
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="min-h-[40px] pl-3 pr-8 text-sm border border-[var(--color-border-input)] rounded-lg bg-white outline-none focus:border-[var(--color-main-blue)] appearance-none bg-no-repeat bg-[length:16px] bg-[right_10px_center]"
              style={dropdownArrowStyle}
            >
              <option value="This Month">This Month</option>
              <option value="Last Month">Last Month</option>
              <option value="This Year">This Year</option>
              <option value="Last 3 Months">Last 3 Months</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm text-[var(--color-black-01)] whitespace-nowrap">Price</label>
            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="min-h-[40px] pl-3 pr-8 text-sm border border-[var(--color-border-input)] rounded-lg bg-white outline-none focus:border-[var(--color-main-blue)] appearance-none bg-no-repeat bg-[length:16px] bg-[right_10px_center]"
              style={dropdownArrowStyle}
            >
              <option value="Above $1000">Above $1000</option>
              <option value="Above $300">Above $300</option>
              <option value="Above $100">Above $100</option>
              <option value="Any">Any</option>
            </select>
          </div>
        </div>
      </div>

      {/* Saved for later - one outer box: gray border, rounded, white bg */}
      <div className="bg-white p-0 mb-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {savedProducts.map((product) => (
            <SavedProductCard key={product.id} product={product} onRemove={handleRemoveSaved} />
          ))}
        </div>
      </div>

      {/* Item related to Saved Items - align first card with saved grid; arrows half over first/last card */}
      <div className="mb-6 overflow-visible">
        <h2 className="text-lg font-bold text-[var(--color-black-01)] mb-4">Item related to Saved Items</h2>
        <div className="relative overflow-visible">
          <button
            type="button"
            onClick={() => scrollCarousel('left')}
            className="absolute left10 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-white border border-[var(--color-border)] flex items-center justify-center hover:bg-gray-50 shadow-md"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto scroll-smooth py-2 pl-0 pr-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {MOCK_RELATED.map((product) => (
              <RelatedProductCard key={product.id} product={product} />
            ))}
          </div>
          <button
            type="button"
            onClick={() => scrollCarousel('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-10 h-10 rounded-full bg-white border border-[var(--color-border)] flex items-center justify-center hover:bg-gray-50 shadow-md"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
