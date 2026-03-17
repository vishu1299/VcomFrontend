'use client';

export type StoreHeaderProps = {
  storeName: string;
  handle: string;
  profileImage: string;
};

export default function StoreHeader({
  storeName,
  handle,
  profileImage,
}: StoreHeaderProps) {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-5 flex flex-wrap items-center gap-3 sm:gap-4 mb-4">
      <img
        src={profileImage}
        alt={storeName}
        className="w-10 h-10 rounded-full object-cover shrink-0 bg-[#f3f4f6] border border-[#e5e7eb]"
      />
      <div className="flex items-center flex-wrap gap-4">
        <div className="flex-1">

        <p className="text-[16px] sm:text-[18px] font-bold text-[#131313] truncate">
          {storeName}
        </p>
        <p className="text-[13px] sm:text-[14px] text-[#767676] truncate">
          {handle}
        </p>
        </div>
      <div className="flex items-center flex-wrap gap-2">
        <button
          type="button"
            className="min-h-[36px] px-4 sm:px-5 rounded-lg text-[13px] sm:text-[14px] font-bold bg-[#f5b700] hover:bg-[#eab308] transition"
        >
          Follow +
        </button>
        <button
          type="button"
          className="min-h-[36px] px-4 sm:px-5 rounded-lg text-[13px] sm:text-[14px] font-bold text-white bg-[#dc2626] hover:bg-[#b91c1c] transition flex items-center gap-1.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" aria-hidden />
          LIVE NOW
        </button>
      </div>
      </div>
    </div>
  );
}
