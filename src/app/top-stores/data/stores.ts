import type { StoreCardProps } from '../components/StoreCard';

const RED = '#dc2626';
const GREEN = '#10B981';
const CYAN = '#06B6D4';
const PINK = '#E11D48';
const DARK_BLUE = '#1E40AF';
const GOLD = '#FACC15';
const ELITE = '#E9CE73';

const baseStore = {
  name: 'FitGear Official Store',
  rating: 4.9,
  reviewCount: '2.4K',
};

export const TOP_STORES: StoreCardProps[] = [
  {
    id: '1',
    ...baseStore,
    avatar: '/images/1.png',
    badges: [
      { label: 'LIVE NOW', bg: RED },
      { label: 'NEW ARRIVAL', bg: GREEN },
      { label: 'FAST SHIPPER', bg: CYAN },
      { label: 'Elite Store', bg: ELITE },

    ],
  },
  {
    id: '2',
    ...baseStore,
    avatar: '/images/2.png',
    badges: [
      { label: 'TRENDING NOW', bg: PINK },
      { label: 'TOP STORE', bg: DARK_BLUE },
    ],
  },
  {
    id: '3',
    ...baseStore,
    avatar: '/images/3.png',
    badges: [
      { label: 'FAST SHIPPER', bg: CYAN },
      { label: 'FLASH DEAL', bg: RED },
      { label: 'ACTIVE', bg: RED },
    ],
  },
  {
    id: '4',
    ...baseStore,
    avatar: '/images/4.png',
    badges: [
      { label: 'TRENDING NOW', bg: PINK },
      { label: 'EXCLUSIVE STORY', bg: RED },
    ],
  },
  {
    id: '5',
    ...baseStore,
    avatar: '/images/1.png',
    badges: [
      { label: 'TRENDING NOW', bg: PINK },
      { label: 'TOP STORE', bg: DARK_BLUE },
    ],
  },
  {
    id: '6',
    ...baseStore,
    avatar: '/images/2.png',
    badges: [
      { label: 'LIVE NOW', bg: RED },
      { label: 'TOP STORE', bg: DARK_BLUE },
      { label: 'NEW ARRIVAL', bg: GREEN },
    ],
  },
  {
    id: '7',
    ...baseStore,
    avatar: '/images/3.png',
    badges: [
      { label: 'TRENDING NOW', bg: PINK },
      { label: 'TOP STORE', bg: DARK_BLUE },
    ],
  },
  {
    id: '8',
    ...baseStore,
    avatar: '/images/4.png',
    badges: [
      { label: 'TRENDING NOW', bg: PINK },
      { label: 'TOP STORE', bg: DARK_BLUE },
    ],
  },
  {
    id: '9',
    ...baseStore,
    avatar: '/images/1.png',
    badges: [
      { label: 'LIVE NOW', bg: RED },
      { label: 'NEW ARRIVAL', bg: GREEN },
      { label: 'FAST SHIPPER', bg: CYAN },
    ],
  },
  {
    id: '10',
    ...baseStore,
    avatar: '/images/2.png',
    badges: [
      { label: 'TRENDING NOW', bg: PINK },
      { label: 'TOP STORE', bg: DARK_BLUE },
    ],
  },
  {
    id: '11',
    ...baseStore,
    avatar: '/images/3.png',
    badges: [
      { label: 'NEW ARRIVAL', bg: GREEN },
      { label: 'TOP STORE', bg: DARK_BLUE },
    ],
  },
  {
    id: '12',
    ...baseStore,
    avatar: '/images/4.png',
    badges: [
      { label: 'TOP STORE', bg: DARK_BLUE },
      { label: 'FAST SHIPPER', bg: CYAN },
    ],
  },
  {
    id: '13',
    ...baseStore,
    avatar: '/images/1.png',
    badges: [
      { label: 'TOP PROMOTER', bg: GOLD },
      { label: 'TOP STORE', bg: DARK_BLUE },
    ],
  },
  {
    id: '14',
    ...baseStore,
    avatar: '/images/2.png',
    badges: [
      { label: 'TRENDING NOW', bg: PINK },
      { label: 'TOP STORE', bg: DARK_BLUE },
    ],
  },
  {
    id: '15',
    ...baseStore,
    avatar: '/images/3.png',
    badges: [
      { label: 'TOP PROMOTER', bg: GOLD },
      { label: 'TOP STORE', bg: DARK_BLUE },
    ],
  },
  {
    id: '16',
    ...baseStore,
    avatar: '/images/1.png',
    badges: [
      { label: 'TRENDING NOW', bg: PINK },
      { label: 'TOP STORE', bg: DARK_BLUE },
    ],
  },
  {
    id: '17',
    ...baseStore,
    avatar: '/images/10.png',
    badges: [
      { label: 'TRENDING NOW', bg: PINK },
      { label: 'TOP STORE', bg: DARK_BLUE },
    ],
  },
  {
    id: '18',
    ...baseStore,
    avatar: '/images/3.png',
    badges: [
      { label: 'TRENDING NOW', bg: PINK },
      { label: 'TOP STORE', bg: DARK_BLUE },
    ],
  },
  {
    id: '19',
    ...baseStore,
    avatar: '/images/9.png',
    badges: [
      { label: 'TRENDING NOW', bg: PINK },
      { label: 'TOP STORE', bg: DARK_BLUE },
    ],
  },
  {
    id: '20',
    ...baseStore,
    avatar: '/images/8.png',
    badges: [
      { label: 'TRENDING NOW', bg: PINK },
      { label: 'TOP STORE', bg: DARK_BLUE },
    ],
  },
  {
    id: '21',
    ...baseStore,
    avatar: '/images/7.png',
    badges: [
      { label: 'TRENDING NOW', bg: PINK },
      { label: 'TOP STORE', bg: DARK_BLUE },
    ],
  },
  {
    id: '22',
    ...baseStore,
    avatar: '/images/6.png',
    badges: [
      { label: 'TRENDING NOW', bg: PINK },
      { label: 'TOP STORE', bg: DARK_BLUE },
    ],
  },
  {
    id: '23',
    ...baseStore,
    avatar: '/images/4.png',
    badges: [
      { label: 'TRENDING NOW', bg: PINK },
      { label: 'TOP STORE', bg: DARK_BLUE },
    ],
  },
  {
    id: '24',
    ...baseStore,
    avatar: '/images/5.png',
    badges: [
      { label: 'TRENDING NOW', bg: PINK },
      { label: 'TOP STORE', bg: DARK_BLUE },
    ],
  },
];

export const RECOMMENDED_STORES: StoreCardProps[] = [
  {
    id: 'rec-1',
    ...baseStore,
    avatar: '/images/1.png',
    badges: [
      { label: 'LIVE NOW', bg: RED },
      { label: 'TOP STORE', bg: DARK_BLUE },
      { label: 'TRENDING NOW', bg: PINK },
    ],
  },
  {
    id: 'rec-2',
    ...baseStore,
    avatar: '/images/2.png',
    badges: [
      { label: 'TRENDING NOW', bg: PINK },
      { label: 'TOP FASHION', bg: DARK_BLUE },
    ],
  },
  {
    id: 'rec-3',
    ...baseStore,
    avatar: '/images/3.png',
    badges: [
      { label: 'ELITE', bg: ELITE },
      { label: 'TOP STORE', bg: DARK_BLUE },
      { label: 'TRENDING NOW', bg: PINK },
    ],
  },
  {
    id: 'rec-4',
    ...baseStore,
    avatar: '/images/4.png',
    badges: [
      { label: 'ELITE', bg: ELITE },
      { label: 'TRENDING NOW', bg: PINK },
    ],
  },
  {
    id: 'rec-5',
    ...baseStore,
    avatar: '/images/5.png',
    badges: [
      { label: 'ELITE', bg: ELITE },
      { label: 'TOP STORE', bg: DARK_BLUE },
      { label: 'TRENDING NOW', bg: PINK },
    ],
  },
  {
    id: 'rec-6',
    ...baseStore,
    avatar: '/images/6.png',
    badges: [
      { label: 'LIVE NOW', bg: RED },
      { label: 'TOP STORE', bg: DARK_BLUE },
      { label: 'TRENDING NOW', bg: PINK },
    ],
  },
  {
    id: 'rec-7',
    ...baseStore,
    avatar: '/images/7.png',
    badges: [
      { label: 'TOP STORE', bg: DARK_BLUE },
      { label: 'TRENDING NOW', bg: PINK },
    ],
  },
  {
    id: 'rec-8',
    ...baseStore,
    avatar: '/images/8.png',
    badges: [
      { label: 'LIVE NOW', bg: RED },
      { label: 'TOP STORE', bg: DARK_BLUE },
    ],
  },
  {
    id: 'rec-9',
    ...baseStore,
    avatar: '/images/9.png',
    badges: [
      { label: 'LIVE NOW', bg: RED },
      { label: 'NEW ARRIVAL', bg: GREEN },
      { label: 'FAST SHIPPER', bg: CYAN },
    ],
  },
  {
    id: 'rec-10',
    ...baseStore,
    avatar: '/images/10.png',
    badges: [
      { label: 'EXCLUSIVE STORY', bg: RED },
      { label: 'ELITE', bg: ELITE },
    ],
  },
  {
    id: 'rec-11',
    ...baseStore,
    avatar: '/images/3.png',
    badges: [
      { label: 'LIVE NOW', bg: RED },
      { label: 'TOP STORE', bg: DARK_BLUE },
    ],
  },
  {
    id: 'rec-12',
    ...baseStore,
    avatar: '/images/1.png',
    badges: [
      { label: 'TRENDING NOW', bg: PINK },
      { label: 'FAST SHIPPER', bg: CYAN },
    ],
  },
  
];
