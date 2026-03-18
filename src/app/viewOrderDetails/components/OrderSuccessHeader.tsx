import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { REMOTE_IMG } from "@/lib/remoteAssets";

export default function OrderSuccessHeader() {
  return (
    <header className="bg-white text-[#131313] px-4 sm:px-6 py-8 sm:py-10">
      <div className="mx-auto max-w-[1100px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-xl sm:text-2xl font-bold text-[#131313]">
              Your Order has been successfully Completed!
            </h1>
            <CheckCircle2 className="w-8 h-8 shrink-0 text-[#16a34a]" aria-hidden />
          </div>
          <p className="text-sm text-[#131313] mt-2 max-w-xl">
            Thank you for shopping with us. Your order has been placed and is being processed.
          </p>
        </div>
        <div className="relative w-[120px] h-[100px] shrink-0">
          <Image
            src={REMOTE_IMG.delivery}
            alt=""
            fill
            className="object-contain"
            sizes="120px"
            unoptimized
          />
        </div>
      </div>
    </header>
  );
}
