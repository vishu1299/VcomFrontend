"use client";

import RelatedProductsCarousel from "../../customer-reviews/components/RelatedProductsCarousel";
import { useState } from "react";
import QuickViewModal from "@/app/product-list/components/QuickViewModal";
import type { ProductCardProps } from "@/app/product-list/components/ProductCard";
import { getProductDetail } from "@/app/product-list/data/productDetails";

function MapPinIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9CA3AF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function InfoCircleIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9CA3AF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="#374151"
      className="shrink-0 ml-0.5"
      aria-hidden
    >
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}

function TiktokIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="shrink-0 text-[#131313]"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

const CUSTOMER_REVIEW_IMAGES = [
  "/images/customerReviews/review1.png",
  "/images/customerReviews/review2.png",
  "/images/customerReviews/review3.png",
  "/images/customerReviews/review4.png",
] as const;

const DESCRIPTION =
  "UrbanTech is an official premium reseller specializing in Apple products. Operating since 2018, we provide authentic devices, accessories, and certified repairs to over 4.2M customers across India.";

const MORE_INFO = [
  {
    icon: "gmail",
    label: "Email Address",
    value: "Urbantech@contact.com",
  },
  {
    icon: "map",
    label: "Address",
    value: "Building no- 45, Block DA, Newyork",
  },
  {
    icon: "info",
    label: "Joined on",
    value: "21 - Oct - 2020",
  },
] as const;

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/@ubrantech",
    brand: "ig" as const,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/@ubrantech",
    brand: "fb" as const,
  },
  {
    name: "Tiktok",
    href: "https://www.tiktok.com/@ubrantech",
    brand: "tt" as const,
  },
] as const;

function SocialBrandIcon({ brand }: { brand: "ig" | "fb" | "tt" }) {
  const icon =
    brand === "ig"
      ? "/images/share/instagram.png"
      : brand === "fb"
        ? "/images/share/facebook.png"
        : "/images/share/tiktok.png";

  return (
    <span className="w-5 h-5 rounded-md bg-[#F2F2F2] flex items-center justify-center overflow-hidden shrink-0">
      <img src={icon} alt="" className="w-4 h-4 object-contain" />
    </span>
  );
}

// Same colours as ReviewSummarySection for rating bars
const RATING_BARS = [
  { stars: 5, percent: 54, color: "#eab308" },
  { stars: 4, percent: 20, color: "#D8F500" },
  { stars: 3, percent: 10, color: "#F56E00" },
  { stars: 2, percent: 5, color: "#FC1313" },
  { stars: 1, percent: 12, color: "#D4D4D4" },
];

function StarIconSmall({ filled, half }: { filled?: boolean; half?: boolean }) {
  if (half) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" className="shrink-0">
        <defs>
          <linearGradient id="halfStarProfile" x1="0" x2="1" y1="0" y2="0">
            <stop offset="50%" stopColor="#eab308" />
            <stop offset="50%" stopColor="#e5e7eb" />
          </linearGradient>
        </defs>
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          fill="url(#halfStarProfile)"
          stroke="#eab308"
          strokeWidth="1.5"
        />
      </svg>
    );
  }
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill={filled ? "#eab308" : "none"}
      stroke="#eab308"
      strokeWidth="1.5"
      className="shrink-0"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

const SAMPLE_REVIEWS = [
  {
    product: "Iphone 17 Pro Max",
    date: "2024-07-05 12:00PM",
    text: "Hi, I'm so glad you like our products. Your best rating is our biggest support. Don't forget to share with your friends, family or relatives. Have a nice day, waiting for your next order.",
  },
  {
    product: "Iphone 17 Pro Max",
    date: "2024-07-05 12:00PM",
    text: "Hi, I'm so glad you like our products. Your best rating is our biggest support. Don't forget to share with your friends, family or relatives. Have a nice day, waiting for your next order.",
  },
  {
    product: "Iphone 17 Pro Max",
    date: "2024-07-05 12:00PM",
    text: "Hi, I'm so glad you like our products. Your best rating is our biggest support. Don't forget to share with your friends, family or relatives. Have a nice day, waiting for your next order.",
  },
  {
    product: "Iphone 17 Pro Max",
    date: "2024-07-05 12:00PM",
    text: "Hi, I'm so glad you like our products. Your best rating is our biggest support. Don't forget to share with your friends, family or relatives. Have a nice day, waiting for your next order.",
  },
  {
    product: "Iphone 17 Pro Max",
    date: "2024-07-05 12:00PM",
    text: "Hi, I'm so glad you like our products. Your best rating is our biggest support. Don't forget to share with your friends, family or relatives. Have a nice day, waiting for your next order.",
  },
  {
    product: "Iphone 17 Pro Max",
    date: "2024-07-04 10:30AM",
    text: "Hi, I'm so glad you like our products. Your best rating is our biggest support. Don't forget to share with your friends, family or relatives. Have a nice day, waiting for your next order.",
  },
];

export default function Profile() {
  const [quickViewProduct, setQuickViewProduct] =
    useState<ProductCardProps | null>(null);

  return (
    <section className="py-4">
      <div className="w-full p-3 bg-white rounded-xl border border-gray-200">
        <div className="w-full rounded-xl bg-gray-200 flex items-center justify-center min-h-[280px] sm:min-h-[300px] relative">
          <button
            type="button"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition"
            aria-label="Play video"
          >
            <PlayIcon />
          </button>
        </div>

        <div className="mt-6">
          <h2 className="text-base font-bold text-[#131313] mb-2">
            Description
          </h2>
          <p className="text-sm text-[#131313] leading-relaxed">
            {DESCRIPTION}
          </p>
        </div>

        <div className="mt-8 flex flex-col md:flex-row gap-8 md:gap-12">
          <div>
            <h2 className="text-base font-bold text-[#131313] mb-4">
              More Info
            </h2>
            <ul className="space-y-4">
              {MORE_INFO.map((item) => (
                <li key={item.label} className="flex gap-3">
                  <span className="shrink-0 w-5 h-5 flex items-center justify-center mt-0.5">
                    {item.icon === "gmail" && (
                      <span className="w-5 h-5 rounded-md bg-[#F2F2F2] flex items-center justify-center overflow-hidden shrink-0">
                        <img
                          src="/images/share/gmail.png"
                          alt=""
                          className="w-4 h-4 object-contain"
                        />
                      </span>
                    )}
                    {item.icon === "map" && <MapPinIcon />}
                    {item.icon === "info" && <InfoCircleIcon />}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-[#131313]">
                      {item.label}
                    </p>
                    <p className="text-sm text-[#131313] mt-0.5">
                      {item.value}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-base font-bold text-[#131313] mb-4">
              Social Links
            </h2>
            <ul className="space-y-4">
              {SOCIAL_LINKS.map((item) => (
                <li key={item.name} className="flex gap-3">
                  <span className="shrink-0 w-5 h-5 flex items-center justify-center mt-0.5">
                    <SocialBrandIcon brand={item.brand} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-[#131313]">
                      {item.name}
                    </p>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 underline hover:text-blue-700 mt-0.5 block break-all"
                    >
                      www.{item.name.toLowerCase()}.com/@ubrantech
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Ratings and Reviews - same bar colours as ReviewSummarySection */}
      <div className="mt-4 w-full p-4 bg-white rounded-xl border border-gray-200">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-8 mb-6">
          <div className="min-w-0">
            <h2 className="text-xl sm:text-2xl font-bold text-[#131313]">
              Ratings and Reviews
            </h2>
            <p className="text-sm text-[#131313] mt-0.5">Customer reviews</p>

            <div className="mt-3 flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                <StarIconSmall filled />
                <StarIconSmall filled />
                <StarIconSmall filled />
                <StarIconSmall filled />
                <StarIconSmall />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-[#131313] leading-none">
                4 out of 5
              </span>
            </div>
          </div>

          <div className="w-full max-w-[420px] lg:pt-0">
            <p className="text-sm text-[#131313] mb-2 font-medium">(10,653 Ratings)</p>
            <div className="space-y-2">
              {RATING_BARS.map(({ stars, percent, color }) => (
                <div key={stars} className="flex items-center gap-3">
                  <span className="text-sm text-[#131313] w-14 shrink-0">
                    {stars} Star
                  </span>
                  <div className="flex-1 h-2.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${percent}%`, backgroundColor: color }}
                    />
                  </div>
                  <span className="text-sm text-[#131313] w-10 text-right shrink-0">
                    {percent}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex justify-center items-center gap-3">
              <label
                htmlFor="profile-product-cat"
                className="text-xs font-semibold text-[#131313]"
              >
                Product Category
              </label>
              <div className="relative">
                <select
                  id="profile-product-cat"
                  className="pl-3 pr-8 py-2 rounded-lg border border-gray-200 bg-white text-sm text-[#131313] appearance-none cursor-pointer min-w-[140px]"
                  defaultValue="electronics"
                >
                  <option value="electronics">Electronics</option>
                </select>
                <span className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#131313]">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <label
                htmlFor="profile-ratings"
                className="text-xs font-semibold text-[#131313]"
              >
                Ratings
              </label>
              <div className="relative">
                <select
                  id="profile-ratings"
                  className="pl-3 pr-8 py-2 rounded-lg border border-gray-200 bg-white text-sm text-[#131313] appearance-none cursor-pointer min-w-[100px]"
                  defaultValue="4"
                >
                  <option value="5">5 Star</option>
                  <option value="4">4 Star</option>
                  <option value="3">3 Star</option>
                  <option value="2">2 Star</option>
                  <option value="1">1 Star</option>
                </select>
                <span className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#131313]">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-gray-100 rounded-lg">
          {SAMPLE_REVIEWS.map((review, i) => (
            <article key={i} className=" bg-white p-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 min-w-0 bg-gray-100 rounded-full p-2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#374151"
                    strokeWidth="2"
                    className="shrink-0"
                    aria-hidden
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div className="flex w-full items-center justify-between gap-2">
                  <span className="text-sm text-[#131313]">Bought:</span>
                  <span className="text-xs text-[#131313] shrink-0">
                    {review.date}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-0.5 mb-1.5 ml-10">
                <span className="text-sm font-bold text-[#131313] truncate">
                  {review.product}
                </span>
                <div className="flex items-center gap-0.5">
                  <StarIconSmall filled />
                  <StarIconSmall filled />
                  <StarIconSmall filled />
                  <StarIconSmall filled />
                  <StarIconSmall />
                </div>
              </div>
              <p className="text-sm text-[#131313] mb-3 leading-relaxed">
                {review.text}
              </p>
              <div className="flex gap-2 mb-3">
                {CUSTOMER_REVIEW_IMAGES.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className="w-14 h-14 rounded-lg border border-gray-200 bg-gray-100 shrink-0 object-cover"
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="text-sm font-medium text-[#131313] border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition"
                >
                  Helpful
                </button>
                <button
                  type="button"
                  className="text-sm font-medium text-[#131313] px-3 py-1.5 hover:bg-gray-50 transition"
                >
                  Report
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="w-full overflow-x-visible overflow-y-visible">
        <RelatedProductsCarousel
          title="Recently added from this Store"
          onProductClick={setQuickViewProduct}
        />
      </div>

      {quickViewProduct && (
        <QuickViewModal
          product={getProductDetail(quickViewProduct)}
          onClose={() => setQuickViewProduct(null)}
          onGoToProduct={() => setQuickViewProduct(null)}
        />
      )}
    </section>
  );
}
