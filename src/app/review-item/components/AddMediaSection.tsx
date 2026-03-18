function CameraPlusIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#131313] mx-auto">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
      <line x1="12" y1="10" x2="12" y2="10.01" strokeWidth="2" />
      <line x1="16" y1="6" x2="16" y2="4" />
      <line x1="8" y1="6" x2="8" y2="4" />
    </svg>
  );
}

export default function AddMediaSection() {
  return (
    <section className="mb-8">
      <label className="block text-sm font-medium text-[#131313] mb-2">
        Add Photos or a Video{" "}
        <span className="text-xs font-normal text-[#131313]">(Optional – max 5 images, 1 video up to 15 seconds)</span>
      </label>
      <div className="border-2 border-dashed border-gray-200 rounded-lg bg-gray-50 p-8 sm:p-10 text-center">
        <CameraPlusIcon />
        <p className="text-sm font-medium text-[#131313] mt-3">Choose a file or drag & drop it here</p>
        <p className="text-xs text-[#131313] mt-1">JPEG, PNG, PDG, and MP4 formats, up to 50 mb</p>
        <button
          type="button"
          className="mt-4 px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm font-medium text-[#131313] hover:bg-gray-50 transition"
        >
          Browse File
        </button>
      </div>
    </section>
  );
}
