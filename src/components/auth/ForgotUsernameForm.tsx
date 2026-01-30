'use client';

import Link from 'next/link';

/** Figma: title 32px Semibold #1F1D2B, description 14px #767676, input 44px, error red + yellow !, button 60px 8px radius */
const FIGMA = {
  titleSize: 32,
  titleColor: '#1F1D2B',
  descSize: 14,
  descColor: '#767676',
  labelSize: 14,
  labelColor: '#1F1D2B',
  inputHeight: 44,
  inputRadius: 6,
  inputPaddingX: 12,
  inputBorder: '#E5E7EB',
  inputBorderError: '#dc2626',
  btnHeight: 60,
  btnRadius: 8,
  btnBg: '#1E3A8A',
  linkColor: '#1E3A8A',
  errorSize: 12,
  exclamationBg: '#FFC107',
  gapLabel: 6,
  gapSection: 16,
  mtBack: 8,
} as const;

export interface ForgotUsernameFormProps {
  email: string;
  onEmailChange: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  showEmailError?: boolean;
}

export function ForgotUsernameForm({
  email,
  onEmailChange,
  onSubmit,
  showEmailError = false,
}: ForgotUsernameFormProps) {
  return (
    <div className="w-full" style={{ fontFamily: 'var(--font-poppins)' }}>
      <h1
        className="font-semibold mb-2"
        style={{
          fontSize: FIGMA.titleSize,
          lineHeight: '100%',
          color: FIGMA.titleColor,
        }}
      >
        Forgot your Username?
      </h1>
      <p
        className="mb-6 max-w-[400px]"
        style={{
          fontSize: FIGMA.descSize,
          lineHeight: '1.4',
          color: FIGMA.descColor,
        }}
      >
        Type your email and we will send your username to your registered Email Address
      </p>

      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col" style={{ gap: FIGMA.gapLabel }}>
          <label
            className="font-medium"
            style={{ fontSize: FIGMA.labelSize, color: FIGMA.labelColor }}
          >
            Email
          </label>
          <div className="relative w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              className="w-full rounded-[6px] text-[14px] pl-3 pr-10 focus:outline-none focus:ring-1 focus:ring-[#1E3A8A] transition"
              style={{
                height: FIGMA.inputHeight,
                paddingLeft: FIGMA.inputPaddingX,
                paddingRight: 40,
                border: `1px solid ${showEmailError ? FIGMA.inputBorderError : FIGMA.inputBorder}`,
                borderRadius: FIGMA.inputRadius,
                color: FIGMA.labelColor,
                fontFamily: 'var(--font-poppins)',
              }}
              placeholder="e.g. you@example.com"
              autoComplete="email"
            />
            {showEmailError && (
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full flex items-center justify-center text-[#1f2937] font-bold text-[14px]"
                style={{ backgroundColor: FIGMA.exclamationBg }}
                aria-hidden
              >
                !
              </span>
            )}
          </div>
          {showEmailError && (
            <span
              className="text-red-500"
              style={{ fontSize: FIGMA.errorSize, fontFamily: 'var(--font-poppins)' }}
            >
              Email address is incorrect, please re-enter
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-[8px] text-white text-[16px] font-medium transition hover:opacity-95"
          style={{
            height: FIGMA.btnHeight,
            backgroundColor: FIGMA.btnBg,
            borderRadius: FIGMA.btnRadius,
            fontFamily: 'var(--font-poppins)',
          }}
        >
          Continue
        </button>

        <Link
          href="/auth/login"
          className="flex items-center justify-center gap-1.5 text-[14px] font-normal hover:underline mt-2"
          style={{ color: FIGMA.linkColor, marginTop: FIGMA.mtBack, fontFamily: 'var(--font-poppins)' }}
        >
          <span>&lt;</span>
          Back to Login
        </Link>
      </form>
    </div>
  );
}
