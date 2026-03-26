"use client";

import Image from "next/image";

const MAX_TAGS = 3;

const TAGS: {
  id: string;
  label: string;
  iconSrc: string;
}[] = [
  { id: "fast", label: "Fast Delivery", iconSrc: "/review/1.svg" },
  { id: "packaged", label: "Well Packaged", iconSrc: "/review/3.svg" },
  { id: "exceeded", label: "Exceeded Expectations", iconSrc: "/review/2.svg" },
  { id: "helpful", label: "Helpful Seller", iconSrc: "/review/6.svg" },
  { id: "late", label: "Late Delivery", iconSrc: "/review/5.svg" },
  { id: "poor", label: "Poor Quality", iconSrc: "/review/2.svg" },
  { id: "wrong", label: "Wrong Item Sent", iconSrc: "/review/9.svg" },
  { id: "livestream", label: "Bought via Livestream", iconSrc: "/review/8.svg" },
  { id: "repeat", label: "Repeat Buyer", iconSrc: "/review/7.svg" },
  { id: "custom", label: "Add My Own", iconSrc: "/review/10.svg" },
];

type QuickExperienceTagsProps = {
  selectedIds: Set<string>;
  onToggle: (id: string) => void;
};

export default function QuickExperienceTags({
  selectedIds,
  onToggle,
}: QuickExperienceTagsProps) {
  const handleClick = (id: string) => {
    if (selectedIds.has(id)) {
      onToggle(id);
    } else if (selectedIds.size < MAX_TAGS) {
      onToggle(id);
    }
  };

  return (
    <section className="mb-3">
      <h2 className="text-base font-bold text-[#131313]">
        Quick Experience Tags{" "}
        <span className="text-sm font-normal text-[#131313]">(Optional)</span>
      </h2>
      <p className="mt-0.5 mb-4 text-sm text-[#767676]">
        Select up to 3 tags that describe your experience
      </p>
      <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 lg:w-[88%]">
        {TAGS.map((tag) => {
          const isSelected = selectedIds.has(tag.id);
          const isDisabled = !isSelected && selectedIds.size >= MAX_TAGS;
          return (
            <label
              key={tag.id}
              className={`flex shrink-0 items-center justify-between gap-2 rounded-lg border px-4 py-2.5 transition ${
                isDisabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
              } ${isSelected ? "border-[#3581EA] bg-blue-50/30" : "border-gray-200 bg-white hover:border-gray-300"}`}
            >
              <div className="flex items-center gap-2">
                <Image src={tag.iconSrc} alt="" width={16} height={16} className="h-4 w-4 shrink-0 object-contain" />
                <span className="text-sm font-medium text-[#131313]">
                  {tag.label}
                </span>
              </div>
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => handleClick(tag.id)}
                disabled={isDisabled}
                aria-label={tag.label}
              />
            </label>
          );
        })}
      </div>
    </section>
  );
}
