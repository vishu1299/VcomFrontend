'use client';

import Link from 'next/link';

/** Figma: Button_Poppins/32/32 px Medium, Black/01 #1F1D2B */
const TITLE_STYLE = {
  fontFamily: 'var(--font-poppins)',
  fontWeight: 500,
  fontSize: 'clamp(22px, 4vw, 32px)',
  lineHeight: '100%',
  color: '#1F1D2B',
} as const;

export function SignInHeader() {
  return (
    <>
      <h1 className="mb-2" style={TITLE_STYLE}>
        Sign in
      </h1>
      <p className="text-[13px] sm:text-[14px] text-[#6b7280] mb-4 sm:mb-6 leading-relaxed">
        If you don&apos;t have an account,{' '}
        <Link href="/auth/register" className="text-[#1d4ed8] font-medium hover:underline">
          Sign up
        </Link>
      </p>
    </>
  );
}
