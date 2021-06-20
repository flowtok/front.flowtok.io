import React from 'react';
import { useMediaQuery } from 'react-responsive';

const SignUpDesktop = React.lazy(() => import('./desktop/index'));
const SignUpMobile = React.lazy(() => import('./mobile/index'));

export default () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const registerType = localStorage.getItem('registerType');

  if (isDesktop) {
    return <SignUpDesktop registerType={registerType} />;
  } else {
    return <SignUpMobile registerType={registerType} />;
  }
};
