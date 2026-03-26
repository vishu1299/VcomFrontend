"use client";

type RecommendSectionProps = {
  value: "yes" | "no" | null;
  onChange: (value: "yes" | "no") => void;
};

export default function RecommendSection({ value, onChange }: RecommendSectionProps) {
  return (
    <section className="mb-8">
      <p className="text-sm font-medium text-[#131313] mb-3">Would You Recommend This Product?</p>
      <div className="flex w-full flex-wrap gap-2">
        <label className="flex w-full cursor-pointer items-center justify-between gap-2 rounded-lg border border-gray-200 p-2 sm:w-[49%]">
          <span className="text-sm font-medium text-[#131313]">Yes</span>
          <input
            type="radio"
            name="recommend"
            value="yes"
            checked={value === "yes"}
            onChange={() => onChange("yes")}
            className="w-4 h-4 rounded-full border-2 border-gray-300 text-[#3581EA] focus:ring-[#3581EA] accent-[#3581EA]"
          />
        </label>
        <label className="flex w-full cursor-pointer items-center justify-between gap-2 rounded-lg border border-gray-200 p-2 sm:w-[49%]">
          <span className="text-sm font-medium text-[#131313]">No</span>
          <input
            type="radio"
            name="recommend"
            value="no"
            checked={value === "no"}
            onChange={() => onChange("no")}
            className="w-4 h-4 rounded-full border-2 border-gray-300 text-[#3581EA] focus:ring-[#3581EA] accent-[#3581EA]"
          />
        </label>
      </div>
    </section>
  );
}
