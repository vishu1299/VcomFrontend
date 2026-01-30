'use client';

import { useState } from 'react';
import { ForgotUsernameForm, ForgotUsernameHero } from '@/components/auth';

/** Figma Frame 2147225451: Horizontal, Fill 1920px, Hug 657px, padding L/R 216px, justify space-between */
const PAGE_BG = '#f7f7f7';
const CARD_RADIUS = 20;

export default function ForgotUsernamePage() {
  const [email, setEmail] = useState('daviddoqw@gmail.com');
  const [showEmailError, setShowEmailError] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Forgot username:', { email });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center w-full py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[136px] min-[1920px]:px-[216px]"
      style={{ backgroundColor: PAGE_BG, fontFamily: 'var(--font-poppins)' }}
    >
      <div
        className="w-full max-w-[1920px] bg-white rounded-[20px] overflow-hidden flex flex-col lg:flex-row lg:justify-between lg:gap-[40px] shadow-sm min-h-0 lg:min-h-[657px]"
        style={{ borderRadius: CARD_RADIUS }}
      >
        {/* Left: Form — Figma 520px on lg, inner padding 48px */}
        <div className="w-full lg:w-[520px] lg:min-w-[520px] shrink-0 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-[48px] py-8 sm:py-10 md:py-12">
          <ForgotUsernameForm
            email={email}
            onEmailChange={setEmail}
            onSubmit={handleSubmit}
            showEmailError={showEmailError}
          />
        </div>

        <ForgotUsernameHero />
      </div>
    </div>
  );
}
