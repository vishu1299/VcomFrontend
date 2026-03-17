'use client';

import { useState } from 'react';

const slides = [
  {
    image: '/images/trendingHero.png',
    tag: "AUTUMN/WINTER '25",
    title: 'SALE',
    subtitle: 'UP TO',
    highlight: '20% OFF',
    badge: 'FIRST TIME ON DISCOUNT',
    cta: 'Shop Now',
  },
  {
    image: '/images/create.png',
    tag: "AUTUMN/WINTER '25",
    title: 'SALE',
    subtitle: 'UP TO',
    highlight: '20% OFF',
    badge: 'FIRST TIME ON DISCOUNT',
    cta: 'Shop Now',
  },
];

export default function HeroBanner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = slides[activeIndex];

  return (
    <section
      className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-[var(--color-black)] mb-6 sm:mb-8"
      aria-label="Promotional banner"
    >
      <div className="relative h-[200px] sm:h-[280px] md:h-[340px] lg:h-[350px]">
        <img
          src={slide.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-black/50" /> */}
        {/* <div className="absolute top-[30px] left-[115px] flex flex-col items-center text-center px-4 sm:px-6 md:px-8 lg:px-12">
          <span className=" text-[16px] md:text-[24px] font-bold text-white uppercase tracking-wide mb-1">
            {slide.tag}
          </span>
          <h1 className=" text-[24px] md:text-[100px]  text-white uppercase leading-tight">
            {slide.title}
          </h1>
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-1">
            <span className="w-8 sm:w-12 h-px bg-white shrink-0" aria-hidden />
            <span className="text-white uppercase">
              {slide.subtitle}
            </span>
            <span className="w-8 sm:w-12 h-px bg-white shrink-0" aria-hidden />
          </div>
          <span className="lg:text-[40px] font-bold text-white uppercase leading-tight">
            {slide.highlight}
          </span>
          <span className="inline-block mt-3 bg-[var(--color-error)] text-white text-design-12 sm:text-design-14 font-medium px-3 py-1.5 rounded-none w-fit">
            {slide.badge}
          </span>
          <button
            type="button"
            className="mt-4 sm:mt-5 text-white text-design-16 sm:text-design-18 font-medium uppercase tracking-wide hover:opacity-90 transition"
          >
            {slide.cta}
          </button>
        </div> */}
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActiveIndex(i)}
            className={`w-2 h-2 rounded-full transition ${
              i === activeIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
