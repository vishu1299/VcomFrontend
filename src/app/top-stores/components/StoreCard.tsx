'use client';

const ELITE_GRADIENT =
  'linear-gradient(135deg, #D4AF37 0%, #FFECAF 45%, #E9CE73 100%)';
const ELITE_TEXT = '#767676';
const TOP_STORE_BG = '#1E40AF';

function isEliteBadge(label: string) {
  return /elite/i.test(label);
}

function isTopStoreBadge(label: string) {
  return label.trim().toUpperCase() === 'TOP STORE';
}

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
  const nonLiveBadges = badges.filter((b) => b.label !== 'LIVE NOW');

  return (
    <article
      className="flex h-full w-full flex-col items-center text-center rounded-xl border border-[#D2D2D2] p-5 transition hover:bg-gray-50/80"
      style={{ fontFamily: 'var(--font-poppins)' }}
    >
      <div className="relative mb-3 h-16 w-16 shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24">
        <img
          src={avatar}
          alt={name}
          className="w-full h-full rounded-full object-cover border-2 border-[#e5e7eb]"
        />
        {badges.some((b) => b.label === 'LIVE NOW') && (
          <div className="absolute -top-4 right-0 sm:left-4 sm:right-auto">
            {badges
              .filter((b) => b.label === 'LIVE NOW')
              .map((b, i) => (
                <span
                  key={i}
                  className="inline-block px-1.5 py-0.5 text-[8px] font-semibold text-white uppercase rounded whitespace-nowrap sm:text-[10px]"
                  style={{ backgroundColor: b.bg }}
                >
                  &#x2022; {b.label}
                </span>
              ))}
          </div>
        )}
      </div>
      {/* Grows so name + rating align across cards in the same row */}
      <div className="mb-2 flex min-h-0 w-full flex-1 flex-col items-center justify-start gap-1 sm:flex-row sm:flex-wrap sm:content-start sm:items-start sm:justify-center">
        {nonLiveBadges.map((b, i) => {
          const elite = isEliteBadge(b.label);
          const topStore = isTopStoreBadge(b.label);
          return (
            <span
              key={i}
              className={`inline-block rounded px-1.5 py-0.5 text-[9px] font-semibold uppercase sm:text-[10px] ${
                elite ? '' : 'text-white'
              }`}
              style={
                elite
                  ? {
                      background: ELITE_GRADIENT,
                      color: ELITE_TEXT,
                    }
                  : topStore
                    ? { backgroundColor: TOP_STORE_BG, color: '#ffffff' }
                    : { backgroundColor: b.bg, color: '#ffffff' }
              }
            >
              {b.label}
            </span>
          );
        })}
      </div>
      <h3 className="mb-1 shrink-0 line-clamp-2 text-[10px] font-semibold leading-tight text-[#131313] sm:text-[14px]">
        {name}
      </h3>

      {/* Mobile: one row star + rating + count; very small screens: star+rating then count */}
      <div className="shrink-0 text-[12px] text-[#131313] sm:text-[14px]">
        <div className="hidden max-[360px]:flex flex-col items-center gap-0.5">
          <div className="flex items-center justify-center gap-1">
            <span className="text-[#eab308]">★</span>
            <span>{rating}</span>
          </div>
          <span>({reviewCount} reviews)</span>
        </div>
        <div className="flex max-[360px]:hidden flex-row flex-wrap items-center justify-center gap-1 sm:flex-nowrap">
          <span className="text-[#eab308]">★</span>
          <span>{rating}</span>
          <span>({reviewCount} reviews)</span>
        </div>
      </div>
    </article>
  );
}
