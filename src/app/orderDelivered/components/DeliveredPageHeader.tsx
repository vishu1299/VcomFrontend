"use client";

type DeliveredPageHeaderProps = {
  onNeedHelpClick?: () => void;
  title?: string;
  color?: string;
};

export default function DeliveredPageHeader({ title = "Your Order Has Been Delivered!", color = "text-green-600", onNeedHelpClick }: DeliveredPageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
      <div>
        <h1 className={`text-xl sm:text-2xl font-bold ${color}`}>
          {title}
        </h1>
        <p className="text-sm text-gray-500 mt-1">Delivered on: Nov 12, 2025 at 4:30 PM</p>
      </div>
      <div className="flex flex-col flex-wrap items-end gap-1">
        <button
          type="button"
          onClick={onNeedHelpClick}
          className="text-sm font-medium text-[#1E3A8A] hover:underline shrink-0"
        >
          Need Help?
        </button>
        <span className="text-sm text-gray-500 shrink-0">Delivered: 16 Nov 2025</span>
      </div>
    </div>
  );
}
