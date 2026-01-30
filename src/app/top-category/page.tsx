'use client';

import Link from 'next/link';
import CategoryBanner from './components/CategoryBanner';
import ProductCategoriesSection from './components/ProductCategoriesSection';
import RecommendedProductsSection from './components/RecommendedProductsSection';

export default function TopCategoryPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-4 sm:py-6">
        <nav className="flex items-center gap-4 mb-4 sm:mb-6 text-design-14 sm:text-design-16 text-[var(--color-black)]">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="text-[var(--color-muted-alt-2)]">/</span>
          <Link href="/top-category" className="hover:underline font-medium">
            Category
          </Link>
        </nav>

        <CategoryBanner />
        <ProductCategoriesSection />
        <RecommendedProductsSection />
      </div>
    </main>
  );
}
