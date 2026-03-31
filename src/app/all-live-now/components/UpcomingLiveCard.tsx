'use client';

import { Play } from 'lucide-react';

export type UpcomingLiveCardProps = {
  id: string;
  title: string;
  image: string;
  scheduledDate: string;
  /** Top-right badge: "Set Reminder" or e.g. "3k Viewed" */
  viewCount?: string;
};

export default function UpcomingLiveCard({
  title,
  image,
  scheduledDate,
  viewCount,
}: UpcomingLiveCardProps) {
  return (
    <article className="bg-white rounded-xl sm:rounded-2xl border border-[#e5e7eb] overflow-hidden shadow-sm hover:shadow transition flex flex-col">
      <div className="relative aspect-square bg-[#f3f4f6]">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2 right-2 flex justify-between items-start gap-2 pointer-events-none z-[1]">
          <span className="bg-[#facc15] text-[#131313] text-[9px] sm:text-[10px] md:text-[11px] font-semibold px-2 py-1 rounded-md shadow-sm max-w-[55%] truncate">
            {scheduledDate}
          </span>
          <span className="bg-gray-800/90 text-white text-[9px] sm:text-[10px] md:text-[11px] font-medium px-2 py-1 rounded-md shrink-0 whitespace-nowrap">
            {viewCount ?? 'Set Reminder'}
          </span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/5">
          <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 flex items-center justify-center border border-[#e5e7eb] shadow-md">
            <Play
              className="w-5 h-5 sm:w-6 sm:h-6 text-[#131313] ml-0.5"
              fill="currentColor"
            />
          </span>
        </div>
      </div>

      <div className="p-2.5 sm:p-3 md:p-4 flex flex-col flex-1 min-w-0">
        <h3 className="text-[12px] sm:text-[14px] md:text-[16px] font-bold text-[#131313] line-clamp-2 mb-2 sm:mb-3">
          {title}
        </h3>
        <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-2 mt-auto">
          <button
            type="button"
            className="flex border border-[#e5e7eb] px-2 py-1.5 rounded-lg items-center justify-center gap-1 sm:gap-1.5 text-[11px] sm:text-[13px] md:text-[14px] font-medium text-[#131313] hover:bg-gray-50 min-h-[36px] sm:min-h-[40px] transition"
          >
            Product
            <img src="/images/arrowright.png" alt="" className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
          </button>
          <button
            type="button"
            className="px-2 py-2 sm:px-3 sm:py-2 rounded-lg bg-[#dc2626] text-white text-[10px] sm:text-xs font-bold flex items-center justify-center gap-1.5 sm:gap-2 hover:opacity-95 transition"
          >
            Set Reminder
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sm:w-[14px] sm:h-[14px] shrink-0">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
