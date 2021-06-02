import React from 'react';
import { useMediaQuery } from 'react-responsive';

const LoginDesktop = React.lazy(() => import('./desktop/index'));
const LoginMobile = React.lazy(() => import('./mobile/index'));

export default () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  if (isDesktop) {
    return <LoginDesktop />;
  } else {
    return <LoginMobile />;
  }
};
