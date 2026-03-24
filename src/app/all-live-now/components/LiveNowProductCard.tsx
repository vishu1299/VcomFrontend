'use client';

import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { getSampleVideoUrl } from '@/app/top-deals/data/products';

export type LiveNowProductCardProps = {
  id: string;
  storeName: string;
  storeLogo: string;
  rating: number;
  title: string;
  price: number;
  originalPrice: number;
  image: string;
  badges: ('LIVE NOW' | 'FLASH SALE' | 'NEW')[];
};

export default function LiveNowProductCard({
  id,
  title,
  price,
  originalPrice,
  image,
  badges,
}: LiveNowProductCardProps) {
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
        <img
          src={image}
          alt={title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <video
          ref={videoRef}
          src={videoUrl}
          className={`absolute inset-0 z-[1] w-full h-full object-cover transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`}
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
        <div className="absolute top-2 left-2 right-2 z-[2] flex justify-between items-start gap-1 flex-wrap">
          {badges.includes('LIVE NOW') && (
            <span
              className="text-white text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded uppercase"
              style={{ background: 'linear-gradient(90deg, #B90000 0%, #FF0000 100%)' }}
            >
              LIVE NOW
            </span>
          )}
          {badges.includes('FLASH SALE') && (
            <span className="bg-[#f59e0b] text-white text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded uppercase">
              FLASH SALE
            </span>
          )}
          {badges.includes('NEW') && (
            <span className="bg-[#3581EA] text-white text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded uppercase ml-auto">
              NEW
            </span>
          )}
        </div>
      </div>

      <div className="p-2 sm:p-2 flex flex-col flex-1">
        <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#131313] line-clamp-1 mb-2">
          {title}
        </h3>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[18px] sm:text-[20px] font-bold text-[#131313]">
            ${price.toFixed(2)}
          </span>
          <span className="text-[14px] text-[#767676] line-through">
            ${originalPrice.toFixed(2)}
          </span>
        </div>
        <button
          type="button"
          className="w-full min-h-[44px] rounded-md text-white text-[14px] font-bold flex items-center justify-center gap-2 hover:brightness-95 transition"
          style={{ background: 'linear-gradient(90deg, #B90000 0%, #FF0000 100%)' }}
        >
          Join Live
          <img src="/images/livearrow.png" alt="Play" className="w-5 h-5" />
        </button>
      </div>
    </article>
  );
}
