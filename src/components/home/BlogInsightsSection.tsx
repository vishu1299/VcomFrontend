'use client';

import Image from 'next/image';
import Link from 'next/link';

const posts = [
  {
    category: 'BEAUTY',
    categoryBg: 'bg-amber-300',
    title:
      'Exploring the World of Organic Beauty: Tips and Trends for a Natural Glow',
    author: 'Terry Nguyen',
    date: 'Oct 12, 2023',
    image: '/images/signin.png',
  },
  {
    category: 'COSMETIC',
    categoryBg: 'bg-violet-400',
    title: 'The Benefits of Going Organic: A Guide to Healthier Living',
    author: 'Terry Nguyen',
    date: 'Oct 12, 2023',
    image: '/images/create.png',
  },
  {
    category: 'ORGANIC',
    categoryBg: 'bg-lime-500',
    title: 'How to Create a Sustainable Home with Organic Products',
    author: 'Terry Nguyen',
    date: 'Oct 12, 2023',
    image: '/images/logo.png',
  },
];

export default function BlogInsightsSection() {
  return (
    <section className="w-full min-w-0 py-2 sm:py-4" aria-label="Blog insights">
      <div className="text-center mb-6 sm:mb-8">
        <span className="inline-block text-design-14 font-medium bg-[var(--color-main-blue)] text-white px-4 py-2 rounded-md mb-3">
          LATEST NEWS
        </span>
        <h2 className="text-design-24 sm:text-design-32 font-semibold text-[var(--color-black)]">
          Blog Insights
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {posts.map((post, i) => (
          <article
            key={i}
            className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-sm hover:shadow transition flex flex-col"
          >
            <div className="relative aspect-[5/3] bg-[var(--color-border)]">
              <Image
                src={post.image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-4 sm:p-6 flex flex-col flex-1">
              <span
                className={`inline-block text-[10px] sm:text-[12px] font-medium ${post.categoryBg} text-[#FFFFFF] px-1  rounded w-fit mb-3`}
              >
                {post.category}
              </span>
              <h3 className="text-design-16 sm:text-design-18 font-semibold text-[var(--color-black)] line-clamp-3 mb-3 flex-1">
                {post.title}
              </h3>
              <div className="flex items-center gap-2 text-design-14 text-[var(--color-muted-alt-2)]">
                <span className="w-6 h-6 rounded-full bg-[var(--color-main-blue)] shrink-0" />
                <span>VBCOntact</span>
                <span>By {post.author}</span>
                <span>{post.date}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center mt-6 sm:mt-8">
        <Link
          href="#"
          className="text-design-14 sm:text-design-16 font-medium text-[var(--color-black)] hover:underline"
        >
          View all
        </Link>
      </div>
    </section>
  );
}
