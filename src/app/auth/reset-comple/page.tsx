"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ResetCompletePage() {
  return (
    <main className="min-h-[200px] bg-[#FAFAFA]">
      {/* content wrapper (header already above) */}
      <div className="max-w-7xl mx-auto px-6 pt-[40px] pb-2">
        <div className="flex items-center justify-between gap-5">
          
          {/* LEFT CONTENT */}
          <div className="max-w-[520px]">
            {/* title */}
            <div className="flex items-center gap-2 mb-3">
              <h1 className="text-[22px] font-semibold text-[#111827]">
                Password Reset Successfully!
              </h1>
              <CheckCircle className="text-green-500 w-5 h-5" />
            </div>

            {/* subtitle */}
            <p className="text-[14px] text-[#6B7280] mb-8 leading-relaxed">
              Your password has been updated. You can now{" "}
              <span className="text-[#FACC15] font-medium">sign in</span>{" "}
              using your new password.
            </p>

            {/* button */}
            <Link
              href="/auth/login"
              className="
                inline-flex
                items-center
                justify-center
                w-[260px]
                h-[44px]
                rounded-md
                bg-[#1E3A8A]
                text-white
                text-[14px]
                font-medium
                hover:bg-[#1E40AF]
                transition
              "
            >
              Back To Sign in
            </Link>
          </div>

          {/* RIGHT IMAGE CARD */}
          <div
            className="
              relative
              w-[560px]
              h-[360px]
              rounded-[28px]
              bg-white
              shadow-sm
              flex
              items-center
              justify-center
            "
          >
            <div className="relative w-[360px] h-[360px]">
              <Image
                src="/images/success.png"
                alt="Success"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
