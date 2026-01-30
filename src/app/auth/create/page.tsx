"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";

export default function CreateNewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const rules = {
    minLength: password.length >= 8,
    specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    uppercase: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
  };

  const isPasswordValid =
    rules.minLength &&
    rules.specialChar &&
    rules.uppercase &&
    rules.number;

  const isMatch =
    password.length > 0 &&
    confirmPassword.length > 0 &&
    password === confirmPassword;

  const canContinue = isPasswordValid && isMatch;

  return (
    <div className=" min-h-[calc(90vh-64px)] bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[120px] items-center">
        
        {/* LEFT CONTENT */}
        <div className="w-full max-w-[480px] mx-auto lg:mx-0">
          <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-black mb-2">
            Create New Password
          </h1>

          <p className="text-[14px] sm:text-[15px] lg:text-[18px] text-[#767676] mb-6 lg:mb-8">
            Create a new password and protect your account.
          </p>

          {/* New Password */}
          <label className="block text-[18px] text-black mb-1">
            New Password<span className="text-red-500">*</span>
          </label>

          <div className="relative mb-3">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-[44px] sm:h-[48px] color-black border border-[#D0D5DD] rounded-[8px] px-4 pr-12 text-[16px] sm:text-[16px] outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#667085]"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Password Rules */}
          <ul className="mb-5 sm:mb-6 space-y-1 text-[13px] sm:text-[14px]">
            <li className={rules.minLength ? "text-green-600" : "text-red-500"}>
              ✓ Use Minimum 8 Characters
            </li>
            <li className={rules.specialChar ? "text-green-600" : "text-red-500"}>
              ✓ Use at least 1 Special Character
            </li>
            <li className={rules.uppercase ? "text-green-600" : "text-red-500"}>
              ✓ Use at least 1 Uppercase Letter
            </li>
            <li className={rules.number ? "text-green-600" : "text-red-500"}>
              ✓ Use at least 1 Number
            </li>
          </ul>

          {/* Confirm Password */}
          <label className="block text-[14px] text-black mb-1">
            Re-enter Password<span className="text-red-500">*</span>
          </label>

          <div className="relative mb-6">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full h-[44px] sm:h-[48px] border border-[#D0D5DD] rounded-[8px] px-4 pr-12 text-[14px] sm:text-[16px] outline-none"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#667085]"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Continue Button */}
          <button
            disabled={!canContinue}
            className={`w-full h-[44px] sm:h-[48px] rounded-[8px] text-white text-[14px] sm:text-[16px] font-medium transition ${
              canContinue
                ? "bg-[#1E3A8A]"
                : "bg-[#1E3A8A]/40 cursor-not-allowed"
            }`}
          >
            Continue
          </button>

          {/* Helper Text */}
          <p className="mt-4 sm:mt-6 text-[14px] sm:text-[16px] lg:text-[18px] text-[#767676]">
            You'll need to sign in again to access your account.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden lg:block">
          <div className="rounded-[24px] overflow-hidden max-w-[520px] ml-auto">
            <Image
              src="/images/create.png"
              alt="Create Password"
              width={520}
              height={420}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

      </div>
    </div>
  );
}
