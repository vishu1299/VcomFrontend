'use client';

import { useState } from 'react';
import StreamPanel from './components/StreamPanel';
import DiscoverTabs, { type DiscoverTabType } from './components/DiscoverTabs';
import StoreChatTab from './components/StoreChatTab';
import FAQTab from './components/FAQTab';
import ProductsTab from './components/ProductsTab';

export default function DiscoverPage() {
  const [activeTab, setActiveTab] = useState<DiscoverTabType>('store-chat');

  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      {/* Breadcrumb */}
      <div className="w-full flex items-center  px-4 sm:px-6 md:px-8 lg:px-12  xl:px-16 2xl:px-[126px] h-10 bg-[#f5f5f5] gap-3 text-gray-400 text-design-14">
        <span className="hover:text-black cursor-pointer transition">Explore</span>
        <span className="text-gray-500">{">"}</span>
        <span className="text-black font-medium">Live Now</span>
      </div>
      <div className="mx-auto max-w-[1920px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[126px] pt-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_7fr] gap-4 lg:gap-6">
          {/* Left: stream / product showcase (40%) */}
          <div>
            <StreamPanel />
          </div>

          {/* Right: tabbed panel (60%) */}
          <div className="flex flex-col rounded-xl overflow-hidden border border-[var(--color-border)] bg-white shadow-sm">
            <DiscoverTabs activeTab={activeTab} onTabChange={setActiveTab} />
            <div className="flex-1 min-h-[320px]">
              {activeTab === 'store-chat' && <StoreChatTab />}
              {activeTab === 'faq' && <FAQTab />}
              {activeTab === 'products' && <ProductsTab />}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
