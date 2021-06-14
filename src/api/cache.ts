import { InMemoryCache, makeVar } from '@apollo/client';
import { User } from '../models/models';

export const currentUserVar = makeVar<User | null>(null);
export const isRegisteredVar = makeVar<boolean>(
  localStorage.getItem('registered') === 'true'
);
export const tokenExistVar = makeVar<boolean>(!!localStorage.getItem('token'));

export const cache = new InMemoryCache();
