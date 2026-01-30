'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react';
import SectionHeader from './SectionHeader';

const categories = [
  { name: "Men's Fashion", image: '/images/signin.png' },
  { name: "Women's Clothing", image: '/images/create.png' },
  { name: 'Shoes', image: '/images/logo.png' },
  { name: 'Watches', image: '/images/forgot.png' },
  { name: 'Accessories', image: '/images/otp.png' },
  { name: 'Home & Decor', image: '/images/success.png' },
  { name: 'Toys & Kids', image: '/images/signin.png' },
  { name: 'Jewellery', image: '/images/create.png' },
  { name: 'Makeup', image: '/images/logo.png' },
  { name: 'Personal Care', image: '/images/forgot.png' },
];

export default function ShopByCategorySection() {
  return (
    <section className="mt-8 sm:mt-10 lg:mt-12" aria-label="Shop by category">
      <SectionHeader
        title="Shop by Category"
        viewAllHref="#"
        viewAllLabel="View All"
        icon={<LayoutGrid className="w-5 h-5 text-[var(--color-black-01)]" />}
      />

      <div className="relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {categories.map((cat, i) => (
            <article
              key={i}
              className="bg-white rounded-xl overflow-hidden border border-[var(--color-border)] shadow-sm hover:shadow transition group"
            >
              <a href="#" className="block">
                <div className="relative aspect-square bg-[var(--color-border)]">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </div>
                <p className="text-design-14 sm:text-design-16 font-medium text-[var(--color-black)] text-center py-3 px-2">
                  {cat.name}
                </p>
              </a>
            </article>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-4">
          <button
            type="button"
            className="w-8 h-8 rounded-full bg-[var(--color-border)] hover:bg-[var(--color-muted-alt-2)]/20 flex items-center justify-center transition"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4 text-[var(--color-black)]" />
          </button>
          <span className="flex gap-1 items-center">
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
            className="w-8 h-8 rounded-full bg-[var(--color-border)] hover:bg-[var(--color-muted-alt-2)]/20 flex items-center justify-center transition"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4 text-[var(--color-black)]" />
          </button>
        </div>
      </div>
    </section>
  );
}
