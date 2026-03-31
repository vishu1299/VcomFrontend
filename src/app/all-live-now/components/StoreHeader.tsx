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
    <div className="mb-4 rounded-xl bg-white p-2 sm:p-1">
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <img
            src={profileImage}
            alt={storeName}
            className="h-10 w-10 shrink-0 rounded-full border border-[#e5e7eb] bg-[#f3f4f6] object-cover"
          />
          <div className="min-w-0">
            <p className="truncate text-[16px] font-bold text-[#131313] sm:text-[18px]">
              {storeName}
            </p>
            <p className="truncate text-[13px] text-[#767676] sm:text-[14px]">
              {handle}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:ml-1">
          <button
            type="button"
            className="min-h-[36px] rounded-lg bg-[#f5b700] px-4 text-[13px] font-bold transition hover:bg-[#eab308] sm:px-5 sm:text-[14px]"
          >
            Follow +
          </button>
          <button
            type="button"
            className="flex min-h-[36px] items-center gap-1.5 rounded-lg px-4 text-[13px] font-bold text-white transition hover:brightness-95 sm:px-5 sm:text-[14px]"
            style={{ background: 'linear-gradient(90deg, #B90000 0%, #FF0000 100%)' }}
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" aria-hidden />
            LIVE NOW
          </button>
        </div>
      </div>
    </div>
  );
}
