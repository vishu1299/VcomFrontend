'use client';

import Image from 'next/image';

const services = [
  {
    icon: '/images/signin.png',
    title: '24/7 Customer Service',
    description:
      "We're here to help you with any questions or concerns you have, 24/7.",
  },
  {
    icon: '/images/forgot.png',
    title: '14-Day Money Back',
    description:
      "If you're not satisfied with your purchase, simply return it within 14 days for a refund.",
  },
  {
    icon: '/images/logo.png',
    title: 'Our Guarantee',
    description:
      'We stand behind our products and services and guarantee your satisfaction.',
  },
  {
    icon: '/images/otp.png',
    title: 'Shipping worldwide',
    description:
      'We ship our products worldwide, making them accessible to customers everywhere.',
  },
];

export default function ServiceGuaranteesSection() {
  return (
    <section
      aria-label="Service guarantees"
      className="flex w-full min-w-0 justify-center"
    >
      <div className="w-full rounded-[12px] bg-white p-6 sm:rounded-[16px] sm:p-8 lg:p-10 xl:p-[40px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8 xl:gap-10">
          {services.map((service, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-3 sm:gap-4 max-w-[300px] mx-auto sm:mx-0"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 relative">
                <Image
                  src={service.icon}
                  alt=""
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>

              {/* Title */}
              <h3 className="text-design-14 sm:text-design-16 font-semibold text-[var(--color-black)]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[11px] sm:text-[12px] font-normal text-[var(--color-muted-alt-2)] leading-[18px] sm:leading-[20px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
