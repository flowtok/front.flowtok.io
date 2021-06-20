import React, { FC, useEffect } from 'react';
import { BloggerLayout } from './BloggerLayout';
import { useLazyQuery, useReactiveVar } from '@apollo/client';
import { currentUserVar, isRegisteredVar } from '../../api/cache';

import { QueryHandler } from './QueryHandler';
import { AdvertiserLayout } from './AdvertiserLayout';
import { Redirect } from 'react-router-dom';
import { ME } from '../../api/queries';

type AuthLayoutPropsT = any;

export const AuthLayout: FC<AuthLayoutPropsT> = ({}) => {
  const user = useReactiveVar(currentUserVar);
  const isRegistered = useReactiveVar(isRegisteredVar);

  const [runQuery, { called, loading, data, error }] = useLazyQuery(ME);

  useEffect(() => {
    if (!user?.tagName) {
      runQuery();
    }
  }, []);

  useEffect(() => {
    currentUserVar(data?.me);
  }, [data]);

  if (isRegistered) {
    return (
      <QueryHandler loading={loading} error={error}>
        {user?.typeUser === 0 ? <BloggerLayout /> : <AdvertiserLayout />}
      </QueryHandler>
    );
  } else {
    return <Redirect to={'/signup'} />;
  }
};
