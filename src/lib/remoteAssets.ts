/**
 * Stable image URLs for Vercel/deploy when /public/images PNGs are not in repo.
 * next.config must allow images.unsplash.com.
 */
const U = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=85&fit=crop&auto=format`;

export const REMOTE_IMG = {
  heroBanner: U('1441986300917-64674bd600d8', 1600),
  productPhone: U('1511707171634-5f897ff02aa9', 600),
  watch: U('1523275335684-37898b6baf30', 500),
  jacket: U('1551028719-00167b16eac5', 500),
  shoes: U('1542291026-7eec264c27ff', 500),
  bag: U('1590874103328-eac38a683ce7', 500),
  perfume: U('1541643600914-78b084683601', 500),
  avatar: U('1472099645785-5658abf4ff4e', 300),
  delivery: U('1566576912321-d58ddd7a6088', 400),
  fashion: U('1521572160342-696fcf89bda9', 500),
  electronics: U('1498049794561-7780e7231661', 500),
} as const;

const GALLERY_IDS = [
  '1521572160342-696fcf89bda9',
  '1541099649105-02e4e4be2ce0',
  '1596755094511-9ebf7a1c0a18',
  '1556821840-3a63f95609a7',
  '1576566588028-4147f3842f27',
  '1624378439575-d8705ad7ae80',
  '1556906781-9a412961c28c',
  '1515886657613-9f3515b0c78f',
  '1498049794561-7780e7231661',
  '1523275335684-37898b6baf30',
] as const;

/** Stable gallery / related-product image by index (replaces missing /public PNGs). */
export function remoteGalleryImage(i: number, w = 600): string {
  const id = GALLERY_IDS[Math.abs(i) % GALLERY_IDS.length];
  return U(id, w);
}
