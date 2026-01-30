'use client';

import Image from 'next/image';

const cards = [
  {
    tag: 'ADVERTISEMENT',
    brand: 'Futurebeats',
    title: 'Sound Pro A56 Headset',
    image: '/images/signin.png',
    imageAlt: 'Headset',
  },
  {
    tag: 'ADVERTISEMENT',
    brand: 'Futurebeats',
    title: '50% OFF Beauty Products',
    image: '/images/create.png',
    imageAlt: 'Beauty',
  },
];

export default function AdCardsSection() {
  return (
    <section className="mt-6 sm:mt-8 lg:mt-10" aria-label="Advertisement cards">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {cards.map((card, i) => (
          <article
            key={i}
            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shadow-sm border border-[var(--color-border)]"
          >
            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <span className="inline-block text-design-12 sm:text-design-14 bg-amber-100 text-amber-800 px-2 py-1 rounded mb-2 w-fit font-medium">
                {card.tag}
              </span>
              <p className="text-design-14 text-[var(--color-muted-alt-2)] mb-0.5">
                {card.brand}
              </p>
              <h3 className="text-design-18 sm:text-design-20 lg:text-design-24 font-semibold text-[var(--color-black)] mb-4">
                {card.title}
              </h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <button type="button" className="btn-cta-sm w-full sm:w-auto">
                  Order Now
                </button>
                <button
                  type="button"
                  className="btn-outline min-h-[40px] py-2 px-4 text-design-14 w-full sm:w-auto"
                >
                  Explore more
                </button>
              </div>
            </div>
            <div className="relative w-full sm:w-36 md:w-40 h-32 sm:h-40 flex-shrink-0 flex items-center justify-center">
              <Image
                src={card.image}
                alt={card.imageAlt}
                width={160}
                height={160}
                className="object-contain w-full h-full"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
