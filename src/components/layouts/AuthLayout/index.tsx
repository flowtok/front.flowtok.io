import React, { FC, useEffect } from 'react';
import { useMeQuery } from '@root/types/graphql';
import { QueryHandler } from '../../handlers/QueryHandler';

const BloggerLayout = React.lazy(() => import('../BloggerLayout'));
const AdvertiserLayout = React.lazy(() => import('../AdvertiserLayout'));

type AuthLayoutPropsT = any;

const AuthLayout: FC<AuthLayoutPropsT> = ({}) => {
  const { loading, data, error } = useMeQuery();

  useEffect(() => {
    if (data && !data.me?.verifiedTikTok) {
      localStorage.setItem('emoji', String(data.me?.verifyTikTokCode));
    }
  }, [data]);

  return (
    <QueryHandler loading={loading} error={error}>
      {data?.me?.typeUser === 0 ? <BloggerLayout /> : <AdvertiserLayout />}
    </QueryHandler>
  );
};

export default AuthLayout;
