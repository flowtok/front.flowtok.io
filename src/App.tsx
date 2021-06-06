import React, { Suspense } from 'react';
import { AuthLayout } from './components/templates/AuthLayout';

export const App = () => {
  return (
    <div style={{ position: 'relative' }}>
      {/*<PopUp isOpen={true} size={'s'}>*/}
      {/*  <DonePopUpContent />*/}
      {/*</PopUp>*/}
      <Suspense fallback={<div>Loading...</div>}>
        {/* here will be if-else block */}
        <AuthLayout />
        {/*<NonAuthLayout />*/}
      </Suspense>
    </div>
  );
};
