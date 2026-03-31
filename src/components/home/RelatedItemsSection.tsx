'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

const items = [
  { name: 'NovaPulse Smartwatch', image: '/images/sellerwatch.png' },
  { name: 'NovaPulse Smartwatch', image: '/images/sellerwatch (2).png' },
  { name: 'NovaPulse Smartwatch', image: '/images/watch.png' },
  { name: 'NovaPulse Smartwatch', image: '/images/watch.png' },
  { name: 'NovaPulse Smartwatch', image: '/images/sellerwatch.png' },
  { name: 'NovaPulse Smartwatch', image: '/images/sellerwatch (2).png' },
  { name: 'NovaPulse Smartwatch', image: '/images/sellerwatch (2).png' },
  { name: 'AeroFit Earbuds', image: '/images/watch.png' },
  { name: 'Pulse Band Pro', image: '/images/sellerwatch.png' },
  { name: 'Smart Ring X1', image: '/images/sellerwatch (2).png' },
];

export default function RelatedItemsSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: 'left' | 'right') => {
    const track = trackRef.current;
    if (!track) return;

    const amount = Math.max(240, Math.floor(track.clientWidth * 0.7));
    track.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="w-full min-w-0" aria-label="Related to items you've viewed">
      <SectionHeader
        title="Related to items you've viewed"
        viewAllHref="/product-list"
        viewAllLabel="View All"
      />

      <div className="relative">
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-2 overflow-x-auto pb-2 scrollbar-hide sm:gap-3"
        >
          {items.map((item, i) => (
            <article
              key={i}
              className="min-w-[150px] snap-start bg-white rounded-xl p-3 sm:min-w-[180px] sm:p-4 flex flex-col items-center text-center border border-[var(--color-border)] shadow-sm hover:shadow transition shrink-0"
            >
              <div className="relative w-full aspect-square max-w-[140px] mx-auto mb-3">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
              </div>
              <p className="text-design-14 sm:text-design-16 font-medium text-[var(--color-black)] line-clamp-2">
                {item.name}
              </p>
            </article>
          ))}
        </div>
        <button
          type="button"
          onClick={() => scrollByAmount('left')}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-white border border-[var(--color-border)] shadow items-center justify-center hover:bg-[var(--color-border)] transition"
          aria-label="Previous related items"
        >
          <ChevronLeft className="w-5 h-5 text-[var(--color-black)]" />
        </button>
        <button
          type="button"
          onClick={() => scrollByAmount('right')}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-white border border-[var(--color-border)] shadow items-center justify-center hover:bg-[var(--color-border)] transition"
          aria-label="Next related items"
        >
          <ChevronRight className="w-5 h-5 text-[var(--color-black)]" />
        </button>
      </div>
    </section>
  );
}
