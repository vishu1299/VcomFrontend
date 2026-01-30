'use client';

import { LayoutGrid } from 'lucide-react';
import CategoryCard from './CategoryCard';
import { CATEGORIES } from '../data/categories';

export default function ProductCategoriesSection() {
  return (
    <section className="mb-8 sm:mb-10 lg:mb-12" aria-label="Product categories">
      <h2 className="flex items-center gap-2 text-design-20 sm:text-design-24 font-bold text-[var(--color-black)] mb-6 sm:mb-8">
        <LayoutGrid
          className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600 shrink-0"
          aria-hidden
        />
        Product categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
        {CATEGORIES.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </div>
    </section>
  );
}
