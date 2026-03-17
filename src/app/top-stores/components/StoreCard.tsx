'use client';

export type BadgeItem = {
  label: string;
  bg: string;
};

export type StoreCardProps = {
  id: string | number;
  name: string;
  avatar: string;
  rating: number;
  reviewCount: string;
  badges?: BadgeItem[];
};

export default function StoreCard({
  name,
  avatar,
  rating,
  reviewCount,
  badges = [],
}: StoreCardProps) {
  return (
    <article
      className="flex flex-col border border-[#e5e7eb] items-center text-center p-5 rounded-xl hover:bg-gray-50/80 transition"
      style={{ fontFamily: 'var(--font-poppins)' }}
    >
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 shrink-0 mb-3">
        <img
          src={avatar}
          alt={name}
          className="w-full h-full rounded-full object-cover border-2 border-[#e5e7eb]"
        />
        {badges.some((b) => b.label === 'LIVE NOW') && (
          <div className="absolute -top-1 left-4 flex flex-wrap gap-0.5 max-w-[90%]">
            {badges
              .filter((b) => b.label === 'LIVE NOW')
              .map((b, i) => (
                <span
                  key={i}
                  className="inline-block px-1.5 py-0.5 text-[9px] sm:text-[10px] font-semibold text-white uppercase rounded"
                  style={{ backgroundColor: b.bg }}
                >
                  &#x2022; { b.label}
                </span>
              ))}
          </div>
        )}
      </div>
      {badges.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-2">
          {badges.filter((b) => b.label !== 'LIVE NOW').map((b, i) => (
            <span
              key={i}
              className="inline-block px-1.5 py-0.5 text-[9px] sm:text-[10px] font-semibold text-white uppercase rounded"
              style={{ backgroundColor: b.bg }}
            >
              {b.label}
            </span>
          ))}
        </div>
      )}
      <h3 className="text-[10px] sm:text-[14px] font-semibold text-[#131313] leading-tight line-clamp-2 mb-1">
        {name}
      </h3>

      <p className="text-[12px] sm:text-[14px] text-[#131313] flex items-center justify-center gap-1 flex-wrap">
        <span className="text-[#eab308]">★</span>
        <span> {rating} ({reviewCount} reviews)</span>
      </p>
    </article>
  );
}
