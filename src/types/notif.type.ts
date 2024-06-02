export type Notification = {
  _id: string;
  user: {
    name: string;
    userImage: string;
  };
  createdAt: string;
  action?: string;
  destination?: string;
  isRead: boolean;
  message?: string;
  assetImage?: string;
};
