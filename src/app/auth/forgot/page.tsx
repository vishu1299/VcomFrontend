'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('davidjosh@gmail.com');

  return (
    <div className="min-h-screen bg-[#f7f7f7] flex items-center justify-center">
      <div className="w-[1200px] h-[520px] bg-white rounded-[20px] flex overflow-hidden">
        <div className="w-[520px] px-[48px] flex flex-col justify-center">
          <h1 className="text-[22px] font-semibold text-[#111111] mb-[8px]">
            Forgot Your Password ?
          </h1>
          <p className="text-[14px] text-[#6b7280] mb-[24px]">
            Type your email and we will send you a reset link for your password.
          </p>

          <div className="flex flex-col gap-[16px]">
            <div className="flex flex-col gap-[6px]">
              <label className="text-[13px] text-[#111111]">
                Email <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  className="h-[44px] w-full border border-[#6366f1] rounded-[6px] px-[12px] text-[14px]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="absolute right-[12px] top-1/2 -translate-y-1/2 text-[#facc15] text-[14px]">
                  !
                </span>
              </div>
              <span className="text-[12px] text-red-500">
                Email address is incorrect, please re-enter
              </span>
            </div>

            <button className="h-[44px] bg-[#1e3a8a] text-white rounded-[6px] text-[14px] font-medium">
              Send Email
            </button>

            <div className="flex items-center justify-center gap-[6px] text-[13px] mt-[8px]">
              <span>&lt;</span>
              <Link href="/login" className="text-[#facc15] font-medium">
                Back to Login
              </Link>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-[#dbe7f5] flex items-center justify-center">
          <div className="w-[420px] h-[420px] relative">
            <Image
              src="/images/forgot.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
