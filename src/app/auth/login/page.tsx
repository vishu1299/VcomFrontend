'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('davidjosh32@gmail.com');
  const [password, setPassword] = useState('Davidjosh332@');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7] flex items-center justify-center px-4 sm:px-6 lg:px-12">
      <div className="w-full max-w-[1200px] bg-white rounded-[20px] overflow-hidden flex flex-col lg:flex-row shadow-sm">
        <div className="w-full lg:w-[520px] px-6 sm:px-10 py-10 sm:py-12 flex flex-col justify-center">
          <h1 className="text-[22px] sm:text-[24px] font-semibold text-[#111111] mb-2">
            Sign in
          </h1>

          <p className="text-[13px] sm:text-[14px] text-[#6b7280] mb-6">
            If you don't have an account,{' '}
            <Link href="#" className="text-[#1d4ed8] font-medium">
              Sign up
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] text-[#111111]">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="h-[44px] px-3.5 border border-[#d1d5db] rounded-[6px] text-[14px] w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] text-[#111111]">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  className="h-[44px] w-full px-3.5 pr-11 border border-[#6366f1] rounded-[6px] text-[14px]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#6b7280] text-[14px] select-none">
                  👁
                </span>
              </div>
              <span className="text-[12px] text-red-500">
                Password is incorrect, please re-enter
              </span>
            </div>

            <button
              type="submit"
              className="h-[44px] bg-[#1e3a8a] text-white rounded-[6px] text-[14px] font-medium mt-2"
            >
              Sign In
            </button>

            <button
              type="button"
              className="text-[13px] text-[#1d4ed8] mt-1 self-start"
            >
              Need Help?
            </button>

            <div className="flex items-start gap-2 mt-2">
              <input type="checkbox" className="mt-1" />
              <p className="text-[12px] text-[#6b7280] leading-relaxed">
                By continuing, you agree to TiblMall’s{' '}
                <span className="text-[#1d4ed8]">Terms of Service</span> and{' '}
                <span className="text-[#1d4ed8]">Privacy Policy</span>
              </p>
            </div>

            <div className="flex items-center gap-3 my-4">
              <div className="h-px flex-1 bg-[#e5e7eb]" />
              <span className="text-[12px] text-[#6b7280] whitespace-nowrap">
                or Continue with
              </span>
              <div className="h-px flex-1 bg-[#e5e7eb]" />
            </div>

            <button className="h-[44px] border border-[#d1d5db] rounded-[6px] flex items-center justify-center gap-2 text-[14px] w-full">
              <Image src="/google.svg" alt="" width={16} height={16} />
              Sign in with Google
            </button>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="h-[44px] flex-1 border border-[#d1d5db] rounded-[6px] flex items-center justify-center gap-2 text-[14px]">
                <Image src="/facebook.svg" alt="" width={16} height={16} />
                Facebook
              </button>
              <button className="h-[44px] flex-1 border border-[#d1d5db] rounded-[6px] flex items-center justify-center gap-2 text-[14px]">
                <Image src="/apple.svg" alt="" width={16} height={16} />
                Apple
              </button>
            </div>
          </form>
        </div>

        <div className="hidden lg:block flex-1 bg-[#f3f4f6] p-4">
          <Image
            src="/images/signin.png"
            alt=""
            width={640}
            height={688}
            className="w-full h-full object-cover rounded-[16px]"
            priority
          />
        </div>
      </div>
    </div>
  );
}
