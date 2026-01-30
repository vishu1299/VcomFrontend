'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviewers = [
  { name: 'Maria Hyle', image: '/images/logo.png', active: true },
  { name: 'John Doe', image: '/images/logo.png', active: false },
  { name: 'Jane Smith', image: '/images/logo.png', active: false },
  { name: 'Alex Lee', image: '/images/logo.png', active: false },
  { name: 'Sam Wilson', image: '/images/logo.png', active: false },
];

export default function CustomerReviewsSection() {
  return (
    <section className="mt-8 sm:mt-10 lg:mt-12 py-8 sm:py-10" aria-label="Customer reviews">
      <h2 className="text-design-24 sm:text-design-32 font-semibold text-[var(--color-black)] text-center mb-6 sm:mb-8">
        Customer Reviews
      </h2>

      <div className="relative max-w-3xl mx-auto">
        <div className="bg-white rounded-xl sm:rounded-2xl border border-[var(--color-border)] p-6 sm:p-8 shadow-sm">
          <p className="text-design-16 sm:text-design-18 text-[var(--color-black)] leading-relaxed text-center mb-6 sm:mb-8">
            <span className="text-4xl sm:text-5xl text-amber-400 font-serif leading-none">"</span>
            The product quality and customer service exceeded my expectations. I will definitely
            shop here again and recommend to my friends.
            <span className="text-4xl sm:text-5xl text-amber-400 font-serif leading-none">"</span>
          </p>

          <div className="flex items-center justify-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
            <button
              type="button"
              className="w-10 h-10 rounded-full bg-[var(--color-border)] hover:bg-[var(--color-muted-alt-2)]/20 flex items-center justify-center shrink-0 transition"
              aria-label="Previous reviewer"
            >
              <ChevronLeft className="w-5 h-5 text-[var(--color-black)]" />
            </button>
            <div className="flex items-end gap-2 sm:gap-4">
              {reviewers.map((r, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center shrink-0 transition ${
                    r.active ? 'scale-110' : 'scale-90 opacity-70'
                  }`}
                >
                  <div
                    className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 ${
                      r.active ? 'border-amber-400' : 'border-[var(--color-border)]'
                    }`}
                  >
                    <Image
                      src={r.image}
                      alt={r.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <span
                    className={`text-design-12 sm:text-design-14 mt-2 font-medium ${
                      r.active ? 'text-[var(--color-black)]' : 'text-[var(--color-muted-alt-2)]'
                    }`}
                  >
                    {r.name}
                  </span>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="w-10 h-10 rounded-full bg-[var(--color-border)] hover:bg-[var(--color-muted-alt-2)]/20 flex items-center justify-center shrink-0 transition"
              aria-label="Next reviewer"
            >
              <ChevronRight className="w-5 h-5 text-[var(--color-black)]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
