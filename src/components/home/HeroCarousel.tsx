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

const DESKTOP_HEIGHT = 388;

function SlideFrame({
  slide,
  index,
  current,
  priority,
}: {
  slide: (typeof slides)[0];
  index: number;
  current: number;
  priority?: boolean;
}) {
  return (
    <div
      className="relative h-full w-full min-h-0 overflow-hidden rounded-2xl"
      aria-hidden={index !== current}
    >
      <Image
        src={slide.image}
        alt={slide.title}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1000px"
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 60%)',
        }}
        aria-hidden
      />
      <div className="absolute inset-0 flex flex-col justify-between p-4 pl-6 sm:p-6 sm:pl-10 md:pl-14 lg:p-10 lg:pl-20">
        <span className="inline-flex w-max items-center gap-2 rounded-full bg-red-600 px-3 py-1.5 text-xs text-white sm:text-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
          LIVE
          <span className="opacity-80">{slide.liveCount} Watching</span>
        </span>
        <h1 className="max-w-xl text-[20px] font-semibold leading-tight text-white sm:text-[26px] lg:text-[32px]">
          {slide.title}
        </h1>
        <div className="flex items-center gap-4">
          <span className="text-xs text-white sm:text-sm">{slide.brand}</span>
          <button
            type="button"
            className="rounded-lg bg-red-600 px-4 py-2.5 text-xs font-medium text-white transition hover:opacity-95 sm:text-sm"
          >
            {slide.cta}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const n = slides.length;

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? n - 1 : prev - 1));
  }, [n]);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev === n - 1 ? 0 : prev + 1));
  }, [n]);

  const heightStyle = {
    height: `clamp(220px, 38vw, ${DESKTOP_HEIGHT}px)`,
  };

  return (
    <section aria-label="Hero carousel" className="w-full shrink-0">
      {/* Mobile: one full-width slide at a time */}
      <div className="relative md:hidden">
        <div
          className="relative overflow-hidden rounded-2xl bg-black"
          style={heightStyle}
        >
          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={{
              width: `${n * 100}%`,
              transform: `translateX(-${(current * 100) / n}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="h-full shrink-0"
                style={{ width: `${100 / n}%` }}
              >
                <SlideFrame
                  slide={slide}
                  index={index}
                  current={current}
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
          <NavArrows onPrev={goPrev} onNext={goNext} />
        </div>
        <Dots count={n} current={current} setCurrent={setCurrent} />
      </div>

      {/* Desktop: one full-width slide at a time */}
      <div className="relative hidden w-full md:block">
        <div
          className="relative overflow-hidden rounded-2xl bg-black"
          style={heightStyle}
        >
          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={{
              width: `${n * 100}%`,
              transform: `translateX(-${(current * 100) / n}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="h-full shrink-0"
                style={{ width: `${100 / n}%` }}
                aria-hidden={index !== current}
              >
                <SlideFrame
                  slide={slide}
                  index={index}
                  current={current}
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
          <NavArrows onPrev={goPrev} onNext={goNext} />
        </div>
        <Dots count={n} current={current} setCurrent={setCurrent} />
      </div>
    </section>
  );
}

function NavArrows({
  onPrev,
  onNext,
}: {
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <>
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 sm:left-5 sm:h-11 sm:w-11"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 sm:right-5 sm:h-11 sm:w-11"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
    </>
  );
}

function Dots({
  count,
  current,
  setCurrent,
}: {
  count: number;
  current: number;
  setCurrent: (i: number) => void;
}) {
  return (
    <div className="mt-4 flex justify-center gap-1.5">
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => setCurrent(i)}
          aria-label={`Go to slide ${i + 1}`}
          aria-current={i === current}
          className={`h-2 w-2 rounded-full transition ${
            i === current ? 'bg-black' : 'bg-black/40 hover:bg-black/60'
          }`}
        />
      ))}
    </div>
  );
}
