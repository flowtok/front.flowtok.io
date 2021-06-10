import React, { Suspense } from 'react';
import { AuthLayout } from './components/templates/AuthLayout';
import { NonAuthLayout } from './components/templates/NonAuthLayout';
import { isAuthVar } from './api/cache';

export const App = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Suspense fallback={<div>Loading...</div>}>
        {isAuthVar() ? <AuthLayout /> : <NonAuthLayout />}
      </Suspense>
    </div>
  );
};
