"use client";

import { useState } from "react";

const FAQ_TABS = [
  "General",
  "Orders",
  "Shipping & Delivery",
  "Returns & Refunds",
  "Warranty",
  "Products",
  "Payments",
] as const;

const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "Can I modify or cancel my order after purchase?",
    answer:
      "You can modify or cancel your order within 24 hours of placement. After that, contact support for assistance.",
  },
  {
    question: "Is UrbanTech an authorized Apple reseller?",
    answer:
      "Yes. UrbanTech is a certified premium reseller with verified documentation.",
  },
  {
    question: "Do you support bulk orders?",
    answer:
      "Yes. We offer bulk and B2B ordering. Contact our sales team for quotes and delivery options.",
  },
  {
    question: "Is UrbanTech an authorized Apple reseller?",
    answer:
      "Yes. UrbanTech is a certified premium reseller with verified documentation.",
  },
  {
    question: "Is UrbanTech an authorized Apple reseller?",
    answer:
      "Yes. UrbanTech is a certified premium reseller with verified documentation.",
  },
];

function ChevronDownIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function ChevronUpIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <path d="M18 15l-6-6-6 6" />
    </svg>
  );
}

export default function Faq() {
  const [activeTab, setActiveTab] =
    useState<(typeof FAQ_TABS)[number]>("General");
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section className="py-4 w-3/4">
      <h2 className="text-xl sm:text-2xl font-bold text-[#131313] mb-4 sm:mb-6">
        FAQ&apos;s
      </h2>

      <input
        type="text"
        placeholder="Search any question"
        className="w-full px-4 py-3 rounded-lg border border-[#D2D2D2] bg-white text-sm text-[#131313] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 mb-6"
      />

      <div className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-2 mb-6">
        {FAQ_TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`text-sm font-medium whitespace-nowrap transition shrink-0 ${
              activeTab === tab
                ? "text-[#131313] border-b-2 border-[#1E3A8A] pb-1"
                : "text-[#131313] hover:text-[#131313]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
        {FAQ_ITEMS.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className={`border-b border-gray-200 last:border-b-0`}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-4 py-4 text-left hover:bg-gray-50/50 transition"
              >
                <span className="text-sm font-medium text-[#131313] flex-1 min-w-0">
                  {item.question}
                </span>
                <span className="text-[#131313] shrink-0">
                  {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </span>
              </button>
              {isOpen && (
                <div className="px-4 pb-4 pt-0">
                  <p className="text-sm text-[#131313] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
