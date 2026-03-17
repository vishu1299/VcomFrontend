'use client';

import type { SubcategoryItem } from '../data/categories';

type CategoryGridSectionProps = {
  title: string;
  subcategories: SubcategoryItem[];
  onSubcategoryClick: (subcategoryId: string, label: string) => void;
};

export default function CategoryGridSection({
  title,
  subcategories,
  onSubcategoryClick,
}: CategoryGridSectionProps) {
  return (
    <section className="mb-8 sm:mb-10" aria-labelledby="category-grid-title">
      <h2
        id="category-grid-title"
        className="text-2xl sm:text-3xl font-bold text-[#131313] mb-5 sm:mb-6"
      >
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
        {subcategories.map((sub) => (
          <button
            key={sub.id}
            type="button"
            onClick={() => onSubcategoryClick(sub.id, sub.label)}
            className="rounded-xl sm:rounded-2xl border border-[#e5e7eb] bg-white shadow-md hover:shadow-lg transition overflow-hidden flex flex-col text-left"
          >
            <div className="aspect-square bg-gray-50 sm:bg-gray-100 p-4 flex items-center justify-center">
              <img
                src={sub.image}
                alt=""
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1596462502278-fbfbdc06e95c?w=400&h=400&fit=crop';
                }}
              />
            </div>
            <div className="p-3 sm:p-4">
              <span className="text-sm sm:text-base font-medium text-[#131313]">
                {sub.label}
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
