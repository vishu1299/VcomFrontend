'use client';

export type ProductCardProps = {
  id: string | number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badges?: string[];
  hasVideo?: boolean;
  sponsored?: boolean;
};

function HeartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#131313]">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-[#374151] ml-0.5">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function CompareIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <polyline points="16 3 21 3 21 8" />
      <line x1="4" y1="20" x2="21" y2="3" />
      <polyline points="21 16 21 21 16 21" />
      <line x1="15" y1="15" x2="21" y2="21" />
      <line x1="4" y1="4" x2="9" y2="9" />
    </svg>
  );
}

export default function ProductCard({
  name,
  price,
  originalPrice,
  image,
  badges = [],
  hasVideo = false,
  sponsored = false,
}: ProductCardProps) {
  const discountBadge = badges.find((b) => b.includes('% OFF'));
  const newBadge = badges.includes('NEW') || badges.includes('NEW ARRIVAL');

  return (
    <article
      className="w-full rounded-[10px] border border-[#E5E7EB] bg-white shadow-sm hover:shadow transition flex flex-col"
      style={{ fontFamily: 'var(--font-poppins)' }}
    >
      <div className="relative aspect-square bg-white rounded-t-[10px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {discountBadge && (
          <span className="absolute top-2 left-2 bg-[#FACC15] px-2 py-[2px] rounded-[4px] text-[10px] font-semibold text-[#131313]">
            {discountBadge}
          </span>
        )}
        {sponsored && (
          <span
            className="absolute bottom-3 left-2 text-white text-[10px] font-semibold px-3 py-[4px] rounded-md"
            style={{
              background: "linear-gradient(to right, #628AFF 0%, #4164C7 60%, #1E3A8A 100%)",
            }}
          >
            SPONSORED
          </span>
        )}

        <button
          type="button"
          className="absolute top-2 right-2 w-10 h-10 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center hover:bg-gray-50 transition"
          aria-label="Add to wishlist"
        >
          <HeartIcon />
        </button>

        {hasVideo && (
          <div className="absolute inset-0 flex items-center justify-center  pointer-events-none">
            <div className="w-12 h-12 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center">
              <PlayIcon />
            </div>
          </div>
        )}
      </div>

      <div className="px-3 pt-2 pb-3 flex flex-col flex-1">
        <p className="text-[14px] font-semibold text-[#131313] leading-snug line-clamp-2 min-h-[2.5rem]">
          {name}
        </p>


        <div className="flex flex-col md:flex-row items-center gap-6 ">
          <div className="flex items-center gap-2">
            <span className="text-[18px] font-bold text-[#131313] leading-none">

              ${typeof price === 'number' ? price.toFixed(2) : price}
            </span>
            {originalPrice != null && (
              <span className="text-[12px] text-[#9CA3AF] line-through leading-none">
                ${originalPrice}
              </span>
            )}
          </div>
          <button
            type="button"
            className="w-full text-[10px] md:text-[14px] md:w-35 h-10 rounded-lg border border-[#E5E7EB] bg-white gap-2 flex items-center justify-center hover:bg-gray-50 transition"
            aria-label="Add to cart"
          >
            <CartIcon /> ADD TO CART
          </button>
        </div>


      </div>
    </article>
  );
}
