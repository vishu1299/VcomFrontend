"use client";

import { useState } from "react";
import {
    HeaderBanner,
    SellerProfileCard,
    NavTabs,
    RecentlyAddedSection,
    ProductsSection,
    RecentlySearchedSection,
    UpcomingLive,
} from "./components";
import type { SellerTabId } from "./components";
import Profile from "./components/profile";
import Faq from "./components/Faq";

export default function SellerPage() {
    const [activeTab, setActiveTab] = useState<SellerTabId>("Products");

    const renderContent = () => {
        switch (activeTab) {
            case "Upcoming Live's":
                return <UpcomingLive />;
            case "Profile":
                return <Profile />;
            case "FAQ's":
                return <Faq />;
            default:
                return <>
                    <RecentlyAddedSection />
                    <ProductsSection />
                    <RecentlySearchedSection />
                </>;
        }
    }
    return (
        <main className="page-text-black bg-gray-100 ">
            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-4 sm:py-6">
                <HeaderBanner />
                <SellerProfileCard />
                <NavTabs activeTab={activeTab} onTabChange={setActiveTab} />
                {renderContent()}
            </div>
        </main>
    );
}
