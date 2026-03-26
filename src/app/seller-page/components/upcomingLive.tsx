"use client";

import { useState } from "react";
import UpcomingLiveCard from "@/app/all-live-now/components/UpcomingLiveCard";
import RelatedProductsCarousel from "../../customer-reviews/components/RelatedProductsCarousel";
import QuickViewModal from "@/app/product-list/components/QuickViewModal";
import type { ProductCardProps } from "@/app/product-list/components/ProductCard";
import { getProductDetail } from "@/app/product-list/data/productDetails";
import { UpcomingLiveProducts } from "../data/products";

export default function UpcomingLive() {
  const [quickViewProduct, setQuickViewProduct] =
    useState<ProductCardProps | null>(null);

  return (
    <section className="py-4">
      <div className="grid min-w-0 grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {UpcomingLiveProducts.map((product) => (
          <UpcomingLiveCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            scheduledDate={product.scheduledDate}
            viewCount={product.viewCount}
          />
        ))}
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
