'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Eye, EyeOff, ChevronDown } from 'lucide-react';
import { FaGoogle, FaFacebookF, FaApple } from 'react-icons/fa';

/** Figma: Signup page bg #F8F8F8, width 1920px, title 32px SemiBold #1F1D2B, inputs 44px, button 60px, social 44px */
const FIGMA = {
  pageBg: '#F8F8F8',
  titleSize: 32,
  titleWeight: 600,
  titleColor: '#1F1D2B',
  subtitleColor: '#767676',
  linkColor: '#1E3A8A',
  labelSize: 14,
  labelColor: '#1F1D2B',
  inputHeight: 44,
  inputPadding: 12,
  inputBorder: '#E5E7EB',
  inputRadius: 6,
  errorBorder: '#dc2626',
  errorTextSize: 12,
  checkboxGap: 8,
  btnHeight: 60,
  btnRadius: 8,
  btnBg: '#1E3A8A',
  dividerColor: '#767676',
  dividerSize: 14,
  socialHeight: 44,
  socialBorder: '#E5E7EB',
  socialRadius: 6,
  socialGap: 12,
  imageBg: '#f3f4f6',
  imageRadius: 16,
} as const;

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showReEnter, setShowReEnter] = useState(false);
  const [reEnterError] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center py-6 sm:py-8 md:py-10"
      style={{ backgroundColor: FIGMA.pageBg, fontFamily: 'var(--font-poppins)' }}
    >
      <div
        className="w-full max-w-[1920px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-[120px] flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-12 xl:gap-20"
        style={{ fontFamily: 'var(--font-poppins)' }}
      >
        {/* LEFT: FORM */}
        <div className="w-full max-w-[554px] shrink-0">
          <h1
            className="font-semibold"
            style={{
              fontSize: FIGMA.titleSize,
              lineHeight: '100%',
              color: FIGMA.titleColor,
            }}
          >
            Sign up
          </h1>
          <p className="mt-2 text-[14px] leading-normal" style={{ color: FIGMA.subtitleColor }}>
            If you already have an account,{' '}
            <Link href="/auth/login" className="font-medium hover:underline" style={{ color: FIGMA.linkColor }}>
              Sign in
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col">
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col" style={{ gap: 6 }}>
                <label className="font-medium" style={{ fontSize: FIGMA.labelSize, color: FIGMA.labelColor }}>
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  defaultValue="David"
                  className="w-full rounded-[6px] focus:outline-none focus:ring-1 focus:ring-[#1E3A8A]"
                  style={{
                    height: FIGMA.inputHeight,
                    paddingLeft: FIGMA.inputPadding,
                    paddingRight: FIGMA.inputPadding,
                    border: `1px solid ${FIGMA.inputBorder}`,
                    borderRadius: FIGMA.inputRadius,
                    fontSize: 14,
                    color: FIGMA.labelColor,
                  }}
                />
              </div>
              <div className="flex flex-col" style={{ gap: 6 }}>
                <label className="font-medium" style={{ fontSize: FIGMA.labelSize, color: FIGMA.labelColor }}>
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  defaultValue="Josh"
                  className="w-full rounded-[6px] focus:outline-none focus:ring-1 focus:ring-[#1E3A8A]"
                  style={{
                    height: FIGMA.inputHeight,
                    paddingLeft: FIGMA.inputPadding,
                    paddingRight: FIGMA.inputPadding,
                    border: `1px solid ${FIGMA.inputBorder}`,
                    borderRadius: FIGMA.inputRadius,
                    fontSize: 14,
                    color: FIGMA.labelColor,
                  }}
                />
              </div>
            </div>

            {/* Phone Number: country code + input */}
            <div className="mt-4 flex flex-col" style={{ gap: 6 }}>
              <label className="font-medium" style={{ fontSize: FIGMA.labelSize, color: FIGMA.labelColor }}>
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div
                className="flex w-full rounded-[6px] overflow-hidden border"
                style={{
                  height: FIGMA.inputHeight,
                  borderColor: FIGMA.inputBorder,
                  borderRadius: FIGMA.inputRadius,
                }}
              >
                <div
                  className="flex items-center gap-1 pl-3 pr-2 shrink-0 border-r"
                  style={{ borderColor: FIGMA.inputBorder }}
                >
                  <span className="text-[14px] font-medium" style={{ color: FIGMA.labelColor }}>+1</span>
                  <span className="text-base" aria-hidden>🇺🇸</span>
                  <ChevronDown className="w-4 h-4 shrink-0" style={{ color: FIGMA.subtitleColor }} />
                </div>
                <input
                  type="tel"
                  defaultValue="8786543213"
                  className="flex-1 min-w-0 px-3 focus:outline-none focus:ring-0"
                  style={{
                    fontSize: 14,
                    color: FIGMA.labelColor,
                    border: 'none',
                  }}
                />
              </div>
            </div>

            {/* Email */}
            <div className="mt-4 flex flex-col" style={{ gap: 6 }}>
              <label className="font-medium" style={{ fontSize: FIGMA.labelSize, color: FIGMA.labelColor }}>
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                defaultValue="davidjosh32@gmail.com"
                className="w-full rounded-[6px] focus:outline-none focus:ring-1 focus:ring-[#1E3A8A]"
                style={{
                  height: FIGMA.inputHeight,
                  paddingLeft: FIGMA.inputPadding,
                  paddingRight: FIGMA.inputPadding,
                  border: `1px solid ${FIGMA.inputBorder}`,
                  borderRadius: FIGMA.inputRadius,
                  fontSize: 14,
                  color: FIGMA.labelColor,
                }}
              />
            </div>

            {/* Password & Re-Enter Password (two columns on sm+) */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col" style={{ gap: 6 }}>
                <label className="font-medium" style={{ fontSize: FIGMA.labelSize, color: FIGMA.labelColor }}>
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative w-full">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    defaultValue="DAvidjosh332@"
                    className="w-full rounded-[6px] pl-3 pr-10 focus:outline-none focus:ring-1 focus:ring-[#1E3A8A]"
                    style={{
                      height: FIGMA.inputHeight,
                      paddingRight: 40,
                      border: `1px solid ${FIGMA.inputBorder}`,
                      borderRadius: FIGMA.inputRadius,
                      fontSize: 14,
                      color: FIGMA.labelColor,
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((p) => !p)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded"
                    style={{ color: FIGMA.subtitleColor }}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div className="flex flex-col" style={{ gap: 6 }}>
                <label className="font-medium" style={{ fontSize: FIGMA.labelSize, color: FIGMA.labelColor }}>
                  Re-Enter Password <span className="text-red-500">*</span>
                </label>
                <div className="relative w-full">
                  <input
                    type={showReEnter ? 'text' : 'password'}
                    defaultValue="DAvidjosh332"
                    className="w-full rounded-[6px] pl-3 pr-10 focus:outline-none focus:ring-1"
                    style={{
                      height: FIGMA.inputHeight,
                      paddingRight: 40,
                      border: `1px solid ${reEnterError ? FIGMA.errorBorder : FIGMA.inputBorder}`,
                      borderRadius: FIGMA.inputRadius,
                      fontSize: 14,
                      color: FIGMA.labelColor,
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowReEnter((p) => !p)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded"
                    style={{ color: FIGMA.subtitleColor }}
                    aria-label={showReEnter ? 'Hide password' : 'Show password'}
                  >
                    {showReEnter ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {reEnterError && (
                  <p className="text-red-500" style={{ fontSize: FIGMA.errorTextSize }}>
                    Password is incorrect, please re-enter
                  </p>
                )}
              </div>
            </div>

            {/* Checkboxes */}
            <div className="mt-4 flex flex-col" style={{ gap: FIGMA.checkboxGap }}>
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="mt-0.5 w-4 h-4 rounded border-[#E5E7EB] text-[#1E3A8A] focus:ring-[#1E3A8A] shrink-0"
                />
                <span className="text-[14px] leading-relaxed" style={{ color: FIGMA.labelColor }}>
                  I agree to{' '}
                  <Link href="#" className="font-medium underline hover:no-underline" style={{ color: FIGMA.linkColor }}>
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="#" className="font-medium underline hover:no-underline" style={{ color: FIGMA.linkColor }}>
                    Privacy Policy
                  </Link>
                </span>
              </label>
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-0.5 w-4 h-4 rounded border-[#E5E7EB] text-[#1E3A8A] focus:ring-[#1E3A8A] shrink-0"
                />
                <span className="text-[14px] leading-relaxed" style={{ color: FIGMA.labelColor }}>
                  I would like to receive updates and promotions emails
                </span>
              </label>
            </div>

            {/* Sign Up button */}
            <button
              type="submit"
              className="w-full rounded-[8px] text-white font-medium mt-6 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:ring-offset-2"
              style={{
                height: FIGMA.btnHeight,
                backgroundColor: FIGMA.btnBg,
                borderRadius: FIGMA.btnRadius,
                fontSize: 16,
              }}
            >
              Sign up
            </button>

            {/* Divider */}
            <p
              className="mt-4 text-center text-[14px]"
              style={{ color: FIGMA.dividerColor }}
            >
              or Continue with
            </p>


            <button
              type="button"
              className="w-full rounded-[6px] flex items-center justify-center gap-2 text-[14px] font-medium border transition hover:bg-white/80"
              style={{
                height: FIGMA.socialHeight,
                borderColor: FIGMA.socialBorder,
                borderRadius: FIGMA.socialRadius,
                color: FIGMA.labelColor,
                backgroundColor: '#fff',
              }}
            >
              <FaGoogle className="w-4 h-4 text-[#4285F4]" aria-hidden />
              Sign in with Google
            </button>
            {/* Social buttons */}
            <div className="mt-4 flex flex-row gap-3">
              <button
                type="button"
                className="w-full rounded-[6px] flex items-center justify-center gap-2 text-[14px] font-medium border transition hover:bg-white/80"
                style={{
                  height: FIGMA.socialHeight,
                  borderColor: FIGMA.socialBorder,
                  borderRadius: FIGMA.socialRadius,
                  color: FIGMA.labelColor,
                  backgroundColor: '#fff',
                }}
              >
                <FaFacebookF className="w-4 h-4 text-[#1877F2]" aria-hidden />
                Sign in with Facebook
              </button>
              <button
                type="button"
                className="w-full rounded-[6px] flex items-center justify-center gap-2 text-[14px] font-medium border transition hover:bg-white/80"
                style={{
                  height: FIGMA.socialHeight,
                  borderColor: FIGMA.socialBorder,
                  borderRadius: FIGMA.socialRadius,
                  color: FIGMA.labelColor,
                  backgroundColor: '#fff',
                }}
              >
                <FaApple className="w-5 h-5" aria-hidden />
                Sign in with Apple
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT: IMAGE (Figma ~1275x850, hidden on small) */}
        <div
          className="hidden lg:block flex-1 min-h-[320px] rounded-[16px] overflow-hidden shrink-0 p-4"
          style={{ backgroundColor: FIGMA.imageBg }}
        >
          <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px] xl:min-h-[600px] rounded-[16px] overflow-hidden">
            <Image
              src="/images/signin.png"
              alt="Sign up"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 0px"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
