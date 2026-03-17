import { notFound } from 'next/navigation';
import { getProductDetail, getSellerRecommendedProducts } from './data/product-detail';
import ProductShowcase from './components/ProductShowcase';
import ProductDescriptionTabs from './components/ProductDescriptionTabs';
import SoldBySellerCarousel from './components/SoldBySellerCarousel';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = getProductDetail(id);

  if (!product) {
    notFound();
  }

  const recommended = getSellerRecommendedProducts(id);

  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: 'var(--font-poppins)' }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <ProductShowcase product={product} />
        <ProductDescriptionTabs product={product} />
        {recommended.length > 0 && <SoldBySellerCarousel products={recommended} />}
      </div>
    </main>
  );
}
