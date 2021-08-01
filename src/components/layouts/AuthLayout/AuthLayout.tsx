import React, { FC, useEffect } from 'react';
import { useMeQuery } from '@/types/graphql';
import { QueryHandler } from '../../handlers/QueryHandler';

const BloggerRoutes = React.lazy(() => import('../BloggerLayout'));
const AdvertiserRoutes = React.lazy(() => import('../AdvertiserLayout'));

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
      {data?.me?.typeUser === 0 ? <BloggerRoutes /> : <AdvertiserRoutes />}
    </QueryHandler>
  );
};

export default AuthLayout;
