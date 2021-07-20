import { InMemoryCache, makeVar } from '@apollo/client';

export const isRegisteredVar = makeVar<boolean>(
  localStorage.getItem('registered') === 'true'
);
export const tokenExistVar = makeVar<boolean>(!!localStorage.getItem('token'));

export const cache = new InMemoryCache();
