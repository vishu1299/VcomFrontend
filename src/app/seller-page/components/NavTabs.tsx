"use client";

export const TABS = [
  "Products",
  "Upcoming Live's",
  "Profile",
  "FAQ's",
] as const;

export type SellerTabId = (typeof TABS)[number];

type NavTabsProps = {
  activeTab: SellerTabId;
  onTabChange: (tab: SellerTabId) => void;
};

export default function NavTabs({ activeTab, onTabChange }: NavTabsProps) {
  return (
    <nav className="">
      <div className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide py-3">
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => onTabChange(tab)}
            className={`text-sm font-medium whitespace-nowrap transition rounded-lg px-4 py-2 ${
              activeTab === tab
                ? "bg-[#1E40AF] text-white"
                : "text-[#131313] hover:text-[#131313] bg-transparent"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </nav>
  );
}
