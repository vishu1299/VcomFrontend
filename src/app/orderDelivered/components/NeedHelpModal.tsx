"use client";

import { useState, useRef, useEffect } from "react";

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
  { question: "Can I modify or cancel my order after purchase?", answer: "You can modify or cancel your order within 24 hours of placement. After that, contact support for assistance." },
  { question: "Is UrbanTech an authorized Apple reseller?", answer: "Yes. UrbanTech is a certified premium reseller with verified documentation." },
  { question: "Do you support bulk orders?", answer: "Yes. We offer bulk and B2B ordering. Contact our sales team for quotes and delivery options." },
  { question: "Is UrbanTech an authorized Apple reseller?", answer: "Yes. UrbanTech is a certified premium reseller with verified documentation." },
  { question: "Is UrbanTech an authorized Apple reseller?", answer: "Yes. UrbanTech is a certified premium reseller with verified documentation." },
];

const ISSUE_TYPE_OPTIONS = [
  "Wrong Item Delivered",
  "Item Not Delivered",
  "Damaged Product",
  "Refund Not Recieved",
  "Seller Misbehaving",
  "Payment Issue",
] as const;

const MAX_DESCRIPTION_LENGTH = 500;

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function ChevronUpIcon({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 15l-6-6-6 6" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function CameraPlusIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-gray-400 mx-auto">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
      <line x1="12" y1="10" x2="12" y2="10.01" strokeWidth="2" />
      <line x1="16" y1="6" x2="16" y2="4" />
      <line x1="8" y1="6" x2="8" y2="4" />
    </svg>
  );
}

type NeedHelpModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function NeedHelpModal({ open, onClose }: NeedHelpModalProps) {
  const [activeTab, setActiveTab] = useState<(typeof FAQ_TABS)[number]>("General");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(1);
  const [issueType, setIssueType] = useState<string | null>(null);
  const [issueTypeOpen, setIssueTypeOpen] = useState(false);
  const [description, setDescription] = useState("");
  const issueTypeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (issueTypeRef.current && !issueTypeRef.current.contains(e.target as Node)) {
        setIssueTypeOpen(false);
      }
    };
    if (issueTypeOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [issueTypeOpen]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2">
      <div className="absolute inset-0 bg-black/50" aria-hidden onClick={onClose} />
      <div
        className="relative z-10 w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col bg-white rounded-xl shadow-xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="need-help-title"
      >
        <div className="flex-1 min-h-0 overflow-hidden overflow-y-auto">
          <div className="p-3 pb-0 flex items-start justify-between gap-3">
            <div>
              <h2 id="need-help-title" className="text-xl sm:text-2xl font-bold text-[#131313]">
                Need Help?
              </h2>
              <p className="text-sm text-gray-500 mt-1">Experiencing issues</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-gray-500 hover:text-[#131313] hover:bg-gray-100 transition shrink-0"
              aria-label="Close"
            >
              <CloseIcon />
            </button>
          </div>
          <hr className="border-gray-100 mt-6 -mx-[1.75rem]" />
          <div className="grid grid-cols-1 lg:grid-cols-2 ">
            {/* Left: Need Help + FAQ */}
            <div className=" bg-gray-50 p-3 border-r border-gray-200">

              <h3 className="text-base font-bold text-[#131313] mb-3">FAQ&apos;s</h3>
              <input
                type="text"
                placeholder="Search any question"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm text-[#131313] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 mb-4"
              />

              <div className="flex gap-4 sm:gap-6 mb-4 overflow-x-auto  pb-2 -mx-1">
                {FAQ_TABS.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`text-sm font-medium whitespace-nowrap transition shrink-0 pb-1 border-b-2 ${
                      activeTab === tab
                        ? "text-[#131313] border-[#131313]"
                        : "text-gray-500 border-transparent hover:text-gray-700"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                {FAQ_ITEMS.map((item, i) => {
                  const isOpen = openFaqIndex === i;
                  return (
                    <div key={i} className="border-b border-gray-200 last:border-b-0">
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                        className="w-full flex bg-gray-50 items-center justify-between gap-4 px-4 py-4 text-left hover:bg-gray-50/50 transition"
                      >
                        <span className="text-sm font-medium text-[#131313] flex-1 min-w-0">{item.question}</span>
                        <span className="text-gray-500 shrink-0">
                          {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 pt-0">
                          <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: File a Dispute */}
            <div className=" p-3">
              <h3 className="text-base font-bold text-[#131313] mb-4">File a Dispute</h3>
              <p className="text-sm text-[#131313] mb-1">Order ID: #ORD-4349-3</p>
              <p className="text-sm text-[#131313] mb-6">Product Name: IPhone 17 Pro Max 256GB</p>

              <div className="mb-4" ref={issueTypeRef}>
                <label htmlFor="issue-type" className="block text-sm font-medium text-[#131313] mb-2">
                  Issue Type:
                </label>
                <div className="relative">
                  <button
                    type="button"
                    id="issue-type"
                    onClick={() => setIssueTypeOpen(!issueTypeOpen)}
                    className="w-full  flex items-center justify-between gap-2 px-4 py-3 rounded-lg border border-gray-200 bg-white text-left text-sm text-[#131313] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  >
                    <span className={issueType ? "text-[#131313]" : "text-gray-400"}>
                      {issueType ?? "Select Reason"}
                    </span>
                    <ChevronDownIcon className={`shrink-0 text-gray-500 transition-transform ${issueTypeOpen ? "rotate-180" : ""}`} />
                  </button>
                  {issueTypeOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-20">
                      {ISSUE_TYPE_OPTIONS.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => {
                            setIssueType(option);
                            setIssueTypeOpen(false);
                          }}
                          className="w-full px-4 py-3 text-left text-sm font-medium text-[#131313] hover:bg-gray-50 transition border-b border-gray-200 last:border-b-0"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="describe-issue" className="block text-sm font-bold text-[#131313] mb-2">
                  Describe the issue
                </label>
                <div className="relative">
                  <textarea
                    id="describe-issue"
                    value={description}
                    onChange={(e) => setDescription(e.target.value.slice(0, MAX_DESCRIPTION_LENGTH))}
                    placeholder="Explain what happened. Include dates, order numbers, or screenshots if possible."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm text-[#131313] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none pr-16"
                  />
                  <span className="absolute bottom-3 right-3 text-xs text-gray-400">
                    ({description.length}/{MAX_DESCRIPTION_LENGTH})
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-[#131313] mb-2">
                  Upload Supporting Media
                </label>
                <div className="border-2 border-dashed border-gray-200 rounded-lg bg-gray-50/50 p-6 sm:p-8 text-center">
                  <CameraPlusIcon />
                  <p className="text-sm font-medium text-gray-600 mt-2">Choose a file or drag & drop it here</p>
                  <p className="text-xs text-gray-400 mt-1">JPEG, PNG, PDG, and MP4 formats, up to 50 mb</p>
                  <button
                    type="button"
                    className="mt-3 px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm font-medium text-[#131313] hover:bg-gray-50 transition"
                  >
                    Browse File
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm font-medium text-[#131313] hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="px-4 py-2.5 rounded-lg bg-[#1E40AF] text-white text-sm font-medium hover:bg-[#1D3A9A] transition"
                >
                  Submit Dispute
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
