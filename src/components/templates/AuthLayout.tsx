import React, { FC, useEffect } from 'react';
import { BloggerLayout } from './BloggerLayout';
import { useLazyQuery, useReactiveVar } from '@apollo/client';
import { currentUserVar } from '../../api/cache';

import { QueryHandler } from './QueryHandler';
import { AdvertiserLayout } from './AdvertiserLayout';
import { ME } from '../../api/queries';

type AuthLayoutPropsT = any;

export const AuthLayout: FC<AuthLayoutPropsT> = ({}) => {
  const user = useReactiveVar(currentUserVar);

  const [runQuery, { loading, data, error }] = useLazyQuery(ME);

  useEffect(() => {
    if (!user) {
      runQuery();
    }
  }, []);

  useEffect(() => {
    if (data) {
      currentUserVar(data?.me);
    }
  }, [data]);

  return (
    <QueryHandler loading={loading} error={error}>
      {user?.typeUser === 0 ? <BloggerLayout /> : <AdvertiserLayout />}
    </QueryHandler>
  );
};
