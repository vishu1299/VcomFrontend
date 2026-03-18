"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, MapPin, CheckCircle2, XCircle, Truck, RotateCcw } from "lucide-react";

// Mock: pincode last digit even = available, odd = not available (replace with API later)
function checkPincodeAvailability(pin: string): boolean {
  if (!pin || pin.length < 4) return true; // treat short/invalid as available for demo
  const last = parseInt(pin.slice(-1), 10);
  return isNaN(last) ? true : last % 2 === 0;
}

// Mock: expected delivery date string
function getExpectedDelivery(): string {
  const d = new Date();
  d.setDate(d.getDate() + 5);
  const options: Intl.DateTimeFormatOptions = { weekday: "short", month: "short", day: "numeric" };
  return d.toLocaleDateString("en-IN", options);
}

type CheckDeliveryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productImage: string;
  productSubtext?: string;
  initialPincode?: string;
};

export default function CheckDeliveryModal({
  isOpen,
  onClose,
  productName,
  productImage,
  productSubtext,
  initialPincode = "",
}: CheckDeliveryModalProps) {
  const [pincode, setPincode] = useState(initialPincode);
  const [hasChecked, setHasChecked] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setPincode(initialPincode);
      setHasChecked(false);
    }
  }, [isOpen, initialPincode]);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = pincode.trim();
    if (!trimmed) return;
    setIsAvailable(checkPincodeAvailability(trimmed));
    setHasChecked(true);
  };

  const handlePincodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPincode(e.target.value.replace(/\D/g, "").slice(0, 6));
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50"
      role="dialog"
      aria-modal
      aria-label="Check delivery availability"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[500px] max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-xl border border-gray-200 p-5 sm:p-6"
        onClick={(e) => e.stopPropagation()}
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-lg font-bold text-black pr-10">Check Delivery Availability</h2>
        <p className="text-sm text-gray-500 mt-1 mb-5">
          Enter your pincode to check if delivery is available in your area
        </p>

        <form onSubmit={handleCheck} className="space-y-5">
          <div>
            <label className="flex items-center gap-2 text-sm font-bold text-black mb-2">
              <MapPin className="w-4 h-4 text-black shrink-0" strokeWidth={2} />
              Enter Pincode
            </label>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <input
                type="text"
                inputMode="numeric"
                value={pincode}
                onChange={handlePincodeChange}
                placeholder="Enter Pincode"
                maxLength={6}
                className="flex-1 min-w-0 px-4 py-3 rounded-lg bg-[#F3F4F6] border-0 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
              />
              <button
                type="submit"
                className="shrink-0 px-5 py-3 rounded-lg bg-[#FFBF00] text-black text-sm font-semibold hover:bg-[#e5ac00] transition"
              >
                Check
              </button>
            </div>
          </div>

          {hasChecked && (
            <div className="rounded-lg border border-gray-200 p-4 space-y-4">
              <div className="flex items-start gap-3">
                {isAvailable ? (
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 shrink-0 mt-0.5" />
                )}
                <div>
                  <p
                    className={`text-sm font-bold ${isAvailable ? "text-green-600" : "text-red-600"}`}
                  >
                    {isAvailable ? "Delivery Available" : "Delivery not available"}
                  </p>
                  <p className="text-sm text-gray-500 mt-0.5">
                    Pincode {pincode.trim()} is{isAvailable ? " " : " not "}serviceable
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-black">Estimated Delivery</p>
                  <p className="text-sm text-gray-500 mt-0.5">
                    Expected by <strong>{getExpectedDelivery()}</strong> (5 days)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RotateCcw className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-black">Return Policy</p>
                  <p className="text-sm text-gray-500 mt-0.5">
                    Free 30 days delivery returns available
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="border-t border-gray-200 pt-4">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">Product</p>
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-gray-100 overflow-hidden shrink-0">
                <Image
                  src={productImage}
                  alt={productName}
                  fill
                  className="object-cover"
                  unoptimized={productImage.startsWith("http")}
                  sizes="64px"
                />
              </div>
              <p className="text-sm font-bold text-black leading-snug min-w-0">
                {productSubtext ?? productName}
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
