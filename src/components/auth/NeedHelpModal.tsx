"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Lock, User } from "lucide-react";

interface NeedHelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NeedHelpModal({ isOpen, onClose }: NeedHelpModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div
        className="relative w-full max-w-[360px] rounded-[20px] bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-600 hover:text-gray-600"
        >
          <X size={18} />
        </button>

        {/* Content */}
        <div className="px-6 pt-6 pb-4 text-center">
          {/* Illustration */}
          <Image
            src="/need-help.png" // ⬅️ exact image from Figma
            alt="Need help"
            width={140}
            height={140}
            className="mx-auto"
            priority
          />

          {/* Title */}
          <h2 className="mt-4 text-[18px] font-semibold text-blue-600">
            Need Help?
          </h2>

          {/* Subtitle */}
          <p className="mt-1 text-[14px] text-gray-600">
            Select the option from below
          </p>
        </div>

        {/* Options */}
        <div className="px-6">
          {/* Forgot Password */}
          <Link
            href="/auth/forgot"
            className="flex gap-3 py-4 border-b border-gray-200"
          >
            <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
              <Lock size={16} className="text-gray-600" />
            </div>
            <div className="text-left">
              <p className="text-[15px] font-medium text-gray-600">
                Forgot Password?
              </p>
              <p className="text-[13px] text-gray-600">
                This lets you reset your password
              </p>
            </div>
          </Link>

          {/* Forgot Username */}
          <Link href="/auth/username_sent" className="flex gap-3 py-4">
            <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
              <User size={16} className="text-gray-600" />
            </div>
            <div className="text-left">
              <p className="text-[15px] font-medium text-gray-600">
                Forgot Username?
              </p>
              <p className="text-[13px] text-gray-600">
                This lets you recover your username
              </p>
            </div>
          </Link>
        </div>

        {/* Cancel */}
        <div className="px-6 pb-6">
          <button
            onClick={onClose}
            className="mt-2 h-[40px] w-full rounded-[8px] border border-gray-300 bg-gray-100 text-[14px] font-medium text-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
