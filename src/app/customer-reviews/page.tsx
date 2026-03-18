import {
  ReviewSummarySection,
  PhotosCarousel,
  ReviewFilters,
  ReviewCard,
  RelatedProductsCarousel,
} from "./components";
import { MOCK_REVIEWS } from "./data/reviews";

export default function CustomerReviewPage() {
  return (
    <div className="page-text-black min-h-screen bg-[#f3f7fa]">
      <div className="mx-auto bg-white rounded-xl max-w-[1100px] px-4 sm:px-6 lg:px-8 py-8">
        <ReviewSummarySection />
        <PhotosCarousel />
        <ReviewFilters />

        <div className="bg-white">
          {MOCK_REVIEWS.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </div>

      </div>
      <div className="w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <RelatedProductsCarousel />
      </div>
    </div>
  );
}
