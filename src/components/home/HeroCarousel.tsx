'use client';

import { useState, useCallback } from 'react';
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
  {
    image: '/images/logo.png',
    liveCount: '3.1k',
    title: 'Tech Gadgets Showcase',
    brand: 'TechFlow',
    cta: 'WATCH NOW',
  },
];

/**
 * DESIGN CONSTANTS (match Figma)
 */
const SLIDE_WIDTH = 70; // % → center slide visible, ~30% peek
const GAP = 10; // px
const DESKTOP_HEIGHT = 388; // px

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  return (
    <section
      aria-label="Hero carousel"
      className="mt-4 sm:mt-6 px-4 sm:px-6 lg:px-8"
    >
      {/* Fixed desktop width wrapper */}
      <div className="relative max-w-[1440px] mx-auto">
        {/* Carousel viewport */}
        <div
          className="relative overflow-hidden rounded-2xl bg-black"
          style={{
            height: `clamp(220px, 38vw, ${DESKTOP_HEIGHT}px)`,
          }}
        >
          {/* Track */}
          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(calc(50% - ${SLIDE_WIDTH / 2}% - ${
                current * (SLIDE_WIDTH + GAP / 14.4)
              }%))`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="relative h-full shrink-0 rounded-2xl overflow-hidden"
                style={{
                  width: `clamp(85%, ${SLIDE_WIDTH}%, ${SLIDE_WIDTH}%)`,
                }}
                aria-hidden={index !== current}
              >
                {/* Image */}
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === current}
                  sizes="(max-width: 768px) 90vw, (max-width: 1280px) 80vw, 1000px"
                  className="object-cover"
                />

                {/* Gradient overlay (from Figma) */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 60%)',
                  }}
                  aria-hidden
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 lg:p-10">
                  {/* LIVE badge */}
                  <span className="inline-flex items-center gap-2 bg-red-600 text-white text-xs sm:text-sm px-3 py-1.5 rounded-full w-max">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    LIVE
                    <span className="opacity-80">
                      {slide.liveCount} Watching
                    </span>
                  </span>

                  {/* Title */}
                  <h1 className="text-white font-semibold leading-tight text-[20px] sm:text-[26px] lg:text-[32px] max-w-xl">
                    {slide.title}
                  </h1>

                  {/* Footer */}
                  <div className="flex items-center gap-4">
                    <span className="text-white text-xs sm:text-sm">
                      {slide.brand}
                    </span>
                    <button
                      type="button"
                      className="bg-red-600 text-white text-xs sm:text-sm font-medium px-4 py-2.5 rounded-lg hover:opacity-95 transition"
                    >
                      {slide.cta}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <button
            onClick={goPrev}
            aria-label="Previous slide"
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={goNext}
            aria-label="Next slide"
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-1.5 mt-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === current}
              className={`w-2 h-2 rounded-full transition ${
                i === current ? 'bg-black' : 'bg-black/40 hover:bg-black/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
