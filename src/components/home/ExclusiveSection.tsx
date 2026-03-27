'use client';

import Image from 'next/image';
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Play,
  ShoppingCart,
} from 'lucide-react';

const products = [
  { name: 'NovaPulse Smartwatch', price: 229, image: '/images/sellerwatch.png' },
  { name: 'Velloré Classic Bomber Jacket', price: 115, image: '/images/jacket.png' },
  { name: 'SonicEdge Pro Headphones', price: 150, image: '/images/customerReviews/seller2.png' },
  { name: 'DriftStep Sneakers', price: 84, image: '/images/shoes.png' },
  { name: 'Zenith Polarized Sunglasses', price: 64, image: '/images/customerReviews/seller1.png' },
  { name: 'Elara Gold Perfume', price: 60, image: '/images/perfume.png' },
  { name: 'Astrid Mini Tote Bag', price: 108, image: '/images/bag.png' },
  { name: 'Eclipse Chrono Watch', price: 360, image: '/images/sellerwatch (2).png' },
];

export default function ExclusiveSection() {
  return (
    <section className="w-full min-w-0 rounded-2xl px-3 py-10 sm:px-4 md:py-12">
      {/* HEADER */}
      <div className="mb-6 flex min-w-0 items-center justify-between gap-3">
        <h2 className="flex min-w-0 items-center gap-2 text-[16px] font-semibold text-[#131313] sm:text-[18px]">
          <span className="shrink-0 text-[#F5B700]">⚡</span>
          <span className="truncate">Exclusive on TibilMall</span>
        </h2>

        <a
          href="#"
          className="shrink-0 text-[13px] text-[#6B7280] hover:underline sm:text-[14px]"
        >
          View All →
        </a>
      </div>

      {/* GRID */}
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {products.map((product, i) => (
          <article
            key={i}
            className="
              bg-white rounded-[20px] pt-4
              shadow-[0_8px_24px_rgba(0,0,0,0.06)]
            "
          >
            {/* IMAGE */}
            <div className="relative w-full h-[220px] sm:h-[240px] md:h-[251.67px] overflow-hidden rounded-[14px] bg-white">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain bg-white py-5"
              />

              {/* EXCLUSIVE TAG */}
              <span
                className="
                  absolute top-1 left-3
                  inline-flex items-center justify-center
                  h-[30px] px-[10px]
                  text-white text-[11px] font-medium
                  rounded-[6px]
                  shadow-[3px_4px_0px_0px_rgba(0,0,0,0.15)]
                "
                style={{
                  background:
                    'linear-gradient(90deg, #8E44AD 0%, #3A1C47 100%)',
                }}
              >
                EXCLUSIVE
              </span>

              {/* WISHLIST */}
              <button
                type="button"
                className="
                  absolute top-1 right-3
                  w-[34px] h-[34px] sm:w-[36px] sm:h-[36px]
                  rounded-full bg-white
                  shadow-[0_4px_12px_rgba(0,0,0,0.12)]
                  flex items-center justify-center
                "
              >
                <Heart className="w-4 h-4 text-[#131313]" />
              </button>

              {/* PLAY */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div
                  className="
                    w-[46px] h-[46px] sm:w-[52px] sm:h-[52px]
                    rounded-full bg-white
                    shadow-[0_8px_20px_rgba(0,0,0,0.2)]
                    flex items-center justify-center
                  "
                >
                  <Play
                    className="w-4 h-4 sm:w-5 sm:h-5 text-[#131313]"
                    fill="currentColor"
                  />
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-4">
              <p className="text-[15px] sm:text-[16px] font-medium text-[#131313] mb-2 leading-[22px] sm:leading-[24px]">
                {product.name}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-[15px] sm:text-[16px] font-semibold text-[#131313]">
                  ${product.price}
                </span>

                <button
                  type="button"
                  className="
                    flex items-center gap-2
                    text-[11px] sm:text-[12px] font-medium
                    text-[#131313]
                    border border-[#E5E7EB]
                    px-3 py-1.5
                    rounded-[6px]
                  "
                >
                  <ShoppingCart className="w-4 h-4" />
                  ADD TO CART
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center items-center gap-3 mt-8">
        <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-[0_6px_16px_rgba(0,0,0,0.15)] flex items-center justify-center">
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-2">
          <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
          <span className="w-2 h-2 rounded-full bg-[#D1D5DB]" />
          <span className="w-2 h-2 rounded-full bg-[#D1D5DB]" />
        </div>

        <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-[0_6px_16px_rgba(0,0,0,0.15)] flex items-center justify-center">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
