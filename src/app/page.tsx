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
    <main className="min-h-screen bg-[#F6F9FC]">
      <HeroCarousel />
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:px-10 flex flex-col gap-8 sm:gap-10 lg:gap-12 pt-4 sm:pt-6 pb-12 sm:pb-16">
        <AdCardsSection />
        <TopStoresSection />
        <RelatedItemsSection />
      </div>
      <LiveNowSection />
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:px-10 flex flex-col gap-8 sm:gap-10 lg:gap-12 pt-4 sm:pt-6 pb-12 sm:pb-16">
        <TopProductsSection />
        <ShopByCategorySection />
        <ExclusiveSection />
        <PromoBannersSection />
        <ServiceGuaranteesSection />
      </div>
      <CustomerReviewsSection />
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:px-10 flex flex-col gap-8 sm:gap-10 lg:gap-12 pt-4 sm:pt-6 pb-12 sm:pb-16">
        <BlogInsightsSection />
      </div>
    </main>
  );
}
