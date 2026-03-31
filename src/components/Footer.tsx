'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaPinterestP } from 'react-icons/fa';

const BG_DARK = '#131313';
const BG_BLUE = '#1E3A8A';
const ACCENT_GOLD = '#F5B700';

export default function Footer() {
  return (
    <footer
      className="w-full text-white overflow-x-hidden"
      style={{ backgroundColor: BG_DARK, fontFamily: 'var(--font-poppins)' }}
    >
      <div className="lg:hidden">
        <MobileFooter />
      </div>
      <div className="hidden lg:block">
        <DesktopFooter />
      </div>
    </footer>
  );
}

/* ───────────────────────── MOBILE FOOTER ───────────────────────── */

function MobileFooter() {
  return (
    <>
      <div className="px-4 sm:px-6 py-8 sm:py-10 flex flex-col gap-8 sm:gap-10">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2 w-fit">
            <Image
              src="/images/logo.png"
              alt="TibilMall"
              width={50}
              height={40}
              className="w-12 h-10 object-contain"
            />
            <span
              className="text-[18px] sm:text-[20px] font-semibold text-white"
              style={{ lineHeight: '100%' }}
            >
              TibilMall
            </span>
          </Link>
          <p className="text-[12px] text-white" style={{ lineHeight: '18px' }}>
            Monday - Saturday 8:00 am - 4:00 pm
          </p>
          <p className="text-[12px] text-white" style={{ lineHeight: '18px' }}>
            Sunday: 9:00 am - 5:00 pm
          </p>
          <button
            type="button"
            className="w-full sm:w-fit min-h-[45px] px-5 py-2.5 rounded-lg text-black text-[12px] font-medium"
            style={{ backgroundColor: ACCENT_GOLD }}
          >
            Start Selling
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:gap-8">
          <FooterSection title="Quick links">
            <li><Link href="#" className="text-white hover:underline">Home</Link></li>
            <li><Link href="#" className="text-white hover:underline">About Us</Link></li>
            <li><Link href="/blogs" className="text-white hover:underline">Blog</Link></li>
            <li><Link href="#" className="text-white hover:underline">Contact Us</Link></li>
            <li><Link href="#" className="text-white hover:underline">Support</Link></li>
          </FooterSection>
          <FooterSection title="Categories">
            <li><Link href="#" className="text-white hover:underline">Fashion & Apparel</Link></li>
            <li><Link href="#" className="text-white hover:underline">Beauty & Personal Care</Link></li>
            <li><Link href="#" className="text-white hover:underline">Home & Living</Link></li>
            <li><Link href="#" className="text-white hover:underline">Jewelry & Watches</Link></li>
            <li><Link href="#" className="text-white hover:underline">Electronics & Gadgets</Link></li>
            <li><Link href="#" className="text-white hover:underline">Handmade & Artisanal</Link></li>
          </FooterSection>
          <FooterSection title="Help Center">
            <li><Link href="/faq" className="text-white hover:underline">Help & FAQ</Link></li>
            <li><Link href="#" className="text-white hover:underline">Submit a Ticket</Link></li>
            <li><Link href="#" className="text-white hover:underline">Return Policy</Link></li>
            <li><Link href="#" className="text-white hover:underline">Terms & Condition</Link></li>
            <li><Link href="#" className="text-white hover:underline">Privacy Policy</Link></li>
            <li><Link href="#" className="text-white hover:underline">Cancellation Policy</Link></li>
            <li><Link href="#" className="text-white hover:underline">Inquiry</Link></li>
          </FooterSection>
          <FooterSection title="Contact Info">
            <li>TibilMall HQ – Michigan, USA</li>
            <li>Registered as TibilMall LLC</li>
          </FooterSection>
        </div>
      </div>

      <div
        className="lg:hidden px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px]"
        style={{ backgroundColor: BG_BLUE }}
      >
        <p className="text-white text-center sm:text-left order-2 sm:order-1">
          Copyright © 2025 TibilMall. All rights reserved
        </p>
        <div className="flex items-center gap-4 order-1 sm:order-2">
          <SocialIcons />
        </div>
      </div>
    </>
  );
}

/* ───────────────────────── DESKTOP FOOTER ───────────────────────── */

function DesktopFooter() {
  return (
    <>
      <div
        className="max-w-[1920px] mx-auto px-6 lg:px-12 xl:px-16 2xl:px-[220px] py-16 lg:py-20 xl:py-[80px] flex flex-wrap justify-between gap-10 lg:gap-8 xl:gap-12"
        style={{ backgroundColor: BG_DARK }}
      >
        <div className="w-full lg:w-[260px] xl:w-[280px] shrink-0">
          <Link href="/" className="flex items-center gap-2 w-fit mb-4">
            <Image
              src="/images/logo.png"
              alt=""
              width={50}
              height={40}
              className="w-12 h-10 object-contain"
            />
            <span
              className="text-[20px] font-semibold text-white"
              style={{ lineHeight: '100%' }}
            >
              TibilMall
            </span>
          </Link>
          <p className="text-[12px] text-white mt-4 mb-1" style={{ lineHeight: '18px' }}>
            Monday - Saturday 8:00 am - 4:00 pm
          </p>
          <p className="text-[12px] text-white mb-6" style={{ lineHeight: '18px' }}>
            Sunday: 9:00 am - 5:00 pm
          </p>
          <button
            type="button"
            className="w-full max-w-[314px] min-h-[45px] px-5 py-2.5 rounded-lg text-black text-[12px] font-medium"
            style={{
              backgroundColor: ACCENT_GOLD,
              paddingTop: '10.33px',
              paddingBottom: '10.33px',
              paddingLeft: '20.66px',
              paddingRight: '20.66px',
            }}
          >
            Start Selling
          </button>
        </div>

        <FooterColumn title="Quick links">
          <li><Link href="#" className="text-white hover:underline">Home</Link></li>
          <li><Link href="#" className="text-white hover:underline">About Us</Link></li>
          <li><Link href="/blogs" className="text-white hover:underline">Blog</Link></li>
          <li><Link href="#" className="text-white hover:underline">Contact Us</Link></li>
          <li><Link href="#" className="text-white hover:underline">Support</Link></li>
        </FooterColumn>

        <FooterColumn title="Categories" titleSize="20px">
          <li><Link href="#" className="text-white hover:underline">Fashion & Apparel</Link></li>
          <li><Link href="#" className="text-white hover:underline">Beauty & Personal Care</Link></li>
          <li><Link href="#" className="text-white hover:underline">Home & Living</Link></li>
          <li><Link href="#" className="text-white hover:underline">Jewelry & Watches</Link></li>
          <li><Link href="#" className="text-white hover:underline">Electronics & Gadgets</Link></li>
          <li><Link href="#" className="text-white hover:underline">Handmade & Artisanal</Link></li>
        </FooterColumn>

        <FooterColumn title="Help Center">
          <li><Link href="/faq" className="text-white hover:underline">Help & FAQ</Link></li>
          <li><Link href="#" className="text-white hover:underline">Submit a Ticket</Link></li>
          <li><Link href="#" className="text-white hover:underline">Return Policy</Link></li>
          <li><Link href="#" className="text-white hover:underline">Terms & Condition</Link></li>
          <li><Link href="#" className="text-white hover:underline">Privacy Policy</Link></li>
          <li><Link href="#" className="text-white hover:underline">Cancellation Policy</Link></li>
          <li><Link href="#" className="text-white hover:underline">Inquiry</Link></li>
        </FooterColumn>

        <FooterColumn title="Contact Info">
          <li>TibilMall HQ – Michigan, USA</li>
          <li>Registered as TibilMall LLC</li>
        </FooterColumn>
      </div>

      <div
        className="max-w-[1920px] mx-auto px-6 lg:px-12 xl:px-16 2xl:px-[220px] h-12 flex items-center justify-between text-[12px] gap-4"
        style={{ backgroundColor: BG_BLUE }}
      >
        <p className="text-white shrink-0">Copyright © 2025 TibilMall. All rights reserved</p>
        <div className="flex items-center gap-4 shrink-0">
          <SocialIcons />
        </div>
      </div>
    </>
  );
}

/* ───────────────────────── SHARED COMPONENTS ───────────────────────── */

function FooterColumn({
  title,
  titleSize = '14px',
  children,
}: {
  title: string;
  titleSize?: '14px' | '20px';
  children: React.ReactNode;
}) {
  return (
    <div className="shrink-0">
      <h4
        className="font-medium text-white mb-4"
        style={{ fontSize: titleSize, lineHeight: titleSize === '20px' ? '24px' : '100%' }}
      >
        {title}
      </h4>
      <ul className="space-y-[10px] text-[12px] text-white list-none" style={{ lineHeight: '18px' }}>
        {children}
      </ul>
    </div>
  );
}

function FooterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="text-[14px] font-medium text-white mb-4">{title}</h4>
      <ul className="space-y-[10px] text-[12px] text-white flex flex-col list-none" style={{ lineHeight: '18px' }}>
        {children}
      </ul>
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="flex items-center gap-4">
      <a
        href="#"
        className="text-white hover:opacity-90 transition"
        aria-label="Facebook"
      >
        <FaFacebookF className="w-4 h-4" />
      </a>
      <a
        href="#"
        className="text-white hover:opacity-90 transition"
        aria-label="Twitter"
      >
        <FaTwitter className="w-4 h-4" />
      </a>
      <a
        href="#"
        className="text-white hover:opacity-90 transition"
        aria-label="Instagram"
      >
        <FaInstagram className="w-4 h-4" />
      </a>
      <a
        href="#"
        className="text-white hover:opacity-90 transition"
        aria-label="YouTube"
      >
        <FaYoutube className="w-4 h-4" />
      </a>
      <a
        href="#"
        className="text-white hover:opacity-90 transition"
        aria-label="Pinterest"
      >
        <FaPinterestP className="w-4 h-4" />
      </a>
    </div>
  );
}
