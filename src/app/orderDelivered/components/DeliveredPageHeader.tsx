"use client";

type DeliveredPageHeaderProps = {
  onNeedHelpClick?: () => void;
  title?: string;
  color?: string;
  delivered?: boolean;
};

export default function DeliveredPageHeader({
  title = "Your Order Has Been Delivered!",
  color = "text-[#0C9200]",
  delivered = true,
  onNeedHelpClick,
}: DeliveredPageHeaderProps) {
  return (
    <div className="mb-3 flex flex-col gap-3 sm:mb-2 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0">
        <h1 className={`text-[28px] leading-tight font-bold sm:text-2xl ${color}`}>
          {title}
        </h1>
        <p className="mt-1 text-base text-[#131313] sm:text-sm">
          Delivered on: <span className={delivered ? "font-semibold" : "font-normal"}>Nov 12, 2025 at 4:30 PM</span>
        </p>
      </div>
      <div className="flex w-full items-center justify-between border-t border-[#D2D2D2] pt-2 sm:w-auto sm:flex-col sm:flex-wrap sm:items-end sm:gap-1 sm:border-t-0 sm:pt-0">
        <span className="shrink-0 text-sm text-[#131313] sm:order-2">
          {delivered ? "Delivered: 16 Nov 2025" : "Estimated Delivery Date: 16 Nov 2025"}
        </span>
        <button
          type="button"
          onClick={onNeedHelpClick}
          className="shrink-0 text-base font-medium text-[#1E3A8A] hover:underline sm:order-1 sm:text-sm"
        >
          Need Help?
        </button>
      </div>
    </div>
  );
}
