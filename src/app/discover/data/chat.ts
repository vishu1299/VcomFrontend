export type ChatMessage = {
  id: string;
  username: string;
  avatar: string;
  text: string;
  time: string;
};

export const STORE_CHAT_MESSAGES: ChatMessage[] = [
  { id: '1', username: 'User456', avatar: '/images/logo.png', text: "It was okay, but I've seen better.", time: '03:15 PM' },
  { id: '2', username: 'User123', avatar: '/images/logo.png', text: 'Absolutely loved it! Best experience ever!', time: '01:20 PM' },
  { id: '3', username: 'User789', avatar: '/images/logo.png', text: 'Great quality and fast shipping.', time: '12:45 PM' },
  { id: '4', username: 'User321', avatar: '/images/logo.png', text: 'Would definitely recommend to friends.', time: '11:30 AM' },
  { id: '5', username: 'User654', avatar: '/images/logo.png', text: 'The product exceeded my expectations.', time: '10:15 AM' },
  { id: '6', username: 'User111', avatar: '/images/logo.png', text: 'Customer service was very helpful.', time: '09:00 AM' },
  { id: '7', username: 'User222', avatar: '/images/logo.png', text: 'Came exactly as described. Happy with purchase.', time: '08:22 AM' },
  { id: '8', username: 'User333', avatar: '/images/logo.png', text: 'Quick delivery and well packaged.', time: '07:10 AM' },
];
