'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { Star, Trophy } from 'lucide-react';

const stores = [
  { name: 'ActiveLifestyle Hub', rating: 4.7, reviews: '1.8K', image: '/images/logo.png' },
  { name: 'Sporty Essentials', rating: 4.8, reviews: '2.1K', image: '/images/logo.png' },
  { name: 'UrbanTech Store', rating: 4.6, reviews: '1.5K', image: '/images/logo.png' },
  { name: 'Style & Co', rating: 4.9, reviews: '3.2K', image: '/images/logo.png' },
  { name: 'Trendy Finds', rating: 4.5, reviews: '980', image: '/images/logo.png' },
  { name: 'Daily Deals', rating: 4.7, reviews: '1.2K', image: '/images/logo.png' },
];

export default function TopStoresSection() {
  return (
    <section className="w-full min-w-0" aria-label="Top stores">
      <SectionHeader title="Top Stores" viewAllHref="#" viewAllLabel="View All" icon={<Trophy className="w-5 h-5 text-amber-500" />} />

      <div className="relative">
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 scrollbar-hide sm:gap-6 -mx-4 px-4 sm:mx-0 sm:px-0">
          {stores.map((store, i) => (
            <div
              key={i}
              className="min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] flex flex-col items-center text-center snap-start shrink-0"
            >
              <div className="relative">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-2 border-[var(--color-error)] bg-[var(--color-border)]">
                  <Image
                    src={store.image}
                    alt={store.name}
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                </div>
                <span className="absolute -top-0.5 left-0 border-b border-red-500 bg-[var(--color-error)] text-white text-[10px] sm:text-design-12 font-medium px-1.5 py-0.5 rounded">
                  LIVE NOW
                </span>
              </div>
              <p className="text-design-14 sm:text-design-16 font-medium mt-2 text-[var(--color-black)] line-clamp-2">
                {store.name}
              </p>
              <span className="flex items-center gap-1 text-design-12 sm:text-design-14 text-[var(--color-muted-alt-2)] mt-0.5">
                <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                {store.rating} ({store.reviews} reviews)
              </span>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-white border border-[var(--color-border)] shadow items-center justify-center hover:bg-[var(--color-border)] transition"
          aria-label="Previous stores"
        >
          <ChevronLeft className="w-5 h-5 text-[var(--color-black)]" />
        </button>
        <button
          type="button"
          className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-white border border-[var(--color-border)] shadow items-center justify-center hover:bg-[var(--color-border)] transition"
          aria-label="Next stores"
        >
          <ChevronRight className="w-5 h-5 text-[var(--color-black)]" />
        </button>
      </div>
    </section>
  );
}
