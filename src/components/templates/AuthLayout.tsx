import React, { FC, useEffect } from 'react';
import { BloggerLayout } from './BloggerLayout';
import { useQuery, useReactiveVar } from '@apollo/client';
import { currentUserVar, isRegisteredVar } from '../../api/cache';
import { User, UserType } from '../../models/models';
import { USER } from '../../api/queries';
import { QueryHandler } from './QueryHandler';
import { AdvertiserLayout } from './AdvertiserLayout';
import { Redirect } from 'react-router-dom';

type AuthLayoutPropsT = any;

export const AuthLayout: FC<AuthLayoutPropsT> = ({}) => {
  const user = useReactiveVar(currentUserVar);
  const isRegistered = useReactiveVar(isRegisteredVar);

  const { data, loading, error } = useQuery<{ user: User }>(USER);

  useEffect(() => {
    if (!data?.user?.tagName) {
      isRegisteredVar(false);
    }
    currentUserVar(data?.user);
  }, [data]);

  if (isRegistered) {
    return (
      <QueryHandler loading={loading} error={error}>
        {user?.typeUser === UserType.Blogger ? (
          <BloggerLayout />
        ) : (
          <AdvertiserLayout />
        )}
      </QueryHandler>
    );
  } else {
    return <Redirect to={'/signup'} />;
  }
};
