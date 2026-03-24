'use client';

import Link from 'next/link';
import DarkStoriesBar from './components/DarkStoriesBar';
import TopStoriesSection from './components/TopStoriesSection';
import RecommendedStoriesSection from './components/RecommendedStoriesSection';
import HeroBanner from '../top-products/components/HeroBanner';
import StoriesHeader from './components/StoriesHeader';

export default function TopStoriesPage() {
    return (
        <main className="min-h-screen bg-[#f3f7fa]">
            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-4 sm:py-6">
                <HeroBanner compactSpacing />
                <DarkStoriesBar className="!pt-2 sm:!pt-3" />
                <TopStoriesSection />
                <StoriesHeader
                    title="Stores That Match Your Interests"
                    subtitle="Recommended for you"
                />
                <RecommendedStoriesSection />
            </div>
        </main>
    );
}
