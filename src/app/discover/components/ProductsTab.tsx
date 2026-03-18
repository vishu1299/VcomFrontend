"use client";

import Image from "next/image";
import { DISCOVER_STREAM_PRODUCTS } from "../data/products";
import type { DiscoverProduct } from "../data/products";

function ProductCard({ product }: { product: DiscoverProduct }) {
  const fullName = product.subtitle
    ? `${product.name} ${product.subtitle}`
    : product.name;

  return (
    <div className="flex items-center gap-4 p-4 bg-white border border-[#E8E8E8] rounded-2xl shadow-sm hover:shadow-md transition">
      {/* Image */}
      <div className="w-[110px] h-[130px] flex-shrink-0 flex items-center justify-center">
        <Image
          src={product.image}
          alt={fullName}
          width={110}
          height={130}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 flex-1 min-w-0">
        {/* Badges */}
        <div className="flex gap-2 flex-wrap">
          {product.badges?.map((badge) => (
            <span
              key={badge}
              className={`text-xs font-semibold px-3 py-1 rounded ${
                badge === "SALE"
                  ? "bg-yellow-400 text-black"
                  : "bg-blue-500 text-white"
              }`}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-design-14 font-semibold text-[var(--color-black)] leading-snug line-clamp-2">
          {fullName}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-design-20 font-bold text-[var(--color-black)]">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-design-14 text-gray-400 line-through">
            ${product.originalPrice.toFixed(2)}
          </span>
        </div>

        {/* Button */}
        <button
          type="button"
          className="mt-1 border border-[var(--color-border)] rounded-lg py-2.5 flex items-center justify-center gap-1.5 text-design-14 font-medium text-[var(--color-black)] hover:bg-gray-50 transition"
        >
          <span className="text-lg leading-none">+</span>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default function ProductsTab() {
  return (
    <div className="bg-white rounded-b-lg overflow-hidden">
      <div className="p-4 grid grid-cols-2 gap-4 max-h-[540px] overflow-y-auto scrollbar-hide">
        {DISCOVER_STREAM_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
