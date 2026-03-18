"use client";

export type DealCardProps = {
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
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-4 h-4 text-gray-600"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-4 h-4"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

export default function DealCard({
  name,
  price,
  originalPrice,
  image,
  badges = [],
  hasVideo = false,
  sponsored = false,
}: DealCardProps) {
  const discountBadge = "";
  const newBadge = badges.includes("NEW") || badges.includes("NEW ARRIVAL");

  return (
    <article className="w-full rounded-xl border border-[#e5e7eb] bg-white shadow-sm hover:shadow transition flex flex-col">
      <div className="relative aspect-square bg-white rounded-t-xl overflow-hidden">
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {discountBadge && (
          <span className="absolute top-2 left-2 bg-[#facc15] text-gray-600 text-[10px] font-semibold px-2 py-1 rounded-r-md">
            {discountBadge}
          </span>
        )}
        {newBadge && !sponsored && (
          <span className="absolute bottom-3 left-2 bg-[#3b82f6] text-white text-[10px] font-semibold px-2 py-1 rounded-r-md">
            NEW
          </span>
        )}
        {sponsored && (
          <span
            className="absolute bottom-3 left-2 text-white text-[10px] font-medium px-2 py-1 rounded-md"
            style={{
              background:
                "linear-gradient(to right, #628AFF 0%, #4164C7 60%, #1E3A8A 100%)",
            }}
          >
            SPONSORED
          </span>
        )}

        <button
          type="button"
          className="absolute top-2 right-2 w-9 h-9 rounded-full bg-white border border-[#e5e7eb] flex items-center justify-center hover:bg-gray-50 transition"
          aria-label="Add to wishlist"
        >
          <HeartIcon />
        </button>

        {hasVideo && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-[#e5e7eb] drop-shadow-md">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="ml-0.5 shrink-0 text-gray-600"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </div>
        )}
      </div>

      <div className="px-3 pt-2 pb-3 flex flex-col flex-1">
        <p className="text-sm font-medium text-gray-600 line-clamp-1 mb-2">
          {name}
        </p>
        <div className="flex justify-between flex-col sm:flex-row items-start sm:items-center gap-2 mt-auto">
          <div className="flex items-center gap-2">
            <span className="text-[1rem] font-bold text-gray-600">
              ${typeof price === "number" ? price.toFixed(2) : price}
            </span>
            {originalPrice != null && (
              <span className="text-[1rem] text-gray-400 line-through">
                ${originalPrice}
              </span>
            )}
          </div>
          <button
            type="button"
            className="flex items-center border border-[#e5e7eb] gap-1.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg py-2 px-3 transition"
            aria-label="Add to cart"
          >
            <CartIcon /> <span className="text-[0.8rem]">ADD TO CART</span>
          </button>
        </div>
      </div>
    </article>
  );
}
