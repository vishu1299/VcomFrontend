'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  Menu,
  ChevronDown,
  MessageCircle,
  Heart,
  ShoppingBag,
  Truck,
  X,
} from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaPinterestP } from 'react-icons/fa';

const MAIN_BLUE = '#1E3A8A';
const BORDER_GRAY = '#e5e7eb';
const INPUT_BORDER = '#d1d5db';
const TEXT_BLACK = '#131313';
const LIVE_RED_BG = '#fee2e2';
const LIVE_RED = '#dc2626';
const YELLOW_BTN = '#FACC15';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className=" bg-[#f5f5f5] overflow-x-hidden">
      <TopStrip />

      <div className="lg:hidden">
        <MobileHeader
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </div>

      <div className="hidden lg:block">
        <DesktopHeader />
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          aria-hidden
        >
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden
          />
          <aside
            className="absolute top-0 right-0 w-full max-w-[320px] sm:max-w-[360px] h-full bg-white shadow-xl overflow-y-auto z-50 animate-in slide-in-from-right duration-200"
            role="dialog"
            aria-label="Menu"
          >
            <div className="sticky top-0 bg-white border-b border-(--color-border) p-4 flex items-center justify-between">
              <span className="text-[20px] font-semibold text-[#131313]" style={{ fontFamily: 'var(--font-poppins)' }}>
                Menu
              </span>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 rounded-lg border border-(--color-border) flex items-center justify-center text-[#131313]"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 space-y-6">
              <div>
                <p className="text-[12px] font-medium text-[#767676] uppercase tracking-wide mb-3">Navigation</p>
                <NavItems mobile />
              </div>
              <hr className="border-(--color-border)" />
              <div>
                <p className="text-[12px] font-medium text-[#767676] uppercase tracking-wide mb-3">Categories</p>
                <CategoryItems mobile />
              </div>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}

/* ───────────────────────── TOP STRIP (Figma: TOP NAV, 50px, #1E3A8A) ───────────────────────── */

function TopStrip() {
  return (
    <div
      className="w-full text-white border-b border-white/10"
      style={{ backgroundColor: MAIN_BLUE }}
    >
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[126px] min-h-[43px] py-1 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
          <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-wide truncate">
            REVOLUTIONIZING ONLINE SHOPPING
          </span>
          <div className="hidden sm:flex items-center gap-3 lg:gap-4">
            <a href="#" className="text-white hover:opacity-90 transition" aria-label="Facebook">
              <FaFacebookF className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="text-white hover:opacity-90 transition" aria-label="Instagram">
              <FaInstagram className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="text-white hover:opacity-90 transition" aria-label="YouTube">
              <FaYoutube className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="text-white hover:opacity-90 transition" aria-label="Twitter">
              <FaTwitter className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="text-white hover:opacity-90 transition" aria-label="Pinterest">
              <FaPinterestP className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 shrink-0">
          <Link href="#" className="text-[10px] sm:text-[11px] font-medium hover:underline whitespace-nowrap">
            Contact Us
          </Link>
          <Link href="#" className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-medium hover:underline whitespace-nowrap">
            <Truck className="w-3.5 h-3.5 shrink-0" />
            Track Your Order
          </Link>
          <button
            type="button"
            className="min-h-[32px] px-3 sm:px-4 rounded-md text-[11px] sm:text-[12px] font-semibold text-[#131313] whitespace-nowrap transition hover:opacity-95"
            style={{ backgroundColor: YELLOW_BTN }}
          >
            Start Selling
          </button>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── MOBILE HEADER ───────────────────────── */

function MobileHeader({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (v: boolean) => void;
}) {
  return (
    <div className="bg-white border-b border-[#e5e7eb]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-3 sm:py-4 flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/images/logo.png"
              alt="TibiMall"
              width={40}
              height={32}
              className="w-10 h-8 object-contain"
            />
            <span
              className="text-[18px] sm:text-[20px] font-semibold text-[#131313] hidden sm:inline"
              style={{ fontFamily: 'var(--font-poppins)', lineHeight: '100%' }}
            >
              TibilMall
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="h-11 w-11 flex items-center justify-center rounded-lg border border-[#e5e7eb] bg-white text-[#131313]"
            aria-expanded={isMobileMenuOpen}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 min-h-[44px] rounded-lg text-white text-[14px] font-medium"
          style={{ backgroundColor: MAIN_BLUE }}
        >
          All Categories
          <ChevronDown className="w-4 h-4" />
        </button>

        <div className="flex min-h-[44px]">
          <input
            type="search"
            className="flex-1 min-w-0 h-11 border border-[#d1d5db] rounded-l-lg pl-3 pr-3 text-[14px] text-[#131313] placeholder:text-[#767676] focus:outline-none focus:ring-1 focus:ring-[#1E3A8A]"
            style={{ borderRight: 'none' }}
            placeholder="Search for products..."
          />
          <button
            type="button"
            className="h-11 px-4 rounded-r-lg text-white text-[14px] font-medium shrink-0"
            style={{ backgroundColor: MAIN_BLUE }}
          >
            Search
          </button>
        </div>

        <div className="flex items-center gap-[16px] lg:gap-[24px] h-[69px] shrink-0">
          {/* Chat */}
          <Link
            href="#"
            className="flex flex-col items-center justify-center min-w-[44px] min-h-[44px] text-[#131313] hover:opacity-80 transition"
            aria-label="Chat"
          >
            <MessageCircle className="w-[20px] h-[20px]" />
            <span className="hidden lg:block text-[12px] font-medium leading-none mt-[6px]">
              Chat
            </span>
          </Link>

          {/* Wishlist */}
          <Link
            href="#"
            className="flex flex-col items-center justify-center min-w-[44px] min-h-[44px] text-[#131313] hover:opacity-80 transition"
            aria-label="Wishlist"
          >
            <Heart className="w-[20px] h-[20px]" />
            <span className="hidden lg:block text-[12px] font-medium leading-none mt-[6px]">
              Wishlist
            </span>
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            className="relative flex flex-col items-center justify-center min-w-[44px] min-h-[44px] text-[#131313] hover:opacity-80 transition"
            aria-label="Cart"
          >
            <div className="relative">
              <ShoppingBag className="w-[20px] h-[20px]" />
              <span
                className="
          absolute
          -top-[6px]
          -right-[8px]
          min-w-[16px]
          h-[16px]
          rounded-full
          bg-[YELLOW_BTN]
          text-[#131313]
          text-[10px]
          font-bold
          flex
          items-center
          justify-center
          px-[4px]
        "
              >
                1
              </span>
            </div>
            <span className="hidden lg:block text-[12px] font-medium leading-none mt-[6px]">
              Cart
            </span>
          </Link>

          {/* Profile Avatar -> Account page */}
          <Link
            href="/account"
            className="
      hidden
      lg:flex
      w-[61px]
      h-[61px]
      rounded-full
      border-[2px]
      border-white
      p-[10px]
      overflow-hidden
      items-center
      justify-center
      shrink-0
      hover:opacity-90
      transition
    "
            aria-label="My Account"
          >
            <img
              src="/images/logo.png"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </Link>
        </div>

      </div>
    </div>
  );
}

/* ───────────────────────── DESKTOP HEADER ───────────────────────── */

function DesktopHeader() {
  return (
    <>
      <header className="bg-white border-b border-[#e5e7eb]">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8 xl:px-12 2xl:px-[136px]  flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-0">
          {/* Logo + brand */}
          <div className="flex items-center shrink-0 border-b border-[#e5e7eb] lg:border-b-0 lg:border-r lg:border-[#e5e7eb] lg:pr-4 xl:pr-6 pb-3 lg:pb-0 lg:py-1">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <Image
                src="/images/logo.png"
                alt=""
                width={50}
                height={40}
                className="w-10 h-8 lg:w-12 lg:h-10 object-contain shrink-0"
              />
              <span
                className="text-[18px] lg:text-[20px] font-semibold text-[#131313] whitespace-nowrap"
                style={{ fontFamily: 'var(--font-poppins)', lineHeight: '100%' }}
              >
                TibilMall
              </span>
            </Link>
          </div>

          {/* Attached: All Categories + Search input + Search button */}
          <div className="flex flex-1 min-w-0 lg:min-w-[280px] xl:min-w-[360px] border-b border-[#e5e7eb] lg:border-b-0 lg:border-r lg:border-[#e5e7eb] lg:px-4 xl:px-6 lg:py-1 pb-3 lg:pb-0">
            <div className="flex w-full rounded-lg overflow-hidden border border-[#d1d5db] focus-within:ring-1 focus-within:ring-[#1E3A8A] focus-within:border-[#1E3A8A]">
              <button
                type="button"
                className="flex items-center gap-1.5 lg:gap-2 h-10 px-3 lg:px-4 rounded-none text-white text-[12px] lg:text-[14px] font-medium shrink-0 border-r border-[#1E3A8A]/30"
                style={{ backgroundColor: MAIN_BLUE }}
              >
                All Categories
                <ChevronDown className="w-3.5 h-3.5 lg:w-4 lg:h-4 shrink-0" />
              </button>
              <input
                type="search"
                className="flex-1 min-w-0 h-10 px-3 lg:px-4 rounded-none border-0 text-[12px] lg:text-[14px] text-[#131313] placeholder:text-[#767676] focus:outline-none focus:ring-0 bg-white"
                placeholder="Search for products..."
              />
              <button
                type="button"
                className="h-10 px-4 lg:px-5 rounded-none text-white text-[12px] lg:text-[14px] font-medium shrink-0 border-l border-[#1E3A8A]/30"
                style={{ backgroundColor: MAIN_BLUE }}
              >
                Search
              </button>
            </div>
          </div>

          {/* Actions: Chat, Wishlist, Cart, Login, Logout */}
          <div
            className="
    flex
    items-center
    gap-[24px]
    h-[69px]
    shrink-0
  "
          >
            {/* Chat */}
            <Link
              href="#"
              className="flex flex-col items-center gap-[6px] text-[#131313] hover:opacity-80 transition"
              aria-label="Chat"
            >
              <MessageCircle className="w-[20px] h-[20px]" />
              <span className="text-[12px] font-medium leading-none">Chat</span>
            </Link>

            {/* Wishlist */}
            <Link
              href="#"
              className="flex flex-col items-center gap-[6px] text-[#131313] hover:opacity-80 transition"
              aria-label="Wishlist"
            >
              <Heart className="w-[20px] h-[20px]" />
              <span className="text-[12px] font-medium leading-none">Wishlist</span>
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative flex flex-col items-center gap-[6px] text-[#131313] hover:opacity-80 transition"
              aria-label="Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-[20px] h-[20px]" />
                <span
                  className="
          absolute
          -top-[4px]
          -right-[6px]
          min-w-[16px]
          h-[16px]
          rounded-full
          bg-[YELLOW_BTN]
          text-[#131313]
          text-[10px]
          font-bold
          flex
          items-center
          justify-center
          px-[4px]
        "
                >
                  1
                </span>
              </div>
              <span className="text-[12px] font-medium leading-none">Cart</span>
            </Link>

            {/* Profile Avatar -> Account page */}
            <Link
              href="/account"
              className="
      w-[61px]
      h-[61px]
      rounded-full
      border-[2px]
      border-white
      p-[10px]
      overflow-hidden
      flex
      items-center
      justify-center
      shrink-0
      hover:opacity-90
      transition
    "
              aria-label="My Account"
            >
              <img
                src="/images/logo.png"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </Link>
          </div>

        </div>
      </header>

      <nav className="bg-white border-b border-[BORDER_GRAY]">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-8 xl:px-12 2xl:px-[136px] py-1.5 border-b border-[BORDER_GRAY] flex flex-wrap items-center justify-center gap-4 lg:gap-5 xl:gap-6 text-[14px]">
          <NavItems />
        </div>
        <div className="max-w-[1920px] mx-auto px-6 lg:px-8 xl:px-12 2xl:px-[136px] py-1.5 flex border-b border-[BORDER_GRAY]  items-center justify-center gap-4 lg:gap-5 xl:gap-6">
          <button
            type="button"
            className="flex items-center gap-2 h-9 px-4 rounded-sm text-white text-[14px] font-medium shrink-0"
            style={{ backgroundColor: MAIN_BLUE }}
          >
            Browse Categories
            <ChevronDown className="w-4 h-4" />
          </button>
          <CategoryItems />
        </div>
      </nav>
    </>
  );
}

/* ───────────────────────── SHARED NAV & CATEGORY ITEMS ───────────────────────── */

function NavItems({ mobile }: { mobile?: boolean }) {
  const linkClass = `text-[14px] font-normal text-[#131313] hover:underline ${mobile ? 'block py-2' : ''}`;
  const wrapperClass = mobile
    ? 'flex flex-col gap-1'
    : 'flex flex-wrap items-center gap-4 lg:gap-8';

  return (
    <div className={wrapperClass} style={{ fontFamily: 'var(--font-poppins)', lineHeight: '100%' }}>
      <Link href="#" className={`${linkClass} ${!mobile ? 'border-b-2 border-[#131313] pb-0.5' : ''}`}>
        Explore
      </Link>
      <Link href="/product-list" className={linkClass}>Top Products</Link>
      <Link href="#" className={linkClass}>Top Stores</Link>
      <Link href="#" className={linkClass}>Top Deals</Link>
      <Link href="#" className={linkClass}>Just Dropped</Link>
      <Link
        href="/live-now"
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[14px] border border-red-500 font-normal ${mobile ? 'w-fit' : ''}`}
        style={{ backgroundColor: LIVE_RED_BG, color: LIVE_RED }}
      >
        Live now
        <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626]" aria-hidden />
      </Link>
      <Link href="#" className={linkClass}>Upcoming Soon</Link>
      <Link href="#" className={linkClass}>Exclusively on TibiMall</Link>
      <Link href="#" className={linkClass}>Featured</Link>
      <Link href="#" className={linkClass}>Trendy</Link>
      <Link href="#" className={linkClass}>Discover</Link>
    </div>
  );
}

function CategoryItems({ mobile }: { mobile?: boolean }) {
  const items = [
    'Fashion & Apparel',
    'Beauty & Personal Care',
    'Home & Living',
    'Jewelry & Watches',
    'Electronics & Gadgets',
    'Handmade & Artisanal',

  ];

  const linkClass = `text-[14px] font-normal text-[#131313] hover:underline ${mobile ? 'block py-2' : ''}`;
  const wrapperClass = mobile
    ? 'flex flex-col gap-1'
    : 'flex  items-center gap-4 lg:gap-5 xl:gap-6 text-nowrap';

  return (
    <div className={wrapperClass} style={{ fontFamily: 'var(--font-poppins)', lineHeight: '100%' }}>
      {items.map((label) => (
        <Link key={label} href="#" className={linkClass}>
          {label}
        </Link>
      ))}
    </div>
  );
}
