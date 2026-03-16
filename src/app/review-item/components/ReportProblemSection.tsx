"use client";

const OPTIONS = [
  { id: "counterfeit", label: "I received a counterfeit item" },
  { id: "unsafe", label: "The item was unsafe or broken" },
  { id: "unprofessional", label: "The seller was unprofessional" },
  { id: "other", label: "Other issue" },
];

type ReportProblemSectionProps = {
  selectedIds: Set<string>;
  onToggle: (id: string) => void;
};

export default function ReportProblemSection({ selectedIds, onToggle }: ReportProblemSectionProps) {
  return (
    <section className="mb-8">
      <p className="text-sm font-medium text-[#131313] mb-3">Report a Serious Problem?</p>
      <div className="grid grid-cols-2 gap-2">
        {OPTIONS.map((option) => {
          const isSelected = selectedIds.has(option.id);
          return (
            <label
              key={option.id}
              className={`flex justify-between items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer transition shrink-0 ${
                isSelected ? "border-[#3581EA] bg-blue-50/30" : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <span className="text-sm font-medium text-[#131313]">{option.label}</span>
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => onToggle(option.id)}
                className="w-4 h-4 rounded border-gray-300 text-[#3581EA] focus:ring-[#3581EA] accent-[#3581EA]"
              />
            </label>
          );
        })}
      </div>
    </section>
  );
}
