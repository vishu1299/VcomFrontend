'use client';

import ExclusiveHeroBanner from '../exclusive/components/ExclusiveHeroBanner';
import ProductCategoriesSection from './components/ProductCategoriesSection';
import RecommendedProductsSection from './components/RecommendedProductsSection';
import { PRODUCT_CATEGORIES } from './data/categories';
import { RECOMMENDED_PRODUCTS } from './data/recommended-products';

export default function ProductCategoriesPage() {
  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: 'var(--font-poppins)' }}>
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-5 sm:py-6 lg:py-8">
        <ExclusiveHeroBanner />
        <div className="mt-6 sm:mt-8 lg:mt-10">
          <ProductCategoriesSection categories={PRODUCT_CATEGORIES} />
        </div>
        <div className="mt-8 sm:mt-10 lg:mt-12">
          <RecommendedProductsSection products={RECOMMENDED_PRODUCTS} />
        </div>
      </div>
    </main>
  );
}
