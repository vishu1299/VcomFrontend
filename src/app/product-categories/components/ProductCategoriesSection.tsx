"use client";

import Image from "next/image";
import Link from "next/link";
import type { ProductCategory } from "../data/categories";

/** Purple 2x2 grid icon: squares + circle (bottom-left) */
function ProductCategoriesIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <rect x="2" y="2" width="8" height="8" rx="1" />
      <rect x="14" y="2" width="8" height="8" rx="1" />
      <circle cx="6" cy="16" r="3" />
      <rect x="14" y="14" width="8" height="8" rx="1" />
    </svg>
  );
}

type ProductCategoriesSectionProps = {
  categories: ProductCategory[];
};

function CategoryCard({ category }: { category: ProductCategory }) {
  return (
    <Link
      href={category.slug ? `/product-categories/${category.slug}` : "#"}
      className="group block h-full flex flex-col"
    >
      <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
        <div className="relative w-full aspect-square bg-[#EFEFEF] shrink-0">
          <Image
            src={category.image}
            alt={category.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            className="object-contain p-2 sm:p-4 group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-2 sm:p-3 text-center bg-[#EFEFEF] min-w-0 overflow-hidden min-h-[56px] sm:min-h-[60px] flex items-center justify-center">
          <span
            className="text-xs sm:text-sm font-medium text-gray-800 bg-white p-2 rounded-lg inline-block w-full text-center leading-tight"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical" as const,
              overflow: "hidden",
              lineHeight: 1.25,
              maxHeight: "3.5em",
            }}
          >
            {category.name}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function ProductCategoriesSection({
  categories,
}: ProductCategoriesSectionProps) {
  return (
    <section
      className="px-4 sm:px-6 py-5 sm:py-6 lg:py-8"
      aria-label="Product categories"
      style={{ fontFamily: "var(--font-poppins)" }}
    >
      {/* Section title: purple grid icon + bold black text */}
      <div className="flex items-center gap-2 mb-5 sm:mb-6 lg:mb-8">
        <ProductCategoriesIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#7c3aed] shrink-0" />
        <h2 className="font-bold text-black text-[17px] sm:text-[18px] lg:text-[20px]">
          Product Categories
        </h2>
      </div>

      {/* Grid: 2 cols mobile, 3 tablet, 5 desktop; 5+5+2 layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
