export default function HeaderBanner() {
  return (
    <div className="w-full aspect-[3/1] max-h-[200px] overflow-hidden rounded-2xl">
      <img
        src="/images/heroBanner.png"
        alt="Seller banner"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
