'use client';

import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="bg-[#f7f7f7]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">

        {/* ================= HERO / LIVE SLIDER ================= */}
        <section className="mt-6">
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/images/hero-watch.png"
              alt="New Fashion Collection"
              width={1600}
              height={700}
              className="w-full h-[220px] sm:h-[320px] lg:h-[420px] object-cover"
              priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/35" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 lg:px-12">
              <span className="inline-flex items-center gap-2 text-xs bg-red-600 text-white px-3 py-1 rounded-full w-max mb-3">
                ● LIVE <span className="opacity-80">2.4K Watching</span>
              </span>

              <h1 className="text-white text-xl sm:text-3xl lg:text-4xl font-semibold leading-tight max-w-xl">
                New Fashion <br className="hidden sm:block" />
                Collection Launch
              </h1>

              <div className="mt-4 flex items-center gap-3">
                <span className="text-white text-sm">UrbanTech</span>
                <button className="bg-red-600 text-white text-xs px-4 py-2 rounded-md">
                  Watch Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROMO CARDS ================= */}
        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-6 flex items-center gap-4">
            <div className="flex-1">
              <span className="inline-block text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded mb-2">
                FEATURED
              </span>
              <h3 className="font-semibold text-lg">A56 Headset</h3>
              <p className="text-sm text-gray-500 mb-4">Sound Pro</p>
              <div className="flex gap-3">
                <button className="bg-blue-900 text-white text-xs px-4 py-2 rounded">
                  Order Now
                </button>
                <button className="border text-xs px-4 py-2 rounded">
                  Explore more
                </button>
              </div>
            </div>

            <Image
              src="/images/headset.png"
              alt="Headset"
              width={140}
              height={140}
              className="object-contain"
            />
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-6 flex items-center gap-4">
            <div className="flex-1">
              <span className="inline-block text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded mb-2">
                ADVERTISEMENT
              </span>
              <h3 className="font-semibold text-lg">Beauty Products</h3>
              <p className="text-sm text-gray-500 mb-4">50% OFF</p>
              <div className="flex gap-3">
                <button className="bg-blue-900 text-white text-xs px-4 py-2 rounded">
                  Order Now
                </button>
                <button className="border text-xs px-4 py-2 rounded">
                  Explore more
                </button>
              </div>
            </div>

            <Image
              src="/images/beauty.png"
              alt="Beauty"
              width={140}
              height={140}
              className="object-contain"
            />
          </div>
        </section>

        {/* ================= TOP STORES ================= */}
        <section className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold">Top Stores</h2>
            <button className="text-sm text-blue-600">View All</button>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="min-w-[96px] flex flex-col items-center text-center"
              >
                <div className="relative">
                  <Image
                    src={`/images/store-${i + 1}.png`}
                    alt="Store"
                    width={72}
                    height={72}
                    className="rounded-full border-2 border-red-500"
                  />
                  <span className="absolute -top-1 right-0 bg-red-600 text-white text-[10px] px-1.5 rounded">
                    LIVE
                  </span>
                </div>
                <p className="text-xs font-medium mt-2">
                  Store Name
                </p>
                <span className="text-[11px] text-gray-500">
                  ⭐ 4.8 (2K)
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ================= RECENTLY VIEWED ================= */}
        <section className="mt-10 mb-12">
          <h2 className="text-base font-semibold mb-4">
            Related items you’ve viewed
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-3 flex flex-col items-center"
              >
                <Image
                  src={`/images/watch-${i + 1}.png`}
                  alt="Product"
                  width={120}
                  height={120}
                  className="object-contain mb-3"
                />
                <p className="text-xs font-medium text-center">
                  NovaPulse Smartwatch
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
