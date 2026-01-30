'use client';

import { MessageCircle, RotateCcw, CheckCircle, Package } from 'lucide-react';

const services = [
  {
    icon: MessageCircle,
    title: '24/7 Customer Service',
    description:
      "We're here to help you with any questions or concerns you may have, 24/7.",
  },
  {
    icon: RotateCcw,
    title: '14-Day Money Back',
    description:
      "If you're not satisfied with your purchase, simply return it within 14 days for a refund.",
  },
  {
    icon: CheckCircle,
    title: 'Our Guarantee',
    description:
      'We stand behind our products to ensure you receive only genuine products and services that guarantee your satisfaction.',
  },
  {
    icon: Package,
    title: 'Shipping Worldwide',
    description:
      'We ship our products worldwide, making them accessible to customers everywhere.',
  },
];

export default function ServiceGuaranteesSection() {
  return (
    <section className="mt-8 sm:mt-10 lg:mt-12 py-8 sm:py-10 bg-white rounded-xl sm:rounded-2xl border border-[var(--color-border)]" aria-label="Service guarantees">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {services.map((service, i) => (
          <article key={i} className="flex flex-col items-center text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[var(--color-main-blue)]/10 flex items-center justify-center mb-4">
              <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--color-main-blue)]" />
            </div>
            <h3 className="text-design-16 sm:text-design-18 font-semibold text-[var(--color-black)] mb-2">
              {service.title}
            </h3>
            <p className="text-design-14 sm:text-design-16 text-[var(--color-muted-alt-2)] leading-relaxed">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
