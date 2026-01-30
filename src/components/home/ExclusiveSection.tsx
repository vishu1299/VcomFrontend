'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight, Heart, Play, ShoppingCart } from 'lucide-react';
import SectionHeader from './SectionHeader';

const products = [
  { name: 'NovaPulse Smartwatch', price: 229, image: '/images/signin.png' },
  { name: 'Velbob Classic Bomber Jacket', price: 115, image: '/images/create.png' },
  { name: 'Sonicidge Pro Headphones', price: 150, image: '/images/logo.png' },
  { name: 'DriftStep Sneakers', price: 84, image: '/images/forgot.png' },
  { name: 'Zenith Polarized Sunglasses', price: 64, image: '/images/otp.png' },
  { name: 'Elara Gold Perfume', price: 60, image: '/images/success.png' },
  { name: 'Astria Mini Tote Bag', price: 108, image: '/images/signin.png' },
  { name: 'Eclipse Chrono Watch', price: 390, image: '/images/create.png' },
];

export default function ExclusiveSection() {
  return (
    <section className="mt-8 sm:mt-10 lg:mt-12" aria-label="Exclusive on TibiMall">
      <SectionHeader
        title="Exclusive on TibiMall"
        viewAllHref="#"
        viewAllLabel="View All"
        icon={<span className="text-amber-400">⚡</span>}
      />

      <div className="relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
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
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <span className="absolute top-2 left-2 bg-violet-600 text-white text-design-12 font-medium px-2 py-0.5 rounded">
                  Exclusive
                </span>
                <button
                  type="button"
                  className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white"
                  aria-label="Wishlist"
                >
                  <Heart className="w-4 h-4 text-[var(--color-black)]" />
                </button>
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 hover:opacity-100 transition">
                  <span className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center border border-[var(--color-border)]">
                    <Play className="w-5 h-5 text-[var(--color-black)] ml-0.5" fill="currentColor" />
                  </span>
                </div>
              </div>
              <div className="p-3 sm:p-4 flex flex-col flex-1">
                <p className="text-design-14 sm:text-design-16 font-medium text-[var(--color-black)] line-clamp-2 mb-2">
                  {product.name}
                </p>
                <p className="text-design-16 sm:text-design-18 font-semibold text-[var(--color-black)] mb-3">
                  ${product.price}
                </p>
                <button
                  type="button"
                  className="mt-auto btn-cta-sm w-full flex items-center justify-center gap-2 text-design-14"
                >
                  <ShoppingCart className="w-4 h-4" />
                  ADD TO CART
                </button>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-6">
          <button
            type="button"
            className="w-10 h-10 rounded-full bg-[var(--color-border)] hover:bg-[var(--color-muted-alt-2)]/20 flex items-center justify-center transition"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-[var(--color-black)]" />
          </button>
          <span className="flex gap-1.5 items-center">
            {[1, 2, 3].map((i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === 1 ? 'bg-[var(--color-main-blue)]' : 'bg-[var(--color-border)]'
                }`}
              />
            ))}
          </span>
          <button
            type="button"
            className="w-10 h-10 rounded-full bg-[var(--color-border)] hover:bg-[var(--color-muted-alt-2)]/20 flex items-center justify-center transition"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-[var(--color-black)]" />
          </button>
        </div>
      </div>
    </section>
  );
}
