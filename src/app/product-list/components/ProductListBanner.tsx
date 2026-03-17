'use client';

import Image from 'next/image';

export default function ProductListBanner() {
  return (
    <section className="relative rounded-xl sm:rounded-2xl overflow-hidden -mt-1 mb-4 sm:mt-0 sm:mb-8" aria-label="Banner">
      <div className="relative h-[100px] sm:h-[280px] md:h-[400px] w-full">
        <Image
          src="/images/banner.png"
          alt="Banner"
          fill
          className="object-contain sm:object-cover"
          priority
          sizes="100vw"
        />
      </div>
    </section>
  );
}
