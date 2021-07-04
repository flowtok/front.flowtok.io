import React, { FC, useEffect } from 'react';
import { useLazyQuery, useReactiveVar } from '@apollo/client';
import { currentUserVar } from '../../api/cache';
import { QueryHandler } from './QueryHandler';
import { ME } from '../../api/queries';

const BloggerLayout = React.lazy(() => import('./BloggerLayout'));
const AdvertiserLayout = React.lazy(() => import('./AdvertiserLayout'));

type AuthLayoutPropsT = any;

const AuthLayout: FC<AuthLayoutPropsT> = ({}) => {
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
      localStorage.setItem('emoji', data?.me?.verifyTikTokCode);
    }
  }, [data]);

  return (
    <QueryHandler loading={loading} error={error}>
      {user?.typeUser === 0 ? <BloggerLayout /> : <AdvertiserLayout />}
    </QueryHandler>
  );
};

export default AuthLayout;
