'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
  { name: 'Lumen LED Desk Lamp', price: 45, image: '/images/signin.png' },
  { name: 'TrailRunner Hiking Boots', price: 132, image: '/images/shoes.png' },
  { name: 'Nimbus Wireless Earbuds', price: 95, image: '/images/customerReviews/seller2.png' },
  { name: 'Velvet Lounge Chair', price: 280, image: '/images/success.png' },
];

const PAGE_SIZE = 4;

export default function ExclusiveSection() {
  const pageCount = Math.max(1, Math.ceil(products.length / PAGE_SIZE));
  const [page, setPage] = useState(0);
  const visible = products.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  const goPrev = () => setPage((p) => (p - 1 + pageCount) % pageCount);
  const goNext = () => setPage((p) => (p + 1) % pageCount);

  return (
    <section className="w-full min-w-0 bg-transparent px-3 py-10 sm:px-4 md:py-12">
      {/* HEADER */}
      <div className="mb-6 flex min-w-0 items-center justify-between gap-3">
        <h2 className="flex min-w-0 items-center gap-2 text-[16px] font-semibold text-[#131313] sm:text-[18px]">
          <Image
            src="/home-exclusive.svg"
            alt=""
            width={24}
            height={24}
            className="h-5 w-5 shrink-0 object-contain sm:h-6 sm:w-6"
            aria-hidden
          />
          <span className="truncate">Exclusive on TibilMall</span>
        </h2>

        <Link
          href="/exclusive"
          className="shrink-0 text-[13px] text-[#6B7280] hover:underline sm:text-[14px]"
        >
          View All →
        </Link>
      </div>

      {/* GRID */}
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {visible.map((product, i) => (
          <article
            key={`${page}-${i}`}
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
        <button
          type="button"
          onClick={goPrev}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-[0_6px_16px_rgba(0,0,0,0.15)] flex items-center justify-center transition hover:opacity-90"
          aria-label="Previous exclusive products"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-2" role="tablist" aria-label="Exclusive pages">
          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === page}
              onClick={() => setPage(i)}
              className={`h-2 w-2 rounded-full transition ${
                i === page ? 'bg-[#2563EB]' : 'bg-[#D1D5DB] hover:bg-[#9CA3AF]'
              }`}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-[0_6px_16px_rgba(0,0,0,0.15)] flex items-center justify-center transition hover:opacity-90"
          aria-label="Next exclusive products"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
