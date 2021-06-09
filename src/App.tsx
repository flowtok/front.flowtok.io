import React, { Suspense, useEffect } from 'react';
import { AuthLayout } from './components/templates/AuthLayout';
import { gql, useLazyQuery } from '@apollo/client';
import { LoginResponse, QueryLoginArgs } from './models/models';
import { currentUserVar } from './api/cache';

const LOGIN = gql`
  query getQuery($name: String!, $password: String!) {
    login(name: $name, password: $password) {
      user {
        name
        tagName
        userImage
        balance
        avgViews
        price
        goodRate
        heldMoney
        totalEarnings
        refLink
        refCount
        refEarnings
        history {
          value
          date
          type
        }
      }
    }
  }
`;

export const App = () => {
  const tokenFromStorage = localStorage.getItem('token');

  const [runQuery, { called, loading, data }] = useLazyQuery<
    { login: LoginResponse },
    QueryLoginArgs
  >(LOGIN);

  useEffect(() => {
    if (tokenFromStorage) {
      runQuery({
        variables: {
          name: 'Ketty Bounce',
          password: '1234567',
        },
      });
    }
  }, []);

  useEffect(() => {
    currentUserVar(data?.login.user);
  }, [data]);

  return (
    <div style={{ position: 'relative' }}>
      <Suspense fallback={<div>Loading...</div>}>
        <AuthLayout />
      </Suspense>
    </div>
  );
};
