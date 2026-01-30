'use client';

import Image from 'next/image';

const banners = [
  {
    tag: 'BEAUTY DEALS',
    title: 'Truly Safe True Discount',
    cta: 'Order Now',
    image: '/images/signin.png',
    bgClass: 'bg-orange-100',
  },
  {
    tag: 'TOP PICKS',
    title: 'Truly Safe True Discount',
    cta: 'Order Now',
    image: '/images/create.png',
    bgClass: 'bg-sky-50',
  },
];

export default function PromoBannersSection() {
  return (
    <section className="mt-8 sm:mt-10 lg:mt-12" aria-label="Promotional banners">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {banners.map((banner, i) => (
          <article
            key={i}
            className={`relative rounded-xl sm:rounded-2xl overflow-hidden ${banner.bgClass} flex flex-col sm:flex-row items-stretch min-h-[200px] sm:min-h-[240px]`}
          >
            <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center relative z-10">
              <span className="inline-block text-design-12 sm:text-design-14 bg-amber-300 text-[var(--color-black)] font-medium px-2 py-1 rounded mb-3 w-fit">
                {banner.tag}
              </span>
              <h3 className="text-design-20 sm:text-design-24 font-semibold text-[var(--color-black-01)] mb-4">
                {banner.title}
              </h3>
              <button type="button" className="btn-cta-sm w-fit">
                {banner.cta}
              </button>
            </div>
            <div className="relative w-full sm:w-48 md:w-56 h-40 sm:h-full min-h-[160px] sm:min-h-0 shrink-0">
              <Image
                src={banner.image}
                alt=""
                fill
                className="object-cover sm:object-contain sm:object-right"
                sizes="(max-width: 640px) 100vw, 224px"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
