'use client';

import Image from 'next/image';
import { ChevronDown, ShoppingCart, Heart } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { useState } from 'react';

const categories = [
  { id: 'all', label: 'Fashion & Apparel', icon: '👗' },
  { id: 'beauty', label: 'Beauty & Personal Care', icon: '🧴' },
  { id: 'home', label: 'Home & Living', icon: '🏠' },
  { id: 'jewelry', label: 'Jewelry & Watches', icon: '💍' },
  { id: 'electronics', label: 'Electronic & Gadgets', icon: '📱' },
  { id: 'toys', label: 'Toys & Kids', icon: '🧸' },
  { id: 'handmade', label: 'Handmade & Artisanal', icon: '✋' },
];

const products = [
  {
    name: 'Aloe Vera Face Serum',
    price: 229,
    rating: 4.8,
    reviews: '1.2K',
    image: '/images/signin.png',
    badges: ['SALE', 'NEW'],
  },
  {
    name: 'Vitamin C Serum',
    price: 189,
    rating: 4.9,
    reviews: '2.1K',
    image: '/images/create.png',
    badges: ['NEW'],
  },
  {
    name: 'Hydrating Face Cream',
    price: 149,
    rating: 4.7,
    reviews: '980',
    image: '/images/logo.png',
    badges: ['SALE'],
  },
  {
    name: 'Organic Face Oil',
    price: 199,
    rating: 4.8,
    reviews: '1.5K',
    image: '/images/forgot.png',
    badges: ['NEW', 'SALE'],
  },
];

export default function TopProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState('beauty');
  const [sortBy, setSortBy] = useState('Most Browsed');

  return (
    <section className="mt-8 sm:mt-10 lg:mt-12 bg-white py-6 sm:py-8" aria-label="Top products">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-design-18 sm:text-design-20 font-semibold text-[var(--color-black-01)] flex items-center gap-2">
          <span className="text-[var(--color-main-blue)]">📄</span>
          Top Products
        </h2>
        <div className="flex items-center gap-2">
          <label htmlFor="sort-top-products" className="text-design-14 sm:text-design-16 text-[var(--color-muted-alt-2)] shrink-0">
            Sort by
          </label>
          <div className="relative">
            <select
              id="sort-top-products"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="input-design min-h-[40px] py-2 px-4 pr-10 text-design-14 w-full sm:w-[180px] appearance-none cursor-pointer"
            >
              <option>Most Browsed</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-muted-alt)] pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        <aside className="lg:w-56 xl:w-64 shrink-0">
          <nav
            className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-hide"
            aria-label="Categories"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg text-design-14 sm:text-design-16 whitespace-nowrap shrink-0 lg:shrink-none transition ${
                  selectedCategory === cat.id
                    ? 'bg-amber-400 text-[var(--color-black)] font-medium'
                    : 'bg-[var(--color-black-01)] text-white hover:bg-[var(--color-black-01)]/90'
                }`}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </nav>
        </aside>

        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 flex-1 min-w-0">
          {products.map((product, i) => (
            <article
              key={i}
              className="bg-white rounded-xl border border-[var(--color-border)] overflow-hidden shadow-sm hover:shadow transition flex flex-col"
            >
              <div className="relative aspect-square bg-[var(--color-border)]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                <div className="absolute top-2 left-2 right-2 flex justify-between items-start">
                  <span className="bg-amber-400 text-[var(--color-black)] text-design-12 font-medium px-2 py-0.5 rounded">
                    {product.badges[0]}
                  </span>
                  <button
                    type="button"
                    className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white"
                    aria-label="Add to wishlist"
                  >
                    <Heart className="w-4 h-4 text-[var(--color-black)]" />
                  </button>
                </div>
                {product.badges.includes('NEW') && (
                  <span className="absolute top-2 right-2 bg-[var(--color-main-blue)] text-white text-design-12 font-medium px-2 py-0.5 rounded">
                    NEW
                  </span>
                )}
              </div>
              <div className="p-3 sm:p-4 flex flex-col flex-1">
                <p className="text-design-14 sm:text-design-16 font-medium text-[var(--color-black)] line-clamp-2 mb-1">
                  {product.name}
                </p>
                <p className="text-design-12 sm:text-design-14 text-[var(--color-muted-alt-2)] mb-2">
                  ⭐ {product.rating} ({product.reviews} Reviews)
                </p>
                <p className="text-design-16 sm:text-design-18 font-semibold text-[var(--color-black)] mb-3">
                  ${product.price}
                </p>
                <button
                  type="button"
                  className="mt-auto btn-secondary min-h-[40px] py-2 text-design-14 flex items-center justify-center gap-2 w-full"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
