'use client';

import Link from 'next/link';

const FIGMA = {
  titleSize: 'clamp(20px, 4vw, 24px)',
  titleColor: '#111111',
  descSize: 14,
  descColor: '#6b7280',
  labelSize: 13,
  labelColor: '#111111',
  inputHeight: 44,
  inputRadius: 6,
  inputBorder: '#d1d5db',
  inputBorderError: '#dc2626',
  inputPaddingX: 12,
  btnBg: '#1e3a8a',
  btnHeight: 44,
  linkColor: '#1d4ed8',
  errorSize: 12,
  gapSection: 16,
  gapLabelInput: 6,
  mtBackLink: 8,
  exclamationColor: '#facc15',
} as const;

export interface ForgotPasswordFormProps {
  email: string;
  onEmailChange: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onNeedHelp?: () => void;
  showEmailError?: boolean;
}

export function ForgotPasswordForm({
  email,
  onEmailChange,
  onSubmit,
  onNeedHelp,
  showEmailError = false,
}: ForgotPasswordFormProps) {
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
        Forgot Your Password ?
      </h1>
      <p
        className="mb-6"
        style={{
          fontSize: FIGMA.descSize,
          lineHeight: '1.4',
          color: FIGMA.descColor,
        }}
      >
        Type your email and we will send you a reset link for your password.
      </p>

      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col" style={{ gap: FIGMA.gapLabelInput }}>
          <label
            className="font-medium"
            style={{ fontSize: FIGMA.labelSize, color: FIGMA.labelColor }}
          >
            Email <span className="text-red-500">*</span>
          </label>
          <div className="relative w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              className="w-full rounded-[6px] text-[14px] focus:outline-none focus:ring-1 transition"
              style={{
                height: FIGMA.inputHeight,
                paddingLeft: FIGMA.inputPaddingX,
                paddingRight: 40,
                borderWidth: 1,
                borderColor: showEmailError ? FIGMA.inputBorderError : FIGMA.inputBorder,
                borderRadius: FIGMA.inputRadius,
                fontFamily: 'var(--font-poppins)',
              }}
              placeholder="e.g. you@example.com"
              autoComplete="email"
            />
            {showEmailError && (
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full flex items-center justify-center text-[#1f2937] font-bold text-[14px]"
                style={{ backgroundColor: FIGMA.exclamationColor }}
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
          className="w-full rounded-[6px] text-white text-[14px] font-medium transition hover:opacity-95"
          style={{
            height: FIGMA.btnHeight,
            backgroundColor: FIGMA.btnBg,
            borderRadius: FIGMA.inputRadius,
            fontFamily: 'var(--font-poppins)',
          }}
        >
          Send Email
        </button>

        {onNeedHelp && (
          <button
            type="button"
            onClick={onNeedHelp}
            className="text-[13px] font-medium self-start hover:underline"
            style={{ color: FIGMA.linkColor, fontFamily: 'var(--font-poppins)' }}
          >
            Need Help?
          </button>
        )}

        <Link
          href="/auth/login"
          className="flex items-center justify-center gap-1.5 text-[13px] font-medium hover:underline mt-2"
          style={{ color: FIGMA.linkColor, marginTop: FIGMA.mtBackLink, fontFamily: 'var(--font-poppins)' }}
        >
          <span>&lt;</span>
          Back to Login
        </Link>
      </form>
    </div>
  );
}
