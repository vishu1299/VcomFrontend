'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function OtpPage() {
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // Auto-focus next input
    if (value && index < otp.length - 1) {
      const next = document.getElementById(`otp-${index + 1}`);
      next?.focus();
    }
  };

  return (
    <main className="h-[600px] bg-[#f7f7f7] flex items-center justify-center px-4 sm:px-6 lg:px-12">
      <section className="w-full max-w-[1200px] bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col lg:flex-row">
        
        {/* Left: OTP Form */}
        <div className="w-full lg:w-[520px] px-6 sm:px-10 py-10 sm:py-12 flex flex-col justify-center">
          <h1 className="text-lg sm:text-xl font-semibold text-[#111111] mb-2">
            Enter OTP
          </h1>

          <p className="text-sm text-[#6b7280] leading-relaxed mb-6">
            We’ve sent a passcode (OTP) to your email. Please check your inbox and follow the instructions.
          </p>

          <p className="text-sm font-medium text-[#111111] mb-6">
            davidjosh32@gmail.com
          </p>

          {/* OTP Inputs */}
          <div className="flex gap-3 mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                className="w-12 h-12 sm:w-14 sm:h-14 text-center text-base sm:text-lg border border-[#d1d5db] rounded-md focus:outline-none focus:border-[#1e3a8a]"
              />
            ))}
          </div>

          <button
            className="h-11 bg-[#1e3a8a] text-white rounded-md text-sm font-medium mb-4"
          >
            Continue
          </button>

          <p className="text-xs text-[#6b7280]">
            Resend OTP <span className="font-medium">(00:21)</span>
          </p>
        </div>

        {/* Right: Illustration */}
        <div className="hidden lg:flex flex-1 items-center justify-center bg-[#f3f4f6] p-6">
          <div className="relative w-full h-full max-h-[520px]">
            <Image
              src="/images/otp.png"
              alt="OTP verification"
              fill
              className="object-contain rounded-xl"
              priority
            />
          </div>
        </div>

      </section>
    </main>
  );
}
