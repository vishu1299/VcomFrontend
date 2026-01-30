'use client';

import Image from 'next/image';

export default function LiveNowBanner() {
  return (
    <section
      className="rounded-xl sm:rounded-2xl overflow-hidden mb-6 sm:mb-8 bg-white border border-[var(--color-border)]"
      aria-label="Live Now banner"
    >
      <div className="flex flex-col lg:flex-row items-stretch min-h-[280px] sm:min-h-[320px] lg:min-h-[360px]">
        <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center order-2 lg:order-1">
          <h1 className="flex items-center gap-2 text-design-24 sm:text-design-28 lg:text-design-32 font-bold text-[var(--color-black)] uppercase tracking-tight">
            LIVE NOW
            <span
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[var(--color-error)] shrink-0"
              aria-hidden
            />
          </h1>
          <p className="text-design-14 sm:text-design-16 text-[var(--color-muted-alt-2)] mt-3 sm:mt-4 max-w-xl leading-relaxed">
            Discover amazing deals on products that are live right now. Shop exclusive deals from
            verified sellers.
          </p>
          <div className="flex flex-wrap gap-3 mt-5 sm:mt-6">
            <button
              type="button"
              className="min-h-[44px] px-5 sm:px-6 rounded-lg text-design-14 sm:text-design-16 font-medium bg-[var(--color-border)] text-[var(--color-black)] hover:bg-[var(--color-muted-alt-2)]/20 transition"
            >
              2k Products
            </button>
            <button
              type="button"
              className="min-h-[44px] px-5 sm:px-6 rounded-lg text-design-14 sm:text-design-16 font-medium border border-[var(--color-border)] bg-white text-[var(--color-black)] hover:bg-[var(--color-border)] transition"
            >
              2k Upcoming Lives
            </button>
          </div>
        </div>
        <div className="relative w-full lg:w-[45%] xl:w-[50%] min-h-[200px] sm:min-h-[240px] lg:min-h-full order-1 lg:order-2 bg-amber-100/80">
          <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] aspect-square">
              <Image
                src="/images/signin.png"
                alt=""
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute -bottom-2 -right-2 w-1/3 aspect-square rounded-xl overflow-hidden border-2 border-white shadow-lg">
                <Image
                  src="/images/create.png"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="120px"
                />
              </div>
              <div className="absolute -top-2 -left-2 w-1/4 aspect-square rounded-lg overflow-hidden border-2 border-white shadow-lg">
                <Image
                  src="/images/logo.png"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
