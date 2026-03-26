export type ChatMessage = {
  id: string;
  username: string;
  avatar: string;
  text: string;
  time: string;
};

export type ChatDivider = {
  type: 'divider';
  label: string;
};

export type ChatMessageRow = ChatMessage | ChatDivider;

export const STORE_CHAT_MESSAGES: ChatMessageRow[] = [
  { type: 'divider', label: '2:00 AM' },
  {
    id: '1',
    username: 'Username32',
    avatar: '/images/logo.png',
    text: 'Great Product!!!!',
    time: '02:32 PM',
  },
  {
    id: '2',
    username: 'Username32',
    avatar: '/images/logo.png',
    text: 'Damn that camera zoom is insane!',
    time: '02:35 PM',
  },
  { type: 'divider', label: '2:21 AM' },
  {
    id: '3',
    username: 'User456',
    avatar: '/images/logo.png',
    text: "It was okay, but I've seen better.",
    time: '03:15 PM',
  },
  {
    id: '4',
    username: 'User123',
    avatar: '/images/logo.png',
    text: 'Absolutely loved it! Best experience ever!',
    time: '01:20 PM',
  },
  {
    id: '5',
    username: 'User789',
    avatar: '/images/logo.png',
    text: 'Great quality and fast shipping.',
    time: '12:45 PM',
  },
  {
    id: '6',
    username: 'User321',
    avatar: '/images/logo.png',
    text: 'Would definitely recommend to friends.',
    time: '11:30 AM',
  },
];

export function isChatDivider(row: ChatMessageRow): row is ChatDivider {
  return 'type' in row && row.type === 'divider';
}
