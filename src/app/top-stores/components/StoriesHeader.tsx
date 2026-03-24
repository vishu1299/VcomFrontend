'use client';

type StoriesHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function StoriesHeader({ title, subtitle }: StoriesHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 my-4 sm:my-6">
      <div className="flex items-center gap-2 sm:gap-3">
        <img
          src="/store.svg"
          alt=""
          width={41}
          height={41}
          className="h-8 w-8 shrink-0 object-contain sm:h-9 sm:w-9"
          aria-hidden
        />
        <div>
          <h2 className="text-[18px] sm:text-[20px] font-semibold text-[#131313]">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[14px] text-[#767676] mt-0.5">{subtitle}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
        <div className="relative min-w-0 sm:min-w-[200px]">
          <input
            type="text"
            placeholder="Search Store"
            className="w-full h-10 pl-4 pr-10 rounded-lg border border-[#e5e7eb] bg-white text-[14px] text-[#131313] placeholder:text-[#767676] focus:outline-none focus:ring-1 focus:ring-[#1e3a8a]"
          />
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#767676] pointer-events-none"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </div>
        <div className="relative min-w-0 sm:min-w-[180px]">
          <select
            className="w-full h-10 pl-4 pr-10 appearance-none cursor-pointer bg-white border border-[#e5e7eb] rounded-lg text-[14px] text-[#131313] focus:outline-none focus:ring-1 focus:ring-[#1e3a8a]"
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
            className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#131313]"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </div>
  );
}
