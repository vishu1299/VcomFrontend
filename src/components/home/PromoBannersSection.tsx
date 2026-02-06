'use client';

import Image from 'next/image';

const banners = [
  {
    image: '/images/signin.png',
    bg: '#F5F5F5',
  },
  {
    image: '/images/create.png',
    bg: '#EEEEEE',
  },
];

export default function PromoBannersSection() {
  return (
    <section
      aria-label="Promotional banners"
      className="w-full flex justify-center mt-8 sm:mt-10 lg:mt-12 overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-[1920px] grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
        {banners.map((banner, index) => (
          <article
            key={index}
            className="relative min-h-[260px] sm:min-h-[300px] lg:h-[350px] rounded-[12px] sm:rounded-[16px] overflow-hidden"
            style={{ backgroundColor: banner.bg }}
          >
            {/* ADVERTISEMENT badge */}
            <span className="absolute top-3 left-3 sm:top-4 sm:left-4 lg:top-6 lg:left-6 z-20 bg-[#F5B700] text-white text-[10px] sm:text-[11px] lg:text-[12px] font-medium px-2 py-0.5 sm:px-3 sm:py-1 rounded">
              ADVERTISEMENT
            </span>

            {/* TEXT CONTENT */}
            <div className="relative z-10 h-full flex flex-col justify-center pl-4 sm:pl-6 lg:pl-10 pr-36 sm:pr-40 md:pr-48 lg:pr-56 xl:pr-64 gap-2 sm:gap-3 lg:gap-4">
              <span className="inline-block bg-[#F5B700] text-black text-[10px] sm:text-[11px] lg:text-[12px] font-medium px-2 py-0.5 sm:px-3 sm:py-1 rounded w-fit">
                FLASH SALE
              </span>

              <h3 className="text-design-16 sm:text-design-18 lg:text-design-20 font-semibold text-[var(--color-black)] leading-tight">
                Tours Safe <br />
                True Discount
              </h3>

              <button
                type="button"
                className="bg-[var(--color-main-blue)] text-white text-[12px] sm:text-[13px] lg:text-[14px] font-medium px-4 py-1.5 sm:px-6 sm:py-2 rounded w-fit hover:opacity-95 transition"
              >
                Order Now
              </button>
            </div>

            {/* IMAGE — responsive: visible on all breakpoints, scaled */}
            <div className="absolute right-0 bottom-0 md:bottom-auto md:top-[-10%] lg:top-[-19%] w-[140px] h-[180px] sm:w-[180px] sm:h-[220px] md:w-[280px] md:h-[340px] lg:w-[400px] lg:h-[480px] xl:w-[500px] xl:h-[600px] 2xl:w-[580px] 2xl:h-[700px]">
              <Image
                src={banner.image}
                alt=""
                fill
                priority={index === 0}
                className="object-cover object-right-bottom md:object-right-top"
                sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, (max-width: 1024px) 280px, (max-width: 1280px) 400px, (max-width: 1536px) 500px, 580px"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
