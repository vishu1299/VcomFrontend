'use client';

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
        <div className="relative bg-white flex justify-between items-start gap-1 p-1.5 sm:p-2">
          <span className="bg-[#facc15] text-[#131313] text-[9px] sm:text-[10px] md:text-[11px] font-semibold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-r-md shadow-sm max-w-[45%] sm:max-w-[55%] truncate">
            {scheduledDate}
          </span>
          <span className="bg-gray-500/80 text-white text-[9px] sm:text-[10px] md:text-[11px] font-medium px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md shrink-0 whitespace-nowrap">
            {viewCount ?? 'Set Reminder'}
          </span>
        </div>
        <img
          src={image}
          alt={title}
          className=" w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="w-10 h-10 flex items-center justify-center drop-shadow-md">
            <svg width="40" height="40" viewBox="0 0 24 24" className="ml-0.5">
              {/* White circle with triangular cutout – triangle shows image behind */}
              <path
                fillRule="evenodd"
                fill="white"
                d="M12 12m-12 0a12 12 0 1 1 24 0a12 12 0 1 1-24 0 M8 6v12l8-6z"
              />
              <circle cx="12" cy="12" r="12" fill="none" stroke="#e5e7eb" strokeWidth="2" />
            </svg>
          </span>
        </div>
      </div>

      <div className="p-2 sm:p-3 md:p-4 flex flex-col flex-1 min-w-0">
        <h3 className="text-[12px] sm:text-[14px] md:text-[16px] font-bold text-[#131313] line-clamp-1 mb-2 sm:mb-3">
          {title}
        </h3>
        <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-2 mt-auto">
          <button
            type="button"
            className="flex border border-[#e5e7eb] px-2 py-1 rounded-lg items-center justify-center gap-1 sm:gap-1.5 text-[11px] sm:text-[13px] md:text-[14px] font-medium text-[#131313] hover:bg-gray-50 hover:underline min-h-[36px] sm:min-h-[40px] transition"
          >
            Product
            <img src="/images/arrowright.png" alt="Product" className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
          </button>
          <button
            type="button"
            className="px-2 py-2 sm:px-3 sm:py-2 rounded-lg bg-[#dc2626] text-white text-[10px] font-bold flex items-center justify-center gap-1.5 sm:gap-2 hover:opacity-95 transition"
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
