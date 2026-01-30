'use client';

import Link from 'next/link';

type SectionHeaderProps = {
  title: string;
  viewAllHref?: string;
  viewAllLabel?: string;
  icon?: React.ReactNode;
};

export default function SectionHeader({
  title,
  viewAllHref = '#',
  viewAllLabel = 'View All',
  icon,
}: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between gap-4 mb-4 sm:mb-5 lg:mb-6">
      <h2 className="flex items-center gap-2 text-design-18 sm:text-design-20 font-semibold text-[var(--color-black-01)]">
        {icon && <span className="shrink-0">{icon}</span>}
        {title}
      </h2>
      {viewAllHref && (
        <Link
          href={viewAllHref}
          className="text-design-14 sm:text-design-16 font-medium text-[var(--color-main-blue)] hover:underline shrink-0"
        >
          {viewAllLabel}
        </Link>
      )}
    </div>
  );
}
