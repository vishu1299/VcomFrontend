import Link from "next/link";

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

export default function ProductDetailsCard() {
  return (
    <div className="mb-4">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        <div className="flex gap-4  rounded-xl border border-gray-200 shadow-sm p-4 sm:p-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden bg-gray-100 shrink-0 shadow-sm">
            <img src="/images/orangeIphone.png" alt="iPhone 17 Pro" className="w-full h-full object-cover" />
          </div>
          <div className="min-w-0">
            <h2 className="text-sm font-bold text-[#131313] line-clamp-2">
              iPhone 17 Pro 256 GB: 15.93 cm (6.3&quot;) Display
            </h2>
            <p className="text-xs text-gray-600 mt-1">Color: Orange QTY: 1</p>
            <p className="text-xs text-gray-600">Product Number: 43-4234324</p>
            <p className="text-xs text-gray-600">Seller: Urbantech</p>
            <div className="flex flex-wrap gap-2 mt-3">
              <button
                type="button"
                className="inline-flex items-center px-3 py-2 rounded-lg border-2 border-red-500 bg-white text-red-600 text-xs font-medium hover:bg-red-50 transition"
              >
                Cancel Order
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
