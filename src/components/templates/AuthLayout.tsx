import React, { FC } from 'react';
import { BloggerLayout } from './BloggerLayout';
import { AdvertiserLayout } from './AdvertiserLayout';

type AuthLayoutPropsT = any;

export const AuthLayout: FC<AuthLayoutPropsT> = ({}) => {
  if (true) {
    return <BloggerLayout />;
  } else {
    return <AdvertiserLayout />;
  }
};
