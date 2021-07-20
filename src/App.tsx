import React, { Suspense } from 'react';
import { useReactiveVar } from '@apollo/client';
import { isRegisteredVar, tokenExistVar } from './api/cache';

const AuthLayout = React.lazy(
  () => import('./components/templates/AuthLayout/AuthLayout')
);

const NonAuthLayout = React.lazy(
  () => import('./components/templates/NonAuthLayout')
);

export const App = () => {
  const tokenExist = useReactiveVar(tokenExistVar);
  const isRegistered = useReactiveVar(isRegisteredVar);
  return (
    <div style={{ position: 'relative' }}>
      <Suspense fallback={<div>Loading...</div>}>
        {tokenExist && isRegistered ? <AuthLayout /> : <NonAuthLayout />}
      </Suspense>
    </div>
  );
};
