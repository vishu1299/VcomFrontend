'use client';

import StoriesHeader from './StoriesHeader';
import StoreCard from './StoreCard';
import { RECOMMENDED_STORES } from '../data/stores';

export default function RecommendedStoriesSection() {
  return (
    <section className="bg-white rounded-2xl py-6 sm:py-8 border-t border-[#e5e7eb]" aria-labelledby="recommended-stories-heading">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div
          id="recommended-stories-heading"
          className="grid grid-cols-2 items-stretch gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-5 lg:gap-6"
        >
          {RECOMMENDED_STORES.map((store) => (
            <StoreCard key={store.id} {...store} />
          ))}
        </div>
      </div>
    </section>
  );
}
