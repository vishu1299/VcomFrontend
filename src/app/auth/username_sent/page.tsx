'use client';

import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function UsernameSentPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <div
        className="
          flex
          flex-col
          items-center
          justify-center
          text-center
          gap-[10px]
          px-4
          py-[100px]
        "
      >
        {/* Title + Icon */}
        <div className="flex items-center gap-[8px]">
          <h1 className="text-[20px] font-semibold text-[#111827]">
            Username Sent
          </h1>
          <CheckCircle
            className="w-[41px] h-[41px]"
            strokeWidth={2}
            color="#0C9200"
          />
        </div>

        {/* Subtitle */}
        <p className="text-[14px] text-[#6B7280] max-w-[420px]">
          Your username has been sent to your registered email address.
        </p>

        {/* CTA */}
        <Link
          href="/auth/login"
          className="
            mt-[20px]
            w-full
            max-w-[554px]
            h-[60px]
            rounded-[8px]
            bg-[#1E3A8A]
            flex
            items-center
            justify-center
            text-white
            text-[14px]
            font-medium
            hover:opacity-95
            transition
          "
        >
          Back to Sign In
        </Link>

        {/* Resend */}
        <p className="mt-[10px] text-[12px] text-[#6B7280]">
          Didn’t get the email?{' '}
          <button className="text-[#1E3A8A] font-medium hover:underline">
            Resend
          </button>
        </p>
      </div>
    </main>
  );
}
