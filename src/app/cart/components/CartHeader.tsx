function ShareIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#131313]">
      <path d="M7 11v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-2" />
      <path d="M15 7l5 5-5 5" />
      <path d="M20 12H11" />
    </svg>
  );
}

type CartHeaderProps = {
  itemCount: number;
};

export default function CartHeader({ itemCount }: CartHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-[#131313]">Cart ({itemCount})</h1>
        <p className="text-sm text-gray-600 mt-0.5">Review your items before checkout</p>
      </div>
      <button
        type="button"
        className="inline-flex items-center gap-2 border border-gray-200 text-[#131313] text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-gray-50 transition w-fit"
      >
        <ShareIcon />
        Share Cart
      </button>
    </div>
  );
}
