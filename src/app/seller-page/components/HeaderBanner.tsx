import { REMOTE_IMG } from "@/lib/remoteAssets";

export default function HeaderBanner() {
  return (
    <div className="w-full aspect-[3/1] max-h-[200px] overflow-hidden rounded-2xl bg-gray-200">
      <img
        src={REMOTE_IMG.heroBanner}
        alt="Seller banner"
        className="w-full h-full object-cover"
        width={1200}
        height={400}
      />
    </div>
  );
}
