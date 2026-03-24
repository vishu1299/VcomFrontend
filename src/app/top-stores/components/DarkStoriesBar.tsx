'use client';

type DarkStoriesBarProps = {
  className?: string;
};

export default function DarkStoriesBar({ className = '' }: DarkStoriesBarProps) {
  return (
    <div
      className={`px-4 sm:px-6 lg:px-1 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2 ${className}`}
    >
      <div className="flex items-center gap-2 sm:gap-3">
        <span
          className="w-2 h-2 sm:w-6 sm:h-6 rounded-full flex items-center justify-center shrink-0"
          aria-hidden
        >
          <img src="./images/awardIcon.png" alt="awardIcon" />
        </span>
        <span className="text-[16px] sm:text-[18px] font-semibold">
          Top Stories
        </span>
      </div>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
        <div className="relative min-w-0 sm:min-w-[200px]">
          <input
            type="text"
            placeholder="Search Store"
            className="w-full h-10 pl-4 pr-10 rounded-lg bg-white text-[14px] text-white placeholder:text-[#9ca3af] focus:outline-none focus:ring-1 focus:ring-[#eab308]"
          />
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </div>
        <div className="relative min-w-0 sm:min-w-[180px] flex items-center gap-2">
          <span className="text-[14px] w-[80px]">Sort By</span>
          <select
            className="w-full h-10 pl-4 pr-10 appearance-none cursor-pointer bg-white rounded-lg text-[14px] focus:outline-none focus:ring-1 focus:ring-[#eab308]"
            defaultValue="most-products-liked"
          >
            <option value="most-products-liked">Most Products Liked</option>
          </select>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </div>
  );
}
