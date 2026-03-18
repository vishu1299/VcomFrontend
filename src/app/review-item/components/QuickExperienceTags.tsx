"use client";

const MAX_TAGS = 3;

const TAGS: {
  id: string;
  label: string;
  dotColor: string;
  icon?: "star" | "plus";
}[] = [
  { id: "fast", label: "Fast Delivery", dotColor: "#22c55e" },
  { id: "packaged", label: "Well Packaged", dotColor: "#B77E46" },
  { id: "exceeded", label: "Exceeded Expectations", dotColor: "#F5B700" },
  { id: "helpful", label: "Helpful Seller", dotColor: "#ADADAD" },
  { id: "late", label: "Late Delivery", dotColor: "#CB1414" },
  { id: "poor", label: "Poor Quality", dotColor: "#CB1414" },
  { id: "wrong", label: "Wrong Item Sent", dotColor: "#CB1414" },
  { id: "livestream", label: "Bought via Livestream", dotColor: "#F2C231" },
  { id: "repeat", label: "Repeat Buyer", dotColor: "#F2C231", icon: "star" },
  { id: "custom", label: "Add My Own", dotColor: "#3581EA", icon: "plus" },
];

type QuickExperienceTagsProps = {
  selectedIds: Set<string>;
  onToggle: (id: string) => void;
};

function PlusIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="shrink-0"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function StarSmallIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="#F2C231"
      stroke="#F2C231"
      strokeWidth="1.5"
      className="shrink-0"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

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
    <section className="mb-8">
      <h2 className="text-base font-bold text-[#131313]">
        Quick Experience Tags{" "}
        <span className="text-sm font-normal text-[#131313]">(Optional)</span>
      </h2>
      <p className="text-sm text-[#131313] mt-0.5 mb-4">
        Select up to 3 tags that describe your experience
      </p>
      <div className="grid grid-cols-2 gap-2 w-[80%]">
        {TAGS.map((tag) => {
          const isSelected = selectedIds.has(tag.id);
          const isDisabled = !isSelected && selectedIds.size >= MAX_TAGS;
          return (
            <label
              key={tag.id}
              className={`flex justify-between items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer transition shrink-0 ${
                isDisabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
              } ${isSelected ? "border-[#3581EA] bg-blue-50/30" : "border-gray-200 bg-white hover:border-gray-300"}`}
            >
              <div className="flex items-center gap-2">
                {tag.icon === "star" ? (
                  <StarSmallIcon />
                ) : tag.icon === "plus" ? (
                  <span
                    className="text-[#3581EA]"
                    style={{ color: tag.dotColor }}
                  >
                    <PlusIcon />
                  </span>
                ) : (
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: tag.dotColor }}
                    aria-hidden
                  />
                )}
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
