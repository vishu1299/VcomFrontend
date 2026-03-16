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

export default function TrackOrderHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
      <div className="flex flex-wrap items-center gap-2">
        <h1 className="text-xl sm:text-2xl font-bold text-[#131313]">Order Details</h1>
        <span className="text-lg text-gray-600">#ORD-434231</span>
        <span className="inline-flex items-center px-3 py-1 rounded-lg bg-[#B4FBFF] text-[#007BFF] text-xs font-semibold uppercase tracking-wide">
          IN TRANSIT
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
  );
}
