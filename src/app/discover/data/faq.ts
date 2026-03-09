export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export const DISCOVER_FAQS: FAQItem[] = [
  {
    id: '1',
    question: 'How long does the shipping process take?',
    answer:
      'The Lumina X2000 comes with a one-year warranty that covers manufacturer defects, malfunctions, and component failures. It does not cover damage from misuse, accidents, or unauthorized modifications. For full details, please refer to the warranty documentation included with your product or visit our website.',
  },
  {
    id: '2',
    question: 'Are there any discounts for bulk purchases?',
    answer:
      'Yes. We offer tiered discounts for bulk orders. Contact our sales team with your quantity and product list for a custom quote.',
  },
  {
    id: '3',
    question: 'What is the return policy for unsatisfactory items?',
    answer:
      'You may return most unused items within 30 days of delivery for a full refund. Items must be in original packaging. Some exclusions apply; see our Returns page for details.',
  },
  {
    id: '4',
    question: "Can I track my order after it's been placed?",
    answer:
      'Yes. Once your order ships, you will receive an email with a tracking link. You can also track orders from your account dashboard.',
  },
  {
    id: '5',
    question: 'What payment methods do you accept?',
    answer:
      'We accept major credit cards, debit cards, PayPal, and select buy-now-pay-later options at checkout.',
  },
  {
    id: '6',
    question: 'How long does shipping usually take?',
    answer:
      'Standard shipping typically takes 5–7 business days. Express options are available at checkout for faster delivery.',
  },
  {
    id: '7',
    question: 'Do you offer gift wrapping services?',
    answer:
      'Yes. Gift wrapping is available at checkout for a small fee. You can add a gift message during purchase.',
  },
];
