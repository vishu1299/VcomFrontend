'use client';

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
  title,
  price,
  originalPrice,
  image,
  badges,
}: LiveNowProductCardProps) {
  return (
    <article className="bg-white rounded-xl sm:rounded-2xl border border-[#e5e7eb] overflow-hidden shadow-sm hover:shadow transition flex flex-col">
      <div className="relative aspect-square bg-[#f3f4f6]">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 pointer-events-none">
          <span className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center border border-[#e5e7eb] shadow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[#131313] ml-0.5">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>
        <div className="absolute top-2 left-2 right-2 flex justify-between items-start gap-1 flex-wrap">
          {badges.includes('LIVE NOW') && (
            <span className="bg-[#dc2626] text-white text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded uppercase">
              LIVE NOW
            </span>
          )}
          {badges.includes('FLASH SALE') && (
            <span className="bg-[#f59e0b] text-white text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded uppercase">
              FLASH SALE
            </span>
          )}
          {badges.includes('NEW') && (
            <span className="bg-[#1e40af] text-white text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded uppercase ml-auto">
              NEW
            </span>
          )}
        </div>
      </div>

      <div className="p-3 sm:p-4 flex flex-col flex-1">
        <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#131313] line-clamp-1 mb-2">
          {title}
        </h3>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[18px] sm:text-[20px] font-bold text-[#131313]">
            ${price.toFixed(2)}
          </span>
          <span className="text-[14px] text-[#767676] line-through">
            ${originalPrice.toFixed(2)}
          </span>
        </div>
        <button
          type="button"
          className="w-full min-h-[44px] rounded-md bg-[#dc2626] text-white text-[14px] font-bold flex items-center justify-center gap-2 hover:opacity-95 transition"
        >
          Join Live
          <img src="/images/livearrow.png" alt="Play" className="w-5 h-5" />
        </button>
      </div>
    </article>
  );
}
