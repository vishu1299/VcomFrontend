import Link from "next/link";
import Image from "next/image";

function ChatIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

const ORDER_SUMMARY = [
  { label: "Order Number:", value: "ORD-434231" },
  { label: "Placed on:", value: "10, Nov, 2025" },
  { label: "Estimated Delivery Date:", value: "16, Nov, 2025" },
  { label: "Delivery Address:", value: "Josh 21, Green Avenue, Tilak Nagar, New Delhi, 110018" },
];
const ORDER_ID = "434231";

type ProductDetailsCardProps = {
  delivered?: boolean;
};

export default function ProductDetailsCard({ delivered = false }: ProductDetailsCardProps) {
  const summaryRows = ORDER_SUMMARY.map((row) =>
    row.label === "Estimated Delivery Date:"
      ? { ...row, label: delivered ? "Delivered on:" : "Estimated Delivery Date:" }
      : row
  );

  return (
    <div className="mb-4">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-6">
        {/* Product — 50% on lg */}
        <div className="flex min-h-0 min-w-0 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-stretch sm:gap-5">
            <div className="relative mx-auto aspect-square w-full max-w-[220px] shrink-0 overflow-hidden rounded-lg  sm:mx-0 sm:aspect-auto sm:min-h-[160px] sm:w-[30%] sm:shrink-0 sm:basis-[30%]">
              <Image
                src="/images/phone.png"
                alt="iPhone 17 Pro"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 220px, 30vw"
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col">
              <h2 className="line-clamp-3 text-sm font-bold leading-snug text-[#131313] sm:text-base">
                iPhone 17 Pro 256 GB: 15.93 cm (6.3&quot;) Display
              </h2>
              <dl className="mt-3 flex flex-col gap-2.5 text-sm sm:mt-4 sm:gap-3">
                <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1 sm:gap-x-8">
                  <div className="flex flex-wrap items-baseline gap-x-1.5">
                    <dt className="shrink-0 text-[#767676]">Color:</dt>
                    <dd className="m-0 font-medium text-[#131313]">Orange</dd>
                  </div>
                  <div className="flex flex-wrap items-baseline gap-x-1.5">
                    <dt className="shrink-0 text-[#767676]">QTY:</dt>
                    <dd className="m-0 text-[#131313]">1</dd>
                  </div>
                </div>
                <div className="flex flex-wrap items-baseline gap-x-1.5">
                  <dt className="shrink-0 text-[#767676]">Product Number:</dt>
                  <dd className="m-0 text-[#131313]">43-4234324</dd>
                </div>
                <div className="flex flex-wrap items-baseline gap-x-1.5">
                  <dt className="shrink-0 text-[#767676]">Seller:</dt>
                  <dd className="m-0 text-[#131313]">Urbantech</dd>
                </div>
              </dl>
              <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                {delivered ? (
                  <>
                    <Link
                      href="/review-item"
                      className="inline-flex items-center rounded-lg border border-[#D2D2D2] bg-white px-3 py-2 text-xs font-medium text-[#131313] transition hover:bg-gray-50 sm:px-4 sm:text-sm"
                    >
                      Write a review
                    </Link>
                    <Link
                      href={`/return-item/${ORDER_ID}`}
                      className="inline-flex items-center rounded-lg border border-[#D2D2D2] bg-white px-3 py-2 text-xs font-medium text-[#131313] transition hover:bg-gray-50 sm:px-4 sm:text-sm"
                    >
                      Return/Replace
                    </Link>
                  </>
                ) : (
                  <Link
                    href={`/cancel-order/${ORDER_ID}`}
                    className="inline-flex items-center rounded-lg border border-[#F75555] bg-white px-3 py-2 text-xs font-medium text-[#F75555] transition hover:bg-red-50/50 sm:px-4 sm:text-sm"
                  >
                    Cancel Order
                  </Link>
                )}
                <Link
                  href="/chat"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#D2D2D2] bg-white px-3 py-2 text-xs font-medium text-[#131313] transition hover:bg-gray-50 sm:px-4 sm:text-sm"
                >
                  <ChatIcon />
                  Chat with Seller
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Order summary — 50% on lg */}
        <div className="flex min-w-0 flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
          <dl className="flex flex-col gap-3 text-sm sm:gap-4">
            {summaryRows.map(({ label, value }) => (
              <div key={label} className="flex flex-col items-start gap-1.5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <dt className="shrink-0 font-semibold text-[#131313]">{label}</dt>
                <dd className="min-w-0 break-words text-left text-[#131313] sm:text-right">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
