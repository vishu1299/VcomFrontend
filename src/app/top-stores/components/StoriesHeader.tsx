'use client';

type StoriesHeaderProps = {
  iconType?: 'yellow' | 'purple';
  title: string;
  subtitle?: string;
};

export default function StoriesHeader({
  iconType = 'yellow',
  title,
  subtitle,
}: StoriesHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 my-4 sm:my-6">
      <div className="flex items-center gap-2 sm:gap-3">
        <span
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0"
          style={{
            backgroundColor: iconType === 'yellow' ? '#eab308' : '#7c3aed',
          }}
          aria-hidden
        >
          {iconType === 'yellow' ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden>
              <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden>
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          )}
        </span>
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
