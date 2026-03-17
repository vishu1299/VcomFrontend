'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const AUTO_PLAY_INTERVAL_MS = 3000;

const slides = [
  { image: '/images/signin.png', tag: "AUTUMN/WINTER '25", title: 'SALE', subtitle: 'UP TO', highlight: '20% OFF', badge: 'FIRST TIME ON DISCOUNT', cta: 'Shop Now' },
  { image: '/images/create.png', tag: "AUTUMN/WINTER '25", title: 'SALE', subtitle: 'UP TO', highlight: '20% OFF', badge: 'FIRST TIME ON DISCOUNT', cta: 'Shop Now' },
  { image: '/images/logo.png', tag: "AUTUMN/WINTER '25", title: 'SALE', subtitle: 'UP TO', highlight: '20% OFF', badge: 'FIRST TIME ON DISCOUNT', cta: 'Shop Now' },
  { image: '/images/forgot.png', tag: "AUTUMN/WINTER '25", title: 'SALE', subtitle: 'UP TO', highlight: '20% OFF', badge: 'FIRST TIME ON DISCOUNT', cta: 'Shop Now' },
  { image: '/images/otp.png', tag: "AUTUMN/WINTER '25", title: 'SALE', subtitle: 'UP TO', highlight: '20% OFF', badge: 'FIRST TIME ON DISCOUNT', cta: 'Shop Now' },
];

export default function ExclusiveHeroBanner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = slides[activeIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_PLAY_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="mb-6 sm:mb-8 lg:mb-10 rounded-[10px] overflow-hidden"
      aria-label="Promotional banner"
      style={{ fontFamily: 'var(--font-poppins)' }}
    >
      {/* Banner: image + left gradient overlay, text left-aligned */}
      <div className="relative h-[180px] xs:h-[200px] sm:h-[260px] md:h-[300px] lg:h-[340px] xl:h-[360px] 2xl:h-[380px] rounded-t-[10px]">
        <Image
          src={slide.image}
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />

        {/* Gradient: stronger on mobile (covers more width), fades right on larger screens */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.65) 40%, rgba(0,0,0,0.25) 65%, transparent 80%)',
          }}
        />

        {/* Text block */}
        <div className="absolute inset-0 flex flex-col justify-center pl-4 xs:pl-6 sm:pl-10 md:pl-16 lg:pl-20 xl:pl-24 2xl:pl-28 pr-3 sm:pr-4 w-[72%] xs:w-[65%] sm:w-[55%] md:w-[50%] lg:w-[48%]">
          
          {/* Tag */}
          <span className="text-white uppercase tracking-wide text-[10px] xs:text-[11px] sm:text-[13px] md:text-[14px] lg:text-[16px] mb-0.5 font-normal leading-tight">
            {slide.tag}
          </span>

          {/* SALE */}
          <h1 className="text-white uppercase font-bold leading-none text-[22px] xs:text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl">
            {slide.title}
          </h1>

          {/* UP TO row */}
          <div className="flex items-center gap-1.5 sm:gap-2 mt-1 sm:mt-2">
            <span className="h-px w-4 sm:w-5 md:w-6 bg-white shrink-0" aria-hidden />
            <span className="text-white uppercase text-[10px] xs:text-[11px] sm:text-[13px] md:text-[14px] lg:text-[16px] font-normal">
              {slide.subtitle}
            </span>
            <span className="h-px w-4 sm:w-5 md:w-6 bg-white shrink-0" aria-hidden />
          </div>

          {/* 20% OFF */}
          <span className="text-white uppercase font-bold leading-none text-[22px] xs:text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl mt-0.5">
            {slide.highlight}
          </span>

          {/* Badge */}
          <span className="inline-block mt-2 sm:mt-3 bg-[#E72F3C] text-white uppercase font-medium text-[9px] xs:text-[10px] sm:text-[12px] md:text-[13px] px-2 sm:px-3 py-1 sm:py-1.5 rounded-[6px] w-fit leading-tight">
            {slide.badge}
          </span>

          {/* CTA */}
          <Link
            href="#"
            className="mt-2.5 sm:mt-4 md:mt-5 text-white text-[10px] xs:text-[11px] sm:text-[13px] md:text-[14px] lg:text-[16px] font-medium underline underline-offset-2 decoration-2 w-fit hover:opacity-90 transition-opacity"
          >
            {slide.cta}
          </Link>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 py-3 sm:py-4 bg-transparent rounded-b-[10px]">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActiveIndex(i)}
            className={`rounded-full transition-all ${
              i === activeIndex
                ? 'w-2.5 h-2.5 bg-[#1A73E8]'
                : 'w-2.5 h-2.5 bg-transparent border-2 border-[var(--color-border)]'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}