import type { ProductCardProps } from '../components/ProductCard';

/** Extended product for Quick View and Product Detail page */
export type ProductDetail = ProductCardProps & {
  sku?: string;
  productNumber?: string;
  category?: string;
  sizes?: string[];
  colors?: { id: string; label: string; hex: string }[];
  seller?: string;
  description?: string;
  images?: string[];
};

const DETAILS: Record<string, Partial<ProductDetail>> = {
  '1': {
    sku: 'PFF-298-CRD',
    productNumber: 'A3002',
    category: 'Fashion',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { id: 'red', label: 'Red', hex: '#dc2626' },
      { id: 'pink', label: 'Pink', hex: '#ec4899' },
      { id: 'blue', label: 'Blue', hex: '#3b82f6' },
      { id: 'yellow', label: 'Yellow', hex: '#eab308' },
      { id: 'black', label: 'Black', hex: '#131313' },
    ],
    seller: 'urbantech',
    description:
      "Men's Half Sleeve Solid Casual Regular Fit T-Shirt with Chest Pocket | Polo. Cotton, Machine Wash. Model is 6'0\"/183-cms and is wearing size M.",
    images: ['/images/signin.png', '/images/create.png', '/images/logo.png'],
  },
  '2': {
    sku: 'PTP-256-ORD',
    productNumber: 'A2B0',
    category: 'Fashion',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { id: 'pink', label: 'Pink', hex: '#ec4899' },
      { id: 'red', label: 'Red', hex: '#dc2626' },
      { id: 'blue', label: 'Blue', hex: '#3b82f6' },
      { id: 'black', label: 'Black', hex: '#131313' },
      { id: 'yellow', label: 'Yellow', hex: '#eab308' },
    ],
    seller: 'urbantech',
    description:
      "Men's Half Sleeve Solid Casual Regular Fit T-Shirt. Cotton, Machine Wash.",
    images: ['/images/create.png', '/images/signin.png', '/images/logo.png'],
  },
  '3': {
    sku: 'IP17-256-Q89',
    productNumber: 'A302',
    category: 'Electronics',
    sizes: ['64 GB', '256 GB', '512 GB'],
    colors: [
      { id: 'orange', label: 'Orange', hex: '#f97316' },
      { id: 'white', label: 'White', hex: '#ffffff' },
      { id: 'pink', label: 'Pink', hex: '#ec4899' },
      { id: 'yellow', label: 'Yellow', hex: '#eab308' },
    ],
    seller: 'urbantech',
    description:
      'iPhone 17 Pro 15.93 cm (6.3") Display. Unleash the future of mobile tech with razor-sharp Super Retina XDR display, pro-grade triple-lens camera, and ultra-durable titanium frame.',
    images: ['/images/logo.png', '/images/signin.png', '/images/create.png', '/images/forgot.png'],
  },
};

const DEFAULT_DETAILS: Partial<ProductDetail> = {
  sku: 'PFF-001',
  productNumber: 'A1000',
  category: 'Fashion',
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  colors: [
    { id: 'black', label: 'Black', hex: '#131313' },
    { id: 'white', label: 'White', hex: '#ffffff' },
    { id: 'blue', label: 'Blue', hex: '#3b82f6' },
  ],
  seller: 'urbantech',
  description: 'Premium quality product. Machine washable.',
};

/** Get full product details for Quick View / Product Detail */
export function getProductDetail(product: ProductCardProps): ProductDetail {
  const id = String(product.id);
  const extra = DETAILS[id] ?? DEFAULT_DETAILS;
  return {
    ...product,
    ...extra,
    images: extra.images ?? [product.image],
  };
}

/** Get product detail by id (for product detail page) */
export function getProductDetailById(id: string, products: ProductCardProps[]): ProductDetail | null {
  const product = products.find((p) => String(p.id) === id);
  return product ? getProductDetail(product) : null;
}
