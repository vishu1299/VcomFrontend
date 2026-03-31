'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: 'Maria Nyla',
    image: '/images/logo.png',
    text:
      'Great Service and Good Quality Product and it helped my wife osteoarthritis on her knees and hips and myself for arthritis. We have asked our doctor before we used it he said it is fine because we are on other medications.',
  },
  {
    name: 'James Porter',
    image: '/images/logo.png',
    text:
      'Fast delivery and packaging was perfect. The product matched the photos exactly. I will definitely order again from TibilMall and recommend it to colleagues.',
  },
  {
    name: 'Anita Sharma',
    image: '/images/logo.png',
    text:
      'Customer support resolved my return in one day. Quality exceeded expectations for the price. The checkout flow was smooth on mobile as well.',
  },
  {
    name: 'David Chen',
    image: '/images/logo.png',
    text:
      'Love the live shopping experience — it feels personal. Products arrived on time and the seller was responsive. Five stars for transparency and trust.',
  },
  {
    name: 'Elena Rossi',
    image: '/images/logo.png',
    text:
      'Beautiful handmade pieces and clear sizing guides. I appreciate the detailed product videos. TibilMall has become my go-to for gifts.',
  },
];

export default function CustomerReviewsSection() {
  const [active, setActive] = useState(0);
  const n = reviews.length;
  const current = reviews[active];

  const goPrev = () => setActive((i) => (i - 1 + n) % n);
  const goNext = () => setActive((i) => (i + 1) % n);

  return (
    <section
      className="flex w-full min-w-0 flex-col items-center overflow-hidden rounded-2xl bg-[#FFF9E7]"
      aria-label="Customer reviews"
    >
      <h2 className="px-4 pt-8 text-center text-[24px] font-semibold text-[var(--color-black)] sm:pt-10 sm:text-[28px] lg:text-[32px]">
        Customer Reviews
      </h2>

      <div className="flex w-full max-w-3xl flex-col items-center gap-6 px-4 py-8 sm:gap-8 sm:px-6 sm:py-10 lg:gap-10 lg:px-8">
        {/* Review Text */}
        <div className="relative max-w-[820px] text-center px-6 sm:px-8">
          <span className="absolute left-0 sm:-left-2 -top-1 sm:-top-2 text-[32px] sm:text-[40px] lg:text-[48px] text-[#F5B700] font-serif leading-none">
            “
          </span>

          <p className="font-poppins text-[16px] font-medium leading-[18px] text-[#767676]">
            {current.text}
          </p>

          <span className="absolute right-0 sm:-right-2 -bottom-2 sm:-bottom-4 text-[32px] sm:text-[40px] lg:text-[48px] text-[#F5B700] font-serif leading-none">
            ”
          </span>
        </div>

        {/* Avatar Slider */}
        <div className="w-full max-w-[654px] min-h-[80px] sm:min-h-[113px] flex items-center justify-center gap-3 sm:gap-4 lg:gap-6 px-2">
          {/* Left Arrow */}
          <button
            type="button"
            onClick={goPrev}
            className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow flex items-center justify-center hover:opacity-90 transition"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
          </button>

          {/* Avatars */}
          <div className="flex items-end justify-center gap-2 sm:gap-3 lg:gap-4 flex-1 min-w-0 overflow-x-auto scrollbar-hide py-2">
            {reviews.map((r, i) =>
              i === active ? (
                <button
                  key={r.name}
                  type="button"
                  onClick={() => setActive(i)}
                  className="shrink-0 w-14 h-14 sm:w-[72px] sm:h-[72px] lg:w-24 lg:h-24 flex items-center justify-center"
                  style={{
                    border: '2px dashed #F5B700',
                    borderRadius: '9999px',
                  }}
                  aria-current="true"
                  aria-label={`${r.name}, selected`}
                >
                  <div className="relative w-12 h-12 sm:w-[64px] sm:h-[64px] lg:w-[88px] lg:h-[88px] rounded-full overflow-hidden">
                    <Image
                      src={r.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                </button>
              ) : (
                <button
                  key={r.name}
                  type="button"
                  onClick={() => setActive(i)}
                  className="shrink-0 relative w-11 h-11 sm:w-14 sm:h-14 lg:w-[70px] lg:h-[70px] rounded-full border-2 border-white overflow-hidden opacity-80 hover:opacity-100 transition"
                  aria-label={r.name}
                >
                  <Image
                    src={r.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="70px"
                  />
                </button>
              )
            )}
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={goNext}
            className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow flex items-center justify-center hover:opacity-90 transition"
            aria-label="Next review"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
          </button>
        </div>

        {/* Reviewer Name */}
        <p className="text-design-14 sm:text-design-16 font-medium text-[var(--color-black)]">
          {current.name}
        </p>
      </div>
    </section>
  );
}
