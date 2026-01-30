'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: '/images/signin.png',
    liveCount: '2.4k',
    title: 'New Fashion Collection Launch',
    brand: 'UrbanTech',
    cta: 'WATCH NOW',
  },
  {
    image: '/images/create.png',
    liveCount: '1.8k',
    title: 'New Fashion Collect',
    brand: 'Sarah Styl',
    cta: 'WATCH NOW',
  },
];

export default function HeroCarousel() {
  return (
    <section className="mt-4 sm:mt-6" aria-label="Hero carousel">
      <div className="relative rounded-2xl overflow-hidden bg-[var(--color-black)]">
        <div className="relative h-[220px] sm:h-[320px] md:h-[400px] lg:h-[480px] xl:h-[560px] 2xl:h-[600px]">
          <Image
            src={slides[0].image}
            alt={slides[0].title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1440px"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12">
            <span className="inline-flex items-center gap-2 text-design-14 bg-[var(--color-error)] text-white px-3 py-1.5 rounded-full w-max mb-3 sm:mb-4">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              LIVE <span className="opacity-90">{slides[0].liveCount} Watching</span>
            </span>

            <h1 className="text-white text-design-24 sm:text-design-28 lg:text-design-32 font-semibold leading-[1.1] max-w-xl">
              {slides[0].title}
            </h1>

            <div className="mt-4 sm:mt-5 flex items-center gap-3">
              <span className="text-white text-design-14 sm:text-design-16">
                {slides[0].brand}
              </span>
              <button
                type="button"
                className="bg-[var(--color-error)] text-white text-design-14 font-medium px-4 py-2.5 rounded-lg hover:opacity-95 transition"
              >
                {slides[0].cta}
              </button>
            </div>
          </div>

          <button
            type="button"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            type="button"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full transition ${
                i === 0 ? 'bg-white' : 'bg-white/50'
              }`}
              aria-hidden
            />
          ))}
        </div>
      </div>
    </section>
  );
}
