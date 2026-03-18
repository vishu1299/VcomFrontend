"use client";

import Image from "next/image";
import Link from "next/link";
import HorizontalScrollSection from "./HorizontalScrollSection";
import type { MensCategory } from "../data/mens-categories";

type MensCategoryScrollProps = {
  categories: MensCategory[];
};

function CategoryCard({ category }: { category: MensCategory }) {
  return (
    <Link
      href={category.slug ? `/category/${category.slug}` : "#"}
      className="group shrink-0 w-[140px] sm:w-[160px] md:w-[180px] flex flex-col"
    >
      <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col flex-1">
        <div className="relative w-full aspect-square bg-[#EFEFEF] shrink-0">
          <Image
            src={category.image}
            alt={category.name}
            fill
            sizes="180px"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-2 sm:p-3 text-center bg-[#EFEFEF] min-h-[52px] sm:min-h-[56px] flex items-center justify-center">
          <span className="text-xs sm:text-sm font-medium text-gray-800 line-clamp-2 w-full">
            {category.name}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function MensCategoryScroll({
  categories,
}: MensCategoryScrollProps) {
  return (
    <HorizontalScrollSection
      title="Men's Clothing"
      ariaLabel="Men's clothing categories"
    >
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </HorizontalScrollSection>
  );
}
