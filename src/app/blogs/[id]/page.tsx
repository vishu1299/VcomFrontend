import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import BlogDetailClient from './BlogDetailClient';

// Mock blog data
const getBlog = (id: string) => {
  const blogs = {
    '1': {
      id: '1',
      category: 'BEAUTY',
      categoryBg: 'bg-amber-300',
      title: 'How to Create a Sustainable Home with Organic Products',
      author: 'Tony Nguyen',
      authorImage: '/images/circle.png',
      date: 'Oct 12, 2023',
      content: {
        intro: 'Refined oils are everywhere—in your kitchen, your skincare, and your hair products. But here\'s the thing: they\'re processed, stripped of nutrients, and often loaded with chemicals. Enter organic cold-pressed coconut oil—the game-changer you\'ve been waiting for.',
        sections: [
          {
            heading: 'Zero Chemicals. Zero Heat. Maximum Nutrition.',
            text: 'Cold-pressed extraction means we press the coconut meat at low temperatures, preserving every drop of goodness. No heat means no nutrient loss. No chemicals means pure, unadulterated oil. What you get:',
            points: [
              'Lauric acid (50% of the oil)',
              'Vitamin E',
              'Natural antioxidants',
              'Essential fatty acids',
            ],
          },
          {
            heading: '2. The Only Oil That\'s Good for Both Eating & Applying.',
            text: 'Most oils are either for cooking OR skincare. Not this one. Organic cold-pressed coconut oil is versatile enough to:',
            points: [
              'Moisturize your skin',
              'Nourish your hair',
              'Fry your favorite foods',
              'Enhance your coffee',
              'Bake healthier treats',
            ],
            details: [
              {
                title: 'For Cooking:',
                text: 'High smoke point (350°F) means it won\'t break down during frying. Non-oxidizing properties keep your food healthy. Plus, it supports fat metabolism—your body actually uses it for energy instead of storing it.',
              },
              {
                title: 'For Skin:',
                text: 'The molecular structure matches your skin\'s natural lipids, so it absorbs quickly without feeling greasy. Perfect for dry patches, cuticles, and even as a natural makeup remover.',
              },
              {
                title: 'For Hair:',
                text: 'Lauric acid penetrates deep into the hair shaft, providing moisture from within. Say goodbye to frizz, split ends, and dullness.',
              },
            ],
          },
        ],
      },
      productImages: {
        hero: 'https://picsum.photos/seed/blog-hero/800/600',
        grid: [
          'https://picsum.photos/seed/blog-grid1/400/400',
          'https://picsum.photos/seed/blog-grid2/400/400',
          'https://picsum.photos/seed/blog-grid3/400/400',
          'https://picsum.photos/seed/blog-grid4/400/400',
        ],
      },
    },
  };

  return blogs[id as keyof typeof blogs] || null;
};

// Related blogs data
const relatedBlogs = [
  {
    id: 2,
    category: 'ORGANIC',
    categoryBg: 'bg-lime-500',
    title: 'How to Create a Sustainable Home with Organic Products',
    author: 'UrbanTech',
    date: 'Oct 12, 2023',
    image: 'https://picsum.photos/seed/related1/600/400',
  },
  {
    id: 3,
    category: 'BEAUTY',
    categoryBg: 'bg-amber-300',
    title: 'How to Create a Sustainable Home with Organic Products',
    author: 'UrbanTech',
    date: 'Oct 12, 2023',
    image: 'https://picsum.photos/seed/related2/600/400',
  },
  {
    id: 4,
    category: 'COSMETIC',
    categoryBg: 'bg-violet-400',
    title: 'How to Create a Sustainable Home with Organic Products',
    author: 'UrbanTech',
    date: 'Oct 12, 2023',
    image: 'https://picsum.photos/seed/related3/600/400',
  },
];

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { id } = await params;
  const blog = getBlog(id);

  if (!blog) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-design-18 text-[var(--color-black)]">Blog not found</p>
      </div>
    );
  }

  return <BlogDetailClient blog={blog} relatedBlogs={relatedBlogs} />;
}
