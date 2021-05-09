import React from 'react';
import { useMediaQuery } from 'react-responsive';

const SignUpDesktop = React.lazy(() => import('./desktop/index'));
const SignUpMobile = React.lazy(() => import('./mobile/index'));

export default () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  if (isDesktop) {
    return <SignUpDesktop />;
  } else {
    return <SignUpMobile />;
  }
};
