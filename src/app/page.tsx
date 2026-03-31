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
      <div className="mt-4 flex flex-col gap-6 pb-10 sm:mt-6 sm:gap-8 sm:pb-12">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 px-4 sm:gap-8 sm:px-6 lg:px-8 xl:px-10">
          <AdCardsSection />
          <TopStoresSection />
          <RelatedItemsSection />
        </div>

        <LiveNowSection />

        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 px-4 sm:gap-8 sm:px-6 lg:px-8 xl:px-10">
          <TopProductsSection />
          <ShopByCategorySection />
          <ExclusiveSection />
          <PromoBannersSection />
          <ServiceGuaranteesSection />
        </div>

        <CustomerReviewsSection />

        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 px-4 sm:gap-8 sm:px-6 lg:px-8 xl:px-10">
          <BlogInsightsSection />
        </div>
      </div>
    </main>
  );
}
