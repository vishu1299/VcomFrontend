'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react';
import SectionHeader from './SectionHeader';

const CATEGORY_CARD_BG = '#efefef';

const categories = [
  { name: "Men's Fashion", image: '/images/fashion1.png' },
  { name: "Women's Clothing", image: '/images/fashion2.png' },
  { name: 'Shoes', image: '/images/shoes.png' },
  { name: 'Watches', image: '/images/sellerwatch.png' },
  { name: 'Accessories', image: '/images/otp.png' },
  { name: 'Home & Decor', image: '/images/success.png' },
  { name: 'Toys & Kids', image: '/images/signin.png' },
  { name: 'Jewellery', image: '/images/create.png' },
  { name: 'Makeup', image: '/images/makeup.png' },
  { name: 'Personal Care', image: '/images/skincare.png' },
  { name: 'Sports & Fitness', image: '/images/cloth1.png' },
  { name: 'Books & Media', image: '/images/cloth2.png' },
];

const PAGE_SIZE = 6;

export default function ShopByCategorySection() {
  const pageCount = Math.max(1, Math.ceil(categories.length / PAGE_SIZE));
  const [page, setPage] = useState(0);
  const visible = categories.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  const goPrev = () => setPage((p) => (p - 1 + pageCount) % pageCount);
  const goNext = () => setPage((p) => (p + 1) % pageCount);

  return (
    <section className="w-full min-w-0" aria-label="Shop by category">
      <SectionHeader
        title="Shop by Category"
        viewAllHref="/product-categories"
        viewAllLabel="View All"
        icon={<LayoutGrid className="w-5 h-5 text-[var(--color-black-01)]" />}
      />

      <div className="relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {visible.map((cat, i) => (
            <article
              key={`${page}-${i}`}
              className="flex aspect-[4/5] flex-col overflow-hidden rounded-2xl shadow-sm transition hover:shadow-md"
              style={{ backgroundColor: CATEGORY_CARD_BG }}
            >
              <Link
                href="/product-list"
                className="group flex min-h-0 flex-1 flex-col"
              >
                {/* Image: centered on card gray, bottom fades into card bg — no inner white frame, no badge overlays */}
                <div className="relative flex min-h-0 flex-1 flex-col px-3 pb-1 pt-3 sm:px-4 sm:pt-4">
                  <div className="relative min-h-[160px] w-full flex-1 overflow-hidden rounded-xl sm:min-h-[180px]">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-contain object-center transition duration-300 group-hover:scale-[1.03] p-2"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    />
                    
                  </div>
                </div>
                {/* Pill label — matches reference white bar at bottom */}
                <div className="flex shrink-0 flex-col justify-end px-3 pb-3 pt-1 sm:px-4 sm:pb-4">
                  <div className="flex min-h-[44px] items-center justify-center rounded-lg bg-white px-4 py-2.5 shadow-sm sm:min-h-[48px] sm:px-5 sm:py-3">
                    <span className="text-center text-design-14 font-semibold text-[var(--color-black)] sm:text-design-16">
                      {cat.name}
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-4">
          <button
            type="button"
            onClick={goPrev}
            className="w-8 h-8 rounded-full bg-white hover:bg-[var(--color-muted-alt-2)]/20 flex items-center justify-center transition"
            aria-label="Previous categories page"
          >
            <ChevronLeft className="w-4 h-4 text-[var(--color-black)]" />
          </button>
          <span className="flex gap-1 items-center" role="tablist" aria-label="Category pages">
            {Array.from({ length: pageCount }, (_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === page}
                onClick={() => setPage(i)}
                className={`w-2 h-2 rounded-full transition ${
                  i === page ? 'bg-[var(--color-main-blue)]' : 'bg-[var(--color-border)] hover:bg-[var(--color-muted-alt-2)]/40'
                }`}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </span>
          <button
            type="button"
            onClick={goNext}
            className="w-8 h-8 rounded-full bg-white hover:bg-[var(--color-muted-alt-2)]/20 flex items-center justify-center transition"
            aria-label="Next categories page"
          >
            <ChevronRight className="w-4 h-4 text-[var(--color-black)]" />
          </button>
        </div>
      </div>
    </section>
  );
}
