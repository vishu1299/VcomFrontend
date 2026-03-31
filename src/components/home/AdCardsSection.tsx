'use client';

import Image from 'next/image';
import Link from 'next/link';

const cards = [
  {
    tag: 'ADVERTISEMENT',
    brand: 'Futurebeats',
    titleLine1: 'Sound Pro',
    titleLine2: 'A56 Headset',
    image: '/images/dashboard2.png',
    imageAlt: 'Sound Pro A56 Headset',
    shapeColor: 'var(--color-ad-shape-orange)',
  },
  {
    tag: 'ADVERTISEMENT',
    brand: 'Futurebeats',
    titleLine1: '50%OFF',
    titleLine2: 'Beauty Products',
    image: '/images/dashboard1.png',
    imageAlt: 'Beauty Products',
    shapeColor: 'var(--color-ad-shape-purple)',
  },
];

export default function AdCardsSection() {
  return (
    <section className="w-full" aria-label="Advertisement cards">
      <div className="grid w-full grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:gap-8">
        {cards.map((card, i) => (
          <article
            key={i}
            className="flex min-h-[280px] flex-col items-stretch overflow-hidden rounded-[12px] border border-[var(--color-border)] bg-white shadow-sm sm:min-h-[300px] sm:flex-row sm:items-center sm:rounded-[16px] lg:min-h-[320px]"
          >
            <div className="order-2 flex min-w-0 flex-1 flex-col justify-center px-4 py-5 sm:order-1 sm:px-5 sm:py-6 lg:px-6">
              <span className="relative mb-4 inline-flex w-fit">
                <span
                  className="absolute left-1 top-1 h-full w-full rounded-[2px]"
                  style={{ backgroundColor: '#E5AB00' }}
                  aria-hidden
                />
                <span
                  className="relative inline-block rounded-[2px] px-3 py-1 text-design-12 font-semibold uppercase tracking-wide text-white"
                  style={{
                    background:
                      'linear-gradient(90deg, #B48100 0%, #FFB600 100%)',
                  }}
                >
                  {card.tag}
                </span>
              </span>

              <div className="mb-2 flex items-center gap-1.5">
                <Image
                  src="/images/dashboard12.png"
                  alt=""
                  width={16}
                  height={16}
                  className="h-4 w-4 shrink-0 object-contain"
                  aria-hidden
                />
                <span className="text-design-14 font-medium text-[var(--color-black)]">
                  {card.brand}
                </span>
              </div>

              <div className="mb-4">
                <span
                  className={`block font-semibold leading-tight text-[var(--color-black)] ${
                    i === 0 ? 'text-design-18' : 'text-design-16'
                  }`}
                >
                  {card.titleLine1}
                </span>
                <span className="block text-design-24 font-semibold leading-tight text-[var(--color-black)]">
                  {card.titleLine2}
                </span>
              </div>

              <div className="flex flex-col gap-3 sm:flex-col">
                <Link
                  href="/product-list"
                  className="inline-flex min-h-[40px] w-fit items-center justify-center rounded px-6 py-2 text-design-14 font-medium text-white transition hover:opacity-95 bg-[var(--color-main-blue)]"
                >
                  Order Now
                </Link>
                <Link
                  href="/product-list"
                  className="inline-flex min-h-[40px] w-fit items-center justify-center rounded border border-[var(--color-main-blue)] bg-transparent px-6 py-2 text-design-14 font-medium text-[var(--color-main-blue)] transition hover:bg-[var(--color-main-blue)]/5"
                >
                  Explore more
                </Link>
              </div>
            </div>

            {/* Right: image + shape on their own white panel */}
            <div className="relative order-1 flex min-h-[180px] w-full shrink-0 items-center justify-center overflow-hidden bg-white px-4 py-4 sm:order-2 sm:min-h-[200px] sm:w-[45%] sm:justify-end sm:px-3 lg:w-[50%] lg:overflow-visible lg:px-4">
              <div
                className="absolute -bottom-[75%] -right-[55%] h-[140%] w-[140%] rounded-[70%_20%_70%_30%] opacity-90"
                style={{ backgroundColor: card.shapeColor }}
                aria-hidden
              />

              <div
                className={`relative z-10 ${
                  i === 0
                    ? 'h-[170px] w-[140px] sm:h-[195px] sm:w-[160px] lg:h-[250px] lg:w-[206px]'
                    : 'h-[120px] w-[180px] sm:h-[147px] sm:w-[220px] lg:-ml-[62px] lg:h-[187px] lg:w-[280px]'
                }`}
              >
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  className={
                    i === 0
                      ? 'object-contain object-right'
                      : 'object-cover object-left'
                  }
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 220px, 280px"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
