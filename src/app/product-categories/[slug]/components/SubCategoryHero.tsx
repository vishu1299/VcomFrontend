'use client';

import Image from 'next/image';

type SubCategoryHeroProps = {
  title: string;
  image?: string;
};

export default function SubCategoryHero({ title, image }: SubCategoryHeroProps) {
  const bgImage = image ?? 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=1200&q=80&fit=crop';

  return (
    <section
      className="relative w-full min-h-[140px] h-[160px] xs:h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] xl:h-[320px] rounded-lg sm:rounded-[10px] overflow-hidden mb-4 sm:mb-6 lg:mb-8"
      aria-label={`${title} category`}
      style={{ fontFamily: 'var(--font-poppins)' }}
    >
      <Image
        src={bgImage}
        alt=""
        fill
        className="object-cover object-center"
        priority
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1440px"
        unoptimized={bgImage.startsWith('http')}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
        }}
      />
      <div className="absolute inset-0 flex items-center pl-3 sm:pl-6 md:pl-10 lg:pl-14">
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight max-w-[90%]">
          {title}
        </h1>
      </div>
    </section>
  );
}
