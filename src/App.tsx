import React, { Suspense } from 'react';
import { AuthLayout } from './components/templates/AuthLayout';
import { NonAuthLayout } from './components/templates/NonAuthLayout';
import { isAuthVar } from './api/cache';
import { useReactiveVar } from '@apollo/client';
import { formatDate, formatNumber } from './utils/FormatHelper';

export const App = () => {
  const isAuth = useReactiveVar(isAuthVar);

  console.log('1231231: ', formatNumber(1231231));
  console.log(1616045239, formatDate(1616045239));
  return (
    <div style={{ position: 'relative' }}>
      <Suspense fallback={<div>Loading...</div>}>
        {isAuth ? <AuthLayout /> : <NonAuthLayout />}
      </Suspense>
    </div>
  );
};
