import Image from "next/image";

type ShareIconImgProps = {
  className?: string;
  /** Passed to next/image; visual size usually comes from className */
  size?: number;
};

/** Share control icon — `public/share-icon.svg` (use everywhere for consistency). */
export default function ShareIconImg({
  className,
  size = 20,
}: ShareIconImgProps) {
  return (
    <Image
      src="/share-icon.svg"
      alt=""
      width={size}
      height={size}
      className={["object-contain shrink-0", className].filter(Boolean).join(" ")}
    />
  );
}
