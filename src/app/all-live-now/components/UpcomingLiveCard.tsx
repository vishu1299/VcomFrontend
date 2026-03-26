'use client';

import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { getSampleVideoUrl } from '@/app/top-deals/data/products';

export type UpcomingLiveCardProps = {
  id: string;
  title: string;
  image: string;
  scheduledDate: string;
  /** Top-right badge: "Set Reminder" or e.g. "3k Viewed" */
  viewCount?: string;
};

export default function UpcomingLiveCard({
  id,
  title,
  image,
  scheduledDate,
  viewCount,
}: UpcomingLiveCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoUrl = getSampleVideoUrl(Number.parseInt(id.replace(/\D/g, ''), 10) || 0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isHovered) {
      video.play().catch(() => {});
      return;
    }
    video.pause();
  }, [isHovered]);

  return (
    <article className="bg-white rounded-xl sm:rounded-2xl border border-[#e5e7eb] overflow-hidden shadow-sm hover:shadow transition flex flex-col">
      <div
        className="relative aspect-square bg-[#f3f4f6]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative z-10 bg-white flex justify-between items-start gap-1 p-1.5 sm:p-2">
          <span className="bg-[#F5B700] text-[#131313] text-[9px] sm:text-[10px] md:text-[11px] font-semibold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md shadow-sm max-w-[45%] sm:max-w-[55%] truncate">
            {scheduledDate}
          </span>
          <span className="bg-[#B2B2B2] text-white text-[9px] sm:text-[10px] md:text-[11px] font-medium px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md shrink-0 whitespace-nowrap">
            3K Interested
          </span>
        </div>
        <img
          src={image}
          alt={title}
          className={`absolute inset-0 z-0 w-full h-full object-cover transition-opacity ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <video
          ref={videoRef}
          src={videoUrl}
          className={`absolute inset-0 z-[1] h-full w-full object-cover transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          muted
          loop
          playsInline
          preload="metadata"
        />
        {!isHovered && (
          <div className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center bg-black/5">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white shadow-md">
              <Play className="ml-0.5 h-5 w-5 fill-current text-[#131313]" />
            </div>
          </div>
        )}
      </div>

      <div className="p-2 sm:p-3 md:p-4 flex flex-col flex-1 min-w-0">
        <h3 className="text-[12px] sm:text-[14px] md:text-[16px] font-bold text-[#131313] line-clamp-1 mb-2 sm:mb-3">
          {title}
        </h3>
        <div className="mt-auto flex flex-row gap-1.5 sm:gap-2">
          <button
            type="button"
            className="flex w-1/2 min-w-0 border border-[#e5e7eb] px-2 py-1 rounded-lg items-center justify-center gap-1 sm:gap-1.5 text-[11px] sm:text-[13px] md:text-[14px] font-medium text-[#131313] hover:bg-gray-50 hover:underline min-h-[36px] sm:min-h-[40px] transition"
          >
            <span className="block min-w-0 max-w-[46px] truncate whitespace-nowrap sm:max-w-none">
              Product
            </span>
            <img src="/images/arrowright.png" alt="Product" className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
          </button>
          <button
            type="button"
            className="w-1/2 min-w-0 px-2 py-2 sm:px-3 sm:py-2 rounded-lg bg-gradient-to-r from-[#B90000] to-[#FF0000] text-white text-[10px] sm:text-[12px] md:text-[12px] font-bold flex items-center justify-center gap-1 sm:gap-2 hover:brightness-95 transition"
          >
            <span className="block min-w-0 max-w-[64px] truncate whitespace-nowrap sm:max-w-none">
              Set Reminder
            </span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
