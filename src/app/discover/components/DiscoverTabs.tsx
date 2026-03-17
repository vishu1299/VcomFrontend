'use client';

export type DiscoverTabType = 'store-chat' | 'faq' | 'products';

type DiscoverTabsProps = {
  activeTab: DiscoverTabType;
  onTabChange: (tab: DiscoverTabType) => void;
};

const TABS: { id: DiscoverTabType; label: string }[] = [
  { id: 'store-chat', label: 'Store Chat' },
  { id: 'faq', label: 'FAQ' },
  { id: 'products', label: 'Products' },
];

export default function DiscoverTabs({ activeTab, onTabChange }: DiscoverTabsProps) {
  return (
    <div className="flex items-center justify-between gap-4 p-4 mb-2">
      {/* Tab bar: light gray rounded container; active = pill, inactive = text only */}
      <div className="flex items-center gap-3 rounded-xl bg-[#F5F5F5]  min-h-[38px]">
        {TABS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            onClick={() => onTabChange(id)}
            className={`text-design-14 font-medium transition shrink-0 ${
              activeTab === id
                ? 'rounded-xl bg-[#2C4697] text-white px-5 py-2.5'
                : 'bg-transparent text-[#6B6B6B] hover:text-[var(--color-black)] px-3 py-2.5'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      {/* REPORT: standalone button */}
      <button
        type="button"
        className="rounded-xl bg-[#F5F5F5] text-design-14 font-medium text-[#6B6B6B] hover:text-[var(--color-black)] px-4 py-2.5 shrink-0"
      >
        REPORT
      </button>
    </div>
  );
}
