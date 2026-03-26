"use client";

import { useState } from "react";
import ProductListGridCard from "@/app/product-list/components/ProductListGridCard";
import QuickViewModal from "@/app/product-list/components/QuickViewModal";
import type { ProductCardProps } from "@/app/product-list/components/ProductCard";
import { getProductDetail } from "@/app/product-list/data/productDetails";
import { ALL_PRODUCTS } from "../data/products";
import { sellerProductToCardProps } from "../lib/sellerProductToCardProps";

const PRODUCT_FILTERS = [
  { name: "Category", id: "category", options: ["All", "Electronics", "Fashion", "Home"] },
  { name: "Sort by", id: "sort", options: ["Popular", "Newest", "Price: low to high", "Price: high to low"] },
  { name: "Price", id: "price", options: ["Any", "Under $25", "$25–$50", "$50–$100", "Over $100"] },
  { name: "Ratings", id: "ratings", options: ["Any", "4★ & up", "3★ & up"] },
] as const;

function ProductFilterControls({ className }: { className?: string }) {
  return (
    <div className={className}>
      {PRODUCT_FILTERS.map((filter) => (
        <div
          key={filter.id}
          className="relative flex min-w-0 items-center gap-2 lg:shrink-0"
        >
          <label
            htmlFor={`products-${filter.id}`}
            className="shrink-0 text-sm font-medium text-[#131313]"
          >
            {filter.name}
          </label>
          <div className="relative min-w-0 flex-1 lg:w-[140px] lg:flex-none xl:w-[130px]">
            <select
              id={`products-${filter.id}`}
              className="w-full cursor-pointer appearance-none rounded-lg border border-gray-200 bg-white py-2 pl-3 pr-8 text-sm font-medium text-[#131313] focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              defaultValue={filter.options[0]}
            >
              {filter.options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[#131313]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ProductsSection() {
  const [quickViewProduct, setQuickViewProduct] = useState<ProductCardProps | null>(null);
  const products = ALL_PRODUCTS.map(sellerProductToCardProps);

  return (
    <section className="py-4" style={{ fontFamily: "var(--font-poppins)" }}>
      <div className="mb-4">
        {/* Mobile / tablet: title on top, filters below (unchanged pattern) */}
        <div className="lg:hidden">
          <h2 className="mb-3 text-lg font-bold text-[#131313] sm:text-xl">
            Products
          </h2>
          <ProductFilterControls className="grid grid-cols-2 gap-2 sm:gap-3" />
        </div>

        {/* Web: heading + all filters on one row */}
        <div className="hidden items-end justify-between gap-4 lg:flex">
          <h2 className="shrink-0 text-xl font-bold text-[#131313] xl:text-2xl">
            Products
          </h2>
          <ProductFilterControls className="flex min-w-0 flex-1 flex-wrap items-end justify-end gap-x-4 gap-y-2" />
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="grid min-w-0 grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4">
          {products.map((product) => (
            <ProductListGridCard
              key={String(product.id)}
              {...product}
              onQuickView={() => setQuickViewProduct(product)}
            />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-6 flex w-full items-center justify-center gap-2 text-sm font-medium text-[#1E40AF] hover:text-[#1E40AF]/80">
        See more
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
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
