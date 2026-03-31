'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const AUTO_ADVANCE_MS = 5000;

const BANNERS = [
  { src: '/images/banner.png', alt: 'Banner 1' },
  { src: '/images/banner2.png', alt: 'Banner 2' },
  { src: '/images/banner3.png', alt: 'Banner 3' },
] as const;

const BANNER_WIDTH = 5952;
const BANNER_HEIGHT = 1656;

type HeroBannerProps = {
  /** Tighter gap below banner + dots (e.g. top-stores page) */
  compactSpacing?: boolean;
};

export default function HeroBanner({ compactSpacing = false }: HeroBannerProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % BANNERS.length);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      className={
        compactSpacing
          ? '-mt-1 mb-2 overflow-hidden rounded-xl sm:mt-0 sm:mb-4 sm:rounded-2xl'
          : '-mt-1 mb-4 overflow-hidden rounded-xl sm:mt-0 sm:mb-8 sm:rounded-2xl'
      }
      aria-label="Banner carousel"
    >
      {/* Slider Container */}
      {/* ✅ Add rounded + overflow HERE */}
      <div
        className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl"
        style={{ aspectRatio: `${BANNER_WIDTH} / ${BANNER_HEIGHT}` }}
      >
        {/* Sliding Track */}
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {BANNERS.map((banner) => (
            <div key={banner.src} className="relative w-full flex-shrink-0">
              <Image
                src={banner.src}
                alt={banner.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Pagination */}
      <div
        className={
          compactSpacing
            ? 'mt-2 flex justify-center gap-2 sm:mt-3'
            : 'mt-3 flex justify-center gap-2 sm:mt-4'
        }
      >
        {BANNERS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${i === index
                ? 'bg-[#1E3A8A]'   // active (only color change)
                : 'bg-gray-400 hover:bg-gray-500'
              }`}
          />
        ))}
      </div>
    </section>
  );
}