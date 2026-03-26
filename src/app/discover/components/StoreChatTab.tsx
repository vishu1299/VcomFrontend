'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Smile } from 'lucide-react';
import { STORE_CHAT_MESSAGES, isChatDivider } from '../data/chat';

export default function StoreChatTab() {
  const [comment, setComment] = useState('');

  return (
    <div className="flex flex-col h-full min-h-0 bg-white">
      <div
        className="flex-1 overflow-y-auto min-h-0 p-4 pb-2 space-y-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {STORE_CHAT_MESSAGES.map((row, idx) => {
          if (isChatDivider(row)) {
            return (
              <div key={`d-${row.label}-${idx}`} className="flex items-center gap-3 py-2">
                <div className="h-px flex-1 bg-[var(--color-border)]" />
                <span className="text-design-12 text-[var(--color-muted-alt-2)] whitespace-nowrap">
                  {row.label}
                </span>
                <div className="h-px flex-1 bg-[var(--color-border)]" />
              </div>
            );
          }
          return (
            <div key={row.id} className="flex gap-3">
              <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 bg-[var(--color-border)]">
                <Image
                  src={row.avatar}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="36px"
                />
              </div>
              <div className="flex-1 min-w-0 flex gap-2 justify-between items-start">
                <p className="text-design-14 text-[var(--color-black)] leading-snug">
                  <span className="font-medium">{row.username}</span>{' '}
                  <span className="text-[var(--color-muted)]">{row.text}</span>
                </p>
                <span className="text-design-12 text-[var(--color-muted-alt-2)] shrink-0 whitespace-nowrap">
                  {row.time}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="px-4 pt-2 pb-4 mt-auto shrink-0">
        <div className="relative w-full">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your comment...."
            className="w-full min-h-[48px] pl-4 pr-12 rounded-xl border border-[var(--color-border)] bg-white text-design-14 text-[var(--color-black)] placeholder:text-[var(--color-muted-alt)] focus:outline-none focus:border-[var(--color-main-blue)] focus:ring-1 focus:ring-[var(--color-main-blue)]"
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-[var(--color-muted)] hover:text-[var(--color-black)] rounded"
            aria-label="Emoji"
          >
            <Smile className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
