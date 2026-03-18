"use client";

const MIN_REVIEW_LENGTH = 30;

type ReviewFormSectionProps = {
  title: string;
  onTitleChange: (value: string) => void;
  reviewText: string;
  onReviewTextChange: (value: string) => void;
};

export default function ReviewFormSection({
  title,
  onTitleChange,
  reviewText,
  onReviewTextChange,
}: ReviewFormSectionProps) {
  return (
    <section className="mb-8 space-y-6">
      <div>
        <label htmlFor="review-title" className="block text-sm font-medium text-[#131313] mb-2">
          Title your review
        </label>
        <input
          type="text"
          id="review-title"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          placeholder="Enter Title"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm text-[#131313] placeholder:text-[#131313] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="review-text" className="block text-sm font-medium text-[#131313] mb-2">
          Write a review
        </label>
        <div className="relative">
          <textarea
            id="review-text"
            value={reviewText}
            onChange={(e) => onReviewTextChange(e.target.value)}
            placeholder="What should other shoppers know?"
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm text-[#131313] placeholder:text-[#131313] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none pr-32"
          />
          <span className="absolute bottom-3 right-3 text-xs text-[#131313]">
            Min: {MIN_REVIEW_LENGTH} Characters
          </span>
        </div>
      </div>
    </section>
  );
}
