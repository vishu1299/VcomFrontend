'use client';

import {
  HeroCarousel,
  AdCardsSection,
  TopStoresSection,
  RelatedItemsSection,
  LiveNowSection,
  TopProductsSection,
  ShopByCategorySection,
  ExclusiveSection,
  PromoBannersSection,
  ServiceGuaranteesSection,
  CustomerReviewsSection,
  BlogInsightsSection,
} from '@/components/home';

export default function HomePage() {
  return (
    <main className="bg-[#f5f5f5] min-h-screen">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-4 sm:py-6">
        <HeroCarousel />
        <AdCardsSection />
        <TopStoresSection />
        <RelatedItemsSection />
        <LiveNowSection />
        <TopProductsSection />
        <ShopByCategorySection />
        <ExclusiveSection />
        <PromoBannersSection />
        <ServiceGuaranteesSection />
        <CustomerReviewsSection />
        <BlogInsightsSection />
      </div>
    </main>
  );
}
