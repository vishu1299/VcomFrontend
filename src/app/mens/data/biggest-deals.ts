const UNSPLASH = (id: string, w = 400) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&fit=crop`;

export type BiggestDeal = {
  id: string;
  brand: string;
  image: string;
};

export const BIGGEST_DEALS: BiggestDeal[] = [
  { id: '1', brand: "U.S. Polo Assn.", image: UNSPLASH('1594938298603-c8148c4dae35') },
  { id: '2', brand: "Levi's", image: UNSPLASH('1541099649105-02e4e4be2ce0') },
  { id: '3', brand: 'Tommy Hilfiger', image: UNSPLASH('1596755094511-9ebf7a1c0a18') },
  { id: '4', brand: 'United Colors of Benetton', image: UNSPLASH('1624378439575-d8705ad7ae80') },
  { id: '5', brand: 'Calvin Klein', image: UNSPLASH('1562157873-4aef483ff735') },
  { id: '6', brand: 'Adidas', image: UNSPLASH('1556906781-9a412961c28c') },
];
