'use client';

import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { DISCOVER_FAQS } from '../data/faq';
import type { FAQItem } from '../data/faq';

function FAQAccordionItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-[var(--color-border)] last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-4 text-left"
      >
        <span className="text-design-14 text-[var(--color-muted)] font-medium flex-1">{item.question}</span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white transition ${
            isOpen ? 'bg-[var(--color-main-blue)]' : 'bg-[var(--color-main-blue)]'
          }`}
        >
          {isOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      {isOpen && (
        <div className="pb-4 pr-10 relative">
          <p className="text-design-14 text-[var(--color-black)] leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQTab() {
  const [openId, setOpenId] = useState<string | null>(DISCOVER_FAQS[0]?.id ?? null);

  return (
    <div className="bg-white rounded-b-lg overflow-hidden">
      <div className="p-4 sm:p-6">
        {DISCOVER_FAQS.map((item) => (
          <FAQAccordionItem
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onToggle={() => setOpenId(openId === item.id ? null : item.id)}
          />
        ))}
      </div>
    </div>
  );
}
