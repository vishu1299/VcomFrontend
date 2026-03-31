/** Product shape used by just-dropped grids, carousels, and mens view data */
export type JustDroppedCardProduct = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badges: string[];
  hasVideo: boolean;
  sponsored: boolean;
};
