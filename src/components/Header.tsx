'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function SignInPage() {
  const [email, setEmail] = useState('davidjosh32@gmail.com');
  const [password, setPassword] = useState('Davidjosh332@');

  return (
    <div className=" bg-[#f5f5f5] flex flex-col">
      {/* Top strip */}
      <div className="w-full bg-[#1e3a8a] text-white text-[11px] sm:text-[12px]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-8 flex items-center justify-between gap-3">
          <span className="hidden sm:block">REVOLUTIONIZING ONLINE SHOPPING</span>
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden md:flex items-center gap-2">
              <span>f</span>
              <span>in</span>
              <span>t</span>
              <span>y</span>
              <span>p</span>
            </div>
            <span className="hidden sm:inline">Contact Us</span>
            <span className="hidden sm:inline">Track Your Order</span>
            <button className="bg-[#facc15] text-black px-2 py-1 rounded text-[10px] sm:text-[11px]">
              Start Selling
            </button>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="w-full bg-white border-b">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-1 flex flex-wrap items-center gap-3">
          <Image src="/images/logo.png" alt="" width={50} height={40} className="shrink-0" />

          <button className="hidden md:inline-flex h-8 justify-center text-center p-2 bg-[#1e3a8a] text-white text-[10px] rounded">
            All Categories
          </button>

          <div className="flex flex-1 min-w-[180px]">
            <input
              className="flex-1 h-10 border border-[#d1d5db] px-3 text-[14px] rounded-l"
              placeholder="Search for products..."
            />
            <button className="h-10 px-4 bg-[#1e3a8a] text-white text-[14px] rounded-r">
              Search
            </button>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 text-[12px] sm:text-[13px] text-black">
            <span className="hidden sm:inline">Chat</span>
            <span className="hidden sm:inline">Wishlist</span>
            <span>Cart</span>
            <button className="h-8 px-3 border border-[#1e3a8a] text-[#1e3a8a] rounded">
              Login
            </button>
            <button className="hidden sm:inline-flex h-8 p-2 bg-[#1e3a8a] text-white rounded">
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="w-full bg-white border-[#fee2e2] text-black">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="hidden lg:flex items-center justify-center gap-5 h-10 text-[13px]">
            <span>Explore</span>
            <span>Top Products</span>
            <span>Top Stores</span>
            <span>Top Deals</span>
            <span>Just Dropped</span>
            <span className="bg-[#fee2e2] text-[#dc2626] px-2 py-0.5 rounded">
              Live now
            </span>
            <span>Upcoming Soon</span>
            <span>Exclusively on TibiMall</span>
            <span>Featured</span>
            <span>Trendy</span>
            <span>Discover</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-6 lg:h-10 text-[12px] lg:text-[13px]">
            <button className="bg-[#1e3a8a] text-white px-3 py-1.5 rounded">
              Browse Categories
            </button>
            <span>Fashion & Apparel</span>
            <span className="hidden sm:inline">Beauty & Personal Care</span>
            <span className="hidden md:inline">Home & Living</span>
            <span className="hidden md:inline">Jewelry & Watches</span>
            <span className="hidden lg:inline">Electronics & Gadgets</span>
            <span className="hidden lg:inline">Handmade & Artisanal</span>
            <span className="hidden xl:inline">Toys & Kids</span>
            <span className="hidden xl:inline">Spiritual & Cultural Goods</span>
          </div>
        </div>
      </nav>
    </div>
  );
}
