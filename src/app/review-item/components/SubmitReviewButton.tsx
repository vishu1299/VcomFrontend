type SubmitReviewButtonProps = {
  onSubmit: () => void;
};

export default function SubmitReviewButton({ onSubmit }: SubmitReviewButtonProps) {
  return (
    <div className="flex justify-end">
      <button
        type="button"
        onClick={onSubmit}
        className="px-6 py-3 rounded-lg text-base font-semibold  transition hover:opacity-95"
        style={{ backgroundColor: "#F5B700" }}
      >
        Submit Review
      </button>
    </div>
  );
}
