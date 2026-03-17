"use client";

import { useState } from "react";

function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-gray-500 pointer-events-none">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function ShippingForm() {
  const [addressType, setAddressType] = useState<"home" | "office" | "other">("home");

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
      <h2 className="text-xl font-bold text-[#131313]">Shipping</h2>
      <p className="text-sm text-gray-600 mt-1 mb-6">Fill out your delivery details carefully to ensure smooth delivery</p>

      <form className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-[#131313] mb-1.5">First Name <span className="text-red-400">*</span></label>
            <input
              type="text"
              id="firstName"
              defaultValue="david"
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-[#131313] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-[#131313] mb-1.5">Last Name <span className="text-red-400">*</span></label>
            <input
              type="text"
              id="lastName"
              defaultValue="Josh"
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-[#131313] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#131313] mb-1.5">Phone Number <span className="text-red-400">*</span></label>
          <div className="flex rounded-lg border border-gray-200 overflow-hidden bg-white focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500">
            <div className="flex items-center shrink-0 border-r border-gray-200 bg-gray-50 pl-3 py-1">
              <select
                id="phoneCode"
                className="py-2 text-sm text-[#131313] bg-transparent border-0 appearance-none focus:outline-none cursor-pointer min-w-[1rem]"
                aria-label="Country code"
              >
                <option value="+1">+1</option>
                <option value="+91">+91</option>
                <option value="+44">+44</option>
              </select>
              <img src="/images/america.png" alt="" className="w-5 h-4 object-contain  shrink-0" />
              <span className="text-gray-500 pointer-events-none" aria-hidden>
                <ChevronDownIcon />
              </span>
            </div>
            <input
              type="tel"
              id="phone"
              defaultValue="87865453213"
              placeholder="Phone number"
              className="flex-1 min-w-0 px-3 py-2.5 text-sm text-[#131313] focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#131313] mb-1.5">Email <span className="text-red-400">*</span></label>
          <input
            type="email"
            id="email"
            defaultValue="davidjosh32@gmail.com"
            className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-[#131313] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          />
        </div>

        <div>
          <span className="block text-sm font-medium text-[#131313] mb-2">Address <span className="text-red-400">*</span></span>
          <div className="flex flex-wrap gap-3">
            {(["home", "office", "other"] as const).map((value) => {
              const isSelected = addressType === value;
              return (
                <label
                  key={value}
                  className={`flex items-center justify-between gap-4 px-5 py-3 rounded-lg cursor-pointer transition border-2 bg-white min-w-[100px] ${
                    isSelected ? "border-[#1E40AF]" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <span className="text-sm font-medium text-[#131313] capitalize">{value}</span>
                  <input
                    type="radio"
                    name="addressType"
                    value={value}
                    checked={isSelected}
                    onChange={() => setAddressType(value)}
                    className="w-4 h-4 rounded-full border-2 border-gray-300 text-[#1E40AF] focus:ring-[#1E40AF] focus:ring-offset-0 shrink-0 accent-[#1E40AF]"
                  />
                </label>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="street1" className="block text-sm font-medium text-[#131313] mb-1.5">Street Address line 1 <span className="text-red-400">*</span></label>
          <input
            type="text"
            id="street1"
            placeholder="Example: 2451 Lake Ridge Dr."
            className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-[#131313] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="street2" className="block text-sm font-medium text-[#131313] mb-1.5">Street Address Line 2 (Optional)</label>
          <input
            type="text"
            id="street2"
            placeholder="Example: Apt 302 or Suite B"
            className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-[#131313] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          />
        </div>
</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-[#131313] mb-1.5">City / Town <span className="text-red-400">*</span></label>
            <input
              type="text"
              id="city"
              defaultValue="New Delhi"
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-[#131313] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-[#131313] mb-1.5">State</label>
            <div className="relative">
              <input
                type="text"
                id="state"
                defaultValue="Delhi"
                className="w-full px-3 py-2.5 pr-9 rounded-lg border border-gray-200 bg-white text-sm text-[#131313] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
              <span className="absolute right-2.5 top-1/2 -translate-y-1/2">
                <ChevronDownIcon />
              </span>
            </div>
          </div>
          <div>
            <label htmlFor="zip" className="block text-sm font-medium text-[#131313] mb-1.5">Zip Code <span className="text-red-400">*</span></label>
            <input
              type="text"
              id="zip"
              defaultValue="90210"
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-[#131313] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-[#131313] mb-1.5">Country <span className="text-red-400">*</span></label>
            <div className="relative">
              <input
                type="text"
                id="country"
                defaultValue="India"
                className="w-full px-3 py-2.5 pr-9 rounded-lg border border-gray-200 bg-white text-sm text-[#131313] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
              <span className="absolute right-2.5 top-1/2 -translate-y-1/2">
                <ChevronDownIcon />
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
