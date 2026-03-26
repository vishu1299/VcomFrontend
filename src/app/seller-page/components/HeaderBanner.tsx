export default function HeaderBanner() {
  return (
    <div className="w-full aspect-[3/1] max-h-[200px] overflow-hidden rounded-2xl bg-gray-200">
      <img
        src="/images/herobanner.png"
        alt="Seller banner"
        className="w-full h-full object-cover"
        width={1200}
        height={600}
      />
    </div>
  );
}
