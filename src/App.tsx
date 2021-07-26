import React, { Suspense } from 'react';
import { useReactiveVar } from '@apollo/client';
import {
  isRegisteredVar,
  notificationVar,
  tokenExistVar,
} from './graphql/local-state';
import { Notification } from './components/molecules/Notification';

const AuthLayout = React.lazy(
  () => import('./components/templates/AuthLayout/AuthLayout')
);

const NonAuthLayout = React.lazy(
  () => import('./components/templates/NonAuthLayout')
);

export const App = () => {
  const tokenExist = useReactiveVar(tokenExistVar);
  const isRegistered = useReactiveVar(isRegisteredVar);
  const notification = useReactiveVar(notificationVar);
  return (
    <div style={{ position: 'relative' }}>
      <Suspense fallback={<div>Loading...</div>}>
        {tokenExist && isRegistered ? <AuthLayout /> : <NonAuthLayout />}
      </Suspense>
      {notification && <Notification notification={notification} />}
    </div>
  );
};
