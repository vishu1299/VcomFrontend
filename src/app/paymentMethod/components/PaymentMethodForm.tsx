"use client";

import { useState } from "react";

const STORED_CARDS = [
  { id: "axis", bankName: "Axis Bank", number: "3262", name: "Prateek Sharma", logo: "/images/axis.png" },
  { id: "pnb", bankName: "Pnb Bank", number: "3262", name: "Prateek Sharma", logo: "/images/pnb.png" },
];

const CARD_LOGOS = [
  { id: "master", src: "/images/master.png", alt: "Mastercard" },
  { id: "visa", src: "/images/visa.png", alt: "VISA" },
  { id: "maestro", src: "/images/maestro.png", alt: "Maestro" },
  { id: "rupay", src: "/images/rupay.png", alt: "RuPay" },
];

function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-gray-500 pointer-events-none">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function PaymentMethodForm() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [selectedCod, setSelectedCod] = useState(false);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
      <h2 className="text-xl font-bold text-[#131313]">Payment Method</h2>
      <p className="text-sm text-gray-600 mt-1 mb-6">Fill out your delivery details carefully to ensure smooth delivery.</p>

      {/* Credit & Debit Card - Stored cards */}
      <div className="mb-8">
        <h3 className="text-base font-bold text-[#131313] mb-4">Credit & Debit Card</h3>
        <div className="space-y-3">
          {STORED_CARDS.map((card) => (
            <label
              key={card.id}
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-white cursor-pointer hover:bg-gray-50/50 transition"
            >
              <div className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-6 gap-3 sm:gap-4">
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Bank Name</p>
                  <div className="flex items-center gap-2">
                    <img src={card.logo} alt="" className="w-8 h-8 rounded-full object-contain shrink-0 bg-gray-100" />
                    <span className="text-sm font-semibold text-[#131313]">{card.bankName}</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Number</p>
                  <p className="text-sm font-medium text-[#131313]">ending in {card.number}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Name</p>
                  <p className="text-sm font-medium text-[#131313]">{card.name}</p>
                </div>
              </div>
              <input
                type="radio"
                name="storedCard"
                value={card.id}
                checked={selectedCard === card.id}
                onChange={() => setSelectedCard(card.id)}
                className="w-4 h-4 rounded-full border-2 border-gray-300 text-[#1E40AF] focus:ring-[#1E40AF] shrink-0"
              />
            </label>
          ))}
        </div>
      </div>

      {/* Another payment method */}
      <div className="mb-8 border-t border-gray-200 pt-2">
        <h3 className="text-base font-bold text-[#131313] mb-4">Another payment method</h3>
        <div className="mb-4">
          <p className="text-sm font-medium text-[#131313] mb-3">Credit or Debit Card</p>
          <div className="flex flex-wrap gap-3">
            {CARD_LOGOS.map((card) => (
              <img
                key={card.id}
                src={card.src}
                alt={card.alt}
                className="w-10 h-7 object-contain rounded border border-gray-200 bg-white shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Net Banking */}
        <div className="mb-4">
          <h3 className="text-base font-bold text-[#131313] mb-3 border-t border-gray-200 pt-2">Net Banking</h3>
          <div className="relative">
            <select
              className="w-[50%] pl-3 pr-10 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 appearance-none cursor-pointer"
              defaultValue=""
            >
              <option value="" disabled>Choose Bank</option>
              <option value="hdfc">HDFC Bank</option>
              <option value="icici">ICICI Bank</option>
              <option value="sbi">State Bank of India</option>
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <ChevronDownIcon />
            </span>
          </div>
        </div>

        {/* Cash on Delivery */}
        <div className="border-t border-gray-200 pt-2">
          <h3 className="text-base font-bold text-[#131313] mb-3">Cash on Delivery/Pay on Delivery</h3>
          <label className="flex items-center justify-between gap-4 p-4 rounded-xl border border-gray-200 bg-white cursor-pointer hover:bg-gray-50/50 transition w-[50%]">
            <span className="text-sm font-medium text-[#131313]">Cash, UPI and cards accepted</span>
            <input
              type="radio"
              name="cod"
              checked={selectedCod}
              onChange={() => setSelectedCod(true)}
              className="w-4 h-4 rounded-full border-2 border-gray-300 text-[#1E40AF] focus:ring-[#1E40AF] shrink-0"
            />
          </label>
        </div>
      </div>
    </div>
  );
}
