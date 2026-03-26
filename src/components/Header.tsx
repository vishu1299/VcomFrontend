'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
import { useCart } from '@/context/CartContext';
import { BrowseCategoriesBarRow } from '@/components/BrowseCategoriesMegaMenu';
import {
  DesktopCategorySearchBar,
  MobileCategorySearchSheet,
} from '@/components/HeaderCategorySearch';

const MAIN_BLUE = '#1E3A8A';
const BORDER_GRAY = '#e5e7eb';
const INPUT_BORDER = '#d1d5db';
const TEXT_BLACK = '#131313';
const LIVE_RED_BG = '#fee2e2';
const LIVE_RED = '#dc2626';
const YELLOW_BTN = '#FACC15';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className=" bg-[#f5f5f5] overflow-x-hidden">
      <TopStrip />

      <div className="lg:hidden">
        <MobileHeader
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          cartCount={cartCount}
        />
      </div>

      <div className="hidden lg:block">
        <DesktopHeader cartCount={cartCount} />
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
                <Link
                  href="/product-categories"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-[14px] font-semibold text-white shadow-sm"
                  style={{ backgroundColor: MAIN_BLUE }}
                >
                  Browse all categories
                  <ChevronDown className="w-4 h-4 shrink-0" />
                </Link>
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
          <Link href="/help" className="text-[10px] sm:text-[11px] font-medium hover:underline whitespace-nowrap">
            Contact Us
          </Link>
          <Link href="/trackOrder" className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-medium hover:underline whitespace-nowrap">
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
  cartCount,
}: {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (v: boolean) => void;
  cartCount: number;
}) {
  const iconBtn =
    'relative z-10 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full text-[#131313] hover:bg-[#f3f4f6] active:bg-[#e5e7eb] transition shrink-0';

  return (
    <div className="bg-white border-b border-[#e5e7eb]">
      {/* Two rows on mobile avoids cramming: row1 = brand + actions, row2 = full-width search */}
      <div className="max-w-[1920px] mx-auto px-3 sm:px-4 py-2 flex flex-col gap-2 min-w-0">
        <div className="flex items-center justify-between gap-2 min-w-0">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-1.5 shrink py-0.5 pr-1"
          >
            <Image
              src="/images/logo.png"
              alt="TibiMall"
              width={36}
              height={28}
              className="h-7 w-9 shrink-0 object-contain"
            />
            <span
              className="hidden min-w-0 truncate text-[15px] font-semibold text-[#131313] sm:inline sm:text-[16px]"
              style={{ fontFamily: 'var(--font-poppins)', lineHeight: '100%' }}
            >
              TibilMall
            </span>
          </Link>

          <div className="flex shrink-0 items-center gap-0.5 sm:gap-1">
            <Link href="/chat" className={iconBtn} aria-label="Chat">
              <MessageCircle className="h-[19px] w-[19px] sm:h-5 sm:w-5" strokeWidth={1.75} />
            </Link>
            <Link href="/wishlist" className={iconBtn} aria-label="Wishlist">
              <Heart className="h-[19px] w-[19px] sm:h-5 sm:w-5" strokeWidth={1.75} />
            </Link>
            <Link
              href="/cart"
              className={`${iconBtn} relative`}
              aria-label={`Cart${cartCount > 0 ? ` (${cartCount} items)` : ''}`}
            >
              <ShoppingBag className="h-[19px] w-[19px] sm:h-5 sm:w-5" strokeWidth={1.75} />
              {cartCount > 0 && (
                <span
                  className="absolute right-0.5 top-0.5 z-20 flex h-[15px] min-w-[15px] items-center justify-center rounded-full px-[3px] text-[9px] font-bold leading-none"
                  style={{ backgroundColor: YELLOW_BTN, color: '#131313' }}
                >
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="ml-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#131313] hover:bg-[#f3f4f6] active:bg-[#e5e7eb] sm:h-10 sm:w-10"
              aria-expanded={isMobileMenuOpen}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5 sm:h-[22px] sm:w-[22px]" strokeWidth={2} />
            </button>
          </div>
        </div>

        <MobileCategorySearchSheet />
      </div>
    </div>
  );
}

/* ───────────────────────── DESKTOP HEADER ───────────────────────── */

function DesktopHeader({ cartCount }: { cartCount: number }) {
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

          {/* All Categories dropdown + main search (desktop) */}
          <div className="flex flex-1 min-w-0 border-b border-[#e5e7eb] pb-3 lg:min-w-[280px] lg:border-b-0 lg:border-r lg:border-[#e5e7eb] lg:px-4 lg:pb-0 xl:min-w-[360px] xl:px-6">
            <DesktopCategorySearchBar />
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
              href="/chat"
              className="flex flex-col items-center gap-[6px] text-[#131313] hover:opacity-80 transition"
              aria-label="Chat"
            >
              <MessageCircle className="w-[20px] h-[20px]" />
              <span className="text-[12px] font-medium leading-none">Chat</span>
            </Link>

            {/* Wishlist */}
            <Link
              href="/wishlist"
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
              aria-label={`Cart${cartCount > 0 ? ` (${cartCount} items)` : ''}`}
            >
              <div className="relative">
                <ShoppingBag className="w-[20px] h-[20px]" />
                {cartCount > 0 && (
                  <span
                    className="absolute -top-[4px] -right-[6px] min-w-[16px] h-[16px] rounded-full flex items-center justify-center px-[4px] text-[10px] font-bold"
                    style={{ backgroundColor: YELLOW_BTN, color: '#131313' }}
                  >
                    {cartCount > 99 ? '99+' : cartCount}
                  </span>
                )}
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

      <nav className="bg-white border-b border-[#e5e7eb]">
        <div className="max-w-[1920px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-[136px] py-2 border-b border-[#e5e7eb]">
          <div
            className="overflow-x-auto overflow-y-hidden scrollbar-hide overscroll-x-contain"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <NavItems />
          </div>
        </div>
        <BrowseCategoriesBarRow>
          <CategoryItems />
        </BrowseCategoriesBarRow>
      </nav>
    </>
  );
}

/* ───────────────────────── SHARED NAV & CATEGORY ITEMS ───────────────────────── */

type NavEntry =
  | { kind: 'link'; label: string; href: string; exact?: boolean }
  | { kind: 'live'; label: string; href: string };

const MAIN_NAV: NavEntry[] = [
  { kind: 'link', label: 'Explore', href: '/', exact: true },
  { kind: 'link', label: 'Top Products', href: '/product-list' },
  { kind: 'link', label: 'Top Stores', href: '/top-stores' },
  { kind: 'link', label: 'Top Deals', href: '/top-deals' },
  { kind: 'link', label: 'Just Dropped', href: '/just-dropped' },
  { kind: 'live', label: 'Live now', href: '/all-live-now' },
  { kind: 'link', label: 'Upcoming Soon', href: '/live-now' },
  { kind: 'link', label: 'Exclusively on TibiMall', href: '/exclusive' },
  { kind: 'link', label: 'Featured', href: '/top-products' },
  { kind: 'link', label: 'Trendy', href: '/top-category' },
  { kind: 'link', label: 'Discover', href: '/discover' },
];

function pathMatches(pathname: string, href: string, exact?: boolean) {
  if (exact || href === '/') {
    return pathname === href;
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavItems({ mobile }: { mobile?: boolean }) {
  const pathname = usePathname();

  const baseLink =
    'text-[14px] text-[#131313] whitespace-nowrap shrink-0 transition-colors border-b-2 pb-0.5';
  const inactiveLink = `${baseLink} border-transparent font-normal hover:text-[#131313] hover:border-[#131313]/40`;
  const activeLink = `${baseLink} border-[#131313] font-medium`;

  const wrapperClass = mobile
    ? 'flex flex-col gap-0.5 w-full'
    : 'flex flex-nowrap items-center justify-center gap-4 sm:gap-5 lg:gap-6 xl:gap-8 w-max min-w-full mx-auto py-0.5 text-[14px]';

  return (
    <div
      className={wrapperClass}
      style={{ fontFamily: 'var(--font-poppins)', lineHeight: '100%' }}
    >
      {MAIN_NAV.map((entry) => {
        if (entry.kind === 'live') {
          const active = pathMatches(pathname, entry.href);
          return (
            <Link
              key={entry.href}
              href={entry.href}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[14px] border shrink-0 transition ${
                mobile ? 'w-fit' : ''
              } ${
                active
                  ? 'border-[#131313] ring-1 ring-[#131313]/20 font-medium underline decoration-2 underline-offset-4'
                  : 'border-red-500 font-normal'
              }`}
              style={{ backgroundColor: LIVE_RED_BG, color: LIVE_RED }}
            >
              {entry.label}
              <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626]" aria-hidden />
            </Link>
          );
        }

        const active = pathMatches(pathname, entry.href, entry.exact);
        return (
          <Link
            key={entry.href}
            href={entry.href}
            className={`${active ? activeLink : inactiveLink} ${mobile ? 'block py-2.5' : ''}`}
          >
            {entry.label}
          </Link>
        );
      })}
    </div>
  );
}

const CATEGORY_LINKS: { label: string; href: string }[] = [
  { label: 'Fashion & Apparel', href: '/product-categories' },
  { label: 'Beauty & Personal Care', href: '/product-categories' },
  { label: 'Home & Living', href: '/product-categories' },
  { label: 'Jewelry & Watches', href: '/product-categories' },
  { label: 'Electronics & Gadgets', href: '/product-categories' },
  { label: 'Handmade & Artisanal', href: '/product-categories' },
];

function CategoryItems({ mobile }: { mobile?: boolean }) {
  const linkClass = `text-[14px] font-normal text-[#131313] hover:underline whitespace-nowrap shrink-0 ${mobile ? 'block py-2' : ''}`;
  const wrapperClass = mobile
    ? 'flex flex-col gap-1 w-full'
    : 'flex flex-nowrap items-center gap-4 lg:gap-5 xl:gap-6 w-max min-w-0';

  return (
    <div className={wrapperClass} style={{ fontFamily: 'var(--font-poppins)', lineHeight: '100%' }}>
      {CATEGORY_LINKS.map(({ label, href }) => (
        <Link key={label} href={href} className={linkClass}>
          {label}
        </Link>
      ))}
    </div>
  );
}
