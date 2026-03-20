'use client';

import Image from 'next/image';

/** Intrinsic size of public/images/banner.png — keeps full image visible at any width (no crop, no letterboxing). */
const BANNER_WIDTH = 5952;
const BANNER_HEIGHT = 1656;

export default function ProductListBanner() {
  return (
    <section
      className="-mt-1 mb-4 overflow-hidden rounded-xl sm:mt-0 sm:mb-8 sm:rounded-2xl"
      aria-label="Banner"
    >
      <Image
        src="/images/banner.png"
        alt="Banner"
        width={BANNER_WIDTH}
        height={BANNER_HEIGHT}
        className="h-auto w-full object-contain"
        priority
        sizes="100vw"
      />
    </section>
  );
}
