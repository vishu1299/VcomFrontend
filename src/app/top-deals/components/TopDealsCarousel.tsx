'use client';

import { useRef } from 'react';
import DealCard, { type DealCardProps } from './DealCard';

const carouselProducts: DealCardProps[] = [
  {
    id: 'c1',
    name: "Men's Half Sleeve Solid Casual Reg...",
    price: 29,
    originalPrice: 33,
    image: '/images/phone1.png',
    badges: ['10% OFF'],
    hasVideo: true,
    sponsored: true,
  },
  {
    id: 'c2',
    name: "Men's Half Sleeve Solid Casual Reg...",
    price: 29,
    originalPrice: 33,
    image: '/images/phone2.png',
    badges: ['10% OFF'],
    sponsored: true,
    hasVideo: true,
  },
  {
    id: 'c3',
    name: "Men's Half Sleeve Solid Casual Reg...",
    price: 29,
    originalPrice: 33,
    image: '/images/phone3.png',
    badges: ['10% OFF'],
    hasVideo: true,
    sponsored: true,
  },
  {
    id: 'c4',
    name: "Men's Half Sleeve Solid Casual Reg...",
    price: 29,
    originalPrice: 33,
    image: '/images/dryer.png',
    badges: ['10% OFF'],
    hasVideo: true,
    sponsored: true,
  },
  {
    id: 'c5',
    name: "Men's Half Sleeve Solid Casual Reg...",
    price: 29,
    originalPrice: 33,
    image: '/images/phone.png',
    badges: ['10% OFF'],
    hasVideo: true,
    sponsored: true,
  },
];

export default function TopDealsCarousel({ title, subtitle, textcolor }: { title: string, subtitle: string, textcolor : string }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section className="mb-6 sm:mb-8 rounded-xl bg-[#fff3cf] rounded-t-2xl p-4 sm:p-6" aria-label="Top Deals">
      <div className="flex sm:flex-row flex-col items-center gap-2 mb-4 sm:mb-5">
        <h2 className={`text-lg font-bold ${textcolor || 'text-[#FB0092]'}`}>{title || 'Top Deals'}</h2>
        <p className="text-sm text-[#131313] mt-0.5">{subtitle || 'Unbeatable discounts on top products across every category'}</p>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {carouselProducts.map((product) => (
            <div
              key={product.id}
              className="min-w-[220px] sm:min-w-[240px] lg:min-w-[250px] snap-start shrink-0"
            >
              <DealCard {...product} />
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => scroll('left')}
          className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-gray-200 border border-[#e5e7eb] items-center justify-center hover:bg-gray-300 transition z-10"
          aria-label="Previous"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scroll('right')}
          className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-gray-200 border border-[#e5e7eb] items-center justify-center hover:bg-gray-300 transition z-10"
          aria-label="Next"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
