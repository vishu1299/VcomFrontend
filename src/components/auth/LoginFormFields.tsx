'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const INPUT_HEIGHT = 44;
const INPUT_RADIUS = 6;
const LABEL_COLOR = '#111111';
const BORDER_DEFAULT = '#d1d5db';
const BORDER_FOCUS = '#6366f1';
const ERROR_COLOR = '#dc2626';

export interface LoginFormFieldsProps {
  email: string;
  password: string;
  onEmailChange: (v: string) => void;
  onPasswordChange: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onNeedHelp: () => void;
  showPasswordError?: boolean;
}

export function LoginFormFields({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  onNeedHelp,
  showPasswordError = false,
}: LoginFormFieldsProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-medium" style={{ color: LABEL_COLOR, fontFamily: 'var(--font-poppins)' }}>
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          className="w-full border rounded-[6px] text-[14px] px-3.5 focus:outline-none focus:ring-1 transition"
          style={{
            height: INPUT_HEIGHT,
            borderColor: BORDER_DEFAULT,
            borderRadius: INPUT_RADIUS,
            fontFamily: 'var(--font-poppins)',
          }}
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          placeholder="e.g. you@example.com"
          autoComplete="email"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-medium" style={{ color: LABEL_COLOR, fontFamily: 'var(--font-poppins)' }}>
          Password <span className="text-red-500">*</span>
        </label>
        <div className="relative w-full">
          <input
            type={showPassword ? 'text' : 'password'}
            className="w-full border rounded-[6px] text-[14px] pl-3.5 pr-11 focus:outline-none focus:ring-1 transition"
            style={{
              height: INPUT_HEIGHT,
              borderColor: showPasswordError ? ERROR_COLOR : BORDER_FOCUS,
              borderRadius: INPUT_RADIUS,
              fontFamily: 'var(--font-poppins)',
            }}
            value={password}
            onChange={(e) => onPasswordChange(e.target.value)}
            autoComplete="current-password"
          />
          <button
            type="button"
            onClick={() => setShowPassword((p) => !p)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b7280] hover:text-[#374151] transition p-1 rounded"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
        {showPasswordError && (
          <span className="text-[12px]" style={{ color: ERROR_COLOR, fontFamily: 'var(--font-poppins)' }}>
            Password is incorrect, please re-enter
          </span>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded-[6px] text-[14px] font-medium text-white mt-1 transition hover:opacity-95"
        style={{
          height: INPUT_HEIGHT,
          backgroundColor: '#1e3a8a',
          borderRadius: INPUT_RADIUS,
          fontFamily: 'var(--font-poppins)',
        }}
      >
        Sign In
      </button>

      <button
        type="button"
        onClick={onNeedHelp}
        className="text-[13px] text-[#1d4ed8] font-medium mt-0.5 self-start hover:underline"
        style={{ fontFamily: 'var(--font-poppins)' }}
      >
        Need Help?
      </button>
    </form>
  );
}
