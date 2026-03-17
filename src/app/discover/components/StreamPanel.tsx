'use client';

import Image from 'next/image';
import { Eye } from 'lucide-react';
import { DISCOVER_STREAM_PRODUCTS } from '../data/products';

const STORE = {
  name: 'UrbanTech',
  handle: '@urbantech00',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&q=80',
};

const BG_IMAGE = 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80';

export default function StreamPanel() {
  const featured = DISCOVER_STREAM_PRODUCTS[0];

  return (
    <div className="relative w-full h-full min-h-[600px] rounded-3xl overflow-hidden text-white">

      {/* Background Image */}
      <Image
        src={BG_IMAGE}
        alt="Live product background"
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority
      />

      {/* Blur overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/40" />

      {/* Content */}
      <div className="relative flex flex-col justify-between h-full p-5">

        {/* ── TOP ── */}
        <div>
          {/* Profile row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-red-500 shrink-0">
                <Image
                  src={STORE.avatar}
                  alt={STORE.name}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div>
                <p className="font-semibold text-lg leading-tight">{STORE.name}</p>
                <p className="text-sm text-gray-300">{STORE.handle}</p>
              </div>
            </div>
            <button
              type="button"
              className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition"
            >
              Follow +
            </button>
          </div>

          {/* LIVE badge + viewers */}
          <div className="flex gap-3 mt-4">
            <span className="bg-red-600 px-4 py-1 rounded-md font-semibold text-sm">
              LIVE
            </span>
            <span className="bg-black/40 px-4 py-1 rounded-md flex items-center gap-1.5 text-sm">
              5.6K <Eye className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* ── BOTTOM ── */}
        {featured && (
          <div>
            {/* Badges */}
            <div className="flex gap-2 mb-3">
              <span className="bg-yellow-400 text-black px-3 py-1 text-sm font-semibold rounded-md">
                SALE
              </span>
              <span className="bg-blue-500 text-white px-3 py-1 text-sm font-semibold rounded-md">
                NEW
              </span>
            </div>

            {/* Title */}
            <h2 className="text-l font-semibold leading-snug">
              {featured.name}
              {featured.subtitle && ` ${featured.subtitle}`}
            </h2>

            {/* Price */}
            <div className="flex items-center gap-3 mt-3">
              <span className="text-3xl font-bold">${featured.price.toFixed(2)}</span>
              <span className="line-through text-gray-300 text-lg">${featured.originalPrice.toFixed(2)}</span>
            </div>

            {/* Shop Now */}
            <button
              type="button"
              className="w-full mt-5 bg-yellow-400 text-black py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition"
            >
              Shop Now →
            </button>

            {/* Swipe hint */}
            <p className="text-center text-gray-300 mt-4 text-sm">
              Swipe for more ↓
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
