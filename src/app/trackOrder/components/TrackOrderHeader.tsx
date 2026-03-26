import Image from "next/image";

const BADGE_CLASS =
  "inline-flex items-center rounded-lg bg-[#B4FBFF] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#205B5E]";
const BADGE_DELIVERED_CLASS =
  "inline-flex items-center rounded-lg bg-[#F2FFE8] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#2E5511]";

const INVOICE_BTN_CLASS =
  "inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-[#3581EA] bg-[#F6F8FF] px-3 py-2 text-xs font-medium text-[#3581EA] transition hover:bg-[#eef2ff] sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm";

function DownloadInvoiceButton() {
  return (
    <button type="button" className={INVOICE_BTN_CLASS}>
      <Image src="/invoice.svg" alt="" width={18} height={18} className="h-4 w-4 shrink-0 sm:h-[18px] sm:w-[18px]" />
      Download Invoice
    </button>
  );
}

type TrackOrderHeaderProps = {
  delivered?: boolean;
};

export default function TrackOrderHeader({ delivered = false }: TrackOrderHeaderProps) {
  const badgeClass = delivered ? BADGE_DELIVERED_CLASS : BADGE_CLASS;
  const badgeText = delivered ? "DELIVERED" : "IN TRANSIT";

  return (
    <div className="mb-3">
      {/* Mobile: row 1 = title + id; row 2 = status left, invoice right */}
      <div className="flex flex-col gap-3 sm:hidden">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-xl font-bold text-[#131313]">Order Details</h1>
          <span className="text-xl font-semibold text-[#131313]">#ORD-434231</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <span className={badgeClass}>{badgeText}</span>
          <DownloadInvoiceButton />
        </div>
      </div>

      {/* Desktop: title + id + badge | button */}
      <div className="hidden sm:flex sm:flex-row sm:items-center sm:justify-between sm:gap-3">
        <div className="flex min-w-0 flex-wrap items-center gap-2">
          <h1 className="text-xl font-bold text-[#131313] sm:text-xl">Order Details</h1>
          <span className="text-xl font-semibold text-[#131313]">#ORD-434231</span>
          <span className={badgeClass}>{badgeText}</span>
        </div>
        <DownloadInvoiceButton />
      </div>
    </div>
  );
}
