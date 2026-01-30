'use client';

import { useState } from 'react';
import {
  NeedHelpModal,
  ForgotPasswordForm,
  ForgotPasswordHero,
} from '@/components/auth';

/** Figma Frame 2147225451: Horizontal, Fill 1920px, Hug ~680px, padding 40/216, gap 40 */
const PAGE_BG = '#f7f7f7';
const CARD_RADIUS = 20;

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('davidjosh@gmail.com');
  const [showEmailError, setShowEmailError] = useState(true);
  const [needHelpOpen, setNeedHelpOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Forgot password:', { email });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center w-full py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[136px]"
      style={{ backgroundColor: PAGE_BG, fontFamily: 'var(--font-poppins)' }}
    >
      <div
        className="w-full max-w-[1920px] bg-white rounded-[20px] overflow-hidden flex flex-col lg:flex-row lg:gap-[40px] shadow-sm min-h-0 lg:min-h-[680px]"
        style={{ borderRadius: CARD_RADIUS }}
      >
        {/* Left: Form — Figma 520px on lg, inner padding 48px */}
        <div className="w-full lg:w-[520px] lg:min-w-[520px] shrink-0 flex flex-col justify-center px-4 xs:px-5 sm:px-6 md:px-8 lg:px-[48px] py-8 sm:py-10 md:py-12">
          <ForgotPasswordForm
            email={email}
            onEmailChange={setEmail}
            onSubmit={handleSubmit}
            onNeedHelp={() => setNeedHelpOpen(true)}
            showEmailError={showEmailError}
          />
        </div>

        <ForgotPasswordHero />
      </div>

      <NeedHelpModal isOpen={needHelpOpen} onClose={() => setNeedHelpOpen(false)} />
    </div>
  );
}
