'use client';

import StoriesHeader from './StoriesHeader';
import StoreCard from './StoreCard';
import { TOP_STORES } from '../data/stores';

export default function TopStoriesSection() {
  return (
    <section className="bg-white py-6 sm:py-8 rounded-2xl" aria-labelledby="top-stories-heading">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div
          id="top-stories-heading"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6"
        >
          {TOP_STORES.map((store) => (
            <StoreCard key={store.id} {...store} />
          ))}
        </div>
      </div>
    </section>
  );
}
