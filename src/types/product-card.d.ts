interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badges?: string[];
  hasVideo?: boolean;
}
