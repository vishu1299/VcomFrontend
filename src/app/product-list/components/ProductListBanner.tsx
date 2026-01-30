'use client';

import Image from 'next/image';
import { useState } from 'react';

const slides = [
  {
    image: '/images/signin.png',
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

export default function ProductListBanner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = slides[activeIndex];

  return (
    <section className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-[var(--color-black)] mb-6 sm:mb-8" aria-label="Promotional banner">
      <div className="relative h-[200px] sm:h-[280px] md:h-[340px] lg:h-[350px]">
        <Image
          src={slide.image}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12">
          <span className="text-design-14 sm:text-design-16 text-white uppercase tracking-wide mb-1">
            {slide.tag}
          </span>
          <h1 className="text-design-24 sm:text-design-32 lg:text-[40px] font-bold text-white uppercase leading-tight">
            {slide.title}
          </h1>
          <span className="text-design-16 sm:text-design-18 text-white uppercase mt-1">
            {slide.subtitle}
          </span>
          <span className="text-design-24 sm:text-design-32 lg:text-[40px] font-bold text-white uppercase leading-tight">
            {slide.highlight}
          </span>
          <span className="inline-block mt-3 bg-[var(--color-error)] text-white text-design-12 sm:text-design-14 font-medium px-3 py-1.5 rounded-full w-fit">
            {slide.badge}
          </span>
          <button
            type="button"
            className="btn-cta-sm w-fit mt-4 sm:mt-5 text-design-14 sm:text-design-16"
          >
            {slide.cta}
          </button>
        </div>
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
