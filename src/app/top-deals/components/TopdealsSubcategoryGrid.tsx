'use client';

import Image from 'next/image';
import type { CategorySubcategory } from '../data/products';

type TopdealsSubcategoryGridProps = {
  categoryTitle: string;
  subcategories: CategorySubcategory[];
  onSubcategoryClick: (sub: CategorySubcategory) => void;
};

export default function TopdealsSubcategoryGrid({
  categoryTitle,
  subcategories,
  onSubcategoryClick,
}: TopdealsSubcategoryGridProps) {
  return (
    <section className="mb-6 sm:mb-5" aria-label={`${categoryTitle} subcategories`}>
      <div className="rounded-xl border border-[#e5e7eb] bg-white p-4 shadow-sm sm:p-5 lg:p-6">
        <h2 className="mb-3 text-[16px] font-bold leading-tight text-[#131313] sm:mb-4 sm:text-[20px] lg:text-[24px]">
          {categoryTitle}
        </h2>
        {/* Mobile: 2 columns, tighter spacing; tablet+: 2; desktop: 3 */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {subcategories.map((sub) => (
            <div
              key={sub.id}
              className="flex flex-col overflow-hidden rounded-lg border border-[#e5e7eb] bg-white shadow-sm sm:rounded-xl"
            >
              <div
                className="relative flex aspect-[5/4] items-center justify-center bg-[#EFEFEF] sm:aspect-[4/3]"
                style={{ backgroundColor: '#EFEFEF' }}
              >
                <Image
                  src={sub.image}
                  alt=""
                  width={160}
                  height={160}
                  className="max-h-[72%] max-w-[72%] object-contain sm:max-h-[85%] sm:max-w-[85%]"
                />
              </div>
              <button
                type="button"
                onClick={() => onSubcategoryClick(sub)}
                className="w-full border-t border-[#e5e7eb] bg-white px-1.5 py-2 text-center text-[10px] font-semibold leading-tight text-[#131313] transition hover:bg-gray-50 sm:px-4 sm:py-3 sm:text-sm"
              >
                {sub.label}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
