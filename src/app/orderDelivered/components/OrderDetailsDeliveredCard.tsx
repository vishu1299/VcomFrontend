import Link from "next/link";

function DocumentIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

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

export default function OrderDetailsDeliveredCard() {
  return (
    <div className=" bg-white mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="text-lg font-bold text-[#131313]">Order Details #ORD-434231</h2>
          <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-wide">
            DELIVERED
          </span>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 border-2 border-blue-500 bg-white text-blue-600 font-medium text-sm px-4 py-2.5 rounded-lg hover:bg-blue-50 transition w-fit shrink-0"
        >
          <DocumentIcon />
          Download Invoice
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        <div className="flex gap-4  rounded-xl border border-gray-200 shadow-sm p-4 sm:p-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24  overflow-hidden shrink-0 ">
            <img src="/images/customerReviews/product.png" alt="iPhone 17 Pro" className="w-full h-full object-cover" />
          </div>
          <div className="min-w-0">
            <h2 className="text-sm font-bold text-[#131313] line-clamp-2">
              iPhone 17 Pro 256 GB: 15.93 cm (6.3&quot;) Display
            </h2>
            <p className="text-xs text-gray-600 mt-1">Color: <span className=" font-bold text-black">Orange</span> QTY:  <span className=" font-bold text-black">1</span> <span className=" font-bold text-black">Product Number: 43-4234324</span></p>
            <div className="flex flex-wrap gap-2 mt-3">
              <Link
                href="/review-item"
                type="button"
                className="inline-flex items-center px-3 py-2 rounded-lg border border-gray-200 bg-white text-[#131313] text-xs font-medium hover:bg-gray-50 transition"
              >
                Write a review
              </Link>
              <button
                type="button"
                className="inline-flex items-center px-3 py-2 rounded-lg border border-gray-200 bg-white text-[#131313] text-xs font-medium hover:bg-gray-50 transition"
              >
                Return / Replace
              </button>
              <Link
                href="/chat"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-gray-200 bg-white text-[#131313] text-xs font-medium hover:bg-gray-50 transition"
              >
                <ChatIcon />
                Chat with Seller
              </Link>
            </div>
          </div>
        </div>
        <div className=" shrink-0 rounded-xl border border-gray-200 shadow-sm p-4 sm:p-6">
          <dl className="space-y-2 text-sm">
            {ORDER_SUMMARY.map(({ label, value }) => (
              <div key={label} className="flex justify-between gap-3">
                <dt className="font-semibold shrink-0">{label}</dt>
                <dd className="text-[#131313] text-right min-w-0 break-words">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
        
      </div>
    </div>
  );
}
