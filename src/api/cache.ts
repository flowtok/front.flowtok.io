import { InMemoryCache, makeVar } from '@apollo/client';
import { User } from '../models/models';

export const currentUserVar = makeVar<User | null>(null);
export const isAuthVar = makeVar<boolean>(!!localStorage.getItem('token'));

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isAuth: {
          read() {
            return isAuthVar();
          },
        },
      },
    },
  },
});
