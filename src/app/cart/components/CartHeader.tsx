import ShareIconImg from "@/components/ShareIconImg";

type CartHeaderProps = {
  itemCount: number;
};

export default function CartHeader({ itemCount }: CartHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-600">
          Cart ({itemCount})
        </h1>
        <p className="text-sm text-gray-600 mt-0.5">
          Review your items before checkout
        </p>
      </div>
      <button
        type="button"
        className="inline-flex items-center gap-2 border border-gray-200 text-gray-600 text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-gray-50 transition w-fit"
      >
        <ShareIconImg className="w-[18px] h-[18px]" size={18} />
        Share Cart
      </button>
    </div>
  );
}
