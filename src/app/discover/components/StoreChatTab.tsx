'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Send, Smile } from 'lucide-react';
import { STORE_CHAT_MESSAGES } from '../data/chat';

export default function StoreChatTab() {
  const [comment, setComment] = useState('');

  return (
    <div className="flex flex-col h-full min-h-[320px] bg-white">
      {/* Chat messages panel - separated from tab above and input below */}
      <div className="flex-1 overflow-y-auto p-4 pb-6 space-y-4 scrollbar-hide">
        {STORE_CHAT_MESSAGES.map((msg) => (
          <div key={msg.id} className="flex gap-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 bg-[var(--color-border)]">
              <Image src={msg.avatar} alt={msg.username} fill className="object-cover" sizes="32px" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-design-14 text-[var(--color-black)]">
                <span className="font-medium">{msg.username}:</span>{' '}
                <span className="text-[var(--color-muted)]">{msg.text}</span>
              </p>
              <p className="text-design-12 text-[var(--color-muted-alt-2)] mt-0.5">{msg.time}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Message input box - separate panel with margin */}
      <div className="px-4 pt-2 pb-4 mt-4">
        <div className="flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-white p-3">
          <button
            type="button"
            className="p-2 text-[var(--color-muted)] hover:text-[var(--color-black)] rounded"
            aria-label="Emoji"
          >
            <Smile className="w-5 h-5" />
          </button>
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your comment...."
            className="flex-1 min-h-[44px] px-4 rounded-lg border border-[var(--color-border-input)] text-design-14 text-[var(--color-black)] placeholder:text-[var(--color-muted-alt)] focus:outline-none focus:border-[var(--color-main-blue)] focus:ring-1 focus:ring-[var(--color-main-blue)]"
          />
          <button
            type="button"
            className="p-2.5 rounded-lg bg-[var(--color-main-blue)] text-white hover:opacity-95 transition"
            aria-label="Send"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
