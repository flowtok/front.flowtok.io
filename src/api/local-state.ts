import { makeVar } from '@apollo/client';

export const isRegisteredVar = makeVar<boolean>(
  localStorage.getItem('registered') === 'true'
);
export const tokenExistVar = makeVar<boolean>(!!localStorage.getItem('token'));
export const notificationVar = makeVar<null | NotificationT>(null);

export type NotificationT = {
  message: string;
  type: NotificationTypeT;
};

export type NotificationTypeT = 'error' | 'success' | 'alert';
