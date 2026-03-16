function InfoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-gray-500">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

export default function NoteSection() {
  return (
    <div className=" border border-gray-200 bg-gray-100 p-4 mb-6">
      <div className="flex items-start gap-3">
        <InfoIcon />
        <div>
          <span className="font-bold text-[#131313]">Note</span>
          <p className="text-sm text-gray-600 mt-0.5">
            Cancellation is allowed for 24 hours or until the order is shipped. After shipping, cancellation is not possible.
          </p>
        </div>
      </div>
    </div>
  );
}
