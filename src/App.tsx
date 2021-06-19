import React, { Suspense } from 'react';
import { AuthLayout } from './components/templates/AuthLayout';
import { NonAuthLayout } from './components/templates/NonAuthLayout';
import { useReactiveVar } from '@apollo/client';
import { isRegisteredVar, tokenExistVar } from './api/cache';

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
