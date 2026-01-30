'use client';

import { useState } from 'react';
import {
  NeedHelpModal,
  SignInHeader,
  LoginFormFields,
  TermsAndSocial,
  LoginHeroImage,
} from '@/components/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('davidjosh32@gmail.com');
  const [password, setPassword] = useState('Davidjosh332@');
  const [showPasswordError, setShowPasswordError] = useState(true);
  const [needHelpOpen, setNeedHelpOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center w-full py-6 sm:py-8 md:py-10 px-4 xs:px-4 sm:px-6 md:px-8 lg:px-12"
      style={{ backgroundColor: '#f7f7f7', fontFamily: 'var(--font-poppins)' }}
    >
      <div className="w-full max-w-[1200px] bg-white rounded-[20px] overflow-hidden flex flex-col lg:flex-row shadow-sm">
        {/* Left: Form — Figma 520px on lg, responsive padding */}
        <div className="w-full lg:w-[520px] lg:min-w-[520px] shrink-0 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 flex flex-col justify-center">
          <SignInHeader />
          <LoginFormFields
            email={email}
            password={password}
            onEmailChange={setEmail}
            onPasswordChange={setPassword}
            onSubmit={handleSubmit}
            onNeedHelp={() => setNeedHelpOpen(true)}
            showPasswordError={showPasswordError}
          />
          <TermsAndSocial />
        </div>

        <LoginHeroImage />
      </div>

      <NeedHelpModal isOpen={needHelpOpen} onClose={() => setNeedHelpOpen(false)} />
    </div>
  );
}
