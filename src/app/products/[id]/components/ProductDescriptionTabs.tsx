"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  User,
  ThumbsUp,
  Flag,
  ArrowRight,
  Plus,
} from "lucide-react";
import type { ProductDetail } from "../data/product-detail";
import ReportReviewModal from "@/components/product/ReportReviewModal";

const ACTIVE_TAB_BG = "#2F4294";

/** Bar colors + widths match product reviews summary design (Figma) */
const RATING_DISTRIBUTION = [
  { stars: 5, percent: 54, color: "#FFB800" },
  { stars: 4, percent: 20, color: "#CCFF00" },
  { stars: 3, percent: 9, color: "#FF6B00" },
  { stars: 2, percent: 5, color: "#FF0000" },
  { stars: 1, percent: 12, color: "#D9D9D9" },
];

const REVIEWS_SUMMARY_TOTAL = 10653;
const REVIEWS_SUMMARY_AVG = 4;
/** Lighter than 1-star fill (#D9D9D9) so the 12% segment stays visible */
const RATING_BAR_TRACK = "#EDEDED";

const MOCK_REVIEWS = [
  {
    id: "1",
    name: "Luke Devis",
    rating: 4,
    date: "2024-07-05 12:00PM",
    text: "Hi, I'm so glad you like our products. Your best rating is our biggest support. Don't forget to share with your friends, family or relatives. Have a nice day, waiting for your next order.",
    photos: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=120&h=120&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=120&h=120&fit=crop",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=120&h=120&fit=crop",
      "https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=120&h=120&fit=crop",
    ],
  },
  {
    id: "2",
    name: "Sarah M.",
    rating: 5,
    date: "2024-07-04 09:30AM",
    text: "Excellent product, fast delivery. Very satisfied with the quality and packaging.",
    photos: [],
  },
];

const REVIEW_COUNT = MOCK_REVIEWS.length;

const TABS = [
  "Descriptions",
  `Reviews (${REVIEW_COUNT})`,
  "Questions",
  "Specifications",
] as const;

const REVIEW_PHOTOS = [
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop",
];

const SUGGESTED_QUESTIONS = [
  "Does it have a good camera?",
  "Is the battery removable?",
  "How many years of warranty it has?",
  "Is it value for money in 2025?",
];

const MOCK_QA = [
  {
    id: "1",
    q: "Does this phone support 5G in India?",
    askedBy: "Rohan",
    askedTime: "2 days ago",
    a: "Yes, it fully supports 5G bands including n28, n78, and n41.",
    repliedBy: "Seller",
    repliedTime: "1 days ago",
  },
  {
    id: "2",
    q: "Does it have dual SIM?",
    askedBy: "Priya",
    askedTime: "5 days ago",
    a: "Yes, it supports dual nano SIM or one eSIM + one nano SIM.",
    repliedBy: "Seller",
    repliedTime: "4 days ago",
  },
  {
    id: "3",
    q: "Is there a charger in the box?",
    askedBy: "Alex",
    askedTime: "1 week ago",
    a: "The box includes a USB-C to USB-C cable. Power adapter is sold separately.",
    repliedBy: "Seller",
    repliedTime: "6 days ago",
  },
];

export default function ProductDescriptionTabs({
  product,
  initialTab,
}: {
  product: ProductDetail;
  initialTab?: "Questions";
}) {
  const [activeTab, setActiveTab] =
    useState<(typeof TABS)[number]>(initialTab ?? TABS[0]);
  const [expandedQId, setExpandedQId] = useState<string | null>(
    MOCK_QA[0]?.id ?? null,
  );
  const [reportReviewOpen, setReportReviewOpen] = useState(false);
  const [reportReviewAuthor, setReportReviewAuthor] = useState<
    string | undefined
  >();
  const reviewPhotosScrollRef = useRef<HTMLDivElement>(null);

  const scrollPhotos = (
    dir: "left" | "right",
    ref: React.RefObject<HTMLDivElement | null>,
  ) => {
    if (!ref.current) return;
    ref.current.scrollBy({
      left: dir === "left" ? -150 : 150,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="rounded-xl overflow-hidden mt-6"
      style={{ fontFamily: "var(--font-poppins)" }}
    >
      {/* Tab navigation - single row on small screens with reduced size */}
      <div className="px-3 sm:px-5 pt-3 sm:pt-4">
        <div className="flex flex-nowrap items-center gap-1.5 sm:flex-wrap sm:gap-5 overflow-x-auto pb-0.5 sm:pb-0">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-md px-2 py-1.5 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-semibold transition whitespace-nowrap shrink-0 ${
                activeTab === tab
                  ? "text-white"
                  : "text-[#4b5563] bg-transparent hover:text-gray-900"
              }`}
              style={
                activeTab === tab
                  ? { backgroundColor: ACTIVE_TAB_BG }
                  : undefined
              }
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mt-0 h-px bg-gray-200 w-full -mb-px" aria-hidden />
      </div>

      {/* Content area - white background */}
      <div className="bg-white rounded-b-xl p-5 sm:p-6 min-h-[200px]">
        {/* Descriptions */}
        {activeTab === "Descriptions" && (
          <div className="text-sm sm:text-base text-[#4b5563] leading-relaxed">
            {(() => {
              const paragraphs = (product.description || "")
                .split(/\n\n+/)
                .filter((p) => p.trim());
              if (paragraphs.length === 0) {
                return (
                  <p>
                    {product.description?.trim() || "No description available."}
                  </p>
                );
              }
              return paragraphs.map((para, i) => (
                <p key={i} className={i > 0 ? "mt-3 sm:mt-4" : ""}>
                  {para.trim()}
                </p>
              ));
            })()}
          </div>
        )}

        {/* Reviews */}
        {activeTab.startsWith("Reviews") && (
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-base font-bold text-[#131313]">
                Customer reviews
              </h3>
              <Link
                href={`/products/${product.id}/reviews`}
                className="text-sm font-normal text-[#131313] hover:underline shrink-0"
              >
                View All
              </Link>
            </div>

            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10 lg:gap-12">
              <div className="flex items-center gap-3 shrink-0">
                <div className="flex gap-0.5 sm:gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className={`w-5 h-5 sm:w-6 sm:h-6 shrink-0 ${
                        s <= REVIEWS_SUMMARY_AVG
                          ? "fill-[#FFB800] text-[#FFB800]"
                          : "fill-transparent text-[#D9D9D9]"
                      }`}
                      strokeWidth={s <= REVIEWS_SUMMARY_AVG ? 0 : 1.5}
                    />
                  ))}
                </div>
                <span className="text-lg sm:text-xl font-bold text-[#131313] whitespace-nowrap">
                  {REVIEWS_SUMMARY_AVG} out of 5
                </span>
              </div>

              <div className="flex-1 min-w-0 w-full">
                <p className="text-sm font-bold text-[#131313] mb-3">
                  ({REVIEWS_SUMMARY_TOTAL.toLocaleString("en-US")} Ratings)
                </p>
                <div className="space-y-2.5 sm:space-y-3">
                  {RATING_DISTRIBUTION.map((r) => (
                    <div
                      key={r.stars}
                      className="flex items-center gap-2 sm:gap-3"
                    >
                      <span className="text-sm font-normal text-[#131313] w-13 sm:w-14 shrink-0">
                        {r.stars} Star
                      </span>
                      <div
                        className="flex-1 h-2.5 sm:h-3 min-w-0 rounded-full overflow-hidden"
                        style={{ backgroundColor: RATING_BAR_TRACK }}
                      >
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${r.percent}%`,
                            backgroundColor: r.color,
                          }}
                        />
                      </div>
                      <span className="text-sm font-normal text-[#131313] w-9 sm:w-10 text-right shrink-0 tabular-nums">
                        {r.percent}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-2">Photos</h4>
              <div className="relative flex items-center">
                <button
                  type="button"
                  onClick={() => scrollPhotos("left", reviewPhotosScrollRef)}
                  className="absolute left-0 z-10 w-8 h-8 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-900 hover:bg-gray-300 shrink-0"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div
                  ref={reviewPhotosScrollRef}
                  className="flex gap-2 overflow-x-auto py-2 px-10 scrollbar-hide"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {REVIEW_PHOTOS.map((src, i) => (
                    <div
                      key={i}
                      className="shrink-0 w-20 h-20 rounded-lg overflow-hidden border border-gray-200"
                    >
                      <Image
                        src={src}
                        alt=""
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => scrollPhotos("right", reviewPhotosScrollRef)}
                  className="absolute right-0 z-10 w-8 h-8 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-900 hover:bg-gray-300 shrink-0"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="relative">
                <select className="appearance-none pl-3 pr-8 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white min-w-[140px]">
                  <option>Top Reviews</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-900 pointer-events-none" />
              </div>
              <div className="relative">
                <select className="appearance-none pl-3 pr-8 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white min-w-[120px]">
                  <option>All Reviews</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-900 pointer-events-none" />
              </div>
              <div className="relative">
                <select className="appearance-none pl-3 pr-8 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white min-w-[100px]">
                  <option>5 - Star</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-900 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-0 border-t border-gray-200">
              {MOCK_REVIEWS.map((rev) => (
                <div
                  key={rev.id}
                  className="py-4 border-b border-gray-200 last:border-b-0"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                        <User className="w-4 h-4 text-gray-900" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {rev.name}
                        </p>
                        <div className="flex gap-0.5 mt-0.5">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star
                              key={s}
                              className={`w-4 h-4 shrink-0 ${s <= rev.rating ? "fill-[#F9B400] text-[#F9B400]" : "fill-gray-200 text-gray-200"}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-gray-900">{rev.date}</span>
                  </div>
                  <p className="text-sm text-gray-900 leading-relaxed mb-2">
                    {rev.text}
                  </p>
                  {rev.photos.length > 0 && (
                    <div
                      className="flex gap-2 mb-2 overflow-x-auto py-1"
                      style={{ scrollbarWidth: "none" }}
                    >
                      {rev.photos.map((src, i) => (
                        <div
                          key={i}
                          className="shrink-0 w-16 h-16 rounded overflow-hidden border border-gray-200"
                        >
                          <Image
                            src={src}
                            alt=""
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                            unoptimized
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="flex gap-4">
                    <button
                      type="button"
                      className="text-sm text-gray-900 hover:text-gray-900 flex items-center gap-1"
                    >
                      <ThumbsUp className="w-4 h-4" /> Helpful
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setReportReviewAuthor(rev.name);
                        setReportReviewOpen(true);
                      }}
                      className="text-sm text-gray-900 hover:text-gray-900 flex items-center gap-1"
                    >
                      <Flag className="w-4 h-4" /> Report
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Questions */}
        {activeTab === "Questions" && (
          <div className="space-y-5">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Frequently asked questions
              </h3>
              <p className="text-sm text-gray-900 mt-1">
                Real questions asked by shoppers. Get answers from the seller
                instantly.
              </p>
            </div>
            <input
              type="text"
              placeholder="Search any question"
              className="w-full max-w-md px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3F8CFF]/30 focus:border-[#3F8CFF]"
            />
            <div className="flex flex-wrap gap-2">
              {SUGGESTED_QUESTIONS.map((q) => (
                <button
                  key={q}
                  type="button"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-900 bg-gray-100 border border-blue-200 hover:bg-gray-200 transition"
                >
                  {q}
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
              ))}
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50"
            >
              <Plus className="w-4 h-4" /> Post your question
            </button>
            <div className="border-t border-gray-200 pt-4 space-y-0">
              {MOCK_QA.map((item) => {
                const isOpen = expandedQId === item.id;
                return (
                  <div
                    key={item.id}
                    className="border-b border-gray-200 last:border-b-0"
                  >
                    <button
                      type="button"
                      onClick={() => setExpandedQId(isOpen ? null : item.id)}
                      className="w-full flex items-start justify-between gap-4 py-4 text-left"
                    >
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Q: {item.q}
                        </p>
                        <p className="text-xs text-gray-900 mt-1">
                          Asked by: {item.askedBy} - {item.askedTime}
                        </p>
                      </div>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-gray-900 shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-900 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="pb-4 pl-0">
                        <p className="text-sm text-gray-900">A: {item.a}</p>
                        <p className="text-xs text-gray-900 mt-1">
                          Replied by: {item.repliedBy} - {item.repliedTime}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Specifications */}
        {activeTab === "Specifications" && (
          <dl className="space-y-0">
            {product.specifications.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col sm:flex-row sm:gap-6 py-3 sm:py-4 ${i < product.specifications.length - 1 ? "border-b border-gray-200" : ""}`}
              >
                <dt className="text-sm font-bold text-gray-900 shrink-0 sm:w-40">
                  {s.label}
                </dt>
                <dd className="text-sm text-[#4b5563] mt-0.5 sm:mt-0 flex-1">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>

      <ReportReviewModal
        open={reportReviewOpen}
        onClose={() => {
          setReportReviewOpen(false);
          setReportReviewAuthor(undefined);
        }}
        reviewAuthor={reportReviewAuthor}
      />
    </div>
  );
}
