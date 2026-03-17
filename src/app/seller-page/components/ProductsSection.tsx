"use client";

import RelatedProductCard from "@/app/customer-reviews/components/RelatedProductCard";
import { ALL_PRODUCTS } from "../data/products";

export default function ProductsSection() {
  return (
    <section className="py-4">
      <div className="mb-4">
        <h2 className="text-lg sm:text-xl font-bold mb-3">Products</h2>
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3">
          {[
            { name: "Category", options: ["All"] },
            { name: "Sort by", options: ["Popular"] },
            { name: "Price", options: ["High to low"] },
            { name: "Ratings", options: ["4 Star"] },
          ].map((filter) => (
            <div key={filter.name} className="relative flex items-center gap-2 min-w-0">
              <label htmlFor={`products-${filter.name.replace(/\s/g, "-")}`} className="text-sm font-medium text-[#131313] shrink-0">
                {filter.name}
              </label>
              <div className="relative flex-1 min-w-0">
                <select
                  id={`products-${filter.name.replace(/\s/g, "-")}`}
                  className="w-full rounded-lg bg-white border border-gray-200 text-[#131313] text-sm font-medium pl-3 pr-8 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer min-w-0"
                >
                  {filter.options.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
                <span className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 min-w-0">
        {ALL_PRODUCTS.map((product) => (
          <RelatedProductCard key={product.id} id={product.id} name={product.name} price={product.price} originalPrice={product.originalPrice || 0  } image={product.image} badges={product.badges} hasVideo={product.hasVideo} sponsored={product.sponsored} />
        ))}
      </div>
      <div className=" flex justify-center items-center gap-2 w-full mt-6 mx-auto text-sm font-medium text-[#1E40AF] hover:text-[#1E40AF]/80">See more<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 9l6 6 6-6" />
      </svg> </div>
    </section>
  );
}
