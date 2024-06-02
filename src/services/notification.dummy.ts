import { Notification } from '@/types/notif.type';

const dummyNotification: Notification[] = [
  {
    _id: 'notif1',
    user: {
      name: 'Mark Webber',
      userImage: 'avatar-mark-webber.webp',
    },
    isRead: false,
    action: 'reacted to your recent post',
    destination: 'My first tournament today!',
    createdAt: '1m ago',
  },
  {
    _id: 'notif2',
    user: {
      name: 'Angela Gray',
      userImage: 'avatar-angela-gray.webp',
    },
    isRead: false,
    action: 'followed you',
    createdAt: '5m ago',
  },
  {
    _id: 'notif3',
    user: {
      name: 'Jacob Thompson',
      userImage: 'avatar-jacob-thompson.webp',
    },
    isRead: false,
    action: 'has joined your group',
    destination: 'Chess Club',
    createdAt: '1 day ago',
  },
  {
    _id: 'notif4',
    user: {
      name: 'Rizky Hasanuddin',
      userImage: 'avatar-rizky-hasanuddin.webp',
    },
    isRead: true,
    action: 'sent you a private message',
    createdAt: '5 days ago',
    message:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem a, eligendi quis nam impedit sapiente quo sequi nulla saepe provident!',
  },
  {
    _id: 'notif5',
    user: {
      name: 'Kimberly Smith',
      userImage: 'avatar-kimberly-smith.webp',
    },
    isRead: true,
    action: 'commented on your picture',
    createdAt: '1 week ago',
    assetImage: 'image-chess.webp',
  },
  {
    _id: 'notif6',
    user: {
      name: 'Nathan Peterson',
      userImage: 'avatar-nathan-peterson.webp',
    },
    isRead: true,
    action: 'reacted to your recent post',
    createdAt: '2 weeks ago',
    destination: '5 end-game strategies to increase your win rate',
  },
  {
    _id: 'notif7',
    user: {
      name: 'Anna Kim',
      userImage: 'avatar-anna-kim.webp',
    },
    isRead: true,
    action: 'left the group',
    destination: 'Chess Club',
    createdAt: '2 weeks ago',
  },
];

export default dummyNotification;
