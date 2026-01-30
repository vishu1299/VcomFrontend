'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

const items = [
  { name: 'NovaPulse Smartwatch', image: '/images/signin.png' },
  { name: 'Elite Fitness Tracker', image: '/images/create.png' },
  { name: 'Classic Chrono Watch', image: '/images/logo.png' },
  { name: 'Sport Band Pro', image: '/images/forgot.png' },
  { name: 'Minimalist Watch', image: '/images/otp.png' },
  { name: 'Smart Band Plus', image: '/images/success.png' },
];

export default function RelatedItemsSection() {
  return (
    <section className="mt-8 sm:mt-10 lg:mt-12" aria-label="Related to items you've viewed">
      <SectionHeader
        title="Related to items you've viewed"
        viewAllHref="#"
        viewAllLabel="View All"
      />

      <div className="relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {items.map((item, i) => (
            <article
              key={i}
              className="bg-white rounded-xl p-3 sm:p-4 flex flex-col items-center text-center border border-[var(--color-border)] shadow-sm hover:shadow transition"
            >
              <div className="relative w-full aspect-square max-w-[140px] mx-auto mb-3">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
              </div>
              <p className="text-design-14 sm:text-design-16 font-medium text-[var(--color-black)] line-clamp-2">
                {item.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
