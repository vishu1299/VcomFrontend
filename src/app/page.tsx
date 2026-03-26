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
    <main className="min-h-screen bg-[#f5f5f5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10 flex flex-col gap-8 sm:gap-10 lg:gap-12 pt-4 sm:pt-6 pb-12 sm:pb-16">
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
