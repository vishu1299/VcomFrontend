"use client";

import { useMemo, useState } from "react";
import ProductListGridCard from "@/app/product-list/components/ProductListGridCard";
import QuickViewModal from "@/app/product-list/components/QuickViewModal";
import type { ProductCardProps } from "@/app/product-list/components/ProductCard";
import { getProductDetail } from "@/app/product-list/data/productDetails";
import { RECENTLY_ADDED } from "../data/products";
import { sellerProductToCardProps } from "../lib/sellerProductToCardProps";

const INITIAL_VISIBLE = 4;
const LOAD_MORE = 4;

export default function RecentlyAddedSection() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [quickViewProduct, setQuickViewProduct] = useState<ProductCardProps | null>(null);

  const products = useMemo(
    () => RECENTLY_ADDED.map(sellerProductToCardProps),
    []
  );

  const visible = products.slice(0, visibleCount);
  const canShowMore = visibleCount < products.length;

  return (
    <section className="py-4" style={{ fontFamily: "var(--font-poppins)" }}>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-[#131313] sm:text-xl">
          Recently Added
        </h2>
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="grid min-w-0 grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4">
          {visible.map((product) => (
            <ProductListGridCard
              key={String(product.id)}
              {...product}
              onQuickView={() => setQuickViewProduct(product)}
            />
          ))}
        </div>
      </div>

      {canShowMore && (
        <div className="mt-6 flex w-full justify-center">
          <button
            type="button"
            onClick={() =>
              setVisibleCount((c) => Math.min(c + LOAD_MORE, products.length))
            }
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1E40AF] transition hover:text-[#1E40AF]/80"
          >
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
          </button>
        </div>
      )}

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
