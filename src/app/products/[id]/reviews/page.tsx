import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductDetail, getSellerRecommendedProducts } from "../data/product-detail";
import {
  PhotosCarousel,
  ReviewFilters,
  ReviewCard,
} from "@/app/customer-reviews/components";
import { MOCK_REVIEWS } from "@/app/customer-reviews/data/reviews";
import SoldBySellerCarousel from "../components/SoldBySellerCarousel";

const RATING_BARS = [
  { stars: 5, percent: 54, color: "#f97316" },
  { stars: 4, percent: 20, color: "#84cc16" },
  { stars: 3, percent: 9, color: "#eab308" },
  { stars: 2, percent: 5, color: "#ef4444" },
  { stars: 1, percent: 12, color: "#3b82f6" },
];

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductReviewsPage({ params }: PageProps) {
  const { id } = await params;
  const product = getProductDetail(id);
  if (!product) notFound();

  const recommended = getSellerRecommendedProducts(id);
  const productImage = product.images?.[0] ?? product.image;

  return (
    <main
      className="min-h-screen bg-[#f5f5f5]"
      style={{ fontFamily: "var(--font-poppins)" }}
    >

      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-8 sm:py-10">
        <div
          className="rounded-2xl bg-white p-6 sm:p-8"
          
        >
          <Link
            href={`/products/${id}`}
            className="text-sm text-[#3F8CFF] hover:underline mb-6 inline-block"
          >
            ← Back to product
          </Link>

          {/* Header + Rating summary + Product in center */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-8">
            <div className="flex-1 max-w-[500px]">
              <h1 className="text-xl sm:text-2xl font-bold text-black mb-4">
                Customer reviews
              </h1>
              <div className="flex flex-wrap items-baseline gap-2 mb-4">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg
                      key={s}
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill={s <= 4 ? "#eab308" : "none"}
                      stroke="#eab308"
                      strokeWidth="1.5"
                      className="shrink-0"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="text-lg font-bold text-black">4 out of 5</span>
              </div>
              <p className="text-sm text-black mb-6">(10,653 Ratings)</p>
              <div className="space-y-2">
                {RATING_BARS.map(({ stars, percent, color }) => (
                  <div key={stars} className="flex items-center gap-3">
                    <span className="text-sm text-black w-14 shrink-0">
                      {stars} Star
                    </span>
                    <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full min-w-[4px] transition-all"
                        style={{ width: `${percent}%`, backgroundColor: color }}
                      />
                    </div>
                    <span className="w-10 shrink-0 text-right text-sm text-black">
                      {percent}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="shrink-0 flex flex-col items-center">
              <div className="relative w-40 h-48 sm:w-48 sm:h-56 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={productImage}
                  alt={product.name}
                  fill
                  className="object-cover"
                  unoptimized={String(productImage).startsWith("http")}
                  sizes="224px"
                />
              </div>
              <p className="text-sm text-center text-black font-medium mt-2">
                {product.name}
              </p>
            </div>
          </div>

          {/* Photos */}
          <section className="mb-8">
            <h2 className="text-base font-bold text-black mb-4">Photos</h2>
            <PhotosCarousel />
          </section>

          {/* Search + Filters */}
          <ReviewFilters />

          {/* Review list */}
          <div className="bg-white">
            {MOCK_REVIEWS.map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
          </div>

          {/* Sold by this seller */}
          {recommended.length > 0 && (
            <SoldBySellerCarousel products={recommended} />
          )}
        </div>
        </div>
    </main>
  );
}
