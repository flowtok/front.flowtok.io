import React, { Suspense, useEffect } from 'react';
import { AuthLayout } from './components/templates/AuthLayout';
import { currentUserVar } from './api/cache';

export const App = () => {
  const userFromStorage = localStorage.getItem('user');

  useEffect(() => {
    if (userFromStorage !== undefined) {
      if (typeof userFromStorage === 'string') {
        currentUserVar(JSON.parse(userFromStorage));
      }
    }
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <Suspense fallback={<div>Loading...</div>}>
        <AuthLayout />
      </Suspense>
    </div>
  );
};
