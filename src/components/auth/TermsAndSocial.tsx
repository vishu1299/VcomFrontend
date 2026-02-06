'use client';

import Link from 'next/link';
import { FaGoogle, FaFacebookF, FaApple } from 'react-icons/fa';

const SOCIAL_BTN_HEIGHT = 44;
const SOCIAL_BORDER = '#d1d5db';
const SOCIAL_RADIUS = 6;

export function TermsAndSocial() {
  return (
    <>
      <div className="flex items-start gap-2 mt-4 sm:mt-6">
        <input
          type="checkbox"
          id="terms"
          className="mt-1 w-4 h-4 rounded border-[#d1d5db] text-[#1e3a8a] focus:ring-[#1e3a8a] shrink-0"
          defaultChecked
        />
        <label htmlFor="terms" className="text-[12px] text-[#6b7280] leading-relaxed cursor-pointer" style={{ fontFamily: 'var(--font-poppins)' }}>
          By continuing, you agree to TibilMall&apos;s{' '}
          <Link href="#" className="text-[#1d4ed8] font-medium hover:underline">Terms of Service</Link>
          {' '}and{' '}
          <Link href="#" className="text-[#1d4ed8] font-medium hover:underline">Privacy Policy</Link>
        </label>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 my-4 sm:my-6">
        <div className="h-px flex-1 bg-[#e5e7eb]" />
        <span className="text-[12px] text-[#6b7280] whitespace-nowrap" style={{ fontFamily: 'var(--font-poppins)' }}>
          or Continue with
        </span>
        <div className="h-px flex-1 bg-[#e5e7eb]" />
      </div>

      <div className="flex flex-col gap-3">
        <button
          type="button"
          className="w-full rounded-[6px] flex items-center justify-center gap-2 text-[14px] font-medium border transition hover:bg-[#f9fafb]"
          style={{
            height: SOCIAL_BTN_HEIGHT,
            borderColor: SOCIAL_BORDER,
            borderRadius: SOCIAL_RADIUS,
            color: '#111111',
            fontFamily: 'var(--font-poppins)',
          }}
        >
          <FaGoogle className="w-4 h-4 text-[#4285F4]" aria-hidden />
          Sign in with Google
        </button>
        <div className="flex flex-col sm:flex-col gap-3">
          <button
            type="button"
            className="flex-1 rounded-[6px] flex items-center justify-center gap-2 text-[14px] font-medium border transition hover:bg-[#f9fafb]"
            style={{
              height: SOCIAL_BTN_HEIGHT,
              borderColor: SOCIAL_BORDER,
              borderRadius: SOCIAL_RADIUS,
              color: '#111111',
              fontFamily: 'var(--font-poppins)',
            }}
          >
            <FaFacebookF className="w-4 h-4 text-[#1877F2]" aria-hidden />
            Sign in with Facebook
          </button>
          <button
            type="button"
            className="flex-1 rounded-[6px] flex items-center justify-center gap-2 text-[14px] font-medium border transition hover:bg-[#f9fafb]"
            style={{
              height: SOCIAL_BTN_HEIGHT,
              borderColor: SOCIAL_BORDER,
              borderRadius: SOCIAL_RADIUS,
              color: '#111111',
              fontFamily: 'var(--font-poppins)',
            }}
          >
            <FaApple className="w-5 h-5" aria-hidden />
            Sign in with Apple
          </button>
        </div>
      </div>
    </>
  );
}
