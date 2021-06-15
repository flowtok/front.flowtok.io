import React, { FC } from 'react';
import { BloggerLayout } from './BloggerLayout';
import { useQuery, useReactiveVar } from '@apollo/client';
import { currentUserVar } from '../../api/cache';
import { User, UserType } from '../../models/models';
import { USER } from '../../api/queries';
import { QueryHandler } from './QueryHandler';
import { AdvertiserLayout } from './AdvertiserLayout';

type AuthLayoutPropsT = any;

export const AuthLayout: FC<AuthLayoutPropsT> = ({}) => {
  const user = useReactiveVar(currentUserVar);

  const { loading, error } = useQuery<{ user: User }>(USER, {
    onCompleted: (data) => {
      currentUserVar(data?.user);
    },
  });

  return (
    <QueryHandler loading={loading} error={error}>
      {user &&
        (user?.type === UserType.Blogger ? (
          <BloggerLayout />
        ) : (
          <AdvertiserLayout />
        ))}
    </QueryHandler>
  );
};
