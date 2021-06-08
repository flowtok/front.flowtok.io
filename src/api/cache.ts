import { InMemoryCache, makeVar } from '@apollo/client';
import { User } from '../models/models';

export const currentUserVar = makeVar<User | null>(null);

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        user: {
          read() {
            return currentUserVar();
          },
        },
      },
    },
  },
});
