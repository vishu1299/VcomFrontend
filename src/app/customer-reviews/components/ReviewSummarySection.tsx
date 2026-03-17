"use client";

const RATING_BARS = [
  { stars: 5, percent: 54 ,color: "#eab308"},
  { stars: 4, percent: 20, color: "#D8F500"},
  { stars: 3, percent: 10, color: "#F56E00"},
  { stars: 2, percent: 5, color: "#FC1313"},
  { stars: 1, percent: 12, color: "#D4D4D4"},
];

function StarIcon({ filled, half }: { filled?: boolean; half?: boolean }) {
  if (half) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" className="shrink-0">
        <defs>
          <linearGradient id="halfStar" x1="0" x2="1" y1="0" y2="0">
            <stop offset="50%" stopColor="#eab308" />
            <stop offset="50%" stopColor="#e5e7eb" />
          </linearGradient>
        </defs>
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          fill="url(#halfStar)"
          stroke="#eab308"
          strokeWidth="1.5"
        />
      </svg>
    );
  }
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill={filled ? "#eab308" : "none"}
      stroke="#eab308"
      strokeWidth="1.5"
      className="shrink-0"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function ReviewSummarySection() {
  return (
    <div className="flex flex-col lg:flex-row gap-12 mb-8">
      <div className="flex-1 max-w-[500px]">
        <h1 className="text-2xl font-bold text-[#131313] mb-4">Customer reviews</h1>
        <div className="flex flex-wrap items-baseline gap-2 mb-6">
          <div className="flex items-center gap-1">
            <StarIcon filled />
            <StarIcon filled />
            <StarIcon filled />
            <StarIcon filled />
            <StarIcon  />
          </div>
          <span className="text-xl font-bold text-[#131313]">4 out of 5</span>
        </div>
        <p className="text-sm text-black mb-6 font-bold">(10,653 Ratings)</p>
        <div className="space-y-3">
          {RATING_BARS.map(({ stars, percent, color }) => (
            <div key={stars} className="flex items-center gap-3">
              <span className="text-sm  w-14 shrink-0">
                {stars} star
              </span>
              <div className="flex-1 h-2.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full rounded-r-none transition-all"
                  style={{ width: `${percent}%`, backgroundColor: color }}
                />
              </div>
              <span className="text-sm text-black w-10 text-right shrink-0">
                {percent}%
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="shrink-0 flex flex-col items-center">
        <div className="relative w-48 h-56 sm:w-56">
          <img
            src="/images/customerReviews/product.png"
            alt="Iphone 17 Pro"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-sm text-center">Iphone 17 Pro</p>
      </div>
    </div>
  );
}
