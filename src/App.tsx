import React, { Suspense } from 'react';
import { AuthLayout } from './components/templates/AuthLayout';
import { NonAuthLayout } from './components/templates/NonAuthLayout';
import { isAuthVar } from './api/cache';
import { useReactiveVar } from '@apollo/client';

export const App = () => {
  const isAuth = useReactiveVar(isAuthVar);
  return (
    <div style={{ position: 'relative' }}>
      <Suspense fallback={<div>Loading...</div>}>
        {isAuth ? <AuthLayout /> : <NonAuthLayout />}
      </Suspense>
    </div>
  );
};
