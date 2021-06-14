import React, { Suspense } from 'react';
import { AuthLayout } from './components/templates/AuthLayout';
import { NonAuthLayout } from './components/templates/NonAuthLayout';
import { useReactiveVar } from '@apollo/client';
import { tokenExistVar } from './api/cache';

export const App = () => {
  const tokenExist = useReactiveVar(tokenExistVar);

  return (
    <div style={{ position: 'relative' }}>
      <Suspense fallback={<div>Loading...</div>}>
        {tokenExist ? <AuthLayout /> : <NonAuthLayout />}
      </Suspense>
    </div>
  );
};
