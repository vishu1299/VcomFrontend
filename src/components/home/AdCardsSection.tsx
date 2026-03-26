'use client';

import Image from 'next/image';
import { Headphones } from 'lucide-react';

const cards = [
  {
    tag: 'ADVERTISEMENT',
    brand: 'Futurebeats',
    titleLine1: 'Sound Pro',
    titleLine2: 'A56 Headset',
    image: '/images/dashboard2.png',
    imageAlt: 'Sound Pro A56 Headset',
    shapeColor: 'var(--color-ad-shape-orange)',
  },
  {
    tag: 'ADVERTISEMENT',
    brand: 'Futurebeats',
    titleLine1: '50%OFF',
    titleLine2: 'Beauty Products',
    image: '/images/dashboard1.png',
    imageAlt: 'Beauty Products',
    shapeColor: 'var(--color-ad-shape-purple)',
  },
];

export default function AdCardsSection() {
  return (
    <section className="w-full" aria-label="Advertisement cards">
      <div className="grid w-full grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:gap-8">
        {cards.map((card, i) => (
          <article
            key={i}
            className="bg-white rounded-[12px] sm:rounded-[16px] p-4 sm:p-5 lg:p-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 overflow-hidden shadow-sm border border-[var(--color-border)] min-h-[280px] sm:min-h-[300px] lg:min-h-[320px]"
          >
            {/* Left: Text content — ~55–60% width on desktop */}
            <div className="flex-1 min-w-0 flex flex-col justify-center order-2 sm:order-1">
              {/* ADVERTISEMENT badge — Figma: 12px, #F5B700, white, px-3 py-1 rounded */}
              <span
                className="inline-block text-design-12 font-medium text-white px-3 py-1 rounded w-fit mb-4"
                style={{ backgroundColor: 'var(--color-ad-badge)' }}
              >
                {card.tag}
              </span>

              {/* Brand: icon + name — 14px, font-medium, 16px below badge */}
              <div className="flex items-center gap-1.5 mb-2">
                <Headphones
                  className="w-4 h-4 text-[var(--color-black)] shrink-0"
                  strokeWidth={2}
                  aria-hidden
                />
                <span className="text-design-14 font-medium text-[var(--color-black)]">
                  {card.brand}
                </span>
              </div>

              {/* Title — Line 1: 18px (card1) / 16px (card2), Line 2: 24px, 16px above buttons */}
              <div className="mb-4">
                <span
                  className={`block font-semibold text-[var(--color-black)] leading-tight ${
                    i === 0 ? 'text-design-18' : 'text-design-16'
                  }`}
                >
                  {card.titleLine1}
                </span>
                <span className="block text-design-24 font-semibold text-[var(--color-black)] leading-tight">
                  {card.titleLine2}
                </span>
              </div>

              {/* Buttons — Order Now + Explore more, 12px gap, min-h-40px */}
              <div className="flex flex-col sm:flex-col gap-3">
                <button
                  type="button"
                  className="min-h-[40px] px-6 py-2 rounded text-design-14 font-medium text-white bg-[var(--color-main-blue)] hover:opacity-95 transition w-fit"
                >
                  Order Now
                </button>
                <button
                  type="button"
                  className="min-h-[40px] px-6 py-2 rounded text-design-14 font-medium text-[var(--color-main-blue)] bg-transparent border border-[var(--color-main-blue)] hover:bg-[var(--color-main-blue)]/5 transition w-fit"
                >
                  Explore more
                </button>
              </div>
            </div>

            {/* Right: Image + decorative shape — ~40–45% width. overflow-hidden on mobile/tablet only to prevent shape bleeding into text */}
            <div className="relative w-full sm:w-[45%] lg:w-[50%] min-h-[180px] sm:min-h-[160px] lg:min-h-[200px] flex-shrink-0 order-1 sm:order-2 flex items-center justify-end overflow-hidden lg:overflow-visible">
              {/* Decorative shape — organic blob from bottom-right, Figma reference */}
              <div
                className="absolute w-[140%] h-[140%] -right-[55%] -bottom-[75%] rounded-[70%_20%_70%_30%] opacity-90"
                style={{ backgroundColor: card.shapeColor }}
                aria-hidden
              />

              {/* Image container — Figma: headset 206×250, beauty 528×352 left -62px */}
              <div
                className={`relative z-10 ${
                  i === 0
                    ? 'w-[140px] h-[170px] sm:w-[160px] sm:h-[195px] lg:w-[206px] lg:h-[250px]'
                    : 'w-[180px] h-[120px] sm:w-[220px] sm:h-[147px] lg:w-[280px] lg:h-[187px] lg:-ml-[62px]'
                }`}
              >
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  className={i === 0 ? 'object-contain object-right' : 'object-cover object-left'}
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 220px, 280px"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
