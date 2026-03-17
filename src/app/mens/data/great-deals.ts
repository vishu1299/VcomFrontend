const UNSPLASH = (id: string, w = 400) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&fit=crop`;

export type GreatDeal = {
  id: string;
  brand: string;
  productType: string;
  offer: string;
  image: string;
};

export const GREAT_DEALS: GreatDeal[] = [
  { id: '1', brand: 'ZARA', productType: 'T-shirts', offer: 'UNDER $39', image: UNSPLASH('1562157873-4aef483ff735') },
  { id: '2', brand: 'H&M', productType: 'Over-sized T-shirts', offer: 'UNDER $59', image: UNSPLASH('1576566588028-4147f3842f27') },
  { id: '3', brand: 'UNI QLO', productType: 'Trendy Hoodies', offer: 'Min. 55% OFF', image: UNSPLASH('1552374196-c4e7ffc6e126') },
  { id: '4', brand: 'JACK & JONES', productType: 'Denim & Joggers', offer: 'UNDER $20', image: UNSPLASH('1503341504257-d38343f4f54b') },
  { id: '5', brand: 'PUMA', productType: 'Sportswear', offer: 'UNDER $49', image: UNSPLASH('1556906781-9a412961c28c') },
  { id: '6', brand: 'NIKE', productType: 'Running', offer: 'Min. 40% OFF', image: UNSPLASH('1542291026-7eec264c27ff') },
];
