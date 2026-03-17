const UNSPLASH = (id: string, w = 400) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&fit=crop`;

export type MensCategory = {
  id: string;
  name: string;
  image: string;
  slug?: string;
};

export const MENS_CLOTHING_CATEGORIES: MensCategory[] = [
  { id: '1', name: 'T-shirts', image: UNSPLASH('1521572160342-696fcf89bda9'), slug: 'tshirts' },
  { id: '2', name: 'Shirts', image: UNSPLASH('1596755094511-9ebf7a1c0a18'), slug: 'shirts' },
  { id: '3', name: 'Jeans', image: UNSPLASH('1541099649105-02e4e4be2ce0'), slug: 'jeans' },
  { id: '4', name: 'Trousers', image: UNSPLASH('1624378439575-d8705ad7ae80'), slug: 'trousers' },
  { id: '5', name: 'Inner Wear', image: UNSPLASH('1556906781-9a412961c28c'), slug: 'inner-wear' },
  { id: '6', name: 'Hoodies', image: UNSPLASH('1556821840-3a63f95609a7'), slug: 'hoodies' },
];
