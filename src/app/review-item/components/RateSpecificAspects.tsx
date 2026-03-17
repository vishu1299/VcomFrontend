"use client";

const STAR_COLOR_FILLED = "#F5B700";
const STAR_COLOR_EMPTY = "#ADADAD";

const ASPECTS = [
  { id: "quality", label: "Product Quality", defaultRating: 5 },
  { id: "shipping", label: "Shipping Experience", defaultRating: 4 },
  { id: "accuracy", label: "Item Accuracy (vs. Listing)", defaultRating: 4 },
  { id: "responsiveness", label: "Seller Responsiveness (if contacted)", defaultRating: 3 },
  { id: "value", label: "Value for Money", defaultRating: 4 },
  { id: "livestream", label: "Livestream Experience (if applicable)", defaultRating: 3 },
];

function StarSmallIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={filled ? STAR_COLOR_FILLED : "none"} stroke={filled ? STAR_COLOR_FILLED : STAR_COLOR_EMPTY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

type RateSpecificAspectsProps = {
  ratings: Record<string, number>;
  onRatingChange: (aspectId: string, value: number) => void;
};

export default function RateSpecificAspects({ ratings, onRatingChange }: RateSpecificAspectsProps) {
  return (
    <section className="mb-8">
      <h2 className="text-base font-bold text-[#131313]">
        Rate Specific Aspects <span className="text-sm font-normal text-gray-500">(Optional)</span>
      </h2>
      <p className="text-sm text-gray-500 mt-0.5 mb-4">Tell us more about what worked (or didn&apos;t)</p>
      <div className="space-y-4 w-[60%]">
        {ASPECTS.map((aspect) => {
          const value = ratings[aspect.id] ?? aspect.defaultRating;
          return (
            <div key={aspect.id} className="flex items-center justify-between gap-4 flex-wrap border border-gray-200 rounded-lg p-2">
              <span className="text-sm text-[#131313]">{aspect.label}</span>
              <div className="flex items-center gap-0.5" role="group" aria-label={`Rate ${aspect.label}`}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => onRatingChange(aspect.id, star)}
                    className="p-0.5 rounded focus:outline-none focus:ring-2 focus:ring-[#3581EA] focus:ring-offset-1"
                    aria-label={`${star} star${star === 1 ? "" : "s"}`}
                  >
                    <StarSmallIcon filled={star <= value} />
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
