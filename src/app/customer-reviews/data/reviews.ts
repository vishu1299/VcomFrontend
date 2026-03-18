import { remoteGalleryImage } from "@/lib/remoteAssets";

export type Review = {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  photos?: string[];
};

const fourPhotos = [0, 1, 2, 3].map((i) => remoteGalleryImage(i + 10, 500));

export const MOCK_REVIEWS: Review[] = [
  {
    id: "1",
    author: "Luke Davis",
    rating: 4,
    date: "2024-07-05 12:00PM",
    text: "Hi, I'm so glad you like our products. Your best rating is our biggest support. Don't forget to share with your friends, family or relatives. Have a nice day, waiting for your next order.",
  },
  {
    id: "2",
    author: "Luke Davis",
    rating: 4,
    date: "2024-07-05 12:00PM",
    text: "Hi, I'm so glad you like our products. Your best rating is our biggest support. Don't forget to share with your friends, family or relatives. Have a nice day, waiting for your next order.",
    photos: fourPhotos,
  },
  {
    id: "3",
    author: "Luke Davis",
    rating: 4,
    date: "2024-07-05 12:00PM",
    text: "Hi, I'm so glad you like our products. Your best rating is our biggest support. Don't forget to share with your friends, family or relatives. Have a nice day, waiting for your next order.",
    photos: fourPhotos,
  },
];
