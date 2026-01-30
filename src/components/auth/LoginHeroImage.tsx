'use client';

import Image from 'next/image';

/** Right column hero image - hidden on small/tablet, visible lg+ per Figma */
export function LoginHeroImage() {
  return (
    <div className="hidden lg:block flex-1 min-h-[280px] md:min-h-[400px] bg-[#f3f4f6] p-4 sm:p-6">
      <div className="relative w-full h-full min-h-[280px] rounded-[16px] overflow-hidden">
        <Image
          src="/images/signin.png"
          alt="Sign in to TibilMall"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 0px"
          priority
        />
      </div>
    </div>
  );
}
