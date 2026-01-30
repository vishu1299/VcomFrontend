'use client';

import Image from 'next/image';



export function ForgotPasswordHero() {
  return (
    <div
      className="hidden lg:flex flex-1 min-h-[280px] md:min-h-[400px] items-center justify-center p-4 sm:p-6"
    
    >
     <div
            className="
        relative
        w-full
        max-w-[420px]
        aspect-[783/621]
        sm:max-w-[520px]
        lg:max-w-[560px]
        xl:max-w-[620px]
        rounded-[24px]
        overflow-hidden
        bg-[#DBE7F5]
      "
          >
            <Image
              src="/images/forgot.png"
              alt="Forgot username"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </div>
    </div>
  );
}
