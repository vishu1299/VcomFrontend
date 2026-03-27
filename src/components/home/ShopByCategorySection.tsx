'use client';

import Image from 'next/image';
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
];

export default function ShopByCategorySection() {
  return (
    <section className="w-full min-w-0" aria-label="Shop by category">
      <SectionHeader
        title="Shop by Category"
        viewAllHref="#"
        viewAllLabel="View All"
        icon={<LayoutGrid className="w-5 h-5 text-[var(--color-black-01)]" />}
      />

      <div className="relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-4">
          {categories.map((cat, i) => (
            <article
              key={i}
              className="flex aspect-[4/5] min-h-0 min-w-0 flex-col overflow-hidden rounded-2xl shadow-sm transition hover:shadow-md"
              style={{ backgroundColor: CATEGORY_CARD_BG }}
            >
              <a
                href="#"
                className="group flex h-full min-h-0 min-w-0 flex-col outline-none"
              >
                {/* fill image needs a box with real height: flex-1 + min-h avoids collapse on mobile */}
                <div className="relative min-h-0 flex-1 px-2 pb-0.5 pt-2 sm:px-4 sm:pb-1 sm:pt-4">
                  <div className="relative h-full min-h-[112px] w-full overflow-hidden rounded-lg sm:min-h-[140px] sm:rounded-xl">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      sizes="(max-width: 640px) 46vw, (max-width: 768px) 31vw, (max-width: 1024px) 23vw, 18vw"
                      className="object-contain object-center p-1.5 transition duration-300 group-hover:scale-[1.03] sm:p-2"
                    />
                  </div>
                </div>
                {/* Pill label — matches reference white bar at bottom */}
                <div className="flex shrink-0 flex-col justify-end px-2 pb-2 pt-0.5 sm:px-4 sm:pb-4 sm:pt-1">
                  <div className="flex min-h-[40px] items-center justify-center rounded-lg bg-white px-2 py-2 shadow-sm sm:min-h-[48px] sm:px-5 sm:py-3">
                    <span className="line-clamp-2 text-center text-[11px] font-semibold leading-tight text-[var(--color-black)] sm:text-design-14 sm:leading-normal md:text-design-16">
                      {cat.name}
                    </span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-4">
          <button
            type="button"
            className="w-8 h-8 rounded-full bg-white hover:bg-[var(--color-muted-alt-2)]/20 flex items-center justify-center transition"
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
            className="w-8 h-8 rounded-full bg-white hover:bg-[var(--color-muted-alt-2)]/20 flex items-center justify-center transition"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4 text-[var(--color-black)]" />
          </button>
        </div>
      </div>
    </section>
  );
}
