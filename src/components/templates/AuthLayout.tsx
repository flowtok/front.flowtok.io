import React, { FC } from 'react';
import { BloggerLayout } from './BloggerLayout';
import { useReactiveVar } from '@apollo/client';
import { currentUserVar } from '../../api/cache';
import { NonAuthLayout } from './NonAuthLayout';

type AuthLayoutPropsT = any;

export const AuthLayout: FC<AuthLayoutPropsT> = ({}) => {
  const user = useReactiveVar(currentUserVar);
  if (user) {
    return <BloggerLayout />;
  } else {
    return <NonAuthLayout />;
  }
};
