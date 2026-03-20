'use client';

import { useMemo } from 'react';
import ProductDetailModal from '@/app/exclusive/components/ProductDetailModal';
import type { ProductDetail } from '../data/productDetails';
import { productDetailToExclusive } from '../lib/productDetailToExclusive';

type QuickViewModalProps = {
  product: ProductDetail;
  onClose: () => void;
  onGoToProduct: () => void;
};

/**
 * Product list quick view — same UI as exclusive `ProductDetailModal`.
 */
export default function QuickViewModal({
  product,
  onClose,
  onGoToProduct,
}: QuickViewModalProps) {
  const exclusiveProduct = useMemo(() => productDetailToExclusive(product), [product]);

  const handleClose = () => {
    onClose();
    onGoToProduct();
  };

  return (
    <ProductDetailModal
      product={exclusiveProduct}
      isOpen
      onClose={handleClose}
      productPageHref={`/products/${product.id}`}
    />
  );
}
