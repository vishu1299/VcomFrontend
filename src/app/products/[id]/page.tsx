import { notFound } from 'next/navigation';
import { getProductDetail, getSellerRecommendedProducts } from './data/product-detail';
import ProductShowcase from './components/ProductShowcase';
import ProductDescriptionTabs from './components/ProductDescriptionTabs';
import SoldBySellerCarousel from './components/SoldBySellerCarousel';

interface PageProps {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ tab?: string }>;
}

export default async function ProductDetailPage({ params, searchParams }: PageProps) {
  const { id } = await params;
  const sp = (await searchParams) ?? {};
  const product = getProductDetail(id);

  if (!product) {
    notFound();
  }

  const recommended = getSellerRecommendedProducts(id);
  const initialTab =
    sp.tab === 'questions' ? ('Questions' as const) : undefined;

  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: 'var(--font-poppins)' }}>
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-4 sm:py-6">
        <ProductShowcase product={product} />
        <ProductDescriptionTabs product={product} initialTab={initialTab} />
        {recommended.length > 0 && <SoldBySellerCarousel products={recommended} />}
      </div>
    </main>
  );
}
