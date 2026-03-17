'use client';

import ExclusiveHeroBanner from '../exclusive/components/ExclusiveHeroBanner';
import MensCategoryScroll from './components/MensCategoryScroll';
import GreatDealsSection from './components/GreatDealsSection';
import BiggestDealsSection from './components/BiggestDealsSection';
import RecommendedProductsSection from '../product-categories/components/RecommendedProductsSection';
import { MENS_CLOTHING_CATEGORIES } from './data/mens-categories';
import { GREAT_DEALS } from './data/great-deals';
import { BIGGEST_DEALS } from './data/biggest-deals';
import { MENS_RECOMMENDED_PRODUCTS } from './data/recommended-products';

export default function MensPage() {
  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: 'var(--font-poppins)' }}>
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-5 sm:py-6 lg:py-8">
        <ExclusiveHeroBanner />

        <div className="mt-6 sm:mt-8 lg:mt-10">
          <MensCategoryScroll categories={MENS_CLOTHING_CATEGORIES} />
        </div>

        <div className="mt-4 sm:mt-6">
          <GreatDealsSection deals={GREAT_DEALS} />
        </div>

        <div className="mt-4 sm:mt-6">
          <BiggestDealsSection deals={BIGGEST_DEALS} />
        </div>

        <div className="mt-4 sm:mt-6">
          <RecommendedProductsSection products={MENS_RECOMMENDED_PRODUCTS} />
        </div>
      </div>
    </main>
  );
}
