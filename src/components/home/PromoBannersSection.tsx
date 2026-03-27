'use client';

import Image from 'next/image';

const banners = [
  {
    image: '/images/Image1.png',
    bg: '#F5F5F5',
  },
  {
    image: '/images/Image.png',
    bg: '#EEEEEE',
  },
];

export default function PromoBannersSection() {
  return (
    <section
      aria-label="Promotional banners"
      className="flex w-full min-w-0 justify-center overflow-hidden"
    >
      <div className="grid w-full grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:gap-8 xl:gap-10">
        {banners.map((banner, index) => (
          <article
            key={index}
            className="relative min-h-[260px] overflow-hidden rounded-[12px] sm:min-h-[300px] sm:rounded-[16px] lg:h-[350px] lg:min-h-0"
            style={{ backgroundColor: banner.bg }}
          >
            {/* Full-bleed background image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={banner.image}
                alt=""
                fill
                priority={index === 0}
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            

            {/* ADVERTISEMENT — layered gold (same system as AdCardsSection) */}
            <span className="absolute left-3 top-3 z-20 inline-flex sm:left-4 sm:top-4 lg:left-6 lg:top-6">
              <span
                className="absolute left-1 top-1 h-full w-full rounded-[2px]"
                style={{ backgroundColor: '#E5AB00' }}
                aria-hidden
              />
              <span
                className="relative rounded-[2px] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white sm:px-3 sm:py-1 sm:text-[11px] lg:text-[12px]"
                style={{
                  background:
                    'linear-gradient(90deg, #B48100 0%, #FFB600 100%)',
                }}
              >
                ADVERTISEMENT
              </span>
            </span>

            <div className="relative z-10 flex h-full min-h-[260px] flex-col justify-end gap-2 px-4 pb-5 pl-4 pt-4 sm:min-h-[300px] sm:gap-3 sm:pl-6 sm:pr-4 sm:pb-5 lg:min-h-[350px] lg:gap-4 lg:pl-10 lg:pr-6 lg:pb-5">
              <div className="flex max-w-[min(100%,300px)] flex-col gap-2 sm:max-w-[320px] lg:max-w-[340px]">
                <span className="inline-block w-fit rounded-md bg-[#FBBF24] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#131313] sm:px-3 sm:py-1 sm:text-[11px] lg:text-[12px]">
                  FLASH SALE
                </span>

                <h3 className="text-design-16 font-semibold leading-tight text-[#131313] sm:text-design-18 lg:text-design-20">
                  Tours Safe <br />
                  True Discount
                </h3>

                <button
                  type="button"
                  className="w-fit rounded-md bg-[var(--color-main-blue)] px-4 py-1.5 text-[12px] font-medium text-white transition hover:opacity-95 sm:px-6 sm:py-2 sm:text-[13px] lg:text-[14px]"
                >
                  Order Now
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
